"""
Générateur de sites personnalisés V2 — Template blanc ultra-moderne.
Glassmorphism light, hover animations, scroll reveal, parallax, fonctionnalités métier.

Usage :
  python3 site_builder.py "Chez Sauveur" pizzeria Marseille "04 91 54 33 96"
  python3 site_builder.py --all          → génère pour tous les A_CONTACTER
  python3 site_builder.py --preview "Nom" categorie → ouvre dans le navigateur

En tant que module :
  from site_builder import build_and_deploy
  url = build_and_deploy(prospect_dict)
"""

import sys
import os
import csv
import re
import time
import base64
import random
import requests
from config import PROSPECTS_CSV, VERCEL_TOKEN

# ──────────────────────────────────────────────
# CONFIGS PAR CATÉGORIE
# ──────────────────────────────────────────────
CONFIGS = {
    "pizzeria": {
        "primary": "#E65100", "accent": "#FF8F00", "light": "#FFF3E0",
        "badge": "Pizzeria", "icon": "pizza-slice",
        "heroImg": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1920&q=80",
        "heroImg2": "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=80",
        "description": "Des pizzas artisanales cuites au feu de bois. Pâte fraîche, ingrédients de qualité, passion du goût.",
        "tagline": "L'art de la pizza artisanale",
        "stats": [
            {"num": "4.9", "label": "Note Google", "icon": "star"},
            {"num": "200+", "label": "Avis clients", "icon": "heart"},
            {"num": "100%", "label": "Fait maison", "icon": "fire"},
            {"num": "30min", "label": "Livraison", "icon": "clock"}
        ],
        "services": [
            {"icon": "pizza-slice", "title": "Pizzas Artisanales", "desc": "Classiques et créations du chef, cuites au feu de bois", "img": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80"},
            {"icon": "truck", "title": "Livraison Express", "desc": "Chaude à votre porte en 30 minutes", "img": "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=400&q=80"},
            {"icon": "champagne-glasses", "title": "Événements & Traiteur", "desc": "Privatisation et service traiteur pour vos soirées", "img": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&q=80"}
        ],
        "menu": [
            {"name": "Margherita", "desc": "Tomate, mozzarella, basilic frais", "price": "10", "img": "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=300&q=80"},
            {"name": "4 Fromages", "desc": "Mozzarella, gorgonzola, parmesan, chèvre", "price": "13", "img": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300&q=80"},
            {"name": "Calzone", "desc": "Farcie jambon, champignons, mozzarella", "price": "12", "img": "https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?w=300&q=80"},
            {"name": "Diavola", "desc": "Tomate, mozzarella, salami piquant", "price": "12", "img": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300&q=80"},
            {"name": "Végétarienne", "desc": "Légumes grillés, mozzarella, roquette", "price": "11", "img": "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=300&q=80"},
            {"name": "Truffe", "desc": "Crème de truffe, mozzarella di bufala, roquette", "price": "16", "img": "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=300&q=80"}
        ],
        "gallery": [
            {"img": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80", "title": "Notre Salle"},
            {"img": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80", "title": "Ambiance"},
            {"img": "https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=600&q=80", "title": "Four à Bois"},
            {"img": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80", "title": "Nos Pizzas"},
            {"img": "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&q=80", "title": "Classique"},
            {"img": "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=600&q=80", "title": "Spéciale"}
        ],
        "features": ["menu", "gallery"],
        "hours": "Mar-Dim : 11h30-14h30 / 18h30-22h30"
    },
    "restaurant": {
        "primary": "#1a1a2e", "accent": "#C9A227", "light": "#FFFBF0",
        "badge": "Restaurant", "icon": "utensils",
        "heroImg": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80",
        "heroImg2": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
        "description": "Une cuisine raffinée qui éveille vos sens. Produits frais, créativité et passion au quotidien.",
        "tagline": "L'excellence culinaire au quotidien",
        "stats": [
            {"num": "4.9", "label": "Note Google", "icon": "star"},
            {"num": "200+", "label": "Avis clients", "icon": "heart"},
            {"num": "10 ans", "label": "D'expérience", "icon": "award"},
            {"num": "100%", "label": "Produits frais", "icon": "leaf"}
        ],
        "services": [
            {"icon": "utensils", "title": "Déjeuner", "desc": "Formules du midi raffinées à partir de 15 €", "img": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80"},
            {"icon": "moon", "title": "Dîner", "desc": "Menu gastronomique et carte des vins sélectionnée", "img": "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&q=80"},
            {"icon": "champagne-glasses", "title": "Événements", "desc": "Privatisation pour vos événements privés et professionnels", "img": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&q=80"}
        ],
        "menu": [
            {"name": "Tartare de Saumon", "desc": "Avocat, sésame, vinaigrette agrumes", "price": "16", "img": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&q=80"},
            {"name": "Risotto aux Cèpes", "desc": "Parmesan 24 mois, huile de truffe", "price": "22", "img": "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=300&q=80"},
            {"name": "Filet de Bœuf", "desc": "Sauce au poivre, gratin dauphinois", "price": "28", "img": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300&q=80"},
            {"name": "Tarte au Citron", "desc": "Meringue italienne, coulis de fruits rouges", "price": "10", "img": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300&q=80"}
        ],
        "gallery": [
            {"img": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80", "title": "Notre Salle"},
            {"img": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80", "title": "Plat Signature"},
            {"img": "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&q=80", "title": "Entrée"},
            {"img": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80", "title": "Ambiance"},
            {"img": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80", "title": "Fraîcheur"},
            {"img": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80", "title": "Dessert"}
        ],
        "features": ["menu", "gallery"],
        "hours": "Mar-Sam : 12h-14h30 / 19h-22h30"
    },
    "boulangerie": {
        "primary": "#6D4C41", "accent": "#D4A03C", "light": "#FFF8EF",
        "badge": "Boulangerie Artisanale", "icon": "bread-slice",
        "heroImg": "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1920&q=80",
        "heroImg2": "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&q=80",
        "description": "Le goût authentique du pain artisanal. Pétri avec amour, cuit à la perfection, chaque matin.",
        "tagline": "L'art du pain depuis toujours",
        "stats": [
            {"num": "5h", "label": "Ouverture", "icon": "sun"},
            {"num": "100%", "label": "Artisanal", "icon": "hand-sparkles"},
            {"num": "25 ans", "label": "D'expérience", "icon": "award"},
            {"num": "4.9", "label": "Note Google", "icon": "star"}
        ],
        "services": [
            {"icon": "bread-slice", "title": "Pains Artisanaux", "desc": "Tradition, complet, céréales, levain naturel", "img": "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&q=80"},
            {"icon": "cookie", "title": "Viennoiseries", "desc": "Croissants pur beurre, pains au chocolat, brioches", "img": "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&q=80"},
            {"icon": "cake-candles", "title": "Pâtisseries", "desc": "Gâteaux, tartes, éclairs, macarons", "img": "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&q=80"}
        ],
        "menu": [],
        "gallery": [
            {"img": "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80", "title": "Pain Tradition"},
            {"img": "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&q=80", "title": "Croissants"},
            {"img": "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&q=80", "title": "Brioches"},
            {"img": "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=600&q=80", "title": "Pain au Levain"},
            {"img": "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=600&q=80", "title": "Baguettes"},
            {"img": "https://images.unsplash.com/photo-1486427944544-d2c246c4d3df?w=600&q=80", "title": "Pâtisseries"}
        ],
        "features": ["gallery"],
        "hours": "Lun-Sam : 6h30-19h30 | Dim : 7h-13h"
    },
    "coiffeur": {
        "primary": "#1a1a1a", "accent": "#C084FC", "light": "#FAF5FF",
        "badge": "Salon de Coiffure", "icon": "scissors",
        "heroImg": "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&q=80",
        "heroImg2": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80",
        "description": "Révélez votre beauté naturelle. Coupes tendances, colorations expertes et soins sur-mesure.",
        "tagline": "Votre style, notre passion",
        "stats": [
            {"num": "4.9", "label": "Note Google", "icon": "star"},
            {"num": "500+", "label": "Clients fidèles", "icon": "heart"},
            {"num": "8 ans", "label": "D'expérience", "icon": "award"},
            {"num": "100%", "label": "Satisfaction", "icon": "face-smile"}
        ],
        "services": [
            {"icon": "scissors", "title": "Coupes & Styles", "desc": "Femme, homme, enfant — tendances et classiques", "img": "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&q=80"},
            {"icon": "palette", "title": "Coloration Expert", "desc": "Balayage, mèches, couleur intégrale, patine", "img": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&q=80"},
            {"icon": "spa", "title": "Soins Capillaires", "desc": "Kératine, botox capillaire, traitements profonds", "img": "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=400&q=80"}
        ],
        "menu": [],
        "gallery": [
            {"img": "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80", "title": "Notre Salon"},
            {"img": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80", "title": "Balayage"},
            {"img": "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600&q=80", "title": "Coupe Homme"},
            {"img": "https://images.unsplash.com/photo-1562322140-8baeacacf36d?w=600&q=80", "title": "Coloration"},
            {"img": "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=600&q=80", "title": "Brushing"},
            {"img": "https://images.unsplash.com/photo-1559599101-f09722fb4948?w=600&q=80", "title": "Soins"}
        ],
        "features": ["gallery"],
        "hours": "Mar-Sam : 9h-19h"
    },
    "boucherie": {
        "primary": "#7f1d1d", "accent": "#B91C1C", "light": "#FEF2F2",
        "badge": "Boucherie Artisanale", "icon": "drumstick-bite",
        "heroImg": "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=1920&q=80",
        "heroImg2": "https://images.unsplash.com/photo-1588347785103-e9c0d52e0a14?w=800&q=80",
        "description": "Viandes de qualité supérieure sélectionnées avec passion. Bœuf français, volailles fermières.",
        "tagline": "L'excellence de la viande artisanale",
        "stats": [
            {"num": "100%", "label": "Français", "icon": "flag"},
            {"num": "4.9", "label": "Note Google", "icon": "star"},
            {"num": "30 ans", "label": "De tradition", "icon": "award"},
            {"num": "Bio", "label": "Label Rouge", "icon": "leaf"}
        ],
        "services": [
            {"icon": "cow", "title": "Bœuf Premium", "desc": "Races sélectionnées, maturation longue durée", "img": "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=400&q=80"},
            {"icon": "drumstick-bite", "title": "Volailles Fermières", "desc": "Label Rouge, élevage plein air", "img": "https://images.unsplash.com/photo-1588347785103-e9c0d52e0a14?w=400&q=80"},
            {"icon": "fire", "title": "Plats Préparés", "desc": "Rôtis, brochettes marinées, plats du jour", "img": "https://images.unsplash.com/photo-1602470520998-f4a52199a3d6?w=400&q=80"}
        ],
        "menu": [],
        "gallery": [
            {"img": "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=600&q=80", "title": "Notre Comptoir"},
            {"img": "https://images.unsplash.com/photo-1588347785103-e9c0d52e0a14?w=600&q=80", "title": "Entrecôte"},
            {"img": "https://images.unsplash.com/photo-1602470520998-f4a52199a3d6?w=600&q=80", "title": "Côte de Bœuf"},
            {"img": "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80", "title": "Brochettes"},
            {"img": "https://images.unsplash.com/photo-1603048297172-c92544798d5a?w=600&q=80", "title": "Volaille"},
            {"img": "https://images.unsplash.com/photo-1606502281004-f86cf09d4d5f?w=600&q=80", "title": "Charcuterie"}
        ],
        "features": ["gallery"],
        "hours": "Mar-Sam : 7h30-13h / 15h30-19h30 | Dim : 7h30-13h"
    },
    "fleuriste": {
        "primary": "#166534", "accent": "#16A34A", "light": "#F0FDF4",
        "badge": "Fleuriste", "icon": "seedling",
        "heroImg": "https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=1920&q=80",
        "heroImg2": "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&q=80",
        "description": "Art floral au service de vos émotions. Bouquets uniques et créations personnalisées pour chaque occasion.",
        "tagline": "Des fleurs pour chaque émotion",
        "stats": [
            {"num": "100%", "label": "Fleurs fraîches", "icon": "leaf"},
            {"num": "4.8", "label": "Note Google", "icon": "star"},
            {"num": "15 ans", "label": "D'expérience", "icon": "award"},
            {"num": "48h", "label": "Livraison", "icon": "truck"}
        ],
        "services": [
            {"icon": "heart", "title": "Bouquets Sur-Mesure", "desc": "Créations uniques adaptées à chaque occasion", "img": "https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=400&q=80"},
            {"icon": "ring", "title": "Mariages & Événements", "desc": "Décoration florale complète pour le plus beau jour", "img": "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&q=80"},
            {"icon": "seedling", "title": "Plantes & Compositions", "desc": "Plantes vertes, fleuries et compositions durables", "img": "https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=400&q=80"}
        ],
        "menu": [],
        "gallery": [
            {"img": "https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=600&q=80", "title": "Bouquet"},
            {"img": "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=600&q=80", "title": "Roses"},
            {"img": "https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=600&q=80", "title": "Composition"},
            {"img": "https://images.unsplash.com/photo-1468327768560-75b778cbb551?w=600&q=80", "title": "Mariages"},
            {"img": "https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=600&q=80", "title": "Plantes"},
            {"img": "https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=600&q=80", "title": "Boutique"}
        ],
        "features": ["gallery"],
        "hours": "Lun-Sam : 8h30-19h30 | Dim : 9h-13h"
    },
    "garage": {
        "primary": "#1e293b", "accent": "#EF4444", "light": "#F8FAFC",
        "badge": "Garage Automobile", "icon": "car",
        "heroImg": "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1920&q=80",
        "heroImg2": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
        "description": "Entretien et réparation de tous véhicules. Expertise, transparence et professionnalisme garantis.",
        "tagline": "Votre garage de confiance",
        "stats": [
            {"num": "500+", "label": "Véhicules/an", "icon": "car"},
            {"num": "100%", "label": "Garantie pièces", "icon": "shield-check"},
            {"num": "20 ans", "label": "D'expérience", "icon": "award"},
            {"num": "4.7", "label": "Note Google", "icon": "star"}
        ],
        "services": [
            {"icon": "oil-can", "title": "Entretien & Révision", "desc": "Vidange, filtres, freins, révision complète constructeur", "img": "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400&q=80"},
            {"icon": "gear", "title": "Mécanique Générale", "desc": "Réparations toutes marques, diagnostic électronique", "img": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80"},
            {"icon": "car-burst", "title": "Carrosserie & Peinture", "desc": "Réparation, débosselage, peinture professionnelle", "img": "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&q=80"}
        ],
        "menu": [],
        "gallery": [
            {"img": "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=600&q=80", "title": "Atelier"},
            {"img": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80", "title": "Diagnostic"},
            {"img": "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&q=80", "title": "Réparation"},
            {"img": "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80", "title": "Résultat"},
            {"img": "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=600&q=80", "title": "Équipe"},
            {"img": "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?w=600&q=80", "title": "Peinture"}
        ],
        "features": ["gallery"],
        "hours": "Lun-Ven : 8h-12h / 14h-18h30 | Sam : 8h-12h"
    },
    "plombier": {
        "primary": "#0369A1", "accent": "#0EA5E9", "light": "#F0F9FF",
        "badge": "Plombier", "icon": "faucet-drip",
        "heroImg": "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=1920&q=80",
        "heroImg2": "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
        "description": "Dépannage et installation plomberie. Intervention rapide 7j/7, devis gratuit, travail soigné.",
        "tagline": "Intervention rapide, travail soigné",
        "stats": [
            {"num": "30min", "label": "Intervention", "icon": "bolt"},
            {"num": "100%", "label": "Satisfaction", "icon": "face-smile"},
            {"num": "7j/7", "label": "Disponible", "icon": "clock"},
            {"num": "15 ans", "label": "D'expérience", "icon": "award"}
        ],
        "services": [
            {"icon": "faucet-drip", "title": "Dépannage Urgent", "desc": "Fuite, canalisation bouchée, urgence 7j/7", "img": "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=400&q=80"},
            {"icon": "shower", "title": "Salle de Bain", "desc": "Installation et rénovation complète clé en main", "img": "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&q=80"},
            {"icon": "hot-tub-person", "title": "Chauffage", "desc": "Chaudière, radiateurs, plancher chauffant", "img": "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400&q=80"}
        ],
        "menu": [],
        "gallery": [],
        "features": [],
        "hours": "Lun-Sam : 7h-20h | Urgences 7j/7"
    },
    "electricien": {
        "primary": "#92400E", "accent": "#F59E0B", "light": "#FFFBEB",
        "badge": "Électricien", "icon": "bolt",
        "heroImg": "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1920&q=80",
        "heroImg2": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
        "description": "Installation et dépannage électrique. Mise aux normes, rénovation, éclairage intelligent.",
        "tagline": "L'électricité au service de votre confort",
        "stats": [
            {"num": "24h", "label": "Disponible", "icon": "clock"},
            {"num": "100%", "label": "Aux normes", "icon": "shield-check"},
            {"num": "12 ans", "label": "D'expérience", "icon": "award"},
            {"num": "4.8", "label": "Note Google", "icon": "star"}
        ],
        "services": [
            {"icon": "bolt", "title": "Dépannage Électrique", "desc": "Intervention rapide, panne, court-circuit, disjoncteur", "img": "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&q=80"},
            {"icon": "plug", "title": "Installation Neuf", "desc": "Câblage complet, prises, éclairage, domotique", "img": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80"},
            {"icon": "shield-halved", "title": "Mise aux Normes", "desc": "Tableau électrique, diagnostic, certification", "img": "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80"}
        ],
        "menu": [],
        "gallery": [],
        "features": [],
        "hours": "Lun-Sam : 7h-20h | Urgences 7j/7"
    },
    "immobilier": {
        "primary": "#1E3A5F", "accent": "#2563EB", "light": "#EFF6FF",
        "badge": "Agence Immobilière", "icon": "building",
        "heroImg": "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=80",
        "heroImg2": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
        "description": "Votre partenaire de confiance pour tous vos projets immobiliers. Achat, vente, location, estimation.",
        "tagline": "Votre projet immobilier entre de bonnes mains",
        "stats": [
            {"num": "150+", "label": "Biens vendus", "icon": "home"},
            {"num": "98%", "label": "Satisfaction", "icon": "face-smile"},
            {"num": "15 ans", "label": "D'expérience", "icon": "award"},
            {"num": "48h", "label": "Estimation", "icon": "clock"}
        ],
        "services": [
            {"icon": "home", "title": "Vente & Achat", "desc": "Accompagnement personnalisé de A à Z", "img": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&q=80"},
            {"icon": "key", "title": "Location & Gestion", "desc": "Gestion locative complète de votre patrimoine", "img": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&q=80"},
            {"icon": "chart-line", "title": "Estimation Gratuite", "desc": "Estimation basée sur le marché local en 48h", "img": "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400&q=80"}
        ],
        "menu": [],
        "gallery": [
            {"img": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80", "title": "Villa Moderne"},
            {"img": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80", "title": "Appartement"},
            {"img": "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&q=80", "title": "Villa Piscine"},
            {"img": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80", "title": "Maison"},
            {"img": "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80", "title": "Terrasse"},
            {"img": "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=600&q=80", "title": "Intérieur"}
        ],
        "features": ["gallery"],
        "hours": "Lun-Ven : 9h-19h | Sam : 9h-12h30"
    },
    "kebab": {
        "primary": "#DC2626", "accent": "#F59E0B", "light": "#FEF2F2",
        "badge": "Kebab & Grillades", "icon": "burger",
        "heroImg": "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=1920&q=80",
        "heroImg2": "https://images.unsplash.com/photo-1561651823-34feb02250e4?w=800&q=80",
        "description": "Le meilleur kebab de la ville. Viande grillée à la broche, sauces maison, produits frais.",
        "tagline": "Le goût authentique du kebab",
        "stats": [
            {"num": "4.8", "label": "Note Google", "icon": "star"},
            {"num": "100%", "label": "Fait maison", "icon": "fire"},
            {"num": "7j/7", "label": "Ouvert", "icon": "clock"},
            {"num": "20min", "label": "Livraison", "icon": "truck"}
        ],
        "services": [
            {"icon": "burger", "title": "Sur Place & À Emporter", "desc": "Kebab, assiettes, menus, tacos, burgers", "img": "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=400&q=80"},
            {"icon": "truck", "title": "Livraison Express", "desc": "Livraison rapide dans toute la ville", "img": "https://images.unsplash.com/photo-1561651823-34feb02250e4?w=400&q=80"},
            {"icon": "fire", "title": "Grillades", "desc": "Brochettes, merguez, viandes grillées minute", "img": "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80"}
        ],
        "menu": [
            {"name": "Kebab Classique", "desc": "Viande, salade, tomate, oignon, sauce", "price": "7", "img": "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=300&q=80"},
            {"name": "Assiette Mixte", "desc": "Viande, frites, salade, sauces", "price": "11", "img": "https://images.unsplash.com/photo-1561651823-34feb02250e4?w=300&q=80"},
            {"name": "Tacos XXL", "desc": "Double viande, fromage, frites, sauce fromagère", "price": "9", "img": "https://images.unsplash.com/photo-1544025162-d76694265947?w=300&q=80"},
            {"name": "Burger Maison", "desc": "Steak haché frais, cheddar, bacon, sauce signature", "price": "9", "img": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&q=80"}
        ],
        "gallery": [],
        "features": ["menu"],
        "hours": "7j/7 : 11h-23h"
    },
    "dentiste": {
        "primary": "#1B6FA8", "accent": "#7ECAAB", "light": "#F0F6FA",
        "badge": "Cabinet Dentaire", "icon": "tooth",
        "heroImg": "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1920&q=80",
        "heroImg2": "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80",
        "description": "Des soins dentaires de qualité dans un cadre moderne et apaisant. Votre sourire est notre priorité.",
        "tagline": "Votre sourire notre priorité",
        "emergency": True, "emergency_text": "Urgence dentaire ? Appelez maintenant",
        "stats": [
            {"num": "50+", "label": "Patients / jour", "icon": "user-group"},
            {"num": "4.9", "label": "Note Google", "icon": "star"},
            {"num": "15 ans", "label": "D'expérience", "icon": "award"},
            {"num": "100%", "label": "Satisfaction", "icon": "face-smile"}
        ],
        "services": [
            {"icon": "tooth", "title": "Soins Courants", "desc": "Détartrage, caries, couronnes, bridges", "img": "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&q=80"},
            {"icon": "wand-magic-sparkles", "title": "Esthétique Dentaire", "desc": "Blanchiment, facettes, Hollywood Smile", "img": "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&q=80"},
            {"icon": "teeth", "title": "Orthodontie", "desc": "Aligneurs invisibles, bagues, appareils", "img": "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&q=80"}
        ],
        "menu": [], "gallery": [],
        "features": ["before_after"],
        "before_after": [
            {"before": "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=500&q=80", "after": "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=500&q=80", "label": "Blanchiment dentaire"},
        ],
        "hours": "Lun-Ven : 9h-12h30 / 14h-19h | Sam : 9h-12h"
    },
    "avocat": {
        "primary": "#1A3A5C", "accent": "#C5A55A", "light": "#EDF2F7",
        "badge": "Cabinet d'Avocats", "icon": "scale-balanced",
        "heroImg": "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&q=80",
        "heroImg2": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
        "description": "Votre défense, notre engagement. Accompagnement juridique expert et personnalisé pour tous vos litiges.",
        "tagline": "Vos droits notre engagement",
        "stats": [
            {"num": "500+", "label": "Dossiers traités", "icon": "folder-open"},
            {"num": "95%", "label": "Taux de réussite", "icon": "trophy"},
            {"num": "20 ans", "label": "D'expérience", "icon": "award"},
            {"num": "4.8", "label": "Note Google", "icon": "star"}
        ],
        "services": [
            {"icon": "users", "title": "Droit de la Famille", "desc": "Divorce, garde d'enfants, succession, adoption", "img": "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&q=80"},
            {"icon": "building", "title": "Droit Immobilier", "desc": "Vente, bail commercial, copropriété, litiges", "img": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"},
            {"icon": "briefcase", "title": "Droit des Affaires", "desc": "Création d'entreprise, contrats, contentieux", "img": "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&q=80"}
        ],
        "menu": [], "gallery": [], "features": [],
        "hours": "Lun-Ven : 9h-12h30 / 14h-18h30"
    },
    "spa": {
        "primary": "#8B5E6B", "accent": "#9CAF88", "light": "#FBF5F3",
        "badge": "Spa & Esthétique", "icon": "spa",
        "heroImg": "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1920&q=80",
        "heroImg2": "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80",
        "description": "Un havre de paix dédié à votre bien-être. Soins visage, corps, massages et rituels sur-mesure.",
        "tagline": "Votre parenthèse bien-être",
        "stats": [
            {"num": "30+", "label": "Soins proposés", "icon": "hand-sparkles"},
            {"num": "4.9", "label": "Note Google", "icon": "star"},
            {"num": "10 ans", "label": "D'expérience", "icon": "award"},
            {"num": "100%", "label": "Bio & Naturel", "icon": "leaf"}
        ],
        "services": [
            {"icon": "face-smile", "title": "Soins Visage", "desc": "Anti-âge, hydratation, éclat, peeling doux", "img": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&q=80"},
            {"icon": "hand-sparkles", "title": "Soins Corps", "desc": "Gommage, enveloppement, modelage, minceur", "img": "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&q=80"},
            {"icon": "spa", "title": "Massages", "desc": "Relaxant, pierres chaudes, californien, sportif", "img": "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&q=80"}
        ],
        "menu": [],
        "gallery": [
            {"img": "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80", "title": "Cabine Soin"},
            {"img": "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&q=80", "title": "Massage"},
            {"img": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80", "title": "Soin Visage"},
            {"img": "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=600&q=80", "title": "Ambiance"},
            {"img": "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=600&q=80", "title": "Produits"},
            {"img": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=600&q=80", "title": "Détente"}
        ],
        "features": ["gallery", "before_after"],
        "before_after": [
            {"before": "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=500&q=80", "after": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=500&q=80", "label": "Soin éclat visage"},
        ],
        "hours": "Mar-Sam : 9h30-19h"
    },
    "default": {
        "primary": "#1e293b", "accent": "#6366F1", "light": "#F8FAFC",
        "badge": "Expert Professionnel", "icon": "store",
        "heroImg": "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80",
        "heroImg2": "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
        "description": "Un service d'excellence pour répondre à tous vos besoins. Qualité, réactivité et professionnalisme.",
        "tagline": "L'excellence à votre service",
        "stats": [
            {"num": "100%", "label": "Qualité", "icon": "gem"},
            {"num": "4.9", "label": "Note Google", "icon": "star"},
            {"num": "10 ans", "label": "D'expérience", "icon": "award"},
            {"num": "7j/7", "label": "Disponible", "icon": "clock"}
        ],
        "services": [
            {"icon": "star", "title": "Excellence", "desc": "Qualité premium garantie sur chaque prestation", "img": "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80"},
            {"icon": "clock", "title": "Réactivité", "desc": "Disponible et à l'écoute de vos besoins", "img": "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400&q=80"},
            {"icon": "shield-check", "title": "Confiance", "desc": "Expertise reconnue par nos clients", "img": "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=400&q=80"}
        ],
        "menu": [],
        "gallery": [],
        "features": [],
        "hours": "Lun-Ven : 9h-18h"
    }
}

CATEGORY_ALIASES = {
    "garage automobile": "garage",
    "salon de coiffure": "coiffeur",
    "coiffeuse": "coiffeur",
    "pâtisserie": "boulangerie",
    "crêperie": "restaurant",
    "sushi": "restaurant",
    "institut": "spa", "esthéticienne": "spa", "estheticienne": "spa",
    "institut de beauté": "spa", "massage": "spa",
    "cabinet dentaire": "dentiste", "chirurgien dentiste": "dentiste",
    "cabinet avocat": "avocat", "cabinet juridique": "avocat",
    "coach sportif": "default", "photographe": "default", "tatoueur": "default",
    "opticien": "default", "pharmacie": "default",
    "vétérinaire": "default", "veterinaire": "default",
}


def get_config(category):
    cat = category.lower().strip()
    if cat in CONFIGS:
        return CONFIGS[cat]
    if cat in CATEGORY_ALIASES:
        return CONFIGS[CATEGORY_ALIASES[cat]]
    return CONFIGS["default"]


# ──────────────────────────────────────────────
# TESTIMONIALS & FAQ DYNAMIQUES
# ──────────────────────────────────────────────

def get_testimonials(name, category):
    cat = category.lower().strip()
    if cat in CATEGORY_ALIASES:
        cat = CATEGORY_ALIASES[cat]
    food = [
        {"name": "Marie L.", "text": f"J'adore {name} ! Tout est fait maison avec des produits frais. On sent la passion dans chaque bouchée.", "rating": 5},
        {"name": "Thomas R.", "text": f"Accueil chaleureux, cadre agréable et qualité au rendez-vous. {name} est notre adresse incontournable.", "rating": 5},
        {"name": "Sophie M.", "text": f"Rapport qualité-prix imbattable, service rapide et souriant. On y retourne chaque semaine !", "rating": 5},
    ]
    beauty = [
        {"name": "Léa D.", "text": f"Résultat magnifique ! L'équipe de {name} est à l'écoute et très professionnelle. Je n'irai plus ailleurs.", "rating": 5},
        {"name": "Camille B.", "text": f"Un moment de pur bonheur. Le cadre est apaisant, les prestations de qualité. {name} est une pépite !", "rating": 5},
        {"name": "Julie P.", "text": f"Enfin un endroit où on se sent comprise. Conseils personnalisés et résultat au-delà de mes attentes.", "rating": 5},
    ]
    service = [
        {"name": "Marc D.", "text": f"Intervention rapide et soignée. {name} a réglé mon problème en un rien de temps. Tarifs transparents.", "rating": 5},
        {"name": "Pierre F.", "text": f"Professionnel et ponctuel. L'équipe a fait un travail impeccable. Des artisans sérieux, ça fait plaisir.", "rating": 5},
        {"name": "Nathalie C.", "text": f"Excellent service ! Devis respecté, travail propre. Je fais confiance à {name} les yeux fermés.", "rating": 5},
    ]
    pro = [
        {"name": "Laurent G.", "text": f"Accompagnement exceptionnel de A à Z. L'équipe de {name} est compétente, réactive et disponible.", "rating": 5},
        {"name": "Isabelle M.", "text": f"{name} a su me rassurer et me guider avec expertise. Un vrai professionnalisme, je suis ravie.", "rating": 5},
        {"name": "François H.", "text": f"Je recommande {name} sans hésitation. Écoute, transparence et résultats au rendez-vous.", "rating": 5},
    ]
    m = {"pizzeria": food, "restaurant": food, "boulangerie": food, "kebab": food, "boucherie": food,
         "coiffeur": beauty, "spa": beauty, "fleuriste": beauty,
         "garage": service, "plombier": service, "electricien": service,
         "immobilier": pro, "dentiste": pro, "avocat": pro}
    return m.get(cat, pro)


def get_faq(name, category, ville):
    cat = category.lower().strip()
    if cat in CATEGORY_ALIASES:
        cat = CATEGORY_ALIASES[cat]
    faqs = {
        "pizzeria": [
            {"q": "Livrez-vous à domicile ?", "a": f"Oui, {name} livre dans tout {ville}. Commandez par téléphone et recevez votre pizza chaude en 30 minutes."},
            {"q": "Proposez-vous des options sans gluten ?", "a": "Nous proposons des pâtes alternatives sur demande. Contactez-nous pour toute allergie."},
            {"q": "Peut-on privatiser le restaurant ?", "a": f"{name} est disponible pour vos événements privés et soirées d'entreprise."},
            {"q": "Quels sont vos modes de paiement ?", "a": "Espèces, cartes bancaires, tickets restaurant et paiement sans contact."},
        ],
        "restaurant": [
            {"q": "Faut-il réserver ?", "a": f"La réservation est recommandée, surtout le week-end. Appelez-nous pour garantir votre table."},
            {"q": "Proposez-vous un menu du jour ?", "a": "Oui, notre chef propose un menu renouvelé chaque midi : entrée, plat et dessert."},
            {"q": "Avez-vous des options végétariennes ?", "a": "Notre carte inclut des options végétariennes et nous adaptons nos plats sur demande."},
            {"q": "Organisez-vous des événements ?", "a": f"{name} accueille vos événements privés et professionnels. Contactez-nous pour un devis."},
        ],
        "boulangerie": [
            {"q": "À quelle heure êtes-vous ouverts ?", "a": f"{name} ouvre ses portes dès 6h30 pour vous proposer du pain frais chaque matin."},
            {"q": "Vos produits sont-ils artisanaux ?", "a": "100 % artisanal. Nos pains sont pétris et cuits sur place chaque jour avec des farines sélectionnées."},
            {"q": "Faites-vous des gâteaux sur commande ?", "a": "Oui, nous réalisons des pâtisseries sur commande pour vos événements. Commandez 48h à l'avance."},
            {"q": "Proposez-vous du sans gluten ?", "a": "Nous proposons une sélection de pains et pâtisseries adaptés. Renseignez-vous en boutique."},
        ],
        "coiffeur": [
            {"q": "Faut-il prendre rendez-vous ?", "a": f"Oui, nous vous recommandons de prendre rendez-vous pour garantir votre créneau chez {name}."},
            {"q": "Quels types de colorations proposez-vous ?", "a": "Balayage, mèches, couleur intégrale, patine, et coloration végétale."},
            {"q": "Coiffez-vous les hommes ?", "a": "Nous accueillons femmes, hommes et enfants avec des prestations adaptées à chacun."},
            {"q": "Utilisez-vous des produits bio ?", "a": "Nous travaillons avec des gammes professionnelles et proposons des options naturelles et bio."},
        ],
        "garage": [
            {"q": "Travaillez-vous sur toutes les marques ?", "a": f"Oui, {name} entretient et répare toutes les marques de véhicules, récents et anciens."},
            {"q": "Proposez-vous un véhicule de prêt ?", "a": "Un véhicule de courtoisie est disponible sur réservation pour les interventions longues."},
            {"q": "Le devis est-il gratuit ?", "a": "Oui, le devis est gratuit et sans engagement. Nous vous détaillons chaque intervention."},
            {"q": "Faites-vous le contrôle technique ?", "a": "Nous préparons votre véhicule au contrôle technique et effectuons les réparations nécessaires."},
        ],
        "plombier": [
            {"q": "Intervenez-vous en urgence ?", "a": f"Oui, {name} intervient 7j/7 en urgence sur {ville} et ses environs, dans l'heure."},
            {"q": "Le devis est-il gratuit ?", "a": "Le devis est toujours gratuit et sans engagement. Pas de surprise sur la facture."},
            {"q": "Quelles zones desservez-vous ?", "a": f"Nous intervenons sur {ville} et toutes les communes environnantes dans un rayon de 30 km."},
            {"q": "Quels travaux réalisez-vous ?", "a": "Fuites, débouchage, installation sanitaire, chauffe-eau, rénovation salle de bain complète."},
        ],
        "electricien": [
            {"q": "Intervenez-vous en urgence ?", "a": f"Oui, {name} assure un service d'urgence 7j/7 pour toute panne électrique sur {ville}."},
            {"q": "Êtes-vous certifié ?", "a": "Nous sommes certifiés et nos installations respectent toutes les normes en vigueur (NFC 15-100)."},
            {"q": "Faites-vous de la domotique ?", "a": "Oui, nous installons des systèmes domotiques : éclairage connecté, volets, alarmes, thermostats."},
            {"q": "Le devis est-il gratuit ?", "a": "Devis gratuit et détaillé sous 24h. Pas de mauvaise surprise, tout est transparent."},
        ],
        "dentiste": [
            {"q": "Prenez-vous de nouveaux patients ?", "a": f"Oui, {name} accueille de nouveaux patients. Appelez-nous pour prendre votre premier rendez-vous."},
            {"q": "Le blanchiment est-il douloureux ?", "a": "Non, nos techniques de blanchiment sont indolores et respectent l'émail de vos dents."},
            {"q": "Acceptez-vous la carte Vitale ?", "a": "Oui, nous acceptons la carte Vitale et pratiquons le tiers payant avec la plupart des mutuelles."},
            {"q": "En cas d'urgence dentaire ?", "a": f"Appelez-nous directement, nous réservons des créneaux d'urgence chaque jour."},
        ],
        "avocat": [
            {"q": "La première consultation est-elle gratuite ?", "a": f"Oui, {name} offre un premier entretien gratuit de 30 minutes pour évaluer votre dossier."},
            {"q": "Quels domaines de droit pratiquez-vous ?", "a": "Droit de la famille, droit immobilier, droit des affaires, droit pénal et droit du travail."},
            {"q": "Quel est le coût d'une procédure ?", "a": "Nos honoraires sont transparents et communiqués dès le premier rendez-vous. Possibilité de forfait."},
            {"q": "Consultez-vous en visio ?", "a": "Oui, nous proposons des consultations en visioconférence pour votre confort."},
        ],
        "spa": [
            {"q": "Faut-il réserver ?", "a": f"Oui, nous vous recommandons de réserver votre soin à l'avance pour garantir votre créneau."},
            {"q": "Quels produits utilisez-vous ?", "a": "Nous travaillons avec des marques bio et naturelles, respectueuses de votre peau et de l'environnement."},
            {"q": "Proposez-vous des forfaits ?", "a": f"Oui, {name} propose des forfaits découverte, cure et abonnement à tarif préférentiel."},
            {"q": "Les soins sont-ils adaptés aux peaux sensibles ?", "a": "Absolument. Nous adaptons chaque protocole à votre type de peau après un diagnostic personnalisé."},
        ],
    }
    default_faq = [
        {"q": "Comment prendre rendez-vous ?", "a": f"Appelez-nous directement ou passez nous voir. L'équipe de {name} se fera un plaisir de vous accueillir."},
        {"q": "Quels sont vos tarifs ?", "a": "Nos tarifs sont transparents et adaptés à chaque prestation. Contactez-nous pour un devis gratuit."},
        {"q": "Où êtes-vous situés ?", "a": f"Nous sommes situés à {ville}. Retrouvez notre adresse exacte sur la carte ci-dessous."},
        {"q": "Quels sont vos horaires ?", "a": "Consultez nos horaires d'ouverture en bas de page ou appelez-nous pour vérifier notre disponibilité."},
    ]
    return faqs.get(cat, default_faq)


# ──────────────────────────────────────────────
# TEMPLATE HTML V3 — GSAP, TEXT REVEAL, COMPTEURS, GLASSMORPHISM
# ──────────────────────────────────────────────

def generate_html(name, category, ville, phone="", address=""):
    c = get_config(category)
    short_name = " ".join(name.split()[:2])
    phone_link = phone.replace(" ", "")
    full_address = f"{address}, {ville}" if address else ville
    testimonials = get_testimonials(name, category)
    faq_items = get_faq(name, category, ville)
    is_emergency = c.get("emergency", False)
    has_before_after = "before_after" in c.get("features", []) and c.get("before_after")

    # ── Services cards ──
    services_html = ""
    for i, s in enumerate(c["services"]):
        services_html += f"""
      <div class="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 gs-reveal" data-delay="{i*0.1}">
        <div class="aspect-[16/10] overflow-hidden">
          <img src="{s['img']}" alt="{s['title']}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy">
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </div>
        <div class="absolute bottom-0 left-0 right-0 p-6 text-white transform group-hover:-translate-y-1 transition-transform duration-500">
          <div class="w-12 h-12 backdrop-blur-xl bg-white/20 rounded-2xl flex items-center justify-center mb-3 border border-white/30 group-hover:scale-110 transition-transform duration-500">
            <i class="fas fa-{s['icon']} text-lg"></i>
          </div>
          <h3 class="text-xl font-bold mb-1">{s['title']}</h3>
          <p class="text-white/80 text-sm">{s['desc']}</p>
        </div>
      </div>"""

    # ── Stats with counter targets ──
    stats_html = ""
    for i, s in enumerate(c["stats"]):
        num_val = re.sub(r'[^0-9.]', '', s['num'])
        suffix = s['num'].replace(num_val, '') if num_val else ''
        stats_html += f"""
      <div class="text-center gs-reveal" data-delay="{i*0.1}">
        <div class="w-14 h-14 mx-auto mb-3 rounded-2xl bg-gradient-to-br from-[{c['primary']}]/10 to-[{c['accent']}]/10 flex items-center justify-center">
          <i class="fas fa-{s['icon']} text-[{c['primary']}] text-lg"></i>
        </div>
        <div class="text-3xl font-extrabold text-gray-900"><span class="counter" data-target="{num_val}" data-suffix="{suffix}">{s['num']}</span></div>
        <div class="text-sm text-gray-500 mt-1">{s['label']}</div>
      </div>"""

    # ── Menu (restaurants/pizzerias) ──
    menu_section = ""
    if "menu" in c.get("features", []) and c.get("menu"):
        menu_items = ""
        for i, m in enumerate(c["menu"]):
            menu_items += f"""
        <div class="group flex items-center gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-all duration-300 gs-reveal" data-delay="{i*0.06}">
          <img src="{m['img']}" alt="{m['name']}" class="w-20 h-20 rounded-2xl object-cover group-hover:scale-105 transition-transform duration-500 shadow-sm" loading="lazy">
          <div class="flex-1 min-w-0">
            <div class="flex items-center justify-between">
              <h4 class="font-bold text-gray-900">{m['name']}</h4>
              <span class="text-lg font-bold text-[{c['primary']}] ml-2 shrink-0">{m['price']} €</span>
            </div>
            <p class="text-sm text-gray-500 mt-0.5">{m['desc']}</p>
          </div>
        </div>"""
        menu_section = f"""
  <section class="py-24 px-6" id="carte">
    <div class="max-w-3xl mx-auto">
      <div class="text-center mb-12 gs-reveal">
        <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[{c['light']}] text-[{c['primary']}] text-sm font-medium mb-4">
          <i class="fas fa-utensils"></i> Notre Carte
        </span>
        <h2 class="text-4xl md:text-5xl font-extrabold text-gray-900">Nos <span class="text-[{c['primary']}]">Spécialités</span></h2>
      </div>
      <div class="space-y-2">{menu_items}</div>
    </div>
  </section>"""

    # ── Gallery bento ──
    gallery_section = ""
    if "gallery" in c.get("features", []) and c.get("gallery"):
        gallery_items = ""
        sizes = ["col-span-2 row-span-2", "col-span-1 row-span-1", "col-span-1 row-span-1",
                 "col-span-1 row-span-1", "col-span-1 row-span-1", "col-span-2 row-span-1"]
        for i, g in enumerate(c["gallery"]):
            size = sizes[i % len(sizes)]
            gallery_items += f"""
        <div class="group {size} relative overflow-hidden rounded-3xl gs-reveal cursor-pointer" data-delay="{i*0.08}">
          <img src="{g['img']}" alt="{g['title']}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 min-h-[200px]" loading="lazy">
          <div class="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500"></div>
          <div class="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
            <p class="text-white font-bold text-lg">{g['title']}</p>
          </div>
        </div>"""
        gallery_section = f"""
  <section class="py-24 px-6 bg-gray-50/50" id="galerie">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-12 gs-reveal">
        <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[{c['light']}] text-[{c['primary']}] text-sm font-medium mb-4">
          <i class="fas fa-images"></i> Galerie
        </span>
        <h2 class="text-4xl md:text-5xl font-extrabold text-gray-900">Notre <span class="text-[{c['primary']}]">Savoir-Faire</span></h2>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">{gallery_items}</div>
    </div>
  </section>"""

    # ── Before/After slider ──
    ba_section = ""
    if has_before_after:
        ba = c["before_after"][0]
        ba_section = f"""
  <section class="py-24 px-6">
    <div class="max-w-3xl mx-auto">
      <div class="text-center mb-12 gs-reveal">
        <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[{c['light']}] text-[{c['primary']}] text-sm font-medium mb-4">
          <i class="fas fa-arrows-left-right"></i> Avant / Après
        </span>
        <h2 class="text-4xl md:text-5xl font-extrabold text-gray-900">Nos <span class="text-[{c['primary']}]">Résultats</span></h2>
      </div>
      <div class="ba-container relative rounded-3xl overflow-hidden shadow-2xl gs-reveal cursor-col-resize select-none" style="aspect-ratio:16/10">
        <img src="{ba['after']}" alt="Après" class="absolute inset-0 w-full h-full object-cover">
        <div class="ba-before absolute inset-0 overflow-hidden" style="width:50%">
          <img src="{ba['before']}" alt="Avant" class="absolute inset-0 w-full h-full object-cover" style="min-width:calc(100vw - 3rem);max-width:48rem">
        </div>
        <div class="ba-line absolute top-0 bottom-0 w-1 bg-white shadow-lg" style="left:50%">
          <div class="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
            <i class="fas fa-arrows-left-right text-[{c['primary']}]"></i>
          </div>
        </div>
        <div class="absolute top-4 left-4 bg-black/60 text-white px-3 py-1 rounded-full text-xs font-bold">AVANT</div>
        <div class="absolute top-4 right-4 bg-[{c['primary']}] text-white px-3 py-1 rounded-full text-xs font-bold">APRÈS</div>
      </div>
      <p class="text-center text-gray-500 mt-4 text-sm">{ba['label']}</p>
    </div>
  </section>"""

    # ── Testimonials ──
    test_cards = ""
    for i, t in enumerate(testimonials):
        stars = '<i class="fas fa-star text-yellow-400 text-xs"></i>' * t["rating"]
        test_cards += f"""
      <div class="min-w-[320px] max-w-[360px] flex-shrink-0 bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 gs-reveal" data-delay="{i*0.15}">
        <div class="flex items-center gap-1 mb-3">{stars}</div>
        <p class="text-gray-600 text-sm leading-relaxed mb-4">"{t['text']}"</p>
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-full bg-gradient-to-br from-[{c['primary']}] to-[{c['accent']}] flex items-center justify-center text-white font-bold text-sm">{t['name'][0]}</div>
          <div>
            <div class="font-bold text-gray-900 text-sm">{t['name']}</div>
            <div class="text-xs text-gray-400">Client vérifié</div>
          </div>
        </div>
      </div>"""
    testimonials_section = f"""
  <section class="py-24 px-6 bg-gray-50/50">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-12 gs-reveal">
        <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[{c['light']}] text-[{c['primary']}] text-sm font-medium mb-4">
          <i class="fas fa-quote-left"></i> Témoignages
        </span>
        <h2 class="text-4xl md:text-5xl font-extrabold text-gray-900">Ce que disent <span class="text-[{c['primary']}]">nos clients</span></h2>
      </div>
      <div class="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide" style="-ms-overflow-style:none;scrollbar-width:none">
        {test_cards}
      </div>
    </div>
  </section>"""

    # ── FAQ accordion ──
    faq_html_items = ""
    for i, f in enumerate(faq_items):
        faq_html_items += f"""
      <div class="faq-item border border-gray-100 rounded-2xl overflow-hidden gs-reveal" data-delay="{i*0.08}">
        <button class="faq-toggle w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors" onclick="this.parentElement.classList.toggle('open')">
          <span class="font-bold text-gray-900 pr-4">{f['q']}</span>
          <i class="fas fa-plus text-[{c['primary']}] text-sm faq-icon transition-transform duration-300"></i>
        </button>
        <div class="faq-answer max-h-0 overflow-hidden transition-all duration-500">
          <p class="px-5 pb-5 text-gray-500 text-sm leading-relaxed">{f['a']}</p>
        </div>
      </div>"""
    faq_section = f"""
  <section class="py-24 px-6" id="faq">
    <div class="max-w-3xl mx-auto">
      <div class="text-center mb-12 gs-reveal">
        <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[{c['light']}] text-[{c['primary']}] text-sm font-medium mb-4">
          <i class="fas fa-circle-question"></i> FAQ
        </span>
        <h2 class="text-4xl md:text-5xl font-extrabold text-gray-900">Questions <span class="text-[{c['primary']}]">fréquentes</span></h2>
      </div>
      <div class="space-y-3">{faq_html_items}</div>
    </div>
  </section>"""

    # ── Emergency banner ──
    emergency_banner = ""
    if is_emergency and phone:
        emergency_banner = f"""
<div class="fixed bottom-0 left-0 right-0 z-40 md:relative md:z-auto bg-gradient-to-r from-red-600 to-red-500 text-white py-3 px-4 text-center hidden md:block" id="emergencyBanner">
  <div class="flex items-center justify-center gap-3">
    <span class="animate-pulse"><i class="fas fa-exclamation-triangle"></i></span>
    <span class="font-bold text-sm">{c.get('emergency_text', 'Urgence ?')}</span>
    <a href="tel:{phone_link}" class="bg-white text-red-600 px-4 py-1.5 rounded-full font-bold text-sm hover:bg-red-50 transition-colors">{phone}</a>
  </div>
</div>"""

    # ── Phone elements ──
    phone_cta = ""
    if phone:
        phone_cta = f"""<a href="tel:{phone_link}" class="magnetic group inline-flex items-center gap-3 bg-[{c['primary']}] text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg shadow-[{c['primary']}]/25 hover:shadow-xl hover:shadow-[{c['primary']}]/30 hover:-translate-y-1 transition-all duration-300">
          <i class="fas fa-phone group-hover:rotate-12 transition-transform duration-300"></i>Nous Appeler
        </a>"""

    phone_nav = ""
    if phone:
        phone_nav = f"""<a href="tel:{phone_link}" class="hidden md:flex items-center gap-2 bg-[{c['primary']}] text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:shadow-lg transition-all duration-300">
          <i class="fas fa-phone text-xs"></i>{phone}
        </a>"""

    # ── Sticky mobile CTA ──
    sticky_cta = ""
    if phone:
        sticky_cta = f"""
<div class="fixed bottom-6 right-6 z-50 md:hidden">
  <a href="tel:{phone_link}" class="flex items-center justify-center w-16 h-16 bg-[{c['primary']}] text-white rounded-full shadow-2xl shadow-[{c['primary']}]/40 animate-[bounce_2s_ease-in-out_infinite]">
    <i class="fas fa-phone text-xl"></i>
  </a>
</div>"""

    # ── Map ──
    map_section = ""
    if full_address:
        encoded_addr = requests.utils.quote(f"{name} {full_address}")
        map_section = f"""
  <section class="h-[400px] relative overflow-hidden">
    <iframe src="https://www.google.com/maps?q={encoded_addr}&output=embed" class="w-full h-full" allowfullscreen loading="lazy" style="filter:saturate(0.8)"></iframe>
  </section>"""

    # ── Nav links ──
    nav_links = '<a href="#services" class="nav-link text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">Services</a>'
    if "menu" in c.get("features", []) and c.get("menu"):
        nav_links += '\n        <a href="#carte" class="nav-link text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">Carte</a>'
    if "gallery" in c.get("features", []) and c.get("gallery"):
        nav_links += '\n        <a href="#galerie" class="nav-link text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">Galerie</a>'
    nav_links += '\n        <a href="#avis" class="nav-link text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">Avis</a>'
    nav_links += '\n        <a href="#contact" class="nav-link text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">Contact</a>'

    # ── Hours ──
    hours = c.get("hours", "")
    hours_html = ""
    if hours:
        hours_html = f"""
        <div class="flex items-center gap-3 backdrop-blur-xl bg-white/70 border border-white/50 rounded-2xl px-5 py-3 shadow-sm mt-6">
          <i class="fas fa-clock text-[{c['primary']}]"></i>
          <span class="text-sm text-gray-700 font-medium">{hours}</span>
        </div>"""

    # ── Trust marquee ──
    trust_items = "Qualité garantie · Devis gratuit · Sans engagement · Satisfaction client · Professionnalisme · Réactivité"
    trust_marquee = f"""
  <div class="py-6 bg-gray-50 overflow-hidden">
    <div class="marquee-track flex gap-8 whitespace-nowrap">
      {"".join(f'<span class="text-sm font-medium text-gray-400 flex items-center gap-2"><i class="fas fa-check-circle text-[{c["primary"]}]/40"></i>{trust_items}</span>' for _ in range(3))}
    </div>
  </div>"""

    html = f"""<!DOCTYPE html>
<html lang="fr" class="scroll-smooth">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>{name} | {c['badge']} à {ville}</title>
<meta name="description" content="{name} - {c['badge']} à {ville}. {c['description']}">
<meta name="theme-color" content="#ffffff">
<meta property="og:title" content="{name} | {c['badge']} à {ville}">
<meta property="og:description" content="{c['description']}">
<meta property="og:image" content="{c['heroImg']}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
<script src="https://cdn.tailwindcss.com"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
<style>
*{{font-family:'Inter',system-ui,sans-serif}}

/* GSAP reveal base */
.gs-reveal{{opacity:0;transform:translateY(50px)}}

/* Glassmorphism */
.glass{{backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);background:rgba(255,255,255,0.7);border:1px solid rgba(255,255,255,0.5)}}
.glass-strong{{backdrop-filter:blur(40px);-webkit-backdrop-filter:blur(40px);background:rgba(255,255,255,0.85);border:1px solid rgba(255,255,255,0.6);box-shadow:0 8px 32px rgba(0,0,0,0.06)}}

/* Nav scroll */
.nav-scrolled{{background:rgba(255,255,255,0.92)!important;backdrop-filter:blur(20px)!important;box-shadow:0 1px 3px rgba(0,0,0,0.08)!important}}

/* Gradient mesh */
.mesh-gradient{{background:radial-gradient(at 20% 20%,{c['accent']}15 0,transparent 50%),radial-gradient(at 80% 80%,{c['primary']}10 0,transparent 50%),radial-gradient(at 50% 50%,{c['accent']}08 0,transparent 70%)}}

/* Hero text reveal */
.hero-word{{display:inline-block;opacity:0;transform:translateY(100%);will-change:transform,opacity}}

/* FAQ */
.faq-item .faq-answer{{max-height:0}}
.faq-item.open .faq-answer{{max-height:200px}}
.faq-item.open .faq-icon{{transform:rotate(45deg)}}

/* Before/After */
.ba-container img{{pointer-events:none;user-select:none}}

/* Marquee */
.marquee-track{{animation:marquee 30s linear infinite}}
@keyframes marquee{{0%{{transform:translateX(0)}}100%{{transform:translateX(-33.33%)}}}}

/* Magnetic button */
.magnetic{{transition:transform 0.3s cubic-bezier(0.25,0.46,0.45,0.94)}}

/* Custom scrollbar */
::-webkit-scrollbar{{width:6px}}
::-webkit-scrollbar-track{{background:transparent}}
::-webkit-scrollbar-thumb{{background:{c['primary']}40;border-radius:3px}}
.scrollbar-hide::-webkit-scrollbar{{display:none}}

/* Float animation */
@keyframes float{{0%,100%{{transform:translateY(0)}}50%{{transform:translateY(-20px)}}}}
@keyframes bounce{{0%,100%{{transform:translateY(0)}}50%{{transform:translateY(-6px)}}}}

/* Nav link underline */
.nav-link{{position:relative}}.nav-link::after{{content:'';position:absolute;bottom:-2px;left:0;width:0;height:2px;background:{c['primary']};transition:width 0.3s}}.nav-link:hover::after{{width:100%}}

img{{transition:opacity 0.3s}}
</style>
</head>
<body class="bg-white text-gray-900 antialiased overflow-x-hidden">

{emergency_banner}

<!-- ═══ NAV ═══ -->
<nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-500" id="nav">
  <div class="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4">
    <div class="glass-strong rounded-2xl px-4 md:px-6 py-3 flex items-center justify-between" id="navInner">
      <a href="#" class="text-xl font-extrabold text-gray-900">{short_name}<span class="text-[{c['primary']}]">.</span></a>
      <div class="hidden md:flex items-center gap-8">{nav_links}</div>
      <div class="flex items-center gap-3">
        {phone_nav}
        <button class="md:hidden w-10 h-10 flex items-center justify-center rounded-xl hover:bg-gray-100 transition-colors" onclick="document.getElementById('mobileMenu').classList.toggle('hidden')">
          <i class="fas fa-bars text-gray-700"></i>
        </button>
      </div>
    </div>
    <!-- Mobile menu -->
    <div id="mobileMenu" class="hidden mt-2 glass-strong rounded-2xl p-4 flex flex-col gap-3">
      <a href="#services" class="text-gray-700 font-medium py-2 px-3 rounded-xl hover:bg-gray-100" onclick="document.getElementById('mobileMenu').classList.add('hidden')">Services</a>
      {"<a href='#carte' class='text-gray-700 font-medium py-2 px-3 rounded-xl hover:bg-gray-100' onclick=\"document.getElementById('mobileMenu').classList.add('hidden')\">Carte</a>" if "menu" in c.get("features", []) and c.get("menu") else ""}
      {"<a href='#galerie' class='text-gray-700 font-medium py-2 px-3 rounded-xl hover:bg-gray-100' onclick=\"document.getElementById('mobileMenu').classList.add('hidden')\">Galerie</a>" if "gallery" in c.get("features", []) and c.get("gallery") else ""}
      <a href="#avis" class="text-gray-700 font-medium py-2 px-3 rounded-xl hover:bg-gray-100" onclick="document.getElementById('mobileMenu').classList.add('hidden')">Avis</a>
      <a href="#contact" class="text-gray-700 font-medium py-2 px-3 rounded-xl hover:bg-gray-100" onclick="document.getElementById('mobileMenu').classList.add('hidden')">Contact</a>
      {"<a href='tel:" + phone_link + "' class='bg-[" + c['primary'] + "] text-white font-bold py-3 px-4 rounded-xl text-center'><i class='fas fa-phone mr-2'></i>" + phone + "</a>" if phone else ""}
    </div>
  </div>
</nav>

<!-- ═══ HERO ═══ -->
<section class="min-h-screen relative flex items-center overflow-hidden">
  <div class="absolute inset-0 mesh-gradient"></div>
  <div class="absolute top-20 right-10 w-72 h-72 bg-[{c['accent']}]/10 rounded-full blur-3xl" style="animation:float 8s ease-in-out infinite"></div>
  <div class="absolute bottom-20 left-10 w-96 h-96 bg-[{c['primary']}]/8 rounded-full blur-3xl" style="animation:float 10s ease-in-out infinite reverse"></div>

  <div class="max-w-7xl mx-auto px-4 md:px-6 pt-28 md:pt-32 pb-16 md:pb-20 relative z-10 w-full">
    <div class="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
      <div>
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[{c['light']}] text-[{c['primary']}] text-sm font-medium mb-6 gs-reveal">
          <span class="w-2 h-2 bg-[{c['primary']}] rounded-full animate-pulse"></span>
          {c['badge']} · {ville}
        </div>
        <h1 class="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] mb-6" id="heroTitle">
          <span class="hero-word">{c['tagline'].split()[0]}</span> <span class="hero-word">{' '.join(c['tagline'].split()[1:])}</span><br>
          <span class="hero-word bg-gradient-to-r from-[{c['primary']}] to-[{c['accent']}] bg-clip-text text-transparent">{name}</span>
        </h1>
        <p class="text-base md:text-lg text-gray-500 max-w-lg mb-8 leading-relaxed gs-reveal" data-delay="0.4">{c['description']}</p>
        <div class="flex flex-wrap gap-4 gs-reveal" data-delay="0.5">
          {phone_cta}
          <a href="#services" class="magnetic inline-flex items-center gap-3 bg-gray-100 text-gray-900 px-6 md:px-8 py-4 rounded-full font-bold text-base md:text-lg hover:bg-gray-200 hover:-translate-y-1 transition-all duration-300">
            <i class="fas fa-arrow-down text-sm"></i>Découvrir
          </a>
        </div>
        {hours_html}
      </div>
      <div class="relative gs-reveal" data-delay="0.3">
        <div class="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-black/10 group">
          <img src="{c['heroImg']}" alt="{name}" class="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-1000">
          <div class="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
        </div>
        <div class="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 backdrop-blur-xl bg-white/80 border border-white/50 rounded-2xl p-3 md:p-4 shadow-xl flex items-center gap-3">
          <div class="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[{c['primary']}] to-[{c['accent']}] rounded-xl flex items-center justify-center text-white">
            <i class="fas fa-{c['icon']} text-base md:text-lg"></i>
          </div>
          <div>
            <div class="text-xl md:text-2xl font-extrabold text-gray-900">{c['stats'][0]['num']}</div>
            <div class="text-xs text-gray-500">{c['stats'][0]['label']}</div>
          </div>
        </div>
        <div class="absolute -top-3 -right-3 md:-top-4 md:-right-4 backdrop-blur-xl bg-white/80 border border-white/50 rounded-2xl px-3 md:px-4 py-2 md:py-3 shadow-xl">
          <div class="flex items-center gap-1">
            <i class="fas fa-star text-yellow-400 text-xs"></i><i class="fas fa-star text-yellow-400 text-xs"></i><i class="fas fa-star text-yellow-400 text-xs"></i><i class="fas fa-star text-yellow-400 text-xs"></i><i class="fas fa-star text-yellow-400 text-xs"></i>
          </div>
          <div class="text-xs text-gray-500 text-center mt-1">{c['stats'][1]['num']} avis</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ═══ STATS ═══ -->
<section class="py-12 md:py-16 px-4 md:px-6 bg-gray-50/50">
  <div class="max-w-5xl mx-auto">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">{stats_html}</div>
  </div>
</section>

<!-- ═══ SERVICES ═══ -->
<section class="py-16 md:py-24 px-4 md:px-6" id="services">
  <div class="max-w-6xl mx-auto">
    <div class="text-center mb-12 md:mb-16 gs-reveal">
      <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[{c['light']}] text-[{c['primary']}] text-sm font-medium mb-4">
        <i class="fas fa-sparkles"></i> Nos Services
      </span>
      <h2 class="text-3xl md:text-5xl font-extrabold text-gray-900">Ce que nous <span class="text-[{c['primary']}]">proposons</span></h2>
      <p class="text-gray-500 mt-4 max-w-xl mx-auto text-sm md:text-base">Des prestations de qualité adaptées à vos besoins</p>
    </div>
    <div class="grid md:grid-cols-3 gap-6">{services_html}</div>
  </div>
</section>

{menu_section}

{ba_section}

{gallery_section}

<!-- ═══ TESTIMONIALS ═══ -->
<section id="avis">
{testimonials_section}
</section>

{faq_section}

{trust_marquee}

<!-- ═══ CONTACT ═══ -->
<section class="py-16 md:py-24 px-4 md:px-6" id="contact">
  <div class="max-w-4xl mx-auto">
    <div class="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[{c['primary']}] to-[{c['accent']}] p-8 md:p-16 text-white text-center gs-reveal">
      <div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div class="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
      <div class="relative z-10">
        <h2 class="text-3xl md:text-5xl font-extrabold mb-4">Parlons de votre projet</h2>
        <p class="text-white/80 text-base md:text-lg mb-8 max-w-lg mx-auto">Contactez-nous pour discuter de vos besoins. Nous sommes à votre écoute.</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          {"<a href='tel:" + phone_link + "' class='magnetic inline-flex items-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300'><i class='fas fa-phone'></i>" + phone + "</a>" if phone else ""}
          <a href="#" class="inline-flex items-center gap-3 bg-white/20 backdrop-blur text-white border border-white/30 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/30 transition-all duration-300">
            <i class="fas fa-map-marker-alt"></i>{ville}
          </a>
        </div>
        <div class="inline-flex items-center gap-2 bg-white/10 backdrop-blur rounded-full px-6 py-3">
          <i class="fas fa-clock"></i><span class="text-sm">{hours}</span>
        </div>
      </div>
    </div>
  </div>
</section>

{map_section}

<!-- ═══ FOOTER ═══ -->
<footer class="py-8 md:py-10 px-4 md:px-6 border-t border-gray-100">
  <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
    <div class="flex items-center gap-2">
      <span class="font-extrabold text-gray-900">{short_name}<span class="text-[{c['primary']}]">.</span></span>
      <span class="text-gray-400">|</span>
      <span class="text-gray-500 text-sm">{c['badge']} à {ville}</span>
    </div>
    <p class="text-gray-400 text-sm">Site créé par <a href="https://traffik-web.fr" class="text-[{c['primary']}] hover:underline font-medium">Traffik Web</a></p>
  </div>
</footer>

{sticky_cta}

<!-- ═══ SCRIPTS V3 ═══ -->
<script>
gsap.registerPlugin(ScrollTrigger);

// ── Hero text reveal ──
gsap.to('.hero-word', {{
  opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out', delay: 0.3
}});

// ── GSAP scroll reveal ──
document.querySelectorAll('.gs-reveal').forEach(el => {{
  const delay = parseFloat(el.dataset.delay || 0);
  gsap.to(el, {{
    scrollTrigger: {{ trigger: el, start: 'top 88%', toggleActions: 'play none none none' }},
    opacity: 1, y: 0, duration: 0.7, delay: delay, ease: 'power2.out'
  }});
}});

// ── Animated counters ──
document.querySelectorAll('.counter').forEach(el => {{
  const target = parseFloat(el.dataset.target);
  const suffix = el.dataset.suffix || '';
  if(!target && target !== 0) return;
  ScrollTrigger.create({{
    trigger: el, start: 'top 90%',
    onEnter: () => {{
      gsap.to({{ val: 0 }}, {{
        val: target, duration: 1.5, ease: 'power2.out',
        onUpdate: function() {{
          const v = this.targets()[0].val;
          el.textContent = (v % 1 === 0 ? Math.round(v) : v.toFixed(1)) + suffix;
        }}
      }});
    }}, once: true
  }});
}});

// ── Nav scroll ──
window.addEventListener('scroll', () => {{
  const nav = document.getElementById('navInner');
  if(window.scrollY > 80) nav.classList.add('nav-scrolled');
  else nav.classList.remove('nav-scrolled');
}});

// ── Magnetic buttons (desktop) ──
if(window.innerWidth > 768) {{
  document.querySelectorAll('.magnetic').forEach(btn => {{
    btn.addEventListener('mousemove', e => {{
      const r = btn.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width/2) * 0.15;
      const y = (e.clientY - r.top - r.height/2) * 0.15;
      btn.style.transform = `translate(${{x}}px,${{y}}px)`;
    }});
    btn.addEventListener('mouseleave', () => {{
      btn.style.transform = 'translate(0,0)';
    }});
  }});
}}

// ── Before/After slider ──
const ba = document.querySelector('.ba-container');
if(ba) {{
  let isDragging = false;
  const move = (x) => {{
    const r = ba.getBoundingClientRect();
    let pct = ((x - r.left) / r.width) * 100;
    pct = Math.max(5, Math.min(95, pct));
    ba.querySelector('.ba-before').style.width = pct + '%';
    ba.querySelector('.ba-line').style.left = pct + '%';
  }};
  ba.addEventListener('mousedown', () => isDragging = true);
  ba.addEventListener('touchstart', () => isDragging = true);
  window.addEventListener('mouseup', () => isDragging = false);
  window.addEventListener('touchend', () => isDragging = false);
  ba.addEventListener('mousemove', e => {{ if(isDragging) move(e.clientX); }});
  ba.addEventListener('touchmove', e => {{ if(isDragging) move(e.touches[0].clientX); }});
  ba.addEventListener('click', e => move(e.clientX));
}}

// ── Smooth scroll ──
document.querySelectorAll('a[href^="#"]').forEach(a => {{
  a.addEventListener('click', e => {{
    const target = document.querySelector(a.getAttribute('href'));
    if(target) {{ e.preventDefault(); target.scrollIntoView({{ behavior:'smooth', block:'start' }}); }}
  }});
}});
</script>
</body>
</html>"""

    return html


# ──────────────────────────────────────────────
# DEPLOY — UN SEUL PROJET VERCEL, TOUTES LES PAGES
# ──────────────────────────────────────────────

PROJECT_NAME = "demo-traffik"
BASE_URL = f"https://{PROJECT_NAME}.vercel.app"


def make_slug(name):
    """Génère un slug propre à partir du nom."""
    return re.sub(r'[^a-z0-9]+', '-', name.lower()).strip('-')[:30]


def deploy_batch_to_vercel(pages):
    """
    Déploie toutes les pages en UN seul projet Vercel.
    pages = dict de {slug: html_content}
    Retourne (success, url_base ou erreur)
    """
    files = []

    # Index page — redirige vers traffik-web.fr
    index_html = """<!DOCTYPE html><html><head><meta charset="UTF-8">
<meta http-equiv="refresh" content="0;url=https://traffik-web.fr">
<title>Traffik Web - Demos</title></head>
<body><p>Redirection...</p></body></html>"""
    files.append({
        "file": "index.html",
        "data": base64.b64encode(index_html.encode('utf-8')).decode('utf-8'),
        "encoding": "base64"
    })

    # Chaque prospect = un sous-dossier
    for slug, html_content in pages.items():
        files.append({
            "file": f"{slug}/index.html",
            "data": base64.b64encode(html_content.encode('utf-8')).decode('utf-8'),
            "encoding": "base64"
        })

    body = {
        "name": PROJECT_NAME,
        "files": files,
        "projectSettings": {"framework": None},
        "target": "production"
    }

    resp = requests.post(
        "https://api.vercel.com/v13/deployments",
        headers={"Authorization": f"Bearer {VERCEL_TOKEN}", "Content-Type": "application/json"},
        json=body, timeout=60
    )

    if resp.status_code in (200, 201):
        return True, BASE_URL
    else:
        return False, resp.text[:300]


def deploy_single_to_vercel(name, html_content):
    """Fallback : déploie un seul site dans son propre projet (ancien mode)."""
    slug = make_slug(name)
    project_name = f"{slug}-{random.randint(100000, 999999)}"
    encoded = base64.b64encode(html_content.encode('utf-8')).decode('utf-8')

    body = {
        "name": project_name,
        "files": [{"file": "index.html", "data": encoded, "encoding": "base64"}],
        "projectSettings": {"framework": None},
        "target": "production"
    }

    resp = requests.post(
        "https://api.vercel.com/v13/deployments",
        headers={"Authorization": f"Bearer {VERCEL_TOKEN}", "Content-Type": "application/json"},
        json=body, timeout=30
    )

    if resp.status_code in (200, 201):
        return True, f"https://{project_name}.vercel.app"
    else:
        return False, resp.text[:200]


def build_and_deploy(prospect):
    """Génère le HTML pour un prospect et déploie dans le projet batch unique."""
    name = prospect.get("nom", "Mon Entreprise")
    category = prospect.get("categorie", "default")
    ville = prospect.get("ville", "")
    phone = prospect.get("telephone", "")
    address = prospect.get("adresse", "")
    html = generate_html(name, category, ville, phone, address)

    # Toujours utiliser le batch (1 seul projet Vercel pour tous)
    slug = make_slug(name)
    ok, result = deploy_batch_to_vercel({slug: html})
    if ok:
        return True, f"{BASE_URL}/{slug}"
    return False, result


def build_all_and_deploy_batch():
    """Génère TOUS les prospects et déploie en un seul projet Vercel."""
    if not os.path.exists(PROSPECTS_CSV):
        print("[!] Aucun prospect.")
        return

    prospects = []
    with open(PROSPECTS_CSV, "r") as f:
        reader = csv.DictReader(f)
        for row in reader:
            if row.get("statut") in ("A_CONTACTER", "DM_ENVOYE"):
                prospects.append(row)

    if not prospects:
        print("[!] Aucun prospect à déployer.")
        return

    print(f"\n{'='*55}")
    print(f"  GÉNÉRATION V3 BATCH — {len(prospects)} prospects → 1 projet")
    print(f"{'='*55}\n")

    pages = {}
    for i, p in enumerate(prospects):
        name = p.get("nom", "Entreprise")
        slug = make_slug(name)
        cat = p.get("categorie", "default")
        ville = p.get("ville", "")
        phone = p.get("telephone", "")
        address = p.get("adresse", "")

        print(f"  [{i+1}/{len(prospects)}] {name} ({cat})...", end=" ", flush=True)
        html = generate_html(name, cat, ville, phone, address)
        pages[slug] = html
        print(f"OK ({len(html)//1024}KB)")

    print(f"\n  Déploiement batch vers {BASE_URL}...", end=" ", flush=True)
    ok, result = deploy_batch_to_vercel(pages)

    if ok:
        print(f"OK\n")
        # Mise à jour des URLs dans le CSV
        for p in prospects:
            slug = make_slug(p.get("nom", ""))
            url = f"{BASE_URL}/{slug}"
            update_csv_site_url(p["place_id"], url)
            print(f"  → {url}")
        print(f"\n  {len(pages)} pages déployées sur {BASE_URL}\n")
    else:
        print(f"ERREUR\n  {result}\n")


def update_csv_site_url(place_id, site_url):
    rows = []
    fieldnames = None
    with open(PROSPECTS_CSV, "r") as f:
        reader = csv.DictReader(f)
        fieldnames = reader.fieldnames
        if "site_demo" not in fieldnames:
            fieldnames = list(fieldnames) + ["site_demo"]
        for row in reader:
            if row["place_id"] == place_id:
                row["site_demo"] = site_url
            rows.append(row)
    with open(PROSPECTS_CSV, "w", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(rows)


def main():
    if len(sys.argv) > 1 and sys.argv[1] == "--all":
        # Mode batch : tout dans un seul projet
        build_all_and_deploy_batch()

    elif "--preview" in sys.argv:
        idx = sys.argv.index("--preview")
        name = sys.argv[idx + 1] if idx + 1 < len(sys.argv) else "Test"
        cat = sys.argv[idx + 2] if idx + 2 < len(sys.argv) else "pizzeria"
        ville = sys.argv[idx + 3] if idx + 3 < len(sys.argv) else "Marseille"
        phone = sys.argv[idx + 4] if idx + 4 < len(sys.argv) else "04 91 00 00 00"
        html = generate_html(name, cat, ville, phone)
        preview = "/Users/hossamelaib/Documents/traffik/prospection/site_preview.html"
        with open(preview, "w") as f:
            f.write(html)
        os.system(f"open '{preview}'")
        print(f"  Aperçu → {preview}")

    elif len(sys.argv) >= 3:
        name = sys.argv[1]
        category = sys.argv[2]
        ville = sys.argv[3] if len(sys.argv) > 3 else "Marseille"
        phone = sys.argv[4] if len(sys.argv) > 4 else ""
        print(f"\n  Génération V3 pour {name}...", end=" ", flush=True)
        html = generate_html(name, category, ville, phone)
        ok, result = deploy_single_to_vercel(name, html)
        if ok:
            print(f"OK\n  → {result}\n")
        else:
            print(f"ERREUR\n  {result}\n")
    else:
        print("Usage :")
        print("  python3 site_builder.py --all         → batch (1 projet Vercel)")
        print("  python3 site_builder.py --preview \"Nom\" cat [ville] [tel]")
        print("  python3 site_builder.py \"Nom\" cat [ville] [tel]  → deploy single")


if __name__ == "__main__":
    main()
