# Chapter 5 — Duplicates and inconsistency — transcript

**Part id:** part-03-duplicates-and-inconsistency  
**Estimated duration:** 7 minutes  
**Sources:** `author/chapter5.tex` (§5.2.3–5.2.4), `modules/chapter5/example14/`, `modules/chapter5/example18/`

## Slide 1 — Chapter 5 — Duplicates and inconsistency

Duplicate rows and inconsistent encodings silently distort counts, joins, and models. This part shows how retries inflate metrics, mixed formats break timelines, and split category labels fragment analysis.

## Slide 2 — Learning objectives

By the end of this part, you should explain duplicate impact on aggregates and training, recognize inconsistent date and ID formats, and describe how free-text categories hide structure.

## Slide 3 — Duplicate data — causes and impact

Duplicates arise from system retries, merged exports, copy-paste ETL, and near-duplicate customer names. Example 5.14 shows duplicate purchase rows; Example 5.15 double-counts revenue; Example 5.16 lets models overweight repeated rows; Example 5.17 slows training on bloated tables. Deduplication is not cosmetic—it changes business numbers.

## Slide 4 — Example 5.14 — Duplicate customer purchase rows

Example 5.14 is the retail retry pattern. Open the example 14 module for this chapter to practice identifying duplicate keys before aggregation. Decide whether to keep first, last, or merged records based on business rules.

## Slide 5 — Inconsistent data — formats and units

Inconsistent data is common when sources span departments or time periods. Example 5.18 mixes date formats, gender encodings, and measurement units in one table. Example 5.19 shows customer ID formats that block joins. Example 5.20 splits Male versus M into separate categories. Example 5.21 shows weeks lost normalizing free-text cities.

## Slide 6 — Example 5.18 — Mixed dates, gender, and units

Example 5.18 is a checklist of silent parse failures. Try the example 18 module to see how inconsistent encodings produce nulls or wrong aggregates after conversion. Standardization belongs in the cleaning phase before encoding.

## Slide 7 — Join and aggregation failures

Inconsistent keys prevent reliable joins across tables. Mixed currencies or units make sums meaningless until converted. Split labels inflate cardinality and starve rare categories of support. Exploration in Chapter 6 surfaces many of these patterns; repair methods appear in the cleaning-techniques part.

## Slide 8 — Takeaways

Duplicates change revenue, sample weights, and runtime. Inconsistency breaks time logic and joins. Standardize formats early with explicit parsing rules and canonical category maps.

## Slide 9 — Next

Pause for the quiz, then continue to outliers, irrelevant features, and class imbalance.
