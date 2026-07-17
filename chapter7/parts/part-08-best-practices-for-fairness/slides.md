---
marp: true
title: Chapter 7 — Best practices for fairness
paginate: true
---

# Chapter 7 — Best practices for fairness

Fairness is most reliable when it is built into routine data and model governance

---

## Learning objectives
- Distinguish a technical audit from a broader impact assessment

---

## Representative data collection
- Collection should reflect the population, environments
- Teams should sample across relevant demographic, geographic, socioeconomic, age
- Representation targets and missing groups should be monitored throughout collection

---

## Clear labeling guidelines
- Labeling guidance should define categories, decision rules, edge cases, abstention options
- Pilot rounds can reveal ambiguity before large-scale annotation begins
- Agreement measures identify unstable tasks

---

## Diverse annotators and human oversight
- Diverse annotators contribute different cultural and experiential perspectives
- Human-in-the-loop review supports adjudication, correction, and continuous refinement
- Diversity should not be treated as a substitute for training

---

## Validation on diverse datasets
- Evaluation data should cover the groups and operating conditions the system will encounter
- Overall accuracy must be disaggregated into suitable performance and fairness metrics
- Equipment, geography, or population composition changes

---

## Regular fairness audits
- Audits should occur before release, after retraining or major data changes
- Assign corrective actions
- A useful audit has an owner, a schedule, reproducible evidence, decision thresholds

---

## Impact assessments
- Impact assessments extend beyond metric checks
- Accountability
- They also examine how an ostensibly accurate tool may change institutional behavior

---

## A continuous fairness loop
- The practices form a loop
- Documentation connects each stage so later reviewers can understand decisions and

---

## Takeaways
- Fairness begins with representative collection and explicit labeling rules
- Diverse participation and human oversight improve judgment but require supporting controls
- Validation must be disaggregated and realistic, audits must recur as systems change

---

## Next
- Complete the quiz for this part
- The next clip examines tooling that can make these practices repeatable

