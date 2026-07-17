#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 11.24 — Geospatial Experts for Satellite Features"
cat <<'EOF'
Geospatial experts:
- Recognize sensor artifacts and seasonal confounds
- Crowds may treat artifacts as ground truth
- Expert maps keep land-cover labels trustworthy
EOF
