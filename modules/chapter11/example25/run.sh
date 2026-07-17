#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 11.25 — Expert Gold Then Crowd Scale-Up"
cat <<'EOF'
Expert gold → crowd scale:
- Experts label a small gold set first
- Crowds label the bulk; experts audit batches
- Adjudicate disagreements against gold
EOF
