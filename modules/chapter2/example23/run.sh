#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 2.23 — Soil-Moisture Network for Irrigation Planning"
cat <<'EOF'
Climate monitoring joins need shared field IDs:
- 15-min soil-moisture probes + satellite vegetation indices
- Without common IDs and map projections, the join fails
- Align time windows when cadences differ
EOF
