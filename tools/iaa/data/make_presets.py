"""Generate label-pair presets for the IAA calculator.

Three teaching sets:

* ner-org-pilot — low Cohen's κ ≈ 0.35 on ORG vs O (mirrors eg:4.31)
* sentiment-calibrated — high κ after guideline alignment
* toxicity-3class — three raters, moderate Fleiss κ (multi-class + Fleiss)

Bundled as ``window.IaaPresets`` for file:// compatibility.

Run:
    python make_presets.py
"""

from __future__ import annotations

import json
from pathlib import Path


def _cohen_kappa(a: list[str], b: list[str]) -> float:
    n = len(a)
    assert n == len(b) and n > 0
    cats = sorted(set(a) | set(b))
    idx = {c: i for i, c in enumerate(cats)}
    k = len(cats)
    table = [[0] * k for _ in range(k)]
    for x, y in zip(a, b):
        table[idx[x]][idx[y]] += 1
    po = sum(table[i][i] for i in range(k)) / n
    row = [sum(table[i][j] for j in range(k)) for i in range(k)]
    col = [sum(table[i][j] for i in range(k)) for j in range(k)]
    pe = sum((row[i] / n) * (col[i] / n) for i in range(k))
    if abs(1 - pe) < 1e-12:
        return 1.0 if abs(po - pe) < 1e-12 else 0.0
    return (po - pe) / (1 - pe)


def ner_org_pilot() -> dict:
    """Binary ORG tagging with ambiguous subsidiaries → κ ≈ 0.35 (eg:4.31)."""
    # Hand-tuned contingency so κ ≈ 0.35 (eg:4.31):
    # 19 ORG–ORG, 51 O–O, 7 ORG–O, 23 O–ORG → Po=0.70, κ≈0.35
    pairs = (
        [("ORG", "ORG")] * 19
        + [("O", "O")] * 51
        + [("ORG", "O")] * 7  # A tags ORG, B says O (subsidiaries)
        + [("O", "ORG")] * 23  # reverse disagreements
    )
    rows = []
    texts = [
        "Acme Labs opened a Berlin office.",
        "The subsidiary reported Q3 revenue.",
        "Parent brand Acme absorbed Nova Soft.",
        "She works at a consulting firm.",
        "Nova Soft is now an Acme division.",
        "The startup raised a Series A.",
        "Acme Cloud announced a price cut.",
        "Regulators fined the holding company.",
        "A local bakery hired two bakers.",
        "The board of Acme Holdings met.",
    ]
    a_labels = [p[0] for p in pairs]
    b_labels = [p[1] for p in pairs]
    kappa = _cohen_kappa(a_labels, b_labels)
    for i, (la, lb) in enumerate(pairs):
        rows.append(
            {
                "id": f"N{i + 1:03d}",
                "text": texts[i % len(texts)],
                "annotator_a": la,
                "annotator_b": lb,
            }
        )
    return {
        "name": "ner-org-pilot",
        "description": "NER ORG pilot (100 spans). Ambiguous subsidiaries vs parent brands "
        f"drive κ ≈ {kappa:.2f} — stop and revise guidelines (eg:4.31).",
        "defaultMapping": {
            "id": "id",
            "text": "text",
            "raterA": "annotator_a",
            "raterB": "annotator_b",
        },
        "teachingFocus": "low-kappa",
        "expectedKappa": round(kappa, 4),
        "rows": rows,
    }


def sentiment_calibrated() -> dict:
    """High-agreement sentiment after calibration round."""
    pairs = (
        [("positive", "positive")] * 36
        + [("negative", "negative")] * 34
        + [("neutral", "neutral")] * 22
        + [("positive", "neutral")] * 3
        + [("neutral", "positive")] * 2
        + [("negative", "neutral")] * 2
        + [("neutral", "negative")] * 1
    )
    a_labels = [p[0] for p in pairs]
    b_labels = [p[1] for p in pairs]
    kappa = _cohen_kappa(a_labels, b_labels)
    snippets = [
        "The delivery was on time and intact.",
        "Battery life is worse than advertised.",
        "Packaging was fine; product is average.",
        "Support resolved my ticket in one day.",
        "The app crashes when I export CSV.",
        "Neutral tone in the product FAQ.",
    ]
    rows = []
    for i, (la, lb) in enumerate(pairs):
        rows.append(
            {
                "id": f"S{i + 1:03d}",
                "text": snippets[i % len(snippets)],
                "annotator_a": la,
                "annotator_b": lb,
            }
        )
    return {
        "name": "sentiment-calibrated",
        "description": "Sentiment labels after a calibration round "
        f"(κ ≈ {kappa:.2f}). Shows what 'ready to scale' agreement looks like.",
        "defaultMapping": {
            "id": "id",
            "text": "text",
            "raterA": "annotator_a",
            "raterB": "annotator_b",
        },
        "teachingFocus": "high-kappa",
        "expectedKappa": round(kappa, 4),
        "rows": rows,
    }


def toxicity_3class() -> dict:
    """Three raters on {toxic, borderline, clean} for Fleiss κ."""
    # Each row: (A, B, C)
    triples = (
        [("toxic", "toxic", "toxic")] * 20
        + [("clean", "clean", "clean")] * 28
        + [("borderline", "borderline", "borderline")] * 14
        + [("toxic", "borderline", "toxic")] * 10
        + [("borderline", "clean", "clean")] * 12
        + [("toxic", "toxic", "borderline")] * 8
        + [("borderline", "borderline", "clean")] * 8
    )
    texts = [
        "Personal insult aimed at a user.",
        "Sarcasm about a product feature.",
        "Neutral bug report with screenshots.",
        "Threat wrapped as a joke.",
        "Polite disagreement on policy.",
        "Slur used in a quoted example.",
    ]
    rows = []
    for i, (la, lb, lc) in enumerate(triples):
        rows.append(
            {
                "id": f"T{i + 1:03d}",
                "text": texts[i % len(texts)],
                "annotator_a": la,
                "annotator_b": lb,
                "annotator_c": lc,
            }
        )
    # Pairwise A vs B for Cohen reference
    kappa_ab = _cohen_kappa([t[0] for t in triples], [t[1] for t in triples])
    return {
        "name": "toxicity-3class",
        "description": "Toxicity labels with three raters (toxic / borderline / clean). "
        f"Cohen κ(A,B) ≈ {kappa_ab:.2f}; enable rater C for Fleiss κ.",
        "defaultMapping": {
            "id": "id",
            "text": "text",
            "raterA": "annotator_a",
            "raterB": "annotator_b",
            "raterC": "annotator_c",
        },
        "teachingFocus": "fleiss",
        "expectedKappa": round(kappa_ab, 4),
        "rows": rows,
    }


def main() -> None:
    presets = {
        "ner-org-pilot": ner_org_pilot(),
        "sentiment-calibrated": sentiment_calibrated(),
        "toxicity-3class": toxicity_3class(),
    }
    for name, p in presets.items():
        print(f"{name}: n={len(p['rows'])} expectedKappa={p['expectedKappa']}")

    out = Path(__file__).with_name("presets-bundle.js")
    payload = json.dumps(presets, indent=2)
    out.write_text(
        "/* Generated by make_presets.py — do not edit by hand. */\n"
        "window.IaaPresets = " + payload + ";\n",
        encoding="utf-8",
    )
    print(f"Wrote {out}")


if __name__ == "__main__":
    main()
