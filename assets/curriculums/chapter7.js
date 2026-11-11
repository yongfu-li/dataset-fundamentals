window.CURRICULUM_CH7 = window.curriculum_chapter7 = {
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
          "contentHtml": "\n<div class=\"p-5 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#151b20] my-2 text-center font-mono text-xs\">\n  <div class=\"p-3 rounded-xl bg-[#ffd8ce] border-2 border-[#151b20] text-[#b91c1c] font-black\">\n    ⚖️ The Legal Paradox: Post-Processing Threshold Adjustments ($\theta_0 \neq \theta_1$) Resolve Disparate Impact but Collide with Disparate Treatment Prohibitions!\n  </div>\n</div>\n"
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
    "badge": "◆ TRACK 7 • LESSON 7.2: TYPES AND MECHANISMS OF DATASET BIAS",
    "index": "Lesson 2 of 10",
    "lessonTitle": "Types and Mechanisms of Dataset Bias",
    "slides": [
      {
        "id": "s1",
        "title": "Types and Mechanisms of Dataset Bias",
        "type": "title",
        "solo": {
          "speaker": "Dr. Nova (Senior Architect)",
          "title": "Types and Mechanisms of Dataset Bias",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Welcome to Lesson 7.2. Today we examine types and mechanisms of dataset bias, establishing the mathematical foundations and production discipline required to guarantee dataset reliability."
            }
          ],
          "contentHtml": "<div class=\"p-6 md:p-8 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#22bfd7] text-center space-y-4\">\n  <div class=\"inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#c9f3f4] text-[#0e7490] font-mono text-xs border-2 border-[#151b20] font-black uppercase tracking-wider shadow-[2px_2px_0px_#151b20]\">\n    <span>◆ Track 7: Foundations</span>\n    <span>•</span>\n    <span>Lesson 7.2</span>\n  </div>\n  <h2 class=\"text-2xl md:text-3xl font-black text-[#151b20] tracking-tight\">\n    Types and Mechanisms of Dataset Bias\n  </h2>\n  <p class=\"text-sm md:text-base text-[#334155] max-w-2xl mx-auto leading-relaxed font-medium\">\n    Deep dive into types and mechanisms of dataset bias with formal mathematical formulations, production engineering, and failure-mode analysis.\n  </p>\n  <div class=\"pt-2 flex flex-wrap items-center justify-center gap-2 font-mono text-xs\">\n    <span class=\"px-2.5 py-1 rounded-lg bg-[#fff0b9] border border-[#151b20] font-bold text-[#151b20]\">📐 Formal Foundations</span>\n    <span class=\"px-2.5 py-1 rounded-lg bg-[#ffd8ce] border border-[#151b20] font-bold text-[#151b20]\">⚠️ Failure Modes</span>\n    <span class=\"px-2.5 py-1 rounded-lg bg-[#c9f3f4] border border-[#151b20] font-bold text-[#151b20]\">🛡️ Production Contracts</span>\n  </div>\n</div>"
        },
        "duo": {
          "speaker": "Socratic Debate (Dr. Nova & Kaito)",
          "title": "Socratic Debate: Types and Mechanisms of Dataset Bias",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Dr. Nova, what is the core architectural challenge we are solving in Lesson 7.2?"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Welcome to Lesson 7.2. Today we examine types and mechanisms of dataset bias, establishing the mathematical foundations and production discipline required to guarantee dataset reliability."
            }
          ],
          "contentHtml": "<div class=\"p-6 md:p-8 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#22bfd7] text-center space-y-4\">\n  <div class=\"inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#c9f3f4] text-[#0e7490] font-mono text-xs border-2 border-[#151b20] font-black uppercase tracking-wider shadow-[2px_2px_0px_#151b20]\">\n    <span>◆ Track 7: Foundations</span>\n    <span>•</span>\n    <span>Lesson 7.2</span>\n  </div>\n  <h2 class=\"text-2xl md:text-3xl font-black text-[#151b20] tracking-tight\">\n    Types and Mechanisms of Dataset Bias\n  </h2>\n  <p class=\"text-sm md:text-base text-[#334155] max-w-2xl mx-auto leading-relaxed font-medium\">\n    Deep dive into types and mechanisms of dataset bias with formal mathematical formulations, production engineering, and failure-mode analysis.\n  </p>\n  <div class=\"pt-2 flex flex-wrap items-center justify-center gap-2 font-mono text-xs\">\n    <span class=\"px-2.5 py-1 rounded-lg bg-[#fff0b9] border border-[#151b20] font-bold text-[#151b20]\">📐 Formal Foundations</span>\n    <span class=\"px-2.5 py-1 rounded-lg bg-[#ffd8ce] border border-[#151b20] font-bold text-[#151b20]\">⚠️ Failure Modes</span>\n    <span class=\"px-2.5 py-1 rounded-lg bg-[#c9f3f4] border border-[#151b20] font-bold text-[#151b20]\">🛡️ Production Contracts</span>\n  </div>\n</div>"
        }
      },
      {
        "id": "s2",
        "title": "Conceptual Overview & Bias Taxonomy: Mathematical Taxonomy of Dataset Biases",
        "type": "equation",
        "solo": {
          "speaker": "Dr. Nova (Senior Architect)",
          "title": "Conceptual Overview & Bias Taxonomy: Mathematical Taxonomy of Dataset Biases",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Conceptual Overview & Bias Taxonomy: Mathematical Taxonomy of Dataset Biases. Formalizing the empirical sample mathematically reveals that empirical risk only approximates true generalization risk when the i.i.d. assumption holds. When upstream sampling is biased, the empirical risk diverges asymptotically from true risk—no model tuning can fix that."
            }
          ],
          "contentHtml": "<div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] my-2 text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-1 text-left flex items-center justify-between\">\n    <span>📐 Mathematical Formulation</span>\n    <span class=\"text-[#151b20] text-[9px] font-mono bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Empirical Sample Formulation</span>\n  </div>\n  <div class=\"text-base md:text-lg font-serif text-[#151b20] py-1 overflow-x-auto bg-[#f0fbfd] border border-[#0e7490] rounded-lg my-1\">\n    $$\\Pr(S = 1 \\mid \\mathbf{X} = \\mathbf{x}, A = a) \\neq \\Pr(S = 1)$$\n  </div>\n</div><div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] my-2 text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-1 text-left flex items-center justify-between\">\n    <span>📐 Mathematical Formulation</span>\n    <span class=\"text-[#151b20] text-[9px] font-mono bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Distribution Measure</span>\n  </div>\n  <div class=\"text-base md:text-lg font-serif text-[#151b20] py-1 overflow-x-auto bg-[#f0fbfd] border border-[#0e7490] rounded-lg my-1\">\n    $$w(\\mathbf{x}, a) = \\frac{\\Pr(\\mathbf{X} = \\mathbf{x}, A = a)}{\\Pr(\\mathbf{X} = \\mathbf{x}, A = a \\mid S = 1)}$$\n  </div>\n</div><div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] my-2 text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-1 text-left flex items-center justify-between\">\n    <span>📐 Mathematical Formulation</span>\n    <span class=\"text-[#151b20] text-[9px] font-mono bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Empirical Risk Proxy</span>\n  </div>\n  <div class=\"text-base md:text-lg font-serif text-[#151b20] py-1 overflow-x-auto bg-[#f0fbfd] border border-[#0e7490] rounded-lg my-1\">\n    $$\\hat{\\beta} = \\beta \\cdot \\frac{\\sigma_X^2}{\\sigma_X^2 + \\sigma_\\epsilon^2} < \\beta$$\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">◆</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">Classical Measurement Error</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">Observed proxy $X^ = X + \\epsilon$, with independent zero-mean noise $\\epsilon \\sim \\mathcal{N}(0, \\sigma_\\epsilon^2)$. This causes attenuation bias towards zero in estimated regression slopes:</span>\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">▸</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">Differential Measurement Error</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">Noise variance depends on the protected attribute:</span>\n  </div>\n</div>"
        },
        "duo": {
          "speaker": "Socratic Debate (Dr. Nova & Kaito)",
          "title": "Socratic Debate: Conceptual Overview & Bias Taxonomy: Mathematical Taxonomy of Dataset Biases",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Dr. Nova, how does conceptual overview & bias taxonomy: mathematical taxonomy of dataset biases protect our system against silent distribution shift in production?"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Formalizing the empirical sample mathematically reveals that empirical risk only approximates true generalization risk when the i.i.d. assumption holds. When upstream sampling is biased, the empirical risk diverges asymptotically from true risk—no model tuning can fix that."
            }
          ],
          "contentHtml": "<div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] my-2 text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-1 text-left flex items-center justify-between\">\n    <span>📐 Mathematical Formulation</span>\n    <span class=\"text-[#151b20] text-[9px] font-mono bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Empirical Sample Formulation</span>\n  </div>\n  <div class=\"text-base md:text-lg font-serif text-[#151b20] py-1 overflow-x-auto bg-[#f0fbfd] border border-[#0e7490] rounded-lg my-1\">\n    $$\\Pr(S = 1 \\mid \\mathbf{X} = \\mathbf{x}, A = a) \\neq \\Pr(S = 1)$$\n  </div>\n</div><div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] my-2 text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-1 text-left flex items-center justify-between\">\n    <span>📐 Mathematical Formulation</span>\n    <span class=\"text-[#151b20] text-[9px] font-mono bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Distribution Measure</span>\n  </div>\n  <div class=\"text-base md:text-lg font-serif text-[#151b20] py-1 overflow-x-auto bg-[#f0fbfd] border border-[#0e7490] rounded-lg my-1\">\n    $$w(\\mathbf{x}, a) = \\frac{\\Pr(\\mathbf{X} = \\mathbf{x}, A = a)}{\\Pr(\\mathbf{X} = \\mathbf{x}, A = a \\mid S = 1)}$$\n  </div>\n</div><div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] my-2 text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-1 text-left flex items-center justify-between\">\n    <span>📐 Mathematical Formulation</span>\n    <span class=\"text-[#151b20] text-[9px] font-mono bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Empirical Risk Proxy</span>\n  </div>\n  <div class=\"text-base md:text-lg font-serif text-[#151b20] py-1 overflow-x-auto bg-[#f0fbfd] border border-[#0e7490] rounded-lg my-1\">\n    $$\\hat{\\beta} = \\beta \\cdot \\frac{\\sigma_X^2}{\\sigma_X^2 + \\sigma_\\epsilon^2} < \\beta$$\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">◆</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">Classical Measurement Error</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">Observed proxy $X^ = X + \\epsilon$, with independent zero-mean noise $\\epsilon \\sim \\mathcal{N}(0, \\sigma_\\epsilon^2)$. This causes attenuation bias towards zero in estimated regression slopes:</span>\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">▸</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">Differential Measurement Error</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">Noise variance depends on the protected attribute:</span>\n  </div>\n</div>"
        }
      },
      {
        "id": "s3",
        "title": "Conceptual Overview & Bias Taxonomy: Architecture Flowchart",
        "type": "figure",
        "solo": {
          "speaker": "Dr. Nova (Senior Architect)",
          "title": "Conceptual Overview & Bias Taxonomy: Architecture Flowchart",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Conceptual Overview & Bias Taxonomy: Architecture Flowchart. This architecture diagram visualizes how physical observations transition across sampling boundaries into discrete tensor representations. Tracking each transition stage prevents undocumented transformations from corrupting the empirical distribution."
            }
          ],
          "contentHtml": "<div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[4px_4px_0px_#151b20] my-2 overflow-x-auto text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-2 text-left flex items-center justify-between border-b-2 border-[#151b20]/15 pb-1\">\n    <span class=\"flex items-center gap-1.5\">\n      <span>📊 Architecture &amp; Workflow Diagram</span>\n      <span class=\"text-[#151b20]/40\">•</span>\n      <span class=\"text-[#334155]\">System Flowchart</span>\n    </span>\n    <span class=\"text-[#0e7490] text-[9px] font-mono bg-[#c9f3f4] px-1.5 py-0.5 rounded border border-[#151b20]\">Mermaid SVG</span>\n  </div>\n  <pre class=\"mermaid py-1 flex justify-center text-xs overflow-x-auto leading-normal\">flowchart TD\n    World[\"Societal Phenomenon in Real World\"] -->|Historical Bias| GenData[\"Raw Generated Reality\"]\n    GenData -->|Selection & Sampling Bias| SampledData[\"Collected Dataset D\"]\n    SampledData -->|Measurement & Label Bias| LabeledData[\"Annotated Ground Truth D_annot\"]\n    LabeledData -->|Aggregation Bias| ModelEst[\"Trained Model f(x)\"]\n    ModelEst -->|Evaluation Bias| Benchmark[\"Test Evaluation Benchmark\"]\n    Benchmark -->|Deployment Bias| ProdSystem[\"Production Operational System\"]\n\n    classDef blue fill:#c9f3f4,stroke:#151b20,stroke-width:2px,color:#151b20;\n    classDef amber fill:#fff0b9,stroke:#151b20,stroke-width:2px,color:#151b20;\n    classDef red fill:#ffd8ce,stroke:#151b20,stroke-width:2px,color:#151b20;\n\n    class World,GenData blue;\n    class SampledData,LabeledData amber;\n    class ModelEst,Benchmark,ProdSystem red;</pre>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">◆</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">Classical Measurement Error</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">Observed proxy $X^ = X + \\epsilon$, with independent zero-mean noise $\\epsilon \\sim \\mathcal{N}(0, \\sigma_\\epsilon^2)$. This causes attenuation bias towards zero in estimated regression slopes:</span>\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">▸</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">Differential Measurement Error</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">Noise variance depends on the protected attribute:</span>\n  </div>\n</div>"
        },
        "duo": {
          "speaker": "Socratic Debate (Dr. Nova & Kaito)",
          "title": "Socratic Debate: Conceptual Overview & Bias Taxonomy: Architecture Flowchart",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Dr. Nova, looking at this workflow diagram for conceptual overview & bias taxonomy: architecture flowchart, how does the architectural flow enforce system stability?"
            },
            {
              "speaker": "Dr. Nova",
              "text": "This architecture diagram visualizes how physical observations transition across sampling boundaries into discrete tensor representations. Tracking each transition stage prevents undocumented transformations from corrupting the empirical distribution."
            }
          ],
          "contentHtml": "<div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[4px_4px_0px_#151b20] my-2 overflow-x-auto text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-2 text-left flex items-center justify-between border-b-2 border-[#151b20]/15 pb-1\">\n    <span class=\"flex items-center gap-1.5\">\n      <span>📊 Architecture &amp; Workflow Diagram</span>\n      <span class=\"text-[#151b20]/40\">•</span>\n      <span class=\"text-[#334155]\">System Flowchart</span>\n    </span>\n    <span class=\"text-[#0e7490] text-[9px] font-mono bg-[#c9f3f4] px-1.5 py-0.5 rounded border border-[#151b20]\">Mermaid SVG</span>\n  </div>\n  <pre class=\"mermaid py-1 flex justify-center text-xs overflow-x-auto leading-normal\">flowchart TD\n    World[\"Societal Phenomenon in Real World\"] -->|Historical Bias| GenData[\"Raw Generated Reality\"]\n    GenData -->|Selection & Sampling Bias| SampledData[\"Collected Dataset D\"]\n    SampledData -->|Measurement & Label Bias| LabeledData[\"Annotated Ground Truth D_annot\"]\n    LabeledData -->|Aggregation Bias| ModelEst[\"Trained Model f(x)\"]\n    ModelEst -->|Evaluation Bias| Benchmark[\"Test Evaluation Benchmark\"]\n    Benchmark -->|Deployment Bias| ProdSystem[\"Production Operational System\"]\n\n    classDef blue fill:#c9f3f4,stroke:#151b20,stroke-width:2px,color:#151b20;\n    classDef amber fill:#fff0b9,stroke:#151b20,stroke-width:2px,color:#151b20;\n    classDef red fill:#ffd8ce,stroke:#151b20,stroke-width:2px,color:#151b20;\n\n    class World,GenData blue;\n    class SampledData,LabeledData amber;\n    class ModelEst,Benchmark,ProdSystem red;</pre>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">◆</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">Classical Measurement Error</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">Observed proxy $X^ = X + \\epsilon$, with independent zero-mean noise $\\epsilon \\sim \\mathcal{N}(0, \\sigma_\\epsilon^2)$. This causes attenuation bias towards zero in estimated regression slopes:</span>\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">▸</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">Differential Measurement Error</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">Noise variance depends on the protected attribute:</span>\n  </div>\n</div>"
        }
      },
      {
        "id": "s4",
        "title": "Bias Manifestation Across the Data Lifecycle",
        "type": "figure",
        "solo": {
          "speaker": "Dr. Nova (Senior Architect)",
          "title": "Bias Manifestation Across the Data Lifecycle",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Bias Manifestation Across the Data Lifecycle. This architecture diagram visualizes how physical observations transition across sampling boundaries into discrete tensor representations. Tracking each transition stage prevents undocumented transformations from corrupting the empirical distribution."
            }
          ],
          "contentHtml": "<div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[4px_4px_0px_#151b20] my-2 overflow-x-auto text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-2 text-left flex items-center justify-between border-b-2 border-[#151b20]/15 pb-1\">\n    <span class=\"flex items-center gap-1.5\">\n      <span>📊 Architecture &amp; Workflow Diagram</span>\n      <span class=\"text-[#151b20]/40\">•</span>\n      <span class=\"text-[#334155]\">System Flowchart</span>\n    </span>\n    <span class=\"text-[#0e7490] text-[9px] font-mono bg-[#c9f3f4] px-1.5 py-0.5 rounded border border-[#151b20]\">Mermaid SVG</span>\n  </div>\n  <pre class=\"mermaid py-1 flex justify-center text-xs overflow-x-auto leading-normal\">flowchart LR\n    subgraph DataGen [\"Data Generation\"]\n    direction TB\n        D1[\"Historical Discrimination\"]\n        D2[\"Under-Reporting Disparities\"]\n    end\n    subgraph Collection [\"Collection & Measurement\"]\n    direction TB\n        C1[\"Sensor Inaccuracy on Subgroups\"]\n        C2[\"Convenience Sampling\"]\n    end\n    subgraph Annotation [\"Annotation & Modeling\"]\n    direction TB\n        A1[\"Subjective Labeling Bias\"]\n        A2[\"Aggregation Disregard\"]\n    end\n\n  %% Top-alignment constraint across stages\n  D1 ~~~ C1 ~~~ A1\n\n    DataGen --> Collection --> Annotation\n\n    classDef blue fill:#c9f3f4,stroke:#151b20,stroke-width:2px,color:#151b20;\n    classDef amber fill:#fff0b9,stroke:#151b20,stroke-width:2px,color:#151b20;\n    classDef green fill:#e7f4c8,stroke:#151b20,stroke-width:2px,color:#151b20;\n\n    class D1,D2 blue;\n    class C1,C2 amber;\n    class A1,A2 green;</pre>\n</div><div class=\"p-3 rounded-xl bg-[#f6fcf4] border-2 border-[#151b20] shadow-[3px_3px_0px_#15803d] text-xs my-2 leading-relaxed font-sans text-[#151b20]\">\n  <strong class=\"block mb-0.5 font-black uppercase tracking-wider font-mono text-[10px] text-[#15803d]\">💡 Industrial Best Practice</strong>\n  <span class=\"font-medium\">Accompany every enterprise dataset with a standardized Datasheet for Datasets. Document explicit answers to: Why was the dataset created? Who funded collection? What sampling mechanisms were used? Are protected demographic slices representative? (Geb</span>\n</div>"
        },
        "duo": {
          "speaker": "Socratic Debate (Dr. Nova & Kaito)",
          "title": "Socratic Debate: Bias Manifestation Across the Data Lifecycle",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Dr. Nova, looking at this workflow diagram for bias manifestation across the data lifecycle, how does the architectural flow enforce system stability?"
            },
            {
              "speaker": "Dr. Nova",
              "text": "This architecture diagram visualizes how physical observations transition across sampling boundaries into discrete tensor representations. Tracking each transition stage prevents undocumented transformations from corrupting the empirical distribution."
            }
          ],
          "contentHtml": "<div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[4px_4px_0px_#151b20] my-2 overflow-x-auto text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-2 text-left flex items-center justify-between border-b-2 border-[#151b20]/15 pb-1\">\n    <span class=\"flex items-center gap-1.5\">\n      <span>📊 Architecture &amp; Workflow Diagram</span>\n      <span class=\"text-[#151b20]/40\">•</span>\n      <span class=\"text-[#334155]\">System Flowchart</span>\n    </span>\n    <span class=\"text-[#0e7490] text-[9px] font-mono bg-[#c9f3f4] px-1.5 py-0.5 rounded border border-[#151b20]\">Mermaid SVG</span>\n  </div>\n  <pre class=\"mermaid py-1 flex justify-center text-xs overflow-x-auto leading-normal\">flowchart LR\n    subgraph DataGen [\"Data Generation\"]\n    direction TB\n        D1[\"Historical Discrimination\"]\n        D2[\"Under-Reporting Disparities\"]\n    end\n    subgraph Collection [\"Collection & Measurement\"]\n    direction TB\n        C1[\"Sensor Inaccuracy on Subgroups\"]\n        C2[\"Convenience Sampling\"]\n    end\n    subgraph Annotation [\"Annotation & Modeling\"]\n    direction TB\n        A1[\"Subjective Labeling Bias\"]\n        A2[\"Aggregation Disregard\"]\n    end\n\n  %% Top-alignment constraint across stages\n  D1 ~~~ C1 ~~~ A1\n\n    DataGen --> Collection --> Annotation\n\n    classDef blue fill:#c9f3f4,stroke:#151b20,stroke-width:2px,color:#151b20;\n    classDef amber fill:#fff0b9,stroke:#151b20,stroke-width:2px,color:#151b20;\n    classDef green fill:#e7f4c8,stroke:#151b20,stroke-width:2px,color:#151b20;\n\n    class D1,D2 blue;\n    class C1,C2 amber;\n    class A1,A2 green;</pre>\n</div><div class=\"p-3 rounded-xl bg-[#f6fcf4] border-2 border-[#151b20] shadow-[3px_3px_0px_#15803d] text-xs my-2 leading-relaxed font-sans text-[#151b20]\">\n  <strong class=\"block mb-0.5 font-black uppercase tracking-wider font-mono text-[10px] text-[#15803d]\">💡 Industrial Best Practice</strong>\n  <span class=\"font-medium\">Accompany every enterprise dataset with a standardized Datasheet for Datasets. Document explicit answers to: Why was the dataset created? Who funded collection? What sampling mechanisms were used? Are protected demographic slices representative? (Geb</span>\n</div>"
        }
      },
      {
        "id": "s5",
        "title": "Interactive Lab: Production Implementation: Sampling & Measurement Bias Simulator",
        "type": "tool",
        "solo": {
          "speaker": "Dr. Nova (Senior Architect)",
          "title": "Interactive Lab: Production Implementation: Sampling & Measurement Bias Simulator",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Interactive Lab: Production Implementation: Sampling & Measurement Bias Simulator. Scroll directly beneath this presentation player to the live laboratory. Run the failure injection to observe how unvalidated anomalies trigger compounding cascades across downstream tensors. Hands-on testing proves why boundary schema contracts are mandatory."
            }
          ],
          "contentHtml": "<div class=\"p-4 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[4px_4px_0px_#22bfd7] my-2\">\n  <div class=\"flex items-center justify-between border-b-2 border-[#151b20]/15 pb-2 mb-2.5 flex-wrap gap-2\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"px-2.5 py-1 rounded-lg bg-[#c9f3f4] text-[#0e7490] font-mono font-black text-xs border border-[#151b20] shadow-[1px_1px_0px_#151b20] uppercase tracking-wider\">🔬 Interactive Lab</span>\n      <span class=\"text-xs font-mono font-black text-[#151b20]\">Production Implementation: Sampling &amp; Measurement Bias Simulator</span>\n    </div>\n    <span class=\"text-[10px] font-mono text-[#0e7490] bg-[#fffaf0] px-2 py-0.5 rounded border border-[#151b20]\">Located Below on Page ↓</span>\n  </div>\n  <p class=\"text-xs text-[#334155] mb-3 leading-relaxed font-medium\">Below is an executable script simulating sampling selection bias, classical vs.</p>\n  <div class=\"bg-[#f6f0dc] p-3 rounded-xl border-2 border-[#151b20] space-y-2 text-xs\">\n    <span class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider block border-b border-[#151b20]/20 pb-1\">⚡ Recommended Hands-On Experiment:</span>\n    <div class=\"flex items-start gap-2 text-[#334155]\">\n  <span class=\"text-[#0e7490] font-bold font-mono text-xs\">1.</span>\n  <span class=\"text-xs leading-relaxed\">Scroll down to the interactive workbench section below the slide player to access the live laboratory.</span>\n</div><div class=\"flex items-start gap-2 text-[#334155]\">\n  <span class=\"text-[#0e7490] font-bold font-mono text-xs\">2.</span>\n  <span class=\"text-xs leading-relaxed\">Click &#x27;Configure parameters&#x27; to examine baseline state, then trigger &#x27;Inject anomaly / Run test&#x27; to simulate failure modes.</span>\n</div><div class=\"flex items-start gap-2 text-[#334155]\">\n  <span class=\"text-[#0e7490] font-bold font-mono text-xs\">3.</span>\n  <span class=\"text-xs leading-relaxed\">Audit telemetry metrics and observe how defensive schema contracts guard downstream models.</span>\n</div>\n  </div>\n</div>"
        },
        "duo": {
          "speaker": "Socratic Debate (Dr. Nova & Kaito)",
          "title": "Socratic Debate: Interactive Lab: Production Implementation: Sampling & Measurement Bias Simulator",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Dr. Nova, what specific failure mode should I look for when I use the production implementation: sampling & measurement bias simulator located below this player?"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Scroll directly beneath this presentation player to the live laboratory. Run the failure injection to observe how unvalidated anomalies trigger compounding cascades across downstream tensors. Hands-on testing proves why boundary schema contracts are mandatory."
            }
          ],
          "contentHtml": "<div class=\"p-4 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[4px_4px_0px_#22bfd7] my-2\">\n  <div class=\"flex items-center justify-between border-b-2 border-[#151b20]/15 pb-2 mb-2.5 flex-wrap gap-2\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"px-2.5 py-1 rounded-lg bg-[#c9f3f4] text-[#0e7490] font-mono font-black text-xs border border-[#151b20] shadow-[1px_1px_0px_#151b20] uppercase tracking-wider\">🔬 Interactive Lab</span>\n      <span class=\"text-xs font-mono font-black text-[#151b20]\">Production Implementation: Sampling &amp; Measurement Bias Simulator</span>\n    </div>\n    <span class=\"text-[10px] font-mono text-[#0e7490] bg-[#fffaf0] px-2 py-0.5 rounded border border-[#151b20]\">Located Below on Page ↓</span>\n  </div>\n  <p class=\"text-xs text-[#334155] mb-3 leading-relaxed font-medium\">Below is an executable script simulating sampling selection bias, classical vs.</p>\n  <div class=\"bg-[#f6f0dc] p-3 rounded-xl border-2 border-[#151b20] space-y-2 text-xs\">\n    <span class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider block border-b border-[#151b20]/20 pb-1\">⚡ Recommended Hands-On Experiment:</span>\n    <div class=\"flex items-start gap-2 text-[#334155]\">\n  <span class=\"text-[#0e7490] font-bold font-mono text-xs\">1.</span>\n  <span class=\"text-xs leading-relaxed\">Scroll down to the interactive workbench section below the slide player to access the live laboratory.</span>\n</div><div class=\"flex items-start gap-2 text-[#334155]\">\n  <span class=\"text-[#0e7490] font-bold font-mono text-xs\">2.</span>\n  <span class=\"text-xs leading-relaxed\">Click &#x27;Configure parameters&#x27; to examine baseline state, then trigger &#x27;Inject anomaly / Run test&#x27; to simulate failure modes.</span>\n</div><div class=\"flex items-start gap-2 text-[#334155]\">\n  <span class=\"text-[#0e7490] font-bold font-mono text-xs\">3.</span>\n  <span class=\"text-xs leading-relaxed\">Audit telemetry metrics and observe how defensive schema contracts guard downstream models.</span>\n</div>\n  </div>\n</div>"
        }
      },
      {
        "id": "s6",
        "title": "Empirical Case Study: Pulse Oximeters & Computer Vision Benchmarks",
        "type": "bullets",
        "solo": {
          "speaker": "Dr. Nova (Senior Architect)",
          "title": "Empirical Case Study: Pulse Oximeters & Computer Vision Benchmarks",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Empirical Case Study: Pulse Oximeters & Computer Vision Benchmarks. Systems collapse when models mistake collection artifacts for real-world signals. In ICU sepsis models, observation frequency became a confounder; in autonomous robotics, a 50-millisecond timestamp jitter causes a 1.4-meter bounding box dislocation at highway speeds."
            }
          ],
          "contentHtml": "<div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">◆</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">Pulse Oximeter Hypoxemia Disparity in COVID-19</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">During the COVID-19 pandemic, clinical studies demonstrated that pulse oximeters exhibited substantial differential measurement error on patients with darker skin pigmentation. The devices were calibrated predominantly on light-skinned European subjects. On Black patients, light absorption through melanin caused the oximeter to overestimate arterial blood oxygen saturation, hiding occult hypoxemia ($SaO_2 < 88\\%$) at nearly triple the rate observed in White patients. Delayed oxygen administration caused significant preventable mortality (Obermeyer, 2019).</span>\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">▸</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">ImageNet Geographic Sampling Skew</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">An academic audit of the canonical ImageNet and Open Images benchmarks revealed that over $60\\%$ of all images originated from the United States and Great Britain, while countries representing half the world&#x27;s population (India, China, entire African continent) comprised less than $3\\%$ of training samples. Vision models recognized US wedding dresses with $98\\%$ accuracy, but failed completely on traditional Nigerian or Indian bridal attire, classifying them as &quot;costumes&quot; or &quot;theatrical performers.&quot;</span>\n  </div>\n</div>"
        },
        "duo": {
          "speaker": "Socratic Debate (Dr. Nova & Kaito)",
          "title": "Socratic Debate: Empirical Case Study: Pulse Oximeters & Computer Vision Benchmarks",
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
          "contentHtml": "<div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">◆</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">Pulse Oximeter Hypoxemia Disparity in COVID-19</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">During the COVID-19 pandemic, clinical studies demonstrated that pulse oximeters exhibited substantial differential measurement error on patients with darker skin pigmentation. The devices were calibrated predominantly on light-skinned European subjects. On Black patients, light absorption through melanin caused the oximeter to overestimate arterial blood oxygen saturation, hiding occult hypoxemia ($SaO_2 < 88\\%$) at nearly triple the rate observed in White patients. Delayed oxygen administration caused significant preventable mortality (Obermeyer, 2019).</span>\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">▸</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">ImageNet Geographic Sampling Skew</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">An academic audit of the canonical ImageNet and Open Images benchmarks revealed that over $60\\%$ of all images originated from the United States and Great Britain, while countries representing half the world&#x27;s population (India, China, entire African continent) comprised less than $3\\%$ of training samples. Vision models recognized US wedding dresses with $98\\%$ accuracy, but failed completely on traditional Nigerian or Indian bridal attire, classifying them as &quot;costumes&quot; or &quot;theatrical performers.&quot;</span>\n  </div>\n</div>"
        }
      },
      {
        "id": "s7",
        "title": "Interactive Lab: Explore Dataset Bias Taxonomy Simulator",
        "type": "tool",
        "solo": {
          "speaker": "Dr. Nova (Senior Architect)",
          "title": "Interactive Lab: Explore Dataset Bias Taxonomy Simulator",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Interactive Lab: Explore Dataset Bias Taxonomy Simulator. Scroll directly beneath this presentation player to the live laboratory. Run the failure injection to observe how unvalidated anomalies trigger compounding cascades across downstream tensors. Hands-on testing proves why boundary schema contracts are mandatory."
            }
          ],
          "contentHtml": "<div class=\"p-4 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[4px_4px_0px_#22bfd7] my-2\">\n  <div class=\"flex items-center justify-between border-b-2 border-[#151b20]/15 pb-2 mb-2.5 flex-wrap gap-2\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"px-2.5 py-1 rounded-lg bg-[#c9f3f4] text-[#0e7490] font-mono font-black text-xs border border-[#151b20] shadow-[1px_1px_0px_#151b20] uppercase tracking-wider\">🔬 Interactive Lab</span>\n      <span class=\"text-xs font-mono font-black text-[#151b20]\">Explore Dataset Bias Taxonomy Simulator</span>\n    </div>\n    <span class=\"text-[10px] font-mono text-[#0e7490] bg-[#fffaf0] px-2 py-0.5 rounded border border-[#151b20]\">Located Below on Page ↓</span>\n  </div>\n  <p class=\"text-xs text-[#334155] mb-3 leading-relaxed font-medium\">Simulate convenience sampling distortions, observe measurement error attenuation collapse, and audit intersectional representation disparities.</p>\n  <div class=\"bg-[#f6f0dc] p-3 rounded-xl border-2 border-[#151b20] space-y-2 text-xs\">\n    <span class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider block border-b border-[#151b20]/20 pb-1\">⚡ Recommended Hands-On Experiment:</span>\n    <div class=\"flex items-start gap-2 text-[#334155]\">\n  <span class=\"text-[#0e7490] font-bold font-mono text-xs\">1.</span>\n  <span class=\"text-xs leading-relaxed\">Scroll down to the interactive workbench section below the slide player to access the live laboratory.</span>\n</div><div class=\"flex items-start gap-2 text-[#334155]\">\n  <span class=\"text-[#0e7490] font-bold font-mono text-xs\">2.</span>\n  <span class=\"text-xs leading-relaxed\">Click &#x27;Launch Representation Workbench →&#x27; to examine baseline state, then trigger &#x27;Inject anomaly / Run test&#x27; to simulate failure modes.</span>\n</div><div class=\"flex items-start gap-2 text-[#334155]\">\n  <span class=\"text-[#0e7490] font-bold font-mono text-xs\">3.</span>\n  <span class=\"text-xs leading-relaxed\">Audit telemetry metrics and observe how defensive schema contracts guard downstream models.</span>\n</div>\n  </div>\n</div>"
        },
        "duo": {
          "speaker": "Socratic Debate (Dr. Nova & Kaito)",
          "title": "Socratic Debate: Interactive Lab: Explore Dataset Bias Taxonomy Simulator",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Dr. Nova, what specific failure mode should I look for when I use the explore dataset bias taxonomy simulator located below this player?"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Scroll directly beneath this presentation player to the live laboratory. Run the failure injection to observe how unvalidated anomalies trigger compounding cascades across downstream tensors. Hands-on testing proves why boundary schema contracts are mandatory."
            }
          ],
          "contentHtml": "<div class=\"p-4 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[4px_4px_0px_#22bfd7] my-2\">\n  <div class=\"flex items-center justify-between border-b-2 border-[#151b20]/15 pb-2 mb-2.5 flex-wrap gap-2\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"px-2.5 py-1 rounded-lg bg-[#c9f3f4] text-[#0e7490] font-mono font-black text-xs border border-[#151b20] shadow-[1px_1px_0px_#151b20] uppercase tracking-wider\">🔬 Interactive Lab</span>\n      <span class=\"text-xs font-mono font-black text-[#151b20]\">Explore Dataset Bias Taxonomy Simulator</span>\n    </div>\n    <span class=\"text-[10px] font-mono text-[#0e7490] bg-[#fffaf0] px-2 py-0.5 rounded border border-[#151b20]\">Located Below on Page ↓</span>\n  </div>\n  <p class=\"text-xs text-[#334155] mb-3 leading-relaxed font-medium\">Simulate convenience sampling distortions, observe measurement error attenuation collapse, and audit intersectional representation disparities.</p>\n  <div class=\"bg-[#f6f0dc] p-3 rounded-xl border-2 border-[#151b20] space-y-2 text-xs\">\n    <span class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider block border-b border-[#151b20]/20 pb-1\">⚡ Recommended Hands-On Experiment:</span>\n    <div class=\"flex items-start gap-2 text-[#334155]\">\n  <span class=\"text-[#0e7490] font-bold font-mono text-xs\">1.</span>\n  <span class=\"text-xs leading-relaxed\">Scroll down to the interactive workbench section below the slide player to access the live laboratory.</span>\n</div><div class=\"flex items-start gap-2 text-[#334155]\">\n  <span class=\"text-[#0e7490] font-bold font-mono text-xs\">2.</span>\n  <span class=\"text-xs leading-relaxed\">Click &#x27;Launch Representation Workbench →&#x27; to examine baseline state, then trigger &#x27;Inject anomaly / Run test&#x27; to simulate failure modes.</span>\n</div><div class=\"flex items-start gap-2 text-[#334155]\">\n  <span class=\"text-[#0e7490] font-bold font-mono text-xs\">3.</span>\n  <span class=\"text-xs leading-relaxed\">Audit telemetry metrics and observe how defensive schema contracts guard downstream models.</span>\n</div>\n  </div>\n</div>"
        }
      }
    ]
  },
  "ch7_p3": {
    "chapter": 7,
    "part": 3,
    "key": "ch7_p3",
    "badge": "◆ TRACK 7 • LESSON 7.3: DETECTING AND AUDITING BIAS STATISTICALLY",
    "index": "Lesson 3 of 10",
    "lessonTitle": "Detecting and Auditing Bias Statistically",
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
              "text": "Welcome to Lesson 7.3. Today we examine detecting and auditing bias statistically, establishing the mathematical foundations and production discipline required to guarantee dataset reliability."
            }
          ],
          "contentHtml": "<div class=\"p-6 md:p-8 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#22bfd7] text-center space-y-4\">\n  <div class=\"inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#c9f3f4] text-[#0e7490] font-mono text-xs border-2 border-[#151b20] font-black uppercase tracking-wider shadow-[2px_2px_0px_#151b20]\">\n    <span>◆ Track 7: Foundations</span>\n    <span>•</span>\n    <span>Lesson 7.3</span>\n  </div>\n  <h2 class=\"text-2xl md:text-3xl font-black text-[#151b20] tracking-tight\">\n    Detecting and Auditing Bias Statistically\n  </h2>\n  <p class=\"text-sm md:text-base text-[#334155] max-w-2xl mx-auto leading-relaxed font-medium\">\n    Deep dive into detecting and auditing bias statistically with formal mathematical formulations, production engineering, and failure-mode analysis.\n  </p>\n  <div class=\"pt-2 flex flex-wrap items-center justify-center gap-2 font-mono text-xs\">\n    <span class=\"px-2.5 py-1 rounded-lg bg-[#fff0b9] border border-[#151b20] font-bold text-[#151b20]\">📐 Formal Foundations</span>\n    <span class=\"px-2.5 py-1 rounded-lg bg-[#ffd8ce] border border-[#151b20] font-bold text-[#151b20]\">⚠️ Failure Modes</span>\n    <span class=\"px-2.5 py-1 rounded-lg bg-[#c9f3f4] border border-[#151b20] font-bold text-[#151b20]\">🛡️ Production Contracts</span>\n  </div>\n</div>"
        },
        "duo": {
          "speaker": "Socratic Debate (Dr. Nova & Kaito)",
          "title": "Socratic Debate: Detecting and Auditing Bias Statistically",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Dr. Nova, what is the core architectural challenge we are solving in Lesson 7.3?"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Welcome to Lesson 7.3. Today we examine detecting and auditing bias statistically, establishing the mathematical foundations and production discipline required to guarantee dataset reliability."
            }
          ],
          "contentHtml": "<div class=\"p-6 md:p-8 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#22bfd7] text-center space-y-4\">\n  <div class=\"inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#c9f3f4] text-[#0e7490] font-mono text-xs border-2 border-[#151b20] font-black uppercase tracking-wider shadow-[2px_2px_0px_#151b20]\">\n    <span>◆ Track 7: Foundations</span>\n    <span>•</span>\n    <span>Lesson 7.3</span>\n  </div>\n  <h2 class=\"text-2xl md:text-3xl font-black text-[#151b20] tracking-tight\">\n    Detecting and Auditing Bias Statistically\n  </h2>\n  <p class=\"text-sm md:text-base text-[#334155] max-w-2xl mx-auto leading-relaxed font-medium\">\n    Deep dive into detecting and auditing bias statistically with formal mathematical formulations, production engineering, and failure-mode analysis.\n  </p>\n  <div class=\"pt-2 flex flex-wrap items-center justify-center gap-2 font-mono text-xs\">\n    <span class=\"px-2.5 py-1 rounded-lg bg-[#fff0b9] border border-[#151b20] font-bold text-[#151b20]\">📐 Formal Foundations</span>\n    <span class=\"px-2.5 py-1 rounded-lg bg-[#ffd8ce] border border-[#151b20] font-bold text-[#151b20]\">⚠️ Failure Modes</span>\n    <span class=\"px-2.5 py-1 rounded-lg bg-[#c9f3f4] border border-[#151b20] font-bold text-[#151b20]\">🛡️ Production Contracts</span>\n  </div>\n</div>"
        }
      },
      {
        "id": "s2",
        "title": "Conceptual Overview & Statistical Formulations: Mathematical Formulations of Fairness Distance Metrics",
        "type": "equation",
        "solo": {
          "speaker": "Dr. Nova (Senior Architect)",
          "title": "Conceptual Overview & Statistical Formulations: Mathematical Formulations of Fairness Distance Metrics",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Conceptual Overview & Statistical Formulations: Mathematical Formulations of Fairness Distance Metrics. Formalizing the empirical sample mathematically reveals that empirical risk only approximates true generalization risk when the i.i.d. assumption holds. When upstream sampling is biased, the empirical risk diverges asymptotically from true risk—no model tuning can fix that."
            }
          ],
          "contentHtml": "<div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] my-2 text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-1 text-left flex items-center justify-between\">\n    <span>📐 Mathematical Formulation</span>\n    <span class=\"text-[#151b20] text-[9px] font-mono bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Empirical Sample Formulation</span>\n  </div>\n  <div class=\"text-base md:text-lg font-serif text-[#151b20] py-1 overflow-x-auto bg-[#f0fbfd] border border-[#0e7490] rounded-lg my-1\">\n    $$\\text{DIR} = \\frac{\\Pr(\\hat{Y} = 1 \\mid A = 0)}{\\Pr(\\hat{Y} = 1 \\mid A = 1)}$$\n  </div>\n</div><div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] my-2 text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-1 text-left flex items-center justify-between\">\n    <span>📐 Mathematical Formulation</span>\n    <span class=\"text-[#151b20] text-[9px] font-mono bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Distribution Measure</span>\n  </div>\n  <div class=\"text-base md:text-lg font-serif text-[#151b20] py-1 overflow-x-auto bg-[#f0fbfd] border border-[#0e7490] rounded-lg my-1\">\n    $$D_{\\text{KS}} = \\sup_{s \\in \\mathbb{R}} |F_0(s) - F_1(s)|$$\n  </div>\n</div><div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] my-2 text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-1 text-left flex items-center justify-between\">\n    <span>📐 Mathematical Formulation</span>\n    <span class=\"text-[#151b20] text-[9px] font-mono bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Empirical Risk Proxy</span>\n  </div>\n  <div class=\"text-base md:text-lg font-serif text-[#151b20] py-1 overflow-x-auto bg-[#f0fbfd] border border-[#0e7490] rounded-lg my-1\">\n    $$\\sqrt{\\frac{n_0 n_1}{n_0 + n_1}} D_{\\text{KS}} \\xrightarrow{d} \\text{Kolmogorov Distribution}$$\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">◆</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">Auditing tabular datasets</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">and model outputs for systematic bias requires quantitative statistical testing across demographic slices.</span>\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">▸</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">Rather than relying</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">on intuition, modern fairness engineering employs individual fairness Lipschitz smoothness (Dwork, 2012), error rate parity tradeoffs (Chouldechova, 2017), distribution divergence bounds ([Feldman2015), (Hardt, 2016)], and standardized testing engines like Fairlearn (Weerts, 2023) and AIF360 (Bellamy, 2019).</span>\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">⚡</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">Quantifies the maximal</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">supremum divergence between the empirical cumulative distributions of continuous scores $F_0(s)$ and $F_1(s)$: Under the null hypothesis of identical distributions ($H_0: F_0 = F_1$), the statistic asymptotically satisfies: A statistically significant $p < 0.01$ rejects score parity.</span>\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">💡</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">Measures the minimum</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">work required to transport probability distribution $P_0$ into $P_1$: Unlike KS (which measures only the single largest vertical gap), Wasserstein-1 integrates all horizontal quantile disparities, providing a continuous metric of score injustice (Feldman, 2015).</span>\n  </div>\n</div>"
        },
        "duo": {
          "speaker": "Socratic Debate (Dr. Nova & Kaito)",
          "title": "Socratic Debate: Conceptual Overview & Statistical Formulations: Mathematical Formulations of Fairness Distance Metrics",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Dr. Nova, how does conceptual overview & statistical formulations: mathematical formulations of fairness distance metrics protect our system against silent distribution shift in production?"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Formalizing the empirical sample mathematically reveals that empirical risk only approximates true generalization risk when the i.i.d. assumption holds. When upstream sampling is biased, the empirical risk diverges asymptotically from true risk—no model tuning can fix that."
            }
          ],
          "contentHtml": "<div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] my-2 text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-1 text-left flex items-center justify-between\">\n    <span>📐 Mathematical Formulation</span>\n    <span class=\"text-[#151b20] text-[9px] font-mono bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Empirical Sample Formulation</span>\n  </div>\n  <div class=\"text-base md:text-lg font-serif text-[#151b20] py-1 overflow-x-auto bg-[#f0fbfd] border border-[#0e7490] rounded-lg my-1\">\n    $$\\text{DIR} = \\frac{\\Pr(\\hat{Y} = 1 \\mid A = 0)}{\\Pr(\\hat{Y} = 1 \\mid A = 1)}$$\n  </div>\n</div><div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] my-2 text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-1 text-left flex items-center justify-between\">\n    <span>📐 Mathematical Formulation</span>\n    <span class=\"text-[#151b20] text-[9px] font-mono bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Distribution Measure</span>\n  </div>\n  <div class=\"text-base md:text-lg font-serif text-[#151b20] py-1 overflow-x-auto bg-[#f0fbfd] border border-[#0e7490] rounded-lg my-1\">\n    $$D_{\\text{KS}} = \\sup_{s \\in \\mathbb{R}} |F_0(s) - F_1(s)|$$\n  </div>\n</div><div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] my-2 text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-1 text-left flex items-center justify-between\">\n    <span>📐 Mathematical Formulation</span>\n    <span class=\"text-[#151b20] text-[9px] font-mono bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Empirical Risk Proxy</span>\n  </div>\n  <div class=\"text-base md:text-lg font-serif text-[#151b20] py-1 overflow-x-auto bg-[#f0fbfd] border border-[#0e7490] rounded-lg my-1\">\n    $$\\sqrt{\\frac{n_0 n_1}{n_0 + n_1}} D_{\\text{KS}} \\xrightarrow{d} \\text{Kolmogorov Distribution}$$\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">◆</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">Auditing tabular datasets</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">and model outputs for systematic bias requires quantitative statistical testing across demographic slices.</span>\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">▸</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">Rather than relying</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">on intuition, modern fairness engineering employs individual fairness Lipschitz smoothness (Dwork, 2012), error rate parity tradeoffs (Chouldechova, 2017), distribution divergence bounds ([Feldman2015), (Hardt, 2016)], and standardized testing engines like Fairlearn (Weerts, 2023) and AIF360 (Bellamy, 2019).</span>\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">⚡</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">Quantifies the maximal</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">supremum divergence between the empirical cumulative distributions of continuous scores $F_0(s)$ and $F_1(s)$: Under the null hypothesis of identical distributions ($H_0: F_0 = F_1$), the statistic asymptotically satisfies: A statistically significant $p < 0.01$ rejects score parity.</span>\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">💡</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">Measures the minimum</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">work required to transport probability distribution $P_0$ into $P_1$: Unlike KS (which measures only the single largest vertical gap), Wasserstein-1 integrates all horizontal quantile disparities, providing a continuous metric of score injustice (Feldman, 2015).</span>\n  </div>\n</div>"
        }
      },
      {
        "id": "s3",
        "title": "Conceptual Overview & Statistical Formulations: Architecture Flowchart",
        "type": "figure",
        "solo": {
          "speaker": "Dr. Nova (Senior Architect)",
          "title": "Conceptual Overview & Statistical Formulations: Architecture Flowchart",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Conceptual Overview & Statistical Formulations: Architecture Flowchart. This architecture diagram visualizes how physical observations transition across sampling boundaries into discrete tensor representations. Tracking each transition stage prevents undocumented transformations from corrupting the empirical distribution."
            }
          ],
          "contentHtml": "<div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[4px_4px_0px_#151b20] my-2 overflow-x-auto text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-2 text-left flex items-center justify-between border-b-2 border-[#151b20]/15 pb-1\">\n    <span class=\"flex items-center gap-1.5\">\n      <span>📊 Architecture &amp; Workflow Diagram</span>\n      <span class=\"text-[#151b20]/40\">•</span>\n      <span class=\"text-[#334155]\">System Flowchart</span>\n    </span>\n    <span class=\"text-[#0e7490] text-[9px] font-mono bg-[#c9f3f4] px-1.5 py-0.5 rounded border border-[#151b20]\">Mermaid SVG</span>\n  </div>\n  <pre class=\"mermaid py-1 flex justify-center text-xs overflow-x-auto leading-normal\">flowchart LR\n    subgraph Slicing [\"Demographic Slicing Engine\"]\n        direction TB\n        S1[\"Extract Protected Attribute Slices A in {0, 1}\"]\n        S2[\"Intersectional Feature Slicing A x G x R\"]\n        S1 --> S2\n    end\n\n    subgraph Tests [\"Formal Statistical Disparity Tests\"]\n        direction TB\n        T1[\"Disparate Impact Ratio DIR (Four-Fifths Rule)\"]\n        T2[\"Two-Sample Kolmogorov-Smirnov D_KS\"]\n        T3[\"Wasserstein-1 Optimal Transport Distance W_1\"]\n        T4[\"Permutation Resampling Test on Mean Differences\"]\n        T1 --> T2 --> T3 --> T4\n    end\n\n  %% Top-alignment constraint across stages\n  S1 ~~~ T1\n\n    Slicing --> Tests\n\n    classDef blue fill:#c9f3f4,stroke:#151b20,stroke-width:2px,color:#151b20;\n    classDef amber fill:#fff0b9,stroke:#151b20,stroke-width:2px,color:#151b20;\n\n    class S1,S2 blue;\n    class T1,T2,T3,T4 amber;</pre>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">◆</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">Auditing tabular datasets</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">and model outputs for systematic bias requires quantitative statistical testing across demographic slices.</span>\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">▸</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">Rather than relying</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">on intuition, modern fairness engineering employs individual fairness Lipschitz smoothness (Dwork, 2012), error rate parity tradeoffs (Chouldechova, 2017), distribution divergence bounds ([Feldman2015), (Hardt, 2016)], and standardized testing engines like Fairlearn (Weerts, 2023) and AIF360 (Bellamy, 2019).</span>\n  </div>\n</div>"
        },
        "duo": {
          "speaker": "Socratic Debate (Dr. Nova & Kaito)",
          "title": "Socratic Debate: Conceptual Overview & Statistical Formulations: Architecture Flowchart",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Dr. Nova, looking at this workflow diagram for conceptual overview & statistical formulations: architecture flowchart, how does the architectural flow enforce system stability?"
            },
            {
              "speaker": "Dr. Nova",
              "text": "This architecture diagram visualizes how physical observations transition across sampling boundaries into discrete tensor representations. Tracking each transition stage prevents undocumented transformations from corrupting the empirical distribution."
            }
          ],
          "contentHtml": "<div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[4px_4px_0px_#151b20] my-2 overflow-x-auto text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-2 text-left flex items-center justify-between border-b-2 border-[#151b20]/15 pb-1\">\n    <span class=\"flex items-center gap-1.5\">\n      <span>📊 Architecture &amp; Workflow Diagram</span>\n      <span class=\"text-[#151b20]/40\">•</span>\n      <span class=\"text-[#334155]\">System Flowchart</span>\n    </span>\n    <span class=\"text-[#0e7490] text-[9px] font-mono bg-[#c9f3f4] px-1.5 py-0.5 rounded border border-[#151b20]\">Mermaid SVG</span>\n  </div>\n  <pre class=\"mermaid py-1 flex justify-center text-xs overflow-x-auto leading-normal\">flowchart LR\n    subgraph Slicing [\"Demographic Slicing Engine\"]\n        direction TB\n        S1[\"Extract Protected Attribute Slices A in {0, 1}\"]\n        S2[\"Intersectional Feature Slicing A x G x R\"]\n        S1 --> S2\n    end\n\n    subgraph Tests [\"Formal Statistical Disparity Tests\"]\n        direction TB\n        T1[\"Disparate Impact Ratio DIR (Four-Fifths Rule)\"]\n        T2[\"Two-Sample Kolmogorov-Smirnov D_KS\"]\n        T3[\"Wasserstein-1 Optimal Transport Distance W_1\"]\n        T4[\"Permutation Resampling Test on Mean Differences\"]\n        T1 --> T2 --> T3 --> T4\n    end\n\n  %% Top-alignment constraint across stages\n  S1 ~~~ T1\n\n    Slicing --> Tests\n\n    classDef blue fill:#c9f3f4,stroke:#151b20,stroke-width:2px,color:#151b20;\n    classDef amber fill:#fff0b9,stroke:#151b20,stroke-width:2px,color:#151b20;\n\n    class S1,S2 blue;\n    class T1,T2,T3,T4 amber;</pre>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">◆</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">Auditing tabular datasets</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">and model outputs for systematic bias requires quantitative statistical testing across demographic slices.</span>\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">▸</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">Rather than relying</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">on intuition, modern fairness engineering employs individual fairness Lipschitz smoothness (Dwork, 2012), error rate parity tradeoffs (Chouldechova, 2017), distribution divergence bounds ([Feldman2015), (Hardt, 2016)], and standardized testing engines like Fairlearn (Weerts, 2023) and AIF360 (Bellamy, 2019).</span>\n  </div>\n</div>"
        }
      },
      {
        "id": "s4",
        "title": "Non-Parametric Permutation Resampling Auditing",
        "type": "equation",
        "solo": {
          "speaker": "Dr. Nova (Senior Architect)",
          "title": "Non-Parametric Permutation Resampling Auditing",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Non-Parametric Permutation Resampling Auditing. Formalizing the empirical sample mathematically reveals that empirical risk only approximates true generalization risk when the i.i.d. assumption holds. When upstream sampling is biased, the empirical risk diverges asymptotically from true risk—no model tuning can fix that."
            }
          ],
          "contentHtml": "<div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] my-2 text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-1 text-left flex items-center justify-between\">\n    <span>📐 Mathematical Formulation</span>\n    <span class=\"text-[#151b20] text-[9px] font-mono bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Empirical Sample Formulation</span>\n  </div>\n  <div class=\"text-base md:text-lg font-serif text-[#151b20] py-1 overflow-x-auto bg-[#f0fbfd] border border-[#0e7490] rounded-lg my-1\">\n    $$p_{\\text{perm}} = \\frac{1}{B} \\sum_{b=1}^B \\mathbb{I}(T_b \\ge T_{\\text{obs}})$$\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#f6fcf4] border-2 border-[#151b20] shadow-[3px_3px_0px_#15803d] text-xs my-2 leading-relaxed font-sans text-[#151b20]\">\n  <strong class=\"block mb-0.5 font-black uppercase tracking-wider font-mono text-[10px] text-[#15803d]\">💡 Industrial Best Practice</strong>\n  <span class=\"font-medium\">When auditing pre-threshold regression models (e.g., credit scores, insurance underwriting risk, fraud probabilities), never evaluate fairness exclusively on binarized decisions. Binarization masks severe internal disparities. Use the Wasserstein-1 D</span>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">◆</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">When sample sizes</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">across minority demographic slices are small ($n_0 < 100$), standard asymptotic Gaussian assumptions collapse.</span>\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">▸</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">Permutation resampling computes</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">an exact empirical null distribution:</span>\n  </div>\n</div>"
        },
        "duo": {
          "speaker": "Socratic Debate (Dr. Nova & Kaito)",
          "title": "Socratic Debate: Non-Parametric Permutation Resampling Auditing",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Dr. Nova, how does non-parametric permutation resampling auditing protect our system against silent distribution shift in production?"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Formalizing the empirical sample mathematically reveals that empirical risk only approximates true generalization risk when the i.i.d. assumption holds. When upstream sampling is biased, the empirical risk diverges asymptotically from true risk—no model tuning can fix that."
            }
          ],
          "contentHtml": "<div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] my-2 text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-1 text-left flex items-center justify-between\">\n    <span>📐 Mathematical Formulation</span>\n    <span class=\"text-[#151b20] text-[9px] font-mono bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Empirical Sample Formulation</span>\n  </div>\n  <div class=\"text-base md:text-lg font-serif text-[#151b20] py-1 overflow-x-auto bg-[#f0fbfd] border border-[#0e7490] rounded-lg my-1\">\n    $$p_{\\text{perm}} = \\frac{1}{B} \\sum_{b=1}^B \\mathbb{I}(T_b \\ge T_{\\text{obs}})$$\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#f6fcf4] border-2 border-[#151b20] shadow-[3px_3px_0px_#15803d] text-xs my-2 leading-relaxed font-sans text-[#151b20]\">\n  <strong class=\"block mb-0.5 font-black uppercase tracking-wider font-mono text-[10px] text-[#15803d]\">💡 Industrial Best Practice</strong>\n  <span class=\"font-medium\">When auditing pre-threshold regression models (e.g., credit scores, insurance underwriting risk, fraud probabilities), never evaluate fairness exclusively on binarized decisions. Binarization masks severe internal disparities. Use the Wasserstein-1 D</span>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">◆</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">When sample sizes</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">across minority demographic slices are small ($n_0 < 100$), standard asymptotic Gaussian assumptions collapse.</span>\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">▸</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">Permutation resampling computes</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">an exact empirical null distribution:</span>\n  </div>\n</div>"
        }
      },
      {
        "id": "s5",
        "title": "Non-Parametric Permutation Resampling Auditing: Architecture Flowchart",
        "type": "figure",
        "solo": {
          "speaker": "Dr. Nova (Senior Architect)",
          "title": "Non-Parametric Permutation Resampling Auditing: Architecture Flowchart",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Non-Parametric Permutation Resampling Auditing: Architecture Flowchart. This architecture diagram visualizes how physical observations transition across sampling boundaries into discrete tensor representations. Tracking each transition stage prevents undocumented transformations from corrupting the empirical distribution."
            }
          ],
          "contentHtml": "<div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[4px_4px_0px_#151b20] my-2 overflow-x-auto text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-2 text-left flex items-center justify-between border-b-2 border-[#151b20]/15 pb-1\">\n    <span class=\"flex items-center gap-1.5\">\n      <span>📊 Architecture &amp; Workflow Diagram</span>\n      <span class=\"text-[#151b20]/40\">•</span>\n      <span class=\"text-[#334155]\">System Flowchart</span>\n    </span>\n    <span class=\"text-[#0e7490] text-[9px] font-mono bg-[#c9f3f4] px-1.5 py-0.5 rounded border border-[#151b20]\">Mermaid SVG</span>\n  </div>\n  <pre class=\"mermaid py-1 flex justify-center text-xs overflow-x-auto leading-normal\">flowchart TD\n    ObsPool[\"Pool Observations (N = N0 + N1)\"] --> CalcStat[\"1. Calculate Observed Disparity T_obs = |mean_0 - mean_1|\"]\n    CalcStat --> Shuffle[\"2. Randomly Permute Group Labels (B = 10,000 resamples)\"]\n    Shuffle --> Recompute[\"3. Recompute Disparity T_b under H0: No Group Difference\"]\n    Recompute --> PVal[\"4. Compute Exact Permutation p-value: (1/B) sum(I(T_b >= T_obs))\"]\n\n    classDef blue fill:#c9f3f4,stroke:#151b20,stroke-width:2px,color:#151b20;\n    classDef amber fill:#fff0b9,stroke:#151b20,stroke-width:2px,color:#151b20;\n    classDef green fill:#e7f4c8,stroke:#151b20,stroke-width:2px,color:#151b20;\n\n    class ObsPool,CalcStat blue;\n    class Shuffle,Recompute amber;\n    class PVal green;</pre>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">◆</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">When sample sizes</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">across minority demographic slices are small ($n_0 < 100$), standard asymptotic Gaussian assumptions collapse.</span>\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">▸</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">Permutation resampling computes</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">an exact empirical null distribution:</span>\n  </div>\n</div>"
        },
        "duo": {
          "speaker": "Socratic Debate (Dr. Nova & Kaito)",
          "title": "Socratic Debate: Non-Parametric Permutation Resampling Auditing: Architecture Flowchart",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Dr. Nova, looking at this workflow diagram for non-parametric permutation resampling auditing: architecture flowchart, how does the architectural flow enforce system stability?"
            },
            {
              "speaker": "Dr. Nova",
              "text": "This architecture diagram visualizes how physical observations transition across sampling boundaries into discrete tensor representations. Tracking each transition stage prevents undocumented transformations from corrupting the empirical distribution."
            }
          ],
          "contentHtml": "<div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[4px_4px_0px_#151b20] my-2 overflow-x-auto text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-2 text-left flex items-center justify-between border-b-2 border-[#151b20]/15 pb-1\">\n    <span class=\"flex items-center gap-1.5\">\n      <span>📊 Architecture &amp; Workflow Diagram</span>\n      <span class=\"text-[#151b20]/40\">•</span>\n      <span class=\"text-[#334155]\">System Flowchart</span>\n    </span>\n    <span class=\"text-[#0e7490] text-[9px] font-mono bg-[#c9f3f4] px-1.5 py-0.5 rounded border border-[#151b20]\">Mermaid SVG</span>\n  </div>\n  <pre class=\"mermaid py-1 flex justify-center text-xs overflow-x-auto leading-normal\">flowchart TD\n    ObsPool[\"Pool Observations (N = N0 + N1)\"] --> CalcStat[\"1. Calculate Observed Disparity T_obs = |mean_0 - mean_1|\"]\n    CalcStat --> Shuffle[\"2. Randomly Permute Group Labels (B = 10,000 resamples)\"]\n    Shuffle --> Recompute[\"3. Recompute Disparity T_b under H0: No Group Difference\"]\n    Recompute --> PVal[\"4. Compute Exact Permutation p-value: (1/B) sum(I(T_b >= T_obs))\"]\n\n    classDef blue fill:#c9f3f4,stroke:#151b20,stroke-width:2px,color:#151b20;\n    classDef amber fill:#fff0b9,stroke:#151b20,stroke-width:2px,color:#151b20;\n    classDef green fill:#e7f4c8,stroke:#151b20,stroke-width:2px,color:#151b20;\n\n    class ObsPool,CalcStat blue;\n    class Shuffle,Recompute amber;\n    class PVal green;</pre>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">◆</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">When sample sizes</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">across minority demographic slices are small ($n_0 < 100$), standard asymptotic Gaussian assumptions collapse.</span>\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">▸</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">Permutation resampling computes</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">an exact empirical null distribution:</span>\n  </div>\n</div>"
        }
      },
      {
        "id": "s6",
        "title": "Production Implementation: Statistical Fairness Audit Engine",
        "type": "code",
        "solo": {
          "speaker": "Dr. Nova (Senior Architect)",
          "title": "Production Implementation: Statistical Fairness Audit Engine",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Production Implementation: Statistical Fairness Audit Engine. Always enforce schema contracts at the ingestion boundary before raw records enter memory. Using Pydantic or zero-copy Arrow prevents unvalidated floats and untyped strings from silently polluting downstream tensors."
            }
          ],
          "contentHtml": "<div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] font-mono text-xs overflow-x-auto shadow-[4px_4px_0px_#151b20] my-2\">\n  <div class=\"text-[10px] text-[#0e7490] font-black mb-1.5 uppercase tracking-wider pb-1 border-b-2 border-[#151b20]/15 flex items-center justify-between\">\n    <span>Production Implementation / Type-Safe Listing:</span>\n    <span class=\"text-[#151b20] text-[9px] bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Python 3.10+</span>\n  </div>\n  <pre class=\"leading-relaxed bg-[#fffaf0] p-2.5 rounded-lg border border-[#151b20] text-[#151b20] overflow-x-auto\"><code># statistical_fairness_auditor.py\n# Quantitative Fairness Audit Engine: DIR, KS Test, Wasserstein-1, and Permutation Tests\n\nfrom typing import Dict, Any, Tuple, List\nimport numpy as np\nimport pandas as pd\nfrom scipy import stats\n\nclass StatisticalFairnessAuditor:\n    # Audits datasets and binary/continuous predictions for demographic disparities\n    def __init__(self, scores: np.ndarray, labels: np.ndarray, sensitive_attribute: np.ndarray):\n        self.s = np.asarray(scores, dtype=float)\n        self.y = np.asarray(labels, dtype=int)\n        self.a = np.asarray(sensitive_attribute, dtype=int)\n        \n        self.idx0 = np.where(self.a == 0)[0] # Unprivileged\n        self.idx1 = np.where(self.a == 1)[0] # Privileged\n        if len(self.idx0) == 0 or len(self.idx1) == 0:\n            raise ValueError(&quot;Both sensitive attribute groups must </code></pre>\n</div>"
        },
        "duo": {
          "speaker": "Socratic Debate (Dr. Nova & Kaito)",
          "title": "Socratic Debate: Production Implementation: Statistical Fairness Audit Engine",
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
          "contentHtml": "<div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] font-mono text-xs overflow-x-auto shadow-[4px_4px_0px_#151b20] my-2\">\n  <div class=\"text-[10px] text-[#0e7490] font-black mb-1.5 uppercase tracking-wider pb-1 border-b-2 border-[#151b20]/15 flex items-center justify-between\">\n    <span>Production Implementation / Type-Safe Listing:</span>\n    <span class=\"text-[#151b20] text-[9px] bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Python 3.10+</span>\n  </div>\n  <pre class=\"leading-relaxed bg-[#fffaf0] p-2.5 rounded-lg border border-[#151b20] text-[#151b20] overflow-x-auto\"><code># statistical_fairness_auditor.py\n# Quantitative Fairness Audit Engine: DIR, KS Test, Wasserstein-1, and Permutation Tests\n\nfrom typing import Dict, Any, Tuple, List\nimport numpy as np\nimport pandas as pd\nfrom scipy import stats\n\nclass StatisticalFairnessAuditor:\n    # Audits datasets and binary/continuous predictions for demographic disparities\n    def __init__(self, scores: np.ndarray, labels: np.ndarray, sensitive_attribute: np.ndarray):\n        self.s = np.asarray(scores, dtype=float)\n        self.y = np.asarray(labels, dtype=int)\n        self.a = np.asarray(sensitive_attribute, dtype=int)\n        \n        self.idx0 = np.where(self.a == 0)[0] # Unprivileged\n        self.idx1 = np.where(self.a == 1)[0] # Privileged\n        if len(self.idx0) == 0 or len(self.idx1) == 0:\n            raise ValueError(&quot;Both sensitive attribute groups must </code></pre>\n</div>"
        }
      },
      {
        "id": "s7",
        "title": "Empirical Case Study: Automated Hiring Algorithms & Mortgage Lending",
        "type": "bullets",
        "solo": {
          "speaker": "Dr. Nova (Senior Architect)",
          "title": "Empirical Case Study: Automated Hiring Algorithms & Mortgage Lending",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Empirical Case Study: Automated Hiring Algorithms & Mortgage Lending. Systems collapse when models mistake collection artifacts for real-world signals. In ICU sepsis models, observation frequency became a confounder; in autonomous robotics, a 50-millisecond timestamp jitter causes a 1.4-meter bounding box dislocation at highway speeds."
            }
          ],
          "contentHtml": "<div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">◆</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">Fintech Credit Underwriting Disparate Impact</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">A major online mortgage lender deployed an automated credit underwriting model that removed race and gender. State regulators conducted a statistical audit using Wasserstein-1 distance and the Four-Fifths Rule. While the model predicted repayment accuracy consistently, the selection rate for Black applicants was $28\\%$ versus $52\\%$ for White applicants ($\\text{DIR} = 0.538$). Regulators proved that input features such as &quot;distance to nearest bank branch&quot; and &quot;smartphone OS type&quot; functioned as illegal racial proxies. The lender settled for $\\$35\\text{M}$ and agreed to deploy in-processing fairness constraints.</span>\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">▸</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">Automated Video Interview AI (HireVue Audit)</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">An algorithmic hiring system scored candidate facial micro-expressions and vocal tone during recorded interviews. An independent audit by algorithmic auditors demonstrated that candidates with non-native regional accents suffered a $D_{\\text{KS}} = 0.42$ divergence in interview competency scores relative to native speakers. Permutation testing confirmed the divergence was statistically impossible under random variation ($p < 10^{-6}$). The company removed the facial analysis subsystem following the audit.</span>\n  </div>\n</div>"
        },
        "duo": {
          "speaker": "Socratic Debate (Dr. Nova & Kaito)",
          "title": "Socratic Debate: Empirical Case Study: Automated Hiring Algorithms & Mortgage Lending",
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
          "contentHtml": "<div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">◆</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">Fintech Credit Underwriting Disparate Impact</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">A major online mortgage lender deployed an automated credit underwriting model that removed race and gender. State regulators conducted a statistical audit using Wasserstein-1 distance and the Four-Fifths Rule. While the model predicted repayment accuracy consistently, the selection rate for Black applicants was $28\\%$ versus $52\\%$ for White applicants ($\\text{DIR} = 0.538$). Regulators proved that input features such as &quot;distance to nearest bank branch&quot; and &quot;smartphone OS type&quot; functioned as illegal racial proxies. The lender settled for $\\$35\\text{M}$ and agreed to deploy in-processing fairness constraints.</span>\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">▸</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">Automated Video Interview AI (HireVue Audit)</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">An algorithmic hiring system scored candidate facial micro-expressions and vocal tone during recorded interviews. An independent audit by algorithmic auditors demonstrated that candidates with non-native regional accents suffered a $D_{\\text{KS}} = 0.42$ divergence in interview competency scores relative to native speakers. Permutation testing confirmed the divergence was statistically impossible under random variation ($p < 10^{-6}$). The company removed the facial analysis subsystem following the audit.</span>\n  </div>\n</div>"
        }
      },
      {
        "id": "s8",
        "title": "Interactive Lab: Explore Statistical Bias Auditor",
        "type": "tool",
        "solo": {
          "speaker": "Dr. Nova (Senior Architect)",
          "title": "Interactive Lab: Explore Statistical Bias Auditor",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Interactive Lab: Explore Statistical Bias Auditor. Scroll directly beneath this presentation player to the live laboratory. Run the failure injection to observe how unvalidated anomalies trigger compounding cascades across downstream tensors. Hands-on testing proves why boundary schema contracts are mandatory."
            }
          ],
          "contentHtml": "<div class=\"p-4 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[4px_4px_0px_#22bfd7] my-2\">\n  <div class=\"flex items-center justify-between border-b-2 border-[#151b20]/15 pb-2 mb-2.5 flex-wrap gap-2\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"px-2.5 py-1 rounded-lg bg-[#c9f3f4] text-[#0e7490] font-mono font-black text-xs border border-[#151b20] shadow-[1px_1px_0px_#151b20] uppercase tracking-wider\">🔬 Interactive Lab</span>\n      <span class=\"text-xs font-mono font-black text-[#151b20]\">Explore Statistical Bias Auditor</span>\n    </div>\n    <span class=\"text-[10px] font-mono text-[#0e7490] bg-[#fffaf0] px-2 py-0.5 rounded border border-[#151b20]\">Located Below on Page ↓</span>\n  </div>\n  <p class=\"text-xs text-[#334155] mb-3 leading-relaxed font-medium\">Compute Kolmogorov-Smirnov and Wasserstein distances across slices, test Four-Fifths rule compliance, and run live permutation resampling tests.</p>\n  <div class=\"bg-[#f6f0dc] p-3 rounded-xl border-2 border-[#151b20] space-y-2 text-xs\">\n    <span class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider block border-b border-[#151b20]/20 pb-1\">⚡ Recommended Hands-On Experiment:</span>\n    <div class=\"flex items-start gap-2 text-[#334155]\">\n  <span class=\"text-[#0e7490] font-bold font-mono text-xs\">1.</span>\n  <span class=\"text-xs leading-relaxed\">Scroll down to the interactive workbench section below the slide player to access the live laboratory.</span>\n</div><div class=\"flex items-start gap-2 text-[#334155]\">\n  <span class=\"text-[#0e7490] font-bold font-mono text-xs\">2.</span>\n  <span class=\"text-xs leading-relaxed\">Click &#x27;Launch Representation Workbench →&#x27; to examine baseline state, then trigger &#x27;Inject anomaly / Run test&#x27; to simulate failure modes.</span>\n</div><div class=\"flex items-start gap-2 text-[#334155]\">\n  <span class=\"text-[#0e7490] font-bold font-mono text-xs\">3.</span>\n  <span class=\"text-xs leading-relaxed\">Audit telemetry metrics and observe how defensive schema contracts guard downstream models.</span>\n</div>\n  </div>\n</div>"
        },
        "duo": {
          "speaker": "Socratic Debate (Dr. Nova & Kaito)",
          "title": "Socratic Debate: Interactive Lab: Explore Statistical Bias Auditor",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Dr. Nova, what specific failure mode should I look for when I use the explore statistical bias auditor located below this player?"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Scroll directly beneath this presentation player to the live laboratory. Run the failure injection to observe how unvalidated anomalies trigger compounding cascades across downstream tensors. Hands-on testing proves why boundary schema contracts are mandatory."
            }
          ],
          "contentHtml": "<div class=\"p-4 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[4px_4px_0px_#22bfd7] my-2\">\n  <div class=\"flex items-center justify-between border-b-2 border-[#151b20]/15 pb-2 mb-2.5 flex-wrap gap-2\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"px-2.5 py-1 rounded-lg bg-[#c9f3f4] text-[#0e7490] font-mono font-black text-xs border border-[#151b20] shadow-[1px_1px_0px_#151b20] uppercase tracking-wider\">🔬 Interactive Lab</span>\n      <span class=\"text-xs font-mono font-black text-[#151b20]\">Explore Statistical Bias Auditor</span>\n    </div>\n    <span class=\"text-[10px] font-mono text-[#0e7490] bg-[#fffaf0] px-2 py-0.5 rounded border border-[#151b20]\">Located Below on Page ↓</span>\n  </div>\n  <p class=\"text-xs text-[#334155] mb-3 leading-relaxed font-medium\">Compute Kolmogorov-Smirnov and Wasserstein distances across slices, test Four-Fifths rule compliance, and run live permutation resampling tests.</p>\n  <div class=\"bg-[#f6f0dc] p-3 rounded-xl border-2 border-[#151b20] space-y-2 text-xs\">\n    <span class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider block border-b border-[#151b20]/20 pb-1\">⚡ Recommended Hands-On Experiment:</span>\n    <div class=\"flex items-start gap-2 text-[#334155]\">\n  <span class=\"text-[#0e7490] font-bold font-mono text-xs\">1.</span>\n  <span class=\"text-xs leading-relaxed\">Scroll down to the interactive workbench section below the slide player to access the live laboratory.</span>\n</div><div class=\"flex items-start gap-2 text-[#334155]\">\n  <span class=\"text-[#0e7490] font-bold font-mono text-xs\">2.</span>\n  <span class=\"text-xs leading-relaxed\">Click &#x27;Launch Representation Workbench →&#x27; to examine baseline state, then trigger &#x27;Inject anomaly / Run test&#x27; to simulate failure modes.</span>\n</div><div class=\"flex items-start gap-2 text-[#334155]\">\n  <span class=\"text-[#0e7490] font-bold font-mono text-xs\">3.</span>\n  <span class=\"text-xs leading-relaxed\">Audit telemetry metrics and observe how defensive schema contracts guard downstream models.</span>\n</div>\n  </div>\n</div>"
        }
      }
    ]
  },
  "ch7_p4": {
    "chapter": 7,
    "part": 4,
    "key": "ch7_p4",
    "badge": "◆ TRACK 7 • LESSON 7.4: BIAS VISUALIZATION AND AUDITING TOOLS",
    "index": "Lesson 4 of 10",
    "lessonTitle": "Bias Visualization and Auditing Tools",
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
              "text": "Welcome to Lesson 7.4. Today we examine bias visualization and auditing tools, establishing the mathematical foundations and production discipline required to guarantee dataset reliability."
            }
          ],
          "contentHtml": "<div class=\"p-6 md:p-8 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#22bfd7] text-center space-y-4\">\n  <div class=\"inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#c9f3f4] text-[#0e7490] font-mono text-xs border-2 border-[#151b20] font-black uppercase tracking-wider shadow-[2px_2px_0px_#151b20]\">\n    <span>◆ Track 7: Foundations</span>\n    <span>•</span>\n    <span>Lesson 7.4</span>\n  </div>\n  <h2 class=\"text-2xl md:text-3xl font-black text-[#151b20] tracking-tight\">\n    Bias Visualization and Auditing Tools\n  </h2>\n  <p class=\"text-sm md:text-base text-[#334155] max-w-2xl mx-auto leading-relaxed font-medium\">\n    Deep dive into bias visualization and auditing tools with formal mathematical formulations, production engineering, and failure-mode analysis.\n  </p>\n  <div class=\"pt-2 flex flex-wrap items-center justify-center gap-2 font-mono text-xs\">\n    <span class=\"px-2.5 py-1 rounded-lg bg-[#fff0b9] border border-[#151b20] font-bold text-[#151b20]\">📐 Formal Foundations</span>\n    <span class=\"px-2.5 py-1 rounded-lg bg-[#ffd8ce] border border-[#151b20] font-bold text-[#151b20]\">⚠️ Failure Modes</span>\n    <span class=\"px-2.5 py-1 rounded-lg bg-[#c9f3f4] border border-[#151b20] font-bold text-[#151b20]\">🛡️ Production Contracts</span>\n  </div>\n</div>"
        },
        "duo": {
          "speaker": "Socratic Debate (Dr. Nova & Kaito)",
          "title": "Socratic Debate: Bias Visualization and Auditing Tools",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Dr. Nova, what is the core architectural challenge we are solving in Lesson 7.4?"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Welcome to Lesson 7.4. Today we examine bias visualization and auditing tools, establishing the mathematical foundations and production discipline required to guarantee dataset reliability."
            }
          ],
          "contentHtml": "<div class=\"p-6 md:p-8 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#22bfd7] text-center space-y-4\">\n  <div class=\"inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#c9f3f4] text-[#0e7490] font-mono text-xs border-2 border-[#151b20] font-black uppercase tracking-wider shadow-[2px_2px_0px_#151b20]\">\n    <span>◆ Track 7: Foundations</span>\n    <span>•</span>\n    <span>Lesson 7.4</span>\n  </div>\n  <h2 class=\"text-2xl md:text-3xl font-black text-[#151b20] tracking-tight\">\n    Bias Visualization and Auditing Tools\n  </h2>\n  <p class=\"text-sm md:text-base text-[#334155] max-w-2xl mx-auto leading-relaxed font-medium\">\n    Deep dive into bias visualization and auditing tools with formal mathematical formulations, production engineering, and failure-mode analysis.\n  </p>\n  <div class=\"pt-2 flex flex-wrap items-center justify-center gap-2 font-mono text-xs\">\n    <span class=\"px-2.5 py-1 rounded-lg bg-[#fff0b9] border border-[#151b20] font-bold text-[#151b20]\">📐 Formal Foundations</span>\n    <span class=\"px-2.5 py-1 rounded-lg bg-[#ffd8ce] border border-[#151b20] font-bold text-[#151b20]\">⚠️ Failure Modes</span>\n    <span class=\"px-2.5 py-1 rounded-lg bg-[#c9f3f4] border border-[#151b20] font-bold text-[#151b20]\">🛡️ Production Contracts</span>\n  </div>\n</div>"
        }
      },
      {
        "id": "s2",
        "title": "Conceptual Overview & Visual Geometries: Mathematical Formulations of Visual Geometries",
        "type": "equation",
        "solo": {
          "speaker": "Dr. Nova (Senior Architect)",
          "title": "Conceptual Overview & Visual Geometries: Mathematical Formulations of Visual Geometries",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Conceptual Overview & Visual Geometries: Mathematical Formulations of Visual Geometries. Formalizing the empirical sample mathematically reveals that empirical risk only approximates true generalization risk when the i.i.d. assumption holds. When upstream sampling is biased, the empirical risk diverges asymptotically from true risk—no model tuning can fix that."
            }
          ],
          "contentHtml": "<div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] my-2 text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-1 text-left flex items-center justify-between\">\n    <span>📐 Mathematical Formulation</span>\n    <span class=\"text-[#151b20] text-[9px] font-mono bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Empirical Sample Formulation</span>\n  </div>\n  <div class=\"text-base md:text-lg font-serif text-[#151b20] py-1 overflow-x-auto bg-[#f0fbfd] border border-[#0e7490] rounded-lg my-1\">\n    $$\\Delta_{g, m} = M_g - M_{\\text{baseline}}$$\n  </div>\n</div><div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] my-2 text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-1 text-left flex items-center justify-between\">\n    <span>📐 Mathematical Formulation</span>\n    <span class=\"text-[#151b20] text-[9px] font-mono bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Distribution Measure</span>\n  </div>\n  <div class=\"text-base md:text-lg font-serif text-[#151b20] py-1 overflow-x-auto bg-[#f0fbfd] border border-[#0e7490] rounded-lg my-1\">\n    $$\\|\\boldsymbol{\\Delta}\\|_2 = \\sqrt{\\sum_{g=1}^K (M_g - M_{\\text{baseline}})^2}$$\n  </div>\n</div><div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] my-2 text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-1 text-left flex items-center justify-between\">\n    <span>📐 Mathematical Formulation</span>\n    <span class=\"text-[#151b20] text-[9px] font-mono bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Empirical Risk Proxy</span>\n  </div>\n  <div class=\"text-base md:text-lg font-serif text-[#151b20] py-1 overflow-x-auto bg-[#f0fbfd] border border-[#0e7490] rounded-lg my-1\">\n    $$\\Pr(Y = 1 \\mid R = r, A = a) = r \\quad \\forall a \\in \\{0, 1\\}$$\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">◆</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">under-estimation of risk</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">Deviations above the diagonal ($45^\\circ$ line) indicate under-estimation of risk.</span>\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">▸</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">over-estimation of risk</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">Deviations below the diagonal indicate over-estimation of risk (systematic punitive bias).</span>\n  </div>\n</div>"
        },
        "duo": {
          "speaker": "Socratic Debate (Dr. Nova & Kaito)",
          "title": "Socratic Debate: Conceptual Overview & Visual Geometries: Mathematical Formulations of Visual Geometries",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Dr. Nova, how does conceptual overview & visual geometries: mathematical formulations of visual geometries protect our system against silent distribution shift in production?"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Formalizing the empirical sample mathematically reveals that empirical risk only approximates true generalization risk when the i.i.d. assumption holds. When upstream sampling is biased, the empirical risk diverges asymptotically from true risk—no model tuning can fix that."
            }
          ],
          "contentHtml": "<div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] my-2 text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-1 text-left flex items-center justify-between\">\n    <span>📐 Mathematical Formulation</span>\n    <span class=\"text-[#151b20] text-[9px] font-mono bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Empirical Sample Formulation</span>\n  </div>\n  <div class=\"text-base md:text-lg font-serif text-[#151b20] py-1 overflow-x-auto bg-[#f0fbfd] border border-[#0e7490] rounded-lg my-1\">\n    $$\\Delta_{g, m} = M_g - M_{\\text{baseline}}$$\n  </div>\n</div><div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] my-2 text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-1 text-left flex items-center justify-between\">\n    <span>📐 Mathematical Formulation</span>\n    <span class=\"text-[#151b20] text-[9px] font-mono bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Distribution Measure</span>\n  </div>\n  <div class=\"text-base md:text-lg font-serif text-[#151b20] py-1 overflow-x-auto bg-[#f0fbfd] border border-[#0e7490] rounded-lg my-1\">\n    $$\\|\\boldsymbol{\\Delta}\\|_2 = \\sqrt{\\sum_{g=1}^K (M_g - M_{\\text{baseline}})^2}$$\n  </div>\n</div><div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] my-2 text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-1 text-left flex items-center justify-between\">\n    <span>📐 Mathematical Formulation</span>\n    <span class=\"text-[#151b20] text-[9px] font-mono bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Empirical Risk Proxy</span>\n  </div>\n  <div class=\"text-base md:text-lg font-serif text-[#151b20] py-1 overflow-x-auto bg-[#f0fbfd] border border-[#0e7490] rounded-lg my-1\">\n    $$\\Pr(Y = 1 \\mid R = r, A = a) = r \\quad \\forall a \\in \\{0, 1\\}$$\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">◆</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">under-estimation of risk</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">Deviations above the diagonal ($45^\\circ$ line) indicate under-estimation of risk.</span>\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">▸</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">over-estimation of risk</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">Deviations below the diagonal indicate over-estimation of risk (systematic punitive bias).</span>\n  </div>\n</div>"
        }
      },
      {
        "id": "s3",
        "title": "Conceptual Overview & Visual Geometries: Architecture Flowchart",
        "type": "figure",
        "solo": {
          "speaker": "Dr. Nova (Senior Architect)",
          "title": "Conceptual Overview & Visual Geometries: Architecture Flowchart",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Conceptual Overview & Visual Geometries: Architecture Flowchart. This architecture diagram visualizes how physical observations transition across sampling boundaries into discrete tensor representations. Tracking each transition stage prevents undocumented transformations from corrupting the empirical distribution."
            }
          ],
          "contentHtml": "<div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[4px_4px_0px_#151b20] my-2 overflow-x-auto text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-2 text-left flex items-center justify-between border-b-2 border-[#151b20]/15 pb-1\">\n    <span class=\"flex items-center gap-1.5\">\n      <span>📊 Architecture &amp; Workflow Diagram</span>\n      <span class=\"text-[#151b20]/40\">•</span>\n      <span class=\"text-[#334155]\">System Flowchart</span>\n    </span>\n    <span class=\"text-[#0e7490] text-[9px] font-mono bg-[#c9f3f4] px-1.5 py-0.5 rounded border border-[#151b20]\">Mermaid SVG</span>\n  </div>\n  <pre class=\"mermaid py-1 flex justify-center text-xs overflow-x-auto leading-normal\">flowchart LR\n    subgraph SlicingGrid [\"Intersectional Demographic Grid\"]\n    direction TB\n        G1[\"Gender: Male, Female, Non-Binary\"]\n        G2[\"Race/Ethnicity: Black, White, Hispanic, Asian\"]\n        G3[\"Age Cohort: < 25, 25-50, > 50\"]\n        G1 --- G2 --- G3\n    end\n\n    subgraph VisualDisplays [\"Fairness Visual Engines\"]\n    direction TB\n        V1[\"Disparity Heatmap Matrices\"]\n        V2[\"Subgroup Calibration Curves\"]\n        V3[\"Multi-Objective ROC Pareto Frontiers\"]\n        V1 --> V2 --> V3\n    end\n\n  %% Top-alignment constraint across stages\n  G1 ~~~ V1\n\n    SlicingGrid --> VisualDisplays\n\n    classDef blue fill:#c9f3f4,stroke:#151b20,stroke-width:2px,color:#151b20;\n    classDef amber fill:#fff0b9,stroke:#151b20,stroke-width:2px,color:#151b20;\n\n    class G1,G2,G3 blue;\n    class V1,V2,V3 amber;</pre>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">◆</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">under-estimation of risk</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">Deviations above the diagonal ($45^\\circ$ line) indicate under-estimation of risk.</span>\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">▸</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">over-estimation of risk</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">Deviations below the diagonal indicate over-estimation of risk (systematic punitive bias).</span>\n  </div>\n</div>"
        },
        "duo": {
          "speaker": "Socratic Debate (Dr. Nova & Kaito)",
          "title": "Socratic Debate: Conceptual Overview & Visual Geometries: Architecture Flowchart",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Dr. Nova, looking at this workflow diagram for conceptual overview & visual geometries: architecture flowchart, how does the architectural flow enforce system stability?"
            },
            {
              "speaker": "Dr. Nova",
              "text": "This architecture diagram visualizes how physical observations transition across sampling boundaries into discrete tensor representations. Tracking each transition stage prevents undocumented transformations from corrupting the empirical distribution."
            }
          ],
          "contentHtml": "<div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[4px_4px_0px_#151b20] my-2 overflow-x-auto text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-2 text-left flex items-center justify-between border-b-2 border-[#151b20]/15 pb-1\">\n    <span class=\"flex items-center gap-1.5\">\n      <span>📊 Architecture &amp; Workflow Diagram</span>\n      <span class=\"text-[#151b20]/40\">•</span>\n      <span class=\"text-[#334155]\">System Flowchart</span>\n    </span>\n    <span class=\"text-[#0e7490] text-[9px] font-mono bg-[#c9f3f4] px-1.5 py-0.5 rounded border border-[#151b20]\">Mermaid SVG</span>\n  </div>\n  <pre class=\"mermaid py-1 flex justify-center text-xs overflow-x-auto leading-normal\">flowchart LR\n    subgraph SlicingGrid [\"Intersectional Demographic Grid\"]\n    direction TB\n        G1[\"Gender: Male, Female, Non-Binary\"]\n        G2[\"Race/Ethnicity: Black, White, Hispanic, Asian\"]\n        G3[\"Age Cohort: < 25, 25-50, > 50\"]\n        G1 --- G2 --- G3\n    end\n\n    subgraph VisualDisplays [\"Fairness Visual Engines\"]\n    direction TB\n        V1[\"Disparity Heatmap Matrices\"]\n        V2[\"Subgroup Calibration Curves\"]\n        V3[\"Multi-Objective ROC Pareto Frontiers\"]\n        V1 --> V2 --> V3\n    end\n\n  %% Top-alignment constraint across stages\n  G1 ~~~ V1\n\n    SlicingGrid --> VisualDisplays\n\n    classDef blue fill:#c9f3f4,stroke:#151b20,stroke-width:2px,color:#151b20;\n    classDef amber fill:#fff0b9,stroke:#151b20,stroke-width:2px,color:#151b20;\n\n    class G1,G2,G3 blue;\n    class V1,V2,V3 amber;</pre>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">◆</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">under-estimation of risk</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">Deviations above the diagonal ($45^\\circ$ line) indicate under-estimation of risk.</span>\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">▸</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">over-estimation of risk</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">Deviations below the diagonal indicate over-estimation of risk (systematic punitive bias).</span>\n  </div>\n</div>"
        }
      },
      {
        "id": "s4",
        "title": "The Open-Source Fairness Toolkit Ecosystem",
        "type": "bullets",
        "solo": {
          "speaker": "Dr. Nova (Senior Architect)",
          "title": "The Open-Source Fairness Toolkit Ecosystem",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "The Open-Source Fairness Toolkit Ecosystem. In production engineering, this principle establishes reliability and reproducibility. Primary Maintainer | Strengths | Visualization Capabilities | | :--- | :--- | :--- | :--- | | Fairlearn | Microsoft / NumFOCUS | Tight scikit-learn integration, in-processing exponentiated gradient | Disparity dashboards, metric frames, trade-off curves (Weerts, 2023) | | AIF360 | IBM Research | 70+ metrics, industrial pre/in/post-processing algorithms | Metric visualizer, interactive web audit console (Bellamy, 2019) | | What-If Tool (WIT)| Google PAIR | TensorBoard integration, counterfactual exploration | Interactive 3D scatterplots, individual counterfactual toggles | | Aequitas | Univ."
            }
          ],
          "contentHtml": "<div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">◆</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">| Toolkit |</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">Primary Maintainer | Strengths | Visualization Capabilities | | :--- | :--- | :--- | :--- | | Fairlearn | Microsoft / NumFOCUS | Tight scikit-learn integration, in-processing exponentiated gradient | Disparity dashboards, metric frames, trade-off curves (Weerts, 2023) | | AIF360 | IBM Research | 70+ metrics, industrial pre/in/post-processing algorithms | Metric visualizer, interactive web audit console (Bellamy, 2019) | | What-If Tool (WIT)| Google PAIR | TensorBoard integration, counterfactual exploration | Interactive 3D scatterplots, individual counterfactual toggles | | Aequitas | Univ.</span>\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">▸</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">of Chicago |</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">Public policy bias auditing, disparate impact classification ( Barocas &amp; Selbst, 2016 ) | Disparity treemaps, risk score equity charts |</span>\n  </div>\n</div>"
        },
        "duo": {
          "speaker": "Socratic Debate (Dr. Nova & Kaito)",
          "title": "Socratic Debate: The Open-Source Fairness Toolkit Ecosystem",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Dr. Nova, what makes the open-source fairness toolkit ecosystem essential for robust machine learning?"
            },
            {
              "speaker": "Dr. Nova",
              "text": "In production engineering, this principle establishes reliability and reproducibility. Primary Maintainer | Strengths | Visualization Capabilities | | :--- | :--- | :--- | :--- | | Fairlearn | Microsoft / NumFOCUS | Tight scikit-learn integration, in-processing exponentiated gradient | Disparity dashboards, metric frames, trade-off curves (Weerts, 2023) | | AIF360 | IBM Research | 70+ metrics, industrial pre/in/post-processing algorithms | Metric visualizer, interactive web audit console (Bellamy, 2019) | | What-If Tool (WIT)| Google PAIR | TensorBoard integration, counterfactual exploration | Interactive 3D scatterplots, individual counterfactual toggles | | Aequitas | Univ."
            }
          ],
          "contentHtml": "<div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">◆</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">| Toolkit |</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">Primary Maintainer | Strengths | Visualization Capabilities | | :--- | :--- | :--- | :--- | | Fairlearn | Microsoft / NumFOCUS | Tight scikit-learn integration, in-processing exponentiated gradient | Disparity dashboards, metric frames, trade-off curves (Weerts, 2023) | | AIF360 | IBM Research | 70+ metrics, industrial pre/in/post-processing algorithms | Metric visualizer, interactive web audit console (Bellamy, 2019) | | What-If Tool (WIT)| Google PAIR | TensorBoard integration, counterfactual exploration | Interactive 3D scatterplots, individual counterfactual toggles | | Aequitas | Univ.</span>\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">▸</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">of Chicago |</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">Public policy bias auditing, disparate impact classification ( Barocas &amp; Selbst, 2016 ) | Disparity treemaps, risk score equity charts |</span>\n  </div>\n</div>"
        }
      },
      {
        "id": "s5",
        "title": "Disparity Metric Tensor and Calibration ECE Formulation",
        "type": "equation",
        "solo": {
          "speaker": "Dr. Nova (Senior Architect)",
          "title": "Disparity Metric Tensor and Calibration ECE Formulation",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Disparity Metric Tensor and Calibration ECE Formulation. Formalizing the empirical sample mathematically reveals that empirical risk only approximates true generalization risk when the i.i.d. assumption holds. When upstream sampling is biased, the empirical risk diverges asymptotically from true risk—no model tuning can fix that."
            }
          ],
          "contentHtml": "<div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] my-2 text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-1 text-left flex items-center justify-between\">\n    <span>📐 Mathematical Formulation</span>\n    <span class=\"text-[#151b20] text-[9px] font-mono bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Empirical Sample Formulation</span>\n  </div>\n  <div class=\"text-base md:text-lg font-serif text-[#151b20] py-1 overflow-x-auto bg-[#f0fbfd] border border-[#0e7490] rounded-lg my-1\">\n    $$\\mathbf{M}_{g, k} = \\mathbb{E}_{(X, Y) \\sim \\mathcal{D}_g}\\left[ \\mu_k(f(X), Y) \\right]$$\n  </div>\n</div><div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] my-2 text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-1 text-left flex items-center justify-between\">\n    <span>📐 Mathematical Formulation</span>\n    <span class=\"text-[#151b20] text-[9px] font-mono bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Distribution Measure</span>\n  </div>\n  <div class=\"text-base md:text-lg font-serif text-[#151b20] py-1 overflow-x-auto bg-[#f0fbfd] border border-[#0e7490] rounded-lg my-1\">\n    $$\\Delta_k = \\max_{g} \\mathbf{M}_{g, k} - \\min_{g'} \\mathbf{M}_{g', k}, \\qquad \\rho_k = \\frac{\\min_{g'} \\mathbf{M}_{g', k}}{\\max_{g} \\mathbf{M}_{g, k}}$$\n  </div>\n</div><div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] my-2 text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-1 text-left flex items-center justify-between\">\n    <span>📐 Mathematical Formulation</span>\n    <span class=\"text-[#151b20] text-[9px] font-mono bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Empirical Risk Proxy</span>\n  </div>\n  <div class=\"text-base md:text-lg font-serif text-[#151b20] py-1 overflow-x-auto bg-[#f0fbfd] border border-[#0e7490] rounded-lg my-1\">\n    $$\\text{ECE}_g = \\sum_{b=1}^B \\frac{|I_b^{(g)}|}{|D_g|} \\left| \\text{acc}(I_b^{(g)}) - \\text{conf}(I_b^{(g)}) \\right|$$\n  </div>\n</div>"
        },
        "duo": {
          "speaker": "Socratic Debate (Dr. Nova & Kaito)",
          "title": "Socratic Debate: Disparity Metric Tensor and Calibration ECE Formulation",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Dr. Nova, how does disparity metric tensor and calibration ece formulation protect our system against silent distribution shift in production?"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Formalizing the empirical sample mathematically reveals that empirical risk only approximates true generalization risk when the i.i.d. assumption holds. When upstream sampling is biased, the empirical risk diverges asymptotically from true risk—no model tuning can fix that."
            }
          ],
          "contentHtml": "<div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] my-2 text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-1 text-left flex items-center justify-between\">\n    <span>📐 Mathematical Formulation</span>\n    <span class=\"text-[#151b20] text-[9px] font-mono bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Empirical Sample Formulation</span>\n  </div>\n  <div class=\"text-base md:text-lg font-serif text-[#151b20] py-1 overflow-x-auto bg-[#f0fbfd] border border-[#0e7490] rounded-lg my-1\">\n    $$\\mathbf{M}_{g, k} = \\mathbb{E}_{(X, Y) \\sim \\mathcal{D}_g}\\left[ \\mu_k(f(X), Y) \\right]$$\n  </div>\n</div><div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] my-2 text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-1 text-left flex items-center justify-between\">\n    <span>📐 Mathematical Formulation</span>\n    <span class=\"text-[#151b20] text-[9px] font-mono bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Distribution Measure</span>\n  </div>\n  <div class=\"text-base md:text-lg font-serif text-[#151b20] py-1 overflow-x-auto bg-[#f0fbfd] border border-[#0e7490] rounded-lg my-1\">\n    $$\\Delta_k = \\max_{g} \\mathbf{M}_{g, k} - \\min_{g'} \\mathbf{M}_{g', k}, \\qquad \\rho_k = \\frac{\\min_{g'} \\mathbf{M}_{g', k}}{\\max_{g} \\mathbf{M}_{g, k}}$$\n  </div>\n</div><div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] my-2 text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-1 text-left flex items-center justify-between\">\n    <span>📐 Mathematical Formulation</span>\n    <span class=\"text-[#151b20] text-[9px] font-mono bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Empirical Risk Proxy</span>\n  </div>\n  <div class=\"text-base md:text-lg font-serif text-[#151b20] py-1 overflow-x-auto bg-[#f0fbfd] border border-[#0e7490] rounded-lg my-1\">\n    $$\\text{ECE}_g = \\sum_{b=1}^B \\frac{|I_b^{(g)}|}{|D_g|} \\left| \\text{acc}(I_b^{(g)}) - \\text{conf}(I_b^{(g)}) \\right|$$\n  </div>\n</div>"
        }
      },
      {
        "id": "s6",
        "title": "Diagnostic Framework: Visual Fairness Pipeline",
        "type": "figure",
        "solo": {
          "speaker": "Dr. Nova (Senior Architect)",
          "title": "Diagnostic Framework: Visual Fairness Pipeline",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Diagnostic Framework: Visual Fairness Pipeline. This architecture diagram visualizes how physical observations transition across sampling boundaries into discrete tensor representations. Tracking each transition stage prevents undocumented transformations from corrupting the empirical distribution."
            }
          ],
          "contentHtml": "<div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[4px_4px_0px_#151b20] my-2 overflow-x-auto text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-2 text-left flex items-center justify-between border-b-2 border-[#151b20]/15 pb-1\">\n    <span class=\"flex items-center gap-1.5\">\n      <span>📊 Architecture &amp; Workflow Diagram</span>\n      <span class=\"text-[#151b20]/40\">•</span>\n      <span class=\"text-[#334155]\">System Flowchart</span>\n    </span>\n    <span class=\"text-[#0e7490] text-[9px] font-mono bg-[#c9f3f4] px-1.5 py-0.5 rounded border border-[#151b20]\">Mermaid SVG</span>\n  </div>\n  <pre class=\"mermaid py-1 flex justify-center text-xs overflow-x-auto leading-normal\">flowchart TD\n    Model[\"Trained Model Probabilities S\"] --> SliceData[\"1. Slice Observations Across Intersectional Subgroups\"]\n    SliceData --> MetricMatrix[\"2. Construct Multi-Metric Disparity Heatmap\"]\n    MetricMatrix --> CalibCheck{\"Check Calibration Curves\"}\n    CalibCheck -- \"Calibration Disparities Detected\" --> CalibRepair[\"Apply Group-Specific Isotonic Regression\"]\n    CalibCheck -- \"Calibration Satisfied\" --> ROCCheck[\"3. Intersect ROC Convex Hulls for Threshold Optimization\"]\n    ROCCheck --> Deploy{\"Disparity Within Legal Limits?\"}\n    Deploy -- \"DIR >= 0.80 and AOD <= 0.05\" --> Production[\"Approved for Regulated Production Deployment\"]\n    Deploy -- \"Disparities Violate Thresholds\" --> InProcessing[\"Trigger In-Processing Adversarial / Reductions Retraining\"]\n\n    classDef blue fill:#c9f3f4,stroke:#151b20,stroke-width:2px,color:#151b20;\n    classDef amber fill:#fff0b9,stroke:#151b20,stroke-width:2px,color:#151b20;\n    classDef green fill:#e7f4c8,stroke:#151b20,stroke-width:2px,color:#151b20;\n\n    class Model,SliceData blue;\n    class MetricMatrix,CalibCheck,ROCCheck,Deploy amber;\n    class Production,CalibRepair,InProcessing green;</pre>\n</div><div class=\"p-3 rounded-xl bg-[#f6fcf4] border-2 border-[#151b20] shadow-[3px_3px_0px_#15803d] text-xs my-2 leading-relaxed font-sans text-[#151b20]\">\n  <strong class=\"block mb-0.5 font-black uppercase tracking-wider font-mono text-[10px] text-[#15803d]\">💡 Industrial Best Practice</strong>\n  <span class=\"font-medium\">Never compute aggregate accuracy without grouping. In continuous integration pipelines, instantiate a MetricFrame tracking selection rate, false positive rate, and error rate across every demographic slice on every model checkpoint commit (Weerts, 20</span>\n</div>"
        },
        "duo": {
          "speaker": "Socratic Debate (Dr. Nova & Kaito)",
          "title": "Socratic Debate: Diagnostic Framework: Visual Fairness Pipeline",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Dr. Nova, looking at this workflow diagram for diagnostic framework: visual fairness pipeline, how does the architectural flow enforce system stability?"
            },
            {
              "speaker": "Dr. Nova",
              "text": "This architecture diagram visualizes how physical observations transition across sampling boundaries into discrete tensor representations. Tracking each transition stage prevents undocumented transformations from corrupting the empirical distribution."
            }
          ],
          "contentHtml": "<div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[4px_4px_0px_#151b20] my-2 overflow-x-auto text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-2 text-left flex items-center justify-between border-b-2 border-[#151b20]/15 pb-1\">\n    <span class=\"flex items-center gap-1.5\">\n      <span>📊 Architecture &amp; Workflow Diagram</span>\n      <span class=\"text-[#151b20]/40\">•</span>\n      <span class=\"text-[#334155]\">System Flowchart</span>\n    </span>\n    <span class=\"text-[#0e7490] text-[9px] font-mono bg-[#c9f3f4] px-1.5 py-0.5 rounded border border-[#151b20]\">Mermaid SVG</span>\n  </div>\n  <pre class=\"mermaid py-1 flex justify-center text-xs overflow-x-auto leading-normal\">flowchart TD\n    Model[\"Trained Model Probabilities S\"] --> SliceData[\"1. Slice Observations Across Intersectional Subgroups\"]\n    SliceData --> MetricMatrix[\"2. Construct Multi-Metric Disparity Heatmap\"]\n    MetricMatrix --> CalibCheck{\"Check Calibration Curves\"}\n    CalibCheck -- \"Calibration Disparities Detected\" --> CalibRepair[\"Apply Group-Specific Isotonic Regression\"]\n    CalibCheck -- \"Calibration Satisfied\" --> ROCCheck[\"3. Intersect ROC Convex Hulls for Threshold Optimization\"]\n    ROCCheck --> Deploy{\"Disparity Within Legal Limits?\"}\n    Deploy -- \"DIR >= 0.80 and AOD <= 0.05\" --> Production[\"Approved for Regulated Production Deployment\"]\n    Deploy -- \"Disparities Violate Thresholds\" --> InProcessing[\"Trigger In-Processing Adversarial / Reductions Retraining\"]\n\n    classDef blue fill:#c9f3f4,stroke:#151b20,stroke-width:2px,color:#151b20;\n    classDef amber fill:#fff0b9,stroke:#151b20,stroke-width:2px,color:#151b20;\n    classDef green fill:#e7f4c8,stroke:#151b20,stroke-width:2px,color:#151b20;\n\n    class Model,SliceData blue;\n    class MetricMatrix,CalibCheck,ROCCheck,Deploy amber;\n    class Production,CalibRepair,InProcessing green;</pre>\n</div><div class=\"p-3 rounded-xl bg-[#f6fcf4] border-2 border-[#151b20] shadow-[3px_3px_0px_#15803d] text-xs my-2 leading-relaxed font-sans text-[#151b20]\">\n  <strong class=\"block mb-0.5 font-black uppercase tracking-wider font-mono text-[10px] text-[#15803d]\">💡 Industrial Best Practice</strong>\n  <span class=\"font-medium\">Never compute aggregate accuracy without grouping. In continuous integration pipelines, instantiate a MetricFrame tracking selection rate, false positive rate, and error rate across every demographic slice on every model checkpoint commit (Weerts, 20</span>\n</div>"
        }
      },
      {
        "id": "s7",
        "title": "Production Implementation: Fairlearn Disparity Engine & ROC Frontier",
        "type": "code",
        "solo": {
          "speaker": "Dr. Nova (Senior Architect)",
          "title": "Production Implementation: Fairlearn Disparity Engine & ROC Frontier",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Production Implementation: Fairlearn Disparity Engine & ROC Frontier. Always enforce schema contracts at the ingestion boundary before raw records enter memory. Using Pydantic or zero-copy Arrow prevents unvalidated floats and untyped strings from silently polluting downstream tensors."
            }
          ],
          "contentHtml": "<div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] font-mono text-xs overflow-x-auto shadow-[4px_4px_0px_#151b20] my-2\">\n  <div class=\"text-[10px] text-[#0e7490] font-black mb-1.5 uppercase tracking-wider pb-1 border-b-2 border-[#151b20]/15 flex items-center justify-between\">\n    <span>Production Implementation / Type-Safe Listing:</span>\n    <span class=\"text-[#151b20] text-[9px] bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Python 3.10+</span>\n  </div>\n  <pre class=\"leading-relaxed bg-[#fffaf0] p-2.5 rounded-lg border border-[#151b20] text-[#151b20] overflow-x-auto\"><code># fairness_visualization_engine.py\n# Multi-Metric Disparity Matrix, Subgroup Calibration, and ROC Convex Hull Intersector\n\nfrom typing import Dict, Any, Tuple, List\nimport numpy as np\nimport pandas as pd\nfrom sklearn.metrics import roc_curve\n\nclass FairnessVisualAuditor:\n    # Computes group-specific performance curves, disparity matrices, and Equalized Odds thresholds\n    def __init__(self, y_true: np.ndarray, y_prob: np.ndarray, group: np.ndarray):\n        self.y = np.asarray(y_true, dtype=int)\n        self.p = np.asarray(y_prob, dtype=float)\n        self.g = np.asarray(group, dtype=int)\n\n    def compute_metric_disparity_table(self, threshold: float = 0.50) -&gt; pd.DataFrame:\n        # Generates a comprehensive comparative metric frame across groups\n        y_pred = (self.p &gt;= threshold).astype(int)\n        df = pd.DataFrame({&quot;y&quot;: self.y,</code></pre>\n</div>"
        },
        "duo": {
          "speaker": "Socratic Debate (Dr. Nova & Kaito)",
          "title": "Socratic Debate: Production Implementation: Fairlearn Disparity Engine & ROC Frontier",
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
          "contentHtml": "<div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] font-mono text-xs overflow-x-auto shadow-[4px_4px_0px_#151b20] my-2\">\n  <div class=\"text-[10px] text-[#0e7490] font-black mb-1.5 uppercase tracking-wider pb-1 border-b-2 border-[#151b20]/15 flex items-center justify-between\">\n    <span>Production Implementation / Type-Safe Listing:</span>\n    <span class=\"text-[#151b20] text-[9px] bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Python 3.10+</span>\n  </div>\n  <pre class=\"leading-relaxed bg-[#fffaf0] p-2.5 rounded-lg border border-[#151b20] text-[#151b20] overflow-x-auto\"><code># fairness_visualization_engine.py\n# Multi-Metric Disparity Matrix, Subgroup Calibration, and ROC Convex Hull Intersector\n\nfrom typing import Dict, Any, Tuple, List\nimport numpy as np\nimport pandas as pd\nfrom sklearn.metrics import roc_curve\n\nclass FairnessVisualAuditor:\n    # Computes group-specific performance curves, disparity matrices, and Equalized Odds thresholds\n    def __init__(self, y_true: np.ndarray, y_prob: np.ndarray, group: np.ndarray):\n        self.y = np.asarray(y_true, dtype=int)\n        self.p = np.asarray(y_prob, dtype=float)\n        self.g = np.asarray(group, dtype=int)\n\n    def compute_metric_disparity_table(self, threshold: float = 0.50) -&gt; pd.DataFrame:\n        # Generates a comprehensive comparative metric frame across groups\n        y_pred = (self.p &gt;= threshold).astype(int)\n        df = pd.DataFrame({&quot;y&quot;: self.y,</code></pre>\n</div>"
        }
      },
      {
        "id": "s8",
        "title": "Empirical Case Study: Facial Analysis Systems & Healthcare Slicing",
        "type": "bullets",
        "solo": {
          "speaker": "Dr. Nova (Senior Architect)",
          "title": "Empirical Case Study: Facial Analysis Systems & Healthcare Slicing",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Empirical Case Study: Facial Analysis Systems & Healthcare Slicing. Systems collapse when models mistake collection artifacts for real-world signals. In ICU sepsis models, observation frequency became a confounder; in autonomous robotics, a 50-millisecond timestamp jitter causes a 1.4-meter bounding box dislocation at highway speeds."
            }
          ],
          "contentHtml": "<div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">◆</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">Gender Shades Intersectional Benchmark</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">((Buolamwini &amp; Gebru, 2018)): Auditing commercial computer vision systems (IBM, Microsoft, Face++) using overall aggregate error rates ($8\\%-12\\%$) concealed severe intersectional failure. Visualizing error rates across an intersectional $2 \\times 2$ grid (Skin Type $\\times$ Gender) revealed that lighter males achieved near-perfect accuracy ($99.2\\%$), while darker females suffered catastrophic error rates up to $34.7\\%$. The visual clarity of the disparity charts forced tech companies to overhaul facial recognition architectures within 7 months (Buolamwini, 2018).</span>\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">▸</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">Clinical Sepsis Triage Tooling Disparities</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">A multi-hospital healthcare network implemented a sepsis early-warning dashboard. Aggregate ROC-AUC was $0.86$. Slicing by age and race using Fairlearn exposed that for elderly psychiatric patients, the false alarm rate was $64\\%$ versus $18\\%$ for general medical patients, causing severe alarm fatigue among nursing staff.</span>\n  </div>\n</div>"
        },
        "duo": {
          "speaker": "Socratic Debate (Dr. Nova & Kaito)",
          "title": "Socratic Debate: Empirical Case Study: Facial Analysis Systems & Healthcare Slicing",
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
          "contentHtml": "<div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">◆</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">Gender Shades Intersectional Benchmark</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">((Buolamwini &amp; Gebru, 2018)): Auditing commercial computer vision systems (IBM, Microsoft, Face++) using overall aggregate error rates ($8\\%-12\\%$) concealed severe intersectional failure. Visualizing error rates across an intersectional $2 \\times 2$ grid (Skin Type $\\times$ Gender) revealed that lighter males achieved near-perfect accuracy ($99.2\\%$), while darker females suffered catastrophic error rates up to $34.7\\%$. The visual clarity of the disparity charts forced tech companies to overhaul facial recognition architectures within 7 months (Buolamwini, 2018).</span>\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">▸</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">Clinical Sepsis Triage Tooling Disparities</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">A multi-hospital healthcare network implemented a sepsis early-warning dashboard. Aggregate ROC-AUC was $0.86$. Slicing by age and race using Fairlearn exposed that for elderly psychiatric patients, the false alarm rate was $64\\%$ versus $18\\%$ for general medical patients, causing severe alarm fatigue among nursing staff.</span>\n  </div>\n</div>"
        }
      },
      {
        "id": "s9",
        "title": "Interactive Lab: Explore Fairness Visualization Studio",
        "type": "tool",
        "solo": {
          "speaker": "Dr. Nova (Senior Architect)",
          "title": "Interactive Lab: Explore Fairness Visualization Studio",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Interactive Lab: Explore Fairness Visualization Studio. Scroll directly beneath this presentation player to the live laboratory. Run the failure injection to observe how unvalidated anomalies trigger compounding cascades across downstream tensors. Hands-on testing proves why boundary schema contracts are mandatory."
            }
          ],
          "contentHtml": "<div class=\"p-4 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[4px_4px_0px_#22bfd7] my-2\">\n  <div class=\"flex items-center justify-between border-b-2 border-[#151b20]/15 pb-2 mb-2.5 flex-wrap gap-2\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"px-2.5 py-1 rounded-lg bg-[#c9f3f4] text-[#0e7490] font-mono font-black text-xs border border-[#151b20] shadow-[1px_1px_0px_#151b20] uppercase tracking-wider\">🔬 Interactive Lab</span>\n      <span class=\"text-xs font-mono font-black text-[#151b20]\">Explore Fairness Visualization Studio</span>\n    </div>\n    <span class=\"text-[10px] font-mono text-[#0e7490] bg-[#fffaf0] px-2 py-0.5 rounded border border-[#151b20]\">Located Below on Page ↓</span>\n  </div>\n  <p class=\"text-xs text-[#334155] mb-3 leading-relaxed font-medium\">Plot subgroup calibration curves, interactively tune dual group decision thresholds, and inspect ROC Pareto frontiers.</p>\n  <div class=\"bg-[#f6f0dc] p-3 rounded-xl border-2 border-[#151b20] space-y-2 text-xs\">\n    <span class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider block border-b border-[#151b20]/20 pb-1\">⚡ Recommended Hands-On Experiment:</span>\n    <div class=\"flex items-start gap-2 text-[#334155]\">\n  <span class=\"text-[#0e7490] font-bold font-mono text-xs\">1.</span>\n  <span class=\"text-xs leading-relaxed\">Scroll down to the interactive workbench section below the slide player to access the live laboratory.</span>\n</div><div class=\"flex items-start gap-2 text-[#334155]\">\n  <span class=\"text-[#0e7490] font-bold font-mono text-xs\">2.</span>\n  <span class=\"text-xs leading-relaxed\">Click &#x27;Launch Representation Workbench →&#x27; to examine baseline state, then trigger &#x27;Inject anomaly / Run test&#x27; to simulate failure modes.</span>\n</div><div class=\"flex items-start gap-2 text-[#334155]\">\n  <span class=\"text-[#0e7490] font-bold font-mono text-xs\">3.</span>\n  <span class=\"text-xs leading-relaxed\">Audit telemetry metrics and observe how defensive schema contracts guard downstream models.</span>\n</div>\n  </div>\n</div>"
        },
        "duo": {
          "speaker": "Socratic Debate (Dr. Nova & Kaito)",
          "title": "Socratic Debate: Interactive Lab: Explore Fairness Visualization Studio",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Dr. Nova, what specific failure mode should I look for when I use the explore fairness visualization studio located below this player?"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Scroll directly beneath this presentation player to the live laboratory. Run the failure injection to observe how unvalidated anomalies trigger compounding cascades across downstream tensors. Hands-on testing proves why boundary schema contracts are mandatory."
            }
          ],
          "contentHtml": "<div class=\"p-4 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[4px_4px_0px_#22bfd7] my-2\">\n  <div class=\"flex items-center justify-between border-b-2 border-[#151b20]/15 pb-2 mb-2.5 flex-wrap gap-2\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"px-2.5 py-1 rounded-lg bg-[#c9f3f4] text-[#0e7490] font-mono font-black text-xs border border-[#151b20] shadow-[1px_1px_0px_#151b20] uppercase tracking-wider\">🔬 Interactive Lab</span>\n      <span class=\"text-xs font-mono font-black text-[#151b20]\">Explore Fairness Visualization Studio</span>\n    </div>\n    <span class=\"text-[10px] font-mono text-[#0e7490] bg-[#fffaf0] px-2 py-0.5 rounded border border-[#151b20]\">Located Below on Page ↓</span>\n  </div>\n  <p class=\"text-xs text-[#334155] mb-3 leading-relaxed font-medium\">Plot subgroup calibration curves, interactively tune dual group decision thresholds, and inspect ROC Pareto frontiers.</p>\n  <div class=\"bg-[#f6f0dc] p-3 rounded-xl border-2 border-[#151b20] space-y-2 text-xs\">\n    <span class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider block border-b border-[#151b20]/20 pb-1\">⚡ Recommended Hands-On Experiment:</span>\n    <div class=\"flex items-start gap-2 text-[#334155]\">\n  <span class=\"text-[#0e7490] font-bold font-mono text-xs\">1.</span>\n  <span class=\"text-xs leading-relaxed\">Scroll down to the interactive workbench section below the slide player to access the live laboratory.</span>\n</div><div class=\"flex items-start gap-2 text-[#334155]\">\n  <span class=\"text-[#0e7490] font-bold font-mono text-xs\">2.</span>\n  <span class=\"text-xs leading-relaxed\">Click &#x27;Launch Representation Workbench →&#x27; to examine baseline state, then trigger &#x27;Inject anomaly / Run test&#x27; to simulate failure modes.</span>\n</div><div class=\"flex items-start gap-2 text-[#334155]\">\n  <span class=\"text-[#0e7490] font-bold font-mono text-xs\">3.</span>\n  <span class=\"text-xs leading-relaxed\">Audit telemetry metrics and observe how defensive schema contracts guard downstream models.</span>\n</div>\n  </div>\n</div>"
        }
      }
    ]
  },
  "ch7_p5": {
    "chapter": 7,
    "part": 5,
    "key": "ch7_p5",
    "badge": "◆ TRACK 7 • LESSON 7.5: SOCIETAL, LEGAL, AND OPERATIONAL IMPACTS OF DATASET BIAS",
    "index": "Lesson 5 of 10",
    "lessonTitle": "Societal, Legal, and Operational Impacts of Dataset Bias",
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
              "text": "Welcome to Lesson 7.5. Today we examine societal, legal, and operational impacts of dataset bias, establishing the mathematical foundations and production discipline required to guarantee dataset reliability."
            }
          ],
          "contentHtml": "<div class=\"p-6 md:p-8 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#22bfd7] text-center space-y-4\">\n  <div class=\"inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#c9f3f4] text-[#0e7490] font-mono text-xs border-2 border-[#151b20] font-black uppercase tracking-wider shadow-[2px_2px_0px_#151b20]\">\n    <span>◆ Track 7: Foundations</span>\n    <span>•</span>\n    <span>Lesson 7.5</span>\n  </div>\n  <h2 class=\"text-2xl md:text-3xl font-black text-[#151b20] tracking-tight\">\n    Societal, Legal, and Operational Impacts of Dataset Bias\n  </h2>\n  <p class=\"text-sm md:text-base text-[#334155] max-w-2xl mx-auto leading-relaxed font-medium\">\n    Deep dive into societal, legal, and operational impacts of dataset bias with formal mathematical formulations, production engineering, and failure-mode analysis.\n  </p>\n  <div class=\"pt-2 flex flex-wrap items-center justify-center gap-2 font-mono text-xs\">\n    <span class=\"px-2.5 py-1 rounded-lg bg-[#fff0b9] border border-[#151b20] font-bold text-[#151b20]\">📐 Formal Foundations</span>\n    <span class=\"px-2.5 py-1 rounded-lg bg-[#ffd8ce] border border-[#151b20] font-bold text-[#151b20]\">⚠️ Failure Modes</span>\n    <span class=\"px-2.5 py-1 rounded-lg bg-[#c9f3f4] border border-[#151b20] font-bold text-[#151b20]\">🛡️ Production Contracts</span>\n  </div>\n</div>"
        },
        "duo": {
          "speaker": "Socratic Debate (Dr. Nova & Kaito)",
          "title": "Socratic Debate: Societal, Legal, and Operational Impacts of Dataset Bias",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Dr. Nova, what is the core architectural challenge we are solving in Lesson 7.5?"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Welcome to Lesson 7.5. Today we examine societal, legal, and operational impacts of dataset bias, establishing the mathematical foundations and production discipline required to guarantee dataset reliability."
            }
          ],
          "contentHtml": "<div class=\"p-6 md:p-8 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#22bfd7] text-center space-y-4\">\n  <div class=\"inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#c9f3f4] text-[#0e7490] font-mono text-xs border-2 border-[#151b20] font-black uppercase tracking-wider shadow-[2px_2px_0px_#151b20]\">\n    <span>◆ Track 7: Foundations</span>\n    <span>•</span>\n    <span>Lesson 7.5</span>\n  </div>\n  <h2 class=\"text-2xl md:text-3xl font-black text-[#151b20] tracking-tight\">\n    Societal, Legal, and Operational Impacts of Dataset Bias\n  </h2>\n  <p class=\"text-sm md:text-base text-[#334155] max-w-2xl mx-auto leading-relaxed font-medium\">\n    Deep dive into societal, legal, and operational impacts of dataset bias with formal mathematical formulations, production engineering, and failure-mode analysis.\n  </p>\n  <div class=\"pt-2 flex flex-wrap items-center justify-center gap-2 font-mono text-xs\">\n    <span class=\"px-2.5 py-1 rounded-lg bg-[#fff0b9] border border-[#151b20] font-bold text-[#151b20]\">📐 Formal Foundations</span>\n    <span class=\"px-2.5 py-1 rounded-lg bg-[#ffd8ce] border border-[#151b20] font-bold text-[#151b20]\">⚠️ Failure Modes</span>\n    <span class=\"px-2.5 py-1 rounded-lg bg-[#c9f3f4] border border-[#151b20] font-bold text-[#151b20]\">🛡️ Production Contracts</span>\n  </div>\n</div>"
        }
      },
      {
        "id": "s2",
        "title": "Conceptual Overview & Cascading Harm Dynamics: Mathematical Formulations of Compounding Harm Dynamics",
        "type": "equation",
        "solo": {
          "speaker": "Dr. Nova (Senior Architect)",
          "title": "Conceptual Overview & Cascading Harm Dynamics: Mathematical Formulations of Compounding Harm Dynamics",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Conceptual Overview & Cascading Harm Dynamics: Mathematical Formulations of Compounding Harm Dynamics. Formalizing the empirical sample mathematically reveals that empirical risk only approximates true generalization risk when the i.i.d. assumption holds. When upstream sampling is biased, the empirical risk diverges asymptotically from true risk—no model tuning can fix that."
            }
          ],
          "contentHtml": "<div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] my-2 text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-1 text-left flex items-center justify-between\">\n    <span>📐 Mathematical Formulation</span>\n    <span class=\"text-[#151b20] text-[9px] font-mono bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Empirical Sample Formulation</span>\n  </div>\n  <div class=\"text-base md:text-lg font-serif text-[#151b20] py-1 overflow-x-auto bg-[#f0fbfd] border border-[#0e7490] rounded-lg my-1\">\n    $$U_a = \\int_{\\mathbf{x}} \\left( b \\cdot y(\\mathbf{x}) - c \\right) \\Pr(\\hat{Y} = 1 \\mid \\mathbf{X} = \\mathbf{x}) dF_a(\\mathbf{x})$$\n  </div>\n</div><div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] my-2 text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-1 text-left flex items-center justify-between\">\n    <span>📐 Mathematical Formulation</span>\n    <span class=\"text-[#151b20] text-[9px] font-mono bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Distribution Measure</span>\n  </div>\n  <div class=\"text-base md:text-lg font-serif text-[#151b20] py-1 overflow-x-auto bg-[#f0fbfd] border border-[#0e7490] rounded-lg my-1\">\n    $$W_{t+1}(a) = W_t(a) \\cdot \\left[ 1 + r \\cdot \\mathbb{I}(\\hat{Y}_t = 1) \\right] - \\text{LivingCost}$$\n  </div>\n</div><div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] my-2 text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-1 text-left flex items-center justify-between\">\n    <span>📐 Mathematical Formulation</span>\n    <span class=\"text-[#151b20] text-[9px] font-mono bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Empirical Risk Proxy</span>\n  </div>\n  <div class=\"text-base md:text-lg font-serif text-[#151b20] py-1 overflow-x-auto bg-[#f0fbfd] border border-[#0e7490] rounded-lg my-1\">\n    $$\\frac{\\mathbb{E}[W_T(1)]}{\\mathbb{E}[W_T(0)]} \\propto (1 + r)^T$$\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">◆</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">When automated decision</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">systems fail to account for dataset bias, the impacts compound across institutional generations (Selbst, 2019).</span>\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">▸</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">Consider an institution</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">granting loans or interviews.</span>\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">⚡</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">When models exhibit</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">disparate accuracy, $U_0 \\ll U_1$, generating substantial wealth extraction from unprivileged communities.</span>\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">💡</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">When algorithms use</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">historical healthcare cost $C$ as a target proxy for illness severity $Y$: Because systemic access barriers cause less money to be spent on Black patients at every level of chronic illness, predicting expenditure systematically depresses predicted illness severity for Black patients by over $26\\%$, denying millions access to critical care programs.</span>\n  </div>\n</div>"
        },
        "duo": {
          "speaker": "Socratic Debate (Dr. Nova & Kaito)",
          "title": "Socratic Debate: Conceptual Overview & Cascading Harm Dynamics: Mathematical Formulations of Compounding Harm Dynamics",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Dr. Nova, how does conceptual overview & cascading harm dynamics: mathematical formulations of compounding harm dynamics protect our system against silent distribution shift in production?"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Formalizing the empirical sample mathematically reveals that empirical risk only approximates true generalization risk when the i.i.d. assumption holds. When upstream sampling is biased, the empirical risk diverges asymptotically from true risk—no model tuning can fix that."
            }
          ],
          "contentHtml": "<div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] my-2 text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-1 text-left flex items-center justify-between\">\n    <span>📐 Mathematical Formulation</span>\n    <span class=\"text-[#151b20] text-[9px] font-mono bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Empirical Sample Formulation</span>\n  </div>\n  <div class=\"text-base md:text-lg font-serif text-[#151b20] py-1 overflow-x-auto bg-[#f0fbfd] border border-[#0e7490] rounded-lg my-1\">\n    $$U_a = \\int_{\\mathbf{x}} \\left( b \\cdot y(\\mathbf{x}) - c \\right) \\Pr(\\hat{Y} = 1 \\mid \\mathbf{X} = \\mathbf{x}) dF_a(\\mathbf{x})$$\n  </div>\n</div><div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] my-2 text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-1 text-left flex items-center justify-between\">\n    <span>📐 Mathematical Formulation</span>\n    <span class=\"text-[#151b20] text-[9px] font-mono bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Distribution Measure</span>\n  </div>\n  <div class=\"text-base md:text-lg font-serif text-[#151b20] py-1 overflow-x-auto bg-[#f0fbfd] border border-[#0e7490] rounded-lg my-1\">\n    $$W_{t+1}(a) = W_t(a) \\cdot \\left[ 1 + r \\cdot \\mathbb{I}(\\hat{Y}_t = 1) \\right] - \\text{LivingCost}$$\n  </div>\n</div><div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] my-2 text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-1 text-left flex items-center justify-between\">\n    <span>📐 Mathematical Formulation</span>\n    <span class=\"text-[#151b20] text-[9px] font-mono bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Empirical Risk Proxy</span>\n  </div>\n  <div class=\"text-base md:text-lg font-serif text-[#151b20] py-1 overflow-x-auto bg-[#f0fbfd] border border-[#0e7490] rounded-lg my-1\">\n    $$\\frac{\\mathbb{E}[W_T(1)]}{\\mathbb{E}[W_T(0)]} \\propto (1 + r)^T$$\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">◆</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">When automated decision</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">systems fail to account for dataset bias, the impacts compound across institutional generations (Selbst, 2019).</span>\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">▸</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">Consider an institution</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">granting loans or interviews.</span>\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">⚡</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">When models exhibit</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">disparate accuracy, $U_0 \\ll U_1$, generating substantial wealth extraction from unprivileged communities.</span>\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">💡</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">When algorithms use</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">historical healthcare cost $C$ as a target proxy for illness severity $Y$: Because systemic access barriers cause less money to be spent on Black patients at every level of chronic illness, predicting expenditure systematically depresses predicted illness severity for Black patients by over $26\\%$, denying millions access to critical care programs.</span>\n  </div>\n</div>"
        }
      },
      {
        "id": "s3",
        "title": "Conceptual Overview & Cascading Harm Dynamics: Architecture Flowchart",
        "type": "figure",
        "solo": {
          "speaker": "Dr. Nova (Senior Architect)",
          "title": "Conceptual Overview & Cascading Harm Dynamics: Architecture Flowchart",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Conceptual Overview & Cascading Harm Dynamics: Architecture Flowchart. This architecture diagram visualizes how physical observations transition across sampling boundaries into discrete tensor representations. Tracking each transition stage prevents undocumented transformations from corrupting the empirical distribution."
            }
          ],
          "contentHtml": "<div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[4px_4px_0px_#151b20] my-2 overflow-x-auto text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-2 text-left flex items-center justify-between border-b-2 border-[#151b20]/15 pb-1\">\n    <span class=\"flex items-center gap-1.5\">\n      <span>📊 Architecture &amp; Workflow Diagram</span>\n      <span class=\"text-[#151b20]/40\">•</span>\n      <span class=\"text-[#334155]\">System Flowchart</span>\n    </span>\n    <span class=\"text-[#0e7490] text-[9px] font-mono bg-[#c9f3f4] px-1.5 py-0.5 rounded border border-[#151b20]\">Mermaid SVG</span>\n  </div>\n  <pre class=\"mermaid py-1 flex justify-center text-xs overflow-x-auto leading-normal\">flowchart TD\n    BiasedModel[\"Biased Decision Engine f(x)\"] --> Harm1[\"Criminal Justice: Disparate Bail Denial & Pre-Trial Detention\"]\n    BiasedModel --> Harm2[\"Healthcare: Under-Allocation of Chronic Care Management\"]\n    BiasedModel --> Harm3[\"Financial Lending: Redlining & Credit Ceiling Disparities\"]\n    BiasedModel --> Harm4[\"Regulatory Sanctions: GDPR, EU AI Act, FTC Enforcement\"]\n\n    Harm1 & Harm2 & Harm3 --> CumulativeLoss[\"Intergenerational Wealth & Well-Being Depletion\"]\n\n    classDef blue fill:#c9f3f4,stroke:#151b20,stroke-width:2px,color:#151b20;\n    classDef red fill:#ffd8ce,stroke:#151b20,stroke-width:2px,color:#151b20;\n    classDef amber fill:#fff0b9,stroke:#151b20,stroke-width:2px,color:#151b20;\n\n    class BiasedModel blue;\n    class Harm1,Harm2,Harm3,Harm4 red;\n    class CumulativeLoss amber;</pre>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">◆</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">When automated decision</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">systems fail to account for dataset bias, the impacts compound across institutional generations (Selbst, 2019).</span>\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">▸</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">Consider an institution</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">granting loans or interviews.</span>\n  </div>\n</div>"
        },
        "duo": {
          "speaker": "Socratic Debate (Dr. Nova & Kaito)",
          "title": "Socratic Debate: Conceptual Overview & Cascading Harm Dynamics: Architecture Flowchart",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Dr. Nova, looking at this workflow diagram for conceptual overview & cascading harm dynamics: architecture flowchart, how does the architectural flow enforce system stability?"
            },
            {
              "speaker": "Dr. Nova",
              "text": "This architecture diagram visualizes how physical observations transition across sampling boundaries into discrete tensor representations. Tracking each transition stage prevents undocumented transformations from corrupting the empirical distribution."
            }
          ],
          "contentHtml": "<div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[4px_4px_0px_#151b20] my-2 overflow-x-auto text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-2 text-left flex items-center justify-between border-b-2 border-[#151b20]/15 pb-1\">\n    <span class=\"flex items-center gap-1.5\">\n      <span>📊 Architecture &amp; Workflow Diagram</span>\n      <span class=\"text-[#151b20]/40\">•</span>\n      <span class=\"text-[#334155]\">System Flowchart</span>\n    </span>\n    <span class=\"text-[#0e7490] text-[9px] font-mono bg-[#c9f3f4] px-1.5 py-0.5 rounded border border-[#151b20]\">Mermaid SVG</span>\n  </div>\n  <pre class=\"mermaid py-1 flex justify-center text-xs overflow-x-auto leading-normal\">flowchart TD\n    BiasedModel[\"Biased Decision Engine f(x)\"] --> Harm1[\"Criminal Justice: Disparate Bail Denial & Pre-Trial Detention\"]\n    BiasedModel --> Harm2[\"Healthcare: Under-Allocation of Chronic Care Management\"]\n    BiasedModel --> Harm3[\"Financial Lending: Redlining & Credit Ceiling Disparities\"]\n    BiasedModel --> Harm4[\"Regulatory Sanctions: GDPR, EU AI Act, FTC Enforcement\"]\n\n    Harm1 & Harm2 & Harm3 --> CumulativeLoss[\"Intergenerational Wealth & Well-Being Depletion\"]\n\n    classDef blue fill:#c9f3f4,stroke:#151b20,stroke-width:2px,color:#151b20;\n    classDef red fill:#ffd8ce,stroke:#151b20,stroke-width:2px,color:#151b20;\n    classDef amber fill:#fff0b9,stroke:#151b20,stroke-width:2px,color:#151b20;\n\n    class BiasedModel blue;\n    class Harm1,Harm2,Harm3,Harm4 red;\n    class CumulativeLoss amber;</pre>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">◆</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">When automated decision</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">systems fail to account for dataset bias, the impacts compound across institutional generations (Selbst, 2019).</span>\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">▸</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">Consider an institution</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">granting loans or interviews.</span>\n  </div>\n</div>"
        }
      },
      {
        "id": "s4",
        "title": "Legal & Regulatory Liabilities",
        "type": "bullets",
        "solo": {
          "speaker": "Dr. Nova (Senior Architect)",
          "title": "Legal & Regulatory Liabilities",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Legal & Regulatory Liabilities. In production engineering, this principle establishes reliability and reproducibility. Statute | Jurisdiction | Legal Liability & Scope | Maximum Penalty | | :--- | :--- | :--- | :--- | | EU Artificial Intelligence Act (2024) | European Union | Article 10 mandates that training datasets for High-Risk AI must be relevant, representative, and free of discriminatory errors."
            }
          ],
          "contentHtml": "<div class=\"p-3 rounded-xl bg-[#f6fcf4] border-2 border-[#151b20] shadow-[3px_3px_0px_#15803d] text-xs my-2 leading-relaxed font-sans text-[#151b20]\">\n  <strong class=\"block mb-0.5 font-black uppercase tracking-wider font-mono text-[10px] text-[#15803d]\">💡 Industrial Best Practice</strong>\n  <span class=\"font-medium\">The US Federal Trade Commission (FTC) frequently orders Algorithmic Disgorgement: companies caught deploying models trained on unlawfully collected or discriminatory data are ordered to completely destroy the trained weights, code, and algorithms. Ma</span>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">◆</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">| Regulation /</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">Statute | Jurisdiction | Legal Liability &amp; Scope | Maximum Penalty | | :--- | :--- | :--- | :--- | | EU Artificial Intelligence Act (2024) | European Union | Article 10 mandates that training datasets for High-Risk AI must be relevant, representative, and free of discriminatory errors.</span>\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">▸</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">| Enforced model</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">disgorgement (destroying algorithms and data) |</span>\n  </div>\n</div>"
        },
        "duo": {
          "speaker": "Socratic Debate (Dr. Nova & Kaito)",
          "title": "Socratic Debate: Legal & Regulatory Liabilities",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Dr. Nova, what makes legal & regulatory liabilities essential for robust machine learning?"
            },
            {
              "speaker": "Dr. Nova",
              "text": "In production engineering, this principle establishes reliability and reproducibility. Statute | Jurisdiction | Legal Liability & Scope | Maximum Penalty | | :--- | :--- | :--- | :--- | | EU Artificial Intelligence Act (2024) | European Union | Article 10 mandates that training datasets for High-Risk AI must be relevant, representative, and free of discriminatory errors."
            }
          ],
          "contentHtml": "<div class=\"p-3 rounded-xl bg-[#f6fcf4] border-2 border-[#151b20] shadow-[3px_3px_0px_#15803d] text-xs my-2 leading-relaxed font-sans text-[#151b20]\">\n  <strong class=\"block mb-0.5 font-black uppercase tracking-wider font-mono text-[10px] text-[#15803d]\">💡 Industrial Best Practice</strong>\n  <span class=\"font-medium\">The US Federal Trade Commission (FTC) frequently orders Algorithmic Disgorgement: companies caught deploying models trained on unlawfully collected or discriminatory data are ordered to completely destroy the trained weights, code, and algorithms. Ma</span>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">◆</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">| Regulation /</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">Statute | Jurisdiction | Legal Liability &amp; Scope | Maximum Penalty | | :--- | :--- | :--- | :--- | | EU Artificial Intelligence Act (2024) | European Union | Article 10 mandates that training datasets for High-Risk AI must be relevant, representative, and free of discriminatory errors.</span>\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">▸</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">| Enforced model</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">disgorgement (destroying algorithms and data) |</span>\n  </div>\n</div>"
        }
      },
      {
        "id": "s5",
        "title": "Production Implementation: Chouldechova Impossibility Verifier",
        "type": "code",
        "solo": {
          "speaker": "Dr. Nova (Senior Architect)",
          "title": "Production Implementation: Chouldechova Impossibility Verifier",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Production Implementation: Chouldechova Impossibility Verifier. Always enforce schema contracts at the ingestion boundary before raw records enter memory. Using Pydantic or zero-copy Arrow prevents unvalidated floats and untyped strings from silently polluting downstream tensors."
            }
          ],
          "contentHtml": "<div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] font-mono text-xs overflow-x-auto shadow-[4px_4px_0px_#151b20] my-2\">\n  <div class=\"text-[10px] text-[#0e7490] font-black mb-1.5 uppercase tracking-wider pb-1 border-b-2 border-[#151b20]/15 flex items-center justify-between\">\n    <span>Production Implementation / Type-Safe Listing:</span>\n    <span class=\"text-[#151b20] text-[9px] bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Python 3.10+</span>\n  </div>\n  <pre class=\"leading-relaxed bg-[#fffaf0] p-2.5 rounded-lg border border-[#151b20] text-[#151b20] overflow-x-auto\"><code># chouldechova_impossibility.py\n# Verification of Chouldechova&#x27;s Impossibility Theorem: Calibration vs. False Positive Rates\n\nfrom typing import Dict, Any, Tuple\nimport numpy as np\nimport pandas as pd\n\ndef verify_chouldechova_theorem(p0: float = 0.50, p1: float = 0.30, \n                                ppv: float = 0.65, tpr: float = 0.70) -&gt; Dict[str, float]:\n    # Calculates theoretical FPR for two groups with base rates p0 and p1 under identical PPV and TPR:\n    # FPR = (p / (1 - p)) * ((1 - PPV) / PPV) * TPR\n    odds_factor = (1.0 - ppv) / ppv\n    \n    fpr0 = (p0 / (1.0 - p0)) * odds_factor * tpr\n    fpr1 = (p1 / (1.0 - p1)) * odds_factor * tpr\n\n    disparity_ratio = fpr0 / fpr1 if fpr1 &gt; 0 else float(&quot;inf&quot;)\n\n    return {\n        &quot;base_rate_group0&quot;: p0,\n        &quot;base_rate_group1&quot;: p1,\n        &quot;enforced_ppv&quot;: ppv,\n        &quot;enforced_tpr&quot;</code></pre>\n</div>"
        },
        "duo": {
          "speaker": "Socratic Debate (Dr. Nova & Kaito)",
          "title": "Socratic Debate: Production Implementation: Chouldechova Impossibility Verifier",
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
          "contentHtml": "<div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] font-mono text-xs overflow-x-auto shadow-[4px_4px_0px_#151b20] my-2\">\n  <div class=\"text-[10px] text-[#0e7490] font-black mb-1.5 uppercase tracking-wider pb-1 border-b-2 border-[#151b20]/15 flex items-center justify-between\">\n    <span>Production Implementation / Type-Safe Listing:</span>\n    <span class=\"text-[#151b20] text-[9px] bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Python 3.10+</span>\n  </div>\n  <pre class=\"leading-relaxed bg-[#fffaf0] p-2.5 rounded-lg border border-[#151b20] text-[#151b20] overflow-x-auto\"><code># chouldechova_impossibility.py\n# Verification of Chouldechova&#x27;s Impossibility Theorem: Calibration vs. False Positive Rates\n\nfrom typing import Dict, Any, Tuple\nimport numpy as np\nimport pandas as pd\n\ndef verify_chouldechova_theorem(p0: float = 0.50, p1: float = 0.30, \n                                ppv: float = 0.65, tpr: float = 0.70) -&gt; Dict[str, float]:\n    # Calculates theoretical FPR for two groups with base rates p0 and p1 under identical PPV and TPR:\n    # FPR = (p / (1 - p)) * ((1 - PPV) / PPV) * TPR\n    odds_factor = (1.0 - ppv) / ppv\n    \n    fpr0 = (p0 / (1.0 - p0)) * odds_factor * tpr\n    fpr1 = (p1 / (1.0 - p1)) * odds_factor * tpr\n\n    disparity_ratio = fpr0 / fpr1 if fpr1 &gt; 0 else float(&quot;inf&quot;)\n\n    return {\n        &quot;base_rate_group0&quot;: p0,\n        &quot;base_rate_group1&quot;: p1,\n        &quot;enforced_ppv&quot;: ppv,\n        &quot;enforced_tpr&quot;</code></pre>\n</div>"
        }
      },
      {
        "id": "s6",
        "title": "Empirical Case Study: Netherlands SyRI Welfare Scandal & Apple Card",
        "type": "bullets",
        "solo": {
          "speaker": "Dr. Nova (Senior Architect)",
          "title": "Empirical Case Study: Netherlands SyRI Welfare Scandal & Apple Card",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Empirical Case Study: Netherlands SyRI Welfare Scandal & Apple Card. Systems collapse when models mistake collection artifacts for real-world signals. In ICU sepsis models, observation frequency became a confounder; in autonomous robotics, a 50-millisecond timestamp jitter causes a 1.4-meter bounding box dislocation at highway speeds."
            }
          ],
          "contentHtml": "<div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">◆</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">Netherlands SyRI Welfare Fraud Algorithm Scandal (2020)</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">The Dutch government deployed the Systeem Risico Indicatie (SyRI) algorithm to predict social welfare fraud. The system was trained almost exclusively on data from low-income immigrant neighborhoods. The algorithm generated thousands of false-positive fraud accusations, resulting in aggressive tax clawbacks, bankruptcies, and child custody removals. In 2020, The Hague District Court struck down SyRI for violating Article 8 of the European Convention on Human Rights (Right to Respect for Private and Family Life), and the Dutch Cabinet resigned in disgrace.</span>\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">▸</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">Apple Card Credit Limit Gender Disparity (2019)</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">High-profile tech entrepreneurs noticed that the Apple Card algorithm granted husbands $10\\times$ to $20\\times$ higher credit limits than their wives, even when spouses filed joint tax returns and the wives possessed higher independent FICO credit scores. Regulators investigated Goldman Sachs, demonstrating how opaque machine learning underwriting models create massive public relations crises and legal exposure when proxy features reproduce historical gender lending disparities.</span>\n  </div>\n</div>"
        },
        "duo": {
          "speaker": "Socratic Debate (Dr. Nova & Kaito)",
          "title": "Socratic Debate: Empirical Case Study: Netherlands SyRI Welfare Scandal & Apple Card",
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
          "contentHtml": "<div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">◆</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">Netherlands SyRI Welfare Fraud Algorithm Scandal (2020)</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">The Dutch government deployed the Systeem Risico Indicatie (SyRI) algorithm to predict social welfare fraud. The system was trained almost exclusively on data from low-income immigrant neighborhoods. The algorithm generated thousands of false-positive fraud accusations, resulting in aggressive tax clawbacks, bankruptcies, and child custody removals. In 2020, The Hague District Court struck down SyRI for violating Article 8 of the European Convention on Human Rights (Right to Respect for Private and Family Life), and the Dutch Cabinet resigned in disgrace.</span>\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">▸</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">Apple Card Credit Limit Gender Disparity (2019)</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">High-profile tech entrepreneurs noticed that the Apple Card algorithm granted husbands $10\\times$ to $20\\times$ higher credit limits than their wives, even when spouses filed joint tax returns and the wives possessed higher independent FICO credit scores. Regulators investigated Goldman Sachs, demonstrating how opaque machine learning underwriting models create massive public relations crises and legal exposure when proxy features reproduce historical gender lending disparities.</span>\n  </div>\n</div>"
        }
      },
      {
        "id": "s7",
        "title": "Interactive Lab: Explore Societal Harm & Impossibility Simulator",
        "type": "tool",
        "solo": {
          "speaker": "Dr. Nova (Senior Architect)",
          "title": "Interactive Lab: Explore Societal Harm & Impossibility Simulator",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Interactive Lab: Explore Societal Harm & Impossibility Simulator. Scroll directly beneath this presentation player to the live laboratory. Run the failure injection to observe how unvalidated anomalies trigger compounding cascades across downstream tensors. Hands-on testing proves why boundary schema contracts are mandatory."
            }
          ],
          "contentHtml": "<div class=\"p-4 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[4px_4px_0px_#22bfd7] my-2\">\n  <div class=\"flex items-center justify-between border-b-2 border-[#151b20]/15 pb-2 mb-2.5 flex-wrap gap-2\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"px-2.5 py-1 rounded-lg bg-[#c9f3f4] text-[#0e7490] font-mono font-black text-xs border border-[#151b20] shadow-[1px_1px_0px_#151b20] uppercase tracking-wider\">🔬 Interactive Lab</span>\n      <span class=\"text-xs font-mono font-black text-[#151b20]\">Explore Societal Harm &amp; Impossibility Simulator</span>\n    </div>\n    <span class=\"text-[10px] font-mono text-[#0e7490] bg-[#fffaf0] px-2 py-0.5 rounded border border-[#151b20]\">Located Below on Page ↓</span>\n  </div>\n  <p class=\"text-xs text-[#334155] mb-3 leading-relaxed font-medium\">Test Chouldechova&#x27;s impossibility theorem across varying base rates, simulate compounding intergenerational wealth gaps, and evaluate EU AI Act compliance.</p>\n  <div class=\"bg-[#f6f0dc] p-3 rounded-xl border-2 border-[#151b20] space-y-2 text-xs\">\n    <span class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider block border-b border-[#151b20]/20 pb-1\">⚡ Recommended Hands-On Experiment:</span>\n    <div class=\"flex items-start gap-2 text-[#334155]\">\n  <span class=\"text-[#0e7490] font-bold font-mono text-xs\">1.</span>\n  <span class=\"text-xs leading-relaxed\">Scroll down to the interactive workbench section below the slide player to access the live laboratory.</span>\n</div><div class=\"flex items-start gap-2 text-[#334155]\">\n  <span class=\"text-[#0e7490] font-bold font-mono text-xs\">2.</span>\n  <span class=\"text-xs leading-relaxed\">Click &#x27;Launch Representation Workbench →&#x27; to examine baseline state, then trigger &#x27;Inject anomaly / Run test&#x27; to simulate failure modes.</span>\n</div><div class=\"flex items-start gap-2 text-[#334155]\">\n  <span class=\"text-[#0e7490] font-bold font-mono text-xs\">3.</span>\n  <span class=\"text-xs leading-relaxed\">Audit telemetry metrics and observe how defensive schema contracts guard downstream models.</span>\n</div>\n  </div>\n</div>"
        },
        "duo": {
          "speaker": "Socratic Debate (Dr. Nova & Kaito)",
          "title": "Socratic Debate: Interactive Lab: Explore Societal Harm & Impossibility Simulator",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Dr. Nova, what specific failure mode should I look for when I use the explore societal harm & impossibility simulator located below this player?"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Scroll directly beneath this presentation player to the live laboratory. Run the failure injection to observe how unvalidated anomalies trigger compounding cascades across downstream tensors. Hands-on testing proves why boundary schema contracts are mandatory."
            }
          ],
          "contentHtml": "<div class=\"p-4 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[4px_4px_0px_#22bfd7] my-2\">\n  <div class=\"flex items-center justify-between border-b-2 border-[#151b20]/15 pb-2 mb-2.5 flex-wrap gap-2\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"px-2.5 py-1 rounded-lg bg-[#c9f3f4] text-[#0e7490] font-mono font-black text-xs border border-[#151b20] shadow-[1px_1px_0px_#151b20] uppercase tracking-wider\">🔬 Interactive Lab</span>\n      <span class=\"text-xs font-mono font-black text-[#151b20]\">Explore Societal Harm &amp; Impossibility Simulator</span>\n    </div>\n    <span class=\"text-[10px] font-mono text-[#0e7490] bg-[#fffaf0] px-2 py-0.5 rounded border border-[#151b20]\">Located Below on Page ↓</span>\n  </div>\n  <p class=\"text-xs text-[#334155] mb-3 leading-relaxed font-medium\">Test Chouldechova&#x27;s impossibility theorem across varying base rates, simulate compounding intergenerational wealth gaps, and evaluate EU AI Act compliance.</p>\n  <div class=\"bg-[#f6f0dc] p-3 rounded-xl border-2 border-[#151b20] space-y-2 text-xs\">\n    <span class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider block border-b border-[#151b20]/20 pb-1\">⚡ Recommended Hands-On Experiment:</span>\n    <div class=\"flex items-start gap-2 text-[#334155]\">\n  <span class=\"text-[#0e7490] font-bold font-mono text-xs\">1.</span>\n  <span class=\"text-xs leading-relaxed\">Scroll down to the interactive workbench section below the slide player to access the live laboratory.</span>\n</div><div class=\"flex items-start gap-2 text-[#334155]\">\n  <span class=\"text-[#0e7490] font-bold font-mono text-xs\">2.</span>\n  <span class=\"text-xs leading-relaxed\">Click &#x27;Launch Representation Workbench →&#x27; to examine baseline state, then trigger &#x27;Inject anomaly / Run test&#x27; to simulate failure modes.</span>\n</div><div class=\"flex items-start gap-2 text-[#334155]\">\n  <span class=\"text-[#0e7490] font-bold font-mono text-xs\">3.</span>\n  <span class=\"text-xs leading-relaxed\">Audit telemetry metrics and observe how defensive schema contracts guard downstream models.</span>\n</div>\n  </div>\n</div>"
        }
      }
    ]
  },
  "ch7_p6": {
    "chapter": 7,
    "part": 6,
    "key": "ch7_p6",
    "badge": "◆ TRACK 7 • LESSON 7.6: FAIRNESS DEFINITIONS, IMPOSSIBILITY THEOREMS, AND TRADE-OFFS",
    "index": "Lesson 6 of 10",
    "lessonTitle": "Fairness Definitions, Impossibility Theorems, and Trade-offs",
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
              "text": "Welcome to Lesson 7.6. Today we examine fairness definitions, impossibility theorems, and trade-offs, establishing the mathematical foundations and production discipline required to guarantee dataset reliability."
            }
          ],
          "contentHtml": "<div class=\"p-6 md:p-8 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#22bfd7] text-center space-y-4\">\n  <div class=\"inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#c9f3f4] text-[#0e7490] font-mono text-xs border-2 border-[#151b20] font-black uppercase tracking-wider shadow-[2px_2px_0px_#151b20]\">\n    <span>◆ Track 7: Foundations</span>\n    <span>•</span>\n    <span>Lesson 7.6</span>\n  </div>\n  <h2 class=\"text-2xl md:text-3xl font-black text-[#151b20] tracking-tight\">\n    Fairness Definitions, Impossibility Theorems, and Trade-offs\n  </h2>\n  <p class=\"text-sm md:text-base text-[#334155] max-w-2xl mx-auto leading-relaxed font-medium\">\n    Deep dive into fairness definitions, impossibility theorems, and trade-offs with formal mathematical formulations, production engineering, and failure-mode analysis.\n  </p>\n  <div class=\"pt-2 flex flex-wrap items-center justify-center gap-2 font-mono text-xs\">\n    <span class=\"px-2.5 py-1 rounded-lg bg-[#fff0b9] border border-[#151b20] font-bold text-[#151b20]\">📐 Formal Foundations</span>\n    <span class=\"px-2.5 py-1 rounded-lg bg-[#ffd8ce] border border-[#151b20] font-bold text-[#151b20]\">⚠️ Failure Modes</span>\n    <span class=\"px-2.5 py-1 rounded-lg bg-[#c9f3f4] border border-[#151b20] font-bold text-[#151b20]\">🛡️ Production Contracts</span>\n  </div>\n</div>"
        },
        "duo": {
          "speaker": "Socratic Debate (Dr. Nova & Kaito)",
          "title": "Socratic Debate: Fairness Definitions, Impossibility Theorems, and Trade-offs",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Dr. Nova, what is the core architectural challenge we are solving in Lesson 7.6?"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Welcome to Lesson 7.6. Today we examine fairness definitions, impossibility theorems, and trade-offs, establishing the mathematical foundations and production discipline required to guarantee dataset reliability."
            }
          ],
          "contentHtml": "<div class=\"p-6 md:p-8 rounded-2xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[5px_5px_0px_#22bfd7] text-center space-y-4\">\n  <div class=\"inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#c9f3f4] text-[#0e7490] font-mono text-xs border-2 border-[#151b20] font-black uppercase tracking-wider shadow-[2px_2px_0px_#151b20]\">\n    <span>◆ Track 7: Foundations</span>\n    <span>•</span>\n    <span>Lesson 7.6</span>\n  </div>\n  <h2 class=\"text-2xl md:text-3xl font-black text-[#151b20] tracking-tight\">\n    Fairness Definitions, Impossibility Theorems, and Trade-offs\n  </h2>\n  <p class=\"text-sm md:text-base text-[#334155] max-w-2xl mx-auto leading-relaxed font-medium\">\n    Deep dive into fairness definitions, impossibility theorems, and trade-offs with formal mathematical formulations, production engineering, and failure-mode analysis.\n  </p>\n  <div class=\"pt-2 flex flex-wrap items-center justify-center gap-2 font-mono text-xs\">\n    <span class=\"px-2.5 py-1 rounded-lg bg-[#fff0b9] border border-[#151b20] font-bold text-[#151b20]\">📐 Formal Foundations</span>\n    <span class=\"px-2.5 py-1 rounded-lg bg-[#ffd8ce] border border-[#151b20] font-bold text-[#151b20]\">⚠️ Failure Modes</span>\n    <span class=\"px-2.5 py-1 rounded-lg bg-[#c9f3f4] border border-[#151b20] font-bold text-[#151b20]\">🛡️ Production Contracts</span>\n  </div>\n</div>"
        }
      },
      {
        "id": "s2",
        "title": "Conceptual Overview & The Inherent Impossibility Theorem: Mathematical Taxonomy of Group Fairness Criteria",
        "type": "equation",
        "solo": {
          "speaker": "Dr. Nova (Senior Architect)",
          "title": "Conceptual Overview & The Inherent Impossibility Theorem: Mathematical Taxonomy of Group Fairness Criteria",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Conceptual Overview & The Inherent Impossibility Theorem: Mathematical Taxonomy of Group Fairness Criteria. Formalizing the empirical sample mathematically reveals that empirical risk only approximates true generalization risk when the i.i.d. assumption holds. When upstream sampling is biased, the empirical risk diverges asymptotically from true risk—no model tuning can fix that."
            }
          ],
          "contentHtml": "<div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] my-2 text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-1 text-left flex items-center justify-between\">\n    <span>📐 Mathematical Formulation</span>\n    <span class=\"text-[#151b20] text-[9px] font-mono bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Empirical Sample Formulation</span>\n  </div>\n  <div class=\"text-base md:text-lg font-serif text-[#151b20] py-1 overflow-x-auto bg-[#f0fbfd] border border-[#0e7490] rounded-lg my-1\">\n    $$\\mathbb{P}(\\hat{Y} = 1 \\mid A = 0) = \\mathbb{P}(\\hat{Y} = 1 \\mid A = 1)$$\n  </div>\n</div><div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] my-2 text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-1 text-left flex items-center justify-between\">\n    <span>📐 Mathematical Formulation</span>\n    <span class=\"text-[#151b20] text-[9px] font-mono bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Distribution Measure</span>\n  </div>\n  <div class=\"text-base md:text-lg font-serif text-[#151b20] py-1 overflow-x-auto bg-[#f0fbfd] border border-[#0e7490] rounded-lg my-1\">\n    $$\\text{DI} = \\frac{\\mathbb{P}(\\hat{Y} = 1 \\mid A = 0)}{\\mathbb{P}(\\hat{Y} = 1 \\mid A = 1)} \\ge 0.80$$\n  </div>\n</div><div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] my-2 text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-1 text-left flex items-center justify-between\">\n    <span>📐 Mathematical Formulation</span>\n    <span class=\"text-[#151b20] text-[9px] font-mono bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Empirical Risk Proxy</span>\n  </div>\n  <div class=\"text-base md:text-lg font-serif text-[#151b20] py-1 overflow-x-auto bg-[#f0fbfd] border border-[#0e7490] rounded-lg my-1\">\n    $$\\mathbb{P}(\\hat{Y} = 1 \\mid Y = y, A = 0) = \\mathbb{P}(\\hat{Y} = 1 \\mid Y = y, A = 1), \\quad \\forall y \\in \\{0, 1\\}$$\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">◆</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">A common engineering</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">misconception assumes that with sufficient training data, feature engineering, and regularization, an algorithmic predictor can satisfy all intuitive mathematical notions of fairness simultaneously.</span>\n  </div>\n</div>"
        },
        "duo": {
          "speaker": "Socratic Debate (Dr. Nova & Kaito)",
          "title": "Socratic Debate: Conceptual Overview & The Inherent Impossibility Theorem: Mathematical Taxonomy of Group Fairness Criteria",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Dr. Nova, how does conceptual overview & the inherent impossibility theorem: mathematical taxonomy of group fairness criteria protect our system against silent distribution shift in production?"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Formalizing the empirical sample mathematically reveals that empirical risk only approximates true generalization risk when the i.i.d. assumption holds. When upstream sampling is biased, the empirical risk diverges asymptotically from true risk—no model tuning can fix that."
            }
          ],
          "contentHtml": "<div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] my-2 text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-1 text-left flex items-center justify-between\">\n    <span>📐 Mathematical Formulation</span>\n    <span class=\"text-[#151b20] text-[9px] font-mono bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Empirical Sample Formulation</span>\n  </div>\n  <div class=\"text-base md:text-lg font-serif text-[#151b20] py-1 overflow-x-auto bg-[#f0fbfd] border border-[#0e7490] rounded-lg my-1\">\n    $$\\mathbb{P}(\\hat{Y} = 1 \\mid A = 0) = \\mathbb{P}(\\hat{Y} = 1 \\mid A = 1)$$\n  </div>\n</div><div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] my-2 text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-1 text-left flex items-center justify-between\">\n    <span>📐 Mathematical Formulation</span>\n    <span class=\"text-[#151b20] text-[9px] font-mono bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Distribution Measure</span>\n  </div>\n  <div class=\"text-base md:text-lg font-serif text-[#151b20] py-1 overflow-x-auto bg-[#f0fbfd] border border-[#0e7490] rounded-lg my-1\">\n    $$\\text{DI} = \\frac{\\mathbb{P}(\\hat{Y} = 1 \\mid A = 0)}{\\mathbb{P}(\\hat{Y} = 1 \\mid A = 1)} \\ge 0.80$$\n  </div>\n</div><div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] my-2 text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-1 text-left flex items-center justify-between\">\n    <span>📐 Mathematical Formulation</span>\n    <span class=\"text-[#151b20] text-[9px] font-mono bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Empirical Risk Proxy</span>\n  </div>\n  <div class=\"text-base md:text-lg font-serif text-[#151b20] py-1 overflow-x-auto bg-[#f0fbfd] border border-[#0e7490] rounded-lg my-1\">\n    $$\\mathbb{P}(\\hat{Y} = 1 \\mid Y = y, A = 0) = \\mathbb{P}(\\hat{Y} = 1 \\mid Y = y, A = 1), \\quad \\forall y \\in \\{0, 1\\}$$\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">◆</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">A common engineering</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">misconception assumes that with sufficient training data, feature engineering, and regularization, an algorithmic predictor can satisfy all intuitive mathematical notions of fairness simultaneously.</span>\n  </div>\n</div>"
        }
      },
      {
        "id": "s3",
        "title": "Conceptual Overview & The Inherent Impossibility Theorem: Architecture Flowchart",
        "type": "figure",
        "solo": {
          "speaker": "Dr. Nova (Senior Architect)",
          "title": "Conceptual Overview & The Inherent Impossibility Theorem: Architecture Flowchart",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Conceptual Overview & The Inherent Impossibility Theorem: Architecture Flowchart. This architecture diagram visualizes how physical observations transition across sampling boundaries into discrete tensor representations. Tracking each transition stage prevents undocumented transformations from corrupting the empirical distribution."
            }
          ],
          "contentHtml": "<div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[4px_4px_0px_#151b20] my-2 overflow-x-auto text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-2 text-left flex items-center justify-between border-b-2 border-[#151b20]/15 pb-1\">\n    <span class=\"flex items-center gap-1.5\">\n      <span>📊 Architecture &amp; Workflow Diagram</span>\n      <span class=\"text-[#151b20]/40\">•</span>\n      <span class=\"text-[#334155]\">System Flowchart</span>\n    </span>\n    <span class=\"text-[#0e7490] text-[9px] font-mono bg-[#c9f3f4] px-1.5 py-0.5 rounded border border-[#151b20]\">Mermaid SVG</span>\n  </div>\n  <pre class=\"mermaid py-1 flex justify-center text-xs overflow-x-auto leading-normal\">flowchart TD\n  %% Standard 5-Color Semantic Palette\n  classDef blue fill:#c9f3f4,stroke:#151b20,stroke-width:2px,color:#151b20;\n  classDef amber fill:#fff0b9,stroke:#151b20,stroke-width:2px,color:#151b20;\n  classDef green fill:#e7f4c8,stroke:#151b20,stroke-width:2px,color:#151b20;\n  classDef purple fill:#e2dfff,stroke:#151b20,stroke-width:2px,color:#151b20;\n  classDef red fill:#ffd8ce,stroke:#151b20,stroke-width:2px,color:#151b20;\n\n  Trilemma[\"The Kleinberg-Chouldechova Fairness Trilemma<br/>Base Rates: P(Y=1|A=0) ≠ P(Y=1|A=1)\"]:::purple\n\n  C1[\"Condition 1: Sufficiency (Calibration)<br/>P(Y=1 | R=r, A=0) = P(Y=1 | R=r, A=1)\"]:::blue\n  C2[\"Condition 2: Separation (Equal FPR)<br/>P(Y_hat=1 | Y=0, A=0) = P(Y_hat=1 | Y=0, A=1)\"]:::amber\n  C3[\"Condition 3: Separation (Equal FNR / TPR)<br/>P(Y_hat=0 | Y=1, A=0) = P(Y_hat=0 | Y=1, A=1)\"]:::green\n\n  Conflict[\"MATHEMATICAL IMPOSSIBILITY:<br/>You can satisfy at most TWO of the three conditions<br/>unless base rates are identical or classifier has 100% accuracy\"]:::red\n\n  Trilemma --> C1\n  Trilemma --> C2\n  Trilemma --> C3\n  C1 -. Mutually Exclusive .-> Conflict\n  C2 -. Mutually Exclusive .-> Conflict\n  C3 -. Mutually Exclusive .-> Conflict</pre>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">◆</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">A common engineering</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">misconception assumes that with sufficient training data, feature engineering, and regularization, an algorithmic predictor can satisfy all intuitive mathematical notions of fairness simultaneously.</span>\n  </div>\n</div>"
        },
        "duo": {
          "speaker": "Socratic Debate (Dr. Nova & Kaito)",
          "title": "Socratic Debate: Conceptual Overview & The Inherent Impossibility Theorem: Architecture Flowchart",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Dr. Nova, looking at this workflow diagram for conceptual overview & the inherent impossibility theorem: architecture flowchart, how does the architectural flow enforce system stability?"
            },
            {
              "speaker": "Dr. Nova",
              "text": "This architecture diagram visualizes how physical observations transition across sampling boundaries into discrete tensor representations. Tracking each transition stage prevents undocumented transformations from corrupting the empirical distribution."
            }
          ],
          "contentHtml": "<div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[4px_4px_0px_#151b20] my-2 overflow-x-auto text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-2 text-left flex items-center justify-between border-b-2 border-[#151b20]/15 pb-1\">\n    <span class=\"flex items-center gap-1.5\">\n      <span>📊 Architecture &amp; Workflow Diagram</span>\n      <span class=\"text-[#151b20]/40\">•</span>\n      <span class=\"text-[#334155]\">System Flowchart</span>\n    </span>\n    <span class=\"text-[#0e7490] text-[9px] font-mono bg-[#c9f3f4] px-1.5 py-0.5 rounded border border-[#151b20]\">Mermaid SVG</span>\n  </div>\n  <pre class=\"mermaid py-1 flex justify-center text-xs overflow-x-auto leading-normal\">flowchart TD\n  %% Standard 5-Color Semantic Palette\n  classDef blue fill:#c9f3f4,stroke:#151b20,stroke-width:2px,color:#151b20;\n  classDef amber fill:#fff0b9,stroke:#151b20,stroke-width:2px,color:#151b20;\n  classDef green fill:#e7f4c8,stroke:#151b20,stroke-width:2px,color:#151b20;\n  classDef purple fill:#e2dfff,stroke:#151b20,stroke-width:2px,color:#151b20;\n  classDef red fill:#ffd8ce,stroke:#151b20,stroke-width:2px,color:#151b20;\n\n  Trilemma[\"The Kleinberg-Chouldechova Fairness Trilemma<br/>Base Rates: P(Y=1|A=0) ≠ P(Y=1|A=1)\"]:::purple\n\n  C1[\"Condition 1: Sufficiency (Calibration)<br/>P(Y=1 | R=r, A=0) = P(Y=1 | R=r, A=1)\"]:::blue\n  C2[\"Condition 2: Separation (Equal FPR)<br/>P(Y_hat=1 | Y=0, A=0) = P(Y_hat=1 | Y=0, A=1)\"]:::amber\n  C3[\"Condition 3: Separation (Equal FNR / TPR)<br/>P(Y_hat=0 | Y=1, A=0) = P(Y_hat=0 | Y=1, A=1)\"]:::green\n\n  Conflict[\"MATHEMATICAL IMPOSSIBILITY:<br/>You can satisfy at most TWO of the three conditions<br/>unless base rates are identical or classifier has 100% accuracy\"]:::red\n\n  Trilemma --> C1\n  Trilemma --> C2\n  Trilemma --> C3\n  C1 -. Mutually Exclusive .-> Conflict\n  C2 -. Mutually Exclusive .-> Conflict\n  C3 -. Mutually Exclusive .-> Conflict</pre>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">◆</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">A common engineering</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">misconception assumes that with sufficient training data, feature engineering, and regularization, an algorithmic predictor can satisfy all intuitive mathematical notions of fairness simultaneously.</span>\n  </div>\n</div>"
        }
      },
      {
        "id": "s4",
        "title": "Algebraic Derivation of Chouldechova's Impossibility Theorem",
        "type": "equation",
        "solo": {
          "speaker": "Dr. Nova (Senior Architect)",
          "title": "Algebraic Derivation of Chouldechova's Impossibility Theorem",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Algebraic Derivation of Chouldechova's Impossibility Theorem. Formalizing the empirical sample mathematically reveals that empirical risk only approximates true generalization risk when the i.i.d. assumption holds. When upstream sampling is biased, the empirical risk diverges asymptotically from true risk—no model tuning can fix that."
            }
          ],
          "contentHtml": "<div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] my-2 text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-1 text-left flex items-center justify-between\">\n    <span>📐 Mathematical Formulation</span>\n    <span class=\"text-[#151b20] text-[9px] font-mono bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Empirical Sample Formulation</span>\n  </div>\n  <div class=\"text-base md:text-lg font-serif text-[#151b20] py-1 overflow-x-auto bg-[#f0fbfd] border border-[#0e7490] rounded-lg my-1\">\n    $$\\text{FDR}_a = \\mathbb{P}(Y = 0 \\mid \\hat{Y} = 1, A = a) = \\frac{\\text{FPR}_a \\cdot (1 - p_a)}{\\text{FPR}_a \\cdot (1 - p_a) + (1 - \\text{FNR}_a) \\cdot p_a}$$\n  </div>\n</div><div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] my-2 text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-1 text-left flex items-center justify-between\">\n    <span>📐 Mathematical Formulation</span>\n    <span class=\"text-[#151b20] text-[9px] font-mono bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Distribution Measure</span>\n  </div>\n  <div class=\"text-base md:text-lg font-serif text-[#151b20] py-1 overflow-x-auto bg-[#f0fbfd] border border-[#0e7490] rounded-lg my-1\">\n    $$\\text{FDR}_a \\cdot \\left[ \\text{FPR}_a (1 - p_a) + (1 - \\text{FNR}_a) p_a \\right] = \\text{FPR}_a (1 - p_a)$$\n  </div>\n</div><div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] my-2 text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-1 text-left flex items-center justify-between\">\n    <span>📐 Mathematical Formulation</span>\n    <span class=\"text-[#151b20] text-[9px] font-mono bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Empirical Risk Proxy</span>\n  </div>\n  <div class=\"text-base md:text-lg font-serif text-[#151b20] py-1 overflow-x-auto bg-[#f0fbfd] border border-[#0e7490] rounded-lg my-1\">\n    $$\\text{FDR}_a (1 - \\text{FNR}_a) p_a = (1 - \\text{FDR}_a) \\text{FPR}_a (1 - p_a) = v_a \\cdot \\text{FPR}_a (1 - p_a)$$\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">◆</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">Equal Predictive Value (Calibration)</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">$v_0 = v_1 = v$</span>\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">▸</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">Equal False Negative Rates (Equal Opportunity)</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">$\\text{FNR}_0 = \\text{FNR}_1 = \\text{FNR}$</span>\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">⚡</span>\n  <div>\n    \n    <span class=\"text-[#334155] text-xs block leading-relaxed font-medium\">Base rates are equal ($p_0 = p_1$), or</span>\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">💡</span>\n  <div>\n    \n    <span class=\"text-[#334155] text-xs block leading-relaxed font-medium\">The predictor is perfect ($\\text{FPR} = \\text{FNR} = 0$, $v = 1$).</span>\n  </div>\n</div>"
        },
        "duo": {
          "speaker": "Socratic Debate (Dr. Nova & Kaito)",
          "title": "Socratic Debate: Algebraic Derivation of Chouldechova's Impossibility Theorem",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Dr. Nova, how does algebraic derivation of chouldechova's impossibility theorem protect our system against silent distribution shift in production?"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Formalizing the empirical sample mathematically reveals that empirical risk only approximates true generalization risk when the i.i.d. assumption holds. When upstream sampling is biased, the empirical risk diverges asymptotically from true risk—no model tuning can fix that."
            }
          ],
          "contentHtml": "<div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] my-2 text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-1 text-left flex items-center justify-between\">\n    <span>📐 Mathematical Formulation</span>\n    <span class=\"text-[#151b20] text-[9px] font-mono bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Empirical Sample Formulation</span>\n  </div>\n  <div class=\"text-base md:text-lg font-serif text-[#151b20] py-1 overflow-x-auto bg-[#f0fbfd] border border-[#0e7490] rounded-lg my-1\">\n    $$\\text{FDR}_a = \\mathbb{P}(Y = 0 \\mid \\hat{Y} = 1, A = a) = \\frac{\\text{FPR}_a \\cdot (1 - p_a)}{\\text{FPR}_a \\cdot (1 - p_a) + (1 - \\text{FNR}_a) \\cdot p_a}$$\n  </div>\n</div><div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] my-2 text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-1 text-left flex items-center justify-between\">\n    <span>📐 Mathematical Formulation</span>\n    <span class=\"text-[#151b20] text-[9px] font-mono bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Distribution Measure</span>\n  </div>\n  <div class=\"text-base md:text-lg font-serif text-[#151b20] py-1 overflow-x-auto bg-[#f0fbfd] border border-[#0e7490] rounded-lg my-1\">\n    $$\\text{FDR}_a \\cdot \\left[ \\text{FPR}_a (1 - p_a) + (1 - \\text{FNR}_a) p_a \\right] = \\text{FPR}_a (1 - p_a)$$\n  </div>\n</div><div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] my-2 text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-1 text-left flex items-center justify-between\">\n    <span>📐 Mathematical Formulation</span>\n    <span class=\"text-[#151b20] text-[9px] font-mono bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Empirical Risk Proxy</span>\n  </div>\n  <div class=\"text-base md:text-lg font-serif text-[#151b20] py-1 overflow-x-auto bg-[#f0fbfd] border border-[#0e7490] rounded-lg my-1\">\n    $$\\text{FDR}_a (1 - \\text{FNR}_a) p_a = (1 - \\text{FDR}_a) \\text{FPR}_a (1 - p_a) = v_a \\cdot \\text{FPR}_a (1 - p_a)$$\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">◆</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">Equal Predictive Value (Calibration)</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">$v_0 = v_1 = v$</span>\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">▸</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">Equal False Negative Rates (Equal Opportunity)</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">$\\text{FNR}_0 = \\text{FNR}_1 = \\text{FNR}$</span>\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">⚡</span>\n  <div>\n    \n    <span class=\"text-[#334155] text-xs block leading-relaxed font-medium\">Base rates are equal ($p_0 = p_1$), or</span>\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">💡</span>\n  <div>\n    \n    <span class=\"text-[#334155] text-xs block leading-relaxed font-medium\">The predictor is perfect ($\\text{FPR} = \\text{FNR} = 0$, $v = 1$).</span>\n  </div>\n</div>"
        }
      },
      {
        "id": "s5",
        "title": "The Fairness-Accuracy Pareto Frontier",
        "type": "equation",
        "solo": {
          "speaker": "Dr. Nova (Senior Architect)",
          "title": "The Fairness-Accuracy Pareto Frontier",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "The Fairness-Accuracy Pareto Frontier. Formalizing the empirical sample mathematically reveals that empirical risk only approximates true generalization risk when the i.i.d. assumption holds. When upstream sampling is biased, the empirical risk diverges asymptotically from true risk—no model tuning can fix that."
            }
          ],
          "contentHtml": "<div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] my-2 text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-1 text-left flex items-center justify-between\">\n    <span>📐 Mathematical Formulation</span>\n    <span class=\"text-[#151b20] text-[9px] font-mono bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Empirical Sample Formulation</span>\n  </div>\n  <div class=\"text-base md:text-lg font-serif text-[#151b20] py-1 overflow-x-auto bg-[#f0fbfd] border border-[#0e7490] rounded-lg my-1\">\n    $$\\mathcal{R}_{\\text{fair}}^* = \\min_{h \\in \\mathcal{H}_{\\text{fair}}} \\mathcal{R}_{\\text{emp}}(h) \\ge \\min_{h \\in \\mathcal{H}} \\mathcal{R}_{\\text{emp}}(h) = \\mathcal{R}_{\\text{unconstrained}}^*$$\n  </div>\n</div><div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] my-2 text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-1 text-left flex items-center justify-between\">\n    <span>📐 Mathematical Formulation</span>\n    <span class=\"text-[#151b20] text-[9px] font-mono bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Distribution Measure</span>\n  </div>\n  <div class=\"text-base md:text-lg font-serif text-[#151b20] py-1 overflow-x-auto bg-[#f0fbfd] border border-[#0e7490] rounded-lg my-1\">\n    $$\\min_{\\theta} \\mathcal{L}(\\theta) + \\lambda \\cdot \\mathcal{D}_{\\text{disparity}}(\\theta)$$\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">◆</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">Every fairness constraint</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">constitutes a restriction on the unconstrained risk minimization objective.</span>\n  </div>\n</div>"
        },
        "duo": {
          "speaker": "Socratic Debate (Dr. Nova & Kaito)",
          "title": "Socratic Debate: The Fairness-Accuracy Pareto Frontier",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Dr. Nova, how does the fairness-accuracy pareto frontier protect our system against silent distribution shift in production?"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Formalizing the empirical sample mathematically reveals that empirical risk only approximates true generalization risk when the i.i.d. assumption holds. When upstream sampling is biased, the empirical risk diverges asymptotically from true risk—no model tuning can fix that."
            }
          ],
          "contentHtml": "<div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] my-2 text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-1 text-left flex items-center justify-between\">\n    <span>📐 Mathematical Formulation</span>\n    <span class=\"text-[#151b20] text-[9px] font-mono bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Empirical Sample Formulation</span>\n  </div>\n  <div class=\"text-base md:text-lg font-serif text-[#151b20] py-1 overflow-x-auto bg-[#f0fbfd] border border-[#0e7490] rounded-lg my-1\">\n    $$\\mathcal{R}_{\\text{fair}}^* = \\min_{h \\in \\mathcal{H}_{\\text{fair}}} \\mathcal{R}_{\\text{emp}}(h) \\ge \\min_{h \\in \\mathcal{H}} \\mathcal{R}_{\\text{emp}}(h) = \\mathcal{R}_{\\text{unconstrained}}^*$$\n  </div>\n</div><div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] my-2 text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-1 text-left flex items-center justify-between\">\n    <span>📐 Mathematical Formulation</span>\n    <span class=\"text-[#151b20] text-[9px] font-mono bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Distribution Measure</span>\n  </div>\n  <div class=\"text-base md:text-lg font-serif text-[#151b20] py-1 overflow-x-auto bg-[#f0fbfd] border border-[#0e7490] rounded-lg my-1\">\n    $$\\min_{\\theta} \\mathcal{L}(\\theta) + \\lambda \\cdot \\mathcal{D}_{\\text{disparity}}(\\theta)$$\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">◆</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">Every fairness constraint</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">constitutes a restriction on the unconstrained risk minimization objective.</span>\n  </div>\n</div>"
        }
      },
      {
        "id": "s6",
        "title": "The Fairness-Accuracy Pareto Frontier: Architecture Flowchart",
        "type": "figure",
        "solo": {
          "speaker": "Dr. Nova (Senior Architect)",
          "title": "The Fairness-Accuracy Pareto Frontier: Architecture Flowchart",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "The Fairness-Accuracy Pareto Frontier: Architecture Flowchart. This architecture diagram visualizes how physical observations transition across sampling boundaries into discrete tensor representations. Tracking each transition stage prevents undocumented transformations from corrupting the empirical distribution."
            }
          ],
          "contentHtml": "<div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[4px_4px_0px_#151b20] my-2 overflow-x-auto text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-2 text-left flex items-center justify-between border-b-2 border-[#151b20]/15 pb-1\">\n    <span class=\"flex items-center gap-1.5\">\n      <span>📊 Architecture &amp; Workflow Diagram</span>\n      <span class=\"text-[#151b20]/40\">•</span>\n      <span class=\"text-[#334155]\">System Flowchart</span>\n    </span>\n    <span class=\"text-[#0e7490] text-[9px] font-mono bg-[#c9f3f4] px-1.5 py-0.5 rounded border border-[#151b20]\">Mermaid SVG</span>\n  </div>\n  <pre class=\"mermaid py-1 flex justify-center text-xs overflow-x-auto leading-normal\">flowchart TD\n  %% Standard 5-Color Semantic Palette\n  classDef blue fill:#c9f3f4,stroke:#151b20,stroke-width:2px,color:#151b20;\n  classDef amber fill:#fff0b9,stroke:#151b20,stroke-width:2px,color:#151b20;\n  classDef green fill:#e7f4c8,stroke:#151b20,stroke-width:2px,color:#151b20;\n  classDef purple fill:#e2dfff,stroke:#151b20,stroke-width:2px,color:#151b20;\n  classDef red fill:#ffd8ce,stroke:#151b20,stroke-width:2px,color:#151b20;\n\n  Context[\"Decision Harm Taxonomy\"]:::purple --> DecisionNature{\"Is the Decision Punitive<br/>or Assistive/Opportunity?\"}:::blue\n\n  DecisionNature -- \"Punitive (Bail, Fraud, Arrest)\" --> Punitive[\"Prioritize Error of False Accusation<br/>Enforce Equal False Positive Rates (FPR)<br/>P(Y_hat=1 | Y=0, A=0) = P(Y_hat=1 | Y=0, A=1)\"]:::red\n\n  DecisionNature -- \"Assistive (Scholarship, Medical Care)\" --> Assistive[\"Prioritize Error of Withheld Opportunity<br/>Enforce Equal Opportunity (Equal FNR)<br/>P(Y_hat=1 | Y=1, A=0) = P(Y_hat=1 | Y=1, A=1)\"]:::green\n\n  DecisionNature -- \"Regulatory Parity Mandate\" --> DemoParity[\"Enforce Demographic Parity<br/>P(Y_hat=1 | A=0) = P(Y_hat=1 | A=1)<br/>Surrenders Equalized Odds if base rates differ\"]:::amber\n\n  DecisionNature -- \"Risk Calibration (Insurance Pricing)\" --> Calib[\"Enforce Predictive Parity (Calibration)<br/>P(Y=1 | Y_hat=1, A=0) = P(Y=1 | Y_hat=1, A=1)\"]:::blue</pre>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">◆</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">Every fairness constraint</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">constitutes a restriction on the unconstrained risk minimization objective.</span>\n  </div>\n</div>"
        },
        "duo": {
          "speaker": "Socratic Debate (Dr. Nova & Kaito)",
          "title": "Socratic Debate: The Fairness-Accuracy Pareto Frontier: Architecture Flowchart",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Dr. Nova, looking at this workflow diagram for the fairness-accuracy pareto frontier: architecture flowchart, how does the architectural flow enforce system stability?"
            },
            {
              "speaker": "Dr. Nova",
              "text": "This architecture diagram visualizes how physical observations transition across sampling boundaries into discrete tensor representations. Tracking each transition stage prevents undocumented transformations from corrupting the empirical distribution."
            }
          ],
          "contentHtml": "<div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[4px_4px_0px_#151b20] my-2 overflow-x-auto text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-2 text-left flex items-center justify-between border-b-2 border-[#151b20]/15 pb-1\">\n    <span class=\"flex items-center gap-1.5\">\n      <span>📊 Architecture &amp; Workflow Diagram</span>\n      <span class=\"text-[#151b20]/40\">•</span>\n      <span class=\"text-[#334155]\">System Flowchart</span>\n    </span>\n    <span class=\"text-[#0e7490] text-[9px] font-mono bg-[#c9f3f4] px-1.5 py-0.5 rounded border border-[#151b20]\">Mermaid SVG</span>\n  </div>\n  <pre class=\"mermaid py-1 flex justify-center text-xs overflow-x-auto leading-normal\">flowchart TD\n  %% Standard 5-Color Semantic Palette\n  classDef blue fill:#c9f3f4,stroke:#151b20,stroke-width:2px,color:#151b20;\n  classDef amber fill:#fff0b9,stroke:#151b20,stroke-width:2px,color:#151b20;\n  classDef green fill:#e7f4c8,stroke:#151b20,stroke-width:2px,color:#151b20;\n  classDef purple fill:#e2dfff,stroke:#151b20,stroke-width:2px,color:#151b20;\n  classDef red fill:#ffd8ce,stroke:#151b20,stroke-width:2px,color:#151b20;\n\n  Context[\"Decision Harm Taxonomy\"]:::purple --> DecisionNature{\"Is the Decision Punitive<br/>or Assistive/Opportunity?\"}:::blue\n\n  DecisionNature -- \"Punitive (Bail, Fraud, Arrest)\" --> Punitive[\"Prioritize Error of False Accusation<br/>Enforce Equal False Positive Rates (FPR)<br/>P(Y_hat=1 | Y=0, A=0) = P(Y_hat=1 | Y=0, A=1)\"]:::red\n\n  DecisionNature -- \"Assistive (Scholarship, Medical Care)\" --> Assistive[\"Prioritize Error of Withheld Opportunity<br/>Enforce Equal Opportunity (Equal FNR)<br/>P(Y_hat=1 | Y=1, A=0) = P(Y_hat=1 | Y=1, A=1)\"]:::green\n\n  DecisionNature -- \"Regulatory Parity Mandate\" --> DemoParity[\"Enforce Demographic Parity<br/>P(Y_hat=1 | A=0) = P(Y_hat=1 | A=1)<br/>Surrenders Equalized Odds if base rates differ\"]:::amber\n\n  DecisionNature -- \"Risk Calibration (Insurance Pricing)\" --> Calib[\"Enforce Predictive Parity (Calibration)<br/>P(Y=1 | Y_hat=1, A=0) = P(Y=1 | Y_hat=1, A=1)\"]:::blue</pre>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">◆</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">Every fairness constraint</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">constitutes a restriction on the unconstrained risk minimization objective.</span>\n  </div>\n</div>"
        }
      },
      {
        "id": "s7",
        "title": "Production Implementation: Numerical Proof of the Impossibility Theorem",
        "type": "code",
        "solo": {
          "speaker": "Dr. Nova (Senior Architect)",
          "title": "Production Implementation: Numerical Proof of the Impossibility Theorem",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Production Implementation: Numerical Proof of the Impossibility Theorem. Always enforce schema contracts at the ingestion boundary before raw records enter memory. Using Pydantic or zero-copy Arrow prevents unvalidated floats and untyped strings from silently polluting downstream tensors."
            }
          ],
          "contentHtml": "<div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] font-mono text-xs overflow-x-auto shadow-[4px_4px_0px_#151b20] my-2\">\n  <div class=\"text-[10px] text-[#0e7490] font-black mb-1.5 uppercase tracking-wider pb-1 border-b-2 border-[#151b20]/15 flex items-center justify-between\">\n    <span>Production Implementation / Type-Safe Listing:</span>\n    <span class=\"text-[#151b20] text-[9px] bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Python 3.10+</span>\n  </div>\n  <pre class=\"leading-relaxed bg-[#fffaf0] p-2.5 rounded-lg border border-[#151b20] text-[#151b20] overflow-x-auto\"><code># Numerical Verification of the Kleinberg-Chouldechova Impossibility Theorem\nfrom typing import Dict, Any\nimport numpy as np\n\ndef verify_chouldechova_identity(p0: float, p1: float, ppv: float, fnr: float) -&gt; Dict[str, float]:\n    # Computes required False Positive Rates (FPR) when Predictive Value (PPV)\n    # and False Negative Rates (FNR) are held identical across groups with base rates p0 and p1.\n    # FPR_a = [p_a / (1 - p_a)] * [(1 - PPV) / PPV] * (1 - FNR)\n    odds_0 = p0 / (1.0 - p0)\n    odds_1 = p1 / (1.0 - p1)\n    ppv_factor = (1.0 - ppv) / ppv\n    fnr_factor = 1.0 - fnr\n\n    fpr_0 = odds_0 * ppv_factor * fnr_factor\n    fpr_1 = odds_1 * ppv_factor * fnr_factor\n    fpr_ratio = fpr_0 / fpr_1\n\n    return {\n        &quot;base_rate_group_0 (p0)&quot;: p0,\n        &quot;base_rate_group_1 (p1)&quot;: p1,\n        &quot;calibrated_ppv&quot;: ppv,\n        &quot;equal_fnr&quot;: f</code></pre>\n</div>"
        },
        "duo": {
          "speaker": "Socratic Debate (Dr. Nova & Kaito)",
          "title": "Socratic Debate: Production Implementation: Numerical Proof of the Impossibility Theorem",
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
          "contentHtml": "<div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] font-mono text-xs overflow-x-auto shadow-[4px_4px_0px_#151b20] my-2\">\n  <div class=\"text-[10px] text-[#0e7490] font-black mb-1.5 uppercase tracking-wider pb-1 border-b-2 border-[#151b20]/15 flex items-center justify-between\">\n    <span>Production Implementation / Type-Safe Listing:</span>\n    <span class=\"text-[#151b20] text-[9px] bg-[#eee4c8] px-2 py-0.5 rounded border border-[#151b20]\">Python 3.10+</span>\n  </div>\n  <pre class=\"leading-relaxed bg-[#fffaf0] p-2.5 rounded-lg border border-[#151b20] text-[#151b20] overflow-x-auto\"><code># Numerical Verification of the Kleinberg-Chouldechova Impossibility Theorem\nfrom typing import Dict, Any\nimport numpy as np\n\ndef verify_chouldechova_identity(p0: float, p1: float, ppv: float, fnr: float) -&gt; Dict[str, float]:\n    # Computes required False Positive Rates (FPR) when Predictive Value (PPV)\n    # and False Negative Rates (FNR) are held identical across groups with base rates p0 and p1.\n    # FPR_a = [p_a / (1 - p_a)] * [(1 - PPV) / PPV] * (1 - FNR)\n    odds_0 = p0 / (1.0 - p0)\n    odds_1 = p1 / (1.0 - p1)\n    ppv_factor = (1.0 - ppv) / ppv\n    fnr_factor = 1.0 - fnr\n\n    fpr_0 = odds_0 * ppv_factor * fnr_factor\n    fpr_1 = odds_1 * ppv_factor * fnr_factor\n    fpr_ratio = fpr_0 / fpr_1\n\n    return {\n        &quot;base_rate_group_0 (p0)&quot;: p0,\n        &quot;base_rate_group_1 (p1)&quot;: p1,\n        &quot;calibrated_ppv&quot;: ppv,\n        &quot;equal_fnr&quot;: f</code></pre>\n</div>"
        }
      },
      {
        "id": "s8",
        "title": "Empirical Case Study: Critical Care ICU Triage Allocation",
        "type": "bullets",
        "solo": {
          "speaker": "Dr. Nova (Senior Architect)",
          "title": "Empirical Case Study: Critical Care ICU Triage Allocation",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Empirical Case Study: Critical Care ICU Triage Allocation. Systems collapse when models mistake collection artifacts for real-world signals. In ICU sepsis models, observation frequency became a confounder; in autonomous robotics, a 50-millisecond timestamp jitter causes a 1.4-meter bounding box dislocation at highway speeds."
            }
          ],
          "contentHtml": "<div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">◆</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">Base Rate Differences</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">In-hospital mortality base rates differed across age brackets: $6.2\\%$ for patients under 45 versus $28.4\\%$ for patients over 75.</span>\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">▸</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">Calibration</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">Hospital directors demanded Calibration: an algorithmic score of $80\\%$ mortality risk must denote an identical $80\\%$ probability of death across all ages so intensivists trust triage predictions.</span>\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">⚡</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">Equalized False Positive Rates</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">Patient advocacy groups demanded Equalized False Positive Rates: elderly patients must not be falsely categorized as &quot;unsalvageable&quot; at higher rates than younger patients.</span>\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">💡</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">The Impossibility Resolution</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">Because base rates differed by $4.5\\times$, the mathematical theorem proved both demands could not be satisfied simultaneously. The hospital formally selected Calibration as the primary ethical criterion and instituted mandatory non-algorithmic clinical re-evaluations for elderly triage denials (; ).</span>\n  </div>\n</div>"
        },
        "duo": {
          "speaker": "Socratic Debate (Dr. Nova & Kaito)",
          "title": "Socratic Debate: Empirical Case Study: Critical Care ICU Triage Allocation",
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
          "contentHtml": "<div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">◆</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">Base Rate Differences</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">In-hospital mortality base rates differed across age brackets: $6.2\\%$ for patients under 45 versus $28.4\\%$ for patients over 75.</span>\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">▸</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">Calibration</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">Hospital directors demanded Calibration: an algorithmic score of $80\\%$ mortality risk must denote an identical $80\\%$ probability of death across all ages so intensivists trust triage predictions.</span>\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">⚡</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">Equalized False Positive Rates</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">Patient advocacy groups demanded Equalized False Positive Rates: elderly patients must not be falsely categorized as &quot;unsalvageable&quot; at higher rates than younger patients.</span>\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">💡</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">The Impossibility Resolution</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">Because base rates differed by $4.5\\times$, the mathematical theorem proved both demands could not be satisfied simultaneously. The hospital formally selected Calibration as the primary ethical criterion and instituted mandatory non-algorithmic clinical re-evaluations for elderly triage denials (; ).</span>\n  </div>\n</div>"
        }
      },
      {
        "id": "s9",
        "title": "Interactive Lab: Explore Bias & Fairness Meter",
        "type": "tool",
        "solo": {
          "speaker": "Dr. Nova (Senior Architect)",
          "title": "Interactive Lab: Explore Bias & Fairness Meter",
          "turns": [
            {
              "speaker": "Dr. Nova",
              "text": "Interactive Lab: Explore Bias & Fairness Meter. Scroll directly beneath this presentation player to the live laboratory. Run the failure injection to observe how unvalidated anomalies trigger compounding cascades across downstream tensors. Hands-on testing proves why boundary schema contracts are mandatory."
            }
          ],
          "contentHtml": "<div class=\"p-4 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[4px_4px_0px_#22bfd7] my-2\">\n  <div class=\"flex items-center justify-between border-b-2 border-[#151b20]/15 pb-2 mb-2.5 flex-wrap gap-2\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"px-2.5 py-1 rounded-lg bg-[#c9f3f4] text-[#0e7490] font-mono font-black text-xs border border-[#151b20] shadow-[1px_1px_0px_#151b20] uppercase tracking-wider\">🔬 Interactive Lab</span>\n      <span class=\"text-xs font-mono font-black text-[#151b20]\">Explore Bias &amp; Fairness Meter</span>\n    </div>\n    <span class=\"text-[10px] font-mono text-[#0e7490] bg-[#fffaf0] px-2 py-0.5 rounded border border-[#151b20]\">Located Below on Page ↓</span>\n  </div>\n  <p class=\"text-xs text-[#334155] mb-3 leading-relaxed font-medium\">Test the Kleinberg-Chouldechova Impossibility Theorem numerically and inspect the accuracy-fairness Pareto frontier.</p>\n  <div class=\"bg-[#f6f0dc] p-3 rounded-xl border-2 border-[#151b20] space-y-2 text-xs\">\n    <span class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider block border-b border-[#151b20]/20 pb-1\">⚡ Recommended Hands-On Experiment:</span>\n    <div class=\"flex items-start gap-2 text-[#334155]\">\n  <span class=\"text-[#0e7490] font-bold font-mono text-xs\">1.</span>\n  <span class=\"text-xs leading-relaxed\">Scroll down to the interactive workbench section below the slide player to access the live laboratory.</span>\n</div><div class=\"flex items-start gap-2 text-[#334155]\">\n  <span class=\"text-[#0e7490] font-bold font-mono text-xs\">2.</span>\n  <span class=\"text-xs leading-relaxed\">Click &#x27;Launch Fairness Meter Workbench →&#x27; to examine baseline state, then trigger &#x27;Inject anomaly / Run test&#x27; to simulate failure modes.</span>\n</div><div class=\"flex items-start gap-2 text-[#334155]\">\n  <span class=\"text-[#0e7490] font-bold font-mono text-xs\">3.</span>\n  <span class=\"text-xs leading-relaxed\">Audit telemetry metrics and observe how defensive schema contracts guard downstream models.</span>\n</div>\n  </div>\n</div>"
        },
        "duo": {
          "speaker": "Socratic Debate (Dr. Nova & Kaito)",
          "title": "Socratic Debate: Interactive Lab: Explore Bias & Fairness Meter",
          "turns": [
            {
              "speaker": "Kaito",
              "text": "Dr. Nova, what specific failure mode should I look for when I use the explore bias & fairness meter located below this player?"
            },
            {
              "speaker": "Dr. Nova",
              "text": "Scroll directly beneath this presentation player to the live laboratory. Run the failure injection to observe how unvalidated anomalies trigger compounding cascades across downstream tensors. Hands-on testing proves why boundary schema contracts are mandatory."
            }
          ],
          "contentHtml": "<div class=\"p-4 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[4px_4px_0px_#22bfd7] my-2\">\n  <div class=\"flex items-center justify-between border-b-2 border-[#151b20]/15 pb-2 mb-2.5 flex-wrap gap-2\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"px-2.5 py-1 rounded-lg bg-[#c9f3f4] text-[#0e7490] font-mono font-black text-xs border border-[#151b20] shadow-[1px_1px_0px_#151b20] uppercase tracking-wider\">🔬 Interactive Lab</span>\n      <span class=\"text-xs font-mono font-black text-[#151b20]\">Explore Bias &amp; Fairness Meter</span>\n    </div>\n    <span class=\"text-[10px] font-mono text-[#0e7490] bg-[#fffaf0] px-2 py-0.5 rounded border border-[#151b20]\">Located Below on Page ↓</span>\n  </div>\n  <p class=\"text-xs text-[#334155] mb-3 leading-relaxed font-medium\">Test the Kleinberg-Chouldechova Impossibility Theorem numerically and inspect the accuracy-fairness Pareto frontier.</p>\n  <div class=\"bg-[#f6f0dc] p-3 rounded-xl border-2 border-[#151b20] space-y-2 text-xs\">\n    <span class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider block border-b border-[#151b20]/20 pb-1\">⚡ Recommended Hands-On Experiment:</span>\n    <div class=\"flex items-start gap-2 text-[#334155]\">\n  <span class=\"text-[#0e7490] font-bold font-mono text-xs\">1.</span>\n  <span class=\"text-xs leading-relaxed\">Scroll down to the interactive workbench section below the slide player to access the live laboratory.</span>\n</div><div class=\"flex items-start gap-2 text-[#334155]\">\n  <span class=\"text-[#0e7490] font-bold font-mono text-xs\">2.</span>\n  <span class=\"text-xs leading-relaxed\">Click &#x27;Launch Fairness Meter Workbench →&#x27; to examine baseline state, then trigger &#x27;Inject anomaly / Run test&#x27; to simulate failure modes.</span>\n</div><div class=\"flex items-start gap-2 text-[#334155]\">\n  <span class=\"text-[#0e7490] font-bold font-mono text-xs\">3.</span>\n  <span class=\"text-xs leading-relaxed\">Audit telemetry metrics and observe how defensive schema contracts guard downstream models.</span>\n</div>\n  </div>\n</div>"
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
          "contentHtml": "<div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[4px_4px_0px_#151b20] my-2 overflow-x-auto text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-2 text-left flex items-center justify-between border-b-2 border-[#151b20]/15 pb-1\">\n    <span class=\"flex items-center gap-1.5\">\n      <span>📊 Architecture &amp; Workflow Diagram</span>\n      <span class=\"text-[#151b20]/40\">•</span>\n      <span class=\"text-[#334155]\">System Flowchart</span>\n    </span>\n    <span class=\"text-[#0e7490] text-[9px] font-mono bg-[#c9f3f4] px-1.5 py-0.5 rounded border border-[#151b20]\">Mermaid SVG</span>\n  </div>\n  <pre class=\"mermaid py-1 flex justify-center text-xs overflow-x-auto leading-normal\">flowchart TD\n  %% Standard 5-Color Semantic Palette\n  classDef blue fill:#c9f3f4,stroke:#151b20,stroke-width:2px,color:#151b20;\n  classDef amber fill:#fff0b9,stroke:#151b20,stroke-width:2px,color:#151b20;\n  classDef green fill:#e7f4c8,stroke:#151b20,stroke-width:2px,color:#151b20;\n  classDef purple fill:#e2dfff,stroke:#151b20,stroke-width:2px,color:#151b20;\n  classDef red fill:#ffd8ce,stroke:#151b20,stroke-width:2px,color:#151b20;\n\n  Dataset[\"Raw Tabular Dataset<br/>(Adult Income / COMPAS)\"]:::blue\n\n  MetricAudit[\"Stage 1: MetricFrame Audit<br/>Evaluate Group Selection Rates & FPR<br/>Compute Δ_DP and Δ_EO\"]:::red\n\n  ReductionsGame[\"Stage 2: Two-Player Reductions Game<br/>Primal: min Cost-Sensitive Loss<br/>Dual: max Multipliers λ via Exponentiated Gradient\"]:::amber\n\n  OptHypothesis[\"Stage 3: Randomized Hypothesis Q<br/>Weighted Mixture of Base Classifiers<br/>Q = Σ α_t h_t\"]:::green\n\n  FinalAudit[\"Stage 4: Post-Mitigation Audit<br/>Verified: Δ_DP ≤ ε, Δ_EO ≤ ε<br/>Preserved: 98%+ Original Accuracy\"]:::purple\n\n  Dataset --> MetricAudit\n  MetricAudit --> ReductionsGame\n  ReductionsGame --> OptHypothesis\n  OptHypothesis --> FinalAudit</pre>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">◆</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">A Primal Player (The Learner)</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">Finds an unconstrained cost-sensitive hypothesis $h \\in \\mathcal{H}$ minimizing weighted empirical risk.</span>\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">▸</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">A Dual Player (The Auditor)</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">Adjusts Lagrange multipliers $\\vec{\\lambda} \\in \\mathbb{R}_+^K$ via exponentiated gradient updates to penalize demographic group violations.</span>\n  </div>\n</div>"
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
          "contentHtml": "<div class=\"p-3.5 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[4px_4px_0px_#151b20] my-2 overflow-x-auto text-center\">\n  <div class=\"text-[10px] font-mono text-[#0e7490] font-black uppercase tracking-wider mb-2 text-left flex items-center justify-between border-b-2 border-[#151b20]/15 pb-1\">\n    <span class=\"flex items-center gap-1.5\">\n      <span>📊 Architecture &amp; Workflow Diagram</span>\n      <span class=\"text-[#151b20]/40\">•</span>\n      <span class=\"text-[#334155]\">System Flowchart</span>\n    </span>\n    <span class=\"text-[#0e7490] text-[9px] font-mono bg-[#c9f3f4] px-1.5 py-0.5 rounded border border-[#151b20]\">Mermaid SVG</span>\n  </div>\n  <pre class=\"mermaid py-1 flex justify-center text-xs overflow-x-auto leading-normal\">flowchart TD\n  %% Standard 5-Color Semantic Palette\n  classDef blue fill:#c9f3f4,stroke:#151b20,stroke-width:2px,color:#151b20;\n  classDef amber fill:#fff0b9,stroke:#151b20,stroke-width:2px,color:#151b20;\n  classDef green fill:#e7f4c8,stroke:#151b20,stroke-width:2px,color:#151b20;\n  classDef purple fill:#e2dfff,stroke:#151b20,stroke-width:2px,color:#151b20;\n  classDef red fill:#ffd8ce,stroke:#151b20,stroke-width:2px,color:#151b20;\n\n  Dataset[\"Raw Tabular Dataset<br/>(Adult Income / COMPAS)\"]:::blue\n\n  MetricAudit[\"Stage 1: MetricFrame Audit<br/>Evaluate Group Selection Rates & FPR<br/>Compute Δ_DP and Δ_EO\"]:::red\n\n  ReductionsGame[\"Stage 2: Two-Player Reductions Game<br/>Primal: min Cost-Sensitive Loss<br/>Dual: max Multipliers λ via Exponentiated Gradient\"]:::amber\n\n  OptHypothesis[\"Stage 3: Randomized Hypothesis Q<br/>Weighted Mixture of Base Classifiers<br/>Q = Σ α_t h_t\"]:::green\n\n  FinalAudit[\"Stage 4: Post-Mitigation Audit<br/>Verified: Δ_DP ≤ ε, Δ_EO ≤ ε<br/>Preserved: 98%+ Original Accuracy\"]:::purple\n\n  Dataset --> MetricAudit\n  MetricAudit --> ReductionsGame\n  ReductionsGame --> OptHypothesis\n  OptHypothesis --> FinalAudit</pre>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">◆</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">A Primal Player (The Learner)</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">Finds an unconstrained cost-sensitive hypothesis $h \\in \\mathcal{H}$ minimizing weighted empirical risk.</span>\n  </div>\n</div><div class=\"p-3 rounded-xl bg-[#fffdf7] border-2 border-[#151b20] shadow-[3px_3px_0px_#151b20] flex items-start gap-2.5 my-2\">\n  <span class=\"text-[#0e7490] font-black text-sm mt-0.5\">▸</span>\n  <div>\n    <strong class=\"text-[#0e7490] text-xs md:text-sm font-black block\">A Dual Player (The Auditor)</strong>\n    <span class=\"text-[#334155] text-xs block mt-0.5 leading-relaxed font-medium\">Adjusts Lagrange multipliers $\\vec{\\lambda} \\in \\mathbb{R}_+^K$ via exponentiated gradient updates to penalize demographic group violations.</span>\n  </div>\n</div>"
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
