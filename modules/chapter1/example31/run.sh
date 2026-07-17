#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 1.31 — Python Code on Predicting Customer Churn"

if [[ -d .venv ]]; then
  # shellcheck disable=SC1091
  source .venv/bin/activate
fi
export MPLBACKEND="${MPLBACKEND:-Agg}"
python3 main.py

