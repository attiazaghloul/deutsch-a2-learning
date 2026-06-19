/* Interactive answer sheets for Hören & Sprechen A1, transcribed from exercise and solution pages. */
(function () {
  const text = (prompt, answer, extra={}) => ({type:"text", prompt, answer:Array.isArray(answer)?answer:[answer], ...extra});
  const choice = (prompt, options, answer, extra={}) => ({type:"choice", prompt, options, answer, ...extra});
  const tf = (prompt, answer) => choice(prompt,["richtig","falsch"],answer?0:1);
  const match = (prompt, left, options, answer, extra={}) => ({type:"match",prompt,left,options,answer,...extra});

  window.HOEREN_A1_INTERACTIVE = {
    // ===================== A · Begrüßung, Kontaktaufnahme, Herkunft =====================
    A1: [
      {title:"1c · Begrüßung ergänzen", tracks:[4], figureRange:[0,1], questions:[
        text("___ , Stefanie!", ["Guten Morgen","Guten Morgen,"]),
        text("___ , Herr Schönfeld!", ["Guten Tag","Guten Tag,"]),
        text("___ , Frau Fuchs!", ["Guten Abend","Guten Abend,"]),
        text("___ , Herr Lüneberg!", ["Auf Wiedersehen","Auf Wiedersehen,"]),
        text("___ , bis morgen!", ["Tschüs","Tschüss","Tschüs,"]),
        text("___ , Leonardo!", ["Guten Morgen","Guten Morgen,"]),
        text("___ , Frau Schäfer!", ["Guten Tag","Guten Tag,"]),
        text("___ , Bettina!", ["Hallo","Hallo,"]),
        text("___ , Herr Gürsoy!", ["Guten Abend","Guten Abend,"]),
        text("___ , Frau Reimann!", ["Grüß Gott","Grüß Gott,"])
      ]}
    ],
    A2: [
      {title:"2b · Auf die Begrüßung antworten", tracks:[6], figureRange:[0,1], questions:[
        text("Guten Morgen, wie geht es Ihnen?", ["Danke gut!","Danke, gut!","Danke gut","gut"]),
        text("Guten Tag, Herr Maier!", ["Guten Tag!","Guten Tag"]),
        text("Guten Abend, Frau Billina!", ["Guten Abend!","Guten Abend"]),
        text("Auf Wiedersehen, Herr Fritz!", ["Auf Wiedersehen!","Auf Wiedersehen"]),
        text("Tschüs! Bis morgen!", ["Tschüs!","Tschüs","Tschüss"]),
        text("Guten Morgen, August!", ["Guten Morgen!","Guten Morgen"]),
        text("Guten Tag, Frau Beer!", ["Guten Tag!","Guten Tag"]),
        text("Hallo, Bettina!", ["Hallo!","Hallo"]),
        text("Guten Abend, Herr Bayer!", ["Guten Abend!","Guten Abend"]),
        text("Grüß Gott, Frau Reimann!", ["Grüß Gott!","Grüß Gott"]),
        text("Servus, Franz!", ["Servus!","Servus"])
      ]}
    ],
    A4: [
      {title:"4b · Richtig oder falsch?", tracks:[10], figureRange:[0,1], questions:[
        tf("Ana Maria kommt aus Kolumbien.", true),
        tf("Reiko kommt aus Japan.", true),
        tf("Nicole kommt aus Österreich.", false),
        tf("Ahmed kommt aus der Türkei.", true),
        tf("Margareta kommt aus der Schweiz.", false),
        tf("Fatima kommt aus Ägypten.", true),
        tf("Daan und Mathis kommen aus Polen.", false),
        tf("Sara und Jasmin kommen aus Tansania.", true),
        tf("Nadine kommt aus Frankreich.", false),
        tf("Mark kommt aus den USA.", true)
      ]}
    ],
    A5: [
      {title:"5 · Was gehört zusammen?", tracks:[11], figureRange:[0,1], questions:[
        match("Ordne jeder Person die richtige Information zu.",
          ["Frau Hannemann","Herr Schmidt","Thomas","Frau Meier","Paul","Familie Steinhäuser","Katja","Lisa"],
          ["kommt aus Zürich","arbeitet in Hamburg","ist Deutsche","ist arbeitslos","wohnt in München","geht noch zur Schule","ist verheiratet","ist zehn Jahre alt"],
          [1,3,7,6,4,0,5,2])
      ]}
    ],
    A6: [
      {title:"6 · Interview: Was ist richtig?", tracks:[12], figureRange:[0,1], questions:[
        choice("Herr Meier kommt aus …", ["Ungarn","den USA","Russland"], 2),
        choice("Er wohnt seit … in Deutschland.", ["Juni 1999","Juli 1989","Januar 1998"], 0),
        choice("Sein Vorname ist …", ["Heinrich","Erich","Ludwig"], 0),
        choice("Seine Frau heißt …", ["Sonja","Anja","Tanja"], 2),
        choice("Familie Meier hat … Kinder.", ["zwei","drei","keine"], 0),
        choice("Die Kinder heißen …", ["Martin und Julia","Martina und Julian","Marina und Julius"], 0),
        choice("Herr Meier spielt gerne …", ["Tennis","Fußball","Volleyball"], 1)
      ]}
    ],
    A8: [
      {title:"8 · Lisa und Paul erzählen von sich", tracks:[16], questions:[
        text("Hat Lisa ein Auto oder ein Fahrrad? Lisa hat ein ___", ["Fahrrad"], {image:"assets/listening/a1/figures/a8/a8-p16-bike.webp",page:16}),
        text("Wohnen Lisa und Paul in München oder in Mannheim? Lisa und Paul wohnen in ___", ["München"], {image:"assets/listening/a1/figures/a8/a8-p16-city.webp",page:16}),
        text("Hat Paul einen Hund oder eine Katze? Paul hat eine ___", ["Katze"], {image:"assets/listening/a1/figures/a8/a8-p16-cat.webp",page:16}),
        text("Trinkt Lisa lieber Tee oder Kaffee? Lisa trinkt lieber ___", ["Tee"], {image:"assets/listening/a1/figures/a8/a8-p16-tea.webp",page:16}),
        text("Spielen Lisa und Paul lieber Tennis oder Tischtennis? Sie spielen lieber ___", ["Tischtennis"], {image:"assets/listening/a1/figures/a8/a8-p17-pingpong.webp",page:17}),
        text("Fahren Lisa und Paul im Urlaub ans Meer oder in die Berge? Lisa und Paul fahren ___", ["in die Berge"], {image:"assets/listening/a1/figures/a8/a8-p17-mountains.webp",page:17}),
        text("Sprechen Lisa und Paul Deutsch oder Englisch? Lisa und Paul sprechen ___", ["Deutsch und Englisch","Deutsch und Englisch."], {image:"assets/listening/a1/figures/a8/a8-p17-talk.webp",page:17}),
        text("Gehen Lisa und Paul lieber ins Kino oder ins Theater? Sie gehen lieber ins ___", ["Kino"], {image:"assets/listening/a1/figures/a8/a8-p17-kino.webp",page:17})
      ]}
    ],

    // ===================== B · Alphabet, Zahlen, Datum, Uhrzeit, Wochentage =====================
    B1: [
      {title:"9b · Welche Buchstaben hören Sie?", tracks:[18], figureRange:[0,1], questions:[
        text("1.", ["A B C","ABC"]),
        text("2.", ["H I J","HIJ"]),
        text("3.", ["C D E","CDE"]),
        text("4.", ["X Y Z","XYZ"]),
        text("5.", ["D E F","DEF"]),
        text("6.", ["T U V","TUV"]),
        text("7.", ["E F G","EFG"]),
        text("8.", ["I J K","IJK"]),
        text("9.", ["F G H","FGH"]),
        text("10.", ["U V W","UVW"]),
        text("11.", ["M N O","MNO"]),
        text("12.", ["K L M","KLM"]),
        text("13.", ["P Q R","PQR"]),
        text("14.", ["J K L","JKL"]),
        text("15.", ["R S T","RST"])
      ]}
    ],
    B2: [
      {title:"10a · Zahlen bis 10", tracks:[19], figureRange:[0,1], questions:[
        text("2 =", ["zwei"]),
        text("5 =", ["fünf"]),
        text("3 =", ["drei"]),
        text("6 =", ["sechs"]),
        text("7 =", ["sieben"]),
        text("9 =", ["neun"]),
        text("4 =", ["vier"]),
        text("1 =", ["eins"]),
        text("8 =", ["acht"]),
        text("10 =", ["zehn"])
      ]}
    ],
    B3: [
      {title:"11a · Welche Zahl hören Sie?", tracks:[21], figureRange:[0,1], questions:[
        choice("1.", ["vierzehn = 14","vierzig = 40"], 1),
        choice("2.", ["zwanzig = 20","zwölf = 12"], 1),
        choice("3.", ["fünfzehn = 15","fünfzig = 50"], 0),
        choice("4.", ["dreiundvierzig = 43","vierunddreißig = 34"], 1),
        choice("5.", ["siebenundzwanzig = 27","zweiundsiebzig = 72"], 0),
        choice("6.", ["fünfundneunzig = 95","neunundfünfzig = 59"], 1),
        choice("7.", ["dreizehn = 13","dreißig = 30"], 0),
        choice("8.", ["sechsundsechzig = 66","sechsundsiebzig = 76"], 0),
        choice("9.", ["sechzehn = 16","sechzig = 60"], 0),
        choice("10.", ["achtundachtzig = 88","achtunddreißig = 38"], 0),
        choice("11.", ["vierzig = 40","vierzehn = 14"], 1),
        choice("12.", ["sechsundachtzig = 86","achtundsechzig = 68"], 0),
        choice("13.", ["elf = 11","zwölf = 12"], 0),
        choice("14.", ["vierundvierzig = 44","vierzehn = 14"], 0),
        choice("15.", ["siebenundachtzig = 87","achtundsiebzig = 78"], 1),
        choice("16.", ["neunundneunzig = 99","neunundzwanzig = 29"], 1),
        choice("17.", ["neunzig = 90","neunzehn = 19"], 0),
        choice("18.", ["einhundert = 100","hundertundeins = 101"], 0)
      ]}
    ],
    B4: [
      {title:"12a · Zahlen bis 1000", tracks:[23], figureRange:[0,1], questions:[
        text("1.", ["101","(ein)hunderteins","hunderteins"]),
        text("2.", ["220","zweihundertzwanzig"]),
        text("3.", ["303","dreihundertdrei"]),
        text("4.", ["454","vierhundertvierundfünfzig"]),
        text("5.", ["162","(ein)hundertzweiundsechzig","hundertzweiundsechzig"]),
        text("6.", ["895","achthundertfünfundneunzig"]),
        text("7.", ["328","dreihundertachtundzwanzig"]),
        text("8.", ["670","sechshundertsiebzig"]),
        text("9.", ["714","siebenhundertvierzehn"]),
        text("10.", ["989","neunhundertneunundachtzig"]),
        text("11.", ["187","(ein)hundertsiebenundachtzig","hundertsiebenundachtzig"]),
        text("12.", ["1000","(ein)tausend","tausend"]),
        text("13.", ["545","fünfhundertfünfundvierzig"]),
        text("14.", ["540","fünfhundertvierzig"]),
        text("15.", ["833","achthundertdreiunddreißig"]),
        text("16.", ["547","fünfhundertsiebenundvierzig"]),
        text("17.", ["111","(ein)hunderteins","hunderteins"]),
        text("18.", ["232","zweihundertzweiunddreißig"]),
        text("19.", ["767","siebenhundertsiebenundsechzig"])
      ]}
    ],
    B5: [
      {title:"13a · Wie spät ist es?", tracks:[25], figureRange:[0,1], questions:[
        text("1. Es ist ___ Uhr.", ["10","zehn"]),
        text("2. Es ist ___ Uhr.", ["13.30","13:30","halb zwei","Es ist 13.30 Uhr","Es ist halb zwei"]),
        text("3. Es ist ___ Uhr.", ["20.15","20:15","Viertel nach acht","Es ist 20.15 Uhr","Es ist Viertel nach acht"]),
        text("4. Es ist ___ Uhr.", ["17.45","17:45","Viertel vor sechs","Es ist 17.45 Uhr","Es ist Viertel vor sechs"]),
        text("5. Es ist ___ Uhr.", ["17.30","17:30","halb sechs","Es ist 17.30 Uhr","Es ist halb sechs"]),
        text("6. Es ist ___ Uhr.", ["05.30","5.30","5:30","halb sechs","Es ist 05.30 Uhr","Es ist halb sechs"]),
        text("7. Es ist ___ Uhr.", ["14","14 Uhr","zwei Uhr","Es ist 14 Uhr","Es ist zwei Uhr"]),
        text("8. Es ist ___ Uhr.", ["18.55","18:55","fünf vor sieben","Es ist 18.55 Uhr","Es ist fünf vor sieben"])
      ]},
      {title:"13b · Uhrzeit im Satz", tracks:[26], questions:[
        text("Das Geschäft öffnet um ___ Uhr.", ["9","neun"]),
        text("Die Mittagspause dauert bis ___ Uhr.", ["13.15","13:15"]),
        text("Der Film fängt um ___ an.", ["halb neun","20.30","20:30"]),
        text("Es ist ___ Uhr, Viertel vor vier.", ["15.45","15:45"]),
        text("Um ___ Uhr (nach Hause kommen).", ["18.30","18:30"]),
        text("Um ___ (morgens aufstehen).", ["halb sieben","6.30","6:30"]),
        text("Ja, um ___ Uhr (Treffen).", ["15"]),
        text("Der nächste Bus geht um ___ .", ["fünf vor acht","7.55","19.55"])
      ]}
    ],
    B6: [
      {title:"14a · Welches Datum ist heute?", tracks:[27], figureRange:[0,1], questions:[
        text("1. Heute ist der ___", ["11. Oktober","11.10"]),
        text("2. Heute haben wir den ___", ["8. März","08.03"]),
        text("3. Heute ist der ___", ["17. August","17.08"]),
        text("4. Heute haben wir den ___", ["15. Juni","15.06"]),
        text("5. Heute ist der ___", ["31. Dezember","31.12"]),
        text("6. Heute haben wir den ___", ["28. November","28.11"]),
        text("7. Heute ist der ___", ["1. Mai","01.05"]),
        text("8. Heute haben wir den ___", ["3. Februar","03.02"]),
        text("9. Heute ist der ___", ["26. Januar","26.01"]),
        text("10. Heute haben wir den ___", ["7. April","07.04"]),
        text("11. Heute ist der ___", ["14. Juli","14.07"]),
        text("12. Heute haben wir den ___", ["30. September","30.09"])
      ]},
      {title:"14c · Geburtstage", tracks:[29], questions:[
        text("2. Stefans Vater ist am ___ geboren.", ["22. März 1932","22.03.1932"]),
        text("3. Stefans Schwester hat am ___ Geburtstag.", ["17. Juni 1954","17.06.1954"]),
        text("4. Stefans Sohn ist am ___ geboren.", ["8. Juli 1979","08.07.1979"]),
        text("5. Stefans Nachbar hat am ___ Geburtstag.", ["9. November 1987","09.11.1987"]),
        text("6. Seine Tochter ist am ___ geboren.", ["10. Dezember 2007","10.12.2007"]),
        text("7. Ihr Bruder hat am ___ Geburtstag.", ["4. Mai 2009","04.05.2009"])
      ]}
    ],
    B7: [
      {title:"15 · Wochentage", tracks:[30], figureRange:[0,1], questions:[
        text("1. Familie Schmidt fährt am ___ in die Berge.", ["Wochenende"]),
        text("2. Am ___ gehen sie wandern und am ___ ins Schwimmbad.", ["Samstag","Sonntag"]),
        text("3. Am ___ muss Frau Schmidt wieder ins Büro.", ["Montag"]),
        text("4. Stefan geht am ___ zum Arzt.", ["Dienstag"]),
        text("5. Herr Rosenthal fährt am ___ zu einer Konferenz.", ["Mittwoch"]),
        text("6. Rebecca geht am ___ zum Friseur.", ["Donnerstag"]),
        text("7. Peter und Klaus fahren am ___ nach Stuttgart.", ["Freitag"])
      ]}
    ],

    // ===================== C · Ortsangaben, Wegbeschreibung =====================
    C1: [
      {title:"16a · Wo liegen diese Orte?", tracks:[31], figureRange:[0,1], questions:[
        text("Wo liegt Wien? Wien liegt ___", ["in Österreich"]),
        text("Wo liegt Zürich? Zürich liegt ___", ["in der Schweiz"]),
        text("Liegt Berlin in Italien? Nein, Berlin liegt nicht in Italien, Berlin liegt ___", ["in Deutschland"]),
        text("Liegt Moskau in der Türkei? Nein, Moskau liegt nicht in der Türkei, Moskau liegt ___", ["in Russland"]),
        text("Wo liegt Spanien? Spanien liegt ___", ["in Europa"]),
        text("Wo liegt Norwegen? Norwegen liegt ___", ["in Skandinavien"]),
        text("Liegt Hamburg in Frankreich? Nein, Hamburg liegt nicht in Frankreich, Hamburg liegt ___", ["in Deutschland"])
      ]}
    ],
    C2: [
      {title:"17a · Was hören Sie? Kreuzen Sie an.", tracks:[33], figureRange:[0,1], questions:[
        choice("1.", ["Wien","Berlin"], 0),
        choice("2.", ["Heidelberg","Nürnberg"], 1),
        choice("3.", ["Bern","Bonn"], 0),
        choice("4.", ["Salzburg","Hamburg"], 1),
        choice("5.", ["Sachsen","Niedersachsen"], 0),
        choice("6.", ["Schleswig-Holstein","Sachsen-Anhalt"], 0),
        choice("7.", ["die Elbe","die Oder"], 1),
        choice("8.", ["der Rhein","der Main"], 0),
        choice("9.", ["Dresden","Bremen"], 1),
        choice("10.", ["Brandenburg","Magdeburg"], 0),
        choice("11.", ["Innsbruck","Saarbrücken"], 1)
      ]}
    ],
    C3: [
      {title:"18a · Wegbeschreibungen ergänzen", tracks:[35], figureRange:[0,6], questions:[
        text("2. Gehen Sie ___ und dann ___ . Da ist die Post.", ["geradeaus","links"]),
        text("3. ___ , wo ist (bitte) die Firma Müller?", ["Entschuldigung"]),
        text("3. Gehen Sie ___ und dann ___ .", ["links","geradeaus"]),
        text("3. ___ sehr.", ["Bitte"]),
        text("4. der ___ Garten", ["Englische"]),
        text("4. Gehen Sie ___, dann ___ und dann ___ .", ["geradeaus","links","rechts"]),
        text("4. ___!", ["Vielen Dank"]),
        text("5. wo ist ___ die nächste Tankstelle?", ["bitte"]),
        text("5. ___ Sie geradeaus und an der ___ links, und dann ___ rechts.", ["Fahren","Ampel","wieder"]),
        text("5. ___ ist die Tankstelle.", ["Dort"]),
        text("6. wie ___ ich (bitte) zum Einwohnermeldeamt?", ["komme"]),
        text("6. Fahren Sie ___ Station mit dem ___ .", ["eine","Bus"]),
        text("6. Das Einwohnermeldeamt ist ___ bei der Haltestelle.", ["direkt"]),
        text("6. Bitte, ___ ___ .", ["kein","Problem"])
      ]}
    ],

    // ===================== D · Essen und Trinken =====================
    D1: [
      {title:"19a · Dialog im Café", tracks:[37], figureRange:[0,1], questions:[
        text("ich möchte bitte ___ Kaffee.", ["einen"]),
        text("Groß oder ___ ?", ["klein"]),
        text("Mit Milch und Zucker? Nein, bitte ___ .", ["schwarz"]),
        text("Hier, ___ .", ["bitte"]),
        text("___ schön.", ["Danke"]),
        text("___, bitte.", ["Zahlen"]),
        text("Ein Kaffee, das macht ___ Euro.", ["2,60","2.60"]),
        text("Hier, bitte, ___ so.", ["stimmt"]),
        text("Vielen Dank, auf ___ .", ["Wiedersehen"])
      ]}
    ],
    D2: [
      {title:"20a · Dialog im Restaurant", tracks:[39], figureRange:[0,1], questions:[
        text("Haben Sie einen Tisch ___ zwei Personen?", ["für"]),
        text("Was möchten ___ bestellen?", ["Sie"]),
        text("Ich ___ bitte ein Bier …", ["möchte"]),
        text("… und ___ Pizza mit Salami.", ["eine"]),
        text("___ bitte. (Wein)", ["Rotwein"]),
        text("Und der ___ . Guten Appetit.", ["Salat"]),
        text("___ . (Antwort)", ["Danke"]),
        text("Danke, es war ___ ___ .", ["sehr","gut"]),
        text("Die Pizza ___ prima!", ["war"]),
        text("Wir ___ dann zahlen, bitte.", ["möchten"]),
        text("Das macht ___ € .", ["24,60","24.60"]),
        text("Hier sind ___ € .", ["27"]),
        text("Das stimmt ___ .", ["so"]),
        text("Danke ___ , Auf Wiedersehen.", ["schön"]),
        text("___ . (Lisa)", ["Tschüs","Tschüss"])
      ]}
    ],

    // ===================== E · Familie =====================
    E1: [
      {title:"22a · Dialoge: Familie", tracks:[42], figureRange:[0,1], questions:[
        text("2. Haben Sie auch ___ ? — ___, ich habe ___ Kinder.", ["Kinder","Nein","keine"]),
        text("3. Ich habe zwei Kinder, ___ ___ und eine Tochter.", ["einen","Sohn"]),
        text("4. Ich habe ___ einen Sohn und ___ ___ .", ["auch","eine","Tochter"]),
        text("5. Hast du einen Bruder oder eine ___ ?", ["Schwester"]),
        text("5. Ja, ich habe ___ ___ und ___ Schwestern.", ["einen","Bruder","zwei"]),
        text("5. … und eine ___ Schwester.", ["kleine"]),
        text("6. Wie alt ___ Sie? — Ich bin ___ Jahre alt.", ["sind","32"]),
        text("6. Wie ___ sind Sie? — Ich bin 48 ___ .", ["alt","Jahre"]),
        text("7. Wie alt ___ du? — Ich ___ 12 Jahre alt …", ["bist","bin"]),
        text("7. … und ich habe zwei ___ ___ .", ["Geschwister","Geschwister."]),
        text("7. Woher kommen deine ___ ?", ["Eltern"]),
        text("7. Mein Vater und meine Mutter ___ aus Istanbul.", ["kommen"])
      ]}
    ],
    E2: [
      {title:"23a · Familienstand", tracks:[44], figureRange:[0,1], questions:[
        text("2. ___, ich bin noch mit Irene ___ .", ["Ja","verlobt"]),
        text("3. ___, ich ___ ___ mehr verheiratet.", ["Nein","bin","nicht"]),
        text("4. Nein, ich bin ___ verheiratet. Ich bin ___ .", ["nicht","ledig"]),
        text("5. ___ ___ verheiratet? — … mein Mann ___ leider schon gestorben.", ["Sind","Sie","ist"]),
        text("6. Meine Frau ___ ___ England.", ["kommt","aus"]),
        text("7. ___ ___ verheiratet. ___ ___ kommt aus Südamerika.", ["Sind","Sie","Mein","Mann"])
      ]}
    ],
    E3: [
      {title:"24a · Informationen zur Person", tracks:[46], figureRange:[0,1], questions:[
        text("1. Theo: ___ Jahre alt, ___ , habe ___ Kinder.", ["36","verheiratet","keine"]),
        text("1. Ich ___ aus Griechenland … Ich bin ___ … und ___ in einem Restaurant.", ["komme","Koch","arbeite"]),
        text("2. Jasmin: mein ___ ist Jasmin. ___ Jahre alt, ___ .", ["Name","25","ledig"]),
        text("2. Ich bin ___ . Meine ___ wohnt in Teheran.", ["Studentin","Familie"]),
        text("3. Guten ___ , ich heiße Katharina Müller.", ["Morgen"]),
        text("3. bin ___ und habe ___ Kinder.", ["verheiratet","zwei"]),
        text("3. Mein Sohn ist ___ Jahre alt und ___ Tochter ist ___ Jahre alt.", ["drei","meine","fünf"]),
        text("3. Mein Mann ist Polizist ___ und …", ["von Beruf"]),
        text("3. Wir haben einen ___ und wohnen in Düsseldorf.", ["Hund"])
      ]}
    ],

    // ===================== F · Arbeit und Beruf =====================
    F1: [
      {title:"25 · Wer sagt was?", tracks:[48], figureRange:[0,7], questions:[
        match("Ordne jedem Beruf den richtigen Satz zu.",
          ["Der Taxifahrer","Die Lehrerin","Die Kellnerin","Der Friseur","Die Verkäuferin","Der Kunde","Die Ärztin"],
          ["Heute fahren viele Autos!","Das Buch kostet 8,95 Euro.","Möchten Sie die Haare kurz?","Sie müssen viel schlafen.","Was möchten Sie trinken?","Haben Sie die Übung gemacht?","Haben Sie frisches Brot?"],
          [0,5,4,2,1,6,3])
      ]}
    ],
    F2: [
      {title:"26 · Berufe zuordnen", tracks:[49], figureRange:[0,9], questions:[
        match("Was sind diese Leute von Beruf? Ordne die Bilder (a–i) zu.",
          ["Ahmed – Taxifahrer","Franz – Bauer","Nadine – Friseurin","Claudia – Hausfrau","Stefanie – Ärztin","Birgit – Lehrerin","Patrick – Mechaniker","Christian – Maurer","Jasmin – Studentin"],
          ["a","b","c","d","e","f","g","h","i"],
          [5,0,1,3,8,6,2,7,4])
      ]}
    ],

    // ===================== G · Freizeit =====================
    G1: [
      {title:"27 · Was machen Lisa und Paul?", tracks:[50], figureRange:[0,1], questions:[
        text("2. Paul ___ . → Bild", ["schläft"]),
        text("3. Lisa ___ . → Bild", ["trinkt Tee"]),
        text("4. Paul spielt ___ . → Bild", ["Trompete"]),
        text("5. Lisa ___ . → Bild", ["fotografiert"]),
        text("6. Paul schenkt Lisa ___ . → Bild", ["Blumen"]),
        text("7. Lisa ___ . → Bild", ["schwimmt"]),
        text("8. Paul ___ . → Bild", ["liest"]),
        text("9. Lisa und Paul ___ . → Bild", ["essen Eis"]),
        text("10. Paul fährt ___ . → Bild", ["Fahrrad"]),
        text("11. Lisa ___ . → Bild", ["telefoniert"]),
        text("12. Paul und Lisa ___ . → Bild", ["tanzen"]),
        match("Welches Bild passt? (a–l)",
          ["Lisa singt","Paul schläft","Lisa trinkt Tee","Paul spielt Trompete","Lisa fotografiert","Paul schenkt Lisa Blumen","Lisa schwimmt","Paul liest","Lisa und Paul essen Eis","Paul fährt Fahrrad","Lisa telefoniert","Paul und Lisa tanzen"],
          ["a","b","c","d","e","f","g","h","i","j","k","l"],
          [0,4,5,9,8,10,11,6,2,1,3,7])
      ]}
    ],
    G3: [
      {title:"29 · Was machst du gerne?", tracks:[53], figureRange:[0,1], questions:[
        text("Paul spielt gerne ___", ["Trompete"]),
        text("Paul spielt gerne ___", ["Fußball"]),
        text("Lisa ___ gerne.", ["fotografiert"]),
        text("Lisa und Paul gehen gerne ins ___", ["Kino"]),
        text("Lisa geht gerne ins ___", ["Theater"]),
        text("Lisa trinkt gerne ___", ["Tee"]),
        text("Paul hört gerne ___", ["Musik"]),
        text("Lisa und Paul ___ gerne.", ["tanzen"])
      ]}
    ],
    G2: [
      {title:"28a · Anrufbeantworter", tracks:[51], figureRange:[0,1], questions:[
        text("Lisa: Meine Telefonnummer ist ___", ["288012"]),
        text("Paul: Ich gehe ___ zum Fußballspielen.", ["heute"]),
        text("Paul: ___ du mit?", ["Kommst"]),
        text("Paul: Du kannst mich ___ .", ["anrufen"]),
        text("Paul: Mobilnummer 0177 1234 ___", ["5670","12345670"]),
        text("Praxis Dr. Schlott: Wir haben einen ___ für Sie.", ["Termin"]),
        text("Praxis: Bitte rufen Sie heute zwischen ___ und ___ Uhr zurück.", ["15.00","18.00","15:00","18:00"]),
        text("Praxis: Unsere Nummer ist 01230 ___", ["657623"]),
        text("Praxis: Auf ___ .", ["Wiederhören"])
      ]}
    ],
    G4: [
      {title:"30 · Ich war … / Ich bin gewesen …", tracks:[54], figureRange:[0,1], questions:[
        text("1. Ich ___ gestern im ___ .", ["war","Kino"]),
        text("2. Ich ___ gestern zu Hause. Ich war ___ .", ["war","krank"]),
        text("3. ___ waren gestern im ___ und haben Pizza gegessen.", ["Wir","Restaurant"]),
        text("4. Gestern ___ ich mit Lisa in der Diskothek gewesen.", ["bin"]),
        text("4. Wir ___ viel getanzt.", ["haben"]),
        text("5. ___ Sie gestern beim Zahnarzt gewesen?", ["Sind"]),
        text("5. Nein, ich bin beim Friseur ___ .", ["gewesen"]),
        text("6. Wo ___ unser Kollege gestern?", ["war"]),
        text("6. Er ___ gestern in Berlin gewesen.", ["ist"])
      ]}
    ],

    // ===================== H · Einkaufen =====================
    H1: [
      {title:"31 · Im Supermarkt", tracks:[55], figureRange:[0,2], questions:[
        text("1. Die ___ sind hier.", ["Tomaten"]),
        text("2. ___ Melonen?", ["Haben Sie"]),
        text("2. die Melonen sind dort ___ .", ["hinten"]),
        text("3. haben Sie Grill___ ?", ["fleisch","Grillfleisch"]),
        text("3. ___ ___ möchten Sie?", ["Wie","viel"]),
        text("3. Zwei ___ , bitte.", ["Kilo"]),
        text("4. ___ darf's sein?", ["Was"]),
        text("4. Ich ___ bitte Käse …", ["möchte"]),
        text("4. Wir ___ heute keinen Camembert mehr.", ["haben"]),
        text("4. ___ nehme ich Emmentaler.", ["Dann"]),
        text("5. Ich hätte gerne ___. Haben Sie Leber___ ?", ["Leberwurst","wurst"]),
        text("5. ___ Gramm, bitte.", ["200"]),
        text("5. Bitte ___ , auf Wiedersehen!", ["schön"])
      ]}
    ],
    H2: [
      {title:"32a · Lisa kauft eine Hose", tracks:[56], figureRange:[0,1], questions:[
        text("___ Tag!", ["Guten"]),
        text("ich ___ bitte eine Hose.", ["möchte"]),
        text("Die ___ sind hier.", ["Hosen"]),
        text("Welche Größe ___ Sie?", ["haben"]),
        text("Ich habe Größe ___ .", ["38"]),
        text("___ Farbe?", ["Welche"]),
        text("___, bitte. (Farbe)", ["Schwarz"]),
        text("Hier ist eine ___ in Schwarz in Größe ___ .", ["Hose","38"]),
        text("Was ___ sie?", ["kostet"]),
        text("Sie kostet ___ Euro.", ["59"]),
        text("ich ___ die Hose.", ["nehme"])
      ]},
      {title:"32b · Paul kauft einen Pullover", tracks:[57], figureRange:[1,2], questions:[
        text("___ ! (Paul)", ["Guten Tag"]),
        text("einen ___", ["Pullover"]),
        text("Hier sind ___ in Blau oder in Grün.", ["Pullover"]),
        text("In ___ , bitte.", ["Grün"]),
        text("Ich habe Größe ___ .", ["XL"]),
        text("___ , bitte. (Verkäuferin)", ["Hier"]),
        text("Pullover in Grün in ___ .", ["XL"]),
        text("Kann ich ___ anprobieren?", ["ihn"]),
        text("___, bitte. – Passt er?", ["Ja"]),
        text("der Pulli ___ mir gut.", ["passt"]),
        text("Was ___ er?", ["kostet"]),
        text("___ kostet ___ , ___ Euro.", ["Er","24,95","24.95"]),
        text("ich ___ den Pullover.", ["nehme"])
      ]}
    ],
    H3: [
      {title:"33 · Einkaufen – Elektrogeräte", tracks:[58], figureRange:[0,1], questions:[
        text("Ich brauche ___ Fernseher.", ["einen"]),
        text("Was soll er denn ___ ?", ["kosten"]),
        text("Bis 400 Euro, ___ ___ .", ["nicht","mehr"]),
        text("Der hier kostet nur ___ ___ .", ["399","Euro"]),
        text("Der ist ___ , den nehme ich.", ["schön"])
      ]}
    ]
  };
})();