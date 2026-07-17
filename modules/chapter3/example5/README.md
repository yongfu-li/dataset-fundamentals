# Example 3.5 — Accountability on a Social Media Platform

**Chapter:** 3  
**Label:** `eg:3.5`  
**Source:** `author/chapter3.tex`  
**Section:** `sec:3.2.1` — Core Ethical Principles in Data Work

## Learning objective

List accountable responses after a social-platform advertising-profile leak—not only PR containment.

## Chapter context

Accountability assigns responsibility for monitoring, incident response, and remediation. Example 3.5 follows a breach vignette; Sections 3.7–3.8 expand breach mechanics and consequences.

## What this example shows

After advertising profiles leak, accountable practice includes user notification, root-cause investigation, control hardening, access/deletion tools, and oversight—not treating the event as a PR inconvenience alone.

## Key terms

- **Accountability** — Clear responsibility for data handling, monitoring, remediation, and challenge avenues.
- **Incident response** — Structured steps after a breach: notify, investigate, harden, document.
- **Oversight** — External or internal review that goes beyond press statements.

## What you should learn

### From the concept
- Accountability is an ongoing duty, not a one-time apology.
- User empowerment (access, deletion) is part of responsible recovery.
- Platform ad profiles are high-sensitivity identity and behavior data.

### From the output / result
- `run.sh` prints the post-breach accountability checklist.

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
cd modules/chapter3/example5
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Accountability after a platform leak:
- Notify affected users
- Investigate root causes; harden controls
- Offer access and deletion tools
- Subject handling to oversight
Not a public-relations inconvenience alone.
```

## How to interpret the result

Example 3.22 generalizes breach severity; Examples 3.23–3.27 show how failed accountability becomes financial and governance damage.

## Try it / Reflect

- For a leak of email plus inferred interests, who owns notification, forensic investigation, and user deletion requests in your org chart?

## Related examples

- `eg:3.22` — Severity range for breaches of different data types.
- `eg:3.23` — Equifax case: unpatched systems on identity stores.
- `eg:3.10` — Personal harm when contact or identity data is misused.

## Notes

- Prose-only. Sections 3.7–3.8 develop breach response.
