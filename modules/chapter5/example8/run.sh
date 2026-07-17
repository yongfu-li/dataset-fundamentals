#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 5.8 — MCAR System Error Omits Records"
cat <<'EOF'
If a survey platform randomly fails to save some completed responses, the missing rows are missing completely at random (MCAR). Listwise deletion or simple imputation is less likely to introduce systematic bias in that case.
EOF
