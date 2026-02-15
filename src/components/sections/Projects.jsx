import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion as Motion, AnimatePresence, useInView } from 'framer-motion';
import { ArrowUpRight, ExternalLink, X, ChevronLeft, ChevronRight } from 'lucide-react';
// Animated signature underline
const SignatureUnderline = () => (
  <Motion.svg
    viewBox="0 0 200 20"
    className="absolute -bottom-2 left-0 w-full h-auto"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
  >
    <Motion.path
      d="M0 15 Q 40 5, 80 12 T 160 8 T 200 15"
      fill="none"
      stroke="url(#gradient)"
      strokeWidth="3"
      strokeLinecap="round"
      variants={{
        hidden: { pathLength: 0, opacity: 0 },
        visible: {
          pathLength: 1,
          opacity: 1,
          transition: { duration: 1.2, delay: 0.5, ease: "easeOut" }
        }
      }}
    />
    <defs>
      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#0066FF" />
        <stop offset="100%" stopColor="#A855F7" />
      </linearGradient>
    </defs>
  </Motion.svg>
);

// Animated text with letter-by-letter reveal
const AnimatedTitle = ({ text, className }) => {
  const letters = text.split('');

  return (
    <span className={`relative inline-block ${className}`}>
      {letters.map((letter, i) => (
        <Motion.span
          key={i}
          initial={{ opacity: 0, y: 20, rotateX: -90 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
            delay: 0.3 + i * 0.05,
            ease: [0.25, 0.1, 0.25, 1]
          }}
          className="inline-block"
          style={{ transformOrigin: 'bottom' }}
        >
          {letter}
        </Motion.span>
      ))}
      <SignatureUnderline />
    </span>
  );
};

// Import static images
import cremyaImg from '../../assets/projects/cremya.webp';
import shonensportsImg from '../../assets/projects/shonensports.webp';
import focusbusinessImg from '../../assets/projects/focusbusiness.webp';

const projects = [
  {
    title: "Cremya",
    category: "E-commerce • Food",
    url: "https://cremya.fr",
    image: cremyaImg,
    description: "Crèmes de miel gourmandes. Une expérience d'achat ludique et premium.",
    details: "Boutique e-commerce avec configurateur de pack personnalisé. Design moderne aux couleurs chaudes avec animations fluides et effets visuels gourmands qui boostent les conversions.",
    year: "2025"
  },
  {
    title: "Shonen Sports",
    category: "E-commerce • Branding",
    url: "https://shonensports.com",
    image: shonensportsImg,
    description: "Fusion entre culture anime et performance sportive. Expérience d'achat immersive.",
    details: "Refonte complète de l'identité visuelle et migration vers Shopify Plus. Intégration de vidéos 3D et augmentation du panier moyen de 25%.",
    year: "2024"
  },
  {
    title: "Focus Business",
    category: "SaaS • Productivité",
    url: "https://focus-business.com",
    image: focusbusinessImg,
    description: "Restez concentré sur l'essentiel. Productivité maximale, design premium.",
    details: "Plateforme de gestion du temps et productivité au design sombre et sophistiqué. Interface minimaliste avec gradients élégants pour une expérience professionnelle haut de gamme.",
    year: "2025"
  }
];

