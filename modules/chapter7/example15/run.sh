#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 7.15 — Aggregate Bias in Credit Scoring"
cat <<'EOF'
Aggregation bias — credit scoring:
- One pooled model ignores income-structure differences between groups
- Creditworthiness is mispredicted for lower-income brackets
- Disaggregate error analysis to find who bears the cost
EOF
