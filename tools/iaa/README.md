# IAA calculator

Interactive browser tool for **Chapter 4 — Data Annotation** (§4.5.2).
One app, three match modes:

| Mode | What you compare | Primary metric |
|------|------------------|----------------|
| **Category** | Document / token class labels | Cohen's κ (+ optional Fleiss) |
| **Spans** | NER offsets, audio speaker turns, video action intervals | Entity P/R/F1 (exact or IoU ≥ τ) |
| **Boxes** | Object bounding boxes | Entity P/R/F1 (IoU ≥ τ) |

Runs entirely client-side — works on GitHub Pages and from `file://`
(classic IIFEs on `window.IaaLib`; presets in `data/presets-bundle.js`).

**Live path:** `lectures/tools/iaa/index.html` (after `build_site.py`)

## Learning objectives

- Treat inter-annotator agreement as a **measurable gate**, not a vibe (§4.5.2).
- Compute **Cohen's κ** from Po and Pe for category labels.
- Score **entity-level** agreement with exact span match or **IoU** (spans and boxes).
- See how τ and “require same label” change F1 — the rule is part of the report.
- Recognize that **low κ / low F1** should stop scale-up until guidelines are revised (`eg:4.31`).

## Workflow

1. **Load data** — pick a preset (filter by mode) or upload CSV/JSON.
2. **Choose match mode** — category / spans / boxes; set IoU τ and label policy.
3. **Map columns** — rater A / B (entity columns hold JSON arrays).
4. **Read meters** — κ or entity F1 / P / R / mean IoU.
5. **Inspect** — contingency (category or matched-label) and per-item disagreements.
6. **Export** — `agreement-report.json` (includes mode + match options).

## Bundled presets

| Preset | Mode | Teaching focus |
|--------|------|----------------|
| `ner-org-pilot` | category | κ ≈ 0.35 — stop and revise (eg:4.31) |
| `sentiment-calibrated` | category | High κ after calibration |
| `toxicity-3class` | category | Three raters → Fleiss κ |
| `intent-routing` | category | Multi-class near-miss intents |
| `ner-spans-pilot` | spans | Boundary drift: exact ≪ IoU F1 |
| `ner-spans-calibrated` | spans | High entity F1 after calibration |
| `audio-diarization` | spans | Speaker time segments (seconds) |
| `video-action-segments` | spans | Temporal action intervals |
| `vision-boxes-pilot` | boxes | Loose/tight boxes; τ matters |
| `vision-boxes-calibrated` | boxes | High box F1 |

Regenerate with `python data/make_presets.py`. Smoke: `node data/smoke_test.mjs`.

## Upload shapes

**Category CSV/JSON:** columns like `annotator_a`, `annotator_b` (optional `annotator_c`).

**Spans JSON fields** (arrays):

```json
{ "id": "D1", "text": "…", "spans_a": [{"start":0,"end":4,"label":"ORG"}], "spans_b": […] }
```

**Boxes:**

```json
{ "id": "I1", "image": "street", "boxes_a": [{"x":10,"y":20,"w":40,"h":50,"label":"car"}], "boxes_b": […] }
```

Also accepts `x1,y1,x2,y2` and audio/video `segments_a` / `segments_b`.

## File layout

```
iaa/
├── index.html
├── iaa.js / iaa.css
├── lib/
│   ├── parse.js
│   ├── kappa.js      # Cohen / Fleiss / category report
│   ├── match.js      # Span/box IoU + entity F1
│   └── export.js
└── data/
    ├── make_presets.py
    ├── presets-bundle.js
    └── smoke_test.mjs
```

## Book anchors

- §4.5.2 Inter-Annotator Agreement
- Table 4.4 (κ, Fleiss, Krippendorff's α)
- `eg:4.31` Low Kappa Triggers Guideline Revision
- Linked from `part-06-quality-control`
