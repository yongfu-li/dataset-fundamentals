---
marp: true
title: Chapter 1 — Types of datasets
paginate: true
---

# Chapter 1 — Types of datasets

Classify datasets by structure and temporal behavior

---

## Learning objectives

- Contrast structured, unstructured, and semi-structured data
- Give a typical format and example for each structural type
- Distinguish static from dynamic datasets

---

## Two classification axes

- **Structure:** structured / unstructured / semi-structured
- **Temporal behavior:** static vs dynamic
- Structure affects how you store, query, and analyze
- Choosing the right representation is a prerequisite for reliable analysis

---

## Structured datasets

- Fixed schema: rows and columns, consistent types
- Common stores: spreadsheets, relational tables, CSV
- Easy to filter, join, and aggregate
- Example: customer table (ID, Name, Email, …)

---

## Unstructured datasets

- No fixed row–column schema
- Text, images, audio, video
- Insights often need NLP or computer vision
- Example: social posts, X-rays, voice recordings

---

## Semi-structured datasets

- Flexible schema with tags or keys (JSON, XML, YAML)
- Nested fields without a rigid relational table
- Example 1.7: JSON objects with varying optional keys
- Try it: `modules/chapter1/example7/`

---

## Static vs dynamic

- **Static:** snapshot that changes rarely (archive census extract)
- **Dynamic:** updates continuously (sensor streams, click logs)
- Same entity can appear in both forms over its lifecycle
- Temporal behavior drives refresh, versioning, and monitoring needs

---

## Takeaways

- Structure and time are independent axes
- Structured data is easiest to query; unstructured needs extraction
- Semi-structured sits between: flexible keys, still machine-readable

---

## Next

- Complete the quiz for this clip
- Then continue to: Dataset formats
