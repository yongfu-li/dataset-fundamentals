#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 4.29 — LabelImg Box-Label Workflow"
cat <<'EOF'
LabelImg box-label workflow:
1. Install LabelImg; open an image directory
2. Draw a rectangle per object; assign a class label
3. Save VOC-compatible XML for training
4. Before scaling: review exports for class names, box tightness, occluded-object handling
EOF
