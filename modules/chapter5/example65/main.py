"""Example 5.65 — guided pandas cleaning template."""

from __future__ import annotations

import pandas as pd


def main() -> None:
    """Impute, deduplicate, standardize, filter outliers, save."""
    df = pd.read_csv("data.csv")
    print("Before:", df.shape)

    df["price"] = df["price"].fillna(df["price"].mean())
    df.dropna(subset=["customer_id"], inplace=True)

    df.drop_duplicates(inplace=True)

    df["product"] = df["product"].str.lower()
    df["purchase_date"] = pd.to_datetime(df["purchase_date"], format="mixed")

    z_scores = (df["price"] - df["price"].mean()) / df["price"].std()
    df = df[z_scores < 3]

    df.to_csv("cleaned_data.csv", index=False)
    print("After:", df.shape)
    print(df)
    print("Wrote cleaned_data.csv")


if __name__ == "__main__":
    main()
