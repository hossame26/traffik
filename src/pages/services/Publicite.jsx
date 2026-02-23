import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Target,
  TrendingUp,
  BarChart3,
  Users,
  Zap,
  Check,
  MessageCircle,
  LineChart,
  Megaphone,
  ShieldCheck,
  Clock,
  Star,
  Eye,
} from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import FAQSection from '../../components/common/FAQSection';

/* ─── Platform SVG Logos ─── */

const MetaLogo = () => (
  <svg viewBox="0 0 36 36" className="w-5 h-5" fill="none" aria-label="Meta">
    <path d="M18 2C9.163 2 2 9.163 2 18c0 7.938 5.813 14.52 13.406 15.756V22.5h-3.656v-4.5h3.656v-3.431c0-3.612 2.15-5.607 5.444-5.607 1.578 0 3.228.282 3.228.282v3.546H22.23c-1.792 0-2.351 1.112-2.351 2.253V18h3.997l-.639 4.5h-3.358v11.256C28.187 32.52 34 25.938 34 18c0-8.837-7.163-16-16-16z" fill="#1877F2"/>
  </svg>
);

const GoogleLogo = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" aria-label="Google Ads">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09A6.97 6.97 0 015.48 12c0-.72.13-1.42.36-2.09V7.07H2.18A11.97 11.97 0 001 12c0 1.94.46 3.77 1.18 5.43l3.66-2.84z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const TikTokLogo = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" aria-label="TikTok Ads">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" fill="#010101"/>
  </svg>
);

const SnapchatLogo = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" aria-label="Snapchat Ads">
    <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12 1.033-.301.165-.088.344-.104.464-.104.182 0 .359.029.509.09.45.149.734.479.734.838.015.449-.39.839-1.213 1.168-.089.029-.209.075-.344.119-.45.135-1.139.36-1.333.81-.09.224-.061.524.12.868l.015.015c.06.136 1.526 3.475 4.791 4.014.255.044.435.27.42.509 0 .075-.015.149-.045.225-.24.569-1.273.988-3.146 1.271-.059.091-.12.375-.164.57-.029.179-.074.36-.134.553-.076.271-.27.405-.555.405h-.03a1.821 1.821 0 01-.484-.075 4.782 4.782 0 00-1.066-.12c-.255 0-.524.015-.78.045-.375.044-.75.179-1.168.359-.869.405-1.639.795-2.774.795-.06 0-.12 0-.179-.015h-.09c-1.139 0-1.909-.39-2.779-.795-.42-.179-.794-.314-1.168-.359a6.918 6.918 0 00-.779-.045c-.375 0-.734.045-1.066.12a1.855 1.855 0 01-.484.075c-.284 0-.479-.134-.554-.405a4.247 4.247 0 01-.135-.554c-.044-.194-.104-.479-.164-.569-1.873-.284-2.906-.704-3.146-1.271a.564.564 0 01-.045-.225c-.015-.239.165-.465.42-.509 3.264-.54 4.73-3.879 4.791-4.02l.016-.029c.18-.345.209-.645.119-.869-.194-.449-.884-.674-1.333-.809a3.73 3.73 0 01-.345-.12c-.823-.329-1.227-.72-1.212-1.168 0-.359.284-.689.734-.838.149-.06.329-.09.509-.09.12 0 .3.016.464.105.374.18.734.284 1.034.3.197 0 .326-.044.4-.089-.007-.165-.019-.33-.03-.51l-.003-.06c-.105-1.628-.23-3.654.3-4.847C7.859 1.069 11.216.793 12.206.793z" fill="#FFFC00"/>
  </svg>
);

const PinterestLogo = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" aria-label="Pinterest Ads">
    <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" fill="#E60023"/>
  </svg>
);

const LinkedInLogo = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" aria-label="LinkedIn Ads">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="#0A66C2"/>
  </svg>
);

const allPlatforms = [
  { Logo: MetaLogo, label: 'Meta', bg: 'bg-[#1877F2]/10' },
  { Logo: GoogleLogo, label: 'Google', bg: 'bg-gray-100 dark:bg-white/[0.06]' },
  { Logo: TikTokLogo, label: 'TikTok', bg: 'bg-black dark:bg-white/[0.06]', textClass: 'text-black dark:text-white' },
  { Logo: SnapchatLogo, label: 'Snapchat', bg: 'bg-[#FFFC00]/10' },
  { Logo: PinterestLogo, label: 'Pinterest', bg: 'bg-[#E60023]/10' },
  { Logo: LinkedInLogo, label: 'LinkedIn', bg: 'bg-[#0A66C2]/10' },
];

