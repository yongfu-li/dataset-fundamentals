# Chapter 7 — Types of dataset bias — transcript

**Clip id:** clip-02-types-of-dataset-bias  
**Estimated duration:** 8 minutes  
**Sources:** `author/chapter7.tex` (§7.2), `modules/chapter7/example6/`, `modules/chapter7/example8/`, `modules/chapter7/example11/`, `modules/chapter7/example12/`

## Slide 1 — Chapter 7 — Types of dataset bias

Bias is easier to detect and mitigate when its mechanism is named precisely. This clip separates six common forms of dataset bias. Several can occur together, so the taxonomy is not a set of mutually exclusive boxes. It is a diagnostic vocabulary for asking where distortion entered and which intervention is likely to help.

## Slide 2 — Learning objectives

By the end of this clip, learners should distinguish sampling, measurement, historical, label, aggregation, and confirmation bias; recognize each form in a practical setting; and explain why collecting more data does not automatically correct every type of bias.

## Slide 3 — Sampling and measurement bias

Sampling bias occurs when collected records do not represent the population or conditions in which a model will operate. Measurement bias occurs when instruments, surveys, sensors, or observation procedures systematically distort what is recorded. Sampling changes who or what is observed; measurement changes the accuracy or meaning of the observation.

## Slide 4 — Example 7.12 — Facial Recognition System

Example 7.12 illustrates sampling bias. A facial recognition dataset dominated by light-skinned faces gives a model too little evidence about darker-skinned faces. Performance can therefore vary sharply across groups. Adding more images from the already dominant group increases dataset size without correcting the missing representation.

## Slide 5 — Example 7.14 — Creditworthiness System

Example 7.14 illustrates measurement bias through self-reported income. Respondents may overstate or withhold information because of privacy concerns or social desirability. The resulting values are not merely noisy if the error follows a systematic pattern across groups. Audit work must examine how a variable was produced, not only whether its column is complete.

## Slide 6 — Example 7.17 — Entrenched Societal Biases in Historical Records

Example 7.17 shows historical bias. Hiring, lending, judicial, and policing records may accurately document decisions that were themselves inequitable. A model can reproduce those patterns even when collection and measurement are technically correct. Historical data describes what happened, but it does not automatically define what should happen next.

## Slide 7 — Example 7.21 — Labeling Bias in Sentiment Annotation

Example 7.21 shows label bias. Annotators may interpret tone differently because of cultural background, ambiguous guidelines, or inconsistent handling of edge cases. If these disagreements systematically affect some dialects or groups, the target labels teach the model an unfair pattern. Clear guidance, diverse annotators, agreement checks, and adjudication reduce this risk.

## Slide 8 — Aggregation and confirmation bias

Aggregation bias appears when diverse subgroups are treated as homogeneous and important differences are hidden by an overall average. Confirmation bias appears when data is selected or interpreted to support an existing belief while contradictory evidence is neglected. One masks variation through pooling; the other narrows evidence through expectation.

## Slide 9 — Diagnosing overlapping mechanisms

A single system may combine several mechanisms. Historical policing records may reflect unequal enforcement, oversample heavily policed areas, use subjective labels, and encourage confirmation of an assumed crime pattern. Diagnosis should trace the chain from population and collection through measurement, labeling, aggregation, and analyst decisions rather than assigning one convenient label.

## Slide 10 — Takeaways

Sampling bias concerns representation, measurement bias concerns capture, historical bias concerns inherited inequity, and label bias concerns target construction. Aggregation bias hides subgroup differences, while confirmation bias filters evidence through prior beliefs. Precise diagnosis guides intervention and prevents the mistaken assumption that more data alone will solve the problem.

## Slide 11 — Next

The next clip turns this taxonomy into measurable evidence. It introduces distribution comparisons, statistical tests, proxy correlations, and disparate-impact ratios for screening datasets and model outcomes.
