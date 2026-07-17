# Example 2.9 — Automated Cold-Room Temperature Logging

**Chapter:** 2  
**Label:** `eg:2.9`  
**Source:** `author/chapter2.tex`  
**Section:** `sec:2.4.2` — Automated Data Collection

## Learning objective

Explain when automation is required: sampling rates humans cannot sustain, plus alert thresholds and storage.

## Chapter context

Section 2.4.2 pairs with the manual aisle audit. Cold-room temperature every minute is the textbook case where automation is not optional if you want continuous coverage.

## What this example shows

Wired sensors log cold-room temperature every minute to a central store; no associate could sample that frequently, but the pipeline still needs alert thresholds and missing-reading policy.

## Key terms

- **Automated collection** — Instrument-driven logging without per-observation human entry.

## What you should learn

### From the concept
- Automation wins when required frequency exceeds human capacity.
- Thresholds and missing-reading policy are part of the collection design.
- Manual and automated methods often coexist in one operation (aisles vs cold rooms).

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
cd modules/chapter2/example9
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Automate when humans cannot hit the required cadence:
- Cold-room temperature logged every minute by wired sensors
- Still need alert thresholds and missing-reading policy
- Coexists with manual aisle audits (Example 2.8)
```

## How to interpret the result

Automation removes labor but not design work — alert thresholds and gap handling still decide whether the stream is useful.

## Try it / Reflect

- Compare with Example 2.4's 30-second warehouse stream: what changes if the cold room only needs minute-level logs?

## Related examples

- `eg:2.8` — Manual shelf audit — complementary method.
- `eg:2.4` — Real-time warehouse sensor stream.

## Notes

- Prose-only in the manuscript.
