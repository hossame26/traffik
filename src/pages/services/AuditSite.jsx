import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Search,
  Shield,
  Zap,
  FileText,
  BarChart3,
  TrendingUp,
  CheckCircle,
  MessageCircle,
  Eye,
  Clock,
  Target,
  Users,
  Settings,
  Smartphone
} from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import FAQSection from '../../components/common/FAQSection';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const faqData = [
  {
    question: "Que contient exactement le rapport d'audit ?",
    answer: "Un document de 15 a 30 pages couvrant 4 piliers : SEO (balises, mots-cles, maillage), Performance (Core Web Vitals, vitesse), Securite (SSL, headers, failles) et UX (navigation, responsive, accessibilite). Chaque point est note avec des recommandations priorisees."
  },
  {
    question: "Combien de temps faut-il pour recevoir l'audit ?",
    answer: "L'audit Essentiel est livre sous 24 a 48 heures. L'audit + Plan d'action sous 3 a 5 jours ouvrables. Pour l'offre Implementation, le rapport initial arrive sous 48h et l'implementation se fait sur 2 a 4 semaines."
  },
  {
    question: "Mon site est-il compatible avec votre audit ?",
    answer: "Oui. WordPress, Shopify, Wix, Squarespace, React, Next.js, PrestaShop, Magento et plus. Notre processus s'adapte a chaque technologie."
  },
  {
    question: "Quelle est la difference entre l'audit et un simple test PageSpeed ?",
    answer: "PageSpeed ne mesure que la vitesse. Notre audit couvre 230+ regles dans 4 domaines (SEO, Performance, Securite, UX) avec des recommandations actionnables et un plan de priorites. C'est la difference entre un thermometre et un bilan medical complet."
  },
  {
    question: "Proposez-vous un suivi apres l'audit ?",
    answer: "Oui. L'offre Audit + Plan inclut un appel de 30 minutes pour prioriser les actions. L'offre Implementation inclut les corrections + 30 jours de suivi avec rapport de progression."
  }
];

