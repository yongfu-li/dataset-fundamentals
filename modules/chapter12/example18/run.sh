#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 12.18 — Rollback After Corrupt Preprocessing"
cat <<'EOF'
Rollback after corruption:
- Preprocess corrupts a shared feature table
- Roll back to last good snapshot
- Rerun from known state — do not rebuild from scratch
EOF
