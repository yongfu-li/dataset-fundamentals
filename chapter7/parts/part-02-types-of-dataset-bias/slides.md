---
marp: true
title: Chapter 7 — Types of dataset bias
paginate: true
---

# Chapter 7 — Types of dataset bias

Bias is easier to detect and mitigate when its mechanism is named precisely

---

## Learning objectives
- By the end of this clip

---

## Sampling and measurement bias
- Sampling bias occurs when collected records do not represent the population or conditions
- Measurement bias occurs when instruments
- Sampling changes who or what is observed

---

## Example 7.12 — Facial Recognition System
- Example 7.12 — hands-on module
- Example 7.12 illustrates sampling bias
- A facial recognition dataset dominated by light-skinned faces gives a model too little
- Performance can therefore vary sharply across groups
- Adding more images from the already dominant group increases dataset size without
- View files: `modules/chapter7/example12/`

---

## Example 7.14 — Creditworthiness System
- Example 7.14 — hands-on module
- Example 7.14 illustrates measurement bias through self-reported income
- Respondents may overstate or withhold information because of privacy concerns or social
- The resulting values are not merely noisy if the error follows a systematic pattern across
- Audit work must examine how a variable was produced
- View files: `modules/chapter7/example14/`

---

## Example 7.17 — Entrenched Societal Biases in Historical Records
- Example 7.17 — hands-on module
- Example 7.17 shows historical bias
- Hiring, lending, judicial
- A model can reproduce those patterns even when collection and measurement are technically
- Historical data describes what happened
- View files: `modules/chapter7/example17/`

---

## Example 7.21 — Labeling Bias in Sentiment Annotation
- Example 7.21 — hands-on module
- Example 7.21 shows label bias
- Annotators may interpret tone differently because of cultural background
- If these disagreements systematically affect some dialects or groups
- View files: `modules/chapter7/example21/`

---

## Example 7.21 — listing

```
"""Example 7.21 — chi-squared test of gender distribution across performance categories."""

from __future__ import annotations


def main() -> None:
    """Run a 2x2 chi-squared test on gender vs performance category."""
    # Observed contingency table: rows = gender, cols = (high, low) performers.
    observed: dict[str, tuple[int, int]] = {"Male": (90, 210), "Female": (30, 170)}

    row_totals = {g: sum(cells) for g, cells in observed.items()}
    col_totals = (
        sum(cells[0] for cells in observed.values()),
        sum(cells[1] for cells in observed.values()),
    )
    grand = sum(row_totals.values())

    print(f"{'Gender':<8}{'High':>6}{'Low':>6}{'Total':>7}")
    for gender, (high, low) in observed.items():
        print(f"{gender:<8}{high:>6}{low:>6}{row_totals[gender]:>7}")
```

---

## Aggregation and confirmation bias
- Aggregation bias appears when diverse subgroups are treated as homogeneous and important
- Confirmation bias appears when data is selected or interpreted to support an existing
- One masks variation through pooling; the other narrows evidence through expectation

---

## Diagnosing overlapping mechanisms
- A single system may combine several mechanisms
- Encourage confirmation of an assumed crime pattern
- Analyst decisions rather than assigning one convenient label

---

## Takeaways
- Label bias concerns target construction
- Aggregation bias hides subgroup differences
- Precise diagnosis guides intervention and prevents the mistaken assumption that more data

---

## Next
- Complete the quiz for this part
- The next clip turns this taxonomy into measurable evidence

