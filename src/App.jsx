import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Solutions from './components/sections/Solutions';
import Growth from './components/sections/Growth';
import Ads from './components/sections/Ads';
import Process from './components/sections/Process';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

export default function App() {
  return (
    // Le fond noir profond global
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#0066FF] selection:text-white">
      <Navbar />
      <Hero />
      <Solutions />
      <Growth />
      <Ads />
      <Process />
      <Contact />
      <Footer />
    </div>
  );
}