"""Generate more realistic teaching scenes for the image-augmentation lab.

Embeds PNGs as base64 data URIs (file:// safe), same pattern as image-annotation.

Run:
    python make_images.py

Writes ``images-bundle.js`` next to this file.
"""

from __future__ import annotations

import base64
import io
import json
from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter

W, H = 420, 280
OUT = Path(__file__).with_name("images-bundle.js")


def _png_data_uri(img: Image.Image) -> str:
    buf = io.BytesIO()
    img.save(buf, format="PNG", optimize=True)
    b64 = base64.b64encode(buf.getvalue()).decode("ascii")
    return f"data:image/png;base64,{b64}"


def _grad(draw: ImageDraw.ImageDraw, box, c0, c1, horizontal=False):
    x0, y0, x1, y1 = box
    steps = max(x1 - x0, y1 - y0, 1)
    for i in range(steps):
        t = i / (steps - 1 or 1)
        c = tuple(int(c0[k] * (1 - t) + c1[k] * t) for k in range(3))
        if horizontal:
            draw.line([(x0 + i, y0), (x0 + i, y1)], fill=c)
        else:
            draw.line([(x0, y0 + i), (x1, y0 + i)], fill=c)


def scene_street() -> Image.Image:
    img = Image.new("RGB", (W, H), (210, 225, 235))
    d = ImageDraw.Draw(img)
    _grad(d, (0, 0, W, 150), (170, 205, 230), (235, 245, 250))
    d.rectangle([0, 150, W, H], fill=(95, 100, 108))
    d.rectangle([0, 150, W, 158], fill=(70, 74, 80))
    # lane dashed
    for x in range(20, W, 50):
        d.rectangle([x, 210, x + 28, 216], fill=(230, 220, 90))
    # buildings
    d.rectangle([20, 60, 110, 150], fill=(140, 150, 160))
    d.rectangle([35, 75, 55, 95], fill=(210, 225, 240))
    d.rectangle([70, 75, 90, 95], fill=(210, 225, 240))
    d.rectangle([130, 40, 220, 150], fill=(120, 130, 145))
    d.rectangle([145, 55, 175, 90], fill=(230, 210, 160))
    d.rectangle([185, 55, 205, 90], fill=(230, 210, 160))
    # car body + window
    d.rounded_rectangle([60, 185, 170, 235], radius=10, fill=(45, 90, 140))
    d.rounded_rectangle([85, 195, 145, 215], radius=4, fill=(180, 210, 230))
    d.ellipse([70, 225, 95, 248], fill=(30, 30, 32))
    d.ellipse([135, 225, 160, 248], fill=(30, 30, 32))
    # person
    d.ellipse([280, 160, 300, 180], fill=(210, 175, 145))
    d.rounded_rectangle([278, 180, 302, 230], radius=6, fill=(50, 90, 70))
    # traffic sign
    d.rectangle([355, 175, 361, 235], fill=(90, 90, 90))
    d.ellipse([340, 145, 376, 181], fill=(200, 55, 50))
    img = img.filter(ImageFilter.GaussianBlur(radius=0.4))
    return img


def scene_product_desk() -> Image.Image:
    img = Image.new("RGB", (W, H), (245, 240, 232))
    d = ImageDraw.Draw(img)
    # wood desk
    _grad(d, (0, 140, W, H), (170, 125, 85), (130, 90, 55))
    for y in range(145, H, 12):
        d.line([(0, y), (W, y)], fill=(120, 85, 50), width=1)
    # soft shadow
    shadow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    sd = ImageDraw.Draw(shadow)
    sd.ellipse([115, 175, 305, 230], fill=(0, 0, 0, 55))
    shadow = shadow.filter(ImageFilter.GaussianBlur(8))
    img = Image.alpha_composite(img.convert("RGBA"), shadow).convert("RGB")
    d = ImageDraw.Draw(img)
    # product box
    d.rounded_rectangle([140, 95, 280, 195], radius=8, fill=(35, 38, 42))
    d.rounded_rectangle([155, 110, 265, 155], radius=4, fill=(70, 160, 140))
    d.rectangle([165, 165, 255, 178], fill=(220, 220, 220))
    # earbuds-ish
    d.ellipse([300, 150, 330, 180], fill=(240, 240, 245))
    d.ellipse([308, 158, 322, 172], fill=(40, 40, 45))
    d.ellipse([335, 155, 360, 180], fill=(240, 240, 245))
    d.ellipse([342, 162, 354, 174], fill=(40, 40, 45))
    # wall
    d.rectangle([0, 0, W, 140], fill=(232, 228, 220))
    d.rectangle([40, 30, 120, 110], fill=(250, 250, 252))
    d.rectangle([44, 34, 116, 106], fill=(190, 210, 230))
    return img


