---
marp: true
title: Chapter 11 — Active learning applications
paginate: true
---

# Chapter 11 — Active learning applications

Query strategies matter only when they change real labeling queues

---

## Learning objectives
- By the end of this part

---

## Active learning in NLP
- Related tasks
- Annotating large corpora is expensive, especially for legal or medical text
- The model focuses labeling on informative or uncertain samples such as ironic

---

## Example 11.9 — Active Learning for Review Sentiment
- Example 11.9 — hands-on module
- Example 11.9 queues uncertain reviews for human sentiment labels
- Improving nuance with fewer total annotations
- Explore the chapter example module
- View files: `modules/chapter11/example9/`

---

## Active learning in vision
- In computer vision
- Active learning focuses annotators on frames that most improve performance

---

## Example 11.10 — Active Learning for Driving Perception
- Example 11.10 — hands-on module
- Example 11.10 focuses annotators on occluded or foggy driving scenes
- So perception models learn rare hard cases without labeling every fleet frame
- Explore the chapter example module
- View files: `modules/chapter11/example10/`

---

## Healthcare case study
- Medical image labeling requires domain expertise and is costly
- Active learning reduces the number of expert annotations while routing the most
- Experts spend limited time on atypical or overlapping pathologies rather than routine easy

---

## Example 11.12 — Pneumonia Detection with Uncertain X-rays
- Example 11.12 — hands-on module
- Example 11.12 sends atypical chest X-rays to radiologists via active learning
- Improving edge-case detection with fewer labeled studies
- Explore the chapter example module
- View files: `modules/chapter11/example12/`

---

## Example 11.13 — Dermoscopic Lesion Uncertainty Queue
- Example 11.13 — hands-on module
- Example 11.13 prioritizes ambiguous skin lesions for dermatologist labels
- Active learning queues atypical or rare dermoscopic images for expert labeling so the
- Explore the chapter example module
- View files: `modules/chapter11/example13/`

---

## Takeaways
- Across NLP, driving perception
- Seed models plus selective expert review cut annotation volume while improving edge-case
- Routine easy items need not consume expert hours

---

## Next
- Complete the quiz for this part
- The next part introduces weak supervision

