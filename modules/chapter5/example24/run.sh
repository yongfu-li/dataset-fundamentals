#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 5.24 — Faulty IoT Sensor Spike"
cat <<'EOF'
A stuck relay can report 500,000 RPM on a motor that normally runs near 3,000 RPM. That spike reflects sensor failure rather than true operating conditions.
EOF
