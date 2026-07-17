"""Example 5.59 — end-to-end pandas cleaning walkthrough."""

from __future__ import annotations

import pandas as pd


def main() -> None:
    """Handle missing data, duplicates, strings, and encoding."""
    df = pd.read_csv("customers.csv")
    print("Before:")
    print(df)

    # 1. Handling Missing Data
    df["age"] = df["age"].fillna(df["age"].mean())
    df = df.dropna(subset=["name", "email"])

    # 2. Removing Duplicates
    df = df.drop_duplicates(subset=["email"])

    # 3. Standardizing Column Formats
    df["name"] = df["name"].str.title()

    # 4. Encoding Categorical Data
    df["gender"] = df["gender"].str.title().map({"Male": 1, "Female": 0})

    # 5. Saving the Cleaned Data
    df.to_csv("cleaned_customers.csv", index=False)
    print("After:")
    print(df)
    print("Wrote cleaned_customers.csv")


if __name__ == "__main__":
    main()
