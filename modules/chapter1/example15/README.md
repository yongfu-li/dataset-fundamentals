# Example 1.15 — E-Commerce Dataset

**Chapter:** 1  
**Label:** `eg:1.15`  
**Source:** `author/chapter1.tex`  
**Section:** `sec:1.4.1` — Why Explore a Dataset?

## Learning objective

State why exploration comes before modeling: a quick look at transaction history can surface a pattern (seasonality) that should drive which features you build.

## Chapter context

Section 1.4.1 asks "why explore a dataset?" before Section 1.4.3 answers "how." This retail sketch supplies the "why": a seasonal spike is a pattern discovered by looking, not one a model would report after the fact.

## What this example shows

A conceptual e-commerce case: exploring sales history may reveal seasonal trends that should be reflected in which predictive features get built.

## Key terms

- **Exploratory data analysis (EDA)** — the practice of inspecting a dataset before modeling to surface patterns, quality issues, and feature ideas.

## What you should learn

### From the concept
- Looking at data before modeling can surface a pattern a model would otherwise only discover by overfitting to it.
- A seasonal spike (e.g., around holidays) is exactly this kind of pattern — it should shape which features get engineered.

### From related runnable modules
- Examples 1.16 and 1.20 supply the concrete "how": `head`, `describe`, missingness, and a histogram.

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
cd modules/chapter1/example15
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Looking at data before modeling can surface patterns a model would otherwise miss.
Example: an e-commerce sales log may show a seasonal spike around holidays.
That pattern should shape which features get engineered (e.g., days-to-holiday).
See Examples 1.16 and 1.20 for the concrete EDA steps (head, describe, missingness, histogram).
```

## How to interpret the result

Use this as the "why explore" motivation, then practice the "how" immediately in Example 1.20's pandas walkthrough.

## Try it / Reflect

- Name one feature you would engineer for a retailer if you discovered a spike every December — then compare it to how Example 1.31 engineers its churn features.

## Related examples

- `eg:1.16`, `eg:1.20` — the concrete EDA techniques this motivates.
- `eg:1.21` — a retail application example built on the same purchase-history idea.

## Notes

- Prose-only in the manuscript.
