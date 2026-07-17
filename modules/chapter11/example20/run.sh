#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 11.20 — Expert Quality for Radiology Labels"
cat <<'EOF'
Expert radiology quality:
- Board-certified radiologists for tumor boundaries
- Crowd workers lack clinical training for precise masks
- Safety-critical labels stay with experts
EOF
