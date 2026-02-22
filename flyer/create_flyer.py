#!/usr/bin/env python3
"""TRAFFIK SMMA Agency Flyer — Digital Velocity Philosophy — V2 Refined"""

from PIL import Image, ImageDraw, ImageFont, ImageFilter, ImageChops
import math
import os

# ──────────────────────────────────────────────
# CONSTANTS
# ──────────────────────────────────────────────
W, H = 2480, 3508  # A4 at 300dpi
FONTS_DIR = "/Users/hossamelaib/.claude/skills/canvas-design/canvas-fonts"
OUT = "/Users/hossamelaib/Documents/traffik/flyer/TRAFFIK-FLYER.png"

# Brand colors
BLUE = (0, 102, 255)
BLUE_LIGHT = (77, 148, 255)
PURPLE = (168, 85, 247)
DARK = (5, 5, 5)
DARK2 = (10, 10, 26)
DARK_CARD = (14, 14, 24)
CARD_BORDER = (35, 40, 60)
WHITE = (255, 255, 255)
GRAY = (140, 140, 160)
GRAY_LIGHT = (180, 180, 195)
MUTED = (90, 90, 110)
GREEN_WA = (37, 211, 102)

MARGIN = 140  # Page margins

# ──────────────────────────────────────────────
# FONTS
# ──────────────────────────────────────────────
def font(name, size):
    return ImageFont.truetype(os.path.join(FONTS_DIR, name), size)

f_traffik = font("Outfit-Bold.ttf", 180)
f_headline = font("Outfit-Bold.ttf", 100)
f_subline = font("InstrumentSans-Regular.ttf", 46)
f_stat_num = font("Outfit-Bold.ttf", 110)
f_stat_label = font("InstrumentSans-Regular.ttf", 34)
f_service_title = font("Outfit-Bold.ttf", 46)
f_service_desc = font("InstrumentSans-Regular.ttf", 32)
f_service_price = font("InstrumentSans-Bold.ttf", 34)
f_cta = font("Outfit-Bold.ttf", 56)
f_cta_sub = font("InstrumentSans-Regular.ttf", 36)
f_contact = font("InstrumentSans-Regular.ttf", 40)
f_contact_bold = font("InstrumentSans-Bold.ttf", 40)
f_footer = font("GeistMono-Regular.ttf", 28)
f_tiny = font("GeistMono-Regular.ttf", 24)
f_section_label = font("GeistMono-Regular.ttf", 24)
f_platform = font("GeistMono-Regular.ttf", 28)
f_process_num = font("Outfit-Bold.ttf", 52)
f_process_label = font("InstrumentSans-Regular.ttf", 30)

# ──────────────────────────────────────────────
# HELPERS
# ──────────────────────────────────────────────
def ts(draw, text, fnt):
    bbox = draw.textbbox((0, 0), text, font=fnt)
    return bbox[2] - bbox[0], bbox[3] - bbox[1]

