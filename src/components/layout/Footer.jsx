import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const footerLinks = {
  services: [
    { label: "Création Shopify", href: "/creation-site-shopify", isRoute: true },
    { label: "Création WordPress", href: "/creation-site-wordpress", isRoute: true },
    { label: "Développement React", href: "/developpement-react-nextjs", isRoute: true },
    { label: "Publicité Digitale", href: "/publicite-digitale", isRoute: true },
    { label: "Référencement SEO", href: "/referencement-seo", isRoute: true },
  ],
  navigation: [
    { label: "Tarifs", href: "/tarifs", isRoute: true },
    { label: "Portfolio", href: "/portfolio", isRoute: true },
    { label: "Blog", href: "/blog", isRoute: true },
    { label: "À Propos", href: "/a-propos", isRoute: true },
    { label: "Contact", href: "/#contact" },
  ],
  legal: [
    { label: "Mentions Légales", href: "/mentions-legales", isRoute: true },
    { label: "Confidentialité", href: "/politique-confidentialite", isRoute: true },
    { label: "CGV", href: "/cgv", isRoute: true },
  ],
};

function FooterLink({ href, children, isRoute = false }) {
  const LinkComponent = isRoute ? Link : 'a';
  const linkProps = isRoute ? { to: href } : { href };

  return (
    <motion.li whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
      <LinkComponent
        {...linkProps}
        className="relative text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors link-slide inline-block py-1"
      >
        {children}
      </LinkComponent>
    </motion.li>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 lg:py-20 px-4 bg-[#FAFAFA] dark:bg-dark-900 border-t border-gray-100 dark:border-white/5 transition-colors duration-500">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/[0.02] to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Top CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 pb-16 border-b border-gray-200 dark:border-white/5"
        >
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black dark:text-white mb-4 tracking-tightest">
            Prêt à{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-purple">
              booster
            </span>
            {' '}votre business ?
          </h3>
          <p className="text-gray-500 dark:text-gray-400 mb-8 text-base max-w-md mx-auto">
            Discutons de votre projet. Premier appel découverte gratuit.
          </p>
          <motion.a
            href="#contact"
            className="
              inline-flex items-center gap-2
              bg-gradient-to-r from-primary to-primary-light
              text-white px-8 py-4 rounded-full
              text-sm font-bold tracking-wide
              shadow-xl shadow-primary/25
              shimmer-button overflow-hidden
            "
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,102,255,0.3)' }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Commencer maintenant</span>
            <ArrowUpRight className="w-4 h-4 relative z-10" />
          </motion.a>
        </motion.div>

        {/* Main Footer Grid - 3 Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <Link to="/" className="inline-block mb-6 group">
                <motion.span
                  className="text-2xl font-bold tracking-[0.05em] text-black dark:text-white"
                  whileHover={{ scale: 1.02 }}
                >
                  TRAFFIK
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-purple animate-gradient bg-[length:200%_200%]">
                    .
                  </span>
                </motion.span>
              </Link>

              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
                Sites web qui convertissent.
                <br />
                Publicités qui performent.
              </p>

              <motion.a
                href="https://wa.me/33635505374"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[#25D366] font-medium hover:underline"
                whileHover={{ x: 4 }}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                +33 6 35 50 53 74
              </motion.a>
            </motion.div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-bold text-black dark:text-white mb-5 text-xs uppercase tracking-[0.15em]">
              Services
            </h4>
            <ul className="space-y-3 text-sm">
              {footerLinks.services.map((link) => (
                <FooterLink key={link.label} href={link.href}>
                  {link.label}
                </FooterLink>
              ))}
            </ul>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="font-bold text-black dark:text-white mb-5 text-xs uppercase tracking-[0.15em]">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm">
              {footerLinks.navigation.map((link) => (
                <FooterLink key={link.label} href={link.href}>
                  {link.label}
                </FooterLink>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="font-bold text-black dark:text-white mb-5 text-xs uppercase tracking-[0.15em]">
              Légal
            </h4>
            <ul className="space-y-3 text-sm">
              {footerLinks.legal.map((link) => (
                <FooterLink key={link.label} href={link.href} isRoute={link.isRoute}>
                  {link.label}
                </FooterLink>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 dark:border-white/5 flex justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs text-gray-400 dark:text-gray-500"
          >
            © {currentYear} Traffik Web. Tous droits réservés.
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
