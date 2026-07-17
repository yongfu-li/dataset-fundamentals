"""Example 5.66 — compare MinMaxScaler and StandardScaler."""

from __future__ import annotations

import pandas as pd
from sklearn.preprocessing import MinMaxScaler, StandardScaler


def main() -> None:
    """Apply both scalers and inspect transformed ranges."""
    df = pd.read_csv("data.csv")
    print("Before:\n", df)

    scaler = MinMaxScaler()
    df["normalized_price"] = scaler.fit_transform(df[["price"]])

    standardizer = StandardScaler()
    df["standardized_quantity"] = standardizer.fit_transform(df[["quantity"]])

    df.to_csv("scaled_data.csv", index=False)
    print("After:\n", df)
    print("Wrote scaled_data.csv")


if __name__ == "__main__":
    main()