def center_text(draw, text, fnt, y, color=WHITE):
    tw, th = ts(draw, text, fnt)
    draw.text(((W - tw) // 2, y), text, fill=color, font=fnt)
    return th

def lerp(c1, c2, t):
    return tuple(int(c1[i] + (c2[i] - c1[i]) * t) for i in range(3))

def rounded_rect(draw, xy, r, fill=None, outline=None, width=1):
    x0, y0, x1, y1 = xy
    if fill:
        draw.rectangle([x0 + r, y0, x1 - r, y1], fill=fill)
        draw.rectangle([x0, y0 + r, x1, y1 - r], fill=fill)
        draw.pieslice([x0, y0, x0 + 2*r, y0 + 2*r], 180, 270, fill=fill)
        draw.pieslice([x1 - 2*r, y0, x1, y0 + 2*r], 270, 360, fill=fill)
        draw.pieslice([x0, y1 - 2*r, x0 + 2*r, y1], 90, 180, fill=fill)
        draw.pieslice([x1 - 2*r, y1 - 2*r, x1, y1], 0, 90, fill=fill)
    if outline:
        draw.arc([x0, y0, x0 + 2*r, y0 + 2*r], 180, 270, fill=outline, width=width)
        draw.arc([x1 - 2*r, y0, x1, y0 + 2*r], 270, 360, fill=outline, width=width)
        draw.arc([x0, y1 - 2*r, x0 + 2*r, y1], 90, 180, fill=outline, width=width)
        draw.arc([x1 - 2*r, y1 - 2*r, x1, y1], 0, 90, fill=outline, width=width)
        draw.line([x0 + r, y0, x1 - r, y0], fill=outline, width=width)
        draw.line([x0 + r, y1, x1 - r, y1], fill=outline, width=width)
        draw.line([x0, y0 + r, x0, y1 - r], fill=outline, width=width)
        draw.line([x1, y0 + r, x1, y1 - r], fill=outline, width=width)

def gradient_h_line(draw, y, x0, x1, c1, c2, fade=0.1):
    """Horizontal gradient line with edge fade"""
    span = x1 - x0
    for x in range(x0, x1):
        t = (x - x0) / span
        if t < fade:
            a = t / fade
        elif t > 1 - fade:
            a = (1 - t) / fade
        else:
            a = 1.0
        c = lerp(c1, c2, t)
        c = lerp(DARK2, c, a * 0.7)
        draw.point((x, y), fill=c)
        draw.point((x, y + 1), fill=c)

def draw_icon_monitor(draw, cx, cy, color, size=28):
    s = size
    # Screen
    draw.rectangle([cx - s, cy - s + 4, cx + s, cy + 8], outline=color, width=3)
    # Small line inside (code symbol)
    draw.line([(cx - 10, cy - 8), (cx - 3, cy - 2)], fill=color, width=2)
    draw.line([(cx - 10, cy + 2), (cx - 3, cy - 2)], fill=color, width=2)  # <
    draw.line([(cx + 3, cy - 8), (cx + 10, cy - 2)], fill=color, width=2)
    draw.line([(cx + 3, cy + 2), (cx + 10, cy - 2)], fill=color, width=2)  # >
    # Stand
    draw.line([(cx, cy + 8), (cx, cy + 18)], fill=color, width=3)
    draw.line([(cx - 14, cy + 18), (cx + 14, cy + 18)], fill=color, width=3)

def draw_icon_target(draw, cx, cy, color, size=28):
    s = size
    draw.ellipse([cx - s, cy - s, cx + s, cy + s], outline=color, width=2)
    draw.ellipse([cx - s * 0.6, cy - s * 0.6, cx + s * 0.6, cy + s * 0.6], outline=color, width=2)
    draw.ellipse([cx - 5, cy - 5, cx + 5, cy + 5], fill=color)

def draw_icon_chart(draw, cx, cy, color, size=28):
    s = size
    pts = [(cx - s, cy + 10), (cx - s * 0.4, cy - 5), (cx + s * 0.2, cy + 5), (cx + s, cy - s + 5)]
    for i in range(len(pts) - 1):
        draw.line([pts[i], pts[i + 1]], fill=color, width=3)
    # Arrow
    ex, ey = pts[-1]
    draw.line([(ex - 10, ey), (ex, ey)], fill=color, width=3)
    draw.line([(ex, ey + 10), (ex, ey)], fill=color, width=3)


# ══════════════════════════════════════════════
# CREATE CANVAS
# ══════════════════════════════════════════════
img = Image.new("RGB", (W, H), DARK)
draw = ImageDraw.Draw(img)

# ──────────────────────────────────────────────
# BG: Vertical gradient
# ──────────────────────────────────────────────
for y in range(H):
    t = y / H
    c = lerp(DARK, DARK2, t)
    draw.line([(0, y), (W, y)], fill=c)

# ──────────────────────────────────────────────
# BG: Dot grid
# ──────────────────────────────────────────────
dot_sp = 56
dot_c = (20, 20, 32)
for gx in range(0, W, dot_sp):
    for gy in range(0, H, dot_sp):
        draw.ellipse([gx, gy, gx + 2, gy + 2], fill=dot_c)

# ──────────────────────────────────────────────
# BG: Geometric accent lines (corners)
# ──────────────────────────────────────────────
for i in range(4):
    o = i * 20
    c = lerp(DARK2, BLUE, 0.12)
    draw.line([(0, 250 + o), (450 - o, 0)], fill=c, width=1)
    c2 = lerp(DARK2, PURPLE, 0.10)
    draw.line([(W, 180 + o), (W - 400 + o, 0)], fill=c2, width=1)

# ──────────────────────────────────────────────
# BG: Blue glow behind wordmark
# ──────────────────────────────────────────────
glow = Image.new("RGB", (W, H), (0, 0, 0))
gd = ImageDraw.Draw(glow)
for r in range(250, 0, -2):
    a = int(35 * (1 - r / 250))
    c = lerp((0, 0, 0), BLUE, a / 70)
    gd.ellipse([W // 2 - r * 3, 430 - r, W // 2 + r * 3, 430 + r], fill=c)
glow = glow.filter(ImageFilter.GaussianBlur(70))
img = ImageChops.add(img, glow)
draw = ImageDraw.Draw(img)

# ──────────────────────────────────────────────
# TOP GRADIENT LINE
# ──────────────────────────────────────────────
gradient_h_line(draw, 180, MARGIN, W - MARGIN, BLUE, PURPLE)

# ══════════════════════════════════════════════
# HERO SECTION
# ══════════════════════════════════════════════
y = 340

# TRAFFIK wordmark
th = center_text(draw, "TRAFFIK", f_traffik, y, WHITE)

# Gradient underline accent
uy = y + th + 25
uw = 220
ux = (W - uw) // 2
for x in range(ux, ux + uw):
    t = (x - ux) / uw
    c = lerp(BLUE, PURPLE, t)
    draw.line([(x, uy), (x, uy + 5)], fill=c)

y = uy + 80

# Headline
th = center_text(draw, "Sites Web Qui Vendent.", f_headline, y, WHITE)
y += th + 50

# Subline
center_text(draw, "Du design à la conversion, en 2 semaines.", f_subline, y, GRAY)
y += 130

# Separator
gradient_h_line(draw, y, MARGIN + 200, W - MARGIN - 200, BLUE, PURPLE)
y += 100

# ══════════════════════════════════════════════
# STATS SECTION
# ══════════════════════════════════════════════
stats = [("50+", "Projets livrés"), ("350%", "ROI moyen"), ("24h", "Réponse garantie")]

stat_w = 600
stat_h = 240
stat_gap = 50
total_sw = 3 * stat_w + 2 * stat_gap
sx0 = (W - total_sw) // 2

for i, (num, label) in enumerate(stats):
    cx = sx0 + i * (stat_w + stat_gap)
    cy = y

    # Card fill
    rounded_rect(draw, (cx, cy, cx + stat_w, cy + stat_h), 24, fill=DARK_CARD)

    # Top gradient accent line on card
    accent_w = stat_w - 80
    accent_x = cx + 40
    for ax in range(accent_x, accent_x + accent_w):
        t = (ax - accent_x) / accent_w
        c = lerp(BLUE, PURPLE, t)
        a = 1.0
        if t < 0.1: a = t / 0.1
        elif t > 0.9: a = (1 - t) / 0.1
        fc = lerp(DARK_CARD, c, a)
        draw.point((ax, cy + 1), fill=fc)
        draw.point((ax, cy + 2), fill=fc)

    # Border
    rounded_rect(draw, (cx, cy, cx + stat_w, cy + stat_h), 24, outline=CARD_BORDER, width=2)

    # Number — centered
    nw, nh = ts(draw, num, f_stat_num)
    draw.text((cx + (stat_w - nw) // 2, cy + 30), num, fill=WHITE, font=f_stat_num)

    # Label — centered
    lw, lh = ts(draw, label, f_stat_label)
    draw.text((cx + (stat_w - lw) // 2, cy + 30 + nh + 20), label, fill=GRAY, font=f_stat_label)

y += stat_h + 110

# ══════════════════════════════════════════════
# SERVICES SECTION
# ══════════════════════════════════════════════
# Section label
slabel = "NOS SERVICES"
center_text(draw, slabel, f_section_label, y, MUTED)
y += 65

services = [
    ("CRÉATION WEB", "monitor", "Shopify · WordPress · Sur Mesure", "À partir de 200€"),
    ("PUBLICITÉ", "target", "Meta · Google · TikTok · LinkedIn", "Gestion complète"),
    ("SEO & GROWTH", "chart", "Audit · Référencement · Analytics", "Résultats mesurables"),
]

svc_w = 640
svc_h = 460
svc_gap = 40
total_svc = 3 * svc_w + 2 * svc_gap
svc_x0 = (W - total_svc) // 2

icon_funcs = {"monitor": draw_icon_monitor, "target": draw_icon_target, "chart": draw_icon_chart}

for i, (title, icon, desc, price) in enumerate(services):
    cx = svc_x0 + i * (svc_w + svc_gap)
    cy = y

    # Card
    rounded_rect(draw, (cx, cy, cx + svc_w, cy + svc_h), 28, fill=DARK_CARD)
    rounded_rect(draw, (cx, cy, cx + svc_w, cy + svc_h), 28, outline=CARD_BORDER, width=2)

    # Icon circle
    icx = cx + svc_w // 2
    icy = cy + 85
    ir = 46
    icon_bg = lerp(DARK_CARD, BLUE, 0.12)
    draw.ellipse([icx - ir, icy - ir, icx + ir, icy + ir], fill=icon_bg, outline=lerp(BLUE, DARK_CARD, 0.3), width=2)
    icon_funcs[icon](draw, icx, icy, BLUE)

    # Title
    tw_t, _ = ts(draw, title, f_service_title)
    draw.text((cx + (svc_w - tw_t) // 2, cy + 155), title, fill=WHITE, font=f_service_title)

    # Description
    dw, _ = ts(draw, desc, f_service_desc)
    draw.text((cx + (svc_w - dw) // 2, cy + 235), desc, fill=GRAY_LIGHT, font=f_service_desc)

    # Separator inside card
    sep_y = cy + 315
    for sx in range(cx + 60, cx + svc_w - 60):
        t = (sx - cx - 60) / (svc_w - 120)
        a = 1.0
        if t < 0.1: a = t / 0.1
        elif t > 0.9: a = (1 - t) / 0.1
        draw.point((sx, sep_y), fill=lerp(DARK_CARD, CARD_BORDER, a * 0.7))

    # Price
    pw, _ = ts(draw, price, f_service_price)
    draw.text((cx + (svc_w - pw) // 2, cy + 365), price, fill=BLUE, font=f_service_price)

y += svc_h + 100

# ══════════════════════════════════════════════
# PLATFORMS ROW
# ══════════════════════════════════════════════
center_text(draw, "PLATEFORMES PUBLICITAIRES", f_tiny, y, MUTED)
y += 45

platforms = ["META ADS", "GOOGLE ADS", "TIKTOK", "LINKEDIN", "SNAPCHAT", "PINTEREST"]
gap = 35
total_pw = sum(ts(draw, p, f_platform)[0] for p in platforms) + (len(platforms) - 1) * gap
px = (W - total_pw) // 2

for j, p in enumerate(platforms):
    pw_s, ph_s = ts(draw, p, f_platform)
    draw.text((px, y), p, fill=GRAY, font=f_platform)
    px += pw_s + gap
    if j < len(platforms) - 1:
        # Blue dot separator
        dy = y + ph_s // 2
        draw.ellipse([px - gap // 2 - 3, dy - 3, px - gap // 2 + 3, dy + 3], fill=BLUE)

y += 100

# ══════════════════════════════════════════════
# PORTFOLIO — 3 projects
# ══════════════════════════════════════════════
gradient_h_line(draw, y, MARGIN + 200, W - MARGIN - 200, BLUE, PURPLE)
y += 65

center_text(draw, "ILS NOUS FONT CONFIANCE", f_section_label, y, MUTED)
y += 55

f_portfolio = font("InstrumentSans-Bold.ttf", 34)
f_portfolio_cat = font("GeistMono-Regular.ttf", 24)
projects = [
    ("CREMYA", "E-commerce"),
    ("SHONEN SPORTS", "Branding"),
    ("FOCUS BUSINESS", "SaaS"),
]
proj_gap = 80
total_proj_w = sum(ts(draw, p[0], f_portfolio)[0] for p in projects) + (len(projects) - 1) * proj_gap
ppx = (W - total_proj_w) // 2

for j, (pname, pcat) in enumerate(projects):
    pnw, pnh = ts(draw, pname, f_portfolio)
    draw.text((ppx, y), pname, fill=WHITE, font=f_portfolio)
    # Category below
    pcw, pch = ts(draw, pcat, f_portfolio_cat)
    draw.text((ppx + (pnw - pcw) // 2, y + pnh + 8), pcat, fill=MUTED, font=f_portfolio_cat)
    ppx += pnw + proj_gap
    if j < len(projects) - 1:
        dy_p = y + pnh // 2
        draw.ellipse([ppx - proj_gap // 2 - 3, dy_p - 3, ppx - proj_gap // 2 + 3, dy_p + 3], fill=PURPLE)

y += 120

# ══════════════════════════════════════════════
# PROCESS SECTION — 5 steps
# ══════════════════════════════════════════════
gradient_h_line(draw, y, MARGIN + 200, W - MARGIN - 200, BLUE, PURPLE)
y += 65

center_text(draw, "NOTRE PROCESSUS", f_section_label, y, MUTED)
y += 60

steps = ["Échange", "Design", "Création", "Tests", "Lancement"]
step_w = 320
step_gap = 50
total_steps_w = 5 * step_w + 4 * step_gap
step_x0 = (W - total_steps_w) // 2

for i, step in enumerate(steps):
    cx = step_x0 + i * (step_w + step_gap)
    num = f"0{i + 1}"

    # Number
    nw, nh = ts(draw, num, f_process_num)
    draw.text((cx + (step_w - nw) // 2, y), num, fill=BLUE, font=f_process_num)

    # Label
    lw, lh = ts(draw, step, f_process_label)
    draw.text((cx + (step_w - lw) // 2, y + nh + 12), step, fill=GRAY_LIGHT, font=f_process_label)

    # Connecting line to next step
    if i < len(steps) - 1:
        line_x1 = cx + step_w
        line_x2 = cx + step_w + step_gap
        line_y = y + nh // 2 + 5
        for lx in range(line_x1, line_x2):
            t = (lx - line_x1) / step_gap
            c = lerp(BLUE, PURPLE, t * 0.3)
            a = 0.4
            if t < 0.2: a = t / 0.2 * 0.4
            elif t > 0.8: a = (1 - t) / 0.2 * 0.4
            draw.point((lx, line_y), fill=lerp(DARK2, c, a))
            draw.point((lx, line_y + 1), fill=lerp(DARK2, c, a))

y += 160

# ══════════════════════════════════════════════
# CTA SECTION
# ══════════════════════════════════════════════
gradient_h_line(draw, y, MARGIN + 100, W - MARGIN - 100, BLUE, PURPLE)
y += 90

# CTA glow
glow2 = Image.new("RGB", (W, H), (0, 0, 0))
g2d = ImageDraw.Draw(glow2)
for r in range(150, 0, -2):
    a = int(20 * (1 - r / 150))
    c = lerp((0, 0, 0), BLUE, a / 45)
    g2d.ellipse([W // 2 - r * 4, y + 40 - r, W // 2 + r * 4, y + 40 + r], fill=c)
glow2 = glow2.filter(ImageFilter.GaussianBlur(50))
img = ImageChops.add(img, glow2)
draw = ImageDraw.Draw(img)

# CTA Button
cta = "DÉMARRER MON PROJET"
ctw, cth = ts(draw, cta, f_cta)
btn_w = ctw + 180
btn_h = cth + 80
btn_x = (W - btn_w) // 2
btn_y = y

# Draw rounded gradient button
r = 22
for by in range(btn_y, btn_y + btn_h):
    for bx in range(btn_x, btn_x + btn_w):
        # Rounded corners check
        inside = True
        corners = [
            (btn_x + r, btn_y + r),
            (btn_x + btn_w - r, btn_y + r),
            (btn_x + r, btn_y + btn_h - r),
            (btn_x + btn_w - r, btn_y + btn_h - r),
        ]
        if bx < btn_x + r and by < btn_y + r:
            inside = (bx - corners[0][0])**2 + (by - corners[0][1])**2 <= r**2
        elif bx > btn_x + btn_w - r and by < btn_y + r:
            inside = (bx - corners[1][0])**2 + (by - corners[1][1])**2 <= r**2
        elif bx < btn_x + r and by > btn_y + btn_h - r:
            inside = (bx - corners[2][0])**2 + (by - corners[2][1])**2 <= r**2
        elif bx > btn_x + btn_w - r and by > btn_y + btn_h - r:
            inside = (bx - corners[3][0])**2 + (by - corners[3][1])**2 <= r**2

        if inside:
            t = (bx - btn_x) / btn_w
            c = lerp(BLUE, BLUE_LIGHT, t)
            draw.point((bx, by), fill=c)

# CTA text
draw.text(((W - ctw) // 2, btn_y + 38), cta, fill=WHITE, font=f_cta)

# Arrow after text
arrow_x = (W + ctw) // 2 + 20
arrow_y = btn_y + 38 + cth // 2
draw.line([(arrow_x, arrow_y), (arrow_x + 20, arrow_y)], fill=WHITE, width=3)
draw.line([(arrow_x + 12, arrow_y - 8), (arrow_x + 20, arrow_y)], fill=WHITE, width=3)
draw.line([(arrow_x + 12, arrow_y + 8), (arrow_x + 20, arrow_y)], fill=WHITE, width=3)

y = btn_y + btn_h + 55

# Sub CTA
center_text(draw, "Devis gratuit  ·  Sans engagement", f_cta_sub, y, GRAY)
y += 100

# ══════════════════════════════════════════════
# CONTACT SECTION
# ══════════════════════════════════════════════

# WhatsApp line
wa_label = "WhatsApp"
wa_num = "06 35 50 53 74"
wlw, wlh = ts(draw, wa_label, f_contact_bold)
wnw, _ = ts(draw, wa_num, f_contact)
total_wa = 30 + wlw + 25 + wnw  # dot + label + gap + number
wa_x = (W - total_wa) // 2

# Green dot
draw.ellipse([wa_x, y + 10, wa_x + 22, y + 32], fill=GREEN_WA)
draw.text((wa_x + 30, y), wa_label, fill=GREEN_WA, font=f_contact_bold)
draw.text((wa_x + 30 + wlw + 25, y), wa_num, fill=WHITE, font=f_contact)
y += wlh + 40

# Website line
web = "traffik-web.fr"
ww, wh = ts(draw, web, f_contact_bold)
total_web = 30 + ww
web_x = (W - total_web) // 2

# Globe
gcx = web_x + 12
gcy = y + wh // 2 + 2
draw.ellipse([gcx - 13, gcy - 13, gcx + 13, gcy + 13], outline=BLUE, width=2)
draw.line([(gcx - 13, gcy), (gcx + 13, gcy)], fill=BLUE, width=1)
draw.arc([gcx - 6, gcy - 13, gcx + 6, gcy + 13], 0, 360, fill=BLUE, width=1)

draw.text((web_x + 30, y), web, fill=BLUE, font=f_contact_bold)
y += wh + 100

# ══════════════════════════════════════════════
# FOOTER
# ══════════════════════════════════════════════
gradient_h_line(draw, y, MARGIN + 300, W - MARGIN - 300, BLUE, PURPLE)
y += 50

center_text(draw, "Performance.  Conversion.  Résultats.", f_footer, y, MUTED)

# ──────────────────────────────────────────────
# EDGE DARKENING (subtle vignette on sides)
# ──────────────────────────────────────────────
edge = 30
for ey in range(0, H, 2):
    for ex in range(edge):
        t = ex / edge
        darken = int((1 - t) * 12)
        px_l = img.getpixel((ex, ey))
        px_r = img.getpixel((W - 1 - ex, ey))
        draw.point((ex, ey), fill=tuple(max(0, c - darken) for c in px_l[:3]))
        draw.point((W - 1 - ex, ey), fill=tuple(max(0, c - darken) for c in px_r[:3]))

# ──────────────────────────────────────────────
# SAVE
# ──────────────────────────────────────────────
img.save(OUT, "PNG", dpi=(300, 300))
print(f"✓ Flyer saved: {OUT}")
print(f"  Size: {W}x{H}px @ 300dpi")
