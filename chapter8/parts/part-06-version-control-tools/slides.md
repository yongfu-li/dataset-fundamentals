---
marp: true
title: Chapter 8 — Version control tools
paginate: true
---

# Chapter 8 — Version control tools

Git and DVC are not the only options

---

## Learning objectives
- Choose among tools using size, collaboration, and metadata needs

---

## Choosing among versioning tools
- Practical choice depends on file size, collaboration model, metadata depth
- Git suits small text-like assets

---

## Example 8.22 — Quilt for Genomic Dataset Versions
- Example 8.22 — hands-on module
- Select the correct release for each analysis
- Package-style sharing helps distributed collaborators avoid informal file copies
- Explore the chapter example module
- View files: `modules/chapter8/example22/`

---

## Example 8.23 — DataHub for Real-Time Feed Versions
- Example 8.23 — hands-on module
- Example 8.23 shows a data engineering team using DataHub to track evolving real-time feeds
- Catalog and lineage features matter when many producers and consumers share enterprise
- Explore the chapter example module
- View files: `modules/chapter8/example23/`

---

## Git LFS for large binaries beside Git
- Git Large File Storage stores heavy binaries outside the main repository while keeping
- It is a strong fit when models or datasets must version with code but would bloat an
- It tracks files rather than full data pipelines or rich dataset catalogs

---

## Example 8.24 — Git LFS for Large Training Artifacts
- Example 8.24 — hands-on module
- Example 8.24 applies Git LFS when training datasets and model files exceed ordinary Git
- Pointers stay in Git while content lives in LFS storage
- Explore the chapter example module
- View files: `modules/chapter8/example24/`

---

## Matching tool to job
- Prefer Quilt when teams need browsable package catalogs
- Many organizations combine tools rather than forcing one system to do every job

---

## Takeaways
- Tool choice follows workload shape
- Quilt and DataHub strengthen sharing and discovery
- Misalignment

---

## Next
- Complete the quiz for this part
- The next part makes tool choice operational

