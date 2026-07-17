---
marp: true
title: Chapter 7 — Mitigating bias in datasets
paginate: true
---

# Chapter 7 — Mitigating bias in datasets

Once a disparity and a fairness objective are defined

---

## Learning objectives
- Select an intervention using evidence rather than convenience

---

## Pre-processing through reweighting
- Reweighting changes how strongly training instances influence learning
- Underrepresented groups can receive greater weight so that the majority group does not
- This approach preserves records while changing their contribution

---

## Pre-processing through feature treatment
- Sensitive or strongly biased features may be removed
- Simple removal is not a guarantee of fairness because names, neighborhoods, schools
- Feature treatment should be followed by proxy analysis and subgroup evaluation

---

## In-processing with fairness constraints
- Fairness-constrained learning modifies the training objective by adding a constraint or
- The model then optimizes predictive performance and the selected fairness criterion
- Quality of outcome labels

---

## In-processing with adversarial debiasing
- Adversarial debiasing trains a predictor alongside an adversary that tries to infer a
- The predictor is penalized when the adversary succeeds
- The method can reduce proxy leakage

---

## Post-processing with equalized odds
- Equalized-odds post-processing adjusts decisions or thresholds from an already trained
- Operational review
- They can also change accuracy and may become unstable when group samples are small

---

## Post-processing with calibration
- Calibration adjusts predicted probabilities so that a score has a consistent empirical
- It is valuable when scores guide human decisions or resource allocation
- Calibration does not guarantee equal selection or error rates

---

## Choosing and validating an intervention
- Intervention begins with a diagnosed mechanism and a stated fairness target
- Monitor drift after deployment
- Mitigation is an iterative control process rather than a one-time repair

---

## Takeaways
- Pre-processing changes data, in-processing changes learning
- Output adjustment targets decision behavior or probability meaning
- Every method must be validated against the intended fairness objective

---

## Next
- Complete the quiz for this part
- The next clip moves from individual techniques to operating practice

