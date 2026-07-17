#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 5.13 — Disk Failure Truncates Sensor File"
cat <<'EOF'
If a disk failure truncates an IoT log mid-export, the last hour of temperature readings may be absent for every device in that batch. Recovery requires re-ingestion or imputation with explicit audit notes.
EOF
