---
marp: true
title: Chapter 7 — Impacts of dataset bias
paginate: true
---

# Chapter 7 — Impacts of dataset bias

Bias detection is not merely a technical quality exercise

---

## Learning objectives
- By the end of this clip

---

## Example 7.38 — Inequitable Treatment in Credit and Justice Decisions
- Example 7.38 — hands-on module
- Example 7.38 illustrates the ethical impact of unequal treatment
- While biased justice data may produce unfair risk assessments
- Such errors affect opportunities and liberty
- View files: `modules/chapter7/example38/`

---

## Example 7.38 — listing

```
"""Example 7.38 — enforcing demographic parity on loan approvals and its accuracy cost."""

from __future__ import annotations

Applicant = tuple[str, float, int]  # (group, score, actually_repays)


def approve(data: list[Applicant], thresholds: dict[str, float]) -> tuple[float, dict[str, float], float]:
    """Return (accuracy, approval rate per group, default rate among approved)."""
    correct = 0
    approved: dict[str, int] = {"A": 0, "B": 0}
    counts: dict[str, int] = {"A": 0, "B": 0}
    approved_total = 0
    approved_defaults = 0
    for group, score, repays in data:
        counts[group] += 1
        decision = 1 if score >= thresholds[group] else 0
        approved[group] += decision
        if decision == repays:
            correct += 1
```

---

## Example 7.40 — Amplification of Policing and Hiring Disparities
- Example 7.40 — hands-on module
- Example 7.40 shows social amplification
- Which then directs still more policing there
- Historical hiring patterns can similarly teach a ranking system to favor men
- Repeated automated decisions scale and reinforce the pattern
- View files: `modules/chapter7/example40/`

---

## Example 7.42 — Compliance Exposure Under GDPR and CCPA
- Example 7.42 — hands-on module
- Example 7.42 connects unfair outcomes with legal and regulatory exposure
- Recruitment and credit systems must comply with anti-discrimination duties
- Organizations need more than a claim of neutral intent
- View files: `modules/chapter7/example42/`

---

## Example 7.45 — Financial Penalties from Biased Hiring and Credit Systems
- Example 7.45 — hands-on module
- Example 7.45 presents the business consequences
- Lasting reputational damage
- Fairness investment can therefore reduce risk and protect market legitimacy
- Delayed mitigation is often more expensive because deployed decisions and public harms are
- View files: `modules/chapter7/example45/`

---

## The COMPAS bridge
- Recidivism risk assessment provides a bridge across all four dimensions
- Weaken institutional legitimacy
- Overall accuracy does not settle these issues because false positives and false negatives

---

## From impact to accountability
- Monitoring after deployment
- Impact assessments should ask who can be harmed, how severe and reversible the harm is
- These questions connect technical metrics to organizational responsibility

---

## Takeaways
- Ethical impacts concern justice and individual treatment
- Social impacts concern stereotypes, feedback loops, and unequal access
- Legal impacts concern rights, discrimination, privacy, and explainability
- Business impacts include cost, reputation, and legitimacy
- A single disparity can cross all four dimensions, especially in consequential decisions

---

## Next
- Complete the quiz for this part
- The next clip asks what fairness should mean in measurable terms

