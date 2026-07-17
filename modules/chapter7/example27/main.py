"""Example 7.27 — bar chart of favorable predictions by demographic group (ASCII)."""

from __future__ import annotations


def main() -> None:
    """Draw an ASCII bar chart of selection rates per subgroup."""
    selection_rate: dict[str, float] = {
        "Group A": 0.42,
        "Group B": 0.35,
        "Group C": 0.19,
        "Group D": 0.15,
    }

    print("Selection rate by demographic subgroup (each # = 2 percentage points):\n")
    for group, rate in selection_rate.items():
        bar = "#" * round(rate * 50)
        print(f"{group:<9}{rate:>6.1%}  {bar}")

    spread = max(selection_rate.values()) - min(selection_rate.values())
    print(f"\nSpread between highest and lowest group: {spread:.1%}")
    print("A wide spread across bars is the first visual cue of potential bias")
    print("(cf. Figure 7.2); follow up with formal tests such as the 80% rule.")


if __name__ == "__main__":
    main()
