#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 4.5 — Image Annotation for Medical Images"
cat <<'EOF'
Medical image annotation:
- Outline tumors or organs (semantic/instance segmentation)
- Models learn precise boundaries, not only coarse boxes
Clinical gold labels usually need expert review.
EOF
