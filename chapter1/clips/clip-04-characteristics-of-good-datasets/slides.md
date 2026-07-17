---
marp: true
title: Chapter 1 — Characteristics of good datasets
paginate: true
---

# Chapter 1 — Characteristics of good datasets

Judge quality as a bundle of task-relative dimensions

---

## Learning objectives

- List five quality dimensions from the chapter
- Diagnose accuracy, completeness, and consistency defects
- Explain why metadata and documentation matter

---

## Five quality dimensions

- **Accuracy** — values reflect ground truth closely enough
- **Completeness** — needed records and attributes are present
- **Consistency** — uniform formats, units, definitions
- **Relevance** — data answers the intended question
- **Timeliness** — data is sufficiently up to date

---

## Example 1.11 — Incorrect transaction

- Setting: financial ledger with a mis-keyed amount
- Key idea: one extra zero shifts monthly revenue by 10×
- Accuracy failures distort aggregates and forecasts
- Try it: `modules/chapter1/example11/`

---

## Completeness and consistency

- Missing age or diagnosis fields bias clinical models (eg:1.12)
- Mixed date formats break chronological sorting (eg:1.13)
- Defects interact: complete yet inaccurate still fails the task
- Systematic repair is deferred to later chapters

---

## Metadata and documentation

- Metadata: who, when, schema, units, provenance
- Documentation: how to interpret and reuse the file
- Example 1.14: weather dataset metadata fields
- Try it: `modules/chapter1/example14/`

---

## Takeaways

- Quality is multi-dimensional and task-relative
- Spot accuracy, missingness, and format clashes early
- Metadata + docs make datasets usable beyond their author

---

## Next

- Complete the quiz for this clip
- Then continue to: Exploring a dataset
