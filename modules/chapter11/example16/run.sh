#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 11.16 — Crowd Scale for Attribute Labels"
cat <<'EOF'
Crowd scale:
- Millions of attribute tags distributed across workers
- Days instead of months for simple schemas
- Requires clear guidelines and gold checks
EOF
