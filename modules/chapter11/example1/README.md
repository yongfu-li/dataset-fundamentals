# Example 11.1 — Uncertainty Sampling for Cat-Dog Images

**Chapter:** 11  
**Label:** `eg:11.1`  
**Source:** `author/chapter11.tex`  
**Section:** `sec:11` — ?

## Learning objective

Rank binary predictions by distance from 0.5 and queue near-tie images for labeling.

## Chapter context

Chapter 11 extends Chapter 4 with active learning, weak supervision, self-supervision, and hybrid crowd–expert pipelines. In a binary image classifier, an image with predicted probabilities near 0.51/0.49 for cat versus dog is queued for a human label because that near-tie is where a new label most re…

## What this example shows

In a binary image classifier, an image with predicted probabilities near 0.51/0.49 for cat versus dog is queued for a human label because that near-tie is where a new label most reshapes the decision boundary .

## What you should learn

### From the code / process
- Compute |P(dog) − 0.5| for each unlabeled image.
- Sort ascending—smallest distance means highest query priority.
- Flag Queue=YES when |p−0.5| ≤ 0.05 (near-tie decision boundary).

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
cd modules/chapter11/example1
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Binary pool (P(dog)); lower |p-0.5| => higher priority

Image                   P(dog)   |p-0.5|  Queue?
img_blurry_pet.jpg        0.51      0.01     YES
img_night_pet.jpg         0.48      0.02     YES
img_toy_animal.jpg        0.67      0.17        
img_clear_cat.jpg         0.11      0.39        
img_clear_dog.jpg         0.92      0.42        

Near-ties (≈0.51/0.49) most reshape the decision boundary when labeled.
```

## How to interpret the result

If near-ties are not queued first, you waste expert time on 0.92/0.11 'easy' images that barely move the boundary.

## Try it / Reflect

- Add an image at P(dog)=0.50—which rank should it take?

## Related examples

- `eg:11.2` — Margin sampling for multi-class.
- `eg:11.3` — Entropy sampling alternative.
- `Chapter 4` — Annotation fundamentals.

## Notes

- Standard-library Python demo; fixed logic mirrors the chapter query strategy.
