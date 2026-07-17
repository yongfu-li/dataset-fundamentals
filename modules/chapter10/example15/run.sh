#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 10.15 — Pedestrian-in-Rain Edge Case"
cat <<'EOF'
Pedestrian-in-rain edge case:
- Rain + night + pedestrian rarely appears in fleet logs
- Synthetic clips fill that perception gap
- Still test on real rare events before release
EOF
