# Chapter 4 — Use cases and applications — transcript

**Part id:** part-08-use-cases-and-applications  
**Estimated duration:** 6 minutes  
**Sources:** `author/chapter4.tex` (§4.7)

## Slide 1 — Chapter 4 — Use cases and applications

Abstract schemas become concrete in domain settings. This part shows how annotation choices play out in autonomous driving, medical imaging, e-commerce catalogs, and emerging geospatial and augmented-reality workflows.

## Slide 2 — Learning objectives

By the end of this part, you should describe annotation demands in autonomous driving and medical imaging, explain catalog and review labeling in e-commerce, and recognize temporal and spatial consistency needs in emerging geospatial and augmented-reality applications.

## Slide 3 — Case study — Autonomous vehicles

Autonomous driving requires large labeled corpora of road scenes with pedestrians, vehicles, signs, and lane markings. Labels feed perception and planning stacks; errors in box placement or class choice directly affect safety-critical behavior. Quality-control practices and geographic diversity in collection matter as much as volume: a detector trained only on sunny highways may fail in rain or unfamiliar regions.

## Slide 4 — Case study — Healthcare

Medical imaging annotation marks lesions, organs, or findings on radiology and pathology images so diagnostic models can learn localized patterns. Expert clinicians typically validate or produce gold labels. Privacy and consent constraints govern what can be labeled and shared. Segmentation precision often matters more than coarse boxes because boundary errors can change clinical interpretation.

## Slide 5 — Case study — E-commerce

Retail catalogs use category and attribute labels for search, recommendations, and review sentiment. Product taxonomies and review polarity labels must stay consistent across locales and product lines to avoid fragmented training signal. A shoe labeled “sneaker” in one locale and “trainer” in another without a mapped taxonomy splits the class signal much like inconsistent annotator strings.

## Slide 6 — Emerging applications

Augmented reality needs spatially registered object labels so virtual content aligns with the physical scene. Climate and remote-sensing workflows need geospatial segmentation over time series, not just single snapshots. Both stress temporal consistency and domain-expert review beyond single-frame box labeling. Emerging domains reuse the same modality techniques from earlier parts but raise the cost of inconsistency across space and time.

## Slide 7 — Takeaways

Autonomous driving couples volume with safety-critical QC. Healthcare pairs expert gold labels with privacy governance. E-commerce needs stable taxonomies across locales. Emerging AR and geospatial work add temporal consistency to spatial labels.

## Slide 8 — Next

Complete the quiz, then continue to the next part on best practices—guidelines with exemplars, calibration audits, diversity checks, and pre-labeling as proposals rather than shortcuts.
