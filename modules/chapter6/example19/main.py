"""Calculate standard deviation from Example 6.19."""

from __future__ import annotations

from statistics import pstdev, pvariance, stdev, variance


def main() -> None:
    """Print variance and standard deviation under both conventions."""
    values: list[int] = [2, 4, 4, 6, 8]
    print("Values:", values)
    print("Population variance:", pvariance(values))
    print("Population standard deviation:", pstdev(values))
    print("Sample variance:", variance(values))
    print("Sample standard deviation:", stdev(values))


if __name__ == "__main__":
    main()
