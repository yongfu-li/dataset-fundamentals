#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 12.23 — Netflix Scale Streaming Architecture"
cat <<'EOF'
Netflix-scale pattern:
- Object storage + CDNs + real-time pipelines
- Viewing events/catalog stay available under load
- Balance performance with storage/egress cost
EOF
