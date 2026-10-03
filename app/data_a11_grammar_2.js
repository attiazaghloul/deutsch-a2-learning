/* Detailed A1.1 grammar (chapters 3-4): explanations, tables, typical mistakes and
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

  window.A1_GRAMMAR[3] = [
    {
      id: "a1-k3-unbestimmt",
      t: "Unbestimmter und bestimmter Artikel", tAr: "أداة النكرة وأداة التعريف",
      summary: "Neue oder unbekannte Dinge haben den <b>unbestimmten Artikel</b> (<b>ein, ein, eine</b>). Bekannte Dinge haben den <b>bestimmten Artikel</b> (<b>der, das, die</b>). Im Plural gibt es keinen unbestimmten Artikel.",
      summaryAr: "الحاجات الجديدة أو الغير معروفة بتاخد أداة النكرة (ein وein وeine). والحاجات المعروفة بتاخد أداة التعريف (der وdas وdie). وفي الجمع مفيش أداة نكرة.",
      sections: [
        sec("1. ein oder der?", "ein ولا der؟",
          "Beim ersten Mal sagt man <b>ein/eine</b>. Danach ist die Sache bekannt, und man sagt <b>der/das/die</b>: <b>Das ist ein Hafen. Der Hafen ist groß.</b>",
          "أول مرة بنقول ein/eine. وبعد كده الحاجة بقت معروفة فبنقول der/das/die: Das ist ein Hafen. Der Hafen ist groß.",
          { table: { head: ["", "unbestimmt (neu)", "bestimmt (bekannt)"], rows: [["maskulin", "ein Hafen", "der Hafen"], ["neutrum", "ein Hotel", "das Hotel"], ["feminin", "eine Brücke", "die Brücke"], ["Plural", "– Schiffe", "die Schiffe"]] },
            examples: [["Das ist ein Hotel. Das Hotel heißt „Linde“.", "ده فندق. الفندق اسمه Linde."], ["Das sind Schiffe. Die Schiffe sind im Hafen.", "دي سفن. السفن في الميناء."]] }),
        sec("2. Fragen und Antworten", "الأسئلة والإجابات",
          "<b>Was ist das?</b> – <b>Das ist ein/eine …</b> (neu). <b>Ist das eine Kirche?</b> – <b>Ja, das ist die Michaeliskirche.</b> (jetzt bekannt). Im Plural: <b>Das sind …</b>",
          "Was ist das؟ – Das ist ein/eine … (جديد). Ist das eine Kirche؟ – Ja, das ist die Michaeliskirche. (بقت معروفة). وفي الجمع: Das sind …",
          { examples: [["Ist das ein Bus? – Ja, das ist ein Bus.", "ده أتوبيس؟ – أيوه ده أتوبيس."]] }),
        sec("3. Nur eine Sache oder Name", "حاجة واحدة بعينها",
          "Einmalige Dinge haben meist den bestimmten Artikel: <b>der Hafen von Hamburg, das Rathaus</b>. Bei Namen und Städten steht kein Artikel: <b>Hamburg, Berlin</b>.",
          "الحاجات الفريدة غالبًا بتاخد أداة التعريف: der Hafen von Hamburg. والأسماء والمدن من غير أداة: Hamburg.",
          { examples: [["Das ist der Hafen von Hamburg.", "ده ميناء هامبورغ."]] })
      ],
      pitfalls: [
        P("Das ist ein Brücke.", "Das ist eine Brücke.", "Brücke مؤنث ← eine."),
        P("Das sind eine Schiffe.", "Das sind Schiffe.", "في الجمع مفيش ein/eine."),
        P("Das ist der Hafen. Der Hafen ist ein groß.", "Der Hafen ist groß.", "الصفة بعد sein من غير ein.")
      ],
      exercises: [
        C("Das ist ___ Hafen. (neu im Text)", ["ein", "eine", "der"], 0, "Hafen مذكر وجديد ← ein."),
        C("Das ist ___ Brücke. Wir kennen sie schon.", ["die", "eine", "das"], 0, "معروفة ومؤنثة ← die."),
        C("Ist das ___ Hotel? – Ja, das ist das Hotel „Linde“.", ["ein", "eine", "das"], 0, "السؤال عن حاجة جديدة ← ein."),
        C("Das sind ___ Schiffe. (unbestimmt, Plural)", ["– (kein Artikel)", "eine", "ein"], 0, "في الجمع مفيش أداة نكرة."),
        GAP("Das ist ___ Kirche. (unbestimmt)", ["eine"], "Kirche مؤنث ← eine."),
        GAP("Ich sehe ein Hotel. ___ Hotel ist groß. (bestimmt)", ["Das"], "بقى معروف ← das Hotel."),
        ORD("", ["Das", "ist", "ein", "Bahnhof"], ["Das ist ein Bahnhof"], "ein + اسم مذكر."),
        TRA("Antworte mit Ja: Ist das ein Bus? → ___", ["Ja, das ist ein Bus."], "Ja, das ist ein Bus."),
        ERR("Das ist ein Brücke.", ["Das ist eine Brücke."], "Brücke مؤنث: eine."),
        TF("Zu einem Nomen im Plural sagt man „ein“.", false, "في الجمع مفيش ein."),
        TF("Bekannte Dinge haben den bestimmten Artikel.", true, "المعروف ← der/das/die.")
      ]
    },
    {
      id: "a1-k3-kein",
      t: "Negation: kein, keine und nicht", tAr: "النفي: kein وkeine وnicht",
      summary: "<b>kein/keine</b> verneint ein Nomen mit <b>ein/eine</b> oder ohne Artikel. <b>nicht</b> verneint alles andere: Verben, Adjektive, bestimmte Nomen und Namen.",
      summaryAr: "kein/keine بتنفي اسم معاه ein/eine أو من غير أداة. وnicht بتنفي أي حاجة تانية: الأفعال والصفات والأسماء المعرّفة والأسماء العلم.",
      sections: [
        sec("1. kein, kein, keine", "kein وkein وkeine",
          "<b>kein</b> hat dieselben Endungen wie <b>ein</b>: <b>kein Hafen, kein Hotel, keine Brücke, keine Schiffe</b>. Im Plural gibt es nur <b>keine</b>.",
          "kein ليها نفس نهايات ein: kein Hafen وkein Hotel وkeine Brücke وkeine Schiffe. وفي الجمع بس keine.",
          { table: { head: ["", "positiv", "negativ"], rows: [["maskulin", "Das ist ein Bahnhof.", "Das ist <b>kein</b> Bahnhof."], ["neutrum", "Das ist ein Hotel.", "Das ist <b>kein</b> Hotel."], ["feminin", "Das ist eine Straße.", "Das ist <b>keine</b> Straße."], ["Plural", "Das sind Autos.", "Das sind <b>keine</b> Autos."]] },
            examples: [["Das ist kein Auto, das ist ein Bus.", "دي مش عربية، دي أتوبيس."]] }),
        sec("2. nicht", "النفي بـ nicht",
          "<b>nicht</b> steht bei Verben, Adjektiven, Namen und bestimmten Nomen: <b>Das Hotel ist nicht groß. Das ist nicht der Bahnhof. Ich komme nicht aus Spanien.</b> Bei Adjektiven steht <b>nicht</b> davor.",
          "nicht مع الأفعال والصفات والأسماء المعرّفة: Das Hotel ist nicht groß. Das ist nicht der Bahnhof. Ich komme nicht aus Spanien. ومع الصفات nicht بتيجي قبلها.",
          { examples: [["Das Hotel ist nicht neu.", "الفندق مش جديد."], ["Das ist nicht der Hafen.", "ده مش الميناء."]] }),
        sec("3. kein oder nicht?", "kein ولا nicht؟",
          "Frage dich: Steht dort <b>ein/eine</b> oder gar kein Artikel? Dann <b>kein</b>. Steht dort <b>der/das/die</b>, ein Adjektiv oder ein Verb? Dann <b>nicht</b>.",
          "اسأل نفسك: فيه ein/eine أو من غير أداة؟ يبقى kein. فيه der/das/die أو صفة أو فعل؟ يبقى nicht.",
          { examples: [["Ich habe keine Zeit.", "معنديش وقت."], ["Das ist nicht mein Bus.", "ده مش الأتوبيس بتاعي."]] })
      ],
      pitfalls: [
        P("Das ist nicht ein Auto.", "Das ist kein Auto.", "مع ein بنستخدم kein."),
        P("Das ist nicht Hotel.", "Das ist kein Hotel.", "الاسم من غير أداة ← kein."),
        P("Das Hotel ist kein groß.", "Das Hotel ist nicht groß.", "مع الصفة بنستخدم nicht.")
      ],
      exercises: [
        C("Das ist ___ Bahnhof. Das ist das Rathaus.", ["kein", "keine", "nicht"], 0, "Bahnhof مذكر ← kein."),
        C("Das ist ___ Brücke.", ["keine", "kein", "nicht"], 0, "Brücke مؤنث ← keine."),
        C("Das sind ___ Autos.", ["keine", "kein", "nicht"], 0, "الجمع ← keine."),
        C("Das Hotel ist ___ groß.", ["nicht", "kein", "keine"], 0, "مع الصفة ← nicht."),
        GAP("Ich habe ___ Zeit. (die Zeit)", ["keine"], "Zeit مؤنث ← keine."),
        GAP("Das ist ___ Hotel. (das Hotel)", ["kein"], "Hotel محايد ← kein."),
        ORD("", ["Das", "sind", "keine", "Schiffe"], ["Das sind keine Schiffe"], "keine + اسم جمع."),
        TRA("Verneine: Das ist ein Bus. → ___", ["Das ist kein Bus."], "ein ← kein."),
        TRA("Verneine: Ich komme aus Spanien. → ___", ["Ich komme nicht aus Spanien."], "الفعل والبلد ← nicht."),
        ERR("Das ist nicht ein Auto.", ["Das ist kein Auto."], "ein ← kein."),
        TF("„kein“ verneint ein Nomen mit „ein/eine“ oder ohne Artikel.", true, "كده بنستخدم kein."),
        TF("Im Plural sagt man „kein“.", false, "في الجمع keine.")
      ]
    },
    {
      id: "a1-k3-imperativ",
      t: "Imperativ mit Sie", tAr: "فعل الأمر مع Sie",
      summary: "Mit dem <b>Imperativ</b> gibt man Anweisungen und beschreibt Wege. Mit <b>Sie</b> ist die Form: <b>Infinitiv + Sie</b>. Das Verb steht auf <b>Position 1</b>.",
      summaryAr: "فعل الأمر بنستخدمه للتعليمات ووصف الطريق. مع Sie الصيغة هي: المصدر + Sie. والفعل في الموضع الأول.",
      sections: [
        sec("1. So bildet man den Imperativ", "إزاي نكوّن الأمر",
          "<b>Infinitiv</b> (gehen) + <b>Sie</b> → <b>Gehen Sie!</b> Die Form ist gleich wie bei der Frage, aber ohne Fragezeichen und mit Ausrufezeichen oder Punkt.",
          "المصدر (gehen) + Sie ← Gehen Sie! الشكل زي السؤال بس من غير علامة استفهام.",
          { table: { head: ["Infinitiv", "Imperativ (Sie)", "Beispiel"], rows: [["gehen", "Gehen Sie", "Gehen Sie geradeaus."], ["fahren", "Fahren Sie", "Fahren Sie mit der U-Bahn."], ["nehmen", "Nehmen Sie", "Nehmen Sie den Bus Nr. 5."], ["bleiben", "Bleiben Sie", "Bleiben Sie hier."], ["kommen", "Kommen Sie", "Kommen Sie bitte mit."]] },
            examples: [["Gehen Sie hier links.", "امشي من هنا شمال."]] }),
        sec("2. Wege beschreiben", "وصف الطرق",
          "Für Wegbeschreibungen braucht man: <b>geradeaus, rechts, links, bis zur Brücke, dann, an der Kirche</b>. Mit <b>bitte</b> klingt der Imperativ höflicher.",
          "لوصف الطريق بنحتاج: geradeaus وrechts وlinks وbis zur Brücke وdann وan der Kirche. وبـ bitte الأمر بيبقى أكتر أدب.",
          { examples: [["Gehen Sie bis zur Brücke und dann rechts.", "امشي لحد الكوبري وبعدين يمين."], ["Fahren Sie bitte bis zum Bahnhof.", "من فضلك سوق لحد المحطة."]] }),
        sec("3. Position 1", "الموضع الأول",
          "Das Verb steht immer vorn: <b>Gehen Sie links.</b> (nicht: Sie gehen links). Eine Ortsangabe oder „bitte“ kann danach stehen.",
          "الفعل دايمًا في الأول: Gehen Sie links. (مش Sie gehen links).",
          { examples: [["Bitte gehen Sie hier rechts.", "من فضلك امشي هنا يمين."]] })
      ],
      pitfalls: [
        P("Sie gehen geradeaus!", "Gehen Sie geradeaus!", "في الأمر الفعل في الأول."),
        P("Geh Sie geradeaus!", "Gehen Sie geradeaus!", "مع Sie بنستخدم المصدر كامل: Gehen Sie."),
        P("Gehen geradeaus Sie!", "Gehen Sie geradeaus!", "الترتيب: فعل + Sie + باقي الكلام.")
      ],
      exercises: [
        C("___ Sie geradeaus! (gehen)", ["Gehen", "Gehe", "Geht"], 0, "الأمر مع Sie: Gehen Sie."),
        C("___ Sie bitte hier rechts. (fahren)", ["Fahren", "Fahrt", "Fährt"], 0, "Fahren Sie."),
        C("Beim Imperativ mit „Sie“ steht das Verb auf Position ...", ["1", "2", "3"], 0, "الفعل في الموضع الأول."),
        GAP("___ Sie bitte den Bus Nummer 5. (nehmen)", ["Nehmen"], "Nehmen Sie."),
        GAP("___ Sie hier links! (gehen)", ["Gehen"], "Gehen Sie."),
        ORD("", ["Gehen", "Sie", "bis", "zur", "Brücke"], ["Gehen Sie bis zur Brücke"], "فعل + Sie + باقي الجملة."),
        ORD("", ["Fahren", "Sie", "mit", "der", "U-Bahn"], ["Fahren Sie mit der U-Bahn"], "فعل + Sie + باقي الجملة."),
        TRA("Mache einen Imperativ: Sie gehen geradeaus. → ___", ["Gehen Sie geradeaus."], "الفعل في الأول."),
        ERR("Sie gehen geradeaus!", ["Gehen Sie geradeaus!"], "في الأمر الفعل في الأول."),
        TF("Im Imperativ mit Sie bleibt „Sie“ im Satz.", true, "Sie بتفضل بعد الفعل."),
        TF("Man sagt: „Sie gehen links!“ als Imperativ.", false, "الصحيح: Gehen Sie links!")
      ]
    },
    {
      id: "a1-k3-adjektiv",
      t: "Adjektiv mit sein", tAr: "الصفة مع sein",
      summary: "Adjektive beschreiben Personen und Dinge. Nach <b>sein</b> (ist, sind) steht das Adjektiv <b>ohne Endung</b>: <b>Der Turm ist hoch. Die Brücke ist lang.</b>",
      summaryAr: "الصفات بتوصف الأشخاص والأشياء. بعد sein (ist وsind) الصفة بتيجي من غير نهاية: Der Turm ist hoch. Die Brücke ist lang.",
      sections: [
        sec("1. Struktur", "التركيب",
          "<b>Nomen + sein + (sehr) + Adjektiv</b>: <b>Der Hafen ist groß. Das Rathaus ist sehr schön.</b> Das Adjektiv bleibt immer gleich, egal ob maskulin, neutrum, feminin oder Plural.",
          "الاسم + sein + (sehr) + صفة. الصفة بتفضل ثابتة سواء المذكر أو المحايد أو المؤنث أو الجمع.",
          { table: { head: ["Nomen", "sein", "Adjektiv"], rows: [["Der Turm", "ist", "hoch"], ["Das Hotel", "ist", "neu"], ["Die Brücke", "ist", "lang"], ["Die Schiffe", "sind", "groß"]] },
            examples: [["Das Wetter ist schön.", "الجو جميل."]] }),
        sec("2. Gegensätze", "الأضداد",
          "Zu vielen Adjektiven gibt es Gegensätze. Lerne sie zusammen: <b>alt – neu, groß – klein, lang – kurz, kalt – warm, schnell – langsam, früh – spät, richtig – falsch, krank – gesund, höflich – unhöflich</b>.",
          "كتير من الصفات ليها أضداد. احفظهم مع بعض.",
          { table: { head: ["Adjektiv", "Gegensatz"], rows: [["alt", "neu"], ["groß", "klein"], ["lang", "kurz"], ["kalt", "warm"], ["schnell", "langsam"], ["früh", "spät"], ["krank", "gesund"], ["höflich", "unhöflich"]] },
            examples: [["Das Haus ist alt, das Hotel ist neu.", "البيت قديم والفندق جديد."]] }),
        sec("3. sehr und nicht", "sehr وnicht",
          "<b>sehr</b> verstärkt ein Adjektiv: <b>sehr schön</b>. <b>nicht</b> verneint es: <b>nicht schön</b>. Beide stehen vor dem Adjektiv.",
          "sehr بتقوّي الصفة: sehr schön. وnicht بتنفيها: nicht schön. والاتنين قبل الصفة.",
          { examples: [["Die Kirche ist sehr hoch.", "الكنيسة عالية جدًا."], ["Das Essen ist nicht teuer.", "الأكل مش غالي."]] })
      ],
      pitfalls: [
        P("Das Haus ist große.", "Das Haus ist groß.", "بعد sein الصفة من غير نهاية."),
        P("Der Turm hoch ist.", "Der Turm ist hoch.", "الفعل في الموضع التاني."),
        P("Die Brücke ist lange.", "Die Brücke ist lang.", "lang للطول، lange للوقت.")
      ],
      exercises: [
        C("Das Haus ist ___.", ["groß", "große", "großes"], 0, "بعد sein من غير نهاية."),
        C("Gegenteil von „alt“ (bei Sachen):", ["neu", "jung", "kurz"], 0, "alt ≠ neu."),
        C("Gegenteil von „kalt“:", ["warm", "klein", "lang"], 0, "kalt ≠ warm."),
        C("Das Auto ist ___ schnell.", ["sehr", "viel", "sein"], 0, "sehr قبل الصفة."),
        GAP("Der Turm ist nicht klein, er ist ___.", ["groß"], "ضد klein هو groß."),
        GAP("Die Straße ist nicht kurz, sie ist ___.", ["lang"], "ضد kurz هو lang."),
        ORD("", ["Die", "Brücke", "ist", "sehr", "lang"], ["Die Brücke ist sehr lang"], "اسم + ist + sehr + صفة."),
        TRA("Schreibe mit „sein“: das Hotel – klein → ___", ["Das Hotel ist klein."], "الاسم + ist + الصفة."),
        ERR("Das Haus ist große.", ["Das Haus ist groß."], "بعد sein من غير نهاية."),
        TF("Nach „sein“ bekommt das Adjektiv keine Endung.", true, "الصفة من غير نهاية."),
        TF("Man sagt: „Das Rathaus ist alte.“", false, "الصحيح: alt.")
      ]
    }
  ];

  window.A1_GRAMMAR[4] = [
    {
      id: "a1-k4-akkusativ",
      t: "Akkusativ und Verben mit Akkusativ", tAr: "حالة Akkusativ والأفعال اللي معاها",
      summary: "Viele Verben brauchen eine Ergänzung im <b>Akkusativ</b>: kaufen, essen, trinken, brauchen, nehmen, haben, mögen. Nur der <b>maskuline</b> Artikel ändert sich: <b>der → den, ein → einen, kein → keinen</b>.",
      summaryAr: "أفعال كتير بتحتاج مفعول به في حالة Akkusativ: kaufen وessen وtrinken وbrauchen وnehmen وhaben وmögen. والمذكر بس هو اللي بيتغيّر: der ← den وein ← einen وkein ← keinen.",
      sections: [
        sec("1. Nominativ und Akkusativ", "Nominativ وAkkusativ",
          "Das Subjekt steht im <b>Nominativ</b> (Wer? Was?). Die Sache, die man kauft, isst oder braucht, steht im <b>Akkusativ</b> (Wen? Was?). Bei <b>feminin</b>, <b>neutrum</b> und <b>Plural</b> sieht der Akkusativ aus wie der Nominativ.",
          "الفاعل في Nominativ (مين؟ إيه؟). والحاجة اللي بنشتريها أو بناكلها أو بنحتاجها في Akkusativ. المؤنث والمحايد والجمع شكلهم في Akkusativ زي Nominativ.",
          { table: { head: ["", "Nominativ", "Akkusativ"], rows: [["maskulin", "der / ein / kein Käse", "den / <b>einen</b> / <b>keinen</b> Käse"], ["neutrum", "das / ein / kein Brot", "das / ein / kein Brot"], ["feminin", "die / eine / keine Gurke", "die / eine / keine Gurke"], ["Plural", "die / – / keine Tomaten", "die / – / keine Tomaten"]] },
            examples: [["Ich brauche einen Salat, eine Gurke und ein Brot.", "محتاج خس وخيارة وعيش."]] }),
        sec("2. Wichtige Verben mit Akkusativ", "أهم الأفعال مع Akkusativ",
          "<b>kaufen, essen, trinken, brauchen, nehmen, haben, mögen, möchten, machen, finden, kochen</b>. Sie verlangen ein Objekt im Akkusativ: <b>Ich koche eine Suppe.</b>",
          "kaufen وessen وtrinken وbrauchen وnehmen وhaben وmögen وmöchten وmachen وfinden وkochen. بتطلب مفعول به في Akkusativ.",
          { examples: [["Wir haben keinen Käse mehr.", "معندناش جبنة تاني."], ["Er isst den Kuchen.", "هو بياكل الكيك."]] }),
        sec("3. Merke: nur maskulin ändert sich", "فاكر: المذكر بس بيتغيّر",
          "Lerne die Nomen mit Artikel – sonst weißt du nicht, ob du <b>einen</b> oder <b>ein</b> brauchst. Bei Plural und ohne Artikel (z. B. Reis, Milch) steht keine Endung.",
          "احفظ الأسماء مع الأرتيكل. وفي الجمع ومن غير أداة مفيش نهاية.",
          { examples: [["Ich esse Reis und trinke Milch.", "باكل رز وبشرب لبن."]] })
      ],
      pitfalls: [
        P("Ich kaufe ein Apfel.", "Ich kaufe einen Apfel.", "Apfel مذكر ← einen في Akkusativ."),
        P("Ich brauche der Reis.", "Ich brauche den Reis.", "بعد brauchen ← den."),
        P("Wir haben kein Käse.", "Wir haben keinen Käse.", "Käse مذكر ← keinen.")
      ],
      exercises: [
        C("Ich kaufe ___ Apfel.", ["einen", "ein", "eine"], 0, "Apfel مذكر ← einen."),
        C("Ich esse ___ Banane.", ["eine", "einen", "ein"], 0, "Banane مؤنث ما بيتغيرش."),
        C("Wir haben ___ Käse mehr.", ["keinen", "kein", "keine"], 0, "Käse مذكر ← keinen."),
        C("Ich brauche ___ Brot.", ["ein", "einen", "eine"], 0, "Brot محايد ما بيتغيرش."),
        GAP("Ich nehme ___ Schinken. (der Schinken)", ["den"], "مذكر ← den."),
        GAP("Er kauft ___ Tomaten. (Plural, Negation)", ["keine"], "الجمع ← keine."),
        ORD("", ["Ich", "esse", "einen", "Salat"], ["Ich esse einen Salat"], "فاعل + فعل + مفعول به."),
        TRA("Schreibe mit „essen“: der Kuchen → Ich esse ___", ["Ich esse den Kuchen.", "den Kuchen"], "der ← den."),
        ERR("Ich kaufe ein Apfel.", ["Ich kaufe einen Apfel."], "Apfel مذكر ← einen."),
        TF("Im Akkusativ ändert sich nur der maskuline Artikel.", true, "المذكر بس."),
        TF("„Ich brauche der Reis.“ ist richtig.", false, "الصحيح: den Reis.")
      ]
    },
    {
      id: "a1-k4-vokalwechsel",
      t: "Verben mit Vokalwechsel (essen, nehmen …)", tAr: "أفعال بتغيّر حرف العلّة",
      summary: "Einige wichtige Verben ändern bei <b>du</b> und <b>er/sie/es</b> den Vokal: <b>essen → du isst, er isst; nehmen → du nimmst, er nimmt; schlafen → du schläfst</b>.",
      summaryAr: "أفعال مهمة بتغيّر حرف العلّة مع du وer/sie/es: essen ← du isst وer isst. nehmen ← du nimmst وer nimmt. schlafen ← du schläfst.",
      sections: [
        sec("1. Die Formen", "الصيغ",
          "Bei <b>ich, wir, ihr, sie/Sie</b> bleibt der Stamm gleich. Nur bei <b>du</b> und <b>er/sie/es</b> ändert er sich: <b>e → i</b> (essen, nehmen, helfen, geben), <b>a → ä</b> (schlafen, waschen).",
          "مع ich وwir وihr وsie/Sie الجذر ثابت. بس مع du وer/sie/es بيتغير: e ← i (essen وnehmen وhelfen وgeben) وa ← ä (schlafen وwaschen).",
          { table: { head: ["Person", "essen", "nehmen", "schlafen", "mögen"], rows: [["ich", "esse", "nehme", "schlafe", "mag"], ["du", "isst", "nimmst", "schläfst", "magst"], ["er / sie / es", "isst", "nimmt", "schläft", "mag"], ["wir", "essen", "nehmen", "schlafen", "mögen"], ["ihr", "esst", "nehmt", "schlaft", "mögt"], ["sie / Sie", "essen", "nehmen", "schlafen", "mögen"]] },
            examples: [["Er isst gern Fisch.", "هو بيحب ياكل سمك."], ["Du nimmst einen Tee.", "إنت هتاخد شاي."]] }),
        sec("2. Besonderheiten", "حاجات خاصة",
          "<b>nehmen</b> ändert auch den Konsonanten (<b>h → m</b>): du nimmst, er nimmt. <b>helfen</b>: du hilfst, er hilft. <b>geben</b>: du gibst, er gibt. <b>essen</b>: du isst, er isst (ein <b>s</b> fällt weg).",
          "في nehmen بيتغير الحرف الساكن كمان (h ← m): du nimmst. في essen بيتحذف s: du isst.",
          { examples: [["Er hilft mir beim Kochen.", "هو بيساعدني في الطبخ."], ["Sie gibt dem Kellner Trinkgeld.", "هي بتدي الجرسون بقشيش."]] }),
        sec("3. Wie lernt man sie?", "إزاي نحفظها؟",
          "Lerne diese Verben immer mit der <b>er-Form</b>: <b>essen, er isst – nehmen, er nimmt – schlafen, er schläft – helfen, er hilft – waschen, er wäscht</b>.",
          "احفظ الأفعال دي دايمًا مع صيغة er.",
          { examples: [["waschen, er wäscht", "يغسل"]] })
      ],
      pitfalls: [
        P("Er esst Fisch.", "Er isst Fisch.", "essen مع er ← isst."),
        P("Du nehmst einen Tee.", "Du nimmst einen Tee.", "nehmen مع du ← nimmst."),
        P("Sie schlaft lange.", "Sie schläft lange.", "schlafen مع sie ← schläft.")
      ],
      exercises: [
        C("Er ___ gern Fisch. (essen)", ["isst", "esst", "esse"], 0, "essen ← er isst."),
        C("Du ___ ein Brötchen. (nehmen)", ["nimmst", "nehmst", "nimmt"], 0, "nehmen ← du nimmst."),
        C("Sie ___ lange. (schlafen)", ["schläft", "schlaft", "schlafen"], 0, "schlafen ← sie schläft."),
        GAP("Er ___ mir. (helfen)", ["hilft"], "helfen ← er hilft."),
        GAP("Du ___ das Obst. (waschen)", ["wäschst"], "waschen ← du wäschst."),
        GAP("Er ___ Schokolade. (mögen)", ["mag"], "mögen ← er mag."),
        ORD("", ["Er", "nimmt", "einen", "Kaffee"], ["Er nimmt einen Kaffee"], "فاعل + فعل + مفعول."),
        TRA("Schreibe mit „er“: Ich esse Brot. → ___", ["Er isst Brot."], "ich esse ← er isst."),
        ERR("Du nehmst einen Tee.", ["Du nimmst einen Tee."], "nehmen ← du nimmst."),
        TF("Bei „wir“ ändert sich der Vokal von „essen“.", false, "wir essen: من غير تغيير."),
        TF("Zu „er“ passt „isst“.", true, "er isst.")
      ]
    },
    {
      id: "a1-k4-moechten",
      t: "mögen und möchten", tAr: "mögen وmöchten",
      summary: "<b>mögen</b> heißt „gern haben“: <b>Ich mag Schokolade.</b> <b>möchten</b> ist ein höflicher Wunsch, z. B. beim Bestellen: <b>Ich möchte einen Kaffee.</b>",
      summaryAr: "mögen معناها بحب: Ich mag Schokolade. وmöchten رغبة بأدب مثلًا في الطلب: Ich möchte einen Kaffee.",
      sections: [
        sec("1. Die Formen", "الصيغ",
          "<b>mögen</b> ist unregelmäßig: ich <b>mag</b>, du <b>magst</b>, er <b>mag</b>, wir <b>mögen</b>, ihr <b>mögt</b>, sie <b>mögen</b>. <b>möchten</b>: ich <b>möchte</b>, du <b>möchtest</b>, er <b>möchte</b>, wir <b>möchten</b>, ihr <b>möchtet</b>, sie <b>möchten</b>.",
          "mögen غير منتظم، وmöchten له صيغ خاصة. لاحظ: ich/er möchte (من غير t) وwir/sie möchten.",
          { table: { head: ["Person", "mögen", "möchten"], rows: [["ich", "mag", "möchte"], ["du", "magst", "möchtest"], ["er / sie / es", "mag", "möchte"], ["wir", "mögen", "möchten"], ["ihr", "mögt", "möchtet"], ["sie / Sie", "mögen", "möchten"]] },
            examples: [["Ich mag Pizza.", "بحب البيتزا."], ["Was möchten Sie trinken?", "تحب تشرب إيه؟"]] }),
        sec("2. Wann welches Verb?", "إمتى أستخدم كل فعل؟",
          "<b>mögen</b> = Vorliebe: <b>Ich mag Fisch. Ich mag keinen Kaffee.</b> <b>möchten</b> = Wunsch jetzt, höflich: <b>Ich möchte einen Tee, bitte. Möchten Sie noch etwas?</b>",
          "mögen = حاجة بتحبها بشكل عام. möchten = رغبة دلوقتي بأدب (في الطلب).",
          { examples: [["Ich mag keinen Fisch.", "مابحبش السمك."], ["Ich möchte bitte ein Wasser.", "عايز مية من فضلك."]] }),
        sec("3. möchten im Satz", "möchten في الجملة",
          "Nach <b>möchten</b> steht ein Nomen im Akkusativ (<b>Ich möchte einen Kaffee</b>) oder am Satzende ein Infinitiv (<b>Ich möchte Deutsch lernen</b>).",
          "بعد möchten إما اسم في Akkusativ أو مصدر في آخر الجملة.",
          { examples: [["Ich möchte Deutsch lernen.", "عايز أتعلم ألماني."]] })
      ],
      pitfalls: [
        P("Er möchtet einen Tee.", "Er möchte einen Tee.", "مع er النهاية من غير t: möchte."),
        P("Ich mag möchte Pizza.", "Ich mag Pizza. / Ich möchte Pizza.", "فعل واحد بس: mag أو möchte."),
        P("Du mögst Fisch.", "Du magst Fisch.", "mögen مع du ← magst.")
      ],
      exercises: [
        C("Ich ___ einen Kaffee. (höflich bestellen)", ["möchte", "mag", "mögen"], 0, "للطلب بأدب ← möchte."),
        C("Er ___ Schokolade sehr gern.", ["mag", "möchte", "magst"], 0, "الحاجة المحبوبة ← mag."),
        C("Wir ___ bitte zwei Tee.", ["möchten", "mögen", "möchte"], 0, "wir möchten."),
        C("Du ___ keinen Fisch. (nicht gern)", ["magst", "möchtest", "mag"], 0, "du magst."),
        GAP("Ihr ___ Pizza. (mögen)", ["mögt"], "ihr mögt."),
        GAP("Was ___ Sie trinken? (möchten)", ["möchten"], "Sie möchten."),
        ORD("", ["Ich", "möchte", "einen", "Tee"], ["Ich möchte einen Tee"], "فاعل + möchte + مفعول."),
        TRA("Sage höflich: Ich will einen Kaffee. → ___", ["Ich möchte einen Kaffee."], "للأدب ← möchte."),
        ERR("Er möchtet einen Tee.", ["Er möchte einen Tee."], "er möchte."),
        TF("„Ich mag Pizza“ bedeutet: Ich habe Pizza gern.", true, "mögen = يحب."),
        TF("Zu „er“ passt „möchtet“.", false, "er möchte.")
      ]
    },
    {
      id: "a1-k4-position",
      t: "Positionen im Satz", tAr: "مواضع الكلمات في الجملة",
      summary: "Das konjugierte <b>Verb</b> steht im Aussagesatz immer auf <b>Position 2</b>. Auf Position 1 steht das Subjekt – oder eine Zeitangabe wie <b>morgens, mittags, am Samstag</b>. Dann steht das Subjekt nach dem Verb.",
      summaryAr: "الفعل المصرّف في الجملة الخبرية دايمًا في الموضع التاني. وفي الموضع الأول إما الفاعل أو كلمة وقت زي morgens وmittags وam Samstag. ساعتها الفاعل بيجي بعد الفعل.",
      sections: [
        sec("1. Verb auf Position 2", "الفعل في الموضع التاني",
          "<b>Ich esse morgens Müsli.</b> – Position 1: <i>Ich</i>, Position 2: <i>esse</i>. Alles andere kommt danach. Die Zeitangabe kann auch vorn stehen: <b>Morgens esse ich Müsli.</b>",
          "Ich esse morgens Müsli. – الموضع 1: Ich، الموضع 2: esse. وكلمة الوقت ممكن تيجي في الأول: Morgens esse ich Müsli.",
          { table: { head: ["Position 1", "Position 2 (Verb)", "Rest"], rows: [["Ich", "esse", "morgens Müsli."], ["Morgens", "esse", "ich Müsli."], ["Am Samstag", "koche", "ich Suppe."], ["Wir", "trinken", "mittags Tee."]] },
            examples: [["Mittags esse ich oft Reis.", "الضهر باكل رز كتير."]] }),
        sec("2. Fragen", "الأسئلة",
          "Bei der <b>Ja-/Nein-Frage</b> steht das Verb auf Position 1: <b>Isst du gern Fisch?</b> Bei der <b>W-Frage</b> steht das W-Wort auf Position 1 und das Verb auf Position 2: <b>Was isst du gern?</b>",
          "في سؤال نعم/لا الفعل في الأول. وفي سؤال W كلمة الاستفهام في الأول والفعل في التاني.",
          { examples: [["Was trinkst du zum Frühstück?", "بتشرب إيه على الفطار؟"]] }),
        sec("3. Zeit und Ort", "الزمان والمكان",
          "Zeitangaben (heute, morgens, am Montag) und Ortsangaben (im Supermarkt) können auf Position 1 stehen. Dann bleibt das Verb auf Position 2 und das Subjekt rutscht <b>hinter</b> das Verb.",
          "كلمات الزمان والمكان ممكن تيجي في الأول. ساعتها الفعل يفضل في التاني والفاعل يتحرك بعده.",
          { examples: [["Im Supermarkt kaufe ich Brot.", "في السوبر ماركت باشتري عيش."]] })
      ],
      pitfalls: [
        P("Morgens ich esse Müsli.", "Morgens esse ich Müsli.", "الفعل في الموضع التاني ثم الفاعل."),
        P("Ich morgens esse Müsli.", "Ich esse morgens Müsli.", "الفعل مباشرة بعد الفاعل."),
        P("Am Samstag ich koche.", "Am Samstag koche ich.", "بعد الزمن في الأول يجي الفعل.")
      ],
      exercises: [
        C("Morgens ___ ich Müsli.", ["esse", "essen", "isst"], 0, "الفعل في التاني ومع ich: esse."),
        C("Wo steht das Verb im Aussagesatz?", ["Position 2", "Position 1", "am Ende"], 0, "في الموضع التاني."),
        C("Welcher Satz ist richtig?", ["Am Samstag koche ich.", "Am Samstag ich koche.", "Ich am Samstag koche."], 0, "الفعل في التاني."),
        GAP("Mittags ___ ich Reis. (essen)", ["esse"], "الموضع التاني: esse."),
        GAP("Am Nachmittag ___ wir Kuchen. (essen)", ["essen"], "wir essen."),
        ORD("", ["Morgens", "trinke", "ich", "Tee"], ["Morgens trinke ich Tee"], "وقت + فعل + فاعل."),
        ORD("", ["Ich", "trinke", "morgens", "Tee"], ["Ich trinke morgens Tee"], "فاعل + فعل + وقت."),
        TRA("Beginne mit „Abends“: Ich esse Suppe. → ___", ["Abends esse ich Suppe."], "وقت + فعل + فاعل."),
        ERR("Abends ich esse Suppe.", ["Abends esse ich Suppe."], "الفعل في التاني."),
        TF("Wenn eine Zeitangabe auf Position 1 steht, steht das Subjekt nach dem Verb.", true, "كده بيتبدّل الترتيب."),
        TF("Im Aussagesatz steht das Verb manchmal am Satzanfang.", false, "الفعل دايمًا في التاني.")
      ]
    }
  ];
})();
