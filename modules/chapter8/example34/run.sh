#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 8.34 — Large Binary Files Beyond Plain Git"
cat <<'EOF'
- Large binary history makes plain Git repositories slow and oversized.
- Git LFS or DVC stores bytes externally while Git tracks stable metadata.
EOF
