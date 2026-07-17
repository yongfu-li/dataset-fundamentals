#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 11.21 — Radiologist Tumor Annotation"
cat <<'EOF'
Radiologist tumor annotation:
- Subtle lesions missed by non-experts
- Experts remain the gold path for those frames
- Split campaigns so crowds never own this schema
EOF
