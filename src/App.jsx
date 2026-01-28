import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Solutions from './components/sections/Solutions';
import Projects from './components/sections/Projects';
import Growth from './components/sections/Growth';
import Ads from './components/sections/Ads';
import Process from './components/sections/Process';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

export default function App() {
  return (
    // Le fond s'adapte au thème (Blanc en Light, Noir en Dark)
    <div className="min-h-screen bg-[#F5F5F7] dark:bg-[#050505] text-black dark:text-white font-sans selection:bg-[#0066FF] selection:text-white transition-colors duration-500">
      <Navbar />
      <Hero />
      <Solutions />
      <Projects />
      <Growth />
      <Ads />
      <Process />
      <Contact />
      <Footer />
    </div>
  );
}