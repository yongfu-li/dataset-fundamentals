#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 9.11 — MTurk Product-Description Labeling"
cat <<'EOF'
MTurk labeling workflow:
- Requester posts HITs: tag descriptions as electronics / clothing / home goods
- Workers complete; requester reviews and pays; ratings accumulate
- Output becomes supervised training data for recommendations
EOF
