#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 8.21 — DVC Tracking of Cloud-Stored Datasets"
cat <<'EOF'
- DVC commits lightweight metadata while the large bytes live in remote storage.
- Checking out the Git revision plus dvc pull restores the exact dataset.
EOF
