#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 5.30 — More Columns Harder to Interpret"
cat <<'EOF'
Including dozens of unused survey fields alongside ten useful predictors makes coefficient tables and partial dependence plots harder to interpret without improving accuracy.
EOF
