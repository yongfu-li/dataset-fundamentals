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
    print("Value frequencies in synthetic set:")
    for value, count in sorted(counts.items()):
        print(f"  ${value:>5.1f}: {count} times")
    print()
    print("Sampling with replacement reuses real rows; it expands volume but")
    print("cannot invent purchase amounts outside the original support.")


if __name__ == "__main__":
    main()
