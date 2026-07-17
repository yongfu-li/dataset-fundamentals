#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 3.41 — Self-Sovereign Identity"
cat <<'EOF'
Self-sovereign identity:
- People hold and present credentials
- Without a single intermediary owning the identity graph
- Aligns with stronger individual control over personal data
(Future direction alongside PETs and Privacy by Design)
EOF
