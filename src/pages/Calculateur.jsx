import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
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
    features: ['Paiements intégrés', 'Gestion stocks', 'Thème premium']
  },
  {
    id: 'wordpress',
    name: 'Site WordPress',
    description: 'Site vitrine professionnel',
    price: 500,
    icon: FileText,
    color: 'from-blue-500 to-indigo-600',
    features: ['SEO optimisé', 'Blog intégré', 'Facile à gérer']
  },
  {
    id: 'custom',
    name: 'Site Sur Mesure',
    description: 'Performance maximale',
    price: 800,
    icon: Zap,
    color: 'from-purple-500 to-pink-600',
    features: ['React/Next.js', 'Ultra rapide', 'Design unique']
  }
];

const OPTIONS = [
  { id: 'blog', name: 'Blog intégré', price: 50 },
  { id: 'form', name: 'Formulaire avancé', price: 50 },
  { id: 'chat', name: 'Chat en ligne', price: 50 },
  { id: 'multilang', name: 'Multi-langue', price: 50 },
  { id: 'gallery', name: 'Galerie / Portfolio', price: 50 },
  { id: 'crm', name: 'Intégration CRM', price: 50 },
  { id: 'pages', name: 'Pages supplémentaires (+5)', price: 50 },
  { id: 'booking', name: 'Réservation en ligne', price: 50 },
];

const MARKETING = [
  { id: 'audit', name: 'Audit SEO complet', price: 100, icon: Search, oneTime: true },
  { id: 'seo', name: 'SEO mensuel', price: 90, icon: LineChart, oneTime: false },
  { id: 'analytics', name: 'Setup Analytics', price: 190, icon: BarChart3, oneTime: true },
];

const ADS_PLATFORMS = [
  { id: 'facebook', name: 'Facebook / Meta', price: 400, color: 'bg-blue-600' },
  { id: 'google', name: 'Google Ads', price: 400, color: 'bg-red-500' },
  { id: 'snapchat', name: 'Snapchat', price: 350, color: 'bg-yellow-400' },
  { id: 'tiktok', name: 'TikTok', price: 350, color: 'bg-pink-500' },
  { id: 'linkedin', name: 'LinkedIn', price: 350, color: 'bg-blue-700' },
  { id: 'pinterest', name: 'Pinterest', price: 300, color: 'bg-red-600' },
];

// Calcul de la réduction
function getDiscount(totalServices) {
  if (totalServices >= 5) return 0.25;
  if (totalServices >= 3) return 0.20;
  if (totalServices >= 2) return 0.15;
  return 0;
}

