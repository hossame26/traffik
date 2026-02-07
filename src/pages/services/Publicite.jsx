import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  Target,
  TrendingUp,
  BarChart3,
  Users,
  Zap,
  CheckCircle2,
  ChevronDown,
  MessageCircle,
  Eye,
  DollarSign,
  LineChart,
  Megaphone,
  Rocket,
  ShieldCheck,
  Clock
} from 'lucide-react';
import SEOHead from '../../components/SEOHead';

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
    description: 'Touchez vos clients ideaux sur les reseaux sociaux les plus puissants au monde. Ciblage par centres d\'interet, comportements et audiences similaires.',
    icon: Users,
    color: 'from-blue-600 to-indigo-600',
    features: ['Ciblage ultra-precis', 'Retargeting dynamique', 'Audiences Lookalike', 'Stories & Reels Ads']
  },
  {
    name: 'Google Ads (Search & Display)',
    description: 'Apparaissez en premiere position quand vos clients recherchent vos produits ou services. Captez une intention d\'achat immediate.',
    icon: Target,
    color: 'from-red-500 to-orange-500',
    features: ['Search Ads', 'Display Network', 'Google Shopping', 'YouTube Ads']
  },
  {
    name: 'TikTok Ads',
    description: 'Exploitez la plateforme a la croissance la plus rapide pour toucher une audience jeune et engagee avec des formats video immersifs.',
    icon: Zap,
    color: 'from-pink-500 to-purple-600',
    features: ['In-Feed Ads', 'TopView', 'Branded Effects', 'Spark Ads']
  }
];

const processSteps = [
  {
    step: '01',
    title: 'Audit & Strategie',
    description: 'Analyse de votre marche, de vos concurrents et definition d\'une strategie publicitaire sur mesure avec des objectifs clairs et mesurables.',
    icon: Eye
  },
  {
    step: '02',
    title: 'Creation & Configuration',
    description: 'Creation des visuels, redaction des annonces, configuration du pixel de suivi et parametrage des campagnes avec un ciblage optimise.',
    icon: Megaphone
  },
  {
    step: '03',
    title: 'Lancement & Optimisation',
    description: 'Mise en ligne des campagnes, suivi quotidien des performances et optimisations continues pour maximiser votre retour sur investissement.',
    icon: Rocket
  },
  {
    step: '04',
    title: 'Reporting & Scaling',
    description: 'Rapports detailles hebdomadaires, analyse des KPIs et recommandations strategiques pour scaler les campagnes rentables.',
    icon: BarChart3
  }
];

const benefits = [
  'Ciblage precis de votre audience ideale',
  'Resultats mesurables et transparents',
  'Optimisation quotidienne des campagnes',
  'Rapports detailles chaque semaine',
  'Pas d\'engagement longue duree',
  'Expert dedie a votre compte',
  'Strategies testees et prouvees',
  'Accompagnement personnalise'
];

