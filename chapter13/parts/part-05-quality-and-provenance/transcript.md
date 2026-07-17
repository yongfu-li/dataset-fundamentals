# Chapter 13 — Data quality and provenance — transcript

**Clip id:** part-05-quality-and-provenance
**Estimated duration:** 7 minutes
**Sources:** `author/chapter13.tex` (§13.4.3–13.5), `modules/chapter13/example18/`, `modules/chapter13/example24/`, `modules/chapter13/example25/`

## Slide 1 — Chapter 13 — Data quality and provenance

FAIR sharing without quality and provenance still yields fragile science. This part covers data-quality standards for reproducibility and research-facing provenance that tracks how datasets were created and updated. Platform-scale lineage catalogs remain a Chapter 12 operational topic; here provenance is evidence for open, checkable research.

## Slide 2 — Learning objectives

By the end of this part, learners should be able to explain why quality decisions must be documented for reproducibility; illustrate completeness documentation with clinical trial dropouts; define provenance as origin, transforms, and context; and describe how tracking updates preserves integrity across dataset versions.

## Slide 3 — Quality standards for reproducibility

Data quality dimensions and cleaning procedures are treated in earlier chapters. For reproducibility, quality decisions—imputation, exclusion, correction—must be documented so the published analysis can be repeated under the same conditions. Completeness, consistency, and accuracy support that goal. Completeness in particular requires clear documentation of missing data and the reasons for absence, not silent omission.

## Slide 4 — Example 13.18 — Documenting Clinical Trial Dropouts

Example 13.18 shows completeness documentation for missing participants. In clinical trials, if certain participants dropped out of the study, that should be noted in the dataset along with the impact on the analysis. Future users need those facts to interpret results and to repeat the analysis under comparable conditions. The example 18 module for this chapter covers that dropout documentation pattern.

## Slide 5 — Provenance as research evidence

Data provenance is the documentation and tracking of origin and transformations throughout a dataset’s lifecycle. It records where data came from, how they were collected, what processes were applied, and the decisions made during processing. Provenance provides transparency and accountability so researchers can verify credibility and locate biases introduced during cleaning or errors from specific analytical steps. Unlike Chapter 12’s enterprise lineage catalogs, the emphasis here is evidence for reproducible research and open science.

## Slide 6 — Example 13.24 — Genomics Provenance for Sequencing Pipelines

Example 13.24 shows the provenance fields a genomics study should record. Provenance should capture the sequencing technology, preprocessing steps, and curation decisions so future researchers can validate findings or repeat the analysis on related datasets. Without such documentation, a dataset becomes a black box whose reliability cannot be assessed. The example 24 module for this chapter summarizes those genomics provenance fields.

## Slide 7 — Example 13.25 — Tracking Dataset Updates Over Time

Provenance also improves traceability when datasets change. Example 13.25 shows that if a dataset undergoes modifications or updates, tracking those changes preserves integrity and lets future users understand how the dataset evolved. In regulated fields such as healthcare or finance, provenance further supports auditability and compliance by showing ethical collection and appropriate processing. The example 25 module for this chapter frames update tracking over time.

## Slide 8 — Takeaways

Quality decisions must be documented if published analyses are to be repeated faithfully. Completeness includes recording dropouts and other missingness with analytical impact. Provenance records origin, transforms, context, and processing decisions as research evidence. Tracking updates links versions so integrity and audits remain possible. Distinguish Chapter 12 platform lineage from this chapter’s research-facing provenance record.

## Slide 9 — Next

The next part covers open-data licensing, balancing openness with privacy, and ethical risks such as bias and community control over shared data.
