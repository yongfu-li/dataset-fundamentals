# Scaling / encoding lab

Browser lab for **Chapter 5 §5.4** (preprocessing): see how min–max, z-score,
log, one-hot, and label encoding change feature geometry.

**Live path:** `lectures/tools/scaling-encoding/index.html` (after `build_site.py`)

Pairs with the [cleaning workbench](../cleaning/) (upstream) and
[train/test splitter](../train-test-split/) (downstream). Accepts cleaning/EDA
handoff (`?from=cleaning` / `?from=eda`); can send transformed rows to the splitter.

## Learning objectives

- Choose min–max vs z-score vs log1p and see histograms + scatter shift
- One-hot nominal categories; label-encode true ordinals
- Recognize target-encoding leakage when fit on the full table
- Export transformed CSV + `transform-report.json` / `.md` with fit params

## Workflow

1. **Learn** — `knn-age-income` → z-score; `product-colors` → one-hot; `apparel-size` → label; `skewed-spend` → log1p
2. **Compare** — leave scale on none, then toggle methods; watch axes
3. **Encode** — try target encoding and read the leak warning
4. **Apply** — upload CSV/JSON; export or send to splitter

## Upload rules

- Formats: CSV, JSON (array of objects)
- Max **5,000** rows, **2 MB**

## File layout

```
scaling-encoding/
├── index.html
├── scaling-encoding.js / .css
├── lib/
│   ├── parse.js
│   ├── transform.js
│   ├── charts.js
│   └── export.js
└── data/
    ├── make_presets.py
    ├── presets-bundle.js
    └── smoke_test.mjs
```

## Book anchors

- Ch.5 §5.4 · `eg:5.46` (scale), `eg:5.47` (one-hot), `eg:5.48` (label)
- Linked from `part-06-preprocessing-scaling-and-encoding`

## QA checklist

- [ ] knn-age-income: raw scatter income-dominated; z-score / min-max equalizes axes
- [ ] product-colors: one-hot adds `color_*` columns
- [ ] apparel-size: label maps Small=0, Medium=1, Large=2
- [ ] Target encode warns about leakage
- [ ] Export CSV + report; handoff from cleaning loads
