# Chapter 2 — Challenges and case studies — transcript

**Part id:** part-09-challenges-and-case-studies  
**Estimated duration:** 7 minutes  
**Sources:** `author/chapter2.tex` (§2.8–2.9), `modules/chapter2/example19/`, `modules/chapter2/example22/`

## Slide 1 — Chapter 2 — Challenges and case studies

Even good tools fail when quality, bias, or integration are ignored. This final part covers preventable collection defects, channel bias, and how the same design questions appear in election sentiment, climate monitoring, and remote healthcare programs.

## Slide 2 — Learning objectives

By the end of this part, you should name recurring collection-time quality, bias, and integration failures, describe design-level countermeasures, and recognize how sources, methods, samples, and tools combine in short domain case studies.

## Slide 3 — Prevention at collection time

Even well-chosen methods and tools fail when quality, bias, or scale are ignored at collection time. This section stays at the prevention layer: how design choices introduce defects before any cleaner or warehouse can help. Remediation belongs to later chapters on data quality and bias; here the focus is stopping missingness, uneven frames, and incompatible feeds at the source.

## Slide 4 — Data quality issues

Collection is the first place quality defects appear: unanswered survey items, duplicated submissions, conflicting demographic fields, or mistyped measurements. Automated sensors add dropouts and calibration drift; manual entry adds transcription error. Prevention begins at the instrument: validation rules at entry, required fields where appropriate, unique keys that prevent double posting, and documented catch-up processes when paper or offline fallbacks are used. After collection, imputation cannot invent information that was never measured.

## Slide 5 — Example 2.19 — Missing fields in a clinic intake table

Example 2.19 shows how a collection-protocol gap produces a completeness failure. A clinic intake table arrives with blank diagnosis codes for evening arrivals because the night shift used a paper fallback form. Without a documented catch-up process, analysts either drop those rows or impute labels that never existed in the source protocol. Open the example 19 module to trace the defect to a protocol gap rather than a cleaning bug.

## Slide 6 — Dealing with bias

Bias enters when some people or events are systematically more likely to be observed than others. At collection time the usual paths are sampling bias from uneven frames or convenience designs, selection bias when channels exclude offline populations, and measurement bias when instruments are poorly calibrated. Countermeasures are design-level: prefer random or stratified draws when inference is the goal, document exclusions, audit instruments, and report limitations transparently.

## Slide 7 — Scalability and integration

As campaigns grow, volume and heterogeneity dominate. IoT and social streams produce continuous arrivals that overwhelm single-server workflows, while departmental silos and mixed formats block a unified view of the same entity. At collection time the design responses are modest but decisive: agree on schemas and identifiers before feeds multiply, set retention and alerting rules before volume peaks, and plan how streams will join. Without a shared station identifier and clock policy, separate vendor feeds cannot fuse into one analytical table.

## Slide 8 — Case study — social media analytics

Social platforms emit continuous public text that teams often want for sentiment tracking or issue monitoring. As a collection design, the usual stack is a real-time or near-real-time source, an API method with scraping only as a policy-constrained fallback, and automated polling tools. Sampling is often convenience or keyword-gated rather than a probability draw, so external validity limits apply immediately.

## Slide 9 — Example 2.22 — Election-week sentiment collection

Example 2.22 sketches the capture job for a campaign context. A team streams posts mentioning a candidate through an official API, stores text, timestamps, and engagement counts, and applies bot filters before any hourly aggregate is shown to leaders. Retention is capped at the campaign window, and public-post handling follows privacy constraints developed in the next chapter. Try the example 22 module to separate collection protocol from downstream sentiment scoring.

## Slide 10 — Case studies — climate and healthcare

Climate and environmental programs combine ground sensors, satellite products, and historical archives. Collection design mixes primary IoT streams with secondary remote-sensing layers and demands shared station identifiers, clocks, and calibration schedules before dashboards are promised. Healthcare collection spans wearables, remote monitoring devices, and electronic health records. Remote monitoring for chronic conditions only works when encryption, access control, consent records, and standardized identifiers are engineered alongside the sensors. Together, these cases return to the chapter's central lesson: collection design chooses sources, methods, samples, and tools under quality, bias, and scale constraints.

## Slide 11 — Takeaways

Stop defects at the instrument and protocol, not only in cleaning pipelines. Document channel exclusions and integration keys before volume peaks. Domain case studies show the same design questions in social, climate, and healthcare programs. Those choices determine whether later chapters inherit a trustworthy dataset.

## Slide 12 — Next

Complete the quiz to finish Chapter 2. The next chapter turns to ethics and privacy—how consent, minimization, and fairness constraints reshape what may be collected and retained in the first place.