const faqs = [
  {
    question: 'Quel budget publicitaire minimum faut-il prevoir pour Facebook Ads ou Google Ads ?',
    answer: 'Nous recommandons un budget publicitaire minimum de 300 a 500 euros par mois par plateforme pour obtenir des resultats significatifs. Ce budget s\'ajoute a nos frais de gestion a partir de 300 euros/mois. Ce montant permet de collecter suffisamment de donnees pour optimiser vos campagnes et atteindre un retour sur investissement positif. Pour les e-commerces, un budget de 500 a 1000 euros par mois est ideal pour scaler rapidement.'
  },
  {
    question: 'En combien de temps vais-je voir des resultats avec la publicite en ligne ?',
    answer: 'Les premiers resultats sont generalement visibles des la premiere semaine de diffusion. Cependant, la phase d\'optimisation reelle commence apres 2 a 4 semaines, le temps que les algorithmes des plateformes collectent suffisamment de donnees pour identifier les audiences les plus performantes. Apres 1 a 2 mois de gestion, les campagnes atteignent generalement leur rythme de croisiere avec un cout par acquisition stable et optimise.'
  },
  {
    question: 'Quelle plateforme publicitaire choisir entre Facebook Ads, Google Ads et TikTok Ads ?',
    answer: 'Le choix depend de votre activite et de votre cible. Facebook et Instagram Ads sont ideaux pour le e-commerce, les services B2C et la generation de leads grace a leur ciblage comportemental avance. Google Ads est recommande quand vos clients recherchent activement vos produits ou services (intention d\'achat forte). TikTok Ads est parfait pour toucher une audience 18-35 ans avec des produits visuels. Nous vous conseillons gratuitement sur la meilleure strategie lors de notre premier echange.'
  },
  {
    question: 'Comment mesurez-vous le retour sur investissement (ROI) de mes campagnes ?',
    answer: 'Nous mettons en place un suivi complet avec le pixel Facebook, Google Analytics et le suivi des conversions. Chaque vente, chaque lead, chaque action est tracee. Vous recevez un rapport hebdomadaire detaillant : le nombre d\'impressions, le taux de clic (CTR), le cout par clic (CPC), le cout par acquisition (CPA), le nombre de conversions et le retour sur investissement global (ROAS). Tout est transparent et mesurable.'
  },
  {
    question: 'Dois-je m\'engager sur une duree minimum pour la gestion publicitaire ?',
    answer: 'Non, nous ne demandons aucun engagement de duree minimum. Nous fonctionnons au mois le mois. Cependant, nous recommandons un minimum de 3 mois pour laisser le temps aux campagnes d\'etre correctement optimisees et atteindre leur plein potentiel. La majorite de nos clients restent avec nous sur le long terme car les resultats parlent d\'eux-memes.'
  }
];

