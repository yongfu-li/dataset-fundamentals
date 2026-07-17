#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 4.15 — Segmentation on Medical Images"
cat <<'EOF'
Medical segmentation:
- Outline tumor region on a scan
- Every pixel inside the contour → tumor class
Tighter boundaries than detection boxes alone.
EOF
