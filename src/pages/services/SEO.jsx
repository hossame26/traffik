import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  Search,
  Globe,
  MapPin,
  FileText,
  BarChart3,
  TrendingUp,
  CheckCircle,
  ChevronDown,
  MessageCircle,
  Zap,
  Target,
  Link2,
  Settings,
  Users
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
    question: "Combien de temps faut-il pour voir les premiers resultats SEO ?",
    answer: "Le referencement naturel est une strategie a moyen et long terme. En general, les premiers resultats significatifs apparaissent entre 3 et 6 mois apres le debut de l'optimisation. Cela depend de la concurrence sur vos mots-cles, de l'etat actuel de votre site et de la qualite du travail effectue. Certaines actions comme l'optimisation technique peuvent produire des effets plus rapides (quelques semaines), tandis que le netlinking et la creation de contenu necessitent plus de patience. Nous fournissons des rapports mensuels pour suivre chaque progression."
  },
  {
    question: "Pouvez-vous garantir la premiere page Google ?",
    answer: "Aucun professionnel serieux ne peut garantir une position precise sur Google. Les algorithmes evoluent constamment et dependent de centaines de facteurs. Ce que nous garantissons, c'est l'application rigoureuse des meilleures pratiques SEO recommandees par Google, un travail transparent avec des rapports detailles, et une amelioration mesurable de votre visibilite organique. Nos clients constatent en moyenne une augmentation de 150% a 300% de leur trafic organique sur 6 a 12 mois."
  },
  {
    question: "Qu'est-ce que le SEO local et en ai-je besoin ?",
    answer: "Le SEO local est l'optimisation de votre presence en ligne pour les recherches geographiquement ciblees. Si vous avez un commerce physique, un cabinet, un restaurant ou tout business qui sert une zone geographique specifique, le SEO local est indispensable. Il comprend l'optimisation de votre fiche Google Business Profile, la gestion des avis clients, les citations locales et l'optimisation de votre site pour les requetes locales (ex: 'plombier Paris 15'). Le SEO local represente aujourd'hui 46% de toutes les recherches Google."
  },
  {
    question: "Le contenu est-il vraiment important pour le SEO ?",
    answer: "Le contenu est le pilier central de toute strategie SEO reussie. Google valorise les sites qui produisent du contenu utile, original et regulier. Un blog professionnel avec des articles optimises permet de cibler des mots-cles longue traine, d'attirer du trafic qualifie et de demontrer votre expertise (E-E-A-T). Nous vous accompagnons dans la creation d'une strategie editoriale adaptee a votre secteur, avec des contenus rediges pour plaire a la fois aux moteurs de recherche et a vos visiteurs."
  },
  {
    question: "Quelle est la difference entre SEO et SEA (Google Ads) ?",
    answer: "Le SEO (referencement naturel) consiste a optimiser votre site pour apparaitre dans les resultats organiques de Google, sans payer pour chaque clic. Le SEA (Search Engine Advertising) consiste a acheter des annonces payantes en haut des resultats. Le SEO offre un retour sur investissement durable : une fois bien positionne, vous recevez du trafic gratuit en continu. Le SEA offre des resultats immediats mais s'arrete des que vous coupez le budget. L'ideal est souvent de combiner les deux pour maximiser votre visibilite."
  }
];