function FAQItem({ question, answer, index }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={index * 0.1}
      className="border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-gray-50 dark:hover:bg-white/[0.02] transition-colors"
      >
        <h3 className="text-lg font-semibold pr-4">{question}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-[#0066FF]" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="px-6 pb-6 text-gray-600 dark:text-gray-400 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Publicite() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#050505] text-black dark:text-white">
      <SEOHead
        title="Publicite Digitale Facebook Ads & Google Ads | ROI Garanti | Traffik Web"
        description="Expert en publicite digitale Facebook Ads, Google Ads et TikTok Ads. Gestion de campagnes publicitaires en ligne avec ROI garanti. Agence Facebook Ads France. A partir de 300 euros/mois."
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0066FF]/10 text-[#0066FF] text-sm font-medium mb-6">
            <Megaphone className="w-4 h-4" />
            Publicite digitale
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Publicite Digitale{' '}
            <span className="text-[#0066FF]">Facebook Ads</span> &{' '}
            <span className="text-[#0066FF]">Google Ads</span> :
            Generez des Clients avec un ROI Garanti
          </h1>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
            Vous investissez dans la publicite en ligne mais les resultats ne sont pas au rendez-vous ?
            Vous ne savez pas par ou commencer pour lancer vos premieres campagnes publicitaires ?
            Chez <strong>Traffik Web</strong>, nous gerons vos campagnes <strong>Facebook Ads</strong>,{' '}
            <strong>Google Ads</strong> et <strong>TikTok Ads</strong> de A a Z pour transformer chaque
            euro investi en clients et en chiffre d'affaires.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a
              href="https://wa.me/33635505374"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#25D366] text-white font-bold text-lg shadow-lg shadow-[#25D366]/25"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <MessageCircle className="w-5 h-5" />
              Discuter de mon projet
            </motion.a>
            <Link
              to="/tarifs"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-[#0066FF] text-[#0066FF] font-bold text-lg hover:bg-[#0066FF]/5 transition-colors"
            >
              <DollarSign className="w-5 h-5" />
              Voir les tarifs
            </Link>
          </div>
        </motion.div>

        {/* Pourquoi la publicite digitale */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pourquoi Investir dans la <span className="text-[#0066FF]">Publicite Digitale</span> en 2026 ?
          </h2>

          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
            La publicite digitale est devenue le levier d'acquisition le plus puissant pour les entreprises
            de toutes tailles. Contrairement au referencement naturel (SEO) qui prend plusieurs mois pour
            porter ses fruits, la <strong>publicite Facebook Ads</strong> et la <strong>publicite Google Ads</strong>{' '}
            permettent de generer des resultats immediats : plus de visites, plus de prospects, plus de ventes.
          </p>

          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
            En France, plus de <strong>80% des consommateurs</strong> recherchent un produit ou un service en ligne
            avant d'acheter. Si votre entreprise n'est pas visible sur Google ou sur les reseaux sociaux,
            vous laissez vos concurrents capter ces clients potentiels. La <strong>gestion de publicite en ligne</strong>{' '}
            professionnelle vous permet de vous positionner exactement devant les personnes les plus susceptibles
            d'acheter chez vous.
          </p>

          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
            Notre expertise en tant qu'<strong>agence Facebook Ads en France</strong> nous permet de creer des
            campagnes publicitaires hautement ciblees qui maximisent votre retour sur investissement. Que vous
            vendiez des produits en ligne, proposiez des services locaux ou cherchiez a generer des leads qualifies,
            nous avons la strategie adaptee a vos objectifs.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: TrendingUp, title: 'Resultats immediats', desc: 'Premiers leads et ventes des les premiers jours de diffusion de vos campagnes publicitaires.' },
              { icon: Target, title: 'Ciblage chirurgical', desc: 'Touchez uniquement les personnes correspondant a votre client ideal grace au ciblage avance.' },
              { icon: LineChart, title: 'ROI mesurable', desc: 'Chaque euro investi est trace. Vous savez exactement combien vous rapporte votre publicite.' }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
                className="p-6 rounded-2xl bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0066FF]/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-[#0066FF]" />
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Plateformes */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Les Plateformes Publicitaires que Nous <span className="text-[#0066FF]">Gerons</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-10">
            Chaque plateforme publicitaire a ses specificites. Nous maitrisons les trois ecosystemes
            principaux pour deployer la strategie la plus adaptee a votre marche et a vos objectifs commerciaux.
          </p>

          <div className="space-y-6">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
                className="p-8 rounded-2xl bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10"
              >
                <div className="flex items-start gap-5">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${platform.color} flex items-center justify-center flex-shrink-0`}>
                    <platform.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{platform.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                      {platform.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {platform.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-3 py-1 rounded-full bg-[#0066FF]/10 text-[#0066FF] text-sm font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Notre Methode */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Notre Methode pour des <span className="text-[#0066FF]">Campagnes Rentables</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-10">
            Une publicite digitale performante ne s'improvise pas. Notre processus eprouve en 4 etapes
            garantit que chaque campagne est optimisee pour maximiser votre retour sur investissement et
            atteindre vos objectifs business.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
                className="p-6 rounded-2xl bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-3xl font-black text-[#0066FF]/20">{step.step}</span>
                  <div className="w-10 h-10 rounded-xl bg-[#0066FF]/10 flex items-center justify-center">
                    <step.icon className="w-5 h-5 text-[#0066FF]" />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Ce que vous obtenez */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ce que Comprend Notre <span className="text-[#0066FF]">Gestion Publicitaire</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
            En confiant la gestion de vos campagnes publicitaires a Traffik Web, vous beneficiez d'un
            service complet, transparent et oriente resultats. Notre offre de <strong>gestion publicite en ligne</strong>{' '}
            inclut tout ce dont vous avez besoin pour reussir.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index * 0.05}
                className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10"
              >
                <CheckCircle2 className="w-5 h-5 text-[#0066FF] flex-shrink-0" />
                <span className="text-sm font-medium">{benefit}</span>
              </motion.div>
            ))}
          </div>

          {/* Pricing highlight */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
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

        {/* Pourquoi nous choisir */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pourquoi Choisir <span className="text-[#0066FF]">Traffik Web</span> pour Vos Campagnes ?
          </h2>

          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
            Contrairement aux grandes agences de publicite digitale qui facturent des milliers d'euros
            et vous considerent comme un numero, Traffik Web offre un <strong>accompagnement personnalise</strong>{' '}
            avec un expert dedie a votre compte. Nous travaillons avec des entreprises de toutes tailles,
            des auto-entrepreneurs aux PME, et nous adaptons notre strategie a votre budget et vos objectifs.
          </p>

          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
            Notre approche est simple : la transparence totale. Vous avez acces a vos comptes publicitaires,
            vous recevez des rapports detailles chaque semaine, et nous vous expliquons chaque decision
            strategique. Pas de jargon inutile, pas de frais caches, juste des resultats concrets et mesurables.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: ShieldCheck, title: 'Transparence totale', desc: 'Acces complet a vos comptes publicitaires. Vous restez proprietaire de vos donnees et de vos campagnes.' },
              { icon: Clock, title: 'Reactivite maximale', desc: 'Optimisations quotidiennes et reponse sous 24h. Votre budget publicitaire est entre de bonnes mains.' },
              { icon: TrendingUp, title: 'Focus sur le ROI', desc: 'Notre objectif : que chaque euro investi vous rapporte plus. Nous optimisons pour les conversions, pas les clics.' },
              { icon: Users, title: 'Expert dedie', desc: 'Un seul interlocuteur qui connait votre business. Pas de turnover, pas de perte de contexte.' }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
                className="flex items-start gap-4 p-5 rounded-2xl bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10"
              >
                <div className="w-10 h-10 rounded-lg bg-[#0066FF]/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-[#0066FF]" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Complement SEO + Site */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Publicite Digitale + <span className="text-[#0066FF]">SEO + Site Web</span> : Le Combo Gagnant
          </h2>

          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
            La publicite digitale seule ne suffit pas toujours. Pour maximiser vos resultats, nous recommandons
            de combiner vos campagnes publicitaires avec un <strong>site web optimise</strong> qui convertit
            vos visiteurs en clients, et une strategie de <strong>referencement naturel (SEO)</strong> pour
            capter du trafic organique gratuit sur le long terme.
          </p>

          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
            Un site mal concu fait fuir les visiteurs que votre publicite attire. C'est pourquoi nous proposons
            egalement la <Link to="/creation-site-shopify" className="text-[#0066FF] font-semibold hover:underline">creation de sites Shopify</Link>{' '}
            optimises pour la conversion, ainsi qu'un service de{' '}
            <Link to="/referencement-seo" className="text-[#0066FF] font-semibold hover:underline">referencement SEO</Link>{' '}
            complet pour dominer les resultats de recherche Google sur le long terme.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              to="/creation-site-shopify"
              className="px-5 py-3 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-sm font-medium hover:border-[#0066FF] hover:text-[#0066FF] transition-colors"
            >
              Creation Site Shopify
            </Link>
            <Link
              to="/referencement-seo"
              className="px-5 py-3 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-sm font-medium hover:border-[#0066FF] hover:text-[#0066FF] transition-colors"
            >
              Referencement SEO
            </Link>
            <Link
              to="/tarifs"
              className="px-5 py-3 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-sm font-medium hover:border-[#0066FF] hover:text-[#0066FF] transition-colors"
            >
              Tous nos tarifs
            </Link>
            <Link
              to="/blog"
              className="px-5 py-3 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-sm font-medium hover:border-[#0066FF] hover:text-[#0066FF] transition-colors"
            >
              Blog & Conseils
            </Link>
          </div>
        </motion.section>

        {/* FAQ */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Questions Frequentes sur la <span className="text-[#0066FF]">Publicite Digitale</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-10">
            Retrouvez les reponses aux questions les plus posees par nos clients sur la gestion
            de campagnes publicitaires Facebook Ads, Google Ads et TikTok Ads.
          </p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} index={index} />
            ))}
          </div>
        </motion.section>

        {/* CTA Final */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center p-10 md:p-14 rounded-3xl bg-gradient-to-br from-[#0066FF]/10 to-purple-500/10 border border-[#0066FF]/20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pret a Lancer Vos Campagnes Publicitaires ?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8 max-w-2xl mx-auto">
            Discutons de votre projet gratuitement. Nous analysons votre marche, definissons la meilleure
            strategie publicitaire et vous proposons un plan d'action concret pour atteindre vos objectifs.
            Premier echange gratuit et sans engagement.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="https://wa.me/33635505374"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#25D366] text-white font-bold text-lg shadow-lg shadow-[#25D366]/25"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <MessageCircle className="w-5 h-5" />
              Discuter sur WhatsApp
            </motion.a>
            <Link
              to="/tarifs"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-[#0066FF] text-[#0066FF] font-bold text-lg hover:bg-[#0066FF]/5 transition-colors"
            >
              Voir les tarifs
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
