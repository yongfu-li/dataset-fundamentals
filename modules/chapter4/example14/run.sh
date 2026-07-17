#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 4.14 — Bounding Boxes for Detection"
cat <<'EOF'
Bounding boxes for detection:
- Axis-aligned rectangles around cars, people, road signs
- Class label on each instance
Primary format for many object-detection corpora.
EOF
