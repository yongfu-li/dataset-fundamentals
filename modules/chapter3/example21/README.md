# Example 3.21 — Automated Hiring Rankers

**Chapter:** 3  
**Label:** `eg:3.21`  
**Source:** `author/chapter3.tex`  
**Section:** `sec:3.5.3` — Case Studies on Bias

## Learning objective

Connect historical gender imbalance in hires to systematic disadvantage in automated résumé ranking.

## Chapter context

Example 3.21 is the Section 3.5.3 hiring case study companion to Examples 3.3 and 3.19; Chapter 7 returns for impact analysis rather than retelling the narrative.

## What this example shows

Historical hiring distributions encode gender imbalance into automated résumé ranking—a tool efficient on average can systematically disadvantage women.

## Key terms

- **Historical imbalance** — Past hiring skew embedded in positive training labels.
- **Average efficiency** — Aggregate metrics hiding subgroup exclusion.
- **Impact analysis** — Chapter 7 methods for who loses under automation.

## What you should learn

### From the concept
- Efficiency for HR ops ≠ fairness for applicants.
- Case studies bridge principles to measurable impact.
- Mitigation needs metrics, not only policy statements.

### From the output / result
- `run.sh` links historical imbalance to systematic ranking disadvantage.

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
cd modules/chapter3/example21
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Automated hiring rankers:
- Historical hiring can encode gender imbalance into resume ranking
- Tool looks efficient on average yet can systematically disadvantage women
- Chapter 7 returns for metrics, impact analysis, and mitigation
```

## How to interpret the result

Read with Examples 3.3, 3.19, and 3.32 as one hiring-ML ethics thread.

## Try it / Reflect

- If 80% of past ‘good hire’ labels are one gender, what ranking behavior would you expect without intervention?

## Related examples

- `eg:3.3` — Fairness principle on past hire patterns.
- `eg:3.19` — Proxy-driven algorithmic bias.
- `eg:3.32` — Pre-deployment bias testing under the justice lens.

## Notes

- Prose-only. Metrics in Chapter 7.
