#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 7.12 — Labeling Bias in Sentiment Annotation"
cat <<'EOF'
Label bias — sentiment annotation:
- Annotators read tone through their own cultural/social lens
- Inconsistent positive/negative labels teach the model those inconsistencies
- Guard rails: clear guidelines + inter-annotator agreement checks (Chapter 4)
EOF
