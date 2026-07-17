#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 6.6 — Healthcare Missingness Profile"
cat <<'EOF'
Healthcare missingness profile:
1. Count missing values for age, history, and test results.
2. Compare missing rates across age groups.
3. Decide whether to impute, drop rows, or investigate collection procedures.
EOF
