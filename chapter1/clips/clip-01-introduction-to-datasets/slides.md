---
marp: true
title: Chapter 1 — Introduction to datasets
paginate: true
---

# Chapter 1 — Introduction to datasets

Define a dataset as curated records and attributes prepared for a purpose

---

## Learning objectives

- Define what counts as a dataset (vs raw logs)
- Distinguish records (rows) from attributes (columns)
- Recognize the same idea in CSV and JSON forms

---

## What is a dataset?

- Curated collection of data for analysis or decisions
- Typically organized as records and attributes
- Prepared for a purpose: scope, structure, documentation
- Basic unit for ML, statistics, and business intelligence

---

## Records and attributes

- **Record** — one observation (row, instance)
- **Attribute** — one property of that observation (column, field)
- Sales example: one sale = one record; Date, Product, Price = attributes
- Same pattern in healthcare, sensors, and other domains

---

## Example 1.1 — Sample CSV sales data

- Setting: six retail transactions in CSV
- Key idea: each row is one sale; columns describe it
- Try it: `modules/chapter1/example1/`

---

## Example 1.4 — Housing prices in JSON

- Setting: nested property listings (semi-structured)
- Key idea: records need not be flat tables
- Same goal: meaningful, interpretable data for analysis
- Try it: `modules/chapter1/example4/`

---

## Takeaways

- A dataset is curated for a purpose, not just a dump of bytes
- Records + attributes are the core vocabulary
- Form varies (CSV, JSON, images, text); the goal stays insight

---

## Next

- Complete the quiz for this clip
- Then continue to: Types of datasets
