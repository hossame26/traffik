import React, { useState, useEffect } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ExternalLink, X, ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  {
    title: "Plombier Marseille",
    category: "Service Local • SEO",
    url: "https://plombier-urgent-marseille.fr",
    description: "Système de génération de leads ultra-rapide. Dominance locale instantanée.",
    details: "Nous avons positionné ce client en #1 sur Google Maps en moins de 30 jours. Le site convertit 15% des visiteurs en appels téléphoniques grâce à une UX optimisée pour l'urgence.",
    year: "2025"
  },
  {
    title: "Shonen Sports",
    category: "E-commerce • Branding",
    url: "https://shonensports.com",
    description: "Fusion entre culture anime et performance sportive. Expérience d'achat immersive.",
    details: "Refonte complète de l'identité visuelle et migration vers Shopify Plus. Intégration de vidéos 3D et augmentation du panier moyen de 25%.",
    year: "2024"
  },
  {
    title: "NOCTA",
    category: "Mode • High End",
    url: "https://nocta.com",
    description: "Minimalisme radical. Une interface sombre qui laisse parler le produit.",
    details: "Développement d'une interface 'Dark Mode' native pour correspondre à l'image de marque de Drake. Animations fluides et chargement instantané.",
    year: "2024"
  },
  {
    title: "Nuvix",
    category: "SaaS • Tech",
    url: "https://nuvix.fr",
    description: "L'avenir du digital. Architecture complexe rendue simple et fluide.",
    details: "Plateforme SaaS B2B complexe simplifiée par une UI intuitive. Dashboard interactif et gestion de données en temps réel.",
    year: "2025"
  }
];

