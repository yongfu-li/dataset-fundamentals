# Example 1.8 — Sample of SQL Format

**Chapter:** 1  
**Label:** `eg:1.8`  
**Source:** `author/chapter1.tex`  
**Section:** `sec:1.2.5` — Dataset Format

## Learning objective

Explain how primary/foreign keys and constraints keep related entities consistent across tables, and how a JOIN reassembles an analysis-ready view.

## Chapter context

Section 1.2.5 surveys dataset formats; SQL is presented as the format of choice when a schema must be enforced under concurrent writes, in contrast to JSON's flexibility. The chapter uses customers/orders/order items as the running relational example.

## What this example shows

DDL for `Customers`, `Orders`, and `Order_Items`, plus a query that joins orders back to customer names and totals.

## Key terms

- **Primary key** — the column that uniquely identifies a row in its own table (e.g., `customer_id`).
- **Foreign key** — a column in one table that references a primary key in another, enforcing referential integrity.
- **JOIN** — a SQL operation that combines rows from two or more tables using a shared key.

## What you should learn

### From the data / schema (input)
- Splitting customers from orders avoids repeating customer fields on every order line — normalization in miniature.
- `FOREIGN KEY` ties each order to a customer; `CHECK (quantity > 0)` encodes a business rule directly in the schema.
- Book DDL uses PostgreSQL-style `SERIAL`; the runnable demo swaps in SQLite-compatible DDL because `SERIAL` is not a SQLite keyword.

### From the code / process
1. Create the three tables from `schema_sqlite.sql`.
2. (Demo only) insert two seed customers and two seed orders.
3. Run the `JOIN` query in `query.sql`, linking `Orders` to `Customers`.

### From the output / result
- Each result row is one order enriched with the customer's name — the relational "rebuild" of a wide table from normalized pieces.

## Contents

| File | Role |
|------|------|
| `schema.sql` | Book DDL (PostgreSQL-style SERIAL) |
| `query.sql` | Book JOIN query |
| `schema_sqlite.sql` | SQLite-compatible DDL + seed rows for the demo |
| `run_demo.py` | In-memory SQLite runner |
| `install.sh` | No-op installer |
| `run.sh` | Executes the join demo |

## Prerequisites

- OS: Linux, macOS, or Windows (Git Bash / WSL recommended for `.sh`)
- Python 3.10+ (stdlib `sqlite3`)

## Setup

```bash
cd modules/chapter1/example8
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Running Example 1.8 — Sample of SQL Format
order_id | customer_name | order_date | total_amount
1 | Alice | 2026-07-17 05:38:26 | 99.5
2 | Bob | 2026-07-17 05:38:26 | 45.0
```

## How to interpret the result

Seeing names beside order IDs and totals shows why normalized storage still supports denormalized analysis views via SQL — you pay the join cost at query time instead of the duplication cost at write time.

## Try it / Reflect

- Add a third seed order for Alice in `schema_sqlite.sql` and confirm the join now returns three rows, two of them naming Alice.

## Related examples

- `eg:1.7` — the JSON order document this schema normalizes.
- `eg:1.9` — HDF5 as the format of choice for array-heavy scientific data, contrasted with SQL's relational integrity.

## Notes

- `schema.sql` matches the book; `run.sh` uses `schema_sqlite.sql` because `SERIAL` is not SQLite.
- Seed customers/orders are for demonstration only (not in the book listing).
- `order_date` uses `CURRENT_TIMESTAMP`, so the printed timestamp will differ on each run; row order, names, and totals will not.
