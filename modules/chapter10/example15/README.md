# Example 10.15 — Pedestrian-in-Rain Edge Case

**Chapter:** 10  
**Label:** `eg:10.15`  
**Source:** `author/chapter10.tex`  
**Section:** `sec:10.6.4` — Synthetic Data in Autonomous Systems: Training Self-Driving Cars, Edge-Case Scenarios

## Learning objective

Fill AV perception gaps with pedestrian-in-rain edge-case synthesis.

## Chapter context

Section 10.6.4 addresses GDPR-compliant synthetic sharing and residual identifiability. An autonomy stack trains on synthetic clips of pedestrians emerging from heavy rain at night, a combination rarely present in logged fleet data.

## What this example shows

An autonomy stack trains on synthetic clips of pedestrians emerging from heavy rain at night, a combination rarely present in logged fleet data.

## What you should learn

### From the concept
- Rain + night + pedestrian rarely appears in fleet logs
- Synthetic clips fill that perception gap
- Still test on real rare events before release

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
cd modules/chapter10/example15
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Pedestrian-in-rain edge case:
- Rain + night + pedestrian rarely appears in fleet logs
- Synthetic clips fill that perception gap
- Still test on real rare events before release
```

## How to interpret the result

The closing bullet—'Still test on real rare events before release'—is the release gate: synthetic data is useful only if it passes this check before training or sharing.

## Try it / Reflect

- Where does 'Pedestrian-in-Rain Edge Case' apply in your domain—and what would you validate on real data?

## Related examples

- `eg:10.3` — AV scenario generation.
- `eg:10.20` — Validate on real rare events.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
