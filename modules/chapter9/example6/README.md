# Example 9.6 — Cloud Storage for Centralized Access

**Chapter:** 9  
**Label:** `eg:9.6`  
**Source:** `author/chapter9.tex`  
**Section:** `sec:9.1.2` — The Need for Advanced Techniques to Handle Diverse Data Sources and Formats

## Learning objective

Describe cloud storage as centralized infrastructure for large, multi-format corpora and distributed processing.

## Chapter context

Section 9.1.2 adds heterogeneous streams (IoT, social, logs, multimedia) and ties advanced collection to governance in Chapters 7 and 8. Cloud-based storage lets teams keep large multi-format corpora in one place and expose them to distributed processing frameworks such as Hadoop or Spark.

## What this example shows

Cloud-based storage lets teams keep large multi-format corpora in one place and expose them to distributed processing frameworks such as Hadoop or Spark.

## What you should learn

### From the concept
- One central home for large multi-format corpora
- Direct integration with Hadoop/Spark processing
- Foundation for the data-lake pattern later in the chapter

### From the output / result
- `run.sh` prints the structured takeaway below—use it as a design checklist.

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
cd modules/chapter9/example6
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Cloud storage as infrastructure:
- One central home for large multi-format corpora
- Direct integration with Hadoop/Spark processing
- Foundation for the data-lake pattern later in the chapter
```

## How to interpret the result

The closing bullet—'Foundation for the data-lake pattern later in the chapter'—is the decision gate: if your pipeline cannot deliver that outcome, the advanced method adds complexity without value.

## Try it / Reflect

- Where in your work does 'Cloud Storage' apply—or fail to apply?

## Related examples

- `eg:9.26` — Cloud-backed data lake pattern.
- `eg:9.23` — Volume that cloud + distributed systems address.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