export default function SEO() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#050505] text-black dark:text-white">
      <SEOHead
        title="Referencement SEO Naturel | Premiere Page Google | Traffik Web"
        description="Expert en referencement naturel SEO en France. Audit SEO, optimisation on-page, netlinking, SEO local. Boostez votre visibilite Google et attirez plus de clients. Audit a partir de 200 euros."
        canonical="https://traffik-web.fr/referencement-seo"
        keywords="referencement seo, referencement naturel, seo france, audit seo, premiere page google, optimisation seo, seo local, netlinking, consultant seo, agence seo france, referencement google, strategie seo"
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0066FF]/10 text-[#0066FF] text-sm font-medium mb-6">
            <Search className="w-4 h-4" />
            Referencement Naturel
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Referencement SEO :{' '}
            <span className="text-[#0066FF]">Atteignez la Premiere Page Google</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl">
            Vous cherchez a ameliorer votre visibilite en ligne et a attirer plus de clients qualifies ? Le <strong>referencement naturel (SEO)</strong> est la strategie la plus rentable a long terme pour positionner votre site web en haut des resultats de recherche Google. Chez <strong>Traffik Web</strong>, nous mettons en place des strategies SEO sur mesure, adaptees a votre secteur d'activite et a vos objectifs de croissance en France et a l'international.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <motion.a
              href="https://wa.me/33635505374"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] text-white font-bold shadow-lg shadow-[#25D366]/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="w-5 h-5" />
              Demander un Audit SEO Gratuit
            </motion.a>
            <Link
              to="/devis"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-[#0066FF] text-[#0066FF] font-bold hover:bg-[#0066FF]/5 transition-colors"
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
            { value: '93%', label: 'des experiences en ligne commencent par un moteur de recherche' },
            { value: '75%', label: 'des utilisateurs ne vont jamais au-dela de la premiere page' },
            { value: '14.6%', label: 'taux de conversion moyen des leads SEO' },
            { value: '5.66x', label: 'ROI moyen du referencement naturel' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="p-5 rounded-2xl bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 text-center"
            >
              <div className="text-2xl md:text-3xl font-bold text-[#0066FF] mb-2">{stat.value}</div>
              <div className="text-xs md:text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pourquoi le SEO est essentiel */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pourquoi le <span className="text-[#0066FF]">Referencement Naturel</span> est Essentiel pour Votre Business
          </h2>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              Dans un monde ou plus de <strong>8,5 milliards de recherches</strong> sont effectuees chaque jour sur Google, ne pas investir dans le referencement naturel revient a rendre votre entreprise invisible. Le SEO n'est pas une depense, c'est un investissement strategique qui genere un flux constant de visiteurs qualifies vers votre site web, 24 heures sur 24, 7 jours sur 7.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              Contrairement aux publicites payantes qui cessent de fonctionner des que vous arretez de payer, le <strong>referencement naturel SEO</strong> construit une presence durable. Un site bien optimise continue d'attirer du trafic organique pendant des mois, voire des annees, apres l'investissement initial. C'est la definition meme du marketing intelligent : travailler aujourd'hui pour recolter demain.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Que vous soyez une startup, une PME ou un independant en France, le SEO est le levier de croissance le plus puissant et le plus mesurable a votre disposition. Nos experts en referencement analysent votre marche, identifient les opportunites et mettent en oeuvre une strategie personnalisee pour vous positionner devant vos concurrents sur les mots-cles qui comptent.
            </p>
          </div>
        </motion.section>

        {/* Nos 4 Piliers SEO */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nos 4 Piliers du <span className="text-[#0066FF]">Referencement SEO</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-10 text-lg">
            Une approche complete et methodique pour dominer les resultats de recherche.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* SEO On-Page */}
            <motion.div
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#0066FF]/10 flex items-center justify-center mb-5">
                <FileText className="w-7 h-7 text-[#0066FF]" />
              </div>
              <h3 className="text-xl font-bold mb-3">SEO On-Page</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                L'optimisation on-page est le fondement de tout bon referencement. Nous optimisons chaque element de vos pages pour les rendre irresistibles aux yeux de Google et de vos visiteurs.
              </p>
              <ul className="space-y-2">
                {[
                  'Recherche et strategie de mots-cles',
                  'Optimisation des balises title et meta description',
                  'Structure des titres (H1, H2, H3) et maillage interne',
                  'Optimisation des images (alt, compression, WebP)',
                  'Redaction et optimisation de contenu SEO',
                  'Schema markup et donnees structurees'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <CheckCircle className="w-4 h-4 text-[#0066FF] mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* SEO Technique */}
            <motion.div
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#0066FF]/10 flex items-center justify-center mb-5">
                <Settings className="w-7 h-7 text-[#0066FF]" />
              </div>
              <h3 className="text-xl font-bold mb-3">SEO Technique</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                Un site techniquement sain est la base indispensable. Nous auditons et corrigeons tous les problemes techniques qui empechent Google de bien indexer et comprendre votre site.
              </p>
              <ul className="space-y-2">
                {[
                  'Audit technique complet (Core Web Vitals)',
                  'Optimisation de la vitesse de chargement',
                  'Compatibilite mobile (responsive design)',
                  'Architecture du site et crawlabilite',
                  'Gestion du fichier robots.txt et sitemap XML',
                  'Correction des erreurs 404 et redirections'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <CheckCircle className="w-4 h-4 text-[#0066FF] mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* SEO Off-Page / Netlinking */}
            <motion.div
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#0066FF]/10 flex items-center justify-center mb-5">
                <Link2 className="w-7 h-7 text-[#0066FF]" />
              </div>
              <h3 className="text-xl font-bold mb-3">SEO Off-Page & Netlinking</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                La popularite de votre site aux yeux de Google depend largement de la qualite et de la quantite des liens qui pointent vers lui. Notre strategie de netlinking est 100% white hat.
              </p>
              <ul className="space-y-2">
                {[
                  'Strategie de link building ethique et durable',
                  'Acquisition de backlinks de qualite (DA eleve)',
                  'Guest blogging sur des sites d\'autorite',
                  'Analyse et desaveu des liens toxiques',
                  'Surveillance du profil de liens',
                  'Relations presse digitale'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <CheckCircle className="w-4 h-4 text-[#0066FF] mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* SEO Local */}
            <motion.div
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#0066FF]/10 flex items-center justify-center mb-5">
                <MapPin className="w-7 h-7 text-[#0066FF]" />
              </div>
              <h3 className="text-xl font-bold mb-3">SEO Local</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                Pour les entreprises qui servent une zone geographique specifique, le SEO local est un levier de croissance incontournable. Apparaissez dans le pack local Google Maps et attirez des clients pres de chez vous.
              </p>
              <ul className="space-y-2">
                {[
                  'Optimisation Google Business Profile',
                  'Gestion et reponse aux avis clients',
                  'Citations locales (annuaires, Pages Jaunes)',
                  'Optimisation pour les requetes "pres de moi"',
                  'Contenu geolocal adapte a votre zone',
                  'Suivi du positionnement local'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <CheckCircle className="w-4 h-4 text-[#0066FF] mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.section>

        {/* Notre Processus SEO */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Notre <span className="text-[#0066FF]">Processus SEO</span> en 5 Etapes
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-10 text-lg">
            Une methodologie eprouvee pour des resultats concrets et mesurables.
          </p>

          <div className="space-y-6">
            {[
              {
                step: '01',
                title: 'Audit SEO Complet',
                description: 'Nous analysons en profondeur votre site web : performance technique, contenu, backlinks, positionnement actuel et concurrence. Cet audit detaille identifie toutes les opportunites d\'amelioration et sert de base a notre strategie.',
                icon: Search
              },
              {
                step: '02',
                title: 'Strategie & Mots-cles',
                description: 'A partir des donnees de l\'audit, nous definissons une strategie SEO personnalisee. Nous identifions les mots-cles a fort potentiel pour votre activite, analysons l\'intention de recherche et priorisons les actions a mener.',
                icon: Target
              },
              {
                step: '03',
                title: 'Optimisation Technique & On-Page',
                description: 'Nous mettons en oeuvre les corrections techniques, optimisons la structure de votre site, ameliorons la vitesse de chargement et optimisons chaque page pour les mots-cles cibles. Le maillage interne est renforce.',
                icon: Zap
              },
              {
                step: '04',
                title: 'Contenu & Netlinking',
                description: 'Nous creons du contenu optimise SEO (articles de blog, pages piliers, landing pages) et mettons en place une strategie de netlinking pour augmenter l\'autorite de votre domaine avec des backlinks de qualite.',
                icon: Globe
              },
              {
                step: '05',
                title: 'Suivi, Reporting & Ajustements',
                description: 'Chaque mois, vous recevez un rapport detaille avec l\'evolution de vos positions, du trafic organique, des conversions et des actions realisees. Nous ajustons la strategie en continu pour maximiser les resultats.',
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
                    <div className="w-14 h-14 rounded-2xl bg-[#0066FF] flex items-center justify-center">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-[#0066FF] font-bold mb-1">Etape {item.step}</div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Tarifs SEO */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nos <span className="text-[#0066FF]">Tarifs SEO</span> Transparents
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-10 text-lg">
            Des formules adaptees a chaque budget et chaque objectif de croissance.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Audit SEO */}
            <motion.div
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="p-8 rounded-2xl border-2 border-gray-200 dark:border-white/10 hover:border-[#0066FF]/30 transition-colors"
            >
              <div className="text-sm text-[#0066FF] font-bold uppercase tracking-wider mb-2">Audit</div>
              <h3 className="text-xl font-bold mb-2">Audit SEO Complet</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-bold text-[#0066FF]">200</span>
                <span className="text-xl text-gray-400">EUR</span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Paiement unique - Livraison sous 7 jours</p>
              <ul className="space-y-3 mb-8">
                {[
                  'Analyse technique complete',
                  'Audit de contenu et mots-cles',
                  'Analyse des backlinks',
                  'Analyse de la concurrence',
                  'Rapport PDF detaille',
                  'Plan d\'action prioritaire'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <CheckCircle className="w-4 h-4 text-[#0066FF] mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <motion.a
                href="https://wa.me/33635505374?text=Bonjour%2C%20je%20souhaite%20un%20audit%20SEO%20pour%20mon%20site."
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 rounded-xl border-2 border-[#0066FF] text-[#0066FF] font-bold text-center hover:bg-[#0066FF]/5 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Commander l'audit
              </motion.a>
            </motion.div>

            {/* SEO Mensuel */}
            <motion.div
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="p-8 rounded-2xl border-2 border-[#0066FF] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 bg-[#0066FF] text-white text-xs font-bold px-4 py-1 rounded-bl-xl">
                POPULAIRE
              </div>
              <div className="text-sm text-[#0066FF] font-bold uppercase tracking-wider mb-2">Mensuel</div>
              <h3 className="text-xl font-bold mb-2">SEO Performance</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-bold text-[#0066FF]">400</span>
                <span className="text-xl text-gray-400">EUR/mois</span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Engagement 6 mois minimum</p>
              <ul className="space-y-3 mb-8">
                {[
                  'Audit initial offert',
                  'Optimisation technique continue',
                  'Creation de 4 contenus/mois',
                  'Strategie de netlinking',
                  'Suivi des positions quotidien',
                  'Rapport mensuel detaille',
                  'Support prioritaire'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <CheckCircle className="w-4 h-4 text-[#0066FF] mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <motion.a
                href="https://wa.me/33635505374?text=Bonjour%2C%20je%20suis%20interesse%20par%20votre%20offre%20SEO%20mensuelle."
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 rounded-xl bg-[#0066FF] text-white font-bold text-center shadow-lg shadow-[#0066FF]/25"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Demarrer maintenant
              </motion.a>
            </motion.div>

            {/* SEO Premium */}
            <motion.div
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="p-8 rounded-2xl border-2 border-gray-200 dark:border-white/10 hover:border-[#0066FF]/30 transition-colors"
            >
              <div className="text-sm text-[#0066FF] font-bold uppercase tracking-wider mb-2">Premium</div>
              <h3 className="text-xl font-bold mb-2">SEO Croissance</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-bold text-[#0066FF]">800</span>
                <span className="text-xl text-gray-400">EUR/mois</span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Engagement 3 mois minimum</p>
              <ul className="space-y-3 mb-8">
                {[
                  'Tout de SEO Performance',
                  'Creation de 8+ contenus/mois',
                  'Netlinking intensif (10+ liens/mois)',
                  'SEO local inclus',
                  'Optimisation taux de conversion (CRO)',
                  'Appel strategique hebdomadaire',
                  'Support illimite'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <CheckCircle className="w-4 h-4 text-[#0066FF] mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <motion.a
                href="https://wa.me/33635505374?text=Bonjour%2C%20je%20suis%20interesse%20par%20votre%20offre%20SEO%20Premium."
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 rounded-xl border-2 border-[#0066FF] text-[#0066FF] font-bold text-center hover:bg-[#0066FF]/5 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Nous contacter
              </motion.a>
            </motion.div>
          </div>
        </motion.section>

        {/* Pourquoi choisir Traffik Web */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Pourquoi Choisir <span className="text-[#0066FF]">Traffik Web</span> pour Votre SEO
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: TrendingUp,
                title: 'Resultats Mesurables',
                description: 'Nous ne promettons pas, nous prouvons. Chaque action est mesuree et chaque resultat est documente dans des rapports clairs et transparents.'
              },
              {
                icon: Users,
                title: 'Approche Personnalisee',
                description: 'Pas de solution generique. Chaque strategie SEO est concue sur mesure en fonction de votre secteur, votre concurrence et vos objectifs specifiques.'
              },
              {
                icon: Globe,
                title: 'Expertise France & International',
                description: 'Que vous cibliez le marche francais, europeen ou mondial, nous adaptons notre strategie de referencement naturel a votre perimetre geographique.'
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
                  <div className="w-12 h-12 rounded-xl bg-[#0066FF]/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#0066FF]" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Contenu SEO supplementaire */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Le SEO en France : <span className="text-[#0066FF]">Tendances et Bonnes Pratiques</span>
          </h2>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              Le paysage du <strong>referencement naturel en France</strong> evolue constamment. Avec les mises a jour regulieres de l'algorithme Google (Helpful Content Update, Core Updates, etc.), il est crucial de rester a la pointe des meilleures pratiques. En 2026, les criteres E-E-A-T (Experience, Expertise, Autorite, Fiabilite) sont plus importants que jamais pour le positionnement de votre site.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              L'<strong>intelligence artificielle</strong> transforme egalement le paysage du SEO. Les Search Generative Experiences (SGE) de Google modifient la maniere dont les resultats sont affiches. Chez Traffik Web, nous anticipons ces evolutions et adaptons nos strategies pour que votre site reste visible, quel que soit le format de resultat affiche par Google.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              Le <strong>SEO mobile</strong> est desormais prioritaire : Google utilise le mobile-first indexing depuis plusieurs annees. Cela signifie que la version mobile de votre site est celle qui est analysee en premier par les robots de Google. Un site lent, non responsive ou offrant une mauvaise experience utilisateur sur mobile sera penalise dans les classements.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Enfin, le <strong>contenu de qualite</strong> reste roi. Les sites qui publient regulierement des articles de blog pertinents, des guides pratiques et des etudes de cas voient leur autorite de domaine augmenter progressivement. Notre equipe de redacteurs SEO cree du contenu optimise qui repond a l'intention de recherche de vos prospects tout en respectant les meilleures pratiques de referencement naturel.
            </p>
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
            Questions <span className="text-[#0066FF]">Frequentes</span> sur le SEO
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-10 text-lg">
            Les reponses aux questions que nos clients nous posent le plus souvent.
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
                    <ChevronDown className="w-5 h-5 text-[#0066FF]" />
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
              to="/services/creation-site-web"
              className="p-5 rounded-2xl border border-gray-200 dark:border-white/10 hover:border-[#0066FF]/50 transition-colors group"
            >
              <Globe className="w-6 h-6 text-[#0066FF] mb-3" />
              <h3 className="font-bold mb-1 group-hover:text-[#0066FF] transition-colors">Creation de Site Web</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Sites vitrines, e-commerce et sur mesure.</p>
            </Link>
            <Link
              to="/services/publicite-en-ligne"
              className="p-5 rounded-2xl border border-gray-200 dark:border-white/10 hover:border-[#0066FF]/50 transition-colors group"
            >
              <BarChart3 className="w-6 h-6 text-[#0066FF] mb-3" />
              <h3 className="font-bold mb-1 group-hover:text-[#0066FF] transition-colors">Publicite en Ligne</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Google Ads, Meta Ads, campagnes performantes.</p>
            </Link>
            <Link
              to="/blog"
              className="p-5 rounded-2xl border border-gray-200 dark:border-white/10 hover:border-[#0066FF]/50 transition-colors group"
            >
              <FileText className="w-6 h-6 text-[#0066FF] mb-3" />
              <h3 className="font-bold mb-1 group-hover:text-[#0066FF] transition-colors">Blog & Ressources</h3>
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
          className="text-center p-10 md:p-16 rounded-3xl bg-gradient-to-br from-[#0066FF]/10 to-purple-600/10 border border-[#0066FF]/20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pret a Dominer Google ?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Discutons de votre projet SEO et decouvrons ensemble comment propulser votre site en premiere page des resultats de recherche. Premier echange gratuit et sans engagement.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="https://wa.me/33635505374?text=Bonjour%2C%20je%20souhaite%20discuter%20de%20mon%20projet%20SEO."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#25D366] text-white font-bold shadow-lg shadow-[#25D366]/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="w-5 h-5" />
              Discuter sur WhatsApp
            </motion.a>
            <Link
              to="/devis"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#0066FF] text-white font-bold shadow-lg shadow-[#0066FF]/25 hover:bg-[#0055DD] transition-colors"
            >
              Estimer mon projet
            </Link>
          </div>
        </motion.section>

      </div>
    </div>
  );
}
