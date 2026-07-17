# Chapter 6 — Detecting data issues — transcript

**Part id:** part-06-detecting-data-issues  
**Estimated duration:** 7 minutes  
**Sources:** `author/chapter6.tex` (§6.4), `modules/chapter6/example6/`, `modules/chapter6/example7/`, `modules/chapter6/example8/`

## Slide 1 — Chapter 6 — Detecting data issues

EDA finds problems; Chapter 5 fixes them. This part lists detection signals for missingness, outliers, duplicates, inconsistency, and class imbalance—with explicit handoffs to cleaning sections.

## Slide 2 — Learning objectives

By the end of this part, you should name detection methods for five defect classes and explain the explore-then-repair loop with Chapter 5.

## Slide 3 — Missing data detection

Use null counts, column-wise sums, and missingness heatmaps. Example 6.6 profiles clinical missingness. Classify MCAR, MAR, or MNAR, then choose imputation or deletion in Chapter 5—not during blind exploration without documentation.

## Slide 4 — Example 6.6 — Healthcare missingness profile

Example 6.6 shows how missing labs appear across patients. Open the example 6 module for this chapter to read a missingness heatmap narrative. Document patterns before imputing.

## Slide 5 — Outliers and duplicates

Detect outliers with box plots, scatter plots, Z-scores, and IQR rules. Example 6.7 places outliers in a fraud transaction setting. Find duplicates with duplicated checks on keys. Decide whether outliers are errors, rare valid events, or noise before treatment.

## Slide 6 — Inconsistency and imbalance

Frequency tables surface format drift—Example 6.8 shows city name inconsistency. Bar charts of class counts reveal imbalance typical in fraud screens. Standardize labels in Chapter 5; address imbalance with resampling or weights before modeling.

## Slide 7 — Example 6.8 — City name inconsistency

Example 6.8 is a geographic label conflict visible in value counts. Try the example 8 module to see how exploration precedes standardization. Keep a log of plots that motivated each cleaning action.

## Slide 8 — Takeaways

EDA detection is deliberate routing, not silent fixing. Each defect class has visual and tabular signals. Repair workflows live in Chapter 5; exploration returns after fixes.

## Slide 9 — Next

Pause for the quiz, then continue to the EDA workflow and tools.
