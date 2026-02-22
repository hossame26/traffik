"""Capture a real website screenshot for the mockup"""
from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page(viewport={"width": 1440, "height": 900})
    page.goto("https://cremya.fr", wait_until="networkidle", timeout=15000)
    page.wait_for_timeout(3000)
    page.screenshot(path="/Users/hossamelaib/Documents/traffik/flyer/site-screenshot.png")
    browser.close()
    print("✓ Screenshot captured")
