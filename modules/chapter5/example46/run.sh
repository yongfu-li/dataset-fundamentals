#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 5.46 — Scale Age and Income for KNN"
cat <<'EOF'
When age spans roughly 20 to 70 and income spans tens of thousands, k-nearest neighbors (KNN) is dominated by income unless both features are standardized or normalized.
EOF
