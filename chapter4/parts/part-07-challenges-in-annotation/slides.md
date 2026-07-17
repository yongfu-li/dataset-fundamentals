---
marp: true
title: Chapter 4 — Challenges in data annotation
paginate: true
---

# Chapter 4 — Challenges in data annotation

Even strong quality-control programs face structural limits

---

## Learning objectives
- Describe throughput bottlenecks in large labeling programs
- Explain why rare classes need expert validation and targeted workflows

---

## Scale and throughput bottlenecks
- Large vision and language models can require millions of labeled instances
- Common responses reuse workflows from earlier sections
- Each speed-up still needs the quality-control gates from the previous part so volume does

---

## Bias in annotation
- Bias in annotation can skew labels and propagate into models
- The focus here is labeler and guideline failure modes that create biased training data
- Annotator bias, unrepresentative sampling
- Human adjudication when automated suggestions disagree across demographic subgroups
- Fairness metrics and deeper mitigation appear in Chapter 3 and Chapter 7

---

## Ethical concerns
- Data annotation raises ethical issues of fair compensation, privacy, and harmful labels
- Crowdsourced marketplaces should pay fairly for task complexity, disclose payment rules
- Label schemas for race
- Chapter 3 supplies the broader ethics and privacy frame

---

## Annotating rare events
- Rare classes
- Domain experts should validate gold sets
- Rare-class work is where manual review and QC investment concentrate rather than where

---

## Takeaways
- Scale demands combined workflows, not blind volume
- Bias enters through people, sampling
- Ethics and rare classes both require expert gates before labels enter training pools

---

## Next
- Complete the quiz for this part
- Emerging domains

