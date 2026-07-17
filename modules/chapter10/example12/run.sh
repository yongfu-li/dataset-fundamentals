#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 10.12 — Privacy-Preserving Medical Records"
cat <<'EOF'
Synthetic EHR release:
- Diagnosis codes, labs, visit counts without direct identifiers
- Cohort statistics preserved for external prototyping
- Raw patient files remain inside the controller
EOF
