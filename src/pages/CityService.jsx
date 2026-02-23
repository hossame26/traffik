import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Check,
  MessageCircle,
  MapPin,
  Building2,
  Users,
  ChevronDown,
  ChevronUp,
  ChevronRight,
  Globe,
  Search,
  Zap,
  Shield,
  BarChart3,
  Palette,
  Code
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { parseServiceCity } from '../data/cities';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.6 }
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

/** Generate city-specific content paragraphs */
function getWhyContent(service, city) {
  const templates = {
    'creation-site-web': [
      `${city.name} est une ville dynamique de la région ${city.region} avec une population de ${city.population} habitants et plus de ${city.businesses} entreprises actives. Dans un marché aussi concurrentiel, disposer d'un site web professionnel n'est plus une option, c'est une nécessité absolue pour toute entreprise qui souhaite se démarquer.`,
      `Les consommateurs à ${city.name} recherchent de plus en plus leurs produits et services en ligne avant de se déplacer. Un site internet bien conçu et optimisé pour le référencement local vous permet de capter cette audience qualifiée et de transformer les visiteurs en clients. Que vous soyez un commerce de proximité, un artisan ou une PME, votre présence digitale est votre premier atout commercial.`,
      `Chez Traffik Web, nous comprenons les spécificités du marché de ${city.name} et de la région ${city.region}. Nous créons des sites web sur mesure, rapides et optimisés pour le SEO local, afin que votre entreprise apparaisse en tête des résultats de recherche quand un habitant de ${city.name} cherche vos services.`,
    ],
    'creation-site-shopify': [
      `Le e-commerce connaît une croissance exponentielle à ${city.name} et dans toute la région ${city.region}. Avec ${city.population} habitants et plus de ${city.businesses} entreprises, le potentiel de vente en ligne est considérable. Shopify est la plateforme idéale pour lancer rapidement une boutique en ligne performante et professionnelle.`,
      `Les habitants de ${city.name} sont des consommateurs connectés qui n'hésitent pas à acheter en ligne. En créant votre boutique Shopify, vous accédez non seulement au marché local de ${city.name}, mais aussi à toute la France et à l'international. Notre expertise Shopify vous garantit une boutique optimisée pour la conversion, avec un design attractif et une expérience d'achat fluide.`,
      `Notre approche est simple : nous configurons entièrement votre boutique Shopify, intégrons vos produits, configurons les paiements et la livraison, et vous livrons un site prêt à vendre. Les entrepreneurs de ${city.name} nous font confiance pour leur transformation digitale.`,
    ],
    'creation-site-wordpress': [
      `WordPress propulse plus de 40% des sites web dans le monde, et pour cause : c'est la solution la plus flexible et la plus complète pour créer un site professionnel. À ${city.name}, ville de ${city.population} habitants au coeur de la région ${city.region}, les entreprises ont besoin d'un site robuste qui évolue avec leur activité.`,
      `Que vous dirigiez un restaurant, un cabinet médical, une agence immobilière ou tout autre commerce à ${city.name}, WordPress vous offre la possibilité de gérer facilement votre contenu, d'ajouter des fonctionnalités et de vous adapter aux besoins de vos ${city.businesses} concurrents potentiels sur le marché local.`,
      `Nous créons des sites WordPress sur mesure, optimisés pour la vitesse et le référencement naturel. Chaque site est conçu pour répondre aux attentes spécifiques des clients de ${city.name} et de la région ${city.region}, avec un design moderne et une navigation intuitive.`,
    ],
    'developpement-react': [
      `${city.name}, avec ses ${city.population} habitants et son écosystème numérique en plein essor, attire de plus en plus de startups et d'entreprises tech en région ${city.region}. Pour ces acteurs, un site web classique ne suffit plus : il faut une application web performante, rapide et scalable, et c'est exactement ce que React permet de construire.`,
      `Le développement React offre des performances incomparables grâce au Virtual DOM, une expérience utilisateur fluide avec des animations sophistiquées, et une architecture modulaire qui facilite la maintenance et l'évolution de votre projet. Les entreprises de ${city.name} qui choisissent React prennent une longueur d'avance sur la concurrence.`,
      `Notre équipe maîtrise React, Next.js et tout l'écosystème JavaScript moderne. Nous développons des applications web sur mesure pour les entreprises de ${city.name} : dashboards, SaaS, marketplaces, sites vitrine ultra-performants. Chaque projet est conçu pour offrir une expérience utilisateur exceptionnelle.`,
    ],
    'referencement-seo': [
      `Le référencement naturel est le levier le plus rentable pour une entreprise à ${city.name}. Avec ${city.businesses} entreprises en compétition sur le marché local de la région ${city.region}, apparaître en première page de Google pour les recherches liées à votre activité est un avantage décisif.`,
      `Le SEO local est particulièrement important à ${city.name} : les recherches "près de moi" et les requêtes géolocialisées représentent une part croissante du trafic Google. Un bon référencement local vous permet de capter les ${city.population} habitants de ${city.name} qui cherchent vos services au quotidien, ainsi que les visiteurs et les entreprises de passage.`,
      `Notre approche SEO combine audit technique, optimisation on-page, création de contenu ciblé et netlinking stratégique. Nous travaillons spécifiquement sur les mots-clés locaux de ${city.name} et de la région ${city.region} pour vous positionner durablement devant vos concurrents.`,
    ],
  };

  return templates[service.slug] || templates['creation-site-web'];
}

