#!/usr/bin/env python3
"""Generate presets for De-identification risk checker (k-anonymity lite)."""
from __future__ import annotations

import json
from pathlib import Path

OUT = Path(__file__).resolve().parent / "presets-bundle.js"


def hospital_quasi() -> dict:
    """Classic QI failure: ZIP + age + sex uniquely identify many rows."""
    # Deliberately small classes on (zip, age, sex)
    base = [
        ("02138", 34, "F", "flu"),
        ("02138", 34, "F", "sprain"),  # size 2
        ("02139", 41, "M", "hypertension"),  # unique
        ("10001", 29, "F", "migraine"),  # unique
        ("10001", 29, "M", "allergy"),
        ("10001", 29, "M", "cold"),  # size 2
        ("94107", 67, "F", "arthritis"),  # unique
        ("94107", 52, "M", "diabetes"),
        ("94107", 52, "M", "diabetes"),
        ("94107", 52, "M", "hypertension"),  # size 3
        ("60614", 22, "F", "anxiety"),  # unique
        ("60614", 22, "M", "sprain"),  # unique
        ("30301", 45, "F", "asthma"),
        ("30301", 45, "F", "asthma"),
        ("30301", 45, "F", "flu"),  # size 3
        ("98101", 38, "M", "back pain"),  # unique
        ("98101", 38, "F", "migraine"),  # unique
        ("75201", 60, "M", "cardiac"),
        ("75201", 60, "M", "cardiac"),
        ("75201", 61, "M", "cardiac"),  # age differs → unique-ish
    ]
    rows = []
    for i, (zipc, age, sex, dx) in enumerate(base, start=1):
        rows.append(
            {
                "record_id": f"H{i:02d}",
                "zip": zipc,
                "age": age,
                "sex": sex,
                "diagnosis": dx,
            }
        )
    return {
        "id": "hospital-quasi",
        "name": "hospital-quasi",
        "title": "Hospital release (names removed)",
        "description": "No names or emails—but ZIP + age + sex still isolate many patients (k-anonymity fails).",
        "bookAnchors": ["§3.4", "sec:3.4"],
        "teachingFocus": "quasi-id-trap",
        "quasiDefaults": ["zip", "age", "sex"],
        "sensitiveColumn": "diagnosis",
        "rows": rows,
    }


def voter_lookup() -> dict:
    """Public-style voter attributes that re-identify when combined."""
    rows = [
        {"voter_id": "V01", "zip": "02139", "birth_year": 1984, "sex": "F", "party": "D"},
        {"voter_id": "V02", "zip": "02139", "birth_year": 1984, "sex": "F", "party": "D"},
        {"voter_id": "V03", "zip": "02139", "birth_year": 1984, "sex": "M", "party": "R"},
        {"voter_id": "V04", "zip": "10011", "birth_year": 1991, "sex": "F", "party": "D"},
        {"voter_id": "V05", "zip": "10011", "birth_year": 1972, "sex": "M", "party": "R"},
        {"voter_id": "V06", "zip": "10011", "birth_year": 1972, "sex": "M", "party": "R"},
        {"voter_id": "V07", "zip": "10011", "birth_year": 1972, "sex": "M", "party": "I"},
        {"voter_id": "V08", "zip": "94110", "birth_year": 1955, "sex": "F", "party": "D"},
        {"voter_id": "V09", "zip": "94110", "birth_year": 1955, "sex": "F", "party": "D"},
        {"voter_id": "V10", "zip": "94110", "birth_year": 1955, "sex": "F", "party": "D"},
        {"voter_id": "V11", "zip": "94110", "birth_year": 2001, "sex": "M", "party": "D"},
        {"voter_id": "V12", "zip": "30308", "birth_year": 1988, "sex": "F", "party": "R"},
        {"voter_id": "V13", "zip": "30308", "birth_year": 1988, "sex": "F", "party": "R"},
        {"voter_id": "V14", "zip": "30308", "birth_year": 1960, "sex": "M", "party": "D"},
        {"voter_id": "V15", "zip": "98109", "birth_year": 1995, "sex": "NB", "party": "I"},
    ]
    return {
        "id": "voter-lookup",
        "name": "voter-lookup",
        "title": "Voter-style attributes",
        "description": "ZIP + birth year + sex look harmless alone; together they shrink anonymity sets.",
        "bookAnchors": ["§3.4"],
        "teachingFocus": "public-records",
        "quasiDefaults": ["zip", "birth_year", "sex"],
        "sensitiveColumn": "party",
        "rows": rows,
    }


def coarse_safe() -> dict:
    """Already generalized — passes a modest k."""
    rows = []
    # Three ZIP3 × two age bands × two sex → multiple people each
    combos = [
        ("021**", "30-39", "F"),
        ("021**", "30-39", "M"),
        ("100**", "40-49", "F"),
        ("100**", "40-49", "M"),
        ("941**", "50-59", "F"),
        ("941**", "50-59", "M"),
    ]
    n = 1
    for zip3, age_band, sex in combos:
        for _ in range(5):
            rows.append(
                {
                    "record_id": f"G{n:02d}",
                    "zip3": zip3,
                    "age_band": age_band,
                    "sex": sex,
                    "service": "outpatient",
                }
            )
            n += 1
    return {
        "id": "coarse-safe",
        "name": "coarse-safe",
        "title": "Coarse release (passes k=5)",
        "description": "ZIP3 + age bands already generalized—equivalence classes meet k=5.",
        "bookAnchors": ["§3.4"],
        "teachingFocus": "generalization-works",
        "quasiDefaults": ["zip3", "age_band", "sex"],
        "sensitiveColumn": "service",
        "rows": rows,
    }


def main() -> None:
    presets = {
        "hospital-quasi": hospital_quasi(),
        "voter-lookup": voter_lookup(),
        "coarse-safe": coarse_safe(),
    }
    body = (
        "/* Auto-generated by make_presets.py — do not edit by hand. */\n"
        "(function (global) {\n"
        '  "use strict";\n'
        f"  global.DeidPresets = {json.dumps(presets, indent=2)};\n"
        "})(typeof window !== 'undefined' ? window : globalThis);\n"
    )
    OUT.write_text(body, encoding="utf-8")
    print(f"Wrote {OUT} ({len(presets)} presets)")


if __name__ == "__main__":
    main()
