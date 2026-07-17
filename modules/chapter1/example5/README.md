# Example 1.5 — Geospatial Land-Cover Dataset

**Chapter:** 1  
**Label:** `eg:1.5`  
**Source:** `author/chapter1.tex`  
**Section:** `sec:1.1.3` — The Versatility of Datasets

## Learning objective

Explain why "dataset" cannot mean "table" only: geospatial collections encode locations as geometries with attached properties, not rows and columns.

## Chapter context

Section 1.1.3 argues datasets are versatile in form as well as domain. After two structured examples, the author reaches for geospatial data to show that a "record" can be a geometry (point/line/polygon) plus properties rather than a flat row; Example 1.10 later makes this concrete in GeoJSON.

## What this example shows

A conceptual sketch (no listing in the book) of land-cover or infrastructure data represented as points, lines, or polygons, each carrying a property such as land-cover class or address.

## Key terms

- **Geometry** — the spatial shape of a record — point, line, or polygon.
- **Properties** — the non-spatial attributes attached to a geometry, analogous to columns on a row.

## What you should learn

### From the concept
- A spatial record still has attributes, but they are called "properties" and sit alongside a geometry rather than in flat columns.
- Typical uses cited by the chapter: urban planning, environmental monitoring, infrastructure analysis.

### From the related runnable module
- Example 1.10 shows the same idea as a real GeoJSON `FeatureCollection` you can open and inspect.

## Contents

| File | Role |
|------|------|
| `install.sh` | No-op installer |
| `run.sh` | Prints the structured takeaway |

## Prerequisites

- OS: Linux, macOS, or Windows (Git Bash / WSL recommended for `.sh`)
- Bash

## Setup

```bash
cd modules/chapter1/example5
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Geospatial datasets encode locations as geometries (point / line / polygon), not rows.
Each geometry carries properties — e.g., land-cover class or address — like columns on a record.
Used for: urban planning, environmental monitoring, infrastructure analysis.
See Example 1.10 for a concrete GeoJSON FeatureCollection.
```

## How to interpret the result

Treat this as orientation before Example 1.10: once you expect "geometry + properties" instead of "row + columns," the GeoJSON structure there will look like an application of a rule you already know, not a new one.

## Try it / Reflect

- Before opening Example 1.10, guess which top-level JSON key groups the individual shapes together — then check your guess against `data.geojson`.

## Related examples

- `eg:1.10` — the concrete GeoJSON listing this example previews.
- `eg:1.6` — the other versatility example, for unstructured text instead of geometry.

## Notes

- Prose-only in the manuscript; the GeoJSON listing is Example 1.10.
