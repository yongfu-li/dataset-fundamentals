#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 7.26 — Salary-Race Correlation Heatmap"
cat <<'EOF'
Correlation heatmap:
- Color-coded feature-correlation matrix, sensitive attributes included
- Strong race-salary correlation = historical bias fingerprint
- Hot cells tell you which features to investigate or remove
EOF
