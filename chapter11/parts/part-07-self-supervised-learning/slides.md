---
marp: true
title: Chapter 11 — Introduction to self-supervised learning
paginate: true
---

# Chapter 11 — Introduction to self-supervised learning

Weak supervision still invents labels

---

## Learning objectives
- By the end of this part

---

## Definition versus supervised learning
- Supervised learning trains on input–label pairs, such as images tagged cat or dog
- Self-supervised learning does not require manual task labels during pretraining
- Instead, the model creates its own supervisory signal from the data by solving a pretext

---

## Why pretext tasks matter
- Pretext tasks force the model to learn useful features
- After pretraining
- This reduces labeling cost and can improve generalization when unlabeled corpora are

---

## Vision pretext examples
- Rotation prediction of randomly rotated images
- Solving these proxies teaches spatial and semantic structure that later supports detection

---

## Language pretext examples
- In natural language processing
- Next-sentence prediction and text infilling teach discourse and local coherence
- These tasks turn large unlabeled text corpora into representation learners before any

---

## Contrastive learning idea
- Contrastive methods learn representations by pulling similar views of the same instance
- In vision, two augmented crops of one image form a positive pair
- The resulting encoder captures discriminative features that transfer well when a linear

---

## Example 11.15 — Contrastive Pretraining Then Fine-Tune
- Example 11.15 — hands-on module
- Example 11.15 illustrates contrastive pretraining before fine-tuning
- A vision encoder is pretrained with SimCLR-style contrastive loss on unlabeled product
- Explore the chapter example module
- View files: `modules/chapter11/example15/`

---

## Takeaways
- Self-supervised learning creates supervision from unlabeled structure via pretext tasks
- It sits between supervised and unsupervised learning
- Contrastive pretraining plus light fine-tuning is a practical recipe when downstream

---

## Next
- Complete the quiz for this part
- Time-series forecasting, emphasizing data efficiency when downstream labels remain scarce

