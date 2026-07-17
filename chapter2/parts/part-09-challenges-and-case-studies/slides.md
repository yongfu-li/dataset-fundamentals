---
marp: true
title: Chapter 2 — Challenges and case studies
paginate: true
---

# Chapter 2 — Challenges and case studies

Even good tools fail when quality, bias, or integration are ignored

---

## Learning objectives
- Name recurring collection-time quality, bias
- Integration failures, describe design-level countermeasures
- Recognize how sources, methods, samples
- Tools combine in short domain case studies

---

## Prevention at collection time
- Even well-chosen methods and tools fail when quality
- This section stays at the prevention layer
- Remediation belongs to later chapters on data quality and bias

---

## Data quality issues
- Collection is the first place quality defects appear
- Automated sensors add dropouts and calibration drift
- Prevention begins at the instrument
- After collection, imputation cannot invent information that was never measured

---

## Example 2.19 — Missing fields in a clinic intake table
- Example 2.19 — hands-on module
- Example 2.19 shows how a collection-protocol gap produces a completeness failure
- A clinic intake table arrives with blank diagnosis codes for evening arrivals because the
- Without a documented catch-up process
- Explore the chapter example module
- View files: `modules/chapter2/example19/`

---

## Dealing with bias
- Bias enters when some people or events are systematically more likely to be observed than
- Measurement bias when instruments are poorly calibrated
- Countermeasures are design-level

---

## Scalability and integration
- As campaigns grow, volume and heterogeneity dominate
- IoT and social streams produce continuous arrivals that overwhelm single-server workflows
- At collection time the design responses are modest but decisive
- Without a shared station identifier and clock policy

---

## Case study — social media analytics
- Social platforms emit continuous public text that teams often want for sentiment tracking
- Automated polling tools
- Sampling is often convenience or keyword-gated rather than a probability draw

---

## Example 2.22 — Election-week sentiment collection
- Example 2.22 — hands-on module
- Example 2.22 sketches the capture job for a campaign context
- Engagement counts, and applies bot filters before any hourly aggregate is shown to leaders
- Retention is capped at the campaign window
- Explore the chapter example module
- View files: `modules/chapter2/example22/`

---

## Case studies — climate and healthcare
- Climate and environmental programs combine ground sensors, satellite products
- Calibration schedules before dashboards are promised
- Healthcare collection spans wearables, remote monitoring devices
- Standardized identifiers are engineered alongside the sensors
- Together, these cases return to the chapter's central lesson

---

## Takeaways
- Stop defects at the instrument and protocol, not only in cleaning pipelines
- Document channel exclusions and integration keys before volume peaks
- Domain case studies show the same design questions in social, climate
- Those choices determine whether later chapters inherit a trustworthy dataset

---

## Next
- Complete the quiz for this part
- Complete the quiz to finish Chapter 2

