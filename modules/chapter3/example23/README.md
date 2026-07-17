# Example 3.23 — Equifax (2017): Unpatched Internet-Facing Systems

**Chapter:** 3  
**Label:** `eg:3.23`  
**Source:** `author/chapter3.tex`  
**Section:** `sec:3.7.2` — Case Studies of Major Breaches

## Learning objective

Analyze Equifax (2017) as a failure of patching and monitoring on internet-facing identity stores.

## Chapter context

Section 3.7.2 case studies anchor breach ethics in real incidents. Example 3.23 is the unpatched-system pattern; Example 3.26 quantifies costs.

## What this example shows

Attackers exploited an unpatched web-application vulnerability, exposing ~147M individuals' names, SSNs, birth dates, and addresses—failure mode: delayed patching and weak monitoring on high-value identity stores.

## Key terms

- **Unpatched vulnerability** — Known software flaw left exploitable on public-facing systems.
- **Identity store** — Systems aggregating durable national identifiers.
- **Security debt** — Deferred patching on high-value assets.

## What you should learn

### From the concept
- Identity aggregators are catastrophic single points of failure.
- Patch cadence is an ethics and governance duty.
- Internet-facing apps on sensitive stores need aggressive monitoring.

### From the output / result
- `run.sh` summarizes attack path, scale, and failure mode.

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
cd modules/chapter3/example23
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Equifax (2017):
- Unpatched web-application vulnerability
- ~147 million individuals; names, SSNs, birth dates, addresses
- Failure mode: delayed patching and weak monitoring on high-value identity stores
Downstream costs: Example 3.26.
```

## How to interpret the result

Example 3.26 shows this is a balance-sheet event—security backlog is not merely IT hygiene.

## Try it / Reflect

- What SLA would you set for critical CVE patches on systems holding SSNs?

## Related examples

- `eg:3.26` — Hundreds of millions in settlements and remediation.
- `eg:3.28` — Regulatory fine ceilings under GDPR.
- `eg:3.25` — Different failure mode: vendor path to POS.

## Notes

- Prose-only. Downstream costs in Example 3.26.
