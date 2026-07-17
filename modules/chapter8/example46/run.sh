#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 8.46 — Encrypting Sensitive Datasets with DVC"
cat <<'EOF'
- Encryption protects sensitive bytes; remote access controls restrict who can retrieve them.
- DVC/Git LFS references must not bypass cloud permissions or key management.
EOF
