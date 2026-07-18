# Version timeline

Interactive browser tool for **Chapter 8 — Dataset Documentation and Version Control** (§8.4).
Step through v1 → v2 → v3 of a dataset, inspect schema and label drift, and export a version manifest.

Runs entirely client-side — works on GitHub Pages and from `file://`
(classic IIFEs on `window.VersionTimelineLib`; presets in `data/presets-bundle.js`).

**Live path:** `lectures/tools/version-timeline/index.html` (after `build_site.py`)

## Learning objectives

- Distinguish **documentation** (what fields mean) from **version control** (what changed over time).
- Read a version timeline with commit-style messages and dates (§8.4, `eg:8.20`).
- Spot **row churn**, **label drift**, and **schema drift** between releases (`eg:8.2`).
- Export a **version manifest** for release review.

## Learn → apply workflow

1. **Learn** — run preset `feature-drift-pilot`; step v1 → v3.
2. **Prepare your data** — either:
   - **JSON:** edit `version-chain-template.json` (download from the tool), or
   - **CSV:** export one CSV per release from Git/Excel/DVC; each must have an `id` column.
3. **Document** — use the [datasheet builder](../datasheet/index.html) + [metadata checker](../metadata-checker/index.html).
4. **Apply** — upload your chain; diff versions; export `version-manifest.json`.

## Upload formats

### version-chain.json

```json
{
  "name": "my-dataset",
  "versions": [
    {
      "id": "v1.0.0",
      "date": "2024-01-15",
      "message": "Initial release",
      "columns": ["id", "text", "label"],
      "rows": [{ "id": "R01", "text": "...", "label": "positive" }],
      "renames": []
    },
    {
      "id": "v2.0.0",
      "message": "Renamed label → sentiment",
      "columns": ["id", "text", "sentiment"],
      "rows": [...],
      "renames": [{ "from": "label", "to": "sentiment" }]
    }
  ]
}
```

### CSV snapshots

Select **2+ CSV files** (multi-select). Files are sorted by name; each file becomes one version.
Version id = filename without `.csv`. Requires `id` column in every file.

**Limits:** 2 MB per file, 5,000 rows per version, 10 versions max.

## Bundled presets

| Preset | Teaching focus |
|--------|----------------|
| `feature-drift-pilot` | Sentiment labels grow, then `sentiment`→`label` rename + `source` column (`eg:8.2`) |
| `hiring-schema-evolution` | Add score column, rename `group`, drop `years_experience` |

Regenerate with `python data/make_presets.py`.

## QA checklist

- [x] Loads under `http://` and `file://`
- [x] Preset v1→v2 / v2→v3 diffs behave as expected
- [x] Upload `version-chain.json` and multi-CSV snapshots
- [x] Template download works
- [x] Learn → apply guide visible in UI
- [x] No quiz section in tool UI