// Laptop Mockup Component
const LaptopMockup = ({ children }) => (
  <div className="relative w-full max-w-4xl mx-auto">
    {/* Laptop Screen */}
    <div className="relative bg-gray-900 rounded-t-xl md:rounded-t-2xl p-2 md:p-3">
      {/* Camera */}
      <div className="absolute top-1 md:top-1.5 left-1/2 -translate-x-1/2 w-2 h-2 md:w-3 md:h-3 bg-gray-700 rounded-full flex items-center justify-center">
        <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-gray-600 rounded-full" />
      </div>

      {/* Screen Content */}
      <div className="relative bg-black rounded-lg overflow-hidden aspect-[16/10]">
        {children}
      </div>
    </div>

    {/* Laptop Base */}
    <div className="relative">
      {/* Hinge */}
      <div className="h-2 md:h-3 bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-sm" />
      {/* Base */}
      <div className="h-3 md:h-4 bg-gradient-to-b from-gray-800 to-gray-900 rounded-b-xl mx-4 md:mx-8" />
      {/* Bottom Shadow */}
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3/4 h-4 bg-black/20 blur-xl rounded-full" />
    </div>
  </div>
);

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-scroll every 4 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const currentProject = projects[currentIndex];

  return (
    <section id="projets" className="relative py-20 md:py-32 px-4 bg-gray-50 dark:bg-[#080808] overflow-hidden">

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <Motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 rounded-full bg-[#0066FF]/10 text-[#0066FF] text-[9px] font-bold tracking-[0.2em] uppercase mb-4"
          >
            Portfolio
          </Motion.span>
          <Motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black tracking-tight text-black dark:text-white mb-4"
          >
            Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-purple-600">Réalisations</span>
          </Motion.h2>
          <Motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-500 dark:text-gray-400 text-sm md:text-base max-w-lg mx-auto"
          >
            Des projets qui génèrent des résultats concrets pour nos clients.
          </Motion.p>
        </div>

        {/* Laptop Carousel */}
        <Motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <LaptopMockup>
            <AnimatePresence mode="wait">
              <Motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="relative w-full h-full cursor-pointer group"
                onClick={() => setSelectedProject(currentProject)}
              >
                {/* Screenshot */}
                <img
                  src={`https://api.microlink.io?url=${encodeURIComponent(currentProject.url)}&screenshot=true&meta=false&embed=screenshot.url&screenshot.width=1200&screenshot.height=750&screenshot.type=jpeg&screenshot.quality=80`}
                  alt={currentProject.title}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                {/* Project Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8">
                  <Motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <span className="inline-block px-3 py-1 mb-3 rounded-full bg-white/20 backdrop-blur-md text-white text-[10px] font-bold tracking-wider uppercase">
                      {currentProject.category}
                    </span>
                    <h3 className="text-xl md:text-3xl font-black text-white mb-2">
                      {currentProject.title}
                    </h3>
                    <p className="text-gray-300 text-xs md:text-sm max-w-md hidden md:block">
                      {currentProject.description}
                    </p>
                  </Motion.div>
                </div>

                {/* Click indicator */}
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </div>
              </Motion.div>
            </AnimatePresence>
          </LaptopMockup>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-0 md:-left-12 top-1/2 -translate-y-1/2 p-2 md:p-3 rounded-full bg-white dark:bg-white/10 border border-gray-200 dark:border-white/10 text-black dark:text-white hover:bg-[#0066FF] hover:text-white hover:border-[#0066FF] transition-all shadow-lg z-10"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 md:-right-12 top-1/2 -translate-y-1/2 p-2 md:p-3 rounded-full bg-white dark:bg-white/10 border border-gray-200 dark:border-white/10 text-black dark:text-white hover:bg-[#0066FF] hover:text-white hover:border-[#0066FF] transition-all shadow-lg z-10"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </Motion.div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 mt-8">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'w-8 bg-[#0066FF]'
                  : 'w-2 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600'
              }`}
            >
              {index === currentIndex && isAutoPlaying && (
                <Motion.div
                  className="absolute inset-0 bg-[#0066FF]/50 rounded-full"
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 4, ease: "linear" }}
                  key={currentIndex}
                />
              )}
            </button>
          ))}
        </div>

        {/* Project Quick Info */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 flex justify-center"
        >
          <button
            onClick={() => setSelectedProject(currentProject)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black dark:bg-white text-white dark:text-black text-xs font-bold tracking-wider hover:scale-105 transition-transform"
          >
            VOIR LES DÉTAILS <ArrowUpRight className="w-4 h-4" />
          </button>
        </Motion.div>
      </div>

      {/* --- MODAL SYSTEM --- */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <Motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-xl"
            />

            <Motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl bg-white dark:bg-[#111] rounded-3xl overflow-hidden shadow-2xl border border-white/10 max-h-[90vh] flex flex-col"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 text-white hover:bg-black transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative h-48 md:h-72 shrink-0">
                <img
                   src={`https://api.microlink.io?url=${encodeURIComponent(selectedProject.url)}&screenshot=true&meta=false&embed=screenshot.url&screenshot.width=1200&screenshot.height=675&screenshot.type=jpeg&screenshot.quality=75`}
                   alt={selectedProject.title}
                   className="w-full h-full object-cover"
                   loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent" />

                <div className="absolute bottom-6 left-6 md:left-10">
                   <span className="inline-block px-3 py-1 mb-3 rounded-full bg-[#0066FF] text-white text-[10px] font-bold tracking-widest uppercase shadow-lg">
                      {selectedProject.category}
                   </span>
                   <h3 className="text-2xl md:text-4xl font-black text-white tracking-tight">{selectedProject.title}</h3>
                </div>
              </div>

              <div className="p-6 md:p-10 overflow-y-auto">
                 <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-1">
                       <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Le Projet</h4>
                       <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed mb-6">
                         {selectedProject.details || selectedProject.description}
                       </p>

                       <div className="grid grid-cols-2 gap-4">
                          <div className="p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5">
                             <div className="text-xl font-bold text-black dark:text-white">{selectedProject.year}</div>
                             <div className="text-[10px] text-gray-500 uppercase tracking-wider">Année</div>
                          </div>
                          <div className="p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5">
                             <div className="text-xl font-bold text-black dark:text-white">100%</div>
                             <div className="text-[10px] text-gray-500 uppercase tracking-wider">Satisfaction</div>
                          </div>
                       </div>
                    </div>

                    <div className="w-full md:w-1/3 shrink-0 flex flex-col justify-end">
                       <a
                         href={selectedProject.url}
                         target="_blank"
                         rel="noopener noreferrer"
                         className="w-full py-4 rounded-xl bg-[#0066FF] hover:bg-[#0055D4] text-white font-bold tracking-widest uppercase text-center text-sm transition-all shadow-lg hover:shadow-[#0066FF]/25 flex items-center justify-center gap-2"
                       >
                         Visiter le site <ExternalLink className="w-4 h-4" />
                       </a>
                    </div>
                 </div>
              </div>
            </Motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
