# Chapter 4 — Tools for data annotation — transcript

**Part id:** part-05-tools-for-annotation  
**Estimated duration:** 7 minutes  
**Sources:** `author/chapter4.tex` (§4.4), `modules/chapter4/example29/`

## Slide 1 — Chapter 4 — Tools for data annotation

Technique choices become operational through annotation platforms. This part maps open-source editors and commercial platforms to modality needs, lists four features every production tool should provide, and walks a minimal object-detection workflow with LabelImg.

## Slide 2 — Learning objectives

By the end of this part, you should name representative open-source and commercial annotation tools, list four features effective platforms should provide, and outline a minimal bounding-box workflow suitable for small detection projects.

## Slide 3 — Open-source annotation tools

Open-source tools suit research teams and pilots that need customization without license cost. LabelImg provides a lightweight interface for drawing bounding boxes and exporting PASCAL VOC-style XML, common in small object-detection projects tied to benchmarks such as PASCAL VOC and COCO. Label Studio supports text, image, audio, and video with configurable templates and optional model-assisted pre-labeling that implements the semi-automated pattern from the previous part. CVAT—the Computer Vision Annotation Tool—targets image and video with boxes, polygons, tracks, and team workflows for larger vision efforts.

## Slide 4 — Commercial annotation platforms

Commercial platforms add managed workforces, service-level agreements, and enterprise integrations for high-volume programs. Vendors such as Scale AI and Appen combine tooling with contracted annotators. NLP-focused products such as Prodigy emphasize tight active-learning loops for text. Product names change quickly; treat the list as illustrative of capability classes rather than an endorsement ranking. Many teams prototype in open-source tools and move to commercial platforms when scale or managed quality assurance becomes the bottleneck.

## Slide 5 — Four required platform features

Match the tool to modality and workflow: vision-heavy projects need box, mask, or track support; natural language processing projects need span and document interfaces. Also check collaboration, export formats, API hooks for pre-labeling, and whether inter-annotator agreement or audit trails are built in. Effective platforms typically provide schema definition and validation, role-based collaboration, version history or export snapshots, and hooks for quality review such as duplicate labeling or adjudication queues. If a candidate tool lacks those four, plan external quality-control processes before production labeling.

## Slide 6 — Example 4.29 — LabelImg box-label workflow

Example 4.29 summarizes a minimal LabelImg path for object detection. Install the editor, open an image directory, draw a rectangle per object, assign a class label, and save VOC-compatible XML for downstream training. Before scaling, review a handful of exports to confirm class names, box tightness, and consistent handling of occluded objects. The same export-check habit applies to other box editors. Open the example 29 module for this chapter to follow the workflow checklist.

## Slide 7 — Choosing tools for your program

Selection depends on modality, scale, integration with machine learning workflows, and budget. Open-source options favor customization and bring-your-own annotators; commercial options favor volume, managed labor, and SLA-bound programs. The right choice is the one that supports your schema, collaboration model, and QC gates—not the flashiest demo.

## Slide 8 — Takeaways

LabelImg, Label Studio, and CVAT cover common research and vision needs; commercial vendors add managed scale. Require schema validation, collaboration, versioned exports, and QC hooks. Always audit a small export batch before labeling thousands of images.

## Slide 9 — Next

Pause for the quiz, then continue to the next part on quality control—annotation errors, inter-annotator agreement, gold-set audits, and annotator training.
