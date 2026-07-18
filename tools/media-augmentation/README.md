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

Presets: **street traffic**, **warehouse conveyor**, **checkout scan**, **parking approach**, **clinic hallway**, plus bouncing-ball control.  
Methods: flip H, grayscale, brightness, noise, reverse order, frame drop, pipeline.  
Analyze: mid-frame thumbs, luma + RGB histograms, frame-diff heat (axes), flow lite (axes), temporal motion energy, PSNR/SSIM curves + fidelity meter.  
Playback: canvas clip loop + per-variant **WebM** download; ZIP includes `clips/*.webm` + PNG frames.  
**Browser support:** WebM encode/download is **Chromium-only** (Chrome, Edge, Brave, …). Canvas Play and PNG export work more widely.  
Export: `augmented-video.zip` (WebM + PNG + recipe).

## Scope note

Does **not** cover time series, geospatial, or graph augmentation. Analysis views are teaching-grade, not production ASR/CV.

## Book anchors

- §10.1 cross-modal fidelity · ethics §10.7

## QA

- [ ] Music / voice presets play; spectrogram updates on pitch
- [ ] MFCC / mel bars differ after noise or pitch
- [ ] Video frame-diff / fidelity react to reverse & brightness
- [ ] Same seed reproduces ops lists; ZIPs include recipe
