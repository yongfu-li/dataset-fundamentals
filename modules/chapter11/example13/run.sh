#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 11.13 — Dermoscopic Lesion Uncertainty Queue"
cat <<'EOF'
Dermoscopy uncertainty queue:
- Atypical/rare lesions go to experts first
- Skip labeling every routine image
- Lift early-melanoma and hard-lesion performance
EOF
