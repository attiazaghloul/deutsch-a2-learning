/* Detailed B1.1 grammar (chapters 5-6). See data_b1_1_grammar_1.js. */
window.B1_GRAMMAR = window.B1_GRAMMAR || {};

window.B1_GRAMMAR[5] = [
  {
    id: "k5-komparativ",
    t: "Komparativ und Superlativ vor Nomen", tAr: "صيغة المقارنة والتفضيل قبل الاسم",
    summary: "Vor einem Nomen bekommen Komparativ und Superlativ zusätzlich die normale <b>Adjektivendung</b>: ein umweltfreundlich<b>eres</b> Auto, das billig<b>ste</b> Angebot.",
    summaryAr: "قبل الاسم صيغة المقارنة والتفضيل بتاخد كمان نهاية الصفة العادية: ein umweltfreundlicheres Auto.",
    sections: [
      {
        h: "1. Formen: -er und am -sten", hAr: "الأشكال: -er و am -sten",
        text: "Komparativ: Adjektiv + <b>-er</b>. Superlativ: <b>am</b> + Adjektiv + <b>-sten</b> (nach d, t, s, ß, z: <b>-esten</b>). Viele kurze Adjektive bekommen einen <b>Umlaut</b>. Unregelmäßig: gut – besser – am besten, viel – mehr – am meisten, gern – lieber – am liebsten, hoch – höher – am höchsten.",
        ar: "المقارنة: الصفة + er. التفضيل: am + الصفة + sten. صفات قصيرة كتير بتاخد Umlaut، وفي صفات شاذة زي gut – besser – am besten.",
        table: {
          head: ["Grundform", "Komparativ", "Superlativ"],
          rows: [["billig", "billiger", "am billigsten"], ["alt", "älter", "am ältesten"], ["groß", "größer", "am größten"], ["gut", "besser", "am besten"], ["viel", "mehr", "am meisten"], ["hoch", "höher", "am höchsten"], ["teuer", "teurer", "am teuersten"]]
        }
      },
      {
        h: "2. Vor dem Nomen: + Adjektivendung", hAr: "قبل الاسم: + نهاية الصفة",
        text: "Vor dem Nomen steht der Superlativ <b>ohne am</b> und mit Artikel. Komparativ und Superlativ bekommen die gleichen Endungen wie normale Adjektive. <b>mehr</b> und <b>weniger</b> bekommen keine Endung.",
        ar: "قبل الاسم التفضيل من غير am ومع أداة التعريف، والاتنين بياخدوا نهايات الصفة العادية. mehr وweniger مابيتغيروش.",
        table: {
          head: ["", "Komparativ", "Superlativ"],
          rows: [["der (Nom.)", "der günstigere Tarif", "der günstigste Tarif"], ["die (Nom.)", "die bessere Lösung", "die beste Lösung"], ["das (Nom.)", "ein sparsameres Gerät", "das sparsamste Gerät"], ["den (Akk.)", "einen kleineren Kühlschrank", "den kleinsten Kühlschrank"], ["Plural", "umweltfreundlichere Autos", "die umweltfreundlichsten Autos"]]
        },
        examples: [["Wir brauchen einen sparsameren Kühlschrank.", "محتاجين تلاجة موفرة أكتر."], ["Das ist die beste Idee des Tages.", "دي أحسن فكرة النهارده."]]
      },
      {
        h: "3. Vergleiche: als und wie", hAr: "المقارنة: als وwie",
        text: "Ungleich: <b>Komparativ + als</b> (Der Zug ist schneller als der Bus). Gleich: <b>so + Grundform + wie</b> (Das Rad ist so schnell wie das Auto).",
        ar: "للاختلاف: المقارنة + als. للتساوي: so + الصفة + wie.",
        examples: [["Bio-Obst ist teurer als normales Obst.", "الفاكهة الأورجانيك أغلى من العادية."], ["Heute ist es nicht so heiß wie gestern.", "النهارده مش حر زي امبارح."]]
      }
    ],
    pitfalls: [
      { wrong: "Das ist der am billigsten Tarif.", right: "Das ist der billigste Tarif.", ar: "قبل الاسم من غير am." },
      { wrong: "Ich suche ein kleiner Auto.", right: "Ich suche ein kleineres Auto.", ar: "لازم نهاية الصفة بعد -er." },
      { wrong: "Der Zug ist schneller wie der Bus.", right: "Der Zug ist schneller als der Bus.", ar: "بعد المقارنة als مش wie." }
    ],
    exercises: [
      { type: "choice", q: "Wir suchen eine ___ Wohnung.", o: ["größere", "größer", "am größten"], a: 0, why: "eine + مقارنة + e: größere." },
      { type: "choice", q: "Das ist das ___ Handy im Geschäft.", o: ["teuerste", "am teuersten", "teuerer"], a: 0, why: "das + تفضيل + e: teuerste." },
      { type: "choice", q: "Radfahren ist gesünder ___ Autofahren.", o: ["als", "wie", "so"], a: 0, why: "مقارنة + als." },
      { type: "choice", q: "Ich trinke ___ Tee als Kaffee.", o: ["lieber", "gerner", "mehrer"], a: 0, why: "gern → lieber." },
      { type: "gap", q: "Sie hat einen ___ Job gefunden. (gut, Komparativ)", a: ["besseren"], why: "einen + besser + en." },
      { type: "gap", q: "Das ist die ___ Lösung für die Umwelt. (gut, Superlativ)", a: ["beste"], why: "die + best + e." },
      { type: "transform", q: "Vergleiche: Der Bus kostet 3 €, das Taxi 20 €. (billig)", a: ["Der Bus ist billiger als das Taxi.", "Der Bus ist viel billiger als das Taxi."], why: "مقارنة + als." },
      { type: "error", q: "Wir kaufen den am sparsamsten Kühlschrank.", a: ["Wir kaufen den sparsamsten Kühlschrank."], why: "قبل الاسم من غير am." },
      { type: "truefalse", q: "„mehr“ bekommt vor dem Nomen keine Endung: „mehr Busse“.", a: true, why: "mehr وweniger ثابتين." }
    ]
  },
  {
    id: "k5-final",
    t: "Finalsätze: damit und um … zu", tAr: "جمل الغرض: damit وum … zu",
    summary: "Mit <b>damit</b> und <b>um … zu</b> sagt man, <b>wozu</b> man etwas macht (Ziel, Zweck). Frage: <b>Wozu? / Wofür?</b>",
    summaryAr: "بـ damit وum … zu بنقول بنعمل الحاجة علشان إيه (الهدف). السؤال: Wozu؟",
    sections: [
      {
        h: "1. um … zu – gleiches Subjekt", hAr: "um … zu – نفس الفاعل",
        text: "Ist das Subjekt in beiden Sätzen <b>gleich</b>, benutzt man <b>um … zu + Infinitiv</b>. Das Subjekt fällt im zweiten Teil weg.",
        ar: "لو الفاعل واحد في الجملتين بنستخدم um … zu + المصدر ومابنكررش الفاعل.",
        examples: [["Ich fahre Rad, um die Umwelt zu schützen.", "بركب عجلة علشان أحمي البيئة."], ["Wir trennen den Müll, um Rohstoffe zu sparen.", "بنفصل الزبالة علشان نوفر الخامات."]]
      },
      {
        h: "2. damit – verschiedene Subjekte", hAr: "damit – فاعل مختلف",
        text: "Sind die Subjekte <b>verschieden</b>, benutzt man <b>damit</b> + Nebensatz (Verb am Ende). Bei gleichem Subjekt ist damit auch möglich, aber um … zu ist eleganter.",
        ar: "لو الفاعل مختلف لازم damit + جملة فرعية والفعل في الآخر. لو نفس الفاعل ينفع damit بس um … zu أشيك.",
        table: {
          head: ["Subjekte", "Konnektor", "Beispiel"],
          rows: [["gleich (ich – ich)", "um … zu", "Ich lerne, um die Prüfung zu bestehen."], ["verschieden (ich – du)", "damit", "Ich erkläre es dir, damit du es verstehst."], ["gleich", "damit (möglich)", "Ich lerne, damit ich die Prüfung bestehe."]]
        }
      },
      {
        h: "3. Keine Modalverben im Finalsatz", hAr: "من غير أفعال مساعدة في جملة الغرض",
        text: "In Finalsätzen stehen normalerweise <b>keine Modalverben wie wollen/sollen</b> – der Konnektor drückt das Ziel schon aus.",
        ar: "في جملة الغرض مابنستخدمش wollen أو sollen، الرابط نفسه بيقول الهدف.",
        examples: [["Nicht: …, damit ich die Prüfung bestehen will. → …, damit ich die Prüfung bestehe.", "من غير will."]]
      }
    ],
    pitfalls: [
      { wrong: "Ich spare Energie, um die Umwelt schützen.", right: "Ich spare Energie, um die Umwelt zu schützen.", ar: "مع um لازم zu." },
      { wrong: "Ich rufe an, um du Bescheid weißt.", right: "Ich rufe an, damit du Bescheid weißt.", ar: "فاعل مختلف → damit." },
      { wrong: "…, um zu die Welt retten.", right: "…, um die Welt zu retten.", ar: "zu قبل المصدر في الآخر." }
    ],
    exercises: [
      { type: "choice", q: "Ich gehe zu Fuß, ___ fit zu bleiben.", o: ["um", "damit", "weil"], a: 0, why: "zu + مصدر ونفس الفاعل → um." },
      { type: "choice", q: "Wir sprechen langsam, ___ die Kinder uns verstehen.", o: ["um", "damit", "dass"], a: 1, why: "فاعل مختلف (wir – die Kinder) → damit." },
      { type: "choice", q: "Sie spart Geld, um ein E-Bike ___.", o: ["kaufen", "zu kaufen", "kauft"], a: 1, why: "um … zu kaufen." },
      { type: "gap", q: "Ich mache das Fenster auf, ___ frische Luft hereinkommt.", a: ["damit"], why: "الفاعل frische Luft مختلف → damit." },
      { type: "gap", q: "Er nimmt eine Tasche mit, um keine Plastiktüte ___ brauchen.", a: ["zu"], why: "um … zu." },
      { type: "order", prefix: "Wir pflanzen Bäume,", words: ["verbessern", "die", "um", "zu", "Luft"], a: ["um die Luft zu verbessern"], why: "um … zu + المصدر في الآخر." },
      { type: "transform", q: "Verbinde mit um … zu: Ich schalte das Licht aus. Ich will Strom sparen.", a: ["Ich schalte das Licht aus, um Strom zu sparen."], why: "نفس الفاعل ومن غير will." },
      { type: "transform", q: "Verbinde mit damit: Ich schreibe eine Liste. Mein Mann vergisst nichts.", a: ["Ich schreibe eine Liste, damit mein Mann nichts vergisst."], why: "فاعل مختلف → damit + vergisst في الآخر." },
      { type: "error", q: "Ich lerne Deutsch, damit ich in Deutschland arbeiten will.", a: ["Ich lerne Deutsch, damit ich in Deutschland arbeiten kann.", "Ich lerne Deutsch, um in Deutschland zu arbeiten.", "Ich lerne Deutsch, um in Deutschland arbeiten zu können."], why: "مفيش will في جملة الغرض." },
      { type: "truefalse", q: "„um … zu“ benutzt man, wenn die Subjekte verschieden sind.", a: false, why: "لأ، um … zu للفاعل الواحد، وdamit للمختلف." }
    ]
  }
];

