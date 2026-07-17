#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 2.3 — Secondary Census Extract for Store Siting"
cat <<'EOF'
Secondary data: fast/free, but check fitness for use:
- Example: census income/age for store siting
- Risk: age bins and geography may not match trade areas
- Action: remap units or combine with primary collection
EOF
