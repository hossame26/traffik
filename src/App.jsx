import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import WhatsAppButton from './components/layout/WhatsAppButton';
import CookieBanner from './components/layout/CookieBanner';

// Sections
import Hero from './components/sections/Hero';
import Solutions from './components/sections/Solutions';
import Projects from './components/sections/Projects';
import Growth from './components/sections/Growth';
import Ads from './components/sections/Ads';
import Testimonials from './components/sections/Testimonials';
import Process from './components/sections/Process';
import FAQ from './components/sections/FAQ';
import Contact from './components/sections/Contact';

// Pages
import MentionsLegales from './pages/MentionsLegales';
import PolitiqueConfidentialite from './pages/PolitiqueConfidentialite';
import CGV from './pages/CGV';

// Home Page Component
function HomePage() {
  return (
    <>
      <Hero />
      <Solutions />
      <Projects />
      <Growth />
      <Ads />
      <Testimonials />
      <Process />
      <FAQ />
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#F5F5F7] dark:bg-[#050505] text-black dark:text-white font-sans selection:bg-[#0066FF] selection:text-white transition-colors duration-500">
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
          <Route path="/cgv" element={<CGV />} />
        </Routes>

        <Footer />
        <WhatsAppButton />
        <CookieBanner />
      </div>
    </Router>
  );
}
