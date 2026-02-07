import { useEffect, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Check if device is mobile or prefers reduced motion
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(true); // Default to true for SSR safety

  useEffect(() => {
    const checkMobile = () => {
      const isMobileDevice = window.innerWidth < 768;
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      setIsMobile(isMobileDevice || prefersReducedMotion);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
};

// Individual sparkle component
function Sparkle({ id, x, y, size, delay, onComplete }) {
  return (
    <motion.div
      className="fixed pointer-events-none z-[100]"
      style={{ left: x, top: y }}
      initial={{ opacity: 0, scale: 0, rotate: 0 }}
      animate={{
        opacity: [0, 1, 1, 0],
        scale: [0, 1, 1.2, 0],
        rotate: [0, 90, 180, 270],
      }}
      transition={{
        duration: 1.5,
        delay: delay,
        ease: "easeOut",
      }}
      onAnimationComplete={onComplete}
    >
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path
          d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"
          fill="url(#sparkle-grad)"
        />
        <defs>
          <linearGradient id="sparkle-grad" x1="0" y1="0" x2="24" y2="24">
            <stop stopColor="#0066FF" />
            <stop offset="1" stopColor="#A855F7" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
}

// Floating ambient sparkles that appear randomly
function AmbientSparkle({ x, y, size }) {
  return (
    <motion.div
      className="fixed pointer-events-none"
      style={{ left: `${x}%`, top: `${y}%` }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 0.6, 0],
        scale: [0, 1, 0],
        rotate: [0, 180],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        repeatDelay: Math.random() * 5 + 2,
        ease: "easeInOut",
      }}
    >
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path
          d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"
          fill="url(#ambient-sparkle)"
        />
        <defs>
          <linearGradient id="ambient-sparkle" x1="0" y1="0" x2="24" y2="24">
            <stop stopColor="#0066FF" stopOpacity="0.5" />
            <stop offset="1" stopColor="#A855F7" stopOpacity="0.5" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
}

export default function GlobalSparkles() {
  const isMobile = useIsMobile();
  const [scrollSparkles, setScrollSparkles] = useState([]);

  // Don't render anything on mobile for performance
  // Return early to prevent any animation overhead
  const ambientPositions = useMemo(() => isMobile ? [] : [
    { x: 5, y: 15, size: 12 },
    { x: 92, y: 8, size: 10 },
    { x: 15, y: 45, size: 14 },
    { x: 88, y: 35, size: 11 },
    { x: 8, y: 70, size: 13 },
    { x: 95, y: 60, size: 9 },
    { x: 20, y: 85, size: 12 },
    { x: 80, y: 80, size: 10 },
  ], [isMobile]); // Reduced from 15 to 8 sparkles on desktop

  // Sparkles on scroll - disabled on mobile
  useEffect(() => {
    if (isMobile) return; // Don't add scroll listeners on mobile

    let lastScrollY = window.scrollY;
    let scrollTimeout;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = Math.abs(currentScrollY - lastScrollY);

      // Only create sparkles if scrolling fast enough
      if (scrollDelta > 50) { // Increased threshold
        const newSparkles = [];
        const count = Math.min(Math.floor(scrollDelta / 80), 2); // Reduced max sparkles

        for (let i = 0; i < count; i++) {
          newSparkles.push({
            id: Date.now() + i,
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            size: Math.random() * 12 + 8,
            delay: i * 0.1,
          });
        }

        setScrollSparkles(prev => [...prev, ...newSparkles]);
      }

      lastScrollY = currentScrollY;

      // Clear old sparkles
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setScrollSparkles([]);
      }, 2000);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [isMobile]);

  // Remove completed sparkles
  const removeSparkle = (id) => {
    setScrollSparkles(prev => prev.filter(s => s.id !== id));
  };

  // Don't render on mobile for performance
  if (isMobile) return null;

  return (
    <>
      {/* Ambient floating sparkles - desktop only */}
      {ambientPositions.map((pos, i) => (
        <AmbientSparkle key={i} x={pos.x} y={pos.y} size={pos.size} />
      ))}

      {/* Scroll-triggered sparkles */}
      <AnimatePresence>
        {scrollSparkles.map(sparkle => (
          <Sparkle
            key={sparkle.id}
            {...sparkle}
            onComplete={() => removeSparkle(sparkle.id)}
          />
        ))}
      </AnimatePresence>
    </>
  );
}
