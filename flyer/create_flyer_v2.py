#!/usr/bin/env python3
"""TRAFFIK — Ad Creative V2 — Results-driven, cinematic, premium
Format: 1080x1350 (4:5 Meta Feed) + 1080x1080 (Square)
"""

from PIL import Image, ImageDraw, ImageFont, ImageFilter, ImageChops
import math
import os

FONTS_DIR = "/Users/hossamelaib/.claude/skills/canvas-design/canvas-fonts"
OUT_DIR = "/Users/hossamelaib/Documents/traffik/flyer"

# Brand
BLUE = (0, 102, 255)
BLUE_LIGHT = (77, 148, 255)
PURPLE = (168, 85, 247)
DARK = (5, 5, 8)
DARK2 = (8, 8, 16)
WHITE = (255, 255, 255)
WHITE_90 = (230, 230, 235)
GRAY = (148, 163, 184)  # slate-400
GRAY_DIM = (80, 80, 100)
CYAN = (6, 182, 212)

def font(name, size):
    return ImageFont.truetype(os.path.join(FONTS_DIR, name), size)

def ts(d, text, f):
    b = d.textbbox((0, 0), text, font=f)
    return b[2] - b[0], b[3] - b[1]

def lerp(c1, c2, t):
    return tuple(int(c1[i] + (c2[i] - c1[i]) * max(0, min(1, t))) for i in range(3))

