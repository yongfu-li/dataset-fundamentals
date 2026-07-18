# Chapter 10 — Use cases in healthcare and finance — transcript

**Clip id:** part-08-use-cases-healthcare-finance
**Estimated duration:** 7 minutes
**Sources:** `author/chapter10.tex` (§10.6.2–10.6.3), `modules/chapter10/example12/`, `modules/chapter10/example13/`, `modules/chapter10/example14/`

## Slide 1 — Chapter 10 — Use cases in healthcare and finance

Synthesis methods become concrete in domain settings. This part walks privacy-preserving medical records, rare-disease simulation, and synthetic fraud patterns for financial model training.

## Slide 2 — Learning objectives

By the end of this part, learners should be able to explain how synthetic health data supports research under HIPAA and GDPR constraints; describe rare-condition augmentation for low-prevalence diseases; and outline fraud-detection training with synthetic transaction patterns.

## Slide 3 — Healthcare privacy barriers

Healthcare data face strict privacy rules in the United States and Europe. Real electronic health records often cannot be shared freely for external research or vendor benchmarking. Synthetic medical tables can preserve cohort-level statistics and clinical relationships while removing direct identifiers—provided re-identification risk is validated, not assumed away.

## Slide 4 — Example 10.12 — Privacy-Preserving Medical Records

Example 10.12 describes a hospital consortium releasing synthetic electronic health record tables with diagnosis codes, lab ranges, and visit counts. External researchers prototype models without accessing raw patient files. The example 12 module for this chapter frames privacy-preserving medical sharing scenarios.

## Slide 5 — Simulating rare conditions

Low-prevalence diseases yield too few real cases for robust machine learning. Synthetic generation can augment rare oncology or genetic presentations while preserving clinically relevant feature patterns. The goal is better classifiers and simulators—not fictional patients that misrepresent treatment pathways.

## Slide 6 — Example 10.13 — Rare-Disease Case Simulation

Example 10.13 shows an oncology team generating additional synthetic cases of a rare lymphoma subtype so a classifier trains on more than a handful of real admissions from one center. The example 13 module for this chapter summarizes rare-disease augmentation rationale.

## Slide 7 — Finance and confidentiality

Financial institutions handle sensitive transactional data restricted by security and privacy policies. Synthetic data offers an alternative for fraud modeling and strategy simulation without exposing customer identifiers or proprietary trading histories.

## Slide 8 — Fraud detection with synthetic patterns

Fraud is a rare-event problem: historical logs contain few positive examples. Synthetic generators can emit diverse fraudulent sequences—unusual merchant categories, velocity spikes, or card-not-present patterns—that expand detector training beyond sparse real labels.

## Slide 9 — Example 10.14 — Synthetic Fraud Transaction Patterns

Example 10.14 describes a payments provider synthesizing card-not-present fraud sequences with unusual merchant categories and velocity spikes. Detectors gain positive examples absent from historical logs. The example 14 module for this chapter outlines synthetic fraud augmentation for model training.

## Slide 10 — Trading simulations

Beyond fraud, synthetic market data can stress investment and risk models with crashes, booms, and edge conditions underrepresented in limited historical windows. Synthetic finance use cases still require validation against live macro regimes before deployment decisions rely on them.

## Slide 11 — Takeaways

Healthcare synthesis targets privacy-preserving sharing and rare-disease coverage; finance synthesis targets confidential fraud and trading simulation. Both domains demand regulatory awareness and fidelity checks beyond aggregate similarity. Autonomy and cybersecurity use cases follow in the next part.

## Slide 12 — Next

The next part covers pedestrian-in-rain edge cases for autonomous systems, computer-vision augmentation, and ransomware attack simulation for cybersecurity training.
