---
marp: true
title: Chapter 7 — Detecting bias statistically
paginate: true
---

# Chapter 7 — Detecting bias statistically

A bias taxonomy identifies possible mechanisms, but an audit needs measurable evidence

---

## Learning objectives
- Calculate and cautiously interpret a disparate-impact ratio using the eighty-percent rule

---

## Example 7.27 — Multiple Manifestations of Dataset Bias
- Example 7.27 — hands-on module
- Example 7.27 establishes why one metric is insufficient
- Bias may appear in demographic representation
- An audit should therefore inspect both inputs and decisions, compare several subgroups
- View files: `modules/chapter7/example27/`

---

## Example 7.27 — listing

```
"""Example 7.27 — bar chart of favorable predictions by demographic group (ASCII)."""

from __future__ import annotations


def main() -> None:
    """Draw an ASCII bar chart of selection rates per subgroup."""
    selection_rate: dict[str, float] = {
        "Group A": 0.42,
        "Group B": 0.35,
        "Group C": 0.19,
        "Group D": 0.15,
    }

    print("Selection rate by demographic subgroup (each # = 2 percentage points):\n")
    for group, rate in selection_rate.items():
        bar = "#" * round(rate * 50)
        print(f"{group:<9}{rate:>6.1%}  {bar}")

    spread = max(selection_rate.values()) - min(selection_rate.values())
```

---

## Example 7.28 — Distribution Comparison Across Demographics
- Example 7.28 — hands-on module
- Example 7.28 compares features such as age, gender
- Differences in counts
- Explore the chapter example module
- View files: `modules/chapter7/example28/`

---

## Statistical tests and practical significance
- Formal tests can assess whether observed distribution differences are unlikely under a
- A chi-squared test is suitable for categorical counts
- Statistical significance does not establish harm or practical importance
- Effect size and context remain essential

---

## Example 7.30 — Chi-Squared Test for Gender Distribution
- Example 7.30 — hands-on module
- Example 7.30 asks whether gender distribution differs across outcome categories
- The test compares observed counts with counts expected under independence
- Explore the chapter example module
- View files: `modules/chapter7/example30/`

---

## Correlations and proxy features
- Correlation analysis can reveal features that encode sensitive attributes indirectly
- Names, neighborhoods, schools, or purchasing patterns may act as proxies even after race
- Subgroup outcomes

---

## Example 7.33 — The 80% Rule in Hiring
- Example 7.33 — hands-on module
- Example 7.33 calculates a disparate-impact ratio by dividing one group's selection rate by
- A ratio below zero point eight is commonly used as a screening threshold for potential
- Explore the chapter example module
- View files: `modules/chapter7/example33/`

---

## Building a defensible audit
- Chosen reference group
- It reports both absolute rates and relative ratios, checks small groups carefully
- Results should be repeatable and linked to a decision about further analysis or mitigation

---

## Takeaways
- Distribution checks reveal representation and data-quality gaps
- Statistical tests formalize comparisons but must be paired with effect size and context
- Correlation can uncover proxy pathways
- Disparate-impact ratios summarize unequal selection rates

---

## Next
- Complete the quiz for this part
- The next clip makes these findings easier to inspect and communicate

