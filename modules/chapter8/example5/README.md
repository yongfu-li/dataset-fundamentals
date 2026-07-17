# Example 8.5 — Air-Quality Metadata Fields

**Chapter:** 8  
**Label:** `eg:8.5`  
**Source:** `author/chapter8.tex`  
**Section:** `sec:8.2.3` — Version Information

## Learning objective

Specify metadata fields for air-quality monitoring (creator, period, cadence, sources).

## Chapter context

Section 8.2.3 covers version metadata—who collected data, when, how often, and from which sources. In a dataset collected for monitoring air quality, the metadata would specify the organization that gathered the data (e.g., a government environmental agency), the time period over which the data was…

## What this example shows

In a dataset collected for monitoring air quality, the metadata would specify the organization that gathered the data (e.g., a government environmental agency), the time period over which the data was collected, the frequency of measurements (e.g., hourly), and the sources of any external data (e.g., satellite data for global air quality levels).

## What you should learn

### From the concept
- Record creator, collection period, cadence, and external sources.
- These fields establish accountability, timeliness, and data authenticity.

### From the output / result
- `run.sh` prints the structured documentation/version-control takeaway.

## Contents

| File | Role |
|------|------|
| `install.sh` | No-op or prerequisite check |
| `run.sh` | Prints the structured takeaway |

## Prerequisites

- OS: Linux, macOS, or Windows (Git Bash / WSL recommended for `.sh`)
- Bash

## Setup

```bash
cd modules/chapter8/example5
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
- Record creator, collection period, cadence, and external sources.
- These fields establish accountability, timeliness, and data authenticity.
```

## How to interpret the result

These fields establish accountability, timeliness, and data authenticity. Treat this as a release gate before sharing data or training models.

## Try it / Reflect

- Audit a dataset you maintain: which element of “Air-Quality Metadata Fields” is missing from your README or DVC metadata?

## Notes

- Prose-only; run.sh prints operational takeaway.
