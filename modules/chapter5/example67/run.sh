#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 5.67 — When to Prefer Normalization or Standardization"
cat <<'EOF'
Min-max normalization suits neural networks that expect bounded inputs, while z-score standardization is common for logistic regression and support vector machines.
EOF
