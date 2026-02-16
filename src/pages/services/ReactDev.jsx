import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Code2,
  Zap,
  Shield,
  Smartphone,
  Search,
  Layers,
  MessageCircle,
  CheckCircle2,
  ArrowRight,
  Globe,
  RefreshCw,
  Database,
  Star,
  Check,
  Palette,
  TrendingUp,
  Clock,
  Users,
} from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import FAQSection from '../../components/common/FAQSection';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const reactFaqs = [
  {
    question: "Quelle est la différence entre un site React et un site WordPress ?",
    answer: "Un site React est construit entièrement sur mesure avec du code JavaScript moderne. Contrairement à WordPress qui repose sur des thèmes et des plugins préfabriqués, React vous offre une liberté totale sur le design et les fonctionnalités. Les performances sont nettement supérieures : un site React charge en moyenne 2 à 5 fois plus vite qu'un site WordPress équivalent."
  },
  {
    question: "Combien coûte le développement d'une application React sur mesure ?",
    answer: "Un site vitrine React performant démarre à 600€. Une application web interactive se situe entre 1500€ et 5000€. Pour un projet full-stack complet, comptez à partir de 3000€. Devis gratuit et détaillé sous 24h."
  },
  {
    question: "Combien de temps faut-il pour développer un site React ?",
    answer: "Un site vitrine React est livré en 1 à 2 semaines. Une application web avec des fonctionnalités personnalisées prend entre 3 et 6 semaines. Un projet full-stack complexe peut nécessiter 2 à 3 mois."
  },
  {
    question: "Un site React est-il bien référencé sur Google ?",
    answer: "Oui, avec Next.js qui propose le rendu côté serveur (SSR) et la génération statique (SSG). J'intègre systématiquement les bonnes pratiques SEO : balises meta, données structurées, sitemap XML, temps de chargement optimisé."
  },
  {
    question: "Est-ce que je peux modifier mon site React moi-même ?",
    answer: "Pour le contenu régulier, j'intègre un CMS headless (Sanity, Strapi ou Notion) qui vous permet de modifier textes et images sans toucher au code. Pour les modifications techniques, il faudra faire appel à un développeur."
  }
];

