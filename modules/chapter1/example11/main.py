"""Highlight the likely data-entry error in Example 1.11."""

from __future__ import annotations

import csv
from pathlib import Path

def main() -> None:
    """Print transactions and flag the outlier amount."""
    path = Path(__file__).resolve().parent / "data.csv"
    rows = list(csv.DictReader(path.open(encoding="utf-8")))
    for row in rows:
        print(row)
    amounts = [float(r["Amount"]) for r in rows if r["Type"] == "Credit"]
    print("\nCredit total:", sum(amounts))
    print("Note: T002 (15000.00) is an order of magnitude larger than T001 (1500.00).")

if __name__ == "__main__":
    main()
