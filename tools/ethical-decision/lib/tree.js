/* Ethical decision tree engine (window.EthicalLib). */
(function (global) {
  "use strict";
  const EthicalLib = global.EthicalLib || (global.EthicalLib = {});

  EthicalLib.listScenarios = function () {
    const bag = global.EthicalScenarios || {};
    return Object.keys(bag).map(function (k) {
      const s = bag[k];
      return {
        id: s.id,
        title: s.title,
        summary: s.summary,
        teachingFocus: s.teachingFocus,
      };
    });
  };

  EthicalLib.loadScenario = function (id) {
    const bag = global.EthicalScenarios || {};
    const s = bag[id];
    if (!s) throw new Error("Unknown scenario: " + id);
    return JSON.parse(JSON.stringify(s));
  };

  EthicalLib.getNode = function (scenario, nodeId) {
    if (!scenario || !scenario.nodes) throw new Error("Scenario missing nodes.");
    const node = scenario.nodes[nodeId];
    if (!node) throw new Error("Unknown node: " + nodeId);
    return node;
  };

  /**
   * Start a walk. Returns session state.
   */
  EthicalLib.startWalk = function (scenario) {
    return {
      scenarioId: scenario.id,
      title: scenario.title,
      nodeId: scenario.start,
      path: [],
      done: false,
      outcome: null,
    };
  };

  /**
   * Apply a choice id on the current question node.
   */
  EthicalLib.choose = function (scenario, walk, choiceId) {
    if (!walk || walk.done) throw new Error("Walk already finished.");
    const node = EthicalLib.getNode(scenario, walk.nodeId);
    if (node.type !== "question") throw new Error("Current node is not a question.");
    const choice = (node.choices || []).find(function (c) {
      return c.id === choiceId;
    });
    if (!choice) throw new Error("Unknown choice: " + choiceId);

    const nextPath = walk.path.concat([
      {
        nodeId: walk.nodeId,
        prompt: node.prompt,
        choiceId: choice.id,
        choiceLabel: choice.label,
      },
    ]);

    const nextId = choice.next;
    const nextNode = EthicalLib.getNode(scenario, nextId);
    if (nextNode.type === "outcome") {
      return {
        scenarioId: walk.scenarioId,
        title: walk.title,
        nodeId: nextId,
        path: nextPath,
        done: true,
        outcome: {
          verdict: nextNode.verdict,
          title: nextNode.title,
          rationale: nextNode.rationale,
          lenses: (nextNode.lenses || []).slice(),
          nextSteps: (nextNode.nextSteps || []).slice(),
        },
      };
    }
    return {
      scenarioId: walk.scenarioId,
      title: walk.title,
      nodeId: nextId,
      path: nextPath,
      done: false,
      outcome: null,
    };
  };

  EthicalLib.back = function (scenario, walk) {
    if (!walk || !walk.path.length) return EthicalLib.startWalk(scenario);
    const path = walk.path.slice(0, -1);
    const last = walk.path[walk.path.length - 1];
    return {
      scenarioId: walk.scenarioId,
      title: walk.title,
      nodeId: last.nodeId,
      path: path,
      done: false,
      outcome: null,
    };
  };

  EthicalLib.verdictLabel = function (verdict) {
    if (verdict === "proceed") return "Proceed";
    if (verdict === "revise") return "Revise";
    if (verdict === "stop") return "Stop";
    return String(verdict || "");
  };
})(typeof window !== "undefined" ? window : globalThis);
