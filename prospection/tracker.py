"""
Tracking des prospects contactes
Usage:
  python3 tracker.py                    → voir le tableau de bord
  python3 tracker.py status <nom>       → voir un prospect
  python3 tracker.py dm <nom> <plateforme> → marquer comme DM envoye
  python3 tracker.py repondu <nom>      → marquer comme a repondu
  python3 tracker.py rdv <nom>          → marquer comme RDV pris
  python3 tracker.py vendu <nom>        → marquer comme vendu
  python3 tracker.py reset              → tout remettre a A_CONTACTER
"""

import sys
import csv
import os
from datetime import datetime
from config import PROSPECTS_CSV


STATUTS = {
    "A_CONTACTER": "⚪",
    "DM_ENVOYE": "📩",
    "RELANCE": "🔄",
    "REPONDU": "💬",
    "RDV": "📅",
    "VENDU": "💰",
    "IGNORE": "❌"
}


def load_all():
    """Charge tous les prospects"""
    if not os.path.exists(PROSPECTS_CSV):
        print("[!] Aucun prospect. Lance finder.py d'abord.")
        sys.exit(1)

    prospects = []
    with open(PROSPECTS_CSV, "r") as f:
        reader = csv.DictReader(f)
        fieldnames = reader.fieldnames
        for row in reader:
            prospects.append(row)

    return prospects, fieldnames


