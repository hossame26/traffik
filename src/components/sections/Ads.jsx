import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Check, Users, Zap, ArrowRight, MousePointer2 } from 'lucide-react';
import { CircularProgress } from "@heroui/react";

// Platform Icons SVG
const PlatformIcons = {
  meta: (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
      <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.52 1.49-3.91 3.78-3.91 1.09 0 2.24.19 2.24.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 008.44-9.9c0-5.53-4.5-10.02-10.01-10.02z"/>
    </svg>
  ),
  google: (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
      <path d="M12.545 10.239v3.821h5.445c-.712 2.315-2.647 3.972-5.445 3.972a6.033 6.033 0 110-12.064c1.498 0 2.866.549 3.921 1.453l2.814-2.814A9.969 9.969 0 0012.545 2C6.477 2 1.545 6.932 1.545 13s4.932 11 11 11c6.076 0 10.455-4.277 10.455-10.285 0-.69-.073-1.363-.21-2.008l-10.245-.468z"/>
    </svg>
  ),
  tiktok: (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  ),
  snap: (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
      <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12 1.033-.301.165-.088.344-.104.464-.104.182 0 .359.029.509.09.45.149.734.479.734.838.015.449-.39.839-1.213 1.168-.089.029-.209.075-.344.119-.45.135-1.139.36-1.333.81-.09.224-.061.524.12.868l.015.015c.06.136 1.526 3.475 4.791 4.014.255.044.435.27.42.509 0 .075-.015.149-.045.225-.24.569-1.273.988-3.146 1.271-.059.091-.12.375-.164.57-.029.179-.074.36-.134.553-.076.271-.27.405-.555.405h-.03a1.821 1.821 0 01-.484-.075 4.782 4.782 0 00-1.066-.12c-.255 0-.524.015-.78.045-.375.044-.75.179-1.168.359-.869.405-1.639.795-2.774.795-.06 0-.12 0-.179-.015h-.09c-1.139 0-1.909-.39-2.779-.795-.42-.179-.794-.314-1.168-.359a6.918 6.918 0 00-.779-.045c-.375 0-.734.045-1.066.12a1.855 1.855 0 01-.484.075c-.284 0-.479-.134-.554-.405a4.247 4.247 0 01-.135-.554c-.044-.194-.104-.479-.164-.569-1.873-.284-2.906-.704-3.146-1.271a.564.564 0 01-.045-.225c-.015-.239.165-.465.42-.509 3.264-.54 4.73-3.879 4.791-4.02l.016-.029c.18-.345.209-.645.119-.869-.194-.449-.884-.674-1.333-.809a3.73 3.73 0 01-.345-.12c-.823-.329-1.227-.72-1.212-1.168 0-.359.284-.689.734-.838.149-.06.329-.09.509-.09.12 0 .3.016.464.105.374.18.734.284 1.034.3.197 0 .326-.044.4-.089-.007-.165-.019-.33-.03-.51l-.003-.06c-.105-1.628-.23-3.654.3-4.847C7.859 1.069 11.216.793 12.206.793z"/>
    </svg>
  ),
  pinterest: (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
    </svg>
  ),
};

const platforms = [
  { id: 'meta', name: 'Meta Ads', desc: 'Facebook & Instagram', reach: 45, gradient: 'from-blue-600 to-blue-400' },
  { id: 'google', name: 'Google Ads', desc: 'Search & YouTube', reach: 35, gradient: 'from-green-500 to-cyan-400' },
  { id: 'tiktok', name: 'TikTok Ads', desc: 'Viralité & Jeunesse', reach: 25, gradient: 'from-pink-500 to-rose-400' },
  { id: 'linkedin', name: 'LinkedIn', desc: 'Décideurs B2B', reach: 12, gradient: 'from-blue-700 to-blue-500' },
  { id: 'snap', name: 'Snapchat', desc: 'Gen Z & Lifestyle', reach: 18, gradient: 'from-yellow-400 to-yellow-300' },
  { id: 'pinterest', name: 'Pinterest', desc: 'Inspiration & Shopping', reach: 15, gradient: 'from-red-500 to-pink-400' },
];

