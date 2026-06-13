/* Original Goethe-Zertifikat A2-style practice exam. No official questions are reproduced. */
window.A2_EXAM = {
  title: "Goethe-Zertifikat A2 Prüfungstraining",
  note: "Originales interaktives Modelltraining nach der aktuellen Prüfungsstruktur für Erwachsene.",
  modules: {
    lesen: {
      title: "Lesen", duration: 30, points: 25,
      parts: [
        {
          title: "Teil 1 · Kurze Nachrichten",
          instruction: "Lies die Nachricht und wähle die richtige Antwort.",
          text: `<b>Von:</b> Lara<br><b>An:</b> Jonas<br><br>Hallo Jonas, mein Zug kommt heute erst um 18:20 Uhr an. Kannst du mich bitte nicht am Haupteingang, sondern am Ausgang Süd abholen? Dort ist es ruhiger. Wenn du keine Zeit hast, fahre ich mit dem Bus. Schreib mir bitte kurz. Lara`,
          questions: [
            {q:"Warum schreibt Lara?",o:["Sie möchte einen Zug buchen.","Sie ändert den Treffpunkt.","Sie sagt ihre Reise ab."],a:1},
            {q:"Wann kommt ihr Zug an?",o:["Um 18:02 Uhr.","Um 18:20 Uhr.","Um 20:18 Uhr."],a:1},
            {q:"Wo möchte Lara Jonas treffen?",o:["Am Haupteingang.","An der Bushaltestelle.","Am Ausgang Süd."],a:2},
            {q:"Warum wählt sie diesen Ort?",o:["Dort ist es ruhiger.","Dort fährt ihr Zug ab.","Dort gibt es ein Café."],a:0},
            {q:"Was soll Jonas tun?",o:["Kurz antworten.","Eine Fahrkarte kaufen.","Den Bus nehmen."],a:0}
          ]
        },
        {
          title: "Teil 2 · Informationstafel",
          instruction: "Lies die Informationen und wähle die passende Antwort.",
          text: `<b>Stadtbibliothek Nord</b><br>
          Mo geschlossen · Di–Fr 10–19 Uhr · Sa 10–14 Uhr<br>
          Rückgabeautomat: täglich 6–23 Uhr<br>
          Sprachcafé: Mittwoch 17 Uhr, Raum 2<br>
          Computerkurs: Freitag 16 Uhr, Anmeldung nötig<br>
          Kinderlesung: Samstag 11 Uhr, Eintritt frei`,
          questions: [
            {q:"Wann ist die Bibliothek geschlossen?",o:["Montag","Mittwoch","Samstag"],a:0},
            {q:"Wann kann man Bücher am Automaten zurückgeben?",o:["Nur während der Öffnungszeiten.","Jeden Tag bis 23 Uhr.","Nur von Dienstag bis Freitag."],a:1},
            {q:"Wo findet das Sprachcafé statt?",o:["Im Computerraum.","In Raum 2.","In der Kinderabteilung."],a:1},
            {q:"Wofür muss man sich anmelden?",o:["Für den Computerkurs.","Für das Sprachcafé.","Für die Kinderlesung."],a:0},
            {q:"Was kostet die Kinderlesung?",o:["Nichts.","Zwei Euro.","Die Anzeige sagt es nicht."],a:0}
          ]
        },
        {
          title: "Teil 3 · Forum",
          instruction: "Lies den Forumsbeitrag und beantworte die Fragen.",
          text: `<b>Thema: Lernen neben der Arbeit</b><br><br>
          Ich arbeite bis 17 Uhr und besuche zweimal pro Woche einen Deutschkurs. Früher wollte ich nach dem Kurs noch zwei Stunden lernen, aber das war zu viel. Jetzt lerne ich morgens zwanzig Minuten neue Wörter. In der Mittagspause höre ich einen kurzen Podcast. Am Wochenende treffe ich eine Lernpartnerin. So lerne ich regelmäßiger und bin weniger müde. Mein Tipp: Plant kleine Aufgaben und macht echte Pausen! <i>– Nadine</i>`,
          questions: [
            {q:"Wie oft besucht Nadine den Deutschkurs?",o:["Jeden Tag.","Zweimal pro Woche.","Nur am Wochenende."],a:1},
            {q:"Was war früher ihr Problem?",o:["Sie hatte keinen Kurs.","Sie lernte abends zu lange.","Sie kannte keine Podcasts."],a:1},
            {q:"Was macht sie morgens?",o:["Sie lernt Wortschatz.","Sie trifft ihre Lernpartnerin.","Sie hört zwei Stunden Radio."],a:0},
            {q:"Wann hört sie einen Podcast?",o:["Auf dem Arbeitsweg.","In der Mittagspause.","Vor dem Schlafen."],a:1},
            {q:"Was empfiehlt Nadine?",o:["Nur am Wochenende lernen.","Viele Aufgaben gleichzeitig machen.","Kleine Aufgaben und richtige Pausen planen."],a:2}
          ]
        },
        {
          title: "Teil 4 · Anzeigen",
          instruction: "Welche Anzeige passt zu der Situation?",
          text: `<b>A</b> Fahrradwerkstatt: Reparaturen ohne Termin, Mo–Fr bis 18 Uhr.<br><br>
          <b>B</b> Kochabend International: Gemeinsam kochen, Freitag 19 Uhr. Bitte vorher anmelden.<br><br>
          <b>C</b> Möbeltransport: Wir helfen beim Umzug, auch am Wochenende.<br><br>
          <b>D</b> Sprachgruppe Online: Jeden Dienstag kostenlos sprechen und neue Leute kennenlernen.<br><br>
          <b>E</b> Stadtmuseum: Sonntag freier Eintritt, Führung um 14 Uhr.`,
          questions: [
            {q:"Mira zieht am Samstag um und braucht Hilfe.",o:["A","B","C","D","E"],a:2},
            {q:"Tarek möchte kostenlos Deutsch sprechen, aber zu Hause bleiben.",o:["A","B","C","D","E"],a:3},
            {q:"Lea möchte am Sonntag Kultur erleben und nichts bezahlen.",o:["A","B","C","D","E"],a:4},
            {q:"Paul möchte am Freitagabend mit anderen Essen machen.",o:["A","B","C","D","E"],a:1},
            {q:"Annas Fahrrad ist kaputt und sie hat keinen Termin.",o:["A","B","C","D","E"],a:0}
          ]
        }
      ]
    },
    hoeren: {
      title: "Hören", duration: 30, points: 25,
      parts: [
        {
          id:"h1",title:"Teil 1 · Kurze Ansagen",plays:2,
          instruction:"Höre fünf kurze Ansagen. Wähle die richtige Antwort.",
          script:"Nummer eins. Achtung auf Gleis drei: Der Regionalzug nach Bonn fährt heute zehn Minuten später ab. Nummer zwei. Guten Tag, hier ist die Praxis Doktor Kern. Ihr Termin am Donnerstag ist nicht um zehn, sondern um elf Uhr. Nummer drei. Liebe Kundinnen und Kunden, unsere Bäckerei schließt heute schon um siebzehn Uhr. Nummer vier. Hallo Sara, ich bin noch im Büro. Wir treffen uns direkt vor dem Kino, nicht im Café. Nummer fünf. Wegen des starken Regens beginnt das Straßenfest heute erst um fünfzehn Uhr.",
          questions:[
            {q:"1. Was passiert mit dem Zug?",o:["Er fährt früher.","Er hat Verspätung.","Er fährt von Gleis zehn."],a:1},
            {q:"2. Wann ist der Arzttermin?",o:["Donnerstag um 10 Uhr.","Mittwoch um 11 Uhr.","Donnerstag um 11 Uhr."],a:2},
            {q:"3. Wann schließt die Bäckerei?",o:["Um 15 Uhr.","Um 17 Uhr.","Um 19 Uhr."],a:1},
            {q:"4. Wo ist der Treffpunkt?",o:["Vor dem Kino.","Im Café.","Im Büro."],a:0},
            {q:"5. Warum beginnt das Fest später?",o:["Wegen des Regens.","Wegen eines Films.","Wegen des Verkehrs."],a:0}
          ]
        },
        {
          id:"h2",title:"Teil 2 · Gespräch",plays:1,
          instruction:"Höre das Gespräch einmal. Was ist richtig?",
          script:"Frau: Guten Morgen. Ich möchte ein Konto eröffnen. Mann: Gern. Haben Sie Ihren Ausweis dabei? Frau: Ja, aber die Meldebestätigung liegt zu Hause. Mann: Kein Problem. Sie können sie bis Freitag per E-Mail schicken. Frau: Gut. Kann ich die Bankkarte sofort bekommen? Mann: Nein, die Karte kommt in ungefähr einer Woche mit der Post. Die Geheimzahl erhalten Sie in einem zweiten Brief. Frau: Alles klar. Kostet das Konto etwas? Mann: Für Studierende ist es kostenlos. Bringen Sie bitte noch Ihre Studienbescheinigung mit.",
          questions:[
            {q:"Was möchte die Frau?",o:["Geld abheben.","Ein Konto eröffnen.","Eine Karte sperren."],a:1},
            {q:"Welches Dokument fehlt?",o:["Der Ausweis.","Die Meldebestätigung.","Der Mietvertrag."],a:1},
            {q:"Bis wann kann sie es schicken?",o:["Bis Freitag.","In einer Woche.","Heute Abend."],a:0},
            {q:"Wie bekommt sie die Bankkarte?",o:["Sofort am Schalter.","Per E-Mail.","Mit der Post."],a:2},
            {q:"Wann ist das Konto kostenlos?",o:["Für Studierende.","Für alle neuen Kunden.","Nur im ersten Monat."],a:0}
          ]
        },
        {
          id:"h3",title:"Teil 3 · Interview",plays:1,
          instruction:"Höre das Interview einmal und wähle die richtige Antwort.",
          script:"Moderator: Heute sprechen wir mit Elena über ihre Arbeit. Elena, was machst du? Elena: Ich organisiere Veranstaltungen in einem Kulturzentrum. Ich plane Konzerte und Vorträge und spreche mit Künstlern und Technikern. Moderator: Arbeitest du immer im Büro? Elena: Nein. Vor einer Veranstaltung bin ich oft im Saal. Dann kontrolliere ich Licht, Ton und Sitzplätze. Moderator: Was gefällt dir an der Arbeit? Elena: Kein Tag ist gleich. Aber am Wochenende zu arbeiten ist manchmal schwierig. Moderator: Was möchtest du später machen? Elena: Ich möchte ein größeres Musikfestival organisieren und mehr Verantwortung übernehmen.",
          questions:[
            {q:"Wo arbeitet Elena?",o:["In einem Kulturzentrum.","Bei einer Bank.","An einer Schule."],a:0},
            {q:"Was plant sie?",o:["Zugreisen.","Konzerte und Vorträge.","Sprachprüfungen."],a:1},
            {q:"Was kontrolliert sie im Saal?",o:["Licht, Ton und Sitzplätze.","Tickets und Pässe.","Essen und Getränke."],a:0},
            {q:"Was findet sie schwierig?",o:["Telefonieren.","Arbeit am Wochenende.","Arbeit im Team."],a:1},
            {q:"Was ist ihr Zukunftswunsch?",o:["Weniger Verantwortung.","Ein Musikfestival organisieren.","Nur noch im Büro arbeiten."],a:1}
          ]
        },
        {
          id:"h4",title:"Teil 4 · Telefonnachricht",plays:2,
          instruction:"Höre die Nachricht zweimal. Wähle die richtige Antwort.",
          script:"Guten Tag, Frau Demir. Hier spricht Lukas Brandt von der Firma Stadtblick. Ich rufe wegen Ihres Vorstellungsgesprächs an. Der Termin am Montag um neun Uhr muss leider verschoben werden, weil Herr Weber krank ist. Wir können Ihnen Dienstag um vierzehn Uhr oder Mittwoch um zehn Uhr anbieten. Bitte rufen Sie mich heute bis siebzehn Uhr unter der Nummer null sieben eins, vier acht zwei, drei neun zurück. Bringen Sie zum Gespräch bitte Ihren Lebenslauf und Ihre Zeugnisse mit. Vielen Dank.",
          questions:[
            {q:"Warum ruft Herr Brandt an?",o:["Wegen einer Bewerbung.","Wegen einer Reise.","Wegen eines Bankkontos."],a:0},
            {q:"Warum wird der Termin verschoben?",o:["Frau Demir ist krank.","Herr Weber ist krank.","Das Büro ist geschlossen."],a:1},
            {q:"Welcher neue Termin ist möglich?",o:["Montag um 9 Uhr.","Dienstag um 14 Uhr.","Mittwoch um 17 Uhr."],a:1},
            {q:"Bis wann soll Frau Demir zurückrufen?",o:["Heute bis 17 Uhr.","Morgen bis 14 Uhr.","Mittwoch bis 10 Uhr."],a:0},
            {q:"Was soll sie mitbringen?",o:["Ausweis und Fahrkarte.","Lebenslauf und Zeugnisse.","Formular und Bankkarte."],a:1}
          ]
        }
      ]
    },
    schreiben: {
      title:"Schreiben",duration:30,points:25,
      tasks:[
        {
          title:"Teil 1 · Nachricht schreiben",minWords:30,
          prompt:"Du kannst morgen nicht zum Deutschkurs kommen. Schreibe deiner Kursleiterin Frau Roth. Entschuldige dich, nenne den Grund und frage nach den Hausaufgaben.",
          checklist:["Anrede und Gruß","Entschuldigung","Grund genannt","Nach Hausaufgaben gefragt","Mindestens 30 Wörter"],
          model:"Liebe Frau Roth, leider kann ich morgen nicht zum Deutschkurs kommen, weil ich einen wichtigen Arzttermin habe. Das tut mir leid. Könnten Sie mir bitte schreiben, welche Hausaufgaben wir machen sollen? Am Freitag bin ich wieder im Kurs. Viele Grüße, Karim"
        },
        {
          title:"Teil 2 · E-Mail schreiben",minWords:40,
          prompt:"Dein Freund Alex zieht am Samstag um und bittet um Hilfe. Antworte: Sage zu, frage nach Uhrzeit und Adresse und biete an, etwas mitzubringen.",
          checklist:["Passende Anrede und Gruß","Hilfe zugesagt","Nach Uhrzeit gefragt","Nach Adresse gefragt","Etwas angeboten"],
          model:"Hallo Alex, natürlich helfe ich dir am Samstag gern beim Umzug. Um wie viel Uhr sollen wir anfangen und wie lautet deine neue Adresse? Ich kann mit dem Auto kommen und Werkzeug mitbringen. Brauchst du auch Getränke oder etwas zu essen? Bis Samstag! Viele Grüße, Samir"
        }
      ]
    },
    sprechen: {
      title:"Sprechen",duration:15,points:25,
      tasks:[
        {title:"Teil 1 · Sich vorstellen",prep:30,speak:60,prompt:"Stell dich vor. Sprich über Name, Herkunft, Wohnort, Beruf oder Ausbildung, Sprachen und Freizeit.",help:["Ich heiße ...","Ich komme aus ...","Zurzeit arbeite ich als ...","In meiner Freizeit ..."]},
        {title:"Teil 2 · Über sich sprechen",prep:60,speak:90,prompt:"Thema: Wochenende. Was machst du normalerweise? Mit wem? Wo? Was hast du letztes Wochenende gemacht?",help:["Normalerweise ...","Am liebsten ...","Letztes Wochenende habe ich ...","Das war ..., weil ..."]},
        {title:"Teil 3 · Gemeinsam planen",prep:60,speak:120,prompt:"Du möchtest mit deiner Partnerin oder deinem Partner eine Geburtstagsfeier planen. Sprecht über Termin, Ort, Essen, Gäste und Aufgaben.",help:["Wie wäre es mit ...?","Das passt mir gut.","Ich kann ... organisieren.","Könntest du ... mitbringen?"]}
      ],
      checklist:["Auf alle Punkte eingegangen","Verständlich und zusammenhängend gesprochen","Passenden A2-Wortschatz benutzt","Fragen gestellt oder reagiert","Gut verständliche Aussprache"]
    }
  }
};
