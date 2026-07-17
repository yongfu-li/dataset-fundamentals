---
marp: true
title: Chapter 13 — Automation and continuous integration
paginate: true
---

# Chapter 13 — Automation and continuous integration

Manual reruns drift

---

## Learning objectives
- By the end of this part

---

## CI for reproducible research
- For research workflows, tests and validates changes to code or data pipelines
- Services such as GitHub Actions, GitLab CI
- The goal is to catch silent breaks early

---

## Example 13.37 — CI Checks Preprocessing and Inputs
- Example 13.37 — hands-on module
- Example 13.37 uses continuous integration to validate pipeline prerequisites
- Automated checks can verify that preprocessing steps run and that required inputs are
- Catching input and preprocessing failures in CI prevents wasted compute and unreproducible
- Explore the chapter example module
- View files: `modules/chapter13/example37/`

---

## Example 13.38 — Tests for Cross-Environment Consistency
- Example 13.38 — hands-on module
- Environment drift is a common reproducibility failure
- Example 13.38 emphasizes tests for cross-environment consistency
- Automated tests that compare outputs or checksums across environments expose dependency
- Explore the chapter example module
- View files: `modules/chapter13/example38/`

---

## Example 13.39 — CI Retests Model Training After Updates
- Example 13.39 — hands-on module
- Machine-learning pipelines change when data, features, or training code update
- Example 13.39 shows CI retesting model training after such updates so regressions in
- Continuous checks keep the published training path aligned with the current repository
- Explore the chapter example module
- View files: `modules/chapter13/example39/`

---

## Automated workflow documentation
- Automation also supports workflow documentation
- The published narrative stays synchronized with the executable path
- Combined with CI

---

## Takeaways
- Continuous integration turns reproducibility from a manual hope into a repeated check
- CI can validate preprocessing and inputs before costly downstream stages
- Cross-environment tests catch dependency drift across machines and containers
- Retrain CI detects model regressions when data or code change
- Automated documentation keeps published workflows aligned with what actually executed

---

## Next
- Complete the quiz for this part
- The next part covers R Markdown reports and DVC for tracking training data, model weights

