#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 12.16 — Delta Lake Time Travel on Object Stores"
cat <<'EOF'
Delta Lake time travel:
- Transaction log over Parquet on object storage
- Point-in-time table versions without full copies
- Scalable counterpart to file-level DVC commits
EOF
