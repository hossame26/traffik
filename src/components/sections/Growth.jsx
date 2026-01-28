import React, { useState, useEffect } from 'react';
import { motion as Motion, useAnimation } from 'framer-motion';
import { Users, Search, Mail, TrendingUp, BarChart3, Target, ArrowUpRight } from 'lucide-react';

// Composant pour les compteurs animés
const Counter = ({ value, label, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(value.toString().replace(/,/g, '')); // Nettoie le nombre
    const duration = 2000;
    const increment = end / (duration / 16); // 60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="text-center md:text-left">
      <div className="text-3xl md:text-4xl font-black text-black dark:text-white mb-1">
        +{count.toLocaleString()}{suffix}
      </div>
      <div className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-500">
        {label}
      </div>
    </div>
  );
};

const GrowthCard = ({ icon: Icon, title, desc, delay }) => (
  <Motion.div
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="relative p-6 rounded-2xl bg-white/50 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-[#0066FF] dark:hover:border-[#0066FF] transition-all group backdrop-blur-sm"
  >
    <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
      <ArrowUpRight className="w-5 h-5 text-[#0066FF]" />
    </div>
    <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-white/10 flex items-center justify-center text-black dark:text-white mb-4 group-hover:bg-[#0066FF] group-hover:text-white transition-colors">
      <Icon className="w-6 h-6" />
    </div>
    <h3 className="text-lg font-bold text-black dark:text-white mb-2">{title}</h3>
    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
      {desc}
    </p>
  </Motion.div>
);

export default function Growth() {
  return (
    <section id="growth" className="relative py-32 px-4 bg-gray-50 dark:bg-black overflow-hidden">
      
      {/* Background Decoratif (Cercle Flou) */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-[#0066FF] opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        
        {/* COLONNE GAUCHE : Texte & Chiffres */}
        <div className="w-full lg:w-1/2">
          <Motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0066FF]/10 text-[#0066FF] text-[10px] font-bold tracking-widest uppercase mb-8"
          >
            <TrendingUp className="w-3 h-3" />
            Performance Marketing
          </Motion.div>

          <Motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black tracking-tighter text-black dark:text-white mb-8 leading-[0.9]"
          >
            Ne cherchez plus vos clients. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-blue-400">
              Ils vous cherchent.
            </span>
          </Motion.h2>

          <Motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 dark:text-gray-400 mb-12 leading-relaxed"
          >
            Nous déployons des systèmes d'acquisition omnicanal qui transforment votre site en une machine à générer des opportunités 24/7.
          </Motion.p>

          {/* Compteurs */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 py-8 border-t border-gray-200 dark:border-white/10">
            <Counter value={350} label="Croissance Moy." suffix="%" />
            <Counter value={15000} label="Leads Générés" suffix="+" />
            <Counter value={42} label="Clients Actifs" />
          </div>
        </div>

        {/* COLONNE DROITE : Grille de Services Interactifs */}
        <div className="w-full lg:w-1/2">
          <div className="grid gap-4">
            {/* Carte Large (Top) */}
            <Motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="p-8 rounded-3xl bg-black dark:bg-white text-white dark:text-black shadow-2xl relative overflow-hidden group"
            >
               {/* Effet brillant au survol */}
               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 dark:via-black/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
               
               <div className="flex justify-between items-start mb-6">
                 <div className="p-3 bg-white/20 dark:bg-black/10 rounded-xl backdrop-blur-md">
                   <Target className="w-8 h-8" />
                 </div>
                 <span className="text-xs font-bold bg-white/20 dark:bg-black/10 px-3 py-1 rounded-full">CORE SYSTEM</span>
               </div>
               <h3 className="text-2xl font-bold mb-2">Acquisition Automatisée</h3>
               <p className="text-white/70 dark:text-black/60 text-sm font-medium">
                 SEO technique + Google Ads. Le duo gagnant pour capturer 90% du trafic intentionniste de votre marché.
               </p>
            </Motion.div>

            {/* Grille de 2 cartes en dessous */}
            <div className="grid md:grid-cols-2 gap-4">
               <GrowthCard 
                 icon={Mail}
                 title="Cold Emailing"
                 desc="Campagnes B2B ultra-ciblées avec IA pour toucher les décideurs."
                 delay={0.2}
               />
               <GrowthCard 
                 icon={BarChart3}
                 title="Tracking & Data"
                 desc="Tableaux de bord en temps réel. Sachez exactement combien vous rapporte chaque euro."
                 delay={0.4}
               />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}