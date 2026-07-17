---
marp: true
title: Chapter 4 — Text and image annotation
paginate: true
---

# Chapter 4 — Text and image annotation

The introduction showed what labeled data look like in each modality

---

## Learning objectives
- Describe common text annotation building blocks
- Landmarks as image formats
- Match each technique to typical natural language processing and computer-vision tasks

---

## Text annotation building blocks
- Text annotation supports classification, information extraction, and retrieval
- Common building blocks include tokenization, sentiment tagging, named entity recognition
- Tokenization splits text into words
- Sentiment tagging assigns polarity to spans or documents
- Named entity recognition identifies and types entities such as people, organizations
- Part-of-speech tagging assigns syntactic categories to tokens

---

## Example 4.9 — Tokenization on text
- Example 4.9 — hands-on module
- Example 4.9 shows a simple word split
- The sentence “AI is the future” may tokenize to a short list of word tokens that
- Whether casing is preserved
- Explore the chapter example module
- View files: `modules/chapter4/example9/`

---

## Example 4.12 — Named entities on a sentence
- Example 4.12 — hands-on module
- Example 4.12 applies organization and location tags
- In “Apple is headquartered in Cupertino,” the company span receives an organization type
- Subsidiary versus parent-brand boundaries are a frequent source of disagreement and are
- Explore the chapter example module
- View files: `modules/chapter4/example12/`

---

## Image annotation formats
- Image annotation marks objects or regions for computer vision
- Three frequent formats are bounding boxes, segmentation masks, and landmarks
- Bounding boxes are axis-aligned rectangles around objects of interest and dominate many
- Which matters in medical imaging and fine-grained scene parsing
- Landmarking places keypoints on faces or bodies for recognition and pose estimation

---

## Example 4.14 — Bounding boxes for detection
- Example 4.14 — hands-on module
- Example 4.14 states the box format in a driving schema
- In a self-driving corpus, rectangles may enclose cars, people
- Box tightness, occlusion handling
- Explore the chapter example module
- View files: `modules/chapter4/example14/`

---

## Example 4.15 — Segmentation on medical images
- Example 4.15 — hands-on module
- Example 4.15 shows a clinical mask task
- Enabling supervised segmentation training
- Masks demand more effort per object than boxes but reward applications where boundary
- Explore the chapter example module
- View files: `modules/chapter4/example15/`

---

## Takeaways
- Text pipelines combine tokenization with sentiment, entity, or syntactic tags
- Image work chooses among boxes, masks, and landmarks based on task precision and cost
- Format choice belongs in the guideline before scale-up, because relabeling is expensive

---

## Next
- Complete the quiz for this part
- Complete the quiz, then continue to the next part on audio, video

