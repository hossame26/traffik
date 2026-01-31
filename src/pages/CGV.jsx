import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function CGV() {
  return (
    <div className="min-h-screen bg-dark-950 text-white py-32 px-4">
      <div className="max-w-3xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-accent hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Retour
        </Link>

        <h1 className="font-display text-4xl md:text-5xl font-bold mb-8">Conditions Générales de Vente</h1>

        <div className="space-y-8 text-white/70 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-4">1. Services</h2>
            <p>
              Création de sites web (Shopify, WordPress, sur mesure), SEO, maintenance et support technique.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">2. Tarifs</h2>
            <p>
              À partir de 150€. Devis personnalisé gratuit. Acompte de 30% à la commande, solde à la livraison.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">3. Délais</h2>
            <p>
              Shopify/WordPress : 2-3 semaines. Sur mesure : 4-6 semaines. Options express disponibles.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">4. Garantie</h2>
            <p>
              30 jours après livraison : corrections de bugs, modifications mineures, support WhatsApp inclus.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">5. Propriété</h2>
            <p>
              Après paiement intégral, vous êtes propriétaire du site et des codes sources.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">6. Contact</h2>
            <p>
              WhatsApp : <a href="https://wa.me/33635505374" className="text-accent hover:underline">+33 6 35 50 53 74</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