function PlatformButton({ platform, isSelected, onClick, index }) {
  return (
    <motion.button
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      viewport={{ once: true }}
      className={`
        group relative flex items-center gap-4 p-5 rounded-2xl border text-left
        transition-all duration-300 overflow-hidden
        ${isSelected
          ? `bg-gradient-to-r ${platform.gradient} border-transparent shadow-[0_8px_30px_-8px_rgba(0,0,0,0.3)]`
          : 'bg-white dark:bg-white/[0.02] border-gray-100 dark:border-white/5 hover:border-gray-200 dark:hover:border-white/10 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.15)] dark:shadow-none'
        }
      `}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Icon */}
      <div
        className={`
          w-12 h-12 rounded-xl flex items-center justify-center
          transition-all duration-300
          ${isSelected
            ? 'bg-white/20 backdrop-blur-sm text-white'
            : 'bg-gray-100 dark:bg-white/5 text-gray-500'
          }
        `}
      >
        {PlatformIcons[platform.id]}
      </div>

      {/* Text */}
      <div className="flex-1">
        <h3 className={`font-bold transition-colors ${isSelected ? 'text-white' : 'text-black dark:text-white'}`}>
          {platform.name}
        </h3>
        <p className={`text-xs mt-0.5 ${isSelected ? 'text-white/70' : 'text-gray-500'}`}>
          {platform.desc}
        </p>
      </div>

      {/* Check Circle */}
      <div
        className={`
          w-6 h-6 rounded-full border-2 flex items-center justify-center
          transition-all duration-300
          ${isSelected
            ? 'bg-white border-white'
            : 'border-gray-300 dark:border-white/20'
          }
        `}
      >
        {isSelected && <Check size={14} className="text-gray-800" strokeWidth={3} />}
      </div>
    </motion.button>
  );
}

