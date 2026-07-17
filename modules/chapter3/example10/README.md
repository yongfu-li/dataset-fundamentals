# Example 3.10 — Misuse of Personal Data

**Chapter:** 3  
**Label:** `eg:3.10`  
**Source:** `author/chapter3.tex`  
**Section:** `sec:3.2.4` — Consequences of Neglecting Ethics

## Learning objective

Trace downstream harm and trust loss when personal contact or identity data is misused or leaked.

## Chapter context

Section 3.2.4 lists consequences of neglecting ethics. Example 3.10 complements clinical harm (Example 3.2) with personal exposure after unauthorized use or leakage.

## What this example shows

When contact or identity attributes leak or are sold without authorization, people face fraud, harassment, or lasting exposure—trust loss spreads beyond immediate victims to the wider user base.

## Key terms

- **Secondary harm** — Fraud, harassment, or reputational damage following a primary leak.
- **Trust erosion** — Platform- or industry-wide confidence loss after misuse incidents.
- **Unauthorized secondary use** — Selling or repurposing data beyond original consent.

## What you should learn

### From the concept
- Identity and contact fields are high-impact even when ‘small’ breaches seem routine.
- Victims bear long-tail risk, not only the notifying organization.
- Ethical neglect has user-facing consequences, not only compliance fines.

### From the output / result
- `run.sh` lists victim harms and community-wide trust effects.

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
cd modules/chapter3/example10
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Misuse of personal data:
- Leak or unauthorized sale of contact/identity attributes
- Victims: fraud, harassment, lasting exposure
- Trust loss spreads beyond immediate victims to the wider user base
```

## How to interpret the result

Example 3.22 scales breach severity; Examples 3.23–3.27 show institutional costs when neglect becomes headline incidents.

## Try it / Reflect

- List three harms a leaked email+phone pair enables that a leaked click count does not.

## Related examples

- `eg:3.22` — Breaches range from emails to government IDs.
- `eg:3.5` — Accountable response duties after platform leaks.
- `eg:3.28` — Regulatory fines for inadequate protection.

## Notes

- Prose-only.
