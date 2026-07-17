"""Calculate odd- and even-sample medians from Example 6.16."""

from __future__ import annotations

from statistics import median


def main() -> None:
    """Print medians for the two book samples."""
    odd_sample: list[int] = [10, 20, 30, 40, 50]
    even_sample: list[int] = [10, 20, 30, 40]
    print("Odd sample:", odd_sample, "median =", median(odd_sample))
    print("Even sample:", even_sample, "median =", median(even_sample))


if __name__ == "__main__":
    main()
