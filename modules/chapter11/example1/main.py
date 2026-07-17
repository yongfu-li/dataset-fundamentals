"""Example 11.1 — uncertainty sampling queues near-tie binary predictions."""

from __future__ import annotations


def uncertainty_score(p_positive: float) -> float:
    """Return distance from a 0.5 decision boundary (lower => more uncertain)."""
    return abs(p_positive - 0.5)


def main() -> None:
    """Rank unlabeled images by binary prediction uncertainty."""
    pool: list[tuple[str, float]] = [
        ("img_clear_dog.jpg", 0.92),
        ("img_clear_cat.jpg", 0.11),
        ("img_blurry_pet.jpg", 0.51),
        ("img_night_pet.jpg", 0.48),
        ("img_toy_animal.jpg", 0.67),
    ]
    ranked = sorted(pool, key=lambda row: uncertainty_score(row[1]))
    print("Binary pool (P(dog)); lower |p-0.5| => higher priority\n")
    print(f"{'Image':<22}{'P(dog)':>8}{'|p-0.5|':>10}{'Queue?':>8}")
    for name, prob in ranked:
        score = uncertainty_score(prob)
        flag = "YES" if score <= 0.05 else ""
        print(f"{name:<22}{prob:>8.2f}{score:>10.2f}{flag:>8}")
    print()
    print("Near-ties (≈0.51/0.49) most reshape the decision boundary when labeled.")


if __name__ == "__main__":
    main()
