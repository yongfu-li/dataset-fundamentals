---
marp: true
title: Chapter 7 — Introduction to bias and fairness
paginate: true
---

# Chapter 7 — Introduction to bias and fairness

Earlier chapters established how datasets are collected, labeled, cleaned, and explored

---

## Learning objectives
- Identify policy and governance pressures that make fairness an operational requirement

---

## Dataset bias and fairness
- Dataset bias is a systematic error or imbalance that skews training or evaluation data
- Fairness is the operational goal of selecting, measuring
- Fairness is therefore a measurable design constraint

---

## Trust and accountability
- Trust declines when people cannot determine whether a recommendation
- Accountability requires named owners, documented data and metrics, mechanisms for review
- Deployment, and monitoring

---

## Example 7.4 — GDPR & ECOA Policies
- Example 7.4 — hands-on module
- Example 7.4 shows that fairness has a policy context
- European data protection rules place duties around consequential automated decisions
- A technically impressive model can still create legal, financial
- View files: `modules/chapter7/example4/`

---

## Example 7.6 — Gender Shades Project
- Example 7.6 — hands-on module
- Example 7.6 records subgroup evidence from commercial facial analysis systems
- With underrepresentation in training data identified as an important cause
- The practical lesson is to report disaggregated errors before deployment rather than
- View files: `modules/chapter7/example6/`

---

## Example 7.9 — OECD AI Principles
- Example 7.9 — hands-on module
- Example 7.9 places fairness within a broader governance framework
- The OECD principles emphasize transparent, fair, inclusive
- Corrective action
- View files: `modules/chapter7/example9/`

---

## Fairness across the lifecycle
- Bias can enter through collection
- It can then be amplified during model training and deployment
- Fairness work must therefore span the lifecycle

---

## Takeaways
- Dataset bias describes systematic skew
- Average performance can conceal serious subgroup failures
- Trust depends on transparency and consistent treatment
- Policy principles and legal duties make these concerns part of routine engineering

---

## Next
- Complete the quiz for this part
- The next clip moves from the general definition to a practical taxonomy

