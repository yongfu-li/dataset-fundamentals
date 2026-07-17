"""Example 7.21 — chi-squared test of gender distribution across performance categories."""

from __future__ import annotations


def main() -> None:
    """Run a 2x2 chi-squared test on gender vs performance category."""
    # Observed contingency table: rows = gender, cols = (high, low) performers.
    observed: dict[str, tuple[int, int]] = {"Male": (90, 210), "Female": (30, 170)}

    row_totals = {g: sum(cells) for g, cells in observed.items()}
    col_totals = (
        sum(cells[0] for cells in observed.values()),
        sum(cells[1] for cells in observed.values()),
    )
    grand = sum(row_totals.values())

    print(f"{'Gender':<8}{'High':>6}{'Low':>6}{'Total':>7}")
    for gender, (high, low) in observed.items():
        print(f"{gender:<8}{high:>6}{low:>6}{row_totals[gender]:>7}")
    print(f"{'Total':<8}{col_totals[0]:>6}{col_totals[1]:>6}{grand:>7}")

    chi2 = 0.0
    for gender, cells in observed.items():
        for j, obs in enumerate(cells):
            expected = row_totals[gender] * col_totals[j] / grand
            chi2 += (obs - expected) ** 2 / expected

    critical_5pct = 3.841  # chi-squared critical value, df = 1, alpha = 0.05
    print(f"\nChi-squared statistic (df=1): {chi2:.2f}")
    print(f"Critical value at alpha=0.05:  {critical_5pct}")
    if chi2 > critical_5pct:
        print("Result: REJECT independence — the high/low split differs by gender.")
        print("This is a bias signal worth investigating before training.")
    else:
        print("Result: no significant difference detected at the 5% level.")


if __name__ == "__main__":
    main()
