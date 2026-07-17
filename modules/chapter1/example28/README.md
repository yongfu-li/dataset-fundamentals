# Example 1.28 — Banking Transactions Dataset

**Chapter:** 1  
**Label:** `eg:1.28`  
**Source:** `author/chapter1.tex`  
**Section:** `sec:1.5.1` — Applications of Datasets

## Learning objective

Describe how labeled historical transactions become features for a near-real-time fraud-scoring pipeline.

## Chapter context

Section 1.5.1 closes the applications survey with finance: banks score risk on streaming payments using features built from transaction attributes and labels drawn from confirmed past fraud cases.

## What this example shows

A conceptual fraud-scoring feature set and workflow (no listing in the book): transaction attributes plus historical fraud labels feeding an online scoring step.

## Key terms

- **Feature (fraud scoring)** — a transaction attribute — amount, merchant category, location, recency — used as model input for a risk score.

## What you should learn

### From the concept
- Inputs: transaction attributes plus historical fraud labels.
- Process: train offline, score online, block high-risk payments in near real time.
- Quality stakes: accuracy/timeliness failures are costly in both directions (false blocks vs missed fraud).

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
cd modules/chapter1/example28
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Inputs: transaction attributes (amount, merchant category, location, time since last purchase).
Labels: historical fraud outcomes on past transactions.
Process: train a classifier offline; score new transactions online, in near real time.
Stakes: accuracy/timeliness failures are costly either way (false blocks vs missed fraud).
```

## How to interpret the result

Connect this sketch directly to the churn case study (Example 1.31): both follow the same pattern of labeled tabular features feeding a classifier that drives an action.

## Try it / Reflect

- List which of Example 1.31's four churn features (Complaints, Product_Usage, Account_Activity_Change, Subscription_Length) has a fraud-scoring analogue in this sketch.

## Related examples

- `eg:1.31` — the fully worked classifier version of this labeled-features-to-action pattern.
- `eg:1.21`, `eg:1.22` — the other Section 1.5.1 application sketches.

## Notes

- Prose-only in the manuscript.
