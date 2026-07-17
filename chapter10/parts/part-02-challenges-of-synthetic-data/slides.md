---
marp: true
title: Chapter 10 — Challenges of synthetic data
paginate: true
---

# Chapter 10 — Challenges of synthetic data

Synthetic data promises scale and privacy, but generated rows are not automatically trustworthy

---

## Learning objectives
- By the end of this part

---

## Validation and generalization gaps
- A central challenge is proving that synthetic data represents the phenomena it is meant to
- Generated samples may match aggregate statistics yet miss subtle structure
- Models trained only on synthetic data may look strong in controlled tests yet fail when

---

## Example 10.4 — Face-Recognition Validation Gap
- Example 10.4 — hands-on module
- Example 10.4 highlights a validation gap for synthetic faces
- Images may appear realistic yet lack lighting changes, occlusions
- A face-recognition model trained on such data can underperform in production
- Explore the chapter example module
- View files: `modules/chapter10/example4/`

---

## Generalization beyond the generator
- Synthetic data must generalize to conditions the generator never saw
- Real environments change unpredictably, markets shift, sensors drift
- When synthetic corpora oversimplify those dynamics

---

## Potential biases from source data
- Because generators learn from existing datasets or predefined models
- Mitigation matters

---

## Example 10.5 — Demographic Bias in GAN Training Data
- Example 10.5 — hands-on module
- Example 10.5 shows how biased source data propagates through a generative adversarial
- If training images underrepresent certain groups
- In sensitive domains such as healthcare or hiring
- Explore the chapter example module
- View files: `modules/chapter10/example5/`

---

## Overfitting and lack of diversity
- Machine-learning generators can overfit training data and emit homogeneous samples
- When synthetic sets omit edge cases or rare events
- Diversity is not optional

---

## Takeaways
- Synthetic data requires explicit validation against real benchmarks
- Source bias, mode collapse, and homogeneity can all undermine utility
- Teams should treat challenges here as design constraints before choosing statistical

---

## Next
- Complete the quiz for this part
- Monte Carlo simulation for uncertain outcomes such as asset returns

