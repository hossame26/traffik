#!/usr/bin/env python3
"""
TRAFFIK Flyer V11 — Dark premium, visually striking
A4 (2480x3508px @ 300dpi)
"""

from PIL import Image, ImageDraw, ImageFont, ImageFilter
import math, os

W, H = 2480, 3508
FONTS = os.path.expanduser("~/.claude/skills/canvas-design/canvas-fonts")
OUT = os.path.join(os.path.dirname(__file__), "TRAFFIK-FLYER.png")

# Colors
BG_TOP = (8, 10, 28)
BG_BOT = (16, 8, 32)
NAVY = (12, 14, 35)
BLUE = (0, 102, 255)
PURPLE = (148, 80, 240)
GOLD = (255, 210, 60)
WHITE = (255, 255, 255)
LGRAY = (140, 145, 170)
DGRAY = (60, 65, 90)
GREEN = (16, 200, 100)
CARD_BG = (22, 26, 55)
CARD_BORDER = (45, 50, 85)
SCREEN_TOP = (15, 25, 65)
SCREEN_BOT = (8, 8, 18)

def ff(n, s): return ImageFont.truetype(os.path.join(FONTS, n), s)

F = {
    'logo': ff("BricolageGrotesque-Bold.ttf", 48),
    'logo_s': ff("Outfit-Regular.ttf", 30),
    'pre': ff("Outfit-Bold.ttf", 48),
    'mega': ff("BricolageGrotesque-Bold.ttf", 240),
    'mega_b': ff("BricolageGrotesque-Bold.ttf", 250),
    'bullet': ff("Outfit-Bold.ttf", 40),
    'bullet_s': ff("Outfit-Regular.ttf", 32),
    'cta': ff("Outfit-Bold.ttf", 50),
    'cta_s': ff("Outfit-Regular.ttf", 30),
    'stat_n': ff("BricolageGrotesque-Bold.ttf", 80),
    'stat_l': ff("Outfit-Regular.ttf", 32),
    'sect': ff("BricolageGrotesque-Bold.ttf", 48),
    'check': ff("Outfit-Regular.ttf", 38),
    'phone': ff("BricolageGrotesque-Bold.ttf", 96),
    'web': ff("Outfit-Bold.ttf", 42),
    'email': ff("Outfit-Regular.ttf", 34),
    'bar': ff("Outfit-Bold.ttf", 36),
    'micro': ff("GeistMono-Regular.ttf", 22),
    # Phone screen
    'p_nav': ff("Outfit-Bold.ttf", 24),
    'p_hero': ff("BricolageGrotesque-Bold.ttf", 58),
    'p_sub': ff("Outfit-Regular.ttf", 20),
    'p_tag': ff("Outfit-Bold.ttf", 18),
    'p_btn': ff("Outfit-Bold.ttf", 20),
    'p_stat_n': ff("BricolageGrotesque-Bold.ttf", 32),
    'p_stat_l': ff("Outfit-Regular.ttf", 15),
    'p_sect': ff("Outfit-Bold.ttf", 24),
    'p_card': ff("Outfit-Bold.ttf", 20),
    'p_card_s': ff("Outfit-Regular.ttf", 14),
    'p_small': ff("GeistMono-Regular.ttf", 13),
    'p_price': ff("BricolageGrotesque-Bold.ttf", 22),
    # Float cards
    'fc_t': ff("Outfit-Bold.ttf", 30),
    'fc_n': ff("BricolageGrotesque-Bold.ttf", 52),
    'fc_s': ff("Outfit-Regular.ttf", 22),
    'fc_star': ff("Outfit-Bold.ttf", 28),
}


def lerp(a, b, t):
    t = max(0, min(1, t))
    return tuple(int(x + (y - x) * t) for x, y in zip(a, b))


def tw(d, t, f):
    bb = d.textbbox((0, 0), t, font=f)
    return bb[2] - bb[0], bb[3] - bb[1]


