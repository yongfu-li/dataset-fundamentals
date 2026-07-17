# Example 10.1 — Cross-Modal Fidelity in Synthetic Data

**Chapter:** 10  
**Label:** `eg:10.1`  
**Source:** `author/chapter10.tex`  
**Section:** `sec:10.1.1` — Definition and Characteristics of Synthetic Data

## Learning objective

State modality-specific fidelity requirements for synthetic vision vs financial tabular data.

## Chapter context

Section 10.1.1 defines synthetic data as algorithmically generated to mirror real statistical structure while preserving analytical value—not copying individual rows. Synthetic images in computer vision should contain realistic patterns, textures, and relationships between objects, while synthetic financial data should maintain the same statisti…

## What this example shows

Synthetic images in computer vision should contain realistic patterns, textures, and relationships between objects, while synthetic financial data should maintain the same statistical properties as real-world transactions, including correlations, distributions, and trends. However, it matters to note that while synthetic data is designed to mimic real data, it may not always reflect all the complexities or noise present in the real world.

## Key terms

- **Fidelity** — How closely synthetic data preserves structure and analytical value of real data.
- **Modality** — Data type (vision, tabular finance, text) with distinct fidelity requirements.

## What you should learn

### From the concept
- Vision: realistic textures, patterns, object relationships
- Finance: correlations, distributions, and trends preserved
- Synthetic data may omit real-world noise and complexity

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
cd modules/chapter10/example1
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Cross-modal fidelity:
- Vision: realistic textures, patterns, object relationships
- Finance: correlations, distributions, and trends preserved
- Synthetic data may omit real-world noise and complexity
```

## How to interpret the result

The closing bullet—'Synthetic data may omit real-world noise and complexity'—is the release gate: synthetic data is useful only if it passes this check before training or sharing.

## Try it / Reflect

- List three fidelity checks for your modality—vision, tabular, or text.

## Related examples

- `eg:10.6` — Statistical sampling preserves moments.
- `eg:10.11` — GAN-based generation alternative.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
