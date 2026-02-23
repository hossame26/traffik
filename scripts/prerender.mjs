import { createServer } from 'http';
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join, extname } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const DIST = join(__dirname, '..', 'dist');
const PORT = 4173;

function findChrome() {
  const paths = [
    process.env.PUPPETEER_EXECUTABLE_PATH,
    '/usr/bin/google-chrome-stable',
    '/usr/bin/google-chrome',
    '/usr/bin/chromium-browser',
    '/usr/bin/chromium',
  ];
  for (const p of paths) {
    if (p && existsSync(p)) return p;
  }
  // macOS
  try {
    const macPath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
    if (existsSync(macPath)) return macPath;
  } catch {}
  return null; // Let puppeteer use its bundled Chrome
}

// All routes to pre-render
const STATIC_ROUTES = [
  '/',
  '/creation-site-shopify',
  '/creation-site-wordpress',
  '/developpement-react-nextjs',
  '/publicite-digitale',
  '/referencement-seo',
  '/audit-site-web',
  '/tarifs',
  '/contact',
  '/portfolio',
  '/a-propos',
  '/faq',
  '/blog',
  '/mentions-legales',
  '/politique-confidentialite',
  '/cgv',
];

// MIME types for static file server
const MIME = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
};

function startServer() {
  return new Promise((resolve) => {
    const server = createServer((req, res) => {
      let filePath = join(DIST, req.url === '/' ? 'index.html' : req.url);

      if (!existsSync(filePath)) {
        filePath = join(DIST, 'index.html');
      }

      try {
        const content = readFileSync(filePath);
        const ext = extname(filePath);
        res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
        res.end(content);
      } catch {
        res.writeHead(404);
        res.end('Not found');
      }
    });

    server.listen(PORT, () => {
      console.log(`[prerender] Server running on http://localhost:${PORT}`);
      resolve(server);
    });
  });
}

async function getBlogRoutes() {
  const indexPath = join(DIST, 'blog', 'index.json');
  if (!existsSync(indexPath)) return [];

  try {
    const data = JSON.parse(readFileSync(indexPath, 'utf-8'));
    return data.map((a) => `/blog/${a.slug}`);
  } catch {
    return [];
  }
}

async function prerender() {
  console.log('[prerender] Starting pre-render process...');

  const server = await startServer();
  const blogRoutes = await getBlogRoutes();
  const allRoutes = [...STATIC_ROUTES, ...blogRoutes];

  console.log(`[prerender] Found ${allRoutes.length} routes to pre-render`);

  let browser;
  try {
    // Try puppeteer-core first (for Vercel/CI with system Chrome)
    let puppeteer;
    try {
      puppeteer = (await import('puppeteer')).default;
    } catch {
      puppeteer = (await import('puppeteer-core')).default;
    }

    // Find Chrome executable
    const executablePath = findChrome();
    const launchOptions = {
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
    };
    if (executablePath) launchOptions.executablePath = executablePath;

    browser = await puppeteer.launch(launchOptions);
  } catch (err) {
    console.log(`[prerender] Puppeteer not available (CI/Vercel), skipping pre-render. ${err.message}`);
    server.close();
    return;
  }

  for (const route of allRoutes) {
    try {
      const page = await browser.newPage();
      const url = `http://localhost:${PORT}${route}`;

      console.log(`[prerender] Rendering: ${route}`);

      await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });

      // Wait for React to render
      await page.waitForSelector('#root > *', { timeout: 10000 });

      // Get the full rendered HTML
      const html = await page.content();

      // Determine output path
      let outputPath;
      if (route === '/') {
        outputPath = join(DIST, 'index.html');
      } else {
        outputPath = join(DIST, route, 'index.html');
      }

      // Create directory if needed
      const dir = dirname(outputPath);
      const { mkdirSync } = await import('fs');
      mkdirSync(dir, { recursive: true });

      writeFileSync(outputPath, html, 'utf-8');
      console.log(`[prerender] Saved: ${outputPath}`);

      await page.close();
    } catch (err) {
      console.error(`[prerender] Error rendering ${route}:`, err.message);
    }
  }

  await browser.close();
  server.close();

  console.log(`[prerender] Done! Pre-rendered ${allRoutes.length} pages.`);
}

prerender().catch(console.error);
