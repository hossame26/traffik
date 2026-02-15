"""Configuration prospection DM"""

import os
from pathlib import Path
from dotenv import load_dotenv

# Charger le .env depuis le dossier prospection
load_dotenv(Path(__file__).parent / ".env")

# API Keys (depuis .env)
GOOGLE_PLACES_KEY = os.getenv("GOOGLE_PLACES_KEY", "")
RESEND_API_KEY = os.getenv("RESEND_API_KEY", "")
VERCEL_TOKEN = os.getenv("VERCEL_TOKEN", "")
HUNTER_API_KEY = os.getenv("HUNTER_API_KEY", "")

# Ton info
PRENOM = "Hossame"
SITE = "traffik-web.fr"
PHONE = "06 35 50 53 74"
WHATSAPP = "https://wa.me/33635505374"

# Villes cibles
VILLES = [
    "Marseille", "Aix-en-Provence", "Toulon", "Avignon",
    "Nice", "Lyon", "Montpellier", "Paris"
]

# Categories business a prospecter
CATEGORIES = [
    "restaurant", "coiffeur", "boulangerie", "boucherie",
    "fleuriste", "garage automobile", "spa", "dentiste",
    "avocat", "plombier", "electricien", "immobilier",
    "coach sportif", "photographe", "tatoueur",
    "estheticienne", "pizzeria", "kebab", "sushi",
    "opticien", "pharmacie", "veterinaire"
]

# Fichier tracking
PROSPECTS_CSV = "/Users/hossamelaib/Documents/traffik/prospection/prospects.csv"
