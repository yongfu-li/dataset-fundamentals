"""Report missing fields in Example 1.12."""

from __future__ import annotations

import csv
from pathlib import Path

def main() -> None:
    """Count blank cells per column."""
    path = Path(__file__).resolve().parent / "data.csv"
    rows = list(csv.DictReader(path.open(encoding="utf-8")))
    for row in rows:
        print(row)
    print("\nMissing counts:")
    for col in rows[0]:
        missing = sum(1 for r in rows if r[col] == "")
        print(f"  {col}: {missing}")

if __name__ == "__main__":
    main()
