# Example 3.37 — Autonomous Vehicle Liability

**Chapter:** 3  
**Label:** `eg:3.37`  
**Source:** `author/chapter3.tex`  
**Section:** `sec:3.10.2` — Ethics in AI: Emerging Debates

## Learning objective

Assign autonomous-vehicle liability to manufacturers, operators, and governance—not to ‘the model’ as a moral agent.

## Chapter context

Section 3.10.2 covers emerging AI ethics debates. Example 3.37 on AV liability clarifies who must log, explain, and answer when automated systems cause harm.

## What this example shows

When an autonomous vehicle causes harm, liability and explanation duties fall on manufacturers, operators, and governance regimes—not on the model as a moral agent—implying logging, fallback control, and clear responsibility maps.

## Key terms

- **Liability map** — Documented assignment of legal and operational responsibility.
- **Fallback control** — Human or procedural override when automation fails.
- **Moral agent fallacy** — Treating the model as the accountable party.

## What you should learn

### From the concept
- Dataset practitioners must capture data/logs that support accountability.
- Safety-critical AI needs traceability beyond offline accuracy.
- Governance regimes, not weights files, answer to courts.

### From the output / result
- `run.sh` lists responsible parties and logging/fallback implications.

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
cd modules/chapter3/example37
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Autonomous vehicle liability:
- Harm → liability/explanation duties on manufacturers, operators, and governance regimes
- Not on “the model” as a moral agent
- Implies logging, fallback control, and clear responsibility maps
Dataset practitioners: data and logs must support accountability, not only online accuracy.
```

## How to interpret the result

If your pipeline cannot reproduce a decision trail after an incident, Example 3.37 predicts who will still be liable.

## Try it / Reflect

- Sketch a one-page RACI for ‘unexpected brake event’—from sensor log to legal hold.

## Related examples

- `eg:3.5` — Accountability principle after harmful incidents.
- `eg:3.4` — Transparency and challenge paths for consequential decisions.

## Notes

- Prose-only.
