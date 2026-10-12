/* Netzwerk neu B1.2, chapters 7-12: the whole Lernwortschatz of every chapter as
   text cards (German definition, example sentence, Arabic meaning). The chapters join
   B1_BOOK after B1.1 and use the same b1.1/kN routes, so the B1 level holds chapters 1-12. */
(function addB12Chapters(){
  if (!Array.isArray(window.B1_BOOK)) return;
  const chapters = [
    {
      "num": 7,
      "route": "b1.1/k7",
      "title": "Zwischenmenschliches",
      "subtitle": "Netzwerk neu B1.2 · Kapitel 7",
      "intro": "Wortschatz aus Netzwerk neu B1.2: Zwischenmenschliches.",
      "introAr": "مفردات الوحدة 7 من Netzwerk neu B1.2: Zwischenmenschliches",
      "badges": [
        "B1.2",
        "Kapitel 7",
        "133 Wörter"
      ],
      "goals": [],
      "vocabSummary": {
        "title": "Wortschatz mit Erklärung",
        "note": "كل بطاقة فيها شرح ألماني واضح، مثال كامل، والترجمة العربية."
      },
      "vocab": [
        {
          "w": "die Clique",
          "d": "Eine Clique ist eine feste Gruppe von Freunden, die viel Zeit zusammen verbringen.",
          "ar": "شِلّة / مجموعة أصحاب",
          "cat": "Freundschaft und Beziehungen",
          "ex": "Seit der Schulzeit gehöre ich zu einer kleinen Clique."
        },
        {
          "w": "der Einfluss",
          "d": "Wer Einfluss hat, kann das Denken oder Handeln von anderen Menschen verändern.",
          "ar": "تأثير",
          "cat": "Freundschaft und Beziehungen",
          "ex": "Freunde haben oft einen großen Einfluss auf Jugendliche."
        },
        {
          "w": "das Verständnis",
          "d": "Verständnis bedeutet, dass man die Gefühle und Gründe eines anderen Menschen versteht.",
          "ar": "تفهُّم",
          "cat": "Freundschaft und Beziehungen",
          "ex": "Danke für dein Verständnis!"
        },
        {
          "w": "Verständnis haben (für + A)",
          "d": "Man versteht und akzeptiert, warum eine andere Person etwas tut oder fühlt.",
          "ar": "يتفهّم (موقف / شخص)",
          "cat": "Freundschaft und Beziehungen",
          "ex": "Meine Chefin hatte viel Verständnis für meine Situation."
        },
        {
          "w": "sich verstehen (mit + D)",
          "d": "Wenn man sich mit jemandem gut versteht, hat man eine gute Beziehung zu ihm.",
          "ar": "يتفاهم (مع)",
          "cat": "Freundschaft und Beziehungen",
          "ex": "Ich verstehe mich gut mit meinem Mitbewohner."
        },
        {
          "w": "sich amüsieren (über + A)",
          "d": "Man hat Spaß und lacht über eine Person oder eine Sache.",
          "ar": "يستمتع / يضحك (على)",
          "cat": "Freundschaft und Beziehungen",
          "ex": "Die Kinder amüsieren sich über den lustigen Clown."
        },
        {
          "w": "schätzen",
          "d": "Man sagt, was man ungefähr glaubt oder vermutet, ohne es genau zu wissen.",
          "ar": "يظن / يخمِّن",
          "cat": "Freundschaft und Beziehungen",
          "ex": "Ich schätze, so tolle Freunde findet man selten."
        },
        {
          "w": "schätzen (an + D)",
          "d": "Man findet eine Eigenschaft eines Menschen gut und wichtig.",
          "ar": "يقدِّر (صفة في شخص)",
          "cat": "Freundschaft und Beziehungen",
          "ex": "An meiner Freundin schätze ich vor allem ihre Ehrlichkeit."
        },
        {
          "w": "halten",
          "d": "Eine Freundschaft oder Beziehung hält, wenn sie lange besteht und nicht zu Ende geht.",
          "ar": "يدوم / يستمر",
          "cat": "Freundschaft und Beziehungen",
          "ex": "Unsere Freundschaft hält schon eine Ewigkeit."
        },
        {
          "w": "aus den Augen verlieren",
          "d": "Man hat keinen Kontakt mehr zu einer Person, weil man sie lange nicht gesehen hat.",
          "ar": "تنقطع صلته بشخص",
          "cat": "Freundschaft und Beziehungen",
          "ex": "Meine Freunde aus der Kindheit habe ich leider aus den Augen verloren."
        },
        {
          "w": "alles beim Alten bleiben",
          "d": "Nichts ändert sich, alles bleibt so, wie es vorher war.",
          "ar": "يفضل كل شيء على حاله",
          "cat": "Freundschaft und Beziehungen",
          "ex": "Früher dachte ich, dass immer alles beim Alten bleibt."
        },
        {
          "w": "eingespannt sein",
          "d": "Man hat sehr viel zu tun und deshalb kaum freie Zeit.",
          "ar": "مشغول جدًا / مضغوط",
          "cat": "Freundschaft und Beziehungen",
          "ex": "Ich bin beruflich stark eingespannt."
        },
        {
          "w": "gehören (zu + D)",
          "d": "Man ist ein Teil von einer Gruppe oder einer Sache.",
          "ar": "ينتمي (إلى) / من ضمن",
          "cat": "Freundschaft und Beziehungen",
          "ex": "Neo Rauch gehört zu den wichtigsten Künstlern der Gegenwart."
        },
        {
          "w": "ins Gespräch kommen (mit + D)",
          "d": "Man beginnt mit einer Person zu sprechen, oft ganz zufällig.",
          "ar": "يبدأ حديثًا (مع)",
          "cat": "Freundschaft und Beziehungen",
          "ex": "Im Zug bin ich mit einer netten Frau ins Gespräch gekommen."
        },
        {
          "w": "über den Weg laufen",
          "d": "Man trifft eine Person zufällig, ohne dass man es geplant hat.",
          "ar": "يقابل شخصًا صدفةً",
          "cat": "Freundschaft und Beziehungen",
          "ex": "Gestern ist mir mein alter Lehrer im Supermarkt über den Weg gelaufen."
        },
        {
          "w": "befreundet sein (mit + D)",
          "d": "Man ist mit jemandem befreundet, wenn diese Person ein Freund oder eine Freundin ist.",
          "ar": "بينه وبين شخص صداقة",
          "cat": "Freundschaft und Beziehungen",
          "ex": "Ich bin schon seit der Grundschule mit Clara befreundet."
        },
        {
          "w": "einsam",
          "d": "Man fühlt sich einsam, wenn man allein ist und niemanden zum Reden hat.",
          "ar": "وحيد",
          "cat": "Freundschaft und Beziehungen",
          "ex": "In der neuen Stadt fühlte sich Elena am Anfang einsam."
        },
        {
          "w": "gegenseitig",
          "d": "Etwas ist gegenseitig, wenn zwei oder mehr Personen es füreinander tun.",
          "ar": "متبادَل / بعضهم البعض",
          "cat": "Freundschaft und Beziehungen",
          "ex": "Gute Freunde helfen sich gegenseitig."
        },
        {
          "w": "die Ewigkeit",
          "d": "Eine Ewigkeit ist eine sehr lange Zeit.",
          "ar": "زمن طويل جدًا / أبدية",
          "cat": "Freundschaft und Beziehungen",
          "ex": "Wir kennen uns schon seit einer Ewigkeit."
        },
        {
          "w": "der Bekannte",
          "d": "Ein Bekannter ist eine Person, die man kennt, die aber kein enger Freund ist.",
          "ar": "شخص من المعارف",
          "cat": "Freundschaft und Beziehungen",
          "ex": "Auf der Party habe ich viele Bekannte getroffen."
        },
        {
          "w": "Rücksicht nehmen (auf + A)",
          "d": "Man denkt an die Wünsche und Gefühle von anderen und verhält sich entsprechend.",
          "ar": "يراعي (الآخرين)",
          "cat": "Freundschaft und Beziehungen",
          "ex": "In einer WG muss man Rücksicht auf die anderen nehmen."
        },
        {
          "w": "die Wohngemeinschaft",
          "d": "In einer Wohngemeinschaft wohnen mehrere Personen zusammen, die keine Familie sind.",
          "ar": "سكن مشترك",
          "cat": "Freundschaft und Beziehungen",
          "ex": "Nach dem Abitur gründeten Karim und Valentin eine Wohngemeinschaft."
        },
        {
          "w": "der Konflikt",
          "d": "Ein Konflikt ist eine Situation, in der Menschen unterschiedliche Interessen oder Meinungen haben.",
          "ar": "صراع / خلاف",
          "cat": "Konflikte",
          "ex": "In der WG gab es plötzlich viele Konflikte."
        },
        {
          "w": "der Streit",
          "d": "Bei einem Streit sprechen Menschen laut und wütend miteinander, weil sie nicht einer Meinung sind.",
          "ar": "خناقة / شجار",
          "cat": "Konflikte",
          "ex": "Nach einem Streit sollte man in Ruhe miteinander reden."
        },
        {
          "w": "die Kritik",
          "d": "Mit Kritik sagt man einer Person, was man an ihrem Verhalten oder ihrer Arbeit nicht gut findet.",
          "ar": "نقد",
          "cat": "Konflikte",
          "ex": "Mein Kollege kann Kritik leider nicht gut akzeptieren."
        },
        {
          "w": "die Harmonie",
          "d": "Harmonie ist ein Zustand, in dem Menschen friedlich und ohne Streit zusammenleben.",
          "ar": "انسجام / وئام",
          "cat": "Konflikte",
          "ex": "In unserer Familie ist Harmonie sehr wichtig."
        },
        {
          "w": "die Mahnung",
          "d": "Eine Mahnung ist ein Brief, in dem steht, dass man eine Rechnung noch bezahlen muss.",
          "ar": "إنذار بالدفع",
          "cat": "Konflikte",
          "ex": "Die Krankenkasse hat uns eine Mahnung geschickt."
        },
        {
          "w": "die Scheidung",
          "d": "Bei einer Scheidung beendet ein Ehepaar offiziell seine Ehe.",
          "ar": "طلاق",
          "cat": "Konflikte",
          "ex": "Nach der Scheidung zog er in eine kleine Wohnung."
        },
        {
          "w": "die Forderung",
          "d": "Eine Forderung ist ein Wunsch, den man sehr deutlich und bestimmt äußert.",
          "ar": "مطلب",
          "cat": "Konflikte",
          "ex": "Die Mitarbeiter haben eine klare Forderung: mehr Lohn."
        },
        {
          "w": "die Erwartung",
          "d": "Eine Erwartung ist das, was man glaubt oder hofft, dass es passieren wird.",
          "ar": "توقُّع",
          "cat": "Konflikte",
          "ex": "Der Film hat meine Erwartungen leider nicht erfüllt."
        },
        {
          "w": "vor Gericht gehen",
          "d": "Man bittet ein Gericht, einen Streit offiziell zu entscheiden.",
          "ar": "يلجأ إلى المحكمة",
          "cat": "Konflikte",
          "ex": "Das Paar ging vor Gericht und bekam die Erlaubnis zu heiraten."
        },
        {
          "w": "die Behauptung",
          "d": "Eine Behauptung ist eine Aussage, von der man nicht sicher weiß, ob sie stimmt.",
          "ar": "ادِّعاء / زعم",
          "cat": "Konflikte",
          "ex": "Diese Behauptung kann niemand beweisen."
        },
        {
          "w": "behaupten",
          "d": "Man sagt, dass etwas so ist, auch wenn man es nicht beweisen kann.",
          "ar": "يدَّعي / يزعم",
          "cat": "Konflikte",
          "ex": "Er behauptet, dass er nie zu spät kommt."
        },
        {
          "w": "feststellen",
          "d": "Man merkt oder erkennt plötzlich etwas.",
          "ar": "يكتشف / يلاحظ",
          "cat": "Konflikte",
          "ex": "Elena und Maja stellten fest, dass sie im selben Haus wohnten."
        },
        {
          "w": "akzeptieren",
          "d": "Man nimmt etwas so an, wie es ist, auch wenn es einem nicht gefällt.",
          "ar": "يقبل / يتقبَّل",
          "cat": "Konflikte",
          "ex": "Man muss akzeptieren, dass andere eine andere Meinung haben."
        },
        {
          "w": "sich einigen (auf + A)",
          "d": "Nach einer Diskussion findet man eine Lösung, mit der alle einverstanden sind.",
          "ar": "يتَّفق (على)",
          "cat": "Konflikte",
          "ex": "Nach langer Diskussion haben wir uns auf einen Kompromiss geeinigt."
        },
        {
          "w": "klären",
          "d": "Man spricht über ein Problem, bis es gelöst oder nicht mehr unklar ist.",
          "ar": "يوضِّح / يحلّ (مشكلة)",
          "cat": "Konflikte",
          "ex": "Ich muss das Problem mit der Rechnung heute noch klären."
        },
        {
          "w": "erleichtern",
          "d": "Etwas macht eine Sache leichter oder einfacher.",
          "ar": "يسهِّل",
          "cat": "Konflikte",
          "ex": "Ich-Aussagen erleichtern ein Gespräch über Konflikte."
        },
        {
          "w": "beweisen",
          "d": "Man zeigt mit Fakten, dass etwas wirklich wahr ist.",
          "ar": "يُثبِت",
          "cat": "Konflikte",
          "ex": "Kannst du beweisen, dass du das Geld nicht genommen hast?"
        },
        {
          "w": "sich aufregen (über + A)",
          "d": "Man wird wütend oder nervös, weil einem etwas nicht gefällt.",
          "ar": "يتعصَّب / ينفعل (على)",
          "cat": "Konflikte",
          "ex": "Mein Vater regt sich jeden Morgen über den Verkehr auf."
        },
        {
          "w": "hassen",
          "d": "Man mag eine Person oder eine Sache überhaupt nicht.",
          "ar": "يكره",
          "cat": "Konflikte",
          "ex": "Die Kollegen hassen es, wenn man zu spät kommt."
        },
        {
          "w": "lügen",
          "d": "Man sagt absichtlich etwas, das nicht wahr ist.",
          "ar": "يكذب",
          "cat": "Konflikte",
          "ex": "„Du lügst!“, rief der Löwe zornig."
        },
        {
          "w": "schweigen",
          "d": "Man sagt nichts und bleibt still.",
          "ar": "يسكت / يصمت",
          "cat": "Konflikte",
          "ex": "Nach dem Streit schwiegen beide den ganzen Abend."
        },
        {
          "w": "stehlen",
          "d": "Man nimmt etwas, das einer anderen Person gehört, ohne zu fragen.",
          "ar": "يسرق",
          "cat": "Konflikte",
          "ex": "Der Rabe hatte einen Käse gestohlen."
        },
        {
          "w": "übertreiben",
          "d": "Man macht etwas größer, schlimmer oder wichtiger, als es wirklich ist.",
          "ar": "يبالغ",
          "cat": "Konflikte",
          "ex": "Jetzt übertreibst du aber etwas!"
        },
        {
          "w": "verhindern",
          "d": "Man sorgt dafür, dass etwas nicht passiert.",
          "ar": "يمنع (حدوث شيء)",
          "cat": "Konflikte",
          "ex": "Claras Vater wollte die Hochzeit unbedingt verhindern."
        },
        {
          "w": "sich verspäten",
          "d": "Man kommt später als geplant.",
          "ar": "يتأخَّر",
          "cat": "Konflikte",
          "ex": "Ich verspäte mich etwas, weil der Bus nicht kommt."
        },
        {
          "w": "zusammenstoßen",
          "d": "Zwei Personen oder Fahrzeuge treffen mit Kraft aufeinander, weil sie nicht aufgepasst haben.",
          "ar": "يصطدم / يتخبَّط في",
          "cat": "Konflikte",
          "ex": "Auf der Straße stießen die beiden Frauen zusammen."
        },
        {
          "w": "zwingen",
          "d": "Man bringt eine Person dazu, etwas zu tun, was sie nicht tun will.",
          "ar": "يُجبِر",
          "cat": "Konflikte",
          "ex": "Die finanzielle Situation zwang Clara, weiter Konzerte zu geben."
        },
        {
          "w": "angeblich",
          "d": "Man sagt angeblich, wenn man etwas gehört hat, aber nicht weiß, ob es stimmt.",
          "ar": "حسب ما يُقال / مزعوم",
          "cat": "Konflikte",
          "ex": "Der Schauspieler hat sich angeblich von seiner Frau getrennt."
        },
        {
          "w": "diplomatisch",
          "d": "Wer diplomatisch ist, sagt seine Meinung freundlich und vorsichtig, ohne andere zu verletzen.",
          "ar": "دبلوماسي / لَبِق",
          "cat": "Konflikte",
          "ex": "Bei einem Streit sollte man ruhig und diplomatisch bleiben."
        },
        {
          "w": "der Kompromiss",
          "d": "Ein Kompromiss ist eine Lösung, bei der jede Seite ein bisschen nachgibt.",
          "ar": "حلّ وسط",
          "cat": "Konflikte",
          "ex": "Wir finden bestimmt einen Kompromiss."
        },
        {
          "w": "nachgeben",
          "d": "Man akzeptiert in einem Streit am Ende die Meinung oder den Wunsch des anderen.",
          "ar": "يتنازل / يتراجع",
          "cat": "Konflikte",
          "ex": "Der Klügere gibt nach."
        },
        {
          "w": "tolerant",
          "d": "Wer tolerant ist, akzeptiert andere Meinungen und Lebensweisen.",
          "ar": "متسامح",
          "cat": "Konflikte",
          "ex": "Wenn man tolerant ist, kann man auch andere Meinungen akzeptieren."
        },
        {
          "w": "genervt",
          "d": "Man ist genervt, wenn man von etwas gestört wird und ein bisschen ärgerlich ist.",
          "ar": "متضايق / زهقان",
          "cat": "Konflikte",
          "ex": "Nach dem langen Tag war ich total genervt."
        },
        {
          "w": "jedes Wort auf die Goldwaage legen",
          "d": "Man nimmt jedes Wort einer Person sehr genau und ist deshalb schnell beleidigt.",
          "ar": "يدقِّق في كل كلمة",
          "cat": "Konflikte",
          "ex": "Unter Freunden sollte man nicht jedes Wort auf die Goldwaage legen."
        },
        {
          "w": "die Ich-Aussage",
          "d": "Mit einer Ich-Aussage spricht man über die eigenen Gefühle und Wünsche, statt den anderen zu kritisieren.",
          "ar": "جملة بصيغة «أنا»",
          "cat": "Konflikte",
          "ex": "„Ich wünsche mir mehr Ruhe“ ist eine typische Ich-Aussage."
        },
        {
          "w": "arm",
          "d": "Wer arm ist, hat sehr wenig Geld.",
          "ar": "فقير",
          "cat": "Personen",
          "ex": "Claras Vater wollte nicht, dass sie einen armen Künstler heiratet."
        },
        {
          "w": "berufstätig",
          "d": "Wer berufstätig ist, hat eine Arbeit und verdient Geld.",
          "ar": "يعمل / موظَّف",
          "cat": "Personen",
          "ex": "Weil wir beide berufstätig sind, sehen wir uns nicht mehr so oft."
        },
        {
          "w": "bereit sein (zu + D)",
          "d": "Man ist zu etwas bereit, wenn man es tun will oder kann.",
          "ar": "مستعدّ (لـ)",
          "cat": "Personen",
          "ex": "Bist du bereit zu einem Kompromiss?"
        },
        {
          "w": "erschöpft",
          "d": "Wer erschöpft ist, ist sehr müde und hat keine Kraft mehr.",
          "ar": "مُنهَك / تعبان جدًا",
          "cat": "Personen",
          "ex": "Seit du den Job gewechselt hast, bist du ständig erschöpft."
        },
        {
          "w": "der Ehegatte",
          "d": "Der Ehegatte ist der Mann, mit dem eine Person verheiratet ist.",
          "ar": "الزوج",
          "cat": "Personen",
          "ex": "Die Zeitung schrieb über den betrunkenen Ehegatten der Sängerin."
        },
        {
          "w": "die Ehegattin",
          "d": "Die Ehegattin ist die Frau, mit der eine Person verheiratet ist.",
          "ar": "الزوجة",
          "cat": "Personen",
          "ex": "Der Bürgermeister kam mit seiner Ehegattin zum Fest."
        },
        {
          "w": "der Feind",
          "d": "Ein Feind ist eine Person, die gegen einen anderen kämpft oder ihm schaden will.",
          "ar": "عدوّ",
          "cat": "Personen",
          "ex": "Wenn ein Feind dich lobt, musst du aufpassen."
        },
        {
          "w": "die Feindin",
          "d": "Eine Feindin ist eine Frau, die gegen eine andere Person ist und ihr schaden will.",
          "ar": "عدوّة",
          "cat": "Personen",
          "ex": "Früher waren die beiden Nachbarinnen Feindinnen, heute sind sie Freundinnen."
        },
        {
          "w": "loben",
          "d": "Man sagt einer Person, dass sie etwas gut gemacht hat.",
          "ar": "يمدح / يُثني على",
          "cat": "Personen",
          "ex": "Der Fuchs lobte den Raben für seine schönen Federn."
        },
        {
          "w": "ehrlich",
          "d": "Wer ehrlich ist, sagt immer die Wahrheit.",
          "ar": "صادق / أمين",
          "cat": "Personen",
          "ex": "Ein echter Freund sagt dir ehrlich seine Meinung."
        },
        {
          "w": "hilfsbereit",
          "d": "Wer hilfsbereit ist, hilft anderen Menschen gern.",
          "ar": "خدوم / يحب المساعدة",
          "cat": "Personen",
          "ex": "Meine Nachbarin ist sehr hilfsbereit."
        },
        {
          "w": "höflich",
          "d": "Wer höflich ist, ist freundlich und hat gute Manieren.",
          "ar": "مؤدَّب / لطيف",
          "cat": "Personen",
          "ex": "„Danke, meine Herren“, sagte der Fuchs höflich."
        },
        {
          "w": "klug",
          "d": "Wer klug ist, versteht schnell und kann gut nachdenken.",
          "ar": "ذكي",
          "cat": "Personen",
          "ex": "Der Fuchs war klug und wartete geduldig."
        },
        {
          "w": "zornig",
          "d": "Wer zornig ist, ist sehr wütend.",
          "ar": "غاضب جدًا",
          "cat": "Personen",
          "ex": "Der Löwe brüllte zornig zurück."
        },
        {
          "w": "verwitwet",
          "d": "Eine Person ist verwitwet, wenn ihr Ehepartner gestorben ist.",
          "ar": "أرمل / أرملة",
          "cat": "Personen",
          "ex": "Meine Großmutter ist seit fünf Jahren verwitwet."
        },
        {
          "w": "beißen",
          "d": "Man drückt die Zähne fest in eine Person, ein Tier oder eine Sache.",
          "ar": "يعَضّ",
          "cat": "Tiere",
          "ex": "Der Löwe biss den Bären mit seinen scharfen Zähnen."
        },
        {
          "w": "fressen",
          "d": "Bei Tieren sagt man fressen, wenn sie Nahrung zu sich nehmen.",
          "ar": "يأكل (للحيوان)",
          "cat": "Tiere",
          "ex": "Der Fuchs fraß den Käse und lachte über den Raben."
        },
        {
          "w": "scharf",
          "d": "Etwas ist scharf, wenn es leicht schneiden oder stechen kann.",
          "ar": "حادّ",
          "cat": "Tiere",
          "ex": "Das Krokodil hat scharfe Zähne."
        },
        {
          "w": "kräftig",
          "d": "Etwas ist kräftig, wenn es sehr stark ist oder mit viel Kraft passiert.",
          "ar": "قوي / بقوة",
          "cat": "Tiere",
          "ex": "Die beiden stießen ziemlich kräftig zusammen."
        },
        {
          "w": "die Beute",
          "d": "Die Beute ist das Tier, das ein anderes Tier oder ein Jäger gefangen hat.",
          "ar": "فريسة / غنيمة",
          "cat": "Tiere",
          "ex": "Am Ende holte sich der Fuchs die Beute."
        },
        {
          "w": "die Ente",
          "d": "Eine Ente ist ein Vogel, der gut schwimmen kann und oft auf Seen lebt.",
          "ar": "بطة",
          "cat": "Tiere",
          "ex": "Im Park füttern die Kinder die Enten."
        },
        {
          "w": "die Fliege",
          "d": "Eine Fliege ist ein kleines Insekt mit Flügeln, das oft im Haus herumfliegt.",
          "ar": "ذبابة",
          "cat": "Tiere",
          "ex": "Im Sommer sind viele Fliegen in der Küche."
        },
        {
          "w": "der Fuchs",
          "d": "Ein Fuchs ist ein rotbraunes Tier mit einem langen Schwanz, das als sehr klug gilt.",
          "ar": "ثعلب",
          "cat": "Tiere",
          "ex": "In vielen Fabeln ist der Fuchs besonders klug."
        },
        {
          "w": "die Giraffe",
          "d": "Eine Giraffe ist ein afrikanisches Tier mit einem sehr langen Hals.",
          "ar": "زرافة",
          "cat": "Tiere",
          "ex": "Die Giraffe frisst Blätter von hohen Bäumen."
        },
        {
          "w": "der Hirsch",
          "d": "Ein Hirsch ist ein großes Tier im Wald, das oft ein Geweih auf dem Kopf hat.",
          "ar": "أيِّل",
          "cat": "Tiere",
          "ex": "Der Bär hatte einen jungen Hirsch gefangen."
        },
        {
          "w": "das Krokodil",
          "d": "Ein Krokodil ist ein großes Tier mit vielen Zähnen, das im Wasser und an Land lebt.",
          "ar": "تمساح",
          "cat": "Tiere",
          "ex": "Früher lebten im Nil viele Krokodile."
        },
        {
          "w": "die Mücke",
          "d": "Eine Mücke ist ein kleines Insekt, das sticht und Blut trinkt.",
          "ar": "ناموسة / بعوضة",
          "cat": "Tiere",
          "ex": "In der Nacht hat mich eine Mücke gestochen."
        },
        {
          "w": "der Pinguin",
          "d": "Ein Pinguin ist ein schwarz-weißer Vogel, der nicht fliegen, aber sehr gut schwimmen kann.",
          "ar": "بطريق",
          "cat": "Tiere",
          "ex": "Pinguine leben vor allem in der Antarktis."
        },
        {
          "w": "der Rabe",
          "d": "Ein Rabe ist ein großer schwarzer Vogel.",
          "ar": "غراب",
          "cat": "Tiere",
          "ex": "Der Rabe saß mit dem Käse auf einem Baum."
        },
        {
          "w": "die Schildkröte",
          "d": "Eine Schildkröte ist ein langsames Tier mit einem harten Panzer auf dem Rücken.",
          "ar": "سلحفاة",
          "cat": "Tiere",
          "ex": "Unsere Schildkröte ist schon über vierzig Jahre alt."
        },
        {
          "w": "der Bär",
          "d": "Ein Bär ist ein großes, starkes Tier mit dickem Fell, das im Wald lebt.",
          "ar": "دُبّ",
          "cat": "Tiere",
          "ex": "Der Bär und der Löwe stritten um die Beute."
        },
        {
          "w": "der Löwe",
          "d": "Der Löwe ist ein großes, gefährliches Tier aus Afrika und gilt als König der Tiere.",
          "ar": "أسد",
          "cat": "Tiere",
          "ex": "Der Löwe brüllte so laut, dass alle Tiere wegliefen."
        },
        {
          "w": "der Hase",
          "d": "Ein Hase ist ein schnelles Tier mit langen Ohren, das auf Wiesen und Feldern lebt.",
          "ar": "أرنب برّي",
          "cat": "Tiere",
          "ex": "Der Hase lief schnell bis an das Ufer des Sees."
        },
        {
          "w": "der Frosch",
          "d": "Ein Frosch ist ein kleines grünes Tier, das am Wasser lebt und gut springen kann.",
          "ar": "ضفدع",
          "cat": "Tiere",
          "ex": "Als der Hase kam, sprangen alle Frösche ins Wasser."
        },
        {
          "w": "die Versammlung",
          "d": "Bei einer Versammlung treffen sich viele Menschen, um über ein Thema zu sprechen oder etwas zu entscheiden.",
          "ar": "اجتماع / جمعية",
          "cat": "Auf einer Versammlung",
          "ex": "Heute Abend müssen alle Mitarbeiter zur Versammlung kommen."
        },
        {
          "w": "die Teilnahme",
          "d": "Teilnahme bedeutet, dass man bei einer Sache mitmacht oder dabei ist.",
          "ar": "مشاركة / حضور",
          "cat": "Auf einer Versammlung",
          "ex": "Die Teilnahme an der Versammlung ist Pflicht."
        },
        {
          "w": "die Mehrheit",
          "d": "Die Mehrheit ist der größere Teil einer Gruppe.",
          "ar": "الأغلبية",
          "cat": "Auf einer Versammlung",
          "ex": "Die Mehrheit hat für den Streik gestimmt."
        },
        {
          "w": "die Presse",
          "d": "Zur Presse gehören alle Zeitungen, Zeitschriften und ihre Journalisten.",
          "ar": "الصحافة",
          "cat": "Auf einer Versammlung",
          "ex": "Die Presse schreibt ständig über das Privatleben der Stars."
        },
        {
          "w": "die Vorstellung",
          "d": "Bei einer Vorstellung wird eine neue Person oder Sache anderen Menschen präsentiert.",
          "ar": "تقديم / تعريف",
          "cat": "Auf einer Versammlung",
          "ex": "Kommst du zur Vorstellung der neuen Präsidentin?"
        },
        {
          "w": "die Rede",
          "d": "Eine Rede ist ein Text, den man vor vielen Menschen laut spricht.",
          "ar": "خطاب / كلمة",
          "cat": "Auf einer Versammlung",
          "ex": "Die neue Präsidentin hielt eine kurze Rede."
        },
        {
          "w": "die Erhöhung",
          "d": "Bei einer Erhöhung wird etwas höher, zum Beispiel ein Preis oder ein Lohn.",
          "ar": "زيادة / رفع",
          "cat": "Auf einer Versammlung",
          "ex": "Die Mitarbeiter wollen eine Erhöhung des Stundenlohns."
        },
        {
          "w": "beschließen",
          "d": "Man entscheidet sich nach einer Überlegung oder Diskussion für etwas.",
          "ar": "يقرِّر",
          "cat": "Auf einer Versammlung",
          "ex": "Wir haben beschlossen, einmal im Jahr gemeinsam wegzufahren."
        },
        {
          "w": "streiken",
          "d": "Arbeitnehmer streiken, wenn sie nicht arbeiten, um bessere Bedingungen zu bekommen.",
          "ar": "يُضرِب عن العمل",
          "cat": "Auf einer Versammlung",
          "ex": "Die Busfahrer streiken heute für mehr Lohn."
        },
        {
          "w": "geheim",
          "d": "Etwas ist geheim, wenn andere Leute es nicht wissen dürfen.",
          "ar": "سرّي",
          "cat": "Auf einer Versammlung",
          "ex": "Stars können fast nichts geheim halten."
        },
        {
          "w": "die Ausgabe",
          "d": "Eine Ausgabe ist eine Nummer einer Zeitung oder Zeitschrift, die zu einem bestimmten Zeitpunkt erscheint.",
          "ar": "عدد (مجلة / جريدة)",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Lesen Sie den Artikel in der Juli-Ausgabe."
        },
        {
          "w": "die Schlagzeile",
          "d": "Eine Schlagzeile ist die große Überschrift eines Artikels in der Zeitung.",
          "ar": "عنوان رئيسي (مانشيت)",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Die Schlagzeile auf der ersten Seite war riesig."
        },
        {
          "w": "die Einzelheit",
          "d": "Eine Einzelheit ist eine genaue, kleine Information zu einer Sache.",
          "ar": "تفصيلة",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Erzähl mir alle Einzelheiten von der Hochzeit!"
        },
        {
          "w": "das Institut",
          "d": "Ein Institut ist eine Einrichtung, zum Beispiel an einer Universität, in der man forscht oder lehrt.",
          "ar": "معهد",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Du hast deine Unterlagen im Institut vergessen."
        },
        {
          "w": "die Kabine",
          "d": "Eine Kabine ist ein kleiner Raum, zum Beispiel zum Umziehen im Sportverein.",
          "ar": "كابينة / غرفة تغيير الملابس",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Nach dem Training habe ich dich in der Kabine nicht mehr gesehen."
        },
        {
          "w": "fürchten",
          "d": "Man hat Angst, dass etwas Schlechtes passiert.",
          "ar": "يخشى / يخاف",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Ich fürchte, dass ich ihn als Freund verliere."
        },
        {
          "w": "klicken (auf + A)",
          "d": "Man drückt mit der Maus oder dem Finger auf etwas auf dem Bildschirm.",
          "ar": "يضغط (على)",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Viele Leute klicken nur auf Artikel mit spannenden Schlagzeilen."
        },
        {
          "w": "stecken (in + D)",
          "d": "Etwas steckt in einer Sache, wenn es darin enthalten ist.",
          "ar": "يكمُن / موجود (في)",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "In jeder Fabel steckt eine Lebensweisheit."
        },
        {
          "w": "eigen",
          "d": "Etwas ist eigen, wenn es nur einer Person selbst gehört.",
          "ar": "خاص / مِلكه",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Nach dem Studium suchte sich jeder eine eigene Wohnung."
        },
        {
          "w": "kommerziell",
          "d": "Etwas ist kommerziell, wenn es mit Geschäft und Geldverdienen zu tun hat.",
          "ar": "تجاري",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Neo Rauch ist ein kommerziell sehr erfolgreicher Künstler."
        },
        {
          "w": "erhalten sein",
          "d": "Etwas ist erhalten, wenn es noch existiert und nicht kaputt oder verloren ist.",
          "ar": "محفوظ / باقٍ",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Die Briefe sind alt, aber gut erhalten."
        },
        {
          "w": "der Ersatz",
          "d": "Ein Ersatz ist etwas, das man statt einer anderen Sache benutzt.",
          "ar": "بديل",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Geld ist kein Ersatz für ein glückliches Familienleben."
        },
        {
          "w": "die Gegenwart",
          "d": "Die Gegenwart ist die Zeit, in der wir jetzt leben.",
          "ar": "الحاضر",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Viele Fabeln passen auch gut in die Gegenwart."
        },
        {
          "w": "die Gelegenheit",
          "d": "Eine Gelegenheit ist ein günstiger Moment, um etwas zu tun.",
          "ar": "فرصة",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Das Sommerfest ist eine tolle Gelegenheit, die Nachbarn kennenzulernen."
        },
        {
          "w": "der Grill",
          "d": "Ein Grill ist ein Gerät, auf dem man draußen Fleisch oder Gemüse über Feuer zubereitet.",
          "ar": "شوّاية",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Beim Sommerfest stehen alle Nachbarn am Grill."
        },
        {
          "w": "die Konzentration",
          "d": "Konzentration bedeutet, dass man alle Gedanken auf eine Sache richtet.",
          "ar": "تركيز",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Für diese Arbeit braucht man viel Konzentration."
        },
        {
          "w": "die Krankenkasse",
          "d": "Die Krankenkasse ist eine Versicherung, die die Kosten für Arzt und Krankenhaus bezahlt.",
          "ar": "التأمين الصحي",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Ich muss noch bei der Krankenkasse anrufen."
        },
        {
          "w": "die Pflicht",
          "d": "Eine Pflicht ist etwas, das man unbedingt tun muss.",
          "ar": "واجب",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Es ist meine Pflicht, meinen Eltern zu helfen."
        },
        {
          "w": "selbe",
          "d": "Mit selbe meint man genau diese eine Person oder Sache und keine andere.",
          "ar": "نفس الـ",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Inga und ich wohnen im selben Haus."
        },
        {
          "w": "der Tod",
          "d": "Der Tod ist das Ende des Lebens.",
          "ar": "موت / وفاة",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Nach dem frühen Tod ihres Mannes gab Clara noch viele Konzerte."
        },
        {
          "w": "entgegen (+ G)",
          "d": "Entgegen bedeutet, dass etwas anders passiert, als man gedacht oder geplant hat.",
          "ar": "على عكس / خلافًا لـ",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Entgegen unserer Erwartung hat das Zusammenwohnen nicht geklappt."
        },
        {
          "w": "um (+ A)",
          "d": "Mit um beschreibt man ein Gebiet, das rund um einen Ort liegt.",
          "ar": "حَوْل",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Die Gegend um Leipzig ist für beide ein Ort der Inspiration."
        },
        {
          "w": "bevor",
          "d": "Bevor leitet einen Nebensatz ein, dessen Handlung später passiert als die Handlung im Hauptsatz.",
          "ar": "قبل ما",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Bevor ich putze, koche ich einen Kaffee für uns."
        },
        {
          "w": "nachdem",
          "d": "Nachdem leitet einen Nebensatz ein, dessen Handlung vor der Handlung im Hauptsatz passiert ist.",
          "ar": "بعد ما",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Nachdem Matilda umgezogen war, fühlte sie sich oft einsam."
        },
        {
          "w": "seit / seitdem",
          "d": "Seit oder seitdem leitet einen Nebensatz ein, dessen Handlung in der Vergangenheit begonnen hat und noch andauert.",
          "ar": "من ساعة ما / منذ أن",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Seitdem du den Job gewechselt hast, bist du immer gestresst."
        },
        {
          "w": "während",
          "d": "Während leitet einen Nebensatz ein, dessen Handlung gleichzeitig mit der Handlung im Hauptsatz passiert.",
          "ar": "في الوقت اللي / بينما",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Ich putze, während ich telefoniere."
        },
        {
          "w": "bis",
          "d": "Bis leitet einen Nebensatz ein, der sagt, wann die Handlung im Hauptsatz endet.",
          "ar": "لحدّ ما",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Wir warten, bis du zurückkommst."
        },
        {
          "w": "die Fabel",
          "d": "Eine Fabel ist eine kurze Geschichte, in der Tiere wie Menschen handeln und die eine Lehre enthält.",
          "ar": "حكاية على لسان الحيوانات",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "In der Fabel streiten ein Bär und ein Löwe um einen Hirsch."
        },
        {
          "w": "die Moral",
          "d": "Die Moral einer Geschichte ist die Lehre, die man aus ihr ziehen kann.",
          "ar": "العِبرة / المغزى",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Die Moral von der Geschichte: Wenn zwei sich streiten, freut sich der Dritte."
        },
        {
          "w": "das Sprichwort",
          "d": "Ein Sprichwort ist ein bekannter kurzer Satz, der eine Lebensweisheit ausdrückt.",
          "ar": "مَثَل شعبي",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Ein bekanntes Sprichwort lautet: Wer zuletzt lacht, lacht am besten."
        },
        {
          "w": "der Promi",
          "d": "Ein Promi ist eine bekannte Person, zum Beispiel ein Star aus Film, Fernsehen oder Musik.",
          "ar": "شخص مشهور",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Viele Promis haben fast kein Privatleben mehr."
        },
        {
          "w": "das Privatleben",
          "d": "Das Privatleben ist der Teil des Lebens, der nichts mit Beruf und Öffentlichkeit zu tun hat.",
          "ar": "الحياة الخاصة",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Die Schauspielerin spricht nie über ihr Privatleben."
        }
      ],
      "visual": {
        "src": "assets/chapters/chapter-7.webp",
        "alt": "Kapitel 7 · Zwischenmenschliches",
        "caption": "Zwischenmenschliches"
      }
    },
    {
      "num": 8,
      "route": "b1.1/k8",
      "title": "Rund um Körper und Geist",
      "subtitle": "Netzwerk neu B1.2 · Kapitel 8",
      "intro": "Wortschatz aus Netzwerk neu B1.2: Rund um Körper und Geist.",
      "introAr": "مفردات الوحدة 8 من Netzwerk neu B1.2: Rund um Körper und Geist",
      "badges": [
        "B1.2",
        "Kapitel 8",
        "141 Wörter"
      ],
      "goals": [],
      "vocabSummary": {
        "title": "Wortschatz mit Erklärung",
        "note": "كل بطاقة فيها شرح ألماني واضح، مثال كامل، والترجمة العربية."
      },
      "vocab": [
        {
          "w": "die Gymnastik",
          "d": "Leichte Übungen für den Körper, die man oft ohne Geräte macht.",
          "ar": "الجمباز / تمارين رياضية خفيفة",
          "cat": "Fit und gesund bleiben",
          "ex": "Meine Oma macht jeden Morgen zehn Minuten Gymnastik."
        },
        {
          "w": "sich anstrengen",
          "d": "Sich viel Mühe geben und viel Kraft oder Energie einsetzen.",
          "ar": "يجتهد / يبذل مجهودًا",
          "cat": "Fit und gesund bleiben",
          "ex": "Ich strenge mich jeden Tag ein bisschen an und löse ein Rätsel."
        },
        {
          "w": "das Gehirn",
          "d": "Das Organ im Kopf, mit dem wir denken, fühlen und uns erinnern.",
          "ar": "المخ",
          "cat": "Fit und gesund bleiben",
          "ex": "Unser Gehirn verarbeitet Musik in mehreren Bereichen."
        },
        {
          "w": "der Geist",
          "d": "Der Teil des Menschen, der denkt und fühlt, im Gegensatz zum Körper.",
          "ar": "العقل / الروح",
          "cat": "Fit und gesund bleiben",
          "ex": "Yoga ist gut für Körper und Geist."
        },
        {
          "w": "raten (zu + D)",
          "d": "Jemandem sagen, was er am besten tun sollte.",
          "ar": "ينصح (بـ)",
          "cat": "Fit und gesund bleiben",
          "ex": "Ich rate dir, mehr auf deine Gesundheit zu achten."
        },
        {
          "w": "kühlen",
          "d": "Etwas kalt oder kälter machen.",
          "ar": "يبرّد",
          "cat": "Fit und gesund bleiben",
          "ex": "Bei Fieber kann ein feuchtes Tuch die Stirn kühlen."
        },
        {
          "w": "sich eincremen",
          "d": "Creme auf die Haut geben und gut verteilen.",
          "ar": "يدهن جسمه بالكريم",
          "cat": "Fit und gesund bleiben",
          "ex": "Bevor ich in die Sonne gehe, creme ich mich gut ein."
        },
        {
          "w": "der Schatten",
          "d": "Ein dunklerer, kühler Ort, an den die Sonne nicht direkt scheint.",
          "ar": "الظل",
          "cat": "Fit und gesund bleiben",
          "ex": "Mittags bleibe ich lieber im Schatten."
        },
        {
          "w": "die Flüssigkeit",
          "d": "Etwas, das fließt und das man trinken kann, zum Beispiel Wasser oder Saft.",
          "ar": "سائل / السوائل",
          "cat": "Essen und Trinken",
          "ex": "Bei Hitze braucht der Körper besonders viel Flüssigkeit."
        },
        {
          "w": "die Hauptmahlzeit",
          "d": "Eine der großen Mahlzeiten am Tag, zum Beispiel das Mittagessen.",
          "ar": "الوجبة الرئيسية",
          "cat": "Essen und Trinken",
          "ex": "Die Klinikküche bereitet täglich drei Hauptmahlzeiten zu."
        },
        {
          "w": "der Knödel",
          "d": "Eine runde Beilage aus Kartoffeln oder Brot, die man vor allem in Süddeutschland und Österreich isst.",
          "ar": "كرة من عجين البطاطس أو الخبز (كنودل)",
          "cat": "Essen und Trinken",
          "ex": "Zum Braten gibt es in Bayern oft Knödel."
        },
        {
          "w": "der Pfannkuchen",
          "d": "Ein flacher, dünner Kuchen aus Mehl, Eiern und Milch, den man in der Pfanne backt.",
          "ar": "فطيرة رقيقة / بان كيك",
          "cat": "Essen und Trinken",
          "ex": "Die Kinder essen am liebsten Pfannkuchen mit Apfelmus."
        },
        {
          "w": "der Schweinebraten",
          "d": "Ein großes Stück Schweinefleisch, das im Ofen gebraten wird.",
          "ar": "لحم خنزير مشوي في الفرن",
          "cat": "Essen und Trinken",
          "ex": "Im Gasthaus gibt es sonntags Schweinebraten mit Knödeln."
        },
        {
          "w": "das Steak",
          "d": "Eine dicke Scheibe Fleisch, die man kurz in der Pfanne oder auf dem Grill brät.",
          "ar": "ستيك / شريحة لحم",
          "cat": "Essen und Trinken",
          "ex": "Ich möchte mein Steak bitte gut durchgebraten."
        },
        {
          "w": "roh",
          "d": "Nicht gekocht und nicht gebraten.",
          "ar": "نيء",
          "cat": "Essen und Trinken",
          "ex": "Rohes Fleisch sollte man lieber nicht essen."
        },
        {
          "w": "blutig",
          "d": "Mit Blut; bei Fleisch: innen noch rot, weil es nur kurz gebraten wurde.",
          "ar": "دامٍ / غير مطهو جيدًا (اللحم)",
          "cat": "Essen und Trinken",
          "ex": "Mein Bruder isst sein Steak am liebsten blutig."
        },
        {
          "w": "essbar",
          "d": "So, dass man es essen kann, ohne krank zu werden.",
          "ar": "صالح للأكل",
          "cat": "Essen und Trinken",
          "ex": "Nicht alle Pilze im Wald sind essbar."
        },
        {
          "w": "eiskalt",
          "d": "Sehr, sehr kalt.",
          "ar": "مثلج / بارد جدًا",
          "cat": "Essen und Trinken",
          "ex": "Im Sommer trinke ich gern eiskaltes Wasser mit Zitrone."
        },
        {
          "w": "atmen",
          "d": "Luft durch Mund oder Nase in den Körper holen und wieder hinauslassen.",
          "ar": "يتنفس",
          "cat": "Rund um den Körper",
          "ex": "Bei schneller Musik atmen wir schneller."
        },
        {
          "w": "blass",
          "d": "Mit sehr heller Haut im Gesicht, zum Beispiel weil man krank ist.",
          "ar": "شاحب",
          "cat": "Rund um den Körper",
          "ex": "Du bist heute so blass – geht es dir nicht gut?"
        },
        {
          "w": "schwindelig",
          "d": "So, dass man das Gefühl hat, dass sich alles um einen herum dreht.",
          "ar": "دائخ / مصاب بالدوار",
          "cat": "Rund um den Körper",
          "ex": "Nach dem Aufstehen ist mir oft schwindelig."
        },
        {
          "w": "die Brust",
          "d": "Der vordere Teil des Körpers zwischen Hals und Bauch.",
          "ar": "الصدر",
          "cat": "Rund um den Körper",
          "ex": "Er hat starke Schmerzen in der Brust."
        },
        {
          "w": "die Schulter",
          "d": "Der Teil des Körpers zwischen Hals und Arm.",
          "ar": "الكتف",
          "cat": "Rund um den Körper",
          "ex": "Seit dem Unfall tut mir die linke Schulter weh."
        },
        {
          "w": "leiden (an + D)",
          "d": "Eine Krankheit haben, die einem Probleme oder Schmerzen macht.",
          "ar": "يعاني (من مرض)",
          "cat": "Rund um den Körper",
          "ex": "Ihr Großvater leidet an Alzheimer."
        },
        {
          "w": "die Heilung",
          "d": "Der Prozess, in dem ein kranker Mensch wieder gesund wird.",
          "ar": "الشفاء",
          "cat": "Im Krankenhaus",
          "ex": "Musik kann die Heilung von Krankheiten unterstützen."
        },
        {
          "w": "die Medizin",
          "d": "Die Wissenschaft von den Krankheiten und ihrer Behandlung, oft auch ein Medikament.",
          "ar": "الطب / الدواء",
          "cat": "Im Krankenhaus",
          "ex": "Meine Schwester studiert Medizin in Kairo."
        },
        {
          "w": "das Schmerzmittel",
          "d": "Ein Medikament, das gegen Schmerzen hilft.",
          "ar": "مسكّن",
          "cat": "Im Krankenhaus",
          "ex": "Die Ärztin verschreibt mir ein Schmerzmittel gegen die Kopfschmerzen."
        },
        {
          "w": "einnehmen",
          "d": "Ein Medikament schlucken oder trinken.",
          "ar": "يتناول (دواء)",
          "cat": "Im Krankenhaus",
          "ex": "Nehmen Sie die Tabletten morgens vor dem Frühstück ein."
        },
        {
          "w": "auflösen",
          "d": "Etwas in eine Flüssigkeit geben, bis man es nicht mehr sieht.",
          "ar": "يذيب",
          "cat": "Im Krankenhaus",
          "ex": "Lösen Sie das Pulver in einem Glas Wasser auf."
        },
        {
          "w": "verschreiben",
          "d": "Als Arzt aufschreiben, welches Medikament ein Patient bekommen soll.",
          "ar": "يصف (دواءً) / يكتب في الروشتة",
          "cat": "Im Krankenhaus",
          "ex": "Der Arzt hat mir Tropfen gegen den Husten verschrieben."
        },
        {
          "w": "krankschreiben",
          "d": "Als Arzt schriftlich bestätigen, dass jemand krank ist und nicht arbeiten kann.",
          "ar": "يعطي إجازة مرضية",
          "cat": "Im Krankenhaus",
          "ex": "Die Ärztin schreibt mich für den Rest der Woche krank."
        },
        {
          "w": "der Krankenwagen",
          "d": "Ein Auto, das kranke oder verletzte Menschen ins Krankenhaus bringt.",
          "ar": "سيارة الإسعاف",
          "cat": "Im Krankenhaus",
          "ex": "Nach dem Unfall kam sofort ein Krankenwagen."
        },
        {
          "w": "die Notaufnahme",
          "d": "Die Abteilung im Krankenhaus, in die man bei einem Notfall sofort gebracht wird.",
          "ar": "قسم الطوارئ",
          "cat": "Im Krankenhaus",
          "ex": "In der Notaufnahme musste ich zwei Stunden warten."
        },
        {
          "w": "die Versichertenkarte",
          "d": "Die Karte der Krankenkasse, die man in der Arztpraxis zeigen muss.",
          "ar": "بطاقة التأمين الصحي",
          "cat": "Im Krankenhaus",
          "ex": "Haben Sie Ihre Versichertenkarte dabei?"
        },
        {
          "w": "der Klinikaufenthalt",
          "d": "Die Zeit, in der man als Patient in einer Klinik bleibt.",
          "ar": "فترة الإقامة في المستشفى",
          "cat": "Im Krankenhaus",
          "ex": "Für den Klinikaufenthalt sollten Sie bequeme Kleidung mitnehmen."
        },
        {
          "w": "die Entlassung",
          "d": "Der Moment, in dem ein Patient das Krankenhaus wieder verlassen darf.",
          "ar": "الخروج من المستشفى",
          "cat": "Im Krankenhaus",
          "ex": "Die Gebühren für den Fernseher bezahlen Sie bei der Entlassung."
        },
        {
          "w": "die Besuchszeit",
          "d": "Die Zeit, in der man Patienten im Krankenhaus besuchen darf.",
          "ar": "مواعيد الزيارة",
          "cat": "Im Krankenhaus",
          "ex": "Die Besuchszeit endet heute um 20 Uhr."
        },
        {
          "w": "der Haupteingang",
          "d": "Der größte und wichtigste Eingang eines Gebäudes.",
          "ar": "المدخل الرئيسي",
          "cat": "Im Krankenhaus",
          "ex": "Wir treffen uns um drei am Haupteingang der Klinik."
        },
        {
          "w": "der Notausgang",
          "d": "Eine Tür, durch die man bei Feuer oder Gefahr schnell hinausgehen kann.",
          "ar": "مخرج الطوارئ",
          "cat": "Im Krankenhaus",
          "ex": "Der Weg zum Notausgang ist gut beschildert."
        },
        {
          "w": "der Notruf",
          "d": "Die Telefonnummer, die man in einem Notfall anruft, zum Beispiel 112.",
          "ar": "رقم الطوارئ / مكالمة الاستغاثة",
          "cat": "Im Krankenhaus",
          "ex": "Mein Nachbar hatte Schmerzen in der Brust, deshalb habe ich den Notruf gewählt."
        },
        {
          "w": "der Pfleger",
          "d": "Ein Mann, der beruflich kranke oder alte Menschen versorgt.",
          "ar": "الممرض",
          "cat": "Im Krankenhaus",
          "ex": "Der Pfleger bringt dem Patienten das Mittagessen ans Bett."
        },
        {
          "w": "zur Verfügung stehen",
          "d": "Da sein, damit jemand es benutzen kann.",
          "ar": "يكون متاحًا / تحت التصرف",
          "cat": "Im Krankenhaus",
          "ex": "Auf jeder Station steht Ihnen kostenlos Mineralwasser zur Verfügung."
        },
        {
          "w": "aufbewahren",
          "d": "Etwas an einen sicheren Ort legen und es dort lassen.",
          "ar": "يحفظ / يخزّن",
          "cat": "Im Krankenhaus",
          "ex": "Bitte bewahren Sie Ihre Wertsachen im Schließfach auf."
        },
        {
          "w": "untersagt sein",
          "d": "Verboten sein, meistens nach einer offiziellen Regel.",
          "ar": "ممنوع",
          "cat": "Im Krankenhaus",
          "ex": "Rauchen ist im ganzen Krankenhaus untersagt."
        },
        {
          "w": "warnen (vor + D)",
          "d": "Jemandem sagen, dass eine Gefahr da ist.",
          "ar": "يحذّر (من)",
          "cat": "Im Krankenhaus",
          "ex": "Die Pflegerin warnt den Patienten vor dem glatten Boden."
        },
        {
          "w": "zuständig (für + A)",
          "d": "Verantwortlich für eine bestimmte Aufgabe oder einen bestimmten Bereich.",
          "ar": "مسؤول / مختص (بـ)",
          "cat": "Im Krankenhaus",
          "ex": "Für die Diät ist unsere Diätassistentin zuständig."
        },
        {
          "w": "der Bademantel",
          "d": "Ein langer, warmer Mantel aus weichem Stoff, den man nach dem Baden oder zu Hause trägt.",
          "ar": "روب الحمام / البُرنس",
          "cat": "Kleidung und Hygiene",
          "ex": "Im Krankenhaus läuft er meistens im Bademantel herum."
        },
        {
          "w": "der Hausschuh",
          "d": "Ein bequemer Schuh, den man nur in der Wohnung trägt.",
          "ar": "شبشب / خف البيت",
          "cat": "Kleidung und Hygiene",
          "ex": "Vergiss deine Hausschuhe nicht, wenn du ins Krankenhaus gehst!"
        },
        {
          "w": "der Schlafanzug",
          "d": "Bequeme Kleidung aus Hose und Oberteil, die man zum Schlafen anzieht.",
          "ar": "بيجامة",
          "cat": "Kleidung und Hygiene",
          "ex": "Ich habe zwei Schlafanzüge in die Tasche gepackt."
        },
        {
          "w": "die Zahnbürste",
          "d": "Eine kleine Bürste, mit der man sich die Zähne putzt.",
          "ar": "فرشاة الأسنان",
          "cat": "Kleidung und Hygiene",
          "ex": "Eine neue Zahnbürste bekommst du in der Drogerie."
        },
        {
          "w": "die Zahnpasta",
          "d": "Die Creme, die man zum Zähneputzen auf die Zahnbürste gibt.",
          "ar": "معجون الأسنان",
          "cat": "Kleidung und Hygiene",
          "ex": "Die Zahnpasta ist leer, wir müssen neue kaufen."
        },
        {
          "w": "kämmen",
          "d": "Die Haare mit einem Kamm in Ordnung bringen.",
          "ar": "يمشّط",
          "cat": "Kleidung und Hygiene",
          "ex": "Die Mutter kämmt ihrer Tochter jeden Morgen die Haare."
        },
        {
          "w": "die Drogerie",
          "d": "Ein Geschäft, in dem man zum Beispiel Seife, Shampoo und Zahnpasta kaufen kann.",
          "ar": "محل مستحضرات التجميل والنظافة",
          "cat": "Kleidung und Hygiene",
          "ex": "In der Drogerie neben dem Haupteingang gibt es auch Zeitschriften."
        },
        {
          "w": "der Alarmknopf",
          "d": "Ein Knopf, den man in einem Notfall drückt, um Hilfe zu holen.",
          "ar": "زر الإنذار",
          "cat": "Technik",
          "ex": "Bei einem Brand drücken Sie bitte sofort den Alarmknopf."
        },
        {
          "w": "der Apparat",
          "d": "Ein technisches Gerät, zum Beispiel ein Fernseher oder ein Telefon.",
          "ar": "جهاز",
          "cat": "Technik",
          "ex": "Die Nutzung des Apparats kostet 2,50 Euro pro Tag."
        },
        {
          "w": "die Bedienungsanleitung",
          "d": "Ein Text, der genau erklärt, wie man ein Gerät benutzt.",
          "ar": "دليل الاستخدام",
          "cat": "Technik",
          "ex": "Lies doch zuerst die Bedienungsanleitung!"
        },
        {
          "w": "die Chipkarte",
          "d": "Eine Plastikkarte mit einem kleinen Chip, auf dem Daten gespeichert sind.",
          "ar": "بطاقة ذكية (بشريحة)",
          "cat": "Technik",
          "ex": "Die Chipkarte für das Telefon bekommen Sie am Automaten."
        },
        {
          "w": "die Fernbedienung",
          "d": "Ein kleines Gerät, mit dem man zum Beispiel den Fernseher aus der Entfernung bedient.",
          "ar": "الريموت كنترول / جهاز التحكم",
          "cat": "Technik",
          "ex": "Wo ist denn schon wieder die Fernbedienung?"
        },
        {
          "w": "das Festnetz",
          "d": "Das Telefonnetz mit festen Leitungen, also nicht das Handynetz.",
          "ar": "الخط الأرضي",
          "cat": "Technik",
          "ex": "Gespräche ins deutsche Festnetz sind im Preis enthalten."
        },
        {
          "w": "der Klang",
          "d": "Die Art, wie ein Ton, eine Stimme oder ein Instrument klingt.",
          "ar": "صوت / نغمة / رنين",
          "cat": "Musik und Emotionen",
          "ex": "Ich liebe den warmen Klang des Cellos."
        },
        {
          "w": "der Jazz",
          "d": "Ein Musikstil aus Amerika mit viel Rhythmus und Improvisation.",
          "ar": "موسيقى الجاز",
          "cat": "Musik und Emotionen",
          "ex": "Mein Vater hört abends gern Jazz."
        },
        {
          "w": "die Klassik",
          "d": "Die klassische Musik, zum Beispiel von Mozart oder Beethoven.",
          "ar": "الموسيقى الكلاسيكية",
          "cat": "Musik und Emotionen",
          "ex": "Zum Lernen höre ich am liebsten Klassik."
        },
        {
          "w": "klassisch",
          "d": "Zur Klassik gehörend oder traditionell und allgemein bekannt.",
          "ar": "كلاسيكي",
          "cat": "Musik und Emotionen",
          "ex": "Sie mag sowohl klassische Musik als auch Rock."
        },
        {
          "w": "das Stück",
          "d": "Ein einzelnes Werk der Musik oder des Theaters.",
          "ar": "مقطوعة (موسيقية) / مسرحية",
          "cat": "Musik und Emotionen",
          "ex": "Ich spiele ein Stück von Mozart auf dem Klavier."
        },
        {
          "w": "beruhigend",
          "d": "So, dass es einen Menschen ruhig macht.",
          "ar": "مهدّئ",
          "cat": "Musik und Emotionen",
          "ex": "Langsame Musik wirkt auf viele Menschen beruhigend."
        },
        {
          "w": "die Wirkung",
          "d": "Das, was etwas bei einem Menschen oder bei einer Sache verändert.",
          "ar": "تأثير / مفعول",
          "cat": "Musik und Emotionen",
          "ex": "Musik kann eine ähnliche Wirkung wie Medizin haben."
        },
        {
          "w": "empfinden",
          "d": "Etwas fühlen, zum Beispiel Freude, Angst oder Schmerz.",
          "ar": "يشعر بـ / يحسّ",
          "cat": "Musik und Emotionen",
          "ex": "Bei schnellen Rhythmen empfinden wir oft Freude."
        },
        {
          "w": "spüren",
          "d": "Etwas mit dem Körper oder mit den Gefühlen bemerken.",
          "ar": "يحسّ / يشعر",
          "cat": "Musik und Emotionen",
          "ex": "Ich trinke immer sofort, wenn ich Durst spüre."
        },
        {
          "w": "die Forscherin",
          "d": "Eine Frau, die wissenschaftlich arbeitet und Neues herausfinden will.",
          "ar": "باحثة",
          "cat": "Musik und Emotionen",
          "ex": "Die Forscherin untersucht, wie Musik auf das Gehirn wirkt."
        },
        {
          "w": "feierlich",
          "d": "Ernst und besonders, wie bei einem wichtigen Fest.",
          "ar": "احتفالي / مهيب",
          "cat": "Musik und Emotionen",
          "ex": "Bei feierlichen Anlässen spielt das Orchester langsame Stücke."
        },
        {
          "w": "barrierearm",
          "d": "So gebaut, dass auch Menschen im Rollstuhl oder mit Kinderwagen fast überall gut hinkommen.",
          "ar": "شبه خالٍ من العوائق (مناسب لذوي الإعاقة)",
          "cat": "Besondere Orte",
          "ex": "Der Aussichtsturm ist barrierearm, deshalb kommt man auch mit dem Rollstuhl hinauf."
        },
        {
          "w": "familienfreundlich",
          "d": "Gut geeignet für Familien mit Kindern.",
          "ar": "مناسب للعائلات",
          "cat": "Besondere Orte",
          "ex": "Das Hotel ist sehr familienfreundlich und hat einen großen Spielplatz."
        },
        {
          "w": "fantasievoll",
          "d": "Mit vielen kreativen und neuen Ideen.",
          "ar": "مليء بالخيال / مبدع",
          "cat": "Besondere Orte",
          "ex": "Die Kinder haben eine fantasievolle Geschichte geschrieben."
        },
        {
          "w": "geeignet (für + A)",
          "d": "Passend und gut für einen bestimmten Zweck oder für bestimmte Personen.",
          "ar": "مناسب (لـ)",
          "cat": "Besondere Orte",
          "ex": "Das Museum ist besonders für neugierige Kinder geeignet."
        },
        {
          "w": "interaktiv",
          "d": "So, dass man selbst mitmachen und etwas ausprobieren kann.",
          "ar": "تفاعلي",
          "cat": "Besondere Orte",
          "ex": "In einem interaktiven Museum darf man fast alles anfassen."
        },
        {
          "w": "ungewöhnlich",
          "d": "Anders als normal und nicht so, wie man es erwartet.",
          "ar": "غير عادي / غريب",
          "cat": "Besondere Orte",
          "ex": "In diesem Museum gibt es viele ungewöhnliche Dinge zu entdecken."
        },
        {
          "w": "sich wundern (über + A)",
          "d": "Überrascht sein, weil etwas anders ist als erwartet.",
          "ar": "يتعجب / يندهش (من)",
          "cat": "Besondere Orte",
          "ex": "Die Besucher wundern sich über die essbaren Eintrittskarten."
        },
        {
          "w": "alltäglich",
          "d": "Ganz normal, so wie es jeden Tag passiert.",
          "ar": "يومي / عادي",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Das ist kein alltägliches Museum, sondern etwas ganz Besonderes."
        },
        {
          "w": "ausreichend",
          "d": "So viel, wie man braucht.",
          "ar": "كافٍ",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Achten Sie darauf, ausreichend Wasser zu trinken."
        },
        {
          "w": "die Beerdigung",
          "d": "Die Feier, bei der man einen toten Menschen ins Grab legt.",
          "ar": "جنازة / دفن",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Auf einer Beerdigung spielt man keine fröhliche Musik."
        },
        {
          "w": "betragen",
          "d": "Eine bestimmte Menge, Zahl oder einen bestimmten Preis haben.",
          "ar": "يبلغ (مبلغًا أو مقدارًا)",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Die Gebühren für das Telefon betragen zwei Euro pro Tag."
        },
        {
          "w": "bisher",
          "d": "Bis jetzt.",
          "ar": "حتى الآن",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Bisher war ich noch nie im Krankenhaus."
        },
        {
          "w": "brauchen ... zu",
          "d": "Mit „nicht“ oder „kein“ bedeutet es „nicht müssen“, mit „nur“ bedeutet es „nur müssen“.",
          "ar": "لا داعي لـ (مع nicht) / يكفي أن (مع nur)",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Sie brauchen mich nur zu rufen, wenn ich Ihnen helfen soll."
        },
        {
          "w": "einigermaßen",
          "d": "Ziemlich, aber nicht ganz.",
          "ar": "إلى حدٍّ ما",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Heute geht es mir wieder einigermaßen gut."
        },
        {
          "w": "einschließlich",
          "d": "Zusammen mit etwas, sodass es auch dazugehört.",
          "ar": "بما في ذلك / شاملًا",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Das Telefon kostet zwei Euro pro Tag einschließlich der Gespräche ins Festnetz."
        },
        {
          "w": "vermutlich",
          "d": "Wahrscheinlich, aber nicht ganz sicher.",
          "ar": "على الأرجح",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Ohne Musik wäre der Film vermutlich ziemlich langweilig."
        },
        {
          "w": "gelangen",
          "d": "An ein Ziel oder an einen bestimmten Ort kommen.",
          "ar": "يصل (إلى)",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Die Töne gelangen über die Ohren ins Gehirn."
        },
        {
          "w": "glatt",
          "d": "So, dass man leicht ausrutschen kann, oder ganz eben und ohne Falten.",
          "ar": "زلِق / أملس",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Im Winter sind die Wege oft glatt, sei vorsichtig!"
        },
        {
          "w": "grundsätzlich",
          "d": "Immer und in jedem Fall, als allgemeine Regel.",
          "ar": "من حيث المبدأ / بشكل عام",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Rauchen ist in der Klinik grundsätzlich verboten."
        },
        {
          "w": "kleben",
          "d": "Etwas mit Klebstoff oder einem Pflaster an etwas festmachen.",
          "ar": "يلصق",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Die Ärztin klebt mir ein Pflaster auf die Wunde."
        },
        {
          "w": "das Rätsel",
          "d": "Eine Aufgabe oder Frage, deren Lösung man durch Nachdenken finden muss.",
          "ar": "لغز",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Jeden Abend löse ich ein Rätsel in der Zeitung."
        },
        {
          "w": "kommen (auf + A)",
          "d": "Eine Idee, eine Lösung oder ein Wort im Kopf finden.",
          "ar": "يتوصل (إلى) / يتذكر",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Ich komme gerade nicht auf seinen Namen."
        },
        {
          "w": "durch den Kopf gehen",
          "d": "Immer wieder an etwas denken müssen.",
          "ar": "يتردد في الذهن / يشغل التفكير",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Dieses Lied geht mir seit Tagen durch den Kopf."
        },
        {
          "w": "mithilfe (von + D)",
          "d": "Mit der Hilfe von etwas oder jemandem.",
          "ar": "بمساعدة / بواسطة",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Mithilfe von Musik erinnern sich die Patienten an alte Erlebnisse."
        },
        {
          "w": "der Moderator",
          "d": "Ein Mann, der eine Sendung im Radio oder im Fernsehen leitet.",
          "ar": "مقدّم البرنامج",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Der Moderator stellt die beiden Studiogäste vor."
        },
        {
          "w": "die Motivation",
          "d": "Der Wunsch und die Energie, etwas zu tun oder zu lernen.",
          "ar": "الدافع / الحافز",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Ohne Motivation ist das Sprachenlernen sehr schwer."
        },
        {
          "w": "motiviert",
          "d": "Mit viel Lust und Energie, etwas zu tun.",
          "ar": "متحمس / لديه دافع",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Wenn man motiviert ist, lernt man effektiver."
        },
        {
          "w": "die Nachfrage",
          "d": "Eine Frage, die man stellt, weil man etwas noch nicht richtig verstanden hat.",
          "ar": "استفسار / سؤال للتأكد",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Bei einer Nachfrage geht die Stimme am Ende nach oben."
        },
        {
          "w": "obere",
          "d": "So, dass es höher liegt als ein anderer Teil.",
          "ar": "العلوي",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Die Fernbedienung liegt im oberen Fach des Nachttisches."
        },
        {
          "w": "die Reklame",
          "d": "Werbung für ein Produkt, zum Beispiel im Fernsehen oder in der Zeitung.",
          "ar": "إعلان / دعاية",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "In der Reklame hört man oft bekannte Lieder."
        },
        {
          "w": "der Rest",
          "d": "Das, was von etwas noch übrig ist.",
          "ar": "الباقي",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Bleiben Sie für den Rest der Woche im Bett!"
        },
        {
          "w": "die Rücksicht",
          "d": "Das Verhalten, bei dem man an die Gefühle und Wünsche anderer Menschen denkt.",
          "ar": "مراعاة (الآخرين)",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Bitte nehmen Sie Rücksicht auf Ihre Zimmernachbarn."
        },
        {
          "w": "zur Seite gehen",
          "d": "Einen Schritt nach links oder rechts machen, um Platz zu machen.",
          "ar": "يتنحّى جانبًا / يفسح الطريق",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Bitte gehen Sie zur Seite, der Krankenwagen muss durch!"
        },
        {
          "w": "sichtbar",
          "d": "So, dass man es sehen kann.",
          "ar": "مرئي / ظاهر",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Ihre Rufnummer steht gut sichtbar auf der Chipkarte."
        },
        {
          "w": "sinken",
          "d": "Weniger oder niedriger werden.",
          "ar": "ينخفض / يهبط",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Bei langsamer Musik sinkt der Puls."
        },
        {
          "w": "überprüfen",
          "d": "Genau kontrollieren, ob etwas richtig ist.",
          "ar": "يراجع / يتحقق من",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Überprüfen Sie nach ein paar Tagen, ob Sie die Wörter noch wissen."
        },
        {
          "w": "einerseits ..., andererseits",
          "d": "Man benutzt diesen Konnektor, um zwei verschiedene Seiten einer Sache zu zeigen.",
          "ar": "من ناحية ...، ومن ناحية أخرى ...",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Einerseits höre ich gern laute Musik, andererseits stört sie mich manchmal."
        },
        {
          "w": "entweder ... oder",
          "d": "Man benutzt diesen Konnektor, wenn nur eine von zwei Möglichkeiten passt.",
          "ar": "إمّا ... أو ...",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Am Wochenende gehe ich entweder ins Kino oder auf ein Konzert."
        },
        {
          "w": "nicht nur ..., sondern auch",
          "d": "Man benutzt diesen Konnektor, wenn zwei Dinge gelten und das zweite betont wird.",
          "ar": "ليس فقط ...، بل أيضًا ...",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Ella spielt nicht nur Flöte, sondern auch Klavier."
        },
        {
          "w": "sowohl ... als auch",
          "d": "Man benutzt diesen Konnektor, wenn das eine und auch das andere gilt.",
          "ar": "كلٌّ من ... و ...",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Ich höre sowohl Klassik als auch Pop."
        },
        {
          "w": "weder ... noch",
          "d": "Man benutzt diesen Konnektor, wenn das eine nicht und das andere auch nicht gilt.",
          "ar": "لا ... ولا ...",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Sie hört weder Pop noch Jazz."
        },
        {
          "w": "zwar ..., aber",
          "d": "Man benutzt diesen Konnektor, um etwas zu sagen und es danach einzuschränken.",
          "ar": "صحيح أنّ ... لكن ...",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Ich höre zwar gern Radio, aber manchmal nerven mich die Sprecher."
        },
        {
          "w": "die Stimmung",
          "d": "Das Gefühl, das man in einem bestimmten Moment hat.",
          "ar": "المزاج / الحالة النفسية",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Fröhliche Musik verbessert sofort meine Stimmung."
        },
        {
          "w": "die Laune",
          "d": "Die Stimmung, in der man gerade ist, zum Beispiel gut oder schlecht.",
          "ar": "المزاج",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Salsa macht mir sofort gute Laune."
        },
        {
          "w": "beeinflussen",
          "d": "Eine Wirkung auf jemanden oder etwas haben und ihn oder es dadurch verändern.",
          "ar": "يؤثّر على",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Das Wetter beeinflusst oft meine Laune."
        },
        {
          "w": "der Puls",
          "d": "Die Zahl der Herzschläge pro Minute.",
          "ar": "النبض",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Beim Joggen steigt der Puls schnell an."
        },
        {
          "w": "die Tonart",
          "d": "Das System von Tönen, in dem ein Musikstück geschrieben ist, zum Beispiel Dur oder Moll.",
          "ar": "المقام الموسيقي (ماجير أو مينور)",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Ein Stück in Moll klingt oft traurig."
        },
        {
          "w": "das Erlebnis",
          "d": "Etwas Besonderes, das man selbst erlebt hat.",
          "ar": "تجربة / حدث مميز",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Der Besuch im Haus der Musik war ein tolles Erlebnis."
        },
        {
          "w": "die Erinnerung",
          "d": "Ein Bild oder Gefühl von etwas, das man früher erlebt hat.",
          "ar": "ذكرى",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Dieses Lied verbinde ich mit schönen Erinnerungen an den Urlaub."
        },
        {
          "w": "das Gedächtnis",
          "d": "Die Fähigkeit, Informationen im Kopf zu behalten und sich daran zu erinnern.",
          "ar": "الذاكرة",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Mit Rätseln kann man das Gedächtnis trainieren."
        },
        {
          "w": "sich merken",
          "d": "Etwas im Kopf behalten und nicht vergessen.",
          "ar": "يحفظ (في ذهنه) / يتذكّر",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Neue Wörter merke ich mir am besten mit Bildern."
        },
        {
          "w": "der Sinn",
          "d": "Eine der Fähigkeiten Sehen, Hören, Riechen, Schmecken und Fühlen.",
          "ar": "حاسّة",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Beim Lernen sollte man mehrere Sinne nutzen."
        },
        {
          "w": "der Lerntyp",
          "d": "Die Art, wie eine Person am besten lernt, zum Beispiel mit Bildern oder durch Hören.",
          "ar": "نمط التعلّم",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Wenn man seinen Lerntyp kennt, lernt man leichter."
        },
        {
          "w": "die Spritze",
          "d": "Ein Instrument mit einer Nadel, mit dem man ein Medikament in den Körper bringt.",
          "ar": "حقنة",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Bitte keine Spritze, davor habe ich Angst!"
        },
        {
          "w": "das Pflaster",
          "d": "Ein kleines Stück Stoff, das man auf eine kleine Wunde klebt.",
          "ar": "لاصق جروح / بلاستر",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Hast du ein Pflaster für meinen Finger?"
        },
        {
          "w": "die Wunde",
          "d": "Eine Stelle am Körper, an der die Haut verletzt ist.",
          "ar": "جرح",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Die Wunde blutet ziemlich stark."
        },
        {
          "w": "der Rollstuhl",
          "d": "Ein Stuhl mit Rädern für Menschen, die nicht gehen können.",
          "ar": "كرسي متحرك",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Auch mit dem Rollstuhl kommt man bequem auf den Turm."
        },
        {
          "w": "die Wertsachen",
          "d": "Teure oder wichtige Dinge, zum Beispiel Schmuck, Geld oder das Handy.",
          "ar": "الأشياء الثمينة",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Lassen Sie Ihre Wertsachen nicht offen im Zimmer liegen."
        },
        {
          "w": "das Schließfach",
          "d": "Ein kleiner Schrank oder ein Fach, das man abschließen kann.",
          "ar": "خزانة صغيرة بقفل",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Mein Portemonnaie liegt sicher im Schließfach."
        },
        {
          "w": "die Gebühr",
          "d": "Geld, das man für eine bestimmte Leistung bezahlen muss.",
          "ar": "رسوم",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Für den Fernseher im Zimmer zahlt man eine kleine Gebühr."
        },
        {
          "w": "die Leidenschaft",
          "d": "Ein sehr starkes Gefühl der Liebe oder Begeisterung für etwas.",
          "ar": "شغف",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Tanzen ist für Maja eine große Leidenschaft."
        },
        {
          "w": "das Selbstvertrauen",
          "d": "Das Gefühl, dass man etwas gut kann und sich auf sich selbst verlassen kann.",
          "ar": "الثقة بالنفس",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Durch das Tanzen habe ich viel Selbstvertrauen bekommen."
        },
        {
          "w": "Mir liegt es auf der Zunge.",
          "d": "Man sagt das, wenn man ein Wort fast weiß, es aber gerade nicht sagen kann.",
          "ar": "على طرف لساني",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Wie heißt der Sänger noch mal? Mir liegt es auf der Zunge!"
        },
        {
          "w": "Da bin ich überfragt.",
          "d": "Man sagt das, wenn man auf eine Frage wirklich keine Antwort weiß.",
          "ar": "لا أعرف الإجابة",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Wann das Konzert genau beginnt? Da bin ich wirklich überfragt."
        },
        {
          "w": "Das fällt mir gerade nicht ein.",
          "d": "Man sagt das, wenn man sich im Moment nicht an etwas erinnern kann.",
          "ar": "لا يخطر ببالي الآن",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Wie hieß das Restaurant? Das fällt mir gerade nicht ein."
        },
        {
          "w": "mitgehen",
          "d": "Zusammen mit einer anderen Person irgendwohin gehen.",
          "ar": "يذهب مع (أحد)",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Ich besuche Peer im Krankenhaus. Möchtest du mitgehen?"
        },
        {
          "w": "vorbeigehen",
          "d": "An einer Person oder Sache vorbei weitergehen oder kurz jemanden besuchen.",
          "ar": "يمرّ (على / بجانب)",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Kannst du auf dem Heimweg schnell bei Pia vorbeigehen?"
        },
        {
          "w": "wegfahren",
          "d": "Einen Ort mit einem Fahrzeug verlassen oder eine kurze Reise machen.",
          "ar": "يسافر / يغادر",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Sollen wir am Wochenende vielleicht wegfahren?"
        },
        {
          "w": "weitermachen",
          "d": "Mit etwas nicht aufhören, sondern es fortsetzen.",
          "ar": "يستمر / يكمل",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Morgen mache ich an meinem Projekt weiter."
        },
        {
          "w": "zusammenarbeiten",
          "d": "Gemeinsam mit anderen an einer Sache arbeiten.",
          "ar": "يتعاون / يعمل مع",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Wir haben drei Jahre lang im selben Team zusammengearbeitet."
        },
        {
          "w": "zurückgehen",
          "d": "Wieder an den Ort gehen, an dem man vorher war.",
          "ar": "يرجع",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Ich habe meine Jacke vergessen und muss noch mal zurückgehen."
        }
      ],
      "visual": {
        "src": "assets/chapters/chapter-8.webp",
        "alt": "Kapitel 8 · Rund um Körper und Geist",
        "caption": "Rund um Körper und Geist"
      }
    },
    {
      "num": 9,
      "route": "b1.1/k9",
      "title": "Kunststücke",
      "subtitle": "Netzwerk neu B1.2 · Kapitel 9",
      "intro": "Wortschatz aus Netzwerk neu B1.2: Kunststücke.",
      "introAr": "مفردات الوحدة 9 من Netzwerk neu B1.2: Kunststücke",
      "badges": [
        "B1.2",
        "Kapitel 9",
        "131 Wörter"
      ],
      "goals": [],
      "vocabSummary": {
        "title": "Wortschatz mit Erklärung",
        "note": "كل بطاقة فيها شرح ألماني واضح، مثال كامل، والترجمة العربية."
      },
      "vocab": [
        {
          "w": "das Kunstwerk",
          "d": "Ein Werk, das ein Künstler oder eine Künstlerin geschaffen hat, zum Beispiel ein Bild oder eine Skulptur.",
          "ar": "عمل فني",
          "cat": "Kunstobjekte",
          "ex": "Im Museum hängen Kunstwerke aus fünf Jahrhunderten."
        },
        {
          "w": "die Installation",
          "d": "Ein Kunstwerk aus verschiedenen Gegenständen, das man in einem Raum oder an einem Ort aufbaut.",
          "ar": "عمل فني تركيبي (إنستاليشن)",
          "cat": "Kunstobjekte",
          "ex": "Die Installation aus alten Stühlen steht mitten auf dem Platz."
        },
        {
          "w": "die Statue",
          "d": "Eine Figur aus Stein, Holz oder Metall, die meistens einen Menschen oder ein Tier zeigt.",
          "ar": "تمثال",
          "cat": "Kunstobjekte",
          "ex": "Vor dem Rathaus steht eine Statue des Stadtgründers."
        },
        {
          "w": "der Brunnen",
          "d": "Eine Anlage mit Wasser, oft mit Figuren, die zum Beispiel auf einem Platz in der Stadt steht.",
          "ar": "نافورة / بئر",
          "cat": "Kunstobjekte",
          "ex": "Im Sommer sitzen viele Leute am Brunnen und essen ein Eis."
        },
        {
          "w": "die Auktion",
          "d": "Ein Verkauf, bei dem die Person die Ware bekommt, die am meisten Geld bietet.",
          "ar": "مزاد",
          "cat": "Kunstobjekte",
          "ex": "Bei der Auktion wurde das Bild für 5.000 Euro verkauft."
        },
        {
          "w": "das Original",
          "d": "Ein echtes Kunstwerk, das der Künstler selbst gemacht hat und das keine Kopie ist.",
          "ar": "الأصل / النسخة الأصلية",
          "cat": "Kunstobjekte",
          "ex": "Das Bild ist ein Original, keine Kopie."
        },
        {
          "w": "original (Adjektiv)",
          "d": "Etwas ist original, wenn es echt ist und nicht kopiert wurde.",
          "ar": "أصلي",
          "cat": "Kunstobjekte",
          "ex": "Im Kunstsupermarkt kann man originale Bilder günstig kaufen."
        },
        {
          "w": "die Galerie",
          "d": "Ein Raum oder Geschäft, in dem man Kunstwerke ausstellt und verkauft.",
          "ar": "معرض فني / جاليري",
          "cat": "In der Galerie",
          "ex": "Die kleine Galerie zeigt Bilder von jungen Künstlerinnen."
        },
        {
          "w": "die Eröffnung",
          "d": "Der erste Tag oder das Fest, mit dem eine Ausstellung oder ein Geschäft beginnt.",
          "ar": "افتتاح",
          "cat": "In der Galerie",
          "ex": "Zur Eröffnung der Ausstellung kamen über hundert Gäste."
        },
        {
          "w": "anregen (zu + D)",
          "d": "Jemanden dazu bringen, dass er über etwas nachdenkt oder etwas tut.",
          "ar": "يحفّز / يدفع إلى",
          "cat": "In der Galerie",
          "ex": "Das Bild regt zum Nachdenken an."
        },
        {
          "w": "ansprechen",
          "d": "Jemandem gefallen oder ein Gefühl bei jemandem auslösen.",
          "ar": "يعجب / يلمس (شخصًا)",
          "cat": "In der Galerie",
          "ex": "Das Bild spricht mich leider nicht an."
        },
        {
          "w": "die Ölfarbe",
          "d": "Eine Farbe mit Öl, mit der Maler zum Beispiel auf Leinwand malen.",
          "ar": "لون زيتي",
          "cat": "In der Galerie",
          "ex": "Die Malerin arbeitet am liebsten mit Ölfarben."
        },
        {
          "w": "der Geschmack",
          "d": "Das, was einer Person gefällt, zum Beispiel bei Kleidung, Möbeln oder Kunst.",
          "ar": "ذوق / طعم",
          "cat": "In der Galerie",
          "ex": "Über Geschmack kann man nicht streiten."
        },
        {
          "w": "der Käufer",
          "d": "Ein Mann, der etwas kauft.",
          "ar": "مشترٍ",
          "cat": "In der Galerie",
          "ex": "Der Käufer hat für das Gemälde viel Geld bezahlt."
        },
        {
          "w": "die Käuferin",
          "d": "Eine Frau, die etwas kauft.",
          "ar": "مشترية",
          "cat": "In der Galerie",
          "ex": "Eine Käuferin hat gleich drei Bilder mitgenommen."
        },
        {
          "w": "künstlerisch",
          "d": "So, dass es mit Kunst zu tun hat oder kreativ ist.",
          "ar": "فنّي",
          "cat": "In der Galerie",
          "ex": "Im neuen Kursprogramm können Sie künstlerisch aktiv sein."
        },
        {
          "w": "sich handeln (um + A)",
          "d": "Mit „es handelt sich um“ sagt man, was eine Sache genau ist.",
          "ar": "يتعلق الأمر بـ / الموضوع هو",
          "cat": "In der Galerie",
          "ex": "Die Putzfrau wusste nicht, dass es sich um ein Kunstwerk handelte."
        },
        {
          "w": "beschädigen",
          "d": "Etwas teilweise kaputt machen.",
          "ar": "يُتلف / يُلحق ضررًا بـ",
          "cat": "In der Galerie",
          "ex": "Beim Transport wurde das Bild leider beschädigt."
        },
        {
          "w": "die Putzfirma",
          "d": "Eine Firma, die Wohnungen, Büros oder Museen sauber macht.",
          "ar": "شركة تنظيف",
          "cat": "In der Galerie",
          "ex": "Die Putzfirma kommt jeden Abend ins Museum."
        },
        {
          "w": "musizieren",
          "d": "Allein oder mit anderen zusammen Musik machen.",
          "ar": "يعزف / يمارس الموسيقى",
          "cat": "Rund um die Musik",
          "ex": "Am Wochenende musizieren wir gemeinsam im Hof."
        },
        {
          "w": "bewegen",
          "d": "Starke Gefühle bei jemandem auslösen.",
          "ar": "يحرّك المشاعر / يؤثر في",
          "cat": "Rund um die Musik",
          "ex": "Die Musik bewegt mich, sie macht mich traurig."
        },
        {
          "w": "der Schulchor",
          "d": "Eine Gruppe von Schülerinnen und Schülern, die zusammen singen.",
          "ar": "كورال المدرسة",
          "cat": "Rund um die Musik",
          "ex": "Früher habe ich im Schulchor gesungen."
        },
        {
          "w": "das Volkslied",
          "d": "Ein altes, bekanntes Lied, das viele Menschen in einem Land kennen und singen.",
          "ar": "أغنية شعبية / فلكلورية",
          "cat": "Rund um die Musik",
          "ex": "Auf dem Dorffest singen alle zusammen alte Volkslieder."
        },
        {
          "w": "der Gedanke",
          "d": "Das, was man denkt, oder eine Idee im Kopf.",
          "ar": "فكرة / خاطر",
          "cat": "Rund um die Musik",
          "ex": "Mach dir keine Gedanken, alles wird gut!"
        },
        {
          "w": "die Tradition",
          "d": "Etwas, das Menschen schon lange immer wieder auf die gleiche Art machen.",
          "ar": "تقليد / عادة متوارثة",
          "cat": "Rund um die Musik",
          "ex": "Bei uns ist es Tradition, am Freitag zusammen zu essen."
        },
        {
          "w": "traditionell",
          "d": "So, wie man es schon lange macht, und nicht modern.",
          "ar": "تقليدي",
          "cat": "Rund um die Musik",
          "ex": "Auf dem Fest trugen viele Gäste traditionelle Kleidung."
        },
        {
          "w": "das Theaterstück",
          "d": "Eine Geschichte, die Schauspieler auf einer Bühne spielen.",
          "ar": "مسرحية",
          "cat": "Auf der Bühne",
          "ex": "Die Theatergruppe probt ein neues Theaterstück."
        },
        {
          "w": "das Impro-Theater",
          "d": "Theater ohne festen Text, bei dem die Schauspieler alles spontan erfinden.",
          "ar": "مسرح ارتجالي",
          "cat": "Auf der Bühne",
          "ex": "Beim Impro-Theater bestimmt oft das Publikum das Thema."
        },
        {
          "w": "improvisieren",
          "d": "Etwas spontan machen, ohne Plan und ohne Vorbereitung.",
          "ar": "يرتجل",
          "cat": "Auf der Bühne",
          "ex": "Mir fehlten Zutaten, also musste ich beim Kochen improvisieren."
        },
        {
          "w": "erfinden",
          "d": "Sich etwas Neues ausdenken, zum Beispiel eine Geschichte oder eine Maschine.",
          "ar": "يخترع / يؤلّف",
          "cat": "Auf der Bühne",
          "ex": "Die Schauspieler erfinden die Geschichte direkt auf der Bühne."
        },
        {
          "w": "anwenden",
          "d": "Etwas, das man gelernt hat, in der Praxis benutzen.",
          "ar": "يطبّق / يستخدم",
          "cat": "Auf der Bühne",
          "ex": "Im Kurs lernen Sie eine besondere Technik und wenden sie gleich an."
        },
        {
          "w": "herumspringen",
          "d": "Ohne bestimmtes Ziel hin und her springen.",
          "ar": "يقفز هنا وهناك",
          "cat": "Auf der Bühne",
          "ex": "Die Kinder springen fröhlich auf der Bühne herum."
        },
        {
          "w": "rennen",
          "d": "Sehr schnell laufen.",
          "ar": "يركض / يجري بسرعة",
          "cat": "Auf der Bühne",
          "ex": "Der Dieb rannte mit der Tasche davon."
        },
        {
          "w": "schreien",
          "d": "Sehr laut rufen oder sprechen.",
          "ar": "يصرخ",
          "cat": "Auf der Bühne",
          "ex": "Auf der Bühne darf man auch mal laut schreien."
        },
        {
          "w": "das Kostüm",
          "d": "Besondere Kleidung, die man zum Beispiel im Theater oder beim Karneval trägt.",
          "ar": "زيّ مسرحي / تنكري",
          "cat": "Auf der Bühne",
          "ex": "Für die Rolle trägt sie ein Kostüm aus dem 18. Jahrhundert."
        },
        {
          "w": "die Uniform",
          "d": "Gleiche Kleidung, die zum Beispiel Polizisten oder Piloten bei der Arbeit tragen.",
          "ar": "زيّ رسمي موحّد",
          "cat": "Auf der Bühne",
          "ex": "Der Schauspieler spielt einen Polizisten und trägt eine Uniform."
        },
        {
          "w": "der Dieb",
          "d": "Ein Mann, der etwas stiehlt.",
          "ar": "لص / سارق",
          "cat": "Auf der Bühne",
          "ex": "Der Detektiv sucht den Dieb im Treppenhaus."
        },
        {
          "w": "die Diebin",
          "d": "Eine Frau, die etwas stiehlt.",
          "ar": "لصة / سارقة",
          "cat": "Auf der Bühne",
          "ex": "Die Diebin hat eine wertvolle Briefmarke gestohlen."
        },
        {
          "w": "aufführen",
          "d": "Ein Theaterstück oder ein Musikstück vor Publikum zeigen.",
          "ar": "يعرض / يقدّم (عرضًا)",
          "cat": "Rund um die Aufführung",
          "ex": "Am Ende des Kurses führen wir ein lustiges Stück auf."
        },
        {
          "w": "auftreten",
          "d": "Auf einer Bühne vor Publikum spielen, singen oder sprechen.",
          "ar": "يظهر على المسرح / يؤدّي",
          "cat": "Rund um die Aufführung",
          "ex": "Die Sängerin ist schon in vielen Ländern aufgetreten."
        },
        {
          "w": "umsetzen",
          "d": "Eine Idee oder einen Plan in die Realität bringen.",
          "ar": "ينفّذ / يحوّل إلى واقع",
          "cat": "Rund um die Aufführung",
          "ex": "Alice hilft Ihnen, Ihre kreativen Ideen umzusetzen."
        },
        {
          "w": "veranstalten",
          "d": "Ein Fest oder eine Veranstaltung organisieren und durchführen.",
          "ar": "ينظّم / يقيم (حفلًا)",
          "cat": "Rund um die Aufführung",
          "ex": "Wir veranstalten am Samstag eine Feier für alle Teilnehmenden."
        },
        {
          "w": "sich schminken",
          "d": "Farbe ins Gesicht machen, um schöner oder anders auszusehen.",
          "ar": "يضع مكياجًا / يتزيّن",
          "cat": "Rund um die Aufführung",
          "ex": "Für ihre Rolle schminkt sie sich besonders."
        },
        {
          "w": "die Frisur",
          "d": "Die Form, in der die Haare geschnitten oder gemacht sind.",
          "ar": "تسريحة شعر",
          "cat": "Rund um die Aufführung",
          "ex": "Mit der neuen Frisur sieht er ganz anders aus."
        },
        {
          "w": "die Mode",
          "d": "Kleidung oder Dinge, die zu einer bestimmten Zeit sehr beliebt sind.",
          "ar": "موضة",
          "cat": "Rund um die Aufführung",
          "ex": "Singen kommt nie aus der Mode."
        },
        {
          "w": "die Darstellung",
          "d": "Die Art, wie man etwas oder jemanden zeigt, zum Beispiel in einem Bild oder auf der Bühne.",
          "ar": "تصوير / تجسيد",
          "cat": "Rund um die Aufführung",
          "ex": "Die Darstellung des Themas „Frieden“ ist bei jedem Maler anders."
        },
        {
          "w": "die Vorstellung",
          "d": "Eine Aufführung im Theater, im Zirkus oder im Kino.",
          "ar": "عرض (مسرحي)",
          "cat": "Rund um die Aufführung",
          "ex": "Die Vorstellung beginnt heute um 20 Uhr."
        },
        {
          "w": "zusehen",
          "d": "Mit Interesse ansehen, was andere machen.",
          "ar": "يتفرّج على / يشاهد",
          "cat": "Rund um die Aufführung",
          "ex": "Ich sehe den Schauspielern gern bei der Probe zu."
        },
        {
          "w": "die Broschüre",
          "d": "Ein dünnes Heft mit Informationen, zum Beispiel über Kurse oder eine Stadt.",
          "ar": "كُتيّب / بروشور",
          "cat": "Rund um die Aufführung",
          "ex": "In der Broschüre finden Sie alle Kurse des Semesters."
        },
        {
          "w": "das Büfett",
          "d": "Ein Tisch mit vielen Speisen und Getränken, von dem sich die Gäste selbst nehmen.",
          "ar": "بوفيه",
          "cat": "Rund um die Aufführung",
          "ex": "Nach der Eröffnung gibt es ein Büfett mit Snacks und Getränken."
        },
        {
          "w": "der Snack",
          "d": "Eine kleine Mahlzeit für zwischendurch.",
          "ar": "وجبة خفيفة / سناك",
          "cat": "Rund um die Aufführung",
          "ex": "In der Pause gibt es Getränke und kleine Snacks."
        },
        {
          "w": "konsumieren",
          "d": "Etwas kaufen und verbrauchen, zum Beispiel Essen, Getränke oder Waren.",
          "ar": "يستهلك",
          "cat": "Rund um die Aufführung",
          "ex": "Auf dem Platz kann man sitzen, ohne etwas konsumieren zu müssen."
        },
        {
          "w": "die Rose",
          "d": "Eine Blume mit Dornen, die oft rot ist und als Zeichen für Liebe gilt.",
          "ar": "وردة",
          "cat": "Gegenstände",
          "ex": "Nach der Vorstellung schenkt er ihr eine rote Rose."
        },
        {
          "w": "der Spiegel",
          "d": "Ein Glas, in dem man sich selbst sehen kann.",
          "ar": "مرآة",
          "cat": "Gegenstände",
          "ex": "Vor dem Auftritt schaut sie noch einmal in den Spiegel."
        },
        {
          "w": "der Topf",
          "d": "Ein rundes Gefäß, in dem man zum Beispiel Suppe oder Nudeln kocht.",
          "ar": "قِدر / حلّة",
          "cat": "Gegenstände",
          "ex": "Auf dem Herd steht ein großer Topf mit Suppe."
        },
        {
          "w": "die Vase",
          "d": "Ein Gefäß, in das man Blumen mit Wasser stellt.",
          "ar": "مزهرية / فازة",
          "cat": "Gegenstände",
          "ex": "Aus alten Flaschen kann man bunte Vasen machen."
        },
        {
          "w": "die Couch",
          "d": "Ein bequemes Möbelstück, auf dem mehrere Personen sitzen oder liegen können.",
          "ar": "كنبة / أريكة",
          "cat": "Gegenstände",
          "ex": "Auf der Bühne steht nur eine alte Couch."
        },
        {
          "w": "der Backofen",
          "d": "Ein Gerät in der Küche, in dem man Brot, Kuchen oder Pizza backt.",
          "ar": "فرن",
          "cat": "Gegenstände",
          "ex": "Der Kuchen ist schon seit 30 Minuten im Backofen."
        },
        {
          "w": "die Briefmarke",
          "d": "Ein kleines Bild aus Papier, das man auf einen Brief klebt, bevor man ihn verschickt.",
          "ar": "طابع بريد",
          "cat": "Gegenstände",
          "ex": "Mein Onkel sammelt seit Jahren alte Briefmarken."
        },
        {
          "w": "der Kuli",
          "d": "Ein Stift mit Tinte zum Schreiben; das Wort ist die Kurzform von Kugelschreiber.",
          "ar": "قلم جاف",
          "cat": "Gegenstände",
          "ex": "Hast du vielleicht einen Kuli für mich?"
        },
        {
          "w": "clever",
          "d": "Klug und mit guten Ideen.",
          "ar": "ذكي / شاطر",
          "cat": "Eigenschaften",
          "ex": "Der Zoo hatte eine clevere Idee, um Geld zu verdienen."
        },
        {
          "w": "chaotisch",
          "d": "Ohne Ordnung und sehr durcheinander.",
          "ar": "فوضوي",
          "cat": "Eigenschaften",
          "ex": "Unsere Proben sind manchmal ziemlich chaotisch."
        },
        {
          "w": "durcheinander",
          "d": "Nicht ordentlich und ohne Ordnung.",
          "ar": "مبعثر / غير مرتّب",
          "cat": "Eigenschaften",
          "ex": "Nach der Party war in der Wohnung alles durcheinander."
        },
        {
          "w": "begrenzt",
          "d": "So, dass es eine Grenze hat und nicht unendlich viel davon gibt.",
          "ar": "محدود",
          "cat": "Eigenschaften",
          "ex": "Die Plätze im Kurs sind begrenzt, melden Sie sich schnell an."
        },
        {
          "w": "rund",
          "d": "So geformt wie ein Kreis oder ein Ball, ohne Ecken.",
          "ar": "مستدير / دائري",
          "cat": "Eigenschaften",
          "ex": "Das Gebäude hat runde Formen."
        },
        {
          "w": "steil",
          "d": "So, dass es sehr schnell nach oben oder nach unten geht.",
          "ar": "شديد الانحدار",
          "cat": "Eigenschaften",
          "ex": "Der Weg auf den Berg ist sehr steil."
        },
        {
          "w": "weich",
          "d": "Nicht hart, so dass man es leicht drücken kann.",
          "ar": "طريّ / ناعم",
          "cat": "Eigenschaften",
          "ex": "Das Kissen auf der Couch ist schön weich."
        },
        {
          "w": "talentiert",
          "d": "Mit einer besonderen Begabung für etwas.",
          "ar": "موهوب",
          "cat": "Eigenschaften",
          "ex": "In der Show singen mehr oder weniger talentierte Sänger."
        },
        {
          "w": "zeitlos",
          "d": "So, dass es nicht aus der Mode kommt und immer aktuell bleibt.",
          "ar": "خالد / لا يرتبط بزمن",
          "cat": "Eigenschaften",
          "ex": "Dieses Lied ist zeitlos, man hört es auch heute noch gern."
        },
        {
          "w": "begeistert",
          "d": "Sehr froh und voller Freude über etwas.",
          "ar": "متحمّس / مُعجَب جدًا",
          "cat": "Eigenschaften",
          "ex": "Das Publikum war von der Aufführung begeistert."
        },
        {
          "w": "dankbar (für + A)",
          "d": "So, dass man jemandem danken möchte, weil er etwas Gutes getan hat.",
          "ar": "ممتنّ (لـ)",
          "cat": "Eigenschaften",
          "ex": "Ich bin dir sehr dankbar für deine Hilfe."
        },
        {
          "w": "behandeln",
          "d": "Über ein Thema sprechen oder arbeiten; auch: auf eine bestimmte Art mit jemandem umgehen.",
          "ar": "يتناول (موضوعًا) / يعامل",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "In ihrem Kurs behandelt die Malerin das Thema „Frieden“."
        },
        {
          "w": "besprechen",
          "d": "Genau über etwas sprechen, um eine Lösung oder einen Plan zu finden.",
          "ar": "يناقش / يتباحث في",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Wir besprechen die Rollen zu Beginn des Kurses."
        },
        {
          "w": "bestehen (aus + D)",
          "d": "Aus verschiedenen Teilen oder Personen zusammengesetzt sein.",
          "ar": "يتكوّن من",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Die Gruppe besteht aus fünf Personen."
        },
        {
          "w": "die Biene",
          "d": "Ein kleines Insekt, das Honig macht.",
          "ar": "نحلة",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Im Garten fliegen viele Bienen um die Blumen."
        },
        {
          "w": "einsperren",
          "d": "Jemanden in einen Raum bringen und die Tür abschließen, sodass er nicht hinaus kann.",
          "ar": "يحبس / يسجن",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Im Lied sperrt man einen Mann in einen dunklen Kerker ein."
        },
        {
          "w": "einzig",
          "d": "Nur diese eine Person oder Sache und keine andere.",
          "ar": "الوحيد",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Sie ist die einzige Person in der Gruppe, die Klavier spielt."
        },
        {
          "w": "ersetzen",
          "d": "Etwas durch etwas anderes austauschen, weil das Erste fehlt oder kaputt ist.",
          "ar": "يستبدل / يعوّض",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Wenn mir Zutaten fehlen, ersetze ich sie durch andere."
        },
        {
          "w": "der Frieden",
          "d": "Eine Zeit ohne Krieg und ohne Streit.",
          "ar": "سلام",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Das Thema des Malkurses ist der Frieden."
        },
        {
          "w": "her sein",
          "d": "Vor einer bestimmten Zeit passiert sein.",
          "ar": "مضى عليه (وقت) / من زمان",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Ich habe im Chor gesungen, aber das ist schon lange her."
        },
        {
          "w": "hinauf",
          "d": "Von unten nach oben, weg vom Sprecher.",
          "ar": "إلى أعلى / صعودًا",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Von der Station geht es steil hinauf auf den Berg."
        },
        {
          "w": "das Inland",
          "d": "Das eigene Land, im Gegensatz zum Ausland.",
          "ar": "الداخل (داخل البلد)",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Die Künstler kommen aus dem In- und Ausland."
        },
        {
          "w": "die Mauer",
          "d": "Eine Wand aus Steinen, die zum Beispiel einen Garten oder eine Stadt umgibt.",
          "ar": "سور / جدار",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "An der alten Mauer kann man bunte Graffiti sehen."
        },
        {
          "w": "der Meister",
          "d": "Ein Mann, der etwas sehr gut kann; auch ein Handwerker mit einer besonderen Prüfung.",
          "ar": "أستاذ / معلّم (في حرفة)",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Wir sind alle keine Meister, aber wir spielen gern zusammen."
        },
        {
          "w": "die Meisterin",
          "d": "Eine Frau, die etwas sehr gut kann oder eine besondere Prüfung im Handwerk hat.",
          "ar": "أستاذة / معلّمة (في حرفة)",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Meine Oma ist eine Meisterin im Kuchenbacken."
        },
        {
          "w": "das Missverständnis",
          "d": "Eine Situation, in der jemand etwas falsch versteht.",
          "ar": "سوء فهم",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Das war ein Missverständnis, ich meinte eigentlich morgen."
        },
        {
          "w": "die Nachbarschaft",
          "d": "Die Menschen, die in der Nähe wohnen, und die Gegend um die eigene Wohnung.",
          "ar": "الجيرة / الحيّ",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "In unserer Nachbarschaft gibt es eine neue Tradition."
        },
        {
          "w": "der Neffe",
          "d": "Der Sohn von meinem Bruder oder von meiner Schwester.",
          "ar": "ابن الأخ / ابن الأخت",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Mein Neffe hat mich zum Chor mitgenommen."
        },
        {
          "w": "nicht ..., sondern ...",
          "d": "Mit dieser Struktur korrigiert man eine verneinte Aussage und nennt das Richtige.",
          "ar": "ليس ...، بل ...",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Das Bild hängt nicht in der Galerie, sondern im Museum."
        },
        {
          "w": "heimlich",
          "d": "So, dass andere es nicht sehen oder nicht wissen.",
          "ar": "سرًّا / خِفية",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Lange habe ich nur heimlich unter der Dusche gesungen."
        },
        {
          "w": "scheinbar",
          "d": "So, dass es nur so aussieht, aber in Wirklichkeit anders ist.",
          "ar": "ظاهريًا / في الظاهر",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Die Putzfrau reinigte eine scheinbar schmutzige Wanne."
        },
        {
          "w": "Freundschaft schließen",
          "d": "Mit jemandem Freund oder Freundin werden.",
          "ar": "يكوّن صداقة",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Im Chor habe ich schnell Freundschaft mit anderen Sängern geschlossen."
        },
        {
          "w": "das Referat",
          "d": "Ein Vortrag über ein bestimmtes Thema in der Schule, im Kurs oder an der Uni.",
          "ar": "عرض شفهي / بحث يُلقى",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Bei meinem Referat hatte ich meine Notizen vergessen."
        },
        {
          "w": "das Treppenhaus",
          "d": "Der Teil eines Hauses, in dem die Treppen sind.",
          "ar": "بيت الدرج / بيت السلم",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Im Treppenhaus hört man die Nachbarn singen."
        },
        {
          "w": "die Stufe",
          "d": "Ein einzelner Teil einer Treppe.",
          "ar": "درجة (سلم)",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Vorsicht, die erste Stufe ist sehr hoch!"
        },
        {
          "w": "die Umleitung",
          "d": "Ein anderer Weg, den man fahren muss, wenn eine Straße gesperrt ist.",
          "ar": "تحويلة (طريق)",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Wegen einer Baustelle gibt es eine Umleitung."
        },
        {
          "w": "vergeblich",
          "d": "Ohne Erfolg und ohne Ergebnis.",
          "ar": "بلا جدوى / عبثًا",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Ich habe vergeblich versucht, Karten für die Premiere zu bekommen."
        },
        {
          "w": "das Virus",
          "d": "Ein sehr kleiner Krankheitserreger, der zum Beispiel eine Grippe auslöst.",
          "ar": "فيروس",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Das Virus hat die ganze Welt verändert."
        },
        {
          "w": "die Qualifikation",
          "d": "Eine Ausbildung, ein Abschluss oder eine Erfahrung, die man für eine Aufgabe braucht.",
          "ar": "مؤهِّل",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Für den Theaterkurs brauchen Sie keine besondere Qualifikation."
        },
        {
          "w": "der Schwerpunkt",
          "d": "Das wichtigste Thema oder der wichtigste Teil von etwas.",
          "ar": "محور / تركيز أساسي",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Das neue Programm hat einen künstlerischen Schwerpunkt."
        },
        {
          "w": "das Treffen",
          "d": "Eine Situation, in der sich Menschen sehen und Zeit miteinander verbringen.",
          "ar": "لقاء / اجتماع",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Das nächste Treffen des Chors ist am Donnerstag."
        },
        {
          "w": "die Ausstellung",
          "d": "Eine Veranstaltung, bei der man Kunstwerke oder andere Dinge für Besucher zeigt.",
          "ar": "معرض",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Die Ausstellung läuft noch bis Ende Dezember."
        },
        {
          "w": "der Künstler",
          "d": "Ein Mann, der Kunst macht, zum Beispiel Bilder malt oder Musik komponiert.",
          "ar": "فنان",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Der Künstler ist bei der Eröffnung selbst anwesend."
        },
        {
          "w": "die Künstlerin",
          "d": "Eine Frau, die Kunst macht, zum Beispiel Bilder malt oder Musik komponiert.",
          "ar": "فنانة",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Die Künstlerin zeigt ihre neuen Bilder in der Galerie."
        },
        {
          "w": "das Gemälde",
          "d": "Ein Bild, das jemand mit Farben gemalt hat.",
          "ar": "لوحة (زيتية)",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Das Gemälde hängt im größten Saal des Museums."
        },
        {
          "w": "der Vordergrund",
          "d": "Der vordere Teil eines Bildes, den man zuerst sieht.",
          "ar": "مقدّمة الصورة",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Im Vordergrund sieht man ein Paar mit einem roten Regenschirm."
        },
        {
          "w": "der Hintergrund",
          "d": "Der hintere Teil eines Bildes, der weiter weg wirkt.",
          "ar": "خلفية الصورة",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Im Hintergrund sieht man die Berge."
        },
        {
          "w": "die Bühne",
          "d": "Der erhöhte Platz im Theater, auf dem die Schauspieler spielen.",
          "ar": "خشبة المسرح",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Nach der Vorstellung kommen alle Schauspieler auf die Bühne."
        },
        {
          "w": "das Bühnenbild",
          "d": "Die Dekoration und die Gegenstände auf der Bühne für ein Theaterstück.",
          "ar": "ديكور المسرح",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Das Bühnenbild passt sehr gut zum Inhalt des Stücks."
        },
        {
          "w": "der Regisseur",
          "d": "Ein Mann, der bestimmt, wie ein Film oder ein Theaterstück gespielt wird.",
          "ar": "مخرج",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Der Regisseur bespricht die Szene mit den Schauspielern."
        },
        {
          "w": "die Regisseurin",
          "d": "Eine Frau, die bestimmt, wie ein Film oder ein Theaterstück gespielt wird.",
          "ar": "مخرجة",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Die Regisseurin sucht noch Schauspieler für das neue Stück."
        },
        {
          "w": "proben",
          "d": "Etwas üben, bevor man es vor Publikum zeigt.",
          "ar": "يُجري بروفة / يتمرّن",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Wir proben die letzte Szene noch einmal."
        },
        {
          "w": "die Aufführung",
          "d": "Das Zeigen eines Theaterstücks, Konzerts oder Tanzes vor Publikum.",
          "ar": "عرض / أداء",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Nach der Aufführung gab es langen Applaus."
        },
        {
          "w": "der Applaus",
          "d": "Das Klatschen mit den Händen, wenn dem Publikum etwas gefallen hat.",
          "ar": "تصفيق",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Die Schauspieler bekommen viel Applaus."
        },
        {
          "w": "sich verbeugen",
          "d": "Den Oberkörper nach vorne bewegen, um sich zu bedanken oder jemanden zu grüßen.",
          "ar": "ينحني (للتحية)",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Am Ende verbeugen sich alle Schauspieler vor dem Publikum."
        },
        {
          "w": "die Rolle",
          "d": "Die Person, die ein Schauspieler in einem Stück oder Film spielt.",
          "ar": "دور",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Sie spielt die Rolle einer reichen alten Dame."
        },
        {
          "w": "das Publikum",
          "d": "Alle Menschen, die eine Vorstellung oder ein Konzert besuchen.",
          "ar": "الجمهور",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Beim Impro-Theater gibt das Publikum die Themen vor."
        },
        {
          "w": "der Auftritt",
          "d": "Das Spielen, Singen oder Sprechen einer Person vor Publikum.",
          "ar": "ظهور على المسرح / فقرة",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Vor ihrem ersten Auftritt war die Sängerin sehr nervös."
        },
        {
          "w": "der Chor",
          "d": "Eine Gruppe von Menschen, die zusammen singen.",
          "ar": "جوقة / كورال",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Seit einem Jahr singe ich in einem Chor."
        },
        {
          "w": "die Melodie",
          "d": "Die Folge von Tönen, an der man ein Lied erkennt.",
          "ar": "لحن",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Die Melodie kennt jeder, aber den Text nicht."
        },
        {
          "w": "das Instrument",
          "d": "Ein Gegenstand, mit dem man Musik macht, zum Beispiel eine Gitarre oder ein Klavier.",
          "ar": "آلة موسيقية",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "In unserer Nachbarschaft spielt fast jeder ein Instrument."
        },
        {
          "w": "das Aquarell",
          "d": "Ein Bild, das man mit Wasserfarben malt.",
          "ar": "لوحة بالألوان المائية",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Im Malkurs lernen Sie die Technik des Aquarells."
        },
        {
          "w": "das Graffiti",
          "d": "Ein Bild oder Text, den jemand mit Spray an eine Wand malt.",
          "ar": "جرافيتي / رسم على الجدران",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "An der Brücke ist ein neues Graffiti aufgetaucht."
        },
        {
          "w": "abstrakt",
          "d": "So, dass ein Bild keine echten Dinge zeigt, sondern nur Formen und Farben.",
          "ar": "تجريدي",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Die Bilder der Affen sind bunt und abstrakt."
        },
        {
          "w": "fantasievoll",
          "d": "Mit vielen kreativen und ungewöhnlichen Ideen.",
          "ar": "مليء بالخيال",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Die Kinder haben fantasievolle Kostüme gebastelt."
        },
        {
          "w": "das Missgeschick",
          "d": "Ein kleiner Unfall oder Fehler, der einem ohne Absicht passiert.",
          "ar": "حادث بسيط / سوء حظ",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Der Putzfrau ist ein teures Missgeschick passiert."
        },
        {
          "w": "aus Versehen",
          "d": "Ohne Absicht, also nicht absichtlich.",
          "ar": "عن غير قصد / بالخطأ",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Sie hat das Kunstwerk aus Versehen zerstört."
        },
        {
          "w": "freiwillig",
          "d": "So, dass man etwas macht, weil man es selbst möchte, und nicht, weil man muss.",
          "ar": "طوعًا / بإرادته",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Die Affen haben ganz freiwillig gemalt."
        },
        {
          "w": "der Kunstsammler",
          "d": "Ein Mann, der Kunstwerke kauft und sammelt.",
          "ar": "جامع أعمال فنية",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Ein reicher Kunstsammler hat das Bild bei der Auktion gekauft."
        },
        {
          "w": "die Werkstatt",
          "d": "Ein Raum, in dem man mit Werkzeug etwas baut oder repariert.",
          "ar": "ورشة",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "In der Werkstatt des Theaters baut man das Bühnenbild."
        },
        {
          "w": "das Upcycling",
          "d": "Eine Methode, bei der man aus alten oder kaputten Dingen etwas Neues und Schönes macht.",
          "ar": "إعادة تدوير إبداعية",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Beim Upcycling werden aus alten Paletten praktische Möbel."
        }
      ],
      "visual": {
        "src": "assets/chapters/chapter-9.webp",
        "alt": "Kapitel 9 · Kunststücke",
        "caption": "Kunststücke"
      }
    },
    {
      "num": 10,
      "route": "b1.1/k10",
      "title": "Miteinander",
      "subtitle": "Netzwerk neu B1.2 · Kapitel 10",
      "intro": "Wortschatz aus Netzwerk neu B1.2: Miteinander.",
      "introAr": "مفردات الوحدة 10 من Netzwerk neu B1.2: Miteinander",
      "badges": [
        "B1.2",
        "Kapitel 10",
        "156 Wörter"
      ],
      "goals": [],
      "vocabSummary": {
        "title": "Wortschatz mit Erklärung",
        "note": "كل بطاقة فيها شرح ألماني واضح، مثال كامل، والترجمة العربية."
      },
      "vocab": [
        {
          "w": "die Gemeinschaft",
          "d": "Eine Gruppe von Menschen, die zusammenleben oder gemeinsame Ziele haben.",
          "ar": "الجماعة / المجتمع",
          "cat": "Miteinander",
          "ex": "In unserem Dorf ist die Gemeinschaft sehr stark, alle helfen sich gegenseitig."
        },
        {
          "w": "die Gesellschaft",
          "d": "Alle Menschen, die in einem Land zusammenleben und gemeinsame Regeln haben.",
          "ar": "المجتمع",
          "cat": "Miteinander",
          "ex": "Bildung ist für die ganze Gesellschaft wichtig."
        },
        {
          "w": "das Zusammenleben",
          "d": "Die Art, wie Menschen miteinander leben und miteinander auskommen.",
          "ar": "العيش المشترك / التعايش",
          "cat": "Miteinander",
          "ex": "Für ein gutes Zusammenleben braucht man Respekt und Toleranz."
        },
        {
          "w": "der Wert",
          "d": "Eine Idee oder Eigenschaft, die für Menschen sehr wichtig ist, zum Beispiel Freiheit.",
          "ar": "قيمة",
          "cat": "Miteinander",
          "ex": "Ehrlichkeit ist für mich ein sehr wichtiger Wert."
        },
        {
          "w": "der Respekt",
          "d": "Die Haltung, andere Menschen und ihre Meinung zu achten.",
          "ar": "الاحترام",
          "cat": "Miteinander",
          "ex": "Wir sollten auch Menschen mit anderen Meinungen mit Respekt behandeln."
        },
        {
          "w": "die Meinungsfreiheit",
          "d": "Das Recht, frei und ohne Angst zu sagen, was man denkt.",
          "ar": "حرية الرأي / حرية التعبير",
          "cat": "Miteinander",
          "ex": "In einer Demokratie ist die Meinungsfreiheit besonders wichtig."
        },
        {
          "w": "die Gleichberechtigung",
          "d": "Der Zustand, in dem alle Menschen, zum Beispiel Frauen und Männer, die gleichen Rechte haben.",
          "ar": "المساواة في الحقوق",
          "cat": "Miteinander",
          "ex": "Die Gleichberechtigung von Frauen und Männern steht im Grundgesetz."
        },
        {
          "w": "die Würde",
          "d": "Der Wert, den jeder Mensch hat und den alle respektieren müssen.",
          "ar": "الكرامة",
          "cat": "Miteinander",
          "ex": "Die Würde des Menschen ist unantastbar."
        },
        {
          "w": "die Solidarität",
          "d": "Das Gefühl, dass man zusammengehört und sich gegenseitig hilft.",
          "ar": "التضامن",
          "cat": "Miteinander",
          "ex": "Nach dem Hochwasser zeigten viele Menschen Solidarität mit den Opfern."
        },
        {
          "w": "die Gerechtigkeit",
          "d": "Der Zustand, in dem alle Menschen fair und gleich behandelt werden.",
          "ar": "العدالة",
          "cat": "Miteinander",
          "ex": "Viele junge Leute demonstrieren für mehr soziale Gerechtigkeit."
        },
        {
          "w": "die Ehrlichkeit",
          "d": "Die Eigenschaft, immer die Wahrheit zu sagen.",
          "ar": "الصدق / الأمانة",
          "cat": "Miteinander",
          "ex": "An meinem besten Freund schätze ich vor allem seine Ehrlichkeit."
        },
        {
          "w": "die Fairness",
          "d": "Ein Verhalten, bei dem man andere gerecht behandelt und keine Tricks benutzt.",
          "ar": "الإنصاف / اللعب النظيف",
          "cat": "Miteinander",
          "ex": "Im Sport ist Fairness genauso wichtig wie der Sieg."
        },
        {
          "w": "die Zivilcourage",
          "d": "Der Mut, anderen Menschen in der Öffentlichkeit zu helfen oder die eigene Meinung zu sagen, auch wenn es gefährlich ist.",
          "ar": "الشجاعة المدنية",
          "cat": "Miteinander",
          "ex": "Sie zeigte Zivilcourage und half dem Mann in der U-Bahn."
        },
        {
          "w": "die Sicherheit",
          "d": "Der Zustand, in dem man keine Gefahr fürchten muss.",
          "ar": "الأمان / الأمن",
          "cat": "Miteinander",
          "ex": "Die Polizei sorgt für die Sicherheit in der Stadt."
        },
        {
          "w": "die Erziehung",
          "d": "Die Art, wie Eltern oder Lehrer Kindern Werte und gutes Verhalten beibringen.",
          "ar": "التربية",
          "cat": "Miteinander",
          "ex": "Eine gute Erziehung beginnt in der Familie."
        },
        {
          "w": "das Recht",
          "d": "Etwas, das man tun oder bekommen darf, weil das Gesetz es erlaubt.",
          "ar": "حق",
          "cat": "Miteinander",
          "ex": "Jedes Kind hat das Recht auf Bildung."
        },
        {
          "w": "regeln",
          "d": "Etwas mit Regeln oder Gesetzen ordnen und organisieren.",
          "ar": "ينظّم",
          "cat": "Miteinander",
          "ex": "Das Gesetz regelt, wie viele Stunden man pro Tag arbeiten darf."
        },
        {
          "w": "die Minderheit",
          "d": "Eine kleine Gruppe in einer Gesellschaft, die sich von der Mehrheit unterscheidet.",
          "ar": "أقلية",
          "cat": "Miteinander",
          "ex": "Die Partei setzt sich für die Rechte von Minderheiten ein."
        },
        {
          "w": "das Vorurteil",
          "d": "Eine meist negative Meinung über Menschen, die man hat, bevor man sie wirklich kennt.",
          "ar": "حكم مسبق / تحيّز",
          "cat": "Miteinander",
          "ex": "Durch persönliche Kontakte kann man Vorurteile abbauen."
        },
        {
          "w": "die Toleranz",
          "d": "Die Bereitschaft, andere Meinungen und Lebensweisen zu akzeptieren.",
          "ar": "التسامح / تقبّل الآخر",
          "cat": "Miteinander",
          "ex": "Toleranz ist die Basis für ein friedliches Zusammenleben."
        },
        {
          "w": "ehrenamtlich",
          "d": "Wenn man ehrenamtlich arbeitet, hilft man freiwillig und bekommt kein Geld dafür.",
          "ar": "تطوعي / بدون أجر",
          "cat": "Engagement",
          "ex": "Meine Mutter arbeitet zweimal pro Woche ehrenamtlich im Altenheim."
        },
        {
          "w": "die Hilfsbereitschaft",
          "d": "Die Eigenschaft, anderen Menschen gern zu helfen.",
          "ar": "الاستعداد للمساعدة",
          "cat": "Engagement",
          "ex": "Nach dem Unfall war die Hilfsbereitschaft der Nachbarn sehr groß."
        },
        {
          "w": "die Nachhilfe",
          "d": "Zusätzlicher Unterricht für Schüler, die in einem Fach Probleme haben.",
          "ar": "دروس تقوية / دروس خصوصية",
          "cat": "Engagement",
          "ex": "Mein Sohn bekommt zweimal pro Woche Nachhilfe in Mathe."
        },
        {
          "w": "bewältigen",
          "d": "Eine schwierige Aufgabe oder Situation erfolgreich schaffen.",
          "ar": "يتغلّب على / ينجز (مهمة صعبة)",
          "cat": "Engagement",
          "ex": "Allein konnte die Familie den Alltag kaum bewältigen."
        },
        {
          "w": "die Mühe",
          "d": "Die Anstrengung, die man braucht, um etwas Schwieriges zu tun.",
          "ar": "عناء / جهد / صعوبة",
          "cat": "Engagement",
          "ex": "Viele Familien haben Mühe, alle Rechnungen zu bezahlen."
        },
        {
          "w": "das Vorhaben",
          "d": "Ein Plan, den man in der Zukunft umsetzen möchte.",
          "ar": "مشروع / خطة",
          "cat": "Engagement",
          "ex": "Über wichtige Vorhaben stimmen die Bürger gemeinsam ab."
        },
        {
          "w": "der Pate",
          "d": "Ein Mann, der sich freiwillig um ein Kind oder eine Familie kümmert und ihnen hilft.",
          "ar": "الراعي / الكفيل (متطوع)",
          "cat": "Engagement",
          "ex": "Der Pate trifft sich jeden Mittwoch mit dem kleinen Luis."
        },
        {
          "w": "die Patin",
          "d": "Eine Frau, die sich freiwillig um ein Kind oder eine Familie kümmert und ihnen hilft.",
          "ar": "الراعية / الكفيلة (متطوعة)",
          "cat": "Engagement",
          "ex": "Als Patin hilft Sara einem Mädchen bei den Hausaufgaben."
        },
        {
          "w": "die Patenschaft",
          "d": "Die freiwillige Aufgabe, sich längere Zeit um eine Person oder eine Familie zu kümmern.",
          "ar": "الرعاية / الكفالة",
          "cat": "Engagement",
          "ex": "Die Patenschaft dauert oft mehrere Jahre."
        },
        {
          "w": "die Not",
          "d": "Eine schwierige Situation, in der man dringend Hilfe braucht.",
          "ar": "الضيق / الشدّة / الحاجة",
          "cat": "Engagement",
          "ex": "Ein echter Freund hilft dir in der Not."
        },
        {
          "w": "bedürftig",
          "d": "Arm und deshalb auf die Hilfe von anderen angewiesen.",
          "ar": "محتاج",
          "cat": "Engagement",
          "ex": "Die Tafel verteilt Lebensmittel an bedürftige Menschen."
        },
        {
          "w": "die Berufsfeuerwehr",
          "d": "Eine Feuerwehr, bei der die Feuerwehrleute für ihre Arbeit bezahlt werden.",
          "ar": "الإطفاء المحترف (بأجر)",
          "cat": "Engagement",
          "ex": "In großen Städten arbeitet die Berufsfeuerwehr mit der Freiwilligen Feuerwehr zusammen."
        },
        {
          "w": "die Erste Hilfe",
          "d": "Die schnelle Hilfe, die man einem verletzten Menschen gibt, bevor der Arzt kommt.",
          "ar": "الإسعافات الأولية",
          "cat": "Engagement",
          "ex": "Jeder Autofahrer sollte einen Kurs in Erster Hilfe machen."
        },
        {
          "w": "spenden",
          "d": "Geld oder Sachen kostenlos geben, um anderen zu helfen.",
          "ar": "يتبرّع",
          "cat": "Engagement",
          "ex": "Viele Supermärkte spenden übrige Lebensmittel an die Tafel."
        },
        {
          "w": "das Amt",
          "d": "Eine öffentliche Stelle, die Aufgaben für den Staat oder die Stadt erledigt.",
          "ar": "مصلحة حكومية / مكتب رسمي",
          "cat": "Behörden und Arbeitswelt",
          "ex": "Für den neuen Pass musst du aufs Amt gehen."
        },
        {
          "w": "der Anspruch (auf + A)",
          "d": "Das Recht, etwas zu bekommen.",
          "ar": "حق (في) / استحقاق",
          "cat": "Behörden und Arbeitswelt",
          "ex": "Sie haben Anspruch auf 30 Tage Urlaub."
        },
        {
          "w": "die Vorschrift",
          "d": "Eine offizielle Regel, die man befolgen muss.",
          "ar": "لائحة / قاعدة رسمية",
          "cat": "Behörden und Arbeitswelt",
          "ex": "Nach der Vorschrift muss man im Labor eine Schutzbrille tragen."
        },
        {
          "w": "abmelden",
          "d": "Offiziell mitteilen, dass man nicht mehr an einem Ort wohnt oder nicht mehr teilnimmt.",
          "ar": "يلغي التسجيل / يسجّل الخروج",
          "cat": "Behörden und Arbeitswelt",
          "ex": "Vor dem Umzug ins Ausland muss man sich beim Amt abmelden."
        },
        {
          "w": "zulassen",
          "d": "Offiziell erlauben, dass jemand etwas machen oder an etwas teilnehmen darf.",
          "ar": "يسمح / يقبل رسميًا",
          "cat": "Behörden und Arbeitswelt",
          "ex": "Nur wer die Prüfung besteht, wird zum Studium zugelassen."
        },
        {
          "w": "verantwortlich (für + A)",
          "d": "Wenn man für etwas verantwortlich ist, muss man sich darum kümmern.",
          "ar": "مسؤول (عن)",
          "cat": "Behörden und Arbeitswelt",
          "ex": "Wer ist hier für die Sauberkeit verantwortlich?"
        },
        {
          "w": "zuverlässig",
          "d": "So, dass man sich immer auf jemanden oder etwas verlassen kann.",
          "ar": "موثوق / يُعتمد عليه",
          "cat": "Behörden und Arbeitswelt",
          "ex": "Der Bus fährt zuverlässig alle zehn Minuten."
        },
        {
          "w": "eine Entscheidung treffen",
          "d": "Sich nach dem Überlegen für eine Möglichkeit entscheiden.",
          "ar": "يتخذ قرارًا",
          "cat": "Behörden und Arbeitswelt",
          "ex": "Der Stadtrat hat gestern eine wichtige Entscheidung getroffen."
        },
        {
          "w": "das Arbeitsamt",
          "d": "Das Amt, das Menschen bei der Suche nach Arbeit hilft.",
          "ar": "مكتب العمل",
          "cat": "Behörden und Arbeitswelt",
          "ex": "Seit er arbeitslos ist, geht er regelmäßig zum Arbeitsamt."
        },
        {
          "w": "die Arbeitsstelle",
          "d": "Ein Platz in einer Firma, an dem man angestellt ist und arbeitet.",
          "ar": "وظيفة / مكان عمل",
          "cat": "Behörden und Arbeitswelt",
          "ex": "Sie hat endlich eine neue Arbeitsstelle gefunden."
        },
        {
          "w": "einnehmen (Geld einnehmen)",
          "d": "Geld bekommen, zum Beispiel durch Arbeit oder durch einen Verkauf.",
          "ar": "يكسب / يحصّل (مالًا)",
          "cat": "Behörden und Arbeitswelt",
          "ex": "Beim Flohmarkt haben wir 200 Euro eingenommen."
        },
        {
          "w": "finanzieren",
          "d": "Das Geld für etwas bezahlen oder zur Verfügung stellen.",
          "ar": "يموّل",
          "cat": "Behörden und Arbeitswelt",
          "ex": "Die Stadt finanziert das Ferienprogramm für Kinder."
        },
        {
          "w": "die Dienstleistung",
          "d": "Eine Arbeit, die man für andere macht, zum Beispiel Haare schneiden oder etwas reparieren.",
          "ar": "خدمة",
          "cat": "Behörden und Arbeitswelt",
          "ex": "Die Bank bietet viele Dienstleistungen auch online an."
        },
        {
          "w": "die Demokratie",
          "d": "Eine Staatsform, in der die Bürger frei wählen und mitbestimmen können.",
          "ar": "الديمقراطية",
          "cat": "Politik",
          "ex": "In einer Demokratie entscheiden die Bürger, wer regiert."
        },
        {
          "w": "abstimmen (über + A)",
          "d": "Durch eine Wahl gemeinsam über etwas entscheiden.",
          "ar": "يصوّت (على)",
          "cat": "Politik",
          "ex": "Morgen stimmen die Bürger über den neuen Park ab."
        },
        {
          "w": "der Bundestag",
          "d": "Das deutsche Parlament in Berlin.",
          "ar": "البرلمان الألماني (البوندستاغ)",
          "cat": "Politik",
          "ex": "Die Abgeordneten im Bundestag beschließen neue Gesetze."
        },
        {
          "w": "der/die Abgeordnete",
          "d": "Eine Person, die vom Volk gewählt wurde und im Parlament sitzt.",
          "ar": "نائب / نائبة في البرلمان",
          "cat": "Politik",
          "ex": "Die Abgeordnete spricht heute im Bundestag über das neue Gesetz."
        },
        {
          "w": "die Regierung",
          "d": "Die Gruppe von Politikern, die ein Land führt.",
          "ar": "الحكومة",
          "cat": "Politik",
          "ex": "Die Regierung plant mehr Geld für Schulen."
        },
        {
          "w": "der Bundeskanzler",
          "d": "Der Mann, der in Deutschland oder Österreich die Regierung leitet.",
          "ar": "المستشار الاتحادي (رئيس الحكومة)",
          "cat": "Politik",
          "ex": "Der Bundeskanzler hat heute im Fernsehen eine Rede gehalten."
        },
        {
          "w": "die Bundeskanzlerin",
          "d": "Die Frau, die in Deutschland oder Österreich die Regierung leitet.",
          "ar": "المستشارة الاتحادية",
          "cat": "Politik",
          "ex": "Angela Merkel war 16 Jahre lang Bundeskanzlerin."
        },
        {
          "w": "der Minister",
          "d": "Ein Politiker, der in der Regierung für einen bestimmten Bereich verantwortlich ist.",
          "ar": "وزير",
          "cat": "Politik",
          "ex": "Der Minister für Bildung besucht heute unsere Schule."
        },
        {
          "w": "die Ministerin",
          "d": "Eine Politikerin, die in der Regierung für einen bestimmten Bereich verantwortlich ist.",
          "ar": "وزيرة",
          "cat": "Politik",
          "ex": "Die neue Ministerin will die Krankenhäuser verbessern."
        },
        {
          "w": "der Kandidat",
          "d": "Ein Mann, der sich bei einer Wahl oder um eine Stelle bewirbt.",
          "ar": "مرشّح",
          "cat": "Politik",
          "ex": "Drei Kandidaten wollen Bürgermeister werden."
        },
        {
          "w": "die Kandidatin",
          "d": "Eine Frau, die sich bei einer Wahl oder um eine Stelle bewirbt.",
          "ar": "مرشّحة",
          "cat": "Politik",
          "ex": "Die Kandidatin stellte ihre Ideen auf dem Marktplatz vor."
        },
        {
          "w": "die Bürgerversammlung",
          "d": "Ein Treffen, bei dem die Bürger einer Stadt über wichtige Themen sprechen.",
          "ar": "اجتماع المواطنين",
          "cat": "Politik",
          "ex": "Auf der Bürgerversammlung wurde über den neuen Spielplatz diskutiert."
        },
        {
          "w": "die EU (Europäische Union)",
          "d": "Eine Gemeinschaft von europäischen Staaten, die politisch und wirtschaftlich eng zusammenarbeiten.",
          "ar": "الاتحاد الأوروبي",
          "cat": "Politik",
          "ex": "Seit 2020 hat die EU 27 Mitglieder."
        },
        {
          "w": "der Mitgliedsstaat",
          "d": "Ein Land, das Mitglied in einer Organisation wie der EU ist.",
          "ar": "دولة عضو",
          "cat": "Politik",
          "ex": "In vielen Mitgliedsstaaten bezahlt man mit dem Euro."
        },
        {
          "w": "die Organisation",
          "d": "Eine Gruppe oder ein Verein mit einem gemeinsamen Ziel.",
          "ar": "منظمة",
          "cat": "Politik",
          "ex": "Diese Organisation hilft Familien in Not."
        },
        {
          "w": "die Vertretung",
          "d": "Eine Person oder Gruppe, die für andere spricht und entscheidet.",
          "ar": "التمثيل / الهيئة الممثِّلة",
          "cat": "Politik",
          "ex": "Die Schüler wählen jedes Jahr ihre Vertretung."
        },
        {
          "w": "der Sitz",
          "d": "Der Ort, an dem eine Organisation oder Firma ihr Hauptbüro hat.",
          "ar": "مقرّ",
          "cat": "Politik",
          "ex": "Die politische Vertretung hat ihren Sitz im Rathaus."
        },
        {
          "w": "erfüllen",
          "d": "Eine Aufgabe oder Funktion gut ausführen oder einen Wunsch wahr machen.",
          "ar": "يؤدّي / يحقّق",
          "cat": "Politik",
          "ex": "Die Freiwillige Feuerwehr erfüllt im Dorf eine wichtige Funktion."
        },
        {
          "w": "schließen (einen Vertrag schließen)",
          "d": "Mit anderen eine offizielle Vereinbarung machen.",
          "ar": "يُبرم (عقدًا / معاهدة)",
          "cat": "Politik",
          "ex": "Die beiden Länder haben einen Vertrag über den Handel geschlossen."
        },
        {
          "w": "unterzeichnen",
          "d": "Ein offizielles Dokument mit dem eigenen Namen unterschreiben.",
          "ar": "يوقّع (رسميًا)",
          "cat": "Politik",
          "ex": "Im Jahr 1957 unterzeichneten die Politiker in Rom zwei wichtige Verträge."
        },
        {
          "w": "national",
          "d": "So, dass es zu einem bestimmten Land gehört.",
          "ar": "وطني / قومي",
          "cat": "Politik",
          "ex": "Viele Menschen möchten ihre nationalen Traditionen behalten."
        },
        {
          "w": "die Flucht",
          "d": "Das schnelle Verlassen eines Ortes oder Landes, weil man in Gefahr ist.",
          "ar": "الهروب / اللجوء",
          "cat": "Migration und Flucht",
          "ex": "Nach ihrer Flucht aus dem Kriegsgebiet lebt die Familie jetzt in Köln."
        },
        {
          "w": "der Krieg (Krieg führen)",
          "d": "Ein Kampf mit Waffen zwischen Ländern oder Gruppen.",
          "ar": "حرب",
          "cat": "Migration und Flucht",
          "ex": "Die Länder wollten nie wieder Krieg gegeneinander führen."
        },
        {
          "w": "die Aufnahme",
          "d": "Das Akzeptieren einer Person als neues Mitglied, zum Beispiel in einem Land oder Verein.",
          "ar": "الاستقبال / القبول",
          "cat": "Migration und Flucht",
          "ex": "Die Aufnahme in den Sportverein war ganz einfach."
        },
        {
          "w": "die Integration",
          "d": "Der Prozess, in dem neue Menschen ein Teil der Gesellschaft werden.",
          "ar": "الاندماج",
          "cat": "Migration und Flucht",
          "ex": "Sprachkurse sind für die Integration sehr wichtig."
        },
        {
          "w": "der Migrant",
          "d": "Ein Mann, der sein Land verlassen hat, um in einem anderen Land zu leben.",
          "ar": "مهاجر",
          "cat": "Migration und Flucht",
          "ex": "Viele Migranten lernen abends in der Volkshochschule Deutsch."
        },
        {
          "w": "die Migrantin",
          "d": "Eine Frau, die ihr Land verlassen hat, um in einem anderen Land zu leben.",
          "ar": "مهاجرة",
          "cat": "Migration und Flucht",
          "ex": "Die Migrantin arbeitet heute als Krankenpflegerin in Hamburg."
        },
        {
          "w": "die Apfelsine",
          "d": "Eine runde, orange Frucht mit süßem Saft; ein anderes Wort für Orange.",
          "ar": "برتقالة",
          "cat": "Lebensmittel",
          "ex": "Im Winter esse ich fast jeden Tag eine Apfelsine."
        },
        {
          "w": "die Orange",
          "d": "Eine runde Frucht mit dicker, oranger Schale und viel Saft.",
          "ar": "برتقالة",
          "cat": "Lebensmittel",
          "ex": "Zum Frühstück trinke ich frisch gepressten Orangensaft aus drei Orangen."
        },
        {
          "w": "die Aprikose",
          "d": "Eine kleine, gelb-orange Frucht mit einem großen Kern.",
          "ar": "مشمش",
          "cat": "Lebensmittel",
          "ex": "Aus Aprikosen kann man leckere Marmelade kochen."
        },
        {
          "w": "die Pflaume",
          "d": "Eine kleine, blaue oder rote Frucht mit einem Kern.",
          "ar": "برقوق",
          "cat": "Lebensmittel",
          "ex": "Im Garten meiner Oma wachsen süße Pflaumen."
        },
        {
          "w": "die Zwetschge",
          "d": "Eine dunkelblaue, längliche Pflaume, die man oft für Kuchen benutzt.",
          "ar": "برقوق (نوع أزرق مستطيل)",
          "cat": "Lebensmittel",
          "ex": "Im September backt meine Mutter Kuchen mit Zwetschgen."
        },
        {
          "w": "die Konfitüre",
          "d": "Eine süße Masse aus gekochten Früchten und Zucker, ähnlich wie Marmelade.",
          "ar": "مربّى",
          "cat": "Lebensmittel",
          "ex": "Ich esse mein Brötchen am liebsten mit Butter und Konfitüre."
        },
        {
          "w": "die Semmel",
          "d": "Ein kleines, rundes Brot; so sagt man in Süddeutschland und Österreich für Brötchen.",
          "ar": "خبز صغير مدوّر (عيش فينو)",
          "cat": "Lebensmittel",
          "ex": "Beim Bäcker hole ich jeden Morgen frische Semmeln."
        },
        {
          "w": "das Hörnchen",
          "d": "Ein Gebäck in der Form eines Halbmonds.",
          "ar": "كرواسون / هلالية",
          "cat": "Lebensmittel",
          "ex": "Zum Kaffee gibt es heute ein Hörnchen mit Schokolade."
        },
        {
          "w": "das Croissant",
          "d": "Ein französisches Gebäck aus Blätterteig in der Form eines Halbmonds.",
          "ar": "كرواسون",
          "cat": "Lebensmittel",
          "ex": "Im Café bestelle ich einen Cappuccino und ein Croissant."
        },
        {
          "w": "die Margarine",
          "d": "Ein Fett aus Pflanzen, das man wie Butter benutzt.",
          "ar": "سمن نباتي / مارجرين",
          "cat": "Lebensmittel",
          "ex": "Statt Butter nimmt sie zum Backen Margarine."
        },
        {
          "w": "das Milchprodukt",
          "d": "Ein Lebensmittel, das aus Milch gemacht wird, zum Beispiel Käse oder Joghurt.",
          "ar": "منتج ألبان",
          "cat": "Lebensmittel",
          "ex": "Milchprodukte findet man im Supermarkt im Kühlregal."
        },
        {
          "w": "die Vollmilch",
          "d": "Milch mit dem natürlichen Fett von etwa 3,5 Prozent.",
          "ar": "حليب كامل الدسم",
          "cat": "Lebensmittel",
          "ex": "Für den Pudding brauchst du einen halben Liter Vollmilch."
        },
        {
          "w": "der Quark",
          "d": "Ein weiches, weißes Milchprodukt, ähnlich wie frischer Käse.",
          "ar": "جبن طري (كوارك)",
          "cat": "Lebensmittel",
          "ex": "Zum Frühstück esse ich Quark mit Obst und Honig."
        },
        {
          "w": "die Schlagsahne",
          "d": "Sahne, die man so lange schlägt, bis sie fest wird.",
          "ar": "كريمة مخفوقة (شانتيه)",
          "cat": "Lebensmittel",
          "ex": "Möchtest du den Apfelkuchen mit Schlagsahne?"
        },
        {
          "w": "der Pudding",
          "d": "Eine süße, weiche Nachspeise aus Milch und Zucker.",
          "ar": "بودينغ / مهلبية",
          "cat": "Lebensmittel",
          "ex": "Die Kinder essen am liebsten Pudding mit Vanille."
        },
        {
          "w": "das Hackfleisch",
          "d": "Fleisch, das in sehr kleine Stücke gemahlen wurde.",
          "ar": "لحم مفروم",
          "cat": "Lebensmittel",
          "ex": "Für die Spaghetti Bolognese kaufe ich 500 Gramm Hackfleisch."
        },
        {
          "w": "das Hühnchen",
          "d": "Ein junges Huhn, das man als Fleisch isst.",
          "ar": "دجاج / فرخة",
          "cat": "Lebensmittel",
          "ex": "Heute gibt es Hühnchen mit Reis und Gemüse."
        },
        {
          "w": "der/das Ketchup",
          "d": "Eine dicke, rote Soße aus Tomaten, die man gern zu Pommes isst.",
          "ar": "كاتشب",
          "cat": "Lebensmittel",
          "ex": "Möchtest du Ketchup oder Mayonnaise zu den Pommes?"
        },
        {
          "w": "die Soße",
          "d": "Eine Flüssigkeit, die man zu Fleisch, Nudeln oder Gemüse isst.",
          "ar": "صلصة",
          "cat": "Lebensmittel",
          "ex": "Die Soße zu den Nudeln ist ein bisschen zu scharf."
        },
        {
          "w": "das Gewürz",
          "d": "Ein Pulver oder getrocknete Pflanzenteile, die dem Essen mehr Geschmack geben.",
          "ar": "تابل / بهار",
          "cat": "Lebensmittel",
          "ex": "Kreuzkümmel ist ein typisches Gewürz in der ägyptischen Küche."
        },
        {
          "w": "würzen",
          "d": "Salz, Pfeffer oder Gewürze ins Essen geben, damit es besser schmeckt.",
          "ar": "يتبّل",
          "cat": "Lebensmittel",
          "ex": "Würz die Suppe bitte noch mit etwas Salz und Pfeffer!"
        },
        {
          "w": "die Lieferung",
          "d": "Die Waren, die zu einem Kunden oder Geschäft gebracht werden.",
          "ar": "شحنة / توريد",
          "cat": "Lebensmittel",
          "ex": "Die Lieferung muss noch in den Keller gebracht werden."
        },
        {
          "w": "zunächst",
          "d": "Am Anfang, als Erstes.",
          "ar": "في البداية / أولًا",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Zunächst arbeiteten nur sechs Staaten zusammen."
        },
        {
          "w": "im Lauf (+ G)",
          "d": "Während einer bestimmten Zeit.",
          "ar": "على مدار / خلال",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Im Lauf der Zeit sind immer mehr Länder der EU beigetreten."
        },
        {
          "w": "übrig",
          "d": "So, dass es noch da ist, weil man es nicht gebraucht hat.",
          "ar": "متبقٍّ / فائض",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Nach der Party war noch viel Essen übrig."
        },
        {
          "w": "das Ding",
          "d": "Eine Sache; umgangssprachlich auch etwas, das man besonders gern macht.",
          "ar": "شيء / حاجة",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Theater spielen ist voll mein Ding."
        },
        {
          "w": "verlassen",
          "d": "Von einem Ort weggehen oder sich von einer Person trennen.",
          "ar": "يغادر / يترك",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Viele Menschen mussten wegen des Krieges ihre Heimat verlassen."
        },
        {
          "w": "der Vortrag",
          "d": "Eine Rede über ein bestimmtes Thema vor Publikum.",
          "ar": "محاضرة / عرض شفهي",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Morgen halte ich einen Vortrag über die Geschichte der EU."
        },
        {
          "w": "sichern",
          "d": "Dafür sorgen, dass etwas sicher ist oder bleibt.",
          "ar": "يؤمّن / يضمن",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Eine gute Ausbildung sichert die Zukunft."
        },
        {
          "w": "herausfinden",
          "d": "Durch Suchen, Fragen oder Ausprobieren etwas Neues erfahren.",
          "ar": "يكتشف / يعرف",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Die Kinder wollen herausfinden, wie eine Stadt funktioniert."
        },
        {
          "w": "körperlich",
          "d": "So, dass es den Körper betrifft.",
          "ar": "جسدي / بدني",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Die Arbeit bei der Feuerwehr ist körperlich sehr anstrengend."
        },
        {
          "w": "blind",
          "d": "So, dass man nicht sehen kann.",
          "ar": "أعمى / كفيف",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Mein Nachbar ist blind, aber er findet sich im Viertel sehr gut zurecht."
        },
        {
          "w": "der Humor",
          "d": "Die Fähigkeit, über lustige Dinge und auch über sich selbst zu lachen.",
          "ar": "روح الدعابة / خفة الدم",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Kleine Fehler in einer Präsentation sollte man mit Humor nehmen."
        },
        {
          "w": "die Auswahl (eine Auswahl treffen)",
          "d": "Die Möglichkeit, aus mehreren Dingen das Passende zu nehmen.",
          "ar": "اختيار / تشكيلة",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Nach langem Überlegen hat sie endlich eine Auswahl getroffen."
        },
        {
          "w": "endgültig",
          "d": "So, dass es sich nicht mehr ändert.",
          "ar": "نهائي",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Die Entscheidung ist endgültig, wir ziehen nach Wien."
        },
        {
          "w": "entsorgen",
          "d": "Müll oder alte Dinge so wegbringen, dass sie keinen Schaden machen.",
          "ar": "يتخلّص من (النفايات)",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Alte Batterien muss man richtig entsorgen."
        },
        {
          "w": "erscheinen",
          "d": "Veröffentlicht werden, zum Beispiel als Zeitung oder Buch.",
          "ar": "يصدر / يظهر",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Die Schülerzeitung erscheint jeden Monat."
        },
        {
          "w": "werden (Passiv)",
          "d": "Ein Hilfsverb, mit dem man zusammen mit dem Partizip II das Passiv bildet.",
          "ar": "فعل مساعد لصيغة المبني للمجهول",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Er wird in Erster Hilfe ausgebildet."
        },
        {
          "w": "die Zone",
          "d": "Ein bestimmter Bereich, in dem eigene Regeln gelten.",
          "ar": "منطقة",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Die Spielstadt ist eine elternfreie Zone."
        },
        {
          "w": "die Freiheit",
          "d": "Der Zustand, in dem man selbst entscheiden und tun kann, was man möchte.",
          "ar": "الحرية",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Für viele Menschen ist Freiheit der wichtigste Wert."
        },
        {
          "w": "die Bildung",
          "d": "Das Wissen und Können, das man in der Schule, in der Ausbildung und im Leben lernt.",
          "ar": "التعليم / الثقافة",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Bildung ist der Schlüssel für eine gute Zukunft."
        },
        {
          "w": "die Rücksicht",
          "d": "Ein Verhalten, bei dem man an die Gefühle und Wünsche von anderen denkt.",
          "ar": "مراعاة الآخرين",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Nimm bitte Rücksicht auf die Nachbarn und mach die Musik leiser!"
        },
        {
          "w": "rücksichtsvoll",
          "d": "So, dass man an andere denkt und sie nicht stört.",
          "ar": "يراعي غيره",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Unser neuer Nachbar ist sehr rücksichtsvoll und leise."
        },
        {
          "w": "die Behinderung",
          "d": "Eine körperliche oder geistige Einschränkung, die man oft ein Leben lang hat.",
          "ar": "إعاقة",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Menschen mit Behinderung sollen überall mitmachen können."
        },
        {
          "w": "gehörlos",
          "d": "So, dass man nicht hören kann.",
          "ar": "أصمّ",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Meine Kollegin ist gehörlos und spricht Gebärdensprache."
        },
        {
          "w": "die Einbürgerung",
          "d": "Der Vorgang, bei dem man die Staatsangehörigkeit eines neuen Landes bekommt.",
          "ar": "التجنّس",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Für die Einbürgerung braucht man gute Deutschkenntnisse."
        },
        {
          "w": "die Kriminalität",
          "d": "Alle Straftaten, die an einem Ort oder in einem Land passieren.",
          "ar": "الجريمة / الإجرام",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "In unserem Viertel ist die Kriminalität zum Glück sehr niedrig."
        },
        {
          "w": "sich engagieren (für + A)",
          "d": "Sich aktiv und oft freiwillig für eine Sache oder für andere Menschen einsetzen.",
          "ar": "ينشط / يلتزم (من أجل)",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Meine Schwester engagiert sich für den Umweltschutz."
        },
        {
          "w": "sich einsetzen (für + A)",
          "d": "Viel dafür tun, dass eine Person oder Sache Unterstützung bekommt.",
          "ar": "يدافع عن / يسعى من أجل",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Die Kandidatin setzt sich für die Rechte von Migranten ein."
        },
        {
          "w": "freiwillig",
          "d": "So, dass man etwas tut, weil man es will, und nicht, weil man muss.",
          "ar": "طوعًا / اختياري",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Er hilft freiwillig bei der Feuerwehr mit."
        },
        {
          "w": "die Feuerwehr",
          "d": "Die Organisation, die Brände löscht und bei Unfällen hilft.",
          "ar": "المطافئ / الدفاع المدني",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Bei dem Brand wurde sofort die Feuerwehr alarmiert."
        },
        {
          "w": "alarmieren",
          "d": "Jemanden schnell informieren, dass sofort Hilfe gebraucht wird.",
          "ar": "يستدعي النجدة / يُنذر",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Die Nachbarin hat sofort die Feuerwehr alarmiert."
        },
        {
          "w": "löschen",
          "d": "Ein Feuer stoppen, zum Beispiel mit Wasser.",
          "ar": "يطفئ",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Der Brand wurde nach einer Stunde gelöscht."
        },
        {
          "w": "die Spende",
          "d": "Geld oder Sachen, die man anderen schenkt, um zu helfen.",
          "ar": "تبرّع",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Der Verein lebt vor allem von Spenden."
        },
        {
          "w": "verteilen",
          "d": "Etwas an mehrere Personen geben.",
          "ar": "يوزّع",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Die Helfer verteilen die Lebensmittel an bedürftige Menschen."
        },
        {
          "w": "gründen",
          "d": "Etwas Neues, zum Beispiel einen Verein oder eine Firma, ins Leben rufen.",
          "ar": "يؤسّس",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Die erste deutsche Tafel wurde 1993 in Berlin gegründet."
        },
        {
          "w": "das Rathaus",
          "d": "Das Gebäude, in dem der Bürgermeister und die Stadtverwaltung arbeiten.",
          "ar": "مبنى البلدية",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Der Bürgermeister hat sein Büro im Rathaus."
        },
        {
          "w": "der Bürgermeister",
          "d": "Der Chef einer Stadt oder Gemeinde.",
          "ar": "العمدة / رئيس البلدية",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Der Bürgermeister wird von den Bürgern gewählt."
        },
        {
          "w": "die Steuer",
          "d": "Geld, das man an den Staat bezahlen muss.",
          "ar": "ضريبة",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Vom Gehalt werden jeden Monat Steuern abgezogen."
        },
        {
          "w": "das Gehalt",
          "d": "Das Geld, das man jeden Monat für seine Arbeit bekommt.",
          "ar": "راتب / مرتّب",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Am Ende des Monats bekommt sie ihr Gehalt."
        },
        {
          "w": "die Währung",
          "d": "Das Geld, das in einem Land benutzt wird.",
          "ar": "عملة",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Die Währung in Ägypten ist das Ägyptische Pfund."
        },
        {
          "w": "der Vertrag",
          "d": "Eine schriftliche Vereinbarung zwischen Personen, Firmen oder Ländern.",
          "ar": "عقد / معاهدة",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Der Vertrag von Maastricht wurde 1992 unterzeichnet."
        },
        {
          "w": "die Müllabfuhr",
          "d": "Die Firma oder das Amt, das den Müll abholt.",
          "ar": "جمع القمامة",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Die Müllabfuhr kommt bei uns jeden Dienstag."
        },
        {
          "w": "das Einwohnermeldeamt",
          "d": "Das Amt, bei dem man sich anmeldet, wenn man in eine Stadt zieht.",
          "ar": "مكتب تسجيل السكان",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Nach dem Umzug musst du dich beim Einwohnermeldeamt anmelden."
        },
        {
          "w": "genehmigen",
          "d": "Etwas offiziell erlauben.",
          "ar": "يوافق رسميًا / يصرّح",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Der Antrag wurde vom Amt schnell genehmigt."
        },
        {
          "w": "der Dolmetscher",
          "d": "Eine Person, die mündlich von einer Sprache in eine andere übersetzt.",
          "ar": "مترجم فوري",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Beim Arzt hilft ihr ein Dolmetscher."
        },
        {
          "w": "vermitteln",
          "d": "Zwischen zwei Seiten helfen, damit sie in Kontakt kommen oder sich verstehen.",
          "ar": "يتوسّط / يوفّق بين",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Der Verein vermittelt Paten an Familien."
        },
        {
          "w": "die Präsentation",
          "d": "Ein Vortrag, in dem man ein Thema vor anderen vorstellt.",
          "ar": "عرض تقديمي",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Nach der Präsentation hatte das Publikum viele Fragen."
        },
        {
          "w": "die Aufmerksamkeit",
          "d": "Das genaue Zuhören und Konzentrieren auf etwas.",
          "ar": "الانتباه",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Vielen Dank für Ihre Aufmerksamkeit!"
        },
        {
          "w": "machbar",
          "d": "So, dass man es schaffen kann.",
          "ar": "ممكن التنفيذ",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Das Projekt ist teuer, aber machbar."
        },
        {
          "w": "haltbar",
          "d": "So, dass ein Lebensmittel lange gut bleibt und nicht schlecht wird.",
          "ar": "صالح لمدة طويلة",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Diese Milch ist bis Ende des Monats haltbar."
        },
        {
          "w": "erreichbar",
          "d": "So, dass man dorthin kommen oder jemanden kontaktieren kann.",
          "ar": "يمكن الوصول إليه / متاح",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Ich bin ab 9 Uhr telefonisch erreichbar."
        },
        {
          "w": "kostenlos",
          "d": "So, dass man nichts dafür bezahlen muss.",
          "ar": "مجاني",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Die Hilfe der Schülerpaten ist kostenlos."
        },
        {
          "w": "hilflos",
          "d": "So, dass man sich selbst nicht helfen kann.",
          "ar": "عاجز / بلا حيلة",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Ohne Brille bin ich völlig hilflos."
        },
        {
          "w": "arbeitslos",
          "d": "So, dass man keine Arbeit hat.",
          "ar": "عاطل عن العمل",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Seit einem Jahr ist mein Onkel arbeitslos."
        },
        {
          "w": "der Frieden",
          "d": "Ein Zustand ohne Krieg und Gewalt.",
          "ar": "السلام",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Die EU soll den Frieden in Europa sichern."
        },
        {
          "w": "beitreten",
          "d": "Mitglied in einem Verein, einer Partei oder einer Organisation werden.",
          "ar": "ينضمّ (إلى)",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Kroatien ist der EU im Jahr 2013 beigetreten."
        },
        {
          "w": "die Behörde",
          "d": "Eine staatliche Stelle, die öffentliche Aufgaben erledigt, zum Beispiel ein Amt.",
          "ar": "جهة حكومية / مصلحة",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Bei Behördengängen helfen die Paten den Familien."
        },
        {
          "w": "zuständig (für + A)",
          "d": "So, dass man für eine bestimmte Aufgabe verantwortlich ist und darüber entscheiden darf.",
          "ar": "مختص / مسؤول (عن)",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Für Reisepässe ist das Bürgeramt zuständig."
        },
        {
          "w": "der Stadtrat",
          "d": "Eine gewählte Gruppe von Personen, die in einer Stadt wichtige Entscheidungen trifft.",
          "ar": "المجلس البلدي",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Der Stadtrat hat beschlossen, einen neuen Park zu bauen."
        },
        {
          "w": "recycelbar",
          "d": "So, dass man ein Material noch einmal verwenden und daraus etwas Neues machen kann.",
          "ar": "قابل لإعادة التدوير",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Diese Verpackung ist zu 100 Prozent recycelbar."
        },
        {
          "w": "problemlos",
          "d": "So, dass es keine Schwierigkeiten gibt.",
          "ar": "بدون مشاكل / بسهولة",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "In der EU kann man problemlos in einem anderen Land studieren."
        }
      ],
      "visual": {
        "src": "assets/chapters/chapter-10.webp",
        "alt": "Kapitel 10 · Miteinander",
        "caption": "Miteinander"
      }
    },
    {
      "num": 11,
      "route": "b1.1/k11",
      "title": "Stadt, Land, Fluss",
      "subtitle": "Netzwerk neu B1.2 · Kapitel 11",
      "intro": "Wortschatz aus Netzwerk neu B1.2: Stadt, Land, Fluss.",
      "introAr": "مفردات الوحدة 11 من Netzwerk neu B1.2: Stadt, Land, Fluss",
      "badges": [
        "B1.2",
        "Kapitel 11",
        "165 Wörter"
      ],
      "goals": [],
      "vocabSummary": {
        "title": "Wortschatz mit Erklärung",
        "note": "كل بطاقة فيها شرح ألماني واضح، مثال كامل، والترجمة العربية."
      },
      "vocab": [
        {
          "w": "der Fußgänger",
          "d": "Eine Person, die zu Fuß auf der Straße unterwegs ist.",
          "ar": "الماشي / المشاة",
          "cat": "In der Stadt",
          "ex": "Die Ampel ist grün, und die Fußgänger gehen über die Straße."
        },
        {
          "w": "der Stadtbummel",
          "d": "Ein gemütlicher Spaziergang durch die Stadt, bei dem man sich Geschäfte und Plätze ansieht.",
          "ar": "تمشية / فسحة في المدينة",
          "cat": "In der Stadt",
          "ex": "Am Samstag machen wir einen Stadtbummel durch die Altstadt."
        },
        {
          "w": "das Schaufenster",
          "d": "Ein großes Fenster eines Geschäfts, in dem man die Waren zeigt.",
          "ar": "فاترينة / واجهة المحل",
          "cat": "In der Stadt",
          "ex": "Am Sonntag sind die Läden zu, aber man kann sich die Schaufenster ansehen."
        },
        {
          "w": "anschauen",
          "d": "Etwas mit Interesse ansehen.",
          "ar": "يتفرج على / يشاهد",
          "cat": "In der Stadt",
          "ex": "Nach dem Mittagessen schauen wir uns das alte Rathaus an."
        },
        {
          "w": "das Bürogebäude",
          "d": "Ein großes Haus, in dem viele Firmen oder Ämter ihre Büros haben.",
          "ar": "مبنى مكاتب",
          "cat": "In der Stadt",
          "ex": "Im neuen Bürogebäude am Bahnhof arbeiten über tausend Menschen."
        },
        {
          "w": "das Reinigungsfahrzeug",
          "d": "Ein Fahrzeug, das Straßen und Plätze sauber macht.",
          "ar": "عربية تنظيف الشوارع",
          "cat": "In der Stadt",
          "ex": "Jeden Morgen um fünf fährt ein Reinigungsfahrzeug durch unsere Straße."
        },
        {
          "w": "abbiegen",
          "d": "Die Richtung ändern und nach links oder rechts in eine andere Straße gehen oder fahren.",
          "ar": "ينعطف / يلف (يمين أو شمال)",
          "cat": "In der Stadt",
          "ex": "An der nächsten Ampel müssen Sie links abbiegen."
        },
        {
          "w": "das Tempo",
          "d": "Die Geschwindigkeit, mit der sich etwas bewegt oder passiert.",
          "ar": "السرعة / الإيقاع",
          "cat": "In der Stadt",
          "ex": "In der Großstadt ist das Tempo oft sehr hoch."
        },
        {
          "w": "der Schmutz",
          "d": "Etwas, das Dinge oder Orte unsauber macht, zum Beispiel Erde oder Staub.",
          "ar": "الوساخة / القذارة",
          "cat": "In der Stadt",
          "ex": "Nach dem Fest lag viel Schmutz auf dem Marktplatz."
        },
        {
          "w": "der Dreck",
          "d": "Ein umgangssprachliches Wort für Schmutz.",
          "ar": "الوساخة / الزبالة (عامية)",
          "cat": "In der Stadt",
          "ex": "Wer macht eigentlich den Dreck auf der Straße weg?"
        },
        {
          "w": "der Stadtmensch",
          "d": "Eine Person, die gern in der Stadt lebt und das Stadtleben braucht.",
          "ar": "ابن مدينة / بيحب عيشة المدينة",
          "cat": "In der Stadt",
          "ex": "Ich bin ein echter Stadtmensch und brauche Cafés und Kinos um mich herum."
        },
        {
          "w": "der Landmensch",
          "d": "Eine Person, die lieber auf dem Land als in der Stadt lebt.",
          "ar": "ابن ريف / بيحب عيشة الريف",
          "cat": "In der Stadt",
          "ex": "Meine Schwester ist ein Landmensch und möchte nie in einer Großstadt wohnen."
        },
        {
          "w": "der/die Obdachlose",
          "d": "Eine Person, die keine Wohnung hat und oft auf der Straße lebt.",
          "ar": "مشرد / شخص بلا مأوى",
          "cat": "In der Stadt",
          "ex": "Im Winter können Obdachlose in einer Notunterkunft übernachten."
        },
        {
          "w": "das Freizeitangebot",
          "d": "Alle Möglichkeiten, die es an einem Ort für die Freizeit gibt.",
          "ar": "أنشطة وقت الفراغ المتاحة",
          "cat": "In der Stadt",
          "ex": "Das Freizeitangebot für Jugendliche ist in unserer Stadt leider klein."
        },
        {
          "w": "der Rand",
          "d": "Der äußere Teil eines Ortes oder einer Fläche.",
          "ar": "الطرف / الأطراف",
          "cat": "In der Stadt",
          "ex": "Wir wohnen am Rand der Stadt, direkt neben einem Wald."
        },
        {
          "w": "städtisch",
          "d": "So, dass es zur Stadt gehört oder von der Stadt organisiert wird.",
          "ar": "تابع للمدينة / بلدي",
          "cat": "In der Stadt",
          "ex": "Mein Onkel arbeitet im städtischen Bauhof."
        },
        {
          "w": "das Garagentor",
          "d": "Die große Tür einer Garage.",
          "ar": "باب الجراج",
          "cat": "In der Stadt",
          "ex": "Das Garagentor öffnet sich automatisch, wenn das Auto kommt."
        },
        {
          "w": "herunterfahren",
          "d": "Sich nach unten bewegen oder nach unten fahren.",
          "ar": "ينزل لتحت (باب / عربية)",
          "cat": "In der Stadt",
          "ex": "Das automatische Tor fährt nach zwei Minuten wieder herunter."
        },
        {
          "w": "der Dienst",
          "d": "Die Zeit, in der man bei der Arbeit ist und seine Aufgaben erfüllt.",
          "ar": "الخدمة / وقت الشغل",
          "cat": "Im Krankenhaus",
          "ex": "Der Pfleger ist seit Mitternacht im Dienst."
        },
        {
          "w": "der Nachtdienst",
          "d": "Arbeit, die man in der Nacht macht, zum Beispiel im Krankenhaus.",
          "ar": "نوبتجية ليلية",
          "cat": "Im Krankenhaus",
          "ex": "Diese Woche hat meine Mutter Nachtdienst im Krankenhaus."
        },
        {
          "w": "die Schicht",
          "d": "Ein fester Teil des Arbeitstages, in dem eine Gruppe von Personen arbeitet.",
          "ar": "الوردية / الشيفت",
          "cat": "Im Krankenhaus",
          "ex": "Um sieben Uhr ist seine Schicht zu Ende."
        },
        {
          "w": "die Frühschicht",
          "d": "Die Schicht, die sehr früh am Morgen beginnt.",
          "ar": "الوردية الصباحية",
          "cat": "Im Krankenhaus",
          "ex": "Die Kollegen von der Frühschicht kommen um sechs Uhr."
        },
        {
          "w": "die Übergabe",
          "d": "Der Moment, in dem man Informationen oder Aufgaben an eine andere Person weitergibt.",
          "ar": "التسليم (تسليم الوردية)",
          "cat": "Im Krankenhaus",
          "ex": "Bei der Übergabe erzählt der Pfleger, wie es den Patienten geht."
        },
        {
          "w": "unruhig",
          "d": "Nicht ruhig, mit vielen Problemen oder viel Bewegung.",
          "ar": "مش هادي / قلق",
          "cat": "Im Krankenhaus",
          "ex": "Die Nacht war unruhig, weil viele Patienten Hilfe brauchten."
        },
        {
          "w": "schwer (ein schwerer Unfall)",
          "d": "Sehr schlimm und ernst, mit großen Folgen.",
          "ar": "خطير / شديد",
          "cat": "Im Krankenhaus",
          "ex": "In der Nacht gab es in der Innenstadt einen schweren Unfall."
        },
        {
          "w": "einliefern",
          "d": "Einen kranken oder verletzten Menschen ins Krankenhaus bringen.",
          "ar": "ينقل (حد) للمستشفى / يدخّله المستشفى",
          "cat": "Im Krankenhaus",
          "ex": "Nach dem Unfall wurden drei Verletzte ins Krankenhaus eingeliefert."
        },
        {
          "w": "der/die Verletzte",
          "d": "Eine Person, die zum Beispiel bei einem Unfall verletzt wurde.",
          "ar": "مصاب / جريح",
          "cat": "Im Krankenhaus",
          "ex": "Der Notarzt kümmerte sich sofort um die Verletzten."
        },
        {
          "w": "die Backstube",
          "d": "Der Raum in einer Bäckerei, in dem Brot und Kuchen gebacken werden.",
          "ar": "مكان الخبز في الفرن / المخبز",
          "cat": "In der Bäckerei",
          "ex": "In der Backstube ist es warm und es riecht nach frischem Brot."
        },
        {
          "w": "der Korb",
          "d": "Ein Behälter mit Griff, in dem man Dinge trägt, zum Beispiel Brot.",
          "ar": "سلة / سَبَت",
          "cat": "In der Bäckerei",
          "ex": "Die Fahrerin trägt einen Korb mit frischem Brot zum Auto."
        },
        {
          "w": "laden",
          "d": "Etwas in ein Fahrzeug bringen, um es zu transportieren.",
          "ar": "يحمّل (حاجة في عربية)",
          "cat": "In der Bäckerei",
          "ex": "Der Fahrer lädt die Kisten mit Brötchen ins Auto."
        },
        {
          "w": "konzentriert",
          "d": "Mit voller Aufmerksamkeit bei einer Sache.",
          "ar": "مركّز",
          "cat": "In der Bäckerei",
          "ex": "In der Backstube arbeiten alle schnell und konzentriert."
        },
        {
          "w": "das Ranking",
          "d": "Eine Liste, die zeigt, wer oder was auf welchem Platz steht.",
          "ar": "تصنيف / ترتيب",
          "cat": "Städte-Ranking",
          "ex": "Wien liegt im Ranking der lebenswertesten Städte oft ganz vorne."
        },
        {
          "w": "die Fachleute",
          "d": "Personen, die auf einem Gebiet viel Wissen und Erfahrung haben.",
          "ar": "خبراء / متخصصين",
          "cat": "Städte-Ranking",
          "ex": "Fachleute haben die Lebensqualität von vierzig Städten untersucht."
        },
        {
          "w": "im Vordergrund stehen",
          "d": "Am wichtigsten sein und die größte Rolle spielen.",
          "ar": "يكون في المقدمة / هو الأهم",
          "cat": "Städte-Ranking",
          "ex": "Bei der Studie stand die Work-Life-Balance im Vordergrund."
        },
        {
          "w": "der Mittelpunkt",
          "d": "Das Zentrum von etwas oder das Wichtigste, um das sich alles dreht.",
          "ar": "المركز / محور الاهتمام",
          "cat": "Städte-Ranking",
          "ex": "Im neuen Viertel stehen Kunst und Kultur im Mittelpunkt."
        },
        {
          "w": "abhängen (von + D)",
          "d": "Durch eine andere Sache bestimmt werden.",
          "ar": "يعتمد على / يتوقف على",
          "cat": "Städte-Ranking",
          "ex": "Wie gut man in einer Stadt lebt, hängt von vielen Faktoren ab."
        },
        {
          "w": "berücksichtigen",
          "d": "An etwas denken und es bei einer Entscheidung beachten.",
          "ar": "يراعي / ياخد في الاعتبار",
          "cat": "Städte-Ranking",
          "ex": "Bei der Studie wurde auch berücksichtigt, wie viel der Staat für Bildung ausgibt."
        },
        {
          "w": "werten",
          "d": "Etwas beurteilen und ihm Punkte oder einen Wert geben.",
          "ar": "يقيّم / يحتسب",
          "cat": "Städte-Ranking",
          "ex": "Das Wetter wird im Ranking nicht gewertet."
        },
        {
          "w": "betreffen",
          "d": "Mit einer Person oder Sache direkt zu tun haben.",
          "ar": "يخص / يتعلق بـ",
          "cat": "Städte-Ranking",
          "ex": "Diese Punkte betreffen nur die jeweilige Stadt."
        },
        {
          "w": "die Work-Life-Balance",
          "d": "Ein gutes Gleichgewicht zwischen Arbeit und Privatleben.",
          "ar": "التوازن بين الشغل والحياة الخاصة",
          "cat": "Lebensqualität einer Stadt",
          "ex": "Für eine bessere Work-Life-Balance arbeite ich nur noch vier Tage pro Woche."
        },
        {
          "w": "gesellschaftlich",
          "d": "So, dass es mit der Gesellschaft zu tun hat.",
          "ar": "اجتماعي / مجتمعي",
          "cat": "Lebensqualität einer Stadt",
          "ex": "Welche gesellschaftlichen Werte sind in Ihrem Land wichtig?"
        },
        {
          "w": "die Gender-Gerechtigkeit",
          "d": "Gleiche Rechte und Chancen für alle Geschlechter.",
          "ar": "العدالة بين الجنسين",
          "cat": "Lebensqualität einer Stadt",
          "ex": "Zur Gender-Gerechtigkeit gehört der gleiche Lohn für Frauen und Männer."
        },
        {
          "w": "die Diversität",
          "d": "Die Vielfalt von Menschen, zum Beispiel bei Herkunft, Alter oder Religion.",
          "ar": "التنوع",
          "cat": "Lebensqualität einer Stadt",
          "ex": "Unsere Firma legt großen Wert auf Diversität."
        },
        {
          "w": "das Gesundheitssystem",
          "d": "Alle Einrichtungen und Regeln für die medizinische Versorgung in einem Land.",
          "ar": "النظام الصحي",
          "cat": "Lebensqualität einer Stadt",
          "ex": "In Deutschland haben fast alle Menschen Zugang zum Gesundheitssystem."
        },
        {
          "w": "die Kinderbetreuung",
          "d": "Die Betreuung von Kindern, während die Eltern arbeiten.",
          "ar": "رعاية الأطفال",
          "cat": "Lebensqualität einer Stadt",
          "ex": "Ohne gute Kinderbetreuung können viele Eltern nicht arbeiten."
        },
        {
          "w": "die Elternzeit",
          "d": "Eine Zeit, in der Mutter oder Vater nach der Geburt zu Hause beim Kind bleiben können.",
          "ar": "إجازة رعاية الطفل (للأب أو الأم)",
          "cat": "Lebensqualität einer Stadt",
          "ex": "Mein Kollege nimmt nach der Geburt seiner Tochter sechs Monate Elternzeit."
        },
        {
          "w": "die Intensität",
          "d": "Die Stärke, mit der etwas passiert.",
          "ar": "الشدة / الكثافة",
          "cat": "Lebensqualität einer Stadt",
          "ex": "Die Intensität der Arbeit ist in manchen Städten sehr hoch."
        },
        {
          "w": "die Arbeitslosigkeit",
          "d": "Die Situation, dass Menschen keine Arbeit haben.",
          "ar": "البطالة",
          "cat": "Lebensqualität einer Stadt",
          "ex": "Die Arbeitslosigkeit in unserer Region ist im letzten Jahr gesunken."
        },
        {
          "w": "die Hochschule",
          "d": "Eine Universität oder eine ähnliche Schule, an der man studieren kann.",
          "ar": "جامعة / معهد عالي",
          "cat": "Lebensqualität einer Stadt",
          "ex": "In vielen Ländern kostet das Studium an einer Hochschule kein Geld."
        },
        {
          "w": "der Zugang",
          "d": "Die Möglichkeit, etwas zu benutzen oder irgendwohin zu kommen.",
          "ar": "إمكانية الوصول / الدخول",
          "cat": "Lebensqualität einer Stadt",
          "ex": "Alle Kinder sollten Zugang zu guter Bildung haben."
        },
        {
          "w": "festlegen",
          "d": "Etwas genau und verbindlich bestimmen.",
          "ar": "يحدد / يقرر",
          "cat": "Lebensqualität einer Stadt",
          "ex": "Gesetze legen fest, wie viel Urlaub man bekommt."
        },
        {
          "w": "rechtlich",
          "d": "So, dass es mit den Gesetzen zu tun hat.",
          "ar": "قانوني",
          "cat": "Lebensqualität einer Stadt",
          "ex": "Die rechtliche Situation ist in jedem Land anders."
        },
        {
          "w": "die Stadträtin",
          "d": "Eine Frau, die im Parlament einer Stadt Politik macht.",
          "ar": "عضوة المجلس البلدي",
          "cat": "Projekte für die Stadt",
          "ex": "Die Stadträtin für Kultur möchte einen Treffpunkt für alle Bürger bauen."
        },
        {
          "w": "der Stadtrat",
          "d": "Das Parlament einer Stadt oder ein Mann, der dort Mitglied ist.",
          "ar": "المجلس البلدي / عضو المجلس البلدي",
          "cat": "Projekte für die Stadt",
          "ex": "Der Stadtrat hat für neue Projekte nur zwanzig Millionen Euro."
        },
        {
          "w": "das Budget",
          "d": "Das Geld, das für einen bestimmten Zweck zur Verfügung steht.",
          "ar": "الميزانية",
          "cat": "Projekte für die Stadt",
          "ex": "Das Budget reicht leider nicht für alle Projekte."
        },
        {
          "w": "der Wohnbau",
          "d": "Der Bau von Häusern und Wohnungen.",
          "ar": "بناء المساكن / الإسكان",
          "cat": "Projekte für die Stadt",
          "ex": "Die Stadt will mehr Geld in den Wohnbau investieren."
        },
        {
          "w": "der Umbau",
          "d": "Die Veränderung eines Gebäudes, damit man es anders nutzen kann.",
          "ar": "إعادة البناء / تعديل المبنى",
          "cat": "Projekte für die Stadt",
          "ex": "Der Umbau von Büros zu Wohnungen kostet sechs Millionen Euro."
        },
        {
          "w": "die Renovierung",
          "d": "Die Arbeit, mit der man ein altes Gebäude wieder schön und modern macht.",
          "ar": "التجديد / الترميم",
          "cat": "Projekte für die Stadt",
          "ex": "Die Renovierung der beiden alten Schulen dauert zwei Jahre."
        },
        {
          "w": "die Initiative",
          "d": "Ein Projekt, das Menschen selbst starten, um etwas zu verbessern.",
          "ar": "مبادرة",
          "cat": "Projekte für die Stadt",
          "ex": "Bei dieser sozialen Initiative lernen Flüchtlinge, Fahrräder zu reparieren."
        },
        {
          "w": "die Kita",
          "d": "Ein Ort, wo kleine Kinder tagsüber betreut werden.",
          "ar": "حضانة",
          "cat": "Projekte für die Stadt",
          "ex": "Unsere Tochter geht seit Januar in die Kita."
        },
        {
          "w": "eine Diskussion führen",
          "d": "Mit anderen über ein Thema sprechen und Argumente austauschen.",
          "ar": "يعمل نقاش / يدير مناقشة",
          "cat": "Eine Diskussion führen",
          "ex": "Im Stadtrat führen sie eine lange Diskussion über den Verkehr."
        },
        {
          "w": "die Diskussion",
          "d": "Ein Gespräch, in dem Menschen ihre Meinungen und Argumente austauschen.",
          "ar": "نقاش / مناقشة",
          "cat": "Eine Diskussion führen",
          "ex": "Die Diskussion über das neue Parkhaus war sehr emotional."
        },
        {
          "w": "eingehen (auf + A)",
          "d": "Auf eine Meinung oder Frage reagieren und darüber sprechen.",
          "ar": "يتناول / يرد على (رأي أو سؤال)",
          "cat": "Eine Diskussion führen",
          "ex": "Der Experte ist leider nicht auf meine Frage eingegangen."
        },
        {
          "w": "recht geben",
          "d": "Sagen, dass eine andere Person mit ihrer Meinung richtigliegt.",
          "ar": "يدّي الحق لـ / يوافق",
          "cat": "Eine Diskussion führen",
          "ex": "Da gebe ich Ihnen recht, die Mieten sind wirklich zu hoch."
        },
        {
          "w": "außer Acht lassen",
          "d": "Etwas nicht beachten oder nicht daran denken.",
          "ar": "يتجاهل / ما ياخدش في الاعتبار",
          "cat": "Eine Diskussion führen",
          "ex": "Wir dürfen die Kosten nicht außer Acht lassen."
        },
        {
          "w": "vermitteln",
          "d": "Zwischen Personen mit verschiedenen Meinungen helfen, eine Lösung zu finden.",
          "ar": "يتوسط (بين طرفين)",
          "cat": "Eine Diskussion führen",
          "ex": "Die Moderatorin versucht, zwischen den beiden Gruppen zu vermitteln."
        },
        {
          "w": "unterbrechen",
          "d": "In ein Gespräch hineinreden, sodass eine andere Person nicht weitersprechen kann.",
          "ar": "يقاطع",
          "cat": "Eine Diskussion führen",
          "ex": "Bitte unterbrechen Sie mich nicht, ich bin noch nicht fertig."
        },
        {
          "w": "ausreden",
          "d": "Zu Ende sprechen.",
          "ar": "يكمّل كلامه للآخر",
          "cat": "Eine Diskussion führen",
          "ex": "Lassen Sie mich bitte ausreden!"
        },
        {
          "w": "fortsetzen",
          "d": "Mit etwas weitermachen, nachdem man eine Pause gemacht hat.",
          "ar": "يكمّل / يواصل",
          "cat": "Eine Diskussion führen",
          "ex": "Nach der Pause setzen wir die Diskussion fort."
        },
        {
          "w": "der Tourismus",
          "d": "Das Reisen von Menschen in ihrer Freizeit und alles, was damit zu tun hat.",
          "ar": "السياحة",
          "cat": "Eine Stadt kennenlernen",
          "ex": "Der Tourismus ist für viele Städte am Meer sehr wichtig."
        },
        {
          "w": "die Rundfahrt",
          "d": "Eine Fahrt durch eine Stadt oder Gegend, bei der man die Sehenswürdigkeiten sieht.",
          "ar": "جولة (بعربية أو مركب)",
          "cat": "Eine Stadt kennenlernen",
          "ex": "Wir haben an einer Rundfahrt mit dem Boot teilgenommen."
        },
        {
          "w": "rumfahren",
          "d": "Umgangssprachlich: ohne festes Ziel durch eine Gegend fahren.",
          "ar": "يلف / يتجول (بعجلة أو عربية)",
          "cat": "Eine Stadt kennenlernen",
          "ex": "Ich bin die ganze Woche mit dem Fahrrad in der Stadt rumgefahren."
        },
        {
          "w": "das Wahrzeichen",
          "d": "Ein bekanntes Gebäude oder Symbol, an dem man eine Stadt erkennt.",
          "ar": "رمز المدينة / معلم مميز",
          "cat": "Eine Stadt kennenlernen",
          "ex": "Das Brandenburger Tor ist das Wahrzeichen von Berlin."
        },
        {
          "w": "das Denkmal",
          "d": "Eine Statue oder ein Bauwerk, das an eine Person oder ein Ereignis erinnert.",
          "ar": "نصب تذكاري / أثر",
          "cat": "Eine Stadt kennenlernen",
          "ex": "Vor dem Rathaus steht ein Denkmal für einen berühmten Dichter."
        },
        {
          "w": "die Fassade",
          "d": "Die vordere Außenseite eines Gebäudes.",
          "ar": "واجهة المبنى",
          "cat": "Eine Stadt kennenlernen",
          "ex": "Die Häuser in der Altstadt haben bunte Fassaden."
        },
        {
          "w": "die Gasse",
          "d": "Eine kleine, schmale Straße, oft in einer Altstadt.",
          "ar": "حارة / زقاق",
          "cat": "Eine Stadt kennenlernen",
          "ex": "Wir haben uns in den engen Gassen der Altstadt verlaufen."
        },
        {
          "w": "schmal",
          "d": "Nicht breit.",
          "ar": "ضيق",
          "cat": "Eine Stadt kennenlernen",
          "ex": "Die Straße ist so schmal, dass kein Auto durchpasst."
        },
        {
          "w": "mittendrin",
          "d": "Genau in der Mitte von etwas.",
          "ar": "في النص بالظبط / في قلب المكان",
          "cat": "Eine Stadt kennenlernen",
          "ex": "Die Altstadt ist sehr schön, und mittendrin steht eine alte Kirche."
        },
        {
          "w": "fern",
          "d": "Weit weg.",
          "ar": "بعيد",
          "cat": "Eine Stadt kennenlernen",
          "ex": "Oben auf dem Berg ist man fern vom Lärm der Stadt."
        },
        {
          "w": "um ... herum",
          "d": "Rund um einen Ort oder eine Sache.",
          "ar": "حوالين",
          "cat": "Eine Stadt kennenlernen",
          "ex": "Um die Altstadt herum gibt es viele kleine Parks."
        },
        {
          "w": "springen",
          "d": "Sich mit den Beinen kräftig vom Boden abstoßen und durch die Luft bewegen.",
          "ar": "ينط / يقفز",
          "cat": "Eine Stadt kennenlernen",
          "ex": "Im Sommer springen viele junge Leute von der Brücke in den Fluss."
        },
        {
          "w": "steigen",
          "d": "Nach oben gehen, zum Beispiel auf einen Turm oder einen Berg.",
          "ar": "يطلع / يصعد",
          "cat": "Eine Stadt kennenlernen",
          "ex": "Wir sind auf den Turm gestiegen und hatten einen tollen Ausblick."
        },
        {
          "w": "rauffahren",
          "d": "Umgangssprachlich: nach oben fahren.",
          "ar": "يطلع لفوق (بعربية أو قطر)",
          "cat": "Eine Stadt kennenlernen",
          "ex": "Wer nicht wandern will, kann mit der Bahn auf den Berg rauffahren."
        },
        {
          "w": "rollen",
          "d": "Sich auf Rädern vorwärts bewegen.",
          "ar": "يمشي على عجل / يتدحرج",
          "cat": "Eine Stadt kennenlernen",
          "ex": "Mit dem Fahrrad rollen wir gemütlich durch die Stadt."
        },
        {
          "w": "der/die Einheimische",
          "d": "Eine Person, die an einem Ort wohnt und dort zu Hause ist.",
          "ar": "ابن البلد / من أهل المكان",
          "cat": "Eine Stadt kennenlernen",
          "ex": "Die Einheimischen kennen die besten Restaurants der Stadt."
        },
        {
          "w": "der Dialekt",
          "d": "Eine regionale Form einer Sprache.",
          "ar": "لهجة",
          "cat": "Eine Stadt kennenlernen",
          "ex": "Im Dorf sprechen viele ältere Leute noch Dialekt."
        },
        {
          "w": "das Billett",
          "d": "Ein Wort aus dem Schweizerdeutschen für Fahrkarte.",
          "ar": "تذكرة (بالسويسري)",
          "cat": "Eine Stadt kennenlernen",
          "ex": "Hast du schon ein Billett für die Straßenbahn gekauft?"
        },
        {
          "w": "das Velo",
          "d": "Ein Wort aus dem Schweizerdeutschen für Fahrrad.",
          "ar": "عجلة / دراجة (بالسويسري)",
          "cat": "Eine Stadt kennenlernen",
          "ex": "In Zürich fahren viele Leute mit dem Velo zur Arbeit."
        },
        {
          "w": "sich auf den Weg machen",
          "d": "Losgehen oder losfahren.",
          "ar": "ينطلق / يتحرك",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Um fünf Uhr macht sich das Reinigungsfahrzeug auf den Weg."
        },
        {
          "w": "hineingehen",
          "d": "In einen Raum oder ein Gebäude gehen.",
          "ar": "يدخل (لجوه)",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Die Tür war offen, also bin ich einfach hineingegangen."
        },
        {
          "w": "hindern (an + D)",
          "d": "Machen, dass eine Person etwas nicht tun kann.",
          "ar": "يمنع (من)",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Niemand hindert den Mann daran, in der Garage zu schlafen."
        },
        {
          "w": "der Sozialarbeiter",
          "d": "Eine Person, die beruflich Menschen in schwierigen Situationen hilft.",
          "ar": "أخصائي اجتماعي",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Der Sozialarbeiter betreut Jugendliche in unserem Viertel."
        },
        {
          "w": "der Flüchtling",
          "d": "Eine Person, die ihr Land verlassen musste, zum Beispiel wegen Krieg.",
          "ar": "لاجئ",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Viele Flüchtlinge lernen in Abendkursen Deutsch."
        },
        {
          "w": "angehen (Das geht keinen etwas an.)",
          "d": "Mit einer Person zu tun haben, sodass sie sich dafür interessieren darf.",
          "ar": "يخص (حد) / «مالوش دعوة»",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Was ich in meiner Freizeit mache, geht keinen etwas an."
        },
        {
          "w": "irgendein, irgendeine, irgendwelche",
          "d": "Ein Wort für eine Person oder Sache, die man nicht genau kennt oder die egal ist.",
          "ar": "أي (واحد / حاجة)",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Kennst du irgendein nettes Café in der Nähe?"
        },
        {
          "w": "anscheinend",
          "d": "So, wie es aussieht.",
          "ar": "على ما يبدو / باين",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Anscheinend bin ich doch ein Landmensch."
        },
        {
          "w": "fließen",
          "d": "Sich als Wasser gleichmäßig in eine Richtung bewegen.",
          "ar": "يجري (المية) / يسيل",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Der Neckar fließt mitten durch Tübingen."
        },
        {
          "w": "eindeutig",
          "d": "Ganz klar, ohne Zweifel.",
          "ar": "بوضوح / من غير شك",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Das Leben in der Stadt ist eindeutig teurer als auf dem Land."
        },
        {
          "w": "das Angebot",
          "d": "Alles, was man an einem Ort kaufen, nutzen oder machen kann.",
          "ar": "العرض / الحاجات المتاحة",
          "cat": "Leben in der Stadt",
          "ex": "Das kulturelle Angebot in Leipzig ist sehr groß."
        },
        {
          "w": "die Atmosphäre",
          "d": "Die Stimmung, die an einem Ort herrscht.",
          "ar": "الجو / الأجواء",
          "cat": "Leben in der Stadt",
          "ex": "Die Atmosphäre in den kleinen Cafés ist sehr gemütlich."
        },
        {
          "w": "die Aussicht",
          "d": "Das, was man von einem hohen Ort oder aus einem Fenster sehen kann.",
          "ar": "الإطلالة / المنظر",
          "cat": "Leben in der Stadt",
          "ex": "Vom zwölften Stock hat man eine super Aussicht."
        },
        {
          "w": "die Fußgängerzone",
          "d": "Ein Teil der Stadt, in dem keine Autos fahren dürfen.",
          "ar": "منطقة مشاة",
          "cat": "Leben in der Stadt",
          "ex": "In der Fußgängerzone gibt es viele Geschäfte und Cafés."
        },
        {
          "w": "das Hochhaus",
          "d": "Ein sehr hohes Gebäude mit vielen Stockwerken.",
          "ar": "برج / عمارة عالية",
          "cat": "Leben in der Stadt",
          "ex": "Wir wohnen in einem Hochhaus im zwölften Stock."
        },
        {
          "w": "der Bewohner",
          "d": "Eine Person, die an einem Ort oder in einem Haus wohnt.",
          "ar": "ساكن / مقيم",
          "cat": "Leben in der Stadt",
          "ex": "Die Bewohner des Viertels wünschen sich mehr Grünflächen."
        },
        {
          "w": "der Club",
          "d": "Ein Ort, an dem man abends Musik hört und tanzt.",
          "ar": "كلوب / نادي ليلي",
          "cat": "Leben in der Stadt",
          "ex": "Am Wochenende gehen wir in einen Club im Zentrum."
        },
        {
          "w": "die Erholung",
          "d": "Die Zeit, in der man sich ausruht und neue Kraft bekommt.",
          "ar": "الراحة / الاستجمام",
          "cat": "Leben in der Stadt",
          "ex": "Zur Erholung fahre ich am Wochenende in den Wald."
        },
        {
          "w": "das Fahrzeug",
          "d": "Ein Gerät mit Rädern und oft mit Motor, mit dem man fährt, zum Beispiel ein Auto.",
          "ar": "مركبة / عربية",
          "cat": "Leben in der Stadt",
          "ex": "In der Innenstadt sind sehr viele Fahrzeuge unterwegs."
        },
        {
          "w": "das Unternehmen",
          "d": "Eine Firma.",
          "ar": "شركة / مؤسسة",
          "cat": "Leben in der Stadt",
          "ex": "In unserem Unternehmen arbeiten tausend Mitarbeiter."
        },
        {
          "w": "die Kneipe",
          "d": "Ein einfaches Lokal, in dem man vor allem etwas trinkt.",
          "ar": "بار صغير / قهوة",
          "cat": "Leben in der Stadt",
          "ex": "Nach der Arbeit treffen wir uns oft in der Kneipe um die Ecke."
        },
        {
          "w": "der Verkehr",
          "d": "Alle Autos, Busse, Fahrräder und Menschen, die auf den Straßen unterwegs sind.",
          "ar": "المرور / الزحمة",
          "cat": "Leben in der Stadt",
          "ex": "Morgens um acht ist der Verkehr in der Stadt besonders stark."
        },
        {
          "w": "die Lage",
          "d": "Der Ort, an dem etwas liegt.",
          "ar": "الموقع",
          "cat": "Leben in der Stadt",
          "ex": "Die Lage der Wohnung direkt am Park ist toll."
        },
        {
          "w": "der Lärm",
          "d": "Laute, unangenehme Geräusche.",
          "ar": "الدوشة / الضوضاء",
          "cat": "Leben in der Stadt",
          "ex": "Bei diesem Lärm kann ich mich nicht entspannen."
        },
        {
          "w": "die Mobilität",
          "d": "Die Möglichkeit, sich leicht von einem Ort zu einem anderen zu bewegen.",
          "ar": "التنقل / الحركة",
          "cat": "Leben in der Stadt",
          "ex": "Gute Busse und Bahnen sind wichtig für die Mobilität in der Stadt."
        },
        {
          "w": "der Nachbar",
          "d": "Eine Person, die neben einem oder ganz in der Nähe wohnt.",
          "ar": "جار",
          "cat": "Leben in der Stadt",
          "ex": "Mein Nachbar gießt im Urlaub meine Blumen."
        },
        {
          "w": "der Stress",
          "d": "Ein Gefühl von Druck und Nervosität, wenn man zu viel zu tun hat.",
          "ar": "ضغط / توتر",
          "cat": "Leben in der Stadt",
          "ex": "Der Stress in der Großstadt macht mich müde."
        },
        {
          "w": "der Stadtteil",
          "d": "Ein Teil einer Stadt mit eigenem Namen.",
          "ar": "حي",
          "cat": "Leben in der Stadt",
          "ex": "Jeder Stadtteil von Leipzig sieht anders aus."
        },
        {
          "w": "das Viertel",
          "d": "Ein Teil einer Stadt, ein anderes Wort für Stadtteil.",
          "ar": "حي / منطقة",
          "cat": "Leben in der Stadt",
          "ex": "In unserem Viertel gibt es viele kleine Läden."
        },
        {
          "w": "die Geschwindigkeit",
          "d": "Wie schnell sich etwas bewegt.",
          "ar": "السرعة",
          "cat": "Leben in der Stadt",
          "ex": "In der Stadt darf man höchstens mit einer Geschwindigkeit von 50 km/h fahren."
        },
        {
          "w": "das Geschäft",
          "d": "Ein Ort, an dem man Waren kaufen kann.",
          "ar": "محل / متجر",
          "cat": "Leben in der Stadt",
          "ex": "Am Sonntag sind die Geschäfte in Deutschland geschlossen."
        },
        {
          "w": "die Großstadt",
          "d": "Eine Stadt mit mehr als hunderttausend Einwohnern.",
          "ar": "مدينة كبيرة",
          "cat": "Leben in der Stadt",
          "ex": "Ich studiere in einer Großstadt und mag das Leben dort sehr."
        },
        {
          "w": "das Dorf",
          "d": "Ein kleiner Ort auf dem Land.",
          "ar": "قرية",
          "cat": "Leben in der Stadt",
          "ex": "In meinem Dorf kennt jeder jeden."
        },
        {
          "w": "sich leisten (können)",
          "d": "Genug Geld für etwas haben.",
          "ar": "يقدر يتحمل تمن حاجة",
          "cat": "Leben in der Stadt",
          "ex": "Ein Haus mit Garten könnte ich mir in der Stadt nicht leisten."
        },
        {
          "w": "gegenseitig",
          "d": "So, dass jeder dem anderen hilft oder etwas für ihn tut.",
          "ar": "بعض / متبادل",
          "cat": "Leben in der Stadt",
          "ex": "Im Dorf helfen sich die Nachbarn gegenseitig."
        },
        {
          "w": "der Pfleger",
          "d": "Ein Mann, der beruflich kranke Menschen betreut.",
          "ar": "ممرض",
          "cat": "Im Krankenhaus",
          "ex": "Der Pfleger misst jeden Morgen das Fieber der Patienten."
        },
        {
          "w": "der Feierabend",
          "d": "Das Ende des Arbeitstages.",
          "ar": "نهاية يوم الشغل",
          "cat": "Im Krankenhaus",
          "ex": "Um sieben Uhr morgens hat die Krankenschwester endlich Feierabend."
        },
        {
          "w": "die Operation",
          "d": "Eine Behandlung, bei der ein Arzt den Körper öffnet, um eine Krankheit zu heilen.",
          "ar": "عملية جراحية",
          "cat": "Im Krankenhaus",
          "ex": "Nach der Operation hatte der Patient plötzlich hohes Fieber."
        },
        {
          "w": "der/die Auszubildende",
          "d": "Eine Person, die in einem Betrieb einen Beruf lernt.",
          "ar": "متدرب (في مهنة)",
          "cat": "In der Bäckerei",
          "ex": "Der Auszubildende hilft der Fahrerin beim Laden."
        },
        {
          "w": "die Bestellung",
          "d": "Waren, die ein Kunde vorher bestellt hat.",
          "ar": "الطلبية / الأوردر",
          "cat": "In der Bäckerei",
          "ex": "Die Fahrerin bringt den Kunden ihre Bestellungen."
        },
        {
          "w": "der/die Angestellte",
          "d": "Eine Person, die bei einer Firma oder einer Behörde arbeitet und ein Gehalt bekommt.",
          "ar": "موظف",
          "cat": "Personen",
          "ex": "Die kleine Bäckerei hat fünf Angestellte."
        },
        {
          "w": "der/die Bekannte",
          "d": "Eine Person, die man kennt, die aber kein enger Freund ist.",
          "ar": "معرفة / حد أعرفه",
          "cat": "Personen",
          "ex": "Ein Bekannter von mir arbeitet bei der Stadt."
        },
        {
          "w": "der/die Verwandte",
          "d": "Eine Person, die zur gleichen Familie gehört.",
          "ar": "قريب (من العيلة)",
          "cat": "Personen",
          "ex": "Am Wochenende besuchen wir Verwandte auf dem Land."
        },
        {
          "w": "der/die Jugendliche",
          "d": "Eine junge Person zwischen ungefähr 14 und 18 Jahren.",
          "ar": "مراهق / شاب صغير",
          "cat": "Personen",
          "ex": "Jugendliche langweilen sich auf dem Land oft schnell."
        },
        {
          "w": "der/die Erwachsene",
          "d": "Eine Person, die kein Kind und kein Jugendlicher mehr ist.",
          "ar": "بالغ / كبير",
          "cat": "Personen",
          "ex": "Viele Erwachsene träumen von einem ruhigen Leben auf dem Land."
        },
        {
          "w": "der/die Angehörige",
          "d": "Eine Person, die zur Familie eines Menschen gehört.",
          "ar": "من أهل (المريض) / قريب",
          "cat": "Personen",
          "ex": "Nur Angehörige bekommen Informationen über den Patienten."
        },
        {
          "w": "der/die Arbeitslose",
          "d": "Eine Person, die keine Arbeit hat.",
          "ar": "عاطل عن العمل",
          "cat": "Personen",
          "ex": "In der Großstadt finden Arbeitslose oft schneller eine neue Stelle."
        },
        {
          "w": "der/die Kranke",
          "d": "Eine Person, die krank ist.",
          "ar": "مريض",
          "cat": "Personen",
          "ex": "Im Krankenhaus kümmern sich Ärzte und Pfleger um die Kranken."
        },
        {
          "w": "lebenswert",
          "d": "So schön und angenehm, dass man dort gern lebt.",
          "ar": "تستاهل العيشة فيها / مريحة للعيش",
          "cat": "Städte-Ranking",
          "ex": "Für mich ist eine Stadt mit vielen Parks besonders lebenswert."
        },
        {
          "w": "die Lebensqualität",
          "d": "Wie gut und angenehm das Leben an einem Ort ist.",
          "ar": "جودة الحياة",
          "cat": "Städte-Ranking",
          "ex": "Viele Grünflächen erhöhen die Lebensqualität in einer Stadt."
        },
        {
          "w": "der Anspruch (auf + A)",
          "d": "Das Recht, etwas zu bekommen.",
          "ar": "حق (في)",
          "cat": "Städte-Ranking",
          "ex": "In Deutschland hat man Anspruch auf mindestens zwanzig Tage Urlaub."
        },
        {
          "w": "die Grünfläche",
          "d": "Ein Platz in der Stadt mit Gras, Bäumen oder Pflanzen.",
          "ar": "مساحة خضراء",
          "cat": "Städte-Ranking",
          "ex": "Unsere Stadt braucht mehr Grünflächen für Kinder."
        },
        {
          "w": "der Durchschnitt",
          "d": "Der mittlere Wert von mehreren Zahlen.",
          "ar": "المتوسط",
          "cat": "Städte-Ranking",
          "ex": "Im Durchschnitt beginnt der Arbeitstag in München um 8:46 Uhr."
        },
        {
          "w": "das Gesetz",
          "d": "Eine Regel, die der Staat festgelegt hat und an die sich alle halten müssen.",
          "ar": "قانون",
          "cat": "Städte-Ranking",
          "ex": "Das Gesetz legt fest, wie lange man pro Tag arbeiten darf."
        },
        {
          "w": "die Sehenswürdigkeit",
          "d": "Ein Ort oder ein Gebäude, das für Touristen interessant ist.",
          "ar": "معلم سياحي / مزار",
          "cat": "Eine Stadt kennenlernen",
          "ex": "In den ersten Tagen habe ich alle bekannten Sehenswürdigkeiten besucht."
        },
        {
          "w": "die Altstadt",
          "d": "Der älteste Teil einer Stadt, oft mit historischen Gebäuden.",
          "ar": "المدينة القديمة",
          "cat": "Eine Stadt kennenlernen",
          "ex": "Die Altstadt mit ihren engen Gassen ist wunderschön."
        },
        {
          "w": "der Ausblick",
          "d": "Die Sicht von einem hohen Punkt auf die Umgebung.",
          "ar": "إطلالة / منظر من فوق",
          "cat": "Eine Stadt kennenlernen",
          "ex": "Vom Turm hat man einen schönen Ausblick auf den See."
        },
        {
          "w": "der Turm",
          "d": "Ein hohes, schmales Bauwerk.",
          "ar": "برج",
          "cat": "Eine Stadt kennenlernen",
          "ex": "Die alte Kirche hat zwei hohe Türme."
        },
        {
          "w": "der Fluss",
          "d": "Ein großes, natürliches Wasser, das durch das Land fließt.",
          "ar": "نهر",
          "cat": "Eine Stadt kennenlernen",
          "ex": "Der Rhein ist einer der längsten Flüsse Europas."
        },
        {
          "w": "das Ufer",
          "d": "Das Land direkt neben einem Fluss oder See.",
          "ar": "ضفة / شط",
          "cat": "Eine Stadt kennenlernen",
          "ex": "Am Ufer des Flusses sitzen viele Studierende in der Sonne."
        },
        {
          "w": "die Führung",
          "d": "Ein Rundgang mit einer Person, die alles erklärt.",
          "ar": "جولة مع مرشد",
          "cat": "Eine Stadt kennenlernen",
          "ex": "Um elf Uhr beginnt eine Führung durch das Museum."
        },
        {
          "w": "der Stadtrundgang",
          "d": "Ein Spaziergang durch die Stadt, oft mit Erklärungen.",
          "ar": "جولة مشي في المدينة",
          "cat": "Eine Stadt kennenlernen",
          "ex": "Wir könnten zuerst einen Stadtrundgang machen und dann essen gehen."
        },
        {
          "w": "die Kaution",
          "d": "Geld, das man als Sicherheit bezahlt und später zurückbekommt.",
          "ar": "تأمين / مبلغ ضمان",
          "cat": "Eine Stadt kennenlernen",
          "ex": "Für das Fahrrad muss man zwanzig Franken Kaution bezahlen."
        },
        {
          "w": "die Werkstatt",
          "d": "Ein Raum oder Betrieb, in dem man Dinge repariert oder herstellt.",
          "ar": "ورشة",
          "cat": "Eine Stadt kennenlernen",
          "ex": "Mein Bruder arbeitet in einer Werkstatt für Fahrräder."
        },
        {
          "w": "parkieren",
          "d": "Ein Wort aus dem Schweizerdeutschen für parken.",
          "ar": "يركن (بالسويسري)",
          "cat": "Eine Stadt kennenlernen",
          "ex": "Vor dem Bahnhof darf man nicht parkieren."
        },
        {
          "w": "das Industrieviertel",
          "d": "Ein Stadtteil, in dem es viele Fabriken gibt oder früher gab.",
          "ar": "منطقة صناعية",
          "cat": "Eine Stadt kennenlernen",
          "ex": "Im alten Industrieviertel gibt es heute Galerien und Clubs."
        },
        {
          "w": "hektisch",
          "d": "Mit viel Stress, Eile und Unruhe.",
          "ar": "مستعجل ومتوتر / فيه زحمة وجري",
          "cat": "Eine Stadt beschreiben",
          "ex": "Morgens ist es am Bahnhof immer sehr hektisch."
        },
        {
          "w": "gemütlich",
          "d": "Angenehm und ruhig, sodass man sich wohlfühlt.",
          "ar": "مريح / لطيف",
          "cat": "Eine Stadt beschreiben",
          "ex": "Tübingen ist eine gemütliche Universitätsstadt."
        },
        {
          "w": "attraktiv",
          "d": "So, dass es vielen Menschen gefällt.",
          "ar": "جذاب",
          "cat": "Eine Stadt beschreiben",
          "ex": "Viel Kultur macht eine Stadt attraktiv."
        },
        {
          "w": "lebendig",
          "d": "Voller Leben und Aktivität.",
          "ar": "مليانة حياة / حيوية",
          "cat": "Eine Stadt beschreiben",
          "ex": "Die Stadt ist alt und gleichzeitig sehr lebendig."
        },
        {
          "w": "historisch",
          "d": "Aus einer früheren Zeit und wichtig für die Geschichte.",
          "ar": "تاريخي",
          "cat": "Eine Stadt beschreiben",
          "ex": "In der Altstadt gibt es viele historische Gebäude."
        },
        {
          "w": "riesig",
          "d": "Sehr groß.",
          "ar": "ضخم / كبير جدًا",
          "cat": "Eine Stadt beschreiben",
          "ex": "Berlin ist riesig, man braucht Tage, um alles zu sehen."
        },
        {
          "w": "miteinander",
          "d": "Die eine Person mit der anderen, also zusammen.",
          "ar": "مع بعض",
          "cat": "Wörter mit -einander",
          "ex": "Meine Freundin und ich haben viel Spaß miteinander."
        },
        {
          "w": "nebeneinander",
          "d": "Eine Person oder Sache neben der anderen.",
          "ar": "جنب بعض",
          "cat": "Wörter mit -einander",
          "ex": "In der Altstadt stehen die Häuser eng nebeneinander."
        },
        {
          "w": "voneinander",
          "d": "Die eine Person von der anderen.",
          "ar": "من بعض",
          "cat": "Wörter mit -einander",
          "ex": "In unserem Team lernen wir viel voneinander."
        },
        {
          "w": "füreinander",
          "d": "Die eine Person für die andere.",
          "ar": "لبعض",
          "cat": "Wörter mit -einander",
          "ex": "Meine Großeltern sind immer füreinander da."
        },
        {
          "w": "aneinander",
          "d": "Die eine Person an die andere.",
          "ar": "في بعض (بنفكر في بعض)",
          "cat": "Wörter mit -einander",
          "ex": "Wir sehen uns selten, aber wir denken oft aneinander."
        }
      ],
      "visual": {
        "src": "assets/chapters/chapter-11.webp",
        "alt": "Kapitel 11 · Stadt, Land, Fluss",
        "caption": "Stadt, Land, Fluss"
      }
    },
    {
      "num": 12,
      "route": "b1.1/k12",
      "title": "Geld regiert die Welt?",
      "subtitle": "Netzwerk neu B1.2 · Kapitel 12",
      "intro": "Wortschatz aus Netzwerk neu B1.2: Geld regiert die Welt?.",
      "introAr": "مفردات الوحدة 12 من Netzwerk neu B1.2: Geld regiert die Welt?",
      "badges": [
        "B1.2",
        "Kapitel 12",
        "154 Wörter"
      ],
      "goals": [],
      "vocabSummary": {
        "title": "Wortschatz mit Erklärung",
        "note": "كل بطاقة فيها شرح ألماني واضح، مثال كامل، والترجمة العربية."
      },
      "vocab": [
        {
          "w": "die Ausgabe",
          "d": "Das Geld, das man für etwas bezahlen muss.",
          "ar": "مصروف / نفقة",
          "cat": "Geld und Finanzen",
          "ex": "Unsere größte monatliche Ausgabe ist die Miete."
        },
        {
          "w": "die Einnahme",
          "d": "Das Geld, das eine Person oder eine Firma bekommt.",
          "ar": "إيراد / دخل",
          "cat": "Geld und Finanzen",
          "ex": "Im Dezember sind die Einnahmen des kleinen Ladens am höchsten."
        },
        {
          "w": "die Zahlung",
          "d": "Das Bezahlen einer bestimmten Summe Geld.",
          "ar": "دفع / دفعة",
          "cat": "Geld und Finanzen",
          "ex": "Die Zahlung muss bis zum Monatsende auf unserem Konto sein."
        },
        {
          "w": "die Schulden",
          "d": "Geld, das man sich geliehen hat und zurückzahlen muss.",
          "ar": "ديون",
          "cat": "Geld und Finanzen",
          "ex": "Nach dem Autokauf hatte Tarek hohe Schulden bei der Bank."
        },
        {
          "w": "das Bargeld",
          "d": "Geld in Form von Scheinen und Münzen, also nicht auf dem Konto.",
          "ar": "نقود سائلة / كاش",
          "cat": "Geld und Finanzen",
          "ex": "Auf dem Wochenmarkt kann man oft nur mit Bargeld bezahlen."
        },
        {
          "w": "der Schein",
          "d": "Ein Stück Geld aus Papier, zum Beispiel 10 oder 50 Euro.",
          "ar": "ورقة نقدية",
          "cat": "Geld und Finanzen",
          "ex": "Der Fahrkartenautomat nimmt leider keine Scheine, nur Münzen."
        },
        {
          "w": "die Münze",
          "d": "Ein kleines, rundes Stück Geld aus Metall.",
          "ar": "عملة معدنية",
          "cat": "Geld und Finanzen",
          "ex": "Für den Einkaufswagen brauchst du eine Münze."
        },
        {
          "w": "das Kleingeld",
          "d": "Münzen, mit denen man kleine Beträge bezahlt.",
          "ar": "فكّة",
          "cat": "Geld und Finanzen",
          "ex": "Hast du Kleingeld für die Parkuhr?"
        },
        {
          "w": "der Geldbetrag",
          "d": "Eine bestimmte Summe Geld.",
          "ar": "مبلغ مالي",
          "cat": "Geld und Finanzen",
          "ex": "Der Geldbetrag wurde gestern auf mein Konto überwiesen."
        },
        {
          "w": "der Beleg",
          "d": "Ein Papier, das zeigt, dass man etwas bezahlt hat.",
          "ar": "إيصال / مستند",
          "cat": "Geld und Finanzen",
          "ex": "Heben Sie den Beleg auf, falls Sie die Ware umtauschen möchten."
        },
        {
          "w": "gering",
          "d": "Klein oder nicht viel, zum Beispiel bei Kosten oder Mengen.",
          "ar": "قليل / ضئيل",
          "cat": "Geld und Finanzen",
          "ex": "Für das Studentenkonto fallen nur geringe Kosten an."
        },
        {
          "w": "pauschal",
          "d": "Allgemein und ohne auf Details zu achten; auch: als fester Gesamtbetrag.",
          "ar": "بشكل عام / إجمالي (مبلغ ثابت)",
          "cat": "Geld und Finanzen",
          "ex": "Pauschal kann man sagen, dass alles teurer geworden ist."
        },
        {
          "w": "monatlich",
          "d": "Einmal in jedem Monat.",
          "ar": "شهري / كل شهر",
          "cat": "Geld und Finanzen",
          "ex": "Die monatlichen Kosten für mein Handy sind gering."
        },
        {
          "w": "fällig",
          "d": "So, dass etwas zu einem bestimmten Termin bezahlt werden muss.",
          "ar": "مستحق (الدفع)",
          "cat": "Geld und Finanzen",
          "ex": "Die Rechnung ist sofort fällig."
        },
        {
          "w": "die Rate",
          "d": "Ein Teil einer Summe, den man regelmäßig bezahlt, bis alles bezahlt ist.",
          "ar": "قسط",
          "cat": "Geld und Finanzen",
          "ex": "Ich bezahle den neuen Fernseher in zwölf monatlichen Raten."
        },
        {
          "w": "versäumen",
          "d": "Etwas nicht rechtzeitig machen oder etwas verpassen.",
          "ar": "يفوّت / يتأخر عن",
          "cat": "Geld und Finanzen",
          "ex": "Wer die fristgerechte Zahlung versäumt, muss eine Strafe zahlen."
        },
        {
          "w": "regieren",
          "d": "Ein Land oder eine Gruppe führen und die Macht haben.",
          "ar": "يحكم",
          "cat": "Geld und Finanzen",
          "ex": "Viele Leute sagen, dass Geld die Welt regiert."
        },
        {
          "w": "das Einkommen",
          "d": "Das Geld, das man regelmäßig für seine Arbeit oder aus anderen Quellen bekommt.",
          "ar": "دخل",
          "cat": "Geld und Finanzen",
          "ex": "Je höher das Einkommen ist, desto mehr Steuern zahlt man."
        },
        {
          "w": "das Gehalt",
          "d": "Das Geld, das Angestellte jeden Monat für ihre Arbeit bekommen.",
          "ar": "مرتّب / راتب",
          "cat": "Geld und Finanzen",
          "ex": "Mein Gehalt kommt immer am Ende des Monats."
        },
        {
          "w": "die Mahnung",
          "d": "Ein Brief, der an eine Rechnung erinnert, die man noch nicht bezahlt hat.",
          "ar": "إنذار بالدفع",
          "cat": "Geld und Finanzen",
          "ex": "Weil ich die Rechnung vergessen hatte, bekam ich eine Mahnung."
        },
        {
          "w": "leihen",
          "d": "Jemandem etwas für eine bestimmte Zeit geben oder sich etwas von jemandem geben lassen.",
          "ar": "يُسلِّف / يستلف",
          "cat": "Geld und Finanzen",
          "ex": "Kannst du mir bis Freitag zwanzig Euro leihen?"
        },
        {
          "w": "sparen",
          "d": "Geld nicht ausgeben, sondern für später behalten.",
          "ar": "يدّخر / يوفّر",
          "cat": "Geld und Finanzen",
          "ex": "Wir sparen schon seit einem Jahr für eine Reise nach Assuan."
        },
        {
          "w": "verdienen",
          "d": "Für seine Arbeit Geld bekommen.",
          "ar": "يكسب (مالًا)",
          "cat": "Geld und Finanzen",
          "ex": "Als Kellnerin verdient Sara nicht besonders viel."
        },
        {
          "w": "Geld ausgeben",
          "d": "Geld bezahlen, um etwas zu kaufen.",
          "ar": "يصرف / ينفق المال",
          "cat": "Geld und Finanzen",
          "ex": "Für Kleidung gebe ich nicht viel Geld aus."
        },
        {
          "w": "knapp bei Kasse sein",
          "d": "Im Moment nur sehr wenig Geld zur Verfügung haben.",
          "ar": "معه فلوس قليلة / مزنوق",
          "cat": "Geld und Finanzen",
          "ex": "Am Ende des Monats bin ich oft knapp bei Kasse."
        },
        {
          "w": "das Geld zum Fenster hinauswerfen",
          "d": "Viel Geld für unnötige Dinge ausgeben.",
          "ar": "يبذّر الفلوس",
          "cat": "Geld und Finanzen",
          "ex": "Er wirft sein Geld zum Fenster hinaus und kauft jede Woche neue Schuhe."
        },
        {
          "w": "ins Geld gehen",
          "d": "Ziemlich teuer sein, weil man viel dafür bezahlen muss.",
          "ar": "يكلّف كثيرًا",
          "cat": "Geld und Finanzen",
          "ex": "Eine Hochzeit mit vielen Gästen geht ganz schön ins Geld."
        },
        {
          "w": "nicht die Welt kosten",
          "d": "Nicht besonders teuer sein.",
          "ar": "ليس غاليًا جدًا",
          "cat": "Geld und Finanzen",
          "ex": "Komm doch mit ins Kino, das kostet ja nicht die Welt!"
        },
        {
          "w": "gratis",
          "d": "Ohne dass man dafür bezahlen muss.",
          "ar": "مجانًا",
          "cat": "Geld und Finanzen",
          "ex": "Zu jedem Kaffee gibt es heute einen Keks gratis."
        },
        {
          "w": "kostenlos",
          "d": "So, dass etwas nichts kostet.",
          "ar": "مجاني",
          "cat": "Geld und Finanzen",
          "ex": "Überweisungen im Inland sind bei meiner Bank kostenlos."
        },
        {
          "w": "umsonst",
          "d": "Ohne Geld zu bezahlen; auch: ohne Erfolg.",
          "ar": "ببلاش / بلا فائدة",
          "cat": "Geld und Finanzen",
          "ex": "Am Sonntag ist der Eintritt ins Museum umsonst."
        },
        {
          "w": "die Steuer",
          "d": "Geld, das man an den Staat zahlen muss.",
          "ar": "ضريبة",
          "cat": "Geld und Finanzen",
          "ex": "Von meinem Gehalt geht fast ein Drittel für Steuern weg."
        },
        {
          "w": "der Gewinn",
          "d": "Das Geld, das eine Firma nach allen Kosten übrig hat.",
          "ar": "ربح",
          "cat": "Geld und Finanzen",
          "ex": "Die Firma hat in diesem Jahr einen hohen Gewinn gemacht."
        },
        {
          "w": "die Geldbörse",
          "d": "Eine kleine Tasche für Geld und Karten.",
          "ar": "محفظة نقود",
          "cat": "Geld und Finanzen",
          "ex": "Im Bus hat jemand seine Geldbörse verloren."
        },
        {
          "w": "das Bankgeschäft",
          "d": "Eine Sache, die man bei einer Bank erledigt, zum Beispiel eine Überweisung.",
          "ar": "معاملة بنكية",
          "cat": "Bankgeschäfte",
          "ex": "Die meisten Bankgeschäfte erledige ich heute online."
        },
        {
          "w": "der/die Bankangestellte",
          "d": "Eine Person, die in einer Bank arbeitet und die Kunden berät.",
          "ar": "موظف / موظفة بنك",
          "cat": "Bankgeschäfte",
          "ex": "Die Bankangestellte hat mir alle Gebühren genau erklärt."
        },
        {
          "w": "die BIC",
          "d": "Ein internationaler Code, mit dem man eine Bank genau erkennt.",
          "ar": "رمز تعريف البنك (BIC)",
          "cat": "Bankgeschäfte",
          "ex": "Für eine Überweisung ins Ausland brauchen Sie auch die BIC."
        },
        {
          "w": "die IBAN",
          "d": "Die internationale Nummer eines Bankkontos.",
          "ar": "رقم الحساب الدولي (IBAN)",
          "cat": "Bankgeschäfte",
          "ex": "Schick mir bitte deine IBAN, dann überweise ich dir das Geld."
        },
        {
          "w": "die Kontoeröffnung",
          "d": "Das Anlegen eines neuen Kontos bei einer Bank.",
          "ar": "فتح حساب",
          "cat": "Bankgeschäfte",
          "ex": "Für die Kontoeröffnung brauchen Sie Ihren Pass und eine Meldebescheinigung."
        },
        {
          "w": "die Kontodaten",
          "d": "Die Informationen zu einem Konto, zum Beispiel die IBAN und der Name der Bank.",
          "ar": "بيانات الحساب",
          "cat": "Bankgeschäfte",
          "ex": "Ich habe meine Kontodaten in das Formular eingetragen."
        },
        {
          "w": "die Kontoführungsgebühr",
          "d": "Das Geld, das man der Bank regelmäßig für ein Konto bezahlt.",
          "ar": "رسوم إدارة الحساب",
          "cat": "Bankgeschäfte",
          "ex": "Für Studenten gibt es bei dieser Bank keine Kontoführungsgebühr."
        },
        {
          "w": "der Kontoauszug",
          "d": "Eine Liste, die alle Zahlungen und den Stand eines Kontos zeigt.",
          "ar": "كشف حساب",
          "cat": "Bankgeschäfte",
          "ex": "Auf dem Kontoauszug sehe ich, wofür ich mein Geld ausgegeben habe."
        },
        {
          "w": "der Dauerauftrag",
          "d": "Ein Auftrag an die Bank, regelmäßig den gleichen Betrag zu überweisen.",
          "ar": "أمر تحويل دائم",
          "cat": "Bankgeschäfte",
          "ex": "Die Miete bezahle ich per Dauerauftrag."
        },
        {
          "w": "der Kredit",
          "d": "Geld, das man von einer Bank leiht und mit Zinsen zurückzahlt.",
          "ar": "قرض",
          "cat": "Bankgeschäfte",
          "ex": "Für die neue Küche brauchen wir einen Kredit."
        },
        {
          "w": "einen Kredit aufnehmen",
          "d": "Sich bei einer Bank Geld leihen.",
          "ar": "يأخذ قرضًا",
          "cat": "Bankgeschäfte",
          "ex": "Herr Richter möchte für seine Wohnung einen Kredit aufnehmen."
        },
        {
          "w": "fristgerecht",
          "d": "Innerhalb der Zeit, die man vereinbart hat.",
          "ar": "في الموعد المحدد",
          "cat": "Bankgeschäfte",
          "ex": "Bitte bezahlen Sie die Rechnung fristgerecht bis zum 15. März."
        },
        {
          "w": "abhängig (von + D)",
          "d": "So, dass etwas durch eine andere Sache bestimmt wird.",
          "ar": "متوقّف على / يعتمد على",
          "cat": "Bankgeschäfte",
          "ex": "Die Zinsen sind von der Höhe des Kredits abhängig."
        },
        {
          "w": "anfallen",
          "d": "Als Kosten oder als Arbeit entstehen.",
          "ar": "يترتّب (تكاليف / رسوم)",
          "cat": "Bankgeschäfte",
          "ex": "Für Überweisungen ins Ausland fallen Gebühren an."
        },
        {
          "w": "angeben",
          "d": "Eine Information nennen oder in ein Formular schreiben.",
          "ar": "يذكر / يدوّن (بيانات)",
          "cat": "Bankgeschäfte",
          "ex": "Bitte geben Sie Ihren Namen und Ihre Adresse an."
        },
        {
          "w": "eintragen",
          "d": "Etwas in eine Liste oder in ein Formular schreiben.",
          "ar": "يسجّل / يكتب في خانة",
          "cat": "Bankgeschäfte",
          "ex": "Tragen Sie Ihre neue PIN in das Feld ein."
        },
        {
          "w": "einzahlen",
          "d": "Geld auf ein Konto bringen.",
          "ar": "يودع (مالًا)",
          "cat": "Bankgeschäfte",
          "ex": "Ich möchte 500 Euro auf mein Sparkonto einzahlen."
        },
        {
          "w": "gutschreiben",
          "d": "Einen Betrag auf einem Konto als Plus buchen.",
          "ar": "يضيف المبلغ إلى الحساب",
          "cat": "Bankgeschäfte",
          "ex": "Der Betrag wird Ihrem Konto morgen gutgeschrieben."
        },
        {
          "w": "überziehen",
          "d": "Mehr Geld von einem Konto nehmen, als darauf ist.",
          "ar": "يسحب على المكشوف",
          "cat": "Bankgeschäfte",
          "ex": "Wer sein Konto überzieht, muss hohe Zinsen bezahlen."
        },
        {
          "w": "der Zins",
          "d": "Geld, das man für einen Kredit zahlt oder für gespartes Geld bekommt.",
          "ar": "فائدة (بنكية)",
          "cat": "Bankgeschäfte",
          "ex": "Die Zinsen für diesen Kredit sind ziemlich hoch."
        },
        {
          "w": "der Verlust",
          "d": "Die Situation, in der man etwas verloren hat.",
          "ar": "فقدان / خسارة",
          "cat": "Bankgeschäfte",
          "ex": "Melden Sie den Verlust Ihrer Bankkarte bitte sofort."
        },
        {
          "w": "die Kopie",
          "d": "Ein Papier, das genauso aussieht wie das Original.",
          "ar": "نسخة / صورة",
          "cat": "Bankgeschäfte",
          "ex": "Schicken Sie uns bitte eine Kopie Ihres Ausweises."
        },
        {
          "w": "das Konto",
          "d": "Ein Vertrag mit einer Bank, über den man Geld bekommt, aufbewahrt und bezahlt.",
          "ar": "حساب (بنكي)",
          "cat": "Bankgeschäfte",
          "ex": "Ich habe mein Konto bei einer Online-Bank."
        },
        {
          "w": "der Betrag",
          "d": "Eine bestimmte Summe Geld, die man bezahlt oder bekommt.",
          "ar": "مبلغ",
          "cat": "Bankgeschäfte",
          "ex": "Der überwiesene Betrag ist schon angekommen."
        },
        {
          "w": "die Gebühr",
          "d": "Geld, das man für einen Service bezahlen muss.",
          "ar": "رسم / رسوم",
          "cat": "Bankgeschäfte",
          "ex": "Für die Kreditkarte verlangt die Bank eine jährliche Gebühr."
        },
        {
          "w": "die Überweisung",
          "d": "Das Schicken von Geld von einem Konto auf ein anderes.",
          "ar": "تحويل (بنكي)",
          "cat": "Bankgeschäfte",
          "ex": "Die Überweisung ist schon bei meinem Vermieter angekommen."
        },
        {
          "w": "überweisen",
          "d": "Geld von einem Konto auf ein anderes schicken.",
          "ar": "يحوّل (مالًا)",
          "cat": "Bankgeschäfte",
          "ex": "Ich überweise dir das Geld für das Konzert heute Abend."
        },
        {
          "w": "abheben",
          "d": "Geld von seinem Konto nehmen, zum Beispiel am Automaten.",
          "ar": "يسحب (مالًا)",
          "cat": "Bankgeschäfte",
          "ex": "Am Wochenende hebe ich immer etwas Bargeld ab."
        },
        {
          "w": "eröffnen",
          "d": "Etwas neu beginnen oder anlegen, zum Beispiel ein Konto oder ein Geschäft.",
          "ar": "يفتح (حسابًا) / يفتتح",
          "cat": "Bankgeschäfte",
          "ex": "Mit achtzehn habe ich mein erstes Konto eröffnet."
        },
        {
          "w": "sperren",
          "d": "Dafür sorgen, dass man etwas nicht mehr benutzen kann.",
          "ar": "يوقف / يجمّد (بطاقة)",
          "cat": "Bankgeschäfte",
          "ex": "Lassen Sie Ihre Karte sofort sperren, wenn sie gestohlen wurde."
        },
        {
          "w": "beantragen",
          "d": "Offiziell und meistens schriftlich um etwas bitten.",
          "ar": "يقدّم طلبًا للحصول على",
          "cat": "Bankgeschäfte",
          "ex": "Ich habe bei meiner Bank eine Kreditkarte beantragt."
        },
        {
          "w": "der Antrag",
          "d": "Ein Formular, mit dem man offiziell um etwas bittet.",
          "ar": "طلب (رسمي)",
          "cat": "Bankgeschäfte",
          "ex": "Wir können nur vollständig ausgefüllte Anträge bearbeiten."
        },
        {
          "w": "die Bankkarte",
          "d": "Eine Karte von der Bank, mit der man bezahlen und Geld abheben kann.",
          "ar": "بطاقة البنك",
          "cat": "Bankgeschäfte",
          "ex": "Mit der Bankkarte kann ich an jedem Automaten Geld abheben."
        },
        {
          "w": "die Kreditkarte",
          "d": "Eine Karte, mit der man bezahlt, aber das Geld erst später vom Konto abgebucht wird.",
          "ar": "بطاقة ائتمان",
          "cat": "Bankgeschäfte",
          "ex": "Im Ausland bezahle ich meistens mit der Kreditkarte."
        },
        {
          "w": "die Geheimzahl",
          "d": "Eine geheime Nummer, die man für die Bankkarte braucht.",
          "ar": "الرقم السري (PIN)",
          "cat": "Bankgeschäfte",
          "ex": "Achten Sie darauf, dass niemand Ihre Geheimzahl sieht."
        },
        {
          "w": "der Geldautomat",
          "d": "Eine Maschine, an der man mit einer Karte Bargeld bekommt.",
          "ar": "ماكينة صرف آلي",
          "cat": "Bankgeschäfte",
          "ex": "Der Geldautomat hat meine Karte nicht mehr herausgegeben."
        },
        {
          "w": "die Konditionen",
          "d": "Die Bedingungen, zum Beispiel Gebühren und Zinsen, zu denen eine Bank etwas anbietet.",
          "ar": "الشروط (البنكية)",
          "cat": "Bankgeschäfte",
          "ex": "Ich habe noch ein paar Fragen zu den Konditionen."
        },
        {
          "w": "zurückzahlen",
          "d": "Geld, das man geliehen hat, wieder zurückgeben.",
          "ar": "يسدّد / يردّ المال",
          "cat": "Bankgeschäfte",
          "ex": "Ich könnte monatlich 200 Euro zurückzahlen."
        },
        {
          "w": "das Online-Banking",
          "d": "Bankgeschäfte, die man über das Internet erledigt.",
          "ar": "الخدمات البنكية عبر الإنترنت",
          "cat": "Online-Banking",
          "ex": "Mit Online-Banking kann ich Überweisungen auch nachts machen."
        },
        {
          "w": "der Benutzername",
          "d": "Der Name, mit dem man sich auf einer Webseite oder in einer App anmeldet.",
          "ar": "اسم المستخدم",
          "cat": "Online-Banking",
          "ex": "Ich habe leider meinen Benutzernamen vergessen."
        },
        {
          "w": "sich einloggen",
          "d": "Sich mit Benutzernamen und Passwort auf einer Webseite oder in einer App anmelden.",
          "ar": "يسجّل الدخول",
          "cat": "Online-Banking",
          "ex": "Ich logge mich jeden Morgen in meine Banking-App ein."
        },
        {
          "w": "der Log-in",
          "d": "Die Anmeldung auf einer Webseite oder in einer App.",
          "ar": "تسجيل الدخول",
          "cat": "Online-Banking",
          "ex": "Beim nächsten Log-in sehen Sie die neue Ansicht."
        },
        {
          "w": "die Fotoüberweisung",
          "d": "Eine Überweisung, bei der man ein Foto der Rechnung hochlädt und die Daten automatisch übernommen werden.",
          "ar": "تحويل بتصوير الفاتورة",
          "cat": "Online-Banking",
          "ex": "Mit der Fotoüberweisung muss ich die IBAN nicht mehr abtippen."
        },
        {
          "w": "die Ansicht",
          "d": "Die Art, wie etwas auf dem Bildschirm gezeigt wird; auch: die Meinung.",
          "ar": "طريقة العرض / رأي",
          "cat": "Online-Banking",
          "ex": "Die Ansicht können Sie auf der Webseite jederzeit ändern."
        },
        {
          "w": "das Menü",
          "d": "Eine Liste auf dem Bildschirm, aus der man eine Funktion wählt.",
          "ar": "قائمة (على الشاشة)",
          "cat": "Online-Banking",
          "ex": "Klicken Sie im Menü auf „Mein Konto“."
        },
        {
          "w": "das Passwort",
          "d": "Ein geheimes Wort, mit dem man sich in einem Programm anmeldet.",
          "ar": "كلمة السر",
          "cat": "Online-Banking",
          "ex": "Wähl ein sicheres Passwort mit Zahlen und Sonderzeichen."
        },
        {
          "w": "hochladen",
          "d": "Eine Datei von seinem Gerät ins Internet schicken.",
          "ar": "يرفع (ملفًا)",
          "cat": "Online-Banking",
          "ex": "Laden Sie einfach ein Foto der Rechnung hoch."
        },
        {
          "w": "die Globalisierung",
          "d": "Die immer engere Verbindung von Wirtschaft, Kultur und Kommunikation auf der ganzen Welt.",
          "ar": "العولمة",
          "cat": "Globalisierung",
          "ex": "Durch die Globalisierung gibt es im Supermarkt Obst aus aller Welt."
        },
        {
          "w": "global",
          "d": "So, dass es die ganze Welt betrifft.",
          "ar": "عالمي",
          "cat": "Globalisierung",
          "ex": "Der Klimawandel ist ein globales Problem."
        },
        {
          "w": "fortschrittlich",
          "d": "Modern und offen für neue Ideen und Entwicklungen.",
          "ar": "تقدّمي / متطوّر",
          "cat": "Globalisierung",
          "ex": "Für die damalige Zeit war diese Idee sehr fortschrittlich."
        },
        {
          "w": "der Konsument",
          "d": "Eine Person, die Waren kauft und benutzt.",
          "ar": "مستهلك",
          "cat": "Globalisierung",
          "ex": "Die Konsumenten wollen billige, aber gute Produkte."
        },
        {
          "w": "die Konsumentin",
          "d": "Eine Frau, die Waren kauft und benutzt.",
          "ar": "مستهلِكة",
          "cat": "Globalisierung",
          "ex": "Als Konsumentin achte ich darauf, woher meine Kleidung kommt."
        },
        {
          "w": "der Verbraucher",
          "d": "Eine Person, die Produkte kauft und verbraucht.",
          "ar": "مستهلك",
          "cat": "Globalisierung",
          "ex": "Viele Waren reisen um die halbe Welt, bevor sie beim Verbraucher ankommen."
        },
        {
          "w": "die Verbraucherin",
          "d": "Eine Frau, die Produkte kauft und verbraucht.",
          "ar": "مستهلِكة",
          "cat": "Globalisierung",
          "ex": "Jede Verbraucherin kann mit ihrem Einkauf etwas für die Umwelt tun."
        },
        {
          "w": "der Weltmarkt",
          "d": "Der Handel mit Waren zwischen allen Ländern der Welt.",
          "ar": "السوق العالمية",
          "cat": "Globalisierung",
          "ex": "Kleine Firmen haben es auf dem Weltmarkt oft schwer."
        },
        {
          "w": "das Produktangebot",
          "d": "Alle Produkte, die man an einem Ort oder bei einer Firma kaufen kann.",
          "ar": "تشكيلة المنتجات المعروضة",
          "cat": "Globalisierung",
          "ex": "Das Produktangebot im Internet ist riesig."
        },
        {
          "w": "verlegen",
          "d": "Etwas an einen anderen Ort oder auf eine andere Zeit bringen.",
          "ar": "ينقل (مكانًا أو موعدًا)",
          "cat": "Globalisierung",
          "ex": "Die Firma hat ihre Produktion ins Ausland verlegt."
        },
        {
          "w": "der Wohlstand",
          "d": "Die Situation, in der Menschen genug Geld haben und gut leben können.",
          "ar": "رخاء / رفاهية",
          "cat": "Globalisierung",
          "ex": "In vielen Ländern ist der Wohlstand in den letzten Jahren gewachsen."
        },
        {
          "w": "die Forschung",
          "d": "Die wissenschaftliche Arbeit, mit der man Neues herausfinden will.",
          "ar": "البحث العلمي",
          "cat": "Globalisierung",
          "ex": "Die Forschung an neuen Medikamenten braucht internationale Zusammenarbeit."
        },
        {
          "w": "die Wissenschaft",
          "d": "Das systematische Sammeln und Prüfen von Wissen, zum Beispiel an Universitäten.",
          "ar": "العلم",
          "cat": "Globalisierung",
          "ex": "Meine Schwester möchte später in der Wissenschaft arbeiten."
        },
        {
          "w": "nützen",
          "d": "Hilfreich sein oder einen Vorteil bringen.",
          "ar": "يفيد / ينفع",
          "cat": "Globalisierung",
          "ex": "Nützt die Globalisierung wirklich allen Menschen?"
        },
        {
          "w": "profitieren (von + D)",
          "d": "Von einer Sache einen Vorteil oder Nutzen haben.",
          "ar": "يستفيد (من)",
          "cat": "Globalisierung",
          "ex": "Viele Länder profitieren vom internationalen Handel."
        },
        {
          "w": "problematisch",
          "d": "Schwierig und mit Problemen verbunden.",
          "ar": "إشكالي / فيه مشاكل",
          "cat": "Globalisierung",
          "ex": "Ich finde es problematisch, dass die Mieten so stark steigen."
        },
        {
          "w": "pro",
          "d": "Für eine Sache.",
          "ar": "مع / مؤيّد",
          "cat": "Globalisierung",
          "ex": "Die meisten im Kurs waren pro Homeoffice."
        },
        {
          "w": "contra",
          "d": "Gegen eine Sache.",
          "ar": "ضد / معارض",
          "cat": "Globalisierung",
          "ex": "Bist du pro oder contra Globalisierung?"
        },
        {
          "w": "der Pluspunkt",
          "d": "Ein Vorteil oder eine positive Seite.",
          "ar": "نقطة إيجابية / ميزة",
          "cat": "Globalisierung",
          "ex": "Ein weiterer Pluspunkt ist die niedrige Gebühr."
        },
        {
          "w": "die Konkurrenz",
          "d": "Die anderen Firmen oder Personen, die das Gleiche anbieten oder erreichen wollen.",
          "ar": "منافسة / المنافسون",
          "cat": "Globalisierung",
          "ex": "Durch die große Konkurrenz sinken die Preise."
        },
        {
          "w": "der Fortschritt",
          "d": "Eine positive Entwicklung zu etwas Besserem oder Neuem.",
          "ar": "تقدّم",
          "cat": "Globalisierung",
          "ex": "Der technische Fortschritt verändert unsere Arbeitswelt."
        },
        {
          "w": "der Austausch",
          "d": "Das gegenseitige Geben und Nehmen von Ideen, Waren oder Informationen.",
          "ar": "تبادل",
          "cat": "Globalisierung",
          "ex": "Der Austausch zwischen Universitäten wird immer wichtiger."
        },
        {
          "w": "die Bedingung",
          "d": "Die Umstände, unter denen etwas passiert; auch: eine Forderung.",
          "ar": "ظرف / شرط",
          "cat": "Globalisierung",
          "ex": "Die Arbeiter arbeiten dort unter schlechten Bedingungen."
        },
        {
          "w": "die Produktion",
          "d": "Das Herstellen von Waren.",
          "ar": "إنتاج",
          "cat": "Globalisierung",
          "ex": "Die komplette Produktion wurde nach Asien verlegt."
        },
        {
          "w": "der Vorteil",
          "d": "Eine positive Seite einer Sache.",
          "ar": "ميزة",
          "cat": "Globalisierung",
          "ex": "Ein großer Vorteil von Online-Banking ist, dass es schnell geht."
        },
        {
          "w": "der Nachteil",
          "d": "Eine negative Seite einer Sache.",
          "ar": "عيب",
          "cat": "Globalisierung",
          "ex": "Ein Nachteil der Globalisierung sind die langen Transportwege."
        },
        {
          "w": "der Irrsinn",
          "d": "Etwas, das völlig unvernünftig ist und keinen Sinn macht.",
          "ar": "جنون / حماقة",
          "cat": "Globalisierung",
          "ex": "Tomaten um die halbe Welt zu fliegen, ist doch ein Irrsinn."
        },
        {
          "w": "sinken",
          "d": "Weniger oder niedriger werden.",
          "ar": "ينخفض",
          "cat": "Globalisierung",
          "ex": "Die sinkenden Preise freuen die Konsumenten."
        },
        {
          "w": "das Gewissen",
          "d": "Das innere Gefühl, das einem sagt, ob etwas richtig oder falsch ist.",
          "ar": "الضمير",
          "cat": "Gewissensfragen",
          "ex": "Ich habe ein schlechtes Gewissen, weil ich nicht bezahlt habe."
        },
        {
          "w": "befürworten",
          "d": "Für eine Sache sein und sie unterstützen.",
          "ar": "يؤيّد",
          "cat": "Gewissensfragen",
          "ex": "Ich befürworte die Idee, alte Geschenke weiterzuverschenken."
        },
        {
          "w": "tolerieren",
          "d": "Etwas akzeptieren, auch wenn man es selbst nicht gut findet.",
          "ar": "يتقبّل / يتسامح مع",
          "cat": "Gewissensfragen",
          "ex": "Man muss tolerieren, dass andere Menschen anders denken."
        },
        {
          "w": "merken",
          "d": "Etwas bemerken oder erkennen.",
          "ar": "يلاحظ",
          "cat": "Gewissensfragen",
          "ex": "Erst zu Hause merkte er, dass er nicht alles bezahlt hatte."
        },
        {
          "w": "bedenken",
          "d": "Über eine Sache nachdenken und sie bei einer Entscheidung beachten.",
          "ar": "يأخذ في الاعتبار",
          "cat": "Gewissensfragen",
          "ex": "Man muss auch bedenken, dass kleine Firmen Probleme bekommen."
        },
        {
          "w": "betrügen",
          "d": "Jemanden mit Absicht täuschen, um selbst einen Vorteil zu haben.",
          "ar": "يغشّ / يخدع",
          "cat": "Gewissensfragen",
          "ex": "Niemand kann kontrollieren, ob ein Kunde betrügt."
        },
        {
          "w": "die Sicht",
          "d": "Die Art, wie man eine Sache sieht und beurteilt.",
          "ar": "وجهة نظر",
          "cat": "Gewissensfragen",
          "ex": "Aus meiner Sicht ist das ein echtes Problem."
        },
        {
          "w": "der Vorwurf",
          "d": "Eine Aussage, mit der man jemandem sagt, dass er etwas falsch gemacht hat.",
          "ar": "لوم / اتهام",
          "cat": "Gewissensfragen",
          "ex": "Niemand kann mir einen Vorwurf machen."
        },
        {
          "w": "die Schuld",
          "d": "Die Verantwortung für etwas Schlechtes, das passiert ist.",
          "ar": "ذنب / مسؤولية",
          "cat": "Gewissensfragen",
          "ex": "Er ist ohne eigene Schuld arbeitslos geworden."
        },
        {
          "w": "geraten (in + A)",
          "d": "Ohne Absicht in eine meistens schwierige Situation kommen.",
          "ar": "يقع في (مشكلة)",
          "cat": "Gewissensfragen",
          "ex": "Nach ihrer Krankheit ist sie in finanzielle Not geraten."
        },
        {
          "w": "das Versprechen",
          "d": "Die Aussage, dass man etwas ganz sicher tun wird.",
          "ar": "وعد",
          "cat": "Gewissensfragen",
          "ex": "Er hat sein Versprechen gehalten und das Geld zurückgezahlt."
        },
        {
          "w": "wünschenswert",
          "d": "So, dass man es sich wünscht, weil es gut wäre.",
          "ar": "مرغوب فيه",
          "cat": "Gewissensfragen",
          "ex": "Für uns Konsumenten sind niedrige Preise natürlich wünschenswert."
        },
        {
          "w": "der Zustand",
          "d": "Die Situation oder die Verfassung, in der etwas oder jemand ist.",
          "ar": "حالة",
          "cat": "Gewissensfragen",
          "ex": "Das gebrauchte Fahrrad ist in einem sehr guten Zustand."
        },
        {
          "w": "die Ehrlichkeit",
          "d": "Die Eigenschaft, die Wahrheit zu sagen und andere nicht zu betrügen.",
          "ar": "الأمانة / الصدق",
          "cat": "Gewissensfragen",
          "ex": "Das Konzept basiert auf der Ehrlichkeit der Kunden."
        },
        {
          "w": "stehlen",
          "d": "Etwas nehmen, das einer anderen Person gehört, ohne zu fragen.",
          "ar": "يسرق",
          "cat": "Gewissensfragen",
          "ex": "Mir wurde in der U-Bahn das Handy gestohlen."
        },
        {
          "w": "der Dieb",
          "d": "Eine Person, die etwas stiehlt.",
          "ar": "لص / حرامي",
          "cat": "Gewissensfragen",
          "ex": "Die Polizei hat den Dieb schnell gefunden."
        },
        {
          "w": "verzichten (auf + A)",
          "d": "Etwas nicht nehmen oder nicht tun, obwohl man es möchte.",
          "ar": "يستغني (عن)",
          "cat": "Gewissensfragen",
          "ex": "Wenn ich kein Kleingeld habe, verzichte ich auf die Zeitung."
        },
        {
          "w": "weiterverschenken",
          "d": "Ein Geschenk, das man bekommen hat, einer anderen Person schenken.",
          "ar": "يُهدي هدية لشخص آخر",
          "cat": "Gewissensfragen",
          "ex": "Darf man ein Geschenk einfach weiterverschenken?"
        },
        {
          "w": "ablehnen",
          "d": "Zu etwas Nein sagen oder etwas nicht gut finden.",
          "ar": "يرفض",
          "cat": "Gewissensfragen",
          "ex": "So ein Verhalten lehne ich ab."
        },
        {
          "w": "akzeptieren",
          "d": "Etwas annehmen oder als richtig ansehen.",
          "ar": "يقبل",
          "cat": "Gewissensfragen",
          "ex": "Ich akzeptiere deine Entscheidung, auch wenn ich anders denke."
        },
        {
          "w": "das Verhalten",
          "d": "Die Art, wie sich jemand benimmt.",
          "ar": "سلوك / تصرّف",
          "cat": "Gewissensfragen",
          "ex": "Sein Verhalten an der Kasse fand ich nicht in Ordnung."
        },
        {
          "w": "das Fundbüro",
          "d": "Ein Büro, in dem man verlorene Sachen abgeben und abholen kann.",
          "ar": "مكتب المفقودات",
          "cat": "Gewissensfragen",
          "ex": "Ich habe die gefundene Geldbörse zum Fundbüro gebracht."
        },
        {
          "w": "ausziehen",
          "d": "Eine Wohnung für immer verlassen.",
          "ar": "ينتقل من السكن / يُخلي الشقة",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Als die Familie wieder genug Geld hatte, zog sie aus der Siedlung aus."
        },
        {
          "w": "fort",
          "d": "Weg, weit entfernt von einem Ort.",
          "ar": "بعيدًا",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Mein Bruder wohnt mehr als 500 Kilometer weit fort."
        },
        {
          "w": "drin sein",
          "d": "Sich in etwas befinden.",
          "ar": "يكون بالداخل",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Im Portemonnaie ist leider nichts mehr drin."
        },
        {
          "w": "zu Wort kommen",
          "d": "In einem Gespräch die Möglichkeit bekommen, etwas zu sagen.",
          "ar": "يأخذ فرصة للكلام",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "In der Diskussion bin ich kaum zu Wort gekommen."
        },
        {
          "w": "stammen (aus + D)",
          "d": "Seinen Ursprung an einem Ort oder in einer Zeit haben.",
          "ar": "يرجع أصله (إلى) / ينحدر من",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Die Möbel in der Wohnung stammen aus dem 18. Jahrhundert."
        },
        {
          "w": "überleben",
          "d": "Trotz Gefahr oder Schwierigkeiten weiterleben oder weiter existieren.",
          "ar": "ينجو / يصمد",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Viele kleine Läden können die starke Konkurrenz nicht überleben."
        },
        {
          "w": "irgendwo",
          "d": "An einem Ort, den man nicht genau kennt.",
          "ar": "في مكان ما",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Ich habe meinen Schlüssel irgendwo in der Stadt verloren."
        },
        {
          "w": "nirgendwo",
          "d": "An keinem Ort.",
          "ar": "ولا في أي مكان / في لا مكان",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Ich finde meine Bankkarte nirgendwo."
        },
        {
          "w": "je ..., desto/umso ...",
          "d": "Eine Verbindung, die zeigt, dass sich zwei Dinge zusammen verändern.",
          "ar": "كلّما ... كلّما ...",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Je mehr ich spare, desto ruhiger schlafe ich."
        },
        {
          "w": "der Kasten",
          "d": "Ein Behälter aus Holz, Metall oder Plastik.",
          "ar": "صندوق",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Das Geld für die Zeitung wirft man einfach in den Kasten."
        },
        {
          "w": "der Staub",
          "d": "Sehr kleine, trockene Teilchen, die sich zum Beispiel auf Möbeln sammeln.",
          "ar": "غبار / تراب",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Die alte Vase steht im Keller und ist voller Staub."
        },
        {
          "w": "teilweise",
          "d": "Zum Teil, also nicht ganz.",
          "ar": "جزئيًا",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Die Waren werden teilweise rund um die Welt transportiert."
        },
        {
          "w": "zusätzlich",
          "d": "Außerdem noch, als Extra.",
          "ar": "إضافي / بالإضافة إلى",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Zusätzlich zur Miete zahlen die Bewohner die Nebenkosten."
        },
        {
          "w": "beten",
          "d": "Zu Gott sprechen.",
          "ar": "يصلّي / يدعو",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Meine Großmutter betet jeden Tag fünfmal."
        },
        {
          "w": "die Spende",
          "d": "Geld oder Sachen, die man freiwillig für einen guten Zweck gibt.",
          "ar": "تبرّع",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Die Organisation freut sich über jede Spende."
        },
        {
          "w": "spenden",
          "d": "Freiwillig Geld oder Sachen für einen guten Zweck geben.",
          "ar": "يتبرّع",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Im Ramadan spenden wir jedes Jahr Lebensmittel."
        },
        {
          "w": "bedürftig",
          "d": "So arm, dass man Hilfe braucht.",
          "ar": "محتاج",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Die günstigen Wohnungen sind für bedürftige Familien gedacht."
        },
        {
          "w": "wohltätig",
          "d": "Anderen Menschen helfend, ohne etwas dafür zu verlangen.",
          "ar": "خيري",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Der Verein sammelt Geld für wohltätige Projekte."
        },
        {
          "w": "die Siedlung",
          "d": "Eine Gruppe von Häusern, die zusammen geplant und gebaut wurden.",
          "ar": "مجمّع سكني",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "In der Siedlung wohnen vor allem Familien mit wenig Geld."
        },
        {
          "w": "die Stiftung",
          "d": "Eine Organisation, die mit gespendetem Geld einen guten Zweck finanziert.",
          "ar": "مؤسسة خيرية / وقف",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Die Stiftung finanziert jedes Jahr zwanzig Stipendien."
        },
        {
          "w": "der Tauschring",
          "d": "Eine Gruppe, in der Menschen Tätigkeiten ohne Geld miteinander tauschen.",
          "ar": "دائرة تبادل خدمات",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Im Tauschring repariere ich Fahrräder und bekomme dafür Hilfe im Garten."
        },
        {
          "w": "die Tätigkeit",
          "d": "Eine Arbeit oder etwas, das man aktiv tut.",
          "ar": "نشاط / عمل",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Welche Tätigkeit könntest du im Tauschring anbieten?"
        },
        {
          "w": "finanziell",
          "d": "So, dass es mit Geld zu tun hat.",
          "ar": "مالي",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Nach der Krankheit hatte die Familie große finanzielle Probleme."
        }
      ],
      "visual": {
        "src": "assets/chapters/chapter-12.webp",
        "alt": "Kapitel 12 · Geld regiert die Welt?",
        "caption": "Geld regiert die Welt?"
      }
    }
  ];
  chapters.forEach(chapter => {
    if (!window.B1_BOOK.some(item => item.num === chapter.num)) window.B1_BOOK.push(chapter);
  });
})();
