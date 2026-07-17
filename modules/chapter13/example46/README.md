# Example 13.46 — DVC Sync for Satellite Imagery Teams

**Chapter:** 13  
**Label:** `eg:13.46`  
**Source:** `author/chapter13.tex`  
**Section:** `sec:13.8.2` — Automating Workflow Documentation

## Learning objective

Sync collaborative satellite imagery through DVC versioned remotes.

## Chapter context

Chapter 13 synthesizes reproducibility, FAIR sharing, open workflows, and audit practices. In a collaborative project analyzing satellite imagery, DVC keeps imagery data in sync across the team. This holds even as new images are collected or processed. It reduces relianc…

## What this example shows

In a collaborative project analyzing satellite imagery, DVC keeps imagery data in sync across the team. This holds even as new images are collected or processed. It reduces reliance on ad-hoc file sharing.

## What you should learn

### From the concept
- In a collaborative project analyzing satellite imagery, DVC keeps imagery data in sync across the team.
- This holds even as new images are collected or processed.

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
cd modules/chapter13/example46
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
DVC: keep collaborative imagery in sync via versioned remotes.
```

## How to interpret the result

The takeaway 'keep collaborative imagery in sync via versioned remotes.' is the release gate: open-science claims fail if this condition is not met before publication or sharing.

## Try it / Reflect

- Which part of 'DVC Sync for Satellite Imagery Teams' is missing from your current project README?

## Related examples

- `eg:13.45` — Previous example in the same section.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
