import React from 'react';
import { motion as Motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

import shopifyImg from '../../assets/shopify-removebg-preview.png';
import wordpressImg from '../../assets/wordpress-removebg-preview.png';
import reactImg from '../../assets/react.svg';

const offers = [
  {
    title: 'Site Shopify',
    image: shopifyImg,
    description: "L'excellence e-commerce. Convertissez dès le premier jour avec une boutique optimisée.",
    features: ['Paiements Intégrés', 'Gestion Stocks', 'Marketing Auto'],
    highlight: false
  },
  {
    title: 'Site WordPress',
    image: wordpressImg,
    description: "La liberté éditoriale. Idéal pour les marques qui ont beaucoup de contenu à partager.",
    features: ['SEO Natif', 'Contenu Illimité', 'Écosystème Riche'],
    highlight: false
  },
  {
    title: 'Site Sur Mesure',
    image: reactImg,
    description: "L'arme absolue. Une performance web brute sans aucun compromis technique.",
    features: ['Vitesse Extrême', 'Design 100% Unique', 'Expérience 3D'],
    highlight: true,
    badge: "LE PLUS POPULAIRE"
  },
];

export default function Solutions() {
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
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative flex flex-col p-10 rounded-[2rem] border transition-all duration-500 bg-gray-50 dark:bg-white/5 border-gray-200 dark:border-white/10 hover:border-black/20 dark:hover:border-white/30 hover:shadow-2xl"
            >
              {/* Badge "Le Plus Populaire" */}
              {offer.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#0066FF] text-white text-[10px] font-black tracking-[0.2em] px-6 py-2 rounded-full shadow-lg z-20 uppercase whitespace-nowrap">
                  {offer.badge}
                </div>
              )}

              {/* Logo Animé (Lévitation + Hover) */}
              <div className="mb-10 w-20 h-20 relative flex items-center justify-start">
                 {offer.image && (
                   <Motion.img 
                     src={offer.image} 
                     alt={offer.title} 
                     className="w-full h-full object-contain filter drop-shadow-xl"
                     
                     // Animation de lévitation (continue)
                     animate={{ y: [0, -10, 0] }}
                     transition={{ 
                       duration: 4, 
                       repeat: Infinity, 
                       ease: "easeInOut",
                       delay: index * 0.5 // Décalage pour que tous ne bougent pas en même temps
                     }}

                     // Animation au survol de la carte (via le group-hover CSS ou direct)
                     whileHover={{ scale: 1.2, rotate: 5 }}
                   />
                 )}
              </div>

              {/* Titre & Description */}
              <h3 className="text-3xl font-bold mb-4 tracking-tight text-black dark:text-white">{offer.title}</h3>
              <p className="text-sm font-medium leading-relaxed mb-10 text-gray-500 dark:text-gray-400">
                {offer.description}
              </p>

              {/* Liste des fonctionnalités */}
              <ul className="space-y-4 mb-10">
                {offer.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm font-medium opacity-80 text-gray-700 dark:text-gray-300">
                    <Check className="w-5 h-5 text-black dark:text-white" strokeWidth={3} />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Bouton d'action */}
              <button className="mt-auto w-full py-4 rounded-xl text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center gap-4 bg-white dark:bg-white/10 text-black dark:text-white border border-gray-200 dark:border-white/10 hover:border-black dark:hover:border-white group-hover:gap-6">
                Explorer <ArrowRight className="w-4 h-4" />
              </button>

            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}