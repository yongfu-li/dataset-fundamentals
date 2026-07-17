#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 8.3 — Clinical Dataset Change Tracking for Compliance"
cat <<'EOF'
- Clinical data changes require author, time, and rationale.
- An auditable lineage supports FDA-style controls and reproducibility.
EOF
