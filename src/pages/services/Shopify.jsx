import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ShoppingCart,
  Check,
  MessageCircle,
  Clock,
  Shield,
  Zap,
  TrendingUp,
  CreditCard,
  Package,
  Search,
  ChevronDown,
  ChevronUp,
  Palette,
  BarChart3,
  Globe,
  Headphones,
  Settings
} from 'lucide-react';
import SEOHead from '../../components/SEOHead';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.6 }
};

const staggerChildren = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { staggerChildren: 0.1 }
};

function FAQItem({ question, answer }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 dark:hover:bg-white/[0.02] transition-colors"
      >
        <span className="font-semibold text-black dark:text-white pr-4">{question}</span>
        {open ? (
          <ChevronUp className="w-5 h-5 text-[#0066FF] flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
        )}
      </button>
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="px-6 pb-5"
        >
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{answer}</p>
        </motion.div>
      )}
    </div>
  );
}

export default function Shopify() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#050505] text-black dark:text-white">
      <SEOHead
        title="Cr&eacute;ation Site Shopify Pas Cher | E-commerce &agrave; partir de 250&euro; | Traffik Web"
        description="Cr&eacute;ation de boutique Shopify professionnelle &agrave; partir de 250&euro;. Freelance en France, je cr&eacute;e votre site e-commerce Shopify cl&eacute; en main : design sur mesure, configuration compl&egrave;te, paiement s&eacute;curis&eacute; et livraison rapide en 5 jours."
        canonical="https://traffik-web.fr/creation-site-shopify"
        keywords="cr&eacute;ation site shopify, boutique shopify, site e-commerce shopify, prix site shopify, shopify freelance france, cr&eacute;er boutique en ligne shopify, shopify pas cher, d&eacute;veloppeur shopify, agence shopify france, shopify expert freelance"
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
        <motion.div {...fadeInUp}>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600">
              <ShoppingCart className="w-7 h-7 text-white" />
            </div>
            <span className="text-sm font-medium text-[#0066FF] bg-[#0066FF]/10 px-3 py-1 rounded-full">
              E-commerce Shopify
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            Creation de Site Shopify Pas Cher :{' '}
            <span className="text-[#0066FF]">Votre Boutique E-commerce a partir de 250&#8364;</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
            Vous cherchez un <strong>freelance Shopify en France</strong> pour creer votre boutique en ligne sans vous ruiner ? Traffik Web vous propose la <strong>creation de site Shopify professionnel</strong> a partir de 250&#8364;, livree en 5 a 7 jours. Un site e-commerce complet, pret a vendre, avec paiement securise et design soigne.
          </p>

          {/* CTA WhatsApp */}
          <motion.a
            href="https://wa.me/33635505374"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#0066FF] text-white font-bold rounded-full hover:shadow-lg hover:shadow-[#0066FF]/25 transition-all"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <MessageCircle className="w-5 h-5" />
            Discuter de mon projet sur WhatsApp
          </motion.a>
        </motion.div>

        {/* Separator */}
        <div className="h-px bg-gray-200 dark:bg-white/10 my-16" />

        {/* Why Shopify */}
        <motion.section {...fadeInUp}>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Pourquoi choisir Shopify pour votre boutique en ligne ?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
            Shopify est la plateforme e-commerce la plus populaire au monde, utilisee par plus de 4 millions de boutiques dans 175 pays. Ce n'est pas un hasard : Shopify offre une solution complete pour vendre en ligne sans aucune competence technique. Contrairement a WooCommerce ou PrestaShop, vous n'avez pas a gerer l'hebergement, les mises a jour de securite ou la configuration serveur. Tout est inclus et optimise pour la vente.
          </p>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
            En tant que <strong>developpeur Shopify freelance en France</strong>, je configure votre boutique de A a Z pour que vous puissiez vous concentrer sur l'essentiel : vendre vos produits. La <strong>creation de site Shopify</strong> que je propose inclut la mise en place complete de votre catalogue, les modes de paiement, la livraison, et un design professionnel qui inspire confiance a vos visiteurs.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {[
              { icon: Zap, title: 'Ultra rapide', desc: 'Hebergement mondial avec CDN integre. Temps de chargement inferieur a 2 secondes.' },
              { icon: Shield, title: 'Securise', desc: 'Certificat SSL gratuit, conformite PCI DSS, paiements 100% securises.' },
              { icon: TrendingUp, title: 'Scalable', desc: 'De 1 a 100 000 produits, Shopify s\'adapte a votre croissance sans ralentir.' }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl border border-gray-200 dark:border-white/10 hover:border-[#0066FF]/30 transition-colors"
              >
                <item.icon className="w-8 h-8 text-[#0066FF] mb-4" />
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* What's included */}
        <motion.section {...fadeInUp} className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Que comprend la creation de votre site Shopify a 250&#8364; ?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
            Mon offre de <strong>creation de boutique Shopify</strong> est un forfait complet qui couvre tout ce dont vous avez besoin pour lancer votre activite e-commerce. Pas de frais caches, pas de surprises. Voici ce qui est inclus dans le tarif de base :
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {[
              { icon: Palette, text: 'Installation et configuration complete de votre boutique Shopify' },
              { icon: Package, text: 'Ajout de vos produits (jusqu\'a 30 produits dans l\'offre de base)' },
              { icon: CreditCard, text: 'Configuration des moyens de paiement (Stripe, PayPal, Shopify Payments)' },
              { icon: Globe, text: 'Configuration des zones et tarifs de livraison' },
              { icon: Settings, text: 'Theme premium installe et personnalise a vos couleurs' },
              { icon: Search, text: 'Optimisation SEO de base (titres, meta descriptions, URLs)' },
              { icon: Shield, text: 'Pages legales : CGV, mentions legales, politique de confidentialite' },
              { icon: BarChart3, text: 'Integration Google Analytics et Facebook Pixel' },
              { icon: Headphones, text: 'Formation a l\'interface d\'administration Shopify (30 min visio)' },
              { icon: Clock, text: 'Support apres livraison pendant 7 jours' }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 dark:bg-white/[0.02]"
              >
                <div className="p-2 rounded-lg bg-[#0066FF]/10 flex-shrink-0">
                  <item.icon className="w-4 h-4 text-[#0066FF]" />
                </div>
                <span className="text-sm text-gray-700 dark:text-gray-300">{item.text}</span>
              </motion.div>
            ))}
          </div>

          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            Ce forfait est ideal pour les entrepreneurs, les artisans, les createurs de marque et tous ceux qui veulent <strong>creer une boutique en ligne Shopify</strong> rapidement et a moindre cout. Besoin de plus de produits, d'un design entierement sur mesure ou d'applications specifiques ? Je propose des options supplementaires adaptees a chaque projet.
          </p>
        </motion.section>

        {/* Process */}
        <motion.section {...fadeInUp} className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Comment se deroule la creation de votre boutique Shopify ?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
            Mon processus de <strong>creation de site e-commerce Shopify</strong> est simple, rapide et transparent. En tant que <strong>freelance Shopify</strong>, je travaille en direct avec vous, sans intermediaire. Voici les etapes :
          </p>

          <div className="space-y-6 mb-8">
            {[
              {
                step: '01',
                title: 'Briefing et devis gratuit',
                desc: 'On echange par WhatsApp ou visio pour comprendre votre projet : vos produits, votre cible, vos objectifs de vente. Je vous envoie un devis detaille sous 24h.'
              },
              {
                step: '02',
                title: 'Design et configuration',
                desc: 'Je cree votre boutique Shopify avec un theme premium adapte a votre secteur. Je configure les couleurs, la typographie, la navigation et l\'ensemble de l\'experience utilisateur.'
              },
              {
                step: '03',
                title: 'Ajout des produits et paiements',
                desc: 'J\'importe vos produits avec photos, descriptions et variantes. Je configure les moyens de paiement et les options de livraison selon vos besoins.'
              },
              {
                step: '04',
                title: 'Tests et livraison',
                desc: 'Je teste entierement votre boutique : parcours d\'achat, paiement, emails de confirmation, responsive mobile. Vous validez, et votre site est en ligne.'
              },
              {
                step: '05',
                title: 'Formation et support',
                desc: 'Je vous forme a l\'utilisation de l\'interface Shopify pour que vous soyez autonome. J\'assure un support de 7 jours apres la mise en ligne.'
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-5 p-6 rounded-2xl border border-gray-200 dark:border-white/10"
              >
                <div className="text-3xl font-black text-[#0066FF]/20 flex-shrink-0">{item.step}</div>
                <div>
                  <h3 className="font-bold mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Pricing overview */}
        <motion.section {...fadeInUp} className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Prix creation site Shopify : des tarifs freelance transparents
          </h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
            Faire appel a un <strong>expert Shopify freelance</strong> plutot qu'a une agence, c'est economiser entre 50% et 70% sur le prix de votre site e-commerce. Pas de frais de structure, pas de chef de projet intermediaire : vous travaillez directement avec le developpeur qui cree votre boutique. Voici mes tarifs pour la <strong>creation de site Shopify</strong> :
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {[
              {
                name: 'Starter',
                price: '250',
                desc: 'Ideal pour tester le e-commerce',
                features: [
                  'Jusqu\'a 30 produits',
                  'Theme premium configure',
                  'Paiements et livraison',
                  'SEO de base',
                  'Pages legales',
                  'Livraison en 5 jours'
                ]
              },
              {
                name: 'Business',
                price: '500',
                desc: 'Pour les boutiques ambitieuses',
                features: [
                  'Jusqu\'a 100 produits',
                  'Design personnalise avance',
                  'Blog integre',
                  'Email marketing (Klaviyo)',
                  'Apps Shopify configurees',
                  'Livraison en 7 jours'
                ],
                popular: true
              },
              {
                name: 'Premium',
                price: '900',
                desc: 'Boutique sur mesure complete',
                features: [
                  'Produits illimites',
                  'Design 100% sur mesure',
                  'Multi-langue / multi-devise',
                  'Integrations avancees',
                  'Formation complete (1h)',
                  'Support 30 jours'
                ]
              }
            ].map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative p-6 rounded-2xl border-2 ${
                  plan.popular
                    ? 'border-[#0066FF] bg-[#0066FF]/5'
                    : 'border-gray-200 dark:border-white/10'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0066FF] text-white text-xs font-bold px-4 py-1 rounded-full">
                    Populaire
                  </div>
                )}
                <h3 className="font-bold text-lg mb-1">{plan.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{plan.desc}</p>
                <div className="text-3xl font-black text-[#0066FF] mb-6">{plan.price}&#8364;</div>
                <ul className="space-y-3">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <Check className="w-4 h-4 text-[#0066FF] mt-0.5 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
            Ces tarifs n'incluent pas l'abonnement Shopify lui-meme (a partir de 36&#8364;/mois pour le plan Basic) ni le nom de domaine (environ 12&#8364;/an). En revanche, tout le travail de creation, configuration et optimisation est compris. Consultez ma <Link to="/tarifs" className="text-[#0066FF] hover:underline font-medium">page tarifs</Link> pour voir l'ensemble de mes prestations.
          </p>
        </motion.section>

        {/* Shopify vs alternatives */}
        <motion.section {...fadeInUp} className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Shopify vs WordPress vs Site sur mesure : quel choix pour votre e-commerce ?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
            La question revient souvent : faut-il choisir Shopify, WordPress avec WooCommerce, ou un developpement sur mesure en React/Next.js ? La reponse depend de votre projet, de votre budget et de vos ambitions. Voici un comparatif honnete pour vous aider a decider.
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-gray-200 dark:border-white/10">
                  <th className="text-left py-3 pr-4 font-bold">Critere</th>
                  <th className="text-left py-3 px-4 font-bold text-[#0066FF]">Shopify</th>
                  <th className="text-left py-3 px-4 font-bold">WordPress</th>
                  <th className="text-left py-3 pl-4 font-bold">Sur mesure</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 dark:text-gray-400">
                <tr className="border-b border-gray-100 dark:border-white/5">
                  <td className="py-3 pr-4 font-medium text-black dark:text-white">Prix creation</td>
                  <td className="py-3 px-4">A partir de 250&#8364;</td>
                  <td className="py-3 px-4">A partir de 500&#8364;</td>
                  <td className="py-3 pl-4">A partir de 800&#8364;</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-white/5">
                  <td className="py-3 pr-4 font-medium text-black dark:text-white">Delai</td>
                  <td className="py-3 px-4">5-7 jours</td>
                  <td className="py-3 px-4">7-14 jours</td>
                  <td className="py-3 pl-4">14-30 jours</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-white/5">
                  <td className="py-3 pr-4 font-medium text-black dark:text-white">Maintenance</td>
                  <td className="py-3 px-4">Automatique</td>
                  <td className="py-3 px-4">Manuelle</td>
                  <td className="py-3 pl-4">Manuelle</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-white/5">
                  <td className="py-3 pr-4 font-medium text-black dark:text-white">Ideal pour</td>
                  <td className="py-3 px-4">E-commerce pur</td>
                  <td className="py-3 px-4">Site vitrine + blog</td>
                  <td className="py-3 pl-4">Projets complexes</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
            <strong>Shopify</strong> est le meilleur choix si votre objectif principal est de vendre des produits en ligne. La plateforme gere l'hebergement, la securite et les mises a jour pour vous. Si vous avez plutot besoin d'un site vitrine avec blog, decouvrez mon offre de <Link to="/creation-site-wordpress" className="text-[#0066FF] hover:underline font-medium">creation de site WordPress</Link>. Et pour un projet web sur mesure avec des performances maximales, explorez le <Link to="/developpement-react-nextjs" className="text-[#0066FF] hover:underline font-medium">developpement React et Next.js</Link>.
          </p>
        </motion.section>

        {/* SEO & Shopify */}
        <motion.section {...fadeInUp} className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Referencement SEO de votre boutique Shopify
          </h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
            Avoir un beau <strong>site e-commerce Shopify</strong> ne sert a rien si personne ne le trouve sur Google. C'est pourquoi chaque boutique que je cree est optimisee pour le referencement naturel des la conception. Je ne me contente pas d'installer un theme : je travaille chaque page pour maximiser votre visibilite.
          </p>

          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
            Concretement, l'optimisation SEO de votre <strong>boutique Shopify</strong> comprend :
          </p>

          <ul className="space-y-3 mb-8">
            {[
              'Structure de URLs propres et optimisees pour chaque produit et collection',
              'Balises title et meta description uniques sur chaque page',
              'Balisage schema.org (Product, BreadcrumbList, FAQ) pour les rich snippets Google',
              'Optimisation des images : compression, attributs alt, noms de fichiers descriptifs',
              'Vitesse de chargement optimisee : choix du theme performant, lazy loading',
              'Sitemap XML automatique et robots.txt configure',
              'Redirection 301 si migration depuis un autre site',
              'Architecture de navigation optimisee pour le crawl Google'
            ].map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-3 text-gray-600 dark:text-gray-400"
              >
                <Check className="w-4 h-4 text-[#0066FF] mt-1 flex-shrink-0" />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>

          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            Le SEO est un travail de long terme. Pour aller plus loin, je propose egalement un accompagnement SEO mensuel avec suivi de positionnement, creation de contenu optimise et strategie de backlinks. N'hesitez pas a consulter mon <Link to="/blog" className="text-[#0066FF] hover:underline font-medium">blog</Link> pour des conseils gratuits sur le referencement.
          </p>
        </motion.section>

        {/* Types of projects */}
        <motion.section {...fadeInUp} className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Pour quel type de projet Shopify est-il fait ?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
            Shopify est la solution ideale pour une grande variete de projets e-commerce. Que vous lanciez votre premiere boutique ou que vous migriez depuis une autre plateforme, la flexibilite de Shopify s'adapte a pratiquement tous les secteurs. Voici les types de projets que je realise regulierement :
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {[
              { title: 'Dropshipping', desc: 'Integration avec DSers, Spocket ou CJ Dropshipping pour vendre sans stock. Configuration automatisee des commandes fournisseurs.' },
              { title: 'Marque de vetements', desc: 'Boutique avec gestion des tailles, couleurs et variantes. Lookbook, guide des tailles, systeme de collections saisonnieres.' },
              { title: 'Cosmetiques et beaute', desc: 'Fiches produits detaillees avec ingredients, certifications et avis clients. Integration Instagram Shopping.' },
              { title: 'Alimentation et artisanat', desc: 'Gestion des dates de peremption, poids variables, paniers decouverte et abonnements recurrents.' },
              { title: 'Bijoux et accessoires', desc: 'Zoom haute resolution sur les produits, personnalisation (gravure, taille), certificats d\'authenticite.' },
              { title: 'Print on demand', desc: 'Integration avec Printful ou Printify pour la vente de produits personnalises sans gestion de stock.' }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-5 rounded-2xl border border-gray-200 dark:border-white/10"
              >
                <h3 className="font-bold mb-2 text-black dark:text-white">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Why me */}
        <motion.section {...fadeInUp} className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Pourquoi faire appel a un freelance Shopify plutot qu'a une agence ?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
            Les agences web facturent la creation d'un site Shopify entre 2 000&#8364; et 10 000&#8364;. Pourquoi ? Parce qu'elles doivent payer des locaux, des commerciaux, des chefs de projet et des designers. En tant que <strong>freelance Shopify en France</strong>, je n'ai pas ces frais de structure. Le resultat : un travail de qualite equivalente, a une fraction du prix.
          </p>

          <div className="p-6 rounded-2xl bg-[#0066FF]/5 border border-[#0066FF]/20 mb-8">
            <h3 className="font-bold text-lg mb-4 text-[#0066FF]">Les avantages du freelance</h3>
            <ul className="space-y-3">
              {[
                'Interlocuteur unique : vous echangez directement avec le developpeur, pas avec un commercial',
                'Reactivite : reponse sous 2h en semaine, pas de file d\'attente comme en agence',
                'Prix justes : pas de marge d\'intermediaire, vous payez le travail reellement effectue',
                'Flexibilite : on s\'adapte a vos horaires, vos urgences, vos changements de derniere minute',
                'Suivi personnalise : je connais votre projet en detail, pas besoin de tout re-expliquer a chaque echange'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                  <Check className="w-4 h-4 text-[#0066FF] mt-1 flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        {/* CTA mid-page */}
        <motion.section
          {...fadeInUp}
          className="mt-16 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-[#0066FF] to-blue-700 text-white text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Pret a lancer votre boutique Shopify ?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Discutons de votre projet gratuitement. Je vous reponds sous 2 heures et vous envoie un devis detaille sous 24h. Pas d'engagement, pas de surprise.
          </p>
          <motion.a
            href="https://wa.me/33635505374"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#0066FF] font-bold rounded-full hover:shadow-xl transition-all"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <MessageCircle className="w-5 h-5" />
            Contacter sur WhatsApp
          </motion.a>
        </motion.section>

        {/* FAQ Section */}
        <motion.section {...fadeInUp} className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Questions frequentes sur la creation de site Shopify
          </h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
            Retrouvez les reponses aux questions les plus posees par mes clients avant de lancer leur projet de <strong>creation de boutique Shopify</strong>.
          </p>

          <div className="space-y-3">
            <FAQItem
              question="Combien coute la creation d'un site Shopify ?"
              answer="La creation d'un site Shopify avec Traffik Web demarre a 250&#8364; pour le forfait Starter (jusqu'a 30 produits, theme premium configure, paiements et livraison). Le forfait Business a 500&#8364; convient aux boutiques plus ambitieuses avec jusqu'a 100 produits et des fonctionnalites avancees. Le forfait Premium a 900&#8364; inclut un design 100% sur mesure et des integrations avancees. A cela s'ajoute l'abonnement mensuel Shopify (a partir de 36&#8364;/mois) que vous payez directement a Shopify."
            />
            <FAQItem
              question="En combien de temps mon site Shopify sera-t-il en ligne ?"
              answer="Le delai moyen de creation d'un site Shopify est de 5 a 7 jours ouvrables pour le forfait Starter, 7 a 10 jours pour le Business, et 10 a 15 jours pour le Premium. Ces delais dependent de votre reactivite pour fournir le contenu (photos, descriptions des produits, logo). Si vous avez tout le contenu pret, je peux livrer un site Starter en 3 jours."
            />
            <FAQItem
              question="Est-ce que je peux gerer ma boutique moi-meme apres la creation ?"
              answer="Absolument. L'un des grands avantages de Shopify est sa facilite d'utilisation. Apres la livraison, je vous forme pendant 30 minutes en visio pour vous montrer comment ajouter des produits, gerer les commandes, modifier les prix et suivre vos statistiques. L'interface Shopify est intuitive et ne necessite aucune competence technique. Vous serez 100% autonome."
            />
            <FAQItem
              question="Faut-il payer un abonnement mensuel en plus de la creation ?"
              answer="Oui, Shopify fonctionne sur un modele d'abonnement. Le plan Basic demarre a 36&#8364;/mois et inclut l'hebergement, le certificat SSL, la bande passante illimitee et un support 24/7. C'est un cout a prendre en compte, mais il remplace les frais d'hebergement, de maintenance et de securite que vous auriez avec d'autres solutions comme WordPress/WooCommerce."
            />
            <FAQItem
              question="Proposez-vous la maintenance et le suivi apres la mise en ligne ?"
              answer="Le support de 7 jours apres livraison est inclus dans tous les forfaits. Au-dela, je propose un forfait de maintenance mensuel a partir de 90&#8364;/mois qui comprend : mises a jour des applications, ajout de produits, modifications de design, suivi des performances et support prioritaire. C'est optionnel : Shopify etant une plateforme managee, votre site fonctionnera parfaitement meme sans maintenance externe."
            />
          </div>
        </motion.section>

        {/* Internal links */}
        <motion.section {...fadeInUp} className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Decouvrez mes autres services
          </h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
            En plus de la <strong>creation de site Shopify</strong>, je propose d'autres services pour vous accompagner dans votre presence en ligne. Chaque projet est different, et je m'adapte a vos besoins specifiques.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              { to: '/creation-site-wordpress', title: 'Creation site WordPress', desc: 'Site vitrine professionnel avec blog et SEO optimise, a partir de 500&#8364;.' },
              { to: '/developpement-react-nextjs', title: 'Developpement React & Next.js', desc: 'Application web sur mesure ultra-performante, a partir de 800&#8364;.' },
              { to: '/tarifs', title: 'Tous les tarifs', desc: 'Consultez l\'ensemble de mes prestations et tarifs en toute transparence.' },
              { to: '/blog', title: 'Blog & conseils', desc: 'Articles gratuits sur le SEO, le e-commerce et le developpement web.' }
            ].map((link, i) => (
              <Link
                key={i}
                to={link.to}
                className="p-5 rounded-2xl border border-gray-200 dark:border-white/10 hover:border-[#0066FF]/40 transition-all group"
              >
                <h3 className="font-bold mb-1 group-hover:text-[#0066FF] transition-colors">{link.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{link.desc}</p>
              </Link>
            ))}
          </div>
        </motion.section>

        {/* Bottom CTA */}
        <motion.section {...fadeInUp} className="mt-16 text-center pb-12">
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Vous avez un projet de <strong>boutique Shopify</strong> ? Parlons-en.
          </p>
          <motion.a
            href="https://wa.me/33635505374"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#0066FF] text-white font-bold rounded-full hover:shadow-lg hover:shadow-[#0066FF]/25 transition-all"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <MessageCircle className="w-5 h-5" />
            Discuter sur WhatsApp
          </motion.a>
        </motion.section>
      </div>
    </div>
  );
}
