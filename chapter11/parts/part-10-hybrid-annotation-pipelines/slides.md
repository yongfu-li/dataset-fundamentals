---
marp: true
title: Chapter 11 — Hybrid annotation pipelines
paginate: true
---

# Chapter 11 — Hybrid annotation pipelines

Neither crowd-only nor expert-only staffing is optimal for mixed schemas

---

## Learning objectives
- Speed benefits of hybrid staffing

---

## Why hybrid approaches
- Hybrid approaches balance cost, speed
- A useful pattern invests scarce experts where schema and gold labels are defined

---

## Example 11.25 — Expert Gold Then Crowd Scale-Up
- Example 11.25 — hands-on module
- Example 11.25 seeds crowd work with an expert gold set
- Experts first label a small medical-image gold set
- Crowds then label the remainder
- Explore the chapter example module
- View files: `modules/chapter11/example25/`

---

## Example 11.26 — Crowd Objects Expert Pathology
- Example 11.26 — hands-on module
- Example 11.26 splits simple objects to the crowd and pathology to experts
- Crowd workers tag cars and trees in street scenes
- Difficulty, not platform preference alone, drives who sees which item
- Explore the chapter example module
- View files: `modules/chapter11/example26/`

---

## Active learning in the hybrid queue
- Active learning can sit inside the hybrid workforce
- A model trained on a small expert seed set queries the most uncertain items for experts
- That routing shrinks expert hours while protecting hard cases that would otherwise pollute

---

## Example 11.28 — Active Learning Routes Hard Cases
- Example 11.28 — hands-on module
- Example 11.28 routes uncertain NLP items to experts via active learning
- Shrinking expert hours while protecting hard cases
- Explore the chapter example module
- View files: `modules/chapter11/example28/`

---

## Example 11.29 — Hybrid Cost Savings Pattern
- Example 11.29 — hands-on module
- Hybrid benefits include cost efficiency
- Example 11.29 summarizes the hybrid cost pattern
- Explore the chapter example module
- View files: `modules/chapter11/example29/`

---

## Quality, speed, and looking ahead
- Hybrid quality control uses expert oversight of crowd batches and guideline updates when
- Crowds deliver overnight throughput on easy items while a smaller expert pool clears the
- Move next to scalable storage and lineage for large labeled corpora

---

## Takeaways
- Hybrid pipelines assign routine volume to crowds and reserve experts for gold
- Active learning can route uncertainty to the right workforce tier
- Cost, quality

---

## Next
- Complete the quiz for this part
- This chapter’s clip sequence is complete

