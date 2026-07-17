---
marp: true
title: Chapter 5 — Missing data
paginate: true
---

# Chapter 5 — Missing data

Missing values are among the most common defects, and the most dangerous when handled blindly

---

## Learning objectives
- Define MCAR, MAR
- MNAR, match each to a short scenario
- List typical causes of missing fields in real pipelines

---

## MCAR — missing completely at random
- The probability a value is missing does not depend on observed or unobserved data
- Example 5.8 sketches a system error that omits records uniformly
- Simple deletion or mean imputation may be less biased when MCAR truly holds

---

## MAR — missing at random
- Under MAR, missingness depends on observed variables but not on the missing value itself
- Example 5.9 shows income nonresponse related to age or employment status that is recorded
- MAR is the sweet spot for many principled imputation methods

---

## MNAR — missing not at random
- Under MNAR, missingness depends on the unobserved value itself
- Example 5.10 shows high earners declining to report income
- MNAR demands explicit modeling, sensitivity analysis, or collection redesign

---

## Example 5.8 — MCAR system error
- Example 5.8 — hands-on module
- The uniform omission pattern
- Explore the chapter example module
- View files: `modules/chapter5/example8/`

---

## Causes of missing data
- Disk or sensor failures truncating files
- Example 5.11 shows skipped sensitive items; Example 5.13 shows truncated sensor logs
- The cause hints at the mechanism

---

## Why mechanism matters
- Listwise deletion is simple but wasteful under MAR if informative rows are dropped
- Mean imputation understates variance
- MNAR fixes require domain judgment
- Chapter 6 exploration helps detect patterns

---

## Takeaways
- Classify missingness before imputing
- MNAR are not interchangeable labels, they dictate which repairs are defensible
- Causes range from human behavior to infrastructure failure

---

## Next
- Complete the quiz for this part
- Continue to duplicates and inconsistent encodings

