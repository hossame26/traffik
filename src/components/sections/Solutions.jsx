import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import shopifyImg from '../../assets/shopify-removebg-preview.png';
import wordpressImg from '../../assets/wordpress-removebg-preview.webp';
import reactImg from '../../assets/react.svg';

const offers = [
  {
    id: 'shopify',
    title: 'Site Shopify',
    image: shopifyImg,
    description: "La solution e-commerce clé en main pour lancer votre boutique en ligne.",
    features: ['Paiements sécurisés', 'Gestion des stocks', 'Thème personnalisé'],
    details: [
      "Thème Premium personnalisé",
      "Configuration des paiements (Stripe, PayPal)",
      "Intégration livraison",
      "Apps marketing (Email, SMS)",
      "Formation prise en main incluse"
    ],
    color: 'from-green-500 to-emerald-600',
    accentColor: '#22c55e',
  },
  {
    id: 'wordpress',
    title: 'Site WordPress',
    image: wordpressImg,
    description: "Le CMS le plus flexible pour créer un site vitrine ou blog professionnel.",
    features: ['SEO optimisé', 'Contenu illimité', 'Extensions premium'],
    details: [
      "WordPress + Elementor Pro",
      "Sécurité renforcée",
      "Optimisation vitesse",
      "Intégration CRM",
      "Blog optimisé SEO"
    ],
    color: 'from-blue-500 to-indigo-600',
    accentColor: '#3b82f6',
  },
  {
    id: 'custom',
    title: 'Site Sur Mesure',
    image: reactImg,
    description: "Un site développé from scratch avec les technologies les plus performantes.",
    features: ['Performance maximale', 'Design unique', 'Animations fluides'],
    details: [
      "Développement React/Next.js",
      "Animations Framer Motion",
      "Hébergement Vercel",
      "PWA Mobile",
      "PageSpeed optimisé"
    ],
    color: 'from-violet-500 to-purple-600',
    accentColor: '#8b5cf6',
    badge: "RECOMMANDÉ"
  },
];

// Carte pour desktop
function DesktopCard({ offer, onClick, index, isInView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      onClick={onClick}
      className="group relative flex flex-col p-8 lg:p-10 rounded-3xl border border-gray-100 dark:border-white/10 bg-white dark:bg-white/[0.02] hover:bg-white dark:hover:bg-white/[0.05] hover:border-gray-200 dark:hover:border-white/20 transition-all duration-300 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.12)] dark:shadow-none cursor-pointer"
    >
      {offer.badge && (
        <div className="absolute -top-3 right-6 bg-gradient-to-r from-violet-500 to-purple-600 text-white text-[10px] font-bold tracking-wider px-4 py-1.5 rounded-full shadow-lg shadow-purple-500/30">
          {offer.badge}
        </div>
      )}

      {/* Logo */}
      <div
        className="w-20 h-20 rounded-2xl bg-gray-100 dark:bg-white/5 p-4 mb-6"
      >
        <img src={offer.image} alt={offer.title} className="w-full h-full object-contain" loading="lazy" decoding="async" />
      </div>

      <h3 className="text-xl lg:text-2xl font-bold text-black dark:text-white mb-3">{offer.title}</h3>
      <p className="text-base text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">{offer.description}</p>

      <ul className="space-y-3 mb-8 flex-1">
        {offer.features.map((feature, i) => (
          <motion.li
            key={feature}
            className="flex items-center gap-3 text-base text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, x: -10 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: index * 0.15 + i * 0.1 + 0.3 }}
          >
            <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
              <Check className="w-3 h-3 text-green-500" strokeWidth={3} />
            </div>
            {feature}
          </motion.li>
        ))}
      </ul>

      <motion.button
        onClick={onClick}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        className={`w-full py-4 rounded-full bg-gradient-to-r ${offer.color} text-white text-sm font-semibold tracking-wide flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-shadow duration-300`}
        style={{ boxShadow: `0 10px 30px -10px ${offer.accentColor}50` }}
      >
        En savoir plus
        <ArrowRight className="w-4 h-4" />
      </motion.button>
    </motion.div>
  );
}

