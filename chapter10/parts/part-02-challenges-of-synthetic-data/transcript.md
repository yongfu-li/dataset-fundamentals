# Chapter 10 — Challenges of synthetic data — transcript

**Clip id:** part-02-challenges-of-synthetic-data
**Estimated duration:** 6 minutes
**Sources:** `author/chapter10.tex` (§10.2), `modules/chapter10/example4/`, `modules/chapter10/example5/`

## Slide 1 — Chapter 10 — Challenges of synthetic data

Synthetic data promises scale and privacy, but generated rows are not automatically trustworthy. This part covers validation and generalization gaps, demographic bias inherited from generators, and overfitting or lack of diversity when models train only on synthetic copies.

## Slide 2 — Learning objectives

By the end of this part, learners should be able to explain why statistical similarity does not guarantee real-world utility; identify how source-data bias propagates through generators; and describe overfitting and homogeneity risks in machine-learning-based synthesis.

## Slide 3 — Validation and generalization gaps

A central challenge is proving that synthetic data represents the phenomena it is meant to simulate. Generated samples may match aggregate statistics yet miss subtle structure, natural variation, or noise that real systems exhibit. Models trained only on synthetic data may look strong in controlled tests yet fail when deployed on live inputs.

## Slide 4 — Example 10.4 — Face-Recognition Validation Gap

Example 10.4 highlights a validation gap for synthetic faces. Images may appear realistic yet lack lighting changes, occlusions, and other variation present in real portraits. A face-recognition model trained on such data can underperform in production. The example 4 module for this chapter frames this fidelity versus variation tradeoff.

## Slide 5 — Generalization beyond the generator

Synthetic data must generalize to conditions the generator never saw. Real environments change unpredictably—markets shift, sensors drift, and human behavior varies. When synthetic corpora oversimplify those dynamics, downstream models inherit a narrow view of the world and degrade outside the training distribution.

## Slide 6 — Potential biases from source data

Because generators learn from existing datasets or predefined models, they can inherit and amplify demographic or label skew present in the source. Mitigation matters: biased synthetic hiring or healthcare data can reinforce unfair outcomes even when individual identifiers are removed.

## Slide 7 — Example 10.5 — Demographic Bias in GAN Training Data

Example 10.5 shows how biased source data propagates through a generative adversarial network. If training images underrepresent certain groups, generated faces may perpetuate the same skew. In sensitive domains such as healthcare or hiring, that can produce systematically unfair decisions. The example 5 module for this chapter summarizes this propagation risk.

## Slide 8 — Overfitting and lack of diversity

Machine-learning generators can overfit training data and emit homogeneous samples. When synthetic sets omit edge cases or rare events, models may memorize simplified patterns and fail on varied real-world inputs. Diversity is not optional—it is part of whether synthetic augmentation actually improves robustness.

## Slide 9 — Takeaways

Synthetic data requires explicit validation against real benchmarks, not assumption of fidelity. Source bias, mode collapse, and homogeneity can all undermine utility. Teams should treat challenges here as design constraints before choosing statistical, GAN, or language-model synthesis methods.

## Slide 10 — Next

The next part introduces statistical distribution modeling, normal-distribution sampling sketches, and Monte Carlo simulation for uncertain outcomes such as asset returns.
