/* Classic script — commercial-grade export helpers for text annotation (window.TextAnnLib).
 * Supports:
 *   1. Standard JSON & CSV
 *   2. Hugging Face Datasets (JSONL token-BIO format)
 *   3. CoNLL-2003 BIO format
 *   4. SpaCy v3 Entity Annotations JSON
 *   5. Ready-to-train Python scripts (Transformers & SpaCy)
 */
(function (global) {
  "use strict";
  const TextAnnLib = global.TextAnnLib || (global.TextAnnLib = {});

  function downloadFile(content, filename, mimeType) {
    const blob = new Blob([content], { type: mimeType || "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  function downloadJson(obj, filename) {
    downloadFile(JSON.stringify(obj, null, 2), filename || "text-annotations.json", "application/json");
  }

  function buildExport(session) {
    const items = session.items || [];
    const mode = session.mode;
    const annotations = session.annotations || {};
    const outItems = items.map(function (item) {
      const ann = annotations[item.id] || {};
      if (mode === "sentiment") {
        return {
          id: item.id,
          text: item.text,
          label: ann.label || null,
        };
      }
      return {
        id: item.id,
        text: item.text,
        spans: (ann.spans || []).map(function (s) {
          return {
            start: s.start,
            end: s.end,
            label: s.label,
            surface: item.text.slice(s.start, s.end),
          };
        }),
      };
    });
    return {
      format: "text-annotations",
      version: 1,
      mode: mode,
      labels: session.labels || [],
      source: session.source || "session",
      exportedAt: new Date().toISOString(),
      bookAnchors: session.bookAnchors || [],
      counts: {
        items: items.length,
        labeled: TextAnnLib.labeledCount(items, mode, annotations),
      },
      items: outItems,
    };
  }

  /**
   * Tokenizes text into words and punctuation with character offsets.
   * Returns Array<{ token: string, start: number, end: number }>
   */
  function tokenizeText(text) {
    const tokens = [];
    const rx = /\w+|[^\w\s]/g;
    let match;
    while ((match = rx.exec(text)) !== null) {
      tokens.push({
        token: match[0],
        start: match.index,
        end: match.index + match[0].length,
      });
    }
    return tokens;
  }

  /**
   * Converts character-level span annotations into token-level BIO tags.
   */
  function spansToBioTags(tokens, spans) {
    const tags = new Array(tokens.length).fill("O");
    if (!spans || !spans.length) return tags;

    spans.forEach(function (span) {
      const label = (span.label || "ENT").toUpperCase();
      let first = true;
      for (let i = 0; i < tokens.length; i += 1) {
        const tok = tokens[i];
        // If token overlaps span
        if (tok.start < span.end && tok.end > span.start) {
          if (first) {
            tags[i] = "B-" + label;
            first = false;
          } else {
            tags[i] = "I-" + label;
          }
        }
      }
    });

    return tags;
  }

  /**
   * Builds Hugging Face Datasets JSONL format.
   * Format: {"id": "...", "tokens": ["..."], "ner_tags": ["O", "B-PER", ...]}
   */
  function buildHuggingFaceJsonl(session) {
    const items = session.items || [];
    const annotations = session.annotations || {};
    const lines = [];

    items.forEach(function (item) {
      const ann = annotations[item.id] || {};
      if (session.mode === "sentiment") {
        lines.push(JSON.stringify({
          id: item.id,
          text: item.text,
          label: ann.label || "neutral"
        }));
      } else {
        const tokensWithOffsets = tokenizeText(item.text);
        const tokens = tokensWithOffsets.map(t => t.token);
        const bioTags = spansToBioTags(tokensWithOffsets, ann.spans || []);
        lines.push(JSON.stringify({
          id: item.id,
          tokens: tokens,
          ner_tags: bioTags
        }));
      }
    });

    return lines.join("\n") + "\n";
  }

  /**
   * Builds CoNLL-2003 BIO Tab-separated format.
   */
  function buildCoNLL2003(session) {
    const items = session.items || [];
    const annotations = session.annotations || {};
    const lines = ["-DOCSTART- -X- -X- O\n"];

    items.forEach(function (item) {
      const ann = annotations[item.id] || {};
      const tokensWithOffsets = tokenizeText(item.text);
      const bioTags = spansToBioTags(tokensWithOffsets, ann.spans || []);

      tokensWithOffsets.forEach(function (tok, idx) {
        lines.push(`${tok.token} ${bioTags[idx]}`);
      });
      lines.push(""); // Empty line between sentences/documents
    });

    return lines.join("\n");
  }

  /**
   * Builds SpaCy v3 Training Format (JSON).
   */
  function buildSpaCyJson(session) {
    const items = session.items || [];
    const annotations = session.annotations || {};
    const out = [];

    items.forEach(function (item) {
      const ann = annotations[item.id] || {};
      const entities = (ann.spans || []).map(function (s) {
        return [s.start, s.end, (s.label || "ENT").toUpperCase()];
      });
      out.push({
        text: item.text,
        entities: entities
      });
    });

    return JSON.stringify(out, null, 2);
  }

  /**
   * Generates a ready-to-run Python script for fine-tuning with Hugging Face Transformers.
   */
  function generatePythonHfScript() {
    return `# Production Fine-Tuning Pipeline: Hugging Face Transformers & Datasets
# Generated by Dataset Fundamentals — Text Annotation Studio
# Usage:
#   pip install transformers datasets evaluate seqeval accelerate torch
#   python train_ner_hf.py

import json
from datasets import Dataset, DatasetDict
from transformers import AutoTokenizer, AutoModelForTokenClassification, TrainingArguments, Trainer, DataCollatorForTokenClassification
import evaluate
import numpy as np

# 1. Load exported JSONL dataset
data_records = []
with open("text_annotations_hf.jsonl", "r", encoding="utf-8") as f:
    for line in f:
        if line.strip():
            data_records.append(json.loads(line))

print(f"Loaded {len(data_records)} annotated sequences.")

# 2. Extract label vocabulary
all_tags = set()
for r in data_records:
    all_tags.update(r["ner_tags"])
label_list = sorted(list(all_tags))
if "O" not in label_list:
    label_list.insert(0, "O")
label2id = {l: i for i, l in enumerate(label_list)}
id2label = {i: l for i, l in enumerate(label_list)}

for r in data_records:
    r["ner_tags"] = [label2id[t] for t in r["ner_tags"]]

# 3. Create Hugging Face Dataset
raw_dataset = Dataset.from_list(data_records)
split_dataset = raw_dataset.train_test_split(test_size=0.2, seed=42)
dataset = DatasetDict({
    "train": split_dataset["train"],
    "validation": split_dataset["test"]
})

# 4. Tokenizer alignment
model_checkpoint = "distilbert-base-uncased"
tokenizer = AutoTokenizer.from_pretrained(model_checkpoint)

def tokenize_and_align_labels(examples):
    tokenized_inputs = tokenizer(examples["tokens"], is_split_into_words=True, truncation=True)
    labels = []
    for i, label in enumerate(examples["ner_tags"]):
        word_ids = tokenized_inputs.word_ids(batch_index=i)
        previous_word_idx = None
        label_ids = []
        for word_idx in word_ids:
            if word_idx is None:
                label_ids.append(-100)
            elif word_idx != previous_word_idx:
                label_ids.append(label[word_idx])
            else:
                label_ids.append(label[word_idx])
            previous_word_idx = word_idx
        labels.append(label_ids)
    tokenized_inputs["labels"] = labels
    return tokenized_inputs

tokenized_datasets = dataset.map(tokenize_and_align_labels, batched=True)

# 5. Model Initialization & Trainer
model = AutoModelForTokenClassification.from_pretrained(
    model_checkpoint,
    num_labels=len(label_list),
    id2label=id2label,
    label2id=label2id
)

training_args = TrainingArguments(
    output_dir="./ner_model_output",
    evaluation_strategy="epoch",
    learning_rate=2e-5,
    per_device_train_batch_size=8,
    per_device_eval_batch_size=8,
    num_train_epochs=3,
    weight_decay=0.01,
    logging_steps=10
)

seqeval = evaluate.load("seqeval")

def compute_metrics(p):
    predictions, labels = p
    predictions = np.argmax(predictions, axis=2)
    true_predictions = [
        [label_list[p] for (p, l) in zip(prediction, label) if l != -100]
        for prediction, label in zip(predictions, labels)
    ]
    true_labels = [
        [label_list[l] for (p, l) in zip(prediction, label) if l != -100]
        for prediction, label in zip(predictions, labels)
    ]
    results = seqeval.compute(predictions=true_predictions, references=true_labels)
    return {
        "precision": results["overall_precision"],
        "recall": results["overall_recall"],
        "f1": results["overall_f1"],
        "accuracy": results["overall_accuracy"],
    }

trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=tokenized_datasets["train"],
    eval_dataset=tokenized_datasets["validation"],
    tokenizer=tokenizer,
    data_collator=DataCollatorForTokenClassification(tokenizer=tokenizer),
    compute_metrics=compute_metrics,
)

print("Starting training...")
trainer.train()
print("Training complete! Model saved to ./ner_model_output")
`;
  }

  /**
   * Generates a ready-to-run Python script for fine-tuning with SpaCy.
   */
  function generatePythonSpaCyScript() {
    return `# Production Fine-Tuning Pipeline: SpaCy v3 NER
# Generated by Dataset Fundamentals — Text Annotation Studio
# Usage:
#   pip install spacy
#   python train_ner_spacy.py

import json
import spacy
from spacy.tokens import DocBin
from spacy.util import filter_spans

# 1. Load data
with open("text_annotations_spacy.json", "r", encoding="utf-8") as f:
    training_data = json.load(f)

print(f"Loaded {len(training_data)} annotated documents.")

# 2. Convert to SpaCy DocBin format
nlp = spacy.blank("en")
doc_bin = DocBin()

for item in training_data:
    text = item["text"]
    entities = item["entities"]
    doc = nlp.make_doc(text)
    spans = []
    for start, end, label in entities:
        span = doc.char_span(start, end, label=label, alignment_mode="contract")
        if span is not None:
            spans.append(span)
        else:
            print(f"Warning: Skipping misaligned span: '{text[start:end]}' ({start}:{end})")
    doc.ents = filter_spans(spans)
    doc_bin.add(doc)

doc_bin.to_disk("./train.spacy")
print("Saved binary SpaCy corpus to ./train.spacy")
print("To train a model: python -m spacy init config config.cfg --pipeline ner && python -m spacy train config.cfg --output ./output --paths.train ./train.spacy --paths.dev ./train.spacy")
`;
  }

  function downloadCsv(session) {
    const mode = session.mode;
    const items = session.items || [];
    const annotations = session.annotations || {};
    let lines;
    if (mode === "sentiment") {
      lines = ["id,text,label"];
      items.forEach(function (item) {
        const ann = annotations[item.id] || {};
        lines.push(csvRow([item.id, item.text, ann.label || ""]));
      });
    } else {
      lines = ["id,text,start,end,label,surface"];
      items.forEach(function (item) {
        const spans = (annotations[item.id] && annotations[item.id].spans) || [];
        if (!spans.length) {
          lines.push(csvRow([item.id, item.text, "", "", "", ""]));
          return;
        }
        spans.forEach(function (s) {
          lines.push(
            csvRow([item.id, item.text, s.start, s.end, s.label, item.text.slice(s.start, s.end)])
          );
        });
      });
    }
    downloadFile(lines.join("\n") + "\n", "text-annotations.csv", "text/csv");
  }

  function csvRow(cells) {
    return cells
      .map(function (c) {
        const s = String(c == null ? "" : c);
        if (/[",\n\r]/.test(s)) return '"' + s.replace(/"/g, '""') + '"';
        return s;
      })
      .join(",");
  }

  function downloadTemplate(mode) {
    const presetId = mode === "ner" ? "ner-entities" : "sentiment-reviews";
    let rows;
    try {
      const preset = TextAnnLib.loadPreset(presetId);
      rows = (preset.items || []).map(function (item) {
        const row = { id: item.id, text: item.text };
        if (item.hint) row.hint = item.hint;
        return row;
      });
    } catch (err) {
      rows = TextAnnLib.emptyTemplate(mode || "sentiment");
    }
    const filename =
      mode === "ner" ? "ner-entities-template.json" : "sentiment-reviews-template.json";
    downloadJson(rows, filename);
  }

  TextAnnLib.buildExport = buildExport;
  TextAnnLib.downloadJson = downloadJson;
  TextAnnLib.downloadCsv = downloadCsv;
  TextAnnLib.downloadTemplate = downloadTemplate;
  TextAnnLib.downloadExport = function (session) {
    downloadJson(buildExport(session), "text-annotations.json");
  };

  // Commercial Exporters
  TextAnnLib.buildHuggingFaceJsonl = buildHuggingFaceJsonl;
  TextAnnLib.downloadHuggingFaceJsonl = function (session) {
    downloadFile(buildHuggingFaceJsonl(session), "text_annotations_hf.jsonl", "application/jsonl");
  };

  TextAnnLib.buildCoNLL2003 = buildCoNLL2003;
  TextAnnLib.downloadCoNLL2003 = function (session) {
    downloadFile(buildCoNLL2003(session), "text_annotations_conll2003.txt", "text/plain");
  };

  TextAnnLib.buildSpaCyJson = buildSpaCyJson;
  TextAnnLib.downloadSpaCyJson = function (session) {
    downloadFile(buildSpaCyJson(session), "text_annotations_spacy.json", "application/json");
  };

  TextAnnLib.downloadPythonHfScript = function () {
    downloadFile(generatePythonHfScript(), "train_ner_hf.py", "text/x-python");
  };

  TextAnnLib.downloadPythonSpaCyScript = function () {
    downloadFile(generatePythonSpaCyScript(), "train_ner_spacy.py", "text/x-python");
  };

})(typeof window !== "undefined" ? window : globalThis);
