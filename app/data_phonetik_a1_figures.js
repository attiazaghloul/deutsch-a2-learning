/* Real illustration crops for Deutsch üben Phonetik A1 (drawings only, no text sheets).
   Built chapter by chapter. Empty arrays = drawings not added yet. */
(function () {
  const B = "assets/listening/a1-phonetik/figures";
  const fig = (path, caption) => ({src: `${B}/${path}`, caption});

  window.PHONETIK_A1_FIGURES = {
    // ---- A · Prosodie ----
    A1: [
      fig("a1/a1-garden.webp", "Übung 1 · „Meerwasser“ oder „mehr Wasser“"),
      fig("a1/a1-bergen.webp", "Übung 3 · In den Bergen")
    ],
    A2: [],
    A3: [],
    // ---- B · Vokale ----
    B1: [], B2: [], B3: [], B4: [], B5: [], B6: [], B7: [], B8: [],
    // ---- C · Konsonanten ----
    C1: [], C2: [], C3: [], C4: [], C5: [], C6: [], C7: [], C8: []
  };
})();