// Carte pour mobile (slider)
function MobileCard({ offer, onClick, index }) {
  return (
    <div
      onClick={onClick}
      className="flex flex-col p-5 rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.02] w-[85vw] max-w-[320px] shadow-sm dark:shadow-none cursor-pointer transition-all duration-200"
    >
      {offer.badge && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, type: "spring", stiffness: 400 }}
          className="self-start bg-gradient-to-r from-violet-500 to-purple-600 text-white text-[9px] font-bold tracking-wider px-3 py-1 rounded-full mb-4 shadow-lg shadow-purple-500/25"
        >
          {offer.badge}
        </motion.div>
      )}

      <div
        className="w-16 h-16 rounded-xl bg-gray-100 dark:bg-white/5 p-3 mb-5"
      >
        <img src={offer.image} alt={offer.title} className="w-full h-full object-contain" loading="lazy" decoding="async" />
      </div>

      <h3 className="text-lg font-bold text-black dark:text-white mb-2">{offer.title}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-5 leading-relaxed">{offer.description}</p>

      <ul className="space-y-2.5 mb-6 flex-1">
        {offer.features.map((feature, i) => (
          <motion.li
            key={feature}
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.12, duration: 0.4 }}
            className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300"
          >
            <motion.div
              className="w-4 h-4 rounded-full bg-green-500/20 flex items-center justify-center"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + i * 0.12, type: "spring", stiffness: 500 }}
            >
              <Check className="w-2.5 h-2.5 text-green-500" strokeWidth={3} />
            </motion.div>
            {feature}
          </motion.li>
        ))}
      </ul>

      <motion.button
        onClick={onClick}
        whileTap={{ scale: 0.9, opacity: 0.8 }}
        className={`w-full py-3.5 rounded-full bg-gradient-to-r ${offer.color} text-white text-sm font-semibold flex items-center justify-center gap-2 active:brightness-110 transition-all duration-150`}
        style={{ boxShadow: `0 6px 20px -6px ${offer.accentColor}50` }}
      >
        En savoir plus
        <ArrowRight className="w-4 h-4" />
      </motion.button>
    </div>
  );
}

// Popup avec détails
function OfferModal({ offer, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md bg-[#1c1c1e] rounded-3xl overflow-hidden shadow-2xl"
      >
        {/* Header avec logo animé */}
        <div className="pt-10 pb-6 px-8 text-center">
          <motion.div
            className={`w-20 h-20 mx-auto mb-5 rounded-2xl bg-gradient-to-br ${offer.color} p-4 shadow-lg`}
            style={{ boxShadow: `0 15px 40px -10px ${offer.accentColor}60` }}
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <img src={offer.image} alt={offer.title} className="w-full h-full object-contain" loading="lazy" decoding="async" />
          </motion.div>
          <h3 className="text-2xl font-bold text-white">{offer.title}</h3>
          <p className="text-base text-gray-400 mt-2 leading-relaxed">{offer.description}</p>
        </div>

        {/* Séparateur */}
        <div className="mx-8 h-px bg-white/10" />

        {/* Liste des détails */}
        <div className="p-8 space-y-4">
          {offer.details.map((detail, i) => (
            <motion.div
              key={i}
              className="flex items-start gap-4"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <div className={`mt-0.5 w-6 h-6 rounded-full bg-gradient-to-r ${offer.color} flex items-center justify-center shrink-0`}>
                <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
              </div>
              <span className="text-base text-gray-300">{detail}</span>
            </motion.div>
          ))}
        </div>

        {/* Bouton */}
        <div className="p-6 pt-2">
          <motion.a
            href="#contact"
            onClick={(e) => {
              onClose();
              const typeMap = { shopify: 'shopify', wordpress: 'wordpress', custom: 'react' };
              window.dispatchEvent(new CustomEvent('selectProject', { detail: typeMap[offer.id] || offer.id }));
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`block w-full py-4 rounded-full bg-gradient-to-r ${offer.color} text-white text-base font-semibold text-center shadow-lg transition-shadow hover:shadow-xl`}
            style={{ boxShadow: `0 10px 30px -10px ${offer.accentColor}50` }}
          >
            Je choisis ça
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Solutions() {
  const [selectedOffer, setSelectedOffer] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useRef(null);
  const sliderRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  return (
    <section
      id="solutions"
      ref={sectionRef}
      className="relative py-16 lg:py-24 px-4 bg-[#F8F9FA] dark:bg-black transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 dark:bg-white/5 text-primary dark:text-gray-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-4"
          >
            Nos Solutions
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-black dark:text-white mb-4"
          >
            Choisissez votre{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-purple-500">
              plateforme.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-gray-500 dark:text-gray-400 max-w-lg mx-auto"
          >
            E-commerce, vitrine ou sur mesure.
          </motion.p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <DesktopCard
              key={offer.id}
              offer={offer}
              index={index}
              isInView={isInView}
              onClick={() => setSelectedOffer(offer)}
            />
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden">
          <div
            ref={sliderRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-4 px-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {offers.map((offer, index) => (
              <div key={offer.id} className="snap-center shrink-0">
                <MobileCard offer={offer} index={index} onClick={() => setSelectedOffer(offer)} />
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-4">
            {offers.map((offer, index) => (
              <motion.button
                key={index}
                whileTap={{ scale: 1.5 }}
                onClick={() => {
                  sliderRef.current?.children[index]?.scrollIntoView({
                    behavior: 'smooth',
                    inline: 'center',
                    block: 'nearest'
                  });
                }}
                className={`rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'w-6 h-2 bg-primary dark:bg-white'
                    : 'w-2 h-2 bg-gray-300 dark:bg-white/20'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedOffer && (
          <OfferModal offer={selectedOffer} onClose={() => setSelectedOffer(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
