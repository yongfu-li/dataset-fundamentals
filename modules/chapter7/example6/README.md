# Example 7.6 — Facial Recognition System

**Chapter:** 7  
**Label:** `eg:7.12`  
**Source:** `author/chapter7.tex`  
**Section:** `sec:7.2.1` — Sampling Bias: Unequal Representation of Groups

## Learning objective

Diagnose facial-recognition sampling bias from underrepresented darker skin tones in training.

## Chapter context

Section 7.2.1 covers sampling bias—who is included or excluded from the dataset. If a facial recognition system is trained predominantly on images of light-skinned individuals, it will likely struggle to accurately recognize individuals with darker skin tones, …

## What this example shows

If a facial recognition system is trained predominantly on images of light-skinned individuals, it will likely struggle to accurately recognize individuals with darker skin tones, as it has not been exposed to enough diverse data during training.

## Key terms

- **Sampling bias** — Training data over-represents some groups or contexts.

## What you should learn

### From the concept
- Training mostly on light-skinned faces starves the model of diverse examples
- Result: systematically worse recognition for darker skin tones
- Remedy is representative collection, not post-hoc tuning alone

### From the output / result
- `run.sh` prints the structured takeaway below—use it when classifying or mitigating bias.

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
cd modules/chapter7/example6
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Running Example 7.6 — Facial Recognition System
Sampling bias — facial recognition:
- Training mostly on light-skinned faces starves the model of diverse examples
- Result: systematically worse recognition for darker skin tones
- Remedy is representative collection, not post-hoc tuning alone
```

## How to interpret the result

The closing bullet—'Remedy is representative collection, not post-hoc tuning alone'—is the audit gate: deploy only after this condition is checked for the affected groups.

## Try it / Reflect

- Where does 'Facial Recognition System' appear in a dataset you have worked with?

## Related examples

- `eg:7.6` — Gender Shades subgroup errors.
- `Chapter 3` — Representation vignette eg:3.35.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
- Module folder `example6` is **Example 7.6** in the PDF; manuscript label is `eg:7.12`.
