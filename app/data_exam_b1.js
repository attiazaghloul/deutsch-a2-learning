/* Original Goethe-Zertifikat B1-style practice exam. No official questions are reproduced. */
window.B1_EXAM = {
  title: "Goethe-Zertifikat B1 Prüfungstraining",
  note: "Originales interaktives Modelltraining, orientiert an Aufbau, Themen und Zeitrahmen der B1-Prüfung für Erwachsene.",
  modules: {
    lesen: {
      title: "Lesen", duration: 65, points: 25,
      parts: [
        {
          title: "Teil 1 · Blogbeitrag",
          instruction: "Lies den Blogbeitrag. Sind die Aussagen richtig oder falsch?",
          text: `<b>Mein Jahr ohne Auto</b><br><br>
          Vor einem Jahr habe ich mein Auto verkauft. Der Grund war eigentlich nicht die Umwelt, sondern das Geld: Versicherung, Reparaturen und Parkgebühren haben mich jeden Monat fast 400 Euro gekostet. Am Anfang hatte ich Angst, dass ich zu spät zur Arbeit komme. Tatsächlich brauche ich mit dem Fahrrad nur zehn Minuten länger als früher mit dem Auto, weil ich keinen Parkplatz mehr suchen muss. Schwierig wird es nur, wenn ich meine Eltern auf dem Land besuche. Dorthin fährt am Wochenende nur zweimal am Tag ein Bus. Deshalb leihe ich mir für diese Fahrten ein Auto bei einem Carsharing-Anbieter. Mein Fazit: Ich vermisse mein Auto kaum, und von dem gesparten Geld habe ich im Sommer eine lange Reise gemacht.`,
          questions: [
            {q:"Der Autor hat sein Auto vor allem aus Umweltgründen verkauft.",o:["Richtig","Falsch"],a:1},
            {q:"Das Auto hat ihn monatlich viel Geld gekostet.",o:["Richtig","Falsch"],a:0},
            {q:"Mit dem Fahrrad ist er deutlich langsamer bei der Arbeit.",o:["Richtig","Falsch"],a:1},
            {q:"Zu seinen Eltern kommt man am Wochenende schlecht mit dem Bus.",o:["Richtig","Falsch"],a:0},
            {q:"Mit dem gesparten Geld hat er ein neues Fahrrad gekauft.",o:["Richtig","Falsch"],a:1}
          ]
        },
        {
          title: "Teil 2 · Zeitungsartikel",
          instruction: "Lies den Text und wähle die richtige Antwort.",
          text: `<b>Repair-Cafés: Reparieren statt wegwerfen</b><br><br>
          In immer mehr Städten treffen sich Menschen einmal im Monat in sogenannten Repair-Cafés. Dort helfen Freiwillige dabei, kaputte Toaster, Lampen, Fahrräder oder Kleidung zu reparieren. Die Reparatur selbst ist kostenlos; nur Ersatzteile muss man bezahlen. „Viele Geräte haben nur einen kleinen Fehler“, erklärt Ingrid Maurer, die das Repair-Café in Kassel organisiert. „Oft ist nur ein Kabel locker oder eine Sicherung kaputt.“ Wichtig ist den Organisatoren, dass die Besucher nicht nur warten, sondern selbst mitarbeiten. So lernen sie, kleine Probleme später allein zu lösen. Neben dem Umweltschutz spielt auch der Kontakt eine große Rolle: Bei Kaffee und Kuchen kommen Nachbarn ins Gespräch, die sich sonst nie getroffen hätten. Allerdings gibt es Grenzen: Große Haushaltsgeräte wie Waschmaschinen kann man nicht mitbringen, und für Smartphones fehlt oft das nötige Spezialwerkzeug.`,
          questions: [
            {q:"Was muss man im Repair-Café bezahlen?",o:["Die Arbeit der Helfer.","Nur die Ersatzteile.","Einen monatlichen Beitrag."],a:1},
            {q:"Was sagt Ingrid Maurer über die kaputten Geräte?",o:["Die meisten kann man nicht mehr reparieren.","Oft ist das Problem ziemlich klein.","Sie sind meistens sehr alt."],a:1},
            {q:"Was sollen die Besucher tun?",o:["Bei der Reparatur mithelfen.","Kuchen für die Helfer mitbringen.","Ihre Geräte dort lassen."],a:0},
            {q:"Welche weitere Funktion haben Repair-Cafés?",o:["Sie verkaufen gebrauchte Geräte.","Menschen aus der Nachbarschaft lernen sich kennen.","Sie bieten Kurse für Elektriker an."],a:1},
            {q:"Was kann man nicht mitbringen?",o:["Kleidung.","Lampen.","Waschmaschinen."],a:2}
          ]
        },
        {
          title: "Teil 3 · Anzeigen",
          instruction: "Lies die Situationen und die Anzeigen. Welche Anzeige passt?",
          text: `<b>A</b> Abendkurs „Bewerbung digital“: Lebenslauf und Online-Bewerbung Schritt für Schritt. Di + Do, 18–20 Uhr, 4 Wochen.<br>
          <b>B</b> Sprachtandem gesucht! Spanierin (28) möchte Deutsch sprechen und hilft dir gern mit Spanisch. Treffen am Wochenende.<br>
          <b>C</b> Nachhilfe Mathematik für Schüler der Klassen 5–10, auch online. Erste Stunde gratis.<br>
          <b>D</b> Wochenendkurs Erste Hilfe – Pflicht für den Führerschein. Samstag 9–17 Uhr, Zertifikat inklusive.<br>
          <b>E</b> Gemeinschaftsgarten sucht Mitgärtner: Gemüse anbauen, ernten und teilen. Keine Vorkenntnisse nötig.<br>
          <b>F</b> Yoga für Berufstätige: früh morgens von 6:30 bis 7:30 Uhr, direkt neben dem Hauptbahnhof.`,
          questions: [
            {q:"Mona will ihren Führerschein machen und braucht noch einen Nachweis.",o:["A","D","F"],a:1},
            {q:"Karim möchte seine Bewerbungsunterlagen verbessern, hat aber nur abends Zeit.",o:["A","C","E"],a:0},
            {q:"Lea wohnt in einer Wohnung ohne Balkon und möchte gern draußen mit Pflanzen arbeiten.",o:["B","E","F"],a:1},
            {q:"Tom will vor der Arbeit etwas für seinen Körper tun.",o:["D","E","F"],a:2},
            {q:"Ana plant ein Jahr in Madrid und möchte ihre Sprachkenntnisse verbessern.",o:["B","C","A"],a:0}
          ]
        },
        {
          title: "Teil 4 · Meinungen",
          instruction: "Lies die Leserkommentare zum Thema „Homeoffice“. Ist die Person für das Homeoffice?",
          text: `<b>Jana, 34:</b> Seit ich zu Hause arbeite, spare ich jeden Tag zwei Stunden Fahrzeit. Diese Zeit verbringe ich lieber mit meiner Familie.<br>
          <b>Markus, 51:</b> Mir fehlen die Kollegen. Im Büro kann man schnell eine Frage stellen, zu Hause warte ich oft stundenlang auf eine Antwort.<br>
          <b>Selin, 27:</b> Zu Hause kann ich mich viel besser konzentrieren, weil niemand neben mir telefoniert.<br>
          <b>Paul, 45:</b> Ich habe keinen Platz für einen Schreibtisch. Am Küchentisch arbeiten ist auf Dauer nichts für mich.<br>
          <b>Nadia, 39:</b> Die Mischung ist ideal: zwei Tage Büro für Besprechungen, drei Tage zu Hause für die ruhige Arbeit. Ohne Homeoffice möchte ich nicht mehr arbeiten.`,
          questions: [
            {q:"Jana",o:["Ja","Nein"],a:0},
            {q:"Markus",o:["Ja","Nein"],a:1},
            {q:"Selin",o:["Ja","Nein"],a:0},
            {q:"Paul",o:["Ja","Nein"],a:1},
            {q:"Nadia",o:["Ja","Nein"],a:0}
          ]
        }
      ]
    },
    hoeren: {
      title: "Hören", duration: 40, points: 25,
      parts: [
        {
          id: "b1h1", title: "Teil 1 · Durchsagen und Nachrichten", plays: 2,
          instruction: "Höre fünf kurze Texte. Wähle die richtige Antwort.",
          script: "Nummer eins. Hallo Frau Weber, hier ist das Autohaus Brandt. Ihr Wagen ist leider noch nicht fertig, weil ein Ersatzteil fehlt. Sie können ihn aber am Mittwochvormittag abholen. Nummer zwei. Sehr geehrte Fahrgäste, wegen Bauarbeiten fährt die S-Bahn heute nicht bis zum Flughafen. Bitte nutzen Sie ab dem Hauptbahnhof die Ersatzbusse vor dem Nordausgang. Nummer drei. Hallo Ben, hier ist Carla. Das Konzert am Freitag fällt aus, die Sängerin ist krank. Wollen wir stattdessen ins Kino gehen? Ruf mich doch heute Abend an. Nummer vier. Und nun das Wetter: Morgen bleibt es im Norden trocken, im Süden gibt es am Nachmittag Gewitter. Die Temperaturen liegen bei vierundzwanzig Grad. Nummer fünf. Liebe Kundinnen und Kunden, nur heute bekommen Sie in unserer Obstabteilung alle Äpfel zum halben Preis. Das Angebot gilt nicht für Bio-Produkte.",
          questions: [
            {q:"1. Wann kann Frau Weber ihr Auto abholen?",o:["Heute Nachmittag.","Am Mittwochvormittag.","Wenn sie das Ersatzteil gekauft hat."],a:1},
            {q:"2. Wie kommen die Fahrgäste zum Flughafen?",o:["Mit einem Bus ab dem Hauptbahnhof.","Mit der S-Bahn vom Nordausgang.","Mit dem Taxi."],a:0},
            {q:"3. Was schlägt Carla vor?",o:["Das Konzert zu verschieben.","Ins Kino zu gehen.","Die Sängerin zu besuchen."],a:1},
            {q:"4. Wie wird das Wetter morgen im Süden?",o:["Den ganzen Tag trocken.","Am Nachmittag gibt es Gewitter.","Es wird kalt."],a:1},
            {q:"5. Was ist heute billiger?",o:["Alle Bio-Produkte.","Das ganze Obst.","Äpfel, die nicht bio sind."],a:2}
          ]
        },
        {
          id: "b1h2", title: "Teil 2 · Stadtführung", plays: 1,
          instruction: "Du nimmst an einer Stadtführung teil. Höre den Text einmal und wähle die richtige Antwort.",
          script: "Herzlich willkommen zu unserer Führung durch die Altstadt. Mein Name ist Stefan Krüger. Die Führung dauert ungefähr neunzig Minuten. Wir beginnen hier am Rathaus, das im Jahr fünfzehnhundertzwanzig gebaut wurde. Danach gehen wir durch die Fischergasse zum Fluss. Bitte bleiben Sie dort zusammen, denn auf dem Markt ist es heute sehr voll. Nach etwa einer Stunde machen wir eine kurze Pause im Café Lindner. Dort bekommen Sie mit Ihrem Ticket ein Getränk umsonst. Zum Schluss besuchen wir den Kirchturm. Der Aufstieg kostet zwei Euro extra und ist nur für Leute ohne Höhenangst geeignet. Wer nicht mitkommen möchte, kann unten im Museumsshop warten. Fotos sind überall erlaubt, nur in der Kirche nicht.",
          questions: [
            {q:"6. Wie lange dauert die Führung?",o:["Etwa eine Stunde.","Etwa anderthalb Stunden.","Etwa zwei Stunden."],a:1},
            {q:"7. Warum soll die Gruppe zusammenbleiben?",o:["Weil der Markt sehr voll ist.","Weil die Gassen gefährlich sind.","Weil der Führer schnell geht."],a:0},
            {q:"8. Was ist im Ticket inklusive?",o:["Ein Stück Kuchen.","Ein Getränk.","Der Eintritt ins Museum."],a:1},
            {q:"9. Was kostet extra?",o:["Der Kirchturm.","Das Café.","Die Fotos."],a:0},
            {q:"10. Wo darf man nicht fotografieren?",o:["Im Rathaus.","Auf dem Kirchturm.","In der Kirche."],a:2}
          ]
        },
        {
          id: "b1h3", title: "Teil 3 · Gespräch im Café", plays: 1,
          instruction: "Du hörst ein Gespräch zwischen zwei Freunden. Sind die Aussagen richtig oder falsch?",
          script: "Hallo Daniel, schön, dich zu sehen! Wie war dein erster Monat in der neuen Firma? – Ehrlich gesagt, anstrengender als gedacht, Mira. Die Kollegen sind nett, aber ich muss jeden Tag eine Stunde pendeln. – Oh, das ist lang. Fährst du mit dem Zug? – Ja, und der hat oft Verspätung. Deshalb überlege ich, in die Nähe der Firma zu ziehen. – Aber du liebst doch deine Wohnung! – Stimmt, deshalb bin ich noch unsicher. Mein Chef hat gesagt, dass ich ab nächstem Monat zweimal pro Woche von zu Hause arbeiten darf. Vielleicht reicht das schon. – Das klingt doch gut. Und wie ist die Arbeit selbst? – Sehr interessant. Ich leite schon ein kleines Projekt, das hätte ich nicht erwartet.",
          questions: [
            {q:"11. Daniel findet seinen neuen Job einfacher als erwartet.",o:["Richtig","Falsch"],a:1},
            {q:"12. Daniel fährt jeden Tag mit dem Zug zur Arbeit.",o:["Richtig","Falsch"],a:0},
            {q:"13. Daniel hat sich schon entschieden umzuziehen.",o:["Richtig","Falsch"],a:1},
            {q:"14. Bald darf Daniel teilweise im Homeoffice arbeiten.",o:["Richtig","Falsch"],a:0},
            {q:"15. Daniel ist im Projekt nur Assistent.",o:["Richtig","Falsch"],a:1}
          ]
        },
        {
          id: "b1h4", title: "Teil 4 · Radiodiskussion", plays: 2,
          instruction: "Du hörst eine Diskussion zum Thema „Sollen Kinder ein Smartphone haben?“. Wer sagt was? Die Moderatorin, Herr Albers (Lehrer) oder Frau Sommer (Mutter)?",
          script: "Moderatorin: Willkommen zu unserer Sendung. Heute sprechen wir über Smartphones für Kinder. Ich finde, dass viele Eltern hier unsicher sind. Herr Albers, Sie sind Lehrer. Was beobachten Sie? – Herr Albers: In meiner Klasse haben fast alle Zehnjährigen ein Handy. In den Pausen spielen sie kaum noch zusammen. Deshalb haben wir Handys in der Schule verboten. – Moderatorin: Frau Sommer, Ihre Tochter ist elf. Hat sie ein Smartphone? – Frau Sommer: Ja, seit einem Jahr. Sie fährt allein mit dem Bus zum Training, und ich möchte sie erreichen können. Aber wir haben klare Regeln: Am Abend bleibt das Handy in der Küche. – Herr Albers: Regeln sind wichtig, aber viele Eltern halten sie selbst nicht ein. Kinder machen nach, was Erwachsene tun. – Frau Sommer: Da haben Sie recht. Ich versuche auch, beim Essen mein Handy wegzulegen.",
          questions: [
            {q:"16. Viele Eltern wissen nicht genau, was richtig ist.",o:["Moderatorin","Herr Albers","Frau Sommer"],a:0},
            {q:"17. In der Schule dürfen die Kinder ihr Handy nicht benutzen.",o:["Moderatorin","Herr Albers","Frau Sommer"],a:1},
            {q:"18. Das Smartphone gibt Sicherheit, wenn das Kind allein unterwegs ist.",o:["Moderatorin","Herr Albers","Frau Sommer"],a:2},
            {q:"19. Erwachsene sind ein Vorbild für Kinder.",o:["Moderatorin","Herr Albers","Frau Sommer"],a:1},
            {q:"20. Beim Essen sollte das Handy keine Rolle spielen.",o:["Moderatorin","Herr Albers","Frau Sommer"],a:2}
          ]
        }
      ]
    },
    schreiben: {
      title: "Schreiben", duration: 60, points: 25,
      tasks: [
        {
          title: "Aufgabe 1 · Persönliche E-Mail (ca. 80 Wörter)", minWords: 80,
          prompt: "Du hast letztes Wochenende mit Freunden einen Ausflug gemacht. Deine Freundin Sofia konnte nicht mitkommen. Schreibe ihr eine E-Mail: Beschreibe, wo ihr wart und was ihr gemacht habt. Begründe, was dir besonders gefallen hat. Mach einen Vorschlag für einen gemeinsamen Ausflug.",
          checklist: ["Passende Anrede und Gruß","Ort und Aktivitäten beschrieben","Begründung mit weil/denn","Konkreter Vorschlag mit Termin","Mindestens 80 Wörter"],
          model: "Liebe Sofia, schade, dass du letztes Wochenende nicht dabei sein konntest! Wir sind mit dem Zug an den Bodensee gefahren. Am Vormittag haben wir eine Fahrradtour am Ufer gemacht und mittags in einem kleinen Restaurant Fisch gegessen. Am besten hat mir die Schifffahrt nach Lindau gefallen, weil man von dort die Berge so gut sehen konnte. Hast du Lust, im nächsten Monat mit mir noch einmal hinzufahren? Wie wäre es mit dem 14.? Dann können wir auch baden gehen. Schreib mir bald! Liebe Grüße, Amir"
        },
        {
          title: "Aufgabe 2 · Meinung im Forum (ca. 80 Wörter)", minWords: 80,
          prompt: "Im Online-Forum einer Zeitschrift diskutieren Leser: „Sollte man in der Stadt ganz auf das Auto verzichten?“ Schreibe deine Meinung. Nenne Argumente und ein Beispiel aus deinem Alltag.",
          checklist: ["Eigene Meinung klar genannt","Mindestens zwei Argumente","Beispiel aus dem Alltag","Konnektoren wie außerdem, trotzdem, deshalb","Mindestens 80 Wörter"],
          model: "Meiner Meinung nach sollte man in der Stadt so wenig wie möglich Auto fahren. Erstens gibt es in den meisten Städten gute Busse und Bahnen. Außerdem ist man mit dem Fahrrad oft schneller, weil man keinen Parkplatz suchen muss. Ich selbst fahre jeden Tag mit dem Rad zur Arbeit und fühle mich dadurch fitter. Trotzdem glaube ich nicht, dass alle ganz verzichten können. Wer zum Beispiel krank ist oder kleine Kinder hat, braucht manchmal ein Auto. Deshalb finde ich Carsharing eine gute Lösung."
        },
        {
          title: "Aufgabe 3 · Formelle Nachricht (ca. 40 Wörter)", minWords: 40,
          prompt: "Du hast morgen einen Termin bei deinem Kursleiter Herrn Hoffmann, um über deine Prüfung zu sprechen. Du kannst aber nicht kommen. Schreibe Herrn Hoffmann: Entschuldige dich höflich, nenne einen Grund und bitte um einen neuen Termin.",
          checklist: ["Formelle Anrede (Sehr geehrter Herr …)","Höfliche Entschuldigung","Grund genannt","Bitte um neuen Termin","Formeller Gruß"],
          model: "Sehr geehrter Herr Hoffmann, leider kann ich morgen nicht zu unserem Termin kommen, weil mein Sohn krank ist und ich bei ihm bleiben muss. Das tut mir sehr leid. Könnten wir vielleicht einen neuen Termin in der nächsten Woche vereinbaren? Mit freundlichen Grüßen Leila Haddad"
        }
      ]
    },
    sprechen: {
      title: "Sprechen", duration: 15, points: 25,
      tasks: [
        {
          title: "Teil 1 · Gemeinsam etwas planen", prep: 60, speak: 180,
          prompt: "Eine Kollegin geht in Rente. Plant zusammen eine kleine Abschiedsfeier im Büro. Sprecht über Termin, Ort, Essen und Getränke, Geschenk und wer was organisiert.",
          help: ["Was hältst du davon, wenn …?","Ich schlage vor, dass …","Das ist eine gute Idee, aber …","Dann übernehme ich …"]
        },
        {
          title: "Teil 2 · Ein Thema präsentieren", prep: 120, speak: 180,
          prompt: "Thema: „Leben in der Stadt oder auf dem Land?“ Stelle das Thema vor, berichte über deine Erfahrungen, beschreibe die Situation in deinem Heimatland, nenne Vor- und Nachteile und sage deine Meinung. Beende die Präsentation und bedanke dich.",
          help: ["In meiner Präsentation geht es um …","Ich persönlich habe erlebt, dass …","In meinem Heimatland …","Ein Vorteil ist …, ein Nachteil ist …","Zum Schluss möchte ich sagen, …"]
        },
        {
          title: "Teil 3 · Über das Thema sprechen", prep: 30, speak: 90,
          prompt: "Reagiere auf die Präsentation deines Partners: Gib eine Rückmeldung und stelle eine Frage. Beantworte danach auch Fragen zu deiner eigenen Präsentation.",
          help: ["Deine Präsentation war sehr interessant, besonders …","Mich würde noch interessieren, …","Eine Frage hätte ich noch: …","Gute Frage! Ich denke, …"]
        }
      ],
      checklist: ["Alle Aufgabenpunkte angesprochen","Meinung begründet","Auf den Partner reagiert","B1-Wortschatz und Konnektoren benutzt","Flüssig und verständlich gesprochen"]
    }
  }
};
