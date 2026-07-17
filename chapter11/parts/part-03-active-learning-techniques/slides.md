---
marp: true
title: Chapter 11 — Techniques in active learning
paginate: true
---

# Chapter 11 — Techniques in active learning

Uncertainty sampling alone can over-focus on odd or redundant cases

---

## Learning objectives
- By the end of this part

---

## Least confidence and related uncertainty measures
- Uncertainty sampling queries samples where the model is least predictable
- Least confidence focuses on near-ties such as 0.55 versus 0.45 in binary classification
- Margin sampling uses the top-two probability gap
- Entropy sampling uses the full output distribution
- These measures work well on complex boundaries but can skew the labeled set toward hard

---

## Example 11.5 — Uncertain Chest X-ray Near Decision Boundary
- Example 11.5 — hands-on module
- Example 11.5 shows least-confidence selection on a near-tie X-ray prediction
- An X-ray scored 0.52 abnormal and 0.48 normal is queued for labeling because the near-tie
- Explore the chapter example module
- View files: `modules/chapter11/example5/`

---

## Diversity-based sampling
- Diversity-based sampling ensures selected samples represent the data distribution
- A common approach clusters unlabeled data and draws from underrepresented or highly
- The goal is coverage across scenarios so the model does not overfit a narrow subset of

---

## Example 11.6 — Diversity Sampling Across Review Clusters
- Example 11.6 — hands-on module
- Example 11.6 uses clustering so sentiment labels cover mixed and neutral reviews
- Diversity-based sampling draws reviews from multiple clusters
- Explore the chapter example module
- View files: `modules/chapter11/example6/`

---

## Cost-sensitive active learning
- Cost-sensitive active learning incorporates labeling cost into selection
- A cost-impact model ranks samples by expected performance gain relative to annotation
- Under a fixed budget, the system selects the most impactful points within that budget
- This matters when some items need expensive experts and others can use cheaper annotators

---

## Example 11.7 — Cost-Sensitive Routing in Legal Labeling
- Example 11.7 — hands-on module
- Example 11.7 allocates expensive expert labels only where they change the model most
- Maximizing accuracy gain per labeling dollar
- Explore the chapter example module
- View files: `modules/chapter11/example7/`

---

## Example 11.8 — Model-in-the-Loop Tumor Review
- Example 11.8 — hands-on module
- Model-in-the-loop annotation emphasizes human–machine collaboration
- The model proposes preliminary labels or highlights uncertain regions
- So later rounds need fewer human edits
- Explore the chapter example module
- View files: `modules/chapter11/example8/`

---

## Takeaways
- Least-confidence, margin
- Cost-sensitive routing protects scarce expert budgets
- Model-in-the-loop workflows let humans focus on corrections rather than labeling every

---

## Next
- Complete the quiz for this part
- Dermoscopic lesion review, showing how uncertain items reach human experts

