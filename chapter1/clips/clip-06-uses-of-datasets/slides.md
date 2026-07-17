---
marp: true
title: Chapter 1 — Uses of datasets
paginate: true
---

# Chapter 1 — Uses of datasets

Where datasets create value—and one end-to-end workflow

---

## Learning objectives

- Map sectors to typical datasets and analytical goals
- Trace the shared lifecycle: define, assess, explore, act
- Outline the customer-churn case study steps

---

## Applications across sectors

- Retail: purchase histories → segmentation, forecasts
- Healthcare: EHRs and wearables → risk and monitoring
- Finance: ledgers → fraud and credit scoring
- Education and government: logs and statistics → intervention and planning

---

## Example 1.21 — Purchase history

- Setting: one row per order (customer, category, date, amount)
- Key idea: aggregates reveal repurchase rhythms
- Drives segmentation and promotional calendars
- Module: `modules/chapter1/example21/`

---

## Case study: customer churn

- Collect and join customer behavior features
- Explore and clean before modeling
- Train a classifier; score risk of cancellation
- Act with retention offers guided by feature importance

---

## Example 1.31 — Churn model sketch

- Setting: Python workflow on churn labels
- Key idea: same arc as fraud or demand forecasting
- Only labels and cost of errors change by domain
- Try it: `modules/chapter1/example31/`

---

## Takeaways

- Domain vocabulary changes; the lifecycle does not
- Exploration and quality feed every serious application
- Churn shows define → prepare → model → intervene

---

## Next

- Complete the quiz for this clip
- Then continue to: Dataset management
