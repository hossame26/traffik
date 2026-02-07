import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Breadcrumb({ items }) {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.label,
        item: `https://traffik-web.fr${item.href}`,
      })),
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-breadcrumb', 'true');
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, [items]);

  return (
    <nav aria-label="Breadcrumb" className="py-3">
      <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-400 dark:text-gray-500">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-1">
              {index > 0 && (
                <span className="mx-1 select-none" aria-hidden="true">
                  &gt;
                </span>
              )}
              {isLast ? (
                <span className="text-gray-600 dark:text-gray-300" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.href}
                  className="text-gray-500 transition-colors hover:text-[#0066FF] dark:text-gray-400 dark:hover:text-[#0066FF]"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
