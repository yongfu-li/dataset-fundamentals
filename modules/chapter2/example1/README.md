# Example 2.1 — Collection Plan for a Retail Satisfaction Study

**Chapter:** 2  
**Label:** `eg:2.1`  
**Source:** `author/chapter2.tex`  
**Section:** `sec:2.1.1` — What is Data Collection?

## Learning objective

Convert a vague business question into a five-part collection plan: objective, sources, methods, sample, and storage/schema.

## Chapter context

Chapter 2 opens by defining data collection as the process that fills datasets. Before tools or code, the author wants a planning checklist so purpose and sources are fixed first — Example 2.1 is that checklist applied to cart abandonment.

## What this example shows

A retailer studying why shoppers abandon carts specifies: (1) objective — find checkout friction; (2) sources — primary post-purchase survey plus secondary web analytics; (3) methods — survey and log analysis; (4) sample — stratified by device; (5) storage — anonymized CSV.

## Key terms

- **Collection plan** — The five decisions — objective, sources, methods, sample, storage — that precede any tool choice.
- **Primary data** — Data gathered first-hand for this study (e.g., a new survey).
- **Secondary data** — Existing data reused for a new purpose (e.g., web analytics).

## What you should learn

### From the concept
- Purpose and source clarity precede tool selection.
- Primary (survey) and secondary (analytics) can combine in one plan.
- Sample design and storage/schema are part of the plan, not afterthoughts.

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
cd modules/chapter2/example1
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Five-part collection plan (before tools):
- Objective: identify checkout friction behind cart abandonment
- Sources: primary survey + secondary web analytics
- Methods / sample / storage: survey+logs, stratified by device, anonymized CSV
```

## How to interpret the result

If you can fill all five boxes before opening a form builder or scraper, you have the discipline Section 2.1 demands — later examples only specialize sources, methods, or sampling.

## Try it / Reflect

- Rewrite the plan for a brick-and-mortar store (no web analytics): which secondary source replaces click logs?

## Related examples

- `eg:2.11` — Stratified sampling of cart abandoners implements the sample box.
- `eg:2.5` — Another five-part plan for a campus Wi-Fi survey.

## Notes

- Prose-only in the manuscript.
- Pairs with stratified sampling in Example 2.11.
