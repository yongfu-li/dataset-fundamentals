#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 13.45 — DVC Pipeline for Preprocess Train Evaluate"
cat <<'EOF'
DVC: define preprocess->train->evaluate as one versioned pipeline.
EOF
