window.CURRICULUM_CH7 = window.CHAPTER7_CURRICULUM = window.curriculum_chapter7 = window.currentChapterData = {
  "ch7_p1": {
    "chapter": 7,
    "part": 1,
    "key": "ch7_p1",
    "index": "Lesson 1 of 10",
    "lessonTitle": "Introduction to Dataset Bias and Algorithmic Fairness",
    "title": "Introduction to Dataset Bias and Algorithmic Fairness",
    "badge": "16 Masterclass Slides • Socratic Dialogue • Interactive Sandbox",
    "description": "Formalizing Socio-Technical Feedback Dynamics, Supercritical Pitchfork Bifurcations, Legal Protections, and Kleinberg's Fairness Impossibility Theorem.",
    "slides": [
      {
        "id": "s1",
        "title": "Introduction to Dataset Bias and Algorithmic Fairness",
        "type": "title",
        "solo": {
          "speaker": "Dr. Nova (Senior Architect)",
          "title": "Introduction to Dataset Bias and Algorithmic Fairness",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Welcome to Lesson 7.1 of Dataset Fundamentals: Introduction to Dataset Bias and Algorithmic Fairness. Observational data is not an objective mirror of physical reality; it is an artifact produced by institutional measurement processes, sampling methodologies, historical resource allocations, and socio-economic inequities.",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "When machine learning models train on uncorrected observational data, they do not merely reflect historical disparities—they systematically codify, accelerate, and institutionalize them through self-reinforcing feedback loops. Today, we establish the mathematical foundations of socio-technical dynamical systems, dissect legal frameworks from disparate treatment to disparate impact, and algebraically prove Kleinberg's Impossibility Theorem.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-6 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[6px_6px_0px_#151b20] text-center my-3\">\n  <div class=\"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c9f3f4] border-2 border-[#151b20] text-[#0e7490] font-mono text-xs font-bold uppercase tracking-wider mb-3\">\n    <span>Track 7 • Dataset Bias &amp; Fairness • Lesson 7.1</span>\n  </div>\n  <h1 class=\"text-2xl sm:text-3xl font-black text-[#151b20] tracking-tight mb-2\">\n    Introduction to Dataset Bias &amp; Algorithmic Fairness\n  </h1>\n  <p class=\"text-sm sm:text-base text-[#475569] font-medium max-w-2xl mx-auto leading-relaxed\">\n    Formalizing Socio-Technical Feedback Dynamics, Supercritical Pitchfork Bifurcations, Legal Protections, and Kleinberg's Fairness Impossibility Theorem.\n  </p>\n  <div class=\"grid grid-cols-1 sm:grid-cols-4 gap-3 mt-5 max-w-4xl mx-auto text-left font-mono text-xs\">\n    <div class=\"p-3 rounded-xl bg-[#c9f3f4] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20]\">\n      <strong class=\"text-[#0e7490] block mb-1 font-black\">1. Dynamical Loops</strong>\n      <span class=\"text-[11px] text-[#151b20] leading-snug\">Runaway sampling maps $x_{t+1} = T(x_t)$ &amp; pitchfork bifurcation stability boundary.</span>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#fff0b9] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20]\">\n      <strong class=\"text-[#b45309] block mb-1 font-black\">2. Legal Frameworks</strong>\n      <span class=\"text-[11px] text-[#151b20] leading-snug\">Disparate Treatment vs. Disparate Impact, Title VII, ECOA, and the EEOC 80% Rule.</span>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#ffd8ce] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20]\">\n      <strong class=\"text-[#b91c1c] block mb-1 font-black\">3. Fairness Trilemma</strong>\n      <span class=\"text-[11px] text-[#151b20] leading-snug\">Kleinberg's theorem proving calibration &amp; equal error rates cannot co-exist across unequal base rates.</span>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#e7f4c8] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20]\">\n      <strong class=\"text-[#15803d] block mb-1 font-black\">4. Production Audit</strong>\n      <span class=\"text-[11px] text-[#151b20] leading-snug\">Pydantic V2 verification suite, COMPAS case study, and allocative vs. representational harms.</span>\n    </div>\n  </div>\n</div>\n"
        },
        "duo": {
          "title": "Socratic Debate: Is Data Ever Truly Neutral?",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Welcome back Kaito! Today we confront the deepest question in machine learning system design: is data ever truly an objective mirror of reality?",
              "dock": "main"
            },
            {
              "speaker": "Kaito",
              "text": "Well, if our sensors and logging pipelines record events accurately without bugs, doesn't the data represent ground truth? How can raw numbers be biased?",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Because numbers record human institutions, policing dispatches, lending histories, and societal inequalities! Worse, when a model acts on that data, it changes what is observed tomorrow. That creates a self-reinforcing socio-technical feedback loop.",
              "dock": "main"
            },
            {
              "speaker": "Kaito",
              "text": "So the algorithm doesn't just predict the world—it actively shapes future training data! Let's examine the mathematical formulation of that loop right now.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-6 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[6px_6px_0px_#151b20] text-center my-3\">\n  <div class=\"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c9f3f4] border-2 border-[#151b20] text-[#0e7490] font-mono text-xs font-bold uppercase tracking-wider mb-3\">\n    <span>Track 7 • Socratic Dialogue • Lesson 7.1</span>\n  </div>\n  <h1 class=\"text-2xl sm:text-3xl font-black text-[#151b20] tracking-tight mb-2\">\n    The Socio-Technical Feedback Dilemma\n  </h1>\n  <p class=\"text-sm sm:text-base text-[#475569] font-medium max-w-2xl mx-auto leading-relaxed\">\n    Dr. Nova and Kaito debate whether machine learning models merely predict reality or actively generate the downstream feedback loops that govern future data.\n  </p>\n  <div class=\"grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5 max-w-3xl mx-auto text-left font-mono text-xs\">\n    <div class=\"p-3.5 rounded-xl bg-[#fff0b9] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20]\">\n      <strong class=\"text-[#b45309] block mb-1\">Naive Static View:</strong>\n      <span class=\"text-[11px] text-[#151b20]\">Data is assumed i.i.d. and passive; models are evaluated purely on stationary statistical risk minimizers without downstream feedback.</span>\n    </div>\n    <div class=\"p-3.5 rounded-xl bg-[#ffd8ce] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20]\">\n      <strong class=\"text-[#b91c1c] block mb-1\">Dynamic Socio-Technical Reality:</strong>\n      <span class=\"text-[11px] text-[#151b20]\">Allocative decisions dictate where samples are gathered next. A 5% historical overcount can trigger a runaway 100% enforcement trap!</span>\n    </div>\n  </div>\n</div>\n"
        }
      },
      {
        "id": "s2",
        "title": "Conceptual Foundations: Data as an Artifact & Self-Reinforcing Loops",
        "type": "conceptual",
        "solo": {
          "speaker": "Dr. Nova (Senior Architect)",
          "title": "The Socio-Technical Feedback Architecture",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Let us trace the closed-loop architecture of automated decision-making. Historical disparities shape the initial training dataset D sub zero. An empirical risk minimizer learns an estimator f of x, which allocates resources such as loan approvals, bail recommendations, or police patrols.",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "These allocative decisions directly alter the observation process. If police are dispatched primarily to District A, they discover infractions primarily in District A, creating a skewed observation vector that feeds right back into tomorrow's training set. The model ends up predicting its own past decisions rather than latent reality.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono font-black text-xs text-[#0e7490] uppercase tracking-wide\">\n      §1 Epistemological Architecture • Self-Reinforcing Feedback Loop\n    </span>\n    <span class=\"px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black bg-[#ffd8ce] text-[#b91c1c] border-2 border-[#151b20]\">\n      Socio-Technical Closed Loop\n    </span>\n  </div>\n\n  <p class=\"text-xs text-[#151b20] font-sans mb-3 leading-relaxed\">\n    Observational data $\\mathcal{D}_0$ is conditioned on historical allocative policies. When an ML model $f_\\theta$ allocates resources, the sampling distribution at round $t+1$ becomes dependent on the model's past actions:\n  </p>\n\n  <div class=\"grid grid-cols-1 sm:grid-cols-5 gap-2 font-mono text-center text-xs mb-4\">\n    <div class=\"p-2.5 rounded-xl bg-[#ffd8ce] border-2 border-[#151b20] shadow-[2px_2px_0px_#151b20]\">\n      <strong class=\"text-[#b91c1c] block text-[11px]\">1. Historical Bias</strong>\n      <span class=\"text-[10px] text-[#475569]\">Systemic inequities &amp; reporting skew</span>\n    </div>\n    <div class=\"p-2.5 rounded-xl bg-[#c9f3f4] border-2 border-[#151b20] shadow-[2px_2px_0px_#151b20]\">\n      <strong class=\"text-[#0e7490] block text-[11px]\">2. Training Set $\\mathcal{D}_0$</strong>\n      <span class=\"text-[10px] text-[#475569]\">Observed proxies instead of latent truth</span>\n    </div>\n    <div class=\"p-2.5 rounded-xl bg-[#fff0b9] border-2 border-[#151b20] shadow-[2px_2px_0px_#151b20]\">\n      <strong class=\"text-[#b45309] block text-[11px]\">3. Estimator $f_\\theta$</strong>\n      <span class=\"text-[10px] text-[#475569]\">Empirical loss minimization</span>\n    </div>\n    <div class=\"p-2.5 rounded-xl bg-[#ffd8ce] border-2 border-[#151b20] shadow-[2px_2px_0px_#151b20]\">\n      <strong class=\"text-[#b91c1c] block text-[11px]\">4. Resource Action</strong>\n      <span class=\"text-[10px] text-[#475569]\">Targeted patrol or denial decisions</span>\n    </div>\n    <div class=\"p-2.5 rounded-xl bg-[#e7f4c8] border-2 border-[#151b20] shadow-[2px_2px_0px_#151b20]\">\n      <strong class=\"text-[#15803d] block text-[11px]\">5. Skewed Data $\\mathcal{D}_{t+1}$</strong>\n      <span class=\"text-[10px] text-[#475569]\">Self-fulfilling runaway confirmation</span>\n    </div>\n  </div>\n\n  <div class=\"p-3 rounded-xl bg-[#151b20] text-[#c9f3f4] font-mono text-xs\">\n    <div class=\"text-[#ffc83e] font-bold mb-1\">// Fundamental Feedback Condition (Ensign et al., 2018)</div>\n    $$\\Pr(X_{t+1} \\mid X_t, f_{\\theta_t}) \\neq \\Pr(X_{t+1} \\mid X_t)$$\n    <span class=\"text-[11px] text-[#94a3b8]\">The observation process violates the classical stationary Markov property because the policy perturbs the environment.</span>\n  </div>\n</div>\n"
        },
        "duo": {
          "title": "Socratic Exploration: Breaking the Illusion of Neutral Data",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Wait, Dr. Nova, you're saying that if we dispatch more police to District A, we will inevitably record more arrests there, even if District B has the exact same rate of underlying violations?",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Exactly. You cannot arrest someone you do not observe. If an officer spends eight hours in District A and zero hours in District B, observed crime in District B is zero by construction, while District A shows high crime.",
              "dock": "main"
            },
            {
              "speaker": "Kaito",
              "text": "And when we retrain our predictive model next week, it sees District A as high-risk and recommends sending even more officers there!",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Precisely. That is the runaway feedback loop. Unless an algorithm actively accounts for discovery probability, it manufactures synthetic evidence of crime from pure sampling bias.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono font-black text-xs text-[#0e7490] uppercase tracking-wide\">\n      Socratic Exploration • Sampling Bias vs. Ground Truth\n    </span>\n  </div>\n\n  <div class=\"p-4 rounded-xl bg-[#fffaf0] border-2 border-[#151b20] shadow-[2px_2px_0px_#151b20] font-mono text-xs\">\n    <div class=\"text-[#b45309] font-black text-sm mb-2\">The Observational Discovery Confound</div>\n    $$\\text{Observed Incidents} = \\text{True Latent Incidents} \\times \\Pr(\\text{Enforcement Detection})$$\n    <p class=\"text-[11px] text-[#475569] mt-2 leading-relaxed\">\n      When detection probability scales with algorithmic resource allocation, the model conflates high enforcement presence with high underlying prevalence.\n    </p>\n  </div>\n</div>\n"
        }
      },
      {
        "id": "s3",
        "title": "Mathematical Formulation of Runaway Sampling Loops: The Map x_{t+1} = T(x_t)",
        "type": "math",
        "solo": {
          "speaker": "Dr. Nova (Senior Architect)",
          "title": "Formulation of Predictive Policing Dynamical Systems",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Let us formalize this dynamical system mathematically. Consider two districts, A and B, with identical true latent crime rates lambda. Suppose historical dispatch records contain an initial measurement distortion delta in District A, such that lambda hat A of zero equals one plus delta times lambda.",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Patrol resources are allocated via a softmax power-law response with feedback exponent gamma. Let alpha denote the baseline citizen reporting rate independent of patrols. The detected crime rate at round t scales as lambda times alpha plus one minus alpha times pi A of t. Substituting this back yields a one-dimensional discrete dynamical map, x sub t plus one equals T of x sub t.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono font-black text-xs text-[#0e7490] uppercase tracking-wide\">\n      §2 Mathematical Formulation • Discrete Dynamical Map\n    </span>\n    <span class=\"px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black bg-[#c9f3f4] text-[#0e7490] border-2 border-[#151b20]\">\n      Ensign, Friedler et al. (FAT* 2018)\n    </span>\n  </div>\n\n  <div class=\"grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs mb-3\">\n    <div class=\"p-3 rounded-xl bg-[#fffaf0] border-2 border-[#151b20] shadow-[2px_2px_0px_#151b20]\">\n      <strong class=\"text-[#b45309] block text-xs mb-1\">1. Patrol Allocation Rule $\\pi_A(t)$</strong>\n      $$\\pi_A(t) = \\frac{\\hat{\\lambda}_A(t)^\\gamma}{\\hat{\\lambda}_A(t)^\\gamma + \\hat{\\lambda}_B(t)^\\gamma}$$\n      <span class=\"text-[10px] text-[#475569]\">$\\gamma > 0$ is the resource concentration exponent.</span>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#fffaf0] border-2 border-[#151b20] shadow-[2px_2px_0px_#151b20]\">\n      <strong class=\"text-[#b45309] block text-xs mb-1\">2. Detection Function $\\hat{\\lambda}_A(t)$</strong>\n      $$\\hat{\\lambda}_A(t) = \\lambda \\cdot \\left[ \\alpha + (1 - \\alpha) \\pi_A(t) \\right]$$\n      <span class=\"text-[10px] text-[#475569]\">$\\alpha \\in [0, 1]$ represents baseline citizen reporting.</span>\n    </div>\n  </div>\n\n  <div class=\"p-3.5 rounded-xl bg-[#151b20] text-[#c9f3f4] font-mono text-xs\">\n    <div class=\"text-[#ffc83e] font-bold mb-1\">// 1D Discrete Dynamical Map $x_{t+1} = T(x_t)$ where $x_t = \\pi_A(t)$</div>\n    $$T(x) = \\frac{\\left[ \\alpha + (1 - \\alpha) x \\right]^\\gamma}{\\left[ \\alpha + (1 - \\alpha) x \\right]^\\gamma + \\left[ \\alpha + (1 - \\alpha) (1 - x) \\right]^\\gamma}$$\n    <span class=\"text-[11px] text-[#94a3b8]\">Because latent crime is symmetric ($\\lambda_A = \\lambda_B$), parity $x^* = 1/2$ is always an equilibrium fixed point: $T(1/2) = 1/2$.</span>\n  </div>\n</div>\n"
        },
        "duo": {
          "title": "Socratic Dialogue: Unpacking the Parameters gamma and alpha",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "What do the parameters gamma and alpha physically represent in a real municipal police department, Dr. Nova?",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Alpha is citizen-initiated reporting—when residents call 911 independent of seeing a patrol car. If alpha is high, enforcement has ground truth from citizens. Gamma is the algorithm's greediness: gamma equals 1 is proportional dispatch, while gamma greater than 1 aggressively concentrates forces where crime was reported.",
              "dock": "main"
            },
            {
              "speaker": "Kaito",
              "text": "So if an algorithm has high gamma and low alpha, it creates its own reality! Let's see how the derivative at one-half reveals whether the system is stable or explodes.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs\">\n    <div class=\"p-3 rounded-xl bg-[#c9f3f4] border-2 border-[#151b20] shadow-[2px_2px_0px_#151b20]\">\n      <strong class=\"text-[#0e7490] block text-xs mb-1\">Citizen Baseline $\\alpha$</strong>\n      <span class=\"text-[11px] text-[#151b20]\">High $\\alpha$ anchors detection to genuine citizen calls, insulating against algorithmic bias. Low $\\alpha$ leaves detection at the mercy of patrol presence.</span>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#ffd8ce] border-2 border-[#151b20] shadow-[2px_2px_0px_#151b20]\">\n      <strong class=\"text-[#b91c1c] block text-xs mb-1\">Feedback Exponent $\\gamma$</strong>\n      <span class=\"text-[11px] text-[#151b20]\">When $\\gamma > 1$, the dispatch algorithm acts as a non-linear amplifier, triggering a supercritical pitchfork bifurcation.</span>\n    </div>\n  </div>\n</div>\n"
        }
      },
      {
        "id": "s4",
        "title": "Analytical Stability Derivation: Fixed Points & Supercritical Pitchfork Bifurcation",
        "type": "proof",
        "solo": {
          "speaker": "Dr. Nova (Senior Architect)",
          "title": "Closed-Form Proof of the Pitchfork Bifurcation",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "To determine whether the system recovers to fair parity or diverges into a runaway policing trap, we evaluate the derivative of the dynamical map T of x at the symmetric fixed point x star equals one-half.",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Applying the quotient rule, the derivative at one half evaluates to gamma times one minus alpha divided by one plus alpha. If this derivative is strictly less than one, the parity fixed point is locally asymptotically stable, and any initial bias decays exponentially. But if it exceeds one, the parity fixed point undergoes a supercritical pitchfork bifurcation and destabilizes!",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono font-black text-xs text-[#0e7490] uppercase tracking-wide\">\n      §2 Analytical Proof • Supercritical Pitchfork Bifurcation\n    </span>\n    <span class=\"px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black bg-[#ffd8ce] text-[#b91c1c] border-2 border-[#151b20]\">\n      Stability Criterion\n    </span>\n  </div>\n\n  <div class=\"p-3.5 rounded-xl bg-[#fffaf0] border-2 border-[#151b20] shadow-[2px_2px_0px_#151b20] font-mono text-xs mb-3\">\n    <div class=\"text-[#b45309] font-bold mb-1\">Closed-Form Derivative at Parity Fixed Point $x^* = 1/2$:</div>\n    $$T'\\left(\\frac{1}{2}\\right) = \\gamma \\cdot \\frac{1 - \\alpha}{1 + \\alpha}$$\n    <span class=\"text-[11px] text-[#475569]\">Derived via quotient rule on $u(x)^\\gamma / [u(x)^\\gamma + u(1-x)^\\gamma]$ evaluated at $u(1/2) = (1+\\alpha)/2$.</span>\n  </div>\n\n  <div class=\"grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs\">\n    <div class=\"p-3 rounded-xl bg-[#c9f3f4] border-2 border-[#151b20] shadow-[2px_2px_0px_#151b20]\">\n      <strong class=\"text-[#0e7490] block text-xs mb-1\">Regime 1: Sub-Critical Stability</strong>\n      $$T'(1/2) < 1 \\iff \\gamma < \\frac{1 + \\alpha}{1 - \\alpha}$$\n      <span class=\"text-[10.5px] text-[#151b20]\">Parity $x^* = 1/2$ is an asymptotic attractor. Initial reporting distortion $\\delta > 0$ decays exponentially to fair equilibrium $\\pi_A = 0.5$.</span>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#ffd8ce] border-2 border-[#151b20] shadow-[2px_2px_0px_#151b20]\">\n      <strong class=\"text-[#b91c1c] block text-xs mb-1\">Regime 2: Runaway Bifurcation</strong>\n      $$T'(1/2) > 1 \\iff \\gamma > \\frac{1 + \\alpha}{1 - \\alpha}$$\n      <span class=\"text-[10.5px] text-[#151b20]\">Parity destabilizes! Any infinitesimal $\\delta > 0$ triggers exponential divergence to $\\pi_A(\\infty) = 1.0, \\pi_B(\\infty) = 0.0$.</span>\n    </div>\n  </div>\n</div>\n"
        },
        "duo": {
          "title": "Socratic Epiphany: The All-or-Nothing Algorithmic Trap",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Hold on, Dr. Nova! You're telling me that if T prime of one-half is 1.01, the police will eventually send 100% of patrols to District A, even if the real difference in crime was only 1%?!",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "That is the exact definition of an unstable fixed point. The parity point at 50% repels the trajectory toward the absorbing boundaries. District A gets 100% of enforcement, and District B gets 0%.",
              "dock": "main"
            },
            {
              "speaker": "Kaito",
              "text": "And the police chief looks at the records and says: 'Look, District A has all the crime!' But the algorithm literally engineered the crime wave!",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Precisely. The algorithm manufactured reality. Next, let us examine the legal and regulatory frameworks designed to police these very failures.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2 text-center\">\n  <div class=\"inline-block p-3 rounded-xl bg-[#ffd8ce] border-2 border-[#151b20] font-mono text-xs text-[#b91c1c] font-black shadow-[3px_3px_0px_#151b20]\">\n    ⚠️ Theorem: Runaway Sampling Manufactures Synthetic Disparities from Zero Latent Difference\n  </div>\n</div>\n"
        }
      },
      {
        "id": "s5",
        "title": "Legal Protections: Disparate Treatment vs. Disparate Impact",
        "type": "legal",
        "solo": {
          "speaker": "Dr. Nova (Senior Architect)",
          "title": "Legal Jurisprudence in Machine Learning Systems",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Under US civil rights law, including Title VII, the Equal Credit Opportunity Act, and Article 10 of the European Union AI Act, algorithmic discrimination is partitioned into two distinct legal doctrines: Disparate Treatment and Disparate Impact.",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Disparate treatment is intentional differential treatment conditioned directly on protected attributes like race or gender. Disparate impact, by contrast, arises when a facially neutral policy or feature set produces disproportionately adverse outcomes for a protected class, such as through ZIP codes acting as high-capacity geographic proxies.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono font-black text-xs text-[#0e7490] uppercase tracking-wide\">\n      §3 Legal Jurisprudence • US Title VII, ECOA &amp; EU AI Act\n    </span>\n    <span class=\"px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black bg-[#fff0b9] text-[#b45309] border-2 border-[#151b20]\">\n      Barocas &amp; Selbst (2016)\n    </span>\n  </div>\n\n  <div class=\"overflow-x-auto mb-3\">\n    <table class=\"w-full text-left font-mono text-xs border-collapse border-2 border-[#151b20]\">\n      <thead>\n        <tr class=\"bg-[#151b20] text-[#c9f3f4]\">\n          <th class=\"p-2 border border-[#151b20]\">Legal Standard</th>\n          <th class=\"p-2 border border-[#151b20]\">Legal Definition</th>\n          <th class=\"p-2 border border-[#151b20]\">Mathematical Criterion</th>\n          <th class=\"p-2 border border-[#151b20]\">Engineering Vulnerability</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr class=\"bg-[#fffdf7]\">\n          <td class=\"p-2 border border-[#151b20] font-bold text-[#b91c1c]\">Disparate Treatment</td>\n          <td class=\"p-2 border border-[#151b20]\">Intentional differentiation based on protected attribute $A$.</td>\n          <td class=\"p-2 border border-[#151b20]\">$f(\\mathbf{x}, A=0) \\neq f(\\mathbf{x}, A=1)$</td>\n          <td class=\"p-2 border border-[#151b20]\">Including protected attributes directly in feature matrices.</td>\n        </tr>\n        <tr class=\"bg-[#fffaf0]\">\n          <td class=\"p-2 border border-[#151b20] font-bold text-[#b45309]\">Disparate Impact</td>\n          <td class=\"p-2 border border-[#151b20]\">Facially neutral policies yielding severe adverse outcomes.</td>\n          <td class=\"p-2 border border-[#151b20]\">$\\frac{\\Pr(f(\\mathbf{X})=1 \\mid A=0)}{\\Pr(f(\\mathbf{X})=1 \\mid A=1)} < 0.80$</td>\n          <td class=\"p-2 border border-[#151b20]\">Dropping $A$ but retaining correlated proxy features (ZIP code).</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n\n  <div class=\"p-3 rounded-xl bg-[#ffd8ce] border-2 border-[#151b20] text-xs font-mono\">\n    <strong class=\"text-[#b91c1c] block mb-1 font-black\">The Blindness Fallacy (\"Fairness Through Unawareness\"):</strong>\n    <span class=\"text-[#151b20] leading-snug\">Simply dropping the protected attribute column $A$ fails to prevent disparate impact. High-dimensional features $\\mathbf{X}_{\\setminus A}$ share extensive mutual information with $A$, allowing an unconstrained model to reconstruct $\\hat{A}$ and reproduce identical discriminatory disparities!</span>\n  </div>\n</div>\n"
        },
        "duo": {
          "title": "Socratic Debate: The Myth of Dropping the Protected Attribute",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Why can't we just delete the race and gender columns from our training set, Dr. Nova? If the model can't see the demographic label, how could it possibly discriminate?",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Because high-dimensional data is saturated with redundant proxies! A five-digit ZIP code in the United States correlates strongly with race due to decades of historical residential redlining. Browser user agents, browsing history, and purchase telemetry can predict protected attributes with over ninety percent accuracy.",
              "dock": "main"
            },
            {
              "speaker": "Kaito",
              "text": "So dropping the column gives managers a false sense of compliance while the model reconstructs the protected attribute internally!",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Exactly. That is the Blindness Fallacy. Legal compliance requires auditing disparate impact on outcomes, not pretending the model is blind.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"p-4 rounded-xl bg-[#ffd8ce] border-2 border-[#151b20] shadow-[2px_2px_0px_#151b20] font-mono text-xs\">\n    <strong class=\"text-[#b91c1c] block text-sm mb-1\">Mathematical Reality: Latent Proxy Reconstruction</strong>\n    $$\\hat{A} = g(\\mathbf{X}_{\\setminus A}), \\quad I(A; \\mathbf{X}_{\\setminus A}) \\gg 0$$\n    <p class=\"text-[11px] text-[#151b20] mt-1.5 leading-relaxed\">\n      Dropping $A$ achieves legal disparate treatment immunity while completely failing to prevent substantive disparate impact.\n    </p>\n  </div>\n</div>\n"
        }
      },
      {
        "id": "s6",
        "title": "Interactive Lab 1: Predictive Policing & Runaway Feedback Loop Simulator",
        "type": "lab",
        "solo": {
          "speaker": "Dr. Nova (Senior Architect)",
          "title": "Interactive Lab 1: Runaway Feedback Simulator",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Welcome to Interactive Lab 1: The Runaway Feedback Loop Simulator. In the live canvas below, you can manipulate initial measurement distortion delta, feedback concentration exponent gamma, and citizen reporting baseline alpha.",
              "dock": "sim"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Watch the derivative indicator T prime of one-half. When gamma is set such that T prime exceeds 1.0, observe how an initial five percent reporting bias triggers an irreversible supercritical pitchfork divergence across 35 operational rounds, driving patrol allocations to one hundred percent in District A!",
              "dock": "sim"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-2 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono font-black text-xs text-[#0e7490] uppercase tracking-wide\">\n      🔬 Interactive Laboratory 7.1.1 • Socio-Technical Dynamical System\n    </span>\n    <span class=\"px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black bg-[#ffc83e] text-[#151b20] border-2 border-[#151b20]\">\n      Simulator 7.1 Tab A\n    </span>\n  </div>\n  <p class=\"text-xs text-[#475569] font-sans mb-3\">\n    Simulate the discrete dynamical map $x_{t+1} = T(x_t)$ across 35 operational rounds. The live canvas and interactive controls are embedded directly below.\n  </p>\n</div>\n"
        },
        "duo": {
          "title": "Socratic Lab Exploration: Triggering the Supercritical Pitchfork",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Look at the simulator controls, Dr. Nova! I have delta set to five percent, gamma at 1.80, and alpha at 0.20. The derivative needle shows T prime of one-half is 1.20!",
              "dock": "sim"
            },
            {
              "speaker": "Dr. Nova",
              "text": "And observe the trajectory on the canvas: round by round, District A patrol share climbs until it hits ninety-nine percent, while District B drops to zero! Now drag the citizen baseline slider alpha up to 0.40.",
              "dock": "sim"
            },
            {
              "speaker": "Kaito",
              "text": "Whoa! T prime dropped to 0.77, and the two patrol lines immediately pull back together toward fifty-fifty parity! High citizen reporting self-corrects the initial reporting distortion!",
              "dock": "sim"
            },
            {
              "speaker": "Dr. Nova",
              "text": "That is dynamical bifurcation theory in action. Try different combinations of parameters to explore the critical boundary.",
              "dock": "sim"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-2 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono font-black text-xs text-[#0e7490] uppercase tracking-wide\">\n      Socratic Lab • Exploring the Bifurcation Boundary\n    </span>\n  </div>\n  <p class=\"text-xs text-[#475569] font-sans\">\n    Adjust the sliders below to observe how the stability boundary $T'(1/2) = 1.0$ governs whether disparities decay to parity or explode into runaway divergence.\n  </p>\n</div>\n"
        }
      },
      {
        "id": "s7",
        "title": "Active Checkpoint 1: Supercritical Pitchfork Bifurcation & Dynamical Stability",
        "type": "checkpoint",
        "solo": {
          "speaker": "Dr. Nova (Senior Architect)",
          "title": "Active Checkpoint 1: Pitchfork Bifurcation Mechanics",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "It is time for Active Recall Checkpoint 1. Consider a predictive policing algorithm where citizen baseline reporting alpha is 0.333, and the feedback exponent gamma is set to 2.4. District A starts with a 2% initial reporting overcount.",
              "dock": "quiz"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Calculate the derivative T prime of one-half and determine whether the system stabilizes at parity or undergoes runaway divergence. Select Option A, B, or C above me to verify your mastery.",
              "dock": "quiz"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2 text-center\">\n  <div class=\"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffc83e] border-2 border-[#151b20] text-[#151b20] font-mono text-xs font-bold uppercase tracking-wider mb-2\">\n    <span>⚡ Checkpoint 7.1.1 • Pitchfork Bifurcation Mechanics</span>\n  </div>\n  <p class=\"text-xs text-[#475569] max-w-xl mx-auto font-mono\">\n    Apply the closed-form derivative formula $T'(1/2) = \\gamma \\frac{1-\\alpha}{1+\\alpha}$ to evaluate the stability regime of the discrete dynamical map.\n  </p>\n</div>\n"
        },
        "duo": {
          "title": "Socratic Checkpoint: Calculating T'(1/2) Under Pressure",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Alpha is 0.333, gamma is 2.4, and District A has a 2% initial bias! Review the three options above me, and let's calculate the derivative together!",
              "dock": "quiz"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2 text-center\">\n  <span class=\"font-mono font-bold text-xs text-[#b45309]\">Socratic Assessment: Select Option A, B, or C below to submit your derivation.</span>\n</div>\n"
        }
      },
      {
        "id": "s8",
        "title": "Demographic Parity & The EEOC Four-Fifths Rule (DIR < 0.80)",
        "type": "metric",
        "solo": {
          "speaker": "Dr. Nova (Senior Architect)",
          "title": "Formal Demographic Parity & The 80% Rule",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Let us turn to formal fairness metrics. The most famous benchmark in legal compliance is the Disparate Impact Ratio, codified in the Equal Employment Opportunity Commission's Four-Fifths Rule.",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "The Disparate Impact Ratio is the selection rate of the unprivileged group divided by the selection rate of the privileged group. If this ratio falls below 0.80, courts establish a prima facie evidentiary presumption of illegal discrimination. Closely related is Demographic Parity Difference, which requires the absolute selection rate gap to be zero.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono font-black text-xs text-[#0e7490] uppercase tracking-wide\">\n      §4 Fairness Metrics • Statistical Parity &amp; The Four-Fifths Rule\n    </span>\n    <span class=\"px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black bg-[#c9f3f4] text-[#0e7490] border-2 border-[#151b20]\">\n      EEOC Guidelines (29 C.F.R. § 1607)\n    </span>\n  </div>\n\n  <div class=\"grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs mb-3\">\n    <div class=\"p-3.5 rounded-xl bg-[#fffaf0] border-2 border-[#151b20] shadow-[2px_2px_0px_#151b20]\">\n      <strong class=\"text-[#b45309] block text-xs mb-1\">Disparate Impact Ratio (DIR)</strong>\n      $$\\text{DIR} = \\frac{\\Pr(\\hat{Y} = 1 \\mid A = 0)}{\\Pr(\\hat{Y} = 1 \\mid A = 1)}$$\n      <span class=\"text-[10.5px] text-[#151b20]\">Legal threshold: $\\text{DIR} \\ge 0.80$ ($80\\%$). If $\\text{DIR} < 0.80$, adverse impact is legally presumed.</span>\n    </div>\n    <div class=\"p-3.5 rounded-xl bg-[#fffaf0] border-2 border-[#151b20] shadow-[2px_2px_0px_#151b20]\">\n      <strong class=\"text-[#b45309] block text-xs mb-1\">Statistical Parity Difference ($\\Delta_{\\text{DP}}$)</strong>\n      $$\\Delta_{\\text{DP}} = \\Pr(\\hat{Y} = 1 \\mid A = 0) - \\Pr(\\hat{Y} = 1 \\mid A = 1)$$\n      <span class=\"text-[10.5px] text-[#151b20]\">Demands complete statistical independence: $\\hat{Y} \\perp A$. Parity achieved when $\\Delta_{\\text{DP}} = 0$.</span>\n    </div>\n  </div>\n\n  <div class=\"p-3 rounded-xl bg-[#e7f4c8] border-2 border-[#151b20] font-mono text-xs\">\n    <strong class=\"text-[#15803d] block mb-1\">Worked Example:</strong>\n    <span class=\"text-[#151b20]\">If 100 men apply and 40 are hired ($40\\%$), and 50 women apply and 15 are hired ($30\\%$):</span>\n    $$\\text{DIR} = \\frac{0.30}{0.40} = 0.75 \\quad (75\\% < 80\\% \\implies \\text{Violation!})$$\n  </div>\n</div>\n"
        },
        "duo": {
          "title": "Socratic Dialogue: The Limitations of Pure Statistical Parity",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Statistical parity seems so clean: just make sure both demographic groups get approved at the exact same rate! Why doesn't everyone just enforce demographic parity?",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Because statistical parity ignores qualified base rates! If one cohort has historically had ten years more experience in software engineering due to educational barriers, forcing equal acceptance rates either requires rejecting highly qualified individuals or hiring unqualified ones, which degrades accuracy and utility.",
              "dock": "main"
            },
            {
              "speaker": "Kaito",
              "text": "So statistical parity guarantees outcome balance, but it doesn't guarantee fairness conditioned on true qualification!",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Precisely. That insight led researchers to formulate error rate parity: Equal Opportunity and Equalized Odds.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"p-3.5 rounded-xl bg-[#fff0b9] border-2 border-[#151b20] font-mono text-xs\">\n    <strong class=\"text-[#b45309] block mb-1\">Key Insight: Independence vs. Qualification</strong>\n    <span class=\"text-[#151b20]\">Demographic Parity requires $\\hat{Y} \\perp A$. It does not condition on true label $Y$. To condition on merit, we require criteria like $\\hat{Y} \\perp A \\mid Y$.</span>\n  </div>\n</div>\n"
        }
      },
      {
        "id": "s9",
        "title": "Conditional Error Rate Parity: Equal Opportunity & Equalized Odds",
        "type": "metric",
        "solo": {
          "speaker": "Dr. Nova (Senior Architect)",
          "title": "Equal Opportunity & Equalized Odds Formulations",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "To respect qualifications while safeguarding fairness, Hardt, Price, and Srebro introduced Equal Opportunity in 2016. Equal Opportunity requires that qualified individuals, meaning those where true label Y equals 1, have equal probability of being selected regardless of demographic group.",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Mathematically, this means True Positive Rates must match across groups: TPR sub zero equals TPR sub one. Equalized Odds takes this one step further by demanding parity in both True Positive Rates and False Positive Rates simultaneously. In probabilistic notation, the prediction Y hat is conditionally independent of protected attribute A given true outcome Y.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono font-black text-xs text-[#0e7490] uppercase tracking-wide\">\n      §4 Error Rate Parity • Equal Opportunity &amp; Equalized Odds\n    </span>\n    <span class=\"px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black bg-[#c9f3f4] text-[#0e7490] border-2 border-[#151b20]\">\n      Hardt, Price &amp; Srebro (NeurIPS 2016)\n    </span>\n  </div>\n\n  <div class=\"grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs mb-3\">\n    <div class=\"p-3.5 rounded-xl bg-[#fffaf0] border-2 border-[#151b20] shadow-[2px_2px_0px_#151b20]\">\n      <strong class=\"text-[#b45309] block text-xs mb-1\">Equal Opportunity Difference ($\\Delta_{\\text{Eopp}}$)</strong>\n      $$\\Delta_{\\text{Eopp}} = \\Pr(\\hat{Y}=1 \\mid A=0, Y=1) - \\Pr(\\hat{Y}=1 \\mid A=1, Y=1)$$\n      $$\\Delta_{\\text{Eopp}} = \\text{TPR}_0 - \\text{TPR}_1 = 0$$\n      <span class=\"text-[10.5px] text-[#475569]\">Qualified candidates have equal probability of positive outcome.</span>\n    </div>\n    <div class=\"p-3.5 rounded-xl bg-[#fffaf0] border-2 border-[#151b20] shadow-[2px_2px_0px_#151b20]\">\n      <strong class=\"text-[#b45309] block text-xs mb-1\">Equalized Odds (Average Absolute Odds Difference)</strong>\n      $$\\Delta_{\\text{AOD}} = \\frac{1}{2} \\left( |\\text{FPR}_0 - \\text{FPR}_1| + |\\text{TPR}_0 - \\text{TPR}_1| \\right)$$\n      $$\\hat{Y} \\perp A \\mid Y$$\n      <span class=\"text-[10.5px] text-[#475569]\">Joint parity of both error types: False Positives &amp; False Negatives.</span>\n    </div>\n  </div>\n\n  <div class=\"p-3 rounded-xl bg-[#151b20] text-[#c9f3f4] font-mono text-xs\">\n    <strong class=\"text-[#ffc83e] block mb-1\">Engineering Realization:</strong>\n    <span class=\"text-[11px] text-[#94a3b8]\">Satisfying Equal Opportunity in binary classification typically requires applying group-specific decision thresholds: $\\theta_0 \\neq \\theta_1$ on predicted probability scores $\\hat{p}(\\mathbf{x})$.</span>\n  </div>\n</div>\n"
        },
        "duo": {
          "title": "Socratic Exploration: The Need for Different Thresholds",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Wait, did you just say group-specific thresholds? Using a threshold of 0.45 for one group and 0.55 for another group? Wouldn't that be disparate treatment under the law?",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "And there is the central tension of algorithmic justice! To achieve equality of opportunity on outcomes when score distributions differ, an engineer must tune group thresholds post-processing. But doing so treats candidates differently based on their protected attribute, colliding directly with disparate treatment laws.",
              "dock": "main"
            },
            {
              "speaker": "Kaito",
              "text": "So if you keep thresholds identical, you get disparate impact; if you adjust thresholds to fix disparate impact, you risk disparate treatment!",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "That is the legal tightrope. Now let us examine the third mathematical definition: Predictive Parity and Group Calibration.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2 text-center font-mono text-xs\">\n  <div class=\"p-3 rounded-xl bg-[#ffd8ce] border-2 border-[#151b20] text-[#b91c1c] font-black\">\n    ⚖️ The Legal Paradox: Post-Processing Threshold Adjustments ($\\theta_0 \\eq \\theta_1$) Resolve Disparate Impact but Collide with Disparate Treatment Prohibitions!\n  </div>\n</div>\n"
        }
      },
      {
        "id": "s10",
        "title": "Predictive Parity: Group Calibration within Demographic Cohorts",
        "type": "metric",
        "solo": {
          "speaker": "Dr. Nova (Senior Architect)",
          "title": "Predictive Parity & Calibration Within Groups",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Our third foundational fairness paradigm is Group Calibration, also known as Predictive Parity. A risk-scoring tool or classifier is well-calibrated if a predicted probability corresponds to the exact same empirical probability of success regardless of demographic group.",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "For a binary decision, this requires Positive Predictive Value, or PPV, to be equal across cohorts: PPV sub zero equals PPV sub one. If a lender assigns a risk score of seven, that score must mean a sixty percent default rate whether the borrower is Black, White, male, or female. This was the exact mathematical defense mounted by Northpointe in the famous COMPAS audit.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono font-black text-xs text-[#0e7490] uppercase tracking-wide\">\n      §4 Fairness Metrics • Group Calibration &amp; Predictive Parity\n    </span>\n    <span class=\"px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black bg-[#c9f3f4] text-[#0e7490] border-2 border-[#151b20]\">\n      Chouldechova (2017)\n    </span>\n  </div>\n\n  <div class=\"p-3.5 rounded-xl bg-[#fffaf0] border-2 border-[#151b20] shadow-[2px_2px_0px_#151b20] font-mono text-xs mb-3\">\n    <strong class=\"text-[#b45309] block text-xs mb-1\">Mathematical Definition of Group Calibration:</strong>\n    $$\\Pr(Y = 1 \\mid \\hat{Y} = 1, A = 0) = \\Pr(Y = 1 \\mid \\hat{Y} = 1, A = 1) \\iff \\text{PPV}_0 = \\text{PPV}_1$$\n    <span class=\"text-[11px] text-[#475569]\">General score formulation: $\\Pr(Y = 1 \\mid R = r, A = 0) = \\Pr(Y = 1 \\mid R = r, A = 1) = r$ for all risk tiers $r \\in [0, 1]$.</span>\n  </div>\n\n  <div class=\"grid grid-cols-1 sm:grid-cols-3 gap-2.5 font-mono text-xs text-center\">\n    <div class=\"p-3 rounded-xl bg-[#c9f3f4] border-2 border-[#151b20] shadow-[2px_2px_0px_#151b20]\">\n      <strong class=\"text-[#0e7490] block text-xs\">1. Demographic Parity</strong>\n      <span class=\"text-[10px] text-[#151b20]\">$\\hat{Y} \\perp A$</span>\n      <span class=\"text-[9.5px] text-[#475569] block mt-1\">Equal selection volume</span>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#fff0b9] border-2 border-[#151b20] shadow-[2px_2px_0px_#151b20]\">\n      <strong class=\"text-[#b45309] block text-xs\">2. Equalized Odds</strong>\n      <span class=\"text-[10px] text-[#151b20]\">$\\hat{Y} \\perp A \\mid Y$</span>\n      <span class=\"text-[9.5px] text-[#475569] block mt-1\">Equal error rates (TPR/FPR)</span>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#e7f4c8] border-2 border-[#151b20] shadow-[2px_2px_0px_#151b20]\">\n      <strong class=\"text-[#15803d] block text-xs\">3. Predictive Parity</strong>\n      <span class=\"text-[10px] text-[#151b20]\">$Y \\perp A \\mid \\hat{Y}$</span>\n      <span class=\"text-[9.5px] text-[#475569] block mt-1\">Equal calibration (PPV)</span>\n    </div>\n  </div>\n</div>\n"
        },
        "duo": {
          "title": "Socratic Preview: The Clash of Three Incompatible Ideals",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "So we have three distinct fairness definitions: Demographic Parity, Equalized Odds, and Group Calibration. Can we just write an optimization function that enforces all three?",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "And that brings us to the most celebrated theoretical theorem in algorithmic fairness. It is mathematically impossible to satisfy them simultaneously whenever base prevalence rates differ between demographic groups!",
              "dock": "main"
            },
            {
              "speaker": "Kaito",
              "text": "Mathematically impossible? Not just hard to optimize, but algebraically impossible?!",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Impossible. Let us write out the exact algebraic proof right now.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2 text-center\">\n  <span class=\"font-mono text-xs font-black text-[#b91c1c]\">⚡ The Algorithmic Fairness Trilemma: Why You Cannot Have Calibration AND Equal False Positive Rates!</span>\n</div>\n"
        }
      },
      {
        "id": "s11",
        "title": "Kleinberg's Impossibility Theorem: Algebraic Proof of the Fairness Trilemma",
        "type": "proof",
        "solo": {
          "speaker": "Dr. Nova (Senior Architect)",
          "title": "Closed-Form Proof of the Impossibility Theorem",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Here is the formal proof of Kleinberg and Chouldechova's Impossibility Theorem. Let p sub g denote the base prevalence rate of group g. By Bayes' theorem, the probability of positive prediction relates to true positive rate and positive predictive value as TPR times p sub g divided by PPV.",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Solving directly for False Positive Rate yields FPR sub g equals p sub g over 1 minus p sub g, times 1 minus PPV over PPV, times TPR. If we enforce equal calibration and equal opportunity across groups, the PPV and TPR terms cancel out completely, leaving the ratio of False Positive Rates equal to the ratio of base rate odds! Therefore, if base rates differ, equal false positive rates cannot hold.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono font-black text-xs text-[#0e7490] uppercase tracking-wide\">\n      §5 Theoretical Proof • Kleinberg's Impossibility Theorem\n    </span>\n    <span class=\"px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black bg-[#ffd8ce] text-[#b91c1c] border-2 border-[#151b20]\">\n      Kleinberg (2016), Chouldechova (2017)\n    </span>\n  </div>\n\n  <div class=\"p-3.5 rounded-xl bg-[#151b20] text-[#c9f3f4] font-mono text-xs mb-3\">\n    <div class=\"text-[#ffc83e] font-bold mb-1\">// 1. Closed-Form Derivation of False Positive Rate</div>\n    $$\\text{FPR}_g = \\left( \\frac{p_g}{1 - p_g} \\right) \\left( \\frac{1 - \\text{PPV}_g}{\\text{PPV}_g} \\right) \\cdot \\text{TPR}_g$$\n    <span class=\"text-[11px] text-[#94a3b8]\">Derived by equating joint probabilities $\\Pr(\\hat{Y}=1, Y=0 \\mid A=g)$ through Bayes' rule.</span>\n  </div>\n\n  <div class=\"p-3.5 rounded-xl bg-[#fffaf0] border-2 border-[#151b20] shadow-[2px_2px_0px_#151b20] font-mono text-xs mb-3\">\n    <div class=\"text-[#b45309] font-bold mb-1\">// 2. Enforcing Calibration (PPV=v) and Equal Opportunity (TPR=\\tau):</div>\n    $$\\frac{\\text{FPR}_0}{\\text{FPR}_1} = \\frac{\\left(\\frac{p_0}{1-p_0}\\right)\\left(\\frac{1-v}{v}\\right)\\tau}{\\left(\\frac{p_1}{1-p_1}\\right)\\left(\\frac{1-v}{v}\\right)\\tau} = \\frac{\\frac{p_0}{1-p_0}}{\\frac{p_1}{1-p_1}} = \\frac{\\text{Odds}(p_0)}{\\text{Odds}(p_1)}$$\n  </div>\n\n  <div class=\"p-3 rounded-xl bg-[#ffd8ce] border-2 border-[#151b20] font-mono text-xs\">\n    <strong class=\"text-[#b91c1c] block mb-1 font-black\">The Inescapable Trilemma:</strong>\n    <span class=\"text-[#151b20]\">Whenever base prevalence rates differ ($p_0 \\neq p_1$), the odds ratio $\\frac{\\text{Odds}(p_0)}{\\text{Odds}(p_1)} \\neq 1$. Therefore, <b>Equal Calibration and Equal False Positive Rates are mathematically incompatible!</b></span>\n  </div>\n</div>\n"
        },
        "duo": {
          "title": "Socratic Resolution: Why COMPAS Was Both Fair and Biased",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Look at that equation: FPR zero over FPR one equals Odds of p zero over Odds of p one! Everything else canceled out!",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Everything canceled out, Kaito. That single equation explains the entire 2016 COMPAS recidivism scandal between ProPublica and Northpointe.",
              "dock": "main"
            },
            {
              "speaker": "Kaito",
              "text": "ProPublica proved that Black defendants had double the False Positive Rate of White defendants. Northpointe responded that their tool was fair because risk scores were equally calibrated across racial groups!",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "And both parties were mathematically correct! Because Broward County had unequal historical arrest rates between cohorts, maintaining Northpointe's calibration mathematically mandated ProPublica's false positive disparity! Now, let us inspect this tradeoff live in Workbench 2.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2 text-center font-mono text-xs\">\n  <div class=\"p-3 rounded-xl bg-[#c9f3f4] border-2 border-[#151b20] text-[#0e7490] font-bold\">\n    🎯 ProPublica measured FPR parity; Northpointe measured PPV calibration. Kleinberg's theorem proves neither could satisfy the other!\n  </div>\n</div>\n"
        }
      },
      {
        "id": "s12",
        "title": "Interactive Lab 2: Kleinberg Impossibility Theorem & COMPAS Calibration Workbench",
        "type": "lab",
        "solo": {
          "speaker": "Dr. Nova (Senior Architect)",
          "title": "Interactive Lab 2: Fairness Trilemma Workbench",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Welcome to Interactive Lab 2: The Fairness Trilemma and COMPAS Calibration Workbench. In this environment, Group 0 has an underlying base rate of 32%, while Group 1 has an underlying base rate of 55%.",
              "dock": "sim"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Click the preset buttons to witness the trilemma firsthand. When you click 'Equalize PPV', the calibration gap drops to zero, but the False Positive Rate disparity leaps to 18 points. When you click 'Equalize FPR', the error gap vanishes, but the Disparate Impact Ratio plunges into severe violation!",
              "dock": "sim"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-2 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono font-black text-xs text-[#0e7490] uppercase tracking-wide\">\n      🔬 Interactive Laboratory 7.1.2 • Algorithmic Fairness Trilemma\n    </span>\n    <span class=\"px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black bg-[#ffc83e] text-[#151b20] border-2 border-[#151b20]\">\n      Simulator 7.1 Tab B\n    </span>\n  </div>\n  <p class=\"text-xs text-[#475569] font-sans mb-3\">\n    Inspect the ROC operating points and trade-offs between Northpointe Calibration (Equal PPV) and ProPublica Error Parity (Equal FPR).\n  </p>\n</div>\n"
        },
        "duo": {
          "title": "Socratic Lab Exploration: The Inescapable COMPAS Seesaw",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "I just clicked 'Equalize PPV (Northpointe)'. Both groups have calibrated PPVs around 68%, but look at the FPR Disparity card: it's glowing red with a huge gap!",
              "dock": "sim"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Now click 'Equalize FPR (ProPublica)'.",
              "dock": "sim"
            },
            {
              "speaker": "Kaito",
              "text": "Now the FPR gap is 0.00, but the Disparate Impact Ratio drops to 0.65, violating the 80% rule, and the calibration gap opens up! You literally cannot push one metric down without the other ballooning!",
              "dock": "sim"
            },
            {
              "speaker": "Dr. Nova",
              "text": "That is the mathematical reality every data team must communicate to policy stakeholders. Fairness is not a free lunch; it is a constrained trade-off.",
              "dock": "sim"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"p-3 rounded-xl bg-[#fffaf0] border-2 border-[#151b20] font-mono text-xs\">\n    <span class=\"text-[#b45309] font-bold\">Use the controls below to slide decision thresholds $\\theta_0$ and $\\theta_1$ and watch the operating points on the live ROC canvas.</span>\n  </div>\n</div>\n"
        }
      },
      {
        "id": "s13",
        "title": "Active Checkpoint 2: The COMPAS Recidivism Controversy & Base Rate Odds Disparity",
        "type": "checkpoint",
        "solo": {
          "speaker": "Dr. Nova (Senior Architect)",
          "title": "Active Checkpoint 2: Kleinberg Impossibility Formula",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Time for Active Recall Checkpoint 2. Group 0 has base rate p sub zero equals 0.20, and Group 1 has base rate p sub one equals 0.50. An algorithm achieves equal positive predictive value and equal true positive rates.",
              "dock": "quiz"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Calculate the theoretical ratio of False Positive Rates, FPR sub zero over FPR sub one. Select Option A, B, or C above me to confirm your computation.",
              "dock": "quiz"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2 text-center\">\n  <div class=\"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#15803d] text-white border-2 border-[#151b20] font-mono text-xs font-bold uppercase tracking-wider mb-2\">\n    <span>⚡ Checkpoint 7.1.2 • Kleinberg Odds Ratio Computation</span>\n  </div>\n  <p class=\"text-xs text-[#475569] max-w-xl mx-auto font-mono\">\n    Use Kleinberg's Theorem formula $\\frac{\\text{FPR}_0}{\\text{FPR}_1} = \\frac{\\text{Odds}(p_0)}{\\text{Odds}(p_1)}$ where $\\text{Odds}(p) = \\frac{p}{1-p}$.\n  </p>\n</div>\n"
        },
        "duo": {
          "title": "Socratic Checkpoint: Computing the Base Rate Odds Ratio",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Base rates of 20% and 50%! Review our three options above me, calculate the ratio of the odds, and let's select the correct answer!",
              "dock": "quiz"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2 text-center\">\n  <span class=\"font-mono font-bold text-xs text-[#15803d]\">Socratic Assessment: Select Option A, B, or C below to submit your derivation.</span>\n</div>\n"
        }
      },
      {
        "id": "s14",
        "title": "Taxonomy of Algorithmic Harms: Allocative Harms vs. Representational Harms",
        "type": "conceptual",
        "solo": {
          "speaker": "Dr. Nova (Senior Architect)",
          "title": "Allocative vs. Representational Algorithmic Harms",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Beyond mathematical trade-offs, algorithmic fairness failures fall into two fundamental epistemological classes: Allocative Harms and Representational Harms, as categorized by Barocas, Crawford, and Selbst.",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Allocative harms occur when an algorithm withholds or differentially distributes immediate, measurable economic goods, liberties, or opportunities, such as mortgage underwriting, bail recommendations, or medical triage. Representational harms occur when systems degrade social dignity, perpetuate cultural stereotypes, or erase demographic visibility, such as facial recognition failures and gendered foundation model embeddings.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono font-black text-xs text-[#0e7490] uppercase tracking-wide\">\n      §6 Harms Taxonomy • Allocative vs. Representational Dimensions\n    </span>\n    <span class=\"px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black bg-[#fff0b9] text-[#b45309] border-2 border-[#151b20]\">\n      Barocas &amp; Crawford (2016)\n    </span>\n  </div>\n\n  <div class=\"grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs mb-3\">\n    <div class=\"p-3.5 rounded-xl bg-[#fffaf0] border-2 border-[#151b20] shadow-[2px_2px_0px_#151b20]\">\n      <strong class=\"text-[#b45309] block text-xs mb-1\">1. Allocative Harms (Resource Distribution)</strong>\n      <span class=\"text-[11px] text-[#151b20] leading-snug\">Withholding immediate, quantifiable economic goods, rights, or liberties at decision time.</span>\n      <ul class=\"list-disc pl-4 mt-2 space-y-1 text-[10.5px] text-[#475569]\">\n        <li>Commercial Mortgage &amp; Credit Underwriting (ECOA)</li>\n        <li>Pre-Trial Bail &amp; Recidivism Sentencing (COMPAS)</li>\n        <li>Automated Hiring Applicant Resume Screening</li>\n        <li>Organ Allocation &amp; Critical Medical ICU Triage</li>\n      </ul>\n    </div>\n    <div class=\"p-3.5 rounded-xl bg-[#ffd8ce] border-2 border-[#151b20] shadow-[2px_2px_0px_#151b20]\">\n      <strong class=\"text-[#b91c1c] block text-xs mb-1\">2. Representational Harms (Perceptual Status)</strong>\n      <span class=\"text-[11px] text-[#151b20] leading-snug\">Degrading cultural dignity, identity visibility, or entrenching historical stereotypes over time.</span>\n      <ul class=\"list-disc pl-4 mt-2 space-y-1 text-[10.5px] text-[#475569]\">\n        <li>Facial Analysis Intersectional Failure (Gender Shades)</li>\n        <li>Gendered Occupational Embeddings in LLMs</li>\n        <li>Stereotypical Search Autocomplete Association</li>\n        <li>Demographic Erasure in Multimodal Generative AI</li>\n      </ul>\n    </div>\n  </div>\n\n  <div class=\"p-3 rounded-xl bg-[#151b20] text-[#c9f3f4] font-mono text-xs\">\n    <strong class=\"text-[#ffc83e] block mb-1\">Auditing Distinction:</strong>\n    <span class=\"text-[11px] text-[#94a3b8]\">Allocative harms are auditable via confusion matrix disparities and DIR ratios. Representational harms accumulate diffusely and require benchmark auditing like Buolamwini &amp; Gebru's Gender Shades methodology.</span>\n  </div>\n</div>\n"
        },
        "duo": {
          "title": "Socratic Exploration: The Silent Danger of Representational Harms",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Most engineering teams focus strictly on allocative harms because they fear lawsuits under lending or employment laws. Are representational harms harder to detect?",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Far harder, Kaito! When a search engine or foundation model associates doctors with male pronouns and nurses with female pronouns, there is no single victim filing an adverse action notice. But over millions of interactions, it cements societal stereotypes into the collective subconscious.",
              "dock": "main"
            },
            {
              "speaker": "Kaito",
              "text": "And when Joy Buolamwini tested commercial facial recognition systems in Gender Shades, she proved error rates were thirty times higher for darker-skinned females than lighter-skinned males!",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Exactly. A failure of representation directly translates into allocative failures when those models are deployed by law enforcement or border security.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2 text-center font-mono text-xs\">\n  <div class=\"p-3 rounded-xl bg-[#e7f4c8] border-2 border-[#151b20] text-[#15803d] font-bold\">\n    💡 Representational harms lay the cultural groundwork that justifies downstream allocative disparities. Both must be audited.\n  </div>\n</div>\n"
        }
      },
      {
        "id": "s15",
        "title": "Empirical Case Studies: COMPAS Bail Scoring & Amazon Resume Screening",
        "type": "case_study",
        "solo": {
          "speaker": "Dr. Nova (Senior Architect)",
          "title": "Production Case Studies: COMPAS and Amazon",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Let us examine two landmark empirical case studies that permanently reshaped modern machine learning governance: the COMPAS judicial risk assessment audit and Amazon's automated resume screening tool.",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "In 2018, Amazon formally scrapped its experimental AI hiring tool after discovering that training on historical engineering resumes caused the model to actively penalize resumes containing the word 'women's' or graduates of all-women colleges. Even when explicit gender markers were dropped, high-dimensional latent vectors reconstructed the proxy, proving the failure of fairness through unawareness.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono font-black text-xs text-[#0e7490] uppercase tracking-wide\">\n      §7 Case Studies • COMPAS Bail Scoring &amp; Amazon AI Resume Screening\n    </span>\n    <span class=\"px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black bg-[#ffd8ce] text-[#b91c1c] border-2 border-[#151b20]\">\n      Real-World System Failures\n    </span>\n  </div>\n\n  <div class=\"grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs mb-3\">\n    <div class=\"p-3.5 rounded-xl bg-[#fffaf0] border-2 border-[#151b20] shadow-[2px_2px_0px_#151b20]\">\n      <strong class=\"text-[#b45309] block text-xs mb-1\">1. Northpointe COMPAS (ProPublica 2016)</strong>\n      <ul class=\"list-disc pl-4 space-y-1 text-[10.5px] text-[#475569]\">\n        <li>$\\text{FPR}_{\\text{Black}} = 44.9\\%$ vs. $\\text{FPR}_{\\text{White}} = 23.5\\%$. Non-reoffending Black defendants flagged at double the rate.</li>\n        <li>$\\text{FNR}_{\\text{White}} = 47.7\\%$ vs. $\\text{FNR}_{\\text{Black}} = 28.0\\%$. Reoffending White defendants flagged as low-risk at double the rate.</li>\n        <li>Root: Equal calibration mathematically mandates this disparity when base arrest rates differ ($51.5\\%$ vs. $39.0\\%$).</li>\n      </ul>\n    </div>\n    <div class=\"p-3.5 rounded-xl bg-[#ffd8ce] border-2 border-[#151b20] shadow-[2px_2px_0px_#151b20]\">\n      <strong class=\"text-[#b91c1c] block text-xs mb-1\">2. Amazon Resume Screener (2018)</strong>\n      <ul class=\"list-disc pl-4 space-y-1 text-[10.5px] text-[#475569]\">\n        <li>Trained on 10 years of male-dominated tech resumes submitted to company.</li>\n        <li>Internalized historical male dominance, penalizing phrases like <em>\"women's rugby captain\"</em> and women's college names.</li>\n        <li>Dropping gender columns failed; latent word vectors reconstructed gender proxy. Tool was formally abandoned in 2018.</li>\n      </ul>\n    </div>\n  </div>\n\n  <div class=\"p-3 rounded-xl bg-[#e7f4c8] border-2 border-[#151b20] font-mono text-xs\">\n    <strong class=\"text-[#15803d] block mb-1\">Cardinal Engineering Takeaway:</strong>\n    <span class=\"text-[#151b20]\">An algorithm optimizes for historical success patterns. If historical hiring was discriminatory, an optimal mathematical loss minimizer will strictly optimize for discrimination!</span>\n  </div>\n</div>\n"
        },
        "duo": {
          "title": "Socratic Takeaway: The Illusion of Algorithmic Merit",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "The Amazon resume screening case is so terrifying because the engineers didn't tell the model to discriminate against women! The model just did exactly what it was trained to do: maximize similarity to historical hires.",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Exactly. When you define 'quality' as 'similarity to the people who succeeded here over the last ten years', you are not predicting merit; you are predicting demographic continuity.",
              "dock": "main"
            },
            {
              "speaker": "Kaito",
              "text": "Which means automated systems will naturally homogenize an organization unless active debiasing constraints are enforced!",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Precisely. Let us codify these insights into our production Pydantic V2 verification suite.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2 text-center font-mono text-xs\">\n  <div class=\"p-3 rounded-xl bg-[#c9f3f4] border-2 border-[#151b20] text-[#0e7490] font-black\">\n    🚀 High-dimensional neural networks optimize loss by exploiting whatever correlations exist in historical data. Governance requires active auditing.\n  </div>\n</div>\n"
        }
      },
      {
        "id": "s16",
        "title": "Production Implementation: Pydantic V2 Verification Suite & Cardinal Rules",
        "type": "capstone",
        "solo": {
          "speaker": "Dr. Nova (Senior Architect)",
          "title": "Production Verification Suite & The 4 Cardinal Rules",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "We conclude Lesson 7.1 with our production implementation verified under Pydantic V2. Our test suite rigorously audits feedback dynamical stability, algebraically proves Kleinberg's odds ratio invariant, and validates hiring selection compliance against the EEOC 80% rule.",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Remember the four cardinal rules of algorithmic fairness in dataset engineering: First, never trust fairness through blindness. Second, audit the dynamical derivative T prime of one-half before deploying allocative systems. Third, acknowledge the fairness trilemma and align with legal counsel on calibration versus error parity. And fourth, audit both allocative and representational harms continuously in production.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono font-black text-xs text-[#0e7490] uppercase tracking-wide\">\n      §8 Capstone Architecture • Production Pydantic V2 Auditing Suite\n    </span>\n    <span class=\"px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black bg-[#e7f4c8] text-[#15803d] border-2 border-[#151b20]\">\n      Production Hardened\n    </span>\n  </div>\n\n  <div class=\"grid grid-cols-1 sm:grid-cols-4 gap-2.5 font-mono text-xs mb-3\">\n    <div class=\"p-3 rounded-xl bg-[#c9f3f4] border-2 border-[#151b20] shadow-[2px_2px_0px_#151b20]\">\n      <strong class=\"text-[#0e7490] block mb-1\">Rule 1: No Blindness</strong>\n      <span class=\"text-[10.5px] text-[#151b20] leading-snug\">Dropping protected attributes fails due to latent proxy redundancy.</span>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#fff0b9] border-2 border-[#151b20] shadow-[2px_2px_0px_#151b20]\">\n      <strong class=\"text-[#b45309] block mb-1\">Rule 2: Audit T'(1/2)</strong>\n      <span class=\"text-[10.5px] text-[#151b20] leading-snug\">Guarantee $T'(1/2) < 1$ to prevent runaway sampling pitchfork bifurcations.</span>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#ffd8ce] border-2 border-[#151b20] shadow-[2px_2px_0px_#151b20]\">\n      <strong class=\"text-[#b91c1c] block mb-1\">Rule 3: Face the Trilemma</strong>\n      <span class=\"text-[10.5px] text-[#151b20] leading-snug\">Choose between Calibration and FPR parity based on domain jurisprudence.</span>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#e7f4c8] border-2 border-[#151b20] shadow-[2px_2px_0px_#151b20]\">\n      <strong class=\"text-[#15803d] block mb-1\">Rule 4: Dual Harm Audit</strong>\n      <span class=\"text-[10.5px] text-[#151b20] leading-snug\">Audit immediate allocative decisions alongside diffuse representational dignity.</span>\n    </div>\n  </div>\n\n  <div class=\"p-3 rounded-xl bg-[#151b20] text-[#c9f3f4] font-mono text-[11px] overflow-x-auto\">\n    <div class=\"text-[#ffc83e] font-bold mb-1\"># Pydantic V2 Production Verification Suite Snippet</div>\n    <code>fb_audit = audit_feedback_dynamics(n_rounds=50, initial_bias=0.05, gamma=1.80, alpha=0.20)</code><br/>\n    <code>imp_audit = audit_impossibility_theorem(p0=0.32, p1=0.55, ppv=0.68, tpr=0.72)</code><br/>\n    <code>assert imp_audit.trilemma_proven, \"Algebraic odds ratio proof must hold!\"</code><br/>\n    <code>print(f\"Verified Trilemma Match: FPR Ratio={imp_audit.empirical_fpr_ratio} == Odds Ratio={imp_audit.theoretical_odds_ratio}\")</code>\n  </div>\n</div>\n"
        },
        "duo": {
          "title": "Socratic Capstone: Dr. Nova & Kaito's Production Takeaway",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "What an eye-opening journey through algorithmic bias and fairness, Dr. Nova! We went from socio-technical feedback loops and pitchfork bifurcations to Title VII legal protections, the EEOC 80% rule, and the mathematical proof of Kleinberg's Trilemma.",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "And most importantly, Kaito, you now understand that dataset fairness is not a superficial checkmark. It is an end-to-end mathematical, legal, and architectural discipline.",
              "dock": "main"
            },
            {
              "speaker": "Kaito",
              "text": "In Lesson 7.2, we dive deeper into specific types of dataset bias, including historical, representation, measurement, and aggregation bias! Thank you, Dr. Nova!",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "See you in Lesson 7.2! Keep your feedback loops sub-critical and your data architectures rigorously auditable.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2 text-center\">\n  <div class=\"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e7f4c8] border-2 border-[#151b20] text-[#15803d] font-mono text-xs font-bold uppercase tracking-wider mb-2\">\n    <span>Masterclass Complete • Lesson 7.1</span>\n  </div>\n  <h2 class=\"text-xl sm:text-2xl font-black text-[#151b20] tracking-tight mb-2\">\n    Dataset Bias, Feedback Dynamics &amp; Fairness Invariant Mastery\n  </h2>\n  <p class=\"text-xs sm:text-sm text-[#475569] font-medium max-w-xl mx-auto leading-relaxed mb-4\">\n    You have mastered socio-technical feedback loops, pitchfork bifurcation stability boundaries, Title VII legal frameworks, and Kleinberg's Impossibility Theorem.\n  </p>\n  <div class=\"inline-flex gap-3\">\n    <a href=\"../02-types-of-dataset-bias/\" class=\"px-4 py-2 rounded-xl bg-[#2563eb] text-white border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] font-mono font-bold text-xs hover:translate-y-[-1px] transition\">\n      Next: 7.2 Types of Dataset Bias →\n    </a>\n  </div>\n</div>\n"
        }
      }
    ]
  },
  "ch7_p2": {
    "chapter": 7,
    "part": 2,
    "key": "ch7_p2",
    "index": "Lesson 2 of 10",
    "lessonTitle": "Types and Mechanisms of Dataset Bias",
    "title": "Types and Mechanisms of Dataset Bias",
    "badge": "16 Masterclass Slides • Socratic Dialogue • Interactive Sandbox",
    "description": "Formalizing Historical Divergence, Horvitz-Thompson Sampling Correction, Differential Attenuation, and Simpson's Paradox in Loss Minimization.",
    "slides": [
      {
        "id": "s1",
        "title": "Taxonomy and Mechanisms of Dataset Bias",
        "type": "title",
        "solo": {
          "speaker": "Dr. Nova (Senior Architect)",
          "title": "Taxonomy and Mechanisms of Dataset Bias",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Welcome to Lesson 7.2 of Dataset Fundamentals: Types and Mechanisms of Dataset Bias. In modern machine learning, bias is frequently treated as an amorphous, single flaw. In reality, it is a family of distinct structural distortions entering the machine learning pipeline at identifiable phases of the data lifecycle.",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Auditing and mitigating bias requires establishing a precise mathematical taxonomy that separates societal realities, sampling selection functions, sensor measurement errors, proxy label corruptions, and statistical aggregation artifacts. Today, we trace each mechanism across the entire lifecycle, derive rigorous statistical rectifications, and explore real-time interactive simulations.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-6 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[6px_6px_0px_#151b20] text-center my-3\">\n  <div class=\"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c9f3f4] border-2 border-[#151b20] text-[#0e7490] font-mono text-xs font-bold uppercase tracking-wider mb-3\">\n    <span>Track 7 • Dataset Bias &amp; Fairness • Lesson 7.2</span>\n  </div>\n  <h1 class=\"text-2xl sm:text-3xl font-black text-[#151b20] tracking-tight mb-2\">\n    Types &amp; Mechanisms of Dataset Bias\n  </h1>\n  <p class=\"text-sm sm:text-base text-[#475569] font-medium max-w-2xl mx-auto leading-relaxed\">\n    Formalizing Historical Divergence, Horvitz-Thompson Sampling Correction, Differential Attenuation, and Simpson's Paradox in Loss Minimization.\n  </p>\n  <div class=\"grid grid-cols-1 sm:grid-cols-4 gap-3 mt-5 max-w-4xl mx-auto text-left font-mono text-xs\">\n    <div class=\"p-3 rounded-xl bg-[#c9f3f4] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20]\">\n      <strong class=\"text-[#0e7490] block mb-1 font-black\">1. Historical Bias</strong>\n      <span class=\"text-[11px] text-[#151b20] leading-snug\">World-to-data divergence where ERM accurately learns status-quo systemic disparities.</span>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#fff0b9] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20]\">\n      <strong class=\"text-[#b45309] block mb-1 font-black\">2. Selection &amp; IPW</strong>\n      <span class=\"text-[11px] text-[#151b20] leading-snug\">Conditioned inclusion $S=1$, propensity scores, and Horvitz-Thompson unbiased recovery.</span>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#ffd8ce] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20]\">\n      <strong class=\"text-[#b91c1c] block mb-1 font-black\">3. Sensor Attenuation</strong>\n      <span class=\"text-[11px] text-[#151b20] leading-snug\">Differential errors-in-variables collapsing regression slopes by reliability ratio $\\lambda$.</span>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#e7f4c8] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20]\">\n      <strong class=\"text-[#15803d] block mb-1 font-black\">4. Simpson's Paradox</strong>\n      <span class=\"text-[11px] text-[#151b20] leading-snug\">Aggregation bias in pooled loss minimization inverting subgroup conditional relationships.</span>\n    </div>\n  </div>\n</div>\n"
        },
        "duo": {
          "title": "Socratic Debate: The Anatomy of Machine Learning Bias",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Welcome back Kaito! In our last session, we proved how feedback loops amplify initial errors. Today, we zoom into where bias actually originates inside the dataset itself.",
              "dock": "main"
            },
            {
              "speaker": "Kaito",
              "text": "Most engineers I know just say their dataset has 'bias', like it's a single bug you can fix with a re-weighting flag or data augmentation. Is it really that multifaceted?",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "It is profoundly multifaceted. A sampling selection error requires Horvitz-Thompson inverse weighting; a sensor measurement error requires errors-in-variables deconvolution; and an aggregation bias requires subgroup stratification. If you confuse them, your mitigation will fail.",
              "dock": "main"
            },
            {
              "speaker": "Kaito",
              "text": "That means treating bias requires precise structural diagnosis. Let's map out the entire data lifecycle to see exactly where each distortion enters!",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-6 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[6px_6px_0px_#151b20] text-center my-3\">\n  <div class=\"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c9f3f4] border-2 border-[#151b20] text-[#0e7490] font-mono text-xs font-bold uppercase tracking-wider mb-3\">\n    <span>Track 7 • Socratic Dialogue • Lesson 7.2</span>\n  </div>\n  <h1 class=\"text-2xl sm:text-3xl font-black text-[#151b20] tracking-tight mb-2\">\n    The Structural Anatomy of Dataset Bias\n  </h1>\n  <p class=\"text-sm sm:text-base text-[#475569] font-medium max-w-2xl mx-auto leading-relaxed\">\n    Dr. Nova and Kaito debate why treating bias as a single monolithic issue leads to failed mitigations, establishing the need for lifecycle taxonomy.\n  </p>\n  <div class=\"grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5 max-w-3xl mx-auto text-left font-mono text-xs\">\n    <div class=\"p-3.5 rounded-xl bg-[#fff0b9] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20]\">\n      <strong class=\"text-[#b45309] block mb-1\">The Monolithic Fallacy:</strong>\n      <span class=\"text-[11px] text-[#151b20]\">Assuming 'bias' is just sample imbalance that can be patched with simple upsampling or generic fairness penalties.</span>\n    </div>\n    <div class=\"p-3.5 rounded-xl bg-[#ffd8ce] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20]\">\n      <strong class=\"text-[#b91c1c] block mb-1\">Structural Reality:</strong>\n      <span class=\"text-[11px] text-[#151b20]\">Sensor noise attenuates slopes, historical bias encodes societal disparity, and pooled loss induces Simpson's sign reversal!</span>\n    </div>\n  </div>\n</div>\n"
        }
      },
      {
        "id": "s2",
        "title": "Data Lifecycle Architecture: From Reality to Deployment",
        "type": "conceptual",
        "solo": {
          "speaker": "Dr. Nova (Senior Architect)",
          "title": "Mapping Bias Across the Data Pipeline",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "To systematically diagnose bias, we must trace data transformation across six distinct lifecycle boundaries. First, the physical world undergoes historical distortion before generating raw events.",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Second, the sampling selection function determines which observations enter dataset D. Third, physical sensors and human annotators inject measurement and labeling noise. Fourth, empirical loss minimization pools heterogeneous groups into model f of x. Fifth, evaluation benchmarks suffer geographic skew. And finally, deployment distribution shift completes the pipeline.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono font-black text-xs text-[#0e7490] uppercase tracking-wide\">\n      §1 Lifecycle Architecture • Data Pipeline Transformation Stages\n    </span>\n    <span class=\"px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black bg-[#c9f3f4] text-[#0e7490] border-2 border-[#151b20]\">\n      Mehrabi &amp; Barocas Framework\n    </span>\n  </div>\n\n  <p class=\"text-xs text-[#151b20] font-sans mb-3 leading-relaxed\">\n    Every transition between physical reality and deployed model introduces an identifiable statistical distortion:\n  </p>\n\n  <div class=\"grid grid-cols-1 sm:grid-cols-6 gap-2 font-mono text-center text-xs mb-4\">\n    <div class=\"p-2 rounded-xl bg-[#c9f3f4] border-2 border-[#151b20] shadow-[2px_2px_0px_#151b20]\">\n      <strong class=\"text-[#0e7490] block text-[10px]\">1. Historical</strong>\n      <span class=\"text-[9.5px] text-[#475569]\">Societal status-quo disparities</span>\n    </div>\n    <div class=\"p-2 rounded-xl bg-[#fff0b9] border-2 border-[#151b20] shadow-[2px_2px_0px_#151b20]\">\n      <strong class=\"text-[#b45309] block text-[10px]\">2. Selection</strong>\n      <span class=\"text-[9.5px] text-[#475569]\">Conditioned sampling $S=1$</span>\n    </div>\n    <div class=\"p-2 rounded-xl bg-[#ffd8ce] border-2 border-[#151b20] shadow-[2px_2px_0px_#151b20]\">\n      <strong class=\"text-[#b91c1c] block text-[10px]\">3. Measurement</strong>\n      <span class=\"text-[9.5px] text-[#475569]\">Sensor attenuation $X^*=X+u$</span>\n    </div>\n    <div class=\"p-2 rounded-xl bg-[#e7f4c8] border-2 border-[#151b20] shadow-[2px_2px_0px_#151b20]\">\n      <strong class=\"text-[#15803d] block text-[10px]\">4. Aggregation</strong>\n      <span class=\"text-[9.5px] text-[#475569]\">Simpson's paradox in pooled loss</span>\n    </div>\n    <div class=\"p-2 rounded-xl bg-[#fbcfe8] border-2 border-[#151b20] shadow-[2px_2px_0px_#151b20]\">\n      <strong class=\"text-[#9d174d] block text-[10px]\">5. Benchmark</strong>\n      <span class=\"text-[9.5px] text-[#475569]\">Geographic test set skew</span>\n    </div>\n    <div class=\"p-2 rounded-xl bg-[#fed7aa] border-2 border-[#151b20] shadow-[2px_2px_0px_#151b20]\">\n      <strong class=\"text-[#c2410c] block text-[10px]\">6. Deployment</strong>\n      <span class=\"text-[9.5px] text-[#475569]\">Covariate &amp; concept drift</span>\n    </div>\n  </div>\n\n  <div class=\"p-3 rounded-xl bg-[#151b20] text-[#c9f3f4] font-mono text-xs\">\n    <div class=\"text-[#ffc83e] font-bold mb-1\">// Fundamental Principle of Bias Auditing</div>\n    $$\\text{World} \\xrightarrow{\\text{Hist}} \\mathcal{D}_{\\text{gen}} \\xrightarrow{S=1} \\mathcal{D}_{\\text{samp}} \\xrightarrow{\\text{Noise}} \\mathcal{D}_{\\text{annot}} \\xrightarrow{\\min \\mathcal{L}} f_\\theta \\xrightarrow{\\text{Eval}} \\text{Benchmark} \\xrightarrow{\\text{Shift}} \\text{Prod}$$\n    <span class=\"text-[11px] text-[#94a3b8]\">A mitigation applied at the modeling stage cannot undo an uncorrected measurement error that destroyed feature variance.</span>\n  </div>\n</div>\n"
        },
        "duo": {
          "title": "Socratic Exploration: The Pipeline of Accumulated Errors",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Looking at this pipeline, Dr. Nova, it seems like data gets corrupted at every single handoff! If our training set has both selection bias and measurement error, which one dominates?",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "They compound multiplicatively! Selection bias distorts who is in the dataset, while measurement error distorts what you measure about them. If you only correct for selection with inverse propensity weights, you amplify the noisy sensor readings of underrepresented units!",
              "dock": "main"
            },
            {
              "speaker": "Kaito",
              "text": "So reweighting without cleaning sensor noise actually inflates the noise variance! Let's examine the first boundary: historical bias.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono font-black text-xs text-[#0e7490] uppercase tracking-wide\">\n      §1 Lifecycle Analysis • The Multiplicative Compounding Trap\n    </span>\n    <span class=\"px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black bg-[#ffd8ce] text-[#b91c1c] border-2 border-[#151b20]\">\n      Compounding Dynamics\n    </span>\n  </div>\n  <p class=\"text-xs text-[#151b20] font-sans mb-3 leading-relaxed\">\n    Kaito and Dr. Nova analyze how early pipeline errors compound downstream:\n  </p>\n  <div class=\"grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs\">\n    <div class=\"p-3 rounded-xl bg-[#fffaf0] border-2 border-[#151b20] shadow-[2px_2px_0px_#151b20]\">\n      <strong class=\"text-[#b45309] block mb-1\">1. The Reweighting Hazard:</strong>\n      <span class=\"text-[11px] text-[#475569]\">Applying Horvitz-Thompson weights $w_i = 1/\\pi_i$ to minority samples with high sensor variance $\\sigma_u^2$ drastically inflates estimator variance: $\\text{Var}(\\hat{\\mu}) \\propto \\sum w_i^2 \\sigma_{u,i}^2$.</span>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#fffaf0] border-2 border-[#151b20] shadow-[2px_2px_0px_#151b20]\">\n      <strong class=\"text-[#0e7490] block mb-1\">2. Upstream Auditing:</strong>\n      <span class=\"text-[11px] text-[#475569]\">Mitigation must begin with physical sensor calibration and survey design before mathematical weighting is applied in loss functions.</span>\n    </div>\n  </div>\n</div>\n"
        }
      },
      {
        "id": "s3",
        "title": "Historical Bias: World-to-Data Divergence",
        "type": "conceptual",
        "solo": {
          "speaker": "Dr. Nova (Senior Architect)",
          "title": "When Ground Truth Reflects Systemic Inequity",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Historical bias occurs when the data-generation process accurately and faithfully reflects existing socio-economic disparities, systemic prejudices, or historical inequities. In mathematical notation, the conditional probability of target Y given protected attribute A differs in the real world: Probability of Y equals 1 given A equals 0 does not equal Probability of Y equals 1 given A equals 1.",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Crucially, in historical bias, there are no bugs in your sensors, and sampling was mathematically uniform. Yet an empirical risk minimizer optimizes for historical status-quo reproduction rather than normative equity. An algorithm that accurately predicts historical lending defaults under redlining will institutionalize past discrimination into future loan denials.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono font-black text-xs text-[#0e7490] uppercase tracking-wide\">\n      §2 Historical Bias • World-to-Data Divergence\n    </span>\n    <span class=\"px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black bg-[#ffd8ce] text-[#b91c1c] border-2 border-[#151b20]\">\n      Status-Quo Reproduction\n    </span>\n  </div>\n\n  <div class=\"p-3.5 rounded-xl bg-[#151b20] text-[#c9f3f4] font-mono text-xs mb-3\">\n    <div class=\"text-[#ffc83e] font-bold mb-1\">// Mathematical Formalization of Historical Disparity</div>\n    $$\\Pr_{\\text{world}}(Y = 1 \\mid A = 0) \\neq \\Pr_{\\text{world}}(Y = 1 \\mid A = 1)$$\n    <span class=\"text-[11px] text-[#94a3b8]\">Even when sampling $\\Pr(S=1)$ and measurement $X^* = X$ are completely error-free, empirical risk minimization faithfully codifies structural inequity.</span>\n  </div>\n\n  <div class=\"grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs\">\n    <div class=\"p-3 rounded-xl bg-[#fff0b9] border-2 border-[#151b20] shadow-[2px_2px_0px_#151b20]\">\n      <strong class=\"text-[#b45309] block mb-1\">Descriptive Accuracy:</strong>\n      <span class=\"text-[11px] text-[#151b20]\">Minimizing training loss $\\sum \\mathcal{L}(f(X_i), Y_i)$ faithfully replicates past societal prejudice, allocating fewer resources to historically disadvantaged groups.</span>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#c9f3f4] border-2 border-[#151b20] shadow-[2px_2px_0px_#151b20]\">\n      <strong class=\"text-[#0e7490] block mb-1\">Normative Equity:</strong>\n      <span class=\"text-[11px] text-[#151b20]\">Machine learning systems cannot self-correct historical bias without explicit policy constraints, demographic parity targets, or counterfactual regularization.</span>\n    </div>\n  </div>\n</div>\n"
        },
        "duo": {
          "title": "Socratic Debate: Is Predictive Accuracy Always Just?",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Wait Dr. Nova, if our model achieves 98% accuracy on historical credit data, isn't it technically doing its job? How can an engineer be blamed for predicting what actually happened?",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Because historical defaults were not driven by intrinsic unworthiness—they were driven by redlining, predatory lending terms, and lack of capital! By treating historical data as neutral truth, the algorithm treats systemic injustice as an immutable natural law.",
              "dock": "main"
            },
            {
              "speaker": "Kaito",
              "text": "And worse, because the model denies them credit today, they can never build credit tomorrow. That proves the model isn't just predicting the world—it is enforcing it!",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono font-black text-xs text-[#0e7490] uppercase tracking-wide\">\n      §2 Historical Bias • The Normative vs Descriptive Divide\n    </span>\n    <span class=\"px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black bg-[#ffc83e] text-[#151b20] border-2 border-[#151b20]\">\n      Philosophical Foundation\n    </span>\n  </div>\n  <p class=\"text-xs text-[#151b20] font-sans mb-3 leading-relaxed\">\n    Dr. Nova and Kaito clarify why statistical accuracy on historical datasets is not synonymous with ethical or legal fairness:\n  </p>\n  <div class=\"p-3.5 rounded-xl bg-[#fffaf0] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] font-mono text-xs\">\n    <div class=\"text-[#b91c1c] font-black mb-1\">The Naturalistic Fallacy in Machine Learning:</div>\n    <span class=\"text-[11px] text-[#151b20]\">Deriving an <em>ought</em> from an <em>is</em>. Training an empirical risk minimizer on observational data without normative guardrails assumes that past allocations were optimal, converting historical systemic racism and sexism into mathematically certified future policies.</span>\n  </div>\n</div>\n"
        }
      },
      {
        "id": "s4",
        "title": "Sampling Selection Bias & Missing-At-Random Mechanics",
        "type": "conceptual",
        "solo": {
          "speaker": "Dr. Nova (Senior Architect)",
          "title": "Conditioned Inclusion & Propensity Scores",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Sampling selection bias occurs when the probability of an observation being selected into the training dataset, denoted S equals 1, is conditionally dependent on features X or protected attribute A. That is, Probability of S equals 1 given X and A does not equal Probability of S equals 1.",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Let pi of x comma a denote the propensity of selection, defined as the probability of S equals 1 given X equals x and A equals a. If pi is strictly positive, the missingness mechanism satisfies Missing at Random, or MAR. But because convenience sampling disproportionately captures privileged groups, the sampled distribution diverges from the target population.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono font-black text-xs text-[#0e7490] uppercase tracking-wide\">\n      §3 Selection Bias • Propensity Formulation &amp; MAR Condition\n    </span>\n    <span class=\"px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black bg-[#fff0b9] text-[#b45309] border-2 border-[#151b20]\">\n      Rubin Causal Framework\n    </span>\n  </div>\n\n  <div class=\"p-3.5 rounded-xl bg-[#151b20] text-[#c9f3f4] font-mono text-xs mb-3\">\n    <div class=\"text-[#ffc83e] font-bold mb-1\">// Condition for Sampling Selection Bias</div>\n    $$\\Pr(S = 1 \\mid \\mathbf{X} = \\mathbf{x}, A = a) \\neq \\Pr(S = 1)$$\n    $$\\pi(\\mathbf{x}, a) \\equiv \\Pr(S = 1 \\mid \\mathbf{X} = \\mathbf{x}, A = a) > 0 \\quad (\\text{Positivity Assumption})$$\n  </div>\n\n  <div class=\"grid grid-cols-1 sm:grid-cols-3 gap-2.5 font-mono text-xs\">\n    <div class=\"p-2.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[2px_2px_0px_#151b20]\">\n      <strong class=\"text-[#0e7490] block mb-1\">MCAR:</strong>\n      <span class=\"text-[10px] text-[#475569]\">Missing Completely at Random. $\\Pr(S=1 \\mid \\mathbf{X}, Y) = \\Pr(S=1)$. Sample mean is unbiased.</span>\n    </div>\n    <div class=\"p-2.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[2px_2px_0px_#151b20]\">\n      <strong class=\"text-[#b45309] block mb-1\">MAR (Key Focus):</strong>\n      <span class=\"text-[10px] text-[#475569]\">Missing at Random. $S \\perp Y \\mid (\\mathbf{X}, A)$. Unbiased recovery possible via IPW weighting!</span>\n    </div>\n    <div class=\"p-2.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[2px_2px_0px_#151b20]\">\n      <strong class=\"text-[#b91c1c] block mb-1\">MNAR:</strong>\n      <span class=\"text-[10px] text-[#475569]\">Missing Not at Random. $S$ depends directly on unobserved $Y$. Requires structural Heckman models.</span>\n    </div>\n  </div>\n</div>\n"
        },
        "duo": {
          "title": "Socratic Exploration: Why Convenience Sampling Fails",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "In computer vision or web scraping, almost everyone uses convenience datasets like ImageNet or Common Crawl. Does that automatically induce selection bias?",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Absolutely! People who upload high-resolution photos to social media are overwhelmingly affluent, urban, and concentrated in North America and Western Europe. That means your selection propensity pi is tiny for rural populations in the Global South.",
              "dock": "main"
            },
            {
              "speaker": "Kaito",
              "text": "And when an unweighted model trains on that data, it learns features that work amazingly well on Western users, but completely fails on everyone else. How do we mathematically correct for this?",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono font-black text-xs text-[#0e7490] uppercase tracking-wide\">\n      §3 Selection Bias • Web Scraping &amp; Convenience Skew\n    </span>\n    <span class=\"px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black bg-[#c9f3f4] text-[#0e7490] border-2 border-[#151b20]\">\n      Empirical Reality\n    </span>\n  </div>\n  <p class=\"text-xs text-[#151b20] font-sans mb-3 leading-relaxed\">\n    Convenience data collection induces severe demographic selection bias:\n  </p>\n  <div class=\"grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs\">\n    <div class=\"p-3 rounded-xl bg-[#fffaf0] border-2 border-[#151b20] shadow-[2px_2px_0px_#151b20]\">\n      <strong class=\"text-[#b45309] block mb-1\">Internet Penetration Skew:</strong>\n      <span class=\"text-[11px] text-[#475569]\">High-bandwidth multimodal scraping captures young, tech-literate, Western demographics with $\\pi(\\mathbf{x}) \\approx 0.8$, while older or rural cohorts have $\\pi(\\mathbf{x}) < 0.05$.</span>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#fffaf0] border-2 border-[#151b20] shadow-[2px_2px_0px_#151b20]\">\n      <strong class=\"text-[#0e7490] block mb-1\">Loss Dominance:</strong>\n      <span class=\"text-[11px] text-[#475569]\">In an unweighted ERM loss, the gradient is dominated by high-propensity samples, driving test error on underrepresented slices up to 30x higher.</span>\n    </div>\n  </div>\n</div>\n"
        }
      },
      {
        "id": "s5",
        "title": "Mathematical Rectification: Horvitz-Thompson IPW Proof",
        "type": "proof",
        "solo": {
          "speaker": "Dr. Nova (Senior Architect)",
          "title": "The Horvitz-Thompson Theorem & Hajek Estimator",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "To recover unbiased population estimates under selection bias, we deploy the Horvitz-Thompson Inverse Probability Weighting estimator. Each observed unit is weighted inversely by its selection propensity pi of X sub i comma A sub i.",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Let us step through the unbiasedness proof. Taking the expectation of mu-hat Horvitz-Thompson, we apply the law of iterated expectations over X, A, and Y. Under the Missing-at-Random assumption, the expectation of S sub i given covariates equals pi sub i. The propensity terms cancel exactly in numerator and denominator, leaving the true population mean mu sub Y. In production, we use the self-normalized Hajek estimator to stabilize finite-sample variance.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono font-black text-xs text-[#0e7490] uppercase tracking-wide\">\n      §4 Mathematical Proof • Horvitz-Thompson IPW Unbiasedness\n    </span>\n    <span class=\"px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black bg-[#e7f4c8] text-[#15803d] border-2 border-[#151b20]\">\n      Horvitz-Thompson (1952)\n    </span>\n  </div>\n\n  <div class=\"p-3.5 rounded-xl bg-[#151b20] text-[#c9f3f4] font-mono text-xs mb-3\">\n    <div class=\"text-[#ffc83e] font-bold mb-1\">// Horvitz-Thompson (HT) vs. Hajek Estimators</div>\n    $$\\hat{\\mu}_{\\text{HT}} = \\frac{1}{N} \\sum_{i=1}^N \\frac{S_i Y_i}{\\pi(\\mathbf{X}_i, A_i)}, \\qquad \\hat{\\mu}_{\\text{Hajek}} = \\frac{\\sum_{i=1}^N \\frac{S_i Y_i}{\\pi(\\mathbf{X}_i, A_i)}}{\\sum_{i=1}^N \\frac{S_i}{\\pi(\\mathbf{X}_i, A_i)}}$$\n  </div>\n\n  <div class=\"p-3 rounded-xl bg-[#fffaf0] border-2 border-[#151b20] shadow-[2px_2px_0px_#151b20] font-mono text-xs mb-3 leading-relaxed\">\n    <strong class=\"text-[#0e7490] block mb-1\">Proof of Unbiasedness under MAR:</strong>\n    $$\\mathbb{E}[\\hat{\\mu}_{\\text{HT}}] = \\frac{1}{N} \\sum_{i=1}^N \\mathbb{E}\\left[ \\frac{S_i Y_i}{\\pi_i} \\right] = \\frac{1}{N} \\sum_{i=1}^N \\mathbb{E}_{\\mathbf{X}, A, Y} \\left[ \\frac{\\mathbb{E}[S_i \\mid \\mathbf{X}_i, A_i, Y_i] Y_i}{\\pi_i} \\right]$$\n    $$\\text{By MAR: } \\mathbb{E}[S_i \\mid \\mathbf{X}_i, A_i, Y_i] = \\Pr(S_i = 1 \\mid \\mathbf{X}_i, A_i) \\equiv \\pi(\\mathbf{X}_i, A_i)$$\n    $$\\mathbb{E}[\\hat{\\mu}_{\\text{HT}}] = \\frac{1}{N} \\sum_{i=1}^N \\mathbb{E}_{\\mathbf{X}, A, Y} \\left[ \\frac{\\pi_i Y_i}{\\pi_i} \\right] = \\frac{1}{N} \\sum_{i=1}^N \\mathbb{E}[Y_i] = \\mu_Y \\quad \\blacksquare$$\n  </div>\n</div>\n"
        },
        "duo": {
          "title": "Socratic Exploration: The Propensity Variance Dilemma",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "The proof is so clean! But wait, Dr. Nova—what happens if an underrepresented group has a tiny propensity, like pi equals 0.001?",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Then its inverse weight is one thousand! A single outlier with noisy measurements gets multiplied by one thousand, causing the estimator's variance to explode. That is why production systems use weight trimming and self-normalized Hajek weighting.",
              "dock": "main"
            },
            {
              "speaker": "Kaito",
              "text": "Weight trimming trades a tiny amount of bias to prevent catastrophic variance inflation. Let's explore how sensor noise interacts with this in our first interactive lab!",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono font-black text-xs text-[#0e7490] uppercase tracking-wide\">\n      §4 IPW Weight Trimming • Bias-Variance Tradeoff\n    </span>\n    <span class=\"px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black bg-[#ffd8ce] text-[#b91c1c] border-2 border-[#151b20]\">\n      Production Rule\n    </span>\n  </div>\n  <p class=\"text-xs text-[#151b20] font-sans mb-3 leading-relaxed\">\n    Extreme propensities induce severe variance inflation:\n  </p>\n  <div class=\"grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs\">\n    <div class=\"p-3 rounded-xl bg-[#fffaf0] border-2 border-[#151b20] shadow-[2px_2px_0px_#151b20]\">\n      <strong class=\"text-[#b91c1c] block mb-1\">Variance Explosion:</strong>\n      <span class=\"text-[11px] text-[#475569]\">When $\\pi_i \\to 0$, $\\text{Var}(\\hat{\\mu}_{\\text{HT}}) = \\frac{1}{N^2} \\sum \\frac{1 - \\pi_i}{\\pi_i} Y_i^2 \\to \\infty$. A few rare records dominate the entire model.</span>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#e7f4c8] border-2 border-[#151b20] shadow-[2px_2px_0px_#151b20]\">\n      <strong class=\"text-[#15803d] block mb-1\">Weight Trimming Rule:</strong>\n      <span class=\"text-[11px] text-[#475569]\">Clip weights at upper threshold $\\tau \\approx 99\\text{th percentile}$: $w_i = \\min(1/\\pi_i, \\tau)$. This introduces small controllable bias while drastically slashing variance.</span>\n    </div>\n  </div>\n</div>\n"
        }
      },
      {
        "id": "s6",
        "title": "Interactive Lab 1: Measurement Error Attenuation Studio",
        "type": "interactive",
        "solo": {
          "speaker": "Dr. Nova (Senior Architect)",
          "title": "Simulator 7.2 Tab A: Errors-in-Variables & Differential Sensor Noise",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Welcome to Interactive Lab 1: Simulator 7.2 Tab A. Here, we simulate classical errors-in-variables. When physical sensor noise corrupts predictor X-star equals X plus u, Ordinary Least Squares slope collapses by the reliability ratio lambda equals sigma-X squared over sigma-X squared plus sigma-u squared.",
              "dock": "tool"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Adjust the sliders below. Set true beta to 2.0. Notice that for Group 1 with clean sensors where noise is 0.4, the slope is preserved at 1.85. But for Group 0 with noisy sensors where noise is 2.5, the estimated slope collapses by 76% down to 0.48! An automated system will conclude that this feature is useless for Group 0.",
              "dock": "tool"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-2 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono font-black text-xs text-[#0e7490] uppercase tracking-wide\">\n      §5 Interactive Studio • Errors-in-Variables &amp; Attenuation Collapse\n    </span>\n    <span class=\"px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black bg-[#ffc83e] text-[#151b20] border-2 border-[#151b20]\">\n      Simulator 7.2 Tab A\n    </span>\n  </div>\n  <p class=\"text-xs text-[#151b20] font-sans mb-2\">\n    Interact with the simulator controls below to explore how differential sensor noise causes regression slope collapse on unprivileged demographic groups:\n  </p>\n</div>\n"
        },
        "duo": {
          "title": "Socratic Lab: Witnessing Regression Dilution",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Look at the orange line for Group 0, Dr. Nova! It's almost completely flat! The true underlying relationship between X and Y is identical for both groups, but the noisy sensor makes Group 0 look completely unresponsive!",
              "dock": "tool"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Exactly. That is the tragedy of differential attenuation. The algorithm isn't being malicious; mathematically, it minimizes squared error by shrinking the noisy coefficient toward zero. In multi-variable models, it drops feature X entirely for Group 0 and substitutes demographic stereotypes instead.",
              "dock": "tool"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-2 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono font-black text-xs text-[#0e7490] uppercase tracking-wide\">\n      §5 Socratic Lab • Differential Regression Dilution\n    </span>\n    <span class=\"px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black bg-[#ffc83e] text-[#151b20] border-2 border-[#151b20]\">\n      Interactive Exploration\n    </span>\n  </div>\n  <p class=\"text-xs text-[#151b20] font-sans mb-2\">\n    Kaito and Dr. Nova analyze how noisy sensors destroy predictive utility for minority cohorts:\n  </p>\n</div>\n"
        }
      },
      {
        "id": "s7",
        "title": "Active Checkpoint 1: Errors-in-Variables & Attenuation",
        "type": "checkpoint",
        "solo": {
          "speaker": "Dr. Nova (Senior Architect)",
          "title": "Concept Verification: Deriving the Reliability Ratio",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Time for Active Checkpoint 1. In a simple linear regression Y equals beta X plus epsilon, suppose X is measured through a noisy sensor X-star equals X plus u, where noise u is independent of X and disturbance epsilon. What is the probability limit of the OLS slope estimator beta-hat?",
              "dock": "tool"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-2 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono font-black text-xs text-[#0e7490] uppercase tracking-wide\">\n      Active Checkpoint 7.2.1 • Classical Attenuation Bias Proof\n    </span>\n    <span class=\"px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black bg-[#c9f3f4] text-[#0e7490] border-2 border-[#151b20]\">\n      Self-Assessment\n    </span>\n  </div>\n  <p class=\"text-xs text-[#151b20] font-sans mb-3\">\n    Verify your mathematical derivation of the classical errors-in-variables theorem:\n  </p>\n</div>\n"
        },
        "duo": {
          "title": "Socratic Checkpoint: The Mathematics of Sensor Dilution",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Dr. Nova, this is the exact proof we derived earlier using covariance expansion. Let's test whether our learners can identify the asymptotic OLS slope under zero-mean independent sensor noise!",
              "dock": "tool"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-2 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono font-black text-xs text-[#0e7490] uppercase tracking-wide\">\n      Socratic Checkpoint 7.2.1 • The Attenuation Theorem\n    </span>\n    <span class=\"px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black bg-[#c9f3f4] text-[#0e7490] border-2 border-[#151b20]\">\n      Interactive Quiz\n    </span>\n  </div>\n  <p class=\"text-xs text-[#151b20] font-sans mb-3\">\n    Select the correct asymptotic limit of the OLS estimator below:\n  </p>\n</div>\n"
        }
      },
      {
        "id": "s8",
        "title": "Differential Measurement Error Across Demographic Groups",
        "type": "conceptual",
        "solo": {
          "speaker": "Dr. Nova (Senior Architect)",
          "title": "Sensor Disparities & Proxy Leakage",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "In socio-technical engineering, measurement noise is almost never classical. It is differential: sensor noise variance conditioned on protected attribute A equals 0 is significantly higher than noise variance on A equals 1.",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "This creates diverging reliability ratios: lambda-1 is near 1.0, while lambda-0 collapses. The automated scoring system concludes that feature X is substantially less predictive for Group 0. In multi-feature models, the estimator discards X for Group 0 in favor of spurious demographic correlates, driving predictive inequality.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono font-black text-xs text-[#0e7490] uppercase tracking-wide\">\n      §6 Differential Error • Demographic Noise Disparities\n    </span>\n    <span class=\"px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black bg-[#ffd8ce] text-[#b91c1c] border-2 border-[#151b20]\">\n      Predictive Inequality\n    </span>\n  </div>\n\n  <div class=\"p-3.5 rounded-xl bg-[#151b20] text-[#c9f3f4] font-mono text-xs mb-3\">\n    <div class=\"text-[#ffc83e] font-bold mb-1\">// Differential Reliability Disparity</div>\n    $$\\sigma_{u \\mid A = 0}^2 \\gg \\sigma_{u \\mid A = 1}^2 \\implies \\lambda_0 = \\frac{\\sigma_X^2}{\\sigma_X^2 + \\sigma_{u \\mid A = 0}^2} \\ll \\lambda_1 = \\frac{\\sigma_X^2}{\\sigma_X^2 + \\sigma_{u \\mid A = 1}^2} \\approx 1.0$$\n    <span class=\"text-[11px] text-[#94a3b8]\">Privileged Group 1 enjoys high predictive fidelity ($\\hat{\\beta}_1 \\approx \\beta$), while unprivileged Group 0 suffers severe attenuation ($\\hat{\\beta}_0 = \\beta \\lambda_0 \\ll \\beta$).</span>\n  </div>\n\n  <div class=\"grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs\">\n    <div class=\"p-3 rounded-xl bg-[#fffaf0] border-2 border-[#151b20] shadow-[2px_2px_0px_#151b20]\">\n      <strong class=\"text-[#b91c1c] block mb-1\">Feature Downweighting:</strong>\n      <span class=\"text-[11px] text-[#475569]\">In gradient-boosted trees or neural nets, the model assigns minimal split importance or weight to feature $X$ for Group 0 due to low signal-to-noise ratio.</span>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#fffaf0] border-2 border-[#151b20] shadow-[2px_2px_0px_#151b20]\">\n      <strong class=\"text-[#0e7490] block mb-1\">Proxy Substitution:</strong>\n      <span class=\"text-[11px] text-[#475569]\">To recover predictive power on Group 0, the model latches onto noisy demographic correlates like ZIP code or school district, baking structural bias into the objective function.</span>\n    </div>\n  </div>\n</div>\n"
        },
        "duo": {
          "title": "Socratic Exploration: When Hardware Encodes Demographics",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "This isn't just theory, right? Where do we see differential sensor noise in the physical world?",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Everywhere from pulse oximeters whose optical sensors misread oxygen levels through melanin, to voice recognition systems calibrated on male Californian accents that fail on regional female speakers. Hardware calibrations embody the bodies of their original test subjects.",
              "dock": "main"
            },
            {
              "speaker": "Kaito",
              "text": "Now let's examine another form of label distortion: proxy label bias, where we substitute an operational metric for unobservable health need.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono font-black text-xs text-[#0e7490] uppercase tracking-wide\">\n      §6 Physical Hardware Bias • Sensor Calibration Artifacts\n    </span>\n    <span class=\"px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black bg-[#ffc83e] text-[#151b20] border-2 border-[#151b20]\">\n      Physical Reality\n    </span>\n  </div>\n  <p class=\"text-xs text-[#151b20] font-sans mb-3 leading-relaxed\">\n    Dr. Nova and Kaito highlight real-world instances of differential sensor noise:\n  </p>\n  <div class=\"grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs\">\n    <div class=\"p-3 rounded-xl bg-[#fffaf0] border-2 border-[#151b20] shadow-[2px_2px_0px_#151b20]\">\n      <strong class=\"text-[#0e7490] block mb-1\">Optical Bio-Sensors:</strong>\n      <span class=\"text-[11px] text-[#475569]\">Smartwatches and medical oximeters using single green/red LEDs exhibit $3\\times$ higher measurement variance on dark skin phenotypes.</span>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#fffaf0] border-2 border-[#151b20] shadow-[2px_2px_0px_#151b20]\">\n      <strong class=\"text-[#b45309] block mb-1\">Acoustic ASR Sensors:</strong>\n      <span class=\"text-[11px] text-[#475569]\">Automotive speech recognition microphones optimized for lower vocal frequency bands have $20\\%$ higher word error rate on female voices.</span>\n    </div>\n  </div>\n</div>\n"
        }
      },
      {
        "id": "s9",
        "title": "Proxy Label Bias & The Obermeyer Healthcare Disparity",
        "type": "case-study",
        "solo": {
          "speaker": "Dr. Nova (Senior Architect)",
          "title": "Substituting Cost for Care: Science (2019)",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Proxy label bias occurs when the true target concept Y-star is unobservable or legally restricted, forcing engineers to substitute an accessible operational proxy Y-tilde. In 2019, Obermeyer and colleagues uncovered a commercial algorithm affecting over two hundred million patients.",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "The target concept was true healthcare need, but the engineered proxy was annual healthcare costs. Due to unequal access to care, insurance disparities, and discriminatory physician patterns, less money was historically spent on Black patients relative to White patients at identical illness levels. As a result, Black patients had to be significantly sicker to qualify for high-risk care management programs.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono font-black text-xs text-[#0e7490] uppercase tracking-wide\">\n      §7 Case Study • Obermeyer Science (2019) Healthcare Investigation\n    </span>\n    <span class=\"px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black bg-[#ffd8ce] text-[#b91c1c] border-2 border-[#151b20]\">\n      Science 2019\n    </span>\n  </div>\n\n  <div class=\"p-3.5 rounded-xl bg-[#151b20] text-[#c9f3f4] font-mono text-xs mb-3\">\n    <div class=\"text-[#ffc83e] font-bold mb-1\">// Mathematical Formulation of Proxy Label Bias</div>\n    $$\\tilde{Y} = g(Y^*, A) + \\eta, \\qquad \\mathbb{E}[\\tilde{Y} \\mid Y^* = y, A = \\text{Black}] < \\mathbb{E}[\\tilde{Y} \\mid Y^* = y, A = \\text{White}]$$\n    <span class=\"text-[11px] text-[#94a3b8]\">Conditioned on identical illness severity $Y^*$, healthcare expenditure $\\tilde{Y}$ systematically undercounted minority clinical need.</span>\n  </div>\n\n  <div class=\"grid grid-cols-1 sm:grid-cols-3 gap-2.5 font-mono text-xs text-center\">\n    <div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[2px_2px_0px_#151b20]\">\n      <strong class=\"text-[#b91c1c] block text-lg font-black\">17.7%</strong>\n      <span class=\"text-[10px] text-[#475569]\">Original Black Patient Enrollment in Specialized Care</span>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[2px_2px_0px_#151b20]\">\n      <strong class=\"text-[#15803d] block text-lg font-black\">46.5%</strong>\n      <span class=\"text-[10px] text-[#475569]\">Remedied Enrollment after Replacing Cost with Clinical Needs</span>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[2px_2px_0px_#151b20]\">\n      <strong class=\"text-[#0e7490] block text-lg font-black\">&gt;200M</strong>\n      <span class=\"text-[10px] text-[#475569]\">US Commercial Healthcare Patients Impacted</span>\n    </div>\n  </div>\n</div>\n"
        },
        "duo": {
          "title": "Socratic Exploration: The Dangerous Convenience of Proxies",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Why did the engineers use cost instead of illness in the first place? Illness seems like the obvious label!",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Because financial billing records are complete, clean, digitized, and sitting in the SQL database, while clinical illness requires complex physician notes and lab charts! Engineers substituted the convenient metric for the correct metric.",
              "dock": "main"
            },
            {
              "speaker": "Kaito",
              "text": "And by predicting cost, the model learned that if society spends less on someone, they deserve less care! That is a profound lesson in why label engineering is safety-critical.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono font-black text-xs text-[#0e7490] uppercase tracking-wide\">\n      §7 Proxy Engineering • The Convenient Metric Trap\n    </span>\n    <span class=\"px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black bg-[#ffc83e] text-[#151b20] border-2 border-[#151b20]\">\n      Engineering Lesson\n    </span>\n  </div>\n  <p class=\"text-xs text-[#151b20] font-sans mb-3 leading-relaxed\">\n    Kaito and Dr. Nova extract the core lesson from the Obermeyer investigation:\n  </p>\n  <div class=\"p-3.5 rounded-xl bg-[#fffaf0] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] font-mono text-xs\">\n    <div class=\"text-[#b45309] font-black mb-1\">Cardinal Principle of Target Variable Engineering:</div>\n    <span class=\"text-[11px] text-[#151b20]\">Never substitute an administrative or financial operational metric for a human welfare outcome without auditing whether demographic groups face differential conversion rates between the true state and the proxy.</span>\n  </div>\n</div>\n"
        }
      },
      {
        "id": "s10",
        "title": "Annotation Bias & Cognitive Label Flips: Transition Matrices",
        "type": "conceptual",
        "solo": {
          "speaker": "Dr. Nova (Senior Architect)",
          "title": "Human Annotator Variance & Noise Transition Matrices",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Annotation bias occurs when human annotators introduce subjective cultural norms, cognitive stereotypes, or fatigue into the ground truth labeling process. We model this via an asymmetric transition matrix T-sub-j-k, defined as the probability of observed label k given true latent label j and demographic attribute A.",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "A prime example is toxic language detection in natural language processing. Crowdsourced annotators who are unfamiliar with African American English routinely flag benign cultural idioms as abusive or toxic at more than double the rate of standard American English, baking linguistic prejudice directly into training sets.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono font-black text-xs text-[#0e7490] uppercase tracking-wide\">\n      §8 Annotation Bias • Cognitive Transition Matrices\n    </span>\n    <span class=\"px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black bg-[#fff0b9] text-[#b45309] border-2 border-[#151b20]\">\n      Annotator Variance\n    </span>\n  </div>\n\n  <div class=\"p-3.5 rounded-xl bg-[#151b20] text-[#c9f3f4] font-mono text-xs mb-3\">\n    <div class=\"text-[#ffc83e] font-bold mb-1\">// Noise Transition Matrix Condition</div>\n    $$T_{jk}(a) \\equiv \\Pr(\\tilde{Y} = k \\mid Y^* = j, A = a)$$\n    <span class=\"text-[11px] text-[#94a3b8]\">Annotation error is demographic-dependent: false positive flips $\\Pr(\\tilde{Y}=\\text{Toxic} \\mid Y^*=\\text{Benign}, \\text{AAE}) \\gg \\Pr(\\tilde{Y}=\\text{Toxic} \\mid Y^*=\\text{Benign}, \\text{SAE})$.</span>\n  </div>\n\n  <div class=\"grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs\">\n    <div class=\"p-3 rounded-xl bg-[#fffaf0] border-2 border-[#151b20] shadow-[2px_2px_0px_#151b20]\">\n      <strong class=\"text-[#b91c1c] block mb-1\">Linguistic Injustice in NLP:</strong>\n      <span class=\"text-[11px] text-[#475569]\">Davidson et al. (2019) demonstrated tweets in African American English are 2.2x more likely to be labeled toxic by majority annotators due to dialect unfamiliarity.</span>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#fffaf0] border-2 border-[#151b20] shadow-[2px_2px_0px_#151b20]\">\n      <strong class=\"text-[#15803d] block mb-1\">Adjudication Protocols:</strong>\n      <span class=\"text-[11px] text-[#475569]\">Mitigation requires multi-annotator adjudication, culturally grounded labeling guidelines, and demographic parity checks across annotator pools.</span>\n    </div>\n  </div>\n</div>\n"
        },
        "duo": {
          "title": "Socratic Exploration: Who Annotates the Annotators?",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "If annotators disagree on subjective labels like toxicity or sentiment, taking the majority vote seems like the obvious standard. Why isn't majority vote enough?",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Because if 90% of your crowdsourced annotators belong to the cultural majority, their majority vote simply silences the cultural nuance of the minority dialect! You end up codifying majority prejudice as ground truth.",
              "dock": "main"
            },
            {
              "speaker": "Kaito",
              "text": "Now let's examine aggregation bias, where pooling datasets causes the overall model to completely invert the truth for all subgroups!",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono font-black text-xs text-[#0e7490] uppercase tracking-wide\">\n      §8 Majority Crowdsourcing • The Consensus Trap\n    </span>\n    <span class=\"px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black bg-[#ffd8ce] text-[#b91c1c] border-2 border-[#151b20]\">\n      Annotation Governance\n    </span>\n  </div>\n  <p class=\"text-xs text-[#151b20] font-sans mb-3 leading-relaxed\">\n    Dr. Nova and Kaito examine why consensus labeling can amplify bias:\n  </p>\n  <div class=\"p-3.5 rounded-xl bg-[#fffaf0] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] font-mono text-xs\">\n    <div class=\"text-[#b45309] font-black mb-1\">The Tyranny of the Annotator Majority:</div>\n    <span class=\"text-[11px] text-[#151b20]\">When labeling guidelines rely on simple majority voting across culturally homogeneous annotator pools, minority linguistic idioms and cultural expressions are systematically misclassified as toxic, abusive, or spam.</span>\n  </div>\n</div>\n"
        }
      },
      {
        "id": "s11",
        "title": "Aggregation Bias & Simpson's Reversal in Loss Minimization",
        "type": "conceptual",
        "solo": {
          "speaker": "Dr. Nova (Senior Architect)",
          "title": "Subgroup Heterogeneity & Simpson's Paradox",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Aggregation bias occurs when a single model is fitted across heterogeneous sub-populations where the true underlying conditional mapping varies by group. That is, Expected value of Y given X and A equals 0 does not equal Expected value of Y given X and A equals 1.",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "When an empirical risk minimizer pools these groups without stratification, group centroid offsets can cause Simpson's Paradox. Both subgroups can have positive slopes, yet the global pooled regression fits a negative slope! Minimizing aggregate loss sacrifices the subgroup whose local conditional relationship is completely reversed.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono font-black text-xs text-[#0e7490] uppercase tracking-wide\">\n      §9 Aggregation Bias • Simpson's Reversal in Loss Minimization\n    </span>\n    <span class=\"px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black bg-[#ffd8ce] text-[#b91c1c] border-2 border-[#151b20]\">\n      Simpson's Paradox\n    </span>\n  </div>\n\n  <div class=\"p-3.5 rounded-xl bg-[#151b20] text-[#c9f3f4] font-mono text-xs mb-3\">\n    <div class=\"text-[#ffc83e] font-bold mb-1\">// Mathematical Invariant of Aggregation Bias</div>\n    $$\\mathbb{E}[Y \\mid \\mathbf{X}, A = 0] \\neq \\mathbb{E}[Y \\mid \\mathbf{X}, A = 1]$$\n    $$\\beta_0 > 0 \\quad \\text{and} \\quad \\beta_1 > 0, \\quad \\text{yet} \\quad \\hat{\\beta}_{\\text{pooled}} = \\frac{\\sum (X_i - \\bar{X})(Y_i - \\bar{Y})}{\\sum (X_i - \\bar{X})^2} < 0$$\n  </div>\n\n  <div class=\"grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs\">\n    <div class=\"p-3 rounded-xl bg-[#fff0b9] border-2 border-[#151b20] shadow-[2px_2px_0px_#151b20]\">\n      <strong class=\"text-[#b45309] block mb-1\">The Mechanism of Sign Reversal:</strong>\n      <span class=\"text-[11px] text-[#151b20]\">When group centroids are offset such that the subgroup with higher $X$ has lower baseline $Y$, the pooled OLS line connects the centroids, completely overwhelming the local positive slopes.</span>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#c9f3f4] border-2 border-[#151b20] shadow-[2px_2px_0px_#151b20]\">\n      <strong class=\"text-[#0e7490] block mb-1\">Architectural Remedy:</strong>\n      <span class=\"text-[11px] text-[#151b20]\">Stratified models, hierarchical Bayesian modeling, or explicit group interaction terms $f(\\mathbf{X}, A) = \\mathbf{w}^T \\mathbf{X} + \\boldsymbol{\\gamma}^T (\\mathbf{X} \\odot A)$ to decouple group parameters.</span>\n    </div>\n  </div>\n</div>\n"
        },
        "duo": {
          "title": "Socratic Exploration: The Optical Illusion of Pooled Loss",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Wait Dr. Nova, how is it mathematically possible for a feature to help every single subgroup individually, but hurt everyone when combined into a single dataset?",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Because the pooled regression line doesn't just fit the scatter within each group—it also fits the gap between the groups! If Group 1 has higher income on average but lower overall loan amounts due to regional differences, the pooled line draws a downward slope connecting Group 0 to Group 1.",
              "dock": "main"
            },
            {
              "speaker": "Kaito",
              "text": "That's incredible! Let's fire up our second interactive lab to see this sign reversal happen dynamically!",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono font-black text-xs text-[#0e7490] uppercase tracking-wide\">\n      §9 Socratic Exploration • Simpson's Reversal Intuition\n    </span>\n    <span class=\"px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black bg-[#ffc83e] text-[#151b20] border-2 border-[#151b20]\">\n      Geometric Intuition\n    </span>\n  </div>\n  <p class=\"text-xs text-[#151b20] font-sans mb-3 leading-relaxed\">\n    Kaito and Dr. Nova analyze the geometry of Simpson's Paradox:\n  </p>\n  <div class=\"p-3.5 rounded-xl bg-[#fffaf0] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] font-mono text-xs\">\n    <div class=\"text-[#b91c1c] font-black mb-1\">Within-Group vs Between-Group Covariance:</div>\n    <span class=\"text-[11px] text-[#151b20]\">Total covariance decomposes into $\\text{Cov}_{\\text{total}} = \\mathbb{E}[\\text{Cov}(X, Y \\mid A)] + \\text{Cov}(\\mathbb{E}[X \\mid A], \\mathbb{E}[Y \\mid A])$. If between-group covariance is strongly negative, it flips the sign of total covariance, creating an erroneous global decision rule.</span>\n  </div>\n</div>\n"
        }
      },
      {
        "id": "s12",
        "title": "Interactive Lab 2: Aggregation Bias & Simpson's Paradox Explorer",
        "type": "interactive",
        "solo": {
          "speaker": "Dr. Nova (Senior Architect)",
          "title": "Simulator 7.2 Tab B: Aggregation Bias & Simpson's Paradox",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Welcome to Interactive Lab 2: Simulator 7.2 Tab B. Here, you can directly manipulate subgroup slope and centroid offsets to trigger Simpson's Paradox.",
              "dock": "tool"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Notice the sliders below. Set subgroup intra-slope to plus 1.2. Then increase centroid offset Delta X to plus 5, and Delta Y to minus 6. Watch the canvas: both orange Group 0 and blue Group 1 have positive slopes of plus 1.2. Yet the global pooled dashed red line collapses into a negative slope of minus 0.45, triggering the Simpson's Paradox warning!",
              "dock": "tool"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-2 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono font-black text-xs text-[#0e7490] uppercase tracking-wide\">\n      §10 Interactive Studio • Aggregation Bias &amp; Simpson's Paradox\n    </span>\n    <span class=\"px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black bg-[#ffc83e] text-[#151b20] border-2 border-[#151b20]\">\n      Simulator 7.2 Tab B\n    </span>\n  </div>\n  <p class=\"text-xs text-[#151b20] font-sans mb-2\">\n    Manipulate subgroup slope and centroid offsets below to observe sign reversal between stratified and pooled estimators:\n  </p>\n</div>\n"
        },
        "duo": {
          "title": "Socratic Lab: Inducing Simpson's Sign Reversal",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Dr. Nova, this is amazing! Both groups clearly point upwards, but the global line slants downwards! If we deployed this model, an applicant who increases their score would actually get a lower probability of approval!",
              "dock": "tool"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Precisely. The global model learns the exact opposite of the true causal mechanism for every individual in the population. That is why fitting a single unstratified model across heterogeneous demographic subgroups is so dangerous.",
              "dock": "tool"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-2 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono font-black text-xs text-[#0e7490] uppercase tracking-wide\">\n      §10 Socratic Lab • Simpson's Reversal in Action\n    </span>\n    <span class=\"px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black bg-[#ffc83e] text-[#151b20] border-2 border-[#151b20]\">\n      Interactive Exploration\n    </span>\n  </div>\n  <p class=\"text-xs text-[#151b20] font-sans mb-2\">\n    Kaito and Dr. Nova inspect the danger of deploying an unstratified pooled model:\n  </p>\n</div>\n"
        }
      },
      {
        "id": "s13",
        "title": "Active Checkpoint 2: Simpson's Paradox & Berkeley Admissions",
        "type": "checkpoint",
        "solo": {
          "speaker": "Dr. Nova (Senior Architect)",
          "title": "Concept Verification: The Berkeley Admissions Reversal",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Let us test your understanding in Active Checkpoint 2. In the famous 1975 UC Berkeley graduate admissions audit, aggregate university statistics showed male applicants were admitted at 44% compared to 35% for female applicants. Yet within individual departments, female applicants were admitted at equal or higher rates! What statistical phenomenon caused this reversal?",
              "dock": "tool"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-2 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono font-black text-xs text-[#0e7490] uppercase tracking-wide\">\n      Active Checkpoint 7.2.2 • The UC Berkeley Admissions Case\n    </span>\n    <span class=\"px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black bg-[#c9f3f4] text-[#0e7490] border-2 border-[#151b20]\">\n      Self-Assessment\n    </span>\n  </div>\n  <p class=\"text-xs text-[#151b20] font-sans mb-3\">\n    Identify the true causal driver behind the UC Berkeley admissions aggregation paradox:\n  </p>\n</div>\n"
        },
        "duo": {
          "title": "Socratic Checkpoint: Dissecting Berkeley Admissions",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "This is one of the most famous real-world paradoxes in statistics history, Dr. Nova! Let's see if our learners can distinguish between department-level confounding and overt institutional bias.",
              "dock": "tool"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-2 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono font-black text-xs text-[#0e7490] uppercase tracking-wide\">\n      Socratic Checkpoint 7.2.2 • Berkeley Admissions Confounding\n    </span>\n    <span class=\"px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black bg-[#c9f3f4] text-[#0e7490] border-2 border-[#151b20]\">\n      Interactive Quiz\n    </span>\n  </div>\n  <p class=\"text-xs text-[#151b20] font-sans mb-3\">\n    Select the correct mechanism that drove the Berkeley admissions disparity:\n  </p>\n</div>\n"
        }
      },
      {
        "id": "s14",
        "title": "Intersectional Representation & Benchmark Evaluation Skew",
        "type": "case-study",
        "solo": {
          "speaker": "Dr. Nova (Senior Architect)",
          "title": "Gender Shades & Geographic Benchmark Skew",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Representation bias scales exponentially across intersectional demographic identities. Even if a dataset achieves marginal balance—50% female and 50% darker skin phenotypes—the intersectional slice of darker females is frequently severely depleted.",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "In the landmark Gender Shades study by Joy Buolamwini and Timnit Gebru, commercial facial classification APIs achieved over 99% accuracy on lighter males, but error rates exploded to 34.7% on darker females. Furthermore, standard benchmarks like ImageNet and Open Images contain over 80% imagery from the US and Europe, creating benchmark evaluation skew that completely hides these intersectional failures.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono font-black text-xs text-[#0e7490] uppercase tracking-wide\">\n      §11 Intersectional Bias • Gender Shades &amp; Benchmark Skew\n    </span>\n    <span class=\"px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black bg-[#c9f3f4] text-[#0e7490] border-2 border-[#151b20]\">\n      Buolamwini &amp; Gebru (2018)\n    </span>\n  </div>\n\n  <div class=\"grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs mb-3\">\n    <div class=\"p-3.5 rounded-xl bg-[#fffaf0] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20]\">\n      <strong class=\"text-[#b91c1c] block mb-1\">Gender Shades Error Rate Matrix:</strong>\n      <div class=\"grid grid-cols-2 gap-2 text-center mt-2\">\n        <div class=\"p-2 rounded bg-[#e7f4c8] border border-[#151b20]\">\n          <span class=\"block text-[10px] text-[#475569]\">Lighter Males</span>\n          <strong class=\"text-[#15803d] text-sm\">0.8% Error</strong>\n        </div>\n        <div class=\"p-2 rounded bg-[#c9f3f4] border border-[#151b20]\">\n          <span class=\"block text-[10px] text-[#475569]\">Lighter Females</span>\n          <strong class=\"text-[#0e7490] text-sm\">7.1% Error</strong>\n        </div>\n        <div class=\"p-2 rounded bg-[#fff0b9] border border-[#151b20]\">\n          <span class=\"block text-[10px] text-[#475569]\">Darker Males</span>\n          <strong class=\"text-[#b45309] text-sm\">12.0% Error</strong>\n        </div>\n        <div class=\"p-2 rounded bg-[#ffd8ce] border border-[#151b20]\">\n          <span class=\"block text-[10px] text-[#475569]\">Darker Females</span>\n          <strong class=\"text-[#b91c1c] text-sm\">34.7% Error</strong>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"p-3.5 rounded-xl bg-[#151b20] text-[#c9f3f4] shadow-[3px_3px_0px_#151b20]\">\n      <strong class=\"text-[#ffc83e] block mb-1\">// Benchmark Geographic Skew</strong>\n      <div class=\"space-y-1.5 text-[11px] mt-2\">\n        <div>• <strong>ImageNet &amp; Open Images:</strong> &gt;80% US &amp; Europe</div>\n        <div>• <strong>Dollar Street Audit:</strong> African &amp; Asian household goods misclassified as \"costumes\" or \"trash\"</div>\n        <div>• <strong>Consequence:</strong> High aggregate benchmark score conceals failure on Global South</div>\n      </div>\n    </div>\n  </div>\n</div>\n"
        },
        "duo": {
          "title": "Socratic Exploration: Why Marginal Parity Is Not Enough",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "34.7% error on darker females while lighter males had less than 1% error! That means the commercial models were essentially guessing at random for darker women!",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Yes! And the providers had advertised their models as having 99% accuracy, because their evaluation benchmark was 90% lighter males! When you test on the same biased distribution you trained on, your benchmark acts as a confirmation mirror rather than an audit.",
              "dock": "main"
            },
            {
              "speaker": "Kaito",
              "text": "That proves benchmark diversity is just as critical as training data diversity. Let's look at real physical hardware case studies next!",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono font-black text-xs text-[#0e7490] uppercase tracking-wide\">\n      §11 Benchmark Mirage • Testing on the Training Bias\n    </span>\n    <span class=\"px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black bg-[#ffd8ce] text-[#b91c1c] border-2 border-[#151b20]\">\n      Evaluation Trap\n    </span>\n  </div>\n  <p class=\"text-xs text-[#151b20] font-sans mb-3 leading-relaxed\">\n    Dr. Nova and Kaito discuss the \"benchmark mirage\" where high aggregate accuracy conceals intersectional failure:\n  </p>\n  <div class=\"p-3.5 rounded-xl bg-[#fffaf0] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] font-mono text-xs\">\n    <div class=\"text-[#b91c1c] font-black mb-1\">The Intersectional Sampling Formula:</div>\n    $$\\Pr(G = F, P = D) \\ll \\Pr(G = F) \\cdot \\Pr(P = D)$$\n    <span class=\"text-[11px] text-[#151b20]\">Independent marginal balancing fails to populate the intersectional quadrant. Without stratified quota sampling across combinations of sensitive attributes, intersectional performance degrades dramatically.</span>\n  </div>\n</div>\n"
        }
      },
      {
        "id": "s15",
        "title": "Empirical Case Studies: Pulse Oximeters & Street Bump",
        "type": "case-study",
        "solo": {
          "speaker": "Dr. Nova (Senior Architect)",
          "title": "Physical Sensors & Crowdsourced Civic Sampling",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Let us examine two landmark empirical case studies showing how dataset bias manifests in physical and civic infrastructure. First, pulse oximetry during COVID-19. Pulse oximeters calibrate oxygen saturation using red and infrared optical absorption.",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Because calibration was conducted almost exclusively on fair-skinned cohorts, melanin absorption caused sensors to systematically overestimate blood oxygen levels in Black and Hispanic patients. This caused undetected occult hypoxemia to go unnoticed at triple the rate of White patients, delaying critical ICU admissions. Second, Boston's Street Bump app crowdsourced pothole detection via smartphone accelerometers, but because smartphone ownership was concentrated in affluent suburbs, the city only repaired roads in wealthy districts until the sampling bias was audited.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono font-black text-xs text-[#0e7490] uppercase tracking-wide\">\n      §12 Empirical Case Studies • Hardware Optics &amp; Crowdsourced Infrastructure\n    </span>\n    <span class=\"px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black bg-[#ffc83e] text-[#151b20] border-2 border-[#151b20]\">\n      Physical &amp; Civic Audits\n    </span>\n  </div>\n\n  <div class=\"grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs\">\n    <div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20]\">\n      <div class=\"flex items-center gap-2 mb-1.5\">\n        <span class=\"text-base\">🫁</span>\n        <strong class=\"text-[#b91c1c] text-xs\">Pulse Oximeter COVID-19 Disparity:</strong>\n      </div>\n      <div class=\"space-y-1.5 text-[11px] text-[#475569]\">\n        <div>• <strong>Mechanism:</strong> Melanin absorbs light at $660\\text{nm}$ and $940\\text{nm}$, distorting calibration curves.</div>\n        <div>• <strong>Clinical Impact:</strong> $3\\times$ higher rate of undetected occult hypoxemia ($SaO_2 < 88\\%$) in minority patients (NEJM 2020).</div>\n        <div>• <strong>Result:</strong> Delayed supplemental oxygen and ICU admissions during peak pandemic waves.</div>\n      </div>\n    </div>\n\n    <div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20]\">\n      <div class=\"flex items-center gap-2 mb-1.5\">\n        <span class=\"text-base\">📱</span>\n        <strong class=\"text-[#0e7490] text-xs\">Boston Street Bump App:</strong>\n      </div>\n      <div class=\"space-y-1.5 text-[11px] text-[#475569]\">\n        <div>• <strong>Mechanism:</strong> Passive smartphone accelerometer crowdsourcing for municipal pothole detection.</div>\n        <div>• <strong>Civic Distortion:</strong> Smartphones were concentrated among young, affluent commuters with luxury cars.</div>\n        <div>• <strong>Result:</strong> City road crews paved affluent suburbs while lower-income working-class roads were ignored.</div>\n      </div>\n    </div>\n  </div>\n</div>\n"
        },
        "duo": {
          "title": "Socratic Exploration: Data Collection as Infrastructure",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "The Street Bump case is so telling! The city thought they were being modern and data-driven, but their sensor was literally a luxury smartphone! If you only listen to data from smartphones, you only serve smartphone owners.",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Exactly. And in the pulse oximeter case, physical physics met calibration neglect with lethal consequences. When data collection devices are tested on narrow cohorts, their physical calibration curve becomes a structural inequality vector.",
              "dock": "main"
            },
            {
              "speaker": "Kaito",
              "text": "Now let's synthesize our complete production verification suite with Pydantic V2 and the four cardinal rules of bias auditing!",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono font-black text-xs text-[#0e7490] uppercase tracking-wide\">\n      §12 Socio-Technical Synthesis • Hardware &amp; Society\n    </span>\n    <span class=\"px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black bg-[#c9f3f4] text-[#0e7490] border-2 border-[#151b20]\">\n      Case Study Takeaways\n    </span>\n  </div>\n  <p class=\"text-xs text-[#151b20] font-sans mb-3 leading-relaxed\">\n    Dr. Nova and Kaito synthesize the lessons of physical and crowdsourced data failures:\n  </p>\n  <div class=\"p-3.5 rounded-xl bg-[#fffaf0] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] font-mono text-xs\">\n    <div class=\"text-[#0e7490] font-black mb-1\">The Law of Instrument Representation:</div>\n    <span class=\"text-[11px] text-[#151b20]\">Any system that derives its training labels from an instrument (smartphone, optical sensor, billing system) inherits the exact social and physical limitations of whoever owns, wears, or operates that instrument.</span>\n  </div>\n</div>\n"
        }
      },
      {
        "id": "s16",
        "title": "Production Implementation: Pydantic V2 Suite & Cardinal Rules",
        "type": "production",
        "solo": {
          "speaker": "Dr. Nova (Senior Architect)",
          "title": "Pydantic V2 Verification Suite & The 4 Cardinal Rules",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "To institutionalize these audits in production, we deploy automated data validation schemas using Pydantic V2. Our test suite validates three core quantitative audits: Sampling Bias with Horvitz-Thompson recovery, Measurement Error with theoretical reliability ratio bounds, and Proxy Label Disparity with illness severity thresholds.",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "We conclude Lesson 7.2 with the Four Cardinal Rules of Dataset Bias: First, audit the data-generating process before modeling; Second, never assume sensor errors are classical; Third, always stratify evaluations across intersectional subgroups to prevent Simpson's reversal; and Fourth, accompany every dataset with a standardized Datasheet for Datasets.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono font-black text-xs text-[#0e7490] uppercase tracking-wide\">\n      §13 Production Architecture • Pydantic V2 Verification &amp; Cardinal Rules\n    </span>\n    <span class=\"px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black bg-[#e7f4c8] text-[#15803d] border-2 border-[#151b20]\">\n      Production Ready\n    </span>\n  </div>\n\n  <div class=\"grid grid-cols-1 sm:grid-cols-3 gap-2.5 font-mono text-xs mb-3\">\n    <div class=\"p-2.5 rounded-xl bg-[#c9f3f4] border-2 border-[#151b20] shadow-[2px_2px_0px_#151b20]\">\n      <strong class=\"text-[#0e7490] block mb-1\">SamplingBiasAudit</strong>\n      <span class=\"text-[10px] text-[#475569]\">Validates $\\hat{\\mu}_{\\text{Hajek}}$ recovers true population mean within tolerance $\\epsilon < 0.10$.</span>\n    </div>\n    <div class=\"p-2.5 rounded-xl bg-[#ffd8ce] border-2 border-[#151b20] shadow-[2px_2px_0px_#151b20]\">\n      <strong class=\"text-[#b91c1c] block mb-1\">MeasurementErrorAudit</strong>\n      <span class=\"text-[10px] text-[#475569]\">Verifies empirical OLS slope matches closed-form reliability ratio $\\lambda = \\sigma_X^2 / (\\sigma_X^2 + \\sigma_u^2)$.</span>\n    </div>\n    <div class=\"p-2.5 rounded-xl bg-[#fff0b9] border-2 border-[#151b20] shadow-[2px_2px_0px_#151b20]\">\n      <strong class=\"text-[#b45309] block mb-1\">ProxyLabelBiasAudit</strong>\n      <span class=\"text-[10px] text-[#475569]\">Detects severity disparity threshold $\\Delta Y^* > 1.5$ when operational metrics substitute for health need.</span>\n    </div>\n  </div>\n\n  <div class=\"p-3 rounded-xl bg-[#151b20] text-[#c9f3f4] font-mono text-xs\">\n    <div class=\"text-[#ffc83e] font-bold mb-1.5\">// The 4 Cardinal Rules of Dataset Bias Auditing</div>\n    <div class=\"grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]\">\n      <div><strong>1. Audit the Generation Process:</strong> Trace societal and sampling selection before writing model loss.</div>\n      <div><strong>2. Reject Classical Noise Assumptions:</strong> Always test for differential demographic sensor variance.</div>\n      <div><strong>3. Stratify to Avoid Simpson's Paradox:</strong> Disaggregate evaluations across intersectional subgroups.</div>\n      <div><strong>4. Enforce Datasheets for Datasets:</strong> Document provenance, consent, and preprocessing in code repos.</div>\n    </div>\n  </div>\n</div>\n"
        },
        "duo": {
          "title": "Socratic Capstone: Engineering Trustworthy Datasets",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "What a masterclass, Dr. Nova! We went from mathematical proofs of Horvitz-Thompson weighting and errors-in-variables attenuation, through interactive simulators of Simpson's paradox, all the way to production Pydantic schemas!",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "And remember Kaito: the most elegant neural network architecture in the world cannot compensate for a dataset that systematically erases or misrepresents the people it serves. Algorithmic fairness begins at the data layer.",
              "dock": "main"
            },
            {
              "speaker": "Kaito",
              "text": "In our next lesson, we will dive into statistical tests for detecting bias—from disparate impact ratios to permutation testing. See you in Lesson 7.3!",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono font-black text-xs text-[#0e7490] uppercase tracking-wide\">\n      §13 Socratic Capstone • Engineering Trustworthy Foundations\n    </span>\n    <span class=\"px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black bg-[#e7f4c8] text-[#15803d] border-2 border-[#151b20]\">\n      Masterclass Complete\n    </span>\n  </div>\n  <p class=\"text-xs text-[#151b20] font-sans mb-3 leading-relaxed\">\n    Dr. Nova and Kaito summarize the core imperative for modern data engineers and ML researchers:\n  </p>\n  <div class=\"p-4 rounded-xl bg-[#151b20] text-[#c9f3f4] font-mono text-xs text-center shadow-[3px_3px_0px_#151b20]\">\n    <div class=\"text-[#ffc83e] font-black text-sm mb-1\">\"Fairness Begins at the Data Layer\"</div>\n    <p class=\"text-[11px] text-[#94a3b8] max-w-xl mx-auto\">\n      You cannot regularize your way out of unrepresentative data collection or differential sensor measurement collapse. Structural equity requires structural measurement hygiene.\n    </p>\n  </div>\n</div>\n"
        }
      }
    ]
  },
  "ch7_p3": {
    "chapter": 7,
    "part": 3,
    "key": "ch7_p3",
    "index": "Lesson 3 of 10",
    "lessonTitle": "Detecting and Auditing Bias Statistically",
    "title": "Detecting and Auditing Bias Statistically",
    "badge": "16 Masterclass Slides • Socratic Dialogue • Interactive Sandbox",
    "description": "Quantitative Distributional Divergence, Optimal Transport Metrics, Disparate Impact Auditing, and Exact Non-Parametric Hypothesis Testing.",
    "slides": [
      {
        "id": "s1",
        "title": "Detecting and Auditing Bias Statistically",
        "type": "title",
        "solo": {
          "speaker": "Dr. Nova (Senior Architect)",
          "title": "Detecting and Auditing Bias Statistically",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Welcome to Lesson 7.3 of Dataset Fundamentals: Detecting and Auditing Bias Statistically. In previous lessons, we unpacked the structural taxonomy of dataset bias and formalized mechanisms like differential measurement noise and Simpson's aggregation reversal. Now, we turn to the definitive engineering challenge: how do we quantitatively audit and detect bias before models reach production?",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Auditing cannot rely on intuition or superficial visual inspections. We need rigorous mathematical distance metrics across continuous score distributions, exact regulatory parity formulations for discrete decision thresholds, and non-parametric hypothesis testing that prevents fatal small-sample power failures. Today, we build the complete statistical auditing apparatus from mathematical first principles.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-6 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[6px_6px_0px_#151b20] text-center my-3\">\n  <div class=\"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c9f3f4] border-2 border-[#151b20] text-[#0e7490] font-mono text-xs font-bold uppercase tracking-wider mb-3\">\n    <span>Track 7 • Dataset Bias &amp; Fairness • Lesson 7.3</span>\n  </div>\n  <h1 class=\"text-2xl sm:text-3xl font-black text-[#151b20] tracking-tight mb-2\">\n    Detecting &amp; Auditing Bias Statistically\n  </h1>\n  <p class=\"text-sm sm:text-base text-[#475569] font-medium max-w-2xl mx-auto leading-relaxed\">\n    Quantitative Distributional Divergence, Optimal Transport Metrics, Disparate Impact Auditing, and Exact Non-Parametric Hypothesis Testing.\n  </p>\n  <div class=\"grid grid-cols-1 sm:grid-cols-4 gap-3 mt-5 max-w-4xl mx-auto text-left font-mono text-xs\">\n    <div class=\"p-3 rounded-xl bg-[#c9f3f4] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20]\">\n      <strong class=\"text-[#0e7490] block mb-1 font-black\">1. Continuous Metrics</strong>\n      <span class=\"text-[11px] text-[#151b20] leading-snug\">Kolmogorov-Smirnov $D_{\\text{KS}}$ vs. Wasserstein-1 optimal transport $\\mathcal{W}_1$.</span>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#fff0b9] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20]\">\n      <strong class=\"text-[#b45309] block mb-1 font-black\">2. Entropy Inequality</strong>\n      <span class=\"text-[11px] text-[#151b20] leading-snug\">Theil Index decomposition isolating between-group disparity from within-group spread.</span>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#ffd8ce] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20]\">\n      <strong class=\"text-[#b91c1c] block mb-1 font-black\">3. Regulatory Ratios</strong>\n      <span class=\"text-[11px] text-[#151b20] leading-snug\">EEOC 80% rule, pooled two-proportion $Z$-tests, and Katz logarithmic confidence bounds.</span>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#e7f4c8] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20]\">\n      <strong class=\"text-[#15803d] block mb-1 font-black\">4. Permutation Testing</strong>\n      <span class=\"text-[11px] text-[#151b20] leading-snug\">Exact Monte Carlo permutation audits preventing Type II false parity approvals.</span>\n    </div>\n  </div>\n</div>\n"
        },
        "duo": {
          "speaker": "Dr. Nova & Kaito (Pair Lecture)",
          "title": "Detecting and Auditing Bias Statistically",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Welcome to Lesson 7.3! Today, Kaito and I are formalizing how machine learning practitioners statistically detect, audit, and mathematically prove bias in real-world datasets.",
              "dock": "main"
            },
            {
              "speaker": "Kaito",
              "text": "In industry, people often look at a simple histogram of scores across demographic groups and say: 'The curves look close enough, let's ship it!' But as we'll prove today, visual inspection can completely mask catastrophic tail exclusions and severe adverse regulatory violations.",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Precisely, Kaito. An auditor must master continuous distribution divergence metrics like Wasserstein-1 distance, discrete threshold ratios like the EEOC 80 percent rule, and statistical power calculations. Let's begin by establishing our two-tier auditing architecture.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-6 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[6px_6px_0px_#151b20] text-center my-3\">\n  <div class=\"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c9f3f4] border-2 border-[#151b20] text-[#0e7490] font-mono text-xs font-bold uppercase tracking-wider mb-3\">\n    <span>Track 7 • Lesson 7.3 • Socratic Dialogue Deconstructed</span>\n  </div>\n  <h1 class=\"text-2xl sm:text-3xl font-black text-[#151b20] tracking-tight mb-2\">\n    Detecting &amp; Auditing Bias Statistically\n  </h1>\n  <p class=\"text-sm sm:text-base text-[#475569] font-medium max-w-2xl mx-auto leading-relaxed\">\n    Quantitative Distributional Divergence, Optimal Transport Metrics, Disparate Impact Auditing, and Exact Non-Parametric Hypothesis Testing.\n  </p>\n  <div class=\"grid grid-cols-1 sm:grid-cols-4 gap-3 mt-5 max-w-4xl mx-auto text-left font-mono text-xs\">\n    <div class=\"p-3 rounded-xl bg-[#c9f3f4] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20]\">\n      <strong class=\"text-[#0e7490] block mb-1 font-black\">1. Continuous Metrics</strong>\n      <span class=\"text-[11px] text-[#151b20] leading-snug\">Kolmogorov-Smirnov $D_{\\text{KS}}$ vs. Wasserstein-1 optimal transport $\\mathcal{W}_1$.</span>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#fff0b9] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20]\">\n      <strong class=\"text-[#b45309] block mb-1 font-black\">2. Entropy Inequality</strong>\n      <span class=\"text-[11px] text-[#151b20] leading-snug\">Theil Index decomposition isolating between-group disparity from within-group spread.</span>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#ffd8ce] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20]\">\n      <strong class=\"text-[#b91c1c] block mb-1 font-black\">3. Regulatory Ratios</strong>\n      <span class=\"text-[11px] text-[#151b20] leading-snug\">EEOC 80% rule, pooled two-proportion $Z$-tests, and Katz logarithmic confidence bounds.</span>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#e7f4c8] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20]\">\n      <strong class=\"text-[#15803d] block mb-1 font-black\">4. Permutation Testing</strong>\n      <span class=\"text-[11px] text-[#151b20] leading-snug\">Exact Monte Carlo permutation audits preventing Type II false parity approvals.</span>\n    </div>\n  </div>\n</div>\n"
        }
      },
      {
        "id": "s2",
        "title": "The 2-Tier Statistical Audit Architecture",
        "type": "concept",
        "solo": {
          "speaker": "Dr. Nova",
          "title": "Continuous vs. Discrete Auditing Layers",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "A rigorous statistical audit operates on two distinct mathematical planes: the continuous feature or score space upstream, and the discrete selection or classification space downstream.",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "In the continuous tier, we evaluate model risk scores S conditioned on protected demographic attributes A. If the score distributions P of S given A equals 0 and P of S given A equals 1 diverge, that underlying gap is latent. In the discrete tier, a operational decision cutoff tau converts continuous scores into binary decisions Y-hat. Depending on where tau is placed, a subtle continuous divergence can explode into a massive regulatory adverse impact violation.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono text-xs font-black text-[#0e7490] uppercase tracking-wider\">Audit Taxonomy • Tiered Framework</span>\n    <span class=\"px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#c9f3f4] text-[#0e7490] border border-[#151b20]\">Continuous ➔ Discrete</span>\n  </div>\n\n  <div class=\"grid grid-cols-1 md:grid-cols-2 gap-4\">\n    <div class=\"p-4 rounded-xl bg-[#fffaf0] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20]\">\n      <div class=\"flex items-center gap-2 mb-2 font-mono text-xs font-black text-[#b45309]\">\n        <span>📐</span> TIER 1: Continuous Distribution Divergence\n      </div>\n      <p class=\"text-xs text-[#475569] leading-relaxed mb-3\">\n        Evaluates the raw scoring function $S = f(\\mathbf{X}) \\in \\mathbb{R}$ across demographic subgroups $A \\in \\{0, 1\\}$. Independent of any particular operational decision threshold $\\tau$.\n      </p>\n      <div class=\"space-y-1.5 font-mono text-[11px] bg-[#ffffff] p-2.5 rounded-lg border border-[#151b20]\">\n        <div>• <strong>Kolmogorov-Smirnov:</strong> $D_{\\text{KS}} = \\sup_s |F_0(s) - F_1(s)|$</div>\n        <div>• <strong>Wasserstein-1 Distance:</strong> $\\mathcal{W}_1 = \\int_0^1 |F_0^{-1}(u) - F_1^{-1}(u)| du$</div>\n        <div>• <strong>Theil Entropy Index:</strong> $T = T_{\\text{within}} + T_{\\text{between}}$</div>\n      </div>\n    </div>\n\n    <div class=\"p-4 rounded-xl bg-[#fffaf0] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20]\">\n      <div class=\"flex items-center gap-2 mb-2 font-mono text-xs font-black text-[#0e7490]\">\n        <span>⚖️</span> TIER 2: Discrete Decision Parity &amp; Regulatory Tests\n      </div>\n      <p class=\"text-xs text-[#475569] leading-relaxed mb-3\">\n        Evaluates binary outcomes $\\hat{Y} = \\mathbf{1}(S \\ge \\tau)$ under a chosen cutoff $\\tau$. Directly tied to legal liability, employment discrimination law, and credit underwriting compliance.\n      </p>\n      <div class=\"space-y-1.5 font-mono text-[11px] bg-[#ffffff] p-2.5 rounded-lg border border-[#151b20]\">\n        <div>• <strong>Disparate Impact Ratio:</strong> $\\text{DIR}(\\tau) = \\frac{P(S \\ge \\tau \\mid A=0)}{P(S \\ge \\tau \\mid A=1)}$</div>\n        <div>• <strong>EEOC 80% Rule:</strong> Prima facie adverse impact if $\\text{DIR} < 0.80$</div>\n        <div>• <strong>Hypothesis Tests:</strong> Two-proportion pooled $Z$-test &amp; Permutation $p$</div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"mt-3 p-3 rounded-xl bg-[#f0fdf4] border-2 border-[#15803d] text-xs font-sans text-[#14532d]\">\n    <strong>Core Architectural Insight:</strong> Auditing only Tier 2 creates a false sense of security. An algorithm can appear \"fair\" under a lax threshold $\\tau_1$ but become highly discriminatory if business pressures force management to tighten the cutoff to $\\tau_2$. Comprehensive audits must inspect Tier 1 continuously.\n  </div>\n</div>\n"
        },
        "duo": {
          "speaker": "Dr. Nova & Kaito",
          "title": "Continuous vs. Discrete Auditing Layers",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Notice how the continuous and discrete tiers interact, Kaito. The continuous distribution is the intrinsic property of the trained model, while the discrete selection rate is a function of the operational threshold tau.",
              "dock": "main"
            },
            {
              "speaker": "Kaito",
              "text": "Right! A team might tune their decision threshold tau to pass the legal 80% Disparate Impact rule today. But if the marketing team changes the target acceptance rate next month, that threshold shifts, and an unaddressed continuous divergence can instantly trigger a massive regulatory violation!",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Exactly. That is why enterprise auditors mandate continuous metrics like Kolmogorov-Smirnov and Wasserstein distance alongside discrete ratios. Let's examine the classical Kolmogorov-Smirnov statistic first.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono text-xs font-black text-[#0e7490] uppercase tracking-wider\">Audit Taxonomy • Tiered Framework</span>\n    <span class=\"px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#c9f3f4] text-[#0e7490] border border-[#151b20]\">Continuous ➔ Discrete</span>\n  </div>\n\n  <div class=\"grid grid-cols-1 md:grid-cols-2 gap-4\">\n    <div class=\"p-4 rounded-xl bg-[#fffaf0] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20]\">\n      <div class=\"flex items-center gap-2 mb-2 font-mono text-xs font-black text-[#b45309]\">\n        <span>📐</span> TIER 1: Continuous Distribution Divergence\n      </div>\n      <p class=\"text-xs text-[#475569] leading-relaxed mb-3\">\n        Evaluates the raw scoring function $S = f(\\mathbf{X}) \\in \\mathbb{R}$ across demographic subgroups $A \\in \\{0, 1\\}$. Independent of any particular operational decision threshold $\\tau$.\n      </p>\n      <div class=\"space-y-1.5 font-mono text-[11px] bg-[#ffffff] p-2.5 rounded-lg border border-[#151b20]\">\n        <div>• <strong>Kolmogorov-Smirnov:</strong> $D_{\\text{KS}} = \\sup_s |F_0(s) - F_1(s)|$</div>\n        <div>• <strong>Wasserstein-1 Distance:</strong> $\\mathcal{W}_1 = \\int_0^1 |F_0^{-1}(u) - F_1^{-1}(u)| du$</div>\n        <div>• <strong>Theil Entropy Index:</strong> $T = T_{\\text{within}} + T_{\\text{between}}$</div>\n      </div>\n    </div>\n\n    <div class=\"p-4 rounded-xl bg-[#fffaf0] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20]\">\n      <div class=\"flex items-center gap-2 mb-2 font-mono text-xs font-black text-[#0e7490]\">\n        <span>⚖️</span> TIER 2: Discrete Decision Parity &amp; Regulatory Tests\n      </div>\n      <p class=\"text-xs text-[#475569] leading-relaxed mb-3\">\n        Evaluates binary outcomes $\\hat{Y} = \\mathbf{1}(S \\ge \\tau)$ under a chosen cutoff $\\tau$. Directly tied to legal liability, employment discrimination law, and credit underwriting compliance.\n      </p>\n      <div class=\"space-y-1.5 font-mono text-[11px] bg-[#ffffff] p-2.5 rounded-lg border border-[#151b20]\">\n        <div>• <strong>Disparate Impact Ratio:</strong> $\\text{DIR}(\\tau) = \\frac{P(S \\ge \\tau \\mid A=0)}{P(S \\ge \\tau \\mid A=1)}$</div>\n        <div>• <strong>EEOC 80% Rule:</strong> Prima facie adverse impact if $\\text{DIR} < 0.80$</div>\n        <div>• <strong>Hypothesis Tests:</strong> Two-proportion pooled $Z$-test &amp; Permutation $p$</div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"mt-3 p-3 rounded-xl bg-[#f0fdf4] border-2 border-[#15803d] text-xs font-sans text-[#14532d]\">\n    <strong>Core Architectural Insight:</strong> Auditing only Tier 2 creates a false sense of security. An algorithm can appear \"fair\" under a lax threshold $\\tau_1$ but become highly discriminatory if business pressures force management to tighten the cutoff to $\\tau_2$. Comprehensive audits must inspect Tier 1 continuously.\n  </div>\n</div>\n"
        }
      },
      {
        "id": "s3",
        "title": "Kolmogorov-Smirnov Statistic: Maximal Vertical Gap",
        "type": "concept",
        "solo": {
          "speaker": "Dr. Nova",
          "title": "The Two-Sample KS Test Formulation",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "The two-sample Kolmogorov-Smirnov statistic, denoted D sub KS, is the most celebrated non-parametric test for continuous distributional equality. Mathematically, it measures the supreme vertical distance between the empirical cumulative distribution functions of the two demographic cohorts.",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Because D sub KS is strictly non-parametric, it requires zero parametric assumptions about normality or variance homoscedasticity. Furthermore, it is completely invariant under any strictly increasing monotonic re-scaling of the model score. Under the null hypothesis that both groups share an identical score distribution, the scaled test statistic converges asymptotically to the Kolmogorov distribution.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono text-xs font-black text-[#0284c7] uppercase tracking-wider\">Continuous Audit • CDF Vertical Supremum</span>\n    <span class=\"px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#c9f3f4] text-[#0e7490] border border-[#151b20]\">Non-Parametric</span>\n  </div>\n\n  <div class=\"p-4 rounded-xl bg-[#f0f9ff] border-2 border-[#0284c7] mb-3 text-center\">\n    <div class=\"font-mono text-xs font-bold text-[#0369a1] mb-1\">Mathematical Definition of Two-Sample $D_{\\text{KS}}$</div>\n    <div class=\"text-base sm:text-lg font-mono font-black text-[#0c4a6e]\">\n      $$D_{\\text{KS}} = \\sup_{s \\in \\mathbb{R}} |F_0(s) - F_1(s)| \\in [0, 1]$$\n    </div>\n    <div class=\"text-[11px] font-mono text-[#0369a1] mt-1\">\n      where $F_k(s) = \\frac{1}{n_k} \\sum_{i=1}^{n_k} \\mathbf{1}(S_i^{(k)} \\le s)$ is the Empirical Cumulative Distribution Function (ECDF).\n    </div>\n  </div>\n\n  <div class=\"grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs\">\n    <div class=\"p-3 rounded-lg bg-[#ffffff] border border-[#151b20]\">\n      <strong class=\"text-[#0e7490] block mb-1\">1. Scale Invariance</strong>\n      <span class=\"text-[11px] text-[#475569]\">If scores are transformed by any monotonic increasing function $g(s)$, $D_{\\text{KS}}$ remains completely unchanged.</span>\n    </div>\n    <div class=\"p-3 rounded-lg bg-[#ffffff] border border-[#151b20]\">\n      <strong class=\"text-[#0e7490] block mb-1\">2. Asymptotic Null</strong>\n      <span class=\"text-[11px] text-[#475569]\">Under $H_0: F_0 = F_1$:<br>$\\sqrt{\\frac{n_0 n_1}{n_0 + n_1}} D_{\\text{KS}} \\xrightarrow{d} K$ (Kolmogorov Distribution).</span>\n    </div>\n    <div class=\"p-3 rounded-lg bg-[#ffffff] border border-[#151b20]\">\n      <strong class=\"text-[#b91c1c] block mb-1\">3. The Fatal Flaw</strong>\n      <span class=\"text-[11px] text-[#475569]\">Only evaluates the single maximum vertical gap at one point $s^*$. Blind to cumulative mass displacement.</span>\n    </div>\n  </div>\n</div>\n"
        },
        "duo": {
          "speaker": "Dr. Nova & Kaito",
          "title": "The Two-Sample KS Test Formulation",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "The Kolmogorov-Smirnov test is standard in data science libraries like SciPy. You just run ks_2samp and get a p-value! Why shouldn't that be our only continuous fairness test, Dr. Nova?",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Because D sub KS is fundamentally a vertical supremum measure, Kaito. It looks across the entire CDF support and picks the single x-coordinate where the vertical height between the two curves is greatest.",
              "dock": "main"
            },
            {
              "speaker": "Kaito",
              "text": "And that means if the two curves have a wide horizontal separation or long-tail discrepancies that don't produce a tall vertical peak at a single point, D sub KS will dramatically underestimate the real-world disparity!",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Spot on. To capture horizontal displacement and the true physical transport work of shifting distributions, we must turn to optimal transport and the Wasserstein metric.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono text-xs font-black text-[#0284c7] uppercase tracking-wider\">Continuous Audit • CDF Vertical Supremum</span>\n    <span class=\"px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#c9f3f4] text-[#0e7490] border border-[#151b20]\">Non-Parametric</span>\n  </div>\n\n  <div class=\"p-4 rounded-xl bg-[#f0f9ff] border-2 border-[#0284c7] mb-3 text-center\">\n    <div class=\"font-mono text-xs font-bold text-[#0369a1] mb-1\">Mathematical Definition of Two-Sample $D_{\\text{KS}}$</div>\n    <div class=\"text-base sm:text-lg font-mono font-black text-[#0c4a6e]\">\n      $$D_{\\text{KS}} = \\sup_{s \\in \\mathbb{R}} |F_0(s) - F_1(s)| \\in [0, 1]$$\n    </div>\n    <div class=\"text-[11px] font-mono text-[#0369a1] mt-1\">\n      where $F_k(s) = \\frac{1}{n_k} \\sum_{i=1}^{n_k} \\mathbf{1}(S_i^{(k)} \\le s)$ is the Empirical Cumulative Distribution Function (ECDF).\n    </div>\n  </div>\n\n  <div class=\"grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs\">\n    <div class=\"p-3 rounded-lg bg-[#ffffff] border border-[#151b20]\">\n      <strong class=\"text-[#0e7490] block mb-1\">1. Scale Invariance</strong>\n      <span class=\"text-[11px] text-[#475569]\">If scores are transformed by any monotonic increasing function $g(s)$, $D_{\\text{KS}}$ remains completely unchanged.</span>\n    </div>\n    <div class=\"p-3 rounded-lg bg-[#ffffff] border border-[#151b20]\">\n      <strong class=\"text-[#0e7490] block mb-1\">2. Asymptotic Null</strong>\n      <span class=\"text-[11px] text-[#475569]\">Under $H_0: F_0 = F_1$:<br>$\\sqrt{\\frac{n_0 n_1}{n_0 + n_1}} D_{\\text{KS}} \\xrightarrow{d} K$ (Kolmogorov Distribution).</span>\n    </div>\n    <div class=\"p-3 rounded-lg bg-[#ffffff] border border-[#151b20]\">\n      <strong class=\"text-[#b91c1c] block mb-1\">3. The Fatal Flaw</strong>\n      <span class=\"text-[11px] text-[#475569]\">Only evaluates the single maximum vertical gap at one point $s^*$. Blind to cumulative mass displacement.</span>\n    </div>\n  </div>\n</div>\n"
        }
      },
      {
        "id": "s4",
        "title": "Wasserstein-1 Distance & Optimal Transport",
        "type": "concept",
        "solo": {
          "speaker": "Dr. Nova",
          "title": "Kantorovich-Rubinstein Duality in Fairness",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "The 1-Wasserstein metric, commonly known as the Earth Mover's Distance, formalizes distribution divergence through the lens of Monge-Kantorovich optimal transport. Rather than computing a vertical gap at one point, it calculates the minimal total work required to transport probability mass from distribution P zero into distribution P one.",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "In one dimension, optimal transport has an extraordinarily elegant closed form: the Wasserstein-1 distance equals the integrated absolute difference between the two quantile functions, or equivalently, the integrated area between the two cumulative distribution functions. Through Kantorovich-Rubinstein duality, it represents the supreme difference in expectations over all 1-Lipschitz continuous functions.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono text-xs font-black text-[#15803d] uppercase tracking-wider\">Optimal Transport • Earth Mover's Metric</span>\n    <span class=\"px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#e7f4c8] text-[#15803d] border border-[#151b20]\">1-Lipschitz Dual</span>\n  </div>\n\n  <div class=\"p-4 rounded-xl bg-[#f0fdf4] border-2 border-[#15803d] mb-3 text-center\">\n    <div class=\"font-mono text-xs font-bold text-[#166534] mb-1\">1-Dimensional Closed-Form Formulation</div>\n    <div class=\"text-base sm:text-lg font-mono font-black text-[#14532d]\">\n      $$\\mathcal{W}_1(P_0, P_1) = \\int_0^1 |F_0^{-1}(u) - F_1^{-1}(u)| \\, du = \\int_{-\\infty}^{\\infty} |F_0(s) - F_1(s)| \\, ds$$\n    </div>\n    <div class=\"text-[11px] font-mono text-[#166534] mt-1\">\n      Quantifies the physical integral of mass $\\times$ horizontal transport distance across all percentiles $u \\in [0, 1]$.\n    </div>\n  </div>\n\n  <div class=\"grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs\">\n    <div class=\"p-3.5 rounded-xl bg-[#ffffff] border-2 border-[#151b20] shadow-[2px_2px_0px_#151b20]\">\n      <strong class=\"font-mono text-[#15803d] block mb-1.5 font-black\">Kantorovich-Rubinstein Duality</strong>\n      <p class=\"text-[#475569] leading-relaxed text-[11px]\">\n        $$\\mathcal{W}_1(P_0, P_1) = \\sup_{\\|f\\|_L \\le 1} \\left( \\mathbb{E}_{S \\sim P_0}[f(S)] - \\mathbb{E}_{S \\sim P_1}[f(S)] \\right)$$\n        Any downstream decision policy $f(S)$ with sensitivity bounded by 1 cannot produce an expected demographic disparity greater than $\\mathcal{W}_1$.\n      </p>\n    </div>\n\n    <div class=\"p-3.5 rounded-xl bg-[#ffffff] border-2 border-[#151b20] shadow-[2px_2px_0px_#151b20]\">\n      <strong class=\"font-mono text-[#15803d] block mb-1.5 font-black\">Horizontal vs. Vertical Geometry</strong>\n      <p class=\"text-[#475569] leading-relaxed text-[11px]\">\n        While Kolmogorov-Smirnov evaluates vertical height $|F_0 - F_1| \\le 1$, Wasserstein-1 measures horizontal distance in the unit of the score itself (e.g. credit score points or dollar wage values). If Group 1 scores are shifted by $+50$ points, $\\mathcal{W}_1 = 50.0$ exactly!\n      </p>\n    </div>\n  </div>\n</div>\n"
        },
        "duo": {
          "speaker": "Dr. Nova & Kaito",
          "title": "Kantorovich-Rubinstein Duality in Fairness",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "The Earth Mover's Distance makes so much intuitive sense physically! If I have a pile of dirt representing Group 0's score density, how much shovel-work does it take to move it so it exactly matches Group 1's density?",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "That physical intuition translates directly into engineering guarantees. Notice the Kantorovich-Rubinstein duality formula on the slide: it proves that the Wasserstein distance bounds the maximum possible expected disparity for any smooth downstream decision rule.",
              "dock": "main"
            },
            {
              "speaker": "Kaito",
              "text": "And because it integrates horizontally, if the two groups have an average 50-point credit gap, the Wasserstein-1 distance is literally 50 points! Executives and regulators can understand that immediately, whereas a D_KS value of 0.28 is completely abstract.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono text-xs font-black text-[#15803d] uppercase tracking-wider\">Optimal Transport • Earth Mover's Metric</span>\n    <span class=\"px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#e7f4c8] text-[#15803d] border border-[#151b20]\">1-Lipschitz Dual</span>\n  </div>\n\n  <div class=\"p-4 rounded-xl bg-[#f0fdf4] border-2 border-[#15803d] mb-3 text-center\">\n    <div class=\"font-mono text-xs font-bold text-[#166534] mb-1\">1-Dimensional Closed-Form Formulation</div>\n    <div class=\"text-base sm:text-lg font-mono font-black text-[#14532d]\">\n      $$\\mathcal{W}_1(P_0, P_1) = \\int_0^1 |F_0^{-1}(u) - F_1^{-1}(u)| \\, du = \\int_{-\\infty}^{\\infty} |F_0(s) - F_1(s)| \\, ds$$\n    </div>\n    <div class=\"text-[11px] font-mono text-[#166534] mt-1\">\n      Quantifies the physical integral of mass $\\times$ horizontal transport distance across all percentiles $u \\in [0, 1]$.\n    </div>\n  </div>\n\n  <div class=\"grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs\">\n    <div class=\"p-3.5 rounded-xl bg-[#ffffff] border-2 border-[#151b20] shadow-[2px_2px_0px_#151b20]\">\n      <strong class=\"font-mono text-[#15803d] block mb-1.5 font-black\">Kantorovich-Rubinstein Duality</strong>\n      <p class=\"text-[#475569] leading-relaxed text-[11px]\">\n        $$\\mathcal{W}_1(P_0, P_1) = \\sup_{\\|f\\|_L \\le 1} \\left( \\mathbb{E}_{S \\sim P_0}[f(S)] - \\mathbb{E}_{S \\sim P_1}[f(S)] \\right)$$\n        Any downstream decision policy $f(S)$ with sensitivity bounded by 1 cannot produce an expected demographic disparity greater than $\\mathcal{W}_1$.\n      </p>\n    </div>\n\n    <div class=\"p-3.5 rounded-xl bg-[#ffffff] border-2 border-[#151b20] shadow-[2px_2px_0px_#151b20]\">\n      <strong class=\"font-mono text-[#15803d] block mb-1.5 font-black\">Horizontal vs. Vertical Geometry</strong>\n      <p class=\"text-[#475569] leading-relaxed text-[11px]\">\n        While Kolmogorov-Smirnov evaluates vertical height $|F_0 - F_1| \\le 1$, Wasserstein-1 measures horizontal distance in the unit of the score itself (e.g. credit score points or dollar wage values). If Group 1 scores are shifted by $+50$ points, $\\mathcal{W}_1 = 50.0$ exactly!\n      </p>\n    </div>\n  </div>\n</div>\n"
        }
      },
      {
        "id": "s5",
        "title": "Tail Sensitivity & Truncation Blindspots",
        "type": "concept",
        "solo": {
          "speaker": "Dr. Nova",
          "title": "Why D_KS Misses Severe High-Threshold Bias",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Now consider the critical operational scenario: automated hiring for senior engineering roles or prime mortgage underwriting. In these domains, decisions are never made on average applicants. They are restricted exclusively to the extreme upper tail of the distribution, such as the top five percent.",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Suppose both groups share similar score shapes across the bottom ninety percent, but Group zero's scores truncate abruptly at 800 while Group one's scores extend to 950. Because the cumulative mass in the tail is small, the maximum vertical gap D sub KS will be trivial, perhaps 0.08. An auditor relying on KS would declare the system fair. Yet Wasserstein-1 integrates the massive 150-point horizontal gap, immediately flagging total demographic exclusion at the top threshold.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono text-xs font-black text-[#dc2626] uppercase tracking-wider\">High-Stakes Failure Mode • Tail Exclusion</span>\n    <span class=\"px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#fee2e2] text-[#b91c1c] border border-[#151b20]\">Critical Vulnerability</span>\n  </div>\n\n  <div class=\"p-4 rounded-xl bg-[#fff5f5] border-2 border-[#dc2626] mb-3\">\n    <div class=\"font-mono text-xs font-black text-[#991b1b] mb-1\">The Upper-Tail Exclusion Paradox</div>\n    <p class=\"text-xs text-[#7f1d1d] leading-relaxed\">\n      Suppose credit scores range from 300 to 950. Subgroups $A=0$ and $A=1$ match closely across the 300–780 range, but in the elite approval tier ($> 800$), Group 0 completely truncates at 810 while Group 1 reaches 950.\n    </p>\n  </div>\n\n  <div class=\"grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono\">\n    <div class=\"p-3.5 rounded-xl bg-[#ffffff] border-2 border-[#151b20] shadow-[2px_2px_0px_#151b20]\">\n      <div class=\"text-[#dc2626] font-black text-sm mb-1\">❌ Kolmogorov-Smirnov Verdict: $D_{\\text{KS}} = 0.082$</div>\n      <div class=\"text-[11px] text-[#475569] leading-relaxed\">\n        Because only $5\\%$ of total probability mass resides in the upper tail, $|F_0(s) - F_1(s)| \\le 0.082$ everywhere. A naive auditor reports: <em>\"Minimal distributional divergence detected. Model cleared for production.\"</em>\n      </div>\n    </div>\n\n    <div class=\"p-3.5 rounded-xl bg-[#ffffff] border-2 border-[#151b20] shadow-[2px_2px_0px_#151b20]\">\n      <div class=\"text-[#15803d] font-black text-sm mb-1\">✅ Wasserstein-1 Verdict: $\\mathcal{W}_1 = 28.4\\text{ pts}$</div>\n      <div class=\"text-[11px] text-[#475569] leading-relaxed\">\n        $\\mathcal{W}_1$ directly integrates the massive 140-point horizontal gap across elite quantiles ($u \\in [0.95, 1.0]$). It flags that qualified minority candidates are completely locked out of prime loan tiers.\n      </div>\n    </div>\n  </div>\n\n  <div class=\"mt-3 p-3 rounded-lg bg-[#fffaf0] border border-[#151b20] text-xs font-sans text-[#151b20]\">\n    <strong>Cardinal Auditing Rule 1:</strong> When decision cutoffs $\\tau$ are set in the upper or lower tails ($\\tau > \\mu + 1.5\\sigma$ or $\\tau < \\mu - 1.5\\sigma$), $D_{\\text{KS}}$ is statistically unreliable. Optimal transport ($\\mathcal{W}_1$) must be the primary continuous audit criterion.\n  </div>\n</div>\n"
        },
        "duo": {
          "speaker": "Dr. Nova & Kaito",
          "title": "Why D_KS Misses Severe High-Threshold Bias",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "This tail exclusion paradox is chilling, Dr. Nova. In elite hiring or loan approvals, we only hire the top five percent! So if Group zero has zero applicants in that elite tier, but looks similar everywhere else, KS gives it a clean bill of health?!",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Yes, Kaito. Because KS measures vertical height on the cumulative distribution function, and the cumulative probability in the upper five percent is bounded between zero and 0.05, the vertical gap literally cannot exceed 0.05!",
              "dock": "main"
            },
            {
              "speaker": "Kaito",
              "text": "Whereas Wasserstein integrates the actual horizontal point distance, which could be fifty or a hundred points wide. That's why we built Simulator 7.3 Tab A: so learners can manipulate the mean shift and cutoff in real time!",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono text-xs font-black text-[#dc2626] uppercase tracking-wider\">High-Stakes Failure Mode • Tail Exclusion</span>\n    <span class=\"px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#fee2e2] text-[#b91c1c] border border-[#151b20]\">Critical Vulnerability</span>\n  </div>\n\n  <div class=\"p-4 rounded-xl bg-[#fff5f5] border-2 border-[#dc2626] mb-3\">\n    <div class=\"font-mono text-xs font-black text-[#991b1b] mb-1\">The Upper-Tail Exclusion Paradox</div>\n    <p class=\"text-xs text-[#7f1d1d] leading-relaxed\">\n      Suppose credit scores range from 300 to 950. Subgroups $A=0$ and $A=1$ match closely across the 300–780 range, but in the elite approval tier ($> 800$), Group 0 completely truncates at 810 while Group 1 reaches 950.\n    </p>\n  </div>\n\n  <div class=\"grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono\">\n    <div class=\"p-3.5 rounded-xl bg-[#ffffff] border-2 border-[#151b20] shadow-[2px_2px_0px_#151b20]\">\n      <div class=\"text-[#dc2626] font-black text-sm mb-1\">❌ Kolmogorov-Smirnov Verdict: $D_{\\text{KS}} = 0.082$</div>\n      <div class=\"text-[11px] text-[#475569] leading-relaxed\">\n        Because only $5\\%$ of total probability mass resides in the upper tail, $|F_0(s) - F_1(s)| \\le 0.082$ everywhere. A naive auditor reports: <em>\"Minimal distributional divergence detected. Model cleared for production.\"</em>\n      </div>\n    </div>\n\n    <div class=\"p-3.5 rounded-xl bg-[#ffffff] border-2 border-[#151b20] shadow-[2px_2px_0px_#151b20]\">\n      <div class=\"text-[#15803d] font-black text-sm mb-1\">✅ Wasserstein-1 Verdict: $\\mathcal{W}_1 = 28.4\\text{ pts}$</div>\n      <div class=\"text-[11px] text-[#475569] leading-relaxed\">\n        $\\mathcal{W}_1$ directly integrates the massive 140-point horizontal gap across elite quantiles ($u \\in [0.95, 1.0]$). It flags that qualified minority candidates are completely locked out of prime loan tiers.\n      </div>\n    </div>\n  </div>\n\n  <div class=\"mt-3 p-3 rounded-lg bg-[#fffaf0] border border-[#151b20] text-xs font-sans text-[#151b20]\">\n    <strong>Cardinal Auditing Rule 1:</strong> When decision cutoffs $\\tau$ are set in the upper or lower tails ($\\tau > \\mu + 1.5\\sigma$ or $\\tau < \\mu - 1.5\\sigma$), $D_{\\text{KS}}$ is statistically unreliable. Optimal transport ($\\mathcal{W}_1$) must be the primary continuous audit criterion.\n  </div>\n</div>\n"
        }
      },
      {
        "id": "s6",
        "title": "Interactive Lab: Score Divergence & Wasserstein Transport",
        "type": "interactive_lab",
        "solo": {
          "speaker": "Dr. Nova",
          "title": "Simulator 7.3 Tab A: Continuous Divergence Studio",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Welcome to Interactive Lab 1: Score Divergence and Wasserstein Transport Studio. In the interactive dock below, you have live control over the continuous score distributions of Group zero and Group one.",
              "dock": "sim73AStudioWidget"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Notice the default state: Group one has a mean shift of plus 0.18, and the decision cutoff tau is set to 0.60. Look at the divergence dashboard: Wasserstein-1 is 0.180, Kolmogorov-Smirnov is 0.435, and the Disparate Impact Ratio is 0.38, triggering a severe 80 percent rule violation.",
              "dock": "sim73AStudioWidget"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Now, drag the privileged mean shift slider down to 0.00. Watch how the two distributions align, Wasserstein distance collapses to zero, and the Disparate Impact Ratio recovers to parity at 1.00. Experiment with different decision thresholds to see how threshold selection interacts with continuous divergence.",
              "dock": "sim73AStudioWidget"
            }
          ],
          "contentHtml": "\n<div class=\"p-4 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-2 border-b-2 border-[#151b20]/15 flex-wrap gap-2\">\n    <div class=\"flex items-center gap-2 font-mono font-black text-xs md:text-sm text-[#0284c7] uppercase tracking-wide\">\n      <span>🔬</span> Interactive Lab 1: Score Divergence &amp; Optimal Transport Studio\n    </div>\n    <span class=\"px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black bg-[#c9f3f4] text-[#0e7490] border-2 border-[#151b20]\">\n      Simulator 7.3 Tab A\n    </span>\n  </div>\n\n  <p class=\"text-xs text-[#151b20]/80 font-sans mb-3\">\n    Inspect continuous scoring distributions across demographic cohorts. Adjust the mean shift $\\Delta \\mu$, unprivileged spread $\\sigma_0$, and decision cutoff $\\tau$ to observe the maximal Kolmogorov-Smirnov gap $D_{\\text{KS}}$ alongside the integrated Wasserstein-1 transport work $\\mathcal{W}_1$ and the resulting Disparate Impact Ratio.\n  </p>\n\n  <div class=\"p-3 rounded-lg bg-[#f0f9ff] border border-[#0284c7] text-xs font-mono text-[#0369a1] mb-2\">\n    <strong>Lab Objectives:</strong>\n    <ol class=\"list-decimal pl-5 space-y-1 mt-1\">\n      <li>Observe how setting $\\Delta \\mu = +0.18$ drives $\\mathcal{W}_1 = 0.180$ and collapses $\\text{DIR} = 0.38$ (< 0.80 adverse impact).</li>\n      <li>Drag $\\Delta \\mu \\to 0.00$ to achieve complete optimal transport convergence ($\\mathcal{W}_1 = 0.00$) and restore parity ($\\text{DIR} = 1.00$).</li>\n      <li>Shift decision cutoff $\\tau$ from $0.40$ to $0.75$ and observe how threshold selection amplifies adverse impact.</li>\n    </ol>\n  </div>\n</div>\n"
        },
        "duo": {
          "speaker": "Dr. Nova & Kaito",
          "title": "Simulator 7.3 Tab A: Continuous Divergence Studio",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Here we are in Simulator 7.3 Tab A! You can drag the sliders below to adjust the privileged mean shift Delta mu, the group spread sigma zero, and the decision threshold tau.",
              "dock": "sim73AStudioWidget"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Notice how the canvas dynamically renders both the probability densities and the cumulative distribution functions. When Delta mu is set to plus 0.18, the Wasserstein transport work is exactly 0.180, and the Disparate Impact Ratio collapses to 0.38, violating the federal 80 percent rule.",
              "dock": "sim73AStudioWidget"
            },
            {
              "speaker": "Kaito",
              "text": "Try moving the decision threshold tau up to 0.70 while keeping Delta mu at 0.18. Even though the underlying distribution hasn't changed, the Disparate Impact Ratio gets dramatically worse because of the tail exclusion we just discussed!",
              "dock": "sim73AStudioWidget"
            }
          ],
          "contentHtml": "\n<div class=\"p-4 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-2 border-b-2 border-[#151b20]/15 flex-wrap gap-2\">\n    <div class=\"flex items-center gap-2 font-mono font-black text-xs md:text-sm text-[#0284c7] uppercase tracking-wide\">\n      <span>🔬</span> Interactive Lab 1: Score Divergence &amp; Optimal Transport Studio\n    </div>\n    <span class=\"px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black bg-[#c9f3f4] text-[#0e7490] border-2 border-[#151b20]\">\n      Simulator 7.3 Tab A\n    </span>\n  </div>\n\n  <p class=\"text-xs text-[#151b20]/80 font-sans mb-3\">\n    Inspect continuous scoring distributions across demographic cohorts. Adjust the mean shift $\\Delta \\mu$, unprivileged spread $\\sigma_0$, and decision cutoff $\\tau$ to observe the maximal Kolmogorov-Smirnov gap $D_{\\text{KS}}$ alongside the integrated Wasserstein-1 transport work $\\mathcal{W}_1$ and the resulting Disparate Impact Ratio.\n  </p>\n\n  <div class=\"p-3 rounded-lg bg-[#f0f9ff] border border-[#0284c7] text-xs font-mono text-[#0369a1] mb-2\">\n    <strong>Lab Objectives:</strong>\n    <ol class=\"list-decimal pl-5 space-y-1 mt-1\">\n      <li>Observe how setting $\\Delta \\mu = +0.18$ drives $\\mathcal{W}_1 = 0.180$ and collapses $\\text{DIR} = 0.38$ (< 0.80 adverse impact).</li>\n      <li>Drag $\\Delta \\mu \\to 0.00$ to achieve complete optimal transport convergence ($\\mathcal{W}_1 = 0.00$) and restore parity ($\\text{DIR} = 1.00$).</li>\n      <li>Shift decision cutoff $\\tau$ from $0.40$ to $0.75$ and observe how threshold selection amplifies adverse impact.</li>\n    </ol>\n  </div>\n</div>\n"
        }
      },
      {
        "id": "s7",
        "title": "Active Checkpoint 1: Kolmogorov-Smirnov vs. Wasserstein-1",
        "type": "checkpoint",
        "solo": {
          "speaker": "Dr. Nova",
          "title": "Active Checkpoint 1: Distribution Divergence Metrics",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Time for Active Checkpoint 1! Let us test your conceptual command of distribution divergence metrics. Review the question in the interactive dock below and select the correct answer.",
              "dock": "checkpointDock"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-2 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono text-xs font-black text-[#0e7490] uppercase tracking-wider\">Active Checkpoint 7.3.1 • Distribution Divergence Metrics</span>\n    <span class=\"px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black bg-[#c9f3f4] text-[#0e7490] border-2 border-[#151b20]\">Self-Assessment</span>\n  </div>\n  <p class=\"text-xs text-[#151b20] font-sans mb-1\">\n    Verify your conceptual command of Kolmogorov-Smirnov ($D_{\\text{KS}}$) versus Wasserstein-1 ($\\mathcal{W}_1$) geometry in the interactive checkpoint dock below:\n  </p>\n</div>\n"
        },
        "duo": {
          "speaker": "Dr. Nova & Kaito",
          "title": "Active Checkpoint 1: Distribution Divergence Metrics",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Time for our first active recall challenge! Let's see if you can articulate why optimal transport is essential when auditing high-stakes decision boundaries.",
              "dock": "checkpointDock"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Read the question carefully in the dock below. Pay close attention to how vertical CDF height differs from horizontal quantile transport work.",
              "dock": "checkpointDock"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-2 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono text-xs font-black text-[#0e7490] uppercase tracking-wider\">Active Checkpoint 7.3.1 • Distribution Divergence Metrics</span>\n    <span class=\"px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black bg-[#c9f3f4] text-[#0e7490] border-2 border-[#151b20]\">Self-Assessment</span>\n  </div>\n  <p class=\"text-xs text-[#151b20] font-sans mb-1\">\n    Verify your conceptual command of Kolmogorov-Smirnov ($D_{\\text{KS}}$) versus Wasserstein-1 ($\\mathcal{W}_1$) geometry in the interactive checkpoint dock below:\n  </p>\n</div>\n"
        }
      },
      {
        "id": "s8",
        "title": "Theil Index & Additive Inequality Decomposition",
        "type": "concept",
        "solo": {
          "speaker": "Dr. Nova",
          "title": "Separating Between-Group from Within-Group Inequality",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "When auditing the allocation of benefits across a population, such as loan amounts, compute budgets, or medical access, econometricians measure total system inequality. Many teams reach for the Gini coefficient. However, the Gini coefficient suffers from a severe mathematical limitation: when subgroup distributions overlap, its decomposition includes an intractable residual covariance term.",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "In contrast, the Theil Index, derived from Claude Shannon's information entropy, satisfies the axiom of strong additive decomposability. Total inequality T decomposes exactly into the sum of within-group inequality T-within and between-group inequality T-between. This allows auditors to isolate precisely what fraction of system disparity is caused by systemic demographic bias versus legitimate individual performance dispersion.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono text-xs font-black text-[#059669] uppercase tracking-wider\">Entropy-Based Inequality • Information Theory</span>\n    <span class=\"px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#d1fae5] text-[#059669] border border-[#151b20]\">Additive Decomposability</span>\n  </div>\n\n  <div class=\"p-4 rounded-xl bg-[#ecfdf5] border-2 border-[#059669] mb-3 text-center\">\n    <div class=\"font-mono text-xs font-bold text-[#047857] mb-1\">The Theil Index of Inequality $T$ (Generalized Entropy $I(1)$)</div>\n    <div class=\"text-base sm:text-lg font-mono font-black text-[#065f46]\">\n      $$T = \\frac{1}{N} \\sum_{i=1}^N \\frac{y_i}{\\mu} \\ln\\left( \\frac{y_i}{\\mu} \\right) = T_{\\text{within}} + T_{\\text{between}}$$\n    </div>\n    <div class=\"text-[11px] font-mono text-[#047857] mt-1\">\n      where $y_i \\ge 0$ is the resource/benefit allocation, $\\mu = \\frac{1}{N} \\sum y_i$, and $T \\in [0, \\ln(N)]$.\n    </div>\n  </div>\n\n  <div class=\"grid grid-cols-1 md:grid-cols-2 gap-3 text-xs\">\n    <div class=\"p-3.5 rounded-xl bg-[#ffffff] border-2 border-[#151b20] shadow-[2px_2px_0px_#151b20]\">\n      <div class=\"font-mono font-black text-[#059669] text-xs mb-1.5\">1. Within-Group Component ($T_{\\text{within}}$)</div>\n      <div class=\"font-mono text-[11px] bg-[#f8fafc] p-2 rounded border border-[#e2e8f0] mb-2\">\n        $$T_{\\text{within}} = \\sum_{k=1}^K \\left( \\frac{N_k \\mu_k}{N \\mu} \\right) T_k$$\n      </div>\n      <p class=\"text-[#475569] leading-relaxed text-[11px]\">\n        Weighted sum of individual dispersion within each demographic cohort $k$. Reflects permissible meritocratic variance.\n      </p>\n    </div>\n\n    <div class=\"p-3.5 rounded-xl bg-[#ffffff] border-2 border-[#151b20] shadow-[2px_2px_0px_#151b20]\">\n      <div class=\"font-mono font-black text-[#dc2626] text-xs mb-1.5\">2. Between-Group Component ($T_{\\text{between}}$)</div>\n      <div class=\"font-mono text-[11px] bg-[#f8fafc] p-2 rounded border border-[#e2e8f0] mb-2\">\n        $$T_{\\text{between}} = \\sum_{k=1}^K \\left( \\frac{N_k \\mu_k}{N \\mu} \\right) \\ln\\left( \\frac{\\mu_k}{\\mu} \\right)$$\n      </div>\n      <p class=\"text-[#475569] leading-relaxed text-[11px]\">\n        Pure demographic disparity obtained by setting every individual within cohort $k$ to subgroup mean $\\mu_k$. Measures systemic algorithmic bias!\n      </p>\n    </div>\n  </div>\n\n  <div class=\"mt-3 p-2.5 rounded-lg bg-[#fffaf0] border border-[#151b20] text-xs text-[#151b20]\">\n    <strong>Auditing Ratio:</strong> The fraction $\\frac{T_{\\text{between}}}{T} \\in [0, 1]$ directly quantifies what percentage of total system inequality is caused by demographic discrimination. Under true fairness, $T_{\\text{between}} = 0$.\n  </div>\n</div>\n"
        },
        "duo": {
          "speaker": "Dr. Nova & Kaito",
          "title": "Separating Between-Group from Within-Group Inequality",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Most people know the Gini coefficient from economics, Dr. Nova. Why is the Theil Index so much better for algorithmic fairness audits?",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Because the Gini coefficient is not strictly additively decomposable, Kaito. When demographic distributions overlap, Gini contains an intractable cross-term called the transvariation coefficient.",
              "dock": "main"
            },
            {
              "speaker": "Kaito",
              "text": "Whereas the Theil index splits cleanly into T-within and T-between with zero messy residuals! So if an executive asks: 'How much of our loan portfolio inequality is due to demographic disparity versus applicant income variation?', you can give them an exact, uncompromised percentage!",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Precisely. If T-between is non-zero, systemic demographic bias exists. Now that we have mastered continuous divergence and entropy metrics, let us turn to discrete decision audits and the famous EEOC 80 percent rule.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono text-xs font-black text-[#059669] uppercase tracking-wider\">Entropy-Based Inequality • Information Theory</span>\n    <span class=\"px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#d1fae5] text-[#059669] border border-[#151b20]\">Additive Decomposability</span>\n  </div>\n\n  <div class=\"p-4 rounded-xl bg-[#ecfdf5] border-2 border-[#059669] mb-3 text-center\">\n    <div class=\"font-mono text-xs font-bold text-[#047857] mb-1\">The Theil Index of Inequality $T$ (Generalized Entropy $I(1)$)</div>\n    <div class=\"text-base sm:text-lg font-mono font-black text-[#065f46]\">\n      $$T = \\frac{1}{N} \\sum_{i=1}^N \\frac{y_i}{\\mu} \\ln\\left( \\frac{y_i}{\\mu} \\right) = T_{\\text{within}} + T_{\\text{between}}$$\n    </div>\n    <div class=\"text-[11px] font-mono text-[#047857] mt-1\">\n      where $y_i \\ge 0$ is the resource/benefit allocation, $\\mu = \\frac{1}{N} \\sum y_i$, and $T \\in [0, \\ln(N)]$.\n    </div>\n  </div>\n\n  <div class=\"grid grid-cols-1 md:grid-cols-2 gap-3 text-xs\">\n    <div class=\"p-3.5 rounded-xl bg-[#ffffff] border-2 border-[#151b20] shadow-[2px_2px_0px_#151b20]\">\n      <div class=\"font-mono font-black text-[#059669] text-xs mb-1.5\">1. Within-Group Component ($T_{\\text{within}}$)</div>\n      <div class=\"font-mono text-[11px] bg-[#f8fafc] p-2 rounded border border-[#e2e8f0] mb-2\">\n        $$T_{\\text{within}} = \\sum_{k=1}^K \\left( \\frac{N_k \\mu_k}{N \\mu} \\right) T_k$$\n      </div>\n      <p class=\"text-[#475569] leading-relaxed text-[11px]\">\n        Weighted sum of individual dispersion within each demographic cohort $k$. Reflects permissible meritocratic variance.\n      </p>\n    </div>\n\n    <div class=\"p-3.5 rounded-xl bg-[#ffffff] border-2 border-[#151b20] shadow-[2px_2px_0px_#151b20]\">\n      <div class=\"font-mono font-black text-[#dc2626] text-xs mb-1.5\">2. Between-Group Component ($T_{\\text{between}}$)</div>\n      <div class=\"font-mono text-[11px] bg-[#f8fafc] p-2 rounded border border-[#e2e8f0] mb-2\">\n        $$T_{\\text{between}} = \\sum_{k=1}^K \\left( \\frac{N_k \\mu_k}{N \\mu} \\right) \\ln\\left( \\frac{\\mu_k}{\\mu} \\right)$$\n      </div>\n      <p class=\"text-[#475569] leading-relaxed text-[11px]\">\n        Pure demographic disparity obtained by setting every individual within cohort $k$ to subgroup mean $\\mu_k$. Measures systemic algorithmic bias!\n      </p>\n    </div>\n  </div>\n\n  <div class=\"mt-3 p-2.5 rounded-lg bg-[#fffaf0] border border-[#151b20] text-xs text-[#151b20]\">\n    <strong>Auditing Ratio:</strong> The fraction $\\frac{T_{\\text{between}}}{T} \\in [0, 1]$ directly quantifies what percentage of total system inequality is caused by demographic discrimination. Under true fairness, $T_{\\text{between}} = 0$.\n  </div>\n</div>\n"
        }
      },
      {
        "id": "s9",
        "title": "Disparate Impact Ratio & The EEOC 80% Rule",
        "type": "concept",
        "solo": {
          "speaker": "Dr. Nova",
          "title": "Regulatory Thresholds for Binary Selection Outcomes",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Having audited continuous feature distributions, we now move downstream to Tier 2: discrete binary selection decisions such as hiring, bail release, or credit approval. Here, the foundational legal benchmark in United States employment and civil rights compliance is the Disparate Impact Ratio, commonly referred to as the 80 percent or four-fifths rule.",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Codified in the 1978 Uniform Guidelines on Employee Selection Procedures, the Disparate Impact Ratio divides the favorable selection rate of the unprivileged group by that of the highest-selected group. If this ratio drops below 0.80, the model triggers prima facie evidence of unlawful adverse impact, shifting the legal burden onto the deploying organization to prove strict business necessity.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono text-xs font-black text-[#b45309] uppercase tracking-wider\">Regulatory Standard • 29 C.F.R. § 1607.4(D)</span>\n    <span class=\"px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#fff0b9] text-[#b45309] border border-[#151b20]\">EEOC 80% Rule</span>\n  </div>\n\n  <div class=\"p-4 rounded-xl bg-[#fffaf0] border-2 border-[#b45309] mb-3 text-center\">\n    <div class=\"font-mono text-xs font-bold text-[#92400e] mb-1\">Disparate Impact Ratio (Adverse Impact Ratio)</div>\n    <div class=\"text-base sm:text-lg font-mono font-black text-[#78350f]\">\n      $$\\text{DIR} = \\frac{P(\\hat{Y} = 1 \\mid A = 0)}{P(\\hat{Y} = 1 \\mid A = 1)} = \\frac{\\hat{p}_0}{\\hat{p}_1}$$\n    </div>\n    <div class=\"text-[11px] font-mono text-[#92400e] mt-1\">\n      Prima facie evidence of adverse impact triggers whenever $\\text{DIR} < 0.80$ (the four-fifths threshold).\n    </div>\n  </div>\n\n  <div class=\"grid grid-cols-1 md:grid-cols-2 gap-3 text-xs\">\n    <div class=\"p-3.5 rounded-xl bg-[#ffffff] border-2 border-[#151b20] shadow-[2px_2px_0px_#151b20]\">\n      <strong class=\"font-mono text-[#15803d] block mb-1.5 font-black\">✅ Compliant Example</strong>\n      <p class=\"text-[#475569] font-mono text-[11px] leading-relaxed\">\n        • Privileged selection $\\hat{p}_1 = 50.0\\%$<br>\n        • Unprivileged selection $\\hat{p}_0 = 42.5\\%$<br>\n        • $\\text{DIR} = \\frac{0.425}{0.500} = \\mathbf{0.85} \\ge 0.80$<br>\n        Satisfies the administrative safe harbor.\n      </p>\n    </div>\n\n    <div class=\"p-3.5 rounded-xl bg-[#ffffff] border-2 border-[#151b20] shadow-[2px_2px_0px_#151b20]\">\n      <strong class=\"font-mono text-[#dc2626] block mb-1.5 font-black\">🚫 Threshold Sensitivity Vulnerability</strong>\n      <p class=\"text-[#475569] font-mono text-[11px] leading-relaxed\">\n        When selection rates become very low (e.g. $2\\%$ vs $1\\%$), $\\text{DIR} = 0.50$ looks catastrophic despite tiny raw differences ($\\Delta p = 1\\%$). Conversely, when selection rates are $95\\%$ vs $90\\%$, $\\text{DIR} = 0.94$ looks great while rejection ratio is $2\\times$ higher!\n      </p>\n    </div>\n  </div>\n</div>\n"
        },
        "duo": {
          "speaker": "Dr. Nova & Kaito",
          "title": "Regulatory Thresholds for Binary Selection Outcomes",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Every compliance team knows the 80 percent rule, Dr. Nova! You divide the minority hire rate by the majority hire rate, and if it's below 0.80, legal steps in.",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Yes, Kaito. The 80 percent rule is legally critical, yet relying on a simple ratio alone creates dangerous blind spots. Notice what happens when acceptance rates are close to 0% or close to 100%.",
              "dock": "main"
            },
            {
              "speaker": "Kaito",
              "text": "Right! If a tech company hires 90% of Group 1 and 81% of Group 0, DIR is 0.90, so it easily passes the 80% rule. Yet Group 0 is being rejected at 19% versus 10%—almost double the rejection rate! And furthermore, DIR says nothing about statistical significance or sample uncertainty. That's why we pair DIR with formal hypothesis testing.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono text-xs font-black text-[#b45309] uppercase tracking-wider\">Regulatory Standard • 29 C.F.R. § 1607.4(D)</span>\n    <span class=\"px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#fff0b9] text-[#b45309] border border-[#151b20]\">EEOC 80% Rule</span>\n  </div>\n\n  <div class=\"p-4 rounded-xl bg-[#fffaf0] border-2 border-[#b45309] mb-3 text-center\">\n    <div class=\"font-mono text-xs font-bold text-[#92400e] mb-1\">Disparate Impact Ratio (Adverse Impact Ratio)</div>\n    <div class=\"text-base sm:text-lg font-mono font-black text-[#78350f]\">\n      $$\\text{DIR} = \\frac{P(\\hat{Y} = 1 \\mid A = 0)}{P(\\hat{Y} = 1 \\mid A = 1)} = \\frac{\\hat{p}_0}{\\hat{p}_1}$$\n    </div>\n    <div class=\"text-[11px] font-mono text-[#92400e] mt-1\">\n      Prima facie evidence of adverse impact triggers whenever $\\text{DIR} < 0.80$ (the four-fifths threshold).\n    </div>\n  </div>\n\n  <div class=\"grid grid-cols-1 md:grid-cols-2 gap-3 text-xs\">\n    <div class=\"p-3.5 rounded-xl bg-[#ffffff] border-2 border-[#151b20] shadow-[2px_2px_0px_#151b20]\">\n      <strong class=\"font-mono text-[#15803d] block mb-1.5 font-black\">✅ Compliant Example</strong>\n      <p class=\"text-[#475569] font-mono text-[11px] leading-relaxed\">\n        • Privileged selection $\\hat{p}_1 = 50.0\\%$<br>\n        • Unprivileged selection $\\hat{p}_0 = 42.5\\%$<br>\n        • $\\text{DIR} = \\frac{0.425}{0.500} = \\mathbf{0.85} \\ge 0.80$<br>\n        Satisfies the administrative safe harbor.\n      </p>\n    </div>\n\n    <div class=\"p-3.5 rounded-xl bg-[#ffffff] border-2 border-[#151b20] shadow-[2px_2px_0px_#151b20]\">\n      <strong class=\"font-mono text-[#dc2626] block mb-1.5 font-black\">🚫 Threshold Sensitivity Vulnerability</strong>\n      <p class=\"text-[#475569] font-mono text-[11px] leading-relaxed\">\n        When selection rates become very low (e.g. $2\\%$ vs $1\\%$), $\\text{DIR} = 0.50$ looks catastrophic despite tiny raw differences ($\\Delta p = 1\\%$). Conversely, when selection rates are $95\\%$ vs $90\\%$, $\\text{DIR} = 0.94$ looks great while rejection ratio is $2\\times$ higher!\n      </p>\n    </div>\n  </div>\n</div>\n"
        }
      },
      {
        "id": "s10",
        "title": "Two-Proportion Pooled Z-Test & Asymptotic Inference",
        "type": "concept",
        "solo": {
          "speaker": "Dr. Nova",
          "title": "Frequentist Hypothesis Testing for Demographic Parity",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "To determine whether an observed selection disparity is statistically systematic rather than a product of finite-sample variance, civil rights litigation frequently employs the Two-Proportion Pooled Z-test.",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Under the null hypothesis that true population selection rates are identical—p zero equals p one—we estimate the common proportion p-hat by pooling both cohorts together. We then normalize the observed rate difference p-hat zero minus p-hat one by its pooled standard error. In large samples, if the resulting Z-score falls below minus 1.96, we reject the null hypothesis of fairness at the five percent significance level.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono text-xs font-black text-[#0284c7] uppercase tracking-wider\">Parametric Inference • Null Distribution</span>\n    <span class=\"px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#c9f3f4] text-[#0e7490] border border-[#151b20]\">Asymptotic Normal</span>\n  </div>\n\n  <div class=\"p-4 rounded-xl bg-[#f0f9ff] border-2 border-[#0284c7] mb-3 text-center\">\n    <div class=\"font-mono text-xs font-bold text-[#0369a1] mb-1\">Two-Proportion Pooled $Z$-Test Statistic ($H_0: p_0 = p_1$)</div>\n    <div class=\"text-base sm:text-lg font-mono font-black text-[#0c4a6e]\">\n      $$Z = \\frac{\\hat{p}_0 - \\hat{p}_1}{\\sqrt{\\hat{p}(1 - \\hat{p})\\left(\\frac{1}{n_0} + \\frac{1}{n_1}\\right)}} \\xrightarrow{d} \\mathcal{N}(0, 1)$$\n    </div>\n    <div class=\"text-[11px] font-mono text-[#0369a1] mt-1\">\n      Pooled proportion estimate: $\\hat{p} = \\frac{n_0 \\hat{p}_0 + n_1 \\hat{p}_1}{n_0 + n_1} = \\frac{k_0 + k_1}{n_0 + n_1}$\n    </div>\n  </div>\n\n  <div class=\"grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono\">\n    <div class=\"p-3 rounded-xl bg-[#ffffff] border border-[#151b20]\">\n      <strong class=\"text-[#0e7490] block mb-1\">Rejection Threshold ($\\alpha = 0.05$)</strong>\n      <p class=\"text-[11px] text-[#475569] leading-relaxed\">\n        If $|Z| > 1.96$ (corresponding to $p\\text{-value} < 0.05$), the court rejects random chance and certifies statistically significant disparity (known in US jurisprudence as the \"2 to 3 standard deviation rule\" from <em>Castaneda v. Partida</em>).\n      </p>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#ffffff] border border-[#151b20]\">\n      <strong class=\"text-[#b91c1c] block mb-1\">Asymptotic Validity Conditions</strong>\n      <p class=\"text-[11px] text-[#475569] leading-relaxed\">\n        Standard normal approximation requires $n_0 \\hat{p} \\ge 5$, $n_0(1-\\hat{p}) \\ge 5$, $n_1 \\hat{p} \\ge 5$, and $n_1(1-\\hat{p}) \\ge 5$. Violation breaks the Gaussian approximation!\n      </p>\n    </div>\n  </div>\n</div>\n"
        },
        "duo": {
          "speaker": "Dr. Nova & Kaito",
          "title": "Frequentist Hypothesis Testing for Demographic Parity",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "The two-proportion Z-test is actually famous in legal history too, isn't it, Dr. Nova? In Castaneda versus Partida, the Supreme Court established the 'two or three standard deviations' rule!",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Correct, Kaito! Under the pooled Z-test, a Z-score exceeding two standard deviations roughly corresponds to a p-value below 0.05. Notice how the formula uses the pooled proportion p-hat because under the null hypothesis, both groups share the exact same underlying probability.",
              "dock": "main"
            },
            {
              "speaker": "Kaito",
              "text": "Wait—look carefully at that denominator: 1 over n0 plus 1 over n1. What happens when a small startup audits a minority group where n0 is tiny, say only sixteen people?!",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "That question uncovers one of the most dangerous traps in statistical fairness auditing: the small-sample Type II error. Let us derive that vulnerability next.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono text-xs font-black text-[#0284c7] uppercase tracking-wider\">Parametric Inference • Null Distribution</span>\n    <span class=\"px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#c9f3f4] text-[#0e7490] border border-[#151b20]\">Asymptotic Normal</span>\n  </div>\n\n  <div class=\"p-4 rounded-xl bg-[#f0f9ff] border-2 border-[#0284c7] mb-3 text-center\">\n    <div class=\"font-mono text-xs font-bold text-[#0369a1] mb-1\">Two-Proportion Pooled $Z$-Test Statistic ($H_0: p_0 = p_1$)</div>\n    <div class=\"text-base sm:text-lg font-mono font-black text-[#0c4a6e]\">\n      $$Z = \\frac{\\hat{p}_0 - \\hat{p}_1}{\\sqrt{\\hat{p}(1 - \\hat{p})\\left(\\frac{1}{n_0} + \\frac{1}{n_1}\\right)}} \\xrightarrow{d} \\mathcal{N}(0, 1)$$\n    </div>\n    <div class=\"text-[11px] font-mono text-[#0369a1] mt-1\">\n      Pooled proportion estimate: $\\hat{p} = \\frac{n_0 \\hat{p}_0 + n_1 \\hat{p}_1}{n_0 + n_1} = \\frac{k_0 + k_1}{n_0 + n_1}$\n    </div>\n  </div>\n\n  <div class=\"grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono\">\n    <div class=\"p-3 rounded-xl bg-[#ffffff] border border-[#151b20]\">\n      <strong class=\"text-[#0e7490] block mb-1\">Rejection Threshold ($\\alpha = 0.05$)</strong>\n      <p class=\"text-[11px] text-[#475569] leading-relaxed\">\n        If $|Z| > 1.96$ (corresponding to $p\\text{-value} < 0.05$), the court rejects random chance and certifies statistically significant disparity (known in US jurisprudence as the \"2 to 3 standard deviation rule\" from <em>Castaneda v. Partida</em>).\n      </p>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#ffffff] border border-[#151b20]\">\n      <strong class=\"text-[#b91c1c] block mb-1\">Asymptotic Validity Conditions</strong>\n      <p class=\"text-[11px] text-[#475569] leading-relaxed\">\n        Standard normal approximation requires $n_0 \\hat{p} \\ge 5$, $n_0(1-\\hat{p}) \\ge 5$, $n_1 \\hat{p} \\ge 5$, and $n_1(1-\\hat{p}) \\ge 5$. Violation breaks the Gaussian approximation!\n      </p>\n    </div>\n  </div>\n</div>\n"
        }
      },
      {
        "id": "s11",
        "title": "The Small Sample Trap: Type II Errors & Katz Log CI",
        "type": "concept",
        "solo": {
          "speaker": "Dr. Nova",
          "title": "Power Failures and Asymmetric Ratio Variance",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Suppose an organization evaluates an intersectional subgroup with just n zero equals 16 applicants against a majority group of n one equals 200. Suppose the hiring rates are 25 percent versus 45 percent. That yields a Disparate Impact Ratio of 0.55—a catastrophic adverse impact violation!",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Yet because n zero is only 16, the standard error swells to 0.128, dragging the Z-score down to minus 1.56 and giving a p-value of 0.118. Concluding the model is fair because p exceeds 0.05 commits a disastrous Type II error. Furthermore, when reporting confidence intervals for ratios like DIR, we must apply the Katz logarithmic transformation to obtain bounded, statistically accurate interval widths.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono text-xs font-black text-[#dc2626] uppercase tracking-wider\">Power Failure • False Fairness Certification</span>\n    <span class=\"px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#fee2e2] text-[#b91c1c] border border-[#151b20]\">Type II Error Trap</span>\n  </div>\n\n  <div class=\"p-3.5 rounded-xl bg-[#fff5f5] border-2 border-[#dc2626] mb-3 font-mono text-xs\">\n    <strong class=\"text-[#991b1b] block mb-1\">Worked Audit Calculation ($n_0 = 16, n_1 = 200$):</strong>\n    <div class=\"text-[#7f1d1d] leading-relaxed\">\n      • Observed Rates: $\\hat{p}_0 = 0.25$ ($4/16$), $\\hat{p}_1 = 0.45$ ($90/200$) $\\implies \\mathbf{\\text{DIR} = 0.55}$ (Severe Violation)<br>\n      • Pooled Standard Error: $\\text{SE} \\approx \\sqrt{0.43 \\times 0.57 \\left(\\frac{1}{16} + \\frac{1}{200}\\right)} \\approx \\mathbf{0.128}$<br>\n      • Test Statistic: $Z = \\frac{0.25 - 0.45}{0.128} = -1.56 \\implies \\mathbf{p = 0.118 > 0.05}$ (Fails to reject $H_0$!)\n    </div>\n  </div>\n\n  <div class=\"p-3.5 rounded-xl bg-[#fffaf0] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20]\">\n    <div class=\"font-mono text-xs font-black text-[#b45309] mb-1\">Katz Logarithmic Confidence Interval for $\\ln(\\text{DIR})$</div>\n    <p class=\"text-[11px] text-[#475569] mb-2\">\n      Ratio $\\hat{p}_0/\\hat{p}_1$ is strictly non-negative and heavily right-skewed. Applying the Delta Method to $\\ln(\\text{DIR}) = \\ln(\\hat{p}_0) - \\ln(\\hat{p}_1)$ yields rapid asymptotic normality:\n    </p>\n    <div class=\"text-center font-mono font-black text-xs text-[#151b20] bg-[#ffffff] p-2 rounded border border-[#151b20]\">\n      $$\\text{CI}_{95\\%}(\\text{DIR}) = \\exp\\left( \\ln(\\widehat{\\text{DIR}}) \\pm 1.96 \\sqrt{\\frac{1 - \\hat{p}_0}{n_0 \\hat{p}_0} + \\frac{1 - \\hat{p}_1}{n_1 \\hat{p}_1}} \\right)$$\n    </div>\n  </div>\n</div>\n"
        },
        "duo": {
          "speaker": "Dr. Nova & Kaito",
          "title": "Power Failures and Asymmetric Ratio Variance",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Hold on! Look at those numbers: 25 percent versus 45 percent acceptance is a DIR of 0.55—massive discrimination! Yet because there are only 16 applicants in the minority group, p is 0.118! If an auditor mechanically checks 'is p < 0.05?', they wrongly certify the model as compliant!",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "That is a catastrophic Type II error—failing to reject a false null hypothesis solely due to insufficient statistical power. Absence of statistical significance is never proof of fairness.",
              "dock": "main"
            },
            {
              "speaker": "Kaito",
              "text": "And look at the Katz logarithmic confidence interval! With only 16 applicants, that confidence interval for DIR probably stretches from 0.23 all the way up to 1.30—telling the regulator immediately that our sample is far too small to prove safety!",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono text-xs font-black text-[#dc2626] uppercase tracking-wider\">Power Failure • False Fairness Certification</span>\n    <span class=\"px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#fee2e2] text-[#b91c1c] border border-[#151b20]\">Type II Error Trap</span>\n  </div>\n\n  <div class=\"p-3.5 rounded-xl bg-[#fff5f5] border-2 border-[#dc2626] mb-3 font-mono text-xs\">\n    <strong class=\"text-[#991b1b] block mb-1\">Worked Audit Calculation ($n_0 = 16, n_1 = 200$):</strong>\n    <div class=\"text-[#7f1d1d] leading-relaxed\">\n      • Observed Rates: $\\hat{p}_0 = 0.25$ ($4/16$), $\\hat{p}_1 = 0.45$ ($90/200$) $\\implies \\mathbf{\\text{DIR} = 0.55}$ (Severe Violation)<br>\n      • Pooled Standard Error: $\\text{SE} \\approx \\sqrt{0.43 \\times 0.57 \\left(\\frac{1}{16} + \\frac{1}{200}\\right)} \\approx \\mathbf{0.128}$<br>\n      • Test Statistic: $Z = \\frac{0.25 - 0.45}{0.128} = -1.56 \\implies \\mathbf{p = 0.118 > 0.05}$ (Fails to reject $H_0$!)\n    </div>\n  </div>\n\n  <div class=\"p-3.5 rounded-xl bg-[#fffaf0] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20]\">\n    <div class=\"font-mono text-xs font-black text-[#b45309] mb-1\">Katz Logarithmic Confidence Interval for $\\ln(\\text{DIR})$</div>\n    <p class=\"text-[11px] text-[#475569] mb-2\">\n      Ratio $\\hat{p}_0/\\hat{p}_1$ is strictly non-negative and heavily right-skewed. Applying the Delta Method to $\\ln(\\text{DIR}) = \\ln(\\hat{p}_0) - \\ln(\\hat{p}_1)$ yields rapid asymptotic normality:\n    </p>\n    <div class=\"text-center font-mono font-black text-xs text-[#151b20] bg-[#ffffff] p-2 rounded border border-[#151b20]\">\n      $$\\text{CI}_{95\\%}(\\text{DIR}) = \\exp\\left( \\ln(\\widehat{\\text{DIR}}) \\pm 1.96 \\sqrt{\\frac{1 - \\hat{p}_0}{n_0 \\hat{p}_0} + \\frac{1 - \\hat{p}_1}{n_1 \\hat{p}_1}} \\right)$$\n    </div>\n  </div>\n</div>\n"
        }
      },
      {
        "id": "s12",
        "title": "Interactive Lab: Permutation Resampling & Significance",
        "type": "interactive_lab",
        "solo": {
          "speaker": "Dr. Nova",
          "title": "Simulator 7.3 Tab B: Monte Carlo Permutation Auditor",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Welcome to Interactive Lab 2: Non-Parametric Permutation Resampling and Statistical Significance. Below in the interactive dock is Simulator 7.3 Tab B, which runs one thousand exact Monte Carlo permutations in your browser.",
              "dock": "sim73BStudioWidget"
            },
            {
              "speaker": "Dr. Nova",
              "text": "At default settings—n zero equals 50, n one equals 150, and a true mean shift Delta of 0.08—look at the null permutation distribution. The observed difference T-obs of 0.081 sits in the extreme tail, yielding an exact permutation p-value around 0.004 and a verdict of Disparity Proven.",
              "dock": "sim73BStudioWidget"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Now, shrink the unprivileged sample size slider n zero down to 15 while keeping the true bias gap unchanged at 0.08. Watch how the null distribution widens dramatically! The exact same underlying unfairness suddenly becomes statistically non-significant with p exceeding 0.05—demonstrating the small-sample Type II error live!",
              "dock": "sim73BStudioWidget"
            }
          ],
          "contentHtml": "\n<div class=\"p-4 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-2 border-b-2 border-[#151b20]/15 flex-wrap gap-2\">\n    <div class=\"flex items-center gap-2 font-mono font-black text-xs md:text-sm text-[#15803d] uppercase tracking-wide\">\n      <span>🔬</span> Interactive Lab 2: Permutation Resampling &amp; Power Studio\n    </div>\n    <span class=\"px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black bg-[#e7f4c8] text-[#15803d] border-2 border-[#151b20]\">\n      Simulator 7.3 Tab B\n    </span>\n  </div>\n\n  <p class=\"text-xs text-[#151b20]/80 font-sans mb-3\">\n    Execute a live non-parametric permutation resampling audit ($B = 1,000$ permutations). Inspect how minority subgroup sample size $n_0$ alters statistical power and demonstrates the danger of confusing small-sample non-significance with true algorithmic parity.\n  </p>\n\n  <div class=\"p-3 rounded-lg bg-[#f0fdf4] border border-[#15803d] text-xs font-mono text-[#166534] mb-2\">\n    <strong>Lab Objectives:</strong>\n    <ol class=\"list-decimal pl-5 space-y-1 mt-1\">\n      <li>Observe default state ($n_0 = 50, n_1 = 150, \\Delta = 0.08$): $T_{\\text{obs}} = 0.081$, $p \\approx 0.004 \\implies$ <strong>DISPARITY PROVEN</strong>.</li>\n      <li>Drag $n_0$ down to $15$ while keeping true gap $\\Delta = 0.08$: observe the null histogram broaden and $p$-value jump above $0.05$ (Type II error!).</li>\n      <li>Set True Group Gap $\\Delta = 0.00$ to inspect a clean null outcome under genuine algorithmic parity.</li>\n    </ol>\n  </div>\n</div>\n"
        },
        "duo": {
          "speaker": "Dr. Nova & Kaito",
          "title": "Simulator 7.3 Tab B: Monte Carlo Permutation Auditor",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Let's dive into Simulator 7.3 Tab B! This runs one thousand Monte Carlo permutations in real time, plotting the exact empirical null histogram against our observed difference T-obs.",
              "dock": "sim73BStudioWidget"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Notice how cleanly it demonstrates statistical power. At n zero equal to 50 and a true bias gap of 0.08, the observed marker sits far outside the grey null distribution, easily proving disparity.",
              "dock": "sim73BStudioWidget"
            },
            {
              "speaker": "Kaito",
              "text": "Now watch what happens when you drag unprivileged sample size n0 down to 15! The null histogram flattens and stretches outward—swallowing up our biased difference so that it falsely passes the audit! Don't ever let an underpowered p-value fool you into shipping biased code.",
              "dock": "sim73BStudioWidget"
            }
          ],
          "contentHtml": "\n<div class=\"p-4 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-2 border-b-2 border-[#151b20]/15 flex-wrap gap-2\">\n    <div class=\"flex items-center gap-2 font-mono font-black text-xs md:text-sm text-[#15803d] uppercase tracking-wide\">\n      <span>🔬</span> Interactive Lab 2: Permutation Resampling &amp; Power Studio\n    </div>\n    <span class=\"px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black bg-[#e7f4c8] text-[#15803d] border-2 border-[#151b20]\">\n      Simulator 7.3 Tab B\n    </span>\n  </div>\n\n  <p class=\"text-xs text-[#151b20]/80 font-sans mb-3\">\n    Execute a live non-parametric permutation resampling audit ($B = 1,000$ permutations). Inspect how minority subgroup sample size $n_0$ alters statistical power and demonstrates the danger of confusing small-sample non-significance with true algorithmic parity.\n  </p>\n\n  <div class=\"p-3 rounded-lg bg-[#f0fdf4] border border-[#15803d] text-xs font-mono text-[#166534] mb-2\">\n    <strong>Lab Objectives:</strong>\n    <ol class=\"list-decimal pl-5 space-y-1 mt-1\">\n      <li>Observe default state ($n_0 = 50, n_1 = 150, \\Delta = 0.08$): $T_{\\text{obs}} = 0.081$, $p \\approx 0.004 \\implies$ <strong>DISPARITY PROVEN</strong>.</li>\n      <li>Drag $n_0$ down to $15$ while keeping true gap $\\Delta = 0.08$: observe the null histogram broaden and $p$-value jump above $0.05$ (Type II error!).</li>\n      <li>Set True Group Gap $\\Delta = 0.00$ to inspect a clean null outcome under genuine algorithmic parity.</li>\n    </ol>\n  </div>\n</div>\n"
        }
      },
      {
        "id": "s13",
        "title": "Active Checkpoint 2: Sample Size & Type II Error Audit",
        "type": "checkpoint",
        "solo": {
          "speaker": "Dr. Nova",
          "title": "Active Checkpoint 2: Hypothesis Power & Adverse Impact",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Let us consolidate your statistical intuition in Active Checkpoint 2. Analyze the hiring audit scenario involving a small unprivileged cohort and select the correct regulatory conclusion in the dock below.",
              "dock": "checkpointDock"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-2 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono text-xs font-black text-[#0e7490] uppercase tracking-wider\">Active Checkpoint 7.3.2 • Small-Sample Power &amp; Type II Error</span>\n    <span class=\"px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black bg-[#c9f3f4] text-[#0e7490] border-2 border-[#151b20]\">Self-Assessment</span>\n  </div>\n  <p class=\"text-xs text-[#151b20] font-sans mb-1\">\n    Evaluate the statistical power trap when auditing small intersectional cohorts ($n_0 = 16$) in the interactive checkpoint dock below:\n  </p>\n</div>\n"
        },
        "duo": {
          "speaker": "Dr. Nova & Kaito",
          "title": "Active Checkpoint 2: Hypothesis Power & Adverse Impact",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Alright, checkpoint number two! You just saw in Simulator 7.3 how shrinking n zero swallows up massive disparities inside the null histogram.",
              "dock": "checkpointDock"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Apply that exact reasoning to the audit scenario in the dock below. Why is a p-value of 0.118 coupled with a DIR of 0.55 a regulatory red flag rather than a green light?",
              "dock": "checkpointDock"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-2 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono text-xs font-black text-[#0e7490] uppercase tracking-wider\">Active Checkpoint 7.3.2 • Small-Sample Power &amp; Type II Error</span>\n    <span class=\"px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black bg-[#c9f3f4] text-[#0e7490] border-2 border-[#151b20]\">Self-Assessment</span>\n  </div>\n  <p class=\"text-xs text-[#151b20] font-sans mb-1\">\n    Evaluate the statistical power trap when auditing small intersectional cohorts ($n_0 = 16$) in the interactive checkpoint dock below:\n  </p>\n</div>\n"
        }
      },
      {
        "id": "s14",
        "title": "Exact Fisher-Pitman Permutation Resampling",
        "type": "concept",
        "solo": {
          "speaker": "Dr. Nova",
          "title": "Distribution-Free Exact Inference Algorithm",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "When auditing heavy-tailed continuous distributions or highly imbalanced binary outcomes where normal Z approximations collapse, the gold standard in statistical rigor is exact Fisher-Pitman permutation resampling.",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Under the null hypothesis that demographic attribute A has zero causal or correlational relationship with the model decision Y-hat, the group labels are completely exchangeable. By pooling all N samples together and randomly permuting the group assignments B times—typically ten thousand iterations—we construct an exact, distribution-free empirical reference distribution for our test statistic.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono text-xs font-black text-[#15803d] uppercase tracking-wider\">Exact Non-Parametric • Exchangeability</span>\n    <span class=\"px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#e7f4c8] text-[#15803d] border border-[#151b20]\">Zero Assumptions</span>\n  </div>\n\n  <div class=\"p-3.5 rounded-xl bg-[#f0fdf4] border-2 border-[#15803d] mb-3 font-mono text-xs\">\n    <strong class=\"text-[#166534] block mb-1.5\">Monte Carlo Permutation Resampling Protocol ($B \\ge 10,000$):</strong>\n    <ol class=\"list-decimal pl-5 space-y-1 text-[#14532d]\">\n      <li>Compute observed demographic disparity statistic: $T_{\\text{obs}} = |\\bar{S}_1 - \\bar{S}_0|$ or $|\\hat{p}_1 - \\hat{p}_0|$.</li>\n      <li>Pool all $N = n_0 + n_1$ continuous scores or decisions into a single invariant array $\\mathbf{S}_{\\text{pool}}$.</li>\n      <li>For $b = 1, \\dots, B$: shuffle demographic assignment labels $\\pi^{(b)}(\\mathbf{A})$, partition into sizes $(n_0, n_1)$, and evaluate $T^{(b)} = |\\bar{S}_1^{(b)} - \\bar{S}_0^{(b)}|$.</li>\n      <li>Compute exact conservative empirical $p$-value (adding $+1$ Laplace smoothing avoids $p = 0$):\n        $$p_{\\text{perm}} = \\frac{1 + \\sum_{b=1}^B \\mathbf{1}\\left(T^{(b)} \\ge T_{\\text{obs}}\\right)}{B + 1}$$\n      </li>\n    </ol>\n  </div>\n\n  <div class=\"grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono\">\n    <div class=\"p-3 rounded-xl bg-[#ffffff] border border-[#151b20]\">\n      <strong class=\"text-[#15803d] block mb-1\">Why Permutations Beat Asymptotics</strong>\n      <span class=\"text-[11px] text-[#475569]\">Completely immune to skew, kurtosis, bimodal mixtures, or small expected counts ($n_0 p_0 < 5$). Exact finite-sample Type I error guarantee!</span>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#ffffff] border border-[#151b20]\">\n      <strong class=\"text-[#0284c7] block mb-1\">Phipson &amp; Smyth (2010) Correction</strong>\n      <span class=\"text-[11px] text-[#475569]\">Including the observed permutation as $+1$ in both numerator and denominator guarantees validity under exact hypothesis testing theory.</span>\n    </div>\n  </div>\n</div>\n"
        },
        "duo": {
          "speaker": "Dr. Nova & Kaito",
          "title": "Distribution-Free Exact Inference Algorithm",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "What I love about permutation resampling is how intuitive it is to explain to non-technical stakeholders! You take the dataset, hide which candidate belonged to which demographic group, shuffle the labels randomly ten thousand times, and count how often random shuffling accidentally creates a disparity as extreme as the real model.",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "And mathematically, it relies on a single minimal assumption: exchangeability under the null hypothesis. No Gaussian bell-curve requirements, no variance homogeneity assumptions.",
              "dock": "main"
            },
            {
              "speaker": "Kaito",
              "text": "Plus, adding the plus-one Phipson-Smyth correction prevents you from ever dividing to zero and claiming p equals 0.0000!",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono text-xs font-black text-[#15803d] uppercase tracking-wider\">Exact Non-Parametric • Exchangeability</span>\n    <span class=\"px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#e7f4c8] text-[#15803d] border border-[#151b20]\">Zero Assumptions</span>\n  </div>\n\n  <div class=\"p-3.5 rounded-xl bg-[#f0fdf4] border-2 border-[#15803d] mb-3 font-mono text-xs\">\n    <strong class=\"text-[#166534] block mb-1.5\">Monte Carlo Permutation Resampling Protocol ($B \\ge 10,000$):</strong>\n    <ol class=\"list-decimal pl-5 space-y-1 text-[#14532d]\">\n      <li>Compute observed demographic disparity statistic: $T_{\\text{obs}} = |\\bar{S}_1 - \\bar{S}_0|$ or $|\\hat{p}_1 - \\hat{p}_0|$.</li>\n      <li>Pool all $N = n_0 + n_1$ continuous scores or decisions into a single invariant array $\\mathbf{S}_{\\text{pool}}$.</li>\n      <li>For $b = 1, \\dots, B$: shuffle demographic assignment labels $\\pi^{(b)}(\\mathbf{A})$, partition into sizes $(n_0, n_1)$, and evaluate $T^{(b)} = |\\bar{S}_1^{(b)} - \\bar{S}_0^{(b)}|$.</li>\n      <li>Compute exact conservative empirical $p$-value (adding $+1$ Laplace smoothing avoids $p = 0$):\n        $$p_{\\text{perm}} = \\frac{1 + \\sum_{b=1}^B \\mathbf{1}\\left(T^{(b)} \\ge T_{\\text{obs}}\\right)}{B + 1}$$\n      </li>\n    </ol>\n  </div>\n\n  <div class=\"grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono\">\n    <div class=\"p-3 rounded-xl bg-[#ffffff] border border-[#151b20]\">\n      <strong class=\"text-[#15803d] block mb-1\">Why Permutations Beat Asymptotics</strong>\n      <span class=\"text-[11px] text-[#475569]\">Completely immune to skew, kurtosis, bimodal mixtures, or small expected counts ($n_0 p_0 < 5$). Exact finite-sample Type I error guarantee!</span>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#ffffff] border border-[#151b20]\">\n      <strong class=\"text-[#0284c7] block mb-1\">Phipson &amp; Smyth (2010) Correction</strong>\n      <span class=\"text-[11px] text-[#475569]\">Including the observed permutation as $+1$ in both numerator and denominator guarantees validity under exact hypothesis testing theory.</span>\n    </div>\n  </div>\n</div>\n"
        }
      },
      {
        "id": "s15",
        "title": "Case Studies: Automated Hiring & Mortgage Lending",
        "type": "case_study",
        "solo": {
          "speaker": "Dr. Nova",
          "title": "Real-World Statistical Bias Audits in Industry",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Let us anchor our mathematical tools in two landmark empirical audits: automated technical recruiting and algorithmic mortgage underwriting.",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "In 2018, an automated resume screening engine trained on ten years of predominantly male software engineering applications began systematically penalizing terms such as 'women's chess club captain' and graduates of all-women's colleges. Applying the Disparate Impact Ratio revealed a DIR below 0.60—an immediate EEOC 80 percent violation forcing shutdown. Similarly, in HMDA mortgage lending audits, risk scoring models maintained high calibration accuracy yet exhibited Wasserstein-1 gaps exceeding 65 points across racial cohorts, denying loans to otherwise creditworthy borrowers.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono text-xs font-black text-[#0e7490] uppercase tracking-wider\">Empirical Post-Mortems • Industrial Audits</span>\n    <span class=\"px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#c9f3f4] text-[#0e7490] border border-[#151b20]\">Real-World Precedents</span>\n  </div>\n\n  <div class=\"grid grid-cols-1 md:grid-cols-2 gap-4\">\n    <div class=\"p-4 rounded-xl bg-[#fff5f5] border-2 border-[#dc2626] shadow-[3px_3px_0px_#151b20]\">\n      <div class=\"font-mono font-black text-xs text-[#b91c1c] uppercase mb-1\">1. Automated Resume Screening (2018)</div>\n      <p class=\"text-xs text-[#7f1d1d] leading-relaxed mb-2\">\n        An NLP recruiting model trained on 10 years of historical hiring data learned to assign negative weights to keywords like <em>\"women's chess club\"</em> and graduates of women's colleges.\n      </p>\n      <div class=\"p-2 rounded bg-[#ffffff] border border-[#dc2626] font-mono text-[11px] text-[#991b1b]\">\n        • <strong>Audit Failure:</strong> Technical screening $\\text{DIR} < 0.60$.<br>\n        • <strong>Metric Used:</strong> Discrete 80% rule &amp; two-proportion $Z$-test ($p < 10^{-6}$).<br>\n        • <strong>Outcome:</strong> Model decommissioned before global deployment.\n      </div>\n    </div>\n\n    <div class=\"p-4 rounded-xl bg-[#fffaf0] border-2 border-[#d97706] shadow-[3px_3px_0px_#151b20]\">\n      <div class=\"font-mono font-black text-xs text-[#b45309] uppercase mb-1\">2. HMDA Mortgage Underwriting Audits</div>\n      <p class=\"text-xs text-[#78350f] leading-relaxed mb-2\">\n        Credit underwriting algorithms passed predictive calibration tests across racial cohorts, yet continuous creditworthiness scores displayed massive horizontal shifts.\n      </p>\n      <div class=\"p-2 rounded bg-[#ffffff] border border-[#d97706] font-mono text-[11px] text-[#92400e]\">\n        • <strong>Audit Failure:</strong> $\\mathcal{W}_1 > 65$ FICO points; high $T_{\\text{between}}$.<br>\n        • <strong>Metric Used:</strong> Optimal transport $\\mathcal{W}_1$ &amp; Katz log CI.<br>\n        • <strong>Outcome:</strong> Forced underwriting threshold recalibration &amp; fair lending remediation.\n      </div>\n    </div>\n  </div>\n</div>\n"
        },
        "duo": {
          "speaker": "Dr. Nova & Kaito",
          "title": "Real-World Statistical Bias Audits in Industry",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "The automated resume screener case is so instructive! Even after engineers deleted the explicit gender column from the training data, the model recovered gender through proxy NLP tokens like 'women's chess club' and still violated the 80% rule!",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "And compare that with the HMDA mortgage underwriting studies, Kaito. Even when calibration matches, a large continuous Wasserstein-1 distance means systemic credit wealth gaps propagate directly into higher loan denial rates or exorbitant interest rate tiers.",
              "dock": "main"
            },
            {
              "speaker": "Kaito",
              "text": "Every ML engineer needs both Tier 1 continuous optimal transport audits and Tier 2 discrete regulatory tests automated right inside their CI/CD evaluation suite!",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono text-xs font-black text-[#0e7490] uppercase tracking-wider\">Empirical Post-Mortems • Industrial Audits</span>\n    <span class=\"px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#c9f3f4] text-[#0e7490] border border-[#151b20]\">Real-World Precedents</span>\n  </div>\n\n  <div class=\"grid grid-cols-1 md:grid-cols-2 gap-4\">\n    <div class=\"p-4 rounded-xl bg-[#fff5f5] border-2 border-[#dc2626] shadow-[3px_3px_0px_#151b20]\">\n      <div class=\"font-mono font-black text-xs text-[#b91c1c] uppercase mb-1\">1. Automated Resume Screening (2018)</div>\n      <p class=\"text-xs text-[#7f1d1d] leading-relaxed mb-2\">\n        An NLP recruiting model trained on 10 years of historical hiring data learned to assign negative weights to keywords like <em>\"women's chess club\"</em> and graduates of women's colleges.\n      </p>\n      <div class=\"p-2 rounded bg-[#ffffff] border border-[#dc2626] font-mono text-[11px] text-[#991b1b]\">\n        • <strong>Audit Failure:</strong> Technical screening $\\text{DIR} < 0.60$.<br>\n        • <strong>Metric Used:</strong> Discrete 80% rule &amp; two-proportion $Z$-test ($p < 10^{-6}$).<br>\n        • <strong>Outcome:</strong> Model decommissioned before global deployment.\n      </div>\n    </div>\n\n    <div class=\"p-4 rounded-xl bg-[#fffaf0] border-2 border-[#d97706] shadow-[3px_3px_0px_#151b20]\">\n      <div class=\"font-mono font-black text-xs text-[#b45309] uppercase mb-1\">2. HMDA Mortgage Underwriting Audits</div>\n      <p class=\"text-xs text-[#78350f] leading-relaxed mb-2\">\n        Credit underwriting algorithms passed predictive calibration tests across racial cohorts, yet continuous creditworthiness scores displayed massive horizontal shifts.\n      </p>\n      <div class=\"p-2 rounded bg-[#ffffff] border border-[#d97706] font-mono text-[11px] text-[#92400e]\">\n        • <strong>Audit Failure:</strong> $\\mathcal{W}_1 > 65$ FICO points; high $T_{\\text{between}}$.<br>\n        • <strong>Metric Used:</strong> Optimal transport $\\mathcal{W}_1$ &amp; Katz log CI.<br>\n        • <strong>Outcome:</strong> Forced underwriting threshold recalibration &amp; fair lending remediation.\n      </div>\n    </div>\n  </div>\n</div>\n"
        }
      },
      {
        "id": "s16",
        "title": "Production Implementation: Pydantic V2 & 4 Cardinal Rules",
        "type": "capstone",
        "solo": {
          "speaker": "Dr. Nova",
          "title": "Production Auditing Architecture & Key Takeaways",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "To operationalize everything covered in Lesson 7.3, production ML pipelines encapsulate statistical fairness checks inside strictly typed Pydantic V2 verification contracts before any model checkpoint can promote to deployment.",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Remember our four Cardinal Rules of Statistical Bias Auditing: First, always pair Kolmogorov-Smirnov with Wasserstein-1 optimal transport to eliminate tail blindspots. Second, isolate between-group inequality via the additively decomposable Theil Index. Third, compute Disparate Impact Ratios with Katz logarithmic confidence bounds. Fourth, use exact permutation resampling and statistical power audits so underpowered p-values never certify unfair systems. Thank you for joining Lesson 7.3!",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono text-xs font-black text-[#151b20] uppercase tracking-wider\">Production Capstone • Pydantic V2 Verification &amp; 4 Cardinal Rules</span>\n    <span class=\"px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#ffc83e] text-[#151b20] border border-[#151b20]\">Lesson 7.3 Complete</span>\n  </div>\n\n  <div class=\"grid grid-cols-1 md:grid-cols-2 gap-3 mb-3 text-xs font-mono\">\n    <div class=\"p-3 rounded-xl bg-[#f0f9ff] border-2 border-[#0284c7]\">\n      <strong class=\"text-[#0369a1] block mb-1\">1. Dual-Metric Divergence Gate</strong>\n      <span class=\"text-[11px] text-[#0c4a6e]\">Never rely solely on $D_{\\text{KS}}$; enforce strict upper bounds on $\\mathcal{W}_1$ to eliminate high-threshold tail exclusion.</span>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#ecfdf5] border-2 border-[#059669]\">\n      <strong class=\"text-[#047857] block mb-1\">2. Additive Theil Isolation</strong>\n      <span class=\"text-[11px] text-[#065f46]\">Verify $\\frac{T_{\\text{between}}}{T} \\le \\epsilon_{\\text{tol}}$ to cleanly separate demographic group disparities from within-group merit variance.</span>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#fffaf0] border-2 border-[#d97706]\">\n      <strong class=\"text-[#b45309] block mb-1\">3. Katz Confidence Compliance</strong>\n      <span class=\"text-[11px] text-[#78350f]\">Report $\\text{DIR}$ alongside asymmetric logarithmic confidence intervals; flag if lower bound falls below $0.80$.</span>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#fff5f5] border-2 border-[#dc2626]\">\n      <strong class=\"text-[#b91c1c] block mb-1\">4. Power-Aware Permutation Testing</strong>\n      <span class=\"text-[11px] text-[#7f1d1d]\">Run exact $B=10,000$ permutations and check $\\ge 80\\%$ statistical power before certifying $p > 0.05$ parity!</span>\n    </div>\n  </div>\n\n  <div class=\"p-3 rounded-lg bg-[#151b20] text-[#fffdf7] font-mono text-[11px] leading-relaxed\">\n    <span class=\"text-[#ffc83e] font-bold\"># Production CI/CD Fairness Assertion (test_ch7_p3_pydantic.py)</span><br>\n    assert continuous_audit.wasserstein_1 &lt; 0.05 and continuous_audit.theil_between_ratio &lt; 0.02<br>\n    assert impact_audit.katz_ci_lower &gt;= 0.80 and perm_audit.power_achieved &gt;= 0.80\n  </div>\n</div>\n"
        },
        "duo": {
          "speaker": "Dr. Nova & Kaito",
          "title": "Production Auditing Architecture & Key Takeaways",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "What a complete statistical toolkit, Dr. Nova! From Wasserstein optimal transport and Theil entropy decomposition to the 80% rule, Katz confidence intervals, and exact Fisher-Pitman permutations.",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "And by wrapping all four checks into Pydantic V2 schema contracts inside the CI/CD pipeline, no model can silently bypass an audit on a small sample size or a hidden tail gap.",
              "dock": "main"
            },
            {
              "speaker": "Kaito",
              "text": "In our next lesson, 7.4, we bring these numbers to life with Fairness Visualization Dashboards and Exploratory Bias Toolkits! See you there!",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono text-xs font-black text-[#151b20] uppercase tracking-wider\">Production Capstone • Pydantic V2 Verification &amp; 4 Cardinal Rules</span>\n    <span class=\"px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#ffc83e] text-[#151b20] border border-[#151b20]\">Lesson 7.3 Complete</span>\n  </div>\n\n  <div class=\"grid grid-cols-1 md:grid-cols-2 gap-3 mb-3 text-xs font-mono\">\n    <div class=\"p-3 rounded-xl bg-[#f0f9ff] border-2 border-[#0284c7]\">\n      <strong class=\"text-[#0369a1] block mb-1\">1. Dual-Metric Divergence Gate</strong>\n      <span class=\"text-[11px] text-[#0c4a6e]\">Never rely solely on $D_{\\text{KS}}$; enforce strict upper bounds on $\\mathcal{W}_1$ to eliminate high-threshold tail exclusion.</span>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#ecfdf5] border-2 border-[#059669]\">\n      <strong class=\"text-[#047857] block mb-1\">2. Additive Theil Isolation</strong>\n      <span class=\"text-[11px] text-[#065f46]\">Verify $\\frac{T_{\\text{between}}}{T} \\le \\epsilon_{\\text{tol}}$ to cleanly separate demographic group disparities from within-group merit variance.</span>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#fffaf0] border-2 border-[#d97706]\">\n      <strong class=\"text-[#b45309] block mb-1\">3. Katz Confidence Compliance</strong>\n      <span class=\"text-[11px] text-[#78350f]\">Report $\\text{DIR}$ alongside asymmetric logarithmic confidence intervals; flag if lower bound falls below $0.80$.</span>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#fff5f5] border-2 border-[#dc2626]\">\n      <strong class=\"text-[#b91c1c] block mb-1\">4. Power-Aware Permutation Testing</strong>\n      <span class=\"text-[11px] text-[#7f1d1d]\">Run exact $B=10,000$ permutations and check $\\ge 80\\%$ statistical power before certifying $p > 0.05$ parity!</span>\n    </div>\n  </div>\n\n  <div class=\"p-3 rounded-lg bg-[#151b20] text-[#fffdf7] font-mono text-[11px] leading-relaxed\">\n    <span class=\"text-[#ffc83e] font-bold\"># Production CI/CD Fairness Assertion (test_ch7_p3_pydantic.py)</span><br>\n    assert continuous_audit.wasserstein_1 &lt; 0.05 and continuous_audit.theil_between_ratio &lt; 0.02<br>\n    assert impact_audit.katz_ci_lower &gt;= 0.80 and perm_audit.power_achieved &gt;= 0.80\n  </div>\n</div>\n"
        }
      }
    ]
  },
  "ch7_p4": {
    "chapter": 7,
    "part": 4,
    "key": "ch7_p4",
    "index": "Lesson 4 of 10",
    "lessonTitle": "Bias Visualization and Auditing Tools",
    "title": "Bias Visualization and Auditing Tools",
    "badge": "16 Masterclass Slides • Socratic Dialogue • Interactive Sandbox",
    "description": "Multi-Metric Disparity Matrices, Subgroup Reliability Calibration Diagrams, ROC Convex Hull Optimization, and Enterprise Fairness Toolkits.",
    "slides": [
      {
        "id": "s1",
        "title": "Bias Visualization and Auditing Tools",
        "type": "title",
        "solo": {
          "speaker": "Dr. Nova (Senior Architect)",
          "title": "Bias Visualization and Auditing Tools",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Welcome to Lesson 7.4 of Dataset Fundamentals: Bias Visualization and Auditing Tools. In Lesson 7.3, we established the quantitative hypothesis tests and optimal transport metrics needed to detect bias statistically. Today, we elevate our toolkit into visual fairness engineering—translating multi-dimensional disparities into intuitive, mathematically rigorous diagnostic displays.",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Tabular accuracy aggregates systematically conceal harm across intersecting demographic cohorts. Throughout this lecture, we will construct rank-2 disparity metric tensors, diagnose miscalibration through subgroup reliability diagrams and Expected Calibration Error, intersect group-specific Receiver Operating Characteristic convex hulls to solve Equalized Odds, and audit production pipelines using Fairlearn, AIF360, Google's What-If Tool, and Aequitas.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-6 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[6px_6px_0px_#151b20] text-center my-3\">\n  <div class=\"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c9f3f4] border-2 border-[#151b20] text-[#0e7490] font-mono text-xs font-bold uppercase tracking-wider mb-3\">\n    <span>Track 7 • Dataset Bias &amp; Fairness • Lesson 7.4</span>\n  </div>\n  <h1 class=\"text-2xl sm:text-3xl font-black text-[#151b20] tracking-tight mb-2\">\n    Bias Visualization &amp; Auditing Tools\n  </h1>\n  <p class=\"text-sm sm:text-base text-[#475569] font-medium max-w-2xl mx-auto leading-relaxed\">\n    Multi-Metric Disparity Matrices, Subgroup Reliability Calibration Diagrams, ROC Convex Hull Optimization, and Enterprise Fairness Toolkits.\n  </p>\n  <div class=\"grid grid-cols-1 sm:grid-cols-4 gap-3 mt-5 max-w-4xl mx-auto text-left font-mono text-xs\">\n    <div class=\"p-3 rounded-xl bg-[#c9f3f4] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20]\">\n      <strong class=\"text-[#0e7490] block mb-1 font-black\">1. Metric Tensor $\\mathbf{M}$</strong>\n      <span class=\"text-[11px] text-[#151b20] leading-snug\">Rank-2 disparity matrices quantifying extreme spreads $\\Delta_k$ and ratios $\\rho_k$.</span>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#fff0b9] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20]\">\n      <strong class=\"text-[#b45309] block mb-1 font-black\">2. Calibration ECE</strong>\n      <span class=\"text-[11px] text-[#151b20] leading-snug\">Subgroup reliability curves exposing localized risk distortion hidden by pooled means.</span>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#ffd8ce] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20]\">\n      <strong class=\"text-[#b91c1c] block mb-1 font-black\">3. ROC Convex Hulls</strong>\n      <span class=\"text-[11px] text-[#151b20] leading-snug\">Hardt-Price-Srebro threshold Pareto optimization minimizing $\\Delta_{\\text{AOD}}$.</span>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#e7f4c8] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20]\">\n      <strong class=\"text-[#15803d] block mb-1 font-black\">4. Auditing Toolkits</strong>\n      <span class=\"text-[11px] text-[#151b20] leading-snug\">Fairlearn, AIF360, What-If Tool, Aequitas, and automated Pydantic CI/CD contracts.</span>\n    </div>\n  </div>\n</div>\n"
        },
        "duo": {
          "speaker": "Dr. Nova & Kaito (Pair Lecture)",
          "title": "Bias Visualization and Auditing Tools",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Welcome to Lesson 7.4! Today, Kaito and I explore how fairness engineering visualizes demographic disparities so legal officers, clinicians, and product engineers can act decisively on complex tradeoffs.",
              "dock": "main"
            },
            {
              "speaker": "Kaito",
              "text": "Wait—if we already know how to run a pooled Z-test or Wasserstein distance in code, why do we need dedicated visualization engines? Can't teams just read a summary table with 92 percent accuracy?",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Because aggregate tables hide intersectional failures and mathematical incompatibilities! A model can look globally calibrated while systematically over-estimating risk for minorities, or pass an aggregate threshold while devastating darker-skinned women in facial recognition. Let's inspect how visual geometries unlock those hidden dynamics.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-6 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[6px_6px_0px_#151b20] text-center my-3\">\n  <div class=\"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c9f3f4] border-2 border-[#151b20] text-[#0e7490] font-mono text-xs font-bold uppercase tracking-wider mb-3\">\n    <span>Track 7 • Lesson 7.4 • Socratic Visual Auditing Studio</span>\n  </div>\n  <h1 class=\"text-2xl sm:text-3xl font-black text-[#151b20] tracking-tight mb-2\">\n    Bias Visualization &amp; Auditing Tools\n  </h1>\n  <p class=\"text-sm sm:text-base text-[#475569] font-medium max-w-2xl mx-auto leading-relaxed\">\n    Multi-Metric Disparity Matrices, Subgroup Reliability Calibration Diagrams, ROC Convex Hull Optimization, and Enterprise Fairness Toolkits.\n  </p>\n  <div class=\"grid grid-cols-1 sm:grid-cols-4 gap-3 mt-5 max-w-4xl mx-auto text-left font-mono text-xs\">\n    <div class=\"p-3 rounded-xl bg-[#c9f3f4] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20]\">\n      <strong class=\"text-[#0e7490] block mb-1 font-black\">1. Metric Tensor $\\mathbf{M}$</strong>\n      <span class=\"text-[11px] text-[#151b20] leading-snug\">Rank-2 disparity matrices quantifying extreme spreads $\\Delta_k$ and ratios $\\rho_k$.</span>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#fff0b9] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20]\">\n      <strong class=\"text-[#b45309] block mb-1 font-black\">2. Calibration ECE</strong>\n      <span class=\"text-[11px] text-[#151b20] leading-snug\">Subgroup reliability curves exposing localized risk distortion hidden by pooled means.</span>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#ffd8ce] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20]\">\n      <strong class=\"text-[#b91c1c] block mb-1 font-black\">3. ROC Convex Hulls</strong>\n      <span class=\"text-[11px] text-[#151b20] leading-snug\">Hardt-Price-Srebro threshold Pareto optimization minimizing $\\Delta_{\\text{AOD}}$.</span>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#e7f4c8] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20]\">\n      <strong class=\"text-[#15803d] block mb-1 font-black\">4. Auditing Toolkits</strong>\n      <span class=\"text-[11px] text-[#151b20] leading-snug\">Fairlearn, AIF360, What-If Tool, Aequitas, and automated Pydantic CI/CD contracts.</span>\n    </div>\n  </div>\n</div>\n"
        }
      },
      {
        "id": "s2",
        "title": "Intersectional Grids & Fairness Visual Engines",
        "type": "concept",
        "solo": {
          "speaker": "Dr. Nova",
          "title": "From Siloed Accuracy to Intersectional Visual Architecture",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Visualizing algorithmic disparity bridges the communication gap between machine learning architects, compliance lawyers, and product stakeholders. Rather than publishing single global accuracy scalars, visual fairness auditing couples two structured stages.",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Stage 1 partitions test populations across an Intersectional Demographic Grid spanning gender, race or ethnicity, and age cohorts. Stage 2 projects those sliced distributions onto three visual engines: Multi-Metric Disparity Heatmap Matrices, Subgroup Reliability Calibration Diagrams, and Multi-Objective Receiver Operating Characteristic Pareto Frontiers.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono text-xs font-black text-[#0e7490] uppercase tracking-wider\">Conceptual Architecture • Two-Stage Visual Synthesis</span>\n    <span class=\"px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#c9f3f4] text-[#0e7490] border border-[#151b20]\">Slicing ➔ Geometry</span>\n  </div>\n\n  <div class=\"grid grid-cols-1 md:grid-cols-2 gap-4\">\n    <div class=\"p-4 rounded-xl bg-[#f0f9ff] border-2 border-[#0284c7] shadow-[3px_3px_0px_#151b20]\">\n      <div class=\"font-mono text-xs font-black text-[#0369a1] mb-2\">1. Intersectional Demographic Grid</div>\n      <div class=\"space-y-2 text-xs font-mono\">\n        <div class=\"p-2 rounded bg-[#ffffff] border border-[#0284c7]/40 text-[#0c4a6e]\">\n          <strong>Gender Axis:</strong> Male, Female, Non-Binary\n        </div>\n        <div class=\"p-2 rounded bg-[#ffffff] border border-[#0284c7]/40 text-[#0c4a6e]\">\n          <strong>Race/Ethnicity Axis:</strong> Black, White, Hispanic, Asian\n        </div>\n        <div class=\"p-2 rounded bg-[#ffffff] border border-[#0284c7]/40 text-[#0c4a6e]\">\n          <strong>Age Cohort Axis:</strong> Young (&lt;25), Prime (25–55), Senior (&gt;55)\n        </div>\n      </div>\n    </div>\n\n    <div class=\"p-4 rounded-xl bg-[#fffaf0] border-2 border-[#d97706] shadow-[3px_3px_0px_#151b20]\">\n      <div class=\"font-mono text-xs font-black text-[#b45309] mb-2\">2. Fairness Visual Engines</div>\n      <div class=\"space-y-2 text-xs font-mono\">\n        <div class=\"p-2 rounded bg-[#ffffff] border border-[#d97706]/40 text-[#78350f]\">\n          <strong>Heatmap Matrix:</strong> Selection, Accuracy, TPR &amp; FPR across slices\n        </div>\n        <div class=\"p-2 rounded bg-[#ffffff] border border-[#d97706]/40 text-[#78350f]\">\n          <strong>Calibration Diagram:</strong> Predicted confidence vs. observed frequency\n        </div>\n        <div class=\"p-2 rounded bg-[#ffffff] border border-[#d97706]/40 text-[#78350f]\">\n          <strong>ROC Pareto Frontier:</strong> Optimal $(\\tau_0^*, \\tau_1^*)$ operating boundary\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"mt-3 p-3 rounded-lg bg-[#fff0b9] border border-[#151b20] text-xs font-sans text-[#151b20]\">\n    <strong>Why Tabular Averages Fail:</strong> Global accuracy numbers completely obscure the tension between <em>false-positive burdens</em> inflicted on historically penalized cohorts and <em>true-positive opportunity allocations</em>. Visual geometries make those trade-offs auditable at a glance.\n  </div>\n</div>\n"
        },
        "duo": {
          "speaker": "Dr. Nova & Kaito",
          "title": "From Siloed Accuracy to Intersectional Visual Architecture",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "I love how cleanly Stage 1 and Stage 2 connect here! Instead of looking at Gender alone or Race alone, we slice along the full Cartesian intersection—like Age times Gender times Ethnicity—before plotting anything.",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Exactly right, Kaito. Once we slice those cohorts in Stage 1, our three Visual Engines attack distinct geometric questions: heatmaps uncover error asymmetries, calibration curves reveal whether probability scores mean the same thing across groups, and ROC Pareto curves guide post-processing threshold alignment.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono text-xs font-black text-[#0e7490] uppercase tracking-wider\">Conceptual Architecture • Two-Stage Visual Synthesis</span>\n    <span class=\"px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#c9f3f4] text-[#0e7490] border border-[#151b20]\">Slicing ➔ Geometry</span>\n  </div>\n\n  <div class=\"grid grid-cols-1 md:grid-cols-2 gap-4\">\n    <div class=\"p-4 rounded-xl bg-[#f0f9ff] border-2 border-[#0284c7] shadow-[3px_3px_0px_#151b20]\">\n      <div class=\"font-mono text-xs font-black text-[#0369a1] mb-2\">1. Intersectional Demographic Grid</div>\n      <div class=\"space-y-2 text-xs font-mono\">\n        <div class=\"p-2 rounded bg-[#ffffff] border border-[#0284c7]/40 text-[#0c4a6e]\">\n          <strong>Gender Axis:</strong> Male, Female, Non-Binary\n        </div>\n        <div class=\"p-2 rounded bg-[#ffffff] border border-[#0284c7]/40 text-[#0c4a6e]\">\n          <strong>Race/Ethnicity Axis:</strong> Black, White, Hispanic, Asian\n        </div>\n        <div class=\"p-2 rounded bg-[#ffffff] border border-[#0284c7]/40 text-[#0c4a6e]\">\n          <strong>Age Cohort Axis:</strong> Young (&lt;25), Prime (25–55), Senior (&gt;55)\n        </div>\n      </div>\n    </div>\n\n    <div class=\"p-4 rounded-xl bg-[#fffaf0] border-2 border-[#d97706] shadow-[3px_3px_0px_#151b20]\">\n      <div class=\"font-mono text-xs font-black text-[#b45309] mb-2\">2. Fairness Visual Engines</div>\n      <div class=\"space-y-2 text-xs font-mono\">\n        <div class=\"p-2 rounded bg-[#ffffff] border border-[#d97706]/40 text-[#78350f]\">\n          <strong>Heatmap Matrix:</strong> Selection, Accuracy, TPR &amp; FPR across slices\n        </div>\n        <div class=\"p-2 rounded bg-[#ffffff] border border-[#d97706]/40 text-[#78350f]\">\n          <strong>Calibration Diagram:</strong> Predicted confidence vs. observed frequency\n        </div>\n        <div class=\"p-2 rounded bg-[#ffffff] border border-[#d97706]/40 text-[#78350f]\">\n          <strong>ROC Pareto Frontier:</strong> Optimal $(\\tau_0^*, \\tau_1^*)$ operating boundary\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"mt-3 p-3 rounded-lg bg-[#fff0b9] border border-[#151b20] text-xs font-sans text-[#151b20]\">\n    <strong>Why Tabular Averages Fail:</strong> Global accuracy numbers completely obscure the tension between <em>false-positive burdens</em> inflicted on historically penalized cohorts and <em>true-positive opportunity allocations</em>. Visual geometries make those trade-offs auditable at a glance.\n  </div>\n</div>\n"
        }
      },
      {
        "id": "s3",
        "title": "The Rank-2 Metric Disparity Tensor",
        "type": "equation",
        "solo": {
          "speaker": "Dr. Nova",
          "title": "Formalizing Multi-Metric Heatmaps via Rank-2 Tensors",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Every multi-metric disparity heatmap used in frameworks like Fairlearn MetricFrame is powered mathematically by a Rank-2 Disparity Metric Tensor M in R to the G by K.",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Each row g indexes one demographic subgroup, while each column k evaluates a specific conditional metric expectation, such as Selection Rate, Accuracy, True Positive Rate, or False Positive Rate. Auditing engines scan each column k to compute two summary invariants: the Extreme Disparity Spread Delta k—subtracting the minimum subgroup metric from the maximum—and the column-wise Disparate Impact Ratio rho k. Regulatory deployment gates mandate that rho selection remains at least 0.80 while Delta TPR and Delta FPR remain strictly within tolerance epsilon.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono text-xs font-black text-[#0e7490] uppercase tracking-wider\">Tensor Algebra • Intersectional Heatmaps</span>\n    <span class=\"px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#c9f3f4] text-[#0e7490] border border-[#151b20]\">$\\mathbf{M} \\in \\mathbb{R}^{G \\times K}$</span>\n  </div>\n\n  <div class=\"p-4 rounded-xl bg-[#f0f9ff] border-2 border-[#0284c7] mb-3 text-center\">\n    <div class=\"font-mono text-xs font-bold text-[#0369a1] mb-1\">Rank-2 Disparity Metric Tensor Entry ($g \\in \\{1,\\dots,G\\}, \\; k \\in \\{1,\\dots,K\\}$)</div>\n    <div class=\"text-base sm:text-lg font-mono font-black text-[#0c4a6e]\">\n      $$\\mathbf{M}_{g, k} = \\mathbb{E}_{(X, Y) \\sim \\mathcal{D}_g}\\left[ \\mu_k\\big(f(X), Y\\big) \\right]$$\n    </div>\n    <div class=\"text-sm font-mono font-bold text-[#0e7490] mt-2 pt-2 border-t border-[#0284c7]/30\">\n      $$\\Delta_k = \\max_{g} \\mathbf{M}_{g, k} - \\min_{g'} \\mathbf{M}_{g', k}, \\qquad \\rho_k = \\frac{\\min_{g'} \\mathbf{M}_{g', k}}{\\max_{g} \\mathbf{M}_{g, k}}$$\n    </div>\n  </div>\n\n  <div class=\"grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono\">\n    <div class=\"p-3 rounded-xl bg-[#ffffff] border-2 border-[#151b20]\">\n      <strong class=\"text-[#b45309] block mb-1\">Disparate Impact Gate ($\\rho_{\\text{selection}}$)</strong>\n      <p class=\"text-[11px] text-[#475569] leading-relaxed\">\n        The EEOC Four-Fifths rule mandates $\\rho_{\\text{selection}} \\ge 0.80$ between the lowest-selected slice $\\min_{g'}$ and highest-selected benchmark slice $\\max_g$.\n      </p>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#ffffff] border-2 border-[#151b20]\">\n      <strong class=\"text-[#15803d] block mb-1\">Equalized Odds Bounds ($\\Delta_{\\text{TPR}}, \\Delta_{\\text{FPR}}$)</strong>\n      <p class=\"text-[11px] text-[#475569] leading-relaxed\">\n        Strict error-rate parity checks verify both $\\Delta_{\\text{TPR}} \\le \\epsilon$ and $\\Delta_{\\text{FPR}} \\le \\epsilon$ simultaneously across all $G$ rows.\n      </p>\n    </div>\n  </div>\n</div>\n"
        },
        "duo": {
          "speaker": "Dr. Nova & Kaito",
          "title": "Formalizing Multi-Metric Heatmaps via Rank-2 Tensors",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Viewing an auditing dashboard as a Rank-2 matrix M of shape G subgroups by K evaluation metrics makes everything click! In Fairlearn, MetricFrame is literally constructing this matrix M.",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Precisely, Kaito. Once you construct M, reducing any column k takes two operators: Extreme Disparity Spread Delta k calculates maximum minus minimum, and Ratio rho k divides minimum by maximum. Notice why comparing min against max across intersectional slices is so important: you prevent bad performance in a single vulnerable minority group from hiding behind three privileged slices!",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono text-xs font-black text-[#0e7490] uppercase tracking-wider\">Tensor Algebra • Intersectional Heatmaps</span>\n    <span class=\"px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#c9f3f4] text-[#0e7490] border border-[#151b20]\">$\\mathbf{M} \\in \\mathbb{R}^{G \\times K}$</span>\n  </div>\n\n  <div class=\"p-4 rounded-xl bg-[#f0f9ff] border-2 border-[#0284c7] mb-3 text-center\">\n    <div class=\"font-mono text-xs font-bold text-[#0369a1] mb-1\">Rank-2 Disparity Metric Tensor Entry ($g \\in \\{1,\\dots,G\\}, \\; k \\in \\{1,\\dots,K\\}$)</div>\n    <div class=\"text-base sm:text-lg font-mono font-black text-[#0c4a6e]\">\n      $$\\mathbf{M}_{g, k} = \\mathbb{E}_{(X, Y) \\sim \\mathcal{D}_g}\\left[ \\mu_k\\big(f(X), Y\\big) \\right]$$\n    </div>\n    <div class=\"text-sm font-mono font-bold text-[#0e7490] mt-2 pt-2 border-t border-[#0284c7]/30\">\n      $$\\Delta_k = \\max_{g} \\mathbf{M}_{g, k} - \\min_{g'} \\mathbf{M}_{g', k}, \\qquad \\rho_k = \\frac{\\min_{g'} \\mathbf{M}_{g', k}}{\\max_{g} \\mathbf{M}_{g, k}}$$\n    </div>\n  </div>\n\n  <div class=\"grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono\">\n    <div class=\"p-3 rounded-xl bg-[#ffffff] border-2 border-[#151b20]\">\n      <strong class=\"text-[#b45309] block mb-1\">Disparate Impact Gate ($\\rho_{\\text{selection}}$)</strong>\n      <p class=\"text-[11px] text-[#475569] leading-relaxed\">\n        The EEOC Four-Fifths rule mandates $\\rho_{\\text{selection}} \\ge 0.80$ between the lowest-selected slice $\\min_{g'}$ and highest-selected benchmark slice $\\max_g$.\n      </p>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#ffffff] border-2 border-[#151b20]\">\n      <strong class=\"text-[#15803d] block mb-1\">Equalized Odds Bounds ($\\Delta_{\\text{TPR}}, \\Delta_{\\text{FPR}}$)</strong>\n      <p class=\"text-[11px] text-[#475569] leading-relaxed\">\n        Strict error-rate parity checks verify both $\\Delta_{\\text{TPR}} \\le \\epsilon$ and $\\Delta_{\\text{FPR}} \\le \\epsilon$ simultaneously across all $G$ rows.\n      </p>\n    </div>\n  </div>\n</div>\n"
        }
      },
      {
        "id": "s4",
        "title": "Subgroup Calibration Geometry & Expected Calibration Error",
        "type": "equation",
        "solo": {
          "speaker": "Dr. Nova",
          "title": "Reliability Diagrams & Binned ECE Quantification",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Our second visual engine is the subgroup calibration plot, also called a reliability diagram. A continuous risk score R in zero to one is perfectly calibrated within protected demographic group a if the observed conditional probability of a positive outcome equals the nominal predicted score r everywhere.",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Geometrically, perfect calibration traces the 45-degree diagonal y equals x. Points sitting above the diagonal mean the model under-estimates a subgroup's true success rate—for example, predicting 40 percent loan repayment when empirical repayment reaches 60 percent. Points sagging below the diagonal mean the model over-estimates positive likelihood or risk, injecting systematic punitive bias. To quantify this curve into a scalar metric, we partition predictions into B confidence bins and compute Subgroup Expected Calibration Error, or ECE sub a, taking a bin-size weighted average of absolute accuracy minus confidence gaps.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono text-xs font-black text-[#b45309] uppercase tracking-wider\">Reliability Geometry • Pleiss et al. (2017)</span>\n    <span class=\"px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#fff0b9] text-[#b45309] border border-[#151b20]\">$\\text{ECE}_a$ Formulation</span>\n  </div>\n\n  <div class=\"p-4 rounded-xl bg-[#fffaf0] border-2 border-[#d97706] mb-3 text-center\">\n    <div class=\"font-mono text-xs font-bold text-[#92400e] mb-1\">Demographic Calibration Identity &amp; Binned Expected Calibration Error</div>\n    <div class=\"text-sm sm:text-base font-mono font-black text-[#78350f]\">\n      $$\\Pr(Y = 1 \\mid R = r, \\, A = a) = r \\quad \\forall a \\in \\{0, 1\\}, \\; \\forall r \\in [0, 1]$$\n    </div>\n    <div class=\"text-base sm:text-lg font-mono font-black text-[#92400e] mt-2 pt-2 border-t border-[#d97706]/30\">\n      $$\\text{ECE}_a = \\sum_{b=1}^{B} \\frac{|I_b^{(a)}|}{|D_a|} \\left| \\text{acc}\\!\\left(I_b^{(a)}\\right) - \\text{conf}\\!\\left(I_b^{(a)}\\right) \\right|$$\n    </div>\n  </div>\n\n  <div class=\"grid grid-cols-1 md:grid-cols-3 gap-2.5 text-xs font-mono\">\n    <div class=\"p-2.5 rounded-xl bg-[#ffffff] border border-[#151b20]\">\n      <strong class=\"text-[#475569] block mb-1\">45° Diagonal ($y = x$)</strong>\n      <span class=\"text-[11px] text-[#334155]\">Perfect probabilistic reliability: score $r$ means identical risk across groups.</span>\n    </div>\n    <div class=\"p-2.5 rounded-xl bg-[#ffffff] border border-[#15803d]\">\n      <strong class=\"text-[#15803d] block mb-1\">Above Diagonal ($y > x$)</strong>\n      <span class=\"text-[11px] text-[#166534]\">Under-estimates capability (e.g. predicts $40\\%$ repayment when group repays $60\\%$).</span>\n    </div>\n    <div class=\"p-2.5 rounded-xl bg-[#ffffff] border border-[#dc2626]\">\n      <strong class=\"text-[#b91c1c] block mb-1\">Below Diagonal ($y < x$)</strong>\n      <span class=\"text-[11px] text-[#7f1d1d]\">Over-estimates score/risk, inflicting systematic punitive bias.</span>\n    </div>\n  </div>\n</div>\n"
        },
        "duo": {
          "speaker": "Dr. Nova & Kaito",
          "title": "Reliability Diagrams & Binned ECE Quantification",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Let me make sure I read the reliability curve direction correctly, Dr. Nova. If my predicted score is on the horizontal x-axis as confidence, and observed empirical outcome is on the y-axis as accuracy...",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Then the 45-degree line is exact equality: accuracy equals confidence. If Group zero sits above the diagonal when Y equals loan repayment, they actually repay 60 percent of the time even though the model only assigned them a 40 percent probability score—so the model is systematically under-estimating their creditworthiness! And ECE sub a weights each bin discrepancy by how many samples fell in that bin.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono text-xs font-black text-[#b45309] uppercase tracking-wider\">Reliability Geometry • Pleiss et al. (2017)</span>\n    <span class=\"px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#fff0b9] text-[#b45309] border border-[#151b20]\">$\\text{ECE}_a$ Formulation</span>\n  </div>\n\n  <div class=\"p-4 rounded-xl bg-[#fffaf0] border-2 border-[#d97706] mb-3 text-center\">\n    <div class=\"font-mono text-xs font-bold text-[#92400e] mb-1\">Demographic Calibration Identity &amp; Binned Expected Calibration Error</div>\n    <div class=\"text-sm sm:text-base font-mono font-black text-[#78350f]\">\n      $$\\Pr(Y = 1 \\mid R = r, \\, A = a) = r \\quad \\forall a \\in \\{0, 1\\}, \\; \\forall r \\in [0, 1]$$\n    </div>\n    <div class=\"text-base sm:text-lg font-mono font-black text-[#92400e] mt-2 pt-2 border-t border-[#d97706]/30\">\n      $$\\text{ECE}_a = \\sum_{b=1}^{B} \\frac{|I_b^{(a)}|}{|D_a|} \\left| \\text{acc}\\!\\left(I_b^{(a)}\\right) - \\text{conf}\\!\\left(I_b^{(a)}\\right) \\right|$$\n    </div>\n  </div>\n\n  <div class=\"grid grid-cols-1 md:grid-cols-3 gap-2.5 text-xs font-mono\">\n    <div class=\"p-2.5 rounded-xl bg-[#ffffff] border border-[#151b20]\">\n      <strong class=\"text-[#475569] block mb-1\">45° Diagonal ($y = x$)</strong>\n      <span class=\"text-[11px] text-[#334155]\">Perfect probabilistic reliability: score $r$ means identical risk across groups.</span>\n    </div>\n    <div class=\"p-2.5 rounded-xl bg-[#ffffff] border border-[#15803d]\">\n      <strong class=\"text-[#15803d] block mb-1\">Above Diagonal ($y > x$)</strong>\n      <span class=\"text-[11px] text-[#166534]\">Under-estimates capability (e.g. predicts $40\\%$ repayment when group repays $60\\%$).</span>\n    </div>\n    <div class=\"p-2.5 rounded-xl bg-[#ffffff] border border-[#dc2626]\">\n      <strong class=\"text-[#b91c1c] block mb-1\">Below Diagonal ($y < x$)</strong>\n      <span class=\"text-[11px] text-[#7f1d1d]\">Over-estimates score/risk, inflicting systematic punitive bias.</span>\n    </div>\n  </div>\n</div>\n"
        }
      },
      {
        "id": "s5",
        "title": "The Subgroup Calibration Paradox",
        "type": "pitfall",
        "solo": {
          "speaker": "Dr. Nova",
          "title": "Why Global Reliability Plots Hide Minority Miscalibration",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "One of the gravest anti-patterns in machine learning observability is plotting a single global calibration curve without subgroup disaggregation. Consider what Pleiss and colleagues call the Subgroup Calibration Paradox.",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Because pooled Expected Calibration Error averages over all individuals regardless of group membership, a privileged majority group representing 85 percent of instances with near-zero calibration error of 0.01 will numerically swamp an unprivileged minority cohort of 15 percent suffering massive miscalibration of 0.15—yielding a benign pooled ECE around 0.031! Only by plotting separate subgroup curves and applying group-specific Isotonic Regression when divergence appears can auditors detect and eliminate this hidden harm.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono text-xs font-black text-[#dc2626] uppercase tracking-wider\">Critical Pitfall • Pooled Masking Effect</span>\n    <span class=\"px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#fee2e2] text-[#b91c1c] border border-[#151b20]\">Anti-Pattern Alert</span>\n  </div>\n\n  <div class=\"p-4 rounded-xl bg-[#fff5f5] border-2 border-[#dc2626] mb-3\">\n    <div class=\"font-mono text-xs font-black text-[#991b1b] mb-1\">The Subgroup Calibration Paradox</div>\n    <p class=\"text-xs text-[#7f1d1d] leading-relaxed\">\n      Suppose Group 1 ($85\\%$ of population) is tightly calibrated ($\\text{ECE}_1 = 0.01$), while Group 0 ($15\\%$ of population) experiences systematic distortion ($\\text{ECE}_0 = 0.15$). Notice how global averaging masks the harm:\n    </p>\n    <div class=\"text-center font-mono font-black text-sm text-[#7f1d1d] mt-2 py-1.5 bg-[#ffffff] rounded-lg border border-[#dc2626]/40\">\n      $$\\text{ECE}_{\\text{pooled}} \\approx 0.85(0.01) + 0.15(0.15) = \\mathbf{0.031} \\quad (\\text{False Safe Harbor!})$$\n    </div>\n  </div>\n\n  <div class=\"grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono\">\n    <div class=\"p-3 rounded-xl bg-[#ffffff] border-2 border-[#151b20]\">\n      <strong class=\"text-[#dc2626] block mb-1\">⚠️ Pooled Diagnostic Failure</strong>\n      <span class=\"text-[11px] text-[#475569] leading-relaxed\">Even opposite-signed bias offsets ($\\text{bias}_0 = -0.15$, $\\text{bias}_1 = +0.03$) can partially cancel out inside shared probability bins!</span>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#ecfdf5] border-2 border-[#059669]\">\n      <strong class=\"text-[#047857] block mb-1\">✅ Remediation Protocol</strong>\n      <span class=\"text-[11px] text-[#065f46] leading-relaxed\">Disaggregate calibration curves per slice $A=a$, flag $\\Delta\\text{ECE} = |\\text{ECE}_0 - \\text{ECE}_1| &gt; 0.03$, and apply group-specific <strong>Isotonic Regression</strong>.</span>\n    </div>\n  </div>\n</div>\n"
        },
        "duo": {
          "speaker": "Dr. Nova & Kaito",
          "title": "Why Global Reliability Plots Hide Minority Miscalibration",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Oh! So when people plot one global reliability curve for their entire validation set, they think everything is healthy because the majority class dominates the bin sample weights!",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "And worse: if Group zero sits slightly below the 45-degree diagonal while Group one sits slightly above it, inside each confidence bin the weighted positive outcomes can cancel each other out, making global calibration look near-zero while both subgroups suffer opposite bias errors! Let's launch Simulator 7.4 Tab A next to watch subgroup calibration distortion and Isotonic Recalibration live.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono text-xs font-black text-[#dc2626] uppercase tracking-wider\">Critical Pitfall • Pooled Masking Effect</span>\n    <span class=\"px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#fee2e2] text-[#b91c1c] border border-[#151b20]\">Anti-Pattern Alert</span>\n  </div>\n\n  <div class=\"p-4 rounded-xl bg-[#fff5f5] border-2 border-[#dc2626] mb-3\">\n    <div class=\"font-mono text-xs font-black text-[#991b1b] mb-1\">The Subgroup Calibration Paradox</div>\n    <p class=\"text-xs text-[#7f1d1d] leading-relaxed\">\n      Suppose Group 1 ($85\\%$ of population) is tightly calibrated ($\\text{ECE}_1 = 0.01$), while Group 0 ($15\\%$ of population) experiences systematic distortion ($\\text{ECE}_0 = 0.15$). Notice how global averaging masks the harm:\n    </p>\n    <div class=\"text-center font-mono font-black text-sm text-[#7f1d1d] mt-2 py-1.5 bg-[#ffffff] rounded-lg border border-[#dc2626]/40\">\n      $$\\text{ECE}_{\\text{pooled}} \\approx 0.85(0.01) + 0.15(0.15) = \\mathbf{0.031} \\quad (\\text{False Safe Harbor!})$$\n    </div>\n  </div>\n\n  <div class=\"grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono\">\n    <div class=\"p-3 rounded-xl bg-[#ffffff] border-2 border-[#151b20]\">\n      <strong class=\"text-[#dc2626] block mb-1\">⚠️ Pooled Diagnostic Failure</strong>\n      <span class=\"text-[11px] text-[#475569] leading-relaxed\">Even opposite-signed bias offsets ($\\text{bias}_0 = -0.15$, $\\text{bias}_1 = +0.03$) can partially cancel out inside shared probability bins!</span>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#ecfdf5] border-2 border-[#059669]\">\n      <strong class=\"text-[#047857] block mb-1\">✅ Remediation Protocol</strong>\n      <span class=\"text-[11px] text-[#065f46] leading-relaxed\">Disaggregate calibration curves per slice $A=a$, flag $\\Delta\\text{ECE} = |\\text{ECE}_0 - \\text{ECE}_1| &gt; 0.03$, and apply group-specific <strong>Isotonic Regression</strong>.</span>\n    </div>\n  </div>\n</div>\n"
        }
      },
      {
        "id": "s6",
        "title": "Interactive Lab: Subgroup Calibration & ECE Studio",
        "type": "interactive_lab",
        "solo": {
          "speaker": "Dr. Nova",
          "title": "Simulator 7.4 Tab A: Subgroup Calibration & ECE",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Welcome to Interactive Lab 1: Subgroup Calibration and Expected Calibration Error Studio. In the interactive canvas below, we plot disaggregated 10-bin reliability diagrams for Group zero in amber and Group one in blue against the dashed gray 45-degree perfect calibration diagonal.",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Drag the Group zero Risk Distortion slider below zero to simulate punitive under-prediction, then observe how Group zero ECE and the Calibration Disparity Delta ECE rise while Global Pooled ECE remains deceptively modest. Click Apply Isotonic Recalibration to snap both subgroup curves smoothly back onto the calibrated diagonal.",
              "dock": "sim"
            }
          ],
          "contentHtml": "\n<div class=\"p-4 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-2 border-b-2 border-[#151b20]/15 flex-wrap gap-2\">\n    <div class=\"flex items-center gap-2 font-mono font-black text-xs md:text-sm text-[#0284c7] uppercase tracking-wide\">\n      <span>🔬</span> Interactive Lab 1: Subgroup Calibration &amp; ECE Studio\n    </div>\n    <span class=\"px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black bg-[#c9f3f4] text-[#0e7490] border-2 border-[#151b20]\">\n      Simulator 7.4 Tab A\n    </span>\n  </div>\n\n  <p class=\"text-xs text-[#151b20]/80 font-sans mb-3\">\n    Inspect subgroup reliability curves across 10 nominal confidence bins. Deviations from the $45^\\circ$ diagonal trigger localized calibration disparities measured via $\\text{ECE}_0$, $\\text{ECE}_1$, and $\\Delta\\text{ECE}$.\n  </p>\n\n  <div class=\"p-3 rounded-lg bg-[#f0f9ff] border border-[#0284c7] text-xs font-mono text-[#0369a1] mb-2\">\n    <strong>Lab Objectives:</strong>\n    <ol class=\"list-decimal pl-5 space-y-1 mt-1\">\n      <li>Inspect default distortion ($\\delta_0 = -0.12$, $\\delta_1 = +0.02$): observe $\\text{ECE}_0 \\approx 0.086$ (<code>MISCALIBRATED</code>) vs. $\\text{ECE}_1 \\approx 0.015$.</li>\n      <li>Shift Group 0 distortion toward $+0.20$ to visualize systematic under-estimation of capability ($y &gt; x$).</li>\n      <li>Click <strong>Apply Isotonic Recalibration</strong> to collapse both distortions to $0.00$ ($\\Delta\\text{ECE} = 0.000$).</li>\n    </ol>\n  </div>\n</div>\n"
        },
        "duo": {
          "speaker": "Dr. Nova & Kaito",
          "title": "Simulator 7.4 Tab A: Subgroup Calibration & ECE",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Here is Simulator 7.4 Tab A! Right now Group zero's amber curve sags below the diagonal with distortion at minus 0.12, while Group one's blue curve hugs the diagonal cleanly.",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Exactly! Try dragging Group zero distortion all the way up or down to inspect both directions of bias, and notice how Pooled ECE hides the full extent of ECE sub zero. Then click Apply Isotonic Recalibration to snap both curves cleanly back to parity.",
              "dock": "sim"
            }
          ],
          "contentHtml": "\n<div class=\"p-4 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-2 border-b-2 border-[#151b20]/15 flex-wrap gap-2\">\n    <div class=\"flex items-center gap-2 font-mono font-black text-xs md:text-sm text-[#0284c7] uppercase tracking-wide\">\n      <span>🔬</span> Interactive Lab 1: Subgroup Calibration &amp; ECE Studio\n    </div>\n    <span class=\"px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black bg-[#c9f3f4] text-[#0e7490] border-2 border-[#151b20]\">\n      Simulator 7.4 Tab A\n    </span>\n  </div>\n\n  <p class=\"text-xs text-[#151b20]/80 font-sans mb-3\">\n    Inspect subgroup reliability curves across 10 nominal confidence bins. Deviations from the $45^\\circ$ diagonal trigger localized calibration disparities measured via $\\text{ECE}_0$, $\\text{ECE}_1$, and $\\Delta\\text{ECE}$.\n  </p>\n\n  <div class=\"p-3 rounded-lg bg-[#f0f9ff] border border-[#0284c7] text-xs font-mono text-[#0369a1] mb-2\">\n    <strong>Lab Objectives:</strong>\n    <ol class=\"list-decimal pl-5 space-y-1 mt-1\">\n      <li>Inspect default distortion ($\\delta_0 = -0.12$, $\\delta_1 = +0.02$): observe $\\text{ECE}_0 \\approx 0.086$ (<code>MISCALIBRATED</code>) vs. $\\text{ECE}_1 \\approx 0.015$.</li>\n      <li>Shift Group 0 distortion toward $+0.20$ to visualize systematic under-estimation of capability ($y &gt; x$).</li>\n      <li>Click <strong>Apply Isotonic Recalibration</strong> to collapse both distortions to $0.00$ ($\\Delta\\text{ECE} = 0.000$).</li>\n    </ol>\n  </div>\n</div>\n"
        }
      },
      {
        "id": "s7",
        "title": "Active Checkpoint 1: Subgroup Calibration Paradox",
        "type": "checkpoint",
        "solo": {
          "speaker": "Dr. Nova",
          "title": "Active Checkpoint 1: Pooled vs. Subgroup Calibration",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Let us verify your diagnostic reasoning in Active Checkpoint 1. Why can a model with an apparently benign overall pooled Expected Calibration Error of 0.015 still inflict severe systematic miscalibration on an unprivileged demographic cohort?",
              "dock": "quiz"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-2 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono text-xs font-black text-[#0e7490] uppercase tracking-wider\">Active Checkpoint 7.4.1 • Calibration Paradox Audit</span>\n    <span class=\"px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black bg-[#c9f3f4] text-[#0e7490] border-2 border-[#151b20]\">Self-Assessment</span>\n  </div>\n  <p class=\"text-xs text-[#151b20] font-sans mb-1\">\n    Diagnose the Subgroup Calibration Paradox ($\\text{ECE}_{\\text{pooled}}$ vs. $\\text{ECE}_0$) in the interactive checkpoint dock below:\n  </p>\n</div>\n"
        },
        "duo": {
          "speaker": "Dr. Nova & Kaito",
          "title": "Active Checkpoint 1: Subgroup Calibration Paradox",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Checkpoint 1 time! Think back to how sample weights behave when 85 percent of users belong to Group one.",
              "dock": "quiz"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Evaluate all four choices carefully in the dock below and select the rigorous explanation for why disaggregated reliability curves are indispensable.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-2 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono text-xs font-black text-[#0e7490] uppercase tracking-wider\">Active Checkpoint 7.4.1 • Calibration Paradox Audit</span>\n    <span class=\"px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black bg-[#c9f3f4] text-[#0e7490] border-2 border-[#151b20]\">Self-Assessment</span>\n  </div>\n  <p class=\"text-xs text-[#151b20] font-sans mb-1\">\n    Diagnose the Subgroup Calibration Paradox ($\\text{ECE}_{\\text{pooled}}$ vs. $\\text{ECE}_0$) in the interactive checkpoint dock below:\n  </p>\n</div>\n"
        }
      },
      {
        "id": "s8",
        "title": "Group-Specific ROC Curves & Equalized Odds Divergence",
        "type": "equation",
        "solo": {
          "speaker": "Dr. Nova",
          "title": "Parameterized Operating Points Across Cohorts",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Let us now transition to our third core visualization engine: Group-Specific Receiver Operating Characteristic curves. For each protected cohort a in zero and one, sweeping decision threshold tau sub a from zero to one traces a two-dimensional curve pairing False Positive Rate against True Positive Rate.",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "When historical bias shifts or compresses score distributions for one demographic slice, enforcing a naive uniform threshold such as tau zero equals tau one equals 0.50 places each group at an entirely different coordinate in ROC space. We quantify this separation cleanly through Average Absolute Odds Disparity, Delta AOD, defined as half the sum of the absolute False Positive Rate gap and absolute True Positive Rate gap. Achieving Equalized Odds requires finding group-specific operating thresholds tau zero star and tau one star where both group curves intersect seamlessly.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono text-xs font-black text-[#0e7490] uppercase tracking-wider\">ROC Geometry • Threshold Divergence</span>\n    <span class=\"px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#c9f3f4] text-[#0e7490] border border-[#151b20]\">Equalized Odds</span>\n  </div>\n\n  <div class=\"p-4 rounded-xl bg-[#f0f9ff] border-2 border-[#0284c7] mb-3 text-center\">\n    <div class=\"font-mono text-xs font-bold text-[#0369a1] mb-1\">Group ROC Trajectory &amp; Average Absolute Odds Disparity ($\\Delta_{\\text{AOD}}$)</div>\n    <div class=\"text-sm sm:text-base font-mono font-black text-[#0c4a6e]\">\n      $$\\text{ROC}_a(\\tau_a) = \\big(\\text{FPR}_a(\\tau_a), \\; \\text{TPR}_a(\\tau_a)\\big)$$\n    </div>\n    <div class=\"text-sm sm:text-base font-mono font-black text-[#0e7490] mt-2 pt-2 border-t border-[#0284c7]/30\">\n      $$\\Delta_{\\text{AOD}}(\\tau_0, \\tau_1) = \\frac{1}{2}\\Big( |\\text{FPR}_0(\\tau_0) - \\text{FPR}_1(\\tau_1)| + |\\text{TPR}_0(\\tau_0) - \\text{TPR}_1(\\tau_1)| \\Big)$$\n    </div>\n  </div>\n\n  <div class=\"grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono\">\n    <div class=\"p-3 rounded-xl bg-[#fff5f5] border border-[#dc2626]\">\n      <strong class=\"text-[#b91c1c] block mb-1\">Uniform Threshold Failure ($\\tau_0 = \\tau_1 = 0.50$)</strong>\n      <span class=\"text-[11px] text-[#7f1d1d]\">Divergent score distributions force $\\text{FPR}_0(0.50) \\neq \\text{FPR}_1(0.50)$ and unequal True Positive Rates, magnifying $\\Delta_{\\text{AOD}}$.</span>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#ecfdf5] border border-[#059669]\">\n      <strong class=\"text-[#047857] block mb-1\">Dual-Threshold Equality Targets</strong>\n      <span class=\"text-[11px] text-[#065f46]\">Locate $(\\tau_0^*, \\tau_1^*)$ satisfying $\\text{FPR}_0(\\tau_0^*) = \\text{FPR}_1(\\tau_1^*)$ and $\\text{TPR}_0(\\tau_0^*) = \\text{TPR}_1(\\tau_1^*)$ ($\\Delta_{\\text{AOD}} \\le \\epsilon$).</span>\n    </div>\n  </div>\n</div>\n"
        },
        "duo": {
          "speaker": "Dr. Nova & Kaito",
          "title": "Parameterized Operating Points Across Cohorts",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Wait a second, Dr. Nova! When people deploy a binary classifier, they almost always leave the cutoff hardcoded at 0.50 across every demographic group.",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Yes, and on differing score distributions that guarantees unequal error rates! If Group zero scores slightly lower on average due to upstream measurement noise, a single threshold at 0.50 sits much higher on Group zero's CDF than Group one's, slashing Group zero's True Positive Rate while altering False Positive burdens. Average Absolute Odds Disparity Delta AOD puts a concrete geometric distance on how far apart those two ROC operating dots stand!",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono text-xs font-black text-[#0e7490] uppercase tracking-wider\">ROC Geometry • Threshold Divergence</span>\n    <span class=\"px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#c9f3f4] text-[#0e7490] border border-[#151b20]\">Equalized Odds</span>\n  </div>\n\n  <div class=\"p-4 rounded-xl bg-[#f0f9ff] border-2 border-[#0284c7] mb-3 text-center\">\n    <div class=\"font-mono text-xs font-bold text-[#0369a1] mb-1\">Group ROC Trajectory &amp; Average Absolute Odds Disparity ($\\Delta_{\\text{AOD}}$)</div>\n    <div class=\"text-sm sm:text-base font-mono font-black text-[#0c4a6e]\">\n      $$\\text{ROC}_a(\\tau_a) = \\big(\\text{FPR}_a(\\tau_a), \\; \\text{TPR}_a(\\tau_a)\\big)$$\n    </div>\n    <div class=\"text-sm sm:text-base font-mono font-black text-[#0e7490] mt-2 pt-2 border-t border-[#0284c7]/30\">\n      $$\\Delta_{\\text{AOD}}(\\tau_0, \\tau_1) = \\frac{1}{2}\\Big( |\\text{FPR}_0(\\tau_0) - \\text{FPR}_1(\\tau_1)| + |\\text{TPR}_0(\\tau_0) - \\text{TPR}_1(\\tau_1)| \\Big)$$\n    </div>\n  </div>\n\n  <div class=\"grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono\">\n    <div class=\"p-3 rounded-xl bg-[#fff5f5] border border-[#dc2626]\">\n      <strong class=\"text-[#b91c1c] block mb-1\">Uniform Threshold Failure ($\\tau_0 = \\tau_1 = 0.50$)</strong>\n      <span class=\"text-[11px] text-[#7f1d1d]\">Divergent score distributions force $\\text{FPR}_0(0.50) \\neq \\text{FPR}_1(0.50)$ and unequal True Positive Rates, magnifying $\\Delta_{\\text{AOD}}$.</span>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#ecfdf5] border border-[#059669]\">\n      <strong class=\"text-[#047857] block mb-1\">Dual-Threshold Equality Targets</strong>\n      <span class=\"text-[11px] text-[#065f46]\">Locate $(\\tau_0^*, \\tau_1^*)$ satisfying $\\text{FPR}_0(\\tau_0^*) = \\text{FPR}_1(\\tau_1^*)$ and $\\text{TPR}_0(\\tau_0^*) = \\text{TPR}_1(\\tau_1^*)$ ($\\Delta_{\\text{AOD}} \\le \\epsilon$).</span>\n    </div>\n  </div>\n</div>\n"
        }
      },
      {
        "id": "s9",
        "title": "Hardt-Price-Srebro Theorem & ROC Convex Hulls",
        "type": "equation",
        "solo": {
          "speaker": "Dr. Nova",
          "title": "Feasible Equalized Odds via Convex Hull Intersection",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "How do auditors locate optimal operating thresholds tau zero star and tau one star without retraining massive upstream models from scratch? The mathematical solution arrives via the landmark 2016 Hardt-Price-Srebro Theorem.",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Any classifier can randomize between two deterministic threshold points A and B using coin-flip probability alpha between zero and one. By linearity of expectation, that randomized predictor achieves the weighted linear segment connecting A and B in ROC space. Taking the upper convex hull of each demographic group's ROC trajectory fills in all non-concave gaps. Any coordinate sitting inside the intersection of Group zero and Group one ROC convex hulls is guaranteed to satisfy exact Equalized Odds post-processing!",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono text-xs font-black text-[#b45309] uppercase tracking-wider\">Post-Processing Geometry • Hardt, Price &amp; Srebro (2016)</span>\n    <span class=\"px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#fff0b9] text-[#b45309] border border-[#151b20]\">Convex Hull Theorem</span>\n  </div>\n\n  <div class=\"p-4 rounded-xl bg-[#fffaf0] border-2 border-[#d97706] mb-3 text-center\">\n    <div class=\"font-mono text-xs font-bold text-[#92400e] mb-1\">Achievable Randomized Operating Space (Convex Combination $\\alpha \\in [0, 1]$)</div>\n    <div class=\"text-sm sm:text-base font-mono font-black text-[#78350f]\">\n      $$\\big(\\text{FPR}_\\alpha, \\, \\text{TPR}_\\alpha\\big) = \\alpha \\big(\\text{FPR}_A, \\, \\text{TPR}_A\\big) + (1-\\alpha)\\big(\\text{FPR}_B, \\, \\text{TPR}_B\\big)$$\n    </div>\n    <div class=\"text-xs font-mono text-[#92400e] mt-1.5\">\n      Feasible Equalized Odds points lie inside the intersection: $\\mathcal{H}(\\text{ROC}_0) \\cap \\mathcal{H}(\\text{ROC}_1)$.\n    </div>\n  </div>\n\n  <div class=\"grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono\">\n    <div class=\"p-3 rounded-xl bg-[#ffffff] border-2 border-[#151b20]\">\n      <strong class=\"text-[#0284c7] block mb-1\">Why Convex Hulls Over Raw Steps?</strong>\n      <p class=\"text-[11px] text-[#475569] leading-relaxed\">\n        Finite validation sets yield jagged empirical step curves with non-concave dips. Convex hull interpolation spans continuous randomized regions where exact group curves cross!\n      </p>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#ffffff] border-2 border-[#151b20]\">\n      <strong class=\"text-[#15803d] block mb-1\">Zero Model Retraining Needed</strong>\n      <p class=\"text-[11px] text-[#475569] leading-relaxed\">\n        Auditors apply lightweight linear programming over risk score probabilities $S$ post-hoc, certifying exact $(\\text{FPR}, \\text{TPR})$ parity downstream.\n      </p>\n    </div>\n  </div>\n</div>\n"
        },
        "duo": {
          "speaker": "Dr. Nova & Kaito",
          "title": "Feasible Equalized Odds via Convex Hull Intersection",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Hold on—wait a minute, Dr. Nova! What if Group zero's empirical ROC curve stays strictly beneath Group one's higher curve across most thresholds? How do they still intersect?",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Brilliant question! Both ROC curves always share the trivial endpoints zero-zero and one-one, plus any lower diagonal frontier! So taking the convex hull turns each curve into a filled feasible polygon beneath the upper hull. Every point inside the shaded overlap of Group zero's convex hull and Group one's convex hull is achievable by deliberately dialing down accuracy via threshold randomization on the higher-performing group until both hit identical TPR and FPR coordinates!",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono text-xs font-black text-[#b45309] uppercase tracking-wider\">Post-Processing Geometry • Hardt, Price &amp; Srebro (2016)</span>\n    <span class=\"px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#fff0b9] text-[#b45309] border border-[#151b20]\">Convex Hull Theorem</span>\n  </div>\n\n  <div class=\"p-4 rounded-xl bg-[#fffaf0] border-2 border-[#d97706] mb-3 text-center\">\n    <div class=\"font-mono text-xs font-bold text-[#92400e] mb-1\">Achievable Randomized Operating Space (Convex Combination $\\alpha \\in [0, 1]$)</div>\n    <div class=\"text-sm sm:text-base font-mono font-black text-[#78350f]\">\n      $$\\big(\\text{FPR}_\\alpha, \\, \\text{TPR}_\\alpha\\big) = \\alpha \\big(\\text{FPR}_A, \\, \\text{TPR}_A\\big) + (1-\\alpha)\\big(\\text{FPR}_B, \\, \\text{TPR}_B\\big)$$\n    </div>\n    <div class=\"text-xs font-mono text-[#92400e] mt-1.5\">\n      Feasible Equalized Odds points lie inside the intersection: $\\mathcal{H}(\\text{ROC}_0) \\cap \\mathcal{H}(\\text{ROC}_1)$.\n    </div>\n  </div>\n\n  <div class=\"grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono\">\n    <div class=\"p-3 rounded-xl bg-[#ffffff] border-2 border-[#151b20]\">\n      <strong class=\"text-[#0284c7] block mb-1\">Why Convex Hulls Over Raw Steps?</strong>\n      <p class=\"text-[11px] text-[#475569] leading-relaxed\">\n        Finite validation sets yield jagged empirical step curves with non-concave dips. Convex hull interpolation spans continuous randomized regions where exact group curves cross!\n      </p>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#ffffff] border-2 border-[#151b20]\">\n      <strong class=\"text-[#15803d] block mb-1\">Zero Model Retraining Needed</strong>\n      <p class=\"text-[11px] text-[#475569] leading-relaxed\">\n        Auditors apply lightweight linear programming over risk score probabilities $S$ post-hoc, certifying exact $(\\text{FPR}, \\text{TPR})$ parity downstream.\n      </p>\n    </div>\n  </div>\n</div>\n"
        }
      },
      {
        "id": "s10",
        "title": "Constrained Pareto Optimization & Fundamental Conflicts",
        "type": "equation",
        "solo": {
          "speaker": "Dr. Nova",
          "title": "Maximizing Utility Under Equalized Odds Constraints",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Given the convex hull geometry, fairness engineers solve a constrained multi-objective Pareto optimization problem: maximize population-weighted accuracy across groups by selecting optimal thresholds tau zero star and tau one star, subject to keeping Average Absolute Odds Disparity Delta AOD at or below legal tolerance epsilon.",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Crucially, however, visual dashboards must never promise mathematical impossibility. As proven independently by Kleinberg and Chouldechova, within-group calibration and Equalized Odds are mutually incompatible whenever demographic base rates differ—unless the classifier achieves zero error everywhere. Pareto visualization plots this fundamental utility-versus-fairness boundary transparently for policymakers.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono text-xs font-black text-[#0284c7] uppercase tracking-wider\">Pareto Engineering • Utility vs. Fairness Tradeoff</span>\n    <span class=\"px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#c9f3f4] text-[#0e7490] border border-[#151b20]\">Impossibility Guardrail</span>\n  </div>\n\n  <div class=\"p-4 rounded-xl bg-[#f0f9ff] border-2 border-[#0284c7] mb-3 text-center\">\n    <div class=\"font-mono text-xs font-bold text-[#0369a1] mb-1\">Constrained Multi-Objective Threshold Optimization</div>\n    <div class=\"text-sm sm:text-base font-mono font-black text-[#0c4a6e]\">\n      $$\\max_{\\tau_0, \\tau_1} \\sum_{a \\in \\{0, 1\\}} p_a \\, \\text{Acc}_a(\\tau_a) \\quad \\text{subject to} \\quad \\Delta_{\\text{AOD}}(\\tau_0, \\tau_1) \\le \\epsilon$$\n    </div>\n  </div>\n\n  <div class=\"p-3.5 rounded-xl bg-[#fff5f5] border-2 border-[#dc2626] text-xs font-mono\">\n    <strong class=\"text-[#b91c1c] block mb-1\">⚖️ Group Calibration vs. Equalized Odds Conflict (Kleinberg / Chouldechova)</strong>\n    <span class=\"text-[11px] text-[#7f1d1d] leading-relaxed block\">\n      Whenever underlying group base rates differ ($\\Pr(Y=1 \\mid A=0) \\neq \\Pr(Y=1 \\mid A=1)$) and the predictor makes imperfect predictions ($\\text{Err} &gt; 0$), enforcing dual thresholds $(\\tau_0^*, \\tau_1^*)$ breaks nominal calibration—and preserving calibration forces unequal FPR/TPR! Pareto plots expose this impossibility explicitly.\n    </span>\n  </div>\n</div>\n"
        },
        "duo": {
          "speaker": "Dr. Nova & Kaito",
          "title": "Maximizing Utility Under Equalized Odds Constraints",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Let's connect Slide 4 calibration directly to Slide 10 Pareto threshold optimization, Dr. Nova! When we change tau zero and tau one separately so both groups land on Equalized Odds, do the underlying probability scores stay calibrated?",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "No, Kaito! Unless both groups share identical positive base rates—or your classifier predicts with 100 percent zero-error accuracy—Kleinberg and Chouldechova proved calibration and Equalized Odds cannot coexist simultaneously! Our job with Pareto curves is showing leadership the exact accuracy-versus-fairness frontier rather than disguising conflicting definitions.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono text-xs font-black text-[#0284c7] uppercase tracking-wider\">Pareto Engineering • Utility vs. Fairness Tradeoff</span>\n    <span class=\"px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#c9f3f4] text-[#0e7490] border border-[#151b20]\">Impossibility Guardrail</span>\n  </div>\n\n  <div class=\"p-4 rounded-xl bg-[#f0f9ff] border-2 border-[#0284c7] mb-3 text-center\">\n    <div class=\"font-mono text-xs font-bold text-[#0369a1] mb-1\">Constrained Multi-Objective Threshold Optimization</div>\n    <div class=\"text-sm sm:text-base font-mono font-black text-[#0c4a6e]\">\n      $$\\max_{\\tau_0, \\tau_1} \\sum_{a \\in \\{0, 1\\}} p_a \\, \\text{Acc}_a(\\tau_a) \\quad \\text{subject to} \\quad \\Delta_{\\text{AOD}}(\\tau_0, \\tau_1) \\le \\epsilon$$\n    </div>\n  </div>\n\n  <div class=\"p-3.5 rounded-xl bg-[#fff5f5] border-2 border-[#dc2626] text-xs font-mono\">\n    <strong class=\"text-[#b91c1c] block mb-1\">⚖️ Group Calibration vs. Equalized Odds Conflict (Kleinberg / Chouldechova)</strong>\n    <span class=\"text-[11px] text-[#7f1d1d] leading-relaxed block\">\n      Whenever underlying group base rates differ ($\\Pr(Y=1 \\mid A=0) \\neq \\Pr(Y=1 \\mid A=1)$) and the predictor makes imperfect predictions ($\\text{Err} &gt; 0$), enforcing dual thresholds $(\\tau_0^*, \\tau_1^*)$ breaks nominal calibration—and preserving calibration forces unequal FPR/TPR! Pareto plots expose this impossibility explicitly.\n    </span>\n  </div>\n</div>\n"
        }
      },
      {
        "id": "s11",
        "title": "Open-Source Fairness Toolkit Ecosystem",
        "type": "concept",
        "solo": {
          "speaker": "Dr. Nova",
          "title": "Fairlearn, AIF360, Google What-If Tool, and Aequitas",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Enterprise fairness engineering relies on four battle-tested open-source toolkits, each engineered for distinct visualization and algorithmic workflows.",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Microsoft's Fairlearn excels inside scikit-learn pipelines, delivering MetricFrame dashboards and exponentiated-gradient Pareto frontier visualizations. IBM Research's AIF360 provides over 70 fairness metrics alongside a comprehensive catalog of pre-processing, in-processing, and post-processing bias mitigators rendered in an interactive Web Audit Console. Google PAIR's What-If Tool embeds into TensorBoard for rich multi-dimensional scatterplots and hypothetical counterfactual toggles, while the University of Chicago's Aequitas specializes in public-policy criminal justice auditing with disparity treemaps and demographic parity matrices.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono text-xs font-black text-[#15803d] uppercase tracking-wider\">Industry Ecosystem • Comparative Visual Engines</span>\n    <span class=\"px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#e7f4c8] text-[#15803d] border border-[#151b20]\">4 Production Toolkits</span>\n  </div>\n\n  <div class=\"grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono\">\n    <div class=\"p-3 rounded-xl bg-[#f0f9ff] border-2 border-[#0284c7] shadow-[2px_2px_0px_#151b20]\">\n      <strong class=\"text-[#0369a1] block mb-1 font-black\">1. Fairlearn (Microsoft / NumFOCUS)</strong>\n      <span class=\"text-[11px] text-[#0c4a6e] block\">• Native `scikit-learn` API &amp; reductions</span>\n      <span class=\"text-[11px] text-[#0c4a6e] block\">• Visual: <strong>`MetricFrame`</strong> dashboards &amp; Accuracy-vs-Fairness Pareto frontiers (Weerts 2023)</span>\n    </div>\n\n    <div class=\"p-3 rounded-xl bg-[#fffaf0] border-2 border-[#d97706] shadow-[2px_2px_0px_#151b20]\">\n      <strong class=\"text-[#b45309] block mb-1 font-black\">2. AIF360 (IBM Research)</strong>\n      <span class=\"text-[11px] text-[#78350f] block\">• 70+ fairness metrics &amp; full mitigation catalog</span>\n      <span class=\"text-[11px] text-[#78350f] block\">• Visual: Web Audit Console, disparity heatmaps &amp; SHAP plugins (Bellamy 2019)</span>\n    </div>\n\n    <div class=\"p-3 rounded-xl bg-[#ecfdf5] border-2 border-[#059669] shadow-[2px_2px_0px_#151b20]\">\n      <strong class=\"text-[#047857] block mb-1 font-black\">3. What-If Tool / WIT (Google PAIR)</strong>\n      <span class=\"text-[11px] text-[#065f46] block\">• Zero-code TensorBoard counterfactual slicing</span>\n      <span class=\"text-[11px] text-[#065f46] block\">• Visual: Interactive multi-dimensional scatterplots &amp; individual counterfactual toggles</span>\n    </div>\n\n    <div class=\"p-3 rounded-xl bg-[#fff5f5] border-2 border-[#dc2626] shadow-[2px_2px_0px_#151b20]\">\n      <strong class=\"text-[#b91c1c] block mb-1 font-black\">4. Aequitas (Univ. of Chicago)</strong>\n      <span class=\"text-[11px] text-[#7f1d1d] block\">• Public policy &amp; pretrial risk equity audits</span>\n      <span class=\"text-[11px] text-[#7f1d1d] block\">• Visual: Disparity treemaps &amp; demographic parity classification charts (Barocas 2016)</span>\n    </div>\n  </div>\n</div>\n"
        },
        "duo": {
          "speaker": "Dr. Nova & Kaito",
          "title": "Fairlearn, AIF360, Google What-If Tool, and Aequitas",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "When choosing an open-source toolkit for our stack, Dr. Nova, how should an engineering team decide between Fairlearn, AIF360, Google's What-If Tool, and Aequitas?",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Match the library to your workflow stage! If you run automated scikit-learn CI/CD checks, Fairlearn's MetricFrame and threshold reductions are lightweight and native. If your compliance team needs 70-plus regulatory metrics plus explainability in one console, reach for IBM AIF360. For exploratory counterfactual debugging inside notebooks or TensorBoard, Google's What-If Tool shines; and for civic public-policy equity audits, University of Chicago's Aequitas offers purpose-built disparity treemaps.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono text-xs font-black text-[#15803d] uppercase tracking-wider\">Industry Ecosystem • Comparative Visual Engines</span>\n    <span class=\"px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#e7f4c8] text-[#15803d] border border-[#151b20]\">4 Production Toolkits</span>\n  </div>\n\n  <div class=\"grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono\">\n    <div class=\"p-3 rounded-xl bg-[#f0f9ff] border-2 border-[#0284c7] shadow-[2px_2px_0px_#151b20]\">\n      <strong class=\"text-[#0369a1] block mb-1 font-black\">1. Fairlearn (Microsoft / NumFOCUS)</strong>\n      <span class=\"text-[11px] text-[#0c4a6e] block\">• Native `scikit-learn` API &amp; reductions</span>\n      <span class=\"text-[11px] text-[#0c4a6e] block\">• Visual: <strong>`MetricFrame`</strong> dashboards &amp; Accuracy-vs-Fairness Pareto frontiers (Weerts 2023)</span>\n    </div>\n\n    <div class=\"p-3 rounded-xl bg-[#fffaf0] border-2 border-[#d97706] shadow-[2px_2px_0px_#151b20]\">\n      <strong class=\"text-[#b45309] block mb-1 font-black\">2. AIF360 (IBM Research)</strong>\n      <span class=\"text-[11px] text-[#78350f] block\">• 70+ fairness metrics &amp; full mitigation catalog</span>\n      <span class=\"text-[11px] text-[#78350f] block\">• Visual: Web Audit Console, disparity heatmaps &amp; SHAP plugins (Bellamy 2019)</span>\n    </div>\n\n    <div class=\"p-3 rounded-xl bg-[#ecfdf5] border-2 border-[#059669] shadow-[2px_2px_0px_#151b20]\">\n      <strong class=\"text-[#047857] block mb-1 font-black\">3. What-If Tool / WIT (Google PAIR)</strong>\n      <span class=\"text-[11px] text-[#065f46] block\">• Zero-code TensorBoard counterfactual slicing</span>\n      <span class=\"text-[11px] text-[#065f46] block\">• Visual: Interactive multi-dimensional scatterplots &amp; individual counterfactual toggles</span>\n    </div>\n\n    <div class=\"p-3 rounded-xl bg-[#fff5f5] border-2 border-[#dc2626] shadow-[2px_2px_0px_#151b20]\">\n      <strong class=\"text-[#b91c1c] block mb-1 font-black\">4. Aequitas (Univ. of Chicago)</strong>\n      <span class=\"text-[11px] text-[#7f1d1d] block\">• Public policy &amp; pretrial risk equity audits</span>\n      <span class=\"text-[11px] text-[#7f1d1d] block\">• Visual: Disparity treemaps &amp; demographic parity classification charts (Barocas 2016)</span>\n    </div>\n  </div>\n</div>\n"
        }
      },
      {
        "id": "s12",
        "title": "Interactive Lab: Dual ROC Convex Hull Optimizer",
        "type": "interactive_lab",
        "solo": {
          "speaker": "Dr. Nova",
          "title": "Simulator 7.4 Tab B: Dual ROC Pareto Optimizer",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Welcome to Interactive Lab 2: Dual ROC Convex Hull Equalized Odds Optimizer. Inside the live simulator canvas below, Group zero traces an amber ROC trajectory with discriminability d equal 1.2, while Group one traces a blue ROC trajectory with d equal 1.8.",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "At the default uniform cutoff tau zero equals tau one equals 0.50, notice the wide dashed red segment connecting Group zero's operating dot to Group one's dot—causing a severe Average Absolute Odds Disparity Delta AOD of 0.284 and violating regulatory parity. Drag thresholds independently or click Solve Equalized Odds Frontier to discover the Pareto-optimal thresholds tau zero star and tau one star that shrink Delta AOD near zero!",
              "dock": "sim"
            }
          ],
          "contentHtml": "\n<div class=\"p-4 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-2 border-b-2 border-[#151b20]/15 flex-wrap gap-2\">\n    <div class=\"flex items-center gap-2 font-mono font-black text-xs md:text-sm text-[#15803d] uppercase tracking-wide\">\n      <span>🔬</span> Interactive Lab 2: Dual ROC Convex Hull &amp; Equalized Odds Optimizer\n    </div>\n    <span class=\"px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black bg-[#e7f4c8] text-[#15803d] border-2 border-[#151b20]\">\n      Simulator 7.4 Tab B\n    </span>\n  </div>\n\n  <p class=\"text-xs text-[#151b20]/80 font-sans mb-3\">\n    Manipulate decision thresholds $\\tau_0$ and $\\tau_1$ independently across subgroup ROC curves. Minimize $\\Delta_{\\text{AOD}}$ along the Hardt-Price-Srebro Equalized Odds frontier without retraining.\n  </p>\n\n  <div class=\"p-3 rounded-lg bg-[#f0fdf4] border border-[#15803d] text-xs font-mono text-[#166534] mb-2\">\n    <strong>Lab Objectives:</strong>\n    <ol class=\"list-decimal pl-5 space-y-1 mt-1\">\n      <li>Observe uniform cutoff ($\\tau_0 = 0.50, \\tau_1 = 0.50$): $\\Delta_{\\text{AOD}} \\approx 0.284$ (<code>SIGNIFICANT ODDS DISPARITY</code>).</li>\n      <li>Click <strong>Solve Equalized Odds Frontier</strong> to compute Pareto thresholds $(\\tau_0^*, \\tau_1^*)$ driving $\\Delta_{\\text{AOD}} &lt; 0.05$.</li>\n      <li>Verify how both operating coordinates converge tightly onto the feasible equalized odds intersection.</li>\n    </ol>\n  </div>\n</div>\n"
        },
        "duo": {
          "speaker": "Dr. Nova & Kaito",
          "title": "Simulator 7.4 Tab B: Dual ROC Pareto Optimizer",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Let's test Hardt-Price-Srebro Equalized Odds post-processing interactively! At uniform tau zero equal 0.50 and tau one equal 0.50, look how far apart those two colored dots sit along their ROC curves!",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Right—and click Solve Equalized Odds Frontier to watch our optimizer search over dual thresholds tau zero and tau one simultaneously until Delta AOD plunges under 0.05 and both operating points align inside their overlapping convex hull space!",
              "dock": "sim"
            }
          ],
          "contentHtml": "\n<div class=\"p-4 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-2 border-b-2 border-[#151b20]/15 flex-wrap gap-2\">\n    <div class=\"flex items-center gap-2 font-mono font-black text-xs md:text-sm text-[#15803d] uppercase tracking-wide\">\n      <span>🔬</span> Interactive Lab 2: Dual ROC Convex Hull &amp; Equalized Odds Optimizer\n    </div>\n    <span class=\"px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black bg-[#e7f4c8] text-[#15803d] border-2 border-[#151b20]\">\n      Simulator 7.4 Tab B\n    </span>\n  </div>\n\n  <p class=\"text-xs text-[#151b20]/80 font-sans mb-3\">\n    Manipulate decision thresholds $\\tau_0$ and $\\tau_1$ independently across subgroup ROC curves. Minimize $\\Delta_{\\text{AOD}}$ along the Hardt-Price-Srebro Equalized Odds frontier without retraining.\n  </p>\n\n  <div class=\"p-3 rounded-lg bg-[#f0fdf4] border border-[#15803d] text-xs font-mono text-[#166534] mb-2\">\n    <strong>Lab Objectives:</strong>\n    <ol class=\"list-decimal pl-5 space-y-1 mt-1\">\n      <li>Observe uniform cutoff ($\\tau_0 = 0.50, \\tau_1 = 0.50$): $\\Delta_{\\text{AOD}} \\approx 0.284$ (<code>SIGNIFICANT ODDS DISPARITY</code>).</li>\n      <li>Click <strong>Solve Equalized Odds Frontier</strong> to compute Pareto thresholds $(\\tau_0^*, \\tau_1^*)$ driving $\\Delta_{\\text{AOD}} &lt; 0.05$.</li>\n      <li>Verify how both operating coordinates converge tightly onto the feasible equalized odds intersection.</li>\n    </ol>\n  </div>\n</div>\n"
        }
      },
      {
        "id": "s13",
        "title": "Active Checkpoint 2: ROC Convex Hull Geometry",
        "type": "checkpoint",
        "solo": {
          "speaker": "Dr. Nova",
          "title": "Active Checkpoint 2: Equalized Odds Convexity",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Let us test your geometric intuition in Active Checkpoint 2. Under the Hardt-Price-Srebro Equalized Odds post-processing framework, why do auditors intersect the convex hulls of group ROC curves rather than restricting search strictly to raw deterministic step coordinates?",
              "dock": "quiz"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-2 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono text-xs font-black text-[#0e7490] uppercase tracking-wider\">Active Checkpoint 7.4.2 • ROC Convex Hull Geometry</span>\n    <span class=\"px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black bg-[#c9f3f4] text-[#0e7490] border-2 border-[#151b20]\">Self-Assessment</span>\n  </div>\n  <p class=\"text-xs text-[#151b20] font-sans mb-1\">\n    Verify why convex hulls expand the Equalized Odds feasible space without retraining in the interactive checkpoint dock below:\n  </p>\n</div>\n"
        },
        "duo": {
          "speaker": "Dr. Nova & Kaito",
          "title": "Active Checkpoint 2: ROC Convex Hull Geometry",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Checkpoint 2 time! Remember what happens when empirical validation data leaves jagged steps or dips in a group's ROC trajectory.",
              "dock": "quiz"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Apply linearity of expectation under threshold randomization to pick the exact geometric explanation in the dock below.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-2 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono text-xs font-black text-[#0e7490] uppercase tracking-wider\">Active Checkpoint 7.4.2 • ROC Convex Hull Geometry</span>\n    <span class=\"px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black bg-[#c9f3f4] text-[#0e7490] border-2 border-[#151b20]\">Self-Assessment</span>\n  </div>\n  <p class=\"text-xs text-[#151b20] font-sans mb-1\">\n    Verify why convex hulls expand the Equalized Odds feasible space without retraining in the interactive checkpoint dock below:\n  </p>\n</div>\n"
        }
      },
      {
        "id": "s14",
        "title": "End-to-End Visual Fairness Pipeline & CI/CD Gates",
        "type": "concept",
        "solo": {
          "speaker": "Dr. Nova",
          "title": "Operationalizing Visual Audits in Production Pipelines",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Putting all three visual engines together yields a disciplined five-step production diagnostic workflow. Step 1 slices model probabilities S across intersectional cohorts. Step 2 constructs the Rank-2 Multi-Metric Disparity Heatmap M sub g k.",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Step 3 inspects disaggregated subgroup calibration curves; if calibration disparities appear, engineers apply group-specific Isotonic Regression before adjusting cutoffs. Step 4 intersects ROC convex hulls to solve Equalized Odds thresholds tau zero star and tau one star. Finally, Step 5 evaluates automated Fairlearn MetricFrame CI/CD release gates: approve production deployment only if Disparate Impact Ratio is at least 0.80 and Average Odds Disparity stays within tolerance epsilon; otherwise reject the build and trigger adversarial or reductions retraining.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono text-xs font-black text-[#0e7490] uppercase tracking-wider\">Diagnostic Pipeline • Automated CI/CD Release Gate</span>\n    <span class=\"px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#c9f3f4] text-[#0e7490] border border-[#151b20]\">5-Stage Workflow</span>\n  </div>\n\n  <div class=\"space-y-2 text-xs font-mono\">\n    <div class=\"p-2.5 rounded-xl bg-[#f0f9ff] border border-[#0284c7] flex items-center justify-between\">\n      <span><strong>1. Slice Intersectional Data:</strong> Partition $S = f(\\mathbf{X})$ across intersecting protected attributes</span>\n      <span class=\"text-[#0369a1] font-black\">Stage 1</span>\n    </div>\n    <div class=\"p-2.5 rounded-xl bg-[#fffaf0] border border-[#d97706] flex items-center justify-between\">\n      <span><strong>2. Disparity Tensor Heatmap:</strong> Populate $\\mathbf{M}_{g,k}$ &amp; inspect `MetricFrame` spreads</span>\n      <span class=\"text-[#b45309] font-black\">Stage 2</span>\n    </div>\n    <div class=\"p-2.5 rounded-xl bg-[#fff0b9] border border-[#d97706] flex items-center justify-between\">\n      <span><strong>3. Calibration Check &amp; Repair:</strong> Plot per-slice reliability ➔ Isotonic Regression if $\\Delta\\text{ECE}$ high</span>\n      <span class=\"text-[#92400e] font-black\">Stage 3</span>\n    </div>\n    <div class=\"p-2.5 rounded-xl bg-[#ecfdf5] border border-[#059669] flex items-center justify-between\">\n      <span><strong>4. ROC Convex Hull Post-Processing:</strong> Intersect $\\mathcal{H}(\\text{ROC}_a)$ to calibrate $(\\tau_0^*, \\tau_1^*)$</span>\n      <span class=\"text-[#047857] font-black\">Stage 4</span>\n    </div>\n    <div class=\"p-2.5 rounded-xl bg-[#151b20] text-[#fffdf7] border border-[#151b20] flex items-center justify-between\">\n      <span><strong>5. CI/CD Deployment Gate:</strong> Pass iff $\\text{DIR} \\ge 0.80$ &amp; $\\Delta_{\\text{AOD}} \\le 0.05$; else retrain via reductions</span>\n      <span class=\"text-[#ffc83e] font-black\">Release Gate</span>\n    </div>\n  </div>\n</div>\n"
        },
        "duo": {
          "speaker": "Dr. Nova & Kaito",
          "title": "Operationalizing Visual Audits in Production Pipelines",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "I love how Stage 3 fixes calibration BEFORE Stage 4 runs threshold optimization! Why does order matter so much here, Dr. Nova?",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "If Group zero probabilities are miscalibrated and noisy, tuning thresholds downstream sits on shifting sand! You calibrate scores first via Isotonic Regression, then intersect ROC hulls for Equalized Odds, and finally gate merges automatically via Fairlearn MetricFrame inside CI/CD so zero regressive models reach production.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono text-xs font-black text-[#0e7490] uppercase tracking-wider\">Diagnostic Pipeline • Automated CI/CD Release Gate</span>\n    <span class=\"px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#c9f3f4] text-[#0e7490] border border-[#151b20]\">5-Stage Workflow</span>\n  </div>\n\n  <div class=\"space-y-2 text-xs font-mono\">\n    <div class=\"p-2.5 rounded-xl bg-[#f0f9ff] border border-[#0284c7] flex items-center justify-between\">\n      <span><strong>1. Slice Intersectional Data:</strong> Partition $S = f(\\mathbf{X})$ across intersecting protected attributes</span>\n      <span class=\"text-[#0369a1] font-black\">Stage 1</span>\n    </div>\n    <div class=\"p-2.5 rounded-xl bg-[#fffaf0] border border-[#d97706] flex items-center justify-between\">\n      <span><strong>2. Disparity Tensor Heatmap:</strong> Populate $\\mathbf{M}_{g,k}$ &amp; inspect `MetricFrame` spreads</span>\n      <span class=\"text-[#b45309] font-black\">Stage 2</span>\n    </div>\n    <div class=\"p-2.5 rounded-xl bg-[#fff0b9] border border-[#d97706] flex items-center justify-between\">\n      <span><strong>3. Calibration Check &amp; Repair:</strong> Plot per-slice reliability ➔ Isotonic Regression if $\\Delta\\text{ECE}$ high</span>\n      <span class=\"text-[#92400e] font-black\">Stage 3</span>\n    </div>\n    <div class=\"p-2.5 rounded-xl bg-[#ecfdf5] border border-[#059669] flex items-center justify-between\">\n      <span><strong>4. ROC Convex Hull Post-Processing:</strong> Intersect $\\mathcal{H}(\\text{ROC}_a)$ to calibrate $(\\tau_0^*, \\tau_1^*)$</span>\n      <span class=\"text-[#047857] font-black\">Stage 4</span>\n    </div>\n    <div class=\"p-2.5 rounded-xl bg-[#151b20] text-[#fffdf7] border border-[#151b20] flex items-center justify-between\">\n      <span><strong>5. CI/CD Deployment Gate:</strong> Pass iff $\\text{DIR} \\ge 0.80$ &amp; $\\Delta_{\\text{AOD}} \\le 0.05$; else retrain via reductions</span>\n      <span class=\"text-[#ffc83e] font-black\">Release Gate</span>\n    </div>\n  </div>\n</div>\n"
        }
      },
      {
        "id": "s15",
        "title": "Case Studies: Gender Shades & Clinical Alarm Fatigue",
        "type": "case_study",
        "solo": {
          "speaker": "Dr. Nova",
          "title": "High-Stakes Visual Auditing in Vision & Critical Care",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Let us inspect two landmark empirical case studies where visual subgroup slicing exposed harms invisible to aggregate metrics.",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "First, in the landmark 2018 Gender Shades study, Joy Buolamwini and Timnit Gebru visualized commercial facial analysis error rates across an intersectional two-by-two grid of Gender times Fitzpatrick Skin Type. While aggregate error sat at an impressive 12 percent, the visual matrix exposed an astonishing 43-fold chasm: lighter males averaged 0.8 percent error, whereas darker females suffered 34.7 percent error! Second, in ICU Sepsis Triage alerts, Fairlearn MetricFrame slicing across age cohort and psychiatric history revealed a massive 64 percent false positive rate for elderly psychiatric patients versus just 18 percent in general medical cohorts, driving severe clinical alarm fatigue.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono text-xs font-black text-[#b91c1c] uppercase tracking-wider\">Empirical Evidence • Intersectional Failure Exposure</span>\n    <span class=\"px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#fee2e2] text-[#b91c1c] border border-[#151b20]\">Real-World Audits</span>\n  </div>\n\n  <div class=\"grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono\">\n    <div class=\"p-4 rounded-xl bg-[#fffaf0] border-2 border-[#d97706] shadow-[3px_3px_0px_#151b20]\">\n      <strong class=\"text-[#b45309] block text-sm mb-2\">1. Commercial Facial Analysis (Gender Shades, 2018)</strong>\n      <div class=\"p-2.5 rounded-lg bg-[#ffffff] border border-[#d97706]/50 space-y-1 text-[11px] text-[#334155]\">\n        <div>• <strong>Overall Tabular Error:</strong> $12.0\\%$ (hid severity)</div>\n        <div>• <strong>Lighter Males:</strong> <span class=\"text-[#15803d] font-black\">$0.8\\%$ error</span></div>\n        <div>• <strong>Darker Females:</strong> <span class=\"text-[#dc2626] font-black\">$34.7\\%$ error</span> ($43\\times$ disparity!)</div>\n      </div>\n      <p class=\"text-[11px] text-[#78350f] mt-2 leading-relaxed\">\n        Buolamwini &amp; Gebru's $2 \\times 2$ intersectional grid transformed commercial computer vision regulation overnight.\n      </p>\n    </div>\n\n    <div class=\"p-4 rounded-xl bg-[#f0f9ff] border-2 border-[#0284c7] shadow-[3px_3px_0px_#151b20]\">\n      <strong class=\"text-[#0369a1] block text-sm mb-2\">2. Clinical Alarm Fatigue &amp; Sepsis Triage</strong>\n      <div class=\"p-2.5 rounded-lg bg-[#ffffff] border border-[#0284c7]/50 space-y-1 text-[11px] text-[#334155]\">\n        <div>• <strong>General Medical ICU Cohort:</strong> <span class=\"text-[#15803d] font-black\">$18\\%$ FPR</span></div>\n        <div>• <strong>Elderly Psychiatric Cohort:</strong> <span class=\"text-[#dc2626] font-black\">$64\\%$ FPR</span></div>\n        <div>• <strong>Clinical Risk:</strong> Severe alarm fatigue &amp; physician dismissal</div>\n      </div>\n      <p class=\"text-[11px] text-[#0c4a6e] mt-2 leading-relaxed\">\n        Visualizing `MetricFrame` across age $\\times$ psychiatric history identified localized false-positive burden missed globally.\n      </p>\n    </div>\n  </div>\n</div>\n"
        },
        "duo": {
          "speaker": "Dr. Nova & Kaito",
          "title": "High-Stakes Visual Auditing in Vision & Critical Care",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "The Gender Shades numbers are staggering, Dr. Nova! Twelve percent overall error sounds reasonably solid in an executive slide deck—until you plot Gender by Skin Type and see 34.7 percent failure on darker females against 0.8 percent on lighter males!",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "And similarly in ICU sepsis prediction: doctors started ignoring alerts altogether because a 64 percent false positive rate in elderly psychiatric wards drowned out real emergencies! Visual subgroup matrices turn abstract ethical concerns into undeniable empirical proof that teams can act upon immediately.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono text-xs font-black text-[#b91c1c] uppercase tracking-wider\">Empirical Evidence • Intersectional Failure Exposure</span>\n    <span class=\"px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#fee2e2] text-[#b91c1c] border border-[#151b20]\">Real-World Audits</span>\n  </div>\n\n  <div class=\"grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono\">\n    <div class=\"p-4 rounded-xl bg-[#fffaf0] border-2 border-[#d97706] shadow-[3px_3px_0px_#151b20]\">\n      <strong class=\"text-[#b45309] block text-sm mb-2\">1. Commercial Facial Analysis (Gender Shades, 2018)</strong>\n      <div class=\"p-2.5 rounded-lg bg-[#ffffff] border border-[#d97706]/50 space-y-1 text-[11px] text-[#334155]\">\n        <div>• <strong>Overall Tabular Error:</strong> $12.0\\%$ (hid severity)</div>\n        <div>• <strong>Lighter Males:</strong> <span class=\"text-[#15803d] font-black\">$0.8\\%$ error</span></div>\n        <div>• <strong>Darker Females:</strong> <span class=\"text-[#dc2626] font-black\">$34.7\\%$ error</span> ($43\\times$ disparity!)</div>\n      </div>\n      <p class=\"text-[11px] text-[#78350f] mt-2 leading-relaxed\">\n        Buolamwini &amp; Gebru's $2 \\times 2$ intersectional grid transformed commercial computer vision regulation overnight.\n      </p>\n    </div>\n\n    <div class=\"p-4 rounded-xl bg-[#f0f9ff] border-2 border-[#0284c7] shadow-[3px_3px_0px_#151b20]\">\n      <strong class=\"text-[#0369a1] block text-sm mb-2\">2. Clinical Alarm Fatigue &amp; Sepsis Triage</strong>\n      <div class=\"p-2.5 rounded-lg bg-[#ffffff] border border-[#0284c7]/50 space-y-1 text-[11px] text-[#334155]\">\n        <div>• <strong>General Medical ICU Cohort:</strong> <span class=\"text-[#15803d] font-black\">$18\\%$ FPR</span></div>\n        <div>• <strong>Elderly Psychiatric Cohort:</strong> <span class=\"text-[#dc2626] font-black\">$64\\%$ FPR</span></div>\n        <div>• <strong>Clinical Risk:</strong> Severe alarm fatigue &amp; physician dismissal</div>\n      </div>\n      <p class=\"text-[11px] text-[#0c4a6e] mt-2 leading-relaxed\">\n        Visualizing `MetricFrame` across age $\\times$ psychiatric history identified localized false-positive burden missed globally.\n      </p>\n    </div>\n  </div>\n</div>\n"
        }
      },
      {
        "id": "s16",
        "title": "Production Implementation: Pydantic V2 & 4 Cardinal Rules",
        "type": "capstone",
        "solo": {
          "speaker": "Dr. Nova",
          "title": "Production Verification Contracts & Key Takeaways",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "To deploy visual fairness diagnostics reliably in production, teams codify all checks into strictly typed Pydantic V2 verification contracts inside automated CI/CD gates—validating Calibration ECE audits, Equalized Odds convex hull optimizations, and multi-metric disparity frames.",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Carry forward our Four Cardinal Rules of Bias Visualization and Auditing Tools: First, slice intersectional subgroups into Rank-2 disparity tensors before ever reporting pooled averages. Second, disaggregate subgroup reliability curves and ECE to defeat the Subgroup Calibration Paradox. Third, intersect ROC convex hulls using Hardt-Price-Srebro dual thresholding to calibrate Equalized Odds. And fourth, wire Fairlearn MetricFrame and Pydantic V2 assertions directly into automated deployment pipelines. Thank you for completing Lesson 7.4!",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono text-xs font-black text-[#151b20] uppercase tracking-wider\">Production Capstone • Pydantic V2 Verification &amp; 4 Cardinal Rules</span>\n    <span class=\"px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#ffc83e] text-[#151b20] border border-[#151b20]\">Lesson 7.4 Complete</span>\n  </div>\n\n  <div class=\"grid grid-cols-1 md:grid-cols-2 gap-3 mb-3 text-xs font-mono\">\n    <div class=\"p-3 rounded-xl bg-[#f0f9ff] border-2 border-[#0284c7]\">\n      <strong class=\"text-[#0369a1] block mb-1\">1. Tensor Slicing First</strong>\n      <span class=\"text-[11px] text-[#0c4a6e]\">Construct Rank-2 `MetricFrame` tensors $\\mathbf{M} \\in \\mathbb{R}^{G \\times K}$ across intersectional slices before computing averages.</span>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#fffaf0] border-2 border-[#d97706]\">\n      <strong class=\"text-[#b45309] block mb-1\">2. Disaggregated Calibration</strong>\n      <span class=\"text-[11px] text-[#78350f]\">Inspect per-group reliability plots &amp; $\\text{ECE}_a$; repair localized bias via group Isotonic Regression.</span>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#ecfdf5] border-2 border-[#059669]\">\n      <strong class=\"text-[#047857] block mb-1\">3. Convex Hull Intersections</strong>\n      <span class=\"text-[11px] text-[#065f46]\">Optimize $(\\tau_0^*, \\tau_1^*)$ in $\\mathcal{H}(\\text{ROC}_0) \\cap \\mathcal{H}(\\text{ROC}_1)$ while disclosing utility-calibration tradeoffs.</span>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#fff5f5] border-2 border-[#dc2626]\">\n      <strong class=\"text-[#b91c1c] block mb-1\">4. Automated Pydantic CI/CD Gates</strong>\n      <span class=\"text-[11px] text-[#7f1d1d]\">Enforce typed contracts gating $\\Delta\\text{ECE}$, minimized $\\Delta_{\\text{AOD}}$, and $\\text{DIR} \\ge 0.80$ before merge!</span>\n    </div>\n  </div>\n\n  <div class=\"p-3 rounded-lg bg-[#151b20] text-[#fffdf7] font-mono text-[11px] leading-relaxed\">\n    <span class=\"text-[#ffc83e] font-bold\"># Production Visual Fairness Assertion (test_ch7_p4_pydantic.py)</span><br>\n    assert ece_audit.subgroup_miscalibration_detected or ece_audit.disparity_delta_ece &lt; 0.03<br>\n    assert opt_audit.disparity_mitigated and mf_audit.disparate_impact_ratio &gt;= 0.80\n  </div>\n</div>\n"
        },
        "duo": {
          "speaker": "Dr. Nova & Kaito",
          "title": "Production Verification Contracts & Key Takeaways",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "What a transformative toolkit, Dr. Nova! From Rank-2 disparity tensors and binned reliability ECE diagrams to intersecting ROC convex hulls and catching real-world failures in Gender Shades and ICU triage!",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "And by encapsulating CalibrationECEAudit, EqualizedOddsOptimizationAudit, and FairnessMetricFrameAudit inside strict Pydantic V2 contracts, every pull request must visually and mathematically earn its release clearance.",
              "dock": "main"
            },
            {
              "speaker": "Kaito",
              "text": "Coming up next in Lesson 7.5, we examine the systemic Human, Financial, and Regulatory Impacts of Dataset Bias! Thank you for joining Lesson 7.4!",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono text-xs font-black text-[#151b20] uppercase tracking-wider\">Production Capstone • Pydantic V2 Verification &amp; 4 Cardinal Rules</span>\n    <span class=\"px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#ffc83e] text-[#151b20] border border-[#151b20]\">Lesson 7.4 Complete</span>\n  </div>\n\n  <div class=\"grid grid-cols-1 md:grid-cols-2 gap-3 mb-3 text-xs font-mono\">\n    <div class=\"p-3 rounded-xl bg-[#f0f9ff] border-2 border-[#0284c7]\">\n      <strong class=\"text-[#0369a1] block mb-1\">1. Tensor Slicing First</strong>\n      <span class=\"text-[11px] text-[#0c4a6e]\">Construct Rank-2 `MetricFrame` tensors $\\mathbf{M} \\in \\mathbb{R}^{G \\times K}$ across intersectional slices before computing averages.</span>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#fffaf0] border-2 border-[#d97706]\">\n      <strong class=\"text-[#b45309] block mb-1\">2. Disaggregated Calibration</strong>\n      <span class=\"text-[11px] text-[#78350f]\">Inspect per-group reliability plots &amp; $\\text{ECE}_a$; repair localized bias via group Isotonic Regression.</span>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#ecfdf5] border-2 border-[#059669]\">\n      <strong class=\"text-[#047857] block mb-1\">3. Convex Hull Intersections</strong>\n      <span class=\"text-[11px] text-[#065f46]\">Optimize $(\\tau_0^*, \\tau_1^*)$ in $\\mathcal{H}(\\text{ROC}_0) \\cap \\mathcal{H}(\\text{ROC}_1)$ while disclosing utility-calibration tradeoffs.</span>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#fff5f5] border-2 border-[#dc2626]\">\n      <strong class=\"text-[#b91c1c] block mb-1\">4. Automated Pydantic CI/CD Gates</strong>\n      <span class=\"text-[11px] text-[#7f1d1d]\">Enforce typed contracts gating $\\Delta\\text{ECE}$, minimized $\\Delta_{\\text{AOD}}$, and $\\text{DIR} \\ge 0.80$ before merge!</span>\n    </div>\n  </div>\n\n  <div class=\"p-3 rounded-lg bg-[#151b20] text-[#fffdf7] font-mono text-[11px] leading-relaxed\">\n    <span class=\"text-[#ffc83e] font-bold\"># Production Visual Fairness Assertion (test_ch7_p4_pydantic.py)</span><br>\n    assert ece_audit.subgroup_miscalibration_detected or ece_audit.disparity_delta_ece &lt; 0.03<br>\n    assert opt_audit.disparity_mitigated and mf_audit.disparate_impact_ratio &gt;= 0.80\n  </div>\n</div>\n"
        }
      }
    ]
  },
  "ch7_p5": {
    "chapter": 7,
    "part": 5,
    "key": "ch7_p5",
    "index": "Lesson 5 of 10",
    "lessonTitle": "Societal, Legal, and Operational Impacts of Dataset Bias",
    "title": "Societal, Legal, and Operational Impacts of Dataset Bias",
    "badge": "16 Masterclass Slides • Socratic Dialogue • Interactive Sandbox",
    "description": "Economic Allocative Disparity, Intergenerational Wealth Compounding, Chouldechova's Impossibility Law, EU AI Act / GDPR, and FTC Algorithmic Disgorgement.",
    "slides": [
      {
        "id": "s1",
        "title": "Societal, Legal, and Operational Impacts of Dataset Bias",
        "type": "title",
        "solo": {
          "speaker": "Dr. Nova (Senior Architect)",
          "title": "Societal, Legal, and Operational Impacts of Dataset Bias",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Welcome to Lesson 7.5 of Dataset Fundamentals: Societal, Legal, and Operational Impacts of Dataset Bias. In Lesson 7.4, we engineered multi-metric visualizations to detect bias before deployment. Today, we trace what happens when biased datasets escape into production at societal scale.",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Algorithmic bias is never an isolated mathematical curiosity. Across lending, healthcare triage, and criminal justice, disparate error rates compound dynamically over time into structural intergenerational inequality, collide with Chouldechova's algebraic impossibility constraints, and trigger severe statutory liabilities—including Article 10 of the European Union AI Act, GDPR Article 22, US civil disparate impact probes, and Federal Trade Commission Algorithmic Disgorgement.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-6 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[6px_6px_0px_#151b20] text-center my-3\">\n  <div class=\"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c9f3f4] border-2 border-[#151b20] text-[#0e7490] font-mono text-xs font-bold uppercase tracking-wider mb-3\">\n    <span>Track 7 • Dataset Bias &amp; Fairness • Lesson 7.5</span>\n  </div>\n  <h1 class=\"text-2xl sm:text-3xl font-black text-[#151b20] tracking-tight mb-2\">\n    Societal, Legal &amp; Operational Impacts of Dataset Bias\n  </h1>\n  <p class=\"text-sm sm:text-base text-[#475569] font-medium max-w-2xl mx-auto leading-relaxed\">\n    Economic Allocative Disparity, Intergenerational Wealth Compounding, Chouldechova's Impossibility Law, EU AI Act / GDPR, and FTC Algorithmic Disgorgement.\n  </p>\n  <div class=\"grid grid-cols-1 sm:grid-cols-4 gap-3 mt-5 max-w-4xl mx-auto text-left font-mono text-xs\">\n    <div class=\"p-3 rounded-xl bg-[#c9f3f4] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20]\">\n      <strong class=\"text-[#0e7490] block mb-1 font-black\">1. Allocative Utility</strong>\n      <span class=\"text-[11px] text-[#151b20] leading-snug\">Integral utility extraction $\\Delta U = U_1 - U_0$ across loans, hiring, and care.</span>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#fff0b9] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20]\">\n      <strong class=\"text-[#b45309] block mb-1 font-black\">2. Wealth Chasm</strong>\n      <span class=\"text-[11px] text-[#151b20] leading-snug\">Closed-form $66.44\\times$ compounding divergence over a 30-year mortgage horizon.</span>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#ffd8ce] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20]\">\n      <strong class=\"text-[#b91c1c] block mb-1 font-black\">3. Chouldechova Law</strong>\n      <span class=\"text-[11px] text-[#151b20] leading-snug\">Algebraic impossibility tying calibrated PPV directly to unequal false positive rates.</span>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#e7f4c8] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20]\">\n      <strong class=\"text-[#15803d] block mb-1 font-black\">4. Legal &amp; IP Risk</strong>\n      <span class=\"text-[11px] text-[#151b20] leading-snug\">EU AI Act Art. 10 (€35M/7%), ECOA, GDPR Art. 22 &amp; FTC Model Disgorgement.</span>\n    </div>\n  </div>\n</div>\n"
        },
        "duo": {
          "speaker": "Dr. Nova & Kaito (Pair Lecture)",
          "title": "Societal, Legal, and Operational Impacts of Dataset Bias",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Welcome to Lesson 7.5! Today, Kaito and I move beyond diagnostic charts to examine the irreversible real-world, economic, and legal consequences when biased datasets power deployed systems.",
              "dock": "main"
            },
            {
              "speaker": "Kaito",
              "text": "Wait—when executives look at model error metrics, they often treat a small gap like a 20 percent selection difference or slightly higher false positives as temporary technical debt. Why does it escalate so dangerously in the real world?",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Because real-world allocation is dynamic, not static! Over 30-year lending horizons, compound capital returns amplify a modest selection gap into a two-point-four-seven-times wealth chasm. Meanwhile, regulators like the European Union and the US Federal Trade Commission now impose massive fines and forced algorithmic disgorgement—completely destroying models trained on tainted data.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-6 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[6px_6px_0px_#151b20] text-center my-3\">\n  <div class=\"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c9f3f4] border-2 border-[#151b20] text-[#0e7490] font-mono text-xs font-bold uppercase tracking-wider mb-3\">\n    <span>Track 7 • Lesson 7.5 • Societal, Legal &amp; Economic Governance</span>\n  </div>\n  <h1 class=\"text-2xl sm:text-3xl font-black text-[#151b20] tracking-tight mb-2\">\n    Societal, Legal &amp; Operational Impacts of Dataset Bias\n  </h1>\n  <p class=\"text-sm sm:text-base text-[#475569] font-medium max-w-2xl mx-auto leading-relaxed\">\n    Economic Allocative Disparity, Intergenerational Wealth Compounding, Chouldechova's Impossibility Law, EU AI Act / GDPR, and FTC Algorithmic Disgorgement.\n  </p>\n  <div class=\"grid grid-cols-1 sm:grid-cols-4 gap-3 mt-5 max-w-4xl mx-auto text-left font-mono text-xs\">\n    <div class=\"p-3 rounded-xl bg-[#c9f3f4] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20]\">\n      <strong class=\"text-[#0e7490] block mb-1 font-black\">1. Allocative Utility</strong>\n      <span class=\"text-[11px] text-[#151b20] leading-snug\">Integral utility extraction $\\Delta U = U_1 - U_0$ across loans, hiring, and care.</span>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#fff0b9] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20]\">\n      <strong class=\"text-[#b45309] block mb-1 font-black\">2. Wealth Chasm</strong>\n      <span class=\"text-[11px] text-[#151b20] leading-snug\">Closed-form $66.44\\times$ compounding divergence over a 30-year mortgage horizon.</span>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#ffd8ce] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20]\">\n      <strong class=\"text-[#b91c1c] block mb-1 font-black\">3. Chouldechova Law</strong>\n      <span class=\"text-[11px] text-[#151b20] leading-snug\">Algebraic impossibility tying calibrated PPV directly to unequal false positive rates.</span>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#e7f4c8] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20]\">\n      <strong class=\"text-[#15803d] block mb-1 font-black\">4. Legal &amp; IP Risk</strong>\n      <span class=\"text-[11px] text-[#151b20] leading-snug\">EU AI Act Art. 10 (€35M/7%), ECOA, GDPR Art. 22 &amp; FTC Model Disgorgement.</span>\n    </div>\n  </div>\n</div>\n"
        }
      },
      {
        "id": "s2",
        "title": "Cascading Societal & Corporate Harm Architecture",
        "type": "concept",
        "solo": {
          "speaker": "Dr. Nova",
          "title": "From Biased Decision Engine f(x) to Compounding Externalities",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "When a single biased decision engine f of x operates at institutional scale, upstream dataset distortion branches into four catastrophic pathways.",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Pathway 1 hits Criminal Justice via disparate pretrial detention, exemplified by COMPAS. Pathway 2 hits Healthcare via under-allocation of complex care management, documented by Obermeyer. Pathway 3 hits Financial Lending via algorithmic redlining and unequal credit ceilings, exposed in the Apple Card inquiry. Together, pathways 1 through 3 accumulate into Intergenerational Wealth and Well-Being Depletion. Meanwhile, Pathway 4 triggers external Regulatory Sanctions under GDPR, the EU AI Act, and Federal Trade Commission orders—forcing model destruction and severe balance-sheet penalties.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono text-xs font-black text-[#0e7490] uppercase tracking-wider\">Sociotechnical Topology • Cascading Harm Dynamics</span>\n    <span class=\"px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#c9f3f4] text-[#0e7490] border border-[#151b20]\">4 Impact Vectors</span>\n  </div>\n\n  <div class=\"p-2.5 rounded-xl bg-[#c9f3f4] border-2 border-[#151b20] text-center font-mono text-xs font-black text-[#0e7490] mb-3 shadow-[2px_2px_0px_#151b20]\">\n    Biased Decision Engine $f(\\mathbf{x})$ Deployed Without Rigorous Dataset Controls\n  </div>\n\n  <div class=\"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 text-xs font-mono mb-3\">\n    <div class=\"p-3 rounded-xl bg-[#ffd8ce] border-2 border-[#151b20] shadow-[2px_2px_0px_#151b20]\">\n      <strong class=\"text-[#991b1b] block mb-1 font-black\">1. Criminal Justice</strong>\n      <span class=\"text-[11px] text-[#7f1d1d] leading-snug block\">Disparate Pre-Trial Detention (COMPAS • Dressel &amp; Farid 2018)</span>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#ffd8ce] border-2 border-[#151b20] shadow-[2px_2px_0px_#151b20]\">\n      <strong class=\"text-[#991b1b] block mb-1 font-black\">2. Healthcare Triage</strong>\n      <span class=\"text-[11px] text-[#7f1d1d] leading-snug block\">Under-Allocation of Complex Care (Obermeyer et al. 2019)</span>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#ffd8ce] border-2 border-[#151b20] shadow-[2px_2px_0px_#151b20]\">\n      <strong class=\"text-[#991b1b] block mb-1 font-black\">3. Financial Lending</strong>\n      <span class=\"text-[11px] text-[#7f1d1d] leading-snug block\">Redlining &amp; Credit Line Ceilings (Apple Card ECOA Inquiry)</span>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#ffd8ce] border-2 border-[#151b20] shadow-[2px_2px_0px_#151b20]\">\n      <strong class=\"text-[#991b1b] block mb-1 font-black\">4. Regulatory Enforcement</strong>\n      <span class=\"text-[11px] text-[#7f1d1d] leading-snug block\">GDPR, EU AI Act Art. 10 &amp; FTC Disgorgement (Selbst 2019)</span>\n    </div>\n  </div>\n\n  <div class=\"grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono\">\n    <div class=\"p-3 rounded-xl bg-[#fff0b9] border-2 border-[#151b20] shadow-[2px_2px_0px_#151b20]\">\n      <strong class=\"text-[#92400e] block mb-0.5 font-black\">Vectors 1–3 ➔ Societal Sink</strong>\n      <span class=\"text-[11px] text-[#78350f]\">Intergenerational Wealth &amp; Clinical Well-Being Depletion</span>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#fff0b9] border-2 border-[#151b20] shadow-[2px_2px_0px_#151b20]\">\n      <strong class=\"text-[#92400e] block mb-0.5 font-black\">Vector 4 ➔ Corporate Liability Sink</strong>\n      <span class=\"text-[11px] text-[#78350f]\">Forced Model Destruction &amp; Catastrophic Revenue Penalties</span>\n    </div>\n  </div>\n</div>\n"
        },
        "duo": {
          "speaker": "Dr. Nova & Kaito",
          "title": "From Biased Decision Engine f(x) to Compounding Externalities",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Look at how clearly this flow separates two distinct accountability failures: externalized harm borne by citizens across justice, healthcare, and credit—versus existential balance-sheet risk returning right back to the enterprise.",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Precisely, Kaito. As Selbst and colleagues demonstrated in 2019, evaluating an algorithm purely inside a closed technical benchmark ignores how errors across bail, clinical triage, and lending accumulate into structural inequality—while regulatory regimes convert that negligence directly into forced model destruction and seven-percent global turnover fines.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono text-xs font-black text-[#0e7490] uppercase tracking-wider\">Sociotechnical Topology • Cascading Harm Dynamics</span>\n    <span class=\"px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#c9f3f4] text-[#0e7490] border border-[#151b20]\">4 Impact Vectors</span>\n  </div>\n\n  <div class=\"p-2.5 rounded-xl bg-[#c9f3f4] border-2 border-[#151b20] text-center font-mono text-xs font-black text-[#0e7490] mb-3 shadow-[2px_2px_0px_#151b20]\">\n    Biased Decision Engine $f(\\mathbf{x})$ Deployed Without Rigorous Dataset Controls\n  </div>\n\n  <div class=\"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 text-xs font-mono mb-3\">\n    <div class=\"p-3 rounded-xl bg-[#ffd8ce] border-2 border-[#151b20] shadow-[2px_2px_0px_#151b20]\">\n      <strong class=\"text-[#991b1b] block mb-1 font-black\">1. Criminal Justice</strong>\n      <span class=\"text-[11px] text-[#7f1d1d] leading-snug block\">Disparate Pre-Trial Detention (COMPAS • Dressel &amp; Farid 2018)</span>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#ffd8ce] border-2 border-[#151b20] shadow-[2px_2px_0px_#151b20]\">\n      <strong class=\"text-[#991b1b] block mb-1 font-black\">2. Healthcare Triage</strong>\n      <span class=\"text-[11px] text-[#7f1d1d] leading-snug block\">Under-Allocation of Complex Care (Obermeyer et al. 2019)</span>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#ffd8ce] border-2 border-[#151b20] shadow-[2px_2px_0px_#151b20]\">\n      <strong class=\"text-[#991b1b] block mb-1 font-black\">3. Financial Lending</strong>\n      <span class=\"text-[11px] text-[#7f1d1d] leading-snug block\">Redlining &amp; Credit Line Ceilings (Apple Card ECOA Inquiry)</span>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#ffd8ce] border-2 border-[#151b20] shadow-[2px_2px_0px_#151b20]\">\n      <strong class=\"text-[#991b1b] block mb-1 font-black\">4. Regulatory Enforcement</strong>\n      <span class=\"text-[11px] text-[#7f1d1d] leading-snug block\">GDPR, EU AI Act Art. 10 &amp; FTC Disgorgement (Selbst 2019)</span>\n    </div>\n  </div>\n\n  <div class=\"grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono\">\n    <div class=\"p-3 rounded-xl bg-[#fff0b9] border-2 border-[#151b20] shadow-[2px_2px_0px_#151b20]\">\n      <strong class=\"text-[#92400e] block mb-0.5 font-black\">Vectors 1–3 ➔ Societal Sink</strong>\n      <span class=\"text-[11px] text-[#78350f]\">Intergenerational Wealth &amp; Clinical Well-Being Depletion</span>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#fff0b9] border-2 border-[#151b20] shadow-[2px_2px_0px_#151b20]\">\n      <strong class=\"text-[#92400e] block mb-0.5 font-black\">Vector 4 ➔ Corporate Liability Sink</strong>\n      <span class=\"text-[11px] text-[#78350f]\">Forced Model Destruction &amp; Catastrophic Revenue Penalties</span>\n    </div>\n  </div>\n</div>\n"
        }
      },
      {
        "id": "s3",
        "title": "Economic Allocative Utility Disparity",
        "type": "equation",
        "solo": {
          "speaker": "Dr. Nova",
          "title": "Quantifying Static Utility Extraction Across Demographic Cohorts",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Let us formalize economic harm mathematically. Consider an institutional allocator distributing mortgages, university seats, or interviews under decision policy Y-hat equals f of X in zero or one.",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "The net expected utility U sub a achieved by demographic group a integrates opportunity gain b times true qualification y of x minus institutional loss c over the selection policy with respect to group feature distribution F sub a. Decomposing the inter-group utility gap Delta U equals U sub 1 minus U sub 0 reveals two drivers: whenever unprivileged candidates suffer suppressed true positive rates T P R zero much lower than T P R one, substantial economic surplus is extracted from Group zero while institutional false positive losses distort risk pricing.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono text-xs font-black text-[#0e7490] uppercase tracking-wider\">Welfare Economics • Static Allocative Extraction</span>\n    <span class=\"px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#c9f3f4] text-[#0e7490] border border-[#151b20]\">$\\Delta U = U_1 - U_0$</span>\n  </div>\n\n  <div class=\"p-4 rounded-xl bg-[#f0f9ff] border-2 border-[#0284c7] mb-3 text-center\">\n    <div class=\"font-mono text-xs font-bold text-[#0369a1] mb-1\">Group Expected Net Social Utility &amp; Utility Extraction Decomposition</div>\n    <div class=\"text-sm sm:text-base font-mono font-black text-[#0c4a6e]\">\n      $$U_a = \\int_{\\mathbf{x}} \\left( b \\cdot y(\\mathbf{x}) - c \\right) \\Pr(\\hat{Y} = 1 \\mid \\mathbf{X} = \\mathbf{x}) \\, dF_a(\\mathbf{x})$$\n    </div>\n    <div class=\"text-xs sm:text-sm font-mono font-bold text-[#0e7490] mt-2 pt-2 border-t border-[#0284c7]/30 overflow-x-auto\">\n      $$\\Delta U = U_1 - U_0 = b\\cdot(\\text{TPR}_1 p_1 - \\text{TPR}_0 p_0) - c\\cdot\\big(\\text{FPR}_1(1-p_1) - \\text{FPR}_0(1-p_0)\\big)$$\n    </div>\n  </div>\n\n  <div class=\"grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono\">\n    <div class=\"p-3 rounded-xl bg-[#ffffff] border-2 border-[#151b20]\">\n      <strong class=\"text-[#15803d] block mb-1\">Qualified Opportunity Gain ($b &gt; 0$)</strong>\n      <p class=\"text-[11px] text-[#475569] leading-relaxed\">\n        Net economic benefit of granting a mortgage, job offer, or treatment to a qualified applicant ($y(\\mathbf{x}) = 1$). Suppressed $\\text{TPR}_0 \\ll \\text{TPR}_1$ directly starves Group $0$ of $b \\cdot \\text{TPR}_0 p_0$ surplus.\n      </p>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#ffffff] border-2 border-[#151b20]\">\n      <strong class=\"text-[#b91c1c] block mb-1\">Erroneous Assignment Loss ($c &gt; 0$)</strong>\n      <p class=\"text-[11px] text-[#475569] leading-relaxed\">\n        Institutional default or misallocation cost paid when $\\hat{Y} = 1$ yet $Y = 0$, scaled by group false positive rate $\\text{FPR}_a$ and negative base rate $(1 - p_a)$.\n      </p>\n    </div>\n  </div>\n</div>\n"
        },
        "duo": {
          "speaker": "Dr. Nova & Kaito",
          "title": "Quantifying Static Utility Extraction Across Demographic Cohorts",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Breaking Delta U down into True Positive opportunity value b versus False Positive loss c makes the economics crystal clear! Under-estimating recall on qualified minority borrowers doesn't just violate fairness norms—it leaves qualified value b on the table!",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Exactly right. Every time T P R sub zero lags behind T P R sub one on equally creditworthy applicants, the allocator artificially extracts opportunity utility Delta U from Group zero. Worse still, those lost approvals don't stay confined to a single period—they compound year after year.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono text-xs font-black text-[#0e7490] uppercase tracking-wider\">Welfare Economics • Static Allocative Extraction</span>\n    <span class=\"px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#c9f3f4] text-[#0e7490] border border-[#151b20]\">$\\Delta U = U_1 - U_0$</span>\n  </div>\n\n  <div class=\"p-4 rounded-xl bg-[#f0f9ff] border-2 border-[#0284c7] mb-3 text-center\">\n    <div class=\"font-mono text-xs font-bold text-[#0369a1] mb-1\">Group Expected Net Social Utility &amp; Utility Extraction Decomposition</div>\n    <div class=\"text-sm sm:text-base font-mono font-black text-[#0c4a6e]\">\n      $$U_a = \\int_{\\mathbf{x}} \\left( b \\cdot y(\\mathbf{x}) - c \\right) \\Pr(\\hat{Y} = 1 \\mid \\mathbf{X} = \\mathbf{x}) \\, dF_a(\\mathbf{x})$$\n    </div>\n    <div class=\"text-xs sm:text-sm font-mono font-bold text-[#0e7490] mt-2 pt-2 border-t border-[#0284c7]/30 overflow-x-auto\">\n      $$\\Delta U = U_1 - U_0 = b\\cdot(\\text{TPR}_1 p_1 - \\text{TPR}_0 p_0) - c\\cdot\\big(\\text{FPR}_1(1-p_1) - \\text{FPR}_0(1-p_0)\\big)$$\n    </div>\n  </div>\n\n  <div class=\"grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono\">\n    <div class=\"p-3 rounded-xl bg-[#ffffff] border-2 border-[#151b20]\">\n      <strong class=\"text-[#15803d] block mb-1\">Qualified Opportunity Gain ($b &gt; 0$)</strong>\n      <p class=\"text-[11px] text-[#475569] leading-relaxed\">\n        Net economic benefit of granting a mortgage, job offer, or treatment to a qualified applicant ($y(\\mathbf{x}) = 1$). Suppressed $\\text{TPR}_0 \\ll \\text{TPR}_1$ directly starves Group $0$ of $b \\cdot \\text{TPR}_0 p_0$ surplus.\n      </p>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#ffffff] border-2 border-[#151b20]\">\n      <strong class=\"text-[#b91c1c] block mb-1\">Erroneous Assignment Loss ($c &gt; 0$)</strong>\n      <p class=\"text-[11px] text-[#475569] leading-relaxed\">\n        Institutional default or misallocation cost paid when $\\hat{Y} = 1$ yet $Y = 0$, scaled by group false positive rate $\\text{FPR}_a$ and negative base rate $(1 - p_a)$.\n      </p>\n    </div>\n  </div>\n</div>\n"
        }
      },
      {
        "id": "s4",
        "title": "Dynamic Intergenerational Wealth Divergence",
        "type": "equation",
        "solo": {
          "speaker": "Dr. Nova",
          "title": "Closed-Form Geometric Series Proof Across Operational Generations",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "When credit approvals, home mortgages, or promotions are allocated repeatedly over time t equals 1 through T, wealth follows a first-order stochastic difference equation: W sub t plus 1 of a equals 1 plus r times W sub t of a, plus opportunity gain b times decision indicator Y-hat sub t, minus baseline living costs c sub L.",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Taking expectations replaces the decision indicator with approval probability p sub a. Unrolling this recurrence relation from initial capital W zero of a over horizon T and summing the finite geometric series yields our closed-form trajectory theorem: expected terminal wealth equals 1 plus r to the T times W zero, plus the geometric annuity factor 1 plus r to the T minus 1 all over r, multiplying net flow b p sub a minus c sub L.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono text-xs font-black text-[#b45309] uppercase tracking-wider\">Stochastic Difference Equation • Exact Derivation</span>\n    <span class=\"px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#fff0b9] text-[#b45309] border border-[#151b20]\">Finite Geometric Series</span>\n  </div>\n\n  <div class=\"p-4 rounded-xl bg-[#fffaf0] border-2 border-[#d97706] mb-3 text-center space-y-2\">\n    <div class=\"font-mono text-xs font-bold text-[#92400e]\">Step 1: One-Period Capital Accumulation &amp; Expectation ($p_a = \\Pr(\\hat{Y}_t = 1 \\mid A = a)$)</div>\n    <div class=\"text-xs sm:text-sm font-mono font-black text-[#78350f]\">\n      $$W_{t+1}(a) = (1 + r)W_t(a) + b \\cdot \\mathbb{I}(\\hat{Y}_t = 1) - c_L \\;\\;\\implies\\;\\; \\mathbb{E}[W_{t+1}(a)] = (1 + r)\\mathbb{E}[W_t(a)] + (b \\cdot p_a - c_L)$$\n    </div>\n    <div class=\"font-mono text-xs font-bold text-[#92400e] pt-2 border-t border-[#d97706]/30\">Step 2: Unrolling &amp; Applying $\\sum_{k=0}^{T-1}(1+r)^k = \\frac{(1+r)^T - 1}{r}$</div>\n    <div class=\"text-sm sm:text-base font-mono font-black text-[#92400e]\">\n      $$\\mathbb{E}[W_T(a)] = (1 + r)^T W_0(a) + \\frac{(1 + r)^T - 1}{r}\\left(b \\cdot p_a - c_L\\right) \\quad \\blacksquare$$\n    </div>\n  </div>\n\n  <div class=\"grid grid-cols-1 md:grid-cols-3 gap-2.5 text-xs font-mono\">\n    <div class=\"p-2.5 rounded-xl bg-[#ffffff] border border-[#151b20]\">\n      <strong class=\"text-[#d97706] block mb-0.5\">$r$: Compound Return</strong>\n      <span class=\"text-[11px] text-[#334155]\">Annual equity/capital yield compounding existing savings across periods.</span>\n    </div>\n    <div class=\"p-2.5 rounded-xl bg-[#ffffff] border border-[#151b20]\">\n      <strong class=\"text-[#0284c7] block mb-0.5\">$b \\cdot p_a - c_L$: Annual Net Flow</strong>\n      <span class=\"text-[11px] text-[#334155]\">Expected economic surplus from approvals less baseline living costs $c_L$.</span>\n    </div>\n    <div class=\"p-2.5 rounded-xl bg-[#ffffff] border border-[#151b20]\">\n      <strong class=\"text-[#dc2626] block mb-0.5\">$\\frac{(1+r)^T - 1}{r}$: Multiplier</strong>\n      <span class=\"text-[11px] text-[#334155]\">Exponential geometric factor amplifying persistent approval bias across $T$ years.</span>\n    </div>\n  </div>\n</div>\n"
        },
        "duo": {
          "speaker": "Dr. Nova & Kaito",
          "title": "Closed-Form Geometric Series Proof Across Operational Generations",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Let me trace why unrolling this recurrence works! In round zero you keep 1 plus r of initial wealth W zero, while every subsequent round k earns an expected net inflow b p sub a minus c sub L that itself keeps compounding for the remaining T minus k years.",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Spot on, Kaito! Collecting those annual cash flows forms a geometric series from k equals zero to T minus 1, which collapses cleanly to 1 plus r to the T minus 1 divided by r. That closed-form theorem gives auditors a deterministic check against Monte Carlo simulations.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono text-xs font-black text-[#b45309] uppercase tracking-wider\">Stochastic Difference Equation • Exact Derivation</span>\n    <span class=\"px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#fff0b9] text-[#b45309] border border-[#151b20]\">Finite Geometric Series</span>\n  </div>\n\n  <div class=\"p-4 rounded-xl bg-[#fffaf0] border-2 border-[#d97706] mb-3 text-center space-y-2\">\n    <div class=\"font-mono text-xs font-bold text-[#92400e]\">Step 1: One-Period Capital Accumulation &amp; Expectation ($p_a = \\Pr(\\hat{Y}_t = 1 \\mid A = a)$)</div>\n    <div class=\"text-xs sm:text-sm font-mono font-black text-[#78350f]\">\n      $$W_{t+1}(a) = (1 + r)W_t(a) + b \\cdot \\mathbb{I}(\\hat{Y}_t = 1) - c_L \\;\\;\\implies\\;\\; \\mathbb{E}[W_{t+1}(a)] = (1 + r)\\mathbb{E}[W_t(a)] + (b \\cdot p_a - c_L)$$\n    </div>\n    <div class=\"font-mono text-xs font-bold text-[#92400e] pt-2 border-t border-[#d97706]/30\">Step 2: Unrolling &amp; Applying $\\sum_{k=0}^{T-1}(1+r)^k = \\frac{(1+r)^T - 1}{r}$</div>\n    <div class=\"text-sm sm:text-base font-mono font-black text-[#92400e]\">\n      $$\\mathbb{E}[W_T(a)] = (1 + r)^T W_0(a) + \\frac{(1 + r)^T - 1}{r}\\left(b \\cdot p_a - c_L\\right) \\quad \\blacksquare$$\n    </div>\n  </div>\n\n  <div class=\"grid grid-cols-1 md:grid-cols-3 gap-2.5 text-xs font-mono\">\n    <div class=\"p-2.5 rounded-xl bg-[#ffffff] border border-[#151b20]\">\n      <strong class=\"text-[#d97706] block mb-0.5\">$r$: Compound Return</strong>\n      <span class=\"text-[11px] text-[#334155]\">Annual equity/capital yield compounding existing savings across periods.</span>\n    </div>\n    <div class=\"p-2.5 rounded-xl bg-[#ffffff] border border-[#151b20]\">\n      <strong class=\"text-[#0284c7] block mb-0.5\">$b \\cdot p_a - c_L$: Annual Net Flow</strong>\n      <span class=\"text-[11px] text-[#334155]\">Expected economic surplus from approvals less baseline living costs $c_L$.</span>\n    </div>\n    <div class=\"p-2.5 rounded-xl bg-[#ffffff] border border-[#151b20]\">\n      <strong class=\"text-[#dc2626] block mb-0.5\">$\\frac{(1+r)^T - 1}{r}$: Multiplier</strong>\n      <span class=\"text-[11px] text-[#334155]\">Exponential geometric factor amplifying persistent approval bias across $T$ years.</span>\n    </div>\n  </div>\n</div>\n"
        }
      },
      {
        "id": "s5",
        "title": "Pitfall: The 66.44x Compounding Divergence Multiplier",
        "type": "pitfall",
        "solo": {
          "speaker": "Dr. Nova",
          "title": "How Modest Allocative Gaps Manufacture Over 2.4x Wealth Chasms",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Subtracting expected Group zero wealth from Group one wealth reveals why static single-round fairness checks dangerously underestimate real-world damage.",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "At an annual capital return r equals five percent over a 30-year mortgage horizon, the annuity multiplier 1.05 to the 30th power minus 1 over 0.05 evaluates to 66.44! That means every dollar difference in annual loan or employment opportunity flow is amplified 66.44 times over three decades. Even starting from unequal or equal initial wealth, a modest approval disparity p zero equals 35 percent versus p one equals 55 percent—with Disparate Impact Ratio 0.64—compounds into a greater than 2.4-times wealth chasm—from 59,829 dollars to 147,878 dollars!",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono text-xs font-black text-[#dc2626] uppercase tracking-wider\">Critical Pitfall • Exponential Horizon Amplification</span>\n    <span class=\"px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#fee2e2] text-[#b91c1c] border border-[#151b20]\">$66.44\\times$ Multiplier</span>\n  </div>\n\n  <div class=\"p-4 rounded-xl bg-[#fff5f5] border-2 border-[#dc2626] mb-3\">\n    <div class=\"font-mono text-xs font-black text-[#991b1b] mb-1\">Intergenerational Wealth Chasm Formula ($r = 5\\%, T = 30\\text{ yrs}$)</div>\n    <div class=\"text-center font-mono font-black text-xs sm:text-sm text-[#7f1d1d] mt-1 py-2 px-2 bg-[#ffffff] rounded-lg border border-[#dc2626]/40 overflow-x-auto\">\n      $$\\mathbb{E}[W_T(1)] - \\mathbb{E}[W_T(0)] = (1 + r)^T\\big(W_0(1) - W_0(0)\\big) + \\underbrace{\\frac{(1 + 0.05)^{30} - 1}{0.05}}_{\\mathbf{66.44\\times\\text{ Amplification}}} b \\cdot (p_1 - p_0)$$\n    </div>\n  </div>\n\n  <div class=\"grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono\">\n    <div class=\"p-3 rounded-xl bg-[#fff0b9] border-2 border-[#151b20]\">\n      <strong class=\"text-[#b45309] block mb-1\">📉 Benchmark 30-Year Chasm ($p_0=0.35, p_1=0.55$)</strong>\n      <span class=\"text-[11px] text-[#78350f] leading-relaxed\">\n        With $b=\\$5\\text{k}, c_L=\\$1.5\\text{k}, W_0(0)=\\$10\\text{k}, W_0(1)=\\$15\\text{k}$ ($\\text{DIR}=0.64$): Year-30 wealth splits to <strong>$\\$59{,}829$ vs. $\\$147{,}878$</strong> — a massive <strong>$2.47\\times$ chasm</strong>! Even with $W_0(0)=W_0(1)$, $p_1 - p_0 = 0.20$ yields $&gt;2.1\\times$ divergence.\n      </span>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#f0f9ff] border-2 border-[#0284c7]\">\n      <strong class=\"text-[#0369a1] block mb-1\">⚠️ Static Audit Blind Spot</strong>\n      <span class=\"text-[11px] text-[#0c4a6e] leading-relaxed\">\n        Product teams measuring single-quarter selection rates overlook how $T$-round asset compounding transforms transient algorithmic denial into locked structural poverty.\n      </span>\n    </div>\n  </div>\n</div>\n"
        },
        "duo": {
          "speaker": "Dr. Nova & Kaito",
          "title": "How Modest Allocative Gaps Manufacture Over 2.4x Wealth Chasms",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Whoa—let me double check that annuity math! At five percent annual return over 30 years, 1.05 raised to 30 is 4.322, minus 1 is 3.322, divided by 0.05 equals 66.44! Even if both communities started at equal initial wealth, losing twenty percentage points of loan approvals gets multiplied sixty-six-fold!",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "And in our baseline mortgage simulation starting with 10,000 dollars versus 15,000 dollars initial capital, Year-30 cumulative wealth splits to 59,829 dollars for Group zero versus 147,878 dollars for Group one—nearly two-and-a-half times apart! Next, let's experiment with Simulator 7.5 Tab A live to see whether equalizing approval rates closes the wealth chasm.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono text-xs font-black text-[#dc2626] uppercase tracking-wider\">Critical Pitfall • Exponential Horizon Amplification</span>\n    <span class=\"px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#fee2e2] text-[#b91c1c] border border-[#151b20]\">$66.44\\times$ Multiplier</span>\n  </div>\n\n  <div class=\"p-4 rounded-xl bg-[#fff5f5] border-2 border-[#dc2626] mb-3\">\n    <div class=\"font-mono text-xs font-black text-[#991b1b] mb-1\">Intergenerational Wealth Chasm Formula ($r = 5\\%, T = 30\\text{ yrs}$)</div>\n    <div class=\"text-center font-mono font-black text-xs sm:text-sm text-[#7f1d1d] mt-1 py-2 px-2 bg-[#ffffff] rounded-lg border border-[#dc2626]/40 overflow-x-auto\">\n      $$\\mathbb{E}[W_T(1)] - \\mathbb{E}[W_T(0)] = (1 + r)^T\\big(W_0(1) - W_0(0)\\big) + \\underbrace{\\frac{(1 + 0.05)^{30} - 1}{0.05}}_{\\mathbf{66.44\\times\\text{ Amplification}}} b \\cdot (p_1 - p_0)$$\n    </div>\n  </div>\n\n  <div class=\"grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono\">\n    <div class=\"p-3 rounded-xl bg-[#fff0b9] border-2 border-[#151b20]\">\n      <strong class=\"text-[#b45309] block mb-1\">📉 Benchmark 30-Year Chasm ($p_0=0.35, p_1=0.55$)</strong>\n      <span class=\"text-[11px] text-[#78350f] leading-relaxed\">\n        With $b=\\$5\\text{k}, c_L=\\$1.5\\text{k}, W_0(0)=\\$10\\text{k}, W_0(1)=\\$15\\text{k}$ ($\\text{DIR}=0.64$): Year-30 wealth splits to <strong>$\\$59{,}829$ vs. $\\$147{,}878$</strong> — a massive <strong>$2.47\\times$ chasm</strong>! Even with $W_0(0)=W_0(1)$, $p_1 - p_0 = 0.20$ yields $&gt;2.1\\times$ divergence.\n      </span>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#f0f9ff] border-2 border-[#0284c7]\">\n      <strong class=\"text-[#0369a1] block mb-1\">⚠️ Static Audit Blind Spot</strong>\n      <span class=\"text-[11px] text-[#0c4a6e] leading-relaxed\">\n        Product teams measuring single-quarter selection rates overlook how $T$-round asset compounding transforms transient algorithmic denial into locked structural poverty.\n      </span>\n    </div>\n  </div>\n</div>\n"
        }
      },
      {
        "id": "s6",
        "title": "Interactive Lab: Intergenerational Wealth Compounding Studio",
        "type": "interactive_lab",
        "solo": {
          "speaker": "Dr. Nova",
          "title": "Simulator 7.5 Tab A: Intergenerational Wealth Compounding",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Welcome to Interactive Lab 1: Simulator 7.5 Tab A, the Intergenerational Wealth Compounding Studio. In the live workbench below, we simulate Group zero in amber against Group one in blue across a 30-year economic lifecycle.",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "At default parameters—35 percent approval for Group zero versus 55 percent for Group one, with five percent annual return—observe the Disparate Impact Ratio at 0.64 violating the EEOC 80-percent rule, producing a 2.47-times wealth chasm. Drag the capital return rate r upward to watch exponential divergence accelerate, or click Align Approval Parity to equalize approvals at 55 percent and verify how the wealth gap collapses toward baseline initial capital.",
              "dock": "sim"
            }
          ],
          "contentHtml": "\n<div class=\"p-4 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-2 border-b-2 border-[#151b20]/15 flex-wrap gap-2\">\n    <div class=\"flex items-center gap-2 font-mono font-black text-xs md:text-sm text-[#b45309] uppercase tracking-wide\">\n      <span>🔬</span> Interactive Lab 1: Intergenerational Wealth Compounding Studio\n    </div>\n    <span class=\"px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black bg-[#fff0b9] text-[#92400e] border-2 border-[#151b20]\">\n      Simulator 7.5 Tab A\n    </span>\n  </div>\n\n  <p class=\"text-xs text-[#151b20]/80 font-sans mb-3\">\n    Simulate how disparate loan or employment approval rates ($p_0$ vs. $p_1$) compound exponentially over a $T = 30$-year lifecycle under capital return $r$.\n  </p>\n\n  <div class=\"p-3 rounded-lg bg-[#fffaf0] border border-[#d97706] text-xs font-mono text-[#78350f] mb-2\">\n    <strong>Lab Objectives:</strong>\n    <ol class=\"list-decimal pl-5 space-y-1 mt-1\">\n      <li>Verify default adverse impact ($p_0 = 0.35, p_1 = 0.55, r = 5.0\\%$): $\\text{DIR} = 0.64$ yields Year-30 ratio <strong>$2.47\\times$</strong> ($\\$59{,}829$ vs. $\\$147{,}878$).</li>\n      <li>Increase annual capital return $r$ toward $8.0\\%$ to watch the compounded dollar chasm expand exponentially.</li>\n      <li>Click <strong>Align Approval Parity ($p_0 = p_1 = 0.55$)</strong> to bring $\\text{DIR} = 1.00$ and compress the ratio toward $1.17\\times$.</li>\n    </ol>\n  </div>\n</div>\n"
        },
        "duo": {
          "speaker": "Dr. Nova & Kaito",
          "title": "Simulator 7.5 Tab A: Intergenerational Wealth Compounding",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Here is Simulator 7.5 Tab A live! At 35 percent versus 55 percent loan approvals, look at that widening dashed red vertical gap between Group zero's amber line and Group one's blue trajectory at Year 30!",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Watch how the compounding difference equation drives the curve upward smoothly for Group one while Group zero stalls near 59,829 dollars. Try increasing return rate r up to eight percent, then click Align Approval Parity to see how restoring equal selection rates immediately eliminates the flow extraction.",
              "dock": "sim"
            }
          ],
          "contentHtml": "\n<div class=\"p-4 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-2 border-b-2 border-[#151b20]/15 flex-wrap gap-2\">\n    <div class=\"flex items-center gap-2 font-mono font-black text-xs md:text-sm text-[#b45309] uppercase tracking-wide\">\n      <span>🔬</span> Interactive Lab 1: Intergenerational Wealth Compounding Studio\n    </div>\n    <span class=\"px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black bg-[#fff0b9] text-[#92400e] border-2 border-[#151b20]\">\n      Simulator 7.5 Tab A\n    </span>\n  </div>\n\n  <p class=\"text-xs text-[#151b20]/80 font-sans mb-3\">\n    Simulate how disparate loan or employment approval rates ($p_0$ vs. $p_1$) compound exponentially over a $T = 30$-year lifecycle under capital return $r$.\n  </p>\n\n  <div class=\"p-3 rounded-lg bg-[#fffaf0] border border-[#d97706] text-xs font-mono text-[#78350f] mb-2\">\n    <strong>Lab Objectives:</strong>\n    <ol class=\"list-decimal pl-5 space-y-1 mt-1\">\n      <li>Verify default adverse impact ($p_0 = 0.35, p_1 = 0.55, r = 5.0\\%$): $\\text{DIR} = 0.64$ yields Year-30 ratio <strong>$2.47\\times$</strong> ($\\$59{,}829$ vs. $\\$147{,}878$).</li>\n      <li>Increase annual capital return $r$ toward $8.0\\%$ to watch the compounded dollar chasm expand exponentially.</li>\n      <li>Click <strong>Align Approval Parity ($p_0 = p_1 = 0.55$)</strong> to bring $\\text{DIR} = 1.00$ and compress the ratio toward $1.17\\times$.</li>\n    </ol>\n  </div>\n</div>\n"
        }
      },
      {
        "id": "s7",
        "title": "Active Checkpoint 1: Intergenerational Wealth Divergence",
        "type": "checkpoint",
        "solo": {
          "speaker": "Dr. Nova",
          "title": "Active Checkpoint 1: Geometric Series Wealth Amplification",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Let us verify your economic intuition in Active Checkpoint 1. In our closed-form wealth equation, why does an initially modest credit approval gap of 0.20 at a 5 percent return rate over 30 years expand into an overwhelming structural chasm?",
              "dock": "quiz"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-2 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono text-xs font-black text-[#0e7490] uppercase tracking-wider\">Active Checkpoint 7.5.1 • Intergenerational Wealth Multiplier</span>\n    <span class=\"px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black bg-[#c9f3f4] text-[#0e7490] border-2 border-[#151b20]\">Self-Assessment</span>\n  </div>\n  <p class=\"text-xs text-[#151b20] font-sans mb-1\">\n    Derive the exact closed-form geometric factor amplifying flow disparity $b \\cdot (p_1 - p_0)$ over $T = 30$ years in the interactive checkpoint dock below:\n  </p>\n</div>\n"
        },
        "duo": {
          "speaker": "Dr. Nova & Kaito",
          "title": "Active Checkpoint 1: Geometric Series Wealth Amplification",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Checkpoint 1 time! Evaluate the geometric annuity multiplier over 30 years at r equal 0.05 in our closed-form formula.",
              "dock": "quiz"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Examine all four hypotheses in the checkpoint dock below and select the rigorous explanation for why small annual disparities magnify exponentially.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-2 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono text-xs font-black text-[#0e7490] uppercase tracking-wider\">Active Checkpoint 7.5.1 • Intergenerational Wealth Multiplier</span>\n    <span class=\"px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black bg-[#c9f3f4] text-[#0e7490] border-2 border-[#151b20]\">Self-Assessment</span>\n  </div>\n  <p class=\"text-xs text-[#151b20] font-sans mb-1\">\n    Derive the exact closed-form geometric factor amplifying flow disparity $b \\cdot (p_1 - p_0)$ over $T = 30$ years in the interactive checkpoint dock below:\n  </p>\n</div>\n"
        }
      },
      {
        "id": "s8",
        "title": "Chouldechova's Impossibility Law for Recidivism Scoring",
        "type": "equation",
        "solo": {
          "speaker": "Dr. Nova",
          "title": "Why Calibrated Risk Scores Mandate Unequal False Positive Rates",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "We now turn from economic compounding to a profound algebraic boundary in criminal justice and clinical risk prediction, proven by Alexandra Chouldechova in 2017.",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "For any demographic cohort a with positive base rate p sub a, False Positive Rate equals base rate odds p sub a over 1 minus p sub a, times 1 minus Positive Predictive Value over Positive Predictive Value, times True Positive Rate. Consequently, whenever an imperfect score enforces equal predictive calibration P P V zero equals P P V one equals v and equal sensitivity T P R zero equals T P R one across groups with unequal recidivism base rates p zero greater than p one, the ratio of False Positive Rates strictly equals the ratio of base-rate odds. The COMPAS racial disparity exposed by ProPublica was therefore not an isolated engineering glitch—it was a mathematically unavoidable theorem.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono text-xs font-black text-[#0e7490] uppercase tracking-wider\">Algebraic Boundary • Chouldechova (2017) &amp; COMPAS</span>\n    <span class=\"px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#ffd8ce] text-[#b91c1c] border border-[#151b20]\">Impossibility Identity</span>\n  </div>\n\n  <div class=\"p-4 rounded-xl bg-[#f0f9ff] border-2 border-[#0284c7] mb-3 text-center space-y-2\">\n    <div class=\"font-mono text-xs font-bold text-[#0369a1]\">Chouldechova Calibration-to-Error Identity</div>\n    <div class=\"text-sm sm:text-base font-mono font-black text-[#0c4a6e]\">\n      $$\\text{FPR}_a = \\left(\\frac{p_a}{1 - p_a}\\right) \\left(\\frac{1 - \\text{PPV}_a}{\\text{PPV}_a}\\right) \\cdot \\text{TPR}_a$$\n    </div>\n    <div class=\"text-xs sm:text-sm font-mono font-black text-[#b91c1c] pt-2 border-t border-[#0284c7]/30\">\n      $$\\text{If } \\text{PPV}_0 = \\text{PPV}_1 = v \\;\\text{ and }\\; \\text{TPR}_0 = \\text{TPR}_1:\\qquad \\frac{\\text{FPR}_0}{\\text{FPR}_1} = \\frac{\\text{Odds}(p_0)}{\\text{Odds}(p_1)} \\implies p_0 &gt; p_1 \\implies \\text{FPR}_0 &gt; \\text{FPR}_1$$\n    </div>\n  </div>\n\n  <div class=\"grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono\">\n    <div class=\"p-3 rounded-xl bg-[#fff5f5] border border-[#dc2626]\">\n      <strong class=\"text-[#b91c1c] block mb-1\">ProPublica COMPAS Operating Point ($p_0=0.52, p_1=0.32$)</strong>\n      <span class=\"text-[11px] text-[#7f1d1d]\">At calibrated $\\text{PPV}=0.62, \\text{TPR}=0.68$: $\\text{FPR}_0 = \\mathbf{45.2\\%}$ vs. $\\text{FPR}_1 = \\mathbf{19.6\\%}$ — a mathematically mandated <strong>$2.30\\times$ disparity</strong>!</span>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#ecfdf5] border border-[#059669]\">\n      <strong class=\"text-[#047857] block mb-1\">Structural Legal Meaning (Dressel &amp; Farid 2018)</strong>\n      <span class=\"text-[11px] text-[#065f46]\">Because historical arrest base rates differ ($p_0 \\neq p_1$), calibrated risk instruments mathematically guarantee elevated wrongful detention for higher-base-rate cohorts.</span>\n    </div>\n  </div>\n</div>\n"
        },
        "duo": {
          "speaker": "Dr. Nova & Kaito",
          "title": "Why Calibrated Risk Scores Mandate Unequal False Positive Rates",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Look at how stunningly simple that algebraic identity is, Dr. Nova! Northpointe claimed COMPAS was fair because PPV calibration equaled roughly 62 percent across Black and White defendants, while ProPublica showed Black non-reoffenders suffered over twice the False Positive Rate!",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "And both sides were measuring true numbers! Under Chouldechova's law, whenever PPV and TPR are held equal across groups with different arrest base rates—52 percent versus 32 percent—the constant calibration factor cancels out when dividing FPR sub zero by FPR sub one, leaving purely the odds ratio of base rates: 2.30 times higher false positives for Group zero!",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono text-xs font-black text-[#0e7490] uppercase tracking-wider\">Algebraic Boundary • Chouldechova (2017) &amp; COMPAS</span>\n    <span class=\"px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#ffd8ce] text-[#b91c1c] border border-[#151b20]\">Impossibility Identity</span>\n  </div>\n\n  <div class=\"p-4 rounded-xl bg-[#f0f9ff] border-2 border-[#0284c7] mb-3 text-center space-y-2\">\n    <div class=\"font-mono text-xs font-bold text-[#0369a1]\">Chouldechova Calibration-to-Error Identity</div>\n    <div class=\"text-sm sm:text-base font-mono font-black text-[#0c4a6e]\">\n      $$\\text{FPR}_a = \\left(\\frac{p_a}{1 - p_a}\\right) \\left(\\frac{1 - \\text{PPV}_a}{\\text{PPV}_a}\\right) \\cdot \\text{TPR}_a$$\n    </div>\n    <div class=\"text-xs sm:text-sm font-mono font-black text-[#b91c1c] pt-2 border-t border-[#0284c7]/30\">\n      $$\\text{If } \\text{PPV}_0 = \\text{PPV}_1 = v \\;\\text{ and }\\; \\text{TPR}_0 = \\text{TPR}_1:\\qquad \\frac{\\text{FPR}_0}{\\text{FPR}_1} = \\frac{\\text{Odds}(p_0)}{\\text{Odds}(p_1)} \\implies p_0 &gt; p_1 \\implies \\text{FPR}_0 &gt; \\text{FPR}_1$$\n    </div>\n  </div>\n\n  <div class=\"grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono\">\n    <div class=\"p-3 rounded-xl bg-[#fff5f5] border border-[#dc2626]\">\n      <strong class=\"text-[#b91c1c] block mb-1\">ProPublica COMPAS Operating Point ($p_0=0.52, p_1=0.32$)</strong>\n      <span class=\"text-[11px] text-[#7f1d1d]\">At calibrated $\\text{PPV}=0.62, \\text{TPR}=0.68$: $\\text{FPR}_0 = \\mathbf{45.2\\%}$ vs. $\\text{FPR}_1 = \\mathbf{19.6\\%}$ — a mathematically mandated <strong>$2.30\\times$ disparity</strong>!</span>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#ecfdf5] border border-[#059669]\">\n      <strong class=\"text-[#047857] block mb-1\">Structural Legal Meaning (Dressel &amp; Farid 2018)</strong>\n      <span class=\"text-[11px] text-[#065f46]\">Because historical arrest base rates differ ($p_0 \\neq p_1$), calibrated risk instruments mathematically guarantee elevated wrongful detention for higher-base-rate cohorts.</span>\n    </div>\n  </div>\n</div>\n"
        }
      },
      {
        "id": "s9",
        "title": "Global Legal Liabilities & Regulatory Frameworks",
        "type": "concept",
        "solo": {
          "speaker": "Dr. Nova",
          "title": "EU AI Act Article 10, GDPR Article 22, ECOA, and FTC Section 5",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Modern regulatory authorities treat biased datasets as actionable statutory violations rather than abstract ethical debates.",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "First, Article 10 of the 2024 European Union AI Act mandates that High-Risk AI training data be relevant, representative, complete, and audited against discriminatory errors—backed by maximum fines of 35 million euros or 7 percent of global annual turnover. Second, GDPR Article 22 grants individuals protection against solely automated decisions producing legal effects, carrying penalties up to 20 million euros or 4 percent turnover. Third, US Title VII and the Equal Credit Opportunity Act prohibit facially neutral policies generating disparate impact. And fourth, FTC Act Section 5 enforces the devastating remedy of Algorithmic Disgorgement.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono text-xs font-black text-[#b91c1c] uppercase tracking-wider\">Regulatory Jurisprudence • Binding Statutory Exposure</span>\n    <span class=\"px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#ffd8ce] text-[#b91c1c] border border-[#151b20]\">4 Enforcement Pillars</span>\n  </div>\n\n  <div class=\"grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono\">\n    <div class=\"p-3 rounded-xl bg-[#fff5f5] border-2 border-[#dc2626] shadow-[2px_2px_0px_#151b20]\">\n      <div class=\"flex items-center justify-between mb-1\">\n        <strong class=\"text-[#991b1b] font-black\">1. EU AI Act (2024) — Article 10</strong>\n        <span class=\"text-[10px] font-black px-1.5 py-0.5 rounded bg-[#fee2e2] text-[#b91c1c]\">€35M / 7% Turnover</span>\n      </div>\n      <span class=\"text-[11px] text-[#7f1d1d] block leading-relaxed\">\n        Data Governance mandate: High-Risk training sets must be relevant, representative, complete, and examined for biases before deployment.\n      </span>\n    </div>\n\n    <div class=\"p-3 rounded-xl bg-[#fffaf0] border-2 border-[#d97706] shadow-[2px_2px_0px_#151b20]\">\n      <div class=\"flex items-center justify-between mb-1\">\n        <strong class=\"text-[#b45309] font-black\">2. GDPR Article 22 (EU)</strong>\n        <span class=\"text-[10px] font-black px-1.5 py-0.5 rounded bg-[#fff0b9] text-[#92400e]\">€20M / 4% Turnover</span>\n      </div>\n      <span class=\"text-[11px] text-[#78350f] block leading-relaxed\">\n        Right not to be bound by solely automated decisions with legal or credit effects; mandates human intervention &amp; explainability.\n      </span>\n    </div>\n\n    <div class=\"p-3 rounded-xl bg-[#f0f9ff] border-2 border-[#0284c7] shadow-[2px_2px_0px_#151b20]\">\n      <div class=\"flex items-center justify-between mb-1\">\n        <strong class=\"text-[#0369a1] font-black\">3. US Title VII &amp; ECOA</strong>\n        <span class=\"text-[10px] font-black px-1.5 py-0.5 rounded bg-[#c9f3f4] text-[#0e7490]\">Consent Decrees</span>\n      </div>\n      <span class=\"text-[11px] text-[#0c4a6e] block leading-relaxed\">\n        Prohibits facially neutral models inflicting disparate impact in hiring, lending, or housing (Barocas &amp; Selbst 2016).\n      </span>\n    </div>\n\n    <div class=\"p-3 rounded-xl bg-[#151b20] text-[#fffdf7] border-2 border-[#151b20] shadow-[2px_2px_0px_#dc2626]\">\n      <div class=\"flex items-center justify-between mb-1\">\n        <strong class=\"text-[#ffc83e] font-black\">4. FTC Act Section 5 (US)</strong>\n        <span class=\"text-[10px] font-black px-1.5 py-0.5 rounded bg-[#dc2626] text-white\">Model Destruction</span>\n      </div>\n      <span class=\"text-[11px] text-[#e2e8f0] block leading-relaxed\">\n        Enforces <strong>Algorithmic Disgorgement</strong>: compulsory erasure of tainted datasets, trained neural weights, APIs, and embeddings.\n      </span>\n    </div>\n  </div>\n</div>\n"
        },
        "duo": {
          "speaker": "Dr. Nova & Kaito",
          "title": "EU AI Act Article 10, GDPR Article 22, ECOA, and FTC Section 5",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Look at Article 10 of the EU AI Act right there: up to 35 million euros or 7 percent of global annual turnover, explicitly targeting data collection lineage, representation, and bias assessment! It directly elevates dataset engineering into executive legal risk!",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "And alongside US Title VII and ECOA disparate impact doctrine, the Federal Trade Commission goes even further than monetary fines: under Section 5, regulators can force Algorithmic Disgorgement—eradicating your intellectual property altogether.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono text-xs font-black text-[#b91c1c] uppercase tracking-wider\">Regulatory Jurisprudence • Binding Statutory Exposure</span>\n    <span class=\"px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#ffd8ce] text-[#b91c1c] border border-[#151b20]\">4 Enforcement Pillars</span>\n  </div>\n\n  <div class=\"grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono\">\n    <div class=\"p-3 rounded-xl bg-[#fff5f5] border-2 border-[#dc2626] shadow-[2px_2px_0px_#151b20]\">\n      <div class=\"flex items-center justify-between mb-1\">\n        <strong class=\"text-[#991b1b] font-black\">1. EU AI Act (2024) — Article 10</strong>\n        <span class=\"text-[10px] font-black px-1.5 py-0.5 rounded bg-[#fee2e2] text-[#b91c1c]\">€35M / 7% Turnover</span>\n      </div>\n      <span class=\"text-[11px] text-[#7f1d1d] block leading-relaxed\">\n        Data Governance mandate: High-Risk training sets must be relevant, representative, complete, and examined for biases before deployment.\n      </span>\n    </div>\n\n    <div class=\"p-3 rounded-xl bg-[#fffaf0] border-2 border-[#d97706] shadow-[2px_2px_0px_#151b20]\">\n      <div class=\"flex items-center justify-between mb-1\">\n        <strong class=\"text-[#b45309] font-black\">2. GDPR Article 22 (EU)</strong>\n        <span class=\"text-[10px] font-black px-1.5 py-0.5 rounded bg-[#fff0b9] text-[#92400e]\">€20M / 4% Turnover</span>\n      </div>\n      <span class=\"text-[11px] text-[#78350f] block leading-relaxed\">\n        Right not to be bound by solely automated decisions with legal or credit effects; mandates human intervention &amp; explainability.\n      </span>\n    </div>\n\n    <div class=\"p-3 rounded-xl bg-[#f0f9ff] border-2 border-[#0284c7] shadow-[2px_2px_0px_#151b20]\">\n      <div class=\"flex items-center justify-between mb-1\">\n        <strong class=\"text-[#0369a1] font-black\">3. US Title VII &amp; ECOA</strong>\n        <span class=\"text-[10px] font-black px-1.5 py-0.5 rounded bg-[#c9f3f4] text-[#0e7490]\">Consent Decrees</span>\n      </div>\n      <span class=\"text-[11px] text-[#0c4a6e] block leading-relaxed\">\n        Prohibits facially neutral models inflicting disparate impact in hiring, lending, or housing (Barocas &amp; Selbst 2016).\n      </span>\n    </div>\n\n    <div class=\"p-3 rounded-xl bg-[#151b20] text-[#fffdf7] border-2 border-[#151b20] shadow-[2px_2px_0px_#dc2626]\">\n      <div class=\"flex items-center justify-between mb-1\">\n        <strong class=\"text-[#ffc83e] font-black\">4. FTC Act Section 5 (US)</strong>\n        <span class=\"text-[10px] font-black px-1.5 py-0.5 rounded bg-[#dc2626] text-white\">Model Destruction</span>\n      </div>\n      <span class=\"text-[11px] text-[#e2e8f0] block leading-relaxed\">\n        Enforces <strong>Algorithmic Disgorgement</strong>: compulsory erasure of tainted datasets, trained neural weights, APIs, and embeddings.\n      </span>\n    </div>\n  </div>\n</div>\n"
        }
      },
      {
        "id": "s10",
        "title": "The Threat of Algorithmic Disgorgement",
        "type": "concept",
        "solo": {
          "speaker": "Dr. Nova",
          "title": "Total IP Forfeiture: Precedents & Operational Breakdown",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Why does an FTC Algorithmic Disgorgement order terrify chief technology officers far more than a conventional monetary fine? Because an accounting fine is amortized as operating expense, whereas disgorgement destroys the asset itself.",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "An enforcement order mandates three irreversible steps: complete deletion of the underlying tainted dataset D, compulsory destruction of all trained model weights W, code, and latent embeddings derived from it, and immediate invalidation of downstream commercial APIs. Landmark precedents include FTC v. Everalbum in 2021—eradicating facial recognition models trained without opt-in consent—and FTC v. Kurbo and Weight Watchers in 2022 over unconsented minor data. A disgorged model cannot simply be patched; engineering must rebuild from scratch.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono text-xs font-black text-[#b91c1c] uppercase tracking-wider\">FTC Doctrine • Model &amp; Weight Destruction</span>\n    <span class=\"px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#ffd8ce] text-[#b91c1c] border border-[#151b20]\">Zero-Patch Remedy</span>\n  </div>\n\n  <div class=\"grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs font-mono mb-3\">\n    <div class=\"p-3 rounded-xl bg-[#ffd8ce] border-2 border-[#151b20] text-center shadow-[2px_2px_0px_#151b20]\">\n      <strong class=\"text-[#991b1b] block mb-1\">1. Purge Dataset $\\mathcal{D}$</strong>\n      <span class=\"text-[11px] text-[#7f1d1d]\">Delete all tainted, unlawfully collected, or biased training corpora.</span>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#ffd8ce] border-2 border-[#151b20] text-center shadow-[2px_2px_0px_#151b20]\">\n      <strong class=\"text-[#991b1b] block mb-1\">2. Destroy Weights $W$</strong>\n      <span class=\"text-[11px] text-[#7f1d1d]\">Forfeit parameters, neural architectures &amp; latent embeddings built on $\\mathcal{D}$.</span>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#ffd8ce] border-2 border-[#151b20] text-center shadow-[2px_2px_0px_#151b20]\">\n      <strong class=\"text-[#991b1b] block mb-1\">3. Pull Downstream APIs</strong>\n      <span class=\"text-[11px] text-[#7f1d1d]\">Decommission revenue products relying on tainted model checkpoints.</span>\n    </div>\n  </div>\n\n  <div class=\"grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono\">\n    <div class=\"p-3 rounded-xl bg-[#fffaf0] border-2 border-[#d97706]\">\n      <strong class=\"text-[#b45309] block mb-1\">⚖️ FTC v. Everalbum (2021)</strong>\n      <span class=\"text-[11px] text-[#78350f]\">Facial recognition algorithms trained on consumer photos without explicit opt-in consent ➔ ordered full destruction of all derived weights and code.</span>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#fffaf0] border-2 border-[#d97706]\">\n      <strong class=\"text-[#b45309] block mb-1\">⚖️ FTC v. Kurbo / Weight Watchers (2022)</strong>\n      <span class=\"text-[11px] text-[#78350f]\">Ordered erasure of every ML algorithm developed using data from children under 13 lacking verifiable parental consent (Selbst 2019).</span>\n    </div>\n  </div>\n</div>\n"
        },
        "duo": {
          "speaker": "Dr. Nova & Kaito",
          "title": "Total IP Forfeiture: Precedents & Operational Breakdown",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Wait—notice how teams used to assume you could just drop the problematic rows from S3 and fine-tune an existing foundation checkpoint! Why doesn't FTC Algorithmic Disgorgement permit simple fine-tuning?",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Because the trained weights W and latent embeddings themselves represent the 'ill-gotten gains' parameterized directly from tainted data D! Just as Everalbum and Weight Watchers learned, once tainted examples shape your model parameters, regulators order the destruction of every downstream artifact—wiping out years of R-and-D capital overnight.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono text-xs font-black text-[#b91c1c] uppercase tracking-wider\">FTC Doctrine • Model &amp; Weight Destruction</span>\n    <span class=\"px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#ffd8ce] text-[#b91c1c] border border-[#151b20]\">Zero-Patch Remedy</span>\n  </div>\n\n  <div class=\"grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs font-mono mb-3\">\n    <div class=\"p-3 rounded-xl bg-[#ffd8ce] border-2 border-[#151b20] text-center shadow-[2px_2px_0px_#151b20]\">\n      <strong class=\"text-[#991b1b] block mb-1\">1. Purge Dataset $\\mathcal{D}$</strong>\n      <span class=\"text-[11px] text-[#7f1d1d]\">Delete all tainted, unlawfully collected, or biased training corpora.</span>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#ffd8ce] border-2 border-[#151b20] text-center shadow-[2px_2px_0px_#151b20]\">\n      <strong class=\"text-[#991b1b] block mb-1\">2. Destroy Weights $W$</strong>\n      <span class=\"text-[11px] text-[#7f1d1d]\">Forfeit parameters, neural architectures &amp; latent embeddings built on $\\mathcal{D}$.</span>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#ffd8ce] border-2 border-[#151b20] text-center shadow-[2px_2px_0px_#151b20]\">\n      <strong class=\"text-[#991b1b] block mb-1\">3. Pull Downstream APIs</strong>\n      <span class=\"text-[11px] text-[#7f1d1d]\">Decommission revenue products relying on tainted model checkpoints.</span>\n    </div>\n  </div>\n\n  <div class=\"grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono\">\n    <div class=\"p-3 rounded-xl bg-[#fffaf0] border-2 border-[#d97706]\">\n      <strong class=\"text-[#b45309] block mb-1\">⚖️ FTC v. Everalbum (2021)</strong>\n      <span class=\"text-[11px] text-[#78350f]\">Facial recognition algorithms trained on consumer photos without explicit opt-in consent ➔ ordered full destruction of all derived weights and code.</span>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#fffaf0] border-2 border-[#d97706]\">\n      <strong class=\"text-[#b45309] block mb-1\">⚖️ FTC v. Kurbo / Weight Watchers (2022)</strong>\n      <span class=\"text-[11px] text-[#78350f]\">Ordered erasure of every ML algorithm developed using data from children under 13 lacking verifiable parental consent (Selbst 2019).</span>\n    </div>\n  </div>\n</div>\n"
        }
      },
      {
        "id": "s11",
        "title": "Target Proxies & Facially Neutral Liability",
        "type": "concept",
        "solo": {
          "speaker": "Dr. Nova",
          "title": "Obermeyer Healthcare Cost Proxies & Barocas-Selbst Doctrine",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Engineers frequently assume that stripping protected attributes like race or gender from training columns creates immunity against disparate impact lawsuits. Both empirical science and legal jurisprudence prove otherwise.",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "In Science 2019, Obermeyer and colleagues dissected a nationwide clinical triage algorithm managing high-risk care enrollment for millions of patients. Even though race was explicitly excluded, the model predicted historical medical expenditure C as a target proxy for true illness severity Y. Because systemic access barriers cause lower spending on Black patients at identical biological sickness levels, Black patients had to be significantly sicker to receive the same triage risk score. Under Barocas and Selbst's Disparate Impact doctrine, facially neutral proxy features trigger strict legal liability under Title VII and ECOA.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono text-xs font-black text-[#0284c7] uppercase tracking-wider\">Proxy Mechanics • Fair-Through-Unawareness Failure</span>\n    <span class=\"px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#c9f3f4] text-[#0e7490] border border-[#151b20]\">Label &amp; Feature Leakage</span>\n  </div>\n\n  <div class=\"grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono\">\n    <div class=\"p-4 rounded-xl bg-[#f0f9ff] border-2 border-[#0284c7] shadow-[2px_2px_0px_#151b20]\">\n      <strong class=\"text-[#0369a1] block text-sm mb-1.5\">1. Target Variable Proxy (Obermeyer 2019)</strong>\n      <div class=\"p-2 rounded bg-[#ffffff] border border-[#0284c7]/40 text-[#0c4a6e] mb-2\">\n        $$\\text{Target } C = \\text{Healthcare Cost} \\neq Y = \\text{Biological Illness}$$\n      </div>\n      <span class=\"text-[11px] text-[#0c4a6e] block leading-relaxed\">\n        Despite excluding race from features $\\mathbf{X}$, predicting expenditure $C$ inherited healthcare access inequality, systematically suppressing Black patient triage enrollment by over half unless bio-markers replaced cost!\n      </span>\n    </div>\n\n    <div class=\"p-4 rounded-xl bg-[#fffaf0] border-2 border-[#d97706] shadow-[2px_2px_0px_#151b20]\">\n      <strong class=\"text-[#b45309] block text-sm mb-1.5\">2. Disparate Impact Doctrine (Barocas 2016)</strong>\n      <div class=\"p-2 rounded bg-[#ffffff] border border-[#d97706]/40 text-[#78350f] mb-2\">\n        $$\\text{Proxy}(\\text{Zip, Arrests, Filing}) \\implies \\text{Redundant Encoding of } A$$\n      </div>\n      <span class=\"text-[11px] text-[#78350f] block leading-relaxed\">\n        Omitting $A$ (\"fairness through unawareness\") offers <strong>zero defense</strong> under US Title VII or ECOA whenever correlated features yield $\\text{DIR} &lt; 0.80$ or $\\text{FPR}_0 \\gg \\text{FPR}_1$.\n      </span>\n    </div>\n  </div>\n</div>\n"
        },
        "duo": {
          "speaker": "Dr. Nova & Kaito",
          "title": "Obermeyer Healthcare Cost Proxies & Barocas-Selbst Doctrine",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "That Obermeyer 2019 paper is such a wake-up call, Dr. Nova! Even when engineers delete every demographic column from the CSV, choosing dollars spent C instead of physiological lab biomarkers Y encodes systemic barriers directly inside the loss function!",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "And legal regulators don't accept 'the model never saw race' as an excuse! Under Title VII and ECOA, disparate impact scrutiny examines actual allocative outcomes and error asymmetries—which is why Chouldechova's law and EU Article 10 demand proactive statistical audits.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono text-xs font-black text-[#0284c7] uppercase tracking-wider\">Proxy Mechanics • Fair-Through-Unawareness Failure</span>\n    <span class=\"px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#c9f3f4] text-[#0e7490] border border-[#151b20]\">Label &amp; Feature Leakage</span>\n  </div>\n\n  <div class=\"grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono\">\n    <div class=\"p-4 rounded-xl bg-[#f0f9ff] border-2 border-[#0284c7] shadow-[2px_2px_0px_#151b20]\">\n      <strong class=\"text-[#0369a1] block text-sm mb-1.5\">1. Target Variable Proxy (Obermeyer 2019)</strong>\n      <div class=\"p-2 rounded bg-[#ffffff] border border-[#0284c7]/40 text-[#0c4a6e] mb-2\">\n        $$\\text{Target } C = \\text{Healthcare Cost} \\neq Y = \\text{Biological Illness}$$\n      </div>\n      <span class=\"text-[11px] text-[#0c4a6e] block leading-relaxed\">\n        Despite excluding race from features $\\mathbf{X}$, predicting expenditure $C$ inherited healthcare access inequality, systematically suppressing Black patient triage enrollment by over half unless bio-markers replaced cost!\n      </span>\n    </div>\n\n    <div class=\"p-4 rounded-xl bg-[#fffaf0] border-2 border-[#d97706] shadow-[2px_2px_0px_#151b20]\">\n      <strong class=\"text-[#b45309] block text-sm mb-1.5\">2. Disparate Impact Doctrine (Barocas 2016)</strong>\n      <div class=\"p-2 rounded bg-[#ffffff] border border-[#d97706]/40 text-[#78350f] mb-2\">\n        $$\\text{Proxy}(\\text{Zip, Arrests, Filing}) \\implies \\text{Redundant Encoding of } A$$\n      </div>\n      <span class=\"text-[11px] text-[#78350f] block leading-relaxed\">\n        Omitting $A$ (\"fairness through unawareness\") offers <strong>zero defense</strong> under US Title VII or ECOA whenever correlated features yield $\\text{DIR} &lt; 0.80$ or $\\text{FPR}_0 \\gg \\text{FPR}_1$.\n      </span>\n    </div>\n  </div>\n</div>\n"
        }
      },
      {
        "id": "s12",
        "title": "Interactive Lab: Chouldechova & Regulatory Risk Studio",
        "type": "interactive_lab",
        "solo": {
          "speaker": "Dr. Nova",
          "title": "Simulator 7.5 Tab B: Chouldechova & Disgorgement Risk",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Welcome to Interactive Lab 2: Simulator 7.5 Tab B, the Chouldechova Impossibility and Regulatory Liability Studio. Along the black inevitability curve below, False Positive Rate scales proportionally with base-rate odds while enforcing calibrated Positive Predictive Value.",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "At default recidivism rates—52 percent for Group zero and 32 percent for Group one with 62 percent PPV calibration—Group zero's False Positive Rate climbs to 45.2 percent, creating a 2.30-times disparity ratio and flagging critical EU AI Act Article 10 and FTC Disgorgement alerts. Adjust the base-rate sliders or click Equal Base Rates to verify the exact algebraic point where FPR disparity converges to 1.00 times.",
              "dock": "sim"
            }
          ],
          "contentHtml": "\n<div class=\"p-4 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-2 border-b-2 border-[#151b20]/15 flex-wrap gap-2\">\n    <div class=\"flex items-center gap-2 font-mono font-black text-xs md:text-sm text-[#b91c1c] uppercase tracking-wide\">\n      <span>🔬</span> Interactive Lab 2: Chouldechova Impossibility &amp; Disgorgement Risk Studio\n    </div>\n    <span class=\"px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black bg-[#ffd8ce] text-[#b91c1c] border-2 border-[#151b20]\">\n      Simulator 7.5 Tab B\n    </span>\n  </div>\n\n  <p class=\"text-xs text-[#151b20]/80 font-sans mb-3\">\n    Test Chouldechova's Law ($\\text{FPR} \\propto \\text{Odds}(p)$) across varying cohort base rates ($p_0, p_1$) and calibrated PPV while auditing EU AI Act Article 10 and FTC Disgorgement exposure.\n  </p>\n\n  <div class=\"p-3 rounded-lg bg-[#fff5f5] border border-[#dc2626] text-xs font-mono text-[#7f1d1d] mb-2\">\n    <strong>Lab Objectives:</strong>\n    <ol class=\"list-decimal pl-5 space-y-1 mt-1\">\n      <li>Verify default COMPAS-like calibration ($p_0=0.52, p_1=0.32, \\text{PPV}=0.62$): $\\text{FPR}_0 = \\mathbf{45.2\\%}$, Theoretical FPR Disparity = <strong>$2.30\\times$</strong> (<code>CRITICAL RISK</code>).</li>\n      <li>Vary enforced $\\text{PPV}$ toward $0.85$ to inspect how higher precision compresses absolute $\\text{FPR}$ yet leaves the $\\text{FPR}_0/\\text{FPR}_1 = 2.30\\times$ ratio invariant!</li>\n      <li>Click <strong>Test Equal Base Rates ($p_0 = p_1 = 40\\%$)</strong> to collapse FPR disparity to $1.00\\times$.</li>\n    </ol>\n  </div>\n</div>\n"
        },
        "duo": {
          "speaker": "Dr. Nova & Kaito",
          "title": "Simulator 7.5 Tab B: Chouldechova & Disgorgement Risk",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Look at Tab B! Even if we slide enforced calibration PPV all the way up from 62 percent to 80 percent, both orange and blue dots slide down the curve together—but the Theoretical FPR Disparity ratio stays locked at 2.30 times!",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Precisely because PPV cancels inside the ratio, Kaito! Try dragging Group zero and Group one base rates closer, or hit Test Equal Base Rates at 40 percent each to observe the exact boundary where Chouldechova disparity disappears.",
              "dock": "sim"
            }
          ],
          "contentHtml": "\n<div class=\"p-4 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-2 border-b-2 border-[#151b20]/15 flex-wrap gap-2\">\n    <div class=\"flex items-center gap-2 font-mono font-black text-xs md:text-sm text-[#b91c1c] uppercase tracking-wide\">\n      <span>🔬</span> Interactive Lab 2: Chouldechova Impossibility &amp; Disgorgement Risk Studio\n    </div>\n    <span class=\"px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black bg-[#ffd8ce] text-[#b91c1c] border-2 border-[#151b20]\">\n      Simulator 7.5 Tab B\n    </span>\n  </div>\n\n  <p class=\"text-xs text-[#151b20]/80 font-sans mb-3\">\n    Test Chouldechova's Law ($\\text{FPR} \\propto \\text{Odds}(p)$) across varying cohort base rates ($p_0, p_1$) and calibrated PPV while auditing EU AI Act Article 10 and FTC Disgorgement exposure.\n  </p>\n\n  <div class=\"p-3 rounded-lg bg-[#fff5f5] border border-[#dc2626] text-xs font-mono text-[#7f1d1d] mb-2\">\n    <strong>Lab Objectives:</strong>\n    <ol class=\"list-decimal pl-5 space-y-1 mt-1\">\n      <li>Verify default COMPAS-like calibration ($p_0=0.52, p_1=0.32, \\text{PPV}=0.62$): $\\text{FPR}_0 = \\mathbf{45.2\\%}$, Theoretical FPR Disparity = <strong>$2.30\\times$</strong> (<code>CRITICAL RISK</code>).</li>\n      <li>Vary enforced $\\text{PPV}$ toward $0.85$ to inspect how higher precision compresses absolute $\\text{FPR}$ yet leaves the $\\text{FPR}_0/\\text{FPR}_1 = 2.30\\times$ ratio invariant!</li>\n      <li>Click <strong>Test Equal Base Rates ($p_0 = p_1 = 40\\%$)</strong> to collapse FPR disparity to $1.00\\times$.</li>\n    </ol>\n  </div>\n</div>\n"
        }
      },
      {
        "id": "s13",
        "title": "Active Checkpoint 2: Chouldechova's Impossibility Law",
        "type": "checkpoint",
        "solo": {
          "speaker": "Dr. Nova",
          "title": "Active Checkpoint 2: Predictive Parity vs. Equal FPR",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Let us test your algebraic mastery in Active Checkpoint 2. Under Chouldechova's Impossibility Theorem, why can an imperfect bail risk instrument never simultaneously satisfy equal Predictive Parity and Equal False Positive Rates when two demographic groups experience unequal underlying recidivism base rates?",
              "dock": "quiz"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-2 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono text-xs font-black text-[#0e7490] uppercase tracking-wider\">Active Checkpoint 7.5.2 • Chouldechova's Impossibility Theorem</span>\n    <span class=\"px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black bg-[#c9f3f4] text-[#0e7490] border-2 border-[#151b20]\">Self-Assessment</span>\n  </div>\n  <p class=\"text-xs text-[#151b20] font-sans mb-1\">\n    Apply the exact calibration-to-FPR identity explored in Simulator 7.5 Tab B in the interactive checkpoint dock below:\n  </p>\n</div>\n"
        },
        "duo": {
          "speaker": "Dr. Nova & Kaito",
          "title": "Active Checkpoint 2: Predictive Parity vs. Equal FPR",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Checkpoint 2 challenges your understanding of Chouldechova's proof! Remember what happened in Tab B when we fixed PPV and TPR constant while holding Group zero base rate above Group one.",
              "dock": "quiz"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Inspect the algebraic ratio in the checkpoint dock below and pick the exact theorem proving why unequal False Positive Rates become unavoidable.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-2 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono text-xs font-black text-[#0e7490] uppercase tracking-wider\">Active Checkpoint 7.5.2 • Chouldechova's Impossibility Theorem</span>\n    <span class=\"px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black bg-[#c9f3f4] text-[#0e7490] border-2 border-[#151b20]\">Self-Assessment</span>\n  </div>\n  <p class=\"text-xs text-[#151b20] font-sans mb-1\">\n    Apply the exact calibration-to-FPR identity explored in Simulator 7.5 Tab B in the interactive checkpoint dock below:\n  </p>\n</div>\n"
        }
      },
      {
        "id": "s14",
        "title": "Societal & Regulatory Compliance Architecture",
        "type": "concept",
        "solo": {
          "speaker": "Dr. Nova",
          "title": "Five-Stage Defensible Governance Against Fines & Disgorgement",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "How do enterprise engineering organizations insulate themselves simultaneously against intergenerational disparate impact lawsuits, EU AI Act fines, and FTC model destruction? Through a rigorous five-stage governance architecture.",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Stage 1 quarantines raw data before training to certify opt-in consent and data provenance, eliminating FTC disgorgement exposure at the ingestion perimeter. Stage 2 satisfies EU AI Act Article 10 by auditing representativeness, target proxies, and dataset lineage. Stage 3 evaluates allocative utility extraction and 30-year compounding gaps alongside DIR thresholds. Stage 4 documents Chouldechova base-rate trade-offs transparently for risk officers. Finally, Stage 5 deploys GDPR Article 22 human-in-the-loop appeal workflows before any legally binding credit, bail, or hiring decision executes.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono text-xs font-black text-[#0e7490] uppercase tracking-wider\">Enterprise Defense • Legal-Technical Control Plane</span>\n    <span class=\"px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#e7f4c8] text-[#15803d] border border-[#151b20]\">5 Compliance Gates</span>\n  </div>\n\n  <div class=\"space-y-2 text-xs font-mono\">\n    <div class=\"p-2.5 rounded-xl bg-[#ffd8ce] border border-[#dc2626] flex items-center justify-between\">\n      <span><strong>1. Consent &amp; Lineage Quarantine:</strong> Reject unconsented/tainted rows pre-training (FTC Sec. 5 guard)</span>\n      <span class=\"text-[#991b1b] font-black\">Anti-Disgorgement</span>\n    </div>\n    <div class=\"p-2.5 rounded-xl bg-[#fffaf0] border border-[#d97706] flex items-center justify-between\">\n      <span><strong>2. Representativeness &amp; Proxy Audit:</strong> Verify coverage &amp; replace proxies $C \\to Y$ (EU AI Act Art. 10)</span>\n      <span class=\"text-[#b45309] font-black\">Article 10 Gate</span>\n    </div>\n    <div class=\"p-2.5 rounded-xl bg-[#f0f9ff] border border-[#0284c7] flex items-center justify-between\">\n      <span><strong>3. Wealth &amp; Utility Audit:</strong> Simulate $\\Delta U$, $\\text{DIR} \\ge 0.80$, &amp; 30-yr $\\frac{(1+r)^T-1}{r}$ compounding</span>\n      <span class=\"text-[#0369a1] font-black\">ECOA / Title VII</span>\n    </div>\n    <div class=\"p-2.5 rounded-xl bg-[#ecfdf5] border border-[#059669] flex items-center justify-between\">\n      <span><strong>4. Chouldechova Ratio Disclosure:</strong> Compute $\\text{Odds}(p_0)/\\text{Odds}(p_1)$ &amp; justify PPV vs. FPR choice</span>\n      <span class=\"text-[#047857] font-black\">Fairness Contract</span>\n    </div>\n    <div class=\"p-2.5 rounded-xl bg-[#151b20] text-[#fffdf7] border border-[#151b20] flex items-center justify-between\">\n      <span><strong>5. Human Review &amp; Contestability:</strong> Meaningful explanation &amp; override before legal effects</span>\n      <span class=\"text-[#ffc83e] font-black\">GDPR Art. 22</span>\n    </div>\n  </div>\n</div>\n"
        },
        "duo": {
          "speaker": "Dr. Nova & Kaito",
          "title": "Five-Stage Defensible Governance Against Fines & Disgorgement",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "I really appreciate why Consent Quarantine sits at Gate 1 before training even begins! Because once tainted data updates your model's gradient weights, you can never un-ring that bell under FTC Section 5!",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Exactly right, Kaito! Combining Gate 1 consent quarantine with EU Article 10 dataset representation checks, 30-year compounding utility simulations, Chouldechova disclosures, and GDPR Article 22 human review transforms legal statutes into verifiable engineering gates.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono text-xs font-black text-[#0e7490] uppercase tracking-wider\">Enterprise Defense • Legal-Technical Control Plane</span>\n    <span class=\"px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#e7f4c8] text-[#15803d] border border-[#151b20]\">5 Compliance Gates</span>\n  </div>\n\n  <div class=\"space-y-2 text-xs font-mono\">\n    <div class=\"p-2.5 rounded-xl bg-[#ffd8ce] border border-[#dc2626] flex items-center justify-between\">\n      <span><strong>1. Consent &amp; Lineage Quarantine:</strong> Reject unconsented/tainted rows pre-training (FTC Sec. 5 guard)</span>\n      <span class=\"text-[#991b1b] font-black\">Anti-Disgorgement</span>\n    </div>\n    <div class=\"p-2.5 rounded-xl bg-[#fffaf0] border border-[#d97706] flex items-center justify-between\">\n      <span><strong>2. Representativeness &amp; Proxy Audit:</strong> Verify coverage &amp; replace proxies $C \\to Y$ (EU AI Act Art. 10)</span>\n      <span class=\"text-[#b45309] font-black\">Article 10 Gate</span>\n    </div>\n    <div class=\"p-2.5 rounded-xl bg-[#f0f9ff] border border-[#0284c7] flex items-center justify-between\">\n      <span><strong>3. Wealth &amp; Utility Audit:</strong> Simulate $\\Delta U$, $\\text{DIR} \\ge 0.80$, &amp; 30-yr $\\frac{(1+r)^T-1}{r}$ compounding</span>\n      <span class=\"text-[#0369a1] font-black\">ECOA / Title VII</span>\n    </div>\n    <div class=\"p-2.5 rounded-xl bg-[#ecfdf5] border border-[#059669] flex items-center justify-between\">\n      <span><strong>4. Chouldechova Ratio Disclosure:</strong> Compute $\\text{Odds}(p_0)/\\text{Odds}(p_1)$ &amp; justify PPV vs. FPR choice</span>\n      <span class=\"text-[#047857] font-black\">Fairness Contract</span>\n    </div>\n    <div class=\"p-2.5 rounded-xl bg-[#151b20] text-[#fffdf7] border border-[#151b20] flex items-center justify-between\">\n      <span><strong>5. Human Review &amp; Contestability:</strong> Meaningful explanation &amp; override before legal effects</span>\n      <span class=\"text-[#ffc83e] font-black\">GDPR Art. 22</span>\n    </div>\n  </div>\n</div>\n"
        }
      },
      {
        "id": "s15",
        "title": "Case Studies: Netherlands SyRI & Apple Card",
        "type": "case_study",
        "solo": {
          "speaker": "Dr. Nova",
          "title": "Human Devastation & Constitutional Reversal in Production AI",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Let us examine two landmark empirical case studies illustrating how statistical dataset bias escalates into constitutional injunctions and financial enforcement.",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "First, in the 2020 Netherlands SyRI Welfare Fraud Scandal, Dutch authorities deployed the Systeem Risico Indicatie risk model trained predominantly on low-income immigrant neighborhoods. SyRI manufactured thousands of false-positive fraud flags, triggering aggressive tax clawbacks, frozen accounts, and unpayable debt—until The Hague District Court struck it down in 2020 for violating Article 8 of the European Convention on Human Rights. Second, in 2019, Apple Card underwriters assigned husbands 10 to 20 times higher credit limits than wives filing identical joint tax returns, even with higher female FICO scores, sparking formal Equal Credit Opportunity Act regulatory probes.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono text-xs font-black text-[#b91c1c] uppercase tracking-wider\">Empirical Evidence • Court Rulings &amp; Credit Inquiries</span>\n    <span class=\"px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#fee2e2] text-[#b91c1c] border border-[#151b20]\">Landmark Precedents</span>\n  </div>\n\n  <div class=\"grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono\">\n    <div class=\"p-4 rounded-xl bg-[#fff5f5] border-2 border-[#dc2626] shadow-[3px_3px_0px_#151b20]\">\n      <strong class=\"text-[#991b1b] block text-sm mb-2\">1. Netherlands SyRI Welfare Scandal (2020)</strong>\n      <div class=\"p-2.5 rounded-lg bg-[#ffffff] border border-[#dc2626]/40 space-y-1 text-[11px] text-[#334155]\">\n        <div>• <strong>Bias Root:</strong> Trained disproportionately on low-income immigrant neighborhoods</div>\n        <div>• <strong>Real Harm:</strong> False-positive fraud flags ➔ tax clawbacks, seized accounts &amp; ruinous debt</div>\n        <div>• <strong>Court Ruling:</strong> <span class=\"text-[#dc2626] font-black\">Struck down (Article 8 ECHR Violation)</span></div>\n      </div>\n      <p class=\"text-[11px] text-[#7f1d1d] mt-2 leading-relaxed\">\n        The Hague District Court (2020) banned opaque automated welfare profiling lacking statistical accountability.\n      </p>\n    </div>\n\n    <div class=\"p-4 rounded-xl bg-[#fffaf0] border-2 border-[#d97706] shadow-[3px_3px_0px_#151b20]\">\n      <strong class=\"text-[#b45309] block text-sm mb-2\">2. Apple Card Gender Credit Disparity (2019)</strong>\n      <div class=\"p-2.5 rounded-lg bg-[#ffffff] border border-[#d97706]/40 space-y-1 text-[11px] text-[#334155]\">\n        <div>• <strong>Context:</strong> Spouses filing joint tax returns with shared household assets</div>\n        <div>• <strong>Disparity:</strong> <span class=\"text-[#dc2626] font-black\">$10\\times$ to $20\\times$ higher credit limits</span> for husbands</div>\n        <div>• <strong>Contradiction:</strong> Occurred even when wives held higher independent FICO scores</div>\n      </div>\n      <p class=\"text-[11px] text-[#78350f] mt-2 leading-relaxed\">\n        Triggered formal <strong>ECOA</strong> regulatory probes against Goldman Sachs despite black-box gender omission.\n      </p>\n    </div>\n  </div>\n</div>\n"
        },
        "duo": {
          "speaker": "Dr. Nova & Kaito",
          "title": "Human Devastation & Constitutional Reversal in Production AI",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "The SyRI ruling from The Hague District Court sends such an unmistakable message! Training exclusively on marginalized neighborhoods manufactured false positives that devastated families—and the court didn't merely fine the deployment, it invalidated it under Article 8 of the European Convention on Human Rights!",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "And Apple Card showed the exact private-sector mirror under US ECOA! Granting husbands 10-to-20 times larger credit limits despite joint assets and lower FICO scores proves that opaque machine learning proxies cannot shield banks from disparate impact investigations.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono text-xs font-black text-[#b91c1c] uppercase tracking-wider\">Empirical Evidence • Court Rulings &amp; Credit Inquiries</span>\n    <span class=\"px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#fee2e2] text-[#b91c1c] border border-[#151b20]\">Landmark Precedents</span>\n  </div>\n\n  <div class=\"grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono\">\n    <div class=\"p-4 rounded-xl bg-[#fff5f5] border-2 border-[#dc2626] shadow-[3px_3px_0px_#151b20]\">\n      <strong class=\"text-[#991b1b] block text-sm mb-2\">1. Netherlands SyRI Welfare Scandal (2020)</strong>\n      <div class=\"p-2.5 rounded-lg bg-[#ffffff] border border-[#dc2626]/40 space-y-1 text-[11px] text-[#334155]\">\n        <div>• <strong>Bias Root:</strong> Trained disproportionately on low-income immigrant neighborhoods</div>\n        <div>• <strong>Real Harm:</strong> False-positive fraud flags ➔ tax clawbacks, seized accounts &amp; ruinous debt</div>\n        <div>• <strong>Court Ruling:</strong> <span class=\"text-[#dc2626] font-black\">Struck down (Article 8 ECHR Violation)</span></div>\n      </div>\n      <p class=\"text-[11px] text-[#7f1d1d] mt-2 leading-relaxed\">\n        The Hague District Court (2020) banned opaque automated welfare profiling lacking statistical accountability.\n      </p>\n    </div>\n\n    <div class=\"p-4 rounded-xl bg-[#fffaf0] border-2 border-[#d97706] shadow-[3px_3px_0px_#151b20]\">\n      <strong class=\"text-[#b45309] block text-sm mb-2\">2. Apple Card Gender Credit Disparity (2019)</strong>\n      <div class=\"p-2.5 rounded-lg bg-[#ffffff] border border-[#d97706]/40 space-y-1 text-[11px] text-[#334155]\">\n        <div>• <strong>Context:</strong> Spouses filing joint tax returns with shared household assets</div>\n        <div>• <strong>Disparity:</strong> <span class=\"text-[#dc2626] font-black\">$10\\times$ to $20\\times$ higher credit limits</span> for husbands</div>\n        <div>• <strong>Contradiction:</strong> Occurred even when wives held higher independent FICO scores</div>\n      </div>\n      <p class=\"text-[11px] text-[#78350f] mt-2 leading-relaxed\">\n        Triggered formal <strong>ECOA</strong> regulatory probes against Goldman Sachs despite black-box gender omission.\n      </p>\n    </div>\n  </div>\n</div>\n"
        }
      },
      {
        "id": "s16",
        "title": "Production Implementation: Pydantic V2 & 4 Cardinal Rules",
        "type": "capstone",
        "solo": {
          "speaker": "Dr. Nova",
          "title": "Production Verification Contracts & Key Takeaways",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "In production datasets and auditing suites, teams operationalize societal and legal governance through typed Pydantic V2 verification contracts—validating IntergenerationalWealthAudit against closed-form series expansion, ChouldechovaTheoremAudit against base-rate odds ratios, and RegulatoryLiabilityAudit against statutory breach triggers.",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Carry forward our Four Cardinal Rules of Lesson 7.5: First, never assess lending or hiring disparity statically alone—simulate the 66.44-times 30-year compounding multiplier. Second, quantify Chouldechova's odds ratio whenever base rates diverge across demographic cohorts. Third, quarantine unconsented or discriminatory data prior to training to avoid FTC Algorithmic Disgorgement. And fourth, enforce EU AI Act Article 10, GDPR Article 22, and ECOA compliance via automated Pydantic V2 contracts. Thank you for completing Lesson 7.5!",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono text-xs font-black text-[#151b20] uppercase tracking-wider\">Production Capstone • Pydantic V2 Verification &amp; 4 Cardinal Rules</span>\n    <span class=\"px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#ffc83e] text-[#151b20] border border-[#151b20]\">Lesson 7.5 Complete</span>\n  </div>\n\n  <div class=\"grid grid-cols-1 md:grid-cols-2 gap-3 mb-3 text-xs font-mono\">\n    <div class=\"p-3 rounded-xl bg-[#fffaf0] border-2 border-[#d97706]\">\n      <strong class=\"text-[#b45309] block mb-1\">1. Audit Compounding Horizons</strong>\n      <span class=\"text-[11px] text-[#78350f]\">Simulate $\\frac{(1+r)^T-1}{r}$ multipliers ($66.44\\times$ over $30\\text{ yrs}$) so modest $\\text{DIR}$ breaches never masquerade as harmless gaps.</span>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#f0f9ff] border-2 border-[#0284c7]\">\n      <strong class=\"text-[#0369a1] block mb-1\">2. Compute Chouldechova Ratios</strong>\n      <span class=\"text-[11px] text-[#0c4a6e]\">Whenever base rates differ ($p_0 \\neq p_1$), calibrating $\\text{PPV}$ enforces $\\frac{\\text{FPR}_0}{\\text{FPR}_1} = \\frac{\\text{Odds}(p_0)}{\\text{Odds}(p_1)}$.</span>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#fff5f5] border-2 border-[#dc2626]\">\n      <strong class=\"text-[#b91c1c] block mb-1\">3. Quarantine Against Disgorgement</strong>\n      <span class=\"text-[11px] text-[#7f1d1d]\">Verify explicit consent &amp; clean lineage pre-training—disgorged neural weights cannot be patched!</span>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#ecfdf5] border-2 border-[#059669]\">\n      <strong class=\"text-[#047857] block mb-1\">4. Enforce Pydantic V2 Statutory Gates</strong>\n      <span class=\"text-[11px] text-[#065f46]\">Automate EU AI Act Art. 10 (€35M/7%), GDPR Art. 22 &amp; ECOA checks directly inside release pipelines.</span>\n    </div>\n  </div>\n\n  <div class=\"p-3 rounded-lg bg-[#151b20] text-[#fffdf7] font-mono text-[11px] leading-relaxed\">\n    <span class=\"text-[#ffc83e] font-bold\"># Production Societal &amp; Legal Verification (test_ch7_p5_pydantic.py)</span><br>\n    assert wealth_res.closed_form_exact, \"Wealth closed-form check failed!\"<br>\n    assert chould_res.impossibility_proven and reg_res.eu_ai_act_violation\n  </div>\n</div>\n"
        },
        "duo": {
          "speaker": "Dr. Nova & Kaito",
          "title": "Production Verification Contracts & Key Takeaways",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Connecting intergenerational compounding math, Chouldechova's odds law, and EU AI Act or FTC disgorgement liabilities straight into typed Pydantic V2 test suites makes accountability measurable right in CI/CD!",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Indeed, Kaito! Every organization deploying high-risk models owes both its users and engineers exact auditability across IntergenerationalWealthAudit, ChouldechovaTheoremAudit, and RegulatoryLiabilityAudit.",
              "dock": "main"
            },
            {
              "speaker": "Kaito",
              "text": "Coming up next in Lesson 7.6, we tackle the full spectrum of Fairness Definitions, Impossibility Theorems, and Multi-Objective Trade-offs! Thank you for joining Lesson 7.5!",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono text-xs font-black text-[#151b20] uppercase tracking-wider\">Production Capstone • Pydantic V2 Verification &amp; 4 Cardinal Rules</span>\n    <span class=\"px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#ffc83e] text-[#151b20] border border-[#151b20]\">Lesson 7.5 Complete</span>\n  </div>\n\n  <div class=\"grid grid-cols-1 md:grid-cols-2 gap-3 mb-3 text-xs font-mono\">\n    <div class=\"p-3 rounded-xl bg-[#fffaf0] border-2 border-[#d97706]\">\n      <strong class=\"text-[#b45309] block mb-1\">1. Audit Compounding Horizons</strong>\n      <span class=\"text-[11px] text-[#78350f]\">Simulate $\\frac{(1+r)^T-1}{r}$ multipliers ($66.44\\times$ over $30\\text{ yrs}$) so modest $\\text{DIR}$ breaches never masquerade as harmless gaps.</span>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#f0f9ff] border-2 border-[#0284c7]\">\n      <strong class=\"text-[#0369a1] block mb-1\">2. Compute Chouldechova Ratios</strong>\n      <span class=\"text-[11px] text-[#0c4a6e]\">Whenever base rates differ ($p_0 \\neq p_1$), calibrating $\\text{PPV}$ enforces $\\frac{\\text{FPR}_0}{\\text{FPR}_1} = \\frac{\\text{Odds}(p_0)}{\\text{Odds}(p_1)}$.</span>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#fff5f5] border-2 border-[#dc2626]\">\n      <strong class=\"text-[#b91c1c] block mb-1\">3. Quarantine Against Disgorgement</strong>\n      <span class=\"text-[11px] text-[#7f1d1d]\">Verify explicit consent &amp; clean lineage pre-training—disgorged neural weights cannot be patched!</span>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#ecfdf5] border-2 border-[#059669]\">\n      <strong class=\"text-[#047857] block mb-1\">4. Enforce Pydantic V2 Statutory Gates</strong>\n      <span class=\"text-[11px] text-[#065f46]\">Automate EU AI Act Art. 10 (€35M/7%), GDPR Art. 22 &amp; ECOA checks directly inside release pipelines.</span>\n    </div>\n  </div>\n\n  <div class=\"p-3 rounded-lg bg-[#151b20] text-[#fffdf7] font-mono text-[11px] leading-relaxed\">\n    <span class=\"text-[#ffc83e] font-bold\"># Production Societal &amp; Legal Verification (test_ch7_p5_pydantic.py)</span><br>\n    assert wealth_res.closed_form_exact, \"Wealth closed-form check failed!\"<br>\n    assert chould_res.impossibility_proven and reg_res.eu_ai_act_violation\n  </div>\n</div>\n"
        }
      }
    ]
  },
  "ch7_p6": {
    "chapter": 7,
    "part": 6,
    "key": "ch7_p6",
    "index": "Lesson 6 of 10",
    "lessonTitle": "Fairness Definitions, Impossibility Theorems, and Trade-offs",
    "title": "Fairness Definitions, Impossibility Theorems, and Trade-offs",
    "badge": "16 Masterclass Slides • Socratic Dialogue • Interactive Sandbox",
    "description": "The Kleinberg-Chouldechova Impossibility Theorem, Three Pillars of Group Fairness, Lipschitz Metric Continuity, Counterfactual DAGs, and the Fairness-Accuracy Pareto Frontier.",
    "slides": [
      {
        "id": "s1",
        "title": "Fairness Definitions, Impossibility Theorems, and Trade-offs",
        "type": "title",
        "solo": {
          "speaker": "Dr. Nova (Senior Architect)",
          "title": "Fairness Definitions, Impossibility Theorems, and Trade-offs",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Welcome to Lesson 7.6 of Dataset Fundamentals: Fairness Definitions, Impossibility Theorems, and Trade-offs. In Lesson 7.5, we traced how bias compounds across generations and triggers regulatory disgorgement. Today, we confront the mathematical core of algorithmic fairness.",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "A pervasive misconception in applied machine learning assumes that with enough training data and optimal architectures, an algorithm can satisfy all intuitive fairness goals. In 2016 and 2017, foundational theorems by Kleinberg, Mullainathan, Raghavan, and Chouldechova proved that the three primary families of group fairness—Independence, Separation, and Sufficiency—are mutually exclusive whenever demographic cohorts exhibit unequal ground-truth base rates. We will rigorously dissect this trilemma, derive its algebraic proofs, explore Lipschitz individual fairness and Pearlian causal counterfactuals, and map the Pareto frontier.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-6 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[6px_6px_0px_#151b20] text-center my-3\">\n  <div class=\"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c9f3f4] border-2 border-[#151b20] text-[#0e7490] font-mono text-xs font-bold uppercase tracking-wider mb-3\">\n    <span>Track 7 • Dataset Bias &amp; Fairness • Lesson 7.6</span>\n  </div>\n  <h1 class=\"text-2xl sm:text-3xl font-black text-[#151b20] tracking-tight mb-2\">\n    Fairness Definitions, Impossibility Theorems &amp; Trade-offs\n  </h1>\n  <p class=\"text-sm sm:text-base text-[#475569] font-medium max-w-2xl mx-auto leading-relaxed\">\n    Kleinberg-Chouldechova Impossibility Theorem, the Three Pillars of Group Fairness, Lipschitz Continuity, Counterfactual DAGs, and the Accuracy-Fairness Pareto Frontier.\n  </p>\n  <div class=\"grid grid-cols-1 sm:grid-cols-4 gap-3 mt-5 max-w-4xl mx-auto text-left font-mono text-xs\">\n    <div class=\"p-3 rounded-xl bg-[#c9f3f4] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20]\">\n      <strong class=\"text-[#0e7490] block mb-1 font-black\">1. The Trilemma</strong>\n      <span class=\"text-[11px] text-[#151b20] leading-snug\">Independence, Separation, and Sufficiency cannot simultaneously hold when $p_0 \\ne p_1$.</span>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#fff0b9] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20]\">\n      <strong class=\"text-[#b45309] block mb-1 font-black\">2. Algebraic Proof</strong>\n      <span class=\"text-[11px] text-[#151b20] leading-snug\">Closed-form derivation tying equal PPV directly to $\\text{FPR}_0 / \\text{FPR}_1 = \\text{Odds}(p_0)/\\text{Odds}(p_1)$.</span>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#ffd8ce] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20]\">\n      <strong class=\"text-[#b91c1c] block mb-1 font-black\">3. Beyond Groups</strong>\n      <span class=\"text-[11px] text-[#151b20] leading-snug\">Lipschitz individual fairness $D_{\\mathcal{Y}} \\le L d_{\\mathcal{X}}$ and causal counterfactual invariance.</span>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#e7f4c8] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20]\">\n      <strong class=\"text-[#15803d] block mb-1 font-black\">4. Pareto Frontier</strong>\n      <span class=\"text-[11px] text-[#151b20] leading-snug\">Cost of Fairness trade-offs under Lagrangian regularization $\\min \\mathcal{L} + \\lambda \\mathcal{D}$.</span>\n    </div>\n  </div>\n</div>\n"
        },
        "duo": {
          "speaker": "Dr. Nova & Kaito (Pair Lecture)",
          "title": "Fairness Definitions, Impossibility Theorems, and Trade-offs",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Welcome to Lesson 7.6! Today, Kaito and I unpack the mathematical frontiers of fairness definitions and their inescapable trade-offs.",
              "dock": "main"
            },
            {
              "speaker": "Kaito",
              "text": "Wait—when engineers hear 'impossibility theorem,' they often assume it means we just haven't invented a clever enough loss function yet! Is fairness truly an impossible engineering optimization problem?",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "It is algebraically impossible to satisfy every definition at once, Kaito! As Kleinberg and Chouldechova proved, different fairness metrics encode mutually contradictory moral and legal philosophies. Today we learn how to analyze the trilemma rigorously and navigate the Pareto trade-offs.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-6 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[6px_6px_0px_#151b20] text-center my-3\">\n  <div class=\"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c9f3f4] border-2 border-[#151b20] text-[#0e7490] font-mono text-xs font-bold uppercase tracking-wider mb-3\">\n    <span>Track 7 • Lesson 7.6 • Fairness Definitions &amp; Impossibility</span>\n  </div>\n  <h1 class=\"text-2xl sm:text-3xl font-black text-[#151b20] tracking-tight mb-2\">\n    Fairness Definitions, Impossibility Theorems &amp; Trade-offs\n  </h1>\n  <p class=\"text-sm sm:text-base text-[#475569] font-medium max-w-2xl mx-auto leading-relaxed\">\n    Kleinberg-Chouldechova Impossibility Theorem, the Three Pillars of Group Fairness, Lipschitz Continuity, Counterfactual DAGs, and the Accuracy-Fairness Pareto Frontier.\n  </p>\n  <div class=\"grid grid-cols-1 sm:grid-cols-4 gap-3 mt-5 max-w-4xl mx-auto text-left font-mono text-xs\">\n    <div class=\"p-3 rounded-xl bg-[#c9f3f4] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20]\">\n      <strong class=\"text-[#0e7490] block mb-1 font-black\">1. The Trilemma</strong>\n      <span class=\"text-[11px] text-[#151b20] leading-snug\">Independence, Separation, and Sufficiency cannot simultaneously hold when $p_0 \\ne p_1$.</span>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#fff0b9] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20]\">\n      <strong class=\"text-[#b45309] block mb-1 font-black\">2. Algebraic Proof</strong>\n      <span class=\"text-[11px] text-[#151b20] leading-snug\">Closed-form derivation tying equal PPV directly to $\\text{FPR}_0 / \\text{FPR}_1 = \\text{Odds}(p_0)/\\text{Odds}(p_1)$.</span>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#ffd8ce] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20]\">\n      <strong class=\"text-[#b91c1c] block mb-1 font-black\">3. Beyond Groups</strong>\n      <span class=\"text-[11px] text-[#151b20] leading-snug\">Lipschitz individual fairness $D_{\\mathcal{Y}} \\le L d_{\\mathcal{X}}$ and causal counterfactual invariance.</span>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#e7f4c8] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20]\">\n      <strong class=\"text-[#15803d] block mb-1 font-black\">4. Pareto Frontier</strong>\n      <span class=\"text-[11px] text-[#151b20] leading-snug\">Cost of Fairness trade-offs under Lagrangian regularization $\\min \\mathcal{L} + \\lambda \\mathcal{D}$.</span>\n    </div>\n  </div>\n</div>\n"
        }
      },
      {
        "id": "s2",
        "title": "The Kleinberg-Chouldechova Fairness Trilemma",
        "type": "concept",
        "solo": {
          "speaker": "Dr. Nova",
          "title": "Mutually Exclusive Conditions Under Unequal Base Rates",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Let us formalize the central trilemma. When demographic groups exhibit unequal ground-truth base rates—meaning the prior probability of the positive class differs across cohorts—three intuitive criteria collide head-on.",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Condition 1 is Sufficiency, requiring calibrated risk scores where an 80 percent prediction represents an 80 percent probability of default or recidivism across all groups. Condition 2 is Separation on negatives, requiring equal False Positive Rates. Condition 3 is Separation on positives, requiring equal False Negative Rates. As Jon Kleinberg and Alexandra Chouldechova demonstrated, any imperfect statistical classifier can satisfy at most two of these three conditions. Demanding all three simultaneously is mathematically impossible unless the classifier achieves 100 percent perfect deterministic accuracy.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono text-xs font-black text-[#0e7490] uppercase tracking-wider\">Fundamental Impossibility • Kleinberg &amp; Chouldechova (2017)</span>\n    <span class=\"px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#ffd8ce] text-[#b91c1c] border border-[#151b20]\">Trilemma</span>\n  </div>\n\n  <div class=\"p-3.5 rounded-xl bg-[#fffaf0] border-2 border-[#151b20] text-center font-mono text-xs font-black text-[#151b20] mb-3 shadow-[2px_2px_0px_#151b20]\">\n    Under Unequal Base Rates: $\\mathbb{P}(Y = 1 \\mid A = 0) \\ne \\mathbb{P}(Y = 1 \\mid A = 1)$\n  </div>\n\n  <div class=\"grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs font-mono mb-3\">\n    <div class=\"p-3 rounded-xl bg-[#c9f3f4] border-2 border-[#151b20] shadow-[2px_2px_0px_#151b20]\">\n      <strong class=\"text-[#0e7490] block mb-1 font-black\">Condition 1: Sufficiency</strong>\n      <span class=\"text-[11px] text-[#151b20] leading-snug block\">Calibration within groups: $\\mathbb{P}(Y=1 \\mid R=r, A=0) = \\mathbb{P}(Y=1 \\mid R=r, A=1) = r$</span>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#fff0b9] border-2 border-[#151b20] shadow-[2px_2px_0px_#151b20]\">\n      <strong class=\"text-[#b45309] block mb-1 font-black\">Condition 2: Equal FPR</strong>\n      <span class=\"text-[11px] text-[#151b20] leading-snug block\">Predictive equality on negatives: $\\mathbb{P}(\\hat{Y}=1 \\mid Y=0, A=0) = \\mathbb{P}(\\hat{Y}=1 \\mid Y=0, A=1)$</span>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#e7f4c8] border-2 border-[#151b20] shadow-[2px_2px_0px_#151b20]\">\n      <strong class=\"text-[#15803d] block mb-1 font-black\">Condition 3: Equal FNR / TPR</strong>\n      <span class=\"text-[11px] text-[#151b20] leading-snug block\">Equality of Opportunity on positives: $\\mathbb{P}(\\hat{Y}=0 \\mid Y=1, A=0) = \\mathbb{P}(\\hat{Y}=0 \\mid Y=1, A=1)$</span>\n    </div>\n  </div>\n\n  <div class=\"p-3 rounded-xl bg-[#ffd8ce] border-2 border-[#b91c1c] text-xs font-mono text-center shadow-[2px_2px_0px_#151b20]\">\n    <strong class=\"text-[#991b1b] block text-sm mb-1\">🚨 Mathematical Impossibility Law</strong>\n    <span class=\"text-[11px] text-[#7f1d1d] leading-relaxed\">\n      You can satisfy at most <strong>TWO of the three conditions</strong> whenever base rates differ, unless the model achieves <strong>$100\\%$ perfect deterministic classification</strong> ($\\text{FPR}=\\text{FNR}=0$).\n    </span>\n  </div>\n</div>\n"
        },
        "duo": {
          "speaker": "Dr. Nova & Kaito",
          "title": "Mutually Exclusive Conditions Under Unequal Base Rates",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Look at those three conditions! Condition 1 says a score of 70 percent means the exact same thing whether you're evaluating Group zero or Group one. But Conditions 2 and 3 say the error rates for innocent and guilty candidates must be balanced across groups!",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "And the conflict arises because probability is conserved, Kaito! As we will prove algebraically in Slide 8, whenever base rates differ, holding calibration constant locks false positive rates directly to the ratio of demographic odds. You cannot escape the mathematics by re-weighting loss functions.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono text-xs font-black text-[#0e7490] uppercase tracking-wider\">Fundamental Impossibility • Kleinberg &amp; Chouldechova (2017)</span>\n    <span class=\"px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#ffd8ce] text-[#b91c1c] border border-[#151b20]\">Trilemma</span>\n  </div>\n\n  <div class=\"p-3.5 rounded-xl bg-[#fffaf0] border-2 border-[#151b20] text-center font-mono text-xs font-black text-[#151b20] mb-3 shadow-[2px_2px_0px_#151b20]\">\n    Under Unequal Base Rates: $\\mathbb{P}(Y = 1 \\mid A = 0) \\ne \\mathbb{P}(Y = 1 \\mid A = 1)$\n  </div>\n\n  <div class=\"grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs font-mono mb-3\">\n    <div class=\"p-3 rounded-xl bg-[#c9f3f4] border-2 border-[#151b20] shadow-[2px_2px_0px_#151b20]\">\n      <strong class=\"text-[#0e7490] block mb-1 font-black\">Condition 1: Sufficiency</strong>\n      <span class=\"text-[11px] text-[#151b20] leading-snug block\">Calibration within groups: $\\mathbb{P}(Y=1 \\mid R=r, A=0) = \\mathbb{P}(Y=1 \\mid R=r, A=1) = r$</span>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#fff0b9] border-2 border-[#151b20] shadow-[2px_2px_0px_#151b20]\">\n      <strong class=\"text-[#b45309] block mb-1 font-black\">Condition 2: Equal FPR</strong>\n      <span class=\"text-[11px] text-[#151b20] leading-snug block\">Predictive equality on negatives: $\\mathbb{P}(\\hat{Y}=1 \\mid Y=0, A=0) = \\mathbb{P}(\\hat{Y}=1 \\mid Y=0, A=1)$</span>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#e7f4c8] border-2 border-[#151b20] shadow-[2px_2px_0px_#151b20]\">\n      <strong class=\"text-[#15803d] block mb-1 font-black\">Condition 3: Equal FNR / TPR</strong>\n      <span class=\"text-[11px] text-[#151b20] leading-snug block\">Equality of Opportunity on positives: $\\mathbb{P}(\\hat{Y}=0 \\mid Y=1, A=0) = \\mathbb{P}(\\hat{Y}=0 \\mid Y=1, A=1)$</span>\n    </div>\n  </div>\n\n  <div class=\"p-3 rounded-xl bg-[#ffd8ce] border-2 border-[#b91c1c] text-xs font-mono text-center shadow-[2px_2px_0px_#151b20]\">\n    <strong class=\"text-[#991b1b] block text-sm mb-1\">🚨 Mathematical Impossibility Law</strong>\n    <span class=\"text-[11px] text-[#7f1d1d] leading-relaxed\">\n      You can satisfy at most <strong>TWO of the three conditions</strong> whenever base rates differ, unless the model achieves <strong>$100\\%$ perfect deterministic classification</strong> ($\\text{FPR}=\\text{FNR}=0$).\n    </span>\n  </div>\n</div>\n"
        }
      },
      {
        "id": "s3",
        "title": "Pillar 1: Independence (Demographic Parity)",
        "type": "concept",
        "solo": {
          "speaker": "Dr. Nova",
          "title": "Statistical Independence R ⊥ A and the EEOC 80% Rule",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "The first pillar of group fairness is Independence, commonly known as Demographic Parity. Mathematically, prediction score R must be statistically independent of sensitive attribute A.",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "In binary decisions, this requires identical selection rates across groups: the probability of Y-hat equals 1 given group 0 must equal the probability given group 1. Regulatory bodies measure this using the Disparate Impact Ratio, where the United States Equal Employment Opportunity Commission enforces the Four-Fifths rule: any selection ratio below 0.80 establishes prima facie disparate impact discrimination under Title VII. Philosophically, Independence assumes observed differences in historical labels reflect historical oppression rather than inherent qualifications.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono text-xs font-black text-[#0e7490] uppercase tracking-wider\">Group Fairness Pillar 1 • Marginal Distribution Equivalence</span>\n    <span class=\"px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#c9f3f4] text-[#0e7490] border border-[#151b20]\">$R \\perp A$</span>\n  </div>\n\n  <div class=\"p-4 rounded-xl bg-[#f0f9ff] border-2 border-[#0284c7] mb-3 text-center\">\n    <div class=\"font-mono text-xs font-bold text-[#0369a1] mb-1\">Mathematical Independence Definition &amp; Binary Parity</div>\n    <div class=\"text-sm sm:text-base font-mono font-black text-[#0c4a6e]\">\n      $$R \\perp A \\iff \\mathbb{P}(\\hat{Y} = 1 \\mid A = 0) = \\mathbb{P}(\\hat{Y} = 1 \\mid A = 1)$$\n    </div>\n  </div>\n\n  <div class=\"grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono mb-3\">\n    <div class=\"p-3 rounded-xl bg-[#ffffff] border-2 border-[#151b20]\">\n      <strong class=\"text-[#0e7490] block mb-1\">Statistical Parity Difference ($\\Delta_{\\text{DP}}$)</strong>\n      <div class=\"text-[11px] text-[#475569] leading-relaxed\">\n        $$\\Delta_{\\text{DP}} = \\mathbb{P}(\\hat{Y} = 1 \\mid A = 0) - \\mathbb{P}(\\hat{Y} = 1 \\mid A = 1)$$\n        Parity requires $\\Delta_{\\text{DP}} = 0$. Deviations measure absolute selection rate gaps in percentage points.\n      </div>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#ffffff] border-2 border-[#151b20]\">\n      <strong class=\"text-[#b45309] block mb-1\">Disparate Impact Ratio ($\\text{DIR}$)</strong>\n      <div class=\"text-[11px] text-[#475569] leading-relaxed\">\n        $$\\text{DIR} = \\frac{\\mathbb{P}(\\hat{Y} = 1 \\mid A = 0)}{\\mathbb{P}(\\hat{Y} = 1 \\mid A = 1)}$$\n        EEOC Four-Fifths Rule: $\\text{DIR} &lt; 0.80$ is prima facie unlawful disparate impact under US Title VII.\n      </div>\n    </div>\n  </div>\n\n  <div class=\"p-3 rounded-xl bg-[#fffaf0] border border-[#d97706] text-xs font-mono text-[#78350f]\">\n    <strong>Philosophical Premise (\"We are all equal\"):</strong> Any difference in historical label distribution $Y$ is assumed to arise from societal bias or discriminatory data collection. An equitable system must allocate opportunities at equal rates across groups regardless of historical ground-truth base rates.\n  </div>\n</div>\n"
        },
        "duo": {
          "speaker": "Dr. Nova & Kaito",
          "title": "Statistical Independence R ⊥ A and the EEOC 80% Rule",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Demographic Parity is the metric corporate legal teams care most about because of the EEOC 80 percent rule! But if two cohorts have different ground-truth qualification rates in historical data, doesn't forcing equal acceptance rates force you to lower the bar for one group?",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Exactly, Kaito. To equalize marginal selection rates when base rates differ, an algorithm must either lower the classification threshold for the lower-base-rate cohort or raise it for the higher-base-rate cohort. That immediately creates unequal True Positive Rates or unequal False Positive Rates—directly violating our second pillar: Separation.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono text-xs font-black text-[#0e7490] uppercase tracking-wider\">Group Fairness Pillar 1 • Marginal Distribution Equivalence</span>\n    <span class=\"px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#c9f3f4] text-[#0e7490] border border-[#151b20]\">$R \\perp A$</span>\n  </div>\n\n  <div class=\"p-4 rounded-xl bg-[#f0f9ff] border-2 border-[#0284c7] mb-3 text-center\">\n    <div class=\"font-mono text-xs font-bold text-[#0369a1] mb-1\">Mathematical Independence Definition &amp; Binary Parity</div>\n    <div class=\"text-sm sm:text-base font-mono font-black text-[#0c4a6e]\">\n      $$R \\perp A \\iff \\mathbb{P}(\\hat{Y} = 1 \\mid A = 0) = \\mathbb{P}(\\hat{Y} = 1 \\mid A = 1)$$\n    </div>\n  </div>\n\n  <div class=\"grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono mb-3\">\n    <div class=\"p-3 rounded-xl bg-[#ffffff] border-2 border-[#151b20]\">\n      <strong class=\"text-[#0e7490] block mb-1\">Statistical Parity Difference ($\\Delta_{\\text{DP}}$)</strong>\n      <div class=\"text-[11px] text-[#475569] leading-relaxed\">\n        $$\\Delta_{\\text{DP}} = \\mathbb{P}(\\hat{Y} = 1 \\mid A = 0) - \\mathbb{P}(\\hat{Y} = 1 \\mid A = 1)$$\n        Parity requires $\\Delta_{\\text{DP}} = 0$. Deviations measure absolute selection rate gaps in percentage points.\n      </div>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#ffffff] border-2 border-[#151b20]\">\n      <strong class=\"text-[#b45309] block mb-1\">Disparate Impact Ratio ($\\text{DIR}$)</strong>\n      <div class=\"text-[11px] text-[#475569] leading-relaxed\">\n        $$\\text{DIR} = \\frac{\\mathbb{P}(\\hat{Y} = 1 \\mid A = 0)}{\\mathbb{P}(\\hat{Y} = 1 \\mid A = 1)}$$\n        EEOC Four-Fifths Rule: $\\text{DIR} &lt; 0.80$ is prima facie unlawful disparate impact under US Title VII.\n      </div>\n    </div>\n  </div>\n\n  <div class=\"p-3 rounded-xl bg-[#fffaf0] border border-[#d97706] text-xs font-mono text-[#78350f]\">\n    <strong>Philosophical Premise (\"We are all equal\"):</strong> Any difference in historical label distribution $Y$ is assumed to arise from societal bias or discriminatory data collection. An equitable system must allocate opportunities at equal rates across groups regardless of historical ground-truth base rates.\n  </div>\n</div>\n"
        }
      },
      {
        "id": "s4",
        "title": "Pillar 2: Separation (Equalized Odds)",
        "type": "concept",
        "solo": {
          "speaker": "Dr. Nova",
          "title": "Conditional Independence R ⊥ A | Y and Error Rate Balance",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "The second pillar of group fairness is Separation, introduced by Moritz Hardt, Eric Price, and Nathan Srebro in 2016. Mathematically, prediction score R must be conditionally independent of sensitive attribute A given the true label Y.",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Separation splits into two distinct error rate parity criteria. First, Equality of Opportunity requires equal True Positive Rates across cohorts, ensuring equally qualified individuals enjoy equal access. Second, Predictive Equality requires equal False Positive Rates, ensuring innocent individuals are not falsely accused at disparate rates. The composite metric, Average Odds Difference, measures the mean deviation across both error axes. The philosophical premise here is meritocratic: equally qualified individuals must experience identical probabilities of success.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono text-xs font-black text-[#b45309] uppercase tracking-wider\">Group Fairness Pillar 2 • Conditional Label Equivalence</span>\n    <span class=\"px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#fff0b9] text-[#b45309] border border-[#151b20]\">$R \\perp A \\mid Y$</span>\n  </div>\n\n  <div class=\"p-4 rounded-xl bg-[#fffaf0] border-2 border-[#d97706] mb-3 text-center\">\n    <div class=\"font-mono text-xs font-bold text-[#92400e] mb-1\">Mathematical Separation Definition (Equalized Odds)</div>\n    <div class=\"text-sm sm:text-base font-mono font-black text-[#78350f]\">\n      $$R \\perp A \\mid Y \\iff \\mathbb{P}(\\hat{Y} = 1 \\mid Y = y, A = 0) = \\mathbb{P}(\\hat{Y} = 1 \\mid Y = y, A = 1), \\quad \\forall y \\in \\{0, 1\\}$$\n    </div>\n  </div>\n\n  <div class=\"grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono mb-3\">\n    <div class=\"p-3 rounded-xl bg-[#ecfdf5] border-2 border-[#059669]\">\n      <strong class=\"text-[#047857] block mb-1\">Equality of Opportunity ($\\text{TPR}_0 = \\text{TPR}_1$)</strong>\n      <div class=\"text-[11px] text-[#065f46] leading-relaxed\">\n        $$\\text{TPR}_0 = \\mathbb{P}(\\hat{Y} = 1 \\mid Y = 1, A = 0) = \\mathbb{P}(\\hat{Y} = 1 \\mid Y = 1, A = 1) = \\text{TPR}_1$$\n        Equivalently, False Negative Rates are equal: $\\text{FNR}_0 = \\text{FNR}_1$. Crucial in loan approvals and scholarships.\n      </div>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#fff5f5] border-2 border-[#dc2626]\">\n      <strong class=\"text-[#b91c1c] block mb-1\">Predictive Equality ($\\text{FPR}_0 = \\text{FPR}_1$)</strong>\n      <div class=\"text-[11px] text-[#7f1d1d] leading-relaxed\">\n        $$\\text{FPR}_0 = \\mathbb{P}(\\hat{Y} = 1 \\mid Y = 0, A = 0) = \\mathbb{P}(\\hat{Y} = 1 \\mid Y = 0, A = 1) = \\text{FPR}_1$$\n        Equivalently, false accusation rates match. Essential in pretrial bail, recidivism scoring, and fraud detention.\n      </div>\n    </div>\n  </div>\n\n  <div class=\"p-3 rounded-xl bg-[#ffffff] border border-[#151b20] text-xs font-mono text-[#334155]\">\n    <strong>Average Odds Difference ($\\Delta_{\\text{AOD}}$):</strong>\n    $$\\Delta_{\\text{AOD}} = \\frac{1}{2}\\left(|\\text{FPR}_0 - \\text{FPR}_1| + |\\text{TPR}_0 - \\text{TPR}_1|\\right) \\le 0.05 \\implies \\text{Equalized Odds Achieved}$$\n  </div>\n</div>\n"
        },
        "duo": {
          "speaker": "Dr. Nova & Kaito",
          "title": "Conditional Independence R ⊥ A | Y and Error Rate Balance",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Notice how Separation conditions on ground truth Y! So if someone is genuinely qualified—meaning Y equals 1—their probability of being hired shouldn't depend on their gender or ethnicity.",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Precisely. But now look at what happens to the decision-maker evaluating someone with a high score. Does a high score mean the exact same probability of success across groups? That brings us to our third pillar: Sufficiency.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono text-xs font-black text-[#b45309] uppercase tracking-wider\">Group Fairness Pillar 2 • Conditional Label Equivalence</span>\n    <span class=\"px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#fff0b9] text-[#b45309] border border-[#151b20]\">$R \\perp A \\mid Y$</span>\n  </div>\n\n  <div class=\"p-4 rounded-xl bg-[#fffaf0] border-2 border-[#d97706] mb-3 text-center\">\n    <div class=\"font-mono text-xs font-bold text-[#92400e] mb-1\">Mathematical Separation Definition (Equalized Odds)</div>\n    <div class=\"text-sm sm:text-base font-mono font-black text-[#78350f]\">\n      $$R \\perp A \\mid Y \\iff \\mathbb{P}(\\hat{Y} = 1 \\mid Y = y, A = 0) = \\mathbb{P}(\\hat{Y} = 1 \\mid Y = y, A = 1), \\quad \\forall y \\in \\{0, 1\\}$$\n    </div>\n  </div>\n\n  <div class=\"grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono mb-3\">\n    <div class=\"p-3 rounded-xl bg-[#ecfdf5] border-2 border-[#059669]\">\n      <strong class=\"text-[#047857] block mb-1\">Equality of Opportunity ($\\text{TPR}_0 = \\text{TPR}_1$)</strong>\n      <div class=\"text-[11px] text-[#065f46] leading-relaxed\">\n        $$\\text{TPR}_0 = \\mathbb{P}(\\hat{Y} = 1 \\mid Y = 1, A = 0) = \\mathbb{P}(\\hat{Y} = 1 \\mid Y = 1, A = 1) = \\text{TPR}_1$$\n        Equivalently, False Negative Rates are equal: $\\text{FNR}_0 = \\text{FNR}_1$. Crucial in loan approvals and scholarships.\n      </div>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#fff5f5] border-2 border-[#dc2626]\">\n      <strong class=\"text-[#b91c1c] block mb-1\">Predictive Equality ($\\text{FPR}_0 = \\text{FPR}_1$)</strong>\n      <div class=\"text-[11px] text-[#7f1d1d] leading-relaxed\">\n        $$\\text{FPR}_0 = \\mathbb{P}(\\hat{Y} = 1 \\mid Y = 0, A = 0) = \\mathbb{P}(\\hat{Y} = 1 \\mid Y = 0, A = 1) = \\text{FPR}_1$$\n        Equivalently, false accusation rates match. Essential in pretrial bail, recidivism scoring, and fraud detention.\n      </div>\n    </div>\n  </div>\n\n  <div class=\"p-3 rounded-xl bg-[#ffffff] border border-[#151b20] text-xs font-mono text-[#334155]\">\n    <strong>Average Odds Difference ($\\Delta_{\\text{AOD}}$):</strong>\n    $$\\Delta_{\\text{AOD}} = \\frac{1}{2}\\left(|\\text{FPR}_0 - \\text{FPR}_1| + |\\text{TPR}_0 - \\text{TPR}_1|\\right) \\le 0.05 \\implies \\text{Equalized Odds Achieved}$$\n  </div>\n</div>\n"
        }
      },
      {
        "id": "s5",
        "title": "Pillar 3: Sufficiency (Predictive Calibration)",
        "type": "concept",
        "solo": {
          "speaker": "Dr. Nova",
          "title": "Conditional Independence Y ⊥ A | R and Group Calibration",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "The third pillar of group fairness is Sufficiency, commonly formulated as Predictive Calibration within groups. Mathematically, the ground truth outcome Y must be conditionally independent of sensitive attribute A given score R.",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "For continuous scores, Sufficiency requires that individuals assigned a score r exhibit an exact r probability of positive outcome, regardless of demographic membership. For binary decisions, Sufficiency requires equal Positive Predictive Value and equal Negative Predictive Value across groups. The philosophical premise is decision-maker trust: a score of 70 percent must mean 70 percent risk for everyone. In credit scoring and clinical ICU triage, clinicians and risk officers argue that violating calibration renders risk scores statistically untrustworthy.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono text-xs font-black text-[#b91c1c] uppercase tracking-wider\">Group Fairness Pillar 3 • Score Reliability Within Groups</span>\n    <span class=\"px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#ffd8ce] text-[#b91c1c] border border-[#151b20]\">$Y \\perp A \\mid R$</span>\n  </div>\n\n  <div class=\"p-4 rounded-xl bg-[#fff5f5] border-2 border-[#dc2626] mb-3 text-center\">\n    <div class=\"font-mono text-xs font-black text-[#991b1b] mb-1\">Mathematical Sufficiency Definition (Predictive Calibration)</div>\n    <div class=\"text-sm sm:text-base font-mono font-black text-[#7f1d1d]\">\n      $$Y \\perp A \\mid R \\iff \\mathbb{P}(Y = 1 \\mid R = r, A = 0) = \\mathbb{P}(Y = 1 \\mid R = r, A = 1) = r, \\quad \\forall r \\in [0, 1]$$\n    </div>\n  </div>\n\n  <div class=\"grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono mb-3\">\n    <div class=\"p-3 rounded-xl bg-[#ffffff] border-2 border-[#151b20]\">\n      <strong class=\"text-[#0e7490] block mb-1\">Positive Predictive Value Parity ($\\text{PPV}$)</strong>\n      <div class=\"text-[11px] text-[#475569] leading-relaxed\">\n        $$\\text{PPV}_0 = \\mathbb{P}(Y = 1 \\mid \\hat{Y} = 1, A = 0) = \\mathbb{P}(Y = 1 \\mid \\hat{Y} = 1, A = 1) = \\text{PPV}_1$$\n        Ensures precision is balanced across groups: flagged applicants possess equal probability of being true positives.\n      </div>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#ffffff] border-2 border-[#151b20]\">\n      <strong class=\"text-[#059669] block mb-1\">Negative Predictive Value Parity ($\\text{NPV}$)</strong>\n      <div class=\"text-[11px] text-[#475569] leading-relaxed\">\n        $$\\text{NPV}_0 = \\mathbb{P}(Y = 0 \\mid \\hat{Y} = 0, A = 0) = \\mathbb{P}(Y = 0 \\mid \\hat{Y} = 0, A = 1) = \\text{NPV}_1$$\n        Ensures rejected applicants in both groups share identical probabilities of truly being negative outcomes.\n      </div>\n    </div>\n  </div>\n\n  <div class=\"p-3 rounded-xl bg-[#fffaf0] border border-[#d97706] text-xs font-mono text-[#78350f]\">\n    <strong>Philosophical Premise (\"A score of 70% means 70% for all\"):</strong> If an algorithm assigns an individual a 70% risk of defaulting or septic shock, that prediction must carry the identical statistical meaning regardless of the person's protected demographic. Violating calibration destroys interpretability for clinicians and underwriters.\n  </div>\n</div>\n"
        },
        "duo": {
          "speaker": "Dr. Nova & Kaito",
          "title": "Conditional Independence Y ⊥ A | R and Group Calibration",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Both arguments sound completely reasonable! The defense attorney says, 'You can't falsely arrest our clients twice as often—that violates Separation!' And the judge says, 'A high-risk score must mean the exact same probability of reoffending for every defendant—that's Sufficiency!'",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "And that is exactly why the COMPAS judicial debate erupted in 2016, Kaito! Both sides were demanding mathematically valid fairness criteria—which are completely incompatible in reality. Let's step into Simulator 7.6 Tab A to watch this mathematical collision happen live!",
              "dock": "sim"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono text-xs font-black text-[#b91c1c] uppercase tracking-wider\">Group Fairness Pillar 3 • Score Reliability Within Groups</span>\n    <span class=\"px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#ffd8ce] text-[#b91c1c] border border-[#151b20]\">$Y \\perp A \\mid R$</span>\n  </div>\n\n  <div class=\"p-4 rounded-xl bg-[#fff5f5] border-2 border-[#dc2626] mb-3 text-center\">\n    <div class=\"font-mono text-xs font-black text-[#991b1b] mb-1\">Mathematical Sufficiency Definition (Predictive Calibration)</div>\n    <div class=\"text-sm sm:text-base font-mono font-black text-[#7f1d1d]\">\n      $$Y \\perp A \\mid R \\iff \\mathbb{P}(Y = 1 \\mid R = r, A = 0) = \\mathbb{P}(Y = 1 \\mid R = r, A = 1) = r, \\quad \\forall r \\in [0, 1]$$\n    </div>\n  </div>\n\n  <div class=\"grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono mb-3\">\n    <div class=\"p-3 rounded-xl bg-[#ffffff] border-2 border-[#151b20]\">\n      <strong class=\"text-[#0e7490] block mb-1\">Positive Predictive Value Parity ($\\text{PPV}$)</strong>\n      <div class=\"text-[11px] text-[#475569] leading-relaxed\">\n        $$\\text{PPV}_0 = \\mathbb{P}(Y = 1 \\mid \\hat{Y} = 1, A = 0) = \\mathbb{P}(Y = 1 \\mid \\hat{Y} = 1, A = 1) = \\text{PPV}_1$$\n        Ensures precision is balanced across groups: flagged applicants possess equal probability of being true positives.\n      </div>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#ffffff] border-2 border-[#151b20]\">\n      <strong class=\"text-[#059669] block mb-1\">Negative Predictive Value Parity ($\\text{NPV}$)</strong>\n      <div class=\"text-[11px] text-[#475569] leading-relaxed\">\n        $$\\text{NPV}_0 = \\mathbb{P}(Y = 0 \\mid \\hat{Y} = 0, A = 0) = \\mathbb{P}(Y = 0 \\mid \\hat{Y} = 0, A = 1) = \\text{NPV}_1$$\n        Ensures rejected applicants in both groups share identical probabilities of truly being negative outcomes.\n      </div>\n    </div>\n  </div>\n\n  <div class=\"p-3 rounded-xl bg-[#fffaf0] border border-[#d97706] text-xs font-mono text-[#78350f]\">\n    <strong>Philosophical Premise (\"A score of 70% means 70% for all\"):</strong> If an algorithm assigns an individual a 70% risk of defaulting or septic shock, that prediction must carry the identical statistical meaning regardless of the person's protected demographic. Violating calibration destroys interpretability for clinicians and underwriters.\n  </div>\n</div>\n"
        }
      },
      {
        "id": "s6",
        "title": "Interactive Lab: Impossibility Space Studio",
        "type": "interactive_lab",
        "solo": {
          "speaker": "Dr. Nova",
          "title": "Simulator 7.6 Tab A: Impossibility Space Studio",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Welcome to Interactive Lab 1: Simulator 7.6 Tab A, the Impossibility Space Studio. In the live workbench below, we simulate the Kleinberg-Chouldechova Fundamental Identity in real time.",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "At default parameters—p zero at 30 percent, p one at 55 percent, calibrated PPV at 70 percent, and target FNR at 20 percent—observe how the Base Rate Odds Ratio of 0.35 times exactly forces the False Positive Rate Ratio to 0.35 times. Experiment with presets like COMPAS Judicial Bail, ICU Sepsis Triage, or click Hypothetical Parity Base Rates to see the exact condition where the impossibility theorem dissolves.",
              "dock": "sim"
            }
          ],
          "contentHtml": "\n<div class=\"p-4 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-2 border-b-2 border-[#151b20]/15 flex-wrap gap-2\">\n    <div class=\"flex items-center gap-2 font-mono font-black text-xs md:text-sm text-[#0e7490] uppercase tracking-wide\">\n      <span>🔬</span> Interactive Lab 1: Impossibility Space Studio\n    </div>\n    <span class=\"px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black bg-[#c9f3f4] text-[#0e7490] border-2 border-[#151b20]\">\n      Simulator 7.6 Tab A\n    </span>\n  </div>\n\n  <p class=\"text-xs text-[#151b20]/80 font-sans mb-3\">\n    Verify the <strong>Kleinberg-Chouldechova Fundamental Identity</strong>: $\\text{FPR}_a = \\text{Odds}(p_a) \\cdot \\frac{1-v}{v} \\cdot (1 - \\text{FNR})$. Adjust base rates and precision to witness why equalizing FPRs is algebraically impossible when $p_0 \\ne p_1$.\n  </p>\n\n  <div class=\"p-3 rounded-lg bg-[#fffaf0] border border-[#d97706] text-xs font-mono text-[#78350f] mb-2\">\n    <strong>Lab Objectives:</strong>\n    <ol class=\"list-decimal pl-5 space-y-1 mt-1\">\n      <li>Inspect default baseline ($p_0 = 0.30, p_1 = 0.55, \\text{PPV} = 0.70, \\text{FNR} = 0.20$): Odds Ratio equals <strong>$0.3503\\text{x}$</strong>, identically matching the forced FPR Ratio.</li>\n      <li>Click <strong>COMPAS Judicial Bail ($p_0=0.35, p_1=0.52$)</strong> to reproduce the ProPublica $2.01\\times$ higher Black defendant False Positive Rate.</li>\n      <li>Click <strong>Hypothetical Parity Base Rates ($p_0 = p_1 = 0.40$)</strong> to collapse the disparity to $1.000\\times$, proving the exact boundary of the theorem.</li>\n    </ol>\n  </div>\n</div>\n"
        },
        "duo": {
          "speaker": "Dr. Nova & Kaito",
          "title": "Simulator 7.6 Tab A: Impossibility Space Studio",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Look at Simulator 7.6 Tab A! As we drag Group 1 base rate p 1 higher, look at the Forced FPR bar on the canvas: Group 1's false positive rate climbs in direct lockstep with its prior odds!",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "And notice the green checkmark: the Base Rate Odds Ratio and Forced FPR Ratio match to four decimal places! Try clicking the COMPAS preset or the ICU Sepsis preset to inspect how base-rate odds drive disparities in life-or-death triage.",
              "dock": "sim"
            }
          ],
          "contentHtml": "\n<div class=\"p-4 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-2 border-b-2 border-[#151b20]/15 flex-wrap gap-2\">\n    <div class=\"flex items-center gap-2 font-mono font-black text-xs md:text-sm text-[#0e7490] uppercase tracking-wide\">\n      <span>🔬</span> Interactive Lab 1: Impossibility Space Studio\n    </div>\n    <span class=\"px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black bg-[#c9f3f4] text-[#0e7490] border-2 border-[#151b20]\">\n      Simulator 7.6 Tab A\n    </span>\n  </div>\n\n  <p class=\"text-xs text-[#151b20]/80 font-sans mb-3\">\n    Verify the <strong>Kleinberg-Chouldechova Fundamental Identity</strong>: $\\text{FPR}_a = \\text{Odds}(p_a) \\cdot \\frac{1-v}{v} \\cdot (1 - \\text{FNR})$. Adjust base rates and precision to witness why equalizing FPRs is algebraically impossible when $p_0 \\ne p_1$.\n  </p>\n\n  <div class=\"p-3 rounded-lg bg-[#fffaf0] border border-[#d97706] text-xs font-mono text-[#78350f] mb-2\">\n    <strong>Lab Objectives:</strong>\n    <ol class=\"list-decimal pl-5 space-y-1 mt-1\">\n      <li>Inspect default baseline ($p_0 = 0.30, p_1 = 0.55, \\text{PPV} = 0.70, \\text{FNR} = 0.20$): Odds Ratio equals <strong>$0.3503\\text{x}$</strong>, identically matching the forced FPR Ratio.</li>\n      <li>Click <strong>COMPAS Judicial Bail ($p_0=0.35, p_1=0.52$)</strong> to reproduce the ProPublica $2.01\\times$ higher Black defendant False Positive Rate.</li>\n      <li>Click <strong>Hypothetical Parity Base Rates ($p_0 = p_1 = 0.40$)</strong> to collapse the disparity to $1.000\\times$, proving the exact boundary of the theorem.</li>\n    </ol>\n  </div>\n</div>\n"
        }
      },
      {
        "id": "s7",
        "title": "Active Checkpoint 1: Chouldechova Exact Numerical Ratio",
        "type": "checkpoint",
        "solo": {
          "speaker": "Dr. Nova",
          "title": "Active Checkpoint 1: Calculating Forced Error Disparity",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Let us test your quantitative mastery in Active Checkpoint 1. Suppose a fraud detection system is calibrated across two business sectors with 80 percent PPV and equal 15 percent False Negative Rates. Sector 0 has a 5 percent fraud base rate, while Sector 1 has a 25 percent fraud base rate. What is the exact mathematical ratio of Sector 1's False Positive Rate over Sector 0's False Positive Rate?",
              "dock": "quiz"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-2 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono text-xs font-black text-[#0e7490] uppercase tracking-wider\">Active Checkpoint 7.6.1 • Quantitative Impossibility Theorem</span>\n    <span class=\"px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black bg-[#c9f3f4] text-[#0e7490] border-2 border-[#151b20]\">Self-Assessment</span>\n  </div>\n  <p class=\"text-xs text-[#151b20] font-sans mb-1\">\n    Calculate the exact mathematical ratio $\\frac{\\text{FPR}_1}{\\text{FPR}_0}$ under equal PPV ($0.80$) and equal FNR ($0.15$) given base rates $p_0 = 0.05$ and $p_1 = 0.25$:\n  </p>\n</div>\n"
        },
        "duo": {
          "speaker": "Dr. Nova & Kaito",
          "title": "Active Checkpoint 1: Calculating Forced Error Disparity",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Checkpoint 1 is a numerical challenge! Calculate the prior odds for Sector zero at five percent, then for Sector one at 25 percent, and divide them!",
              "dock": "quiz"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Remember Chouldechova's ratio: when precision and sensitivity are held equal across sectors, the shared precision multiplier cancels completely. Select the exact amplification ratio in the checkpoint dock below.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-2 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono text-xs font-black text-[#0e7490] uppercase tracking-wider\">Active Checkpoint 7.6.1 • Quantitative Impossibility Theorem</span>\n    <span class=\"px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black bg-[#c9f3f4] text-[#0e7490] border-2 border-[#151b20]\">Self-Assessment</span>\n  </div>\n  <p class=\"text-xs text-[#151b20] font-sans mb-1\">\n    Calculate the exact mathematical ratio $\\frac{\\text{FPR}_1}{\\text{FPR}_0}$ under equal PPV ($0.80$) and equal FNR ($0.15$) given base rates $p_0 = 0.05$ and $p_1 = 0.25$:\n  </p>\n</div>\n"
        }
      },
      {
        "id": "s8",
        "title": "Algebraic Proof of the Chouldechova Identity",
        "type": "equation",
        "solo": {
          "speaker": "Dr. Nova",
          "title": "From Bayes' Theorem to the Inevitable Error Disparity Ratio",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "To understand why this impossibility is absolute, let us walk through the complete algebraic derivation of the Chouldechova identity step by step.",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "By Bayes' theorem, the False Discovery Rate equals FPR times negative base rate over the total positive prediction rate. Multiplying both sides by the denominator, distributing FDR, and isolating FPR yields the fundamental equation: FPR equals base-rate odds times 1 minus PPV over PPV times 1 minus FNR. When we impose equal PPV and equal FNR across groups and divide FPR zero by FPR one, the shared factor cancels out completely—leaving strictly the ratio of base-rate odds. This proves that equal false positives and calibrated precision cannot coexist when base rates diverge.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono text-xs font-black text-[#0e7490] uppercase tracking-wider\">Rigorous Derivation • Chouldechova (2017) &amp; Kleinberg et al. (2017)</span>\n    <span class=\"px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#c9f3f4] text-[#0e7490] border border-[#151b20]\">Q.E.D. Proof</span>\n  </div>\n\n  <div class=\"space-y-2.5 font-mono text-xs\">\n    <div class=\"p-3 rounded-xl bg-[#ffffff] border-2 border-[#151b20]\">\n      <strong class=\"text-[#0e7490] block mb-1\">Step 1: Bayes' Theorem Expansion of False Discovery Rate ($\\text{FDR}_a = 1 - v_a$)</strong>\n      <div class=\"text-[11px] text-[#334155] leading-relaxed overflow-x-auto\">\n        $$\\text{FDR}_a = \\frac{\\mathbb{P}(\\hat{Y}=1 \\mid Y=0, A=a)\\mathbb{P}(Y=0 \\mid A=a)}{\\mathbb{P}(\\hat{Y}=1 \\mid A=a)} = \\frac{\\text{FPR}_a(1 - p_a)}{\\text{FPR}_a(1 - p_a) + \\text{TPR}_a p_a}$$\n      </div>\n    </div>\n\n    <div class=\"p-3 rounded-xl bg-[#ffffff] border-2 border-[#151b20]\">\n      <strong class=\"text-[#b45309] block mb-1\">Step 2: Isolating $\\text{FPR}_a$ and Substituting $v_a = \\text{PPV}_a$</strong>\n      <div class=\"text-[11px] text-[#334155] leading-relaxed overflow-x-auto\">\n        $$\\text{FDR}_a \\cdot \\text{TPR}_a p_a = (1 - \\text{FDR}_a) \\cdot \\text{FPR}_a (1 - p_a) \\implies (1 - v_a)(1 - \\text{FNR}_a) p_a = v_a \\cdot \\text{FPR}_a (1 - p_a)$$\n        $$\\boxed{\\text{FPR}_a = \\left(\\frac{p_a}{1 - p_a}\\right) \\left(\\frac{1 - v_a}{v_a}\\right) (1 - \\text{FNR}_a)}$$\n      </div>\n    </div>\n\n    <div class=\"p-3 rounded-xl bg-[#fff5f5] border-2 border-[#dc2626]\">\n      <strong class=\"text-[#b91c1c] block mb-1\">Step 3: Imposing Equal PPV ($v_0 = v_1 = v$) and Equal FNR ($\\text{FNR}_0 = \\text{FNR}_1 = \\text{FNR}$)</strong>\n      <div class=\"text-[11px] text-[#7f1d1d] leading-relaxed overflow-x-auto\">\n        $$\\frac{\\text{FPR}_0}{\\text{FPR}_1} = \\frac{\\left(\\frac{p_0}{1 - p_0}\\right) \\cancel{\\left(\\frac{1 - v}{v}\\right)(1 - \\text{FNR})}}{\\left(\\frac{p_1}{1 - p_1}\\right) \\cancel{\\left(\\frac{1 - v}{v}\\right)(1 - \\text{FNR})}} = \\boxed{\\frac{\\text{Odds}(p_0)}{\\text{Odds}(p_1)} = \\frac{p_0(1 - p_1)}{p_1(1 - p_0)}} \\quad \\blacksquare$$\n      </div>\n    </div>\n  </div>\n</div>\n"
        },
        "duo": {
          "speaker": "Dr. Nova & Kaito",
          "title": "From Bayes' Theorem to the Inevitable Error Disparity Ratio",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Look at Step 3 where the entire calibration term 1 minus v over v cancels out! That explains why sliding PPV up and down in our lab changed the absolute error rates, but the disparity ratio between Group 0 and Group 1 didn't budge at all!",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "That is the mathematical elegance of the proof, Kaito! As long as the classifier is imperfect, equalizing calibration and equalizing false positive rates are mutually exclusive whenever prior base rates diverge. Next, let us look beyond group statistics into Individual Fairness and Causal Counterfactuals.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono text-xs font-black text-[#0e7490] uppercase tracking-wider\">Rigorous Derivation • Chouldechova (2017) &amp; Kleinberg et al. (2017)</span>\n    <span class=\"px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#c9f3f4] text-[#0e7490] border border-[#151b20]\">Q.E.D. Proof</span>\n  </div>\n\n  <div class=\"space-y-2.5 font-mono text-xs\">\n    <div class=\"p-3 rounded-xl bg-[#ffffff] border-2 border-[#151b20]\">\n      <strong class=\"text-[#0e7490] block mb-1\">Step 1: Bayes' Theorem Expansion of False Discovery Rate ($\\text{FDR}_a = 1 - v_a$)</strong>\n      <div class=\"text-[11px] text-[#334155] leading-relaxed overflow-x-auto\">\n        $$\\text{FDR}_a = \\frac{\\mathbb{P}(\\hat{Y}=1 \\mid Y=0, A=a)\\mathbb{P}(Y=0 \\mid A=a)}{\\mathbb{P}(\\hat{Y}=1 \\mid A=a)} = \\frac{\\text{FPR}_a(1 - p_a)}{\\text{FPR}_a(1 - p_a) + \\text{TPR}_a p_a}$$\n      </div>\n    </div>\n\n    <div class=\"p-3 rounded-xl bg-[#ffffff] border-2 border-[#151b20]\">\n      <strong class=\"text-[#b45309] block mb-1\">Step 2: Isolating $\\text{FPR}_a$ and Substituting $v_a = \\text{PPV}_a$</strong>\n      <div class=\"text-[11px] text-[#334155] leading-relaxed overflow-x-auto\">\n        $$\\text{FDR}_a \\cdot \\text{TPR}_a p_a = (1 - \\text{FDR}_a) \\cdot \\text{FPR}_a (1 - p_a) \\implies (1 - v_a)(1 - \\text{FNR}_a) p_a = v_a \\cdot \\text{FPR}_a (1 - p_a)$$\n        $$\\boxed{\\text{FPR}_a = \\left(\\frac{p_a}{1 - p_a}\\right) \\left(\\frac{1 - v_a}{v_a}\\right) (1 - \\text{FNR}_a)}$$\n      </div>\n    </div>\n\n    <div class=\"p-3 rounded-xl bg-[#fff5f5] border-2 border-[#dc2626]\">\n      <strong class=\"text-[#b91c1c] block mb-1\">Step 3: Imposing Equal PPV ($v_0 = v_1 = v$) and Equal FNR ($\\text{FNR}_0 = \\text{FNR}_1 = \\text{FNR}$)</strong>\n      <div class=\"text-[11px] text-[#7f1d1d] leading-relaxed overflow-x-auto\">\n        $$\\frac{\\text{FPR}_0}{\\text{FPR}_1} = \\frac{\\left(\\frac{p_0}{1 - p_0}\\right) \\cancel{\\left(\\frac{1 - v}{v}\\right)(1 - \\text{FNR})}}{\\left(\\frac{p_1}{1 - p_1}\\right) \\cancel{\\left(\\frac{1 - v}{v}\\right)(1 - \\text{FNR})}} = \\boxed{\\frac{\\text{Odds}(p_0)}{\\text{Odds}(p_1)} = \\frac{p_0(1 - p_1)}{p_1(1 - p_0)}} \\quad \\blacksquare$$\n      </div>\n    </div>\n  </div>\n</div>\n"
        }
      },
      {
        "id": "s9",
        "title": "Individual Fairness: Lipschitz Metric Continuity",
        "type": "concept",
        "solo": {
          "speaker": "Dr. Nova",
          "title": "Aristotelian Justice and the Lipschitz Bound (Dwork et al. 2012)",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Group fairness metrics evaluate statistical aggregates, which can overlook severe mistreatment of specific individuals. In 2012, Cynthia Dwork, Moritz Hardt, Toniann Pitassi, Omer Reingold, and Richard Zemel formulated Individual Fairness, formalizing Aristotle's principle: treat similar individuals similarly.",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Under Lipschitz Individual Fairness, the statistical distance between outcome distributions D sub Y of M of x 1 and M of x 2 must be upper-bounded by Lipschitz constant L times the task distance d sub X between individual feature vectors x 1 and x 2. In auditing suites, teams compute the pairwise Lipschitz quotient. However, the fundamental engineering hurdle is defining the task distance metric d sub X objectively, because standard Euclidean distances over historical features frequently encode historical bias.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono text-xs font-black text-[#0e7490] uppercase tracking-wider\">Individual Fairness • Metric Continuity Guarantee</span>\n    <span class=\"px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#c9f3f4] text-[#0e7490] border border-[#151b20]\">Dwork et al. (2012)</span>\n  </div>\n\n  <div class=\"p-4 rounded-xl bg-[#f0f9ff] border-2 border-[#0284c7] mb-3 text-center\">\n    <div class=\"font-mono text-xs font-bold text-[#0369a1] mb-1\">Lipschitz Individual Fairness Inequality</div>\n    <div class=\"text-sm sm:text-base font-mono font-black text-[#0c4a6e]\">\n      $$\\boxed{D_{\\mathcal{Y}}(M(x_1), M(x_2)) \\le L \\cdot d_{\\mathcal{X}}(x_1, x_2), \\quad \\forall x_1, x_2 \\in \\mathcal{X}}$$\n    </div>\n    <div class=\"text-xs font-mono text-[#0369a1] mt-1\">\n      For scalar scoring functions $f: \\mathcal{X} \\to [0, 1]$: $|f(x_1) - f(x_2)| \\le L \\cdot d_{\\mathcal{X}}(x_1, x_2)$\n    </div>\n  </div>\n\n  <div class=\"grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono mb-2\">\n    <div class=\"p-3 rounded-xl bg-[#ffffff] border-2 border-[#151b20]\">\n      <strong class=\"text-[#0e7490] block mb-1\">Empirical Pairwise Lipschitz Quotient ($L_{ij}$)</strong>\n      <div class=\"text-[11px] text-[#475569] leading-relaxed\">\n        $$L_{ij} = \\frac{|f(x_i) - f(x_j)|}{\\|x_i - x_j\\|_2} \\implies L_{\\max} = \\max_{i \\ne j} L_{ij}$$\n        Audited via Pydantic: models must satisfy $L_{\\max} \\le L_{\\text{threshold}}$ (e.g., $0.50$).\n      </div>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#fff5f5] border-2 border-[#dc2626]\">\n      <strong class=\"text-[#b91c1c] block mb-1\">The Metric Specification Dilemma</strong>\n      <div class=\"text-[11px] text-[#7f1d1d] leading-relaxed\">\n        Who defines task similarity $d_{\\mathcal{X}}$? Standard Euclidean distances over correlated features (ZIP code, credit history) inadvertently re-encode historical systemic discrimination into the similarity metric itself.\n      </div>\n    </div>\n  </div>\n</div>\n"
        },
        "duo": {
          "speaker": "Dr. Nova & Kaito",
          "title": "Aristotelian Justice and the Lipschitz Bound (Dwork et al. 2012)",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Individual fairness makes so much intuitive sense! If two applicants have virtually identical resumes, their outcomes should be bounded close together by that Lipschitz constant L! Why don't all production systems just use this instead of group metrics?",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Because specifying the metric distance d of X is a profound subjective challenge, Kaito! Furthermore, without individual fairness guarantees, models can satisfy marginal group parity while discriminating aggressively against intersectional subgroups—a pathology known as Fairness Gerrymandering.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono text-xs font-black text-[#0e7490] uppercase tracking-wider\">Individual Fairness • Metric Continuity Guarantee</span>\n    <span class=\"px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#c9f3f4] text-[#0e7490] border border-[#151b20]\">Dwork et al. (2012)</span>\n  </div>\n\n  <div class=\"p-4 rounded-xl bg-[#f0f9ff] border-2 border-[#0284c7] mb-3 text-center\">\n    <div class=\"font-mono text-xs font-bold text-[#0369a1] mb-1\">Lipschitz Individual Fairness Inequality</div>\n    <div class=\"text-sm sm:text-base font-mono font-black text-[#0c4a6e]\">\n      $$\\boxed{D_{\\mathcal{Y}}(M(x_1), M(x_2)) \\le L \\cdot d_{\\mathcal{X}}(x_1, x_2), \\quad \\forall x_1, x_2 \\in \\mathcal{X}}$$\n    </div>\n    <div class=\"text-xs font-mono text-[#0369a1] mt-1\">\n      For scalar scoring functions $f: \\mathcal{X} \\to [0, 1]$: $|f(x_1) - f(x_2)| \\le L \\cdot d_{\\mathcal{X}}(x_1, x_2)$\n    </div>\n  </div>\n\n  <div class=\"grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono mb-2\">\n    <div class=\"p-3 rounded-xl bg-[#ffffff] border-2 border-[#151b20]\">\n      <strong class=\"text-[#0e7490] block mb-1\">Empirical Pairwise Lipschitz Quotient ($L_{ij}$)</strong>\n      <div class=\"text-[11px] text-[#475569] leading-relaxed\">\n        $$L_{ij} = \\frac{|f(x_i) - f(x_j)|}{\\|x_i - x_j\\|_2} \\implies L_{\\max} = \\max_{i \\ne j} L_{ij}$$\n        Audited via Pydantic: models must satisfy $L_{\\max} \\le L_{\\text{threshold}}$ (e.g., $0.50$).\n      </div>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#fff5f5] border-2 border-[#dc2626]\">\n      <strong class=\"text-[#b91c1c] block mb-1\">The Metric Specification Dilemma</strong>\n      <div class=\"text-[11px] text-[#7f1d1d] leading-relaxed\">\n        Who defines task similarity $d_{\\mathcal{X}}$? Standard Euclidean distances over correlated features (ZIP code, credit history) inadvertently re-encode historical systemic discrimination into the similarity metric itself.\n      </div>\n    </div>\n  </div>\n</div>\n"
        }
      },
      {
        "id": "s10",
        "title": "Fairness Gerrymandering & Intersectional Bias",
        "type": "concept",
        "solo": {
          "speaker": "Dr. Nova",
          "title": "How Marginal Group Parity Hides Structured Subgroup Exclusion",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Why must engineering organizations audit beyond coarse demographic averages? In 2018, Michael Kearns, Seth Neel, Aaron Roth, and Zhiwei Steven Wu exposed a critical failure mode known as Fairness Gerrymandering.",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Consider a hiring model that evaluates 100 Black candidates and 100 White candidates, split equally by gender. The model achieves perfect 50 percent Demographic Parity on race: 50 Black applicants and 50 White applicants approved. It also achieves perfect 50 percent Demographic Parity on gender: 50 men and 50 women approved. Yet within the Black cohort, 100 percent of men are approved and zero percent of women are approved; within the White cohort, zero percent of men and 100 percent of women are approved. Black women suffer absolute exclusion with a zero percent acceptance rate, yet every marginal group fairness metric reports zero bias. Auditing intersectional cohorts and Lipschitz continuity prevents this structural erasure.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono text-xs font-black text-[#b91c1c] uppercase tracking-wider\">Intersectional Auditing • Kearns et al. (2018)</span>\n    <span class=\"px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#ffd8ce] text-[#b91c1c] border border-[#151b20]\">Gerrymandering</span>\n  </div>\n\n  <div class=\"p-3.5 rounded-xl bg-[#fff5f5] border-2 border-[#dc2626] mb-3\">\n    <strong class=\"text-[#991b1b] block text-xs font-mono font-black mb-1\">The Fairness Gerrymandering Paradox Matrix ($N = 200$)</strong>\n    <div class=\"grid grid-cols-2 sm:grid-cols-4 gap-2 text-center font-mono text-xs\">\n      <div class=\"p-2 rounded bg-white border border-[#dc2626]/30\">\n        <span class=\"text-[#64748b] text-[10px] block\">Black Men</span>\n        <strong class=\"text-[#15803d] text-sm\">50 / 50 (100%)</strong>\n      </div>\n      <div class=\"p-2 rounded bg-white border-2 border-[#dc2626]\">\n        <span class=\"text-[#b91c1c] text-[10px] font-black block\">Black Women</span>\n        <strong class=\"text-[#dc2626] text-sm\">0 / 50 (0%)</strong>\n      </div>\n      <div class=\"p-2 rounded bg-white border border-[#dc2626]/30\">\n        <span class=\"text-[#64748b] text-[10px] block\">White Men</span>\n        <strong class=\"text-[#dc2626] text-sm\">0 / 50 (0%)</strong>\n      </div>\n      <div class=\"p-2 rounded bg-white border border-[#dc2626]/30\">\n        <span class=\"text-[#64748b] text-[10px] block\">White Women</span>\n        <strong class=\"text-[#15803d] text-sm\">50 / 50 (100%)</strong>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono\">\n    <div class=\"p-3 rounded-xl bg-[#ecfdf5] border-2 border-[#059669]\">\n      <strong class=\"text-[#047857] block mb-1\">Marginal Parity Passed: 100% Blind</strong>\n      <div class=\"text-[11px] text-[#065f46] space-y-0.5\">\n        <div>• Race Parity: $\\mathbb{P}(\\hat{Y}=1 \\mid \\text{Black}) = \\mathbb{P}(\\hat{Y}=1 \\mid \\text{White}) = 50\\%$</div>\n        <div>• Gender Parity: $\\mathbb{P}(\\hat{Y}=1 \\mid \\text{Male}) = \\mathbb{P}(\\hat{Y}=1 \\mid \\text{Female}) = 50\\%$</div>\n      </div>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#ffd8ce] border-2 border-[#b91c1c]\">\n      <strong class=\"text-[#991b1b] block mb-1\">Subgroup Reality: Absolute Erasure</strong>\n      <div class=\"text-[11px] text-[#7f1d1d] space-y-0.5\">\n        <div>• Black Women acceptance rate: <strong>$0.0\\%$ (Excluded)</strong></div>\n        <div>• Intersectional auditing prevents marginal metrics from concealing subgroup discrimination.</div>\n      </div>\n    </div>\n  </div>\n</div>\n"
        },
        "duo": {
          "speaker": "Dr. Nova & Kaito",
          "title": "How Marginal Group Parity Hides Structured Subgroup Exclusion",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Look at that table! Both race parity and gender parity report 50 percent approval, so a dashboard tracking marginal metrics gives the model a perfect clean bill of health—while Black women are denied 100 percent of the time!",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "That is why modern regulatory audits under the EU AI Act and US EEOC demand intersectional subgroup evaluation across combined protected attributes. Now let's explore causal counterfactual fairness, which examines what happens when an attribute is intervened upon in a structural causal DAG.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono text-xs font-black text-[#b91c1c] uppercase tracking-wider\">Intersectional Auditing • Kearns et al. (2018)</span>\n    <span class=\"px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#ffd8ce] text-[#b91c1c] border border-[#151b20]\">Gerrymandering</span>\n  </div>\n\n  <div class=\"p-3.5 rounded-xl bg-[#fff5f5] border-2 border-[#dc2626] mb-3\">\n    <strong class=\"text-[#991b1b] block text-xs font-mono font-black mb-1\">The Fairness Gerrymandering Paradox Matrix ($N = 200$)</strong>\n    <div class=\"grid grid-cols-2 sm:grid-cols-4 gap-2 text-center font-mono text-xs\">\n      <div class=\"p-2 rounded bg-white border border-[#dc2626]/30\">\n        <span class=\"text-[#64748b] text-[10px] block\">Black Men</span>\n        <strong class=\"text-[#15803d] text-sm\">50 / 50 (100%)</strong>\n      </div>\n      <div class=\"p-2 rounded bg-white border-2 border-[#dc2626]\">\n        <span class=\"text-[#b91c1c] text-[10px] font-black block\">Black Women</span>\n        <strong class=\"text-[#dc2626] text-sm\">0 / 50 (0%)</strong>\n      </div>\n      <div class=\"p-2 rounded bg-white border border-[#dc2626]/30\">\n        <span class=\"text-[#64748b] text-[10px] block\">White Men</span>\n        <strong class=\"text-[#dc2626] text-sm\">0 / 50 (0%)</strong>\n      </div>\n      <div class=\"p-2 rounded bg-white border border-[#dc2626]/30\">\n        <span class=\"text-[#64748b] text-[10px] block\">White Women</span>\n        <strong class=\"text-[#15803d] text-sm\">50 / 50 (100%)</strong>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono\">\n    <div class=\"p-3 rounded-xl bg-[#ecfdf5] border-2 border-[#059669]\">\n      <strong class=\"text-[#047857] block mb-1\">Marginal Parity Passed: 100% Blind</strong>\n      <div class=\"text-[11px] text-[#065f46] space-y-0.5\">\n        <div>• Race Parity: $\\mathbb{P}(\\hat{Y}=1 \\mid \\text{Black}) = \\mathbb{P}(\\hat{Y}=1 \\mid \\text{White}) = 50\\%$</div>\n        <div>• Gender Parity: $\\mathbb{P}(\\hat{Y}=1 \\mid \\text{Male}) = \\mathbb{P}(\\hat{Y}=1 \\mid \\text{Female}) = 50\\%$</div>\n      </div>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#ffd8ce] border-2 border-[#b91c1c]\">\n      <strong class=\"text-[#991b1b] block mb-1\">Subgroup Reality: Absolute Erasure</strong>\n      <div class=\"text-[11px] text-[#7f1d1d] space-y-0.5\">\n        <div>• Black Women acceptance rate: <strong>$0.0\\%$ (Excluded)</strong></div>\n        <div>• Intersectional auditing prevents marginal metrics from concealing subgroup discrimination.</div>\n      </div>\n    </div>\n  </div>\n</div>\n"
        }
      },
      {
        "id": "s11",
        "title": "Counterfactual Fairness via Causal DAGs",
        "type": "concept",
        "solo": {
          "speaker": "Dr. Nova",
          "title": "Pearlian Interventions and Invariance Over Latent Noise U",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Purely observational fairness metrics fail whenever protected attributes causally distort downstream features. In 2017, Matt Kusner, Joshua Loftus, Chris Russell, and Ricardo Silva formulated Counterfactual Fairness using Judea Pearl's Structural Causal Models.",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Under Counterfactual Fairness, a decision Y-hat for an individual must remain invariant in a counterfactual world where their sensitive attribute A was intervened upon via do-calculus, while all latent exogenous background variables U remain fixed. As the theorem proves, any model training directly on observable features X that are causal descendants of A—such as income, zip code, or credit utilization—violates counterfactual fairness through proxy leakage. To achieve counterfactual fairness, the model must predict solely from abducted exogenous variables U or non-descendant features.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono text-xs font-black text-[#0e7490] uppercase tracking-wider\">Causal Identification • Kusner et al. (2017)</span>\n    <span class=\"px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#c9f3f4] text-[#0e7490] border border-[#151b20]\">Do-Calculus Invariance</span>\n  </div>\n\n  <div class=\"p-4 rounded-xl bg-[#f0f9ff] border-2 border-[#0284c7] mb-3 text-center\">\n    <div class=\"font-mono text-xs font-bold text-[#0369a1] mb-1\">The Counterfactual Fairness Invariance Criterion</div>\n    <div class=\"text-xs sm:text-sm font-mono font-black text-[#0c4a6e] overflow-x-auto\">\n      $$\\boxed{\\mathbb{P}\\left(\\hat{Y}_{A \\leftarrow a}(U) = y \\;\\middle|\\; X = x, A = a\\right) = \\mathbb{P}\\left(\\hat{Y}_{A \\leftarrow a'}(U) = y \\;\\middle|\\; X = x, A = a\\right), \\quad \\forall a, a', \\forall y}$$\n    </div>\n  </div>\n\n  <div class=\"grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono\">\n    <div class=\"p-3 rounded-xl bg-[#ffffff] border-2 border-[#151b20]\">\n      <strong class=\"text-[#0e7490] block mb-1\">Structural Causal Model (SCM) Assignment</strong>\n      <div class=\"text-[11px] text-[#475569] leading-relaxed\">\n        $$X = g(A, U), \\quad Y = h(X, A, U), \\quad U \\perp A$$\n        Where $U$ denotes unobserved background talent, health, or drive. When we intervene $\\text{do}(A \\leftarrow a')$, mediated descendants shift: $X_{A \\leftarrow a'} = g(a', U) \\ne X$.\n      </div>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#ecfdf5] border-2 border-[#059669]\">\n      <strong class=\"text-[#047857] block mb-1\">Sufficient Condition: Latent Invariant Predictor</strong>\n      <div class=\"text-[11px] text-[#065f46] leading-relaxed\">\n        $$\\hat{Y} = f(U) \\implies \\text{Counterfactually Fair}$$\n        Predicting solely from abducted latent factors $U$ eliminates all direct ($A \\to \\hat{Y}$) and mediated ($A \\to X \\to \\hat{Y}$) causal paths.\n      </div>\n    </div>\n  </div>\n</div>\n"
        },
        "duo": {
          "speaker": "Dr. Nova & Kaito",
          "title": "Pearlian Interventions and Invariance Over Latent Noise U",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "This explains why 'Fairness Through Unawareness' fails completely! Even if you hide race A from the model, if zip code and income are causal descendants of race in the DAG, intervening on A changes those features, so the prediction still changes!",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Exactly, Kaito! Causal counterfactual fairness requires that if we could magically flip someone's protected attribute while holding their innate abilities U constant, the model's decision would not change. Now let's explore the empirical cost of enforcing these constraints: the Fairness-Accuracy Pareto Frontier in Simulator 7.6 Tab B!",
              "dock": "sim"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono text-xs font-black text-[#0e7490] uppercase tracking-wider\">Causal Identification • Kusner et al. (2017)</span>\n    <span class=\"px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#c9f3f4] text-[#0e7490] border border-[#151b20]\">Do-Calculus Invariance</span>\n  </div>\n\n  <div class=\"p-4 rounded-xl bg-[#f0f9ff] border-2 border-[#0284c7] mb-3 text-center\">\n    <div class=\"font-mono text-xs font-bold text-[#0369a1] mb-1\">The Counterfactual Fairness Invariance Criterion</div>\n    <div class=\"text-xs sm:text-sm font-mono font-black text-[#0c4a6e] overflow-x-auto\">\n      $$\\boxed{\\mathbb{P}\\left(\\hat{Y}_{A \\leftarrow a}(U) = y \\;\\middle|\\; X = x, A = a\\right) = \\mathbb{P}\\left(\\hat{Y}_{A \\leftarrow a'}(U) = y \\;\\middle|\\; X = x, A = a\\right), \\quad \\forall a, a', \\forall y}$$\n    </div>\n  </div>\n\n  <div class=\"grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono\">\n    <div class=\"p-3 rounded-xl bg-[#ffffff] border-2 border-[#151b20]\">\n      <strong class=\"text-[#0e7490] block mb-1\">Structural Causal Model (SCM) Assignment</strong>\n      <div class=\"text-[11px] text-[#475569] leading-relaxed\">\n        $$X = g(A, U), \\quad Y = h(X, A, U), \\quad U \\perp A$$\n        Where $U$ denotes unobserved background talent, health, or drive. When we intervene $\\text{do}(A \\leftarrow a')$, mediated descendants shift: $X_{A \\leftarrow a'} = g(a', U) \\ne X$.\n      </div>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#ecfdf5] border-2 border-[#059669]\">\n      <strong class=\"text-[#047857] block mb-1\">Sufficient Condition: Latent Invariant Predictor</strong>\n      <div class=\"text-[11px] text-[#065f46] leading-relaxed\">\n        $$\\hat{Y} = f(U) \\implies \\text{Counterfactually Fair}$$\n        Predicting solely from abducted latent factors $U$ eliminates all direct ($A \\to \\hat{Y}$) and mediated ($A \\to X \\to \\hat{Y}$) causal paths.\n      </div>\n    </div>\n  </div>\n</div>\n"
        }
      },
      {
        "id": "s12",
        "title": "Interactive Lab: Pareto Trade-off Studio",
        "type": "interactive_lab",
        "solo": {
          "speaker": "Dr. Nova",
          "title": "Simulator 7.6 Tab B: Pareto Trade-off Studio",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Welcome to Interactive Lab 2: Simulator 7.6 Tab B, the Pareto Trade-off Studio. Here, we analyze Empirical Risk Minimization under Lagrangian fairness penalties: minimizing cross-entropy loss plus lambda times disparity.",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Notice how dragging the lambda slider to the right compresses disparity delta toward zero, but traces downward along the purple Pareto curve, sacrificing raw accuracy. This difference represents the Cost of Fairness. Switch between Demographic Parity, Equalized Odds, and Calibration to observe how different ethical objectives shift the Pareto operating frontier.",
              "dock": "sim"
            }
          ],
          "contentHtml": "\n<div class=\"p-4 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-2 border-b-2 border-[#151b20]/15 flex-wrap gap-2\">\n    <div class=\"flex items-center gap-2 font-mono font-black text-xs md:text-sm text-[#7c3aed] uppercase tracking-wide\">\n      <span>🔬</span> Interactive Lab 2: Pareto Trade-off Studio\n    </div>\n    <span class=\"px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black bg-[#ede9fe] text-[#6d28d9] border-2 border-[#151b20]\">\n      Simulator 7.6 Tab B\n    </span>\n  </div>\n\n  <p class=\"text-xs text-[#151b20]/80 font-sans mb-3\">\n    Analyze the <strong>Accuracy-Fairness Pareto Frontier</strong> under Lagrangian regularized learning: $\\min_\\theta \\mathcal{L}(\\theta) + \\lambda \\mathcal{D}_{\\text{fair}}(\\theta)$. Inspect how tightening fairness regularizers reduces disparity at the cost of task utility.\n  </p>\n\n  <div class=\"p-3 rounded-lg bg-[#fffaf0] border border-[#d97706] text-xs font-mono text-[#78350f] mb-2\">\n    <strong>Lab Objectives:</strong>\n    <ol class=\"list-decimal pl-5 space-y-1 mt-1\">\n      <li>At default $\\lambda = 0.35$, observe operating accuracy at <strong>$74.7\\%$</strong> with residual disparity <strong>$0.104$</strong> (`MODERATE DISPARITY`).</li>\n      <li>Increase fairness penalty $\\lambda \\to 0.80$ to force disparity below <strong>$0.050$</strong> (`COMPLIANT`), observing the <strong>Cost of Fairness ($-8.5\\%$ Acc)</strong>.</li>\n      <li>Switch the objective dropdown between <strong>Demographic Parity</strong>, <strong>Equalized Odds</strong>, and <strong>Calibration</strong> to compare operating tradeoffs.</li>\n    </ol>\n  </div>\n</div>\n"
        },
        "duo": {
          "speaker": "Dr. Nova & Kaito",
          "title": "Simulator 7.6 Tab B: Pareto Trade-off Studio",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Look at the red dot sliding along that purple Pareto curve in Tab B! As lambda increases from zero to 0.70, residual disparity drops from 0.32 all the way down below 0.05, but accuracy drops from 77 percent to 70 percent!",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "That drop is the literal Cost of Fairness, Kaito. Restricting your hypothesis space to fair classifiers eliminates unconstrained predictive shortcuts that exploit demographic correlation. Try adjusting the separability slider d-prime to see how cleaner feature engineering shifts the entire frontier upward!",
              "dock": "sim"
            }
          ],
          "contentHtml": "\n<div class=\"p-4 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-2 border-b-2 border-[#151b20]/15 flex-wrap gap-2\">\n    <div class=\"flex items-center gap-2 font-mono font-black text-xs md:text-sm text-[#7c3aed] uppercase tracking-wide\">\n      <span>🔬</span> Interactive Lab 2: Pareto Trade-off Studio\n    </div>\n    <span class=\"px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black bg-[#ede9fe] text-[#6d28d9] border-2 border-[#151b20]\">\n      Simulator 7.6 Tab B\n    </span>\n  </div>\n\n  <p class=\"text-xs text-[#151b20]/80 font-sans mb-3\">\n    Analyze the <strong>Accuracy-Fairness Pareto Frontier</strong> under Lagrangian regularized learning: $\\min_\\theta \\mathcal{L}(\\theta) + \\lambda \\mathcal{D}_{\\text{fair}}(\\theta)$. Inspect how tightening fairness regularizers reduces disparity at the cost of task utility.\n  </p>\n\n  <div class=\"p-3 rounded-lg bg-[#fffaf0] border border-[#d97706] text-xs font-mono text-[#78350f] mb-2\">\n    <strong>Lab Objectives:</strong>\n    <ol class=\"list-decimal pl-5 space-y-1 mt-1\">\n      <li>At default $\\lambda = 0.35$, observe operating accuracy at <strong>$74.7\\%$</strong> with residual disparity <strong>$0.104$</strong> (`MODERATE DISPARITY`).</li>\n      <li>Increase fairness penalty $\\lambda \\to 0.80$ to force disparity below <strong>$0.050$</strong> (`COMPLIANT`), observing the <strong>Cost of Fairness ($-8.5\\%$ Acc)</strong>.</li>\n      <li>Switch the objective dropdown between <strong>Demographic Parity</strong>, <strong>Equalized Odds</strong>, and <strong>Calibration</strong> to compare operating tradeoffs.</li>\n    </ol>\n  </div>\n</div>\n"
        }
      },
      {
        "id": "s13",
        "title": "Active Checkpoint 2: Counterfactual Invariance",
        "type": "checkpoint",
        "solo": {
          "speaker": "Dr. Nova",
          "title": "Active Checkpoint 2: Causal Descendants & Unawareness Failure",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Let us test your causal reasoning in Active Checkpoint 2. A bank trains a mortgage approval model that omits the applicant's protected race attribute A, satisfying Fairness Through Unawareness. However, the model includes zip code Z and university attended U, which are causal descendants of race in the structural DAG. Why does this model violate Kusner's Counterfactual Fairness definition?",
              "dock": "quiz"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-2 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono text-xs font-black text-[#0e7490] uppercase tracking-wider\">Active Checkpoint 7.6.2 • Causal Counterfactual Analysis</span>\n    <span class=\"px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black bg-[#c9f3f4] text-[#0e7490] border-2 border-[#151b20]\">Self-Assessment</span>\n  </div>\n  <p class=\"text-xs text-[#151b20] font-sans mb-1\">\n    Analyze why omitting protected attribute $A$ while retaining descendant mediators $Z$ and $U$ in causal DAG ($A \\to Z, A \\to U$) breaches counterfactual fairness:\n  </p>\n</div>\n"
        },
        "duo": {
          "speaker": "Dr. Nova & Kaito",
          "title": "Active Checkpoint 2: Causal Descendants & Unawareness Failure",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Checkpoint 2 challenges your DAG intuition! If race causally influences zip code and university in the real world, think about what happens when Pearl's do-intervention switches A from 0 to 1!",
              "dock": "quiz"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Consider how mediated causal paths leak sensitive information into downstream predictions. Choose the rigorous explanation in the checkpoint dock below.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-2 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono text-xs font-black text-[#0e7490] uppercase tracking-wider\">Active Checkpoint 7.6.2 • Causal Counterfactual Analysis</span>\n    <span class=\"px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black bg-[#c9f3f4] text-[#0e7490] border-2 border-[#151b20]\">Self-Assessment</span>\n  </div>\n  <p class=\"text-xs text-[#151b20] font-sans mb-1\">\n    Analyze why omitting protected attribute $A$ while retaining descendant mediators $Z$ and $U$ in causal DAG ($A \\to Z, A \\to U$) breaches counterfactual fairness:\n  </p>\n</div>\n"
        }
      },
      {
        "id": "s14",
        "title": "Context-Driven Metric Selection & Harm Analysis",
        "type": "concept",
        "solo": {
          "speaker": "Dr. Nova",
          "title": "Mapping Ethical Philosophy to Decision Contexts",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Because no single metric satisfies all fairness desiderata, engineering leaders must align their choice of metric directly with the harm taxonomy of their application.",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "In punitive systems—such as criminal bail, fraud detention, and predictive policing—the primary harm is false accusation; here, engineering must enforce Equal False Positive Rates under Separation. In assistive systems—such as medical interventions and scholarships—the primary harm is withheld opportunity; here, teams must enforce Equal True Positive Rates or Equal Opportunity. In regulated hiring and credit, legal statutes mandate Demographic Parity under the EEOC 80 percent rule. Finally, in actuarial risk pricing, Sufficiency ensures continuous interpretability, paired with mandatory human review.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono text-xs font-black text-[#0e7490] uppercase tracking-wider\">Normative Taxonomy • Harm Analysis Decision Tree</span>\n    <span class=\"px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#e7f4c8] text-[#15803d] border border-[#151b20]\">Deployment Alignment</span>\n  </div>\n\n  <div class=\"grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono\">\n    <div class=\"p-3 rounded-xl bg-[#fff5f5] border-2 border-[#dc2626]\">\n      <strong class=\"text-[#991b1b] block mb-1\">1. Punitive Contexts (Bail, Arrest, Fraud)</strong>\n      <span class=\"text-[11px] text-[#7f1d1d] block leading-relaxed\">\n        <strong>Primary Risk:</strong> Erroneous accusation &amp; detention.<br>\n        <strong>Mandated Metric:</strong> <strong>Equal False Positive Rates (FPR)</strong> ($\\text{FPR}_0 = \\text{FPR}_1$). Protects innocent citizens from disparate incarceration.\n      </span>\n    </div>\n\n    <div class=\"p-3 rounded-xl bg-[#ecfdf5] border-2 border-[#059669]\">\n      <strong class=\"text-[#047857] block mb-1\">2. Assistive Contexts (Scholarships, Health)</strong>\n      <span class=\"text-[11px] text-[#065f46] block leading-relaxed\">\n        <strong>Primary Risk:</strong> Withheld life-saving benefit.<br>\n        <strong>Mandated Metric:</strong> <strong>Equal Opportunity (TPR)</strong> ($\\text{TPR}_0 = \\text{TPR}_1$). Guarantees qualified individuals access regardless of group.\n      </span>\n    </div>\n\n    <div class=\"p-3 rounded-xl bg-[#fffaf0] border-2 border-[#d97706]\">\n      <strong class=\"text-[#b45309] block mb-1\">3. Regulated Allocation (Hiring, Credit)</strong>\n      <span class=\"text-[11px] text-[#78350f] block leading-relaxed\">\n        <strong>Primary Risk:</strong> Systemic societal exclusion &amp; litigation.<br>\n        <strong>Mandated Metric:</strong> <strong>Demographic Parity</strong> ($\\text{DIR} \\ge 0.80$). Enforces Title VII compliance while mitigating Pareto accuracy penalties.\n      </span>\n    </div>\n\n    <div class=\"p-3 rounded-xl bg-[#f0f9ff] border-2 border-[#0284c7]\">\n      <strong class=\"text-[#0369a1] block mb-1\">4. Actuarial Risk Pricing (ICU, Insurance)</strong>\n      <span class=\"text-[11px] text-[#0c4a6e] block leading-relaxed\">\n        <strong>Primary Risk:</strong> Miscalibrated clinical risk scores.<br>\n        <strong>Mandated Metric:</strong> <strong>Predictive Calibration (Sufficiency)</strong>, supplemented with mandatory human appeal panels for disparate error margins.\n      </span>\n    </div>\n  </div>\n</div>\n"
        },
        "duo": {
          "speaker": "Dr. Nova & Kaito",
          "title": "Mapping Ethical Philosophy to Decision Contexts",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "This harm taxonomy is so clear! In criminal justice, sending an innocent person to jail is a catastrophic false positive, so you prioritize equal FPR! In scholarships or medical treatments, denying a qualified person is a false negative, so you prioritize equal TPR!",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Precisely right, Kaito. Fairness is not a universal mathematical constant; it is an ethical commitment tailored to the asymmetries of real-world harm. Let us examine this exact dilemma in a real hospital case study: ICU ventilator allocation.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono text-xs font-black text-[#0e7490] uppercase tracking-wider\">Normative Taxonomy • Harm Analysis Decision Tree</span>\n    <span class=\"px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#e7f4c8] text-[#15803d] border border-[#151b20]\">Deployment Alignment</span>\n  </div>\n\n  <div class=\"grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono\">\n    <div class=\"p-3 rounded-xl bg-[#fff5f5] border-2 border-[#dc2626]\">\n      <strong class=\"text-[#991b1b] block mb-1\">1. Punitive Contexts (Bail, Arrest, Fraud)</strong>\n      <span class=\"text-[11px] text-[#7f1d1d] block leading-relaxed\">\n        <strong>Primary Risk:</strong> Erroneous accusation &amp; detention.<br>\n        <strong>Mandated Metric:</strong> <strong>Equal False Positive Rates (FPR)</strong> ($\\text{FPR}_0 = \\text{FPR}_1$). Protects innocent citizens from disparate incarceration.\n      </span>\n    </div>\n\n    <div class=\"p-3 rounded-xl bg-[#ecfdf5] border-2 border-[#059669]\">\n      <strong class=\"text-[#047857] block mb-1\">2. Assistive Contexts (Scholarships, Health)</strong>\n      <span class=\"text-[11px] text-[#065f46] block leading-relaxed\">\n        <strong>Primary Risk:</strong> Withheld life-saving benefit.<br>\n        <strong>Mandated Metric:</strong> <strong>Equal Opportunity (TPR)</strong> ($\\text{TPR}_0 = \\text{TPR}_1$). Guarantees qualified individuals access regardless of group.\n      </span>\n    </div>\n\n    <div class=\"p-3 rounded-xl bg-[#fffaf0] border-2 border-[#d97706]\">\n      <strong class=\"text-[#b45309] block mb-1\">3. Regulated Allocation (Hiring, Credit)</strong>\n      <span class=\"text-[11px] text-[#78350f] block leading-relaxed\">\n        <strong>Primary Risk:</strong> Systemic societal exclusion &amp; litigation.<br>\n        <strong>Mandated Metric:</strong> <strong>Demographic Parity</strong> ($\\text{DIR} \\ge 0.80$). Enforces Title VII compliance while mitigating Pareto accuracy penalties.\n      </span>\n    </div>\n\n    <div class=\"p-3 rounded-xl bg-[#f0f9ff] border-2 border-[#0284c7]\">\n      <strong class=\"text-[#0369a1] block mb-1\">4. Actuarial Risk Pricing (ICU, Insurance)</strong>\n      <span class=\"text-[11px] text-[#0c4a6e] block leading-relaxed\">\n        <strong>Primary Risk:</strong> Miscalibrated clinical risk scores.<br>\n        <strong>Mandated Metric:</strong> <strong>Predictive Calibration (Sufficiency)</strong>, supplemented with mandatory human appeal panels for disparate error margins.\n      </span>\n    </div>\n  </div>\n</div>\n"
        }
      },
      {
        "id": "s15",
        "title": "Case Study: Critical Care ICU Ventilator Triage",
        "type": "case_study",
        "solo": {
          "speaker": "Dr. Nova",
          "title": "Pandemic Equipment Rationing and the 6.00x Denial Disparity",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Let us examine an urgent empirical case study from Castelnovo and colleagues in 2022, analyzing algorithmic risk scores like SOFA and APACHE-IV during ICU ventilator rationing across 35,000 patient admissions.",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "In the hospital cohort, baseline mortality for patients under 45 was 6.2 percent, whereas baseline mortality for patients over 75 was 28.4 percent. The ratio of prior odds evaluated to exactly 6.00 times! Chief medical officers demanded Sufficiency: an 80 percent mortality score must mean an identical 80 percent chance of death for all ages. But geriatric patient advocacy groups demanded Separation: salvageable elderly patients must not be falsely denied ventilators at higher rates. By Chouldechova's theorem, calibrating the score mathematically compelled elderly patients to suffer a six times higher rate of false fatal denial! To resolve the crisis, the hospital maintained calibration for physician guidance, but strictly barred automated triage cutoffs, mandating human clinical appeal panels whenever rationing affected vulnerable cohorts.",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono text-xs font-black text-[#b91c1c] uppercase tracking-wider\">Empirical Clinical Case Study • Castelnovo et al. (2022)</span>\n    <span class=\"px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#fee2e2] text-[#b91c1c] border border-[#151b20]\">35,000 ICU Admissions</span>\n  </div>\n\n  <div class=\"grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono mb-3\">\n    <div class=\"p-3 rounded-xl bg-[#fff5f5] border-2 border-[#dc2626]\">\n      <strong class=\"text-[#991b1b] block mb-1\">Base Mortality Disparity ($N = 35{,}000$)</strong>\n      <div class=\"text-[11px] text-[#7f1d1d] space-y-1\">\n        <div>• Age &lt; 45 Mortality: $p_0 = 6.2\\% \\implies \\text{Odds}(p_0) = 0.0661$</div>\n        <div>• Age &gt; 75 Mortality: $p_1 = 28.4\\% \\implies \\text{Odds}(p_1) = 0.3966$</div>\n        <div>• <strong>Prior Odds Disparity Ratio:</strong> $\\frac{0.3966}{0.0661} = \\mathbf{6.00\\times}$</div>\n      </div>\n    </div>\n\n    <div class=\"p-3 rounded-xl bg-[#f0f9ff] border-2 border-[#0284c7]\">\n      <strong class=\"text-[#0369a1] block mb-1\">The Inescapable Ethical Collision</strong>\n      <div class=\"text-[11px] text-[#0c4a6e] space-y-1\">\n        <div>• <strong>Hospital CMOs:</strong> Demanded Calibration (Sufficiency) so clinicians can trust score magnitudes across age cohorts.</div>\n        <div>• <strong>Patient Rights:</strong> Demanded Equal FPR (Separation) so salvageable seniors are not falsely denied care.</div>\n        <div>• <strong>Chouldechova Reality:</strong> Calibration forced elderly false fatal denial to be <strong>$6.00\\times$ higher</strong>!</div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"p-3 rounded-xl bg-[#e7f4c8] border-2 border-[#15803d] text-xs font-mono text-[#14532d]\">\n    <strong>The Production Resolution Protocol:</strong> Retain continuous calibrated risk scores for bedside physician awareness, but eliminate all automated hard cutoffs. Mandate secondary multidisciplinary clinical appeals before any ventilator withholding decision takes effect.\n  </div>\n</div>\n"
        },
        "duo": {
          "speaker": "Dr. Nova & Kaito",
          "title": "Pandemic Equipment Rationing and the 6.00x Denial Disparity",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "A six-fold higher rate of false fatal denial! That shows why mathematical theorems aren't dry academic exercises—in an intensive care unit, Chouldechova's impossibility theorem literally decides who lives and who dies!",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Indeed, Kaito. By acknowledging the impossibility theorem rather than pretending both metrics were satisfied, the hospital established human appeal safeguards. Now let's review our Capstone Pydantic V2 verification suite and the Four Cardinal Rules of Lesson 7.6!",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono text-xs font-black text-[#b91c1c] uppercase tracking-wider\">Empirical Clinical Case Study • Castelnovo et al. (2022)</span>\n    <span class=\"px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#fee2e2] text-[#b91c1c] border border-[#151b20]\">35,000 ICU Admissions</span>\n  </div>\n\n  <div class=\"grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono mb-3\">\n    <div class=\"p-3 rounded-xl bg-[#fff5f5] border-2 border-[#dc2626]\">\n      <strong class=\"text-[#991b1b] block mb-1\">Base Mortality Disparity ($N = 35{,}000$)</strong>\n      <div class=\"text-[11px] text-[#7f1d1d] space-y-1\">\n        <div>• Age &lt; 45 Mortality: $p_0 = 6.2\\% \\implies \\text{Odds}(p_0) = 0.0661$</div>\n        <div>• Age &gt; 75 Mortality: $p_1 = 28.4\\% \\implies \\text{Odds}(p_1) = 0.3966$</div>\n        <div>• <strong>Prior Odds Disparity Ratio:</strong> $\\frac{0.3966}{0.0661} = \\mathbf{6.00\\times}$</div>\n      </div>\n    </div>\n\n    <div class=\"p-3 rounded-xl bg-[#f0f9ff] border-2 border-[#0284c7]\">\n      <strong class=\"text-[#0369a1] block mb-1\">The Inescapable Ethical Collision</strong>\n      <div class=\"text-[11px] text-[#0c4a6e] space-y-1\">\n        <div>• <strong>Hospital CMOs:</strong> Demanded Calibration (Sufficiency) so clinicians can trust score magnitudes across age cohorts.</div>\n        <div>• <strong>Patient Rights:</strong> Demanded Equal FPR (Separation) so salvageable seniors are not falsely denied care.</div>\n        <div>• <strong>Chouldechova Reality:</strong> Calibration forced elderly false fatal denial to be <strong>$6.00\\times$ higher</strong>!</div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"p-3 rounded-xl bg-[#e7f4c8] border-2 border-[#15803d] text-xs font-mono text-[#14532d]\">\n    <strong>The Production Resolution Protocol:</strong> Retain continuous calibrated risk scores for bedside physician awareness, but eliminate all automated hard cutoffs. Mandate secondary multidisciplinary clinical appeals before any ventilator withholding decision takes effect.\n  </div>\n</div>\n"
        }
      },
      {
        "id": "s16",
        "title": "Production Implementation: Pydantic V2 & 4 Cardinal Rules",
        "type": "capstone",
        "solo": {
          "speaker": "Dr. Nova",
          "title": "Production Verification Contracts & Key Takeaways",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "In production machine learning pipelines, fairness is audited and enforced through typed Pydantic V2 contracts. In test_ch7_p6_pydantic.py, we validate ChouldechovaAuditContract to prove algebraic impossibility, LipschitzIndividualFairnessContract to ensure metric continuity, and CounterfactualAuditContract to verify causal invariance under Pearlian do-interventions.",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Carry forward our Four Cardinal Rules of Lesson 7.6: First, never promise to satisfy all fairness criteria simultaneously when base rates differ—acknowledge the trilemma. Second, align your metric selection with the asymmetry of decision harm: prioritize Separation on FPR for punitive tasks, Separation on TPR for assistive tasks, and Sufficiency for risk calibration. Third, audit beyond marginal group averages using intersectional cross-tabs and Lipschitz metrics to prevent fairness gerrymandering. And fourth, eliminate causal descendant leakage in feature DAGs to achieve true counterfactual fairness. Thank you for completing Lesson 7.6!",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono text-xs font-black text-[#151b20] uppercase tracking-wider\">Production Capstone • Pydantic V2 Verification &amp; 4 Cardinal Rules</span>\n    <span class=\"px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#ffc83e] text-[#151b20] border border-[#151b20]\">Lesson 7.6 Complete</span>\n  </div>\n\n  <div class=\"grid grid-cols-1 md:grid-cols-2 gap-3 mb-3 text-xs font-mono\">\n    <div class=\"p-3 rounded-xl bg-[#fffaf0] border-2 border-[#d97706]\">\n      <strong class=\"text-[#b45309] block mb-1\">1. Respect Trilemma Inevitability</strong>\n      <span class=\"text-[11px] text-[#78350f]\">Never claim simultaneous Calibration and Error Parity when base rates differ ($p_0 \\ne p_1$). Acknowledge the mathematical constraint.</span>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#f0f9ff] border-2 border-[#0284c7]\">\n      <strong class=\"text-[#0369a1] block mb-1\">2. Match Metric to Decision Harm</strong>\n      <span class=\"text-[11px] text-[#0c4a6e]\">Enforce Equal FPR for punitive bail/fraud; Equal TPR for assistive scholarships; Sufficiency for clinical risk scores.</span>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#fff5f5] border-2 border-[#dc2626]\">\n      <strong class=\"text-[#b91c1c] block mb-1\">3. Guard Against Gerrymandering</strong>\n      <span class=\"text-[11px] text-[#7f1d1d]\">Audit intersectional subgroups and enforce pairwise Lipschitz bounds ($D_{\\mathcal{Y}} \\le L d_{\\mathcal{X}}$) to prevent subgroup erasure.</span>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#ecfdf5] border-2 border-[#059669]\">\n      <strong class=\"text-[#047857] block mb-1\">4. Enforce Causal Invariance</strong>\n      <span class=\"text-[11px] text-[#065f46]\">Reject Fairness Through Unawareness whenever features are causal descendants of $A$. Predict from exogenous $U$.</span>\n    </div>\n  </div>\n\n  <div class=\"p-3 rounded-lg bg-[#151b20] text-[#fffdf7] font-mono text-[11px] leading-relaxed\">\n    <span class=\"text-[#ffc83e] font-bold\"># Production Algorithmic Auditing (test_ch7_p6_pydantic.py)</span><br>\n    assert chould_contract.identity_verified and chould_contract.impossibility_active<br>\n    assert lipschitz_contract.satisfies_individual_fairness and cf_contract.is_counterfactually_fair\n  </div>\n</div>\n"
        },
        "duo": {
          "speaker": "Dr. Nova & Kaito",
          "title": "Production Verification Contracts & Key Takeaways",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Wiring Chouldechova's impossibility identity, Lipschitz individual bounds, and SCM counterfactual audits directly into typed Pydantic V2 contracts bridges academic fairness papers straight into CI/CD pipelines!",
              "dock": "main"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Exactly, Kaito. By mastering the mathematical trilemma, engineers replace vague ethical promises with transparent, verifiable trade-offs along the Pareto frontier.",
              "dock": "main"
            },
            {
              "speaker": "Kaito",
              "text": "Coming up next in Lesson 7.7, we discover how to actively MITIGATE bias across pre-processing, in-processing, and post-processing stages! Thank you for joining Lesson 7.6!",
              "dock": "main"
            }
          ],
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2\">\n  <div class=\"flex items-center justify-between pb-2 mb-3 border-b-2 border-[#151b20]/15\">\n    <span class=\"font-mono text-xs font-black text-[#151b20] uppercase tracking-wider\">Production Capstone • Pydantic V2 Verification &amp; 4 Cardinal Rules</span>\n    <span class=\"px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#ffc83e] text-[#151b20] border border-[#151b20]\">Lesson 7.6 Complete</span>\n  </div>\n\n  <div class=\"grid grid-cols-1 md:grid-cols-2 gap-3 mb-3 text-xs font-mono\">\n    <div class=\"p-3 rounded-xl bg-[#fffaf0] border-2 border-[#d97706]\">\n      <strong class=\"text-[#b45309] block mb-1\">1. Respect Trilemma Inevitability</strong>\n      <span class=\"text-[11px] text-[#78350f]\">Never claim simultaneous Calibration and Error Parity when base rates differ ($p_0 \\ne p_1$). Acknowledge the mathematical constraint.</span>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#f0f9ff] border-2 border-[#0284c7]\">\n      <strong class=\"text-[#0369a1] block mb-1\">2. Match Metric to Decision Harm</strong>\n      <span class=\"text-[11px] text-[#0c4a6e]\">Enforce Equal FPR for punitive bail/fraud; Equal TPR for assistive scholarships; Sufficiency for clinical risk scores.</span>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#fff5f5] border-2 border-[#dc2626]\">\n      <strong class=\"text-[#b91c1c] block mb-1\">3. Guard Against Gerrymandering</strong>\n      <span class=\"text-[11px] text-[#7f1d1d]\">Audit intersectional subgroups and enforce pairwise Lipschitz bounds ($D_{\\mathcal{Y}} \\le L d_{\\mathcal{X}}$) to prevent subgroup erasure.</span>\n    </div>\n    <div class=\"p-3 rounded-xl bg-[#ecfdf5] border-2 border-[#059669]\">\n      <strong class=\"text-[#047857] block mb-1\">4. Enforce Causal Invariance</strong>\n      <span class=\"text-[11px] text-[#065f46]\">Reject Fairness Through Unawareness whenever features are causal descendants of $A$. Predict from exogenous $U$.</span>\n    </div>\n  </div>\n\n  <div class=\"p-3 rounded-lg bg-[#151b20] text-[#fffdf7] font-mono text-[11px] leading-relaxed\">\n    <span class=\"text-[#ffc83e] font-bold\"># Production Algorithmic Auditing (test_ch7_p6_pydantic.py)</span><br>\n    assert chould_contract.identity_verified and chould_contract.impossibility_active<br>\n    assert lipschitz_contract.satisfies_individual_fairness and cf_contract.is_counterfactually_fair\n  </div>\n</div>\n"
        }
      }
    ]
  },
  "ch7_p7": {
    "chapter": 7,
    "part": 7,
    "key": "ch7_p7",
    "badge": "◆ TRACK 7 • LESSON 7.7: MITIGATING BIAS IN DATASETS AND MACHINE LEARNING PIPELINES",
    "index": "Lesson 7 of 10",
    "lessonTitle": "Mitigating Bias in Datasets and Machine Learning Pipelines",
    "slides": [
      {
        "id": "s1",
        "title": "Mitigating Bias in Datasets and Machine Learning Pipelines",
        "type": "title",
        "solo": {
          "speaker": "Dr. Nova (Senior Architect)",
          "title": "Mitigating Bias in Datasets and Machine Learning Pipelines",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Welcome to Lesson 7.7. Today we examine mitigating bias in datasets and machine learning pipelines, establishing the mathematical foundations and production discipline required to guarantee dataset reliability."
            }
          ],
          "contentHtml": "<div class=\"p-6 md:p-8 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#22bfd7] text-center space-y-4\">\n  <div class=\"inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#c9f3f4] text-[#0e7490] font-mono text-xs border-2 border-[#151b20] font-black uppercase tracking-wider shadow-[2px_2px_0px_#151b20]\">\n    <span>◆ Track 7: Foundations</span>\n    <span>•</span>\n    <span>Lesson 7.7</span>\n  </div>\n  <h2 class=\"text-2xl md:text-3xl font-black text-[#151b20] tracking-tight\">\n    Mitigating Bias in Datasets and Machine Learning Pipelines\n  </h2>\n  <p class=\"text-sm md:text-base text-[#334155] max-w-2xl mx-auto leading-relaxed font-medium\">\n    Deep dive into mitigating bias in datasets and machine learning pipelines with formal mathematical formulations, production engineering, and failure-mode analysis.\n  </p>\n  <div class=\"pt-2 flex flex-wrap items-center justify-center gap-2 font-mono text-xs\">\n    <span class=\"px-2.5 py-1 rounded-lg bg-[#fff0b9] border border-[#151b20] font-bold text-[#151b20]\">📐 Formal Foundations</span>\n    <span class=\"px-2.5 py-1 rounded-lg bg-[#ffd8ce] border border-[#151b20] font-bold text-[#151b20]\">⚠️ Failure Modes</span>\n    <span class=\"px-2.5 py-1 rounded-lg bg-[#c9f3f4] border border-[#151b20] font-bold text-[#151b20]\">🛡️ Production Contracts</span>\n  </div>\n</div>"
        },
        "duo": {
          "speaker": "Socratic Debate (Dr. Nova & Kaito)",
          "title": "Socratic Debate: Mitigating Bias in Datasets and Machine Learning Pipelines",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Dr. Nova, what is the core architectural challenge we are solving in Lesson 7.7?"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Welcome to Lesson 7.7. Today we examine mitigating bias in datasets and machine learning pipelines, establishing the mathematical foundations and production discipline required to guarantee dataset reliability."
            }
          ],
          "contentHtml": "<div class=\"p-6 md:p-8 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#22bfd7] text-center space-y-4\">\n  <div class=\"inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#c9f3f4] text-[#0e7490] font-mono text-xs border-2 border-[#151b20] font-black uppercase tracking-wider shadow-[2px_2px_0px_#151b20]\">\n    <span>◆ Track 7: Foundations</span>\n    <span>•</span>\n    <span>Lesson 7.7</span>\n  </div>\n  <h2 class=\"text-2xl md:text-3xl font-black text-[#151b20] tracking-tight\">\n    Mitigating Bias in Datasets and Machine Learning Pipelines\n  </h2>\n  <p class=\"text-sm md:text-base text-[#334155] max-w-2xl mx-auto leading-relaxed font-medium\">\n    Deep dive into mitigating bias in datasets and machine learning pipelines with formal mathematical formulations, production engineering, and failure-mode analysis.\n  </p>\n  <div class=\"pt-2 flex flex-wrap items-center justify-center gap-2 font-mono text-xs\">\n    <span class=\"px-2.5 py-1 rounded-lg bg-[#fff0b9] border border-[#151b20] font-bold text-[#151b20]\">📐 Formal Foundations</span>\n    <span class=\"px-2.5 py-1 rounded-lg bg-[#ffd8ce] border border-[#151b20] font-bold text-[#151b20]\">⚠️ Failure Modes</span>\n    <span class=\"px-2.5 py-1 rounded-lg bg-[#c9f3f4] border border-[#151b20] font-bold text-[#151b20]\">🛡️ Production Contracts</span>\n  </div>\n</div>"
        }
      },
      {
        "id": "s2",
        "title": "Conceptual Overview & The Tri-Partite Mitigation Taxonomy: Sample Re-weighting ([Kamiran & Calders, 2012](#ref-kamiran2012))",
        "type": "equation",
        "solo": {
          "speaker": "Dr. Nova (Senior Architect)",
          "title": "Conceptual Overview & The Tri-Partite Mitigation Taxonomy: Sample Re-weighting ([Kamiran & Calders, 2012](#ref-kamiran2012))",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Conceptual Overview & The Tri-Partite Mitigation Taxonomy: Sample Re-weighting ([Kamiran & Calders, 2012](#ref-kamiran2012)). Formalizing the empirical sample mathematically reveals that empirical risk only approximates true generalization risk when the i.i.d. assumption holds. When upstream sampling is biased, the empirical risk diverges asymptotically from true risk—no model tuning can fix that."
            }
          ],
          "contentHtml": "<div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] my-2 text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-1 text-left flex items-center justify-between\">\n    <span>📐 Mathematical Formulation</span>\n    <span class=\"text-[#151b20] text-[9px] font-mono bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Empirical Sample Formulation</span>\n  </div>\n  <div class=\"text-base md:text-lg font-serif text-[#151b20] py-1 overflow-x-auto bg-[#f0fbfd] border border-[#0e7490] rounded-lg my-1\">\n    $$W(A = a, Y = y) = \\frac{\\mathbb{P}(A = a) \\cdot \\mathbb{P}(Y = y)}{\\mathbb{P}(A = a, Y = y)}$$\n  </div>\n</div><div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] my-2 text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-1 text-left flex items-center justify-between\">\n    <span>📐 Mathematical Formulation</span>\n    <span class=\"text-[#151b20] text-[9px] font-mono bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Distribution Measure</span>\n  </div>\n  <div class=\"text-base md:text-lg font-serif text-[#151b20] py-1 overflow-x-auto bg-[#f0fbfd] border border-[#0e7490] rounded-lg my-1\">\n    $$W(a, y) = \\frac{\\frac{N_a}{N} \\cdot \\frac{N_y}{N}}{\\frac{N_{a, y}}{N}} = \\frac{N_a \\cdot N_y}{N \\cdot N_{a, y}}$$\n  </div>\n</div><div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] my-2 text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-1 text-left flex items-center justify-between\">\n    <span>📐 Mathematical Formulation</span>\n    <span class=\"text-[#151b20] text-[9px] font-mono bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Empirical Risk Proxy</span>\n  </div>\n  <div class=\"text-base md:text-lg font-serif text-[#151b20] py-1 overflow-x-auto bg-[#f0fbfd] border border-[#0e7490] rounded-lg my-1\">\n    $$\\mathbb{E}_W \\left[ \\mathbb{I}(A = a \\wedge Y = y) \\right] = \\mathbb{P}_W(A = a) \\cdot \\mathbb{P}_W(Y = y)$$\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">◆</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">Pre-processing techniques alter</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">the training dataset distribution without modifying downstream model architectures or loss functions.</span>\n  </div>\n</div>"
        },
        "duo": {
          "speaker": "Socratic Debate (Dr. Nova & Kaito)",
          "title": "Socratic Debate: Conceptual Overview & The Tri-Partite Mitigation Taxonomy: Sample Re-weighting ([Kamiran & Calders, 2012](#ref-kamiran2012))",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Dr. Nova, how does conceptual overview & the tri-partite mitigation taxonomy: sample re-weighting ([kamiran & calders, 2012](#ref-kamiran2012)) protect our system against silent distribution shift in production?"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Formalizing the empirical sample mathematically reveals that empirical risk only approximates true generalization risk when the i.i.d. assumption holds. When upstream sampling is biased, the empirical risk diverges asymptotically from true risk—no model tuning can fix that."
            }
          ],
          "contentHtml": "<div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] my-2 text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-1 text-left flex items-center justify-between\">\n    <span>📐 Mathematical Formulation</span>\n    <span class=\"text-[#151b20] text-[9px] font-mono bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Empirical Sample Formulation</span>\n  </div>\n  <div class=\"text-base md:text-lg font-serif text-[#151b20] py-1 overflow-x-auto bg-[#f0fbfd] border border-[#0e7490] rounded-lg my-1\">\n    $$W(A = a, Y = y) = \\frac{\\mathbb{P}(A = a) \\cdot \\mathbb{P}(Y = y)}{\\mathbb{P}(A = a, Y = y)}$$\n  </div>\n</div><div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] my-2 text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-1 text-left flex items-center justify-between\">\n    <span>📐 Mathematical Formulation</span>\n    <span class=\"text-[#151b20] text-[9px] font-mono bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Distribution Measure</span>\n  </div>\n  <div class=\"text-base md:text-lg font-serif text-[#151b20] py-1 overflow-x-auto bg-[#f0fbfd] border border-[#0e7490] rounded-lg my-1\">\n    $$W(a, y) = \\frac{\\frac{N_a}{N} \\cdot \\frac{N_y}{N}}{\\frac{N_{a, y}}{N}} = \\frac{N_a \\cdot N_y}{N \\cdot N_{a, y}}$$\n  </div>\n</div><div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] my-2 text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-1 text-left flex items-center justify-between\">\n    <span>📐 Mathematical Formulation</span>\n    <span class=\"text-[#151b20] text-[9px] font-mono bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Empirical Risk Proxy</span>\n  </div>\n  <div class=\"text-base md:text-lg font-serif text-[#151b20] py-1 overflow-x-auto bg-[#f0fbfd] border border-[#0e7490] rounded-lg my-1\">\n    $$\\mathbb{E}_W \\left[ \\mathbb{I}(A = a \\wedge Y = y) \\right] = \\mathbb{P}_W(A = a) \\cdot \\mathbb{P}_W(Y = y)$$\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">◆</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">Pre-processing techniques alter</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">the training dataset distribution without modifying downstream model architectures or loss functions.</span>\n  </div>\n</div>"
        }
      },
      {
        "id": "s3",
        "title": "Conceptual Overview & The Tri-Partite Mitigation Taxonomy: Architecture Flowchart",
        "type": "figure",
        "solo": {
          "speaker": "Dr. Nova (Senior Architect)",
          "title": "Conceptual Overview & The Tri-Partite Mitigation Taxonomy: Architecture Flowchart",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Conceptual Overview & The Tri-Partite Mitigation Taxonomy: Architecture Flowchart. This architecture diagram visualizes how physical observations transition across sampling boundaries into discrete tensor representations. Tracking each transition stage prevents undocumented transformations from corrupting the empirical distribution."
            }
          ],
          "contentHtml": "<div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[4px_4px_0px_#151b20] my-2 overflow-x-auto text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-2 text-left flex items-center justify-between border-b-2 border-[#151b20]/15 pb-1\">\n    <span class=\"flex items-center gap-1.5\">\n      <span>📊 Architecture &amp; Workflow Diagram</span>\n      <span class=\"text-[#151b20]/40\">•</span>\n      <span class=\"text-[#334155]\">System Flowchart</span>\n    </span>\n    <span class=\"text-[#0e7490] text-[9px] font-mono bg-[#c9f3f4] px-1.5 py-0.5 rounded border border-[#151b20]\">Mermaid SVG</span>\n  </div>\n  <pre class=\"mermaid py-1 flex justify-center text-xs overflow-x-auto leading-normal\">flowchart LR\n  %% Standard 5-Color Semantic Palette\n  classDef blue fill:#c9f3f4,stroke:#151b20,stroke-width:2px,color:#151b20;\n  classDef amber fill:#fff0b9,stroke:#151b20,stroke-width:2px,color:#151b20;\n  classDef green fill:#e7f4c8,stroke:#151b20,stroke-width:2px,color:#151b20;\n  classDef purple fill:#e2dfff,stroke:#151b20,stroke-width:2px,color:#151b20;\n  classDef red fill:#ffd8ce,stroke:#151b20,stroke-width:2px,color:#151b20;\n\n  RawData[\"Raw Training Data<br/>(Biased Sampling & Labels)\"]:::red\n\n  subgraph Stage1 [\"Stage 1: Pre-Processing\"]\n    direction TB\n    Pre[\"Re-weighting & Resampling<br/>Optimized Data Transformation<br/>W(x, a, y)\"]:::blue\n  end\n\n  subgraph Stage2 [\"Stage 2: In-Processing\"]\n    direction TB\n    InProc[\"Adversarial Debiasing<br/>Fair Reductions Saddle-Point<br/>min L_pred - α L_adv\"]:::amber\n  end\n\n  subgraph Stage3 [\"Stage 3: Post-Processing\"]\n    direction TB\n    PostProc[\"Group Threshold Tuning<br/>ROC Convex Hull Optimization<br/>τ_0 ≠ τ_1\"]:::green\n  end\n\n  %% Top-alignment constraint across stages\n  Pre ~~~ InProc ~~~ PostProc\n\n  Deploy[\"Audited Production Model<br/>(Fair Allocations)\"]:::purple\n\n  RawData --> Pre\n  Pre --> InProc\n  InProc --> PostProc\n  PostProc --> Deploy</pre>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">◆</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">Pre-processing techniques alter</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">the training dataset distribution without modifying downstream model architectures or loss functions.</span>\n  </div>\n</div>"
        },
        "duo": {
          "speaker": "Socratic Debate (Dr. Nova & Kaito)",
          "title": "Socratic Debate: Conceptual Overview & The Tri-Partite Mitigation Taxonomy: Architecture Flowchart",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Dr. Nova, looking at this workflow diagram for conceptual overview & the tri-partite mitigation taxonomy: architecture flowchart, how does the architectural flow enforce system stability?"
            },
            {
              "speaker": "Dr. Nova",
              "text": "This architecture diagram visualizes how physical observations transition across sampling boundaries into discrete tensor representations. Tracking each transition stage prevents undocumented transformations from corrupting the empirical distribution."
            }
          ],
          "contentHtml": "<div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[4px_4px_0px_#151b20] my-2 overflow-x-auto text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-2 text-left flex items-center justify-between border-b-2 border-[#151b20]/15 pb-1\">\n    <span class=\"flex items-center gap-1.5\">\n      <span>📊 Architecture &amp; Workflow Diagram</span>\n      <span class=\"text-[#151b20]/40\">•</span>\n      <span class=\"text-[#334155]\">System Flowchart</span>\n    </span>\n    <span class=\"text-[#0e7490] text-[9px] font-mono bg-[#c9f3f4] px-1.5 py-0.5 rounded border border-[#151b20]\">Mermaid SVG</span>\n  </div>\n  <pre class=\"mermaid py-1 flex justify-center text-xs overflow-x-auto leading-normal\">flowchart LR\n  %% Standard 5-Color Semantic Palette\n  classDef blue fill:#c9f3f4,stroke:#151b20,stroke-width:2px,color:#151b20;\n  classDef amber fill:#fff0b9,stroke:#151b20,stroke-width:2px,color:#151b20;\n  classDef green fill:#e7f4c8,stroke:#151b20,stroke-width:2px,color:#151b20;\n  classDef purple fill:#e2dfff,stroke:#151b20,stroke-width:2px,color:#151b20;\n  classDef red fill:#ffd8ce,stroke:#151b20,stroke-width:2px,color:#151b20;\n\n  RawData[\"Raw Training Data<br/>(Biased Sampling & Labels)\"]:::red\n\n  subgraph Stage1 [\"Stage 1: Pre-Processing\"]\n    direction TB\n    Pre[\"Re-weighting & Resampling<br/>Optimized Data Transformation<br/>W(x, a, y)\"]:::blue\n  end\n\n  subgraph Stage2 [\"Stage 2: In-Processing\"]\n    direction TB\n    InProc[\"Adversarial Debiasing<br/>Fair Reductions Saddle-Point<br/>min L_pred - α L_adv\"]:::amber\n  end\n\n  subgraph Stage3 [\"Stage 3: Post-Processing\"]\n    direction TB\n    PostProc[\"Group Threshold Tuning<br/>ROC Convex Hull Optimization<br/>τ_0 ≠ τ_1\"]:::green\n  end\n\n  %% Top-alignment constraint across stages\n  Pre ~~~ InProc ~~~ PostProc\n\n  Deploy[\"Audited Production Model<br/>(Fair Allocations)\"]:::purple\n\n  RawData --> Pre\n  Pre --> InProc\n  InProc --> PostProc\n  PostProc --> Deploy</pre>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">◆</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">Pre-processing techniques alter</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">the training dataset distribution without modifying downstream model architectures or loss functions.</span>\n  </div>\n</div>"
        }
      },
      {
        "id": "s4",
        "title": "In-Processing: Decision Boundary Covariance and Adversarial Debiasing",
        "type": "equation",
        "solo": {
          "speaker": "Dr. Nova (Senior Architect)",
          "title": "In-Processing: Decision Boundary Covariance and Adversarial Debiasing",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "In-Processing: Decision Boundary Covariance and Adversarial Debiasing. Formalizing the empirical sample mathematically reveals that empirical risk only approximates true generalization risk when the i.i.d. assumption holds. When upstream sampling is biased, the empirical risk diverges asymptotically from true risk—no model tuning can fix that."
            }
          ],
          "contentHtml": "<div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] my-2 text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-1 text-left flex items-center justify-between\">\n    <span>📐 Mathematical Formulation</span>\n    <span class=\"text-[#151b20] text-[9px] font-mono bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Empirical Sample Formulation</span>\n  </div>\n  <div class=\"text-base md:text-lg font-serif text-[#151b20] py-1 overflow-x-auto bg-[#f0fbfd] border border-[#0e7490] rounded-lg my-1\">\n    $$\\min_{\\theta} \\max_{\\phi} \\mathcal{L}_{\\text{pred}}(f_\\theta(X), Y) - \\alpha \\cdot \\mathcal{L}_{\\text{adv}}(g_\\phi(h_\\theta(X)), A)$$\n  </div>\n</div><div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] my-2 text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-1 text-left flex items-center justify-between\">\n    <span>📐 Mathematical Formulation</span>\n    <span class=\"text-[#151b20] text-[9px] font-mono bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Distribution Measure</span>\n  </div>\n  <div class=\"text-base md:text-lg font-serif text-[#151b20] py-1 overflow-x-auto bg-[#f0fbfd] border border-[#0e7490] rounded-lg my-1\">\n    $$\\nabla_\\theta \\mathcal{L}_{\\text{total}} = \\nabla_\\theta \\mathcal{L}_{\\text{pred}} - \\text{proj}_{\\nabla_\\theta \\mathcal{L}_{\\text{adv}}}(\\nabla_\\theta \\mathcal{L}_{\\text{pred}}) - \\alpha \\nabla_\\theta \\mathcal{L}_{\\text{adv}}$$\n  </div>\n</div><div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] my-2 text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-1 text-left flex items-center justify-between\">\n    <span>📐 Mathematical Formulation</span>\n    <span class=\"text-[#151b20] text-[9px] font-mono bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Empirical Risk Proxy</span>\n  </div>\n  <div class=\"text-base md:text-lg font-serif text-[#151b20] py-1 overflow-x-auto bg-[#f0fbfd] border border-[#0e7490] rounded-lg my-1\">\n    $$\\text{proj}_u(v) = \\frac{v^T u}{\\|u\\|_2^2} u$$\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">◆</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">In-processing methods constrain</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">decision boundary covariance directly ( Zafar et al., 2017 ) or deploy adversarial debiasing minimax games ((Zhang et al., 2018)): In-processing methods integrate fairness constraints directly into the neural network optimization objective.</span>\n  </div>\n</div>"
        },
        "duo": {
          "speaker": "Socratic Debate (Dr. Nova & Kaito)",
          "title": "Socratic Debate: In-Processing: Decision Boundary Covariance and Adversarial Debiasing",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Dr. Nova, how does in-processing: decision boundary covariance and adversarial debiasing protect our system against silent distribution shift in production?"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Formalizing the empirical sample mathematically reveals that empirical risk only approximates true generalization risk when the i.i.d. assumption holds. When upstream sampling is biased, the empirical risk diverges asymptotically from true risk—no model tuning can fix that."
            }
          ],
          "contentHtml": "<div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] my-2 text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-1 text-left flex items-center justify-between\">\n    <span>📐 Mathematical Formulation</span>\n    <span class=\"text-[#151b20] text-[9px] font-mono bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Empirical Sample Formulation</span>\n  </div>\n  <div class=\"text-base md:text-lg font-serif text-[#151b20] py-1 overflow-x-auto bg-[#f0fbfd] border border-[#0e7490] rounded-lg my-1\">\n    $$\\min_{\\theta} \\max_{\\phi} \\mathcal{L}_{\\text{pred}}(f_\\theta(X), Y) - \\alpha \\cdot \\mathcal{L}_{\\text{adv}}(g_\\phi(h_\\theta(X)), A)$$\n  </div>\n</div><div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] my-2 text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-1 text-left flex items-center justify-between\">\n    <span>📐 Mathematical Formulation</span>\n    <span class=\"text-[#151b20] text-[9px] font-mono bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Distribution Measure</span>\n  </div>\n  <div class=\"text-base md:text-lg font-serif text-[#151b20] py-1 overflow-x-auto bg-[#f0fbfd] border border-[#0e7490] rounded-lg my-1\">\n    $$\\nabla_\\theta \\mathcal{L}_{\\text{total}} = \\nabla_\\theta \\mathcal{L}_{\\text{pred}} - \\text{proj}_{\\nabla_\\theta \\mathcal{L}_{\\text{adv}}}(\\nabla_\\theta \\mathcal{L}_{\\text{pred}}) - \\alpha \\nabla_\\theta \\mathcal{L}_{\\text{adv}}$$\n  </div>\n</div><div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] my-2 text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-1 text-left flex items-center justify-between\">\n    <span>📐 Mathematical Formulation</span>\n    <span class=\"text-[#151b20] text-[9px] font-mono bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Empirical Risk Proxy</span>\n  </div>\n  <div class=\"text-base md:text-lg font-serif text-[#151b20] py-1 overflow-x-auto bg-[#f0fbfd] border border-[#0e7490] rounded-lg my-1\">\n    $$\\text{proj}_u(v) = \\frac{v^T u}{\\|u\\|_2^2} u$$\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">◆</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">In-processing methods constrain</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">decision boundary covariance directly ( Zafar et al., 2017 ) or deploy adversarial debiasing minimax games ((Zhang et al., 2018)): In-processing methods integrate fairness constraints directly into the neural network optimization objective.</span>\n  </div>\n</div>"
        }
      },
      {
        "id": "s5",
        "title": "Post-Processing: Group-Specific Threshold Tuning ([Hardt et al., 2016](#ref-hardt2016))",
        "type": "equation",
        "solo": {
          "speaker": "Dr. Nova (Senior Architect)",
          "title": "Post-Processing: Group-Specific Threshold Tuning ([Hardt et al., 2016](#ref-hardt2016))",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Post-Processing: Group-Specific Threshold Tuning ([Hardt et al., 2016](#ref-hardt2016)). Formalizing the empirical sample mathematically reveals that empirical risk only approximates true generalization risk when the i.i.d. assumption holds. When upstream sampling is biased, the empirical risk diverges asymptotically from true risk—no model tuning can fix that."
            }
          ],
          "contentHtml": "<div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] my-2 text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-1 text-left flex items-center justify-between\">\n    <span>📐 Mathematical Formulation</span>\n    <span class=\"text-[#151b20] text-[9px] font-mono bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Empirical Sample Formulation</span>\n  </div>\n  <div class=\"text-base md:text-lg font-serif text-[#151b20] py-1 overflow-x-auto bg-[#f0fbfd] border border-[#0e7490] rounded-lg my-1\">\n    $$\\hat{Y} = \\mathbb{I}(S \\ge \\tau_A)$$\n  </div>\n</div><div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] my-2 text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-1 text-left flex items-center justify-between\">\n    <span>📐 Mathematical Formulation</span>\n    <span class=\"text-[#151b20] text-[9px] font-mono bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Distribution Measure</span>\n  </div>\n  <div class=\"text-base md:text-lg font-serif text-[#151b20] py-1 overflow-x-auto bg-[#f0fbfd] border border-[#0e7490] rounded-lg my-1\">\n    $$\\text{TPR}_0(\\tau_0) = \\text{TPR}_1(\\tau_1), \\qquad \\text{FPR}_0(\\tau_0) = \\text{FPR}_1(\\tau_1)$$\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">◆</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">When the internal</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">model cannot be modified (e.g., proprietary third-party APIs or legacy pipelines), post-processing operates directly on continuous scoring distributions $S = f(X) \\in [0, 1]$: To satisfy Equalized Odds, distinct group thresholds $\\tau_0$ and $\\tau_1$ are selected at the intersection of the groups&#x27; ROC convex hulls:</span>\n  </div>\n</div>"
        },
        "duo": {
          "speaker": "Socratic Debate (Dr. Nova & Kaito)",
          "title": "Socratic Debate: Post-Processing: Group-Specific Threshold Tuning ([Hardt et al., 2016](#ref-hardt2016))",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Dr. Nova, how does post-processing: group-specific threshold tuning ([hardt et al., 2016](#ref-hardt2016)) protect our system against silent distribution shift in production?"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Formalizing the empirical sample mathematically reveals that empirical risk only approximates true generalization risk when the i.i.d. assumption holds. When upstream sampling is biased, the empirical risk diverges asymptotically from true risk—no model tuning can fix that."
            }
          ],
          "contentHtml": "<div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] my-2 text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-1 text-left flex items-center justify-between\">\n    <span>📐 Mathematical Formulation</span>\n    <span class=\"text-[#151b20] text-[9px] font-mono bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Empirical Sample Formulation</span>\n  </div>\n  <div class=\"text-base md:text-lg font-serif text-[#151b20] py-1 overflow-x-auto bg-[#f0fbfd] border border-[#0e7490] rounded-lg my-1\">\n    $$\\hat{Y} = \\mathbb{I}(S \\ge \\tau_A)$$\n  </div>\n</div><div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] my-2 text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-1 text-left flex items-center justify-between\">\n    <span>📐 Mathematical Formulation</span>\n    <span class=\"text-[#151b20] text-[9px] font-mono bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Distribution Measure</span>\n  </div>\n  <div class=\"text-base md:text-lg font-serif text-[#151b20] py-1 overflow-x-auto bg-[#f0fbfd] border border-[#0e7490] rounded-lg my-1\">\n    $$\\text{TPR}_0(\\tau_0) = \\text{TPR}_1(\\tau_1), \\qquad \\text{FPR}_0(\\tau_0) = \\text{FPR}_1(\\tau_1)$$\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">◆</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">When the internal</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">model cannot be modified (e.g., proprietary third-party APIs or legacy pipelines), post-processing operates directly on continuous scoring distributions $S = f(X) \\in [0, 1]$: To satisfy Equalized Odds, distinct group thresholds $\\tau_0$ and $\\tau_1$ are selected at the intersection of the groups&#x27; ROC convex hulls:</span>\n  </div>\n</div>"
        }
      },
      {
        "id": "s6",
        "title": "Production Implementation: Kamiran-Calders Re-weighting Pipeline",
        "type": "code",
        "solo": {
          "speaker": "Dr. Nova (Senior Architect)",
          "title": "Production Implementation: Kamiran-Calders Re-weighting Pipeline",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Production Implementation: Kamiran-Calders Re-weighting Pipeline. Always enforce schema contracts at the ingestion boundary before raw records enter memory. Using Pydantic or zero-copy Arrow prevents unvalidated floats and untyped strings from silently polluting downstream tensors."
            }
          ],
          "contentHtml": "<div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] font-mono text-xs overflow-x-auto shadow-[4px_4px_0px_#151b20] my-2\">\n  <div class=\"text-[10px] text-[#0e7490] font-black mb-1.5 uppercase tracking-wider pb-1 border-b-2 border-[#151b20]/15 flex items-center justify-between\">\n    <span>Production Implementation / Type-Safe Listing:</span>\n    <span class=\"text-[#151b20] text-[9px] bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Python 3.10+</span>\n  </div>\n  <pre class=\"leading-relaxed bg-[#fffaf0] p-2.5 rounded-lg border border-[#151b20] text-[#151b20] overflow-x-auto\"><code># Production Kamiran-Calders Sample Re-weighting Pipeline\nfrom typing import Tuple, Dict\nimport numpy as np\nimport pandas as pd\n\ndef compute_kamiran_calders_weights(df: pd.DataFrame, sensitive_col: str, target_col: str) -&gt; np.ndarray:\n    # Computes Kamiran-Calders sample weights W(a, y) = (N_a * N_y) / (N * N_ay)\n    N = len(df)\n    weights = np.zeros(N, dtype=np.float64)\n\n    # Compute marginal group counts\n    n_a = df.groupby(sensitive_col).size().to_dict()\n    n_y = df.groupby(target_col).size().to_dict()\n    n_ay = df.groupby([sensitive_col, target_col]).size().to_dict()\n\n    for idx, row in df.iterrows():\n        a = row[sensitive_col]\n        y = row[target_col]\n        expected_prob = (n_a[a] / N) * (n_y[y] / N)\n        observed_prob = n_ay.get((a, y), 0) / N\n        weights[idx] = expected_prob / observed_prob if observed_prob &gt;</code></pre>\n</div>"
        },
        "duo": {
          "speaker": "Socratic Debate (Dr. Nova & Kaito)",
          "title": "Socratic Debate: Production Implementation: Kamiran-Calders Re-weighting Pipeline",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Dr. Nova, where should this defensive type-safe schema validation execute?"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Always enforce schema contracts at the ingestion boundary before raw records enter memory. Using Pydantic or zero-copy Arrow prevents unvalidated floats and untyped strings from silently polluting downstream tensors."
            }
          ],
          "contentHtml": "<div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] font-mono text-xs overflow-x-auto shadow-[4px_4px_0px_#151b20] my-2\">\n  <div class=\"text-[10px] text-[#0e7490] font-black mb-1.5 uppercase tracking-wider pb-1 border-b-2 border-[#151b20]/15 flex items-center justify-between\">\n    <span>Production Implementation / Type-Safe Listing:</span>\n    <span class=\"text-[#151b20] text-[9px] bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Python 3.10+</span>\n  </div>\n  <pre class=\"leading-relaxed bg-[#fffaf0] p-2.5 rounded-lg border border-[#151b20] text-[#151b20] overflow-x-auto\"><code># Production Kamiran-Calders Sample Re-weighting Pipeline\nfrom typing import Tuple, Dict\nimport numpy as np\nimport pandas as pd\n\ndef compute_kamiran_calders_weights(df: pd.DataFrame, sensitive_col: str, target_col: str) -&gt; np.ndarray:\n    # Computes Kamiran-Calders sample weights W(a, y) = (N_a * N_y) / (N * N_ay)\n    N = len(df)\n    weights = np.zeros(N, dtype=np.float64)\n\n    # Compute marginal group counts\n    n_a = df.groupby(sensitive_col).size().to_dict()\n    n_y = df.groupby(target_col).size().to_dict()\n    n_ay = df.groupby([sensitive_col, target_col]).size().to_dict()\n\n    for idx, row in df.iterrows():\n        a = row[sensitive_col]\n        y = row[target_col]\n        expected_prob = (n_a[a] / N) * (n_y[y] / N)\n        observed_prob = n_ay.get((a, y), 0) / N\n        weights[idx] = expected_prob / observed_prob if observed_prob &gt;</code></pre>\n</div>"
        }
      },
      {
        "id": "s7",
        "title": "Empirical Case Study: German Credit Risk Benchmark",
        "type": "bullets",
        "solo": {
          "speaker": "Dr. Nova (Senior Architect)",
          "title": "Empirical Case Study: German Credit Risk Benchmark",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Empirical Case Study: German Credit Risk Benchmark. Formalizing the empirical sample mathematically reveals that empirical risk only approximates true generalization risk when the i.i.d. assumption holds. When upstream sampling is biased, the empirical risk diverges asymptotically from true risk—no model tuning can fix that."
            }
          ],
          "contentHtml": "<div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">◆</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">Baseline Disparity</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">Baseline logistic regression yielded a Disparate Impact ratio of $0.62$ between female applicants ($A=0$) and male applicants ($A=1$), violating the four-fifths rule.</span>\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">▸</span>\n  <div>\n    \n    <span class=\"text-[#334155] text-xs block leading-relaxed font-medium\">Pre-processing (Re-weighting): DI improved to $0.84$, accuracy dropped by $1.1\\%$.</span>\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">⚡</span>\n  <div>\n    \n    <span class=\"text-[#334155] text-xs block leading-relaxed font-medium\">In-processing (Adversarial Debiasing): DI improved to $0.89$, accuracy dropped by $1.8\\%$.</span>\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">💡</span>\n  <div>\n    \n    <span class=\"text-[#334155] text-xs block leading-relaxed font-medium\">Post-processing (Equality of Opportunity Threshold Tuning): Equalized TPR across gender ($74.2\\%$ vs $73.8\\%$), overall F1 score preserved within $0.008$.</span>\n  </div>\n</div>"
        },
        "duo": {
          "speaker": "Socratic Debate (Dr. Nova & Kaito)",
          "title": "Socratic Debate: Empirical Case Study: German Credit Risk Benchmark",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Dr. Nova, how does empirical case study: german credit risk benchmark protect our system against silent distribution shift in production?"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Formalizing the empirical sample mathematically reveals that empirical risk only approximates true generalization risk when the i.i.d. assumption holds. When upstream sampling is biased, the empirical risk diverges asymptotically from true risk—no model tuning can fix that."
            }
          ],
          "contentHtml": "<div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">◆</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">Baseline Disparity</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">Baseline logistic regression yielded a Disparate Impact ratio of $0.62$ between female applicants ($A=0$) and male applicants ($A=1$), violating the four-fifths rule.</span>\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">▸</span>\n  <div>\n    \n    <span class=\"text-[#334155] text-xs block leading-relaxed font-medium\">Pre-processing (Re-weighting): DI improved to $0.84$, accuracy dropped by $1.1\\%$.</span>\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">⚡</span>\n  <div>\n    \n    <span class=\"text-[#334155] text-xs block leading-relaxed font-medium\">In-processing (Adversarial Debiasing): DI improved to $0.89$, accuracy dropped by $1.8\\%$.</span>\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">💡</span>\n  <div>\n    \n    <span class=\"text-[#334155] text-xs block leading-relaxed font-medium\">Post-processing (Equality of Opportunity Threshold Tuning): Equalized TPR across gender ($74.2\\%$ vs $73.8\\%$), overall F1 score preserved within $0.008$.</span>\n  </div>\n</div>"
        }
      },
      {
        "id": "s8",
        "title": "Interactive Lab: Bias Mitigation Sandbox",
        "type": "tool",
        "solo": {
          "speaker": "Dr. Nova (Senior Architect)",
          "title": "Interactive Lab: Bias Mitigation Sandbox",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Interactive Lab: Bias Mitigation Sandbox. Scroll directly beneath this presentation player to the live laboratory. Run the failure injection to observe how unvalidated anomalies trigger compounding cascades across downstream tensors. Hands-on testing proves why boundary schema contracts are mandatory."
            }
          ],
          "contentHtml": "<div class=\"p-4 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[4px_4px_0px_#22bfd7] my-2\">\n  <div class=\"flex items-center justify-between border-b-2 border-[#151b20]/15 pb-2 mb-2.5 flex-wrap gap-2\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"px-2.5 py-1 rounded-lg bg-[#c9f3f4] text-[#0e7490] font-mono font-black text-xs border border-[#151b20] shadow-[1px_1px_0px_#151b20] uppercase tracking-wider\">🔬 Interactive Lab</span>\n      <span class=\"text-xs font-mono font-black text-[#151b20]\">Bias Mitigation Sandbox</span>\n    </div>\n    <span class=\"text-[10px] font-mono text-[#0e7490] bg-[#fffaf0] px-2 py-0.5 rounded border border-[#151b20]\">Located Below on Page ↓</span>\n  </div>\n  <p class=\"text-xs text-[#334155] mb-3 leading-relaxed font-medium\">Compare Pre-processing, In-processing, and Post-processing techniques on live synthetic datasets.</p>\n  <div class=\"bg-[#f6f0dc] p-3 rounded-xl border-2 border-[#151b20] space-y-2 text-xs\">\n    <span class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider block border-b border-[#151b20]/20 pb-1\">⚡ Recommended Hands-On Experiment:</span>\n    <div class=\"flex items-start gap-2 text-[#334155]\">\n  <span class=\"text-[#0e7490] font-bold font-mono text-xs\">1.</span>\n  <span class=\"text-xs leading-relaxed\">Scroll down to the interactive workbench section below the slide player to access the live laboratory.</span>\n</div><div class=\"flex items-start gap-2 text-[#334155]\">\n  <span class=\"text-[#0e7490] font-bold font-mono text-xs\">2.</span>\n  <span class=\"text-xs leading-relaxed\">Click &#x27;Launch Fairness Workbench →&#x27; to examine baseline state, then trigger &#x27;Inject anomaly / Run test&#x27; to simulate failure modes.</span>\n</div><div class=\"flex items-start gap-2 text-[#334155]\">\n  <span class=\"text-[#0e7490] font-bold font-mono text-xs\">3.</span>\n  <span class=\"text-xs leading-relaxed\">Audit telemetry metrics and observe how defensive schema contracts guard downstream models.</span>\n</div>\n  </div>\n</div>"
        },
        "duo": {
          "speaker": "Socratic Debate (Dr. Nova & Kaito)",
          "title": "Socratic Debate: Interactive Lab: Bias Mitigation Sandbox",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Dr. Nova, what specific failure mode should I look for when I use the bias mitigation sandbox located below this player?"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Scroll directly beneath this presentation player to the live laboratory. Run the failure injection to observe how unvalidated anomalies trigger compounding cascades across downstream tensors. Hands-on testing proves why boundary schema contracts are mandatory."
            }
          ],
          "contentHtml": "<div class=\"p-4 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[4px_4px_0px_#22bfd7] my-2\">\n  <div class=\"flex items-center justify-between border-b-2 border-[#151b20]/15 pb-2 mb-2.5 flex-wrap gap-2\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"px-2.5 py-1 rounded-lg bg-[#c9f3f4] text-[#0e7490] font-mono font-black text-xs border border-[#151b20] shadow-[1px_1px_0px_#151b20] uppercase tracking-wider\">🔬 Interactive Lab</span>\n      <span class=\"text-xs font-mono font-black text-[#151b20]\">Bias Mitigation Sandbox</span>\n    </div>\n    <span class=\"text-[10px] font-mono text-[#0e7490] bg-[#fffaf0] px-2 py-0.5 rounded border border-[#151b20]\">Located Below on Page ↓</span>\n  </div>\n  <p class=\"text-xs text-[#334155] mb-3 leading-relaxed font-medium\">Compare Pre-processing, In-processing, and Post-processing techniques on live synthetic datasets.</p>\n  <div class=\"bg-[#f6f0dc] p-3 rounded-xl border-2 border-[#151b20] space-y-2 text-xs\">\n    <span class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider block border-b border-[#151b20]/20 pb-1\">⚡ Recommended Hands-On Experiment:</span>\n    <div class=\"flex items-start gap-2 text-[#334155]\">\n  <span class=\"text-[#0e7490] font-bold font-mono text-xs\">1.</span>\n  <span class=\"text-xs leading-relaxed\">Scroll down to the interactive workbench section below the slide player to access the live laboratory.</span>\n</div><div class=\"flex items-start gap-2 text-[#334155]\">\n  <span class=\"text-[#0e7490] font-bold font-mono text-xs\">2.</span>\n  <span class=\"text-xs leading-relaxed\">Click &#x27;Launch Fairness Workbench →&#x27; to examine baseline state, then trigger &#x27;Inject anomaly / Run test&#x27; to simulate failure modes.</span>\n</div><div class=\"flex items-start gap-2 text-[#334155]\">\n  <span class=\"text-[#0e7490] font-bold font-mono text-xs\">3.</span>\n  <span class=\"text-xs leading-relaxed\">Audit telemetry metrics and observe how defensive schema contracts guard downstream models.</span>\n</div>\n  </div>\n</div>"
        }
      }
    ]
  },
  "ch7_p8": {
    "chapter": 7,
    "part": 8,
    "key": "ch7_p8",
    "badge": "◆ TRACK 7 • LESSON 7.8: BEST PRACTICES FOR FAIRNESS: DATASHEETS, AUDITS, AND DISAGGREGATION",
    "index": "Lesson 8 of 10",
    "lessonTitle": "Best Practices for Fairness: Datasheets, Audits, and Disaggregation",
    "slides": [
      {
        "id": "s1",
        "title": "Best Practices for Fairness: Datasheets, Audits, and Disaggregation",
        "type": "title",
        "solo": {
          "speaker": "Dr. Nova (Senior Architect)",
          "title": "Best Practices for Fairness: Datasheets, Audits, and Disaggregation",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Welcome to Lesson 7.8. Today we examine best practices for fairness: datasheets, audits, and disaggregation, establishing the mathematical foundations and production discipline required to guarantee dataset reliability."
            }
          ],
          "contentHtml": "<div class=\"p-6 md:p-8 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#22bfd7] text-center space-y-4\">\n  <div class=\"inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#c9f3f4] text-[#0e7490] font-mono text-xs border-2 border-[#151b20] font-black uppercase tracking-wider shadow-[2px_2px_0px_#151b20]\">\n    <span>◆ Track 7: Foundations</span>\n    <span>•</span>\n    <span>Lesson 7.8</span>\n  </div>\n  <h2 class=\"text-2xl md:text-3xl font-black text-[#151b20] tracking-tight\">\n    Best Practices for Fairness: Datasheets, Audits, and Disaggregation\n  </h2>\n  <p class=\"text-sm md:text-base text-[#334155] max-w-2xl mx-auto leading-relaxed font-medium\">\n    Deep dive into best practices for fairness: datasheets, audits, and disaggregation with formal mathematical formulations, production engineering, and failure-mode analysis.\n  </p>\n  <div class=\"pt-2 flex flex-wrap items-center justify-center gap-2 font-mono text-xs\">\n    <span class=\"px-2.5 py-1 rounded-lg bg-[#fff0b9] border border-[#151b20] font-bold text-[#151b20]\">📐 Formal Foundations</span>\n    <span class=\"px-2.5 py-1 rounded-lg bg-[#ffd8ce] border border-[#151b20] font-bold text-[#151b20]\">⚠️ Failure Modes</span>\n    <span class=\"px-2.5 py-1 rounded-lg bg-[#c9f3f4] border border-[#151b20] font-bold text-[#151b20]\">🛡️ Production Contracts</span>\n  </div>\n</div>"
        },
        "duo": {
          "speaker": "Socratic Debate (Dr. Nova & Kaito)",
          "title": "Socratic Debate: Best Practices for Fairness: Datasheets, Audits, and Disaggregation",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Dr. Nova, what is the core architectural challenge we are solving in Lesson 7.8?"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Welcome to Lesson 7.8. Today we examine best practices for fairness: datasheets, audits, and disaggregation, establishing the mathematical foundations and production discipline required to guarantee dataset reliability."
            }
          ],
          "contentHtml": "<div class=\"p-6 md:p-8 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#22bfd7] text-center space-y-4\">\n  <div class=\"inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#c9f3f4] text-[#0e7490] font-mono text-xs border-2 border-[#151b20] font-black uppercase tracking-wider shadow-[2px_2px_0px_#151b20]\">\n    <span>◆ Track 7: Foundations</span>\n    <span>•</span>\n    <span>Lesson 7.8</span>\n  </div>\n  <h2 class=\"text-2xl md:text-3xl font-black text-[#151b20] tracking-tight\">\n    Best Practices for Fairness: Datasheets, Audits, and Disaggregation\n  </h2>\n  <p class=\"text-sm md:text-base text-[#334155] max-w-2xl mx-auto leading-relaxed font-medium\">\n    Deep dive into best practices for fairness: datasheets, audits, and disaggregation with formal mathematical formulations, production engineering, and failure-mode analysis.\n  </p>\n  <div class=\"pt-2 flex flex-wrap items-center justify-center gap-2 font-mono text-xs\">\n    <span class=\"px-2.5 py-1 rounded-lg bg-[#fff0b9] border border-[#151b20] font-bold text-[#151b20]\">📐 Formal Foundations</span>\n    <span class=\"px-2.5 py-1 rounded-lg bg-[#ffd8ce] border border-[#151b20] font-bold text-[#151b20]\">⚠️ Failure Modes</span>\n    <span class=\"px-2.5 py-1 rounded-lg bg-[#c9f3f4] border border-[#151b20] font-bold text-[#151b20]\">🛡️ Production Contracts</span>\n  </div>\n</div>"
        }
      },
      {
        "id": "s2",
        "title": "Conceptual Overview & Institutional Engineering Frameworks: Intersectional Subgroup Disaggregation & Minimax Risk",
        "type": "equation",
        "solo": {
          "speaker": "Dr. Nova (Senior Architect)",
          "title": "Conceptual Overview & Institutional Engineering Frameworks: Intersectional Subgroup Disaggregation & Minimax Risk",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Conceptual Overview & Institutional Engineering Frameworks: Intersectional Subgroup Disaggregation & Minimax Risk. Formalizing the empirical sample mathematically reveals that empirical risk only approximates true generalization risk when the i.i.d. assumption holds. When upstream sampling is biased, the empirical risk diverges asymptotically from true risk—no model tuning can fix that."
            }
          ],
          "contentHtml": "<div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] my-2 text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-1 text-left flex items-center justify-between\">\n    <span>📐 Mathematical Formulation</span>\n    <span class=\"text-[#151b20] text-[9px] font-mono bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Empirical Sample Formulation</span>\n  </div>\n  <div class=\"text-base md:text-lg font-serif text-[#151b20] py-1 overflow-x-auto bg-[#f0fbfd] border border-[#0e7490] rounded-lg my-1\">\n    $$\\Omega = \\prod_{j=1}^K \\text{dom}(A_j)$$\n  </div>\n</div><div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] my-2 text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-1 text-left flex items-center justify-between\">\n    <span>📐 Mathematical Formulation</span>\n    <span class=\"text-[#151b20] text-[9px] font-mono bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Distribution Measure</span>\n  </div>\n  <div class=\"text-base md:text-lg font-serif text-[#151b20] py-1 overflow-x-auto bg-[#f0fbfd] border border-[#0e7490] rounded-lg my-1\">\n    $$R_{\\text{worst}}(f) = \\max_{g \\in \\Omega} \\mathcal{R}_g(f) = \\max_{g \\in \\Omega} \\mathbb{E}_{(X, Y) \\sim \\mathcal{D}_g} \\left[ \\ell(f(X), Y) \\right]$$\n  </div>\n</div><div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] my-2 text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-1 text-left flex items-center justify-between\">\n    <span>📐 Mathematical Formulation</span>\n    <span class=\"text-[#151b20] text-[9px] font-mono bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Empirical Risk Proxy</span>\n  </div>\n  <div class=\"text-base md:text-lg font-serif text-[#151b20] py-1 overflow-x-auto bg-[#f0fbfd] border border-[#0e7490] rounded-lg my-1\">\n    $$\\text{CI}_{1-\\alpha}(\\hat{p}_g) = \\frac{\\hat{p}_g + \\frac{z^2}{2n_g} \\pm z \\sqrt{\\frac{\\hat{p}_g(1 - \\hat{p}_g)}{n_g} + \\frac{z^2}{4n_g^2}}}{1 + \\frac{z^2}{n_g}}$$\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">◆</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">The In-Distribution Trap</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">Assuming training and deployment environments share identical demographic dynamics.</span>\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">▸</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">The Portability Trap</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">Re-deploying an algorithmic model in a new geographic or institutional context without re-auditing.</span>\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">⚡</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">The Formalism Trap</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">Treating fairness purely as a mathematical constraint while ignoring real-world systemic inequalities.</span>\n  </div>\n</div>"
        },
        "duo": {
          "speaker": "Socratic Debate (Dr. Nova & Kaito)",
          "title": "Socratic Debate: Conceptual Overview & Institutional Engineering Frameworks: Intersectional Subgroup Disaggregation & Minimax Risk",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Dr. Nova, how does conceptual overview & institutional engineering frameworks: intersectional subgroup disaggregation & minimax risk protect our system against silent distribution shift in production?"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Formalizing the empirical sample mathematically reveals that empirical risk only approximates true generalization risk when the i.i.d. assumption holds. When upstream sampling is biased, the empirical risk diverges asymptotically from true risk—no model tuning can fix that."
            }
          ],
          "contentHtml": "<div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] my-2 text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-1 text-left flex items-center justify-between\">\n    <span>📐 Mathematical Formulation</span>\n    <span class=\"text-[#151b20] text-[9px] font-mono bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Empirical Sample Formulation</span>\n  </div>\n  <div class=\"text-base md:text-lg font-serif text-[#151b20] py-1 overflow-x-auto bg-[#f0fbfd] border border-[#0e7490] rounded-lg my-1\">\n    $$\\Omega = \\prod_{j=1}^K \\text{dom}(A_j)$$\n  </div>\n</div><div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] my-2 text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-1 text-left flex items-center justify-between\">\n    <span>📐 Mathematical Formulation</span>\n    <span class=\"text-[#151b20] text-[9px] font-mono bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Distribution Measure</span>\n  </div>\n  <div class=\"text-base md:text-lg font-serif text-[#151b20] py-1 overflow-x-auto bg-[#f0fbfd] border border-[#0e7490] rounded-lg my-1\">\n    $$R_{\\text{worst}}(f) = \\max_{g \\in \\Omega} \\mathcal{R}_g(f) = \\max_{g \\in \\Omega} \\mathbb{E}_{(X, Y) \\sim \\mathcal{D}_g} \\left[ \\ell(f(X), Y) \\right]$$\n  </div>\n</div><div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] my-2 text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-1 text-left flex items-center justify-between\">\n    <span>📐 Mathematical Formulation</span>\n    <span class=\"text-[#151b20] text-[9px] font-mono bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Empirical Risk Proxy</span>\n  </div>\n  <div class=\"text-base md:text-lg font-serif text-[#151b20] py-1 overflow-x-auto bg-[#f0fbfd] border border-[#0e7490] rounded-lg my-1\">\n    $$\\text{CI}_{1-\\alpha}(\\hat{p}_g) = \\frac{\\hat{p}_g + \\frac{z^2}{2n_g} \\pm z \\sqrt{\\frac{\\hat{p}_g(1 - \\hat{p}_g)}{n_g} + \\frac{z^2}{4n_g^2}}}{1 + \\frac{z^2}{n_g}}$$\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">◆</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">The In-Distribution Trap</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">Assuming training and deployment environments share identical demographic dynamics.</span>\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">▸</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">The Portability Trap</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">Re-deploying an algorithmic model in a new geographic or institutional context without re-auditing.</span>\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">⚡</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">The Formalism Trap</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">Treating fairness purely as a mathematical constraint while ignoring real-world systemic inequalities.</span>\n  </div>\n</div>"
        }
      },
      {
        "id": "s3",
        "title": "Conceptual Overview & Institutional Engineering Frameworks: Architecture Flowchart",
        "type": "figure",
        "solo": {
          "speaker": "Dr. Nova (Senior Architect)",
          "title": "Conceptual Overview & Institutional Engineering Frameworks: Architecture Flowchart",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Conceptual Overview & Institutional Engineering Frameworks: Architecture Flowchart. This architecture diagram visualizes how physical observations transition across sampling boundaries into discrete tensor representations. Tracking each transition stage prevents undocumented transformations from corrupting the empirical distribution."
            }
          ],
          "contentHtml": "<div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[4px_4px_0px_#151b20] my-2 overflow-x-auto text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-2 text-left flex items-center justify-between border-b-2 border-[#151b20]/15 pb-1\">\n    <span class=\"flex items-center gap-1.5\">\n      <span>📊 Architecture &amp; Workflow Diagram</span>\n      <span class=\"text-[#151b20]/40\">•</span>\n      <span class=\"text-[#334155]\">System Flowchart</span>\n    </span>\n    <span class=\"text-[#0e7490] text-[9px] font-mono bg-[#c9f3f4] px-1.5 py-0.5 rounded border border-[#151b20]\">Mermaid SVG</span>\n  </div>\n  <pre class=\"mermaid py-1 flex justify-center text-xs overflow-x-auto leading-normal\">flowchart TD\n  %% Standard 5-Color Semantic Palette\n  classDef blue fill:#c9f3f4,stroke:#151b20,stroke-width:2px,color:#151b20;\n  classDef amber fill:#fff0b9,stroke:#151b20,stroke-width:2px,color:#151b20;\n  classDef green fill:#e7f4c8,stroke:#151b20,stroke-width:2px,color:#151b20;\n  classDef purple fill:#e2dfff,stroke:#151b20,stroke-width:2px,color:#151b20;\n  classDef red fill:#ffd8ce,stroke:#151b20,stroke-width:2px,color:#151b20;\n\n  Stage1[\"1. Pre-Design Scoping<br/>Datasheet for Dataset (Gebru et al.)<br/>Identify Sensitive Intersections\"]:::blue\n  Stage2[\"2. Data Curation & Audit<br/>Representational Distribution Check<br/>Coverage & Missingness Slicing\"]:::amber\n  Stage3[\"3. Model Training & CI/CD<br/>Automated Disparity Gating<br/>Δ_DP ≤ 0.05, Δ_EO ≤ 0.05\"]:::green\n  Stage4[\"4. Pre-Deployment Audit<br/>External Adversarial Red Teaming<br/>Model Card Documentation\"]:::purple\n  Stage5[\"5. Continuous Monitoring<br/>Production Drift & Feedback Loops<br/>Threshold Rollback Alarms\"]:::red\n\n  Stage1 --> Stage2\n  Stage2 --> Stage3\n  Stage3 --> Stage4\n  Stage4 --> Stage5\n  Stage5 -. Drift Detected: Trigger Retraining .-> Stage2</pre>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">◆</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">The In-Distribution Trap</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">Assuming training and deployment environments share identical demographic dynamics.</span>\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">▸</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">The Portability Trap</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">Re-deploying an algorithmic model in a new geographic or institutional context without re-auditing.</span>\n  </div>\n</div>"
        },
        "duo": {
          "speaker": "Socratic Debate (Dr. Nova & Kaito)",
          "title": "Socratic Debate: Conceptual Overview & Institutional Engineering Frameworks: Architecture Flowchart",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Dr. Nova, looking at this workflow diagram for conceptual overview & institutional engineering frameworks: architecture flowchart, how does the architectural flow enforce system stability?"
            },
            {
              "speaker": "Dr. Nova",
              "text": "This architecture diagram visualizes how physical observations transition across sampling boundaries into discrete tensor representations. Tracking each transition stage prevents undocumented transformations from corrupting the empirical distribution."
            }
          ],
          "contentHtml": "<div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[4px_4px_0px_#151b20] my-2 overflow-x-auto text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-2 text-left flex items-center justify-between border-b-2 border-[#151b20]/15 pb-1\">\n    <span class=\"flex items-center gap-1.5\">\n      <span>📊 Architecture &amp; Workflow Diagram</span>\n      <span class=\"text-[#151b20]/40\">•</span>\n      <span class=\"text-[#334155]\">System Flowchart</span>\n    </span>\n    <span class=\"text-[#0e7490] text-[9px] font-mono bg-[#c9f3f4] px-1.5 py-0.5 rounded border border-[#151b20]\">Mermaid SVG</span>\n  </div>\n  <pre class=\"mermaid py-1 flex justify-center text-xs overflow-x-auto leading-normal\">flowchart TD\n  %% Standard 5-Color Semantic Palette\n  classDef blue fill:#c9f3f4,stroke:#151b20,stroke-width:2px,color:#151b20;\n  classDef amber fill:#fff0b9,stroke:#151b20,stroke-width:2px,color:#151b20;\n  classDef green fill:#e7f4c8,stroke:#151b20,stroke-width:2px,color:#151b20;\n  classDef purple fill:#e2dfff,stroke:#151b20,stroke-width:2px,color:#151b20;\n  classDef red fill:#ffd8ce,stroke:#151b20,stroke-width:2px,color:#151b20;\n\n  Stage1[\"1. Pre-Design Scoping<br/>Datasheet for Dataset (Gebru et al.)<br/>Identify Sensitive Intersections\"]:::blue\n  Stage2[\"2. Data Curation & Audit<br/>Representational Distribution Check<br/>Coverage & Missingness Slicing\"]:::amber\n  Stage3[\"3. Model Training & CI/CD<br/>Automated Disparity Gating<br/>Δ_DP ≤ 0.05, Δ_EO ≤ 0.05\"]:::green\n  Stage4[\"4. Pre-Deployment Audit<br/>External Adversarial Red Teaming<br/>Model Card Documentation\"]:::purple\n  Stage5[\"5. Continuous Monitoring<br/>Production Drift & Feedback Loops<br/>Threshold Rollback Alarms\"]:::red\n\n  Stage1 --> Stage2\n  Stage2 --> Stage3\n  Stage3 --> Stage4\n  Stage4 --> Stage5\n  Stage5 -. Drift Detected: Trigger Retraining .-> Stage2</pre>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">◆</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">The In-Distribution Trap</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">Assuming training and deployment environments share identical demographic dynamics.</span>\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">▸</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">The Portability Trap</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">Re-deploying an algorithmic model in a new geographic or institutional context without re-auditing.</span>\n  </div>\n</div>"
        }
      },
      {
        "id": "s4",
        "title": "Continuous CI/CD Disparity Gating Equations",
        "type": "equation",
        "solo": {
          "speaker": "Dr. Nova (Senior Architect)",
          "title": "Continuous CI/CD Disparity Gating Equations",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Continuous CI/CD Disparity Gating Equations. Formalizing the empirical sample mathematically reveals that empirical risk only approximates true generalization risk when the i.i.d. assumption holds. When upstream sampling is biased, the empirical risk diverges asymptotically from true risk—no model tuning can fix that."
            }
          ],
          "contentHtml": "<div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] my-2 text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-1 text-left flex items-center justify-between\">\n    <span>📐 Mathematical Formulation</span>\n    <span class=\"text-[#151b20] text-[9px] font-mono bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Empirical Sample Formulation</span>\n  </div>\n  <div class=\"text-base md:text-lg font-serif text-[#151b20] py-1 overflow-x-auto bg-[#f0fbfd] border border-[#0e7490] rounded-lg my-1\">\n    $$\\Delta_{\\text{DP}} = \\max_{a, b \\in \\mathcal{A}} \\left| \\hat{\\mathbb{P}}(\\hat{Y} = 1 \\mid A = a) - \\hat{\\mathbb{P}}(\\hat{Y} = 1 \\mid A = b) \\right| \\le \\tau_{\\text{gate}}$$\n  </div>\n</div><div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] my-2 text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-1 text-left flex items-center justify-between\">\n    <span>📐 Mathematical Formulation</span>\n    <span class=\"text-[#151b20] text-[9px] font-mono bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Distribution Measure</span>\n  </div>\n  <div class=\"text-base md:text-lg font-serif text-[#151b20] py-1 overflow-x-auto bg-[#f0fbfd] border border-[#0e7490] rounded-lg my-1\">\n    $$\\Delta_{\\text{EO}} = \\max_{y \\in \\{0, 1\\}} \\max_{a, b \\in \\mathcal{A}} \\left| \\hat{\\mathbb{P}}(\\hat{Y} = 1 \\mid A = a, Y = y) - \\hat{\\mathbb{P}}(\\hat{Y} = 1 \\mid A = b, Y = y) \\right| \\le \\tau_{\\text{gate}}$$\n  </div>\n</div><div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] my-2 text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-1 text-left flex items-center justify-between\">\n    <span>📐 Mathematical Formulation</span>\n    <span class=\"text-[#151b20] text-[9px] font-mono bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Empirical Risk Proxy</span>\n  </div>\n  <div class=\"text-base md:text-lg font-serif text-[#151b20] py-1 overflow-x-auto bg-[#f0fbfd] border border-[#0e7490] rounded-lg my-1\">\n    $$\\rho_{\\text{DI}} = \\frac{\\min_{a \\in \\mathcal{A}} \\hat{\\mathbb{P}}(\\hat{Y} = 1 \\mid A = a)}{\\max_{b \\in \\mathcal{A}} \\hat{\\mathbb{P}}(\\hat{Y} = 1 \\mid A = b)} \\ge 0.80$$\n  </div>\n</div>"
        },
        "duo": {
          "speaker": "Socratic Debate (Dr. Nova & Kaito)",
          "title": "Socratic Debate: Continuous CI/CD Disparity Gating Equations",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Dr. Nova, how does continuous ci/cd disparity gating equations protect our system against silent distribution shift in production?"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Formalizing the empirical sample mathematically reveals that empirical risk only approximates true generalization risk when the i.i.d. assumption holds. When upstream sampling is biased, the empirical risk diverges asymptotically from true risk—no model tuning can fix that."
            }
          ],
          "contentHtml": "<div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] my-2 text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-1 text-left flex items-center justify-between\">\n    <span>📐 Mathematical Formulation</span>\n    <span class=\"text-[#151b20] text-[9px] font-mono bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Empirical Sample Formulation</span>\n  </div>\n  <div class=\"text-base md:text-lg font-serif text-[#151b20] py-1 overflow-x-auto bg-[#f0fbfd] border border-[#0e7490] rounded-lg my-1\">\n    $$\\Delta_{\\text{DP}} = \\max_{a, b \\in \\mathcal{A}} \\left| \\hat{\\mathbb{P}}(\\hat{Y} = 1 \\mid A = a) - \\hat{\\mathbb{P}}(\\hat{Y} = 1 \\mid A = b) \\right| \\le \\tau_{\\text{gate}}$$\n  </div>\n</div><div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] my-2 text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-1 text-left flex items-center justify-between\">\n    <span>📐 Mathematical Formulation</span>\n    <span class=\"text-[#151b20] text-[9px] font-mono bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Distribution Measure</span>\n  </div>\n  <div class=\"text-base md:text-lg font-serif text-[#151b20] py-1 overflow-x-auto bg-[#f0fbfd] border border-[#0e7490] rounded-lg my-1\">\n    $$\\Delta_{\\text{EO}} = \\max_{y \\in \\{0, 1\\}} \\max_{a, b \\in \\mathcal{A}} \\left| \\hat{\\mathbb{P}}(\\hat{Y} = 1 \\mid A = a, Y = y) - \\hat{\\mathbb{P}}(\\hat{Y} = 1 \\mid A = b, Y = y) \\right| \\le \\tau_{\\text{gate}}$$\n  </div>\n</div><div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] my-2 text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-1 text-left flex items-center justify-between\">\n    <span>📐 Mathematical Formulation</span>\n    <span class=\"text-[#151b20] text-[9px] font-mono bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Empirical Risk Proxy</span>\n  </div>\n  <div class=\"text-base md:text-lg font-serif text-[#151b20] py-1 overflow-x-auto bg-[#f0fbfd] border border-[#0e7490] rounded-lg my-1\">\n    $$\\rho_{\\text{DI}} = \\frac{\\min_{a \\in \\mathcal{A}} \\hat{\\mathbb{P}}(\\hat{Y} = 1 \\mid A = a)}{\\max_{b \\in \\mathcal{A}} \\hat{\\mathbb{P}}(\\hat{Y} = 1 \\mid A = b)} \\ge 0.80$$\n  </div>\n</div>"
        }
      },
      {
        "id": "s5",
        "title": "Production Implementation: Intersectional Subgroup Performance Auditor",
        "type": "code",
        "solo": {
          "speaker": "Dr. Nova (Senior Architect)",
          "title": "Production Implementation: Intersectional Subgroup Performance Auditor",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Production Implementation: Intersectional Subgroup Performance Auditor. Always enforce schema contracts at the ingestion boundary before raw records enter memory. Using Pydantic or zero-copy Arrow prevents unvalidated floats and untyped strings from silently polluting downstream tensors."
            }
          ],
          "contentHtml": "<div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] font-mono text-xs overflow-x-auto shadow-[4px_4px_0px_#151b20] my-2\">\n  <div class=\"text-[10px] text-[#0e7490] font-black mb-1.5 uppercase tracking-wider pb-1 border-b-2 border-[#151b20]/15 flex items-center justify-between\">\n    <span>Production Implementation / Type-Safe Listing:</span>\n    <span class=\"text-[#151b20] text-[9px] bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Python 3.10+</span>\n  </div>\n  <pre class=\"leading-relaxed bg-[#fffaf0] p-2.5 rounded-lg border border-[#151b20] text-[#151b20] overflow-x-auto\"><code># Intersectional Subgroup Auditor &amp; CI/CD Gating Harness\nfrom typing import Dict, List, Any\nimport numpy as np\nimport pandas as pd\n\ndef calculate_wilson_interval(k: int, n: int, confidence: float = 0.95) -&gt; Tuple[float, float]:\n    if n == 0:\n        return 0.0, 0.0\n    z = 1.95996  # 95% two-sided normal quantile\n    p_hat = k / n\n    denom = 1.0 + (z**2) / n\n    center = (p_hat + (z**2) / (2.0 * n)) / denom\n    margin = (z * np.sqrt((p_hat * (1.0 - p_hat)) / n + (z**2) / (4.0 * (n**2)))) / denom\n    return float(max(0.0, center - margin)), float(min(1.0, center + margin))\n\ndef audit_intersectional_performance(\n    df: pd.DataFrame,\n    group_cols: List[str],\n    pred_col: str,\n    target_col: str,\n    max_disparity_threshold: float = 0.15\n) -&gt; Dict[str, Any]:\n    df[&quot;correct&quot;] = (df[pred_col] == df[target_col]).astype(int)\n    df[&quot;error</code></pre>\n</div>"
        },
        "duo": {
          "speaker": "Socratic Debate (Dr. Nova & Kaito)",
          "title": "Socratic Debate: Production Implementation: Intersectional Subgroup Performance Auditor",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Dr. Nova, where should this defensive type-safe schema validation execute?"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Always enforce schema contracts at the ingestion boundary before raw records enter memory. Using Pydantic or zero-copy Arrow prevents unvalidated floats and untyped strings from silently polluting downstream tensors."
            }
          ],
          "contentHtml": "<div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] font-mono text-xs overflow-x-auto shadow-[4px_4px_0px_#151b20] my-2\">\n  <div class=\"text-[10px] text-[#0e7490] font-black mb-1.5 uppercase tracking-wider pb-1 border-b-2 border-[#151b20]/15 flex items-center justify-between\">\n    <span>Production Implementation / Type-Safe Listing:</span>\n    <span class=\"text-[#151b20] text-[9px] bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Python 3.10+</span>\n  </div>\n  <pre class=\"leading-relaxed bg-[#fffaf0] p-2.5 rounded-lg border border-[#151b20] text-[#151b20] overflow-x-auto\"><code># Intersectional Subgroup Auditor &amp; CI/CD Gating Harness\nfrom typing import Dict, List, Any\nimport numpy as np\nimport pandas as pd\n\ndef calculate_wilson_interval(k: int, n: int, confidence: float = 0.95) -&gt; Tuple[float, float]:\n    if n == 0:\n        return 0.0, 0.0\n    z = 1.95996  # 95% two-sided normal quantile\n    p_hat = k / n\n    denom = 1.0 + (z**2) / n\n    center = (p_hat + (z**2) / (2.0 * n)) / denom\n    margin = (z * np.sqrt((p_hat * (1.0 - p_hat)) / n + (z**2) / (4.0 * (n**2)))) / denom\n    return float(max(0.0, center - margin)), float(min(1.0, center + margin))\n\ndef audit_intersectional_performance(\n    df: pd.DataFrame,\n    group_cols: List[str],\n    pred_col: str,\n    target_col: str,\n    max_disparity_threshold: float = 0.15\n) -&gt; Dict[str, Any]:\n    df[&quot;correct&quot;] = (df[pred_col] == df[target_col]).astype(int)\n    df[&quot;error</code></pre>\n</div>"
        }
      },
      {
        "id": "s6",
        "title": "Empirical Case Study: Commercial Automated Speech Recognition (ASR)",
        "type": "bullets",
        "solo": {
          "speaker": "Dr. Nova (Senior Architect)",
          "title": "Empirical Case Study: Commercial Automated Speech Recognition (ASR)",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Empirical Case Study: Commercial Automated Speech Recognition (ASR). Systems collapse when models mistake collection artifacts for real-world signals. In ICU sepsis models, observation frequency became a confounder; in autonomous robotics, a 50-millisecond timestamp jitter causes a 1.4-meter bounding box dislocation at highway speeds."
            }
          ],
          "contentHtml": "<div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">◆</span>\n  <div>\n    \n    <span class=\"text-[#334155] text-xs block leading-relaxed font-medium\">Word Error Rate (WER) for White speakers averaged $19\\%$.</span>\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">▸</span>\n  <div>\n    \n    <span class=\"text-[#334155] text-xs block leading-relaxed font-medium\">Word Error Rate for Black speakers averaged $35\\%$.</span>\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">⚡</span>\n  <div>\n    \n    <span class=\"text-[#334155] text-xs block leading-relaxed font-medium\">More than half of Black speakers exhibited WER exceeding $40\\%$, rendering voice interfaces non-functional.</span>\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">💡</span>\n  <div>\n    \n    <span class=\"text-[#334155] text-xs block leading-relaxed font-medium\">Training corpora exhibited severe representational deficiency: African American Vernacular English (AAVE) phonological patterns were almost entirely absent from acoustic and language models.</span>\n  </div>\n</div>"
        },
        "duo": {
          "speaker": "Socratic Debate (Dr. Nova & Kaito)",
          "title": "Socratic Debate: Empirical Case Study: Commercial Automated Speech Recognition (ASR)",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Dr. Nova, what is the critical industrial lesson from this case study?"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Systems collapse when models mistake collection artifacts for real-world signals. In ICU sepsis models, observation frequency became a confounder; in autonomous robotics, a 50-millisecond timestamp jitter causes a 1.4-meter bounding box dislocation at highway speeds."
            }
          ],
          "contentHtml": "<div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">◆</span>\n  <div>\n    \n    <span class=\"text-[#334155] text-xs block leading-relaxed font-medium\">Word Error Rate (WER) for White speakers averaged $19\\%$.</span>\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">▸</span>\n  <div>\n    \n    <span class=\"text-[#334155] text-xs block leading-relaxed font-medium\">Word Error Rate for Black speakers averaged $35\\%$.</span>\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">⚡</span>\n  <div>\n    \n    <span class=\"text-[#334155] text-xs block leading-relaxed font-medium\">More than half of Black speakers exhibited WER exceeding $40\\%$, rendering voice interfaces non-functional.</span>\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">💡</span>\n  <div>\n    \n    <span class=\"text-[#334155] text-xs block leading-relaxed font-medium\">Training corpora exhibited severe representational deficiency: African American Vernacular English (AAVE) phonological patterns were almost entirely absent from acoustic and language models.</span>\n  </div>\n</div>"
        }
      },
      {
        "id": "s7",
        "title": "Interactive Lab: Fairness Governance & Audit Simulator",
        "type": "tool",
        "solo": {
          "speaker": "Dr. Nova (Senior Architect)",
          "title": "Interactive Lab: Fairness Governance & Audit Simulator",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Interactive Lab: Fairness Governance & Audit Simulator. Scroll directly beneath this presentation player to the live laboratory. Run the failure injection to observe how unvalidated anomalies trigger compounding cascades across downstream tensors. Hands-on testing proves why boundary schema contracts are mandatory."
            }
          ],
          "contentHtml": "<div class=\"p-4 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[4px_4px_0px_#22bfd7] my-2\">\n  <div class=\"flex items-center justify-between border-b-2 border-[#151b20]/15 pb-2 mb-2.5 flex-wrap gap-2\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"px-2.5 py-1 rounded-lg bg-[#c9f3f4] text-[#0e7490] font-mono font-black text-xs border border-[#151b20] shadow-[1px_1px_0px_#151b20] uppercase tracking-wider\">🔬 Interactive Lab</span>\n      <span class=\"text-xs font-mono font-black text-[#151b20]\">Fairness Governance &amp; Audit Simulator</span>\n    </div>\n    <span class=\"text-[10px] font-mono text-[#0e7490] bg-[#fffaf0] px-2 py-0.5 rounded border border-[#151b20]\">Located Below on Page ↓</span>\n  </div>\n  <p class=\"text-xs text-[#334155] mb-3 leading-relaxed font-medium\">Run simulated MLOps CI/CD gating tests across demographic intersections and inspect Wilson score confidence intervals.</p>\n  <div class=\"bg-[#f6f0dc] p-3 rounded-xl border-2 border-[#151b20] space-y-2 text-xs\">\n    <span class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider block border-b border-[#151b20]/20 pb-1\">⚡ Recommended Hands-On Experiment:</span>\n    <div class=\"flex items-start gap-2 text-[#334155]\">\n  <span class=\"text-[#0e7490] font-bold font-mono text-xs\">1.</span>\n  <span class=\"text-xs leading-relaxed\">Scroll down to the interactive workbench section below the slide player to access the live laboratory.</span>\n</div><div class=\"flex items-start gap-2 text-[#334155]\">\n  <span class=\"text-[#0e7490] font-bold font-mono text-xs\">2.</span>\n  <span class=\"text-xs leading-relaxed\">Click &#x27;Launch Governance Workbench →&#x27; to examine baseline state, then trigger &#x27;Inject anomaly / Run test&#x27; to simulate failure modes.</span>\n</div><div class=\"flex items-start gap-2 text-[#334155]\">\n  <span class=\"text-[#0e7490] font-bold font-mono text-xs\">3.</span>\n  <span class=\"text-xs leading-relaxed\">Audit telemetry metrics and observe how defensive schema contracts guard downstream models.</span>\n</div>\n  </div>\n</div>"
        },
        "duo": {
          "speaker": "Socratic Debate (Dr. Nova & Kaito)",
          "title": "Socratic Debate: Interactive Lab: Fairness Governance & Audit Simulator",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Dr. Nova, what specific failure mode should I look for when I use the fairness governance & audit simulator located below this player?"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Scroll directly beneath this presentation player to the live laboratory. Run the failure injection to observe how unvalidated anomalies trigger compounding cascades across downstream tensors. Hands-on testing proves why boundary schema contracts are mandatory."
            }
          ],
          "contentHtml": "<div class=\"p-4 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[4px_4px_0px_#22bfd7] my-2\">\n  <div class=\"flex items-center justify-between border-b-2 border-[#151b20]/15 pb-2 mb-2.5 flex-wrap gap-2\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"px-2.5 py-1 rounded-lg bg-[#c9f3f4] text-[#0e7490] font-mono font-black text-xs border border-[#151b20] shadow-[1px_1px_0px_#151b20] uppercase tracking-wider\">🔬 Interactive Lab</span>\n      <span class=\"text-xs font-mono font-black text-[#151b20]\">Fairness Governance &amp; Audit Simulator</span>\n    </div>\n    <span class=\"text-[10px] font-mono text-[#0e7490] bg-[#fffaf0] px-2 py-0.5 rounded border border-[#151b20]\">Located Below on Page ↓</span>\n  </div>\n  <p class=\"text-xs text-[#334155] mb-3 leading-relaxed font-medium\">Run simulated MLOps CI/CD gating tests across demographic intersections and inspect Wilson score confidence intervals.</p>\n  <div class=\"bg-[#f6f0dc] p-3 rounded-xl border-2 border-[#151b20] space-y-2 text-xs\">\n    <span class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider block border-b border-[#151b20]/20 pb-1\">⚡ Recommended Hands-On Experiment:</span>\n    <div class=\"flex items-start gap-2 text-[#334155]\">\n  <span class=\"text-[#0e7490] font-bold font-mono text-xs\">1.</span>\n  <span class=\"text-xs leading-relaxed\">Scroll down to the interactive workbench section below the slide player to access the live laboratory.</span>\n</div><div class=\"flex items-start gap-2 text-[#334155]\">\n  <span class=\"text-[#0e7490] font-bold font-mono text-xs\">2.</span>\n  <span class=\"text-xs leading-relaxed\">Click &#x27;Launch Governance Workbench →&#x27; to examine baseline state, then trigger &#x27;Inject anomaly / Run test&#x27; to simulate failure modes.</span>\n</div><div class=\"flex items-start gap-2 text-[#334155]\">\n  <span class=\"text-[#0e7490] font-bold font-mono text-xs\">3.</span>\n  <span class=\"text-xs leading-relaxed\">Audit telemetry metrics and observe how defensive schema contracts guard downstream models.</span>\n</div>\n  </div>\n</div>"
        }
      }
    ]
  },
  "ch7_p9": {
    "chapter": 7,
    "part": 9,
    "key": "ch7_p9",
    "badge": "◆ TRACK 7 • LESSON 7.9: COMPREHENSIVE FAIRNESS AUDITING AND MITIGATION CASE STUDY",
    "index": "Lesson 9 of 10",
    "lessonTitle": "Comprehensive Fairness Auditing and Mitigation Case Study",
    "slides": [
      {
        "id": "s1",
        "title": "Comprehensive Fairness Auditing and Mitigation Case Study",
        "type": "title",
        "solo": {
          "speaker": "Dr. Nova (Senior Architect)",
          "title": "Comprehensive Fairness Auditing and Mitigation Case Study",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Welcome to Lesson 7.9. Today we examine comprehensive fairness auditing and mitigation case study, establishing the mathematical foundations and production discipline required to guarantee dataset reliability."
            }
          ],
          "contentHtml": "<div class=\"p-6 md:p-8 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#22bfd7] text-center space-y-4\">\n  <div class=\"inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#c9f3f4] text-[#0e7490] font-mono text-xs border-2 border-[#151b20] font-black uppercase tracking-wider shadow-[2px_2px_0px_#151b20]\">\n    <span>◆ Track 7: Foundations</span>\n    <span>•</span>\n    <span>Lesson 7.9</span>\n  </div>\n  <h2 class=\"text-2xl md:text-3xl font-black text-[#151b20] tracking-tight\">\n    Comprehensive Fairness Auditing and Mitigation Case Study\n  </h2>\n  <p class=\"text-sm md:text-base text-[#334155] max-w-2xl mx-auto leading-relaxed font-medium\">\n    Deep dive into comprehensive fairness auditing and mitigation case study with formal mathematical formulations, production engineering, and failure-mode analysis.\n  </p>\n  <div class=\"pt-2 flex flex-wrap items-center justify-center gap-2 font-mono text-xs\">\n    <span class=\"px-2.5 py-1 rounded-lg bg-[#fff0b9] border border-[#151b20] font-bold text-[#151b20]\">📐 Formal Foundations</span>\n    <span class=\"px-2.5 py-1 rounded-lg bg-[#ffd8ce] border border-[#151b20] font-bold text-[#151b20]\">⚠️ Failure Modes</span>\n    <span class=\"px-2.5 py-1 rounded-lg bg-[#c9f3f4] border border-[#151b20] font-bold text-[#151b20]\">🛡️ Production Contracts</span>\n  </div>\n</div>"
        },
        "duo": {
          "speaker": "Socratic Debate (Dr. Nova & Kaito)",
          "title": "Socratic Debate: Comprehensive Fairness Auditing and Mitigation Case Study",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Dr. Nova, what is the core architectural challenge we are solving in Lesson 7.9?"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Welcome to Lesson 7.9. Today we examine comprehensive fairness auditing and mitigation case study, establishing the mathematical foundations and production discipline required to guarantee dataset reliability."
            }
          ],
          "contentHtml": "<div class=\"p-6 md:p-8 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#22bfd7] text-center space-y-4\">\n  <div class=\"inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#c9f3f4] text-[#0e7490] font-mono text-xs border-2 border-[#151b20] font-black uppercase tracking-wider shadow-[2px_2px_0px_#151b20]\">\n    <span>◆ Track 7: Foundations</span>\n    <span>•</span>\n    <span>Lesson 7.9</span>\n  </div>\n  <h2 class=\"text-2xl md:text-3xl font-black text-[#151b20] tracking-tight\">\n    Comprehensive Fairness Auditing and Mitigation Case Study\n  </h2>\n  <p class=\"text-sm md:text-base text-[#334155] max-w-2xl mx-auto leading-relaxed font-medium\">\n    Deep dive into comprehensive fairness auditing and mitigation case study with formal mathematical formulations, production engineering, and failure-mode analysis.\n  </p>\n  <div class=\"pt-2 flex flex-wrap items-center justify-center gap-2 font-mono text-xs\">\n    <span class=\"px-2.5 py-1 rounded-lg bg-[#fff0b9] border border-[#151b20] font-bold text-[#151b20]\">📐 Formal Foundations</span>\n    <span class=\"px-2.5 py-1 rounded-lg bg-[#ffd8ce] border border-[#151b20] font-bold text-[#151b20]\">⚠️ Failure Modes</span>\n    <span class=\"px-2.5 py-1 rounded-lg bg-[#c9f3f4] border border-[#151b20] font-bold text-[#151b20]\">🛡️ Production Contracts</span>\n  </div>\n</div>"
        }
      },
      {
        "id": "s2",
        "title": "Conceptual Overview & The Reductions Framework: Mathematical Formulation of the Reductions Approach",
        "type": "equation",
        "solo": {
          "speaker": "Dr. Nova (Senior Architect)",
          "title": "Conceptual Overview & The Reductions Framework: Mathematical Formulation of the Reductions Approach",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Conceptual Overview & The Reductions Framework: Mathematical Formulation of the Reductions Approach. Formalizing the empirical sample mathematically reveals that empirical risk only approximates true generalization risk when the i.i.d. assumption holds. When upstream sampling is biased, the empirical risk diverges asymptotically from true risk—no model tuning can fix that."
            }
          ],
          "contentHtml": "<div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] my-2 text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-1 text-left flex items-center justify-between\">\n    <span>📐 Mathematical Formulation</span>\n    <span class=\"text-[#151b20] text-[9px] font-mono bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Empirical Sample Formulation</span>\n  </div>\n  <div class=\"text-base md:text-lg font-serif text-[#151b20] py-1 overflow-x-auto bg-[#f0fbfd] border border-[#0e7490] rounded-lg my-1\">\n    $$\\min_{Q \\in \\Delta(\\mathcal{H})} \\mathcal{E}(Q) \\quad \\text{s.t.} \\quad \\mathbf{M} Q \\le \\vec{c}$$\n  </div>\n</div><div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] my-2 text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-1 text-left flex items-center justify-between\">\n    <span>📐 Mathematical Formulation</span>\n    <span class=\"text-[#151b20] text-[9px] font-mono bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Distribution Measure</span>\n  </div>\n  <div class=\"text-base md:text-lg font-serif text-[#151b20] py-1 overflow-x-auto bg-[#f0fbfd] border border-[#0e7490] rounded-lg my-1\">\n    $$L(Q, \\vec{\\lambda}) = \\mathcal{E}(Q) + \\vec{\\lambda}^T (\\mathbf{M} Q - \\vec{c}) = \\sum_{h \\in \\mathcal{H}} Q(h) \\left[ \\mathcal{E}(h) + \\vec{\\lambda}^T \\mathbf{M}_{\\cdot, h} \\right] - \\vec{\\lambda}^T \\vec{c}$$\n  </div>\n</div><div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] my-2 text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-1 text-left flex items-center justify-between\">\n    <span>📐 Mathematical Formulation</span>\n    <span class=\"text-[#151b20] text-[9px] font-mono bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Empirical Risk Proxy</span>\n  </div>\n  <div class=\"text-base md:text-lg font-serif text-[#151b20] py-1 overflow-x-auto bg-[#f0fbfd] border border-[#0e7490] rounded-lg my-1\">\n    $$\\lambda_k^{(t+1)} = \\lambda_k^{(t)} \\exp\\left( \\eta \\left( [\\mathbf{M} h^{(t)}]_k - c_k \\right) \\right)$$\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">◆</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">A Primal Player (The Learner)</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">Finds an unconstrained cost-sensitive hypothesis $h \\in \\mathcal{H}$ minimizing weighted empirical risk.</span>\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">▸</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">A Dual Player (The Auditor)</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">Adjusts Lagrange multipliers $\\vec{\\lambda} \\in \\mathbb{R}_+^K$ via exponentiated gradient updates to penalize demographic group violations.</span>\n  </div>\n</div>"
        },
        "duo": {
          "speaker": "Socratic Debate (Dr. Nova & Kaito)",
          "title": "Socratic Debate: Conceptual Overview & The Reductions Framework: Mathematical Formulation of the Reductions Approach",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Dr. Nova, how does conceptual overview & the reductions framework: mathematical formulation of the reductions approach protect our system against silent distribution shift in production?"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Formalizing the empirical sample mathematically reveals that empirical risk only approximates true generalization risk when the i.i.d. assumption holds. When upstream sampling is biased, the empirical risk diverges asymptotically from true risk—no model tuning can fix that."
            }
          ],
          "contentHtml": "<div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] my-2 text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-1 text-left flex items-center justify-between\">\n    <span>📐 Mathematical Formulation</span>\n    <span class=\"text-[#151b20] text-[9px] font-mono bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Empirical Sample Formulation</span>\n  </div>\n  <div class=\"text-base md:text-lg font-serif text-[#151b20] py-1 overflow-x-auto bg-[#f0fbfd] border border-[#0e7490] rounded-lg my-1\">\n    $$\\min_{Q \\in \\Delta(\\mathcal{H})} \\mathcal{E}(Q) \\quad \\text{s.t.} \\quad \\mathbf{M} Q \\le \\vec{c}$$\n  </div>\n</div><div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] my-2 text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-1 text-left flex items-center justify-between\">\n    <span>📐 Mathematical Formulation</span>\n    <span class=\"text-[#151b20] text-[9px] font-mono bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Distribution Measure</span>\n  </div>\n  <div class=\"text-base md:text-lg font-serif text-[#151b20] py-1 overflow-x-auto bg-[#f0fbfd] border border-[#0e7490] rounded-lg my-1\">\n    $$L(Q, \\vec{\\lambda}) = \\mathcal{E}(Q) + \\vec{\\lambda}^T (\\mathbf{M} Q - \\vec{c}) = \\sum_{h \\in \\mathcal{H}} Q(h) \\left[ \\mathcal{E}(h) + \\vec{\\lambda}^T \\mathbf{M}_{\\cdot, h} \\right] - \\vec{\\lambda}^T \\vec{c}$$\n  </div>\n</div><div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] my-2 text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-1 text-left flex items-center justify-between\">\n    <span>📐 Mathematical Formulation</span>\n    <span class=\"text-[#151b20] text-[9px] font-mono bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Empirical Risk Proxy</span>\n  </div>\n  <div class=\"text-base md:text-lg font-serif text-[#151b20] py-1 overflow-x-auto bg-[#f0fbfd] border border-[#0e7490] rounded-lg my-1\">\n    $$\\lambda_k^{(t+1)} = \\lambda_k^{(t)} \\exp\\left( \\eta \\left( [\\mathbf{M} h^{(t)}]_k - c_k \\right) \\right)$$\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">◆</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">A Primal Player (The Learner)</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">Finds an unconstrained cost-sensitive hypothesis $h \\in \\mathcal{H}$ minimizing weighted empirical risk.</span>\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">▸</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">A Dual Player (The Auditor)</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">Adjusts Lagrange multipliers $\\vec{\\lambda} \\in \\mathbb{R}_+^K$ via exponentiated gradient updates to penalize demographic group violations.</span>\n  </div>\n</div>"
        }
      },
      {
        "id": "s3",
        "title": "Conceptual Overview & The Reductions Framework: Architecture Flowchart",
        "type": "figure",
        "solo": {
          "speaker": "Dr. Nova (Senior Architect)",
          "title": "Conceptual Overview & The Reductions Framework: Architecture Flowchart",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Conceptual Overview & The Reductions Framework: Architecture Flowchart. This architecture diagram visualizes how physical observations transition across sampling boundaries into discrete tensor representations. Tracking each transition stage prevents undocumented transformations from corrupting the empirical distribution."
            }
          ],
          "contentHtml": "<div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[4px_4px_0px_#151b20] my-2 overflow-x-auto text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-2 text-left flex items-center justify-between border-b-2 border-[#151b20]/15 pb-1\">\n    <span class=\"flex items-center gap-1.5\">\n      <span>📊 Architecture &amp; Workflow Diagram</span>\n      <span class=\"text-[#151b20]/40\">•</span>\n      <span class=\"text-[#334155]\">System Flowchart</span>\n    </span>\n    <span class=\"text-[#0e7490] text-[9px] font-mono bg-[#c9f3f4] px-1.5 py-0.5 rounded border border-[#151b20]\">Mermaid SVG</span>\n  </div>\n  <pre class=\"mermaid py-1 flex justify-center text-xs overflow-x-auto leading-normal\">flowchart TD\n  %% Standard 5-Color Semantic Palette\n  classDef blue fill:#c9f3f4,stroke:#151b20,stroke-width:2px,color:#151b20;\n  classDef amber fill:#fff0b9,stroke:#151b20,stroke-width:2px,color:#151b20;\n  classDef green fill:#e7f4c8,stroke:#151b20,stroke-width:2px,color:#151b20;\n  classDef purple fill:#e2dfff,stroke:#151b20,stroke-width:2px,color:#151b20;\n  classDef red fill:#ffd8ce,stroke:#151b20,stroke-width:2px,color:#151b20;\n\n  Dataset[\"Raw Tabular Dataset<br/>(Adult Income / COMPAS)\"]:::blue\n\n  MetricAudit[\"Stage 1: MetricFrame Audit<br/>Evaluate Group Selection Rates & FPR<br/>Compute Δ_DP and Δ_EO\"]:::red\n\n  ReductionsGame[\"Stage 2: Two-Player Reductions Game<br/>Primal: min Cost-Sensitive Loss<br/>Dual: Max Multipliers λ<br/>Exponentiated Gradient\"]:::amber\n\n  OptHypothesis[\"Stage 3: Randomized Hypothesis Q<br/>Weighted Mixture of Base Classifiers<br/>Q = Σ α_t h_t\"]:::green\n\n  FinalAudit[\"Stage 4: Post-Mitigation Audit<br/>Verified: Δ_DP ≤ ε, Δ_EO ≤ ε<br/>Preserved: 98%+ Original Accuracy\"]:::purple\n\n  Dataset --> MetricAudit\n  MetricAudit --> ReductionsGame\n  ReductionsGame --> OptHypothesis\n  OptHypothesis --> FinalAudit</pre>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">◆</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">A Primal Player (The Learner)</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">Finds an unconstrained cost-sensitive hypothesis $h \\in \\mathcal{H}$ minimizing weighted empirical risk.</span>\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">▸</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">A Dual Player (The Auditor)</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">Adjusts Lagrange multipliers $\\vec{\\lambda} \\in \\mathbb{R}_+^K$ via exponentiated gradient updates to penalize demographic group violations.</span>\n  </div>\n</div>"
        },
        "duo": {
          "speaker": "Socratic Debate (Dr. Nova & Kaito)",
          "title": "Socratic Debate: Conceptual Overview & The Reductions Framework: Architecture Flowchart",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Dr. Nova, looking at this workflow diagram for conceptual overview & the reductions framework: architecture flowchart, how does the architectural flow enforce system stability?"
            },
            {
              "speaker": "Dr. Nova",
              "text": "This architecture diagram visualizes how physical observations transition across sampling boundaries into discrete tensor representations. Tracking each transition stage prevents undocumented transformations from corrupting the empirical distribution."
            }
          ],
          "contentHtml": "<div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[4px_4px_0px_#151b20] my-2 overflow-x-auto text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-2 text-left flex items-center justify-between border-b-2 border-[#151b20]/15 pb-1\">\n    <span class=\"flex items-center gap-1.5\">\n      <span>📊 Architecture &amp; Workflow Diagram</span>\n      <span class=\"text-[#151b20]/40\">•</span>\n      <span class=\"text-[#334155]\">System Flowchart</span>\n    </span>\n    <span class=\"text-[#0e7490] text-[9px] font-mono bg-[#c9f3f4] px-1.5 py-0.5 rounded border border-[#151b20]\">Mermaid SVG</span>\n  </div>\n  <pre class=\"mermaid py-1 flex justify-center text-xs overflow-x-auto leading-normal\">flowchart TD\n  %% Standard 5-Color Semantic Palette\n  classDef blue fill:#c9f3f4,stroke:#151b20,stroke-width:2px,color:#151b20;\n  classDef amber fill:#fff0b9,stroke:#151b20,stroke-width:2px,color:#151b20;\n  classDef green fill:#e7f4c8,stroke:#151b20,stroke-width:2px,color:#151b20;\n  classDef purple fill:#e2dfff,stroke:#151b20,stroke-width:2px,color:#151b20;\n  classDef red fill:#ffd8ce,stroke:#151b20,stroke-width:2px,color:#151b20;\n\n  Dataset[\"Raw Tabular Dataset<br/>(Adult Income / COMPAS)\"]:::blue\n\n  MetricAudit[\"Stage 1: MetricFrame Audit<br/>Evaluate Group Selection Rates & FPR<br/>Compute Δ_DP and Δ_EO\"]:::red\n\n  ReductionsGame[\"Stage 2: Two-Player Reductions Game<br/>Primal: min Cost-Sensitive Loss<br/>Dual: Max Multipliers λ<br/>Exponentiated Gradient\"]:::amber\n\n  OptHypothesis[\"Stage 3: Randomized Hypothesis Q<br/>Weighted Mixture of Base Classifiers<br/>Q = Σ α_t h_t\"]:::green\n\n  FinalAudit[\"Stage 4: Post-Mitigation Audit<br/>Verified: Δ_DP ≤ ε, Δ_EO ≤ ε<br/>Preserved: 98%+ Original Accuracy\"]:::purple\n\n  Dataset --> MetricAudit\n  MetricAudit --> ReductionsGame\n  ReductionsGame --> OptHypothesis\n  OptHypothesis --> FinalAudit</pre>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">◆</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">A Primal Player (The Learner)</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">Finds an unconstrained cost-sensitive hypothesis $h \\in \\mathcal{H}$ minimizing weighted empirical risk.</span>\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">▸</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">A Dual Player (The Auditor)</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">Adjusts Lagrange multipliers $\\vec{\\lambda} \\in \\mathbb{R}_+^K$ via exponentiated gradient updates to penalize demographic group violations.</span>\n  </div>\n</div>"
        }
      },
      {
        "id": "s4",
        "title": "MetricFrame Tensor and Theil Index Formulations",
        "type": "equation",
        "solo": {
          "speaker": "Dr. Nova (Senior Architect)",
          "title": "MetricFrame Tensor and Theil Index Formulations",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "MetricFrame Tensor and Theil Index Formulations. Formalizing the empirical sample mathematically reveals that empirical risk only approximates true generalization risk when the i.i.d. assumption holds. When upstream sampling is biased, the empirical risk diverges asymptotically from true risk—no model tuning can fix that."
            }
          ],
          "contentHtml": "<div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] my-2 text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-1 text-left flex items-center justify-between\">\n    <span>📐 Mathematical Formulation</span>\n    <span class=\"text-[#151b20] text-[9px] font-mono bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Empirical Sample Formulation</span>\n  </div>\n  <div class=\"text-base md:text-lg font-serif text-[#151b20] py-1 overflow-x-auto bg-[#f0fbfd] border border-[#0e7490] rounded-lg my-1\">\n    $$\\vec{M} = \\left[ M(\\mathcal{D}_1), M(\\mathcal{D}_2), \\dots, M(\\mathcal{D}_G) \\right]^T$$\n  </div>\n</div><div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] my-2 text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-1 text-left flex items-center justify-between\">\n    <span>📐 Mathematical Formulation</span>\n    <span class=\"text-[#151b20] text-[9px] font-mono bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Distribution Measure</span>\n  </div>\n  <div class=\"text-base md:text-lg font-serif text-[#151b20] py-1 overflow-x-auto bg-[#f0fbfd] border border-[#0e7490] rounded-lg my-1\">\n    $$\\Delta = \\max_{g \\in \\mathcal{G}} M(\\mathcal{D}_g) - \\min_{g' \\in \\mathcal{G}} M(\\mathcal{D}_{g'}), \\qquad \\rho = \\frac{\\min_{g' \\in \\mathcal{G}} M(\\mathcal{D}_{g'})}{\\max_{g \\in \\mathcal{G}} M(\\mathcal{D}_g)}$$\n  </div>\n</div><div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] my-2 text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-1 text-left flex items-center justify-between\">\n    <span>📐 Mathematical Formulation</span>\n    <span class=\"text-[#151b20] text-[9px] font-mono bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Empirical Risk Proxy</span>\n  </div>\n  <div class=\"text-base md:text-lg font-serif text-[#151b20] py-1 overflow-x-auto bg-[#f0fbfd] border border-[#0e7490] rounded-lg my-1\">\n    $$T = \\frac{1}{N} \\sum_{i=1}^N \\frac{b_i}{\\bar{b}} \\ln\\left( \\frac{b_i}{\\bar{b}} \\right)$$\n  </div>\n</div>"
        },
        "duo": {
          "speaker": "Socratic Debate (Dr. Nova & Kaito)",
          "title": "Socratic Debate: MetricFrame Tensor and Theil Index Formulations",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Dr. Nova, how does metricframe tensor and theil index formulations protect our system against silent distribution shift in production?"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Formalizing the empirical sample mathematically reveals that empirical risk only approximates true generalization risk when the i.i.d. assumption holds. When upstream sampling is biased, the empirical risk diverges asymptotically from true risk—no model tuning can fix that."
            }
          ],
          "contentHtml": "<div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] my-2 text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-1 text-left flex items-center justify-between\">\n    <span>📐 Mathematical Formulation</span>\n    <span class=\"text-[#151b20] text-[9px] font-mono bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Empirical Sample Formulation</span>\n  </div>\n  <div class=\"text-base md:text-lg font-serif text-[#151b20] py-1 overflow-x-auto bg-[#f0fbfd] border border-[#0e7490] rounded-lg my-1\">\n    $$\\vec{M} = \\left[ M(\\mathcal{D}_1), M(\\mathcal{D}_2), \\dots, M(\\mathcal{D}_G) \\right]^T$$\n  </div>\n</div><div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] my-2 text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-1 text-left flex items-center justify-between\">\n    <span>📐 Mathematical Formulation</span>\n    <span class=\"text-[#151b20] text-[9px] font-mono bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Distribution Measure</span>\n  </div>\n  <div class=\"text-base md:text-lg font-serif text-[#151b20] py-1 overflow-x-auto bg-[#f0fbfd] border border-[#0e7490] rounded-lg my-1\">\n    $$\\Delta = \\max_{g \\in \\mathcal{G}} M(\\mathcal{D}_g) - \\min_{g' \\in \\mathcal{G}} M(\\mathcal{D}_{g'}), \\qquad \\rho = \\frac{\\min_{g' \\in \\mathcal{G}} M(\\mathcal{D}_{g'})}{\\max_{g \\in \\mathcal{G}} M(\\mathcal{D}_g)}$$\n  </div>\n</div><div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] my-2 text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-1 text-left flex items-center justify-between\">\n    <span>📐 Mathematical Formulation</span>\n    <span class=\"text-[#151b20] text-[9px] font-mono bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Empirical Risk Proxy</span>\n  </div>\n  <div class=\"text-base md:text-lg font-serif text-[#151b20] py-1 overflow-x-auto bg-[#f0fbfd] border border-[#0e7490] rounded-lg my-1\">\n    $$T = \\frac{1}{N} \\sum_{i=1}^N \\frac{b_i}{\\bar{b}} \\ln\\left( \\frac{b_i}{\\bar{b}} \\right)$$\n  </div>\n</div>"
        }
      },
      {
        "id": "s5",
        "title": "Production Implementation: Fairlearn In-Processing Reductions Engine",
        "type": "code",
        "solo": {
          "speaker": "Dr. Nova (Senior Architect)",
          "title": "Production Implementation: Fairlearn In-Processing Reductions Engine",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Production Implementation: Fairlearn In-Processing Reductions Engine. Always enforce schema contracts at the ingestion boundary before raw records enter memory. Using Pydantic or zero-copy Arrow prevents unvalidated floats and untyped strings from silently polluting downstream tensors."
            }
          ],
          "contentHtml": "<div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] font-mono text-xs overflow-x-auto shadow-[4px_4px_0px_#151b20] my-2\">\n  <div class=\"text-[10px] text-[#0e7490] font-black mb-1.5 uppercase tracking-wider pb-1 border-b-2 border-[#151b20]/15 flex items-center justify-between\">\n    <span>Production Implementation / Type-Safe Listing:</span>\n    <span class=\"text-[#151b20] text-[9px] bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Python 3.10+</span>\n  </div>\n  <pre class=\"leading-relaxed bg-[#fffaf0] p-2.5 rounded-lg border border-[#151b20] text-[#151b20] overflow-x-auto\"><code># Production Fair Reductions Exponentiated Gradient Engine\nfrom typing import Dict, Any, Tuple\nimport numpy as np\nimport pandas as pd\nfrom sklearn.linear_model import LogisticRegression\n\ndef compute_group_selection_rates(y_pred: np.ndarray, A: np.ndarray) -&gt; Tuple[float, float, float]:\n    rate_0 = float(np.mean(y_pred[A == 0]))\n    rate_1 = float(np.mean(y_pred[A == 1]))\n    diff = abs(rate_0 - rate_1)\n    return rate_0, rate_1, diff\n\ndef train_fair_reductions_simulation(\n    X: np.ndarray, y: np.ndarray, A: np.ndarray, max_iter: int = 15, eta: float = 1.5, target_diff: float = 0.05\n) -&gt; Dict[str, Any]:\n    N = len(y)\n    # Dual multiplier for demographic parity constraint: E[Y_hat|A=0] - E[Y_hat|A=1] &lt;= eps\n    lambda_param = 0.5\n    models = []\n    weights_history = []\n\n    # Unconstrained baseline\n    base_clf = LogisticRegression(sol</code></pre>\n</div>"
        },
        "duo": {
          "speaker": "Socratic Debate (Dr. Nova & Kaito)",
          "title": "Socratic Debate: Production Implementation: Fairlearn In-Processing Reductions Engine",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Dr. Nova, where should this defensive type-safe schema validation execute?"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Always enforce schema contracts at the ingestion boundary before raw records enter memory. Using Pydantic or zero-copy Arrow prevents unvalidated floats and untyped strings from silently polluting downstream tensors."
            }
          ],
          "contentHtml": "<div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] font-mono text-xs overflow-x-auto shadow-[4px_4px_0px_#151b20] my-2\">\n  <div class=\"text-[10px] text-[#0e7490] font-black mb-1.5 uppercase tracking-wider pb-1 border-b-2 border-[#151b20]/15 flex items-center justify-between\">\n    <span>Production Implementation / Type-Safe Listing:</span>\n    <span class=\"text-[#151b20] text-[9px] bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Python 3.10+</span>\n  </div>\n  <pre class=\"leading-relaxed bg-[#fffaf0] p-2.5 rounded-lg border border-[#151b20] text-[#151b20] overflow-x-auto\"><code># Production Fair Reductions Exponentiated Gradient Engine\nfrom typing import Dict, Any, Tuple\nimport numpy as np\nimport pandas as pd\nfrom sklearn.linear_model import LogisticRegression\n\ndef compute_group_selection_rates(y_pred: np.ndarray, A: np.ndarray) -&gt; Tuple[float, float, float]:\n    rate_0 = float(np.mean(y_pred[A == 0]))\n    rate_1 = float(np.mean(y_pred[A == 1]))\n    diff = abs(rate_0 - rate_1)\n    return rate_0, rate_1, diff\n\ndef train_fair_reductions_simulation(\n    X: np.ndarray, y: np.ndarray, A: np.ndarray, max_iter: int = 15, eta: float = 1.5, target_diff: float = 0.05\n) -&gt; Dict[str, Any]:\n    N = len(y)\n    # Dual multiplier for demographic parity constraint: E[Y_hat|A=0] - E[Y_hat|A=1] &lt;= eps\n    lambda_param = 0.5\n    models = []\n    weights_history = []\n\n    # Unconstrained baseline\n    base_clf = LogisticRegression(sol</code></pre>\n</div>"
        }
      },
      {
        "id": "s6",
        "title": "Empirical Quantitative Breakdown: Adult Census Benchmark",
        "type": "bullets",
        "solo": {
          "speaker": "Dr. Nova (Senior Architect)",
          "title": "Empirical Quantitative Breakdown: Adult Census Benchmark",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Empirical Quantitative Breakdown: Adult Census Benchmark. In production engineering, this principle establishes reliability and reproducibility. $\\Delta_{\\text{DP}} = 19.6\\%$, Disparate Impact ratio: $\\rho = 0.28$ (severe legal violation)."
            }
          ],
          "contentHtml": "<div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">◆</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">Demographic Parity Difference</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">$\\Delta_{\\text{DP}} = 19.6\\%$, Disparate Impact ratio: $\\rho = 0.28$ (severe legal violation).</span>\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">▸</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">Demographic Parity Difference</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">$\\Delta_{\\text{DP}} = 1.8\\%$, Disparate Impact ratio: $\\rho = 0.91$ (fully compliant with four-fifths rule).</span>\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">⚡</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">Overall Accuracy</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">$84.9\\%$ (only $2.2\\%$ accuracy surrendered to eliminate $17.8\\%$ demographic disparity) (; ).</span>\n  </div>\n</div>"
        },
        "duo": {
          "speaker": "Socratic Debate (Dr. Nova & Kaito)",
          "title": "Socratic Debate: Empirical Quantitative Breakdown: Adult Census Benchmark",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Dr. Nova, what makes empirical quantitative breakdown: adult census benchmark essential for robust machine learning?"
            },
            {
              "speaker": "Dr. Nova",
              "text": "In production engineering, this principle establishes reliability and reproducibility. $\\Delta_{\\text{DP}} = 19.6\\%$, Disparate Impact ratio: $\\rho = 0.28$ (severe legal violation)."
            }
          ],
          "contentHtml": "<div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">◆</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">Demographic Parity Difference</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">$\\Delta_{\\text{DP}} = 19.6\\%$, Disparate Impact ratio: $\\rho = 0.28$ (severe legal violation).</span>\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">▸</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">Demographic Parity Difference</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">$\\Delta_{\\text{DP}} = 1.8\\%$, Disparate Impact ratio: $\\rho = 0.91$ (fully compliant with four-fifths rule).</span>\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">⚡</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">Overall Accuracy</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">$84.9\\%$ (only $2.2\\%$ accuracy surrendered to eliminate $17.8\\%$ demographic disparity) (; ).</span>\n  </div>\n</div>"
        }
      },
      {
        "id": "s7",
        "title": "Interactive Lab: Fairlearn Audit & Reductions Workbench",
        "type": "tool",
        "solo": {
          "speaker": "Dr. Nova (Senior Architect)",
          "title": "Interactive Lab: Fairlearn Audit & Reductions Workbench",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Interactive Lab: Fairlearn Audit & Reductions Workbench. Scroll directly beneath this presentation player to the live laboratory. Run the failure injection to observe how unvalidated anomalies trigger compounding cascades across downstream tensors. Hands-on testing proves why boundary schema contracts are mandatory."
            }
          ],
          "contentHtml": "<div class=\"p-4 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[4px_4px_0px_#22bfd7] my-2\">\n  <div class=\"flex items-center justify-between border-b-2 border-[#151b20]/15 pb-2 mb-2.5 flex-wrap gap-2\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"px-2.5 py-1 rounded-lg bg-[#c9f3f4] text-[#0e7490] font-mono font-black text-xs border border-[#151b20] shadow-[1px_1px_0px_#151b20] uppercase tracking-wider\">🔬 Interactive Lab</span>\n      <span class=\"text-xs font-mono font-black text-[#151b20]\">Fairlearn Audit &amp; Reductions Workbench</span>\n    </div>\n    <span class=\"text-[10px] font-mono text-[#0e7490] bg-[#fffaf0] px-2 py-0.5 rounded border border-[#151b20]\">Located Below on Page ↓</span>\n  </div>\n  <p class=\"text-xs text-[#334155] mb-3 leading-relaxed font-medium\">Inspect MetricFrame disparity tensors and test exponentiated gradient reductions live.</p>\n  <div class=\"bg-[#f6f0dc] p-3 rounded-xl border-2 border-[#151b20] space-y-2 text-xs\">\n    <span class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider block border-b border-[#151b20]/20 pb-1\">⚡ Recommended Hands-On Experiment:</span>\n    <div class=\"flex items-start gap-2 text-[#334155]\">\n  <span class=\"text-[#0e7490] font-bold font-mono text-xs\">1.</span>\n  <span class=\"text-xs leading-relaxed\">Scroll down to the interactive workbench section below the slide player to access the live laboratory.</span>\n</div><div class=\"flex items-start gap-2 text-[#334155]\">\n  <span class=\"text-[#0e7490] font-bold font-mono text-xs\">2.</span>\n  <span class=\"text-xs leading-relaxed\">Click &#x27;Launch Reductions Workbench →&#x27; to examine baseline state, then trigger &#x27;Inject anomaly / Run test&#x27; to simulate failure modes.</span>\n</div><div class=\"flex items-start gap-2 text-[#334155]\">\n  <span class=\"text-[#0e7490] font-bold font-mono text-xs\">3.</span>\n  <span class=\"text-xs leading-relaxed\">Audit telemetry metrics and observe how defensive schema contracts guard downstream models.</span>\n</div>\n  </div>\n</div>"
        },
        "duo": {
          "speaker": "Socratic Debate (Dr. Nova & Kaito)",
          "title": "Socratic Debate: Interactive Lab: Fairlearn Audit & Reductions Workbench",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Dr. Nova, what specific failure mode should I look for when I use the fairlearn audit & reductions workbench located below this player?"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Scroll directly beneath this presentation player to the live laboratory. Run the failure injection to observe how unvalidated anomalies trigger compounding cascades across downstream tensors. Hands-on testing proves why boundary schema contracts are mandatory."
            }
          ],
          "contentHtml": "<div class=\"p-4 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[4px_4px_0px_#22bfd7] my-2\">\n  <div class=\"flex items-center justify-between border-b-2 border-[#151b20]/15 pb-2 mb-2.5 flex-wrap gap-2\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"px-2.5 py-1 rounded-lg bg-[#c9f3f4] text-[#0e7490] font-mono font-black text-xs border border-[#151b20] shadow-[1px_1px_0px_#151b20] uppercase tracking-wider\">🔬 Interactive Lab</span>\n      <span class=\"text-xs font-mono font-black text-[#151b20]\">Fairlearn Audit &amp; Reductions Workbench</span>\n    </div>\n    <span class=\"text-[10px] font-mono text-[#0e7490] bg-[#fffaf0] px-2 py-0.5 rounded border border-[#151b20]\">Located Below on Page ↓</span>\n  </div>\n  <p class=\"text-xs text-[#334155] mb-3 leading-relaxed font-medium\">Inspect MetricFrame disparity tensors and test exponentiated gradient reductions live.</p>\n  <div class=\"bg-[#f6f0dc] p-3 rounded-xl border-2 border-[#151b20] space-y-2 text-xs\">\n    <span class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider block border-b border-[#151b20]/20 pb-1\">⚡ Recommended Hands-On Experiment:</span>\n    <div class=\"flex items-start gap-2 text-[#334155]\">\n  <span class=\"text-[#0e7490] font-bold font-mono text-xs\">1.</span>\n  <span class=\"text-xs leading-relaxed\">Scroll down to the interactive workbench section below the slide player to access the live laboratory.</span>\n</div><div class=\"flex items-start gap-2 text-[#334155]\">\n  <span class=\"text-[#0e7490] font-bold font-mono text-xs\">2.</span>\n  <span class=\"text-xs leading-relaxed\">Click &#x27;Launch Reductions Workbench →&#x27; to examine baseline state, then trigger &#x27;Inject anomaly / Run test&#x27; to simulate failure modes.</span>\n</div><div class=\"flex items-start gap-2 text-[#334155]\">\n  <span class=\"text-[#0e7490] font-bold font-mono text-xs\">3.</span>\n  <span class=\"text-xs leading-relaxed\">Audit telemetry metrics and observe how defensive schema contracts guard downstream models.</span>\n</div>\n  </div>\n</div>"
        }
      }
    ]
  },
  "ch7_p10": {
    "chapter": 7,
    "part": 10,
    "key": "ch7_p10",
    "badge": "◆ TRACK 7 • LESSON 7.10: EMERGING FAIRNESS TOPICS: CAUSALITY, MINIMAX, AND GENERATIVE AI",
    "index": "Lesson 10 of 10",
    "lessonTitle": "Emerging Fairness Topics: Causality, Minimax, and Generative AI",
    "slides": [
      {
        "id": "s1",
        "title": "Emerging Fairness Topics: Causality, Minimax, and Generative AI",
        "type": "title",
        "solo": {
          "speaker": "Dr. Nova (Senior Architect)",
          "title": "Emerging Fairness Topics: Causality, Minimax, and Generative AI",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Welcome to Lesson 7.10. Today we examine emerging fairness topics: causality, minimax, and generative ai, establishing the mathematical foundations and production discipline required to guarantee dataset reliability."
            }
          ],
          "contentHtml": "<div class=\"p-6 md:p-8 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#22bfd7] text-center space-y-4\">\n  <div class=\"inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#c9f3f4] text-[#0e7490] font-mono text-xs border-2 border-[#151b20] font-black uppercase tracking-wider shadow-[2px_2px_0px_#151b20]\">\n    <span>◆ Track 7: Foundations</span>\n    <span>•</span>\n    <span>Lesson 7.10</span>\n  </div>\n  <h2 class=\"text-2xl md:text-3xl font-black text-[#151b20] tracking-tight\">\n    Emerging Fairness Topics: Causality, Minimax, and Generative AI\n  </h2>\n  <p class=\"text-sm md:text-base text-[#334155] max-w-2xl mx-auto leading-relaxed font-medium\">\n    Deep dive into emerging fairness topics: causality, minimax, and generative ai with formal mathematical formulations, production engineering, and failure-mode analysis.\n  </p>\n  <div class=\"pt-2 flex flex-wrap items-center justify-center gap-2 font-mono text-xs\">\n    <span class=\"px-2.5 py-1 rounded-lg bg-[#fff0b9] border border-[#151b20] font-bold text-[#151b20]\">📐 Formal Foundations</span>\n    <span class=\"px-2.5 py-1 rounded-lg bg-[#ffd8ce] border border-[#151b20] font-bold text-[#151b20]\">⚠️ Failure Modes</span>\n    <span class=\"px-2.5 py-1 rounded-lg bg-[#c9f3f4] border border-[#151b20] font-bold text-[#151b20]\">🛡️ Production Contracts</span>\n  </div>\n</div>"
        },
        "duo": {
          "speaker": "Socratic Debate (Dr. Nova & Kaito)",
          "title": "Socratic Debate: Emerging Fairness Topics: Causality, Minimax, and Generative AI",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Dr. Nova, what is the core architectural challenge we are solving in Lesson 7.10?"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Welcome to Lesson 7.10. Today we examine emerging fairness topics: causality, minimax, and generative ai, establishing the mathematical foundations and production discipline required to guarantee dataset reliability."
            }
          ],
          "contentHtml": "<div class=\"p-6 md:p-8 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#22bfd7] text-center space-y-4\">\n  <div class=\"inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#c9f3f4] text-[#0e7490] font-mono text-xs border-2 border-[#151b20] font-black uppercase tracking-wider shadow-[2px_2px_0px_#151b20]\">\n    <span>◆ Track 7: Foundations</span>\n    <span>•</span>\n    <span>Lesson 7.10</span>\n  </div>\n  <h2 class=\"text-2xl md:text-3xl font-black text-[#151b20] tracking-tight\">\n    Emerging Fairness Topics: Causality, Minimax, and Generative AI\n  </h2>\n  <p class=\"text-sm md:text-base text-[#334155] max-w-2xl mx-auto leading-relaxed font-medium\">\n    Deep dive into emerging fairness topics: causality, minimax, and generative ai with formal mathematical formulations, production engineering, and failure-mode analysis.\n  </p>\n  <div class=\"pt-2 flex flex-wrap items-center justify-center gap-2 font-mono text-xs\">\n    <span class=\"px-2.5 py-1 rounded-lg bg-[#fff0b9] border border-[#151b20] font-bold text-[#151b20]\">📐 Formal Foundations</span>\n    <span class=\"px-2.5 py-1 rounded-lg bg-[#ffd8ce] border border-[#151b20] font-bold text-[#151b20]\">⚠️ Failure Modes</span>\n    <span class=\"px-2.5 py-1 rounded-lg bg-[#c9f3f4] border border-[#151b20] font-bold text-[#151b20]\">🛡️ Production Contracts</span>\n  </div>\n</div>"
        }
      },
      {
        "id": "s2",
        "title": "Conceptual Overview & Causal Frontiers",
        "type": "equation",
        "solo": {
          "speaker": "Dr. Nova (Senior Architect)",
          "title": "Conceptual Overview & Causal Frontiers",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Conceptual Overview & Causal Frontiers. Formalizing the empirical sample mathematically reveals that empirical risk only approximates true generalization risk when the i.i.d. assumption holds. When upstream sampling is biased, the empirical risk diverges asymptotically from true risk—no model tuning can fix that."
            }
          ],
          "contentHtml": "<div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] my-2 text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-1 text-left flex items-center justify-between\">\n    <span>📐 Mathematical Formulation</span>\n    <span class=\"text-[#151b20] text-[9px] font-mono bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Empirical Sample Formulation</span>\n  </div>\n  <div class=\"text-base md:text-lg font-serif text-[#151b20] py-1 overflow-x-auto bg-[#f0fbfd] border border-[#0e7490] rounded-lg my-1\">\n    $$\\mathbb{P}(\\hat{Y} = 1 \\mid A = a) = \\mathbb{P}(\\hat{Y} = 1 \\mid A = a')$$\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">◆</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">Counterfactual Fairness</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">Grounding algorithmic decisions in Structural Causal Models (SCMs) that simulate counterfactual interventions.</span>\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">▸</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">Multi-Group Minimax Fairness</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">Preventing fairness gerrymandering across exponential combinatorial intersections.</span>\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">⚡</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">The Differential Privacy vs. Fairness Conflict</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">Resolving disproportionate accuracy degradation in minority cohorts under uniform differential privacy noise injection.</span>\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">💡</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">Generative AI Representation Bias</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">Geometric debiasing of foundation model embedding subspaces.</span>\n  </div>\n</div>"
        },
        "duo": {
          "speaker": "Socratic Debate (Dr. Nova & Kaito)",
          "title": "Socratic Debate: Conceptual Overview & Causal Frontiers",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Dr. Nova, how does conceptual overview & causal frontiers protect our system against silent distribution shift in production?"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Formalizing the empirical sample mathematically reveals that empirical risk only approximates true generalization risk when the i.i.d. assumption holds. When upstream sampling is biased, the empirical risk diverges asymptotically from true risk—no model tuning can fix that."
            }
          ],
          "contentHtml": "<div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] my-2 text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-1 text-left flex items-center justify-between\">\n    <span>📐 Mathematical Formulation</span>\n    <span class=\"text-[#151b20] text-[9px] font-mono bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Empirical Sample Formulation</span>\n  </div>\n  <div class=\"text-base md:text-lg font-serif text-[#151b20] py-1 overflow-x-auto bg-[#f0fbfd] border border-[#0e7490] rounded-lg my-1\">\n    $$\\mathbb{P}(\\hat{Y} = 1 \\mid A = a) = \\mathbb{P}(\\hat{Y} = 1 \\mid A = a')$$\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">◆</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">Counterfactual Fairness</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">Grounding algorithmic decisions in Structural Causal Models (SCMs) that simulate counterfactual interventions.</span>\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">▸</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">Multi-Group Minimax Fairness</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">Preventing fairness gerrymandering across exponential combinatorial intersections.</span>\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">⚡</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">The Differential Privacy vs. Fairness Conflict</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">Resolving disproportionate accuracy degradation in minority cohorts under uniform differential privacy noise injection.</span>\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">💡</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">Generative AI Representation Bias</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">Geometric debiasing of foundation model embedding subspaces.</span>\n  </div>\n</div>"
        }
      },
      {
        "id": "s3",
        "title": "Conceptual Overview & Causal Frontiers: Architecture Flowchart",
        "type": "figure",
        "solo": {
          "speaker": "Dr. Nova (Senior Architect)",
          "title": "Conceptual Overview & Causal Frontiers: Architecture Flowchart",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Conceptual Overview & Causal Frontiers: Architecture Flowchart. This architecture diagram visualizes how physical observations transition across sampling boundaries into discrete tensor representations. Tracking each transition stage prevents undocumented transformations from corrupting the empirical distribution."
            }
          ],
          "contentHtml": "<div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[4px_4px_0px_#151b20] my-2 overflow-x-auto text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-2 text-left flex items-center justify-between border-b-2 border-[#151b20]/15 pb-1\">\n    <span class=\"flex items-center gap-1.5\">\n      <span>📊 Architecture &amp; Workflow Diagram</span>\n      <span class=\"text-[#151b20]/40\">•</span>\n      <span class=\"text-[#334155]\">System Flowchart</span>\n    </span>\n    <span class=\"text-[#0e7490] text-[9px] font-mono bg-[#c9f3f4] px-1.5 py-0.5 rounded border border-[#151b20]\">Mermaid SVG</span>\n  </div>\n  <pre class=\"mermaid py-1 flex justify-center text-xs overflow-x-auto leading-normal\">flowchart TD\n  %% Standard 5-Color Semantic Palette\n  classDef blue fill:#c9f3f4,stroke:#151b20,stroke-width:2px,color:#151b20;\n  classDef amber fill:#fff0b9,stroke:#151b20,stroke-width:2px,color:#151b20;\n  classDef green fill:#e7f4c8,stroke:#151b20,stroke-width:2px,color:#151b20;\n  classDef purple fill:#e2dfff,stroke:#151b20,stroke-width:2px,color:#151b20;\n  classDef red fill:#ffd8ce,stroke:#151b20,stroke-width:2px,color:#151b20;\n\n  U[\"Latent Background Confounders U<br/>(Inherent Talent, Work Ethic)\"]:::purple\n  A[\"Protected Attribute A<br/>(Race, Gender, Age)\"]:::red\n  X[\"Observed Mediators X<br/>(GPA, Credit History, Prior Arrests)\"]:::amber\n  Y_hat[\"Algorithmic Decision Y_hat<br/>(College Admission, Loan Approval)\"]:::blue\n\n  U --> A\n  U --> X\n  A --> X\n  X --> Y_hat\n  U --> Y_hat\n\n  Intervention[\"Counterfactual Intervention do(A := a')<br/>Sever path A -> X<br/>Check: P(Y_hat_a | U) = P(Y_hat_a' | U)\"]:::green\n  A -. Counterfactual Check .-> Intervention\n  Intervention -. Must Not Influence .-> Y_hat</pre>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">◆</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">Counterfactual Fairness</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">Grounding algorithmic decisions in Structural Causal Models (SCMs) that simulate counterfactual interventions.</span>\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">▸</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">Multi-Group Minimax Fairness</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">Preventing fairness gerrymandering across exponential combinatorial intersections.</span>\n  </div>\n</div>"
        },
        "duo": {
          "speaker": "Socratic Debate (Dr. Nova & Kaito)",
          "title": "Socratic Debate: Conceptual Overview & Causal Frontiers: Architecture Flowchart",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Dr. Nova, looking at this workflow diagram for conceptual overview & causal frontiers: architecture flowchart, how does the architectural flow enforce system stability?"
            },
            {
              "speaker": "Dr. Nova",
              "text": "This architecture diagram visualizes how physical observations transition across sampling boundaries into discrete tensor representations. Tracking each transition stage prevents undocumented transformations from corrupting the empirical distribution."
            }
          ],
          "contentHtml": "<div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[4px_4px_0px_#151b20] my-2 overflow-x-auto text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-2 text-left flex items-center justify-between border-b-2 border-[#151b20]/15 pb-1\">\n    <span class=\"flex items-center gap-1.5\">\n      <span>📊 Architecture &amp; Workflow Diagram</span>\n      <span class=\"text-[#151b20]/40\">•</span>\n      <span class=\"text-[#334155]\">System Flowchart</span>\n    </span>\n    <span class=\"text-[#0e7490] text-[9px] font-mono bg-[#c9f3f4] px-1.5 py-0.5 rounded border border-[#151b20]\">Mermaid SVG</span>\n  </div>\n  <pre class=\"mermaid py-1 flex justify-center text-xs overflow-x-auto leading-normal\">flowchart TD\n  %% Standard 5-Color Semantic Palette\n  classDef blue fill:#c9f3f4,stroke:#151b20,stroke-width:2px,color:#151b20;\n  classDef amber fill:#fff0b9,stroke:#151b20,stroke-width:2px,color:#151b20;\n  classDef green fill:#e7f4c8,stroke:#151b20,stroke-width:2px,color:#151b20;\n  classDef purple fill:#e2dfff,stroke:#151b20,stroke-width:2px,color:#151b20;\n  classDef red fill:#ffd8ce,stroke:#151b20,stroke-width:2px,color:#151b20;\n\n  U[\"Latent Background Confounders U<br/>(Inherent Talent, Work Ethic)\"]:::purple\n  A[\"Protected Attribute A<br/>(Race, Gender, Age)\"]:::red\n  X[\"Observed Mediators X<br/>(GPA, Credit History, Prior Arrests)\"]:::amber\n  Y_hat[\"Algorithmic Decision Y_hat<br/>(College Admission, Loan Approval)\"]:::blue\n\n  U --> A\n  U --> X\n  A --> X\n  X --> Y_hat\n  U --> Y_hat\n\n  Intervention[\"Counterfactual Intervention do(A := a')<br/>Sever path A -> X<br/>Check: P(Y_hat_a | U) = P(Y_hat_a' | U)\"]:::green\n  A -. Counterfactual Check .-> Intervention\n  Intervention -. Must Not Influence .-> Y_hat</pre>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">◆</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">Counterfactual Fairness</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">Grounding algorithmic decisions in Structural Causal Models (SCMs) that simulate counterfactual interventions.</span>\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">▸</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">Multi-Group Minimax Fairness</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">Preventing fairness gerrymandering across exponential combinatorial intersections.</span>\n  </div>\n</div>"
        }
      },
      {
        "id": "s4",
        "title": "Structural Causal Models & Counterfactual Fairness ([Kusner et al., 2017](#ref-kusner2017))",
        "type": "equation",
        "solo": {
          "speaker": "Dr. Nova (Senior Architect)",
          "title": "Structural Causal Models & Counterfactual Fairness ([Kusner et al., 2017](#ref-kusner2017))",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Structural Causal Models & Counterfactual Fairness ([Kusner et al., 2017](#ref-kusner2017)). Formalizing the empirical sample mathematically reveals that empirical risk only approximates true generalization risk when the i.i.d. assumption holds. When upstream sampling is biased, the empirical risk diverges asymptotically from true risk—no model tuning can fix that."
            }
          ],
          "contentHtml": "<div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] my-2 text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-1 text-left flex items-center justify-between\">\n    <span>📐 Mathematical Formulation</span>\n    <span class=\"text-[#151b20] text-[9px] font-mono bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Empirical Sample Formulation</span>\n  </div>\n  <div class=\"text-base md:text-lg font-serif text-[#151b20] py-1 overflow-x-auto bg-[#f0fbfd] border border-[#0e7490] rounded-lg my-1\">\n    $$V_i := f_i(\\text{PA}_i, U_i), \\quad V_i \\in \\mathcal{V}, \\quad U_i \\in \\mathcal{U}$$\n  </div>\n</div><div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] my-2 text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-1 text-left flex items-center justify-between\">\n    <span>📐 Mathematical Formulation</span>\n    <span class=\"text-[#151b20] text-[9px] font-mono bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Distribution Measure</span>\n  </div>\n  <div class=\"text-base md:text-lg font-serif text-[#151b20] py-1 overflow-x-auto bg-[#f0fbfd] border border-[#0e7490] rounded-lg my-1\">\n    $$\\mathbb{P}\\left(\\hat{Y}_{A \\leftarrow a}(\\mathcal{U}) = 1 \\;\\middle|\\; X = x, A = a\\right) = \\mathbb{P}\\left(\\hat{Y}_{A \\leftarrow a'}(\\mathcal{U}) = 1 \\;\\middle|\\; X = x, A = a\\right), \\quad \\forall a, a' \\in \\mathcal{A}$$\n  </div>\n</div><div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] my-2 text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-1 text-left flex items-center justify-between\">\n    <span>📐 Mathematical Formulation</span>\n    <span class=\"text-[#151b20] text-[9px] font-mono bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Empirical Risk Proxy</span>\n  </div>\n  <div class=\"text-base md:text-lg font-serif text-[#151b20] py-1 overflow-x-auto bg-[#f0fbfd] border border-[#0e7490] rounded-lg my-1\">\n    $$\\mathcal{P}(\\mathcal{U} \\mid X = x, A = a)$$\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">◆</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">Abduction</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">Compute the posterior distribution over latent background factors given evidence:</span>\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">▸</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">Action</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">Perform Pearl&#x27;s intervention $\\text{do}(A := a')$ by substituting the structural equation for $A$, forming the interventional sub-model $\\mathcal{M}_{a'}$.</span>\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">⚡</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">Prediction</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">Compute the expected prediction $\\hat{Y}$ on modified model $\\mathcal{M}_{a'}$ using the posterior distribution of $\\mathcal{U}$.</span>\n  </div>\n</div>"
        },
        "duo": {
          "speaker": "Socratic Debate (Dr. Nova & Kaito)",
          "title": "Socratic Debate: Structural Causal Models & Counterfactual Fairness ([Kusner et al., 2017](#ref-kusner2017))",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Dr. Nova, how does structural causal models & counterfactual fairness ([kusner et al., 2017](#ref-kusner2017)) protect our system against silent distribution shift in production?"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Formalizing the empirical sample mathematically reveals that empirical risk only approximates true generalization risk when the i.i.d. assumption holds. When upstream sampling is biased, the empirical risk diverges asymptotically from true risk—no model tuning can fix that."
            }
          ],
          "contentHtml": "<div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] my-2 text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-1 text-left flex items-center justify-between\">\n    <span>📐 Mathematical Formulation</span>\n    <span class=\"text-[#151b20] text-[9px] font-mono bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Empirical Sample Formulation</span>\n  </div>\n  <div class=\"text-base md:text-lg font-serif text-[#151b20] py-1 overflow-x-auto bg-[#f0fbfd] border border-[#0e7490] rounded-lg my-1\">\n    $$V_i := f_i(\\text{PA}_i, U_i), \\quad V_i \\in \\mathcal{V}, \\quad U_i \\in \\mathcal{U}$$\n  </div>\n</div><div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] my-2 text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-1 text-left flex items-center justify-between\">\n    <span>📐 Mathematical Formulation</span>\n    <span class=\"text-[#151b20] text-[9px] font-mono bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Distribution Measure</span>\n  </div>\n  <div class=\"text-base md:text-lg font-serif text-[#151b20] py-1 overflow-x-auto bg-[#f0fbfd] border border-[#0e7490] rounded-lg my-1\">\n    $$\\mathbb{P}\\left(\\hat{Y}_{A \\leftarrow a}(\\mathcal{U}) = 1 \\;\\middle|\\; X = x, A = a\\right) = \\mathbb{P}\\left(\\hat{Y}_{A \\leftarrow a'}(\\mathcal{U}) = 1 \\;\\middle|\\; X = x, A = a\\right), \\quad \\forall a, a' \\in \\mathcal{A}$$\n  </div>\n</div><div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] my-2 text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-1 text-left flex items-center justify-between\">\n    <span>📐 Mathematical Formulation</span>\n    <span class=\"text-[#151b20] text-[9px] font-mono bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Empirical Risk Proxy</span>\n  </div>\n  <div class=\"text-base md:text-lg font-serif text-[#151b20] py-1 overflow-x-auto bg-[#f0fbfd] border border-[#0e7490] rounded-lg my-1\">\n    $$\\mathcal{P}(\\mathcal{U} \\mid X = x, A = a)$$\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">◆</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">Abduction</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">Compute the posterior distribution over latent background factors given evidence:</span>\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">▸</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">Action</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">Perform Pearl&#x27;s intervention $\\text{do}(A := a')$ by substituting the structural equation for $A$, forming the interventional sub-model $\\mathcal{M}_{a'}$.</span>\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">⚡</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">Prediction</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">Compute the expected prediction $\\hat{Y}$ on modified model $\\mathcal{M}_{a'}$ using the posterior distribution of $\\mathcal{U}$.</span>\n  </div>\n</div>"
        }
      },
      {
        "id": "s5",
        "title": "Differential Privacy vs. Fairness Conflict ([Cummings et al., 2019](#ref-cummings2019))",
        "type": "equation",
        "solo": {
          "speaker": "Dr. Nova (Senior Architect)",
          "title": "Differential Privacy vs. Fairness Conflict ([Cummings et al., 2019](#ref-cummings2019))",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Differential Privacy vs. Fairness Conflict ([Cummings et al., 2019](#ref-cummings2019)). Formalizing the empirical sample mathematically reveals that empirical risk only approximates true generalization risk when the i.i.d. assumption holds. When upstream sampling is biased, the empirical risk diverges asymptotically from true risk—no model tuning can fix that."
            }
          ],
          "contentHtml": "<div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] my-2 text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-1 text-left flex items-center justify-between\">\n    <span>📐 Mathematical Formulation</span>\n    <span class=\"text-[#151b20] text-[9px] font-mono bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Empirical Sample Formulation</span>\n  </div>\n  <div class=\"text-base md:text-lg font-serif text-[#151b20] py-1 overflow-x-auto bg-[#f0fbfd] border border-[#0e7490] rounded-lg my-1\">\n    $$\\mathbb{P}(\\mathcal{M}(D) \\in \\mathcal{S}) \\le e^\\epsilon \\cdot \\mathbb{P}(\\mathcal{M}(D') \\in \\mathcal{S}) + \\delta$$\n  </div>\n</div><div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] my-2 text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-1 text-left flex items-center justify-between\">\n    <span>📐 Mathematical Formulation</span>\n    <span class=\"text-[#151b20] text-[9px] font-mono bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Distribution Measure</span>\n  </div>\n  <div class=\"text-base md:text-lg font-serif text-[#151b20] py-1 overflow-x-auto bg-[#f0fbfd] border border-[#0e7490] rounded-lg my-1\">\n    $$\\text{Var}(\\hat{\\theta}_{\\text{minority}}) \\propto \\frac{\\sigma_{\\text{noise}}^2}{n_{\\text{minority}}^2} \\gg \\frac{\\sigma_{\\text{noise}}^2}{n_{\\text{majority}}^2} \\propto \\text{Var}(\\hat{\\theta}_{\\text{majority}})$$\n  </div>\n</div>"
        },
        "duo": {
          "speaker": "Socratic Debate (Dr. Nova & Kaito)",
          "title": "Socratic Debate: Differential Privacy vs. Fairness Conflict ([Cummings et al., 2019](#ref-cummings2019))",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Dr. Nova, how does differential privacy vs. fairness conflict ([cummings et al., 2019](#ref-cummings2019)) protect our system against silent distribution shift in production?"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Formalizing the empirical sample mathematically reveals that empirical risk only approximates true generalization risk when the i.i.d. assumption holds. When upstream sampling is biased, the empirical risk diverges asymptotically from true risk—no model tuning can fix that."
            }
          ],
          "contentHtml": "<div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] my-2 text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-1 text-left flex items-center justify-between\">\n    <span>📐 Mathematical Formulation</span>\n    <span class=\"text-[#151b20] text-[9px] font-mono bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Empirical Sample Formulation</span>\n  </div>\n  <div class=\"text-base md:text-lg font-serif text-[#151b20] py-1 overflow-x-auto bg-[#f0fbfd] border border-[#0e7490] rounded-lg my-1\">\n    $$\\mathbb{P}(\\mathcal{M}(D) \\in \\mathcal{S}) \\le e^\\epsilon \\cdot \\mathbb{P}(\\mathcal{M}(D') \\in \\mathcal{S}) + \\delta$$\n  </div>\n</div><div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] my-2 text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-1 text-left flex items-center justify-between\">\n    <span>📐 Mathematical Formulation</span>\n    <span class=\"text-[#151b20] text-[9px] font-mono bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Distribution Measure</span>\n  </div>\n  <div class=\"text-base md:text-lg font-serif text-[#151b20] py-1 overflow-x-auto bg-[#f0fbfd] border border-[#0e7490] rounded-lg my-1\">\n    $$\\text{Var}(\\hat{\\theta}_{\\text{minority}}) \\propto \\frac{\\sigma_{\\text{noise}}^2}{n_{\\text{minority}}^2} \\gg \\frac{\\sigma_{\\text{noise}}^2}{n_{\\text{majority}}^2} \\propto \\text{Var}(\\hat{\\theta}_{\\text{majority}})$$\n  </div>\n</div>"
        }
      },
      {
        "id": "s6",
        "title": "Generative AI Stereotype Vector Projection in Latent Space",
        "type": "equation",
        "solo": {
          "speaker": "Dr. Nova (Senior Architect)",
          "title": "Generative AI Stereotype Vector Projection in Latent Space",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Generative AI Stereotype Vector Projection in Latent Space. Formalizing the empirical sample mathematically reveals that empirical risk only approximates true generalization risk when the i.i.d. assumption holds. When upstream sampling is biased, the empirical risk diverges asymptotically from true risk—no model tuning can fix that."
            }
          ],
          "contentHtml": "<div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] my-2 text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-1 text-left flex items-center justify-between\">\n    <span>📐 Mathematical Formulation</span>\n    <span class=\"text-[#151b20] text-[9px] font-mono bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Empirical Sample Formulation</span>\n  </div>\n  <div class=\"text-base md:text-lg font-serif text-[#151b20] py-1 overflow-x-auto bg-[#f0fbfd] border border-[#0e7490] rounded-lg my-1\">\n    $$\\vec{v}_{\\text{bias}} = \\frac{1}{|\\mathcal{P}|} \\sum_{(w_1, w_2) \\in \\mathcal{P}} \\left( \\vec{e}(w_1) - \\vec{e}(w_2) \\right)$$\n  </div>\n</div><div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] my-2 text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-1 text-left flex items-center justify-between\">\n    <span>📐 Mathematical Formulation</span>\n    <span class=\"text-[#151b20] text-[9px] font-mono bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Distribution Measure</span>\n  </div>\n  <div class=\"text-base md:text-lg font-serif text-[#151b20] py-1 overflow-x-auto bg-[#f0fbfd] border border-[#0e7490] rounded-lg my-1\">\n    $$\\vec{e}_{\\text{fair}}(w) = \\vec{e}(w) - \\frac{\\vec{e}(w)^T \\vec{v}_{\\text{bias}}}{\\|\\vec{v}_{\\text{bias}}\\|_2^2} \\vec{v}_{\\text{bias}}$$\n  </div>\n</div>"
        },
        "duo": {
          "speaker": "Socratic Debate (Dr. Nova & Kaito)",
          "title": "Socratic Debate: Generative AI Stereotype Vector Projection in Latent Space",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Dr. Nova, how does generative ai stereotype vector projection in latent space protect our system against silent distribution shift in production?"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Formalizing the empirical sample mathematically reveals that empirical risk only approximates true generalization risk when the i.i.d. assumption holds. When upstream sampling is biased, the empirical risk diverges asymptotically from true risk—no model tuning can fix that."
            }
          ],
          "contentHtml": "<div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] my-2 text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-1 text-left flex items-center justify-between\">\n    <span>📐 Mathematical Formulation</span>\n    <span class=\"text-[#151b20] text-[9px] font-mono bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Empirical Sample Formulation</span>\n  </div>\n  <div class=\"text-base md:text-lg font-serif text-[#151b20] py-1 overflow-x-auto bg-[#f0fbfd] border border-[#0e7490] rounded-lg my-1\">\n    $$\\vec{v}_{\\text{bias}} = \\frac{1}{|\\mathcal{P}|} \\sum_{(w_1, w_2) \\in \\mathcal{P}} \\left( \\vec{e}(w_1) - \\vec{e}(w_2) \\right)$$\n  </div>\n</div><div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] my-2 text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-1 text-left flex items-center justify-between\">\n    <span>📐 Mathematical Formulation</span>\n    <span class=\"text-[#151b20] text-[9px] font-mono bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Distribution Measure</span>\n  </div>\n  <div class=\"text-base md:text-lg font-serif text-[#151b20] py-1 overflow-x-auto bg-[#f0fbfd] border border-[#0e7490] rounded-lg my-1\">\n    $$\\vec{e}_{\\text{fair}}(w) = \\vec{e}(w) - \\frac{\\vec{e}(w)^T \\vec{v}_{\\text{bias}}}{\\|\\vec{v}_{\\text{bias}}\\|_2^2} \\vec{v}_{\\text{bias}}$$\n  </div>\n</div>"
        }
      },
      {
        "id": "s7",
        "title": "Production Implementation: Counterfactual Causal SCM Evaluator",
        "type": "code",
        "solo": {
          "speaker": "Dr. Nova (Senior Architect)",
          "title": "Production Implementation: Counterfactual Causal SCM Evaluator",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Production Implementation: Counterfactual Causal SCM Evaluator. Always enforce schema contracts at the ingestion boundary before raw records enter memory. Using Pydantic or zero-copy Arrow prevents unvalidated floats and untyped strings from silently polluting downstream tensors."
            }
          ],
          "contentHtml": "<div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] font-mono text-xs overflow-x-auto shadow-[4px_4px_0px_#151b20] my-2\">\n  <div class=\"text-[10px] text-[#0e7490] font-black mb-1.5 uppercase tracking-wider pb-1 border-b-2 border-[#151b20]/15 flex items-center justify-between\">\n    <span>Production Implementation / Type-Safe Listing:</span>\n    <span class=\"text-[#151b20] text-[9px] bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Python 3.10+</span>\n  </div>\n  <pre class=\"leading-relaxed bg-[#fffaf0] p-2.5 rounded-lg border border-[#151b20] text-[#151b20] overflow-x-auto\"><code># Counterfactual Fairness SCM Evaluator\nfrom typing import Tuple, Dict\nimport numpy as np\nimport pandas as pd\nfrom sklearn.linear_model import LinearRegression\n\nclass StructuralCausalModel:\n    def __init__(self):\n        # Mediators: GPA (G) and LSAT (L) depend on latent talent U and sensitive attribute A (Race/Gender)\n        # Structural equations:\n        #   G = alpha_g * U + beta_g * A + eps_g\n        #   L = alpha_l * U + beta_l * A + eps_l\n        self.alpha_g, self.beta_g = 1.0, 0.4\n        self.alpha_l, self.beta_l = 1.2, 0.8\n\n    def generate_data(self, N: int = 2000) -&gt; pd.DataFrame:\n        U = np.random.normal(0, 1, size=N)  # Unobserved latent ability\n        A = np.random.choice([0, 1], size=N, p=[0.35, 0.65])  # Protected attribute\n\n        eps_g = np.random.normal(0, 0.2, size=N)\n        eps_l = np.random.normal(0, 0.2, </code></pre>\n</div>"
        },
        "duo": {
          "speaker": "Socratic Debate (Dr. Nova & Kaito)",
          "title": "Socratic Debate: Production Implementation: Counterfactual Causal SCM Evaluator",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Dr. Nova, where should this defensive type-safe schema validation execute?"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Always enforce schema contracts at the ingestion boundary before raw records enter memory. Using Pydantic or zero-copy Arrow prevents unvalidated floats and untyped strings from silently polluting downstream tensors."
            }
          ],
          "contentHtml": "<div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] font-mono text-xs overflow-x-auto shadow-[4px_4px_0px_#151b20] my-2\">\n  <div class=\"text-[10px] text-[#0e7490] font-black mb-1.5 uppercase tracking-wider pb-1 border-b-2 border-[#151b20]/15 flex items-center justify-between\">\n    <span>Production Implementation / Type-Safe Listing:</span>\n    <span class=\"text-[#151b20] text-[9px] bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Python 3.10+</span>\n  </div>\n  <pre class=\"leading-relaxed bg-[#fffaf0] p-2.5 rounded-lg border border-[#151b20] text-[#151b20] overflow-x-auto\"><code># Counterfactual Fairness SCM Evaluator\nfrom typing import Tuple, Dict\nimport numpy as np\nimport pandas as pd\nfrom sklearn.linear_model import LinearRegression\n\nclass StructuralCausalModel:\n    def __init__(self):\n        # Mediators: GPA (G) and LSAT (L) depend on latent talent U and sensitive attribute A (Race/Gender)\n        # Structural equations:\n        #   G = alpha_g * U + beta_g * A + eps_g\n        #   L = alpha_l * U + beta_l * A + eps_l\n        self.alpha_g, self.beta_g = 1.0, 0.4\n        self.alpha_l, self.beta_l = 1.2, 0.8\n\n    def generate_data(self, N: int = 2000) -&gt; pd.DataFrame:\n        U = np.random.normal(0, 1, size=N)  # Unobserved latent ability\n        A = np.random.choice([0, 1], size=N, p=[0.35, 0.65])  # Protected attribute\n\n        eps_g = np.random.normal(0, 0.2, size=N)\n        eps_l = np.random.normal(0, 0.2, </code></pre>\n</div>"
        }
      },
      {
        "id": "s8",
        "title": "Empirical Case Study: Law School Admissions Benchmark ([Kusner et al., 2017](#ref-kusner2017))",
        "type": "equation",
        "solo": {
          "speaker": "Dr. Nova (Senior Architect)",
          "title": "Empirical Case Study: Law School Admissions Benchmark ([Kusner et al., 2017](#ref-kusner2017))",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Empirical Case Study: Law School Admissions Benchmark ([Kusner et al., 2017](#ref-kusner2017)). Formalizing the empirical sample mathematically reveals that empirical risk only approximates true generalization risk when the i.i.d. assumption holds. When upstream sampling is biased, the empirical risk diverges asymptotically from true risk—no model tuning can fix that."
            }
          ],
          "contentHtml": "<div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] my-2 text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-1 text-left flex items-center justify-between\">\n    <span>📐 Mathematical Formulation</span>\n    <span class=\"text-[#151b20] text-[9px] font-mono bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Empirical Sample Formulation</span>\n  </div>\n  <div class=\"text-base md:text-lg font-serif text-[#151b20] py-1 overflow-x-auto bg-[#f0fbfd] border border-[#0e7490] rounded-lg my-1\">\n    $$\\text{GPA} = f_g(U, A, \\epsilon_g), \\qquad \\text{LSAT} = f_l(U, A, \\epsilon_l)$$\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">◆</span>\n  <div>\n    \n    <span class=\"text-[#334155] text-xs block leading-relaxed font-medium\">Both Grade Point Average (GPA) and Law School Admission Test (LSAT) scores exhibited direct statistical dependency on race ($A$) due to historical socioeconomic disparities.</span>\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">▸</span>\n  <div>\n    \n    <span class=\"text-[#334155] text-xs block leading-relaxed font-medium\">Simply removing $A$ from model inputs (Fairness Through Unawareness) was useless because GPA and LSAT served as strong proxy encoders for $A$.</span>\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">⚡</span>\n  <div>\n    \n    <span class=\"text-[#334155] text-xs block leading-relaxed font-medium\">Kusner et al. constructed an SCM with latent student qualification factor $U$:</span>\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">💡</span>\n  <div>\n    \n    <span class=\"text-[#334155] text-xs block leading-relaxed font-medium\">By conditioning admissions predictions strictly on the abducted latent talent factor $U$ rather than observed test scores directly, the model eliminated race-mediated disparity while achieving higher first-year law school grade correlation ($r = 0.41$) than naive observational classifiers (; ).</span>\n  </div>\n</div>"
        },
        "duo": {
          "speaker": "Socratic Debate (Dr. Nova & Kaito)",
          "title": "Socratic Debate: Empirical Case Study: Law School Admissions Benchmark ([Kusner et al., 2017](#ref-kusner2017))",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Dr. Nova, how does empirical case study: law school admissions benchmark ([kusner et al., 2017](#ref-kusner2017)) protect our system against silent distribution shift in production?"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Formalizing the empirical sample mathematically reveals that empirical risk only approximates true generalization risk when the i.i.d. assumption holds. When upstream sampling is biased, the empirical risk diverges asymptotically from true risk—no model tuning can fix that."
            }
          ],
          "contentHtml": "<div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] my-2 text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-1 text-left flex items-center justify-between\">\n    <span>📐 Mathematical Formulation</span>\n    <span class=\"text-[#151b20] text-[9px] font-mono bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Empirical Sample Formulation</span>\n  </div>\n  <div class=\"text-base md:text-lg font-serif text-[#151b20] py-1 overflow-x-auto bg-[#f0fbfd] border border-[#0e7490] rounded-lg my-1\">\n    $$\\text{GPA} = f_g(U, A, \\epsilon_g), \\qquad \\text{LSAT} = f_l(U, A, \\epsilon_l)$$\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">◆</span>\n  <div>\n    \n    <span class=\"text-[#334155] text-xs block leading-relaxed font-medium\">Both Grade Point Average (GPA) and Law School Admission Test (LSAT) scores exhibited direct statistical dependency on race ($A$) due to historical socioeconomic disparities.</span>\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">▸</span>\n  <div>\n    \n    <span class=\"text-[#334155] text-xs block leading-relaxed font-medium\">Simply removing $A$ from model inputs (Fairness Through Unawareness) was useless because GPA and LSAT served as strong proxy encoders for $A$.</span>\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">⚡</span>\n  <div>\n    \n    <span class=\"text-[#334155] text-xs block leading-relaxed font-medium\">Kusner et al. constructed an SCM with latent student qualification factor $U$:</span>\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">💡</span>\n  <div>\n    \n    <span class=\"text-[#334155] text-xs block leading-relaxed font-medium\">By conditioning admissions predictions strictly on the abducted latent talent factor $U$ rather than observed test scores directly, the model eliminated race-mediated disparity while achieving higher first-year law school grade correlation ($r = 0.41$) than naive observational classifiers (; ).</span>\n  </div>\n</div>"
        }
      },
      {
        "id": "s9",
        "title": "Interactive Lab: Causal Counterfactual Fairness Simulator",
        "type": "tool",
        "solo": {
          "speaker": "Dr. Nova (Senior Architect)",
          "title": "Interactive Lab: Causal Counterfactual Fairness Simulator",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Interactive Lab: Causal Counterfactual Fairness Simulator. Scroll directly beneath this presentation player to the live laboratory. Run the failure injection to observe how unvalidated anomalies trigger compounding cascades across downstream tensors. Hands-on testing proves why boundary schema contracts are mandatory."
            }
          ],
          "contentHtml": "<div class=\"p-4 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[4px_4px_0px_#22bfd7] my-2\">\n  <div class=\"flex items-center justify-between border-b-2 border-[#151b20]/15 pb-2 mb-2.5 flex-wrap gap-2\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"px-2.5 py-1 rounded-lg bg-[#c9f3f4] text-[#0e7490] font-mono font-black text-xs border border-[#151b20] shadow-[1px_1px_0px_#151b20] uppercase tracking-wider\">🔬 Interactive Lab</span>\n      <span class=\"text-xs font-mono font-black text-[#151b20]\">Causal Counterfactual Fairness Simulator</span>\n    </div>\n    <span class=\"text-[10px] font-mono text-[#0e7490] bg-[#fffaf0] px-2 py-0.5 rounded border border-[#151b20]\">Located Below on Page ↓</span>\n  </div>\n  <p class=\"text-xs text-[#334155] mb-3 leading-relaxed font-medium\">Test Pearlian counterfactual interventions do(A := a&#x27;) and observe causal DAG mediation live.</p>\n  <div class=\"bg-[#f6f0dc] p-3 rounded-xl border-2 border-[#151b20] space-y-2 text-xs\">\n    <span class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider block border-b border-[#151b20]/20 pb-1\">⚡ Recommended Hands-On Experiment:</span>\n    <div class=\"flex items-start gap-2 text-[#334155]\">\n  <span class=\"text-[#0e7490] font-bold font-mono text-xs\">1.</span>\n  <span class=\"text-xs leading-relaxed\">Scroll down to the interactive workbench section below the slide player to access the live laboratory.</span>\n</div><div class=\"flex items-start gap-2 text-[#334155]\">\n  <span class=\"text-[#0e7490] font-bold font-mono text-xs\">2.</span>\n  <span class=\"text-xs leading-relaxed\">Click &#x27;Launch Causal Workbench →&#x27; to examine baseline state, then trigger &#x27;Inject anomaly / Run test&#x27; to simulate failure modes.</span>\n</div><div class=\"flex items-start gap-2 text-[#334155]\">\n  <span class=\"text-[#0e7490] font-bold font-mono text-xs\">3.</span>\n  <span class=\"text-xs leading-relaxed\">Audit telemetry metrics and observe how defensive schema contracts guard downstream models.</span>\n</div>\n  </div>\n</div>"
        },
        "duo": {
          "speaker": "Socratic Debate (Dr. Nova & Kaito)",
          "title": "Socratic Debate: Interactive Lab: Causal Counterfactual Fairness Simulator",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Dr. Nova, what specific failure mode should I look for when I use the causal counterfactual fairness simulator located below this player?"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Scroll directly beneath this presentation player to the live laboratory. Run the failure injection to observe how unvalidated anomalies trigger compounding cascades across downstream tensors. Hands-on testing proves why boundary schema contracts are mandatory."
            }
          ],
          "contentHtml": "<div class=\"p-4 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[4px_4px_0px_#22bfd7] my-2\">\n  <div class=\"flex items-center justify-between border-b-2 border-[#151b20]/15 pb-2 mb-2.5 flex-wrap gap-2\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"px-2.5 py-1 rounded-lg bg-[#c9f3f4] text-[#0e7490] font-mono font-black text-xs border border-[#151b20] shadow-[1px_1px_0px_#151b20] uppercase tracking-wider\">🔬 Interactive Lab</span>\n      <span class=\"text-xs font-mono font-black text-[#151b20]\">Causal Counterfactual Fairness Simulator</span>\n    </div>\n    <span class=\"text-[10px] font-mono text-[#0e7490] bg-[#fffaf0] px-2 py-0.5 rounded border border-[#151b20]\">Located Below on Page ↓</span>\n  </div>\n  <p class=\"text-xs text-[#334155] mb-3 leading-relaxed font-medium\">Test Pearlian counterfactual interventions do(A := a&#x27;) and observe causal DAG mediation live.</p>\n  <div class=\"bg-[#f6f0dc] p-3 rounded-xl border-2 border-[#151b20] space-y-2 text-xs\">\n    <span class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider block border-b border-[#151b20]/20 pb-1\">⚡ Recommended Hands-On Experiment:</span>\n    <div class=\"flex items-start gap-2 text-[#334155]\">\n  <span class=\"text-[#0e7490] font-bold font-mono text-xs\">1.</span>\n  <span class=\"text-xs leading-relaxed\">Scroll down to the interactive workbench section below the slide player to access the live laboratory.</span>\n</div><div class=\"flex items-start gap-2 text-[#334155]\">\n  <span class=\"text-[#0e7490] font-bold font-mono text-xs\">2.</span>\n  <span class=\"text-xs leading-relaxed\">Click &#x27;Launch Causal Workbench →&#x27; to examine baseline state, then trigger &#x27;Inject anomaly / Run test&#x27; to simulate failure modes.</span>\n</div><div class=\"flex items-start gap-2 text-[#334155]\">\n  <span class=\"text-[#0e7490] font-bold font-mono text-xs\">3.</span>\n  <span class=\"text-xs leading-relaxed\">Audit telemetry metrics and observe how defensive schema contracts guard downstream models.</span>\n</div>\n  </div>\n</div>"
        }
      }
    ]
  }
};
