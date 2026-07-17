#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 12.6 — Block Storage for Low-Latency Databases"
cat <<'EOF'
Block storage:
- Low-latency disks attached to VMs (e.g., EBS)
- Transactional databases needing POSIX-like I/O
- Not a substitute for object archives/lakes
EOF
