---
marp: true
title: Chapter 6 — Dispersion, shape, and grouping
paginate: true
---

# Chapter 6 — Dispersion, shape, and grouping

A mean without spread is ambiguous

---

## Learning objectives
- Compute variance and standard deviation
- Summarize by groups

---

## Variance and standard deviation
- Variance averages squared deviations from the mean
- Example 6.18 sketches variance for a small sample; Example 6.19 takes the square root
- Larger standard deviation means more spread around the center

---

## Example 6.18 — Variance sketch
- Example 6.18 — hands-on module
- Example 6.18 uses the sample values two, four, four, six, and eight
- Explore the chapter example module
- View files: `modules/chapter6/example18/`

---

## Example 6.18 — listing

```
"""Calculate variance from Example 6.18."""

from __future__ import annotations

from statistics import fmean, pvariance, variance


def main() -> None:
    """Print deviations and both population and sample variance."""
    values: list[int] = [2, 4, 4, 6, 8]
    mean_value: float = fmean(values)
    squared_deviations: list[float] = [
        (value - mean_value) ** 2 for value in values
    ]
    print("Values:", values)
    print("Mean:", mean_value)
    print("Squared deviations:", squared_deviations)
    print("Population variance (n):", pvariance(values))
    print("Sample variance (n-1):", variance(values))

```

---

## Range
- Range is max minus min, Example 6.20 on a small sample
- Simple but sensitive to outliers
- Pair range with quartiles or IQR for robust spread views in later plots

---

## Measures of shape
- Skewness indicates asymmetry: right-skewed income tails pull the mean above the median
- Kurtosis relates to tail heaviness
- Example 6.2 from the introduction linked skewness to model choice

---

## Frequency distributions and grouping
- Frequency tables count category occurrences or bin counts for numerics
- Group-by summaries compute mean spend by region or category
- Aggregation reveals segment differences raw global means hide

---

## Takeaways
- Report center and spread together
- Shape guides transforms and model families
- Frequency and group-by tables bridge summaries to the visual techniques in the next parts

---

## Next
- Complete the quiz for this part
- Continue to univariate and bivariate visualization

