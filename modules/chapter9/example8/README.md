# Example 9.8 — Crowdsourcing Fraud-Pattern Review

**Chapter:** 9  
**Label:** `eg:9.8`  
**Source:** `author/chapter9.tex`  
**Section:** `sec:9.2.2` — Use Cases of Crowdsourcing

## Learning objective

Apply crowd-scale review patterns to high-volume transaction fraud detection with real-time flagging.

## Chapter context

Section 9.2.2 covers crowdsourcing use cases: ML labeling, market research, fraud review, and open innovation competitions. A bank might use a dataset containing millions of transactions to determine the likelihood of fraudulent activity based on transaction amounts, locations, and frequency. By applyin…

## What this example shows

A bank might use a dataset containing millions of transactions to determine the likelihood of fraudulent activity based on transaction amounts, locations, and frequency. By applying this model in real-time, the bank can flag and prevent potential fraud before it impacts customers.

## What you should learn

### From the concept
- Millions of transactions scored on amount, location, frequency
- Human judgment supplements rules on ambiguous patterns
- Real-time flagging prevents impact before it reaches customers

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
cd modules/chapter9/example8
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Crowd-scale fraud review:
- Millions of transactions scored on amount, location, frequency
- Human judgment supplements rules on ambiguous patterns
- Real-time flagging prevents impact before it reaches customers
```

## How to interpret the result

The closing bullet—'Real-time flagging prevents impact before it reaches customers'—is the decision gate: if your pipeline cannot deliver that outcome, the advanced method adds complexity without value.

## Try it / Reflect

- Which transaction features would you send to human review vs. auto-decline?

## Related examples

- `eg:9.10` — Crowd labor for labeling; rules for fraud review.
- `Chapter 4` — Annotation quality for ML labels.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
