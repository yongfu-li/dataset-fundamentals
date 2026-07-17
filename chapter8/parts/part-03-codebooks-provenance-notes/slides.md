---
marp: true
title: Chapter 8 — Codebooks, provenance, and notes
paginate: true
---

# Chapter 8 — Codebooks, provenance, and notes

Dictionaries name variables; reuse also needs coded categories, source trails, and caveats

---

## Learning objectives
- Write annotation notes that expose sampling limits or known data-quality issues

---

## Codebooks for encoded categories
- A codebook maps numeric or abbreviated codes to full categorical meanings
- Healthcare, government
- Without a codebook, those codes are opaque and analyses risk silent mislabeling of classes

---

## Example 8.9 — Medical Condition Codebook
- Example 8.9 — hands-on module
- Example 8.9 maps disease codes to readable names
- Explore the chapter example module
- View files: `modules/chapter8/example9/`

---

## Example 8.9 — listing

```
Code,Disease Name
1,Hypertension
2,Diabetes
3,Asthma
4,Chronic Obstructive Pulmonary Disease (COPD)
```

---

## Provenance as data lineage
- Also called data lineage, records where data came from and what operations followed
- Links to other datasets that were merged or joined
- Provenance supports integrity checks and explains how validity may have changed

---

## Example 8.10 — Retail Transaction Provenance Trail
- Example 8.10 — hands-on module
- Example 8.10 summarizes a retail trail
- That short narrative lets auditors reconstruct the processing path
- Explore the chapter example module
- View files: `modules/chapter8/example10/`

---

## Annotations and qualitative notes
- Annotations capture context that structured metadata cannot easily hold
- They warn users about sampling bias

---

## Example 8.11 — Urban-Only Sampling Note
- Example 8.11 — hands-on module
- Example 8.11 records a critical sampling limit
- Without that note, downstream users might treat results as nationally generalizable
- Explore the chapter example module
- View files: `modules/chapter8/example11/`

---

## Takeaways
- Codebooks unlock encoded categories
- Together with metadata and dictionaries from the previous part
- Omissions in any layer create silent failure modes

---

## Next
- Complete the quiz for this part
- The next part turns components into practice

