import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ExternalLink, ArrowRight, MessageCircle } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import shonensportsImg from '../assets/projects/shonensports.jpg';
import cremyaImg from '../assets/projects/cremya.jpg';
import focusbusinessImg from '../assets/projects/focusbusiness.jpg';

const categories = ['Tous', 'Shopify', 'WordPress', 'React'];

const projects = [
  {
    id: 1,
    title: 'Shonen Sports',
    description: 'Boutique e-commerce streetwear et sportswear sur Shopify. Catalogue produits, paiement sécurisé, livraison France et international.',
    tech: 'Shopify',
    category: 'Shopify',
    gradient: 'from-purple-600 to-pink-500',
    image: shonensportsImg,
    link: 'https://shonensports.com',
    results: [
      { label: 'Ventes', value: '+200%' },
      { label: 'Taux conversion', value: '4.2%' },
      { label: 'Panier moyen', value: '+35%' },
    ],
  },
  {
    id: 2,
    title: 'Groupe Focus Business',
    description: 'Site vitrine professionnel pour le groupe Focus Business. Présentation des services, membership, lives quotidiens et communauté de +1000 membres.',
    tech: 'WordPress',
    category: 'WordPress',
    gradient: 'from-amber-500 to-yellow-500',
    image: focusbusinessImg,
    link: 'https://mentalitefocus.com',
    results: [
      { label: 'Membres', value: '1000+' },
      { label: 'Trafic organique', value: '+150%' },
      { label: 'Conversion', value: '8.5%' },
    ],
  },
  {
    id: 3,
    title: 'SaaS Dashboard',
    description: "Application de gestion d'entreprise avec tableaux de bord temps réel, gestion des équipes, facturation automatisée et analytics avancés.",
    tech: 'React',
    category: 'React',
    gradient: 'from-blue-600 to-cyan-500',
    results: [
      { label: 'Utilisateurs', value: '2.5K+' },
      { label: 'Rétention', value: '92%' },
      { label: 'Temps chargement', value: '0.8s' },
    ],
  },
  {
    id: 4,
    title: 'Cremya',
    description: "Boutique e-commerce de cosmétiques et soins naturels sur Shopify. Design premium, fiches produits détaillées, programme fidélité et avis clients.",
    tech: 'Shopify',
    category: 'Shopify',
    gradient: 'from-rose-500 to-fuchsia-500',
    image: cremyaImg,
    link: 'https://cremya.fr',
    results: [
      { label: 'CA mensuel', value: '+180%' },
      { label: 'Clients récurrents', value: '45%' },
      { label: 'Taux abandon', value: '-30%' },
    ],
  },
  {
    id: 5,
    title: 'Cabinet Avocat Martin',
    description: "Site vitrine professionnel avec prise de rendez-vous en ligne, blog juridique optimisé SEO et formulaire de consultation gratuite.",
    tech: 'WordPress',
    category: 'WordPress',
    gradient: 'from-slate-700 to-slate-500',
    results: [
      { label: 'Leads qualifiés', value: '+120%' },
      { label: 'Position Google', value: 'Top 3' },
      { label: 'Taux rebond', value: '-40%' },
    ],
  },
  {
    id: 6,
    title: 'Marketplace Artisans',
    description: "Plateforme multi-vendeurs connectant artisans locaux et acheteurs. Système de paiement sécurisé, gestion des commissions et messagerie intégrée.",
    tech: 'React',
    category: 'React',
    gradient: 'from-emerald-500 to-teal-500',
    results: [
      { label: 'Vendeurs actifs', value: '350+' },
      { label: 'Transactions', value: '12K+' },
      { label: 'Score perf.', value: '98/100' },
    ],
  },
];

const techColors = {
  Shopify: 'bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20',
  WordPress: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
  React: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20',
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('Tous');

  const filteredProjects =
    activeFilter === 'Tous'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-white dark:bg-[#050505] text-black dark:text-white">
      <SEOHead
        title="Portfolio & Réalisations | Projets Web & E-commerce | Traffik Web"
        description="Découvrez nos réalisations web : sites e-commerce Shopify, sites vitrine WordPress, applications React. Des projets concrets avec des résultats mesurables pour nos clients en France."
        canonical="https://traffik-web.fr/portfolio"
        keywords="portfolio web, réalisations sites web, projets e-commerce, freelance web france, création site shopify, développement wordpress, application react, agence web portfolio"
      />

      <div className="max-w-5xl mx-auto py-20 px-4">
        {/* Back link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[#0066FF] hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Retour à l'accueil
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Nos{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-purple-600">
              Réalisations
            </span>
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-base md:text-lg max-w-2xl">
            Chaque projet est une histoire de transformation digitale. Découvrez
            comment nous aidons nos clients à atteindre leurs objectifs.
          </p>
        </motion.div>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="flex flex-wrap gap-3 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all ${
                activeFilter === cat
                  ? 'bg-[#0066FF] text-white border-[#0066FF]'
                  : 'bg-transparent text-gray-600 dark:text-gray-400 border-gray-200 dark:border-white/10 hover:border-[#0066FF] hover:text-[#0066FF]'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Project grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid md:grid-cols-2 gap-6"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                layout
                className="group rounded-2xl border border-gray-200 dark:border-white/10 overflow-hidden hover:border-[#0066FF]/40 transition-all"
              >
                {/* Project image or gradient placeholder */}
                <div
                  className={`relative h-48 ${project.image ? '' : `bg-gradient-to-br ${project.gradient}`} flex items-center justify-center overflow-hidden`}
                >
                  {project.image ? (
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  ) : (
                    <span className="text-white/80 text-sm font-medium tracking-wider uppercase">
                      {project.tech}
                    </span>
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                </div>

                {/* Card content */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-lg font-bold">{project.title}</h3>
                    <span
                      className={`shrink-0 px-3 py-1 rounded-full text-[11px] font-bold border ${techColors[project.tech]}`}
                    >
                      {project.tech}
                    </span>
                  </div>

                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Results metrics */}
                  <div className="grid grid-cols-3 gap-3 mb-5">
                    {project.results.map((result) => (
                      <div
                        key={result.label}
                        className="p-3 rounded-xl bg-gray-50 dark:bg-white/[0.03] border border-gray-100 dark:border-white/5 text-center"
                      >
                        <div className="text-base font-bold text-[#0066FF]">
                          {result.value}
                        </div>
                        <div className="text-[10px] text-gray-400 uppercase tracking-wider mt-0.5">
                          {result.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* View project link */}
                  <div className="flex items-center gap-2 text-sm font-semibold text-[#0066FF] group-hover:gap-3 transition-all cursor-pointer">
                    Voir le projet
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-gray-400 text-lg">
              Aucun projet dans cette catégorie pour le moment.
            </p>
          </motion.div>
        )}

        {/* CTA section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="p-10 rounded-3xl bg-gray-50 dark:bg-white/[0.02] border border-gray-200 dark:border-white/10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Votre projet mérite d'être ici
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-lg mx-auto">
              Discutons de votre projet et transformons votre vision en
              réalité. Réponse garantie en moins de 24h.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="https://wa.me/33635505374"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#25D366] text-white font-bold hover:scale-105 transition-transform shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <MessageCircle className="w-5 h-5" />
                Discuter sur WhatsApp
              </motion.a>
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#0066FF] text-white font-bold hover:bg-[#0055D4] transition-colors shadow-lg shadow-[#0066FF]/25"
              >
                Voir nos services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
