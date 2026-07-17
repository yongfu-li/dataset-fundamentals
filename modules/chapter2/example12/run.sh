#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 2.12 — Cluster Sample of Neighborhood Clinics"
cat <<'EOF'
Cluster sample when groups are visit-able but people lists are not:
- Randomly select 12 clinics, then survey patients on two weekdays
- Saves travel cost; patients within a clinic are more alike
- Treat precision cautiously (within-cluster correlation)
EOF
