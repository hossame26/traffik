import React, { useRef } from 'react';
import { motion as Motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, TrendingUp, Users, ShoppingBag, Search, MousePointer, Star } from 'lucide-react';

// TikTok Icon
const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
  </svg>
);

// Floating cards data
const floatingCards = [
  {
    id: 1,
    type: 'revenue',
    title: 'Shopify',
    value: '+12 847 €',
    label: 'VENTES CE MOIS',
    color: 'from-green-500 to-green-600',
    borderColor: 'border-green-500/50',
    position: 'top-[18%] left-[2%] xl:left-[5%]',
    delay: 0,
    icon: <ShoppingBag className="w-4 h-4" />,
  },
  {
    id: 2,
    type: 'ads',
    title: 'Meta Ads',
    value: 'ROAS 4.2x',
    label: 'CAMPAGNE ACTIVE',
    color: 'from-blue-500 to-indigo-600',
    borderColor: 'border-blue-500/50',
    position: 'top-[15%] right-[2%] xl:right-[8%]',
    delay: 0.5,
    icon: <MousePointer className="w-4 h-4" />,
  },
  {
    id: 3,
    type: 'seo',
    title: 'Google',
    value: '#1',
    label: 'POSITION MOT-CLÉ',
    color: 'from-orange-500 to-red-500',
    borderColor: 'border-orange-500/50',
    position: 'bottom-[20%] left-[2%] xl:left-[8%]',
    delay: 1,
    icon: <Search className="w-4 h-4" />,
  },
  {
    id: 4,
    type: 'tiktok',
    title: 'TikTok',
    value: '1.2M',
    label: 'VUES CETTE SEMAINE',
    color: 'from-pink-500 to-rose-500',
    borderColor: 'border-pink-500/50',
    position: 'bottom-[15%] right-[2%] xl:right-[10%]',
    delay: 1.5,
    icon: <TikTokIcon />,
  },
  {
    id: 5,
    type: 'visitors',
    title: 'Visiteurs',
    value: '24.8K',
    label: 'CE MOIS',
    color: 'from-cyan-500 to-cyan-600',
    borderColor: 'border-cyan-500/50',
    position: 'top-[45%] left-[1%] xl:left-[3%]',
    delay: 2,
    icon: <Users className="w-4 h-4" />,
  },
  {
    id: 6,
    type: 'reviews',
    title: 'Avis Clients',
    value: '5.0',
    label: '50+ AVIS',
    color: 'from-yellow-500 to-orange-500',
    borderColor: 'border-yellow-500/50',
    position: 'top-[48%] right-[1%] xl:right-[5%]',
    delay: 2.5,
    icon: <Star className="w-4 h-4 fill-current" />,
  },
];

// Sparkle particles
const Sparkle = ({ delay, x, y, size }) => (
  <Motion.div
    className="absolute pointer-events-none"
    style={{ left: x, top: y }}
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0, 1, 0],
      scale: [0, 1, 0],
      rotate: [0, 180],
    }}
    transition={{
      duration: 2,
      delay: delay,
      repeat: Infinity,
      repeatDelay: Math.random() * 3,
    }}
  >
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="url(#sparkle-gradient)"/>
      <defs>
        <linearGradient id="sparkle-gradient" x1="0" y1="0" x2="24" y2="24">
          <stop stopColor="#0066FF"/>
          <stop offset="1" stopColor="#A855F7"/>
        </linearGradient>
      </defs>
    </svg>
  </Motion.div>
);

const sparkles = [
  { x: '15%', y: '20%', delay: 0, size: 16 },
  { x: '85%', y: '25%', delay: 0.5, size: 12 },
  { x: '10%', y: '60%', delay: 1, size: 14 },
  { x: '90%', y: '55%', delay: 1.5, size: 10 },
  { x: '25%', y: '80%', delay: 2, size: 12 },
  { x: '75%', y: '75%', delay: 2.5, size: 16 },
  { x: '50%', y: '15%', delay: 3, size: 10 },
  { x: '30%', y: '35%', delay: 0.8, size: 8 },
  { x: '70%', y: '40%', delay: 1.3, size: 8 },
];

