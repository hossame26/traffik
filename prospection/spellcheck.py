"""
Correcteur orthographique et grammatical français.
Utilise l'API publique LanguageTool (pas de Java, pas de téléchargement).

Usage :
  python3 spellcheck.py "Texte à vérifier"
  python3 spellcheck.py --file messages_output.txt

En tant que module :
  from spellcheck import check_french, correct_french
"""

import sys
import re
import requests


LANGUAGETOOL_API = "https://api.languagetool.org/v2/check"

# Mots à ne JAMAIS corriger (noms de marque, noms propres, termes techniques)
WHITELIST = {
    "traffik", "traffik-web", "traffik-web.fr", "traffik web",
    "shopify", "wordpress", "react", "nextjs", "next.js",
    "vercel", "whatsapp", "instagram", "linkedin", "facebook",
    "google", "seo", "cta", "responsive", "webp",
    "hossame", "resend", "pagespeed",
}


def _is_whitelisted(bad_word):
    """Vérifie si le mot est dans la whitelist (insensible à la casse)."""
    return bad_word.lower().strip(".,;:!?\"'«»") in WHITELIST


def check_french(text):
    """
    Vérifie un texte français via l'API LanguageTool.
    Retourne une liste de corrections suggérées.
    """
    # Nettoyer le HTML avant vérification
    clean = re.sub(r'<[^>]+>', '', text)
    clean = re.sub(r'&[a-z]+;', ' ', clean)
    clean = re.sub(r'\s+', ' ', clean).strip()

    if not clean:
        return []

    try:
        resp = requests.post(LANGUAGETOOL_API, data={
            "text": clean,
            "language": "fr",
            "enabledOnly": "false"
        }, timeout=15)

        if resp.status_code != 200:
            return []

        data = resp.json()
        corrections = []

        for m in data.get("matches", []):
            rule_id = m.get("rule", {}).get("id", "")

            # Ignorer les règles trop strictes
            if rule_id in ("WHITESPACE_RULE", "COMMA_PARENTHESIS_WHITESPACE",
                           "UPPERCASE_SENTENCE_START", "UNPAIRED_BRACKETS"):
                continue

            # Ignorer les mots whitelistés (noms de marque, etc.)
            bad_word = clean[m["offset"]:m["offset"] + m["length"]]
            if _is_whitelisted(bad_word):
                continue

            replacements = [r["value"] for r in m.get("replacements", [])[:3]]

            corrections.append({
                "message": m.get("message", ""),
                "context": m.get("context", {}).get("text", ""),
                "bad": clean[m["offset"]:m["offset"] + m["length"]],
                "suggestions": replacements,
                "offset": m["offset"],
                "length": m["length"],
                "rule": rule_id,
            })

        return corrections

    except Exception as e:
        print(f"  [!] Erreur API LanguageTool : {str(e)[:60]}")
        return []


def correct_french(text):
    """
    Corrige automatiquement un texte français.
    Retourne (texte corrigé, nombre de corrections).
    """
    is_html = '<' in text and '>' in text

    if is_html:
        # Extraire uniquement les segments texte entre balises
        parts = re.split(r'(<[^>]+>)', text)
        corrected_parts = []
        total_fixes = 0

        for part in parts:
            if part.startswith('<'):
                corrected_parts.append(part)
            elif part.strip():
                corrections = check_french(part)
                fixed = part
                # Appliquer les corrections en partant de la fin
                for c in sorted(corrections, key=lambda x: x["offset"], reverse=True):
                    if c["suggestions"]:
                        start = c["offset"]
                        end = start + c["length"]
                        fixed = fixed[:start] + c["suggestions"][0] + fixed[end:]
                        total_fixes += 1
                corrected_parts.append(fixed)
            else:
                corrected_parts.append(part)

        return ''.join(corrected_parts), total_fixes
    else:
        corrections = check_french(text)
        fixed = text
        for c in sorted(corrections, key=lambda x: x["offset"], reverse=True):
            if c["suggestions"]:
                start = c["offset"]
                end = start + c["length"]
                fixed = fixed[:start] + c["suggestions"][0] + fixed[end:]
        return fixed, len([c for c in corrections if c["suggestions"]])


