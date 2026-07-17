# Example 2.16 — Choosing a Form Builder for the Wi-Fi Survey

**Chapter:** 2  
**Label:** `eg:2.16`  
**Source:** `author/chapter2.tex`  
**Section:** `sec:2.7.1` — Survey Tools

## Learning objective

Select survey tooling by required features (branching, export) that match the collection plan, not by brand familiarity.

## Chapter context

Section 2.7.1 turns method into tooling. The Wi-Fi survey from Example 2.5 needs branching and warehouse-ready CSV export — those requirements drive the platform choice.

## What this example shows

The IT office needs branching so only respondents who report failures see location follow-ups, plus CSV export into the same warehouse as ticket logs; a full-featured survey platform beats a bare email form.

## Key terms

- **Branching** — Showing follow-up items only when prior answers qualify.

## What you should learn

### From the concept
- Map tool features to plan requirements (branching, export, auth).
- Export path into the analysis warehouse is a hard requirement.
- Simpler tools fail when follow-ups must be conditional.

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
cd modules/chapter2/example16
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Pick survey tools by required features:
- Need: branching (failures → location) + CSV into the ticket warehouse
- Full-featured platform beats a bare email form
- Features implement the plan (Example 2.5), not the other way around
```

## How to interpret the result

Tool choice is downstream of the plan in Example 2.5 — features exist to implement decisions already made.

## Try it / Reflect

- If ticket logs live in SQL, what export format and key would you use to join survey rows?

## Related examples

- `eg:2.5` — The Wi-Fi survey plan this tool implements.

## Notes

- Prose-only in the manuscript.
