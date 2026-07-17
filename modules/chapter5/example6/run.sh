#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 5.6 — Scale Mismatch Between Age and Income"
cat <<'EOF'
When age spans roughly 18--100 and income spans tens of thousands, distance-based models overweight income unless both features are scaled to a common range or standardized distribution.
EOF
