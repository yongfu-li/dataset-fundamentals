#!/usr/bin/env python3
"""Generate presets-bundle.js for the scaling / encoding lab."""
from __future__ import annotations

import json
from pathlib import Path

OUT = Path(__file__).resolve().parent / "presets-bundle.js"


def knn_age_income() -> list[dict]:
    """eg:5.46 — age vs income scale mismatch for distance models."""
    # Intentionally disparate ranges: age ~20–70, income ~20k–120k
    rows = [
        (22, 28000, "Junior"),
        (25, 32000, "Junior"),
        (28, 41000, "Mid"),
        (31, 48000, "Mid"),
        (35, 55000, "Mid"),
        (38, 62000, "Senior"),
        (42, 71000, "Senior"),
        (45, 78000, "Senior"),
        (48, 85000, "Lead"),
        (52, 92000, "Lead"),
        (55, 98000, "Lead"),
        (58, 105000, "Exec"),
        (24, 30000, "Junior"),
        (33, 52000, "Mid"),
        (40, 68000, "Senior"),
        (47, 88000, "Lead"),
        (29, 45000, "Mid"),
        (36, 59000, "Mid"),
        (50, 95000, "Lead"),
        (60, 112000, "Exec"),
        (27, 38000, "Junior"),
        (44, 75000, "Senior"),
        (53, 101000, "Lead"),
        (34, 54000, "Mid"),
    ]
    return [
        {"person_id": i + 1, "age": age, "income": income, "level": level}
        for i, (age, income, level) in enumerate(rows)
    ]


def product_colors() -> list[dict]:
    """eg:5.47 — nominal color categories for one-hot encoding."""
    colors = ["Red", "Blue", "Green", "Red", "Blue", "Green", "Red", "Blue",
              "Green", "Red", "Blue", "Green", "Red", "Blue", "Green",
              "Red", "Blue", "Green", "Red", "Blue"]
    prices = [12, 15, 11, 14, 16, 13, 12, 18, 10, 15,
              17, 12, 13, 19, 11, 14, 16, 12, 15, 18]
    return [
        {
            "sku": f"S{i + 1:02d}",
            "color": color,
            "price": price,
            "units_sold": 20 + (i * 3) % 40,
        }
        for i, (color, price) in enumerate(zip(colors, prices))
    ]


def apparel_size() -> list[dict]:
    """eg:5.48 — ordinal size levels (label encode preserves order)."""
    sizes = ["Small", "Medium", "Large", "Small", "Medium", "Large",
             "Small", "Medium", "Large", "Medium", "Large", "Small",
             "Medium", "Large", "Small", "Medium", "Large", "Small"]
    return [
        {
            "item_id": i + 1,
            "size": size,
            "price": 29 + {"Small": 0, "Medium": 5, "Large": 10}[size],
            "returns": (i % 5 == 0),
        }
        for i, size in enumerate(sizes)
    ]


def skewed_spend() -> list[dict]:
    """Right-skewed spend — log1p compresses the long tail."""
    spends = [
        12, 15, 18, 22, 25, 28, 30, 35, 40, 45,
        50, 55, 60, 70, 80, 95, 110, 140, 200, 350,
        500, 800, 1200, 2500,
    ]
    return [
        {
            "customer_id": i + 1,
            "spend": spend,
            "visits": 1 + (i % 8),
            "region": ["North", "South", "East", "West"][i % 4],
        }
        for i, spend in enumerate(spends)
    ]


def main() -> None:
    bag = {
        "knn-age-income": {
            "id": "knn-age-income",
            "name": "knn-age-income",
            "title": "Age & income (KNN scale)",
            "description": "Age ~20–60 vs income tens of thousands — distance is income-dominated until you scale (eg:5.46).",
            "bookAnchors": ["§5.4.1", "eg:5.46"],
            "teachingFocus": "scale-geometry",
            "defaults": {
                "xCol": "age",
                "yCol": "income",
                "catCol": "level",
                "scaleMethod": "none",
                "encodeMethod": "none",
            },
            "rows": knn_age_income(),
        },
        "product-colors": {
            "id": "product-colors",
            "name": "product-colors",
            "title": "Product colors (one-hot)",
            "description": "Nominal color categories — one-hot avoids false order; label codes would invent ordinality (eg:5.47).",
            "bookAnchors": ["§5.4.2", "eg:5.47"],
            "teachingFocus": "one-hot",
            "defaults": {
                "xCol": "price",
                "yCol": "units_sold",
                "catCol": "color",
                "scaleMethod": "none",
                "encodeMethod": "onehot",
            },
            "rows": product_colors(),
        },
        "apparel-size": {
            "id": "apparel-size",
            "name": "apparel-size",
            "title": "Apparel size (label)",
            "description": "Small / Medium / Large is ordinal — label encoding preserves order (eg:5.48).",
            "bookAnchors": ["§5.4.2", "eg:5.48"],
            "teachingFocus": "label-ordinal",
            "defaults": {
                "xCol": "price",
                "yCol": "item_id",
                "catCol": "size",
                "scaleMethod": "none",
                "encodeMethod": "label",
                "labelOrder": ["Small", "Medium", "Large"],
            },
            "rows": apparel_size(),
        },
        "skewed-spend": {
            "id": "skewed-spend",
            "name": "skewed-spend",
            "title": "Skewed spend (log)",
            "description": "Heavy right tail on spend — log1p compresses extremes so scatter geometry is readable.",
            "bookAnchors": ["§5.4.1"],
            "teachingFocus": "log-transform",
            "defaults": {
                "xCol": "visits",
                "yCol": "spend",
                "catCol": "region",
                "scaleMethod": "log1p",
                "encodeMethod": "none",
            },
            "rows": skewed_spend(),
        },
    }

    js = (
        "/* Generated by make_presets.py — do not edit by hand. */\n"
        "(function (global) {\n"
        "  global.ScalePresets = "
        + json.dumps(bag, indent=2)
        + ";\n"
        "})(typeof window !== 'undefined' ? window : globalThis);\n"
    )
    OUT.write_text(js, encoding="utf-8")
    print(f"Wrote {OUT} ({len(bag)} presets)")


if __name__ == "__main__":
    main()
