#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 11.28 — Active Learning Routes Hard Cases"
cat <<'EOF'
AL hybrid routing:
- Low-confidence → experts
- High-confidence → crowds
- Shrink expert hours; protect hard cases
EOF