def center(d, text, f, y, color=WHITE, W=1080):
    tw, th = ts(d, text, f)
    d.text(((W - tw) // 2, y), text, fill=color, font=f)
    return th

def rounded_rect_fill(draw, xy, r, fill):
    x0, y0, x1, y1 = xy
    draw.rectangle([x0 + r, y0, x1 - r, y1], fill=fill)
    draw.rectangle([x0, y0 + r, x1, y1 - r], fill=fill)
    draw.pieslice([x0, y0, x0 + 2*r, y0 + 2*r], 180, 270, fill=fill)
    draw.pieslice([x1 - 2*r, y0, x1, y0 + 2*r], 270, 360, fill=fill)
    draw.pieslice([x0, y1 - 2*r, x0 + 2*r, y1], 90, 180, fill=fill)
    draw.pieslice([x1 - 2*r, y1 - 2*r, x1, y1], 0, 90, fill=fill)

def rounded_rect_outline(draw, xy, r, outline, width=2):
    x0, y0, x1, y1 = xy
    draw.arc([x0, y0, x0 + 2*r, y0 + 2*r], 180, 270, fill=outline, width=width)
    draw.arc([x1 - 2*r, y0, x1, y0 + 2*r], 270, 360, fill=outline, width=width)
    draw.arc([x0, y1 - 2*r, x0 + 2*r, y1], 90, 180, fill=outline, width=width)
    draw.arc([x1 - 2*r, y1 - 2*r, x1, y1], 0, 90, fill=outline, width=width)
    draw.line([x0 + r, y0, x1 - r, y0], fill=outline, width=width)
    draw.line([x0 + r, y1, x1 - r, y1], fill=outline, width=width)
    draw.line([x0, y0 + r, x0, y1 - r], fill=outline, width=width)
    draw.line([x1, y0 + r, x1, y1 - r], fill=outline, width=width)

def draw_gradient_rect(img, xy, r, c1, c2, direction="horizontal"):
    """Fill a rounded rect with gradient"""
    x0, y0, x1, y1 = xy
    for py in range(y0, y1):
        for px in range(x0, x1):
            # Check inside rounded rect
            inside = True
            if px < x0 + r and py < y0 + r:
                inside = (px - x0 - r)**2 + (py - y0 - r)**2 <= r**2
            elif px > x1 - r and py < y0 + r:
                inside = (px - x1 + r)**2 + (py - y0 - r)**2 <= r**2
            elif px < x0 + r and py > y1 - r:
                inside = (px - x0 - r)**2 + (py - y1 + r)**2 <= r**2
            elif px > x1 - r and py > y1 - r:
                inside = (px - x1 + r)**2 + (py - y1 + r)**2 <= r**2
            if inside:
                if direction == "horizontal":
                    t = (px - x0) / max(1, x1 - x0)
                else:
                    t = (py - y0) / max(1, y1 - y0)
                c = lerp(c1, c2, t)
                img.putpixel((px, py), c)


def create_ad(W, H, filename, variant="main"):
    """Create one ad creative"""
    img = Image.new("RGB", (W, H), DARK)
    draw = ImageDraw.Draw(img)

    # ── BACKGROUND GRADIENT ──
    for y in range(H):
        t = y / H
        # Dark at top, slightly warmer dark at bottom
        c = lerp(DARK, DARK2, t)
        draw.line([(0, y), (W, y)], fill=c)

    # ── SUBTLE NOISE/GRAIN TEXTURE ──
    import random
    random.seed(42)
    for _ in range(W * H // 40):
        x = random.randint(0, W - 1)
        y = random.randint(0, H - 1)
        v = random.randint(8, 16)
        draw.point((x, y), fill=(v, v, v + 3))

    # ── CINEMATIC GLOW — top center ──
    glow = Image.new("RGB", (W, H), (0, 0, 0))
    gd = ImageDraw.Draw(glow)

    # Main blue-purple glow orb
    cx_glow = W // 2
    cy_glow = int(H * 0.35)
    for r in range(300, 0, -2):
        t = 1 - r / 300
        a = t * 0.35
        c = lerp(BLUE, PURPLE, t * 0.6)
        c = lerp((0, 0, 0), c, a)
        gd.ellipse([cx_glow - r * 2, cy_glow - r, cx_glow + r * 2, cy_glow + r], fill=c)

    # Secondary subtle glow bottom for CTA area
    cy_glow2 = int(H * 0.82)
    for r in range(150, 0, -2):
        t = 1 - r / 150
        a = t * 0.2
        c = lerp(BLUE, PURPLE, 0.3)
        c = lerp((0, 0, 0), c, a)
        gd.ellipse([cx_glow - r * 3, cy_glow2 - r, cx_glow + r * 3, cy_glow2 + r], fill=c)

    glow = glow.filter(ImageFilter.GaussianBlur(80))
    img = ImageChops.add(img, glow)
    draw = ImageDraw.Draw(img)

    # ── FONTS ──
    scale = W / 1080  # Scale factor for different sizes
    compact = H <= 1100  # Compact mode for square/small formats
    hs = 0.75 if compact else 1.0  # Height scale for compact
    f_logo = font("Outfit-Bold.ttf", int(28 * scale))
    f_hero = font("Outfit-Bold.ttf", int(72 * scale * (0.82 if compact else 1)))
    f_hero_accent = font("Outfit-Bold.ttf", int(72 * scale * (0.82 if compact else 1)))
    f_sub = font("InstrumentSans-Regular.ttf", int(24 * scale * (0.85 if compact else 1)))
    f_stat_num = font("Outfit-Bold.ttf", int(48 * scale))
    f_stat_label = font("InstrumentSans-Regular.ttf", int(14 * scale))
    f_cta = font("Outfit-Bold.ttf", int(22 * scale))
    f_contact = font("InstrumentSans-Regular.ttf", int(18 * scale))
    f_contact_b = font("InstrumentSans-Bold.ttf", int(18 * scale))
    f_badge = font("GeistMono-Regular.ttf", int(12 * scale))
    f_url = font("InstrumentSans-Bold.ttf", int(20 * scale))

    margin = int(60 * scale)
    y = int(40 * scale) if compact else int(50 * scale)

    # ══════════════════════════════════════════
    # TOP BAR — Logo left, badge right
    # ══════════════════════════════════════════
    # Logo
    draw.text((margin, y), "TRAFFIK", fill=WHITE, font=f_logo)

    # Badge "Agence Web & Marketing"
    badge_text = "AGENCE WEB & MARKETING"
    bw, bh = ts(draw, badge_text, f_badge)
    badge_x = W - margin - bw - int(24 * scale)
    badge_y = y + int(4 * scale)
    rounded_rect_fill(draw, (badge_x, badge_y, badge_x + bw + int(24 * scale), badge_y + bh + int(12 * scale)), int(6 * scale), (20, 22, 35))
    rounded_rect_outline(draw, (badge_x, badge_y, badge_x + bw + int(24 * scale), badge_y + bh + int(12 * scale)), int(6 * scale), (40, 45, 65), 1)
    draw.text((badge_x + int(12 * scale), badge_y + int(6 * scale)), badge_text, fill=GRAY, font=f_badge)

    y += int(70 * scale) if compact else int(100 * scale)

    # ══════════════════════════════════════════
    # HERO HEADLINE — Results-first
    # ══════════════════════════════════════════
    if variant == "main":
        line1 = "Votre site web"
        line2 = "transformé en"
        line3 = "machine à clients."
    elif variant == "results":
        line1 = "+312% de trafic."
        line2 = "+85 clients/mois."
        line3 = "Résultats réels."
    else:
        line1 = "3x plus de clients"
        line2 = "en 90 jours."
        line3 = "Garanti."

    for i, line in enumerate([line1, line2]):
        lw, lh = ts(draw, line, f_hero)
        draw.text((margin, y), line, fill=WHITE, font=f_hero)
        y += lh + int(8 * scale)

    # Line 3 in gradient blue
    lw3, lh3 = ts(draw, line3, f_hero_accent)
    # Draw blue text
    draw.text((margin, y), line3, fill=BLUE, font=f_hero_accent)
    y += lh3 + int(15 * scale if compact else 30 * scale)

    # Subline
    if variant == "main":
        subline = "Sites performants. Publicités qui convertissent. ROI mesurable."
    elif variant == "results":
        subline = "Ce qu'on a fait pour nos clients, on le fait pour vous."
    else:
        subline = "Sites web + publicité + SEO. Tout-en-un."
    draw.text((margin, y), subline, fill=GRAY, font=f_sub)
    y += int(35 * scale) if compact else int(70 * scale)

    # ══════════════════════════════════════════
    # DEVICE MOCKUP — Stylized laptop
    # ══════════════════════════════════════════
    mock_w = int(W * (0.72 if compact else 0.82))
    mock_h = int(mock_w * (0.52 if compact else 0.58))
    mock_x = (W - mock_w) // 2
    mock_y = y

    # Laptop screen area
    screen_pad = int(8 * scale)
    screen_x = mock_x + screen_pad
    screen_y = mock_y + screen_pad
    screen_w = mock_w - 2 * screen_pad
    screen_h = mock_h - int(30 * scale)

    # Laptop bezel
    rounded_rect_fill(draw, (mock_x, mock_y, mock_x + mock_w, mock_y + mock_h), int(12 * scale), (22, 24, 35))
    rounded_rect_outline(draw, (mock_x, mock_y, mock_x + mock_w, mock_y + mock_h), int(12 * scale), (45, 50, 70), 2)

    # Screen background — dark with gradient
    rounded_rect_fill(draw, (screen_x, screen_y, screen_x + screen_w, screen_y + screen_h), int(8 * scale), (10, 10, 18))

    # Screen content — simulate a website
    sc_margin = int(20 * scale)
    sc_x = screen_x + sc_margin
    sc_y = screen_y + sc_margin

    # Browser dots (traffic lights)
    dot_r = int(4 * scale)
    dot_y = sc_y
    for j, dc in enumerate([(255, 95, 87), (255, 189, 46), (39, 201, 63)]):
        dx = sc_x + j * int(16 * scale)
        draw.ellipse([dx, dot_y, dx + dot_r * 2, dot_y + dot_r * 2], fill=dc)

    # URL bar
    url_bar_y = dot_y + int(18 * scale)
    url_bar_h = int(18 * scale)
    rounded_rect_fill(draw, (sc_x, url_bar_y, sc_x + screen_w - 2 * sc_margin, url_bar_y + url_bar_h), int(4 * scale), (25, 27, 40))
    f_url_tiny = font("GeistMono-Regular.ttf", int(9 * scale))
    draw.text((sc_x + int(8 * scale), url_bar_y + int(3 * scale)), "cremya.fr", fill=GRAY_DIM, font=f_url_tiny)

    # Fake website content — hero area with gradient
    site_y = url_bar_y + url_bar_h + int(12 * scale)
    site_h = screen_h - (site_y - screen_y) - sc_margin

    # Site hero gradient block
    hero_h = int(site_h * 0.55)
    for py in range(site_y, site_y + hero_h):
        for px in range(sc_x, sc_x + screen_w - 2 * sc_margin):
            t_x = (px - sc_x) / (screen_w - 2 * sc_margin)
            t_y = (py - site_y) / hero_h
            c = lerp(lerp((15, 20, 40), BLUE, t_x * 0.25), lerp((20, 15, 35), PURPLE, t_x * 0.15), t_y)
            draw.point((px, py), fill=c)

    # Fake headline on site
    f_site_h = font("Outfit-Bold.ttf", int(16 * scale))
    f_site_b = font("InstrumentSans-Regular.ttf", int(8 * scale))
    draw.text((sc_x + int(15 * scale), site_y + int(15 * scale)), "Crèmes artisanales", fill=WHITE, font=f_site_h)
    draw.text((sc_x + int(15 * scale), site_y + int(38 * scale)), "Découvrez nos saveurs", fill=(180, 180, 200), font=f_site_b)

    # Fake CTA button on site
    btn_sy = site_y + int(55 * scale)
    btn_sx = sc_x + int(15 * scale)
    btn_sw = int(80 * scale)
    btn_sh = int(16 * scale)
    rounded_rect_fill(draw, (btn_sx, btn_sy, btn_sx + btn_sw, btn_sy + btn_sh), int(4 * scale), BLUE)
    f_btn_s = font("Outfit-Bold.ttf", int(7 * scale))
    draw.text((btn_sx + int(10 * scale), btn_sy + int(3 * scale)), "COMMANDER", fill=WHITE, font=f_btn_s)

    # Fake product cards below hero
    card_y = site_y + hero_h + int(10 * scale)
    card_w = (screen_w - 2 * sc_margin - int(20 * scale)) // 3
    card_h = int(site_h * 0.35)
    for j in range(3):
        cx = sc_x + j * (card_w + int(10 * scale))
        # Card
        rounded_rect_fill(draw, (cx, card_y, cx + card_w, card_y + card_h), int(4 * scale), (18, 20, 32))
        # Fake image area
        img_h = int(card_h * 0.6)
        color_palette = [(40, 30, 55), (30, 40, 55), (45, 35, 50)]
        rounded_rect_fill(draw, (cx + 3, card_y + 3, cx + card_w - 3, card_y + img_h), int(3 * scale), color_palette[j])
        # Fake text lines
        line_y = card_y + img_h + int(6 * scale)
        draw.line([(cx + 6, line_y), (cx + card_w - 20, line_y)], fill=(50, 55, 70), width=int(2 * scale))
        draw.line([(cx + 6, line_y + int(8 * scale)), (cx + card_w * 0.6, line_y + int(8 * scale))], fill=(40, 45, 60), width=int(2 * scale))

    # Laptop base/hinge
    base_y = mock_y + mock_h
    base_h = int(8 * scale)
    draw.rectangle([mock_x + int(mock_w * 0.15), base_y, mock_x + int(mock_w * 0.85), base_y + base_h], fill=(30, 32, 45))
    # Wider base
    draw.rectangle([mock_x + int(mock_w * 0.05), base_y + base_h, mock_x + int(mock_w * 0.95), base_y + base_h + int(3 * scale)], fill=(25, 27, 40))

    y = mock_y + mock_h + base_h + int(3 * scale) + int(25 * scale if compact else 50 * scale)

    # ══════════════════════════════════════════
    # STATS ROW — 3 metrics
    # ══════════════════════════════════════════
    stats = [("50+", "projets livrés"), ("350%", "ROI moyen"), ("24h", "réponse")]
    stat_count = len(stats)
    stat_section_w = W - 2 * margin
    stat_item_w = stat_section_w // stat_count

    for i, (num, label) in enumerate(stats):
        sx = margin + i * stat_item_w
        scx = sx + stat_item_w // 2  # center of stat column

        # Number
        nw, nh = ts(draw, num, f_stat_num)
        draw.text((scx - nw // 2, y), num, fill=WHITE, font=f_stat_num)

        # Label
        lw, lh = ts(draw, label, f_stat_label)
        draw.text((scx - lw // 2, y + nh + int(6 * scale)), label, fill=GRAY, font=f_stat_label)

        # Vertical separator (not after last)
        if i < stat_count - 1:
            sep_x = sx + stat_item_w
            draw.line([(sep_x, y + int(10 * scale)), (sep_x, y + nh + int(15 * scale))], fill=(35, 38, 55), width=1)

    y += int(70 * scale) if compact else int(120 * scale)

    # ══════════════════════════════════════════
    # CTA BUTTON — full width gradient
    # ══════════════════════════════════════════
    cta_text = "RÉSERVER MON AUDIT GRATUIT"
    ctw, cth = ts(draw, cta_text, f_cta)
    btn_w = W - 2 * margin
    btn_h = cth + int(36 * scale)
    btn_x = margin
    btn_y = y
    btn_r = int(14 * scale)

    # Draw gradient button
    draw_gradient_rect(img, (btn_x, btn_y, btn_x + btn_w, btn_y + btn_h), btn_r, BLUE, PURPLE)
    draw = ImageDraw.Draw(img)  # Refresh after putpixel

    # CTA text centered
    draw.text(((W - ctw) // 2, btn_y + int(16 * scale)), cta_text, fill=WHITE, font=f_cta)

    # Arrow
    arrow_x = (W + ctw) // 2 + int(12 * scale)
    arrow_cy = btn_y + btn_h // 2
    draw.line([(arrow_x, arrow_cy), (arrow_x + int(14 * scale), arrow_cy)], fill=WHITE, width=2)
    draw.line([(arrow_x + int(8 * scale), arrow_cy - int(5 * scale)), (arrow_x + int(14 * scale), arrow_cy)], fill=WHITE, width=2)
    draw.line([(arrow_x + int(8 * scale), arrow_cy + int(5 * scale)), (arrow_x + int(14 * scale), arrow_cy)], fill=WHITE, width=2)

    y = btn_y + btn_h + int(30 * scale)

    # ══════════════════════════════════════════
    # BOTTOM — Contact info
    # ══════════════════════════════════════════
    # Center: URL
    uw, uh = ts(draw, "traffik-web.fr", f_url)
    draw.text(((W - uw) // 2, y), "traffik-web.fr", fill=BLUE, font=f_url)

    # Below: phone
    y += uh + int(12 * scale)
    phone = "06 35 50 53 74"
    pw, ph = ts(draw, phone, f_contact)
    draw.text(((W - pw) // 2, y), phone, fill=GRAY, font=f_contact)

    # ══════════════════════════════════════════
    # SAVE
    # ══════════════════════════════════════════
    img.save(os.path.join(OUT_DIR, filename), "PNG", dpi=(300, 300))
    print(f"✓ {filename} — {W}x{H}px")
    return img


# ══════════════════════════════════════════════════
# GENERATE ALL FORMATS
# ══════════════════════════════════════════════════

# 1. Meta Feed 4:5 — primary format
create_ad(1080, 1350, "TRAFFIK-AD-4x5.png", variant="main")

# 2. Square 1:1 — universal
create_ad(1080, 1080, "TRAFFIK-AD-1x1.png", variant="3x")

# 3. Story 9:16 — vertical
create_ad(1080, 1920, "TRAFFIK-AD-9x16.png", variant="results")

print(f"\n✓ All 3 formats saved to {OUT_DIR}/")
