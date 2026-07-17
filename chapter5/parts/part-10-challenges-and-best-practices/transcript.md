# Chapter 5 — Challenges and best practices — transcript

**Part id:** part-10-challenges-and-best-practices  
**Estimated duration:** 7 minutes  
**Sources:** `author/chapter5.tex` (§5.6), `modules/chapter5/example62/`, `modules/chapter5/example63/`

## Slide 1 — Chapter 5 — Challenges and best practices

Cleaning is tedious because defects interact and fixes can introduce bias. This part names recurring obstacles and summarizes practices that keep preprocessing auditable and reproducible.

## Slide 2 — Learning objectives

By the end of this part, you should explain why accuracy misleads on imbalanced data, describe currency and unit mixing risks, and list documentation, validation, and version-control habits.

## Slide 3 — Recurring challenges

Missing data mechanisms complicate imputation choices. Inconsistent cross-source formats consume analyst time. Outliers mix errors with rare truth. Imbalance steers models toward majority classes. Duplicates inflate counts. Transformations can leak target information if fit globally.

## Slide 4 — Example 5.62 — Rare fraud class distorts accuracy

Example 5.62 shows fraud at a tiny fraction of events—a majority-class classifier looks accurate while detecting almost no fraud. Open the example 62 module for this chapter to practice precision-recall thinking before choosing metrics.

## Slide 5 — Example 5.63 — Convert currencies before modeling

Example 5.63 reminds teams to harmonize currencies and units before comparing amounts across markets. Mixed units silently rank features by exchange noise instead of behavior. Standardize early and record conversion tables.

## Slide 6 — Best practices overview

Handle missing data with explicit mechanism assumptions. Profile data before and after each step. Document parsing rules, imputation choices, and outlier policies. Separate train, validation, and test before fitting transformers. Use version control for datasets and preprocessing code. Review features for leakage and fairness implications connected to Chapter 7.

## Slide 7 — Validation and reproducibility

Fit scalers, encoders, and imputers inside training folds. Store random seeds and library versions. Write preprocessing metadata alongside exported tables so another team can replay the pipeline months later.

## Slide 8 — Takeaways

Challenges are expected—plan time for them. Metrics must match the defect, especially under imbalance. Documentation and leakage control are part of cleaning, not optional extras.

## Slide 9 — Next

Pause for the quiz, then continue to retail and healthcare case studies plus hands-on module activities.
