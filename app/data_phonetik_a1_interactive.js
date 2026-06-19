/* Interactive exercises for Deutsch ueben Phonetik A1. */
(function () {
  const text = (prompt, answer, extra = {}) => ({type: "text", prompt, answer: Array.isArray(answer) ? answer : [answer], ...extra});
  const choice = (prompt, options, answer, extra = {}) => ({type: "choice", prompt, options, answer, ...extra});
  const tf = (prompt, answer) => choice(prompt, ["richtig", "falsch"], answer ? 0 : 1);

  window.PHONETIK_A1_INTERACTIVE = {
    A1: [
      {title: "1 · Richtig ausgesprochen?", tracks: ["1.01"], questions: [
        choice("Der Mann sagt:", ["mehr Wasser", "Meerwasser"], 1),
        choice("Der Mann meint:", ["mehr Wasser", "Meerwasser"], 0)
      ]},
      {title: "2b · Silben zählen", tracks: ["1.02"], questions: [
        text("1. Silbe (Beispiel):", ["Husten", "Fieber", "Schmerzen"]),
        text("2. Silbe:", ["gesund", "Rezept", "Termin", "erkältet", "besuchen", "Tablette"]),
        text("3. oder 4. Silbe:", ["Apotheke", "Medikament", "Allergie", "Rückenschmerzen", "Wartezimmer"])
      ]}
    ],
    A2: [
      {title: "6b · Passende Antwort", tracks: ["1.17"], questions: [
        text("Guten Morgen. ->", ["Guten Morgen", "Guten Morgen."]),
        text("Herzlich willkommen. (Zimmer reserviert) ->", ["Herzlich willkommen", "Herzlich willkommen."]),
        text("Guten Appetit. ->", ["Guten Appetit", "Guten Appetit."]),
        text("Viel Erfolg! ->", ["Viel Erfolg", "Viel Erfolg!"]),
        text("Gute Besserung. ->", ["Gute Besserung", "Gute Besserung."]),
        text("Gesundheit! ->", ["Gesundheit", "Gesundheit!"]),
        text("Schönes Wochenende. ->", ["Schönes Wochenende", "Schönes Wochenende."]),
        text("Gute Reise. ->", ["Gute Reise", "Gute Reise."])
      ]}
    ],
    A3: [
      {title: "9a · Text ordnen", tracks: ["1.38"], questions: [
        text("Schreiben Sie den Text richtig:", [
          "Entschuldigung, können Sie mir bitte helfen? Ich suche den Bahnhof. Wie komme ich dorthin?"
        ])
      ]}
    ],
    B1: [
      {title: "1 · Miete oder Mitte?", tracks: ["2.01"], questions: [
        choice("Sie sagt:", ["Miete", "Mitte"], 1),
        choice("Sie meint:", ["Miete", "Mitte"], 0)
      ]},
      {title: "2a · Lang oder kurz?", tracks: ["2.02"], questions: [
        choice("1. Tee", ["lang", "kurz"], 0),
        choice("2. Brot", ["lang", "kurz"], 0),
        choice("3. Salz", ["lang", "kurz"], 1),
        choice("4. Milch", ["lang", "kurz"], 1),
        choice("5. Käse", ["lang", "kurz"], 0),
        choice("6. Wurst", ["lang", "kurz"], 1),
        choice("7. Obst", ["lang", "kurz"], 0),
        choice("8. Reis", ["lang", "kurz"], 0),
        choice("9. Saft", ["lang", "kurz"], 1),
        choice("10. Bier", ["lang", "kurz"], 0)
      ]},
      {title: "3 · Antworten", tracks: ["2.03"], questions: [
        text("Trinkst du Kaffee? ->", ["Nein, Tee", "Nein, Tee."]),
        text("Isst du ein Brötchen? ->", ["Nein, Brot", "Nein, Brot."]),
        text("Brauchst du Zucker? ->", ["Nein, Salz", "Nein, Salz."]),
        text("Sahne für den Kaffee? ->", ["Nein, Milch", "Nein, Milch."]),
        text("Trinkst du Cola? ->", ["Nein, Bier", "Nein, Bier."])
      ]}
    ],
    B2: [
      {title: "10a · Lang oder kurz?", tracks: ["2.15"], questions: [
        text("Lang (Beispiel):", ["Frühling"]),
        text("Kurz:", ["Sommer", "Herbst", "Winter", "Wind", "Regen", "Schnee", "Grad", "scheinen", "heiß", "warm", "kalt", "grau", "dreißig"])
      ]}
    ],
    B3: [
      {title: "5a · a oder ä", tracks: ["2.27"], questions: [
        text("Damen und Herren ... Ankunft:", ["An", "Ankunft"]),
        text("... Abfahrt heute von Gleis:", ["acht", "Acht"]),
        text("Vielen Dank, dass Sie heute Meridio gewählt haben:", ["Dank"]),
        text("Nächster Halt: Ansbach Haupt___:", ["bahnhof", "Bahnhof"])
      ]},
      {title: "6a · ä oder e", tracks: ["2.30"], questions: [
        text("Handygesch___ft", ["äft"]),
        text("Universit___t", ["ät"]),
        text("Hot___l", ["el"]),
        text("Zahn___rztin", ["ä"]),
        text("B___ckerei", ["ä"])
      ]}
    ],
    C8: [
      {title: "1 · Richtig ausgesprochen?", tracks: ["3.80"], questions: [
        tf("Die Jacke passt nicht.", false),
        tf("Die Frau hat eine Freundin: Jackie.", true)
      ]},
      {title: "2a · j zuordnen", tracks: ["3.81"], questions: [
        text("j (deutsch):", ["Jahr", "Job", "Journalist", "Jeans", "Januar"]),
        text("j (englisch):", ["Joghurt", "joggen", "jonglieren", "Junge"]),
        text("j (französisch):", ["Journalist"])
      ]}
    ]
  };
})();
