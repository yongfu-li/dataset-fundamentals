#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 3.38 — Conflicting Privacy Regimes"
cat <<'EOF'
Conflicting privacy regimes:
- GDPR posture for EU residents (Section 3.6.1)
- CCPA/CPRA rights for California residents (Section 3.6.3)
- Parallel notice, retention, and request-handling workflows in one product
EOF
