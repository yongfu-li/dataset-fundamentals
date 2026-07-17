# Example 11.14 — Labeling Functions for Spam Detection

**Chapter:** 11  
**Label:** `eg:11.14`  
**Source:** `author/chapter11.tex`  
**Section:** `sec:11` — ?

## Learning objective

Apply heuristic labeling functions for spam and combine weak votes Snorkel-style.

## Chapter context

Chapter 11 extends Chapter 4 with active learning, weak supervision, self-supervision, and hybrid crowd–expert pipelines. Analysts write heuristic labeling functions (keyword lists, regexes, weak classifiers) over email text; Snorkel estimates source accuracies and outputs probabilistic training label…

## What this example shows

Analysts write heuristic labeling functions (keyword lists, regexes, weak classifiers) over email text; Snorkel estimates source accuracies and outputs probabilistic training labels without requiring a full hand-labeled corpus .

## What you should learn

### From the code / process
- Apply three LFs: keyword spam (+1), regex money (+1), ham sign-off (−1).
- Each LF may abstain (0); majority vote over non-zero votes.
- Combined weak labels train without a fully hand-labeled corpus.

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
cd modules/chapter11/example14
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Email                                       LF1  LF2  LF3    Combo
FREE prize!!! Click now to win $500           1    1    0     SPAM
See you tomorrow — thanks, Alex               0    0   -1      HAM
Invoice attached for last month               0    0    0  ABSTAIN
Win a free cruise — only $1 deposit           1    1    0     SPAM

Each LF is noisy and may abstain; combining votes yields probabilistic
training labels without a full hand-labeled corpus (Snorkel-style).
```

## How to interpret the result

ABSTAIN on neutral invoices shows LFs are incomplete—production Snorkel pipelines add more rules and learned aggregation.

## Try it / Reflect

- Write a fourth labeling function that abstains on short neutral emails.

## Related examples

- `Chapter 4` — Manual vs programmatic labeling.
- `eg:11.15` — Self-supervision reduces label need.

## Notes

- Standard-library Python demo; fixed logic mirrors the chapter query strategy.
