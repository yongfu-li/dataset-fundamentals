#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 8.35 — Merge Conflicts on Shared Datasets"
cat <<'EOF'
- Concurrent edits and inconsistent transformations cause data conflicts.
- Branches, regular synchronization, review, and DVC dependencies reduce collision risk.
EOF
