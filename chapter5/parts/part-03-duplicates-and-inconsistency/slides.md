---
marp: true
title: Chapter 5 — Duplicates and inconsistency
paginate: true
---

# Chapter 5 — Duplicates and inconsistency

Duplicate rows and inconsistent encodings silently distort counts, joins, and models

---

## Learning objectives
- Explain duplicate impact on aggregates and training
- Describe how free-text categories hide structure

---

## Duplicate data — causes and impact
- Duplicates arise from system retries, merged exports, copy-paste ETL
- Example 5.14 shows duplicate purchase rows
- Deduplication is not cosmetic, it changes business numbers

---

## Example 5.14 — Duplicate customer purchase rows
- Example 5.14 — hands-on module
- The retail retry pattern
- Explore the chapter example module
- View files: `modules/chapter5/example14/`

---

## Inconsistent data — formats and units
- Inconsistent data is common when sources span departments or time periods
- Example 5.18 mixes date formats, gender encodings, and measurement units in one table
- Example 5.19 shows customer ID formats that block joins
- Example 5.20 splits Male versus M into separate categories
- Example 5.21 shows weeks lost normalizing free-text cities

---

## Example 5.18 — Mixed dates, gender, and units
- Example 5.18 — hands-on module
- A checklist of silent parse failures
- Explore the chapter example module
- View files: `modules/chapter5/example18/`

---

## Join and aggregation failures
- Inconsistent keys prevent reliable joins across tables
- Mixed currencies or units make sums meaningless until converted
- Split labels inflate cardinality and starve rare categories of support
- Exploration in Chapter 6 surfaces many of these patterns

---

## Takeaways
- Duplicates change revenue, sample weights, and runtime
- Inconsistency breaks time logic and joins
- Standardize formats early with explicit parsing rules and canonical category maps

---

## Next
- Complete the quiz for this part
- Continue to outliers, irrelevant features, and class imbalance

