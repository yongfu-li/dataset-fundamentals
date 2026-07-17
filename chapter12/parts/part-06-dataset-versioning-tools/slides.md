---
marp: true
title: Chapter 12 — Dataset versioning tools
paginate: true
---

# Chapter 12 — Dataset versioning tools

Chapter 8 covered team-scale documentation and Git-oriented version control

---

## Learning objectives
- Iceberg snapshot rollback through Examples 12.14 through 12.17

---

## Collaborative workflows at scale
- At scale, multiple engineers and models share the same raw and feature tables
- Without immutable version identifiers
- Teams pin training runs to explicit dataset revisions or snapshot IDs

---

## Example 12.14 — DVC Remotes on Object Storage
- Example 12.14 — hands-on module
- For machine-learning projects whose primary assets are still files beside code
- Example 12.14 ties DVC metadata to cloud remotes
- Explore the chapter example module
- View files: `modules/chapter12/example14/`

---

## Example 12.15 — Pachyderm Partition Recompute
- Example 12.15 — hands-on module
- Pachyderm targets data-driven pipelines with automatic versioning of inputs and outputs
- Example 12.15 shows pipeline versioning that recomputes only changed partitions
- Explore the chapter example module
- View files: `modules/chapter12/example15/`

---

## Example 12.16 — Delta Lake Time Travel on Object Stores
- Example 12.16 — hands-on module
- Delta Lake, Apache Hudi
- Example 12.16 uses Delta Lake
- Explore the chapter example module
- View files: `modules/chapter12/example16/`

---

## Example 12.17 — Iceberg Snapshot Rollback
- Example 12.17 — hands-on module
- Snapshot-based versioning captures a point-in-time view of a table for rollback and
- Example 12.17 rolls back via table snapshots
- Explore the chapter example module
- View files: `modules/chapter12/example17/`

---

## File-level versus table-level versioning
- DVC remains the file-and-pipeline companion when code, models
- Lakehouse formats are the scalable counterpart to file-level DVC commits
- Regulated domains still need an auditable history of which snapshot trained which model

---

## Takeaways
- Platform-scale versioning extends Chapter 8 discipline to object stores and lakehouse
- DVC remotes record versions while cloud storage holds bytes
- Pachyderm recomputes only changed partitions
- Delta Lake and Iceberg provide time travel and snapshot rollback without full warehouse
- Pin experiments to explicit snapshots rather than latest

---

## Next
- Complete the quiz for this part
- The next part covers why versioning matters at scale

