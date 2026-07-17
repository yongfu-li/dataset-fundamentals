#!/usr/bin/env python3
"""Generate presets-bundle.js for the EDA dashboard (Ch.1 + Ch.6)."""
from __future__ import annotations

import csv
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[4]
OUT = Path(__file__).resolve().parent / "presets-bundle.js"

HOUSEHOLD = ROOT / "lectures" / "modules" / "chapter1" / "example20" / "household_incomes.csv"
HEALTHCARE = ROOT / "lectures" / "modules" / "chapter1" / "example12" / "data.csv"


def read_csv(path: Path) -> list[dict]:
    with path.open(encoding="utf-8", newline="") as f:
        return list(csv.DictReader(f))


def retail_browse() -> list[dict]:
    """Synthetic multi-column table for group-by, scatter, and correlation (Ch.6)."""
    rows = []
    # age, income, spend, visits, region, channel — enough for Pearson + group-by
    data = [
        (22, 28000, 120, 3, "West", "Online"),
        (25, 32000, 180, 4, "West", "Online"),
        (28, 36000, 210, 5, "East", "Store"),
        (31, 41000, 260, 4, "East", "Online"),
        (34, 45000, 300, 6, "West", "Store"),
        (37, 52000, 340, 5, "South", "Online"),
        (40, 58000, 420, 7, "South", "Store"),
        (43, 61000, 390, 4, "East", "Online"),
        (46, 68000, 510, 8, "West", "Store"),
        (49, 72000, 480, 6, "South", "Online"),
        (52, 78000, 560, 9, "East", "Store"),
        (55, 85000, 620, 7, "West", "Online"),
        (27, 30000, 150, 2, "South", "Store"),
        (33, 47000, 280, 5, "East", "Online"),
        (38, 55000, 360, 6, "West", "Store"),
        (44, 64000, 440, 5, "South", "Online"),
        (50, 76000, 530, 8, "East", "Store"),
        (29, 39000, 200, 3, "West", "Online"),
        (41, 59000, 400, 6, "South", "Store"),
        (48, 70000, 500, 7, "East", "Online"),
        (35, 48000, "", 4, "West", "online"),  # missing spend + inconsistent channel case
        (36, 49000, 310, 5, "West", "Online"),
        (42, 60000, 410, 6, "East", "Store"),
        (47, 69000, 470, 5, "South", "Online"),
    ]
    for i, (age, income, spend, visits, region, channel) in enumerate(data, start=1):
        rows.append(
            {
                "id": f"C{i:02d}",
                "age": age,
                "income": income,
                "spend": spend,
                "visits": visits,
                "region": region,
                "channel": channel,
            }
        )
    return rows


def confounder_icecream() -> list[dict]:
    """Spurious ice_cream ↔ drownings correlation via temperature (causation trap)."""
    import random

    rng = random.Random(42)
    rows = []
    for i in range(1, 41):
        temp = rng.uniform(18, 36)
        ice = round(12 + 2.4 * temp + rng.gauss(0, 4), 1)
        drown = round(1.5 + 0.35 * temp + rng.gauss(0, 0.8), 2)
        rows.append(
            {
                "day": f"D{i:02d}",
                "temperature_c": round(temp, 1),
                "ice_cream_sales": max(0, ice),
                "drownings": max(0, drown),
                "region": "Coast" if i % 2 == 0 else "Inland",
            }
        )
    return rows


PRESETS = {
    "household-incomes": {
        "id": "household-incomes",
        "name": "household-incomes",
        "title": "Household incomes",
        "description": "Skewed Income histogram (eg:1.20): schema → describe → missing → univariate plot.",
        "bookAnchors": ["§1.4", "eg:1.20", "eg:1.16"],
        "teachingFocus": "Schema, summaries, and a skewed numeric distribution before modeling.",
        "rows": read_csv(HOUSEHOLD) if HOUSEHOLD.exists() else [],
    },
    "healthcare-missing": {
        "id": "healthcare-missing",
        "name": "healthcare-missing",
        "title": "Healthcare completeness",
        "description": "Missingness profile (eg:1.12): blank Age, Gender, Diagnosis cells.",
        "bookAnchors": ["§1.3.1", "eg:1.12"],
        "teachingFocus": "Completeness is visible as missing counts before any model.",
        "rows": read_csv(HEALTHCARE) if HEALTHCARE.exists() else [],
    },
    "retail-browse": {
        "id": "retail-browse",
        "name": "retail-browse",
        "title": "Retail browse (multi-column)",
        "description": "Multi-column table: filter, group-by region/channel, scatter income↔spend, Pearson matrix.",
        "bookAnchors": ["§6.2", "§6.3", "§6.4", "eg:6.1"],
        "teachingFocus": "Four-step EDA: understand → summarize → visualize → quality-check.",
        "rows": retail_browse(),
    },
    "confounder-icecream": {
        "id": "confounder-icecream",
        "name": "confounder-icecream",
        "title": "Ice cream & drownings",
        "description": "Correlation trap: ice_cream ↔ drownings look linked until you control for temperature.",
        "bookAnchors": ["§6.3", "correlation ≠ causation"],
        "teachingFocus": "Strong Pearson r can be spurious — toggle control-for temperature.",
        "rows": confounder_icecream(),
    },
}


def main() -> None:
    for p in PRESETS.values():
        if not p["rows"]:
            raise SystemExit(f"Preset {p['id']} has no rows — check CSV paths.")
    payload = json.dumps(PRESETS, ensure_ascii=False, indent=2)
    OUT.write_text(
        "/* Generated by make_presets.py — do not edit by hand. */\n"
        "window.EdaPresets = " + payload + ";\n",
        encoding="utf-8",
    )
    print(f"Wrote {OUT} ({len(PRESETS)} presets)")


if __name__ == "__main__":
    main()
