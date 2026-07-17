---
marp: true
title: Chapter 10 — GAN architecture and training
paginate: true
---

# Chapter 10 — GAN architecture and training

Statistical methods assume known forms; generative adversarial networks learn complex structure from data

---

## Learning objectives
- By the end of this part

---

## Generative adversarial network overview
- A generative adversarial network pairs two neural networks trained simultaneously in a
- The generator creates synthetic samples from random noise
- Other modalities

---

## The generator
- The generator maps latent noise to synthetic data points
- Its objective is to produce samples that appear authentic to humans or downstream
- Early training yields poor fakes

---

## The discriminator
- The discriminator acts as a binary classifier scoring whether each input is real or
- It trains on batches of real records and generator outputs
- If the discriminator becomes too strong or too weak relative to the generator

---

## Adversarial minimax training
- Training alternates discriminator and generator updates
- First the discriminator learns to separate real and fake batches
- Then the generator updates to fool the discriminator
- Careful balance of learning rates and capacity is required

---

## Loss functions
- The common choice is binary cross-entropy loss
- The discriminator minimizes classification error on real versus fake labels
- The generator minimizes the discriminator’s ability to reject fakes
- Loss design directly affects stability and sample quality

---

## Convergence challenges
- Generative adversarial network training is notoriously unstable
- Mode collapse occurs when the generator repeats a narrow set of outputs instead of
- Vanishing gradients, imbalanced network capacity
- Teams monitor samples, losses, and diversity metrics throughout training

---

## Takeaways
- Generative adversarial networks learn synthesis through adversarial feedback rather than
- Success depends on balanced generator–discriminator training and appropriate loss
- Architectural variants, evaluation metrics, and ethical risks are covered in the next part

---

## Next
- Complete the quiz for this part
- The next part surveys conditional generative adversarial networks, CycleGANs

