---
marp: true
title: Chapter 5 — Challenges and best practices
paginate: true
---

# Chapter 5 — Challenges and best practices

Cleaning is tedious because defects interact and fixes can introduce bias

---

## Learning objectives
- Explain why accuracy misleads on imbalanced data, describe currency and unit mixing risks
- List documentation, validation
- Version-control habits

---

## Recurring challenges
- Missing data mechanisms complicate imputation choices
- Inconsistent cross-source formats consume analyst time
- Outliers mix errors with rare truth
- Imbalance steers models toward majority classes
- Duplicates inflate counts
- Transformations can leak target information if fit globally

---

## Example 5.62 — Rare fraud class distorts accuracy
- Example 5.62 — hands-on module
- Example 5.62 shows fraud at a tiny fraction of events
- Explore the chapter example module
- View files: `modules/chapter5/example62/`

---

## Example 5.63 — Convert currencies before modeling
- Example 5.63 — hands-on module
- Example 5.63 reminds teams to harmonize currencies and units before comparing amounts
- Mixed units silently rank features by exchange noise instead of behavior
- Standardize early and record conversion tables
- View files: `modules/chapter5/example63/`

---

## Best practices overview
- Handle missing data with explicit mechanism assumptions
- Profile data before and after each step
- Document parsing rules, imputation choices, and outlier policies
- Separate train, validation, and test before fitting transformers
- Use version control for datasets and preprocessing code
- Review features for leakage and fairness implications connected to Chapter 7

---

## Validation and reproducibility
- Fit scalers, encoders, and imputers inside training folds
- Store random seeds and library versions
- Write preprocessing metadata alongside exported tables so another team can replay the

---

## Takeaways
- Challenges are expected, plan time for them
- Metrics must match the defect, especially under imbalance
- Documentation and leakage control are part of cleaning, not optional extras

---

## Next
- Complete the quiz for this part
- Continue to retail and healthcare case studies plus hands-on module activities

