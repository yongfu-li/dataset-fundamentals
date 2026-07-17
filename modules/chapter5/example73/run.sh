#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 5.73 — Real Time Vital Sign Preprocessing"
cat <<'EOF'
An ICU pipeline can smooth noisy heart-rate readings and flag sudden drops within seconds so alerts fire before batch ETL finishes.
EOF
