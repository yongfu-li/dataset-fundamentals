#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 9.3 — Manual Weather Observation Inconsistency"
cat <<'EOF'
Reliability limit — manual observation:
- Different observers interpret the same conditions differently
- Drift and inconsistency corrupt cross-site comparisons
- Sensors standardize what humans judge subjectively
EOF
