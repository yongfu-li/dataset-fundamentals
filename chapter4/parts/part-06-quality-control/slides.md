---
marp: true
title: Chapter 4 — Quality control in annotation
paginate: true
---

# Chapter 4 — Quality control in annotation

Tools speed labeling, but inconsistent labels teach the wrong decision boundaries

---

## Learning objectives
- Name frequent annotation failure modes
- Describe training habits that sustain label quality during long projects

---

## Why quality control matters
- Label quality bounds model performance in supervised learning
- Inconsistent or missing labels teach the wrong decision boundaries
- Quality control is therefore part of dataset governance, not optional polish
- Annotator training before and during full-scale labeling

---

## Common annotation errors
- Subjective bias in sentiment or toxicity labels
- Guidelines with positive and negative examples reduce but do not eliminate these errors

---

## Example 4.30 — Inconsistent class names
- Example 4.30 — hands-on module
- Example 4.30 shows a naming inconsistency that looks minor but splits the class signal
- One annotator tags pets as “dog” while another uses “puppy” for young dogs
- Without a guideline that collapses those strings to one class
- Explore the chapter example module
- View files: `modules/chapter4/example30/`

---

## Inter-annotator agreement (Table 4.4)
- Inter-annotator agreement measures consistency among annotators labeling the same items
- High agreement supports reliable guidelines and usable gold labels
- Table 4.4 summarizes common chance-corrected coefficients
- Cohen’s kappa suits two raters on nominal labels
- Fleiss’ kappa extends the idea to more than two raters
- Krippendorff’s alpha handles ordinal or mixed levels and missing ratings with flexible

---

## Example 4.31 — Low kappa triggers guideline revision
- Example 4.31 — hands-on module
- Example 4.31 shows how low agreement should stop a scale-up rather than be ignored
- On a named-entity pilot
- The team revises examples and re-trains before labeling the full corpus
- Clear instructions, calibration rounds
- View files: `modules/chapter4/example31/`

---

## Gold-set audit metrics
- Inter-annotator agreement measures agreement among annotators
- After adjudication, teams track label-level precision and recall on an audit set

---

## Example 4.32 — Annotator audit versus model test
- Example 4.32 — hands-on module
- Example 4.32 separates labeler metrics from model test scores
- On a held-out review batch
- Those figures evaluate the labeler, not the detector trained later on the released corpus
- Explore the chapter example module
- View files: `modules/chapter4/example32/`

---

## Training annotators
- Train annotators with written guidelines, worked examples
- Regular feedback sessions and spot audits keep drift in check
- Specialist programs

---

## Takeaways
- Fix class-name hygiene, missed instances, and subjective drift with guidelines plus audits
- Use IAA to decide whether to scale
- Train, calibrate, and re-audit after any guideline or tool change

---

## Next
- Complete the quiz for this part
- Complete the quiz

