"""
Envoi automatique d'e-mails de prospection via Resend
Chaque e-mail est vérifié par le correcteur français avant envoi.

Usage :
  python3 auto_email.py                    → envoie à tous les A_CONTACTER
  python3 auto_email.py --test email@test  → test avec ton e-mail
  python3 auto_email.py --dry-run          → simule sans envoyer
"""

import sys
import csv
import os
import time
import requests
from datetime import datetime
from config import SITE, PHONE, WHATSAPP, PROSPECTS_CSV, RESEND_API_KEY
from spellcheck import correct_french, get_article_for_sentence
from site_builder import build_and_deploy, update_csv_site_url
SENDER = "Traffik Web <contact@traffik-web.fr>"
DELAY_BETWEEN_EMAILS = 15  # secondes entre chaque envoi


def build_email_html(prospect, demo_site_url=None):
    """Génère le HTML de l'e-mail de prospection, corrigé automatiquement."""
    nom = prospect["nom"]
    categorie = prospect["categorie"]
    ville = prospect["ville"]
    has_site = prospect.get("score_site") not in ("PAS DE SITE", "")
    problemes = prospect.get("problemes", "")

    # Article correct : "une pizzeria", "un restaurant", etc.
    cat_label = get_article_for_sentence(categorie)

    if not has_site:
        subject = f"{nom} – Votre site web en aperçu gratuit"
        body_intro = (
            f"j'ai découvert <strong>{nom}</strong> sur Google Maps et j'ai remarqué "
            f"que vous n'aviez pas encore de site web."
        )
        body_value = (
            f"En 2026, <strong>87 % des clients</strong> recherchent en ligne avant de choisir "
            f"{cat_label}. Sans site, vous passez à côté de dizaines de clients chaque mois."
        )
        if demo_site_url:
            body_offer = (
                f"Chez <strong>Traffik Web</strong>, nous avons préparé un <strong>aperçu gratuit</strong> "
                f"de ce que pourrait être votre site web. Design moderne, référencement Google local, "
                f"100 % compatible mobile."
            )
            cta_text = "Voir l'aperçu de votre site"
            cta_link = demo_site_url
        else:
            body_offer = (
                f"Chez <strong>Traffik Web</strong>, nous concevons des sites sur-mesure "
                f"pour les professionnels comme vous : design moderne, référencement Google local, "
                f"100 % compatible mobile."
            )
            cta_text = "Découvrir nos services"
            cta_link = "https://traffik-web.fr/audit-site-web"
    else:
        subject = f"{nom} – 3 actions pour améliorer votre site"
        issues_list = problemes.replace(" | ", ", ") if problemes else "quelques points d'amélioration"
        body_intro = (
            f"j'ai analysé le site de <strong>{nom}</strong> et j'ai identifié "
            f"plusieurs axes d'amélioration."
        )
        body_value = f"En résumé : <strong>{issues_list}</strong>."
        body_offer = (
            f"Chez <strong>Traffik Web</strong>, nous réalisons des audits complets "
            f"(SEO, performance, sécurité) avec un plan d'action concret et priorisé. "
            f"Nous pouvons vous envoyer un mini-diagnostic gratuit sous 24 h."
        )
        cta_text = "Demander un diagnostic gratuit"
        cta_link = "https://traffik-web.fr/audit-site-web"

    html = f"""<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#f5f5f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f5f5;padding:30px 0;">
<tr><td align="center">
<table width="600" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">

<!-- Header -->
<tr><td style="background:#0a0a0a;padding:40px 40px 30px;">
<p style="color:#666;font-size:10px;letter-spacing:3px;margin:0 0 8px 0;text-transform:uppercase;">UNE OPPORTUNITÉ POUR</p>
<h1 style="color:#fff;font-size:28px;font-weight:800;margin:0;line-height:1.2;">{nom}</h1>
</td></tr>

<!-- Corps -->
<tr><td style="padding:35px 40px;">

<p style="font-size:16px;color:#333;line-height:1.7;margin:0 0 18px 0;">Bonjour,</p>

<p style="font-size:16px;color:#333;line-height:1.7;margin:0 0 18px 0;">
Je me permets de vous contacter, {body_intro}
</p>

<p style="font-size:16px;color:#333;line-height:1.7;margin:0 0 18px 0;">
{body_value}
</p>

<p style="font-size:16px;color:#333;line-height:1.7;margin:0 0 28px 0;">
{body_offer}
</p>

<!-- CTA -->
<table width="100%" cellpadding="0" cellspacing="0">
<tr><td align="center">
<a href="{cta_link}"
   style="display:inline-block;background:#0066FF;color:#fff;padding:16px 40px;border-radius:50px;text-decoration:none;font-weight:700;font-size:15px;letter-spacing:0.5px;">
{cta_text}
</a>
</td></tr>
</table>

</td></tr>

<!-- Chiffres -->
<tr><td style="padding:0 40px;">
<table width="100%" cellpadding="0" cellspacing="0" style="border-top:1px solid #eee;padding:25px 0;">
<tr>
<td width="33%" style="text-align:center;"><div style="font-size:28px;font-weight:800;color:#0066FF;">87 %</div><div style="font-size:9px;color:#999;letter-spacing:2px;margin-top:4px;">CLIENTS EN LIGNE</div></td>
<td width="33%" style="text-align:center;"><div style="font-size:28px;font-weight:800;color:#0066FF;">48 h</div><div style="font-size:9px;color:#999;letter-spacing:2px;margin-top:4px;">LIVRAISON</div></td>
<td width="33%" style="text-align:center;"><div style="font-size:28px;font-weight:800;color:#0066FF;">100 %</div><div style="font-size:9px;color:#999;letter-spacing:2px;margin-top:4px;">RESPONSIVE</div></td>
</tr>
</table>
</td></tr>

<!-- Contact -->
<tr><td style="padding:0 40px 35px;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0a;border-radius:12px;overflow:hidden;">
<tr><td style="padding:25px 30px;text-align:center;">
<p style="color:#888;margin:0 0 8px 0;font-size:13px;">Discutons de votre projet :</p>
<div style="font-size:22px;font-weight:800;color:#fff;">{PHONE}</div>
<a href="https://{SITE}" style="color:#0066FF;margin:10px 0 0 0;font-size:13px;display:block;text-decoration:none;">{SITE}</a>
</td></tr>
</table>
</td></tr>

<!-- Pied de page -->
<tr><td style="padding:20px 40px;border-top:1px solid #f0f0f0;text-align:center;">
<p style="color:#999;font-size:11px;margin:0;">
Traffik Web | <a href="https://{SITE}" style="color:#0066FF;text-decoration:none;">{SITE}</a> | {ville}
</p>
<p style="color:#bbb;font-size:10px;margin:8px 0 0 0;">
Si vous ne souhaitez plus recevoir nos e-mails, répondez « STOP ».
</p>
</td></tr>

</table>
</td></tr>
</table>
</body>
</html>"""

    return subject, html


