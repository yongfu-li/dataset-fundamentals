---
marp: true
title: Chapter 5 — Feature engineering and transforms
paginate: true
---

# Chapter 5 — Feature engineering and transforms

Many models need more than scaled raw columns

---

## Learning objectives
- Explain equal-width versus frequency binning, construct ratio and interaction features
- Choose log or polynomial expansions when skew or nonlinearity demands them

---

## Binning numerical data
- Binning groups continuous values into intervals
- Example 5.51 uses equal-width age bins
- Binning reduces noise and handles nonlinear effects but loses granularity

---

## Adding new features
- Example 5.53 adds a squared term
- Domain ratios often outperform raw stacks of columns
- Avoid generating features that duplicate identifiers or leak targets

---

## Example 5.55 — Engineer price per square foot
- Example 5.55 — hands-on module
- The classic ratio feature
- Explore the chapter example module
- View files: `modules/chapter5/example55/`

---

## Dimensionality reduction and selection
- High-dimensional sparse tables benefit from principal components
- Selection reduces overfitting and training time
- Keep interpretability requirements in mind for regulated domains

---

## Log and polynomial transforms
- Log transforms compress right tails, Example 5.26 on income
- Polynomial expansions, Example 5.56, let linear models capture curvature
- Apply transforms before splitting or fit parameters on training folds only
- Inverse transforms may be needed for interpretation

---

## Takeaways
- Engineering encodes domain knowledge
- Binning and transforms trade resolution for stability
- Document every derived column for reproducibility and explainability

---

## Next
- Complete the quiz for this part
- Continue to Python tools that implement these steps at scale

