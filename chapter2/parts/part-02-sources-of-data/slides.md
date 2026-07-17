---
marp: true
title: Chapter 2 — Sources of data
paginate: true
---

# Chapter 2 — Sources of data

A collection plan starts with purpose; the next decision is where records originate

---

## Learning objectives
- Distinguish primary, secondary
- Real-time source types, summarize the strengths and risks of each
- Explain why source choice and structure choice are orthogonal planning decisions

---

## Where do records come from?
- Chapter 1 classified datasets by structure and temporal behavior
- This section answers a different question: where do the records come from?
- Real-time streams that refresh with little delay
- A source choice and a structure choice are independent

---

## Primary data
- Primary data are measured directly for the present study through surveys
- The team retains control over sampling, wording, and quality checks
- The trade-off is time, cost, and the risk of human bias during interviews or observation

---

## Example 2.2 — Primary collection in a clinical monitoring study
- Example 2.2 — hands-on module
- Example 2.2 shows a primary clinical protocol designed around a recovery question
- A hospital study of post-operative recovery may collect vital signs every four hours from
- The protocol defines devices, recording intervals
- Explore the chapter example module
- View files: `modules/chapter2/example2/`

---

## Secondary data
- Secondary data were previously collected, processed, and published by others
- They are attractive when budgets are tight or when historical coverage matters
- Challenges include schema mismatch, incomplete provenance

---

## Example 2.3 — Secondary census extract for store siting
- Example 2.3 — hands-on module
- Example 2.3 shows a secondary reuse path that looks cheaper until schema mismatch appears
- A retailer considering new store locations downloads a public census extract with
- The download is fast and free
- Explore the chapter example module
- View files: `modules/chapter2/example3/`

---

## Real-time data
- Real-time data are collected and made available with minimal delay
- Such feeds usually produce dynamic datasets
- Clock drift before the stream becomes a trustworthy analytical table

---

## Takeaways
- Primary sources buy relevance and control at the price of cost and time
- Secondary sources buy speed and scale at the price of fit and provenance checks
- Real-time sources buy timeliness at the price of infrastructure and integration discipline
- Match the source class to the decision timeline and the evidence standard the study

---

## Next
- Complete the quiz for this part
- Complete the quiz, then continue to the next part on surveys, observation