export default function Calculateur() {
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

  // Calculs
  const calculations = useMemo(() => {
    let oneTimeTotal = 0;
    let monthlyTotal = 0;
    let itemCount = 0;
    const breakdown = [];

    // Site
    if (selectedSite) {
      const site = SITES.find(s => s.id === selectedSite);
      oneTimeTotal += site.price;
      itemCount++;
      breakdown.push({ name: site.name, price: site.price, type: 'one-time' });
    }

    // Options
    selectedOptions.forEach(optId => {
      const opt = OPTIONS.find(o => o.id === optId);
      oneTimeTotal += opt.price;
      breakdown.push({ name: opt.name, price: opt.price, type: 'one-time' });
    });

    // Marketing
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

    // Ads
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
      subtotal: oneTimeTotal + monthlyTotal,
      discount,
      discountPercent: Math.round(discount * 100),
      discountAmount,
      finalOneTime: Math.round(oneTimeTotal * (1 - discount)),
      finalMonthly: Math.round(monthlyTotal * (1 - discount)),
      breakdown,
      itemCount
    };
  }, [selectedSite, selectedOptions, selectedMarketing, selectedAds]);

  return (
    <div className="min-h-screen bg-white dark:bg-[#050505] text-black dark:text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[#0066FF] hover:underline mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> Retour à l'accueil
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 mb-4"
          >
            <div className="p-3 rounded-2xl bg-gradient-to-br from-[#0066FF] to-purple-600">
              <Calculator className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">Calculateur de projet</h1>
              <p className="text-gray-500 dark:text-gray-400">Estimez le coût de votre projet en quelques clics</p>
            </div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Formulaire */}
          <div className="lg:col-span-2 space-y-10">

            {/* Étape 1: Type de site */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="text-xl font-bold mb-2 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-[#0066FF] text-white text-sm flex items-center justify-center font-bold">1</span>
                Type de site
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">Choisissez la plateforme adaptée à vos besoins</p>

              <div className="grid md:grid-cols-3 gap-4">
                {SITES.map((site) => {
                  const Icon = site.icon;
                  const isSelected = selectedSite === site.id;
                  return (
                    <motion.button
                      key={site.id}
                      onClick={() => setSelectedSite(isSelected ? null : site.id)}
                      className={`relative p-6 rounded-2xl border-2 text-left transition-all ${
                        isSelected
                          ? 'border-[#0066FF] bg-[#0066FF]/5'
                          : 'border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isSelected && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute top-3 right-3 w-6 h-6 rounded-full bg-[#0066FF] flex items-center justify-center"
                        >
                          <Check className="w-4 h-4 text-white" />
                        </motion.div>
                      )}

                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${site.color} flex items-center justify-center mb-4`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>

                      <h3 className="font-bold mb-1">{site.name}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{site.description}</p>

                      <div className="text-2xl font-bold text-[#0066FF]">
                        {site.price}$
                      </div>
                      <div className="text-xs text-gray-400">à partir de</div>
                    </motion.button>
                  );
                })}
              </div>
            </motion.section>

            {/* Étape 2: Options */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-xl font-bold mb-2 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-[#0066FF] text-white text-sm flex items-center justify-center font-bold">2</span>
                Options
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">Ajoutez des fonctionnalités à votre site (+50$ chacune)</p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {OPTIONS.map((option) => {
                  const isSelected = selectedOptions.includes(option.id);
                  return (
                    <motion.button
                      key={option.id}
                      onClick={() => toggleOption(option.id)}
                      className={`p-4 rounded-xl border text-left text-sm font-medium transition-all ${
                        isSelected
                          ? 'border-[#0066FF] bg-[#0066FF]/10 text-[#0066FF]'
                          : 'border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="flex items-center justify-between">
                        <span>{option.name}</span>
                        {isSelected && <Check className="w-4 h-4" />}
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </motion.section>

            {/* Étape 3: Marketing */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-xl font-bold mb-2 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-[#0066FF] text-white text-sm flex items-center justify-center font-bold">3</span>
                SEO & Analytics
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">Boostez votre visibilité en ligne</p>

              <div className="space-y-3">
                {MARKETING.map((item) => {
                  const Icon = item.icon;
                  const isSelected = selectedMarketing.includes(item.id);
                  return (
                    <motion.button
                      key={item.id}
                      onClick={() => toggleMarketing(item.id)}
                      className={`w-full p-5 rounded-xl border flex items-center justify-between transition-all ${
                        isSelected
                          ? 'border-[#0066FF] bg-[#0066FF]/5'
                          : 'border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20'
                      }`}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          isSelected ? 'bg-[#0066FF] text-white' : 'bg-gray-100 dark:bg-white/5 text-gray-500'
                        }`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="text-left">
                          <div className="font-bold">{item.name}</div>
                          <div className="text-xs text-gray-500">{item.oneTime ? 'Paiement unique' : 'Abonnement mensuel'}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="text-right">
                          <div className="font-bold text-[#0066FF]">{item.price}$</div>
                          <div className="text-xs text-gray-400">{item.oneTime ? 'one-time' : '/mois'}</div>
                        </div>
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                          isSelected ? 'border-[#0066FF] bg-[#0066FF]' : 'border-gray-300 dark:border-white/20'
                        }`}>
                          {isSelected && <Check className="w-4 h-4 text-white" />}
                        </div>
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </motion.section>

            {/* Étape 4: Publicité */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-xl font-bold mb-2 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-[#0066FF] text-white text-sm flex items-center justify-center font-bold">4</span>
                Gestion Publicité
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">Sélectionnez les plateformes à gérer (mensuel)</p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {ADS_PLATFORMS.map((platform) => {
                  const isSelected = selectedAds.includes(platform.id);
                  return (
                    <motion.button
                      key={platform.id}
                      onClick={() => toggleAds(platform.id)}
                      className={`p-5 rounded-xl border text-left transition-all ${
                        isSelected
                          ? 'border-[#0066FF] bg-[#0066FF]/5'
                          : 'border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className={`w-3 h-3 rounded-full ${platform.color}`} />
                        {isSelected && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-5 h-5 rounded-full bg-[#0066FF] flex items-center justify-center"
                          >
                            <Check className="w-3 h-3 text-white" />
                          </motion.div>
                        )}
                      </div>
                      <div className="font-bold mb-1">{platform.name}</div>
                      <div className="text-lg font-bold text-[#0066FF]">{platform.price}$<span className="text-xs text-gray-400 font-normal">/mois</span></div>
                    </motion.button>
                  );
                })}
              </div>
            </motion.section>
          </div>

          {/* Panneau Récapitulatif */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="sticky top-8 p-6 rounded-3xl bg-gray-50 dark:bg-white/[0.02] border border-gray-200 dark:border-white/10"
            >
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="w-5 h-5 text-[#0066FF]" />
                <h3 className="text-lg font-bold">Votre estimation</h3>
              </div>

              {/* Breakdown */}
              <div className="space-y-3 mb-6 max-h-[300px] overflow-y-auto">
                {calculations.breakdown.length === 0 ? (
                  <p className="text-sm text-gray-400 text-center py-8">
                    Sélectionnez des services pour voir l'estimation
                  </p>
                ) : (
                  <AnimatePresence>
                    {calculations.breakdown.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        transition={{ delay: index * 0.05 }}
                        className="flex justify-between text-sm"
                      >
                        <span className="text-gray-600 dark:text-gray-400">{item.name}</span>
                        <span className="font-medium">
                          {item.price}$
                          {item.type === 'monthly' && <span className="text-xs text-gray-400">/mois</span>}
                        </span>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                )}
              </div>

              {calculations.breakdown.length > 0 && (
                <>
                  <div className="h-px bg-gray-200 dark:bg-white/10 mb-4" />

                  {/* Réduction */}
                  {calculations.discount > 0 && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="mb-4 p-3 rounded-xl bg-green-500/10 border border-green-500/20"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-green-600 dark:text-green-400 font-medium">
                          Pack réduction (-{calculations.discountPercent}%)
                        </span>
                        <span className="font-bold text-green-600 dark:text-green-400">
                          -{calculations.discountAmount}$
                        </span>
                      </div>
                    </motion.div>
                  )}

                  {/* Totaux */}
                  <div className="space-y-3 mb-6">
                    {calculations.finalOneTime > 0 && (
                      <div className="flex justify-between">
                        <span className="text-gray-500">Paiement unique</span>
                        <span className="text-xl font-bold">{calculations.finalOneTime}$</span>
                      </div>
                    )}
                    {calculations.finalMonthly > 0 && (
                      <div className="flex justify-between">
                        <span className="text-gray-500">Mensuel</span>
                        <span className="text-xl font-bold">{calculations.finalMonthly}$<span className="text-sm font-normal text-gray-400">/mois</span></span>
                      </div>
                    )}
                  </div>

                  <div className="h-px bg-gray-200 dark:bg-white/10 mb-6" />
                </>
              )}

              {/* CTAs */}
              <div className="space-y-3">
                <motion.a
                  href="#contact"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#0066FF] to-purple-600 text-white font-bold text-center flex items-center justify-center gap-2 shadow-lg shadow-[#0066FF]/25"
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
                  className="w-full py-4 rounded-xl bg-[#25D366] text-white font-bold text-center flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <MessageCircle className="w-4 h-4" />
                  Discuter sur WhatsApp
                </motion.a>
              </div>

              {/* Note */}
              <p className="text-xs text-gray-400 text-center mt-4">
                * Estimation indicative. Prix final sur devis personnalisé.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