/* ─── Animated Previews ─── */

function MetaAdsPreview() {
  const ads = [
    { reach: '24K', ctr: '3.2%', color: 'from-blue-500 to-blue-400' },
    { reach: '18K', ctr: '4.1%', color: 'from-purple-500 to-pink-400' },
    { reach: '31K', ctr: '2.8%', color: 'from-indigo-500 to-blue-400' },
  ];
  return (
    <div className="h-32 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden relative p-3 flex flex-col border border-white/[0.06]">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-1.5">
          <MetaLogo />
          <span className="text-[9px] text-white/40 font-medium">Meta Ads</span>
        </div>
        <div className="flex gap-1 items-center">
          <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="text-[8px] text-green-400/60">Active</span>
        </div>
      </div>
      <div className="flex flex-col gap-1.5 flex-1 justify-end">
        {ads.map((ad, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="text-[8px] text-white/40 w-7 text-right">{ad.reach}</span>
            <div className="flex-1 h-3 rounded-full bg-white/[0.06] overflow-hidden">
              <motion.div
                className={`h-full rounded-full bg-gradient-to-r ${ad.color}`}
                initial={{ width: '0%' }}
                animate={{ width: ['0%', `${60 + i * 15}%`, '20%', `${60 + i * 15}%`] }}
                transition={{ duration: 3, delay: i * 0.3, repeat: Infinity, repeatDelay: 1, ease: 'easeInOut' }}
              />
            </div>
            <motion.span
              className="text-[8px] font-bold text-white/50 w-7"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
            >
              {ad.ctr}
            </motion.span>
          </div>
        ))}
      </div>
    </div>
  );
}

