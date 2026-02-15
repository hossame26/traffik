"""
Envoi semi-automatique de DMs Instagram via Playwright
Le script ouvre Instagram, cherche le commerce, ouvre le DM et tape le message.
Tu n'as qu'a cliquer Envoyer.

Usage:
  python3 auto_instagram.py                → traite tous les A_CONTACTER
  python3 auto_instagram.py "Chez Sauveur" → traite un seul prospect
  python3 auto_instagram.py --login        → se connecter d'abord

Pre-requis: pip3 install playwright && playwright install chromium
"""

import sys
import os
import csv
import time
import json
import random
from datetime import datetime
from config import PROSPECTS_CSV

# Chemin pour sauvegarder la session Instagram
INSTAGRAM_SESSION = os.path.expanduser("~/.instagram-session")
DELAY_MIN = 45   # secondes minimum entre DMs
DELAY_MAX = 120  # secondes maximum entre DMs
TYPING_DELAY_MIN = 10   # ms min entre caracteres
TYPING_DELAY_MAX = 35   # ms max entre caracteres
MAX_DMS_PER_SESSION = 15  # limite par session pour eviter ban


def get_message(prospect):
    """Genere le message Instagram pour ce prospect"""
    nom = prospect["nom"]
    categorie = prospect["categorie"]
    has_site = prospect.get("score_site") not in ("PAS DE SITE", "")
    problemes = prospect.get("problemes", "")

    if not has_site:
        return (
            f"Salut ! J'ai decouvert {nom} sur Google Maps et j'ai vu que vous n'avez "
            f"pas encore de site web. En 2026, 87% des clients cherchent en ligne avant "
            f"de se deplacer.\n\n"
            f"Je cree des sites pour les {categorie}s - design pro, SEO local, mobile-first. "
            f"Je peux vous montrer un apercu gratuit de ce que ca donnerait pour {nom} ?\n\n"
            f"Hossame - traffik-web.fr"
        )

    issues_text = ""
    if "Lent" in problemes:
        issues_text = "votre site met du temps a charger"
    elif "Pas de SSL" in problemes:
        issues_text = "votre site n'est pas securise"
    elif "Pas responsive" in problemes:
        issues_text = "votre site n'est pas optimise mobile"
    else:
        issues_text = "j'ai repere des points d'amelioration sur votre site"

    return (
        f"Salut ! J'ai regarde le site de {nom} et {issues_text}.\n\n"
        f"Je fais des audits rapides pour les {categorie}s - je peux vous envoyer "
        f"un mini-diagnostic gratuit en 24h avec les 3 actions prioritaires ?\n\n"
        f"Hossame - traffik-web.fr"
    )


