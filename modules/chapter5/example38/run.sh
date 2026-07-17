#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 5.38 — Available Case Analysis Keeps Rows"
cat <<'EOF'
If only one or two columns contain missing values, rows are dropped only for calculations that need those columns. The same rows stay available for other analyses that use complete fields.
EOF
