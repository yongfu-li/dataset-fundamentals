# Example 10.17 — Ransomware Attack Simulation

**Chapter:** 10  
**Label:** `eg:10.17`  
**Source:** `author/chapter10.tex`  
**Section:** `sec:10.6.6` — Synthetic Data in Cybersecurity: Anomaly Detection, Cyberattack Simulations

## Learning objective

Simulate ransomware encryption patterns to measure detection latency safely.

## Chapter context

Section 10.6.6 covers low-quality tabular synthesis and bias amplification in hiring. A security operations center replays synthetic ransomware encryption patterns against backup workflows to test detection latency before a live incident.

## What this example shows

A security operations center replays synthetic ransomware encryption patterns against backup workflows to test detection latency before a live incident.

## What you should learn

### From the concept
- Replay synthetic encryption patterns against backups
- Measure detection latency safely before a live incident
- Operational drill metric, not only model accuracy

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
cd modules/chapter10/example17
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Ransomware simulation:
- Replay synthetic encryption patterns against backups
- Measure detection latency safely before a live incident
- Operational drill metric, not only model accuracy
```

## How to interpret the result

The closing bullet—'Operational drill metric, not only model accuracy'—is the release gate: synthetic data is useful only if it passes this check before training or sharing.

## Try it / Reflect

- Where does 'Ransomware Attack Simulation' apply in your domain—and what would you validate on real data?

## Notes

- Prose-only manuscript example; no code listing in the chapter.
