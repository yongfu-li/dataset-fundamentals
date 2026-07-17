# Example 3.15 — Differential Privacy for Product Telemetry

**Chapter:** 3  
**Label:** `eg:3.15`  
**Source:** `author/chapter3.tex`  
**Section:** `sec:3.4.2` — Differential Privacy and Federated Learning

## Learning objective

Describe how differential privacy enables useful aggregate telemetry while limiting individual singling-out.

## Chapter context

Section 3.4.2 introduces privacy-enhancing technologies (PETs). Example 3.15 is the chapter's primary differential-privacy vignette for product analytics.

## What this example shows

A platform can release aggregate usage statistics under a DP mechanism so individuals are hard to single out while teams still see population patterns—success depends on noise calibration and privacy-budget discipline across queries.

## Key terms

- **Differential privacy (DP)** — A mathematical guarantee limiting what any one person's data can change in a release.
- **Privacy budget** — A cap on how much information multiple queries can leak cumulatively.
- **Aggregate telemetry** — Population-level product metrics without raw event trails.

## What you should learn

### From the concept
- DP trades a little accuracy for a provable privacy floor.
- Many overlapping queries can exhaust a budget quietly.
- DP complements—not replaces—access control and minimization.

### From the output / result
- `run.sh` summarizes DP releases, calibration, and budget cautions.

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
cd modules/chapter3/example15
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Differential privacy for product telemetry:
- Release aggregate usage stats under a DP mechanism
- Hard to single out individuals; teams still see population-level patterns
- Needs correct noise calibration and care not to publish too many overlapping queries against the same privacy budget
```

## How to interpret the result

If analytics ships dozens of daily slices on the same cohort without budget accounting, Example 3.15's warning applies.

## Try it / Reflect

- Name one metric you could publish with noise and one you should never publish from the same table.

## Related examples

- `eg:3.16` — Federated learning as another PET for on-device data.
- `eg:3.13` — Why raw trace release fails without formal privacy.
- `eg:3.41` — Future PET mix including DP and federation.

## Notes

- Prose-only. Primary DP vignette in Chapter 3.
