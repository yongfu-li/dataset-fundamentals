"""Generate synthetic detection scenes and bundle them as data URIs.

The annotation tool must run under ``file://`` where ``fetch`` and external
``<img src>`` loads are unreliable. Embedding tiny PNGs as base64 data URIs in a
classic script (``window.AnnImages``) guarantees the images load everywhere,
mirroring the ``presets-bundle.js`` approach used by the sampling tool.

Run:
    python make_images.py

Writes ``images-bundle.js`` next to this file.

Design: each scene contains a few clearly labelable shapes drawn on a simple
road/ground background. Shapes map one-to-one to the guideline classes so the
labeling task is unambiguous for learners:

* ``car``   -> filled rounded rectangle (wider than tall)
* ``person``-> tall rounded rectangle with a head circle
* ``sign``  -> circle on a thin post

Ground-truth boxes are recorded per scene so a future gold-set audit feature can
score learner boxes; v1 does not reveal them in the UI.
"""

from __future__ import annotations

import base64
import io
import json
from pathlib import Path

from PIL import Image, ImageDraw

WIDTH = 480
HEIGHT = 320

# Palette (kept distinct and colour-blind-friendly-ish).
SKY = (222, 233, 240)
GROUND = (205, 199, 188)
ROAD = (120, 122, 128)
CAR = (37, 99, 175)
PERSON = (214, 121, 40)
SIGN = (43, 138, 62)
POST = (90, 74, 58)
OUTLINE = (28, 36, 33)


def _rounded(draw: ImageDraw.ImageDraw, box, fill, radius=10) -> None:
    """Draw a rounded rectangle with an outline."""
    draw.rounded_rectangle(box, radius=radius, fill=fill, outline=OUTLINE, width=2)


def _base(draw: ImageDraw.ImageDraw) -> None:
    """Paint sky, ground, and a road strip shared by every scene."""
    draw.rectangle([0, 0, WIDTH, HEIGHT], fill=SKY)
    draw.rectangle([0, 210, WIDTH, HEIGHT], fill=GROUND)
    draw.rectangle([0, 235, WIDTH, 300], fill=ROAD)
    for x in range(20, WIDTH, 70):  # lane dashes
        draw.rectangle([x, 265, x + 34, 271], fill=(232, 226, 210))


def _car(draw: ImageDraw.ImageDraw, x: int, y: int, w: int = 92, h: int = 46):
    """Draw a car-like shape; return its ground-truth box."""
    _rounded(draw, [x, y, x + w, y + h], CAR, radius=12)
    # cabin
    _rounded(draw, [x + 18, y - 18, x + w - 18, y + 6], CAR, radius=8)
    # wheels
    for wx in (x + 16, x + w - 26):
        draw.ellipse([wx, y + h - 10, wx + 20, y + h + 10], fill=OUTLINE)
    return {"class": "car", "x": x, "y": y - 18, "w": w, "h": h + 28}


def _person(draw: ImageDraw.ImageDraw, x: int, y: int, w: int = 26, h: int = 66):
    """Draw a person-like shape; return its ground-truth box."""
    head_r = 11
    cx = x + w // 2
    draw.ellipse([cx - head_r, y, cx + head_r, y + 2 * head_r], fill=PERSON, outline=OUTLINE, width=2)
    _rounded(draw, [x, y + 2 * head_r + 2, x + w, y + h], PERSON, radius=8)
    return {"class": "person", "x": x - 2, "y": y - 2, "w": w + 4, "h": h + 4}


def _sign(draw: ImageDraw.ImageDraw, x: int, y: int, r: int = 18):
    """Draw a sign-on-post shape; return its ground-truth box (sign face only)."""
    cx = x + r
    draw.rectangle([cx - 3, y + 2 * r, cx + 3, y + 2 * r + 40], fill=POST)
    draw.ellipse([x, y, x + 2 * r, y + 2 * r], fill=SIGN, outline=OUTLINE, width=2)
    return {"class": "sign", "x": x, "y": y, "w": 2 * r, "h": 2 * r}


def scene_1():
    """One of each class — the gentle warm-up scene."""
    img = Image.new("RGB", (WIDTH, HEIGHT), SKY)
    d = ImageDraw.Draw(img)
    _base(d)
    boxes = [
        _car(d, 60, 250),
        _person(d, 300, 180),
        _sign(d, 400, 150),
    ]
    return img, boxes


def scene_2():
    """Two cars and a person — occlusion-free multi-instance."""
    img = Image.new("RGB", (WIDTH, HEIGHT), SKY)
    d = ImageDraw.Draw(img)
    _base(d)
    boxes = [
        _car(d, 30, 250),
        _car(d, 250, 255, w=110, h=52),
        _person(d, 200, 170),
    ]
    return img, boxes


def scene_3():
    """Denser scene — one car, two people, two signs."""
    img = Image.new("RGB", (WIDTH, HEIGHT), SKY)
    d = ImageDraw.Draw(img)
    _base(d)
    boxes = [
        _car(d, 150, 252),
        _person(d, 60, 175),
        _person(d, 110, 182, h=58),
        _sign(d, 350, 140),
        _sign(d, 410, 150, r=15),
    ]
    return img, boxes


def to_data_uri(img: Image.Image) -> str:
    """Encode a PIL image as a base64 PNG data URI."""
    buf = io.BytesIO()
    img.save(buf, format="PNG", optimize=True)
    b64 = base64.b64encode(buf.getvalue()).decode("ascii")
    return f"data:image/png;base64,{b64}"


def main() -> None:
    scenes = {
        "street-01": ("Street scene 1 — warm-up", scene_1),
        "street-02": ("Street scene 2 — multiple vehicles", scene_2),
        "street-03": ("Street scene 3 — dense scene", scene_3),
    }
    bundle = {}
    for image_id, (name, fn) in scenes.items():
        img, boxes = fn()
        bundle[image_id] = {
            "id": image_id,
            "name": name,
            "width": WIDTH,
            "height": HEIGHT,
            "dataUri": to_data_uri(img),
            "truth": boxes,  # hidden ground truth for future gold-set audit
        }

    out = Path(__file__).with_name("images-bundle.js")
    payload = json.dumps(bundle, ensure_ascii=False, separators=(",", ":"))
    out.write_text(
        "/* Auto-generated by make_images.py — synthetic detection scenes.\n"
        " * Bundled as base64 PNG data URIs so the lab works under file://. */\n"
        "window.AnnImages = " + payload + ";\n",
        encoding="utf-8",
    )
    print(f"wrote {out} ({out.stat().st_size // 1024} KB, {len(bundle)} images)")


if __name__ == "__main__":
    main()
