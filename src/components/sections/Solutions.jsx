import React, { useState } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight, X, Sparkles } from 'lucide-react';

const offers = [
  {
    title: 'Shopify',
    subtitle: 'E-commerce',
    description: "La solution idéale pour vendre en ligne. Boutique optimisée pour convertir dès le premier jour.",
    features: ['Paiements Intégrés', 'Gestion Stocks', 'Marketing Auto', 'Mobile First'],
    details: [
      "Thème Premium personnalisé à votre image",
      "Configuration complète des paiements (Stripe, PayPal)",
      "Intégration logistique et livraison",
      "Applications marketing (Email, SMS)",
      "Formation prise en main incluse"
    ],
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M15.337 3.415c-.157-.018-.313.009-.453.09-.127.073-1.965 1.476-2.051 1.539-.086.062-.144.094-.144.094l-.834-.252c-.054-.016-.081-.024-.135-.024-.133 0-.227.093-.251.205 0 0-.785 2.983-.785 2.988-.095.363-.025.53.188.66l.917.675-.018.011-5.761 4.234c-.162.119-.246.254-.246.424 0 .074.018.152.055.234l2.94 6.898c.073.17.207.254.396.254.051 0 .107-.009.168-.027.322-.095.609-.247.858-.454l5.997-5.092c.157-.134.246-.302.268-.497l.822-8.578c.023-.259-.087-.465-.292-.59-.168-.102-1.199-.741-1.639-1.018-.025.172-.025.172 0 0z"/>
      </svg>
    ),
  },
  {
    title: 'WordPress',
    subtitle: 'Vitrine & Blog',
    description: "La liberté éditoriale absolue. Parfait pour les marques avec du contenu à partager.",
    features: ['SEO Natif', 'Blog Intégré', 'Plugins Illimités', 'Évolutif'],
    details: [
      "Installation WordPress + Elementor Pro",
      "Sécurité renforcée anti-piratage",
      "Optimisation vitesse et cache",
      "Intégration CRM (Hubspot/Brevo)",
      "Blog optimisé pour le référencement"
    ],
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 19.5c-5.247 0-9.5-4.253-9.5-9.5S6.753 2.5 12 2.5s9.5 4.253 9.5 9.5-4.253 9.5-9.5 9.5zm-4.5-9.5c0 2.485 2.015 4.5 4.5 4.5s4.5-2.015 4.5-4.5-2.015-4.5-4.5-4.5-4.5 2.015-4.5 4.5z"/>
      </svg>
    ),
  },
  {
    title: 'Sur Mesure',
    subtitle: 'React / Next.js',
    description: "L'arme absolue. Performance brute et design 100% unique sans compromis.",
    features: ['Vitesse Extrême', 'Design Unique', 'Animations 3D', 'Score 95+'],
    details: [
      "Développement React / Next.js",
      "Animations Framer Motion premium",
      "Hébergement haute disponibilité Vercel",
      "PWA - Application Web Progressive",
      "Score Google PageSpeed 95+"
    ],
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ),
    featured: true,
  },
];

export default function Solutions() {
  const [selectedOffer, setSelectedOffer] = useState(null);

  return (
    <section id="solutions" className="relative py-32 px-4 bg-dark-900">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-dark-800 via-dark-900 to-dark-900" />

      <div className="relative max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <Motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs text-white/60 uppercase tracking-wider mb-6"
          >
            <Sparkles className="w-3 h-3 text-accent" />
            Nos Solutions
          </Motion.span>

          <Motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            Choisissez votre<br />
            <span className="text-accent">Infrastructure</span>
          </Motion.h2>

          <Motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white/50 text-lg max-w-xl mx-auto"
          >
            Trois technologies. Un seul objectif : votre croissance.
          </Motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {offers.map((offer, index) => (
            <Motion.div
              key={offer.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedOffer(offer)}
              className={`group relative p-8 rounded-3xl cursor-pointer transition-all duration-500 ${
                offer.featured
                  ? 'bg-accent text-dark-950 hover:shadow-[0_0_60px_rgba(205,255,0,0.2)]'
                  : 'bg-dark-800 border border-white/5 hover:border-white/10 text-white'
              }`}
            >
              {offer.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-dark-950 text-accent text-[10px] font-bold uppercase tracking-widest rounded-full">
                  Populaire
                </div>
              )}

              {/* Icon */}
              <div className={`mb-6 ${offer.featured ? 'text-dark-950' : 'text-accent'}`}>
                {offer.icon}
              </div>

              {/* Title */}
              <div className="mb-4">
                <h3 className="text-2xl font-display font-bold mb-1">{offer.title}</h3>
                <p className={`text-sm ${offer.featured ? 'text-dark-950/60' : 'text-white/40'}`}>
                  {offer.subtitle}
                </p>
              </div>

              {/* Description */}
              <p className={`text-sm leading-relaxed mb-8 ${offer.featured ? 'text-dark-950/80' : 'text-white/60'}`}>
                {offer.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-8">
                {offer.features.map((feature) => (
                  <span
                    key={feature}
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      offer.featured
                        ? 'bg-dark-950/10 text-dark-950'
                        : 'bg-white/5 text-white/60'
                    }`}
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div className={`flex items-center justify-between pt-6 border-t ${
                offer.featured ? 'border-dark-950/10' : 'border-white/5'
              }`}>
                <span className="text-sm font-medium">Voir les détails</span>
                <ArrowRight className={`w-5 h-5 group-hover:translate-x-1 transition-transform ${
                  offer.featured ? 'text-dark-950' : 'text-accent'
                }`} />
              </div>
            </Motion.div>
          ))}
        </div>

        {/* Price note */}
        <Motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-white/40 text-sm mt-12"
        >
          Tous nos sites démarrent à partir de <span className="text-accent font-medium">150€</span>.
          Prix final selon vos besoins.
        </Motion.p>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedOffer && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <Motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedOffer(null)}
              className="absolute inset-0 bg-dark-950/90 backdrop-blur-xl"
            />

            <Motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg bg-dark-800 border border-white/10 rounded-3xl overflow-hidden"
            >
              <button
                onClick={() => setSelectedOffer(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              <div className="p-8">
                <div className="text-accent mb-4">{selectedOffer.icon}</div>
                <h3 className="text-3xl font-display font-bold text-white mb-2">
                  {selectedOffer.title}
                </h3>
                <p className="text-white/40 text-sm mb-8">{selectedOffer.subtitle}</p>

                <div className="space-y-4 mb-8">
                  {selectedOffer.details.map((detail, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="mt-1 w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-accent" />
                      </div>
                      <span className="text-white/80 text-sm">{detail}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  onClick={() => setSelectedOffer(null)}
                  className="block w-full py-4 bg-accent text-dark-950 font-semibold text-center rounded-xl hover:shadow-[0_0_30px_rgba(205,255,0,0.3)] transition-all"
                >
                  Demander un devis
                </a>
              </div>
            </Motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
