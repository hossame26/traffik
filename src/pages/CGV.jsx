import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function CGV() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#050505] text-black dark:text-white py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[#0066FF] hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Retour à l'accueil
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold mb-8">Conditions Générales de Vente</h1>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-gray-500 dark:text-gray-400 mb-8">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
          </p>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Article 1 - Objet</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre Traffik Web et ses clients pour la fourniture de services de création de sites web et de marketing digital.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Article 2 - Services proposés</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              Traffik Web propose les services suivants :
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
              <li>Création de sites web (Shopify, WordPress, sur mesure)</li>
              <li>Refonte et optimisation de sites existants</li>
              <li>Référencement naturel (SEO)</li>
              <li>Gestion de campagnes publicitaires (Facebook Ads, Google Ads)</li>
              <li>Maintenance et support technique</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Article 3 - Tarifs</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Les tarifs sont établis sur devis personnalisé. Les prix indiqués sont en euros et s'entendent hors taxes pour les clients professionnels. Un acompte de 30% est demandé à la commande, le solde étant payable à la livraison du projet.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Article 4 - Délais de livraison</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Les délais de livraison sont indicatifs et communiqués lors du devis. Ils peuvent varier en fonction de la complexité du projet et de la réactivité du client pour fournir les éléments nécessaires (contenus, images, validations).
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Article 5 - Processus de validation</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              Le projet se déroule en plusieurs étapes avec validation client :
            </p>
            <ol className="list-decimal pl-6 text-gray-600 dark:text-gray-300 space-y-2">
              <li>Validation du cahier des charges et devis</li>
              <li>Validation de la maquette graphique</li>
              <li>Validation du site en préproduction</li>
              <li>Mise en ligne après validation finale</li>
            </ol>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
              Chaque étape validée est considérée comme définitive. Les modifications ultérieures peuvent faire l'objet d'une facturation supplémentaire.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Article 6 - Garantie et support</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Traffik Web offre une garantie de 30 jours après la livraison incluant :
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mt-4">
              <li>Corrections des bugs et dysfonctionnements</li>
              <li>Modifications mineures (textes, images)</li>
              <li>Support technique par email</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
              Au-delà de cette période, un forfait de maintenance peut être souscrit.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Article 7 - Propriété intellectuelle</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Après paiement intégral, le client devient propriétaire du site web livré. Les codes sources sont transmis au client. Traffik Web se réserve le droit de mentionner la réalisation du projet dans son portfolio, sauf demande contraire du client.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Article 8 - Responsabilités du client</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Le client s'engage à :
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mt-4">
              <li>Fournir les contenus nécessaires (textes, images, logos) dans les délais convenus</li>
              <li>Valider les étapes du projet dans un délai raisonnable</li>
              <li>S'assurer qu'il dispose des droits sur les contenus fournis</li>
              <li>Régler les factures aux échéances prévues</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Article 9 - Annulation et remboursement</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              En cas d'annulation par le client avant le début des travaux, l'acompte reste acquis à Traffik Web au titre de dédommagement. Si les travaux ont commencé, les prestations réalisées seront facturées au prorata.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Article 10 - Force majeure</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Traffik Web ne saurait être tenu responsable de l'inexécution de ses obligations en cas de force majeure telle que définie par la jurisprudence française.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Article 11 - Litiges</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Les présentes CGV sont soumises au droit français. En cas de litige, une solution amiable sera recherchée avant toute action judiciaire. À défaut, les tribunaux français seront seuls compétents.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Article 12 - Contact</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Pour toute question concernant ces CGV :<br /><br />
              <strong>Traffik Web</strong><br />
              Email : <a href="mailto:contact@traffik-web.fr" className="text-[#0066FF] hover:underline">contact@traffik-web.fr</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
