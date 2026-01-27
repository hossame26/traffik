import React, { useState } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { Check, BarChart3, Users, Zap, ArrowRight, MousePointer2 } from 'lucide-react';

const platforms = [
  { id: 'meta', name: 'Meta Ads', icon: 'M', desc: 'Facebook & Instagram' },
  { id: 'google', name: 'Google Ads', icon: 'G', desc: 'Search & YouTube' },
  { id: 'tiktok', name: 'TikTok Ads', icon: 'T', desc: 'Viralité & Jeunesse' },
  { id: 'linkedin', name: 'LinkedIn', icon: 'L', desc: 'Décideurs B2B' },
  { id: 'snap', name: 'Snapchat', icon: 'S', desc: 'Gen Z & Lifestyle' },
  { id: 'pinterest', name: 'Pinterest', icon: 'P', desc: 'Inspiration & Shopping' },
];

export default function Ads() {
  const [selectedIds, setSelectedIds] = useState(['meta', 'google', 'tiktok']);

  const togglePlatform = (id) => {
    setSelectedIds(prev => 
      prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
    );
  };

  // Calcul factice
  const totalReach = selectedIds.reduce((acc) => acc + 1.2, 0).toFixed(1);

  return (
    <section className="relative py-32 px-4 overflow-hidden bg-white dark:bg-black transition-colors duration-500">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white opacity-[0.02] blur-[150px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <Motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-gray-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-white animate-pulse" />
            Configurateur
          </Motion.div>
          <Motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-black tracking-tighter text-black dark:text-white mb-6"
          >
            Construisez votre <br />
            <span className="text-gray-400 dark:text-gray-500">Machine d'Acquisition.</span>
          </Motion.h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Sélectionnez vos canaux. Nous synchronisons votre message partout où se trouve votre audience.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Selector Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {platforms.map((platform, index) => {
              const isSelected = selectedIds.includes(platform.id);
              return (
                <Motion.button
                  key={platform.id}
                  onClick={() => togglePlatform(platform.id)}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className={`group relative flex items-center gap-4 p-5 rounded-2xl border text-left transition-all duration-300 ${
                    isSelected 
                      ? 'bg-black dark:bg-white border-black dark:border-white shadow-xl' 
                      : 'bg-transparent border-gray-200 dark:border-white/5 hover:border-black/20 dark:hover:border-white/20 hover:bg-gray-50 dark:hover:bg-white/5'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold transition-colors ${
                    isSelected ? 'bg-white dark:bg-black text-black dark:text-white' : 'bg-gray-100 dark:bg-white/5 text-gray-400'
                  }`}>
                    {platform.icon}
                  </div>
                  <div>
                    <h3 className={`font-bold transition-colors ${isSelected ? 'text-white dark:text-black' : 'text-gray-400'}`}>
                      {platform.name}
                    </h3>
                    <p className={`text-xs mt-1 ${isSelected ? 'text-gray-300 dark:text-gray-600' : 'text-gray-500'}`}>{platform.desc}</p>
                  </div>
                  
                  {/* Check Circle */}
                  <div className={`absolute top-5 right-5 w-6 h-6 rounded-full border flex items-center justify-center transition-all ${
                    isSelected ? 'bg-white dark:bg-black border-transparent' : 'border-gray-200 dark:border-white/10'
                  }`}>
                    {isSelected && <Check size={14} className="text-black dark:text-white" />}
                  </div>
                </Motion.button>
              );
            })}
          </div>

          {/* Right: Summary Panel (Sticky) */}
          <div className="lg:col-span-4 sticky top-32">
            <Motion.div 
              className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 p-8 rounded-3xl relative overflow-hidden backdrop-blur-xl"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {/* Badge Populaire */}
              <div className="absolute top-0 right-0 m-6 bg-[#0066FF] text-white text-[9px] font-black tracking-[0.2em] px-3 py-1.5 rounded-full shadow-lg z-20 uppercase">
                POPULAIRE
              </div>

              <h3 className="text-xl font-bold text-black dark:text-white mb-6 flex items-center gap-2">
                <Zap className="text-black dark:text-white fill-current" size={20} />
                Résultats Estimés
              </h3>

              <div className="space-y-6">
                <div className="bg-white dark:bg-black/40 rounded-2xl p-5 border border-gray-100 dark:border-white/5">
                  <div className="flex items-center gap-3 mb-2 text-gray-400 text-xs uppercase tracking-wider font-bold">
                    <Users size={14} /> Audience Potentielle
                  </div>
                  <div className="text-4xl font-black text-black dark:text-white flex items-end gap-2">
                    <AnimatePresence mode="wait">
                      <Motion.span
                        key={totalReach}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                      >
                        {totalReach}M
                      </Motion.span>
                    </AnimatePresence>
                    <span className="text-lg text-gray-500 font-medium mb-1">personnes</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-white/10 h-1.5 rounded-full mt-4 overflow-hidden">
                    <Motion.div 
                      className="h-full bg-black dark:bg-white"
                      initial={{ width: 0 }}
                      animate={{ width: `${Math.min((parseFloat(totalReach) / 10) * 100, 100)}%` }}
                      transition={{ type: 'spring', stiffness: 50 }}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500 dark:text-gray-400">Ciblage Précis</span>
                    <span className="text-black dark:text-white font-bold">Inclus</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500 dark:text-gray-400">Visuels & Textes</span>
                    <span className="text-black dark:text-white font-bold">Inclus</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500 dark:text-gray-400">Suivi des Ventes</span>
                    <span className="text-black dark:text-white font-bold">Hebdomadaire</span>
                  </div>
                </div>

                <button className="w-full py-4 bg-black dark:bg-white text-white dark:text-black rounded-xl font-bold tracking-wide hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-lg border-2 border-transparent hover:border-[#0066FF] hover:text-[#0066FF] dark:hover:text-[#0066FF] hover:bg-white dark:hover:bg-black">
                  LANCER CE PACK <ArrowRight size={18} />
                </button>
                
                <p className="text-center text-[10px] text-gray-400 mt-2">
                  <MousePointer2 size={10} className="inline mr-1" />
                  Sélectionnez les plateformes à gauche
                </p>
              </div>
            </Motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
