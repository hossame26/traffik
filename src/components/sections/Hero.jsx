import React, { useRef } from 'react';
import { motion as Motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

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
    <section ref={targetRef} className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden">

      {/* --- BACKGROUND EFFECTS --- */}
      <div className="absolute inset-0 bg-noise opacity-[0.05]" />

      {/* Gradient Orb - Blue Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0066FF] opacity-[0.08] blur-[150px] rounded-full pointer-events-none animate-pulse" />

      {/* Secondary Orb */}
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-[#0066FF] opacity-[0.05] blur-[100px] rounded-full pointer-events-none" />

      {/* Grille de fond */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"
           style={{ transform: 'perspective(500px) rotateX(20deg) scale(1.5)' }} />

      <Motion.div
        style={{ opacity, scale, y: yText }}
        className="relative z-10 flex flex-col items-center max-w-5xl mx-auto"
      >
        {/* Badge Minimaliste */}
        <Motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 border border-[#0066FF]/30 bg-[#0066FF]/5 backdrop-blur-md px-5 py-2.5 rounded-full text-[10px] font-bold tracking-[0.25em] mb-10 uppercase text-[#0066FF] shadow-sm"
        >
          <Sparkles className="w-3 h-3" />
          Agence Web & Marketing
        </Motion.div>

        {/* TITRE PRINCIPAL */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[0.95] tracking-tight mb-6">
          <Motion.span
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="block text-black dark:text-white"
          >
            Votre Succès
          </Motion.span>
          <Motion.span
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.4 }}
             className="block text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-[#4D94FF]"
          >
            Commence Ici.
          </Motion.span>
        </h1>

        {/* Sous-titre */}
        <Motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto text-base md:text-lg font-medium leading-relaxed mb-10"
        >
          Sites web sur-mesure qui convertissent. Campagnes publicitaires qui performent.
          <br className="hidden md:block"/>
          <span className="text-black dark:text-white font-semibold">Résultats mesurables dès le premier mois.</span>
        </Motion.p>

        {/* Boutons d'action */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto"
        >
           <a href="#contact" className="group relative bg-[#0066FF] hover:bg-[#0052CC] text-white px-8 py-4 rounded-full text-xs font-bold tracking-widest transition-all duration-300 flex justify-center items-center gap-2 shadow-lg hover:shadow-[#0066FF]/30 hover:scale-[1.02]">
              DÉMARRER MON PROJET
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
           </a>

           <a href="#solutions" className="group bg-white dark:bg-white/10 border border-gray-200 dark:border-white/10 backdrop-blur-md px-8 py-4 rounded-full text-xs font-bold tracking-widest hover:border-[#0066FF] transition-all duration-300 flex items-center gap-2 justify-center text-black dark:text-white">
              VOIR NOS OFFRES
           </a>
        </Motion.div>

        {/* Stats rapides */}
        <Motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex flex-wrap justify-center gap-6 md:gap-10 mt-12 pt-6 border-t border-gray-200 dark:border-white/10"
        >
          {[
            { value: '50+', label: 'Projets livrés' },
            { value: '350%', label: 'Croissance moyenne' },
            { value: '24h', label: 'Réponse garantie' }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-xl md:text-2xl font-black text-black dark:text-white">{stat.value}</div>
              <div className="text-[10px] text-gray-500 dark:text-gray-400 uppercase tracking-wider mt-1">{stat.label}</div>
            </div>
          ))}
        </Motion.div>
      </Motion.div>

      {/* Scroll Indicator */}
      <Motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-400 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest">Découvrir</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#0066FF] to-transparent" />
      </Motion.div>
    </section>
  );
}