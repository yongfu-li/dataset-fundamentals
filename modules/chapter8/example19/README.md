# Example 8.19 — Retail Transaction Documentation Template

**Chapter:** 8  
**Label:** `eg:8.19`  
**Source:** `author/chapter8.tex`  
**Section:** `sec:8.3.12` — Standards for Dataset Documentation: FAIR Principles

## Learning objective

Use the retail transaction documentation template combining DATASET.md and data_dictionary.csv.

## Chapter context

Section 8.3.12 ties documentation to FAIR principles and reusable templates. Here is a simple template that illustrates how to organize dataset documentation: : Retail Transaction Creator: John Doe Creation Date: January 1, 2024 Version: 1.0 Last Updated: January 15, 2024 Purp…

## What this example shows

Here is a simple template that illustrates how to organize dataset documentation: : Retail Transaction Creator: John Doe Creation Date: January 1, 2024 Version: 1.0 Last Updated: January 15, 2024 Purpose: To analyze customer behavior in retail transactions Data Source: RetailStoreAPI, External data from Census Bureau Licensing: Creative Commons BY 4.0 Update Frequency: Monthly |c|c|c|c|c| Variable Name & Data Type & Description & Allowed Values & Units transaction id & Integer & Unique ID & Any positive number & - amount & Float& Total amount spent & Any positive number & USD category & String & The category & Electronics & - & & of the item & Clothing & - & & & Food & - Original Data Source: RetailStoreAPI Data Cleaning: Missing values were imputed using median values Merging: Merged with Census data to add demographic information The dataset only includes data from urban locations. There are missing values in the `category` column for 5

## Key terms

- **FAIR** — Findable, Accessible, Interoperable, Reusable dataset principles.

## What you should learn

### From the artifact / process
- DATASET.md ---
- Creator: John Doe
- Creation date: 2024-01-01

### From the output / result
- `run.sh` displays the chapter artifact or runs `main.py`—compare output to the manuscript listing.

## Contents

| File | Role |
|------|------|
| `DATASET.md` | Retail dataset overview and provenance |
| `data_dictionary.csv` | Variable dictionary CSV |
| `install.sh` | Prerequisite check (no global tool install) |
| `run.sh` | Displays artifact or runs demo |

## Prerequisites

- OS: Linux, macOS, or Windows (Git Bash / WSL recommended for `.sh`)
- Python 3.10+ if `main.py` is present; otherwise Bash only

## Setup

```bash
cd modules/chapter8/example19
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
--- DATASET.md ---
# Retail Transaction

## Overview
- Creator: John Doe
- Creation date: 2024-01-01
- Version: 1.0
- Last updated: 2024-01-15
- Purpose: Analyze customer behavior in retail transactions

## Metadata
- Source: RetailStoreAPI and U.S. Census Bureau
- License: Creative Commons BY 4.0
- Update frequency: Monthly

## Provenance
- Missing values were imputed with medians.
- RetailStoreAPI records were merged with Census demographic data.

## Notes
- Coverage is limited to urban locations.
- Five percent of `category` values are missing and were excluded from analysis.
--- data_dictionary.csv ---
Variable Name,Data Type,Description,Allowed Values,Units
transaction_id,Integer,Unique transaction ID,Any positive integer,
amount,Float,Total amount spent,Any positive number,USD
category,String,Item category,Electronics|Clothing|Food,
```

## How to interpret the result

Each line or field in the captured output should map to a documentation or version-control obligation from Section 8—if a collaborator cannot answer 'which version and which transform' from this artifact alone, add metadata.

## Try it / Reflect

- Add one missing field to the retail transaction documentation template artifact—what downstream user would need it?

## Related examples

- `eg:8.18` — Previous example in the same section.

## Notes

- Artifact from chapter listing.
