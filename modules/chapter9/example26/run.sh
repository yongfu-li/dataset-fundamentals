#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 9.26 — Retail Data Lake for Mixed Sources"
cat <<'EOF'
Retail data lake:
- Interaction logs, social content, and sensor data stored raw
- Schema-on-read supports later ML exploration
- Needs governance (Chapter 8) to avoid becoming a swamp
EOF
