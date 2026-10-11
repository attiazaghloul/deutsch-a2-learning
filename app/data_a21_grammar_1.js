/* Detailed A2.1 grammar (chapters 1-3): explanations, tables, typical mistakes and
   varied exercises. Rendered by js/18-grammar-practice.js (same format as A1 and B1.1).
   Exercise types: choice, truefalse, gap, order, transform, error. */
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

  /* ---------- Kapitel 1 ---------- */
  window.A2_GRAMMAR[1] = [
    {
      id: "a2-k1-perfekt",
      t: "Wiederholung: das Perfekt", tAr: "مراجعة: الـ Perfekt",
      summary: "Im Gespräch erzählt man über Vergangenes meistens im <b>Perfekt</b>: <b>haben/sein</b> auf Position 2 + <b>Partizip II</b> am Ende. Das Partizip II hängt vom Verbtyp ab: regelmäßig (gelernt), unregelmäßig (gefunden), -ieren (studiert), trennbar (kennengelernt), nicht trennbar (beendet).",
      summaryAr: "في الكلام عن الماضي غالبًا بنستخدم الـ Perfekt: haben أو sein في الموضع التاني + اسم المفعول في الآخر. واسم المفعول بيعتمد على نوع الفعل: منتظم وشاذ و-ieren ومنفصل وغير منفصل.",
      sections: [
        sec("1. Die fünf Typen des Partizips II", "الأنواع الخمسة لاسم المفعول",
          "Regelmäßig: <b>ge…t</b> (lernen → gelernt). Unregelmäßig: <b>ge…en</b>, oft mit Vokalwechsel (finden → gefunden). Verben auf -ieren: <b>ohne ge-</b> (studieren → studiert). Trennbar: <b>Präfix + ge + …</b> (kennenlernen → kennengelernt, umziehen → umgezogen). Nicht trennbar (be-, ver-, er-, ent-, ge-, emp-, zer-): <b>ohne ge-</b> (beenden → beendet, besuchen → besucht).",
          "المنتظم: ge…t. الشاذ: ge…en وغالبًا الحرف المتحرك بيتغير. أفعال -ieren من غير ge. المنفصل: البادئة + ge + الجذر. غير المنفصل (be- وver- وer- …) من غير ge.",
          { table: { head: ["Typ", "Infinitiv", "Partizip II"], rows: [["regelmäßig", "heiraten", "geheiratet"], ["unregelmäßig", "schreiben", "geschrieben"], ["-ieren", "organisieren", "organisiert"], ["trennbar", "weitersuchen", "weitergesucht"], ["nicht trennbar", "besuchen", "besucht"]] } }),
        sec("2. haben oder sein?", "haben ولا sein؟",
          "Die meisten Verben haben <b>haben</b>. Mit <b>sein</b>: Verben der Bewegung von A nach B (fahren, fliegen, reisen, umziehen, kommen) und <b>bleiben, passieren, sein, werden</b>.",
          "معظم الأفعال مع haben. ومع sein: أفعال الحركة من مكان لمكان (fahren وfliegen وreisen وumziehen وkommen) وكمان bleiben وpassieren وsein وwerden.",
          { examples: [["Julia ist durch Spanien gereist.", "يوليا لفّت إسبانيا."], ["Jonas hat ein Hobby gefunden.", "يوناس لقى هواية."], ["Es ist viel passiert.", "حصلت حاجات كتير."]] }),
        sec("3. Die Satzklammer", "قوس الجملة",
          "<b>haben/sein</b> steht konjugiert auf Position 2, das Partizip II steht am <b>Satzende</b>. In W-Fragen: W-Wort – haben/sein – Subjekt – … – Partizip: <b>Was hast du letztes Jahr gemacht?</b>",
          "haben أو sein متصرّف في الموضع التاني، واسم المفعول في آخر الجملة. وفي أسئلة W: أداة السؤال – الفعل المساعد – الفاعل – … – اسم المفعول.",
          { examples: [["Im Herbst habe ich mein Studium angefangen.", "في الخريف بدأت دراستي."]] })
      ],
      pitfalls: [
        P("Ich habe nach Zürich umgezogen.", "Ich bin nach Zürich umgezogen.", "umziehen = تغيير مكان ← sein."),
        P("Sie hat die Ausbildung geabschlossen.", "Sie hat die Ausbildung abgeschlossen.", "منفصل: ge بين البادئة والجذر."),
        P("Er hat das Fest georganisiert.", "Er hat das Fest organisiert.", "-ieren من غير ge."),
        P("Wir haben Freunde gebesucht.", "Wir haben Freunde besucht.", "be- غير منفصلة ← من غير ge.")
      ],
      exercises: [
        C("Julia ___ durch Spanien gereist.", ["ist", "hat", "war"], 0, "reisen = حركة ← sein."),
        C("Ich habe meine Ausbildung ___. (beenden)", ["beendet", "gebeendet", "beendt"], 0, "be- ← من غير ge."),
        C("Er hat an einem Kurs ___. (teilnehmen)", ["teilgenommen", "geteilnommen", "teilgenehmt"], 0, "منفصل وشاذ: teil + ge + nommen."),
        C("Was ___ letztes Jahr passiert?", ["ist", "hat", "sind"], 0, "passieren ← sein."),
        GAP("Meine Schwester hat im August ___. (heiraten)", ["geheiratet"], "منتظم: ge + heirat + et."),
        GAP("Wir haben viele Leute ___. (kennenlernen)", ["kennengelernt"], "kennen + ge + lernt."),
        GAP("Lilly hat früher in Spanien ___. (leben)", ["gelebt"], "منتظم: gelebt."),
        ORD("", ["Ich", "habe", "eine", "Wohnung", "gesucht"], ["Ich habe eine Wohnung gesucht"], "haben في التاني والـ Partizip في الآخر."),
        ORD("Im Herbst", ["mein", "habe", "Studium", "ich", "angefangen"], ["habe ich mein Studium angefangen"], "بعد ظرف الزمان: الفعل المساعد ثم الفاعل."),
        TRA("Perfekt: Ich organisiere die Party.", ["Ich habe die Party organisiert."], "organisieren ← organisiert."),
        TRA("Perfekt: Wir fliegen nach Madrid.", ["Wir sind nach Madrid geflogen."], "fliegen ← sind … geflogen."),
        ERR("Jonas hat in Zürich geblieben.", ["Jonas ist in Zürich geblieben."], "bleiben ← sein."),
        TF("Verben auf -ieren bilden das Partizip II ohne ge-.", true, "أيوه: studiert وorganisiert."),
        TF("„besuchen“ hat das Partizip „gebesucht“.", false, "الصح: besucht.")
      ]
    },
    {
      id: "a2-k1-genitiv-name",
      t: "Genitiv bei Namen: Julias Schwester", tAr: "الملكية مع الأسماء: Julias Schwester",
      summary: "Bei Namen kann man Besitz oder Zugehörigkeit mit <b>Name + s</b> ausdrücken: <b>die Schwester von Julia → Julias Schwester</b>. Endet der Name auf <b>-s, -ß, -x, -z</b>, schreibt man nur einen <b>Apostroph</b>: Jonas’ Freundin, Max’ Bruder.",
      summaryAr: "مع أسماء الأشخاص ممكن نعبّر عن الملكية بالاسم + s: die Schwester von Julia ← Julias Schwester. ولو الاسم بينتهي بـ s أو ß أو x أو z بنحط فاصلة علوية بس: Jonas’ Freundin.",
      sections: [
        sec("1. Name + s", "الاسم + s",
          "Der Name mit <b>s</b> steht vor dem Nomen. Das Nomen hat dann <b>keinen Artikel</b>: <b>Lillys Freunde</b> (nicht: die Lillys Freunde). Es gibt <b>keinen Apostroph</b> vor dem s.",
          "الاسم بـ s بييجي قبل الاسم التاني، والاسم التاني من غير أداة: Lillys Freunde. ومفيش فاصلة علوية قبل s.",
          { table: { head: ["mit von", "Genitiv (Name + s)"], rows: [["die Schwester von Julia", "Julias Schwester"], ["die Freunde von Lilly", "Lillys Freunde"], ["das Auto von Herrn Weber", "Herrn Webers Auto"], ["die Wohnung von Anna", "Annas Wohnung"]] } }),
        sec("2. Namen auf -s, -ß, -x, -z", "الأسماء اللي بتنتهي بـ s وß وx وz",
          "Hier schreibt man nur einen Apostroph: <b>Jonas’ Freundin, Frau Weiß’ Kollegin, Max’ Bruder, Liz’ Freund</b>. Man spricht es wie den Namen.",
          "هنا بنكتب فاصلة علوية بس: Jonas’ Freundin وMax’ Bruder. وبننطقه زي الاسم.",
          { examples: [["Das ist Jonas’ Apartment.", "دي شقة يوناس."], ["Max’ Schwester wohnt in Wien.", "أخت ماكس ساكنة في فيينا."]] }),
        sec("3. Im Gespräch: von + Dativ", "في الكلام: von + Dativ",
          "Im Gespräch sagt man oft <b>von + Dativ</b>: die Schwester von Julia, das Fahrrad von meinem Bruder. Beides ist richtig.",
          "في الكلام العادي غالبًا بنقول von + Dativ: die Schwester von Julia. الاتنين صح.",
          { examples: [["Das ist das Fahrrad von meinem Bruder.", "دي عجلة أخويا."]] })
      ],
      pitfalls: [
        P("Julia's Schwester", "Julias Schwester", "في الألماني مفيش فاصلة علوية قبل s."),
        P("die Lillys Freunde", "Lillys Freunde", "بعد الاسم بـ s مفيش أداة."),
        P("Jonass Freundin", "Jonas’ Freundin", "الاسم بينتهي بـ s ← فاصلة علوية بس."),
        P("Maxs Bruder", "Max’ Bruder", "بعد x ← فاصلة علوية بس.")
      ],
      exercises: [
        C("die Schwester von Julia → ___", ["Julias Schwester", "Julia's Schwester", "die Julias Schwester"], 0, "الاسم + s من غير فاصلة."),
        C("die Freundin von Jonas → ___", ["Jonas’ Freundin", "Jonass Freundin", "Jonas's Freundin"], 0, "بعد s ← فاصلة علوية."),
        C("der Bruder von Max → ___", ["Max’ Bruder", "Maxs Bruder", "Maxes Bruder"], 0, "بعد x ← فاصلة علوية."),
        GAP("Das ist ___ Wohnung. (Anna)", ["Annas"], "Anna + s."),
        GAP("___ Eltern wohnen in Bern. (Lukas)", ["Lukas’", "Lukas'"], "Lukas بينتهي بـ s ← Lukas’."),
        GAP("___ Hund heißt Taiga. (Marvin)", ["Marvins"], "Marvin + s."),
        ORD("", ["Lillys", "Familie", "wohnt", "in", "Madrid"], ["Lillys Familie wohnt in Madrid"], "الاسم بـ s قبل الاسم التاني."),
        TRA("Schreibe mit Genitiv: das Auto von Peter", ["Peters Auto"], "Peter + s."),
        TRA("Schreibe mit von: Saras Buch", ["das Buch von Sara"], "Name + s = das … von …"),
        ERR("Das ist die Toms Fahrrad.", ["Das ist Toms Fahrrad."], "بعد الاسم بـ s مفيش أداة."),
        TF("Nach dem Genitiv-Namen steht kein Artikel.", true, "أيوه: Julias Schwester."),
        TF("„Frau Weiß’ Kollegin“ ist richtig.", true, "بعد ß ← فاصلة علوية.")
      ]
    },
    {
      id: "a2-k1-weil",
      t: "Nebensatz mit weil", tAr: "الجملة الفرعية بـ weil",
      summary: "Mit <b>weil</b> nennt man einen <b>Grund</b> (Frage: Warum?). Der weil-Satz ist ein <b>Nebensatz</b>: Nach weil kommt das Subjekt, das <b>konjugierte Verb steht ganz am Ende</b>. Zwischen Hauptsatz und Nebensatz steht ein <b>Komma</b>.",
      summaryAr: "بـ weil بنقول السبب (ردًا على Warum؟). جملة weil جملة فرعية: بعد weil الفاعل، والفعل المتصرّف في آخر الجملة خالص. وبين الجملة الرئيسية والفرعية فاصلة.",
      sections: [
        sec("1. Hauptsatz + weil-Satz", "جملة رئيسية + جملة weil",
          "Hauptsatz: Verb auf Position 2. Nebensatz: <b>weil + Subjekt + … + Verb</b>.",
          "الجملة الرئيسية: الفعل في الموضع التاني. الجملة الفرعية: weil + الفاعل + … + الفعل في الآخر.",
          { table: { head: ["Hauptsatz", "Nebensatz"], rows: [["Lea kann nicht kommen,", "weil sie ihren Vater besucht."], ["Felix kommt gern,", "weil er Ben lange nicht gesehen hat."], ["Marvin kommt später,", "weil er arbeiten muss."]] } }),
        sec("2. Modalverben und Perfekt im weil-Satz", "الأفعال المساعدة والـ Perfekt في جملة weil",
          "Bei Modalverben steht das <b>Modalverb</b> ganz am Ende: weil er arbeiten <b>muss</b>. Im Perfekt steht <b>haben/sein</b> am Ende: weil er Ben lange nicht gesehen <b>hat</b>. Trennbare Verben stehen zusammen: weil sie früh <b>aufsteht</b>.",
          "مع الأفعال المساعدة، الفعل المساعد في الآخر خالص: weil er arbeiten muss. وفي الـ Perfekt، haben/sein في الآخر. والأفعال المنفصلة بتبقى لازقة: weil sie früh aufsteht.",
          { examples: [["Ich bin müde, weil ich früh aufgestanden bin.", "أنا تعبان لأني صحيت بدري."]] }),
        sec("3. Antwort auf Warum?", "الرد على Warum؟",
          "Auf die Frage <b>Warum?</b> kann man auch nur mit dem weil-Satz antworten: <b>Warum isst du nichts? – Weil ich keinen Hunger habe.</b>",
          "على سؤال Warum؟ ممكن نرد بجملة weil بس: Warum isst du nichts? – Weil ich keinen Hunger habe.",
          { examples: [["Warum lernst du Deutsch? – Weil ich in Deutschland arbeiten möchte.", "ليه بتتعلم ألماني؟ – لأني عايز أشتغل في ألمانيا."]] })
      ],
      pitfalls: [
        P("…, weil ich habe keine Zeit.", "…, weil ich keine Zeit habe.", "في جملة weil الفعل في الآخر."),
        P("…, weil er muss arbeiten.", "…, weil er arbeiten muss.", "الفعل المساعد في الآخر خالص."),
        P("…, weil sie steht früh auf.", "…, weil sie früh aufsteht.", "الفعل المنفصل بيتلم في الآخر."),
        P("Ich komme nicht weil ich krank bin.", "Ich komme nicht, weil ich krank bin.", "قبل weil فاصلة.")
      ],
      exercises: [
        C("Ich bleibe zu Hause, weil ich krank ___.", ["bin", "ist", "sein"], 0, "الفعل في الآخر: ich bin."),
        C("Lea kommt nicht, weil ___.", ["sie ihren Vater besucht", "sie besucht ihren Vater", "besucht sie ihren Vater"], 0, "weil + فاعل + … + فعل."),
        C("Er kommt später, weil er ___.", ["arbeiten muss", "muss arbeiten", "arbeitet muss"], 0, "الفعل المساعد في الآخر."),
        GAP("Ben lädt Freunde ein, weil er wieder da ___. (sein)", ["ist"], "er ist في الآخر."),
        GAP("Ich lerne Deutsch, weil ich hier ___ ___. (arbeiten, möchten)", ["arbeiten möchte"], "المصدر ثم الفعل المساعد."),
        ORD("Ich bin müde, weil", ["habe", "ich", "schlecht", "geschlafen"], ["ich schlecht geschlafen habe"], "Perfekt في weil: haben في الآخر."),
        ORD("Wir kaufen viel ein, weil", ["Gäste", "wir", "bekommen"], ["wir Gäste bekommen"], "الفعل في الآخر."),
        TRA("Verbinde mit weil: Marvin nimmt den Hund mit. Ben findet ihn süß.", ["Marvin nimmt den Hund mit, weil Ben ihn süß findet."], "weil + فاعل + … + فعل."),
        TRA("Antworte mit weil: Warum gehst du nicht ins Kino? (Ich habe kein Geld.)", ["Weil ich kein Geld habe."], "الرد بجملة weil بس."),
        ERR("Felix bringt nichts mit, weil Ben hat genug gekauft.", ["Felix bringt nichts mit, weil Ben genug gekauft hat."], "haben في الآخر."),
        TF("Im weil-Satz steht das konjugierte Verb am Ende.", true, "أيوه."),
        TF("Nach „weil“ kommt sofort das Verb.", false, "بعد weil الفاعل، والفعل في الآخر.")
      ]
    }
  ];

  /* ---------- Kapitel 2 ---------- */
  window.A2_GRAMMAR[2] = [
    {
      id: "a2-k2-modalverben-praeteritum",
      t: "Modalverben im Präteritum", tAr: "الأفعال المساعدة في الماضي البسيط",
      summary: "Über Vergangenes mit Modalverben spricht man meistens im <b>Präteritum</b>: <b>ich musste, ich konnte, ich durfte, ich sollte, ich wollte</b>. Das Präteritum hat <b>-te</b> und <b>keinen Umlaut</b>. Bei ich und er/sie/es ist die Form gleich.",
      summaryAr: "في الكلام عن الماضي بالأفعال المساعدة غالبًا بنستخدم الماضي البسيط: ich musste وich konnte وich durfte وich sollte وich wollte. بياخد -te ومن غير أوملاوت. ومع ich وer الشكل واحد.",
      sections: [
        sec("1. Die Formen", "التصريف",
          "Stamm ohne Umlaut + <b>te</b> + Endung: müssen → mus<b>ste</b>, können → kon<b>nte</b>, dürfen → dur<b>fte</b>, sollen → sol<b>lte</b>, wollen → wol<b>lte</b>.",
          "الجذر من غير أوملاوت + te + النهاية: musste وkonnte وdurfte وsollte وwollte.",
          { table: { head: ["Person", "müssen", "können", "dürfen", "wollen", "sollen"], rows: [["ich", "musste", "konnte", "durfte", "wollte", "sollte"], ["du", "musstest", "konntest", "durftest", "wolltest", "solltest"], ["er/sie/es", "musste", "konnte", "durfte", "wollte", "sollte"], ["wir", "mussten", "konnten", "durften", "wollten", "sollten"], ["ihr", "musstet", "konntet", "durftet", "wolltet", "solltet"], ["sie/Sie", "mussten", "konnten", "durften", "wollten", "sollten"]] } }),
        sec("2. Satzklammer", "قوس الجملة",
          "Das Modalverb steht auf Position 2, der <b>Infinitiv</b> am Ende: <b>Ich musste jeden Tag um sechs Uhr aufstehen.</b>",
          "الفعل المساعد في التاني والمصدر في الآخر: Ich musste jeden Tag um sechs Uhr aufstehen.",
          { examples: [["In der Schule konnte ich nachmittags Freunde treffen.", "في أيام المدرسة كنت أقدر أقابل أصحابي بعد الضهر."], ["Wir durften im Unterricht nicht sprechen.", "كان ممنوع نتكلم في الحصة."]] }),
        sec("3. Bedeutung", "المعنى",
          "<b>musste</b> = es war notwendig. <b>konnte</b> = es war möglich. <b>durfte</b> = es war erlaubt. <b>wollte</b> = man hatte den Wunsch. <b>sollte</b> = eine andere Person hat es verlangt.",
          "musste = كان لازم. konnte = كان ممكن. durfte = كان مسموح. wollte = كان عايز. sollte = حد تاني طلب ده.",
          { examples: [["Ich wollte immer erwachsen sein.", "كنت دايمًا عايز أكبر."], ["Wir sollten jeden Tag 30 Wörter lernen.", "كان المفروض نحفظ 30 كلمة كل يوم."]] })
      ],
      pitfalls: [
        P("Ich müsste früh aufstehen. (Vergangenheit)", "Ich musste früh aufstehen.", "الماضي من غير أوملاوت: musste."),
        P("Er konntet nicht kommen.", "Er konnte nicht kommen.", "er konnte من غير نهاية."),
        P("Ich musste stehen um sechs Uhr auf.", "Ich musste um sechs Uhr aufstehen.", "المصدر في الآخر."),
        P("Wir durfen nicht sprechen. (früher)", "Wir durften nicht sprechen.", "الماضي: durften.")
      ],
      exercises: [
        C("Früher ___ ich jeden Tag um sechs aufstehen.", ["musste", "muss", "müsste"], 0, "الماضي: musste."),
        C("___ du als Kind allein ins Kino gehen?", ["Durftest", "Darfst", "Durfte"], 0, "du durftest."),
        C("Wir ___ in den Ferien ausschlafen.", ["konnten", "können", "konntet"], 0, "wir konnten."),
        C("Ihr ___ eine Schuluniform tragen.", ["musstet", "mussten", "musste"], 0, "ihr musstet."),
        GAP("Ich ___ immer Lehrerin werden. (wollen)", ["wollte"], "ich wollte."),
        GAP("Die Schüler ___ jeden Tag 30 Wörter lernen. (sollen)", ["sollten"], "sie sollten."),
        GAP("Am Anfang ___ ich die Sprache nicht sprechen. (können)", ["konnte"], "ich konnte."),
        ORD("", ["Wir", "durften", "im", "Unterricht", "nicht", "sprechen"], ["Wir durften im Unterricht nicht sprechen"], "الفعل المساعد في التاني والمصدر في الآخر."),
        TRA("Schreibe im Präteritum: Ich muss viele Hausaufgaben machen.", ["Ich musste viele Hausaufgaben machen."], "muss ← musste."),
        TRA("Schreibe im Präteritum: Kannst du Englisch sprechen?", ["Konntest du Englisch sprechen?"], "kannst ← konntest."),
        ERR("Mein Bruder wolltet Pilot werden.", ["Mein Bruder wollte Pilot werden."], "er wollte."),
        TF("Modalverben im Präteritum haben keinen Umlaut.", true, "أيوه: musste وkonnte وdurfte."),
        TF("„ich durfte“ und „er durfte“ sind gleich.", true, "أيوه، ich وer نفس الشكل.")
      ]
    },
    {
      id: "a2-k2-artikel",
      t: "Wiederholung: Artikel im Nominativ, Akkusativ und Dativ", tAr: "مراجعة: الأدوات في الفاعل والمفعول به والداتيف",
      summary: "Der Artikel zeigt den <b>Kasus</b>. Nominativ = Subjekt (Wer?), Akkusativ = direktes Objekt (Wen? Was?), Dativ = Wem? und nach Präpositionen wie mit, bei, von, zu. Im Akkusativ ändert sich nur <b>maskulin</b> (den/einen), im Dativ ändern sich alle.",
      summaryAr: "الأداة بتوضّح الحالة. Nominativ = الفاعل (مين؟)، Akkusativ = المفعول به (مين/إيه؟)، Dativ = لمين؟ وبعد حروف جر زي mit وbei وvon وzu. في الأكوزاتيف المذكر بس اللي بيتغير، وفي الداتيف كلهم بيتغيروا.",
      sections: [
        sec("1. Die Tabelle", "الجدول",
          "Bestimmter Artikel, unbestimmter Artikel und Possessivartikel haben im Prinzip die gleichen Endungen.",
          "أداة التعريف وأداة النكرة وأداة الملكية ليهم تقريبًا نفس النهايات.",
          { table: { head: ["", "Nominativ", "Akkusativ", "Dativ"], rows: [["der Job", "der / ein / mein", "den / einen / meinen", "dem / einem / meinem"], ["das Jahr", "das / ein / mein", "das / ein / mein", "dem / einem / meinem"], ["die Schule", "die / eine / meine", "die / eine / meine", "der / einer / meiner"], ["die Eltern (Pl.)", "die / – / meine", "die / – / meine", "den / – / meinen + n"]] } }),
        sec("2. Wann welcher Kasus?", "إمتى أنهي حالة؟",
          "<b>Nominativ:</b> Subjekt und nach sein: <b>Der Job</b> ist toll. <b>Akkusativ:</b> nach den meisten Verben: Ich habe <b>einen Job</b>. <b>Dativ:</b> nach mit, bei, von, zu, aus, seit, nach: Ich wohne bei <b>meinen Eltern</b>.",
          "Nominativ: الفاعل وبعد sein. Akkusativ: بعد معظم الأفعال. Dativ: بعد mit وbei وvon وzu وaus وseit وnach.",
          { examples: [["Ich habe meinen Job vor einem Jahr angefangen.", "بدأت شغلي من سنة."], ["Meine Eltern zahlen meine Miete nicht.", "أهلي مش بيدفعوا إيجاري."]] }),
        sec("3. Dativ Plural", "جمع الداتيف",
          "Im Dativ Plural bekommt das Nomen ein <b>-n</b>: mit den Freunde<b>n</b>, bei meinen Eltern (schon -n). Kein -n bei Plural auf -s: mit den Autos.",
          "في جمع الداتيف الاسم بياخد n: mit den Freunden. ومن غير n لو الجمع بـ s.",
          { examples: [["Ich spreche mit den Lehrern.", "بتكلم مع المدرّسين."]] })
      ],
      pitfalls: [
        P("Ich habe ein Job.", "Ich habe einen Job.", "المذكر في الأكوزاتيف ← einen."),
        P("Ich wohne bei meine Eltern.", "Ich wohne bei meinen Eltern.", "bei + Dativ جمع ← meinen."),
        P("Seit ein Jahr studiere ich.", "Seit einem Jahr studiere ich.", "seit + Dativ ← einem."),
        P("Ich spiele mit den Kinder.", "Ich spiele mit den Kindern.", "جمع الداتيف + n.")
      ],
      exercises: [
        C("Ich habe ___ Job gefunden.", ["einen", "ein", "einem"], 0, "Akkusativ مذكر: einen."),
        C("Seit ___ Jahr bin ich mit der Schule fertig.", ["einem", "ein", "einen"], 0, "seit + Dativ: einem."),
        C("Ich wohne noch bei ___ Eltern.", ["meinen", "meine", "meiner"], 0, "bei + Dativ جمع: meinen."),
        C("___ Schule war sehr streng.", ["Die", "Der", "Den"], 0, "Nominativ مؤنث: die."),
        GAP("Ich mache ___ Ausbildung zur Gärtnerin. (eine)", ["eine"], "Akkusativ مؤنث: eine."),
        GAP("Sie hilft ___ Familie mit einem Kind. (eine)", ["einer"], "helfen + Dativ: einer."),
        GAP("Vor zwei Jahren habe ich mit ___ Job angefangen. (mein)", ["meinem"], "mit + Dativ مذكر: meinem."),
        ORD("", ["Meine", "Eltern", "zahlen", "meine", "Miete"], ["Meine Eltern zahlen meine Miete"], "فاعل + فعل + مفعول به."),
        TRA("Schreibe im Dativ: mit (die Freunde)", ["mit den Freunden"], "جمع الداتيف: den + n."),
        ERR("Ich fahre mit mein Fahrrad zur Uni.", ["Ich fahre mit meinem Fahrrad zur Uni."], "mit + Dativ محايد: meinem."),
        TF("Im Akkusativ ändert sich nur der maskuline Artikel.", true, "أيوه: der ← den."),
        TF("Im Dativ heißt „die Schule“ → „der Schule“.", true, "أيوه: المؤنث في الداتيف der.")
      ]
    },
    {
      id: "a2-k2-possessiv-dativ",
      t: "Possessivartikel im Dativ", tAr: "أدوات الملكية في الداتيف",
      summary: "Die Possessivartikel <b>mein, dein, sein, ihr, unser, euer, ihr/Ihr</b> haben im Dativ die gleichen Endungen wie <b>ein/kein</b>: <b>-em</b> (maskulin, neutral), <b>-er</b> (feminin), <b>-en</b> (Plural + n).",
      summaryAr: "أدوات الملكية mein وdein وsein وihr وunser وeuer وihr/Ihr في الداتيف ليها نفس نهايات ein وkein: -em للمذكر والمحايد، -er للمؤنث، -en للجمع + n.",
      sections: [
        sec("1. Die Endungen", "النهايات",
          "<b>mit meinem Bruder, mit meinem Kind, mit meiner Schwester, mit meinen Eltern</b>.",
          "mit meinem Bruder وmit meinem Kind وmit meiner Schwester وmit meinen Eltern.",
          { table: { head: ["", "maskulin", "neutral", "feminin", "Plural"], rows: [["ich", "meinem", "meinem", "meiner", "meinen"], ["du", "deinem", "deinem", "deiner", "deinen"], ["er/es", "seinem", "seinem", "seiner", "seinen"], ["sie", "ihrem", "ihrem", "ihrer", "ihren"], ["wir", "unserem", "unserem", "unserer", "unseren"], ["ihr", "eurem", "eurem", "eurer", "euren"], ["sie/Sie", "ihrem/Ihrem", "ihrem/Ihrem", "ihrer/Ihrer", "ihren/Ihren"]] } }),
        sec("2. Mit wem?", "مع مين؟",
          "Auf die Frage <b>Mit wem …?</b> antwortet man mit Dativ: <b>Mit wem gehst du ins Kino? – Mit meiner Freundin.</b>",
          "على سؤال Mit wem …? بنرد بالداتيف: Mit meiner Freundin.",
          { examples: [["Mit wem fährst du in Urlaub? – Mit meinen Geschwistern.", "هتسافر مع مين؟ – مع إخواتي."]] }),
        sec("3. euer → eurem", "euer بتبقى eurem",
          "Bei <b>euer</b> fällt das zweite <b>e</b> weg, wenn eine Endung kommt: euer Lehrer → mit <b>eurem</b> Lehrer, mit <b>eurer</b> Lehrerin.",
          "في euer الـ e التانية بتقع لما تيجي نهاية: eurem وeurer.",
          { examples: [["Sprecht ihr oft mit eurer Lehrerin?", "بتتكلموا كتير مع مدرّستكم؟"]] })
      ],
      pitfalls: [
        P("Ich gehe mit meine Freundin.", "Ich gehe mit meiner Freundin.", "مؤنث في الداتيف ← meiner."),
        P("Er wohnt bei seine Eltern.", "Er wohnt bei seinen Eltern.", "جمع في الداتيف ← seinen."),
        P("Mit euerem Lehrer", "Mit eurem Lehrer", "euer ← eurem."),
        P("Sie telefoniert mit ihr Bruder.", "Sie telefoniert mit ihrem Bruder.", "مذكر في الداتيف ← ihrem.")
      ],
      exercises: [
        C("Ich gehe mit ___ Bruder ins Kino. (mein)", ["meinem", "meinen", "meiner"], 0, "مذكر: meinem."),
        C("Sie wohnt bei ___ Tante. (ihr)", ["ihrer", "ihrem", "ihren"], 0, "مؤنث: ihrer."),
        C("Wir fahren mit ___ Kindern in Urlaub. (unser)", ["unseren", "unserem", "unserer"], 0, "جمع: unseren."),
        C("Sprecht ihr mit ___ Lehrerin? (euer)", ["eurer", "euerer", "euren"], 0, "euer ← eurer."),
        GAP("Mit wem gehst du ins Kino? – Mit ___ Freundin. (mein)", ["meiner"], "مؤنث: meiner."),
        GAP("Er spielt mit ___ Hund. (sein)", ["seinem"], "مذكر: seinem."),
        GAP("Kommen Sie mit ___ Mann? (Ihr)", ["Ihrem"], "مذكر: Ihrem."),
        ORD("", ["Ich", "telefoniere", "oft", "mit", "meinen", "Eltern"], ["Ich telefoniere oft mit meinen Eltern"], "mit + Dativ جمع."),
        TRA("Antworte mit Dativ: Mit wem lernst du? (meine Freunde)", ["Mit meinen Freunden.", "Ich lerne mit meinen Freunden."], "جمع + n: meinen Freunden."),
        ERR("Ich treffe mich mit mein Kollegin.", ["Ich treffe mich mit meiner Kollegin."], "مؤنث في الداتيف: meiner."),
        TF("Possessivartikel im Dativ haben die gleichen Endungen wie „ein“.", true, "أيوه: meinem زي einem."),
        TF("„mit unserem Kind“ ist richtig.", true, "das Kind محايد ← unserem.")
      ]
    }
  ];

  /* ---------- Kapitel 3 ---------- */
  window.A2_GRAMMAR[3] = [
    {
      id: "a2-k3-komparativ-superlativ",
      t: "Komparativ und Superlativ", tAr: "صيغة المقارنة والتفضيل",
      summary: "Mit dem <b>Komparativ</b> vergleicht man zwei Dinge: Adjektiv + <b>-er</b> (leicht → leichter). Mit dem <b>Superlativ</b> sagt man, was an der Spitze ist: <b>am</b> + Adjektiv + <b>-sten</b> (am leichtesten). Kurze Adjektive mit a, o, u bekommen oft einen <b>Umlaut</b>: groß → größer → am größten.",
      summaryAr: "بصيغة المقارنة بنقارن بين حاجتين: الصفة + er (leicht ← leichter). وبصيغة التفضيل بنقول الأحسن: am + الصفة + sten (am leichtesten). والصفات القصيرة اللي فيها a وo وu غالبًا بتاخد أوملاوت: groß ← größer ← am größten.",
      sections: [
        sec("1. Regelmäßige Formen", "الأشكال المنتظمة",
          "Komparativ: <b>-er</b>. Superlativ: <b>am …-sten</b>. Nach -d, -t, -s, -ß, -z: <b>am …-esten</b> (am kürzesten, am heißesten).",
          "المقارنة: -er. التفضيل: am …-sten. وبعد d وt وs وß وz: am …-esten.",
          { table: { head: ["Grundform", "Komparativ", "Superlativ"], rows: [["schön", "schöner", "am schönsten"], ["billig", "billiger", "am billigsten"], ["kurz", "kürzer", "am kürzesten"], ["groß", "größer", "am größten"], ["alt", "älter", "am ältesten"], ["teuer", "teurer", "am teuersten"]] } }),
        sec("2. Unregelmäßige Formen", "الأشكال الشاذة",
          "Einige wichtige Adjektive sind unregelmäßig: <b>gut – besser – am besten, gern – lieber – am liebsten, viel – mehr – am meisten, nah – näher – am nächsten, hoch – höher – am höchsten</b>.",
          "صفات مهمة شاذة: gut – besser – am besten وgern – lieber – am liebsten وviel – mehr – am meisten وnah – näher – am nächsten وhoch – höher – am höchsten.",
          { table: { head: ["Grundform", "Komparativ", "Superlativ"], rows: [["gut", "besser", "am besten"], ["gern", "lieber", "am liebsten"], ["viel", "mehr", "am meisten"], ["nah", "näher", "am nächsten"], ["hoch", "höher", "am höchsten"]] } }),
        sec("3. Am liebsten …", "أكتر حاجة …",
          "Mit <b>gern, lieber, am liebsten</b> sagt man Vorlieben: Ich lese <b>gern</b>. Ich sehe <b>lieber</b> Filme. Ich bin <b>am liebsten</b> draußen.",
          "بـ gern وlieber وam liebsten بنقول اللي بنحبه: Ich lese gern. Ich sehe lieber Filme. Ich bin am liebsten draußen.",
          { examples: [["Was machst du in der Freizeit am liebsten?", "بتحب تعمل إيه أكتر حاجة في وقت فراغك؟"]] })
      ],
      pitfalls: [
        P("Das ist mehr gut.", "Das ist besser.", "gut ← besser (شاذة)."),
        P("Ich trinke gerner Tee.", "Ich trinke lieber Tee.", "gern ← lieber."),
        P("Er ist am größter.", "Er ist am größten.", "التفضيل: am …-sten."),
        P("Der Laptop ist teuerer.", "Der Laptop ist teurer.", "teuer ← teurer (الـ e بتقع).")
      ],
      exercises: [
        C("Komparativ von „groß“:", ["größer", "großer", "mehr groß"], 0, "groß ← größer بأوملاوت."),
        C("Superlativ von „gut“:", ["am besten", "am gutesten", "am bessten"], 0, "gut – besser – am besten."),
        C("Ich spiele ___ Tennis als Fußball. (gern)", ["lieber", "gerner", "mehr gern"], 0, "gern ← lieber."),
        C("Wer lernt am ___? (viel)", ["meisten", "vielsten", "mehrsten"], 0, "viel ← am meisten."),
        GAP("Das Tablet ist ___ als der Laptop. (leicht)", ["leichter"], "leicht ← leichter."),
        GAP("Ein Laptop kostet ___ als ein Tablet. (viel)", ["mehr"], "viel ← mehr."),
        GAP("Wer wohnt am ___ zur Schule? (nah)", ["nächsten"], "nah ← am nächsten."),
        ORD("", ["Ich", "bin", "am", "liebsten", "in", "der", "Natur"], ["Ich bin am liebsten in der Natur"], "am liebsten بعد الفعل."),
        TRA("Superlativ: Die Professorin ist interessant. → Sie ist am ___.", ["am interessantesten", "Sie ist am interessantesten."], "بعد t ← -esten."),
        ERR("Mein Bruder ist älterer als ich.", ["Mein Bruder ist älter als ich."], "المقارنة بعد sein من غير نهاية: älter."),
        TF("Der Komparativ von „teuer“ ist „teurer“.", true, "أيوه، الـ e بتقع."),
        TF("Der Superlativ von „hoch“ ist „am hochsten“.", false, "الصح: am höchsten.")
      ]
    },
    {
      id: "a2-k3-als-wie",
      t: "Vergleiche mit als und wie", tAr: "المقارنة بـ als وwie",
      summary: "Wenn zwei Dinge <b>verschieden</b> sind, benutzt man den <b>Komparativ + als</b>: Das Tablet ist leichter <b>als</b> der Laptop. Wenn sie <b>gleich</b> sind: <b>(genau)so + Grundform + wie</b>: Der Laptop ist so praktisch <b>wie</b> das Tablet. Negativ: <b>nicht so … wie</b>.",
      summaryAr: "لو الحاجتين مختلفين بنستخدم المقارنة + als: Das Tablet ist leichter als der Laptop. ولو زي بعض: (genau)so + الصفة الأصلية + wie. والنفي: nicht so … wie.",
      sections: [
        sec("1. Verschieden: Komparativ + als", "مختلفين: المقارنة + als",
          "<b>als</b> steht nach dem Komparativ: <b>besser als, größer als, lieber als</b>.",
          "als بتيجي بعد صيغة المقارنة: besser als وgrößer als.",
          { examples: [["Ein E-Book-Reader ist billiger als ein Tablet.", "قارئ الكتب أرخص من التابلت."], ["Ich bin weniger online als meine Freunde.", "أنا أونلاين أقل من أصحابي."]] }),
        sec("2. Gleich: so … wie", "زي بعض: so … wie",
          "<b>so / genauso + Grundform + wie</b>. Achtung: Hier steht <b>keine</b> Komparativform!",
          "so أو genauso + الصفة الأصلية + wie. خلي بالك: هنا مفيش صيغة مقارنة!",
          { table: { head: ["Bedeutung", "Beispiel"], rows: [["A > B", "Das Tablet ist praktischer als der Laptop."], ["A = B", "Der Laptop ist (genau)so praktisch wie das Tablet."], ["A < B", "Der Laptop ist nicht so leicht wie das Tablet."]] } }),
        sec("3. als oder wie?", "als ولا wie؟",
          "Merke: <b>Komparativ → als</b>, <b>so/genauso/nicht so → wie</b>. Im Satz kann der Vergleich am Ende stehen: Ich arbeite lieber mit dem Laptop <b>als mit dem Tablet</b>.",
          "احفظ: صيغة المقارنة ← als، وso/genauso/nicht so ← wie.",
          { examples: [["Die Smartwatch ist so groß wie die Uhr.", "الساعة الذكية كبيرة زي الساعة العادية."]] })
      ],
      pitfalls: [
        P("Das Tablet ist leichter wie der Laptop.", "Das Tablet ist leichter als der Laptop.", "بعد صيغة المقارنة ← als."),
        P("Der Laptop ist so praktisch als das Tablet.", "Der Laptop ist so praktisch wie das Tablet.", "so … wie."),
        P("Er ist so größer wie ich.", "Er ist so groß wie ich.", "مع so الصفة الأصلية."),
        P("Ich bin älter wie mein Bruder.", "Ich bin älter als mein Bruder.", "älter ← als.")
      ],
      exercises: [
        C("Das Smartphone ist kleiner ___ der Laptop.", ["als", "wie", "so"], 0, "مقارنة ← als."),
        C("Der Laptop ist genauso teuer ___ das Tablet.", ["wie", "als", "dann"], 0, "genauso … wie."),
        C("Der E-Book-Reader ist nicht so ___ wie das Tablet.", ["teuer", "teurer", "am teuersten"], 0, "مع so الصفة الأصلية."),
        GAP("Das Handy ist älter ___ der Fernseher.", ["als"], "älter ← als."),
        GAP("Die Smartwatch ist so groß ___ eine Uhr.", ["wie"], "so … wie."),
        GAP("Ich lese lieber E-Books ___ Bücher.", ["als"], "lieber ← als."),
        ORD("", ["Der", "Bildschirm", "ist", "größer", "als", "beim", "Tablet"], ["Der Bildschirm ist größer als beim Tablet"], "مقارنة + als."),
        TRA("Vergleiche (A = B): Der Laptop ist praktisch. Das Tablet ist auch praktisch.", ["Der Laptop ist so praktisch wie das Tablet.", "Der Laptop ist genauso praktisch wie das Tablet."], "so … wie."),
        TRA("Vergleiche (A > B): Das Tablet ist leicht. Der Laptop ist schwer.", ["Das Tablet ist leichter als der Laptop."], "leichter als."),
        ERR("Mein Handy ist billiger wie dein Handy.", ["Mein Handy ist billiger als dein Handy."], "billiger ← als."),
        TF("Nach dem Komparativ steht „als“.", true, "أيوه."),
        TF("„so schneller wie“ ist richtig.", false, "مع so الصفة الأصلية: so schnell wie.")
      ]
    },
    {
      id: "a2-k3-dass",
      t: "Nebensatz mit dass", tAr: "الجملة الفرعية بـ dass",
      summary: "Mit <b>dass</b> sagt man, was man denkt, findet, weiß oder sagt: <b>Ich finde, dass das Handy praktisch ist.</b> Der dass-Satz ist ein Nebensatz: Das konjugierte Verb steht <b>am Ende</b>. Typische Einleitungen: Ich finde, dass … / Ich denke, dass … / Ich finde es gut, dass … / Es nervt, dass …",
      summaryAr: "بـ dass بنقول اللي بنفكر فيه أو بنشوفه أو بنعرفه أو بنقوله: Ich finde, dass das Handy praktisch ist. جملة dass جملة فرعية والفعل في الآخر. بدايات مشهورة: Ich finde, dass … وIch denke, dass … وIch finde es gut, dass …",
      sections: [
        sec("1. Hauptsatz + dass-Satz", "جملة رئيسية + جملة dass",
          "Im Hauptsatz steht ein Verb wie <b>finden, denken, sagen, wissen, glauben, hoffen</b> oder ein Ausdruck wie <b>Es ist gut / Ich bin froh</b>. Dann folgt: <b>, dass + Subjekt + … + Verb</b>.",
          "الجملة الرئيسية فيها فعل زي finden وdenken وsagen وwissen وglauben وhoffen أو تعبير زي Es ist gut. وبعدها: فاصلة + dass + فاعل + … + فعل.",
          { table: { head: ["Hauptsatz", "Nebensatz"], rows: [["Ich finde es sehr gut,", "dass man immer Kontakt hat."], ["Meinen Freunden hat gefallen,", "dass ich Fotos gepostet habe."], ["Ich möchte,", "dass sie mich anruft."], ["Carla sagt,", "dass Handys praktisch sind."]] } }),
        sec("2. Modalverb und Perfekt im dass-Satz", "الفعل المساعد والـ Perfekt في جملة dass",
          "Das konjugierte Verb steht ganz am Ende: …, dass man vorsichtiger sein <b>soll</b>. …, dass er das Foto gepostet <b>hat</b>.",
          "الفعل المتصرّف في الآخر خالص: …, dass man vorsichtiger sein soll.",
          { examples: [["Er hat vergessen, dass seine Chefin das Foto sehen kann.", "نسي إن مديرته تقدر تشوف الصورة."]] }),
        sec("3. Meinung äußern", "التعبير عن الرأي",
          "Viele Redemittel für die Meinung benutzen dass: <b>Ich bin der Meinung, dass … / Ich mag es nicht, dass … / Es nervt, dass …</b>",
          "تعبيرات كتير للرأي بتستخدم dass: Ich bin der Meinung, dass … وIch mag es nicht, dass …",
          { examples: [["Ich bin froh, dass ich alles sofort teilen kann.", "أنا مبسوط إني أقدر أشارك كل حاجة على طول."]] })
      ],
      pitfalls: [
        P("Ich finde, dass das Handy ist praktisch.", "Ich finde, dass das Handy praktisch ist.", "في جملة dass الفعل في الآخر."),
        P("Ich denke dass er recht hat.", "Ich denke, dass er recht hat.", "قبل dass فاصلة."),
        P("…, dass man soll vorsichtig sein.", "…, dass man vorsichtig sein soll.", "الفعل المساعد في الآخر."),
        P("Ich weiß, das er kommt.", "Ich weiß, dass er kommt.", "أداة الربط بـ ss: dass.")
      ],
      exercises: [
        C("Ich finde, dass Handys sehr praktisch ___.", ["sind", "ist", "sein"], 0, "Handys جمع ← sind في الآخر."),
        C("Es nervt mich, dass ___.", ["er immer zu spät kommt", "er kommt immer zu spät", "kommt er immer zu spät"], 0, "dass + فاعل + … + فعل."),
        C("Ich glaube, ___ der Film gut ist.", ["dass", "das", "weil dass"], 0, "أداة الربط: dass."),
        GAP("Ich bin froh, dass du ___. (kommen)", ["kommst"], "du kommst في الآخر."),
        GAP("Er sagt, dass er krank ___. (sein)", ["ist"], "er ist في الآخر."),
        ORD("Ich finde es gut, dass", ["man", "teilen", "Fotos", "kann"], ["man Fotos teilen kann"], "الفعل المساعد في الآخر."),
        ORD("Meinen Freunden hat gefallen, dass", ["ich", "gepostet", "Fotos", "habe"], ["ich Fotos gepostet habe"], "haben في الآخر."),
        TRA("Schreibe mit „Carla sagt, dass …“: Handys sind praktisch.", ["Carla sagt, dass Handys praktisch sind."], "dass + … + sind."),
        TRA("Schreibe mit „Ich denke, dass …“: Man soll keine Fotos von Kindern posten.", ["Ich denke, dass man keine Fotos von Kindern posten soll."], "soll في الآخر."),
        ERR("Ferdinand findet, dass die Leute sollen vorsichtiger sein.", ["Ferdinand findet, dass die Leute vorsichtiger sein sollen."], "الفعل المساعد في الآخر."),
        TF("Im dass-Satz steht das konjugierte Verb am Ende.", true, "أيوه."),
        TF("„dass“ und „das“ sind gleich.", false, "dass أداة ربط، وdas أداة تعريف أو ضمير.")
      ]
    }
  ];

  const spread = window.A1_GRAMMAR_SPREAD || (() => {});
  spread([1, 2, 3].flatMap(chapter => window.A2_GRAMMAR[chapter]));
})();
