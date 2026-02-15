import { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Mail, TrendingUp, BarChart3, Target, ArrowUpRight, Zap, Sparkles, X, Check } from 'lucide-react';
// Service details for modals
const serviceDetails = {
  acquisition: {
    title: "Acquisition Automatisée",
    subtitle: "SEO + Google Ads",
    description: "Notre système capture automatiquement les clients qui cherchent vos services.",
    method: [
      "Audit technique SEO complet de votre site",
      "Optimisation des mots-clés à forte intention d'achat",
      "Création de campagnes Google Ads ciblées",
      "Suivi des conversions et optimisation continue",
      "Rapports hebdomadaires de performance"
    ],
    stats: { value: "90%", label: "du trafic intentionniste capturé" }
  },
  emailing: {
    title: "Cold Emailing B2B",
    subtitle: "Prospection IA",
    description: "Touchez directement les décideurs avec des messages personnalisés par l'IA.",
    method: [
      "Constitution de bases de données qualifiées",
      "Rédaction de séquences email par IA",
      "Personnalisation à grande échelle",
      "A/B testing automatique des objets",
      "Suivi des ouvertures et réponses"
    ],
    stats: { value: "35%", label: "taux d'ouverture moyen" }
  },
  tracking: {
    title: "Tracking & Analytics",
    subtitle: "Data-Driven",
    description: "Visualisez exactement d'où viennent vos clients et combien ils rapportent.",
    method: [
      "Installation Google Analytics 4 avancée",
      "Tracking des conversions multi-canal",
      "Tableaux de bord personnalisés",
      "Attribution des ventes par source",
      "Alertes automatiques de performance"
    ],
    stats: { value: "100%", label: "visibilité sur votre ROI" }
  }
};

// Animated Counter
function AnimatedCounter({ value, label, suffix = "", prefix = "" }) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const numericValue = parseInt(value.toString().replace(/,/g, ''));

  useEffect(() => {
    if (!isInView) return;

    const duration = 2500;
    const steps = 80;
    const increment = numericValue / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(increment * step, numericValue);
      setDisplayValue(current);

      if (step >= steps) {
        clearInterval(timer);
        setDisplayValue(numericValue);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, numericValue]);

  return (
    <motion.div
      ref={ref}
      className="text-center md:text-left group cursor-default"
      whileHover={{ scale: 1.05 }}
    >
      <motion.div
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-black dark:text-white mb-2 tracking-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
      >
        <span className="group-hover:text-primary transition-colors duration-300">
          {prefix}{Math.floor(displayValue).toLocaleString('fr-FR')}{suffix}
        </span>
      </motion.div>
      <div className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
        {label}
      </div>
    </motion.div>
  );
}

