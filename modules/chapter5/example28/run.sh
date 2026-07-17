#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 5.28 — Replace Sensor Spike With Median"
cat <<'EOF'
After detecting one corrupted temperature spike in an otherwise stable sensor stream, replacing that point with the rolling median preserves row count while removing the bad value.
EOF
