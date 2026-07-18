# Media augmentation lab

Combined **audio** + **video** (frame-strip) augmentation with a **Compare · analyze** panel for **Chapter 10**.
No TTS, no generative video models—browser Web Audio + canvas frames only.

**Live path:** `lectures/tools/media-augmentation/index.html` (after `build_site.py`)

Siblings: [`../text-augmentation/`](../text-augmentation/),
[`../image-augmentation/`](../image-augmentation/).

## Why one tool

Audio and video share the same teaching job (preview → transform → analyze fidelity → export + recipe).

## Audio

Presets: beep, chirp, noise, dual-tone, **music snippet**, **synthetic formant voice** (not real recordings).  
Methods: gain, reverse, noise, pitch/resample, fade, trim, random pipeline.  
Analyze: RMS/peak meters, spectrogram, mel energies, MFCC (mean).  
Export: `augmented-audio.zip` (WAV + recipe).

## Video

Presets: bouncing ball, color pulse, scrolling bar.  
Methods: flip H, grayscale, brightness, noise, reverse order, frame drop, pipeline.  
Analyze: luma histogram, temporal frame-diff heat, fidelity (1−MAE), flow lite.  
Export: `augmented-video-frames.zip` (PNG frames + recipe)—not a full MP4 pipeline.

## Scope note

Does **not** cover time series, geospatial, or graph augmentation. Analysis views are teaching-grade, not production ASR/CV.

## Book anchors

- §10.1 cross-modal fidelity · ethics §10.7

## QA

- [ ] Music / voice presets play; spectrogram updates on pitch
- [ ] MFCC / mel bars differ after noise or pitch
- [ ] Video frame-diff / fidelity react to reverse & brightness
- [ ] Same seed reproduces ops lists; ZIPs include recipe
