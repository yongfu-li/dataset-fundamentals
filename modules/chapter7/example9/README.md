# Example 7.9 — Medical Instrument Calibration

**Chapter:** 7  
**Label:** `eg:7.15`  
**Source:** `author/chapter7.tex`  
**Section:** `sec:7.2.2` — Measurement Bias: Errors in Data Collection or Measurement Methods

## Learning objective

Document instrument calibration status to avoid biased medical measurements.

## Chapter context

Section 7.2.2 covers measurement bias at collection and instrument level. In health-related studies, instruments used to measure blood pressure or cholesterol levels may be inaccurate or not calibrated properly, leading to biased conclusions.

## What this example shows

In health-related studies, instruments used to measure blood pressure or cholesterol levels may be inaccurate or not calibrated properly, leading to biased conclusions.

## What you should learn

### From the concept
- Miscalibrated blood-pressure or cholesterol instruments shift all readings systematically
- Biased measurements produce biased conclusions downstream
- Record calibration status as dataset metadata

### From the output / result
- `run.sh` prints the structured takeaway below—use it when classifying or mitigating bias.

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
cd modules/chapter7/example9
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Running Example 7.9 — Medical Instrument Calibration
Measurement bias — instrument calibration:
- Miscalibrated blood-pressure or cholesterol instruments shift all readings systematically
- Biased measurements produce biased conclusions downstream
- Record calibration status as dataset metadata
```

## How to interpret the result

The closing bullet—'Record calibration status as dataset metadata'—is the audit gate: deploy only after this condition is checked for the affected groups.

## Try it / Reflect

- Where does 'Medical Instrument Calibration' appear in a dataset you have worked with?

## Related examples

- `eg:7.14` — Previous example in the same section.
- `eg:7.16` — Next example in the same section.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
- Module folder `example9` is **Example 7.9** in the PDF; manuscript label is `eg:7.15`.
