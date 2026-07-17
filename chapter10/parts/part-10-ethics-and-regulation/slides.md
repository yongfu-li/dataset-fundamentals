---
marp: true
title: Chapter 10 — Ethics and regulation
paginate: true
---

# Chapter 10 — Ethics and regulation

The chapter closes by asking when synthetic data truly protects people and when it creates new harms

---

## Learning objectives
- By the end of this part

---

## Generator-specific ethical tensions
- Synthetic data adds risks beyond general privacy law
- Documentation and validation are ethical obligations, not optional metadata

---

## Privacy claims and GDPR
- Organizations often treat synthetic tables as lower risk because direct identifiers are
- That claim fails if generators memorize rare individuals or adversaries can link rows back
- Under GDPR, whether synthetic outputs escape personal-data duties depends on residual

---

## Example 10.18 — GDPR-Compliant Synthetic Patients
- Example 10.18 — hands-on module
- Example 10.18 describes a cross-border research project sharing synthetic patient cohorts
- Wide sharing is justified only when unlinkability is demonstrated
- Explore the chapter example module
- View files: `modules/chapter10/example18/`

---

## Misuse and manipulated reporting
- Poorly generated or deliberately skewed synthetic sets can mislead stakeholders
- Leading to harmful deployment in banking or healthcare

---

## Example 10.19 — Manipulated Performance Reporting
- Example 10.19 — hands-on module
- Downstream banks discover failure on live portfolios
- Explore the chapter example module
- View files: `modules/chapter10/example19/`

---

## Over-reliance and quality concerns
- Over-reliance treats synthetic corpora as complete substitutes for real-world evidence
- Autonomy planners trained mostly on synthetic intersections may fail when pedestrians
- Low-quality tabular generators can emit impossible joint values that teach spurious rules

---

## Bias amplification
- Generators trained on skewed historical data can emit apparently diverse yet
- Amplifying unfair outcomes in high-stakes decisions

---

## Example 10.22 — Bias Amplification in Hiring Data
- Example 10.22 — hands-on module
- Example 10.22 illustrates synthetic resumes from historically male-dominated hiring data
- Explore the chapter example module
- View files: `modules/chapter10/example22/`

---

## Mitigation: transparency, validation, oversight
- Ethics review or automated fairness checks
- Provenance and retention policies should support accountability when regulators or data

---

## Example 10.23 — Synthetic Data Under GDPR Rights
- Example 10.23 — hands-on module
- Pushing teams to document provenance and retention
- Explore the chapter example module
- View files: `modules/chapter10/example23/`

---

## Takeaways
- Synthetic data is a privacy tool only when validation shows acceptable re-identification
- Misuse, over-reliance
- Document generators, validate against real benchmarks

---

## Chapter complete
- This chapter positioned statistical sampling, generative adversarial networks
- Continue to annotation and corpus-scale storage topics in subsequent chapters

