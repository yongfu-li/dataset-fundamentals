#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 12.1 — NoSQL for Web Mobile and IoT"
cat <<'EOF'
NoSQL fit:
- Real-time social/messaging, semi-structured logs, IoT streams
- Schemas evolve faster than relational tables allow
- Trade ACID joins for horizontal scale and flexibility
EOF
