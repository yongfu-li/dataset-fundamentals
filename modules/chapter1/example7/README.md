# Example 1.7 — Semi-Structured Dataset In JSON Format

**Chapter:** 1  
**Label:** `eg:1.7`  
**Source:** `author/chapter1.tex`  
**Section:** `sec:1.2.3` — Semi-Structured Datasets

## Learning objective

Distinguish semi-structured data from strict tables: fixed keys, a variable-length nested array, and free text can all coexist in one document.

## Chapter context

Section 1.2.3 places semi-structured data between rigid relational tables and freeform text. This order object is the chapter's working illustration of the JSON payloads that power e-commerce APIs — the same shape Example 1.8 later normalizes into SQL tables.

## What this example shows

One customer order: fixed `order_id`/`customer_id` identifiers, a nested `products` array of variable length, and a free-text `comments` field.

## Key terms

- **Semi-structured data** — data with some fixed structure (keys, IDs) but also flexible or nested elements, e.g., a variable-length array or free text.

## What you should learn

### From the data / input
- `order_id` and `customer_id` are fixed top-level identifiers — the "structured" part.
- `products` is a nested array — it can hold one item or twenty without adding a single CSV column.
- `comments` is free text embedded inside an otherwise well-defined document — the "semi" in semi-structured.

### From the output / result
- Pretty-printing exposes the nesting clearly; note which part (products) would need a second table if you tried to force this into flat CSV.

## Contents

| File | Role |
|------|------|
| `order.json` | Order object sample |
| `install.sh` | No-op installer |
| `run.sh` | Pretty-prints JSON |

## Prerequisites

- OS: Linux, macOS, or Windows (Git Bash / WSL recommended for `.sh`)
- Python 3 optional (falls back to `cat`)

## Setup

```bash
cd modules/chapter1/example7
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Running Example 1.7 — Semi-Structured Dataset In JSON Format
{
    "order_id": "12345",
    "customer_id": "1",
    "products": [
        {
            "product_name": "Shoes",
            "quantity": 2
        },
        {
            "product_name": "Jacket",
            "quantity": 1
        }
    ],
    "comments": "Fast shipping, excellent quality!"
}
```

## How to interpret the result

If you can point to which parts of this document are rigid (IDs) and which are flexible (products, comments), you understand why APIs favor JSON for orders and why analytics teams still normalize the rigid parts into SQL (Example 1.8) once volume grows.

## Try it / Reflect

- Add a third product to the `products` array and confirm no other part of the schema needs to change.

## Related examples

- `eg:1.4` — a flatter JSON record with no nested arrays.
- `eg:1.8` — the relational (SQL) version of orders/products, using separate tables instead of nesting.

## Notes

- Synthetic sample data from the book manuscript.
