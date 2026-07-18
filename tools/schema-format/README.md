# Schema / format translator

Browser lab for **Chapter 1 §1.2 / §1.2.5**: see the same records as a CSV-like
table, nested JSON, and an inferred schema — and notice when flattening is lossy.

**Live path:** `lectures/tools/schema-format/index.html` (after `build_site.py`)

Pairs with the [EDA dashboard](../eda-dashboard/) once you understand the file shape.

## Learning objectives

- Contrast structured (flat) vs semi-structured (nested) representations
- Switch Table / JSON / Schema views of one dataset
- Flatten nested fields for CSV and read the trade-off warning
- Export `.csv`, `.json`, or inferred `schema.json`

## Workflow

1. **Learn** — `flat-customers` → `housing-nested` → `orders-nested`
2. **Compare** — Table / JSON / Schema tabs
3. **Flatten** — toggle flatten-for-CSV on nested presets
4. **Apply** — paste or upload; export

## Upload rules

- Formats: CSV, JSON (object or array of objects)
- Max **5,000** rows, **2 MB**

## File layout

```
schema-format/
├── index.html
├── schema-format.js / .css
├── lib/
│   ├── parse.js
│   ├── schema.js
│   └── export.js
└── data/
    ├── make_presets.py
    ├── presets-bundle.js
    └── smoke_test.mjs
```

## Book anchors

- Ch.1 §1.2 Types of datasets · §1.2.5 Formats · `eg:1.4` nested housing motif
- Linked from `part-02-types-of-datasets` and `part-03-dataset-formats`

## QA checklist

- [ ] Flat preset: schema classified structured; CSV/JSON interchangeable
- [ ] Housing nested: schema shows `address.city`, semi-structured badge
- [ ] Flatten stringify arrays with warning
- [ ] Export CSV / JSON / schema.json
