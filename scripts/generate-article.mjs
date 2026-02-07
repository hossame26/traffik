import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = join(__dirname, '..');
const BLOG_DIR = join(ROOT, 'public', 'blog');
const ARTICLES_DIR = join(BLOG_DIR, 'articles');
const INDEX_PATH = join(BLOG_DIR, 'index.json');
const QUEUE_PATH = join(ROOT, 'scripts', 'keywords-queue.json');

const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
if (!ANTHROPIC_API_KEY) {
  console.error('[SPIDER] ANTHROPIC_API_KEY not set');
  process.exit(1);
}

function getNextKeyword() {
  const queue = JSON.parse(readFileSync(QUEUE_PATH, 'utf-8'));
  const next = queue.find((k) => !k.done);
  if (!next) {
    console.log('[SPIDER] All keywords processed!');
    process.exit(0);
  }
  return { queue, keyword: next };
}

function markKeywordDone(queue, keyword) {
  keyword.done = true;
  keyword.processedDate = new Date().toISOString().split('T')[0];
  writeFileSync(QUEUE_PATH, JSON.stringify(queue, null, 2), 'utf-8');
}

function updateBlogIndex(article) {
  let index = [];
  if (existsSync(INDEX_PATH)) {
    index = JSON.parse(readFileSync(INDEX_PATH, 'utf-8'));
  }

  // Don't add duplicate
  if (index.some((a) => a.slug === article.slug)) return;

  index.push({
    slug: article.slug,
    title: article.title,
    date: article.date,
    excerpt: article.excerpt,
    keywords: article.keywords,
    readingTime: article.readingTime,
  });

  // Sort by date descending
  index.sort((a, b) => new Date(b.date) - new Date(a.date));
  writeFileSync(INDEX_PATH, JSON.stringify(index, null, 2), 'utf-8');
}

async function generateArticle(keyword) {
  const today = new Date().toISOString().split('T')[0];

  const prompt = `Tu es un rédacteur SEO expert français spécialisé dans le web et le marketing digital. Tu écris pour le blog de Traffik Web (traffik-web.fr), un freelance spécialisé dans la création de sites Shopify, WordPress, React et la publicité digitale.

Génère un article de blog SEO complet en JSON. Le keyword principal est : "${keyword.keyword}" (Tier ${keyword.tier}).

L'article doit être en français, entre 1500 et 2000 mots, avec :
- Un titre accrocheur et SEO-optimisé
- Un contenu structuré avec des balises HTML (h2 avec id, h3, p, ul, li, strong, a)
- Des liens internes vers : /creation-site-shopify, /creation-site-wordpress, /developpement-react-nextjs, /publicite-digitale, /referencement-seo, /tarifs
- Des données chiffrées réalistes (prix, stats, pourcentages)
- Une FAQ de 3-5 questions
- Des CTA subtils mentionnant Traffik Web et le WhatsApp

Réponds UNIQUEMENT avec le JSON valide (pas de markdown, pas de backticks) :
{
  "slug": "${keyword.slug}",
  "title": "...",
  "metaTitle": "... (max 60 chars)",
  "metaDescription": "... (max 160 chars)",
  "date": "${today}",
  "author": "Traffik Web",
  "keywords": ["${keyword.keyword}", "...", "..."],
  "excerpt": "...",
  "content": "<h2 id=\\"...\\">....</h2><p>...</p>...",
  "faq": [{"q": "...", "a": "..."}],
  "readingTime": 8
}`;

  console.log(`[SPIDER] Generating article for: "${keyword.keyword}"`);

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-5-20250929',
      max_tokens: 8000,
      messages: [{ role: 'user', content: prompt }],
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`API error ${response.status}: ${error}`);
  }

  const data = await response.json();
  const text = data.content[0].text.trim();

  // Parse JSON from response
  let article;
  try {
    article = JSON.parse(text);
  } catch {
    // Try to extract JSON from response
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      article = JSON.parse(jsonMatch[0]);
    } else {
      throw new Error('Failed to parse article JSON');
    }
  }

  return article;
}

async function main() {
  const { queue, keyword } = getNextKeyword();

  const article = await generateArticle(keyword);

  // Save article
  const articlePath = join(ARTICLES_DIR, `${article.slug}.json`);
  writeFileSync(articlePath, JSON.stringify(article, null, 2), 'utf-8');
  console.log(`[SPIDER] Saved: ${articlePath}`);

  // Update blog index
  updateBlogIndex(article);
  console.log('[SPIDER] Updated blog index');

  // Mark keyword as done
  markKeywordDone(queue, keyword);
  console.log(`[SPIDER] Keyword "${keyword.keyword}" marked as done`);

  console.log('[SPIDER] Article generated successfully!');
}

main().catch((err) => {
  console.error('[SPIDER] Error:', err.message);
  process.exit(1);
});
