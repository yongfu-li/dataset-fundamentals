# De-identification risk checker

Browser lab for **Chapter 3** k-anonymity: quasi-identifiers can re-identify people
even after names are removed.

**Live path:** `lectures/tools/deid-risk/index.html` (after `build_site.py`)

## Learning objectives

- Distinguish direct identifiers from quasi-identifiers
- Measure k-anonymity (minimum equivalence-class size)
- Try ZIP3 / age-bin generalization and suppressing small classes
- Export a risk report for the audit trail

## Workflow

1. **Learn** — `hospital-quasi` (fails) → generalize → `coarse-safe` (passes)
2. **Mark QIs** — ZIP, age, sex, …
3. **Set k** — often 5
4. **Export** — `deid-risk-report.json` / `.md` + generalized CSV

## Upload rules

- Formats: CSV, JSON
- Max **5,000** rows, **2 MB**

## Book anchors

- §3.4 privacy-preserving techniques (`sec:3.4`)
- Linked from `part-05-privacy-preserving-techniques`
- Sibling: Consent & PII scrubber (direct IDs)

## QA checklist

- [ ] `hospital-quasi` fails k=5 on zip+age+sex
- [ ] ZIP3 + age bins improve min k
- [ ] `coarse-safe` passes k=5
- [ ] Suppress removes rows in classes &lt; k
