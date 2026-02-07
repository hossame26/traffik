import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  Code2,
  Zap,
  Shield,
  Smartphone,
  Search,
  Gauge,
  Layers,
  MessageCircle,
  ChevronDown,
  CheckCircle2,
  ArrowRight,
  Globe,
  RefreshCw,
  Database,
  Lock
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

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      className="border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden"
      initial={false}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 dark:hover:bg-white/[0.02] transition-colors"
      >
        <span className="font-semibold text-lg pr-4">{question}</span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-[#0066FF]" />
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 pb-6 text-gray-600 dark:text-gray-400 leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

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
            Développeur React freelance en France, je conçois des applications web modernes,
            ultra-rapides et parfaitement optimisées pour le référencement. De la simple landing page
            à la plateforme complexe, chaque projet est construit sur mesure pour répondre exactement
            à vos objectifs business.
          </p>
        </motion.header>

        {/* Pourquoi React & Next.js */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pourquoi choisir React et Next.js pour votre projet web ?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
            React est la bibliothèque JavaScript la plus utilisée au monde, développée par Meta (Facebook)
            et adoptée par des géants comme Netflix, Airbnb, Uber et Spotify. Combiné avec Next.js,
            le framework de référence créé par Vercel, vous obtenez une stack technologique capable de
            propulser n'importe quel projet web vers l'excellence. Ce n'est pas un hasard si les plus grandes
            entreprises du monde entier font confiance à cette combinaison : React et Next.js offrent
            une flexibilité, une performance et une scalabilité inégalées sur le marché du développement web.
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
            En tant que développeur React freelance basé en France, j'utilise ces technologies au quotidien
            pour créer des applications web sur mesure qui dépassent les limites des CMS traditionnels comme
            WordPress ou Shopify. Là où ces plateformes imposent des contraintes de design, de performance
            et de fonctionnalités, React et Next.js vous donnent une liberté totale pour concevoir exactement
            l'expérience utilisateur que vous imaginez, sans aucun compromis.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Zap,
                title: 'Performance exceptionnelle',
                desc: 'Les applications React utilisent un DOM virtuel qui minimise les manipulations du navigateur. Résultat : des temps de chargement ultra-courts, un score Lighthouse proche de 100 et une expérience fluide qui retient vos visiteurs.'
              },
              {
                icon: Search,
                title: 'SEO optimisé avec Next.js',
                desc: 'Next.js intègre le Server-Side Rendering (SSR) et la génération statique (SSG) nativement. Vos pages sont pré-rendues côté serveur, ce qui permet à Google de les indexer parfaitement et d\'améliorer votre positionnement naturel.'
              },
              {
                icon: Smartphone,
                title: 'Responsive et mobile-first',
                desc: 'Chaque application est conçue en mobile-first. L\'interface s\'adapte parfaitement à tous les écrans : smartphone, tablette, desktop. Une expérience cohérente et optimale sur tous les appareils de vos utilisateurs.'
              },
              {
                icon: Shield,
                title: 'Sécurité et fiabilité',
                desc: 'L\'architecture React avec Next.js offre des protections intégrées contre les attaques XSS, CSRF et les injections. Les mises à jour régulières de l\'écosystème garantissent un niveau de sécurité toujours à la pointe.'
              }
            ].map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="p-6 rounded-2xl border border-gray-200 dark:border-white/10 hover:border-[#0066FF]/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0066FF]/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-[#0066FF]" />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Services détaillés */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mes services de développement React et Next.js
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
            Que vous ayez besoin d'une application web complète, d'un site vitrine haute performance
            ou d'une refonte de votre plateforme existante, je propose une gamme complète de services
            de développement React adaptés à chaque besoin et chaque budget. Chaque projet bénéficie
            d'une approche sur mesure, d'un code propre et maintenable, et d'un accompagnement complet
            du cahier des charges jusqu'à la mise en production.
          </p>

          <div className="space-y-8">
            {[
              {
                icon: Globe,
                title: 'Site vitrine React / Next.js',
                price: 'À partir de 600€',
                features: [
                  'Design sur mesure responsive et moderne',
                  'Animations fluides avec Framer Motion',
                  'Optimisation SEO complète (SSR/SSG)',
                  'Score Lighthouse 90+ garanti',
                  'Formulaire de contact fonctionnel',
                  'Hébergement et déploiement inclus'
                ]
              },
              {
                icon: Layers,
                title: 'Application web sur mesure (SPA)',
                price: 'À partir de 1500€',
                features: [
                  'Architecture React scalable et modulaire',
                  'Gestion d\'état avancée (Redux, Zustand)',
                  'Intégration API REST ou GraphQL',
                  'Authentification et gestion des rôles',
                  'Dashboard et interfaces interactives',
                  'Tests unitaires et d\'intégration'
                ]
              },
              {
                icon: RefreshCw,
                title: 'Migration et refonte vers React',
                price: 'Sur devis',
                features: [
                  'Audit complet de votre site existant',
                  'Migration progressive sans interruption',
                  'Amélioration des performances de 50 à 300%',
                  'Conservation du référencement acquis',
                  'Modernisation de l\'interface utilisateur',
                  'Formation à la gestion du nouveau site'
                ]
              },
              {
                icon: Database,
                title: 'Application full-stack Next.js',
                price: 'À partir de 3000€',
                features: [
                  'API Routes Next.js intégrées',
                  'Base de données (PostgreSQL, MongoDB)',
                  'Système de paiement (Stripe)',
                  'Espace membre et tableau de bord',
                  'Notifications en temps réel',
                  'Infrastructure cloud scalable'
                ]
              }
            ].map((service, i) => (
              <motion.div
                key={service.title}
                variants={fadeUp}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="p-8 rounded-2xl border border-gray-200 dark:border-white/10 hover:shadow-lg hover:shadow-[#0066FF]/5 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0066FF] to-purple-600 flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                  </div>
                  <span className="text-lg font-bold text-[#0066FF] whitespace-nowrap">{service.price}</span>
                </div>
                <ul className="grid md:grid-cols-2 gap-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                      <CheckCircle2 className="w-5 h-5 text-[#0066FF] flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Processus de travail */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comment se déroule un projet de développement React ?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
            Mon processus de développement est structuré pour garantir la transparence, la qualité
            et le respect des délais. À chaque étape, vous avez une visibilité totale sur l'avancement
            de votre projet. Je privilégie une communication directe et régulière, car un projet web
            réussi repose avant tout sur une collaboration fluide entre le développeur et le client.
          </p>

          <div className="space-y-6">
            {[
              {
                step: '01',
                title: 'Analyse et cahier des charges',
                desc: 'On définit ensemble vos objectifs, votre cible, les fonctionnalités nécessaires et le design souhaité. Je vous propose une architecture technique adaptée et un planning de réalisation détaillé.'
              },
              {
                step: '02',
                title: 'Maquettage et validation',
                desc: 'Je crée les maquettes de votre application ou site React. Vous validez chaque écran avant le début du développement. Les ajustements sont inclus jusqu\'à votre satisfaction complète.'
              },
              {
                step: '03',
                title: 'Développement itératif',
                desc: 'Le développement se fait par sprints avec des livraisons régulières. Vous testez chaque fonctionnalité en temps réel sur un environnement de préproduction accessible en ligne.'
              },
              {
                step: '04',
                title: 'Tests, optimisation et déploiement',
                desc: 'Tests approfondis sur tous les navigateurs et appareils, optimisation des performances, configuration SEO, puis mise en production sur l\'hébergement de votre choix.'
              },
              {
                step: '05',
                title: 'Suivi et maintenance',
                desc: 'Après le lancement, je reste disponible pour les ajustements, les mises à jour de sécurité et les évolutions futures de votre application. Un support réactif par WhatsApp ou email.'
              }
            ].map((item, i) => (
              <motion.div
                key={item.step}
                variants={fadeUp}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex gap-6 p-6 rounded-2xl border border-gray-200 dark:border-white/10"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-[#0066FF]/10 flex items-center justify-center">
                  <span className="text-xl font-bold text-[#0066FF]">{item.step}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Technologies */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Les technologies que j'utilise au quotidien
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
            Je travaille exclusivement avec des technologies modernes, éprouvées et maintenues activement
            par des communautés de développeurs parmi les plus actives au monde. Chaque outil est choisi
            pour sa fiabilité, sa performance et sa capacité à s'adapter aux besoins spécifiques de votre projet.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              'React 19', 'Next.js 15', 'TypeScript', 'Tailwind CSS',
              'Framer Motion', 'Node.js', 'PostgreSQL', 'MongoDB',
              'Stripe API', 'Vercel', 'GitHub Actions', 'Prisma ORM'
            ].map((tech, i) => (
              <motion.div
                key={tech}
                variants={fadeUp}
                custom={i * 0.05}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="p-4 rounded-xl bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 text-center font-medium"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Avantages concurrentiels */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pourquoi faire appel à un développeur React freelance ?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            Travailler avec un développeur React freelance plutôt qu'une agence web présente de nombreux
            avantages concrets pour votre projet et votre budget. Voici les principales raisons pour
            lesquelles mes clients choisissent de travailler directement avec moi :
          </p>

          <ul className="space-y-4 mb-8">
            {[
              'Un interlocuteur unique du début à la fin : pas de chef de projet intermédiaire, vous échangez directement avec le développeur qui code votre application.',
              'Des tarifs 30 à 50% inférieurs à ceux d\'une agence web classique, sans compromis sur la qualité du code ni sur les délais de livraison.',
              'Une réactivité maximale : je réponds sous 24h et suis disponible sur WhatsApp pour les échanges rapides et le suivi de projet.',
              'Un code propre, documenté et maintenable : votre application vous appartient à 100%, vous pouvez la faire évoluer librement.',
              'Une expertise spécialisée React/Next.js plutôt qu\'une connaissance généraliste dispersée sur dix technologies différentes.'
            ].map((item, i) => (
              <motion.li
                key={i}
                variants={fadeUp}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex items-start gap-3 text-gray-600 dark:text-gray-400"
              >
                <CheckCircle2 className="w-5 h-5 text-[#0066FF] flex-shrink-0 mt-1" />
                <span className="leading-relaxed">{item}</span>
              </motion.li>
            ))}
          </ul>

          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            Que vous soyez une startup qui lance son premier produit, une PME qui souhaite moderniser
            sa présence en ligne, ou un entrepreneur qui a besoin d'une application web spécifique,
            je m'adapte à votre contexte pour vous livrer exactement ce dont vous avez besoin.
            Mon objectif est simple : créer des applications web qui génèrent des résultats concrets
            pour votre activité.
          </p>
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

          <div className="space-y-4">
            <FAQItem
              question="Quelle est la différence entre un site React et un site WordPress ?"
              answer="Un site React est construit entièrement sur mesure avec du code JavaScript moderne. Contrairement à WordPress qui repose sur des thèmes et des plugins préfabriqués, React vous offre une liberté totale sur le design et les fonctionnalités. Les performances sont nettement supérieures : un site React charge en moyenne 2 à 5 fois plus vite qu'un site WordPress équivalent. Le SEO est également mieux maîtrisé grâce au rendu côté serveur de Next.js. En revanche, un site WordPress peut convenir si vous avez un budget très limité et des besoins simples (blog, site vitrine basique)."
            />
            <FAQItem
              question="Combien coûte le développement d'une application React sur mesure ?"
              answer="Les tarifs varient selon la complexité du projet. Un site vitrine React performant démarre à 500€. Une application web interactive avec fonctionnalités avancées (authentification, dashboard, API) se situe entre 1500€ et 5000€. Pour un projet full-stack complet avec base de données, paiement en ligne et espace membre, comptez à partir de 3000€. Je propose toujours un devis gratuit et détaillé après avoir analysé vos besoins spécifiques. Le paiement peut être échelonné en plusieurs fois."
            />
            <FAQItem
              question="Combien de temps faut-il pour développer un site React ?"
              answer="Les délais dépendent de l'envergure du projet. Un site vitrine React est livré en 1 à 2 semaines. Une application web avec des fonctionnalités personnalisées prend entre 3 et 6 semaines. Un projet full-stack complexe peut nécessiter 2 à 3 mois de développement. Je m'engage sur des délais précis dès le début du projet et je vous tiens informé de l'avancement à chaque étape grâce à des livraisons régulières sur un environnement de test."
            />
            <FAQItem
              question="Un site React est-il bien référencé sur Google ?"
              answer="Oui, à condition d'utiliser Next.js comme framework. Next.js propose le rendu côté serveur (SSR) et la génération de pages statiques (SSG), ce qui permet à Google d'indexer parfaitement toutes vos pages. J'intègre systématiquement les bonnes pratiques SEO : balises meta optimisées, données structurées (schema.org), sitemap XML automatique, temps de chargement optimisé, et architecture URL propre. Mes clients constatent régulièrement une amélioration de leur positionnement après la migration vers React/Next.js."
            />
            <FAQItem
              question="Est-ce que je peux modifier mon site React moi-même après la livraison ?"
              answer="Cela dépend du type de contenu à modifier. Pour les sites avec du contenu régulièrement mis à jour, j'intègre un CMS headless (comme Sanity, Strapi ou Notion) qui vous permet de modifier textes et images depuis une interface simple, sans toucher au code. Pour les modifications techniques (nouvelles fonctionnalités, changement de structure), il faudra faire appel à un développeur. Je propose également des forfaits de maintenance mensuels pour les mises à jour régulières et les évolutions de votre application."
            />
          </div>
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
                  to="/devis"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#0066FF] to-purple-600 text-white font-bold flex items-center justify-center gap-3 shadow-lg shadow-[#0066FF]/25"
                >
                  Estimer mon projet
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
              { to: '/devis', label: 'Calculateur de projet', desc: 'Estimez le coût de votre site ou application en ligne' },
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