def scene_warehouse() -> Image.Image:
    img = Image.new("RGB", (W, H), (55, 60, 68))
    d = ImageDraw.Draw(img)
    _grad(d, (0, 0, W, 80), (70, 78, 90), (45, 50, 58))
    # shelves
    for y in (90, 150, 210):
        d.rectangle([30, y, W - 30, y + 10], fill=(90, 70, 50))
        d.rectangle([40, y - 45, 110, y], fill=(190, 150, 90))
        d.rectangle([130, y - 50, 210, y], fill=(175, 140, 85))
        d.rectangle([230, y - 40, 300, y], fill=(200, 160, 95))
        d.rectangle([320, y - 48, 380, y], fill=(165, 130, 80))
        # labels
        d.rectangle([50, y - 35, 95, y - 22], fill=(245, 240, 220))
    # forklift-ish silhouette
    d.rectangle([320, 230, 390, 265], fill=(220, 160, 40))
    d.rectangle([330, 205, 355, 230], fill=(50, 50, 55))
    d.ellipse([325, 258, 350, 278], fill=(25, 25, 28))
    d.ellipse([360, 258, 385, 278], fill=(25, 25, 28))
    # floor
    d.rectangle([0, 265, W, H], fill=(80, 82, 86))
    return img


def scene_outdoor() -> Image.Image:
    img = Image.new("RGB", (W, H), (135, 185, 225))
    d = ImageDraw.Draw(img)
    _grad(d, (0, 0, W, 160), (120, 175, 220), (200, 225, 245))
    # hills
    d.polygon([(0, 170), (80, 120), (160, 165), (240, 110), (340, 150), (W, 130), (W, H), (0, H)], fill=(70, 130, 75))
    d.polygon([(0, 200), (100, 160), (200, 195), (300, 155), (W, 180), (W, H), (0, H)], fill=(55, 115, 65))
    # path
    d.polygon([(160, H), (200, 180), (240, 180), (300, H)], fill=(170, 150, 110))
    d.polygon([(180, H), (210, 185), (230, 185), (270, H)], fill=(150, 130, 95))
    # tree
    d.rectangle([70, 140, 85, 200], fill=(90, 60, 40))
    d.ellipse([40, 95, 115, 160], fill=(40, 110, 55))
    d.ellipse([55, 80, 105, 130], fill=(50, 130, 65))
    # sun
    d.ellipse([340, 30, 385, 75], fill=(255, 220, 120))
    img = img.filter(ImageFilter.GaussianBlur(radius=0.35))
    return img


