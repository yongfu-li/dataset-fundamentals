"""Example 7.38 — enforcing demographic parity on loan approvals and its accuracy cost."""

from __future__ import annotations

Applicant = tuple[str, float, int]  # (group, score, actually_repays)


def approve(data: list[Applicant], thresholds: dict[str, float]) -> tuple[float, dict[str, float], float]:
    """Return (accuracy, approval rate per group, default rate among approved)."""
    correct = 0
    approved: dict[str, int] = {"A": 0, "B": 0}
    counts: dict[str, int] = {"A": 0, "B": 0}
    approved_total = 0
    approved_defaults = 0
    for group, score, repays in data:
        counts[group] += 1
        decision = 1 if score >= thresholds[group] else 0
        approved[group] += decision
        if decision == repays:
            correct += 1
        if decision == 1:
            approved_total += 1
            approved_defaults += 1 - repays
    rates = {g: approved[g] / counts[g] for g in counts}
    default_rate = approved_defaults / approved_total if approved_total else 0.0
    return correct / len(data), rates, default_rate


def main() -> None:
    """Compare an accuracy-maximizing policy with a demographic-parity policy."""
    # Synthetic applicants: (group, credit score 0-1, repays loan 1/0).
    # Group B's score distribution sits lower, but scores stay predictive of
    # repayment in both groups — the setting where parity costs precision.
    data: list[Applicant] = [
        ("A", 0.90, 1), ("A", 0.85, 1), ("A", 0.75, 1), ("A", 0.70, 1), ("A", 0.65, 0),
        ("A", 0.60, 1), ("A", 0.55, 0), ("A", 0.45, 0), ("A", 0.40, 0), ("A", 0.30, 0),
        ("B", 0.70, 1), ("B", 0.62, 1), ("B", 0.55, 0), ("B", 0.50, 1), ("B", 0.45, 0),
        ("B", 0.42, 0), ("B", 0.38, 0), ("B", 0.30, 0), ("B", 0.25, 0), ("B", 0.20, 0),
    ]

    single = {"A": 0.60, "B": 0.60}
    parity = {"A": 0.60, "B": 0.42}

    for name, thresholds in [("Single threshold (accuracy-first)", single),
                             ("Group thresholds (demographic parity)", parity)]:
        acc, rates, default = approve(data, thresholds)
        print(name)
        print(f"  approval rate A = {rates['A']:.0%}, B = {rates['B']:.0%}")
        print(f"  accuracy = {acc:.0%}, default rate among approved = {default:.0%}\n")

    print("Equalizing approval rates raises approvals for group B but admits more")
    print("borderline cases, so accuracy drops and defaults rise: the fairness-")
    print("accuracy trade-off the chapter describes.")


if __name__ == "__main__":
    main()
