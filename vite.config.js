import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import prerender from '@prerenderer/rollup-plugin'
import PuppeteerRenderer from '@prerenderer/renderer-puppeteer'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    prerender({
      routes: [
        '/',
        '/tarifs',
        '/a-propos',
        '/portfolio',
        '/contact',
        '/faq',
        '/blog',
        '/creation-site-shopify',
        '/creation-site-wordpress',
        '/developpement-react-nextjs',
        '/publicite-digitale',
        '/referencement-seo',
        '/audit-site-web',
        '/mentions-legales',
        '/politique-confidentialite',
        '/cgv',
        // Blog articles
        '/blog/react-nextjs-avantages-entreprise',
        '/blog/optimiser-vitesse-site-web',
        '/blog/google-ads-vs-facebook-ads',
        '/blog/prix-creation-site-internet-france',
        '/blog/site-vitrine-wordpress-avantages',
        '/blog/facebook-ads-ecommerce-guide',
        '/blog/referencement-seo-debutant',
        '/blog/creer-boutique-en-ligne-guide',
        '/blog/shopify-vs-wordpress-comparatif',
        '/blog/combien-coute-site-shopify-2026',
      ],
      renderer: new PuppeteerRenderer({
        renderAfterTime: 3000,
        headless: true,
      }),
    }),
    ViteImageOptimizer({
      png: {
        quality: 75,
      },
      jpeg: {
        quality: 75,
      },
      jpg: {
        quality: 75,
      },
      webp: {
        lossless: false,
        quality: 75,
      },
    }),
  ],
  build: {
    // Enable code splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunk for React
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          // Framer motion in its own chunk (heavy library)
          'framer': ['framer-motion'],
          // UI library
          'ui': ['@heroui/react', 'lucide-react'],
        },
      },
    },
    // Smaller chunks for better mobile loading
    chunkSizeWarningLimit: 300,
    // Use esbuild for minification (faster, included by default)
    minify: 'esbuild',
  },
})
