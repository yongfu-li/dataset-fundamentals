---
marp: true
title: Chapter 5 — Scaling and encoding
paginate: true
---

# Chapter 5 — Scaling and encoding

Cleaned columns still may sit on incomparable scales or arrive as raw text categories

---

## Learning objectives
- Choose between min-max scaling and standardization
- State leakage risks for target encoding

---

## Normalization and scaling
- Min-max normalization maps values to a bounded range such as zero to one
- Standardization subtracts the mean and divides by standard deviation
- Tree models often need less scaling but still benefit from consistent units

---

## Example 5.46 — Scale age and income for KNN
- Example 5.46 — hands-on module
- Example 5.46 revisits the scale mismatch motif from Section 5.1
- Explore the chapter example module
- View files: `modules/chapter5/example46/`

---

## One-hot encoding
- One-hot encoding creates a binary column per category level
- Use for nominal categories without intrinsic order
- High-cardinality fields may need hashing, embedding, or target encoding instead

---

## Label encoding
- Label encoding assigns integers to categories
- Do not use arbitrary integer codes for nominal data with unordered labels

---

## Target encoding
- Target encoding replaces a category with the mean outcome for that category
- Powerful but leak-prone
- Never encode using the full dataset before splitting

---

## Takeaways
- Scale when magnitude drives the algorithm
- Match encoding to cardinality and ordinality
- Guard target statistics against leakage

---

## Next
- Complete the quiz for this part
- Continue to binning, feature engineering, and transforms

