/* Interaktive Übungen (mit Selbstkorrektur) für das A2-Grammatik-Skript.
   Die Erklärungen kommen weiterhin aus data_gram.js; hier werden nur die
   vollständigen Skript-Übungen als Lückenübungen ergänzt.
   Gap-Syntax (wie A1): {{antwort|alt}} = geprüftes Feld · {{=ganzer satz}} = breites Feld · {{*}} = freies Feld */
window.A2_GRAMMAR_LESSONS = {

  /* ============================ 1.1 weil / da ============================ */
  "1.1": {
    exercises: [
      {
        title: "Übung 1",
        instruction: { de: "Warum kommen die Leute nicht? Bilde den weil-Satz (Verb ans Ende).", ar: "ليه الناس مش جايين؟ كوّن جملة weil (الفعل في الآخر)." },
        example: "Max hat keine Zeit. → Max kommt nicht, weil er keine Zeit hat.",
        items: [
          "a) Beate hat starke Kopfschmerzen. → …, weil {{=sie starke Kopfschmerzen hat}}.",
          "b) Christian hat einen Termin beim Zahnarzt. → …, weil {{=er einen Termin beim Zahnarzt hat}}.",
          "c) Inge muss noch etwas erledigen. → …, weil {{=sie noch etwas erledigen muss}}.",
          "d) Eva bekommt Besuch von einer Freundin. → …, weil {{=sie Besuch von einer Freundin bekommt}}.",
          "e) Klaus muss für die nächste Prüfung lernen. → …, weil {{=er für die nächste Prüfung lernen muss}}.",
          "f) Wir besuchen unseren Onkel. → …, weil {{=wir unseren Onkel besuchen}}.",
          "g) Dora muss ihr Fahrrad reparieren. → …, weil {{=sie ihr Fahrrad reparieren muss}}.",
          "h) Carmen räumt ihre Wohnung auf. → …, weil {{=sie ihre Wohnung aufräumt}}.",
          "i) Ich bereite ein Referat vor. → …, weil {{=ich ein Referat vorbereite}}.",
          "j) Maria holt ihren Mann vom Flughafen ab. → …, weil {{=sie ihren Mann vom Flughafen abholt}}.",
          "k) Jochen geht diese Woche nicht aus. → …, weil {{=er diese Woche nicht ausgeht}}.",
          "l) Du nimmst an einem Kochkurs teil. → …, weil {{=du an einem Kochkurs teilnimmst}}.",
          "m) Werner sieht sich eine neue Wohnung an. → …, weil {{=er sich eine neue Wohnung ansieht}}.",
          "n) Lisa zieht bald nach Wien um. → …, weil {{=sie bald nach Wien umzieht}}."
        ]
      },
      {
        title: "Übung 2",
        instruction: { de: "Beginne mit dem weil-Satz. Danach beginnt der Hauptsatz mit dem Verb.", ar: "ابدأ بجملة weil، وبعدها الجملة الرئيسية تبدأ بالفعل." },
        example: "Max geht zum Arzt. Er fühlt sich unwohl. → Weil Max sich unwohl fühlt, geht er zum Arzt.",
        items: [
          "a) Anja geht zum Reisebüro. Sie möchte einen Flug buchen. → {{=Weil Anja einen Flug buchen möchte, geht sie zum Reisebüro}}.",
          "b) Eva kann nicht kommen. Sie ist mit der Arbeit noch nicht fertig. → {{=Weil Eva mit der Arbeit noch nicht fertig ist, kann sie nicht kommen}}.",
          "c) Paul kauft einen Blumenstrauß. Lisa hat heute Geburtstag. → {{=Weil Lisa heute Geburtstag hat, kauft Paul einen Blumenstrauß}}.",
          "d) Max meldet sich für einen Sprachkurs an. Er möchte Italienisch lernen. → {{=Weil Max Italienisch lernen möchte, meldet er sich für einen Sprachkurs an}}.",
          "e) Robert ruft Maria an. Er möchte mit ihr spazieren gehen. → {{=Weil Robert mit ihr spazieren gehen möchte, ruft er Maria an}}.",
          "f) Christian kann nicht mitkommen. Er hat sich erkältet. → {{=Weil Christian sich erkältet hat, kann er nicht mitkommen}}.",
          "g) Inge lernt den ganzen Tag. Sie schreibt bald eine wichtige Prüfung. → {{=Weil Inge bald eine wichtige Prüfung schreibt, lernt sie den ganzen Tag}}."
        ]
      }
    ]
  },

  /* ============================ 1.2 Dativ + Akkusativ ============================ */
  "1.2": {
    exercises: [
      {
        title: "Übung 1",
        instruction: { de: "Bilde den Satz. Person = Dativ, Sache = Akkusativ. (b) bestimmt · (u) unbestimmt · (-) kein Artikel.", ar: "كوّن الجملة: الشخص Dativ والشيء Akkusativ." },
        example: "geben · du · Kollegin (b) · Stift (u) → Du gibst der Kollegin einen Stift.",
        items: [
          "a) schenken · du · Kinder (b) · Schokolade (-) → {{=Du schenkst den Kindern Schokolade}}.",
          "b) schreiben · ich · Freund (b) · SMS (u) → {{=Ich schreibe dem Freund eine SMS}}.",
          "c) zeigen · Lehrerin (b) · du · Fehler (b) → {{=Die Lehrerin zeigt dir den Fehler}}.",
          "d) erklären · Lehrer (b) · wir · Grammatik (b) → {{=Der Lehrer erklärt uns die Grammatik}}.",
          "e) schicken · Claudia (-) · Tante (b) · E-Mail (u) → {{=Claudia schickt der Tante eine E-Mail}}.",
          "f) erzählen · Großmutter (b) · Kind (b) · Geschichte (u) → {{=Die Großmutter erzählt dem Kind eine Geschichte}}.",
          "g) beantworten · Minister (b) · Reporterin (u) · Fragen (b) → {{=Der Minister beantwortet einer Reporterin die Fragen}}.",
          "h) anbieten · Robert (-) · Freunde (b) · Getränk (u) → {{=Robert bietet den Freunden ein Getränk an}}.",
          "i) vorlesen · Klaus (-) · ihr · Text (b) → {{=Klaus liest ihr den Text vor}}.",
          "j) mitbringen · Lisa (-) · wir · Obst (-) → {{=Lisa bringt uns Obst mit}}.",
          "k) empfehlen · Kellner (b) · ich · Steak (b) → {{=Der Kellner empfiehlt mir das Steak}}.",
          "l) stehlen · Dieb (b) · Touristin (u) · Kamera (b) → {{=Der Dieb stiehlt einer Touristin die Kamera}}."
        ]
      },
      {
        title: "Übung 2",
        instruction: { de: "Ergänze Dativ- und Akkusativform.", ar: "أكمل صيغة الـ Dativ والـ Akkusativ." },
        example: "Ich schreibe dir einen Brief.",
        items: [
          "a) Du gibst {{mir}} {{den}} Schlüssel.",
          "b) Er erzählt {{mir}} {{eine}} Geschichte.",
          "c) Max schickt {{dir}} {{ein}} Paket.",
          "d) Ich zeige {{dir}} {{das}} Zimmer.",
          "e) Du bringst {{mir}} {{einen}} Orangensaft.",
          "f) Lena erklärt {{dir}} {{das}} Problem."
        ]
      },
      {
        title: "Übung 3",
        instruction: { de: "Antworte mit zwei Pronomen (Akkusativ vor Dativ).", ar: "جاوب بضميرين: المفعول المباشر (Akk) قبل الشخص (Dativ)." },
        example: "Empfiehlst du Max das Restaurant? – Ja, ich empfehle es ihm.",
        items: [
          "a) Liest du mir die Übung vor? – Ja, ich lese {{sie}} {{dir}} vor.",
          "b) Schenkst du mir das Bild? – Ja, ich schenke {{es}} {{dir}}.",
          "c) Bringst du uns die Pakete mit? – Ja, ich bringe {{sie}} {{euch}} mit.",
          "d) Zeigst du Lena das Museum? – Ja, ich zeige {{es}} {{ihr}}.",
          "e) Erklärst du den Touristen den Weg? – Ja, ich erkläre {{ihn}} {{ihnen}}.",
          "f) Erzählst du dem Onkel die Geschichte? – Ja, ich erzähle {{sie}} {{ihm}}.",
          "g) Schreibst du mir die Adresse auf? – Ja, ich schreibe {{sie}} {{dir}} auf.",
          "h) Schickst du der Tante die Blumen? – Ja, ich schicke {{sie}} {{ihr}}.",
          "i) Bietest du den Freunden deine Hilfe an? – Ja, ich biete {{sie}} {{ihnen}} an.",
          "j) Verkaufst du mir den Wagen? – Ja, ich verkaufe {{ihn}} {{dir}}."
        ]
      }
    ]
  },

  /* ============================ 1.3 Modalverben Präteritum ============================ */
  "1.3": {
    exercises: [
      {
        title: "Übung 1",
        instruction: { de: "Bilde einen Satz mit Modalverb im Präteritum.", ar: "كوّن جملة بفعل ناقص في الماضي البسيط." },
        example: "wollen · Frankfurt · fahren → Er wollte nach Frankfurt fahren.",
        items: [
          "a) müssen · eine Fahrkarte · kaufen → {{=Er musste eine Fahrkarte kaufen}}.",
          "b) wollen · ein Platz · reservieren → {{=Er wollte einen Platz reservieren}}.",
          "c) müssen · in Nürnberg · umsteigen → {{=Er musste in Nürnberg umsteigen}}.",
          "d) dürfen · nicht · zu spät ankommen → {{=Er durfte nicht zu spät ankommen}}.",
          "e) können · sein Freund · besuchen → {{=Er konnte seinen Freund besuchen}}.",
          "f) sollen · ein Paket · mitnehmen → {{=Er sollte ein Paket mitnehmen}}."
        ]
      },
      {
        title: "Übung 2",
        instruction: { de: "Setze das Modalverb ins Präteritum.", ar: "حوّل الفعل الناقص للماضي البسيط." },
        example: "Ich kann nicht kommen. → Ich konnte nicht kommen.",
        items: [
          "a) Am Wochenende will ich ins Kino gehen. → Am Wochenende {{wollte}} ich ins Kino gehen.",
          "b) Leider kann ich nicht mitkommen. → Leider {{konnte}} ich nicht mitkommen.",
          "c) Du musst am Samstag arbeiten. → Du {{musstest}} am Samstag arbeiten.",
          "d) Wir können das Problem lösen. → Wir {{konnten}} das Problem lösen.",
          "e) Ihr sollt den Chef anrufen. → Ihr {{solltet}} den Chef anrufen.",
          "f) Ich muss das Paket abholen. → Ich {{musste}} das Paket abholen.",
          "g) Du willst deine Freunde einladen. → Du {{wolltest}} deine Freunde einladen.",
          "h) Max soll bei der Firma anrufen. → Max {{sollte}} bei der Firma anrufen.",
          "i) Du darfst den Zettel nicht zerreißen. → Du {{durftest}} den Zettel nicht zerreißen.",
          "j) Ich kann das Fahrrad nicht reparieren. → Ich {{konnte}} das Fahrrad nicht reparieren.",
          "k) Wir wollen das Museum besichtigen. → Wir {{wollten}} das Museum besichtigen.",
          "l) Du musst den Mülleimer ausleeren. → Du {{musstest}} den Mülleimer ausleeren.",
          "m) Ich kann nicht gut schwimmen. → Ich {{konnte}} nicht gut schwimmen.",
          "n) Wir müssen die Rechnung bezahlen. → Wir {{mussten}} die Rechnung bezahlen.",
          "o) Ihr müsst die U-Bahn nehmen. → Ihr {{musstet}} die U-Bahn nehmen.",
          "p) Ich will die Nachrichten sehen. → Ich {{wollte}} die Nachrichten sehen."
        ]
      },
      {
        title: "Übung 3",
        instruction: { de: "Bilde einen Satz: Modalverb im Präteritum + Dativ + Akkusativ.", ar: "كوّن جملة: فعل ناقص في الماضي + Dativ + Akkusativ." },
        example: "senden · wollen · meine Schwester · eine Mail → Ich wollte meiner Schwester eine Mail senden.",
        items: [
          "a) schenken · wollen · mein Bruder · ein Buch → {{=Ich wollte meinem Bruder ein Buch schenken}}.",
          "b) schreiben · sollen · mein Onkel · eine Karte → {{=Ich sollte meinem Onkel eine Karte schreiben}}.",
          "c) zeigen · können · meine Freunde · die Stadt → {{=Ich konnte meinen Freunden die Stadt zeigen}}.",
          "d) erklären · müssen · meine Kollegin · das Problem → {{=Ich musste meiner Kollegin das Problem erklären}}.",
          "e) geben · sollen · meine Schwester · der Schlüssel → {{=Ich sollte meiner Schwester den Schlüssel geben}}.",
          "f) erzählen · dürfen · mein Freund · nichts → {{=Ich durfte meinem Freund nichts erzählen}}.",
          "g) zurückgeben · wollen · meine Kollegin · das Buch → {{=Ich wollte meiner Kollegin das Buch zurückgeben}}.",
          "h) anbieten · sollen · meine Tante · meine Hilfe → {{=Ich sollte meiner Tante meine Hilfe anbieten}}.",
          "i) vorlesen · können · meine Kollegen · der Text → {{=Ich konnte meinen Kollegen den Text vorlesen}}.",
          "j) empfehlen · können · mein Freund · das Restaurant → {{=Ich konnte meinem Freund das Restaurant empfehlen}}."
        ]
      }
    ]
  }

};
