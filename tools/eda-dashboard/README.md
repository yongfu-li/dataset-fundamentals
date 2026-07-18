# EDA dashboard

Browser lab combining **Chapter 1 §1.4** and **Chapter 6** in one continuous page
(profile → filter → plots → control-for → issues → findings).

**Live path:** `lectures/tools/eda-dashboard/index.html` (after `build_site.py`)

Pairs with the [cleaning workbench](../cleaning/) — use **Send to cleaning workbench**
to hand off the current view via `sessionStorage`.

## Learning objectives

- Profile schema, inferred types, and missingness before modeling
- Read mean / median / IQR / SD and skew hints on numeric columns
- Plot univariate histograms or IQR box plots
- Apply multiple AND filters (categorical + numeric ranges)
- Group-by, scatter, Pearson heatmap, and partial correlation (control-for Z)
- Capture findings with hypothesis stems (correlation ≠ causation)
- Export `eda-summary.json` / `eda-findings.md`, or send rows to cleaning

## Workflow

1. **Learn** — `household-incomes` → `healthcare-missing` → `retail-browse` → `confounder-icecream`
2. **Explore** — sticky jump TOC; filter → schema → summaries → plots → control-for → issues → findings
3. **Apply** — upload CSV/JSON; export or send to cleaning

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

Shared handoff helper: `lectures/assets/tools-handoff.js`

## Book anchors

- Ch.1 §1.4 Exploring a Dataset · `eg:1.20`, `eg:1.12`
- Ch.6 §6.1–6.4 · visualization · issue detection · correlation ≠ causation
- Linked from Ch.1 `part-05` and Ch.6 intro / visualization / issues parts

## QA checklist

- [ ] Sticky TOC jumps to sections
- [ ] Findings stems append templates
- [ ] Univariate box plot renders for numeric columns
- [ ] Multi-filter AND reduces row counts
- [ ] Ice cream preset: raw |r| strong, partial |r| weaker with control-for on
- [ ] Send to cleaning loads the table with `?from=eda`
- [ ] Export JSON/MD download
