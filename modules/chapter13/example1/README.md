# Example 13.1 — Same Data and Methods Yield Identical Results

**Chapter:** 13  
**Label:** `eg:13.1`  
**Source:** `author/chapter13.tex`  
**Section:** `sec:13.1.1` — Defining Reproducibility and Replicability

## Learning objective

Demonstrate methods reproducibility: identical data, seed, and transform yield the same result hash.

## Chapter context

Section 13.1.1 distinguishes reproducibility (same data and method → same result) from replicability (independent rerun with new data or team). If a researcher publishes a study using a dataset and a specific analytical technique, other researchers should be able to use the exact same dataset and method to obtain identical…

## What this example shows

If a researcher publishes a study using a dataset and a specific analytical technique, other researchers should be able to use the exact same dataset and method to obtain identical results. It is a measure of the transparency and robustness of the scientific process.

## Key terms

- **Reproducibility** — Same dataset and computational method yield the same result.
- **Replicability** — Independent study with new data tests whether findings generalize.

## What you should learn

### From the code / process
- Fix `random.Random(seed)` and transform (`zscore` vs `minmax`) for deterministic draws.
- Hash processed values with SHA-256 so equality checks are unambiguous.
- Same seed + same transform → identical digest; change either → different digest.

### From the output / result
- `identical? True` confirms methods reproducibility; changed seed or transform must differ.

## Contents

| File | Role |
|------|------|
| `main.py` | Standard-library demo of computational reproducibility |
| `install.sh` | Checks that `python3` is available |
| `run.sh` | Runs `python3 main.py` |

## Prerequisites

- OS: Linux, macOS, or Windows (Git Bash / WSL recommended for `.sh`)
- Python 3.10+ (standard library only)

## Setup

```bash
cd modules/chapter13/example1
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Reproducibility (same data + same method):
  run A (seed=42, zscore): 5e9a5a59f03d3c32
  run B (seed=42, zscore): 5e9a5a59f03d3c32
  identical? True

Breaking reproducibility (change one input):
  different seed   : 304b943459cc620e  -> matches A? False
  different method : 5e2b13f1674275d3  -> matches A? False

Lesson: fix the data and the method (including the seed) to reproduce a result;
        any change in seed, step, or order can break bit-for-bit reproducibility.
```

## How to interpret the result

If run A and run B differ with the same seed, your pipeline is non-deterministic—fix ordering, seeds, or floating-point steps before claiming reproducibility.

## Try it / Reflect

- Change the transform to minmax in main.py—does the hash match run A?

## Related examples

- `eg:13.2` — Replicability contrast.
- `eg:13.50` — Environment drift pitfall.
- `Chapter 8` — Documentation and versioning.

## Notes

- Standard-library determinism demo; SHA-256 summarizes numeric output for teaching.
