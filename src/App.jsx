import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout (critical - load immediately)
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';

// Lazy load non-critical layout components
const WhatsAppButton = lazy(() => import('./components/layout/WhatsAppButton'));
const CookieBanner = lazy(() => import('./components/layout/CookieBanner'));

// Lazy load UI Effects (heavy animations)
const GlobalSparkles = lazy(() => import('./components/ui/GlobalSparkles'));

// Critical above-the-fold section
import Hero from './components/sections/Hero';

// Lazy load all other sections
const Solutions = lazy(() => import('./components/sections/Solutions'));
const Projects = lazy(() => import('./components/sections/Projects'));
const Growth = lazy(() => import('./components/sections/Growth'));
const Ads = lazy(() => import('./components/sections/Ads'));
const Testimonials = lazy(() => import('./components/sections/Testimonials'));
const Audit = lazy(() => import('./components/sections/Audit'));
const Process = lazy(() => import('./components/sections/Process'));
const FAQ = lazy(() => import('./components/sections/FAQ'));
const Contact = lazy(() => import('./components/sections/Contact'));

// Lazy load Pages
const MentionsLegales = lazy(() => import('./pages/MentionsLegales'));
const PolitiqueConfidentialite = lazy(() => import('./pages/PolitiqueConfidentialite'));
const CGV = lazy(() => import('./pages/CGV'));
const Calculateur = lazy(() => import('./pages/Calculateur'));
const APropos = lazy(() => import('./pages/APropos'));
const Tarifs = lazy(() => import('./pages/Tarifs'));
const Portfolio = lazy(() => import('./pages/Portfolio'));

// Lazy load Service Pages
const Shopify = lazy(() => import('./pages/services/Shopify'));
const WordPress = lazy(() => import('./pages/services/WordPress'));
const ReactDev = lazy(() => import('./pages/services/ReactDev'));
const Publicite = lazy(() => import('./pages/services/Publicite'));
const SEOPage = lazy(() => import('./pages/services/SEO'));
const AuditSite = lazy(() => import('./pages/services/AuditSite'));

// Lazy load Blog
const BlogList = lazy(() => import('./pages/blog/BlogList'));
const BlogArticle = lazy(() => import('./pages/blog/BlogArticle'));

// Lazy load Programmatic SEO Pages
const CityService = lazy(() => import('./pages/CityService'));

// Loading fallback
const SectionLoader = () => (
  <div className="min-h-[200px] flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-[#0066FF] border-t-transparent rounded-full animate-spin" />
  </div>
);

// Home Page Component
function HomePage() {
  return (
    <>
      <Hero />
      <Suspense fallback={<SectionLoader />}>
        <Solutions />
        <Audit />
        <Process />
        <Contact />
        <Ads />
        <Projects />
        <Growth />
        <Testimonials />
        <FAQ />
      </Suspense>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#F8F9FA] dark:bg-black text-black dark:text-white font-sans selection:bg-[#0066FF] selection:text-white transition-colors duration-500">
        {/* Global Sparkles - lazy loaded, hidden on mobile for performance */}
        <Suspense fallback={null}>
          <GlobalSparkles />
        </Suspense>

        <Navbar />

        <Suspense fallback={<SectionLoader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
            <Route path="/cgv" element={<CGV />} />
            <Route path="/devis" element={<Calculateur />} />
            <Route path="/a-propos" element={<APropos />} />
            <Route path="/tarifs" element={<Tarifs />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/creation-site-shopify" element={<Shopify />} />
            <Route path="/creation-site-wordpress" element={<WordPress />} />
            <Route path="/developpement-react-nextjs" element={<ReactDev />} />
            <Route path="/publicite-digitale" element={<Publicite />} />
            <Route path="/referencement-seo" element={<SEOPage />} />
            <Route path="/audit-site-web" element={<AuditSite />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:slug" element={<BlogArticle />} />
            <Route path="/:slug" element={<CityService />} />
          </Routes>
        </Suspense>

        <Footer />
        <Suspense fallback={null}>
          <WhatsAppButton />
          <CookieBanner />
        </Suspense>
      </div>
    </Router>
  );
}
