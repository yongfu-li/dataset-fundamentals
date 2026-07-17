#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 4.18 — Podcast Diarization and Transcript"
cat <<'EOF'
Podcast diarization and transcript:
- Diarize into speaker turns
- Transcribe content
Both identity and text available for downstream NLP.
EOF
