# Example 3.16 — Federated Learning for On-Device Keyboard Prediction

**Chapter:** 3  
**Label:** `eg:3.16`  
**Source:** `author/chapter3.tex`  
**Section:** `sec:3.4.2` — Differential Privacy and Federated Learning

## Learning objective

Contrast federated keyboard training with centralized raw-text upload and list remaining aggregation risks.

## Chapter context

Example 3.16 complements Example 3.15 with on-device learning: updates leave the phone, not the full typing history—yet secure aggregation is still mandatory.

## What this example shows

A mobile keyboard can train locally and send only update summaries for aggregation instead of raw typed text—teams still need secure aggregation and monitoring so updates do not reconstruct sensitive phrases.

## Key terms

- **Federated learning** — Training models across devices without centralizing raw records.
- **Model updates** — Gradient or weight deltas sent for server-side aggregation.
- **Secure aggregation** — Cryptographic or procedural limits on inferring individual updates.

## What you should learn

### From the concept
- Federation reduces raw-data exposure, not all inference risk.
- Phrase reconstruction from updates is a real threat model.
- On-device ML still needs governance and monitoring.

### From the output / result
- `run.sh` contrasts local training with secure aggregation requirements.

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
cd modules/chapter3/example16
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Federated learning for on-device keyboard prediction:
- Train locally; send only update summaries for aggregation
- Do not upload raw typed text
- Still need secure aggregation and monitoring so updates do not reconstruct sensitive phrases
```

## How to interpret the result

‘Federated’ on a slide is not done until aggregation and reconstruction tests are in the test plan.

## Try it / Reflect

- What would you log centrally if raw text never leaves the device—enough to detect reconstruction attacks?

## Related examples

- `eg:3.15` — DP for aggregate statistics when federation is not feasible.
- `eg:3.7` — Utility–privacy tension motivating PETs.
- `eg:3.41` — Future directions combining PETs and user control.

## Notes

- Prose-only.
