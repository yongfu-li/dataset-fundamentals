"""Generate synthetic fairness presets for the Bias & fairness meter.

Two datasets mirror Chapter 7 teaching figures:

* hiring-screen — biased screening scores across demographic groups
  (disparate impact / 80% rule, selection-rate bars).
* loan-approve — credit scores with unequal calibration across groups
  (equal opportunity / equalized odds).

Bundled as ``window.FairnessPresets`` for file:// compatibility.

Run:
    python make_presets.py
"""

from __future__ import annotations

import json
import math
import random
from pathlib import Path


def _clamp01(x: float) -> float:
    return max(0.0, min(1.0, x))


def hiring_screen(rng: random.Random) -> dict:
    """Synthetic hiring screen: groups differ in selection rate at fixed threshold."""
    # Group base rates for "qualified" and score bias offsets
    # (score = qualified_signal + group_bias + noise)
    specs = [
        ("Group A", 0.55, 0.18),   # advantaged: higher score bump
        ("Group B", 0.52, 0.05),
        ("Group C", 0.50, -0.08),
        ("Group D", 0.48, -0.18),  # disadvantaged
    ]
    rows = []
    n = 0
    for group, base_qual, bias in specs:
        for _ in range(100):
            n += 1
            qualified = 1 if rng.random() < base_qual else 0
            signal = 0.72 if qualified else 0.28
            noise = rng.gauss(0, 0.12)
            score = _clamp01(signal + bias + noise)
            rows.append(
                {
                    "id": f"H{n:04d}",
                    "group": group,
                    "label": qualified,
                    "score": round(score, 4),
                }
            )
    rng.shuffle(rows)
    return {
        "name": "hiring-screen",
        "description": "Synthetic hiring screen (400 applicants, 4 groups). "
        "Scores are biased so Group A is selected more often at common thresholds — "
        "use for disparate-impact / demographic-parity checks (§7.3).",
        "defaultMapping": {"group": "group", "label": "label", "score": "score", "id": "id"},
        "rows": rows,
    }


def loan_approve(rng: random.Random) -> dict:
    """Synthetic loan decisions: TPR/FPR differ across groups at the same threshold."""
    # group, P(repay), score calibration: mean for repayers / non-repayers
    specs = [
        ("Group A", 0.70, (0.78, 0.32)),  # well calibrated, high separation
        ("Group B", 0.65, (0.70, 0.38)),
        ("Group C", 0.60, (0.58, 0.42)),  # compressed scores → higher FPR or lower TPR
    ]
    rows = []
    n = 0
    for group, p_repay, (mu_pos, mu_neg) in specs:
        for _ in range(120):
            n += 1
            repay = 1 if rng.random() < p_repay else 0
            mu = mu_pos if repay else mu_neg
            score = _clamp01(rng.gauss(mu, 0.11))
            rows.append(
                {
                    "id": f"L{n:04d}",
                    "group": group,
                    "label": repay,
                    "score": round(score, 4),
                }
            )
    rng.shuffle(rows)
    return {
        "name": "loan-approve",
        "description": "Synthetic loan approvals (360 applicants, 3 groups). "
        "Score calibration differs by group — use for equal opportunity / "
        "equalized odds (§7.5).",
        "defaultMapping": {"group": "group", "label": "label", "score": "score", "id": "id"},
        "rows": rows,
    }


def screening_balanced(rng: random.Random) -> dict:
    """Near-fair screening: similar score calibration across groups."""
    groups = ["Group A", "Group B", "Group C", "Group D"]
    rows = []
    n = 0
    for group in groups:
        for _ in range(80):
            n += 1
            qualified = 1 if rng.random() < 0.52 else 0
            signal = 0.68 if qualified else 0.32
            # Small group-specific noise only — should pass 80% rule at t=0.5
            noise = rng.gauss(0, 0.1)
            score = _clamp01(signal + noise)
            rows.append(
                {
                    "id": f"S{n:04d}",
                    "group": group,
                    "label": qualified,
                    "score": round(score, 4),
                }
            )
    rng.shuffle(rows)
    return {
        "name": "screening-balanced",
        "description": "Near-fair screening (320 applicants, 4 groups). "
        "Scores are similarly calibrated — use to see what passing metrics look like at t=0.5.",
        "defaultMapping": {"group": "group", "label": "label", "score": "score", "id": "id"},
        "rows": rows,
    }


def main() -> None:
    rng = random.Random(7)
    presets = {}
    for build in (hiring_screen, loan_approve, screening_balanced):
        data = build(rng)
        presets[data["name"]] = data

    out = Path(__file__).with_name("presets-bundle.js")
    payload = json.dumps(presets, ensure_ascii=False, separators=(",", ":"))
    out.write_text(
        "/* Auto-generated by make_presets.py — fairness presets for Ch.7.\n"
        " * Bundled as a classic script so the tool works under file://. */\n"
        "window.FairnessPresets = " + payload + ";\n",
        encoding="utf-8",
    )
    print(f"wrote {out} ({out.stat().st_size // 1024} KB, {len(presets)} presets)")


if __name__ == "__main__":
    main()
