"""Example 5.61 — OneHotEncoder on gender (book snippet wrapped)."""

from __future__ import annotations

import pandas as pd
from sklearn.preprocessing import OneHotEncoder


def main() -> None:
    """One-hot encode gender and concatenate with the frame."""
    df = pd.DataFrame({"gender": ["Male", "Female", "Male"], "age": [30, 40, 50]})
    print("Before:\n", df)
    try:
        encoder = OneHotEncoder(sparse_output=False)
    except TypeError:  # scikit-learn < 1.2
        encoder = OneHotEncoder(sparse=False)
    encoded_gender = encoder.fit_transform(df[["gender"]])
    cols = encoder.categories_[0]
    df_encoded = pd.DataFrame(encoded_gender, columns=cols)
    df = pd.concat([df, df_encoded], axis=1)
    df = df.drop("gender", axis=1)
    print("After OneHotEncoder:\n", df)


if __name__ == "__main__":
    main()
