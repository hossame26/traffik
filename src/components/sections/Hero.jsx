import { useRef, useEffect, useState, useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// ═══════════════════════════════════════════════════════════
// ECLIPSE RING — Optimized Canvas 2D (desktop only)
// ═══════════════════════════════════════════════════════════

function EclipseRing() {
  const canvasRef = useRef(null);
  const animRef = useRef(null);
  const isDarkRef = useRef(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    let w, h;

    const updateDark = () => {
      isDarkRef.current = document.documentElement.classList.contains('dark');
    };
    updateDark();
    const obs = new MutationObserver(updateDark);
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 1.5);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    function bakeGlow(size, r, g, b) {
      const s = size * 4;
      const off = document.createElement('canvas');
      off.width = s;
      off.height = s;
      const c = off.getContext('2d');
      const grad = c.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
      grad.addColorStop(0, `rgba(${r}, ${g}, ${b}, 1)`);
      grad.addColorStop(0.15, `rgba(${r}, ${g}, ${b}, 0.6)`);
      grad.addColorStop(0.4, `rgba(${r}, ${g}, ${b}, 0.15)`);
      grad.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
      c.fillStyle = grad;
      c.fillRect(0, 0, s, s);
      return off;
    }

    const glowBlue = bakeGlow(16, 0, 102, 255);
    const glowPurple = bakeGlow(16, 140, 80, 255);
    const glowWhite = bakeGlow(8, 210, 225, 255);
    const glowCluster = bakeGlow(40, 60, 130, 255);
    const glowBlueLt = bakeGlow(16, 0, 80, 220);
    const glowPurpleLt = bakeGlow(16, 120, 60, 220);
    const glowCoreLt = bakeGlow(8, 0, 60, 180);
    const glowClusterLt = bakeGlow(40, 0, 70, 200);

    let ringGlowDark = null;
    let ringGlowLight = null;
    let ringGlowRadius = 0;

    function bakeRingGlow(radius) {
      ringGlowRadius = radius;
      const margin = 80;
      const size = (radius + margin) * 2;

      const offD = document.createElement('canvas');
      offD.width = size; offD.height = size;
      const cD = offD.getContext('2d');
      const cxD = size / 2, cyD = size / 2;
      const g1 = cD.createRadialGradient(cxD, cyD, radius - 20, cxD, cyD, radius + 60);
      g1.addColorStop(0, 'rgba(0, 60, 200, 0)');
      g1.addColorStop(0.3, 'rgba(0, 80, 220, 0.06)');
      g1.addColorStop(0.6, 'rgba(0, 60, 200, 0.03)');
      g1.addColorStop(1, 'rgba(0, 40, 160, 0)');
      cD.fillStyle = g1; cD.fillRect(0, 0, size, size);
      cD.strokeStyle = 'rgba(0, 102, 255, 0.12)'; cD.lineWidth = 2.5;
      cD.beginPath(); cD.arc(cxD, cyD, radius, 0, Math.PI * 2); cD.stroke();
      cD.strokeStyle = 'rgba(120, 160, 255, 0.06)'; cD.lineWidth = 1;
      cD.beginPath(); cD.arc(cxD, cyD, radius, 0, Math.PI * 2); cD.stroke();
      ringGlowDark = offD;

      const offL = document.createElement('canvas');
      offL.width = size; offL.height = size;
      const cL = offL.getContext('2d');
      const g2 = cL.createRadialGradient(cxD, cyD, radius - 30, cxD, cyD, radius + 50);
      g2.addColorStop(0, 'rgba(0, 80, 220, 0)');
      g2.addColorStop(0.3, 'rgba(0, 80, 220, 0.06)');
      g2.addColorStop(0.6, 'rgba(0, 60, 200, 0.03)');
      g2.addColorStop(1, 'rgba(0, 40, 160, 0)');
      cL.fillStyle = g2; cL.fillRect(0, 0, size, size);
      cL.strokeStyle = 'rgba(0, 80, 200, 0.25)'; cL.lineWidth = 2.5;
      cL.beginPath(); cL.arc(cxD, cyD, radius, 0, Math.PI * 2); cL.stroke();
      cL.strokeStyle = 'rgba(0, 60, 180, 0.1)'; cL.lineWidth = 1;
      cL.beginPath(); cL.arc(cxD, cyD, radius, 0, Math.PI * 2); cL.stroke();
      ringGlowLight = offL;
    }

    const stars = Array.from({ length: 50 }, () => ({
      x: Math.random(), y: Math.random(),
      size: Math.random() * 1.2 + 0.2,
      alpha: Math.random() * 0.15 + 0.02,
      speed: Math.random() * 0.012 + 0.004,
      phase: Math.random() * Math.PI * 2,
    }));

    const particles = Array.from({ length: 180 }, (_, i) => ({
      angle: (i / 180) * Math.PI * 2 + (Math.random() - 0.5) * 0.2,
      speed: 0.0001 + Math.random() * 0.0005,
      size: 0.8 + Math.random() * 2.5,
      brightness: 0.15 + Math.random() * 0.85,
      offset: (Math.random() - 0.5) * 8,
      phase: Math.random() * Math.PI * 2,
      isPurple: Math.random() > 0.75,
    }));

    const clusters = Array.from({ length: 8 }, (_, i) => ({
      angle: (i / 8) * Math.PI * 2 + Math.random() * 0.5,
      speed: 0.00005 + Math.random() * 0.00012,
      intensity: 0.3 + Math.random() * 0.7,
      size: 30 + Math.random() * 40,
      phase: Math.random() * Math.PI * 2,
    }));

    let time = 0;
    let lastRadius = 0;

    const animate = () => {
      time++;
      const dark = isDarkRef.current;
      ctx.fillStyle = dark ? '#030308' : '#f0f2f8';
      ctx.fillRect(0, 0, w, h);
      const cx = w / 2, cy = h / 2;
      const radius = Math.min(w, h) * 0.36;

      if (Math.abs(radius - lastRadius) > 2) { bakeRingGlow(radius); lastRadius = radius; }

      if (dark) {
        for (let i = 0; i < stars.length; i++) {
          const s = stars[i];
          ctx.globalAlpha = s.alpha * (0.4 + 0.6 * Math.sin(time * s.speed + s.phase));
          ctx.fillStyle = '#8eaaff';
          ctx.fillRect(s.x * w - s.size / 2, s.y * h - s.size / 2, s.size, s.size);
        }
        ctx.globalAlpha = 1;
      }

      const ringImg = dark ? ringGlowDark : ringGlowLight;
      if (ringImg) ctx.drawImage(ringImg, cx - ringGlowRadius - 80, cy - ringGlowRadius - 80);

      ctx.globalCompositeOperation = dark ? 'lighter' : 'source-over';
      for (let i = 0; i < clusters.length; i++) {
        const c = clusters[i]; c.angle += c.speed;
        const hx = cx + radius * Math.cos(c.angle), hy = cy + radius * Math.sin(c.angle);
        const pulse = c.intensity * (0.4 + 0.6 * Math.sin(time * 0.007 + c.phase));
        ctx.globalAlpha = pulse * (dark ? 0.4 : 0.25);
        ctx.drawImage(dark ? glowCluster : glowClusterLt, hx - c.size, hy - c.size, c.size * 2, c.size * 2);
      }
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]; p.angle += p.speed;
        const x = cx + (radius + p.offset) * Math.cos(p.angle);
        const y = cy + (radius + p.offset) * Math.sin(p.angle);
        const alpha = p.brightness * (0.3 + 0.7 * Math.sin(time * 0.01 + p.phase));
        const sz = p.size * 4;
        const sprite = dark ? (p.isPurple ? glowPurple : glowBlue) : (p.isPurple ? glowPurpleLt : glowBlueLt);
        ctx.globalAlpha = alpha * (dark ? 0.35 : 0.5);
        ctx.drawImage(sprite, x - sz, y - sz, sz * 2, sz * 2);
        const coreSize = p.size * 1.5;
        ctx.globalAlpha = alpha * (dark ? 0.7 : 0.8);
        ctx.drawImage(dark ? glowWhite : glowCoreLt, x - coreSize, y - coreSize, coreSize * 2, coreSize * 2);
      }
      ctx.globalCompositeOperation = 'source-over';
      ctx.globalAlpha = 1;
      animRef.current = requestAnimationFrame(animate);
    };

    animate();
    return () => {
      window.removeEventListener('resize', resize);
      obs.disconnect();
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full" />;
}


