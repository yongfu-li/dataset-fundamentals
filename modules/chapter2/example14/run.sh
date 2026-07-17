#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 2.14 — Convenience Sample on a University Campus"
cat <<'EOF'
Convenience sample = fast, not generalizable:
- First 100 students entering the library in exam week
- Missing: evening commuters, remote students, non-library users
- Treat findings as exploratory unless you redesign the frame
EOF
