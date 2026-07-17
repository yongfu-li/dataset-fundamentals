# Chapter 8 — DVC pipelines and automation — transcript

**Clip id:** part-07-dvc-pipelines-and-automation  
**Estimated duration:** 8 minutes  
**Sources:** `author/chapter8.tex` (§8.4.7–8.4.8), `modules/chapter8/example25/`, `modules/chapter8/example28/`, `modules/chapter8/example29/`

## Slide 1 — Chapter 8 — DVC pipelines and automation

Tool choice becomes operational when pipelines reproduce training from pinned data. This part walks DVC in a machine learning pipeline, pipeline stage definitions, and live automation patterns including continuous-integration updates that keep data, models, and code aligned.

## Slide 2 — Learning objectives

By the end of this part, learners should be able to explain how DVC tracks data and models beside code, read a multi-stage pipeline definition, describe continuous-integration dataset updates, and outline a live DVC workflow from init through pull for collaborators.

## Slide 3 — DVC inside machine learning workflows

DVC records data and model changes alongside the code repository, supports remote storage backends, and encodes transformation and training steps so experiments remain reproducible. Teams share references rather than duplicating large files, while still retrieving the exact bytes an earlier run used.

## Slide 4 — Example 8.25 — DVC in an ML Pipeline

Example 8.25 embeds DVC in a machine learning pipeline so data and model versions travel with code, workflows automate, and storage burden stays on remotes. Inspect the module files and listing for this example to see how pipeline-oriented tracking is summarized for learners.

## Slide 5 — Pipeline stages as executable history

A DVC pipeline declares stages with commands, dependencies, and outputs—from raw download through preprocessing and training to evaluation. When inputs or code change, the system can re-run affected stages so results stay tied to the versions that produced them. That dependency graph is the operational heart of reproducibility.

## Slide 6 — Example 8.28 — DVC Pipeline Stages for Training

Example 8.28 defines preprocessing, training, and evaluating stages with explicit dependencies and outputs. Learners can inspect the YAML listing and module files for this example to see how commands, inputs, and artifacts are declared. The structure makes it clear which files regenerate when upstream data changes.

## Slide 7 — Continuous integration for dataset updates

Continuous integration systems can stage new data, commit lightweight references, push remotes, and trigger training when code or data lands on a protected branch. Automation reduces forgotten manual steps and keeps shared remotes current for the team’s experiments and validations.

## Slide 8 — Example 8.29 — Live Demonstration of DVC Automation

Example 8.29 outlines a live walkthrough: initialize Git and DVC, configure remote storage, add and push a dataset, define preprocess and train stages, then show collaborators pulling matching code and data. Inspect the module files and command listings for this example to follow the end-to-end sequence without inventing steps.

## Slide 9 — Takeaways

DVC pipelines turn versioned data into reproducible workflows. Stage YAML records commands, dependencies, and outputs; continuous integration keeps updates automatic; live init-add-push-pull loops make collaboration concrete. Together they close the gap between “we have a dataset” and “we can retrain from the same snapshot.”

## Slide 10 — Next

The next part turns documentation and versioning into day-to-day operating practice: living codebooks, provenance habits, descriptive commits, naming conventions, and realistic handling of large binaries and access control.
