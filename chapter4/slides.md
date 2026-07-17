---
marp: true
title: Chapter 4 — Data Annotation
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

---

# Chapter 4 — Audio, video, and tabular annotation

Text and image schemas are only part of the annotation landscape

---

## Learning objectives
- Describe typical audio labels such as transcripts and speaker turns
- Recognize row categorization and outlier flags as tabular annotation patterns

---

## Audio annotation techniques
- Audio annotation supports speech recognition, speaker diarization, and affect analysis
- Typical labels include transcripts, speaker identities, and emotion tags aligned to time
- Transcription converts speech to text for automatic speech recognition training
- Diarization assigns who spoke when in multi-speaker recordings
- Emotion tagging labels affective tone in discrete classes such as happy

---

## Example 4.17 — Transcription on a customer service call
- Example 4.17 — hands-on module
- Example 4.17 shows a call-center transcript task
- Annotators listen to a call and produce a time-aligned transcript used to train automatic
- Alignment quality
- Explore the chapter example module
- View files: `modules/chapter4/example17/`

---

## Video annotation techniques
- Video annotation combines spatial and temporal labeling and is costly because objects and
- Frame-by-frame labeling annotates objects in successive frames for detection and tracking
- Activity recognition labels clip-level behaviors
- Production programs often separate dense tracks from lighter activity tags to control cost

---

## Example 4.21 — Frame-by-frame labeling on video
- Example 4.21 — hands-on module
- Example 4.21 shows surveillance-style classes
- In surveillance video
- Temporal consistency across frames is a QC concern
- Explore the chapter example module
- View files: `modules/chapter4/example21/`

---

## Tabular data annotation
- Tabular annotation assigns labels to rows
- Categorization maps rows to discrete classes
- Labeling outliers marks anomalous rows for fraud or quality review when positives are rare

---

## Example 4.24 — Categorization on tabular rows
- Example 4.24 — hands-on module
- Example 4.24 shows customer-value bands
- In a customer database
- The schema must define thresholds and tie-break rules so annotators
- Explore the chapter example module
- View files: `modules/chapter4/example24/`

---

## Takeaways
- Audio work aligns text, speakers, or affect with time
- Video adds temporal cost to spatial labels and often mixes tracks with activity tags
- Tabular labels include class bands and outlier flags for classification and fraud

---

## Next
- Complete the quiz for this part
- Crowdsourced workflows with their trade-offs

---

# Chapter 4 — Annotation techniques

Knowing which labels to apply is not enough, you still need a workflow that matches quality and budget

---

## Learning objectives
- Compare manual, semi-automated, fully automated
- Crowdsourced annotation on throughput and risk, summarize the trade-offs in Table 4.2
- Describe active learning and majority-vote patterns as practical workflow choices

---

## Technique trade-offs (Table 4.2)
- Annotation is labor-intensive
- Table 4.2 summarizes four approaches
- Manual annotation handles ambiguity and domain nuance but offers low throughput and
- Semi-automated labeling is faster when humans review model proposals but risks
- Fully automated pipelines scale at low marginal cost yet inherit skew and silent errors
- Crowdsourcing enables rapid scale for simple schemas but introduces worker variance and

---

## Manual annotation
- Ambiguity, or domain expertise matter more than throughput
- Humans handle occlusion, sarcasm

---

## Example 4.26 — Manual sentiment ambiguity
- Example 4.26 — hands-on module
- Example 4.26 shows a sentiment edge case
- A sentence such as “That was quite a disaster
- A brittle keyword rule may miss that tone
- Explore the chapter example module
- View files: `modules/chapter4/example26/`

---

## Semi-automated and active learning
- Semi-automated annotation combines human review with model-generated proposals
- A pre-trained detector may suggest boxes or entity spans
- Active learning prioritizes labeling for the most uncertain items so human effort

---

## Example 4.27 — Active learning queue for text
- Example 4.27 — hands-on module
- Example 4.27 shows a typical queueing pattern
- In text classification
- Active learning reduces label volume but still requires monitoring for bias introduced
- Explore the chapter example module
- View files: `modules/chapter4/example27/`

---

## Fully automated and crowdsourced annotation
- Fully automated pipelines label data without per-item human review
- Automated labelers inherit training-data skew
- Crowdsourcing distributes micro-tasks to many workers

---

