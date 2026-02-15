"""
Ajouter un prospect manuellement
Usage:
  python3 add.py "Nom Business" "categorie" "ville" "telephone" "site_web"
  python3 add.py "Chez Marco" restaurant Marseille "04 91 XX XX XX" "https://chezmarco.fr"
  python3 add.py "Salon Bella" coiffeur Marseille "" ""
"""

import sys
import csv
import os
import uuid
from datetime import datetime
from config import PROSPECTS_CSV

# On importe check_site_quality du finder
sys.path.insert(0, os.path.dirname(__file__))
from finder import check_site_quality


def main():
    if len(sys.argv) < 4:
        print("Usage: python3 add.py \"Nom\" \"categorie\" \"ville\" [telephone] [site_web]")
        print("Ex:    python3 add.py \"Chez Marco\" restaurant Marseille \"04 91 00 00 00\" \"https://chezmarco.fr\"")
        sys.exit(1)

    nom = sys.argv[1]
    categorie = sys.argv[2]
    ville = sys.argv[3]
    telephone = sys.argv[4] if len(sys.argv) > 4 else ""
    site_web = sys.argv[5] if len(sys.argv) > 5 else ""

    # Check site si fourni
    score = "PAS DE SITE"
    details = "Aucun site"
    if site_web:
        print(f"  Analyse de {site_web}...", end=" ")
        check = check_site_quality(site_web)
        score = check.get("score", "?")
        details = check.get("details", "")
        emoji = {"MAUVAIS": "🔴", "MOYEN": "🟡", "CORRECT": "🟢"}.get(score, "❓")
        print(f"{emoji} {score}")

    # Sauvegarder
    file_exists = os.path.exists(PROSPECTS_CSV)
    fieldnames = [
        "date", "nom", "categorie", "ville", "adresse", "telephone",
        "site_web", "score_site", "problemes", "google_maps",
        "rating", "nb_avis", "place_id", "statut", "plateforme_dm", "notes"
    ]

    with open(PROSPECTS_CSV, "a", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        if not file_exists:
            writer.writeheader()
        writer.writerow({
            "date": datetime.now().strftime("%Y-%m-%d %H:%M"),
            "nom": nom,
            "categorie": categorie,
            "ville": ville,
            "adresse": "",
            "telephone": telephone,
            "site_web": site_web,
            "score_site": score,
            "problemes": details,
            "google_maps": "",
            "rating": "",
            "nb_avis": "",
            "place_id": f"manual_{uuid.uuid4().hex[:8]}",
            "statut": "A_CONTACTER",
            "plateforme_dm": "",
            "notes": ""
        })

    print(f"\n  ✅ {nom} ({categorie}, {ville}) ajoute aux prospects")
    print(f"     Score site: {score}")
    print(f"     → python3 messages.py instagram  (pour generer les DMs)\n")


if __name__ == "__main__":
    main()
