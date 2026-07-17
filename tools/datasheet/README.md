# Datasheet / data-card builder

Guided browser lab for **dataset documentation** (book §8.2–8.3). Learners load sample data, complete Datasheet for Datasets or Data Card prompts, and export human-readable Markdown plus machine-readable JSON metadata.

## Learning objectives

- Explain why documentation is a deliverable, not an afterthought.
- List key metadata fields: motivation, composition, collection, uses, limitations.
- Build a **data dictionary** from sample data (types, missingness, sample values).
- Export `datasheet.md` and `datasheet-metadata.json` for a toy dataset.

## Workflow

1. **Load sample data** — preset or upload CSV/JSON (≤ 2 MB, ≤ 5000 rows).
2. **Choose template** — Datasheet for Datasets or Data Card.
3. **Fill identity** — name, version, creators, license, contact.
4. **Complete prompts** — composition may auto-fill from the sample profile.
5. **Edit data dictionary** — add human descriptions per column.
6. **Preview** — live Markdown preview.
7. **Export** — `datasheet.md`, `datasheet-metadata.json`, and `LICENSE` (matched from the license field).

## Release bundle

| File | Purpose |
|------|---------|
| `datasheet.md` | Human-readable documentation |
| `datasheet-metadata.json` | Machine-readable metadata + data dictionary |
| `LICENSE` | Full legal text for listed licenses (CC BY 4.0, CC0, MIT, Apache-2.0) plus a notice header with dataset name, creators, contact, and SPDX id. **Other…** exports a stub to fill in. |

License texts are shared under `lectures/assets/` (`licenses-bundle.js`, `licenses.js`) with the [license chooser](../license-chooser/). Regenerate (optional; re-fetch from upstream):

```bash
python ../../assets/make_licenses.py
```

## Presets

| Preset | Use |
|--------|-----|
| `hiring-applicants` | Fairness-style tabular sample (group, label, score) |
| `climate-sensors` | Sensor log with timestamps and quality flags |

Regenerate presets (includes default documentation prompts per dataset):

```bash
python data/make_presets.py
```

## Preset defaults

Each preset ships with **pre-filled documentation** (Datasheet + Data Card templates), identity fields, and column descriptions so exported Markdown has no `_Not provided._` sections out of the box. Learners can edit any field before export.

## JSON metadata shape

`datasheet-metadata.json` includes:

- `template`, `dataset` (identity fields)
- `documentation` (section id → title + text)
- `sample_data` (when loaded): `source`, `row_count`, `profile`, `data_dictionary`

## Book anchors

- §8.2 Key Components of Dataset Documentation
- §8.3 Creating Effective Documentation
- Linked from `part-02-metadata-and-data-dictionaries` and `part-04-creating-effective-documentation`.

## QA checklist

- [x] Loads under `http://` and `file://`
- [x] Presets infer row/column counts and data dictionary
- [x] CSV/JSON upload profiles sample data
- [x] Template toggle switches section prompts
- [x] Live Markdown preview updates on input
- [x] Export MD produces valid Markdown
- [x] Export JSON includes `sample_data` and `data_dictionary` when sample loaded
