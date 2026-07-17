---
marp: true
title: Chapter 7 — Fairness toolkits and case study
paginate: true
---

# Chapter 7 — Fairness toolkits and case study

Fairness toolkits help teams compute disaggregated metrics, compare mitigation strategies

---

## Learning objectives
- By the end of this clip

---

## IBM AI Fairness 360
- Mitigation algorithms
- Its methods span pre-processing, in-processing
- This breadth supports experimentation across several fairness definitions

---

## Microsoft Fairlearn
- Fairlearn emphasizes disaggregated assessment and fairness-aware mitigation within common
- Grouped metric reporting exposes performance gaps that an average conceals
- It is particularly convenient when models already use the scikit-learn ecosystem

---

## Using tools responsibly
- A defensible workflow first states the decision context, affected groups, harms, labels
- The toolkit then computes evidence and tests candidate interventions
- Teams must report uncertainty, utility changes, and unresolved harms
- Default settings and benchmark datasets are starting points

---

## Case study — Gender bias in text data
- Large text corpora can associate occupations and social roles with gender stereotypes
- Models learn these associations and may reproduce them in generation

---

## Debiasing representations
- One mitigation strategy identifies a gender direction in a word-embedding space and
- Data balancing and fairness-aware training provide alternatives
- Any intervention must distinguish harmful stereotypes from legitimate linguistic

---

## Evaluating the outcome
- Realistic prompts
- Human review by affected communities can identify harms that a numeric score misses
- Because language and usage evolve

---

## Takeaways
- AI Fairness 360 provides broad metrics and interventions across pipeline stages
- Toolkits make analysis repeatable but cannot choose the ethical objective
- Text debiasing requires both representation-level tests and downstream

---

## Next
- Complete the quiz for this part
- Deployment governance

