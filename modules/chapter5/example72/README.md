# Example 5.72 — Rolling Window for Streaming Prices

**Chapter:** 5  
**Label:** `eg:5.72`  
**Source:** `author/chapter5.tex`  
**Section:** `sec:5.9.2` — Preprocessing for Real-Time Systems: Handling Streaming Data

## Learning objective

Compute streaming features from sliding time windows only.

## Chapter context

Section 5.9.2 covers streaming preprocessing with rolling windows and low-latency vital-sign pipelines. In a live trading feed, preprocessing may use only the most recent ten minutes of quotes to compute volatility features before each prediction.

## What this example shows

In a live trading feed, preprocessing may use only the most recent ten minutes of quotes to compute volatility features before each prediction.

## What you should learn

### From the concept
- In a live trading feed, preprocessing may use only the most recent ten minutes of quotes to compute volatility features before each prediction.

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
cd modules/chapter5/example72
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
In a live trading feed, preprocessing may use only the most recent ten minutes of quotes to compute volatility features before each prediction.
```

## How to interpret the result

Use this takeaway as a gate in your cleaning checklist before preprocessing or model fitting—Chapter 6 EDA assumes these defects are already understood.

## Try it / Reflect

- Open a dataset you work with: where would a defect like “Rolling Window for Streaming Prices” appear, and which Chapter 5 remedy would you apply first?

## Related examples

- `eg:5.73` — Next example in the same section.

## Notes

- Prose-only in the manuscript.
