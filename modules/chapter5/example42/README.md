# Example 5.42 — Near Duplicate Customer Names

**Chapter:** 5  
**Label:** `eg:5.42`  
**Source:** `author/chapter5.tex`  
**Section:** `sec:5.3.2` — Removing Duplicates: Using Tools Like Pandas

## Learning objective

Match fuzzy name variants so lifetime-value metrics count each person once.

## Chapter context

Section 5.3.2 focuses on deduplication tooling and fuzzy matching when near duplicates hide in name fields. The same customer may appear as ``John Smith'' and ``John A. Smith.'' Fuzzy matching and deduplication ensure each person is counted once in retention and lifetime-value metrics.

## What this example shows

The same customer may appear as ``John Smith'' and ``John A. Smith.'' Fuzzy matching and deduplication ensure each person is counted once in retention and lifetime-value metrics.

## What you should learn

### From the concept
- The same customer may appear as ``John Smith'' and ``John A.
- Smith.'' Fuzzy matching and deduplication ensure each person is counted once in retention and lifetime-value metrics.

### From the output / result
- `run.sh` prints the structured takeaway as a cleaning/preprocessing checklist.

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
cd modules/chapter5/example42
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
The same customer may appear as "John Smith" and "John A. Smith." Fuzzy matching and deduplication ensure each person is counted once in retention and lifetime-value metrics.
```

## How to interpret the result

Smith." Fuzzy matching and deduplication ensure each person is counted once in retention and lifetime-value metrics.

## Try it / Reflect

- Open a dataset you work with: where would a defect like “Near Duplicate Customer Names” appear, and which Chapter 5 remedy would you apply first?

## Notes

- Prose-only in the manuscript.
