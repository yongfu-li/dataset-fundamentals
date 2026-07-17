"""Example 13.1 — same data and methods yield identical results.

Demonstrates computational (methods) reproducibility with the standard library:
a seeded pipeline produces a byte-identical result across runs, while changing
the seed or a step breaks that guarantee.
"""

from __future__ import annotations

import hashlib
import random
import statistics


def analysis(seed: int, transform: str = "zscore") -> str:
    """Run a small deterministic 'analysis' and return a hash of its result.

    Args:
        seed: Random seed fixing the synthetic dataset and any sampling.
        transform: Processing step applied to the data ('zscore' or 'minmax').

    Returns:
        A short SHA-256 hex digest summarizing the numeric result.
    """
    rng = random.Random(seed)
    data = [rng.gauss(50.0, 10.0) for _ in range(1000)]

    if transform == "zscore":
        mu = statistics.fmean(data)
        sigma = statistics.pstdev(data)
        processed = [(x - mu) / sigma for x in data]
    elif transform == "minmax":
        lo, hi = min(data), max(data)
        processed = [(x - lo) / (hi - lo) for x in data]
    else:
        raise ValueError(f"unknown transform: {transform}")

    rounded = ",".join(f"{x:.6f}" for x in processed)
    return hashlib.sha256(rounded.encode("utf-8")).hexdigest()[:16]


def main() -> None:
    """Show reproducible vs non-reproducible runs."""
    seed, transform = 42, "zscore"

    run_a = analysis(seed, transform)
    run_b = analysis(seed, transform)
    print("Reproducibility (same data + same method):")
    print(f"  run A (seed={seed}, {transform}): {run_a}")
    print(f"  run B (seed={seed}, {transform}): {run_b}")
    print(f"  identical? {run_a == run_b}\n")

    changed_seed = analysis(seed + 1, transform)
    changed_step = analysis(seed, "minmax")
    print("Breaking reproducibility (change one input):")
    print(f"  different seed   : {changed_seed}  -> matches A? {changed_seed == run_a}")
    print(f"  different method : {changed_step}  -> matches A? {changed_step == run_a}\n")

    print("Lesson: fix the data and the method (including the seed) to reproduce a result;")
    print("        any change in seed, step, or order can break bit-for-bit reproducibility.")


if __name__ == "__main__":
    main()
