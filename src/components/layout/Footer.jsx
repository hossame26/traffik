import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative py-20 px-4 bg-gray-50 dark:bg-[#080808] border-t border-gray-200 dark:border-white/5 transition-colors duration-500">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0066FF]/[0.02] to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">

        {/* Top CTA Section */}
        <div className="text-center mb-12 pb-12 border-b border-gray-200 dark:border-white/10">
          <h3 className="text-2xl md:text-3xl font-black text-black dark:text-white mb-3">
            Prêt à <span className="text-[#0066FF]">booster</span> votre business ?
          </h3>
          <p className="text-gray-500 dark:text-gray-400 mb-6 text-sm max-w-md mx-auto">
            Discutons de votre projet. Premier appel découverte gratuit.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#0066FF] hover:bg-[#0052CC] text-white px-6 py-3 rounded-full text-sm font-bold tracking-wide transition-all hover:scale-[1.02] shadow-lg"
          >
            Commencer maintenant <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="text-2xl font-black tracking-[0.05em] text-black dark:text-white mb-4 block">
              TRAFFIK<span className="text-[#0066FF]">.</span>
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
              Sites web qui convertissent.
              <br />
              Publicités qui performent.
            </p>
            <a
              href="https://wa.me/33635505374"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[#25D366] font-medium hover:underline"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              +33 6 35 50 53 74
            </a>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-black dark:text-white mb-4 text-xs uppercase tracking-[0.15em]">Services</h4>
            <ul className="space-y-3 text-sm text-gray-500 dark:text-gray-400">
              <li><a href="/#solutions" className="hover:text-[#0066FF] transition-colors">Sites E-commerce</a></li>
              <li><a href="/#solutions" className="hover:text-[#0066FF] transition-colors">Sites Vitrine</a></li>
              <li><a href="/#solutions" className="hover:text-[#0066FF] transition-colors">Sites Sur Mesure</a></li>
              <li><a href="/#growth" className="hover:text-[#0066FF] transition-colors">Publicité Digitale</a></li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold text-black dark:text-white mb-4 text-xs uppercase tracking-[0.15em]">Navigation</h4>
            <ul className="space-y-3 text-sm text-gray-500 dark:text-gray-400">
              <li><a href="/#projets" className="hover:text-[#0066FF] transition-colors">Nos Réalisations</a></li>
              <li><a href="/#temoignages" className="hover:text-[#0066FF] transition-colors">Témoignages</a></li>
              <li><a href="/#faq" className="hover:text-[#0066FF] transition-colors">FAQ</a></li>
              <li><a href="/#contact" className="hover:text-[#0066FF] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-black dark:text-white mb-4 text-xs uppercase tracking-[0.15em]">Légal</h4>
            <ul className="space-y-3 text-sm text-gray-500 dark:text-gray-400">
              <li><Link to="/mentions-legales" className="hover:text-[#0066FF] transition-colors">Mentions Légales</Link></li>
              <li><Link to="/politique-confidentialite" className="hover:text-[#0066FF] transition-colors">Confidentialité</Link></li>
              <li><Link to="/cgv" className="hover:text-[#0066FF] transition-colors">CGV</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xs text-gray-400 dark:text-gray-600">
            © {new Date().getFullYear()} Traffik Web. Tous droits réservés.
          </div>
          <div className="text-xs text-gray-400 dark:text-gray-600">
            Fait avec passion en France
          </div>
        </div>

      </div>
    </footer>
  );
}
