---
marp: true
title: Chapter 4 — Introduction to data annotation
paginate: true
---

# Chapter 4 — Introduction to data annotation

Chapters 2 and 3 covered how records enter a dataset and what obligations attach to them

---

## Learning objectives
- Define data annotation as attaching task-defined labels to raw records
- Recognize how annotated examples differ across text, image, audio
- Video modalities

---

## What is data annotation?
- Data annotation assigns labels
- Annotation is typically performed by trained humans
- Depending on modality
- Without reliable labels

---

## Why label quality bounds learning
- Autonomy settings where labeling errors propagate into high-stakes decisions
- Inconsistent or incorrect annotations degrade held-out performance and can encode
- Fairness and bias implications connect back to ethics constraints introduced in Chapter 3

---

## Example 4.1 — Text dataset
- Example 4.1 — hands-on module
- Example 4.1 shows a compact natural language processing case
- In a text corpus
- Explore the chapter example module
- View files: `modules/chapter4/example1/`

---

## Example 4.2 — Sentiment on customer feedback
- Example 4.2 — hands-on module
- Example 4.2 illustrates document-level sentiment
- In a customer feedback survey
- The label operation is simple
- Explore the chapter example module
- View files: `modules/chapter4/example2/`

---

## Example 4.3 — Named entities in text
- Example 4.3 — hands-on module
- Example 4.3 shows entity typing in a factual sentence
- In “Barack Obama was born in Hawaii,” the person span and the location span receive
- Boundary decisions, where a span starts and ends, are as important as the class name
- Explore the chapter example module
- View files: `modules/chapter4/example3/`

---

## Previews across image, audio, and video
- The chapter also previews labels beyond text
- Image annotation marks visual entities with bounding boxes
- Audio annotation aligns transcripts
- Video annotation extends spatial labeling across frames so perception stacks can track
- Later clips deepen each modality

---

## Takeaways
- Annotation attaches task-defined labels that supervised learning depends on
- Label quality often caps accuracy more than model choice alone
- Text, image, audio

---

## Next
- Complete the quiz for this part
- Continue to the next part on text and image annotation techniques