export default function ReactDev() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#050505] text-black dark:text-white">
      <SEOHead
        title="Développement React & Next.js | Application Web Sur Mesure | Traffik Web"
        description="Développeur React & Next.js freelance en France. Création d'applications web sur mesure, performantes et optimisées SEO. Sites ultra-rapides, interfaces modernes. Devis gratuit à partir de 600€."
        canonical="https://traffik-web.fr/developpement-react-nextjs"
        keywords="développement react, next.js, application web sur mesure, site react, développeur react freelance, création application react, développeur next.js france, site web performant, SPA react, application web moderne"
      />

      <div className="max-w-4xl mx-auto py-20 px-4">

        {/* Back link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[#0066FF] hover:underline mb-10"
        >
          <ArrowLeft className="w-4 h-4" /> Retour à l'accueil
        </Link>

        {/* Hero Section */}
        <motion.header
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-[#0066FF] to-purple-600">
              <Code2 className="w-8 h-8 text-white" />
            </div>
            <span className="text-sm font-medium text-[#0066FF] bg-[#0066FF]/10 px-4 py-1.5 rounded-full">
              Développement sur mesure
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Développement{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-purple-600">
              React & Next.js
            </span>
            <br />
            Applications Web Sur Mesure
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
            Applications web modernes, ultra-rapides et optimisees SEO. Du site vitrine a la plateforme SaaS, tout est construit sur mesure.
          </p>
        </motion.header>

        {/* Pourquoi React & Next.js — Bento Grid */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Pourquoi <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-purple-600">React & Next.js</span> ?
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              La stack des leaders : Netflix, Airbnb, Uber, Spotify.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px]">
            {/* Performance — large */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="col-span-2 row-span-1 rounded-3xl p-6 md:p-8 flex flex-col justify-between bg-gradient-to-br from-[#0066FF]/[0.08] to-purple-600/[0.06] dark:from-[#0066FF]/[0.12] dark:to-purple-600/[0.08] border border-[#0066FF]/15 dark:border-[#0066FF]/20 relative overflow-hidden group hover:shadow-lg hover:shadow-[#0066FF]/5 transition-shadow duration-300"
            >
              <Zap className="w-8 h-8 text-[#0066FF]" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Score Lighthouse 100</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">DOM virtuel, temps de chargement ultra-courts, experience fluide.</p>
              </div>
            </motion.div>

            {/* SEO */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="col-span-1 row-span-1 rounded-3xl p-5 md:p-6 flex flex-col justify-between bg-gray-50 dark:bg-white/[0.05] border border-gray-200 dark:border-white/[0.08] hover:shadow-lg hover:border-gray-300 dark:hover:border-white/[0.12] transition-all duration-300"
            >
              <Search className="w-7 h-7 text-[#A855F7]" />
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-0.5">SEO natif</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">SSR & SSG avec Next.js</p>
              </div>
            </motion.div>

            {/* Mobile */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="col-span-1 row-span-1 rounded-3xl p-5 md:p-6 flex flex-col justify-between bg-gray-50 dark:bg-white/[0.05] border border-gray-200 dark:border-white/[0.08] hover:shadow-lg hover:border-gray-300 dark:hover:border-white/[0.12] transition-all duration-300"
            >
              <Smartphone className="w-7 h-7 text-[#0066FF]" />
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-0.5">Mobile-first</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">Responsive tous ecrans</p>
              </div>
            </motion.div>

            {/* Securite */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="col-span-1 row-span-1 rounded-3xl p-5 md:p-6 flex flex-col justify-between bg-gray-50 dark:bg-white/[0.05] border border-gray-200 dark:border-white/[0.08] hover:shadow-lg hover:border-gray-300 dark:hover:border-white/[0.12] transition-all duration-300"
            >
              <Shield className="w-7 h-7 text-[#0066FF]" />
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-0.5">Securise</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">Protection XSS, CSRF integree</p>
              </div>
            </motion.div>

            {/* Scalable — wide dark */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="col-span-2 md:col-span-3 row-span-1 rounded-3xl p-6 md:p-8 flex flex-col justify-between bg-gray-900 dark:bg-white/[0.05] border border-gray-800 dark:border-white/[0.08] hover:shadow-xl transition-shadow duration-300"
            >
              <Layers className="w-8 h-8 text-[#0066FF]" />
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Scalable a l'infini</h3>
                <p className="text-sm text-gray-400">Architecture modulaire qui grandit avec votre business. De la landing page au SaaS complet.</p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Nos formules React */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-2">Nos formules React & Next.js</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-8">Tarifs transparents, code source livre.</p>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                name: 'Site Vitrine React',
                price: '600',
                icon: Globe,
                description: 'Landing page haute performance',
                features: ['Design sur mesure responsive', 'Animations Framer Motion', 'SEO complet (SSR/SSG)', 'Score Lighthouse 90+', 'Deploiement inclus'],
              },
              {
                name: 'Application Web SPA',
                price: '1500',
                icon: Layers,
                description: 'App interactive sur mesure',
                popular: true,
                features: ['Architecture scalable', 'Integration API REST/GraphQL', 'Auth et gestion roles', 'Dashboard interactif', 'Tests automatises'],
              },
              {
                name: 'Full-Stack Next.js',
                price: '3000',
                icon: Database,
                description: 'Plateforme complete',
                features: ['API Routes integrees', 'Base de donnees', 'Paiement Stripe', 'Espace membre', 'Infrastructure cloud'],
              },
            ].map((plan, index) => {
              const Icon = plan.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative rounded-2xl p-6 flex flex-col transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gray-50 dark:bg-white/[0.08] border-2 border-[#0066FF]/30 dark:border-[#0066FF]/40 shadow-xl shadow-[#0066FF]/5 dark:shadow-[#0066FF]/10 ring-1 ring-[#0066FF]/10'
                      : 'bg-white dark:bg-white/[0.04] border border-gray-200 dark:border-white/[0.08] hover:border-gray-300 dark:hover:border-white/[0.15] hover:shadow-lg dark:hover:bg-white/[0.06]'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#0066FF] text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-[#0066FF]/30">
                        <Star className="w-3 h-3 fill-white" /> Populaire
                      </span>
                    </div>
                  )}

                  <div className="flex items-center gap-3 mb-5 pt-1">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#0066FF]/20 to-purple-600/20 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#0066FF]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">{plan.name}</h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{plan.description}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <span className="text-xs text-gray-400 dark:text-gray-500">A partir de</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-extrabold text-gray-900 dark:text-white">{plan.price}{plan.price !== 'Sur devis' ? '€' : ''}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm">
                        <Check className="w-4 h-4 text-[#0066FF] mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <motion.a
                    href={`https://wa.me/33635505374?text=${encodeURIComponent(
                      `Bonjour, je suis interesse par l'offre ${plan.name}. Pouvez-vous m'envoyer un devis ?`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3 rounded-xl font-semibold text-center text-sm transition-all ${
                      plan.popular
                        ? 'bg-[#0066FF] text-white hover:bg-[#0055DD] shadow-lg shadow-[#0066FF]/25'
                        : 'bg-gray-900 dark:bg-white/10 text-white hover:bg-gray-800 dark:hover:bg-white/[0.15] border border-transparent dark:border-white/[0.06]'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Demander un devis
                  </motion.a>
                </motion.div>
              );
            })}
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
              Du cahier des charges a la mise en production.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4 mb-10">
            {[
              { icon: MessageCircle, step: '01', title: 'Analyse', desc: 'Objectifs, cible et architecture technique.' },
              { icon: Palette, step: '02', title: 'Design', desc: 'Maquettes validees avant developpement.' },
              { icon: Code2, step: '03', title: 'Dev', desc: 'Sprints iteratifs, livraisons regulieres.' },
              { icon: Search, step: '04', title: 'Tests', desc: 'Performance, SEO, compatibilite verifies.' },
              { icon: Zap, step: '05', title: 'Launch', desc: 'Deploiement et suivi des performances.' },
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
              Demarrer mon projet
              <Zap className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.section>

        {/* Technologies avec logos */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Notre stack technique</h2>
            <p className="text-gray-500 dark:text-gray-400">Technologies modernes, eprouvees, maintenues.</p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
            {[
              { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
              { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
              { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
              { name: 'Tailwind', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
              { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
              { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
              { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
              { name: 'Vercel', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg' },
            ].map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="flex flex-col items-center gap-3 p-5 rounded-2xl bg-gray-50 dark:bg-white/[0.04] border border-gray-200 dark:border-white/[0.08] hover:border-[#0066FF]/30 hover:shadow-lg transition-all duration-300 group"
              >
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="w-10 h-10 md:w-12 md:h-12 object-contain dark:brightness-0 dark:invert group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Pourquoi freelance — Bento */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Pourquoi un <span className="text-[#0066FF]">freelance React</span> ?
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              -50% vs agence. +100% implication.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="col-span-2 row-span-1 rounded-3xl p-6 md:p-8 flex flex-col justify-between bg-gradient-to-br from-[#0066FF]/[0.08] to-purple-600/[0.06] dark:from-[#0066FF]/[0.12] dark:to-purple-600/[0.08] border border-[#0066FF]/15 dark:border-[#0066FF]/20 hover:shadow-lg hover:shadow-[#0066FF]/5 transition-shadow duration-300"
            >
              <TrendingUp className="w-8 h-8 text-[#0066FF]" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">-50% vs agence</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Pas de commercial, pas de chef de projet. Vous payez le code, pas la structure.</p>
              </div>
            </motion.div>

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
                <p className="text-xs text-gray-500 dark:text-gray-400">WhatsApp, email, visio</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="col-span-1 row-span-1 rounded-3xl p-5 md:p-6 flex flex-col justify-between bg-gray-50 dark:bg-white/[0.05] border border-gray-200 dark:border-white/[0.08] hover:shadow-lg hover:border-gray-300 dark:hover:border-white/[0.12] transition-all duration-300"
            >
              <Users className="w-7 h-7 text-[#A855F7]" />
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-0.5">1 interlocuteur</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">Du brief au deploiement</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="col-span-1 row-span-1 rounded-3xl p-5 md:p-6 flex flex-col justify-between bg-gray-50 dark:bg-white/[0.05] border border-gray-200 dark:border-white/[0.08] hover:shadow-lg hover:border-gray-300 dark:hover:border-white/[0.12] transition-all duration-300"
            >
              <Code2 className="w-7 h-7 text-[#0066FF]" />
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-0.5">Code a vous</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">100% proprietaire</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="col-span-2 md:col-span-3 row-span-1 rounded-3xl p-6 md:p-8 flex flex-col justify-between bg-gray-900 dark:bg-white/[0.05] border border-gray-800 dark:border-white/[0.08] hover:shadow-xl transition-shadow duration-300"
            >
              <Star className="w-8 h-8 text-[#0066FF]" />
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Expert React specialise</h3>
                <p className="text-sm text-gray-400">Pas de generaliste. React, Next.js, TypeScript au quotidien depuis des annees.</p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* FAQ Section */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Questions fréquentes sur le développement React
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
            Retrouvez les réponses aux questions les plus courantes sur le développement
            d'applications web avec React et Next.js.
          </p>

          <FAQSection faqs={reactFaqs} />
        </motion.section>

        {/* CTA Section */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="p-10 md:p-14 rounded-3xl bg-gradient-to-br from-[#0066FF]/10 to-purple-600/10 border border-[#0066FF]/20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Prêt à lancer votre projet React ?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              Discutons de votre projet gratuitement et sans engagement. Je vous envoie un devis
              détaillé sous 24h avec un planning de réalisation précis. Premier échange sur WhatsApp
              ou par email, comme vous préférez.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="https://wa.me/33635505374"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#25D366] text-white font-bold flex items-center justify-center gap-3 shadow-lg shadow-[#25D366]/25"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <MessageCircle className="w-5 h-5" />
                Discuter sur WhatsApp
              </motion.a>

              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/tarifs"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#0066FF] to-purple-600 text-white font-bold flex items-center justify-center gap-3 shadow-lg shadow-[#0066FF]/25"
                >
                  Voir les tarifs
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Internal Links */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-2xl font-bold mb-6">Découvrez nos autres services</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { to: '/tarifs', label: 'Nos tarifs', desc: 'Consultez nos tarifs pour chaque prestation' },
              { to: '/', label: 'Tous nos services', desc: 'Sites web, SEO, publicité en ligne, marketing digital' }
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="p-6 rounded-2xl border border-gray-200 dark:border-white/10 hover:border-[#0066FF]/30 transition-colors group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold group-hover:text-[#0066FF] transition-colors">{link.label}</span>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#0066FF] transition-colors" />
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">{link.desc}</p>
              </Link>
            ))}
          </div>
        </motion.section>

        {/* Schema.org structured data hint */}
        <section className="sr-only" aria-hidden="true">
          <h2>Développeur React Freelance France - Traffik Web</h2>
          <p>
            Service de développement d'applications web React et Next.js sur mesure.
            Création de sites web performants, optimisés SEO, responsive et modernes.
            Développeur React freelance disponible pour tous types de projets :
            site vitrine, application web, e-commerce, plateforme SaaS.
            Tarifs à partir de 600 euros. Devis gratuit sous 24h.
            Contact WhatsApp : +33 6 35 50 53 74.
            Traffik Web - traffik-web.fr
          </p>
        </section>

      </div>
    </div>
  );
}
