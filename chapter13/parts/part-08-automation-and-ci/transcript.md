# Chapter 13 — Automation and continuous integration — transcript

**Clip id:** part-08-automation-and-ci
**Estimated duration:** 6 minutes
**Sources:** `author/chapter13.tex` (§13.8), `modules/chapter13/example37/`, `modules/chapter13/example38/`, `modules/chapter13/example39/`

## Slide 1 — Chapter 13 — Automation and continuous integration

Manual reruns drift. Continuous integration and automated tests catch broken preprocessing, environment mismatches, and model regressions before results are published. This part covers CI checks and automated workflow documentation.

## Slide 2 — Learning objectives

By the end of this part, learners should be able to explain continuous integration for research pipelines; describe CI checks on preprocessing and inputs; recognize cross-environment consistency tests; and state why CI should retest model training after updates.

## Slide 3 — CI for reproducible research

Continuous integration automatically integrates contributor changes into a shared repository and, for research workflows, tests and validates changes to code or data pipelines. Services such as GitHub Actions, GitLab CI, and Travis CI can run tests whenever code or data pipelines change. The goal is to catch silent breaks early: a small edit should not quietly alter published results.

## Slide 4 — Example 13.37 — CI Checks Preprocessing and Inputs

Example 13.37 uses continuous integration to validate pipeline prerequisites. Automated checks can verify that preprocessing steps run and that required inputs are present and well-formed before downstream analysis proceeds. Catching input and preprocessing failures in CI prevents wasted compute and unreproducible partial runs. The example 37 module for this chapter covers those preprocessing and input checks.

## Slide 5 — Example 13.38 — Tests for Cross-Environment Consistency

Environment drift is a common reproducibility failure. Example 13.38 emphasizes tests for cross-environment consistency: the same pipeline should produce expected results across machines or container images used by the team. Automated tests that compare outputs or checksums across environments expose dependency mismatches before collaborators publish conflicting numbers. The example 38 module for this chapter frames that consistency-testing pattern.

## Slide 6 — Example 13.39 — CI Retests Model Training After Updates

Machine-learning pipelines change when data, features, or training code update. Example 13.39 shows CI retesting model training after such updates so regressions in metrics or training failures are caught automatically. Continuous checks keep the published training path aligned with the current repository state rather than relying on a one-time local success. The example 39 module for this chapter summarizes retrain-oriented CI.

## Slide 7 — Automated workflow documentation

Automation also supports workflow documentation: logs, regenerated reports, and machine-readable records of what ran. When documentation is produced as part of the pipeline rather than hand-written after the fact, the published narrative stays synchronized with the executable path. Combined with CI, automated documentation reduces the gap between what the paper claims and what the repository actually runs.

## Slide 8 — Takeaways

Continuous integration turns reproducibility from a manual hope into a repeated check. CI can validate preprocessing and inputs before costly downstream stages. Cross-environment tests catch dependency drift across machines and containers. Retrain CI detects model regressions when data or code change. Automated documentation keeps published workflows aligned with what actually executed.

## Slide 9 — Next

The next part covers R Markdown reports and DVC for tracking training data, model weights, and pipeline stages.
