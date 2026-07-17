# Example 1.13 — Inconsistent Date Formats

**Chapter:** 1  
**Label:** `eg:1.13`  
**Source:** `author/chapter1.tex`  
**Section:** `sec:1.3.1` — Attributes of a Good Dataset

## Learning objective

Recognize a consistency failure when the same attribute (a ship date) uses incompatible formats across rows, and see why that breaks chronological sorting.

## Chapter context

Consistency closes the accuracy/completeness/consistency trio in Section 1.3.1: merged extracts often mix locale date conventions, and nothing downstream works correctly until one convention is enforced.

## What this example shows

Three ship dates: `03/04/2024` (ambiguous MM/DD or DD/MM), an ISO `2024-04-03`, and `04/03/2024` — three notations that may or may not denote the same day.

## Key terms

- **Consistency** — uniform formats/definitions for the same attribute across records; the third quality dimension in Section 1.3.1.

## What you should learn

### From the data / input
- `03/04/2024` is ambiguous (March 4 vs April 3) without a documented convention.
- ISO dates (`2024-04-03`) sort lexicographically as strings; slash forms do not sort reliably.

### From the code / process
- `main.py` prints each row and states the locale ambiguity explicitly — the analytical failure mode, made visible.

### From the output / result
- Three formats side by side are the teaching point: inconsistency is visible before any date parser even runs.

## Contents

| File | Role |
|------|------|
| `data.csv` | Orders with mixed date formats |
| `main.py` | Prints rows and the locale caveat |
| `install.sh` | No-op installer |
| `run.sh` | Runs the preview script |

## Prerequisites

- OS: Linux, macOS, or Windows (Git Bash / WSL recommended for `.sh`)
- Python 3.10+

## Setup

```bash
cd modules/chapter1/example13
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Running Example 1.13 — Inconsistent Date Formats
{'Order_ID': 'O1001', 'Ship_Date': '03/04/2024'}
{'Order_ID': 'O1002', 'Ship_Date': '2024-04-03'}
{'Order_ID': 'O1003', 'Ship_Date': '04/03/2024'}

Without a documented convention, 03/04/2024 may mean March 4 or April 3.
```

## How to interpret the result

Standardizing dates (and, by extension, units, categories, and IDs) is a prerequisite for any trustworthy time-based analysis — you cannot sort or diff what you cannot parse unambiguously.

## Try it / Reflect

- Rewrite all three dates to ISO 8601 in a copy of `data.csv` and confirm they now sort correctly with a plain string sort.

## Related examples

- `eg:1.11` — accuracy.
- `eg:1.12` — completeness — together the Section 1.3.1 quality trio.

## Notes

- Closes the accuracy/completeness/consistency trio with Examples 1.11-1.12.
- Synthetic sample data from the book manuscript.
