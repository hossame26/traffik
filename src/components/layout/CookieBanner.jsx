import React, { useState, useEffect } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { Cookie, X } from 'lucide-react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
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
          className="fixed bottom-0 left-0 right-0 z-[60] p-4"
        >
          <div className="max-w-2xl mx-auto bg-dark-800 border border-white/10 rounded-2xl p-6 shadow-2xl">
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">

              <div className="flex-1">
                <p className="text-sm text-white/70 leading-relaxed">
                  Nous utilisons des cookies pour améliorer votre expérience.{' '}
                  <a href="/politique-confidentialite" className="text-accent hover:underline">
                    En savoir plus
                  </a>
                </p>
              </div>

              <div className="flex gap-3 shrink-0">
                <button
                  onClick={acceptEssential}
                  className="px-4 py-2 text-sm text-white/60 hover:text-white transition-colors"
                >
                  Refuser
                </button>
                <button
                  onClick={acceptAll}
                  className="px-5 py-2 bg-accent text-dark-950 text-sm font-medium rounded-full hover:shadow-[0_0_20px_rgba(205,255,0,0.3)] transition-all"
                >
                  Accepter
                </button>
              </div>
            </div>
          </div>
        </Motion.div>
      )}
    </AnimatePresence>
  );
}
