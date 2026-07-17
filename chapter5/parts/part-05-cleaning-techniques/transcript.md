# Chapter 5 — Techniques for data cleaning — transcript

**Part id:** part-05-cleaning-techniques  
**Estimated duration:** 8 minutes  
**Sources:** `author/chapter5.tex` (§5.3), `modules/chapter5/example37/`, `modules/chapter5/example39/`, `modules/chapter5/example44/`

## Slide 1 — Chapter 5 — Techniques for data cleaning

This part turns defect taxonomy into repair methods: deletion and imputation for missing values, deduplication, format standardization, outlier handling, and correlation-based feature drops.

## Slide 2 — Learning objectives

By the end of this part, you should compare listwise deletion with available-case analysis, choose mean, median, and hot-deck imputation, remove duplicates in pandas-style workflows, and flag outliers with IQR rules.

## Slide 3 — Handling missing data — deletion

Listwise deletion drops any row with a missing value in selected columns—Example 5.37 shows aggressive loss of sample size. Available-case analysis keeps rows for each analysis using the fields present—Example 5.38 preserves more data but complicates comparison across models. Choose based on mechanism and how much data you can afford to lose.

## Slide 4 — Imputation methods

Mean imputation—Example 5.39 for age—preserves the sample mean but shrinks variance. Median imputation—Example 5.41 for skewed square footage—is robust to tails. Hot-deck imputation—Example 5.40—copies values from similar donor rows and preserves multivariate structure better than single-column means. Document imputation inside train splits to avoid leakage.

## Slide 5 — Example 5.39 — Mean impute missing age

Example 5.39 is the simple numeric fill. Open the example 39 module for this chapter to compare mean, median, and model-based imputation on the same column. MNAR settings may invalidate all three without extra modeling.

## Slide 6 — Removing duplicates

Near-duplicate customer names and repeated transaction keys should be collapsed with explicit keep rules. Example 5.42 shows fuzzy duplicate risk. Use stable keys when available; otherwise combine normalized text fields and timestamps before drop_duplicates.

## Slide 7 — Standardizing formats

Example 5.43 normalizes currency symbols across markets before modeling. Date parsing, lowercasing product names, and canonical unit conversion belong here—not in the model trainer. Record parsing rules in preprocessing metadata.

## Slide 8 — Outliers and feature selection

Example 5.44 flags extreme income with the interquartile range. Winsorization caps tails instead of deleting rows. Example 5.45 drops one of two highly correlated bathroom features to reduce redundancy. Pair outlier rules with domain review.

## Slide 9 — Takeaways

Match the repair to the defect and mechanism. Deletion is simple but costly; imputation carries bias risk. Standardization enables joins; IQR and correlation pruning stabilize training.

## Slide 10 — Next

Pause for the quiz, then continue to preprocessing—scaling and encoding cleaned columns.
