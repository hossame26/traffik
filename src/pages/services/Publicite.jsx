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
  CheckCircle2,
  MessageCircle,
  Eye,
  DollarSign,
  LineChart,
  Megaphone,
  Rocket,
  ShieldCheck,
  Clock,
  ArrowRight
} from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import FAQSection from '../../components/common/FAQSection';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' }
  })
};

const platforms = [
  {
    name: 'Facebook & Instagram Ads',
    icon: Users,
    color: 'from-blue-600 to-indigo-600',
    features: ['Ciblage ultra-precis', 'Retargeting dynamique', 'Audiences Lookalike', 'Stories & Reels Ads']
  },
  {
    name: 'Google Ads',
    icon: Target,
    color: 'from-red-500 to-orange-500',
    features: ['Search Ads', 'Display Network', 'Google Shopping', 'YouTube Ads']
  },
  {
    name: 'TikTok Ads',
    icon: Zap,
    color: 'from-pink-500 to-purple-600',
    features: ['In-Feed Ads', 'TopView', 'Branded Effects', 'Spark Ads']
  }
];

const faqs = [
  {
    question: 'Quel budget publicitaire minimum faut-il prevoir ?',
    answer: 'Minimum 300 a 500 euros par mois par plateforme pour des resultats significatifs. Ce budget s\'ajoute a nos frais de gestion (a partir de 300 euros/mois). Pour les e-commerces, 500 a 1000 euros/mois est ideal pour scaler rapidement.'
  },
  {
    question: 'En combien de temps vais-je voir des resultats ?',
    answer: 'Premiers resultats des la premiere semaine. Phase d\'optimisation reelle apres 2 a 4 semaines. Apres 1 a 2 mois, les campagnes atteignent leur rythme de croisiere avec un cout par acquisition stable.'
  },
  {
    question: 'Quelle plateforme choisir entre Facebook, Google et TikTok ?',
    answer: 'Facebook/Instagram pour le e-commerce et la generation de leads. Google Ads quand vos clients recherchent activement vos produits (intention d\'achat forte). TikTok pour toucher les 18-35 ans avec des produits visuels. On vous conseille gratuitement.'
  },
  {
    question: 'Comment mesurez-vous le ROI de mes campagnes ?',
    answer: 'Pixel Facebook, Google Analytics et suivi des conversions. Chaque vente et chaque lead est trace. Rapport hebdomadaire : impressions, CTR, CPC, CPA, conversions et ROAS. Tout est transparent.'
  },
  {
    question: 'Dois-je m\'engager sur une duree minimum ?',
    answer: 'Non, zero engagement. Mois par mois. On recommande 3 mois minimum pour laisser les campagnes atteindre leur plein potentiel. La majorite de nos clients restent sur le long terme.'
  }
];

