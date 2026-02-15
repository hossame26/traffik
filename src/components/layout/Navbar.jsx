import { useState, useEffect, useMemo, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';

// ─── Warp speed lines config ───
const WARP_LINE_COUNT = 36;

export default function Navbar() {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [warpTarget, setWarpTarget] = useState(null);
  const [warpPhase, setWarpPhase] = useState(null); // 'enter' | 'flash' | null

  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));

  // Pre-generate warp lines
  const warpLines = useMemo(() =>
    Array.from({ length: WARP_LINE_COUNT }, (_, i) => ({
      angle: (i / WARP_LINE_COUNT) * 360 + (Math.random() - 0.5) * 6,
      delay: Math.random() * 0.12,
      length: 45 + Math.random() * 35,
      width: 1 + Math.random() * 2,
      colorIdx: Math.floor(Math.random() * 4),
    })),
  []);

  const lineColors = ['#0066FF', '#A855F7', '#06B6D4', '#ffffff'];

  // ─── Warp navigation handler ───
  const triggerWarp = useCallback((e, item) => {
    e.preventDefault();
    e.stopPropagation();
    if (warpTarget) return;

    setWarpTarget(item);
    setWarpPhase('enter');
    setIsMobileMenuOpen(false);

    // Phase 2: flash + navigate (at 650ms)
    setTimeout(() => {
      setWarpPhase('flash');

      // Navigate during the flash
      if (item.isRoute) {
        navigate(item.href);
      } else {
        const hash = item.href.replace(/^\//, '');
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'instant' });
        }
      }
    }, 650);

    // Phase 3: clear (at 1300ms)
    setTimeout(() => {
      setWarpPhase(null);
      setWarpTarget(null);
    }, 1300);
  }, [warpTarget, navigate]);

  const navItems = [
    { label: 'SERVICES', href: '/tarifs', isRoute: true },
    { label: 'AUDIT', href: '/audit-site-web', isRoute: true },
    { label: 'PORTFOLIO', href: '/portfolio', isRoute: true },
    { label: 'BLOG', href: '/blog', isRoute: true },
    { label: 'TARIFS', href: '/tarifs', isRoute: true },
    { label: 'CONTACT', href: '/#contact' }
  ];

  return (
    <>
      {/* Progressive Blur Background */}
      <div className="fixed top-0 left-0 right-0 h-32 pointer-events-none z-40">
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/50 to-transparent dark:from-black/80 dark:via-black/50 dark:to-transparent" />
        <div
          className="absolute inset-0 backdrop-blur-xl"
          style={{
            maskImage: 'linear-gradient(to bottom, black 0%, black 30%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 30%, transparent 100%)'
          }}
        />
      </div>

      {/* Navbar */}
      <div className="fixed top-0 left-0 right-0 flex justify-center z-50 pt-4 md:pt-6 px-4">
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className={`
            rounded-full flex items-center justify-between w-full max-w-4xl
            transition-all duration-500 ease-premium border
            ${isScrolled
              ? 'px-4 py-2 md:px-6 md:py-2.5 bg-white/40 dark:bg-black/40 backdrop-blur-2xl backdrop-saturate-[180%] shadow-lg shadow-black/5 dark:shadow-black/20 border-black/[0.08] dark:border-white/[0.08]'
              : 'px-6 py-3 md:px-8 md:py-4 bg-white/20 dark:bg-white/5 backdrop-blur-2xl backdrop-saturate-[180%] border-black/[0.06] dark:border-white/[0.06]'
            }
          `}
        >
          {/* Logo */}
          <motion.a
            href="#"
            className="relative group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              if (warpTarget) return;
              setWarpTarget({ href: '/' });
              setWarpPhase('enter');
              setTimeout(() => {
                setWarpPhase('flash');
                navigate('/');
                window.scrollTo({ top: 0, behavior: 'instant' });
              }, 650);
              setTimeout(() => { setWarpPhase(null); setWarpTarget(null); }, 1300);
            }}
          >
            <span className={`
              font-bold tracking-[0.1em] text-black dark:text-white transition-all duration-300
              ${isScrolled ? 'text-lg md:text-xl' : 'text-xl md:text-2xl'}
            `}>
              TRAFFIK
            </span>
            <motion.div
              className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent-purple rounded-full origin-left"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            />
          </motion.a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex gap-8 text-[10px] font-semibold tracking-[0.15em]">
            {navItems.map((item, index) => (
              <motion.div
                key={item.label}
                className="relative py-1"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05, duration: 0.5 }}
                whileHover={{ y: -1 }}
              >
                <a
                  href={item.href}
                  onClick={(e) => triggerWarp(e, item)}
                  className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  {item.label}
                </a>
                <motion.span
                  className="absolute bottom-0 left-0 right-0 h-px bg-primary"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              className="relative p-2 rounded-full overflow-hidden bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/20 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={theme}
                  initial={{ y: -20, opacity: 0, rotate: -90 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  exit={{ y: 20, opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </motion.div>
              </AnimatePresence>
            </motion.button>

            {/* CTA */}
            <motion.a
              href="#contact"
              onClick={(e) => triggerWarp(e, { href: '/#contact', isRoute: false })}
              className="relative hidden sm:flex items-center justify-center bg-gradient-to-r from-primary to-primary-light text-white px-5 py-2 rounded-full text-[10px] font-bold tracking-widest shadow-lg shadow-primary/25 overflow-hidden shimmer-button"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0,102,255,0.4)' }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">DÉMARRER</span>
            </motion.a>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-full bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={isMobileMenuOpen ? 'close' : 'open'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </motion.nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed top-20 left-4 right-4 z-40 md:hidden"
          >
            <div className="bg-white/95 dark:bg-black/95 backdrop-blur-2xl rounded-3xl p-6 border border-black/5 dark:border-white/10 shadow-2xl">
              <div className="flex flex-col gap-4">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => triggerWarp(e, item)}
                    className="text-lg font-semibold tracking-wide text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-white transition-colors py-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {item.label}
                  </motion.a>
                ))}
                <div className="h-px bg-gray-200 dark:bg-white/10 my-2" />
                <motion.a
                  href="#contact"
                  onClick={(e) => triggerWarp(e, { href: '/#contact', isRoute: false })}
                  className="bg-gradient-to-r from-primary to-primary-light text-white px-6 py-3 rounded-full text-sm font-bold tracking-widest text-center shadow-lg shadow-primary/25"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  whileHover={{ scale: 1.05, boxShadow: '0 16px 40px -8px rgba(0,102,255,0.4)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  DÉMARRER
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Backdrop */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/20 dark:bg-black/50 backdrop-blur-sm z-30 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* ═══════════════════════════════════════════════════
          WARP TRANSITION — Hyperspace jump effect
          ═══════════════════════════════════════════════════ */}
      <AnimatePresence>
        {warpPhase && (
          <motion.div
            className="fixed inset-0 z-[200] overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: warpPhase === 'flash' ? 0.4 : 0.25 }}
          >
            {/* Deep space background */}
            <motion.div
              className="absolute inset-0 bg-[#020210]"
              initial={{ opacity: 0 }}
              animate={{ opacity: warpPhase === 'flash' ? 0 : 1 }}
              transition={{ duration: 0.3 }}
            />

            {/* Speed lines radiating from center */}
            {warpPhase === 'enter' && warpLines.map((line, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: '50%',
                  top: '50%',
                  width: `${line.width}px`,
                  transformOrigin: 'top center',
                  transform: `translateX(-50%) rotate(${line.angle}deg)`,
                  background: `linear-gradient(to bottom, ${lineColors[line.colorIdx]}, ${lineColors[line.colorIdx]}88, transparent)`,
                  borderRadius: '2px',
                  filter: `blur(${line.width > 2 ? 1 : 0}px)`,
                  boxShadow: `0 0 ${line.width * 3}px ${lineColors[line.colorIdx]}66`,
                }}
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: `${line.length}vh`,
                  opacity: [0, 1, 1],
                }}
                transition={{
                  duration: 0.55,
                  delay: line.delay,
                  ease: [0.12, 0.8, 0.3, 1],
                }}
              />
            ))}

            {/* Center tunnel rings */}
            {warpPhase === 'enter' && [0, 1, 2, 3].map((ring) => (
              <motion.div
                key={`ring-${ring}`}
                className="absolute rounded-full border-2"
                style={{
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  borderColor: ring % 2 === 0 ? '#0066FF' : '#A855F7',
                }}
                initial={{ width: 0, height: 0, opacity: 0.8 }}
                animate={{
                  width: [0, 200 + ring * 100],
                  height: [0, 200 + ring * 100],
                  opacity: [0.8, 0],
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.1 + ring * 0.08,
                  ease: 'easeOut',
                }}
              />
            ))}

            {/* Center glow core */}
            <motion.div
              className="absolute rounded-full"
              style={{
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                background: 'radial-gradient(circle, #ffffff, #0066FF, transparent)',
              }}
              initial={{ width: 4, height: 4, opacity: 1 }}
              animate={warpPhase === 'flash'
                ? { width: '300vmax', height: '300vmax', opacity: [1, 1, 0], background: 'radial-gradient(circle, #ffffff, #ffffff, #0066FF22)' }
                : { width: [4, 30], height: [4, 30], opacity: [0, 1] }
              }
              transition={warpPhase === 'flash'
                ? { duration: 0.6, ease: [0.2, 0.8, 0.3, 1] }
                : { duration: 0.4, ease: 'easeOut' }
              }
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
