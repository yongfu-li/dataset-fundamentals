#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 10.16 — Computer-Vision Augmentation"
cat <<'EOF'
Vision augmentation:
- Synthetic photos vary lighting and clutter
- Classifier sees more backgrounds than warehouse shots alone
- Aim for better generalization, not just more volume
EOF
