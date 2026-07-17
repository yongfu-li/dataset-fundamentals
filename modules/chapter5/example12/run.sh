#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 5.12 — Typo Leaves Blank Entry Field"
cat <<'EOF'
A clerk might mistype a ZIP code, fail validation, and leave the field blank when saving the form. The resulting NA is a human entry error rather than intentional nonresponse.
EOF
