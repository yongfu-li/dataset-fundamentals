---
marp: true
title: Chapter 10 — Introduction to synthetic data
paginate: true
---

# Chapter 10 — Introduction to synthetic data

Chapters 2 through 9 covered how real records are collected, labeled, cleaned, documented, and scaled

---

## Learning objectives
- Scalability benefits that motivate synthetic generation

---

## Definition and analytical value
- Patterns, or structure of real data
- The primary requirement is analytical value
- Synthetic outputs may still miss some real-world noise and edge complexity

---

## Example 10.1 — Cross-Modal Fidelity in Synthetic Data
- Example 10.1 — hands-on module
- Example 10.1 contrasts fidelity across modalities
- Trends seen in real markets
- The same generator cannot be judged by one universal rule; fidelity is modality-specific
- Explore the chapter example module
- View files: `modules/chapter10/example1/`

---

## Generation methods at a glance
- Simulation engines
- Statistical approaches draw from fitted distributions or Monte Carlo models
- Machine learning methods learn an underlying data distribution and emit new samples that
- The method choice depends on modality, privacy goals, and validation capacity

---

## Example 10.2 — Synthetic Patient Records for Privacy
- Example 10.2 — hands-on module
- Example 10.2 shows privacy-preserving medical records
- A healthcare provider can generate synthetic patient tables that mimic real diagnostic and
- This supports research and model development under regulations such as HIPAA and GDPR
- Explore the chapter example module
- View files: `modules/chapter10/example2/`

---

## Cost efficiency and scalability
- Collecting real-world data
- Synthetic generation scales volume on demand and can fill underrepresented classes or edge
- Fraud detection and rare-disease modeling are common cases where synthetic volume helps

---

## Example 10.3 — Synthetic Driving Scenarios for AV Training
- Example 10.3 — hands-on module
- Example 10.3 illustrates synthetic autonomous-driving scenarios
- Simulations can produce varied weather, lighting
- Synthetic clips let perception and planning stacks encounter diverse conditions before
- Explore the chapter example module
- View files: `modules/chapter10/example3/`

---

## Takeaways
- Synthetic data is algorithmically generated yet must preserve analytical structure
- Fidelity requirements differ by modality
- Key benefits include privacy preservation, lower collection cost
- Benefits do not remove the need for validation, which the next part addresses

---

## Next
- Complete the quiz for this part
- Overfitting or lack of diversity when models train only on synthetic copies