# Genres des catégories business (pour « un/une »)
GENRES = {
    'restaurant': ('un', 'restaurant'),
    'pizzeria': ('une', 'pizzeria'),
    'boulangerie': ('une', 'boulangerie'),
    'boucherie': ('une', 'boucherie'),
    'pâtisserie': ('une', 'pâtisserie'),
    'crêperie': ('une', 'crêperie'),
    'coiffeur': ('un', 'salon de coiffure'),
    'coiffeuse': ('une', 'coiffeuse'),
    'fleuriste': ('un', 'fleuriste'),
    'garage automobile': ('un', 'garage automobile'),
    'garage': ('un', 'garage'),
    'spa': ('un', 'spa'),
    'institut': ('un', 'institut'),
    'esthéticienne': ('une', 'esthéticienne'),
    'estheticienne': ('une', 'esthéticienne'),
    'dentiste': ('un', 'cabinet dentaire'),
    'avocat': ('un', 'cabinet d\'avocat'),
    'plombier': ('un', 'plombier'),
    'électricien': ('un', 'électricien'),
    'electricien': ('un', 'électricien'),
    'immobilier': ('une', 'agence immobilière'),
    'coach sportif': ('un', 'coach sportif'),
    'photographe': ('un', 'photographe'),
    'tatoueur': ('un', 'salon de tatouage'),
    'kebab': ('un', 'kebab'),
    'sushi': ('un', 'restaurant de sushis'),
    'opticien': ('un', 'opticien'),
    'pharmacie': ('une', 'pharmacie'),
    'vétérinaire': ('un', 'cabinet vétérinaire'),
    'veterinaire': ('un', 'cabinet vétérinaire'),
}


def get_article(categorie):
    """Retourne l'article correct (un/une) pour une catégorie."""
    cat_lower = categorie.lower().strip()
    if cat_lower in GENRES:
        return GENRES[cat_lower]
    return ('un', categorie)


def get_article_for_sentence(categorie):
    """Retourne « un restaurant » ou « une pizzeria » selon la catégorie."""
    article, label = get_article(categorie)
    return f"{article} {label}"


def main():
    if len(sys.argv) < 2:
        print("Usage :")
        print("  python3 spellcheck.py \"Texte à vérifier\"")
        print("  python3 spellcheck.py --file fichier.txt")
        sys.exit(1)

    if sys.argv[1] == "--file":
        filepath = sys.argv[2] if len(sys.argv) > 2 else "messages_output.txt"
        with open(filepath, 'r') as f:
            text = f.read()
    else:
        text = " ".join(sys.argv[1:])

    print("\n  Vérification en cours...", end=" ", flush=True)
    corrections = check_french(text)
    print("OK\n")

    if not corrections:
        print("  ✅ Aucune erreur détectée !\n")
        return

    print(f"  ⚠️  {len(corrections)} erreur(s) trouvée(s) :\n")

    for i, c in enumerate(corrections):
        suggestions = ", ".join(c['suggestions']) if c['suggestions'] else "—"
        print(f"  [{i+1}] « {c['bad']} » → {suggestions}")
        print(f"      {c['message']}")
        print()

    response = input("  Corriger automatiquement ? (o/n) : ").strip().lower()
    if response in ('o', 'oui', 'y', ''):
        corrected, fixes = correct_french(text)
        if sys.argv[1] == "--file":
            filepath = sys.argv[2] if len(sys.argv) > 2 else "messages_output.txt"
            with open(filepath, 'w') as f:
                f.write(corrected)
            print(f"\n  ✅ {fixes} correction(s) appliquée(s) dans {filepath}\n")
        else:
            print(f"\n  Texte corrigé :\n  {corrected}\n")


if __name__ == "__main__":
    main()
