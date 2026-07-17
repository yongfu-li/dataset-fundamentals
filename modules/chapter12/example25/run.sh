#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 12.25 — Healthcare Imaging at Scale"
cat <<'EOF'
Healthcare imaging scale:
- DICOM archives on governed object storage
- Analytics on derived feature tables
- Durability + access control together
EOF
