# Chapter 4 — Best practices for annotation — transcript

**Part id:** part-09-best-practices  
**Estimated duration:** 6 minutes  
**Sources:** `author/chapter4.tex` (§4.8)

## Slide 1 — Chapter 4 — Best practices for annotation

Use cases illustrate stakes; day-to-day habits sustain quality. This part turns the quality-control skeleton into operational practice: versioned guidelines with exemplars, calibration and drift audits, diversity checks, and pre-labeling used as proposals rather than shortcuts.

## Slide 2 — Learning objectives

By the end of this part, you should draft guideline habits with positive and negative exemplars, describe calibration sessions and drift audits during active labeling, apply diversity and bias-reduction checks on labeled slices, and use pre-labeling only with audit thresholds met.

## Slide 3 — Guidelines and exemplars

Strong annotation programs share a common skeleton: define the schema, pilot on a small set, measure inter-annotator agreement, adjudicate, then scale with ongoing audits. Guidelines specify class definitions, edge cases, and prohibited inferences. Include positive and negative examples for each label and document how to handle ambiguity—unknown or needs-review classes reduce forced guesses. Version the guideline document when schemas change, retrain annotators on diffs, and store exemplar items in the tool as inline references so new labelers see canonical decisions.

## Slide 4 — Feedback, audits, and drift checks

Run regular calibration sessions while labeling is active; share adjudicated disagreements anonymously so the team learns without blame. Track per-annotator agreement and audit-sample error rates, coach low outliers before they contaminate large batches, schedule re-audit of random batches after any guideline or tool change, and insert repeated gold items to detect drift over long projects.

## Slide 5 — Diversity and bias reduction

Where labels encode social constructs such as sentiment, toxicity, or demographics, apply labeler-bias mitigations and fairness practice from earlier chapters. In practice: include diverse reviewers, test subgroup agreement, and audit labeled slices on a fixed cadence. Diversity is not only a collection concern—it also shapes whether annotation teams apply tags consistently across populations represented in the data.

## Slide 6 — Pre-labeling and effort reduction

Use pre-labeling to propose candidates, not to skip review, until error rates on audit sets meet your threshold. Combine active learning, pre-labeling, and crowdsourcing only with quality-control gates so efficiency gains do not trade away fairness or accuracy. A model proposal accepted without correction is still a human decision and should appear in audit samples.

## Slide 7 — Takeaways

Versioned guidelines with inline exemplars anchor every labeler. Calibration, gold items, and re-audits catch drift after tool or schema changes. Pre-labeling saves time only when proposals stay under human review with measured error rates.

## Slide 8 — Next

Pause for the quiz, then continue to the final part on emerging topics—AI-assisted labeling, synthetic and programmatic labels, real-time annotation, and the bridge to data cleaning in Chapter 5.
