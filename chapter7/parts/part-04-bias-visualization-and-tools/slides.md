---
marp: true
title: Chapter 7 — Bias visualization and tools
paginate: true
---

# Chapter 7 — Bias visualization and tools

Statistical summaries identify disparities

---

## Learning objectives
- By the end of this clip

---

## Example 7.34 — Combining Views for Bias Screening
- Example 7.34 — hands-on module
- Example 7.34 combines a correlation heatmap, approval bars by race
- No single view answers the fairness question
- Together they show where imbalance is concentrated and which formal tests should follow
- A dashboard should organize this sequence rather than display unrelated charts
- View files: `modules/chapter7/example34/`

---

## Heatmaps and dashboards
- Heatmaps compactly display correlations or a matrix of subgroup metrics
- They can expose proxy relationships and clusters of uneven error
- Dashboards add filters, reference rates, sample sizes

---

## Example 7.36 — Bar Chart of Predictions by Demographic Group
- Example 7.36 — hands-on module
- Example 7.36 uses bars to compare predictions or selection rates across demographic groups
- Rates are usually more informative than raw counts when group sizes differ
- Explore the chapter example module
- View files: `modules/chapter7/example36/`

---

## Example 7.37 — Income-Race Scatter Plot
- Example 7.37 — hands-on module
- Example 7.37 uses a scatter plot to inspect how income values and group membership align
- Clustering or separation can suggest historical or measurement patterns
- Faceting, transparency, and clear annotations often produce a more honest comparison
- View files: `modules/chapter7/example37/`

---

## AI Fairness 360
- IBM AI Fairness 360 provides datasets, fairness metrics
- It supports measures such as demographic parity and equal opportunity and offers methods
- Its breadth is useful when teams need to compare several definitions and interventions

---

## Fairlearn
- Fairlearn supports disaggregated model assessment and fairness-aware mitigation in the
- Its metric framing approach reports performance by sensitive group
- The toolkit does not choose the ethically appropriate metric

---

## Takeaways
- Dashboards connect these views with context
- Visual differences are screening evidence rather than causal conclusions
- AI Fairness 360 and Fairlearn make metrics and interventions repeatable

---

## Next
- Complete the quiz for this part
- The next clip examines why these disparities matter

