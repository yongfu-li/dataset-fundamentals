#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 4.6 — Image Annotation for Facial Landmarks"
cat <<'EOF'
Facial landmarks:
- Mark keypoints: eye corners, nose tip, mouth landmarks
- Enables pose and identity models to align faces across images
EOF
