# Media augmentation lab

Combined **audio** + **video** (frame-strip) augmentation for **Chapter 10**.
No TTS, no generative video models—browser Web Audio + canvas frames only.

**Live path:** `lectures/tools/media-augmentation/index.html` (after `build_site.py`)

Siblings: [`../text-augmentation/`](../text-augmentation/),
[`../image-augmentation/`](../image-augmentation/).

## Why one tool

Audio and video share the same teaching job (preview → transform → export + recipe)
and are thin alone on a static site. Tabs keep the UIs separate without two hub cards.

## Audio

Presets: beep, chirp, noise burst, dual-tone (not real speech).  
Methods: gain, reverse, noise, pitch/resample, fade, trim, random pipeline.  
Export: `augmented-audio.zip` (WAV + recipe).

## Video

Presets: bouncing ball, color pulse, scrolling bar (short frame strips).  
Methods: flip H, grayscale, brightness, noise, reverse order, frame drop, pipeline.  
Export: `augmented-video-frames.zip` (PNG frames + recipe)—not a full MP4 pipeline.

## Scope note

Does **not** cover time series, geospatial, or graph augmentation (different operators).

## Book anchors

- §10.1 cross-modal fidelity · ethics §10.7

## QA

- [ ] Audio play works; reverse is audible
- [ ] Video strip shows flipped / reversed frames
- [ ] Same seed reproduces ops lists
- [ ] ZIPs open with recipe JSON
