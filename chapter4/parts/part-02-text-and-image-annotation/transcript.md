# Chapter 4 — Text and image annotation — transcript

**Part id:** part-02-text-and-image-annotation  
**Estimated duration:** 8 minutes  
**Sources:** `author/chapter4.tex` (§4.2.2–4.2.3), `modules/chapter4/example9/`, `modules/chapter4/example12/`, `modules/chapter4/example14/`, `modules/chapter4/example15/`

## Slide 1 — Chapter 4 — Text and image annotation

The introduction showed what labeled data look like in each modality. This part turns to the label operations teams specify in guidelines: tokenization, sentiment, named entities, and part-of-speech for text; bounding boxes, segmentation, and landmarks for images.

## Slide 2 — Learning objectives

By the end of this part, you should describe common text annotation building blocks, contrast bounding boxes, segmentation masks, and landmarks as image formats, and match each technique to typical natural language processing and computer-vision tasks.

## Slide 3 — Text annotation building blocks

Text annotation supports classification, information extraction, and retrieval. Common building blocks include tokenization, sentiment tagging, named entity recognition, and part-of-speech tagging. Tokenization splits text into words, subwords, or characters as a prerequisite for most taggers. Sentiment tagging assigns polarity to spans or documents. Named entity recognition identifies and types entities such as people, organizations, and locations. Part-of-speech tagging assigns syntactic categories to tokens.

## Slide 4 — Example 4.9 — Tokenization on text

Example 4.9 shows a simple word split. The sentence “AI is the future” may tokenize to a short list of word tokens that downstream taggers consume. Token boundaries affect every later label, so guidelines should specify whether punctuation is attached, how contractions are split, and whether casing is preserved. Open the example 9 module for this chapter to inspect the token list.

## Slide 5 — Example 4.12 — Named entities on a sentence

Example 4.12 applies organization and location tags. In “Apple is headquartered in Cupertino,” the company span receives an organization type and the city span a location type. Subsidiary versus parent-brand boundaries are a frequent source of disagreement and are revisited under quality control. Open the example 12 module for this chapter to see the span schema.

## Slide 6 — Image annotation formats

Image annotation marks objects or regions for computer vision. Three frequent formats are bounding boxes, segmentation masks, and landmarks. Bounding boxes are axis-aligned rectangles around objects of interest and dominate many detection benchmarks. Segmentation assigns pixel-level or polygon labels and yields tighter boundaries than boxes, which matters in medical imaging and fine-grained scene parsing. Landmarking places keypoints on faces or bodies for recognition and pose estimation.

## Slide 7 — Example 4.14 — Bounding boxes for detection

Example 4.14 states the box format in a driving schema. In a self-driving corpus, rectangles may enclose cars, people, and road signs with a class label for each instance. Box tightness, occlusion handling, and consistent class names directly affect detector training. Open the example 14 module for this chapter to review a detection-oriented schema.

## Slide 8 — Example 4.15 — Segmentation on medical images

Example 4.15 shows a clinical mask task. Annotators outline a tumor region on a scan so every pixel inside the contour receives the tumor class, enabling supervised segmentation training. Masks demand more effort per object than boxes but reward applications where boundary precision matters. Open the example 15 module for this chapter to compare mask labels with box labels.

## Slide 9 — Takeaways

Text pipelines combine tokenization with sentiment, entity, or syntactic tags. Image work chooses among boxes, masks, and landmarks based on task precision and cost. Format choice belongs in the guideline before scale-up, because relabeling is expensive.

## Slide 10 — Next

Complete the quiz, then continue to the next part on audio, video, and tabular annotation—transcription, diarization, frame tracks, activity labels, and row-level classes.
