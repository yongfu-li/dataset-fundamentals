#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 5.41 — Median Impute Missing Square Footage"
cat <<'EOF'
In a housing price table, missing square footage can be filled with the median footage for homes in a similar price band. Alternatively, a regression on neighborhood and bedroom count can predict the missing values.
EOF
