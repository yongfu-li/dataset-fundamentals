#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 3.15 — Differential Privacy for Product Telemetry"
cat <<'EOF'
Differential privacy for product telemetry:
- Release aggregate usage stats under a DP mechanism
- Hard to single out individuals; teams still see population-level patterns
- Needs correct noise calibration and care not to publish too many overlapping queries against the same privacy budget
EOF
