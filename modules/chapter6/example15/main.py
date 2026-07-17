"""Calculate the arithmetic mean from Example 6.15."""

from __future__ import annotations

from statistics import fmean


def main() -> None:
    """Print the income values, sum, count, and arithmetic mean."""
    incomes: list[int] = [30_000, 35_000, 40_000, 45_000, 50_000]
    print("Values:", incomes)
    print("Sum:", sum(incomes))
    print("Count:", len(incomes))
    print("Mean:", fmean(incomes))


if __name__ == "__main__":
    main()
