---
marp: true
title: Chapter 1 — Dataset formats
paginate: true
---

# Chapter 1 — Dataset formats

Match storage formats to structure, volume, and tools

---

## Learning objectives

- Name common formats for tabular, hierarchical, and geospatial data
- Explain when CSV, SQL, HDF5, or GeoJSON is a fit
- Link format choice to downstream tooling

---

## Why format matters

- Format is how structure is serialized on disk
- Wrong format creates friction in the pipeline
- Match format to structure, volume, and tools
- Complements the type taxonomy from the previous clip

---

## Common formats at a glance

- **CSV** — simple tabular exchange
- **SQL tables** — queryable structured stores
- **JSON / GeoJSON** — nested or spatial features
- **HDF5** — large scientific / array datasets

---

## Example 1.8 — SQL format

- Setting: relational tables with typed columns
- Key idea: schema + queries for filtering and joins
- Fits structured datasets with stable attributes
- Try it: `modules/chapter1/example8/`

---

## Example 1.9 — HDF5

- Setting: hierarchical binary store for arrays
- Key idea: efficient read/write for large numeric data
- Common in scientific and ML feature pipelines
- Try it: `modules/chapter1/example9/`

---

## Choosing a format

- Start from structure (tabular vs nested vs spatial)
- Consider size, update rate, and who will query it
- Prefer formats your stack already supports well
- Document the choice in metadata (next quality topics)

---

## Takeaways

- Format = serialization of structure
- CSV and SQL dominate everyday tables
- HDF5 and GeoJSON serve specialized shapes and scales

---

## Next

- Complete the quiz for this clip
- Then continue to: Characteristics of good datasets
