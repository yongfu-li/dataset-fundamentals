"""Calculate variance from Example 6.18."""

from __future__ import annotations

from statistics import fmean, pvariance, variance


def main() -> None:
    """Print deviations and both population and sample variance."""
    values: list[int] = [2, 4, 4, 6, 8]
    mean_value: float = fmean(values)
    squared_deviations: list[float] = [
        (value - mean_value) ** 2 for value in values
    ]
    print("Values:", values)
    print("Mean:", mean_value)
    print("Squared deviations:", squared_deviations)
    print("Population variance (n):", pvariance(values))
    print("Sample variance (n-1):", variance(values))


if __name__ == "__main__":
    main()
