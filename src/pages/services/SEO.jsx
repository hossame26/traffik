import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Search,
  Globe,
  MapPin,
  BarChart3,
  TrendingUp,
  CheckCircle,
  MessageCircle,
  Zap,
  Target,
  Link2,
  Settings,
  Star,
  Check,
} from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import FAQSection from '../../components/common/FAQSection';

const faqData = [
  {
    question: "Combien de temps faut-il pour voir les premiers résultats SEO ?",
    answer: "Le référencement naturel est une stratégie à moyen et long terme. En général, les premiers résultats significatifs apparaissent entre 3 et 6 mois après le début de l'optimisation. Cela dépend de la concurrence sur vos mots-clés, de l'état actuel de votre site et de la qualité du travail effectué. Certaines actions comme l'optimisation technique peuvent produire des effets plus rapides (quelques semaines), tandis que le netlinking et la création de contenu nécessitent plus de patience. Nous fournissons des rapports mensuels pour suivre chaque progression."
  },
  {
    question: "Pouvez-vous garantir la première page Google ?",
    answer: "Aucun professionnel sérieux ne peut garantir une position précise sur Google. Les algorithmes évoluent constamment et dépendent de centaines de facteurs. Ce que nous garantissons, c'est l'application rigoureuse des meilleures pratiques SEO recommandées par Google, un travail transparent avec des rapports détaillés, et une amélioration mesurable de votre visibilité organique. Nos clients constatent en moyenne une augmentation de 150% à 300% de leur trafic organique sur 6 à 12 mois."
  },
  {
    question: "Qu'est-ce que le SEO local et en ai-je besoin ?",
    answer: "Le SEO local est l'optimisation de votre présence en ligne pour les recherches géographiquement ciblées. Si vous avez un commerce physique, un cabinet, un restaurant ou tout business qui sert une zone géographique spécifique, le SEO local est indispensable. Il comprend l'optimisation de votre fiche Google Business Profile, la gestion des avis clients, les citations locales et l'optimisation de votre site pour les requêtes locales (ex: 'plombier Paris 15'). Le SEO local représente aujourd'hui 46% de toutes les recherches Google."
  },
  {
    question: "Le contenu est-il vraiment important pour le SEO ?",
    answer: "Le contenu est le pilier central de toute stratégie SEO réussie. Google valorise les sites qui produisent du contenu utile, original et régulier. Un blog professionnel avec des articles optimisés permet de cibler des mots-clés longue traîne, d'attirer du trafic qualifié et de démontrer votre expertise (E-E-A-T). Nous vous accompagnons dans la création d'une stratégie éditoriale adaptée à votre secteur, avec des contenus rédigés pour plaire à la fois aux moteurs de recherche et à vos visiteurs."
  },
  {
    question: "Quelle est la différence entre SEO et SEA (Google Ads) ?",
    answer: "Le SEO (référencement naturel) consiste à optimiser votre site pour apparaître dans les résultats organiques de Google, sans payer pour chaque clic. Le SEA (Search Engine Advertising) consiste à acheter des annonces payantes en haut des résultats. Le SEO offre un retour sur investissement durable : une fois bien positionné, vous recevez du trafic gratuit en continu. Le SEA offre des résultats immédiats mais s'arrête dès que vous coupez le budget. L'idéal est souvent de combiner les deux pour maximiser votre visibilité."
  }
];

/* ─── Animated Previews ─── */

