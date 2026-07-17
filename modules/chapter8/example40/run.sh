#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 8.40 — Clinical Trial Collaboration Case Study"
echo "--- workflow.sh ---"
sed -n '1,80p' "workflow.sh"
