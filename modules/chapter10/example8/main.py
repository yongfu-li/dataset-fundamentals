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
    random.seed(10)
    # Age ~ 25..65; income rises with age plus noise (illustrative joint model).
    ages = [random.uniform(25, 65) for _ in range(500)]
    incomes = [20_000 + 1_200 * age + random.gauss(0, 8_000) for age in ages]
    r = pearson(ages, incomes)
    print(f"Synthetic pairs: {len(ages)}")
    print(f"Age range: {min(ages):.1f}–{max(ages):.1f}")
    print(f"Income range: ${min(incomes):,.0f}–${max(incomes):,.0f}")
    print(f"Pearson r(age, income): {r:.2f}")
    print()
    print("Independent univariate sampling would break this joint relationship;")
    print("multivariate (or copula) modeling keeps income rising with age.")


if __name__ == "__main__":
    main()
