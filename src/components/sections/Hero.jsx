import React, { useRef } from 'react';
import { motion as Motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  return (
    <section ref={targetRef} className="relative min-h-screen flex flex-col justify-center items-center px-4 overflow-hidden bg-dark-950">

      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-white/5 rounded-full blur-[120px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />

        {/* Noise overlay */}
        <div className="absolute inset-0 bg-noise opacity-[0.02]" />
      </div>

      <Motion.div
        style={{ opacity, scale, y }}
        className="relative z-10 flex flex-col items-center max-w-6xl mx-auto text-center"
      >
        {/* Badge */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            <span className="text-xs font-medium text-white/60 tracking-wider uppercase">Disponible pour nouveaux projets</span>
          </span>
        </Motion.div>

        {/* Main Title */}
        <Motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-[0.9] mb-8"
        >
          <span className="text-white">Sites Web</span>
          <br />
          <span className="text-accent">Haute Performance</span>
        </Motion.h1>

        {/* Subtitle */}
        <Motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed mb-12 font-light"
        >
          Nous créons des expériences digitales qui convertissent.
          <span className="text-white"> Shopify, WordPress, ou Sur Mesure</span> —
          à partir de <span className="text-accent font-medium">150€</span>.
        </Motion.p>

        {/* CTA Buttons */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#contact"
            className="group relative px-8 py-4 bg-accent text-dark-950 font-semibold rounded-full overflow-hidden transition-all hover:shadow-[0_0_40px_rgba(205,255,0,0.4)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              Démarrer un projet
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>

          <a
            href="#projets"
            className="group px-8 py-4 border border-white/20 text-white font-medium rounded-full hover:bg-white/5 transition-all flex items-center gap-2"
          >
            <Play className="w-4 h-4" />
            Voir nos projets
          </a>
        </Motion.div>

        {/* Stats */}
        <Motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 pt-12 border-t border-white/10 grid grid-cols-3 gap-8 md:gap-16"
        >
          {[
            { value: '50+', label: 'Projets' },
            { value: '100%', label: 'Satisfaction' },
            { value: '24h', label: 'Réponse' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-white mb-1">{stat.value}</div>
              <div className="text-xs text-white/40 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </Motion.div>
      </Motion.div>

      {/* Scroll indicator */}
      <Motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] text-white/30 uppercase tracking-widest">Scroll</span>
          <Motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent"
          />
        </div>
      </Motion.div>
    </section>
  );
}
