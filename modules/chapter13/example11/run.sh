#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 13.11 — Unpinned Dataset Versions Break Replication"
cat <<'EOF'
Pin and archive the exact dataset version used in a publication.
EOF
