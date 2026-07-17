#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 12.20 — Automated Lineage Capture on Model Runs"
cat <<'EOF'
Automated lineage on runs:
- Record input table version, feature job ID, model URI
- Capture when training starts
- Audits can reconstruct the run later
EOF
