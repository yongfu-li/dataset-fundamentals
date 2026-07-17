---
marp: true
title: Chapter 8 — DVC pipelines and automation
paginate: true
---

# Chapter 8 — DVC pipelines and automation

Tool choice becomes operational when pipelines reproduce training from pinned data

---

## Learning objectives
- Outline a live DVC workflow from init through pull for collaborators

---

## DVC inside machine learning workflows
- Encodes transformation and training steps so experiments remain reproducible
- Teams share references rather than duplicating large files

---

## Example 8.25 — DVC in an ML Pipeline
- Example 8.25 — hands-on module
- Storage burden stays on remotes
- Explore the chapter example module
- View files: `modules/chapter8/example25/`

---

## Pipeline stages as executable history
- A DVC pipeline declares stages with commands, dependencies
- When inputs or code change
- That dependency graph is the operational heart of reproducibility

---

## Example 8.28 — DVC Pipeline Stages for Training
- Example 8.28 — hands-on module
- Example 8.28 defines preprocessing, training
- Explore the chapter example module
- View files: `modules/chapter8/example28/`

---

## Example 8.28 — listing

```
stages:
  preprocessing:
    cmd: python preprocess.py data/raw_data.csv data/preprocessed_data.csv
    deps:
      - data/raw_data.csv
    outs:
      - data/preprocessed_data.csv
  training:
    cmd: python train_model.py data/preprocessed_data.csv models/model.pkl
    deps:
      - data/preprocessed_data.csv
    outs:
      - models/model.pkl
  evaluating:
    cmd: python evaluate_model.py models/model.pkl
    deps:
      - models/model.pkl
```

---

## Continuous integration for dataset updates
- Trigger training when code or data lands on a protected branch
- Automation reduces forgotten manual steps and keeps shared remotes current for the team’s

---

## Example 8.29 — Live Demonstration of DVC Automation
- Example 8.29 — hands-on module
- Example 8.29 outlines a live walkthrough
- Explore the chapter example module
- View files: `modules/chapter8/example29/`

---

## Example 8.29 — listing

```
git init
dvc init
dvc remote add -d myremote s3://mybucket/datasets
```

---

## Takeaways
- DVC pipelines turn versioned data into reproducible workflows
- Stage YAML records commands, dependencies, and outputs
- Together they close the gap between “we have a dataset” and “we can retrain from the same

---

## Next
- Complete the quiz for this part
- The next part turns documentation and versioning into day-to-day operating practice

