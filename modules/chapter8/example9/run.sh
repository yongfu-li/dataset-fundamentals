#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 8.9 — Medical Condition Codebook"
echo "--- codebook.csv ---"
sed -n '1,80p' "codebook.csv"
