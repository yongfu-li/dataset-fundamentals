"""Example 7.24 — the 80% rule (disparate impact ratio) on hiring selection rates."""

from __future__ import annotations


def main() -> None:
    """Compute selection rates per group and flag ratios below the 80% rule."""
    applicants: dict[str, int] = {"Group A": 200, "Group B": 180, "Group C": 120, "Group D": 100}
    selected: dict[str, int] = {"Group A": 60, "Group B": 45, "Group C": 24, "Group D": 20}

    rates = {g: selected[g] / applicants[g] for g in applicants}
    reference = max(rates.values())

    print(f"{'Group':<9}{'Applied':>8}{'Selected':>9}{'Rate':>7}{'Ratio':>7}")
    for group, rate in rates.items():
        ratio = rate / reference
        flag = "  <-- below 80% rule" if ratio < 0.8 else ""
        print(f"{group:<9}{applicants[group]:>8}{selected[group]:>9}{rate:>6.1%}{ratio:>7.2f}{flag}")

    print()
    print(f"Reference (highest) selection rate: {reference:.1%}")
    print("Any group whose ratio falls below 0.80 may indicate adverse impact and")
    print("should trigger review of the selection process (cf. Figure 7.1).")


if __name__ == "__main__":
    main()
