---
marp: true
title: Chapter 11 — Crowdsourcing versus expert annotation
paginate: true
---

# Chapter 11 — Crowdsourcing versus expert annotation

Representation learning and weak labels still leave a workforce question: who should annotate which items?

---

## Learning objectives
- By the end of this part

---

## Crowdsourcing advantages
- For annotation, crowdsourcing offers scale, lower per-item cost, fast turnaround
- Those advantages matter most when the schema is simple, guidelines are clear
- This section emphasizes when experts must own labels rather than restating platform

---

## Example 11.16 — Crowd Scale for Attribute Labels
- Example 11.16 — hands-on module
- Example 11.16 shows crowd scale for high-volume attribute labeling
- A vision team needs millions of face images tagged with age band, expression
- Crowdsourcing platforms distribute the schema across many workers so labeling finishes in
- Explore the chapter example module
- View files: `modules/chapter11/example16/`

---

## Example 11.17 — Crowd Cost for Product Images
- Example 11.17 — hands-on module
- Example 11.17 contrasts crowd cost with expert-only product labeling
- A retailer needs thousands of product photos labeled for category and attributes
- Paying only domain experts would blow the budget
- Explore the chapter example module
- View files: `modules/chapter11/example17/`

---

## Crowdsourcing challenges
- Crowd workers may be inconsistently trained or motivated, producing noisy annotations
- Mitigation requires ground-truth checks, gold questions, and redundancy
- Platform ethics and inter-annotator agreement controls from earlier chapters should be in

---

## Example 11.20 — Expert Quality for Radiology Labels
- Example 11.20 — hands-on module
- Expert annotation uses specialists for tasks that need deep domain knowledge
- Example 11.20 shows why expert quality matters for clinical images
- Explore the chapter example module
- View files: `modules/chapter11/example20/`

---

## Example 11.22 — Legal Experts for Contract Clauses
- Example 11.22 — hands-on module
- Experts also improve consistency on complex legal schemas
- Example 11.22 keeps legal clause labeling with domain experts
- Explore the chapter example module
- View files: `modules/chapter11/example22/`

---

## Expert challenges
- Expert annotation is expensive and hard to scale because skilled professionals are scarce
- Careful analysis also slows throughput
- Which motivates hybrid designs in the next part

---

## Takeaways
- Crowds excel at scale, cost, and speed on clear schemas with gold checks
- Experts excel at precision and consistency on radiology, legal
- Expert-only staffing hits cost and capacity walls

---

## Next
- Complete the quiz for this part
- The next part covers hybrid annotation pipelines

