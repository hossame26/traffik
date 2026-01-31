import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function PolitiqueConfidentialite() {
  return (
    <div className="min-h-screen bg-dark-950 text-white py-32 px-4">
      <div className="max-w-3xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-accent hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Retour
        </Link>

        <h1 className="font-display text-4xl md:text-5xl font-bold mb-8">Politique de Confidentialité</h1>

        <div className="space-y-8 text-white/70 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-4">1. Données collectées</h2>
            <p>
              Nous collectons uniquement les données nécessaires : nom, email, téléphone (via WhatsApp), données de navigation anonymes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">2. Utilisation</h2>
            <p>
              Vos données servent à répondre à vos demandes, améliorer nos services, et vous contacter (avec consentement).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">3. Cookies</h2>
            <p>
              Nous utilisons des cookies essentiels (préférences) et analytiques (avec consentement). Vous pouvez les gérer via notre bandeau.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">4. Vos droits (RGPD)</h2>
            <p>
              Accès, rectification, effacement, portabilité, opposition. Contact : <a href="https://wa.me/33635505374" className="text-accent hover:underline">WhatsApp</a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">5. Sécurité</h2>
            <p>
              Site sécurisé HTTPS. Données protégées contre tout accès non autorisé.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
