# Example 3.26 — Equifax Breach Costs

**Chapter:** 3  
**Label:** `eg:3.26`  
**Source:** `author/chapter3.tex`  
**Section:** `sec:3.8.1` — Consequences of Data Breaches

## Learning objective

Connect Equifax's technical failure mode to hundreds of millions in settlements and remediation costs.

## Chapter context

Section 3.8.1 attaches dollar and governance consequences to Section 3.7.2 cases. Example 3.26 follows Example 3.23's unpatched-system narrative.

## What this example shows

Following Example 3.23, analyses document hundreds of millions of dollars in settlements, remediation, and related costs—delayed patching on identity stores becomes a balance-sheet event.

## Key terms

- **Remediation cost** — Post-breach security rebuild, monitoring, and credit services.
- **Settlement** — Legal resolution funds paid to regulators or class members.
- **Balance-sheet risk** — Security neglect appearing as corporate financial liability.

## What you should learn

### From the concept
- Technical debt on identity systems has quantifiable tail risk.
- Costs extend years beyond initial disclosure.
- Prevention ROI is easier to defend after Example 3.26.

### From the output / result
- `run.sh` links Example 3.23 failure to nine-figure costs.

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
cd modules/chapter3/example26
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Equifax breach costs:
- Following Example 3.23’s unpatched-system failure
- Hundreds of millions of dollars in settlements, remediation, and related costs
- Delayed patching of high-value identity stores becomes a balance-sheet event
```

## How to interpret the result

Use alongside Example 3.28 when executives ask whether compliance investment ‘pays off.’

## Try it / Reflect

- Estimate order-of-magnitude cost categories after a 100M-record identity breach—not exact dollars, but buckets.

## Related examples

- `eg:3.23` — Equifax technical failure mode.
- `eg:3.28` — GDPR fine ceiling as regulatory counterpart.
- `eg:3.27` — Yahoo governance/valuation consequences.

## Notes

- Prose-only.
