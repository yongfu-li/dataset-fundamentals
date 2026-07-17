# Chapter 5 — Case studies and hands-on activities — transcript

**Part id:** part-11-case-studies-and-activities  
**Estimated duration:** 7 minutes  
**Sources:** `author/chapter5.tex` (§5.7–5.8), `modules/chapter5/example64/`, `modules/chapter5/example65/`

## Slide 1 — Chapter 5 — Case studies and hands-on activities

Principles become concrete in retail segmentation and healthcare outcome prediction. This part walks both domain case studies and points to packaged module activities for spotting and fixing defects.

## Slide 2 — Learning objectives

By the end of this part, you should outline cleaning steps for an e-commerce segmentation table and a clinical outcomes table, and locate module labs for issue spotting and pandas repair templates.

## Slide 3 — Retail: customer segmentation

An e-commerce firm segments customers by purchase behavior. Challenges include missing age and frequency fields, inconsistent product capitalization, and mixed currencies. Solutions: median or mode imputation, currency harmonization, text normalization, and scaling of amount and frequency features. Cleaned data supports clustering and targeted campaigns.

## Slide 4 — Healthcare: predicting disease outcomes

Clinical records combine age, history, labs, and outcomes. Missing labs, outlier vitals, and inconsistent smoker labels are common. Solutions: principled imputation, categorical standardization, IQR outlier review, and numeric scaling before supervised models. Preprocessing improves allocative and diagnostic workflows when documented.

## Slide 5 — Example 5.64 — Retail purchase record schema

Example 5.64 introduces a practice table with missing prices and duplicate transactions for issue spotting. Open the example 64 module for this chapter to audit the schema before cleaning. This mirrors Section 5.8 spot-the-issue activities on the static site.

## Slide 6 — Example 5.65 — Guided pandas cleaning template

Example 5.65 provides a guided repair script. Try the example 65 module to apply drop, impute, encode, and scale steps end to end. Additional modules cover scaling comparisons and encoding tradeoffs referenced in the chapter exercises.

## Slide 7 — From case study to production

Both cases share a pattern: profile defects, apply domain-aware fixes, validate on held-out data, and document transforms. Retail emphasizes revenue integrity; healthcare emphasizes measurement error and label consistency. Fairness review may follow in Chapter 7.

## Slide 8 — Takeaways

Domain context chooses imputation and outlier rules. Case studies connect Sections 5.2–5.5 into narratives. Module activities supply hands-on repetition without requiring live execution on the course site.

## Slide 9 — Next

Pause for the quiz, then continue to advanced topics—Bayesian imputation, streaming data, and explainability-aware cleaning.
