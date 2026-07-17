"""Generate a small data dictionary from documented table columns."""

from __future__ import annotations

from dataclasses import dataclass
from typing import Final


@dataclass(frozen=True)
class Dataset:
    """Minimal table-like dataset carrying column names."""

    columns: tuple[str, ...]


DESCRIPTIONS: Final[dict[str, str]] = {
    "age": "Age of the individual in years",
    "gender": "Self-described gender category",
    "purchase_amount": "Total amount spent by the customer in the month (USD)",
}


def get_column_description(column: str) -> str:
    """Return the maintained description for a dataset column."""
    return DESCRIPTIONS.get(column, "Description not yet documented")


def generate_data_dictionary(dataset: Dataset) -> None:
    """Print a description for every column in a table-like dataset."""
    for column in dataset.columns:
        print(f"{column}: {get_column_description(column)}")


def main() -> None:
    """Demonstrate automatic data-dictionary generation."""
    generate_data_dictionary(Dataset(("age", "gender", "purchase_amount")))


if __name__ == "__main__":
    main()
