#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 5.49 — Target Encode City by Mean Price"
cat <<'EOF'
If a dataset has a "City" column and target "House Price", target encoding replaces each city with the average price observed for that city in the training fold.
EOF
