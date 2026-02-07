import { useEffect } from 'react';

export default function SEOHead({ title, description, canonical, keywords }) {
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
    if (canonical) {
      setMeta('og:url', canonical);
      let link = document.querySelector('link[rel="canonical"]');
      if (link) {
        link.setAttribute('href', canonical);
      }
    }
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);
  }, [title, description, canonical, keywords]);

  return null;
}
