#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 11.4 — Active Learning for MRI Tumor Detection"
cat <<'EOF'
MRI active-learning loop:
- Start from a small labeled seed set
- Query ambiguous/rare-tumor scans for radiologists
- Retrain; cut expert hours while lifting hard-case detection
EOF
