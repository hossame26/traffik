import { useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { ArrowRight, ShoppingCart, Package, CreditCard, FileText, Search, Layers, Zap, BarChart3, Globe, Code2, Database } from 'lucide-react';
import { Link } from 'react-router-dom';
import shopifyImg from '../../assets/shopify-removebg-preview.png';
import wordpressImg from '../../assets/wordpress-removebg-preview.webp';
import reactImg from '../../assets/react.svg';

/* ── Animation Variants ── */
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 30, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

/* ── TiltCard ── */
function TiltCard({ children, className }) {
  const ref = useRef(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 200, damping: 15 });
  const springY = useSpring(rotateY, { stiffness: 200, damping: 15 });

  const handleMouse = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    rotateX.set(y * -5);
    rotateY.set(x * 5);
  };

  return (
    <motion.div
      ref={ref}
      style={{ rotateX: springX, rotateY: springY, transformPerspective: 1200 }}
      onMouseMove={handleMouse}
      onMouseLeave={() => { rotateX.set(0); rotateY.set(0); }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Animated Previews (dark style like service pages) ── */
function ShopifyPreview() {
  const products = [
    { color: 'from-green-400 to-emerald-600', label: 'Sneakers' },
    { color: 'from-blue-400 to-blue-600', label: 'T-shirt' },
    { color: 'from-purple-400 to-purple-600', label: 'Hoodie' },
    { color: 'from-orange-400 to-orange-600', label: 'Cap' },
    { color: 'from-pink-400 to-pink-600', label: 'Bag' },
    { color: 'from-green-400 to-emerald-600', label: 'Sneakers' },
    { color: 'from-blue-400 to-blue-600', label: 'T-shirt' },
    { color: 'from-purple-400 to-purple-600', label: 'Hoodie' },
  ];

  return (
    <div className="h-full rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden relative flex flex-col p-4 border border-white/[0.06]">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-5 h-5 rounded-md bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
          <ShoppingCart className="w-3 h-3 text-white" />
        </div>
        <div className="h-2 w-16 rounded-full bg-white/20" />
        <div className="ml-auto flex gap-1 items-center">
          <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="text-[8px] text-green-400/60">Live</span>
        </div>
      </div>
      <div className="flex-1 overflow-hidden">
        <motion.div
          className="flex gap-2"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 8, ease: 'linear', repeat: Infinity }}
        >
          {products.map((p, i) => (
            <div key={i} className="flex-shrink-0 w-16 flex flex-col items-center gap-1">
              <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${p.color} opacity-80 flex items-center justify-center`}>
                <Package className="w-5 h-5 text-white/70" />
              </div>
              <span className="text-[8px] text-white/40 truncate">{p.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
      <motion.div
        className="flex gap-1.5 mt-1"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <div className="px-2 py-0.5 rounded bg-white/[0.06] border border-white/[0.04] flex items-center gap-1">
          <CreditCard className="w-2.5 h-2.5 text-green-400" />
          <span className="text-[7px] text-white/30">Stripe</span>
        </div>
        <div className="px-2 py-0.5 rounded bg-white/[0.06] border border-white/[0.04]">
          <span className="text-[7px] text-blue-400">PayPal</span>
        </div>
      </motion.div>
    </div>
  );
}

function WordPressPreview() {
  const pages = ['Accueil', 'Services', 'Blog', 'Contact'];

  return (
    <div className="h-full rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden relative p-4 flex flex-col border border-white/[0.06]">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-4 h-4 rounded bg-gradient-to-br from-[#0066FF] to-[#A855F7]" />
        <div className="flex gap-1.5 overflow-hidden">
          {pages.map((p, i) => (
            <motion.div
              key={i}
              className="h-2 rounded-full bg-white/20 flex-shrink-0 px-2"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, delay: i * 0.4, repeat: Infinity }}
            />
          ))}
        </div>
      </div>
      <div className="flex-1 grid grid-cols-3 gap-1.5">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="rounded bg-white/[0.06] border border-white/[0.04]"
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 3, delay: i * 0.3, repeat: Infinity }}
          />
        ))}
      </div>
      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center gap-1">
          <Globe className="w-2.5 h-2.5 text-[#0066FF]" />
          <span className="text-[8px] text-white/40">5-10 pages</span>
        </div>
        <div className="flex items-center gap-1">
          <Search className="w-2.5 h-2.5 text-[#A855F7]" />
          <span className="text-[8px] text-white/40">SEO natif</span>
        </div>
      </div>
    </div>
  );
}

function ReactPreview() {
  const lines = [
    { text: '$ npx create-next-app', color: 'text-green-400' },
    { text: 'Installing dependencies...', color: 'text-white/40' },
    { text: '> react, tailwind, framer', color: 'text-blue-400' },
    { text: 'Performance: 100/100', color: 'text-[#0066FF]' },
    { text: 'Deploy: traffik-web.fr', color: 'text-[#A855F7]' },
  ];

  return (
    <div className="h-full rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden relative p-4 font-mono border border-white/[0.06]">
      <div className="flex items-center gap-1.5 mb-2">
        <div className="flex gap-1">
          <div className="w-2 h-2 rounded-full bg-red-400/60" />
          <div className="w-2 h-2 rounded-full bg-yellow-400/60" />
          <div className="w-2 h-2 rounded-full bg-green-400/60" />
        </div>
        <span className="text-[8px] text-white/25 ml-1">terminal</span>
        <div className="ml-auto flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="text-[7px] text-green-400/60">live</span>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        {lines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: [0, 1, 1, 0.7], x: 0 }}
            transition={{ duration: 2, delay: i * 0.6, repeat: Infinity, repeatDelay: 4 }}
            className={`text-[9px] ${line.color} leading-relaxed`}
          >
            {line.text}
          </motion.div>
        ))}
      </div>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="inline-block w-1.5 h-3 bg-[#0066FF] ml-0.5 mt-1"
      />
    </div>
  );
}

/* ── Preview Map ── */
const previewMap = {
  shopify: ShopifyPreview,
  wordpress: WordPressPreview,
  custom: ReactPreview,
};

/* ── Data ── */
const offers = [
  {
    id: 'shopify',
    title: 'Site Shopify',
    price: '250',
    image: shopifyImg,
    description: "E-commerce clé en main. Prêt à vendre en 5 jours.",
    link: '/creation-site-shopify',
    accentColor: '#22c55e',
    features: ['Jusqu\'à 100 produits', 'Paiement sécurisé', 'Design pro'],
  },
  {
    id: 'wordpress',
    title: 'Site WordPress',
    price: '500',
    image: wordpressImg,
    description: "Site vitrine ou blog professionnel, SEO optimisé.",
    link: '/creation-site-wordpress',
    accentColor: '#3b82f6',
    features: ['5-10 pages sur mesure', 'Blog intégré', 'SEO complet'],
  },
  {
    id: 'custom',
    title: 'Site React',
    price: '600',
    image: reactImg,
    description: "Performance maximale, code sur mesure, scalable.",
    link: '/developpement-react-nextjs',
    accentColor: '#8b5cf6',
    badge: 'BEST SELLER',
    features: ['Lighthouse 100', 'Next.js / SSR', 'Architecture scalable'],
  },
];

/* ── Section Export ── */
export default function Solutions() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });
  return (
    <section
      id="solutions"
      ref={sectionRef}
      className="relative py-16 lg:py-24 px-4 bg-[#F8F9FA] dark:bg-black transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 dark:bg-white/5 text-primary dark:text-gray-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-4"
          >
            Nos Solutions
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-black dark:text-white mb-4"
          >
            Choisissez votre{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-[#A855F7]">
              plateforme.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-gray-500 dark:text-gray-400 max-w-lg mx-auto"
          >
            E-commerce, vitrine ou sur mesure. Tarifs transparents.
          </motion.p>
        </div>

        {/* Cards — Slider mobile / Grid desktop */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="hidden md:grid md:grid-cols-3 gap-5 lg:gap-6"
        >
          {offers.map((offer) => {
            const Preview = previewMap[offer.id];
            return (
              <motion.div key={offer.id} variants={staggerItem}>
                <TiltCard
                  className={`relative rounded-2xl p-6 md:p-7 flex flex-col h-full transition-all duration-300 ${
                    offer.badge
                      ? 'bg-gray-50 dark:bg-white/[0.06] border-2 border-[#0066FF]/30 dark:border-[#0066FF]/40 shadow-xl shadow-[#0066FF]/5 dark:shadow-[#0066FF]/10 ring-1 ring-[#0066FF]/10'
                      : 'bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/[0.08] hover:border-gray-300 dark:hover:border-white/[0.15] hover:shadow-lg dark:hover:bg-white/[0.05]'
                  }`}
                >
                  {offer.badge && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                      <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#0066FF] to-[#A855F7] text-white text-[10px] font-bold uppercase tracking-wider shadow-lg shadow-[#0066FF]/30">
                        <Zap className="w-3 h-3 fill-white" /> {offer.badge}
                      </span>
                    </div>
                  )}

                  {/* Logo + Title */}
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-12 h-12 rounded-xl p-2.5 shrink-0"
                      style={{ background: `linear-gradient(135deg, ${offer.accentColor}20, ${offer.accentColor}08)` }}
                    >
                      <img src={offer.image} alt={offer.title} className="w-full h-full object-contain" loading="lazy" decoding="async" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight">{offer.title}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{offer.description}</p>
                    </div>
                  </div>

                  {/* Animated Preview */}
                  <div className="mb-5">
                    <div className="h-56">
                      <Preview />
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2.5 mb-6 flex-1">
                    {offer.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-[15px] text-gray-600 dark:text-gray-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF] shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link to={offer.link}>
                    <motion.div
                      className={`w-full py-3.5 rounded-xl font-semibold text-center text-sm transition-all ${
                        offer.badge
                          ? 'bg-gradient-to-r from-[#0066FF] to-[#A855F7] text-white shadow-lg shadow-[#0066FF]/25 hover:shadow-[#0066FF]/40'
                          : 'bg-gray-900 dark:bg-white/[0.08] text-white hover:bg-gray-800 dark:hover:bg-white/[0.12] border border-transparent dark:border-white/[0.06]'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="flex items-center justify-center gap-2">
                        En savoir plus
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </motion.div>
                  </Link>
                </TiltCard>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Mobile Slider */}
        <div className="md:hidden relative">
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pt-5 pb-6 -mx-4 px-4 scrollbar-hide" style={{ WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none' }}>
            {offers.map((offer, idx) => {
              const Preview = previewMap[offer.id];
              return (
                <motion.div
                  key={offer.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: idx * 0.12 }}
                  className="snap-center shrink-0 w-[85vw] max-w-[340px]"
                >
                  <div
                    className={`relative rounded-2xl p-5 flex flex-col h-full transition-all duration-300 ${
                      offer.badge
                        ? 'bg-gray-50 dark:bg-white/[0.06] border-2 border-[#0066FF]/30 dark:border-[#0066FF]/40 shadow-xl shadow-[#0066FF]/5 dark:shadow-[#0066FF]/10'
                        : 'bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/[0.08]'
                    }`}
                  >
                    {offer.badge && (
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
                        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#0066FF] to-[#A855F7] text-white text-[10px] font-bold uppercase tracking-wider shadow-lg shadow-[#0066FF]/30">
                          <Zap className="w-2.5 h-2.5 fill-white" /> {offer.badge}
                        </span>
                      </div>
                    )}

                    {/* Logo + Title */}
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className="w-10 h-10 rounded-xl p-2 shrink-0"
                        style={{ background: `linear-gradient(135deg, ${offer.accentColor}20, ${offer.accentColor}08)` }}
                      >
                        <img src={offer.image} alt={offer.title} className="w-full h-full object-contain" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">{offer.title}</h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{offer.description}</p>
                      </div>
                    </div>

                    {/* Preview */}
                    <div className="mb-4 h-44">
                      <Preview />
                    </div>

                    {/* Features */}
                    <ul className="space-y-2 mb-5 flex-1">
                      {offer.features.map((f, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF] shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Link to={offer.link}>
                      <div
                        className={`w-full py-3 rounded-xl font-semibold text-center text-sm ${
                          offer.badge
                            ? 'bg-gradient-to-r from-[#0066FF] to-[#A855F7] text-white shadow-lg shadow-[#0066FF]/25'
                            : 'bg-gray-900 dark:bg-white/[0.08] text-white border border-transparent dark:border-white/[0.06]'
                        }`}
                      >
                        <span className="flex items-center justify-center gap-2">
                          En savoir plus
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Scroll indicators */}
          <div className="flex justify-center gap-2 mt-2">
            {offers.map((_, i) => (
              <div key={i} className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-[#0066FF]' : 'bg-gray-300 dark:bg-white/20'}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
