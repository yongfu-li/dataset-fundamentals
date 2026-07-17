---
marp: true
title: Chapter 7 — Fairness definitions and trade-offs
paginate: true
---

# Chapter 7 — Fairness definitions and trade-offs

Fairness is not one universal statistic

---

## Learning objectives
- Connect metric choices to transparency, accountability, and inclusivity

---

## Example 7.47 — Consistent Criteria in Hiring Decisions
- Example 7.47 — hands-on module
- Example 7.47 illustrates procedural fairness
- Every candidate should be evaluated with consistent, relevant criteria
- Opportunities to challenge an error, even before group outcome rates are compared
- View files: `modules/chapter7/example47/`

---

## Example 7.48 — Outcome Fairness in Predictive Policing
- Example 7.48 — hands-on module
- Example 7.48 illustrates outcome fairness
- A predictive policing system should not disproportionately target minority communities or
- Outcome fairness compares results across groups
- Procedural and outcome evidence should therefore be examined together
- View files: `modules/chapter7/example48/`

---

## Accuracy and fairness trade-offs
- An accuracy-maximizing threshold may distribute false positives and false negatives
- Adding a fairness constraint or changing thresholds can reduce that disparity while
- This is not evidence that fairness is a defect
- It reveals that optimization has multiple objectives and that error costs, rights

---

## Example 7.50 — Demographic Parity Reducing Loan Default Prediction
- Example 7.50 — hands-on module
- Example 7.50 shows a loan system adjusted toward equal approval rates across racial groups
- The adjustment may reduce default-prediction accuracy
- Explore the chapter example module
- View files: `modules/chapter7/example50/`

---

## Equalized odds
- Equalized odds seeks comparable false-positive and true-positive rates across groups
- It is especially relevant when both kinds of error carry serious consequences
- Achieving it may require group-aware constraints or post-processing

---

## Calibration
- Calibration asks whether a predicted probability has the same empirical meaning across
- If a system assigns a seventy-percent probability
- Calibration supports interpretable risk scores

---

## Ethical principles around metrics
- Transparency explains the data, criteria, limitations, and trade-offs
- Accountability assigns responsibility for audits, complaints, and correction
- Inclusivity brings affected groups into design and evaluation
- These principles prevent metric selection from becoming a purely technical exercise

---

## Takeaways
- Procedural fairness evaluates the decision process
- Not abstract
- Equalized odds compares error rates, calibration compares probability meaning

---

## Next
- Complete the quiz for this part
- The next clip turns fairness definitions into interventions

