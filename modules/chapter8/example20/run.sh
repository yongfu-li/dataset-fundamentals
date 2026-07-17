#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 8.20 — CSV Dataset Commits in Git"
cat <<'EOF'
- Commit each meaningful CSV update with a reason.
- Git history is appropriate for small text-like data and keeps code/data changes aligned.
EOF
