"""Calculate the range from Example 6.20."""

from __future__ import annotations


def main() -> None:
    """Print minimum, maximum, and range of the book sample."""
    values: list[int] = [1, 3, 5, 7, 9]
    minimum: int = min(values)
    maximum: int = max(values)
    print("Values:", values)
    print("Minimum:", minimum)
    print("Maximum:", maximum)
    print("Range:", maximum - minimum)


if __name__ == "__main__":
    main()
