/* Detailed B1.1 grammar (chapters 1-2): explanations, tables, typical
   mistakes and varied exercises. Rendered by js/18-grammar-practice.js.
   Exercise types: choice, gap, order, transform, error, truefalse. */
window.B1_GRAMMAR = window.B1_GRAMMAR || {};

window.B1_GRAMMAR[1] = [
  {
    id: "k1-zu",
    t: "Infinitiv mit zu", tAr: "المصدر مع zu",
    summary: "Nach vielen Verben, Adjektiven und Nomen folgt ein zweites Verb im Infinitiv mit <b>zu</b>. Der Infinitiv steht am Satzende.",
    summaryAr: "بعد أفعال وصفات وأسماء كتير بييجي فعل تاني في المصدر ومعاه zu، والمصدر بيقف في آخر الجملة.",
    sections: [
      {
        h: "1. Wann steht zu + Infinitiv?", hAr: "إمتى بنستخدم zu + المصدر؟",
        text: "Typisch nach Verben wie <b>anfangen, aufhören, beginnen, vergessen, versuchen, vorhaben, sich entschließen, planen, hoffen, erlauben, verbieten, empfehlen</b>, nach Ausdrücken mit <b>es ist + Adjektiv</b> (schön, wichtig, schwer, leicht) und nach Nomen mit <b>haben</b> (Lust, Zeit, Angst, Spaß, die Möglichkeit).",
        ar: "غالبًا بعد أفعال زي: يبدأ، يبطل، ينسى، يحاول، ينوي، يقرر… وبعد تعبيرات زي es ist schön/wichtig، وبعد أسماء مع haben زي Lust وZeit وAngst.",
        examples: [
          ["Ich habe vergessen, dich anzurufen.", "نسيت أكلمك."],
          ["Es ist wichtig, genug Wasser zu trinken.", "مهم تشرب مية كفاية."],
          ["Hast du Lust, heute Abend ins Kino zu gehen?", "عندك مزاج تروح السينما النهارده بالليل؟"],
          ["Wir haben vor, im Sommer ans Meer zu fahren.", "ناويين نسافر البحر في الصيف."]
        ]
      },
      {
        h: "2. Wo steht zu?", hAr: "zu بتقف فين؟",
        text: "<b>zu</b> steht direkt vor dem Infinitiv. Bei <b>trennbaren Verben</b> steht zu <b>zwischen Präfix und Verb</b> – alles in einem Wort. Bei zwei Verben am Ende steht zu vor dem letzten.",
        ar: "zu بتيجي قبل المصدر على طول. في الأفعال المنفصلة بتدخل في النص بين البادئة والفعل وبتتكتب كلمة واحدة.",
        table: {
          head: ["Verb", "zu + Infinitiv"],
          rows: [["lernen", "zu lernen"], ["aufstehen", "aufzustehen"], ["anrufen", "anzurufen"], ["einkaufen", "einzukaufen"], ["verstehen (untrennbar)", "zu verstehen"], ["Deutsch lernen können", "Deutsch lernen zu können"]]
        },
        examples: [
          ["Ich habe keine Lust, früh aufzustehen.", "مش حابب أصحى بدري."],
          ["Es ist nicht leicht, alles zu verstehen.", "مش سهل تفهم كل حاجة."]
        ]
      },
      {
        h: "3. Wann steht KEIN zu?", hAr: "إمتى مانستخدمش zu؟",
        text: "Nach <b>Modalverben</b> (können, müssen, wollen, dürfen, sollen, möchten), nach <b>werden</b>, <b>lassen</b> und nach Bewegungsverben wie <b>gehen, kommen, fahren</b> steht der Infinitiv <b>ohne zu</b>.",
        ar: "بعد الأفعال المساعدة (können, müssen…) وبعد werden وlassen وأفعال الحركة زي gehen بنستخدم المصدر من غير zu.",
        examples: [
          ["Ich muss heute arbeiten. (nicht: zu arbeiten)", "لازم أشتغل النهارده."],
          ["Wir gehen am Samstag schwimmen.", "هنروح نعوم يوم السبت."]
        ]
      },
      {
        h: "4. Komma", hAr: "الفاصلة",
        text: "Vor der Infinitivgruppe steht meistens ein <b>Komma</b>, vor allem wenn sie länger ist oder von einem Nomen abhängt.",
        ar: "غالبًا بنحط فاصلة قبل مجموعة المصدر، خصوصًا لو طويلة أو بعد اسم.",
        examples: [["Ich habe keine Zeit, dir heute zu helfen.", "مش فاضي أساعدك النهارده."]]
      }
    ],
    pitfalls: [
      { wrong: "Ich kann gut zu schwimmen.", right: "Ich kann gut schwimmen.", ar: "بعد الأفعال المساعدة مفيش zu." },
      { wrong: "Ich habe vergessen, zu anrufen.", right: "Ich habe vergessen, anzurufen.", ar: "في الفعل المنفصل zu بتدخل في النص." },
      { wrong: "Es ist schön, zu am Strand liegen.", right: "Es ist schön, am Strand zu liegen.", ar: "zu بتيجي قبل المصدر مباشرة في آخر الجملة." }
    ],
    exercises: [
      { type: "choice", q: "Ich habe vergessen, meine Mutter ___.", o: ["anzurufen", "zu anrufen", "anrufen"], a: 0, why: "anrufen فعل منفصل: an + zu + rufen." },
      { type: "choice", q: "Wir müssen morgen früh ___.", o: ["aufstehen", "aufzustehen", "zu aufstehen"], a: 0, why: "بعد müssen مفيش zu." },
      { type: "choice", q: "Es ist schwer, im Sommer eine Wohnung ___.", o: ["finden", "zu finden", "findet"], a: 1, why: "بعد es ist schwer بييجي zu + المصدر." },
      { type: "gap", q: "Hast du Lust, mit mir ___? (einkaufen)", a: ["einzukaufen"], why: "einkaufen منفصل → einzukaufen." },
      { type: "gap", q: "Ich versuche, jeden Tag zehn neue Wörter ___. (lernen)", a: ["zu lernen"], why: "versuchen + zu + Infinitiv." },
      { type: "order", prefix: "Ich habe vor,", words: ["zu", "nächstes", "machen", "Jahr", "Führerschein", "den"], a: ["nächstes Jahr den Führerschein zu machen", "den Führerschein nächstes Jahr zu machen"], why: "zu + المصدر في آخر الجملة." },
      { type: "transform", q: "Verbinde: Ich möchte in Deutschland studieren. Das ist mein Plan. → Ich plane, …", a: ["Ich plane, in Deutschland zu studieren."], why: "planen + zu + Infinitiv، والمصدر في الآخر." },
      { type: "error", q: "Ich habe keine Zeit, heute zu dir kommen.", a: ["Ich habe keine Zeit, heute zu dir zu kommen."], why: "بعد keine Zeit haben لازم zu قبل المصدر: zu kommen (والتانية zu dir حرف جر)." },
      { type: "truefalse", q: "„Wir gehen heute Abend tanzen.“ – Dieser Satz ist richtig.", a: true, why: "بعد gehen المصدر بييجي من غير zu." }
    ]
  },
  {
    id: "k1-weil-da",
    t: "Gründe angeben: weil, da, denn, deshalb", tAr: "التعبير عن السبب: weil وda وdenn وdeshalb",
    summary: "Einen Grund kann man mit <b>weil/da</b> (Nebensatz, Verb am Ende), mit <b>denn</b> (Hauptsatz, Verb auf Position 2) oder die Folge mit <b>deshalb</b> (Verb direkt danach) ausdrücken.",
    summaryAr: "السبب ممكن نقوله بـ weil/da (جملة فرعية والفعل في الآخر)، أو بـ denn (جملة رئيسية)، والنتيجة بـ deshalb (الفعل بعدها على طول).",
    sections: [
      {
        h: "1. weil und da – Verb am Ende", hAr: "weil وda – الفعل في الآخر",
        text: "Im Nebensatz mit <b>weil</b> oder <b>da</b> steht das konjugierte Verb <b>am Ende</b>. <b>weil</b> nennt einen neuen, wichtigen Grund und antwortet auf „Warum?“. <b>da</b> nennt einen bekannten Grund und steht oft am Satzanfang.",
        ar: "في الجملة الفرعية مع weil أو da الفعل المصرّف بيروح آخر الجملة. weil للسبب الجديد المهم (إجابة ليه؟)، وda لسبب معروف وغالبًا في أول الجملة.",
        table: {
          head: ["Hauptsatz", "Nebensatz"],
          rows: [["Ich bleibe zu Hause,", "weil ich krank <b>bin</b>."], ["Wir fahren mit dem Zug,", "weil es billiger <b>ist</b>."], ["Da es regnet,", "<b>nehmen</b> wir den Bus."]]
        },
        examples: [
          ["Ich lerne Deutsch, weil ich in Deutschland arbeiten möchte.", "بتعلم ألماني لإني عايز أشتغل في ألمانيا."],
          ["Da Rothenburg bekannt ist, kommen viele Touristen.", "بما إن روتنبورج مشهورة، سياح كتير بييجوا."]
        ]
      },
      {
        h: "2. Nebensatz zuerst: Verb-Komma-Verb", hAr: "لو الجملة الفرعية في الأول: فعل-فاصلة-فعل",
        text: "Steht der Nebensatz am Anfang, beginnt der Hauptsatz <b>direkt mit dem Verb</b>. Es entsteht das Muster <b>Verb , Verb</b>.",
        ar: "لو الجملة الفرعية جت الأول، الجملة الرئيسية بتبدأ بالفعل على طول، فيبقى عندنا فعل ثم فاصلة ثم فعل.",
        examples: [
          ["Weil ich müde bin, gehe ich früh schlafen.", "علشان أنا تعبان، هنام بدري."],
          ["Da der Zug Verspätung hatte, kam ich zu spät.", "علشان القطر اتأخر، وصلت متأخر."]
        ]
      },
      {
        h: "3. denn und deshalb", hAr: "denn وdeshalb",
        text: "<b>denn</b> verbindet zwei Hauptsätze (Position 0): Das Verb bleibt auf Position 2. <b>deshalb/deswegen/darum</b> nennen die <b>Folge</b> und stehen auf Position 1 – das Verb folgt sofort.",
        ar: "denn بتربط جملتين رئيسيتين ومش بتغيّر مكان الفعل. deshalb/deswegen/darum بيقولوا النتيجة وبييجي بعدهم الفعل على طول.",
        table: {
          head: ["Wort", "Stellung", "Beispiel"],
          rows: [["weil / da", "Verb am Ende", "…, weil ich krank bin."], ["denn", "Position 0", "…, denn ich bin krank."], ["deshalb", "Position 1", "Ich bin krank, deshalb bleibe ich zu Hause."]]
        }
      }
    ],
    pitfalls: [
      { wrong: "…, weil ich bin krank.", right: "…, weil ich krank bin.", ar: "بعد weil الفعل في الآخر." },
      { wrong: "…, denn ich krank bin.", right: "…, denn ich bin krank.", ar: "denn مش بتغير ترتيب الجملة." },
      { wrong: "Deshalb ich bleibe zu Hause.", right: "Deshalb bleibe ich zu Hause.", ar: "بعد deshalb الفعل على طول." }
    ],
    exercises: [
      { type: "choice", q: "Ich komme heute nicht, ___ ich muss arbeiten.", o: ["weil", "denn", "deshalb"], a: 1, why: "الفعل في المكان التاني (muss arbeiten) → denn." },
      { type: "choice", q: "Es regnet, ___ nehmen wir den Schirm mit.", o: ["deshalb", "weil", "denn"], a: 0, why: "بعد الكلمة الفعل على طول → deshalb (نتيجة)." },
      { type: "choice", q: "___ ich keine Zeit hatte, konnte ich nicht kommen.", o: ["Da", "Denn", "Deshalb"], a: 0, why: "الفعل في الآخر (hatte) والجملة في الأول → Da." },
      { type: "order", prefix: "Ich lerne jeden Tag,", words: ["weil", "bestehen", "die", "ich", "will", "Prüfung"], a: ["weil ich die Prüfung bestehen will"], why: "weil → الفعل المصرّف will في الآخر." },
      { type: "order", prefix: "Weil es so heiß ist,", words: ["wir", "schwimmen", "gehen"], a: ["gehen wir schwimmen"], why: "فعل-فاصلة-فعل: gehen بعد الفاصلة على طول." },
      { type: "transform", q: "Verbinde mit weil: Ich trinke viel Kaffee. Ich bin immer müde.", a: ["Ich trinke viel Kaffee, weil ich immer müde bin."], why: "الفعل bin يروح الآخر." },
      { type: "transform", q: "Schreib mit deshalb: Der Bus kommt nicht. Ich gehe zu Fuß.", a: ["Der Bus kommt nicht, deshalb gehe ich zu Fuß.", "Der Bus kommt nicht. Deshalb gehe ich zu Fuß."], why: "deshalb + الفعل على طول." },
      { type: "error", q: "Ich bleibe heute zu Hause, weil ich habe Fieber.", a: ["Ich bleibe heute zu Hause, weil ich Fieber habe."], why: "بعد weil الفعل habe يروح الآخر." },
      { type: "truefalse", q: "„Denn“ schickt das Verb ans Ende.", a: false, why: "لأ، denn مش بتغير مكان الفعل؛ weil وda هما اللي بيودوه الآخر." }
    ]
  },
  {
    id: "k1-obwohl",
    t: "Gegensätze: obwohl und trotzdem", tAr: "التعارض: obwohl وtrotzdem",
    summary: "Mit <b>obwohl</b> (Nebensatz, Verb am Ende) und <b>trotzdem</b> (Position 1, Verb folgt) drückt man aus, dass etwas <b>anders</b> passiert, als man erwartet.",
    summaryAr: "بـ obwohl (الفعل في الآخر) وtrotzdem (الفعل بعدها) بنقول إن حاجة حصلت عكس المتوقع.",
    sections: [
      {
        h: "1. obwohl – Nebensatz", hAr: "obwohl – جملة فرعية",
        text: "<b>obwohl</b> leitet einen Nebensatz ein. Das konjugierte Verb steht am Ende. Der Hauptsatz sagt, was <b>trotz</b> dieser Situation passiert.",
        ar: "obwohl بتبدأ جملة فرعية والفعل في الآخر. الجملة الرئيسية بتقول اللي حصل رغم الموقف ده.",
        examples: [
          ["Obwohl es regnet, gehen wir spazieren.", "مع إنها بتمطر، هنتمشى."],
          ["Er kommt zur Arbeit, obwohl er krank ist.", "بييجي الشغل مع إنه عيان."]
        ]
      },
      {
        h: "2. trotzdem – Position 1", hAr: "trotzdem – المكان الأول",
        text: "<b>trotzdem</b> steht im Hauptsatz auf Position 1 (oder nach dem Verb). Direkt danach kommt das Verb.",
        ar: "trotzdem بتيجي في الجملة الرئيسية في المكان الأول أو بعد الفعل، وبعدها الفعل على طول.",
        table: {
          head: ["obwohl", "trotzdem"],
          rows: [["Obwohl ich müde bin, lerne ich.", "Ich bin müde. Trotzdem lerne ich."], ["…, obwohl das Hotel teuer war.", "Das Hotel war teuer. Wir haben trotzdem gebucht."]]
        }
      },
      {
        h: "3. weil oder obwohl?", hAr: "weil ولا obwohl؟",
        text: "<b>weil</b> = normaler Grund (erwartete Folge). <b>obwohl</b> = Gegengrund (unerwartete Folge). Test: Passt „aber trotzdem“? Dann <b>obwohl</b>.",
        ar: "weil للسبب العادي، وobwohl لما النتيجة تبقى عكس المتوقع. لو ينفع تقول \"بس برده\" يبقى obwohl.",
        examples: [
          ["Ich esse, weil ich Hunger habe. (erwartet)", "باكل علشان جعان (متوقع)."],
          ["Ich esse, obwohl ich satt bin. (unerwartet)", "باكل مع إني شبعان (غير متوقع)."]
        ]
      }
    ],
    pitfalls: [
      { wrong: "Obwohl es kalt ist, wir gehen schwimmen.", right: "Obwohl es kalt ist, gehen wir schwimmen.", ar: "بعد الجملة الفرعية الفعل على طول." },
      { wrong: "Es ist kalt, trotzdem wir gehen schwimmen.", right: "Es ist kalt, trotzdem gehen wir schwimmen.", ar: "بعد trotzdem الفعل على طول." }
    ],
    exercises: [
      { type: "choice", q: "___ ich wenig Zeit habe, mache ich jeden Tag Sport.", o: ["Obwohl", "Weil", "Trotzdem"], a: 0, why: "النتيجة غير متوقعة والفعل في الآخر → Obwohl." },
      { type: "choice", q: "Das Wetter war schlecht. ___ hatten wir viel Spaß.", o: ["Obwohl", "Trotzdem", "Weil"], a: 1, why: "الفعل بعدها على طول → Trotzdem." },
      { type: "choice", q: "Wir gehen früh schlafen, ___ wir morgen früh aufstehen müssen.", o: ["obwohl", "weil", "trotzdem"], a: 1, why: "سبب عادي متوقع → weil." },
      { type: "gap", q: "Sie arbeitet weiter, ___ sie schon sehr müde ist.", a: ["obwohl"], why: "تعارض + الفعل في الآخر." },
      { type: "order", prefix: "Obwohl der Film lang war,", words: ["uns", "er", "gefallen", "hat"], a: ["hat er uns gefallen"], why: "فعل-فاصلة-فعل." },
      { type: "transform", q: "Schreib mit obwohl: Das Hotel ist teuer. Wir buchen es.", a: ["Wir buchen das Hotel, obwohl es teuer ist.", "Obwohl das Hotel teuer ist, buchen wir es."], why: "obwohl + الفعل ist في الآخر." },
      { type: "transform", q: "Schreib mit trotzdem: Er hat wenig Geld. Er fährt in Urlaub.", a: ["Er hat wenig Geld, trotzdem fährt er in Urlaub.", "Er hat wenig Geld. Trotzdem fährt er in Urlaub.", "Er hat wenig Geld, trotzdem fährt er in den Urlaub."], why: "trotzdem + الفعل على طول." },
      { type: "error", q: "Obwohl ich keine Lust habe, ich gehe zur Party.", a: ["Obwohl ich keine Lust habe, gehe ich zur Party."], why: "الفعل gehe لازم ييجي بعد الفاصلة على طول." },
      { type: "truefalse", q: "„Obwohl es regnet, bleiben wir zu Hause.“ ist logisch gut.", a: false, why: "إننا نقعد في البيت لما تمطر ده متوقع، يعني الأنسب weil." }
    ]
  }
];

