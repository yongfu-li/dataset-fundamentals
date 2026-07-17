# Example 1.12 — Healthcare Dataset with Missing Attributes

**Chapter:** 1  
**Label:** `eg:1.12`  
**Source:** `author/chapter1.tex`  
**Section:** `sec:1.3.1` — Attributes of a Good Dataset

## Learning objective

Explain completeness by profiling which attributes are missing and recognizing that a blank cell forces a decision (impute, drop, or re-collect) before modeling.

## Chapter context

Completeness is the second quality dimension Section 1.3.1 introduces after accuracy. Blank clinical fields are not simply "less data" — if missingness correlates with the outcome you are studying, ignoring it can bias estimates.

## What this example shows

The same four-patient schema as Example 1.2, but rows 102-104 are each missing one attribute (Age, Gender, or Diagnosis, respectively).

## Key terms

- **Completeness** — the extent to which all required attribute values are present; the second quality dimension in Section 1.3.1.
- **Missingness** — the pattern of which values are absent — profiling it is the first step before choosing to impute, drop, or re-collect.

## What you should learn

### From the data / input
- Row 102 is missing `Age`; row 103 is missing `Gender`; row 104 is missing `Diagnosis`.
- Contrast with complete Example 1.2 — same schema, different quality.

### From the code / process
- `main.py` counts empty strings per column — a basic missingness profile.

### From the output / result
- Missing counts should read 1 for Age, Gender, and Diagnosis — visible gaps before any model runs.

## Contents

| File | Role |
|------|------|
| `data.csv` | Incomplete patient table |
| `main.py` | Counts missing attributes |
| `install.sh` | No-op installer |
| `run.sh` | Runs the missingness report |

## Prerequisites

- OS: Linux, macOS, or Windows (Git Bash / WSL recommended for `.sh`)
- Python 3.10+

## Setup

```bash
cd modules/chapter1/example12
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Running Example 1.12 — Healthcare Dataset with Missing Attributes
{'ID': '101', 'Age': '45', 'Gender': 'Male', 'Diagnosis': 'Hypertension', 'Medication': 'Amlodipine'}
{'ID': '102', 'Age': '', 'Gender': 'Female', 'Diagnosis': 'Diabetes', 'Medication': 'Metformin'}
{'ID': '103', 'Age': '35', 'Gender': '', 'Diagnosis': 'Asthma', 'Medication': 'Albuterol'}
{'ID': '104', 'Age': '50', 'Gender': 'Female', 'Diagnosis': '', 'Medication': 'Atorvastatin'}

Missing counts:
  ID: 0
  Age: 1
  Gender: 1
  Diagnosis: 1
  Medication: 0
```

## How to interpret the result

Any modeling plan for this table must choose impute / drop / collect for each blank before proceeding — that decision, not the missing cell itself, is completeness's practical lesson.

## Try it / Reflect

- Change `main.py` to fill missing `Age` with the column mean instead of just counting blanks, and recompute the count — does the row still look risky?

## Related examples

- `eg:1.2` — the complete version of this exact schema.
- `eg:1.20` — pandas `isnull().sum()` performs the same missingness count at scale.

## Notes

- Revisited when Example 1.20 counts nulls with pandas.
- Synthetic sample data from the book manuscript.
