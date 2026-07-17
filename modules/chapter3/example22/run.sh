#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 3.22 — Data Breach"
cat <<'EOF'
Data breach — severity range:
- Small: names and email addresses
- Large: government IDs, payment credentials, health records
- Impact scales with sensitivity, volume, dwell time before detection, and speed of notification/remediation
EOF