window.B1_GRAMMAR[2] = [
  {
    id: "k2-lassen",
    t: "lassen + Infinitiv", tAr: "lassen + المصدر",
    summary: "Mit <b>lassen + Infinitiv</b> sagt man, dass man etwas <b>nicht selbst macht</b>, sondern von jemand anderem machen lässt – oder dass man etwas erlaubt.",
    summaryAr: "lassen + المصدر معناها إنك بتخلي حد تاني يعمل الحاجة بدالك (تصلّح، تقص…) أو إنك بتسمح بحاجة.",
    sections: [
      {
        h: "1. Etwas machen lassen", hAr: "تخلي حد يعمل حاجة",
        text: "<b>lassen</b> ist konjugiert (Position 2), der zweite Infinitiv steht am Ende – <b>ohne zu</b>.",
        ar: "lassen بتتصرف في المكان التاني، والمصدر التاني في الآخر من غير zu.",
        table: {
          head: ["Person", "Präsens", "Beispiel"],
          rows: [["ich", "lasse", "Ich lasse mein Handy reparieren."], ["du", "lässt", "Du lässt die Haare schneiden."], ["er/sie", "lässt", "Sie lässt das Auto waschen."], ["wir", "lassen", "Wir lassen die Wohnung streichen."], ["ihr", "lasst", "Lasst ihr das Paket liefern?"], ["sie/Sie", "lassen", "Sie lassen den Laptop prüfen."]]
        },
        examples: [["Ich lasse meine Jacke reinigen.", "بودّي الجاكيت للتنضيف."], ["Wo lässt du dir die Haare schneiden?", "بتقص شعرك فين؟"]]
      },
      {
        h: "2. Perfekt: doppelter Infinitiv", hAr: "الـ Perfekt: مصدرين",
        text: "Im Perfekt benutzt man <b>haben + Infinitiv + lassen</b> (nicht „gelassen“).",
        ar: "في الـ Perfekt بنقول haben + المصدر + lassen (مش gelassen).",
        examples: [["Ich habe mein Fahrrad reparieren lassen.", "خليت حد يصلح عجلتي."], ["Wir haben die Küche streichen lassen.", "خلّينا حد يدهن المطبخ."]]
      },
      {
        h: "3. lassen = erlauben / nicht mitnehmen", hAr: "lassen بمعنى يسمح أو يسيب",
        text: "<b>jemanden etwas machen lassen</b> = erlauben. Ohne zweites Verb heißt lassen „nicht mitnehmen / nicht ändern“.",
        ar: "ممكن تعني يسمح لحد يعمل حاجة، ومن غير فعل تاني معناها يسيب حاجة مكانها.",
        examples: [["Meine Eltern lassen mich allein reisen.", "أهلي بيسيبوني أسافر لوحدي."], ["Ich lasse das Handy zu Hause.", "هسيب الموبايل في البيت."]]
      }
    ],
    pitfalls: [
      { wrong: "Ich lasse mein Auto zu reparieren.", right: "Ich lasse mein Auto reparieren.", ar: "مع lassen مفيش zu." },
      { wrong: "Ich habe das Auto reparieren gelassen.", right: "Ich habe das Auto reparieren lassen.", ar: "في الـ Perfekt بنقول lassen مش gelassen." },
      { wrong: "Du lasst die Haare schneiden.", right: "Du lässt die Haare schneiden.", ar: "مع du وer بنكتب lässt بالـ ä." }
    ],
    exercises: [
      { type: "choice", q: "Mein Handy ist kaputt. Ich ___ es reparieren.", o: ["lasse", "lässt", "lassen"], a: 0, why: "ich lasse." },
      { type: "choice", q: "Sie ___ sich jeden Monat die Haare schneiden.", o: ["lasst", "lässt", "lassen"], a: 1, why: "sie (هي) → lässt." },
      { type: "choice", q: "Wir haben die Wohnung streichen ___.", o: ["gelassen", "lassen", "zu lassen"], a: 1, why: "Perfekt مع مصدرين: streichen lassen." },
      { type: "gap", q: "___ ihr eure Möbel liefern oder holt ihr sie selbst? (lassen)", a: ["Lasst"], why: "ihr → lasst." },
      { type: "order", prefix: "Ich", words: ["meinen", "lasse", "waschen", "Mantel"], a: ["lasse meinen Mantel waschen"], why: "lassen في المكان التاني والمصدر في الآخر." },
      { type: "transform", q: "Schreib mit lassen: Der Mechaniker repariert mein Auto. → Ich …", a: ["Ich lasse mein Auto reparieren."], why: "أنا مش بصلحها بنفسي → Ich lasse … reparieren." },
      { type: "transform", q: "Setze ins Perfekt: Ich lasse den Laptop prüfen.", a: ["Ich habe den Laptop prüfen lassen."], why: "haben + prüfen + lassen." },
      { type: "error", q: "Er hat seine Jacke reinigen gelassen.", a: ["Er hat seine Jacke reinigen lassen."], why: "مع مصدر تاني بنقول lassen مش gelassen." },
      { type: "truefalse", q: "„Ich lasse meine Tasche im Auto.“ bedeutet: Ich nehme die Tasche nicht mit.", a: true, why: "من غير فعل تاني lassen معناها يسيب الحاجة." }
    ]
  },
  {
    id: "k2-folgen",
    t: "Folgen ausdrücken: deshalb, sodass, so … dass", tAr: "التعبير عن النتيجة",
    summary: "Folgen drückt man mit <b>deshalb/deswegen/darum/daher</b> (Hauptsatz), <b>also</b> und mit den Nebensätzen <b>sodass</b> und <b>so + Adjektiv …, dass</b> aus.",
    summaryAr: "النتيجة بنقولها بـ deshalb وأخواتها (جملة رئيسية)، أو بـ sodass و so + صفة … dass (جملة فرعية والفعل في الآخر).",
    sections: [
      {
        h: "1. deshalb, deswegen, darum, daher", hAr: "deshalb وأخواتها",
        text: "Sie stehen auf Position 1 (oder nach dem Verb) und bedeuten alle „aus diesem Grund“. Das Verb folgt direkt.",
        ar: "كلهم معناهم \"علشان كده\"، وبييجي بعدهم الفعل على طول.",
        examples: [["Der Akku war leer, deshalb konnte ich nicht anrufen.", "البطارية كانت فاضية، علشان كده ماقدرتش أتصل."], ["Das Gerät ist praktisch. Darum kaufen es viele.", "الجهاز عملي، علشان كده ناس كتير بتشتريه."]]
      },
      {
        h: "2. sodass – Nebensatz", hAr: "sodass – جملة فرعية",
        text: "<b>sodass</b> (auch: so dass) leitet einen Nebensatz mit der Folge ein. Das Verb steht am Ende. Der sodass-Satz steht immer <b>nach</b> dem Hauptsatz.",
        ar: "sodass بتبدأ جملة فرعية فيها النتيجة، والفعل في الآخر، ودايمًا بعد الجملة الرئيسية.",
        examples: [["Das Handy ist heruntergefallen, sodass das Display kaputt ist.", "الموبايل وقع، فالشاشة اتكسرت."]]
      },
      {
        h: "3. so + Adjektiv …, dass", hAr: "so + صفة …, dass",
        text: "Wenn die Folge durch eine <b>Intensität</b> entsteht, steht <b>so</b> vor dem Adjektiv im Hauptsatz und <b>dass</b> leitet die Folge ein.",
        ar: "لو النتيجة جاية من شدة الصفة، بنحط so قبل الصفة وdass قبل النتيجة.",
        table: {
          head: ["Struktur", "Beispiel"],
          rows: [["Hauptsatz + deshalb", "Es war laut, deshalb konnte ich nicht schlafen."], ["…, sodass + Verb am Ende", "Es war laut, sodass ich nicht schlafen konnte."], ["so + Adj. …, dass", "Es war so laut, dass ich nicht schlafen konnte."]]
        }
      }
    ],
    pitfalls: [
      { wrong: "Es war so kalt, dass wir sind nach Hause gegangen.", right: "Es war so kalt, dass wir nach Hause gegangen sind.", ar: "بعد dass الفعل في الآخر." },
      { wrong: "Sodass ich müde war, ging ich schlafen.", right: "Ich war müde, deshalb ging ich schlafen.", ar: "sodass مابتجيش في أول الجملة." }
    ],
    exercises: [
      { type: "choice", q: "Der Laptop war sehr teuer, ___ habe ich ihn nicht gekauft.", o: ["deshalb", "sodass", "dass"], a: 0, why: "الفعل habe بعدها على طول → deshalb." },
      { type: "choice", q: "Die Lampe war kaputt, ___ ich sie zurückgebracht habe.", o: ["deshalb", "sodass", "denn"], a: 1, why: "الفعل habe في الآخر → sodass." },
      { type: "choice", q: "Die Werbung war ___ lustig, dass alle gelacht haben.", o: ["so", "sehr", "zu"], a: 0, why: "so + صفة …, dass." },
      { type: "gap", q: "Es hat stark geregnet, ___ das Fest ausgefallen ist.", a: ["sodass", "so dass"], why: "نتيجة + الفعل في الآخر." },
      { type: "order", prefix: "Der Film war so spannend,", words: ["dass", "vergessen", "die", "haben", "wir", "Zeit"], a: ["dass wir die Zeit vergessen haben"], why: "dass → haben في الآخر." },
      { type: "transform", q: "Schreib mit so … dass: Die Musik war laut. Ich konnte nichts verstehen.", a: ["Die Musik war so laut, dass ich nichts verstehen konnte."], why: "so قبل laut، وdass + الفعل konnte في الآخر." },
      { type: "transform", q: "Schreib mit deswegen: Ich habe verschlafen. Ich habe den Bus verpasst.", a: ["Ich habe verschlafen, deswegen habe ich den Bus verpasst.", "Ich habe verschlafen. Deswegen habe ich den Bus verpasst."], why: "deswegen + habe على طول." },
      { type: "error", q: "Der Drucker ist kaputt, deshalb ich kann nichts drucken.", a: ["Der Drucker ist kaputt, deshalb kann ich nichts drucken."], why: "بعد deshalb الفعل kann على طول." },
      { type: "truefalse", q: "„deshalb“ und „daher“ bedeuten ungefähr das Gleiche.", a: true, why: "الاتنين معناهم \"علشان كده\"." }
    ]
  },
  {
    id: "k2-genitiv",
    t: "Genitiv und wegen, trotz, während", tAr: "المضاف إليه (Genitiv) مع wegen وtrotz وwährend",
    summary: "Der <b>Genitiv</b> zeigt Besitz oder Zugehörigkeit (<i>das Handy des Mannes</i>) und steht nach Präpositionen wie <b>wegen, trotz, während, statt, innerhalb</b>.",
    summaryAr: "الـ Genitiv بيوضح الملكية أو الانتماء، وبييجي بعد حروف جر زي wegen (بسبب) وtrotz (رغم) وwährend (أثناء).",
    sections: [
      {
        h: "1. Formen des Genitivs", hAr: "أشكال الـ Genitiv",
        text: "Maskuline und neutrale Nomen bekommen <b>-s</b> oder <b>-es</b> (bei einsilbigen Nomen oft -es).",
        ar: "الأسماء المذكرة والمحايدة بتاخد -s أو -es في الآخر.",
        table: {
          head: ["", "maskulin", "neutral", "feminin", "Plural"],
          rows: [["bestimmt", "des Mannes", "des Kindes", "der Frau", "der Geräte"], ["unbestimmt", "eines Mannes", "eines Kindes", "einer Frau", "– (von Geräten)"], ["Possessiv", "meines Vaters", "meines Handys", "meiner Mutter", "meiner Eltern"], ["Adjektiv", "des neuen Laptops", "des alten Autos", "der guten Idee", "der neuen Geräte"]]
        },
        examples: [["Das ist das Auto meines Bruders.", "دي عربية أخويا."], ["Die Farbe des Handys gefällt mir.", "لون الموبايل عاجبني."]]
      },
      {
        h: "2. wegen, trotz, während + Genitiv", hAr: "حروف الجر مع الـ Genitiv",
        text: "<b>wegen</b> = Grund, <b>trotz</b> = Gegengrund, <b>während</b> = gleichzeitig. In der gesprochenen Sprache hört man oft den Dativ (wegen dem Regen), schriftlich ist der <b>Genitiv</b> richtig.",
        ar: "wegen للسبب، trotz للتعارض، während للي بيحصل في نفس الوقت. في الكلام ساعات بيستخدموا Dativ، بس في الكتابة الصح Genitiv.",
        table: {
          head: ["Präposition", "Nebensatz-Alternative", "Beispiel"],
          rows: [["wegen", "weil", "Wegen des Regens bleiben wir zu Hause."], ["trotz", "obwohl", "Trotz des hohen Preises kaufe ich es."], ["während", "während (Konj.)", "Während des Films schläft er."]]
        }
      }
    ],
    pitfalls: [
      { wrong: "wegen der Regen", right: "wegen des Regens", ar: "der Regen مذكر → des Regens." },
      { wrong: "das Auto von mein Vater (schriftlich)", right: "das Auto meines Vaters", ar: "في الكتابة استخدم الـ Genitiv." },
      { wrong: "trotz des schlechten Wetter", right: "trotz des schlechten Wetters", ar: "الاسم المحايد بياخد -s." }
    ],
    exercises: [
      { type: "choice", q: "___ des Staus sind wir zu spät gekommen.", o: ["Wegen", "Trotz", "Während"], a: 0, why: "سبب → Wegen." },
      { type: "choice", q: "Trotz ___ Regens gehen wir spazieren.", o: ["der", "des", "dem"], a: 1, why: "der Regen → des Regens." },
      { type: "choice", q: "Das ist die Wohnung ___ Schwester.", o: ["meines", "meiner", "meine"], a: 1, why: "die Schwester → meiner Schwester." },
      { type: "gap", q: "Während ___ Unterrichts ist das Handy aus. (der)", a: ["des"], why: "der Unterricht → des Unterrichts." },
      { type: "gap", q: "Die Bedienung ___ Geräts ist ganz einfach. (das)", a: ["des"], why: "das Gerät → des Geräts." },
      { type: "transform", q: "Schreib mit wegen: Wir bleiben zu Hause, weil das Wetter schlecht ist.", a: ["Wegen des schlechten Wetters bleiben wir zu Hause.", "Wir bleiben wegen des schlechten Wetters zu Hause."], why: "weil + جملة → wegen + Genitiv." },
      { type: "transform", q: "Schreib mit trotz: Obwohl der Preis hoch ist, kaufe ich den Laptop.", a: ["Trotz des hohen Preises kaufe ich den Laptop.", "Ich kaufe den Laptop trotz des hohen Preises."], why: "obwohl → trotz + Genitiv: des hohen Preises." },
      { type: "error", q: "Wegen der Stau habe ich den Termin verpasst.", a: ["Wegen des Staus habe ich den Termin verpasst."], why: "der Stau مذكر → des Staus." },
      { type: "truefalse", q: "Feminine Nomen bekommen im Genitiv ein -s: „der Frau-s“.", a: false, why: "المؤنث مابياخدش -s: der Frau." }
    ]
  }
];
