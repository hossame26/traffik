import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Check,
  MessageCircle,
  Globe,
  Palette,
  Shield,
  Zap,
  Search,
  Settings,
  Star,
  Clock,
  Users,
  TrendingUp,
  Layers,
  FileText,
  ShoppingCart
} from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import FAQSection from '../../components/common/FAQSection';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const FAQ_DATA = [
  {
    question: 'Combien coute un site WordPress en 2026 ?',
    answer:
      "Le prix d'un site WordPress varie selon la complexite du projet. Chez Traffik Web, nos tarifs commencent a 500€ pour un site vitrine simple d'une page. Un site vitrine complet de 5 a 10 pages se situe entre 300€ et 600€. Pour un site e-commerce avec WooCommerce, comptez entre 500€ et 1200€. Ces prix incluent l'installation, la configuration, le theme premium, l'optimisation SEO de base et la mise en ligne. C'est bien en dessous des tarifs pratiques par les agences web traditionnelles qui facturent souvent entre 2000€ et 5000€ pour un resultat equivalent."
  },
  {
    question: 'Quel theme WordPress choisir pour un site professionnel ?',
    answer:
      "Le choix du theme depend de votre activite et de vos objectifs. Nous travaillons principalement avec Astra, GeneratePress et Kadence qui offrent un excellent rapport performance/flexibilite. Ces themes sont legers (moins de 50 Ko), compatibles avec tous les constructeurs de pages (Elementor, Gutenberg) et optimises pour le SEO. Nous evitons les themes surcharges qui ralentissent votre site. Chaque theme est personnalise selon votre charte graphique : couleurs, typographies, mise en page. Vous recevez un site unique, pas un template generique."
  },
  {
    question: 'Quels plugins WordPress sont indispensables ?',
    answer:
      "Pour un site performant et securise, nous installons systematiquement : Yoast SEO ou Rank Math pour le referencement naturel, Wordfence ou Sucuri pour la securite, WP Rocket ou LiteSpeed Cache pour les performances, Imagify pour l'optimisation des images, et UpdraftPlus pour les sauvegardes automatiques. Selon vos besoins, nous ajoutons WooCommerce (e-commerce), Contact Form 7 ou WPForms (formulaires), WPML (multilangue) ou encore Bookly (reservation en ligne). Nous limitons le nombre de plugins au strict necessaire pour garder votre site rapide et stable."
  },
  {
    question: 'La maintenance WordPress est-elle incluse ?',
    answer:
      "La livraison de votre site inclut une periode de 30 jours de support gratuit pour les ajustements mineurs et questions. Apres cette periode, nous proposons un forfait maintenance mensuel a partir de 49€/mois qui comprend : les mises a jour WordPress, themes et plugins, la surveillance de securite 24/7, les sauvegardes hebdomadaires, le monitoring de disponibilite et les corrections de bugs. Sans maintenance reguliere, un site WordPress devient vulnerable aux failles de securite et aux problemes de compatibilite. C'est un investissement essentiel pour la perennite de votre site."
  },
  {
    question: 'Mon site WordPress sera-t-il bien reference sur Google ?',
    answer:
      "Absolument. Chaque site que nous creons est optimise SEO des la conception. Cela inclut : une structure de titres Hn correcte, des balises meta optimisees pour chaque page, un sitemap XML automatique, un fichier robots.txt configure, des URLs propres et lisibles, une vitesse de chargement optimale (score PageSpeed superieur a 90), un design responsive mobile-first, et le balisage Schema.org pour les rich snippets Google. WordPress est nativement l'un des CMS les plus SEO-friendly du marche. Combine avec notre expertise en referencement naturel, votre site aura toutes les chances de bien se positionner sur Google. Pour aller plus loin, decouvrez notre offre de referencement SEO mensuel."
  }
];

