# Example 1.4 — Housing Price Dataset in JSON Format

**Chapter:** 1  
**Label:** `eg:1.4`  
**Source:** `author/chapter1.tex`  
**Section:** `sec:1.1.2` — Components of a Dataset

## Learning objective

Identify the attributes/features of a predictive dataset when they arrive as JSON object keys instead of fixed CSV columns.

## Chapter context

Section 1.1.2 also previews machine-learning framing: the same "attribute" idea becomes a "feature" once a value like Price is treated as a modeling target. JSON is introduced here so the record/attribute idea survives a change of format, foreshadowing the semi-structured discussion in Section 1.2.3.

## What this example shows

A JSON array of four houses, each carrying location, square footage, bedrooms, school proximity, and price.

## Key terms

- **Feature** — an attribute used as a model input; in this listing, everything except `Price`.
- **Target** — the attribute a model predicts; here, `Price`.

## What you should learn

### From the data / input
- Each object is one house record; its keys (`Square_Footage`, `Bedrooms`, ...) are the attributes.
- `Price` is the natural regression target; the remaining keys are candidate predictors.
- Named keys replace positional CSV columns — same information, different layout, same record/attribute meaning.

### From the output / result
- All four objects share the same key set — verify this before assuming the array is a consistent schema you can flatten into a table.

## Contents

| File | Role |
|------|------|
| `housing.json` | Housing feature records |
| `install.sh` | No-op installer |
| `run.sh` | Pretty-prints JSON |

## Prerequisites

- OS: Linux, macOS, or Windows (Git Bash / WSL recommended for `.sh`)
- Python 3 optional (falls back to `cat`)

## Setup

```bash
cd modules/chapter1/example4
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Running Example 1.4 — Housing Price Dataset in JSON Format
[
    {
        "House_ID": 101,
        "Location": "New York",
        "Square_Footage": 2000,
        "Bedrooms": 3,
        "Proximity_to_Schools": "0.5 miles",
        "Price": 850000
    },
    {
        "House_ID": 102,
        "Location": "Los Angeles",
        "Square_Footage": 1800,
        "Bedrooms": 4,
        "Proximity_to_Schools": "1.2 miles",
        "Price": 720000
    },
    ... (2 more houses, same key set) ...
]
```

## How to interpret the result

If you can point at `Price` and say "target" and at the rest and say "features," you have connected the book's attribute vocabulary to the ML vocabulary used everywhere after Chapter 1.

## Try it / Reflect

- Flatten this JSON into a CSV with pandas (`pd.json_normalize`) and confirm you get four rows, five feature columns, and one target column.

## Related examples

- `eg:1.7` — a JSON record with a nested array, one step past this flat structure.
- `eg:1.2` — the tabular CSV equivalent of one-record-per-row.

## Notes

- See also Section 1.2.3 on semi-structured data.
- Synthetic sample data from the book manuscript.