## Example 4.28 — Majority vote on crowdsourced sentiment
- Example 4.28 — hands-on module
- Example 4.28 shows a simple redundancy pattern
- Three workers label the same review as positive, positive, and negative
- Crowdsourcing scales quickly but needs gold items, worker qualification
- Explore the chapter example module
- View files: `modules/chapter4/example28/`

---

## Takeaways
- Match technique to ambiguity, throughput, and ethics, not to habit
- Table 4.2 pairs each approach with its primary risk
- Combine workflows only when shared QC gates keep volume from eroding accuracy

---

## Next
- Complete the quiz for this part
- A minimal object-detection workflow

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

---

# Chapter 4 — Quality control in annotation

Tools speed labeling, but inconsistent labels teach the wrong decision boundaries

---

## Learning objectives
- Name frequent annotation failure modes
- Describe training habits that sustain label quality during long projects

---

## Why quality control matters
- Label quality bounds model performance in supervised learning
- Inconsistent or missing labels teach the wrong decision boundaries
- Quality control is therefore part of dataset governance, not optional polish
- Annotator training before and during full-scale labeling

---

## Common annotation errors
- Subjective bias in sentiment or toxicity labels
- Guidelines with positive and negative examples reduce but do not eliminate these errors

---

## Example 4.30 — Inconsistent class names
- Example 4.30 — hands-on module
- Example 4.30 shows a naming inconsistency that looks minor but splits the class signal
- One annotator tags pets as “dog” while another uses “puppy” for young dogs
- Without a guideline that collapses those strings to one class
- Explore the chapter example module
- View files: `modules/chapter4/example30/`

---

## Inter-annotator agreement (Table 4.4)
- Inter-annotator agreement measures consistency among annotators labeling the same items
- High agreement supports reliable guidelines and usable gold labels
- Table 4.4 summarizes common chance-corrected coefficients
- Cohen’s kappa suits two raters on nominal labels
- Fleiss’ kappa extends the idea to more than two raters
- Krippendorff’s alpha handles ordinal or mixed levels and missing ratings with flexible

---

## Example 4.31 — Low kappa triggers guideline revision
- Example 4.31 — hands-on module
- Example 4.31 shows how low agreement should stop a scale-up rather than be ignored
- On a named-entity pilot
- The team revises examples and re-trains before labeling the full corpus
- Clear instructions, calibration rounds
- View files: `modules/chapter4/example31/`

---

## Gold-set audit metrics
- Inter-annotator agreement measures agreement among annotators
- After adjudication, teams track label-level precision and recall on an audit set

---

## Example 4.32 — Annotator audit versus model test
- Example 4.32 — hands-on module
- Example 4.32 separates labeler metrics from model test scores
- On a held-out review batch
- Those figures evaluate the labeler, not the detector trained later on the released corpus
- Explore the chapter example module
- View files: `modules/chapter4/example32/`

---

## Training annotators
- Train annotators with written guidelines, worked examples
- Regular feedback sessions and spot audits keep drift in check
- Specialist programs

---

## Takeaways
- Fix class-name hygiene, missed instances, and subjective drift with guidelines plus audits
- Use IAA to decide whether to scale
- Train, calibrate, and re-audit after any guideline or tool change

---

## Next
- Complete the quiz for this part
- Complete the quiz

---

# Chapter 4 — Challenges in data annotation

Even strong quality-control programs face structural limits

---

## Learning objectives
- Describe throughput bottlenecks in large labeling programs
- Explain why rare classes need expert validation and targeted workflows

---

## Scale and throughput bottlenecks
- Large vision and language models can require millions of labeled instances
- Common responses reuse workflows from earlier sections
- Each speed-up still needs the quality-control gates from the previous part so volume does

---

## Bias in annotation
- Bias in annotation can skew labels and propagate into models
- The focus here is labeler and guideline failure modes that create biased training data
- Annotator bias, unrepresentative sampling
- Human adjudication when automated suggestions disagree across demographic subgroups
- Fairness metrics and deeper mitigation appear in Chapter 3 and Chapter 7

---

## Ethical concerns
- Data annotation raises ethical issues of fair compensation, privacy, and harmful labels
- Crowdsourced marketplaces should pay fairly for task complexity, disclose payment rules
- Label schemas for race
- Chapter 3 supplies the broader ethics and privacy frame

---

## Annotating rare events
- Rare classes
- Domain experts should validate gold sets
- Rare-class work is where manual review and QC investment concentrate rather than where

---

