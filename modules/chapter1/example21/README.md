# Example 1.21 — Purchase History Dataset

**Chapter:** 1  
**Label:** `eg:1.21`  
**Source:** `author/chapter1.tex`  
**Section:** `sec:1.5.1` — Applications of Datasets

## Learning objective

Decide the grain of a retail table (order vs customer) before aggregating, since repurchase and preference analysis both depend on getting the grain right.

## Chapter context

Section 1.5.1 surveys business applications of datasets. In retail, purchase history is the running example: one row per order, with customer, category, date, and amount, aggregated up to the customer level for segmentation.

## What this example shows

A conceptual purchase-history schema (no listing in the book): one row per order, with columns for customer ID, product category, purchase date, and amount.

## Key terms

- **Grain** — the level one row in a table represents — here, one order, not one customer; choosing it correctly is a prerequisite for correct aggregation.

## What you should learn

### From the concept
- Grain of the table: one row per order (not per customer) — aggregation is what creates customer-level features.
- Typical attributes: customer ID, product category, purchase date, amount.
- Analytical use: repurchase intervals and category preferences drive segmentation and promotional calendars.

## Contents

| File | Role |
|------|------|
| `install.sh` | No-op installer |
| `run.sh` | Prints the structured takeaway |

## Prerequisites

- OS: Linux, macOS, or Windows (Git Bash / WSL recommended for `.sh`)
- Bash

## Setup

```bash
cd modules/chapter1/example21
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Retail purchase-history tables are stored at order grain: one row per order, not per customer.
Attributes: customer ID, product category, purchase date, amount.
Aggregating by customer ID turns order-grain rows into customer-level features.
Analytical use: repurchase intervals and category preferences drive segmentation and promo calendars.
```

## How to interpret the result

When you design a retail table, decide the grain first; every record/attribute idea from Section 1.1 still applies, but only once you know what one row represents.

## Try it / Reflect

- Sketch the SQL `GROUP BY` you would use to turn this order-grain table into one row per customer with a "days since last order" feature.

## Related examples

- `eg:1.22` — the healthcare application example, at a different (continuous) grain.
- `eg:1.28` — the finance application example, at transaction grain.

## Notes

- Prose-only; pairs with Examples 1.22 and 1.28 as sector sketches.
