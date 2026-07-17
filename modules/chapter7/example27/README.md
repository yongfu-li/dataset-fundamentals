# Example 7.27 — Bar Chart of Predictions by Demographic Group

**Chapter:** 7  
**Label:** `eg:7.36`  
**Source:** `author/chapter7.tex`  
**Section:** `sec:7.3.2` — Statistical Measures: Distribution Comparison and Correlation Analysis

## Learning objective

Visualize favorable prediction rates per demographic group and note spread.

## Chapter context

Section 7.3.2 introduces quantitative and visual bias detection techniques. Bar charts can show the number of instances of a particular demographic group in different categories of a model's predictions. If one group is significantly underrepresented in a …

## What this example shows

Bar charts can show the number of instances of a particular demographic group in different categories of a model's predictions. If one group is significantly underrepresented in a particular category (e.g., fewer women hired or fewer Black applicants approved for loans), this can be easily spotted using a bar chart.

## Key terms

- **80% rule** — Disparate-impact heuristic: group selection rate should be ≥80% of the highest group.
- **Chi-squared test** — Tests whether two categorical variables are independent.

## What you should learn

### From the code / process
- Plot ASCII bars of favorable prediction rate per subgroup.
- Measure spread between highest and lowest group.
- Wide spread is a visual cue to run formal tests like the 80% rule.

### From the output / result
- Compare printed statistics to the chapter's claimed bias signal or fairness trade-off.

## Contents

| File | Role |
|------|------|
| `main.py` | Standard-library demo of the chapter bias metric |
| `install.sh` | Checks that `python3` is available |
| `run.sh` | Runs `python3 main.py` |

## Prerequisites

- OS: Linux, macOS, or Windows (Git Bash / WSL recommended for `.sh`)
- Python 3.10+ (standard library only)

## Setup

```bash
cd modules/chapter7/example27
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Selection rate by demographic subgroup (each # = 2 percentage points):

Group A   42.0%  #####################
Group B   35.0%  ##################
Group C   19.0%  ##########
Group D   15.0%  ########

Spread between highest and lowest group: 27.0%
A wide spread across bars is the first visual cue of potential bias
(cf. Figure 7.2); follow up with formal tests such as the 80% rule.
```

## How to interpret the result

A 27-point spread between groups demands formal follow-up; visuals alone do not satisfy compliance documentation.

## Try it / Reflect

- Where does 'Bar Chart of Predictions by Demographic Group' appear in a dataset you have worked with?

## Related examples

- `eg:7.35` — Previous example in the same section.
- `eg:7.37` — Next example in the same section.

## Notes

- Standard-library bias-metric demo aligned with the chapter calculation.
- Module folder `example27` is **Example 7.27** in the PDF; manuscript label is `eg:7.36`.
