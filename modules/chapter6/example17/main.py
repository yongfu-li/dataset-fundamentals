"""Calculate the mode from Example 6.17."""

from __future__ import annotations

from statistics import multimode


def main() -> None:
    """Print the sample frequencies and its mode list."""
    values: list[int] = [1, 2, 2, 3, 4]
    print("Values:", values)
    print("Mode(s):", multimode(values))


if __name__ == "__main__":
    main()