// ═══════════════════════════════════════════════════════════
// MOBILE HERO — Simple, fast, no scroll hijacking
// ═══════════════════════════════════════════════════════════

function MobileHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#f0f2f8] dark:bg-[#030308] transition-colors duration-500 px-6 py-20">
      <div className="absolute inset-0 bg-noise opacity-[0.02] dark:opacity-[0.03] pointer-events-none" />

      <div className="relative z-10 text-center max-w-lg">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 border border-[#0066FF]/30 bg-[#0066FF]/10 px-4 py-2 rounded-full text-[10px] font-bold tracking-[0.2em] mb-6 uppercase text-[#0066FF]"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0066FF] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0066FF]" />
          </span>
          Agence Web & Marketing
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl font-black tracking-[-0.05em] text-gray-900 dark:text-white mb-4"
        >
          Traffik
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-gray-500 dark:text-gray-400 text-sm max-w-sm mx-auto mb-3"
        >
          Sites web qui génèrent du{' '}
          <span className="text-gray-900 dark:text-white font-semibold">chiffre d'affaires</span>.
          Pas juste des pixels.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-[11px] text-gray-400 dark:text-gray-600 uppercase tracking-[0.15em] mb-8"
        >
          Performance. Conversion. Résultats.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col gap-3"
        >
          <a
            href="#contact"
            className="group bg-[#0066FF] text-white px-8 py-4 rounded-full text-[11px] font-bold tracking-widest flex items-center gap-2 shadow-lg shadow-[#0066FF]/30 justify-center active:brightness-110 transition-all"
          >
            DÉMARRER MON PROJET
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#solutions"
            className="bg-white/80 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 px-8 py-4 rounded-full text-[11px] font-bold tracking-widest flex items-center gap-2 text-gray-900 dark:text-white justify-center active:bg-[#0066FF]/5 transition-all"
          >
            VOIR NOS OFFRES
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex gap-8 justify-center mt-10 pt-6 border-t border-gray-200 dark:border-white/10"
        >
          {[
            { value: '50+', label: 'Projets livrés' },
            { value: '350%', label: 'ROI moyen' },
            { value: '24h', label: 'Réponse garantie' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-lg font-bold text-gray-900 dark:text-white">{stat.value}</div>
              <div className="text-[9px] text-gray-400 dark:text-gray-500 uppercase tracking-wider mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}


// ═══════════════════════════════════════════════════════════
// DESKTOP HERO — Scroll-driven storytelling with Eclipse Ring
// ═══════════════════════════════════════════════════════════

function DesktopHero() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const ringScale = useTransform(scrollYProgress, [0, 1], [1, 3.2]);
  const ringOpacity = useTransform(scrollYProgress, [0, 0.85, 1], [1, 1, 0.6]);
  const phase0 = useTransform(scrollYProgress, [0, 0.08, 0.16], [1, 1, 0]);
  const phase1 = useTransform(scrollYProgress, [0.14, 0.21, 0.34, 0.40], [0, 1, 1, 0]);
  const phase2 = useTransform(scrollYProgress, [0.38, 0.44, 0.57, 0.63], [0, 1, 1, 0]);
  const phase3 = useTransform(scrollYProgress, [0.61, 0.67, 0.79, 0.85], [0, 1, 1, 0]);
  const phase4 = useTransform(scrollYProgress, [0.83, 0.94], [0, 1]);
  const fogOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

  return (
    <section ref={containerRef} className="relative" style={{ height: '400vh' }}>
      <div className="sticky top-0 h-screen overflow-hidden bg-[#f0f2f8] dark:bg-[#030308] transition-colors duration-500">

        <motion.div
          style={{ scale: ringScale, opacity: ringOpacity }}
          className="absolute inset-0 origin-center pointer-events-none"
        >
          <EclipseRing />
        </motion.div>

        <motion.div
          style={{ opacity: fogOpacity }}
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute -left-[25%] top-[15%] w-[65%] h-[65%] bg-[#0044CC]/[0.03] dark:bg-[#0044CC]/[0.04] blur-[140px] rounded-full" />
          <div className="absolute -right-[25%] top-[20%] w-[55%] h-[55%] bg-[#4020FF]/[0.02] dark:bg-[#4020FF]/[0.03] blur-[120px] rounded-full" />
        </motion.div>

        <div className="absolute inset-0 bg-noise opacity-[0.02] dark:opacity-[0.03] pointer-events-none" />

        {/* Phase 0 */}
        <motion.div style={{ opacity: phase0 }} className="absolute inset-0 flex flex-col items-center justify-center z-10 px-6">
          <div className="text-center max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="inline-flex items-center gap-2 border border-[#0066FF]/30 bg-[#0066FF]/10 backdrop-blur-md px-4 py-2 rounded-full text-[10px] font-bold tracking-[0.2em] mb-8 uppercase text-[#0066FF]"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0066FF] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0066FF]" />
              </span>
              Agence Web & Marketing
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black tracking-[-0.05em] text-gray-900 dark:text-white mb-5"
            >
              Traffik
            </motion.h1>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.1 }}
              className="text-gray-500 dark:text-gray-400 text-sm md:text-base lg:text-lg max-w-lg mx-auto mb-4">
              Sites web qui génèrent du{' '}
              <span className="text-gray-900 dark:text-white font-semibold">chiffre d'affaires</span>.
              Pas juste des pixels.
            </motion.p>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1.4 }}
              className="text-[11px] text-gray-400 dark:text-gray-600 uppercase tracking-[0.15em] mb-10">
              Performance. Conversion. Résultats.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.6 }}
              className="flex flex-col sm:flex-row gap-3 justify-center">
              <motion.a href="#contact"
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px -8px rgba(0,102,255,0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="group bg-[#0066FF] hover:bg-[#0052CC] text-white px-8 py-4 rounded-full text-[11px] font-bold tracking-widest transition-all flex items-center gap-2 shadow-lg shadow-[#0066FF]/30 justify-center">
                DÉMARRER MON PROJET
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a href="#solutions"
                whileHover={{ scale: 1.05, borderColor: 'rgba(0,102,255,0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/80 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 backdrop-blur-md px-8 py-4 rounded-full text-[11px] font-bold tracking-widest transition-all flex items-center gap-2 text-gray-900 dark:text-white justify-center">
                VOIR NOS OFFRES
              </motion.a>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }} className="mt-14">
              <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
                className="flex flex-col items-center">
                <span className="text-[9px] uppercase tracking-[0.2em] text-gray-400 dark:text-gray-600">Scroll</span>
                <div className="w-[1px] h-8 mt-2 bg-gradient-to-b from-[#0066FF]/60 to-transparent" />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Phase 1 */}
        <motion.div style={{ opacity: phase1 }} className="absolute inset-0 flex items-center justify-center z-10 px-6">
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-[3.2rem] font-semibold text-gray-900 dark:text-white text-center max-w-4xl leading-snug tracking-tight">
            Votre site web est votre<br />meilleur commercial.{' '}
            <span className="text-[#0066FF] font-bold">24/7.</span>
          </p>
        </motion.div>

        {/* Phase 2 */}
        <motion.div style={{ opacity: phase2 }} className="absolute inset-0 flex items-center justify-center z-10 px-6">
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-[3.2rem] font-semibold text-gray-900 dark:text-white text-center max-w-4xl leading-snug tracking-tight">
            Dans le bruit digital, seule<br />la <span className="text-[#0066FF] font-bold">performance</span> convertit
          </p>
        </motion.div>

        {/* Phase 3 */}
        <motion.div style={{ opacity: phase3 }} className="absolute inset-0 flex items-center justify-center z-10 px-6">
          <div className="text-center">
            <p className="text-lg sm:text-xl md:text-2xl text-gray-500 dark:text-gray-400 font-medium mb-3 tracking-wide">Nous sommes</p>
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-[-0.05em] text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] via-[#6C5CE7] to-[#A855F7]">
              Traffik
            </h2>
          </div>
        </motion.div>

        {/* Phase 4 */}
        <motion.div style={{ opacity: phase4 }} className="absolute inset-0 flex flex-col items-center justify-center z-10 px-6">
          <div className="text-center max-w-4xl">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 dark:text-white mb-8 leading-tight tracking-tight">
              Des sites web performants,<br />du design au ROI, livrés{' '}
              <span className="text-[#0066FF]">en 2 semaines</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
              <motion.a href="#contact"
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px -8px rgba(0,102,255,0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="group bg-[#0066FF] hover:bg-[#0052CC] text-white px-8 py-4 rounded-full text-[11px] font-bold tracking-widest transition-all flex items-center gap-2 shadow-lg shadow-[#0066FF]/30 justify-center">
                DÉMARRER MON PROJET
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a href="#solutions"
                whileHover={{ scale: 1.05, borderColor: 'rgba(0,102,255,0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/80 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 backdrop-blur-md px-8 py-4 rounded-full text-[11px] font-bold tracking-widest transition-all flex items-center gap-2 text-gray-900 dark:text-white justify-center">
                VOIR NOS OFFRES
              </motion.a>
            </div>
            <div className="flex gap-8 sm:gap-12 justify-center pt-6 border-t border-gray-200 dark:border-white/10">
              {[
                { value: '50+', label: 'Projets livrés' },
                { value: '350%', label: 'ROI moyen' },
                { value: '24h', label: 'Réponse garantie' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                  <div className="text-[9px] sm:text-[10px] text-gray-400 dark:text-gray-500 uppercase tracking-wider mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}


// ═══════════════════════════════════════════════════════════
// EXPORT — Auto-switch mobile/desktop
// ═══════════════════════════════════════════════════════════

export default function Hero() {
  const [isMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth < 768);

  if (isMobile) return <MobileHero />;
  return <DesktopHero />;
}