export default function Publicite() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#050505] text-black dark:text-white">
      <SEOHead
        title="Publicite Digitale Facebook Ads & Google Ads | ROI Garanti | Traffik Web"
        description="Expert en publicite digitale Facebook Ads, Google Ads et TikTok Ads. Gestion de campagnes publicitaires en ligne avec ROI garanti. A partir de 300 euros/mois."
        canonical="https://traffik-web.fr/publicite-digitale"
        keywords="publicite facebook ads, google ads, publicite digitale, gestion publicite en ligne, agence facebook ads france, campagne publicitaire en ligne, publicite instagram, tiktok ads, cout publicite facebook, retour sur investissement publicite"
      />

      <div className="max-w-4xl mx-auto py-20 px-4">
        {/* Back Link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[#0066FF] hover:underline mb-10"
        >
          <ArrowLeft className="w-4 h-4" /> Retour a l'accueil
        </Link>

        {/* Hero Section */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-[#0066FF] to-purple-600">
              <Megaphone className="w-6 h-6 text-white" />
            </div>
            <span className="text-sm font-medium text-[#0066FF] bg-[#0066FF]/10 px-3 py-1 rounded-full">
              Publicite digitale
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Publicite Digitale{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-purple-600">
              Facebook Ads & Google Ads
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mb-8">
            Generez des clients et du chiffre d'affaires avec des campagnes Facebook Ads, Google Ads et TikTok Ads gerees de A a Z.
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.a
              href="https://wa.me/33635505374"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#0066FF] text-white font-bold shadow-lg shadow-[#0066FF]/25 hover:shadow-[#0066FF]/40 transition-shadow"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <MessageCircle className="w-5 h-5" />
              Discuter de mon projet
            </motion.a>
            <Link
              to="/tarifs"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-gray-200 dark:border-white/10 text-black dark:text-white font-bold hover:border-[#0066FF] hover:text-[#0066FF] transition-colors"
            >
              <DollarSign className="w-5 h-5" />
              Voir les tarifs
            </Link>
          </div>
        </motion.div>

        {/* Bento Grid — Pourquoi investir */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Pourquoi la <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-purple-600">Publicite Digitale</span> ?
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              Le levier le plus rapide pour generer des clients.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px]">
            {/* Large gradient — Resultats des J1 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="col-span-2 row-span-1 rounded-3xl p-6 md:p-8 flex flex-col justify-between bg-gradient-to-br from-[#0066FF]/[0.08] to-[#A855F7]/[0.06] dark:from-[#0066FF]/[0.12] dark:to-[#A855F7]/[0.08] border border-[#0066FF]/15 dark:border-[#0066FF]/20 hover:shadow-lg hover:shadow-[#0066FF]/5 transition-shadow duration-300"
            >
              <TrendingUp className="w-8 h-8 text-[#0066FF]" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Resultats des J1</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Premiers leads et ventes des les premiers jours de diffusion.</p>
              </div>
            </motion.div>

            {/* Small — Ciblage chirurgical */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="col-span-1 row-span-1 rounded-3xl p-5 md:p-6 flex flex-col justify-between bg-gray-50 dark:bg-white/[0.05] border border-gray-200 dark:border-white/[0.08] hover:shadow-lg hover:border-gray-300 dark:hover:border-white/[0.12] transition-all duration-300"
            >
              <Target className="w-7 h-7 text-[#0066FF]" />
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-0.5">Ciblage chirurgical</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">Audiences ultra-precises</p>
              </div>
            </motion.div>

            {/* Small — ROI mesurable */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="col-span-1 row-span-1 rounded-3xl p-5 md:p-6 flex flex-col justify-between bg-gray-50 dark:bg-white/[0.05] border border-gray-200 dark:border-white/[0.08] hover:shadow-lg hover:border-gray-300 dark:hover:border-white/[0.12] transition-all duration-300"
            >
              <LineChart className="w-7 h-7 text-[#A855F7]" />
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-0.5">ROI mesurable</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">Chaque euro trace</p>
              </div>
            </motion.div>

            {/* Small — Expert dedie */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="col-span-1 row-span-1 rounded-3xl p-5 md:p-6 flex flex-col justify-between bg-gray-50 dark:bg-white/[0.05] border border-gray-200 dark:border-white/[0.08] hover:shadow-lg hover:border-gray-300 dark:hover:border-white/[0.12] transition-all duration-300"
            >
              <Users className="w-7 h-7 text-[#0066FF]" />
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-0.5">Expert dedie</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">1 interlocuteur unique</p>
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
              <Megaphone className="w-8 h-8 text-[#0066FF]" />
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Multi-plateforme</h3>
                <p className="text-sm text-gray-400">Facebook, Instagram, Google, TikTok — on gere toutes vos campagnes.</p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Plateformes — Horizontal Grid */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Plateformes que nous <span className="text-[#0066FF]">gerons</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-8">
            Chaque ecosysteme maitrise pour maximiser votre ROI.
          </p>

          <div className="grid md:grid-cols-3 gap-5">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 hover:border-[#0066FF]/30 transition-colors"
              >
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${platform.color} flex items-center justify-center mb-4`}>
                  <platform.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-3">{platform.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {platform.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 rounded-full bg-[#0066FF]/10 text-[#0066FF] text-xs font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Processus — Horizontal */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-[#0066FF] border border-[#0066FF]/20 bg-[#0066FF]/5 mb-4">
              Processus
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              5 Etapes. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-purple-600">0 Surprise.</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              De l'audit au scaling, tout est cadre.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4 mb-10">
            {[
              { icon: Eye, step: '01', title: 'Audit', desc: 'Analyse marche, concurrence et objectifs.' },
              { icon: Megaphone, step: '02', title: 'Creation', desc: 'Visuels, annonces et ciblage.' },
              { icon: Rocket, step: '03', title: 'Lancement', desc: 'Mise en ligne et suivi quotidien.' },
              { icon: BarChart3, step: '04', title: 'Optimisation', desc: 'Tests A/B et ajustements continus.' },
              { icon: TrendingUp, step: '05', title: 'Scaling', desc: 'On monte le budget sur ce qui marche.' },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="relative mb-4">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gray-100 dark:bg-white/[0.06] border border-gray-200 dark:border-white/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 md:w-7 md:h-7 text-gray-500 dark:text-gray-400" />
                    </div>
                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-[#0066FF] text-white text-xs font-bold flex items-center justify-center shadow-lg shadow-[#0066FF]/30">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1">{item.title}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed max-w-[160px]">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center">
            <motion.a
              href="https://wa.me/33635505374"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#0066FF] to-[#A855F7] text-white font-bold shadow-lg shadow-[#0066FF]/20 hover:shadow-xl hover:shadow-[#0066FF]/30 transition-shadow"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Lancer mes campagnes
              <Zap className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.section>

        {/* Ce que comprend — compact grid + pricing */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Ce qui est <span className="text-[#0066FF]">inclus</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-8">
            Service complet, transparent, oriente resultats.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 mb-10">
            {[
              'Ciblage precis de votre audience',
              'Resultats mesurables et transparents',
              'Optimisation quotidienne',
              'Rapports hebdomadaires',
              'Zero engagement longue duree',
              'Expert dedie a votre compte',
              'Strategies testees et prouvees',
              'Accompagnement personnalise',
              'Configuration pixel & tracking'
            ].map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                className="flex items-center gap-3 p-3 rounded-xl"
              >
                <CheckCircle2 className="w-4 h-4 text-[#0066FF] flex-shrink-0" />
                <span className="text-sm text-gray-600 dark:text-gray-300">{benefit}</span>
              </motion.div>
            ))}
          </div>

          {/* Pricing highlight */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-gradient-to-br from-[#0066FF]/5 to-purple-500/5 border border-[#0066FF]/20"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Gestion Publicitaire</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Configuration, optimisation et reporting inclus. Sans engagement.
                </p>
              </div>
              <div className="text-center">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black text-[#0066FF]">300</span>
                  <span className="text-xl font-bold text-[#0066FF]">euros</span>
                  <span className="text-gray-500">/mois</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">A partir de, par plateforme</p>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Pourquoi nous choisir — Bento Grid */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Pourquoi <span className="text-[#0066FF]">Traffik Web</span> ?
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              Expert dedie, transparence totale, resultats concrets.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px]">
            {/* Large gradient — Transparence */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="col-span-2 row-span-1 rounded-3xl p-6 md:p-8 flex flex-col justify-between bg-gradient-to-br from-[#0066FF]/[0.08] to-[#A855F7]/[0.06] dark:from-[#0066FF]/[0.12] dark:to-[#A855F7]/[0.08] border border-[#0066FF]/15 dark:border-[#0066FF]/20 hover:shadow-lg hover:shadow-[#0066FF]/5 transition-shadow duration-300"
            >
              <ShieldCheck className="w-8 h-8 text-[#0066FF]" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Transparence totale</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Acces complet a vos comptes publicitaires. Vos donnees restent les votres.</p>
              </div>
            </motion.div>

            {/* Small — Reactivite */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="col-span-1 row-span-1 rounded-3xl p-5 md:p-6 flex flex-col justify-between bg-gray-50 dark:bg-white/[0.05] border border-gray-200 dark:border-white/[0.08] hover:shadow-lg hover:border-gray-300 dark:hover:border-white/[0.12] transition-all duration-300"
            >
              <Clock className="w-7 h-7 text-[#0066FF]" />
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-0.5">Reponse 24h</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">Optimisations quotidiennes</p>
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
              <TrendingUp className="w-7 h-7 text-[#A855F7]" />
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-0.5">Focus ROI</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">Conversions, pas les clics</p>
              </div>
            </motion.div>

            {/* Small — Expert dedie */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="col-span-1 row-span-1 rounded-3xl p-5 md:p-6 flex flex-col justify-between bg-gray-50 dark:bg-white/[0.05] border border-gray-200 dark:border-white/[0.08] hover:shadow-lg hover:border-gray-300 dark:hover:border-white/[0.12] transition-all duration-300"
            >
              <Users className="w-7 h-7 text-[#0066FF]" />
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-0.5">1 interlocuteur</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">Pas de turnover</p>
              </div>
            </motion.div>

            {/* Wide dark — Prix freelance */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="col-span-2 md:col-span-3 row-span-1 rounded-3xl p-6 md:p-8 flex flex-col justify-between bg-gray-900 dark:bg-white/[0.05] border border-gray-800 dark:border-white/[0.08] hover:shadow-xl transition-shadow duration-300"
            >
              <DollarSign className="w-8 h-8 text-[#0066FF]" />
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Prix freelance, resultats agence</h3>
                <p className="text-sm text-gray-400">Pas de commercial, pas de chef de projet. Vous payez la performance, pas la structure.</p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Internal links pills */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-2xl font-bold mb-6">Nos autres services</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { to: '/creation-site-shopify', label: 'Creation Site Shopify' },
              { to: '/referencement-seo', label: 'Referencement SEO' },
              { to: '/creation-site-wordpress', label: 'Creation Site WordPress' },
              { to: '/tarifs', label: 'Tous nos tarifs' },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="px-5 py-3 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-sm font-medium hover:border-[#0066FF] hover:text-[#0066FF] transition-colors"
              >
                {link.label}
              </Link>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Questions <span className="text-[#0066FF]">frequentes</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-10">
            Les reponses aux questions les plus posees sur nos campagnes publicitaires.
          </p>

          <FAQSection faqs={faqs} />
        </motion.section>

        {/* CTA Final */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center p-10 md:p-14 rounded-3xl bg-gradient-to-br from-[#0066FF]/10 to-purple-600/10 border border-[#0066FF]/20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pret a lancer vos campagnes ?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Premier echange gratuit et sans engagement. On analyse votre marche et on vous propose un plan d'action concret.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="https://wa.me/33635505374"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#25D366] text-white font-bold shadow-lg shadow-[#25D366]/25"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <MessageCircle className="w-5 h-5" />
              Discuter sur WhatsApp
            </motion.a>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/tarifs"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#0066FF] to-purple-600 text-white font-bold shadow-lg shadow-[#0066FF]/25"
              >
                Voir les tarifs
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
