---
marp: true
title: Chapter 4 — Tools for data annotation
paginate: true
---

# Chapter 4 — Tools for data annotation

Technique choices become operational through annotation platforms

---

## Learning objectives
- Name representative open-source and commercial annotation tools
- Outline a minimal bounding-box workflow suitable for small detection projects

---

## Open-source annotation tools
- Open-source tools suit research teams and pilots that need customization without license
- Common in small object-detection projects tied to benchmarks such as PASCAL VOC and COCO
- Label Studio supports text, image, audio
- Team workflows for larger vision efforts

---

## Commercial annotation platforms
- Commercial platforms add managed workforces, service-level agreements
- Vendors such as Scale AI and Appen combine tooling with contracted annotators
- NLP-focused products such as Prodigy emphasize tight active-learning loops for text
- Product names change quickly
- Many teams prototype in open-source tools and move to commercial platforms when scale or

---

## Four required platform features
- Match the tool to modality and workflow
- Also check collaboration, export formats, API hooks for pre-labeling
- Hooks for quality review such as duplicate labeling or adjudication queues
- If a candidate tool lacks those four

---

## Example 4.29 — LabelImg box-label workflow
- Example 4.29 — hands-on module
- Example 4.29 summarizes a minimal LabelImg path for object detection
- Save VOC-compatible XML for downstream training
- Before scaling, review a handful of exports to confirm class names, box tightness
- The same export-check habit applies to other box editors
- View files: `modules/chapter4/example29/`

---

## Choosing tools for your program
- Selection depends on modality, scale, integration with machine learning workflows
- Open-source options favor customization and bring-your-own annotators
- The right choice is the one that supports your schema, collaboration model

---

## Takeaways
- LabelImg, Label Studio, and CVAT cover common research and vision needs
- Require schema validation, collaboration, versioned exports, and QC hooks
- Always audit a small export batch before labeling thousands of images

---

## Next
- Complete the quiz for this part
- Annotator training

