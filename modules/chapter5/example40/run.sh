#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 5.40 — Hot Deck Impute From Donor Row"
cat <<'EOF'
For a missing income value, hot-deck imputation copies income from a similar donor row that shares education and occupation codes. That choice preserves multivariate structure better than a single global mean.
EOF
