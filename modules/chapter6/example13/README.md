# Example 6.13 — Nominal Product Categories

**Chapter:** 6  
**Label:** `eg:6.13`  
**Source:** `author/chapter6.tex`  
**Section:** `sec:6.2.1` — Types of Data

## Learning objective

Summarize nominal product categories by frequency without implying rank or numeric quantity.

## Chapter context

Example 6.13 completes the data-type set—Electronics, Clothing, Groceries have no inherent order.

## What this example shows

Product categories such as Electronics, Clothing, and Groceries are nominal—no ranking; summarize with frequencies or proportions.

## Key terms

- **Nominal variable** — Categories with no natural order.
- **Frequency / proportion** — Appropriate summaries for nominal fields.

## What you should learn

### From the concept
- Bar charts of counts, not means of arbitrary codes.
- Numeric labels for categories are not quantities.
- One-hot encoding (Chapter 5) comes after understanding levels.

### From the output / result
- `run.sh` lists nominal categories and frequency-summary rule.

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
cd modules/chapter6/example13
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Nominal product categories:
Electronics, Clothing, Groceries have no inherent ranking.
Summarize by frequency/proportion; numeric codes would be arbitrary labels, not quantities.
```

## How to interpret the result

If you average encoded categories, you have violated nominal semantics—see Examples 6.14 and 5.50 (Chapter 5) for ordinal vs nominal.

## Try it / Reflect

- Draw a frequency table for three product categories—what is the mode category?

## Related examples

- `eg:6.14` — Ordinal satisfaction contrast.
- `eg:6.8` — Label inconsistency within nominal fields.
- `eg:5.47` — One-hot encoding in Chapter 5.

## Notes

- Prose-only.
