---
marp: true
title: Chapter 4 — Annotation techniques
paginate: true
---

# Chapter 4 — Annotation techniques

Knowing which labels to apply is not enough, you still need a workflow that matches quality and budget

---

## Learning objectives
- Compare manual, semi-automated, fully automated
- Crowdsourced annotation on throughput and risk, summarize the trade-offs in Table 4.2
- Describe active learning and majority-vote patterns as practical workflow choices

---

## Technique trade-offs (Table 4.2)
- Annotation is labor-intensive
- Table 4.2 summarizes four approaches
- Manual annotation handles ambiguity and domain nuance but offers low throughput and
- Semi-automated labeling is faster when humans review model proposals but risks
- Fully automated pipelines scale at low marginal cost yet inherit skew and silent errors
- Crowdsourcing enables rapid scale for simple schemas but introduces worker variance and

---

## Manual annotation
- Ambiguity, or domain expertise matter more than throughput
- Humans handle occlusion, sarcasm

---

## Example 4.26 — Manual sentiment ambiguity
- Example 4.26 — hands-on module
- Example 4.26 shows a sentiment edge case
- A sentence such as “That was quite a disaster
- A brittle keyword rule may miss that tone
- Explore the chapter example module
- View files: `modules/chapter4/example26/`

---

## Semi-automated and active learning
- Semi-automated annotation combines human review with model-generated proposals
- A pre-trained detector may suggest boxes or entity spans
- Active learning prioritizes labeling for the most uncertain items so human effort

---

## Example 4.27 — Active learning queue for text
- Example 4.27 — hands-on module
- Example 4.27 shows a typical queueing pattern
- In text classification
- Active learning reduces label volume but still requires monitoring for bias introduced
- Explore the chapter example module
- View files: `modules/chapter4/example27/`

---

## Fully automated and crowdsourced annotation
- Fully automated pipelines label data without per-item human review
- Automated labelers inherit training-data skew
- Crowdsourcing distributes micro-tasks to many workers

---

## Example 4.28 — Majority vote on crowdsourced sentiment
- Example 4.28 — hands-on module
- Example 4.28 shows a simple redundancy pattern
- Three workers label the same review as positive, positive, and negative
- Crowdsourcing scales quickly but needs gold items, worker qualification
- Explore the chapter example module
- View files: `modules/chapter4/example28/`

---

## Takeaways
- Match technique to ambiguity, throughput, and ethics, not to habit
- Table 4.2 pairs each approach with its primary risk
- Combine workflows only when shared QC gates keep volume from eroding accuracy

---

## Next
- Complete the quiz for this part
- A minimal object-detection workflow

