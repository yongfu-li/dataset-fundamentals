#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 13.35 — Separate Containers per Pipeline Stage"
cat <<'EOF'
Docker Compose: one container per stage, orchestrated together.
EOF
