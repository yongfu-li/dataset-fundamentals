#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 11.31 — Hybrid Speed with Expert Gates"
cat <<'EOF'
Hybrid speed + expert gates:
- Crowds: overnight easy-item throughput
- Experts: clear the uncertain queue
- Keep speed without sacrificing safety-critical accuracy
EOF
