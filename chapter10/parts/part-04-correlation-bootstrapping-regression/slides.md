---
marp: true
title: Chapter 10 — Correlation, bootstrapping, and regression
paginate: true
---

# Chapter 10 — Correlation, bootstrapping, and regression

Univariate sampling ignores relationships between variables

---

## Learning objectives
- By the end of this part

---

## Correlations and dependencies
- Real datasets rarely treat columns as independent
- Income and age co-vary; asset returns co-move; vitals correlate across visits
- Useful synthetic tabular data must replicate these joint relationships
- Multivariate distributions and copulas model dependence structures

---

## Example 10.8 — Income-Age Joint Distribution
- Example 10.8 — hands-on module
- Example 10.8 preserves correlations between income and age
- Analysts model the joint distribution so synthetic rows keep segment-level relationships
- Explore the chapter example module
- View files: `modules/chapter10/example8/`

---

## Example 10.8 — listing

```
"""Example 10.8 — preserve the joint relationship between income and age."""

from __future__ import annotations

import math
import random


def pearson(xs: list[float], ys: list[float]) -> float:
    """Return Pearson's r for two equal-length sequences."""
    n = len(xs)
    mx, my = sum(xs) / n, sum(ys) / n
    cov = sum((x - mx) * (y - my) for x, y in zip(xs, ys))
    sx = math.sqrt(sum((x - mx) ** 2 for x in xs))
    sy = math.sqrt(sum((y - my) ** 2 for y in ys))
    return cov / (sx * sy)


def main() -> None:
    """Generate synthetic (age, income) pairs that keep a positive correlation."""
```

---

## Copulas for complex dependence
- Copulas separate marginal behavior from dependence structure
- After fitting dependence

---

## Bootstrapping from small samples
- Bootstrapping resamples an original dataset with replacement to create larger synthetic
- Some real rows repeat; others are omitted
- Repeating the process yields multiple bootstrap datasets for training or uncertainty

---

## Example 10.9 — Bootstrapping Purchase Histories
- Example 10.9 — hands-on module
- Example 10.9 bootstraps a small customer purchase-history sample into a larger training
- This supports model training when raw logs are limited
- Explore the chapter example module
- View files: `modules/chapter10/example9/`

---

## Example 10.9 — listing

```
"""Example 10.9 — bootstrap larger synthetic purchase histories from a small sample."""

from __future__ import annotations

import random
from collections import Counter
from statistics import fmean


def main() -> None:
    """Resample a tiny purchase-amount sample with replacement."""
    random.seed(10)
    original = [12.5, 40.0, 8.0, 95.0, 22.0, 15.5, 60.0, 33.0]
    n_boot = 40
    synthetic = [random.choice(original) for _ in range(n_boot)]
    counts = Counter(synthetic)
    print(f"Original sample (n={len(original)}): {original}")
    print(f"Bootstrap synthetic sample (n={n_boot})")
    print(f"Original mean:  ${fmean(original):.2f}")
    print(f"Synthetic mean: ${fmean(synthetic):.2f}")
```

---

## Regression-based synthetic data
- Regression models fit relationships between predictors and an outcome
- Economics, healthcare

---

## Example 10.10 — Regression-Based GDP Projection
- Example 10.10 — hands-on module
- Government spending
- The regression preserves structured relationships among indicators rather than independent
- Explore the chapter example module
- View files: `modules/chapter10/example10/`

---

## Example 10.10 — listing

```
"""Example 10.10 — generate synthetic GDP growth from a fitted linear regression."""

from __future__ import annotations

import random


def fit_simple_regression(
    xs: list[float], ys: list[float]
) -> tuple[float, float, float]:
    """Fit Y = b0 + b1 X and return (b0, b1, residual_sd)."""
    n = len(xs)
    mx, my = sum(xs) / n, sum(ys) / n
    b1 = sum((x - mx) * (y - my) for x, y in zip(xs, ys)) / sum((x - mx) ** 2 for x in xs)
    b0 = my - b1 * mx
    residuals = [y - (b0 + b1 * x) for x, y in zip(xs, ys)]
    residual_sd = (sum(r * r for r in residuals) / n) ** 0.5
    return b0, b1, residual_sd


```

---

## Takeaways
- Realistic tabular synthesis requires joint structure, not independent marginals
- Bootstrapping expands small real samples while preserving variability
- Statistical methods set the foundation before generative adversarial networks learn

---

## Next
- Complete the quiz for this part
- Convergence challenges that affect synthetic realism in generative adversarial networks