window.B1_GRAMMAR[6] = [
  {
    id: "k6-futur",
    t: "Futur I", tAr: "المستقبل (Futur I)",
    summary: "Das <b>Futur I</b> (werden + Infinitiv) benutzt man für <b>Pläne und Versprechen</b>, für <b>Vorhersagen</b> und für <b>Vermutungen</b> über die Gegenwart.",
    summaryAr: "Futur I (werden + المصدر) بنستخدمه للخطط والوعود، والتوقعات، والتخمين عن الحاضر.",
    sections: [
      {
        h: "1. Form: werden + Infinitiv", hAr: "الشكل: werden + المصدر",
        text: "<b>werden</b> steht auf Position 2, der Infinitiv am Ende. Mit Modalverb stehen zwei Infinitive am Ende: Ich werde arbeiten <b>müssen</b>.",
        ar: "werden في المكان التاني والمصدر في الآخر.",
        table: {
          head: ["Person", "werden", "Beispiel"],
          rows: [["ich", "werde", "Ich werde die Prüfung schaffen."], ["du", "wirst", "Du wirst es sehen."], ["er/sie/es", "wird", "Es wird morgen regnen."], ["wir", "werden", "Wir werden umziehen."], ["ihr", "werdet", "Ihr werdet euch wohlfühlen."], ["sie/Sie", "werden", "Sie werden bald Eltern."]]
        }
      },
      {
        h: "2. Wann Futur, wann Präsens?", hAr: "إمتى Futur وإمتى المضارع؟",
        text: "Mit einer <b>Zeitangabe</b> (morgen, nächstes Jahr) benutzt man für die Zukunft oft einfach das <b>Präsens</b>. Das Futur betont einen <b>Plan, ein Versprechen</b> oder eine <b>Prognose</b>. Mit <b>wohl, sicher, wahrscheinlich</b> drückt es eine <b>Vermutung</b> aus.",
        ar: "لو في كلمة زمن زي morgen بنستخدم المضارع عادي. Futur بيأكد على خطة أو وعد أو توقع، ومع wohl أو wahrscheinlich بيبقى تخمين.",
        examples: [
          ["Morgen fahre ich nach Hamburg. (Präsens reicht)", "بكرة مسافر هامبورج."],
          ["Ich verspreche dir: Ich werde pünktlich sein.", "أوعدك: هكون في المعاد."],
          ["In 50 Jahren werden viele Menschen in Städten leben.", "بعد ٥٠ سنة ناس كتير هتعيش في المدن."],
          ["Er ist nicht da. Er wird wohl krank sein.", "هو مش موجود. غالبًا عيان."]
        ]
      },
      {
        h: "3. werden hat drei Bedeutungen", hAr: "werden ليها تلات معاني",
        text: "1) Vollverb „werden“ = Veränderung (Er wird Arzt). 2) Futur: werden + Infinitiv (Er wird arbeiten). 3) Passiv: werden + Partizip II (Das Haus wird gebaut).",
        ar: "١) يصبح. ٢) المستقبل مع المصدر. ٣) المبني للمجهول مع التصريف التالت.",
        examples: [["Sie wird Lehrerin. / Sie wird unterrichten. / Die Schule wird renoviert.", "هتبقى مدرسة / هتدرّس / المدرسة بتتجدد."]]
      }
    ],
    pitfalls: [
      { wrong: "Ich werde morgen gehe zum Arzt.", right: "Ich werde morgen zum Arzt gehen.", ar: "المصدر في الآخر من غير تصريف." },
      { wrong: "Du werdest es schaffen.", right: "Du wirst es schaffen.", ar: "du wirst." }
    ],
    exercises: [
      { type: "choice", q: "Nächstes Jahr ___ ich eine Ausbildung machen.", o: ["werde", "wird", "werden"], a: 0, why: "ich werde." },
      { type: "choice", q: "___ du mich am Flughafen abholen?", o: ["Wirst", "Werdest", "Wird"], a: 0, why: "du wirst." },
      { type: "choice", q: "Er ist noch nicht da. Er wird wohl im Stau ___.", o: ["stehen", "steht", "gestanden"], a: 0, why: "werden + المصدر (تخمين)." },
      { type: "choice", q: "In welchem Satz ist „werden“ Futur?", o: ["Sie wird Ärztin.", "Sie wird bald umziehen.", "Das Auto wird repariert."], a: 1, why: "werden + مصدر (umziehen) = Futur." },
      { type: "gap", q: "Wir ___ euch bestimmt besuchen. (werden)", a: ["werden"], why: "wir werden." },
      { type: "order", prefix: "In zehn Jahren", words: ["ich", "eigenes", "ein", "werde", "haben", "Geschäft"], a: ["werde ich ein eigenes Geschäft haben"], why: "werde في المكان التاني وhaben في الآخر." },
      { type: "transform", q: "Setze ins Futur I: Ich lerne jeden Tag Deutsch.", a: ["Ich werde jeden Tag Deutsch lernen."], why: "werde + lernen في الآخر." },
      { type: "transform", q: "Drücke eine Vermutung aus (wohl): Sie ist wahrscheinlich müde.", a: ["Sie wird wohl müde sein."], why: "wird wohl + sein." },
      { type: "error", q: "Morgen es wird regnen.", a: ["Morgen wird es regnen."], why: "الفعل في المكان التاني." },
      { type: "truefalse", q: "„Morgen fahre ich nach Berlin.“ ist korrekt, obwohl es Präsens ist.", a: true, why: "مع كلمة زمن المضارع بيدل على المستقبل." }
    ]
  },
  {
    id: "k6-ndeklination",
    t: "n-Deklination", tAr: "تصريف الـ n (n-Deklination)",
    summary: "Einige <b>maskuline</b> Nomen bekommen in <b>allen Fällen außer dem Nominativ Singular</b> die Endung <b>-(e)n</b>: der Kollege → den Kolleg<b>en</b>, dem Kolleg<b>en</b>, des Kolleg<b>en</b>.",
    summaryAr: "أسماء مذكرة معينة بتاخد -(e)n في كل الحالات ماعدا الفاعل المفرد: der Kollege → den Kollegen.",
    sections: [
      {
        h: "1. Welche Nomen?", hAr: "أنهي أسماء؟",
        text: "Maskuline Nomen auf <b>-e</b> (der Kollege, der Kunde, der Junge, der Name), Berufe und Personen auf <b>-ent, -ant, -ist, -oge</b> (der Student, der Praktikant, der Polizist, der Biologe) und einige andere: <b>der Mensch, der Herr, der Nachbar, der Bär</b>.",
        ar: "المذكر اللي بينتهي بـ e، والمهن اللي بتنتهي بـ ent وant وist وoge، وكلمات زي der Mensch وder Herr وder Nachbar.",
        table: {
          head: ["", "der Kollege", "der Student", "der Mensch", "der Herr"],
          rows: [["Nominativ", "der Kollege", "der Student", "der Mensch", "der Herr"], ["Akkusativ", "den Kollegen", "den Studenten", "den Menschen", "den Herrn"], ["Dativ", "dem Kollegen", "dem Studenten", "dem Menschen", "dem Herrn"], ["Genitiv", "des Kollegen", "des Studenten", "des Menschen", "des Herrn"], ["Plural", "die Kollegen", "die Studenten", "die Menschen", "die Herren"]]
        }
      },
      {
        h: "2. Besonderheiten", hAr: "حالات خاصة",
        text: "<b>der Name</b> und <b>der Gedanke</b> haben im Genitiv <b>-ns</b>: des Namens. <b>der Herr</b> hat im Singular <b>-n</b>, im Plural <b>-en</b>. In Briefen: <b>Sehr geehrter Herr Klein</b> → an Herr<b>n</b> Klein.",
        ar: "der Name وder Gedanke في الـ Genitiv بياخدوا -ns. der Herr في المفرد -n وفي الجمع -en.",
        examples: [["Ich habe gestern Herrn Klein getroffen.", "قابلت الأستاذ كلاين امبارح."], ["Kennst du den Namen des Kunden?", "تعرف اسم العميل؟"]]
      }
    ],
    pitfalls: [
      { wrong: "Ich frage den Kollege.", right: "Ich frage den Kollegen.", ar: "Akkusativ → Kollegen." },
      { wrong: "Das gehört dem Student.", right: "Das gehört dem Studenten.", ar: "Dativ → Studenten." },
      { wrong: "Ich schreibe Herr Müller.", right: "Ich schreibe Herrn Müller.", ar: "Dativ → Herrn." }
    ],
    exercises: [
      { type: "choice", q: "Kannst du bitte ___ helfen?", o: ["dem Kunde", "dem Kunden", "den Kunde"], a: 1, why: "helfen + Dativ → dem Kunden." },
      { type: "choice", q: "Ich habe ___ Polizisten nach dem Weg gefragt.", o: ["den", "dem", "der"], a: 0, why: "fragen + Akkusativ → den Polizisten." },
      { type: "choice", q: "Wie ist der Name ___?", o: ["des Praktikants", "des Praktikanten", "der Praktikant"], a: 1, why: "Genitiv → des Praktikanten." },
      { type: "gap", q: "Wir haben einen neuen ___ im Team. (der Kollege)", a: ["Kollegen"], why: "Akkusativ → Kollegen." },
      { type: "gap", q: "Sehr geehrter Herr Braun, … – Brief an ___ Braun. (der Herr)", a: ["Herrn"], why: "an + Akkusativ → Herrn." },
      { type: "transform", q: "Setze in den Dativ: der Nachbar → Ich gebe ___ den Schlüssel.", a: ["Ich gebe dem Nachbarn den Schlüssel."], why: "dem Nachbarn." },
      { type: "error", q: "Die Ärztin untersucht den Junge.", a: ["Die Ärztin untersucht den Jungen."], why: "Akkusativ → den Jungen." },
      { type: "truefalse", q: "„der Tisch“ gehört zur n-Deklination: „den Tischen“.", a: false, why: "لأ، der Tisch → den Tisch." }
    ]
  },
  {
    id: "k6-relativ",
    t: "Relativsätze", tAr: "جمل الوصل (Relativsätze)",
    summary: "Ein <b>Relativsatz</b> beschreibt ein Nomen genauer. Das <b>Relativpronomen</b> richtet sich im <b>Genus/Numerus</b> nach dem Nomen, im <b>Kasus</b> nach seiner Rolle im Relativsatz. Das Verb steht am Ende.",
    summaryAr: "جملة الوصل بتوصف الاسم أكتر. الضمير بياخد جنس وعدد الاسم، وحالته حسب دوره في جملة الوصل، والفعل في الآخر.",
    sections: [
      {
        h: "1. Die Relativpronomen", hAr: "ضمائر الوصل",
        text: "Die Formen sind fast wie der bestimmte Artikel – Ausnahmen sind <b>Dativ Plural (denen)</b> und der <b>Genitiv</b> (dessen, deren).",
        ar: "الأشكال زي أداة التعريف تقريبًا، ماعدا الجمع في الـ Dativ (denen) والـ Genitiv (dessen/deren).",
        table: {
          head: ["", "maskulin", "neutral", "feminin", "Plural"],
          rows: [["Nominativ", "der", "das", "die", "die"], ["Akkusativ", "den", "das", "die", "die"], ["Dativ", "dem", "dem", "der", "denen"], ["Genitiv", "dessen", "dessen", "deren", "deren"]]
        }
      },
      {
        h: "2. Welcher Kasus?", hAr: "أنهي حالة؟",
        text: "Frage im Relativsatz: Welche Rolle hat das Pronomen? <b>Subjekt</b> → Nominativ. <b>Objekt</b> eines Akkusativverbs → Akkusativ. Nach <b>Dativverb</b> oder <b>Präposition</b> → deren Kasus.",
        ar: "اسأل: الضمير دوره إيه جوه جملة الوصل؟ فاعل → Nominativ، مفعول → Akkusativ، بعد فعل Dativ أو حرف جر → حالته.",
        table: {
          head: ["Rolle im Relativsatz", "Beispiel"],
          rows: [["Subjekt (Nom.)", "Das ist der Mann, <b>der</b> neben mir wohnt."], ["Objekt (Akk.)", "Das ist der Mann, <b>den</b> ich gestern getroffen habe."], ["Dativverb", "Das ist der Mann, <b>dem</b> ich geholfen habe."], ["Präposition", "Das ist die Stadt, <b>in der</b> ich geboren bin."], ["Genitiv", "Das ist die Frau, <b>deren</b> Sohn in Wien studiert."], ["Dativ Plural", "Das sind die Kollegen, <b>mit denen</b> ich arbeite."]]
        }
      },
      {
        h: "3. Satzbau", hAr: "ترتيب الجملة",
        text: "Der Relativsatz steht meist <b>direkt nach dem Nomen</b> und hat Kommas. Das konjugierte Verb steht am Ende. Die Präposition steht <b>vor</b> dem Relativpronomen.",
        ar: "جملة الوصل بتيجي بعد الاسم على طول وبين فاصلتين، والفعل في الآخر، وحرف الجر بييجي قبل الضمير.",
        examples: [["Die Wohnung, die wir gemietet haben, ist sehr hell.", "الشقة اللي أجرناها منورة جدًا."], ["Das Projekt, an dem ich arbeite, endet im Mai.", "المشروع اللي بشتغل عليه بيخلص في مايو."]]
      }
    ],
    pitfalls: [
      { wrong: "Der Mann, der ich getroffen habe, …", right: "Der Mann, den ich getroffen habe, …", ar: "مفعول → den." },
      { wrong: "Die Freunde, mit die ich reise, …", right: "Die Freunde, mit denen ich reise, …", ar: "Dativ جمع → denen." },
      { wrong: "Das Buch, das ich habe gelesen, …", right: "Das Buch, das ich gelesen habe, …", ar: "الفعل المصرّف في الآخر." }
    ],
    exercises: [
      { type: "choice", q: "Das ist die Kollegin, ___ mir immer hilft.", o: ["die", "der", "den"], a: 0, why: "فاعل مؤنث → die." },
      { type: "choice", q: "Der Film, ___ wir gesehen haben, war super.", o: ["der", "den", "dem"], a: 1, why: "مفعول مذكر → den." },
      { type: "choice", q: "Das sind die Nachbarn, ___ wir oft grillen.", o: ["mit die", "mit denen", "mit dem"], a: 1, why: "mit + Dativ جمع → denen." },
      { type: "choice", q: "Die Frau, ___ Auto kaputt ist, wartet auf den Bus.", o: ["die", "dessen", "deren"], a: 2, why: "ملكية لمؤنث → deren." },
      { type: "gap", q: "Das ist das Hotel, in ___ wir gewohnt haben.", a: ["dem"], why: "in + Dativ (wo) → dem." },
      { type: "gap", q: "Der Kunde, ___ ich geantwortet habe, ist zufrieden.", a: ["dem"], why: "antworten + Dativ → dem." },
      { type: "order", prefix: "Das ist die Stadt,", words: ["der", "aufgewachsen", "ich", "in", "bin"], a: ["in der ich aufgewachsen bin"], why: "حرف الجر + der، وbin في الآخر." },
      { type: "transform", q: "Verbinde: Ich habe einen Freund. Er wohnt in München.", a: ["Ich habe einen Freund, der in München wohnt."], why: "فاعل مذكر → der + wohnt في الآخر." },
      { type: "transform", q: "Verbinde: Das ist das Handy. Ich habe es gestern gekauft.", a: ["Das ist das Handy, das ich gestern gekauft habe."], why: "مفعول محايد → das + habe في الآخر." },
      { type: "error", q: "Die Leute, mit die ich arbeite, sind sehr nett.", a: ["Die Leute, mit denen ich arbeite, sind sehr nett."], why: "mit + جمع Dativ → denen." }
    ]
  }
];
