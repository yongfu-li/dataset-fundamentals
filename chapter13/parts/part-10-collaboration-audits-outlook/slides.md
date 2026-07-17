---
marp: true
title: Chapter 13 — Collaboration, audits, and outlook
paginate: true
---

# Chapter 13 — Collaboration, audits, and outlook

The chapter closes with team and future practice

---

## Learning objectives
- By the end of this part

---

## Cloud collaboration for scale
- Distributed teams need shared infrastructure for large datasets and scalable computation
- Cloud platforms such as Amazon Web Services, Google Cloud
- Chapter 12 covers storage architectures and platform operations

---

## Example 13.47 — Cloud VMs for Consistent Workflows
- Example 13.47 — hands-on module
- Example 13.47 provisions cloud virtual machines so collaborators share the same runtime
- Cloud-based VMs can be configured to run specific research workflows
- Data move between local machines, clusters, and the cloud
- Explore the chapter example module
- View files: `modules/chapter13/example47/`

---

## Example 13.50 — Environment Drift Breaks Identical Code
- Example 13.50 — hands-on module
- Even with mature tools, full reproducibility often fails
- Example 13.50 shows environment drift as a common pitfall
- Containerization tools such as Docker or virtual environments such as conda encapsulate
- Explore the chapter example module
- View files: `modules/chapter13/example50/`

---

## Example 13.55 — DVC Links Retraining to Data Versions
- Example 13.55 — hands-on module
- Maintaining audit trails is essential for checkable research
- Just as code is versioned with Git
- Example 13.55 shows DVC linking retraining runs to data versions
- Explore the chapter example module
- View files: `modules/chapter13/example55/`

---

## Climate case study and future outlook
- Large collaborative programs such as CMIP6 illustrate why these practices matter at
- Ethical licensing as research becomes more computational and collaborative
- The chapter’s tools are not optional polish

---

## Takeaways
- Cloud VMs and containers help teams share consistent runtimes at scale
- Environment drift remains a top failure mode when dependencies are unpinned
- Audit trails that link retraining to data versions make published models checkable
- Climate-scale collaborations show why FAIR, versioning
- The chapter closes by tying research-facing reproducibility to the operational foundations

---

## Next
- Complete the quiz for this part
- Complete the quiz for this part to finish Chapter 13

