import { useState, useEffect } from 'react';
import { List } from 'lucide-react';

export default function TableOfContents({ content }) {
  const [headings, setHeadings] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const regex = /<h([23])[^>]*id="([^"]*)"[^>]*>(.*?)<\/h[23]>/gi;
    const found = [];
    let match;
    while ((match = regex.exec(content)) !== null) {
      found.push({
        level: parseInt(match[1]),
        id: match[2],
        text: match[3].replace(/<[^>]+>/g, ''),
      });
    }
    setHeadings(found);
  }, [content]);

  if (headings.length === 0) return null;

  return (
    <div className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-5 mb-8">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-sm font-bold text-black dark:text-white w-full"
      >
        <List className="w-4 h-4 text-[#0066FF]" />
        Sommaire
        <span className="text-gray-400 text-xs ml-auto">{isOpen ? '▲' : '▼'}</span>
      </button>

      {isOpen && (
        <nav className="mt-4 space-y-2">
          {headings.map((h, i) => (
            <a
              key={i}
              href={`#${h.id}`}
              className={`block text-sm text-gray-500 dark:text-gray-400 hover:text-[#0066FF] transition-colors ${
                h.level === 3 ? 'pl-4' : ''
              }`}
            >
              {h.text}
            </a>
          ))}
        </nav>
      )}
    </div>
  );
}
