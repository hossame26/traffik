"""
Genere des messages DM personnalises pour chaque prospect
Usage: python3 messages.py [plateforme]
Plateformes: instagram, linkedin, facebook, whatsapp, all
"""

import sys
import csv
import os
from config import PRENOM, SITE, PHONE, WHATSAPP, PROSPECTS_CSV


def generate_instagram_dm(prospect):
    """Message court Instagram (max ~500 chars)"""
    nom = prospect["nom"]
    categorie = prospect["categorie"]
    problemes = prospect.get("problemes", "")
    has_site = prospect.get("score_site") not in ("PAS DE SITE", "")

    if not has_site:
        return (
            f"Salut ! J'ai decouvert {nom} sur Google Maps et j'ai vu que vous n'avez pas encore de site web. "
            f"En 2026, 87% des clients cherchent en ligne avant de se deplacer.\n\n"
            f"Je cree des sites pour les {categorie}s - design pro, SEO local, mobile-first. "
            f"Je peux vous montrer un apercu gratuit de ce que ca donnerait pour {nom} ?\n\n"
            f"Hossame - traffik-web.fr"
        )

    # A un site mais avec des problemes
    issues_text = ""
    if "Lent" in problemes:
        issues_text = "votre site met un peu de temps a charger (ca fait perdre des clients)"
    elif "Pas de SSL" in problemes:
        issues_text = "votre site n'est pas securise (Google penalise ca)"
    elif "Pas responsive" in problemes:
        issues_text = "votre site n'est pas optimise pour le mobile"
    elif "Pas de meta" in problemes:
        issues_text = "votre site manque d'optimisation SEO"
    else:
        issues_text = "j'ai repere quelques points d'amelioration sur votre site"

    return (
        f"Salut ! J'ai regarde le site de {nom} et {issues_text}.\n\n"
        f"Je fais des audits rapides pour les {categorie}s - je peux vous envoyer "
        f"un mini-diagnostic gratuit en 24h avec les 3 actions prioritaires ?\n\n"
        f"Hossame - traffik-web.fr"
    )


def generate_linkedin_dm(prospect):
    """Message LinkedIn pro"""
    nom = prospect["nom"]
    categorie = prospect["categorie"]
    ville = prospect["ville"]
    has_site = prospect.get("score_site") not in ("PAS DE SITE", "")
    problemes = prospect.get("problemes", "")

    if not has_site:
        return (
            f"Bonjour,\n\n"
            f"Je me permets de vous contacter car j'ai remarque que {nom} "
            f"n'a pas encore de presence web. Dans le secteur {categorie} a {ville}, "
            f"c'est un vrai levier de croissance inexploite.\n\n"
            f"Je suis specialise dans la creation de sites web pour les professionnels locaux. "
            f"Je serais ravi de vous montrer ce qu'un site optimise pourrait apporter "
            f"a votre activite (plus de reservations, meilleure visibilite Google Maps).\n\n"
            f"Seriez-vous ouvert a un echange de 10 minutes ?\n\n"
            f"Hossame Laib\n"
            f"traffik-web.fr | {PHONE}"
        )

    return (
        f"Bonjour,\n\n"
        f"J'ai pris le temps d'analyser le site de {nom} et j'ai identifie "
        f"plusieurs axes d'amelioration qui pourraient booster votre visibilite en ligne.\n\n"
        f"En bref : {problemes.replace(' | ', ', ')}.\n\n"
        f"Je realise des audits complets (SEO, performance, securite) avec un plan d'action "
        f"concret et priorise. Ca vous dirait de recevoir un mini-diagnostic gratuit ?\n\n"
        f"Hossame Laib\n"
        f"traffik-web.fr | {PHONE}"
    )


def generate_facebook_dm(prospect):
    """Message Facebook Messenger"""
    nom = prospect["nom"]
    categorie = prospect["categorie"]
    has_site = prospect.get("score_site") not in ("PAS DE SITE", "")
    problemes = prospect.get("problemes", "")

    if not has_site:
        return (
            f"Bonjour {nom} !\n\n"
            f"Je suis tombe sur votre page et j'ai vu que vous n'avez pas de site web. "
            f"Saviez-vous que 87% des clients recherchent en ligne avant de choisir un {categorie} ?\n\n"
            f"Je cree des sites web pour les pros comme vous - design moderne, "
            f"referencement Google, compatible mobile. A partir de 299 euros.\n\n"
            f"Je peux vous montrer un apercu gratuit ?\n\n"
            f"Hossame - traffik-web.fr"
        )

    return (
        f"Bonjour {nom} !\n\n"
        f"J'ai jete un oeil a votre site et j'ai remarque quelques points "
        f"qui pourraient etre ameliores : {problemes.replace(' | ', ', ')}.\n\n"
        f"Je propose un audit gratuit de 3 minutes - je vous dis exactement "
        f"ce qui freine votre visibilite et comment corriger ca rapidement.\n\n"
        f"Ca vous interesse ?\n\n"
        f"Hossame - traffik-web.fr"
    )


