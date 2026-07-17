#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 7.10 — Facial Recognition Capture Quality"
cat <<'EOF'
Measurement bias — capture quality:
- Poor cameras or lighting degrade some faces more than others
- Group-dependent capture error lowers accuracy for affected ethnicities/genders
- Standardize and audit capture conditions per subgroup
EOF
