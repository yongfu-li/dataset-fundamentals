"""Example 7.19 — compare demographic distributions in a dataset vs the target population."""

from __future__ import annotations


def main() -> None:
    """Print dataset vs population shares per group and flag imbalances."""
    dataset_counts: dict[str, int] = {"Male": 640, "Female": 310, "Other": 50}
    population_share: dict[str, float] = {"Male": 0.49, "Female": 0.49, "Other": 0.02}

    total = sum(dataset_counts.values())
    print(f"{'Group':<8}{'Dataset n':>10}{'Dataset %':>11}{'Population %':>14}{'Gap':>8}")
    for group, count in dataset_counts.items():
        share = count / total
        gap = share - population_share[group]
        flag = "  <-- imbalance" if abs(gap) >= 0.05 else ""
        print(f"{group:<8}{count:>10}{share:>10.1%}{population_share[group]:>13.1%}{gap:>+8.1%}{flag}")

    print()
    print("Groups whose dataset share differs from the population share by 5+ points")
    print("are candidates for re-sampling or re-weighting before training.")


if __name__ == "__main__":
    main()
