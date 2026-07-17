# Example 10.20 — Over-Reliance in AV Training

**Chapter:** 10  
**Label:** `eg:10.20`  
**Source:** `author/chapter10.tex`  
**Section:** `sec:10.7.3` — Risks of Synthetic Data: Misuse, Over-Reliance, Quality Concerns

## Learning objective

Avoid over-reliance on synthetic AV data that misses real jaywalking behavior.

## Chapter context

Chapter 10 covers synthetic data when real data are scarce, sensitive, or imbalanced. A planner trained mostly on synthetic intersections performs well in simulation but struggles when pedestrians jaywalk in ways absent from the generator's scenario library.

## What this example shows

A planner trained mostly on synthetic intersections performs well in simulation but struggles when pedestrians jaywalk in ways absent from the generator's scenario library.

## What you should learn

### From the concept
- Strong in simulation, weak on unseen jaywalking
- Scenario library gaps become deployment failures
- Augment real data; do not replace it

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
cd modules/chapter10/example20
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Over-reliance on synthetic AV data:
- Strong in simulation, weak on unseen jaywalking
- Scenario library gaps become deployment failures
- Augment real data; do not replace it
```

## How to interpret the result

The closing bullet—'Augment real data; do not replace it'—is the release gate: synthetic data is useful only if it passes this check before training or sharing.

## Try it / Reflect

- Where does 'Over-Reliance in AV Training' apply in your domain—and what would you validate on real data?

## Related examples

- `eg:10.3` — Synthetic AV scenarios.
- `eg:10.15` — Edge-case gap filling.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
