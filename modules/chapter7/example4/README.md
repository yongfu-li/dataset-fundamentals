# Example 7.4 — European Union's Artificial Intelligence Act

**Chapter:** 7  
**Label:** `eg:7.10`  
**Source:** `author/chapter7.tex`  
**Section:** `sec:7.1.5` — The Global Push for Fair AI and Ethical Guidelines

## Learning objective

Identify EU AI Act high-risk uses where dataset bias controls become compliance evidence.

## Chapter context

Chapter 7 covers dataset bias types, detection, fairness metrics, and regulatory exposure. The European Union's Artificial Intelligence Act establishes a risk-based regulatory framework for AI, with heightened duties for high-risk applications such as biometric identific…

## What this example shows

The European Union's Artificial Intelligence Act establishes a risk-based regulatory framework for AI, with heightened duties for high-risk applications such as biometric identification, critical infrastructure, and employment decision-making .

## What you should learn

### From the concept
- Risk-based regulatory framework for AI
- Heightened duties for high-risk uses: biometric ID, critical infrastructure, employment decisions
- Dataset bias controls become compliance evidence for high-risk systems

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
cd modules/chapter7/example4
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Running Example 7.4 — European Union's Artificial Intelligence Act
EU AI Act:
- Risk-based regulatory framework for AI
- Heightened duties for high-risk uses: biometric ID, critical infrastructure, employment decisions
- Dataset bias controls become compliance evidence for high-risk systems
```

## How to interpret the result

The closing bullet—'Dataset bias controls become compliance evidence for high-risk systems'—is the audit gate: deploy only after this condition is checked for the affected groups.

## Try it / Reflect

- Where does 'European Union's Artificial Intelligence Act' appear in a dataset you have worked with?

## Related examples

- `eg:7.9` — Previous example in the same section.
- `eg:7.11` — Next example in the same section.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
- Module folder `example4` is **Example 7.4** in the PDF; manuscript label is `eg:7.10`.
