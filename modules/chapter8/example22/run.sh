#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 8.22 — Quilt for Genomic Dataset Versions"
cat <<'EOF'
- Quilt catalogs versions together with annotations and preprocessing state.
- Researchers can discover and retrieve the version appropriate to their analysis.
EOF
