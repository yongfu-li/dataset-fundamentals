# Chapter 13 — Reproducible research workflows — transcript

**Clip id:** part-07-reproducible-workflows
**Estimated duration:** 7 minutes
**Sources:** `author/chapter13.tex` (§13.7), `modules/chapter13/example29/`, `modules/chapter13/example31/`, `modules/chapter13/example34/`, `modules/chapter13/example36/`

## Slide 1 — Chapter 13 — Reproducible research workflows

Licenses and documentation still leave an execution gap. Reproducible workflows capture ordered steps, notebooks, and containerized environments so others can rerun analyses. This part covers workflow files, Jupyter notebooks, and Docker for fixed tool stacks.

## Slide 2 — Learning objectives

By the end of this part, learners should be able to explain how workflow files automate multi-step pipelines; describe Jupyter notebooks as literate pipelines from load to plots; recognize Docker images that pin bioinformatics tools; and apply the same container idea to machine-learning training stacks.

## Slide 3 — Workflow automation

Reproducible research workflows couple datasets with automation, notebooks, version control, and containers so analyses can be independently verified. Automation tools such as Make, Snakemake, or Nextflow define a sequence of jobs with clear dependencies so the same procedure runs regardless of who executes it or when. Consistency also requires a stable environment: the same configurations, tools, and dependency versions across stages.

## Slide 4 — Example 13.29 — Automated Bioinformatics Workflow File

Example 13.29 captures a multi-step bioinformatics pipeline in a workflow definition. A typical pipeline might involve data preprocessing, alignment, and statistical analysis. With automation tools, the entire process can be captured in a workflow file so each researcher follows the same procedure without ad-hoc manual intervention. The example 29 module for this chapter summarizes that workflow-file pattern.

## Slide 5 — Example 13.31 — Notebook Pipeline from Load to Plots

Jupyter notebooks integrate code, data, and documentation in a single document. Example 13.31 sketches a typical analysis narrative: data loading, cleaning, exploratory analysis, model fitting, and result visualization, with decisions documented beside executable code. Interactivity and sharing—including static exports or runnable environments—help collaboration, but large data and environment drift still require version control and containers. The example 31 module for this chapter covers that notebook pipeline.

## Slide 6 — Example 13.34 — Docker Image for Sequence Alignment Tools

Reproducibility depends on a stable computational environment. Docker packages code, dependencies, and system settings into a container that can run consistently across machines. Example 13.34 pins bioinformatics tool versions inside a Docker image, bundling preprocessing software and specific versions such as BWA for sequence alignment or Samtools for manipulating alignments. The example 34 module for this chapter frames that pinned-tool container.

## Slide 7 — Example 13.36 — Docker Image for ML Training Stack

The same container pattern applies to machine learning. Example 13.36 freezes Python library versions for model training: a Docker image can bundle dependencies for a training script and fix library versions such as TensorFlow, NumPy, and pandas. Shared images reduce “it works on my machine” failures across local, cluster, and cloud runs. The example 36 module for this chapter covers that ML training stack image.

## Slide 8 — Takeaways

Workflow files encode ordered, dependency-aware pipelines so analyses run the same way each time. Notebooks make methods and results literate and shareable, but still need environment discipline. Docker pins tools and libraries so bioinformatics and machine-learning stacks travel with the analysis. Containers and workflow definitions close the execution gap left by licenses and prose alone.

## Slide 9 — Next

The next part covers continuous integration and automated tests that catch broken preprocessing, environment mismatches, and model regressions before results are published.
