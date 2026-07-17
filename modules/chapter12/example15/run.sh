#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 12.15 — Pachyderm Partition Recompute"
cat <<'EOF'
Pachyderm recompute:
- Version pipeline inputs and outputs
- New raw partition triggers only dependent stages
- Avoid rebuilding the entire lake
EOF
