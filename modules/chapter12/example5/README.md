# Example 12.5 — Object Storage for Unstructured Archives

**Chapter:** 12  
**Label:** `eg:12.5`  
**Source:** `author/chapter12.tex`  
**Section:** `sec:12.2.4` — Storage Types: Object vs. Block

## Learning objective

Assign unstructured archives and lakehouse files to object storage.

## Chapter context

Section 12.2.4 explains HDFS-style distributed files: partitioning, blocks, and replication. Object stores such as Amazon S3 keep objects in a flat namespace with high durability, fitting media, backups, and lakehouse files that grow without block-device provisioning.

## What this example shows

Object stores such as Amazon S3 keep objects in a flat namespace with high durability, fitting media, backups, and lakehouse files that grow without block-device provisioning.

## What you should learn

### From the concept
- Flat namespace, high durability (e.g., S3)
- Media, backups, lakehouse files
- Grows without provisioning block devices

### From the output / result
- `run.sh` prints the structured takeaway below—use it when choosing storage or consistency patterns.

## Contents

| File | Role |
|------|------|
| `install.sh` | No-op or prerequisite check |
| `run.sh` | Prints the structured takeaway |

## Prerequisites

- OS: Linux, macOS, or Windows (Git Bash / WSL recommended for `.sh`)
- Bash

## Setup

```bash
cd modules/chapter12/example5
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Object storage:
- Flat namespace, high durability (e.g., S3)
- Media, backups, lakehouse files
- Grows without provisioning block devices
```

## How to interpret the result

The closing bullet—'Grows without provisioning block devices'—is the architecture gate: if your platform cannot deliver that property, the chosen store or consistency model is wrong for the workload.

## Try it / Reflect

- When would you choose the pattern in 'Object Storage for Unstructured Archives' over a single-node database?

## Related examples

- `eg:12.14` — DVC remotes on object storage.
- `Chapter 8` — Documentation and versioning.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
