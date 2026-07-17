---
marp: true
title: Chapter 6 — Detecting data issues
paginate: true
---

# Chapter 6 — Detecting data issues

EDA finds problems; Chapter 5 fixes them

---

## Learning objectives
- Name detection methods for five defect classes
- Explain the explore-then-repair loop with Chapter 5

---

## Missing data detection
- Use null counts, column-wise sums, and missingness heatmaps
- Example 6.6 profiles clinical missingness
- Classify MCAR

---

## Example 6.6 — Healthcare missingness profile
- Example 6.6 — hands-on module
- Example 6.6 shows how missing labs appear across patients
- Explore the chapter example module
- View files: `modules/chapter6/example6/`

---

## Outliers and duplicates
- Detect outliers with box plots, scatter plots, Z-scores, and IQR rules
- Example 6.7 places outliers in a fraud transaction setting
- Find duplicates with duplicated checks on keys
- Decide whether outliers are errors, rare valid events, or noise before treatment

---

## Inconsistency and imbalance
- Frequency tables surface format drift, Example 6.8 shows city name inconsistency
- Bar charts of class counts reveal imbalance typical in fraud screens
- Standardize labels in Chapter 5

---

## Example 6.8 — City name inconsistency
- Example 6.8 — hands-on module
- A geographic label conflict visible in value counts
- Explore the chapter example module
- View files: `modules/chapter6/example8/`

---

## Takeaways
- EDA detection is deliberate routing, not silent fixing
- Each defect class has visual and tabular signals
- Repair workflows live in Chapter 5; exploration returns after fixes

---

## Next
- Complete the quiz for this part
- Continue to the EDA workflow and tools

