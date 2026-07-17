"""Example 7.20 — detect age skew between training data and the deployment population."""

from __future__ import annotations


def main() -> None:
    """Compare age-band shares in training data vs deployment and flag skew."""
    train_counts: dict[str, int] = {"18-29": 520, "30-44": 300, "45-59": 130, "60+": 50}
    deploy_share: dict[str, float] = {"18-29": 0.25, "30-44": 0.30, "45-59": 0.25, "60+": 0.20}

    total = sum(train_counts.values())
    print(f"{'Age band':<9}{'Train %':>9}{'Deploy %':>10}{'Ratio':>7}")
    for band, count in train_counts.items():
        share = count / total
        ratio = share / deploy_share[band]
        flag = "  <-- under-represented" if ratio < 0.8 else ("  <-- over-represented" if ratio > 1.25 else "")
        print(f"{band:<9}{share:>8.1%}{deploy_share[band]:>9.1%}{ratio:>7.2f}{flag}")

    print()
    print("A model trained on this skew will see mostly young records;")
    print("expect degraded predictions for 45-59 and 60+ users at deployment.")


if __name__ == "__main__":
    main()
