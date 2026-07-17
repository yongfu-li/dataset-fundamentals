# Example 3.22 — Data Breach

**Chapter:** 3  
**Label:** `eg:3.22`  
**Source:** `author/chapter3.tex`  
**Section:** `sec:3.7.1` — Understanding Data Breaches

## Learning objective

Classify breach severity by data sensitivity, volume, dwell time, and response speed—not only headline count.

## Chapter context

Section 3.7.1 frames breaches before Equifax, Yahoo, and Target case studies. Example 3.5 already treated accountability after leaks; Example 3.22 scales impact.

## What this example shows

Breaches range from small email leaks to massive thefts of government IDs, payment credentials, or health records—impact scales with sensitivity, volume, dwell time, and notification/remediation speed.

## Key terms

- **Dwell time** — How long attackers had access before detection.
- **Data sensitivity** — Harm potential of exposed field types.
- **Notification latency** — Delay between discovery and informing victims/regulators.

## What you should learn

### From the concept
- Not all breaches are equivalent in victim harm.
- Detection and response speed multiply impact.
- Identity and health fields dominate severity rankings.

### From the output / result
- `run.sh` contrasts small vs large breaches and lists scaling factors.

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
cd modules/chapter3/example22
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Data breach — severity range:
- Small: names and email addresses
- Large: government IDs, payment credentials, health records
- Impact scales with sensitivity, volume, dwell time before detection, and speed of notification/remediation
```

## How to interpret the result

Use Example 3.22 as a severity rubric before reading 3.23–3.27 case specifics.

## Try it / Reflect

- Rank email-only, SSN+DOB, and full health record leaks for long-term victim harm.

## Related examples

- `eg:3.23` — Equifax large-scale identity breach.
- `eg:3.5` — Accountability duties after platform leaks.
- `eg:3.28` — GDPR fine exposure for inadequate security.

## Notes

- Prose-only.
