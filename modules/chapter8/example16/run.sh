#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 8.16 — DVC Versus DataHub Documentation Support"
cat <<'EOF'
- DVC couples data versions to Git and reproducible pipelines.
- DataHub emphasizes metadata, provenance, dictionaries, ownership, and discovery.
EOF
