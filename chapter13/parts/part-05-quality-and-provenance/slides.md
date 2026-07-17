---
marp: true
title: Chapter 13 — Data quality and provenance
paginate: true
---

# Chapter 13 — Data quality and provenance

FAIR sharing without quality and provenance still yields fragile science

---

## Learning objectives
- Context; and describe how tracking updates preserves integrity across dataset versions

---

## Quality standards for reproducibility
- Data quality dimensions and cleaning procedures are treated in earlier chapters
- For reproducibility
- Completeness, consistency, and accuracy support that goal
- Not silent omission

---

## Example 13.18 — Documenting Clinical Trial Dropouts
- Example 13.18 — hands-on module
- Example 13.18 shows completeness documentation for missing participants
- In clinical trials
- Future users need those facts to interpret results and to repeat the analysis under
- Explore the chapter example module
- View files: `modules/chapter13/example18/`

---

## Provenance as research evidence
- Data provenance is the documentation and tracking of origin and transformations throughout
- It records where data came from, how they were collected, what processes were applied
- Provenance provides transparency and accountability so researchers can verify credibility
- The emphasis here is evidence for reproducible research and open science

---

## Example 13.24 — Genomics Provenance for Sequencing Pipelines
- Example 13.24 — hands-on module
- Example 13.24 shows the provenance fields a genomics study should record
- Provenance should capture the sequencing technology, preprocessing steps
- Without such documentation
- Explore the chapter example module
- View files: `modules/chapter13/example24/`

---

## Example 13.25 — Tracking Dataset Updates Over Time
- Example 13.25 — hands-on module
- Provenance also improves traceability when datasets change
- Example 13.25 shows that if a dataset undergoes modifications or updates
- In regulated fields such as healthcare or finance
- Explore the chapter example module
- View files: `modules/chapter13/example25/`

---

## Takeaways
- Quality decisions must be documented if published analyses are to be repeated faithfully
- Completeness includes recording dropouts and other missingness with analytical impact
- Provenance records origin, transforms, context
- Tracking updates links versions so integrity and audits remain possible
- Distinguish Chapter 12 platform lineage from this chapter’s research-facing provenance

---

## Next
- Complete the quiz for this part
- The next part covers open-data licensing, balancing openness with privacy

