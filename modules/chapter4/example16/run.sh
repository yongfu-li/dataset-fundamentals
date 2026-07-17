#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 4.16 — Landmarking on Faces"
cat <<'EOF'
Landmarking on faces:
- Mark eyes, nose tip, mouth corners
- Alignment and expression models register faces across poses and lighting
EOF