function getIncludes(service) {
  const includes = {
    'creation-site-web': [
      { icon: Palette, text: 'Design responsive sur mesure' },
      { icon: Search, text: 'Optimisation SEO locale' },
      { icon: Zap, text: 'Performance optimale (score 90+)' },
      { icon: Shield, text: 'HTTPS et sécurité renforcée' },
      { icon: Globe, text: 'Nom de domaine et hébergement guidés' },
      { icon: MessageCircle, text: 'Formulaire de contact intégré' },
    ],
    'creation-site-shopify': [
      { icon: Palette, text: 'Thème Shopify premium personnalisé' },
      { icon: Code, text: 'Configuration complète de la boutique' },
      { icon: Shield, text: 'Paiement sécurisé (Stripe, PayPal)' },
      { icon: Zap, text: 'Jusqu\'à 20 produits intégrés' },
      { icon: BarChart3, text: 'Analytics et suivi des ventes' },
      { icon: Globe, text: 'Livraison et suivi configurés' },
    ],
    'creation-site-wordpress': [
      { icon: Palette, text: 'Thème WordPress premium sur mesure' },
      { icon: Code, text: 'Jusqu\'à 5 pages optimisées' },
      { icon: Search, text: 'SEO de base (meta, sitemap, robots)' },
      { icon: Shield, text: 'Sécurité et sauvegardes automatiques' },
      { icon: Zap, text: 'Performance et rapidité optimisées' },
      { icon: MessageCircle, text: 'Formulaire de contact + Google Maps' },
    ],
    'developpement-react': [
      { icon: Code, text: 'Application React/Next.js sur mesure' },
      { icon: Zap, text: 'Animations fluides (Framer Motion)' },
      { icon: BarChart3, text: 'Performance optimale (score 95+)' },
      { icon: Shield, text: 'Architecture scalable et maintenable' },
      { icon: Globe, text: 'Intégration API sur mesure' },
      { icon: Search, text: 'SEO technique avancé' },
    ],
    'referencement-seo': [
      { icon: Search, text: 'Audit SEO technique complet' },
      { icon: Code, text: 'Optimisation on-page et meta tags' },
      { icon: Globe, text: 'Stratégie de contenu locale' },
      { icon: BarChart3, text: 'Suivi de positionnement mensuel' },
      { icon: Zap, text: 'Optimisation de la vitesse du site' },
      { icon: Shield, text: 'Netlinking et autorité de domaine' },
    ],
  };

  return includes[service.slug] || includes['creation-site-web'];
}

