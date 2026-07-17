# Chapter 11 — Crowdsourcing versus expert annotation — transcript

**Clip id:** part-09-crowd-versus-expert
**Estimated duration:** 7 minutes
**Sources:** `author/chapter11.tex` (§11.9.1–11.9.3), `modules/chapter11/example16/`, `modules/chapter11/example17/`, `modules/chapter11/example20/`, `modules/chapter11/example22/`

## Slide 1 — Chapter 11 — Crowdsourcing versus expert annotation

Representation learning and weak labels still leave a workforce question: who should annotate which items? This part compares crowd scale, cost, and turnaround with expert quality for radiology, legal, and other high-stakes schemas.

## Slide 2 — Learning objectives

By the end of this part, learners should be able to list operational advantages of crowdsourcing for simple schemas; explain quality and reliability challenges of crowd labels; contrast expert strengths on domain-critical tasks; and recognize cost and scalability limits of expert-only staffing.

## Slide 3 — Crowdsourcing advantages

For annotation, crowdsourcing offers scale, lower per-item cost, fast turnaround, and diverse raters for subjective tasks. Those advantages matter most when the schema is simple, guidelines are clear, and gold checks from Chapter 4 are in place. This section emphasizes when experts must own labels rather than restating platform tutorials.

## Slide 4 — Example 11.16 — Crowd Scale for Attribute Labels

Example 11.16 shows crowd scale for high-volume attribute labeling. A vision team needs millions of face images tagged with age band, expression, and accessories. Crowdsourcing platforms distribute the schema across many workers so labeling finishes in days rather than months. The example 16 module for this chapter frames that scale pattern.

## Slide 5 — Example 11.17 — Crowd Cost for Product Images

Example 11.17 contrasts crowd cost with expert-only product labeling. A retailer needs thousands of product photos labeled for category and attributes. Paying only domain experts would blow the budget; crowd microtasks make the volume affordable when gold checks are in place. The example 17 module for this chapter summarizes that cost trade-off.

## Slide 6 — Crowdsourcing challenges

Crowd workers may be inconsistently trained or motivated, producing noisy annotations. Mitigation requires ground-truth checks, gold questions, and redundancy. Platform ethics and inter-annotator agreement controls from earlier chapters should be in place before scaling crowd labels into training sets.

## Slide 7 — Example 11.20 — Expert Quality for Radiology Labels

Expert annotation uses specialists for tasks that need deep domain knowledge. Example 11.20 shows why expert quality matters for clinical images: when labeling tumor boundaries on MRI slices, board-certified radiologists produce higher-precision masks than general crowd workers who lack clinical training. The example 20 module for this chapter covers that radiology quality gap.

## Slide 8 — Example 11.22 — Legal Experts for Contract Clauses

Experts also improve consistency on complex legal schemas. Example 11.22 keeps legal clause labeling with domain experts: in contract classification, legal experts identify operative clauses and defined terms that non-experts routinely misread, reducing label noise before models train. The example 22 module for this chapter describes that legal expert path.

## Slide 9 — Expert challenges

Expert annotation is expensive and hard to scale because skilled professionals are scarce. Careful analysis also slows throughput. Pure expert staffing therefore struggles on million-item corpora even when quality is excellent, which motivates hybrid designs in the next part.

## Slide 10 — Takeaways

Crowds excel at scale, cost, and speed on clear schemas with gold checks. Experts excel at precision and consistency on radiology, legal, and other high-stakes tasks. Expert-only staffing hits cost and capacity walls; the chapter next shows hybrid pipelines that combine both.

## Slide 11 — Next

The next part covers hybrid annotation pipelines: expert gold then crowd scale-up, splitting routine objects from pathology, active routing of hard cases, and cost–quality–speed benefits.
