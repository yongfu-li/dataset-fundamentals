# Chapter 10 — Use cases in autonomy and security — transcript

**Clip id:** part-09-use-cases-autonomy-security
**Estimated duration:** 7 minutes
**Sources:** `author/chapter10.tex` (§10.6.4–10.6.6), `modules/chapter10/example15/`, `modules/chapter10/example16/`, `modules/chapter10/example17/`

## Slide 1 — Chapter 10 — Use cases in autonomy and security

Healthcare and finance are not the only high-stakes domains. This part covers pedestrian-in-rain edge cases for autonomous systems, computer-vision augmentation, and ransomware attack simulation for cybersecurity training.

## Slide 2 — Learning objectives

By the end of this part, learners should be able to explain synthetic scenario generation for self-driving perception and planning; describe vision augmentation for generalization; and outline cyberattack simulation for anomaly detection and blue-team drills.

## Slide 3 — Autonomous systems data demands

Self-driving stacks require vast labeled coverage across weather, lighting, traffic, and pedestrian behavior. Logging every dangerous or rare combination on public roads is impractical and costly. Synthetic environments generate diverse driving clips for navigation, decision-making, and obstacle avoidance training before deployment.

## Slide 4 — Example 10.15 — Pedestrian-in-Rain Edge Case

Example 10.15 trains perception on synthetic clips of pedestrians emerging from heavy rain at night—a combination rarely present in fleet logs. Edge-case synthesis improves robustness where real collection is sparse or unsafe. The example 15 module for this chapter summarizes this autonomy scenario.

## Slide 5 — Edge cases and safety

Rare events—jaywalking, sudden obstacles, or unusual road geometry—may never appear enough in real logs. Synthetic simulation supplies critical scenarios at scale, reducing the chance that planners fail on first contact with chaotic real-world behavior. Over-reliance remains a risk if generators omit plausible human actions.

## Slide 6 — Augmenting vision and other modalities

Synthetic data augments sparse or imbalanced real sets across computer vision, natural language processing, and speech. Rendered product photos under varied lighting and clutter diversify backgrounds beyond warehouse photography. Modified or generated text expands corpora for sentiment and translation tasks.

## Slide 7 — Example 10.16 — Computer-Vision Augmentation

Example 10.16 shows a vision team rendering synthetic product photos with varied lighting and clutter so classifiers see more backgrounds than warehouse photography provides. The example 16 module for this chapter frames augmentation for improved generalization.

## Slide 8 — Cybersecurity and evolving threats

Cyber threats evolve quickly; real attack logs are incomplete and sensitive. Synthetic normal and anomalous network activity expands training for intrusion detection, phishing recognition, and insider-threat models without waiting for live incidents.

## Slide 9 — Example 10.17 — Ransomware Attack Simulation

Example 10.17 describes a security operations center replaying synthetic ransomware encryption patterns against backup workflows to test detection latency before a live incident. The example 17 module for this chapter outlines attack simulation for defensive readiness.

## Slide 10 — Takeaways

Autonomy benefits from synthetic rare-scenario coverage; vision and language pipelines benefit from diversified augmentation; cybersecurity benefits from simulated attacks and anomalies. All three require validation that synthetic behavior matches plausible real threats and environments.

## Slide 11 — Next

The final part asks when synthetic data truly protects people and when it creates new harms—covering privacy claims under GDPR, manipulated reporting, bias amplification, mitigation practices, and regulatory considerations.
