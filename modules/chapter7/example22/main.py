"""Example 7.22 — correlation between a model feature and a sensitive attribute."""

from __future__ import annotations

import math


def pearson(xs: list[float], ys: list[float]) -> float:
    """Return the Pearson correlation coefficient of two equal-length lists."""
    n = len(xs)
    mx, my = sum(xs) / n, sum(ys) / n
    cov = sum((x - mx) * (y - my) for x, y in zip(xs, ys))
    sx = math.sqrt(sum((x - mx) ** 2 for x in xs))
    sy = math.sqrt(sum((y - my) ** 2 for y in ys))
    return cov / (sx * sy)


def main() -> None:
    """Correlate candidate features with a sensitive attribute (group = 0/1)."""
    # Ten applicants; group is the sensitive attribute (e.g., two demographic groups).
    group: list[float] = [0, 0, 0, 0, 0, 1, 1, 1, 1, 1]
    features: dict[str, list[float]] = {
        "years_experience": [2, 5, 3, 8, 4, 3, 6, 2, 7, 5],
        "zip_income_index": [82, 78, 85, 80, 84, 41, 45, 38, 50, 44],
    }

    print("Correlation of each feature with the sensitive attribute:")
    for name, values in features.items():
        r = pearson(values, group)
        flag = "  <-- likely proxy, review before use" if abs(r) >= 0.5 else ""
        print(f"  {name:<18} r = {r:+.2f}{flag}")

    print()
    print("A feature strongly correlated with the sensitive attribute can act as a")
    print("proxy: dropping the attribute itself is not enough to remove the bias path.")


if __name__ == "__main__":
    main()
