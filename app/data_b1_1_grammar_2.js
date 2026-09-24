/* Detailed B1.1 grammar (chapters 3-4). See data_b1_1_grammar_1.js. */
window.B1_GRAMMAR = window.B1_GRAMMAR || {};

window.B1_GRAMMAR[3] = [
  {
    id: "k3-praeteritum",
    t: "Präteritum: Formen", tAr: "الماضي البسيط (Präteritum): التصريف",
    summary: "Das <b>Präteritum</b> benutzt man vor allem in geschriebenen Texten (Biografien, Berichte, Märchen) und bei <b>sein, haben</b> und den <b>Modalverben</b> auch beim Sprechen.",
    summaryAr: "الـ Präteritum بيتستخدم أكتر في الكتابة (سير ذاتية، تقارير، حكايات)، ومع sein وhaben والأفعال المساعدة حتى في الكلام.",
    sections: [
      {
        h: "1. Regelmäßige Verben: Stamm + te + Endung", hAr: "الأفعال المنتظمة: الجذر + te + النهاية",
        text: "Regelmäßige Verben bekommen <b>-te-</b>. Endet der Stamm auf <b>-t/-d</b> oder bestimmte Konsonanten, kommt ein <b>e</b> dazu: arbeit<b>ete</b>. <b>ich</b> und <b>er/sie/es</b> haben die gleiche Form – ohne Endung.",
        ar: "الأفعال المنتظمة بتاخد -te-. لو الجذر بينتهي بـ t أو d بنزود e. وich وer ليهم نفس الشكل من غير نهاية.",
        table: {
          head: ["", "machen", "arbeiten", "fahren (unregelm.)", "sein"],
          rows: [["ich", "machte", "arbeitete", "fuhr", "war"], ["du", "machtest", "arbeitetest", "fuhrst", "warst"], ["er/sie/es", "machte", "arbeitete", "fuhr", "war"], ["wir", "machten", "arbeiteten", "fuhren", "waren"], ["ihr", "machtet", "arbeitetet", "fuhrt", "wart"], ["sie/Sie", "machten", "arbeiteten", "fuhren", "waren"]]
        }
      },
      {
        h: "2. Unregelmäßige und gemischte Verben", hAr: "الأفعال الشاذة والمختلطة",
        text: "Unregelmäßige Verben ändern den <b>Vokal</b> und haben kein -te-. Gemischte Verben ändern den Vokal <b>und</b> bekommen -te-. Diese Formen muss man lernen.",
        ar: "الأفعال الشاذة بيتغير فيها حرف العلة ومفيش -te-. والمختلطة بيتغير فيها الحرف وبتاخد -te- كمان. لازم تتحفظ.",
        table: {
          head: ["Infinitiv", "Präteritum", "Typ"],
          rows: [["gehen", "ging", "unregelmäßig"], ["kommen", "kam", "unregelmäßig"], ["sehen", "sah", "unregelmäßig"], ["finden", "fand", "unregelmäßig"], ["denken", "dachte", "gemischt"], ["bringen", "brachte", "gemischt"], ["wissen", "wusste", "gemischt"], ["kennen", "kannte", "gemischt"], ["können", "konnte", "Modalverb"], ["müssen", "musste", "Modalverb"]]
        },
        examples: [["Sie wurde 1952 geboren und wuchs in Kairo auf.", "اتولدت سنة ١٩٥٢ واتربت في القاهرة."], ["Damals wusste niemand, wie es weitergeht.", "ساعتها محدش كان عارف الدنيا هتمشي إزاي."]]
      },
      {
        h: "3. Trennbare Verben", hAr: "الأفعال المنفصلة",
        text: "Auch im Präteritum trennt sich das Präfix und steht am Satzende.",
        ar: "حتى في الـ Präteritum البادئة بتنفصل وتروح آخر الجملة.",
        examples: [["Der Zug fuhr pünktlich ab.", "القطر اتحرك في معاده."], ["Sie stand jeden Tag um fünf Uhr auf.", "كانت بتصحى الساعة خمسة كل يوم."]]
      }
    ],
    pitfalls: [
      { wrong: "er fahrte", right: "er fuhr", ar: "fahren فعل شاذ." },
      { wrong: "ich warte (Präteritum von warten)", right: "ich wartete", ar: "الجذر بينتهي بـ t → wartete." },
      { wrong: "er denkte", right: "er dachte", ar: "denken فعل مختلط." }
    ],
    exercises: [
      { type: "choice", q: "Als Kind ___ ich in einem kleinen Dorf.", o: ["wohnte", "wohnt", "gewohnt"], a: 0, why: "Präteritum من wohnen: wohnte." },
      { type: "choice", q: "Er ___ jeden Morgen mit dem Bus zur Schule.", o: ["fahrte", "fuhr", "fuhrt"], a: 1, why: "fahren → fuhr." },
      { type: "choice", q: "Wir ___ nicht, dass du krank warst.", o: ["wussten", "wissten", "wussen"], a: 0, why: "wissen → wusste → wir wussten." },
      { type: "gap", q: "Gestern ___ ich keine Zeit. (haben)", a: ["hatte"], why: "haben → hatte." },
      { type: "gap", q: "Die Kinder ___ im Garten. (spielen)", a: ["spielten"], why: "sie → spielten." },
      { type: "gap", q: "Du ___ damals sehr viel. (arbeiten)", a: ["arbeitetest"], why: "arbeit + e + test." },
      { type: "order", prefix: "Nach dem Studium", words: ["nach", "sie", "zog", "Berlin"], a: ["zog sie nach Berlin"], why: "الفعل في المكان التاني بعد التعبير الزمني." },
      { type: "transform", q: "Setze ins Präteritum: Ich gehe zur Arbeit und komme spät zurück.", a: ["Ich ging zur Arbeit und kam spät zurück."], why: "gehen → ging، zurückkommen → kam … zurück." },
      { type: "error", q: "Früher denkte ich, dass Deutsch sehr schwer ist.", a: ["Früher dachte ich, dass Deutsch sehr schwer ist.", "Früher dachte ich, dass Deutsch sehr schwer war."], why: "denken → dachte." },
      { type: "truefalse", q: "Im Präteritum haben „ich“ und „er“ die gleiche Form.", a: true, why: "ich machte / er machte – نفس الشكل." }
    ]
  },
  {
    id: "k3-perfekt-praeteritum",
    t: "Perfekt oder Präteritum?", tAr: "Perfekt ولا Präteritum؟",
    summary: "Beide Zeiten beschreiben die Vergangenheit. Der Unterschied liegt vor allem im <b>Stil</b>: Beim Sprechen meist <b>Perfekt</b>, beim Schreiben (Zeitung, Biografie) meist <b>Präteritum</b>.",
    summaryAr: "الاتنين للماضي. الفرق في الأسلوب: في الكلام غالبًا Perfekt، وفي الكتابة (جرايد، سير ذاتية) غالبًا Präteritum.",
    sections: [
      {
        h: "1. Perfekt: haben/sein + Partizip II", hAr: "Perfekt: haben/sein + التصريف التالت",
        text: "<b>sein</b> steht bei Verben der <b>Bewegung</b> (fahren, gehen, fliegen) und der <b>Veränderung</b> (aufwachen, einschlafen, werden, sterben) sowie bei <b>sein, bleiben, passieren</b>. Alle anderen Verben bilden das Perfekt mit <b>haben</b>.",
        ar: "sein مع أفعال الحركة والتغيير ومع sein وbleiben وpassieren. الباقي كله مع haben.",
        table: {
          head: ["mit haben", "mit sein"],
          rows: [["Ich habe gearbeitet.", "Ich bin nach Rom gefahren."], ["Wir haben lange geschlafen.", "Wir sind spät eingeschlafen."], ["Er hat sich verliebt.", "Er ist Vater geworden."], ["Sie hat das Buch gelesen.", "Was ist passiert?"]]
        }
      },
      {
        h: "2. Wann welche Zeit?", hAr: "إمتى نستخدم أي زمن؟",
        text: "<b>Perfekt</b>: Gespräche, E-Mails, Nachrichten an Freunde. <b>Präteritum</b>: Biografien, Berichte, Geschichten – und immer bei <b>war, hatte, konnte, musste, wollte, durfte, sollte</b>, auch beim Sprechen.",
        ar: "Perfekt في الكلام والرسايل، وPräteritum في السير والتقارير والحكايات، ودايمًا مع war وhatte والأفعال المساعدة حتى في الكلام.",
        examples: [
          ["Gestern habe ich meine Oma besucht. Sie war krank.", "امبارح زرت جدتي. كانت عيانة."],
          ["Goethe wurde 1749 in Frankfurt geboren. Er studierte Jura.", "جوته اتولد ١٧٤٩ في فرانكفورت ودرس قانون."]
        ]
      }
    ],
    pitfalls: [
      { wrong: "Ich habe nach Hause gegangen.", right: "Ich bin nach Hause gegangen.", ar: "gehen حركة → sein." },
      { wrong: "Ich bin gestern viel gearbeitet.", right: "Ich habe gestern viel gearbeitet.", ar: "arbeiten مش حركة → haben." },
      { wrong: "Ich habe keine Zeit gehabt. (möglich, aber üblicher:)", right: "Ich hatte keine Zeit.", ar: "مع haben وsein الأشهر نقول Präteritum." }
    ],
    exercises: [
      { type: "choice", q: "Letztes Jahr ___ wir nach Spanien geflogen.", o: ["haben", "sind", "waren"], a: 1, why: "fliegen حركة → sind." },
      { type: "choice", q: "Er ___ gestern Abend lange ferngesehen.", o: ["hat", "ist", "war"], a: 0, why: "fernsehen مش حركة → hat." },
      { type: "choice", q: "Im Gespräch sagt man meistens: „Gestern ___ ich keine Zeit.“", o: ["habe gehabt", "hatte", "hat"], a: 1, why: "مع haben الأشيع Präteritum: hatte." },
      { type: "gap", q: "Wann ___ du heute aufgewacht? (sein)", a: ["bist"], why: "aufwachen تغيير حالة → sein." },
      { type: "gap", q: "Was ___ denn passiert? (sein)", a: ["ist"], why: "passieren → sein." },
      { type: "transform", q: "Setze ins Perfekt: Wir bleiben zwei Wochen am Meer.", a: ["Wir sind zwei Wochen am Meer geblieben."], why: "bleiben → sein + geblieben." },
      { type: "transform", q: "Setze ins Perfekt: Sie kauft ein neues Handy.", a: ["Sie hat ein neues Handy gekauft."], why: "kaufen → haben + gekauft." },
      { type: "error", q: "Wir haben um sechs Uhr losgefahren.", a: ["Wir sind um sechs Uhr losgefahren."], why: "losfahren حركة → sind." },
      { type: "truefalse", q: "In einer Biografie im Internet steht meistens das Präteritum.", a: true, why: "النصوص المكتوبة زي السير بتستخدم Präteritum." }
    ]
  },
  {
    id: "k3-zeit",
    t: "Zeitangaben: als, wenn, während, bevor, nachdem, seit", tAr: "التعبير عن الزمن: als وwenn وwährend وbevor وnachdem وseit",
    summary: "Temporale Nebensätze sagen, <b>wann</b> etwas passiert. Das Verb steht am Ende. Wichtig ist die Wahl zwischen <b>als</b> und <b>wenn</b> und die Zeitenfolge bei <b>nachdem</b>.",
    summaryAr: "جمل الزمن بتقول الحاجة حصلت إمتى، والفعل في الآخر. المهم تفرق بين als وwenn، وتعرف الأزمنة مع nachdem.",
    sections: [
      {
        h: "1. als oder wenn?", hAr: "als ولا wenn؟",
        text: "<b>als</b>: <b>einmal</b> in der Vergangenheit (ein Ereignis oder ein Zeitraum). <b>wenn</b>: <b>immer wieder</b> (Vergangenheit, „jedes Mal wenn“) oder in Gegenwart/Zukunft.",
        ar: "als لحاجة حصلت مرة واحدة في الماضي. wenn للتكرار (كل ما) أو للحاضر والمستقبل.",
        table: {
          head: ["", "einmal", "mehrmals / Gegenwart"],
          rows: [["Vergangenheit", "Als ich 18 war, zog ich nach Kairo.", "(Immer) wenn ich Oma besuchte, backte sie Kuchen."], ["Gegenwart / Zukunft", "—", "Wenn ich Zeit habe, rufe ich dich an."]]
        }
      },
      {
        h: "2. während, bevor, nachdem, seit(dem), bis", hAr: "باقي الروابط الزمنية",
        text: "<b>während</b> = gleichzeitig. <b>bevor</b> = vorher. <b>nachdem</b> = danach – im Nebensatz steht eine <b>frühere Zeit</b> (Plusquamperfekt zum Präteritum, Perfekt zum Präsens). <b>seit(dem)</b> = von einem Punkt bis jetzt. <b>bis</b> = Endpunkt.",
        ar: "während = في نفس الوقت، bevor = قبل، nachdem = بعد (والجملة بتاعتها بزمن أقدم)، seit = من وقت معين لحد دلوقتي، bis = لحد.",
        table: {
          head: ["Konnektor", "Beispiel"],
          rows: [["während", "Während ich koche, hört er Musik."], ["bevor", "Bevor ich nach Deutschland kam, lernte ich Deutsch."], ["nachdem", "Nachdem ich gegessen hatte, ging ich spazieren."], ["seit(dem)", "Seitdem ich hier wohne, fahre ich Rad."], ["bis", "Warte hier, bis ich zurückkomme."]]
        }
      },
      {
        h: "3. Präpositionen der Zeit", hAr: "حروف جر الزمن",
        text: "<b>vor</b> + Dativ (vor zwei Jahren), <b>seit</b> + Dativ (seit einem Monat), <b>nach</b> + Dativ (nach dem Studium), <b>während</b> + Genitiv (während des Urlaubs), <b>bei</b> + Dativ (beim Essen).",
        ar: "vor وseit وnach وbei بياخدوا Dativ، وwährend بتاخد Genitiv.",
        examples: [["Vor drei Jahren habe ich geheiratet.", "من تلات سنين اتجوزت."], ["Seit einem Monat lerne ich jeden Tag.", "من شهر وأنا بذاكر كل يوم."]]
      }
    ],
    pitfalls: [
      { wrong: "Wenn ich 2015 nach Berlin kam, …", right: "Als ich 2015 nach Berlin kam, …", ar: "مرة واحدة في الماضي → als." },
      { wrong: "Nachdem ich esse, gehe ich.", right: "Nachdem ich gegessen habe, gehe ich.", ar: "مع nachdem الجملة بزمن أقدم." },
      { wrong: "Seit drei Jahren habe ich hier gewohnt.", right: "Seit drei Jahren wohne ich hier.", ar: "مع seit لو لسه مستمر بنستخدم المضارع." }
    ],
    exercises: [
      { type: "choice", q: "___ ich klein war, hatte ich einen Hund.", o: ["Als", "Wenn", "Seit"], a: 0, why: "فترة واحدة في الماضي → Als." },
      { type: "choice", q: "___ ich nach Hause komme, trinke ich immer einen Tee.", o: ["Als", "Wenn", "Bevor"], a: 1, why: "تكرار في الحاضر → Wenn." },
      { type: "choice", q: "___ ich die Prüfung bestanden hatte, feierten wir.", o: ["Nachdem", "Bevor", "Während"], a: 0, why: "Plusquamperfekt → Nachdem." },
      { type: "choice", q: "Ich wohne ___ zwei Jahren in Leipzig.", o: ["vor", "seit", "nach"], a: 1, why: "لسه ساكن → seit." },
      { type: "gap", q: "___ du einkaufst, räume ich die Küche auf. (gleichzeitig)", a: ["Während"], why: "في نفس الوقت → während." },
      { type: "gap", q: "Mach bitte das Licht aus, ___ du gehst. (vorher)", a: ["bevor"], why: "قبل → bevor." },
      { type: "transform", q: "Verbinde mit nachdem: Er hatte gefrühstückt. Er ging zur Arbeit.", a: ["Nachdem er gefrühstückt hatte, ging er zur Arbeit.", "Er ging zur Arbeit, nachdem er gefrühstückt hatte."], why: "nachdem + Plusquamperfekt، والرئيسية Präteritum." },
      { type: "error", q: "Wenn ich letztes Jahr in Wien war, habe ich die Oper besucht.", a: ["Als ich letztes Jahr in Wien war, habe ich die Oper besucht."], why: "مرة واحدة في الماضي → als." },
      { type: "truefalse", q: "„Immer wenn es regnete, blieben wir im Haus.“ ist richtig.", a: true, why: "تكرار في الماضي → wenn." }
    ]
  }
];

