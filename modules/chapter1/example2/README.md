# Example 1.2 — Healthcare Dataset

**Chapter:** 1  
**Label:** `eg:1.2`  
**Source:** `author/chapter1.tex`  
**Section:** `sec:1.1.2` — Components of a Dataset

## Learning objective

Apply the record/attribute pattern outside retail by reading a patient row as one clinical observation with its own set of attributes.

## Chapter context

Having just defined records and attributes on sales data, the chapter immediately swaps domains to healthcare so the definition does not look retail-specific — Section 1.1.2 wants "row = observation, column = attribute" to survive a change of subject matter.

## What this example shows

A four-patient table where each row carries an ID plus age, gender, diagnosis, and medication — clinical attributes attached to one person.

## Key terms

- **Record** — one patient row in the cohort table.
- **Attribute** — a measured property of that patient (Age, Gender, Diagnosis, Medication).

## What you should learn

### From the data / input
- `ID` identifies the record; `Age`, `Gender`, `Diagnosis`, `Medication` are the clinical attributes riding along with it.
- Diagnosis and Medication are categorical text fields — the same columns Example 1.12 later leaves blank to demonstrate missingness.

### From the output / result
- All four rows print with every cell filled — contrast this completeness with Example 1.12's blanks in Age/Gender/Diagnosis.

## Contents

| File | Role |
|------|------|
| `data.csv` | Patient cohort sample |
| `install.sh` | No-op installer |
| `run.sh` | Prints the CSV |

## Prerequisites

- OS: Linux, macOS, or Windows (Git Bash / WSL recommended for `.sh`)
- Any shell that can run `cat`

## Setup

```bash
cd modules/chapter1/example2
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Running Example 1.2 — Healthcare Dataset
---- data.csv ----
ID,Age,Gender,Diagnosis,Medication
101,45,Male,Hypertension,Amlodipine
102,60,Female,Diabetes,Metformin
103,35,Male,Asthma,Albuterol
104,50,Female,Heart Disease,Atorvastatin
```

## How to interpret the result

Once you can read a patient row as "one record, several attributes" regardless of the values being clinical rather than commercial, you have generalized the Section 1.1.1 definition — exactly what the next several examples (sensor data, JSON, text) keep testing.

## Try it / Reflect

- Add a fifth patient row with a missing `Diagnosis` value and compare the resulting file with Example 1.12's dataset.

## Related examples

- `eg:1.1` — the same record/attribute idea in a retail table.
- `eg:1.12` — the same schema with attributes deliberately left blank.

## Notes

- Pair with Examples 1.1 and 1.3 for the cross-domain record pattern.
- Synthetic sample data from the book manuscript.
