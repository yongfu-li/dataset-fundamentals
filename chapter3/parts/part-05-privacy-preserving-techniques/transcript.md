# Chapter 3 — Privacy-preserving techniques — transcript

**Part id:** part-05-privacy-preserving-techniques  
**Estimated duration:** 7 minutes  
**Sources:** `author/chapter3.tex` (§3.4), `modules/chapter3/example13/`, `modules/chapter3/example15/`, `modules/chapter3/example16/`

## Slide 1 — Chapter 3 — Privacy-preserving techniques

Teams often need useful analysis while reducing exposure of personal records. This part is the chapter's technical home for those controls: anonymization and encryption as baselines, then differential privacy and federated learning as stronger formal or architectural options.

## Slide 2 — Learning objectives

By the end of this part, you should place four techniques on a protection map, state the main caveat for each, and explain how they stack with consent and purpose limits.

## Slide 3 — Techniques at a glance

Anonymization and de-identification reduce linkability in shared tables—but auxiliary data can support re-identification. Encryption protects confidentiality in transit and at rest, yet authorized users still see plaintext. Differential privacy limits how much any single record can change an aggregate release, typically by calibrated noise. Federated learning trains models where raw data stay on devices or silos; only updates move to an aggregator.

## Slide 4 — Anonymization and re-identification risk

Common moves include masking direct identifiers, generalizing quasi-identifiers such as age bands, and coarsening rare combinations. Example 3.13 is the canonical warning: sparse location histories, even without names, can be joined to public records or social posts to recover identity. Stronger protection usually requires coarser aggregation, formal privacy noise, or keeping raw traces off shared servers.

## Slide 5 — Example 3.13 — Re-identification from location patterns

Example 3.13 shows why anonymization is a management goal, not a guarantee. Open the example 13 module for this chapter to review auxiliary-data join scenarios. Encryption complements anonymization but solves a different problem.

## Slide 6 — Encryption limits

Encryption keeps intercepted packets unreadable—for example TLS during clinical record transfer. Once an authorized clinician decrypts the payload, misuse controls must come from access policy, audit logs, and minimization, not from encryption alone. Example 3.14 makes that limit explicit for medical messaging.

## Slide 7 — Differential privacy

Differential privacy limits what an adversary learns about any individual from aggregate outputs. The standing trade-off is privacy budget versus accuracy: more noise strengthens privacy but can blunt utility. Example 3.15 shows product telemetry released under a differential-privacy mechanism so teams still see population patterns without singling out users.

## Slide 8 — Example 3.15 — Differential privacy for product telemetry

Example 3.15 depends on correct noise calibration and on not publishing too many overlapping queries against the same budget. Try the example 15 module for this chapter to see how budget exhaustion works in practice.

## Slide 9 — Federated learning

Federated learning reduces central pools of raw text or sensor data by training locally and sending only update summaries for aggregation. Example 3.16 shows on-device keyboard prediction: teams still need secure aggregation and monitoring so updates do not reconstruct sensitive phrases.

## Slide 10 — Example 3.16 — Federated learning for on-device keyboard prediction

Example 3.16 illustrates when raw centralization is unacceptable. Open the example 16 module to compare centralized training with federated updates. Techniques stack—none replaces consent and purpose limits from Section 3.3.

## Slide 11 — Takeaways

Choose controls to match the threat: linkability, channel confidentiality, aggregate leakage, or raw centralization. Stack techniques where needed. Technical PETs implement privacy principles—they do not replace them.

## Slide 12 — Next

Pause for the quiz, then continue to bias and fairness—how ethical principles connect to model outcomes.
