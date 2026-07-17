---
marp: true
title: Chapter 4 — Best practices for annotation
paginate: true
---

# Chapter 4 — Best practices for annotation

Use cases illustrate stakes; day-to-day habits sustain quality

---

## Learning objectives
- Draft guideline habits with positive and negative exemplars
- Use pre-labeling only with audit thresholds met

---

## Guidelines and exemplars
- Strong annotation programs share a common skeleton
- Guidelines specify class definitions, edge cases, and prohibited inferences
- Include positive and negative examples for each label and document how to handle ambiguity
- Version the guideline document when schemas change, retrain annotators on diffs

---

## Feedback, audits, and drift checks
- Run regular calibration sessions while labeling is active
- Insert repeated gold items to detect drift over long projects

---

## Diversity and bias reduction
- Where labels encode social constructs such as sentiment
- In practice: include diverse reviewers, test subgroup agreement
- Diversity is not only a collection concern

---

## Pre-labeling and effort reduction
- Use pre-labeling to propose candidates
- Combine active learning, pre-labeling
- A model proposal accepted without correction is still a human decision and should appear

---

## Takeaways
- Versioned guidelines with inline exemplars anchor every labeler
- Calibration, gold items, and re-audits catch drift after tool or schema changes
- Pre-labeling saves time only when proposals stay under human review with measured error

---

## Next
- Complete the quiz for this part
- The bridge to data cleaning in Chapter 5

