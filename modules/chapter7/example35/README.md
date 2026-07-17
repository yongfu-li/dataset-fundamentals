# Example 7.35 — Financial Penalties from Biased Hiring and Credit Systems

**Chapter:** 7  
**Label:** `eg:7.45`  
**Source:** `author/chapter7.tex`  
**Section:** `sec:7.4.4` — Business Implications: Reputational Damage, Financial Penalties

## Learning objective

Weigh financial and reputational cost of biased AI against prevention investment.

## Chapter context

Section 7.4.4 quantifies business penalties from biased hiring and credit systems. A company that uses biased algorithms in hiring or credit scoring could face legal fines, lawsuits, and other financial penalties, particularly if they violate anti-discrimination …

## What this example shows

A company that uses biased algorithms in hiring or credit scoring could face legal fines, lawsuits, and other financial penalties, particularly if they violate anti-discrimination laws or privacy regulations. The costs of such legal challenges, combined with the loss of customer trust, can be substantial.

## What you should learn

### From the concept
- Fines and lawsuits from anti-discrimination and privacy violations
- Reputational damage, boycotts, customer churn on top
- Prevention (fairness engineering) is cheaper than remediation

### From the output / result
- `run.sh` prints the structured takeaway below—use it when classifying or mitigating bias.

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
cd modules/chapter7/example35
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Running Example 7.35 — Financial Penalties from Biased Hiring and Credit Systems
Business impact of biased AI:
- Fines and lawsuits from anti-discrimination and privacy violations
- Reputational damage, boycotts, customer churn on top
- Prevention (fairness engineering) is cheaper than remediation
```

## How to interpret the result

The closing bullet—'Prevention (fairness engineering) is cheaper than remediation'—is the audit gate: deploy only after this condition is checked for the affected groups.

## Try it / Reflect

- Where does 'Financial Penalties from Biased Hiring and Credit Systems' appear in a dataset you have worked with?

## Notes

- Prose-only manuscript example; no code listing in the chapter.
- Module folder `example35` is **Example 7.35** in the PDF; manuscript label is `eg:7.45`.