function AuditScanPreview() {
  const checks = [
    { label: 'Meta tags', color: 'text-green-400', delay: 0 },
    { label: 'Backlinks: 47', color: 'text-green-400', delay: 0.5 },
    { label: 'Core Vitals', color: 'text-amber-400', delay: 1 },
    { label: 'Speed: 3.2s', color: 'text-amber-400', delay: 1.5 },
    { label: 'H1 manquant', color: 'text-red-400', delay: 2 },
  ];
  return (
    <div className="h-32 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden relative p-3 font-mono border border-white/[0.06]">
      <div className="flex items-center gap-1.5 mb-2">
        <Search className="w-3 h-3 text-[#0066FF]" />
        <span className="text-[9px] text-white/40 font-medium">Scan SEO...</span>
        <div className="ml-auto">
          <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF] animate-pulse" />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        {checks.map((c, i) => (
          <motion.div
            key={i}
            className="flex items-center gap-1.5"
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: [0, 1, 1, 0.7], x: 0 }}
            transition={{ duration: 2, delay: c.delay, repeat: Infinity, repeatDelay: 4 }}
          >
            <span className={`text-[9px] ${c.color}`}>●</span>
            <span className="text-[9px] text-white/50">{c.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function RankingPreview() {
  const keywords = [
    { label: 'agence seo', from: 18, to: 3, color: 'from-[#0066FF] to-blue-400', delay: 0 },
    { label: 'consultant seo', from: 24, to: 5, color: 'from-[#A855F7] to-purple-400', delay: 0.3 },
    { label: 'audit seo', from: 31, to: 7, color: 'from-emerald-500 to-emerald-400', delay: 0.6 },
    { label: 'seo local', from: 42, to: 4, color: 'from-orange-500 to-orange-400', delay: 0.9 },
  ];
  return (
    <div className="h-32 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden relative p-3 flex flex-col justify-between border border-white/[0.06]">
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center gap-1.5">
          <TrendingUp className="w-3.5 h-3.5 text-[#0066FF]" />
          <span className="text-[10px] text-white/60 font-medium">Positions</span>
        </div>
        <div className="flex gap-1 items-center">
          <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="text-[9px] text-green-400/80">Live</span>
        </div>
      </div>
      <div className="flex flex-col gap-1.5 flex-1 justify-end">
        {keywords.map((kw, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="text-[8px] text-white/40 w-16 text-right truncate">{kw.label}</span>
            <div className="flex-1 h-3 rounded-full bg-white/[0.06] overflow-hidden">
              <motion.div
                className={`h-full rounded-full bg-gradient-to-r ${kw.color}`}
                initial={{ width: '0%' }}
                animate={{ width: ['0%', `${100 - kw.to * 2}%`, '15%', `${100 - kw.to * 2}%`] }}
                transition={{ duration: 3, delay: kw.delay, repeat: Infinity, repeatDelay: 1, ease: 'easeInOut' }}
              />
            </div>
            <motion.span
              className="text-[8px] font-bold text-white/50 w-5"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, delay: kw.delay, repeat: Infinity }}
            >
              #{kw.to}
            </motion.span>
          </div>
        ))}
      </div>
    </div>
  );
}

function GrowthPreview() {
  const metrics = [
    { label: 'Trafic', value: '+250%', color: 'from-[#0066FF] to-blue-400' },
    { label: 'Conv.', value: '8.3%', color: 'from-[#A855F7] to-purple-400' },
    { label: 'ROI', value: '5.6x', color: 'from-emerald-500 to-emerald-400' },
  ];
  return (
    <div className="h-32 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden relative p-3 flex flex-col border border-white/[0.06]">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-1.5">
          <BarChart3 className="w-3 h-3 text-[#0066FF]" />
          <span className="text-[9px] text-white/40 font-medium">Croissance</span>
        </div>
        <div className="flex gap-1 items-center">
          <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="text-[8px] text-green-400/60">Live</span>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-1.5 mb-2">
        {metrics.map((m, i) => (
          <motion.div key={i} className="rounded-lg bg-white/[0.05] p-1.5 text-center" animate={{ scale: [1, 1.03, 1] }} transition={{ duration: 2, delay: i * 0.5, repeat: Infinity }}>
            <div className={`text-[10px] font-bold bg-gradient-to-r ${m.color} bg-clip-text text-transparent`}>{m.value}</div>
            <div className="text-[7px] text-white/25">{m.label}</div>
          </motion.div>
        ))}
      </div>
      <div className="flex items-end gap-0.5 flex-1">
        {[40, 65, 45, 80, 55, 70, 90, 60, 75, 85, 50, 95].map((h, i) => (
          <motion.div
            key={i}
            className="flex-1 rounded-t bg-gradient-to-t from-[#0066FF]/40 to-[#A855F7]/40"
            initial={{ height: '0%' }}
            animate={{ height: `${h}%` }}
            transition={{ duration: 1, delay: i * 0.08, repeat: Infinity, repeatType: 'reverse', repeatDelay: 2 }}
          />
        ))}
      </div>
    </div>
  );
}

