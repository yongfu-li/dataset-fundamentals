# Example 11.2 — Margin Sampling in Multi-Class Tasks

**Chapter:** 11  
**Label:** `eg:11.2`  
**Source:** `author/chapter11.tex`  
**Section:** `sec:11` — ?

## Learning objective

Apply margin sampling to multi-class tasks where the top-two probabilities are closest.

## Chapter context

Chapter 11 extends Chapter 4 with active learning, weak supervision, self-supervision, and hybrid crowd–expert pipelines. In a multi-class task, margin sampling prioritizes instances where the top two predicted probabilities are closest, signaling weak class separation that a new label can sharpen.

## What this example shows

In a multi-class task, margin sampling prioritizes instances where the top two predicted probabilities are closest, signaling weak class separation that a new label can sharpen.

## What you should learn

### From the code / process
- For each multi-class prediction, take margin = top1 − top2 probability.
- Sort by smallest margin—doc_close and doc_flatish queue first.
- Tiny margin means weak separation a new label can sharpen.

### From the output / result
- Compare printed ranks, margins, entropies, or weak-label votes to the chapter's selection rule.

## Contents

| File | Role |
|------|------|
| `main.py` | Standard-library demo of the chapter query strategy or labeling functions |
| `install.sh` | Checks that `python3` is available |
| `run.sh` | Runs `python3 main.py` |

## Prerequisites

- OS: Linux, macOS, or Windows (Git Bash / WSL recommended for `.sh`)
- Python 3.10+ (standard library only)

## Setup

```bash
cd modules/chapter11/example2
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Multi-class pool; smaller top-two margin => higher labeling priority

Instance        Top1    Top2  Margin  Queue?
doc_close       0.41    0.39    0.02     YES
doc_flatish     0.36    0.34    0.02     YES
doc_clear       0.80    0.12    0.68        

A tiny margin signals weak class separation that a new label can sharpen.
```

## How to interpret the result

Margin sampling targets class confusion, not just binary near-50% cases—doc_clear's large margin correctly stays unqueued.

## Try it / Reflect

- Which doc_close margin would flip priority if Top2 rose by 0.05?

## Related examples

- `eg:11.1` — Binary uncertainty baseline.
- `eg:11.3` — Entropy when many classes tie.

## Notes

- Standard-library Python demo; fixed logic mirrors the chapter query strategy.
