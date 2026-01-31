import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="py-16 px-4 bg-white dark:bg-black border-t border-gray-200 dark:border-white/10 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="text-2xl font-black tracking-tighter text-black dark:text-white mb-4 block">
              TRAFFIK
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              Agence digitale spécialisée dans la création de sites web et le marketing digital.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-black dark:text-white mb-4 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-3 text-sm text-gray-500 dark:text-gray-400">
              <li><a href="/#solutions" className="hover:text-[#0066FF] transition-colors">Sites Shopify</a></li>
              <li><a href="/#solutions" className="hover:text-[#0066FF] transition-colors">Sites WordPress</a></li>
              <li><a href="/#solutions" className="hover:text-[#0066FF] transition-colors">Sites Sur Mesure</a></li>
              <li><a href="/#growth" className="hover:text-[#0066FF] transition-colors">Facebook Ads</a></li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold text-black dark:text-white mb-4 text-sm uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-3 text-sm text-gray-500 dark:text-gray-400">
              <li><a href="/#projets" className="hover:text-[#0066FF] transition-colors">Nos Projets</a></li>
              <li><a href="/#temoignages" className="hover:text-[#0066FF] transition-colors">Témoignages</a></li>
              <li><a href="/#faq" className="hover:text-[#0066FF] transition-colors">FAQ</a></li>
              <li><a href="/#contact" className="hover:text-[#0066FF] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-black dark:text-white mb-4 text-sm uppercase tracking-wider">Légal</h4>
            <ul className="space-y-3 text-sm text-gray-500 dark:text-gray-400">
              <li><Link to="/mentions-legales" className="hover:text-[#0066FF] transition-colors">Mentions Légales</Link></li>
              <li><Link to="/politique-confidentialite" className="hover:text-[#0066FF] transition-colors">Politique de Confidentialité</Link></li>
              <li><Link to="/cgv" className="hover:text-[#0066FF] transition-colors">CGV</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">

          <div className="text-xs text-gray-400 dark:text-gray-600">
            © {new Date().getFullYear()} Traffik Web. Tous droits réservés.
          </div>

          {/* Social / Contact */}
          <div className="flex items-center gap-6">
            <a
              href="https://wa.me/33635505374"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-500 dark:text-gray-400 hover:text-[#25D366] transition-colors flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
