# Example 11.11 — Key-Frame Selection for Action Labels

**Chapter:** 11  
**Label:** `eg:11.11`  
**Source:** `author/chapter11.tex`  
**Section:** `sec:11` — ?

## Learning objective

Select ambiguous key frames for action recognition rather than uniform sampling.

## Chapter context

Chapter 11 extends Chapter 4 with active learning, weak supervision, self-supervision, and hybrid crowd–expert pipelines. For action recognition, active learning selects frames with ambiguous or overlapping poses so annotators skip easy frames and focus effort where the model is unsure.

## What this example shows

For action recognition, active learning selects frames with ambiguous or overlapping poses so annotators skip easy frames and focus effort where the model is unsure.

## What you should learn

### From the concept
- Select ambiguous/overlapping pose frames
- Skip easy frames the model already knows
- Focus effort where uncertainty is highest

### From the output / result
- `run.sh` prints the structured takeaway below—use it when designing query or workforce rules.

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
cd modules/chapter11/example11
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Key-frame action labeling:
- Select ambiguous/overlapping pose frames
- Skip easy frames the model already knows
- Focus effort where uncertainty is highest
```

## How to interpret the result

The closing bullet—'Focus effort where uncertainty is highest'—is the operational gate: if your pipeline skips this check, advanced annotation saves cost on paper but not in production quality.

## Try it / Reflect

- Where would 'Key-Frame Selection for Action Labels' change your current labeling queue?

## Related examples

- `eg:11.10` — Previous example in the same section.
- `eg:11.12` — Next example in the same section.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
