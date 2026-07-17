# Example 11.3 — High-Entropy Multi-Class Prediction

**Chapter:** 11  
**Label:** `eg:11.3`  
**Source:** `author/chapter11.tex`  
**Section:** `sec:11` — ?

## Learning objective

Compute predictive entropy and prioritize flat multi-class distributions for labeling.

## Chapter context

Chapter 11 extends Chapter 4 with active learning, weak supervision, self-supervision, and hybrid crowd–expert pipelines. If the model predicts class A at 0.4 and classes B and C at 0.3 each, entropy is high because no class dominates; such instances are prioritized for labeling.

## What this example shows

If the model predicts class A at 0.4 and classes B and C at 0.3 each, entropy is high because no class dominates; such instances are prioritized for labeling.

## What you should learn

### From the code / process
- Compute Shannon entropy H = −Σ p log₂ p for each probability vector.
- Flat distributions (≈1/3 each) score highest; peaked A=0.90 scores lowest.
- Prioritize HIGH entropy cases like the book's 0.4/0.3/0.3 split.

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
cd modules/chapter11/example3
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Distribution                      Entropy (bits)  Priority
uniform (1/3 each)                         1.585      HIGH
book example (A=0.4, B=C=0.3)              1.571      HIGH
peaked (A=0.90)                            0.569       LOW

When no class dominates (e.g., 0.4 / 0.3 / 0.3), entropy is high and
the instance is prioritized for labeling.
```

## How to interpret the result

When entropy matches the uniform case, the model is genuinely undecided; labeling those points beats labeling peaked predictions.

## Try it / Reflect

- Compute entropy by hand for [0.5, 0.25, 0.25] and compare to the book case.

## Related examples

- `eg:11.1` — Uncertainty for binary tasks.
- `eg:11.5` — Least-confidence medical example.

## Notes

- Standard-library Python demo; fixed logic mirrors the chapter query strategy.
