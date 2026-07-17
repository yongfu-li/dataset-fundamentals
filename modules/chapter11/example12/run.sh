#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 11.12 — Pneumonia Detection with Uncertain X-rays"
cat <<'EOF'
Pneumonia AL:
- Queue atypical/overlapping pathology X-rays
- Radiologists label the uncertain set
- Improve edge-case detection with fewer studies
EOF
