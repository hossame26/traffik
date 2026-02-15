"""
Trouve des prospects via Google Places API
Usage: python3 finder.py <ville> <categorie> [nombre]
Exemple: python3 finder.py Marseille restaurant 20
"""

import sys
import json
import csv
import os
import time
import requests
from urllib.parse import urlparse
from datetime import datetime
from config import GOOGLE_PLACES_KEY, HUNTER_API_KEY, PROSPECTS_CSV


def search_places(ville, categorie, max_results=20):
    """Recherche des commerces via Google Places Text Search"""
    url = "https://maps.googleapis.com/maps/api/place/textsearch/json"
    query = f"{categorie} {ville}"

    results = []
    params = {
        "query": query,
        "key": GOOGLE_PLACES_KEY,
        "language": "fr",
        "region": "fr"
    }

    resp = requests.get(url, params=params)
    data = resp.json()

    if data.get("status") != "OK":
        print(f"[!] Erreur API: {data.get('status')} - {data.get('error_message', '')}")
        return []

    for place in data.get("results", [])[:max_results]:
        results.append({
            "place_id": place.get("place_id"),
            "nom": place.get("name"),
            "adresse": place.get("formatted_address", ""),
            "rating": place.get("rating", 0),
            "nb_avis": place.get("user_ratings_total", 0),
            "categorie": categorie,
            "ville": ville,
        })

    return results


def get_details(place_id):
    """Recupere les details d'un commerce (telephone, site web, horaires)"""
    url = "https://maps.googleapis.com/maps/api/place/details/json"
    params = {
        "place_id": place_id,
        "key": GOOGLE_PLACES_KEY,
        "fields": "name,formatted_phone_number,website,url,opening_hours,business_status",
        "language": "fr"
    }

    resp = requests.get(url, params=params)
    data = resp.json()

    if data.get("status") != "OK":
        return {}

    result = data.get("result", {})
    return {
        "telephone": result.get("formatted_phone_number", ""),
        "site_web": result.get("website", ""),
        "google_maps": result.get("url", ""),
        "status": result.get("business_status", ""),
        "ouvert": bool(result.get("opening_hours", {}).get("open_now"))
    }


def check_site_quality(url):
    """Check rapide de la qualite du site (SSL, reponse, basique)"""
    if not url:
        return {"has_site": False, "score": "PAS DE SITE", "details": "Aucun site web"}

    try:
        resp = requests.get(url, timeout=8, allow_redirects=True)
        load_time = resp.elapsed.total_seconds()
        has_ssl = resp.url.startswith("https")
        html = resp.text.lower()

        issues = []

        if not has_ssl:
            issues.append("Pas de SSL/HTTPS")
        if load_time > 3:
            issues.append(f"Lent ({load_time:.1f}s)")
        if '<meta name="viewport"' not in html and "viewport" not in html:
            issues.append("Pas responsive")
        if '<meta name="description"' not in html:
            issues.append("Pas de meta description")
        if "<h1" not in html:
            issues.append("Pas de balise H1")
        if "google-analytics" not in html and "gtag" not in html and "gtm" not in html:
            issues.append("Pas de Google Analytics")

        if len(issues) >= 4:
            score = "MAUVAIS"
        elif len(issues) >= 2:
            score = "MOYEN"
        else:
            score = "CORRECT"

        return {
            "has_site": True,
            "score": score,
            "load_time": f"{load_time:.1f}s",
            "ssl": has_ssl,
            "issues": issues,
            "details": " | ".join(issues) if issues else "RAS"
        }
    except Exception as e:
        return {"has_site": True, "score": "ERREUR", "details": str(e)[:50]}


def find_email(domain):
    """Trouve l'email via Hunter.io Domain Search"""
    if not HUNTER_API_KEY or not domain:
        return ""

    try:
        clean_domain = urlparse(domain).netloc or domain
        clean_domain = clean_domain.replace("www.", "")

        resp = requests.get(
            "https://api.hunter.io/v2/domain-search",
            params={"domain": clean_domain, "api_key": HUNTER_API_KEY, "limit": 1},
            timeout=8
        )
        data = resp.json()

        if data.get("data", {}).get("emails"):
            return data["data"]["emails"][0]["value"]

        # Fallback : email-finder avec le nom du domaine
        resp2 = requests.get(
            "https://api.hunter.io/v2/email-finder",
            params={"domain": clean_domain, "api_key": HUNTER_API_KEY},
            timeout=8
        )
        data2 = resp2.json()
        if data2.get("data", {}).get("email"):
            return data2["data"]["email"]

    except Exception:
        pass

    # Pattern guessing si pas de Hunter key
    patterns = [f"contact@{clean_domain}", f"info@{clean_domain}"]
    return patterns[0] if not HUNTER_API_KEY else ""


