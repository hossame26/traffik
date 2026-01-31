import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="py-12 px-4 bg-dark-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          {/* Logo & Copyright */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <Link to="/" className="text-xl font-display font-bold text-white">
              TRAFFIK<span className="text-accent">.</span>
            </Link>
            <span className="text-white/30 text-sm">
              © {new Date().getFullYear()} Tous droits réservés
            </span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-white/40">
            <Link to="/mentions-legales" className="hover:text-white transition-colors">
              Mentions légales
            </Link>
            <Link to="/politique-confidentialite" className="hover:text-white transition-colors">
              Confidentialité
            </Link>
            <Link to="/cgv" className="hover:text-white transition-colors">
              CGV
            </Link>
            <a
              href="https://wa.me/33635505374"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
