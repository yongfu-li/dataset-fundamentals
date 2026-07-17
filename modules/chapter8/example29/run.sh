#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 8.29 — Live Demonstration of DVC Automation"
echo "--- workflow.sh ---"
sed -n '1,80p' "workflow.sh"
