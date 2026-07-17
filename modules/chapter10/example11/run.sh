#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 10.11 — Conditional GAN Class Labels"
cat <<'EOF'
Conditional GANs:
- Class label conditions both generator and discriminator
- Enables controlled cats/dogs/cars synthesis
- Validate per-class fidelity, not only average realism
EOF
