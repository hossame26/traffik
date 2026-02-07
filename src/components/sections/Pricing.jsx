import { useState, useMemo, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
  ShoppingCart,
  FileText,
  Zap,
  Check,
  Search,
  BarChart3,
  LineChart,
  MessageCircle,
  Send,
  Sparkles,
  Calculator
} from 'lucide-react';

// Configuration des prix
const SITES = [
  {
    id: 'shopify',
    name: 'Site Shopify',
    description: 'E-commerce prêt à vendre',
    price: 200,
    icon: ShoppingCart,
    color: 'from-green-500 to-emerald-600',
  },
  {
    id: 'wordpress',
    name: 'Site WordPress',
    description: 'Site vitrine professionnel',
    price: 500,
    icon: FileText,
    color: 'from-blue-500 to-indigo-600',
  },
  {
    id: 'custom',
    name: 'Site Sur Mesure',
    description: 'Performance maximale',
    price: 800,
    icon: Zap,
    color: 'from-purple-500 to-pink-600',
  }
];

const OPTIONS = [
  { id: 'blog', name: 'Blog intégré' },
  { id: 'form', name: 'Formulaire avancé' },
  { id: 'chat', name: 'Chat en ligne' },
  { id: 'multilang', name: 'Multi-langue' },
  { id: 'gallery', name: 'Galerie / Portfolio' },
  { id: 'crm', name: 'Intégration CRM' },
  { id: 'pages', name: 'Pages suppl. (+5)' },
  { id: 'booking', name: 'Réservation en ligne' },
];

const MARKETING = [
  { id: 'audit', name: 'Audit SEO', price: 100, icon: Search, oneTime: true },
  { id: 'seo', name: 'SEO mensuel', price: 90, icon: LineChart, oneTime: false },
  { id: 'analytics', name: 'Setup Analytics', price: 190, icon: BarChart3, oneTime: true },
];

const ADS_PLATFORMS = [
  { id: 'facebook', name: 'Meta Ads', price: 400, color: 'bg-blue-600' },
  { id: 'google', name: 'Google Ads', price: 400, color: 'bg-green-500' },
  { id: 'snapchat', name: 'Snapchat', price: 350, color: 'bg-yellow-400' },
  { id: 'tiktok', name: 'TikTok', price: 350, color: 'bg-pink-500' },
  { id: 'linkedin', name: 'LinkedIn', price: 350, color: 'bg-blue-700' },
  { id: 'pinterest', name: 'Pinterest', price: 300, color: 'bg-red-600' },
];

const OPTION_PRICE = 50;

function getDiscount(totalServices) {
  if (totalServices >= 5) return 0.25;
  if (totalServices >= 3) return 0.20;
  if (totalServices >= 2) return 0.15;
  return 0;
}

