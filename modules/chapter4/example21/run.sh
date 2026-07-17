#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 4.21 — Frame-by-Frame Labeling on Video"
cat <<'EOF'
Frame-by-frame video labeling:
- Surveillance frames labeled person, car, or bicycle
- Supports detection and multi-object tracking
EOF
