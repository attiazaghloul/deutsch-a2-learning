/* Interactive exercises for Deutsch üben Phonetik A1. */
(function () {
  const text = (prompt, answer, extra = {}) => ({type: "text", prompt, answer: Array.isArray(answer) ? answer : [answer], ...extra});
  const choice = (prompt, options, answer, extra = {}) => ({type: "choice", prompt, options, answer, ...extra});
  const tf = (prompt, answer) => choice(prompt, ["richtig", "falsch"], answer ? 0 : 1);
  const match = (prompt, left, options, answer, extra = {}) => ({type: "match", prompt, left, options, answer, ...extra});

  window.PHONETIK_A1_INTERACTIVE = {
    A1: [
      {title: "1 · Richtig ausgesprochen?", tracks: ["1.01"], figureRange: [0, 1], questions: [
        choice("Der Mann sagt:", ["mehr Wasser", "Meerwasser"], 1),
        choice("Der Mann meint:", ["mehr Wasser", "Meerwasser"], 0)
      ]},
      {title: "2 · Betonte Silbe (gesund oder krank)", tracks: ["1.02"], questions: [
        text("Nenne ein Wort mit Betonung auf der 1. Silbe (z. B. Husten):", ["Husten","Fieber","Schmerzen","Rückenschmerzen","Ärztin","Wartezimmer","Krankheit","Schnupfen","Schmerztablette","anrufen"]),
        text("Nenne ein Wort mit Betonung auf der 2. Silbe (z. B. gesund):", ["gesund","Rezept","Termin","verreisen","erkältet","besuchen","Tablette"]),
        text("Nenne ein Wort mit Betonung auf der 3./4. Silbe (z. B. Apotheke):", ["Apotheke","Medikament","informieren","Allergie"])
      ]},
      {title: "3 · In den Bergen – welches Wort zuerst?", tracks: ["1.03"], figureRange: [1, 2], questions: [
        choice("Was hören Sie zuerst?", ["Handy", "Pullover"], 1),
        choice("Was hören Sie zuerst?", ["Kamera", "Getränk"], 0),
        choice("Was hören Sie zuerst?", ["Regenjacke", "Schokolade"], 1)
      ]},
      {title: "5 · Monate – dieselbe betonte Silbe", tracks: ["1.06"], questions: [
        match("Welche Monate haben dieselbe betonte Silbe? Ordne zu.",
          ["1. Dezember", "2. Januar", "3. August", "4. September", "5. Juni"],
          ["April", "Juli", "November", "Februar", "Oktober"],
          [2, 3, 0, 4, 1])
      ]},
      {title: "6 · Gute Wünsche – was sagt man?", tracks: ["1.08"], questions: [
        text("Es ist 8 Uhr früh. →", ["Guten Morgen", "Guten Morgen.", "Guten Morgen!"]),
        text("Ein Gast kommt ins Hotel. →", ["Herzlich willkommen", "Herzlich willkommen.", "Herzlich willkommen!", "Willkommen"]),
        text("Das Essen kommt auf den Tisch. →", ["Guten Appetit", "Guten Appetit.", "Guten Appetit!"]),
        text("Dein Freund hat morgen eine Prüfung. →", ["Viel Erfolg", "Viel Erfolg!"]),
        text("Dein Freund ist krank. →", ["Gute Besserung", "Gute Besserung.", "Gute Besserung!"]),
        text("Jemand niest: Hatschi! →", ["Gesundheit", "Gesundheit!"]),
        text("Es ist Freitagnachmittag. →", ["Schönes Wochenende", "Schönes Wochenende.", "Schönes Wochenende!"]),
        text("Dein Freund fährt in den Urlaub. →", ["Gute Reise", "Gute Reise.", "Gute Reise!"])
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