def spellcheck_email(subject, html):
    """Vérifie et corrige le français dans l'e-mail avant envoi."""
    subject_fixed, s_fixes = correct_french(subject)
    html_fixed, h_fixes = correct_french(html)
    total = s_fixes + h_fixes
    if total > 0:
        print(f"   ✏️  {total} correction(s) orthographique(s) appliquée(s)")
    return subject_fixed, html_fixed


def send_email(to_email, subject, html):
    """Envoie un e-mail via Resend"""
    resp = requests.post(
        "https://api.resend.com/emails",
        headers={
            "Authorization": f"Bearer {RESEND_API_KEY}",
            "Content-Type": "application/json"
        },
        json={
            "from": SENDER,
            "to": [to_email],
            "subject": subject,
            "html": html,
            "reply_to": "contact@traffik-web.fr"
        }
    )

    if resp.status_code == 200:
        return True, resp.json().get("id", "")
    else:
        return False, resp.text


def update_prospect_status(place_id, new_status, notes_append=""):
    """Met à jour le statut dans le CSV"""
    rows = []
    fieldnames = None

    with open(PROSPECTS_CSV, "r") as f:
        reader = csv.DictReader(f)
        fieldnames = reader.fieldnames
        for row in reader:
            if row["place_id"] == place_id:
                row["statut"] = new_status
                row["plateforme_dm"] = "email"
                now = datetime.now().strftime("%Y-%m-%d %H:%M")
                old_notes = row.get("notes", "")
                row["notes"] = f"{old_notes} | {now}: {notes_append}" if old_notes else f"{now}: {notes_append}"
            rows.append(row)

    with open(PROSPECTS_CSV, "w", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(rows)


def main():
    dry_run = "--dry-run" in sys.argv
    test_mode = "--test" in sys.argv
    no_check = "--no-check" in sys.argv
    test_email = None

    if test_mode:
        idx = sys.argv.index("--test")
        if idx + 1 < len(sys.argv):
            test_email = sys.argv[idx + 1]
        else:
            print("Usage : python3 auto_email.py --test ton@email.com")
            sys.exit(1)

    if not os.path.exists(PROSPECTS_CSV):
        print("[!] Aucun prospect. Lancez finder.py ou add.py d'abord.")
        sys.exit(1)

    # Charger le correcteur au démarrage
    if not no_check:
        print("  Chargement du correcteur français...", end=" ", flush=True)
        from spellcheck import correct_french as _warmup
        _warmup("Test de démarrage.")
        print("OK")

    # Charger les prospects
    prospects = []
    with open(PROSPECTS_CSV, "r") as f:
        reader = csv.DictReader(f)
        for row in reader:
            if row.get("statut") == "A_CONTACTER":
                prospects.append(row)

    if not prospects:
        print("[!] Aucun prospect A_CONTACTER.")
        sys.exit(1)

    # Mode test : envoie à ton e-mail avec le premier prospect
    if test_mode:
        p = prospects[0]

        # Générer le site démo
        demo_url = p.get("site_demo", "")
        if not demo_url:
            print(f"\n  🔨 Génération du site démo pour {p['nom']}...", end=" ", flush=True)
            ok_site, demo_url = build_and_deploy(p)
            if ok_site:
                print(f"OK → {demo_url}")
                update_csv_site_url(p["place_id"], demo_url)
            else:
                print(f"ERREUR ({demo_url[:60]})")
                demo_url = None
        else:
            print(f"\n  ♻️  Site démo existant : {demo_url}")

        subject, html = build_email_html(p, demo_site_url=demo_url)

        # Correction orthographique
        if not no_check:
            subject, html = spellcheck_email(subject, html)

        print(f"  📧 TEST – Envoi pour « {p['nom']} » à {test_email}")
        print(f"     Sujet : {subject}")
        if demo_url:
            print(f"     CTA → {demo_url}")

        if dry_run:
            print("     [DRY RUN] E-mail non envoyé")
            preview_path = "/Users/hossamelaib/Documents/traffik/prospection/email_preview.html"
            with open(preview_path, "w") as f:
                f.write(html)
            print(f"     Aperçu : {preview_path}")
        else:
            ok, result = send_email(test_email, subject, html)
            if ok:
                print(f"     ✅ Envoyé ! ID : {result}")
            else:
                print(f"     ❌ Erreur : {result}")
        return

    # Mode auto : envoie à tous les prospects qui ont un e-mail
    print(f"\n{'='*50}")
    print(f"  ENVOI AUTO – {len(prospects)} prospects")
    print(f"  {'[DRY RUN]' if dry_run else '[LIVE]'}")
    print(f"{'='*50}\n")

    sent = 0
    skipped = 0

    for i, p in enumerate(prospects):
        nom = p["nom"]
        email = p.get("email", "").strip()

        if not email:
            print(f"  ⏩ [{i+1}] {nom} – Pas d'e-mail, ignoré (utilisez Instagram/WhatsApp)")
            skipped += 1
            continue

        # Générer le site démo si pas encore fait
        demo_url = p.get("site_demo", "")
        if not demo_url:
            print(f"  🔨 [{i+1}] Génération site démo {nom}...", end=" ", flush=True)
            ok_site, demo_url = build_and_deploy(p)
            if ok_site:
                print(f"OK → {demo_url}")
                update_csv_site_url(p["place_id"], demo_url)
            else:
                print(f"ERREUR")
                demo_url = None

        subject, html = build_email_html(p, demo_site_url=demo_url)

        # Correction orthographique
        if not no_check:
            subject, html = spellcheck_email(subject, html)

        print(f"  📧 [{i+1}] {nom} → {email}...", end=" ")

        if dry_run:
            print("[DRY RUN]")
            sent += 1
        else:
            ok, result = send_email(email, subject, html)
            if ok:
                print(f"✅ (ID : {result})")
                update_prospect_status(p["place_id"], "DM_ENVOYE", f"e-mail envoyé à {email}")
                sent += 1
            else:
                print(f"❌ ({result[:50]})")

            # Délai entre les envois
            if i < len(prospects) - 1:
                print(f"  ⏳ Attente {DELAY_BETWEEN_EMAILS} s...")
                time.sleep(DELAY_BETWEEN_EMAILS)

    print(f"\n{'='*50}")
    print(f"  📊 {sent} envoyé(s) | {skipped} sans e-mail")
    print(f"{'='*50}\n")


if __name__ == "__main__":
    main()
