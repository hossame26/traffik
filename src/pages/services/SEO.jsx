import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Search,
  Globe,
  MapPin,
  FileText,
  BarChart3,
  TrendingUp,
  CheckCircle,
  MessageCircle,
  Zap,
  Target,
  Link2,
  Settings,
  Users,
  Star,
  Check,
  ArrowRight,
} from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import FAQSection from '../../components/common/FAQSection';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' }
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
          className="inline-flex items-center gap-2 text-[#0066FF] hover:underline mb-10 text-sm"
        >
          <ArrowLeft className="w-4 h-4" /> Retour a l'accueil
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
              Referencement Naturel
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Referencement SEO :{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-purple-600">
              Atteignez la Premiere Page Google
            </span>
          </h1>

          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mb-8">
            Boostez votre visibilite Google avec une strategie SEO sur mesure. Audit, optimisation, contenu et netlinking pour des resultats concrets.
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
            { value: '93%', label: 'des experiences commencent sur Google' },
            { value: '75%', label: 'ne depassent pas la page 1' },
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

        {/* 4 Piliers SEO — Bento Grid */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Nos 4 Piliers du{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-purple-600">
                Referencement SEO
              </span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              Approche complete pour dominer les resultats de recherche.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px]">
            {/* SEO On-Page — large gradient */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="col-span-2 row-span-1 rounded-3xl p-6 md:p-8 flex flex-col justify-between bg-gradient-to-br from-[#0066FF]/[0.08] to-[#A855F7]/[0.06] dark:from-[#0066FF]/[0.12] dark:to-[#A855F7]/[0.08] border border-[#0066FF]/15 dark:border-[#0066FF]/20 hover:shadow-lg hover:shadow-[#0066FF]/5 transition-shadow duration-300"
            >
              <FileText className="w-8 h-8 text-[#0066FF]" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">SEO On-Page</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Balises, mots-cles, contenu optimise pour Google.</p>
              </div>
            </motion.div>

            {/* SEO Technique — small */}
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

            {/* Netlinking — small */}
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
                <p className="text-xs text-gray-500 dark:text-gray-400">Backlinks de qualite</p>
              </div>
            </motion.div>

            {/* SEO Local — small */}
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

            {/* Strategie complete — wide dark */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="col-span-2 md:col-span-3 row-span-1 rounded-3xl p-6 md:p-8 flex flex-col justify-between bg-gray-900 dark:bg-white/[0.05] border border-gray-800 dark:border-white/[0.08] hover:shadow-xl transition-shadow duration-300"
            >
              <TrendingUp className="w-8 h-8 text-[#0066FF]" />
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Strategie complete 360</h3>
                <p className="text-sm text-gray-400">On-page + technique + netlinking + local = dominance totale sur vos mots-cles.</p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Processus SEO — Horizontal 5 columns */}
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
              De l'audit initial au reporting mensuel.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4 mb-10">
            {[
              { icon: Search, step: '01', title: 'Audit', desc: 'Analyse complete de votre site.' },
              { icon: Target, step: '02', title: 'Strategie', desc: 'Mots-cles et plan d\'action.' },
              { icon: Zap, step: '03', title: 'Optimisation', desc: 'Technique + on-page.' },
              { icon: Globe, step: '04', title: 'Contenu', desc: 'Articles + netlinking.' },
              { icon: TrendingUp, step: '05', title: 'Suivi', desc: 'Reporting mensuel detaille.' },
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
              href="https://wa.me/33635505374?text=Bonjour%2C%20je%20souhaite%20un%20audit%20SEO%20pour%20mon%20site."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#0066FF] to-[#A855F7] text-white font-bold shadow-lg shadow-[#0066FF]/20 hover:shadow-xl hover:shadow-[#0066FF]/30 transition-shadow"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Demarrer mon audit SEO
              <Zap className="w-4 h-4" />
            </motion.a>
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
            Des formules adaptees a chaque budget et chaque objectif.
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
                <span className="text-4xl font-bold text-[#0066FF]">90</span>
                <span className="text-xl text-gray-400">EUR/mois</span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Sans engagement</p>
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

        {/* Pourquoi Traffik Web — Bento Grid */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Pourquoi Choisir <span className="text-[#0066FF]">Traffik Web</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              Votre partenaire SEO de confiance.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px]">
            {/* Resultats mesurables — large gradient */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="col-span-2 row-span-1 rounded-3xl p-6 md:p-8 flex flex-col justify-between bg-gradient-to-br from-[#0066FF]/[0.08] to-[#A855F7]/[0.06] dark:from-[#0066FF]/[0.12] dark:to-[#A855F7]/[0.08] border border-[#0066FF]/15 dark:border-[#0066FF]/20 hover:shadow-lg hover:shadow-[#0066FF]/5 transition-shadow duration-300"
            >
              <TrendingUp className="w-8 h-8 text-[#0066FF]" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Resultats mesurables</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Chaque action tracee, chaque progression documentee.</p>
              </div>
            </motion.div>

            {/* Sur mesure — small */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="col-span-1 row-span-1 rounded-3xl p-5 md:p-6 flex flex-col justify-between bg-gray-50 dark:bg-white/[0.05] border border-gray-200 dark:border-white/[0.08] hover:shadow-lg hover:border-gray-300 dark:hover:border-white/[0.12] transition-all duration-300"
            >
              <Users className="w-7 h-7 text-[#0066FF]" />
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-0.5">Sur mesure</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">Strategie adaptee a votre secteur</p>
              </div>
            </motion.div>

            {/* France & International — small */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="col-span-1 row-span-1 rounded-3xl p-5 md:p-6 flex flex-col justify-between bg-gray-50 dark:bg-white/[0.05] border border-gray-200 dark:border-white/[0.08] hover:shadow-lg hover:border-gray-300 dark:hover:border-white/[0.12] transition-all duration-300"
            >
              <Globe className="w-7 h-7 text-[#A855F7]" />
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-0.5">France & International</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">SEO local ou mondial</p>
              </div>
            </motion.div>

            {/* Expert SEO dedie — wide dark */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="col-span-2 md:col-span-3 row-span-1 rounded-3xl p-6 md:p-8 flex flex-col justify-between bg-gray-900 dark:bg-white/[0.05] border border-gray-800 dark:border-white/[0.08] hover:shadow-xl transition-shadow duration-300"
            >
              <Search className="w-8 h-8 text-[#0066FF]" />
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Expert SEO dedie</h3>
                <p className="text-sm text-gray-400">Un seul interlocuteur, suivi quotidien de vos positions Google.</p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* FAQ Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900 dark:text-white">
            Questions <span className="text-[#0066FF]">Frequentes</span> sur le SEO
          </h2>

          <FAQSection faqs={faqData} />
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
            Premier echange gratuit et sans engagement. Devis sous 24h.
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
              to="/tarifs"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#0066FF] text-white font-bold shadow-lg shadow-[#0066FF]/25 hover:bg-[#0055DD] transition-colors"
            >
              Voir les tarifs
            </Link>
          </div>
        </motion.section>

      </div>
    </div>
  );
}
