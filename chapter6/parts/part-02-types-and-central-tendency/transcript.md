# Chapter 6 — Data types and central tendency — transcript

**Part id:** part-02-types-and-central-tendency  
**Estimated duration:** 7 minutes  
**Sources:** `author/chapter6.tex` (§6.2.1–6.2.2), `modules/chapter6/example10/`, `modules/chapter6/example15/`

## Slide 1 — Chapter 6 — Data types and central tendency

Before plotting, classify each column: continuous versus discrete numerics, nominal versus ordinal categories. Then choose summaries—mean, median, mode—that match the measurement scale.

## Slide 2 — Learning objectives

By the end of this part, you should distinguish four common data types, compute mean, median, and mode, and state when each central tendency measure is appropriate.

## Slide 3 — Types of data

Continuous variables take any value in an interval—height, income, sales totals. Discrete variables are counts—purchases per month, items in a basket. Nominal categories have no order—product type, color. Ordinal categories have meaningful order—satisfaction ratings, education bands.

## Slide 4 — Example 6.10 and 6.13 — Continuous and nominal cases

Example 6.10 lists continuous physical measures; Example 6.11 shows monetary totals; Example 6.12 gives discrete counts. Example 6.13 shows nominal product categories; Example 6.14 shows an ordinal satisfaction scale. Open the example 10 module to practice typing columns before summarizing.

## Slide 5 — Mean

The mean is the arithmetic average—sum divided by count. Example 6.15 computes mean income. Use means for roughly symmetric continuous data; skew or outliers pull the mean away from typical values.

## Slide 6 — Median

The median is the middle value when sorted—or the average of the two middle values for even counts. Example 6.16 contrasts odd and even samples. Median resists outliers and suits skewed income or spend distributions.

## Slide 7 — Mode

The mode is the most frequent value—especially useful for categorical data. Example 6.17 shows a simple numeric mode. A multimodal distribution may indicate subpopulations worth splitting.

## Slide 8 — Matching summary to type

Use means and medians for numeric exploration; use mode or frequency tables for categories. Report all three for numeric fields during early EDA so skew is visible when mean and median diverge.

## Slide 9 — Takeaways

Variable type dictates valid summaries. Mean, median, and mode answer different questions about center. Always inspect type before computing describe() output blindly.

## Slide 10 — Next

Pause for the quiz, then continue to dispersion, shape, frequency tables, and grouping.
