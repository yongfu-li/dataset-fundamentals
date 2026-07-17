# EDA dashboard

Browser lab combining **Chapter 1 §1.4** and **Chapter 6** in one continuous page
(profile → filter → plots → issues → findings). No separate Ch.1 / Ch.6 sessions.

**Live path:** `lectures/tools/eda-dashboard/index.html` (after `build_site.py`)

Pairs with the [cleaning workbench](../cleaning/) for repairs after issue detection.

## Learning objectives

- Profile schema, inferred types, and missingness before modeling
- Read mean / median / SD and skew hints on numeric columns
- Plot univariate histograms or category bars
- Filter rows, group-by aggregates, scatter plots, and a Pearson heatmap
- Capture findings as Markdown hypotheses (correlation ≠ causation)
- Export `eda-summary.json` and `eda-findings.md`

## Workflow

1. **Learn** — `household-incomes` → `healthcare-missing` → `retail-browse`
2. **Explore** — scroll one page: filter → schema → summaries → univariate →
   group-by → scatter → correlation → preview → quality checklist → findings
3. **Apply** — upload CSV/JSON; export summary + findings

## Upload rules

- Formats: CSV, JSON (array of objects)
- Max **5,000** rows, **2 MB**

## File layout

```
eda-dashboard/
├── index.html
├── eda.js / eda.css
├── lib/
│   ├── parse.js
│   ├── profile.js
│   ├── charts.js
│   └── export.js
└── data/
    ├── make_presets.py
    └── presets-bundle.js
```

## Book anchors

- Ch.1 §1.4 Exploring a Dataset · `eg:1.20`, `eg:1.12`
- Ch.6 §6.1–6.4 · four-step workflow · visualization · issue detection
- Linked from `part-05-exploring-a-dataset` (Ch.1) and Ch.6 intro / visualization / issues parts

## QA checklist

- [ ] Presets load under `http://` and `file://`
- [ ] Household defaults univariate plot to Income (not ID)
- [ ] Healthcare preset flags missing cells
- [ ] Retail: group-by, scatter, correlation heatmap all visible without tabs
- [ ] Filter reduces row count; export JSON/MD download
