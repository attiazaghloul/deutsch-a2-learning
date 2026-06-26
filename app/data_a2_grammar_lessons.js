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
  },

  /* ============================ 2.1 Genitiv ============================ */
  "2.1": {
    exercises: [
      { title: "Übung 1", instruction: { de: "Bilde einen Satz mit Genitiv.", ar: "كوّن جملة بحالة الإضافة (Genitiv)." }, example: "Jacke · Mann · schwarz → Die Jacke des Mannes ist schwarz.",
        items: [
          "a) Wasser · Fluss · schmutzig → {{=Das Wasser des Flusses ist schmutzig}}.",
          "b) Apartment · Studentin · klein → {{=Das Apartment der Studentin ist klein}}.",
          "c) Ende · Geschichte · traurig → {{=Das Ende der Geschichte ist traurig}}.",
          "d) Eltern · Schulkind · krank → {{=Die Eltern des Schulkindes sind krank|Die Eltern des Schulkinds sind krank}}.",
          "e) Garten · Professor · groß → {{=Der Garten des Professors ist groß}}.",
          "f) Gepäck · Gäste · schwer → {{=Das Gepäck der Gäste ist schwer}}.",
          "g) Waschmaschine · Eva · kaputt → {{=Evas Waschmaschine ist kaputt}}.",
          "h) Preise · Bio-Markt · hoch → {{=Die Preise des Bio-Markts sind hoch|Die Preise des Bio-Marktes sind hoch}}.",
          "i) Lösung · Problem · schwierig → {{=Die Lösung des Problems ist schwierig}}."
        ] },
      { title: "Übung 2", instruction: { de: "Ergänze die Genitiv-Ergänzung.", ar: "أكمل المضاف إليه (Genitiv)." }, example: "Titel · Buch → Kennst du den Titel des Buches?",
        items: [
          "a) Kennst du die Direktorin {{der Bank}}?",
          "b) Kennst du den Autor {{des Romans}}?",
          "c) Kennst du den Text {{des Liedes|des Lieds}}?",
          "d) Kennst du die Frau {{des Ministers}}?",
          "e) Kennst du das Zentrum {{der Stadt}}?",
          "f) Kennst du den Vater {{der Studentin}}?",
          "g) Kennst du die Hauptstadt {{des Landes}}?",
          "h) Kennst du das Thema {{der Vorlesung}}?",
          "i) Kennst du den Sohn {{der Nachbarin}}?"
        ] },
      { title: "Übung 3", instruction: { de: "Wessen … ? Ergänze den Possessiv-Genitiv.", ar: "بتاع مين؟ أكمل الإضافة بضمير الملكية." }, example: "Hut · mein Bruder → Das ist der Hut meines Bruders.",
        items: [
          "a) Das ist der Wagen {{seines Vaters}}.",
          "b) Das ist die Brille {{unserer Tante}}.",
          "c) Das ist der Hund {{ihres Großvaters}}.",
          "d) Das ist das Gepäck {{eurer Gäste}}.",
          "e) Das sind die Stifte {{ihrer Tochter}}.",
          "f) Das ist der Computer {{meines Freundes|meines Freunds}}.",
          "g) Das ist der Schirm {{deines Onkels}}.",
          "h) Das ist das Auto {{meiner Kollegin}}.",
          "i) Das sind die Bücher {{seines Sohnes|seines Sohns}}."
        ] }
    ]
  },

  /* ============================ 2.2 n-Deklination ============================ */
  "2.2": {
    exercises: [
      { title: "Übung 1", instruction: { de: "Ergänze die Akkusativform (n-Deklination → -n / -en).", ar: "أكمل صيغة النصب (n-Deklination)." }, example: "Junge → Ich kenne den Jungen nicht.",
        items: [
          "a) Ich kenne {{den Kollegen}} nicht.",
          "b) Ich kenne {{den Studenten}} nicht.",
          "c) Ich kenne {{den Touristen}} nicht.",
          "d) Ich kenne {{den Postboten}} nicht.",
          "e) Ich kenne {{den Patienten}} nicht.",
          "f) Ich kenne {{den Polizisten}} nicht.",
          "g) Ich kenne {{den Soldaten}} nicht.",
          "h) Ich kenne {{den Praktikanten}} nicht.",
          "i) Ich kenne {{den Kunden}} nicht.",
          "j) Ich kenne {{den Agenten}} nicht.",
          "k) Ich kenne {{den Fotografen}} nicht.",
          "l) Ich kenne {{den Architekten}} nicht.",
          "m) Ich kenne {{den Herrn}} nicht.",
          "n) Ich kenne {{den Juristen}} nicht.",
          "o) Ich kenne {{den Nachbarn}} nicht."
        ] },
      { title: "Übung 2", instruction: { de: "Bilde die Frage (Achtung: manche Verben + Dativ, manche + Akkusativ).", ar: "كوّن السؤال (بعض الأفعال Dativ وبعضها Akkusativ)." }, example: "Experte · fragen → Fragst du den Experten?",
        items: [
          "a) Student · helfen → {{=Hilfst du dem Studenten}}?",
          "b) Gitarrist · kennen → {{=Kennst du den Gitarristen}}?",
          "c) Nachbar · besuchen → {{=Besuchst du den Nachbarn}}?",
          "d) Diamant · kaufen → {{=Kaufst du den Diamanten}}?",
          "e) Automat · reparieren → {{=Reparierst du den Automaten}}?",
          "f) Journalist · antworten → {{=Antwortest du dem Journalisten}}?",
          "g) Postbote · sprechen mit → {{=Sprichst du mit dem Postboten}}?",
          "h) Elefant · fotografieren → {{=Fotografierst du den Elefanten}}?",
          "i) Polizist · anrufen → {{=Rufst du den Polizisten an}}?",
          "j) Kollege · einladen → {{=Lädst du den Kollegen ein}}?",
          "k) Experte · glauben → {{=Glaubst du dem Experten}}?",
          "l) Präsident · erkennen → {{=Erkennst du den Präsidenten}}?",
          "m) Junge · aufwecken → {{=Weckst du den Jungen auf}}?",
          "n) Komet · sehen → {{=Siehst du den Kometen}}?",
          "o) Herr Berg · vertrauen → {{=Vertraust du Herrn Berg}}?"
        ] }
    ]
  },

  /* ============================ 2.3 Adjektivdeklination ============================ */
  "2.3": {
    exercises: [
      { title: "Übung 1", instruction: { de: "Antworte mit einem Adjektiv OHNE Endung (z. B.: schnell, langweilig, sauer, spannend, gut, langsam, unfreundlich, preiswert, nett).", ar: "جاوب بصفة بدون نهاية (خبرية/ظرفية)." }, example: "Wie schmeckt der Apfel? – Er schmeckt sauer.",
        items: [
          "a) Wie ist der Film? – Er ist {{*}}.",
          "b) Wie ist das Wetter in Hamburg? – Es ist {{*}}.",
          "c) Wie findest du das Hotelzimmer? – Es ist {{*}}.",
          "d) Wie spricht Peter? – Er spricht {{*}}.",
          "e) Wie gefällt dir Marias Kleid? – Es ist {{*}}.",
          "f) Wie findest du den Film? – Er ist {{*}}.",
          "g) Wie fährt Julia Auto? – Sie fährt {{*}}.",
          "h) Wie ist sein Bruder? – Er ist {{*}}.",
          "i) Wie findest du den Roman? – Er ist {{*}}."
        ] },
      { title: "Übung 2", instruction: { de: "Akkusativ mit bestimmtem Artikel (das/die/den + Adjektiv).", ar: "النصب مع أداة معرفة + صفة." }, example: "Fahrrad · blau → Kaufst du das blaue Fahrrad?",
        items: [
          "a) Kleid · rot → Kaufst du {{das rote}} Kleid?",
          "b) Jacke · schwarz → Kaufst du {{die schwarze}} Jacke?",
          "c) Koffer · groß → Kaufst du {{den großen}} Koffer?",
          "d) Tasche · klein → Kaufst du {{die kleine}} Tasche?",
          "e) Pullover · grün → Kaufst du {{den grünen}} Pullover?",
          "f) Mütze · rot → Kaufst du {{die rote}} Mütze?",
          "g) Hose · blau → Kaufst du {{die blaue}} Hose?",
          "h) Wein · süß → Kaufst du {{den süßen}} Wein?",
          "i) Schuhe · braun → Kaufst du {{die braunen}} Schuhe?",
          "j) Mantel · dunkelblau → Kaufst du {{den dunkelblauen}} Mantel?",
          "k) Hemd · weiß → Kaufst du {{das weiße}} Hemd?",
          "l) Orangen · spanisch → Kaufst du {{die spanischen}} Orangen?"
        ] },
      { title: "Übung 3", instruction: { de: "Nominativ mit Possessivartikel (mein + Adjektiv, starke Endung).", ar: "الرفع مع ضمير الملكية + صفة (نهاية قوية)." }, example: "Auto → Schau, das ist mein neues Auto!",
        items: [
          "a) Fahrrad → Das ist {{mein neues}} Fahrrad!",
          "b) Tasche → Das ist {{meine neue}} Tasche!",
          "c) Uhr → Das ist {{meine neue}} Uhr!",
          "d) Computer → Das ist {{mein neuer}} Computer!",
          "e) Schuhe → Das sind {{meine neuen}} Schuhe!",
          "f) Brille → Das ist {{meine neue}} Brille!",
          "g) Zimmer → Das ist {{mein neues}} Zimmer!",
          "h) Bücher → Das sind {{meine neuen}} Bücher!",
          "i) Roller → Das ist {{mein neuer}} Roller!",
          "j) Hund → Das ist {{mein neuer}} Hund!",
          "k) Wagen → Das ist {{mein neuer}} Wagen!",
          "l) Schreibtisch → Das ist {{mein neuer}} Schreibtisch!",
          "m) Schrank → Das ist {{mein neuer}} Schrank!",
          "n) Kamera → Das ist {{meine neue}} Kamera!",
          "o) Kaffeemaschine → Das ist {{meine neue}} Kaffeemaschine!",
          "p) Lampe → Das ist {{meine neue}} Lampe!",
          "q) Sofa → Das ist {{mein neues}} Sofa!",
          "r) Ohrringe → Das sind {{meine neuen}} Ohrringe!"
        ] },
      { title: "Übung 4", instruction: { de: "Nominativ mit ein-Wort (ein/eine + Adjektiv, starke Endung).", ar: "الرفع مع ein + صفة (نهاية قوية)." }, example: "Roman · langweilig → Das ist ein langweiliger Roman.",
        items: [
          "a) Arbeit · schwierig → Das ist {{eine schwierige}} Arbeit.",
          "b) Film · lustig → Das ist {{ein lustiger}} Film.",
          "c) Beispiel · schlecht → Das ist {{ein schlechtes}} Beispiel.",
          "d) Jacke · dick → Das ist {{eine dicke}} Jacke.",
          "e) Hotelzimmer · groß → Das ist {{ein großes}} Hotelzimmer.",
          "f) Lexikon · teuer → Das ist {{ein teures}} Lexikon.",
          "g) Verkäuferin · freundlich → Das ist {{eine freundliche}} Verkäuferin.",
          "h) Wagen · alt → Das ist {{ein alter}} Wagen.",
          "i) Bluse · schön → Das ist {{eine schöne}} Bluse.",
          "j) Paket · schwer → Das ist {{ein schweres}} Paket.",
          "k) Mann · reich → Das ist {{ein reicher}} Mann.",
          "l) Brot · alt → Das ist {{ein altes}} Brot.",
          "m) Sofa · bequem → Das ist {{ein bequemes}} Sofa.",
          "n) Apfel · sauer → Das ist {{ein saurer}} Apfel.",
          "o) Hemd · schmutzig → Das ist {{ein schmutziges}} Hemd."
        ] },
      { title: "Übung 5", instruction: { de: "Ohne Artikel (starke Endung) und mit bestimmtem Artikel (schwache Endung).", ar: "بدون أداة (نهاية قوية) ومع أداة معرفة (نهاية ضعيفة)." }, example: "Brot · alt → Schmeckt dir altes Brot? – Nein, das alte Brot schmeckt mir nicht.",
        items: [
          "a) Wein · trocken → Schmeckt dir {{trockener}} Wein? – Nein, {{der trockene}} Wein schmeckt mir nicht.",
          "b) Kuchen · süß → Schmeckt dir {{süßer}} Kuchen? – Nein, {{der süße}} Kuchen schmeckt mir nicht.",
          "c) Kaffee · stark → Schmeckt dir {{starker}} Kaffee? – Nein, {{der starke}} Kaffee schmeckt mir nicht.",
          "d) Tee · schwarz → Schmeckt dir {{schwarzer}} Tee? – Nein, {{der schwarze}} Tee schmeckt mir nicht.",
          "e) Bier · dunkel → Schmeckt dir {{dunkles}} Bier? – Nein, {{das dunkle}} Bier schmeckt mir nicht.",
          "f) Fisch · fettig → Schmeckt dir {{fettiger}} Fisch? – Nein, {{der fettige}} Fisch schmeckt mir nicht.",
          "g) Limonade · sauer → Schmeckt dir {{saure}} Limonade? – Nein, {{die saure}} Limonade schmeckt mir nicht.",
          "h) Wurst · scharf → Schmeckt dir {{scharfe}} Wurst? – Nein, {{die scharfe}} Wurst schmeckt mir nicht.",
          "i) Schokolade · bitter → Schmeckt dir {{bittere}} Schokolade? – Nein, {{die bittere}} Schokolade schmeckt mir nicht.",
          "j) Suppe · kalt → Schmeckt dir {{kalte}} Suppe? – Nein, {{die kalte}} Suppe schmeckt mir nicht.",
          "k) Mineralwasser · still → Schmeckt dir {{stilles}} Mineralwasser? – Nein, {{das stille}} Mineralwasser schmeckt mir nicht.",
          "l) Butter · salzig → Schmeckt dir {{salzige}} Butter? – Nein, {{die salzige}} Butter schmeckt mir nicht."
        ] },
      { title: "Übung 6", instruction: { de: "Nominativ (der/die/das) und Akkusativ (den/die/das) mit bestimmtem Artikel.", ar: "الرفع والنصب مع أداة معرفة + صفة." }, example: "Pullover · grün → Gefällt dir der grüne Pullover? – Ja, ich möchte mir den grünen Pullover kaufen.",
        items: [
          "a) Tisch · modern → Gefällt dir {{der moderne}} Tisch? – Ja, ich möchte mir {{den modernen}} Tisch kaufen.",
          "b) Uhr · golden → Gefällt dir {{die goldene}} Uhr? – Ja, ich möchte mir {{die goldene}} Uhr kaufen.",
          "c) Mantel · elegant → Gefällt dir {{der elegante}} Mantel? – Ja, ich möchte mir {{den eleganten}} Mantel kaufen.",
          "d) Wagen · sportlich → Gefällt dir {{der sportliche}} Wagen? – Ja, ich möchte mir {{den sportlichen}} Wagen kaufen.",
          "e) Koffer · groß → Gefällt dir {{der große}} Koffer? – Ja, ich möchte mir {{den großen}} Koffer kaufen.",
          "f) Fahrrad · teuer → Gefällt dir {{das teure}} Fahrrad? – Ja, ich möchte mir {{das teure}} Fahrrad kaufen.",
          "g) Anzug · grau → Gefällt dir {{der graue}} Anzug? – Ja, ich möchte mir {{den grauen}} Anzug kaufen.",
          "h) Sessel · alt → Gefällt dir {{der alte}} Sessel? – Ja, ich möchte mir {{den alten}} Sessel kaufen.",
          "i) Jacke · wollen → Gefällt dir {{die wollene}} Jacke? – Ja, ich möchte mir {{die wollene}} Jacke kaufen.",
          "j) Spiegel · antik → Gefällt dir {{der antike}} Spiegel? – Ja, ich möchte mir {{den antiken}} Spiegel kaufen.",
          "k) Schuhe · modisch → Gefallen dir {{die modischen}} Schuhe? – Ja, ich möchte mir {{die modischen}} Schuhe kaufen.",
          "l) Vase · hoch → Gefällt dir {{die hohe}} Vase? – Ja, ich möchte mir {{die hohe}} Vase kaufen."
        ] }
    ]
  },

  /* ============================ 3.1 dass-Sätze ============================ */
  "3.1": {
    exercises: [
      { title: "Übung 1", instruction: { de: "Bilde den dass-Satz (Verb ans Ende).", ar: "كوّن جملة dass (الفعل في الآخر)." }, example: "Nimmt Paul dich mit? → Ja, Paul hat versprochen, dass er mich mitnimmt.",
        items: [
          "a) Bekommt Max die Stelle? → Ja, Max hat gesagt, {{=dass er diese Stelle bekommt}}.",
          "b) Hilft Lisa euch? → Ja, Lisa hat angeboten, {{=dass sie uns bei der Renovierung hilft|dass sie euch bei der Renovierung hilft}}.",
          "c) Kann Karl teilnehmen? → Ja, Karl weiß, {{=dass er an dem Kurs teilnehmen kann}}.",
          "d) Kann Eva die Prüfung wiederholen? → Ja, Eva hofft, {{=dass sie die Prüfung wiederholen kann}}.",
          "e) Besucht Carlos seinen Freund? → Ja, Carlos plant, {{=dass er seinen Freund in Madrid besucht}}.",
          "f) Holt Martin Maria ab? → Ja, Maria erwartet, {{=dass Martin sie vom Bahnhof abholt}}.",
          "g) Besucht Robert seine Tante? → Ja, Robert hat erzählt, {{=dass er seine Tante im Krankenhaus besucht}}.",
          "h) Muss Lena den Wagen bringen? → Ja, Lena glaubt, {{=dass sie den Wagen in die Werkstatt bringen muss}}."
        ] },
      { title: "Übung 2", instruction: { de: "Bilde einen Satz mit es … , dass … .", ar: "كوّن جملة بـ es … , dass …" }, example: "Was ist sicher? – Pavel muss bald abreisen. → Es ist sicher, dass Pavel bald abreisen muss.",
        items: [
          "a) {{=Es ist schade, dass Lena keine Zeit hat}}.",
          "b) {{=Es ist notwendig, dass du dein Auto in die Werkstatt bringst}}.",
          "c) {{=Es ärgert mich, dass Max immer zu spät kommt}}.",
          "d) {{=Es ist möglich, dass Carmen nach Köln gefahren ist}}.",
          "e) {{=Es ist wichtig, dass Paul die Prüfung schafft}}.",
          "f) {{=Es gefällt mir nicht, dass ich so viel arbeiten muss}}.",
          "g) {{=Es tut mir leid, dass ich dich nicht mitnehmen kann}}.",
          "h) {{=Es freut mich, dass meine Kolleg*innen mir zum Geburtstag gratuliert haben}}.",
          "i) {{=Es kann sein, dass heute Abend ein Sturm kommt}}."
        ] },
      { title: "Übung 3", instruction: { de: "Bilde: Stimmt es, dass … ? (Perfekt)", ar: "كوّن: Stimmt es, dass … ؟" }, example: "sich erkälten · Karl → Stimmt es, dass Karl sich erkältet hat?",
        items: [
          "a) Auto · kaufen · du → Stimmt es, {{=dass du ein Auto gekauft hast}}?",
          "b) Haus · mieten · Hanna → Stimmt es, {{=dass Hanna ein Haus gemietet hat}}?",
          "c) Unfall · haben · Paul → Stimmt es, {{=dass Paul einen Unfall gehabt hat|dass Paul einen Unfall hatte}}?",
          "d) Prüfung · bestehen · alle → Stimmt es, {{=dass alle die Prüfung bestanden haben}}?",
          "e) Termin · vergessen · Thomas → Stimmt es, {{=dass Thomas den Termin vergessen hat}}?",
          "f) Jacke · verlieren · du → Stimmt es, {{=dass du die Jacke verloren hast|dass du deine Jacke verloren hast}}?",
          "g) Vertrag · unterschreiben · Clara → Stimmt es, {{=dass Clara den Vertrag unterschrieben hat}}?",
          "h) heiraten · Max und Eva → Stimmt es, {{=dass Max und Eva geheiratet haben}}?",
          "i) Rom · fliegen · ihr → Stimmt es, {{=dass ihr nach Rom geflogen seid}}?",
          "j) Tunesien · sein · Julia → Stimmt es, {{=dass Julia in Tunesien war|dass Julia in Tunesien gewesen ist}}?"
        ] }
    ]
  },

  /* ============================ 3.2 Komparativ / Superlativ ============================ */
  "3.2": {
    exercises: [
      { title: "Übung 1", instruction: { de: "Komparativ (-er).", ar: "صيغة المقارنة (‑er)." }, example: "Zimmer · klein → Mein Zimmer ist kleiner als deins.",
        items: [
          "a) dick → Mein Wörterbuch ist {{dicker}} als deins.",
          "b) schnell → Mein Wagen ist {{schneller}} als deiner.",
          "c) schön → Mein Schal ist {{schöner}} als deiner.",
          "d) gefährlich → Meine Reise ist {{gefährlicher}} als deine.",
          "e) schwer → Mein Koffer ist {{schwerer}} als deiner.",
          "f) hell → Mein Zimmer ist {{heller}} als deins.",
          "g) billig → Meine Wohnung ist {{billiger}} als deine.",
          "h) schwierig → Meine Arbeit ist {{schwieriger}} als deine.",
          "i) nett → Mein Chef ist {{netter}} als deiner.",
          "j) schlau → Mein Bruder ist {{schlauer}} als deiner.",
          "k) modern → Mein Fahrrad ist {{moderner}} als deins.",
          "l) reich → Mein Onkel ist {{reicher}} als deiner."
        ] },
      { title: "Übung 2", instruction: { de: "Komparativ mit Umlaut/Unregelmäßigkeit.", ar: "صيغة المقارنة مع تغيّر الحرف." }, example: "Getränk · kalt → Dieses Getränk ist kälter als das andere.",
        items: [
          "a) Sofa · alt → Dieses Sofa ist {{älter}} als das andere.",
          "b) Raum · groß → Dieser Raum ist {{größer}} als der andere.",
          "c) Stadt · nah → Diese Stadt ist {{näher}} als die andere.",
          "d) Apfel · sauer → Dieser Apfel ist {{saurer}} als der andere.",
          "e) Mantel · lang → Dieser Mantel ist {{länger}} als der andere.",
          "f) Suppe · scharf → Diese Suppe ist {{schärfer}} als die andere.",
          "g) Essen · gesund → Dieses Essen ist {{gesünder}} als das andere.",
          "h) Geschichte · kurz → Diese Geschichte ist {{kürzer}} als die andere.",
          "i) Espresso · stark → Dieser Espresso ist {{stärker}} als der andere.",
          "j) Stein · hart → Dieser Stein ist {{härter}} als der andere.",
          "k) Baum · hoch → Dieser Baum ist {{höher}} als der andere.",
          "l) Film · gut → Dieser Film ist {{besser}} als der andere.",
          "m) Wein · trocken → Dieser Wein ist {{trockener}} als der andere.",
          "n) Pullover · warm → Dieser Pullover ist {{wärmer}} als der andere.",
          "o) Hund · klug → Dieser Hund ist {{klüger}} als der andere.",
          "p) Farbe · dunkel → Diese Farbe ist {{dunkler}} als die andere."
        ] },
      { title: "Übung 3", instruction: { de: "Antworte mit dem Komparativ (… ist …-er als …).", ar: "جاوب بصيغة المقارنة." }, example: "Die Wohnung ist so billig wie das Büro. → Nein, das Büro ist billiger als die Wohnung.",
        items: [
          "a) Unser Haus ist so groß wie euer Haus. → {{=Nein, euer Haus ist größer als unser Haus}}.",
          "b) Frage 1 ist so schwierig wie Frage 2. → {{=Nein, Frage 2 ist schwieriger als Frage 1}}.",
          "c) Das Bier ist so kalt wie der Weißwein. → {{=Nein, der Weißwein ist kälter als das Bier}}.",
          "d) Die Äpfel sind so teuer wie die Tomaten. → {{=Nein, die Tomaten sind teurer als die Äpfel}}.",
          "e) Paul ist so fleißig wie Carmen. → {{=Nein, Carmen ist fleißiger als Paul}}.",
          "f) Das Rathaus ist so alt wie die Kirche. → {{=Nein, die Kirche ist älter als das Rathaus}}.",
          "g) Das Steak ist so gut wie das Schnitzel. → {{=Nein, das Schnitzel ist besser als das Steak}}.",
          "h) Das Gebäude ist so hoch wie dieser Turm. → {{=Nein, dieser Turm ist höher als das Gebäude}}.",
          "i) Mein Onkel ist so reich wie deine Tante. → {{=Nein, deine Tante ist reicher als mein Onkel}}.",
          "j) Klaus verdient so viel wie Maria. → {{=Nein, Maria verdient mehr als Klaus}}."
        ] },
      { title: "Übung 4", instruction: { de: "Superlativ (am …-sten).", ar: "صيغة التفضيل (am …-sten)." }, example: "Hotel · billig → Dieses Hotel ist am billigsten.",
        items: [
          "a) Flugzeug · schnell → Dieses Flugzeug ist {{am schnellsten}}.",
          "b) Koffer · schwer → Dieser Koffer ist {{am schwersten}}.",
          "c) Sofa · bequem → Dieses Sofa ist {{am bequemsten}}.",
          "d) Film · langweilig → Dieser Film ist {{am langweiligsten}}.",
          "e) Kleid · schön → Dieses Kleid ist {{am schönsten}}.",
          "f) Restaurant · teuer → Dieses Restaurant ist {{am teuersten}}.",
          "g) Jacke · warm → Diese Jacke ist {{am wärmsten}}.",
          "h) Text · lang → Dieser Text ist {{am längsten}}.",
          "i) Suppe · scharf → Diese Suppe ist {{am schärfsten}}.",
          "j) Leute · arm → Diese Leute sind {{am ärmsten}}.",
          "k) Argument · dumm → Dieses Argument ist {{am dümmsten}}.",
          "l) Kinder · klug → Diese Kinder sind {{am klügsten}}."
        ] },
      { title: "Übung 5", instruction: { de: "Superlativ (am …-sten) im Satz.", ar: "صيغة التفضيل في الجملة." }, example: "Stadtteil · Wohnungen · teuer → In diesem Stadtteil sind die Wohnungen am teuersten.",
        items: [
          "a) Hotel · Zimmer · groß → In diesem Hotel sind die Zimmer {{am größten}}.",
          "b) Land · Berge · hoch → In diesem Land sind die Berge {{am höchsten}}.",
          "c) Geschäft · Personal · freundlich → In diesem Geschäft ist das Personal {{am freundlichsten}}.",
          "d) Museum · Bilder · interessant → In diesem Museum sind die Bilder {{am interessantesten}}.",
          "e) Monat · Nächte · kurz → In diesem Monat sind die Nächte {{am kürzesten}}.",
          "f) Laden · Gemüse · frisch → In diesem Laden ist das Gemüse {{am frischesten}}.",
          "g) Restaurant · Essen · lecker → In diesem Restaurant ist das Essen {{am leckersten}}.",
          "h) Kindergarten · Kinder · jung → In diesem Kindergarten sind die Kinder {{am jüngsten}}.",
          "i) Jahreszeit · Tage · heiß → In dieser Jahreszeit sind die Tage {{am heißesten}}.",
          "j) Bäckerei · Brot · gut → In dieser Bäckerei ist das Brot {{am besten}}."
        ] }
    ]
  },

  /* ============================ 3.3 Reflexive Verben ============================ */
  "3.3": {
    exercises: [
      { title: "Übung 1", instruction: { de: "Bilde: … freut sich, denn … .", ar: "كوّن: … freut sich, denn …" }, example: "Klaus hat Urlaub. → Klaus freut sich, denn er hat Urlaub.",
        items: [
          "a) Ich treffe Lisa morgen. → Ich {{freue}} {{mich}}, denn ich treffe Lisa morgen.",
          "b) Wir bekommen Besuch. → Wir {{freuen}} {{uns}}, denn wir bekommen Besuch.",
          "c) Du bist wieder gesund. → Du {{freust}} {{dich}}, denn du bist wieder gesund.",
          "d) Carmen hat bald Ferien. → Carmen {{freut}} {{sich}}, denn sie hat bald Ferien.",
          "e) Wir fahren nach Portugal. → Wir {{freuen}} {{uns}}, denn wir fahren nach Portugal.",
          "f) Ihr bekommt Geschenke. → Ihr {{freut}} {{euch}}, denn ihr bekommt Geschenke.",
          "g) Du hast Geburtstag. → Du {{freust}} {{dich}}, denn du hast Geburtstag.",
          "h) Ich habe heute frei. → Ich {{freue}} {{mich}}, denn ich habe heute frei.",
          "i) Max geht ins Theater. → Max {{freut}} {{sich}}, denn er geht ins Theater."
        ] },
      { title: "Übung 2", instruction: { de: "Ergänze das Reflexivpronomen (Akkusativ).", ar: "أكمل الضمير الانعكاسي (Akkusativ)." }, example: "Schämst du dich?",
        items: [
          "a) Beeilt Lena {{sich}}?", "b) Freust du {{dich}}?", "c) Entschuldigt Maria {{sich}}?", "d) Wunderst du {{dich}}?",
          "e) Fürchtet ihr {{euch}}?", "f) Meldet ihr {{euch}}?", "g) Setzen wir {{uns}}?", "h) Entscheidet Murat {{sich}}?",
          "i) Ärgert Lisa {{sich}}?", "j) Stellst du {{dich}} vor?", "k) Erinnert Karl {{sich}}?", "l) Ruhen wir {{uns}} aus?"
        ] },
      { title: "Übung 3", instruction: { de: "Bilde: Du … dir … (reflexiv mit Dativ + Akkusativ).", ar: "كوّن جملة انعكاسية بـ dir + مفعول." }, example: "ein Tee · bestellen → Du bestellst dir einen Tee.",
        items: [
          "a) das Auto · mieten → {{=Du mietest dir das Auto}}.",
          "b) die Zähne · putzen → {{=Du putzt dir die Zähne}}.",
          "c) ein Fahrrad · wünschen → {{=Du wünschst dir ein Fahrrad}}.",
          "d) eine Jacke · kaufen → {{=Du kaufst dir eine Jacke}}.",
          "e) ein Kaffee · machen → {{=Du machst dir einen Kaffee}}.",
          "f) ein Bier · holen → {{=Du holst dir ein Bier}}.",
          "g) eine Suppe · kochen → {{=Du kochst dir eine Suppe}}.",
          "h) dein Platz · suchen → {{=Du suchst dir deinen Platz}}.",
          "i) die Haare · färben → {{=Du färbst dir die Haare}}."
        ] }
    ]
  },

  /* ============================ 4.1 Verben + Präposition ============================ */
  "4.1": {
    exercises: [
      { title: "Übung 1", instruction: { de: "Ergänze die Präposition.", ar: "أكمل حرف الجر." },
        items: [
          "a) Viele Leute protestieren {{gegen}} die Regierung.",
          "b) Wir haben schon {{mit}} der Arbeit begonnen.",
          "c) Carlo denkt immer nur {{an}} seine Freundin.",
          "d) Die Eltern sorgen {{für}} die Kinder.",
          "e) Rechnest du {{mit}} einem Unwetter?",
          "f) Nimmst du {{an}} der Reise teil?",
          "g) Haben die Leute {{über}} deinen Witz gelacht?",
          "h) Achtest du {{auf}} gesundes Essen?",
          "i) Passt die Farbe der Krawatte {{zu}} dem Hemd?",
          "j) Schmeckt der Kuchen {{nach}} Schokolade?",
          "k) Die Leute an der Küste fliehen {{vor}} dem Sturm.",
          "l) Denkst du bitte {{über}} mein Angebot nach?"
        ] },
      { title: "Übung 2", instruction: { de: "Ergänze dir/dich und eine Präposition.", ar: "أكمل dir/dich وحرف الجر." }, example: "Ich antworte dir auf deine Frage.",
        items: [
          "a) Ich danke {{dir}} {{für}} deine Hilfe.",
          "b) Ich frage {{dich}} {{nach}} dem Weg.",
          "c) Ich gratuliere {{dir}} {{zu}} deinem Geburtstag.",
          "d) Ich helfe {{dir}} {{bei}} der Arbeit.",
          "e) Ich lade {{dich}} {{zu}} meiner Party ein.",
          "f) Ich informiere {{dich}} {{über}} den Termin.",
          "g) Ich bitte {{dich}} {{um}} deinen Rat."
        ] },
      { title: "Übung 3", instruction: { de: "Ergänze Reflexivpronomen und Präposition.", ar: "أكمل الضمير الانعكاسي وحرف الجر." },
        items: [
          "a) Paul engagiert {{sich}} {{für}} seine politischen Ziele.",
          "b) Wann trefft ihr {{euch}} {{mit}} eurer Tante?",
          "c) Kümmerst du {{dich}} bitte {{um}} meine Katze?",
          "d) Interessiert ihr {{euch}} nicht {{für}} Politik?",
          "e) Warum ärgert er {{sich}} {{über}} den Professor?",
          "f) Ich erinnere {{mich}} nicht {{an}} die Adresse.",
          "g) Musst du {{dich}} jetzt {{von}} uns verabschieden?",
          "h) Bewirbst du {{dich}} {{um}} eine neue Arbeit?",
          "i) Max möchte {{sich}} gerne {{mit}} Julia verabreden."
        ] },
      { title: "Übung 4", instruction: { de: "Ergänze die Präposition.", ar: "أكمل حرف الجر." },
        items: [
          "a) Freust du dich {{über}} dein Geschenk?",
          "b) Freuen Sie sich {{auf}} Ihren Urlaub?",
          "c) Streitet ihr euch oft {{mit}} euren Eltern?",
          "d) Streitest du {{über}} Politik?",
          "e) Entschuldigt sich Max {{für}} seinen Fehler?",
          "f) Entschuldigst du dich {{bei}} mir?",
          "g) Unterhältst du dich oft {{mit}} deiner Kollegin?",
          "h) Unterhaltet ihr euch gern {{über}} Kinofilme?",
          "i) Erkundigt Max sich {{nach}} den Preisen für Hotelzimmer?",
          "j) Erkundigst du dich {{bei}} deinem Lehrer?",
          "k) Beschwerst du dich {{bei}} der Deutschen Post?",
          "l) Beschwert ihr euch {{über}} den schlechten Service?",
          "m) Entscheidest du dich {{für}} oder {{gegen}} die Reise?"
        ] }
    ]
  },

  /* ============================ 4.2 Pronominaladverbien ============================ */
  "4.2": {
    exercises: [
      { title: "Übung 1", instruction: { de: "Antworte mit einem Pronominaladverb (da[r]+Präposition).", ar: "جاوب بضمير ظرفي (da[r]+حرف جر)." }, example: "Hast du über den Witz gelacht? → Natürlich habe ich darüber gelacht.",
        items: [
          "a) Hast du dich über die schlechte Organisation beschwert? → Ja, ich habe mich {{darüber}} beschwert.",
          "b) Hat Jonas sich für diese Arbeit interessiert? → Ja, er hat sich {{dafür}} interessiert.",
          "c) Haben Sie sich über die Geschenke gefreut? → Ja, ich habe mich {{darüber}} gefreut.",
          "d) Habt ihr an die Verabredung gedacht? → Ja, wir haben {{daran}} gedacht.",
          "e) Haben Sie an dem Seminar teilgenommen? → Ja, ich habe {{daran}} teilgenommen.",
          "f) Hast du nach der Adresse gefragt? → Ja, ich habe {{danach}} gefragt.",
          "g) Hat Laura sich um die Reservierung gekümmert? → Ja, sie hat sich {{darum}} gekümmert.",
          "h) Hat Hatem über das Angebot nachgedacht? → Ja, er hat {{darüber}} nachgedacht.",
          "i) Haben die Leute sich für den Kurs angemeldet? → Ja, sie haben sich {{dafür}} angemeldet.",
          "j) Hast du dich für das Projekt engagiert? → Ja, ich habe mich {{dafür}} engagiert.",
          "k) Habt ihr euch an den Termin erinnert? → Ja, wir haben uns {{daran}} erinnert.",
          "l) Hast du um Ruhe gebeten? → Ja, ich habe {{darum}} gebeten.",
          "m) Hat Julia sich über die Prüfung informiert? → Ja, sie hat sich {{darüber}} informiert."
        ] },
      { title: "Übung 2", instruction: { de: "Sache → Pronominaladverb · Person → Präposition + Pronomen.", ar: "شيء → ضمير ظرفي، شخص → حرف جر + ضمير." }, example: "der Bus → Nein, ich habe nicht darauf gewartet. · Jan → Nein, ich habe nicht auf ihn gewartet.",
        items: [
          "a) der Lärm · sich wundern → Nein, ich habe mich nicht {{darüber}} gewundert.",
          "b) die Arbeit · sich konzentrieren → Nein, ich habe mich nicht {{darauf}} konzentriert.",
          "c) die Gäste · sich verabschieden → Nein, ich habe mich nicht {{von ihnen}} verabschiedet.",
          "d) der Strafzettel · protestieren → Nein, ich habe nicht {{dagegen}} protestiert.",
          "e) dein Onkel · sich unterhalten → Nein, ich habe mich nicht {{mit ihm}} unterhalten.",
          "f) die Prüfung · sich vorbereiten → Nein, ich habe mich nicht {{darauf}} vorbereitet.",
          "g) die Kinder · aufpassen → Nein, ich habe nicht {{auf sie}} aufgepasst.",
          "h) die Einladung · sich freuen → Nein, ich habe mich nicht {{darüber}} gefreut.",
          "i) die Kollegin · sprechen → Nein, ich habe nicht {{über sie}} gesprochen.",
          "j) unsere Probleme · sprechen → Nein, ich habe nicht {{darüber}} gesprochen.",
          "k) das Geschenk · sich bedanken → Nein, ich habe mich nicht {{dafür}} bedankt.",
          "l) dein Onkel · sich bedanken → Nein, ich habe mich nicht {{bei ihm}} bedankt.",
          "m) der Fehler · sich entschuldigen → Nein, ich habe mich nicht {{dafür}} entschuldigt.",
          "n) der Freund · sich entschuldigen → Nein, ich habe mich nicht {{bei ihm}} entschuldigt.",
          "o) die Verabredung · sich erinnern → Nein, ich habe mich nicht {{daran}} erinnert.",
          "p) deine Schulfreundin · sich erinnern → Nein, ich habe mich nicht {{an sie}} erinnert."
        ] },
      { title: "Übung 3", instruction: { de: "Frage: Sache → wo[r]+Präposition · Person → Präposition + wem/wen.", ar: "السؤال: شيء → wo[r]+حرف جر، شخص → حرف جر + wem/wen." }, example: "du · sich informieren · die Preise → Worüber hast du dich informiert?",
        items: [
          "a) du · sich erkundigen · Lisas Adresse → {{Wonach}} hast du dich erkundigt?",
          "b) Max · sich interessieren · Politik → {{Wofür}} interessiert sich Max?",
          "c) Lena · sich bedanken · Theo → {{Bei wem}} bedankt sich Lena?",
          "d) ihr · sich beschweren · der Lärm → {{Worüber}} habt ihr euch beschwert?",
          "e) du · sich entschuldigen · mein Fehler → {{Wofür}} hast du dich entschuldigt?",
          "f) ihr · sich unterhalten · unsere Freunde → {{Über wen}} habt ihr euch unterhalten?",
          "g) die Studenten · sich vorbereiten · die Prüfung → {{Worauf}} bereiten sich die Studenten vor?",
          "h) Julia · sprechen · ihr Onkel → {{Mit wem|Über wen}} spricht Julia?",
          "i) ihr · sich erinnern · unser Urlaub → {{Woran}} erinnert ihr euch?",
          "j) du · sich konzentrieren · meine Arbeit → {{Worauf}} konzentrierst du dich?",
          "k) Paul · sich verabschieden · seine Gäste → {{Von wem}} verabschiedet sich Paul?",
          "l) der Autofahrer · protestieren · der Strafzettel → {{Wogegen}} protestiert der Autofahrer?"
        ] },
      { title: "Übung 4", instruction: { de: "Ergänze das Fragewort (wo[r]+Präposition).", ar: "أكمل أداة السؤال." }, example: "Worüber hast du dich gefreut? – Eva hat mich angerufen.",
        items: [
          "a) {{Worauf}} hast du nicht gerechnet? – Heute regnet es.",
          "b) {{Wofür}} hast du dich entschuldigt? – Ich habe mich verspätet.",
          "c) {{Wofür}} hast du Max gedankt? – Er hat mir sehr geholfen.",
          "d) {{Worum}} hast du Lena gebeten? – Sie leiht mir ihr Fahrrad.",
          "e) {{Woran}} kannst du dich nicht gewöhnen? – Hier ist es im Winter so kalt.",
          "f) {{Wovor}} hast du dich gefürchtet? – Der Hund beißt mich.",
          "g) {{Worüber}} hast du dich gewundert? – Clara kann nicht schwimmen.",
          "h) {{Worüber}} hast du dich beschwert? – Meine Suppe war nicht mehr heiß."
        ] }
    ]
  },

  /* ============================ 4.3 wenn / falls ============================ */
  "4.3": {
    exercises: [
      { title: "Übung 1", instruction: { de: "Bilde den wenn-Satz (Verb ans Ende).", ar: "كوّن جملة wenn (الفعل في الآخر)." }, example: "Siehst du schlecht? → Wenn du schlecht siehst, dann setz dich in die erste Reihe!",
        items: [
          "a) Brauchst du Urlaub? → Wenn {{=du Urlaub brauchst}}, dann geh zum Chef!",
          "b) Kennst du den Weg nicht? → Wenn {{=du den Weg nicht kennst}}, dann frag jemanden!",
          "c) Hast du Probleme mit der Aufgabe? → Wenn {{=du Probleme mit dieser Aufgabe hast}}, dann bitte die Lehrerin um Hilfe!",
          "d) Suchst du eine Wohnung? → Wenn {{=du eine Wohnung suchst}}, dann gib eine Anzeige auf!",
          "e) Willst du in den Bergen wandern? → Wenn {{=du in den Bergen wandern willst}}, dann kauf dir gute Schuhe!",
          "f) Ist dir langweilig? → Wenn {{=dir langweilig ist}}, dann lies ein Buch!",
          "g) Brauchst du Hilfe? → Wenn {{=du Hilfe brauchst}}, dann ruf mich an!",
          "h) Ist dir kalt? → Wenn {{=dir kalt ist}}, dann mach das Fenster zu!",
          "i) Glaubst du mir nicht? → Wenn {{=du mir nicht glaubst}}, dann frag Peter!",
          "j) Hast du Hunger? → Wenn {{=du Hunger hast}}, dann iss etwas!"
        ] },
      { title: "Übung 2", instruction: { de: "Bilde: Wenn …, dann … .", ar: "كوّن: Wenn …, dann …" }, example: "Vielleicht ruft Paul an. > Ich informiere dich. → Wenn Paul anruft, dann informiere ich dich.",
        items: [
          "a) Wenn {{=ich die Prüfung schaffe}}, dann mache ich eine Party.",
          "b) Wenn {{=Max gelogen hat}}, dann vertraue ich ihm nie wieder.",
          "c) Wenn {{=ich die Arbeit vor 18:00 Uhr erledigen kann}}, dann kann ich ins Kino gehen.",
          "d) Wenn {{=Clara wieder zu spät kommt}}, dann werde ich richtig sauer.",
          "e) Wenn {{=Lena die Nachricht nicht bekommen hat}}, dann kann sie natürlich nicht antworten.",
          "f) Wenn {{=Karl eine Arbeit anfängt}}, dann kann er nächsten Monat nicht verreisen.",
          "g) Wenn {{=Theo gesünder leben möchte}}, dann muss er mehr Obst und Gemüse essen."
        ] },
      { title: "Übung 3", instruction: { de: "Bilde einen konditionalen Nebensatz (Bedingung verneinen).", ar: "كوّن جملة شرطية (انفِ الشرط)." }, example: "Du musst mir helfen. Sonst schaffe ich die Arbeit nicht. → Wenn du mir nicht hilfst, dann schaffe ich die Arbeit nicht rechtzeitig.",
        items: [
          "a) Ich muss bald buchen. → Wenn {{=ich nicht bald buche}}, dann bekomme ich kein Hotelzimmer mehr.",
          "b) Wir müssen uns beeilen. → Wenn {{=wir uns nicht beeilen}}, dann kommen wir zu spät.",
          "c) Ihr dürft nicht alles glauben. → Wenn {{=ihr alles glaubt}}, dann halten euch die Leute für naiv.",
          "d) Theo muss sparen. → Wenn {{=Theo nicht spart}}, dann kann er nicht in Urlaub fahren.",
          "e) Du musst dich wärmer anziehen. → Wenn {{=du dich nicht wärmer anziehst}}, dann erkältest du dich.",
          "f) Ich muss Geld abheben. → Wenn {{=ich kein Geld abhebe}}, dann kann ich die Rechnung nicht bezahlen.",
          "g) Du musst eine stärkere Sonnencreme benutzen. → Wenn {{=du keine stärkere Sonnencreme benutzt}}, dann bekommst du einen Sonnenbrand."
        ] }
    ]
  },

  /* ============================ 5.1 Konjunktiv II ============================ */
  "5.1": {
    exercises: [
      { title: "Übung 1", instruction: { de: "Bilde die Konjunktiv-II-Form.", ar: "كوّن صيغة Konjunktiv II." }, example: "müssen · ich muss → ich müsste",
        items: [
          "a) dürfen · ich darf → ich {{dürfte}}", "b) können · ich kann → ich {{könnte}}", "c) mögen · ich mag → ich {{möchte}}", "d) wollen · ich will → ich {{wollte}}",
          "e) sollen · ich soll → ich {{sollte}}", "f) haben · ich habe → ich {{hätte}}", "g) sein · ich bin → ich {{wäre}}", "h) werden · ich werde → ich {{würde}}"
        ] },
      { title: "Übung 2", instruction: { de: "Es wäre besser, wenn … würde.", ar: "Es wäre besser, wenn … würde." }, example: "Anja fährt zu schnell. → Es wäre besser, wenn sie nicht so schnell fahren würde.",
        items: [
          "a) Boris spricht zu leise. → Es wäre besser, wenn {{=er nicht so leise sprechen würde}}.",
          "b) Christa trinkt zu wenig. → Es wäre besser, wenn {{=sie nicht so wenig trinken würde}}.",
          "c) Dieter schläft zu kurz. → Es wäre besser, wenn {{=er nicht so kurz schlafen würde}}.",
          "d) Eva treibt zu wenig Sport. → Es wäre besser, wenn {{=sie nicht so wenig Sport treiben würde}}.",
          "e) Franz gibt zu viel Geld aus. → Es wäre besser, wenn {{=er nicht so viel Geld ausgeben würde}}.",
          "f) Clara liest zu wenig. → Es wäre besser, wenn {{=sie nicht so wenig lesen würde}}.",
          "g) Martin erzählt zu viel. → Es wäre besser, wenn {{=er nicht so viel erzählen würde}}.",
          "h) Inge lügt zu oft. → Es wäre besser, wenn {{=sie nicht so oft lügen würde}}.",
          "i) Amira denkt zu viel nach. → Es wäre besser, wenn {{=sie nicht so viel nachdenken würde}}."
        ] },
      { title: "Übung 3", instruction: { de: "Bilde eine höfliche Bitte mit könnten/könntest.", ar: "كوّن طلبًا مؤدبًا بـ könntest/könnten." }, example: "Grüßt du Paul von mir. → Könntest du Paul von mir grüßen?",
        items: [
          "a) Bringt ihr uns zum Bahnhof? → {{=Könntet ihr uns zum Bahnhof bringen}}?",
          "b) Trägst du die Tasche? → {{=Könntest du die Tasche tragen}}?",
          "c) Nimmst du mich mit? → {{=Könntest du mich mitnehmen}}?",
          "d) Lädst du mich ein? → {{=Könntest du mich einladen}}?",
          "e) Liest du die Aufgabe vor? → {{=Könntest du die Aufgabe vorlesen}}?",
          "f) Begleitet ihr mich nach Hause? → {{=Könntet ihr mich nach Hause begleiten}}?",
          "g) Tust du mir einen Gefallen? → {{=Könntest du mir einen Gefallen tun}}?",
          "h) Schickt ihr mir eine Karte? → {{=Könntet ihr mir eine Karte schicken}}?",
          "i) Stellst du die Blumen in die Vase? → {{=Könntest du die Blumen in die Vase stellen}}?",
          "j) Machen Sie den Fernseher aus? → {{=Könnten Sie den Fernseher ausmachen}}?",
          "k) Rufen Sie noch einmal an? → {{=Könnten Sie noch einmal anrufen}}?",
          "l) Gibst du mir den Kugelschreiber? → {{=Könntest du mir den Kugelschreiber geben}}?",
          "m) Leihst du mir dein Auto? → {{=Könntest du mir dein Auto leihen}}?",
          "n) Schließt du die Tür? → {{=Könntest du die Tür schließen}}?"
        ] }
    ]
  },

  /* ============================ 5.2 Wechselpräpositionen ============================ */
  "5.2": {
    exercises: [
      { title: "Übung 1", instruction: { de: "wohin? → Akkusativ.", ar: "wohin؟ → Akkusativ." },
        items: [
          "a) Gehst du in {{die}} Schule?", "b) Gehst du in {{die}} Firma?", "c) Gehst du in {{den}} Dom?",
          "d) Gehst du in {{die}} Kantine?", "e) Gehst du {{ins}} Café?", "f) Gehst du in {{die}} Garage?"
        ] },
      { title: "Übung 2", instruction: { de: "wo? → Dativ.", ar: "wo؟ → Dativ." },
        items: [
          "a) Ist er in {{der}} Werkstatt?", "b) Ist sie in {{der}} Universität?", "c) Ist er in {{der}} Küche?",
          "d) Ist sie {{im}} Wohnzimmer?", "e) Ist er {{im}} Badezimmer?", "f) Ist sie {{im}} Keller?"
        ] },
      { title: "Übung 3", instruction: { de: "Ergänze die Endungen (wo? Dativ / wohin? Akkusativ).", ar: "أكمل النهايات." },
        items: [
          "a) Sie wartet an {{der}} Bushaltestelle.", "b) Gehst du heute in {{die}} Disko?", "c) Die Lampe hängt über {{dem}} Schreibtisch.",
          "d) Schreib die Adresse auf {{die}} Karte!", "e) Frau Holm bleibt zwei Tage in {{der}} Schweiz.", "f) Das Auto steht vor {{der}} Garage.",
          "g) Fährst du morgen an {{den}} Bodensee?", "h) Der Garten ist hinter {{dem}} Haus.", "i) Ich sitze zwischen Max und {{meinem}} Vater.",
          "j) Stell die Gläser auf {{den}} Tisch!", "k) Die Schuhe stehen unter {{dem}} Sofa.", "l) Der Bus hält vor {{dem}} Rathaus.",
          "m) Maria sitzt hinter {{ihrem}} Schreibtisch.", "n) Du stehst neben {{mir}}.", "o) Sie nimmt das Buch in {{die}} Hand.",
          "p) Sie stellt die Stiefel vor {{die}} Tür.", "q) Sie will über {{die}} Straße gehen.", "r) Lebst du in {{der}} Stadt? – Nein, auf {{dem}} Land."
        ] },
      { title: "Übung 4", instruction: { de: "Ergänze die Endungen.", ar: "أكمل النهايات." },
        items: [
          "a) Was steht {{im}} Brief?", "b) Der Hund sitzt unter {{dem}} Tisch.", "c) Sie trägt den Hund vor {{die}} Tür.",
          "d) Paul möchte morgen {{aufs}} Land fahren.", "e) Setz dich bitte neben {{deinen}} Onkel!", "f) Maria sitzt zwischen Peter und {{mir}}.",
          "g) Er will in {{einem}} Monat nach Rom reisen.", "h) Wir wollten morgen in {{die}} Berge fahren.", "i) Kannst du mir {{am}} Wochenende helfen?",
          "j) Ich lebe nicht in {{der}} Stadt, sondern auf {{dem}} Dorf."
        ] },
      { title: "Übung 5", instruction: { de: "wohin? (Akkusativ) ↔ wo? (Dativ).", ar: "wohin؟ ↔ wo؟" }, example: "Sie geht an die Kasse. – Sie steht an der Kasse.",
        items: [
          "a) Das Buch liegt auf {{dem}} Schreibtisch.", "b) Stell den Wagen bitte vor {{die}} Garage!", "c) Meine Schwester lebt in {{der}} Schweiz.",
          "d) Maria sitzt auf {{dem}} Sofa.", "e) Sandra geht schnell über {{die}} Straße.", "f) Eva sitzt zwischen {{mir}} und {{ihrer}} Tante.",
          "g) Steck den Brief in {{die}} Tasche!", "h) Schreib die Adresse auf {{den}} Zettel!", "i) Ich gehe {{im|in den}} Park spazieren.",
          "j) Du läufst auf {{der|die}} Straße."
        ] },
      { title: "Übung 6", instruction: { de: "schon / erst – ergänze die Zeitangabe (am / im / in …).", ar: "أكمل ظرف الزمن." }, example: "Fährst du schon am Abend nach Berlin? – Nein, erst am Vormittag.",
        items: [
          "a) Mai · Spanien → Nein, erst {{im Mai}}.", "b) Dienstag · Köln → Nein, erst {{am Dienstag}}.", "c) ein Monat · Ungarn → Nein, erst {{in einem Monat}}.",
          "d) Abend · Stuttgart → Nein, erst {{am Abend}}.", "e) Wochenende · Frankfurt → Nein, erst {{am Wochenende}}.", "f) Winter · Griechenland → Nein, erst {{im Winter}}.",
          "g) Freitag · Dortmund → Nein, erst {{am Freitag}}.", "h) Nacht · Nürnberg → Nein, erst {{in der Nacht}}.", "i) Sommer · Schweiz → Nein, erst {{im Sommer}}.",
          "j) Morgen · Klaus → Nein, erst {{am Morgen}}.", "k) Juli · Meer → Nein, erst {{im Juli}}.", "l) Mittwoch · Türkei → Nein, erst {{am Mittwoch}}."
        ] }
    ]
  },

  /* ============================ 5.3 Ähnliche Verben ============================ */
  "5.3": {
    exercises: [
      { title: "Übung · stellen / stehen", instruction: { de: "Aktion (wohin? + Akk.) = stellen · Position (wo? + Dat.) = stehen.", ar: "حركة = stellen، وضع ثابت = stehen." },
        items: [
          "a) Ich · Glas · auf · Tisch → {{=Ich stelle das Glas auf den Tisch}}.",
          "b) Glas · neben · Flasche → {{=Das Glas steht neben der Flasche}}.",
          "c) Du · Auto · vor · Garage → {{=Du stellst das Auto vor die Garage}}.",
          "d) Paul · vor · Tür → {{=Paul steht vor der Tür}}.",
          "e) Viele Leute · an · Kinokasse → {{=Viele Leute stehen an der Kinokasse}}.",
          "f) Maria · Roller · vor · Haus → {{=Maria stellt den Roller vor das Haus}}.",
          "g) Wir · an · Bushaltestelle → {{=Wir stehen an der Bushaltestelle}}.",
          "h) Er · zwischen · seine Eltern → {{=Er stellt sich zwischen seine Eltern}}."
        ] },
      { title: "Übung · legen / liegen", instruction: { de: "Aktion = legen · Position = liegen.", ar: "حركة = legen، وضع = liegen." },
        items: [
          "a) Brief · auf · Schreibtisch → {{=Der Brief liegt auf dem Schreibtisch}}.",
          "b) Julia · auf · Sofa → {{=Julia legt sich auf das Sofa}}.",
          "c) Maria · Buch · in · Regal → {{=Maria legt das Buch ins Regal|Maria legt das Buch in das Regal}}.",
          "d) Er · Pass · neben · Ticket → {{=Er legt den Pass neben das Ticket}}.",
          "e) Sie · Hut · in · Schrank → {{=Sie legt den Hut in den Schrank}}.",
          "f) Passau · an · Donau → {{=Passau liegt an der Donau}}.",
          "g) Ich · in · Bett → {{=Ich liege im Bett|Ich liege in dem Bett}}.",
          "h) Du · Mappe · auf · Tisch → {{=Du legst die Mappe auf den Tisch}}."
        ] },
      { title: "Übung · setzen / sitzen", instruction: { de: "Aktion = (sich) setzen · Position = sitzen.", ar: "حركة = setzen، وضع = sitzen." },
        items: [
          "a) Ich · an · Fenster → {{=Ich setze mich ans Fenster|Ich setze mich an das Fenster}}.",
          "b) Julia · Kind · auf · Bett → {{=Julia setzt das Kind auf das Bett}}.",
          "c) Du · Katze · auf · Sofa → {{=Du setzt die Katze auf das Sofa}}.",
          "d) Wir · in · Bus → {{=Wir sitzen im Bus|Wir sitzen in dem Bus}}.",
          "e) Paul · sein Sohn · in · Auto → {{=Paul setzt seinen Sohn ins Auto|Paul setzt seinen Sohn in das Auto}}.",
          "f) Ich · zwischen · Onkel · Tante → {{=Ich sitze zwischen Onkel und Tante}}.",
          "g) Brille · auf · Nase → {{=Die Brille sitzt auf der Nase}}.",
          "h) Du · vor · Fernseher → {{=Du sitzt vor dem Fernseher}}."
        ] },
      { title: "Übung · hängen", instruction: { de: "Aktion (wohin? + Akk.) ↔ Position (wo? + Dat.).", ar: "حركة ↔ وضع." },
        items: [
          "a) Apfel · an · Baum → {{=Der Apfel hängt am Baum|Der Apfel hängt an dem Baum}}.",
          "b) Ich · Uhr · an · Wand → {{=Ich hänge die Uhr an die Wand}}.",
          "c) Maria · Poster · an · Tür → {{=Maria hängt das Poster an die Tür}}.",
          "d) Handtuch · neben · Badewanne → {{=Das Handtuch hängt neben der Badewanne}}.",
          "e) Paul · Hose · in · Schrank → {{=Paul hängt die Hose in den Schrank}}.",
          "f) Hut · in · Garderobe → {{=Der Hut hängt in der Garderobe}}.",
          "g) Er · Jacke · über · Stuhl → {{=Er hängt die Jacke über den Stuhl}}.",
          "h) Lampe · über · Tisch → {{=Die Lampe hängt über dem Tisch}}."
        ] },
      { title: "Übung · stecken", instruction: { de: "Aktion (wohin? + Akk.) ↔ Position (wo? + Dat.).", ar: "حركة ↔ وضع." },
        items: [
          "a) Schlüssel · in · Schloss → {{=Der Schlüssel steckt im Schloss|Der Schlüssel steckt in dem Schloss}}.",
          "b) Er · Geld · in · Tasche → {{=Er steckt das Geld in die Tasche}}.",
          "c) Füße · in · Schuhe → {{=Die Füße stecken in den Schuhen}}.",
          "d) Bleistift · in · Jackentasche → {{=Der Bleistift steckt in der Jackentasche}}.",
          "e) Ich · Foto · zwischen · Briefe → {{=Ich stecke das Foto zwischen die Briefe}}.",
          "f) Wir · Brief · in · Postkasten → {{=Wir stecken den Brief in den Postkasten}}.",
          "g) Maria · Nadel · an · Jacke → {{=Maria steckt die Nadel an die Jacke}}.",
          "h) Zettel · hinter · Spiegel → {{=Der Zettel steckt hinter dem Spiegel}}."
        ] }
    ]
  },

  /* ============================ 6.1 Präteritum ============================ */
  "6.1": {
    exercises: [
      { title: "Übung 1", instruction: { de: "Schwache Verben im Präteritum.", ar: "الأفعال الضعيفة في الماضي البسيط." }, example: "Wann kauft Max den Wagen? – Er kaufte ihn gestern.",
        items: [
          "a) Wann fragt Theo die Lehrerin? – Er {{fragte}} sie gestern.", "b) Wann holst du die Tickets? – Ich {{holte}} sie gestern.",
          "c) Wann kündigt Yasmin den Vertrag? – Sie {{kündigte}} ihn gestern.", "d) Wann repariert Murat das Fahrrad? – Er {{reparierte}} es gestern.",
          "e) Wann liefert man die Maschinen? – Man {{lieferte}} sie gestern.", "f) Wann putzt du die Fenster? – Ich {{putzte}} sie gestern.",
          "g) Wann ändert Julia den PIN-Code? – Sie {{änderte}} ihn gestern.", "h) Wann reservierst du den Tisch? – Ich {{reservierte}} ihn gestern.",
          "i) Wann lernt ihr die Verben? – Wir {{lernten}} sie gestern.", "j) Wann besuchst du Paul? – Ich {{besuchte}} ihn gestern.",
          "k) Wann bucht ihr die Reise? – Wir {{buchten}} sie gestern.", "l) Wann wechselt Lena das Geld? – Sie {{wechselte}} es gestern.",
          "m) Wann besichtigt ihr die Burg? – Wir {{besichtigten}} sie gestern.", "n) Wann mietest du das Auto? – Ich {{mietete}} es gestern.",
          "o) Wann gratulierst du deinem Großvater? – Ich {{gratulierte}} ihm gestern.", "p) Wann antwortet ihr der Kollegin? – Wir {{antworteten}} ihr gestern.",
          "q) Wann entschuldigst du dich? – Ich {{entschuldigte}} mich gestern.", "r) Wann informiert ihr euch? – Wir {{informierten}} uns gestern."
        ] },
      { title: "Übung 2", instruction: { de: "Trennbare Verben im Präteritum (schwach).", ar: "أفعال قابلة للفصل في الماضي البسيط." }, example: "ich · einkaufen → Ich kaufte im Supermarkt ein.",
        items: [
          "a) du · aufräumen → Du {{räumtest}} den Keller {{auf}}.", "b) ich · abholen → Ich {{holte}} die Pakete {{ab}}.",
          "c) Max · zumachen → Max {{machte}} die Tür {{zu}}.", "d) du · ablehnen → Du {{lehntest}} das Angebot {{ab}}.",
          "e) ihr · zurückzahlen → Ihr {{zahltet}} den Kredit {{zurück}}.", "f) wir · ausfüllen → Wir {{füllten}} das Formular {{aus}}.",
          "g) ihr · ausschalten → Ihr {{schaltetet}} das Gerät {{aus}}.", "h) wir · zumachen → Wir {{machten}} alle Fenster {{zu}}.",
          "i) ich · ankreuzen → Ich {{kreuzte}} die richtige Antwort {{an}}.", "j) Jana · auspacken → Jana {{packte}} den Koffer {{aus}}.",
          "k) du · anzünden → Du {{zündetest}} eine Kerze {{an}}.", "l) Paul · absagen → Paul {{sagte}} den Termin {{ab}}."
        ] },
      { title: "Übung 3", instruction: { de: "Starke Verben im Präteritum.", ar: "الأفعال القوية في الماضي البسيط." }, example: "ein Brief · schreiben → Ich schrieb einen Brief.",
        items: [
          "a) kein Parkplatz · finden → {{=Ich fand keinen Parkplatz}}.", "b) zur Bushaltestelle · laufen → {{=Ich lief zur Bushaltestelle}}.",
          "c) eine Cola · nehmen → {{=Ich nahm eine Cola}}.", "d) mit Paul · sprechen → {{=Ich sprach mit Paul}}.",
          "e) ein Stück Kuchen · essen → {{=Ich aß ein Stück Kuchen}}.", "f) nach Moskau · fliegen → {{=Ich flog nach Moskau}}.",
          "g) zu Hause · bleiben → {{=Ich blieb zu Hause}}.", "h) ins Kino · gehen → {{=Ich ging ins Kino}}.",
          "i) meine Freunde · einladen → {{=Ich lud meine Freunde ein}}.", "j) in den Zug · einsteigen → {{=Ich stieg in den Zug ein}}.",
          "k) um 6.30 Uhr · aufstehen → {{=Ich stand um 6.30 Uhr auf}}.", "l) viel Geld · ausgeben → {{=Ich gab viel Geld aus}}.",
          "m) letzten Sonntag · zurückkommen → {{=Ich kam letzten Sonntag zurück}}.", "n) die Kollegin · anrufen → {{=Ich rief die Kollegin an}}.",
          "o) nach Köln · mitfahren → {{=Ich fuhr nach Köln mit}}.", "p) auf dem Sofa · einschlafen → {{=Ich schlief auf dem Sofa ein}}."
        ] },
      { title: "Übung 4", instruction: { de: "Gemischte Verben im Präteritum.", ar: "الأفعال المختلطة في الماضي البسيط." }, example: "Paul bringt Blumen mit. → Paul brachte Blumen mit.",
        items: [
          "a) Lena weiß die Antwort. → Lena {{wusste}} die Antwort.", "b) Ich kenne den Professor nicht. → Ich {{kannte}} den Professor nicht.",
          "c) Der Dieb rennt mit der Tasche weg. → Der Dieb {{rannte}} mit der Tasche weg.", "d) Murat denkt oft an seine Eltern. → Murat {{dachte}} oft an seine Eltern.",
          "e) Julia nennt ihre Adresse. → Julia {{nannte}} ihre Adresse.", "f) Ich verbrenne den Brief. → Ich {{verbrannte}} den Brief."
        ] }
    ]
  },

  /* ============================ 6.2 Relativsätze ============================ */
  "6.2": {
    exercises: [
      { title: "Übung 1", instruction: { de: "Relativpronomen im Nominativ.", ar: "ضمير الوصل في الرفع." }, example: "Max hat eine Katze, die ziemlich klein ist.",
        items: [
          "a) Kennst du meinen Onkel, {{der}} in Hamburg wohnt?", "b) Wie geht es deiner Schwester, {{die}} nach Berlin gezogen ist?",
          "c) Ich mag Kuchen, {{der}} mit viel Schokolade ist.", "d) Lisa fährt mit einem Fahrrad, {{das}} schon sehr alt ist.",
          "e) Kennst du die Kinder, {{die}} im Garten spielen?", "f) Gehört eurer Nachbarin der Hund, {{der}} so laut bellt?",
          "g) Reparierst du die Lampe, {{die}} im Flur hängt?", "h) Paul hat einen Freund, {{der}} seit 10 Jahren in New York lebt.",
          "i) Wir hatten ein Zimmer in einem Hotel, {{das}} am See liegt.", "j) Mir gefallen die Blumen, {{die}} in deinem Garten blühen.",
          "k) Wie heißt der Kollege, {{der}} dich letzte Woche besucht hat?"
        ] },
      { title: "Übung 2", instruction: { de: "Relativpronomen im Akkusativ.", ar: "ضمير الوصل في النصب." }, example: "Max hat eine Katze, die er sehr liebt.",
        items: [
          "a) Kennst du meinen Onkel, {{den}} ich in Hamburg besucht habe?", "b) Wie geht es deiner Schwester, {{die}} du in Berlin besucht hast?",
          "c) Morgen habe ich einen Termin, {{den}} ich nicht vergessen darf.", "d) Wie heißt das Hotel, {{das}} du so toll findest?",
          "e) Gefällt dir die Tasche, {{die}} ich gestern gekauft habe?", "f) Wie war der Film, {{den}} du gestern gesehen hast?",
          "g) In der Innenstadt liegt die Wohnung, {{die}} Lisa gemietet hat.", "h) Ich mag das Lied, {{das}} du gesungen hast.",
          "i) Nahe am Meer wohnen die Freunde, {{die}} wir nächste Woche besuchen.", "j) Robert liest das Buch, {{das}} ich ihm empfohlen habe.",
          "k) Kennst du den Mann, {{den}} Laura geheiratet hat?"
        ] },
      { title: "Übung 3", instruction: { de: "Ergänze das Relativpronomen (Nominativ oder Akkusativ).", ar: "أكمل ضمير الوصل." },
        items: [
          "a) Hast du die Übung gemacht, {{die}} auf Seite 15 steht?", "b) Wie hat dir der Roman gefallen, {{den}} dir Max gegeben hat?",
          "c) Wohin hast du das Werkzeug gelegt, {{das}} ich dir geliehen habe?", "d) Wie haben dir die Kekse geschmeckt, {{die}} ich gebacken habe?",
          "e) Hast du den Text gelesen, {{der}} so lang war?", "f) Die Polizei hat mit den Leuten gesprochen, {{die}} den Unfall gesehen haben.",
          "g) Hast du die Frau gesehen, {{die}} im III. Stock wohnt?", "h) Jonas hat ein E-Auto gekauft, {{das}} er im Internet gefunden hat."
        ] },
      { title: "Übung 4", instruction: { de: "Setze den Relativsatz in den Satz ein.", ar: "أدخل جملة الوصل في الجملة." }, example: "Das Obst, das du im Supermarkt gekauft hast, musst du waschen.",
        items: [
          "a) Der Zug, {{=der nach München fährt}}, steht auf Gleis 5.",
          "b) Die Malerin, {{=die das Porträt des Präsidenten gemalt hat}}, ist sehr berühmt.",
          "c) Der Gast, {{=der ein sehr kleines Zimmer bekommen hat}}, hat sich beschwert.",
          "d) Die Touristen, {{=die ich auf dem Rathausplatz getroffen habe}}, kommen aus Prag.",
          "e) Der Film, {{=den ich gestern gesehen habe}}, war spannend.",
          "f) Die Leute, {{=die ich vom Bahnhof abholen soll}}, kommen um 16:00 Uhr an.",
          "g) Der Salat, {{=den ich in diesem Restaurant gegessen habe}}, hat mir gar nicht geschmeckt.",
          "h) Das Schiff, {{=das aus der Schweiz kommt}}, bleibt zwei Tage in Passau.",
          "i) Die Geschichte, {{=die Martin mir letzte Woche erzählt hat}}, war sehr langweilig.",
          "j) Der Hund, {{=den wir allein im Park gesehen haben}}, gehört meinem Nachbarn."
        ] }
    ]
  },

  /* ============================ 6.3 Plusquamperfekt ============================ */
  "6.3": {
    exercises: [
      { title: "Übung 1", instruction: { de: "… hatte/war + Partizip II, dann … .", ar: "الماضي الأسبق ثم الفعل التالي." }, example: "Max verließ das Restaurant. (Rechnung bezahlen) → Max hatte die Rechnung bezahlt, dann verließ er das Restaurant.",
        items: [
          "a) Eva bestellte Kaffee. (ein Stück Kuchen essen) → {{=Eva hatte ein Stück Kuchen gegessen}}, dann bestellte sie Kaffee.",
          "b) Theo zog sich an. (sich duschen) → {{=Theo hatte sich geduscht}}, dann zog er sich an.",
          "c) Paul besuchte uns. (mich anrufen) → {{=Paul hatte mich angerufen}}, dann besuchte er uns.",
          "d) Lena ging zu Bett. (fernsehen) → {{=Lena hatte ferngesehen}}, dann ging sie zu Bett.",
          "e) Julia verließ das Haus. (alle Fenster schließen) → {{=Julia hatte alle Fenster geschlossen}}, dann verließ sie das Haus.",
          "f) Robert nahm an der Prüfung teil. (sich gut vorbereiten) → {{=Robert hatte sich sehr gut vorbereitet}}, dann nahm er an der Prüfung teil.",
          "g) Yasmin fuhr in die Stadt. (mit ihrer Schwester telefonieren) → {{=Yasmin hatte mit ihrer Schwester telefoniert}}, dann fuhr sie in die Stadt.",
          "h) Wir setzten uns in ein Café. (zwei Stunden spazieren gehen) → {{=Wir waren zwei Stunden spazieren gegangen}}, dann setzten wir uns in ein Café."
        ] },
      { title: "Übung 2", instruction: { de: "…, vorher hatte/war + Partizip II.", ar: "…، vorher + الماضي الأسبق." }, example: "Ich schaltete den Computer aus, vorher hatte ich alle Programme geschlossen.",
        items: [
          "a) Kai ging zu Bett, vorher {{=hatte er sich die Zähne geputzt}}.",
          "b) Wir gingen ins Hotel, vorher {{=hatten wir die Stadt besichtigt}}.",
          "c) Ihr wart sehr vorsichtig, vorher {{=hattet ihr eine schlechte Erfahrung gemacht}}.",
          "d) Endlich fand er seine Brille, vorher {{=hatte er überall gesucht}}.",
          "e) Wir durften weiterfahren, vorher {{=hatten wir unsere Pässe gezeigt}}.",
          "f) Lena kaufte einen Laptop, vorher {{=hatte sie die Preise verglichen}}.",
          "g) Paul zog nach Wien, vorher {{=hatte er zwei Jahre in Salzburg gelebt}}.",
          "h) Ich löschte das Licht, vorher {{=hatte ich noch ein paar Seiten gelesen}}.",
          "i) Wir fanden endlich eine schöne Wohnung, vorher {{=hatten wir fast ein Jahr gesucht}}.",
          "j) Theo kaufte sich ein neues Sofa, vorher {{=war er umgezogen}}.",
          "k) Ich nannte der Taxifahrerin die Adresse, vorher {{=war ich eingestiegen}}.",
          "l) Man informierte die Polizei, vorher {{=war ein Unfall passiert}}."
        ] }
    ]
  },

  /* ============================ 7.1 damit ============================ */
  "7.1": {
    exercises: [
      { title: "Übung 1", instruction: { de: "Bilde den damit-Satz (mit sollen → Präsens ohne Modalverb).", ar: "كوّن جملة damit." }, example: "Er spricht laut. Alle sollen ihn hören. → Er spricht sehr laut, damit alle Leute ihn hören.",
        items: [
          "a) Ich erkläre langsam. (Er soll alles verstehen.) → …, damit {{=er alles versteht}}.",
          "b) Max schließt das Fenster. (Die Nachbarn sollen die Musik nicht hören.) → …, damit {{=die Nachbarn die Musik nicht hören}}.",
          "c) Ich schreibe Carmen eine E-Mail. (Sie soll mir mein Buch zurückgeben.) → …, damit {{=sie mir mein Buch zurückgibt}}.",
          "d) Paul gibt der Tochter den Schlüssel. (Sie soll die Tante abholen.) → …, damit {{=sie die Tante vom Bahnhof abholt}}.",
          "e) Martina schneidet das Obst klein. (Die Tochter soll mehr essen.) → …, damit {{=ihre Tochter mehr davon isst}}.",
          "f) Die Polizei macht Radarkontrollen. (Die Autofahrer sollen nicht schnell fahren.) → …, damit {{=die Autofahrer nicht so schnell fahren}}."
        ] },
      { title: "Übung 2", instruction: { de: "Bilde den damit-Satz (wollen → damit + Präsens).", ar: "كوّن جملة damit." }, example: "Karl stellt sich auf einen Stuhl. Er will alles sehen können. → …, damit er alles sehen kann.",
        items: [
          "a) Wir trainieren. (Wir wollen fit bleiben.) → …, damit {{=wir fit bleiben}}.",
          "b) Max braucht einen Termin. (Er will nicht lange warten müssen.) → …, damit {{=er nicht so lange warten muss}}.",
          "c) Ich schreibe mir den Termin auf. (Ich möchte ihn nicht vergessen.) → …, damit {{=ich ihn nicht vergesse}}.",
          "d) Carmen trinkt Zitronentee. (Sie will keine Erkältung kriegen.) → …, damit {{=sie keine Erkältung kriegt}}.",
          "e) Jochen spricht mit dem Händler. (Er will den Wagen billiger bekommen.) → …, damit {{=er den Wagen billiger bekommt}}.",
          "f) Claudia macht einen Spanischkurs. (Sie will die Sprache besser verstehen.) → …, damit {{=sie die Sprache besser versteht}}."
        ] },
      { title: "Übung 3", instruction: { de: "Bilde den damit-Satz (können bleibt erhalten).", ar: "كوّن جملة damit (können يفضل)." }, example: "Max kauft eine Brille. Er kann besser lesen. → …, damit er besser lesen kann.",
        items: [
          "a) Petra macht einen Computerkurs. → …, damit {{=sie einen besseren Job bekommen kann}}.",
          "b) Jana fährt in die Berge. → …, damit {{=sie sich erholen kann}}.",
          "c) Jürgen kauft ein Kochbuch. → …, damit {{=er besser kochen kann}}.",
          "d) Martha nimmt eine Schlaftablette. → …, damit {{=sie besser einschlafen kann}}.",
          "e) Tom macht einen Online-Kurs. → …, damit {{=er zu Hause lernen kann}}.",
          "f) Lisa braucht Ruhe. → …, damit {{=sie sich besser konzentrieren kann}}.",
          "g) Robert steht früher auf. → …, damit {{=er vor dem Frühstück noch joggen kann}}.",
          "h) Tamara fährt mit dem Zug. → …, damit {{=sie unterwegs arbeiten kann}}."
        ] }
    ]
  },

  /* ============================ 7.2 Unbestimmte Pronomen ============================ */
  "7.2": {
    exercises: [
      { title: "Übung 1", instruction: { de: "Antworte mit einer/eine/eins oder welche.", ar: "جاوب بـ einer/eine/eins أو welche." }, example: "Wo gibt es hier einen Sportplatz? – Dort ist einer.",
        items: [
          "a) … eine Tankstelle? – Dort ist {{eine}}.", "b) … einen Supermarkt? – Dort ist {{einer}}.", "c) … ein Museum? – Dort ist {{eins|eines}}.",
          "d) … einen Schnellimbiss? – Dort ist {{einer}}.", "e) … ein Krankenhaus? – Dort ist {{eins|eines}}.", "f) … eine Bank? – Dort ist {{eine}}.",
          "g) … ein Reisebüro? – Dort ist {{eins|eines}}.", "h) … eine Bushaltestelle? – Dort ist {{eine}}.", "i) … einen Buchladen? – Dort ist {{einer}}.",
          "j) … Restaurants? – Dort sind {{welche}}.", "k) … eine Werkstatt? – Dort ist {{eine}}.", "l) … Taxis? – Dort sind {{welche}}."
        ] },
      { title: "Übung 2", instruction: { de: "Ergänze man / jemand(en) / niemand(en).", ar: "أكمل man / jemand / niemand." },
        items: [
          "a) Kann mir mal {{jemand}} helfen?", "b) Kann {{man}} die Burg auch im Winter besichtigen?",
          "c) Kann {{man}} in diesem Geschäft spanischen Wein kaufen?", "d) Alle waren still. {{Niemand}} hat ein Wort gesagt.",
          "e) Ich habe angerufen, aber {{niemand}} hat sich gemeldet.", "f) Es war so dunkel, dass {{man}} nichts sehen konnte.",
          "g) Die Party war langweilig. {{Niemand}} hat getanzt.", "h) Weil ich den Weg nicht kannte, habe ich {{jemanden}} gefragt.",
          "i) {{Niemand}} ist so klug wie Inge.", "j) Hat {{jemand}} meine Tasche gesehen?",
          "k) Wenn {{man}} sich bei Kälte nicht warm anzieht, kann {{man}} eine Grippe bekommen.",
          "l) Es hat geklopft. Kann mal {{jemand}} die Tür aufmachen?", "m) Wenn {{man}} nicht aufpasst, kann {{man}} viele Fehler machen.",
          "n) Wenn du das allein nicht machen kannst, musst du {{jemanden}} um Hilfe bitten.", "o) Jonas hat so lange gerufen, bis ihn {{jemand}} gehört hat."
        ] }
    ]
  },

  /* ============================ 7.3 indirekte Fragen ============================ */
  "7.3": {
    exercises: [
      { title: "Übung 1", instruction: { de: "Bilde einen Nebensatz mit Fragewort.", ar: "كوّن جملة ثانوية بأداة استفهام." }, example: "Wann fährt der Zug ab? – Ich weiß nicht, wann der Zug abfährt.",
        items: [
          "a) Ich weiß nicht, {{=wer in der Firma anruft}}.", "b) Ich weiß nicht, {{=wann Theo am Morgen aufsteht}}.",
          "c) Ich weiß nicht, {{=was Carmen heute einkauft}}.", "d) Ich weiß nicht, {{=wer nach München mitfährt}}.",
          "e) Ich weiß nicht, {{=was die Firma herstellt}}.", "f) Ich weiß nicht, {{=wer dich vom Bahnhof abholt}}.",
          "g) Ich weiß nicht, {{=wen dein Kollege einlädt}}.", "h) Ich weiß nicht, {{=wann der Film anfängt}}."
        ] },
      { title: "Übung 2", instruction: { de: "Bilde einen Nebensatz mit Fragewort.", ar: "كوّن جملة ثانوية بأداة استفهام." }, example: "warum · Tom · so spät · kommen → Ich weiß nicht, warum Tom so spät gekommen ist.",
        items: [
          "a) wo · Lena · sein → Ich weiß nicht, {{=wo Lena ist}}.", "b) wann · Max · abreisen → Ich weiß nicht, {{=wann Max abreist}}.",
          "c) wem · Jana · helfen → Ich weiß nicht, {{=wem Jana hilft}}.", "d) wie viel · Stefan · bezahlen → Ich weiß nicht, {{=wie viel Stefan bezahlt}}.",
          "e) wohin · Clara · fahren → Ich weiß nicht, {{=wohin Clara fährt}}.", "f) wie lange · Film · dauern → Ich weiß nicht, {{=wie lange der Film dauert}}.",
          "g) was · Maria · verlieren → Ich weiß nicht, {{=was Maria verloren hat}}.", "h) wen · Hatem · treffen → Ich weiß nicht, {{=wen Hatem trifft}}."
        ] },
      { title: "Übung 3", instruction: { de: "Bilde einen Nebensatz mit ob.", ar: "كوّن جملة ثانوية بـ ob." }, example: "Kommt Peter heute? – Ich habe keine Ahnung, ob Peter heute kommt.",
        items: [
          "a) Geht Martina ins Kino? → Ich habe keine Ahnung, {{=ob Martina heute Abend ins Kino geht}}.",
          "b) Trinkt Thomas Weißwein? → Ich habe keine Ahnung, {{=ob Thomas Weißwein trinkt}}.",
          "c) Holt Paul mich ab? → Ich habe keine Ahnung, {{=ob Paul mich vom Flughafen abholt}}.",
          "d) Kann man hier parken? → Ich habe keine Ahnung, {{=ob man hier kostenlos parken kann}}.",
          "e) Kauft sich Lisa ein Fahrrad? → Ich habe keine Ahnung, {{=ob Lisa sich ein Fahrrad kauft}}.",
          "f) Spielt Max Fußball? → Ich habe keine Ahnung, {{=ob Max morgen Fußball spielt}}.",
          "g) Fährt Frau Berg nach Rom? → Ich habe keine Ahnung, {{=ob Frau Berg nach Rom fährt}}.",
          "h) Nimmt man dich mit? → Ich habe keine Ahnung, {{=ob man dich mitnimmt}}.",
          "i) Wird das Wetter besser? → Ich habe keine Ahnung, {{=ob das Wetter morgen besser wird}}.",
          "j) Kann man den Computer reparieren? → Ich habe keine Ahnung, {{=ob man diesen Computer noch reparieren kann}}.",
          "k) Geht dein Kollege in Urlaub? → Ich habe keine Ahnung, {{=ob dein Kollege nächste Woche in Urlaub geht}}.",
          "l) Hat Kai die Nachricht bekommen? → Ich habe keine Ahnung, {{=ob Kai die Nachricht bekommen hat}}."
        ] }
    ]
  },

  /* ============================ 8.1 dieser / diese ============================ */
  "8.1": {
    exercises: [
      { title: "Übung 1", instruction: { de: "Bilde eine Frage im Präsens mit dieser/diese/dieses.", ar: "كوّن سؤالًا بـ dieser/diese/dieses." }, example: "Rechnung · bezahlen → Wann bezahlst du diese Rechnung?",
        items: [
          "a) Reise · buchen → {{=Wann buchst du diese Reise}}?", "b) Leute · helfen → {{=Wann hilfst du diesen Leuten}}?",
          "c) Schloss · besichtigen → {{=Wann besichtigst du dieses Schloss}}?", "d) Geschichte · erzählen → {{=Wann erzählst du diese Geschichte}}?",
          "e) Leute · informieren → {{=Wann informierst du diese Leute}}?", "f) SMS · schreiben → {{=Wann schreibst du diese SMS}}?",
          "g) Experte · fragen → {{=Wann fragst du diesen Experten}}?", "h) Freundin · anrufen → {{=Wann rufst du diese Freundin an}}?",
          "i) Herr · zuhören → {{=Wann hörst du diesem Herrn zu}}?", "j) Kollege · sprechen → {{=Wann sprichst du mit diesem Kollegen}}?",
          "k) Dinge · sich kümmern → {{=Wann kümmerst du dich um diese Dinge}}?", "l) Frau · sich bedanken → {{=Wann bedankst du dich bei dieser Frau}}?"
        ] },
      { title: "Übung 2", instruction: { de: "Bilde eine Frage im Perfekt mit diesem/diese + Adjektiv.", ar: "كوّن سؤالًا في الـ Perfekt." }, example: "lustig · Film · sehen → Hast du diesen lustigen Film gesehen?",
        items: [
          "a) kaputt · Fahrrad · reparieren → {{=Hast du dieses kaputte Fahrrad repariert}}?",
          "b) scharf · Suppe · probieren → {{=Hast du diese scharfe Suppe probiert}}?",
          "c) lang · Brief · schreiben → {{=Hast du diesen langen Brief geschrieben}}?",
          "d) schwer · Rucksack · tragen → {{=Hast du diesen schweren Rucksack getragen}}?",
          "e) schwierig · Fragen · beantworten → {{=Hast du diese schwierigen Fragen beantwortet}}?",
          "f) langweilig · Roman · lesen → {{=Hast du diesen langweiligen Roman gelesen}}?",
          "g) süß · Früchte · essen → {{=Hast du diese süßen Früchte gegessen}}?",
          "h) jung · Journalist · antworten → {{=Hast du diesem jungen Journalisten geantwortet}}?",
          "i) nett · Frau · grüßen → {{=Hast du diese nette Frau gegrüßt}}?",
          "j) bekannt · Experte · vertrauen → {{=Hast du diesem bekannten Experten vertraut}}?",
          "k) klug · Kollegin · glauben → {{=Hast du dieser klugen Kollegin geglaubt}}?",
          "l) freundlich · Herr · kennen → {{=Hast du diesen freundlichen Herrn gekannt}}?",
          "m) sympathisch · Studentin · einladen → {{=Hast du diese sympathische Studentin eingeladen}}?",
          "n) arm · Mensch · helfen → {{=Hast du diesem armen Menschen geholfen}}?"
        ] }
    ]
  },

  /* ============================ 8.2 Futur I ============================ */
  "8.2": {
    exercises: [
      { title: "Übung 1", instruction: { de: "Vorsatz/Versprechen – antworte mit Futur I + sicher.", ar: "وعد/عزم – جاوب بـ Futur I + sicher." }, example: "Wann räumst du dein Zimmer auf? → Ich werde morgen sicher mein Zimmer aufräumen.",
        items: [
          "a) Wann putzt du die Fenster? → {{=Ich werde die Fenster sicher putzen|Ich werde sicher die Fenster putzen}}.",
          "b) Wann entscheidest du dich? → {{=Ich werde mich sicher entscheiden}}.",
          "c) Wann reparierst du das Fahrrad? → {{=Ich werde das Fahrrad sicher reparieren|Ich werde sicher das Fahrrad reparieren}}.",
          "d) Wann suchst du eine Wohnung? → {{=Ich werde sicher eine neue Wohnung suchen|Ich werde mir sicher eine neue Wohnung suchen}}.",
          "e) Wann hörst du mit dem Rauchen auf? → {{=Ich werde sicher mit dem Rauchen aufhören}}.",
          "f) Wann rufst du den Handwerker an? → {{=Ich werde sicher den Handwerker anrufen|Ich werde den Handwerker sicher anrufen}}.",
          "g) Wann kaufst du dir ein Wörterbuch? → {{=Ich werde mir sicher ein Wörterbuch kaufen}}.",
          "h) Wann gibst du mir mein Werkzeug zurück? → {{=Ich werde dir sicher dein Werkzeug zurückgeben}}."
        ] },
      { title: "Übung 2", instruction: { de: "Vermutung – bilde Sätze mit Futur I + wohl.", ar: "تخمين – بـ Futur I + wohl." }, example: "Besuchst du Thomas bald? → Ich werde ihn wohl bald besuchen.",
        items: [
          "a) Rufst du deine Cousine an? → {{=Ich werde sie wohl anrufen}}.",
          "b) Arbeitest du am Wochenende? → {{=Ich werde wohl am Wochenende arbeiten}}.",
          "c) Fährt deine Kollegin nach Wien? → {{=Sie wird wohl nach Wien fahren}}.",
          "d) Braucht ihr meine Hilfe? → {{=Wir werden wohl deine Hilfe brauchen}}.",
          "e) Bringst du Max zum Flughafen? → {{=Ich werde ihn wohl zum Flughafen bringen}}.",
          "f) Lädst du Amira zur Party ein? → {{=Ich werde sie wohl zur Party einladen}}.",
          "g) Fliegt ihr nach Kairo? → {{=Wir werden wohl nach Kairo fliegen}}.",
          "h) Schafft Hatem die Prüfung? → {{=Er wird die Prüfung wohl schaffen|Er wird wohl die Prüfung schaffen}}.",
          "i) Geht ihr heute Abend ins Kino? → {{=Wir werden wohl heute Abend ins Kino gehen}}.",
          "j) Wohnt Sandra jetzt in Köln? → {{=Sie wird wohl jetzt in Köln wohnen}}.",
          "k) Nimmst du an dieser Reise teil? → {{=Ich werde wohl an dieser Reise teilnehmen}}.",
          "l) Kaufst du dir dieses E-Bike? → {{=Ich werde mir wohl dieses E-Bike kaufen}}."
        ] },
      { title: "Übung 3", instruction: { de: "Aufforderung – bilde Sätze mit Futur I + wohl.", ar: "أمر – بـ Futur I + wohl." }, example: "Sag die Wahrheit! → Wirst du wohl endlich die Wahrheit sagen!",
        items: [
          "a) Hör auf mich! → {{=Wirst du wohl endlich auf mich hören}}!",
          "b) Sei leise! → {{=Wirst du wohl endlich leise sein}}!",
          "c) Lauft schneller! → {{=Werdet ihr wohl schneller laufen}}!",
          "d) Räum dein Zimmer auf! → {{=Wirst du wohl endlich dein Zimmer aufräumen}}!",
          "e) Fahren Sie hier weg! → {{=Werden Sie wohl endlich hier wegfahren}}!",
          "f) Bring den Müll raus! → {{=Wirst du wohl endlich den Müll rausbringen}}!",
          "g) Lasst die Katze in Ruhe! → {{=Werdet ihr wohl die Katze in Ruhe lassen}}!",
          "h) Bezahlen Sie Ihre Miete! → {{=Werden Sie wohl endlich Ihre Miete bezahlen}}!",
          "i) Geht schlafen, Kinder! → {{=Werdet ihr wohl endlich schlafen gehen}}!"
        ] }
    ]
  },

  /* ============================ 8.3 Pauschale Negation ============================ */
  "8.3": {
    exercises: [
      { title: "Übung", instruction: { de: "Bilde eine pauschale Negation mit nicht (oder nicht mehr / noch nicht).", ar: "كوّن نفيًا شاملًا بـ nicht." }, example: "Spielst du gerne Karten? → Nein, ich spiele nicht gerne Karten.",
        items: [
          "a) Nimmt Max an der Konferenz teil? → {{=Nein, Max nimmt nicht an der Konferenz teil}}.",
          "b) Lädst du deinen Kollegen ein? → {{=Nein, ich lade meinen Kollegen nicht ein}}.",
          "c) Besucht deine Tante dich heute? → {{=Nein, meine Tante besucht mich heute nicht}}.",
          "d) Liest du jetzt die Zeitung? → {{=Nein, ich lese jetzt die Zeitung nicht}}.",
          "e) Hat Jana sich um diese Stelle beworben? → {{=Nein, Jana hat sich nicht um diese Stelle beworben}}.",
          "f) Sind die Gäste sofort abgereist? → {{=Nein, die Gäste sind nicht sofort abgereist}}.",
          "g) Wolltest du dich von ihnen verabschieden? → {{=Nein, ich wollte mich nicht von ihnen verabschieden}}.",
          "h) Darf man diese Produkte importieren? → {{=Nein, man darf diese Produkte nicht importieren}}.",
          "i) Kommen diese Früchte aus Tunesien? → {{=Nein, diese Früchte kommen nicht aus Tunesien}}.",
          "j) Kann Peter die Arbeit rechtzeitig erledigen? → {{=Nein, Peter kann die Arbeit nicht rechtzeitig erledigen}}.",
          "k) Konnte der Experte dir das Problem erklären? → {{=Nein, der Experte konnte mir das Problem nicht erklären}}.",
          "l) Sind solche Aktionen notwendig? → {{=Nein, solche Aktionen sind nicht notwendig}}.",
          "m) Habt ihr die Bücher schon zurückgegeben? → {{=Nein, wir haben die Bücher noch nicht zurückgegeben}}.",
          "n) Dauert die Fahrt noch lange? → {{=Nein, die Fahrt dauert nicht mehr lange}}.",
          "o) Muss man den Kollegen noch informieren? → {{=Nein, man muss den Kollegen nicht mehr informieren}}.",
          "p) Habt ihr die Zimmer schon reserviert? → {{=Nein, wir haben die Zimmer noch nicht reserviert}}.",
          "q) Möchtest du noch bleiben? → {{=Nein, ich möchte nicht mehr bleiben}}.",
          "r) Sind die Arbeiten schon fertig? → {{=Nein, die Arbeiten sind noch nicht fertig}}."
        ] }
    ]
  }

};
