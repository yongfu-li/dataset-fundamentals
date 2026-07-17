---
marp: true
title: Chapter 8 — Version control basics
paginate: true
---

# Chapter 8 — Version control basics

Documentation freezes meaning at a point in time; version control tracks how the data itself changes

---

## Learning objectives
- Describe how DVC tracks large datasets stored outside Git

---

## What dataset version control provides
- Dataset version control tracks and manages evolving releases so changes from cleaning
- Collaborating without silent overwrites

---

## Traditional versus automated approaches
- Traditional practice relies on manual names such as versioned filenames or dated folders
- It is simple for tiny projects but lacks granularity, automation, and reliable history
- Scale better for frequent updates and multi-user work, at the cost of a learning curve

---

## Git for small, text-like datasets
- Git is a distributed system designed for source code
- Combined with careful file choices
- Each update becomes a commit with an author and message

---

## Example 8.20 — CSV Dataset Commits in Git
- Example 8.20 — hands-on module
- Example 8.20 stores a CSV dataset in a Git repository and creates a new commit whenever
- That pattern works when files stay modest in size and change alongside analysis code
- Explore the chapter example module
- View files: `modules/chapter8/example20/`

---

## DVC for large remote-backed data
- DVC extends Git-centered workflows for large datasets and models
- Data files live in local or cloud storage while lightweight references remain in the
- Collaborators can pull a specific dataset version so training and analysis use the same

---

## Example 8.21 — DVC Tracking of Cloud-Stored Datasets
- Example 8.21 — hands-on module
- Example 8.21 places a large corpus in cloud object storage while DVC tracks versions
- Analysts keep history and collaboration benefits without stuffing binaries into Git itself
- Explore the chapter example module
- View files: `modules/chapter8/example21/`

---

## Takeaways
- Version control preserves change history for datasets, not only for code
- Manual folder naming does not scale; automated tools do, with some training cost
- Git fits small text-like tables

---

## Next
- Complete the quiz for this part
- Shows when Git LFS is the right layer for large training artifacts

