# Chapter 11 — Techniques in active learning — transcript

**Clip id:** part-03-active-learning-techniques
**Estimated duration:** 7 minutes
**Sources:** `author/chapter11.tex` (§11.3), `modules/chapter11/example5/`, `modules/chapter11/example6/`, `modules/chapter11/example7/`, `modules/chapter11/example8/`

## Slide 1 — Chapter 11 — Techniques in active learning

Uncertainty sampling alone can over-focus on odd or redundant cases. This part covers complementary techniques that keep the labeling queue informative and affordable: least-confidence selection near decision boundaries, diversity sampling across clusters, cost-sensitive routing of expensive experts, and model-in-the-loop review.

## Slide 2 — Learning objectives

By the end of this part, learners should be able to explain least-confidence uncertainty near decision boundaries; describe diversity-based sampling via clustering; apply cost-sensitive routing when labeling cost varies; and outline model-in-the-loop workflows where humans correct model proposals.

## Slide 3 — Least confidence and related uncertainty measures

Uncertainty sampling queries samples where the model is least predictable. Least confidence focuses on near-ties such as 0.55 versus 0.45 in binary classification. Margin sampling uses the top-two probability gap. Entropy sampling uses the full output distribution. These measures work well on complex boundaries but can skew the labeled set toward hard outliers if used alone.

## Slide 4 — Example 11.5 — Uncertain Chest X-ray Near Decision Boundary

Example 11.5 shows least-confidence selection on a near-tie X-ray prediction. An X-ray scored 0.52 abnormal and 0.48 normal is queued for labeling because the near-tie marks a region of the decision boundary that most needs an expert label. The example 5 module for this chapter captures that medical near-tie queue.

## Slide 5 — Diversity-based sampling

Diversity-based sampling ensures selected samples represent the data distribution, not only the hardest outliers. A common approach clusters unlabeled data and draws from underrepresented or highly diverse clusters. The goal is coverage across scenarios so the model does not overfit a narrow subset of uncertain cases.

## Slide 6 — Example 11.6 — Diversity Sampling Across Review Clusters

Example 11.6 uses clustering so sentiment labels cover mixed and neutral reviews. Diversity-based sampling draws reviews from multiple clusters, including subtle or mixed sentiment, so the model does not overfit to only strongly positive or negative text. The example 6 module for this chapter summarizes that cluster coverage idea.

## Slide 7 — Cost-sensitive active learning

Cost-sensitive active learning incorporates labeling cost into selection. A cost-impact model ranks samples by expected performance gain relative to annotation effort. Under a fixed budget, the system selects the most impactful points within that budget. This matters when some items need expensive experts and others can use cheaper annotators.

## Slide 8 — Example 11.7 — Cost-Sensitive Routing in Legal Labeling

Example 11.7 allocates expensive expert labels only where they change the model most. Cost-sensitive active learning sends ambiguous contracts to legal experts and simpler documents to non-experts, maximizing accuracy gain per labeling dollar. The example 7 module for this chapter frames that routing pattern.

## Slide 9 — Example 11.8 — Model-in-the-Loop Tumor Review

Model-in-the-loop annotation emphasizes human–machine collaboration. The model proposes preliminary labels or highlights uncertain regions; humans correct or validate; corrections retrain the model. Example 11.8 shows the model proposing tumor locations on X-rays while experts review only ambiguous cases, so later rounds need fewer human edits. The example 8 module for this chapter describes that interactive medical loop.

## Slide 10 — Takeaways

Least-confidence, margin, and entropy remain core uncertainty tools but need diversity to avoid skewed queues. Cost-sensitive routing protects scarce expert budgets. Model-in-the-loop workflows let humans focus on corrections rather than labeling every item from scratch.

## Slide 11 — Next

The next part walks active-learning applications in review sentiment, driving perception, pneumonia X-rays, and dermoscopic lesion review, showing how uncertain items reach human experts.