def draw_glow(img, cx, cy, radius, color, alpha=25, steps=40):
    """Draw a smooth radial glow."""
    size = radius * 2
    glow = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    gd = ImageDraw.Draw(glow)
    for i in range(steps, 0, -1):
        r = int(radius * i / steps)
        t = 1 - (i / steps)
        a = int(alpha * (1 - t) ** 1.5)
        gd.ellipse([radius - r, radius - r, radius + r, radius + r], fill=(*color, a))
    glow = glow.filter(ImageFilter.GaussianBlur(radius=radius // 4))
    img.paste(glow, (cx - radius, cy - radius), glow)


def draw_shadow(img, x, y, w, h, r, alpha=40, blur=20, offset=12):
    pad = 70
    s = Image.new('RGBA', (w + pad * 2, h + pad * 2), (0, 0, 0, 0))
    sd = ImageDraw.Draw(s)
    sd.rounded_rectangle(
        [pad, pad + offset, w + pad, h + pad + offset],
        radius=r, fill=(0, 0, 0, alpha)
    )
    s = s.filter(ImageFilter.GaussianBlur(radius=blur))
    img.paste(s, (x - pad, y - pad), s)


def draw_glass_card(img, x, y, w, h, r=24, bg_alpha=180, border_alpha=60):
    """Draw a glassmorphism card (dark glass with border)."""
    draw_shadow(img, x, y, w, h, r, alpha=45, blur=20, offset=10)
    c = Image.new('RGBA', (w, h), (0, 0, 0, 0))
    cd = ImageDraw.Draw(c)
    cd.rounded_rectangle([0, 0, w, h], radius=r, fill=(*CARD_BG, bg_alpha))
    cd.rounded_rectangle([0, 0, w, h], radius=r, outline=(*CARD_BORDER, border_alpha), width=1)
    # Top edge highlight
    cd.rounded_rectangle([1, 1, w - 1, 3], radius=1, fill=(255, 255, 255, 12))
    img.paste(c, (x, y), c)


def draw_white_card(img, x, y, w, h, r=24):
    """Draw a white floating card."""
    draw_shadow(img, x, y, w, h, r, alpha=50, blur=22, offset=12)
    c = Image.new('RGBA', (w, h), (0, 0, 0, 0))
    cd = ImageDraw.Draw(c)
    cd.rounded_rectangle([0, 0, w, h], radius=r, fill=(*WHITE, 245))
    img.paste(c, (x, y), c)


def draw_gradient_pill(img, x, y, w, h, c1, c2):
    pill = Image.new('RGBA', (w, h), (0, 0, 0, 0))
    pd = ImageDraw.Draw(pill)
    for px in range(w):
        c = lerp(c1, c2, px / w)
        pd.line([(px, 0), (px, h)], fill=(*c, 255))
    mask = Image.new('L', (w, h), 0)
    ImageDraw.Draw(mask).rounded_rectangle([0, 0, w, h], radius=h // 2, fill=255)
    pill.putalpha(mask)
    img.paste(pill, (x, y), pill)


def draw_phone(img, px, py, pw, ph):
    """Large phone with bright, visually striking Traffik mockup."""
    d = ImageDraw.Draw(img)

    # Phone glow behind
    draw_glow(img, px + pw // 2, py + ph // 3, 500, BLUE, alpha=18)
    draw_glow(img, px + pw // 2, py + ph * 2 // 3, 450, PURPLE, alpha=14)

    # Phone shadow
    draw_shadow(img, px, py, pw, ph, 55, alpha=70, blur=35, offset=25)
    d = ImageDraw.Draw(img)

    # Phone body
    d.rounded_rectangle([px, py, px + pw, py + ph], radius=55, fill=(20, 20, 35))
    # Bezel
    d.rounded_rectangle([px + 5, py + 5, px + pw - 5, py + ph - 5],
                        radius=51, fill=(35, 38, 55))
    # Screen
    m = 12
    sx, sy = px + m, py + m + 6
    sw, sh = pw - m * 2, ph - m * 2 - 6

    # Screen background gradient (dark blue gradient - looks like a real site)
    screen = Image.new('RGBA', (sw, sh), (0, 0, 0, 0))
    sd = ImageDraw.Draw(screen)

    # Background gradient for screen
    for yy in range(sh):
        t = yy / sh
        if t < 0.35:
            # Hero area: gradient blue->dark
            tt = t / 0.35
            c = lerp((10, 18, 50), (6, 8, 18), tt)
        else:
            c = lerp((6, 8, 18), (4, 4, 12), (t - 0.35) / 0.65)
        sd.line([(0, yy), (sw, yy)], fill=c)

    # Apply rounded mask to screen
    mask = Image.new('L', (sw, sh), 0)
    ImageDraw.Draw(mask).rounded_rectangle([0, 0, sw, sh], radius=38, fill=255)
    screen.putalpha(mask)
    img.paste(screen, (sx, sy), screen)

    d = ImageDraw.Draw(img)

    # Dynamic island
    di_w, di_h = 130, 34
    d.rounded_rectangle(
        [px + (pw - di_w) // 2, py + 9, px + (pw + di_w) // 2, py + 9 + di_h],
        radius=17, fill=(20, 20, 35)
    )

    # ── SCREEN CONTENT ──
    cx, cy = sx + 22, sy + 56

    # Nav
    d.text((cx, cy), "TRAFFIK", font=F['p_nav'], fill=WHITE)
    for i in range(3):
        d.rounded_rectangle(
            [sx + sw - 44, cy + 5 + i * 10, sx + sw - 22, cy + 9 + i * 10],
            radius=2, fill=(*WHITE, 130)
        )
    cy += 54

    # Green dot badge
    badge_w = 240
    d.rounded_rectangle([cx, cy, cx + badge_w, cy + 30], radius=15, fill=(255, 255, 255, 12))
    d.ellipse([cx + 10, cy + 9, cx + 22, cy + 21], fill=GREEN)
    d.text((cx + 28, cy + 6), "Agence Web & Marketing", font=F['p_small'], fill=(*WHITE, 160))
    cy += 48

    # Hero text
    d.text((cx, cy), "Traffik", font=F['p_hero'], fill=WHITE)
    cy += 75

    # Subheading
    for line in ["Sites web qui generent du", "chiffre d'affaires.", "Pas juste des pixels."]:
        d.text((cx, cy), line, font=F['p_sub'], fill=(*WHITE, 140))
        cy += 26
    cy += 14

    # Tagline in blue
    d.text((cx, cy), "Performance. Conversion. Resultats.", font=F['p_tag'], fill=(*BLUE, 220))
    cy += 38

    # CTA buttons
    btn1_w = 230
    # Gradient button
    for bx in range(btn1_w):
        bc = lerp(BLUE, PURPLE, bx / btn1_w)
        d.line([(cx + bx, cy), (cx + bx, cy + 42)], fill=bc)
    # Round the button with mask approach
    btn_mask = Image.new('L', (btn1_w, 42), 0)
    ImageDraw.Draw(btn_mask).rounded_rectangle([0, 0, btn1_w, 42], radius=21, fill=255)
    # Get current button pixels
    btn_region = img.crop((cx, cy, cx + btn1_w, cy + 42))
    btn_bg = img.crop((cx, cy, cx + btn1_w, cy + 42)).convert('RGBA')
    # Create gradient button
    btn_img = Image.new('RGBA', (btn1_w, 42), (0, 0, 0, 0))
    btn_d = ImageDraw.Draw(btn_img)
    for bx in range(btn1_w):
        bc = lerp(BLUE, PURPLE, bx / btn1_w)
        btn_d.line([(bx, 0), (bx, 42)], fill=(*bc, 255))
    btn_img.putalpha(btn_mask)
    img.paste(btn_img, (cx, cy), btn_img)
    d = ImageDraw.Draw(img)
    d.text((cx + 16, cy + 9), "DEMARRER MON PROJET", font=F['p_btn'], fill=WHITE)

    btn2_x = cx + btn1_w + 14
    btn2_w = 170
    d.rounded_rectangle([btn2_x, cy, btn2_x + btn2_w, cy + 42], radius=21,
                        outline=(*WHITE, 60), width=1)
    d.text((btn2_x + 14, cy + 9), "VOIR NOS OFFRES", font=F['p_btn'], fill=(*WHITE, 160))
    cy += 65

    # Stats
    stats = [("50+", "Projets"), ("350%", "ROI moyen"), ("24h", "Reponse")]
    col_w = (sw - 44) // 3
    for i, (n, l) in enumerate(stats):
        stx = cx + i * col_w
        d.text((stx, cy), n, font=F['p_stat_n'], fill=WHITE)
        d.text((stx, cy + 36), l, font=F['p_stat_l'], fill=(*WHITE, 80))
        if i < 2:
            sep = cx + (i + 1) * col_w - 6
            d.line([(sep, cy + 6), (sep, cy + 44)], fill=(*WHITE, 20), width=1)
    cy += 70

    # Gradient separator
    for lx in range(sw - 44):
        t = lx / (sw - 44)
        c = lerp(BLUE, PURPLE, t)
        d.point((cx + lx, cy), fill=(*c, 30))
    cy += 20

    # Solutions section
    d.text((cx, cy), "Nos solutions", font=F['p_sect'], fill=WHITE)
    cy += 44

    cards = [
        ("Shopify", GREEN, "E-commerce", "des 250€"),
        ("WordPress", BLUE, "Site vitrine", "des 350€"),
        ("Sur Mesure", PURPLE, "React / Next", "des 800€"),
    ]
    cw = (sw - 64) // 3
    for i, (name, color, desc, price) in enumerate(cards):
        ccx = cx + i * (cw + 12)
        # Card bg
        d.rounded_rectangle([ccx, cy, ccx + cw, cy + 100], radius=14, fill=(255, 255, 255, 8))
        # Top accent
        d.rounded_rectangle([ccx + 8, cy + 6, ccx + cw - 8, cy + 9], radius=2, fill=(*color, 100))
        d.text((ccx + 10, cy + 20), name, font=F['p_card'], fill=WHITE)
        d.text((ccx + 10, cy + 46), desc, font=F['p_card_s'], fill=(*WHITE, 100))
        d.text((ccx + 10, cy + 70), price, font=F['p_price'], fill=(*color, 200))


def create():
    img = Image.new('RGBA', (W, H), BG_TOP)
    d = ImageDraw.Draw(img)

    # ── Rich gradient background ──
    for yy in range(H):
        t = yy / H
        c = lerp(BG_TOP, BG_BOT, t)
        d.line([(0, yy), (W, yy)], fill=c)

    # Large ambient glows for depth
    draw_glow(img, 400, 600, 700, BLUE, alpha=10)
    draw_glow(img, 2000, 400, 600, PURPLE, alpha=8)
    draw_glow(img, 1200, 1800, 550, (80, 40, 180), alpha=7)
    draw_glow(img, 300, 2800, 500, BLUE, alpha=6)
    draw_glow(img, 2100, 3000, 450, PURPLE, alpha=5)

    # Subtle dot grid pattern (very faint)
    d = ImageDraw.Draw(img)
    for gx in range(0, W, 80):
        for gy in range(0, H, 80):
            d.ellipse([gx, gy, gx + 2, gy + 2], fill=(*WHITE, 8))

    PAD = 120

    # ═══════════════════════════════════════════════════════
    # LOGO BAR
    # ═══════════════════════════════════════════════════════
    ly = 75

    # Logo icon (simplified T mark)
    d.rounded_rectangle([PAD, ly, PAD + 55, ly + 55], radius=14, fill=BLUE)
    d.text((PAD + 12, ly + 4), "T", font=F['logo'], fill=WHITE)

    # Logo text
    d.text((PAD + 72, ly + 6), "TRAFFIK", font=F['logo'], fill=WHITE)

    # Right tagline
    tag = "AGENCE WEB & MARKETING"
    tag_w = tw(d, tag, F['micro'])[0]
    d.text((W - PAD - tag_w, ly + 18), tag, font=F['micro'], fill=(*WHITE, 60))

    # ═══════════════════════════════════════════════════════
    # HERO: Big text left + Phone right
    # ═══════════════════════════════════════════════════════
    hero_y = 210

    # Pre-title with gradient line
    line_w = 60
    for lx in range(line_w):
        c = lerp(BLUE, PURPLE, lx / line_w)
        d.line([(PAD + lx, hero_y + 26), (PAD + lx, hero_y + 30)], fill=c)
    d.text((PAD + line_w + 18, hero_y + 6), "CREEZ", font=F['pre'], fill=(*WHITE, 180))
    hero_y += 80

    # Mega stacked text with gradient on "WEB"
    for word, color in [("VOTRE", WHITE), ("SITE", WHITE)]:
        d.text((PAD, hero_y), word, font=F['mega'], fill=color)
        hero_y += 248

    # "WEB" with gradient
    web_y = hero_y
    # Render gradient text
    web_text = "WEB."
    temp = Image.new('RGBA', (1100, 280), (0, 0, 0, 0))
    td = ImageDraw.Draw(temp)
    td.text((0, 0), web_text, font=F['mega_b'], fill=WHITE)
    # Create gradient overlay
    grad = Image.new('RGBA', (1100, 280), (0, 0, 0, 0))
    for gx in range(1100):
        c = lerp(BLUE, PURPLE, gx / 1100)
        ImageDraw.Draw(grad).line([(gx, 0), (gx, 280)], fill=(*c, 255))
    # Use text as mask
    r, g, b, a = temp.split()
    grad.putalpha(a)
    img.paste(grad, (PAD, hero_y), grad)
    d = ImageDraw.Draw(img)
    hero_y += 280

    # Bullet points
    hero_y += 30
    bullets = [
        ("Sites web sur-mesure", "design & developpement"),
        ("Visible sur Google", "SEO & referencement"),
        ("Publicite en ligne", "Google Ads & Meta Ads"),
        ("A partir de 250€", "sans engagement"),
    ]
    for i, (main, sub) in enumerate(bullets):
        by = hero_y + i * 82
        # Gradient dot
        dot_c = lerp(BLUE, PURPLE, i / 3)
        d.ellipse([PAD + 4, by + 10, PAD + 26, by + 32], fill=dot_c)
        d.text((PAD + 44, by), main, font=F['bullet'], fill=WHITE)
        d.text((PAD + 44, by + 44), sub, font=F['bullet_s'], fill=(*WHITE, 60))

    hero_y += len(bullets) * 82 + 50

    # CTA Button
    cta_text = "AUDIT GRATUIT  →"
    cta_w = 530
    cta_h = 88
    # Gold glow behind
    draw_glow(img, PAD + cta_w // 2, hero_y + cta_h // 2, 180, GOLD, alpha=15)
    draw_shadow(img, PAD, hero_y, cta_w, cta_h, cta_h // 2, alpha=30, blur=14, offset=8)
    draw_gradient_pill(img, PAD, hero_y, cta_w, cta_h, GOLD, (255, 220, 80))
    d = ImageDraw.Draw(img)
    ctw_val = tw(d, cta_text, F['cta'])[0]
    d.text((PAD + (cta_w - ctw_val) // 2, hero_y + 18), cta_text, font=F['cta'], fill=(20, 15, 5))

    hero_y += cta_h + 18
    d.text((PAD, hero_y), "100% gratuit  ·  Sans engagement", font=F['cta_s'], fill=(*WHITE, 50))

    # ── PHONE MOCKUP (right side, large) ──
    phone_w = 640
    phone_h = 1350
    phone_x = W - PAD - phone_w
    phone_y = 170

    draw_phone(img, phone_x, phone_y, phone_w, phone_h)
    d = ImageDraw.Draw(img)

    # ═══════════════════════════════════════════════════════
    # FLOATING CARDS
    # ═══════════════════════════════════════════════════════

    # Card 1: Rating (top, overlapping phone top-right)
    fc1_w, fc1_h = 300, 110
    fc1_x = min(phone_x + phone_w - 180, W - PAD - fc1_w)
    fc1_y = phone_y - 25
    draw_white_card(img, fc1_x, fc1_y, fc1_w, fc1_h)
    d = ImageDraw.Draw(img)
    d.text((fc1_x + 20, fc1_y + 14), "Note clients", font=F['fc_s'], fill=LGRAY)
    d.text((fc1_x + 20, fc1_y + 42), "4.9/5", font=F['fc_n'], fill=NAVY)
    d.text((fc1_x + 155, fc1_y + 52), "★★★★★", font=F['fc_star'], fill=GOLD)
    d.text((fc1_x + 20, fc1_y + 82), "93% satisfaction", font=F['fc_s'], fill=LGRAY)

    # Card 2: Visiteurs (right mid)
    fc2_w, fc2_h = 260, 165
    fc2_x = min(phone_x + phone_w - 100, W - PAD - fc2_w)
    fc2_y = phone_y + phone_h // 2 + 50
    draw_white_card(img, fc2_x, fc2_y, fc2_w, fc2_h)
    d = ImageDraw.Draw(img)
    d.text((fc2_x + 18, fc2_y + 14), "Visiteurs", font=F['fc_s'], fill=LGRAY)
    d.text((fc2_x + 18, fc2_y + 40), "+350%", font=F['fc_n'], fill=GREEN)
    d.text((fc2_x + 18, fc2_y + 88), "ROI moyen constate", font=F['fc_s'], fill=LGRAY)
    # Chart bars
    bars = [20, 32, 26, 48, 40, 58, 72]
    for i, bh in enumerate(bars):
        bx = fc2_x + 18 + i * 30
        by2 = fc2_y + 153
        c = lerp(BLUE, PURPLE, i / 6)
        d.rounded_rectangle([bx, by2 - bh, bx + 18, by2], radius=4, fill=c)

    # Card 3: Site deploye (left of phone bottom)
    fc3_w, fc3_h = 300, 80
    fc3_x = phone_x - 120
    fc3_y = phone_y + phone_h - 200
    draw_white_card(img, fc3_x, fc3_y, fc3_w, fc3_h)
    d = ImageDraw.Draw(img)
    d.ellipse([fc3_x + 18, fc3_y + 20, fc3_x + 52, fc3_y + 54], fill=GREEN)
    d.text((fc3_x + 26, fc3_y + 22), "✓", font=F['p_btn'], fill=WHITE)
    d.text((fc3_x + 62, fc3_y + 14), "Site deploye", font=F['fc_t'], fill=NAVY)
    d.text((fc3_x + 62, fc3_y + 48), "Livre en 2 semaines", font=F['fc_s'], fill=LGRAY)

    # ═══════════════════════════════════════════════════════
    # STATS SECTION — Glass cards full width
    # ═══════════════════════════════════════════════════════
    stats_y = 1680
    stats_h = 180
    card_gap = 28
    card_m = 80
    card_w = (W - card_m * 2 - card_gap * 2) // 3

    stat_data = [
        ("150+", "sites crees", BLUE),
        ("30", "villes couvertes", PURPLE),
        ("93%", "satisfaction client", GREEN),
    ]

    for i, (num, label, accent) in enumerate(stat_data):
        cx = card_m + i * (card_w + card_gap)
        draw_glass_card(img, cx, stats_y, card_w, stats_h, r=24)
        d = ImageDraw.Draw(img)
        # Accent bar
        for ax in range(60):
            c = lerp(accent, lerp(accent, WHITE, 0.3), ax / 60)
            d.line([(cx + 26 + ax, stats_y + 20), (cx + 26 + ax, stats_y + 24)], fill=(*c, 180))
        d.text((cx + 26, stats_y + 40), num, font=F['stat_n'], fill=WHITE)
        d.text((cx + 26, stats_y + 130), label, font=F['stat_l'], fill=(*WHITE, 60))

    # ═══════════════════════════════════════════════════════
    # LOWER SECTION: Why us + Contact (side by side)
    # ═══════════════════════════════════════════════════════
    lower_y = stats_y + stats_h + 80

    # Left: Why us
    d.text((PAD, lower_y), "Pourquoi Traffik ?", font=F['sect'], fill=WHITE)
    check_y = lower_y + 75

    checks = [
        "Accompagnement de A a Z",
        "Resultats en moins de 30 jours",
        "Sans engagement, sans surprise",
        "Premier appel decouverte gratuit",
    ]
    for i, ct in enumerate(checks):
        cy = check_y + i * 65
        cc = lerp(BLUE, PURPLE, i / 3)
        d.ellipse([PAD, cy + 4, PAD + 30, cy + 34], fill=(*cc, 30))
        d.text((PAD + 5, cy + 5), "✓", font=F['p_btn'], fill=cc)
        d.text((PAD + 46, cy + 2), ct, font=F['check'], fill=(*WHITE, 80))

    # Right: Contact
    contact_x = W // 2 + 60
    d.text((contact_x, lower_y), "Contactez-nous", font=F['sect'], fill=WHITE)

    # Phone number (big)
    d.text((contact_x, lower_y + 75), "06 35 50 53 74", font=F['phone'], fill=WHITE)

    # Website with blue accent
    d.text((contact_x, lower_y + 190), "traffik-web.fr", font=F['web'], fill=BLUE)

    # Email
    d.text((contact_x, lower_y + 245), "laibhossame1@gmail.com", font=F['email'], fill=(*WHITE, 50))

    # Testimonial glass card
    test_y = lower_y + 310
    test_w = W - contact_x - PAD + 20
    test_h = 140
    draw_glass_card(img, contact_x, test_y, test_w, test_h, r=20)
    d = ImageDraw.Draw(img)
    d.text((contact_x + 22, test_y + 10), "\"", font=ff("BricolageGrotesque-Bold.ttf", 46),
           fill=(*GOLD, 200))
    d.text((contact_x + 22, test_y + 48), "Super agence ! Site livre", font=F['fc_t'], fill=WHITE)
    d.text((contact_x + 22, test_y + 80), "en 2 semaines, pro et rapide.", font=F['fc_s'], fill=(*WHITE, 60))
    d.text((contact_x + 22, test_y + 108), "— Client Shopify", font=F['fc_s'], fill=(*WHITE, 35))
    d.text((contact_x + test_w - 130, test_y + 14), "★★★★★", font=F['fc_star'], fill=GOLD)

    # ═══════════════════════════════════════════════════════
    # SECOND CTA — Glass card with gradient border
    # ═══════════════════════════════════════════════════════
    cta2_y = test_y + test_h + 80
    cta2_w = W - PAD * 2
    cta2_h = 160
    draw_glass_card(img, PAD, cta2_y, cta2_w, cta2_h, r=28, bg_alpha=120)
    d = ImageDraw.Draw(img)

    # Gradient top border
    for lx in range(cta2_w - 4):
        t = lx / (cta2_w - 4)
        c = lerp(BLUE, PURPLE, t)
        d.line([(PAD + 2 + lx, cta2_y), (PAD + 2 + lx, cta2_y + 3)], fill=(*c, 120))

    d.text((PAD + 40, cta2_y + 30), "Pret a lancer votre projet ?", font=F['sect'], fill=WHITE)
    d.text((PAD + 40, cta2_y + 90), "Demandez votre audit gratuit — 100% offert, sans engagement.",
           font=F['email'], fill=(*WHITE, 60))

    # Small CTA button
    mini_cta_x = cta2_w - 280
    mini_cta_w = 240
    mini_cta_h = 56
    mini_cta_y = cta2_y + 52
    draw_gradient_pill(img, PAD + mini_cta_x, mini_cta_y, mini_cta_w, mini_cta_h, GOLD, (255, 220, 80))
    d = ImageDraw.Draw(img)
    mc_text = "COMMENCER →"
    mc_tw = tw(d, mc_text, F['bar'])[0]
    d.text((PAD + mini_cta_x + (mini_cta_w - mc_tw) // 2, mini_cta_y + 10),
           mc_text, font=F['bar'], fill=(20, 15, 5))

    # ═══════════════════════════════════════════════════════
    # BOTTOM BAR
    # ═══════════════════════════════════════════════════════
    bar_h = 100
    bar_y = H - bar_h - 55
    bar_m = 80

    # Glass bar
    bar_img = Image.new('RGBA', (W - bar_m * 2, bar_h), (0, 0, 0, 0))
    bar_d = ImageDraw.Draw(bar_img)
    bar_d.rounded_rectangle([0, 0, W - bar_m * 2, bar_h], radius=bar_h // 2,
                            fill=(*WHITE, 15))
    bar_d.rounded_rectangle([0, 0, W - bar_m * 2, bar_h], radius=bar_h // 2,
                            outline=(*WHITE, 25), width=1)
    img.paste(bar_img, (bar_m, bar_y), bar_img)
    d = ImageDraw.Draw(img)

    items = [
        ("traffik-web.fr", BLUE),
        ("06 35 50 53 74", PURPLE),
        ("laibhossame1@gmail.com", lerp(PURPLE, BLUE, 0.5)),
    ]
    bar_w = W - bar_m * 2
    iw = bar_w // 3
    for i, (text, color) in enumerate(items):
        ix = bar_m + i * iw + 50
        icy = bar_y + bar_h // 2
        d.ellipse([ix - 7, icy - 7, ix + 7, icy + 7], fill=color)
        d.text((ix + 20, icy - 14), text, font=F['bar'], fill=(*WHITE, 180))

    # ═══════════════════════════════════════════════════════
    # GRADIENT LINE at very bottom
    # ═══════════════════════════════════════════════════════
    line_y = H - 28
    for lx in range(W):
        t = lx / W
        c = lerp(BLUE, PURPLE, t)
        d.line([(lx, line_y), (lx, line_y + 3)], fill=(*c, 60))

    # ── SAVE ──
    img.convert('RGB').save(OUT, 'PNG', quality=100, dpi=(300, 300))
    print(f"Done: {OUT} ({W}x{H})")


if __name__ == "__main__":
    create()
