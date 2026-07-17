---
marp: true
title: Chapter 13 — Reproducible research workflows
paginate: true
---

# Chapter 13 — Reproducible research workflows

Licenses and documentation still leave an execution gap

---

## Learning objectives
- By the end of this part

---

## Workflow automation
- Containers so analyses can be independently verified
- Automation tools such as Make
- Consistency also requires a stable environment

---

## Example 13.29 — Automated Bioinformatics Workflow File
- Example 13.29 — hands-on module
- Example 13.29 captures a multi-step bioinformatics pipeline in a workflow definition
- A typical pipeline might involve data preprocessing, alignment, and statistical analysis
- With automation tools
- Explore the chapter example module
- View files: `modules/chapter13/example29/`

---

## Example 13.31 — Notebook Pipeline from Load to Plots
- Example 13.31 — hands-on module
- Jupyter notebooks integrate code, data, and documentation in a single document
- Example 13.31 sketches a typical analysis narrative
- Interactivity and sharing
- Explore the chapter example module
- View files: `modules/chapter13/example31/`

---

## Example 13.34 — Docker Image for Sequence Alignment Tools
- Example 13.34 — hands-on module
- Reproducibility depends on a stable computational environment
- Docker packages code, dependencies
- Example 13.34 pins bioinformatics tool versions inside a Docker image
- Explore the chapter example module
- View files: `modules/chapter13/example34/`

---

## Example 13.36 — Docker Image for ML Training Stack
- Example 13.36 — hands-on module
- The same container pattern applies to machine learning
- Example 13.36 freezes Python library versions for model training
- Shared images reduce “it works on my machine” failures across local, cluster
- Explore the chapter example module
- View files: `modules/chapter13/example36/`

---

## Takeaways
- Workflow files encode ordered
- Notebooks make methods and results literate and shareable
- Docker pins tools and libraries so bioinformatics and machine-learning stacks travel with
- Containers and workflow definitions close the execution gap left by licenses and prose

---

## Next
- Complete the quiz for this part
- Model regressions before results are published