def save_all(prospects, fieldnames):
    """Sauvegarde tous les prospects"""
    with open(PROSPECTS_CSV, "w", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(prospects)


def find_prospect(prospects, search):
    """Trouve un prospect par nom (recherche partielle)"""
    search_lower = search.lower()
    matches = [p for p in prospects if search_lower in p["nom"].lower()]
    return matches


def dashboard(prospects):
    """Affiche le tableau de bord"""
    stats = {}
    for s in STATUTS:
        stats[s] = 0

    for p in prospects:
        st = p.get("statut", "A_CONTACTER")
        stats[st] = stats.get(st, 0) + 1

    total = len(prospects)
    hot = len([p for p in prospects if p.get("score_site") in ("MAUVAIS", "PAS DE SITE")])

    print(f"\n{'='*50}")
    print(f"  TABLEAU DE BORD PROSPECTION")
    print(f"{'='*50}")
    print(f"\n  Total prospects: {total}")
    print(f"  Prospects chauds (site mauvais/absent): {hot}")
    print()

    for statut, emoji in STATUTS.items():
        count = stats.get(statut, 0)
        bar = "█" * count + "░" * (max(0, 20 - count))
        if count > 0:
            print(f"  {emoji} {statut:<15} {bar} {count}")

    # Taux de conversion
    contactes = sum(stats.get(s, 0) for s in ["DM_ENVOYE", "RELANCE", "REPONDU", "RDV", "VENDU"])
    repondus = sum(stats.get(s, 0) for s in ["REPONDU", "RDV", "VENDU"])
    vendus = stats.get("VENDU", 0)

    if contactes > 0:
        print(f"\n  📊 Taux de reponse: {repondus}/{contactes} ({repondus/contactes*100:.0f}%)")
        print(f"  📊 Taux de vente: {vendus}/{contactes} ({vendus/contactes*100:.0f}%)")

    # Prochains a contacter
    a_contacter = [p for p in prospects if p.get("statut") == "A_CONTACTER" and p.get("score_site") in ("MAUVAIS", "PAS DE SITE")]
    if a_contacter:
        print(f"\n  🎯 PROCHAINS PROSPECTS CHAUDS:")
        for p in a_contacter[:5]:
            print(f"     → {p['nom']} ({p['categorie']}, {p['ville']}) - {p.get('score_site')}")

    # Relances a faire
    dm_envoyes = [p for p in prospects if p.get("statut") == "DM_ENVOYE"]
    if dm_envoyes:
        print(f"\n  🔄 A RELANCER ({len(dm_envoyes)}):")
        for p in dm_envoyes[:5]:
            print(f"     → {p['nom']} sur {p.get('plateforme_dm', '?')}")

    print(f"\n{'='*50}\n")


def update_status(prospects, fieldnames, search, new_status, plateforme=None):
    """Met a jour le statut d'un prospect"""
    matches = find_prospect(prospects, search)

    if not matches:
        print(f"[!] Aucun prospect trouve pour '{search}'")
        return

    if len(matches) > 1:
        print(f"[!] Plusieurs resultats pour '{search}':")
        for m in matches:
            print(f"    - {m['nom']} ({m['categorie']}, {m['ville']})")
        print("    Precise ta recherche.")
        return

    prospect = matches[0]
    old_status = prospect.get("statut", "A_CONTACTER")

    for p in prospects:
        if p["place_id"] == prospect["place_id"]:
            p["statut"] = new_status
            if plateforme:
                p["plateforme_dm"] = plateforme
            now = datetime.now().strftime("%Y-%m-%d %H:%M")
            notes = p.get("notes", "")
            p["notes"] = f"{notes} | {now}: {old_status}→{new_status}" if notes else f"{now}: {old_status}→{new_status}"

    save_all(prospects, fieldnames)
    emoji = STATUTS.get(new_status, "❓")
    print(f"\n  {emoji} {prospect['nom']}: {old_status} → {new_status}")
    if plateforme:
        print(f"  📱 Plateforme: {plateforme}")
    print()


def main():
    prospects, fieldnames = load_all()

    if len(sys.argv) < 2:
        dashboard(prospects)
        return

    action = sys.argv[1].lower()

    if action == "status" and len(sys.argv) >= 3:
        search = " ".join(sys.argv[2:])
        matches = find_prospect(prospects, search)
        for m in matches:
            emoji = STATUTS.get(m.get("statut", ""), "❓")
            print(f"\n  {emoji} {m['nom']}")
            print(f"     Cat: {m['categorie']} | Ville: {m['ville']}")
            print(f"     Tel: {m.get('telephone', 'N/A')}")
            print(f"     Site: {m.get('site_web', 'Aucun')} ({m.get('score_site', '?')})")
            print(f"     Statut: {m.get('statut', 'A_CONTACTER')}")
            print(f"     DM sur: {m.get('plateforme_dm', 'N/A')}")
            print(f"     Notes: {m.get('notes', '')}")
            print()

    elif action == "dm" and len(sys.argv) >= 4:
        plateforme = sys.argv[-1].lower()
        search = " ".join(sys.argv[2:-1])
        update_status(prospects, fieldnames, search, "DM_ENVOYE", plateforme)

    elif action == "repondu" and len(sys.argv) >= 3:
        search = " ".join(sys.argv[2:])
        update_status(prospects, fieldnames, search, "REPONDU")

    elif action == "rdv" and len(sys.argv) >= 3:
        search = " ".join(sys.argv[2:])
        update_status(prospects, fieldnames, search, "RDV")

    elif action == "vendu" and len(sys.argv) >= 3:
        search = " ".join(sys.argv[2:])
        update_status(prospects, fieldnames, search, "VENDU")

    elif action == "relance" and len(sys.argv) >= 3:
        search = " ".join(sys.argv[2:])
        update_status(prospects, fieldnames, search, "RELANCE")

    elif action == "ignore" and len(sys.argv) >= 3:
        search = " ".join(sys.argv[2:])
        update_status(prospects, fieldnames, search, "IGNORE")

    elif action == "reset":
        for p in prospects:
            p["statut"] = "A_CONTACTER"
            p["plateforme_dm"] = ""
            p["notes"] = ""
        save_all(prospects, fieldnames)
        print(f"\n  ✅ {len(prospects)} prospects remis a A_CONTACTER\n")

    else:
        print(__doc__)


if __name__ == "__main__":
    main()