def save_to_csv(prospects):
    """Sauvegarde les prospects dans le CSV"""
    file_exists = os.path.exists(PROSPECTS_CSV)

    # Charger les place_ids existants pour eviter les doublons
    existing_ids = set()
    if file_exists:
        with open(PROSPECTS_CSV, "r") as f:
            reader = csv.DictReader(f)
            for row in reader:
                existing_ids.add(row.get("place_id", ""))

    fieldnames = [
        "date", "nom", "categorie", "ville", "adresse", "telephone",
        "email", "site_web", "score_site", "problemes", "google_maps",
        "rating", "nb_avis", "place_id", "statut", "plateforme_dm", "notes"
    ]

    new_count = 0
    with open(PROSPECTS_CSV, "a", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        if not file_exists:
            writer.writeheader()

        for p in prospects:
            if p["place_id"] in existing_ids:
                continue
            writer.writerow({
                "date": datetime.now().strftime("%Y-%m-%d %H:%M"),
                "nom": p["nom"],
                "categorie": p["categorie"],
                "ville": p["ville"],
                "adresse": p["adresse"],
                "telephone": p.get("telephone", ""),
                "email": p.get("email", ""),
                "site_web": p.get("site_web", ""),
                "score_site": p.get("score", ""),
                "problemes": p.get("details", ""),
                "google_maps": p.get("google_maps", ""),
                "rating": p.get("rating", ""),
                "nb_avis": p.get("nb_avis", ""),
                "place_id": p["place_id"],
                "statut": "A_CONTACTER",
                "plateforme_dm": "",
                "notes": ""
            })
            new_count += 1

    return new_count


def main():
    if len(sys.argv) < 3:
        print("Usage: python3 finder.py <ville> <categorie> [nombre]")
        print("Exemple: python3 finder.py Marseille restaurant 20")
        print(f"\nVilles: Marseille, Aix-en-Provence, Nice, Lyon, Paris...")
        print(f"Categories: restaurant, coiffeur, boulangerie, spa, dentiste...")
        sys.exit(1)

    ville = sys.argv[1]
    categorie = sys.argv[2]
    max_results = int(sys.argv[3]) if len(sys.argv) > 3 else 20

    print(f"\n🔍 Recherche: {categorie} a {ville} (max {max_results})...\n")

    places = search_places(ville, categorie, max_results)

    if not places:
        print("Aucun resultat trouve.")
        sys.exit(1)

    print(f"✅ {len(places)} commerces trouves. Analyse en cours...\n")

    enriched = []
    for i, place in enumerate(places):
        print(f"  [{i+1}/{len(places)}] {place['nom']}...", end=" ")

        # Details Google
        details = get_details(place["place_id"])
        place.update(details)

        # Check site
        site_check = check_site_quality(place.get("site_web", ""))
        place.update(site_check)

        # Email enrichment
        site_url = place.get("site_web", "")
        email = find_email(site_url) if site_url else ""
        place["email"] = email

        # Affichage
        score_emoji = {"MAUVAIS": "🔴", "MOYEN": "🟡", "CORRECT": "🟢", "PAS DE SITE": "⚫", "ERREUR": "⚠️"}.get(site_check["score"], "❓")
        email_info = f" 📧 {email}" if email else ""
        print(f"{score_emoji} {site_check['score']} - {site_check.get('details', '')}{email_info}")

        enriched.append(place)

        # Rate limiting Google API (1s entre chaque requete)
        if i < len(places) - 1:
            time.sleep(1)

    # Sauvegarde
    new = save_to_csv(enriched)

    # Resume
    mauvais = [p for p in enriched if p.get("score") in ("MAUVAIS", "PAS DE SITE")]
    moyen = [p for p in enriched if p.get("score") == "MOYEN"]

    print(f"\n{'='*60}")
    print(f"📊 RESUME: {len(enriched)} prospects analyses")
    print(f"   🔴 {len(mauvais)} MAUVAIS/SANS SITE (= prospects chauds)")
    print(f"   🟡 {len(moyen)} MOYEN (= prospects tiedes)")
    print(f"   💾 {new} nouveaux ajoutes au CSV")
    print(f"   📁 {PROSPECTS_CSV}")
    print(f"\n💡 Prochaine etape: python3 messages.py")
    print(f"{'='*60}\n")


if __name__ == "__main__":
    main()
