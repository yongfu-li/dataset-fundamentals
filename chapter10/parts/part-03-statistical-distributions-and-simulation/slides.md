---
marp: true
title: Chapter 10 — Statistical distributions and simulation
paginate: true
---

# Chapter 10 — Statistical distributions and simulation

Before deep generative models, teams synthesized data with explicit statistical assumptions

---

## Learning objectives
- By the end of this part

---

## Statistical methods overview
- Statistical synthesis uses mathematical models to simulate data that shares properties
- Common tools include distribution fitting, Monte Carlo draws, bootstrapping
- The main challenge is matching correlations and trends, not just marginal distributions

---

## Data distribution modeling
- Distribution modeling fits a known law
- Draw synthetic values from the same family
- This works when the assumed distribution matches the domain

---

## Example 10.6 — Normal-Distribution Sampling Sketch
- Example 10.6 — hands-on module
- Example 10.6 sketches sampling from a fitted normal distribution
- If real values follow a mean of fifty and standard deviation of ten
- Explore the chapter example module
- View files: `modules/chapter10/example6/`

---

## Example 10.6 — listing

```
"""Example 10.6 — sample synthetic points from a fitted normal distribution."""

from __future__ import annotations

import random
from statistics import fmean, pstdev


def main() -> None:
    """Draw samples from N(50, 10^2) and compare sample moments to the target."""
    random.seed(10)
    mean, sd, n = 50.0, 10.0, 1000
    samples = [random.gauss(mean, sd) for _ in range(n)]
    print(f"Target distribution: N(mean={mean}, sd={sd})")
    print(f"Sample size: {n}")
    print(f"Sample mean: {fmean(samples):.2f}")
    print(f"Sample sd:   {pstdev(samples):.2f}")
    print(f"First 5 draws: {[round(x, 2) for x in samples[:5]]}")
    print()
    print("Synthetic points inherit the fitted moments; they do not copy real rows.")
```

---

## Monte Carlo simulation
- Monte Carlo methods repeat random sampling and simulation when the underlying process is
- Many draws are averaged or aggregated to estimate outcomes under uncertainty
- Finance, engineering

---

## Example 10.7 — Monte Carlo Asset-Return Simulation
- Example 10.7 — hands-on module
- Example 10.7 applies Monte Carlo simulation to financial returns
- Synthetic return paths incorporate risk factors and market conditions
- Explore the chapter example module
- View files: `modules/chapter10/example7/`

---

## Example 10.7 — listing

```
"""Example 10.7 — Monte Carlo simulation of asset returns under uncertainty."""

from __future__ import annotations

import random
from statistics import fmean, pstdev


def main() -> None:
    """Simulate many one-period returns and summarize the resulting distribution."""
    random.seed(10)
    # Annualized mean return and volatility (illustrative).
    mu, sigma = 0.08, 0.20
    n_paths = 5_000
    returns = [random.gauss(mu, sigma) for _ in range(n_paths)]
    print(f"Assumed return model: N(mu={mu:.0%}, sigma={sigma:.0%})")
    print(f"Monte Carlo paths: {n_paths}")
    print(f"Mean simulated return: {fmean(returns):.2%}")
    print(f"Sd of simulated return: {pstdev(returns):.2%}")
    print(f"P(return < 0): {sum(r < 0 for r in returns) / n_paths:.1%}")
```

---

## Controlled simulation benchmarks
- Some releases, such as device-model sweeps, are synthetic by construction
- Quality assurance then documents settings and reproducibility rather than detecting
- That differs from privacy-motivated tabular synthesis but still produces shareable

---

## Takeaways
- Parametric sampling copies moments from fitted laws
- Both require explicit assumptions and validation against real benchmarks
- Univariate methods ignore variable relationships

---

## Next
- Complete the quiz for this part
- Regression-based projection for structured synthetic rows

