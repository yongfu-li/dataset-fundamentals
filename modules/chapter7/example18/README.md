# Example 7.18 — Multiple Manifestations of Dataset Bias

**Chapter:** 7  
**Label:** `eg:7.27`  
**Source:** `author/chapter7.tex`  
**Section:** `sec:7.3.1` — Overview of Bias Detection Using Metrics and Visualizations

## Learning objective

Combine representation metrics and visualizations—one probe per bias manifestation.

## Chapter context

Section 7.3.1 motivates combining multiple bias probes across representation and process. A dataset could be biased in how it represents demographic features like gender, race, or age, or it could be biased in how the data is processed, labeled, or aggregated.

## What this example shows

A dataset could be biased in how it represents demographic features like gender, race, or age, or it could be biased in how the data is processed, labeled, or aggregated.

## What you should learn

### From the concept
- Representation: how gender, race, age are distributed
- Process: how data is collected, processed, labeled, aggregated
- Detection must combine metrics AND visualizations, one probe per bias type

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
cd modules/chapter7/example18
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Running Example 7.18 — Multiple Manifestations of Dataset Bias
Bias manifests in multiple places:
- Representation: how gender, race, age are distributed
- Process: how data is collected, processed, labeled, aggregated
- Detection must combine metrics AND visualizations, one probe per bias type
```

## How to interpret the result

The closing bullet—'Detection must combine metrics AND visualizations, one probe per bias type'—is the audit gate: deploy only after this condition is checked for the affected groups.

## Try it / Reflect

- Where does 'Multiple Manifestations of Dataset Bias' appear in a dataset you have worked with?

## Related examples

- `eg:7.28` — Distribution comparison.
- `eg:7.34` — Combined visual screening.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
- Module folder `example18` is **Example 7.18** in the PDF; manuscript label is `eg:7.27`.