const FloatingCard = ({ card }) => {
  return (
    <Motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: card.delay * 0.3, duration: 0.6 }}
      className={`absolute ${card.position} z-20 hidden lg:block`}
    >
      <Motion.div
        animate={{
          y: [0, -12, 0],
          rotate: [0, 1, -1, 0],
        }}
        transition={{
          duration: 4 + card.delay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{ scale: 1.08, y: -15 }}
        className={`relative p-4 rounded-2xl bg-black/90 backdrop-blur-xl border ${card.borderColor} shadow-2xl cursor-pointer min-w-[150px]`}
      >
        {/* Glow effect */}
        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${card.color} opacity-10 blur-xl`} />

        {/* Live indicator */}
        <div className="absolute top-3 right-3 flex items-center gap-1">
          <span className="relative flex h-2 w-2">
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full bg-gradient-to-r ${card.color} opacity-75`}></span>
            <span className={`relative inline-flex rounded-full h-2 w-2 bg-gradient-to-r ${card.color}`}></span>
          </span>
          <span className="text-[8px] text-gray-400 font-bold">LIVE</span>
        </div>

        {/* Header */}
        <div className="relative flex items-center gap-2 mb-3">
          <div className={`p-1.5 rounded-lg bg-gradient-to-r ${card.color} text-white`}>
            {card.icon}
          </div>
          <span className="text-xs font-bold text-white">{card.title}</span>
        </div>

        {/* Value */}
        <div className={`relative text-2xl font-black bg-gradient-to-r ${card.color} bg-clip-text text-transparent`}>
          {card.value}
        </div>

        {/* Label */}
        <div className="relative text-[9px] text-gray-400 font-bold tracking-wider mt-1">
          {card.label}
        </div>
      </Motion.div>
    </Motion.div>
  );
};

export default function Hero() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const yText = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  return (
    <section ref={targetRef} className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden bg-[#F5F5F7] dark:bg-[#050505]">

      {/* --- BACKGROUND EFFECTS --- */}
      <div className="absolute inset-0 bg-noise opacity-[0.03]" />

      {/* Gradient Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#0066FF] opacity-[0.07] blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-purple-500 opacity-[0.05] blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-green-500 opacity-[0.05] blur-[120px] rounded-full pointer-events-none" />

      {/* Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"
           style={{ transform: 'perspective(500px) rotateX(20deg) scale(1.5)' }} />

      {/* Sparkles */}
      {sparkles.map((sparkle, i) => (
        <Sparkle key={i} {...sparkle} />
      ))}

      {/* Floating Cards */}
      {floatingCards.map((card) => (
        <FloatingCard key={card.id} card={card} />
      ))}

      <Motion.div
        style={{ opacity, scale, y: yText }}
        className="relative z-10 flex flex-col items-center max-w-4xl mx-auto"
      >
        {/* Badge */}
        <Motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 border border-[#0066FF]/30 bg-[#0066FF]/10 backdrop-blur-md px-4 py-2 rounded-full text-[10px] font-bold tracking-[0.2em] mb-8 uppercase text-[#0066FF]"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0066FF] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0066FF]"></span>
          </span>
          Agence Web & Marketing
        </Motion.div>

        {/* TITRE PRINCIPAL */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight mb-6">
          <Motion.span
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="block text-black dark:text-white"
          >
            SITES QUI
          </Motion.span>
          <Motion.span
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.4 }}
             className="block text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] via-purple-500 to-[#0066FF] bg-[length:200%_auto] animate-gradient"
          >
            CONVERTISSENT.
          </Motion.span>
        </h1>

        {/* Sous-titre */}
        <Motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto text-sm md:text-base font-medium leading-relaxed mb-8"
        >
          On crée des sites web qui génèrent du <span className="text-black dark:text-white font-semibold">chiffre d'affaires</span>.
          Pas juste des pixels.
        </Motion.p>

        {/* Boutons d'action */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto"
        >
           <a href="#contact" className="group relative bg-[#0066FF] hover:bg-[#0052CC] text-white px-8 py-4 rounded-full text-xs font-bold tracking-widest transition-all duration-300 flex justify-center items-center gap-2 shadow-lg shadow-[#0066FF]/30 hover:shadow-[#0066FF]/50 hover:scale-[1.02]">
              DÉMARRER MON PROJET
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
           </a>

           <a href="#solutions" className="group bg-white dark:bg-white/10 border border-gray-200 dark:border-white/10 backdrop-blur-md px-8 py-4 rounded-full text-xs font-bold tracking-widest hover:border-[#0066FF] transition-all duration-300 flex items-center gap-2 justify-center text-black dark:text-white">
              VOIR NOS OFFRES
           </a>
        </Motion.div>

        {/* Mini stats */}
        <Motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex flex-wrap justify-center gap-6 md:gap-10 mt-12 pt-6 border-t border-gray-200 dark:border-white/10"
        >
          {[
            { value: '50+', label: 'Projets' },
            { value: '350%', label: 'ROI moyen' },
            { value: '24h', label: 'Réponse' }
          ].map((stat, i) => (
            <Motion.div
              key={i}
              className="text-center"
              whileHover={{ scale: 1.1 }}
            >
              <div className="text-xl md:text-2xl font-black text-black dark:text-white">{stat.value}</div>
              <div className="text-[10px] text-gray-500 dark:text-gray-400 uppercase tracking-wider mt-1">{stat.label}</div>
            </Motion.div>
          ))}
        </Motion.div>
      </Motion.div>

      {/* Scroll Indicator */}
      <Motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 flex flex-col items-center gap-2"
      >
        <span className="text-[9px] uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-[#0066FF] to-transparent" />
      </Motion.div>
    </section>
  );
}
