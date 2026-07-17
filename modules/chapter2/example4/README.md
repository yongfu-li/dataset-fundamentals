# Example 2.4 — Real-Time Warehouse Sensor Stream

**Chapter:** 2  
**Label:** `eg:2.4`  
**Source:** `author/chapter2.tex`  
**Section:** `sec:2.2.3` — Real-Time Data

## Learning objective

Characterize real-time collection as high-frequency streams that require volume handling, missing-packet policy, and clock discipline.

## Chapter context

Section 2.2.3 moves from batch extracts to continuous streams. The cold-chain warehouse shows why "collecting data" now includes pipeline reliability, not only sensor placement.

## What this example shows

A cold-chain warehouse streams temperature and humidity every thirty seconds; operators get threshold alerts, but the pipeline must handle volume, missing packets, and clock skew.

## Key terms

- **Real-time data** — Continuously arriving measurements used for near-immediate decisions or alerts.

## What you should learn

### From the concept
- Frequency (e.g., every 30s) is a design choice tied to the alert SLA.
- Missing packets and clock skew are collection problems, not later cleaning only.
- Storage and alerting are part of the collection system.

### From the output / result
- `run.sh` prints the takeaway or data/code output below; use it as a checklist for similar collection designs.

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
cd modules/chapter2/example4
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Real-time collection = high-frequency streams + reliable pipeline:
- Example: temp/humidity every 30s in a cold-chain warehouse
- Must handle volume, missing packets, and clock skew
- Alerts only work if the stream's failure modes are designed in
```

## How to interpret the result

If your decision needs seconds-scale reaction, batch daily extracts are the wrong source type — design the stream's failure modes up front.

## Try it / Reflect

- Would a 5-minute interval still catch a cold-room excursion that lasts 2 minutes? (Usually no — interval must be finer than the failure window.)

## Related examples

- `eg:2.9` — Automated cold-room logging at one-minute cadence.
- `eg:2.23` — Soil-moisture streams joined with satellite indices.

## Notes

- Prose-only in the manuscript.
