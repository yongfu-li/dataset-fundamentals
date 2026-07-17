#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 12.17 — Iceberg Snapshot Rollback"
cat <<'EOF'
Iceberg snapshot rollback:
- Snapshots expose prior table states
- After bad overwrite, repoint readers
- No full warehouse backup restore required
EOF
