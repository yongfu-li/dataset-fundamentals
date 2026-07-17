#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 12.5 — Object Storage for Unstructured Archives"
cat <<'EOF'
Object storage:
- Flat namespace, high durability (e.g., S3)
- Media, backups, lakehouse files
- Grows without provisioning block devices
EOF
