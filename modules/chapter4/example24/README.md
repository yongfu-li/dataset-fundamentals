# Example 4.24 — Categorization on Tabular Rows

**Chapter:** 4  
**Label:** `eg:4.24`  
**Source:** `author/chapter4.tex`  
**Section:** `sec:4.2.6` — Tabular Data Annotation

## Learning objective

Label tabular customer rows with high/medium/low value bands for supervised targeting models.

## Chapter context

Section 4.2.6 introduces tabular annotation—Example 4.24 is row-level categorization from purchase history before fraud outlier flags in 4.25.

## What this example shows

In a customer database, rows may be labeled high, medium, or low value from purchase history for supervised targeting models.

## Key terms

- **Row-level label** — Classification target attached to a structured record.
- **Value band** — Ordinal or categorical customer tier from behavioral features.
- **Tabular supervision** — Learning from labeled columns in tables.

## What you should learn

### From the concept
- Tabular labels often derive from rules on features—document the rule.
- Leaky labels (future revenue in features) invalidate evaluation.
- Differs from fraud outlier labeling in Example 4.25.

### From the output / result
- `run.sh` describes high/medium/low value row classes.

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
cd modules/chapter4/example24
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Tabular categorization:
- Customer rows labeled high / medium / low value from purchase history
- Supervised targeting models learn from those row classes
```

## How to interpret the result

If value bands are defined by the same team that builds features, audit for label leakage before training.

## Try it / Reflect

- Write the SQL or rule that separates ‘high value’ from ‘medium’—is it stable over time?

## Related examples

- `eg:4.25` — Rare-event fraud flags instead of value bands.
- `eg:4.1` — Annotation as supervised input–output pairing—tabular form.
- `eg:4.30` — Inconsistent category strings in tabular exports.

## Notes

- Prose-only.
