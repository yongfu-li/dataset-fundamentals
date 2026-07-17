---
marp: true
title: Chapter 5 — Techniques for data cleaning
paginate: true
---

# Chapter 5 — Techniques for data cleaning

This part turns defect taxonomy into repair methods

---

## Learning objectives
- Compare listwise deletion with available-case analysis, choose mean, median
- Hot-deck imputation, remove duplicates in pandas-style workflows
- Flag outliers with IQR rules

---

## Handling missing data — deletion
- Listwise deletion drops any row with a missing value in selected columns
- Available-case analysis keeps rows for each analysis using the fields present
- Choose based on mechanism and how much data you can afford to lose

---

## Imputation methods
- Mean imputation, Example 5.39 for age, preserves the sample mean but shrinks variance
- Median imputation, Example 5.41 for skewed square footage, is robust to tails
- Hot-deck imputation
- Document imputation inside train splits to avoid leakage

---

## Example 5.39 — Mean impute missing age
- Example 5.39 — hands-on module
- The simple numeric fill
- Explore the chapter example module
- View files: `modules/chapter5/example39/`

---

## Removing duplicates
- Near-duplicate customer names and repeated transaction keys should be collapsed with
- Example 5.42 shows fuzzy duplicate risk
- Use stable keys when available

---

## Standardizing formats
- Example 5.43 normalizes currency symbols across markets before modeling
- Date parsing, lowercasing product names
- Record parsing rules in preprocessing metadata

---

## Outliers and feature selection
- Example 5.44 flags extreme income with the interquartile range
- Winsorization caps tails instead of deleting rows
- Example 5.45 drops one of two highly correlated bathroom features to reduce redundancy
- Pair outlier rules with domain review

---

## Takeaways
- Match the repair to the defect and mechanism
- Deletion is simple but costly; imputation carries bias risk
- Standardization enables joins; IQR and correlation pruning stabilize training

---

## Next
- Complete the quiz for this part
- Continue to preprocessing, scaling and encoding cleaned columns

