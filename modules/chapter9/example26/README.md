# Example 9.26 — Retail Data Lake for Mixed Sources

**Chapter:** 9  
**Label:** `eg:9.26`  
**Source:** `author/chapter9.tex`  
**Section:** `sec:9.4.4` — Managing Streaming Data and Data Lakes vs. Data Warehouses

## Learning objective

Choose a data lake for mixed raw retail sources and note governance risks (schema-on-read).

## Chapter context

Section 9.4.4 contrasts data lakes (raw, schema-on-read) with data warehouses (structured BI). A retail company might store its customer interaction logs, social media content, and sensor data in a data lake to derive insights on customer behavior. Analysts can later use mac…

## What this example shows

A retail company might store its customer interaction logs, social media content, and sensor data in a data lake to derive insights on customer behavior. Analysts can later use machine learning tools to process this data and uncover trends.

## Key terms

- **Data lake** — Central store for raw structured, semi-structured, and unstructured data.
- **Data warehouse** — Cleaned, structured store optimized for fast BI queries and reporting.

## What you should learn

### From the concept
- Interaction logs, social content, and sensor data stored raw
- Schema-on-read supports later ML exploration
- Needs governance (Chapter 8) to avoid becoming a swamp

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
cd modules/chapter9/example26
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Retail data lake:
- Interaction logs, social content, and sensor data stored raw
- Schema-on-read supports later ML exploration
- Needs governance (Chapter 8) to avoid becoming a swamp
```

## How to interpret the result

The closing bullet—'Needs governance (Chapter 8) to avoid becoming a swamp'—is the decision gate: if your pipeline cannot deliver that outcome, the advanced method adds complexity without value.

## Try it / Reflect

- Which retail sources belong raw in a lake vs. curated in a warehouse?

## Related examples

- `eg:9.27` — Warehouse for structured BI complement.
- `Chapter 8` — Governance to avoid a data swamp.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
