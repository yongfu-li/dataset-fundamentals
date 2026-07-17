# Example 2.8 — Manual Shelf Audit in a Grocery Pilot

**Chapter:** 2  
**Label:** `eg:2.8`  
**Source:** `author/chapter2.tex`  
**Section:** `sec:2.4.1` — Manual Data Collection

## Learning objective

Recognize when manual collection adds context that automated sensors miss (temporary displays, damaged packaging).

## Chapter context

Section 2.4.1 contrasts manual with automated collection. The grocery aisle audit shows human observers capturing exceptions cameras or shelf sensors would misclassify.

## What this example shows

Associates walk each aisle once per hour and record out-of-stock SKUs on a tablet; they can note temporary displays and damaged packaging a ceiling camera would miss.

## Key terms

- **Manual collection** — Human-recorded observations, often via forms or checklists.

## What you should learn

### From the concept
- Manual collection trades labor cost for richer contextual judgment.
- Cadence (hourly) must match how fast shelves change.
- Pair with automation when frequency or coverage exceeds human capacity (Example 2.9).

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
cd modules/chapter2/example8
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Manual collection captures context sensors miss:
- Hourly aisle walks record out-of-stocks on a tablet
- Humans note temporary displays and damaged packaging
- Trade-off: richer judgment vs labor cost and limited cadence
```

## How to interpret the result

Use manual audits for exception-rich environments; do not expect them to match sensor frequency for continuous temperature.

## Try it / Reflect

- If associates miss one aisle for two hours, which quality dimension fails first — completeness or accuracy?

## Related examples

- `eg:2.9` — Automated cold-room logging — the automated counterpart.

## Notes

- Prose-only in the manuscript.
