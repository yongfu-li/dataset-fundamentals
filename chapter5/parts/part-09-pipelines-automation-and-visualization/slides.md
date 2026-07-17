---
marp: true
title: Chapter 5 — Pipelines, automation, and visualization
paginate: true
---

# Chapter 5 — Pipelines, automation, and visualization

Single-notebook scripts do not scale across teams

---

## Learning objectives
- Explain why pipelines prevent leakage
- Contrast dplyr/tidyr with pandas

---

## R: dplyr and tidyr
- In R workflows
- Example 5.58 shows filter and select patterns analogous to pandas
- Teams standardized on Python may still encounter R extracts

---

## sklearn pipelines
- Pipelines chain imputers, scalers, encoders
- This prevents statistics computed on validation data from leaking into features
- Serialize pipelines with the model for consistent deployment preprocessing

---

## Automation: Featuretools and AutoML
- Featuretools performs deep feature synthesis on relational tables
- AutoML platforms wrap search over imputers, encoders, and model families
- Automation accelerates baselines but still requires domain review to drop leaky or

---

## Example 5.74 — Deep feature synthesis on transactions
- Example 5.74 — hands-on module
- Example 5.74 shows automated aggregates across related tables
- Explore the chapter example module
- View files: `modules/chapter5/example74/`

---

## Visualization for cleaning
- Box plots expose outlier tails
- Visual checks complement rule-based flags from earlier parts and align with exploratory

---

## Takeaways
- Pipelines encode reproducible preprocessing
- Automation proposes features; humans curate them
- Visual diagnostics catch defects rules miss

---

## Next
- Complete the quiz for this part
- Continue to challenges, best practices, and governance habits