function GoogleAdsPreview() {
  const results = [
    { label: 'Ad · traffik-web.fr', title: 'Création Site Web', pos: 1 },
    { label: 'Ad · traffik-web.fr', title: 'Agence Marketing', pos: 2 },
    { label: 'organic', title: 'Résultat naturel', pos: 3 },
  ];
  return (
    <div className="h-32 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden relative p-3 font-mono flex flex-col border border-white/[0.06]">
      <div className="flex items-center gap-1.5 mb-2">
        <GoogleLogo />
        <div className="flex-1 h-2.5 rounded-full bg-white/[0.08] mx-1" />
        <div className="w-5 h-5 rounded bg-white/[0.06] flex items-center justify-center">
          <span className="text-[8px] text-blue-400">Go</span>
        </div>
      </div>
      <div className="flex flex-col gap-1.5 flex-1">
        {results.map((r, i) => (
          <motion.div
            key={i}
            className="flex flex-col gap-0.5 px-2 py-1 rounded-lg bg-white/[0.03]"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: [0, 1, 1, 0.7], y: 0 }}
            transition={{ duration: 2, delay: i * 0.5, repeat: Infinity, repeatDelay: 4 }}
          >
            <div className="flex items-center gap-1">
              {r.pos <= 2 && <span className="text-[7px] px-1 py-0.5 rounded bg-[#0066FF]/30 text-[#0066FF] font-bold">Ad</span>}
              <span className="text-[7px] text-white/30">{r.label}</span>
            </div>
            <span className="text-[8px] text-blue-400 font-medium">{r.title}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function ScalingPreview() {
  const metrics = [
    { label: 'ROAS', value: '4.2x', color: 'from-[#0066FF] to-blue-400' },
    { label: 'CPA', value: '€12', color: 'from-[#A855F7] to-purple-400' },
    { label: 'Conv.', value: '847', color: 'from-emerald-500 to-emerald-400' },
  ];
  return (
    <div className="h-32 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden relative p-3 flex flex-col border border-white/[0.06]">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-1.5">
          <TrendingUp className="w-3 h-3 text-[#0066FF]" />
          <span className="text-[9px] text-white/40 font-medium">Scaling</span>
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
        {[35, 50, 40, 70, 55, 80, 65, 90, 75, 95, 85, 100].map((h, i) => (
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
    name: 'Starter',
    description: '1 plateforme au choix',
    price: '300',
    suffix: '€/mois',
    label: 'Sans engagement',
    icon: Target,
    preview: MetaAdsPreview,
    popular: false,
    nbPlatforms: 1,
    features: [
      '1 plateforme au choix',
      'Configuration complète du compte',
      'Création des audiences',
      'Visuels & textes d\'annonces',
      'Pixel & tracking installés',
      'Optimisation hebdomadaire',
      'Rapport mensuel',
    ],
    wa: 'Bonjour%2C%20je%20souhaite%20lancer%20des%20campagnes%20publicitaires.',
  },
  {
    name: 'Performance',
    description: '2 plateformes au choix',
    price: '500',
    suffix: '€/mois',
    label: 'Sans engagement',
    icon: BarChart3,
    preview: GoogleAdsPreview,
    popular: true,
    nbPlatforms: 2,
    features: [
      '2 plateformes au choix',
      'Tout du Starter',
      'Retargeting avancé',
      'A/B testing continu',
      'Audiences Lookalike',
      'Rapport hebdomadaire',
      'Support prioritaire',
    ],
    wa: 'Bonjour%2C%20je%20suis%20interesse%20par%20votre%20offre%20Performance.',
  },
  {
    name: 'Scale',
    description: '3+ plateformes au choix',
    price: '900',
    suffix: '€/mois',
    label: 'Engagement 3 mois',
    icon: TrendingUp,
    preview: ScalingPreview,
    popular: false,
    nbPlatforms: 6,
    features: [
      '3+ plateformes au choix',
      'Tout de Performance',
      'Scaling budget intensif',
      'Créatives vidéo incluses',
      'Stratégie full-funnel',
      'Appel stratégique hebdo',
      'Support illimité',
    ],
    wa: 'Bonjour%2C%20je%20suis%20interesse%20par%20votre%20offre%20Scale.',
  },
];

const faqs = [
  {
    question: 'Quel budget publicitaire minimum faut-il prévoir ?',
    answer: 'Minimum 300 à 500 euros par mois par plateforme pour des résultats significatifs. Ce budget s\'ajoute à nos frais de gestion. Pour les e-commerces, 500 à 1000 euros/mois est idéal pour scaler rapidement.'
  },
  {
    question: 'En combien de temps vais-je voir des résultats ?',
    answer: 'Premiers résultats dès la première semaine. Phase d\'optimisation réelle après 2 à 4 semaines. Après 1 à 2 mois, les campagnes atteignent leur rythme de croisière avec un coût par acquisition stable.'
  },
  {
    question: 'Quelle plateforme choisir pour mes campagnes ?',
    answer: 'Meta (Facebook/Instagram) pour le e-commerce et la génération de leads. Google Ads quand vos clients recherchent activement vos produits. TikTok et Snapchat pour toucher les 18-35 ans. Pinterest pour les produits visuels et déco. LinkedIn pour le B2B. On vous conseille gratuitement.'
  },
  {
    question: 'Comment mesurez-vous le ROI de mes campagnes ?',
    answer: 'Pixel Facebook, Google Analytics et suivi des conversions. Chaque vente et chaque lead est tracé. Rapport hebdomadaire : impressions, CTR, CPC, CPA, conversions et ROAS. Tout est transparent.'
  },
  {
    question: 'Dois-je m\'engager sur une durée minimum ?',
    answer: 'Non pour les formules Starter et Performance, zéro engagement. On recommande 3 mois minimum pour laisser les campagnes atteindre leur plein potentiel.'
  }
];

export default function Publicite() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#050505] text-black dark:text-white">
      <SEOHead
        title="Publicité Facebook Ads & Google Ads | Traffik Web"
        description="Agence experte en publicité Facebook Ads, Google Ads, TikTok et Snapchat Ads. Campagnes rentables avec ROI garanti, dès 300€/mois. Devis gratuit en 24h."
        canonical="https://traffik-web.fr/publicite-digitale"
        keywords="publicite facebook ads, google ads, publicite digitale, gestion publicite en ligne, agence facebook ads france, campagne publicitaire en ligne, publicite instagram, tiktok ads, snapchat ads, pinterest ads, linkedin ads, cout publicite facebook, retour sur investissement publicite, agence publicite digitale"
      />

      <div className="max-w-5xl mx-auto py-20 px-4">

        {/* Back Link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[#0066FF] hover:underline mb-10 text-sm"
        >
          <ArrowLeft className="w-4 h-4" /> Retour à l'accueil
        </Link>

        {/* Hero */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-[#0066FF] to-purple-600">
              <Megaphone className="w-6 h-6 text-white" aria-label="Publicité digitale" />
            </div>
            <span className="text-sm font-medium text-[#0066FF] bg-[#0066FF]/10 px-3 py-1 rounded-full">
              Publicité digitale
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Gestion de Publicité Digitale{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-purple-600">
              Multi-Plateforme
            </span>
          </h1>

          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mb-8">
            Générez des clients et du chiffre d'affaires avec des campagnes publicitaires gérées de A à Z. Meta, Google, TikTok, Snapchat, Pinterest, LinkedIn.
          </p>

          {/* Platform logos — round icons */}
          <div className="flex items-center gap-3 mb-8">
            {allPlatforms.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + i * 0.08 }}
                className="w-11 h-11 rounded-full bg-gray-100 dark:bg-white/[0.08] border border-gray-200 dark:border-white/10 flex items-center justify-center hover:scale-110 transition-transform"
                title={p.label}
              >
                <p.Logo />
              </motion.div>
            ))}
          </div>

          <motion.a
            href="https://wa.me/33635505374?text=Bonjour%2C%20je%20souhaite%20discuter%20de%20mes%20campagnes%20publicitaires."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#0066FF] text-white font-bold rounded-full hover:shadow-lg hover:shadow-[#0066FF]/25 transition-all"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <MessageCircle className="w-5 h-5" />
            Discuter de mon projet
          </motion.a>
        </motion.header>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {[
            { value: '4.2x', label: 'ROAS moyen de nos clients' },
            { value: '72h', label: 'pour lancer vos campagnes' },
            { value: '-40%', label: 'coût par acquisition' },
            { value: '100%', label: 'transparent, vos comptes' }
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
                Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-purple-600">Formules Ads</span>
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                Budget média en plus. Zéro frais cachés.
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

                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#0066FF]/20 to-purple-600/20 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-[#0066FF]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">{plan.name}</h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{plan.description}</p>
                      </div>
                    </div>

                    {/* Platform logos — all 6, highlight nbPlatforms included */}
                    <div className="flex items-center gap-1.5 mb-4">
                      {allPlatforms.map((plat, i) => {
                        const included = plan.nbPlatforms === 6 || i < plan.nbPlatforms;
                        return (
                          <div
                            key={i}
                            className={`w-7 h-7 rounded-lg flex items-center justify-center transition-all ${
                              included
                                ? 'bg-white dark:bg-white/[0.12] border border-gray-200 dark:border-white/15 shadow-sm'
                                : 'bg-gray-100/50 dark:bg-white/[0.03] border border-gray-100 dark:border-white/[0.04] opacity-30'
                            }`}
                            title={plat.label}
                          >
                            <plat.Logo />
                          </div>
                        );
                      })}
                      {plan.nbPlatforms < 6 && (
                        <span className="text-[10px] text-gray-400 dark:text-gray-500 ml-1">
                          {plan.nbPlatforms} au choix
                        </span>
                      )}
                      {plan.nbPlatforms === 6 && (
                        <span className="text-[10px] text-[#0066FF] font-semibold ml-1">
                          Toutes incluses
                        </span>
                      )}
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

            <p className="text-xs text-center text-gray-400 mt-4">
              * Budget média non inclus. Minimum recommandé : 300-500€/mois par plateforme.
            </p>
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
            {/* Large gradient — Transparence totale */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="col-span-2 row-span-1 rounded-3xl p-6 md:p-8 flex flex-col justify-between bg-gradient-to-br from-[#0066FF]/[0.08] to-[#A855F7]/[0.06] dark:from-[#0066FF]/[0.12] dark:to-[#A855F7]/[0.08] border border-[#0066FF]/15 dark:border-[#0066FF]/20 hover:shadow-lg hover:shadow-[#0066FF]/5 transition-shadow duration-300"
            >
              <ShieldCheck className="w-8 h-8 text-[#0066FF]" aria-label="Transparence" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Transparence totale</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Accès complet à vos comptes publicitaires. Vos données restent les vôtres.</p>
              </div>
            </motion.div>

            {/* Small — Ciblage */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="col-span-1 row-span-1 rounded-3xl p-5 md:p-6 flex flex-col justify-between bg-gray-50 dark:bg-white/[0.05] border border-gray-200 dark:border-white/[0.08] hover:shadow-lg hover:border-gray-300 dark:hover:border-white/[0.12] transition-all duration-300"
            >
              <Target className="w-7 h-7 text-[#0066FF]" aria-label="Ciblage" />
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-0.5">Ciblage chirurgical</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">Audiences ultra-précises</p>
              </div>
            </motion.div>

            {/* Small — Focus ROI */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="col-span-1 row-span-1 rounded-3xl p-5 md:p-6 flex flex-col justify-between bg-gray-50 dark:bg-white/[0.05] border border-gray-200 dark:border-white/[0.08] hover:shadow-lg hover:border-gray-300 dark:hover:border-white/[0.12] transition-all duration-300"
            >
              <LineChart className="w-7 h-7 text-[#A855F7]" aria-label="ROI" />
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-0.5">Focus ROI</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">Conversions, pas les clics</p>
              </div>
            </motion.div>

            {/* Small — Réactivité */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="col-span-1 row-span-1 rounded-3xl p-5 md:p-6 flex flex-col justify-between bg-gray-50 dark:bg-white/[0.05] border border-gray-200 dark:border-white/[0.08] hover:shadow-lg hover:border-gray-300 dark:hover:border-white/[0.12] transition-all duration-300"
            >
              <Clock className="w-7 h-7 text-[#0066FF]" aria-label="Réactivité" />
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-0.5">Réponse 24h</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">Optimisations quotidiennes</p>
              </div>
            </motion.div>

            {/* Wide dark — Multi-plateforme */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="col-span-2 md:col-span-3 row-span-1 rounded-3xl p-6 md:p-8 flex flex-col justify-between bg-gray-900 dark:bg-white/[0.05] border border-gray-800 dark:border-white/[0.08] hover:shadow-xl transition-shadow duration-300"
            >
              <Megaphone className="w-8 h-8 text-[#0066FF]" aria-label="Multi-plateforme" />
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Multi-plateforme, un seul interlocuteur</h3>
                <p className="text-sm text-gray-400">Meta, Google, TikTok, Snapchat, Pinterest, LinkedIn — toutes vos campagnes gérées de A à Z.</p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Process Strip — 4 steps */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 p-6 md:p-8 rounded-3xl bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/[0.08] backdrop-blur-sm"
        >
          <h2 className="text-xl font-bold mb-6 text-center text-gray-900 dark:text-white">Du brief au scaling en 4 étapes</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { num: '01', label: 'Audit', desc: 'Marché, concurrence, objectifs' },
              { num: '02', label: 'Création', desc: 'Visuels, annonces, ciblage' },
              { num: '03', label: 'Lancement', desc: 'Mise en ligne + suivi quotidien' },
              { num: '04', label: 'Scaling', desc: 'On pousse ce qui marche' },
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
        </motion.section>

        {/* FAQ */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900 dark:text-white">
            Questions <span className="text-[#0066FF]">Fréquentes</span>
          </h2>
          <FAQSection faqs={faqs} />
        </motion.section>

        {/* Internal Links — SEO */}
        <nav className="mb-20 p-6 rounded-2xl bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/[0.08]" aria-label="Services associés">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Nos autres services</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { to: '/creation-site-shopify', label: 'Boutique Shopify' },
              { to: '/creation-site-wordpress', label: 'Site WordPress' },
              { to: '/developpement-react-nextjs', label: 'Site Sur Mesure' },
              { to: '/referencement-seo', label: 'Référencement SEO' },
            ].map((link, i) => (
              <Link
                key={i}
                to={link.to}
                className="text-sm text-[#0066FF] hover:underline font-medium py-2 px-3 rounded-xl hover:bg-[#0066FF]/5 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>

        {/* CTA — solid gradient like Shopify */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center rounded-3xl bg-gradient-to-br from-[#0066FF] to-blue-700 p-10 md:p-14 mb-20"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white">
            Prêt à lancer vos campagnes ?
          </h2>
          <p className="text-blue-100 mb-8 max-w-lg mx-auto">
            Premier échange gratuit. On analyse votre marché et on propose un plan concret.
          </p>
          <motion.a
            href="https://wa.me/33635505374?text=Bonjour%2C%20je%20souhaite%20discuter%20de%20mes%20campagnes%20publicitaires."
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
