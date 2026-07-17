# Example 1.3 — Sensor Reading Dataset

**Chapter:** 1  
**Label:** `eg:1.3`  
**Source:** `author/chapter1.tex`  
**Section:** `sec:1.1.2` — Components of a Dataset

## Learning objective

Recognize a timestamped sensor reading as a record whose attributes include physical units, extending "row = observation" to machine-monitoring data.

## Chapter context

Section 1.1.2 rounds out the record/attribute definition with an industrial case: sensors emit one row per reading, and the units live in the column name itself rather than in a separate lookup table.

## What this example shows

Four evenly-spaced readings from machine M001 with timestamp, machine ID, temperature (K), and vibration (mm/s).

## Key terms

- **Record** — one sensor reading at a specific timestamp.
- **Attribute** — a measured property of that reading (Temperature, Vibration), often with units in the column name.

## What you should learn

### From the data / input
- The de facto key of each record is the pair (`Timestamp`, `Machine_ID`), not a single ID column.
- Units are embedded in the header (`Temperature (K)`, `Vibration (mm/s)`) — metadata riding inside the schema, a preview of Section 1.3.2.
- Five-minute spacing signals this is a monitoring stream, not a one-off snapshot.

### From the output / result
- Values drift only slightly between rows (75.4 to 76.5 K, 2.5 to 2.8 mm/s) — small, steady change typical of healthy equipment rather than a fault signature.

## Contents

| File | Role |
|------|------|
| `data.csv` | Industrial sensor sample |
| `install.sh` | No-op installer |
| `run.sh` | Prints the CSV |

## Prerequisites

- OS: Linux, macOS, or Windows (Git Bash / WSL recommended for `.sh`)
- Any shell that can run `cat`

## Setup

```bash
cd modules/chapter1/example3
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Running Example 1.3 — Sensor Reading Dataset
---- data.csv ----
Timestamp,Machine_ID,Temperature (K),Vibration (mm/s)
2024-02-01 12:00:00,M001,75.4,2.5
2024-02-01 12:05:00,M001,76.1,2.7
2024-02-01 12:10:00,M001,75.8,2.6
2024-02-01 12:15:00,M001,76.5,2.8
```

## How to interpret the result

Reading a sensor table as a short time series — not four unrelated rows — prepares you for "dynamic" datasets later in the chapter and for the consistency/timeliness checks quality control performs on streaming data.

## Try it / Reflect

- Insert a fifth row with a temperature that jumps to 120K and note how obviously it breaks the small-steady-drift pattern you just read.

## Related examples

- `eg:1.1`, `eg:1.2` — the same record/attribute idea in retail and clinical domains.

## Notes

- Together with Examples 1.1-1.2, shows row-as-record across retail, clinical, and industrial data.
- Synthetic sample data from the book manuscript.
