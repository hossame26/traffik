import { Link } from 'react-router-dom';

const allLinks = [
  { href: '/creation-site-shopify', title: 'Création Shopify', desc: 'Boutique e-commerce à partir de 250\u20AC' },
  { href: '/creation-site-wordpress', title: 'Création WordPress', desc: 'Site vitrine professionnel à partir de 500\u20AC' },
  { href: '/developpement-react-nextjs', title: 'Développement React', desc: 'Application web sur mesure à partir de 600\u20AC' },
  { href: '/publicite-digitale', title: 'Publicité Digitale', desc: 'Facebook Ads & Google Ads dès 300\u20AC/mois' },
  { href: '/referencement-seo', title: 'Référencement SEO', desc: 'Première page Google dès 400\u20AC/mois' },
  { href: '/tarifs', title: 'Nos Tarifs', desc: 'Grille tarifaire transparente' },
  { href: '/portfolio', title: 'Portfolio', desc: 'Nos réalisations web' },
  { href: '/blog', title: 'Blog', desc: 'Guides et conseils web & SEO' },
  { href: '/a-propos', title: 'À Propos', desc: 'Notre histoire et expertise' },
];

export default function InternalLinks({ current }) {
  const links = allLinks
    .filter((link) => link.href !== current)
    .slice(0, 6);

  return (
    <section className="mt-16 mb-8">
      <h3 className="mb-6 text-lg font-semibold text-gray-900 dark:text-white">
        Découvrez aussi
      </h3>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {links.map((link) => (
          <Link
            key={link.href}
            to={link.href}
            className="group flex items-start justify-between rounded-xl border border-gray-200 p-4 transition-all hover:border-[#0066FF]/40 hover:shadow-md dark:border-white/10 dark:hover:border-[#0066FF]/40"
          >
            <div className="min-w-0 flex-1">
              <p className="font-medium text-gray-900 group-hover:text-[#0066FF] dark:text-white">
                {link.title}
              </p>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                {link.desc}
              </p>
            </div>
            <svg
              className="ml-3 mt-1 h-4 w-4 flex-shrink-0 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-[#0066FF]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        ))}
      </div>
    </section>
  );
}