window.B1_GRAMMAR[4] = [
  {
    id: "k4-konjunktiv",
    t: "Konjunktiv II: höflich bitten, wünschen, raten", tAr: "Konjunktiv II: الطلب المؤدب والأمنية والنصيحة",
    summary: "Den <b>Konjunktiv II</b> benutzt man für <b>höfliche Bitten</b>, <b>Wünsche</b>, <b>Ratschläge</b> und <b>Vorschläge</b>. Die meisten Verben bilden ihn mit <b>würde + Infinitiv</b>.",
    summaryAr: "Konjunktiv II بنستخدمه للطلب بأدب، والأمنيات، والنصايح، والاقتراحات. أغلب الأفعال بنعمله بـ würde + المصدر.",
    sections: [
      {
        h: "1. Die Formen", hAr: "التصريف",
        text: "<b>haben, sein, werden</b> und die <b>Modalverben</b> haben eigene Formen. Alle anderen Verben: <b>würde + Infinitiv</b>.",
        ar: "haben وsein وwerden والأفعال المساعدة ليهم أشكال خاصة. الباقي: würde + المصدر.",
        table: {
          head: ["", "sein", "haben", "können", "würde + Inf."],
          rows: [["ich", "wäre", "hätte", "könnte", "würde fahren"], ["du", "wärst", "hättest", "könntest", "würdest fahren"], ["er/sie/es", "wäre", "hätte", "könnte", "würde fahren"], ["wir", "wären", "hätten", "könnten", "würden fahren"], ["ihr", "wärt", "hättet", "könntet", "würdet fahren"], ["sie/Sie", "wären", "hätten", "könnten", "würden fahren"]]
        },
        examples: [["Ich hätte gern einen Kaffee.", "عايز قهوة لو سمحت."], ["Du solltest mehr schlafen. (sollen → sollte)", "المفروض تنام أكتر."]]
      },
      {
        h: "2. Wofür benutzt man ihn?", hAr: "بنستخدمه في إيه؟",
        text: "<b>Höfliche Bitte</b>: Könnten Sie …? Würden Sie …? – <b>Wunsch</b>: Ich wäre gern … / Ich würde gern … – <b>Rat</b>: Du solltest … / An deiner Stelle würde ich … – <b>Vorschlag</b>: Wir könnten … / Wie wäre es mit …?",
        ar: "طلب بأدب: Könnten Sie؟ – أمنية: Ich wäre gern – نصيحة: Du solltest / لو مكانك كنت… – اقتراح: Wir könnten.",
        examples: [
          ["Könnten Sie mir bitte helfen?", "ممكن تساعدني لو سمحت؟"],
          ["Ich würde gern im Ausland arbeiten.", "نفسي أشتغل برة."],
          ["An deiner Stelle würde ich mich sofort bewerben.", "لو مكانك كنت قدمت فورًا."],
          ["Wir könnten am Wochenende einen Ausflug machen.", "ممكن نعمل رحلة في الويك إند."]
        ]
      }
    ],
    pitfalls: [
      { wrong: "Ich würde gern ein Auto haben. (möglich, besser:)", right: "Ich hätte gern ein Auto.", ar: "مع haben وsein الأحسن الشكل الخاص." },
      { wrong: "Könnten Sie mir helfen können?", right: "Könnten Sie mir helfen?", ar: "مانكررش الفعل المساعد." },
      { wrong: "Du sollst mehr Sport machen. (Rat)", right: "Du solltest mehr Sport machen.", ar: "النصيحة بـ solltest مش sollst." }
    ],
    exercises: [
      { type: "choice", q: "___ Sie mir bitte das Salz geben?", o: ["Könnten", "Können würden", "Konnten"], a: 0, why: "طلب مؤدب → Könnten Sie." },
      { type: "choice", q: "Ich ___ gern Ärztin.", o: ["würde", "wäre", "hätte"], a: 1, why: "sein → wäre." },
      { type: "choice", q: "Du bist so müde. Du ___ früher ins Bett gehen.", o: ["solltest", "sollst", "würdest sollen"], a: 0, why: "نصيحة → solltest." },
      { type: "gap", q: "Ich ___ gern mehr Zeit für meine Familie. (haben)", a: ["hätte"], why: "haben → hätte." },
      { type: "gap", q: "___ du mir kurz dein Handy leihen? (können)", a: ["Könntest"], why: "du → könntest." },
      { type: "order", prefix: "An deiner Stelle", words: ["ich", "Chef", "würde", "sprechen", "dem", "mit"], a: ["würde ich mit dem Chef sprechen"], why: "würde في المكان التاني والمصدر في الآخر." },
      { type: "transform", q: "Mach die Bitte höflicher: Hilf mir!", a: ["Könntest du mir helfen?", "Würdest du mir helfen?", "Könntest du mir bitte helfen?", "Würdest du mir bitte helfen?"], why: "Könntest/Würdest du … ؟" },
      { type: "error", q: "Wenn ich Zeit habe, würde ich gern kommen. (Wunsch, irreal)", a: ["Wenn ich Zeit hätte, würde ich gern kommen."], why: "في الأمنية غير الحقيقية: hätte." },
      { type: "truefalse", q: "„Wir könnten ins Kino gehen.“ ist ein Vorschlag.", a: true, why: "Wir könnten … = اقتراح." }
    ]
  },
  {
    id: "k4-irreal",
    t: "Irreale Bedingungssätze", tAr: "جمل الشرط غير الحقيقية",
    summary: "Mit <b>wenn + Konjunktiv II</b> spricht man über Situationen, die <b>nicht real</b> sind: „Wenn ich reich wäre, würde ich …“",
    summaryAr: "بـ wenn + Konjunktiv II بنتكلم عن مواقف مش حقيقية: \"لو كنت غني، كنت…\"",
    sections: [
      {
        h: "1. Real oder irreal?", hAr: "حقيقي ولا غير حقيقي؟",
        text: "<b>Real</b> (möglich): Wenn ich Zeit <b>habe</b>, <b>komme</b> ich. <b>Irreal</b> (nicht so, nur Wunsch/Vorstellung): Wenn ich Zeit <b>hätte</b>, <b>würde</b> ich <b>kommen</b>.",
        ar: "الحقيقي بالمضارع العادي، وغير الحقيقي (خيال أو أمنية) بالـ Konjunktiv II في الجملتين.",
        table: {
          head: ["Realität", "Irrealer Satz"],
          rows: [["Ich habe kein Auto.", "Wenn ich ein Auto hätte, würde ich aufs Land ziehen."], ["Ich bin nicht fit.", "Wenn ich fitter wäre, könnte ich mitlaufen."], ["Es regnet.", "Wenn es nicht regnen würde, würden wir grillen."]]
        }
      },
      {
        h: "2. Satzbau", hAr: "ترتيب الجملة",
        text: "Der wenn-Satz ist ein Nebensatz (Verb am Ende). Steht er zuerst, beginnt der Hauptsatz mit dem Verb (<b>Verb, Verb</b>). Ohne wenn beginnt der Satz mit dem Verb: <b>Hätte ich Zeit, würde ich kommen.</b>",
        ar: "جملة wenn فرعية والفعل في الآخر. لو جت الأول، الرئيسية بتبدأ بالفعل. وممكن نشيل wenn ونبدأ بالفعل.",
        examples: [
          ["Wenn ich mehr Geld hätte, würde ich eine Weltreise machen.", "لو معايا فلوس أكتر كنت لفيت العالم."],
          ["Ich würde dich besuchen, wenn du nicht so weit weg wohnen würdest.", "كنت زرتك لو ماكنتش ساكن بعيد كده."],
          ["Wäre ich du, würde ich die Stelle annehmen.", "لو كنت مكانك كنت قبلت الوظيفة."]
        ]
      },
      {
        h: "3. Irreale Wünsche mit wenn … doch / nur", hAr: "أمنيات بـ wenn … doch/nur",
        text: "Ein irrealer Wunsch kann allein stehen: <b>Wenn ich doch mehr Zeit hätte!</b> – <b>Hätte ich nur besser gelernt!</b>",
        ar: "الأمنية ممكن تيجي لوحدها: يا ريت كان عندي وقت أكتر!",
        examples: [["Wenn das Wetter doch besser wäre!", "يا ريت الجو كان أحسن!"]]
      }
    ],
    pitfalls: [
      { wrong: "Wenn ich reich würde sein, …", right: "Wenn ich reich wäre, …", ar: "مع sein نستخدم wäre." },
      { wrong: "Wenn ich Zeit hätte, ich würde kommen.", right: "Wenn ich Zeit hätte, würde ich kommen.", ar: "فعل-فاصلة-فعل." }
    ],
    exercises: [
      { type: "choice", q: "Wenn ich mehr Zeit ___, würde ich Gitarre lernen.", o: ["habe", "hätte", "hatte"], a: 1, why: "غير حقيقي → hätte." },
      { type: "choice", q: "Wenn ich du ___, würde ich das nicht machen.", o: ["wäre", "bin", "würde"], a: 0, why: "sein → wäre." },
      { type: "choice", q: "Wenn es morgen nicht regnet, ___ wir wandern.", o: ["gehen", "würden gehen", "gingen würden"], a: 0, why: "ده شرط حقيقي ممكن → Präsens." },
      { type: "gap", q: "Wenn ich im Lotto gewinnen würde, ___ ich ein Haus kaufen. (werden)", a: ["würde"], why: "würde + kaufen." },
      { type: "order", prefix: "Wenn ich fliegen könnte,", words: ["nach", "ich", "würde", "fliegen", "Hause", "sofort"], a: ["würde ich sofort nach Hause fliegen"], why: "فعل-فاصلة-فعل: würde أول الرئيسية." },
      { type: "transform", q: "Schreib irreal: Ich habe kein Auto. Ich fahre mit dem Bus. → Wenn ich …", a: ["Wenn ich ein Auto hätte, würde ich nicht mit dem Bus fahren.", "Wenn ich ein Auto hätte, müsste ich nicht mit dem Bus fahren."], why: "عكس الواقع: ein Auto hätte / nicht mit dem Bus fahren." },
      { type: "transform", q: "Schreib einen Wunsch mit „doch“: Ich spreche nicht gut Deutsch.", a: ["Wenn ich doch gut Deutsch sprechen würde!", "Wenn ich doch besser Deutsch sprechen würde!", "Wenn ich doch gut Deutsch sprechen könnte!", "Wenn ich doch besser Deutsch sprechen könnte!"], why: "Wenn … doch + Konjunktiv II." },
      { type: "error", q: "Wenn ich mehr Geld hätte, ich würde reisen.", a: ["Wenn ich mehr Geld hätte, würde ich reisen."], why: "بعد الفاصلة الفعل على طول." },
      { type: "truefalse", q: "„Hätte ich Zeit, würde ich kommen.“ ist ein korrekter Satz ohne „wenn“.", a: true, why: "ممكن نشيل wenn ونبدأ بالفعل." }
    ]
  },
  {
    id: "k4-pronominal",
    t: "Pronomen und Pronominaladverbien (darauf, worauf …)", tAr: "الضمائر وظروف الضمير (darauf وworauf …)",
    summary: "Viele Verben haben eine feste Präposition (<i>warten auf, sich interessieren für</i>). Für <b>Personen</b> benutzt man <b>Präposition + Pronomen</b>, für <b>Sachen</b> ein <b>Pronominaladverb</b> (da(r) + Präposition / wo(r) + Präposition).",
    summaryAr: "أفعال كتير ليها حرف جر ثابت. للأشخاص بنستخدم حرف الجر + ضمير، وللأشياء بنستخدم da(r)+حرف الجر، وفي السؤال wo(r)+حرف الجر.",
    sections: [
      {
        h: "1. Person oder Sache?", hAr: "شخص ولا حاجة؟",
        text: "Person: <b>auf wen? – auf ihn</b>. Sache: <b>worauf? – darauf</b>. Beginnt die Präposition mit einem Vokal, kommt ein <b>r</b> dazu: dar<b>auf</b>, wor<b>an</b>, dar<b>über</b>.",
        ar: "للشخص: auf wen – auf ihn. للحاجة: worauf – darauf. لو حرف الجر بيبدأ بحرف متحرك بنزود r.",
        table: {
          head: ["Verb + Präposition", "Frage (Sache)", "Antwort (Sache)", "Person"],
          rows: [["warten auf + A", "Worauf wartest du?", "Ich warte darauf.", "Auf wen? – Auf sie."], ["sich interessieren für + A", "Wofür interessierst du dich?", "Ich interessiere mich dafür.", "Für wen? – Für ihn."], ["sich freuen über + A", "Worüber freust du dich?", "Ich freue mich darüber.", "Über wen? – Über dich."], ["denken an + A", "Woran denkst du?", "Ich denke daran.", "An wen? – An meine Mutter."], ["sprechen mit + D", "Womit …?", "damit", "Mit wem? – Mit dem Chef."], ["sich kümmern um + A", "Worum kümmerst du dich?", "Ich kümmere mich darum.", "Um wen? – Um die Kinder."]]
        }
      },
      {
        h: "2. da(r)- verweist auf einen Satz", hAr: "da(r) بتشاور على جملة",
        text: "Pronominaladverbien können auch auf einen folgenden <b>dass-Satz</b> oder <b>Infinitiv mit zu</b> zeigen.",
        ar: "ممكن تشاور على جملة dass أو zu + مصدر بعدها.",
        examples: [["Ich freue mich darauf, dich bald zu sehen.", "مستني أشوفك قريب."], ["Denk bitte daran, dass wir morgen einen Termin haben.", "افتكر إن عندنا ميعاد بكرة."]]
      }
    ],
    pitfalls: [
      { wrong: "Ich warte auf es.", right: "Ich warte darauf.", ar: "للحاجة نستخدم darauf مش auf es." },
      { wrong: "Wovon sprichst du? – Von meinem Bruder. (Frage nach Person)", right: "Von wem sprichst du? – Von meinem Bruder.", ar: "للشخص بنسأل بـ von wem." },
      { wrong: "Ich denke daan.", right: "Ich denke daran.", ar: "an بتبدأ بحرف متحرك → daran." }
    ],
    exercises: [
      { type: "choice", q: "___ interessierst du dich? – Für Politik.", o: ["Wofür", "Für wen", "Wo"], a: 0, why: "حاجة → Wofür." },
      { type: "choice", q: "Wartest du auf den Bus? – Ja, ich warte ___.", o: ["auf ihn", "darauf", "worauf"], a: 1, why: "الأتوبيس حاجة → darauf." },
      { type: "choice", q: "Wartest du auf Anna? – Ja, ich warte ___.", o: ["darauf", "auf sie", "auf es"], a: 1, why: "آنا شخص → auf sie." },
      { type: "gap", q: "___ denkst du gerade? – An meinen Urlaub. (Frage)", a: ["Woran"], why: "an + حاجة في السؤال → Woran." },
      { type: "gap", q: "Hast du dich um die Tickets gekümmert? – Ja, ich habe mich ___ gekümmert.", a: ["darum"], why: "um → darum." },
      { type: "transform", q: "Ersetze das Nomen: Ich freue mich über das Geschenk.", a: ["Ich freue mich darüber."], why: "über + حاجة → darüber." },
      { type: "transform", q: "Frag nach der Person: Sie spricht mit ihrem Chef.", a: ["Mit wem spricht sie?"], why: "شخص → Mit wem." },
      { type: "error", q: "Der Brief ist noch nicht da. Ich warte schon lange auf es.", a: ["Der Brief ist noch nicht da. Ich warte schon lange darauf."], why: "الجواب حاجة → darauf مش auf es." },
      { type: "truefalse", q: "Vor Präpositionen mit Vokal steht ein „r“: darauf, woran, darüber.", a: true, why: "da + r + auf = darauf." }
    ]
  }
];
