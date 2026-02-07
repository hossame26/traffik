import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'dark';
    }
    return 'dark';
  });

  // Scroll handler with shrink effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Theme management
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  const navItems = [
    { label: 'SERVICES', href: '/tarifs', isRoute: true },
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
              ? 'px-4 py-2 md:px-6 md:py-2.5 bg-white/90 dark:bg-black/90 backdrop-blur-2xl shadow-lg shadow-black/5 dark:shadow-black/20 border-black/5 dark:border-white/10'
              : 'px-6 py-3 md:px-8 md:py-4 bg-white/60 dark:bg-white/5 backdrop-blur-xl border-transparent'
            }
          `}
        >
          {/* Logo with gradient animation */}
          <motion.a
            href="#"
            className="relative group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className={`
              font-bold tracking-[0.1em] text-black dark:text-white transition-all duration-300
              ${isScrolled ? 'text-lg md:text-xl' : 'text-xl md:text-2xl'}
            `}>
              TRAFFIK
            </span>
            {/* Gradient underline on hover */}
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
                {item.isRoute ? (
                  <Link
                    to={item.href}
                    className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300"
                  >
                    {item.label}
                  </a>
                )}
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
            {/* Theme Toggle with smooth animation */}
            <motion.button
              onClick={toggleTheme}
              className={`
                relative p-2 rounded-full overflow-hidden
                bg-gray-100 dark:bg-white/10
                text-gray-600 dark:text-gray-300
                hover:bg-gray-200 dark:hover:bg-white/20
                transition-colors duration-300
              `}
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
                  {theme === 'dark' ? (
                    <Sun className="w-4 h-4" />
                  ) : (
                    <Moon className="w-4 h-4" />
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.button>

            {/* CTA Button with gradient and shimmer */}
            <motion.a
              href="#contact"
              className="
                relative hidden sm:flex items-center justify-center
                bg-gradient-to-r from-primary to-primary-light
                text-white px-5 py-2 rounded-full
                text-[10px] font-bold tracking-widest
                shadow-lg shadow-primary/25
                overflow-hidden
                shimmer-button
              "
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
                  {isMobileMenuOpen ? (
                    <X className="w-5 h-5" />
                  ) : (
                    <Menu className="w-5 h-5" />
                  )}
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
                {navItems.map((item, index) => {
                  if (item.isRoute) {
                    return (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          to={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="text-lg font-semibold tracking-wide text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-white transition-colors py-2 block"
                        >
                          {item.label}
                        </Link>
                      </motion.div>
                    );
                  }
                  return (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-lg font-semibold tracking-wide text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-white transition-colors py-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      {item.label}
                    </motion.a>
                  );
                })}
                <div className="h-px bg-gray-200 dark:bg-white/10 my-2" />
                <motion.a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="
                    bg-gradient-to-r from-primary to-primary-light
                    text-white px-6 py-3 rounded-full
                    text-sm font-bold tracking-widest text-center
                    shadow-lg shadow-primary/25
                  "
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  DÉMARRER
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Backdrop */}
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
    </>
  );
}