export default function AuditSite() {

  return (
    <div className="min-h-screen bg-white dark:bg-[#050505] text-black dark:text-white">
      <SEOHead
        title="Audit de Site Web Complet | SEO, Performance, Securite | Traffik Web"
        description="Audit professionnel de votre site web : SEO, performance, securite et UX. Rapport detaille en 24h avec plan d'action concret. A partir de 100 euros. Identifiez ce qui freine votre croissance."
        canonical="https://traffik-web.fr/audit-site-web"
        keywords="audit site web, audit seo, audit performance site, audit securite site web, analyse site web, test site web, audit ux, core web vitals, audit technique, audit site internet"
      />

      <div className="max-w-4xl mx-auto py-20 px-4">

        {/* Back Link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[#0066FF] hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Retour a l'accueil
        </Link>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-sm font-medium mb-6">
            <Search className="w-4 h-4" />
            Audit Complet
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Audit de Site Web :{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">Identifiez Ce Qui Freine Votre Croissance</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl">
            Votre site ne convertit pas ? Un <strong>audit professionnel</strong> de <strong>230+ regles</strong> revele les problemes invisibles qui plombent vos resultats.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <motion.a
              href="https://wa.me/33635505374?text=Bonjour%2C%20je%20souhaite%20un%20audit%20de%20mon%20site%20web."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] text-white font-bold shadow-lg shadow-[#25D366]/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="w-5 h-5" />
              Demander un Audit
            </motion.a>
            <Link
              to="/tarifs"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-amber-500 text-amber-600 dark:text-amber-400 font-bold hover:bg-amber-500/5 transition-colors"
            >
              <BarChart3 className="w-5 h-5" />
              Voir les tarifs
            </Link>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20"
        >
          {[
            { value: '230+', label: 'regles verifiees' },
            { value: '24h', label: 'delai de livraison' },
            { value: '+45%', label: 'performance moyenne' },
            { value: '100%', label: 'recommandations actionnables' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="p-5 rounded-2xl bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 text-center"
            >
              <div className="text-2xl md:text-3xl font-bold text-amber-500 mb-2">{stat.value}</div>
              <div className="text-xs md:text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Ce qu'on analyse — Bento Grid */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Ce Que Nous <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">Analysons</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              4 piliers pour un diagnostic complet de votre site.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px]">
            {/* SEO — large gradient card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="col-span-2 row-span-1 rounded-3xl p-6 md:p-8 flex flex-col justify-between bg-gradient-to-br from-amber-500/[0.08] to-orange-600/[0.06] dark:from-amber-500/[0.12] dark:to-orange-600/[0.08] border border-amber-500/15 dark:border-amber-500/20 relative overflow-hidden group hover:shadow-lg hover:shadow-amber-500/5 transition-shadow duration-300"
            >
              <Search className="w-8 h-8 text-amber-500" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">SEO & Referencement</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Balises, mots-cles, maillage interne, sitemap, indexation.</p>
              </div>
            </motion.div>

            {/* Performance — small */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="col-span-1 row-span-1 rounded-3xl p-5 md:p-6 flex flex-col justify-between bg-gray-50 dark:bg-white/[0.05] border border-gray-200 dark:border-white/[0.08] hover:shadow-lg hover:border-gray-300 dark:hover:border-white/[0.12] transition-all duration-300"
            >
              <Zap className="w-7 h-7 text-amber-500" />
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-0.5">Performance</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">Core Web Vitals, vitesse</p>
              </div>
            </motion.div>

            {/* Securite — small */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="col-span-1 row-span-1 rounded-3xl p-5 md:p-6 flex flex-col justify-between bg-gray-50 dark:bg-white/[0.05] border border-gray-200 dark:border-white/[0.08] hover:shadow-lg hover:border-gray-300 dark:hover:border-white/[0.12] transition-all duration-300"
            >
              <Shield className="w-7 h-7 text-orange-500" />
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-0.5">Securite</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">SSL, headers, failles</p>
              </div>
            </motion.div>

            {/* UX & Mobile — small */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="col-span-1 row-span-1 rounded-3xl p-5 md:p-6 flex flex-col justify-between bg-gray-50 dark:bg-white/[0.05] border border-gray-200 dark:border-white/[0.08] hover:shadow-lg hover:border-gray-300 dark:hover:border-white/[0.12] transition-all duration-300"
            >
              <Smartphone className="w-7 h-7 text-amber-500" />
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-0.5">UX & Mobile</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">Responsive, accessibilite</p>
              </div>
            </motion.div>

            {/* 230+ regles — wide dark card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="col-span-2 md:col-span-3 row-span-1 rounded-3xl p-6 md:p-8 flex flex-col justify-between bg-gray-900 dark:bg-white/[0.05] border border-gray-800 dark:border-white/[0.08] hover:shadow-xl transition-shadow duration-300"
            >
              <Eye className="w-8 h-8 text-amber-500" />
              <div>
                <h3 className="text-xl font-bold text-white mb-1">230+ regles verifiees</h3>
                <p className="text-sm text-gray-400">SEO, performance, securite et UX analyses en profondeur avec un plan d'action priorise.</p>
              </div>
            </motion.div>
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
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-amber-500 border border-amber-500/20 bg-amber-500/5 mb-4">
              Processus
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              5 Etapes. <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">0 Surprise.</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              De la demande au suivi, un processus clair et efficace.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4 mb-10">
            {[
              { icon: MessageCircle, step: '01', title: 'Briefing', desc: 'URL et objectifs.' },
              { icon: Settings, step: '02', title: 'Scan', desc: '230+ regles verifiees.' },
              { icon: Eye, step: '03', title: 'Analyse', desc: 'Expert review.' },
              { icon: FileText, step: '04', title: 'Rapport', desc: 'PDF detaille + plan.' },
              { icon: TrendingUp, step: '05', title: 'Suivi', desc: 'Accompagnement.' },
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
                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-amber-500 text-white text-xs font-bold flex items-center justify-center shadow-lg shadow-amber-500/30">
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
              href="https://wa.me/33635505374?text=Bonjour%2C%20je%20souhaite%20un%20audit%20de%20mon%20site%20web."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold shadow-lg shadow-amber-500/20 hover:shadow-xl hover:shadow-amber-500/30 transition-shadow"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Demander mon audit
              <Zap className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.section>

        {/* Tarifs */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">Tarifs</span> Audit
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-10 text-lg">
            3 formules pour s'adapter a vos besoins et votre budget.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Audit Essentiel */}
            <motion.div
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="p-8 rounded-2xl border-2 border-gray-200 dark:border-white/10 hover:border-amber-500/30 transition-colors"
            >
              <div className="text-sm text-amber-500 font-bold uppercase tracking-wider mb-2">Essentiel</div>
              <h3 className="text-xl font-bold mb-2">Audit Essentiel</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-bold text-amber-500">100</span>
                <span className="text-xl text-gray-400">EUR</span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Paiement unique - Livraison sous 24h</p>
              <ul className="space-y-3 mb-8">
                {[
                  'Analyse SEO complete (50+ regles)',
                  'Test de performance mobile & desktop',
                  'Verification securite SSL & headers',
                  'Analyse UX et responsive',
                  'Rapport PDF detaille',
                  'Score global et priorites'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <CheckCircle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <motion.a
                href="https://wa.me/33635505374?text=Bonjour%2C%20je%20souhaite%20un%20Audit%20Essentiel%20pour%20mon%20site."
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 rounded-xl border-2 border-amber-500 text-amber-600 dark:text-amber-400 font-bold text-center hover:bg-amber-500/5 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Commander l'audit
              </motion.a>
            </motion.div>

            {/* Audit + Plan */}
            <motion.div
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="p-8 rounded-2xl border-2 border-amber-500 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 bg-gradient-to-r from-amber-500 to-orange-600 text-white text-xs font-bold px-4 py-1 rounded-bl-xl">
                POPULAIRE
              </div>
              <div className="text-sm text-amber-500 font-bold uppercase tracking-wider mb-2">Complet</div>
              <h3 className="text-xl font-bold mb-2">Audit + Plan d'Action</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-bold text-amber-500">200</span>
                <span className="text-xl text-gray-400">EUR</span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Paiement unique - Livraison sous 5 jours</p>
              <ul className="space-y-3 mb-8">
                {[
                  'Tout de l\'Audit Essentiel',
                  'Analyse approfondie (230+ regles)',
                  'Plan d\'action detaille et priorise',
                  'Analyse de la concurrence SEO',
                  'Appel de restitution 30 min',
                  'Recommandations techniques precises',
                  'Estimation des gains potentiels'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <CheckCircle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <motion.a
                href="https://wa.me/33635505374?text=Bonjour%2C%20je%20souhaite%20l'offre%20Audit%20%2B%20Plan%20d'Action%20pour%20mon%20site."
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold text-center shadow-lg shadow-amber-500/25"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Choisir cette offre
              </motion.a>
            </motion.div>

            {/* Audit + Implementation */}
            <motion.div
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="p-8 rounded-2xl border-2 border-gray-200 dark:border-white/10 hover:border-amber-500/30 transition-colors"
            >
              <div className="text-sm text-amber-500 font-bold uppercase tracking-wider mb-2">Premium</div>
              <h3 className="text-xl font-bold mb-2">Audit + Implementation</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-bold text-amber-500">499</span>
                <span className="text-xl text-gray-400">EUR</span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Paiement unique - Suivi 30 jours</p>
              <ul className="space-y-3 mb-8">
                {[
                  'Tout de l\'Audit + Plan',
                  'Implementation des corrections',
                  'Optimisation SEO on-page',
                  'Amelioration performance',
                  'Corrections securite',
                  'Suivi et rapport de progression',
                  'Support 30 jours inclus'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <CheckCircle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <motion.a
                href="https://wa.me/33635505374?text=Bonjour%2C%20je%20suis%20interesse%20par%20l'offre%20Audit%20%2B%20Implementation."
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 rounded-xl border-2 border-amber-500 text-amber-600 dark:text-amber-400 font-bold text-center hover:bg-amber-500/5 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Nous contacter
              </motion.a>
            </motion.div>
          </div>
        </motion.section>

        {/* Pourquoi Traffik — Bento Grid */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Pourquoi Choisir <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">Traffik Web</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              Audit expert, resultats concrets.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px]">
            {/* Rapport en 24h — large gradient card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="col-span-2 row-span-1 rounded-3xl p-6 md:p-8 flex flex-col justify-between bg-gradient-to-br from-amber-500/[0.08] to-orange-600/[0.06] dark:from-amber-500/[0.12] dark:to-orange-600/[0.08] border border-amber-500/15 dark:border-amber-500/20 relative overflow-hidden group hover:shadow-lg hover:shadow-amber-500/5 transition-shadow duration-300"
            >
              <Clock className="w-8 h-8 text-amber-500" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Rapport en 24h</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Pas d'attente, resultats en main le lendemain.</p>
              </div>
            </motion.div>

            {/* Actionnable — small */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="col-span-1 row-span-1 rounded-3xl p-5 md:p-6 flex flex-col justify-between bg-gray-50 dark:bg-white/[0.05] border border-gray-200 dark:border-white/[0.08] hover:shadow-lg hover:border-gray-300 dark:hover:border-white/[0.12] transition-all duration-300"
            >
              <Target className="w-7 h-7 text-amber-500" />
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-0.5">Actionnable</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">Recommandations priorisees</p>
              </div>
            </motion.div>

            {/* Expert humain — small */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="col-span-1 row-span-1 rounded-3xl p-5 md:p-6 flex flex-col justify-between bg-gray-50 dark:bg-white/[0.05] border border-gray-200 dark:border-white/[0.08] hover:shadow-lg hover:border-gray-300 dark:hover:border-white/[0.12] transition-all duration-300"
            >
              <Users className="w-7 h-7 text-orange-500" />
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-0.5">Expert humain</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">Pas un outil automatise</p>
              </div>
            </motion.div>

            {/* +45% performance — wide dark card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="col-span-2 md:col-span-3 row-span-1 rounded-3xl p-6 md:p-8 flex flex-col justify-between bg-gray-900 dark:bg-white/[0.05] border border-gray-800 dark:border-white/[0.08] hover:shadow-xl transition-shadow duration-300"
            >
              <TrendingUp className="w-8 h-8 text-amber-500" />
              <div>
                <h3 className="text-xl font-bold text-white mb-1">+45% performance moyenne</h3>
                <p className="text-sm text-gray-400">Nos clients voient des ameliorations concretes apres implementation des recommandations.</p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* FAQ Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Questions <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">Frequentes</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-10 text-lg">
            Tout ce que vous devez savoir sur nos audits.
          </p>

          <FAQSection faqs={faqData} />
        </motion.section>

        {/* Final CTA */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center p-10 md:p-16 rounded-3xl bg-gradient-to-br from-amber-500/10 to-orange-600/10 border border-amber-500/20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pret a Decouvrir Ce Qui Freine Votre Site ?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Diagnostic complet sous 24h. Premier echange gratuit et sans engagement.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="https://wa.me/33635505374?text=Bonjour%2C%20je%20souhaite%20un%20audit%20de%20mon%20site%20web."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#25D366] text-white font-bold shadow-lg shadow-[#25D366]/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="w-5 h-5" />
              Demander mon Audit
            </motion.a>
            <Link
              to="/tarifs"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold shadow-lg shadow-amber-500/25 hover:shadow-xl transition-shadow"
            >
              Voir les tarifs
            </Link>
          </div>
        </motion.section>

      </div>
    </div>
  );
}
