# Chapter 11 — Techniques in weak supervision — transcript

**Clip id:** part-06-weak-supervision-techniques
**Estimated duration:** 7 minutes
**Sources:** `author/chapter11.tex` (§11.6), `modules/chapter11/example14/`

## Slide 1 — Chapter 11 — Techniques in weak supervision

Knowing that weak signals exist is not enough; teams need methods that combine them into usable training labels. This part covers programmatic labeling with Snorkel-style labeling functions, heuristic rules, and data programming that outputs probabilistic labels.

## Slide 2 — Learning objectives

By the end of this part, learners should be able to describe labeling functions and how Snorkel-style systems combine conflicting weak labels; explain heuristic-based rule labeling and refinement; and summarize data programming that learns source reliability and emits probabilistic labels.

## Slide 3 — Programmatic labeling with Snorkel

Snorkel is a framework for generating large-scale labeled datasets by combining weak signals from multiple sources into probabilistic training labels. Users write labeling functions—rules, heuristics, or weak classifiers—that vote on subsets of the data. A generative model estimates source accuracies and reconciles conflicts without requiring a full hand-labeled corpus.

## Slide 4 — Example 11.14 — Labeling Functions for Spam Detection

Example 11.14 sketches a Snorkel-style labeling-function workflow. Analysts write heuristic labeling functions such as keyword lists, regular expressions, and weak classifiers over email text; Snorkel estimates source accuracies and outputs probabilistic training labels. The example 14 module for this chapter summarizes that spam labeling-function pattern.

## Slide 5 — How conflicting labels are combined

Each labeling function may cover only part of the data and may conflict with others. Snorkel uses a probabilistic graphical model and expectation-maximization to refine weights for each function and infer likely true labels. The resulting probabilistic labels then train a discriminative model, reducing dependence on expensive manual annotation.

## Slide 6 — Heuristic-based labeling

Heuristic-based labeling writes if-then rules that automatically assign labels when patterns match. Rules are often domain-specific and sparse: they cover some items well and miss edge cases. Experts can validate a small subset and refine rules over time, as in medical-text heuristics that flag malignancy keywords versus benign language.

## Slide 7 — Benefits and limits of heuristics

Heuristics inject domain knowledge quickly and run at scale, which makes them efficient and customizable. Limits include noise, sparse coverage, and brittleness on edge cases. Heuristics therefore pair best with aggregation methods and small gold audits rather than standing alone as final ground truth.

## Slide 8 — Data programming and probabilistic labels

Data programming combines multiple weak sources into probabilistic labels rather than hard one-hot assignments. The method learns each labeling function’s reliability—for example that a keyword rule is only about eighty percent accurate—then weights votes accordingly. Downstream models train on soft labels that reflect uncertainty instead of pretending every weak vote is certain.

## Slide 9 — Takeaways

Snorkel-style labeling functions turn heuristics and weak classifiers into aggregated training labels. Heuristic rules scale domain knowledge but need refinement and audits. Data programming learns source quality and emits probabilistic labels that handle conflict and noise more gracefully than hard votes alone.

## Slide 10 — Next

The next part introduces self-supervised learning: postponing task labels by training on unlabeled structure through pretext tasks and contrastive pretraining before fine-tuning.