/* ─── Plans Data ─── */

const plans = [
  {
    name: 'Audit SEO Complet',
    description: 'Livraison sous 7 jours',
    price: '500',
    suffix: '€',
    label: 'Paiement unique',
    icon: Search,
    preview: AuditScanPreview,
    popular: false,
    features: [
      'Analyse technique complète',
      'Audit de contenu et mots-clés',
      'Analyse des backlinks',
      'Analyse de la concurrence',
      'Rapport PDF détaillé',
      'Plan d\'action prioritaire',
    ],
    wa: 'Bonjour%2C%20je%20souhaite%20un%20audit%20SEO%20pour%20mon%20site.',
  },
  {
    name: 'SEO Performance',
    description: 'Sans engagement',
    price: '400',
    suffix: '€/mois',
    label: 'Mensuel',
    icon: TrendingUp,
    preview: RankingPreview,
    popular: true,
    features: [
      'Audit initial offert',
      'Optimisation technique continue',
      'Création de 2 contenus/mois',
      'Stratégie de netlinking',
      'Suivi des positions quotidien',
      'Rapport mensuel détaillé',
      'Support prioritaire',
    ],
    wa: 'Bonjour%2C%20je%20suis%20interesse%20par%20votre%20offre%20SEO%20mensuelle.',
  },
  {
    name: 'SEO Croissance',
    description: 'Engagement 6 mois',
    price: '1 500',
    suffix: '€/mois',
    label: 'Premium',
    icon: BarChart3,
    preview: GrowthPreview,
    popular: false,
    features: [
      'Tout de SEO Performance',
      'Création de 8+ contenus/mois',
      'Netlinking intensif (10+ liens/mois)',
      'SEO local inclus',
      'Optimisation taux de conversion',
      'Appel stratégique hebdomadaire',
      'Support illimité',
    ],
    wa: 'Bonjour%2C%20je%20suis%20interesse%20par%20votre%20offre%20SEO%20Premium.',
  },
];

