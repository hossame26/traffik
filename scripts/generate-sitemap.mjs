import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PUBLIC = join(__dirname, '..', 'public');
const BASE_URL = 'https://traffik-web.fr';
const today = new Date().toISOString().split('T')[0];

// Static routes with priorities
const STATIC_ROUTES = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/creation-site-shopify', priority: '0.9', changefreq: 'monthly' },
  { path: '/creation-site-wordpress', priority: '0.9', changefreq: 'monthly' },
  { path: '/developpement-react-nextjs', priority: '0.8', changefreq: 'monthly' },
  { path: '/publicite-digitale', priority: '0.8', changefreq: 'monthly' },
  { path: '/referencement-seo', priority: '0.8', changefreq: 'monthly' },
  { path: '/tarifs', priority: '0.8', changefreq: 'monthly' },
  { path: '/portfolio', priority: '0.7', changefreq: 'monthly' },
  { path: '/a-propos', priority: '0.6', changefreq: 'monthly' },
  { path: '/blog', priority: '0.9', changefreq: 'daily' },
  { path: '/devis', priority: '0.7', changefreq: 'monthly' },
  { path: '/mentions-legales', priority: '0.3', changefreq: 'yearly' },
  { path: '/politique-confidentialite', priority: '0.3', changefreq: 'yearly' },
  { path: '/cgv', priority: '0.3', changefreq: 'yearly' },
];

function generateSitemap() {
  console.log('[sitemap] Generating sitemap.xml...');

  const urls = STATIC_ROUTES.map(
    (r) => `  <url>
    <loc>${BASE_URL}${r.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`
  );

  // Add blog articles
  const blogIndexPath = join(PUBLIC, 'blog', 'index.json');
  if (existsSync(blogIndexPath)) {
    try {
      const articles = JSON.parse(readFileSync(blogIndexPath, 'utf-8'));
      for (const article of articles) {
        urls.push(`  <url>
    <loc>${BASE_URL}/blog/${article.slug}</loc>
    <lastmod>${article.date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`);
      }
      console.log(`[sitemap] Added ${articles.length} blog articles`);
    } catch (err) {
      console.error('[sitemap] Error reading blog index:', err.message);
    }
  }

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>
`;

  writeFileSync(join(PUBLIC, 'sitemap.xml'), sitemap, 'utf-8');
  console.log(`[sitemap] Generated with ${urls.length} URLs`);
}

generateSitemap();
