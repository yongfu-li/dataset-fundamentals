# Chapter 5 — Python cleaning tools — transcript

**Part id:** part-08-python-cleaning-tools  
**Estimated duration:** 7 minutes  
**Sources:** `author/chapter5.tex` (§5.5.1–5.5.3, 5.5.6), `modules/chapter5/example57/`, `modules/chapter5/example59/`

## Slide 1 — Chapter 5 — Python cleaning tools

Methods become operational through libraries. This part maps pandas table operations, scikit-learn transformers, and NumPy vectorized fixes to the cleaning and preprocessing steps already introduced.

## Slide 2 — Learning objectives

By the end of this part, you should perform dropna, fillna, and drop_duplicates in pandas, apply StandardScaler and OneHotEncoder from scikit-learn, and outline an end-to-end cleaning walkthrough.

## Slide 3 — pandas for cleaning

pandas is the default toolkit for tabular cleaning: read_csv, dtype inspection, dropna, fillna, drop_duplicates, astype, and string accessors for normalization. Example 5.57 shows dropna and drop_duplicates in one script. Example 5.59 walks an end-to-end cleaning template from raw extract to model-ready frame.

## Slide 4 — Example 5.57 — Pandas dropna and drop duplicates

Example 5.57 is the minimal cleaning API surface. Open the example 57 module for this chapter to run the operations on a sample table. Chain steps explicitly rather than mutating without logs.

## Slide 5 — scikit-learn for preprocessing

scikit-learn provides fit-transform estimators: StandardScaler, MinMaxScaler, OneHotEncoder, and SimpleImputer compose into pipelines. Example 5.60 standardizes age and salary; Example 5.61 one-hot encodes gender. Fit on training data only to prevent leakage.

## Slide 6 — Example 5.59 — Pandas end-to-end cleaning walkthrough

Example 5.59 ties issues to fixes in one narrative. Try the example 59 module to follow parse, dedupe, impute, encode, and scale in order. NumPy underpins vectorized numeric operations across both libraries.

## Slide 7 — When to use which layer

Use pandas for exploratory fixes and bespoke string parsing. Use sklearn transformers when the same preprocessing must repeat across folds and deployment. Keep business rules and unit conversions visible in notebooks or pipeline comments.

## Slide 8 — Takeaways

pandas repairs tables; sklearn standardizes repeatable transforms. Fit transformers on training splits. Example modules provide runnable templates for this chapter.

## Slide 9 — Next

Pause for the quiz, then continue to pipelines, automation, visualization, and a brief R contrast.
