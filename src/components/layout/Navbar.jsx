import React, { useState, useEffect } from 'react';
import { motion as Motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react'; // Import des icônes

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  // Initialiser le thème depuis le localStorage ou par défaut 'dark'
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'dark';
    }
    return 'dark';
  });

  // Gestion du scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Gestion du Thème (Dark/Light) et persistance
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="fixed top-0 left-0 right-0 flex justify-center z-50 pt-6 px-4">
      <Motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`rounded-full px-6 py-3 md:px-8 md:py-4 flex items-center justify-between w-full max-w-4xl transition-all duration-500 border ${
          isScrolled 
            ? 'bg-white/80 dark:bg-black/80 backdrop-blur-xl shadow-2xl border-black/5 dark:border-white/10' 
            : 'bg-white/50 dark:bg-white/5 backdrop-blur-md border-transparent'
        }`}
      >
        {/* Logo (Change de couleur selon le thème) */}
        <span className="text-xl font-black tracking-[0.1em] text-black dark:text-white transition-colors">
          TRAFFIK
        </span>
        
        {/* Liens Desktop */}
        <div className="hidden md:flex gap-8 text-[11px] font-bold tracking-[0.15em] text-gray-600 dark:text-gray-400">
          {['SOLUTIONS', 'GROWTH', 'PROJETS'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-primary dark:hover:text-white transition-colors duration-300">
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {/* Bouton Theme Switcher */}
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-white/10 text-black dark:text-white hover:scale-110 transition-all"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* CTA Button */}
          <a href="#contact" className="bg-[#0066FF] text-white px-5 py-2 rounded-full text-[10px] font-black tracking-widest hover:scale-105 hover:bg-[#0055D4] transition-all shadow-[0_0_20px_rgba(0,102,255,0.4)]">
            DÉMARRER
          </a>
        </div>
      </Motion.nav>
    </div>
  );
}
