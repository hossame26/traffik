import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function Footer() {
  const [showLegal, setShowLegal] = useState(false);

  return (
    <>
      <footer className="py-12 px-4 bg-white dark:bg-black border-t border-gray-200 dark:border-white/10 transition-colors duration-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          
          <div>
            <h3 className="text-xl font-black tracking-tighter text-black dark:text-white mb-2">TRAFFIK</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Agence Digitale & Growth.<br />
              7 rue des Champs Élysées, 75008 Paris.
            </p>
          </div>

          <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
            <button onClick={() => setShowLegal(true)} className="hover:text-black dark:hover:text-white transition-colors">Mentions Légales</button>
            <span className="cursor-not-allowed opacity-50">Confidentialité</span>
            <a href="mailto:contact@traffik.com" className="hover:text-black dark:hover:text-white transition-colors">Contact</a>
          </div>

          <div className="text-xs text-gray-400 dark:text-gray-600">
            © {new Date().getFullYear()} Traffik. All rights reserved.
          </div>

        </div>
      </footer>

      {/* MODAL MENTIONS LÉGALES (PORTAL) */}
      {createPortal(
        <AnimatePresence>
          {showLegal && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
              {/* Overlay */}
              <Motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setShowLegal(false)}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              />
              
              {/* Modal Content */}
              <Motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative bg-white dark:bg-[#0A0A0A] border border-gray-200 dark:border-white/10 p-8 rounded-2xl max-w-lg w-full shadow-2xl overflow-y-auto max-h-[80vh]"
              >
                <button 
                  onClick={() => setShowLegal(false)}
                  className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5 text-black dark:text-white" />
                </button>

                <h2 className="text-2xl font-bold text-black dark:text-white mb-6">Mentions Légales</h2>
                
                <div className="space-y-4 text-sm text-gray-600 dark:text-gray-300">
                  <p>
                    <strong>Éditeur du site :</strong><br />
                    TRAFFIK<br />
                    Société par actions simplifiée (SAS)<br />
                    Siège social : 7 rue des Champs Élysées, 75008 Paris
                  </p>
                  <p>
                    <strong>Contact :</strong><br />
                    Email : contact@traffik.com
                  </p>
                  <p>
                    <strong>Hébergement :</strong><br />
                    Vercel Inc.<br />
                    340 S Lemon Ave #4133 Walnut, CA 91789, USA
                  </p>
                  <p>
                    <strong>Propriété intellectuelle :</strong><br />
                    L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle.
                  </p>
                </div>
              </Motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}
