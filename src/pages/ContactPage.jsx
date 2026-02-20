import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Contact from '../components/sections/Contact';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#050505] text-black dark:text-white pt-28 pb-10">
      <SEOHead
        title="Contact | Devis Gratuit Création Site Web | Traffik Web"
        description="Contactez Traffik Web pour votre projet de création de site web. Devis gratuit en 24h, réponse rapide par WhatsApp ou formulaire. Freelance web en France."
        canonical="https://traffik-web.fr/contact"
        keywords="contact agence web, devis site web gratuit, contacter freelance web, devis creation site internet"
      />
      <div className="max-w-5xl mx-auto px-4">
        <Link to="/" className="inline-flex items-center gap-2 text-[#0066FF] hover:underline mb-6 text-sm">
          <ArrowLeft className="w-4 h-4" /> Retour à l'accueil
        </Link>
      </div>
      <Contact />
    </div>
  );
}
