#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 9.6 — Cloud Storage for Centralized Access"
cat <<'EOF'
Cloud storage as infrastructure:
- One central home for large multi-format corpora
- Direct integration with Hadoop/Spark processing
- Foundation for the data-lake pattern later in the chapter
EOF