export default function WordPress() {

  return (
    <div className="min-h-screen bg-white dark:bg-[#050505] text-black dark:text-white">
      <SEOHead
        title="Creation Site WordPress Pas Cher | Site Vitrine a partir de 500€ | Traffik Web"
        description="Creation de site WordPress professionnel a partir de 500€. Site vitrine, blog, e-commerce WooCommerce. Freelance WordPress en France. Devis gratuit en 24h. Design sur mesure, SEO optimise, responsive mobile."
        canonical="https://traffik-web.fr/creation-site-wordpress"
        keywords="creation site wordpress, site vitrine wordpress, wordpress pas cher, wordpress freelance france, prix site wordpress, creation site web wordpress, site wordpress professionnel, developpeur wordpress freelance, agence wordpress pas cher, site vitrine prix"
      />

      <div className="max-w-4xl mx-auto py-20 px-4">
        {/* Back link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[#0066FF] hover:underline mb-10"
        >
          <ArrowLeft className="w-4 h-4" /> Retour a l'accueil
        </Link>

        {/* Hero Section */}
        <motion.div {...fadeUp}>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Creation de Site{' '}
            <span className="text-[#0066FF]">WordPress</span> Professionnel a
            partir de 500€
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
            Vous cherchez un <strong>freelance WordPress en France</strong> pour
            creer votre site web ? Traffik Web concoit des{' '}
            <strong>sites WordPress sur mesure</strong>, optimises pour le
            referencement Google, rapides et adaptes a tous les ecrans. Du
            simple site vitrine au site e-commerce complet avec WooCommerce,
            nous livrons des sites professionnels a des{' '}
            <strong>tarifs accessibles</strong> -- sans compromis sur la
            qualite.
          </p>
        </motion.div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-4 mb-16"
        >
          <motion.a
            href="https://wa.me/33635505374"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#0066FF] text-white font-bold rounded-full shadow-lg shadow-[#0066FF]/25 hover:shadow-[#0066FF]/40 transition-shadow"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <MessageCircle className="w-5 h-5" />
            Devis gratuit sur WhatsApp
          </motion.a>
          <Link
            to="/tarifs"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gray-200 dark:border-white/10 text-black dark:text-white font-bold rounded-full hover:border-[#0066FF] hover:text-[#0066FF] transition-colors"
          >
            Voir tous les tarifs
          </Link>
        </motion.div>

        {/* Pourquoi WordPress */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="mb-16"
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl font-bold mb-4"
          >
            Pourquoi choisir WordPress pour votre site web ?
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed"
          >
            WordPress propulse plus de <strong>43% des sites web dans le monde</strong> en 2026. Ce n'est pas un hasard. Ce CMS open source offre une flexibilite inegalee, des milliers de themes et plugins, et une communaute massive de developpeurs. Que vous soyez artisan, coach, consultant, restaurateur ou e-commercant, WordPress s'adapte a tous les metiers et tous les budgets. C'est la solution ideale pour creer un{' '}
            <strong>site vitrine professionnel</strong> sans exploser votre budget.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                icon: Globe,
                title: '43% du web mondial',
                desc: 'Le CMS le plus utilise au monde, fiable et eprouve par des millions de sites.'
              },
              {
                icon: Palette,
                title: 'Design personnalisable',
                desc: 'Des milliers de themes premium adaptes a chaque secteur d\'activite.'
              },
              {
                icon: Search,
                title: 'SEO natif puissant',
                desc: 'Structure optimisee pour Google avec des plugins SEO de pointe comme Yoast et Rank Math.'
              },
              {
                icon: Shield,
                title: 'Securite renforcee',
                desc: 'Mises a jour regulieres, plugins de securite, sauvegardes automatiques.'
              },
              {
                icon: Zap,
                title: 'Performance optimale',
                desc: 'Cache avance, optimisation des images, temps de chargement inferieur a 2 secondes.'
              },
              {
                icon: Settings,
                title: 'Facile a gerer',
                desc: 'Interface intuitive : modifiez vos contenus, ajoutez des pages sans toucher au code.'
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  className="p-6 rounded-2xl border border-gray-200 dark:border-white/10 hover:border-[#0066FF]/30 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-xl bg-[#0066FF]/10 text-[#0066FF]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Nos offres WordPress */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-2">
            Nos formules WordPress
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-8">
            Tarifs transparents, pas de frais caches.
          </p>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                name: 'Site One Page',
                price: '500',
                icon: FileText,
                description: 'Carte de visite en ligne',
                features: [
                  'Page unique responsive',
                  'Design personnalise',
                  'Formulaire de contact',
                  'SEO de base',
                  'Livraison 3-5 jours'
                ]
              },
              {
                name: 'Site Vitrine',
                price: '500',
                icon: Globe,
                description: 'Presence pro complete',
                popular: true,
                features: [
                  '5 a 10 pages sur mesure',
                  'Theme premium',
                  'Blog integre',
                  'SEO complete',
                  'Google Analytics'
                ]
              },
              {
                name: 'Site E-commerce',
                price: '500',
                icon: ShoppingCart,
                description: 'Boutique WooCommerce',
                features: [
                  'Boutique complete',
                  'Paiement securise',
                  'Gestion stocks',
                  'Pages produits SEO',
                  'Formation incluse'
                ]
              }
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
                    <div className="w-11 h-11 rounded-xl bg-[#0066FF]/10 dark:bg-[#0066FF]/20 flex items-center justify-center">
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
                      <span className="text-4xl font-extrabold text-gray-900 dark:text-white">{plan.price}€</span>
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
                      `Bonjour, je suis interesse par l'offre ${plan.name} WordPress. Pouvez-vous m'envoyer un devis ?`
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

        {/* Notre processus */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-[#0066FF] border border-[#0066FF]/20 bg-[#0066FF]/5 mb-4">
              Processus
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              5 Etapes. <span className="text-[#0066FF]">0 Surprise.</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              Une methodologie eprouvee pour des projets livres dans les temps.
            </p>
          </div>

          {/* Horizontal steps */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4 mb-10">
            {[
              { icon: MessageCircle, step: '01', title: 'Echange', desc: 'On discute de vos objectifs et on definit la strategie.' },
              { icon: Palette, step: '02', title: 'Design', desc: 'Maquettes sur-mesure validees avant developpement.' },
              { icon: Layers, step: '03', title: 'Creation', desc: 'Developpement avec les meilleures technologies.' },
              { icon: Search, step: '04', title: 'Tests', desc: 'Performance, securite et compatibilite verifiees.' },
              { icon: Zap, step: '05', title: 'Lancement', desc: 'Mise en ligne et suivi des performances.' }
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

          {/* CTA */}
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

        {/* Pourquoi nous choisir — Bento Grid */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Pourquoi <span className="text-[#0066FF]">Traffik Web</span> ?
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              Sites WordPress pro a prix freelance. Sans compromis.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px]">
            {/* Prix — large card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="col-span-2 row-span-1 rounded-3xl p-6 md:p-8 flex flex-col justify-between bg-gradient-to-br from-[#0066FF]/[0.08] to-[#A855F7]/[0.06] dark:from-[#0066FF]/[0.12] dark:to-[#A855F7]/[0.08] border border-[#0066FF]/15 dark:border-[#0066FF]/20 relative overflow-hidden group hover:shadow-lg hover:shadow-[#0066FF]/5 transition-shadow duration-300"
            >
              <TrendingUp className="w-8 h-8 text-[#0066FF] relative z-10" />
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">-70% vs agence</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Sites complets a partir de 500€. Qualite pro, prix freelance.</p>
              </div>
            </motion.div>

            {/* Livraison */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="col-span-1 row-span-1 rounded-3xl p-5 md:p-6 flex flex-col justify-between bg-gray-50 dark:bg-white/[0.05] border border-gray-200 dark:border-white/[0.08] relative overflow-hidden group hover:shadow-lg hover:border-gray-300 dark:hover:border-white/[0.12] transition-all duration-300"
            >
              <Clock className="w-7 h-7 text-[#0066FF] relative z-10" />
              <div className="relative z-10">
                <h3 className="font-bold text-gray-900 dark:text-white mb-0.5">3-15 jours</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">Livraison rapide garantie</p>
              </div>
            </motion.div>

            {/* SEO */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="col-span-1 row-span-1 rounded-3xl p-5 md:p-6 flex flex-col justify-between bg-gray-50 dark:bg-white/[0.05] border border-gray-200 dark:border-white/[0.08] relative overflow-hidden group hover:shadow-lg hover:border-gray-300 dark:hover:border-white/[0.12] transition-all duration-300"
            >
              <Search className="w-7 h-7 text-[#A855F7] relative z-10" />
              <div className="relative z-10">
                <h3 className="font-bold text-gray-900 dark:text-white mb-0.5">SEO natif</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">Optimise Google des le depart</p>
              </div>
            </motion.div>

            {/* Support */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="col-span-1 row-span-1 rounded-3xl p-5 md:p-6 flex flex-col justify-between bg-gray-50 dark:bg-white/[0.05] border border-gray-200 dark:border-white/[0.08] relative overflow-hidden group hover:shadow-lg hover:border-gray-300 dark:hover:border-white/[0.12] transition-all duration-300"
            >
              <Users className="w-7 h-7 text-[#0066FF] relative z-10" />
              <div className="relative z-10">
                <h3 className="font-bold text-gray-900 dark:text-white mb-0.5">Support 24h</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">WhatsApp, email, visio</p>
              </div>
            </motion.div>

            {/* Securite — wide card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="col-span-2 md:col-span-3 row-span-1 rounded-3xl p-6 md:p-8 flex flex-col justify-between bg-gray-900 dark:bg-white/[0.05] border border-gray-800 dark:border-white/[0.08] relative overflow-hidden group hover:shadow-xl transition-shadow duration-300"
            >
              <Shield className="w-8 h-8 text-[#0066FF] relative z-10" />
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-1">Securite & performance</h3>
                <p className="text-sm text-gray-400">SSL, sauvegardes auto, plugins securite, cache avance. Score PageSpeed 90+.</p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Types de sites WordPress */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="mb-16"
        >
          <motion.h2 variants={fadeUp} className="text-3xl font-bold mb-4">
            Quel type de site WordPress creons-nous ?
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed"
          >
            WordPress est polyvalent. Voici les types de sites que nous realisons le plus souvent pour nos clients en France :
          </motion.p>

          <motion.div variants={fadeUp}>
            <ul className="space-y-3">
              {[
                'Site vitrine pour artisans, commercants et professions liberales',
                'Site portfolio pour photographes, designers et createurs',
                'Blog professionnel ou magazine en ligne avec monetisation',
                'Site e-commerce avec WooCommerce (jusqu\'a 500 produits)',
                'Site de reservation pour restaurants, salons, coachs et therapeutes',
                'Landing page de conversion pour campagnes publicitaires',
                'Site institutionnel pour associations et collectivites',
                'Annuaire professionnel ou site de petites annonces',
                'Site multilingue pour les entreprises a l\'international'
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-600 dark:text-gray-400"
                >
                  <Check className="w-5 h-5 text-[#0066FF] flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.section>

        {/* WordPress vs alternatives */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="mb-16"
        >
          <motion.h2 variants={fadeUp} className="text-3xl font-bold mb-4">
            WordPress ou une autre solution ? Comparaison honnete
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed"
          >
            WordPress n'est pas toujours la meilleure option. Nous sommes transparents sur ce point car notre objectif est de vous recommander la solution la plus adaptee a votre projet, pas de vous vendre une technologie.
          </motion.p>

          <motion.div variants={fadeUp} className="space-y-4">
            <div className="p-6 rounded-2xl border border-gray-200 dark:border-white/10">
              <h3 className="font-bold mb-2">WordPress vs Shopify</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Pour le <strong>e-commerce pur</strong>, Shopify est souvent plus simple a gerer au quotidien avec sa gestion des paiements integree. WordPress + WooCommerce offre plus de flexibilite et de controle, mais demande un peu plus de maintenance. Si votre activite est principalement la vente en ligne,{' '}
                <Link to="/creation-site-shopify" className="text-[#0066FF] hover:underline">
                  decouvrez notre offre Shopify
                </Link>.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-gray-200 dark:border-white/10">
              <h3 className="font-bold mb-2">WordPress vs React / Next.js</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Pour les projets necessitant des <strong>performances extremes</strong>, des fonctionnalites sur mesure ou une web app complexe, React et Next.js sont superieurs. Le budget est plus eleve, mais le resultat est une application web ultra-rapide et sur mesure.{' '}
                <Link to="/developpement-react-nextjs" className="text-[#0066FF] hover:underline">
                  En savoir plus sur nos developpements React / Next.js
                </Link>.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-gray-200 dark:border-white/10">
              <h3 className="font-bold mb-2">WordPress : le meilleur choix pour 80% des projets</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Pour la majorite des <strong>sites vitrines, blogs et petits e-commerces</strong>, WordPress reste le choix le plus equilibre entre cout, fonctionnalites, facilite de gestion et potentiel SEO. C'est notre recommandation par defaut pour les entrepreneurs, PME et independants qui veulent un site professionnel sans se ruiner.
              </p>
            </div>
          </motion.div>
        </motion.section>

        {/* SEO Section */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="mb-16"
        >
          <motion.h2 variants={fadeUp} className="text-3xl font-bold mb-4">
            Referencement SEO : votre site WordPress visible sur Google
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed"
          >
            Un beau site ne sert a rien si personne ne le trouve. C'est pourquoi chaque site WordPress que nous creons integre les bonnes pratiques SEO des la phase de developpement. Notre approche du referencement naturel pour WordPress comprend :
          </motion.p>
          <motion.ul variants={fadeUp} className="space-y-2 mb-6">
            {[
              'Recherche de mots-cles pertinents pour votre activite et votre zone geographique',
              'Optimisation des balises title et meta description pour chaque page',
              'Structure de titres H1, H2, H3 hierarchisee et semantique',
              'Maillage interne strategique entre vos pages',
              'Optimisation des images (compression, attributs alt, format WebP)',
              'Temps de chargement inferieur a 2 secondes (score PageSpeed 90+)',
              'Balisage Schema.org pour les rich snippets dans les resultats Google',
              'Configuration de Google Search Console et Google Analytics'
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-gray-600 dark:text-gray-400 text-sm"
              >
                <Check className="w-4 h-4 text-[#0066FF] flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </motion.ul>
          <motion.p variants={fadeUp} className="text-gray-600 dark:text-gray-400 leading-relaxed">
            Pour un accompagnement SEO mensuel complet (creation de contenu, backlinks, suivi de positionnement), consultez notre{' '}
            <Link to="/referencement-seo" className="text-[#0066FF] hover:underline">
              offre de referencement SEO
            </Link>.
          </motion.p>
        </motion.section>

        {/* FAQ Section */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="mb-16"
        >
          <motion.h2 variants={fadeUp} className="text-3xl font-bold mb-8">
            Questions frequentes sur la creation de site WordPress
          </motion.h2>

          <FAQSection faqs={FAQ_DATA} />
        </motion.section>

        {/* Internal Links Section */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="mb-16"
        >
          <motion.h2 variants={fadeUp} className="text-3xl font-bold mb-4">
            Decouvrez nos autres services web
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed"
          >
            Traffik Web propose une gamme complete de services pour accompagner votre presence en ligne. Chaque service peut etre combine avec votre site WordPress pour maximiser vos resultats.
          </motion.p>

          <motion.div variants={fadeUp} className="grid sm:grid-cols-2 gap-3">
            {[
              {
                to: '/creation-site-shopify',
                label: 'Creation site Shopify',
                desc: 'E-commerce cle en main'
              },
              {
                to: '/developpement-react-nextjs',
                label: 'Developpement React / Next.js',
                desc: 'Applications web sur mesure'
              },
              {
                to: '/referencement-seo',
                label: 'Referencement SEO',
                desc: 'Visibilite Google durable'
              },
              {
                to: '/tarifs',
                label: 'Grille tarifaire complete',
                desc: 'Tous nos prix detailles'
              },
              {
                to: '/blog',
                label: 'Blog et ressources',
                desc: 'Conseils web et SEO gratuits'
              }
            ].map((link, index) => (
              <Link
                key={index}
                to={link.to}
                className="p-4 rounded-xl border border-gray-200 dark:border-white/10 hover:border-[#0066FF] hover:bg-[#0066FF]/5 transition-all group"
              >
                <div className="font-bold group-hover:text-[#0066FF] transition-colors">
                  {link.label}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {link.desc}
                </div>
              </Link>
            ))}
          </motion.div>
        </motion.section>

        {/* Final CTA */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center py-12 px-6 rounded-3xl bg-gradient-to-br from-[#0066FF]/10 to-purple-600/10 border border-[#0066FF]/20"
        >
          <h2 className="text-3xl font-bold mb-4">
            Pret a lancer votre site WordPress ?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Contactez-nous des maintenant pour discuter de votre projet. Devis gratuit en moins de 24 heures. Sites WordPress a partir de{' '}
            <strong className="text-[#0066FF]">500€</strong>. Paiement en plusieurs fois possible.
          </p>
          <motion.a
            href="https://wa.me/33635505374"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 bg-[#0066FF] text-white font-bold text-lg rounded-full shadow-lg shadow-[#0066FF]/30 hover:shadow-[#0066FF]/50 transition-shadow"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <MessageCircle className="w-6 h-6" />
            Demarrer mon projet WordPress
          </motion.a>
          <p className="text-sm text-gray-400 mt-4">
            Reponse garantie en moins de 24h -- Devis 100% gratuit
          </p>
        </motion.section>
      </div>
    </div>
  );
}
