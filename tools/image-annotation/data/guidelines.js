/* Classic script — annotation guideline (classes + rules) for file:// safety.
 * Mirrors the "schema discipline" message of Chapter 4 sec:4.4.4 (eg:4.29). */
window.AnnGuidelines = {
  task: "Bounding-box detection",
  bookAnchor: "Chapter 4 · sec:4.4.4 · eg:4.29 (LabelImg workflow)",
  classes: [
    {
      name: "car",
      color: "#3d5a80",
      rule: "Box the whole vehicle including cabin and wheels. One box per vehicle.",
    },
    {
      name: "person",
      color: "#b45309",
      rule: "Box head to feet. Label pedestrians even when partly occluded.",
    },
    {
      name: "sign",
      color: "#1f7a4c",
      rule: "Box the sign face only, not the post.",
    },
  ],
  rules: [
    "Draw boxes tight to the object edges — no slack, no clipping.",
    "Use the exact class name from the list; synonyms (e.g. 'vehicle') fail review.",
    "Label every instance of a class, including small or partly hidden ones.",
    "One object, one box — do not merge two objects into a single box.",
  ],
};
