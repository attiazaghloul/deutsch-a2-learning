/* Detailed A1.1 grammar (chapters 5-6): explanations, tables, typical mistakes and
   varied exercises. Rendered by js/18-grammar-practice.js. */
window.A1_GRAMMAR = window.A1_GRAMMAR || {};
(function () {
  const sec = (h, hAr, text, ar, extra = {}) => ({ h, hAr, text, ar, ...extra });
  const w = text => (/[؀-ۿ]/.test(text) ? text : "القاعدة: " + text);
  const P = (wrong, right, ar) => ({ wrong, right, ar: w(ar) });
  const C = (q, o, a, why) => ({ type: "choice", q, o, a, why: w(why) });
  const TF = (q, a, why) => ({ type: "truefalse", q, a, why: w(why) });
  const GAP = (q, a, why) => ({ type: "gap", q, a: [].concat(a), why: w(why) });
  const ORD = (prefix, words, a, why) => ({ type: "order", prefix, words, a: [].concat(a), why: w(why) });
  const TRA = (q, a, why) => ({ type: "transform", q, a: [].concat(a), why: w(why) });
  const ERR = (q, a, why) => ({ type: "error", q, a: [].concat(a), why: w(why) });

  window.A1_GRAMMAR[5] = [
    {
      id: "a1-k5-zeit",
      t: "Zeitangaben und Uhrzeit: am, um, von … bis", tAr: "تحديد الوقت والساعة: am وum وvon … bis",
      summary: "Mit <b>am</b> nennt man Tage und Tageszeiten (am Montag, am Abend), mit <b>um</b> die Uhrzeit (um acht Uhr) und mit <b>von … bis</b> einen Zeitraum (von neun bis zwölf).",
      summaryAr: "بـ am بنقول الأيام وأوقات اليوم (am Montag وam Abend)، وبـ um الساعة (um acht Uhr)، وبـ von … bis فترة (von neun bis zwölf).",
      sections: [
        sec("1. am, um, von … bis", "am وum وvon … bis",
          "<b>Wann?</b> → <b>am Montag, am Vormittag, am Wochenende, um 8 Uhr</b>. <b>Wie lange?</b> → <b>von Montag bis Freitag, von neun bis halb zwei</b>. Achtung: <b>in der Nacht / nachts</b>.",
          "Wann؟ (إمتى) ← am Montag وam Vormittag وam Wochenende وum 8 Uhr. Wie lange؟ (قد إيه) ← von Montag bis Freitag.",
          { table: { head: ["Frage", "Präposition", "Beispiel"], rows: [["Wann? (Tag)", "am", "Ich habe am Montag frei."], ["Wann? (Tageszeit)", "am", "Am Vormittag lerne ich."], ["Wann? (Uhrzeit)", "um", "Der Kurs beginnt um 9 Uhr."], ["Wie lange?", "von … bis", "Ich arbeite von 8 bis 17 Uhr."]] },
            examples: [["Am Samstag stehe ich um zehn Uhr auf.", "يوم السبت بصحى الساعة 10."]] }),
        sec("2. Die Uhrzeit sagen", "قول الساعة",
          "Inoffiziell (im Alltag): <b>8:15 = Viertel nach acht, 8:30 = halb neun, 8:45 = Viertel vor neun, 8:10 = zehn nach acht, 8:55 = fünf vor neun</b>. Offiziell (24 Stunden): <b>20:15 = zwanzig Uhr fünfzehn</b>. <b>halb neun</b> ist eine halbe Stunde <b>vor</b> neun!",
          "في الكلام العادي: 8:15 = Viertel nach acht وhalb neun = 8:30 (نص ساعة قبل 9). وبالنظام الرسمي 24 ساعة: 20:15 = zwanzig Uhr fünfzehn.",
          { table: { head: ["Zeit", "inoffiziell", "offiziell"], rows: [["7:00", "sieben Uhr", "sieben Uhr"], ["7:15", "Viertel nach sieben", "sieben Uhr fünfzehn"], ["7:30", "halb acht", "sieben Uhr dreißig"], ["7:45", "Viertel vor acht", "sieben Uhr fünfundvierzig"], ["14:20", "zwanzig nach zwei", "vierzehn Uhr zwanzig"], ["18:45", "Viertel vor sieben", "achtzehn Uhr fünfundvierzig"]] },
            examples: [["Es ist halb drei.", "الساعة 2:30."]] }),
        sec("3. Fragen nach der Zeit", "الأسئلة عن الوقت",
          "<b>Wie spät ist es? / Wie viel Uhr ist es?</b> → Es ist … <b>Wann beginnt der Kurs?</b> → Um … <b>Wie lange arbeitest du?</b> → Von … bis …",
          "Wie spät ist es؟ ← Es ist … وWann beginnt der Kurs؟ ← Um … وWie lange arbeitest du؟ ← Von … bis …",
          { examples: [["Wann beginnt der Kurs? – Um Viertel nach acht.", "الكورس بيبدأ إمتى؟ – الساعة 8:15."]] })
      ],
      pitfalls: [
        P("Ich stehe am sieben Uhr auf.", "Ich stehe um sieben Uhr auf.", "للساعة بنستخدم um."),
        P("Wir treffen uns um Montag.", "Wir treffen uns am Montag.", "لليوم بنستخدم am."),
        P("Es ist halb sieben. (= 7:30)", "Es ist halb acht. (= 7:30)", "halb acht = 7:30 (نص ساعة قبل 8).")
      ],
      exercises: [
        C("Ich stehe ___ sieben Uhr auf.", ["um", "am", "von"], 0, "الساعة ← um."),
        C("Wir treffen uns ___ Montag.", ["am", "um", "im"], 0, "اليوم ← am."),
        C("7:30 Uhr inoffiziell:", ["halb acht", "halb sieben", "Viertel nach sieben"], 0, "halb acht = 7:30."),
        C("8:45 Uhr inoffiziell:", ["Viertel vor neun", "Viertel nach acht", "halb neun"], 0, "Viertel vor neun = 8:45."),
        GAP("Ich arbeite ___ Montag bis Freitag. (Zeitraum)", ["von"], "von … bis."),
        GAP("Der Kurs ist ___ Vormittag.", ["am"], "أوقات اليوم ← am."),
        ORD("", ["Ich", "stehe", "um", "halb", "sieben", "auf"], ["Ich stehe um halb sieben auf"], "الفعل في التاني وauf في الآخر."),
        TRA("Offizielle Uhrzeit: 18:45 → ___", ["achtzehn Uhr fünfundvierzig", "Es ist achtzehn Uhr fünfundvierzig."], "بالنظام الرسمي 24 ساعة."),
        ERR("Ich stehe am sieben Uhr auf.", ["Ich stehe um sieben Uhr auf."], "الساعة ← um."),
        TF("Mit Wochentagen benutzt man „am“.", true, "am Montag."),
        TF("„halb neun“ bedeutet 9:30 Uhr.", false, "halb neun = 8:30.")
      ]
    },
    {
      id: "a1-k5-possessiv",
      t: "Possessivartikel: mein, dein, sein …", tAr: "أدوات الملكية: mein وdein وsein …",
      summary: "Possessivartikel zeigen, wem etwas gehört: <b>mein, dein, sein, ihr, unser, euer, ihr, Ihr</b>. Sie haben dieselben Endungen wie <b>ein/kein</b>.",
      summaryAr: "أدوات الملكية بتوضح الحاجة بتاعة مين: mein وdein وsein وihr وunser وeuer وihr وIhr. ونهاياتها زي ein/kein.",
      sections: [
        sec("1. Welcher Possessivartikel passt?", "أنهي أداة ملكية تناسب؟",
          "Der Possessivartikel passt zur <b>Person</b>: ich → <b>mein</b>, du → <b>dein</b>, er/es → <b>sein</b>, sie → <b>ihr</b>, wir → <b>unser</b>, ihr → <b>euer</b>, sie (Plural) → <b>ihr</b>, Sie → <b>Ihr</b>.",
          "الأداة بتتبع الشخص: ich ← mein وdu ← dein وer/es ← sein وsie ← ihr وwir ← unser وihr ← euer وsie (جمع) ← ihr وSie ← Ihr.",
          { table: { head: ["Person", "Possessivartikel", "Beispiel"], rows: [["ich", "mein", "mein Vater"], ["du", "dein", "deine Mutter"], ["er / es", "sein", "sein Bruder"], ["sie", "ihr", "ihre Schwester"], ["wir", "unser", "unsere Eltern"], ["ihr", "euer", "eure Kinder"], ["sie (Pl.)", "ihr", "ihr Hund"], ["Sie", "Ihr", "Ihre Familie"]] },
            examples: [["Das ist Anna. Ihre Mutter heißt Eva.", "دي آنا. أمها اسمها إيفا."]] }),
        sec("2. Die Endungen", "النهايات",
          "Die Endungen sind wie bei <b>ein</b>: <b>maskulin/neutrum</b> keine Endung (mein Vater, mein Kind), <b>feminin/Plural</b> <b>-e</b> (meine Mutter, meine Eltern). Im <b>Akkusativ</b> bekommt nur <b>maskulin -en</b>: <b>Ich sehe meinen Vater.</b>",
          "النهايات زي ein: المذكر والمحايد من غير نهاية، والمؤنث والجمع بياخدوا -e. وفي Akkusativ المذكر بس بياخد -en.",
          { table: { head: ["", "Nominativ", "Akkusativ"], rows: [["maskulin", "mein Vater", "meinen Vater"], ["neutrum", "mein Kind", "mein Kind"], ["feminin", "meine Mutter", "meine Mutter"], ["Plural", "meine Eltern", "meine Eltern"]] },
            examples: [["Ich besuche meine Großeltern.", "باروح أزور أجدادي."]] }),
        sec("3. euer und unser", "euer وunser",
          "Bei <b>euer</b> fällt das <b>-e-</b> weg, wenn eine Endung kommt: <b>eure</b> Mutter, <b>euren</b> Vater. Bei <b>unser</b> kann man <b>unsere</b> sagen.",
          "في euer الحرف e بيتحذف لما نضيف نهاية: eure Mutter وeuren Vater.",
          { examples: [["Wo ist euer Hund? Wo sind eure Kinder?", "فين كلبكم؟ فين أولادكم؟"]] })
      ],
      pitfalls: [
        P("Das ist mein Mutter.", "Das ist meine Mutter.", "Mutter مؤنث ← meine."),
        P("Ich sehe mein Vater.", "Ich sehe meinen Vater.", "المذكر في Akkusativ ← meinen."),
        P("Das sind mein Eltern.", "Das sind meine Eltern.", "الجمع ← meine.")
      ],
      exercises: [
        C("Das ist ___ Bruder. (ich)", ["mein", "meine", "meinen"], 0, "Bruder مذكر ← mein."),
        C("Das ist ___ Schwester. (ich)", ["meine", "mein", "meinen"], 0, "Schwester مؤنث ← meine."),
        C("Ich sehe ___ Vater. (ich)", ["meinen", "mein", "meine"], 0, "مذكر في Akkusativ ← meinen."),
        C("Das ist Anna. ___ Mutter heißt Eva.", ["Ihre", "Seine", "Meine"], 0, "Anna ست ← ihre."),
        GAP("Wir haben ein Haus. ___ Haus ist groß.", ["Unser"], "wir ← unser."),
        GAP("Ihr habt einen Hund. ___ Hund ist süß.", ["Euer"], "ihr ← euer."),
        ORD("", ["Das", "ist", "meine", "Familie"], ["Das ist meine Familie"], "Familie مؤنث ← meine."),
        TRA("Schreibe mit „du“: Das ist mein Vater. → Das ist ___ Vater.", ["Das ist dein Vater.", "dein"], "ich ← mein وdu ← dein."),
        ERR("Das ist mein Mutter.", ["Das ist meine Mutter."], "Mutter مؤنث ← meine."),
        TF("Possessivartikel haben dieselben Endungen wie „ein/kein“.", true, "زي ein/kein."),
        TF("Im Plural sagt man „mein Eltern“.", false, "الجمع ← meine Eltern.")
      ]
    },
    {
      id: "a1-k5-modal",
      t: "Modalverben: müssen, können, wollen", tAr: "الأفعال المساعدة: müssen وkönnen وwollen",
      summary: "<b>müssen</b> = es ist nötig, <b>können</b> = Fähigkeit oder Möglichkeit, <b>wollen</b> = starker Wunsch. Bei <b>ich</b> und <b>er/sie/es</b> haben sie dieselbe Form (<b>ich kann, er kann</b>).",
      summaryAr: "müssen = لازم، können = قدرة أو إمكانية، wollen = رغبة قوية. ومع ich وer/sie/es بياخدوا نفس الصيغة (ich kann وer kann).",
      sections: [
        sec("1. Formen", "الصيغ",
          "Modalverben sind unregelmäßig. Bei <b>ich</b> und <b>er/sie/es</b> gibt es <b>keine Endung</b>.",
          "الأفعال المساعدة غير منتظمة. ومع ich وer/sie/es من غير نهاية.",
          { table: { head: ["Person", "müssen", "können", "wollen"], rows: [["ich", "muss", "kann", "will"], ["du", "musst", "kannst", "willst"], ["er / sie / es", "muss", "kann", "will"], ["wir", "müssen", "können", "wollen"], ["ihr", "müsst", "könnt", "wollt"], ["sie / Sie", "müssen", "können", "wollen"]] },
            examples: [["Ich muss heute arbeiten.", "لازم أشتغل النهارده."], ["Kannst du am Samstag kommen?", "تقدر تيجي السبت؟"]] }),
        sec("2. Bedeutung", "المعنى",
          "<b>müssen</b>: Ich muss früh aufstehen (nötig). <b>können</b>: Ich kann gut kochen (Fähigkeit) / Ich kann am Montag nicht (Möglichkeit). <b>wollen</b>: Ich will Deutsch lernen (Wunsch).",
          "müssen للضرورة، وkönnen للقدرة أو الإمكانية، وwollen للرغبة.",
          { examples: [["Wollen wir ins Kino gehen?", "تحب نروح السينما؟"], ["Er kann sehr gut schwimmen.", "هو بيعوم كويس جدًا."]] }),
        sec("3. Termine und Absagen", "المواعيد والاعتذار",
          "Mit <b>können</b> fragt man nach Terminen: <b>Kannst du am Montag?</b> Mit <b>müssen</b> erklärt man, warum es nicht geht: <b>Nein, da muss ich arbeiten.</b>",
          "بـ können بنسأل عن المواعيد: Kannst du am Montag؟ وبـ müssen بنشرح ليه مش هينفع: Nein, da muss ich arbeiten.",
          { examples: [["Am Montag kann ich leider nicht. Ich muss arbeiten.", "الاتنين للأسف مش هقدر. لازم أشتغل."]] })
      ],
      pitfalls: [
        P("Ich kannst Deutsch sprechen.", "Ich kann Deutsch sprechen.", "مع ich: kann من غير -st."),
        P("Er muss arbeiten kann.", "Er muss arbeiten.", "فعل مساعد واحد بس."),
        P("Wir wollen gehen ins Kino.", "Wir wollen ins Kino gehen.", "المصدر في آخر الجملة.")
      ],
      exercises: [
        C("Ich ___ heute arbeiten. (nötig)", ["muss", "kann", "willst"], 0, "الضرورة ← muss."),
        C("Er ___ gut kochen. (Fähigkeit)", ["kann", "muss", "wollt"], 0, "القدرة ← kann."),
        C("Wir ___ ins Kino gehen. (Wunsch)", ["wollen", "muss", "kann"], 0, "الرغبة ← wollen."),
        C("Du ___ Deutsch sprechen.", ["kannst", "kann", "könnt"], 0, "مع du: kannst."),
        GAP("Ihr ___ pünktlich sein. (müssen)", ["müsst"], "ihr müsst."),
        GAP("Sie ___ nicht kommen. (können; sie = eine Frau)", ["kann"], "sie kann."),
        ORD("", ["Ich", "will", "Deutsch", "lernen"], ["Ich will Deutsch lernen"], "المصدر في آخر الجملة."),
        TRA("Schreibe mit „er“: Ich muss arbeiten. → ___", ["Er muss arbeiten."], "ich muss ← er muss."),
        ERR("Er kannt gut Deutsch sprechen.", ["Er kann gut Deutsch sprechen."], "er kann."),
        TF("Zu „ich“ und „er“ hat das Modalverb dieselbe Form.", true, "ich kann وer kann."),
        TF("„Ich muss“ drückt einen Wunsch aus.", false, "muss للضرورة.")
      ]
    },
    {
      id: "a1-k5-klammer",
      t: "Modalverben im Satz: die Satzklammer", tAr: "الأفعال المساعدة في الجملة: إطار الجملة",
      summary: "Mit einem Modalverb bildet der Satz eine <b>Klammer</b>: Das <b>Modalverb</b> steht auf <b>Position 2</b>, der <b>Infinitiv</b> am <b>Satzende</b>. In Ja-/Nein-Fragen steht das Modalverb auf Position 1.",
      summaryAr: "مع الفعل المساعد الجملة بتكوّن إطار: الفعل المساعد في الموضع التاني، والمصدر في آخر الجملة. وفي أسئلة نعم/لا الفعل المساعد في الأول.",
      sections: [
        sec("1. Die Klammer", "الإطار",
          "<b>Ich muss heute früh aufstehen.</b> Zwischen Modalverb (Position 2) und Infinitiv (Satzende) stehen alle anderen Informationen. Der Infinitiv bleibt <b>zusammen</b>, auch bei trennbaren Verben.",
          "بين الفعل المساعد (الموضع 2) والمصدر (آخر الجملة) بتيجي باقي المعلومات. والمصدر بيفضل كامل حتى مع الأفعال المنفصلة.",
          { table: { head: ["Position 1", "Position 2 (Modalverb)", "Mitte", "Satzende (Infinitiv)"], rows: [["Ich", "muss", "heute früh", "aufstehen."], ["Wir", "wollen", "am Samstag", "einkaufen."], ["Heute", "kann", "er nicht", "kommen."], ["Ich", "will", "Deutsch", "lernen."]] },
            examples: [["Am Samstag wollen wir joggen gehen.", "يوم السبت عايزين نروح نجري."]] }),
        sec("2. Ja-/Nein-Frage", "سؤال نعم/لا",
          "In der Frage steht das Modalverb auf Position 1, der Infinitiv am Ende: <b>Kannst du am Samstag kommen?</b> <b>Wollen wir ins Kino gehen?</b>",
          "في السؤال الفعل المساعد في الأول والمصدر في الآخر.",
          { examples: [["Kannst du morgen kommen?", "تقدر تيجي بكرة؟"]] }),
        sec("3. W-Frage", "سؤال W",
          "In der W-Frage steht das W-Wort auf Position 1, das Modalverb auf Position 2: <b>Wann kannst du kommen?</b> <b>Was möchten Sie trinken?</b>",
          "في سؤال W: كلمة الاستفهام في الأول والفعل المساعد في التاني.",
          { examples: [["Wann willst du kommen?", "عايز تيجي إمتى؟"]] })
      ],
      pitfalls: [
        P("Ich muss arbeiten heute.", "Ich muss heute arbeiten.", "المصدر في آخر الجملة."),
        P("Du kannst morgen kommen?", "Kannst du morgen kommen?", "في السؤال الفعل المساعد في الأول."),
        P("Ich will aufzustehen früh.", "Ich will früh aufstehen.", "المصدر الكامل في الآخر.")
      ],
      exercises: [
        C("Wo steht der Infinitiv bei einem Modalverb?", ["am Satzende", "auf Position 3", "direkt nach dem Subjekt"], 0, "في آخر الجملة."),
        C("Welcher Satz ist richtig?", ["Ich muss heute arbeiten.", "Ich muss arbeiten heute.", "Ich arbeiten muss heute."], 0, "المساعد في التاني والمصدر في الآخر."),
        C("Welche Frage ist richtig?", ["Kannst du morgen kommen?", "Du kannst morgen kommen?", "Kommen kannst du morgen?"], 0, "الفعل المساعد في الأول."),
        GAP("Ich muss früh ___. (aufstehen)", ["aufstehen"], "المصدر كامل."),
        GAP("Wir wollen am Samstag ___. (einkaufen)", ["einkaufen"], "المصدر كامل في الآخر."),
        ORD("", ["Ich", "muss", "heute", "arbeiten"], ["Ich muss heute arbeiten"], "مساعد في التاني ومصدر في الآخر."),
        ORD("", ["Kannst", "du", "am", "Samstag", "kommen"], ["Kannst du am Samstag kommen"], "سؤال: المساعد في الأول."),
        TRA("Bilde einen Satz mit „müssen“: Ich arbeite heute. → ___", ["Ich muss heute arbeiten."], "müssen + مصدر في الآخر."),
        ERR("Ich will Deutsch lerne.", ["Ich will Deutsch lernen."], "المصدر ينتهي بـ -en."),
        TF("Das Modalverb steht auf Position 2 und der Infinitiv am Satzende.", true, "إطار الجملة."),
        TF("Bei trennbaren Verben nach einem Modalverb trennt man das Verb.", false, "المصدر بيفضل كامل.")
      ]
    }
  ];

  window.A1_GRAMMAR[6] = [
    {
      id: "a1-k6-datum",
      t: "Datumsangaben: am ersten, am zweiten …", tAr: "التاريخ: am ersten وam zweiten …",
      summary: "Das Datum sagt man mit <b>Ordinalzahlen</b>: <b>der erste, zweite, dritte …</b> Auf die Frage <b>Wann?</b> antwortet man mit <b>am + Ordinalzahl + -en</b>: <b>am dritten Mai</b>.",
      summaryAr: "التاريخ بنقوله بالأعداد الترتيبية: der erste وzweite وdritte … وللإجابة على Wann؟ بنقول am + العدد الترتيبي + -en: am dritten Mai.",
      sections: [
        sec("1. Ordinalzahlen bilden", "تكوين الأعداد الترتيبية",
          "Bis 19: <b>Zahl + -te</b> (vierte, fünfte, sechste, zehnte, zwölfte). Ab 20: <b>Zahl + -ste</b> (zwanzigste, einundzwanzigste, dreißigste). Besondere Formen: <b>erste, dritte, siebte, achte</b>.",
          "حتى 19: العدد + -te. من 20: العدد + -ste. وفيه أشكال خاصة: erste وdritte وsiebte وachte.",
          { table: { head: ["Zahl", "Ordinalzahl", "am …"], rows: [["1.", "der erste", "am ersten"], ["2.", "der zweite", "am zweiten"], ["3.", "der dritte", "am dritten"], ["4.", "der vierte", "am vierten"], ["7.", "der siebte", "am siebten"], ["8.", "der achte", "am achten"], ["12.", "der zwölfte", "am zwölften"], ["20.", "der zwanzigste", "am zwanzigsten"], ["31.", "der einunddreißigste", "am einunddreißigsten"]] },
            examples: [["Ich habe am zehnten Oktober Geburtstag.", "عيد ميلادي يوم 10 أكتوبر."]] }),
        sec("2. Wann? Wann hast du Geburtstag?", "إمتى؟",
          "<b>Wann hast du Geburtstag? – Am 12. Juni.</b> (gesprochen: am zwölften Juni). Das Datum schreibt man: <b>12.6.</b> oder <b>12. Juni</b>. Der Monat steht ohne Artikel: <b>im Juni</b> (für den ganzen Monat).",
          "Wann hast du Geburtstag؟ – Am 12. Juni. والشهر لوحده: im Juni.",
          { examples: [["Der Wievielte ist heute? – Heute ist der 3. Mai.", "النهارده كام؟ – النهارده 3 مايو."]] }),
        sec("3. Wichtige Wörter", "كلمات مهمة",
          "<b>der Geburtstag, das Datum, der Tag, der Monat, das Jahr, am Wochenende, im Frühling</b>.",
          "كلمات للتاريخ والأعياد.",
          { examples: [["Im Mai habe ich Geburtstag, am ersten Mai.", "عيد ميلادي في مايو، يوم 1 مايو."]] })
      ],
      pitfalls: [
        P("Ich habe im ersten Mai Geburtstag.", "Ich habe am ersten Mai Geburtstag.", "التاريخ مع اليوم ← am."),
        P("am drittem Juni", "am dritten Juni", "بعد am النهاية -en."),
        P("der zwanzigte", "der zwanzigste", "من 20 نستخدم -ste.")
      ],
      exercises: [
        C("Mein Geburtstag ist ___ dritten Mai.", ["am", "um", "im"], 0, "التاريخ ← am."),
        C("Der ___ Januar (1.)", ["erste", "eins", "einste"], 0, "1. = erste."),
        C("3. im Datum: am ___ Mai", ["dritten", "dreiten", "drittten"], 0, "3. = dritten."),
        C("20. im Datum: am ___ August", ["zwanzigsten", "zwanzigten", "zwanzigen"], 0, "من 20 ← -sten."),
        GAP("Am ___ Mai (2.)", ["zweiten"], "2. = zweiten."),
        GAP("Am ___ Juni (7.)", ["siebten"], "7. = siebten."),
        ORD("", ["Ich", "habe", "am", "zehnten", "Oktober", "Geburtstag"], ["Ich habe am zehnten Oktober Geburtstag"], "ترتيب الجملة."),
        TRA("Schreibe das Datum mit Worten: am 12. Juli → ___", ["am zwölften Juli", "Am zwölften Juli"], "12. = zwölften."),
        ERR("Ich habe im ersten Mai Geburtstag.", ["Ich habe am ersten Mai Geburtstag."], "مع اليوم ← am."),
        TF("Bei Ordinalzahlen bis 19 hängt man „-te“ an.", true, "-te حتى 19."),
        TF("Man sagt: Wann? – Im 5. Juni.", false, "الصحيح: am fünften Juni.")
      ]
    },
    {
      id: "a1-k6-trennbar",
      t: "Trennbare Verben", tAr: "الأفعال المنفصلة",
      summary: "Trennbare Verben haben eine <b>Vorsilbe</b> (an-, ein-, mit-, ab-, auf-). Im Hauptsatz steht das Verb auf <b>Position 2</b> und die <b>Vorsilbe am Satzende</b>: <b>Ich rufe dich an.</b>",
      summaryAr: "الأفعال المنفصلة ليها بادئة (an- وein- وmit- وab- وauf-). في الجملة الرئيسية الفعل في التاني والبادئة في آخر الجملة: Ich rufe dich an.",
      sections: [
        sec("1. Verb und Vorsilbe", "الفعل والبادئة",
          "Infinitiv: <b>anrufen</b>. Im Satz: <b>Ich rufe dich an.</b> Die Vorsilbe ist betont (<b>an</b>rufen). Wichtige trennbare Verben: <b>anrufen, einladen, mitbringen, mitkommen, abholen, anfangen, aufstehen, einkaufen, aufhören, mitmachen</b>.",
          "المصدر: anrufen. في الجملة: Ich rufe dich an. والبادئة عليها النبر. أهم الأفعال المنفصلة: anrufen وeinladen وmitbringen وmitkommen وabholen وanfangen وaufstehen وeinkaufen وaufhören وmitmachen.",
          { table: { head: ["Infinitiv", "Satz"], rows: [["anrufen", "Ich rufe dich <b>an</b>."], ["einladen", "Wir laden dich <b>ein</b>."], ["mitbringen", "Ich bringe Saft <b>mit</b>."], ["abholen", "Holst du mich <b>ab</b>?"], ["anfangen", "Der Kurs fängt um acht <b>an</b>."], ["aufstehen", "Ich stehe um sieben <b>auf</b>."], ["einkaufen", "Wir kaufen heute <b>ein</b>."]] },
            examples: [["Wir laden dich zur Party ein.", "بندعوك للحفلة."]] }),
        sec("2. Mit Modalverb", "مع فعل مساعد",
          "Mit einem Modalverb bleibt das trennbare Verb im <b>Infinitiv zusammen</b>: <b>Ich muss um sieben aufstehen.</b> <b>Kannst du mich anrufen?</b>",
          "مع الفعل المساعد الفعل المنفصل بيفضل كامل: Ich muss um sieben aufstehen.",
          { examples: [["Kannst du Salat mitbringen?", "ممكن تجيب سلطة؟"]] }),
        sec("3. Nicht trennbare Verben", "أفعال غير منفصلة",
          "Verben mit <b>be-, ver-, ent-, er-</b> sind nicht trennbar: <b>bestellen, bezahlen, besuchen, verstehen</b>. Sie bleiben im Satz zusammen: <b>Ich besuche dich.</b>",
          "الأفعال اللي بتبدأ بـ be- وver- وent- وer- مش منفصلة: bestellen وbezahlen وbesuchen وverstehen.",
          { examples: [["Ich bestelle einen Kaffee.", "باطلب قهوة."]] })
      ],
      pitfalls: [
        P("Ich anrufe dich.", "Ich rufe dich an.", "البادئة في آخر الجملة."),
        P("Er steht auf um sieben.", "Er steht um sieben auf.", "البادئة في آخر الجملة."),
        P("Ich muss rufe dich an.", "Ich muss dich anrufen.", "بعد الفعل المساعد المصدر كامل.")
      ],
      exercises: [
        C("Welcher Satz ist richtig?", ["Ich rufe dich an.", "Ich anrufe dich.", "Ich rufe an dich."], 0, "البادئة في آخر الجملة."),
        C("Welcher Satz ist richtig?", ["Er steht um sieben auf.", "Er aufsteht um sieben.", "Er steht auf um sieben."], 0, "البادئة في آخر الجملة."),
        C("Welches Verb ist NICHT trennbar?", ["bestellen", "einkaufen", "mitbringen"], 0, "بادئة be- غير منفصلة."),
        C("Mit einem Modalverb:", ["Ich muss einkaufen.", "Ich muss kaufe ein.", "Ich muss ein kaufen."], 0, "المصدر كامل."),
        GAP("Ich lade dich zur Party ___. (einladen)", ["ein"], "البادئة ein."),
        GAP("Der Kurs fängt um acht Uhr ___. (anfangen)", ["an"], "البادئة an."),
        ORD("", ["Wir", "holen", "dich", "am", "Bahnhof", "ab"], ["Wir holen dich am Bahnhof ab"], "البادئة ab في الآخر."),
        TRA("Bilde einen Satz: du – Salat – mitbringen → ___", ["Du bringst Salat mit."], "du bringst … mit."),
        ERR("Ich einkaufe im Supermarkt.", ["Ich kaufe im Supermarkt ein."], "ein في آخر الجملة."),
        TF("Bei trennbaren Verben steht die Vorsilbe am Satzende.", true, "البادئة في آخر الجملة."),
        TF("„bestellen“ ist ein trennbares Verb.", false, "be- غير منفصلة.")
      ]
    },
    {
      id: "a1-k6-akk-pronomen",
      t: "Personalpronomen im Akkusativ", tAr: "الضمائر الشخصية في Akkusativ",
      summary: "Nach vielen Verben (sehen, kennen, einladen, abholen, lieben) steht das Pronomen im <b>Akkusativ</b>: <b>mich, dich, ihn, sie, es, uns, euch, sie, Sie</b>.",
      summaryAr: "بعد أفعال كتير (sehen وkennen وeinladen وabholen وlieben) الضمير بيبقى في Akkusativ: mich وdich وihn وsie وes وuns وeuch وsie وSie.",
      sections: [
        sec("1. Nominativ und Akkusativ", "Nominativ وAkkusativ",
          "Nur bei <b>ich, du, er, wir, ihr</b> ändert sich das Pronomen. <b>es, sie, Sie</b> bleiben gleich.",
          "الضمائر ich وdu وer وwir وihr بتتغير. وes وsie وSie بتفضل زي ما هي.",
          { table: { head: ["Nominativ", "Akkusativ", "Beispiel"], rows: [["ich", "mich", "Holst du mich ab?"], ["du", "dich", "Ich lade dich ein."], ["er", "ihn", "Ich sehe ihn."], ["sie", "sie", "Ich kenne sie."], ["es", "es", "Ich nehme es."], ["wir", "uns", "Er besucht uns."], ["ihr", "euch", "Wir laden euch ein."], ["sie (Pl.)", "sie", "Ich sehe sie."], ["Sie", "Sie", "Ich rufe Sie an."]] },
            examples: [["Ich liebe dich.", "بحبك."]] }),
        sec("2. Welches Wort ersetzt das Pronomen?", "الضمير بيحل محل إيه؟",
          "<b>ihn</b> ersetzt einen maskulinen Akkusativ: <b>den Mann → ihn</b>, <b>den Kuchen → ihn</b>. <b>sie</b> ersetzt <b>die Frau, die Suppe, die Kinder</b>. <b>es</b> ersetzt <b>das Brot, das Kind</b>.",
          "ihn بدل المذكر في Akkusativ. وsie بدل المؤنث والجمع. وes بدل المحايد.",
          { examples: [["Der Kuchen ist lecker. Ich esse ihn gern.", "الكيك لذيذ. بحب آكله."]] }),
        sec("3. Position im Satz", "الموضع في الجملة",
          "Das Pronomen steht direkt nach dem Verb: <b>Ich sehe dich.</b> Bei trennbaren Verben steht es vor der Vorsilbe: <b>Ich rufe dich an.</b>",
          "الضمير بعد الفعل مباشرة. ومع المنفصل قبل البادئة.",
          { examples: [["Ich hole dich um acht ab.", "هاجيلك الساعة 8."]] })
      ],
      pitfalls: [
        P("Ich lade dir ein.", "Ich lade dich ein.", "einladen + Akkusativ ← dich."),
        P("Ich sehe er.", "Ich sehe ihn.", "الـ Akkusativ لـ er هو ihn."),
        P("Er besucht wir.", "Er besucht uns.", "الـ Akkusativ لـ wir هو uns.")
      ],
      exercises: [
        C("Ich liebe ___. (du)", ["dich", "dir", "du"], 0, "du ← dich."),
        C("Siehst du ___? (ich)", ["mich", "mir", "ich"], 0, "ich ← mich."),
        C("Wo ist Max? Ich sehe ___ nicht. (er)", ["ihn", "er", "ihm"], 0, "er ← ihn."),
        C("Das ist Anna. Ich kenne ___. (sie)", ["sie", "ihr", "ihn"], 0, "sie ← sie."),
        GAP("Wir laden ___ ein. (ihr)", ["euch"], "ihr ← euch."),
        GAP("Er besucht ___. (wir)", ["uns"], "wir ← uns."),
        ORD("", ["Ich", "rufe", "dich", "an"], ["Ich rufe dich an"], "الضمير قبل البادئة."),
        TRA("Ersetze „den Mann“: Ich sehe den Mann. → Ich sehe ___.", ["Ich sehe ihn.", "ihn"], "den Mann ← ihn."),
        ERR("Ich lade dir ein.", ["Ich lade dich ein."], "Akkusativ ← dich."),
        TF("Der Akkusativ von „er“ ist „ihn“.", true, "er ← ihn."),
        TF("Der Akkusativ von „wir“ ist „wir“.", false, "wir ← uns.")
      ]
    },
    {
      id: "a1-k6-fuer",
      t: "Die Präposition für + Akkusativ", tAr: "حرف الجر für + Akkusativ",
      summary: "Nach <b>für</b> steht immer der <b>Akkusativ</b>: <b>für den Vater, für das Kind, für die Mutter, für die Kinder, für mich, für dich</b>.",
      summaryAr: "بعد für دايمًا Akkusativ: für den Vater وfür das Kind وfür die Mutter وfür die Kinder وfür mich وfür dich.",
      sections: [
        sec("1. Wann benutzt man für?", "إمتى نستخدم für؟",
          "<b>für</b> zeigt, für wen oder wofür etwas ist: <b>Das Geschenk ist für dich.</b> <b>Danke für die Einladung.</b> Beim Bestellen: <b>Für mich bitte ein Wasser.</b>",
          "für بتوضح الحاجة لمين أو لإيه: Das Geschenk ist für dich. Danke für die Einladung. وفي الطلب: Für mich bitte ein Wasser.",
          { table: { head: ["Nomen", "für + Akkusativ", "Pronomen"], rows: [["der Vater", "für den Vater", "für ihn"], ["das Kind", "für das Kind", "für es"], ["die Mutter", "für die Mutter", "für sie"], ["die Kinder", "für die Kinder", "für sie"], ["ich / du", "–", "für mich / für dich"], ["wir / ihr", "–", "für uns / für euch"]] },
            examples: [["Das Geschenk ist für meinen Bruder.", "الهدية لأخويا."]] }),
        sec("2. Nur maskulin ändert sich", "المذكر بس بيتغيّر",
          "Wie im Akkusativ allgemein: <b>der → den</b>, <b>ein → einen</b>, <b>mein → meinen</b>. Bei feminin, neutrum und Plural bleibt alles gleich.",
          "زي Akkusativ عمومًا: المذكر بس بيتغيّر.",
          { examples: [["Der Kaffee ist für meinen Vater.", "القهوة لأبويا."], ["Die Blumen sind für meine Mutter.", "الورد لأمي."]] }),
        sec("3. Feste Ausdrücke", "تعبيرات ثابتة",
          "<b>Danke für …</b>, <b>Für wen ist das?</b>, <b>Für mich bitte …</b>, <b>Das ist für dich</b>, <b>für heute</b>.",
          "تعبيرات مفيدة مع für.",
          { examples: [["Für wen ist die Suppe? – Für mich.", "الشوربة لمين؟ – ليا."]] })
      ],
      pitfalls: [
        P("Das Geschenk ist für mir.", "Das Geschenk ist für mich.", "بعد für ← Akkusativ: mich."),
        P("für der Hund", "für den Hund", "المذكر في Akkusativ ← den."),
        P("Danke für der Einladung.", "Danke für die Einladung.", "Einladung مؤنث ← die.")
      ],
      exercises: [
        C("Das Geschenk ist ___ meinen Freund.", ["für", "mit", "von"], 0, "للشخص بنستخدم für."),
        C("Das Buch ist für ___. (ich)", ["mich", "mir", "ich"], 0, "für + Akkusativ ← mich."),
        C("Danke ___ die Einladung!", ["für", "mit", "um"], 0, "Danke für …"),
        C("Für ___ bitte ein Wasser. (ich)", ["mich", "mir", "ich"], 0, "für mich."),
        GAP("Das ist ein Geschenk für ___ Mutter. (meine)", ["meine"], "المؤنث ما بيتغيرش."),
        GAP("Der Kaffee ist für ___ Vater. (mein)", ["meinen"], "المذكر ← meinen."),
        ORD("", ["Das", "Geschenk", "ist", "für", "dich"], ["Das Geschenk ist für dich"], "für + Akkusativ."),
        TRA("Schreibe: Geschenk / mein Bruder → Das Geschenk ist für ___", ["Das Geschenk ist für meinen Bruder.", "meinen Bruder"], "für meinen Bruder."),
        ERR("Das Geschenk ist für mir.", ["Das Geschenk ist für mich."], "Akkusativ ← mich."),
        TF("Nach „für“ steht der Akkusativ.", true, "für + Akkusativ."),
        TF("Man sagt: „für der Hund“.", false, "الصحيح: für den Hund.")
      ]
    },
    {
      id: "a1-k6-praeteritum",
      t: "Präteritum von haben und sein", tAr: "الماضي البسيط لـ haben وsein",
      summary: "Über die Vergangenheit spricht man mit <b>war</b> (sein) und <b>hatte</b> (haben): <b>Die Party war schön. Ich hatte viel Spaß.</b>",
      summaryAr: "للكلام عن الماضي بنستخدم war (sein) وhatte (haben): Die Party war schön. Ich hatte viel Spaß.",
      sections: [
        sec("1. Die Formen", "الصيغ",
          "Bei <b>ich</b> und <b>er/sie/es</b> sind die Formen gleich: <b>ich war, er war; ich hatte, er hatte</b>.",
          "مع ich وer/sie/es الصيغة واحدة: ich war وer war؛ ich hatte وer hatte.",
          { table: { head: ["Person", "sein → war", "haben → hatte"], rows: [["ich", "war", "hatte"], ["du", "warst", "hattest"], ["er / sie / es", "war", "hatte"], ["wir", "waren", "hatten"], ["ihr", "wart", "hattet"], ["sie / Sie", "waren", "hatten"]] },
            examples: [["Gestern war ich im Kino.", "امبارح كنت في السينما."]] }),
        sec("2. Über Ereignisse sprechen", "الكلام عن الأحداث",
          "<b>Wie war die Party? – Sie war super.</b> <b>Das Essen war lecker.</b> <b>Hattet ihr Spaß? – Ja, wir hatten viel Spaß.</b> <b>Leider war das Wetter nicht gut.</b>",
          "Wie war die Party؟ – Sie war super. Das Essen war lecker. Hattet ihr Spaß؟ – Ja, wir hatten viel Spaß.",
          { examples: [["Der Kellner war nett.", "الجرسون كان لطيف."], ["Wir hatten keine Zeit.", "ماكانش عندنا وقت."]] }),
        sec("3. Zeitangaben für die Vergangenheit", "كلمات الماضي",
          "Typische Zeitangaben: <b>gestern, vorgestern, letzte Woche, letztes Jahr, am Samstag</b>. Das Verb steht auch hier auf <b>Position 2</b>: <b>Gestern war ich zu Hause.</b>",
          "كلمات زمنية للماضي: gestern وvorgestern وletzte Woche وletztes Jahr. والفعل في الموضع التاني.",
          { examples: [["Letztes Jahr war ich in Berlin.", "السنة اللي فاتت كنت في برلين."]] })
      ],
      pitfalls: [
        P("Gestern ich war im Kino.", "Gestern war ich im Kino.", "الفعل في الموضع التاني."),
        P("Wir waren viel Spaß.", "Wir hatten viel Spaß.", "الـ Spaß مع haben: hatten."),
        P("Er hattet Zeit.", "Er hatte Zeit.", "مع er من غير t: hatte.")
      ],
      exercises: [
        C("Die Party ___ sehr schön.", ["war", "waren", "wart"], 0, "die Party ← war."),
        C("Wir ___ viel Spaß.", ["hatten", "hattet", "hatte"], 0, "wir hatten."),
        C("Gestern ___ ich krank.", ["war", "bin", "ist"], 0, "الماضي ← war."),
        C("Du ___ keine Zeit.", ["hattest", "hatte", "hatten"], 0, "du hattest."),
        GAP("Ihr ___ im Kino. (sein)", ["wart"], "ihr wart."),
        GAP("Sie ___ gestern einen Termin. (haben; sie = eine Frau)", ["hatte"], "sie hatte."),
        ORD("", ["Das", "Essen", "war", "lecker"], ["Das Essen war lecker"], "الفعل في التاني."),
        TRA("Schreibe in der Vergangenheit: Ich habe Hunger. → Ich ___ Hunger.", ["Ich hatte Hunger.", "hatte"], "haben ← hatte."),
        ERR("Gestern ich war im Kino.", ["Gestern war ich im Kino."], "الفعل في التاني."),
        TF("Das Präteritum von „sein“ ist „war“ für ich und er.", true, "ich war وer war."),
        TF("Zu „wir“ passt „hatte“.", false, "wir hatten.")
      ]
    }
  ];
})();
window.A1_GRAMMAR_SPREAD(Object.keys(window.A1_GRAMMAR).sort().flatMap(chapter => window.A1_GRAMMAR[chapter]));
