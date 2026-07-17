---
marp: true
title: Chapter 5 — Outliers, irrelevant features, and imbalance
paginate: true
---

# Chapter 5 — Outliers, irrelevant features, and imbalance

Not every extreme value is an error, and not every column belongs in the model

---

## Learning objectives
- Distinguish erroneous outliers from legitimate extremes
- Describe why rare classes break accuracy metrics

---

## Outliers — definition and causes
- Outliers deviate sharply from the bulk of a distribution
- Causes include typos, sensor faults, and genuine rare events
- Example 5.22 shows an extra zero in blood pressure
- Treatment depends on which case you face

---

## Handling outliers
- Replacing spikes with robust statistics such as the median
- Examples 5.25 through 5.28 illustrate drop, log, cap, and median-replace patterns
- Blind removal of all extremes can delete signal

---

## Example 5.22 — Extra zero in blood pressure
- Example 5.22 — hands-on module
- A classic entry error
- Explore the chapter example module
- View files: `modules/chapter5/example22/`

---

## Irrelevant features
- Irrelevant columns add noise without predictive value
- Example 5.29 lists color or pet features unrelated to a loan default target
- Example 5.30 notes harder interpretation
- Correlation and domain review help prune fields

---

## Example 5.29 — Irrelevant color and pet features
- Example 5.29 — hands-on module
- Example 5.29 motivates feature selection before modeling
- Explore the chapter example module
- View files: `modules/chapter5/example29/`

---

## Imbalanced data
- Imbalance means one class dominates, Example 5.33 shows fraud at one percent of events
- Majority-class classifiers can report high accuracy while missing almost every fraud case
- Responses include oversampling, class weights

---

## Takeaways
- Outlier handling requires domain judgment
- Irrelevant features waste compute and invite overfitting
- Imbalance makes accuracy misleading, plan metrics and resampling before training

---

## Next
- Complete the quiz for this part
- Continue to cleaning techniques, imputation, deduplication, standardization

