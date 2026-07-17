#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 12.21 — Visualizing Transform Chains for Debug"
cat <<'EOF'
Lineage for debug:
- UI shows filter/join chains for a cohort table
- Locate the transform that emptied a partition
- Walk upstream instead of blind re-runs
EOF
