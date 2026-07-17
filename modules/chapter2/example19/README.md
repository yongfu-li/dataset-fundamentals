# Example 2.19 — Missing Fields in a Clinic Intake Table

**Chapter:** 2  
**Label:** `eg:2.19`  
**Source:** `author/chapter2.tex`  
**Section:** `sec:2.8.1` — Data Quality Issues

## Learning objective

Trace completeness failures to collection-protocol gaps (paper fallback without catch-up) rather than only to later cleaning.

## Chapter context

Section 2.8 shifts from methods to prevention. Example 2.19 shows night-shift paper forms creating blank diagnosis codes — the same completeness theme as Example 1.12, now blamed on collection design.

## What this example shows

An intake CSV where evening arrivals lack `diagnosis_code` because the night shift used paper without a documented catch-up process; day-shift rows are complete.

## Key terms

- **Completeness** — Whether required fields are present for analysis.
- **Collection protocol gap** — A process hole (e.g., paper fallback) that systematically drops fields.

## What you should learn

### From the data / input
- Evening rows lack `diagnosis_code` while day rows are filled — a shift×missingness pattern.
- The defect originates in collection, not only in later ETL.
- Without catch-up, analysts drop rows or impute labels that were never measured.

### From the output / result
- `run.sh` prints the takeaway or data/code output below; use it as a checklist for similar collection designs.

## Contents

| File | Role |
|------|------|
| `intake.csv` | Illustrative intake table with evening blanks |
| `install.sh` | No-op installer |
| `run.sh` | Prints the CSV |

## Prerequisites

- OS: Linux, macOS, or Windows (Git Bash / WSL recommended for `.sh`)
- Any shell that can run cat

## Setup

```bash
cd modules/chapter2/example19
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Running Example 2.19 — Missing Fields in a Clinic Intake Table
---- intake.csv ----
patient_id,arrival_shift,age,gender,diagnosis_code,chief_complaint
P001,day,45,F,J06.9,Sore throat
P002,day,62,M,I10,Hypertension follow-up
P003,evening,33,F,,Fever
P004,evening,71,M,,Chest discomfort
P005,day,28,F,N39.0,UTI symptoms
P006,evening,55,M,,Dizziness
```

## How to interpret the result

Prevention at collection (required fields, catch-up) beats post-hoc imputation of values that never existed in the source.

## Try it / Reflect

- Count blank `diagnosis_code` rows by `arrival_shift` — confirm all blanks are evening.

## Related examples

- `eg:1.12` — Healthcare missing attributes — Chapter 1 completeness parallel.
- `eg:2.2` — Primary clinical protocol that should have prevented this gap.

## Notes

- Illustrative CSV constructed to match the book scenario (no listing in the manuscript).
- Remediation workflows belong in Chapter 5.
