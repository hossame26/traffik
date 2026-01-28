import React, { useState } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight, X, Star } from 'lucide-react';

import shopifyImg from '../../assets/shopify-removebg-preview.png';
import wordpressImg from '../../assets/wordpress-removebg-preview.png';
import reactImg from '../../assets/react.svg';

const offers = [
  {
    title: 'Site Shopify',
    image: shopifyImg,
    description: "L'excellence e-commerce. Convertissez dès le premier jour avec une boutique optimisée.",
    features: ['Paiements Intégrés', 'Gestion Stocks', 'Marketing Auto'],
    details: [
      "Thème Premium personnalisé",
      "Configuration des moyens de paiement (Stripe, PayPal)",
      "Intégration logistique (livraison)",
      "Applications de marketing (Email, SMS)",
      "Formation prise en main (1h)"
    ],
    highlight: false
  },
  {
    title: 'Site WordPress',
    image: wordpressImg,
    description: "La liberté éditoriale. Idéal pour les marques qui ont beaucoup de contenu à partager.",
    features: ['SEO Natif', 'Contenu Illimité', 'Écosystème Riche'],
    details: [
      "Installation WordPress + Elementor Pro",
      "Sécurité renforcée (Anti-hack)",
      "Optimisation de la vitesse (Cache)",
      "Intégration CRM (Hubspot/Brevo)",
      "Blog optimisé SEO"
    ],
    highlight: false
  },
  {
    title: 'Site Sur Mesure',
    image: reactImg,
    description: "L'arme absolue. Une performance web brute sans aucun compromis technique.",
    features: ['Vitesse Extrême', 'Design 100% Unique', 'Expérience 3D'],
    details: [
      "Développement React/Next.js",
      "Animations Framer Motion",
      "Hébergement Haute Disponibilité (Vercel)",
      "PWA (Application Web Mobile)",
      "Score Google PageSpeed 95+"
    ],
    highlight: true,
    badge: "LE PLUS POPULAIRE"
  },
];

export default function Solutions() {
  const [selectedOffer, setSelectedOffer] = useState(null);

  return (
    <section id="solutions" className="relative py-32 px-4 bg-white dark:bg-black transition-colors duration-500 overflow-visible">
      <div className="relative max-w-7xl mx-auto">
        
        {/* En-tête */}
        <div className="text-center mb-24">
          <Motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-black tracking-tighter text-black dark:text-white mb-6"
          >
            L'Infrastructure.
          </Motion.h2>
          <p className="text-gray-500 dark:text-gray-400 text-xl max-w-2xl mx-auto font-medium">
            Trois voies. Une seule destination : <span className="text-black dark:text-white underline decoration-1 underline-offset-4">La croissance.</span>
          </p>
        </div>

        {/* Grille des offres */}
        <div className="grid gap-8 lg:grid-cols-3 pt-4">
          {offers.map((offer, index) => (
            <Motion.div
              key={offer.title}
              onClick={() => setSelectedOffer(offer)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative flex flex-col p-10 rounded-[2rem] border transition-all duration-500 bg-gray-50 dark:bg-white/5 border-gray-200 dark:border-white/10 hover:border-black/20 dark:hover:border-white/30 hover:shadow-2xl cursor-pointer"
            >
              {/* Badge "Le Plus Populaire" */}
              {offer.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#0066FF] text-white text-[10px] font-black tracking-[0.2em] px-6 py-2 rounded-full shadow-lg z-20 uppercase whitespace-nowrap">
                  {offer.badge}
                </div>
              )}

              {/* Logo Animé */}
              <div className="mb-10 w-20 h-20 relative flex items-center justify-start">
                 {offer.image && (
                   <Motion.img 
                     src={offer.image} 
                     alt={offer.title} 
                     className="w-full h-full object-contain filter drop-shadow-xl"
                     animate={{ y: [0, -10, 0] }}
                     transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
                     whileHover={{ scale: 1.2, rotate: 5 }}
                   />
                 )}
              </div>

              {/* Titre & Description */}
              <h3 className="text-3xl font-bold mb-4 tracking-tight text-black dark:text-white">{offer.title}</h3>
              <p className="text-sm font-medium leading-relaxed mb-10 text-gray-500 dark:text-gray-400">
                {offer.description}
              </p>

              {/* Liste des fonctionnalités (Aperçu) */}
              <ul className="space-y-4 mb-10">
                {offer.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm font-medium opacity-80 text-gray-700 dark:text-gray-300">
                    <Check className="w-5 h-5 text-black dark:text-white" strokeWidth={3} />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Bouton d'action */}
              <div className="mt-auto w-full py-4 rounded-xl text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center gap-4 bg-white dark:bg-white/10 text-black dark:text-white border border-gray-200 dark:border-white/10 group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black">
                Voir l'offre <ArrowRight className="w-4 h-4" />
              </div>
            </Motion.div>
          ))}
        </div>
      </div>

      {/* --- MODAL SYSTEM --- */}
      <AnimatePresence>
        {selectedOffer && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <Motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedOffer(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-xl"
            />

            <Motion.div 
              layoutId={`offer-${selectedOffer.title}`}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-white dark:bg-[#111] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 flex flex-col"
            >
              <button 
                onClick={() => setSelectedOffer(null)}
                className="absolute top-6 right-6 z-20 p-2 rounded-full bg-gray-100 dark:bg-white/10 text-black dark:text-white hover:bg-gray-200 dark:hover:bg-white/20 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-8 md:p-12">
                {/* Header Modal */}
                <div className="flex items-center gap-6 mb-8">
                   <div className="w-20 h-20 p-4 bg-gray-50 dark:bg-white/5 rounded-2xl flex items-center justify-center">
                      <img src={selectedOffer.image} alt={selectedOffer.title} className="w-full h-full object-contain" />
                   </div>
                   <div>
                      <h3 className="text-3xl md:text-4xl font-black text-black dark:text-white mb-2">{selectedOffer.title}</h3>
                      <div className="flex items-center gap-2 text-[#0066FF] text-sm font-bold uppercase tracking-widest">
                        <Star className="w-4 h-4 fill-current" /> Offre Premium
                      </div>
                   </div>
                </div>

                <div className="w-full h-px bg-gray-200 dark:bg-white/10 mb-8" />

                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Ce qui est inclus :</h4>
                
                <ul className="space-y-4 mb-10">
                   {selectedOffer.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-4 text-base font-medium text-gray-700 dark:text-gray-200">
                        <div className="mt-1 w-5 h-5 rounded-full bg-[#0066FF]/20 flex items-center justify-center shrink-0">
                           <Check className="w-3 h-3 text-[#0066FF]" strokeWidth={4} />
                        </div>
                        {detail}
                      </li>
                   ))}
                </ul>

                <a 
                  href="#contact" 
                  onClick={() => setSelectedOffer(null)}
                  className="w-full py-5 rounded-xl bg-[#0066FF] hover:bg-[#0055D4] text-white font-bold tracking-[0.2em] uppercase text-center transition-all shadow-lg hover:shadow-[#0066FF]/40 flex items-center justify-center gap-3"
                >
                  Commencer maintenant <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </Motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}