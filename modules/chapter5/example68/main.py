"""Example 5.68 — label encode ordinal type; one-hot encode region."""

from __future__ import annotations

import pandas as pd
from sklearn.preprocessing import LabelEncoder


def main() -> None:
    """Apply LabelEncoder and get_dummies as in the book listing."""
    df = pd.read_csv("data.csv")
    print("Before:\n", df)

    label_encoder = LabelEncoder()
    df["product_type_encoded"] = label_encoder.fit_transform(df["product_type"])

    df = pd.get_dummies(df, columns=["region"], drop_first=True)

    df.to_csv("encoded_data.csv", index=False)
    print("After:\n", df)
    print("Wrote encoded_data.csv")


if __name__ == "__main__":
    main()
