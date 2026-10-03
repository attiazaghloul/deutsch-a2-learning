/* Original Goethe-Zertifikat A1 (Start Deutsch 1)-style practice exam. No official questions are reproduced.
   Same structure as data_exam_b1.js: four modules worth 25 points each. */
window.A1_EXAM = {
  title: "Goethe-Zertifikat A1 Prüfungstraining",
  note: "Originales interaktives Modelltraining, orientiert an Aufbau, Themen und Zeitrahmen von Start Deutsch 1: Lesen, Hören, Schreiben und Sprechen.",
  modules: {
    lesen: {
      title: "Lesen", duration: 25, points: 25,
      parts: [
        {
          title: "Teil 1 · E-Mail",
          instruction: "Lies die E-Mail. Sind die Aussagen richtig oder falsch?",
          text: `<b>Betreff: Einladung zur Party</b><br><br>
          Hallo Tom,<br>
          am Samstag mache ich eine kleine Party. Ich lade dich herzlich ein! Wir treffen uns um 18 Uhr bei mir, in der Lindenstraße 12. Das Haus ist neben dem Supermarkt. Kannst du einen Salat mitbringen? Ich koche Nudeln, und Jonas bringt die Getränke mit. Meine Handynummer ist 0176 5551234. Bitte schreib mir bis Donnerstag, ob du kommst.<br>
          Liebe Grüße<br>
          Mia`,
          questions: [
            { q: "Die Party ist am Sonntag.", o: ["Richtig", "Falsch"], a: 1 },
            { q: "Die Party beginnt um 18 Uhr.", o: ["Richtig", "Falsch"], a: 0 },
            { q: "Tom soll einen Salat mitbringen.", o: ["Richtig", "Falsch"], a: 0 },
            { q: "Mia kocht Suppe.", o: ["Richtig", "Falsch"], a: 1 },
            { q: "Tom muss bis Samstag antworten.", o: ["Richtig", "Falsch"], a: 1 }
          ]
        },
        {
          title: "Teil 2 · Kleinanzeigen",
          instruction: "Lies die Anzeigen. Welche Anzeige passt zu welcher Person? Wähle den richtigen Buchstaben.",
          text: `<b>A</b> Deutschkurs für Anfänger – Montag und Mittwoch, 18–20 Uhr, Sprachschule Linde, Tel. 040 123456<br><br>
          <b>B</b> Fahrrad zu verkaufen – wie neu, nur 80 Euro, Tel. 0151 987654<br><br>
          <b>C</b> Zimmer in Hamburg für eine Mitbewohnerin – 350 Euro, ab 1. März<br><br>
          <b>D</b> Pizza-Service Roma – Pizza ab 6 Euro, Lieferung gratis, täglich 11–23 Uhr<br><br>
          <b>E</b> Babysitter gesucht – Montag bis Freitag, 15–18 Uhr, Tel. 0171 333444`,
          questions: [
            { q: "Sara sucht ein Zimmer in Hamburg.", o: ["A", "B", "C", "D", "E"], a: 2 },
            { q: "Max möchte Deutsch lernen.", o: ["A", "B", "C", "D", "E"], a: 0 },
            { q: "Olga hat Hunger und möchte Essen bestellen.", o: ["A", "B", "C", "D", "E"], a: 3 },
            { q: "Karim braucht ein Fahrrad.", o: ["A", "B", "C", "D", "E"], a: 1 },
            { q: "Lena sucht Arbeit am Nachmittag.", o: ["A", "B", "C", "D", "E"], a: 4 }
          ]
        },
        {
          title: "Teil 3 · Schilder und Hinweise",
          instruction: "Lies die Hinweise. Was bedeutet das? Wähle a, b oder c.",
          text: "Du siehst diese Hinweise in der Stadt. Wähle jeweils die passende Erklärung.",
          questions: [
            { q: "„Heute geschlossen“ – Was bedeutet das?", o: ["Man kann heute nicht hineingehen.", "Man kann heute länger bleiben.", "Heute gibt es etwas gratis."], a: 0 },
            { q: "„Bitte leise! Hier lernen Menschen.“ (in der Bibliothek)", o: ["Man darf hier Musik hören.", "Man soll nicht laut sprechen.", "Man kann hier essen."], a: 1 },
            { q: "„Eintritt frei“ – Was bedeutet das?", o: ["Man muss viel bezahlen.", "Man braucht eine Reservierung.", "Man muss nichts bezahlen."], a: 2 },
            { q: "„Fahrräder bitte hier abstellen“ – Was kann man hier machen?", o: ["Sein Fahrrad parken.", "Ein Fahrrad kaufen.", "Mit dem Fahrrad fahren."], a: 0 },
            { q: "„Rauchen verboten“ – Was bedeutet das?", o: ["Man kann hier rauchen.", "Man darf hier nicht rauchen.", "Man soll hier ein Taxi nehmen."], a: 1 }
          ]
        }
      ]
    },
    hoeren: {
      title: "Hören", duration: 20, points: 25,
      parts: [
        {
          id: "hoeren-1", title: "Teil 1 · Kurze Gespräche", plays: 2,
          instruction: "Du hörst fünf kurze Gespräche. Wähle die richtige Antwort a, b oder c.",
          script: "Gespräch eins. Verkäuferin: Guten Tag, was möchten Sie? Kunde: Ich möchte zwei Brötchen und ein Brot, bitte. Verkäuferin: Gern. Das macht vier Euro zwanzig. Gespräch zwei. Frau Weber: Entschuldigung, wann beginnt der Deutschkurs? Frau Klein: Der Kurs beginnt um Viertel nach acht. Gespräch drei. Tom: Entschuldigung, wo ist der Bahnhof? Passantin: Gehen Sie geradeaus und dann rechts. Der Bahnhof ist neben der Kirche. Gespräch vier. Anna: Hast du am Samstag Zeit? Max: Nein, am Samstag muss ich arbeiten. Aber am Sonntag habe ich frei. Gespräch fünf. Kellner: Möchten Sie etwas trinken? Gast: Ja, ein Wasser und einen Apfelsaft, bitte.",
          questions: [
            { q: "Was kostet der Einkauf?", o: ["3,20 Euro", "4,20 Euro", "4,02 Euro"], a: 1 },
            { q: "Wann beginnt der Deutschkurs?", o: ["Um acht Uhr", "Um Viertel nach acht", "Um halb neun"], a: 1 },
            { q: "Wo ist der Bahnhof?", o: ["Neben der Kirche", "Neben dem Hotel", "Neben dem Park"], a: 0 },
            { q: "Wann hat Max frei?", o: ["Am Samstag", "Am Sonntag", "Am Freitag"], a: 1 },
            { q: "Was bestellt der Gast?", o: ["Kaffee und Tee", "Cola und Wasser", "Wasser und Apfelsaft"], a: 2 }
          ]
        },
        {
          id: "hoeren-2", title: "Teil 2 · Eine Nachricht", plays: 2,
          instruction: "Du hörst eine Nachricht auf dem Anrufbeantworter. Sind die Aussagen richtig oder falsch?",
          script: "Hallo Lukas, hier ist Eva. Ich habe eine Frage zum Wochenende. Am Samstag gehen wir mit Freunden schwimmen. Wir treffen uns um zehn Uhr vor dem Schwimmbad. Bitte bring ein Handtuch und etwas zu trinken mit. Danach essen wir zusammen im Restaurant. Ruf mich bitte heute Abend an. Meine Nummer ist null eins sieben sechs, fünf fünf fünf, eins zwei drei vier. Tschüs!",
          questions: [
            { q: "Eva und Lukas gehen am Samstag schwimmen.", o: ["Richtig", "Falsch"], a: 0 },
            { q: "Sie treffen sich um elf Uhr.", o: ["Richtig", "Falsch"], a: 1 },
            { q: "Lukas soll ein Handtuch mitbringen.", o: ["Richtig", "Falsch"], a: 0 },
            { q: "Nach dem Schwimmen essen sie zu Hause.", o: ["Richtig", "Falsch"], a: 1 },
            { q: "Lukas soll Eva heute Abend anrufen.", o: ["Richtig", "Falsch"], a: 0 }
          ]
        },
        {
          id: "hoeren-3", title: "Teil 3 · Ein Gespräch über eine Party", plays: 2,
          instruction: "Du hörst ein Gespräch zwischen Lea und Paul. Wähle die richtige Antwort a, b oder c.",
          script: "Lea: Hallo Paul, wann hast du eigentlich Geburtstag? Paul: Am dritten Mai. Das ist schon nächste Woche. Lea: Super! Machst du eine Party? Paul: Ja, am Samstag um sieben Uhr bei mir zu Hause. Möchtest du kommen? Lea: Gern! Was soll ich mitbringen? Paul: Vielleicht Saft oder einen Kuchen. Lea: Ich backe einen Kuchen. Wo wohnst du denn? Paul: Meine Adresse ist Gartenweg fünf. Lea: Okay, dann bis Samstag. Ich freue mich!",
          questions: [
            { q: "Wann hat Paul Geburtstag?", o: ["Am 3. Mai", "Am 5. Mai", "Am 13. Mai"], a: 0 },
            { q: "Wann ist die Party?", o: ["Am Sonntag um sieben", "Am Samstag um acht", "Am Samstag um sieben"], a: 2 },
            { q: "Was bringt Lea mit?", o: ["Saft", "Salat", "Einen Kuchen"], a: 2 },
            { q: "Wo wohnt Paul?", o: ["Gartenweg 5", "Gartenweg 15", "Lindenweg 5"], a: 0 },
            { q: "Wie reagiert Lea auf die Einladung?", o: ["Sie sagt ab.", "Sie freut sich und kommt.", "Sie hat keine Zeit."], a: 1 }
          ]
        }
      ]
    },
    schreiben: {
      title: "Schreiben", duration: 20, points: 25,
      tasks: [
        {
          title: "Aufgabe 1 · Formular",
          prompt: "Sie möchten einen Deutschkurs in der Sprachschule Linde machen. Füllen Sie das Anmeldeformular mit Ihren Daten aus. Schreiben Sie: Familienname, Vorname, Geburtsdatum, Wohnort, Telefonnummer, E-Mail-Adresse, Muttersprache und Wunschkurs (Vormittag oder Abend).",
          minWords: 12,
          checklist: [
            "Ich habe Familienname und Vorname geschrieben.",
            "Ich habe Geburtsdatum und Wohnort genannt.",
            "Ich habe Telefonnummer und E-Mail-Adresse geschrieben.",
            "Ich habe Muttersprache und Wunschkurs genannt.",
            "Ich habe alle Angaben vollständig und lesbar geschrieben."
          ],
          model: "Familienname: Hassan · Vorname: Ahmed · Geburtsdatum: 05.05.1998 · Wohnort: Hamburg · Telefonnummer: 0171 8264731 · E-Mail-Adresse: ahmed.hassan@mail-beispiel.de · Muttersprache: Arabisch · Wunschkurs: Abend."
        },
        {
          title: "Aufgabe 2 · Nachricht an einen Freund",
          prompt: "Ihr Freund Tom hat bald Geburtstag. Schreiben Sie ihm eine E-Mail (etwa 30 Wörter): Gratulieren Sie, sagen Sie, dass Sie am Samstag kommen, und fragen Sie, was Sie mitbringen sollen.",
          minWords: 25,
          checklist: [
            "Ich habe eine passende Anrede geschrieben (z. B. Lieber Tom,).",
            "Ich habe zum Geburtstag gratuliert.",
            "Ich habe gesagt, dass ich am Samstag komme.",
            "Ich habe gefragt, was ich mitbringen soll.",
            "Ich habe mit einem Gruß geschlossen (z. B. Viele Grüße).",
            "Ich habe das Verb im Satz auf Position 2 gestellt."
          ],
          model: "Lieber Tom, herzlichen Glückwunsch zum Geburtstag! Ich komme gern am Samstag zu deiner Party. Wann beginnt sie? Was soll ich mitbringen? Soll ich Saft oder einen Kuchen mitbringen? Viele Grüße, Ahmed"
        }
      ]
    },
    sprechen: {
      title: "Sprechen", duration: 15, points: 25,
      tasks: [
        {
          title: "Teil 1 · Sich vorstellen",
          prompt: "Stellen Sie sich vor. Sprechen Sie über: Name, Alter, Land, Wohnort, Sprachen, Beruf und Hobby.",
          help: ["Name", "Alter", "Land", "Wohnort", "Sprachen", "Beruf", "Hobby"],
          prep: 60, speak: 60
        },
        {
          title: "Teil 2 · Fragen und Antworten",
          prompt: "Ziehen Sie eine Karte mit einem Stichwort, zum Beispiel „Geburtstag“, „Essen“, „Wohnort“, „Hobby“ oder „Telefonnummer“, und stellen Sie eine Frage dazu. Ihr Partner antwortet. Beispiel: Geburtstag? – Wann haben Sie Geburtstag?",
          help: ["Wann …?", "Wo …?", "Wie …?", "Was …?", "Woher …?", "Hast du …?"],
          prep: 30, speak: 60
        },
        {
          title: "Teil 3 · Bitten formulieren",
          prompt: "Formulieren Sie eine Bitte zu dieser Situation: Sie sind im Restaurant und brauchen die Speisekarte. Beispiel: Geben Sie mir bitte die Speisekarte. / Die Speisekarte, bitte.",
          help: ["Bitte …", "Können Sie …?", "Geben Sie mir …", "Entschuldigung, …"],
          prep: 20, speak: 40
        }
      ],
      checklist: [
        "Ich habe alle Stichwörter genannt.",
        "Ich habe ganze Sätze gesagt.",
        "Ich habe das Verb auf Position 2 gestellt.",
        "Ich habe mindestens eine Frage richtig gestellt.",
        "Ich habe höflich gefragt und gebeten.",
        "Ich habe laut und langsam gesprochen."
      ]
    }
  }
};