## Takeaways
- Scale demands combined workflows, not blind volume
- Bias enters through people, sampling
- Ethics and rare classes both require expert gates before labels enter training pools

---

## Next
- Complete the quiz for this part
- Emerging domains

---

# Chapter 4 — Use cases and applications

Abstract schemas become concrete in domain settings

---

## Learning objectives
- Describe annotation demands in autonomous driving and medical imaging
- Recognize temporal and spatial consistency needs in emerging geospatial and

---

## Case study — Autonomous vehicles
- Lane markings
- Labels feed perception and planning stacks
- Quality-control practices and geographic diversity in collection matter as much as volume

---

## Case study — Healthcare
- Medical imaging annotation marks lesions
- Expert clinicians typically validate or produce gold labels
- Privacy and consent constraints govern what can be labeled and shared
- Segmentation precision often matters more than coarse boxes because boundary errors can

---

## Case study — E-commerce
- Retail catalogs use category and attribute labels for search, recommendations
- Product taxonomies and review polarity labels must stay consistent across locales and
- A shoe labeled “sneaker” in one locale and “trainer” in another without a mapped taxonomy

---

## Emerging applications
- Augmented reality needs spatially registered object labels so virtual content aligns with
- Climate and remote-sensing workflows need geospatial segmentation over time series
- Both stress temporal consistency and domain-expert review beyond single-frame box labeling
- Emerging domains reuse the same modality techniques from earlier parts but raise the cost

---

## Takeaways
- Autonomous driving couples volume with safety-critical QC
- Healthcare pairs expert gold labels with privacy governance
- E-commerce needs stable taxonomies across locales
- Emerging AR and geospatial work add temporal consistency to spatial labels

---

## Next
- Complete the quiz for this part
- Pre-labeling as proposals rather than shortcuts

---

# Chapter 4 — Best practices for annotation

Use cases illustrate stakes; day-to-day habits sustain quality

---

## Learning objectives
- Draft guideline habits with positive and negative exemplars
- Use pre-labeling only with audit thresholds met

---

## Guidelines and exemplars
- Strong annotation programs share a common skeleton
- Guidelines specify class definitions, edge cases, and prohibited inferences
- Include positive and negative examples for each label and document how to handle ambiguity
- Version the guideline document when schemas change, retrain annotators on diffs

---

## Feedback, audits, and drift checks
- Run regular calibration sessions while labeling is active
- Insert repeated gold items to detect drift over long projects

---

## Diversity and bias reduction
- Where labels encode social constructs such as sentiment
- In practice: include diverse reviewers, test subgroup agreement
- Diversity is not only a collection concern

---

## Pre-labeling and effort reduction
- Use pre-labeling to propose candidates
- Combine active learning, pre-labeling
- A model proposal accepted without correction is still a human decision and should appear

---

## Takeaways
- Versioned guidelines with inline exemplars anchor every labeler
- Calibration, gold items, and re-audits catch drift after tool or schema changes
- Pre-labeling saves time only when proposals stay under human review with measured error

---

## Next
- Complete the quiz for this part
- The bridge to data cleaning in Chapter 5

---

# Chapter 4 — Emerging topics and future directions

Annotation practice is moving toward tighter human–model loops

---

## Learning objectives
- Describe AI-assisted and self-labeling workflows with human correction gates
- State how Chapter 5 continues the dataset lifecycle after labeling

---

## AI-assisted and self-labeling workflows
- Humans correct errors before labels enter the training pool
- Self-training and pseudo-labeling can scale further when confidence thresholds and audit
- Unchecked self-labeling amplifies early mistakes

---

## Synthetic and programmatic labels
- Synthetic images or text can fill rare classes but must be validated against real
- Weak supervision and labeling functions encode heuristics that humans later audit
- Not replacements for adjudicated gold data

---

## Real-time annotation
- Streaming applications may label on the fly for monitoring
- Bias risk if models or synthetic generators encode skew
- Real-time speed is valuable only when governance keeps pace with the feed

---

## Looking ahead to Chapter 5
- Emerging directions that connect to ethics and bias
- Chapter 5 turns to cleaning and preprocessing so labeled datasets become model-ready
- When fairness of labels or models is the primary concern
- Deeper treatment of active learning, weak supervision

---

## Takeaways
- AI-assisted, synthetic
- Human correction gates and gold audits remain the release criterion
- The next chapter asks how to clean and preprocess once labels exist

---

## Next
- Complete the quiz for this part
- Complete the quiz to finish Chapter 4
