#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 8.12 — Faulty Sensor Annotation"
cat <<'EOF'
- The affected period, defect direction, and magnitude must be explicit.
- 2019 temperatures are systematically 2°C too high, not random noise.
EOF
