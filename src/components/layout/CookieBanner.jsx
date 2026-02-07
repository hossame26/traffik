import React, { useState, useEffect } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { Cookie, X } from 'lucide-react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Show banner after 1 second
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem('cookieConsent', 'all');
    setIsVisible(false);
  };

  const acceptEssential = () => {
    localStorage.setItem('cookieConsent', 'essential');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <Motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-[60] p-4 md:p-6"
        >
          <div className="max-w-4xl mx-auto bg-white dark:bg-[#111] rounded-2xl shadow-2xl border border-gray-200 dark:border-white/10 p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">

              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-[#0066FF]/10 flex items-center justify-center">
                  <Cookie className="w-6 h-6 text-[#0066FF]" />
                </div>
              </div>

              <div className="flex-1">
                <h3 className="font-bold text-black dark:text-white mb-2">
                  Nous respectons votre vie privée
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  Nous utilisons des cookies pour améliorer votre expérience sur notre site.
                  En continuant, vous acceptez notre{' '}
                  <a href="/politique-confidentialite" className="text-[#0066FF] hover:underline">
                    politique de confidentialité
                  </a>.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <button
                  onClick={acceptEssential}
                  className="px-6 py-3 rounded-xl border border-gray-300 dark:border-white/20 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
                >
                  Essentiel uniquement
                </button>
                <button
                  onClick={acceptAll}
                  className="px-6 py-3 rounded-xl bg-[#0066FF] text-white text-sm font-semibold hover:bg-[#0055DD] transition-colors"
                >
                  Tout accepter
                </button>
              </div>

              <button
                onClick={acceptEssential}
                className="absolute top-4 right-4 md:static p-2 text-gray-400 hover:text-gray-600 dark:hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </Motion.div>
      )}
    </AnimatePresence>
  );
}
