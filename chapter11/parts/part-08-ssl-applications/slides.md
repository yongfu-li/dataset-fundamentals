---
marp: true
title: Chapter 11 — Applications of self-supervised learning
paginate: true
---

# Chapter 11 — Applications of self-supervised learning

Pretext tasks become concrete in domain settings

---

## Learning objectives
- By the end of this part

---

## Computer vision applications
- Segmentation before scarce labels are applied
- Which matters in domains where bounding boxes or masks are expensive

---

## Data efficiency in vision
- Once representations exist
- Teams still validate on held-out gold labels

---

## Natural language processing applications
- Masked language modeling and related objectives pretrain encoders on unlabeled text
- Downstream tasks such as classification, named entity recognition
- Large web-scale corpora supply the unlabeled fuel for that pretraining stage

---

## Transfer to specialized text
- Domain teams often start from a general pretrained language model and fine-tune on a
- The pretext-learned context and syntax transfer
- This pattern is common when expert text labels are scarce

---

## Time-series forecasting and imputation
- For time series
- Models learn temporal structure from unlabeled sensor or transaction streams
- Gap filling also prepares incomplete series for downstream monitoring tasks

---

## Anomaly detection and contrastive sequences
- Useful for fraud or equipment failure
- Clustering without labeling every window

---

## Takeaways
- Self-supervised applications span vision, language, and time series with a shared theme
- Benefits include data efficiency, real-time monitoring potential
- Quality still depends on validating the downstream labeled evaluation set

---

## Next
- Complete the quiz for this part
- The next part compares crowdsourcing and expert annotation on scale, cost, turnaround

