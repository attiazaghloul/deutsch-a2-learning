/* Detailed A2.1 grammar (chapters 4-6): explanations, tables, typical mistakes and
   varied exercises. Same format as data_a21_grammar_1.js. */
window.A2_GRAMMAR = window.A2_GRAMMAR || {};
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

  /* ---------- Kapitel 4 ---------- */
  window.A2_GRAMMAR[4] = [
    {
      id: "a2-k4-wenn",
      t: "Nebensatz mit wenn", tAr: "الجملة الفرعية بـ wenn",
      summary: "Mit <b>wenn</b> nennt man eine <b>Bedingung</b> oder eine Situation, die oft passiert: <b>Ich bin nervös, wenn ich eine Prüfung habe.</b> Im wenn-Satz steht das Verb <b>am Ende</b>. Steht der wenn-Satz am Anfang, beginnt der Hauptsatz mit dem <b>Verb</b>: <b>Wenn ich eine Prüfung habe, (dann) bin ich nervös.</b>",
      summaryAr: "بـ wenn بنقول شرط أو موقف بيتكرر: Ich bin nervös, wenn ich eine Prüfung habe. في جملة wenn الفعل في الآخر. ولو جملة wenn في الأول، الجملة الرئيسية بتبدأ بالفعل: Wenn ich eine Prüfung habe, (dann) bin ich nervös.",
      sections: [
        sec("1. Hauptsatz + wenn-Satz", "جملة رئيسية + جملة wenn",
          "Hauptsatz (Verb auf Position 2) + <b>, wenn + Subjekt + … + Verb</b>.",
          "الجملة الرئيسية (الفعل في التاني) + فاصلة + wenn + فاعل + … + فعل.",
          { table: { head: ["Hauptsatz", "Nebensatz"], rows: [["Ich bin nervös,", "wenn ich eine Prüfung habe."], ["Ich bin glücklich,", "wenn ich mit Freunden feiern kann."], ["Ich habe Angst,", "wenn ich einen Horrorfilm sehe."]] } }),
        sec("2. wenn-Satz am Anfang", "جملة wenn في الأول",
          "Der ganze wenn-Satz ist <b>Position 1</b>. Dann kommt sofort das <b>Verb</b> vom Hauptsatz, dann das Subjekt. <b>dann</b> ist möglich, aber nicht nötig.",
          "جملة wenn كلها بتتحسب الموضع الأول. بعدها على طول فعل الجملة الرئيسية وبعدين الفاعل. وdann ممكن بس مش لازم.",
          { table: { head: ["Nebensatz (Pos. 1)", "Verb (Pos. 2)", "Rest"], rows: [["Wenn ich Urlaub habe,", "besuche", "ich meine Familie."], ["Wenn meine Freundin wegfährt,", "(dann) bin", "ich traurig."], ["Wenn das Wetter schön ist,", "gehen", "wir in den Park."]] } }),
        sec("3. Fragen mit wenn", "أسئلة بـ wenn",
          "<b>Was machst du, wenn du Urlaub hast?</b> – <b>Wenn ich Urlaub habe, schlafe ich lange.</b>",
          "بنسأل كده: بتعمل إيه لما تكون في إجازة؟ ونرد بجملة wenn في الأول والفعل بعدها.",
          { examples: [["Was machst du, wenn du schlechte Laune hast?", "بتعمل إيه لما مزاجك يبقى وحش؟"]] })
      ],
      pitfalls: [
        P("Ich bin glücklich, wenn ich habe frei.", "Ich bin glücklich, wenn ich frei habe.", "في جملة wenn الفعل في الآخر."),
        P("Wenn ich Urlaub habe, ich besuche meine Familie.", "Wenn ich Urlaub habe, besuche ich meine Familie.", "بعد جملة wenn الفعل ييجي الأول."),
        P("Wenn ich müde bin dann ich schlafe.", "Wenn ich müde bin, dann schlafe ich.", "فاصلة، وبعد dann الفعل."),
        P("Ich bin genervt, wenn muss ich warten.", "Ich bin genervt, wenn ich warten muss.", "الفاعل بعد wenn والفعل المساعد في الآخر.")
      ],
      exercises: [
        C("Ich bin traurig, wenn meine Freundin ___.", ["wegfährt", "fährt weg", "wegfahren"], 0, "الفعل المنفصل بيتلم في الآخر."),
        C("Wenn ich Geburtstag habe, ___ ich eine Party.", ["mache", "ich mache", "machen"], 0, "بعد جملة wenn الفعل الأول."),
        C("Was machst du, ___ du Kopfschmerzen hast?", ["wenn", "dass", "denn"], 0, "شرط/موقف ← wenn."),
        GAP("Ich bin genervt, wenn ich im Regen warten ___. (müssen)", ["muss"], "الفعل المساعد في الآخر."),
        GAP("Wenn das Wetter schön ist, ___ wir in den Park. (gehen)", ["gehen"], "بعد جملة wenn الفعل."),
        ORD("Ich bin glücklich, wenn", ["ich", "feiern", "mit", "Freunden", "kann"], ["ich mit Freunden feiern kann"], "الفعل المساعد في الآخر."),
        ORD("Wenn ich nervös bin,", ["gehe", "joggen", "ich"], ["gehe ich joggen"], "الفعل ثم الفاعل."),
        TRA("Stell den wenn-Satz an den Anfang: Ich habe Angst, wenn ich einen Horrorfilm sehe.", ["Wenn ich einen Horrorfilm sehe, habe ich Angst.", "Wenn ich einen Horrorfilm sehe, dann habe ich Angst."], "جملة wenn في الأول ← الفعل habe قبل ich."),
        TRA("Verbinde mit wenn: Ich habe Urlaub. Ich schlafe lange.", ["Wenn ich Urlaub habe, schlafe ich lange.", "Ich schlafe lange, wenn ich Urlaub habe."], "wenn + … + habe."),
        ERR("Wenn ich schlechte Laune habe, ich höre Musik.", ["Wenn ich schlechte Laune habe, höre ich Musik."], "بعد جملة wenn الفعل الأول."),
        TF("Im wenn-Satz steht das konjugierte Verb am Ende.", true, "أيوه."),
        TF("Nach einem wenn-Satz am Anfang kommt im Hauptsatz zuerst das Subjekt.", false, "بييجي الفعل الأول.")
      ]
    },
    {
      id: "a2-k4-reflexiv",
      t: "Reflexive Verben", tAr: "الأفعال الانعكاسية",
      summary: "Reflexive Verben haben ein <b>Reflexivpronomen</b>: <b>sich freuen, sich ärgern, sich treffen, sich entscheiden, sich unterhalten</b>. Das Pronomen passt zum Subjekt: <b>ich freue mich, du freust dich, er freut sich</b>.",
      summaryAr: "الأفعال الانعكاسية معاها ضمير انعكاسي: sich freuen وsich ärgern وsich treffen وsich entscheiden وsich unterhalten. والضمير بيتغير حسب الفاعل: ich freue mich وdu freust dich وer freut sich.",
      sections: [
        sec("1. Die Reflexivpronomen", "الضمائر الانعكاسية",
          "Nur bei <b>er/sie/es</b> und <b>sie/Sie</b> heißt das Pronomen <b>sich</b>. Sonst ist es gleich wie das Akkusativpronomen.",
          "مع er/sie/es وsie/Sie بس الضمير sich. وفي الباقي زي ضمير المفعول به.",
          { table: { head: ["Person", "Pronomen", "Beispiel"], rows: [["ich", "mich", "Ich freue mich."], ["du", "dich", "Du ärgerst dich."], ["er/sie/es", "sich", "Er entscheidet sich."], ["wir", "uns", "Wir treffen uns."], ["ihr", "euch", "Ihr freut euch."], ["sie/Sie", "sich", "Sie unterhalten sich."]] } }),
        sec("2. Position im Satz", "الموضع في الجملة",
          "Das Reflexivpronomen steht meistens <b>direkt nach dem Verb</b>. In Fragen und nach Position 1 (z. B. Zeit) steht es nach dem Subjekt: <b>Heute treffen wir uns.</b> <b>Ärgerst du dich oft?</b> Im Perfekt: <b>Ich habe mich gefreut.</b>",
          "الضمير غالبًا بعد الفعل على طول. وفي الأسئلة أو بعد ظرف في الأول بييجي بعد الفاعل: Heute treffen wir uns. وفي الـ Perfekt: Ich habe mich gefreut.",
          { examples: [["Mit wem triffst du dich oft?", "بتقابل مين كتير؟"], ["Ich habe mich mit Tim unterhalten.", "دردشت مع تيم."]] }),
        sec("3. Wichtige reflexive Verben", "أفعال انعكاسية مهمة",
          "<b>sich freuen, sich ärgern, sich erinnern, sich entscheiden, sich treffen, sich unterhalten, sich streiten, sich langweilen, sich ausruhen, sich entschuldigen, sich verabschieden, sich wohlfühlen</b>.",
          "sich freuen (يفرح) وsich ärgern (يتضايق) وsich erinnern (يفتكر) وsich entscheiden (يقرّر) وsich treffen (يتقابلوا) وsich unterhalten (يدردش) وsich streiten (يتخانق) وsich langweilen (يزهق) وsich ausruhen (يرتاح).",
          { examples: [["Wann langweilst du dich?", "إمتى بتزهق؟"], ["Hast du dich entschieden?", "قرّرت؟"]] })
      ],
      pitfalls: [
        P("Ich freue sich.", "Ich freue mich.", "مع ich الضمير mich."),
        P("Wir treffen sich.", "Wir treffen uns.", "مع wir الضمير uns."),
        P("Er hat sich geärgert gestern.", "Er hat sich gestern geärgert.", "اسم المفعول في الآخر."),
        P("Treffen uns wir morgen?", "Treffen wir uns morgen?", "في السؤال: الفعل ثم الفاعل ثم الضمير.")
      ],
      exercises: [
        C("Ich freue ___ auf die Party.", ["mich", "mir", "sich"], 0, "ich ← mich."),
        C("Ärgerst du ___ oft?", ["dich", "sich", "dir"], 0, "du ← dich."),
        C("Tim und Alia unterhalten ___.", ["sich", "uns", "euch"], 0, "sie (جمع) ← sich."),
        C("Freut ___ euch auf das Fest?", ["ihr", "euch", "sie"], 0, "الفاعل ihr والضمير euch."),
        GAP("Wir treffen ___ heute Abend. (wir)", ["uns"], "wir ← uns."),
        GAP("Hast du ___ schon entschieden? (du)", ["dich"], "du ← dich."),
        GAP("Mein Nachbar ärgert ___, wenn wir laut sind.", ["sich"], "er ← sich."),
        ORD("", ["Heute", "ruhe", "ich", "mich", "aus"], ["Heute ruhe ich mich aus"], "ظرف + فعل + فاعل + ضمير + بادئة."),
        TRA("Schreibe mit „er“: Ich entschuldige mich.", ["Er entschuldigt sich."], "ich mich ← er sich."),
        TRA("Perfekt: Wir unterhalten uns lange.", ["Wir haben uns lange unterhalten."], "haben + uns + unterhalten."),
        ERR("Ihr langweilt sich auf der Party.", ["Ihr langweilt euch auf der Party."], "ihr ← euch."),
        TF("Bei „wir“ heißt das Reflexivpronomen „uns“.", true, "أيوه."),
        TF("Reflexive Verben bilden das Perfekt mit „sein“.", false, "مع haben: Ich habe mich gefreut.")
      ]
    },
    {
      id: "a2-k4-verben-praeposition",
      t: "Reflexive Verben mit Präposition", tAr: "الأفعال الانعكاسية مع حروف الجر",
      summary: "Viele reflexive Verben haben eine feste <b>Präposition</b>: <b>sich freuen auf</b> (etwas Kommendes) / <b>über</b> (etwas Jetziges), <b>sich ärgern über</b>, <b>sich erinnern an</b>, <b>sich bedanken für</b>, <b>sich gewöhnen an</b>. Nach diesen Präpositionen steht der <b>Akkusativ</b>.",
      summaryAr: "أفعال انعكاسية كتير ليها حرف جر ثابت: sich freuen auf (لحاجة جاية) / über (لحاجة حصلت)، sich ärgern über، sich erinnern an، sich bedanken für، sich gewöhnen an. وبعد حروف الجر دي بييجي الأكوزاتيف.",
      sections: [
        sec("1. Verben und ihre Präpositionen", "الأفعال وحروف الجر بتاعتها",
          "Lerne das Verb immer zusammen mit der Präposition.",
          "احفظ الفعل دايمًا مع حرف الجر بتاعه.",
          { table: { head: ["Verb", "Beispiel"], rows: [["sich freuen auf + A", "Ich freue mich auf die Feier."], ["sich freuen über + A", "Ich freue mich über das Geschenk."], ["sich ärgern über + A", "Ich ärgere mich über den Lärm."], ["sich erinnern an + A", "Ich erinnere mich an die Party."], ["sich bedanken für + A", "Wir bedanken uns für die Glückwünsche."], ["sich gewöhnen an + A", "Ich habe mich an das Wetter gewöhnt."]] } }),
        sec("2. freuen auf oder über?", "freuen auf ولا über؟",
          "<b>sich freuen auf</b> = etwas kommt noch (Zukunft): Ich freue mich <b>auf</b> den Urlaub. <b>sich freuen über</b> = etwas ist schon da (Gegenwart/Vergangenheit): Ich freue mich <b>über</b> das Geschenk.",
          "sich freuen auf = لحاجة لسه جاية (المستقبل). sich freuen über = لحاجة موجودة أو حصلت.",
          { examples: [["Alle freuen sich auf nächstes Jahr.", "الكل مستنّي السنة الجاية بفرحة."], ["Sie freuen sich über indisches Essen.", "بيفرحوا بالأكل الهندي."]] }),
        sec("3. Fragen: Worauf? Worüber? Woran?", "الأسئلة: Worauf؟ Worüber؟ Woran؟",
          "Nach Sachen fragt man mit <b>wo(r) + Präposition</b>: <b>Worauf</b> freust du dich? <b>Worüber</b> ärgerst du dich? <b>Woran</b> erinnerst du dich?",
          "للسؤال عن حاجة بنستخدم wo(r) + حرف الجر: Worauf وWorüber وWoran.",
          { examples: [["Worauf freust du dich? – Auf den Sommer.", "إنت مستنّي إيه بفرحة؟ – الصيف."]] })
      ],
      pitfalls: [
        P("Ich freue mich auf das Geschenk. (Ich habe es schon.)", "Ich freue mich über das Geschenk.", "الهدية وصلت ← über."),
        P("Ich erinnere mich auf die Party.", "Ich erinnere mich an die Party.", "sich erinnern an."),
        P("Ich ärgere mich über dem Lärm.", "Ich ärgere mich über den Lärm.", "über هنا + Akkusativ ← den."),
        P("Wir bedanken uns über die Geschenke.", "Wir bedanken uns für die Geschenke.", "sich bedanken für.")
      ],
      exercises: [
        C("Ich freue mich ___ den Urlaub nächste Woche.", ["auf", "über", "an"], 0, "حاجة جاية ← auf."),
        C("Danke! Ich freue mich sehr ___ die Blumen.", ["über", "auf", "für"], 0, "حاجة وصلت ← über."),
        C("Erinnerst du dich ___ Tims Party?", ["an", "auf", "über"], 0, "sich erinnern an."),
        C("Ich ärgere mich ___ den Bus. Er ist schon wieder zu spät.", ["über", "auf", "an"], 0, "sich ärgern über."),
        GAP("Wir bedanken uns ___ die Einladung.", ["für"], "sich bedanken für."),
        GAP("Ich habe mich an das Wetter ___. (gewöhnen)", ["gewöhnt"], "Perfekt: gewöhnt."),
        GAP("___ freust du dich? – Auf die Ferien.", ["Worauf"], "السؤال عن auf + حاجة ← Worauf."),
        ORD("", ["Ich", "freue", "mich", "auf", "das", "Wochenende"], ["Ich freue mich auf das Wochenende"], "فعل + ضمير + حرف جر."),
        TRA("Frag nach dem Ding: Ich ärgere mich über den Lärm. → ___ ärgerst du dich?", ["Worüber ärgerst du dich?", "Worüber"], "über ← Worüber."),
        ERR("Sie hat sich nicht an die Währung gewohnt.", ["Sie hat sich nicht an die Währung gewöhnt."], "sich gewöhnen ← gewöhnt."),
        TF("„sich freuen auf“ benutzt man für etwas in der Zukunft.", true, "أيوه."),
        TF("Nach „sich ärgern über“ steht der Dativ.", false, "هنا بييجي Akkusativ.")
      ]
    }
  ];

  /* ---------- Kapitel 5 ---------- */
  window.A2_GRAMMAR[5] = [
    {
      id: "a2-k5-adjektiv-bestimmt",
      t: "Adjektive nach dem bestimmten Artikel", tAr: "الصفات بعد أداة التعريف",
      summary: "Vor einem Nomen hat das Adjektiv eine <b>Endung</b>. Nach dem bestimmten Artikel (der, das, die) und nach dieser, welcher gibt es nur zwei Endungen: <b>-e</b> oder <b>-en</b>. <b>-e</b> im Nominativ Singular und im Akkusativ feminin/neutral, sonst <b>-en</b>.",
      summaryAr: "الصفة قبل الاسم بتاخد نهاية. بعد أداة التعريف (der وdas وdie) وبعد dieser وwelcher فيه نهايتين بس: -e أو -en. -e في الفاعل المفرد وفي المفعول للمؤنث والمحايد، وفي الباقي -en.",
      sections: [
        sec("1. Die Tabelle", "الجدول",
          "Merke: Im Dativ und im Plural immer <b>-en</b>. Im Akkusativ maskulin auch <b>-en</b>.",
          "احفظ: في الداتيف وفي الجمع دايمًا -en. وفي المفعول المذكر كمان -en.",
          { table: { head: ["", "maskulin", "neutral", "feminin", "Plural"], rows: [["Nominativ", "der schwarze Rock", "das weiße T-Shirt", "die weiße Bluse", "die bequemen Schuhe"], ["Akkusativ", "den schwarzen Rock", "das weiße T-Shirt", "die weiße Bluse", "die bequemen Schuhe"], ["Dativ", "dem schwarzen Rock", "dem weißen T-Shirt", "der weißen Bluse", "den bequemen Schuhen"]] } }),
        sec("2. Ein einfacher Trick", "حيلة سهلة",
          "Wenn der Artikel <b>der, das, die</b> (Nominativ) oder <b>das, die</b> (Akkusativ Singular) ist → <b>-e</b>. Bei allen anderen Formen (den, dem, der im Dativ, die im Plural) → <b>-en</b>.",
          "لو الأداة der أو das أو die (فاعل) أو das وdie (مفعول مفرد) ← -e. وفي كل الأشكال التانية ← -en.",
          { examples: [["Die neuen Kollegen haben mir geholfen.", "الزملا الجداد ساعدوني."], ["Der junge Koch ist ein Künstler.", "الطبّاخ الشاب فنان."]] }),
        sec("3. Fragen nach Dingen", "السؤال عن الحاجات",
          "Mit Adjektiven kann man genau fragen: <b>Wo ist das grüne Buch? Wer sieht den grauen Mantel?</b>",
          "بالصفات تقدر تسأل بدقة: Wo ist das grüne Buch? وWer sieht den grauen Mantel?",
          { examples: [["Es liegt auf dem kleinen Tisch.", "موجود على الترابيزة الصغيرة."]] })
      ],
      pitfalls: [
        P("Ich trage den schwarze Rock.", "Ich trage den schwarzen Rock.", "مفعول مذكر ← -en."),
        P("Die bequeme Schuhe stehen im Schrank.", "Die bequemen Schuhe stehen im Schrank.", "الجمع ← -en."),
        P("mit dem weiße T-Shirt", "mit dem weißen T-Shirt", "الداتيف دايمًا -en."),
        P("Das neuen Restaurant ist toll.", "Das neue Restaurant ist toll.", "فاعل محايد بعد das ← -e.")
      ],
      exercises: [
        C("Der ___ Koch ist sehr nett. (jung)", ["junge", "jungen", "junger"], 0, "فاعل مذكر بعد der ← -e."),
        C("Ich nehme den ___ Mantel. (grau)", ["grauen", "graue", "grauer"], 0, "مفعول مذكر ← -en."),
        C("Mit der ___ Bluse gehe ich zur Arbeit. (weiß)", ["weißen", "weiße", "weißer"], 0, "داتيف ← -en."),
        C("Die ___ Gäste waren freundlich. (neu)", ["neuen", "neue", "neues"], 0, "جمع ← -en."),
        GAP("Das ___ Essen ist eine Sensation. (lecker)", ["leckere"], "فاعل محايد ← -e."),
        GAP("Ich habe den ___ Job! (neu)", ["neuen"], "مفعول مذكر ← -en."),
        GAP("Der Koch macht aus den ___ Zutaten Delikatessen. (frisch)", ["frischen"], "داتيف جمع ← -en."),
        ORD("", ["Wo", "ist", "das", "grüne", "Buch"], ["Wo ist das grüne Buch"], "أداة + صفة + اسم."),
        TRA("Ergänze das Adjektiv: Ich ziehe die Schuhe an. (bequem)", ["Ich ziehe die bequemen Schuhe an."], "جمع ← bequemen."),
        ERR("Wer sieht den grauer Mantel?", ["Wer sieht den grauen Mantel?"], "مفعول مذكر ← grauen."),
        TF("Nach dem bestimmten Artikel gibt es nur die Endungen -e und -en.", true, "أيوه."),
        TF("Im Dativ Singular ist die Endung -e.", false, "في الداتيف دايمًا -en.")
      ]
    },
    {
      id: "a2-k5-mit-ohne",
      t: "Präpositionen: ohne + Akkusativ, mit + Dativ", tAr: "حروف الجر: ohne + Akkusativ وmit + Dativ",
      summary: "<b>ohne</b> steht immer mit <b>Akkusativ</b>: ohne <b>meinen</b> Pass. <b>mit</b> steht immer mit <b>Dativ</b>: mit <b>meinem</b> Pass. So sagt man, was man mit oder ohne etwas (nicht) kann oder darf.",
      summaryAr: "ohne دايمًا مع الأكوزاتيف: ohne meinen Pass. وmit دايمًا مع الداتيف: mit meinem Pass. وبكده بنقول إيه اللي نقدر أو ماينفعش نعمله بحاجة أو من غيرها.",
      sections: [
        sec("1. Die Formen", "الأشكال",
          "Vergleiche die Artikel nach ohne und mit.",
          "قارن الأدوات بعد ohne وmit.",
          { table: { head: ["", "ohne (Akkusativ)", "mit (Dativ)"], rows: [["der Pass", "ohne meinen Pass", "mit meinem Pass"], ["das Konto", "ohne ein Konto", "mit einem Konto"], ["die Karte", "ohne meine Karte", "mit meiner Karte"], ["die Papiere (Pl.)", "ohne meine Papiere", "mit meinen Papieren"]] } }),
        sec("2. Was man (nicht) kann oder darf", "اللي تقدر أو ماتقدرش تعمله",
          "<b>Ohne Ihren Pass können Sie nicht reisen.</b> <b>Mit einem Pass dürfen Sie über die Grenze fahren.</b> Oft steht ohne/mit am Satzanfang – dann folgt das Verb.",
          "Ohne Ihren Pass können Sie nicht reisen. وMit einem Pass dürfen Sie über die Grenze fahren. ولو ohne أو mit في أول الجملة، الفعل ييجي بعدها.",
          { examples: [["Ohne Fahrkarte darf man nicht U-Bahn fahren.", "من غير تذكرة ممنوع تركب المترو."], ["Mit meiner Bankkarte kann ich Geld abheben.", "بكارت البنك أقدر أسحب فلوس."]] }),
        sec("3. ohne Artikel", "من غير أداة",
          "Oft steht nach <b>ohne</b> kein Artikel: <b>ohne Foto, ohne Geld, ohne Plastik</b>.",
          "غالبًا بعد ohne مفيش أداة: ohne Foto وohne Geld وohne Plastik.",
          { examples: [["Ohne Foto geht es leider nicht.", "من غير صورة للأسف مش هينفع."]] })
      ],
      pitfalls: [
        P("Ohne meinem Pass kann ich nicht reisen.", "Ohne meinen Pass kann ich nicht reisen.", "ohne + Akkusativ ← meinen."),
        P("Mit meine Karte bezahle ich.", "Mit meiner Karte bezahle ich.", "mit + Dativ مؤنث ← meiner."),
        P("Ohne mein Führerschein darf ich nicht fahren.", "Ohne meinen Führerschein darf ich nicht fahren.", "Führerschein مذكر ← meinen."),
        P("Ohne ein Konto ich kann kein Geld überweisen.", "Ohne ein Konto kann ich kein Geld überweisen.", "بعد ohne في الأول الفعل ييجي.")
      ],
      exercises: [
        C("Ohne ___ Pass können Sie nicht reisen. (Ihr)", ["Ihren", "Ihrem", "Ihr"], 0, "ohne + Akkusativ مذكر ← Ihren."),
        C("Mit ___ Bankkarte kann ich Geld abheben. (meine)", ["meiner", "meine", "meinen"], 0, "mit + Dativ مؤنث ← meiner."),
        C("Ohne ___ Konto kann ich kein Geld überweisen. (ein)", ["ein", "einem", "einen"], 0, "das Konto مفعول ← ein."),
        C("Mit ___ Auto fahre ich zur Polizei. (das)", ["dem", "das", "den"], 0, "mit + Dativ ← dem."),
        GAP("Ohne ___ Führerschein darf ich nicht Auto fahren. (mein)", ["meinen"], "مذكر Akkusativ ← meinen."),
        GAP("Mit ___ Fahrkarte darf man U-Bahn fahren. (eine)", ["einer"], "مؤنث Dativ ← einer."),
        GAP("Ohne ___ Papiere bekommen Sie kein Visum. (Ihre)", ["Ihre"], "جمع Akkusativ ← Ihre."),
        ORD("", ["Ohne", "Foto", "geht", "es", "leider", "nicht"], ["Ohne Foto geht es leider nicht"], "ohne في الأول ← الفعل بعدها."),
        TRA("Bilde einen Satz mit ohne: meine Bankkarte – kein Geld abheben können", ["Ohne meine Bankkarte kann ich kein Geld abheben."], "ohne + meine (مؤنث Akkusativ)."),
        ERR("Mit einen Pass dürfen Sie über die Grenze fahren.", ["Mit einem Pass dürfen Sie über die Grenze fahren."], "mit + Dativ ← einem."),
        TF("Nach „ohne“ steht immer der Akkusativ.", true, "أيوه."),
        TF("Nach „mit“ steht der Akkusativ.", false, "mit دايمًا مع الداتيف.")
      ]
    },
    {
      id: "a2-k5-koennte",
      t: "Höfliche Bitten: Konjunktiv II von können", tAr: "الطلب بأدب: könnte",
      summary: "Mit <b>könnte</b> (Konjunktiv II von können) bittet man sehr <b>höflich</b>: <b>Könnten Sie mir bitte helfen?</b> Die Formen: ich könnte, du könntest, er könnte, wir könnten, ihr könntet, sie/Sie könnten. Der Infinitiv steht am Ende.",
      summaryAr: "بـ könnte بنطلب بأدب جدًا: Könnten Sie mir bitte helfen? التصريف: ich könnte وdu könntest وer könnte وwir könnten وihr könntet وsie/Sie könnten. والمصدر في الآخر.",
      sections: [
        sec("1. Die Formen", "التصريف",
          "<b>könnte</b> hat einen Umlaut (ö) und die Endung <b>-te</b>. ich und er/sie/es haben die gleiche Form.",
          "könnte فيها أوملاوت (ö) ونهاية -te. وich وer نفس الشكل.",
          { table: { head: ["Person", "können (Präsens)", "könnte (Konjunktiv II)"], rows: [["ich", "kann", "könnte"], ["du", "kannst", "könntest"], ["er/sie/es", "kann", "könnte"], ["wir", "können", "könnten"], ["ihr", "könnt", "könntet"], ["sie/Sie", "können", "könnten"]] } }),
        sec("2. Wie höflich?", "قد إيه مؤدب؟",
          "<b>Gib mir bitte die Nummer.</b> (Imperativ – direkt) → <b>Kannst du mich abholen?</b> (Frage – freundlich) → <b>Könnten Sie bitte meine Karte sperren?</b> (Konjunktiv II – sehr höflich).",
          "الأمر مباشر، والسؤال بـ kannst ودود، وkönnten مؤدب جدًا.",
          { examples: [["Könnte ich noch einen Kaffee haben?", "ممكن آخد قهوة كمان؟"], ["Könntest du mir bitte helfen?", "ممكن تساعدني لو سمحت؟"]] }),
        sec("3. Satzbau", "تركيب الجملة",
          "Ja/Nein-Frage: <b>Könnten</b> (Position 1) + Subjekt + … + <b>Infinitiv</b> (Ende). Mit <b>bitte</b> und freundlicher Stimme wird die Bitte noch höflicher.",
          "سؤال أيوه/لأ: Könnten في الأول + الفاعل + … + المصدر في الآخر. ومع bitte وصوت لطيف بيبقى أأدب.",
          { examples: [["Könntet ihr bitte zu mir kommen?", "ممكن تيجوا عندي لو سمحتوا؟"]] })
      ],
      pitfalls: [
        P("Konnten Sie mir helfen? (Bitte)", "Könnten Sie mir helfen?", "للأدب بنستخدم könnten بأوملاوت."),
        P("Könntest du mir hilfst?", "Könntest du mir helfen?", "المصدر في الآخر."),
        P("Könnten Sie bitte meine Karte sperren können?", "Könnten Sie bitte meine Karte sperren?", "مش محتاجين können تاني في الآخر."),
        P("Ich könntest das machen.", "Ich könnte das machen.", "ich könnte.")
      ],
      exercises: [
        C("___ Sie mir bitte helfen? (sehr höflich)", ["Könnten", "Können", "Konnten"], 0, "Konjunktiv II: Könnten."),
        C("___ du mir bitte einen Bleistift geben?", ["Könntest", "Könntet", "Könnte"], 0, "du ← könntest."),
        C("___ ich mal mit deinem Handy telefonieren?", ["Könnte", "Könntest", "Könnten"], 0, "ich ← könnte."),
        C("Welche Bitte ist am höflichsten?", ["Könnten Sie das bitte fertig machen?", "Mach das fertig!", "Kannst du das fertig machen?"], 0, "Konjunktiv II + bitte = الأأدب."),
        GAP("___ ihr bitte zu mir kommen? (können, höflich)", ["Könntet"], "ihr ← könntet."),
        GAP("Könnten Sie meine Karte bitte ___? (sperren)", ["sperren"], "المصدر في الآخر."),
        ORD("", ["Könntest", "du", "mich", "bitte", "abholen"], ["Könntest du mich bitte abholen"], "könntest + فاعل + … + مصدر."),
        TRA("Mach eine höfliche Bitte: Gib mir dein Buch.", ["Könntest du mir bitte dein Buch geben?", "Könntest du mir dein Buch geben?"], "Imperativ ← Könntest du … geben?"),
        TRA("Mach eine sehr höfliche Bitte (Sie): Warten Sie noch fünf Minuten.", ["Könnten Sie bitte noch fünf Minuten warten?", "Könnten Sie noch fünf Minuten warten?"], "Könnten Sie … warten?"),
        ERR("Könntet du mir zehn Euro leihen?", ["Könntest du mir zehn Euro leihen?"], "du ← könntest."),
        TF("„könnte“ ist höflicher als „kann“.", true, "أيوه."),
        TF("Bei „er“ heißt es „er könntet“.", false, "الصح: er könnte.")
      ]
    }
  ];

  /* ---------- Kapitel 6 ---------- */
  window.A2_GRAMMAR[6] = [
    {
      id: "a2-k6-adjektiv-unbestimmt",
      t: "Adjektive nach dem unbestimmten Artikel", tAr: "الصفات بعد أداة النكرة",
      summary: "Nach <b>ein, kein</b> und den Possessivartikeln (<b>mein, dein …</b>) zeigt die Adjektivendung oft das Genus: <b>ein bekannter Klassiker, ein modernes Studio, eine große Sängerin</b>. Im Dativ und im Plural nach kein-/mein- steht immer <b>-en</b>.",
      summaryAr: "بعد ein وkein وأدوات الملكية (mein وdein …) نهاية الصفة غالبًا بتوضّح الجنس: ein bekannter Klassiker وein modernes Studio وeine große Sängerin. وفي الداتيف والجمع بعد kein/mein دايمًا -en.",
      sections: [
        sec("1. Die Tabelle", "الجدول",
          "Achte auf Nominativ maskulin <b>-er</b> und Nominativ/Akkusativ neutral <b>-es</b>.",
          "خلي بالك من الفاعل المذكر -er والفاعل/المفعول المحايد -es.",
          { table: { head: ["", "maskulin", "neutral", "feminin", "Plural (kein-/mein-)"], rows: [["Nominativ", "ein bekannter Klassiker", "ein modernes Studio", "eine große Sängerin", "keine großen Probleme"], ["Akkusativ", "einen schönen Abend", "ein elegantes Restaurant", "eine große Sängerin", "meine netten Freunde"], ["Dativ", "einem schönen Abend", "einem aktuellen Thema", "einer tollen Band", "meinen netten Freunden"]] } }),
        sec("2. Warum -er und -es?", "ليه -er و-es؟",
          "Bei <b>ein</b> sieht man nicht, ob das Nomen maskulin oder neutral ist. Deshalb zeigt das <b>Adjektiv</b> das Genus: der → ein bekannt<b>er</b>, das → ein modern<b>es</b>.",
          "مع ein مش باين الاسم مذكر ولا محايد. عشان كده الصفة هي اللي بتوضّح: der ← -er وdas ← -es.",
          { examples: [["Das ist ein preiswertes Restaurant.", "ده مطعم بسعر معقول."], ["Er ist ein erfolgreicher Chirurg.", "هو جرّاح ناجح."]] }),
        sec("3. Ohne Artikel im Plural", "الجمع من غير أداة",
          "Im Plural ohne Artikel ist die Endung <b>-e</b> (Nominativ/Akkusativ) und <b>-en</b> (Dativ): <b>Professionelle Trainer erwarten Sie.</b> <b>zu günstigen Preisen</b>.",
          "في الجمع من غير أداة النهاية -e (فاعل/مفعول) و-en (داتيف): Professionelle Trainer وzu günstigen Preisen.",
          { examples: [["Hier gibt es aktuelle Informationen.", "هنا فيه معلومات حديثة."]] })
      ],
      pitfalls: [
        P("Das ist ein bekannte Klassiker.", "Das ist ein bekannter Klassiker.", "فاعل مذكر بعد ein ← -er."),
        P("Wir suchen ein elegante Restaurant.", "Wir suchen ein elegantes Restaurant.", "محايد بعد ein ← -es."),
        P("mit einer tolle Band", "mit einer tollen Band", "الداتيف ← -en."),
        P("Ich habe keine große Probleme.", "Ich habe keine großen Probleme.", "الجمع بعد kein ← -en.")
      ],
      exercises: [
        C("Das ist ein ___ Klassiker. (bekannt)", ["bekannter", "bekannte", "bekannten"], 0, "فاعل مذكر ← -er."),
        C("Wir suchen ein ___ Restaurant. (elegant)", ["elegantes", "elegante", "eleganten"], 0, "مفعول محايد ← -es."),
        C("Sie kommt mit einer ___ Band. (toll)", ["tollen", "tolle", "toller"], 0, "داتيف ← -en."),
        C("Erleben Sie eine ___ Sängerin! (groß)", ["große", "großen", "großer"], 0, "مؤنث ← -e."),
        GAP("Wir wünschen Ihnen einen ___ Abend. (schön)", ["schönen"], "مفعول مذكر ← -en."),
        GAP("Er ist ein ___ Herzchirurg. (erfolgreich)", ["erfolgreicher"], "فاعل مذكر ← -er."),
        GAP("Ich treffe meine ___ Freunde. (nett)", ["netten"], "جمع بعد mein ← -en."),
        ORD("", ["Das", "ist", "ein", "modernes", "Studio"], ["Das ist ein modernes Studio"], "ein + صفة -es + اسم محايد."),
        TRA("Ergänze das Adjektiv: Kennst du ein Café? (gemütlich)", ["Kennst du ein gemütliches Café?"], "محايد ← gemütliches."),
        ERR("Sie hat jetzt ein eigene Geschäft.", ["Sie hat jetzt ein eigenes Geschäft."], "محايد ← eigenes."),
        TF("Nach „ein“ hat das Adjektiv im Nominativ maskulin die Endung -er.", true, "أيوه: ein bekannter …"),
        TF("Im Dativ nach „einem“ ist die Endung -es.", false, "في الداتيف دايمًا -en.")
      ]
    },
    {
      id: "a2-k6-werden",
      t: "Das Verb werden", tAr: "الفعل werden",
      summary: "<b>werden</b> beschreibt eine <b>Veränderung</b>: Er <b>wird</b> Fernfahrer (+ Nomen). Ein Traum <b>wird</b> wahr (+ Adjektiv). Ich <b>werde</b> 45 (+ Alter). Präteritum: <b>wurde</b>. Perfekt: <b>ist geworden</b>.",
      summaryAr: "werden بيوصف تغيير: Er wird Fernfahrer (+ اسم). Ein Traum wird wahr (+ صفة). Ich werde 45 (+ سن). الماضي: wurde. والـ Perfekt: ist geworden.",
      sections: [
        sec("1. Präsens", "المضارع",
          "werden ist unregelmäßig: <b>du wirst, er wird</b>.",
          "werden شاذ: du wirst وer wird.",
          { table: { head: ["Person", "Präsens", "Präteritum"], rows: [["ich", "werde", "wurde"], ["du", "wirst", "wurdest"], ["er/sie/es", "wird", "wurde"], ["wir", "werden", "wurden"], ["ihr", "werdet", "wurdet"], ["sie/Sie", "werden", "wurden"]] } }),
        sec("2. werden + Nomen / Adjektiv / Alter", "werden + اسم / صفة / سن",
          "<b>+ Nomen:</b> Er wird Arzt. (Berufe ohne Artikel!) <b>+ Adjektiv:</b> Es wird kalt. Ein Traum wird wahr. <b>+ Alter:</b> Ich werde 30.",
          "+ اسم: Er wird Arzt (المهن من غير أداة). + صفة: Es wird kalt. + سن: Ich werde 30.",
          { examples: [["Der Sommer ist vorbei. Es wird kälter.", "الصيف خلص. الجو بيبرد."], ["Tims Schwester ist schwanger. Er wird Onkel.", "أخت تيم حامل. هيبقى خال."]] }),
        sec("3. Präteritum und Perfekt", "الماضي البسيط والـ Perfekt",
          "Präteritum: <b>Sie wurde arbeitslos.</b> Perfekt mit <b>sein</b>: <b>Er ist Oberarzt geworden.</b> Für Erzählungen benutzt man oft das Präteritum <b>wurde</b>.",
          "الماضي: Sie wurde arbeitslos. والـ Perfekt مع sein: Er ist Oberarzt geworden.",
          { examples: [["Mit 21 wurde ich Studentin.", "وأنا عندي 21 سنة بقيت طالبة جامعية."]] })
      ],
      pitfalls: [
        P("Er werdet Fernfahrer.", "Er wird Fernfahrer.", "er wird."),
        P("Du wirdst Arzt.", "Du wirst Arzt.", "du wirst."),
        P("Er hat Oberarzt geworden.", "Er ist Oberarzt geworden.", "werden مع sein في الـ Perfekt."),
        P("Sie wird eine Ärztin.", "Sie wird Ärztin.", "المهن بعد werden من غير أداة.")
      ],
      exercises: [
        C("Er ___ Fernfahrer.", ["wird", "werdet", "wirst"], 0, "er wird."),
        C("Es ___ kälter. Der Winter kommt.", ["wird", "werden", "ist"], 0, "es wird."),
        C("Marlies ___ arbeitslos. (Präteritum)", ["wurde", "wird", "wurdet"], 0, "الماضي: wurde."),
        C("Markus ist Fernfahrer ___.", ["geworden", "gewurden", "werden"], 0, "Perfekt: ist geworden."),
        GAP("Heute habe ich Geburtstag. Ich ___ 30 Jahre alt.", ["werde"], "ich werde."),
        GAP("Ihr lernt so schnell. Ihr ___ immer besser.", ["werdet"], "ihr werdet."),
        GAP("Meine Geschwister studieren Medizin. Sie ___ Ärzte.", ["werden"], "sie werden."),
        ORD("", ["Mit", "ihrem", "Laden", "wird", "ihr", "Traum", "wahr"], ["Mit ihrem Laden wird ihr Traum wahr"], "werden في الموضع التاني."),
        TRA("Perfekt: Er wird Oberarzt.", ["Er ist Oberarzt geworden."], "ist … geworden."),
        ERR("Was wirdst du später?", ["Was wirst du später?"], "du wirst."),
        TF("„werden“ bildet das Perfekt mit „sein“.", true, "أيوه: ist geworden."),
        TF("Nach „werden“ steht vor dem Beruf ein Artikel: Er wird ein Koch.", false, "المهنة من غير أداة: Er wird Koch.")
      ]
    },
    {
      id: "a2-k6-nebensaetze",
      t: "Nebensätze im Überblick: weil, dass, wenn", tAr: "الجمل الفرعية بالمختصر: weil وdass وwenn",
      summary: "In allen Nebensätzen mit <b>weil, dass, wenn</b> steht das <b>konjugierte Verb am Ende</b>. <b>weil</b> = Grund, <b>dass</b> = Inhalt (was man denkt/sagt), <b>wenn</b> = Bedingung oder Situation. Steht der Nebensatz vorne, beginnt der Hauptsatz mit dem Verb.",
      summaryAr: "في كل الجمل الفرعية بـ weil وdass وwenn الفعل المتصرّف في الآخر. weil = السبب، dass = المحتوى (اللي بنفكر فيه أو بنقوله)، wenn = الشرط أو الموقف. ولو الجملة الفرعية في الأول، الجملة الرئيسية بتبدأ بالفعل.",
      sections: [
        sec("1. Welcher Konnektor?", "أنهي أداة ربط؟",
          "<b>weil</b> antwortet auf Warum?. <b>dass</b> steht nach Verben wie finden, denken, sagen, wissen. <b>wenn</b> nennt eine Bedingung: Was passiert in dieser Situation?",
          "weil بترد على ليه؟. dass بعد أفعال زي finden وdenken وsagen وwissen. wenn بتقول الشرط: إيه اللي بيحصل في الموقف ده؟",
          { table: { head: ["Konnektor", "Bedeutung", "Beispiel"], rows: [["weil", "Grund", "Er kommt nicht, weil er krank ist."], ["dass", "Inhalt", "Ich finde, dass mobiles Arbeiten praktisch ist."], ["wenn", "Bedingung/Situation", "Wenn ich telefoniere, mache ich die Musik aus."]] } }),
        sec("2. Verb am Ende – auch mit Modalverb und Perfekt", "الفعل في الآخر – حتى مع الأفعال المساعدة والـ Perfekt",
          "…, weil er arbeiten <b>muss</b>. …, dass sie die Chance genutzt <b>hat</b>. …, wenn man im Job erfolgreich bleiben <b>will</b>.",
          "الفعل المتصرّف في الآخر خالص: muss وhat وwill.",
          { examples: [["Es ist wichtig, dass niemand Sie stört.", "مهم إن محدش يزعجك."]] }),
        sec("3. Nebensatz vorne", "الجملة الفرعية في الأول",
          "Der Nebensatz ist dann Position 1: <b>Wenn Sie gut vorbereitet sind, wird das Gespräch leichter.</b> <b>Weil er Kinder liebt, ist er Erzieher geworden.</b>",
          "الجملة الفرعية بتبقى الموضع الأول: Wenn Sie gut vorbereitet sind, wird das Gespräch leichter.",
          { examples: [["Weil sie etwas für die Umwelt machen wollte, hat sie einen Laden eröffnet.", "عشان كانت عايزة تعمل حاجة للبيئة، فتحت محل."]] })
      ],
      pitfalls: [
        P("Ich denke, dass Roboter werden wichtiger.", "Ich denke, dass Roboter wichtiger werden.", "في جملة dass الفعل في الآخر."),
        P("Wenn Sie anrufen, Sie müssen deutlich sprechen.", "Wenn Sie anrufen, müssen Sie deutlich sprechen.", "بعد الجملة الفرعية الفعل الأول."),
        P("Er ist Fernfahrer geworden, dass er die Freiheit liebt.", "Er ist Fernfahrer geworden, weil er die Freiheit liebt.", "للسبب ← weil."),
        P("Ich hoffe, wenn du kommst.", "Ich hoffe, dass du kommst.", "بعد hoffen ← dass.")
      ],
      exercises: [
        C("Ich finde, ___ die Arbeit interessant ist.", ["dass", "weil", "wenn"], 0, "بعد finden ← dass."),
        C("Er hat den Job gewechselt, ___ er mehr Freiheit wollte.", ["weil", "dass", "wenn"], 0, "سبب ← weil."),
        C("___ Sie Fragen haben, rufen Sie mich an.", ["Wenn", "Dass", "Weil"], 0, "شرط ← Wenn."),
        C("Wenn ich telefoniere, ___.", ["mache ich die Musik aus", "ich mache die Musik aus", "die Musik ich ausmache"], 0, "بعد الجملة الفرعية الفعل الأول."),
        GAP("Es ist wichtig, dass niemand Sie ___. (stören)", ["stört"], "الفعل في الآخر."),
        GAP("Viele arbeiten länger, weil sie länger gesund ___. (bleiben)", ["bleiben"], "الفعل في الآخر."),
        ORD("Ich glaube, dass", ["immer", "Roboter", "werden", "wichtiger"], ["Roboter immer wichtiger werden"], "werden في الآخر."),
        ORD("Wenn man nervös ist,", ["man", "Fragen", "soll", "aufschreiben"], ["soll man Fragen aufschreiben"], "الفعل المساعد أول بعد الجملة الفرعية."),
        TRA("Verbinde mit weil: Er ist glücklich. Er liebt seinen neuen Beruf.", ["Er ist glücklich, weil er seinen neuen Beruf liebt."], "weil + … + liebt."),
        TRA("Stell den wenn-Satz nach vorne: Man ist erfolgreich, wenn man lebenslang lernt.", ["Wenn man lebenslang lernt, ist man erfolgreich."], "Wenn … lernt, ist man …"),
        ERR("Sie sagt, dass sie hat die Entscheidung nie bereut.", ["Sie sagt, dass sie die Entscheidung nie bereut hat."], "haben في الآخر."),
        TF("In Nebensätzen mit weil, dass und wenn steht das Verb am Ende.", true, "أيوه."),
        TF("Nach „hoffen“ benutzt man meistens „weil“.", false, "بعد hoffen ← dass.")
      ]
    }
  ];

  const spread = window.A1_GRAMMAR_SPREAD || (() => {});
  spread([4, 5, 6].flatMap(chapter => window.A2_GRAMMAR[chapter]));
})();
