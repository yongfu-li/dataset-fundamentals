---
marp: true
title: Chapter 8 — Case studies
paginate: true
---

# Chapter 8 — Case studies

Abstract practices become concrete in domain settings

---

## Learning objectives
- Outline governed package sharing for clinical collaboration with role-based access

---

## Research, industry, and clinical stakes
- Research reuse fails when undocumented transforms hide in informal notes
- Industrial retraining fails when two runs use different sensor snapshots under the same
- Clinical collaboration fails when sensitive releases lack auditability and access control
- The case studies map practices to those failure modes

---

## Example 8.38 — Climate Agriculture Research Case Study
- Example 8.38 — hands-on module
- Socioeconomic indicators across teams
- One metadata template, one dictionary
- Explore the chapter example module
- View files: `modules/chapter8/example38/`

---

## Example 8.38 — listing

```
{
  "precipitation_mm": {
    "description": "Monthly precipitation in millimeters",
    "source": "Satellite-derived weather product",
    "unit": "mm",
    "method": "Interpolated before regional aggregation"
  }
}
```

---

## Example 8.39 — Predictive Maintenance Versioning Case Study
- Example 8.39 — hands-on module
- Example 8.39 centers on daily factory sensor feeds and failure-prediction retraining
- DVC tracks each raw batch, preprocessing output
- Explore the chapter example module
- View files: `modules/chapter8/example39/`

---

## Example 8.39 — listing

```
dvc add sensor_data/April_2024.csv
git commit -m "Added April 2024 sensor data"
dvc push
```

---

## Example 8.40 — Clinical Trial Collaboration Case Study
- Example 8.40 — hands-on module
- Example 8.40 involves clinical data managers, statisticians, regulators
- A governed catalog, release notes, role-restricted access
- Explore the chapter example module
- View files: `modules/chapter8/example40/`

---

## Example 8.40 — listing

```
quilt push my_dataset_v1
quilt push my_dataset_v2
```

---

## Cross-case lessons
- Shared templates and provenance scale multi-collector research
- Pinning data to models stabilizes industrial retraining
- Governed catalogs with audit logs stabilize regulated collaboration
- Across domains

---

## Takeaways
- Climate research needs coherent multi-source documentation
- The same chapter principles adapt to each constraint without requiring identical tooling

---

## Next
- Complete the quiz for this part
- Emerging ideas such as auditability mechanisms and edge-sensor version sync

