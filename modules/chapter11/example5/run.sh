#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 11.5 — Uncertain Chest X-ray Near Decision Boundary"
cat <<'EOF'
Least-confidence X-ray:
- 0.52 abnormal / 0.48 normal is a decision-boundary near-tie
- Queue for expert label before trusting the call
- Pair with diversity sampling to avoid only labeling hard cases
EOF
