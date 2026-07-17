#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 8.36 — Reproducibility Without Version Pins"
cat <<'EOF'
- Having a dataset is insufficient without its exact version and transformation history.
- Pin data, scripts, dictionaries, codebooks, and provenance together.
EOF
