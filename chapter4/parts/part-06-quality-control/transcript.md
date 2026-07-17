# Chapter 4 — Quality control in annotation — transcript

**Part id:** part-06-quality-control  
**Estimated duration:** 8 minutes  
**Sources:** `author/chapter4.tex` (§4.5), `modules/chapter4/example30/`, `modules/chapter4/example31/`, `modules/chapter4/example32/`

## Slide 1 — Chapter 4 — Quality control in annotation

Tools speed labeling, but inconsistent labels teach the wrong decision boundaries. This part covers common annotation errors, inter-annotator agreement measures, gold-set audit metrics, and annotator training habits that keep drift in check.

## Slide 2 — Learning objectives

By the end of this part, you should name frequent annotation failure modes, interpret common inter-annotator agreement coefficients, distinguish IAA from gold-set precision and recall, and describe training habits that sustain label quality during long projects.

## Slide 3 — Why quality control matters

Label quality bounds model performance in supervised learning. Inconsistent or missing labels teach the wrong decision boundaries: a missed pedestrian box becomes a false negative at deployment, and a missed lesion in clinical imaging can have patient-safety implications. Quality control is therefore part of dataset governance, not optional polish. Effective programs combine clear guidelines, pilot rounds, agreement measurement, adjudication of disagreements, gold-set audits, and annotator training before and during full-scale labeling.

## Slide 4 — Common annotation errors

Frequent failure modes include inconsistent class names, missed instances, boundary slack in boxes or masks, and subjective bias in sentiment or toxicity labels. Guidelines with positive and negative examples reduce but do not eliminate these errors; audits on a held-out review set catch drift during long projects.

## Slide 5 — Example 4.30 — Inconsistent class names

Example 4.30 shows a naming inconsistency that looks minor but splits the class signal. One annotator tags pets as “dog” while another uses “puppy” for young dogs. Without a guideline that collapses those strings to one class, training treats them as distinct categories and evaluation counts false disagreements. Open the example 30 module for this chapter to see how schema hygiene prevents split classes.

## Slide 6 — Inter-annotator agreement (Table 4.4)

Inter-annotator agreement measures consistency among annotators labeling the same items. High agreement supports reliable guidelines and usable gold labels; low agreement often signals ambiguous schemas or inadequate training. Table 4.4 summarizes common chance-corrected coefficients. Cohen’s kappa suits two raters on nominal labels. Fleiss’ kappa extends the idea to more than two raters. Krippendorff’s alpha handles ordinal or mixed levels and missing ratings with flexible distance metrics. Values near one indicate strong agreement beyond chance; values near zero are consistent with chance agreement.

## Slide 7 — Example 4.31 — Low kappa triggers guideline revision

Example 4.31 shows how low agreement should stop a scale-up rather than be ignored. On a named-entity pilot, two annotators reach kappa near 0.35 on organization spans because the guideline is unclear about subsidiaries versus parent brands. The team revises examples and re-trains before labeling the full corpus. Clear instructions, calibration rounds, and adjudication remain the primary remedies when agreement stays low. Open the example 31 module for this chapter to trace the pilot decision.

## Slide 8 — Gold-set audit metrics

Inter-annotator agreement measures agreement among annotators; gold-set metrics measure correctness against adjudicated reference labels. After adjudication, teams track label-level precision and recall on an audit set: precision captures spurious labels; recall captures missed instances; F1 balances both when false positives and false negatives are costly.

## Slide 9 — Example 4.32 — Annotator audit versus model test

Example 4.32 separates labeler metrics from model test scores. On a held-out review batch, an annotator’s box labels achieve precision 0.92 and recall 0.81 against the gold set. Those figures evaluate the labeler, not the detector trained later on the released corpus; model metrics on a test split answer a different question. Open the example 32 module for this chapter to compare audit versus evaluation metrics.

## Slide 10 — Training annotators

Train annotators with written guidelines, worked examples, and a short qualification set before production labeling. Regular feedback sessions and spot audits keep drift in check; incentive schemes should reward accuracy and agreement, not raw speed alone. Specialist programs—such as clinical audio with physician panels on the tool path—illustrate putting domain experts inside the workflow, not only in a final audit.

## Slide 11 — Takeaways

Fix class-name hygiene, missed instances, and subjective drift with guidelines plus audits. Use IAA to decide whether to scale; use gold-set precision and recall to score individual labelers. Train, calibrate, and re-audit after any guideline or tool change.

## Slide 12 — Next

Complete the quiz, then continue to the next part on challenges in annotation—scale, bias, ethics, and rare events.