def update_csv_status(place_id, platform="instagram"):
    """Met a jour le statut dans le CSV"""
    rows = []
    fieldnames = None

    with open(PROSPECTS_CSV, "r") as f:
        reader = csv.DictReader(f)
        fieldnames = reader.fieldnames
        for row in reader:
            if row["place_id"] == place_id:
                row["statut"] = "DM_ENVOYE"
                row["plateforme_dm"] = platform
                now = datetime.now().strftime("%Y-%m-%d %H:%M")
                old = row.get("notes", "")
                row["notes"] = f"{old} | {now}: DM {platform}" if old else f"{now}: DM {platform}"
            rows.append(row)

    with open(PROSPECTS_CSV, "w", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(rows)


def run_instagram(prospects):
    """Lance Playwright pour envoyer les DMs Instagram"""
    try:
        from playwright.sync_api import sync_playwright
    except ImportError:
        print("[!] Playwright non installe.")
        print("    pip3 install --break-system-packages playwright")
        print("    python3 -m playwright install chromium")
        sys.exit(1)

    with sync_playwright() as p:
        # Ouvrir le navigateur avec session persistante
        context = p.chromium.launch_persistent_context(
            INSTAGRAM_SESSION,
            headless=False,
            viewport={"width": 1280, "height": 900},
            user_agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
        )

        page = context.pages[0] if context.pages else context.new_page()

        # Verifier si on est connecte
        page.goto("https://www.instagram.com/", wait_until="domcontentloaded")
        time.sleep(3)

        # Fermer les popups eventuels
        try:
            # Popup cookies
            page.click("text=Autoriser les cookies essentiels", timeout=3000)
        except:
            pass

        try:
            # Popup notifications
            page.click("text=Plus tard", timeout=3000)
        except:
            pass

        # Verifier la connexion
        if "/accounts/login" in page.url:
            print("\n  ⚠️  Tu n'es pas connecte a Instagram.")
            print("  → Connecte-toi manuellement dans la fenetre du navigateur")
            print("  → Puis appuie sur Entree ici...\n")
            input("  [Appuie sur Entree une fois connecte] ")

        print(f"\n  ✅ Connecte a Instagram")
        print(f"  📨 {len(prospects)} DMs a envoyer\n")

        for i, prospect in enumerate(prospects):
            nom = prospect["nom"]
            message = get_message(prospect)

            print(f"\n  {'─'*50}")
            print(f"  [{i+1}/{len(prospects)}] {nom}")
            print(f"  {'─'*50}")

            # Chercher le commerce sur Instagram
            search_query = nom.replace(" ", "").lower()

            # Aller dans la recherche (delai humain)
            page.goto("https://www.instagram.com/explore/search/", wait_until="domcontentloaded")
            time.sleep(random.uniform(2, 4))

            # Cliquer sur la barre de recherche
            try:
                search_input = page.wait_for_selector('input[placeholder*="Recherch"]', timeout=5000)
                if not search_input:
                    search_input = page.wait_for_selector('input[aria-label*="Search"]', timeout=5000)

                if search_input:
                    search_input.fill(nom)
                    time.sleep(random.uniform(2, 5))

                    # Voir les resultats
                    print(f"  🔍 Recherche '{nom}' sur Instagram...")
                    print(f"  → Selectionne le bon compte dans la fenetre")
                    print(f"  → Puis va dans ses DMs")

                    input(f"\n  [Appuie Entree quand tu es dans le chat DM de {nom}] ")

                    # Trouver le champ de message
                    msg_input = page.wait_for_selector('textarea[placeholder*="Message"]', timeout=10000)
                    if not msg_input:
                        msg_input = page.wait_for_selector('div[role="textbox"]', timeout=5000)

                    if msg_input:
                        # Taper le message ligne par ligne (vitesse humaine aleatoire)
                        lines = message.split("\n")
                        for j, line in enumerate(lines):
                            if line:
                                typing_speed = random.randint(TYPING_DELAY_MIN, TYPING_DELAY_MAX)
                                msg_input.type(line, delay=typing_speed)
                            if j < len(lines) - 1:
                                msg_input.press("Shift+Enter")
                            time.sleep(random.uniform(0.1, 0.4))

                        print(f"\n  ✅ Message tape !")
                        print(f"  → Verifie le message et clique Envoyer")

                        response = input(f"\n  Envoye ? (o/n/s pour skip) : ").strip().lower()

                        if response in ("o", "oui", "y", ""):
                            update_csv_status(prospect["place_id"], "instagram")
                            print(f"  📩 {nom} marque comme DM_ENVOYE")
                        elif response in ("s", "skip"):
                            print(f"  ⏩ {nom} skip")
                        else:
                            print(f"  ❌ {nom} non envoye")

                    else:
                        print(f"  ❌ Champ message non trouve")
                else:
                    print(f"  ❌ Barre de recherche non trouvee")

            except Exception as e:
                print(f"  ❌ Erreur: {str(e)[:80]}")
                continue

            # Delai aleatoire entre les DMs (anti-ban)
            if i < len(prospects) - 1:
                delay = random.randint(DELAY_MIN, DELAY_MAX)
                print(f"\n  ⏳ Pause {delay}s avant le prochain DM (anti-ban)...")
                time.sleep(delay)

            # Limite par session
            if i + 1 >= MAX_DMS_PER_SESSION:
                print(f"\n  ⚠️  Limite de {MAX_DMS_PER_SESSION} DMs atteinte pour cette session.")
                print(f"  → Relance le script plus tard pour les suivants.")
                break

        print(f"\n{'='*50}")
        print(f"  ✅ Session terminee !")
        print(f"  python3 tracker.py  → voir le dashboard")
        print(f"{'='*50}\n")

        context.close()


def main():
    # Mode login seul
    if "--login" in sys.argv:
        try:
            from playwright.sync_api import sync_playwright
        except ImportError:
            print("[!] pip3 install --break-system-packages playwright && python3 -m playwright install chromium")
            sys.exit(1)

        with sync_playwright() as p:
            context = p.chromium.launch_persistent_context(
                INSTAGRAM_SESSION, headless=False,
                viewport={"width": 1280, "height": 900}
            )
            page = context.pages[0] if context.pages else context.new_page()
            page.goto("https://www.instagram.com/accounts/login/")
            print("\n  Connecte-toi dans le navigateur puis ferme la fenetre.\n")
            page.wait_for_event("close", timeout=300000)
            context.close()
        print("  ✅ Session sauvegardee !")
        return

    # Charger prospects
    if not os.path.exists(PROSPECTS_CSV):
        print("[!] Aucun prospect. Lance finder.py ou add.py d'abord.")
        sys.exit(1)

    prospects = []
    search_name = " ".join(sys.argv[1:]) if len(sys.argv) > 1 and not sys.argv[1].startswith("-") else None

    with open(PROSPECTS_CSV, "r") as f:
        reader = csv.DictReader(f)
        for row in reader:
            if search_name:
                if search_name.lower() in row["nom"].lower():
                    prospects.append(row)
            elif row.get("statut") == "A_CONTACTER":
                prospects.append(row)

    if not prospects:
        print("[!] Aucun prospect a contacter.")
        sys.exit(1)

    # Prioriser les prospects sans site
    hot = [p for p in prospects if p.get("score_site") in ("MAUVAIS", "PAS DE SITE")]
    warm = [p for p in prospects if p not in hot]
    prospects = hot + warm

    print(f"\n{'='*50}")
    print(f"  INSTAGRAM DM - {len(prospects)} prospects")
    print(f"  {len(hot)} chauds (sans site) | {len(warm)} tiedes")
    print(f"{'='*50}")

    run_instagram(prospects)


if __name__ == "__main__":
    main()
