/* A1 verb reference (Netzwerk neu A1.1 + A1.2). Präsens (alle Personen), Präteritum und Perfekt. */
window.A1_VERBS = [
  // ---- Kapitel 1 ----
  {chapter:1,inf:"heißen",forms:["heiße","heißt","heißt","heißen","heißt","heißen"],praet:"hieß",aux:"haben",part:"geheißen",ar:"يُسمى / اسمه",example:"Ich habe schon immer Omar geheißen."},
  {chapter:1,inf:"kommen",forms:["komme","kommst","kommt","kommen","kommt","kommen"],praet:"kam",aux:"sein",part:"gekommen",ar:"يأتي / يجي",example:"Ich bin aus Ägypten gekommen."},
  {chapter:1,inf:"wohnen",forms:["wohne","wohnst","wohnt","wohnen","wohnt","wohnen"],praet:"wohnte",aux:"haben",part:"gewohnt",ar:"يسكن",example:"Wir haben in Berlin gewohnt."},
  {chapter:1,inf:"sprechen",forms:["spreche","sprichst","spricht","sprechen","sprecht","sprechen"],praet:"sprach",aux:"haben",part:"gesprochen",ar:"يتكلم",example:"Wir haben Deutsch gesprochen."},
  {chapter:1,inf:"lernen",forms:["lerne","lernst","lernt","lernen","lernt","lernen"],praet:"lernte",aux:"haben",part:"gelernt",ar:"يتعلم",example:"Ich habe ein Jahr Deutsch gelernt."},
  {chapter:1,inf:"machen",forms:["mache","machst","macht","machen","macht","machen"],praet:"machte",aux:"haben",part:"gemacht",ar:"يعمل / يسوي",example:"Ich habe die Aufgabe gemacht."},
  // ---- Kapitel 2 ----
  {chapter:2,inf:"sein",forms:["bin","bist","ist","sind","seid","sind"],praet:"war",aux:"sein",part:"gewesen",ar:"يكون",example:"Ich bin in Hamburg gewesen."},
  {chapter:2,inf:"haben",forms:["habe","hast","hat","haben","habt","haben"],praet:"hatte",aux:"haben",part:"gehabt",ar:"يملك / عنده",example:"Ich habe heute keine Zeit gehabt."},
  {chapter:2,inf:"spielen",forms:["spiele","spielst","spielt","spielen","spielt","spielen"],praet:"spielte",aux:"haben",part:"gespielt",ar:"يلعب / يعزف",example:"Wir haben am Samstag Fußball gespielt."},
  {chapter:2,inf:"hören",forms:["höre","hörst","hört","hören","hört","hören"],praet:"hörte",aux:"haben",part:"gehört",ar:"يسمع",example:"Ich habe gern Musik gehört."},
  {chapter:2,inf:"lesen",forms:["lese","liest","liest","lesen","lest","lesen"],praet:"las",aux:"haben",part:"gelesen",ar:"يقرأ",example:"Ich habe ein Buch gelesen."},
  {chapter:2,inf:"tanzen",forms:["tanze","tanzt","tanzt","tanzen","tanzt","tanzen"],praet:"tanzte",aux:"haben",part:"getanzt",ar:"يرقص",example:"Wir haben die ganze Nacht getanzt."},
  {chapter:2,inf:"schwimmen",forms:["schwimme","schwimmst","schwimmt","schwimmen","schwimmt","schwimmen"],praet:"schwamm",aux:"sein",part:"geschwommen",ar:"يعوم",example:"Im Sommer bin ich viel geschwommen."},
  {chapter:2,inf:"arbeiten",forms:["arbeite","arbeitest","arbeitet","arbeiten","arbeitet","arbeiten"],praet:"arbeitete",aux:"haben",part:"gearbeitet",ar:"يشتغل",example:"Sie hat im Hotel gearbeitet."},
  {chapter:2,inf:"treffen",forms:["treffe","triffst","trifft","treffen","trefft","treffen"],praet:"traf",aux:"haben",part:"getroffen",ar:"يقابل",example:"Ich habe meine Freunde getroffen."},
  // ---- Kapitel 3 ----
  {chapter:3,inf:"fahren",forms:["fahre","fährst","fährt","fahren","fahrt","fahren"],praet:"fuhr",aux:"sein",part:"gefahren",ar:"يركب / يسوق",example:"Ich bin mit dem Bus gefahren."},
  {chapter:3,inf:"gehen",forms:["gehe","gehst","geht","gehen","geht","gehen"],praet:"ging",aux:"sein",part:"gegangen",ar:"يمشي / يروح",example:"Wir sind zum Markt gegangen."},
  // ---- Kapitel 4 ----
  {chapter:4,inf:"essen",forms:["esse","isst","isst","essen","esst","essen"],praet:"aß",aux:"haben",part:"gegessen",ar:"يأكل",example:"Ich habe einen Apfel gegessen."},
  {chapter:4,inf:"trinken",forms:["trinke","trinkst","trinkt","trinken","trinkt","trinken"],praet:"trank",aux:"haben",part:"getrunken",ar:"يشرب",example:"Wir haben Tee getrunken."},
  {chapter:4,inf:"kochen",forms:["koche","kochst","kocht","kochen","kocht","kochen"],praet:"kochte",aux:"haben",part:"gekocht",ar:"يطبخ",example:"Ich habe Reis mit Gemüse gekocht."},
  {chapter:4,inf:"kaufen",forms:["kaufe","kaufst","kauft","kaufen","kauft","kaufen"],praet:"kaufte",aux:"haben",part:"gekauft",ar:"يشتري",example:"Ich habe Brot gekauft."},
  {chapter:4,inf:"einkaufen",forms:["kaufe ein","kaufst ein","kauft ein","kaufen ein","kauft ein","kaufen ein"],praet:"kaufte ein",aux:"haben",part:"eingekauft",ar:"يتسوّق",example:"Wir haben am Samstag eingekauft."},
  {chapter:4,inf:"nehmen",forms:["nehme","nimmst","nimmt","nehmen","nehmt","nehmen"],praet:"nahm",aux:"haben",part:"genommen",ar:"يأخذ",example:"Ich habe ein Kilo Äpfel genommen."},
  {chapter:4,inf:"geben",forms:["gebe","gibst","gibt","geben","gebt","geben"],praet:"gab",aux:"haben",part:"gegeben",ar:"يعطي / يدي",example:"Sie hat mir das Wasser gegeben."},
  // ---- Kapitel 5 ----
  {chapter:5,inf:"aufstehen",forms:["stehe auf","stehst auf","steht auf","stehen auf","steht auf","stehen auf"],praet:"stand auf",aux:"sein",part:"aufgestanden",ar:"يصحى / يقوم",example:"Ich bin um sieben aufgestanden."},
  {chapter:5,inf:"frühstücken",forms:["frühstücke","frühstückst","frühstückt","frühstücken","frühstückt","frühstücken"],praet:"frühstückte",aux:"haben",part:"gefrühstückt",ar:"يفطر",example:"Wir haben um acht gefrühstückt."},
  {chapter:5,inf:"schlafen",forms:["schlafe","schläfst","schläft","schlafen","schlaft","schlafen"],praet:"schlief",aux:"haben",part:"geschlafen",ar:"ينام",example:"Ich habe acht Stunden geschlafen."},
  {chapter:5,inf:"anrufen",forms:["rufe an","rufst an","ruft an","rufen an","ruft an","rufen an"],praet:"rief an",aux:"haben",part:"angerufen",ar:"يتصل",example:"Ich habe meine Mutter angerufen."},
  {chapter:5,inf:"warten",forms:["warte","wartest","wartet","warten","wartet","warten"],praet:"wartete",aux:"haben",part:"gewartet",ar:"يستنى / ينتظر",example:"Ich habe auf den Bus gewartet."},
  {chapter:5,inf:"sehen",forms:["sehe","siehst","sieht","sehen","seht","sehen"],praet:"sah",aux:"haben",part:"gesehen",ar:"يشوف / يرى",example:"Ich habe am Abend einen Film gesehen."},
  {chapter:5,inf:"müssen",forms:["muss","musst","muss","müssen","müsst","müssen"],praet:"musste",aux:"haben",part:"gemusst",ar:"لازم / يجب",example:"Ich habe heute arbeiten müssen."},
  {chapter:5,inf:"können",forms:["kann","kannst","kann","können","könnt","können"],praet:"konnte",aux:"haben",part:"gekonnt",ar:"يقدر / يستطيع",example:"Sie hat sehr gut kochen können."},
  {chapter:5,inf:"wollen",forms:["will","willst","will","wollen","wollt","wollen"],praet:"wollte",aux:"haben",part:"gewollt",ar:"يريد / عايز",example:"Er hat nicht kommen wollen."},
  // ---- Kapitel 6 ----
  {chapter:6,inf:"einladen",forms:["lade ein","lädst ein","lädt ein","laden ein","ladet ein","laden ein"],praet:"lud ein",aux:"haben",part:"eingeladen",ar:"يعزم / يدعو",example:"Ich habe alle Freunde eingeladen."},
  {chapter:6,inf:"feiern",forms:["feiere","feierst","feiert","feiern","feiert","feiern"],praet:"feierte",aux:"haben",part:"gefeiert",ar:"يحتفل",example:"Wir haben im Garten gefeiert."},
  {chapter:6,inf:"bezahlen",forms:["bezahle","bezahlst","bezahlt","bezahlen","bezahlt","bezahlen"],praet:"bezahlte",aux:"haben",part:"bezahlt",ar:"يدفع",example:"Wir haben zusammen bezahlt."},
  {chapter:6,inf:"bestellen",forms:["bestelle","bestellst","bestellt","bestellen","bestellt","bestellen"],praet:"bestellte",aux:"haben",part:"bestellt",ar:"يطلب (أكل)",example:"Ich habe eine Suppe bestellt."},
  // ---- Kapitel 7 ----
  {chapter:7,inf:"drucken",forms:["drucke","druckst","druckt","drucken","druckt","drucken"],praet:"druckte",aux:"haben",part:"gedruckt",ar:"يطبع",example:"Ich habe das Dokument gedruckt."},
  {chapter:7,inf:"schicken",forms:["schicke","schickst","schickt","schicken","schickt","schicken"],praet:"schickte",aux:"haben",part:"geschickt",ar:"يبعت / يرسل",example:"Ich habe dir die E-Mail geschickt."},
  {chapter:7,inf:"überweisen",forms:["überweise","überweist","überweist","überweisen","überweist","überweisen"],praet:"überwies",aux:"haben",part:"überwiesen",ar:"يحوّل فلوس",example:"Ich habe die Miete überwiesen."},
  // ---- Kapitel 8 ----
  {chapter:8,inf:"sich fühlen",forms:["fühle mich","fühlst dich","fühlt sich","fühlen uns","fühlt euch","fühlen sich"],praet:"fühlte sich",aux:"haben",part:"gefühlt",ar:"يحس / يشعر",example:"Ich habe mich heute schlecht gefühlt."},
  {chapter:8,inf:"sich ausruhen",forms:["ruhe mich aus","ruhst dich aus","ruht sich aus","ruhen uns aus","ruht euch aus","ruhen sich aus"],praet:"ruhte sich aus",aux:"haben",part:"ausgeruht",ar:"يرتاح",example:"Am Wochenende habe ich mich ausgeruht."},
  {chapter:8,inf:"untersuchen",forms:["untersuche","untersuchst","untersucht","untersuchen","untersucht","untersuchen"],praet:"untersuchte",aux:"haben",part:"untersucht",ar:"يكشف / يفحص",example:"Der Arzt hat das Kind untersucht."},
  {chapter:8,inf:"dürfen",forms:["darf","darfst","darf","dürfen","dürft","dürfen"],praet:"durfte",aux:"haben",part:"gedurft",ar:"مسموح",example:"Hier habe ich nicht rauchen dürfen."},
  {chapter:8,inf:"sollen",forms:["soll","sollst","soll","sollen","sollt","sollen"],praet:"sollte",aux:"haben",part:"gesollt",ar:"المفروض / ينبغي",example:"Du hast früher kommen sollen."},
  // ---- Kapitel 9 ----
  {chapter:9,inf:"mieten",forms:["miete","mietest","mietet","mieten","mietet","mieten"],praet:"mietete",aux:"haben",part:"gemietet",ar:"يستأجر",example:"Wir haben eine helle Wohnung gemietet."},
  // ---- Kapitel 10 ----
  {chapter:10,inf:"suchen",forms:["suche","suchst","sucht","suchen","sucht","suchen"],praet:"suchte",aux:"haben",part:"gesucht",ar:"يدوّر على / يبحث",example:"Ich habe eine neue Stelle gesucht."},
  {chapter:10,inf:"finden",forms:["finde","findest","findet","finden","findet","finden"],praet:"fand",aux:"haben",part:"gefunden",ar:"يلاقي / يجد",example:"Er hat einen guten Job gefunden."},
  {chapter:10,inf:"studieren",forms:["studiere","studierst","studiert","studieren","studiert","studieren"],praet:"studierte",aux:"haben",part:"studiert",ar:"يدرس في الجامعة",example:"Sie hat in Berlin Medizin studiert."},
  {chapter:10,inf:"anfangen",forms:["fange an","fängst an","fängt an","fangen an","fangt an","fangen an"],praet:"fing an",aux:"haben",part:"angefangen",ar:"يبدأ",example:"Ich habe am Montag angefangen."},
  {chapter:10,inf:"erzählen",forms:["erzähle","erzählst","erzählt","erzählen","erzählt","erzählen"],praet:"erzählte",aux:"haben",part:"erzählt",ar:"يحكي / يروي",example:"Er hat von seinem ersten Arbeitstag erzählt."},
  // ---- Kapitel 11 ----
  {chapter:11,inf:"anziehen",forms:["ziehe an","ziehst an","zieht an","ziehen an","zieht an","ziehen an"],praet:"zog an",aux:"haben",part:"angezogen",ar:"يلبس",example:"Ich habe die warme Jacke angezogen."},
  {chapter:11,inf:"tragen",forms:["trage","trägst","trägt","tragen","tragt","tragen"],praet:"trug",aux:"haben",part:"getragen",ar:"يرتدي / يلبس",example:"Er hat heute ein blaues Hemd getragen."},
  {chapter:11,inf:"anprobieren",forms:["probiere an","probierst an","probiert an","probieren an","probiert an","probieren an"],praet:"probierte an",aux:"haben",part:"anprobiert",ar:"يقيس الهدوم",example:"Ich habe die Hose anprobiert."},
  {chapter:11,inf:"gefallen",forms:["gefalle","gefällst","gefällt","gefallen","gefallt","gefallen"],praet:"gefiel",aux:"haben",part:"gefallen",ar:"يعجب",example:"Die blaue Jacke hat mir gefallen."},
  {chapter:11,inf:"passen",forms:["passe","passt","passt","passen","passt","passen"],praet:"passte",aux:"haben",part:"gepasst",ar:"يكون على المقاس",example:"Die Schuhe haben mir gut gepasst."},
  // ---- Kapitel 12 ----
  {chapter:12,inf:"reisen",forms:["reise","reist","reist","reisen","reist","reisen"],praet:"reiste",aux:"sein",part:"gereist",ar:"يسافر",example:"Wir sind nach Italien gereist."},
  {chapter:12,inf:"fliegen",forms:["fliege","fliegst","fliegt","fliegen","fliegt","fliegen"],praet:"flog",aux:"sein",part:"geflogen",ar:"يطير / يسافر بالطيارة",example:"Ich bin nach Berlin geflogen."},
  {chapter:12,inf:"buchen",forms:["buche","buchst","bucht","buchen","bucht","buchen"],praet:"buchte",aux:"haben",part:"gebucht",ar:"يحجز",example:"Wir haben ein Hotel am Meer gebucht."},
  {chapter:12,inf:"besuchen",forms:["besuche","besuchst","besucht","besuchen","besucht","besuchen"],praet:"besuchte",aux:"haben",part:"besucht",ar:"يزور",example:"Wir haben das Museum besucht."},
  {chapter:12,inf:"besichtigen",forms:["besichtige","besichtigst","besichtigt","besichtigen","besichtigt","besichtigen"],praet:"besichtigte",aux:"haben",part:"besichtigt",ar:"يزور معلمًا سياحيًا",example:"Wir haben das alte Schloss besichtigt."},
  {chapter:12,inf:"scheinen",forms:["scheine","scheinst","scheint","scheinen","scheint","scheinen"],praet:"schien",aux:"haben",part:"geschienen",ar:"تشرق / تنوّر (الشمس)",example:"Den ganzen Tag hat die Sonne geschienen."},
];
