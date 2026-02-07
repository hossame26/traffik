import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function PolitiqueConfidentialite() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#050505] text-black dark:text-white py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[#0066FF] hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Retour à l'accueil
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold mb-8">Politique de Confidentialité</h1>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-gray-500 dark:text-gray-400 mb-8">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
          </p>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Chez Traffik Web, nous accordons une grande importance à la protection de vos données personnelles. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations conformément au Règlement Général sur la Protection des Données (RGPD).
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">2. Données collectées</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              Nous collectons uniquement les données nécessaires à nos services :
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
              <li><strong>Données de contact</strong> : nom, adresse email</li>
              <li><strong>Données de navigation</strong> : pages visitées, durée de visite (via cookies analytiques)</li>
              <li><strong>Données techniques</strong> : adresse IP, type de navigateur, appareil utilisé</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">3. Utilisation des données</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              Vos données sont utilisées pour :
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
              <li>Répondre à vos demandes de devis et questions</li>
              <li>Améliorer notre site et nos services</li>
              <li>Vous envoyer des informations sur nos services (avec votre consentement)</li>
              <li>Respecter nos obligations légales</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">4. Cookies</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              Notre site utilise des cookies pour :
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
              <li><strong>Cookies essentiels</strong> : fonctionnement du site, préférences (thème sombre/clair)</li>
              <li><strong>Cookies analytiques</strong> : mesure d'audience anonymisée (avec votre consentement)</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
              Vous pouvez gérer vos préférences de cookies à tout moment via le bandeau de consentement.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">5. Conservation des données</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Nous conservons vos données personnelles pendant une durée maximale de 3 ans après votre dernier contact avec nous, sauf obligation légale contraire.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">6. Vos droits</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              Conformément au RGPD, vous disposez des droits suivants :
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
              <li><strong>Droit d'accès</strong> : obtenir une copie de vos données</li>
              <li><strong>Droit de rectification</strong> : corriger vos données inexactes</li>
              <li><strong>Droit à l'effacement</strong> : demander la suppression de vos données</li>
              <li><strong>Droit à la portabilité</strong> : recevoir vos données dans un format structuré</li>
              <li><strong>Droit d'opposition</strong> : vous opposer au traitement de vos données</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
              Pour exercer ces droits, contactez-nous par email : <a href="mailto:contact@traffik-web.fr" className="text-[#0066FF] hover:underline">contact@traffik-web.fr</a>.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">7. Sécurité</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, modification, divulgation ou destruction. Notre site utilise le protocole HTTPS pour sécuriser les échanges de données.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">8. Transfert de données</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Nos services d'hébergement (Vercel) peuvent impliquer un transfert de données vers les États-Unis. Ces transferts sont encadrés par des garanties appropriées conformément au RGPD.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">9. Modifications</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Les modifications entrent en vigueur dès leur publication sur cette page.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">10. Contact</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Pour toute question concernant cette politique ou vos données personnelles :<br /><br />
              <strong>Traffik Web</strong><br />
              Email : <a href="mailto:contact@traffik-web.fr" className="text-[#0066FF] hover:underline">contact@traffik-web.fr</a><br /><br />
              Vous pouvez également introduire une réclamation auprès de la CNIL (Commission Nationale de l'Informatique et des Libertés) : <a href="https://www.cnil.fr" className="text-[#0066FF] hover:underline" target="_blank" rel="noopener noreferrer">www.cnil.fr</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
