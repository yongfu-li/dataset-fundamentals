#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 5.32 — Extra Features Slow Tree Training"
cat <<'EOF'
Gradient-boosted trees must scan every column at each split; carrying unused text metadata columns increases training time without improving validation performance.
EOF
