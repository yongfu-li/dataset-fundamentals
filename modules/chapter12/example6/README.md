# Example 12.6 — Block Storage for Low-Latency Databases

**Chapter:** 12  
**Label:** `eg:12.6`  
**Source:** `author/chapter12.tex`  
**Section:** `sec:12.2.4` — Storage Types: Object vs. Block

## Learning objective

Use block storage for low-latency transactional database workloads.

## Chapter context

Section 12.2.4 explains HDFS-style distributed files: partitioning, blocks, and replication. Block volumes such as Amazon EBS attach low-latency disks to VMs running transactional databases that need POSIX-like I/O rather than object GET/PUT semantics.

## What this example shows

Block volumes such as Amazon EBS attach low-latency disks to VMs running transactional databases that need POSIX-like I/O rather than object GET/PUT semantics.

## What you should learn

### From the concept
- Low-latency disks attached to VMs (e.g., EBS)
- Transactional databases needing POSIX-like I/O
- Not a substitute for object archives/lakes

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
cd modules/chapter12/example6
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Block storage:
- Low-latency disks attached to VMs (e.g., EBS)
- Transactional databases needing POSIX-like I/O
- Not a substitute for object archives/lakes
```

## How to interpret the result

The closing bullet—'Not a substitute for object archives/lakes'—is the architecture gate: if your platform cannot deliver that property, the chosen store or consistency model is wrong for the workload.

## Try it / Reflect

- When would you choose the pattern in 'Block Storage for Low-Latency Databases' over a single-node database?

## Related examples

- `eg:12.5` — Previous example in the same section.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
