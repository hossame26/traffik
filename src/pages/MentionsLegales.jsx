import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#050505] text-black dark:text-white py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[#0066FF] hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Retour à l'accueil
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold mb-8">Mentions Légales</h1>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-gray-500 dark:text-gray-400 mb-8">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
          </p>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">1. Éditeur du site</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Le site <strong>traffik-web.fr</strong> est édité par :<br /><br />
              <strong>Traffik Web</strong><br />
              Micro-entreprise<br />
              France<br /><br />
              Contact : <a href="mailto:contact@traffik-web.fr" className="text-[#0066FF] hover:underline">contact@traffik-web.fr</a>
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">2. Hébergement</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Le site est hébergé par :<br /><br />
              <strong>Vercel Inc.</strong><br />
              340 S Lemon Ave #4133<br />
              Walnut, CA 91789, USA<br />
              Site web : <a href="https://vercel.com" className="text-[#0066FF] hover:underline" target="_blank" rel="noopener noreferrer">vercel.com</a>
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">3. Propriété intellectuelle</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              L'ensemble du contenu de ce site (textes, images, vidéos, logos, icônes, etc.) est la propriété exclusive de Traffik Web ou de ses partenaires. Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans autorisation écrite préalable.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">4. Limitation de responsabilité</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Traffik Web ne pourra être tenu responsable des dommages directs et indirects causés au matériel de l'utilisateur lors de l'accès au site traffik-web.fr. Traffik Web décline toute responsabilité quant à l'utilisation qui pourrait être faite des informations et contenus présents sur le site.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">5. Liens hypertextes</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Le site traffik-web.fr peut contenir des liens hypertextes vers d'autres sites. Traffik Web n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">6. Droit applicable</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Les présentes mentions légales sont régies par le droit français. En cas de litige, les tribunaux français seront seuls compétents.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">7. Contact</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Pour toute question concernant ces mentions légales, vous pouvez nous contacter par email : <a href="mailto:contact@traffik-web.fr" className="text-[#0066FF] hover:underline">contact@traffik-web.fr</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
