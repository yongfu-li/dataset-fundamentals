"""Run the Example 1.8 join query against a SQLite adaptation of the book schema."""

from __future__ import annotations

import sqlite3
from pathlib import Path

ROOT = Path(__file__).resolve().parent

def main() -> None:
    """Create tables, seed rows, and print the join query result."""
    schema = (ROOT / "schema_sqlite.sql").read_text(encoding="utf-8")
    query = (ROOT / "query.sql").read_text(encoding="utf-8")
    conn = sqlite3.connect(":memory:")
    try:
        conn.executescript(schema)
        rows = conn.execute(query).fetchall()
        print("order_id | customer_name | order_date | total_amount")
        for row in rows:
            print(" | ".join(str(col) for col in row))
    finally:
        conn.close()

if __name__ == "__main__":
    main()