// MacBook Pro Mockup Component
const MacBookMockup = ({ children }) => (
  <div className="relative w-full max-w-4xl mx-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
    {/* MacBook Screen */}
    <div className="relative bg-[#1d1d1f] rounded-t-2xl p-3">
      {/* Notch / Camera area */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-[#1d1d1f] rounded-b-xl flex items-center justify-center z-10">
        <div className="w-2 h-2 bg-[#2d2d2f] rounded-full flex items-center justify-center">
          <div className="w-1 h-1 bg-[#0a84ff]/30 rounded-full" />
        </div>
      </div>

      {/* Screen bezel */}
      <div className="relative bg-[#0d0d0d] rounded-lg overflow-hidden">
        {/* Screen Content */}
        <div className="relative aspect-[16/10]">
          {children}
        </div>
      </div>
    </div>

    {/* MacBook Base / Keyboard section */}
    <div className="relative">
      {/* Hinge */}
      <div className="h-3 bg-gradient-to-b from-[#3d3d3f] via-[#2d2d2f] to-[#1d1d1f] rounded-b-sm shadow-inner" />

      {/* Base with trackpad hint */}
      <div className="relative h-4 bg-gradient-to-b from-[#2d2d2f] to-[#1d1d1f] rounded-b-xl mx-6">
        {/* Trackpad line */}
        <div className="absolute top-1 left-1/2 -translate-x-1/2 w-20 h-[2px] bg-[#3d3d3f] rounded-full" />
      </div>

      {/* Bottom edge */}
      <div className="h-1 bg-[#1d1d1f] rounded-b-xl mx-8" />

      {/* Shadow */}
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-4/5 h-8 bg-black/30 blur-2xl rounded-full" />
    </div>
  </div>
);

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Touch/swipe handlers for mobile
  const handleTouchStart = useCallback((e) => {
    touchStartX.current = e.touches[0].clientX;
    setIsAutoPlaying(false);
  }, []);

  const handleTouchMove = useCallback((e) => {
    touchEndX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(() => {
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50;
    if (diff > threshold) {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    } else if (diff < -threshold) {
      setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    }
    setTimeout(() => setIsAutoPlaying(true), 10000);
  }, []);

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
    <section id="projets" className="relative py-16 lg:py-20 px-4 bg-gray-50 dark:bg-black overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-10">
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
            className="text-3xl md:text-5xl font-bold tracking-tight text-black dark:text-white mb-6"
          >
            Nos{' '}
            <AnimatedTitle
              text="Réalisations"
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-purple-600"
            />
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

        {/* MacBook Carousel */}
        <Motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <MacBookMockup>
            <div
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              className="w-full h-full"
            >
            <AnimatePresence mode="wait">
              <Motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
                className="relative w-full h-full cursor-pointer group"
                onClick={() => setSelectedProject(currentProject)}
              >
                {/* Screenshot */}
                <img
                  src={currentProject.image}
                  alt={currentProject.title}
                  width={1400}
                  height={875}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-top"
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
                    <h3 className="text-xl md:text-3xl font-bold text-white mb-2">
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
            </div>
          </MacBookMockup>

          {/* Navigation Arrows */}
          <Motion.button
            onClick={goToPrev}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute left-0 md:-left-12 top-1/2 -translate-y-1/2 p-2 md:p-3 rounded-full bg-white dark:bg-white/10 border border-gray-200 dark:border-white/10 text-black dark:text-white hover:bg-[#0066FF] hover:text-white hover:border-[#0066FF] transition-all shadow-lg z-10"
          >
            <ChevronLeft className="w-5 h-5" />
          </Motion.button>
          <Motion.button
            onClick={goToNext}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute right-0 md:-right-12 top-1/2 -translate-y-1/2 p-2 md:p-3 rounded-full bg-white dark:bg-white/10 border border-gray-200 dark:border-white/10 text-black dark:text-white hover:bg-[#0066FF] hover:text-white hover:border-[#0066FF] transition-all shadow-lg z-10"
          >
            <ChevronRight className="w-5 h-5" />
          </Motion.button>
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
          className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <Motion.button
            onClick={() => setSelectedProject(currentProject)}
            whileHover={{ scale: 1.08, boxShadow: '0 12px 40px -8px rgba(0,0,0,0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black dark:bg-white text-white dark:text-black text-xs font-bold tracking-wider transition-all shadow-[0_8px_30px_-8px_rgba(0,0,0,0.4)] dark:shadow-[0_8px_30px_-8px_rgba(255,255,255,0.2)]"
          >
            VOIR LES DÉTAILS <ArrowUpRight className="w-4 h-4" />
          </Motion.button>
          <Motion.a
            href="#contact"
            whileHover={{ scale: 1.08, boxShadow: '0 16px 50px -8px rgba(0,102,255,0.6)' }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0066FF] hover:bg-[#0055D4] text-white text-xs font-bold tracking-wider transition-all shadow-[0_10px_40px_-8px_rgba(0,102,255,0.5)]"
          >
            LANCER MON PROJET <ArrowUpRight className="w-4 h-4" />
          </Motion.a>
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
                   src={selectedProject.image}
                   alt={selectedProject.title}
                   width={1400}
                   height={875}
                   loading="lazy"
                   decoding="async"
                   className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent" />

                <div className="absolute bottom-6 left-6 md:left-10">
                   <span className="inline-block px-3 py-1 mb-3 rounded-full bg-[#0066FF] text-white text-[10px] font-bold tracking-widest uppercase shadow-lg">
                      {selectedProject.category}
                   </span>
                   <h3 className="text-2xl md:text-4xl font-bold text-white tracking-tight">{selectedProject.title}</h3>
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
                       <Motion.a
                         href={selectedProject.url}
                         target="_blank"
                         rel="noopener noreferrer"
                         whileHover={{ scale: 1.03, boxShadow: '0 16px 40px -8px rgba(0,102,255,0.4)' }}
                         whileTap={{ scale: 0.97 }}
                         className="w-full py-4 rounded-xl bg-[#0066FF] hover:bg-[#0055D4] text-white font-bold tracking-widest uppercase text-center text-sm transition-all shadow-lg flex items-center justify-center gap-2"
                       >
                         Visiter le site <ExternalLink className="w-4 h-4" />
                       </Motion.a>
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
