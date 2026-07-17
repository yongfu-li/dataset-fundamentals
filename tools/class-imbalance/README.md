# Class imbalance explorer

Browser lab for **Chapter 5** imbalance practice: see the accuracy trap, hold out a
test fold, mitigate on **train only**, compare recall/F1.

**Live path:** `lectures/tools/class-imbalance/index.html` (after `build_site.py`)

## Learning objectives

- Recognize when majority-class accuracy looks fine but minority recall collapses
- Keep evaluation honest (never resample the test fold)
- Compare none / oversample / undersample / class weights on a logistic regression model
- Export an imbalance report for the audit trail

## Workflow

1. **Learn** — `fraud-rare` → `churn-mild` → `balanced-demo`
2. **Map** — label + up to 3 numeric features
3. **Strategy** — resample or reweight train; re-run
4. **Export** — `imbalance-report.json` / `.md`

## Upload rules

- Formats: CSV, JSON
- Max **5,000** rows, **2 MB**
- Need a binary label and at least one numeric feature

## Book anchors

- §5.2 / `sec:5.2.5` outliers, irrelevant features, and imbalance
- Linked from `part-04-outliers-irrelevant-and-imbalance`
- Sibling (not merge): train/val/test splitter preserves ratios; this tool responds to skew

## QA checklist

- [ ] `fraud-rare`: baseline accuracy high, recall low; oversample/weights improve recall
- [ ] Test fold size unchanged when switching strategies
- [ ] Balanced preset: metrics move together more than on fraud-rare
- [ ] Export JSON includes baseline vs treated metrics