def generate_whatsapp_dm(prospect):
    """Message WhatsApp direct"""
    nom = prospect["nom"]
    categorie = prospect["categorie"]
    telephone = prospect.get("telephone", "")
    has_site = prospect.get("score_site") not in ("PAS DE SITE", "")
    problemes = prospect.get("problemes", "")

    if not has_site:
        return (
            f"Bonjour, je suis Hossame de Traffik Web.\n\n"
            f"J'ai vu {nom} sur Google Maps - super {categorie} ! "
            f"J'ai remarque que vous n'avez pas encore de site web.\n\n"
            f"Je cree des sites pour les pros comme vous : design sur-mesure, "
            f"SEO local pour apparaitre sur Google, 100% mobile.\n\n"
            f"Je peux vous faire un apercu gratuit si ca vous dit ?\n\n"
            f"traffik-web.fr"
        )

    return (
        f"Bonjour, je suis Hossame de Traffik Web.\n\n"
        f"J'ai analyse rapidement le site de {nom} et j'ai repere des points "
        f"d'amelioration : {problemes.replace(' | ', ', ')}.\n\n"
        f"Je peux vous envoyer un mini-audit gratuit avec les actions prioritaires "
        f"pour booster votre visibilite ?\n\n"
        f"traffik-web.fr"
    )


GENERATORS = {
    "instagram": ("Instagram DM", generate_instagram_dm),
    "linkedin": ("LinkedIn Message", generate_linkedin_dm),
    "facebook": ("Facebook Messenger", generate_facebook_dm),
    "whatsapp": ("WhatsApp Direct", generate_whatsapp_dm),
}


def load_prospects(statut_filter="A_CONTACTER"):
    """Charge les prospects depuis le CSV"""
    if not os.path.exists(PROSPECTS_CSV):
        print(f"[!] Fichier non trouve: {PROSPECTS_CSV}")
        print("    Lance d'abord: python3 finder.py <ville> <categorie>")
        sys.exit(1)

    prospects = []
    with open(PROSPECTS_CSV, "r") as f:
        reader = csv.DictReader(f)
        for row in reader:
            if not statut_filter or row.get("statut") == statut_filter:
                prospects.append(row)

    return prospects


def main():
    plateforme = sys.argv[1] if len(sys.argv) > 1 else "all"

    if plateforme not in GENERATORS and plateforme != "all":
        print(f"Plateforme inconnue: {plateforme}")
        print(f"Choix: {', '.join(GENERATORS.keys())}, all")
        sys.exit(1)

    prospects = load_prospects()

    if not prospects:
        print("Aucun prospect A_CONTACTER. Lance finder.py d'abord.")
        sys.exit(1)

    # Filtrer les meilleurs prospects (MAUVAIS ou PAS DE SITE en priorite)
    hot = [p for p in prospects if p.get("score_site") in ("MAUVAIS", "PAS DE SITE")]
    warm = [p for p in prospects if p.get("score_site") == "MOYEN"]
    ordered = hot + warm

    if not ordered:
        ordered = prospects

    platforms = [plateforme] if plateforme != "all" else list(GENERATORS.keys())

    # Generer les messages
    output_file = f"/Users/hossamelaib/Documents/traffik/prospection/messages_output.txt"

    with open(output_file, "w") as f:
        f.write(f"{'='*70}\n")
        f.write(f"  MESSAGES DM - {len(ordered)} PROSPECTS\n")
        f.write(f"  Genere le {__import__('datetime').datetime.now().strftime('%Y-%m-%d %H:%M')}\n")
        f.write(f"{'='*70}\n\n")

        for i, prospect in enumerate(ordered):
            nom = prospect["nom"]
            score = prospect.get("score_site", "?")
            emoji = {"MAUVAIS": "🔴", "MOYEN": "🟡", "PAS DE SITE": "⚫"}.get(score, "❓")

            f.write(f"\n{'─'*70}\n")
            f.write(f"  {emoji} [{i+1}] {nom} ({prospect['categorie']} - {prospect['ville']})\n")
            f.write(f"  Score: {score} | Tel: {prospect.get('telephone', 'N/A')} | Site: {prospect.get('site_web', 'Aucun')}\n")
            f.write(f"  Maps: {prospect.get('google_maps', '')}\n")
            f.write(f"{'─'*70}\n")

            for platform_key in platforms:
                label, generator = GENERATORS[platform_key]
                msg = generator(prospect)
                f.write(f"\n  📱 {label}:\n")
                f.write(f"  {'·'*40}\n")
                for line in msg.split("\n"):
                    f.write(f"  {line}\n")
                f.write(f"  {'·'*40}\n")

    print(f"\n✅ {len(ordered)} prospects × {len(platforms)} plateformes")
    print(f"📄 Messages generes dans: {output_file}")
    print(f"\n💡 Copie-colle les messages et envoie les DMs manuellement.")
    print(f"   Apres envoi, mets a jour le statut avec: python3 tracker.py\n")

    # Afficher le premier prospect en preview
    if ordered:
        p = ordered[0]
        print(f"\n{'='*50}")
        print(f"  PREVIEW - {p['nom']}")
        print(f"{'='*50}")
        for platform_key in platforms[:1]:
            label, generator = GENERATORS[platform_key]
            print(f"\n  {label}:")
            print(f"  {generator(p)}")
        print()


if __name__ == "__main__":
    main()