def scene_storefront() -> Image.Image:
    img = Image.new("RGB", (W, H), (200, 210, 220))
    d = ImageDraw.Draw(img)
    _grad(d, (0, 0, W, 100), (185, 200, 215), (230, 235, 240))
    # facade
    d.rectangle([40, 50, W - 40, 230], fill=(245, 242, 235))
    d.rectangle([40, 50, W - 40, 95], fill=(35, 90, 120))
    d.rectangle([55, 110, 195, 200], fill=(160, 200, 220))
    d.rectangle([215, 110, 360, 200], fill=(160, 200, 220))
    d.rectangle([60, 115, 190, 195], fill=(210, 230, 240))
    d.rectangle([220, 115, 355, 195], fill=(210, 230, 240))
    # door
    d.rectangle([175, 150, 225, 230], fill=(90, 60, 40))
    d.ellipse([210, 185, 218, 193], fill=(200, 180, 80))
    # sidewalk + curb
    d.rectangle([0, 230, W, H], fill=(150, 150, 155))
    d.rectangle([0, 230, W, 238], fill=(110, 110, 115))
    # awning stripes
    for i, x in enumerate(range(50, W - 50, 18)):
        d.rectangle([x, 95, x + 14, 110], fill=(200, 60, 60) if i % 2 == 0 else (245, 245, 245))
    # planter
    d.ellipse([70, 215, 120, 245], fill=(60, 100, 55))
    d.ellipse([80, 205, 110, 230], fill=(45, 120, 60))
    return img


def scene_receipt_scan() -> Image.Image:
    img = Image.new("RGB", (W, H), (90, 95, 100))
    d = ImageDraw.Draw(img)
    # paper with slight rotation feel via shadow
    d.rectangle([95, 25, 335, 260], fill=(40, 40, 42))
    d.rectangle([90, 20, 330, 255], fill=(250, 248, 240))
    # header bar
    d.rectangle([110, 35, 310, 55], fill=(40, 40, 40))
    # text lines (fake)
    for i, y in enumerate(range(70, 200, 16)):
        wline = 160 if i % 3 else 200
        d.rectangle([120, y, 120 + wline, y + 6], fill=(60, 60, 60) if i < 8 else (120, 120, 120))
    d.rectangle([120, 210, 280, 218], fill=(30, 30, 30))
    d.rectangle([200, 230, 300, 238], fill=(80, 80, 80))
    # coffee stain
    stain = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    sd = ImageDraw.Draw(stain)
    sd.ellipse([250, 140, 310, 195], fill=(160, 110, 60, 40))
    stain = stain.filter(ImageFilter.GaussianBlur(4))
    img = Image.alpha_composite(img.convert("RGBA"), stain).convert("RGB")
    return img


SCENES = [
    {
        "id": "street-day",
        "title": "Street scene",
        "description": "Road, car, pedestrian, sign—classic CV augmentation demo.",
        "builder": scene_street,
    },
    {
        "id": "product-desk",
        "title": "Product on desk",
        "description": "E-commerce style packshot on wood—good for color jitter & brightness.",
        "builder": scene_product_desk,
    },
    {
        "id": "warehouse-shelf",
        "title": "Warehouse shelf",
        "description": "Boxes on racks—crop/zoom and noise show clearly.",
        "builder": scene_warehouse,
    },
    {
        "id": "outdoor-path",
        "title": "Outdoor path",
        "description": "Landscape with path and tree—flip / crop / weather-like noise.",
        "builder": scene_outdoor,
    },
    {
        "id": "storefront",
        "title": "Storefront",
        "description": "Shop facade and sidewalk—rotate and blur for camera shake demos.",
        "builder": scene_storefront,
    },
    {
        "id": "receipt-scan",
        "title": "Receipt scan",
        "description": "Document-on-desk scan with stain—OCR-style augmentation practice.",
        "builder": scene_receipt_scan,
    },
]


def main() -> None:
    bundle = {}
    for sc in SCENES:
        img = sc["builder"]()
        bundle[sc["id"]] = {
            "id": sc["id"],
            "title": sc["title"],
            "description": sc["description"],
            "width": img.width,
            "height": img.height,
            "dataUri": _png_data_uri(img),
            "bookAnchors": ["§10.6", "eg:10.16"],
        }
    payload = json.dumps(bundle, separators=(",", ":"))
    OUT.write_text(
        "/* Auto-generated by make_images.py — realistic teaching scenes as data URIs. */\n"
        f"window.ImgAugImages = {payload};\n",
        encoding="utf-8",
    )
    print(f"Wrote {OUT} ({len(bundle)} scenes, {OUT.stat().st_size // 1024} KB)")


if __name__ == "__main__":
    main()