// Service Modal
function ServiceModal({ service, onClose }) {
  if (!service) return null;
  const data = serviceDetails[service];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg bg-white dark:bg-[#111] rounded-3xl overflow-hidden shadow-2xl"
      >
        {/* Header */}
        <div className="relative p-8 pb-6 bg-gradient-to-br from-primary to-accent-purple text-white">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <span className="text-xs font-bold uppercase tracking-wider text-white/70">{data.subtitle}</span>
          <h3 className="text-2xl font-bold mt-2">{data.title}</h3>
          <p className="text-white/80 mt-3">{data.description}</p>
        </div>

        {/* Content */}
        <div className="p-8">
          <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">Notre méthode</h4>
          <ul className="space-y-3">
            {data.method.map((step, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-3"
              >
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-300">{step}</span>
              </motion.li>
            ))}
          </ul>

          {/* Stat */}
          <div className="mt-8 p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5">
            <div className="text-3xl font-bold text-primary">{data.stats.value}</div>
            <div className="text-sm text-gray-500">{data.stats.label}</div>
          </div>

          {/* CTA */}
          <a
            href="#contact"
            onClick={onClose}
            className="mt-6 w-full py-4 rounded-xl bg-black dark:bg-white text-white dark:text-black font-bold text-center flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
          >
            Demander un devis
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Growth Card with Color
function GrowthCard({ icon: Icon, title, desc, gradient, serviceKey, onOpenModal }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onClick={() => onOpenModal(serviceKey)}
      className={`relative p-6 rounded-2xl bg-gradient-to-br ${gradient} shadow-lg cursor-pointer group overflow-hidden active:brightness-110 transition-all duration-150`}
      whileHover={{ y: -5, scale: 1.02 }}
      whileTap={{ scale: 0.93 }}
    >
      {/* Shimmer */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

      {/* Arrow */}
      <motion.div
        className="absolute top-5 right-5 text-white/70 group-hover:text-white"
        initial={{ opacity: 0, x: 10 }}
        whileHover={{ opacity: 1, x: 0 }}
      >
        <ArrowUpRight className="w-5 h-5" />
      </motion.div>

      {/* Icon */}
      <div className="relative w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-white" />
      </div>

      <h3 className="relative text-lg font-bold text-white mb-2">{title}</h3>
      <p className="relative text-sm text-white/80 leading-relaxed">{desc}</p>

      <div className="relative mt-4 text-xs font-bold text-white/60 uppercase tracking-wider flex items-center gap-2">
        <span>En savoir plus</span>
        <ArrowUpRight className="w-3 h-3" />
      </div>
    </motion.div>
  );
}

export default function Growth() {
  const [activeModal, setActiveModal] = useState(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="growth"
      ref={sectionRef}
      className="relative py-16 lg:py-20 px-4 bg-[#F8F9FA] dark:bg-black overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary opacity-[0.03] blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-purple opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
        {/* Left Column */}
        <div className="w-full lg:w-1/2 lg:sticky lg:top-32 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold tracking-[0.15em] uppercase mb-8"
          >
            <TrendingUp className="w-3.5 h-3.5" />
            Performance Marketing
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tightest text-black dark:text-white mb-6 leading-[0.95]"
          >
            Attirez des clients
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-purple">
              qui veulent acheter.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-gray-500 dark:text-gray-400 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0"
          >
            SEO, publicités ciblées et automatisation. Votre site devient un aimant à prospects qualifiés, 24h/24.
          </motion.p>

          {/* Counters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center lg:justify-start gap-8 md:gap-12 py-8 border-t border-gray-200 dark:border-white/5"
          >
            <AnimatedCounter value={350} label="Croissance Moy." suffix="%" prefix="+" />
            <AnimatedCounter value={15000} label="Leads Générés" />
            <AnimatedCounter value={42} label="Clients Actifs" />
          </motion.div>
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-1/2">
          <div className="grid gap-5">
            {/* Main Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 }}
              onClick={() => setActiveModal('acquisition')}
              className="relative p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-gray-900 to-black text-white shadow-2xl overflow-hidden group cursor-pointer active:shadow-primary/20 transition-shadow duration-200"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.94 }}
            >
              {/* Shimmer */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

              <div className="relative">
                <div className="flex justify-between items-start mb-8">
                  <motion.div
                    className="p-4 bg-white/10 rounded-2xl backdrop-blur-md"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Target className="w-8 h-8" />
                  </motion.div>
                  <div className="flex items-center gap-2 bg-gradient-to-r from-primary to-accent-purple px-4 py-2 rounded-full">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span className="text-xs font-bold uppercase tracking-wider">Core System</span>
                  </div>
                </div>

                <h3 className="text-2xl lg:text-3xl font-bold mb-3 tracking-tight">
                  Acquisition Automatisée
                </h3>
                <p className="text-white/70 text-base font-medium leading-relaxed">
                  SEO technique + Google Ads. Le duo gagnant pour capturer 90% du trafic intentionniste de votre marché.
                </p>

                {/* Stats */}
                <div className="flex gap-6 mt-8 pt-6 border-t border-white/10">
                  <div>
                    <div className="text-2xl font-bold">90%</div>
                    <div className="text-xs text-white/50 uppercase tracking-wider">Trafic capturé</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">4.2x</div>
                    <div className="text-xs text-white/50 uppercase tracking-wider">ROAS moyen</div>
                  </div>
                </div>

                <div className="mt-6 text-sm font-bold text-white/60 flex items-center gap-2">
                  Cliquez pour en savoir plus <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>

            {/* Secondary Cards */}
            <div className="grid md:grid-cols-2 gap-5">
              <GrowthCard
                icon={Mail}
                title="Cold Emailing"
                desc="Campagnes B2B ultra-ciblées avec IA pour toucher les décideurs."
                gradient="from-purple-600 to-pink-500"
                serviceKey="emailing"
                onOpenModal={setActiveModal}
              />
              <GrowthCard
                icon={BarChart3}
                title="Tracking & Data"
                desc="Tableaux de bord en temps réel. Sachez combien rapporte chaque euro."
                gradient="from-blue-600 to-cyan-500"
                serviceKey="tracking"
                onOpenModal={setActiveModal}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {activeModal && (
          <ServiceModal service={activeModal} onClose={() => setActiveModal(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
