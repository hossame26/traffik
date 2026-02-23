import { useEffect } from 'react';

const DEFAULT_OG_IMAGE = 'https://traffik-web.fr/og-image.jpg';

export default function SEOHead({ title, description, canonical, keywords, ogImage, ogType = 'website' }) {
  useEffect(() => {
    document.title = title;

    const setMeta = (name, content) => {
      let el = document.querySelector(`meta[name="${name}"]`) || document.querySelector(`meta[property="${name}"]`);
      if (el) {
        el.setAttribute('content', content);
      } else {
        el = document.createElement('meta');
        if (name.startsWith('og:') || name.startsWith('twitter:')) {
          el.setAttribute('property', name);
        } else {
          el.setAttribute('name', name);
        }
        el.setAttribute('content', content);
        document.head.appendChild(el);
      }
    };

    setMeta('description', description);
    if (keywords) setMeta('keywords', keywords);
    setMeta('og:title', title);
    setMeta('og:description', description);
    setMeta('og:type', ogType);
    setMeta('og:image', ogImage || DEFAULT_OG_IMAGE);
    setMeta('og:locale', 'fr_FR');
    setMeta('og:site_name', 'Traffik Web');
    if (canonical) {
      setMeta('og:url', canonical);
      let link = document.querySelector('link[rel="canonical"]');
      if (link) {
        link.setAttribute('href', canonical);
      } else {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        link.setAttribute('href', canonical);
        document.head.appendChild(link);
      }
    }
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);
    setMeta('twitter:image', ogImage || DEFAULT_OG_IMAGE);
  }, [title, description, canonical, keywords, ogImage, ogType]);

  return null;
}
