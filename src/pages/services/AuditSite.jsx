import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  Search,
  Globe,
  Shield,
  Zap,
  FileText,
  BarChart3,
  TrendingUp,
  CheckCircle,
  ChevronDown,
  MessageCircle,
  Eye,
  Clock,
  Target,
  Users,
  Settings,
  Smartphone
} from 'lucide-react';
import SEOHead from '../../components/SEOHead';

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
    answer: "Le rapport d'audit est un document detaille de 15 a 30 pages couvrant 4 piliers : SEO (balises, mots-cles, contenu, maillage interne), Performance (Core Web Vitals, temps de chargement, optimisation des ressources), Securite (SSL, headers, vulnerabilites) et UX/Contenu (navigation, responsive, accessibilite). Chaque point est note avec des recommandations prioritaires et un plan d'action concret."
  },
  {
    question: "Combien de temps faut-il pour recevoir l'audit ?",
    answer: "L'audit Essentiel est livre sous 24 a 48 heures. L'audit + Plan d'action sous 3 a 5 jours ouvrables. Pour l'offre Audit + Implementation, le rapport initial est livre sous 48h et l'implementation se fait sur 2 a 4 semaines selon la complexite de votre site."
  },
  {
    question: "Mon site est-il compatible avec votre audit ?",
    answer: "Oui, nous auditons tous les types de sites : WordPress, Shopify, Wix, Squarespace, sites sur mesure (React, Next.js, etc.), PrestaShop, Magento, et plus. Notre processus s'adapte a chaque technologie pour fournir des recommandations pertinentes et applicables a votre stack technique."
  },
  {
    question: "Quelle est la difference entre l'audit et un simple test PageSpeed ?",
    answer: "Un test PageSpeed ne mesure que la vitesse de chargement. Notre audit couvre 230+ regles dans 4 domaines (SEO, Performance, Securite, UX). Nous analysons votre positionnement Google, la qualite de votre code, les failles de securite, l'experience utilisateur mobile, et surtout nous fournissons des recommandations actionnables avec un plan de priorites. C'est la difference entre un thermometre et un bilan medical complet."
  },
  {
    question: "Proposez-vous un suivi apres l'audit ?",
    answer: "Oui, avec l'offre Audit + Plan (500 EUR), vous beneficiez d'un appel de 30 minutes pour passer en revue les resultats et prioriser les actions. Avec l'offre Implementation (1500 EUR), nous corrigeons nous-memes les problemes identifies et vous accompagnons pendant 30 jours avec un suivi des ameliorations et un rapport de progression."
  }
];

