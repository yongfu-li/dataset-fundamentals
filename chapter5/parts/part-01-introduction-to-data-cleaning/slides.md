---
marp: true
title: Chapter 5 — Introduction to data cleaning
paginate: true
---

# Chapter 5 — Introduction to data cleaning

After collection and annotation, raw tables still need preparation before reliable analysis or supervised training

---

## Learning objectives
- Distinguish cleaning from preprocessing, name four practical motives for both phases
- Recognize schema discipline when joining multiple corpora

---

## Why cleaning matters
- Without cleaning, missing fields, duplicates, inconsistent encodings
- Cross-corpus work makes those defects visible at pipeline scale

---

## Example 5.1 — Missing target values in classification
- Example 5.1 — hands-on module
- Example 5.1 shows a fraud table with blank labels
- Supervised training either drops those rows or invents labels
- Explore the chapter example module
- View files: `modules/chapter5/example1/`

---

## Example 5.2 — Dropping unused identifier columns
- Example 5.2 — hands-on module
- Example 5.2 removes high-cardinality identifiers such as raw transaction IDs that never
- Memory and training time improve without changing the predictive schema
- Explore the chapter example module
- View files: `modules/chapter5/example2/`

---

## Cleaning versus preprocessing
- This book treats cleaning and preprocessing as consecutive phases
- Non-model fields
- Preprocessing transforms cleaned values into representations algorithms expect

---

## Example 5.3 — Duplicate retail transactions
- Example 5.3 — hands-on module
- Example 5.3 shows the same order ID appearing twice after a system retry
- Counting both rows inflates revenue and customer frequency until duplicates are removed or
- Cleaning precedes the scaling and encoding examples introduced later in the chapter
- View files: `modules/chapter5/example3/`

---

## Four recurring motives
- Four motives recur
- Detailed failure modes appear in the next parts; remedies follow in Sections 5.3 and 5.4

---

## Takeaways
- Cleaning makes values trustworthy; preprocessing makes them algorithm-ready
- Both follow annotation and precede exploration-heavy modeling work
- Schema alignment across sources is itself a cleaning task

---

## Next
- Complete the quiz for this part
- Continue to missing data, MCAR, MAR, MNAR mechanisms and their causes

