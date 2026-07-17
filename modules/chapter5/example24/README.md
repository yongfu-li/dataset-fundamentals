# Example 5.24 — Faulty IoT Sensor Spike

**Chapter:** 5  
**Label:** `eg:5.24`  
**Source:** `author/chapter5.tex`  
**Section:** `sec:5.2.5` — Outliers: Definition, Causes, and Handling Techniques

## Learning objective

Separate sensor-failure spikes from true operating extremes in IoT streams.

## Chapter context

Section 5.2.5 distinguishes entry errors, legitimate extremes, and sensor failures—and transforms such as log, winsorize, and median imputation for skew and spikes. A stuck relay can report 500,000 RPM on a motor that normally runs near 3,000 RPM. That spike reflects sensor failure rather than true operating conditions.

## What this example shows

A stuck relay can report 500,000 RPM on a motor that normally runs near 3,000 RPM. That spike reflects sensor failure rather than true operating conditions.

## What you should learn

### From the concept
- A stuck relay can report 500,000 RPM on a motor that normally runs near 3,000 RPM.
- That spike reflects sensor failure rather than true operating conditions.

### From the output / result
- `run.sh` prints the structured takeaway as a cleaning/preprocessing checklist.

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
cd modules/chapter5/example24
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
A stuck relay can report 500,000 RPM on a motor that normally runs near 3,000 RPM. That spike reflects sensor failure rather than true operating conditions.
```

## How to interpret the result

That spike reflects sensor failure rather than true operating conditions.

## Try it / Reflect

- Open a dataset you work with: where would a defect like “Faulty IoT Sensor Spike” appear, and which Chapter 5 remedy would you apply first?

## Related examples

- `eg:5.23` — Previous example in the same section.
- `eg:5.25` — Next example in the same section.

## Notes

- Prose-only in the manuscript.
