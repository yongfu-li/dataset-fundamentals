# Chapter 5 — Missing data — transcript

**Part id:** part-02-missing-data  
**Estimated duration:** 7 minutes  
**Sources:** `author/chapter5.tex` (§5.2.1–5.2.2), `modules/chapter5/example8/`, `modules/chapter5/example9/`

## Slide 1 — Chapter 5 — Missing data

Missing values are among the most common defects—and the most dangerous when handled blindly. This part classifies missing-data mechanisms and traces causes from survey design to hardware failure.

## Slide 2 — Learning objectives

By the end of this part, you should define MCAR, MAR, and MNAR, match each to a short scenario, and list typical causes of missing fields in real pipelines.

## Slide 3 — MCAR — missing completely at random

Under MCAR, the probability a value is missing does not depend on observed or unobserved data. Example 5.8 sketches a system error that omits records uniformly—any row is equally likely to be dropped. Simple deletion or mean imputation may be less biased when MCAR truly holds, though that assumption is rare in practice.

## Slide 4 — MAR — missing at random

Under MAR, missingness depends on observed variables but not on the missing value itself after conditioning on what you see. Example 5.9 shows income nonresponse related to age or employment status that is recorded—analysts can model missingness using observed columns. MAR is the sweet spot for many principled imputation methods.

## Slide 5 — MNAR — missing not at random

Under MNAR, missingness depends on the unobserved value itself. Example 5.10 shows high earners declining to report income—the missing values are not random even after conditioning on observed fields. MNAR demands explicit modeling, sensitivity analysis, or collection redesign; naive imputation can seriously bias estimates.

## Slide 6 — Example 5.8 — MCAR system error

Example 5.8 is the uniform omission pattern. Open the example 8 module for this chapter to compare MCAR assumptions with the MAR and MNAR vignettes. Always document which mechanism you believe applies before choosing a fix.

## Slide 7 — Causes of missing data

Common causes include survey nonresponse on sensitive questions, data-entry typos leaving blanks, integration gaps when merging sources, and disk or sensor failures truncating files. Example 5.11 shows skipped sensitive items; Example 5.13 shows truncated sensor logs. The cause hints at the mechanism.

## Slide 8 — Why mechanism matters

Listwise deletion is simple but wasteful under MAR if informative rows are dropped. Mean imputation understates variance. MNAR fixes require domain judgment. Chapter 6 exploration helps detect patterns; this chapter supplies formal repair methods in the cleaning-techniques part.

## Slide 9 — Takeaways

Classify missingness before imputing. MCAR, MAR, and MNAR are not interchangeable labels—they dictate which repairs are defensible. Causes range from human behavior to infrastructure failure.

## Slide 10 — Next

Pause for the quiz, then continue to duplicates and inconsistent encodings—defects that survive even when every cell is filled.
