#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
command -v python3 >/dev/null 2>&1 || { echo "python3 is required"; exit 1; }
python3 - <<'PY'
from __future__ import annotations

import importlib.util
import subprocess
import sys

mods = ["pandas", "sklearn"]
pkgs = ["pandas>=2.0", "scikit-learn>=1.3"]
missing = []
for m, p in zip(mods, pkgs):
    if importlib.util.find_spec(m) is None:
        missing.append(p)
if missing:
    print('Installing:', ', '.join(missing))
    subprocess.check_call(
        [sys.executable, '-m', 'pip', 'install', '--user', '-q', *missing]
    )
print('Dependencies ready:', ', '.join(mods))
PY
