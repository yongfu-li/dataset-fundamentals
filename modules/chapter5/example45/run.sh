#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 5.45 — Drop Correlated Bathroom Features"
cat <<'EOF'
In house-price modeling, "number of bathrooms" and "number of toilets" may be nearly collinear. Dropping one reduces redundancy without losing predictive signal.
EOF
