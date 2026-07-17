#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 5.5 — Inconsistent Date Formats"
cat <<'EOF'
A single date column may mix MM/DD/YYYY, DD-MM-YYYY, and YYYY/MM/DD. Standardizing to one calendar representation prevents silent parse failures and incorrect time-based joins.
EOF
