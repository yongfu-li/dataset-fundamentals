#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 4.8 — Video Annotation on Driving Footage"
cat <<'EOF'
Driving video annotation:
- Label pedestrians, vehicles, signs, road conditions across frames
- Perception stacks learn temporal responses
Extends image annotation into the time dimension.
EOF
