#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 5.33 — Fraud Class at One Percent"
cat <<'EOF'
In transaction fraud detection, fraudulent rows may account for only 1\ A model that always predicts "legitimate" can look accurate while missing nearly every fraud case.
EOF