export default function Pricing() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const [selectedSite, setSelectedSite] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedMarketing, setSelectedMarketing] = useState([]);
  const [selectedAds, setSelectedAds] = useState([]);

  const toggleOption = (id) => {
    setSelectedOptions(prev =>
      prev.includes(id) ? prev.filter(o => o !== id) : [...prev, id]
    );
  };

  const toggleMarketing = (id) => {
    setSelectedMarketing(prev =>
      prev.includes(id) ? prev.filter(m => m !== id) : [...prev, id]
    );
  };

  const toggleAds = (id) => {
    setSelectedAds(prev =>
      prev.includes(id) ? prev.filter(a => a !== id) : [...prev, id]
    );
  };

  const calculations = useMemo(() => {
    let oneTimeTotal = 0;
    let monthlyTotal = 0;
    let itemCount = 0;
    const breakdown = [];

    if (selectedSite) {
      const site = SITES.find(s => s.id === selectedSite);
      oneTimeTotal += site.price;
      itemCount++;
      breakdown.push({ name: site.name, price: site.price, type: 'one-time' });
    }

    if (selectedOptions.length > 0) {
      const optionsTotal = selectedOptions.length * OPTION_PRICE;
      oneTimeTotal += optionsTotal;
      breakdown.push({ name: `${selectedOptions.length} option(s)`, price: optionsTotal, type: 'one-time' });
    }

    selectedMarketing.forEach(mktId => {
      const mkt = MARKETING.find(m => m.id === mktId);
      if (mkt.oneTime) {
        oneTimeTotal += mkt.price;
        breakdown.push({ name: mkt.name, price: mkt.price, type: 'one-time' });
      } else {
        monthlyTotal += mkt.price;
        breakdown.push({ name: mkt.name, price: mkt.price, type: 'monthly' });
      }
      itemCount++;
    });

    selectedAds.forEach(adId => {
      const ad = ADS_PLATFORMS.find(a => a.id === adId);
      monthlyTotal += ad.price;
      itemCount++;
      breakdown.push({ name: ad.name, price: ad.price, type: 'monthly' });
    });

    const discount = getDiscount(itemCount);
    const discountAmount = Math.round((oneTimeTotal + monthlyTotal) * discount);

    return {
      oneTimeTotal,
      monthlyTotal,
      discount,
      discountPercent: Math.round(discount * 100),
      discountAmount,
      finalOneTime: Math.round(oneTimeTotal * (1 - discount)),
      finalMonthly: Math.round(monthlyTotal * (1 - discount)),
      breakdown,
      itemCount,
      hasSelection: breakdown.length > 0
    };
  }, [selectedSite, selectedOptions, selectedMarketing, selectedAds]);

  return (
    <section
      id="tarifs"
      ref={sectionRef}
      className="relative py-24 lg:py-32 px-4 bg-[#F8F9FA] dark:bg-black overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary opacity-[0.03] blur-[150px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold tracking-[0.2em] uppercase mb-6"
          >
            <Calculator className="w-3.5 h-3.5" />
            Tarifs Transparents
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tightest text-black dark:text-white mb-4"
          >
            Estimez votre projet
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-purple">
              en quelques clics.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-gray-500 dark:text-gray-400 text-base md:text-lg max-w-xl mx-auto"
          >
            Prix clairs, sans surprise. Plus vous combinez, plus vous économisez.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Formulaire */}
          <div className="lg:col-span-8 space-y-8">

            {/* Type de site */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="p-6 rounded-2xl bg-gray-50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5"
            >
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-primary text-white text-xs flex items-center justify-center">1</span>
                Type de site
              </h3>

              <div className="grid md:grid-cols-3 gap-3">
                {SITES.map((site) => {
                  const Icon = site.icon;
                  const isSelected = selectedSite === site.id;
                  return (
                    <motion.button
                      key={site.id}
                      onClick={() => setSelectedSite(isSelected ? null : site.id)}
                      className={`relative p-5 rounded-xl border-2 text-left transition-all ${
                        isSelected
                          ? 'border-primary bg-primary/5'
                          : 'border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isSelected && (
                        <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                      )}

                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${site.color} flex items-center justify-center mb-3`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>

                      <div className="font-bold text-sm mb-1">{site.name}</div>
                      <div className="text-xs text-gray-500 mb-2">{site.description}</div>
                      <div className="text-lg font-bold text-primary">{site.price}$</div>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>

            {/* Options */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="p-6 rounded-2xl bg-gray-50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5"
            >
              <h3 className="font-bold mb-1 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-primary text-white text-xs flex items-center justify-center">2</span>
                Options
              </h3>
              <p className="text-xs text-gray-500 mb-4">+50$ par option</p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {OPTIONS.map((option) => {
                  const isSelected = selectedOptions.includes(option.id);
                  return (
                    <motion.button
                      key={option.id}
                      onClick={() => toggleOption(option.id)}
                      className={`p-3 rounded-lg border text-xs font-medium transition-all ${
                        isSelected
                          ? 'border-primary bg-primary/10 text-primary'
                          : 'border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20'
                      }`}
                      whileTap={{ scale: 0.95 }}
                    >
                      {option.name}
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>

            {/* Marketing & Ads en 2 colonnes */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* SEO & Analytics */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
                className="p-6 rounded-2xl bg-gray-50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5"
              >
                <h3 className="font-bold mb-4 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-primary text-white text-xs flex items-center justify-center">3</span>
                  SEO & Analytics
                </h3>

                <div className="space-y-2">
                  {MARKETING.map((item) => {
                    const Icon = item.icon;
                    const isSelected = selectedMarketing.includes(item.id);
                    return (
                      <motion.button
                        key={item.id}
                        onClick={() => toggleMarketing(item.id)}
                        className={`w-full p-3 rounded-lg border flex items-center justify-between transition-all ${
                          isSelected
                            ? 'border-primary bg-primary/5'
                            : 'border-gray-200 dark:border-white/10'
                        }`}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="flex items-center gap-3">
                          <Icon className={`w-4 h-4 ${isSelected ? 'text-primary' : 'text-gray-400'}`} />
                          <span className="text-sm font-medium">{item.name}</span>
                        </div>
                        <div className="text-sm font-bold text-primary">
                          {item.price}${!item.oneTime && <span className="text-xs font-normal">/m</span>}
                        </div>
                      </motion.button>
                    );
                  })}
                </div>
              </motion.div>

              {/* Publicité */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
                className="p-6 rounded-2xl bg-gray-50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5"
              >
                <h3 className="font-bold mb-4 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-primary text-white text-xs flex items-center justify-center">4</span>
                  Gestion Ads
                </h3>

                <div className="grid grid-cols-2 gap-2">
                  {ADS_PLATFORMS.map((platform) => {
                    const isSelected = selectedAds.includes(platform.id);
                    return (
                      <motion.button
                        key={platform.id}
                        onClick={() => toggleAds(platform.id)}
                        className={`p-3 rounded-lg border text-left transition-all ${
                          isSelected
                            ? 'border-primary bg-primary/5'
                            : 'border-gray-200 dark:border-white/10'
                        }`}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <div className={`w-2 h-2 rounded-full ${platform.color}`} />
                          <span className="text-xs font-medium">{platform.name}</span>
                        </div>
                        <div className="text-sm font-bold text-primary">{platform.price}$<span className="text-xs font-normal text-gray-400">/m</span></div>
                      </motion.button>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Récapitulatif */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="sticky top-24 p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-black text-white shadow-2xl"
            >
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="w-5 h-5 text-primary" />
                <h3 className="font-bold">Votre estimation</h3>
              </div>

              {/* Breakdown */}
              <div className="space-y-2 mb-6 min-h-[120px]">
                {!calculations.hasSelection ? (
                  <p className="text-sm text-gray-400 text-center py-8">
                    Sélectionnez des services
                  </p>
                ) : (
                  <AnimatePresence mode="popLayout">
                    {calculations.breakdown.map((item) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        className="flex justify-between text-sm"
                      >
                        <span className="text-gray-400">{item.name}</span>
                        <span>
                          {item.price}$
                          {item.type === 'monthly' && <span className="text-xs text-gray-500">/m</span>}
                        </span>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                )}
              </div>

              {calculations.hasSelection && (
                <>
                  <div className="h-px bg-white/10 mb-4" />

                  {/* Réduction */}
                  {calculations.discount > 0 && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="mb-4 p-3 rounded-lg bg-green-500/20 border border-green-500/30"
                    >
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-green-400">Pack -{calculations.discountPercent}%</span>
                        <span className="font-bold text-green-400">-{calculations.discountAmount}$</span>
                      </div>
                    </motion.div>
                  )}

                  {/* Totaux */}
                  <div className="space-y-2 mb-6">
                    {calculations.finalOneTime > 0 && (
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 text-sm">One-time</span>
                        <span className="text-2xl font-bold">{calculations.finalOneTime}$</span>
                      </div>
                    )}
                    {calculations.finalMonthly > 0 && (
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 text-sm">Mensuel</span>
                        <span className="text-2xl font-bold">{calculations.finalMonthly}$<span className="text-sm font-normal text-gray-400">/mois</span></span>
                      </div>
                    )}
                  </div>
                </>
              )}

              {/* CTAs */}
              <div className="space-y-3">
                <motion.a
                  href="#contact"
                  className="w-full py-4 rounded-xl bg-primary hover:bg-primary-dark text-white font-bold text-sm text-center flex items-center justify-center gap-2 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="w-4 h-4" />
                  Recevoir mon devis
                </motion.a>

                <motion.a
                  href="https://wa.me/33635505374"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm text-center flex items-center justify-center gap-2 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <MessageCircle className="w-4 h-4" />
                  Discuter sur WhatsApp
                </motion.a>
              </div>

              <p className="text-[10px] text-gray-500 text-center mt-4">
                * Estimation indicative
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
