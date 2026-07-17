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


if __name__ == "__main__":
    main()
