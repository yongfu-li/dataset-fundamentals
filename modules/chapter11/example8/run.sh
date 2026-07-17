#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 11.8 — Model-in-the-Loop Tumor Review"
cat <<'EOF'
Model-in-the-loop review:
- Model proposes tumor locations
- Experts correct ambiguous cases only
- Retrain so later rounds need fewer edits
EOF
