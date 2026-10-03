/* Detailed A1.1 grammar (chapters 1-2): explanations, tables, typical mistakes and
   varied exercises. Rendered by js/18-grammar-practice.js (same format as B1_GRAMMAR).
   Exercise types: choice, truefalse, gap, order, transform, error. */
window.A1_GRAMMAR = window.A1_GRAMMAR || {};
/* The exercises are authored with the correct option first. This moves it to a varying,
   deterministic position so the right answer is not always the first button. */
window.A1_GRAMMAR_SPREAD = function (topics) {
  let counter = 0;
  topics.forEach(topic => topic.exercises.forEach(exercise => {
    if (exercise.type !== "choice") return;
    const target = (counter++ * 2 + 1) % exercise.o.length;
    if (target === exercise.a) return;
    const moved = exercise.o[target];
    exercise.o[target] = exercise.o[exercise.a];
    exercise.o[exercise.a] = moved;
    exercise.a = target;
  }));
};
(function () {
  const sec = (h, hAr, text, ar, extra = {}) => ({ h, hAr, text, ar, ...extra });
  const w = text => (/[\u0600-\u06ff]/.test(text) ? text : "القاعدة: " + text);
  const P = (wrong, right, ar) => ({ wrong, right, ar: w(ar) });
  const C = (q, o, a, why) => ({ type: "choice", q, o, a, why: w(why) });
  const TF = (q, a, why) => ({ type: "truefalse", q, a, why: w(why) });
  const GAP = (q, a, why) => ({ type: "gap", q, a: [].concat(a), why: w(why) });
  const ORD = (prefix, words, a, why) => ({ type: "order", prefix, words, a: [].concat(a), why: w(why) });
  const TRA = (q, a, why) => ({ type: "transform", q, a: [].concat(a), why: w(why) });
  const ERR = (q, a, why) => ({ type: "error", q, a: [].concat(a), why: w(why) });

  window.A1_GRAMMAR[1] = [
    {
      id: "a1-k1-verben",
      t: "Verben und Personalpronomen", tAr: "الأفعال والضمائر الشخصية",
      summary: "Im Deutschen ändert sich die Endung des Verbs je nach Person: <b>ich komme, du kommst, er kommt</b>. Das Verb <b>sein</b> ist unregelmäßig: ich bin, du bist, er ist.",
      summaryAr: "في الألماني نهاية الفعل بتتغير حسب الشخص: ich komme وdu kommst وer kommt. والفعل sein غير منتظم: ich bin وdu bist وer ist.",
      sections: [
        sec("1. Regelmäßige Verben im Präsens", "الأفعال المنتظمة في المضارع",
          "Man nimmt den <b>Stamm</b> (kommen → komm-) und hängt die Endung an: <b>-e, -st, -t, -en, -t, -en</b>. Zu <b>Sie</b> (formell) und zu <b>sie</b> (Plural) passt die Endung <b>-en</b>, genau wie zu <b>wir</b>.",
          "بناخد جذر الفعل (kommen → komm-) ونضيف النهاية: -e وst وt وen وt وen. مع Sie الرسمية ومع sie الجمع النهاية -en زي wir بالظبط.",
          { table: { head: ["Person", "kommen", "wohnen", "sein"], rows: [["ich", "komme", "wohne", "bin"], ["du", "kommst", "wohnst", "bist"], ["er / sie / es", "kommt", "wohnt", "ist"], ["wir", "kommen", "wohnen", "sind"], ["ihr", "kommt", "wohnt", "seid"], ["sie / Sie", "kommen", "wohnen", "sind"]] },
            examples: [["Ich komme aus Ägypten.", "أنا من مصر."], ["Du wohnst in Hamburg.", "إنت ساكن في هامبورغ."], ["Wir sind im Kurs.", "إحنا في الكورس."]] }),
        sec("2. heißen und buchstabieren", "heißen وbuchstabieren",
          "Auch Verben wie <b>heißen</b> und <b>buchstabieren</b> sind regelmäßig. Bei <b>heißen</b> bleibt das <b>ß</b>: du <b>heißt</b> (nicht „heißst“), er <b>heißt</b>.",
          "الأفعال heißen وbuchstabieren منتظمة برضه. في heißen الحرف ß بيفضل: du heißt وer heißt.",
          { examples: [["Wie heißt du? – Ich heiße Niklas.", "اسمك إيه؟ – اسمي نيكلاس."], ["Kannst du das buchstabieren?", "ممكن تهجّيها؟"]] }),
        sec("3. du, ihr oder Sie?", "du وihr أو Sie؟",
          "Zu Freunden und Kindern sagt man <b>du</b> (ein Mensch) und <b>ihr</b> (mehrere). Zu fremden Erwachsenen sagt man höflich <b>Sie</b> – für einen oder mehrere Menschen. Das Verb steht bei <b>Sie</b> in der Form wie bei <b>wir</b>.",
          "للأصحاب والأطفال بنقول du (واحد) وihr (أكتر من واحد). للكبار الغرباء بنقول Sie بأدب – لواحد أو أكتر. والفعل مع Sie بيبقى زي wir.",
          { examples: [["Wie heißt du?", "اسمك إيه؟ (لصديق)"], ["Wie heißen Sie?", "حضرتك اسمك إيه؟"], ["Woher kommt ihr?", "إنتو منين؟"]] })
      ],
      pitfalls: [
        P("Ich kommst aus Spanien.", "Ich komme aus Spanien.", "مع ich النهاية -e مش -st."),
        P("Er komme aus Polen.", "Er kommt aus Polen.", "مع er/sie/es النهاية -t."),
        P("Wie heißst du?", "Wie heißt du?", "في heißen مفيش s زيادة بعد ß.")
      ],
      exercises: [
        C("Ich ___ aus Spanien.", ["komme", "kommst", "kommt"], 0, "مع ich النهاية -e: ich komme."),
        C("Wie ___ du? (heißen)", ["heißt", "heiße", "heißen"], 0, "مع du النهاية -t بعد ß: du heißt."),
        C("Anna und Tom ___ in Köln.", ["wohnen", "wohnt", "wohne"], 0, "Anna und Tom = sie (جمع) ← wohnen."),
        GAP("Wir ___ in Berlin. (wohnen)", ["wohnen"], "مع wir النهاية -en."),
        GAP("Er ___ aus Japan. (kommen)", ["kommt"], "مع er النهاية -t."),
        GAP("Ihr ___ Studenten. (sein)", ["seid"], "ihr seid."),
        ORD("", ["Sie", "wohnt", "in", "Wien"], ["Sie wohnt in Wien"], "الفاعل ثم الفعل في الموضع التاني."),
        TRA("Schreibe mit „er“: Ich komme aus Polen. → ___", ["Er kommt aus Polen."], "من ich لـ er: komme ← kommt."),
        ERR("Du kommen aus Ägypten.", ["Du kommst aus Ägypten."], "مع du النهاية -st: du kommst."),
        TF("„Sie“ (formell) hat bei „wohnen“ die Form „wohnen“.", true, "Sie + wohnen زي wir wohnen."),
        TF("Zu „ihr“ sagt man „kommen“.", false, "ihr kommt (مش kommen).")
      ]
    },
    {
      id: "a1-k1-wfrage",
      t: "W-Fragen und Aussagesatz", tAr: "أسئلة W والجملة الخبرية",
      summary: "In <b>W-Fragen</b> steht das W-Wort auf Position 1 und das Verb auf <b>Position 2</b>. Auch im <b>Aussagesatz</b> steht das konjugierte Verb auf Position 2.",
      summaryAr: "في أسئلة W كلمة الاستفهام في الموضع الأول والفعل في الموضع التاني. وفي الجملة الخبرية كمان الفعل المصرّف في الموضع التاني.",
      sections: [
        sec("1. Die wichtigsten W-Wörter", "أهم كلمات الاستفهام",
          "Mit W-Wörtern fragt man nach Information: <b>Wer</b> (Person), <b>Wie</b> (Name, Art), <b>Was</b> (Sache), <b>Wo</b> (Ort), <b>Woher</b> (Herkunft), <b>Welche</b> (Auswahl).",
          "بكلمات الاستفهام بنسأل عن معلومة: Wer (مين) وWie (إزاي/اسم) وWas (إيه) وWo (فين) وWoher (منين) وWelche (أنهي).",
          { table: { head: ["W-Wort", "Frage", "Antwort"], rows: [["Wer", "Wer bist du?", "Ich bin Julia."], ["Wie", "Wie heißt du?", "Ich heiße Niklas."], ["Woher", "Woher kommst du?", "Aus Spanien."], ["Wo", "Wo wohnst du?", "In Zürich."], ["Welche", "Welche Sprachen sprichst du?", "Deutsch und Russisch."]] },
            examples: [["Woher kommen Sie, Frau Lang?", "حضرتك منين يا أستاذة لانج؟"]] }),
        sec("2. Position des Verbs", "موضع الفعل",
          "<b>W-Frage:</b> W-Wort (Position 1) + Verb (Position 2) + Subjekt. <b>Aussagesatz:</b> Subjekt (Position 1) + Verb (Position 2) + Rest. Das Verb steht immer auf Position 2.",
          "في سؤال W: كلمة الاستفهام (1) + الفعل (2) + الفاعل. في الجملة الخبرية: الفاعل (1) + الفعل (2) + الباقي. الفعل دايمًا في الموضع التاني.",
          { examples: [["Wo wohnst du? – Ich wohne in Zürich.", "إنت ساكن فين؟ – أنا ساكن في زيورخ."], ["Ich komme aus Frankfurt.", "أنا من فرانكفورت."]] }),
        sec("3. Kurze Antworten", "الإجابات المختصرة",
          "Im Gespräch antwortet man oft kurz, ohne ganzen Satz: <b>Woher kommst du? – Aus Frankfurt.</b> <b>Wo wohnst du? – In Hamburg.</b>",
          "في الكلام العادي بنجاوب غالبًا بإجابة قصيرة من غير جملة كاملة.",
          { examples: [["Woher kommst du? – Aus Spanien.", "إنت منين؟ – من إسبانيا."]] })
      ],
      pitfalls: [
        P("Wo kommst du?", "Woher kommst du?", "للسؤال عن البلد الأصلي بنقول Woher مش Wo."),
        P("Wie du heißt?", "Wie heißt du?", "الفعل في الموضع التاني: Wie heißt du?"),
        P("Ich in Hamburg wohne.", "Ich wohne in Hamburg.", "الفعل في الموضع التاني في الجملة الخبرية.")
      ],
      exercises: [
        C("___ kommst du? – Aus Ägypten.", ["Woher", "Wo", "Wie"], 0, "السؤال عن الأصل: Woher."),
        C("___ wohnen Sie? – In Köln.", ["Wo", "Woher", "Wer"], 0, "السؤال عن المكان: Wo."),
        C("___ heißt du? – Ich heiße Mia.", ["Wie", "Was", "Wo"], 0, "السؤال عن الاسم: Wie heißt du?"),
        GAP("___ Sprachen sprichst du? – Arabisch und Deutsch.", ["Welche"], "Sprachen جمع ← Welche."),
        ORD("", ["Woher", "kommt", "Frau", "Lang"], ["Woher kommt Frau Lang"], "W-Wort ثم الفعل ثم الفاعل."),
        ORD("", ["Ich", "wohne", "in", "Hamburg"], ["Ich wohne in Hamburg"], "الفعل في الموضع التاني."),
        TRA("Stelle die Frage: Ich komme aus Brasilien. → ___ ?", ["Woher kommst du?", "Woher kommen Sie?"], "السؤال عن الأصل: Woher kommst du?"),
        TRA("Frage nach dem Namen (formell): ___ ?", ["Wie heißen Sie?"], "رسمي: Wie heißen Sie?"),
        ERR("Wo kommst du?", ["Woher kommst du?"], "Woher للأصل."),
        TF("In einer W-Frage steht das Verb auf Position 2.", true, "W-Wort (1) + فعل (2)."),
        TF("„Wo“ fragt nach der Herkunft.", false, "Wo للمكان، Woher للأصل.")
      ]
    },
    {
      id: "a1-k1-pronomen",
      t: "Personalpronomen in Texten", tAr: "الضمائر الشخصية داخل النصوص",
      summary: "In Texten ersetzt man Namen und Nomen oft durch <b>er, sie, es</b> oder <b>sie</b> (Plural). So muss man das Wort nicht wiederholen.",
      summaryAr: "في النصوص بنستبدل الأسماء بـ er وsie وes أو sie (جمع) عشان ماكررش الكلمة.",
      sections: [
        sec("1. Welches Pronomen passt?", "أنهي ضمير يناسب؟",
          "Das Pronomen passt zum Nomen: <b>der Mann → er</b>, <b>die Frau → sie</b>, <b>das Kind → es</b>, <b>die Leute → sie</b> (Plural). Bei Personen richtet man sich nach dem Geschlecht, bei Dingen nach dem Artikel.",
          "الضمير بيتبع الاسم: der Mann → er وdie Frau → sie وdas Kind → es وdie Leute → sie (جمع).",
          { table: { head: ["Nomen", "Pronomen", "Beispiel"], rows: [["Carlos, der Mann", "er", "Carlos kommt aus Spanien. <b>Er</b> wohnt in Köln."], ["Yuki, die Frau", "sie", "Yuki kommt aus Japan. <b>Sie</b> lernt Deutsch."], ["das Kind", "es", "Das Kind ist drei. <b>Es</b> spielt."], ["Anna und Tom", "sie (Pl.)", "Anna und Tom wohnen in Wien. <b>Sie</b> sprechen Deutsch."]] },
            examples: [["Maria kommt aus Italien. Sie wohnt in Zürich.", "ماريا من إيطاليا. هي ساكنة في زيورخ."]] }),
        sec("2. sie oder Sie?", "sie أو Sie؟",
          "<b>sie</b> (klein geschrieben) = eine Frau oder mehrere Personen. <b>Sie</b> (groß geschrieben) = höfliche Anrede. Am Satzanfang erkennt man den Unterschied am <b>Verb</b> und am Zusammenhang.",
          "sie بحرف صغير = ست أو جمع. Sie بحرف كبير = أسلوب رسمي مؤدب. ونفرّق بينهم من الفعل وسياق الكلام.",
          { examples: [["Sie kommt aus Polen. (eine Frau)", "هي من بولندا."], ["Sie kommen aus Polen. (mehrere Personen oder Sie)", "هم من بولندا / حضرتك من بولندا."]] }),
        sec("3. du oder Sie?", "du أو Sie؟",
          "<b>du</b> sagt man zu Freunden, Familie und Kindern. <b>Sie</b> sagt man zu Erwachsenen, die man nicht gut kennt. Mit „Sie“ benutzt man oft den Nachnamen: Frau Weber, Herr Hansen.",
          "du للأصحاب والعيلة والأطفال. Sie للكبار اللي ما نعرفهمش كويس، وغالبًا مع اسم العيلة.",
          { examples: [["Frau Weber, wie geht es Ihnen?", "أستاذة فيبر، حضرتك عاملة إيه؟"]] })
      ],
      pitfalls: [
        P("Carlos kommt aus Spanien. Sie wohnt in Köln.", "Carlos kommt aus Spanien. Er wohnt in Köln.", "Carlos راجل ← er."),
        P("Frau Weber, wie heißt du?", "Frau Weber, wie heißen Sie?", "مع السيدة فيبر بنستخدم Sie."),
        P("Das Kind ist drei. Er spielt.", "Das Kind ist drei. Es spielt.", "das Kind ← es.")
      ],
      exercises: [
        C("Max kommt aus Wien. ___ wohnt in Graz.", ["Er", "Sie", "Es"], 0, "Max راجل ← Er."),
        C("Nina und Tom sind Freunde. ___ wohnen in Köln.", ["Sie", "Er", "Wir"], 0, "Nina und Tom ← sie (جمع)."),
        C("Zu Frau Weber sagt man:", ["Wie heißen Sie?", "Wie heißt du?", "Wie heißt ihr?"], 0, "مع الأستاذة فيبر: Sie."),
        GAP("Lena kommt aus Graz. ___ wohnt in München.", ["Sie"], "Lena ست ← Sie."),
        GAP("Das Kind ist drei. ___ spielt im Garten.", ["Es"], "das Kind ← Es."),
        GAP("Ich und du = ___", ["wir"], "ich + du = wir."),
        TRA("Ersetze den Namen: Anna spricht Deutsch. → ___ spricht Deutsch.", ["Sie spricht Deutsch.", "Sie"], "Anna ← sie."),
        ERR("Frau Weber, wie heißt du?", ["Frau Weber, wie heißen Sie?"], "رسمي ← Sie + heißen."),
        TF("„sie“ kann Singular und Plural sein.", true, "sie = هي (مفرد) أو هم (جمع)."),
        TF("Zu Freunden sagt man „Sie“.", false, "للأصحاب بنقول du.")
      ]
    }
  ];

  window.A1_GRAMMAR[2] = [
    {
      id: "a1-k2-unregelmaessig",
      t: "Unregelmäßige Verben", tAr: "الأفعال غير المنتظمة",
      summary: "Einige Verben ändern bei <b>du</b> und <b>er/sie/es</b> den Vokal: <b>sprechen → du sprichst, er spricht</b>. Bei ich, wir, ihr und sie bleibt der Stamm gleich.",
      summaryAr: "في أفعال بتغيّر حرف العلّة مع du وer/sie/es: sprechen → du sprichst وer spricht. ومع ich وwir وihr وsie الجذر بيفضل زي ما هو.",
      sections: [
        sec("1. Vokalwechsel e → i, a → ä", "تغيّر الحرف e ← i وa ← ä",
          "Bei <b>du</b> und <b>er/sie/es</b> ändert sich der Vokal: <b>e → i / ie</b> (sprechen, lesen, sehen) und <b>a → ä</b> (fahren). Die Endungen sind normal.",
          "مع du وer/sie/es حرف العلّة بيتغيّر: e ← i أو ie (sprechen وlesen وsehen) وa ← ä (fahren). والنهايات عادية.",
          { table: { head: ["Person", "sprechen", "lesen", "fahren", "haben"], rows: [["ich", "spreche", "lese", "fahre", "habe"], ["du", "sprichst", "liest", "fährst", "hast"], ["er / sie / es", "spricht", "liest", "fährt", "hat"], ["wir", "sprechen", "lesen", "fahren", "haben"], ["ihr", "sprecht", "lest", "fahrt", "habt"], ["sie / Sie", "sprechen", "lesen", "fahren", "haben"]] },
            examples: [["Du sprichst gut Deutsch.", "إنت بتتكلم ألماني كويس."], ["Er liest gern Zeitung.", "هو بيحب يقرأ جرنال."], ["Sie fährt nach Berlin.", "هي بتسافر برلين."]] }),
        sec("2. Verben mit -t oder -d im Stamm", "الأفعال اللي جذرها فيه t أو d",
          "Endet der Stamm auf <b>-t</b> oder <b>-d</b>, schiebt man ein <b>-e-</b> ein: <b>arbeiten → du arbeitest, er arbeitet, ihr arbeitet</b>.",
          "لو جذر الفعل بينتهي بـ t أو d بنحط e في النص: arbeiten ← du arbeitest وer arbeitet وihr arbeitet.",
          { examples: [["Er arbeitet bei einer Firma.", "هو بيشتغل في شركة."], ["Wann arbeitest du?", "إنت بتشتغل إمتى؟"]] }),
        sec("3. Merken: unregelmäßige Verben lernen", "حفظ الأفعال غير المنتظمة",
          "Lerne unregelmäßige Verben immer mit der <b>er-Form</b>: <b>sprechen, er spricht</b> – <b>lesen, er liest</b> – <b>fahren, er fährt</b>. Im Wörterbuch stehen sie so.",
          "احفظ الأفعال غير المنتظمة دايمًا مع صيغة er: sprechen, er spricht. في القاموس بتتكتب كده.",
          { examples: [["sehen, er sieht", "يشوف"], ["essen, er isst", "ياكل"]] })
      ],
      pitfalls: [
        P("Du sprechst Deutsch.", "Du sprichst Deutsch.", "مع du الحرف e بيبقى i: sprichst."),
        P("Er lest gern Bücher.", "Er liest gern Bücher.", "مع er الفعل lesen بيبقى liest."),
        P("Er arbeitt am Montag.", "Er arbeitet am Montag.", "الجذر بينتهي بـ t فبنحط e: arbeitet.")
      ],
      exercises: [
        C("Du ___ gut Deutsch.", ["sprichst", "sprechst", "sprecht"], 0, "sprechen ← du sprichst."),
        C("Er ___ gern Zeitung.", ["liest", "lest", "lesst"], 0, "lesen ← er liest."),
        C("Sie ___ nach Berlin. (fahren)", ["fährt", "fahrt", "fahren"], 0, "fahren ← sie fährt (a ← ä)."),
        GAP("Er ___ am Montag. (arbeiten)", ["arbeitet"], "الجذر arbeit- + e + t."),
        GAP("Du ___ viel Zeit. (haben)", ["hast"], "haben ← du hast."),
        GAP("Sie ___ einen Hund. (haben, sie = eine Frau)", ["hat"], "haben ← sie hat."),
        ORD("", ["Er", "liest", "gern", "Bücher"], ["Er liest gern Bücher"], "الفعل في الموضع التاني."),
        TRA("Schreibe mit „du“: Er spricht Arabisch. → ___ Arabisch.", ["Du sprichst Arabisch.", "Du sprichst"], "er spricht ← du sprichst."),
        ERR("Du sprechst Deutsch.", ["Du sprichst Deutsch."], "مع du: sprichst."),
        TF("Bei „wir“ ändert sich der Vokal von „sprechen“.", false, "wir sprechen: مفيش تغيّر."),
        TF("Zu „er“ passt „fährt“.", true, "fahren ← er fährt.")
      ]
    },
    {
      id: "a1-k2-janein",
      t: "Ja-/Nein-Frage", tAr: "أسئلة نعم/لا",
      summary: "In der <b>Ja-/Nein-Frage</b> steht das Verb auf <b>Position 1</b>. Man antwortet mit <b>Ja</b> oder <b>Nein</b>. Die Satzmelodie geht am Ende nach oben.",
      summaryAr: "في سؤال نعم/لا الفعل في الموضع الأول. وبنجاوب بـ Ja أو Nein. ونغمة الجملة بتطلع في الآخر.",
      sections: [
        sec("1. Verb auf Position 1", "الفعل في الموضع الأول",
          "Aussagesatz: <b>Du liest gern.</b> → Frage: <b>Liest du gern?</b> Das Verb geht an den Anfang, das Subjekt folgt.",
          "الجملة الخبرية: Du liest gern. ← السؤال: Liest du gern؟ الفعل بيروح في الأول والفاعل بعده.",
          { table: { head: ["Aussagesatz", "Ja-/Nein-Frage", "Antwort"], rows: [["Du spielst Tennis.", "Spielst du Tennis?", "Ja, sehr gern. / Nein, nicht so gern."], ["Sie hören Musik.", "Hören Sie gern Musik?", "Ja. / Es geht so."], ["Ihr geht ins Kino.", "Geht ihr ins Kino?", "Nein, wir gehen schwimmen."]] },
            examples: [["Gehst du gern ins Kino?", "بتحب تروح السينما؟"]] }),
        sec("2. Antworten mit gern", "الإجابة بـ gern",
          "Mit <b>gern</b> sagt man, was man mag: <b>Ich schwimme gern.</b> Skala: <b>sehr gern – gern – es geht so – nicht so gern – nicht gern</b>.",
          "بـ gern بنقول اللي بنحبه: Ich schwimme gern. الدرجات: sehr gern (جدًا) – gern – es geht so (عادي) – nicht so gern (مش أوي) – nicht gern (مابحبش).",
          { examples: [["Liest du gern? – Es geht so.", "بتحب تقرأ؟ – عادي."], ["Singst du gern? – Nein, nicht gern.", "بتحب تغني؟ – لأ، مابحبش."]] }),
        sec("3. Verabredungen vorschlagen", "اقتراح مواعيد",
          "Auch mit <b>wir</b> kann man fragen: <b>Gehen wir ins Kino?</b> Mögliche Antworten: <b>Ja, gern. / Ja, super! / Nein, das geht leider nicht.</b>",
          "ممكن نسأل بـ wir كمان: Gehen wir ins Kino؟ والإجابات: Ja, gern. / Ja, super! / Nein, das geht leider nicht.",
          { examples: [["Gehen wir am Samstag ins Kino? – Ja, super!", "نروح السينما يوم السبت؟ – أيوه، تمام!"]] })
      ],
      pitfalls: [
        P("Du liest gern?", "Liest du gern?", "في السؤال الفعل بيبقى في الأول."),
        P("Spielen Fußball Sie?", "Spielen Sie Fußball?", "الفعل ثم الفاعل: Spielen Sie …؟"),
        P("Ja, ich gern Fußball spiele.", "Ja, ich spiele gern Fußball.", "الفعل في الموضع التاني في الإجابة.")
      ],
      exercises: [
        C("___ du gern Musik? – Ja, sehr gern.", ["Hörst", "Hören", "Hört"], 0, "مع du: Hörst du …؟"),
        C("___ Sie Tennis? – Nein, nicht so gern.", ["Spielen", "Spielt", "Spielst"], 0, "مع Sie: Spielen Sie …؟"),
        C("Was passt: „Gehst du gern ins Kino?“", ["Ja, sehr gern.", "In Hamburg.", "Ich heiße Max."], 0, "سؤال نعم/لا ← Ja أو Nein."),
        GAP("___ du gern? (lesen)", ["Liest"], "lesen ← du liest."),
        ORD("", ["Gehen", "wir", "ins", "Kino"], ["Gehen wir ins Kino"], "الفعل في الأول."),
        ORD("", ["Spielst", "du", "gern", "Fußball"], ["Spielst du gern Fußball"], "الفعل في الأول: Spielst du …؟"),
        TRA("Mache eine Frage: Du kochst gern. → ___ ?", ["Kochst du gern?"], "الفعل في الأول: Kochst du gern؟"),
        TRA("Mache eine Frage (formell): Sie reisen gern. → ___ ?", ["Reisen Sie gern?"], "مع Sie: Reisen Sie gern؟"),
        ERR("Du hörst gern Musik?", ["Hörst du gern Musik?"], "في السؤال الفعل في الأول."),
        TF("In der Ja-/Nein-Frage steht das Verb auf Position 2.", false, "في الموضع الأول."),
        TF("„Es geht so.“ heißt: nicht besonders gut.", true, "Es geht so = عادي.")
      ]
    },
    {
      id: "a1-k2-artikel",
      t: "Bestimmter Artikel: der, das, die", tAr: "أداة التعريف: der وdas وdie",
      summary: "Jedes Nomen hat ein Geschlecht: <b>maskulin (der)</b>, <b>neutrum (das)</b> oder <b>feminin (die)</b>. Im Plural steht immer <b>die</b>. Lerne Nomen <b>immer mit Artikel</b>.",
      summaryAr: "كل اسم له جنس: مذكر (der) أو محايد (das) أو مؤنث (die). وفي الجمع دايمًا die. احفظ الأسماء دايمًا مع الأرتيكل.",
      sections: [
        sec("1. Die drei Artikel", "الأرتيكلات التلاتة",
          "<b>der</b> Stift, <b>das</b> Buch, <b>die</b> Tablette – und im Plural <b>die</b> Stifte. Das Geschlecht hat meistens nichts mit der Bedeutung zu tun: <b>das Mädchen</b>, aber <b>der Tisch</b>. Man muss es lernen.",
          "der Stift وdas Buch وdie Tablette – وفي الجمع die Stifte. الجنس غالبًا مالوش علاقة بالمعنى: das Mädchen لكن der Tisch. لازم تحفظه.",
          { table: { head: ["maskulin", "neutrum", "feminin", "Plural"], rows: [["der Stift", "das Buch", "die Tablette", "die Stifte / Bücher / Tabletten"], ["der Kurs", "das Zimmer", "die Frage", "die Kurse / Zimmer / Fragen"], ["der Tag", "das Auto", "die Lehrerin", "die Tage / Autos / Lehrerinnen"]] },
            examples: [["Das ist der Stift. Das ist das Buch. Das ist die Tablette.", "ده القلم. ده الكتاب. دي القرص."]] }),
        sec("2. Endungen helfen", "النهايات بتساعد",
          "Einige Endungen verraten den Artikel: <b>-ung, -heit, -keit, -in, -e</b> → meist <b>die</b> (die Wohnung, die Lehrerin, die Frage); <b>-chen, -um</b> → <b>das</b> (das Mädchen, das Zentrum); <b>-er</b> (Personen) → meist <b>der</b> (der Lehrer).",
          "بعض النهايات بتدلك على الأرتيكل: -ung وheit وkeit وin وe ← غالبًا die، وchen وum ← das، وer للأشخاص ← غالبًا der.",
          { examples: [["die Wohnung, die Freiheit, die Lehrerin", "الشقة، الحرية، المدرّسة"], ["das Mädchen, das Zentrum", "البنت الصغيرة، المركز"]] }),
        sec("3. Artikel und Nomen groß schreiben", "الكتابة بحرف كبير",
          "Alle <b>Nomen</b> schreibt man im Deutschen <b>groß</b>: der Stift, das Auto. Tipp: Schreibe Wörter in zwei Farben – <b>der = blau, das = grün, die = rot</b> – und mache Artikelbilder.",
          "كل الأسماء في الألماني بتتكتب بحرف كبير. نصيحة: اكتب الكلمات بألوان: der أزرق وdas أخضر وdie أحمر.",
          { examples: [["der Computer, das Foto, die Seite", "الكمبيوتر، الصورة، الصفحة"]] })
      ],
      pitfalls: [
        P("der Buch", "das Buch", "كلمة Buch محايدة: das Buch."),
        P("die Stift", "der Stift", "كلمة Stift مذكرة: der Stift."),
        P("das Tablette", "die Tablette", "الكلمات اللي بتنتهي بـ -e غالبًا مؤنثة: die Tablette.")
      ],
      exercises: [
        C("___ Stift ist neu.", ["Der", "Die", "Das"], 0, "Stift مذكر."),
        C("___ Buch ist interessant.", ["Das", "Der", "Die"], 0, "Buch محايد."),
        C("___ Tablette hilft.", ["Die", "Der", "Das"], 0, "Tablette مؤنث (النهاية -e)."),
        C("___ Wohnung ist groß.", ["Die", "Der", "Das"], 0, "النهاية -ung ← die."),
        C("___ Mädchen spielt Fußball.", ["Das", "Die", "Der"], 0, "النهاية -chen ← das."),
        GAP("___ Lehrerin kommt aus Wien.", ["Die"], "النهاية -in ← die."),
        GAP("___ Kurs beginnt um acht.", ["Der"], "Kurs مذكر."),
        GAP("___ Auto ist rot.", ["Das"], "Auto محايد."),
        ORD("", ["Das", "Buch", "ist", "neu"], ["Das Buch ist neu"], "das + اسم محايد."),
        TRA("Mache einen Satz mit dem richtigen Artikel: Stift / neu → ___", ["Der Stift ist neu."], "Stift مذكر ← der Stift."),
        ERR("Der Buch ist neu.", ["Das Buch ist neu."], "Buch محايد: das Buch."),
        TF("Im Plural steht immer „die“.", true, "الجمع دايمًا die."),
        TF("Nomen schreibt man im Deutschen klein.", false, "الأسماء بتتكتب بحرف كبير.")
      ]
    },
    {
      id: "a1-k2-plural",
      t: "Nomen: Singular und Plural", tAr: "الأسماء: المفرد والجمع",
      summary: "Der Plural der Nomen hat verschiedene Formen: <b>-e, -n/-en, -er (mit Umlaut), -s</b> oder <b>keine Endung</b>. Man lernt den Plural zusammen mit dem Nomen: <b>der Tag, -e</b>.",
      summaryAr: "الجمع في الأسماء له صيغ مختلفة: -e وn/en وer (مع Umlaut) وs أو من غير نهاية. بنحفظ الجمع مع الاسم: der Tag, -e.",
      sections: [
        sec("1. Die häufigsten Pluralformen", "أشهر صيغ الجمع",
          "Im Wörterbuch steht die Pluralform nach dem Nomen: <b>der Tag, -e</b> (die Tage), <b>die Frage, -n</b> (die Fragen), <b>das Buch, ¨-er</b> (die Bücher), <b>das Auto, -s</b> (die Autos), <b>der Lehrer, -</b> (die Lehrer). Das Zeichen <b>¨</b> bedeutet: Der Vokal bekommt einen <b>Umlaut</b> (a → ä, o → ö, u → ü).",
          "في القاموس صيغة الجمع بتتكتب بعد الاسم: der Tag, -e (die Tage) وdie Frage, -n (die Fragen) وdas Buch, ¨-er (die Bücher) وdas Auto, -s (die Autos). العلامة ¨ معناها إن حرف العلّة بياخد Umlaut.",
          { table: { head: ["Endung", "Singular", "Plural"], rows: [["-e", "der Tag", "die Tage"], ["¨-e", "der Arzt", "die Ärzte"], ["-n / -en", "die Tablette / die Frau", "die Tabletten / die Frauen"], ["¨-er", "das Buch", "die Bücher"], ["-s", "das Auto", "die Autos"], ["- (keine)", "der Lehrer", "die Lehrer"], ["¨-", "der Bruder", "die Brüder"]] },
            examples: [["Ich habe zwei Brüder und drei Bücher.", "عندي أخوين وتلات كتب."]] }),
        sec("2. Regeln, die helfen", "قواعد بتساعد",
          "Feminine Nomen auf <b>-e</b> haben fast immer <b>-n</b>: die Frage → die Fragen. Feminine Nomen auf <b>-in</b> haben <b>-nen</b>: die Lehrerin → die Lehrerinnen. Nomen aus anderen Sprachen haben oft <b>-s</b>: das Hobby → die Hobbys.",
          "المؤنث اللي بينتهي بـ -e جمعه تقريبًا دايمًا -n. والمؤنث اللي بينتهي بـ -in جمعه -nen. والكلمات الأجنبية غالبًا بتاخد -s.",
          { examples: [["die Tablette → die Tabletten", "قرص ← أقراص"], ["die Ärztin → die Ärztinnen", "دكتورة ← دكتورات"]] }),
        sec("3. Plural von Zahlen und Maßen", "الجمع مع الأرقام والمقاييس",
          "Nach Zahlen steht der Plural: <b>zwei Bücher, fünf Stunden</b>. Bei Maßen bleibt das Wort oft im Singular: <b>zwei Kilo, drei Glas</b>.",
          "بعد الأرقام بنستخدم الجمع: zwei Bücher وfünf Stunden. وفي المقاييس الكلمة غالبًا بتفضل مفرد: zwei Kilo.",
          { examples: [["Ich kaufe zwei Kilo Äpfel.", "باشتري كيلوين تفاح."]] })
      ],
      pitfalls: [
        P("die Buchs", "die Bücher", "الجمع من das Buch هو die Bücher."),
        P("die Tablette (Plural)", "die Tabletten", "الجمع بنضيف -n: die Tabletten."),
        P("die Lehrerin (Plural)", "die Lehrerinnen", "المؤنث بـ -in جمعه -nen.")
      ],
      exercises: [
        C("Plural von „der Tag“:", ["die Tage", "die Täge", "die Tags"], 0, "der Tag, -e ← die Tage."),
        C("Plural von „das Buch“:", ["die Bücher", "die Buche", "die Buchen"], 0, "das Buch, ¨-er ← die Bücher."),
        C("Plural von „die Frage“:", ["die Fragen", "die Frage", "die Frages"], 0, "المؤنث بـ -e ← -n."),
        C("Plural von „das Auto“:", ["die Autos", "die Auten", "die Autoe"], 0, "كلمة أجنبية ← -s."),
        GAP("Plural von „der Lehrer“: die ___", ["Lehrer"], "- (من غير نهاية)."),
        GAP("Plural von „die Ärztin“: die ___", ["Ärztinnen"], "-in ← -nen."),
        GAP("Plural von „der Bruder“: die ___", ["Brüder"], "¨- ← Brüder."),
        ORD("", ["Ich", "habe", "zwei", "Brüder"], ["Ich habe zwei Brüder"], "الجمع بعد الرقم."),
        TRA("Schreibe im Plural: Das Hobby ist toll. → Die ___ sind toll.", ["Die Hobbys sind toll.", "Hobbys"], "Hobby ← Hobbys (-s)."),
        ERR("Ich habe drei Buchs.", ["Ich habe drei Bücher."], "جمع Buch: Bücher."),
        TF("Das Zeichen „¨-er“ bedeutet: Umlaut + -er.", true, "¨ = Umlaut و-er = النهاية."),
        TF("Der Plural von „die Tablette“ ist „die Tabletts“.", false, "الصحيح: die Tabletten.")
      ]
    },
    {
      id: "a1-k2-habensein",
      t: "Die Verben haben und sein", tAr: "الفعلان haben وsein",
      summary: "<b>sein</b> brauchst du für Name, Herkunft, Beruf und Alter. <b>haben</b> brauchst du für Besitz, Zeit und Termine. Beide Verben sind unregelmäßig.",
      summaryAr: "sein للاسم والأصل والمهنة والعمر. وhaben للملكية والوقت والمواعيد. والفعلان غير منتظمين.",
      sections: [
        sec("1. Konjugation", "التصريف",
          "<b>sein</b>: ich bin, du bist, er/sie/es ist, wir sind, ihr seid, sie/Sie sind. <b>haben</b>: ich habe, du hast, er/sie/es hat, wir haben, ihr habt, sie/Sie haben.",
          "sein: ich bin وdu bist وer ist وwir sind وihr seid وsie/Sie sind. haben: ich habe وdu hast وer hat وwir haben وihr habt وsie/Sie haben.",
          { table: { head: ["Person", "sein", "haben"], rows: [["ich", "bin", "habe"], ["du", "bist", "hast"], ["er / sie / es", "ist", "hat"], ["wir", "sind", "haben"], ["ihr", "seid", "habt"], ["sie / Sie", "sind", "haben"]] } }),
        sec("2. Wann sein?", "إمتى sein؟",
          "<b>sein</b> + Name / Herkunft / Beruf / Alter / Adjektiv: <b>Ich bin Anna. Ich bin Studentin. Ich bin 22 Jahre alt. Das Buch ist neu.</b>",
          "sein مع الاسم والأصل والمهنة والعمر والصفة.",
          { examples: [["Was bist du von Beruf? – Ich bin Lehrerin.", "مهنتك إيه؟ – أنا مدرّسة."], ["Ich bin 22 Jahre alt.", "عندي 22 سنة."]] }),
        sec("3. Wann haben?", "إمتى haben؟",
          "<b>haben</b> + Sache / Zeit / frei / Termin: <b>Ich habe einen Computer. Ich habe am Samstag frei. Hast du Zeit? Wir haben Deutschkurs.</b>",
          "haben مع الأشياء والوقت وfrei والمواعيد.",
          { examples: [["Ich habe am Montag frei.", "الاتنين عندي إجازة."], ["Hast du Zeit?", "عندك وقت؟"]] })
      ],
      pitfalls: [
        P("Ich habe 22 Jahre alt.", "Ich bin 22 Jahre alt.", "العمر مع sein: ich bin … Jahre alt."),
        P("Ich bin einen Computer.", "Ich habe einen Computer.", "الملكية مع haben."),
        P("Er haben frei.", "Er hat frei.", "haben مع er: hat.")
      ],
      exercises: [
        C("Ich ___ Studentin.", ["bin", "habe", "ist"], 0, "المهنة مع sein: ich bin."),
        C("Er ___ am Samstag frei.", ["hat", "ist", "habt"], 0, "frei haben: er hat frei."),
        C("Wir ___ Deutschkurs.", ["haben", "sind", "habt"], 0, "wir haben."),
        C("Du ___ 22 Jahre alt.", ["bist", "hast", "bin"], 0, "العمر مع sein: du bist."),
        GAP("Ihr ___ Zeit. (haben)", ["habt"], "ihr habt."),
        GAP("Sie ___ Lehrer. (sie = mehrere Personen)", ["sind"], "sie sind."),
        GAP("Du ___ einen Hund. (haben)", ["hast"], "du hast."),
        ORD("", ["Ich", "habe", "am", "Montag", "frei"], ["Ich habe am Montag frei"], "ich habe … frei."),
        TRA("Mache aus „ich“ → „er“: Ich habe einen Bruder. → ___", ["Er hat einen Bruder."], "ich habe ← er hat."),
        ERR("Ich habe 22 Jahre alt.", ["Ich bin 22 Jahre alt."], "العمر: sein."),
        TF("„Ich bin Ärztin“ benutzt das Verb sein.", true, "المهنة مع sein."),
        TF("„Du habt“ ist richtig.", false, "du hast، ihr habt.")
      ]
    }
  ];
})();
