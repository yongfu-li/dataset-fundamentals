#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 8.26 — Quilt for Multi-Experiment Dataset Sharing"
cat <<'EOF'
- Quilt packages and catalogs datasets for distributed collaboration.
- Versioned access prevents experiments from silently using different data.
EOF
