# Example 3.24 — Yahoo (2013--2014): Delayed Disclosure

**Chapter:** 3  
**Label:** `eg:3.24`  
**Source:** `author/chapter3.tex`  
**Section:** `sec:3.7.2` — Case Studies of Major Breaches

## Learning objective

Evaluate Yahoo's delayed breach disclosure as a governance and market-trust failure mode.

## Chapter context

Example 3.24 complements Equifax with late accountability: hundreds of millions to billions of accounts affected while disclosure timing drew criticism during acquisition talks.

## What this example shows

Yahoo disclosed breaches affecting hundreds of millions (2013 later revised toward three billion accounts), including identifiers and hashed credentials—failure mode: delayed public disclosure and late accountability.

## Key terms

- **Delayed disclosure** — Long gap between internal discovery and public/user notification.
- **Credential spill** — User identifiers plus hashed passwords from account databases.
- **Market accountability** — How breach handling affects M&A and board oversight.

## What you should learn

### From the concept
- Detection without timely disclosure transfers risk to users.
- Hashed credentials still enable downstream attacks.
- Acquisition context raises conflicts of interest in timing.

### From the output / result
- `run.sh` states scale, credential types, and delayed-disclosure failure.

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
cd modules/chapter3/example24
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Yahoo (2013–2014):
- Hundreds of millions of accounts (2013 incident later revised toward three billion)
- Identifiers and hashed credentials
- Failure mode: delayed public disclosure / late accountability to users and markets
Valuation effects: Example 3.27.
```

## How to interpret the result

Example 3.27 links the same failure mode to reduced Verizon acquisition price—breach response is valuation-relevant.

## Try it / Reflect

- Draft a 72-hour internal escalation path from SOC alert to user notification owner.

## Related examples

- `eg:3.27` — Acquisition price and board accountability effects.
- `eg:3.5` — Ethical accountability beyond PR.
- `eg:3.22` — Severity framing for large account databases.

## Notes

- Prose-only. Valuation effects in Example 3.27.
