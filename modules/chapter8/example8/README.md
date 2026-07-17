# Example 8.8 — Purchase Amount Data-Dictionary Entry

**Chapter:** 8  
**Label:** `eg:8.8`  
**Source:** `author/chapter8.tex`  
**Section:** `sec:8.2.4` — Data Dictionary: Describes Each Variable in the Dataset

## Learning objective

Read a JSON data-dictionary entry for purchase_amount (type, description, allowed values, units).

## Chapter context

Section 8.2.4 defines data dictionaries: per-variable description, type, allowed values, and units. In a dataset on customer behavior, the data dictionary might describe the variable purchase amount as follows:

## What this example shows

In a dataset on customer behavior, the data dictionary might describe the variable purchase amount as follows:

## Key terms

- **Data dictionary** — Table of variables with type, description, allowed values, and units.
- **Allowed values** — Controlled vocabulary or range statement enabling validation.

## What you should learn

### From the artifact / process
- In a dataset on customer behavior, the data dictionary might describe the variable purchase amount as follows:
- Inspect the artifact fields and tie each to a documentation or versioning duty.

### From the output / result
- `run.sh` displays the chapter artifact or runs `main.py`—compare output to the manuscript listing.

## Contents

| File | Role |
|------|------|
| `data_dictionary.json` | JSON entry for purchase_amount |
| `install.sh` | Prerequisite check (no global tool install) |
| `run.sh` | Displays artifact or runs demo |

## Prerequisites

- OS: Linux, macOS, or Windows (Git Bash / WSL recommended for `.sh`)
- Python 3.10+ if `main.py` is present; otherwise Bash only

## Setup

```bash
cd modules/chapter8/example8
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
[
    {
        "Variable Name": "purchase_amount",
        "Data Type": "float",
        "Description": "Total amount spent by the customer in the month",
        "Allowed Values": "Any positive number",
        "Units": "USD"
    }
]
```

## How to interpret the result

Each line or field in the captured output should map to a documentation or version-control obligation from Section 8—if a collaborator cannot answer 'which version and which transform' from this artifact alone, add metadata.

## Try it / Reflect

- Add one missing field to the purchase amount data-dictionary entry artifact—what downstream user would need it?

## Related examples

- `eg:8.6` — Age variable description prose.
- `eg:8.7` — Gender allowed values.
- `eg:8.19` — Full retail documentation template.

## Notes

- Artifact from chapter listing.
