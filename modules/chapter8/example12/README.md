# Example 8.12 — Faulty Sensor Annotation

**Chapter:** 8  
**Label:** `eg:8.12`  
**Source:** `author/chapter8.tex`  
**Section:** `sec:8.2.7` — Annotations and Notes: Contextual Details About Data Collection or Peculiarities

## Learning objective

Annotate known collection defects (e.g., +2°C bias) in dataset notes.

## Chapter context

Section 8.2.7 adds annotations for sampling limits and known collection defects. An annotation for a weather dataset might read: ``Note: The temperature data from the year 2019 was collected with faulty sensors, resulting in values that are consistently 2°C higher than actual temp…

## What this example shows

An annotation for a weather dataset might read: ``Note: The temperature data from the year 2019 was collected with faulty sensors, resulting in values that are consistently 2°C higher than actual temperatures.''

## What you should learn

### From the concept
- The affected period, defect direction, and magnitude must be explicit.
- 2019 temperatures are systematically 2°C too high, not random noise.

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
cd modules/chapter8/example12
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
- The affected period, defect direction, and magnitude must be explicit.
- 2019 temperatures are systematically 2°C too high, not random noise.
```

## How to interpret the result

2019 temperatures are systematically 2°C too high, not random noise. Treat this as a release gate before sharing data or training models.

## Try it / Reflect

- Audit a dataset you maintain: which element of “Faulty Sensor Annotation” is missing from your README or DVC metadata?

## Related examples

- `eg:8.11` — Previous example in the same section.

## Notes

- Prose-only; run.sh prints operational takeaway.
