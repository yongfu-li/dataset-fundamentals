# Example 2.14 — Convenience Sample on a University Campus

**Chapter:** 2  
**Label:** `eg:2.14`  
**Source:** `author/chapter2.tex`  
**Section:** `sec:2.6.2` — Convenience Sampling

## Learning objective

Recognize convenience samples as fast but non-generalizable, and state who is missing from the frame.

## Chapter context

Section 2.6.2 covers non-probability convenience sampling. The library exam-week survey is cheap and biased by construction.

## What this example shows

A researcher surveys the first 100 students entering the library during exam week; evening commuters, remote students, and non-library users never enter the frame.

## Key terms

- **Convenience sampling** — Selecting whoever is easiest to reach; not probability-based.

## What you should learn

### From the concept
- Speed and low cost are the main benefits.
- Missing subgroups (commuters, remote students) block population claims.
- Label findings as exploratory unless a probability redesign follows.

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
cd modules/chapter2/example14
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Convenience sample = fast, not generalizable:
- First 100 students entering the library in exam week
- Missing: evening commuters, remote students, non-library users
- Treat findings as exploratory unless you redesign the frame
```

## How to interpret the result

Convenience samples answer "what do easy-to-reach people say?" — not "what do students overall say?"

## Try it / Reflect

- Name one redesign that would include remote students (e.g., email to full registrar list — Example 2.10 style).

## Related examples

- `eg:2.10` — SRS from a complete roster.
- `eg:2.20` — Coverage bias from a mobile-only poll.

## Notes

- Prose-only in the manuscript.
