/* Detailed A1.2 grammar (chapters 7-9): explanations, tables, typical mistakes and
   varied exercises. Rendered by js/18-grammar-practice.js (same format as A1.1 and B1.1).
   Exercise types: choice, truefalse, gap, order, transform, error. */
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

  /* ---------- Kapitel 7 ---------- */
  window.A1_GRAMMAR[7] = [
    {
      id: "a1-k7-und-oder-aber",
      t: "Sätze verbinden: und, oder, aber", tAr: "ربط الجمل: und وoder وaber",
      summary: "<b>und</b>, <b>oder</b> und <b>aber</b> verbinden zwei Hauptsätze. Sie stehen auf <b>Position 0</b>: Danach kommt ein normaler Satz mit dem Verb auf Position 2. Vor <b>aber</b> steht immer ein Komma.",
      summaryAr: "und وoder وaber بيربطوا جملتين رئيسيتين. بيقفوا في «الموضع صفر»: بعدهم جملة عادية والفعل في الموضع التاني. وقبل aber لازم فاصلة.",
      sections: [
        sec("1. Position 0", "الموضع صفر",
          "Die Konnektoren <b>und, oder, aber</b> zählen nicht als Position. Nach ihnen beginnt der zweite Satz ganz normal: Subjekt – Verb – Rest.",
          "أدوات الربط دي مش بتتحسب موضع. بعدها الجملة التانية بتبدأ عادي: الفاعل – الفعل – الباقي.",
          { table: { head: ["Satz 1", "Position 0", "Satz 2"], rows: [["Ich bin in Köln", "und", "ich mache ein Praktikum."], ["Ich telefoniere", "oder", "ich arbeite am Computer."], ["Die Firma ist klein,", "aber", "sie hat viele Kunden."]] },
            examples: [["Laura trinkt Kaffee und sie isst ein Sandwich.", "لورا بتشرب قهوة وبتاكل ساندويتش."]] }),
        sec("2. Gleiches Subjekt weglassen", "حذف الفاعل المتكرر",
          "Bei <b>und</b> und <b>oder</b> kann man das gleiche Subjekt im zweiten Satz weglassen: <b>Ich bin in Köln und mache ein Praktikum.</b> Bei <b>aber</b> nennt man das Subjekt meistens noch einmal.",
          "مع und وoder ممكن نحذف الفاعل لو هو نفسه: Ich bin in Köln und mache ein Praktikum. ومع aber غالبًا بنكرر الفاعل.",
          { examples: [["Ich telefoniere oder arbeite am Computer.", "بكلّم في التليفون أو بشتغل على الكمبيوتر."], ["Ich arbeite viel, aber ich bin glücklich.", "بشتغل كتير، بس أنا مبسوط."]] }),
        sec("3. Bedeutung", "المعنى",
          "<b>und</b> = plus, beides. <b>oder</b> = eine von zwei Möglichkeiten. <b>aber</b> = Gegensatz, etwas ist anders als erwartet.",
          "und = الاتنين مع بعض. oder = اختيار من اتنين. aber = عكس أو حاجة غير متوقعة.",
          { examples: [["Die Kollegen sind nett und lustig.", "الزملا لطاف ودمهم خفيف."], ["Kommst du heute oder morgen?", "هتيجي النهارده ولا بكرة؟"], ["Das Büro ist klein, aber hell.", "المكتب صغير بس منوّر."]] }),
        sec("4. Ja, nein, doch", "Ja وnein وdoch",
          "Auf eine <b>negative Frage</b> antwortet man positiv mit <b>doch</b>: <b>Kommst du nicht mit? – Doch!</b> (= Ja, ich komme mit.) Mit <b>Nein</b> bestätigt man das Negative.",
          "على سؤال منفي بنرد بالإيجاب بـ doch: Kommst du nicht mit? – Doch! (يعني أيوه جاي). وبـ nein بنأكد النفي.",
          { table: { head: ["Frage", "positiv", "negativ"], rows: [["Hast du einen Termin?", "Ja.", "Nein."], ["Hast du keinen Termin?", "Doch.", "Nein."], ["Kommst du nicht mit?", "Doch.", "Nein."]] } })
      ],
      pitfalls: [
        P("Ich bin müde, aber gehe ich nicht ins Bett.", "Ich bin müde, aber ich gehe nicht ins Bett.", "بعد aber الترتيب عادي: الفاعل ثم الفعل."),
        P("Ich bin in Köln und ich ein Praktikum mache.", "Ich bin in Köln und ich mache ein Praktikum.", "بعد und الجملة عادية: الفعل في الموضع التاني."),
        P("Die Firma ist klein aber sie hat viele Kunden.", "Die Firma ist klein, aber sie hat viele Kunden.", "قبل aber لازم فاصلة."),
        P("Hast du keine Zeit? – Ja, ich habe Zeit.", "Hast du keine Zeit? – Doch, ich habe Zeit.", "رد إيجابي على سؤال منفي: Doch.")
      ],
      exercises: [
        C("Ich trinke Kaffee ___ ich esse ein Brötchen.", ["und", "aber", "oder"], 0, "الاتنين مع بعض: und."),
        C("Die Arbeit ist interessant, ___ sie ist anstrengend.", ["aber", "und", "oder"], 0, "عكس: aber."),
        C("Möchtest du Tee ___ Kaffee?", ["oder", "aber", "und"], 0, "اختيار: oder."),
        C("Kommst du nicht mit? – ___, ich komme gern!", ["Doch", "Ja", "Nein"], 0, "إيجاب على سؤال منفي: Doch."),
        GAP("Ich arbeite am Computer ___ ich telefoniere mit Kunden. (plus)", ["und"], "إضافة: und."),
        GAP("Das Büro ist klein, ___ es ist hell. (Gegensatz)", ["aber"], "العكس: aber."),
        ORD("Ich bin in Köln und", ["mache", "ein", "Praktikum", "ich"], ["ich mache ein Praktikum"], "بعد und: الفاعل ثم الفعل."),
        ORD("Die Kollegen sind nett, aber", ["keine", "sie", "haben", "Zeit"], ["sie haben keine Zeit"], "بعد aber: الفاعل ثم الفعل."),
        TRA("Verbinde mit „aber“: Adnan geht heute früh. Morgen bleibt er lang.", ["Adnan geht heute früh, aber morgen bleibt er lang."], "بعد aber ممكن ظرف الزمان في الأول والفعل في التاني."),
        ERR("Ich lerne Deutsch und ich am Abend Freunde treffe.", ["Ich lerne Deutsch und ich treffe am Abend Freunde.", "Ich lerne Deutsch und treffe am Abend Freunde."], "بعد und الفعل في الموضع التاني."),
        TF("Nach „oder“ steht das Verb am Satzende.", false, "بعد oder الجملة عادية والفعل في الموضع التاني."),
        TF("Vor „aber“ steht ein Komma.", true, "أيوه، قبل aber لازم فاصلة.")
      ]
    },
    {
      id: "a1-k7-dativ-mit",
      t: "Artikel im Dativ und mit + Dativ", tAr: "الأدوات في الداتيف وmit + Dativ",
      summary: "Nach der Präposition <b>mit</b> steht immer der <b>Dativ</b>: mit <b>dem</b> Freund, mit <b>dem</b> Taxi, mit <b>der</b> Freundin, mit <b>den</b> Kollegen. Im Dativ Plural haben die meisten Nomen ein <b>-n</b>.",
      summaryAr: "بعد mit دايمًا بييجي الداتيف: mit dem للمذكر والمحايد، mit der للمؤنث، mit den للجمع. وفي جمع الداتيف معظم الأسماء بتاخد n في الآخر.",
      sections: [
        sec("1. Die Artikel im Dativ", "الأدوات في الداتيف",
          "Fragewort: <b>Mit wem?</b> Maskulin und neutral: <b>dem / einem</b>. Feminin: <b>der / einer</b>. Plural: <b>den</b> + Nomen mit <b>-n</b>.",
          "أداة السؤال: Mit wem? (مع مين؟). المذكر والمحايد: dem/einem. المؤنث: der/einer. الجمع: den والاسم ياخد n.",
          { table: { head: ["Nominativ", "Dativ (bestimmt)", "Dativ (unbestimmt)", "Negativ"], rows: [["der Freund", "mit dem Freund", "mit einem Freund", "mit keinem Freund"], ["das Taxi", "mit dem Taxi", "mit einem Taxi", "mit keinem Taxi"], ["die Freundin", "mit der Freundin", "mit einer Freundin", "mit keiner Freundin"], ["die Kollegen (Pl.)", "mit den Kollegen", "mit Kollegen", "mit keinen Kollegen"]] },
            examples: [["Laura fährt mit einem Freund und einer Freundin.", "لورا مسافرة مع صاحب وصاحبة."], ["Wir fahren mit dem Taxi.", "إحنا رايحين بالتاكسي."]] }),
        sec("2. mit für Personen und Verkehrsmittel", "mit للأشخاص والمواصلات",
          "<b>mit</b> bedeutet „zusammen“: Ich spreche <b>mit der Chefin</b>. Für Verkehrsmittel sagt man auch <b>mit</b>: mit <b>dem</b> Bus, mit <b>der</b> U-Bahn, mit <b>dem</b> Fahrrad.",
          "mit معناها «مع»: Ich spreche mit der Chefin. وللمواصلات بنقول mit كمان: mit dem Bus وmit der U-Bahn وmit dem Fahrrad.",
          { examples: [["Ich fahre mit der U-Bahn zur Arbeit.", "بروح الشغل بالمترو."], ["Sie feiert mit den Mitarbeitern.", "هي بتحتفل مع الموظفين."]] }),
        sec("3. Dativ Plural: + n", "جمع الداتيف: + n",
          "Im Dativ Plural bekommt das Nomen ein <b>-n</b>: die Kollegen → mit den Kolleg<b>en</b> (schon -n), die Kinder → mit den Kinder<b>n</b>, die Freunde → mit den Freunde<b>n</b>. <b>Kein</b> -n bei Plural auf <b>-s</b>: mit den Chefs, mit den Autos.",
          "في جمع الداتيف الاسم بياخد n: Kindern وFreunden. ولو الجمع بينتهي بـ s مفيش n: mit den Chefs.",
          { examples: [["Ich spiele mit den Kindern.", "بلعب مع العيال."], ["Er telefoniert mit den Chefs.", "بيكلّم المديرين."]] })
      ],
      pitfalls: [
        P("Ich fahre mit den Bus.", "Ich fahre mit dem Bus.", "der Bus في الداتيف ← dem Bus."),
        P("Ich spreche mit die Chefin.", "Ich spreche mit der Chefin.", "die في الداتيف ← der."),
        P("Ich spiele mit den Kinder.", "Ich spiele mit den Kindern.", "جمع الداتيف بياخد n: Kindern."),
        P("Ich gehe mit meine Freundin ins Kino.", "Ich gehe mit meiner Freundin ins Kino.", "meine في الداتيف المؤنث ← meiner.")
      ],
      exercises: [
        C("Ich fahre mit ___ U-Bahn.", ["der", "die", "dem"], 0, "die U-Bahn ← mit der U-Bahn."),
        C("Sie spricht mit ___ Chef.", ["dem", "den", "der"], 0, "der Chef ← mit dem Chef."),
        C("Wir fahren mit ___ Taxi.", ["dem", "das", "den"], 0, "das Taxi ← mit dem Taxi."),
        C("Er spielt mit den ___.", ["Kindern", "Kinder", "Kinds"], 0, "جمع الداتيف: Kindern."),
        GAP("Laura fährt mit ___ Freundin nach Bonn. (eine)", ["einer"], "eine في الداتيف ← einer."),
        GAP("Ich telefoniere mit ___ Kunden. (der)", ["dem"], "der Kunde ← mit dem Kunden."),
        GAP("Adnan arbeitet mit ___ Mitarbeitern. (die, Plural)", ["den"], "الجمع في الداتيف: den."),
        ORD("", ["Ich", "fahre", "mit", "dem", "Fahrrad"], ["Ich fahre mit dem Fahrrad"], "Subjekt + Verb + mit + Dativ."),
        TRA("Schreibe im Dativ: Ich spreche mit (die Lehrerin).", ["Ich spreche mit der Lehrerin."], "die ← der."),
        ERR("Ich gehe mit mein Kollege essen.", ["Ich gehe mit meinem Kollegen essen."], "mein Kollege ← mit meinem Kollegen."),
        TF("Nach „mit“ steht immer der Dativ.", true, "أيوه، mit دايمًا مع الداتيف."),
        TF("Im Dativ heißt „das Kind“ → „mit das Kind“.", false, "الصح: mit dem Kind.")
      ]
    },
    {
      id: "a1-k7-ortsangaben",
      t: "Ortsangaben: zu, bei, aus, von, in + Dativ", tAr: "تحديد المكان: zu وbei وaus وvon وin + Dativ",
      summary: "Mit Präpositionen sagt man, <b>wohin</b> man geht (zu), <b>wo</b> man ist (bei, in) und <b>woher</b> man kommt (aus, von). Alle diese Präpositionen stehen hier mit <b>Dativ</b>. Oft benutzt man Kurzformen: <b>zum, zur, beim, vom, im</b>.",
      summaryAr: "بحروف الجر بنقول رايح فين (zu)، وإنت فين (bei وin)، وجاي منين (aus وvon). كلهم هنا مع الداتيف. وغالبًا بنستخدم الاختصارات: zum وzur وbeim وvom وim.",
      sections: [
        sec("1. Wohin? Wo? Woher?", "لفين؟ فين؟ منين؟",
          "Bei Personen: <b>zu</b> (wohin), <b>bei</b> (wo), <b>von</b> (woher). Bei Gebäuden/Orten: <b>zu</b> oder <b>in</b> (wohin), <b>in</b> (wo), <b>aus</b> (woher).",
          "مع الأشخاص: zu (لفين) وbei (فين) وvon (منين). مع المباني والأماكن: zu (لفين) وin (فين) وaus (منين، من جوه).",
          { table: { head: ["", "Person", "Gebäude/Ort"], rows: [["Wohin?", "zum Chef / zur Chefin", "zur Bank / zum Supermarkt"], ["Wo?", "beim Chef / bei der Chefin", "in der Bank / im Haus"], ["Woher?", "vom Chef / von der Chefin", "aus der Bank / aus dem Haus"]] },
            examples: [["Ich gehe zum Arzt.", "رايح للدكتور."], ["Ich war beim Arzt.", "كنت عند الدكتور."], ["Ich komme vom Arzt.", "جاي من عند الدكتور."]] }),
        sec("2. Kurzformen", "الاختصارات",
          "Präposition + dem/der werden oft zu einem Wort: <b>zu + dem = zum</b>, <b>zu + der = zur</b>, <b>bei + dem = beim</b>, <b>von + dem = vom</b>, <b>in + dem = im</b>.",
          "حرف الجر + dem أو der غالبًا بيبقوا كلمة واحدة: zum وzur وbeim وvom وim.",
          { table: { head: ["Präposition + Artikel", "Kurzform"], rows: [["zu + dem", "zum"], ["zu + der", "zur"], ["bei + dem", "beim"], ["von + dem", "vom"], ["in + dem", "im"]] } }),
        sec("3. Besondere Ausdrücke", "تعبيرات خاصة",
          "<b>nach Hause</b> (wohin) – <b>zu Hause</b> (wo). Ohne Artikel: <b>zu Hause, nach Hause</b>. Für Städte und Länder ohne Artikel sagt man <b>nach</b>: nach Köln, nach Spanien.",
          "nach Hause (رايح البيت) وzu Hause (في البيت). وللمدن والبلاد اللي من غير أداة بنقول nach: nach Köln.",
          { examples: [["Am Dienstag geht sie früh nach Hause.", "يوم التلات هتروّح بدري."], ["Am Abend bin ich zu Hause.", "بالليل أنا في البيت."]] })
      ],
      pitfalls: [
        P("Ich gehe zu der Bank.", "Ich gehe zur Bank.", "zu + der ← zur (الأحسن الاختصار)."),
        P("Ich bin bei der Bank. (im Gebäude)", "Ich bin in der Bank.", "جوه المبنى: in der Bank."),
        P("Ich komme von der Bank. (aus dem Gebäude)", "Ich komme aus der Bank.", "طالع من المبنى: aus."),
        P("Ich gehe zu Hause.", "Ich gehe nach Hause.", "الاتجاه للبيت: nach Hause.")
      ],
      exercises: [
        C("Wohin gehst du? – ___ Supermarkt.", ["Zum", "Zur", "Beim"], 0, "der Supermarkt ← zum."),
        C("Wo warst du? – ___ Zahnarzt.", ["Beim", "Zum", "Vom"], 0, "فين؟ عند شخص ← beim."),
        C("Woher kommt Tom? – ___ der Bank.", ["Aus", "Bei", "Zu"], 0, "طالع من مبنى ← aus."),
        C("Julia kommt ___ Chef.", ["vom", "zum", "beim"], 0, "منين؟ من عند شخص ← vom."),
        GAP("Ich muss heute noch ___ Post gehen. (zu + der)", ["zur"], "zu + der = zur."),
        GAP("Er ist ___ Haus. (in + dem)", ["im"], "in + dem = im."),
        GAP("Sie kommt ___ der Chefin. (von)", ["von"], "von der Chefin."),
        ORD("", ["Ich", "gehe", "heute", "zur", "Bank"], ["Ich gehe heute zur Bank"], "الفعل في الموضع التاني."),
        TRA("Antworte mit „bei“: Wo warst du? (die Ärztin)", ["Ich war bei der Ärztin.", "Bei der Ärztin."], "bei + Dativ: bei der Ärztin."),
        ERR("Am Abend fahre ich zu Freunden nach Hause und bleibe nach Hause.", ["Am Abend fahre ich zu Freunden nach Hause und bleibe zu Hause."], "الثبات في البيت: zu Hause."),
        TF("„zur“ ist die Kurzform von „zu der“.", true, "أيوه: zu + der = zur."),
        TF("Wo? – „Ich bin zum Chef.“ ist richtig.", false, "فين؟ ← beim Chef.")
      ]
    }
  ];

  /* ---------- Kapitel 8 ---------- */
  window.A1_GRAMMAR[8] = [
    {
      id: "a1-k8-imperativ",
      t: "Der Imperativ: du, ihr, Sie", tAr: "صيغة الأمر: du وihr وSie",
      summary: "Mit dem <b>Imperativ</b> gibt man Aufforderungen, Tipps und Anweisungen: <b>Mach Sport! Macht Sport! Machen Sie Sport!</b> Das Verb steht auf <b>Position 1</b>. Bei du und ihr gibt es kein Subjekt.",
      summaryAr: "بصيغة الأمر بنطلب وبندّي نصايح وتعليمات: Mach Sport! وMacht Sport! وMachen Sie Sport! الفعل في الموضع الأول. ومع du وihr مفيش فاعل.",
      sections: [
        sec("1. Imperativ mit du", "الأمر مع du",
          "Nimm die du-Form und streiche <b>-st</b> und <b>du</b>: du mach<b>st</b> → <b>Mach!</b> Trennbare Verben: das Präfix geht ans Ende: du stehst auf → <b>Steh auf!</b> Verben mit e → i behalten das i: du isst → <b>Iss!</b>, du nimmst → <b>Nimm!</b> Aber: du läufst → <b>Lauf!</b> (kein Umlaut).",
          "خد تصريف du واحذف -st وdu: du machst ← Mach! والأفعال المنفصلة البادئة بتروح في الآخر: Steh auf! والأفعال اللي فيها e ← i بتفضل i: Iss! وNimm! بس laufen من غير أوملاوت: Lauf!",
          { table: { head: ["du-Form", "Imperativ"], rows: [["du machst", "Mach!"], ["du stehst auf", "Steh auf!"], ["du isst", "Iss!"], ["du nimmst", "Nimm!"], ["du läufst", "Lauf!"], ["du bist", "Sei …!"], ["du arbeitest", "Arbeite!"]] },
            examples: [["Trink mindestens zwei Liter!", "اشرب على الأقل 2 لتر!"], ["Zieh die Sportschuhe an!", "البس الكوتشي!"]] }),
        sec("2. Imperativ mit ihr", "الأمر مع ihr",
          "Die ihr-Form ohne <b>ihr</b>: ihr macht → <b>Macht!</b>, ihr steht auf → <b>Steht auf!</b>, ihr seid → <b>Seid!</b>",
          "تصريف ihr من غير ihr: Macht! وSteht auf! وSeid!",
          { examples: [["Macht weiter so!", "كمّلوا كده!"], ["Seid bitte leise!", "اهدوا لو سمحتوا!"]] }),
        sec("3. Imperativ mit Sie", "الأمر مع Sie",
          "Die Sie-Form, aber das Verb steht zuerst: Sie machen → <b>Machen Sie!</b>, Sie stehen auf → <b>Stehen Sie auf!</b>, sein → <b>Seien Sie!</b> Mit <b>bitte</b> wird es höflich.",
          "تصريف Sie بس الفعل في الأول: Machen Sie! وStehen Sie auf! وSeien Sie! ومع bitte بتبقى مؤدبة أكتر.",
          { table: { head: ["", "machen", "aufstehen", "sein"], rows: [["du", "Mach!", "Steh auf!", "Sei …!"], ["ihr", "Macht!", "Steht auf!", "Seid …!"], ["Sie", "Machen Sie!", "Stehen Sie auf!", "Seien Sie …!"]] },
            examples: [["Gehen Sie bitte ins Fitness-Studio!", "روح الجيم لو سمحت!"]] }),
        sec("4. Verben auf -t/-d", "أفعال تنتهي بـ t أو d",
          "Bei Verben mit Stamm auf <b>-t</b> oder <b>-d</b> hat der du-Imperativ oft ein <b>-e</b>: <b>Warte!</b> <b>Arbeite nicht so viel!</b>",
          "الأفعال اللي جذرها بينتهي بـ t أو d بتاخد -e في أمر du: Warte! وArbeite!",
          { examples: [["Warte bitte kurz!", "استنّى شوية لو سمحت!"]] })
      ],
      pitfalls: [
        P("Machst Sport!", "Mach Sport!", "في أمر du بنشيل -st."),
        P("Du steh auf!", "Steh auf!", "مع du وihr مفيش فاعل في الأمر."),
        P("Ess mehr Obst!", "Iss mehr Obst!", "essen ← du isst ← Iss!"),
        P("Sie trinken viel Wasser!", "Trinken Sie viel Wasser!", "مع Sie الفعل الأول.")
      ],
      exercises: [
        C("du gehst raus → ___", ["Geh raus!", "Gehst raus!", "Gehe raus du!"], 0, "نحذف -st وdu."),
        C("ihr steht auf → ___", ["Steht auf!", "Steh auf!", "Stehen auf!"], 0, "ihr-Form من غير ihr."),
        C("Sie nehmen die Tablette → ___", ["Nehmen Sie die Tablette!", "Nimm Sie die Tablette!", "Sie nehmen die Tablette!"], 0, "Verb + Sie."),
        C("du isst einen Salat → ___", ["Iss einen Salat!", "Ess einen Salat!", "Isst einen Salat!"], 0, "e ← i بيفضل: Iss!"),
        GAP("___ aktiv! (sein, du)", ["Sei"], "sein مع du ← Sei!"),
        GAP("___ leise! (sein, ihr)", ["Seid"], "sein مع ihr ← Seid!"),
        GAP("___ bitte kurz! (warten, du)", ["Warte"], "warten ← Warte! (مع -e)."),
        ORD("", ["Zieh", "die", "Sportschuhe", "an"], ["Zieh die Sportschuhe an"], "الفعل في الأول والبادئة في الآخر."),
        TRA("Mach einen Imperativ mit Sie: Sie kommen pünktlich.", ["Kommen Sie pünktlich!"], "Verb + Sie."),
        TRA("Mach einen Imperativ mit du: Du läufst schnell.", ["Lauf schnell!"], "laufen ← Lauf! (من غير أوملاوت)."),
        ERR("Fährst nicht so schnell!", ["Fahr nicht so schnell!"], "fahren ← Fahr! (من غير أوملاوت وst)."),
        TF("Im Imperativ mit „du“ steht „du“ im Satz.", false, "مع du مفيش فاعل: Mach!"),
        TF("„Seien Sie ruhig!“ ist richtig.", true, "sein مع Sie ← Seien Sie!")
      ]
    },
    {
      id: "a1-k8-sollen",
      t: "Anweisungen wiedergeben: sollen", tAr: "نقل التعليمات: sollen",
      summary: "Mit <b>sollen</b> sagt man, was eine andere Person (Arzt, Chef, Lehrerin) möchte: <b>Die Ärztin sagt: „Trinken Sie viel!“ → Ich soll viel trinken.</b> Das Modalverb steht auf Position 2, der Infinitiv am Ende.",
      summaryAr: "بـ sollen بنقول اللي شخص تاني (الدكتور أو المدير أو المدرّسة) عايزه: الدكتورة بتقول «اشرب كتير!» ← Ich soll viel trinken. الفعل المساعد في الموضع التاني والمصدر في الآخر.",
      sections: [
        sec("1. Die Formen von sollen", "تصريف sollen",
          "ich <b>soll</b>, du <b>sollst</b>, er/sie/es <b>soll</b>, wir <b>sollen</b>, ihr <b>sollt</b>, sie/Sie <b>sollen</b>. Bei ich und er/sie/es gibt es keine Endung.",
          "ich soll وdu sollst وer soll وwir sollen وihr sollt وsie sollen. مع ich وer مفيش نهاية.",
          { table: { head: ["Person", "sollen", "müssen", "dürfen"], rows: [["ich", "soll", "muss", "darf"], ["du", "sollst", "musst", "darfst"], ["er/sie/es", "soll", "muss", "darf"], ["wir", "sollen", "müssen", "dürfen"], ["ihr", "sollt", "müsst", "dürft"], ["sie/Sie", "sollen", "müssen", "dürfen"]] } }),
        sec("2. Vom Imperativ zu sollen", "من صيغة الأمر لـ sollen",
          "Der Arzt sagt einen <b>Imperativ</b>. Der Patient erzählt es mit <b>sollen</b>: „Bewegen Sie das Bein wenig!“ → <b>Ich soll das Bein wenig bewegen.</b>",
          "الدكتور بيقول أمر. المريض بيحكيه بـ sollen: «Bewegen Sie das Bein wenig!» ← Ich soll das Bein wenig bewegen.",
          { examples: [["„Wechseln Sie den Verband!“ → Ich soll den Verband wechseln.", "«غيّر الرباط!» ← المفروض أغيّر الرباط."], ["„Geh früh ins Bett!“ → Du sollst früh ins Bett gehen.", "«نام بدري!» ← المفروض تنام بدري."]] }),
        sec("3. Die Satzklammer", "قوس الجملة",
          "<b>sollen</b> steht auf <b>Position 2</b>, das Verb im Infinitiv steht am <b>Ende</b>. Trennbare Verben stehen am Ende zusammen: Ich soll früh <b>aufstehen</b>.",
          "sollen في الموضع التاني والفعل في المصدر في الآخر. والأفعال المنفصلة بتبقى مع بعض في الآخر: aufstehen.",
          { examples: [["Wir sollen pünktlich sein.", "المفروض نكون في الميعاد."], ["Soll ich morgen wiederkommen?", "المفروض آجي تاني بكرة؟"]] })
      ],
      pitfalls: [
        P("Ich solle viel trinken.", "Ich soll viel trinken.", "ich soll من غير نهاية."),
        P("Ich soll trinken viel Wasser.", "Ich soll viel Wasser trinken.", "المصدر في آخر الجملة."),
        P("Er sollt zu Hause bleiben.", "Er soll zu Hause bleiben.", "er soll."),
        P("Ich soll den Verband wechselt.", "Ich soll den Verband wechseln.", "بعد sollen الفعل في المصدر.")
      ],
      exercises: [
        C("Die Ärztin sagt, ich ___ viel schlafen.", ["soll", "sollst", "sollen"], 0, "ich soll."),
        C("Du ___ das Bein nicht bewegen.", ["sollst", "soll", "sollt"], 0, "du sollst."),
        C("Ihr ___ Hausaufgaben machen.", ["sollt", "sollen", "sollst"], 0, "ihr sollt."),
        GAP("Wir ___ pünktlich sein. (sollen)", ["sollen"], "wir sollen."),
        GAP("Frau Pohn ___ die Salbe morgens nehmen. (sollen)", ["soll"], "sie soll."),
        ORD("", ["Ich", "soll", "viel", "Tee", "trinken"], ["Ich soll viel Tee trinken"], "sollen في التاني والمصدر في الآخر."),
        ORD("", ["Du", "sollst", "früh", "aufstehen"], ["Du sollst früh aufstehen"], "المصدر aufstehen في الآخر."),
        TRA("Der Arzt sagt: „Bleiben Sie zu Hause!“ → Ich ___", ["Ich soll zu Hause bleiben."], "الأمر ← soll + مصدر."),
        TRA("Die Lehrerin sagt zu uns: „Lest den Text!“ → Wir ___", ["Wir sollen den Text lesen."], "wir sollen + lesen."),
        ERR("Ich soll morgen wieder kommen zur Kontrolle.", ["Ich soll morgen zur Kontrolle wiederkommen."], "المصدر في الآخر."),
        TF("Mit „sollen“ gibt man wieder, was eine andere Person möchte.", true, "أيوه، sollen لنقل كلام حد تاني."),
        TF("Bei „er“ heißt es „er sollt“.", false, "الصح: er soll.")
      ]
    },
    {
      id: "a1-k8-muessen-duerfen",
      t: "müssen und (nicht) dürfen", tAr: "müssen و(nicht) dürfen",
      summary: "<b>müssen</b> = etwas ist notwendig (ein Gebot). <b>dürfen</b> = etwas ist erlaubt. <b>nicht dürfen</b> = etwas ist verboten. Achtung: <b>nicht müssen</b> heißt „nicht notwendig“, nicht „verboten“.",
      summaryAr: "müssen = لازم. dürfen = مسموح. nicht dürfen = ممنوع. خلي بالك: nicht müssen معناها «مش لازم»، مش «ممنوع».",
      sections: [
        sec("1. Die Formen", "التصريف",
          "<b>müssen:</b> ich muss, du musst, er muss, wir müssen, ihr müsst, sie müssen. <b>dürfen:</b> ich darf, du darfst, er darf, wir dürfen, ihr dürft, sie dürfen. Im Singular ändert sich der Vokal.",
          "müssen: ich muss وdu musst وer muss … dürfen: ich darf وdu darfst وer darf … في المفرد الحرف المتحرك بيتغير.",
          { table: { head: ["Person", "müssen", "dürfen"], rows: [["ich", "muss", "darf"], ["du", "musst", "darfst"], ["er/sie/es", "muss", "darf"], ["wir", "müssen", "dürfen"], ["ihr", "müsst", "dürft"], ["sie/Sie", "müssen", "dürfen"]] } }),
        sec("2. Gebot, Erlaubnis, Verbot", "اللازم والمسموح والممنوع",
          "<b>Sie müssen im Bett bleiben.</b> (Gebot) – <b>Sie dürfen duschen.</b> (Erlaubnis: Duschen ist erlaubt.) – <b>Sie dürfen nicht baden.</b> (Verbot: Baden ist verboten.)",
          "Sie müssen im Bett bleiben = لازم. Sie dürfen duschen = مسموح. Sie dürfen nicht baden = ممنوع.",
          { table: { head: ["Bedeutung", "Beispiel", "anders gesagt"], rows: [["Gebot (!)", "Sie müssen im Bett bleiben.", "Bleiben Sie im Bett!"], ["Erlaubnis (✓)", "Sie dürfen duschen.", "Duschen ist erlaubt."], ["Verbot (✗)", "Sie dürfen nicht rauchen.", "Rauchen ist verboten."]] } }),
        sec("3. Satzklammer und Fragen", "قوس الجملة والأسئلة",
          "Das Modalverb steht auf Position 2, der Infinitiv am Ende. In Ja/Nein-Fragen steht das Modalverb auf Position 1: <b>Darf ich duschen? Muss ich im Bett bleiben?</b>",
          "الفعل المساعد في التاني والمصدر في الآخر. وفي أسئلة أيوه/لأ الفعل المساعد في الأول: Darf ich duschen?",
          { examples: [["Darf ich Kaffee trinken? – Nein, Sie dürfen keinen Kaffee trinken.", "ينفع أشرب قهوة؟ – لأ، ممنوع تشرب قهوة."], ["Musst du heute arbeiten?", "لازم تشتغل النهارده؟"]] })
      ],
      pitfalls: [
        P("Du darfst nicht rauchen. (= Du musst nicht rauchen.)", "Du darfst nicht rauchen. (= Rauchen ist verboten.)", "nicht dürfen = ممنوع، مش «مش لازم»."),
        P("Ich müsse im Bett bleiben.", "Ich muss im Bett bleiben.", "ich muss."),
        P("Er dürft duschen.", "Er darf duschen.", "er darf."),
        P("Sie dürfen baden nicht.", "Sie dürfen nicht baden.", "nicht قبل المصدر.")
      ],
      exercises: [
        C("Mit Fieber ___ Sie nicht baden.", ["dürfen", "müssen", "sollen"], 0, "ممنوع ← nicht dürfen."),
        C("Sie ___ im Bett bleiben. Das ist wichtig!", ["müssen", "dürfen", "möchten"], 0, "لازم ← müssen."),
        C("Duschen ist erlaubt. → Sie ___ duschen.", ["dürfen", "müssen nicht", "sollen nicht"], 0, "مسموح ← dürfen."),
        C("Rauchen ist verboten. → Sie ___ nicht rauchen.", ["dürfen", "müssen", "können"], 0, "ممنوع ← nicht dürfen."),
        GAP("Du ___ heute nicht arbeiten. Du bist krank! (dürfen)", ["darfst"], "du darfst."),
        GAP("Ich ___ dreimal täglich eine Tablette nehmen. (müssen)", ["muss"], "ich muss."),
        GAP("Ihr ___ viel Tee trinken. Tee ist gut. (dürfen)", ["dürft"], "ihr dürft."),
        ORD("", ["Darf", "ich", "Kaffee", "trinken"], ["Darf ich Kaffee trinken"], "سؤال أيوه/لأ: الفعل المساعد الأول."),
        TRA("Schreibe mit „nicht dürfen“: Baden ist verboten. → Sie ___", ["Sie dürfen nicht baden."], "verboten ← nicht dürfen."),
        ERR("Jonas muss nicht rausgehen, das ist verboten.", ["Jonas darf nicht rausgehen, das ist verboten."], "الممنوع ← nicht dürfen."),
        TF("„Sie müssen nicht arbeiten“ bedeutet: Arbeiten ist verboten.", false, "nicht müssen = مش لازم، مش ممنوع."),
        TF("„Er darf viel trinken“ bedeutet: Trinken ist erlaubt.", true, "dürfen = مسموح.")
      ]
    }
  ];

  /* ---------- Kapitel 9 ---------- */
  window.A1_GRAMMAR[9] = [
    {
      id: "a1-k9-sein-adjektiv",
      t: "sein + Adjektiv: sehr, zu, nicht", tAr: "sein + صفة: sehr وzu وnicht",
      summary: "Mit <b>sein + Adjektiv</b> beschreibt man Dinge: <b>Die Wohnung ist teuer.</b> Das Adjektiv nach sein hat <b>keine Endung</b>. Mit <b>sehr</b> wird es stärker, mit <b>zu</b> ist es mehr als gut (negativ), mit <b>nicht</b> verneint man es.",
      summaryAr: "بـ sein + صفة بنوصف الحاجات: Die Wohnung ist teuer. الصفة بعد sein من غير نهاية. sehr بتقوّيها، وzu يعني أكتر من اللازم (سلبي)، وnicht بتنفيها.",
      sections: [
        sec("1. Das Adjektiv nach sein", "الصفة بعد sein",
          "Nach <b>sein</b> (und auch nach finden, aussehen) bleibt das Adjektiv ohne Endung: Die Wohnung <b>ist hell</b>. Ich finde die Küche <b>klein</b>. Das Zimmer <b>sieht gemütlich aus</b>.",
          "بعد sein (وكمان بعد finden وaussehen) الصفة بتفضل من غير نهاية: Die Wohnung ist hell.",
          { examples: [["Das Zimmer ist ruhig.", "الأوضة هادية."], ["Der Balkon ist groß.", "البلكونة كبيرة."]] }),
        sec("2. sehr, zu, nicht", "sehr وzu وnicht",
          "<b>sehr</b> = mehr (positiv oder neutral). <b>zu</b> = mehr als gut, ein Problem. <b>nicht</b> = das Gegenteil. Oft: <b>nicht billig</b> = teuer.",
          "sehr = جدًا. zu = زيادة عن اللزوم (مشكلة). nicht = العكس.",
          { table: { head: ["Satz", "Bedeutung"], rows: [["Die Wohnung ist teuer.", "Sie kostet viel."], ["Die Wohnung ist sehr teuer.", "Sie kostet sehr viel."], ["Die Wohnung ist zu teuer.", "Ich kann sie nicht bezahlen."], ["Die Wohnung ist nicht billig.", "Sie ist teuer."]] } }),
        sec("3. Gegensätze", "الأضداد",
          "Lerne Adjektive in Paaren: <b>groß – klein, hell – dunkel, ruhig – laut, teuer – billig/günstig, alt – neu, schön – hässlich</b>.",
          "احفظ الصفات أزواج: groß – klein وhell – dunkel وruhig – laut وteuer – billig.",
          { examples: [["Die Küche ist nicht groß, sie ist klein.", "المطبخ مش كبير، هو صغير."]] })
      ],
      pitfalls: [
        P("Die Wohnung ist teure.", "Die Wohnung ist teuer.", "بعد sein الصفة من غير نهاية."),
        P("Die Wohnung ist zu schön.", "Die Wohnung ist sehr schön.", "zu = مشكلة؛ للمدح بنقول sehr."),
        P("Das Zimmer ist nicht dunkel, es ist laut.", "Das Zimmer ist nicht dunkel, es ist hell.", "ضد dunkel هو hell."),
        P("Die Wohnung ist sehr zu klein.", "Die Wohnung ist viel zu klein.", "مع zu بنقول viel zu.")
      ],
      exercises: [
        C("1.200 Euro! Die Wohnung ist ___ teuer für uns.", ["zu", "sehr gut", "nicht"], 0, "مشكلة ← zu."),
        C("Das Gegenteil von „hell“ ist …", ["dunkel", "laut", "klein"], 0, "hell ↔ dunkel."),
        C("Die Wohnung ist nicht billig. Sie ist …", ["teuer", "günstig", "klein"], 0, "nicht billig = teuer."),
        C("Die Küche ist ___.", ["groß", "große", "großen"], 0, "بعد sein من غير نهاية."),
        GAP("Die Straße ist laut, aber das Zimmer ist ___. (Gegenteil von laut)", ["ruhig", "leise"], "laut ↔ ruhig."),
        GAP("Die Wohnung hat 120 qm. Sie ist ___ groß. (stark positiv)", ["sehr"], "مدح قوي: sehr."),
        ORD("", ["Die", "Wohnung", "ist", "zu", "klein"], ["Die Wohnung ist zu klein"], "sein + zu + Adjektiv."),
        TRA("Sag es mit „nicht“: Die Wohnung ist teuer. → Die Wohnung ist nicht ___.", ["Die Wohnung ist nicht billig.", "billig", "günstig"], "teuer = nicht billig."),
        ERR("Das Wohnzimmer ist sehr gemütliches.", ["Das Wohnzimmer ist sehr gemütlich."], "بعد sein من غير نهاية."),
        TF("„Die Wohnung ist zu teuer“ ist eine positive Aussage.", false, "zu = مشكلة، سلبية."),
        TF("Nach „sein“ hat das Adjektiv keine Endung.", true, "أيوه.")
      ]
    },
    {
      id: "a1-k9-wohin-akkusativ",
      t: "Wohin? in + Akkusativ", tAr: "لفين؟ in + Akkusativ",
      summary: "Auf die Frage <b>Wohin?</b> (Richtung, Bewegung) steht <b>in</b> mit dem <b>Akkusativ</b>: <b>in den Flur, ins Bad, in die Küche, in die Regale</b>. Typische Verben: stellen, legen, hängen, gehen.",
      summaryAr: "على سؤال لفين؟ (حركة واتجاه) بنستخدم in مع الأكوزاتيف: in den Flur وins Bad وin die Küche وin die Regale. أفعال زي stellen وlegen وhängen وgehen.",
      sections: [
        sec("1. Die Formen", "الأشكال",
          "Maskulin: <b>in den</b>. Neutral: <b>in das = ins</b>. Feminin: <b>in die</b>. Plural: <b>in die</b>. Nur maskulin ändert sich (der → den).",
          "المذكر: in den. المحايد: in das = ins. المؤنث: in die. الجمع: in die. المذكر بس اللي بيتغير.",
          { table: { head: ["Nominativ", "Wohin? (Akkusativ)"], rows: [["der Flur", "in den Flur"], ["das Bad", "ins Bad (in das)"], ["die Küche", "in die Küche"], ["die Regale (Pl.)", "in die Regale"]] },
            examples: [["Wohin stellen wir den Stuhl? – In den Flur.", "نحط الكرسي فين؟ – في الطرقة."]] }),
        sec("2. Verben der Bewegung", "أفعال الحركة",
          "<b>stellen</b> (aufrecht hinbringen), <b>legen</b> (flach hinbringen), <b>hängen</b> (an die Wand bringen), <b>gehen/fahren</b>. Bei diesen Verben fragt man <b>Wohin?</b>",
          "stellen (يحط واقف) وlegen (يحط نايم) وhängen (يعلّق) وgehen/fahren. مع الأفعال دي بنسأل لفين؟",
          { examples: [["Ich stelle den Computer ins Arbeitszimmer.", "هحط الكمبيوتر في أوضة المكتب."], ["Wir gehen in die Küche.", "رايحين المطبخ."]] }),
        sec("3. Andere Präpositionen mit Akkusativ", "حروف جر تانية مع الأكوزاتيف",
          "Auch <b>an, auf, hinter, neben, über, unter, vor, zwischen</b> stehen bei <b>Wohin?</b> mit Akkusativ: Ich hänge das Bild <b>an die Wand</b>. Stell die Lampe <b>auf den Tisch</b>.",
          "كمان an وauf وhinter وneben وüber وunter وvor وzwischen مع لفين؟ بييجوا مع الأكوزاتيف.",
          { examples: [["Sie stellen den Tisch neben den Schrank.", "بيحطوا الترابيزة جنب الدولاب."]] })
      ],
      pitfalls: [
        P("Ich stelle den Schrank in der Flur.", "Ich stelle den Schrank in den Flur.", "لفين؟ ← Akkusativ: in den."),
        P("Wir gehen in das Bad.", "Wir gehen ins Bad.", "in das ← ins (الأشهر)."),
        P("Ich stelle das Sofa im Wohnzimmer.", "Ich stelle das Sofa ins Wohnzimmer.", "stellen = حركة ← ins."),
        P("Er hängt das Bild an der Wand.", "Er hängt das Bild an die Wand.", "يعلّق (حركة) ← an die Wand.")
      ],
      exercises: [
        C("Wohin stellen wir den Kühlschrank? – In ___ Küche.", ["die", "der", "den"], 0, "die Küche ← in die Küche."),
        C("Ich stelle den Computer ___ Arbeitszimmer.", ["ins", "im", "in den"], 0, "das ← ins."),
        C("Wir stellen den Schrank in ___ Flur.", ["den", "dem", "der"], 0, "der Flur ← in den Flur."),
        C("Er legt die Bücher in ___ Regale.", ["die", "den", "der"], 0, "الجمع ← in die."),
        GAP("Ich hänge das Bild an ___ Wand. (die)", ["die"], "die Wand ← an die Wand."),
        GAP("Stell die Lampe auf ___ Schreibtisch! (der)", ["den"], "der ← den."),
        GAP("Wir gehen ___ Wohnzimmer. (in + das)", ["ins"], "in das = ins."),
        ORD("", ["Ich", "stelle", "das", "Bett", "ins", "Schlafzimmer"], ["Ich stelle das Bett ins Schlafzimmer"], "الفعل في التاني."),
        TRA("Antworte: Wohin stellst du den Sessel? (das Wohnzimmer)", ["Ins Wohnzimmer.", "Ich stelle den Sessel ins Wohnzimmer."], "das ← ins."),
        ERR("Carla stellt den Fernseher in dem Wohnzimmer.", ["Carla stellt den Fernseher ins Wohnzimmer.", "Carla stellt den Fernseher in das Wohnzimmer."], "stellen = لفين؟ ← Akkusativ."),
        TF("Bei „Wohin?“ steht „in“ mit Akkusativ.", true, "أيوه."),
        TF("„ins“ ist die Kurzform von „in dem“.", false, "ins = in das.")
      ]
    },
    {
      id: "a1-k9-wechselpraepositionen",
      t: "Wo? Wechselpräpositionen mit Dativ", tAr: "فين؟ حروف الجر المتغيرة مع الداتيف",
      summary: "Die Präpositionen <b>an, auf, hinter, in, neben, über, unter, vor, zwischen</b> heißen <b>Wechselpräpositionen</b>. Bei <b>Wo?</b> (Ort, keine Bewegung) stehen sie mit <b>Dativ</b>: <b>im Flur, auf dem Tisch, an der Wand, in den Regalen</b>.",
      summaryAr: "حروف الجر an وauf وhinter وin وneben وüber وunter وvor وzwischen اسمها «حروف الجر المتغيرة». مع فين؟ (مكان من غير حركة) بتيجي مع الداتيف: im Flur وauf dem Tisch وan der Wand.",
      sections: [
        sec("1. Die neun Präpositionen", "حروف الجر التسعة",
          "<b>an</b> (direkt bei, z. B. Wand), <b>auf</b> (oben mit Kontakt), <b>über</b> (oben ohne Kontakt), <b>unter</b> (unten), <b>vor</b> (vorne), <b>hinter</b> (hinten), <b>neben</b> (an der Seite), <b>zwischen</b> (in der Mitte von zwei Dingen), <b>in</b> (innen).",
          "an (لازق في، زي الحيطة)، auf (فوق ولامس)، über (فوق ومش لامس)، unter (تحت)، vor (قدام)، hinter (ورا)، neben (جنب)، zwischen (بين)، in (جوه).",
          { examples: [["Das Bild hängt über dem Fernseher.", "الصورة فوق التلفزيون."], ["Der Teppich liegt unter dem Sofa.", "السجادة تحت الكنبة."]] }),
        sec("2. Wo? → Dativ", "فين؟ ← داتيف",
          "Maskulin/neutral: <b>dem</b> (in dem = <b>im</b>, an dem = <b>am</b>). Feminin: <b>der</b>. Plural: <b>den</b> + n.",
          "المذكر والمحايد: dem (im وam). المؤنث: der. الجمع: den والاسم ياخد n.",
          { table: { head: ["Nominativ", "Wo? (Dativ)"], rows: [["der Flur", "im Flur / neben dem Flur"], ["das Bad", "im Bad / vor dem Bad"], ["die Küche", "in der Küche / neben der Küche"], ["die Regale (Pl.)", "in den Regalen"]] } }),
        sec("3. Wo? oder Wohin?", "فين؟ ولا لفين؟",
          "<b>Wo?</b> + Dativ mit Verben ohne Bewegung: <b>stehen, liegen, hängen, sein</b>. <b>Wohin?</b> + Akkusativ mit Bewegung: <b>stellen, legen, hängen, gehen</b>.",
          "فين؟ + داتيف مع أفعال من غير حركة: stehen وliegen وhängen وsein. لفين؟ + أكوزاتيف مع الحركة: stellen وlegen وhängen وgehen.",
          { table: { head: ["Wohin? (Akkusativ)", "Wo? (Dativ)"], rows: [["Ich stelle die Lampe auf den Tisch.", "Die Lampe steht auf dem Tisch."], ["Ich lege das Buch in die Tasche.", "Das Buch liegt in der Tasche."], ["Ich hänge das Bild an die Wand.", "Das Bild hängt an der Wand."]] } })
      ],
      pitfalls: [
        P("Das Bild hängt über den Fernseher.", "Das Bild hängt über dem Fernseher.", "فين؟ ← داتيف: dem."),
        P("Die Bücher stehen in den Regale.", "Die Bücher stehen in den Regalen.", "جمع الداتيف + n."),
        P("Der Schrank steht in den Flur.", "Der Schrank steht im Flur.", "stehen = فين؟ ← im."),
        P("Die Lampe steht auf der Tisch.", "Die Lampe steht auf dem Tisch.", "der Tisch في الداتيف ← dem.")
      ],
      exercises: [
        C("Wo ist das Sofa? – ___ Wohnzimmer.", ["Im", "Ins", "In das"], 0, "فين؟ ← im."),
        C("Der Teppich liegt unter ___ Sofa.", ["dem", "das", "den"], 0, "فين؟ das ← dem."),
        C("Das Bild hängt an ___ Wand.", ["der", "die", "den"], 0, "فين؟ die ← der."),
        C("Die Bücher stehen in den ___.", ["Regalen", "Regale", "Regals"], 0, "جمع الداتيف + n."),
        GAP("Die Lampe steht neben ___ Bett. (das)", ["dem"], "das ← dem."),
        GAP("Der Tisch steht zwischen ___ Sofa und ___ Sessel. (das / der)", ["dem dem", "dem, dem", "dem und dem"], "الاتنين داتيف: dem … dem."),
        GAP("Die Katze schläft hinter ___ Tür. (die)", ["der"], "die ← der."),
        ORD("", ["Der", "Sessel", "steht", "vor", "dem", "Fenster"], ["Der Sessel steht vor dem Fenster"], "فين؟ + داتيف."),
        TRA("Von Wohin zu Wo: Ich stelle die Lampe auf den Tisch. → Die Lampe steht ___", ["Die Lampe steht auf dem Tisch."], "stehen ← Dativ: auf dem Tisch."),
        ERR("Der Kühlschrank steht in die Küche.", ["Der Kühlschrank steht in der Küche."], "stehen ← Dativ: in der Küche."),
        TF("„Wo?“ + Wechselpräposition → Dativ.", true, "أيوه."),
        TF("„Ich lege das Buch auf dem Tisch.“ ist richtig.", false, "legen = حركة ← auf den Tisch.")
      ]
    }
  ];

  const spread = window.A1_GRAMMAR_SPREAD || (() => {});
  spread([7, 8, 9].flatMap(chapter => window.A1_GRAMMAR[chapter]));
})();
