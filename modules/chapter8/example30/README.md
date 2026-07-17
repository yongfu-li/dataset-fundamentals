# Example 8.30 — Codebook for Categorical Labels

**Chapter:** 8  
**Label:** `eg:8.30`  
**Source:** `author/chapter8.tex`  
**Section:** `sec:8.5.1` — Best Practices for Dataset Documentation

## Learning objective

Inspect a JSON codebook mapping categorical codes to labels, ranges, and units.

## Chapter context

Section 8.5.1 best practices—codebooks for categorical fields and complex region codes. For categorical data, provide a codebook that maps codes to their corresponding labels or values. This is especially important in datasets with variables that represent complex categories (e.g., numer…

## What this example shows

For categorical data, provide a codebook that maps codes to their corresponding labels or values. This is especially important in datasets with variables that represent complex categories (e.g., numeric codes for geographic regions or demographic categories).

## What you should learn

### From the artifact / process
- For categorical data, provide a codebook that maps codes to their corresponding labels or values.
- This is especially important in datasets with variables that represent complex categories (e.g., numeric codes for geographic regions or demographic categories).
- Inspect the artifact fields and tie each to a documentation or versioning duty.

### From the output / result
- `run.sh` displays the chapter artifact or runs `main.py`—compare output to the manuscript listing.

## Contents

| File | Role |
|------|------|
| `codebook.json` | JSON codebook for age and gender |
| `install.sh` | Prerequisite check (no global tool install) |
| `run.sh` | Displays artifact or runs demo |

## Prerequisites

- OS: Linux, macOS, or Windows (Git Bash / WSL recommended for `.sh`)
- Python 3.10+ if `main.py` is present; otherwise Bash only

## Setup

```bash
cd modules/chapter8/example30
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
{
    "age": {
        "type": "integer",
        "description": "Age of the individual in years",
        "range": "0-120",
        "unit": "years"
    },
    "gender": {
        "type": "categorical",
        "description": "Gender of the individual",
        "values": [
            "male",
            "female",
            "non-binary"
        ]
    }
}
```

## How to interpret the result

Each line or field in the captured output should map to a documentation or version-control obligation from Section 8—if a collaborator cannot answer 'which version and which transform' from this artifact alone, add metadata.

## Try it / Reflect

- Add one missing field to the codebook for categorical labels artifact—what downstream user would need it?

## Notes

- Artifact from chapter listing.
