---
marp: true
title: Chapter 1 — Types of datasets
paginate: true
---

# Chapter 1 — Types of datasets

This clip classifies how datasets are organized

---

## Learning objectives
- Contrast the three structural types, name a typical format for each
- Explain when a dataset is static versus dynamic

---

## Two classification axes
- Datasets are commonly classified along two axes
- Structure covers structured, unstructured, and semi-structured forms
- Temporal behavior covers static snapshots versus continuously updating streams
- Selecting an appropriate representation is a prerequisite for reliable analysis

---

## Structured datasets
- Structured datasets follow a fixed schema: rows and columns with consistent types
- They live comfortably in spreadsheets and relational databases and are generally the
- A retail customer table

---

## Unstructured datasets
- Unstructured data has no predefined row–column model
- Text, images, audio, and video fall here
- Valuable insights often require NLP or image recognition rather than a simple SQL filter
- Social media feedback and medical images are common examples

---

## Semi-structured datasets
- Semi-structured data uses tags or keys
- Example 1.7 shows JSON objects where optional fields appear when relevant
- Open the example 7 module to inspect a concrete sample

---

## Static vs dynamic
- Static datasets change rarely, an archived extract
- Dynamic datasets update continuously, sensor streams or click logs
- The same entity can move between forms over its lifecycle
- Temporal behavior shapes how often you refresh, version, and monitor the data

---

## Takeaways
- Structure and time are independent
- Structured data is easiest to query

---

## Next
- Complete the quiz for this clip
- Complete the quiz, then continue to dataset formats, how these types are stored on disk

