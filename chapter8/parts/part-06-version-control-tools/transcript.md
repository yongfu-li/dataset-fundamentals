# Chapter 8 — Version control tools — transcript

**Clip id:** part-06-version-control-tools  
**Estimated duration:** 7 minutes  
**Sources:** `author/chapter8.tex` (§8.4.3–8.4.6), `modules/chapter8/example22/`, `modules/chapter8/example23/`, `modules/chapter8/example24/`

## Slide 1 — Chapter 8 — Version control tools

Git and DVC are not the only options. This part compares Quilt and DataHub for package-style catalogs and evolving feeds, then shows when Git LFS is the right layer for large training artifacts that still belong beside a Git repository.

## Slide 2 — Learning objectives

By the end of this part, learners should be able to describe Quilt’s package-style sharing, explain DataHub’s role for metadata and feed versions, state when Git LFS fits large files, and choose among tools using size, collaboration, and metadata needs.

## Slide 3 — Choosing among versioning tools

Practical choice depends on file size, collaboration model, metadata depth, and whether executable pipelines are required. Git suits small text-like assets; Git LFS keeps large files as pointers; DVC adds remotes and pipelines; Quilt emphasizes package catalogs; DataHub emphasizes discovery, ownership, and lineage across platforms.

## Slide 4 — Example 8.22 — Quilt for Genomic Dataset Versions

Example 8.22 uses Quilt so a genomics team can manage multiple annotated and preprocessed versions, browse packages, and select the correct release for each analysis. Package-style sharing helps distributed collaborators avoid informal file copies. The example 22 module for this chapter summarizes that catalog workflow.

## Slide 5 — Example 8.23 — DataHub for Real-Time Feed Versions

Example 8.23 shows a data engineering team using DataHub to track evolving real-time feeds so each version is documented and discoverable by downstream analysts. Catalog and lineage features matter when many producers and consumers share enterprise data platforms. Review the example 23 module for this chapter for the feed-versioning framing.

## Slide 6 — Git LFS for large binaries beside Git

Git Large File Storage stores heavy binaries outside the main repository while keeping lightweight pointers and familiar Git commands. It is a strong fit when models or datasets must version with code but would bloat an ordinary Git history. It tracks files rather than full data pipelines or rich dataset catalogs.

## Slide 7 — Example 8.24 — Git LFS for Large Training Artifacts

Example 8.24 applies Git LFS when training datasets and model files exceed ordinary Git limits. Pointers stay in Git while content lives in LFS storage, preserving history without an oversized clone. Learners can inspect the module files and listing for this example to see how LFS tracking is described in practice.

## Slide 8 — Matching tool to job

Prefer Quilt when teams need browsable package catalogs; DataHub when governance and discovery across platforms dominate; Git LFS when large artifacts must sit beside code without pipeline orchestration; DVC when remotes plus reproducible stages are central. Many organizations combine tools rather than forcing one system to do every job.

## Slide 9 — Takeaways

Tool choice follows workload shape. Quilt and DataHub strengthen sharing and discovery; Git LFS strengthens large-file versioning beside Git; DVC remains the pipeline-oriented companion introduced earlier. Misalignment—such as stuffing giant binaries into plain Git—creates the pain these tools were built to avoid.

## Slide 10 — Next

The next part makes tool choice operational: DVC in machine learning pipelines, stage definitions in pipeline YAML, and live automation patterns including continuous-integration updates.
