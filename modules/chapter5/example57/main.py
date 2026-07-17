"""Example 5.57 — drop missing rows and duplicates with pandas."""

from __future__ import annotations

import pandas as pd


def main() -> None:
    """Load data.csv, drop NA rows and duplicates, print shapes."""
    df = pd.read_csv("data.csv")
    print("Before:", df.shape)
    print(df)
    df = df.dropna()  # Removing rows with missing values
    df = df.drop_duplicates()  # Removing duplicate rows
    print("After:", df.shape)
    print(df)


if __name__ == "__main__":
    main()
