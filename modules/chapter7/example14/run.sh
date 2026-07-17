#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 7.14 — Aggregate Bias in Healthcare"
cat <<'EOF'
Aggregation bias — healthcare:
- Pooling demographic groups masks different needs and treatment responses
- Average-fit models can recommend poorly for specific subgroups
- Evaluate (and possibly model) per subgroup
EOF
