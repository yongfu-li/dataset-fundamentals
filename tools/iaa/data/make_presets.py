"""Generate presets for the IAA calculator (category + span + box modes).

Category (Cohen's κ):
  ner-org-pilot, sentiment-calibrated, toxicity-3class, intent-routing

Spans / time segments (entity F1 + IoU):
  ner-spans-pilot, ner-spans-calibrated, audio-diarization, video-action-segments

Boxes (IoU match):
  vision-boxes-pilot, vision-boxes-calibrated

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


def _span_iou(a: dict, b: dict) -> float:
    inter_s = max(a["start"], b["start"])
    inter_e = min(a["end"], b["end"])
    inter = max(0, inter_e - inter_s)
    union = a["end"] - a["start"] + b["end"] - b["start"] - inter
    return inter / union if union > 0 else 0.0


def _box_iou(a: dict, b: dict) -> float:
    ax2, ay2 = a["x"] + a["w"], a["y"] + a["h"]
    bx2, by2 = b["x"] + b["w"], b["y"] + b["h"]
    x1, y1 = max(a["x"], b["x"]), max(a["y"], b["y"])
    x2, y2 = min(ax2, bx2), min(ay2, by2)
    inter = max(0, x2 - x1) * max(0, y2 - y1)
    union = a["w"] * a["h"] + b["w"] * b["h"] - inter
    return inter / union if union > 0 else 0.0


def _match_entities(
    list_a: list[dict],
    list_b: list[dict],
    *,
    kind: str,
    threshold: float,
    require_label: bool,
    exact: bool = False,
) -> tuple[int, int, int]:
    """Return tp, fp, fn via greedy matching."""
    candidates: list[tuple[float, int, int]] = []
    for i, ea in enumerate(list_a):
        for j, eb in enumerate(list_b):
            if require_label and ea.get("label") != eb.get("label"):
                continue
            if kind == "boxes":
                score = _box_iou(ea, eb)
                ok = score >= threshold
            elif exact:
                score = 1.0 if ea["start"] == eb["start"] and ea["end"] == eb["end"] else 0.0
                ok = score == 1.0
            else:
                score = _span_iou(ea, eb)
                ok = score >= threshold
            if ok:
                candidates.append((score, i, j))
    candidates.sort(reverse=True)
    used_a: set[int] = set()
    used_b: set[int] = set()
    tp = 0
    for _, i, j in candidates:
        if i in used_a or j in used_b:
            continue
        used_a.add(i)
        used_b.add(j)
        tp += 1
    fp = len(list_b) - len(used_b)
    fn = len(list_a) - len(used_a)
    return tp, fp, fn


def _entity_f1(docs: list[tuple[list, list]], **kwargs) -> float:
    tp = fp = fn = 0
    for a, b in docs:
        t, f, n = _match_entities(a, b, **kwargs)
        tp += t
        fp += f
        fn += n
    if tp + fp == 0 and tp + fn == 0:
        return 1.0
    p = tp / (tp + fp) if tp + fp else 0.0
    r = tp / (tp + fn) if tp + fn else 0.0
    return (2 * p * r / (p + r)) if p + r else 0.0


def ner_org_pilot() -> dict:
    """Binary ORG tagging with ambiguous subsidiaries → κ ≈ 0.35 (eg:4.31)."""
    pairs = (
        [("ORG", "ORG")] * 19
        + [("O", "O")] * 51
        + [("ORG", "O")] * 7
        + [("O", "ORG")] * 23
    )
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
    rows = [
        {
            "id": f"N{i + 1:03d}",
            "text": texts[i % len(texts)],
            "annotator_a": la,
            "annotator_b": lb,
        }
        for i, (la, lb) in enumerate(pairs)
    ]
    return {
        "name": "ner-org-pilot",
        "mode": "category",
        "modality": "text",
        "description": "NER ORG pilot (100 token labels). Ambiguous subsidiaries vs parent brands "
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
    pairs = (
        [("positive", "positive")] * 36
        + [("negative", "negative")] * 34
        + [("neutral", "neutral")] * 22
        + [("positive", "neutral")] * 3
        + [("neutral", "positive")] * 2
        + [("negative", "neutral")] * 2
        + [("neutral", "negative")] * 1
    )
    kappa = _cohen_kappa([p[0] for p in pairs], [p[1] for p in pairs])
    snippets = [
        "The delivery was on time and intact.",
        "Battery life is worse than advertised.",
        "Packaging was fine; product is average.",
        "Support resolved my ticket in one day.",
        "The app crashes when I export CSV.",
        "Neutral tone in the product FAQ.",
    ]
    rows = [
        {
            "id": f"S{i + 1:03d}",
            "text": snippets[i % len(snippets)],
            "annotator_a": la,
            "annotator_b": lb,
        }
        for i, (la, lb) in enumerate(pairs)
    ]
    return {
        "name": "sentiment-calibrated",
        "mode": "category",
        "modality": "text",
        "description": "Document sentiment after calibration "
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
    rows = [
        {
            "id": f"T{i + 1:03d}",
            "text": texts[i % len(texts)],
            "annotator_a": la,
            "annotator_b": lb,
            "annotator_c": lc,
        }
        for i, (la, lb, lc) in enumerate(triples)
    ]
    kappa_ab = _cohen_kappa([t[0] for t in triples], [t[1] for t in triples])
    return {
        "name": "toxicity-3class",
        "mode": "category",
        "modality": "text",
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


def intent_routing() -> dict:
    """Multi-class chatbot intents — moderate κ from near-miss classes."""
    pairs = (
        [("refund", "refund")] * 18
        + [("shipping", "shipping")] * 16
        + [("tech_support", "tech_support")] * 14
        + [("billing", "billing")] * 12
        + [("other", "other")] * 10
        + [("refund", "billing")] * 8
        + [("billing", "refund")] * 6
        + [("shipping", "other")] * 5
        + [("tech_support", "other")] * 4
        + [("other", "shipping")] * 3
    )
    kappa = _cohen_kappa([p[0] for p in pairs], [p[1] for p in pairs])
    texts = [
        "I was charged twice for one order.",
        "Where is my package?",
        "The app will not open on Android.",
        "Can I change my payment method?",
        "Thanks for the newsletter.",
    ]
    rows = [
        {
            "id": f"I{i + 1:03d}",
            "text": texts[i % len(texts)],
            "annotator_a": la,
            "annotator_b": lb,
        }
        for i, (la, lb) in enumerate(pairs)
    ]
    return {
        "name": "intent-routing",
        "mode": "category",
        "modality": "text",
        "description": "Chatbot intent labels (5 classes). Near-miss refund↔billing "
        f"keeps κ ≈ {kappa:.2f} — schema clarity matters beyond binary tags.",
        "defaultMapping": {
            "id": "id",
            "text": "text",
            "raterA": "annotator_a",
            "raterB": "annotator_b",
        },
        "teachingFocus": "multiclass",
        "expectedKappa": round(kappa, 4),
        "rows": rows,
    }


def ner_spans_pilot() -> dict:
    """Character spans: boundary disagreements hurt exact match more than IoU."""
    docs: list[tuple[str, list, list]] = [
        (
            "Acme Labs opened a Berlin office.",
            [{"start": 0, "end": 9, "label": "ORG"}],
            [{"start": 0, "end": 9, "label": "ORG"}],
        ),
        (
            "Parent brand Acme absorbed Nova Soft yesterday.",
            [{"start": 13, "end": 17, "label": "ORG"}, {"start": 27, "end": 36, "label": "ORG"}],
            [{"start": 13, "end": 17, "label": "ORG"}, {"start": 27, "end": 31, "label": "ORG"}],
        ),
        (
            "The subsidiary reported Q3 revenue.",
            [{"start": 4, "end": 14, "label": "ORG"}],
            [],
        ),
        (
            "She works at a consulting firm downtown.",
            [],
            [],
        ),
        (
            "Nova Soft is now an Acme division.",
            [{"start": 0, "end": 9, "label": "ORG"}, {"start": 20, "end": 24, "label": "ORG"}],
            [{"start": 0, "end": 9, "label": "ORG"}],
        ),
        (
            "Regulators fined the holding company.",
            [],
            [{"start": 21, "end": 36, "label": "ORG"}],
        ),
        (
            "Acme Cloud announced a price cut.",
            [{"start": 0, "end": 10, "label": "ORG"}],
            [{"start": 0, "end": 4, "label": "ORG"}],
        ),
        (
            "The board of Acme Holdings met in June.",
            [{"start": 13, "end": 26, "label": "ORG"}],
            [{"start": 13, "end": 17, "label": "ORG"}],
        ),
        (
            "Berlin and Paris hosted the summit.",
            [{"start": 0, "end": 6, "label": "LOC"}, {"start": 11, "end": 16, "label": "LOC"}],
            [{"start": 0, "end": 6, "label": "LOC"}, {"start": 11, "end": 16, "label": "LOC"}],
        ),
        (
            "Contact Jane Doe at Acme for quotes.",
            [{"start": 8, "end": 16, "label": "PER"}, {"start": 20, "end": 24, "label": "ORG"}],
            [{"start": 8, "end": 12, "label": "PER"}, {"start": 20, "end": 24, "label": "ORG"}],
        ),
        (
            "SoftCorp merged with DataNest last year.",
            [{"start": 0, "end": 8, "label": "ORG"}, {"start": 21, "end": 29, "label": "ORG"}],
            [{"start": 0, "end": 8, "label": "ORG"}, {"start": 21, "end": 29, "label": "ORG"}],
        ),
        (
            "The CEO of Orbit Labs resigned.",
            [{"start": 11, "end": 21, "label": "ORG"}],
            [{"start": 11, "end": 16, "label": "ORG"}],
        ),
    ]
    # Duplicate a few patterns to stabilize F1
    docs = docs + docs
    f1_exact = _entity_f1(
        [(a, b) for _, a, b in docs],
        kind="spans",
        threshold=1.0,
        require_label=True,
        exact=True,
    )
    f1_iou = _entity_f1(
        [(a, b) for _, a, b in docs],
        kind="spans",
        threshold=0.5,
        require_label=True,
        exact=False,
    )
    rows = [
        {
            "id": f"NS{i + 1:03d}",
            "text": text,
            "spans_a": spans_a,
            "spans_b": spans_b,
        }
        for i, (text, spans_a, spans_b) in enumerate(docs)
    ]
    return {
        "name": "ner-spans-pilot",
        "mode": "spans",
        "modality": "text",
        "description": "NER character spans with boundary drift. Exact-match F1 ≈ "
        f"{f1_exact:.2f}; IoU≥0.5 F1 ≈ {f1_iou:.2f} — soft match forgives partial overlaps.",
        "defaultMapping": {
            "id": "id",
            "text": "text",
            "raterA": "spans_a",
            "raterB": "spans_b",
        },
        "defaultOptions": {
            "iouThreshold": 0.5,
            "requireLabel": True,
            "spanMatch": "iou",
        },
        "teachingFocus": "boundary-iou",
        "expectedF1": round(f1_iou, 4),
        "rows": rows,
    }


def ner_spans_calibrated() -> dict:
    docs: list[tuple[str, list, list]] = []
    base = [
        (
            "Acme Labs hired two engineers in Berlin.",
            [{"start": 0, "end": 9, "label": "ORG"}, {"start": 33, "end": 39, "label": "LOC"}],
            [{"start": 0, "end": 9, "label": "ORG"}, {"start": 33, "end": 39, "label": "LOC"}],
        ),
        (
            "Jane Doe spoke with Sam Lee yesterday.",
            [{"start": 0, "end": 8, "label": "PER"}, {"start": 20, "end": 27, "label": "PER"}],
            [{"start": 0, "end": 8, "label": "PER"}, {"start": 20, "end": 27, "label": "PER"}],
        ),
        (
            "Orbit Labs and DataNest signed a deal.",
            [{"start": 0, "end": 10, "label": "ORG"}, {"start": 15, "end": 23, "label": "ORG"}],
            [{"start": 0, "end": 10, "label": "ORG"}, {"start": 15, "end": 23, "label": "ORG"}],
        ),
        (
            "No entities appear in this short note.",
            [],
            [],
        ),
        (
            "Paris hosted the Acme summit.",
            [{"start": 0, "end": 5, "label": "LOC"}, {"start": 17, "end": 21, "label": "ORG"}],
            [{"start": 0, "end": 5, "label": "LOC"}, {"start": 17, "end": 21, "label": "ORG"}],
        ),
        (
            "SoftCorp opened an office near Tokyo.",
            [{"start": 0, "end": 8, "label": "ORG"}, {"start": 31, "end": 36, "label": "LOC"}],
            [{"start": 0, "end": 8, "label": "ORG"}, {"start": 31, "end": 36, "label": "LOC"}],
        ),
    ]
    # One mild boundary miss + one label near-miss
    base.append(
        (
            "Visit New York City this spring.",
            [{"start": 5, "end": 18, "label": "LOC"}],
            [{"start": 5, "end": 13, "label": "LOC"}],
        )
    )
    base.append(
        (
            "Contact support at help@acme.test.",
            [{"start": 20, "end": 33, "label": "ORG"}],
            [{"start": 20, "end": 33, "label": "MISC"}],
        )
    )
    docs = base * 3
    f1 = _entity_f1(
        [(a, b) for _, a, b in docs],
        kind="spans",
        threshold=0.5,
        require_label=True,
        exact=False,
    )
    rows = [
        {
            "id": f"NC{i + 1:03d}",
            "text": text,
            "spans_a": spans_a,
            "spans_b": spans_b,
        }
        for i, (text, spans_a, spans_b) in enumerate(docs)
    ]
    return {
        "name": "ner-spans-calibrated",
        "mode": "spans",
        "modality": "text",
        "description": "NER spans after boundary calibration "
        f"(IoU≥0.5 F1 ≈ {f1:.2f}). Toggle exact match to see residual boundary misses.",
        "defaultMapping": {
            "id": "id",
            "text": "text",
            "raterA": "spans_a",
            "raterB": "spans_b",
        },
        "defaultOptions": {
            "iouThreshold": 0.5,
            "requireLabel": True,
            "spanMatch": "iou",
        },
        "teachingFocus": "high-entity-f1",
        "expectedF1": round(f1, 4),
        "rows": rows,
    }


def audio_diarization() -> dict:
    """Time segments (seconds) — same span matcher, audio modality."""
    docs: list[tuple[str, list, list]] = [
        (
            "call-01 greeting",
            [{"start": 0.0, "end": 2.4, "label": "SPEAKER_A"}],
            [{"start": 0.0, "end": 2.5, "label": "SPEAKER_A"}],
        ),
        (
            "call-01 question",
            [{"start": 2.5, "end": 5.0, "label": "SPEAKER_B"}],
            [{"start": 2.6, "end": 4.8, "label": "SPEAKER_B"}],
        ),
        (
            "call-02 overlap",
            [
                {"start": 1.0, "end": 3.0, "label": "SPEAKER_A"},
                {"start": 2.5, "end": 4.0, "label": "SPEAKER_B"},
            ],
            [
                {"start": 1.0, "end": 2.8, "label": "SPEAKER_A"},
                {"start": 2.8, "end": 4.2, "label": "SPEAKER_B"},
            ],
        ),
        (
            "call-03 missed turn",
            [{"start": 0.5, "end": 1.5, "label": "SPEAKER_A"}],
            [
                {"start": 0.5, "end": 1.5, "label": "SPEAKER_A"},
                {"start": 1.6, "end": 2.2, "label": "SPEAKER_B"},
            ],
        ),
        (
            "call-04 label swap",
            [{"start": 0.0, "end": 1.2, "label": "SPEAKER_A"}],
            [{"start": 0.0, "end": 1.2, "label": "SPEAKER_B"}],
        ),
        (
            "call-05 silence",
            [],
            [],
        ),
        (
            "call-06 long turn",
            [{"start": 0.0, "end": 8.0, "label": "SPEAKER_A"}],
            [{"start": 0.2, "end": 7.5, "label": "SPEAKER_A"}],
        ),
        (
            "call-07 three speakers",
            [
                {"start": 0.0, "end": 1.0, "label": "SPEAKER_A"},
                {"start": 1.1, "end": 2.0, "label": "SPEAKER_B"},
                {"start": 2.1, "end": 3.0, "label": "SPEAKER_C"},
            ],
            [
                {"start": 0.0, "end": 1.0, "label": "SPEAKER_A"},
                {"start": 1.1, "end": 2.0, "label": "SPEAKER_B"},
                {"start": 2.0, "end": 3.1, "label": "SPEAKER_C"},
            ],
        ),
    ]
    docs = docs * 2
    f1 = _entity_f1(
        [(a, b) for _, a, b in docs],
        kind="spans",
        threshold=0.5,
        require_label=True,
        exact=False,
    )
    rows = [
        {
            "id": f"AD{i + 1:03d}",
            "utterance": name,
            "segments_a": seg_a,
            "segments_b": seg_b,
        }
        for i, (name, seg_a, seg_b) in enumerate(docs)
    ]
    return {
        "name": "audio-diarization",
        "mode": "spans",
        "modality": "audio",
        "description": "Speaker time segments (seconds). Same IoU span matcher as NER — "
        f"F1 ≈ {f1:.2f} under IoU≥0.5 with label match (speaker ID).",
        "defaultMapping": {
            "id": "id",
            "text": "utterance",
            "raterA": "segments_a",
            "raterB": "segments_b",
        },
        "defaultOptions": {
            "iouThreshold": 0.5,
            "requireLabel": True,
            "spanMatch": "iou",
        },
        "teachingFocus": "audio-segments",
        "expectedF1": round(f1, 4),
        "rows": rows,
    }


def video_action_segments() -> dict:
    """Temporal action intervals on video clips."""
    docs: list[tuple[str, list, list]] = [
        (
            "clip-pour coffee",
            [{"start": 1.0, "end": 3.5, "label": "pour"}],
            [{"start": 1.1, "end": 3.4, "label": "pour"}],
        ),
        (
            "clip-open door",
            [{"start": 0.5, "end": 2.0, "label": "open_door"}],
            [{"start": 0.5, "end": 1.6, "label": "open_door"}],
        ),
        (
            "clip-two actions",
            [
                {"start": 0.0, "end": 1.5, "label": "walk"},
                {"start": 1.6, "end": 3.0, "label": "sit"},
            ],
            [
                {"start": 0.0, "end": 1.4, "label": "walk"},
                {"start": 1.7, "end": 3.1, "label": "sit"},
            ],
        ),
        (
            "clip-missed wave",
            [{"start": 2.0, "end": 2.8, "label": "wave"}],
            [],
        ),
        (
            "clip-label confusion",
            [{"start": 0.0, "end": 2.0, "label": "run"}],
            [{"start": 0.0, "end": 2.0, "label": "walk"}],
        ),
        (
            "clip-idle",
            [],
            [],
        ),
        (
            "clip-long cook",
            [{"start": 5.0, "end": 20.0, "label": "cook"}],
            [{"start": 4.5, "end": 19.0, "label": "cook"}],
        ),
        (
            "clip-pick place",
            [
                {"start": 0.2, "end": 1.0, "label": "pick"},
                {"start": 1.1, "end": 2.0, "label": "place"},
            ],
            [
                {"start": 0.2, "end": 1.0, "label": "pick"},
                {"start": 1.0, "end": 2.1, "label": "place"},
            ],
        ),
    ]
    docs = docs * 2
    f1 = _entity_f1(
        [(a, b) for _, a, b in docs],
        kind="spans",
        threshold=0.5,
        require_label=True,
        exact=False,
    )
    rows = [
        {
            "id": f"VA{i + 1:03d}",
            "clip": name,
            "segments_a": seg_a,
            "segments_b": seg_b,
        }
        for i, (name, seg_a, seg_b) in enumerate(docs)
    ]
    return {
        "name": "video-action-segments",
        "mode": "spans",
        "modality": "video",
        "description": "Video action intervals (seconds). Temporal IoU matching — "
        f"F1 ≈ {f1:.2f}; label mismatches (run↔walk) count as FP/FN when require-label is on.",
        "defaultMapping": {
            "id": "id",
            "text": "clip",
            "raterA": "segments_a",
            "raterB": "segments_b",
        },
        "defaultOptions": {
            "iouThreshold": 0.5,
            "requireLabel": True,
            "spanMatch": "iou",
        },
        "teachingFocus": "video-temporal",
        "expectedF1": round(f1, 4),
        "rows": rows,
    }


def vision_boxes_pilot() -> dict:
    """Bounding boxes with loose vs tight annotations."""
    docs: list[tuple[str, list, list]] = [
        (
            "street-car",
            [{"x": 40, "y": 60, "w": 80, "h": 50, "label": "car"}],
            [{"x": 42, "y": 62, "w": 76, "h": 48, "label": "car"}],
        ),
        (
            "street-ped",
            [{"x": 10, "y": 20, "w": 30, "h": 70, "label": "person"}],
            [{"x": 8, "y": 18, "w": 40, "h": 80, "label": "person"}],
        ),
        (
            "loose-box",
            [{"x": 100, "y": 100, "w": 40, "h": 40, "label": "sign"}],
            [{"x": 90, "y": 90, "w": 70, "h": 70, "label": "sign"}],
        ),
        (
            "missed-bike",
            [{"x": 200, "y": 150, "w": 50, "h": 40, "label": "bike"}],
            [],
        ),
        (
            "extra-box",
            [],
            [{"x": 5, "y": 5, "w": 20, "h": 20, "label": "car"}],
        ),
        (
            "two-cars",
            [
                {"x": 10, "y": 40, "w": 60, "h": 40, "label": "car"},
                {"x": 120, "y": 45, "w": 55, "h": 38, "label": "car"},
            ],
            [
                {"x": 12, "y": 42, "w": 58, "h": 38, "label": "car"},
                {"x": 118, "y": 44, "w": 60, "h": 40, "label": "car"},
            ],
        ),
        (
            "class-swap",
            [{"x": 50, "y": 50, "w": 40, "h": 40, "label": "truck"}],
            [{"x": 52, "y": 52, "w": 38, "h": 38, "label": "car"}],
        ),
        (
            "tiny-iou",
            [{"x": 0, "y": 0, "w": 50, "h": 50, "label": "dog"}],
            [{"x": 40, "y": 40, "w": 50, "h": 50, "label": "dog"}],
        ),
        (
            "empty-frame",
            [],
            [],
        ),
        (
            "bus-tight",
            [{"x": 30, "y": 80, "w": 120, "h": 60, "label": "bus"}],
            [{"x": 32, "y": 82, "w": 115, "h": 58, "label": "bus"}],
        ),
    ]
    docs = docs * 2
    f1_05 = _entity_f1(
        [(a, b) for _, a, b in docs],
        kind="boxes",
        threshold=0.5,
        require_label=True,
    )
    f1_03 = _entity_f1(
        [(a, b) for _, a, b in docs],
        kind="boxes",
        threshold=0.3,
        require_label=True,
    )
    rows = [
        {
            "id": f"VB{i + 1:03d}",
            "image": name,
            "boxes_a": boxes_a,
            "boxes_b": boxes_b,
        }
        for i, (name, boxes_a, boxes_b) in enumerate(docs)
    ]
    return {
        "name": "vision-boxes-pilot",
        "mode": "boxes",
        "modality": "image",
        "description": "Object boxes with loose/tight disagreements. "
        f"F1 ≈ {f1_05:.2f} at IoU≥0.5; ≈ {f1_03:.2f} at IoU≥0.3 — threshold is a policy choice.",
        "defaultMapping": {
            "id": "id",
            "text": "image",
            "raterA": "boxes_a",
            "raterB": "boxes_b",
        },
        "defaultOptions": {"iouThreshold": 0.5, "requireLabel": True},
        "teachingFocus": "box-iou",
        "expectedF1": round(f1_05, 4),
        "rows": rows,
    }


def vision_boxes_calibrated() -> dict:
    docs: list[tuple[str, list, list]] = [
        (
            "park-bench",
            [{"x": 20, "y": 40, "w": 80, "h": 40, "label": "bench"}],
            [{"x": 22, "y": 41, "w": 78, "h": 39, "label": "bench"}],
        ),
        (
            "park-dog",
            [{"x": 100, "y": 90, "w": 45, "h": 35, "label": "dog"}],
            [{"x": 101, "y": 91, "w": 44, "h": 34, "label": "dog"}],
        ),
        (
            "desk-laptop",
            [{"x": 50, "y": 60, "w": 70, "h": 45, "label": "laptop"}],
            [{"x": 50, "y": 60, "w": 70, "h": 45, "label": "laptop"}],
        ),
        (
            "desk-mug",
            [{"x": 140, "y": 80, "w": 25, "h": 30, "label": "mug"}],
            [{"x": 141, "y": 81, "w": 24, "h": 29, "label": "mug"}],
        ),
        (
            "empty",
            [],
            [],
        ),
        (
            "two-people",
            [
                {"x": 10, "y": 20, "w": 35, "h": 90, "label": "person"},
                {"x": 60, "y": 25, "w": 32, "h": 88, "label": "person"},
            ],
            [
                {"x": 11, "y": 21, "w": 34, "h": 89, "label": "person"},
                {"x": 61, "y": 26, "w": 31, "h": 87, "label": "person"},
            ],
        ),
    ]
    # One residual miss
    docs.append(
        (
            "partial-overlap",
            [{"x": 0, "y": 0, "w": 60, "h": 60, "label": "box"}],
            [{"x": 20, "y": 20, "w": 60, "h": 60, "label": "box"}],
        )
    )
    docs = docs * 3
    f1 = _entity_f1(
        [(a, b) for _, a, b in docs],
        kind="boxes",
        threshold=0.5,
        require_label=True,
    )
    rows = [
        {
            "id": f"VC{i + 1:03d}",
            "image": name,
            "boxes_a": boxes_a,
            "boxes_b": boxes_b,
        }
        for i, (name, boxes_a, boxes_b) in enumerate(docs)
    ]
    return {
        "name": "vision-boxes-calibrated",
        "mode": "boxes",
        "modality": "image",
        "description": "Calibrated bounding boxes "
        f"(IoU≥0.5 F1 ≈ {f1:.2f}). Contrast with the pilot to show guideline impact.",
        "defaultMapping": {
            "id": "id",
            "text": "image",
            "raterA": "boxes_a",
            "raterB": "boxes_b",
        },
        "defaultOptions": {"iouThreshold": 0.5, "requireLabel": True},
        "teachingFocus": "high-box-f1",
        "expectedF1": round(f1, 4),
        "rows": rows,
    }


def main() -> None:
    builders = [
        ner_org_pilot,
        sentiment_calibrated,
        toxicity_3class,
        intent_routing,
        ner_spans_pilot,
        ner_spans_calibrated,
        audio_diarization,
        video_action_segments,
        vision_boxes_pilot,
        vision_boxes_calibrated,
    ]
    presets = {}
    for fn in builders:
        p = fn()
        presets[p["name"]] = p
        metric = p.get("expectedF1", p.get("expectedKappa"))
        print(f"{p['name']}: mode={p['mode']} n={len(p['rows'])} metric={metric}")

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
