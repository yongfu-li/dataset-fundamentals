---
marp: true
title: Chapter 3 — Privacy-preserving techniques
paginate: true
---

# Chapter 3 — Privacy-preserving techniques

Teams often need useful analysis while reducing exposure of personal records

---

## Learning objectives
- Place four techniques on a protection map, state the main caveat for each
- Explain how they stack with consent and purpose limits

---

## Techniques at a glance
- Anonymization and de-identification reduce linkability in shared tables
- Encryption protects confidentiality in transit and at rest
- Differential privacy limits how much any single record can change an aggregate release
- Federated learning trains models where raw data stay on devices or silos

---

## Anonymization and re-identification risk
- Coarsening rare combinations
- The canonical warning
- Stronger protection usually requires coarser aggregation

---

## Example 3.13 — Re-identification from location patterns
- Example 3.13 — hands-on module
- Example 3.13 shows why anonymization is a management goal, not a guarantee
- Explore the chapter example module
- View files: `modules/chapter3/example13/`

---

## Encryption limits
- Encryption keeps intercepted packets unreadable
- Minimization, not from encryption alone
- Example 3.14 makes that limit explicit for medical messaging

---

## Differential privacy
- Differential privacy limits what an adversary learns about any individual from aggregate
- The standing trade-off is privacy budget versus accuracy
- Example 3.15 shows product telemetry released under a differential-privacy mechanism so

---

## Example 3.15 — Differential privacy for product telemetry
- Example 3.15 — hands-on module
- Example 3.15 depends on correct noise calibration and on not publishing too many
- Explore the chapter example module
- View files: `modules/chapter3/example15/`

---

## Federated learning
- Federated learning reduces central pools of raw text or sensor data by training locally
- Example 3.16 shows on-device keyboard prediction

---

## Example 3.16 — Federated learning for on-device keyboard prediction
- Example 3.16 — hands-on module
- Example 3.16 illustrates when raw centralization is unacceptable
- Explore the chapter example module
- View files: `modules/chapter3/example16/`

---

## Takeaways
- Choose controls to match the threat
- Stack techniques where needed
- Technical PETs implement privacy principles, they do not replace them

---

## Next
- Complete the quiz for this part
- Continue to bias and fairness, how ethical principles connect to model outcomes

