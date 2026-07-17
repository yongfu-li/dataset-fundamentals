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


def main() -> None:
    """Train on macro observations, then synthesize GDP for new interest-rate levels."""
    random.seed(10)
    # Illustrative historical pairs: interest rate (%) -> GDP growth (%).
    rates = [1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5]
    gdp = [3.2, 2.9, 2.5, 2.1, 1.8, 1.4, 1.0, 0.6]
    b0, b1, residual_sd = fit_simple_regression(rates, gdp)
    print(f"Fitted model: GDP = {b0:.2f} + ({b1:.2f}) * interest_rate + noise")
    print(f"Residual sd: {residual_sd:.2f}")
    print()
    print("Synthetic GDP projections for new rate scenarios:")
    for rate in (1.25, 2.75, 5.0):
        synth = b0 + b1 * rate + random.gauss(0, residual_sd)
        print(f"  interest_rate={rate:.2f}% -> synthetic GDP growth={synth:.2f}%")
    print()
    print("The regression preserves the learned rate-growth relationship while")
    print("noise samples new but plausible dependent-variable values.")


if __name__ == "__main__":
    main()
