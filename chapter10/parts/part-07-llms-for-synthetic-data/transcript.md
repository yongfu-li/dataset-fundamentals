# Chapter 10 — LLMs for synthetic text and labels — transcript

**Clip id:** part-07-llms-for-synthetic-data
**Estimated duration:** 6 minutes
**Sources:** `author/chapter10.tex` (§10.5)

## Slide 1 — Chapter 10 — LLMs for synthetic text and labels

Images and tabular rows are not the only synthesis targets. This part explains how large language models generate synthetic text, labels, and structured records through prompting, and why hallucination, memorization, and bias require the same validation gates as generative adversarial outputs.

## Slide 2 — Learning objectives

By the end of this part, learners should be able to describe prompt-based text and label synthesis workflows; explain differences from adversarial image generators; and list hallucination, memorization, and bias risks that demand screening and audit before training use.

## Slide 3 — Large language models as synthesizers

Large language models offer a practical route for synthetic text, labels, and structured rows. Unlike generative adversarial networks trained through a discriminator game, language-model synthesis typically conditions a pretrained model on prompts, schema instructions, or seed examples and asks it to emit new content. This supports low-resource natural language processing, instruction tuning, and rapid dataset prototyping.

## Slide 4 — Common workflows

Teams paraphrase existing sentences, expand class-balanced corpora, or draft customer-support transcripts with controlled attributes such as product, sentiment, and urgency. The same pattern appears in programmatic weak supervision: a model proposes candidate labels that humans or heuristics later audit. Cheap generation is attractive when real text is scarce, sensitive, or expensive to annotate.

## Slide 5 — Hallucination and factual risk

Language models can invent facts, entities, or label rationales that look plausible yet are wrong. For regulated or clinical text, hallucinated content can poison training data and mislead downstream systems. Synthetic corpora therefore need factual and schema checks—not only fluency review—before they enter model training or human-subjects research.

## Slide 6 — Memorization and privacy leakage

Pretrained models may reproduce memorized training snippets, including personally identifiable information. Synthetic text is not automatically privacy-safe. Releases must be screened for identifiers and linkage risk, especially when prompts echo rare real records. Privacy engineering controls from earlier chapters still apply.

## Slide 7 — Bias and representation skew

Language models inherit social and demographic biases present in pretraining corpora. Synthetic labels or dialogues can over-represent dominant viewpoints or stereotyped roles, amplifying unfair outcomes in hiring, moderation, or healthcare applications. Fairness audits should cover both source seeds and generated cohorts.

## Slide 8 — Validation gates

Language-model synthesis must pass the same validation and ethics gates as statistical or generative-adversarial outputs: compare distributions to real benchmarks, document prompts and model versions, audit for sensitive content, and retain human oversight for high-stakes labels. Annotation quality practices from earlier chapters extend directly to synthetic text pipelines.

## Slide 9 — Takeaways

Large language models enable fast text and label synthesis through prompting rather than adversarial training. Low cost does not imply low risk—hallucination, memorization, and bias demand explicit screening. Domain use cases in healthcare, finance, autonomy, and security are explored in the next parts.

## Slide 10 — Next

The next part walks privacy-preserving medical records, rare-disease simulation, and synthetic fraud patterns for financial model training.
