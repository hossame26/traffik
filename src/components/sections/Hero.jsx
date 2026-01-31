import React, { useRef } from 'react';
import { motion as Motion, useScroll, useTransform } from 'framer-motion';
import { ChevronRight, PlayCircle } from 'lucide-react';

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
      
      {/* Orbite Blanche (Ghost) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white opacity-[0.05] blur-[150px] rounded-full pointer-events-none" />
      
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
          className="inline-flex items-center gap-2 border border-black/10 dark:border-white/10 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full text-[10px] font-bold tracking-[0.25em] mb-10 uppercase text-gray-500 dark:text-gray-300 shadow-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-gray-400 dark:bg-white"></span>
          </span>
          Agence Digitale
        </Motion.div>
        
        {/* TITRE MONOCHROME */}
        <h1 className="text-6xl md:text-[8rem] lg:text-[9rem] font-black leading-[0.85] tracking-tighter mb-8 mix-blend-screen dark:mix-blend-normal">
          <Motion.span 
             initial={{ opacity: 0, x: -50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="block text-black dark:text-white drop-shadow-2xl dark:drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]"
          >
            TRAFIC
          </Motion.span>
          <Motion.span 
             initial={{ opacity: 0, x: 50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8, delay: 0.4 }}
             className="block text-gray-300 dark:text-gray-600"
          >
            INFINI.
          </Motion.span>
        </h1>

        {/* Sous-titre */}
        <Motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto text-lg md:text-xl font-medium leading-relaxed mb-12"
        >
          L'infrastructure complète pour scaler votre business. <br className="hidden md:block"/>
          <span className="text-black dark:text-white">Sites Web Haute Performance</span> + <span className="text-black dark:text-white">Ads Chirurgicales</span>.
        </Motion.p>

        {/* Boutons d'action (Noir & Blanc + Hover Bleu) */}
        <Motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col md:flex-row gap-6 w-full md:w-auto px-6"
        >
           <a href="#contact" className="group relative bg-black dark:bg-white text-white dark:text-black px-10 py-5 rounded-full text-sm font-bold tracking-widest hover:scale-105 transition-all duration-300 flex justify-center items-center shadow-lg overflow-hidden border border-transparent hover:border-[#0066FF] hover:text-[#0066FF] dark:hover:text-[#0066FF]">
              <span className="relative z-10">RÉSERVER UN AUDIT</span>
           </a>
           
           <a href="#solutions" className="group bg-transparent border border-gray-300 dark:border-white/20 backdrop-blur-md px-10 py-5 rounded-full text-sm font-bold tracking-widest hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-300 flex items-center gap-3 justify-center text-black dark:text-white">
              <PlayCircle className="w-5 h-5 text-black dark:text-white group-hover:text-[#0066FF] transition-colors" />
              VOIR LA DÉMO
           </a>
        </Motion.div>
      </Motion.div>

      {/* Scroll Indicator */}
      <Motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gray-400 dark:bg-gray-600" />
      </Motion.div>
    </section>
  );
}