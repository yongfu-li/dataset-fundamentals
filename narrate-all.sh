#!/usr/bin/env bash
# Regenerate PPTX/PDF/audio/video for every part in chapters 1-7.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SCRIPT="${ROOT}/.cursor/skills/book-slides/scripts/narrate_clips.sh"
LOG="${ROOT}/lectures/narrate-all.log"

exec > >(tee -a "$LOG") 2>&1

echo "========== narrate-all started $(date -Iseconds) =========="

for ch in "${ROOT}"/lectures/chapter[1-7]; do
  [[ -d "$ch/parts" ]] || continue
  echo ""
  echo "######## $(basename "$ch") ########"
  bash "$SCRIPT" --chapter-dir "$ch"
done

echo ""
echo "========== narrate-all finished $(date -Iseconds) =========="
