#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 5.27 — Cap Income at 95th Percentile"
cat <<'EOF'
Winsorizing income at the 95th percentile replaces values above that cutoff with the cutoff itself, limiting leverage from extremes while retaining every row.
EOF
