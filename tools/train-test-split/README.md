# Train / val / test splitter

Browser lab for **Chapter 1 §1.5** (uses of datasets / holdout evaluation):
split a table into train / validation / test folds and detect **entity ID** and
**temporal** leakage.

**Live path:** `lectures/tools/train-test-split/index.html` (after `build_site.py`)

Pairs with the [EDA dashboard](../eda-dashboard/) and [cleaning workbench](../cleaning/).

## Learning objectives

- Choose random, stratified (by label), or time-based splits
- Set train / val / test ratios and a reproducible seed
- Map entity ID, label, and time columns
- Spot ID overlap across folds and future→past temporal leakage
- Export `split-manifest.json` / `.md` with row indices and leakage report

## Workflow

1. **Learn** — `churn-holdout` → `entity-leak` → `orders-temporal` (switch to time-based)
2. **Map** — entity ID / label / time roles
3. **Split** — method + ratios + seed → fold sizes + leakage badge
4. **Apply** — upload CSV/JSON; export manifest

## Upload rules

- Formats: CSV, JSON (array of objects)
- Max **5,000** rows, **2 MB**

## File layout

```
train-test-split/
├── index.html
├── train-test-split.js / .css
├── lib/
│   ├── parse.js
│   ├── split.js
│   ├── leakage.js
│   └── export.js
└── data/
    ├── make_presets.py
    └── presets-bundle.js
```

## Book anchors

- Ch.1 §1.5 Uses of Datasets · `eg:1.31` churn holdout
- Linked from `part-06-uses-of-datasets`

## QA checklist

- [ ] Churn preset: stratified split, no ID leakage
- [ ] Entity-leak preset: random split flags overlapping `customer_id`
- [ ] Orders-temporal: random flags temporal risk; time-based clears it
- [ ] Export JSON/MD download
