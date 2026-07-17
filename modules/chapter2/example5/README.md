# Example 2.5 — Campus Wi-Fi Satisfaction Survey Plan

**Chapter:** 2  
**Label:** `eg:2.5`  
**Source:** `author/chapter2.tex`  
**Section:** `sec:2.3.1` — Surveys and Questionnaires

## Learning objective

Design a short stratified survey that maps each question to a decision (which buildings need Wi-Fi fixes).

## Chapter context

Section 2.3.1 introduces surveys as a primary method. The campus Wi-Fi plan shows how stratification by building and branching items turn a questionnaire into actionable facilities data.

## What this example shows

An IT office plans a five-minute online questionnaire for students and staff, stratified by building, with items on connection failures, peak-hour experience, and open comments.

## Key terms

- **Survey** — A structured questionnaire administered to a sample to measure attitudes or experiences.
- **Stratification** — Sampling within known subgroups (here, buildings) so each is represented.

## What you should learn

### From the concept
- Keep the instrument short when response burden is high (five minutes).
- Stratify by the decision unit (building), not by convenience.
- Items should map to actions (which buildings to fix), not curiosity alone.

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
cd modules/chapter2/example5
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Survey plan for campus Wi-Fi:
- 5-minute online questionnaire for students and staff
- Stratify by building; ask about failures and peak-hour experience
- Each item should map to a facilities decision, not curiosity alone
```

## How to interpret the result

A survey succeeds when each item feeds a decision — here, prioritizing building upgrades — not when the response count alone looks large.

## Try it / Reflect

- Add one branching follow-up: only people who report failures name the floor — which tool Example 2.16 would you pick?

## Related examples

- `eg:2.16` — Choosing a form builder with branching for this survey.
- `eg:2.11` — Stratified sampling of cart abandoners — same design idea.

## Notes

- Prose-only in the manuscript.
