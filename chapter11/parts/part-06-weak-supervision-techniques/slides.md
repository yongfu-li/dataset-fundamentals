---
marp: true
title: Chapter 11 — Techniques in weak supervision
paginate: true
---

# Chapter 11 — Techniques in weak supervision

Knowing that weak signals exist is not enough; teams need methods that combine them into usable training labels

---

## Learning objectives
- By the end of this part

---

## Programmatic labeling with Snorkel
- Snorkel is a framework for generating large-scale labeled datasets by combining weak
- Users write labeling functions
- A generative model estimates source accuracies and reconciles conflicts without requiring

---

## Example 11.14 — Labeling Functions for Spam Detection
- Example 11.14 — hands-on module
- Example 11.14 sketches a Snorkel-style labeling-function workflow
- Snorkel estimates source accuracies and outputs probabilistic training labels
- Explore the chapter example module
- View files: `modules/chapter11/example14/`

---

## Example 11.14 — listing

```
"""Example 11.14 — heuristic labeling functions for weak spam supervision."""

from __future__ import annotations

from collections import Counter


def lf_keywords(text: str) -> int:
    """Label +1 spam if promotional keywords appear, else abstain (0)."""
    keywords = ("free", "win", "prize", "click now")
    lowered = text.lower()
    return 1 if any(word in lowered for word in keywords) else 0


def lf_regex_money(text: str) -> int:
    """Label +1 spam if a $amount pattern appears, else abstain."""
    import re

    return 1 if re.search(r"\$\d+", text) else 0

```

---

## How conflicting labels are combined
- Each labeling function may cover only part of the data and may conflict with others
- Snorkel uses a probabilistic graphical model and expectation-maximization to refine
- The resulting probabilistic labels then train a discriminative model

---

## Heuristic-based labeling
- Heuristic-based labeling writes if-then rules that automatically assign labels when
- Rules are often domain-specific and sparse: they cover some items well and miss edge cases
- Experts can validate a small subset and refine rules over time

---

## Benefits and limits of heuristics
- Heuristics inject domain knowledge quickly and run at scale
- Limits include noise, sparse coverage, and brittleness on edge cases
- Heuristics therefore pair best with aggregation methods and small gold audits rather than

---

## Data programming and probabilistic labels
- Data programming combines multiple weak sources into probabilistic labels rather than hard
- The method learns each labeling function’s reliability
- Downstream models train on soft labels that reflect uncertainty instead of pretending

---

## Takeaways
- Snorkel-style labeling functions turn heuristics and weak classifiers into aggregated
- Heuristic rules scale domain knowledge but need refinement and audits
- Data programming learns source quality and emits probabilistic labels that handle conflict

---

## Next
- Complete the quiz for this part
- The next part introduces self-supervised learning

