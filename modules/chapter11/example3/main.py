"""Example 11.3 — entropy sampling selects the flattest predictive distribution."""

from __future__ import annotations

import math


def entropy(probs: list[float]) -> float:
    """Return Shannon entropy of a discrete probability distribution."""
    return -sum(p * math.log2(p) for p in probs if p > 0)


def main() -> None:
    """Compare entropy for peaked vs flat multi-class predictions."""
    cases: list[tuple[str, list[float]]] = [
        ("peaked (A=0.90)", [0.90, 0.05, 0.05]),
        ("book example (A=0.4, B=C=0.3)", [0.40, 0.30, 0.30]),
        ("uniform (1/3 each)", [1 / 3, 1 / 3, 1 / 3]),
    ]
    print(f"{'Distribution':<32}{'Entropy (bits)':>16}{'Priority':>10}")
    scored = [(name, entropy(ps)) for name, ps in cases]
    max_h = max(h for _, h in scored)
    for name, h in sorted(scored, key=lambda row: row[1], reverse=True):
        priority = "HIGH" if h >= 0.95 * max_h else ("MED" if h >= 1.0 else "LOW")
        print(f"{name:<32}{h:>16.3f}{priority:>10}")
    print()
    print("When no class dominates (e.g., 0.4 / 0.3 / 0.3), entropy is high and")
    print("the instance is prioritized for labeling.")


if __name__ == "__main__":
    main()
