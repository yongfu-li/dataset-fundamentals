# Chapter 5 — Scaling and encoding — transcript

**Part id:** part-06-preprocessing-scaling-and-encoding  
**Estimated duration:** 7 minutes  
**Sources:** `author/chapter5.tex` (§5.4.1–5.4.2), `modules/chapter5/example46/`, `modules/chapter5/example47/`

## Slide 1 — Chapter 5 — Scaling and encoding

Cleaned columns still may sit on incomparable scales or arrive as raw text categories. This part covers normalization and standardization, then one-hot, label, and target encoding—with when each fits.

## Slide 2 — Learning objectives

By the end of this part, you should choose between min-max scaling and standardization, encode nominal versus ordinal categories appropriately, and state leakage risks for target encoding.

## Slide 3 — Normalization and scaling

Min-max normalization maps values to a bounded range such as zero to one—useful for neural nets and distance models when bounds matter. Standardization subtracts the mean and divides by standard deviation—Example 5.46 scales age and income for k-nearest neighbors so income does not dominate distance. Tree models often need less scaling but still benefit from consistent units.

## Slide 4 — Example 5.46 — Scale age and income for KNN

Example 5.46 revisits the scale mismatch motif from Section 5.1. Open the example 46 module for this chapter to compare raw and scaled neighbor votes. Fit scalers on training data only, then transform validation and test sets.

## Slide 5 — One-hot encoding

One-hot encoding creates a binary column per category level—Example 5.47 for color and Example 5.50 for gender in churn models. Use for nominal categories without intrinsic order. High-cardinality fields may need hashing, embedding, or target encoding instead.

## Slide 6 — Label encoding

Label encoding assigns integers to categories—Example 5.48 for ordinal size levels where order matters. Do not use arbitrary integer codes for nominal data with unordered labels; trees may treat 2 as twice 1 incorrectly in linear models.

## Slide 7 — Target encoding

Target encoding replaces a category with the mean outcome for that category—Example 5.49 for city mean price. Powerful but leak-prone: compute statistics inside cross-validation folds or use regularized encoders. Never encode using the full dataset before splitting.

## Slide 8 — Takeaways

Scale when magnitude drives the algorithm. Match encoding to cardinality and ordinality. Guard target statistics against leakage.

## Slide 9 — Next

Pause for the quiz, then continue to binning, feature engineering, and transforms.