export default function AuditSite() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#050505] text-black dark:text-white">
      <SEOHead
        title="Audit de Site Web Complet | SEO, Performance, Securite | Traffik Web"
        description="Audit professionnel de votre site web : SEO, performance, securite et UX. Rapport detaille en 24h avec plan d'action concret. A partir de 300 euros. Identifiez ce qui freine votre croissance."
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
            Votre site web ne convertit pas assez ? Votre trafic stagne malgre vos efforts ? Un <strong>audit professionnel</strong> revele les problemes invisibles qui plombent vos resultats. Chez <strong>Traffik Web</strong>, nous analysons <strong>230+ regles</strong> dans 4 domaines cles pour vous donner un plan d'action clair et prioritaire.
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
              to="/devis"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-amber-500 text-amber-600 dark:text-amber-400 font-bold hover:bg-amber-500/5 transition-colors"
            >
              <BarChart3 className="w-5 h-5" />
              Calculer mon projet
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
            { value: '230+', label: 'regles verifiees dans chaque audit' },
            { value: '24h', label: 'delai de livraison du rapport' },
            { value: '+45%', label: 'amelioration performance moyenne' },
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

        {/* Ce qu'on analyse */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ce Que Nous <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">Analysons</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-10 text-lg">
            4 piliers pour un diagnostic complet de votre site web.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* SEO */}
            <motion.div
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10"
            >
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 flex items-center justify-center mb-5">
                <Search className="w-7 h-7 text-amber-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">SEO & Referencement</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                Analyse complete de votre visibilite sur les moteurs de recherche. On detecte tout ce qui vous empeche de monter dans Google.
              </p>
              <ul className="space-y-2">
                {[
                  'Balises title, meta description, H1-H6',
                  'Maillage interne et structure des URLs',
                  'Sitemap XML et fichier robots.txt',
                  'Donnees structurees (Schema.org)',
                  'Analyse des mots-cles et positionnement',
                  'Indexation et crawlabilite'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <CheckCircle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Performance */}
            <motion.div
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10"
            >
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 flex items-center justify-center mb-5">
                <Zap className="w-7 h-7 text-amber-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Performance & Vitesse</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                Un site lent perd 53% de ses visiteurs mobiles. On mesure chaque milliseconde et on identifie les goulots d'etranglement.
              </p>
              <ul className="space-y-2">
                {[
                  'Core Web Vitals (LCP, FID, CLS)',
                  'Temps de chargement mobile & desktop',
                  'Optimisation des images et ressources',
                  'Minification CSS/JS et compression',
                  'Cache navigateur et CDN',
                  'Score PageSpeed Insights'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <CheckCircle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Securite */}
            <motion.div
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10"
            >
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 flex items-center justify-center mb-5">
                <Shield className="w-7 h-7 text-amber-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Securite</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                Google penalise les sites non securises. On verifie votre certificat SSL, vos headers de securite et les failles potentielles.
              </p>
              <ul className="space-y-2">
                {[
                  'Certificat SSL et redirection HTTPS',
                  'Headers de securite (CSP, HSTS, X-Frame)',
                  'Detection de contenu mixte (HTTP/HTTPS)',
                  'Protection contre les injections XSS',
                  'Mises a jour CMS et plugins',
                  'Sauvegarde et plan de reprise'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <CheckCircle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* UX / Contenu */}
            <motion.div
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10"
            >
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 flex items-center justify-center mb-5">
                <Smartphone className="w-7 h-7 text-amber-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">UX & Contenu</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                L'experience utilisateur determine vos conversions. On analyse la navigation, le responsive et la qualite de votre contenu.
              </p>
              <ul className="space-y-2">
                {[
                  'Compatibilite mobile et responsive design',
                  'Navigation et architecture de l\'information',
                  'Accessibilite (WCAG)',
                  'Qualite et lisibilite du contenu',
                  'Appels a l\'action (CTA) et parcours utilisateur',
                  'Taux de rebond et engagement'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <CheckCircle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.section>

        {/* Processus */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Notre <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">Processus</span> en 5 Etapes
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-10 text-lg">
            De la demande au suivi, un processus clair et efficace.
          </p>

          <div className="space-y-6">
            {[
              {
                step: '01',
                title: 'Demande & Briefing',
                description: 'Vous nous envoyez l\'URL de votre site et vos objectifs. On echange rapidement pour comprendre votre contexte business, vos cibles et vos priorites.',
                icon: MessageCircle
              },
              {
                step: '02',
                title: 'Scan Automatise',
                description: 'Nos outils analysent automatiquement votre site : plus de 230 regles verifiees sur le SEO, la performance, la securite et l\'experience utilisateur. Chaque probleme est detecte et classe par priorite.',
                icon: Settings
              },
              {
                step: '03',
                title: 'Analyse Experte',
                description: 'Un expert Traffik Web passe en revue les resultats, identifie les quick wins et les chantiers strategiques. On ne se contente pas de lister les problemes, on explique leur impact business.',
                icon: Eye
              },
              {
                step: '04',
                title: 'Rapport & Plan d\'Action',
                description: 'Vous recevez un rapport detaille avec un score global, un diagnostic par pilier et un plan d\'action prioritaire. Chaque recommandation est concrete, expliquee et classee par ordre d\'impact.',
                icon: FileText
              },
              {
                step: '05',
                title: 'Suivi & Accompagnement',
                description: 'Selon votre formule, on vous accompagne dans la mise en oeuvre : appel de restitution, accompagnement mensuel ou implementation directe des corrections par notre equipe technique.',
                icon: TrendingUp
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6 p-6 rounded-2xl bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10"
                >
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-amber-500 font-bold mb-1">Etape {item.step}</div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
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
                <span className="text-4xl font-bold text-amber-500">300</span>
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
                <span className="text-4xl font-bold text-amber-500">500</span>
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
                <span className="text-4xl font-bold text-amber-500">1500</span>
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

        {/* Pourquoi Traffik */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Pourquoi Choisir <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">Traffik Web</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Clock,
                title: 'Rapidite',
                description: 'Rapport livre sous 24h pour l\'audit essentiel. Pas d\'attente, pas de perte de temps. Vous avez vos resultats en main le lendemain.'
              },
              {
                icon: Target,
                title: 'Actionnable',
                description: 'Chaque recommandation est concrete et priorisee. On vous dit exactement quoi faire, dans quel ordre, et quel impact attendre.'
              },
              {
                icon: Users,
                title: 'Accompagnement Humain',
                description: 'Pas juste un rapport automatise. Un expert analyse vos resultats, explique les enjeux et vous guide dans les priorites.'
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10"
                >
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-amber-500" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
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
            Tout ce que vous devez savoir sur nos audits de site web.
          </p>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="rounded-2xl border border-gray-200 dark:border-white/10 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 dark:hover:bg-white/[0.02] transition-colors"
                >
                  <h3 className="text-lg font-bold pr-4">{faq.question}</h3>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-amber-500" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Internal Links */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-2xl font-bold mb-6">Decouvrez Nos Autres Services</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link
              to="/referencement-seo"
              className="p-5 rounded-2xl border border-gray-200 dark:border-white/10 hover:border-amber-500/50 transition-colors group"
            >
              <TrendingUp className="w-6 h-6 text-amber-500 mb-3" />
              <h3 className="font-bold mb-1 group-hover:text-amber-500 transition-colors">Referencement SEO</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Premiere page Google avec une strategie SEO sur mesure.</p>
            </Link>
            <Link
              to="/creation-site-shopify"
              className="p-5 rounded-2xl border border-gray-200 dark:border-white/10 hover:border-amber-500/50 transition-colors group"
            >
              <Globe className="w-6 h-6 text-amber-500 mb-3" />
              <h3 className="font-bold mb-1 group-hover:text-amber-500 transition-colors">Creation de Site Web</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Sites vitrines, e-commerce et sur mesure.</p>
            </Link>
            <Link
              to="/blog"
              className="p-5 rounded-2xl border border-gray-200 dark:border-white/10 hover:border-amber-500/50 transition-colors group"
            >
              <FileText className="w-6 h-6 text-amber-500 mb-3" />
              <h3 className="font-bold mb-1 group-hover:text-amber-500 transition-colors">Blog & Ressources</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Guides, conseils et actualites du web.</p>
            </Link>
          </div>
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
            Demandez votre audit maintenant et recevez un diagnostic complet sous 24h. Premier echange gratuit et sans engagement.
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
              to="/devis"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold shadow-lg shadow-amber-500/25 hover:shadow-xl transition-shadow"
            >
              Estimer mon projet
            </Link>
          </div>
        </motion.section>

      </div>
    </div>
  );
}
