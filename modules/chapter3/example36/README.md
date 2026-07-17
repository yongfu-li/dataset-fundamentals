# Example 3.36 — Healthcare Prediction Privacy

**Chapter:** 3  
**Label:** `eg:3.36`  
**Source:** `author/chapter3.tex`  
**Section:** `sec:3.10.1` — AI and Privacy Concerns

## Learning objective

Assess privacy exposure when healthcare predictive models use genetic or detailed clinical histories.

## Chapter context

Example 3.36 pairs with Example 3.29's public-health utility angle but emphasizes leakage from outputs, embeddings, or weak de-identification.

## What this example shows

Predictive models ingesting genetic or detailed clinical histories expose patients if outputs, embeddings, or poorly de-identified releases leak—even when goals are population health improvement; clinical scores must preserve clinician judgment and consent.

## Key terms

- **Clinical embedding** — Dense representation derived from records—potentially re-identifiable.
- **Genetic sensitivity** — Highly identifying health data with familial implications.
- **Governance of CDS** — Clinical decision support must not replace judgment or consent.

## What you should learn

### From the concept
- Population-health models still carry individual re-identification risk.
- Embeddings are not automatically safe to publish.
- Clinical use adds informed-consent and professional-duty layers.

### From the output / result
- `run.sh` lists leakage paths and clinician/consent duties.

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
cd modules/chapter3/example36
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Healthcare prediction privacy:
- Models ingest genetic or detailed clinical histories
- Exposure risk if outputs, embeddings, or poorly de-identified releases leak
- Even when the goal is population health improvement
- Clinical scores must still preserve clinician judgment, informed consent, and patient values
```

## How to interpret the result

Before sharing model outputs with partners, walk Example 3.36's leakage checklist.

## Try it / Reflect

- Which is riskier to publish: aggregate cohort stats or patient-level risk embeddings—and why?

## Related examples

- `eg:3.29` — Utilitarian secondary-use argument.
- `eg:3.13` — Re-identification from quasi-identifiers.
- `eg:3.2` — Clinical harm from skewed or exposed data.

## Notes

- Prose-only.
