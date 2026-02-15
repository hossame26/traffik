#!/bin/bash
# Script rapide pour lancer la prospection
# Usage: ./go.sh [ville] [categorie]

cd "$(dirname "$0")"

VILLE=${1:-"Marseille"}
CATEGORIE=${2:-"restaurant"}
NB=${3:-20}

echo ""
echo "╔══════════════════════════════════════════╗"
echo "║   TRAFFIK WEB - PROSPECTION DM          ║"
echo "╚══════════════════════════════════════════╝"
echo ""

# Etape 1: Trouver les prospects
echo "▸ Etape 1: Recherche de prospects..."
python3 finder.py "$VILLE" "$CATEGORIE" "$NB"

# Etape 2: Generer les messages
echo "▸ Etape 2: Generation des messages DM..."
python3 messages.py all

# Etape 3: Dashboard
echo "▸ Etape 3: Tableau de bord"
python3 tracker.py

echo ""
echo "📄 Messages prets dans: messages_output.txt"
echo "   Ouvre le fichier, copie-colle et envoie tes DMs !"
echo ""
