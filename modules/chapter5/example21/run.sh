#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 5.21 — Weeks Normalizing Free Text Cities"
cat <<'EOF'
Free-text city fields such as "NYC," "New York," and "new york" may require weeks of mapping rules before geographic analysis or joins to census tables are reliable.
EOF
