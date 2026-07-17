---
marp: true
title: Chapter 6 — Advanced EDA techniques
paginate: true
---

# Chapter 6 — Advanced EDA techniques

High-dimensional structure

---

## Learning objectives
- Contrast Pearson and Spearman correlation, interpret correlation heatmaps cautiously
- Name additional advanced techniques surveyed in the chapter

---

## Correlation analysis
- Pearson correlation measures linear association between continuous pairs
- Spearman uses ranks and tolerates monotonic nonlinear relationships better
- Coefficients live on minus one to plus one

---

## Reading heatmaps
- Correlation heatmaps make strong pairs easy to scan but do not prove causation
- Confounding and small samples can inflate or hide relationships
- Confirm interesting cells with scatter plots and domain reasoning

---

## Example 6.4 — Linear versus nonlinear patterns
- Example 6.4 — hands-on module
- Example 6.4 reminds you that high Pearson correlation implies linearity
- Explore the chapter example module
- View files: `modules/chapter6/example4/`

---

## Additional advanced techniques
- Links PCA and t-SNE from visualization to structural exploration
- Use these when pairwise screens are insufficient for dimensionality or temporal dependence

---

## When to stop exploring
- Advanced methods still serve exploration, not final inference
- Document which correlations or components motivated feature selection or transforms before

---

## Takeaways
- Choose Pearson or Spearman based on shape and scale
- Heatmaps screen; scatter plots verify
- Advanced tools extend EDA when many features or time order matter

---

## Next
- Complete the quiz for this part
- Continue to best practices for reproducible, clear EDA

