#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
command -v python3 >/dev/null 2>&1 || { echo "python3 is required"; exit 1; }
echo "Python found; standard library only, nothing to install."
