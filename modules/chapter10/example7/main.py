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
    print(f"5th percentile: {sorted(returns)[int(0.05 * n_paths)]:.2%}")
    print()
    print("Repeated random draws approximate the outcome distribution under risk factors.")


if __name__ == "__main__":
    main()
