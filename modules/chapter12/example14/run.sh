#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 12.14 — DVC Remotes on Object Storage"
cat <<'EOF'
DVC on object storage:
- Hash/metadata in Git
- Training shards in S3/GCS remotes
- Pin runs to versions without copying petabytes
EOF
