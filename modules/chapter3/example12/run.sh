#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 3.12 — Privacy by Design in a Health App"
cat <<'EOF'
Privacy by Design in a health app:
- Do not demand financial fields “just in case”
- Default to local retention where feasible
- Clear sharing and deletion controls before any partner sync is enabled
Privacy is designed in, not bolted on after launch.
EOF
