# Example 13.53 — Licensing Barriers to Data Access

**Chapter:** 13  
**Label:** `eg:13.53`  
**Source:** `author/chapter13.tex`  
**Section:** `sec:13.14.1` — Common Pitfalls in Data and Workflow Management

## Learning objective

Prefer open licenses and document access paths to avoid licensing barriers.

## Chapter context

Section 13.14.1 adds object-storage versioning as a backup layer for audit recovery. Even when datasets exist, access can be restricted due to licensing issues or the lack of clear open-access policies. This is particularly problematic when data are proprietary, co…

## What this example shows

Even when datasets exist, access can be restricted due to licensing issues or the lack of clear open-access policies. This is particularly problematic when data are proprietary, confidential, or subject to usage restrictions. Where possible, use open data licenses (for example, Creative Commons) that facilitate sharing and reuse; when data must remain restricted, publish clear access procedures.

## What you should learn

### From the concept
- Even when datasets exist, access can be restricted due to licensing issues or the lack of clear open-access policies.
- This is particularly problematic when data are proprietary, confidential, or subject to usage restrictions.

### From the output / result
- `run.sh` prints the structured takeaway below—use it in reproducibility and open-science reviews.

## Contents

| File | Role |
|------|------|
| `install.sh` | No-op or prerequisite check |
| `run.sh` | Prints the structured takeaway |

## Prerequisites

- OS: Linux, macOS, or Windows (Git Bash / WSL recommended for `.sh`)
- Bash

## Setup

```bash
cd modules/chapter13/example53
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Pitfall: licensing barriers; prefer open licenses, document access.
```

## How to interpret the result

The takeaway 'licensing barriers; prefer open licenses, document access.' is the release gate: open-science claims fail if this condition is not met before publication or sharing.

## Try it / Reflect

- Which part of 'Licensing Barriers to Data Access' is missing from your current project README?

## Related examples

- `eg:13.52` — Previous example in the same section.
- `eg:13.54` — Next example in the same section.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
