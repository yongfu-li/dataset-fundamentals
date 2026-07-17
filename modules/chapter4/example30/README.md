# Example 4.30 — Inconsistent Class Names

**Chapter:** 4  
**Label:** `eg:4.30`  
**Source:** `author/chapter4.tex`  
**Section:** `sec:4.5.1` — Common Annotation Errors

## Learning objective

Diagnose how synonym class strings (dog vs puppy) split training signal and inflate disagreement metrics.

## Chapter context

Section 4.5.1 on common errors—Example 4.30 is the naming inconsistency that looks minor but fractures the label space.

## What this example shows

One annotator tags ‘dog’ while another uses ‘puppy’ for young dogs—without a collapsed guideline, training treats distinct categories and evaluation counts false disagreements.

## Key terms

- **Class synonym drift** — Different strings for the same intended category.
- **Label space fracture** — Training sees extra classes that are semantically one concept.
- **Guideline collapse rule** — Explicit mapping of synonyms to canonical class names.

## What you should learn

### From the concept
- Export validation must include string equality on class names.
- Apparent IAA problems sometimes are schema problems.
- Audits on held-out review sets catch drift during long projects.

### From the output / result
- `run.sh` contrasts dog/puppy tags with and without guideline collapse.

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
cd modules/chapter4/example30
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Inconsistent class names:
- Annotator A: “dog”
- Annotator B: “puppy” for young dogs
- Without a guideline collapsing those strings → training treats distinct categories; evaluation counts false disagreements
Fix with guidelines + audits.
```

## How to interpret the result

Fix Example 4.30 before measuring κ (Example 4.31)—otherwise you punish annotators for schema bugs.

## Try it / Reflect

- Search your label exports for near-duplicate class strings—list three pairs to merge.

## Related examples

- `eg:4.31` — Low κ from ambiguous org guidelines—not only synonyms.
- `eg:4.29` — Export review gate before scale-up.
- `eg:4.32` — Gold audit after canonical names are fixed.

## Notes

- Prose-only.
