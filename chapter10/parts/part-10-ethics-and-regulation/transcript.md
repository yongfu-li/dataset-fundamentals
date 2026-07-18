# Chapter 10 — Ethics and regulation — transcript

**Clip id:** part-10-ethics-and-regulation
**Estimated duration:** 8 minutes
**Sources:** `author/chapter10.tex` (§10.7), `modules/chapter10/example18/`, `modules/chapter10/example19/`, `modules/chapter10/example22/`, `modules/chapter10/example23/`

## Slide 1 — Chapter 10 — Ethics and regulation

The chapter closes by asking when synthetic data truly protects people and when it creates new harms. This final part covers privacy claims under GDPR, manipulated reporting, bias amplification, mitigation practices, and regulatory considerations for synthetic releases.

## Slide 2 — Learning objectives

By the end of this part, learners should be able to evaluate privacy claims for synthetic corpora under GDPR and HIPAA; recognize misuse, over-reliance, and quality risks; explain bias amplification in generated hiring data; and list transparency, validation, and oversight practices before deployment.

## Slide 3 — Generator-specific ethical tensions

Synthetic data adds risks beyond general privacy law: re-identification through memorization, bias amplification from skewed sources, deceptive realistic media, and accountability when models trained on simulations fail live. Documentation and validation are ethical obligations, not optional metadata.

## Slide 4 — Privacy claims and GDPR

Organizations often treat synthetic tables as lower risk because direct identifiers are removed. That claim fails if generators memorize rare individuals or adversaries can link rows back to real people. Under GDPR, whether synthetic outputs escape personal-data duties depends on residual identifiability, not the label synthetic alone.

## Slide 5 — Example 10.18 — GDPR-Compliant Synthetic Patients

Example 10.18 describes a cross-border research project sharing synthetic patient cohorts for algorithm benchmarking while identifiable European health records remain inside the controller environment. Wide sharing is justified only when unlinkability is demonstrated. The example 18 module for this chapter frames GDPR-aware synthetic patient release.

## Slide 6 — Misuse and manipulated reporting

Poorly generated or deliberately skewed synthetic sets can mislead stakeholders. Vendors may report strong accuracy on synthetic-only benchmarks that omit recent macro shocks or rare behaviors, leading to harmful deployment in banking or healthcare.

## Slide 7 — Example 10.19 — Manipulated Performance Reporting

Example 10.19 warns of a vendor reporting strong loan-default accuracy using synthetic data that omits recent macro shocks; downstream banks discover failure on live portfolios. The example 19 module for this chapter summarizes performance reporting integrity risks.

## Slide 8 — Over-reliance and quality concerns

Over-reliance treats synthetic corpora as complete substitutes for real-world evidence. Autonomy planners trained mostly on synthetic intersections may fail when pedestrians behave in ways absent from the generator library. Low-quality tabular generators can emit impossible joint values that teach spurious rules.

## Slide 9 — Bias amplification

Generators trained on skewed historical data can emit apparently diverse yet systematically biased samples. Synthetic hiring resumes from male-dominated source data may over-represent the same career paths the organization hoped to correct—amplifying unfair outcomes in high-stakes decisions.

## Slide 10 — Example 10.22 — Bias Amplification in Hiring Data

Example 10.22 illustrates synthetic resumes from historically male-dominated hiring data reinforcing the same career-path skew. The example 22 module for this chapter connects amplification to fairness audits on both source and synthetic cohorts.

## Slide 11 — Mitigation: transparency, validation, oversight

Best practices include diverse training sources, fairness constraints, disclosed generation methods, benchmark validation against real data, and ethics review or automated fairness checks. Provenance and retention policies should support accountability when regulators or data subjects challenge synthetic derivatives.

## Slide 12 — Example 10.23 — Synthetic Data Under GDPR Rights

Example 10.23 notes regulators asking whether individuals can challenge inferences trained on synthetic derivatives of personal data—pushing teams to document provenance and retention. The example 23 module for this chapter summarizes evolving regulatory scrutiny.

## Slide 13 — Takeaways

Synthetic data is a privacy tool only when validation shows acceptable re-identification risk. Misuse, over-reliance, and bias amplification require governance alongside technical metrics. Document generators, validate against real benchmarks, and apply fairness oversight before release—then carry those practices into advanced annotation and storage chapters ahead.

## Slide 14 — Chapter complete

This chapter positioned statistical sampling, generative adversarial networks, and language models as complements to real collection when data are scarce, sensitive, or imbalanced—provided fidelity and ethics checks pass. Continue to annotation and corpus-scale storage topics in subsequent chapters.
