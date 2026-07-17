#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 9.10 — Microtask Image Tagging on Crowd Platforms"
cat <<'EOF'
Microtask image tagging:
- Split tagging into one-image, one-choice units (apparel / electronics / home goods)
- Thousands of items annotated in hours via parallel workers
- Design validation (gold questions) alongside the task
EOF
