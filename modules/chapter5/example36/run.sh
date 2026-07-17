#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 5.36 — SMOTE Synthesizes Minority Neighbors"
cat <<'EOF'
SMOTE (Synthetic Minority Over-sampling Technique) creates new fraud examples by interpolating between existing minority points in feature space, balancing the training set without simple duplication.
EOF