export default function SEO() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#050505] text-black dark:text-white">
      <SEOHead
        title="Référencement SEO | Première Page Google | Traffik Web"
        description="Expert SEO en France. Audit, optimisation on-page, netlinking, SEO local. Boostez votre visibilité Google. Audit dès 500€."
        canonical="https://traffik-web.fr/referencement-seo"
        keywords="referencement seo, referencement naturel, seo france, audit seo, premiere page google, optimisation seo, seo local, netlinking, consultant seo, agence seo france, referencement google, strategie seo"
      />

      <div className="max-w-5xl mx-auto py-20 px-4">

        {/* Back Link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[#0066FF] hover:underline mb-10 text-sm"
        >
          <ArrowLeft className="w-4 h-4" /> Retour à l'accueil
        </Link>

        {/* Hero Section */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-[#0066FF] to-purple-600">
              <Search className="w-6 h-6 text-white" />
            </div>
            <span className="text-sm font-medium text-[#0066FF] bg-[#0066FF]/10 px-3 py-1 rounded-full">
              Référencement Naturel
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Référencement SEO :{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-purple-600">
              Atteignez la Première Page Google
            </span>
          </h1>

          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mb-8">
            Boostez votre visibilité Google avec une stratégie SEO sur mesure. Audit, optimisation, contenu et netlinking pour des résultats concrets.
          </p>

          <motion.a
            href="https://wa.me/33635505374?text=Bonjour%2C%20je%20souhaite%20un%20audit%20SEO%20pour%20mon%20site."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#0066FF] text-white font-bold rounded-full hover:shadow-lg hover:shadow-[#0066FF]/25 transition-all"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <MessageCircle className="w-5 h-5" />
            Demander un Audit SEO Gratuit
          </motion.a>
        </motion.header>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {[
            { value: '93%', label: 'des expériences commencent sur Google' },
            { value: '75%', label: 'ne dépassent pas la page 1' },
            { value: '14.6%', label: 'taux de conversion leads SEO' },
            { value: '5.66x', label: 'ROI moyen du SEO' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-5 rounded-2xl bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 text-center"
            >
              <div className="text-2xl md:text-3xl font-bold text-[#0066FF] mb-2">{stat.value}</div>
              <div className="text-xs md:text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Pricing Cards with Animated Previews */}
        <div className="relative mb-20 rounded-3xl p-6 md:p-10 -mx-2 md:-mx-4">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0066FF]/[0.07] via-[#A855F7]/[0.04] to-[#0066FF]/[0.06] dark:from-[#0066FF]/[0.1] dark:via-[#A855F7]/[0.06] dark:to-[#0066FF]/[0.08] rounded-3xl" />
          <div className="absolute top-10 -left-10 w-60 h-60 bg-[#0066FF]/10 dark:bg-[#0066FF]/[0.15] rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 -right-10 w-60 h-60 bg-[#A855F7]/10 dark:bg-[#A855F7]/[0.15] rounded-full blur-3xl pointer-events-none" />

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative z-10"
          >
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-purple-600">Tarifs SEO</span> Transparents
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                Des formules adaptées à chaque budget et chaque objectif.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {plans.map((plan, index) => {
                const Icon = plan.icon;
                const Preview = plan.preview;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`relative rounded-2xl p-5 flex flex-col transition-all duration-300 ${
                      plan.popular
                        ? 'bg-white/40 dark:bg-white/[0.08] backdrop-blur-xl border border-black/[0.08] dark:border-[#0066FF]/40 shadow-lg shadow-black/[0.06] dark:shadow-[#0066FF]/10 ring-1 ring-black/[0.04] dark:ring-[#0066FF]/10'
                        : 'bg-white/30 dark:bg-white/[0.04] backdrop-blur-xl border border-black/[0.06] dark:border-white/[0.08] shadow-md shadow-black/[0.05] dark:shadow-black/[0.2] hover:shadow-lg hover:shadow-black/[0.08] hover:bg-white/50 dark:hover:bg-white/[0.07]'
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                        <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#0066FF] text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-[#0066FF]/30">
                          <Star className="w-3 h-3 fill-white" /> Populaire
                        </span>
                      </div>
                    )}

                    <div className="mb-4 pt-1">
                      <Preview />
                    </div>

                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#0066FF]/20 to-purple-600/20 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-[#0066FF]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">{plan.name}</h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{plan.description}</p>
                      </div>
                    </div>

                    <div className="mb-5">
                      <span className="text-[10px] text-gray-500 uppercase tracking-wider">{plan.label}</span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-extrabold text-[#0066FF]">{plan.price}</span>
                        <span className="text-lg font-bold text-gray-400">{plan.suffix}</span>
                      </div>
                    </div>

                    <ul className="space-y-2.5 mb-6 flex-1">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm">
                          <Check className="w-4 h-4 text-[#0066FF] mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <motion.a
                      href={`https://wa.me/33635505374?text=${plan.wa}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full py-3 rounded-xl font-semibold text-center text-sm transition-all block ${
                        plan.popular
                          ? 'bg-[#0066FF] text-white hover:bg-[#0055DD] shadow-lg shadow-[#0066FF]/25'
                          : 'bg-gray-900 dark:bg-white/10 text-white hover:bg-gray-800 dark:hover:bg-white/[0.15] border border-transparent dark:border-white/[0.06]'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {plan.popular ? 'Démarrer maintenant' : 'Demander un devis'}
                    </motion.a>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>
        </div>

        {/* Bento Grid */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px]">
            {/* Résultats mesurables — large gradient */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="col-span-2 row-span-1 rounded-3xl p-6 md:p-8 flex flex-col justify-between bg-gradient-to-br from-[#0066FF]/[0.08] to-[#A855F7]/[0.06] dark:from-[#0066FF]/[0.12] dark:to-[#A855F7]/[0.08] border border-[#0066FF]/15 dark:border-[#0066FF]/20 hover:shadow-lg hover:shadow-[#0066FF]/5 transition-shadow duration-300"
            >
              <TrendingUp className="w-8 h-8 text-[#0066FF]" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Résultats mesurables</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Chaque action tracée, chaque progression documentée.</p>
              </div>
            </motion.div>

            {/* SEO Technique */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="col-span-1 row-span-1 rounded-3xl p-5 md:p-6 flex flex-col justify-between bg-gray-50 dark:bg-white/[0.05] border border-gray-200 dark:border-white/[0.08] hover:shadow-lg hover:border-gray-300 dark:hover:border-white/[0.12] transition-all duration-300"
            >
              <Settings className="w-7 h-7 text-[#0066FF]" />
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-0.5">SEO Technique</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">Core Web Vitals, vitesse, crawl</p>
              </div>
            </motion.div>

            {/* Netlinking */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="col-span-1 row-span-1 rounded-3xl p-5 md:p-6 flex flex-col justify-between bg-gray-50 dark:bg-white/[0.05] border border-gray-200 dark:border-white/[0.08] hover:shadow-lg hover:border-gray-300 dark:hover:border-white/[0.12] transition-all duration-300"
            >
              <Link2 className="w-7 h-7 text-[#A855F7]" />
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-0.5">Netlinking</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">Backlinks de qualité</p>
              </div>
            </motion.div>

            {/* SEO Local */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="col-span-1 row-span-1 rounded-3xl p-5 md:p-6 flex flex-col justify-between bg-gray-50 dark:bg-white/[0.05] border border-gray-200 dark:border-white/[0.08] hover:shadow-lg hover:border-gray-300 dark:hover:border-white/[0.12] transition-all duration-300"
            >
              <MapPin className="w-7 h-7 text-[#0066FF]" />
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-0.5">SEO Local</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">Google Maps, avis, citations</p>
              </div>
            </motion.div>

            {/* Expert SEO dédié — wide dark */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="col-span-2 md:col-span-3 row-span-1 rounded-3xl p-6 md:p-8 flex flex-col justify-between bg-gray-900 dark:bg-white/[0.05] border border-gray-800 dark:border-white/[0.08] hover:shadow-xl transition-shadow duration-300"
            >
              <Search className="w-8 h-8 text-[#0066FF]" />
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Expert SEO dédié</h3>
                <p className="text-sm text-gray-400">Un seul interlocuteur, suivi quotidien de vos positions Google.</p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Process Strip — 4 steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 p-6 md:p-8 rounded-3xl bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/[0.08] backdrop-blur-sm"
        >
          <h3 className="text-lg font-bold mb-6 text-center text-gray-900 dark:text-white">De l'audit au top Google en 4 étapes</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { num: '01', label: 'Audit', desc: 'Analyse complète de votre site' },
              { num: '02', label: 'Stratégie', desc: 'Mots-clés et plan d\'action' },
              { num: '03', label: 'Optimisation', desc: 'Technique + contenu + liens' },
              { num: '04', label: 'Suivi', desc: 'Reporting mensuel détaillé' },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-black text-[#0066FF]/20 mb-1">{step.num}</div>
                <div className="text-sm font-bold text-gray-900 dark:text-white">{step.label}</div>
                <div className="text-xs text-gray-500 mt-0.5">{step.desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900 dark:text-white">
            Questions <span className="text-[#0066FF]">Fréquentes</span> sur le SEO
          </h2>
          <FAQSection faqs={faqData} />
        </motion.section>

        {/* Final CTA — solid gradient like Shopify */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center rounded-3xl bg-gradient-to-br from-[#0066FF] to-blue-700 p-10 md:p-14 mb-20"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white">
            Prêt à dominer Google ?
          </h2>
          <p className="text-blue-100 mb-8 max-w-lg mx-auto">
            Premier échange gratuit et sans engagement. Devis sous 24h.
          </p>
          <motion.a
            href="https://wa.me/33635505374?text=Bonjour%2C%20je%20souhaite%20discuter%20de%20mon%20projet%20SEO."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#0066FF] font-bold rounded-full hover:shadow-xl transition-all"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <MessageCircle className="w-5 h-5" />
            Discuter sur WhatsApp
          </motion.a>
        </motion.div>

      </div>
    </div>
  );
}
