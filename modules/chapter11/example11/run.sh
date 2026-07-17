#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 11.11 — Key-Frame Selection for Action Labels"
cat <<'EOF'
Key-frame action labeling:
- Select ambiguous/overlapping pose frames
- Skip easy frames the model already knows
- Focus effort where uncertainty is highest
EOF
