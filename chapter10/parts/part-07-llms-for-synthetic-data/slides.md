---
marp: true
title: Chapter 10 — LLMs for synthetic text and labels
paginate: true
---

# Chapter 10 — LLMs for synthetic text and labels

Images and tabular rows are not the only synthesis targets

---

## Learning objectives
- Bias risks that demand screening and audit before training use

---

## Large language models as synthesizers
- Large language models offer a practical route for synthetic text, labels
- Language-model synthesis typically conditions a pretrained model on prompts
- This supports low-resource natural language processing, instruction tuning

---

## Common workflows
- Teams paraphrase existing sentences
- The same pattern appears in programmatic weak supervision
- Cheap generation is attractive when real text is scarce

---

## Hallucination and factual risk
- Language models can invent facts
- For regulated or clinical text
- Synthetic corpora therefore need factual and schema checks

---

## Memorization and privacy leakage
- Pretrained models may reproduce memorized training snippets
- Synthetic text is not automatically privacy-safe
- Releases must be screened for identifiers and linkage risk
- Privacy engineering controls from earlier chapters still apply

---

## Bias and representation skew
- Language models inherit social and demographic biases present in pretraining corpora
- Synthetic labels or dialogues can over-represent dominant viewpoints or stereotyped roles
- Fairness audits should cover both source seeds and generated cohorts

---

## Validation gates
- Retain human oversight for high-stakes labels
- Annotation quality practices from earlier chapters extend directly to synthetic text

---

## Takeaways
- Large language models enable fast text and label synthesis through prompting rather than
- Low cost does not imply low risk, hallucination, memorization
- Domain use cases in healthcare, finance, autonomy

---

## Next
- Complete the quiz for this part
- The next part walks privacy-preserving medical records, rare-disease simulation

