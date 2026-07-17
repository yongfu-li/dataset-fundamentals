---
marp: true
title: Chapter 11 — Active learning basics
paginate: true
---

# Chapter 11 — Active learning basics

Active learning attacks the labeling bottleneck by letting the model choose which unlabeled items humans should label

---

## Learning objectives
- By the end of this part

---

## The iterative feedback loop
- Active learning starts from a small labeled seed set
- The cycle repeats until performance or budget stops the loop
- The goal is better generalization with fewer total labels than random annotation

---

## Query strategies overview
- A query strategy defines how the model ranks unlabeled items for human labeling
- Uncertainty sampling targets low-confidence predictions near decision boundaries
- Margin sampling ranks by the gap between the top two class probabilities
- Entropy sampling ranks by predictive entropy over the full class distribution
- Strategies can be combined or adapted to the task

---

## Example 11.1 — Uncertainty Sampling for Cat-Dog Images
- Example 11.1 — hands-on module
- Example 11.1 shows uncertainty sampling on a binary vision task
- An image with predicted probabilities near 0.51 and 0.49 for cat versus dog is queued for
- Explore the chapter example module
- View files: `modules/chapter11/example1/`

---

## Example 11.1 — listing

```
"""Example 11.1 — uncertainty sampling queues near-tie binary predictions."""

from __future__ import annotations


def uncertainty_score(p_positive: float) -> float:
    """Return distance from a 0.5 decision boundary (lower => more uncertain)."""
    return abs(p_positive - 0.5)


def main() -> None:
    """Rank unlabeled images by binary prediction uncertainty."""
    pool: list[tuple[str, float]] = [
        ("img_clear_dog.jpg", 0.92),
        ("img_clear_cat.jpg", 0.11),
        ("img_blurry_pet.jpg", 0.51),
        ("img_night_pet.jpg", 0.48),
        ("img_toy_animal.jpg", 0.67),
    ]
    ranked = sorted(pool, key=lambda row: uncertainty_score(row[1]))
```

---

## Example 11.2 — Margin Sampling in Multi-Class Tasks
- Example 11.2 — hands-on module
- Example 11.2 refines the idea for multi-class settings
- Signaling weak class separation that a new label can sharpen
- This differs from absolute least-confidence alone by focusing on the competing pair of
- View files: `modules/chapter11/example2/`

---

## Example 11.2 — listing

```
"""Example 11.2 — margin sampling prioritizes the smallest top-two gap."""

from __future__ import annotations


def margin(probs: dict[str, float]) -> float:
    """Return the gap between the top two class probabilities."""
    ordered = sorted(probs.values(), reverse=True)
    return ordered[0] - ordered[1]


def main() -> None:
    """Rank multi-class predictions by margin (smaller margin => query first)."""
    pool: list[tuple[str, dict[str, float]]] = [
        ("doc_clear", {"sports": 0.80, "politics": 0.12, "biz": 0.08}),
        ("doc_close", {"sports": 0.41, "politics": 0.39, "biz": 0.20}),
        ("doc_flatish", {"sports": 0.36, "politics": 0.34, "biz": 0.30}),
    ]
    ranked = sorted(pool, key=lambda row: margin(row[1]))
    print("Multi-class pool; smaller top-two margin => higher labeling priority\n")
```

---

## Example 11.3 — High-Entropy Multi-Class Prediction
- Example 11.3 — hands-on module
- Example 11.3 illustrates entropy sampling
- If the model predicts class A at 0.4 and classes B and C at 0.3 each
- Flat distributions across many classes are informative even when no single probability is
- View files: `modules/chapter11/example3/`

---

## Example 11.3 — listing

```
"""Example 11.3 — entropy sampling selects the flattest predictive distribution."""

from __future__ import annotations

import math


def entropy(probs: list[float]) -> float:
    """Return Shannon entropy of a discrete probability distribution."""
    return -sum(p * math.log2(p) for p in probs if p > 0)


def main() -> None:
    """Compare entropy for peaked vs flat multi-class predictions."""
    cases: list[tuple[str, list[float]]] = [
        ("peaked (A=0.90)", [0.90, 0.05, 0.05]),
        ("book example (A=0.4, B=C=0.3)", [0.40, 0.30, 0.30]),
        ("uniform (1/3 each)", [1 / 3, 1 / 3, 1 / 3]),
    ]
    print(f"{'Distribution':<32}{'Entropy (bits)':>16}{'Priority':>10}")
```

---

## Active-learning pipeline steps
- The pipeline is incremental
- The loop stops when the model meets a performance threshold or the labeling budget is
- Effort concentrates on informative cases rather than easy majority examples

---

## Example 11.4 — Active Learning for MRI Tumor Detection
- Example 11.4 — hands-on module
- Example 11.4 applies the full loop to expert MRI labeling
- A tumor detector starts from a small labeled MRI seed set
- Explore the chapter example module
- View files: `modules/chapter11/example4/`

---

## Takeaways
- Active learning is an iterative loop that queries humans where the model is least sure
- Uncertainty, margin, and entropy sampling are complementary ways to rank informativeness
- Medical and vision examples show how seed training plus selective expert labels can reduce

---

## Next
- Complete the quiz for this part
- The next part covers complementary techniques beyond basic uncertainty

