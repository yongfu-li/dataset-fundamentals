---
marp: true
title: Chapter 11 — From fundamentals to advanced annotation
paginate: true
---

# Chapter 11 — From fundamentals to advanced annotation

Chapter 4 covered annotation modalities, workflows, tools, and quality control

---

## Learning objectives
- By the end of this part

---

## Shared labeling bottleneck
- Manual labels are slow, expensive
- Chapter 4 already identified that bottleneck
- Advanced strategies attack it from different angles

---

## Four strategies at a glance
- Active learning chooses which unlabeled items humans should label next
- Weak supervision proposes training labels from heuristics and distant sources
- Self-supervised learning postpones task labels by pretraining on unlabeled structure
- Hybrid crowd–expert pipelines assign routine items to crowds and reserve experts for gold

---

## Table 11.1 — What each strategy optimizes
- The chapter comparison table contrasts who provides labels, when each strategy fits
- Active learning optimizes which items humans label when a seed model can rank uncertainty
- Weak supervision optimizes scale from cheap sources when domain rules exist

---

## Table 11.1 — Self-supervision and hybrid pipelines
- But still needs labeled data for the final task
- Hybrid crowd–expert staffing optimizes the cost–quality mix when the schema is partly

---

## Complementary, not exclusive
- Teams often combine strategies
- Synthetic companions from Chapter 10 can still fill rare classes

---

## Takeaways
- Four strategies share one goal: reduce costly expert labeling without abandoning quality
- Active learning queries humans selectively
- The remainder of the chapter develops each strategy in turn

---

## Next
- Complete the quiz for this part
- Entropy sampling, with examples from vision and medical imaging

