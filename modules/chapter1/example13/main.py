"""Show ambiguous regional date formats from Example 1.13."""

from __future__ import annotations

import csv
from pathlib import Path

def main() -> None:
    """Print ship dates and explain locale ambiguity."""
    path = Path(__file__).resolve().parent / "data.csv"
    for row in csv.DictReader(path.open(encoding="utf-8")):
        print(row)
    print("\nWithout a documented convention, 03/04/2024 may mean March 4 or April 3.")

if __name__ == "__main__":
    main()
