import React, { useState, useEffect } from 'react';
import { motion as Motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Services', href: '/#solutions' },
  { name: 'Projets', href: '/#projets' },
  { name: 'Témoignages', href: '/#temoignages' },
  { name: 'FAQ', href: '/#faq' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false);
  }, [location]);

  return (
    <>
      <Motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-dark-950/80 backdrop-blur-xl border-b border-white/5'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <span className="text-xl font-display font-bold text-white tracking-tight">
                TRAFFIK<span className="text-accent">.</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="#contact"
                className="px-5 py-2.5 bg-accent text-dark-950 text-sm font-semibold rounded-full hover:shadow-[0_0_20px_rgba(205,255,0,0.3)] transition-all"
              >
                Démarrer
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="md:hidden p-2 text-white"
            >
              {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </Motion.nav>

      {/* Mobile Menu */}
      <Motion.div
        initial={false}
        animate={{
          opacity: isMobileOpen ? 1 : 0,
          pointerEvents: isMobileOpen ? 'auto' : 'none',
        }}
        className="fixed inset-0 z-40 bg-dark-950/95 backdrop-blur-xl md:hidden"
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, i) => (
            <Motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: isMobileOpen ? 1 : 0,
                y: isMobileOpen ? 0 : 20,
              }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setIsMobileOpen(false)}
              className="text-3xl font-display font-bold text-white hover:text-accent transition-colors"
            >
              {link.name}
            </Motion.a>
          ))}
          <Motion.a
            href="#contact"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isMobileOpen ? 1 : 0,
              y: isMobileOpen ? 0 : 20,
            }}
            transition={{ delay: 0.4 }}
            onClick={() => setIsMobileOpen(false)}
            className="mt-4 px-8 py-4 bg-accent text-dark-950 font-semibold rounded-full"
          >
            Démarrer un projet
          </Motion.a>
        </div>
      </Motion.div>
    </>
  );
}