export default function Ads() {
  const [selectedIds, setSelectedIds] = useState(['meta', 'google', 'tiktok']);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const togglePlatform = (id) => {
    setSelectedIds(prev =>
      prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
    );
  };

  // Reach in thousands (K)
  const totalReach = platforms
    .filter(p => selectedIds.includes(p.id))
    .reduce((acc, p) => acc + p.reach, 0);

  const reachPercentage = Math.min((totalReach / 150) * 100, 100);

  return (
    <section
      id="ads"
      ref={sectionRef}
      className="relative py-16 lg:py-20 px-4 overflow-hidden bg-[#F8F9FA] dark:bg-black transition-colors duration-500"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary opacity-[0.02] blur-[200px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold tracking-[0.2em] uppercase mb-6"
          >
            Publicité Multi-Plateforme
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tightest text-black dark:text-white mb-6"
          >
            Touchez votre audience
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-purple">
              partout où elle se trouve.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-gray-500 dark:text-gray-400 text-base md:text-lg max-w-xl mx-auto"
          >
            Facebook, Google, TikTok - on gère tout pour maximiser votre ROI.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Platform Selector - Desktop */}
          <div className="hidden sm:grid lg:col-span-8 grid-cols-2 gap-4">
            {platforms.map((platform, index) => (
              <PlatformButton
                key={platform.id}
                platform={platform}
                isSelected={selectedIds.includes(platform.id)}
                onClick={() => togglePlatform(platform.id)}
                index={index}
              />
            ))}
          </div>

          {/* Platform Selector - Mobile (Icons Only) */}
          <div className="sm:hidden lg:col-span-8">
            <div className="grid grid-cols-6 gap-3">
              {platforms.map((platform, index) => {
                const isSelected = selectedIds.includes(platform.id);
                return (
                  <motion.button
                    key={platform.id}
                    onClick={() => togglePlatform(platform.id)}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    viewport={{ once: true }}
                    whileTap={{ scale: 0.9 }}
                    className={`
                      aspect-square rounded-2xl flex items-center justify-center
                      transition-all duration-300 relative
                      ${isSelected
                        ? `bg-gradient-to-br ${platform.gradient} shadow-lg`
                        : 'bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/10'
                      }
                    `}
                  >
                    <div className={`${isSelected ? 'text-white' : 'text-gray-500 dark:text-gray-400'}`}>
                      {PlatformIcons[platform.id]}
                    </div>
                    {isSelected && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center shadow-md"
                      >
                        <Check size={10} className="text-green-500" strokeWidth={3} />
                      </motion.div>
                    )}
                  </motion.button>
                );
              })}
            </div>
            <p className="text-center text-xs text-gray-400 mt-3">
              Appuyez pour sélectionner les plateformes
            </p>
          </div>

          {/* Summary Panel */}
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="bg-white dark:bg-white/[0.02] border border-gray-100 dark:border-white/5 p-8 rounded-3xl relative overflow-hidden shadow-[0_8px_40px_-12px_rgba(0,0,0,0.15)] dark:shadow-none"
            >
              {/* Popular Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute top-0 right-0 m-6 bg-gradient-to-r from-primary to-primary-light text-white text-[9px] font-bold tracking-[0.15em] px-3 py-1.5 rounded-full shadow-lg shadow-primary/30 uppercase"
              >
                Populaire
              </motion.div>

              <h3 className="text-xl font-bold text-black dark:text-white mb-8 flex items-center gap-2">
                <Zap className="text-primary" size={20} />
                Résultats Estimés
              </h3>

              <div className="space-y-6">
                {/* Circular Progress */}
                <div className="bg-[#F8F9FA] dark:bg-black/20 rounded-2xl p-6 border border-gray-100 dark:border-white/5">
                  <div className="flex items-center gap-3 mb-4 text-gray-400 text-xs uppercase tracking-wider font-bold">
                    <Users size={14} /> Audience Potentielle
                  </div>

                  <div className="flex items-center gap-6">
                    <CircularProgress
                      classNames={{
                        svg: "w-24 h-24",
                        indicator: "stroke-primary",
                        track: "stroke-gray-200 dark:stroke-white/10",
                        value: "text-2xl font-bold text-black dark:text-white",
                      }}
                      value={reachPercentage}
                      strokeWidth={3}
                      showValueLabel={false}
                    />

                    <div>
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={totalReach}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="text-4xl font-bold text-black dark:text-white"
                        >
                          {totalReach}K
                        </motion.div>
                      </AnimatePresence>
                      <div className="text-sm text-gray-500 font-medium">personnes/mois</div>
                    </div>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-3">
                  {[
                    { label: 'Ciblage Précis', value: 'Inclus' },
                    { label: 'Visuels & Textes', value: 'Inclus' },
                    { label: 'Suivi des Ventes', value: 'Hebdomadaire' },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      className="flex justify-between text-sm"
                    >
                      <span className="text-gray-500 dark:text-gray-400">{item.label}</span>
                      <span className="text-black dark:text-white font-bold">{item.value}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.a
                  href="#contact"
                  className="
                    w-full py-4 rounded-2xl
                    bg-gradient-to-r from-primary to-primary-light
                    text-white font-bold tracking-wide
                    flex items-center justify-center gap-2
                    shadow-[0_10px_40px_-8px_rgba(0,102,255,0.5)]
                    shimmer-button overflow-hidden
                  "
                  whileHover={{ scale: 1.02, boxShadow: '0 16px 50px -8px rgba(0,102,255,0.6)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">LANCER CE PACK</span>
                  <ArrowRight size={18} className="relative z-10" />
                </motion.a>

                <p className="text-center text-[10px] text-gray-400 flex items-center justify-center gap-1">
                  <MousePointer2 size={10} />
                  Sélectionnez les plateformes à gauche
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
