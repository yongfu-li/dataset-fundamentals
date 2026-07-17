---
marp: true
title: Chapter 1 — Exploring a dataset
paginate: true
---

# Chapter 1 — Exploring a dataset

Discover whether a concrete file meets the quality bar

---

## Learning objectives

- State three early questions exploration should answer
- Match common tools to dataset size and structure
- Outline a first-pass profiling pattern (summaries + visuals + missingness)

---

## Why explore first?

- Turns an unfamiliar file into a mental model
- Surfaces seasonal patterns, outliers, missing fields
- Shapes which quality issues to prioritize
- Does not replace formal cleaning—reveals where it is needed

---

## Three early questions

- What is in the table?
- What looks suspicious?
- What analysis goals remain feasible given defects?

---

## Tools for exploration

- Spreadsheets — small tables, quick looks
- SQL — filter and aggregate relational stores
- pandas — reproducible profiling scripts
- Tableau / Power BI — shared interactive views

---

## Example 1.20 — Household incomes EDA

- Setting: compact income table + pandas profiling
- Key idea: summaries, distribution checks, missingness
- Adapt the script to any new CSV
- Try it: `modules/chapter1/example20/`

---

## Takeaways

- Explore before modeling to set expectations
- Tool choice follows size, structure, and audience
- Document what you inspected and what you will fix

---

## Next

- Complete the quiz for this clip
- Then continue to: Uses of datasets
