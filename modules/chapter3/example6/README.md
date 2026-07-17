# Example 3.6 — Health-Tracking App

**Chapter:** 3  
**Label:** `eg:3.6`  
**Source:** `author/chapter3.tex`  
**Section:** `sec:3.2.1` — Core Ethical Principles in Data Work

## Learning objective

Design consent and control flows for a health-tracking app that respects autonomy before collection starts.

## Chapter context

Respect for autonomy closes the five-principle table in Section 3.2.1. Section 3.3 turns consent into privacy-management practice; Example 3.6 is the UX-facing version for wearable-style streams.

## What this example shows

Before collecting activity, sleep, and heart-rate streams, the app obtains explicit consent, plain-language purpose, and lets users revoke, delete, or narrow permissions—autonomy fails when consent is buried or withdrawal is impractical.

## Key terms

- **Informed consent** — Purpose-specific agreement before collection, in language users can understand.
- **Revocation** — The ability to withdraw consent without hidden friction.
- **Autonomy** — Supporting user control over what is collected and how long it is kept.

## What you should learn

### From the concept
- Consent is a process, not a one-time checkbox in unrelated terms.
- Health streams are sensitive; defaults should favor narrow collection.
- Withdrawal and deletion must be as reachable as sign-up.

### From the output / result
- `run.sh` lists the autonomy requirements for health-stream collection.

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
cd modules/chapter3/example6
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Health-tracking app — autonomy:
- Explicit consent before activity, sleep, heart-rate streams
- Plain-language purpose statement
- Users can revoke consent, delete history, or narrow permissions
Autonomy fails when consent is buried or withdrawal is impossible.
```

## How to interpret the result

Example 3.12 applies Privacy by Design to the same product class; Example 3.11 shows the higher bar when clinical and research uses diverge.

## Try it / Reflect

- Sketch the shortest path from ‘delete my heart-rate history’ to confirmed deletion—how many taps, and what dark patterns would you remove?

## Related examples

- `eg:3.11` — Separate care vs research consent in clinical settings.
- `eg:3.12` — Privacy by Design minimization for a similar health app.
- `eg:3.1` — Stakeholder collision including user control vs partner sharing.

## Notes

- Prose-only. Operational counterpart to Section 3.3.
