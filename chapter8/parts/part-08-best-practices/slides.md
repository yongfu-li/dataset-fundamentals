---
marp: true
title: Chapter 8 — Best practices
paginate: true
---

# Chapter 8 — Best practices

Pipelines fail when day-to-day habits are weak

---

## Learning objectives
- Choose Git LFS or DVC when plain Git cannot hold large binaries

---

## Documentation as a living checklist
- Every release should carry the same minimum set
- Update the checklist whenever the data change rather than rewriting definitions from
- Consistency across releases matters more than occasional long essays

---

## Example 8.30 — Codebook for Categorical Labels
- Example 8.30 — hands-on module
- Example 8.30 reminds teams to keep a codebook for categorical encodings
- Explore the chapter example module
- View files: `modules/chapter8/example30/`

---

## Example 8.30 — listing

```
{
  "age": {
    "type": "integer",
    "description": "Age of the individual in years",
    "range": "0-120",
    "unit": "years"
  },
  "gender": {
    "type": "categorical",
    "description": "Gender of the individual",
    "values": ["male", "female", "non-binary"]
  }
}
```

---

## Provenance and version-control habits
- Provenance should record sources, instruments, cleaning scripts, transforms, joins
- Dataset changes should be committed as logical units
- Git suits scripts and small text artifacts

---

## Example 8.33 — Descriptive Dataset Commit Message
- Example 8.33 — hands-on module
- Example 8.33 shows a useful commit message
- Explore the chapter example module
- View files: `modules/chapter8/example33/`

---

## Naming and collaborative practice
- Clear names encode project, version, date
- Separate raw, processed, intermediate, model, and output folders
- Use branches or separate experimental versions, sync regularly

---

## Example 8.34 — Large Binary Files Beyond Plain Git
- Example 8.34 — hands-on module
- Example 8.34 explains why plain Git is inefficient for large binaries and recommends Git
- That pattern keeps repositories performant
- Explore the chapter example module
- View files: `modules/chapter8/example34/`

---

## Takeaways
- Best practice is operational consistency
- Collaboration and compliance rest on review, sync habits

---

## Next
- Complete the quiz for this part
- The next part shows these practices in domain settings

