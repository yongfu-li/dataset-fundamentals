"""Example 5.60 — StandardScaler on age and salary (book snippet wrapped)."""

from __future__ import annotations

import pandas as pd
from sklearn.preprocessing import StandardScaler


def main() -> None:
    """Scale age and salary columns and print the result."""
    df = pd.DataFrame({"age": [25, 40, 55], "salary": [40000, 80000, 120000]})
    print("Before:\n", df)
    scaler = StandardScaler()
    df[["age", "salary"]] = scaler.fit_transform(df[["age", "salary"]])
    print("After StandardScaler:\n", df)


if __name__ == "__main__":
    main()
