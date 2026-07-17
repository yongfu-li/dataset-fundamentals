---
marp: true
title: Chapter 11 — Introduction to weak supervision
paginate: true
---

# Chapter 11 — Introduction to weak supervision

Active learning still spends human labels on selected items

---

## Learning objectives
- By the end of this part

---

## Definition of weak supervision
- Weak supervision trains models using data that is partially labeled
- Then managing the noise they introduce

---

## Noisy, incomplete, and heuristic labels
- Noisy labels are incorrect or imprecise
- Incomplete labeling leaves much of the pool unlabeled and requires extrapolation from
- Heuristic or imprecise labels come from rules

---

## Programmatic and data-programming ideas
- Weakly supervised pipelines often use labeling functions
- The key challenge is managing noise and conflict among sources while still extracting
- Later sections detail Snorkel-style aggregation

---

## Advantages of weak supervision
- Weak supervision is cost-effective because it avoids labeling every item by hand
- It scales volume quickly when rules or distant sources can run over large corpora
- It also enables coverage in domains where clean labels are scarce

---

## Sources of weak supervision
- Transfer from pretrained models when domain labels are limited
- Each source is imperfect

---

## Distant supervision and related signals
- Distant supervision might infer company–investor relations from financial databases even
- Transfer learning can act as a weak signal when a general pretrained model is fine-tuned
- These patterns expand label volume but still require quality checks before production

---

## Takeaways
- Weak supervision replaces full hand labeling with noisy, incomplete, or heuristic signals
- Advantages include cost, scale, and coverage when gold labels are scarce
- Sources range from rules and distant databases to pretrained models

---

## Next
- Complete the quiz for this part
- Data programming that outputs probabilistic labels for training

