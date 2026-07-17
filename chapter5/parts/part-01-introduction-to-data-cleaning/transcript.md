# Chapter 5 — Introduction to data cleaning — transcript

**Part id:** part-01-introduction-to-data-cleaning  
**Estimated duration:** 6 minutes  
**Sources:** `author/chapter5.tex` (§5.1), `modules/chapter5/example1/`, `modules/chapter5/example2/`

## Slide 1 — Chapter 5 — Introduction to data cleaning

After collection and annotation, raw tables still need preparation before reliable analysis or supervised training. This opening part defines data cleaning versus preprocessing and explains why both precede model fitting and the exploratory summaries in Chapter 6.

## Slide 2 — Learning objectives

By the end of this part, you should distinguish cleaning from preprocessing, name four practical motives for both phases, and recognize schema discipline when joining multiple corpora.

## Slide 3 — Why cleaning matters

Without cleaning, missing fields, duplicates, inconsistent encodings, and scale mismatches distort statistics and learners alike. Cross-corpus work makes those defects visible at pipeline scale: models trained on one public release can fail silently on another when column names, units, or label taxonomies differ.

## Slide 4 — Example 5.1 — Missing target values in classification

Example 5.1 shows a fraud table with blank labels. Supervised training either drops those rows or invents labels—both paths can bias decision boundaries. Open the example 1 module for this chapter to inspect how missing targets break training pipelines.

## Slide 5 — Example 5.2 — Dropping unused identifier columns

Example 5.2 removes high-cardinality identifiers such as raw transaction IDs that never enter the model. Memory and training time improve without changing the predictive schema. Try the example 2 module to see identifier columns that should not reach the feature matrix.

## Slide 6 — Cleaning versus preprocessing

This book treats cleaning and preprocessing as consecutive phases. Cleaning finds and corrects errors so values are reliable—missing values, duplicates, inconsistent formats, erroneous outliers, and non-model fields. Preprocessing transforms cleaned values into representations algorithms expect: scaling, encoding, binning, and feature construction.

## Slide 7 — Example 5.3 — Duplicate retail transactions

Example 5.3 shows the same order ID appearing twice after a system retry. Counting both rows inflates revenue and customer frequency until duplicates are removed or merged. Cleaning precedes the scaling and encoding examples introduced later in the chapter.

## Slide 8 — Four recurring motives

Four motives recur: accuracy on held-out data, comparable feature scales, computational efficiency, and trustworthy decisions when multiple sources are joined. Detailed failure modes appear in the next parts; remedies follow in Sections 5.3 and 5.4.

## Slide 9 — Takeaways

Cleaning makes values trustworthy; preprocessing makes them algorithm-ready. Both follow annotation and precede exploration-heavy modeling work. Schema alignment across sources is itself a cleaning task.

## Slide 10 — Next

Pause for the quiz, then continue to missing data—MCAR, MAR, MNAR mechanisms and their causes.
