import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-dark-950 text-white py-32 px-4">
      <div className="max-w-3xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-accent hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Retour
        </Link>

        <h1 className="font-display text-4xl md:text-5xl font-bold mb-8">Mentions Légales</h1>

        <div className="space-y-8 text-white/70 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-4">1. Éditeur du site</h2>
            <p>
              Le site <strong className="text-white">traffik-web.fr</strong> est édité par Traffik Web, micro-entreprise basée en France.<br /><br />
              Contact : <a href="https://wa.me/33635505374" className="text-accent hover:underline">+33 6 35 50 53 74</a> (WhatsApp)
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">2. Hébergement</h2>
            <p>
              Hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">3. Propriété intellectuelle</h2>
            <p>
              L'ensemble du contenu de ce site est la propriété exclusive de Traffik Web. Toute reproduction sans autorisation est interdite.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">4. Contact</h2>
            <p>
              WhatsApp : <a href="https://wa.me/33635505374" className="text-accent hover:underline">+33 6 35 50 53 74</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
