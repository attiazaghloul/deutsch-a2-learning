/* Interactive answer sheets transcribed from the exercise and solution pages. */
(function () {
  const text = (prompt, answer, extra={}) => ({type:"text", prompt, answer:Array.isArray(answer)?answer:[answer], ...extra});
  const choice = (prompt, options, answer, extra={}) => ({type:"choice", prompt, options, answer, ...extra});
  const tf = (prompt, answer) => choice(prompt,["richtig","falsch"],answer?0:1);
  const multi = (prompt, options, answer, extra={}) => ({type:"multi",prompt,options,answer,...extra});
  const match = (prompt, left, options, answer, extra={}) => ({type:"match",prompt,left,options,answer,...extra});

  window.HOEREN_INTERACTIVE = {
    A1:[
      {title:"1a · Kursteilnehmer", questions:[
        text("Abdullah: Heimatland", "Tunesien"), text("Abdullah: Beruf", ["Ingenieur","Ingenieur bei Siemens"]),
        text("Abdullah: Familienstand", ["verheiratet, drei Kinder","verheiratet"]), text("Abdullah: Hobby", ["Fußball spielen","Fußball"]),
        text("Abdullah: Alter", ["46","46 Jahre"]),
        text("Claire: Heimatland", "Frankreich"), text("Claire: Beruf", ["Au-pair-Mädchen","Au-pair"]),
        text("Claire: Familienstand", "ledig"), text("Claire: Hobby", ["shoppen","Shoppen"]), text("Claire: Alter", ["18","18 Jahre"]),
        text("Philipp: Heimatland", ["USA","die USA"]), text("Philipp: Beruf", ["Student","Medizinstudent"]),
        text("Philipp: Hobby", ["reisen","Reisen"]), text("Philipp: Alter", ["24","24 Jahre"]),
        text("Elena: Heimatland", "Russland"), text("Elena: Beruf", ["Lehrerin","Grundschullehrerin"]),
        text("Elena: Familienstand", "verheiratet"), text("Elena: Hobbys", ["lesen, klassische Musik, spazieren gehen","lesen klassische Musik spazieren gehen"]),
        text("Elena: Alter", ["31","31 Jahre"])
      ]}
    ],
    A2:[
      {title:"2a · Richtig oder falsch?",questions:[
        tf("Max will am Sonntag in die Berge fahren.",false),tf("Wenn gutes Wetter ist, besucht er eine Ausstellung.",false),
        tf("Hanna fährt mit dem Fahrrad an den See.",true),tf("Hanna geht am Samstagabend ins Theater.",true),
        tf("Max schaut ein Fußballspiel an.",false),tf("Hanna möchte am Sonntag ausschlafen.",true),
        tf("Hanna arbeitet am Sonntag viel.",false),tf("Max trainiert am Sonntag für einen Marathon.",true),
        tf("Max' Freundin findet, dass er nicht genug Zeit für sie hat.",true),tf("Im Moment läuft im Kino „Faust“ von Goethe.",false)
      ]},
      {title:"2b · Antworte",questions:[
        text("Was macht Max am Samstag?",["Er fährt in die Berge","Max fährt in die Berge"]),
        text("Was macht er, wenn es regnet?",["Er besucht eine Ausstellung","Er bleibt in der Stadt und besucht eine Ausstellung"]),
        text("Was macht Hanna am Samstag?",["Sie fährt mit dem Fahrrad an den See","Hanna fährt mit dem Fahrrad an den See"]),
        text("Was macht Hanna am Samstagabend?",["Sie geht ins Theater","Hanna geht ins Theater"]),
        text("Was macht Hanna am Sonntag?",["Sie möchte ausschlafen","Sie schläft aus"]),
        text("Was macht Max am Sonntag?",["Er trainiert für einen Marathon","Er geht joggen"])
      ]}
    ],
    A3:[
      {title:"3a · Familienwörter",questions:[
        text("Leben ihre ___ noch?","Großeltern"),text("Die ___ der Mutter lebt in Rio.","Schwester"),
        text("Also Isabels ___?","Tante"),text("Tante und ___","Onkel"),text("die beiden ___","Cousinen"),
        text("alle ihre ___ und ___",["Neffen und Nichten","Neffen Nichten"]),
        text("Wie viele ___ hat Isabel?","Geschwister"),text("Sie hat zwei ___","Brüder"),
        text("Die beiden ___ waren da.","Schwägerinnen"),text("Isabels ___","Schwiegereltern"),
        text("Hans' ___","Stiefmutter"),text("keinen neuen ___","Schwager")
      ]},
      {title:"3c · Wer ist das?",questions:[
        text("Der Bruder von meinem Vater ist mein …","Onkel"),text("Die Eltern von meinem Mann sind meine …","Schwiegereltern"),
        text("Der Bruder von meinem Mann ist mein …","Schwager"),text("Der Bruder meiner Großmutter ist mein …","Großonkel"),
        text("Der Sohn meiner Schwester ist mein …","Neffe"),text("Die Tochter der Schwester meiner Mutter ist meine …","Cousine"),
        text("Die Tochter meines Schwagers ist meine …","Nichte"),text("Der zweite Mann meiner Mutter ist mein …","Stiefvater")
      ]}
    ],
    A4:[{title:"4a · Wähle die richtige Lösung",questions:[
      choice("Der Film „Die Killerbienen 2“ ist …",["sicher","spanisch","spannend"],2),
      choice("Lena findet Science-Fiction-Filme …",["langweilig","schrecklich","tödlich"],0),
      choice("Max hat keine Lust auf einen Film …",["im Pyjama","ohne Herz","mit viel Romantik"],2),
      choice("Lena denkt, …",["Krimis sind gut für ihre Nerven","Max will in die Alpen gehen","Komödien sind gut"],2),
      choice("Max will lieber mit Lena €",["ins indische Restaurant gehen","in ein bayrisches Restaurant gehen","zweimal den Film anschauen"],1),
      choice("Lena möchte gerne …",["mit Max eine Diät machen","selbst etwas Gutes kochen","ihren Liebling Max anschauen"],1)
    ]}],
    B1:[
      {title:"1a · Satzteile verbinden",questions:[
        match("Ordne die Satzenden zu.",
          ["Hanna hat","Die Wohnung liegt","Der Besichtigungstermin ist","Der Balkon hat","Zur Bushaltestelle braucht man","Die Wohnung kostet","Die Adresse ist","Der Vermieter möchte"],
          ["eine Anzeige gelesen","am Stadtrand","morgen Vormittag","vier Quadratmeter","fünf Minuten zu Fuß","580 Euro plus Nebenkosten","Gartenstraße 7","keine Haustiere"],
          [0,1,2,3,4,5,6,7])
      ]},
      {title:"1b · Fragen schreiben",questions:[
        text("___? · Die Wohnung kostet 580 Euro plus Nebenkosten.",["Wie viel kostet die Wohnung","Was kostet die Wohnung"]),
        text("___? · Die Heizkosten hängen vom Verbrauch ab.","Wie hoch sind die Heizkosten"),
        text("___? · Die Wohnung hat 38 Quadratmeter.","Wie viele Quadratmeter hat die Wohnung"),
        text("___? · Ja, die Bushaltestelle ist in der Nähe.","Gibt es in der Nähe eine Bushaltestelle"),
        text("___? · Ja, die Wohnung hat einen Balkon.","Hat die Wohnung einen Balkon"),
        text("___? · Morgen um zehn Uhr.","Wann ist der Besichtigungstermin"),
        text("___? · Nein, ein Haustier ist nicht erlaubt.","Darf ich ein Haustier halten")
      ]}
    ],
    B2:[{title:"2 · Wo stehen die Möbel?",questions:[
      text("Was ist links neben der Haustür?","die Garderobe",{figure:0}),
      text("Was steht unter dem Küchenfenster?","eine Kommode",{figure:0}),
      text("Was steht rechts neben der Wohnzimmertür?","das Sofa",{figure:0}),
      text("Was steht hinter dem Sessel?","die Stehlampe",{figure:0}),
      text("Was steht zwischen Sessel und Sofa?","der Couchtisch",{figure:0}),
      text("Was steht im Schlafzimmer an der linken Wand?","das Bett",{figure:0})
    ]}],
    B3:[{title:"3a · Welche Aussagen stimmen?",questions:[
      tf("Klaus klingelt, als Hanna ihr Abendessen kocht.",true),tf("Klaus möchte ein ganzes Stück Butter.",false),
      tf("Hanna hat genug Butter und kann Klaus ein Stück geben.",true),tf("Herr Bugl fährt für drei Tage nach Hamburg.",false),
      tf("Hanna soll morgens und abends der Katze Fressen geben.",true),tf("Die Katze frisst immer eine halbe Dose.",true),
      tf("Der Hausmeister möchte Hanna Blumen auf den Balkon stellen.",false),
      tf("Der Hausmeister beschwert sich über die Blätter von Hannas Blumen.",true)
    ]}],
    C1:[{title:"1a · Einkaufszettel",questions:[
      text("Kaffee",["1 Packung","eine Packung"]),text("Milch",["8 Liter","acht Liter"]),
      text("Brötchen",["25","25 Brötchen"]),text("Brezen",["12","12 Brezen"]),text("Baguette",["1","ein Baguette"]),
      text("Käse",["1 Pfund","ein Pfund"]),text("roher Schinken",["300 Gramm","300 g"]),
      text("gekochter Schinken",["300 Gramm","300 g"]),text("Äpfel",["1 Pfund","ein Pfund"]),
      text("Weintrauben",["500 Gramm","500 g"]),text("Joghurt",["10 Becher","zehn Becher"]),
      text("Orangensaft",["5 Flaschen","fünf Flaschen"])
    ]}],
    C2:[{title:"2a · Gastfreundschaft",questions:[
      text("Ich würde Sie gern etwas ___.","fragen"),text("Was möchten Sie ___?","wissen"),
      text("bei unseren ___ zum Grillen ___",["Nachbarn eingeladen","Nachbarn zum Grillen eingeladen"]),
      text("nicht alles ___ machen","richtig"),text("nicht zu ___ und nicht zu ___",["früh und spät","früh spät"]),
      text("eine ___ von bis zu 15 Minuten","Verspätung"),text("zu früh ist ___","unhöflich"),
      text("Was können wir denn ___?","schenken"),text("___ und eine Flasche ___",["Blumen und Wein","Blumen Wein"]),
      text("wir trinken keinen ___","Alkohol"),text("höflich ___","ablehnen"),
      text("Ein Grillabend ist nicht so ___.","förmlich"),text("zwischen 10 Uhr und ___.","11.30 Uhr")
    ]}],
    C3:[{title:"3a · Einladungen verstehen",questions:[
      match("Ordne Anlass und Ort zu.",
        ["Frau Noack und ihr Mann","Chrissy","Herr Huber","Hubert","Herr Kellmann","Frau Goerz"],
        ["Dienstjubiläum · Villa Antica","Spaghettiessen · zu Hause","Abiturball · Bräuhaus","50. Geburtstag · Biergarten","Projektabschluss · Restaurant Gourmet","Vortragsabend · Firma"],
        [0,1,2,3,4,5])
    ]}],
    D1:[{title:"1a · Richtig oder falsch?",questions:[
      tf("Max hat sich sehr verändert.",false),tf("Barbara ist seit einem Jahr verheiratet.",true),
      tf("Barbara ist schwanger.",true),tf("Barbara ist seit der Schule mit Peter zusammen.",false),
      tf("Barbara hat sich an der Uni in Peter verliebt.",true),tf("Max ist seit zwei Jahren verheiratet.",false),
      tf("Max und Barbara haben nicht zusammengepasst.",false),tf("Max lebt mit seiner neuen Freundin zusammen.",false),
      tf("Barbara und Isabel sehen sich nicht oft.",false),tf("Isabel verlobt sich in einem Monat.",false),
      tf("Florian hat mit 24 Jahren geheiratet.",true),tf("Florian ist jetzt geschieden.",true),
      tf("Die vier Freunde wollen sich nächsten Samstag im Club treffen.",true),tf("Barbara sagt Florian Bescheid.",false)
    ]}],
    D2:[
      {title:"2a · Bilder und Gefühle",questions:[
        match("Welche Nummer gehört zu welchem Bild?",
          ["Bild a","Bild b","Bild c","Bild d","Bild e","Bild f","Bild g","Bild h","Bild i","Bild j"],
          ["1","2","3","4","5","6","7","8","9","10"],[2,4,0,3,1,7,5,8,6,9],{figureRange:[0,10]})
      ]},
      {title:"2b · Fragen",questions:[
        text("Warum macht sich Elke Sorgen?",["Weil ihr Mann noch nicht da ist","Weil ihr Mann schon vor zwei Stunden kommen wollte"]),
        text("Warum ist Doris eifersüchtig?","Weil ihr Freund mit einem anderen Mädchen tanzt"),
        text("Warum ist Werner verzweifelt?","Weil seine Frau sich von ihm trennen will"),
        text("Warum ärgert sich Philippa?","Weil ihre Freundin zu spät kommt"),
        text("Wann ist Tina stolz?","Als sie ihr Diplom in Händen hält"),
        text("Warum ist Barbara glücklich?","Weil sie ihr Baby bekommen hat")
      ]}
    ],
    E1:[{title:"1a · Preise auswählen",questions:[
      choice("1 · 3 Liter Milch",["2,20 €","2,90 €"],1,{image:"assets/listening/figures/e1-rows/e1-q01.webp",page:46}),
      choice("2 · 3 Pfund Tomaten",["5,60 €","6,50 €"],0,{image:"assets/listening/figures/e1-rows/e1-q02.webp",page:46}),
      choice("3 · 200 Gramm Käse",["4,50 €","5,40 €"],0,{image:"assets/listening/figures/e1-rows/e1-q03.webp",page:46}),
      choice("4 · 250 Gramm Schinken",["5,50 €","5,70 €"],1,{image:"assets/listening/figures/e1-rows/e1-q04.webp",page:46}),
      choice("5 · zwei Pfund Trauben",["4,90 €","7,90 €"],0,{image:"assets/listening/figures/e1-rows/e1-q05.webp",page:46}),
      choice("6 · Bananen",["1,45 €","1,75 €"],0,{image:"assets/listening/figures/e1-rows/e1-q06.webp",page:47}),
      choice("7 · eine Packung Vanilleeis",["2,50 €","2,40 €"],1,{image:"assets/listening/figures/e1-rows/e1-q07.webp",page:47}),
      choice("8 · zwei Stück Butter",["2,20 €","4,20 €"],1,{image:"assets/listening/figures/e1-rows/e1-q08.webp",page:47}),
      choice("9 · sieben Äpfel",["1,80 €","1,80 €"],0,{image:"assets/listening/figures/e1-rows/e1-q09.webp",page:47}),
      choice("10 · zwei Kilo Rindfleisch",["53,80 €","35,80 €"],1,{image:"assets/listening/figures/e1-rows/e1-q10.webp",page:47}),
      choice("11 · ein halber Laib Brot",["4,15 €","4,15 €"],0,{image:"assets/listening/figures/e1-rows/e1-q11.webp",page:47}),
      choice("12 · ein Kilo Kaffee",["3,99 €","3,99 €"],1,{image:"assets/listening/figures/e1-rows/e1-q12.webp",page:47})
    ]}],
    E2:[
      {title:"2a · Das Verkaufsgespräch",questions:[
        text("___ dir das wirklich?","Gefällt"),text("zu ___ und nicht so ___",["dunkel und gemütlich","dunkel gemütlich"]),
        text("Es kostet ___ Euro.","1450"),text("höchstens 500 Euro ___.","ausgeben"),
        text("das ___ Sofa","weiße"),text("Ich habe doch einen ___.","Hund"),
        text("das braune Sofa sieht ___ aus","bequem"),text("der Stoff ist zu ___.","dünn"),
        text("zwei gemütliche ___","Sessel"),text("ein ___ nehmen","Schlafsofa"),
        text("nicht viel ___ als das andere","teurer"),text("Das ___ ich!","nehme")
      ]},
      {title:"2b · Antworte",questions:[
        text("Wie viel möchte Max ausgeben?","Max möchte höchstens 500 Euro ausgeben"),
        text("Wie viel kostet das braune Sofa?","Das braune Sofa kostet 420 Euro"),
        text("Gibt es Schlafsofas?",["Ja, es gibt Schlafsofas","Ja"]),
        text("Ist das Schlafsofa bequem?",["Ja, es ist bequem","Ja"])
      ]}
    ],
    E3:[{title:"3a · Was bestellen die Personen?",questions:[
      choice("Max trinkt …",["ein Weißbier","ein kleines Bier"],1),
      choice("Lena trinkt …",["ein Glas Weißwein","eine Apfelschorle"],0),
      choice("Lena isst …",["Fleisch mit Gemüse","Fischfilet mit Kartoffeln"],1),
      choice("Max isst …",["Schweinebraten","Rinderbraten"],1),
      choice("Herr Weber trinkt …",["Cappuccino","Milch"],0),
      choice("Herr Weber isst …",["Apfelkuchen mit Sahne","Apfelkuchen ohne Sahne"],1),
      choice("Frau Huber trinkt …",["Wasser mit Kohlensäure","stilles Wasser"],1),
      choice("Dazu möchte sie €",["französischen Rotwein","italienischen Rotwein"],1),
      choice("Sie isst …",["Gemüse und Kartoffeln","Gemüsesuppe und Steak"],1),
      choice("Sie möchte …",["kein Dessert","ein Dessert"],1)
    ]}],
    F1:[
      {title:"1a · Beim Arzt",questions:[
        text("Um wie viel Uhr hat Hanna den Termin?",["13.30 Uhr","13:30 Uhr","halb zwei"]),
        text("Was hat Hanna?",["eine starke Erkältung","Kopfschmerzen Halsschmerzen Husten Schnupfen"]),
        text("Soll Hanna ins Büro gehen?",["Nein, sie soll zu Hause bleiben","Nein"])
      ]},
      {title:"1b · Wähle",questions:[
        choice("Hanna möchte …",["einen Termin bei der Sprechstundenhilfe","einen Termin bei Doktor Saiter","einen Termin absagen"],1),
        choice("Wann ist ein Termin frei?",["am Vormittag","nach der Mittagspause","um halb eins"],1),
        choice("In der Praxis …",["hat sie keine Karte","muss sie warten","ist das Wartezimmer hinten rechts"],1),
        choice("Welche Beschwerde stimmt?",["starke Kopfschmerzen","Husten tut in der Brust weh","keine Halsschmerzen"],0),
        choice("Was macht der Arzt?",["Hanna hat Fieber","Der Hals ist schön","Er hört die Brust ab"],2),
        choice("Wie nimmt sie das Medikament?",["dreimal täglich","nur im Bett","erst in drei Tagen"],0)
      ]}
    ],
    F2:[
      {title:"2a · Bilder ordnen",questions:[
        match("Trage die Reihenfolge der Bilder ein.",["Bild a","Bild b","Bild c","Bild d","Bild e","Bild f","Bild g","Bild h"],
          ["1","2","3","4","5","6","7","8"],[2,4,6,0,7,1,3,5],{figureRange:[0,8]})
      ]},
      {title:"2b · Sportplan",questions:[
        text("Was macht Thomas Samstagmittag?","Er hat Schwimmtraining"),
        text("Was macht er Samstagnachmittag?","Er macht Karate"),
        text("Was macht er Samstagabend?","Er schaut ein Fußballspiel"),
        text("Was macht er Sonntagvormittag?","Er geht ins Fitness-Studio"),
        text("Was macht er Sonntagnachmittag?","Er geht zum Klettern"),
        text("Wann treffen sich Thomas und Hanna?","Am Samstagabend")
      ]}
    ],
    G1:[{title:"1a · Situationen den Bildern zuordnen",questions:[
      match("Welcher Dialog gehört zu welchem Bild?",["Bild a","Bild b","Bild c","Bild d","Bild e","Bild f"],
        ["Dialog 1","Dialog 2","Dialog 3","Dialog 4","Dialog 5","Dialog 6"],[2,0,3,4,1,5],{figureRange:[0,6]})
    ]}],
    G2:[{title:"2a · Bewerbungsgespräch",questions:[
      text("Nehmen Sie bitte ___.","Platz"),text("den Weg gut ___","gefunden"),text("bis zu Ihrer ___","Firma"),
      text("zu Ihrer ___","Ausbildung"),text("die ___ Reife","Mittlere"),text("als ___","Praktikantin"),
      text("das ___","Zeugnis"),text("eine ___ angeboten","Stelle"),text("Englisch, ___ und Spanisch","Französisch"),
      text("in der ___","Personalabteilung"),text("im ___ der Firma","Sekretariat"),
      text("Ihren ___ wechseln","Arbeitsplatz"),text("verschiedene ___","Gründe"),
      text("meine ___ benutzen","Sprachkenntnisse"),text("mehr ___ haben","Verantwortung"),
      text("zwei Monate ___","Probezeit"),text("Wann könnte ich ___?","anfangen"),
      text("Wenn die ___ es erlaubt","Kündigung"),text("mit meinem ___ besprechen","Chef"),
      text("Auf gute ___","Zusammenarbeit")
    ]}],
    G3:[{title:"3a · Nachrichten notieren",questions:[
      text("Nachricht 1: Wer?",["Müller, Firma Gebert","Müller"]),text("Warum?",["Fragen zur Bestellung","Fragen"]),
      text("Wann?",["möglichst schnell, vormittags","vormittags"]),text("Durchwahl","341"),
      text("Nachricht 2: Wer?","Anna Baumann"),text("Warum?","Sie braucht Unterlagen von Hanna"),text("Wann?","vor 10 Uhr"),text("Durchwahl","27"),
      text("Nachricht 3: Wer?","Hans Wellinger"),text("Warum?","Er ist krank"),text("Telefonnummer",["45 86 98","458698"]),
      text("Nachricht 4: Wer?","Horvath"),text("Wann soll Herr Huber anrufen?","sofort")
    ]}],
    G4:[{title:"4a · Termine eintragen",questions:[
      text("Montag 16 Uhr","Telefonkonferenz mit den Partnern in Japan"),
      text("Dienstag 11.30 Uhr","Chef"),text("Dienstag 13 Uhr","Mittagessen Imperial mit Herrn Floges"),
      text("Mittwoch 8–14 Uhr","Konferenzraum, Welco aus Frankreich"),text("Mittwoch 19 Uhr","Abendessen im chinesischen Restaurant"),
      text("Donnerstag 4.30 Uhr","Taxi"),text("Donnerstag 7.20 Uhr","Flug nach Mailand"),
      text("Samstag 18.10 Uhr","Landung in München"),text("Sonntag","Familientag")
    ]}],
    H1:[
      {title:"1a · Richtige Pläne",questions:[
        choice("Wegbeschreibung 1",["Bild A","Bild B","Bild C"],0,{figureRange:[0,3]}),
        choice("Wegbeschreibung 2",["Bild A","Bild B","Bild C"],1,{figureRange:[3,6]}),
        choice("Wegbeschreibung 3",["Bild A","Bild B","Bild C"],2,{figureRange:[6,9]}),
        choice("Wegbeschreibung 4",["Bild A","Bild B","Bild C"],1,{figureRange:[9,12]})
      ]},
      {title:"1b · Richtungswörter",questions:[
        text("die ___ Straße nach links","dritte"),text("an der nächsten ___","Kreuzung"),text("nach ___ Metern","200"),
        text("auf der ___ Seite","linken"),text("___ die Brücke","über"),text("500 Meter das Flussufer ___","entlang"),
        text("am Isarplatz ___ Sie die Straße","überqueren"),text("an der ___ nach links","Ampel"),
        text("bis zum ___","Kreisverkehr"),text("nach der ___","Unterführung"),text("eine ___","Kirche")
      ]}
    ],
    H2:[{title:"2a · Fahrkarten kaufen",questions:[
      multi("Dialog 1: Welche Aussagen stimmen?",
        ["hin und zurück","Hund mitnehmen","muss umsteigen","Freitag Platz reservieren","Freitag Fensterplatz","Gleis 10","102 Euro","nur bar"],
        [0,1,3,4,6]),
      multi("Dialog 2: Welche Aussagen stimmen?",
        ["einfache Fahrkarte nach Kiel","Schlafwagen","BahnCard 25","in Hannover umsteigen","halbe Stunde Aufenthalt","Sitzplatz reservieren","Gleis 22 in München","bar bezahlen"],
        [0,1,2,3,4,5,6,7])
    ]}],
    H3:[{title:"3a · Richtig oder falsch?",questions:[
      tf("Max bekommt vom 5. bis 30. August Urlaub.",false),tf("Lena bekommt in der zweiten Augusthälfte Urlaub.",true),
      tf("Max möchte eine längere Bergwanderung machen.",true),tf("Lena hat Angst vor Regen in den Bergen.",true),
      tf("Lena will in Italien in alte Städte wandern.",false),tf("Max denkt, Italien ist im August sehr voll.",true),
      tf("Max weiß, dass der Süden gut zum Wandern ist.",false),tf("Max will auf Korsika segeln.",false),
      tf("Das Feriendorf ist zu teuer.",false),tf("Beide Wochen sind Hauptsaison.",false),
      tf("Lena will ins Reisebüro gehen.",true),tf("Max träumt von einer Burgbesichtigung.",false),
      tf("Lena träumt vom Schnorcheln.",true),tf("Beide freuen sich auf Essen und Rotwein.",true)
    ]}],
    H4:[
      {title:"4a · Im Reisebüro",questions:[
        text("___ auf Korsika machen","Urlaub"),text("in der zweiten ___","Augusthälfte"),text("die Reise zu ___","buchen"),
        text("einen ___ Flug","günstigen"),text("nicht zu ___","teuer"),text("In welcher ___?","Region"),
        text("gut ___ sein","erreichbar"),text("Strand in der ___","Nähe"),text("ein ___ mit Flug","Pauschalangebot"),
        text("___ im Hotel","Doppelzimmer"),text("und ___","Halbpension"),text("ein ___","Schwimmbad"),
        text("in einem ___","Feriendorf"),text("ein bisschen ___","ruhiger"),text("Der ___ kostet 490 Euro","Bungalow"),
        text("sich selbst ___","versorgen"),text("Er hat ___","Meeresblick"),text("Wie ___ ist es?","weit"),
        text("auch ___?","Einkaufsmöglichkeiten"),text("eine ___","Busverbindung"),text("ein eigener ___","Strand"),
        text("Badebucht mit ___","Felsen"),text("zum ___","Wandern"),text("___ werden angeboten","Ausflüge"),
        text("am ___ August","15."),text("von Innsbruck oft ___","günstiger"),text("um ___ Uhr morgens","6"),text("nur ___ Euro","125")
      ]},
      {title:"4b · Satzteile",questions:[
        match("Verbinde.",["am 18. Juli","günstiger Flug","Rückflug","auf Korsika","Hotel am Strand","Hotel sollte","Hotel mit","eine Woche","auch fliegen","im Hotel"],
          ["mit Familie fliegen","für zwei Erwachsene und Kinder","am 2. August buchen","Auto mieten","zwei Zimmer reservieren","Halbpension anbieten","großem Swimmingpool","Doppelzimmerpreis","von München","Kinderprogramm"],
          [0,1,2,3,4,5,6,7,8,9])
      ]}
    ],
    I1:[
      {title:"1a · Fernsehsendungen",questions:[
        match("Ordne die Beschreibung der Sendung zu.",["1","2","3","4","5","6","7","8"],
          ["Wer wird Millionär?","Wohin führt der Euro?","Die Tote auf dem Marktplatz","Orkan der Liebe","Die Könige der Meere","Eine Hochzeitsreise zu dritt","Die Geliebte des Generals","Wetterwelten"],
          [0,1,2,3,4,5,6,7])
      ]},
      {title:"1b · Wer hat was gesehen?",questions:[
        tf("Hanna hat erst Wer wird Millionär? gesehen.",false),tf("Hanna hat das historische Drama gesehen.",false),
        tf("Hanna hat den Tierfilm und später die Klimadokumentation gesehen.",true),
        tf("Herr Huber hat die Dokumentation über Meere gesehen.",false),
        tf("Herr Huber hat die Kriminalgeschichte gesehen.",true),tf("Herr Huber hat die wissenschaftliche Sendung gesehen.",false)
      ]}
    ],
    I2:[{title:"2a · Wetterberichte",questions:[
      multi("Bericht 1",["sonnig","bewölkt","regnerisch","neblig","nachts 10 Grad","tagsüber 18–20 Grad"],[0,1,4,5]),
      multi("Bericht 2",["wolkig","gewittrig","Sturm","trocken","Regenschauer","nachts 12 Grad","tagsüber 16–18 Grad"],[1,2,4,5,6]),
      multi("Bericht 3",["Schnee","wolkig","sonnig","nachts -5 Grad","tagsüber 0 Grad"],[0,1,3,4]),
      multi("Bericht 4",["trocken","Hagel","gewittrig","klarer Himmel","nachts 21 Grad","tagsüber 35 Grad"],[0,1,2,3,4,5]),
      multi("Bericht 5",["Sturm","Hochwasser","Dauersonne","kühl","heiß"],[0,1,3]),
      multi("Bericht 6",["bewölkt","Wolken und Sonne","Nebel","windig","nachts 0 Grad","tagsüber 10–12 Grad"],[0,1,2,3,4,5]),
      multi("Bericht 7",["Eis","trocken","Schnee","nachts -20 bis -28 Grad","tagsüber -15 Grad"],[0,1,3,4])
    ]}],
    I3:[{title:"3a · Verkehrsfunk",questions:[
      multi("Meldung 1",["Demonstrationen in München","Autos sind verboten","Öffentliche Verkehrsmittel fahren nicht"],[0]),
      multi("Meldung 2",["Stau bei Salzburg","Baustelle Irschenberg–Weyarn","6 km Stau wegen Baustelle"],[1,2]),
      multi("Meldung 3",["Ferien gehen zu Ende","Rückreiseverkehr aus dem Süden","Reise in den Süden planen"],[0,1]),
      multi("Meldung 4",["Autoreifen","vorsichtig zwischen Gollhofen und Marktbreit","Reifenteile"],[1,2]),
      multi("Meldung 5",["Falschfahrer auf A9","Geister in Raststätte","langsam fahren, nicht überholen"],[0,2]),
      multi("Meldung 6",["Unfall bei Haag","linke Spur blockiert","Lkw räumt selbst auf"],[0,1]),
      multi("Meldung 7",["eine Stunde im Tunnel","10 km Stau","eine Stunde Verzögerung"],[1,2]),
      multi("Meldung 8",["Bahn Rosenheim–Prien unterbrochen","Bäume auf Gleisen","heute Nacht viel Schnee"],[0,1]),
      multi("Meldung 9",["schnell fahren","weniger als zehn Meter Sicht","gute Sicht"],[1]),
      multi("Meldung 10",["viele Staus","Verkehr ruhig","gute Fahrt"],[1,2])
    ]}]
  };
})();
