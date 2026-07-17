#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 10.3 — Synthetic Driving Scenarios for AV Training"
cat <<'EOF'
Synthetic AV scenarios:
- Weather, lighting, and road variants generated in simulation
- Cheaper and denser coverage than fleet logging alone
- Still validate on real drives before deployment
EOF
