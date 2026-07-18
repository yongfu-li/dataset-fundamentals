# Sampling tool

Browser-based lab for Chapter 2 sampling designs (Sections 2.5–2.6).

**Live path:** `lectures/tools/sampling/index.html` (after `build_site.py`)

## Learning objectives

- Compare simple random, stratified, cluster, systematic, convenience, and snowball sampling on the same population
- Map dataset columns to roles (ID, strata, cluster, order, referrer, x, y)
- Interpret population vs sample distribution charts and bias callouts
- Export a sample plus metadata for discussion or assignments

## Preset datasets

| File | Book anchor | Default method to try |
|------|-------------|------------------------|
| `employee-roster.json` | eg:2.10, eg:2.11 | SRS or stratified by `department` |
| `clinic-patients.json` | eg:2.12 | Cluster by `clinic_id` |
| `ordered-survey.json` | Section 2.6.1 | Systematic on `list_position` |
| `campus-arrivals.json` | eg:2.14 | Convenience on `arrival_time` |
| `gig-worker-network.json` | eg:2.15 | Snowball via `referrer_id` |
| `spatial-population.json` | visual bias | SRS + scatter map |

## Upload rules

- Formats: `.csv` or `.json` (array of objects)
- Max **5,000 rows**, **2 MB**
- Required mapping: **ID** column (unique, non-empty)
- Method-specific columns: strata, cluster, order, referrer (see in-app wizard)

## Regenerate site pages

```bash
python .cursor/skills/book-slides/scripts/build_site.py lectures/
```

This refreshes `tools/sampling/index.html` and clip links; it does **not** overwrite `sampling.js`, `lib/`, `data/`, or `sampling.css`.

## Manual QA checklist

- [ ] Open `lectures/tools/sampling/index.html` via **file://** or a local static server — the tool UI (not only the quiz) should appear
- [ ] Each preset loads and shows row/column summary
- [ ] Each sampling method runs without console errors
- [ ] Upload a small CSV and JSON with custom column mapping
- [ ] Oversized file (>2 MB or >5000 rows) shows a clear error
- [ ] Snowball without referrer column shows validation error
- [ ] Export downloads `sample.csv`, `sample.json`, `sampling-metadata.json`
- [ ] Quiz at bottom scores correctly
- [ ] Chapter 2 clips 06–07 link to the sampling tool

**Note:** Scripts are classic (non-module) and presets are embedded in `data/presets-bundle.js` so the tool works under `file://` as well as GitHub Pages.

## Library modules

| Module | Role |
|--------|------|
| `lib/rng.js` | Seeded PRNG for reproducible samples |
| `lib/parse.js` | CSV/JSON upload and preset loading |
| `lib/schema.js` | Column mapping and validation |
| `lib/sample.js` | Pure sampling functions |
| `lib/stats.js` | Distribution compare and bias hints |
| `lib/export.js` | Client-side download helpers |
