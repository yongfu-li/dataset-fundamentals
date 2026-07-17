---
marp: true
title: Chapter 10 — GAN variants, evaluation, and ethics
paginate: true
---

# Chapter 10 — GAN variants, evaluation, and ethics

Basic generative adversarial networks are only the starting point

---

## Learning objectives
- By the end of this part, learners should be able to contrast conditional, cycle-consistent

---

## Conditional GANs
- Conditional generative adversarial networks feed class labels or other attributes into
- The generator then produces samples that satisfy specified constraints
- This supports supervised augmentation and controlled image translation

---

## Example 10.11 — Conditional GAN Class Labels
- Example 10.11 — hands-on module
- Example 10.11 shows a conditional generative adversarial network generating cats
- Label conditioning makes the output useful for image-to-image tasks and class-balanced
- Explore the chapter example module
- View files: `modules/chapter10/example11/`

---

## CycleGAN and StyleGAN
- CycleGAN translates between image domains without paired training examples
- Enabling photorealistic synthesis with adjustable coarse and fine attributes

---

## Advantages and limitations
- Generative adversarial networks excel at realistic image, text
- Limitations include training instability, heavy compute for high resolution
- Human review and statistical metrics both remain necessary

---

## Evaluation metrics
- Because synthetic sets lack per-row ground truth, teams use proxy metrics
- Inception Score measures classifiability and diversity of generated images
- Fréchet Inception Distance compares feature distributions of real and generated images
- Precision and recall adaptations assess fidelity versus coverage of the real manifold

---

## Prominent use cases
- Support creative generation
- In security and media

---

## Ethical challenges and deepfakes
- Realistic generators enable deepfakes
- The same tools can produce fraudulent documents or misleading news
- These risks connect to the chapter-wide ethics agenda, privacy, bias amplification

---

## Takeaways
- Variant architectures add control, unpaired translation
- Metrics such as Inception Score and Fréchet Inception Distance help compare generators but
- Deepfakes illustrate why governance and provenance matter alongside model quality

---

## Next
- Complete the quiz for this part
- The next part explains how large language models generate synthetic text, labels

