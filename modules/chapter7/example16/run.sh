#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 7.16 — Confirmation Bias in Research"
cat <<'EOF'
Confirmation bias — research:
- Selecting only data that supports a favored hypothesis (education -> income)
- The model overweights the favored feature and misses stronger factors
- Fix: define inclusion criteria before looking at outcomes
EOF
