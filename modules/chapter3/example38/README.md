# Example 3.38 — Conflicting Privacy Regimes

**Chapter:** 3  
**Label:** `eg:3.38`  
**Source:** `author/chapter3.tex`  
**Section:** `sec:3.10.3` — Global Privacy Regulation Challenges

## Learning objective

Design parallel GDPR and CCPA/CPRA workflows when one product serves EU and California residents.

## Chapter context

Section 3.10.3 addresses conflicting global privacy regimes. Example 3.38 operationalizes dual compliance referenced in Sections 3.6.1 and 3.6.3.

## What this example shows

A multinational needs GDPR posture for EU residents and CCPA/CPRA rights for California residents—producing parallel notice, retention, and request-handling workflows in one product.

## Key terms

- **GDPR** — EU regulation with strong consent, breach, and DSR duties.
- **CCPA/CPRA** — California consumer privacy rights including access and deletion.
- **Parallel workflows** — Region-specific processes inside a single global app.

## What you should learn

### From the concept
- Lowest common denominator rarely satisfies all regimes.
- Notice and retention policies may need geo-fencing.
- Data-subject request handling is an engineering surface.

### From the output / result
- `run.sh` contrasts EU vs California workflow requirements.

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
cd modules/chapter3/example38
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Conflicting privacy regimes:
- GDPR posture for EU residents (Section 3.6.1)
- CCPA/CPRA rights for California residents (Section 3.6.3)
- Parallel notice, retention, and request-handling workflows in one product
```

## How to interpret the result

Example 3.40 shows adequacy decisions can collapse—design for regime-specific paths, not one ‘global privacy toggle.’

## Try it / Reflect

- List three user rights that exist in both GDPR and CPRA but with different deadlines or exceptions.

## Related examples

- `eg:3.40` — Schrems II and transfer-tool invalidation.
- `eg:3.39` — Localization pressure from transfer rules.
- `eg:3.28` — GDPR fine ceiling.

## Notes

- Prose-only.