function getFAQs(service, city) {
  return [
    {
      question: `Combien coûte une ${service.name.toLowerCase()} à ${city.name} ?`,
      answer: `Nos tarifs pour la ${service.name.toLowerCase()} commencent à partir de ${service.price}. Ce prix inclut la conception, le développement et l'optimisation de votre site. Nous sommes freelance, ce qui nous permet de proposer des tarifs jusqu'à 3 fois moins chers qu'une agence web traditionnelle à ${city.name}, tout en garantissant une qualité professionnelle.`,
    },
    {
      question: `Quel est le délai de livraison pour un projet de ${service.name.toLowerCase()} à ${city.name} ?`,
      answer: `Nous livrons la plupart de nos projets de ${service.name.toLowerCase()} en 5 à 10 jours ouvrables. Nous travaillons à distance avec nos clients de ${city.name} et de toute la région ${city.region}, ce qui nous permet d'être réactifs et efficaces. Vous recevez des mises à jour régulières tout au long du projet.`,
    },
    {
      question: `Pourquoi choisir Traffik Web pour votre ${service.keyword} à ${city.name} ?`,
      answer: `Traffik Web est un freelance spécialisé basé en France. Nous connaissons les spécificités du marché de ${city.name} et de la région ${city.region}. Nos avantages : des tarifs compétitifs à partir de ${service.price}, une livraison rapide, un accompagnement personnalisé et une expertise technique reconnue. Plus de 50 projets livrés avec un taux de satisfaction de 100%.`,
    },
  ];
}

