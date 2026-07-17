# Chapter 7 — Fairness toolkits and case study — transcript

**Clip id:** clip-09-fairness-toolkits-and-case-study  
**Estimated duration:** 6 minutes  
**Sources:** `author/chapter7.tex` (§7.8)

## Slide 1 — Chapter 7 — Fairness toolkits and case study

Fairness toolkits help teams compute disaggregated metrics, compare mitigation strategies, and repeat analyses as data and models change. They reduce implementation effort, but they do not determine which groups, harms, or fairness definitions matter. This clip compares two toolkits and applies the broader workflow to gender bias in text.

## Slide 2 — Learning objectives

By the end of this clip, learners should describe the main capabilities of AI Fairness 360 and Fairlearn, select a toolkit according to workflow needs, explain how gender stereotypes enter text representations, and design evaluation that checks whether a debiasing intervention actually improves downstream behavior.

## Slide 3 — IBM AI Fairness 360

IBM AI Fairness 360 offers a broad collection of dataset and model metrics, reference datasets, and mitigation algorithms. Its methods span pre-processing, in-processing, and post-processing, including reweighting and adversarial approaches. This breadth supports experimentation across several fairness definitions, especially when a team needs to compare interventions at different pipeline stages.

## Slide 4 — Microsoft Fairlearn

Fairlearn emphasizes disaggregated assessment and fairness-aware mitigation within common Python model workflows. Grouped metric reporting exposes performance gaps that an average conceals, while reduction and threshold methods can impose constraints such as demographic parity or equalized odds. It is particularly convenient when models already use the scikit-learn ecosystem.

## Slide 5 — Using tools responsibly

A defensible workflow first states the decision context, affected groups, harms, labels, and desired fairness criterion. The toolkit then computes evidence and tests candidate interventions. Teams must report uncertainty, utility changes, and unresolved harms. Default settings and benchmark datasets are starting points, not substitutes for domain judgment or stakeholder participation.

## Slide 6 — Case study — Gender bias in text data

Large text corpora can associate occupations and social roles with gender stereotypes, such as linking doctors and engineers with men while linking nurses and teachers with women. Models learn these associations and may reproduce them in generation, translation, sentiment analysis, recommendation, or hiring applications, even when gender is not an explicit input field.

## Slide 7 — Debiasing representations

One mitigation strategy identifies a gender direction in a word-embedding space and reduces unwanted associations by projecting selected representations toward a more neutral space. Data balancing and fairness-aware training provide alternatives. Any intervention must distinguish harmful stereotypes from legitimate linguistic information and avoid erasing identities or masking bias that persists elsewhere.

## Slide 8 — Evaluating the outcome

Evaluation should compare association tests before and after intervention and then examine downstream tasks, subgroup errors, generated content, and realistic prompts. Human review by affected communities can identify harms that a numeric score misses. Because language and usage evolve, the evaluation should recur after data updates and deployment.

## Slide 9 — Takeaways

AI Fairness 360 provides broad metrics and interventions across pipeline stages, while Fairlearn integrates disaggregated assessment and constrained mitigation into familiar model workflows. Toolkits make analysis repeatable but cannot choose the ethical objective. Text debiasing requires both representation-level tests and downstream, human-centered evaluation.

## Slide 10 — Next

The final clip looks ahead to generative artificial intelligence, decentralized training, evolving regulation, and deployment governance. These settings extend the same core principles while introducing new sources of scale, opacity, and distribution shift.
