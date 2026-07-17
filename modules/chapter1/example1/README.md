# Example 1.1 — Sample CSV Sales Data

**Chapter:** 1  
**Label:** `eg:1.1`  
**Source:** `author/chapter1.tex`  
**Section:** `sec:1.1.1` — Definition of a Dataset

## Learning objective

Recognize a dataset as an organized collection of records by reading a plain CSV sales log where each row is one transaction and each column is an attribute of that transaction.

## Chapter context

Chapter 1 opens by defining a dataset before showing its many shapes. Before introducing healthcare, sensor, and non-tabular data, the author reaches for the most familiar layout — a spreadsheet of sales — so the record/attribute idea has one concrete anchor before it gets generalized.

## What this example shows

A CSV of six retail transactions with columns for date, product, quantity, unit price, and total — the simplest everyday instance of the row-and-column definition the section just gave in prose.

## Key terms

- **Record** — one row of the dataset; here, a single sale.
- **Attribute** — one column describing a record; here, Date/Product/Quantity/Price/Total.

## What you should learn

### From the data / input
- Each row (e.g., the Apple sale on 2024-01-01) is one record — one observed transaction.
- `Date, Product, Quantity, Price, Total` are the attributes that describe that record.
- `Total` is derivable from `Quantity x Price`; noticing this hints at the redundancy checks Example 1.11 later automates for accuracy.

### From the output / result
- The printed table has 6 data rows and 5 columns — count both before moving on, since later examples change domain but keep this shape.

## Contents

| File | Role |
|------|------|
| `data.csv` | Sales sample from the book |
| `install.sh` | No-op installer (no dependencies) |
| `run.sh` | Prints the CSV to the terminal |

## Prerequisites

- OS: Linux, macOS, or Windows (Git Bash / WSL recommended for `.sh`)
- Any shell that can run `cat` — no Python or other runtime required

## Setup

```bash
cd modules/chapter1/example1
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Running Example 1.1 — Sample CSV Sales Data
---- data.csv ----
Date,Product,Quantity,Price,Total
2024-01-01,Apple,3,0.5,1.5
2024-01-01,Banana,2,0.3,0.6
2024-01-02,Orange,5,0.7,3.5
2024-01-02,Grapes,1,2.0,2.0
2024-01-03,Mango,4,1.5,6.0
2024-01-04,Apple,2,0.5,1.0
```

## How to interpret the result

If you can point at any line and say "this is one record with five attributes," you have the mental model the rest of the chapter builds on — later examples only change the domain (healthcare, sensors) or the format (JSON, SQL), never this row/column idea.

## Try it / Reflect

- Add a seventh row for a return (negative quantity) and decide whether `Total` should also go negative — this is the kind of accuracy check Example 1.11 automates.

## Related examples

- `eg:1.2` — the same record/attribute pattern applied to a healthcare cohort.
- `eg:1.3` — the same pattern applied to timestamped sensor readings.

## Notes

- Reused conceptually through Chapter 1 (e.g., alongside Examples 1.2-1.3).
- Synthetic sample data from the book manuscript.
