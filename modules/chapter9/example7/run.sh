#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 9.7 — Agricultural IoT Sensor Networks"
cat <<'EOF'
Agricultural IoT:
- Soil sensors, weather stations, and drones stream continuously
- Irrigation decisions depend on current readings, not last month's test
- Multi-source streams need provenance and governance (Chapter 8)
EOF
