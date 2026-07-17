#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 10.2 — Synthetic Patient Records for Privacy"
cat <<'EOF'
Privacy-preserving synthetic patients:
- Mimic medical characteristics without real patient IDs
- Enables sharing under GDPR/HIPAA constraints
- Still validate that rare individuals are not memorized
EOF
