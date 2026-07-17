#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 7.13 — Labeling Bias in Predictive Justice Data"
cat <<'EOF'
Label bias — predictive justice:
- Subjective, inconsistent labels can mark some groups as more dangerous without objective basis
- The model learns the annotators' bias as if it were ground truth
- Label provenance and criteria must be documented and audited
EOF