function NotFound() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#050505] text-black dark:text-white">
      <div className="max-w-4xl mx-auto py-20 px-4 text-center">
        <motion.div {...fadeInUp}>
          <h1 className="text-4xl font-bold mb-6">Page non trouvée</h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
            La page que vous recherchez n'existe pas ou a été déplacée.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-[#0066FF] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#0055DD] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour à l'accueil
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default function CityService() {
  const { slug } = useParams();
  const { service, city } = parseServiceCity(slug);

  // Inject JSON-LD
  useEffect(() => {
    if (!service || !city) return;

    // FAQPage JSON-LD
    const faqs = getFAQs(service, city);
    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map(faq => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    };

    // LocalBusiness JSON-LD
    const localBusinessSchema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Traffik Web',
      description: `${service.name} à ${city.name} - Freelance web en France`,
      url: `https://traffik-web.fr/${service.slug}-${city.slug}`,
      telephone: '+33635505374',
      areaServed: {
        '@type': 'City',
        name: city.name,
        geo: {
          '@type': 'GeoCoordinates',
          latitude: city.lat,
          longitude: city.lng,
        },
      },
      priceRange: service.price,
      address: {
        '@type': 'PostalAddress',
        addressLocality: city.name,
        addressRegion: city.region,
        addressCountry: 'FR',
      },
    };

    // BreadcrumbList JSON-LD
    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Accueil',
          item: 'https://traffik-web.fr/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: service.name,
          item: `https://traffik-web.fr${service.parentPath}`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: city.name,
          item: `https://traffik-web.fr/${service.slug}-${city.slug}`,
        },
      ],
    };

    const scriptFaq = document.createElement('script');
    scriptFaq.type = 'application/ld+json';
    scriptFaq.id = 'city-service-faq-jsonld';
    scriptFaq.textContent = JSON.stringify(faqSchema);

    const scriptBiz = document.createElement('script');
    scriptBiz.type = 'application/ld+json';
    scriptBiz.id = 'city-service-local-jsonld';
    scriptBiz.textContent = JSON.stringify(localBusinessSchema);

    const scriptBreadcrumb = document.createElement('script');
    scriptBreadcrumb.type = 'application/ld+json';
    scriptBreadcrumb.id = 'city-service-breadcrumb-jsonld';
    scriptBreadcrumb.textContent = JSON.stringify(breadcrumbSchema);

    document.head.appendChild(scriptFaq);
    document.head.appendChild(scriptBiz);
    document.head.appendChild(scriptBreadcrumb);

    return () => {
      document.getElementById('city-service-faq-jsonld')?.remove();
      document.getElementById('city-service-local-jsonld')?.remove();
      document.getElementById('city-service-breadcrumb-jsonld')?.remove();
    };
  }, [service, city]);

  if (!service || !city) {
    return <NotFound />;
  }

  const whyContent = getWhyContent(service, city);
  const includes = getIncludes(service);
  const faqs = getFAQs(service, city);

  const pageTitle = `${service.name} à ${city.name} | Traffik Web`;
  const pageDescription = `${service.name} à ${city.name} dès ${service.price}. Freelance web : livraison rapide, tarifs compétitifs. Devis gratuit 24h.`;
  const canonical = `https://traffik-web.fr/${service.slug}-${city.slug}`;
  const keywords = `${service.keyword} ${city.name}, ${service.keyword} ${city.region}, ${service.name.toLowerCase()} ${city.name}, agence web ${city.name}, freelance web ${city.name}, site internet ${city.name}`;

  return (
    <div className="min-h-screen bg-white dark:bg-[#050505] text-black dark:text-white">
      <SEOHead
        title={pageTitle}
        description={pageDescription}
        canonical={canonical}
        keywords={keywords}
      />

      <div className="max-w-4xl mx-auto py-20 px-4">

        {/* Breadcrumb */}
        <motion.nav
          {...fadeInUp}
          className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-8 flex-wrap"
          aria-label="Breadcrumb"
        >
          <Link to="/" className="hover:text-[#0066FF] transition-colors">Accueil</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to={service.parentPath} className="hover:text-[#0066FF] transition-colors">
            {service.name}
          </Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-black dark:text-white font-medium">{city.name}</span>
        </motion.nav>

        {/* Back link */}
        <motion.div {...fadeInUp}>
          <Link
            to={service.parentPath}
            className="inline-flex items-center gap-2 text-[#0066FF] hover:underline mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour à {service.name}
          </Link>
        </motion.div>

        {/* Hero Section */}
        <motion.div {...fadeInUp} className="mb-16">
          <div className="flex items-center gap-2 text-[#0066FF] mb-4">
            <MapPin className="w-5 h-5" />
            <span className="font-medium">{city.name}, {city.region}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {service.name} à{' '}
            <span className="text-[#0066FF]">{city.name}</span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
            Freelance web en France, nous créons votre {service.name.toLowerCase()} sur mesure pour les entreprises de {city.name}. Livraison rapide, tarifs compétitifs à partir de {service.price}.
          </p>

          {/* City stats */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 rounded-2xl p-4 text-center">
              <Users className="w-6 h-6 text-[#0066FF] mx-auto mb-2" />
              <div className="text-2xl font-bold">{city.population}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Habitants</div>
            </div>
            <div className="bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 rounded-2xl p-4 text-center">
              <Building2 className="w-6 h-6 text-[#0066FF] mx-auto mb-2" />
              <div className="text-2xl font-bold">{city.businesses}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Entreprises</div>
            </div>
            <div className="bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 rounded-2xl p-4 text-center">
              <MapPin className="w-6 h-6 text-[#0066FF] mx-auto mb-2" />
              <div className="text-2xl font-bold">{city.region.split('-')[0]}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Région</div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/33635505374"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#0066FF] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#0055DD] transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Devis gratuit via WhatsApp
            </a>
            <Link
              to="/tarifs"
              className="inline-flex items-center justify-center gap-2 border-2 border-[#0066FF] text-[#0066FF] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#0066FF] hover:text-white transition-colors"
            >
              Voir nos tarifs
            </Link>
          </div>
        </motion.div>

        {/* Section 1: Why this service in this city */}
        <motion.section {...fadeInUp} className="mb-16">
          <h2 className="text-3xl font-bold mb-6">
            Pourquoi choisir la {service.name.toLowerCase()} à {city.name} ?
          </h2>
          <div className="space-y-4">
            {whyContent.map((paragraph, i) => (
              <p key={i} className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        </motion.section>

        {/* Section 2: What's included */}
        <motion.section {...fadeInUp} className="mb-16">
          <h2 className="text-3xl font-bold mb-8">
            Ce qui est inclus dans votre {service.name.toLowerCase()}
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {includes.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-start gap-4 bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 rounded-2xl p-5"
              >
                <div className="w-10 h-10 bg-[#0066FF]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-[#0066FF]" />
                </div>
                <div>
                  <p className="font-medium text-black dark:text-white">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Section 3: Pricing */}
        <motion.section {...fadeInUp} className="mb-16">
          <h2 className="text-3xl font-bold mb-6">
            Tarif {service.name.toLowerCase()} à {city.name}
          </h2>
          <div className="bg-gradient-to-br from-[#0066FF]/5 to-[#0066FF]/10 dark:from-[#0066FF]/10 dark:to-[#0066FF]/5 border border-[#0066FF]/20 rounded-3xl p-8 md:p-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <div className="text-sm text-[#0066FF] font-semibold uppercase tracking-wider mb-2">
                  À partir de
                </div>
                <div className="text-5xl font-bold text-black dark:text-white mb-2">
                  {service.price}
                </div>
                <p className="text-gray-600 dark:text-gray-400 max-w-md">
                  Tarif freelance, jusqu'à 3x moins cher qu'une agence web à {city.name}. Livraison en 5 à 10 jours. Satisfaction garantie.
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <Check className="w-5 h-5 text-[#0066FF]" />
                  <span>Devis gratuit et sans engagement</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <Check className="w-5 h-5 text-[#0066FF]" />
                  <span>Paiement en plusieurs fois possible</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <Check className="w-5 h-5 text-[#0066FF]" />
                  <span>Support inclus après livraison</span>
                </div>
              </div>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/33635505374"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#0066FF] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#0055DD] transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Demander un devis gratuit
              </a>
              <Link
                to="/tarifs"
                className="inline-flex items-center justify-center gap-2 bg-white dark:bg-white/10 text-black dark:text-white border border-gray-200 dark:border-white/10 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 dark:hover:bg-white/[0.05] transition-colors"
              >
                Comparer les offres
              </Link>
            </div>
          </div>
        </motion.section>

        {/* FAQ Section */}
        <motion.section {...fadeInUp} className="mb-16">
          <h2 className="text-3xl font-bold mb-8">
            Questions fréquentes - {service.name} à {city.name}
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </motion.section>

        {/* Internal links */}
        <motion.section {...fadeInUp} className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Liens utiles</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link
              to={service.parentPath}
              className="flex items-center gap-3 bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 rounded-2xl p-5 hover:border-[#0066FF]/50 transition-colors group"
            >
              <Globe className="w-5 h-5 text-[#0066FF]" />
              <div>
                <div className="font-medium text-black dark:text-white group-hover:text-[#0066FF] transition-colors">
                  {service.name}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Page service</div>
              </div>
            </Link>
            <Link
              to="/tarifs"
              className="flex items-center gap-3 bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 rounded-2xl p-5 hover:border-[#0066FF]/50 transition-colors group"
            >
              <BarChart3 className="w-5 h-5 text-[#0066FF]" />
              <div>
                <div className="font-medium text-black dark:text-white group-hover:text-[#0066FF] transition-colors">
                  Nos tarifs
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Tous les prix</div>
              </div>
            </Link>
            <Link
              to="/blog"
              className="flex items-center gap-3 bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 rounded-2xl p-5 hover:border-[#0066FF]/50 transition-colors group"
            >
              <Search className="w-5 h-5 text-[#0066FF]" />
              <div>
                <div className="font-medium text-black dark:text-white group-hover:text-[#0066FF] transition-colors">
                  Blog
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Conseils web</div>
              </div>
            </Link>
          </div>
        </motion.section>

        {/* Final CTA */}
        <motion.section {...fadeInUp} className="text-center">
          <div className="bg-black dark:bg-white/[0.03] border border-gray-800 dark:border-white/10 rounded-3xl p-10 md:p-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Prêt à lancer votre projet à {city.name} ?
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Contactez-nous sur WhatsApp pour discuter de votre projet de {service.name.toLowerCase()} à {city.name}. Devis gratuit en 24h.
            </p>
            <a
              href="https://wa.me/33635505374"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#0066FF] text-white px-10 py-4 rounded-xl font-semibold text-lg hover:bg-[#0055DD] transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Contacter via WhatsApp
            </a>
          </div>
        </motion.section>

      </div>
    </div>
  );
}
