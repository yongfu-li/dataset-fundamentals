# Example 9.4 — Cost of Longitudinal Public-Health Interviews

**Chapter:** 9  
**Label:** `eg:9.4`  
**Source:** `author/chapter9.tex`  
**Section:** `sec:9.1.1` — Why Traditional Pipelines Hit Limits

## Learning objective

Compare interview-heavy longitudinal studies with continuous device-based collection on cost at scale.

## Chapter context

Section 9.1.1 names three limits of traditional pipelines—scalability, reliability, and cost—that motivate crowdsourcing, IoT, and streaming in the rest of the chapter. Running a longitudinal study on public health through interviews or medical tests across different regions can be prohibitively expensive, especially when factoring in transportati…

## What this example shows

Running a longitudinal study on public health through interviews or medical tests across different regions can be prohibitively expensive, especially when factoring in transportation, personnel, and data entry costs.

## What you should learn

### From the concept
- Every wave adds transportation, personnel, and data-entry expense
- Multi-region coverage multiplies the burden
- Continuous device-based collection lowers marginal cost at scale

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
cd modules/chapter9/example4
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Cost limit — longitudinal interviews:
- Every wave adds transportation, personnel, and data-entry expense
- Multi-region coverage multiplies the burden
- Continuous device-based collection lowers marginal cost at scale
```

## How to interpret the result

The closing bullet—'Continuous device-based collection lowers marginal cost at scale'—is the decision gate: if your pipeline cannot deliver that outcome, the advanced method adds complexity without value.

## Try it / Reflect

- Compare per-participant cost of a quarterly interview vs. a daily wearable stream.

## Related examples

- `eg:9.5` — Wearables lower marginal cost for continuous health data.
- `eg:9.2` — Cost/scalability framing.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
