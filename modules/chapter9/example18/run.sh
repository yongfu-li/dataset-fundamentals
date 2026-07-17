#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 9.18 — Edge Processing for Traffic Lights"
cat <<'EOF'
Edge processing — traffic lights:
- Cameras and sensors processed locally, lights adjusted instantly
- No cloud round-trip inside the decision loop
- Cloud gets summaries; edge handles the deadline
EOF
