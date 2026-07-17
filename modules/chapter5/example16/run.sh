#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 5.16 — Model Overweights Repeated Rows"
cat <<'EOF'
When identical churn records appear many times, a classifier may memorize those repeated rows and overweight their patterns. Deduplication reduces spurious repetition in the training set.
EOF
