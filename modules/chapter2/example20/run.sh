#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 2.20 — Mobile-Only Poll Coverage Gap"
cat <<'EOF'
Coverage bias: who never enters the frame?
- App-only poll misses rural landline households
- Large n does not fix a missing population segment
- Add a second channel or stop claiming full-population coverage
EOF
