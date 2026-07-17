# Example 9.7 — Agricultural IoT Sensor Networks

**Chapter:** 9  
**Label:** `eg:9.7`  
**Source:** `author/chapter9.tex`  
**Section:** `sec:9.1.2` — The Need for Advanced Techniques to Handle Diverse Data Sources and Formats

## Learning objective

Map agricultural IoT sources (soil, weather, drones) to timely irrigation decisions and governance needs.

## Chapter context

Section 9.1.2 adds heterogeneous streams (IoT, social, logs, multimedia) and ties advanced collection to governance in Chapters 7 and 8. Farmers now collect continuous soil-moisture, temperature, and crop-health readings from IoT sensors, weather stations, and drones; timely irrigation decisions depend on that strea…

## What this example shows

Farmers now collect continuous soil-moisture, temperature, and crop-health readings from IoT sensors, weather stations, and drones; timely irrigation decisions depend on that stream, not on infrequent manual soil tests.

## What you should learn

### From the concept
- Soil sensors, weather stations, and drones stream continuously
- Irrigation decisions depend on current readings, not last month's test
- Multi-source streams need provenance and governance (Chapter 8)

### From the output / result
- `run.sh` prints the structured takeaway below—use it as a design checklist.

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
cd modules/chapter9/example7
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Agricultural IoT:
- Soil sensors, weather stations, and drones stream continuously
- Irrigation decisions depend on current readings, not last month's test
- Multi-source streams need provenance and governance (Chapter 8)
```

## How to interpret the result

The closing bullet—'Multi-source streams need provenance and governance (Chapter 8)'—is the decision gate: if your pipeline cannot deliver that outcome, the advanced method adds complexity without value.

## Try it / Reflect

- Where in your work does 'Agricultural IoT Sensor Networks' apply—or fail to apply?

## Related examples

- `eg:9.16` — Soil sensing in the same domain.
- `Chapter 8` — Provenance and governance for multi-source streams.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
