# Example 13.26 — Restricted Licenses for Health Data

**Chapter:** 13  
**Label:** `eg:13.26`  
**Source:** `author/chapter13.tex`  
**Section:** `sec:13.6.1` — Licensing Open Data: Types and Considerations

## Learning objective

Apply restricted licenses gating sensitive health data to qualified use.

## Chapter context

Section 13.6.1 covers reproducible workflows: automation files, ordered pipelines, and notebooks. Sensitive health data may be shared with restrictions. Use may be limited to qualified researchers or specific contexts (for example, academic or non-profit use).

## What this example shows

Sensitive health data may be shared with restrictions. Use may be limited to qualified researchers or specific contexts (for example, academic or non-profit use).

## What you should learn

### From the concept
- Sensitive health data may be shared with restrictions.
- Use may be limited to qualified researchers or specific contexts (for example, academic or non-profit use).

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
cd modules/chapter13/example26
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Restricted license: gate sensitive health data by qualified use.
```

## How to interpret the result

The takeaway 'gate sensitive health data by qualified use.' is the release gate: open-science claims fail if this condition is not met before publication or sharing.

## Try it / Reflect

- Which part of 'Restricted Licenses for Health Data' is missing from your current project README?

## Notes

- Prose-only manuscript example; no code listing in the chapter.
