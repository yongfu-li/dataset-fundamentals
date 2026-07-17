# Chapter 11 — Active learning basics — transcript

**Clip id:** part-02-active-learning-basics
**Estimated duration:** 7 minutes
**Sources:** `author/chapter11.tex` (§11.2), `modules/chapter11/example1/`, `modules/chapter11/example2/`, `modules/chapter11/example3/`, `modules/chapter11/example4/`

## Slide 1 — Chapter 11 — Active learning basics

Active learning attacks the labeling bottleneck by letting the model choose which unlabeled items humans should label next. Instead of treating every instance as equally important, the model uses its own uncertainty to focus annotator effort where new labels most improve performance.

## Slide 2 — Learning objectives

By the end of this part, learners should be able to define the active-learning iterative loop; contrast uncertainty, margin, and entropy sampling as query strategies; and interpret short examples that apply those strategies to vision and medical imaging queues.

## Slide 3 — The iterative feedback loop

Active learning starts from a small labeled seed set. The model then selects unlabeled points it is most uncertain about, humans label those points, the model retrains, and the cycle repeats until performance or budget stops the loop. The goal is better generalization with fewer total labels than random annotation.

## Slide 4 — Query strategies overview

A query strategy defines how the model ranks unlabeled items for human labeling. Uncertainty sampling targets low-confidence predictions near decision boundaries. Margin sampling ranks by the gap between the top two class probabilities. Entropy sampling ranks by predictive entropy over the full class distribution. Strategies can be combined or adapted to the task.

## Slide 5 — Example 11.1 — Uncertainty Sampling for Cat-Dog Images

Example 11.1 shows uncertainty sampling on a binary vision task. An image with predicted probabilities near 0.51 and 0.49 for cat versus dog is queued for a human label because that near-tie is where a new label most reshapes the decision boundary. The example 1 module for this chapter summarizes that near-tie selection idea.

## Slide 6 — Example 11.2 — Margin Sampling in Multi-Class Tasks

Example 11.2 refines the idea for multi-class settings. Margin sampling prioritizes instances where the top two predicted probabilities are closest, signaling weak class separation that a new label can sharpen. This differs from absolute least-confidence alone by focusing on the competing pair of classes. The example 2 module for this chapter frames that margin criterion.

## Slide 7 — Example 11.3 — High-Entropy Multi-Class Prediction

Example 11.3 illustrates entropy sampling. If the model predicts class A at 0.4 and classes B and C at 0.3 each, entropy is high because no class dominates, so such instances are prioritized for labeling. Flat distributions across many classes are informative even when no single probability is near 0.5. The example 3 module for this chapter covers this high-entropy case.

## Slide 8 — Active-learning pipeline steps

The pipeline is incremental: train on the seed set, query the most informative unlabeled items, send them to human annotators, retrain on the expanded labeled set, and iterate. The loop stops when the model meets a performance threshold or the labeling budget is exhausted. Effort concentrates on informative cases rather than easy majority examples.

## Slide 9 — Example 11.4 — Active Learning for MRI Tumor Detection

Example 11.4 applies the full loop to expert MRI labeling. A tumor detector starts from a small labeled MRI seed set, then repeatedly queries ambiguous or rare-tumor scans for radiologist labels, cutting expert hours while improving detection on hard cases. The example 4 module for this chapter describes that medical active-learning pattern.

## Slide 10 — Takeaways

Active learning is an iterative loop that queries humans where the model is least sure. Uncertainty, margin, and entropy sampling are complementary ways to rank informativeness. Medical and vision examples show how seed training plus selective expert labels can reduce total annotation volume.

## Slide 11 — Next

The next part covers complementary techniques beyond basic uncertainty: least-confidence selection near decision boundaries, diversity sampling across clusters, cost-sensitive routing of expensive experts, and model-in-the-loop review.
