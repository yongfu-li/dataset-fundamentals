"""Example 11.14 — heuristic labeling functions for weak spam supervision."""

from __future__ import annotations

from collections import Counter


def lf_keywords(text: str) -> int:
    """Label +1 spam if promotional keywords appear, else abstain (0)."""
    keywords = ("free", "win", "prize", "click now")
    lowered = text.lower()
    return 1 if any(word in lowered for word in keywords) else 0


def lf_regex_money(text: str) -> int:
    """Label +1 spam if a $amount pattern appears, else abstain."""
    import re

    return 1 if re.search(r"\$\d+", text) else 0


def lf_ham_signoff(text: str) -> int:
    """Label -1 ham if a personal sign-off appears, else abstain."""
    markers = ("best regards", "see you tomorrow", "thanks,")
    lowered = text.lower()
    return -1 if any(marker in lowered for marker in markers) else 0


def combine(votes: list[int]) -> str:
    """Majority vote over non-abstaining labeling functions."""
    active = [vote for vote in votes if vote != 0]
    if not active:
        return "ABSTAIN"
    tally = Counter(active)
    winner, _ = tally.most_common(1)[0]
    return "SPAM" if winner > 0 else "HAM"


def main() -> None:
    """Apply three labeling functions and combine weak votes."""
    emails = [
        "FREE prize!!! Click now to win $500",
        "See you tomorrow — thanks, Alex",
        "Invoice attached for last month",
        "Win a free cruise — only $1 deposit",
    ]
    print(f"{'Email':<42}{'LF1':>5}{'LF2':>5}{'LF3':>5}{'Combo':>9}")
    for text in emails:
        votes = [lf_keywords(text), lf_regex_money(text), lf_ham_signoff(text)]
        print(
            f"{text[:40]:<42}{votes[0]:>5}{votes[1]:>5}{votes[2]:>5}"
            f"{combine(votes):>9}"
        )
    print()
    print("Each LF is noisy and may abstain; combining votes yields probabilistic")
    print("training labels without a full hand-labeled corpus (Snorkel-style).")


if __name__ == "__main__":
    main()
