# Chapter 6 — Advanced EDA techniques — transcript

**Part id:** part-08-advanced-eda-techniques  
**Estimated duration:** 7 minutes  
**Sources:** `author/chapter6.tex` (§6.6), `modules/chapter6/example4/`

## Slide 1 — Chapter 6 — Advanced EDA techniques

Beyond first-pass plots, analysts need principled correlation analysis and related methods for multicollinearity, nonlinear association, and high-dimensional structure.

## Slide 2 — Learning objectives

By the end of this part, you should contrast Pearson and Spearman correlation, interpret correlation heatmaps cautiously, and name additional advanced techniques surveyed in the chapter.

## Slide 3 — Correlation analysis

Pearson correlation measures linear association between continuous pairs. Spearman uses ranks and tolerates monotonic nonlinear relationships better. Coefficients live on minus one to plus one—magnitude and sign guide which pairs deserve scatter follow-up.

## Slide 4 — Reading heatmaps

Correlation heatmaps make strong pairs easy to scan but do not prove causation. Confounding and small samples can inflate or hide relationships. Confirm interesting cells with scatter plots and domain reasoning.

## Slide 5 — Example 6.4 — Linear versus nonlinear patterns

Example 6.4 reminds you that high Pearson correlation implies linearity; curved relationships may show low Pearson but strong Spearman—or need transformation. Open the example 4 module to compare linear and nonlinear scatter patterns.

## Slide 6 — Additional advanced techniques

The chapter surveys partial correlation, mutual information, autocorrelation for time series, and links PCA and t-SNE from visualization to structural exploration. Use these when pairwise screens are insufficient for dimensionality or temporal dependence.

## Slide 7 — When to stop exploring

Advanced methods still serve exploration—not final inference. Document which correlations or components motivated feature selection or transforms before modeling chapters.

## Slide 8 — Takeaways

Choose Pearson or Spearman based on shape and scale. Heatmaps screen; scatter plots verify. Advanced tools extend EDA when many features or time order matter.

## Slide 9 — Next

Pause for the quiz, then continue to best practices for reproducible, clear EDA.
