---
marp: true
title: Chapter 5 — Advanced topics
paginate: true
---

# Chapter 5 — Advanced topics

Batch CSV cleaning is the baseline

---

## Learning objectives
- Contrast Bayesian and deep imputation, describe sliding-window streaming preprocessing
- Explain how documentation supports explainable AI

---

## Advanced imputation
- Bayesian imputation models missing values with uncertainty
- Autoencoder imputation, Example 5.71, learns nonlinear reconstructions for retail baskets
- Both beat naive means when patterns are complex but need more data and compute

---

## Example 5.70 — Bayesian imputation with clinical priors
- Example 5.70 — hands-on module
- The uncertainty-aware clinical case
- Explore the chapter example module
- View files: `modules/chapter5/example70/`

---

## Real-time and streaming preprocessing
- Streaming finance, IoT, and vitals demand low-latency transforms
- Challenges include latency, arriving corruption, and scale
- Sliding windows, Example 5.72 on prices
- Batch assumptions fail when data never stops

---

## Example 5.72 — Rolling window for streaming prices
- Example 5.72 — hands-on module
- Example 5.72 maintains a rolling feature window for aggregates
- Explore the chapter example module
- View files: `modules/chapter5/example72/`

---

## Automated pipelines and explainability
- Automated pipelines orchestrate cleaning stages across storage systems
- For explainable AI

---

## Example 5.75 — Document imputation for auditable models
- Example 5.75 — hands-on module
- Example 5.75 ties preprocessing logs to model cards
- Explore the chapter example module
- View files: `modules/chapter5/example75/`

---

## Looking ahead
- Chapter 6 continues with exploration that detects many defects this chapter repairs
- Chapter 7 connects preprocessing to fairness
- Strong cleaning documentation makes both downstream chapters more trustworthy

---

## Takeaways
- Advanced methods extend, not replace, core taxonomy and tools
- Streaming and explainability impose new constraints on familiar transforms
- Document every stage for production and audit

---

## Next
- Complete the quiz for this part
- Pause for the quiz

