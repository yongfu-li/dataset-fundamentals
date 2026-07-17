#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 4.4 — Image Annotation for Driving Scenes"
cat <<'EOF'
Driving-scene image annotation:
- Boxes around cars, pedestrians, and traffic signs
- Class label on each box
Feeds perception stacks for autonomous driving.
EOF
