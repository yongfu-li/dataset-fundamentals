# Example 3.40 — EU--U.S. Privacy Shield Invalidation

**Chapter:** 3  
**Label:** `eg:3.40`  
**Source:** `author/chapter3.tex`  
**Section:** `sec:3.10.3` — Global Privacy Regulation Challenges

## Learning objective

Summarize Schrems II (2020) invalidation of EU–U.S. Privacy Shield and tightened standard contractual clause expectations.

## Chapter context

Example 3.40 gives the landmark cross-border transfer case in Section 3.10.3—jurisdiction maps must anticipate adequacy failure.

## What this example shows

In 2020 the CJEU invalidated the EU–U.S. Privacy Shield adequacy decision (Schrems II), finding U.S. surveillance law incompatible with essentially equivalent protection, and tightened expectations for transfers under standard contractual clauses.

## Key terms

- **Schrems II** — CJEU ruling invalidating Privacy Shield adequacy.
- **Adequacy decision** — EU recognition that a third country offers equivalent protection.
- **Standard contractual clauses (SCCs)** — Contractual transfer tools requiring supplemental measures after Schrems II.

## What you should learn

### From the concept
- Transfer tools can be struck down without warning.
- Surveillance law abroad is part of EU adequacy analysis.
- Legal engineering must plan for re-papering and data routing.

### From the output / result
- `run.sh` states invalidation and SCC tightening.

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
cd modules/chapter3/example40
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
EU–U.S. Privacy Shield invalidation (Schrems II, 2020):
- CJEU invalidated Privacy Shield adequacy decision
- US surveillance law found incompatible with essentially equivalent protection
- Tightened expectations for transfers under standard contractual clauses
Jurisdiction maps must anticipate this failure mode.
```

## How to interpret the result

Pair with Examples 3.38–3.39 when designing any U.S.-hosted processing of EU personal data.

## Try it / Reflect

- What supplementary measure would you propose for EU→U.S. analytics on pseudonymized logs post-Schrems II?

## Related examples

- `eg:3.38` — Conflicting regimes in one product.
- `eg:3.39` — Localization as a response to transfer risk.
- `eg:3.28` — GDPR enforcement context.

## Notes

- Prose-only.
