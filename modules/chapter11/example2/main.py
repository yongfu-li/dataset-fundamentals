"""Example 11.2 — margin sampling prioritizes the smallest top-two gap."""

from __future__ import annotations


def margin(probs: dict[str, float]) -> float:
    """Return the gap between the top two class probabilities."""
    ordered = sorted(probs.values(), reverse=True)
    return ordered[0] - ordered[1]


def main() -> None:
    """Rank multi-class predictions by margin (smaller margin => query first)."""
    pool: list[tuple[str, dict[str, float]]] = [
        ("doc_clear", {"sports": 0.80, "politics": 0.12, "biz": 0.08}),
        ("doc_close", {"sports": 0.41, "politics": 0.39, "biz": 0.20}),
        ("doc_flatish", {"sports": 0.36, "politics": 0.34, "biz": 0.30}),
    ]
    ranked = sorted(pool, key=lambda row: margin(row[1]))
    print("Multi-class pool; smaller top-two margin => higher labeling priority\n")
    print(f"{'Instance':<12}{'Top1':>8}{'Top2':>8}{'Margin':>8}{'Queue?':>8}")
    for name, probs in ranked:
        tops = sorted(probs.items(), key=lambda item: item[1], reverse=True)[:2]
        m = margin(probs)
        flag = "YES" if m <= 0.05 else ""
        print(f"{name:<12}{tops[0][1]:>8.2f}{tops[1][1]:>8.2f}{m:>8.2f}{flag:>8}")
    print()
    print("A tiny margin signals weak class separation that a new label can sharpen.")


if __name__ == "__main__":
    main()
