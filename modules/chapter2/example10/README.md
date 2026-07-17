# Example 2.10 — Simple Random Draw from an Employee Roster

**Chapter:** 2  
**Label:** `eg:2.10`  
**Source:** `author/chapter2.tex`  
**Section:** `sec:2.5.1` — Random Sampling

## Learning objective

Apply simple random sampling when a complete frame exists and equal inclusion probability is enough.

## Chapter context

Section 2.5.1 introduces probability sampling. The employee-roster draw is the baseline design: a complete frame, uniform chance, and email invitations.

## What this example shows

From a complete HR roster of 2,000 employees, analysts draw 200 IDs uniformly at random and invite them by email to rate a new benefits portal.

## Key terms

- **Simple random sample (SRS)** — Every unit in the frame has equal chance of selection.
- **Sampling frame** — The list from which the sample is drawn (here, the HR roster).

## What you should learn

### From the concept
- SRS needs a complete, clean frame.
- Equal probability supports generalization when response is high.
- Nonresponse after invitation is a separate bias risk (see Section 2.8).

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
cd modules/chapter2/example10
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Simple random sample when the frame is complete:
- Draw 200 of 2,000 employee IDs uniformly at random
- Equal inclusion probability supports generalization (if response is high)
- Switch to stratification when subgroup visibility is required
```

## How to interpret the result

Use SRS when subgroups are not decision-critical; switch to stratification (2.11) when device or building differences must be guaranteed visible.

## Try it / Reflect

- If only 80 of 200 invitees reply, what claim about "portal satisfaction" is still safe?

## Related examples

- `eg:2.11` — Stratified sample when subgroups matter.
- `eg:2.14` — Convenience sample — the non-probability contrast.

## Notes

- Prose-only in the manuscript.
