# Chapter 6 — Univariate and bivariate visualization — transcript

**Part id:** part-04-univariate-and-bivariate-visualization  
**Estimated duration:** 7 minutes  
**Sources:** `author/chapter6.tex` (§6.3.1–6.3.3), `modules/chapter6/example2/`, `modules/chapter6/example11/`

## Slide 1 — Chapter 6 — Univariate and bivariate visualization

Graphics reveal patterns tables hide. This part covers histograms, box plots, scatter plots, and correlation-matrix heatmaps—the workhorse plots for one and two variables.

## Slide 2 — Learning objectives

By the end of this part, you should choose univariate plots for distribution checks, use scatter plots for pairwise relationships, and read a correlation heatmap at a screening level.

## Slide 3 — Why visualize

Visualization supports pattern recognition, quality assessment, hypothesis generation, and communication. In EDA, charts often detect missingness patterns, odd scales, and inconsistent categories before formal repair.

## Slide 4 — Univariate plots

Histograms show frequency by bin—useful for age or spend shape. Box plots summarize median, quartiles, and outlier candidates via the IQR rule. Pie charts work for quick share checks with few categories; prefer bar charts when precision matters.

## Slide 5 — Example 6.2 — Skewness informs model choice

Example 6.2 ties histogram or density shape to later methods. Open the example 2 module for this chapter to inspect skewed versus near-normal views. Box plots of income often show right-tail outliers matching Chapter 5 discussions.

## Slide 6 — Bivariate plots

Scatter plots expose linear or nonlinear association, clusters, and outliers—classic screens include advertising spend versus revenue. Correlation matrices store pairwise coefficients, often shown as heatmaps for scanning strong positive, negative, or near-zero pairs.

## Slide 7 — Categorical–numerical views

Box plots by category compare spend across product types; bar charts compare group means or totals. These views support segment comparisons that group-by tables started numerically.

## Slide 8 — Takeaways

Match chart type to variable count and question. Univariate plots check shape and outliers; bivariate plots screen relationships. Correlation heatmaps prioritize pairs for deeper analysis in later parts.

## Slide 9 — Next

Pause for the quiz, then continue to multivariate and high-dimensional visualization.
