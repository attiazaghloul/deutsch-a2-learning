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
        "note": "Jede Karte enthält eine deutsche Erklärung, einen vollständigen Beispielsatz und die arabische Übersetzung.",
        "noteAr": "كل بطاقة فيها شرح ألماني واضح، مثال كامل، والترجمة العربية.",
        "titleAr": "مفردات مع شرح"
      },
      "vocab": [
        {
          "w": "die Clique",
          "d": "Eine Clique ist eine feste Gruppe von Freunden, die viel Zeit zusammen verbringen.",
          "ar": "شِلّة / مجموعة أصحاب",
          "cat": "Freundschaft und Beziehungen",
          "ex": "Seit der Schulzeit gehöre ich zu einer kleinen Clique.",
          "dAr": "مجموعة ثابتة من الأصدقاء يقضون وقتًا كثيرًا معًا.",
          "exAr": "أنا ضمن شلة صغيرة من أيام المدرسة.",
          "catAr": "الصداقة والعلاقات"
        },
        {
          "w": "der Einfluss",
          "d": "Wer Einfluss hat, kann das Denken oder Handeln von anderen Menschen verändern.",
          "ar": "تأثير",
          "cat": "Freundschaft und Beziehungen",
          "ex": "Freunde haben oft einen großen Einfluss auf Jugendliche.",
          "dAr": "القدرة على تغيير تفكير الآخرين أو تصرفاتهم.",
          "exAr": "الأصدقاء غالبًا لهم تأثير كبير على الشباب.",
          "catAr": "الصداقة والعلاقات"
        },
        {
          "w": "das Verständnis",
          "d": "Verständnis bedeutet, dass man die Gefühle und Gründe eines anderen Menschen versteht.",
          "ar": "تفهُّم",
          "cat": "Freundschaft und Beziehungen",
          "ex": "Danke für dein Verständnis!",
          "dAr": "فهم مشاعر الشخص الآخر وأسبابه.",
          "exAr": "شكرًا على تفهّمك!",
          "catAr": "الصداقة والعلاقات"
        },
        {
          "w": "Verständnis haben (für + A)",
          "d": "Man versteht und akzeptiert, warum eine andere Person etwas tut oder fühlt.",
          "ar": "يتفهّم (موقف / شخص)",
          "cat": "Freundschaft und Beziehungen",
          "ex": "Meine Chefin hatte viel Verständnis für meine Situation.",
          "dAr": "تفهم وتقبّل سبب تصرف شخص آخر أو شعوره.",
          "exAr": "مديرتي كانت متفهّمة جدًا لظروفي.",
          "catAr": "الصداقة والعلاقات"
        },
        {
          "w": "sich verstehen (mit + D)",
          "d": "Wenn man sich mit jemandem gut versteht, hat man eine gute Beziehung zu ihm.",
          "ar": "يتفاهم (مع)",
          "cat": "Freundschaft und Beziehungen",
          "ex": "Ich verstehe mich gut mit meinem Mitbewohner.",
          "dAr": "وجود علاقة طيبة مع شخص آخر.",
          "exAr": "أنا متفاهم كويس مع زميلي في السكن.",
          "catAr": "الصداقة والعلاقات"
        },
        {
          "w": "sich amüsieren (über + A)",
          "d": "Man hat Spaß und lacht über eine Person oder eine Sache.",
          "ar": "يستمتع / يضحك (على)",
          "cat": "Freundschaft und Beziehungen",
          "ex": "Die Kinder amüsieren sich über den lustigen Clown.",
          "dAr": "الاستمتاع والضحك على شخص أو شيء.",
          "exAr": "الأطفال بيضحكوا على المهرج الظريف.",
          "catAr": "الصداقة والعلاقات"
        },
        {
          "w": "schätzen",
          "d": "Man sagt, was man ungefähr glaubt oder vermutet, ohne es genau zu wissen.",
          "ar": "يظن / يخمِّن",
          "cat": "Freundschaft und Beziehungen",
          "ex": "Ich schätze, so tolle Freunde findet man selten.",
          "dAr": "التعبير عن تقدير أو تخمين من غير معرفة دقيقة.",
          "exAr": "أظن إن نادرًا ما الواحد يلاقي أصحاب رائعين كده.",
          "catAr": "الصداقة والعلاقات"
        },
        {
          "w": "schätzen (an + D)",
          "d": "Man findet eine Eigenschaft eines Menschen gut und wichtig.",
          "ar": "يقدِّر (صفة في شخص)",
          "cat": "Freundschaft und Beziehungen",
          "ex": "An meiner Freundin schätze ich vor allem ihre Ehrlichkeit.",
          "dAr": "اعتبار صفة في شخص جيدة ومهمة.",
          "exAr": "أكتر حاجة بقدّرها في صاحبتي هي صراحتها.",
          "catAr": "الصداقة والعلاقات"
        },
        {
          "w": "halten",
          "d": "Eine Freundschaft oder Beziehung hält, wenn sie lange besteht und nicht zu Ende geht.",
          "ar": "يدوم / يستمر",
          "cat": "Freundschaft und Beziehungen",
          "ex": "Unsere Freundschaft hält schon eine Ewigkeit.",
          "dAr": "استمرار الصداقة أو العلاقة فترة طويلة من غير ما تنتهي.",
          "exAr": "صداقتنا مستمرة من زمان جدًا.",
          "catAr": "الصداقة والعلاقات"
        },
        {
          "w": "aus den Augen verlieren",
          "d": "Man hat keinen Kontakt mehr zu einer Person, weil man sie lange nicht gesehen hat.",
          "ar": "تنقطع صلته بشخص",
          "cat": "Freundschaft und Beziehungen",
          "ex": "Meine Freunde aus der Kindheit habe ich leider aus den Augen verloren.",
          "dAr": "انقطاع التواصل مع شخص لأنك ما شفتوش من مدة طويلة.",
          "exAr": "للأسف انقطعت صلتي بأصحابي من الطفولة.",
          "catAr": "الصداقة والعلاقات"
        },
        {
          "w": "alles beim Alten bleiben",
          "d": "Nichts ändert sich, alles bleibt so, wie es vorher war.",
          "ar": "يفضل كل شيء على حاله",
          "cat": "Freundschaft und Beziehungen",
          "ex": "Früher dachte ich, dass immer alles beim Alten bleibt.",
          "dAr": "عدم تغيّر أي شيء وبقاؤه كما كان.",
          "exAr": "زمان كنت فاكر إن كل حاجة هتفضل زي ما هي.",
          "catAr": "الصداقة والعلاقات"
        },
        {
          "w": "eingespannt sein",
          "d": "Man hat sehr viel zu tun und deshalb kaum freie Zeit.",
          "ar": "مشغول جدًا / مضغوط",
          "cat": "Freundschaft und Beziehungen",
          "ex": "Ich bin beruflich stark eingespannt.",
          "dAr": "وجود شغل كتير ووقت فراغ قليل جدًا.",
          "exAr": "أنا مشغول جدًا في شغلي.",
          "catAr": "الصداقة والعلاقات"
        },
        {
          "w": "gehören (zu + D)",
          "d": "Man ist ein Teil von einer Gruppe oder einer Sache.",
          "ar": "ينتمي (إلى) / من ضمن",
          "cat": "Freundschaft und Beziehungen",
          "ex": "Neo Rauch gehört zu den wichtigsten Künstlern der Gegenwart.",
          "dAr": "أن تكون جزءًا من مجموعة أو شيء.",
          "exAr": "نيو راوخ من أهم فناني العصر الحالي.",
          "catAr": "الصداقة والعلاقات"
        },
        {
          "w": "ins Gespräch kommen (mit + D)",
          "d": "Man beginnt mit einer Person zu sprechen, oft ganz zufällig.",
          "ar": "يبدأ حديثًا (مع)",
          "cat": "Freundschaft und Beziehungen",
          "ex": "Im Zug bin ich mit einer netten Frau ins Gespräch gekommen.",
          "dAr": "بدء الكلام مع شخص، وغالبًا بالصدفة.",
          "exAr": "اتكلمت في القطر مع سيدة لطيفة.",
          "catAr": "الصداقة والعلاقات"
        },
        {
          "w": "über den Weg laufen",
          "d": "Man trifft eine Person zufällig, ohne dass man es geplant hat.",
          "ar": "يقابل شخصًا صدفةً",
          "cat": "Freundschaft und Beziehungen",
          "ex": "Gestern ist mir mein alter Lehrer im Supermarkt über den Weg gelaufen.",
          "dAr": "مقابلة شخص بالصدفة من غير تخطيط.",
          "exAr": "امبارح قابلت أستاذي القديم صدفة في السوبرماركت.",
          "catAr": "الصداقة والعلاقات"
        },
        {
          "w": "befreundet sein (mit + D)",
          "d": "Man ist mit jemandem befreundet, wenn diese Person ein Freund oder eine Freundin ist.",
          "ar": "بينه وبين شخص صداقة",
          "cat": "Freundschaft und Beziehungen",
          "ex": "Ich bin schon seit der Grundschule mit Clara befreundet.",
          "dAr": "وجود علاقة صداقة مع شخص.",
          "exAr": "أنا وكلارا أصحاب من المدرسة الابتدائية.",
          "catAr": "الصداقة والعلاقات"
        },
        {
          "w": "einsam",
          "d": "Man fühlt sich einsam, wenn man allein ist und niemanden zum Reden hat.",
          "ar": "وحيد",
          "cat": "Freundschaft und Beziehungen",
          "ex": "In der neuen Stadt fühlte sich Elena am Anfang einsam.",
          "dAr": "الشعور بالوحدة وعدم وجود أحد تتكلم معه.",
          "exAr": "إيلينا حسّت بالوحدة في المدينة الجديدة في البداية.",
          "catAr": "الصداقة والعلاقات"
        },
        {
          "w": "gegenseitig",
          "d": "Etwas ist gegenseitig, wenn zwei oder mehr Personen es füreinander tun.",
          "ar": "متبادَل / بعضهم البعض",
          "cat": "Freundschaft und Beziehungen",
          "ex": "Gute Freunde helfen sich gegenseitig.",
          "dAr": "أن يقوم شخصان أو أكثر بشيء لبعضهم البعض.",
          "exAr": "الأصدقاء الجيدون بيساعدوا بعض.",
          "catAr": "الصداقة والعلاقات"
        },
        {
          "w": "die Ewigkeit",
          "d": "Eine Ewigkeit ist eine sehr lange Zeit.",
          "ar": "زمن طويل جدًا / أبدية",
          "cat": "Freundschaft und Beziehungen",
          "ex": "Wir kennen uns schon seit einer Ewigkeit.",
          "dAr": "مدة طويلة جدًا.",
          "exAr": "إحنا نعرف بعض من زمان أوي.",
          "catAr": "الصداقة والعلاقات"
        },
        {
          "w": "der Bekannte",
          "d": "Ein Bekannter ist eine Person, die man kennt, die aber kein enger Freund ist.",
          "ar": "شخص من المعارف",
          "cat": "Freundschaft und Beziehungen",
          "ex": "Auf der Party habe ich viele Bekannte getroffen.",
          "dAr": "شخص تعرفه لكنه مش صديق مقرّب.",
          "exAr": "قابلت ناس كتير من معارفي في الحفلة.",
          "catAr": "الصداقة والعلاقات"
        },
        {
          "w": "Rücksicht nehmen (auf + A)",
          "d": "Man denkt an die Wünsche und Gefühle von anderen und verhält sich entsprechend.",
          "ar": "يراعي (الآخرين)",
          "cat": "Freundschaft und Beziehungen",
          "ex": "In einer WG muss man Rücksicht auf die anderen nehmen.",
          "dAr": "مراعاة رغبات الآخرين ومشاعرهم في التصرفات.",
          "exAr": "في السكن المشترك لازم تراعي الآخرين.",
          "catAr": "الصداقة والعلاقات"
        },
        {
          "w": "die Wohngemeinschaft",
          "d": "In einer Wohngemeinschaft wohnen mehrere Personen zusammen, die keine Familie sind.",
          "ar": "سكن مشترك",
          "cat": "Freundschaft und Beziehungen",
          "ex": "Nach dem Abitur gründeten Karim und Valentin eine Wohngemeinschaft.",
          "dAr": "سكن يعيش فيه عدة أشخاص معًا من غير ما يكونوا عائلة.",
          "exAr": "بعد الثانوية كريم وفالنتين أسّسوا سكنًا مشتركًا.",
          "catAr": "الصداقة والعلاقات"
        },
        {
          "w": "der Konflikt",
          "d": "Ein Konflikt ist eine Situation, in der Menschen unterschiedliche Interessen oder Meinungen haben.",
          "ar": "صراع / خلاف",
          "cat": "Konflikte",
          "ex": "In der WG gab es plötzlich viele Konflikte.",
          "dAr": "موقف تختلف فيه مصالح الناس أو آراؤهم.",
          "exAr": "فجأة ظهرت خلافات كتير في السكن المشترك.",
          "catAr": "الخلافات"
        },
        {
          "w": "der Streit",
          "d": "Bei einem Streit sprechen Menschen laut und wütend miteinander, weil sie nicht einer Meinung sind.",
          "ar": "خناقة / شجار",
          "cat": "Konflikte",
          "ex": "Nach einem Streit sollte man in Ruhe miteinander reden.",
          "dAr": "كلام بصوت عالٍ وبغضب بسبب اختلاف الآراء.",
          "exAr": "بعد الخناقة المفروض نتكلم مع بعض بهدوء.",
          "catAr": "الخلافات"
        },
        {
          "w": "die Kritik",
          "d": "Mit Kritik sagt man einer Person, was man an ihrem Verhalten oder ihrer Arbeit nicht gut findet.",
          "ar": "نقد",
          "cat": "Konflikte",
          "ex": "Mein Kollege kann Kritik leider nicht gut akzeptieren.",
          "dAr": "إخبار شخص بما لا يعجبك في تصرفاته أو شغله.",
          "exAr": "للأسف زميلي مش بيتقبّل النقد كويس.",
          "catAr": "الخلافات"
        },
        {
          "w": "die Harmonie",
          "d": "Harmonie ist ein Zustand, in dem Menschen friedlich und ohne Streit zusammenleben.",
          "ar": "انسجام / وئام",
          "cat": "Konflikte",
          "ex": "In unserer Familie ist Harmonie sehr wichtig.",
          "dAr": "حالة يعيش فيها الناس بسلام ومن غير خلافات.",
          "exAr": "الانسجام مهم جدًا في عيلتنا.",
          "catAr": "الخلافات"
        },
        {
          "w": "die Mahnung",
          "d": "Eine Mahnung ist ein Brief, in dem steht, dass man eine Rechnung noch bezahlen muss.",
          "ar": "إنذار بالدفع",
          "cat": "Konflikte",
          "ex": "Die Krankenkasse hat uns eine Mahnung geschickt.",
          "dAr": "رسالة تذكير بوجوب دفع فاتورة لم تُدفع بعد.",
          "exAr": "شركة التأمين الصحي بعتت لنا تذكيرًا بالدفع.",
          "catAr": "الخلافات"
        },
        {
          "w": "die Scheidung",
          "d": "Bei einer Scheidung beendet ein Ehepaar offiziell seine Ehe.",
          "ar": "طلاق",
          "cat": "Konflikte",
          "ex": "Nach der Scheidung zog er in eine kleine Wohnung.",
          "dAr": "إنهاء الزوجين زواجهما رسميًا.",
          "exAr": "بعد الطلاق انتقل لشقة صغيرة.",
          "catAr": "الخلافات"
        },
        {
          "w": "die Forderung",
          "d": "Eine Forderung ist ein Wunsch, den man sehr deutlich und bestimmt äußert.",
          "ar": "مطلب",
          "cat": "Konflikte",
          "ex": "Die Mitarbeiter haben eine klare Forderung: mehr Lohn.",
          "dAr": "طلب يتم التعبير عنه بوضوح وبإصرار.",
          "exAr": "الموظفون عندهم مطلب واضح: أجور أعلى.",
          "catAr": "الخلافات"
        },
        {
          "w": "die Erwartung",
          "d": "Eine Erwartung ist das, was man glaubt oder hofft, dass es passieren wird.",
          "ar": "توقُّع",
          "cat": "Konflikte",
          "ex": "Der Film hat meine Erwartungen leider nicht erfüllt.",
          "dAr": "ما تتوقع أو تتمنى حدوثه.",
          "exAr": "للأسف الفيلم ما حقّقش توقعاتي.",
          "catAr": "الخلافات"
        },
        {
          "w": "vor Gericht gehen",
          "d": "Man bittet ein Gericht, einen Streit offiziell zu entscheiden.",
          "ar": "يلجأ إلى المحكمة",
          "cat": "Konflikte",
          "ex": "Das Paar ging vor Gericht und bekam die Erlaubnis zu heiraten.",
          "dAr": "اللجوء للمحكمة للفصل رسميًا في خلاف.",
          "exAr": "الثنائي لجأ للمحكمة وحصل على الإذن بالزواج.",
          "catAr": "الخلافات"
        },
        {
          "w": "die Behauptung",
          "d": "Eine Behauptung ist eine Aussage, von der man nicht sicher weiß, ob sie stimmt.",
          "ar": "ادِّعاء / زعم",
          "cat": "Konflikte",
          "ex": "Diese Behauptung kann niemand beweisen.",
          "dAr": "قول لا يُعرف يقينًا إن كان صحيحًا.",
          "exAr": "محدش يقدر يثبت الادعاء ده.",
          "catAr": "الخلافات"
        },
        {
          "w": "behaupten",
          "d": "Man sagt, dass etwas so ist, auch wenn man es nicht beweisen kann.",
          "ar": "يدَّعي / يزعم",
          "cat": "Konflikte",
          "ex": "Er behauptet, dass er nie zu spät kommt.",
          "dAr": "القول إن شيئًا صحيح، حتى من غير القدرة على إثباته.",
          "exAr": "هو بيدّعي إنه عمره ما بيتأخر.",
          "catAr": "الخلافات"
        },
        {
          "w": "feststellen",
          "d": "Man merkt oder erkennt plötzlich etwas.",
          "ar": "يكتشف / يلاحظ",
          "cat": "Konflikte",
          "ex": "Elena und Maja stellten fest, dass sie im selben Haus wohnten.",
          "dAr": "ملاحظة شيء أو إدراكه فجأة.",
          "exAr": "إيلينا ومايا اكتشفوا إنهم ساكنين في نفس العمارة.",
          "catAr": "الخلافات"
        },
        {
          "w": "akzeptieren",
          "d": "Man nimmt etwas so an, wie es ist, auch wenn es einem nicht gefällt.",
          "ar": "يقبل / يتقبَّل",
          "cat": "Konflikte",
          "ex": "Man muss akzeptieren, dass andere eine andere Meinung haben.",
          "dAr": "تقبّل شيء كما هو حتى لو مش عاجبك.",
          "exAr": "لازم تتقبّل إن غيرك له رأي مختلف.",
          "catAr": "الخلافات"
        },
        {
          "w": "sich einigen (auf + A)",
          "d": "Nach einer Diskussion findet man eine Lösung, mit der alle einverstanden sind.",
          "ar": "يتَّفق (على)",
          "cat": "Konflikte",
          "ex": "Nach langer Diskussion haben wir uns auf einen Kompromiss geeinigt.",
          "dAr": "الوصول بعد نقاش لحل يوافق عليه الجميع.",
          "exAr": "بعد نقاش طويل اتفقنا على حل وسط.",
          "catAr": "الخلافات"
        },
        {
          "w": "klären",
          "d": "Man spricht über ein Problem, bis es gelöst oder nicht mehr unklar ist.",
          "ar": "يوضِّح / يحلّ (مشكلة)",
          "cat": "Konflikte",
          "ex": "Ich muss das Problem mit der Rechnung heute noch klären.",
          "dAr": "مناقشة مشكلة حتى تُحل أو يزول الغموض عنها.",
          "exAr": "لازم أوضّح مشكلة الفاتورة النهارده.",
          "catAr": "الخلافات"
        },
        {
          "w": "erleichtern",
          "d": "Etwas macht eine Sache leichter oder einfacher.",
          "ar": "يسهِّل",
          "cat": "Konflikte",
          "ex": "Ich-Aussagen erleichtern ein Gespräch über Konflikte.",
          "dAr": "جعل شيء أسهل أو أبسط.",
          "exAr": "الجمل بصيغة «أنا» بتسهّل الكلام عن الخلافات.",
          "catAr": "الخلافات"
        },
        {
          "w": "beweisen",
          "d": "Man zeigt mit Fakten, dass etwas wirklich wahr ist.",
          "ar": "يُثبِت",
          "cat": "Konflikte",
          "ex": "Kannst du beweisen, dass du das Geld nicht genommen hast?",
          "dAr": "إظهار حقائق تثبت أن شيئًا صحيح فعلًا.",
          "exAr": "تقدر تثبت إنك ما أخدتش الفلوس؟",
          "catAr": "الخلافات"
        },
        {
          "w": "sich aufregen (über + A)",
          "d": "Man wird wütend oder nervös, weil einem etwas nicht gefällt.",
          "ar": "يتعصَّب / ينفعل (على)",
          "cat": "Konflikte",
          "ex": "Mein Vater regt sich jeden Morgen über den Verkehr auf.",
          "dAr": "الشعور بالغضب أو التوتر بسبب شيء مش عاجبك.",
          "exAr": "أبويا بيتعصّب كل صباح من زحمة المرور.",
          "catAr": "الخلافات"
        },
        {
          "w": "hassen",
          "d": "Man mag eine Person oder eine Sache überhaupt nicht.",
          "ar": "يكره",
          "cat": "Konflikte",
          "ex": "Die Kollegen hassen es, wenn man zu spät kommt.",
          "dAr": "عدم محبة شخص أو شيء إطلاقًا.",
          "exAr": "الزملاء بيكرهوا إن حد ييجي متأخر.",
          "catAr": "الخلافات"
        },
        {
          "w": "lügen",
          "d": "Man sagt absichtlich etwas, das nicht wahr ist.",
          "ar": "يكذب",
          "cat": "Konflikte",
          "ex": "„Du lügst!“, rief der Löwe zornig.",
          "dAr": "قول شيء غير حقيقي عن قصد.",
          "exAr": "الأسد صاح بغضب: «إنت بتكذب!»",
          "catAr": "الخلافات"
        },
        {
          "w": "schweigen",
          "d": "Man sagt nichts und bleibt still.",
          "ar": "يسكت / يصمت",
          "cat": "Konflikte",
          "ex": "Nach dem Streit schwiegen beide den ganzen Abend.",
          "dAr": "عدم الكلام والبقاء ساكتًا.",
          "exAr": "بعد الخناقة الاتنين سكتوا طول المساء.",
          "catAr": "الخلافات"
        },
        {
          "w": "stehlen",
          "d": "Man nimmt etwas, das einer anderen Person gehört, ohne zu fragen.",
          "ar": "يسرق",
          "cat": "Konflikte",
          "ex": "Der Rabe hatte einen Käse gestohlen.",
          "dAr": "أخذ شيء يملكه شخص آخر من غير إذنه.",
          "exAr": "الغراب كان سرق قطعة جبنة.",
          "catAr": "الخلافات"
        },
        {
          "w": "übertreiben",
          "d": "Man macht etwas größer, schlimmer oder wichtiger, als es wirklich ist.",
          "ar": "يبالغ",
          "cat": "Konflikte",
          "ex": "Jetzt übertreibst du aber etwas!",
          "dAr": "تصوير شيء على أنه أكبر أو أسوأ أو أهم من حقيقته.",
          "exAr": "إنت كده بتبالغ شوية!",
          "catAr": "الخلافات"
        },
        {
          "w": "verhindern",
          "d": "Man sorgt dafür, dass etwas nicht passiert.",
          "ar": "يمنع (حدوث شيء)",
          "cat": "Konflikte",
          "ex": "Claras Vater wollte die Hochzeit unbedingt verhindern.",
          "dAr": "التصرّف بحيث لا يحدث شيء.",
          "exAr": "والد كلارا كان عايز يمنع الجواز بأي ثمن.",
          "catAr": "الخلافات"
        },
        {
          "w": "sich verspäten",
          "d": "Man kommt später als geplant.",
          "ar": "يتأخَّر",
          "cat": "Konflikte",
          "ex": "Ich verspäte mich etwas, weil der Bus nicht kommt.",
          "dAr": "الوصول بعد الوقت المخطط له.",
          "exAr": "هتأخر شوية لأن الأتوبيس مش جاي.",
          "catAr": "الخلافات"
        },
        {
          "w": "zusammenstoßen",
          "d": "Zwei Personen oder Fahrzeuge treffen mit Kraft aufeinander, weil sie nicht aufgepasst haben.",
          "ar": "يصطدم / يتخبَّط في",
          "cat": "Konflikte",
          "ex": "Auf der Straße stießen die beiden Frauen zusammen.",
          "dAr": "اصطدام شخصين أو مركبتين بقوة بسبب عدم الانتباه.",
          "exAr": "السيدتان اصطدمتا ببعض في الشارع.",
          "catAr": "الخلافات"
        },
        {
          "w": "zwingen",
          "d": "Man bringt eine Person dazu, etwas zu tun, was sie nicht tun will.",
          "ar": "يُجبِر",
          "cat": "Konflikte",
          "ex": "Die finanzielle Situation zwang Clara, weiter Konzerte zu geben.",
          "dAr": "إجبار شخص على فعل شيء مش عايز يعمله.",
          "exAr": "الظروف المالية أجبرت كلارا إنها تواصل تقديم الحفلات الموسيقية.",
          "catAr": "الخلافات"
        },
        {
          "w": "angeblich",
          "d": "Man sagt angeblich, wenn man etwas gehört hat, aber nicht weiß, ob es stimmt.",
          "ar": "حسب ما يُقال / مزعوم",
          "cat": "Konflikte",
          "ex": "Der Schauspieler hat sich angeblich von seiner Frau getrennt.",
          "dAr": "تُقال عند نقل معلومة سمعتها من غير التأكد من صحتها.",
          "exAr": "يُقال إن الممثل انفصل عن زوجته.",
          "catAr": "الخلافات"
        },
        {
          "w": "diplomatisch",
          "d": "Wer diplomatisch ist, sagt seine Meinung freundlich und vorsichtig, ohne andere zu verletzen.",
          "ar": "دبلوماسي / لَبِق",
          "cat": "Konflikte",
          "ex": "Bei einem Streit sollte man ruhig und diplomatisch bleiben.",
          "dAr": "التعبير عن الرأي بلطف وحذر من غير جرح الآخرين.",
          "exAr": "في الخناقة المفروض تفضل هادي ودبلوماسي.",
          "catAr": "الخلافات"
        },
        {
          "w": "der Kompromiss",
          "d": "Ein Kompromiss ist eine Lösung, bei der jede Seite ein bisschen nachgibt.",
          "ar": "حلّ وسط",
          "cat": "Konflikte",
          "ex": "Wir finden bestimmt einen Kompromiss.",
          "dAr": "حل تتنازل فيه كل جهة شوية.",
          "exAr": "أكيد هنلاقي حل وسط.",
          "catAr": "الخلافات"
        },
        {
          "w": "nachgeben",
          "d": "Man akzeptiert in einem Streit am Ende die Meinung oder den Wunsch des anderen.",
          "ar": "يتنازل / يتراجع",
          "cat": "Konflikte",
          "ex": "Der Klügere gibt nach.",
          "dAr": "قبول رأي الآخر أو رغبته في نهاية الخلاف.",
          "exAr": "الأعقل هو اللي بيتنازل.",
          "catAr": "الخلافات"
        },
        {
          "w": "tolerant",
          "d": "Wer tolerant ist, akzeptiert andere Meinungen und Lebensweisen.",
          "ar": "متسامح",
          "cat": "Konflikte",
          "ex": "Wenn man tolerant ist, kann man auch andere Meinungen akzeptieren.",
          "dAr": "تقبّل آراء الآخرين وطرق حياتهم.",
          "exAr": "لو إنت متسامح تقدر تتقبّل آراء مختلفة.",
          "catAr": "الخلافات"
        },
        {
          "w": "genervt",
          "d": "Man ist genervt, wenn man von etwas gestört wird und ein bisschen ärgerlich ist.",
          "ar": "متضايق / زهقان",
          "cat": "Konflikte",
          "ex": "Nach dem langen Tag war ich total genervt.",
          "dAr": "الشعور بالضيق والانزعاج من شيء.",
          "exAr": "بعد اليوم الطويل كنت متضايق جدًا.",
          "catAr": "الخلافات"
        },
        {
          "w": "jedes Wort auf die Goldwaage legen",
          "d": "Man nimmt jedes Wort einer Person sehr genau und ist deshalb schnell beleidigt.",
          "ar": "يدقِّق في كل كلمة",
          "cat": "Konflikte",
          "ex": "Unter Freunden sollte man nicht jedes Wort auf die Goldwaage legen.",
          "dAr": "التدقيق الشديد في كل كلمة بحيث تزعل بسرعة.",
          "exAr": "بين الأصحاب المفروض ما ندقّقش في كل كلمة.",
          "catAr": "الخلافات"
        },
        {
          "w": "die Ich-Aussage",
          "d": "Mit einer Ich-Aussage spricht man über die eigenen Gefühle und Wünsche, statt den anderen zu kritisieren.",
          "ar": "جملة بصيغة «أنا»",
          "cat": "Konflikte",
          "ex": "„Ich wünsche mir mehr Ruhe“ ist eine typische Ich-Aussage.",
          "dAr": "التعبير عن مشاعرك ورغباتك بصيغة «أنا» بدل انتقاد الآخر.",
          "exAr": "«نفسي في هدوء أكتر» مثال لجملة بصيغة «أنا».",
          "catAr": "الخلافات"
        },
        {
          "w": "arm",
          "d": "Wer arm ist, hat sehr wenig Geld.",
          "ar": "فقير",
          "cat": "Personen",
          "ex": "Claras Vater wollte nicht, dass sie einen armen Künstler heiratet.",
          "dAr": "امتلاك مال قليل جدًا.",
          "exAr": "والد كلارا ماكانش عايزها تتجوز فنانًا فقيرًا.",
          "catAr": "الأشخاص"
        },
        {
          "w": "berufstätig",
          "d": "Wer berufstätig ist, hat eine Arbeit und verdient Geld.",
          "ar": "يعمل / موظَّف",
          "cat": "Personen",
          "ex": "Weil wir beide berufstätig sind, sehen wir uns nicht mehr so oft.",
          "dAr": "امتلاك وظيفة وكسب مال من العمل.",
          "exAr": "لأننا إحنا الاتنين بنشتغل، ما بقيناش نشوف بعض كتير.",
          "catAr": "الأشخاص"
        },
        {
          "w": "bereit sein (zu + D)",
          "d": "Man ist zu etwas bereit, wenn man es tun will oder kann.",
          "ar": "مستعدّ (لـ)",
          "cat": "Personen",
          "ex": "Bist du bereit zu einem Kompromiss?",
          "dAr": "الاستعداد لفعل شيء أو القدرة عليه.",
          "exAr": "إنت مستعد لحل وسط؟",
          "catAr": "الأشخاص"
        },
        {
          "w": "erschöpft",
          "d": "Wer erschöpft ist, ist sehr müde und hat keine Kraft mehr.",
          "ar": "مُنهَك / تعبان جدًا",
          "cat": "Personen",
          "ex": "Seit du den Job gewechselt hast, bist du ständig erschöpft.",
          "dAr": "الشعور بتعب شديد وعدم وجود طاقة.",
          "exAr": "من ساعة ما غيّرت شغلك وإنت مرهق طول الوقت.",
          "catAr": "الأشخاص"
        },
        {
          "w": "der Ehegatte",
          "d": "Der Ehegatte ist der Mann, mit dem eine Person verheiratet ist.",
          "ar": "الزوج",
          "cat": "Personen",
          "ex": "Die Zeitung schrieb über den betrunkenen Ehegatten der Sängerin.",
          "dAr": "الرجل الذي تكون متزوجًا منه.",
          "exAr": "الجريدة كتبت عن زوج المغنية المخمور.",
          "catAr": "الأشخاص"
        },
        {
          "w": "die Ehegattin",
          "d": "Die Ehegattin ist die Frau, mit der eine Person verheiratet ist.",
          "ar": "الزوجة",
          "cat": "Personen",
          "ex": "Der Bürgermeister kam mit seiner Ehegattin zum Fest.",
          "dAr": "المرأة التي تكون متزوجًا منها.",
          "exAr": "رئيس البلدية جه الحفلة مع زوجته.",
          "catAr": "الأشخاص"
        },
        {
          "w": "der Feind",
          "d": "Ein Feind ist eine Person, die gegen einen anderen kämpft oder ihm schaden will.",
          "ar": "عدوّ",
          "cat": "Personen",
          "ex": "Wenn ein Feind dich lobt, musst du aufpassen.",
          "dAr": "شخص يحارب غيره أو يريد إيذاءه.",
          "exAr": "لو عدو مدحك، لازم تاخد بالك.",
          "catAr": "الأشخاص"
        },
        {
          "w": "die Feindin",
          "d": "Eine Feindin ist eine Frau, die gegen eine andere Person ist und ihr schaden will.",
          "ar": "عدوّة",
          "cat": "Personen",
          "ex": "Früher waren die beiden Nachbarinnen Feindinnen, heute sind sie Freundinnen.",
          "dAr": "امرأة تعادي شخصًا آخر وتريد إيذاءه.",
          "exAr": "زمان الجارتان كانتا عدوتين، ودلوقتي بقتا صديقتين.",
          "catAr": "الأشخاص"
        },
        {
          "w": "loben",
          "d": "Man sagt einer Person, dass sie etwas gut gemacht hat.",
          "ar": "يمدح / يُثني على",
          "cat": "Personen",
          "ex": "Der Fuchs lobte den Raben für seine schönen Federn.",
          "dAr": "إخبار شخص بأنه عمل شيئًا كويس.",
          "exAr": "الثعلب مدح الغراب على ريشه الجميل.",
          "catAr": "الأشخاص"
        },
        {
          "w": "ehrlich",
          "d": "Wer ehrlich ist, sagt immer die Wahrheit.",
          "ar": "صادق / أمين",
          "cat": "Personen",
          "ex": "Ein echter Freund sagt dir ehrlich seine Meinung.",
          "dAr": "قول الحقيقة دائمًا.",
          "exAr": "الصديق الحقيقي بيقول لك رأيه بصراحة.",
          "catAr": "الأشخاص"
        },
        {
          "w": "hilfsbereit",
          "d": "Wer hilfsbereit ist, hilft anderen Menschen gern.",
          "ar": "خدوم / يحب المساعدة",
          "cat": "Personen",
          "ex": "Meine Nachbarin ist sehr hilfsbereit.",
          "dAr": "محبة مساعدة الآخرين.",
          "exAr": "جارتي بتحب تساعد جدًا.",
          "catAr": "الأشخاص"
        },
        {
          "w": "höflich",
          "d": "Wer höflich ist, ist freundlich und hat gute Manieren.",
          "ar": "مؤدَّب / لطيف",
          "cat": "Personen",
          "ex": "„Danke, meine Herren“, sagte der Fuchs höflich.",
          "dAr": "التعامل بلطف وبأدب.",
          "exAr": "الثعلب قال بأدب: «شكرًا يا سادة».",
          "catAr": "الأشخاص"
        },
        {
          "w": "klug",
          "d": "Wer klug ist, versteht schnell und kann gut nachdenken.",
          "ar": "ذكي",
          "cat": "Personen",
          "ex": "Der Fuchs war klug und wartete geduldig.",
          "dAr": "الفهم السريع والقدرة على التفكير الجيد.",
          "exAr": "الثعلب كان ذكيًا واستنى بصبر.",
          "catAr": "الأشخاص"
        },
        {
          "w": "zornig",
          "d": "Wer zornig ist, ist sehr wütend.",
          "ar": "غاضب جدًا",
          "cat": "Personen",
          "ex": "Der Löwe brüllte zornig zurück.",
          "dAr": "الشعور بغضب شديد.",
          "exAr": "الأسد ردّ بزئير غاضب.",
          "catAr": "الأشخاص"
        },
        {
          "w": "verwitwet",
          "d": "Eine Person ist verwitwet, wenn ihr Ehepartner gestorben ist.",
          "ar": "أرمل / أرملة",
          "cat": "Personen",
          "ex": "Meine Großmutter ist seit fünf Jahren verwitwet.",
          "dAr": "فقدان الزوج أو الزوجة بالوفاة.",
          "exAr": "جدتي أرملة من خمس سنين.",
          "catAr": "الأشخاص"
        },
        {
          "w": "beißen",
          "d": "Man drückt die Zähne fest in eine Person, ein Tier oder eine Sache.",
          "ar": "يعَضّ",
          "cat": "Tiere",
          "ex": "Der Löwe biss den Bären mit seinen scharfen Zähnen.",
          "dAr": "غرس الأسنان بقوة في شخص أو حيوان أو شيء.",
          "exAr": "الأسد عضّ الدب بأسنانه الحادة.",
          "catAr": "الحيوانات"
        },
        {
          "w": "fressen",
          "d": "Bei Tieren sagt man fressen, wenn sie Nahrung zu sich nehmen.",
          "ar": "يأكل (للحيوان)",
          "cat": "Tiere",
          "ex": "Der Fuchs fraß den Käse und lachte über den Raben.",
          "dAr": "أكل الطعام، ويُستخدم الفعل مع الحيوانات.",
          "exAr": "الثعلب أكل الجبنة وضحك على الغراب.",
          "catAr": "الحيوانات"
        },
        {
          "w": "scharf",
          "d": "Etwas ist scharf, wenn es leicht schneiden oder stechen kann.",
          "ar": "حادّ",
          "cat": "Tiere",
          "ex": "Das Krokodil hat scharfe Zähne.",
          "dAr": "القدرة على القطع أو الوخز بسهولة.",
          "exAr": "التمساح عنده أسنان حادة.",
          "catAr": "الحيوانات"
        },
        {
          "w": "kräftig",
          "d": "Etwas ist kräftig, wenn es sehr stark ist oder mit viel Kraft passiert.",
          "ar": "قوي / بقوة",
          "cat": "Tiere",
          "ex": "Die beiden stießen ziemlich kräftig zusammen.",
          "dAr": "القوة الشديدة أو حدوث شيء بقوة كبيرة.",
          "exAr": "هما اصطدموا ببعض بقوة كبيرة.",
          "catAr": "الحيوانات"
        },
        {
          "w": "die Beute",
          "d": "Die Beute ist das Tier, das ein anderes Tier oder ein Jäger gefangen hat.",
          "ar": "فريسة / غنيمة",
          "cat": "Tiere",
          "ex": "Am Ende holte sich der Fuchs die Beute.",
          "dAr": "الحيوان الذي يصطاده حيوان آخر أو صياد.",
          "exAr": "في النهاية الثعلب أخد الفريسة لنفسه.",
          "catAr": "الحيوانات"
        },
        {
          "w": "die Ente",
          "d": "Eine Ente ist ein Vogel, der gut schwimmen kann und oft auf Seen lebt.",
          "ar": "بطة",
          "cat": "Tiere",
          "ex": "Im Park füttern die Kinder die Enten.",
          "dAr": "طائر يجيد السباحة ويعيش غالبًا في البحيرات.",
          "exAr": "الأطفال بيأكّلوا البط في الحديقة.",
          "catAr": "الحيوانات"
        },
        {
          "w": "die Fliege",
          "d": "Eine Fliege ist ein kleines Insekt mit Flügeln, das oft im Haus herumfliegt.",
          "ar": "ذبابة",
          "cat": "Tiere",
          "ex": "Im Sommer sind viele Fliegen in der Küche.",
          "dAr": "حشرة صغيرة مجنحة تطير كثيرًا داخل البيت.",
          "exAr": "في الصيف فيه ذباب كتير في المطبخ.",
          "catAr": "الحيوانات"
        },
        {
          "w": "der Fuchs",
          "d": "Ein Fuchs ist ein rotbraunes Tier mit einem langen Schwanz, das als sehr klug gilt.",
          "ar": "ثعلب",
          "cat": "Tiere",
          "ex": "In vielen Fabeln ist der Fuchs besonders klug.",
          "dAr": "حيوان لونه بني محمر وله ذيل طويل ويُعتبر ذكيًا.",
          "exAr": "في حكايات كتير الثعلب بيكون ذكيًا جدًا.",
          "catAr": "الحيوانات"
        },
        {
          "w": "die Giraffe",
          "d": "Eine Giraffe ist ein afrikanisches Tier mit einem sehr langen Hals.",
          "ar": "زرافة",
          "cat": "Tiere",
          "ex": "Die Giraffe frisst Blätter von hohen Bäumen.",
          "dAr": "حيوان إفريقي له رقبة طويلة جدًا.",
          "exAr": "الزرافة بتاكل أوراق الأشجار العالية.",
          "catAr": "الحيوانات"
        },
        {
          "w": "der Hirsch",
          "d": "Ein Hirsch ist ein großes Tier im Wald, das oft ein Geweih auf dem Kopf hat.",
          "ar": "أيِّل",
          "cat": "Tiere",
          "ex": "Der Bär hatte einen jungen Hirsch gefangen.",
          "dAr": "حيوان كبير يعيش في الغابات وغالبًا له قرون متفرعة.",
          "exAr": "الدب كان اصطاد أيلًا صغيرًا.",
          "catAr": "الحيوانات"
        },
        {
          "w": "das Krokodil",
          "d": "Ein Krokodil ist ein großes Tier mit vielen Zähnen, das im Wasser und an Land lebt.",
          "ar": "تمساح",
          "cat": "Tiere",
          "ex": "Früher lebten im Nil viele Krokodile.",
          "dAr": "حيوان كبير له أسنان كثيرة ويعيش في الماء وعلى اليابسة.",
          "exAr": "زمان كان فيه تماسيح كتير في النيل.",
          "catAr": "الحيوانات"
        },
        {
          "w": "die Mücke",
          "d": "Eine Mücke ist ein kleines Insekt, das sticht und Blut trinkt.",
          "ar": "ناموسة / بعوضة",
          "cat": "Tiere",
          "ex": "In der Nacht hat mich eine Mücke gestochen.",
          "dAr": "حشرة صغيرة تلسع وتمتص الدم.",
          "exAr": "ناموسة لسعتني بالليل.",
          "catAr": "الحيوانات"
        },
        {
          "w": "der Pinguin",
          "d": "Ein Pinguin ist ein schwarz-weißer Vogel, der nicht fliegen, aber sehr gut schwimmen kann.",
          "ar": "بطريق",
          "cat": "Tiere",
          "ex": "Pinguine leben vor allem in der Antarktis.",
          "dAr": "طائر أبيض وأسود لا يطير لكنه يجيد السباحة.",
          "exAr": "البطاريق بتعيش خصوصًا في القارة القطبية الجنوبية.",
          "catAr": "الحيوانات"
        },
        {
          "w": "der Rabe",
          "d": "Ein Rabe ist ein großer schwarzer Vogel.",
          "ar": "غراب",
          "cat": "Tiere",
          "ex": "Der Rabe saß mit dem Käse auf einem Baum.",
          "dAr": "طائر أسود كبير.",
          "exAr": "الغراب كان قاعد على شجرة ومعاه الجبنة.",
          "catAr": "الحيوانات"
        },
        {
          "w": "die Schildkröte",
          "d": "Eine Schildkröte ist ein langsames Tier mit einem harten Panzer auf dem Rücken.",
          "ar": "سلحفاة",
          "cat": "Tiere",
          "ex": "Unsere Schildkröte ist schon über vierzig Jahre alt.",
          "dAr": "حيوان بطيء له صدفة صلبة على ظهره.",
          "exAr": "سلحفاتنا عمرها أكتر من أربعين سنة.",
          "catAr": "الحيوانات"
        },
        {
          "w": "der Bär",
          "d": "Ein Bär ist ein großes, starkes Tier mit dickem Fell, das im Wald lebt.",
          "ar": "دُبّ",
          "cat": "Tiere",
          "ex": "Der Bär und der Löwe stritten um die Beute.",
          "dAr": "حيوان كبير وقوي له فرو كثيف ويعيش في الغابة.",
          "exAr": "الدب والأسد اتخانقوا على الفريسة.",
          "catAr": "الحيوانات"
        },
        {
          "w": "der Löwe",
          "d": "Der Löwe ist ein großes, gefährliches Tier aus Afrika und gilt als König der Tiere.",
          "ar": "أسد",
          "cat": "Tiere",
          "ex": "Der Löwe brüllte so laut, dass alle Tiere wegliefen.",
          "dAr": "حيوان إفريقي كبير وخطير يُسمّى ملك الحيوانات.",
          "exAr": "الأسد زأر بصوت عالي لدرجة إن كل الحيوانات هربت.",
          "catAr": "الحيوانات"
        },
        {
          "w": "der Hase",
          "d": "Ein Hase ist ein schnelles Tier mit langen Ohren, das auf Wiesen und Feldern lebt.",
          "ar": "أرنب برّي",
          "cat": "Tiere",
          "ex": "Der Hase lief schnell bis an das Ufer des Sees.",
          "dAr": "حيوان سريع ذو أذنين طويلتين يعيش في المروج والحقول.",
          "exAr": "الأرنب البري جري بسرعة لحد شاطئ البحيرة.",
          "catAr": "الحيوانات"
        },
        {
          "w": "der Frosch",
          "d": "Ein Frosch ist ein kleines grünes Tier, das am Wasser lebt und gut springen kann.",
          "ar": "ضفدع",
          "cat": "Tiere",
          "ex": "Als der Hase kam, sprangen alle Frösche ins Wasser.",
          "dAr": "حيوان صغير أخضر يعيش قرب الماء ويجيد القفز.",
          "exAr": "لما جه الأرنب، كل الضفادع نطّت في الميّه.",
          "catAr": "الحيوانات"
        },
        {
          "w": "die Versammlung",
          "d": "Bei einer Versammlung treffen sich viele Menschen, um über ein Thema zu sprechen oder etwas zu entscheiden.",
          "ar": "اجتماع / جمعية",
          "cat": "Auf einer Versammlung",
          "ex": "Heute Abend müssen alle Mitarbeiter zur Versammlung kommen.",
          "dAr": "لقاء يجتمع فيه ناس كتير لمناقشة موضوع أو اتخاذ قرار.",
          "exAr": "كل الموظفين لازم يحضروا الاجتماع مساء النهارده.",
          "catAr": "في اجتماع"
        },
        {
          "w": "die Teilnahme",
          "d": "Teilnahme bedeutet, dass man bei einer Sache mitmacht oder dabei ist.",
          "ar": "مشاركة / حضور",
          "cat": "Auf einer Versammlung",
          "ex": "Die Teilnahme an der Versammlung ist Pflicht.",
          "dAr": "المشاركة في نشاط أو الحضور فيه.",
          "exAr": "المشاركة في الاجتماع إلزامية.",
          "catAr": "في اجتماع"
        },
        {
          "w": "die Mehrheit",
          "d": "Die Mehrheit ist der größere Teil einer Gruppe.",
          "ar": "الأغلبية",
          "cat": "Auf einer Versammlung",
          "ex": "Die Mehrheit hat für den Streik gestimmt.",
          "dAr": "الجزء الأكبر من مجموعة.",
          "exAr": "الأغلبية صوّتت لصالح الإضراب.",
          "catAr": "في اجتماع"
        },
        {
          "w": "die Presse",
          "d": "Zur Presse gehören alle Zeitungen, Zeitschriften und ihre Journalisten.",
          "ar": "الصحافة",
          "cat": "Auf einer Versammlung",
          "ex": "Die Presse schreibt ständig über das Privatleben der Stars.",
          "dAr": "الصحف والمجلات والصحفيون العاملون فيها.",
          "exAr": "الصحافة بتكتب باستمرار عن الحياة الخاصة للنجوم.",
          "catAr": "في اجتماع"
        },
        {
          "w": "die Vorstellung",
          "d": "Bei einer Vorstellung wird eine neue Person oder Sache anderen Menschen präsentiert.",
          "ar": "تقديم / تعريف",
          "cat": "Auf einer Versammlung",
          "ex": "Kommst du zur Vorstellung der neuen Präsidentin?",
          "dAr": "تقديم شخص جديد أو شيء جديد للآخرين.",
          "exAr": "هتيجي تقديم الرئيسة الجديدة؟",
          "catAr": "في اجتماع"
        },
        {
          "w": "die Rede",
          "d": "Eine Rede ist ein Text, den man vor vielen Menschen laut spricht.",
          "ar": "خطاب / كلمة",
          "cat": "Auf einer Versammlung",
          "ex": "Die neue Präsidentin hielt eine kurze Rede.",
          "dAr": "كلام يُلقى بصوت عالٍ أمام عدد كبير من الناس.",
          "exAr": "الرئيسة الجديدة ألقت كلمة قصيرة.",
          "catAr": "في اجتماع"
        },
        {
          "w": "die Erhöhung",
          "d": "Bei einer Erhöhung wird etwas höher, zum Beispiel ein Preis oder ein Lohn.",
          "ar": "زيادة / رفع",
          "cat": "Auf einer Versammlung",
          "ex": "Die Mitarbeiter wollen eine Erhöhung des Stundenlohns.",
          "dAr": "ارتفاع شيء، مثل سعر أو أجر.",
          "exAr": "الموظفون عايزين زيادة في أجر الساعة.",
          "catAr": "في اجتماع"
        },
        {
          "w": "beschließen",
          "d": "Man entscheidet sich nach einer Überlegung oder Diskussion für etwas.",
          "ar": "يقرِّر",
          "cat": "Auf einer Versammlung",
          "ex": "Wir haben beschlossen, einmal im Jahr gemeinsam wegzufahren.",
          "dAr": "اتخاذ قرار بعد تفكير أو نقاش.",
          "exAr": "قررنا نسافر مع بعض مرة في السنة.",
          "catAr": "في اجتماع"
        },
        {
          "w": "streiken",
          "d": "Arbeitnehmer streiken, wenn sie nicht arbeiten, um bessere Bedingungen zu bekommen.",
          "ar": "يُضرِب عن العمل",
          "cat": "Auf einer Versammlung",
          "ex": "Die Busfahrer streiken heute für mehr Lohn.",
          "dAr": "امتناع العاملين عن العمل للمطالبة بظروف أفضل.",
          "exAr": "سائقو الأتوبيسات مضربين النهارده للمطالبة بأجور أعلى.",
          "catAr": "في اجتماع"
        },
        {
          "w": "geheim",
          "d": "Etwas ist geheim, wenn andere Leute es nicht wissen dürfen.",
          "ar": "سرّي",
          "cat": "Auf einer Versammlung",
          "ex": "Stars können fast nichts geheim halten.",
          "dAr": "شيء لا يُسمح للآخرين بمعرفته.",
          "exAr": "النجوم تقريبًا مش بيقدروا يحتفظوا بأي حاجة سرية.",
          "catAr": "في اجتماع"
        },
        {
          "w": "die Ausgabe",
          "d": "Eine Ausgabe ist eine Nummer einer Zeitung oder Zeitschrift, die zu einem bestimmten Zeitpunkt erscheint.",
          "ar": "عدد (مجلة / جريدة)",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Lesen Sie den Artikel in der Juli-Ausgabe.",
          "dAr": "عدد من صحيفة أو مجلة يصدر في وقت معين.",
          "exAr": "اقرأ المقال في عدد يوليو.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "die Schlagzeile",
          "d": "Eine Schlagzeile ist die große Überschrift eines Artikels in der Zeitung.",
          "ar": "عنوان رئيسي (مانشيت)",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Die Schlagzeile auf der ersten Seite war riesig.",
          "dAr": "العنوان الكبير لمقال في صحيفة.",
          "exAr": "العنوان الرئيسي في الصفحة الأولى كان ضخمًا.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "die Einzelheit",
          "d": "Eine Einzelheit ist eine genaue, kleine Information zu einer Sache.",
          "ar": "تفصيلة",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Erzähl mir alle Einzelheiten von der Hochzeit!",
          "dAr": "معلومة صغيرة ودقيقة عن شيء.",
          "exAr": "احكي لي كل تفاصيل الفرح!",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "das Institut",
          "d": "Ein Institut ist eine Einrichtung, zum Beispiel an einer Universität, in der man forscht oder lehrt.",
          "ar": "معهد",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Du hast deine Unterlagen im Institut vergessen.",
          "dAr": "مؤسسة للبحث أو التدريس، مثل معهد داخل جامعة.",
          "exAr": "إنت نسيت أوراقك في المعهد.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "die Kabine",
          "d": "Eine Kabine ist ein kleiner Raum, zum Beispiel zum Umziehen im Sportverein.",
          "ar": "كابينة / غرفة تغيير الملابس",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Nach dem Training habe ich dich in der Kabine nicht mehr gesehen.",
          "dAr": "غرفة صغيرة، مثل غرفة تغيير الملابس في النادي.",
          "exAr": "بعد التمرين ما شفتكش تاني في غرفة تغيير الملابس.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "fürchten",
          "d": "Man hat Angst, dass etwas Schlechtes passiert.",
          "ar": "يخشى / يخاف",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Ich fürchte, dass ich ihn als Freund verliere.",
          "dAr": "الخوف من حدوث شيء سيئ.",
          "exAr": "خايف أخسره كصديق.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "klicken (auf + A)",
          "d": "Man drückt mit der Maus oder dem Finger auf etwas auf dem Bildschirm.",
          "ar": "يضغط (على)",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Viele Leute klicken nur auf Artikel mit spannenden Schlagzeilen.",
          "dAr": "الضغط بالفأرة أو الإصبع على شيء في الشاشة.",
          "exAr": "ناس كتير بيضغطوا بس على المقالات ذات العناوين المثيرة.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "stecken (in + D)",
          "d": "Etwas steckt in einer Sache, wenn es darin enthalten ist.",
          "ar": "يكمُن / موجود (في)",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "In jeder Fabel steckt eine Lebensweisheit.",
          "dAr": "أن يكون شيء موجودًا داخل شيء آخر.",
          "exAr": "في كل حكاية رمزية حكمة للحياة.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "eigen",
          "d": "Etwas ist eigen, wenn es nur einer Person selbst gehört.",
          "ar": "خاص / مِلكه",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Nach dem Studium suchte sich jeder eine eigene Wohnung.",
          "dAr": "شيء يخص شخصًا وحده.",
          "exAr": "بعد الدراسة كل واحد دوّر على شقة خاصة بيه.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "kommerziell",
          "d": "Etwas ist kommerziell, wenn es mit Geschäft und Geldverdienen zu tun hat.",
          "ar": "تجاري",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Neo Rauch ist ein kommerziell sehr erfolgreicher Künstler.",
          "dAr": "شيء متعلق بالتجارة وكسب المال.",
          "exAr": "نيو راوخ فنان ناجح جدًا تجاريًا.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "erhalten sein",
          "d": "Etwas ist erhalten, wenn es noch existiert und nicht kaputt oder verloren ist.",
          "ar": "محفوظ / باقٍ",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Die Briefe sind alt, aber gut erhalten.",
          "dAr": "بقاء شيء موجودًا من غير تلف أو ضياع.",
          "exAr": "الرسائل قديمة، لكنها محفوظة بحالة جيدة.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "der Ersatz",
          "d": "Ein Ersatz ist etwas, das man statt einer anderen Sache benutzt.",
          "ar": "بديل",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Geld ist kein Ersatz für ein glückliches Familienleben.",
          "dAr": "شيء يُستخدم بدل شيء آخر.",
          "exAr": "الفلوس مش بديل لحياة عائلية سعيدة.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "die Gegenwart",
          "d": "Die Gegenwart ist die Zeit, in der wir jetzt leben.",
          "ar": "الحاضر",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Viele Fabeln passen auch gut in die Gegenwart.",
          "dAr": "الزمن الذي نعيش فيه الآن.",
          "exAr": "حكايات رمزية كتير تنطبق كمان على عصرنا الحالي.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "die Gelegenheit",
          "d": "Eine Gelegenheit ist ein günstiger Moment, um etwas zu tun.",
          "ar": "فرصة",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Das Sommerfest ist eine tolle Gelegenheit, die Nachbarn kennenzulernen.",
          "dAr": "وقت مناسب لفعل شيء.",
          "exAr": "حفلة الصيف فرصة رائعة للتعرّف على الجيران.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "der Grill",
          "d": "Ein Grill ist ein Gerät, auf dem man draußen Fleisch oder Gemüse über Feuer zubereitet.",
          "ar": "شوّاية",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Beim Sommerfest stehen alle Nachbarn am Grill.",
          "dAr": "جهاز لطهي اللحم أو الخضار على النار في الهواء الطلق.",
          "exAr": "في حفلة الصيف كل الجيران واقفين عند الشواية.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "die Konzentration",
          "d": "Konzentration bedeutet, dass man alle Gedanken auf eine Sache richtet.",
          "ar": "تركيز",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Für diese Arbeit braucht man viel Konzentration.",
          "dAr": "توجيه كل الأفكار إلى شيء واحد.",
          "exAr": "الشغل ده محتاج تركيز كبير.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "die Krankenkasse",
          "d": "Die Krankenkasse ist eine Versicherung, die die Kosten für Arzt und Krankenhaus bezahlt.",
          "ar": "التأمين الصحي",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Ich muss noch bei der Krankenkasse anrufen.",
          "dAr": "تأمين يدفع تكاليف الطبيب والمستشفى.",
          "exAr": "لسه لازم أتصل بشركة التأمين الصحي.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "die Pflicht",
          "d": "Eine Pflicht ist etwas, das man unbedingt tun muss.",
          "ar": "واجب",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Es ist meine Pflicht, meinen Eltern zu helfen.",
          "dAr": "شيء لازم تعمله.",
          "exAr": "من واجبي أساعد والديّ.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "selbe",
          "d": "Mit selbe meint man genau diese eine Person oder Sache und keine andere.",
          "ar": "نفس الـ",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Inga und ich wohnen im selben Haus.",
          "dAr": "تدل على نفس الشخص أو نفس الشيء تحديدًا، مش غيره.",
          "exAr": "أنا وإنغا ساكنين في نفس العمارة.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "der Tod",
          "d": "Der Tod ist das Ende des Lebens.",
          "ar": "موت / وفاة",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Nach dem frühen Tod ihres Mannes gab Clara noch viele Konzerte.",
          "dAr": "نهاية الحياة.",
          "exAr": "بعد وفاة زوجها المبكرة كلارا قدّمت حفلات موسيقية كتير.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "entgegen (+ G)",
          "d": "Entgegen bedeutet, dass etwas anders passiert, als man gedacht oder geplant hat.",
          "ar": "على عكس / خلافًا لـ",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Entgegen unserer Erwartung hat das Zusammenwohnen nicht geklappt.",
          "dAr": "حدوث شيء على عكس ما توقعت أو خططت له.",
          "exAr": "عكس توقعاتنا، السكن مع بعض ما نجحش.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "um (+ A)",
          "d": "Mit um beschreibt man ein Gebiet, das rund um einen Ort liegt.",
          "ar": "حَوْل",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Die Gegend um Leipzig ist für beide ein Ort der Inspiration.",
          "dAr": "تُستخدم لوصف المنطقة المحيطة بمكان.",
          "exAr": "المنطقة حوالين لايبزيغ مصدر إلهام للاتنين.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "bevor",
          "d": "Bevor leitet einen Nebensatz ein, dessen Handlung später passiert als die Handlung im Hauptsatz.",
          "ar": "قبل ما",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Bevor ich putze, koche ich einen Kaffee für uns.",
          "dAr": "أداة تبدأ جملة جانبية يحدث فعلها بعد فعل الجملة الأساسية.",
          "exAr": "قبل ما أنضّف، بعمل لنا قهوة.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "nachdem",
          "d": "Nachdem leitet einen Nebensatz ein, dessen Handlung vor der Handlung im Hauptsatz passiert ist.",
          "ar": "بعد ما",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Nachdem Matilda umgezogen war, fühlte sie sich oft einsam.",
          "dAr": "أداة تبدأ جملة جانبية حدث فعلها قبل فعل الجملة الأساسية.",
          "exAr": "بعد ما ماتيلدا عزّلت، كانت بتحس بالوحدة كتير.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "seit / seitdem",
          "d": "Seit oder seitdem leitet einen Nebensatz ein, dessen Handlung in der Vergangenheit begonnen hat und noch andauert.",
          "ar": "من ساعة ما / منذ أن",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Seitdem du den Job gewechselt hast, bist du immer gestresst.",
          "dAr": "أداة تبدأ جملة جانبية عن شيء بدأ في الماضي ولسه مستمر.",
          "exAr": "من ساعة ما غيّرت شغلك وإنت مضغوط على طول.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "während",
          "d": "Während leitet einen Nebensatz ein, dessen Handlung gleichzeitig mit der Handlung im Hauptsatz passiert.",
          "ar": "في الوقت اللي / بينما",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Ich putze, während ich telefoniere.",
          "dAr": "أداة تبدأ جملة جانبية يحدث فعلها في نفس وقت فعل الجملة الأساسية.",
          "exAr": "بنضّف وأنا بتكلم في التليفون.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "bis",
          "d": "Bis leitet einen Nebensatz ein, der sagt, wann die Handlung im Hauptsatz endet.",
          "ar": "لحدّ ما",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Wir warten, bis du zurückkommst.",
          "dAr": "أداة تبدأ جملة جانبية تحدد متى ينتهي فعل الجملة الأساسية.",
          "exAr": "هنستنى لحد ما ترجع.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "die Fabel",
          "d": "Eine Fabel ist eine kurze Geschichte, in der Tiere wie Menschen handeln und die eine Lehre enthält.",
          "ar": "حكاية على لسان الحيوانات",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "In der Fabel streiten ein Bär und ein Löwe um einen Hirsch.",
          "dAr": "قصة قصيرة تتصرف فيها الحيوانات كالبشر وتحمل درسًا.",
          "exAr": "في الحكاية الدب والأسد بيتخانقوا على أيل.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "die Moral",
          "d": "Die Moral einer Geschichte ist die Lehre, die man aus ihr ziehen kann.",
          "ar": "العِبرة / المغزى",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Die Moral von der Geschichte: Wenn zwei sich streiten, freut sich der Dritte.",
          "dAr": "الدرس أو العبرة التي تستنتجها من قصة.",
          "exAr": "العبرة من الحكاية: لما اتنين يتخانقوا، التالت بيفرح.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "das Sprichwort",
          "d": "Ein Sprichwort ist ein bekannter kurzer Satz, der eine Lebensweisheit ausdrückt.",
          "ar": "مَثَل شعبي",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Ein bekanntes Sprichwort lautet: Wer zuletzt lacht, lacht am besten.",
          "dAr": "جملة قصيرة معروفة تعبّر عن حكمة في الحياة.",
          "exAr": "فيه مثل معروف بيقول: من يضحك أخيرًا يضحك أفضل.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "der Promi",
          "d": "Ein Promi ist eine bekannte Person, zum Beispiel ein Star aus Film, Fernsehen oder Musik.",
          "ar": "شخص مشهور",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Viele Promis haben fast kein Privatleben mehr.",
          "dAr": "شخص مشهور، مثل نجم سينما أو تلفزيون أو موسيقى.",
          "exAr": "مشاهير كتير تقريبًا ما بقاش عندهم حياة خاصة.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "das Privatleben",
          "d": "Das Privatleben ist der Teil des Lebens, der nichts mit Beruf und Öffentlichkeit zu tun hat.",
          "ar": "الحياة الخاصة",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Die Schauspielerin spricht nie über ihr Privatleben.",
          "dAr": "جزء الحياة الذي لا يرتبط بالعمل أو الظهور العام.",
          "exAr": "الممثلة عمرها ما بتتكلم عن حياتها الخاصة.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        }
      ],
      "visual": {
        "src": "assets/chapters/chapter-7.webp",
        "alt": "Kapitel 7 · Zwischenmenschliches",
        "caption": "Zwischenmenschliches"
      },
      "titleAr": "العلاقات بين الناس",
      "subtitleAr": "Netzwerk neu B1.2 · الوحدة 7"
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
        "note": "Jede Karte enthält eine deutsche Erklärung, einen vollständigen Beispielsatz und die arabische Übersetzung.",
        "noteAr": "كل بطاقة فيها شرح ألماني واضح، مثال كامل، والترجمة العربية.",
        "titleAr": "مفردات مع شرح"
      },
      "vocab": [
        {
          "w": "die Gymnastik",
          "d": "Leichte Übungen für den Körper, die man oft ohne Geräte macht.",
          "ar": "الجمباز / تمارين رياضية خفيفة",
          "cat": "Fit und gesund bleiben",
          "ex": "Meine Oma macht jeden Morgen zehn Minuten Gymnastik.",
          "dAr": "تمارين خفيفة للجسم غالبًا من غير أجهزة.",
          "exAr": "جدتي بتعمل تمارين خفيفة عشر دقايق كل صباح.",
          "catAr": "الحفاظ على اللياقة والصحة"
        },
        {
          "w": "sich anstrengen",
          "d": "Sich viel Mühe geben und viel Kraft oder Energie einsetzen.",
          "ar": "يجتهد / يبذل مجهودًا",
          "cat": "Fit und gesund bleiben",
          "ex": "Ich strenge mich jeden Tag ein bisschen an und löse ein Rätsel.",
          "dAr": "بذل مجهود كبير واستخدام قوة أو طاقة.",
          "exAr": "ببذل مجهود ذهني بسيط كل يوم وبحل لغزًا.",
          "catAr": "الحفاظ على اللياقة والصحة"
        },
        {
          "w": "das Gehirn",
          "d": "Das Organ im Kopf, mit dem wir denken, fühlen und uns erinnern.",
          "ar": "المخ",
          "cat": "Fit und gesund bleiben",
          "ex": "Unser Gehirn verarbeitet Musik in mehreren Bereichen.",
          "dAr": "العضو داخل الرأس المسؤول عن التفكير والشعور والتذكّر.",
          "exAr": "مخنا بيعالج الموسيقى في عدة مناطق.",
          "catAr": "الحفاظ على اللياقة والصحة"
        },
        {
          "w": "der Geist",
          "d": "Der Teil des Menschen, der denkt und fühlt, im Gegensatz zum Körper.",
          "ar": "العقل / الروح",
          "cat": "Fit und gesund bleiben",
          "ex": "Yoga ist gut für Körper und Geist.",
          "dAr": "الجانب الذي يفكّر ويشعر في الإنسان، مقابل الجسم.",
          "exAr": "اليوغا مفيدة للجسم والعقل.",
          "catAr": "الحفاظ على اللياقة والصحة"
        },
        {
          "w": "raten (zu + D)",
          "d": "Jemandem sagen, was er am besten tun sollte.",
          "ar": "ينصح (بـ)",
          "cat": "Fit und gesund bleiben",
          "ex": "Ich rate dir, mehr auf deine Gesundheit zu achten.",
          "dAr": "إخبار شخص بما يُنصح أن يفعله.",
          "exAr": "بنصحك تهتم بصحتك أكتر.",
          "catAr": "الحفاظ على اللياقة والصحة"
        },
        {
          "w": "kühlen",
          "d": "Etwas kalt oder kälter machen.",
          "ar": "يبرّد",
          "cat": "Fit und gesund bleiben",
          "ex": "Bei Fieber kann ein feuchtes Tuch die Stirn kühlen.",
          "dAr": "جعل شيء باردًا أو أبرد.",
          "exAr": "وقت الحمّى فوطة مبلولة ممكن تبرّد الجبهة.",
          "catAr": "الحفاظ على اللياقة والصحة"
        },
        {
          "w": "sich eincremen",
          "d": "Creme auf die Haut geben und gut verteilen.",
          "ar": "يدهن جسمه بالكريم",
          "cat": "Fit und gesund bleiben",
          "ex": "Bevor ich in die Sonne gehe, creme ich mich gut ein.",
          "dAr": "وضع كريم على الجلد وتوزيعه جيدًا.",
          "exAr": "قبل ما أخرج في الشمس بدهن جسمي كويس بالكريم.",
          "catAr": "الحفاظ على اللياقة والصحة"
        },
        {
          "w": "der Schatten",
          "d": "Ein dunklerer, kühler Ort, an den die Sonne nicht direkt scheint.",
          "ar": "الظل",
          "cat": "Fit und gesund bleiben",
          "ex": "Mittags bleibe ich lieber im Schatten.",
          "dAr": "مكان أغمق وأبرد لا تصل إليه الشمس مباشرة.",
          "exAr": "وقت الظهر بفضّل أفضل في الظل.",
          "catAr": "الحفاظ على اللياقة والصحة"
        },
        {
          "w": "die Flüssigkeit",
          "d": "Etwas, das fließt und das man trinken kann, zum Beispiel Wasser oder Saft.",
          "ar": "سائل / السوائل",
          "cat": "Essen und Trinken",
          "ex": "Bei Hitze braucht der Körper besonders viel Flüssigkeit.",
          "dAr": "مادة تسيل ويمكن شربها، مثل الماء أو العصير.",
          "exAr": "في الحر الجسم محتاج سوائل كتير خصوصًا.",
          "catAr": "الأكل والشرب"
        },
        {
          "w": "die Hauptmahlzeit",
          "d": "Eine der großen Mahlzeiten am Tag, zum Beispiel das Mittagessen.",
          "ar": "الوجبة الرئيسية",
          "cat": "Essen und Trinken",
          "ex": "Die Klinikküche bereitet täglich drei Hauptmahlzeiten zu.",
          "dAr": "واحدة من الوجبات الكبيرة اليومية، مثل الغداء.",
          "exAr": "مطبخ المستشفى بيحضّر ثلاث وجبات رئيسية يوميًا.",
          "catAr": "الأكل والشرب"
        },
        {
          "w": "der Knödel",
          "d": "Eine runde Beilage aus Kartoffeln oder Brot, die man vor allem in Süddeutschland und Österreich isst.",
          "ar": "كرة من عجين البطاطس أو الخبز (كنودل)",
          "cat": "Essen und Trinken",
          "ex": "Zum Braten gibt es in Bayern oft Knödel.",
          "dAr": "كرات بطاطس أو خبز تُقدّم كطبق جانبي خصوصًا بجنوب ألمانيا والنمسا.",
          "exAr": "في بافاريا غالبًا بيقدّموا كرات كنودل مع اللحم المشوي.",
          "catAr": "الأكل والشرب"
        },
        {
          "w": "der Pfannkuchen",
          "d": "Ein flacher, dünner Kuchen aus Mehl, Eiern und Milch, den man in der Pfanne backt.",
          "ar": "فطيرة رقيقة / بان كيك",
          "cat": "Essen und Trinken",
          "ex": "Die Kinder essen am liebsten Pfannkuchen mit Apfelmus.",
          "dAr": "فطيرة رقيقة مسطحة من الدقيق والبيض واللبن تُطهى في الطاسة.",
          "exAr": "الأطفال أكتر حاجة بيحبوها البانكيك مع مهروس التفاح.",
          "catAr": "الأكل والشرب"
        },
        {
          "w": "der Schweinebraten",
          "d": "Ein großes Stück Schweinefleisch, das im Ofen gebraten wird.",
          "ar": "لحم خنزير مشوي في الفرن",
          "cat": "Essen und Trinken",
          "ex": "Im Gasthaus gibt es sonntags Schweinebraten mit Knödeln.",
          "dAr": "قطعة كبيرة من لحم الخنزير تُشوى في الفرن.",
          "exAr": "المطعم بيقدّم يوم الأحد لحم خنزير مشويًا مع كنودل.",
          "catAr": "الأكل والشرب"
        },
        {
          "w": "das Steak",
          "d": "Eine dicke Scheibe Fleisch, die man kurz in der Pfanne oder auf dem Grill brät.",
          "ar": "ستيك / شريحة لحم",
          "cat": "Essen und Trinken",
          "ex": "Ich möchte mein Steak bitte gut durchgebraten.",
          "dAr": "شريحة لحم سميكة تُطهى سريعًا في الطاسة أو على الشواية.",
          "exAr": "عايز الستيك مستوي كويس لو سمحت.",
          "catAr": "الأكل والشرب"
        },
        {
          "w": "roh",
          "d": "Nicht gekocht und nicht gebraten.",
          "ar": "نيء",
          "cat": "Essen und Trinken",
          "ex": "Rohes Fleisch sollte man lieber nicht essen.",
          "dAr": "غير مسلوق وغير مشوي أو مقلي.",
          "exAr": "الأفضل ما تاكلش لحمة نيّة.",
          "catAr": "الأكل والشرب"
        },
        {
          "w": "blutig",
          "d": "Mit Blut; bei Fleisch: innen noch rot, weil es nur kurz gebraten wurde.",
          "ar": "دامٍ / غير مطهو جيدًا (اللحم)",
          "cat": "Essen und Trinken",
          "ex": "Mein Bruder isst sein Steak am liebsten blutig.",
          "dAr": "به دم؛ وفي اللحم: ما زال أحمر من الداخل لقِصر مدة الطهي.",
          "exAr": "أخويا بيفضّل الستيك قليل التسوية وأحمر من الداخل.",
          "catAr": "الأكل والشرب"
        },
        {
          "w": "essbar",
          "d": "So, dass man es essen kann, ohne krank zu werden.",
          "ar": "صالح للأكل",
          "cat": "Essen und Trinken",
          "ex": "Nicht alle Pilze im Wald sind essbar.",
          "dAr": "يمكن أكله من غير أن يسبب مرضًا.",
          "exAr": "مش كل أنواع المشروم في الغابة صالحة للأكل.",
          "catAr": "الأكل والشرب"
        },
        {
          "w": "eiskalt",
          "d": "Sehr, sehr kalt.",
          "ar": "مثلج / بارد جدًا",
          "cat": "Essen und Trinken",
          "ex": "Im Sommer trinke ich gern eiskaltes Wasser mit Zitrone.",
          "dAr": "بارد جدًا جدًا.",
          "exAr": "في الصيف بحب أشرب ميّه مثلجة بالليمون.",
          "catAr": "الأكل والشرب"
        },
        {
          "w": "atmen",
          "d": "Luft durch Mund oder Nase in den Körper holen und wieder hinauslassen.",
          "ar": "يتنفس",
          "cat": "Rund um den Körper",
          "ex": "Bei schneller Musik atmen wir schneller.",
          "dAr": "إدخال الهواء للجسم وإخراجه عن طريق الفم أو الأنف.",
          "exAr": "مع الموسيقى السريعة بنتنفس أسرع.",
          "catAr": "حول الجسم"
        },
        {
          "w": "blass",
          "d": "Mit sehr heller Haut im Gesicht, zum Beispiel weil man krank ist.",
          "ar": "شاحب",
          "cat": "Rund um den Körper",
          "ex": "Du bist heute so blass – geht es dir nicht gut?",
          "dAr": "لون الوجه فاتح جدًا، مثلًا بسبب المرض.",
          "exAr": "وشك شاحب كده النهارده، إنت مش كويس؟",
          "catAr": "حول الجسم"
        },
        {
          "w": "schwindelig",
          "d": "So, dass man das Gefühl hat, dass sich alles um einen herum dreht.",
          "ar": "دائخ / مصاب بالدوار",
          "cat": "Rund um den Körper",
          "ex": "Nach dem Aufstehen ist mir oft schwindelig.",
          "dAr": "الشعور بأن كل ما حولك يدور.",
          "exAr": "غالبًا بحس بدوخة بعد ما أقوم.",
          "catAr": "حول الجسم"
        },
        {
          "w": "die Brust",
          "d": "Der vordere Teil des Körpers zwischen Hals und Bauch.",
          "ar": "الصدر",
          "cat": "Rund um den Körper",
          "ex": "Er hat starke Schmerzen in der Brust.",
          "dAr": "الجزء الأمامي من الجسم بين الرقبة والبطن.",
          "exAr": "عنده ألم شديد في صدره.",
          "catAr": "حول الجسم"
        },
        {
          "w": "die Schulter",
          "d": "Der Teil des Körpers zwischen Hals und Arm.",
          "ar": "الكتف",
          "cat": "Rund um den Körper",
          "ex": "Seit dem Unfall tut mir die linke Schulter weh.",
          "dAr": "الجزء من الجسم بين الرقبة والذراع.",
          "exAr": "كتفي الشمال بيوجعني من وقت الحادث.",
          "catAr": "حول الجسم"
        },
        {
          "w": "leiden (an + D)",
          "d": "Eine Krankheit haben, die einem Probleme oder Schmerzen macht.",
          "ar": "يعاني (من مرض)",
          "cat": "Rund um den Körper",
          "ex": "Ihr Großvater leidet an Alzheimer.",
          "dAr": "الإصابة بمرض يسبب مشاكل أو ألمًا.",
          "exAr": "جدها بيعاني من ألزهايمر.",
          "catAr": "حول الجسم"
        },
        {
          "w": "die Heilung",
          "d": "Der Prozess, in dem ein kranker Mensch wieder gesund wird.",
          "ar": "الشفاء",
          "cat": "Im Krankenhaus",
          "ex": "Musik kann die Heilung von Krankheiten unterstützen.",
          "dAr": "العملية التي يستعيد فيها المريض صحته.",
          "exAr": "الموسيقى ممكن تساعد في الشفاء من الأمراض.",
          "catAr": "في المستشفى"
        },
        {
          "w": "die Medizin",
          "d": "Die Wissenschaft von den Krankheiten und ihrer Behandlung, oft auch ein Medikament.",
          "ar": "الطب / الدواء",
          "cat": "Im Krankenhaus",
          "ex": "Meine Schwester studiert Medizin in Kairo.",
          "dAr": "علم الأمراض وعلاجها، وقد تعني أيضًا دواءً.",
          "exAr": "أختي بتدرس طب في القاهرة.",
          "catAr": "في المستشفى"
        },
        {
          "w": "das Schmerzmittel",
          "d": "Ein Medikament, das gegen Schmerzen hilft.",
          "ar": "مسكّن",
          "cat": "Im Krankenhaus",
          "ex": "Die Ärztin verschreibt mir ein Schmerzmittel gegen die Kopfschmerzen.",
          "dAr": "دواء يساعد على تخفيف الألم.",
          "exAr": "الدكتورة بتوصف لي مسكّنًا للصداع.",
          "catAr": "في المستشفى"
        },
        {
          "w": "einnehmen",
          "d": "Ein Medikament schlucken oder trinken.",
          "ar": "يتناول (دواء)",
          "cat": "Im Krankenhaus",
          "ex": "Nehmen Sie die Tabletten morgens vor dem Frühstück ein.",
          "dAr": "بلع الدواء أو شربه.",
          "exAr": "خُد الأقراص صباحًا قبل الفطار.",
          "catAr": "في المستشفى"
        },
        {
          "w": "auflösen",
          "d": "Etwas in eine Flüssigkeit geben, bis man es nicht mehr sieht.",
          "ar": "يذيب",
          "cat": "Im Krankenhaus",
          "ex": "Lösen Sie das Pulver in einem Glas Wasser auf.",
          "dAr": "وضع شيء في سائل حتى يذوب ولا يُرى.",
          "exAr": "دوّب المسحوق في كوب ميّه.",
          "catAr": "في المستشفى"
        },
        {
          "w": "verschreiben",
          "d": "Als Arzt aufschreiben, welches Medikament ein Patient bekommen soll.",
          "ar": "يصف (دواءً) / يكتب في الروشتة",
          "cat": "Im Krankenhaus",
          "ex": "Der Arzt hat mir Tropfen gegen den Husten verschrieben.",
          "dAr": "كتابة الطبيب اسم الدواء المطلوب للمريض.",
          "exAr": "الدكتور وصف لي نقطًا للكحة.",
          "catAr": "في المستشفى"
        },
        {
          "w": "krankschreiben",
          "d": "Als Arzt schriftlich bestätigen, dass jemand krank ist und nicht arbeiten kann.",
          "ar": "يعطي إجازة مرضية",
          "cat": "Im Krankenhaus",
          "ex": "Die Ärztin schreibt mich für den Rest der Woche krank.",
          "dAr": "تأكيد الطبيب كتابةً أن الشخص مريض ولا يستطيع العمل.",
          "exAr": "الدكتورة هتكتب لي إجازة مرضية لبقية الأسبوع.",
          "catAr": "في المستشفى"
        },
        {
          "w": "der Krankenwagen",
          "d": "Ein Auto, das kranke oder verletzte Menschen ins Krankenhaus bringt.",
          "ar": "سيارة الإسعاف",
          "cat": "Im Krankenhaus",
          "ex": "Nach dem Unfall kam sofort ein Krankenwagen.",
          "dAr": "سيارة تنقل المرضى أو المصابين للمستشفى.",
          "exAr": "بعد الحادث عربية إسعاف وصلت فورًا.",
          "catAr": "في المستشفى"
        },
        {
          "w": "die Notaufnahme",
          "d": "Die Abteilung im Krankenhaus, in die man bei einem Notfall sofort gebracht wird.",
          "ar": "قسم الطوارئ",
          "cat": "Im Krankenhaus",
          "ex": "In der Notaufnahme musste ich zwei Stunden warten.",
          "dAr": "قسم المستشفى الذي يستقبل الحالات الطارئة فورًا.",
          "exAr": "اضطريت أستنى ساعتين في قسم الطوارئ.",
          "catAr": "في المستشفى"
        },
        {
          "w": "die Versichertenkarte",
          "d": "Die Karte der Krankenkasse, die man in der Arztpraxis zeigen muss.",
          "ar": "بطاقة التأمين الصحي",
          "cat": "Im Krankenhaus",
          "ex": "Haben Sie Ihre Versichertenkarte dabei?",
          "dAr": "بطاقة التأمين الصحي التي تُعرض في عيادة الطبيب.",
          "exAr": "معاك بطاقة التأمين الصحي؟",
          "catAr": "في المستشفى"
        },
        {
          "w": "der Klinikaufenthalt",
          "d": "Die Zeit, in der man als Patient in einer Klinik bleibt.",
          "ar": "فترة الإقامة في المستشفى",
          "cat": "Im Krankenhaus",
          "ex": "Für den Klinikaufenthalt sollten Sie bequeme Kleidung mitnehmen.",
          "dAr": "المدة التي يبقى فيها الشخص مريضًا داخل المستشفى.",
          "exAr": "خُد معاك هدوم مريحة للإقامة في المستشفى.",
          "catAr": "في المستشفى"
        },
        {
          "w": "die Entlassung",
          "d": "Der Moment, in dem ein Patient das Krankenhaus wieder verlassen darf.",
          "ar": "الخروج من المستشفى",
          "cat": "Im Krankenhaus",
          "ex": "Die Gebühren für den Fernseher bezahlen Sie bei der Entlassung.",
          "dAr": "وقت السماح للمريض بمغادرة المستشفى.",
          "exAr": "هتدفع رسوم التلفزيون وقت الخروج من المستشفى.",
          "catAr": "في المستشفى"
        },
        {
          "w": "die Besuchszeit",
          "d": "Die Zeit, in der man Patienten im Krankenhaus besuchen darf.",
          "ar": "مواعيد الزيارة",
          "cat": "Im Krankenhaus",
          "ex": "Die Besuchszeit endet heute um 20 Uhr.",
          "dAr": "الوقت المسموح فيه بزيارة المرضى في المستشفى.",
          "exAr": "وقت الزيارة النهارده بينتهي الساعة ٨ مساءً.",
          "catAr": "في المستشفى"
        },
        {
          "w": "der Haupteingang",
          "d": "Der größte und wichtigste Eingang eines Gebäudes.",
          "ar": "المدخل الرئيسي",
          "cat": "Im Krankenhaus",
          "ex": "Wir treffen uns um drei am Haupteingang der Klinik.",
          "dAr": "أكبر وأهم مدخل في المبنى.",
          "exAr": "هنتقابل الساعة ثلاثة عند المدخل الرئيسي للمستشفى.",
          "catAr": "في المستشفى"
        },
        {
          "w": "der Notausgang",
          "d": "Eine Tür, durch die man bei Feuer oder Gefahr schnell hinausgehen kann.",
          "ar": "مخرج الطوارئ",
          "cat": "Im Krankenhaus",
          "ex": "Der Weg zum Notausgang ist gut beschildert.",
          "dAr": "باب للخروج سريعًا في حالة حريق أو خطر.",
          "exAr": "الطريق لمخرج الطوارئ موضّح بلافتات كويس.",
          "catAr": "في المستشفى"
        },
        {
          "w": "der Notruf",
          "d": "Die Telefonnummer, die man in einem Notfall anruft, zum Beispiel 112.",
          "ar": "رقم الطوارئ / مكالمة الاستغاثة",
          "cat": "Im Krankenhaus",
          "ex": "Mein Nachbar hatte Schmerzen in der Brust, deshalb habe ich den Notruf gewählt.",
          "dAr": "رقم هاتف يُتصل به في الطوارئ، مثل 112.",
          "exAr": "جاري كان عنده ألم في صدره، فاتصلت بالطوارئ.",
          "catAr": "في المستشفى"
        },
        {
          "w": "der Pfleger",
          "d": "Ein Mann, der beruflich kranke oder alte Menschen versorgt.",
          "ar": "الممرض",
          "cat": "Im Krankenhaus",
          "ex": "Der Pfleger bringt dem Patienten das Mittagessen ans Bett.",
          "dAr": "رجل يعمل في رعاية المرضى أو كبار السن.",
          "exAr": "الممرّض بيجيب الغدا للمريض لحد السرير.",
          "catAr": "في المستشفى"
        },
        {
          "w": "zur Verfügung stehen",
          "d": "Da sein, damit jemand es benutzen kann.",
          "ar": "يكون متاحًا / تحت التصرف",
          "cat": "Im Krankenhaus",
          "ex": "Auf jeder Station steht Ihnen kostenlos Mineralwasser zur Verfügung.",
          "dAr": "وجود شيء متاح ليستعمله شخص.",
          "exAr": "الميّه المعدنية متاحة لك مجانًا في كل قسم.",
          "catAr": "في المستشفى"
        },
        {
          "w": "aufbewahren",
          "d": "Etwas an einen sicheren Ort legen und es dort lassen.",
          "ar": "يحفظ / يخزّن",
          "cat": "Im Krankenhaus",
          "ex": "Bitte bewahren Sie Ihre Wertsachen im Schließfach auf.",
          "dAr": "وضع شيء في مكان آمن والاحتفاظ به هناك.",
          "exAr": "احفظ مقتنياتك الثمينة في الخزانة المقفولة لو سمحت.",
          "catAr": "في المستشفى"
        },
        {
          "w": "untersagt sein",
          "d": "Verboten sein, meistens nach einer offiziellen Regel.",
          "ar": "ممنوع",
          "cat": "Im Krankenhaus",
          "ex": "Rauchen ist im ganzen Krankenhaus untersagt.",
          "dAr": "أن يكون شيء ممنوعًا، غالبًا بقاعدة رسمية.",
          "exAr": "التدخين ممنوع في المستشفى كله.",
          "catAr": "في المستشفى"
        },
        {
          "w": "warnen (vor + D)",
          "d": "Jemandem sagen, dass eine Gefahr da ist.",
          "ar": "يحذّر (من)",
          "cat": "Im Krankenhaus",
          "ex": "Die Pflegerin warnt den Patienten vor dem glatten Boden.",
          "dAr": "إخبار شخص بوجود خطر.",
          "exAr": "الممرّضة بتحذّر المريض من الأرض الزلقة.",
          "catAr": "في المستشفى"
        },
        {
          "w": "zuständig (für + A)",
          "d": "Verantwortlich für eine bestimmte Aufgabe oder einen bestimmten Bereich.",
          "ar": "مسؤول / مختص (بـ)",
          "cat": "Im Krankenhaus",
          "ex": "Für die Diät ist unsere Diätassistentin zuständig.",
          "dAr": "المسؤولية عن مهمة محددة أو مجال معين.",
          "exAr": "أخصائية التغذية عندنا مسؤولة عن النظام الغذائي.",
          "catAr": "في المستشفى"
        },
        {
          "w": "der Bademantel",
          "d": "Ein langer, warmer Mantel aus weichem Stoff, den man nach dem Baden oder zu Hause trägt.",
          "ar": "روب الحمام / البُرنس",
          "cat": "Kleidung und Hygiene",
          "ex": "Im Krankenhaus läuft er meistens im Bademantel herum.",
          "dAr": "رداء طويل ودافئ وناعم يُلبس بعد الاستحمام أو في البيت.",
          "exAr": "في المستشفى غالبًا بيتحرك وهو لابس برنس الحمام.",
          "catAr": "الملابس والنظافة"
        },
        {
          "w": "der Hausschuh",
          "d": "Ein bequemer Schuh, den man nur in der Wohnung trägt.",
          "ar": "شبشب / خف البيت",
          "cat": "Kleidung und Hygiene",
          "ex": "Vergiss deine Hausschuhe nicht, wenn du ins Krankenhaus gehst!",
          "dAr": "حذاء مريح يُلبس داخل البيت فقط.",
          "exAr": "ما تنساش شبشبك وإنت رايح المستشفى!",
          "catAr": "الملابس والنظافة"
        },
        {
          "w": "der Schlafanzug",
          "d": "Bequeme Kleidung aus Hose und Oberteil, die man zum Schlafen anzieht.",
          "ar": "بيجامة",
          "cat": "Kleidung und Hygiene",
          "ex": "Ich habe zwei Schlafanzüge in die Tasche gepackt.",
          "dAr": "ملابس مريحة للنوم تتكون من بنطلون وجزء علوي.",
          "exAr": "حطّيت بيجامتين في الشنطة.",
          "catAr": "الملابس والنظافة"
        },
        {
          "w": "die Zahnbürste",
          "d": "Eine kleine Bürste, mit der man sich die Zähne putzt.",
          "ar": "فرشاة الأسنان",
          "cat": "Kleidung und Hygiene",
          "ex": "Eine neue Zahnbürste bekommst du in der Drogerie.",
          "dAr": "فرشاة صغيرة لتنظيف الأسنان.",
          "exAr": "تقدر تشتري فرشاة أسنان جديدة من متجر مستلزمات العناية.",
          "catAr": "الملابس والنظافة"
        },
        {
          "w": "die Zahnpasta",
          "d": "Die Creme, die man zum Zähneputzen auf die Zahnbürste gibt.",
          "ar": "معجون الأسنان",
          "cat": "Kleidung und Hygiene",
          "ex": "Die Zahnpasta ist leer, wir müssen neue kaufen.",
          "dAr": "معجون يوضع على الفرشاة لتنظيف الأسنان.",
          "exAr": "معجون الأسنان خلص، لازم نشتري واحد جديد.",
          "catAr": "الملابس والنظافة"
        },
        {
          "w": "kämmen",
          "d": "Die Haare mit einem Kamm in Ordnung bringen.",
          "ar": "يمشّط",
          "cat": "Kleidung und Hygiene",
          "ex": "Die Mutter kämmt ihrer Tochter jeden Morgen die Haare.",
          "dAr": "ترتيب الشعر باستخدام مشط.",
          "exAr": "الأم بتمشّط شعر بنتها كل صباح.",
          "catAr": "الملابس والنظافة"
        },
        {
          "w": "die Drogerie",
          "d": "Ein Geschäft, in dem man zum Beispiel Seife, Shampoo und Zahnpasta kaufen kann.",
          "ar": "محل مستحضرات التجميل والنظافة",
          "cat": "Kleidung und Hygiene",
          "ex": "In der Drogerie neben dem Haupteingang gibt es auch Zeitschriften.",
          "dAr": "متجر يبيع مثلًا الصابون والشامبو ومعجون الأسنان.",
          "exAr": "متجر مستلزمات العناية جنب المدخل الرئيسي فيه مجلات كمان.",
          "catAr": "الملابس والنظافة"
        },
        {
          "w": "der Alarmknopf",
          "d": "Ein Knopf, den man in einem Notfall drückt, um Hilfe zu holen.",
          "ar": "زر الإنذار",
          "cat": "Technik",
          "ex": "Bei einem Brand drücken Sie bitte sofort den Alarmknopf.",
          "dAr": "زر يُضغط عليه في الطوارئ لطلب المساعدة.",
          "exAr": "في حالة حريق اضغط فورًا على زر الإنذار لو سمحت.",
          "catAr": "التقنية"
        },
        {
          "w": "der Apparat",
          "d": "Ein technisches Gerät, zum Beispiel ein Fernseher oder ein Telefon.",
          "ar": "جهاز",
          "cat": "Technik",
          "ex": "Die Nutzung des Apparats kostet 2,50 Euro pro Tag.",
          "dAr": "جهاز تقني مثل التلفزيون أو الهاتف.",
          "exAr": "استخدام الجهاز بيكلّف ٢٫٥٠ يورو يوميًا.",
          "catAr": "التقنية"
        },
        {
          "w": "die Bedienungsanleitung",
          "d": "Ein Text, der genau erklärt, wie man ein Gerät benutzt.",
          "ar": "دليل الاستخدام",
          "cat": "Technik",
          "ex": "Lies doch zuerst die Bedienungsanleitung!",
          "dAr": "نص يشرح بدقة كيفية استعمال جهاز.",
          "exAr": "اقرأ دليل الاستخدام الأول!",
          "catAr": "التقنية"
        },
        {
          "w": "die Chipkarte",
          "d": "Eine Plastikkarte mit einem kleinen Chip, auf dem Daten gespeichert sind.",
          "ar": "بطاقة ذكية (بشريحة)",
          "cat": "Technik",
          "ex": "Die Chipkarte für das Telefon bekommen Sie am Automaten.",
          "dAr": "بطاقة بلاستيكية فيها شريحة صغيرة تُخزّن عليها بيانات.",
          "exAr": "تقدر تاخد بطاقة شريحة التليفون من الماكينة.",
          "catAr": "التقنية"
        },
        {
          "w": "die Fernbedienung",
          "d": "Ein kleines Gerät, mit dem man zum Beispiel den Fernseher aus der Entfernung bedient.",
          "ar": "الريموت كنترول / جهاز التحكم",
          "cat": "Technik",
          "ex": "Wo ist denn schon wieder die Fernbedienung?",
          "dAr": "جهاز صغير للتحكم عن بُعد، مثلًا في التلفزيون.",
          "exAr": "الريموت راح فين تاني؟",
          "catAr": "التقنية"
        },
        {
          "w": "das Festnetz",
          "d": "Das Telefonnetz mit festen Leitungen, also nicht das Handynetz.",
          "ar": "الخط الأرضي",
          "cat": "Technik",
          "ex": "Gespräche ins deutsche Festnetz sind im Preis enthalten.",
          "dAr": "شبكة الهاتف ذات الخطوط الثابتة، وليست شبكة المحمول.",
          "exAr": "المكالمات للأرقام الأرضية الألمانية داخلة في السعر.",
          "catAr": "التقنية"
        },
        {
          "w": "der Klang",
          "d": "Die Art, wie ein Ton, eine Stimme oder ein Instrument klingt.",
          "ar": "صوت / نغمة / رنين",
          "cat": "Musik und Emotionen",
          "ex": "Ich liebe den warmen Klang des Cellos.",
          "dAr": "الطابع الذي يميّز صوتًا أو آلة موسيقية.",
          "exAr": "بحب الصوت الدافئ للتشيلّو.",
          "catAr": "الموسيقى والمشاعر"
        },
        {
          "w": "der Jazz",
          "d": "Ein Musikstil aus Amerika mit viel Rhythmus und Improvisation.",
          "ar": "موسيقى الجاز",
          "cat": "Musik und Emotionen",
          "ex": "Mein Vater hört abends gern Jazz.",
          "dAr": "نوع موسيقى أمريكي يتميز بالإيقاع والارتجال.",
          "exAr": "أبويا بيحب يسمع جاز بالليل.",
          "catAr": "الموسيقى والمشاعر"
        },
        {
          "w": "die Klassik",
          "d": "Die klassische Musik, zum Beispiel von Mozart oder Beethoven.",
          "ar": "الموسيقى الكلاسيكية",
          "cat": "Musik und Emotionen",
          "ex": "Zum Lernen höre ich am liebsten Klassik.",
          "dAr": "الموسيقى الكلاسيكية، مثل موسيقى موتسارت أو بيتهوفن.",
          "exAr": "وقت المذاكرة بفضّل أسمع موسيقى كلاسيكية.",
          "catAr": "الموسيقى والمشاعر"
        },
        {
          "w": "klassisch",
          "d": "Zur Klassik gehörend oder traditionell und allgemein bekannt.",
          "ar": "كلاسيكي",
          "cat": "Musik und Emotionen",
          "ex": "Sie mag sowohl klassische Musik als auch Rock.",
          "dAr": "ينتمي للكلاسيكيات أو يكون تقليديًا ومعروفًا عمومًا.",
          "exAr": "هي بتحب الموسيقى الكلاسيكية والروك الاتنين.",
          "catAr": "الموسيقى والمشاعر"
        },
        {
          "w": "das Stück",
          "d": "Ein einzelnes Werk der Musik oder des Theaters.",
          "ar": "مقطوعة (موسيقية) / مسرحية",
          "cat": "Musik und Emotionen",
          "ex": "Ich spiele ein Stück von Mozart auf dem Klavier.",
          "dAr": "عمل موسيقي أو مسرحي منفرد.",
          "exAr": "بعزف مقطوعة لموتسارت على البيانو.",
          "catAr": "الموسيقى والمشاعر"
        },
        {
          "w": "beruhigend",
          "d": "So, dass es einen Menschen ruhig macht.",
          "ar": "مهدّئ",
          "cat": "Musik und Emotionen",
          "ex": "Langsame Musik wirkt auf viele Menschen beruhigend.",
          "dAr": "يجعل الشخص يشعر بالهدوء.",
          "exAr": "الموسيقى البطيئة بتهدّي ناس كتير.",
          "catAr": "الموسيقى والمشاعر"
        },
        {
          "w": "die Wirkung",
          "d": "Das, was etwas bei einem Menschen oder bei einer Sache verändert.",
          "ar": "تأثير / مفعول",
          "cat": "Musik und Emotionen",
          "ex": "Musik kann eine ähnliche Wirkung wie Medizin haben.",
          "dAr": "التغيير الذي يسببه شيء في شخص أو شيء آخر.",
          "exAr": "الموسيقى ممكن يكون لها تأثير شبيه بالدواء.",
          "catAr": "الموسيقى والمشاعر"
        },
        {
          "w": "empfinden",
          "d": "Etwas fühlen, zum Beispiel Freude, Angst oder Schmerz.",
          "ar": "يشعر بـ / يحسّ",
          "cat": "Musik und Emotionen",
          "ex": "Bei schnellen Rhythmen empfinden wir oft Freude.",
          "dAr": "الشعور بشيء مثل الفرحة أو الخوف أو الألم.",
          "exAr": "مع الإيقاعات السريعة غالبًا بنحس بالفرحة.",
          "catAr": "الموسيقى والمشاعر"
        },
        {
          "w": "spüren",
          "d": "Etwas mit dem Körper oder mit den Gefühlen bemerken.",
          "ar": "يحسّ / يشعر",
          "cat": "Musik und Emotionen",
          "ex": "Ich trinke immer sofort, wenn ich Durst spüre.",
          "dAr": "ملاحظة شيء بالجسم أو بالمشاعر.",
          "exAr": "بشرب فورًا لما بحس بالعطش.",
          "catAr": "الموسيقى والمشاعر"
        },
        {
          "w": "die Forscherin",
          "d": "Eine Frau, die wissenschaftlich arbeitet und Neues herausfinden will.",
          "ar": "باحثة",
          "cat": "Musik und Emotionen",
          "ex": "Die Forscherin untersucht, wie Musik auf das Gehirn wirkt.",
          "dAr": "امرأة تعمل في البحث العلمي لاكتشاف أشياء جديدة.",
          "exAr": "الباحثة بتدرس تأثير الموسيقى على المخ.",
          "catAr": "الموسيقى والمشاعر"
        },
        {
          "w": "feierlich",
          "d": "Ernst und besonders, wie bei einem wichtigen Fest.",
          "ar": "احتفالي / مهيب",
          "cat": "Musik und Emotionen",
          "ex": "Bei feierlichen Anlässen spielt das Orchester langsame Stücke.",
          "dAr": "ذو طابع جاد ومميّز، كما في الاحتفالات المهمة.",
          "exAr": "في المناسبات الرسمية الأوركسترا بتعزف مقطوعات بطيئة.",
          "catAr": "الموسيقى والمشاعر"
        },
        {
          "w": "barrierearm",
          "d": "So gebaut, dass auch Menschen im Rollstuhl oder mit Kinderwagen fast überall gut hinkommen.",
          "ar": "شبه خالٍ من العوائق (مناسب لذوي الإعاقة)",
          "cat": "Besondere Orte",
          "ex": "Der Aussichtsturm ist barrierearm, deshalb kommt man auch mit dem Rollstuhl hinauf.",
          "dAr": "تصميم يقلل العوائق لمستخدمي الكراسي المتحركة وعربات الأطفال.",
          "exAr": "برج المشاهدة قليل العوائق، فممكن تطلع له بالكرسي المتحرك كمان.",
          "catAr": "أماكن مميزة"
        },
        {
          "w": "familienfreundlich",
          "d": "Gut geeignet für Familien mit Kindern.",
          "ar": "مناسب للعائلات",
          "cat": "Besondere Orte",
          "ex": "Das Hotel ist sehr familienfreundlich und hat einen großen Spielplatz.",
          "dAr": "مناسب للعائلات التي لديها أطفال.",
          "exAr": "الفندق مناسب جدًا للعائلات وفيه ملعب أطفال كبير.",
          "catAr": "أماكن مميزة"
        },
        {
          "w": "fantasievoll",
          "d": "Mit vielen kreativen und neuen Ideen.",
          "ar": "مليء بالخيال / مبدع",
          "cat": "Besondere Orte",
          "ex": "Die Kinder haben eine fantasievolle Geschichte geschrieben.",
          "dAr": "ذو أفكار إبداعية وجديدة كثيرة.",
          "exAr": "الأطفال كتبوا قصة مليانة خيال.",
          "catAr": "أماكن مميزة"
        },
        {
          "w": "geeignet (für + A)",
          "d": "Passend und gut für einen bestimmten Zweck oder für bestimmte Personen.",
          "ar": "مناسب (لـ)",
          "cat": "Besondere Orte",
          "ex": "Das Museum ist besonders für neugierige Kinder geeignet.",
          "dAr": "ملائم لغرض معين أو لأشخاص معينين.",
          "exAr": "المتحف مناسب خصوصًا للأطفال الفضوليين.",
          "catAr": "أماكن مميزة"
        },
        {
          "w": "interaktiv",
          "d": "So, dass man selbst mitmachen und etwas ausprobieren kann.",
          "ar": "تفاعلي",
          "cat": "Besondere Orte",
          "ex": "In einem interaktiven Museum darf man fast alles anfassen.",
          "dAr": "يسمح لك بالمشاركة بنفسك وتجربة أشياء.",
          "exAr": "في المتحف التفاعلي مسموح تلمس تقريبًا كل حاجة.",
          "catAr": "أماكن مميزة"
        },
        {
          "w": "ungewöhnlich",
          "d": "Anders als normal und nicht so, wie man es erwartet.",
          "ar": "غير عادي / غريب",
          "cat": "Besondere Orte",
          "ex": "In diesem Museum gibt es viele ungewöhnliche Dinge zu entdecken.",
          "dAr": "مختلف عن العادي وغير متوقع.",
          "exAr": "في المتحف ده فيه حاجات غير مألوفة كتير تكتشفها.",
          "catAr": "أماكن مميزة"
        },
        {
          "w": "sich wundern (über + A)",
          "d": "Überrascht sein, weil etwas anders ist als erwartet.",
          "ar": "يتعجب / يندهش (من)",
          "cat": "Besondere Orte",
          "ex": "Die Besucher wundern sich über die essbaren Eintrittskarten.",
          "dAr": "الدهشة لأن شيء مختلف عن المتوقع.",
          "exAr": "الزوار مستغربين من تذاكر الدخول اللي ممكن تتاكل.",
          "catAr": "أماكن مميزة"
        },
        {
          "w": "alltäglich",
          "d": "Ganz normal, so wie es jeden Tag passiert.",
          "ar": "يومي / عادي",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Das ist kein alltägliches Museum, sondern etwas ganz Besonderes.",
          "dAr": "عادي جدًا كما يحدث كل يوم.",
          "exAr": "ده مش متحف عادي، ده شيء مميّز جدًا.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "ausreichend",
          "d": "So viel, wie man braucht.",
          "ar": "كافٍ",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Achten Sie darauf, ausreichend Wasser zu trinken.",
          "dAr": "بقدر ما تحتاج.",
          "exAr": "احرص على شرب ميّه كفاية.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "die Beerdigung",
          "d": "Die Feier, bei der man einen toten Menschen ins Grab legt.",
          "ar": "جنازة / دفن",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Auf einer Beerdigung spielt man keine fröhliche Musik.",
          "dAr": "مراسم دفن شخص متوفّى في قبره.",
          "exAr": "في الجنازة مش بيعزفوا موسيقى مبهجة.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "betragen",
          "d": "Eine bestimmte Menge, Zahl oder einen bestimmten Preis haben.",
          "ar": "يبلغ (مبلغًا أو مقدارًا)",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Die Gebühren für das Telefon betragen zwei Euro pro Tag.",
          "dAr": "أن تبلغ كمية أو رقمًا أو سعرًا معينًا.",
          "exAr": "رسوم التليفون تبلغ يوروين يوميًا.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "bisher",
          "d": "Bis jetzt.",
          "ar": "حتى الآن",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Bisher war ich noch nie im Krankenhaus.",
          "dAr": "حتى الآن.",
          "exAr": "لحد دلوقتي عمري ما دخلت المستشفى.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "brauchen ... zu",
          "d": "Mit „nicht“ oder „kein“ bedeutet es „nicht müssen“, mit „nur“ bedeutet es „nur müssen“.",
          "ar": "لا داعي لـ (مع nicht) / يكفي أن (مع nur)",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Sie brauchen mich nur zu rufen, wenn ich Ihnen helfen soll.",
          "dAr": "مع النفي تعني عدم الاضطرار، ومع nur تعني أن المطلوب فقط فعل شيء.",
          "exAr": "كل اللي عليك تناديني لو محتاجني أساعدك.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "einigermaßen",
          "d": "Ziemlich, aber nicht ganz.",
          "ar": "إلى حدٍّ ما",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Heute geht es mir wieder einigermaßen gut.",
          "dAr": "إلى حد ما، لكن مش تمامًا.",
          "exAr": "النهارده بقيت أحسن تاني إلى حد ما.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "einschließlich",
          "d": "Zusammen mit etwas, sodass es auch dazugehört.",
          "ar": "بما في ذلك / شاملًا",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Das Telefon kostet zwei Euro pro Tag einschließlich der Gespräche ins Festnetz.",
          "dAr": "شاملًا شيء بحيث يكون داخل الحساب أيضًا.",
          "exAr": "التليفون بيكلّف يوروين يوميًا شامل المكالمات للأرضي.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "vermutlich",
          "d": "Wahrscheinlich, aber nicht ganz sicher.",
          "ar": "على الأرجح",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Ohne Musik wäre der Film vermutlich ziemlich langweilig.",
          "dAr": "على الأرجح، لكن من غير يقين تام.",
          "exAr": "من غير موسيقى غالبًا الفيلم هيكون مملًا جدًا.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "gelangen",
          "d": "An ein Ziel oder an einen bestimmten Ort kommen.",
          "ar": "يصل (إلى)",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Die Töne gelangen über die Ohren ins Gehirn.",
          "dAr": "الوصول إلى هدف أو مكان معين.",
          "exAr": "الأصوات بتوصل للمخ عن طريق الودان.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "glatt",
          "d": "So, dass man leicht ausrutschen kann, oder ganz eben und ohne Falten.",
          "ar": "زلِق / أملس",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Im Winter sind die Wege oft glatt, sei vorsichtig!",
          "dAr": "يسبب الانزلاق بسهولة، أو مستوٍ تمامًا ومن غير تجاعيد.",
          "exAr": "في الشتاء الطرق غالبًا زلقة، خُد بالك!",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "grundsätzlich",
          "d": "Immer und in jedem Fall, als allgemeine Regel.",
          "ar": "من حيث المبدأ / بشكل عام",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Rauchen ist in der Klinik grundsätzlich verboten.",
          "dAr": "دائمًا وفي كل الحالات كقاعدة عامة.",
          "exAr": "التدخين ممنوع بشكل عام في المستشفى.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "kleben",
          "d": "Etwas mit Klebstoff oder einem Pflaster an etwas festmachen.",
          "ar": "يلصق",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Die Ärztin klebt mir ein Pflaster auf die Wunde.",
          "dAr": "تثبيت شيء باستخدام صمغ أو لاصق طبي.",
          "exAr": "الدكتورة بتحط لي لاصقًا طبيًا على الجرح.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "das Rätsel",
          "d": "Eine Aufgabe oder Frage, deren Lösung man durch Nachdenken finden muss.",
          "ar": "لغز",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Jeden Abend löse ich ein Rätsel in der Zeitung.",
          "dAr": "سؤال أو مهمة تتطلب التفكير لإيجاد الحل.",
          "exAr": "كل مساء بحل لغزًا في الجريدة.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "kommen (auf + A)",
          "d": "Eine Idee, eine Lösung oder ein Wort im Kopf finden.",
          "ar": "يتوصل (إلى) / يتذكر",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Ich komme gerade nicht auf seinen Namen.",
          "dAr": "التوصّل في ذهنك لفكرة أو حل أو كلمة.",
          "exAr": "مش قادر أفتكر اسمه دلوقتي.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "durch den Kopf gehen",
          "d": "Immer wieder an etwas denken müssen.",
          "ar": "يتردد في الذهن / يشغل التفكير",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Dieses Lied geht mir seit Tagen durch den Kopf.",
          "dAr": "التفكير المتكرر في شيء.",
          "exAr": "الأغنية دي بتدور في دماغي من أيام.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "mithilfe (von + D)",
          "d": "Mit der Hilfe von etwas oder jemandem.",
          "ar": "بمساعدة / بواسطة",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Mithilfe von Musik erinnern sich die Patienten an alte Erlebnisse.",
          "dAr": "بمساعدة شيء أو شخص.",
          "exAr": "بمساعدة الموسيقى المرضى بيتذكروا تجارب قديمة.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "der Moderator",
          "d": "Ein Mann, der eine Sendung im Radio oder im Fernsehen leitet.",
          "ar": "مقدّم البرنامج",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Der Moderator stellt die beiden Studiogäste vor.",
          "dAr": "رجل يقدّم برنامجًا إذاعيًا أو تلفزيونيًا.",
          "exAr": "المذيع بيقدّم الضيفين الموجودين في الاستوديو.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "die Motivation",
          "d": "Der Wunsch und die Energie, etwas zu tun oder zu lernen.",
          "ar": "الدافع / الحافز",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Ohne Motivation ist das Sprachenlernen sehr schwer.",
          "dAr": "الرغبة والطاقة لفعل شيء أو تعلّمه.",
          "exAr": "من غير حافز تعلّم اللغات صعب جدًا.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "motiviert",
          "d": "Mit viel Lust und Energie, etwas zu tun.",
          "ar": "متحمس / لديه دافع",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Wenn man motiviert ist, lernt man effektiver.",
          "dAr": "لديه رغبة وطاقة كبيرة لفعل شيء.",
          "exAr": "لما تكون متحمّس بتتعلّم بكفاءة أكتر.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "die Nachfrage",
          "d": "Eine Frage, die man stellt, weil man etwas noch nicht richtig verstanden hat.",
          "ar": "استفسار / سؤال للتأكد",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Bei einer Nachfrage geht die Stimme am Ende nach oben.",
          "dAr": "سؤال إضافي لأنك لم تفهم شيئًا تمامًا.",
          "exAr": "في سؤال الاستيضاح الصوت بيطلع في نهاية الجملة.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "obere",
          "d": "So, dass es höher liegt als ein anderer Teil.",
          "ar": "العلوي",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Die Fernbedienung liegt im oberen Fach des Nachttisches.",
          "dAr": "يقع أعلى من جزء آخر.",
          "exAr": "الريموت موجود في الدرج العلوي للكومودينو.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "die Reklame",
          "d": "Werbung für ein Produkt, zum Beispiel im Fernsehen oder in der Zeitung.",
          "ar": "إعلان / دعاية",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "In der Reklame hört man oft bekannte Lieder.",
          "dAr": "إعلان عن منتج، مثلًا في التلفزيون أو الجريدة.",
          "exAr": "في الإعلانات غالبًا بنسمع أغاني معروفة.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "der Rest",
          "d": "Das, was von etwas noch übrig ist.",
          "ar": "الباقي",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Bleiben Sie für den Rest der Woche im Bett!",
          "dAr": "ما تبقّى من شيء.",
          "exAr": "خليك في السرير لبقية الأسبوع!",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "die Rücksicht",
          "d": "Das Verhalten, bei dem man an die Gefühle und Wünsche anderer Menschen denkt.",
          "ar": "مراعاة (الآخرين)",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Bitte nehmen Sie Rücksicht auf Ihre Zimmernachbarn.",
          "dAr": "التصرّف مع مراعاة مشاعر الآخرين ورغباتهم.",
          "exAr": "من فضلك راعي جيرانك في الغرفة.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "zur Seite gehen",
          "d": "Einen Schritt nach links oder rechts machen, um Platz zu machen.",
          "ar": "يتنحّى جانبًا / يفسح الطريق",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Bitte gehen Sie zur Seite, der Krankenwagen muss durch!",
          "dAr": "التحرك خطوة يمينًا أو يسارًا لإفساح المجال.",
          "exAr": "وسّع لو سمحت، عربية الإسعاف لازم تعدّي!",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "sichtbar",
          "d": "So, dass man es sehen kann.",
          "ar": "مرئي / ظاهر",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Ihre Rufnummer steht gut sichtbar auf der Chipkarte.",
          "dAr": "يمكن رؤيته.",
          "exAr": "رقم تليفونك مكتوب بوضوح على بطاقة الشريحة.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "sinken",
          "d": "Weniger oder niedriger werden.",
          "ar": "ينخفض / يهبط",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Bei langsamer Musik sinkt der Puls.",
          "dAr": "الانخفاض أو النقصان.",
          "exAr": "مع الموسيقى البطيئة النبض بيقل.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "überprüfen",
          "d": "Genau kontrollieren, ob etwas richtig ist.",
          "ar": "يراجع / يتحقق من",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Überprüfen Sie nach ein paar Tagen, ob Sie die Wörter noch wissen.",
          "dAr": "التأكد بدقة من صحة شيء.",
          "exAr": "بعد كام يوم اتأكد إنك لسه فاكر الكلمات.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "einerseits ..., andererseits",
          "d": "Man benutzt diesen Konnektor, um zwei verschiedene Seiten einer Sache zu zeigen.",
          "ar": "من ناحية ...، ومن ناحية أخرى ...",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Einerseits höre ich gern laute Musik, andererseits stört sie mich manchmal.",
          "dAr": "رابط لعرض جانبين مختلفين من شيء.",
          "exAr": "من ناحية بحب الموسيقى العالية، ومن ناحية تانية بتضايقني أحيانًا.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "entweder ... oder",
          "d": "Man benutzt diesen Konnektor, wenn nur eine von zwei Möglichkeiten passt.",
          "ar": "إمّا ... أو ...",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Am Wochenende gehe ich entweder ins Kino oder auf ein Konzert.",
          "dAr": "رابط للاختيار بين احتمالين يناسب أحدهما فقط.",
          "exAr": "في الويك إند يا إما بروح السينما يا إما حفلة موسيقية.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "nicht nur ..., sondern auch",
          "d": "Man benutzt diesen Konnektor, wenn zwei Dinge gelten und das zweite betont wird.",
          "ar": "ليس فقط ...، بل أيضًا ...",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Ella spielt nicht nur Flöte, sondern auch Klavier.",
          "dAr": "رابط لإثبات شيئين مع تأكيد الثاني.",
          "exAr": "إيلا مش بتعزف فلوت بس، لكن بيانو كمان.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "sowohl ... als auch",
          "d": "Man benutzt diesen Konnektor, wenn das eine und auch das andere gilt.",
          "ar": "كلٌّ من ... و ...",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Ich höre sowohl Klassik als auch Pop.",
          "dAr": "رابط لإثبات الشيء الأول والثاني معًا.",
          "exAr": "بسمع الموسيقى الكلاسيكية والبوب الاتنين.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "weder ... noch",
          "d": "Man benutzt diesen Konnektor, wenn das eine nicht und das andere auch nicht gilt.",
          "ar": "لا ... ولا ...",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Sie hört weder Pop noch Jazz.",
          "dAr": "رابط لنفي الشيء الأول والثاني معًا.",
          "exAr": "هي لا بتسمع بوب ولا جاز.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "zwar ..., aber",
          "d": "Man benutzt diesen Konnektor, um etwas zu sagen und es danach einzuschränken.",
          "ar": "صحيح أنّ ... لكن ...",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Ich höre zwar gern Radio, aber manchmal nerven mich die Sprecher.",
          "dAr": "رابط لقول شيء ثم تقييده باستدراك.",
          "exAr": "صحيح إني بحب أسمع الراديو، لكن أحيانًا المذيعين بيضايقوني.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "die Stimmung",
          "d": "Das Gefühl, das man in einem bestimmten Moment hat.",
          "ar": "المزاج / الحالة النفسية",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Fröhliche Musik verbessert sofort meine Stimmung.",
          "dAr": "الإحساس الذي يكون عندك في لحظة معينة.",
          "exAr": "الموسيقى المبهجة بتحسّن مزاجي فورًا.",
          "catAr": "كلمات إضافية من الوحدة"
        },
        {
          "w": "die Laune",
          "d": "Die Stimmung, in der man gerade ist, zum Beispiel gut oder schlecht.",
          "ar": "المزاج",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Salsa macht mir sofort gute Laune.",
          "dAr": "حالتك المزاجية الحالية، جيدة أو سيئة.",
          "exAr": "السالسا بتخلّيني في مزاج حلو فورًا.",
          "catAr": "كلمات إضافية من الوحدة"
        },
        {
          "w": "beeinflussen",
          "d": "Eine Wirkung auf jemanden oder etwas haben und ihn oder es dadurch verändern.",
          "ar": "يؤثّر على",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Das Wetter beeinflusst oft meine Laune.",
          "dAr": "التأثير في شخص أو شيء وإحداث تغيير فيه.",
          "exAr": "الطقس غالبًا بيأثر على مزاجي.",
          "catAr": "كلمات إضافية من الوحدة"
        },
        {
          "w": "der Puls",
          "d": "Die Zahl der Herzschläge pro Minute.",
          "ar": "النبض",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Beim Joggen steigt der Puls schnell an.",
          "dAr": "عدد ضربات القلب في الدقيقة.",
          "exAr": "وقت الجري النبض بيزيد بسرعة.",
          "catAr": "كلمات إضافية من الوحدة"
        },
        {
          "w": "die Tonart",
          "d": "Das System von Tönen, in dem ein Musikstück geschrieben ist, zum Beispiel Dur oder Moll.",
          "ar": "المقام الموسيقي (ماجير أو مينور)",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Ein Stück in Moll klingt oft traurig.",
          "dAr": "نظام النغمات الذي تُكتب به المقطوعة، مثل السلم الكبير أو الصغير.",
          "exAr": "المقطوعة في السلم الصغير غالبًا صوتها حزين.",
          "catAr": "كلمات إضافية من الوحدة"
        },
        {
          "w": "das Erlebnis",
          "d": "Etwas Besonderes, das man selbst erlebt hat.",
          "ar": "تجربة / حدث مميز",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Der Besuch im Haus der Musik war ein tolles Erlebnis.",
          "dAr": "شيء مميّز عشته بنفسك.",
          "exAr": "زيارة بيت الموسيقى كانت تجربة رائعة.",
          "catAr": "كلمات إضافية من الوحدة"
        },
        {
          "w": "die Erinnerung",
          "d": "Ein Bild oder Gefühl von etwas, das man früher erlebt hat.",
          "ar": "ذكرى",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Dieses Lied verbinde ich mit schönen Erinnerungen an den Urlaub.",
          "dAr": "صورة أو شعور من تجربة عشتها في الماضي.",
          "exAr": "الأغنية دي مرتبطة عندي بذكريات جميلة عن الإجازة.",
          "catAr": "كلمات إضافية من الوحدة"
        },
        {
          "w": "das Gedächtnis",
          "d": "Die Fähigkeit, Informationen im Kopf zu behalten und sich daran zu erinnern.",
          "ar": "الذاكرة",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Mit Rätseln kann man das Gedächtnis trainieren.",
          "dAr": "القدرة على حفظ المعلومات في الذهن وتذكّرها.",
          "exAr": "الألغاز ممكن تدرّب الذاكرة.",
          "catAr": "كلمات إضافية من الوحدة"
        },
        {
          "w": "sich merken",
          "d": "Etwas im Kopf behalten und nicht vergessen.",
          "ar": "يحفظ (في ذهنه) / يتذكّر",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Neue Wörter merke ich mir am besten mit Bildern.",
          "dAr": "الاحتفاظ بشيء في الذهن وعدم نسيانه.",
          "exAr": "أفضل طريقة أفتكر بيها الكلمات الجديدة هي الصور.",
          "catAr": "كلمات إضافية من الوحدة"
        },
        {
          "w": "der Sinn",
          "d": "Eine der Fähigkeiten Sehen, Hören, Riechen, Schmecken und Fühlen.",
          "ar": "حاسّة",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Beim Lernen sollte man mehrere Sinne nutzen.",
          "dAr": "إحدى قدرات الرؤية والسمع والشم والتذوق واللمس.",
          "exAr": "المفروض تستخدم عدة حواس أثناء التعلّم.",
          "catAr": "كلمات إضافية من الوحدة"
        },
        {
          "w": "der Lerntyp",
          "d": "Die Art, wie eine Person am besten lernt, zum Beispiel mit Bildern oder durch Hören.",
          "ar": "نمط التعلّم",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Wenn man seinen Lerntyp kennt, lernt man leichter.",
          "dAr": "الطريقة التي يتعلّم بها الشخص أفضل، مثل الصور أو السماع.",
          "exAr": "لو عارف نمط تعلّمك، هتتعلّم أسهل.",
          "catAr": "كلمات إضافية من الوحدة"
        },
        {
          "w": "die Spritze",
          "d": "Ein Instrument mit einer Nadel, mit dem man ein Medikament in den Körper bringt.",
          "ar": "حقنة",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Bitte keine Spritze, davor habe ich Angst!",
          "dAr": "أداة بإبرة لإدخال دواء في الجسم.",
          "exAr": "من فضلك بلاش حقنة، أنا بخاف منها!",
          "catAr": "كلمات إضافية من الوحدة"
        },
        {
          "w": "das Pflaster",
          "d": "Ein kleines Stück Stoff, das man auf eine kleine Wunde klebt.",
          "ar": "لاصق جروح / بلاستر",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Hast du ein Pflaster für meinen Finger?",
          "dAr": "قطعة صغيرة تُلصق فوق جرح صغير.",
          "exAr": "عندك لاصق طبي لصباعي؟",
          "catAr": "كلمات إضافية من الوحدة"
        },
        {
          "w": "die Wunde",
          "d": "Eine Stelle am Körper, an der die Haut verletzt ist.",
          "ar": "جرح",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Die Wunde blutet ziemlich stark.",
          "dAr": "موضع من الجسم أُصيب الجلد فيه.",
          "exAr": "الجرح بينزف بشدة إلى حد كبير.",
          "catAr": "كلمات إضافية من الوحدة"
        },
        {
          "w": "der Rollstuhl",
          "d": "Ein Stuhl mit Rädern für Menschen, die nicht gehen können.",
          "ar": "كرسي متحرك",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Auch mit dem Rollstuhl kommt man bequem auf den Turm.",
          "dAr": "كرسي بعجلات لمن لا يستطيع المشي.",
          "exAr": "ممكن تطلع للبرج بسهولة بالكرسي المتحرك كمان.",
          "catAr": "كلمات إضافية من الوحدة"
        },
        {
          "w": "die Wertsachen",
          "d": "Teure oder wichtige Dinge, zum Beispiel Schmuck, Geld oder das Handy.",
          "ar": "الأشياء الثمينة",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Lassen Sie Ihre Wertsachen nicht offen im Zimmer liegen.",
          "dAr": "أشياء غالية أو مهمة، مثل المجوهرات والمال والمحمول.",
          "exAr": "ما تسيبش مقتنياتك الثمينة مكشوفة في الغرفة.",
          "catAr": "كلمات إضافية من الوحدة"
        },
        {
          "w": "das Schließfach",
          "d": "Ein kleiner Schrank oder ein Fach, das man abschließen kann.",
          "ar": "خزانة صغيرة بقفل",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Mein Portemonnaie liegt sicher im Schließfach.",
          "dAr": "خزانة صغيرة أو حجرة تخزين يمكن قفلها.",
          "exAr": "محفظتي محفوظة بأمان في الخزانة المقفولة.",
          "catAr": "كلمات إضافية من الوحدة"
        },
        {
          "w": "die Gebühr",
          "d": "Geld, das man für eine bestimmte Leistung bezahlen muss.",
          "ar": "رسوم",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Für den Fernseher im Zimmer zahlt man eine kleine Gebühr.",
          "dAr": "مال تدفعه مقابل خدمة محددة.",
          "exAr": "بتدفع رسومًا بسيطة للتلفزيون الموجود في الغرفة.",
          "catAr": "كلمات إضافية من الوحدة"
        },
        {
          "w": "die Leidenschaft",
          "d": "Ein sehr starkes Gefühl der Liebe oder Begeisterung für etwas.",
          "ar": "شغف",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Tanzen ist für Maja eine große Leidenschaft.",
          "dAr": "حب أو حماس شديد لشيء.",
          "exAr": "الرقص شغف كبير لمايا.",
          "catAr": "كلمات إضافية من الوحدة"
        },
        {
          "w": "das Selbstvertrauen",
          "d": "Das Gefühl, dass man etwas gut kann und sich auf sich selbst verlassen kann.",
          "ar": "الثقة بالنفس",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Durch das Tanzen habe ich viel Selbstvertrauen bekommen.",
          "dAr": "الشعور بأنك تجيد شيئًا ويمكنك الاعتماد على نفسك.",
          "exAr": "الرقص زوّد ثقتي بنفسي جدًا.",
          "catAr": "كلمات إضافية من الوحدة"
        },
        {
          "w": "Mir liegt es auf der Zunge.",
          "d": "Man sagt das, wenn man ein Wort fast weiß, es aber gerade nicht sagen kann.",
          "ar": "على طرف لساني",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Wie heißt der Sänger noch mal? Mir liegt es auf der Zunge!",
          "dAr": "تُقال لما تكون عارف الكلمة تقريبًا لكن مش قادر تقولها.",
          "exAr": "اسم المغني إيه تاني؟ الاسم على طرف لساني!",
          "catAr": "كلمات إضافية من الوحدة"
        },
        {
          "w": "Da bin ich überfragt.",
          "d": "Man sagt das, wenn man auf eine Frage wirklich keine Antwort weiß.",
          "ar": "لا أعرف الإجابة",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Wann das Konzert genau beginnt? Da bin ich wirklich überfragt.",
          "dAr": "تُقال لما تكون فعلًا مش عارف إجابة السؤال.",
          "exAr": "الحفلة بتبدأ إمتى بالظبط؟ دي حاجة فعلًا مش عارفها.",
          "catAr": "كلمات إضافية من الوحدة"
        },
        {
          "w": "Das fällt mir gerade nicht ein.",
          "d": "Man sagt das, wenn man sich im Moment nicht an etwas erinnern kann.",
          "ar": "لا يخطر ببالي الآن",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Wie hieß das Restaurant? Das fällt mir gerade nicht ein.",
          "dAr": "تُقال لما تكون مش قادر تتذكر شيئًا حاليًا.",
          "exAr": "المطعم كان اسمه إيه؟ مش جاي في بالي دلوقتي.",
          "catAr": "كلمات إضافية من الوحدة"
        },
        {
          "w": "mitgehen",
          "d": "Zusammen mit einer anderen Person irgendwohin gehen.",
          "ar": "يذهب مع (أحد)",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Ich besuche Peer im Krankenhaus. Möchtest du mitgehen?",
          "dAr": "الذهاب إلى مكان مع شخص آخر.",
          "exAr": "هزور بير في المستشفى. تحب تيجي معايا؟",
          "catAr": "كلمات إضافية من الوحدة"
        },
        {
          "w": "vorbeigehen",
          "d": "An einer Person oder Sache vorbei weitergehen oder kurz jemanden besuchen.",
          "ar": "يمرّ (على / بجانب)",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Kannst du auf dem Heimweg schnell bei Pia vorbeigehen?",
          "dAr": "المرور بجانب شخص أو شيء، أو زيارة شخص سريعًا.",
          "exAr": "ممكن تعدّي بسرعة على بيا وإنت مروّح؟",
          "catAr": "كلمات إضافية من الوحدة"
        },
        {
          "w": "wegfahren",
          "d": "Einen Ort mit einem Fahrzeug verlassen oder eine kurze Reise machen.",
          "ar": "يسافر / يغادر",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Sollen wir am Wochenende vielleicht wegfahren?",
          "dAr": "مغادرة مكان بمركبة أو القيام برحلة قصيرة.",
          "exAr": "إيه رأيك نسافر في الويك إند؟",
          "catAr": "كلمات إضافية من الوحدة"
        },
        {
          "w": "weitermachen",
          "d": "Mit etwas nicht aufhören, sondern es fortsetzen.",
          "ar": "يستمر / يكمل",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Morgen mache ich an meinem Projekt weiter.",
          "dAr": "الاستمرار في شيء بدل التوقف عنه.",
          "exAr": "بكرة هكمّل شغل على مشروعي.",
          "catAr": "كلمات إضافية من الوحدة"
        },
        {
          "w": "zusammenarbeiten",
          "d": "Gemeinsam mit anderen an einer Sache arbeiten.",
          "ar": "يتعاون / يعمل مع",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Wir haben drei Jahre lang im selben Team zusammengearbeitet.",
          "dAr": "العمل مع الآخرين على شيء مشترك.",
          "exAr": "اشتغلنا مع بعض ثلاث سنين في نفس الفريق.",
          "catAr": "كلمات إضافية من الوحدة"
        },
        {
          "w": "zurückgehen",
          "d": "Wieder an den Ort gehen, an dem man vorher war.",
          "ar": "يرجع",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Ich habe meine Jacke vergessen und muss noch mal zurückgehen.",
          "dAr": "العودة مشيًا للمكان الذي كنت فيه قبل ذلك.",
          "exAr": "نسيت جاكتي ولازم أرجع تاني.",
          "catAr": "كلمات إضافية من الوحدة"
        }
      ],
      "visual": {
        "src": "assets/chapters/chapter-8.webp",
        "alt": "Kapitel 8 · Rund um Körper und Geist",
        "caption": "Rund um Körper und Geist"
      },
      "titleAr": "حول الجسم والعقل",
      "subtitleAr": "Netzwerk neu B1.2 · الوحدة 8"
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
        "note": "Jede Karte enthält eine deutsche Erklärung, einen vollständigen Beispielsatz und die arabische Übersetzung.",
        "noteAr": "كل بطاقة فيها شرح ألماني واضح، مثال كامل، والترجمة العربية.",
        "titleAr": "مفردات مع شرح"
      },
      "vocab": [
        {
          "w": "das Kunstwerk",
          "d": "Ein Werk, das ein Künstler oder eine Künstlerin geschaffen hat, zum Beispiel ein Bild oder eine Skulptur.",
          "ar": "عمل فني",
          "cat": "Kunstobjekte",
          "ex": "Im Museum hängen Kunstwerke aus fünf Jahrhunderten.",
          "dAr": "عمل أنجزه فنان أو فنانة، مثل لوحة أو تمثال.",
          "exAr": "في المتحف أعمال فنية من خمسة قرون.",
          "catAr": "الأعمال الفنية"
        },
        {
          "w": "die Installation",
          "d": "Ein Kunstwerk aus verschiedenen Gegenständen, das man in einem Raum oder an einem Ort aufbaut.",
          "ar": "عمل فني تركيبي (إنستاليشن)",
          "cat": "Kunstobjekte",
          "ex": "Die Installation aus alten Stühlen steht mitten auf dem Platz.",
          "dAr": "عمل فني من أشياء مختلفة تُرتّب في غرفة أو مكان.",
          "exAr": "التركيب الفني من الكراسي القديمة موجود وسط الساحة.",
          "catAr": "الأعمال الفنية"
        },
        {
          "w": "die Statue",
          "d": "Eine Figur aus Stein, Holz oder Metall, die meistens einen Menschen oder ein Tier zeigt.",
          "ar": "تمثال",
          "cat": "Kunstobjekte",
          "ex": "Vor dem Rathaus steht eine Statue des Stadtgründers.",
          "dAr": "مجسّم من حجر أو خشب أو معدن يمثّل غالبًا إنسانًا أو حيوانًا.",
          "exAr": "أمام مبنى البلدية تمثال لمؤسس المدينة.",
          "catAr": "الأعمال الفنية"
        },
        {
          "w": "der Brunnen",
          "d": "Eine Anlage mit Wasser, oft mit Figuren, die zum Beispiel auf einem Platz in der Stadt steht.",
          "ar": "نافورة / بئر",
          "cat": "Kunstobjekte",
          "ex": "Im Sommer sitzen viele Leute am Brunnen und essen ein Eis.",
          "dAr": "منشأة فيها ماء وغالبًا تماثيل، مثل نافورة في ساحة بالمدينة.",
          "exAr": "في الصيف ناس كتير بيقعدوا عند النافورة وياكلوا آيس كريم.",
          "catAr": "الأعمال الفنية"
        },
        {
          "w": "die Auktion",
          "d": "Ein Verkauf, bei dem die Person die Ware bekommt, die am meisten Geld bietet.",
          "ar": "مزاد",
          "cat": "Kunstobjekte",
          "ex": "Bei der Auktion wurde das Bild für 5.000 Euro verkauft.",
          "dAr": "بيع يحصل فيه صاحب أعلى عرض مالي على السلعة.",
          "exAr": "اللوحة اتباعت في المزاد بخمسة آلاف يورو.",
          "catAr": "الأعمال الفنية"
        },
        {
          "w": "das Original",
          "d": "Ein echtes Kunstwerk, das der Künstler selbst gemacht hat und das keine Kopie ist.",
          "ar": "الأصل / النسخة الأصلية",
          "cat": "Kunstobjekte",
          "ex": "Das Bild ist ein Original, keine Kopie.",
          "dAr": "عمل فني حقيقي صنعه الفنان بنفسه وليس نسخة.",
          "exAr": "اللوحة أصلية، مش نسخة.",
          "catAr": "الأعمال الفنية"
        },
        {
          "w": "original (Adjektiv)",
          "d": "Etwas ist original, wenn es echt ist und nicht kopiert wurde.",
          "ar": "أصلي",
          "cat": "Kunstobjekte",
          "ex": "Im Kunstsupermarkt kann man originale Bilder günstig kaufen.",
          "dAr": "حقيقي وغير منسوخ.",
          "exAr": "في سوق الفن ممكن تشتري لوحات أصلية بسعر مناسب.",
          "catAr": "الأعمال الفنية"
        },
        {
          "w": "die Galerie",
          "d": "Ein Raum oder Geschäft, in dem man Kunstwerke ausstellt und verkauft.",
          "ar": "معرض فني / جاليري",
          "cat": "In der Galerie",
          "ex": "Die kleine Galerie zeigt Bilder von jungen Künstlerinnen.",
          "dAr": "مكان أو متجر لعرض الأعمال الفنية وبيعها.",
          "exAr": "المعرض الصغير بيعرض لوحات لفنانات شابات.",
          "catAr": "في المعرض الفني"
        },
        {
          "w": "die Eröffnung",
          "d": "Der erste Tag oder das Fest, mit dem eine Ausstellung oder ein Geschäft beginnt.",
          "ar": "افتتاح",
          "cat": "In der Galerie",
          "ex": "Zur Eröffnung der Ausstellung kamen über hundert Gäste.",
          "dAr": "اليوم الأول أو الاحتفال الذي يبدأ به معرض أو متجر.",
          "exAr": "أكتر من مئة ضيف حضروا افتتاح المعرض.",
          "catAr": "في المعرض الفني"
        },
        {
          "w": "anregen (zu + D)",
          "d": "Jemanden dazu bringen, dass er über etwas nachdenkt oder etwas tut.",
          "ar": "يحفّز / يدفع إلى",
          "cat": "In der Galerie",
          "ex": "Das Bild regt zum Nachdenken an.",
          "dAr": "دفع شخص للتفكير في شيء أو القيام به.",
          "exAr": "اللوحة بتشجّع على التفكير.",
          "catAr": "في المعرض الفني"
        },
        {
          "w": "ansprechen",
          "d": "Jemandem gefallen oder ein Gefühl bei jemandem auslösen.",
          "ar": "يعجب / يلمس (شخصًا)",
          "cat": "In der Galerie",
          "ex": "Das Bild spricht mich leider nicht an.",
          "dAr": "أن يعجب شيء شخصًا أو يثير إحساسًا عنده.",
          "exAr": "للأسف اللوحة مش عاجباني.",
          "catAr": "في المعرض الفني"
        },
        {
          "w": "die Ölfarbe",
          "d": "Eine Farbe mit Öl, mit der Maler zum Beispiel auf Leinwand malen.",
          "ar": "لون زيتي",
          "cat": "In der Galerie",
          "ex": "Die Malerin arbeitet am liebsten mit Ölfarben.",
          "dAr": "لون يحتوي على زيت ويستخدمه الرسامون مثلًا على القماش.",
          "exAr": "الرسامة بتفضّل تشتغل بالألوان الزيتية.",
          "catAr": "في المعرض الفني"
        },
        {
          "w": "der Geschmack",
          "d": "Das, was einer Person gefällt, zum Beispiel bei Kleidung, Möbeln oder Kunst.",
          "ar": "ذوق / طعم",
          "cat": "In der Galerie",
          "ex": "Über Geschmack kann man nicht streiten.",
          "dAr": "ما يعجب الشخص، مثلًا في الملابس أو الأثاث أو الفن.",
          "exAr": "الأذواق لا يُجادَل فيها.",
          "catAr": "في المعرض الفني"
        },
        {
          "w": "der Käufer",
          "d": "Ein Mann, der etwas kauft.",
          "ar": "مشترٍ",
          "cat": "In der Galerie",
          "ex": "Der Käufer hat für das Gemälde viel Geld bezahlt.",
          "dAr": "رجل يشتري شيئًا.",
          "exAr": "المشتري دفع فلوس كتير مقابل اللوحة.",
          "catAr": "في المعرض الفني"
        },
        {
          "w": "die Käuferin",
          "d": "Eine Frau, die etwas kauft.",
          "ar": "مشترية",
          "cat": "In der Galerie",
          "ex": "Eine Käuferin hat gleich drei Bilder mitgenommen.",
          "dAr": "امرأة تشتري شيئًا.",
          "exAr": "إحدى المشتريات أخدت ثلاث لوحات مرة واحدة.",
          "catAr": "في المعرض الفني"
        },
        {
          "w": "künstlerisch",
          "d": "So, dass es mit Kunst zu tun hat oder kreativ ist.",
          "ar": "فنّي",
          "cat": "In der Galerie",
          "ex": "Im neuen Kursprogramm können Sie künstlerisch aktiv sein.",
          "dAr": "متعلق بالفن أو بالإبداع.",
          "exAr": "في برنامج الكورسات الجديد ممكن تمارس نشاطًا فنيًا.",
          "catAr": "في المعرض الفني"
        },
        {
          "w": "sich handeln (um + A)",
          "d": "Mit „es handelt sich um“ sagt man, was eine Sache genau ist.",
          "ar": "يتعلق الأمر بـ / الموضوع هو",
          "cat": "In der Galerie",
          "ex": "Die Putzfrau wusste nicht, dass es sich um ein Kunstwerk handelte.",
          "dAr": "تعبير es handelt sich um يوضّح ماهية الشيء تحديدًا.",
          "exAr": "عاملة التنظيف ماكانتش عارفة إن ده عمل فني.",
          "catAr": "في المعرض الفني"
        },
        {
          "w": "beschädigen",
          "d": "Etwas teilweise kaputt machen.",
          "ar": "يُتلف / يُلحق ضررًا بـ",
          "cat": "In der Galerie",
          "ex": "Beim Transport wurde das Bild leider beschädigt.",
          "dAr": "إتلاف شيء بشكل جزئي.",
          "exAr": "للأسف اللوحة اتضررت أثناء النقل.",
          "catAr": "في المعرض الفني"
        },
        {
          "w": "die Putzfirma",
          "d": "Eine Firma, die Wohnungen, Büros oder Museen sauber macht.",
          "ar": "شركة تنظيف",
          "cat": "In der Galerie",
          "ex": "Die Putzfirma kommt jeden Abend ins Museum.",
          "dAr": "شركة تنظّف الشقق أو المكاتب أو المتاحف.",
          "exAr": "شركة التنظيف بتيجي المتحف كل مساء.",
          "catAr": "في المعرض الفني"
        },
        {
          "w": "musizieren",
          "d": "Allein oder mit anderen zusammen Musik machen.",
          "ar": "يعزف / يمارس الموسيقى",
          "cat": "Rund um die Musik",
          "ex": "Am Wochenende musizieren wir gemeinsam im Hof.",
          "dAr": "عزف الموسيقى وحدك أو مع الآخرين.",
          "exAr": "في الويك إند بنعزف موسيقى مع بعض في الفناء.",
          "catAr": "حول الموسيقى"
        },
        {
          "w": "bewegen",
          "d": "Starke Gefühle bei jemandem auslösen.",
          "ar": "يحرّك المشاعر / يؤثر في",
          "cat": "Rund um die Musik",
          "ex": "Die Musik bewegt mich, sie macht mich traurig.",
          "dAr": "إثارة مشاعر قوية عند شخص.",
          "exAr": "الموسيقى بتأثر فيّ وبتخلّيني حزين.",
          "catAr": "حول الموسيقى"
        },
        {
          "w": "der Schulchor",
          "d": "Eine Gruppe von Schülerinnen und Schülern, die zusammen singen.",
          "ar": "كورال المدرسة",
          "cat": "Rund um die Musik",
          "ex": "Früher habe ich im Schulchor gesungen.",
          "dAr": "مجموعة تلاميذ يغنّون معًا.",
          "exAr": "زمان كنت بغنّي في كورال المدرسة.",
          "catAr": "حول الموسيقى"
        },
        {
          "w": "das Volkslied",
          "d": "Ein altes, bekanntes Lied, das viele Menschen in einem Land kennen und singen.",
          "ar": "أغنية شعبية / فلكلورية",
          "cat": "Rund um die Musik",
          "ex": "Auf dem Dorffest singen alle zusammen alte Volkslieder.",
          "dAr": "أغنية قديمة معروفة يعرفها ويغنّيها ناس كتير في بلد معين.",
          "exAr": "في احتفال القرية الكل بيغنّي أغاني شعبية قديمة مع بعض.",
          "catAr": "حول الموسيقى"
        },
        {
          "w": "der Gedanke",
          "d": "Das, was man denkt, oder eine Idee im Kopf.",
          "ar": "فكرة / خاطر",
          "cat": "Rund um die Musik",
          "ex": "Mach dir keine Gedanken, alles wird gut!",
          "dAr": "ما تفكّر فيه أو فكرة في ذهنك.",
          "exAr": "ما تقلقش، كل حاجة هتكون كويسة!",
          "catAr": "حول الموسيقى"
        },
        {
          "w": "die Tradition",
          "d": "Etwas, das Menschen schon lange immer wieder auf die gleiche Art machen.",
          "ar": "تقليد / عادة متوارثة",
          "cat": "Rund um die Musik",
          "ex": "Bei uns ist es Tradition, am Freitag zusammen zu essen.",
          "dAr": "شيء يفعله الناس بنفس الطريقة منذ مدة طويلة.",
          "exAr": "عندنا تقليد إننا ناكل مع بعض يوم الجمعة.",
          "catAr": "حول الموسيقى"
        },
        {
          "w": "traditionell",
          "d": "So, wie man es schon lange macht, und nicht modern.",
          "ar": "تقليدي",
          "cat": "Rund um die Musik",
          "ex": "Auf dem Fest trugen viele Gäste traditionelle Kleidung.",
          "dAr": "بالطريقة المعتادة منذ زمن، وغير حديث.",
          "exAr": "ضيوف كتير كانوا لابسين ملابس تقليدية في الاحتفال.",
          "catAr": "حول الموسيقى"
        },
        {
          "w": "das Theaterstück",
          "d": "Eine Geschichte, die Schauspieler auf einer Bühne spielen.",
          "ar": "مسرحية",
          "cat": "Auf der Bühne",
          "ex": "Die Theatergruppe probt ein neues Theaterstück.",
          "dAr": "قصة يؤديها ممثلون على المسرح.",
          "exAr": "الفرقة المسرحية بتتمرّن على مسرحية جديدة.",
          "catAr": "على المسرح"
        },
        {
          "w": "das Impro-Theater",
          "d": "Theater ohne festen Text, bei dem die Schauspieler alles spontan erfinden.",
          "ar": "مسرح ارتجالي",
          "cat": "Auf der Bühne",
          "ex": "Beim Impro-Theater bestimmt oft das Publikum das Thema.",
          "dAr": "مسرح من غير نص ثابت يبتكر فيه الممثلون كل شيء تلقائيًا.",
          "exAr": "في المسرح الارتجالي الجمهور غالبًا بيحدد الموضوع.",
          "catAr": "على المسرح"
        },
        {
          "w": "improvisieren",
          "d": "Etwas spontan machen, ohne Plan und ohne Vorbereitung.",
          "ar": "يرتجل",
          "cat": "Auf der Bühne",
          "ex": "Mir fehlten Zutaten, also musste ich beim Kochen improvisieren.",
          "dAr": "فعل شيء تلقائيًا من غير خطة أو تحضير.",
          "exAr": "كانت ناقصاني مكوّنات، فاضطريت أرتجل وأنا بطبخ.",
          "catAr": "على المسرح"
        },
        {
          "w": "erfinden",
          "d": "Sich etwas Neues ausdenken, zum Beispiel eine Geschichte oder eine Maschine.",
          "ar": "يخترع / يؤلّف",
          "cat": "Auf der Bühne",
          "ex": "Die Schauspieler erfinden die Geschichte direkt auf der Bühne.",
          "dAr": "ابتكار شيء جديد، مثل قصة أو آلة.",
          "exAr": "الممثلون بيبتكروا القصة مباشرة على المسرح.",
          "catAr": "على المسرح"
        },
        {
          "w": "anwenden",
          "d": "Etwas, das man gelernt hat, in der Praxis benutzen.",
          "ar": "يطبّق / يستخدم",
          "cat": "Auf der Bühne",
          "ex": "Im Kurs lernen Sie eine besondere Technik und wenden sie gleich an.",
          "dAr": "استخدام ما تعلّمته في التطبيق العملي.",
          "exAr": "في الكورس بتتعلّم تقنية مميزة وبتطبّقها فورًا.",
          "catAr": "على المسرح"
        },
        {
          "w": "herumspringen",
          "d": "Ohne bestimmtes Ziel hin und her springen.",
          "ar": "يقفز هنا وهناك",
          "cat": "Auf der Bühne",
          "ex": "Die Kinder springen fröhlich auf der Bühne herum.",
          "dAr": "القفز هنا وهناك من غير هدف محدد.",
          "exAr": "الأطفال بينطّوا بفرح على المسرح.",
          "catAr": "على المسرح"
        },
        {
          "w": "rennen",
          "d": "Sehr schnell laufen.",
          "ar": "يركض / يجري بسرعة",
          "cat": "Auf der Bühne",
          "ex": "Der Dieb rannte mit der Tasche davon.",
          "dAr": "الجري بسرعة كبيرة.",
          "exAr": "الحرامي هرب جري بالشنطة.",
          "catAr": "على المسرح"
        },
        {
          "w": "schreien",
          "d": "Sehr laut rufen oder sprechen.",
          "ar": "يصرخ",
          "cat": "Auf der Bühne",
          "ex": "Auf der Bühne darf man auch mal laut schreien.",
          "dAr": "النداء أو الكلام بصوت عالٍ جدًا.",
          "exAr": "على المسرح مسموح تصرخ بصوت عالي أحيانًا.",
          "catAr": "على المسرح"
        },
        {
          "w": "das Kostüm",
          "d": "Besondere Kleidung, die man zum Beispiel im Theater oder beim Karneval trägt.",
          "ar": "زيّ مسرحي / تنكري",
          "cat": "Auf der Bühne",
          "ex": "Für die Rolle trägt sie ein Kostüm aus dem 18. Jahrhundert.",
          "dAr": "ملابس خاصة تُلبس مثلًا في المسرح أو الكرنفال.",
          "exAr": "علشان الدور هي لابسة زيًا من القرن الثامن عشر.",
          "catAr": "على المسرح"
        },
        {
          "w": "die Uniform",
          "d": "Gleiche Kleidung, die zum Beispiel Polizisten oder Piloten bei der Arbeit tragen.",
          "ar": "زيّ رسمي موحّد",
          "cat": "Auf der Bühne",
          "ex": "Der Schauspieler spielt einen Polizisten und trägt eine Uniform.",
          "dAr": "ملابس موحّدة يرتديها مثلًا رجال الشرطة أو الطيارون أثناء العمل.",
          "exAr": "الممثل بيلعب دور شرطي ولابس زيًا رسميًا.",
          "catAr": "على المسرح"
        },
        {
          "w": "der Dieb",
          "d": "Ein Mann, der etwas stiehlt.",
          "ar": "لص / سارق",
          "cat": "Auf der Bühne",
          "ex": "Der Detektiv sucht den Dieb im Treppenhaus.",
          "dAr": "رجل يسرق شيئًا.",
          "exAr": "المحقق بيدوّر على السارق في بيت السلم.",
          "catAr": "على المسرح"
        },
        {
          "w": "die Diebin",
          "d": "Eine Frau, die etwas stiehlt.",
          "ar": "لصة / سارقة",
          "cat": "Auf der Bühne",
          "ex": "Die Diebin hat eine wertvolle Briefmarke gestohlen.",
          "dAr": "امرأة تسرق شيئًا.",
          "exAr": "السارقة سرقت طابع بريد ثمينًا.",
          "catAr": "على المسرح"
        },
        {
          "w": "aufführen",
          "d": "Ein Theaterstück oder ein Musikstück vor Publikum zeigen.",
          "ar": "يعرض / يقدّم (عرضًا)",
          "cat": "Rund um die Aufführung",
          "ex": "Am Ende des Kurses führen wir ein lustiges Stück auf.",
          "dAr": "تقديم مسرحية أو مقطوعة موسيقية أمام الجمهور.",
          "exAr": "في نهاية الكورس هنقدّم مسرحية مضحكة.",
          "catAr": "حول العرض"
        },
        {
          "w": "auftreten",
          "d": "Auf einer Bühne vor Publikum spielen, singen oder sprechen.",
          "ar": "يظهر على المسرح / يؤدّي",
          "cat": "Rund um die Aufführung",
          "ex": "Die Sängerin ist schon in vielen Ländern aufgetreten.",
          "dAr": "العزف أو الغناء أو الكلام على المسرح أمام الجمهور.",
          "exAr": "المغنية ظهرت على المسرح في بلاد كتير بالفعل.",
          "catAr": "حول العرض"
        },
        {
          "w": "umsetzen",
          "d": "Eine Idee oder einen Plan in die Realität bringen.",
          "ar": "ينفّذ / يحوّل إلى واقع",
          "cat": "Rund um die Aufführung",
          "ex": "Alice hilft Ihnen, Ihre kreativen Ideen umzusetzen.",
          "dAr": "تحويل فكرة أو خطة إلى واقع.",
          "exAr": "أليس بتساعدك تنفّذ أفكارك الإبداعية.",
          "catAr": "حول العرض"
        },
        {
          "w": "veranstalten",
          "d": "Ein Fest oder eine Veranstaltung organisieren und durchführen.",
          "ar": "ينظّم / يقيم (حفلًا)",
          "cat": "Rund um die Aufführung",
          "ex": "Wir veranstalten am Samstag eine Feier für alle Teilnehmenden.",
          "dAr": "تنظيم احتفال أو فعالية وإقامتها.",
          "exAr": "هننظّم احتفالًا يوم السبت لكل المشاركين.",
          "catAr": "حول العرض"
        },
        {
          "w": "sich schminken",
          "d": "Farbe ins Gesicht machen, um schöner oder anders auszusehen.",
          "ar": "يضع مكياجًا / يتزيّن",
          "cat": "Rund um die Aufführung",
          "ex": "Für ihre Rolle schminkt sie sich besonders.",
          "dAr": "وضع ألوان على الوجه ليبدو أجمل أو مختلفًا.",
          "exAr": "هي بتحط مكياجًا مميزًا لدورها.",
          "catAr": "حول العرض"
        },
        {
          "w": "die Frisur",
          "d": "Die Form, in der die Haare geschnitten oder gemacht sind.",
          "ar": "تسريحة شعر",
          "cat": "Rund um die Aufführung",
          "ex": "Mit der neuen Frisur sieht er ganz anders aus.",
          "dAr": "الشكل الذي يُقص أو يُصفّف به الشعر.",
          "exAr": "بتسريحة الشعر الجديدة شكله مختلف تمامًا.",
          "catAr": "حول العرض"
        },
        {
          "w": "die Mode",
          "d": "Kleidung oder Dinge, die zu einer bestimmten Zeit sehr beliebt sind.",
          "ar": "موضة",
          "cat": "Rund um die Aufführung",
          "ex": "Singen kommt nie aus der Mode.",
          "dAr": "ملابس أو أشياء رائجة جدًا في وقت معين.",
          "exAr": "الغناء عمره ما بيبطل موضة.",
          "catAr": "حول العرض"
        },
        {
          "w": "die Darstellung",
          "d": "Die Art, wie man etwas oder jemanden zeigt, zum Beispiel in einem Bild oder auf der Bühne.",
          "ar": "تصوير / تجسيد",
          "cat": "Rund um die Aufführung",
          "ex": "Die Darstellung des Themas „Frieden“ ist bei jedem Maler anders.",
          "dAr": "طريقة إظهار شيء أو شخص، مثلًا في لوحة أو على المسرح.",
          "exAr": "تجسيد موضوع «السلام» مختلف عند كل رسام.",
          "catAr": "حول العرض"
        },
        {
          "w": "die Vorstellung",
          "d": "Eine Aufführung im Theater, im Zirkus oder im Kino.",
          "ar": "عرض (مسرحي)",
          "cat": "Rund um die Aufführung",
          "ex": "Die Vorstellung beginnt heute um 20 Uhr.",
          "dAr": "عرض في المسرح أو السيرك أو السينما.",
          "exAr": "العرض بيبدأ النهارده الساعة ٨ مساءً.",
          "catAr": "حول العرض"
        },
        {
          "w": "zusehen",
          "d": "Mit Interesse ansehen, was andere machen.",
          "ar": "يتفرّج على / يشاهد",
          "cat": "Rund um die Aufführung",
          "ex": "Ich sehe den Schauspielern gern bei der Probe zu.",
          "dAr": "متابعة ما يفعله الآخرون باهتمام.",
          "exAr": "بحب أتفرّج على الممثلين أثناء البروفة.",
          "catAr": "حول العرض"
        },
        {
          "w": "die Broschüre",
          "d": "Ein dünnes Heft mit Informationen, zum Beispiel über Kurse oder eine Stadt.",
          "ar": "كُتيّب / بروشور",
          "cat": "Rund um die Aufführung",
          "ex": "In der Broschüre finden Sie alle Kurse des Semesters.",
          "dAr": "كتيّب رفيع فيه معلومات عن كورسات أو مدينة مثلًا.",
          "exAr": "في الكتيّب هتلاقي كل كورسات الفصل الدراسي.",
          "catAr": "حول العرض"
        },
        {
          "w": "das Büfett",
          "d": "Ein Tisch mit vielen Speisen und Getränken, von dem sich die Gäste selbst nehmen.",
          "ar": "بوفيه",
          "cat": "Rund um die Aufführung",
          "ex": "Nach der Eröffnung gibt es ein Büfett mit Snacks und Getränken.",
          "dAr": "طاولة عليها أطعمة ومشروبات يختار منها الضيوف بأنفسهم.",
          "exAr": "بعد الافتتاح فيه بوفيه بوجبات خفيفة ومشروبات.",
          "catAr": "حول العرض"
        },
        {
          "w": "der Snack",
          "d": "Eine kleine Mahlzeit für zwischendurch.",
          "ar": "وجبة خفيفة / سناك",
          "cat": "Rund um die Aufführung",
          "ex": "In der Pause gibt es Getränke und kleine Snacks.",
          "dAr": "وجبة صغيرة بين الوجبات.",
          "exAr": "في الاستراحة فيه مشروبات ووجبات خفيفة صغيرة.",
          "catAr": "حول العرض"
        },
        {
          "w": "konsumieren",
          "d": "Etwas kaufen und verbrauchen, zum Beispiel Essen, Getränke oder Waren.",
          "ar": "يستهلك",
          "cat": "Rund um die Aufführung",
          "ex": "Auf dem Platz kann man sitzen, ohne etwas konsumieren zu müssen.",
          "dAr": "شراء واستهلاك شيء، مثل الطعام أو المشروبات أو السلع.",
          "exAr": "ممكن تقعد في الساحة من غير ما تضطر تشتري حاجة.",
          "catAr": "حول العرض"
        },
        {
          "w": "die Rose",
          "d": "Eine Blume mit Dornen, die oft rot ist und als Zeichen für Liebe gilt.",
          "ar": "وردة",
          "cat": "Gegenstände",
          "ex": "Nach der Vorstellung schenkt er ihr eine rote Rose.",
          "dAr": "زهرة ذات أشواك غالبًا حمراء وتُعتبر رمزًا للحب.",
          "exAr": "بعد العرض بيهدي لها وردة حمراء.",
          "catAr": "الأشياء"
        },
        {
          "w": "der Spiegel",
          "d": "Ein Glas, in dem man sich selbst sehen kann.",
          "ar": "مرآة",
          "cat": "Gegenstände",
          "ex": "Vor dem Auftritt schaut sie noch einmal in den Spiegel.",
          "dAr": "سطح زجاجي ترى فيه نفسك.",
          "exAr": "قبل الظهور على المسرح بتبص في المراية مرة كمان.",
          "catAr": "الأشياء"
        },
        {
          "w": "der Topf",
          "d": "Ein rundes Gefäß, in dem man zum Beispiel Suppe oder Nudeln kocht.",
          "ar": "قِدر / حلّة",
          "cat": "Gegenstände",
          "ex": "Auf dem Herd steht ein großer Topf mit Suppe.",
          "dAr": "وعاء مستدير لطهي الشوربة أو المكرونة مثلًا.",
          "exAr": "على البوتاجاز حلة كبيرة فيها شوربة.",
          "catAr": "الأشياء"
        },
        {
          "w": "die Vase",
          "d": "Ein Gefäß, in das man Blumen mit Wasser stellt.",
          "ar": "مزهرية / فازة",
          "cat": "Gegenstände",
          "ex": "Aus alten Flaschen kann man bunte Vasen machen.",
          "dAr": "وعاء توضع فيه الزهور مع الماء.",
          "exAr": "ممكن تعمل مزهريات ملونة من زجاجات قديمة.",
          "catAr": "الأشياء"
        },
        {
          "w": "die Couch",
          "d": "Ein bequemes Möbelstück, auf dem mehrere Personen sitzen oder liegen können.",
          "ar": "كنبة / أريكة",
          "cat": "Gegenstände",
          "ex": "Auf der Bühne steht nur eine alte Couch.",
          "dAr": "قطعة أثاث مريحة يمكن لعدة أشخاص الجلوس أو الاستلقاء عليها.",
          "exAr": "على المسرح كنبة قديمة بس.",
          "catAr": "الأشياء"
        },
        {
          "w": "der Backofen",
          "d": "Ein Gerät in der Küche, in dem man Brot, Kuchen oder Pizza backt.",
          "ar": "فرن",
          "cat": "Gegenstände",
          "ex": "Der Kuchen ist schon seit 30 Minuten im Backofen.",
          "dAr": "جهاز بالمطبخ لخبز العيش أو الكيك أو البيتزا.",
          "exAr": "الكيكة بقالها ثلاثين دقيقة في الفرن.",
          "catAr": "الأشياء"
        },
        {
          "w": "die Briefmarke",
          "d": "Ein kleines Bild aus Papier, das man auf einen Brief klebt, bevor man ihn verschickt.",
          "ar": "طابع بريد",
          "cat": "Gegenstände",
          "ex": "Mein Onkel sammelt seit Jahren alte Briefmarken.",
          "dAr": "قطعة ورق صغيرة مصوّرة تُلصق على الرسالة قبل إرسالها.",
          "exAr": "عمي بيجمع طوابع بريد قديمة من سنين.",
          "catAr": "الأشياء"
        },
        {
          "w": "der Kuli",
          "d": "Ein Stift mit Tinte zum Schreiben; das Wort ist die Kurzform von Kugelschreiber.",
          "ar": "قلم جاف",
          "cat": "Gegenstände",
          "ex": "Hast du vielleicht einen Kuli für mich?",
          "dAr": "قلم بحبر للكتابة؛ والكلمة اختصار لـ Kugelschreiber.",
          "exAr": "عندك قلم جاف تدّيه لي؟",
          "catAr": "الأشياء"
        },
        {
          "w": "clever",
          "d": "Klug und mit guten Ideen.",
          "ar": "ذكي / شاطر",
          "cat": "Eigenschaften",
          "ex": "Der Zoo hatte eine clevere Idee, um Geld zu verdienen.",
          "dAr": "ذكي وعنده أفكار كويسة.",
          "exAr": "حديقة الحيوان كانت عندها فكرة ذكية لكسب الفلوس.",
          "catAr": "الصفات"
        },
        {
          "w": "chaotisch",
          "d": "Ohne Ordnung und sehr durcheinander.",
          "ar": "فوضوي",
          "cat": "Eigenschaften",
          "ex": "Unsere Proben sind manchmal ziemlich chaotisch.",
          "dAr": "غير منظّم ومليان لخبطة.",
          "exAr": "بروفاتنا أحيانًا فوضوية جدًا.",
          "catAr": "الصفات"
        },
        {
          "w": "durcheinander",
          "d": "Nicht ordentlich und ohne Ordnung.",
          "ar": "مبعثر / غير مرتّب",
          "cat": "Eigenschaften",
          "ex": "Nach der Party war in der Wohnung alles durcheinander.",
          "dAr": "غير مرتّب ومن غير نظام.",
          "exAr": "بعد الحفلة كل حاجة في الشقة كانت ملخبطة.",
          "catAr": "الصفات"
        },
        {
          "w": "begrenzt",
          "d": "So, dass es eine Grenze hat und nicht unendlich viel davon gibt.",
          "ar": "محدود",
          "cat": "Eigenschaften",
          "ex": "Die Plätze im Kurs sind begrenzt, melden Sie sich schnell an.",
          "dAr": "له حد وليس متاحًا بكمية غير نهائية.",
          "exAr": "أماكن الكورس محدودة، سجّل بسرعة.",
          "catAr": "الصفات"
        },
        {
          "w": "rund",
          "d": "So geformt wie ein Kreis oder ein Ball, ohne Ecken.",
          "ar": "مستدير / دائري",
          "cat": "Eigenschaften",
          "ex": "Das Gebäude hat runde Formen.",
          "dAr": "على شكل دائرة أو كرة ومن غير زوايا.",
          "exAr": "المبنى فيه أشكال دائرية.",
          "catAr": "الصفات"
        },
        {
          "w": "steil",
          "d": "So, dass es sehr schnell nach oben oder nach unten geht.",
          "ar": "شديد الانحدار",
          "cat": "Eigenschaften",
          "ex": "Der Weg auf den Berg ist sehr steil.",
          "dAr": "يرتفع أو ينخفض بانحدار شديد.",
          "exAr": "الطريق إلى الجبل شديد الانحدار.",
          "catAr": "الصفات"
        },
        {
          "w": "weich",
          "d": "Nicht hart, so dass man es leicht drücken kann.",
          "ar": "طريّ / ناعم",
          "cat": "Eigenschaften",
          "ex": "Das Kissen auf der Couch ist schön weich.",
          "dAr": "غير صلب ويمكن ضغطه بسهولة.",
          "exAr": "المخدة على الكنبة طرية ولطيفة.",
          "catAr": "الصفات"
        },
        {
          "w": "talentiert",
          "d": "Mit einer besonderen Begabung für etwas.",
          "ar": "موهوب",
          "cat": "Eigenschaften",
          "ex": "In der Show singen mehr oder weniger talentierte Sänger.",
          "dAr": "لديه موهبة خاصة في شيء.",
          "exAr": "في البرنامج بيغنّي مطربون بدرجات موهبة متفاوتة.",
          "catAr": "الصفات"
        },
        {
          "w": "zeitlos",
          "d": "So, dass es nicht aus der Mode kommt und immer aktuell bleibt.",
          "ar": "خالد / لا يرتبط بزمن",
          "cat": "Eigenschaften",
          "ex": "Dieses Lied ist zeitlos, man hört es auch heute noch gern.",
          "dAr": "لا تبطل موضته ويظل مناسبًا لكل وقت.",
          "exAr": "الأغنية دي لا يحدّها الزمن، ولسه بنحب نسمعها النهارده.",
          "catAr": "الصفات"
        },
        {
          "w": "begeistert",
          "d": "Sehr froh und voller Freude über etwas.",
          "ar": "متحمّس / مُعجَب جدًا",
          "cat": "Eigenschaften",
          "ex": "Das Publikum war von der Aufführung begeistert.",
          "dAr": "سعيد جدًا ومليان فرحة بشيء.",
          "exAr": "الجمهور كان معجبًا جدًا بالعرض.",
          "catAr": "الصفات"
        },
        {
          "w": "dankbar (für + A)",
          "d": "So, dass man jemandem danken möchte, weil er etwas Gutes getan hat.",
          "ar": "ممتنّ (لـ)",
          "cat": "Eigenschaften",
          "ex": "Ich bin dir sehr dankbar für deine Hilfe.",
          "dAr": "راغب في شكر شخص لأنه عمل حاجة كويسة.",
          "exAr": "أنا ممتن لك جدًا على مساعدتك.",
          "catAr": "الصفات"
        },
        {
          "w": "behandeln",
          "d": "Über ein Thema sprechen oder arbeiten; auch: auf eine bestimmte Art mit jemandem umgehen.",
          "ar": "يتناول (موضوعًا) / يعامل",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "In ihrem Kurs behandelt die Malerin das Thema „Frieden“.",
          "dAr": "تناول موضوع بالكلام أو العمل؛ أو التعامل مع شخص بطريقة معينة.",
          "exAr": "في كورسها الرسامة بتتناول موضوع «السلام».",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "besprechen",
          "d": "Genau über etwas sprechen, um eine Lösung oder einen Plan zu finden.",
          "ar": "يناقش / يتباحث في",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Wir besprechen die Rollen zu Beginn des Kurses.",
          "dAr": "الكلام بالتفصيل عن شيء لإيجاد حل أو خطة.",
          "exAr": "بنناقش الأدوار في بداية الكورس.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "bestehen (aus + D)",
          "d": "Aus verschiedenen Teilen oder Personen zusammengesetzt sein.",
          "ar": "يتكوّن من",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Die Gruppe besteht aus fünf Personen.",
          "dAr": "أن يتكوّن شيء من عدة أجزاء أو أشخاص.",
          "exAr": "المجموعة بتتكوّن من خمسة أشخاص.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "die Biene",
          "d": "Ein kleines Insekt, das Honig macht.",
          "ar": "نحلة",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Im Garten fliegen viele Bienen um die Blumen.",
          "dAr": "حشرة صغيرة تنتج العسل.",
          "exAr": "في الحديقة نحل كتير بيطير حوالين الزهور.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "einsperren",
          "d": "Jemanden in einen Raum bringen und die Tür abschließen, sodass er nicht hinaus kann.",
          "ar": "يحبس / يسجن",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Im Lied sperrt man einen Mann in einen dunklen Kerker ein.",
          "dAr": "وضع شخص في غرفة وقفلها عليه بحيث لا يستطيع الخروج.",
          "exAr": "في الأغنية بيحبسوا رجلًا في زنزانة مظلمة.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "einzig",
          "d": "Nur diese eine Person oder Sache und keine andere.",
          "ar": "الوحيد",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Sie ist die einzige Person in der Gruppe, die Klavier spielt.",
          "dAr": "هذا الشخص أو الشيء وحده دون غيره.",
          "exAr": "هي الشخص الوحيد في المجموعة اللي بيعزف بيانو.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "ersetzen",
          "d": "Etwas durch etwas anderes austauschen, weil das Erste fehlt oder kaputt ist.",
          "ar": "يستبدل / يعوّض",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Wenn mir Zutaten fehlen, ersetze ich sie durch andere.",
          "dAr": "استبدال شيء بآخر لأن الأول ناقص أو تالف.",
          "exAr": "لما تكون ناقصاني مكوّنات بستبدلها بمكوّنات تانية.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "der Frieden",
          "d": "Eine Zeit ohne Krieg und ohne Streit.",
          "ar": "سلام",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Das Thema des Malkurses ist der Frieden.",
          "dAr": "فترة من غير حرب أو خلافات.",
          "exAr": "موضوع كورس الرسم هو السلام.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "her sein",
          "d": "Vor einer bestimmten Zeit passiert sein.",
          "ar": "مضى عليه (وقت) / من زمان",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Ich habe im Chor gesungen, aber das ist schon lange her.",
          "dAr": "حدوث شيء منذ مدة محددة.",
          "exAr": "كنت بغنّي في كورال، لكن ده كان من زمان.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "hinauf",
          "d": "Von unten nach oben, weg vom Sprecher.",
          "ar": "إلى أعلى / صعودًا",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Von der Station geht es steil hinauf auf den Berg.",
          "dAr": "الحركة من أسفل إلى أعلى بعيدًا عن المتكلم.",
          "exAr": "من المحطة الطريق بيطلع للجبل بانحدار شديد.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "das Inland",
          "d": "Das eigene Land, im Gegensatz zum Ausland.",
          "ar": "الداخل (داخل البلد)",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Die Künstler kommen aus dem In- und Ausland.",
          "dAr": "البلد نفسه مقابل البلدان الأجنبية.",
          "exAr": "الفنانون جايين من داخل البلد ومن الخارج.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "die Mauer",
          "d": "Eine Wand aus Steinen, die zum Beispiel einen Garten oder eine Stadt umgibt.",
          "ar": "سور / جدار",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "An der alten Mauer kann man bunte Graffiti sehen.",
          "dAr": "حائط حجري يحيط مثلًا بحديقة أو مدينة.",
          "exAr": "ممكن تشوف غرافيتي ملوّنًا على السور القديم.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "der Meister",
          "d": "Ein Mann, der etwas sehr gut kann; auch ein Handwerker mit einer besonderen Prüfung.",
          "ar": "أستاذ / معلّم (في حرفة)",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Wir sind alle keine Meister, aber wir spielen gern zusammen.",
          "dAr": "رجل يتقن شيئًا جدًا؛ أو حرفي اجتاز امتحانًا تخصصيًا.",
          "exAr": "إحنا كلنا مش محترفين، لكن بنحب نعزف مع بعض.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "die Meisterin",
          "d": "Eine Frau, die etwas sehr gut kann oder eine besondere Prüfung im Handwerk hat.",
          "ar": "أستاذة / معلّمة (في حرفة)",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Meine Oma ist eine Meisterin im Kuchenbacken.",
          "dAr": "امرأة تتقن شيئًا جدًا أو اجتازت امتحانًا تخصصيًا في حرفة.",
          "exAr": "جدتي أستاذة في خبز الكيك.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "das Missverständnis",
          "d": "Eine Situation, in der jemand etwas falsch versteht.",
          "ar": "سوء فهم",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Das war ein Missverständnis, ich meinte eigentlich morgen.",
          "dAr": "موقف يفهم فيه شخص شيئًا بشكل غير صحيح.",
          "exAr": "ده كان سوء فهم، أنا كنت أقصد بكرة.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "die Nachbarschaft",
          "d": "Die Menschen, die in der Nähe wohnen, und die Gegend um die eigene Wohnung.",
          "ar": "الجيرة / الحيّ",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "In unserer Nachbarschaft gibt es eine neue Tradition.",
          "dAr": "الناس الساكنون بالقرب منك والمنطقة المحيطة ببيتك.",
          "exAr": "في منطقتنا فيه تقليد جديد.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "der Neffe",
          "d": "Der Sohn von meinem Bruder oder von meiner Schwester.",
          "ar": "ابن الأخ / ابن الأخت",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Mein Neffe hat mich zum Chor mitgenommen.",
          "dAr": "ابن أخي أو أختي.",
          "exAr": "ابن أخي أو أختي أخدني معاه للكورال.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "nicht ..., sondern ...",
          "d": "Mit dieser Struktur korrigiert man eine verneinte Aussage und nennt das Richtige.",
          "ar": "ليس ...، بل ...",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Das Bild hängt nicht in der Galerie, sondern im Museum.",
          "dAr": "تركيب يصحّح قولًا منفيًا ويذكر الصحيح.",
          "exAr": "اللوحة مش في المعرض، لكنها في المتحف.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "heimlich",
          "d": "So, dass andere es nicht sehen oder nicht wissen.",
          "ar": "سرًّا / خِفية",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Lange habe ich nur heimlich unter der Dusche gesungen.",
          "dAr": "بحيث لا يرى الآخرون الشيء ولا يعرفون عنه.",
          "exAr": "لفترة طويلة كنت بغنّي في السر تحت الدش بس.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "scheinbar",
          "d": "So, dass es nur so aussieht, aber in Wirklichkeit anders ist.",
          "ar": "ظاهريًا / في الظاهر",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Die Putzfrau reinigte eine scheinbar schmutzige Wanne.",
          "dAr": "يبدو هكذا ظاهريًا، لكن الحقيقة مختلفة.",
          "exAr": "عاملة التنظيف نظّفت حوضًا كان يبدو متسخًا.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "Freundschaft schließen",
          "d": "Mit jemandem Freund oder Freundin werden.",
          "ar": "يكوّن صداقة",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Im Chor habe ich schnell Freundschaft mit anderen Sängern geschlossen.",
          "dAr": "تكوين صداقة مع شخص.",
          "exAr": "في الكورال كوّنت صداقات بسرعة مع مغنّين تانيين.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "das Referat",
          "d": "Ein Vortrag über ein bestimmtes Thema in der Schule, im Kurs oder an der Uni.",
          "ar": "عرض شفهي / بحث يُلقى",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Bei meinem Referat hatte ich meine Notizen vergessen.",
          "dAr": "عرض شفهي عن موضوع معين في المدرسة أو الكورس أو الجامعة.",
          "exAr": "وقت عرضي الشفهي كنت ناسي ملاحظاتي.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "das Treppenhaus",
          "d": "Der Teil eines Hauses, in dem die Treppen sind.",
          "ar": "بيت الدرج / بيت السلم",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Im Treppenhaus hört man die Nachbarn singen.",
          "dAr": "الجزء من البيت الذي توجد فيه السلالم.",
          "exAr": "في بيت السلم بنسمع الجيران بيغنّوا.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "die Stufe",
          "d": "Ein einzelner Teil einer Treppe.",
          "ar": "درجة (سلم)",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Vorsicht, die erste Stufe ist sehr hoch!",
          "dAr": "درجة واحدة من السلم.",
          "exAr": "خُد بالك، أول درجة عالية جدًا!",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "die Umleitung",
          "d": "Ein anderer Weg, den man fahren muss, wenn eine Straße gesperrt ist.",
          "ar": "تحويلة (طريق)",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Wegen einer Baustelle gibt es eine Umleitung.",
          "dAr": "طريق بديل يجب سلوكه عند إغلاق شارع.",
          "exAr": "فيه تحويلة بسبب موقع أعمال البناء.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "vergeblich",
          "d": "Ohne Erfolg und ohne Ergebnis.",
          "ar": "بلا جدوى / عبثًا",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Ich habe vergeblich versucht, Karten für die Premiere zu bekommen.",
          "dAr": "من غير نجاح ولا نتيجة.",
          "exAr": "حاولت أحصل على تذاكر العرض الأول من غير فايدة.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "das Virus",
          "d": "Ein sehr kleiner Krankheitserreger, der zum Beispiel eine Grippe auslöst.",
          "ar": "فيروس",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Das Virus hat die ganze Welt verändert.",
          "dAr": "مُسبّب مرض صغير جدًا يسبب مثلًا الإنفلونزا.",
          "exAr": "الفيروس غيّر العالم كله.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "die Qualifikation",
          "d": "Eine Ausbildung, ein Abschluss oder eine Erfahrung, die man für eine Aufgabe braucht.",
          "ar": "مؤهِّل",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Für den Theaterkurs brauchen Sie keine besondere Qualifikation.",
          "dAr": "تدريب أو شهادة أو خبرة تحتاجها لمهمة معينة.",
          "exAr": "مش محتاج مؤهّل خاص لكورس المسرح.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "der Schwerpunkt",
          "d": "Das wichtigste Thema oder der wichtigste Teil von etwas.",
          "ar": "محور / تركيز أساسي",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Das neue Programm hat einen künstlerischen Schwerpunkt.",
          "dAr": "أهم موضوع أو جزء في شيء.",
          "exAr": "البرنامج الجديد تركيزه الأساسي على الفن.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "das Treffen",
          "d": "Eine Situation, in der sich Menschen sehen und Zeit miteinander verbringen.",
          "ar": "لقاء / اجتماع",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Das nächste Treffen des Chors ist am Donnerstag.",
          "dAr": "لقاء يرى فيه الناس بعضهم ويقضون وقتًا معًا.",
          "exAr": "لقاء الكورال القادم يوم الخميس.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "die Ausstellung",
          "d": "Eine Veranstaltung, bei der man Kunstwerke oder andere Dinge für Besucher zeigt.",
          "ar": "معرض",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Die Ausstellung läuft noch bis Ende Dezember.",
          "dAr": "فعالية تُعرض فيها أعمال فنية أو أشياء أخرى للزوار.",
          "exAr": "المعرض مستمر لحد نهاية ديسمبر.",
          "catAr": "كلمات إضافية من الوحدة"
        },
        {
          "w": "der Künstler",
          "d": "Ein Mann, der Kunst macht, zum Beispiel Bilder malt oder Musik komponiert.",
          "ar": "فنان",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Der Künstler ist bei der Eröffnung selbst anwesend.",
          "dAr": "رجل ينتج فنًا، مثل رسم اللوحات أو تأليف الموسيقى.",
          "exAr": "الفنان نفسه حاضر في الافتتاح.",
          "catAr": "كلمات إضافية من الوحدة"
        },
        {
          "w": "die Künstlerin",
          "d": "Eine Frau, die Kunst macht, zum Beispiel Bilder malt oder Musik komponiert.",
          "ar": "فنانة",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Die Künstlerin zeigt ihre neuen Bilder in der Galerie.",
          "dAr": "امرأة تنتج فنًا، مثل رسم اللوحات أو تأليف الموسيقى.",
          "exAr": "الفنانة بتعرض لوحاتها الجديدة في المعرض.",
          "catAr": "كلمات إضافية من الوحدة"
        },
        {
          "w": "das Gemälde",
          "d": "Ein Bild, das jemand mit Farben gemalt hat.",
          "ar": "لوحة (زيتية)",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Das Gemälde hängt im größten Saal des Museums.",
          "dAr": "صورة رسمها شخص بالألوان.",
          "exAr": "اللوحة معلّقة في أكبر قاعة في المتحف.",
          "catAr": "كلمات إضافية من الوحدة"
        },
        {
          "w": "der Vordergrund",
          "d": "Der vordere Teil eines Bildes, den man zuerst sieht.",
          "ar": "مقدّمة الصورة",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Im Vordergrund sieht man ein Paar mit einem roten Regenschirm.",
          "dAr": "الجزء الأمامي من الصورة الذي يظهر أولًا.",
          "exAr": "في مقدمة الصورة بنشوف ثنائيًا مع شمسية حمراء.",
          "catAr": "كلمات إضافية من الوحدة"
        },
        {
          "w": "der Hintergrund",
          "d": "Der hintere Teil eines Bildes, der weiter weg wirkt.",
          "ar": "خلفية الصورة",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Im Hintergrund sieht man die Berge.",
          "dAr": "الجزء الخلفي من الصورة الذي يبدو أبعد.",
          "exAr": "في الخلفية بنشوف الجبال.",
          "catAr": "كلمات إضافية من الوحدة"
        },
        {
          "w": "die Bühne",
          "d": "Der erhöhte Platz im Theater, auf dem die Schauspieler spielen.",
          "ar": "خشبة المسرح",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Nach der Vorstellung kommen alle Schauspieler auf die Bühne.",
          "dAr": "المكان المرتفع في المسرح الذي يؤدي عليه الممثلون.",
          "exAr": "بعد العرض كل الممثلين بيطلعوا على المسرح.",
          "catAr": "كلمات إضافية من الوحدة"
        },
        {
          "w": "das Bühnenbild",
          "d": "Die Dekoration und die Gegenstände auf der Bühne für ein Theaterstück.",
          "ar": "ديكور المسرح",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Das Bühnenbild passt sehr gut zum Inhalt des Stücks.",
          "dAr": "الديكور والأشياء الموجودة على المسرح لخدمة المسرحية.",
          "exAr": "ديكور المسرح مناسب جدًا لمحتوى المسرحية.",
          "catAr": "كلمات إضافية من الوحدة"
        },
        {
          "w": "der Regisseur",
          "d": "Ein Mann, der bestimmt, wie ein Film oder ein Theaterstück gespielt wird.",
          "ar": "مخرج",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Der Regisseur bespricht die Szene mit den Schauspielern.",
          "dAr": "رجل يحدد كيفية أداء فيلم أو مسرحية.",
          "exAr": "المخرج بيناقش المشهد مع الممثلين.",
          "catAr": "كلمات إضافية من الوحدة"
        },
        {
          "w": "die Regisseurin",
          "d": "Eine Frau, die bestimmt, wie ein Film oder ein Theaterstück gespielt wird.",
          "ar": "مخرجة",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Die Regisseurin sucht noch Schauspieler für das neue Stück.",
          "dAr": "امرأة تحدد كيفية أداء فيلم أو مسرحية.",
          "exAr": "المخرجة لسه بتدوّر على ممثلين للمسرحية الجديدة.",
          "catAr": "كلمات إضافية من الوحدة"
        },
        {
          "w": "proben",
          "d": "Etwas üben, bevor man es vor Publikum zeigt.",
          "ar": "يُجري بروفة / يتمرّن",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Wir proben die letzte Szene noch einmal.",
          "dAr": "التدرّب على شيء قبل تقديمه للجمهور.",
          "exAr": "بنتمرّن على آخر مشهد مرة كمان.",
          "catAr": "كلمات إضافية من الوحدة"
        },
        {
          "w": "die Aufführung",
          "d": "Das Zeigen eines Theaterstücks, Konzerts oder Tanzes vor Publikum.",
          "ar": "عرض / أداء",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Nach der Aufführung gab es langen Applaus.",
          "dAr": "تقديم مسرحية أو حفلة موسيقية أو رقصة أمام الجمهور.",
          "exAr": "بعد العرض كان فيه تصفيق طويل.",
          "catAr": "كلمات إضافية من الوحدة"
        },
        {
          "w": "der Applaus",
          "d": "Das Klatschen mit den Händen, wenn dem Publikum etwas gefallen hat.",
          "ar": "تصفيق",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Die Schauspieler bekommen viel Applaus.",
          "dAr": "ضرب الكفّين معًا تعبيرًا عن إعجاب الجمهور.",
          "exAr": "الممثلون بيلاقوا تصفيقًا كتير.",
          "catAr": "كلمات إضافية من الوحدة"
        },
        {
          "w": "sich verbeugen",
          "d": "Den Oberkörper nach vorne bewegen, um sich zu bedanken oder jemanden zu grüßen.",
          "ar": "ينحني (للتحية)",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Am Ende verbeugen sich alle Schauspieler vor dem Publikum.",
          "dAr": "إمالة الجزء العلوي من الجسم للأمام للشكر أو التحية.",
          "exAr": "في النهاية كل الممثلين بينحنوا أمام الجمهور.",
          "catAr": "كلمات إضافية من الوحدة"
        },
        {
          "w": "die Rolle",
          "d": "Die Person, die ein Schauspieler in einem Stück oder Film spielt.",
          "ar": "دور",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Sie spielt die Rolle einer reichen alten Dame.",
          "dAr": "الشخصية التي يؤديها الممثل في مسرحية أو فيلم.",
          "exAr": "هي بتلعب دور سيدة كبيرة غنية.",
          "catAr": "كلمات إضافية من الوحدة"
        },
        {
          "w": "das Publikum",
          "d": "Alle Menschen, die eine Vorstellung oder ein Konzert besuchen.",
          "ar": "الجمهور",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Beim Impro-Theater gibt das Publikum die Themen vor.",
          "dAr": "كل الناس الحاضرين لعرض أو حفلة موسيقية.",
          "exAr": "في المسرح الارتجالي الجمهور هو اللي بيقترح المواضيع.",
          "catAr": "كلمات إضافية من الوحدة"
        },
        {
          "w": "der Auftritt",
          "d": "Das Spielen, Singen oder Sprechen einer Person vor Publikum.",
          "ar": "ظهور على المسرح / فقرة",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Vor ihrem ersten Auftritt war die Sängerin sehr nervös.",
          "dAr": "عزف شخص أو غناؤه أو كلامه أمام الجمهور.",
          "exAr": "قبل أول ظهور لها المغنية كانت متوترة جدًا.",
          "catAr": "كلمات إضافية من الوحدة"
        },
        {
          "w": "der Chor",
          "d": "Eine Gruppe von Menschen, die zusammen singen.",
          "ar": "جوقة / كورال",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Seit einem Jahr singe ich in einem Chor.",
          "dAr": "مجموعة أشخاص يغنّون معًا.",
          "exAr": "بقالي سنة بغنّي في كورال.",
          "catAr": "كلمات إضافية من الوحدة"
        },
        {
          "w": "die Melodie",
          "d": "Die Folge von Tönen, an der man ein Lied erkennt.",
          "ar": "لحن",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Die Melodie kennt jeder, aber den Text nicht.",
          "dAr": "تتابع النغمات الذي تتعرف به على الأغنية.",
          "exAr": "الكل عارف اللحن، لكن مش الكلمات.",
          "catAr": "كلمات إضافية من الوحدة"
        },
        {
          "w": "das Instrument",
          "d": "Ein Gegenstand, mit dem man Musik macht, zum Beispiel eine Gitarre oder ein Klavier.",
          "ar": "آلة موسيقية",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "In unserer Nachbarschaft spielt fast jeder ein Instrument.",
          "dAr": "شيء لصنع الموسيقى، مثل الجيتار أو البيانو.",
          "exAr": "في منطقتنا تقريبًا كل واحد بيعزف آلة موسيقية.",
          "catAr": "كلمات إضافية من الوحدة"
        },
        {
          "w": "das Aquarell",
          "d": "Ein Bild, das man mit Wasserfarben malt.",
          "ar": "لوحة بالألوان المائية",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Im Malkurs lernen Sie die Technik des Aquarells.",
          "dAr": "لوحة مرسومة بالألوان المائية.",
          "exAr": "في كورس الرسم بتتعلّم تقنية الرسم بالألوان المائية.",
          "catAr": "كلمات إضافية من الوحدة"
        },
        {
          "w": "das Graffiti",
          "d": "Ein Bild oder Text, den jemand mit Spray an eine Wand malt.",
          "ar": "جرافيتي / رسم على الجدران",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "An der Brücke ist ein neues Graffiti aufgetaucht.",
          "dAr": "صورة أو نص مرسوم على حائط ببخاخ.",
          "exAr": "ظهر غرافيتي جديد عند الجسر.",
          "catAr": "كلمات إضافية من الوحدة"
        },
        {
          "w": "abstrakt",
          "d": "So, dass ein Bild keine echten Dinge zeigt, sondern nur Formen und Farben.",
          "ar": "تجريدي",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Die Bilder der Affen sind bunt und abstrakt.",
          "dAr": "لوحة لا تصوّر أشياء واقعية، بل أشكالًا وألوانًا فقط.",
          "exAr": "لوحات القرود ملونة وتجريدية.",
          "catAr": "كلمات إضافية من الوحدة"
        },
        {
          "w": "fantasievoll",
          "d": "Mit vielen kreativen und ungewöhnlichen Ideen.",
          "ar": "مليء بالخيال",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Die Kinder haben fantasievolle Kostüme gebastelt.",
          "dAr": "ذو أفكار إبداعية وغير مألوفة كثيرة.",
          "exAr": "الأطفال صنعوا أزياء مبتكرة مليانة خيال.",
          "catAr": "كلمات إضافية من الوحدة"
        },
        {
          "w": "das Missgeschick",
          "d": "Ein kleiner Unfall oder Fehler, der einem ohne Absicht passiert.",
          "ar": "حادث بسيط / سوء حظ",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Der Putzfrau ist ein teures Missgeschick passiert.",
          "dAr": "حادث صغير أو خطأ يحدث من غير قصد.",
          "exAr": "عاملة التنظيف عملت غلطة كلّفت كتير.",
          "catAr": "كلمات إضافية من الوحدة"
        },
        {
          "w": "aus Versehen",
          "d": "Ohne Absicht, also nicht absichtlich.",
          "ar": "عن غير قصد / بالخطأ",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Sie hat das Kunstwerk aus Versehen zerstört.",
          "dAr": "من غير قصد أو تعمّد.",
          "exAr": "هي أتلفت العمل الفني بالغلط.",
          "catAr": "كلمات إضافية من الوحدة"
        },
        {
          "w": "freiwillig",
          "d": "So, dass man etwas macht, weil man es selbst möchte, und nicht, weil man muss.",
          "ar": "طوعًا / بإرادته",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Die Affen haben ganz freiwillig gemalt.",
          "dAr": "فعل شيء برغبتك من غير إجبار.",
          "exAr": "القرود رسمت بمحض إرادتها تمامًا.",
          "catAr": "كلمات إضافية من الوحدة"
        },
        {
          "w": "der Kunstsammler",
          "d": "Ein Mann, der Kunstwerke kauft und sammelt.",
          "ar": "جامع أعمال فنية",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Ein reicher Kunstsammler hat das Bild bei der Auktion gekauft.",
          "dAr": "رجل يشتري الأعمال الفنية ويجمعها.",
          "exAr": "جامع أعمال فنية غني اشترى اللوحة في المزاد.",
          "catAr": "كلمات إضافية من الوحدة"
        },
        {
          "w": "die Werkstatt",
          "d": "Ein Raum, in dem man mit Werkzeug etwas baut oder repariert.",
          "ar": "ورشة",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "In der Werkstatt des Theaters baut man das Bühnenbild.",
          "dAr": "غرفة لصنع أشياء أو إصلاحها باستخدام الأدوات.",
          "exAr": "في ورشة المسرح بيصنعوا الديكور.",
          "catAr": "كلمات إضافية من الوحدة"
        },
        {
          "w": "das Upcycling",
          "d": "Eine Methode, bei der man aus alten oder kaputten Dingen etwas Neues und Schönes macht.",
          "ar": "إعادة تدوير إبداعية",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Beim Upcycling werden aus alten Paletten praktische Möbel.",
          "dAr": "تحويل أشياء قديمة أو تالفة لأشياء جديدة وجميلة أعلى قيمة.",
          "exAr": "بإعادة الاستخدام الإبداعي بتتحوّل المنصات الخشبية القديمة لأثاث عملي.",
          "catAr": "كلمات إضافية من الوحدة"
        }
      ],
      "visual": {
        "src": "assets/chapters/chapter-9.webp",
        "alt": "Kapitel 9 · Kunststücke",
        "caption": "Kunststücke"
      },
      "titleAr": "أعمال فنية",
      "subtitleAr": "Netzwerk neu B1.2 · الوحدة 9"
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
        "note": "Jede Karte enthält eine deutsche Erklärung, einen vollständigen Beispielsatz und die arabische Übersetzung.",
        "noteAr": "كل بطاقة فيها شرح ألماني واضح، مثال كامل، والترجمة العربية.",
        "titleAr": "مفردات مع شرح"
      },
      "vocab": [
        {
          "w": "die Gemeinschaft",
          "d": "Eine Gruppe von Menschen, die zusammenleben oder gemeinsame Ziele haben.",
          "ar": "الجماعة / المجتمع",
          "cat": "Miteinander",
          "ex": "In unserem Dorf ist die Gemeinschaft sehr stark, alle helfen sich gegenseitig.",
          "dAr": "مجموعة أشخاص يعيشون معًا أو لديهم أهداف مشتركة.",
          "exAr": "في قريتنا الروابط بين الناس قوية جدًا، والكل بيساعد بعضه.",
          "catAr": "مع بعض"
        },
        {
          "w": "die Gesellschaft",
          "d": "Alle Menschen, die in einem Land zusammenleben und gemeinsame Regeln haben.",
          "ar": "المجتمع",
          "cat": "Miteinander",
          "ex": "Bildung ist für die ganze Gesellschaft wichtig.",
          "dAr": "كل الناس الذين يعيشون في بلد واحد ولديهم قواعد مشتركة.",
          "exAr": "التعليم مهم للمجتمع كله.",
          "catAr": "مع بعض"
        },
        {
          "w": "das Zusammenleben",
          "d": "Die Art, wie Menschen miteinander leben und miteinander auskommen.",
          "ar": "العيش المشترك / التعايش",
          "cat": "Miteinander",
          "ex": "Für ein gutes Zusammenleben braucht man Respekt und Toleranz.",
          "dAr": "طريقة عيش الناس مع بعض وتفاهمهم.",
          "exAr": "التعايش الجيد محتاج احترام وتسامح.",
          "catAr": "مع بعض"
        },
        {
          "w": "der Wert",
          "d": "Eine Idee oder Eigenschaft, die für Menschen sehr wichtig ist, zum Beispiel Freiheit.",
          "ar": "قيمة",
          "cat": "Miteinander",
          "ex": "Ehrlichkeit ist für mich ein sehr wichtiger Wert.",
          "dAr": "فكرة أو صفة مهمة جدًا للناس، مثل الحرية.",
          "exAr": "الصدق قيمة مهمة جدًا بالنسبة لي.",
          "catAr": "مع بعض"
        },
        {
          "w": "der Respekt",
          "d": "Die Haltung, andere Menschen und ihre Meinung zu achten.",
          "ar": "الاحترام",
          "cat": "Miteinander",
          "ex": "Wir sollten auch Menschen mit anderen Meinungen mit Respekt behandeln.",
          "dAr": "تقدير الآخرين واحترام آرائهم.",
          "exAr": "المفروض نعامل أصحاب الآراء المختلفة باحترام كمان.",
          "catAr": "مع بعض"
        },
        {
          "w": "die Meinungsfreiheit",
          "d": "Das Recht, frei und ohne Angst zu sagen, was man denkt.",
          "ar": "حرية الرأي / حرية التعبير",
          "cat": "Miteinander",
          "ex": "In einer Demokratie ist die Meinungsfreiheit besonders wichtig.",
          "dAr": "حق التعبير عن أفكارك بحرية ومن غير خوف.",
          "exAr": "حرية التعبير مهمة خصوصًا في الديمقراطية.",
          "catAr": "مع بعض"
        },
        {
          "w": "die Gleichberechtigung",
          "d": "Der Zustand, in dem alle Menschen, zum Beispiel Frauen und Männer, die gleichen Rechte haben.",
          "ar": "المساواة في الحقوق",
          "cat": "Miteinander",
          "ex": "Die Gleichberechtigung von Frauen und Männern steht im Grundgesetz.",
          "dAr": "تمتّع الجميع، مثل النساء والرجال، بنفس الحقوق.",
          "exAr": "المساواة في حقوق النساء والرجال منصوص عليها في القانون الأساسي.",
          "catAr": "مع بعض"
        },
        {
          "w": "die Würde",
          "d": "Der Wert, den jeder Mensch hat und den alle respektieren müssen.",
          "ar": "الكرامة",
          "cat": "Miteinander",
          "ex": "Die Würde des Menschen ist unantastbar.",
          "dAr": "القيمة التي يمتلكها كل إنسان ويجب على الجميع احترامها.",
          "exAr": "كرامة الإنسان لا يجوز المساس بها.",
          "catAr": "مع بعض"
        },
        {
          "w": "die Solidarität",
          "d": "Das Gefühl, dass man zusammengehört und sich gegenseitig hilft.",
          "ar": "التضامن",
          "cat": "Miteinander",
          "ex": "Nach dem Hochwasser zeigten viele Menschen Solidarität mit den Opfern.",
          "dAr": "الشعور بالانتماء لبعض ومساعدة بعضنا البعض.",
          "exAr": "بعد الفيضان ناس كتير أظهروا تضامنهم مع الضحايا.",
          "catAr": "مع بعض"
        },
        {
          "w": "die Gerechtigkeit",
          "d": "Der Zustand, in dem alle Menschen fair und gleich behandelt werden.",
          "ar": "العدالة",
          "cat": "Miteinander",
          "ex": "Viele junge Leute demonstrieren für mehr soziale Gerechtigkeit.",
          "dAr": "معاملة الجميع بإنصاف ومساواة.",
          "exAr": "شباب كتير بيتظاهروا من أجل عدالة اجتماعية أكبر.",
          "catAr": "مع بعض"
        },
        {
          "w": "die Ehrlichkeit",
          "d": "Die Eigenschaft, immer die Wahrheit zu sagen.",
          "ar": "الصدق / الأمانة",
          "cat": "Miteinander",
          "ex": "An meinem besten Freund schätze ich vor allem seine Ehrlichkeit.",
          "dAr": "صفة قول الحقيقة دائمًا.",
          "exAr": "أكتر حاجة بقدّرها في صاحبي المقرّب هي صدقه.",
          "catAr": "مع بعض"
        },
        {
          "w": "die Fairness",
          "d": "Ein Verhalten, bei dem man andere gerecht behandelt und keine Tricks benutzt.",
          "ar": "الإنصاف / اللعب النظيف",
          "cat": "Miteinander",
          "ex": "Im Sport ist Fairness genauso wichtig wie der Sieg.",
          "dAr": "معاملة الآخرين بعدل ومن غير حيل.",
          "exAr": "في الرياضة اللعب النظيف مهم زي الفوز بالظبط.",
          "catAr": "مع بعض"
        },
        {
          "w": "die Zivilcourage",
          "d": "Der Mut, anderen Menschen in der Öffentlichkeit zu helfen oder die eigene Meinung zu sagen, auch wenn es gefährlich ist.",
          "ar": "الشجاعة المدنية",
          "cat": "Miteinander",
          "ex": "Sie zeigte Zivilcourage und half dem Mann in der U-Bahn.",
          "dAr": "الشجاعة لمساعدة الآخرين أو قول رأيك علنًا حتى مع وجود خطر.",
          "exAr": "هي أظهرت شجاعة مدنية وساعدت الراجل في المترو.",
          "catAr": "مع بعض"
        },
        {
          "w": "die Sicherheit",
          "d": "Der Zustand, in dem man keine Gefahr fürchten muss.",
          "ar": "الأمان / الأمن",
          "cat": "Miteinander",
          "ex": "Die Polizei sorgt für die Sicherheit in der Stadt.",
          "dAr": "حالة لا تحتاج فيها للخوف من خطر.",
          "exAr": "الشرطة بتوفّر الأمن في المدينة.",
          "catAr": "مع بعض"
        },
        {
          "w": "die Erziehung",
          "d": "Die Art, wie Eltern oder Lehrer Kindern Werte und gutes Verhalten beibringen.",
          "ar": "التربية",
          "cat": "Miteinander",
          "ex": "Eine gute Erziehung beginnt in der Familie.",
          "dAr": "طريقة تعليم الوالدين أو المدرسين الأطفال القيم والسلوك الجيد.",
          "exAr": "التربية الجيدة بتبدأ في الأسرة.",
          "catAr": "مع بعض"
        },
        {
          "w": "das Recht",
          "d": "Etwas, das man tun oder bekommen darf, weil das Gesetz es erlaubt.",
          "ar": "حق",
          "cat": "Miteinander",
          "ex": "Jedes Kind hat das Recht auf Bildung.",
          "dAr": "شيء يُسمح لك بفعله أو الحصول عليه قانونًا.",
          "exAr": "كل طفل له الحق في التعليم.",
          "catAr": "مع بعض"
        },
        {
          "w": "regeln",
          "d": "Etwas mit Regeln oder Gesetzen ordnen und organisieren.",
          "ar": "ينظّم",
          "cat": "Miteinander",
          "ex": "Das Gesetz regelt, wie viele Stunden man pro Tag arbeiten darf.",
          "dAr": "تنظيم شيء باستخدام قواعد أو قوانين.",
          "exAr": "القانون بيحدد عدد ساعات العمل المسموح بها يوميًا.",
          "catAr": "مع بعض"
        },
        {
          "w": "die Minderheit",
          "d": "Eine kleine Gruppe in einer Gesellschaft, die sich von der Mehrheit unterscheidet.",
          "ar": "أقلية",
          "cat": "Miteinander",
          "ex": "Die Partei setzt sich für die Rechte von Minderheiten ein.",
          "dAr": "مجموعة صغيرة في المجتمع تختلف عن الأغلبية.",
          "exAr": "الحزب بيدافع عن حقوق الأقليات.",
          "catAr": "مع بعض"
        },
        {
          "w": "das Vorurteil",
          "d": "Eine meist negative Meinung über Menschen, die man hat, bevor man sie wirklich kennt.",
          "ar": "حكم مسبق / تحيّز",
          "cat": "Miteinander",
          "ex": "Durch persönliche Kontakte kann man Vorurteile abbauen.",
          "dAr": "رأي غالبًا سلبي عن ناس قبل معرفتهم فعلًا.",
          "exAr": "التواصل الشخصي ممكن يقلّل الأحكام المسبقة.",
          "catAr": "مع بعض"
        },
        {
          "w": "die Toleranz",
          "d": "Die Bereitschaft, andere Meinungen und Lebensweisen zu akzeptieren.",
          "ar": "التسامح / تقبّل الآخر",
          "cat": "Miteinander",
          "ex": "Toleranz ist die Basis für ein friedliches Zusammenleben.",
          "dAr": "الاستعداد لتقبّل آراء الآخرين وأساليب حياتهم.",
          "exAr": "التسامح أساس التعايش السلمي.",
          "catAr": "مع بعض"
        },
        {
          "w": "ehrenamtlich",
          "d": "Wenn man ehrenamtlich arbeitet, hilft man freiwillig und bekommt kein Geld dafür.",
          "ar": "تطوعي / بدون أجر",
          "cat": "Engagement",
          "ex": "Meine Mutter arbeitet zweimal pro Woche ehrenamtlich im Altenheim.",
          "dAr": "عمل تطوعي لمساعدة الآخرين من غير مقابل مالي.",
          "exAr": "أمي بتتطوّع مرتين في الأسبوع في دار مسنين.",
          "catAr": "المشاركة والتطوع"
        },
        {
          "w": "die Hilfsbereitschaft",
          "d": "Die Eigenschaft, anderen Menschen gern zu helfen.",
          "ar": "الاستعداد للمساعدة",
          "cat": "Engagement",
          "ex": "Nach dem Unfall war die Hilfsbereitschaft der Nachbarn sehr groß.",
          "dAr": "صفة محبة مساعدة الآخرين.",
          "exAr": "بعد الحادث الجيران أظهروا استعدادًا كبيرًا للمساعدة.",
          "catAr": "المشاركة والتطوع"
        },
        {
          "w": "die Nachhilfe",
          "d": "Zusätzlicher Unterricht für Schüler, die in einem Fach Probleme haben.",
          "ar": "دروس تقوية / دروس خصوصية",
          "cat": "Engagement",
          "ex": "Mein Sohn bekommt zweimal pro Woche Nachhilfe in Mathe.",
          "dAr": "دروس إضافية لتلاميذ يواجهون صعوبة في مادة.",
          "exAr": "ابني بياخد دروس تقوية في الرياضيات مرتين أسبوعيًا.",
          "catAr": "المشاركة والتطوع"
        },
        {
          "w": "bewältigen",
          "d": "Eine schwierige Aufgabe oder Situation erfolgreich schaffen.",
          "ar": "يتغلّب على / ينجز (مهمة صعبة)",
          "cat": "Engagement",
          "ex": "Allein konnte die Familie den Alltag kaum bewältigen.",
          "dAr": "التعامل بنجاح مع مهمة أو موقف صعب.",
          "exAr": "الأسرة بالكاد كانت تقدر تتعامل مع الحياة اليومية لوحدها.",
          "catAr": "المشاركة والتطوع"
        },
        {
          "w": "die Mühe",
          "d": "Die Anstrengung, die man braucht, um etwas Schwieriges zu tun.",
          "ar": "عناء / جهد / صعوبة",
          "cat": "Engagement",
          "ex": "Viele Familien haben Mühe, alle Rechnungen zu bezahlen.",
          "dAr": "المجهود اللازم للقيام بشيء صعب.",
          "exAr": "أسر كتير بتواجه صعوبة في دفع كل الفواتير.",
          "catAr": "المشاركة والتطوع"
        },
        {
          "w": "das Vorhaben",
          "d": "Ein Plan, den man in der Zukunft umsetzen möchte.",
          "ar": "مشروع / خطة",
          "cat": "Engagement",
          "ex": "Über wichtige Vorhaben stimmen die Bürger gemeinsam ab.",
          "dAr": "خطة تريد تنفيذها في المستقبل.",
          "exAr": "المواطنون بيصوّتوا مع بعض على الخطط المهمة.",
          "catAr": "المشاركة والتطوع"
        },
        {
          "w": "der Pate",
          "d": "Ein Mann, der sich freiwillig um ein Kind oder eine Familie kümmert und ihnen hilft.",
          "ar": "الراعي / الكفيل (متطوع)",
          "cat": "Engagement",
          "ex": "Der Pate trifft sich jeden Mittwoch mit dem kleinen Luis.",
          "dAr": "رجل يرعى طفلًا أو أسرة ويساعدهم تطوعًا.",
          "exAr": "المتطوّع الراعي بيقابل لويس الصغير كل أربعاء.",
          "catAr": "المشاركة والتطوع"
        },
        {
          "w": "die Patin",
          "d": "Eine Frau, die sich freiwillig um ein Kind oder eine Familie kümmert und ihnen hilft.",
          "ar": "الراعية / الكفيلة (متطوعة)",
          "cat": "Engagement",
          "ex": "Als Patin hilft Sara einem Mädchen bei den Hausaufgaben.",
          "dAr": "امرأة ترعى طفلًا أو أسرة وتساعدهم تطوعًا.",
          "exAr": "بصفتها راعية متطوّعة، سارة بتساعد بنتًا في الواجب.",
          "catAr": "المشاركة والتطوع"
        },
        {
          "w": "die Patenschaft",
          "d": "Die freiwillige Aufgabe, sich längere Zeit um eine Person oder eine Familie zu kümmern.",
          "ar": "الرعاية / الكفالة",
          "cat": "Engagement",
          "ex": "Die Patenschaft dauert oft mehrere Jahre.",
          "dAr": "التزام تطوعي برعاية شخص أو أسرة لفترة طويلة.",
          "exAr": "الرعاية التطوعية غالبًا بتستمر عدة سنين.",
          "catAr": "المشاركة والتطوع"
        },
        {
          "w": "die Not",
          "d": "Eine schwierige Situation, in der man dringend Hilfe braucht.",
          "ar": "الضيق / الشدّة / الحاجة",
          "cat": "Engagement",
          "ex": "Ein echter Freund hilft dir in der Not.",
          "dAr": "موقف صعب تحتاج فيه مساعدة عاجلة.",
          "exAr": "الصديق الحقيقي بيساعدك وقت الشدة.",
          "catAr": "المشاركة والتطوع"
        },
        {
          "w": "bedürftig",
          "d": "Arm und deshalb auf die Hilfe von anderen angewiesen.",
          "ar": "محتاج",
          "cat": "Engagement",
          "ex": "Die Tafel verteilt Lebensmittel an bedürftige Menschen.",
          "dAr": "فقير ويحتاج لذلك مساعدة الآخرين.",
          "exAr": "بنك الطعام بيوزّع أغذية على المحتاجين.",
          "catAr": "المشاركة والتطوع"
        },
        {
          "w": "die Berufsfeuerwehr",
          "d": "Eine Feuerwehr, bei der die Feuerwehrleute für ihre Arbeit bezahlt werden.",
          "ar": "الإطفاء المحترف (بأجر)",
          "cat": "Engagement",
          "ex": "In großen Städten arbeitet die Berufsfeuerwehr mit der Freiwilligen Feuerwehr zusammen.",
          "dAr": "إطفاء يعمل فيه رجال الإطفاء مقابل أجر.",
          "exAr": "في المدن الكبيرة الإطفاء المحترف بيتعاون مع الإطفاء التطوعي.",
          "catAr": "المشاركة والتطوع"
        },
        {
          "w": "die Erste Hilfe",
          "d": "Die schnelle Hilfe, die man einem verletzten Menschen gibt, bevor der Arzt kommt.",
          "ar": "الإسعافات الأولية",
          "cat": "Engagement",
          "ex": "Jeder Autofahrer sollte einen Kurs in Erster Hilfe machen.",
          "dAr": "مساعدة سريعة للمصاب قبل وصول الطبيب.",
          "exAr": "كل سائق المفروض ياخد كورس إسعافات أولية.",
          "catAr": "المشاركة والتطوع"
        },
        {
          "w": "spenden",
          "d": "Geld oder Sachen kostenlos geben, um anderen zu helfen.",
          "ar": "يتبرّع",
          "cat": "Engagement",
          "ex": "Viele Supermärkte spenden übrige Lebensmittel an die Tafel.",
          "dAr": "إعطاء مال أو أشياء مجانًا لمساعدة الآخرين.",
          "exAr": "سوبرماركتات كتير بتتبرّع بالأكل الزائد لبنك الطعام.",
          "catAr": "المشاركة والتطوع"
        },
        {
          "w": "das Amt",
          "d": "Eine öffentliche Stelle, die Aufgaben für den Staat oder die Stadt erledigt.",
          "ar": "مصلحة حكومية / مكتب رسمي",
          "cat": "Behörden und Arbeitswelt",
          "ex": "Für den neuen Pass musst du aufs Amt gehen.",
          "dAr": "جهة عامة تنفّذ مهامًا للدولة أو المدينة.",
          "exAr": "علشان جواز السفر الجديد لازم تروح للمصلحة الحكومية.",
          "catAr": "الجهات الحكومية وعالم العمل"
        },
        {
          "w": "der Anspruch (auf + A)",
          "d": "Das Recht, etwas zu bekommen.",
          "ar": "حق (في) / استحقاق",
          "cat": "Behörden und Arbeitswelt",
          "ex": "Sie haben Anspruch auf 30 Tage Urlaub.",
          "dAr": "الحق في الحصول على شيء.",
          "exAr": "من حقك ثلاثون يوم إجازة.",
          "catAr": "الجهات الحكومية وعالم العمل"
        },
        {
          "w": "die Vorschrift",
          "d": "Eine offizielle Regel, die man befolgen muss.",
          "ar": "لائحة / قاعدة رسمية",
          "cat": "Behörden und Arbeitswelt",
          "ex": "Nach der Vorschrift muss man im Labor eine Schutzbrille tragen.",
          "dAr": "قاعدة رسمية يجب اتباعها.",
          "exAr": "حسب التعليمات لازم تلبس نظارة واقية في المعمل.",
          "catAr": "الجهات الحكومية وعالم العمل"
        },
        {
          "w": "abmelden",
          "d": "Offiziell mitteilen, dass man nicht mehr an einem Ort wohnt oder nicht mehr teilnimmt.",
          "ar": "يلغي التسجيل / يسجّل الخروج",
          "cat": "Behörden und Arbeitswelt",
          "ex": "Vor dem Umzug ins Ausland muss man sich beim Amt abmelden.",
          "dAr": "الإبلاغ رسميًا بأنك لم تعد تسكن بمكان أو تشارك في نشاط.",
          "exAr": "قبل الانتقال للخارج لازم تلغي تسجيل السكن عند الجهة الحكومية.",
          "catAr": "الجهات الحكومية وعالم العمل"
        },
        {
          "w": "zulassen",
          "d": "Offiziell erlauben, dass jemand etwas machen oder an etwas teilnehmen darf.",
          "ar": "يسمح / يقبل رسميًا",
          "cat": "Behörden und Arbeitswelt",
          "ex": "Nur wer die Prüfung besteht, wird zum Studium zugelassen.",
          "dAr": "السماح رسميًا لشخص بفعل شيء أو المشاركة فيه.",
          "exAr": "فقط اللي ينجح في الامتحان يُقبل للدراسة.",
          "catAr": "الجهات الحكومية وعالم العمل"
        },
        {
          "w": "verantwortlich (für + A)",
          "d": "Wenn man für etwas verantwortlich ist, muss man sich darum kümmern.",
          "ar": "مسؤول (عن)",
          "cat": "Behörden und Arbeitswelt",
          "ex": "Wer ist hier für die Sauberkeit verantwortlich?",
          "dAr": "المسؤولية عن الاهتمام بشيء.",
          "exAr": "مين المسؤول هنا عن النظافة؟",
          "catAr": "الجهات الحكومية وعالم العمل"
        },
        {
          "w": "zuverlässig",
          "d": "So, dass man sich immer auf jemanden oder etwas verlassen kann.",
          "ar": "موثوق / يُعتمد عليه",
          "cat": "Behörden und Arbeitswelt",
          "ex": "Der Bus fährt zuverlässig alle zehn Minuten.",
          "dAr": "يمكن الاعتماد عليه دائمًا.",
          "exAr": "الأتوبيس بييجي بانتظام يمكن الاعتماد عليه كل عشر دقايق.",
          "catAr": "الجهات الحكومية وعالم العمل"
        },
        {
          "w": "eine Entscheidung treffen",
          "d": "Sich nach dem Überlegen für eine Möglichkeit entscheiden.",
          "ar": "يتخذ قرارًا",
          "cat": "Behörden und Arbeitswelt",
          "ex": "Der Stadtrat hat gestern eine wichtige Entscheidung getroffen.",
          "dAr": "اختيار احتمال معين بعد التفكير.",
          "exAr": "مجلس المدينة اتخذ قرارًا مهمًا امبارح.",
          "catAr": "الجهات الحكومية وعالم العمل"
        },
        {
          "w": "das Arbeitsamt",
          "d": "Das Amt, das Menschen bei der Suche nach Arbeit hilft.",
          "ar": "مكتب العمل",
          "cat": "Behörden und Arbeitswelt",
          "ex": "Seit er arbeitslos ist, geht er regelmäßig zum Arbeitsamt.",
          "dAr": "الجهة الحكومية التي تساعد الناس في البحث عن عمل.",
          "exAr": "من وقت ما بقى عاطل، بيروح مكتب العمل بانتظام.",
          "catAr": "الجهات الحكومية وعالم العمل"
        },
        {
          "w": "die Arbeitsstelle",
          "d": "Ein Platz in einer Firma, an dem man angestellt ist und arbeitet.",
          "ar": "وظيفة / مكان عمل",
          "cat": "Behörden und Arbeitswelt",
          "ex": "Sie hat endlich eine neue Arbeitsstelle gefunden.",
          "dAr": "وظيفة تكون مُعيّنًا فيها وتعمل لدى شركة.",
          "exAr": "أخيرًا لقت وظيفة جديدة.",
          "catAr": "الجهات الحكومية وعالم العمل"
        },
        {
          "w": "einnehmen (Geld einnehmen)",
          "d": "Geld bekommen, zum Beispiel durch Arbeit oder durch einen Verkauf.",
          "ar": "يكسب / يحصّل (مالًا)",
          "cat": "Behörden und Arbeitswelt",
          "ex": "Beim Flohmarkt haben wir 200 Euro eingenommen.",
          "dAr": "الحصول على مال، مثلًا من العمل أو البيع.",
          "exAr": "دخل لنا مئتا يورو من سوق المستعمل.",
          "catAr": "الجهات الحكومية وعالم العمل"
        },
        {
          "w": "finanzieren",
          "d": "Das Geld für etwas bezahlen oder zur Verfügung stellen.",
          "ar": "يموّل",
          "cat": "Behörden und Arbeitswelt",
          "ex": "Die Stadt finanziert das Ferienprogramm für Kinder.",
          "dAr": "دفع المال اللازم لشيء أو توفيره.",
          "exAr": "المدينة بتموّل برنامج إجازات الأطفال.",
          "catAr": "الجهات الحكومية وعالم العمل"
        },
        {
          "w": "die Dienstleistung",
          "d": "Eine Arbeit, die man für andere macht, zum Beispiel Haare schneiden oder etwas reparieren.",
          "ar": "خدمة",
          "cat": "Behörden und Arbeitswelt",
          "ex": "Die Bank bietet viele Dienstleistungen auch online an.",
          "dAr": "عمل يُقدّم للآخرين، مثل قص الشعر أو إصلاح شيء.",
          "exAr": "البنك بيقدّم خدمات كتير أونلاين كمان.",
          "catAr": "الجهات الحكومية وعالم العمل"
        },
        {
          "w": "die Demokratie",
          "d": "Eine Staatsform, in der die Bürger frei wählen und mitbestimmen können.",
          "ar": "الديمقراطية",
          "cat": "Politik",
          "ex": "In einer Demokratie entscheiden die Bürger, wer regiert.",
          "dAr": "نظام حكم يتيح للمواطنين الانتخاب بحرية والمشاركة في القرار.",
          "exAr": "في الديمقراطية المواطنون بيختاروا مين يحكم.",
          "catAr": "السياسة"
        },
        {
          "w": "abstimmen (über + A)",
          "d": "Durch eine Wahl gemeinsam über etwas entscheiden.",
          "ar": "يصوّت (على)",
          "cat": "Politik",
          "ex": "Morgen stimmen die Bürger über den neuen Park ab.",
          "dAr": "اتخاذ قرار مشترك بالتصويت.",
          "exAr": "بكرة المواطنون هيصوّتوا على الحديقة الجديدة.",
          "catAr": "السياسة"
        },
        {
          "w": "der Bundestag",
          "d": "Das deutsche Parlament in Berlin.",
          "ar": "البرلمان الألماني (البوندستاغ)",
          "cat": "Politik",
          "ex": "Die Abgeordneten im Bundestag beschließen neue Gesetze.",
          "dAr": "البرلمان الألماني الموجود في برلين.",
          "exAr": "نواب البوندستاغ بيقرّوا قوانين جديدة.",
          "catAr": "السياسة"
        },
        {
          "w": "der/die Abgeordnete",
          "d": "Eine Person, die vom Volk gewählt wurde und im Parlament sitzt.",
          "ar": "نائب / نائبة في البرلمان",
          "cat": "Politik",
          "ex": "Die Abgeordnete spricht heute im Bundestag über das neue Gesetz.",
          "dAr": "شخص ينتخبه الشعب ليشغل مقعدًا في البرلمان.",
          "exAr": "النائبة بتتكلم النهارده في البوندستاغ عن القانون الجديد.",
          "catAr": "السياسة"
        },
        {
          "w": "die Regierung",
          "d": "Die Gruppe von Politikern, die ein Land führt.",
          "ar": "الحكومة",
          "cat": "Politik",
          "ex": "Die Regierung plant mehr Geld für Schulen.",
          "dAr": "مجموعة السياسيين التي تدير البلد.",
          "exAr": "الحكومة بتخطط لزيادة الأموال المخصصة للمدارس.",
          "catAr": "السياسة"
        },
        {
          "w": "der Bundeskanzler",
          "d": "Der Mann, der in Deutschland oder Österreich die Regierung leitet.",
          "ar": "المستشار الاتحادي (رئيس الحكومة)",
          "cat": "Politik",
          "ex": "Der Bundeskanzler hat heute im Fernsehen eine Rede gehalten.",
          "dAr": "الرجل الذي يرأس الحكومة في ألمانيا أو النمسا.",
          "exAr": "المستشار ألقى خطابًا في التلفزيون النهارده.",
          "catAr": "السياسة"
        },
        {
          "w": "die Bundeskanzlerin",
          "d": "Die Frau, die in Deutschland oder Österreich die Regierung leitet.",
          "ar": "المستشارة الاتحادية",
          "cat": "Politik",
          "ex": "Angela Merkel war 16 Jahre lang Bundeskanzlerin.",
          "dAr": "المرأة التي ترأس الحكومة في ألمانيا أو النمسا.",
          "exAr": "أنغيلا ميركل كانت مستشارة لمدة ست عشرة سنة.",
          "catAr": "السياسة"
        },
        {
          "w": "der Minister",
          "d": "Ein Politiker, der in der Regierung für einen bestimmten Bereich verantwortlich ist.",
          "ar": "وزير",
          "cat": "Politik",
          "ex": "Der Minister für Bildung besucht heute unsere Schule.",
          "dAr": "سياسي مسؤول في الحكومة عن مجال معين.",
          "exAr": "وزير التعليم بيزور مدرستنا النهارده.",
          "catAr": "السياسة"
        },
        {
          "w": "die Ministerin",
          "d": "Eine Politikerin, die in der Regierung für einen bestimmten Bereich verantwortlich ist.",
          "ar": "وزيرة",
          "cat": "Politik",
          "ex": "Die neue Ministerin will die Krankenhäuser verbessern.",
          "dAr": "سياسية مسؤولة في الحكومة عن مجال معين.",
          "exAr": "الوزيرة الجديدة عايزة تحسّن المستشفيات.",
          "catAr": "السياسة"
        },
        {
          "w": "der Kandidat",
          "d": "Ein Mann, der sich bei einer Wahl oder um eine Stelle bewirbt.",
          "ar": "مرشّح",
          "cat": "Politik",
          "ex": "Drei Kandidaten wollen Bürgermeister werden.",
          "dAr": "رجل يترشح في انتخابات أو يتقدّم لوظيفة.",
          "exAr": "ثلاثة مرشحين عايزين يبقوا رؤساء البلدية.",
          "catAr": "السياسة"
        },
        {
          "w": "die Kandidatin",
          "d": "Eine Frau, die sich bei einer Wahl oder um eine Stelle bewirbt.",
          "ar": "مرشّحة",
          "cat": "Politik",
          "ex": "Die Kandidatin stellte ihre Ideen auf dem Marktplatz vor.",
          "dAr": "امرأة تترشح في انتخابات أو تتقدّم لوظيفة.",
          "exAr": "المرشحة عرضت أفكارها في ساحة السوق.",
          "catAr": "السياسة"
        },
        {
          "w": "die Bürgerversammlung",
          "d": "Ein Treffen, bei dem die Bürger einer Stadt über wichtige Themen sprechen.",
          "ar": "اجتماع المواطنين",
          "cat": "Politik",
          "ex": "Auf der Bürgerversammlung wurde über den neuen Spielplatz diskutiert.",
          "dAr": "لقاء يناقش فيه مواطنو المدينة مواضيع مهمة.",
          "exAr": "في اجتماع المواطنين اتناقشوا بشأن ملعب الأطفال الجديد.",
          "catAr": "السياسة"
        },
        {
          "w": "die EU (Europäische Union)",
          "d": "Eine Gemeinschaft von europäischen Staaten, die politisch und wirtschaftlich eng zusammenarbeiten.",
          "ar": "الاتحاد الأوروبي",
          "cat": "Politik",
          "ex": "Seit 2020 hat die EU 27 Mitglieder.",
          "dAr": "مجموعة دول أوروبية تتعاون سياسيًا واقتصاديًا بصورة وثيقة.",
          "exAr": "من سنة ٢٠٢٠ الاتحاد الأوروبي فيه ٢٧ عضوًا.",
          "catAr": "السياسة"
        },
        {
          "w": "der Mitgliedsstaat",
          "d": "Ein Land, das Mitglied in einer Organisation wie der EU ist.",
          "ar": "دولة عضو",
          "cat": "Politik",
          "ex": "In vielen Mitgliedsstaaten bezahlt man mit dem Euro.",
          "dAr": "بلد عضو في منظمة مثل الاتحاد الأوروبي.",
          "exAr": "في دول أعضاء كتير الناس بتدفع باليورو.",
          "catAr": "السياسة"
        },
        {
          "w": "die Organisation",
          "d": "Eine Gruppe oder ein Verein mit einem gemeinsamen Ziel.",
          "ar": "منظمة",
          "cat": "Politik",
          "ex": "Diese Organisation hilft Familien in Not.",
          "dAr": "مجموعة أو جمعية لها هدف مشترك.",
          "exAr": "المنظمة دي بتساعد الأسر وقت الشدة.",
          "catAr": "السياسة"
        },
        {
          "w": "die Vertretung",
          "d": "Eine Person oder Gruppe, die für andere spricht und entscheidet.",
          "ar": "التمثيل / الهيئة الممثِّلة",
          "cat": "Politik",
          "ex": "Die Schüler wählen jedes Jahr ihre Vertretung.",
          "dAr": "شخص أو مجموعة تتكلم وتتخذ قرارات نيابة عن آخرين.",
          "exAr": "التلاميذ بينتخبوا ممثليهم كل سنة.",
          "catAr": "السياسة"
        },
        {
          "w": "der Sitz",
          "d": "Der Ort, an dem eine Organisation oder Firma ihr Hauptbüro hat.",
          "ar": "مقرّ",
          "cat": "Politik",
          "ex": "Die politische Vertretung hat ihren Sitz im Rathaus.",
          "dAr": "المكان الذي يوجد فيه المكتب الرئيسي لمنظمة أو شركة.",
          "exAr": "مقر التمثيل السياسي موجود في مبنى البلدية.",
          "catAr": "السياسة"
        },
        {
          "w": "erfüllen",
          "d": "Eine Aufgabe oder Funktion gut ausführen oder einen Wunsch wahr machen.",
          "ar": "يؤدّي / يحقّق",
          "cat": "Politik",
          "ex": "Die Freiwillige Feuerwehr erfüllt im Dorf eine wichtige Funktion.",
          "dAr": "أداء مهمة أو وظيفة جيدًا، أو تحقيق أمنية.",
          "exAr": "الإطفاء التطوعي بيؤدي دورًا مهمًا في القرية.",
          "catAr": "السياسة"
        },
        {
          "w": "schließen (einen Vertrag schließen)",
          "d": "Mit anderen eine offizielle Vereinbarung machen.",
          "ar": "يُبرم (عقدًا / معاهدة)",
          "cat": "Politik",
          "ex": "Die beiden Länder haben einen Vertrag über den Handel geschlossen.",
          "dAr": "عقد اتفاق رسمي مع الآخرين.",
          "exAr": "البلدان أبرما اتفاقًا بشأن التجارة.",
          "catAr": "السياسة"
        },
        {
          "w": "unterzeichnen",
          "d": "Ein offizielles Dokument mit dem eigenen Namen unterschreiben.",
          "ar": "يوقّع (رسميًا)",
          "cat": "Politik",
          "ex": "Im Jahr 1957 unterzeichneten die Politiker in Rom zwei wichtige Verträge.",
          "dAr": "التوقيع باسمك على وثيقة رسمية.",
          "exAr": "في سنة ١٩٥٧ السياسيون وقّعوا اتفاقيتين مهمتين في روما.",
          "catAr": "السياسة"
        },
        {
          "w": "national",
          "d": "So, dass es zu einem bestimmten Land gehört.",
          "ar": "وطني / قومي",
          "cat": "Politik",
          "ex": "Viele Menschen möchten ihre nationalen Traditionen behalten.",
          "dAr": "ينتمي لبلد معين.",
          "exAr": "ناس كتير عايزين يحتفظوا بتقاليدهم الوطنية.",
          "catAr": "السياسة"
        },
        {
          "w": "die Flucht",
          "d": "Das schnelle Verlassen eines Ortes oder Landes, weil man in Gefahr ist.",
          "ar": "الهروب / اللجوء",
          "cat": "Migration und Flucht",
          "ex": "Nach ihrer Flucht aus dem Kriegsgebiet lebt die Familie jetzt in Köln.",
          "dAr": "مغادرة مكان أو بلد بسرعة بسبب خطر.",
          "exAr": "بعد هروبها من منطقة الحرب، الأسرة عايشة دلوقتي في كولونيا.",
          "catAr": "الهجرة واللجوء"
        },
        {
          "w": "der Krieg (Krieg führen)",
          "d": "Ein Kampf mit Waffen zwischen Ländern oder Gruppen.",
          "ar": "حرب",
          "cat": "Migration und Flucht",
          "ex": "Die Länder wollten nie wieder Krieg gegeneinander führen.",
          "dAr": "قتال بالسلاح بين بلاد أو مجموعات.",
          "exAr": "البلاد كانت عايزة ما تحاربش بعض تاني أبدًا.",
          "catAr": "الهجرة واللجوء"
        },
        {
          "w": "die Aufnahme",
          "d": "Das Akzeptieren einer Person als neues Mitglied, zum Beispiel in einem Land oder Verein.",
          "ar": "الاستقبال / القبول",
          "cat": "Migration und Flucht",
          "ex": "Die Aufnahme in den Sportverein war ganz einfach.",
          "dAr": "قبول شخص عضوًا جديدًا، مثلًا في بلد أو جمعية.",
          "exAr": "الانضمام للنادي الرياضي كان سهلًا جدًا.",
          "catAr": "الهجرة واللجوء"
        },
        {
          "w": "die Integration",
          "d": "Der Prozess, in dem neue Menschen ein Teil der Gesellschaft werden.",
          "ar": "الاندماج",
          "cat": "Migration und Flucht",
          "ex": "Sprachkurse sind für die Integration sehr wichtig.",
          "dAr": "العملية التي يصبح فيها القادمون الجدد جزءًا من المجتمع.",
          "exAr": "كورسات اللغة مهمة جدًا للاندماج.",
          "catAr": "الهجرة واللجوء"
        },
        {
          "w": "der Migrant",
          "d": "Ein Mann, der sein Land verlassen hat, um in einem anderen Land zu leben.",
          "ar": "مهاجر",
          "cat": "Migration und Flucht",
          "ex": "Viele Migranten lernen abends in der Volkshochschule Deutsch.",
          "dAr": "رجل ترك بلده ليعيش في بلد آخر.",
          "exAr": "مهاجرون كتير بيتعلّموا ألماني مساءً في مركز تعليم الكبار.",
          "catAr": "الهجرة واللجوء"
        },
        {
          "w": "die Migrantin",
          "d": "Eine Frau, die ihr Land verlassen hat, um in einem anderen Land zu leben.",
          "ar": "مهاجرة",
          "cat": "Migration und Flucht",
          "ex": "Die Migrantin arbeitet heute als Krankenpflegerin in Hamburg.",
          "dAr": "امرأة تركت بلدها لتعيش في بلد آخر.",
          "exAr": "المهاجرة بتشتغل دلوقتي ممرضة في هامبورغ.",
          "catAr": "الهجرة واللجوء"
        },
        {
          "w": "die Apfelsine",
          "d": "Eine runde, orange Frucht mit süßem Saft; ein anderes Wort für Orange.",
          "ar": "برتقالة",
          "cat": "Lebensmittel",
          "ex": "Im Winter esse ich fast jeden Tag eine Apfelsine.",
          "dAr": "فاكهة مستديرة برتقالية اللون وعصيرها حلو؛ مرادف لكلمة Orange.",
          "exAr": "في الشتاء باكل برتقالة تقريبًا كل يوم.",
          "catAr": "المواد الغذائية"
        },
        {
          "w": "die Orange",
          "d": "Eine runde Frucht mit dicker, oranger Schale und viel Saft.",
          "ar": "برتقالة",
          "cat": "Lebensmittel",
          "ex": "Zum Frühstück trinke ich frisch gepressten Orangensaft aus drei Orangen.",
          "dAr": "فاكهة مستديرة ذات قشرة برتقالية سميكة وكثير من العصير.",
          "exAr": "في الفطار بشرب عصيرًا طازجًا معصورًا من ثلاث برتقالات.",
          "catAr": "المواد الغذائية"
        },
        {
          "w": "die Aprikose",
          "d": "Eine kleine, gelb-orange Frucht mit einem großen Kern.",
          "ar": "مشمش",
          "cat": "Lebensmittel",
          "ex": "Aus Aprikosen kann man leckere Marmelade kochen.",
          "dAr": "فاكهة صغيرة صفراء برتقالية فيها نواة كبيرة.",
          "exAr": "ممكن تعمل مربى لذيذة من المشمش.",
          "catAr": "المواد الغذائية"
        },
        {
          "w": "die Pflaume",
          "d": "Eine kleine, blaue oder rote Frucht mit einem Kern.",
          "ar": "برقوق",
          "cat": "Lebensmittel",
          "ex": "Im Garten meiner Oma wachsen süße Pflaumen.",
          "dAr": "فاكهة صغيرة زرقاء أو حمراء فيها نواة.",
          "exAr": "في جنينة جدتي بينمو برقوق حلو.",
          "catAr": "المواد الغذائية"
        },
        {
          "w": "die Zwetschge",
          "d": "Eine dunkelblaue, längliche Pflaume, die man oft für Kuchen benutzt.",
          "ar": "برقوق (نوع أزرق مستطيل)",
          "cat": "Lebensmittel",
          "ex": "Im September backt meine Mutter Kuchen mit Zwetschgen.",
          "dAr": "نوع برقوق أزرق داكن وممدود يُستخدم كثيرًا في الكيك.",
          "exAr": "في سبتمبر أمي بتعمل كيكة بالبرقوق الممدود.",
          "catAr": "المواد الغذائية"
        },
        {
          "w": "die Konfitüre",
          "d": "Eine süße Masse aus gekochten Früchten und Zucker, ähnlich wie Marmelade.",
          "ar": "مربّى",
          "cat": "Lebensmittel",
          "ex": "Ich esse mein Brötchen am liebsten mit Butter und Konfitüre.",
          "dAr": "خليط حلو من فواكه مطبوخة وسكر يشبه المربى.",
          "exAr": "بفضّل آكل خبزتي الصغيرة بالزبدة والمربى.",
          "catAr": "المواد الغذائية"
        },
        {
          "w": "die Semmel",
          "d": "Ein kleines, rundes Brot; so sagt man in Süddeutschland und Österreich für Brötchen.",
          "ar": "خبز صغير مدوّر (عيش فينو)",
          "cat": "Lebensmittel",
          "ex": "Beim Bäcker hole ich jeden Morgen frische Semmeln.",
          "dAr": "خبزة صغيرة مستديرة؛ اسمها في جنوب ألمانيا والنمسا بدل Brötchen.",
          "exAr": "كل صباح بجيب خبزات صغيرة طازجة من المخبز.",
          "catAr": "المواد الغذائية"
        },
        {
          "w": "das Hörnchen",
          "d": "Ein Gebäck in der Form eines Halbmonds.",
          "ar": "كرواسون / هلالية",
          "cat": "Lebensmittel",
          "ex": "Zum Kaffee gibt es heute ein Hörnchen mit Schokolade.",
          "dAr": "معجنات على شكل هلال.",
          "exAr": "النهارده مع القهوة فيه معجنات هلالية بالشوكولاتة.",
          "catAr": "المواد الغذائية"
        },
        {
          "w": "das Croissant",
          "d": "Ein französisches Gebäck aus Blätterteig in der Form eines Halbmonds.",
          "ar": "كرواسون",
          "cat": "Lebensmittel",
          "ex": "Im Café bestelle ich einen Cappuccino und ein Croissant.",
          "dAr": "معجنات فرنسية من عجين مورّق على شكل هلال.",
          "exAr": "في الكافيه بطلب كابتشينو وكرواسون.",
          "catAr": "المواد الغذائية"
        },
        {
          "w": "die Margarine",
          "d": "Ein Fett aus Pflanzen, das man wie Butter benutzt.",
          "ar": "سمن نباتي / مارجرين",
          "cat": "Lebensmittel",
          "ex": "Statt Butter nimmt sie zum Backen Margarine.",
          "dAr": "دهن نباتي يُستخدم مثل الزبدة.",
          "exAr": "هي بتستخدم مارغرين بدل الزبدة في الخَبز.",
          "catAr": "المواد الغذائية"
        },
        {
          "w": "das Milchprodukt",
          "d": "Ein Lebensmittel, das aus Milch gemacht wird, zum Beispiel Käse oder Joghurt.",
          "ar": "منتج ألبان",
          "cat": "Lebensmittel",
          "ex": "Milchprodukte findet man im Supermarkt im Kühlregal.",
          "dAr": "طعام مصنوع من اللبن، مثل الجبنة أو الزبادي.",
          "exAr": "بتلاقي منتجات الألبان في رف التبريد في السوبرماركت.",
          "catAr": "المواد الغذائية"
        },
        {
          "w": "die Vollmilch",
          "d": "Milch mit dem natürlichen Fett von etwa 3,5 Prozent.",
          "ar": "حليب كامل الدسم",
          "cat": "Lebensmittel",
          "ex": "Für den Pudding brauchst du einen halben Liter Vollmilch.",
          "dAr": "لبن فيه نسبة دهن طبيعية حوالي ٣٫٥ بالمئة.",
          "exAr": "للبودينغ محتاج نصف لتر لبن كامل الدسم.",
          "catAr": "المواد الغذائية"
        },
        {
          "w": "der Quark",
          "d": "Ein weiches, weißes Milchprodukt, ähnlich wie frischer Käse.",
          "ar": "جبن طري (كوارك)",
          "cat": "Lebensmittel",
          "ex": "Zum Frühstück esse ich Quark mit Obst und Honig.",
          "dAr": "منتج لبني أبيض وطري يشبه الجبن الطازج.",
          "exAr": "في الفطار باكل كوارك مع فاكهة وعسل.",
          "catAr": "المواد الغذائية"
        },
        {
          "w": "die Schlagsahne",
          "d": "Sahne, die man so lange schlägt, bis sie fest wird.",
          "ar": "كريمة مخفوقة (شانتيه)",
          "cat": "Lebensmittel",
          "ex": "Möchtest du den Apfelkuchen mit Schlagsahne?",
          "dAr": "كريمة تُخفق حتى يصبح قوامها متماسكًا.",
          "exAr": "تحب كيكة التفاح بكريمة مخفوقة؟",
          "catAr": "المواد الغذائية"
        },
        {
          "w": "der Pudding",
          "d": "Eine süße, weiche Nachspeise aus Milch und Zucker.",
          "ar": "بودينغ / مهلبية",
          "cat": "Lebensmittel",
          "ex": "Die Kinder essen am liebsten Pudding mit Vanille.",
          "dAr": "حلوى طرية من اللبن والسكر.",
          "exAr": "الأطفال بيفضّلوا بودينغ بالفانيليا.",
          "catAr": "المواد الغذائية"
        },
        {
          "w": "das Hackfleisch",
          "d": "Fleisch, das in sehr kleine Stücke gemahlen wurde.",
          "ar": "لحم مفروم",
          "cat": "Lebensmittel",
          "ex": "Für die Spaghetti Bolognese kaufe ich 500 Gramm Hackfleisch.",
          "dAr": "لحم مطحون إلى قطع صغيرة جدًا.",
          "exAr": "لسباغيتي بولونيز بشتري خمسمئة غرام لحم مفروم.",
          "catAr": "المواد الغذائية"
        },
        {
          "w": "das Hühnchen",
          "d": "Ein junges Huhn, das man als Fleisch isst.",
          "ar": "دجاج / فرخة",
          "cat": "Lebensmittel",
          "ex": "Heute gibt es Hühnchen mit Reis und Gemüse.",
          "dAr": "دجاجة صغيرة يُؤكل لحمها.",
          "exAr": "النهارده فيه فراخ مع رز وخضار.",
          "catAr": "المواد الغذائية"
        },
        {
          "w": "der/das Ketchup",
          "d": "Eine dicke, rote Soße aus Tomaten, die man gern zu Pommes isst.",
          "ar": "كاتشب",
          "cat": "Lebensmittel",
          "ex": "Möchtest du Ketchup oder Mayonnaise zu den Pommes?",
          "dAr": "صلصة طماطم حمراء سميكة تُؤكل كثيرًا مع البطاطس المقلية.",
          "exAr": "تحب كاتشب ولا مايونيز مع البطاطس؟",
          "catAr": "المواد الغذائية"
        },
        {
          "w": "die Soße",
          "d": "Eine Flüssigkeit, die man zu Fleisch, Nudeln oder Gemüse isst.",
          "ar": "صلصة",
          "cat": "Lebensmittel",
          "ex": "Die Soße zu den Nudeln ist ein bisschen zu scharf.",
          "dAr": "سائل يُقدّم مع اللحم أو المكرونة أو الخضار.",
          "exAr": "صلصة المكرونة حارة زيادة شوية.",
          "catAr": "المواد الغذائية"
        },
        {
          "w": "das Gewürz",
          "d": "Ein Pulver oder getrocknete Pflanzenteile, die dem Essen mehr Geschmack geben.",
          "ar": "تابل / بهار",
          "cat": "Lebensmittel",
          "ex": "Kreuzkümmel ist ein typisches Gewürz in der ägyptischen Küche.",
          "dAr": "مسحوق أو أجزاء نباتية مجففة تزيد نكهة الطعام.",
          "exAr": "الكمون من التوابل المعتادة في المطبخ المصري.",
          "catAr": "المواد الغذائية"
        },
        {
          "w": "würzen",
          "d": "Salz, Pfeffer oder Gewürze ins Essen geben, damit es besser schmeckt.",
          "ar": "يتبّل",
          "cat": "Lebensmittel",
          "ex": "Würz die Suppe bitte noch mit etwas Salz und Pfeffer!",
          "dAr": "إضافة ملح أو فلفل أو توابل لتحسين طعم الطعام.",
          "exAr": "زوّد للشوربة شوية ملح وفلفل لو سمحت!",
          "catAr": "المواد الغذائية"
        },
        {
          "w": "die Lieferung",
          "d": "Die Waren, die zu einem Kunden oder Geschäft gebracht werden.",
          "ar": "شحنة / توريد",
          "cat": "Lebensmittel",
          "ex": "Die Lieferung muss noch in den Keller gebracht werden.",
          "dAr": "البضائع التي تُنقل لعميل أو متجر.",
          "exAr": "لسه لازم ننقل الشحنة للقبو.",
          "catAr": "المواد الغذائية"
        },
        {
          "w": "zunächst",
          "d": "Am Anfang, als Erstes.",
          "ar": "في البداية / أولًا",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Zunächst arbeiteten nur sechs Staaten zusammen.",
          "dAr": "في البداية أو أولًا.",
          "exAr": "في البداية ست دول فقط كانت بتتعاون.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "im Lauf (+ G)",
          "d": "Während einer bestimmten Zeit.",
          "ar": "على مدار / خلال",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Im Lauf der Zeit sind immer mehr Länder der EU beigetreten.",
          "dAr": "خلال فترة معينة.",
          "exAr": "مع مرور الوقت انضمت بلاد أكتر وأكتر للاتحاد الأوروبي.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "übrig",
          "d": "So, dass es noch da ist, weil man es nicht gebraucht hat.",
          "ar": "متبقٍّ / فائض",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Nach der Party war noch viel Essen übrig.",
          "dAr": "ما زال موجودًا لأنك لم تستخدمه.",
          "exAr": "بعد الحفلة كان فيه أكل كتير متبقّي.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "das Ding",
          "d": "Eine Sache; umgangssprachlich auch etwas, das man besonders gern macht.",
          "ar": "شيء / حاجة",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Theater spielen ist voll mein Ding.",
          "dAr": "شيء؛ وبالعامية قد تعني نشاطًا تحبّه جدًا.",
          "exAr": "التمثيل المسرحي فعلًا الحاجة اللي بحبها.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "verlassen",
          "d": "Von einem Ort weggehen oder sich von einer Person trennen.",
          "ar": "يغادر / يترك",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Viele Menschen mussten wegen des Krieges ihre Heimat verlassen.",
          "dAr": "مغادرة مكان أو الانفصال عن شخص.",
          "exAr": "ناس كتير اضطرت تسيب وطنها بسبب الحرب.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "der Vortrag",
          "d": "Eine Rede über ein bestimmtes Thema vor Publikum.",
          "ar": "محاضرة / عرض شفهي",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Morgen halte ich einen Vortrag über die Geschichte der EU.",
          "dAr": "كلمة أو محاضرة أمام جمهور عن موضوع محدد.",
          "exAr": "بكرة هلقي محاضرة عن تاريخ الاتحاد الأوروبي.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "sichern",
          "d": "Dafür sorgen, dass etwas sicher ist oder bleibt.",
          "ar": "يؤمّن / يضمن",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Eine gute Ausbildung sichert die Zukunft.",
          "dAr": "العمل على جعل شيء آمنًا أو الحفاظ عليه آمنًا.",
          "exAr": "التدريب الجيد بيؤمّن المستقبل.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "herausfinden",
          "d": "Durch Suchen, Fragen oder Ausprobieren etwas Neues erfahren.",
          "ar": "يكتشف / يعرف",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Die Kinder wollen herausfinden, wie eine Stadt funktioniert.",
          "dAr": "معرفة شيء جديد بالبحث أو السؤال أو التجربة.",
          "exAr": "الأطفال عايزين يكتشفوا المدينة بتشتغل إزاي.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "körperlich",
          "d": "So, dass es den Körper betrifft.",
          "ar": "جسدي / بدني",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Die Arbeit bei der Feuerwehr ist körperlich sehr anstrengend.",
          "dAr": "متعلق بالجسم.",
          "exAr": "الشغل في الإطفاء متعب جدًا جسديًا.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "blind",
          "d": "So, dass man nicht sehen kann.",
          "ar": "أعمى / كفيف",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Mein Nachbar ist blind, aber er findet sich im Viertel sehr gut zurecht.",
          "dAr": "لا يستطيع الرؤية.",
          "exAr": "جاري كفيف، لكنه بيعرف يتنقل في الحي كويس جدًا.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "der Humor",
          "d": "Die Fähigkeit, über lustige Dinge und auch über sich selbst zu lachen.",
          "ar": "روح الدعابة / خفة الدم",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Kleine Fehler in einer Präsentation sollte man mit Humor nehmen.",
          "dAr": "القدرة على الضحك على الأشياء المضحكة وعلى نفسك أيضًا.",
          "exAr": "المفروض تتقبل الأخطاء الصغيرة في العرض بروح الدعابة.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "die Auswahl (eine Auswahl treffen)",
          "d": "Die Möglichkeit, aus mehreren Dingen das Passende zu nehmen.",
          "ar": "اختيار / تشكيلة",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Nach langem Überlegen hat sie endlich eine Auswahl getroffen.",
          "dAr": "إمكانية اختيار المناسب من عدة أشياء.",
          "exAr": "بعد تفكير طويل أخيرًا اختارت.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "endgültig",
          "d": "So, dass es sich nicht mehr ändert.",
          "ar": "نهائي",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Die Entscheidung ist endgültig, wir ziehen nach Wien.",
          "dAr": "لا يتغيّر بعد ذلك.",
          "exAr": "القرار نهائي: هننتقل لفيينا.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "entsorgen",
          "d": "Müll oder alte Dinge so wegbringen, dass sie keinen Schaden machen.",
          "ar": "يتخلّص من (النفايات)",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Alte Batterien muss man richtig entsorgen.",
          "dAr": "التخلص من القمامة أو الأشياء القديمة بطريقة لا تضر.",
          "exAr": "لازم تتخلّص من البطاريات القديمة بطريقة صحيحة.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "erscheinen",
          "d": "Veröffentlicht werden, zum Beispiel als Zeitung oder Buch.",
          "ar": "يصدر / يظهر",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Die Schülerzeitung erscheint jeden Monat.",
          "dAr": "النشر، مثل صدور صحيفة أو كتاب.",
          "exAr": "جريدة التلاميذ بتصدر كل شهر.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "werden (Passiv)",
          "d": "Ein Hilfsverb, mit dem man zusammen mit dem Partizip II das Passiv bildet.",
          "ar": "فعل مساعد لصيغة المبني للمجهول",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Er wird in Erster Hilfe ausgebildet.",
          "dAr": "فعل مساعد يُستخدم مع التصريف الثالث لتكوين المبني للمجهول.",
          "exAr": "بيتم تدريبه على الإسعافات الأولية.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "die Zone",
          "d": "Ein bestimmter Bereich, in dem eigene Regeln gelten.",
          "ar": "منطقة",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Die Spielstadt ist eine elternfreie Zone.",
          "dAr": "منطقة محددة لها قواعد خاصة.",
          "exAr": "مدينة اللعب منطقة خالية من الأهالي.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "die Freiheit",
          "d": "Der Zustand, in dem man selbst entscheiden und tun kann, was man möchte.",
          "ar": "الحرية",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Für viele Menschen ist Freiheit der wichtigste Wert.",
          "dAr": "حالة تسمح لك بالقرار بنفسك وفعل ما تريد.",
          "exAr": "الحرية أهم قيمة لناس كتير.",
          "catAr": "كلمات إضافية من الوحدة"
        },
        {
          "w": "die Bildung",
          "d": "Das Wissen und Können, das man in der Schule, in der Ausbildung und im Leben lernt.",
          "ar": "التعليم / الثقافة",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Bildung ist der Schlüssel für eine gute Zukunft.",
          "dAr": "المعرفة والمهارات التي تتعلمها في المدرسة والتدريب والحياة.",
          "exAr": "التعليم مفتاح مستقبل كويس.",
          "catAr": "كلمات إضافية من الوحدة"
        },
        {
          "w": "die Rücksicht",
          "d": "Ein Verhalten, bei dem man an die Gefühle und Wünsche von anderen denkt.",
          "ar": "مراعاة الآخرين",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Nimm bitte Rücksicht auf die Nachbarn und mach die Musik leiser!",
          "dAr": "التصرّف مع التفكير في مشاعر الآخرين ورغباتهم.",
          "exAr": "راعي الجيران لو سمحت ووطّي الموسيقى!",
          "catAr": "كلمات إضافية من الوحدة"
        },
        {
          "w": "rücksichtsvoll",
          "d": "So, dass man an andere denkt und sie nicht stört.",
          "ar": "يراعي غيره",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Unser neuer Nachbar ist sehr rücksichtsvoll und leise.",
          "dAr": "يراعي الآخرين ولا يزعجهم.",
          "exAr": "جارنا الجديد بيراعي الآخرين وهادي جدًا.",
          "catAr": "كلمات إضافية من الوحدة"
        },
        {
          "w": "die Behinderung",
          "d": "Eine körperliche oder geistige Einschränkung, die man oft ein Leben lang hat.",
          "ar": "إعاقة",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Menschen mit Behinderung sollen überall mitmachen können.",
          "dAr": "قيد جسدي أو ذهني غالبًا يستمر مدى الحياة.",
          "exAr": "ذوو الإعاقة المفروض يقدروا يشاركوا في كل مكان.",
          "catAr": "كلمات إضافية من الوحدة"
        },
        {
          "w": "gehörlos",
          "d": "So, dass man nicht hören kann.",
          "ar": "أصمّ",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Meine Kollegin ist gehörlos und spricht Gebärdensprache.",
          "dAr": "لا يستطيع السمع.",
          "exAr": "زميلتي صمّاء وبتستخدم لغة الإشارة.",
          "catAr": "كلمات إضافية من الوحدة"
        },
        {
          "w": "die Einbürgerung",
          "d": "Der Vorgang, bei dem man die Staatsangehörigkeit eines neuen Landes bekommt.",
          "ar": "التجنّس",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Für die Einbürgerung braucht man gute Deutschkenntnisse.",
          "dAr": "إجراء الحصول على جنسية بلد جديد.",
          "exAr": "الحصول على الجنسية محتاج معرفة جيدة بالألماني.",
          "catAr": "كلمات إضافية من الوحدة"
        },
        {
          "w": "die Kriminalität",
          "d": "Alle Straftaten, die an einem Ort oder in einem Land passieren.",
          "ar": "الجريمة / الإجرام",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "In unserem Viertel ist die Kriminalität zum Glück sehr niedrig.",
          "dAr": "كل الجرائم التي تقع في مكان أو بلد.",
          "exAr": "لحسن الحظ الجريمة قليلة جدًا في حيّنا.",
          "catAr": "كلمات إضافية من الوحدة"
        },
        {
          "w": "sich engagieren (für + A)",
          "d": "Sich aktiv und oft freiwillig für eine Sache oder für andere Menschen einsetzen.",
          "ar": "ينشط / يلتزم (من أجل)",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Meine Schwester engagiert sich für den Umweltschutz.",
          "dAr": "بذل جهد نشط وغالبًا تطوعي لدعم قضية أو أشخاص.",
          "exAr": "أختي بتشارك بفاعلية في حماية البيئة.",
          "catAr": "كلمات إضافية من الوحدة"
        },
        {
          "w": "sich einsetzen (für + A)",
          "d": "Viel dafür tun, dass eine Person oder Sache Unterstützung bekommt.",
          "ar": "يدافع عن / يسعى من أجل",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Die Kandidatin setzt sich für die Rechte von Migranten ein.",
          "dAr": "بذل جهد كبير لتوفير الدعم لشخص أو قضية.",
          "exAr": "المرشحة بتدافع عن حقوق المهاجرين.",
          "catAr": "كلمات إضافية من الوحدة"
        },
        {
          "w": "freiwillig",
          "d": "So, dass man etwas tut, weil man es will, und nicht, weil man muss.",
          "ar": "طوعًا / اختياري",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Er hilft freiwillig bei der Feuerwehr mit.",
          "dAr": "فعل شيء لأنك تريده ومن غير إجبار.",
          "exAr": "هو بيساعد في الإطفاء تطوعًا.",
          "catAr": "كلمات إضافية من الوحدة"
        },
        {
          "w": "die Feuerwehr",
          "d": "Die Organisation, die Brände löscht und bei Unfällen hilft.",
          "ar": "المطافئ / الدفاع المدني",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Bei dem Brand wurde sofort die Feuerwehr alarmiert.",
          "dAr": "الجهة التي تطفئ الحرائق وتساعد في الحوادث.",
          "exAr": "وقت الحريق تم إبلاغ الإطفاء فورًا.",
          "catAr": "كلمات إضافية من الوحدة"
        },
        {
          "w": "alarmieren",
          "d": "Jemanden schnell informieren, dass sofort Hilfe gebraucht wird.",
          "ar": "يستدعي النجدة / يُنذر",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Die Nachbarin hat sofort die Feuerwehr alarmiert.",
          "dAr": "إبلاغ شخص بسرعة بأن هناك حاجة لمساعدة فورية.",
          "exAr": "الجارة بلّغت الإطفاء فورًا.",
          "catAr": "كلمات إضافية من الوحدة"
        },
        {
          "w": "löschen",
          "d": "Ein Feuer stoppen, zum Beispiel mit Wasser.",
          "ar": "يطفئ",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Der Brand wurde nach einer Stunde gelöscht.",
          "dAr": "إيقاف النار، مثلًا باستخدام الماء.",
          "exAr": "الحريق اتطفى بعد ساعة.",
          "catAr": "كلمات إضافية من الوحدة"
        },
        {
          "w": "die Spende",
          "d": "Geld oder Sachen, die man anderen schenkt, um zu helfen.",
          "ar": "تبرّع",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Der Verein lebt vor allem von Spenden.",
          "dAr": "مال أو أشياء تهديها للآخرين للمساعدة.",
          "exAr": "الجمعية بتعتمد أساسًا على التبرعات.",
          "catAr": "كلمات إضافية من الوحدة"
        },
        {
          "w": "verteilen",
          "d": "Etwas an mehrere Personen geben.",
          "ar": "يوزّع",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Die Helfer verteilen die Lebensmittel an bedürftige Menschen.",
          "dAr": "إعطاء شيء لعدة أشخاص.",
          "exAr": "المساعدون بيوزّعوا الأطعمة على المحتاجين.",
          "catAr": "كلمات إضافية من الوحدة"
        },
        {
          "w": "gründen",
          "d": "Etwas Neues, zum Beispiel einen Verein oder eine Firma, ins Leben rufen.",
          "ar": "يؤسّس",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Die erste deutsche Tafel wurde 1993 in Berlin gegründet.",
          "dAr": "إنشاء شيء جديد مثل جمعية أو شركة.",
          "exAr": "أول بنك طعام ألماني اتأسّس سنة ١٩٩٣ في برلين.",
          "catAr": "كلمات إضافية من الوحدة"
        },
        {
          "w": "das Rathaus",
          "d": "Das Gebäude, in dem der Bürgermeister und die Stadtverwaltung arbeiten.",
          "ar": "مبنى البلدية",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Der Bürgermeister hat sein Büro im Rathaus.",
          "dAr": "المبنى الذي يعمل فيه رئيس البلدية وإدارة المدينة.",
          "exAr": "مكتب رئيس البلدية في مبنى البلدية.",
          "catAr": "كلمات إضافية من الوحدة"
        },
        {
          "w": "der Bürgermeister",
          "d": "Der Chef einer Stadt oder Gemeinde.",
          "ar": "العمدة / رئيس البلدية",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Der Bürgermeister wird von den Bürgern gewählt.",
          "dAr": "رئيس مدينة أو بلدية.",
          "exAr": "المواطنون بينتخبوا رئيس البلدية.",
          "catAr": "كلمات إضافية من الوحدة"
        },
        {
          "w": "die Steuer",
          "d": "Geld, das man an den Staat bezahlen muss.",
          "ar": "ضريبة",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Vom Gehalt werden jeden Monat Steuern abgezogen.",
          "dAr": "مال يجب دفعه للدولة.",
          "exAr": "كل شهر بتتخصم ضرائب من المرتب.",
          "catAr": "كلمات إضافية من الوحدة"
        },
        {
          "w": "das Gehalt",
          "d": "Das Geld, das man jeden Monat für seine Arbeit bekommt.",
          "ar": "راتب / مرتّب",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Am Ende des Monats bekommt sie ihr Gehalt.",
          "dAr": "المال الذي تحصل عليه كل شهر مقابل عملك.",
          "exAr": "في نهاية الشهر بتاخد مرتبها.",
          "catAr": "كلمات إضافية من الوحدة"
        },
        {
          "w": "die Währung",
          "d": "Das Geld, das in einem Land benutzt wird.",
          "ar": "عملة",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Die Währung in Ägypten ist das Ägyptische Pfund.",
          "dAr": "المال المستخدم في بلد معين.",
          "exAr": "العملة في مصر هي الجنيه المصري.",
          "catAr": "كلمات إضافية من الوحدة"
        },
        {
          "w": "der Vertrag",
          "d": "Eine schriftliche Vereinbarung zwischen Personen, Firmen oder Ländern.",
          "ar": "عقد / معاهدة",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Der Vertrag von Maastricht wurde 1992 unterzeichnet.",
          "dAr": "اتفاق مكتوب بين أشخاص أو شركات أو بلاد.",
          "exAr": "معاهدة ماستريخت اتوقّعت سنة ١٩٩٢.",
          "catAr": "كلمات إضافية من الوحدة"
        },
        {
          "w": "die Müllabfuhr",
          "d": "Die Firma oder das Amt, das den Müll abholt.",
          "ar": "جمع القمامة",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Die Müllabfuhr kommt bei uns jeden Dienstag.",
          "dAr": "الشركة أو الجهة الحكومية التي تجمع القمامة.",
          "exAr": "عربية جمع القمامة بتيجي عندنا كل ثلاثاء.",
          "catAr": "كلمات إضافية من الوحدة"
        },
        {
          "w": "das Einwohnermeldeamt",
          "d": "Das Amt, bei dem man sich anmeldet, wenn man in eine Stadt zieht.",
          "ar": "مكتب تسجيل السكان",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Nach dem Umzug musst du dich beim Einwohnermeldeamt anmelden.",
          "dAr": "الجهة التي تُسجّل فيها عنوانك عند الانتقال لمدينة.",
          "exAr": "بعد الانتقال لازم تسجّل في مكتب تسجيل السكان.",
          "catAr": "كلمات إضافية من الوحدة"
        },
        {
          "w": "genehmigen",
          "d": "Etwas offiziell erlauben.",
          "ar": "يوافق رسميًا / يصرّح",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Der Antrag wurde vom Amt schnell genehmigt.",
          "dAr": "السماح بشيء رسميًا.",
          "exAr": "الجهة الحكومية وافقت على الطلب بسرعة.",
          "catAr": "كلمات إضافية من الوحدة"
        },
        {
          "w": "der Dolmetscher",
          "d": "Eine Person, die mündlich von einer Sprache in eine andere übersetzt.",
          "ar": "مترجم فوري",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Beim Arzt hilft ihr ein Dolmetscher.",
          "dAr": "شخص يترجم شفهيًا من لغة لأخرى.",
          "exAr": "مترجم شفهي بيساعدها عند الطبيب.",
          "catAr": "كلمات إضافية من الوحدة"
        },
        {
          "w": "vermitteln",
          "d": "Zwischen zwei Seiten helfen, damit sie in Kontakt kommen oder sich verstehen.",
          "ar": "يتوسّط / يوفّق بين",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Der Verein vermittelt Paten an Familien.",
          "dAr": "التوسط بين جهتين لتسهيل التواصل أو التفاهم.",
          "exAr": "الجمعية بتوصل الأسر برعاة متطوعين.",
          "catAr": "كلمات إضافية من الوحدة"
        },
        {
          "w": "die Präsentation",
          "d": "Ein Vortrag, in dem man ein Thema vor anderen vorstellt.",
          "ar": "عرض تقديمي",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Nach der Präsentation hatte das Publikum viele Fragen.",
          "dAr": "عرض شفهي تقدّم فيه موضوعًا أمام الآخرين.",
          "exAr": "بعد العرض الجمهور كان عنده أسئلة كتير.",
          "catAr": "كلمات إضافية من الوحدة"
        },
        {
          "w": "die Aufmerksamkeit",
          "d": "Das genaue Zuhören und Konzentrieren auf etwas.",
          "ar": "الانتباه",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Vielen Dank für Ihre Aufmerksamkeit!",
          "dAr": "الاستماع بدقة والتركيز على شيء.",
          "exAr": "شكرًا جزيلًا على انتباهكم!",
          "catAr": "كلمات إضافية من الوحدة"
        },
        {
          "w": "machbar",
          "d": "So, dass man es schaffen kann.",
          "ar": "ممكن التنفيذ",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Das Projekt ist teuer, aber machbar.",
          "dAr": "يمكن إنجازه.",
          "exAr": "المشروع غالي، لكنه قابل للتنفيذ.",
          "catAr": "كلمات إضافية من الوحدة"
        },
        {
          "w": "haltbar",
          "d": "So, dass ein Lebensmittel lange gut bleibt und nicht schlecht wird.",
          "ar": "صالح لمدة طويلة",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Diese Milch ist bis Ende des Monats haltbar.",
          "dAr": "يبقى الطعام صالحًا فترة طويلة ولا يفسد.",
          "exAr": "اللبن ده صالح لحد نهاية الشهر.",
          "catAr": "كلمات إضافية من الوحدة"
        },
        {
          "w": "erreichbar",
          "d": "So, dass man dorthin kommen oder jemanden kontaktieren kann.",
          "ar": "يمكن الوصول إليه / متاح",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Ich bin ab 9 Uhr telefonisch erreichbar.",
          "dAr": "يمكن الوصول لمكان أو الاتصال بشخص.",
          "exAr": "تقدر تتصل بيا بالتليفون من الساعة تسعة.",
          "catAr": "كلمات إضافية من الوحدة"
        },
        {
          "w": "kostenlos",
          "d": "So, dass man nichts dafür bezahlen muss.",
          "ar": "مجاني",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Die Hilfe der Schülerpaten ist kostenlos.",
          "dAr": "لا يتطلب دفع مال.",
          "exAr": "مساعدة الرعاة الطلابية مجانية.",
          "catAr": "كلمات إضافية من الوحدة"
        },
        {
          "w": "hilflos",
          "d": "So, dass man sich selbst nicht helfen kann.",
          "ar": "عاجز / بلا حيلة",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Ohne Brille bin ich völlig hilflos.",
          "dAr": "لا يستطيع مساعدة نفسه.",
          "exAr": "من غير نضارة أنا عاجز تمامًا عن التصرّف.",
          "catAr": "كلمات إضافية من الوحدة"
        },
        {
          "w": "arbeitslos",
          "d": "So, dass man keine Arbeit hat.",
          "ar": "عاطل عن العمل",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Seit einem Jahr ist mein Onkel arbeitslos.",
          "dAr": "ليس لديه عمل.",
          "exAr": "عمي عاطل من سنة.",
          "catAr": "كلمات إضافية من الوحدة"
        },
        {
          "w": "der Frieden",
          "d": "Ein Zustand ohne Krieg und Gewalt.",
          "ar": "السلام",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Die EU soll den Frieden in Europa sichern.",
          "dAr": "حالة من غير حرب ولا عنف.",
          "exAr": "الاتحاد الأوروبي المفروض يحافظ على السلام في أوروبا.",
          "catAr": "كلمات إضافية من الوحدة"
        },
        {
          "w": "beitreten",
          "d": "Mitglied in einem Verein, einer Partei oder einer Organisation werden.",
          "ar": "ينضمّ (إلى)",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Kroatien ist der EU im Jahr 2013 beigetreten.",
          "dAr": "أن تصبح عضوًا في جمعية أو حزب أو منظمة.",
          "exAr": "كرواتيا انضمت للاتحاد الأوروبي سنة ٢٠١٣.",
          "catAr": "كلمات إضافية من الوحدة"
        },
        {
          "w": "die Behörde",
          "d": "Eine staatliche Stelle, die öffentliche Aufgaben erledigt, zum Beispiel ein Amt.",
          "ar": "جهة حكومية / مصلحة",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Bei Behördengängen helfen die Paten den Familien.",
          "dAr": "جهة تابعة للدولة تؤدي مهامًا عامة، مثل مصلحة حكومية.",
          "exAr": "الرعاة بيساعدوا الأسر في مراجعة الجهات الحكومية.",
          "catAr": "كلمات إضافية من الوحدة"
        },
        {
          "w": "zuständig (für + A)",
          "d": "So, dass man für eine bestimmte Aufgabe verantwortlich ist und darüber entscheiden darf.",
          "ar": "مختص / مسؤول (عن)",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Für Reisepässe ist das Bürgeramt zuständig.",
          "dAr": "مسؤول عن مهمة معينة وله صلاحية القرار بشأنها.",
          "exAr": "مكتب خدمة المواطنين مسؤول عن جوازات السفر.",
          "catAr": "كلمات إضافية من الوحدة"
        },
        {
          "w": "der Stadtrat",
          "d": "Eine gewählte Gruppe von Personen, die in einer Stadt wichtige Entscheidungen trifft.",
          "ar": "المجلس البلدي",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Der Stadtrat hat beschlossen, einen neuen Park zu bauen.",
          "dAr": "مجموعة منتخبة تتخذ قرارات مهمة في المدينة.",
          "exAr": "مجلس المدينة قرر إنشاء حديقة جديدة.",
          "catAr": "كلمات إضافية من الوحدة"
        },
        {
          "w": "recycelbar",
          "d": "So, dass man ein Material noch einmal verwenden und daraus etwas Neues machen kann.",
          "ar": "قابل لإعادة التدوير",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "Diese Verpackung ist zu 100 Prozent recycelbar.",
          "dAr": "يمكن إعادة استخدام المادة وصنع شيء جديد منها.",
          "exAr": "العبوة دي قابلة لإعادة التدوير بنسبة مئة بالمئة.",
          "catAr": "كلمات إضافية من الوحدة"
        },
        {
          "w": "problemlos",
          "d": "So, dass es keine Schwierigkeiten gibt.",
          "ar": "بدون مشاكل / بسهولة",
          "cat": "Weitere Wörter aus dem Kapitel",
          "ex": "In der EU kann man problemlos in einem anderen Land studieren.",
          "dAr": "من غير صعوبات.",
          "exAr": "في الاتحاد الأوروبي ممكن تدرس في بلد آخر بسهولة.",
          "catAr": "كلمات إضافية من الوحدة"
        }
      ],
      "visual": {
        "src": "assets/chapters/chapter-10.webp",
        "alt": "Kapitel 10 · Miteinander",
        "caption": "Miteinander"
      },
      "titleAr": "مع بعض",
      "subtitleAr": "Netzwerk neu B1.2 · الوحدة 10"
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
        "note": "Jede Karte enthält eine deutsche Erklärung, einen vollständigen Beispielsatz und die arabische Übersetzung.",
        "noteAr": "كل بطاقة فيها شرح ألماني واضح، مثال كامل، والترجمة العربية.",
        "titleAr": "مفردات مع شرح"
      },
      "vocab": [
        {
          "w": "der Fußgänger",
          "d": "Eine Person, die zu Fuß auf der Straße unterwegs ist.",
          "ar": "الماشي / المشاة",
          "cat": "In der Stadt",
          "ex": "Die Ampel ist grün, und die Fußgänger gehen über die Straße.",
          "dAr": "شخص يتحرك مشيًا في الشارع.",
          "exAr": "الإشارة خضراء والمشاة بيعبروا الشارع.",
          "catAr": "في المدينة"
        },
        {
          "w": "der Stadtbummel",
          "d": "Ein gemütlicher Spaziergang durch die Stadt, bei dem man sich Geschäfte und Plätze ansieht.",
          "ar": "تمشية / فسحة في المدينة",
          "cat": "In der Stadt",
          "ex": "Am Samstag machen wir einen Stadtbummel durch die Altstadt.",
          "dAr": "تمشية هادئة في المدينة لمشاهدة المحلات والساحات.",
          "exAr": "يوم السبت هنتمشى في المدينة القديمة.",
          "catAr": "في المدينة"
        },
        {
          "w": "das Schaufenster",
          "d": "Ein großes Fenster eines Geschäfts, in dem man die Waren zeigt.",
          "ar": "فاترينة / واجهة المحل",
          "cat": "In der Stadt",
          "ex": "Am Sonntag sind die Läden zu, aber man kann sich die Schaufenster ansehen.",
          "dAr": "نافذة كبيرة في متجر لعرض البضائع.",
          "exAr": "يوم الأحد المحلات مقفولة، لكن ممكن تتفرّج على واجهات العرض.",
          "catAr": "في المدينة"
        },
        {
          "w": "anschauen",
          "d": "Etwas mit Interesse ansehen.",
          "ar": "يتفرج على / يشاهد",
          "cat": "In der Stadt",
          "ex": "Nach dem Mittagessen schauen wir uns das alte Rathaus an.",
          "dAr": "النظر إلى شيء باهتمام.",
          "exAr": "بعد الغدا هنتفرّج على مبنى البلدية القديم.",
          "catAr": "في المدينة"
        },
        {
          "w": "das Bürogebäude",
          "d": "Ein großes Haus, in dem viele Firmen oder Ämter ihre Büros haben.",
          "ar": "مبنى مكاتب",
          "cat": "In der Stadt",
          "ex": "Im neuen Bürogebäude am Bahnhof arbeiten über tausend Menschen.",
          "dAr": "مبنى كبير توجد فيه مكاتب شركات أو جهات حكومية كثيرة.",
          "exAr": "أكتر من ألف شخص بيشتغلوا في مبنى المكاتب الجديد عند المحطة.",
          "catAr": "في المدينة"
        },
        {
          "w": "das Reinigungsfahrzeug",
          "d": "Ein Fahrzeug, das Straßen und Plätze sauber macht.",
          "ar": "عربية تنظيف الشوارع",
          "cat": "In der Stadt",
          "ex": "Jeden Morgen um fünf fährt ein Reinigungsfahrzeug durch unsere Straße.",
          "dAr": "مركبة لتنظيف الشوارع والساحات.",
          "exAr": "كل صباح الساعة خمسة عربية تنظيف بتمر في شارعنا.",
          "catAr": "في المدينة"
        },
        {
          "w": "abbiegen",
          "d": "Die Richtung ändern und nach links oder rechts in eine andere Straße gehen oder fahren.",
          "ar": "ينعطف / يلف (يمين أو شمال)",
          "cat": "In der Stadt",
          "ex": "An der nächsten Ampel müssen Sie links abbiegen.",
          "dAr": "تغيير الاتجاه بالدخول يسارًا أو يمينًا إلى شارع آخر.",
          "exAr": "عند الإشارة الجاية لازم تلفّ شمال.",
          "catAr": "في المدينة"
        },
        {
          "w": "das Tempo",
          "d": "Die Geschwindigkeit, mit der sich etwas bewegt oder passiert.",
          "ar": "السرعة / الإيقاع",
          "cat": "In der Stadt",
          "ex": "In der Großstadt ist das Tempo oft sehr hoch.",
          "dAr": "السرعة التي يتحرك أو يحدث بها شيء.",
          "exAr": "إيقاع الحياة في المدينة الكبيرة غالبًا سريع جدًا.",
          "catAr": "في المدينة"
        },
        {
          "w": "der Schmutz",
          "d": "Etwas, das Dinge oder Orte unsauber macht, zum Beispiel Erde oder Staub.",
          "ar": "الوساخة / القذارة",
          "cat": "In der Stadt",
          "ex": "Nach dem Fest lag viel Schmutz auf dem Marktplatz.",
          "dAr": "شيء يجعل الأماكن أو الأشياء غير نظيفة، مثل التراب أو الغبار.",
          "exAr": "بعد الاحتفال كان فيه أوساخ كتير في ساحة السوق.",
          "catAr": "في المدينة"
        },
        {
          "w": "der Dreck",
          "d": "Ein umgangssprachliches Wort für Schmutz.",
          "ar": "الوساخة / الزبالة (عامية)",
          "cat": "In der Stadt",
          "ex": "Wer macht eigentlich den Dreck auf der Straße weg?",
          "dAr": "كلمة عامية بمعنى الأوساخ.",
          "exAr": "مين بينضّف أصلًا القذارة اللي في الشارع؟",
          "catAr": "في المدينة"
        },
        {
          "w": "der Stadtmensch",
          "d": "Eine Person, die gern in der Stadt lebt und das Stadtleben braucht.",
          "ar": "ابن مدينة / بيحب عيشة المدينة",
          "cat": "In der Stadt",
          "ex": "Ich bin ein echter Stadtmensch und brauche Cafés und Kinos um mich herum.",
          "dAr": "شخص يحب العيش في المدينة ويحتاج حياة المدينة.",
          "exAr": "أنا شخص مدني فعلًا ومحتاج كافيهات وسينمات حواليا.",
          "catAr": "في المدينة"
        },
        {
          "w": "der Landmensch",
          "d": "Eine Person, die lieber auf dem Land als in der Stadt lebt.",
          "ar": "ابن ريف / بيحب عيشة الريف",
          "cat": "In der Stadt",
          "ex": "Meine Schwester ist ein Landmensch und möchte nie in einer Großstadt wohnen.",
          "dAr": "شخص يفضّل العيش في الريف على المدينة.",
          "exAr": "أختي بتحب الريف ومش عايزة تسكن أبدًا في مدينة كبيرة.",
          "catAr": "في المدينة"
        },
        {
          "w": "der/die Obdachlose",
          "d": "Eine Person, die keine Wohnung hat und oft auf der Straße lebt.",
          "ar": "مشرد / شخص بلا مأوى",
          "cat": "In der Stadt",
          "ex": "Im Winter können Obdachlose in einer Notunterkunft übernachten.",
          "dAr": "شخص ليس له بيت وغالبًا يعيش في الشارع.",
          "exAr": "في الشتاء المشردون ممكن يباتوا في مأوى طوارئ.",
          "catAr": "في المدينة"
        },
        {
          "w": "das Freizeitangebot",
          "d": "Alle Möglichkeiten, die es an einem Ort für die Freizeit gibt.",
          "ar": "أنشطة وقت الفراغ المتاحة",
          "cat": "In der Stadt",
          "ex": "Das Freizeitangebot für Jugendliche ist in unserer Stadt leider klein.",
          "dAr": "كل الأنشطة المتاحة لقضاء وقت الفراغ في مكان.",
          "exAr": "للأسف أنشطة الشباب الترفيهية في مدينتنا قليلة.",
          "catAr": "في المدينة"
        },
        {
          "w": "der Rand",
          "d": "Der äußere Teil eines Ortes oder einer Fläche.",
          "ar": "الطرف / الأطراف",
          "cat": "In der Stadt",
          "ex": "Wir wohnen am Rand der Stadt, direkt neben einem Wald.",
          "dAr": "الجزء الخارجي من مكان أو مساحة.",
          "exAr": "إحنا ساكنين على طرف المدينة، جنب غابة مباشرة.",
          "catAr": "في المدينة"
        },
        {
          "w": "städtisch",
          "d": "So, dass es zur Stadt gehört oder von der Stadt organisiert wird.",
          "ar": "تابع للمدينة / بلدي",
          "cat": "In der Stadt",
          "ex": "Mein Onkel arbeitet im städtischen Bauhof.",
          "dAr": "تابع للمدينة أو منظّم بواسطة إدارتها.",
          "exAr": "عمي بيشتغل في مركز صيانة البلدية.",
          "catAr": "في المدينة"
        },
        {
          "w": "das Garagentor",
          "d": "Die große Tür einer Garage.",
          "ar": "باب الجراج",
          "cat": "In der Stadt",
          "ex": "Das Garagentor öffnet sich automatisch, wenn das Auto kommt.",
          "dAr": "الباب الكبير للجراج.",
          "exAr": "باب الجراج بيفتح تلقائيًا لما العربية تيجي.",
          "catAr": "في المدينة"
        },
        {
          "w": "herunterfahren",
          "d": "Sich nach unten bewegen oder nach unten fahren.",
          "ar": "ينزل لتحت (باب / عربية)",
          "cat": "In der Stadt",
          "ex": "Das automatische Tor fährt nach zwei Minuten wieder herunter.",
          "dAr": "الحركة أو السير إلى أسفل.",
          "exAr": "البوابة التلقائية بتنزل تاني بعد دقيقتين.",
          "catAr": "في المدينة"
        },
        {
          "w": "der Dienst",
          "d": "Die Zeit, in der man bei der Arbeit ist und seine Aufgaben erfüllt.",
          "ar": "الخدمة / وقت الشغل",
          "cat": "Im Krankenhaus",
          "ex": "Der Pfleger ist seit Mitternacht im Dienst.",
          "dAr": "وقت العمل الذي تؤدي فيه مهامك.",
          "exAr": "الممرّض في الخدمة من منتصف الليل.",
          "catAr": "في المستشفى"
        },
        {
          "w": "der Nachtdienst",
          "d": "Arbeit, die man in der Nacht macht, zum Beispiel im Krankenhaus.",
          "ar": "نوبتجية ليلية",
          "cat": "Im Krankenhaus",
          "ex": "Diese Woche hat meine Mutter Nachtdienst im Krankenhaus.",
          "dAr": "عمل يُؤدى ليلًا، مثلًا في المستشفى.",
          "exAr": "أمي عندها مناوبة ليلية في المستشفى الأسبوع ده.",
          "catAr": "في المستشفى"
        },
        {
          "w": "die Schicht",
          "d": "Ein fester Teil des Arbeitstages, in dem eine Gruppe von Personen arbeitet.",
          "ar": "الوردية / الشيفت",
          "cat": "Im Krankenhaus",
          "ex": "Um sieben Uhr ist seine Schicht zu Ende.",
          "dAr": "جزء ثابت من يوم العمل تعمل فيه مجموعة أشخاص.",
          "exAr": "مناوبته بتنتهي الساعة سبعة.",
          "catAr": "في المستشفى"
        },
        {
          "w": "die Frühschicht",
          "d": "Die Schicht, die sehr früh am Morgen beginnt.",
          "ar": "الوردية الصباحية",
          "cat": "Im Krankenhaus",
          "ex": "Die Kollegen von der Frühschicht kommen um sechs Uhr.",
          "dAr": "مناوبة تبدأ مبكرًا جدًا في الصباح.",
          "exAr": "زملاء المناوبة الصباحية بييجوا الساعة ستة.",
          "catAr": "في المستشفى"
        },
        {
          "w": "die Übergabe",
          "d": "Der Moment, in dem man Informationen oder Aufgaben an eine andere Person weitergibt.",
          "ar": "التسليم (تسليم الوردية)",
          "cat": "Im Krankenhaus",
          "ex": "Bei der Übergabe erzählt der Pfleger, wie es den Patienten geht.",
          "dAr": "وقت نقل معلومات أو مهام لشخص آخر.",
          "exAr": "وقت تسليم المناوبة الممرّض بيشرح حالة المرضى.",
          "catAr": "في المستشفى"
        },
        {
          "w": "unruhig",
          "d": "Nicht ruhig, mit vielen Problemen oder viel Bewegung.",
          "ar": "مش هادي / قلق",
          "cat": "Im Krankenhaus",
          "ex": "Die Nacht war unruhig, weil viele Patienten Hilfe brauchten.",
          "dAr": "غير هادئ وبه مشاكل كثيرة أو حركة كثيرة.",
          "exAr": "الليلة كانت مضطربة لأن مرضى كتير كانوا محتاجين مساعدة.",
          "catAr": "في المستشفى"
        },
        {
          "w": "schwer (ein schwerer Unfall)",
          "d": "Sehr schlimm und ernst, mit großen Folgen.",
          "ar": "خطير / شديد",
          "cat": "Im Krankenhaus",
          "ex": "In der Nacht gab es in der Innenstadt einen schweren Unfall.",
          "dAr": "خطير جدًا وجاد وله عواقب كبيرة.",
          "exAr": "بالليل حصل حادث خطير في وسط المدينة.",
          "catAr": "في المستشفى"
        },
        {
          "w": "einliefern",
          "d": "Einen kranken oder verletzten Menschen ins Krankenhaus bringen.",
          "ar": "ينقل (حد) للمستشفى / يدخّله المستشفى",
          "cat": "Im Krankenhaus",
          "ex": "Nach dem Unfall wurden drei Verletzte ins Krankenhaus eingeliefert.",
          "dAr": "نقل مريض أو مصاب إلى المستشفى.",
          "exAr": "بعد الحادث نُقل ثلاثة مصابين للمستشفى.",
          "catAr": "في المستشفى"
        },
        {
          "w": "der/die Verletzte",
          "d": "Eine Person, die zum Beispiel bei einem Unfall verletzt wurde.",
          "ar": "مصاب / جريح",
          "cat": "Im Krankenhaus",
          "ex": "Der Notarzt kümmerte sich sofort um die Verletzten.",
          "dAr": "شخص تعرّض لإصابة مثلًا في حادث.",
          "exAr": "طبيب الطوارئ اهتم بالمصابين فورًا.",
          "catAr": "في المستشفى"
        },
        {
          "w": "die Backstube",
          "d": "Der Raum in einer Bäckerei, in dem Brot und Kuchen gebacken werden.",
          "ar": "مكان الخبز في الفرن / المخبز",
          "cat": "In der Bäckerei",
          "ex": "In der Backstube ist es warm und es riecht nach frischem Brot.",
          "dAr": "غرفة بالمخبز يُخبز فيها العيش والكيك.",
          "exAr": "غرفة الخَبز دافئة وفيها ريحة عيش طازج.",
          "catAr": "في المخبز"
        },
        {
          "w": "der Korb",
          "d": "Ein Behälter mit Griff, in dem man Dinge trägt, zum Beispiel Brot.",
          "ar": "سلة / سَبَت",
          "cat": "In der Bäckerei",
          "ex": "Die Fahrerin trägt einen Korb mit frischem Brot zum Auto.",
          "dAr": "وعاء بمقبض لحمل أشياء، مثل العيش.",
          "exAr": "السائقة بتحمل سلة عيش طازج للعربية.",
          "catAr": "في المخبز"
        },
        {
          "w": "laden",
          "d": "Etwas in ein Fahrzeug bringen, um es zu transportieren.",
          "ar": "يحمّل (حاجة في عربية)",
          "cat": "In der Bäckerei",
          "ex": "Der Fahrer lädt die Kisten mit Brötchen ins Auto.",
          "dAr": "وضع شيء داخل مركبة لنقله.",
          "exAr": "السائق بيحمّل صناديق الخبز الصغير في العربية.",
          "catAr": "في المخبز"
        },
        {
          "w": "konzentriert",
          "d": "Mit voller Aufmerksamkeit bei einer Sache.",
          "ar": "مركّز",
          "cat": "In der Bäckerei",
          "ex": "In der Backstube arbeiten alle schnell und konzentriert.",
          "dAr": "يوجّه كامل انتباهه إلى شيء.",
          "exAr": "في غرفة الخَبز الكل بيشتغل بسرعة وتركيز.",
          "catAr": "في المخبز"
        },
        {
          "w": "das Ranking",
          "d": "Eine Liste, die zeigt, wer oder was auf welchem Platz steht.",
          "ar": "تصنيف / ترتيب",
          "cat": "Städte-Ranking",
          "ex": "Wien liegt im Ranking der lebenswertesten Städte oft ganz vorne.",
          "dAr": "قائمة توضّح ترتيب الأشخاص أو الأشياء.",
          "exAr": "فيينا غالبًا في مقدمة ترتيب المدن الأفضل للعيش.",
          "catAr": "تصنيف المدن"
        },
        {
          "w": "die Fachleute",
          "d": "Personen, die auf einem Gebiet viel Wissen und Erfahrung haben.",
          "ar": "خبراء / متخصصين",
          "cat": "Städte-Ranking",
          "ex": "Fachleute haben die Lebensqualität von vierzig Städten untersucht.",
          "dAr": "أشخاص لديهم معرفة وخبرة كبيرة في مجال.",
          "exAr": "خبراء درسوا جودة الحياة في أربعين مدينة.",
          "catAr": "تصنيف المدن"
        },
        {
          "w": "im Vordergrund stehen",
          "d": "Am wichtigsten sein und die größte Rolle spielen.",
          "ar": "يكون في المقدمة / هو الأهم",
          "cat": "Städte-Ranking",
          "ex": "Bei der Studie stand die Work-Life-Balance im Vordergrund.",
          "dAr": "يكون الأهم وله الدور الأكبر.",
          "exAr": "التوازن بين العمل والحياة الخاصة كان محور الدراسة.",
          "catAr": "تصنيف المدن"
        },
        {
          "w": "der Mittelpunkt",
          "d": "Das Zentrum von etwas oder das Wichtigste, um das sich alles dreht.",
          "ar": "المركز / محور الاهتمام",
          "cat": "Städte-Ranking",
          "ex": "Im neuen Viertel stehen Kunst und Kultur im Mittelpunkt.",
          "dAr": "مركز الشيء أو أهم ما يدور حوله.",
          "exAr": "الفن والثقافة في قلب اهتمام الحي الجديد.",
          "catAr": "تصنيف المدن"
        },
        {
          "w": "abhängen (von + D)",
          "d": "Durch eine andere Sache bestimmt werden.",
          "ar": "يعتمد على / يتوقف على",
          "cat": "Städte-Ranking",
          "ex": "Wie gut man in einer Stadt lebt, hängt von vielen Faktoren ab.",
          "dAr": "أن يتحدد شيء بناءً على شيء آخر.",
          "exAr": "جودة العيش في المدينة بتعتمد على عوامل كتير.",
          "catAr": "تصنيف المدن"
        },
        {
          "w": "berücksichtigen",
          "d": "An etwas denken und es bei einer Entscheidung beachten.",
          "ar": "يراعي / ياخد في الاعتبار",
          "cat": "Städte-Ranking",
          "ex": "Bei der Studie wurde auch berücksichtigt, wie viel der Staat für Bildung ausgibt.",
          "dAr": "أخذ شيء في الاعتبار عند اتخاذ قرار.",
          "exAr": "الدراسة راعت كمان مقدار إنفاق الدولة على التعليم.",
          "catAr": "تصنيف المدن"
        },
        {
          "w": "werten",
          "d": "Etwas beurteilen und ihm Punkte oder einen Wert geben.",
          "ar": "يقيّم / يحتسب",
          "cat": "Städte-Ranking",
          "ex": "Das Wetter wird im Ranking nicht gewertet.",
          "dAr": "تقييم شيء وإعطاؤه نقاطًا أو قيمة.",
          "exAr": "الطقس مش محسوب في الترتيب.",
          "catAr": "تصنيف المدن"
        },
        {
          "w": "betreffen",
          "d": "Mit einer Person oder Sache direkt zu tun haben.",
          "ar": "يخص / يتعلق بـ",
          "cat": "Städte-Ranking",
          "ex": "Diese Punkte betreffen nur die jeweilige Stadt.",
          "dAr": "يتعلق مباشرة بشخص أو شيء.",
          "exAr": "النقاط دي تخص المدينة المعنية فقط.",
          "catAr": "تصنيف المدن"
        },
        {
          "w": "die Work-Life-Balance",
          "d": "Ein gutes Gleichgewicht zwischen Arbeit und Privatleben.",
          "ar": "التوازن بين الشغل والحياة الخاصة",
          "cat": "Lebensqualität einer Stadt",
          "ex": "Für eine bessere Work-Life-Balance arbeite ich nur noch vier Tage pro Woche.",
          "dAr": "توازن جيد بين العمل والحياة الخاصة.",
          "exAr": "علشان توازن أفضل بين العمل وحياتي الخاصة بقيت أشتغل أربعة أيام بس أسبوعيًا.",
          "catAr": "جودة الحياة في المدينة"
        },
        {
          "w": "gesellschaftlich",
          "d": "So, dass es mit der Gesellschaft zu tun hat.",
          "ar": "اجتماعي / مجتمعي",
          "cat": "Lebensqualität einer Stadt",
          "ex": "Welche gesellschaftlichen Werte sind in Ihrem Land wichtig?",
          "dAr": "متعلق بالمجتمع.",
          "exAr": "إيه القيم الاجتماعية المهمة في بلدك؟",
          "catAr": "جودة الحياة في المدينة"
        },
        {
          "w": "die Gender-Gerechtigkeit",
          "d": "Gleiche Rechte und Chancen für alle Geschlechter.",
          "ar": "العدالة بين الجنسين",
          "cat": "Lebensqualität einer Stadt",
          "ex": "Zur Gender-Gerechtigkeit gehört der gleiche Lohn für Frauen und Männer.",
          "dAr": "مساواة كل الأنواع الاجتماعية في الحقوق والفرص.",
          "exAr": "المساواة الجندرية بتشمل نفس الأجر للنساء والرجال.",
          "catAr": "جودة الحياة في المدينة"
        },
        {
          "w": "die Diversität",
          "d": "Die Vielfalt von Menschen, zum Beispiel bei Herkunft, Alter oder Religion.",
          "ar": "التنوع",
          "cat": "Lebensqualität einer Stadt",
          "ex": "Unsere Firma legt großen Wert auf Diversität.",
          "dAr": "تنوّع الناس مثلًا في الأصل أو السن أو الدين.",
          "exAr": "شركتنا بتهتم بالتنوّع جدًا.",
          "catAr": "جودة الحياة في المدينة"
        },
        {
          "w": "das Gesundheitssystem",
          "d": "Alle Einrichtungen und Regeln für die medizinische Versorgung in einem Land.",
          "ar": "النظام الصحي",
          "cat": "Lebensqualität einer Stadt",
          "ex": "In Deutschland haben fast alle Menschen Zugang zum Gesundheitssystem.",
          "dAr": "كل المؤسسات والقواعد التي تنظّم الرعاية الطبية في بلد.",
          "exAr": "في ألمانيا تقريبًا الجميع متاح لهم النظام الصحي.",
          "catAr": "جودة الحياة في المدينة"
        },
        {
          "w": "die Kinderbetreuung",
          "d": "Die Betreuung von Kindern, während die Eltern arbeiten.",
          "ar": "رعاية الأطفال",
          "cat": "Lebensqualität einer Stadt",
          "ex": "Ohne gute Kinderbetreuung können viele Eltern nicht arbeiten.",
          "dAr": "رعاية الأطفال أثناء عمل الوالدين.",
          "exAr": "من غير رعاية أطفال جيدة، أهالي كتير مش بيقدروا يشتغلوا.",
          "catAr": "جودة الحياة في المدينة"
        },
        {
          "w": "die Elternzeit",
          "d": "Eine Zeit, in der Mutter oder Vater nach der Geburt zu Hause beim Kind bleiben können.",
          "ar": "إجازة رعاية الطفل (للأب أو الأم)",
          "cat": "Lebensqualität einer Stadt",
          "ex": "Mein Kollege nimmt nach der Geburt seiner Tochter sechs Monate Elternzeit.",
          "dAr": "فترة يمكن فيها للأم أو الأب البقاء مع الطفل في البيت بعد الولادة.",
          "exAr": "زميلي هياخد ستة شهور إجازة والدية بعد ولادة بنته.",
          "catAr": "جودة الحياة في المدينة"
        },
        {
          "w": "die Intensität",
          "d": "Die Stärke, mit der etwas passiert.",
          "ar": "الشدة / الكثافة",
          "cat": "Lebensqualität einer Stadt",
          "ex": "Die Intensität der Arbeit ist in manchen Städten sehr hoch.",
          "dAr": "درجة القوة التي يحدث بها شيء.",
          "exAr": "شدة العمل عالية جدًا في بعض المدن.",
          "catAr": "جودة الحياة في المدينة"
        },
        {
          "w": "die Arbeitslosigkeit",
          "d": "Die Situation, dass Menschen keine Arbeit haben.",
          "ar": "البطالة",
          "cat": "Lebensqualität einer Stadt",
          "ex": "Die Arbeitslosigkeit in unserer Region ist im letzten Jahr gesunken.",
          "dAr": "حالة عدم وجود عمل لدى الناس.",
          "exAr": "البطالة في منطقتنا انخفضت السنة اللي فاتت.",
          "catAr": "جودة الحياة في المدينة"
        },
        {
          "w": "die Hochschule",
          "d": "Eine Universität oder eine ähnliche Schule, an der man studieren kann.",
          "ar": "جامعة / معهد عالي",
          "cat": "Lebensqualität einer Stadt",
          "ex": "In vielen Ländern kostet das Studium an einer Hochschule kein Geld.",
          "dAr": "جامعة أو مؤسسة شبيهة يمكن الدراسة فيها.",
          "exAr": "في بلاد كتير الدراسة في التعليم العالي مجانية.",
          "catAr": "جودة الحياة في المدينة"
        },
        {
          "w": "der Zugang",
          "d": "Die Möglichkeit, etwas zu benutzen oder irgendwohin zu kommen.",
          "ar": "إمكانية الوصول / الدخول",
          "cat": "Lebensqualität einer Stadt",
          "ex": "Alle Kinder sollten Zugang zu guter Bildung haben.",
          "dAr": "إمكانية استخدام شيء أو الوصول لمكان.",
          "exAr": "كل الأطفال المفروض يحصلوا على تعليم جيد.",
          "catAr": "جودة الحياة في المدينة"
        },
        {
          "w": "festlegen",
          "d": "Etwas genau und verbindlich bestimmen.",
          "ar": "يحدد / يقرر",
          "cat": "Lebensqualität einer Stadt",
          "ex": "Gesetze legen fest, wie viel Urlaub man bekommt.",
          "dAr": "تحديد شيء بدقة وبصورة ملزمة.",
          "exAr": "القوانين بتحدد مقدار الإجازة اللي بتاخدها.",
          "catAr": "جودة الحياة في المدينة"
        },
        {
          "w": "rechtlich",
          "d": "So, dass es mit den Gesetzen zu tun hat.",
          "ar": "قانوني",
          "cat": "Lebensqualität einer Stadt",
          "ex": "Die rechtliche Situation ist in jedem Land anders.",
          "dAr": "متعلق بالقوانين.",
          "exAr": "الوضع القانوني مختلف في كل بلد.",
          "catAr": "جودة الحياة في المدينة"
        },
        {
          "w": "die Stadträtin",
          "d": "Eine Frau, die im Parlament einer Stadt Politik macht.",
          "ar": "عضوة المجلس البلدي",
          "cat": "Projekte für die Stadt",
          "ex": "Die Stadträtin für Kultur möchte einen Treffpunkt für alle Bürger bauen.",
          "dAr": "امرأة تمارس السياسة عضوًا في مجلس المدينة.",
          "exAr": "عضوة مجلس المدينة المسؤولة عن الثقافة عايزة تنشئ مكانًا يلتقي فيه كل المواطنين.",
          "catAr": "مشروعات للمدينة"
        },
        {
          "w": "der Stadtrat",
          "d": "Das Parlament einer Stadt oder ein Mann, der dort Mitglied ist.",
          "ar": "المجلس البلدي / عضو المجلس البلدي",
          "cat": "Projekte für die Stadt",
          "ex": "Der Stadtrat hat für neue Projekte nur zwanzig Millionen Euro.",
          "dAr": "مجلس المدينة أو رجل عضو فيه.",
          "exAr": "مجلس المدينة عنده عشرون مليون يورو فقط للمشروعات الجديدة.",
          "catAr": "مشروعات للمدينة"
        },
        {
          "w": "das Budget",
          "d": "Das Geld, das für einen bestimmten Zweck zur Verfügung steht.",
          "ar": "الميزانية",
          "cat": "Projekte für die Stadt",
          "ex": "Das Budget reicht leider nicht für alle Projekte.",
          "dAr": "المال المتاح لغرض محدد.",
          "exAr": "للأسف الميزانية مش كافية لكل المشروعات.",
          "catAr": "مشروعات للمدينة"
        },
        {
          "w": "der Wohnbau",
          "d": "Der Bau von Häusern und Wohnungen.",
          "ar": "بناء المساكن / الإسكان",
          "cat": "Projekte für die Stadt",
          "ex": "Die Stadt will mehr Geld in den Wohnbau investieren.",
          "dAr": "بناء المنازل والشقق.",
          "exAr": "المدينة عايزة تستثمر فلوس أكتر في بناء المساكن.",
          "catAr": "مشروعات للمدينة"
        },
        {
          "w": "der Umbau",
          "d": "Die Veränderung eines Gebäudes, damit man es anders nutzen kann.",
          "ar": "إعادة البناء / تعديل المبنى",
          "cat": "Projekte für die Stadt",
          "ex": "Der Umbau von Büros zu Wohnungen kostet sechs Millionen Euro.",
          "dAr": "تغيير مبنى حتى يمكن استخدامه بطريقة أخرى.",
          "exAr": "تحويل المكاتب لشقق بيكلّف ستة ملايين يورو.",
          "catAr": "مشروعات للمدينة"
        },
        {
          "w": "die Renovierung",
          "d": "Die Arbeit, mit der man ein altes Gebäude wieder schön und modern macht.",
          "ar": "التجديد / الترميم",
          "cat": "Projekte für die Stadt",
          "ex": "Die Renovierung der beiden alten Schulen dauert zwei Jahre.",
          "dAr": "شغل لتجديد مبنى قديم وجعله أجمل وأحدث.",
          "exAr": "تجديد المدرستين القديمتين بيستغرق سنتين.",
          "catAr": "مشروعات للمدينة"
        },
        {
          "w": "die Initiative",
          "d": "Ein Projekt, das Menschen selbst starten, um etwas zu verbessern.",
          "ar": "مبادرة",
          "cat": "Projekte für die Stadt",
          "ex": "Bei dieser sozialen Initiative lernen Flüchtlinge, Fahrräder zu reparieren.",
          "dAr": "مشروع يبدأه الناس بأنفسهم لتحسين شيء.",
          "exAr": "في المبادرة الاجتماعية دي اللاجئون بيتعلّموا تصليح العجل.",
          "catAr": "مشروعات للمدينة"
        },
        {
          "w": "die Kita",
          "d": "Ein Ort, wo kleine Kinder tagsüber betreut werden.",
          "ar": "حضانة",
          "cat": "Projekte für die Stadt",
          "ex": "Unsere Tochter geht seit Januar in die Kita.",
          "dAr": "مكان لرعاية الأطفال الصغار خلال النهار.",
          "exAr": "بنتنا بتروح الحضانة من يناير.",
          "catAr": "مشروعات للمدينة"
        },
        {
          "w": "eine Diskussion führen",
          "d": "Mit anderen über ein Thema sprechen und Argumente austauschen.",
          "ar": "يعمل نقاش / يدير مناقشة",
          "cat": "Eine Diskussion führen",
          "ex": "Im Stadtrat führen sie eine lange Diskussion über den Verkehr.",
          "dAr": "التحدث مع آخرين عن موضوع وتبادل الحجج.",
          "exAr": "في مجلس المدينة بيديروا نقاشًا طويلًا عن المرور.",
          "catAr": "إدارة نقاش"
        },
        {
          "w": "die Diskussion",
          "d": "Ein Gespräch, in dem Menschen ihre Meinungen und Argumente austauschen.",
          "ar": "نقاش / مناقشة",
          "cat": "Eine Diskussion führen",
          "ex": "Die Diskussion über das neue Parkhaus war sehr emotional.",
          "dAr": "حديث يتبادل فيه الناس آراءهم وحججهم.",
          "exAr": "النقاش عن الجراج الجديد كان مليان انفعال.",
          "catAr": "إدارة نقاش"
        },
        {
          "w": "eingehen (auf + A)",
          "d": "Auf eine Meinung oder Frage reagieren und darüber sprechen.",
          "ar": "يتناول / يرد على (رأي أو سؤال)",
          "cat": "Eine Diskussion führen",
          "ex": "Der Experte ist leider nicht auf meine Frage eingegangen.",
          "dAr": "الرد على رأي أو سؤال وتناوله بالكلام.",
          "exAr": "للأسف الخبير ما اتناولش سؤالي.",
          "catAr": "إدارة نقاش"
        },
        {
          "w": "recht geben",
          "d": "Sagen, dass eine andere Person mit ihrer Meinung richtigliegt.",
          "ar": "يدّي الحق لـ / يوافق",
          "cat": "Eine Diskussion führen",
          "ex": "Da gebe ich Ihnen recht, die Mieten sind wirklich zu hoch.",
          "dAr": "القول إن رأي شخص آخر صحيح.",
          "exAr": "معاك حق في النقطة دي، الإيجارات فعلًا غالية جدًا.",
          "catAr": "إدارة نقاش"
        },
        {
          "w": "außer Acht lassen",
          "d": "Etwas nicht beachten oder nicht daran denken.",
          "ar": "يتجاهل / ما ياخدش في الاعتبار",
          "cat": "Eine Diskussion führen",
          "ex": "Wir dürfen die Kosten nicht außer Acht lassen.",
          "dAr": "عدم مراعاة شيء أو عدم التفكير فيه.",
          "exAr": "ما ينفعش نتجاهل التكاليف.",
          "catAr": "إدارة نقاش"
        },
        {
          "w": "vermitteln",
          "d": "Zwischen Personen mit verschiedenen Meinungen helfen, eine Lösung zu finden.",
          "ar": "يتوسط (بين طرفين)",
          "cat": "Eine Diskussion führen",
          "ex": "Die Moderatorin versucht, zwischen den beiden Gruppen zu vermitteln.",
          "dAr": "التوسط بين أصحاب آراء مختلفة لإيجاد حل.",
          "exAr": "المذيعة بتحاول تتوسط بين المجموعتين.",
          "catAr": "إدارة نقاش"
        },
        {
          "w": "unterbrechen",
          "d": "In ein Gespräch hineinreden, sodass eine andere Person nicht weitersprechen kann.",
          "ar": "يقاطع",
          "cat": "Eine Diskussion führen",
          "ex": "Bitte unterbrechen Sie mich nicht, ich bin noch nicht fertig.",
          "dAr": "التدخل في الكلام بحيث لا يستطيع الآخر مواصلة حديثه.",
          "exAr": "من فضلك ما تقاطعنيش، لسه ما خلصتش.",
          "catAr": "إدارة نقاش"
        },
        {
          "w": "ausreden",
          "d": "Zu Ende sprechen.",
          "ar": "يكمّل كلامه للآخر",
          "cat": "Eine Diskussion führen",
          "ex": "Lassen Sie mich bitte ausreden!",
          "dAr": "إتمام الكلام إلى نهايته.",
          "exAr": "سيبني أكمّل كلامي لو سمحت!",
          "catAr": "إدارة نقاش"
        },
        {
          "w": "fortsetzen",
          "d": "Mit etwas weitermachen, nachdem man eine Pause gemacht hat.",
          "ar": "يكمّل / يواصل",
          "cat": "Eine Diskussion führen",
          "ex": "Nach der Pause setzen wir die Diskussion fort.",
          "dAr": "استكمال شيء بعد استراحة.",
          "exAr": "بعد الاستراحة هنكمّل النقاش.",
          "catAr": "إدارة نقاش"
        },
        {
          "w": "der Tourismus",
          "d": "Das Reisen von Menschen in ihrer Freizeit und alles, was damit zu tun hat.",
          "ar": "السياحة",
          "cat": "Eine Stadt kennenlernen",
          "ex": "Der Tourismus ist für viele Städte am Meer sehr wichtig.",
          "dAr": "سفر الناس في وقت فراغهم وكل ما يرتبط بذلك.",
          "exAr": "السياحة مهمة جدًا لمدن ساحلية كتير.",
          "catAr": "التعرّف على مدينة"
        },
        {
          "w": "die Rundfahrt",
          "d": "Eine Fahrt durch eine Stadt oder Gegend, bei der man die Sehenswürdigkeiten sieht.",
          "ar": "جولة (بعربية أو مركب)",
          "cat": "Eine Stadt kennenlernen",
          "ex": "Wir haben an einer Rundfahrt mit dem Boot teilgenommen.",
          "dAr": "جولة بمركبة في مدينة أو منطقة لمشاهدة المعالم.",
          "exAr": "شاركنا في جولة بالمركب.",
          "catAr": "التعرّف على مدينة"
        },
        {
          "w": "rumfahren",
          "d": "Umgangssprachlich: ohne festes Ziel durch eine Gegend fahren.",
          "ar": "يلف / يتجول (بعجلة أو عربية)",
          "cat": "Eine Stadt kennenlernen",
          "ex": "Ich bin die ganze Woche mit dem Fahrrad in der Stadt rumgefahren.",
          "dAr": "بالعامية: التجوّل بمركبة في منطقة من غير وجهة ثابتة.",
          "exAr": "طول الأسبوع اتجولت بالعجلة في المدينة.",
          "catAr": "التعرّف على مدينة"
        },
        {
          "w": "das Wahrzeichen",
          "d": "Ein bekanntes Gebäude oder Symbol, an dem man eine Stadt erkennt.",
          "ar": "رمز المدينة / معلم مميز",
          "cat": "Eine Stadt kennenlernen",
          "ex": "Das Brandenburger Tor ist das Wahrzeichen von Berlin.",
          "dAr": "مبنى أو رمز معروف يميّز مدينة.",
          "exAr": "بوابة براندنبورغ هي معلم برلين المميّز.",
          "catAr": "التعرّف على مدينة"
        },
        {
          "w": "das Denkmal",
          "d": "Eine Statue oder ein Bauwerk, das an eine Person oder ein Ereignis erinnert.",
          "ar": "نصب تذكاري / أثر",
          "cat": "Eine Stadt kennenlernen",
          "ex": "Vor dem Rathaus steht ein Denkmal für einen berühmten Dichter.",
          "dAr": "تمثال أو بناء لتخليد ذكرى شخص أو حدث.",
          "exAr": "قدّام مبنى البلدية نصب تذكاري لشاعر مشهور.",
          "catAr": "التعرّف على مدينة"
        },
        {
          "w": "die Fassade",
          "d": "Die vordere Außenseite eines Gebäudes.",
          "ar": "واجهة المبنى",
          "cat": "Eine Stadt kennenlernen",
          "ex": "Die Häuser in der Altstadt haben bunte Fassaden.",
          "dAr": "الجانب الأمامي الخارجي للمبنى.",
          "exAr": "بيوت المدينة القديمة واجهاتها ملونة.",
          "catAr": "التعرّف على مدينة"
        },
        {
          "w": "die Gasse",
          "d": "Eine kleine, schmale Straße, oft in einer Altstadt.",
          "ar": "حارة / زقاق",
          "cat": "Eine Stadt kennenlernen",
          "ex": "Wir haben uns in den engen Gassen der Altstadt verlaufen.",
          "dAr": "شارع صغير وضيّق، غالبًا في المدينة القديمة.",
          "exAr": "إحنا تهنا في أزقة المدينة القديمة الضيقة.",
          "catAr": "التعرّف على مدينة"
        },
        {
          "w": "schmal",
          "d": "Nicht breit.",
          "ar": "ضيق",
          "cat": "Eine Stadt kennenlernen",
          "ex": "Die Straße ist so schmal, dass kein Auto durchpasst.",
          "dAr": "غير عريض.",
          "exAr": "الشارع ضيّق لدرجة إن مفيش عربية تقدر تعدّي.",
          "catAr": "التعرّف على مدينة"
        },
        {
          "w": "mittendrin",
          "d": "Genau in der Mitte von etwas.",
          "ar": "في النص بالظبط / في قلب المكان",
          "cat": "Eine Stadt kennenlernen",
          "ex": "Die Altstadt ist sehr schön, und mittendrin steht eine alte Kirche.",
          "dAr": "في وسط شيء تمامًا.",
          "exAr": "المدينة القديمة جميلة جدًا وفي وسطها كنيسة قديمة.",
          "catAr": "التعرّف على مدينة"
        },
        {
          "w": "fern",
          "d": "Weit weg.",
          "ar": "بعيد",
          "cat": "Eine Stadt kennenlernen",
          "ex": "Oben auf dem Berg ist man fern vom Lärm der Stadt.",
          "dAr": "بعيد.",
          "exAr": "فوق الجبل بتكون بعيدًا عن ضوضاء المدينة.",
          "catAr": "التعرّف على مدينة"
        },
        {
          "w": "um ... herum",
          "d": "Rund um einen Ort oder eine Sache.",
          "ar": "حوالين",
          "cat": "Eine Stadt kennenlernen",
          "ex": "Um die Altstadt herum gibt es viele kleine Parks.",
          "dAr": "حول مكان أو شيء.",
          "exAr": "حوالين المدينة القديمة حدائق صغيرة كتير.",
          "catAr": "التعرّف على مدينة"
        },
        {
          "w": "springen",
          "d": "Sich mit den Beinen kräftig vom Boden abstoßen und durch die Luft bewegen.",
          "ar": "ينط / يقفز",
          "cat": "Eine Stadt kennenlernen",
          "ex": "Im Sommer springen viele junge Leute von der Brücke in den Fluss.",
          "dAr": "دفع الجسم بالقدمين بقوة عن الأرض والتحرك في الهواء.",
          "exAr": "في الصيف شباب كتير بينطّوا من الجسر للنهر.",
          "catAr": "التعرّف على مدينة"
        },
        {
          "w": "steigen",
          "d": "Nach oben gehen, zum Beispiel auf einen Turm oder einen Berg.",
          "ar": "يطلع / يصعد",
          "cat": "Eine Stadt kennenlernen",
          "ex": "Wir sind auf den Turm gestiegen und hatten einen tollen Ausblick.",
          "dAr": "الصعود، مثلًا إلى برج أو جبل.",
          "exAr": "طلعنا البرج وكان عندنا منظر رائع.",
          "catAr": "التعرّف على مدينة"
        },
        {
          "w": "rauffahren",
          "d": "Umgangssprachlich: nach oben fahren.",
          "ar": "يطلع لفوق (بعربية أو قطر)",
          "cat": "Eine Stadt kennenlernen",
          "ex": "Wer nicht wandern will, kann mit der Bahn auf den Berg rauffahren.",
          "dAr": "بالعامية: الصعود بمركبة إلى أعلى.",
          "exAr": "اللي مش عايز يمشي ممكن يطلع الجبل بالقطار.",
          "catAr": "التعرّف على مدينة"
        },
        {
          "w": "rollen",
          "d": "Sich auf Rädern vorwärts bewegen.",
          "ar": "يمشي على عجل / يتدحرج",
          "cat": "Eine Stadt kennenlernen",
          "ex": "Mit dem Fahrrad rollen wir gemütlich durch die Stadt.",
          "dAr": "التحرك إلى الأمام على عجلات.",
          "exAr": "بنتجوّل بهدوء بالعجل في المدينة.",
          "catAr": "التعرّف على مدينة"
        },
        {
          "w": "der/die Einheimische",
          "d": "Eine Person, die an einem Ort wohnt und dort zu Hause ist.",
          "ar": "ابن البلد / من أهل المكان",
          "cat": "Eine Stadt kennenlernen",
          "ex": "Die Einheimischen kennen die besten Restaurants der Stadt.",
          "dAr": "شخص يعيش في مكان ويعتبره موطنه.",
          "exAr": "السكان المحليون عارفين أفضل مطاعم المدينة.",
          "catAr": "التعرّف على مدينة"
        },
        {
          "w": "der Dialekt",
          "d": "Eine regionale Form einer Sprache.",
          "ar": "لهجة",
          "cat": "Eine Stadt kennenlernen",
          "ex": "Im Dorf sprechen viele ältere Leute noch Dialekt.",
          "dAr": "شكل إقليمي من لغة.",
          "exAr": "في القرية كبار السن كتير لسه بيتكلموا باللهجة المحلية.",
          "catAr": "التعرّف على مدينة"
        },
        {
          "w": "das Billett",
          "d": "Ein Wort aus dem Schweizerdeutschen für Fahrkarte.",
          "ar": "تذكرة (بالسويسري)",
          "cat": "Eine Stadt kennenlernen",
          "ex": "Hast du schon ein Billett für die Straßenbahn gekauft?",
          "dAr": "كلمة بالألمانية السويسرية تعني تذكرة سفر.",
          "exAr": "اشتريت تذكرة الترام بالفعل؟",
          "catAr": "التعرّف على مدينة"
        },
        {
          "w": "das Velo",
          "d": "Ein Wort aus dem Schweizerdeutschen für Fahrrad.",
          "ar": "عجلة / دراجة (بالسويسري)",
          "cat": "Eine Stadt kennenlernen",
          "ex": "In Zürich fahren viele Leute mit dem Velo zur Arbeit.",
          "dAr": "كلمة بالألمانية السويسرية تعني دراجة.",
          "exAr": "في زيورخ ناس كتير بيروحوا الشغل بالعجلة.",
          "catAr": "التعرّف على مدينة"
        },
        {
          "w": "sich auf den Weg machen",
          "d": "Losgehen oder losfahren.",
          "ar": "ينطلق / يتحرك",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Um fünf Uhr macht sich das Reinigungsfahrzeug auf den Weg.",
          "dAr": "الانطلاق مشيًا أو بمركبة.",
          "exAr": "عربية التنظيف بتنطلق الساعة خمسة.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "hineingehen",
          "d": "In einen Raum oder ein Gebäude gehen.",
          "ar": "يدخل (لجوه)",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Die Tür war offen, also bin ich einfach hineingegangen.",
          "dAr": "الدخول إلى غرفة أو مبنى.",
          "exAr": "الباب كان مفتوح، فدخلت ببساطة.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "hindern (an + D)",
          "d": "Machen, dass eine Person etwas nicht tun kann.",
          "ar": "يمنع (من)",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Niemand hindert den Mann daran, in der Garage zu schlafen.",
          "dAr": "منع شخص من القيام بشيء.",
          "exAr": "محدش بيمنع الراجل إنه ينام في الجراج.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "der Sozialarbeiter",
          "d": "Eine Person, die beruflich Menschen in schwierigen Situationen hilft.",
          "ar": "أخصائي اجتماعي",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Der Sozialarbeiter betreut Jugendliche in unserem Viertel.",
          "dAr": "شخص يعمل في مساعدة الناس في الظروف الصعبة.",
          "exAr": "الأخصائي الاجتماعي بيرعى الشباب في حيّنا.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "der Flüchtling",
          "d": "Eine Person, die ihr Land verlassen musste, zum Beispiel wegen Krieg.",
          "ar": "لاجئ",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Viele Flüchtlinge lernen in Abendkursen Deutsch.",
          "dAr": "شخص اضطر لمغادرة بلده بسبب حرب مثلًا.",
          "exAr": "لاجئون كتير بيتعلّموا الألماني في كورسات مسائية.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "angehen (Das geht keinen etwas an.)",
          "d": "Mit einer Person zu tun haben, sodass sie sich dafür interessieren darf.",
          "ar": "يخص (حد) / «مالوش دعوة»",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Was ich in meiner Freizeit mache, geht keinen etwas an.",
          "dAr": "أن يخص شيء شخصًا فيكون له حق الاهتمام به.",
          "exAr": "اللي بعمله في وقت فراغي ما يخصش حد.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "irgendein, irgendeine, irgendwelche",
          "d": "Ein Wort für eine Person oder Sache, die man nicht genau kennt oder die egal ist.",
          "ar": "أي (واحد / حاجة)",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Kennst du irgendein nettes Café in der Nähe?",
          "dAr": "تدل على شخص أو شيء غير معروف تحديدًا أو غير مهم تحديده.",
          "exAr": "تعرف أي كافيه لطيف قريب؟",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "anscheinend",
          "d": "So, wie es aussieht.",
          "ar": "على ما يبدو / باين",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Anscheinend bin ich doch ein Landmensch.",
          "dAr": "بحسب ما يبدو.",
          "exAr": "يبدو إني في النهاية من محبّي الريف.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "fließen",
          "d": "Sich als Wasser gleichmäßig in eine Richtung bewegen.",
          "ar": "يجري (المية) / يسيل",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Der Neckar fließt mitten durch Tübingen.",
          "dAr": "تحرك الماء بانتظام في اتجاه واحد.",
          "exAr": "نهر نيكار بيمر في وسط توبينغن.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "eindeutig",
          "d": "Ganz klar, ohne Zweifel.",
          "ar": "بوضوح / من غير شك",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Das Leben in der Stadt ist eindeutig teurer als auf dem Land.",
          "dAr": "واضح تمامًا ومن غير شك.",
          "exAr": "الحياة في المدينة أغلى بوضوح من الريف.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "das Angebot",
          "d": "Alles, was man an einem Ort kaufen, nutzen oder machen kann.",
          "ar": "العرض / الحاجات المتاحة",
          "cat": "Leben in der Stadt",
          "ex": "Das kulturelle Angebot in Leipzig ist sehr groß.",
          "dAr": "كل ما يمكن شراؤه أو استخدامه أو فعله في مكان.",
          "exAr": "الأنشطة الثقافية في لايبزيغ كثيرة جدًا.",
          "catAr": "الحياة في المدينة"
        },
        {
          "w": "die Atmosphäre",
          "d": "Die Stimmung, die an einem Ort herrscht.",
          "ar": "الجو / الأجواء",
          "cat": "Leben in der Stadt",
          "ex": "Die Atmosphäre in den kleinen Cafés ist sehr gemütlich.",
          "dAr": "الجو أو الحالة الشعورية السائدة في مكان.",
          "exAr": "الأجواء في الكافيهات الصغيرة مريحة جدًا.",
          "catAr": "الحياة في المدينة"
        },
        {
          "w": "die Aussicht",
          "d": "Das, was man von einem hohen Ort oder aus einem Fenster sehen kann.",
          "ar": "الإطلالة / المنظر",
          "cat": "Leben in der Stadt",
          "ex": "Vom zwölften Stock hat man eine super Aussicht.",
          "dAr": "ما يمكنك رؤيته من مكان مرتفع أو نافذة.",
          "exAr": "من الدور الثاني عشر فيه إطلالة رائعة.",
          "catAr": "الحياة في المدينة"
        },
        {
          "w": "die Fußgängerzone",
          "d": "Ein Teil der Stadt, in dem keine Autos fahren dürfen.",
          "ar": "منطقة مشاة",
          "cat": "Leben in der Stadt",
          "ex": "In der Fußgängerzone gibt es viele Geschäfte und Cafés.",
          "dAr": "جزء من المدينة لا يُسمح فيه بدخول السيارات.",
          "exAr": "في منطقة المشاة محلات وكافيهات كتير.",
          "catAr": "الحياة في المدينة"
        },
        {
          "w": "das Hochhaus",
          "d": "Ein sehr hohes Gebäude mit vielen Stockwerken.",
          "ar": "برج / عمارة عالية",
          "cat": "Leben in der Stadt",
          "ex": "Wir wohnen in einem Hochhaus im zwölften Stock.",
          "dAr": "مبنى مرتفع جدًا به طوابق كثيرة.",
          "exAr": "إحنا ساكنين في الدور الثاني عشر في عمارة عالية.",
          "catAr": "الحياة في المدينة"
        },
        {
          "w": "der Bewohner",
          "d": "Eine Person, die an einem Ort oder in einem Haus wohnt.",
          "ar": "ساكن / مقيم",
          "cat": "Leben in der Stadt",
          "ex": "Die Bewohner des Viertels wünschen sich mehr Grünflächen.",
          "dAr": "شخص يسكن في مكان أو بيت.",
          "exAr": "سكان الحي عايزين مساحات خضراء أكتر.",
          "catAr": "الحياة في المدينة"
        },
        {
          "w": "der Club",
          "d": "Ein Ort, an dem man abends Musik hört und tanzt.",
          "ar": "كلوب / نادي ليلي",
          "cat": "Leben in der Stadt",
          "ex": "Am Wochenende gehen wir in einen Club im Zentrum.",
          "dAr": "مكان لسماع الموسيقى والرقص مساءً.",
          "exAr": "في الويك إند بنروح ناديًا ليليًا في المركز.",
          "catAr": "الحياة في المدينة"
        },
        {
          "w": "die Erholung",
          "d": "Die Zeit, in der man sich ausruht und neue Kraft bekommt.",
          "ar": "الراحة / الاستجمام",
          "cat": "Leben in der Stadt",
          "ex": "Zur Erholung fahre ich am Wochenende in den Wald.",
          "dAr": "وقت للراحة واستعادة القوة.",
          "exAr": "بروح الغابة في الويك إند للاستجمام.",
          "catAr": "الحياة في المدينة"
        },
        {
          "w": "das Fahrzeug",
          "d": "Ein Gerät mit Rädern und oft mit Motor, mit dem man fährt, zum Beispiel ein Auto.",
          "ar": "مركبة / عربية",
          "cat": "Leben in der Stadt",
          "ex": "In der Innenstadt sind sehr viele Fahrzeuge unterwegs.",
          "dAr": "وسيلة بعجلات وغالبًا بمحرك للتنقل، مثل السيارة.",
          "exAr": "مركبات كتير جدًا بتتحرك في وسط المدينة.",
          "catAr": "الحياة في المدينة"
        },
        {
          "w": "das Unternehmen",
          "d": "Eine Firma.",
          "ar": "شركة / مؤسسة",
          "cat": "Leben in der Stadt",
          "ex": "In unserem Unternehmen arbeiten tausend Mitarbeiter.",
          "dAr": "شركة.",
          "exAr": "في شركتنا ألف موظف.",
          "catAr": "الحياة في المدينة"
        },
        {
          "w": "die Kneipe",
          "d": "Ein einfaches Lokal, in dem man vor allem etwas trinkt.",
          "ar": "بار صغير / قهوة",
          "cat": "Leben in der Stadt",
          "ex": "Nach der Arbeit treffen wir uns oft in der Kneipe um die Ecke.",
          "dAr": "محل بسيط يُقدَّم فيه خصوصًا الشراب.",
          "exAr": "بعد الشغل غالبًا بنتقابل في الحانة القريبة عند الناصية.",
          "catAr": "الحياة في المدينة"
        },
        {
          "w": "der Verkehr",
          "d": "Alle Autos, Busse, Fahrräder und Menschen, die auf den Straßen unterwegs sind.",
          "ar": "المرور / الزحمة",
          "cat": "Leben in der Stadt",
          "ex": "Morgens um acht ist der Verkehr in der Stadt besonders stark.",
          "dAr": "كل السيارات والأتوبيسات والعجل والناس المتحركين في الشوارع.",
          "exAr": "الساعة ثمانية صباحًا المرور في المدينة بيكون كثيفًا خصوصًا.",
          "catAr": "الحياة في المدينة"
        },
        {
          "w": "die Lage",
          "d": "Der Ort, an dem etwas liegt.",
          "ar": "الموقع",
          "cat": "Leben in der Stadt",
          "ex": "Die Lage der Wohnung direkt am Park ist toll.",
          "dAr": "المكان الذي يوجد فيه شيء.",
          "exAr": "موقع الشقة جنب الحديقة مباشرة رائع.",
          "catAr": "الحياة في المدينة"
        },
        {
          "w": "der Lärm",
          "d": "Laute, unangenehme Geräusche.",
          "ar": "الدوشة / الضوضاء",
          "cat": "Leben in der Stadt",
          "ex": "Bei diesem Lärm kann ich mich nicht entspannen.",
          "dAr": "أصوات عالية ومزعجة.",
          "exAr": "مع الدوشة دي مش قادر أسترخي.",
          "catAr": "الحياة في المدينة"
        },
        {
          "w": "die Mobilität",
          "d": "Die Möglichkeit, sich leicht von einem Ort zu einem anderen zu bewegen.",
          "ar": "التنقل / الحركة",
          "cat": "Leben in der Stadt",
          "ex": "Gute Busse und Bahnen sind wichtig für die Mobilität in der Stadt.",
          "dAr": "إمكانية التنقل بسهولة من مكان لآخر.",
          "exAr": "الأتوبيسات والقطارات الجيدة مهمة للتنقل في المدينة.",
          "catAr": "الحياة في المدينة"
        },
        {
          "w": "der Nachbar",
          "d": "Eine Person, die neben einem oder ganz in der Nähe wohnt.",
          "ar": "جار",
          "cat": "Leben in der Stadt",
          "ex": "Mein Nachbar gießt im Urlaub meine Blumen.",
          "dAr": "شخص يسكن بجانبك أو قريبًا جدًا منك.",
          "exAr": "جاري بيسقي وردي وأنا في الإجازة.",
          "catAr": "الحياة في المدينة"
        },
        {
          "w": "der Stress",
          "d": "Ein Gefühl von Druck und Nervosität, wenn man zu viel zu tun hat.",
          "ar": "ضغط / توتر",
          "cat": "Leben in der Stadt",
          "ex": "Der Stress in der Großstadt macht mich müde.",
          "dAr": "شعور بالضغط والتوتر بسبب كثرة المهام.",
          "exAr": "ضغط المدينة الكبيرة بيتعبني.",
          "catAr": "الحياة في المدينة"
        },
        {
          "w": "der Stadtteil",
          "d": "Ein Teil einer Stadt mit eigenem Namen.",
          "ar": "حي",
          "cat": "Leben in der Stadt",
          "ex": "Jeder Stadtteil von Leipzig sieht anders aus.",
          "dAr": "جزء من مدينة له اسم خاص.",
          "exAr": "كل حي في لايبزيغ شكله مختلف.",
          "catAr": "الحياة في المدينة"
        },
        {
          "w": "das Viertel",
          "d": "Ein Teil einer Stadt, ein anderes Wort für Stadtteil.",
          "ar": "حي / منطقة",
          "cat": "Leben in der Stadt",
          "ex": "In unserem Viertel gibt es viele kleine Läden.",
          "dAr": "جزء من مدينة؛ مرادف لـ Stadtteil.",
          "exAr": "في حيّنا محلات صغيرة كتير.",
          "catAr": "الحياة في المدينة"
        },
        {
          "w": "die Geschwindigkeit",
          "d": "Wie schnell sich etwas bewegt.",
          "ar": "السرعة",
          "cat": "Leben in der Stadt",
          "ex": "In der Stadt darf man höchstens mit einer Geschwindigkeit von 50 km/h fahren.",
          "dAr": "مدى سرعة تحرك شيء.",
          "exAr": "في المدينة السرعة القصوى المسموح بها خمسون كيلومترًا في الساعة.",
          "catAr": "الحياة في المدينة"
        },
        {
          "w": "das Geschäft",
          "d": "Ein Ort, an dem man Waren kaufen kann.",
          "ar": "محل / متجر",
          "cat": "Leben in der Stadt",
          "ex": "Am Sonntag sind die Geschäfte in Deutschland geschlossen.",
          "dAr": "مكان يمكن شراء البضائع منه.",
          "exAr": "المحلات في ألمانيا مقفولة يوم الأحد.",
          "catAr": "الحياة في المدينة"
        },
        {
          "w": "die Großstadt",
          "d": "Eine Stadt mit mehr als hunderttausend Einwohnern.",
          "ar": "مدينة كبيرة",
          "cat": "Leben in der Stadt",
          "ex": "Ich studiere in einer Großstadt und mag das Leben dort sehr.",
          "dAr": "مدينة يزيد عدد سكانها على مئة ألف.",
          "exAr": "بدرس في مدينة كبيرة وبحب الحياة هناك جدًا.",
          "catAr": "الحياة في المدينة"
        },
        {
          "w": "das Dorf",
          "d": "Ein kleiner Ort auf dem Land.",
          "ar": "قرية",
          "cat": "Leben in der Stadt",
          "ex": "In meinem Dorf kennt jeder jeden.",
          "dAr": "تجمع سكني صغير في الريف.",
          "exAr": "في قريتي الكل عارف بعضه.",
          "catAr": "الحياة في المدينة"
        },
        {
          "w": "sich leisten (können)",
          "d": "Genug Geld für etwas haben.",
          "ar": "يقدر يتحمل تمن حاجة",
          "cat": "Leben in der Stadt",
          "ex": "Ein Haus mit Garten könnte ich mir in der Stadt nicht leisten.",
          "dAr": "امتلاك مال كافٍ لشيء.",
          "exAr": "مش هقدر أتحمّل ثمن بيت بجنينة في المدينة.",
          "catAr": "الحياة في المدينة"
        },
        {
          "w": "gegenseitig",
          "d": "So, dass jeder dem anderen hilft oder etwas für ihn tut.",
          "ar": "بعض / متبادل",
          "cat": "Leben in der Stadt",
          "ex": "Im Dorf helfen sich die Nachbarn gegenseitig.",
          "dAr": "أن يساعد كل شخص الآخر أو يفعل له شيئًا.",
          "exAr": "في القرية الجيران بيساعدوا بعض.",
          "catAr": "الحياة في المدينة"
        },
        {
          "w": "der Pfleger",
          "d": "Ein Mann, der beruflich kranke Menschen betreut.",
          "ar": "ممرض",
          "cat": "Im Krankenhaus",
          "ex": "Der Pfleger misst jeden Morgen das Fieber der Patienten.",
          "dAr": "رجل يعمل في رعاية المرضى.",
          "exAr": "الممرّض بيقيس حرارة المرضى كل صباح.",
          "catAr": "في المستشفى"
        },
        {
          "w": "der Feierabend",
          "d": "Das Ende des Arbeitstages.",
          "ar": "نهاية يوم الشغل",
          "cat": "Im Krankenhaus",
          "ex": "Um sieben Uhr morgens hat die Krankenschwester endlich Feierabend.",
          "dAr": "نهاية يوم العمل.",
          "exAr": "الساعة سبعة صباحًا الممرضة بتخلّص شغلها أخيرًا.",
          "catAr": "في المستشفى"
        },
        {
          "w": "die Operation",
          "d": "Eine Behandlung, bei der ein Arzt den Körper öffnet, um eine Krankheit zu heilen.",
          "ar": "عملية جراحية",
          "cat": "Im Krankenhaus",
          "ex": "Nach der Operation hatte der Patient plötzlich hohes Fieber.",
          "dAr": "علاج يفتح فيه الطبيب الجسم لعلاج مرض.",
          "exAr": "بعد العملية المريض فجأة أصيب بحمّى شديدة.",
          "catAr": "في المستشفى"
        },
        {
          "w": "der/die Auszubildende",
          "d": "Eine Person, die in einem Betrieb einen Beruf lernt.",
          "ar": "متدرب (في مهنة)",
          "cat": "In der Bäckerei",
          "ex": "Der Auszubildende hilft der Fahrerin beim Laden.",
          "dAr": "شخص يتعلم مهنة في مؤسسة من خلال تدريب مهني.",
          "exAr": "المتدرّب بيساعد السائقة في التحميل.",
          "catAr": "في المخبز"
        },
        {
          "w": "die Bestellung",
          "d": "Waren, die ein Kunde vorher bestellt hat.",
          "ar": "الطلبية / الأوردر",
          "cat": "In der Bäckerei",
          "ex": "Die Fahrerin bringt den Kunden ihre Bestellungen.",
          "dAr": "بضائع طلبها العميل مسبقًا.",
          "exAr": "السائقة بتوصل للعملاء طلباتهم.",
          "catAr": "في المخبز"
        },
        {
          "w": "der/die Angestellte",
          "d": "Eine Person, die bei einer Firma oder einer Behörde arbeitet und ein Gehalt bekommt.",
          "ar": "موظف",
          "cat": "Personen",
          "ex": "Die kleine Bäckerei hat fünf Angestellte.",
          "dAr": "شخص يعمل لدى شركة أو جهة حكومية مقابل مرتب.",
          "exAr": "المخبز الصغير فيه خمسة موظفين.",
          "catAr": "الأشخاص"
        },
        {
          "w": "der/die Bekannte",
          "d": "Eine Person, die man kennt, die aber kein enger Freund ist.",
          "ar": "معرفة / حد أعرفه",
          "cat": "Personen",
          "ex": "Ein Bekannter von mir arbeitet bei der Stadt.",
          "dAr": "شخص تعرفه لكنه ليس صديقًا مقرّبًا.",
          "exAr": "واحد من معارفي بيشتغل في البلدية.",
          "catAr": "الأشخاص"
        },
        {
          "w": "der/die Verwandte",
          "d": "Eine Person, die zur gleichen Familie gehört.",
          "ar": "قريب (من العيلة)",
          "cat": "Personen",
          "ex": "Am Wochenende besuchen wir Verwandte auf dem Land.",
          "dAr": "شخص ينتمي إلى نفس العائلة.",
          "exAr": "في الويك إند بنزور قرايب في الريف.",
          "catAr": "الأشخاص"
        },
        {
          "w": "der/die Jugendliche",
          "d": "Eine junge Person zwischen ungefähr 14 und 18 Jahren.",
          "ar": "مراهق / شاب صغير",
          "cat": "Personen",
          "ex": "Jugendliche langweilen sich auf dem Land oft schnell.",
          "dAr": "شخص صغير السن عمره تقريبًا بين ١٤ و١٨ سنة.",
          "exAr": "الشباب غالبًا بيزهقوا بسرعة في الريف.",
          "catAr": "الأشخاص"
        },
        {
          "w": "der/die Erwachsene",
          "d": "Eine Person, die kein Kind und kein Jugendlicher mehr ist.",
          "ar": "بالغ / كبير",
          "cat": "Personen",
          "ex": "Viele Erwachsene träumen von einem ruhigen Leben auf dem Land.",
          "dAr": "شخص لم يعد طفلًا ولا مراهقًا.",
          "exAr": "بالغون كتير بيحلموا بحياة هادئة في الريف.",
          "catAr": "الأشخاص"
        },
        {
          "w": "der/die Angehörige",
          "d": "Eine Person, die zur Familie eines Menschen gehört.",
          "ar": "من أهل (المريض) / قريب",
          "cat": "Personen",
          "ex": "Nur Angehörige bekommen Informationen über den Patienten.",
          "dAr": "شخص من عائلة إنسان.",
          "exAr": "فقط أفراد الأسرة بيحصلوا على معلومات عن المريض.",
          "catAr": "الأشخاص"
        },
        {
          "w": "der/die Arbeitslose",
          "d": "Eine Person, die keine Arbeit hat.",
          "ar": "عاطل عن العمل",
          "cat": "Personen",
          "ex": "In der Großstadt finden Arbeitslose oft schneller eine neue Stelle.",
          "dAr": "شخص ليس لديه عمل.",
          "exAr": "في المدينة الكبيرة العاطلون غالبًا بيلاقوا وظيفة جديدة أسرع.",
          "catAr": "الأشخاص"
        },
        {
          "w": "der/die Kranke",
          "d": "Eine Person, die krank ist.",
          "ar": "مريض",
          "cat": "Personen",
          "ex": "Im Krankenhaus kümmern sich Ärzte und Pfleger um die Kranken.",
          "dAr": "شخص مريض.",
          "exAr": "في المستشفى الأطباء والممرّضون بيهتموا بالمرضى.",
          "catAr": "الأشخاص"
        },
        {
          "w": "lebenswert",
          "d": "So schön und angenehm, dass man dort gern lebt.",
          "ar": "تستاهل العيشة فيها / مريحة للعيش",
          "cat": "Städte-Ranking",
          "ex": "Für mich ist eine Stadt mit vielen Parks besonders lebenswert.",
          "dAr": "جميل ومريح بحيث تحب العيش فيه.",
          "exAr": "بالنسبة لي المدينة اللي فيها حدائق كتير مناسبة جدًا للعيش.",
          "catAr": "تصنيف المدن"
        },
        {
          "w": "die Lebensqualität",
          "d": "Wie gut und angenehm das Leben an einem Ort ist.",
          "ar": "جودة الحياة",
          "cat": "Städte-Ranking",
          "ex": "Viele Grünflächen erhöhen die Lebensqualität in einer Stadt.",
          "dAr": "مدى جودة الحياة وراحتها في مكان.",
          "exAr": "المساحات الخضراء الكثيرة بترفع جودة الحياة في المدينة.",
          "catAr": "تصنيف المدن"
        },
        {
          "w": "der Anspruch (auf + A)",
          "d": "Das Recht, etwas zu bekommen.",
          "ar": "حق (في)",
          "cat": "Städte-Ranking",
          "ex": "In Deutschland hat man Anspruch auf mindestens zwanzig Tage Urlaub.",
          "dAr": "الحق في الحصول على شيء.",
          "exAr": "في ألمانيا من حقك على الأقل عشرون يوم إجازة.",
          "catAr": "تصنيف المدن"
        },
        {
          "w": "die Grünfläche",
          "d": "Ein Platz in der Stadt mit Gras, Bäumen oder Pflanzen.",
          "ar": "مساحة خضراء",
          "cat": "Städte-Ranking",
          "ex": "Unsere Stadt braucht mehr Grünflächen für Kinder.",
          "dAr": "مكان بالمدينة فيه عشب أو أشجار أو نباتات.",
          "exAr": "مدينتنا محتاجة مساحات خضراء أكتر للأطفال.",
          "catAr": "تصنيف المدن"
        },
        {
          "w": "der Durchschnitt",
          "d": "Der mittlere Wert von mehreren Zahlen.",
          "ar": "المتوسط",
          "cat": "Städte-Ranking",
          "ex": "Im Durchschnitt beginnt der Arbeitstag in München um 8:46 Uhr.",
          "dAr": "القيمة المتوسطة لعدة أرقام.",
          "exAr": "في المتوسط يوم العمل في ميونيخ بيبدأ الساعة ٨:٤٦.",
          "catAr": "تصنيف المدن"
        },
        {
          "w": "das Gesetz",
          "d": "Eine Regel, die der Staat festgelegt hat und an die sich alle halten müssen.",
          "ar": "قانون",
          "cat": "Städte-Ranking",
          "ex": "Das Gesetz legt fest, wie lange man pro Tag arbeiten darf.",
          "dAr": "قاعدة وضعتها الدولة ويجب على الجميع الالتزام بها.",
          "exAr": "القانون بيحدد مدة العمل المسموح بها في اليوم.",
          "catAr": "تصنيف المدن"
        },
        {
          "w": "die Sehenswürdigkeit",
          "d": "Ein Ort oder ein Gebäude, das für Touristen interessant ist.",
          "ar": "معلم سياحي / مزار",
          "cat": "Eine Stadt kennenlernen",
          "ex": "In den ersten Tagen habe ich alle bekannten Sehenswürdigkeiten besucht.",
          "dAr": "مكان أو مبنى يهم السياح.",
          "exAr": "في أول أيام زرت كل المعالم السياحية المعروفة.",
          "catAr": "التعرّف على مدينة"
        },
        {
          "w": "die Altstadt",
          "d": "Der älteste Teil einer Stadt, oft mit historischen Gebäuden.",
          "ar": "المدينة القديمة",
          "cat": "Eine Stadt kennenlernen",
          "ex": "Die Altstadt mit ihren engen Gassen ist wunderschön.",
          "dAr": "أقدم جزء من المدينة، وغالبًا به مبانٍ تاريخية.",
          "exAr": "المدينة القديمة بأزقتها الضيقة جميلة جدًا.",
          "catAr": "التعرّف على مدينة"
        },
        {
          "w": "der Ausblick",
          "d": "Die Sicht von einem hohen Punkt auf die Umgebung.",
          "ar": "إطلالة / منظر من فوق",
          "cat": "Eine Stadt kennenlernen",
          "ex": "Vom Turm hat man einen schönen Ausblick auf den See.",
          "dAr": "مشهد المنطقة المحيطة من نقطة مرتفعة.",
          "exAr": "من البرج فيه منظر جميل للبحيرة.",
          "catAr": "التعرّف على مدينة"
        },
        {
          "w": "der Turm",
          "d": "Ein hohes, schmales Bauwerk.",
          "ar": "برج",
          "cat": "Eine Stadt kennenlernen",
          "ex": "Die alte Kirche hat zwei hohe Türme.",
          "dAr": "بناء مرتفع وضيّق.",
          "exAr": "الكنيسة القديمة فيها برجان عاليان.",
          "catAr": "التعرّف على مدينة"
        },
        {
          "w": "der Fluss",
          "d": "Ein großes, natürliches Wasser, das durch das Land fließt.",
          "ar": "نهر",
          "cat": "Eine Stadt kennenlernen",
          "ex": "Der Rhein ist einer der längsten Flüsse Europas.",
          "dAr": "مجرى مائي طبيعي كبير يسري عبر الأرض.",
          "exAr": "الراين من أطول أنهار أوروبا.",
          "catAr": "التعرّف على مدينة"
        },
        {
          "w": "das Ufer",
          "d": "Das Land direkt neben einem Fluss oder See.",
          "ar": "ضفة / شط",
          "cat": "Eine Stadt kennenlernen",
          "ex": "Am Ufer des Flusses sitzen viele Studierende in der Sonne.",
          "dAr": "الأرض الملاصقة لنهر أو بحيرة.",
          "exAr": "طلاب جامعيون كتير قاعدين في الشمس على ضفة النهر.",
          "catAr": "التعرّف على مدينة"
        },
        {
          "w": "die Führung",
          "d": "Ein Rundgang mit einer Person, die alles erklärt.",
          "ar": "جولة مع مرشد",
          "cat": "Eine Stadt kennenlernen",
          "ex": "Um elf Uhr beginnt eine Führung durch das Museum.",
          "dAr": "جولة مع شخص يشرح كل شيء.",
          "exAr": "الساعة الحادية عشرة بتبدأ جولة إرشادية في المتحف.",
          "catAr": "التعرّف على مدينة"
        },
        {
          "w": "der Stadtrundgang",
          "d": "Ein Spaziergang durch die Stadt, oft mit Erklärungen.",
          "ar": "جولة مشي في المدينة",
          "cat": "Eine Stadt kennenlernen",
          "ex": "Wir könnten zuerst einen Stadtrundgang machen und dann essen gehen.",
          "dAr": "تمشية عبر المدينة، غالبًا مع شروح.",
          "exAr": "ممكن نعمل جولة مشي في المدينة الأول وبعدين نروح ناكل.",
          "catAr": "التعرّف على مدينة"
        },
        {
          "w": "die Kaution",
          "d": "Geld, das man als Sicherheit bezahlt und später zurückbekommt.",
          "ar": "تأمين / مبلغ ضمان",
          "cat": "Eine Stadt kennenlernen",
          "ex": "Für das Fahrrad muss man zwanzig Franken Kaution bezahlen.",
          "dAr": "مال يُدفع كضمان ثم يُسترد لاحقًا.",
          "exAr": "لازم تدفع عشرين فرنك تأمينًا للعجلة.",
          "catAr": "التعرّف على مدينة"
        },
        {
          "w": "die Werkstatt",
          "d": "Ein Raum oder Betrieb, in dem man Dinge repariert oder herstellt.",
          "ar": "ورشة",
          "cat": "Eine Stadt kennenlernen",
          "ex": "Mein Bruder arbeitet in einer Werkstatt für Fahrräder.",
          "dAr": "مكان أو مؤسسة لإصلاح الأشياء أو تصنيعها.",
          "exAr": "أخويا بيشتغل في ورشة عجل.",
          "catAr": "التعرّف على مدينة"
        },
        {
          "w": "parkieren",
          "d": "Ein Wort aus dem Schweizerdeutschen für parken.",
          "ar": "يركن (بالسويسري)",
          "cat": "Eine Stadt kennenlernen",
          "ex": "Vor dem Bahnhof darf man nicht parkieren.",
          "dAr": "كلمة بالألمانية السويسرية تعني ركن السيارة.",
          "exAr": "ممنوع تركن قدّام المحطة.",
          "catAr": "التعرّف على مدينة"
        },
        {
          "w": "das Industrieviertel",
          "d": "Ein Stadtteil, in dem es viele Fabriken gibt oder früher gab.",
          "ar": "منطقة صناعية",
          "cat": "Eine Stadt kennenlernen",
          "ex": "Im alten Industrieviertel gibt es heute Galerien und Clubs.",
          "dAr": "حي فيه مصانع كثيرة حاليًا أو كانت فيه سابقًا.",
          "exAr": "في الحي الصناعي القديم دلوقتي معارض فنية ونوادٍ ليلية.",
          "catAr": "التعرّف على مدينة"
        },
        {
          "w": "hektisch",
          "d": "Mit viel Stress, Eile und Unruhe.",
          "ar": "مستعجل ومتوتر / فيه زحمة وجري",
          "cat": "Eine Stadt beschreiben",
          "ex": "Morgens ist es am Bahnhof immer sehr hektisch.",
          "dAr": "مليء بالضغط والعجلة والاضطراب.",
          "exAr": "المحطة كل صباح بتكون مزدحمة ومتوترة جدًا.",
          "catAr": "وصف مدينة"
        },
        {
          "w": "gemütlich",
          "d": "Angenehm und ruhig, sodass man sich wohlfühlt.",
          "ar": "مريح / لطيف",
          "cat": "Eine Stadt beschreiben",
          "ex": "Tübingen ist eine gemütliche Universitätsstadt.",
          "dAr": "مريح وهادئ بحيث تشعر فيه بالراحة.",
          "exAr": "توبينغن مدينة جامعية مريحة.",
          "catAr": "وصف مدينة"
        },
        {
          "w": "attraktiv",
          "d": "So, dass es vielen Menschen gefällt.",
          "ar": "جذاب",
          "cat": "Eine Stadt beschreiben",
          "ex": "Viel Kultur macht eine Stadt attraktiv.",
          "dAr": "يعجب ناسًا كثيرين.",
          "exAr": "كثرة الأنشطة الثقافية بتخلّي المدينة جذابة.",
          "catAr": "وصف مدينة"
        },
        {
          "w": "lebendig",
          "d": "Voller Leben und Aktivität.",
          "ar": "مليانة حياة / حيوية",
          "cat": "Eine Stadt beschreiben",
          "ex": "Die Stadt ist alt und gleichzeitig sehr lebendig.",
          "dAr": "مليء بالحياة والنشاط.",
          "exAr": "المدينة قديمة وفي نفس الوقت حيوية جدًا.",
          "catAr": "وصف مدينة"
        },
        {
          "w": "historisch",
          "d": "Aus einer früheren Zeit und wichtig für die Geschichte.",
          "ar": "تاريخي",
          "cat": "Eine Stadt beschreiben",
          "ex": "In der Altstadt gibt es viele historische Gebäude.",
          "dAr": "من زمن سابق وله أهمية تاريخية.",
          "exAr": "في المدينة القديمة مبانٍ تاريخية كتير.",
          "catAr": "وصف مدينة"
        },
        {
          "w": "riesig",
          "d": "Sehr groß.",
          "ar": "ضخم / كبير جدًا",
          "cat": "Eine Stadt beschreiben",
          "ex": "Berlin ist riesig, man braucht Tage, um alles zu sehen.",
          "dAr": "كبير جدًا.",
          "exAr": "برلين ضخمة ومحتاج أيام علشان تشوف كل حاجة.",
          "catAr": "وصف مدينة"
        },
        {
          "w": "miteinander",
          "d": "Die eine Person mit der anderen, also zusammen.",
          "ar": "مع بعض",
          "cat": "Wörter mit -einander",
          "ex": "Meine Freundin und ich haben viel Spaß miteinander.",
          "dAr": "شخص مع الآخر، أي معًا.",
          "exAr": "أنا وصاحبتي بنستمتع جدًا مع بعض.",
          "catAr": "كلمات تعبّر عن العلاقة المتبادلة"
        },
        {
          "w": "nebeneinander",
          "d": "Eine Person oder Sache neben der anderen.",
          "ar": "جنب بعض",
          "cat": "Wörter mit -einander",
          "ex": "In der Altstadt stehen die Häuser eng nebeneinander.",
          "dAr": "شخص أو شيء بجانب الآخر.",
          "exAr": "في المدينة القديمة البيوت لازقة جنب بعض.",
          "catAr": "كلمات تعبّر عن العلاقة المتبادلة"
        },
        {
          "w": "voneinander",
          "d": "Die eine Person von der anderen.",
          "ar": "من بعض",
          "cat": "Wörter mit -einander",
          "ex": "In unserem Team lernen wir viel voneinander.",
          "dAr": "شخص من الآخر.",
          "exAr": "في فريقنا بنتعلّم من بعض كتير.",
          "catAr": "كلمات تعبّر عن العلاقة المتبادلة"
        },
        {
          "w": "füreinander",
          "d": "Die eine Person für die andere.",
          "ar": "لبعض",
          "cat": "Wörter mit -einander",
          "ex": "Meine Großeltern sind immer füreinander da.",
          "dAr": "شخص من أجل الآخر.",
          "exAr": "جدي وجدتي دايمًا موجودين لدعم بعض.",
          "catAr": "كلمات تعبّر عن العلاقة المتبادلة"
        },
        {
          "w": "aneinander",
          "d": "Die eine Person an die andere.",
          "ar": "في بعض (بنفكر في بعض)",
          "cat": "Wörter mit -einander",
          "ex": "Wir sehen uns selten, aber wir denken oft aneinander.",
          "dAr": "شخص تجاه الآخر أو به.",
          "exAr": "نادرًا ما بنشوف بعض، لكن غالبًا بنفكر في بعض.",
          "catAr": "كلمات تعبّر عن العلاقة المتبادلة"
        }
      ],
      "visual": {
        "src": "assets/chapters/chapter-11.webp",
        "alt": "Kapitel 11 · Stadt, Land, Fluss",
        "caption": "Stadt, Land, Fluss"
      },
      "titleAr": "المدينة والريف والنهر",
      "subtitleAr": "Netzwerk neu B1.2 · الوحدة 11"
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
        "note": "Jede Karte enthält eine deutsche Erklärung, einen vollständigen Beispielsatz und die arabische Übersetzung.",
        "noteAr": "كل بطاقة فيها شرح ألماني واضح، مثال كامل، والترجمة العربية.",
        "titleAr": "مفردات مع شرح"
      },
      "vocab": [
        {
          "w": "die Ausgabe",
          "d": "Das Geld, das man für etwas bezahlen muss.",
          "ar": "مصروف / نفقة",
          "cat": "Geld und Finanzen",
          "ex": "Unsere größte monatliche Ausgabe ist die Miete.",
          "dAr": "المال الذي يجب دفعه مقابل شيء.",
          "exAr": "أكبر مصروف شهري عندنا هو الإيجار.",
          "catAr": "المال والشؤون المالية"
        },
        {
          "w": "die Einnahme",
          "d": "Das Geld, das eine Person oder eine Firma bekommt.",
          "ar": "إيراد / دخل",
          "cat": "Geld und Finanzen",
          "ex": "Im Dezember sind die Einnahmen des kleinen Ladens am höchsten.",
          "dAr": "المال الذي يحصل عليه شخص أو شركة.",
          "exAr": "في ديسمبر إيرادات المحل الصغير بتكون في أعلى مستوى.",
          "catAr": "المال والشؤون المالية"
        },
        {
          "w": "die Zahlung",
          "d": "Das Bezahlen einer bestimmten Summe Geld.",
          "ar": "دفع / دفعة",
          "cat": "Geld und Finanzen",
          "ex": "Die Zahlung muss bis zum Monatsende auf unserem Konto sein.",
          "dAr": "دفع مبلغ محدد من المال.",
          "exAr": "المبلغ المدفوع لازم يوصل حسابنا قبل نهاية الشهر.",
          "catAr": "المال والشؤون المالية"
        },
        {
          "w": "die Schulden",
          "d": "Geld, das man sich geliehen hat und zurückzahlen muss.",
          "ar": "ديون",
          "cat": "Geld und Finanzen",
          "ex": "Nach dem Autokauf hatte Tarek hohe Schulden bei der Bank.",
          "dAr": "مال اقترضته ويجب أن ترجعه.",
          "exAr": "بعد شراء العربية طارق كان عليه ديون كبيرة للبنك.",
          "catAr": "المال والشؤون المالية"
        },
        {
          "w": "das Bargeld",
          "d": "Geld in Form von Scheinen und Münzen, also nicht auf dem Konto.",
          "ar": "نقود سائلة / كاش",
          "cat": "Geld und Finanzen",
          "ex": "Auf dem Wochenmarkt kann man oft nur mit Bargeld bezahlen.",
          "dAr": "مال على شكل أوراق وعملات معدنية، وليس في الحساب.",
          "exAr": "في السوق الأسبوعي غالبًا لازم تدفع نقدًا فقط.",
          "catAr": "المال والشؤون المالية"
        },
        {
          "w": "der Schein",
          "d": "Ein Stück Geld aus Papier, zum Beispiel 10 oder 50 Euro.",
          "ar": "ورقة نقدية",
          "cat": "Geld und Finanzen",
          "ex": "Der Fahrkartenautomat nimmt leider keine Scheine, nur Münzen.",
          "dAr": "ورقة نقدية، مثل عشرة أو خمسين يورو.",
          "exAr": "للأسف ماكينة التذاكر مش بتقبل أوراقًا نقدية، عملات معدنية بس.",
          "catAr": "المال والشؤون المالية"
        },
        {
          "w": "die Münze",
          "d": "Ein kleines, rundes Stück Geld aus Metall.",
          "ar": "عملة معدنية",
          "cat": "Geld und Finanzen",
          "ex": "Für den Einkaufswagen brauchst du eine Münze.",
          "dAr": "قطعة نقدية صغيرة مستديرة من المعدن.",
          "exAr": "محتاج عملة معدنية لعربة التسوق.",
          "catAr": "المال والشؤون المالية"
        },
        {
          "w": "das Kleingeld",
          "d": "Münzen, mit denen man kleine Beträge bezahlt.",
          "ar": "فكّة",
          "cat": "Geld und Finanzen",
          "ex": "Hast du Kleingeld für die Parkuhr?",
          "dAr": "عملات معدنية لدفع مبالغ صغيرة.",
          "exAr": "معاك فكّة لعداد الركن؟",
          "catAr": "المال والشؤون المالية"
        },
        {
          "w": "der Geldbetrag",
          "d": "Eine bestimmte Summe Geld.",
          "ar": "مبلغ مالي",
          "cat": "Geld und Finanzen",
          "ex": "Der Geldbetrag wurde gestern auf mein Konto überwiesen.",
          "dAr": "مبلغ محدد من المال.",
          "exAr": "المبلغ اتحوّل لحسابي امبارح.",
          "catAr": "المال والشؤون المالية"
        },
        {
          "w": "der Beleg",
          "d": "Ein Papier, das zeigt, dass man etwas bezahlt hat.",
          "ar": "إيصال / مستند",
          "cat": "Geld und Finanzen",
          "ex": "Heben Sie den Beleg auf, falls Sie die Ware umtauschen möchten.",
          "dAr": "ورقة تثبت أنك دفعت مقابل شيء.",
          "exAr": "احتفظ بالإيصال لو حبيت تبدّل البضاعة.",
          "catAr": "المال والشؤون المالية"
        },
        {
          "w": "gering",
          "d": "Klein oder nicht viel, zum Beispiel bei Kosten oder Mengen.",
          "ar": "قليل / ضئيل",
          "cat": "Geld und Finanzen",
          "ex": "Für das Studentenkonto fallen nur geringe Kosten an.",
          "dAr": "قليل أو صغير، مثلًا في التكاليف أو الكميات.",
          "exAr": "حساب الطالب عليه تكاليف قليلة فقط.",
          "catAr": "المال والشؤون المالية"
        },
        {
          "w": "pauschal",
          "d": "Allgemein und ohne auf Details zu achten; auch: als fester Gesamtbetrag.",
          "ar": "بشكل عام / إجمالي (مبلغ ثابت)",
          "cat": "Geld und Finanzen",
          "ex": "Pauschal kann man sagen, dass alles teurer geworden ist.",
          "dAr": "بشكل عام ومن غير تفاصيل؛ أو بمبلغ إجمالي ثابت.",
          "exAr": "بشكل عام نقدر نقول إن كل حاجة بقت أغلى.",
          "catAr": "المال والشؤون المالية"
        },
        {
          "w": "monatlich",
          "d": "Einmal in jedem Monat.",
          "ar": "شهري / كل شهر",
          "cat": "Geld und Finanzen",
          "ex": "Die monatlichen Kosten für mein Handy sind gering.",
          "dAr": "مرة في كل شهر.",
          "exAr": "تكاليف موبايلي الشهرية قليلة.",
          "catAr": "المال والشؤون المالية"
        },
        {
          "w": "fällig",
          "d": "So, dass etwas zu einem bestimmten Termin bezahlt werden muss.",
          "ar": "مستحق (الدفع)",
          "cat": "Geld und Finanzen",
          "ex": "Die Rechnung ist sofort fällig.",
          "dAr": "يجب دفعه في موعد محدد.",
          "exAr": "الفاتورة مستحقة الدفع فورًا.",
          "catAr": "المال والشؤون المالية"
        },
        {
          "w": "die Rate",
          "d": "Ein Teil einer Summe, den man regelmäßig bezahlt, bis alles bezahlt ist.",
          "ar": "قسط",
          "cat": "Geld und Finanzen",
          "ex": "Ich bezahle den neuen Fernseher in zwölf monatlichen Raten.",
          "dAr": "جزء من مبلغ يُدفع بانتظام حتى سداد المبلغ كله.",
          "exAr": "بدفع ثمن التلفزيون الجديد على اثني عشر قسطًا شهريًا.",
          "catAr": "المال والشؤون المالية"
        },
        {
          "w": "versäumen",
          "d": "Etwas nicht rechtzeitig machen oder etwas verpassen.",
          "ar": "يفوّت / يتأخر عن",
          "cat": "Geld und Finanzen",
          "ex": "Wer die fristgerechte Zahlung versäumt, muss eine Strafe zahlen.",
          "dAr": "عدم فعل شيء في وقته أو تفويت شيء.",
          "exAr": "اللي يفوّت الدفع في الموعد المحدد لازم يدفع غرامة.",
          "catAr": "المال والشؤون المالية"
        },
        {
          "w": "regieren",
          "d": "Ein Land oder eine Gruppe führen und die Macht haben.",
          "ar": "يحكم",
          "cat": "Geld und Finanzen",
          "ex": "Viele Leute sagen, dass Geld die Welt regiert.",
          "dAr": "إدارة بلد أو مجموعة وامتلاك السلطة.",
          "exAr": "ناس كتير بتقول إن الفلوس بتحكم العالم.",
          "catAr": "المال والشؤون المالية"
        },
        {
          "w": "das Einkommen",
          "d": "Das Geld, das man regelmäßig für seine Arbeit oder aus anderen Quellen bekommt.",
          "ar": "دخل",
          "cat": "Geld und Finanzen",
          "ex": "Je höher das Einkommen ist, desto mehr Steuern zahlt man.",
          "dAr": "مال تحصل عليه بانتظام من عملك أو مصادر أخرى.",
          "exAr": "كلما زاد الدخل زادت الضرائب اللي بتدفعها.",
          "catAr": "المال والشؤون المالية"
        },
        {
          "w": "das Gehalt",
          "d": "Das Geld, das Angestellte jeden Monat für ihre Arbeit bekommen.",
          "ar": "مرتّب / راتب",
          "cat": "Geld und Finanzen",
          "ex": "Mein Gehalt kommt immer am Ende des Monats.",
          "dAr": "المال الذي يحصل عليه الموظفون كل شهر مقابل عملهم.",
          "exAr": "مرتبي دايمًا بينزل في نهاية الشهر.",
          "catAr": "المال والشؤون المالية"
        },
        {
          "w": "die Mahnung",
          "d": "Ein Brief, der an eine Rechnung erinnert, die man noch nicht bezahlt hat.",
          "ar": "إنذار بالدفع",
          "cat": "Geld und Finanzen",
          "ex": "Weil ich die Rechnung vergessen hatte, bekam ich eine Mahnung.",
          "dAr": "رسالة تذكير بفاتورة لم تدفعها بعد.",
          "exAr": "لأني كنت نسيت الفاتورة، وصلني تذكير بالدفع.",
          "catAr": "المال والشؤون المالية"
        },
        {
          "w": "leihen",
          "d": "Jemandem etwas für eine bestimmte Zeit geben oder sich etwas von jemandem geben lassen.",
          "ar": "يُسلِّف / يستلف",
          "cat": "Geld und Finanzen",
          "ex": "Kannst du mir bis Freitag zwanzig Euro leihen?",
          "dAr": "إعطاء شخص شيئًا لمدة محددة أو أخذه منه مؤقتًا.",
          "exAr": "ممكن تسلفني عشرين يورو لحد الجمعة؟",
          "catAr": "المال والشؤون المالية"
        },
        {
          "w": "sparen",
          "d": "Geld nicht ausgeben, sondern für später behalten.",
          "ar": "يدّخر / يوفّر",
          "cat": "Geld und Finanzen",
          "ex": "Wir sparen schon seit einem Jahr für eine Reise nach Assuan.",
          "dAr": "عدم صرف المال والاحتفاظ به للمستقبل.",
          "exAr": "بقالنا سنة بنوفّر علشان رحلة لأسوان.",
          "catAr": "المال والشؤون المالية"
        },
        {
          "w": "verdienen",
          "d": "Für seine Arbeit Geld bekommen.",
          "ar": "يكسب (مالًا)",
          "cat": "Geld und Finanzen",
          "ex": "Als Kellnerin verdient Sara nicht besonders viel.",
          "dAr": "الحصول على مال مقابل عملك.",
          "exAr": "سارة مش بتكسب كتير أوي من شغلها كنادلة.",
          "catAr": "المال والشؤون المالية"
        },
        {
          "w": "Geld ausgeben",
          "d": "Geld bezahlen, um etwas zu kaufen.",
          "ar": "يصرف / ينفق المال",
          "cat": "Geld und Finanzen",
          "ex": "Für Kleidung gebe ich nicht viel Geld aus.",
          "dAr": "دفع المال لشراء شيء.",
          "exAr": "مش بصرف فلوس كتير على الملابس.",
          "catAr": "المال والشؤون المالية"
        },
        {
          "w": "knapp bei Kasse sein",
          "d": "Im Moment nur sehr wenig Geld zur Verfügung haben.",
          "ar": "معه فلوس قليلة / مزنوق",
          "cat": "Geld und Finanzen",
          "ex": "Am Ende des Monats bin ich oft knapp bei Kasse.",
          "dAr": "وجود مال قليل جدًا معك حاليًا.",
          "exAr": "في نهاية الشهر غالبًا الفلوس بتكون قليلة معايا.",
          "catAr": "المال والشؤون المالية"
        },
        {
          "w": "das Geld zum Fenster hinauswerfen",
          "d": "Viel Geld für unnötige Dinge ausgeben.",
          "ar": "يبذّر الفلوس",
          "cat": "Geld und Finanzen",
          "ex": "Er wirft sein Geld zum Fenster hinaus und kauft jede Woche neue Schuhe.",
          "dAr": "صرف أموال كثيرة على أشياء غير ضرورية.",
          "exAr": "هو بيهدر فلوسه وبيشتري جزمة جديدة كل أسبوع.",
          "catAr": "المال والشؤون المالية"
        },
        {
          "w": "ins Geld gehen",
          "d": "Ziemlich teuer sein, weil man viel dafür bezahlen muss.",
          "ar": "يكلّف كثيرًا",
          "cat": "Geld und Finanzen",
          "ex": "Eine Hochzeit mit vielen Gästen geht ganz schön ins Geld.",
          "dAr": "أن يكون شيء غاليًا لأنك تدفع له كثيرًا.",
          "exAr": "فرح بضيوف كتير بيكلّف فلوس كتير فعلًا.",
          "catAr": "المال والشؤون المالية"
        },
        {
          "w": "nicht die Welt kosten",
          "d": "Nicht besonders teuer sein.",
          "ar": "ليس غاليًا جدًا",
          "cat": "Geld und Finanzen",
          "ex": "Komm doch mit ins Kino, das kostet ja nicht die Welt!",
          "dAr": "ألا يكون شيء غاليًا جدًا.",
          "exAr": "تعال السينما معانا، دي مش هتكلّف كتير!",
          "catAr": "المال والشؤون المالية"
        },
        {
          "w": "gratis",
          "d": "Ohne dass man dafür bezahlen muss.",
          "ar": "مجانًا",
          "cat": "Geld und Finanzen",
          "ex": "Zu jedem Kaffee gibt es heute einen Keks gratis.",
          "dAr": "من غير دفع مقابل.",
          "exAr": "النهارده مع كل قهوة فيه بسكوتة مجانًا.",
          "catAr": "المال والشؤون المالية"
        },
        {
          "w": "kostenlos",
          "d": "So, dass etwas nichts kostet.",
          "ar": "مجاني",
          "cat": "Geld und Finanzen",
          "ex": "Überweisungen im Inland sind bei meiner Bank kostenlos.",
          "dAr": "لا يكلّف شيئًا.",
          "exAr": "التحويلات المحلية مجانية في بنكي.",
          "catAr": "المال والشؤون المالية"
        },
        {
          "w": "umsonst",
          "d": "Ohne Geld zu bezahlen; auch: ohne Erfolg.",
          "ar": "ببلاش / بلا فائدة",
          "cat": "Geld und Finanzen",
          "ex": "Am Sonntag ist der Eintritt ins Museum umsonst.",
          "dAr": "من غير دفع مال؛ أو من غير نجاح.",
          "exAr": "يوم الأحد دخول المتحف مجاني.",
          "catAr": "المال والشؤون المالية"
        },
        {
          "w": "die Steuer",
          "d": "Geld, das man an den Staat zahlen muss.",
          "ar": "ضريبة",
          "cat": "Geld und Finanzen",
          "ex": "Von meinem Gehalt geht fast ein Drittel für Steuern weg.",
          "dAr": "مال يجب أن تدفعه للدولة.",
          "exAr": "تقريبًا ثلث مرتبي بيروح للضرائب.",
          "catAr": "المال والشؤون المالية"
        },
        {
          "w": "der Gewinn",
          "d": "Das Geld, das eine Firma nach allen Kosten übrig hat.",
          "ar": "ربح",
          "cat": "Geld und Finanzen",
          "ex": "Die Firma hat in diesem Jahr einen hohen Gewinn gemacht.",
          "dAr": "المال الذي يتبقى للشركة بعد كل التكاليف.",
          "exAr": "الشركة حققت ربحًا كبيرًا السنة دي.",
          "catAr": "المال والشؤون المالية"
        },
        {
          "w": "die Geldbörse",
          "d": "Eine kleine Tasche für Geld und Karten.",
          "ar": "محفظة نقود",
          "cat": "Geld und Finanzen",
          "ex": "Im Bus hat jemand seine Geldbörse verloren.",
          "dAr": "حقيبة صغيرة لحفظ المال والبطاقات.",
          "exAr": "حد فقد محفظته في الأتوبيس.",
          "catAr": "المال والشؤون المالية"
        },
        {
          "w": "das Bankgeschäft",
          "d": "Eine Sache, die man bei einer Bank erledigt, zum Beispiel eine Überweisung.",
          "ar": "معاملة بنكية",
          "cat": "Bankgeschäfte",
          "ex": "Die meisten Bankgeschäfte erledige ich heute online.",
          "dAr": "معاملة تنجزها لدى بنك، مثل تحويل الأموال.",
          "exAr": "حاليًا بعمل معظم معاملاتي البنكية أونلاين.",
          "catAr": "المعاملات البنكية"
        },
        {
          "w": "der/die Bankangestellte",
          "d": "Eine Person, die in einer Bank arbeitet und die Kunden berät.",
          "ar": "موظف / موظفة بنك",
          "cat": "Bankgeschäfte",
          "ex": "Die Bankangestellte hat mir alle Gebühren genau erklärt.",
          "dAr": "شخص يعمل بالبنك وينصح العملاء.",
          "exAr": "موظفة البنك شرحت لي كل الرسوم بالتفصيل.",
          "catAr": "المعاملات البنكية"
        },
        {
          "w": "die BIC",
          "d": "Ein internationaler Code, mit dem man eine Bank genau erkennt.",
          "ar": "رمز تعريف البنك (BIC)",
          "cat": "Bankgeschäfte",
          "ex": "Für eine Überweisung ins Ausland brauchen Sie auch die BIC.",
          "dAr": "رمز دولي يحدد البنك بدقة.",
          "exAr": "للتحويل للخارج محتاج رمز BIC كمان.",
          "catAr": "المعاملات البنكية"
        },
        {
          "w": "die IBAN",
          "d": "Die internationale Nummer eines Bankkontos.",
          "ar": "رقم الحساب الدولي (IBAN)",
          "cat": "Bankgeschäfte",
          "ex": "Schick mir bitte deine IBAN, dann überweise ich dir das Geld.",
          "dAr": "الرقم الدولي للحساب البنكي.",
          "exAr": "ابعت لي رقم IBAN لو سمحت علشان أحوّل لك الفلوس.",
          "catAr": "المعاملات البنكية"
        },
        {
          "w": "die Kontoeröffnung",
          "d": "Das Anlegen eines neuen Kontos bei einer Bank.",
          "ar": "فتح حساب",
          "cat": "Bankgeschäfte",
          "ex": "Für die Kontoeröffnung brauchen Sie Ihren Pass und eine Meldebescheinigung.",
          "dAr": "إنشاء حساب جديد لدى بنك.",
          "exAr": "لفتح الحساب محتاج جواز سفرك وشهادة تسجيل السكن.",
          "catAr": "المعاملات البنكية"
        },
        {
          "w": "die Kontodaten",
          "d": "Die Informationen zu einem Konto, zum Beispiel die IBAN und der Name der Bank.",
          "ar": "بيانات الحساب",
          "cat": "Bankgeschäfte",
          "ex": "Ich habe meine Kontodaten in das Formular eingetragen.",
          "dAr": "معلومات الحساب، مثل IBAN واسم البنك.",
          "exAr": "كتبت بيانات حسابي في الاستمارة.",
          "catAr": "المعاملات البنكية"
        },
        {
          "w": "die Kontoführungsgebühr",
          "d": "Das Geld, das man der Bank regelmäßig für ein Konto bezahlt.",
          "ar": "رسوم إدارة الحساب",
          "cat": "Bankgeschäfte",
          "ex": "Für Studenten gibt es bei dieser Bank keine Kontoführungsgebühr.",
          "dAr": "مال تدفعه بانتظام للبنك مقابل إدارة حساب.",
          "exAr": "البنك ده ما بياخدش رسوم إدارة حساب من الطلاب.",
          "catAr": "المعاملات البنكية"
        },
        {
          "w": "der Kontoauszug",
          "d": "Eine Liste, die alle Zahlungen und den Stand eines Kontos zeigt.",
          "ar": "كشف حساب",
          "cat": "Bankgeschäfte",
          "ex": "Auf dem Kontoauszug sehe ich, wofür ich mein Geld ausgegeben habe.",
          "dAr": "قائمة تعرض كل المدفوعات ورصيد الحساب.",
          "exAr": "من كشف الحساب بشوف صرفت فلوسي على إيه.",
          "catAr": "المعاملات البنكية"
        },
        {
          "w": "der Dauerauftrag",
          "d": "Ein Auftrag an die Bank, regelmäßig den gleichen Betrag zu überweisen.",
          "ar": "أمر تحويل دائم",
          "cat": "Bankgeschäfte",
          "ex": "Die Miete bezahle ich per Dauerauftrag.",
          "dAr": "أمر للبنك بتحويل نفس المبلغ بانتظام.",
          "exAr": "بدفع الإيجار بأمر تحويل دائم.",
          "catAr": "المعاملات البنكية"
        },
        {
          "w": "der Kredit",
          "d": "Geld, das man von einer Bank leiht und mit Zinsen zurückzahlt.",
          "ar": "قرض",
          "cat": "Bankgeschäfte",
          "ex": "Für die neue Küche brauchen wir einen Kredit.",
          "dAr": "مال تقترضه من البنك وتعيده مع فوائد.",
          "exAr": "محتاجين قرضًا للمطبخ الجديد.",
          "catAr": "المعاملات البنكية"
        },
        {
          "w": "einen Kredit aufnehmen",
          "d": "Sich bei einer Bank Geld leihen.",
          "ar": "يأخذ قرضًا",
          "cat": "Bankgeschäfte",
          "ex": "Herr Richter möchte für seine Wohnung einen Kredit aufnehmen.",
          "dAr": "اقتراض المال من بنك.",
          "exAr": "السيد ريختر عايز ياخد قرضًا لشقته.",
          "catAr": "المعاملات البنكية"
        },
        {
          "w": "fristgerecht",
          "d": "Innerhalb der Zeit, die man vereinbart hat.",
          "ar": "في الموعد المحدد",
          "cat": "Bankgeschäfte",
          "ex": "Bitte bezahlen Sie die Rechnung fristgerecht bis zum 15. März.",
          "dAr": "داخل الفترة الزمنية المتفق عليها.",
          "exAr": "ادفع الفاتورة في موعدها المحدد، بحد أقصى ١٥ مارس لو سمحت.",
          "catAr": "المعاملات البنكية"
        },
        {
          "w": "abhängig (von + D)",
          "d": "So, dass etwas durch eine andere Sache bestimmt wird.",
          "ar": "متوقّف على / يعتمد على",
          "cat": "Bankgeschäfte",
          "ex": "Die Zinsen sind von der Höhe des Kredits abhängig.",
          "dAr": "يتحدد بناءً على شيء آخر.",
          "exAr": "الفوائد بتعتمد على قيمة القرض.",
          "catAr": "المعاملات البنكية"
        },
        {
          "w": "anfallen",
          "d": "Als Kosten oder als Arbeit entstehen.",
          "ar": "يترتّب (تكاليف / رسوم)",
          "cat": "Bankgeschäfte",
          "ex": "Für Überweisungen ins Ausland fallen Gebühren an.",
          "dAr": "ظهور تكاليف أو مهام عمل.",
          "exAr": "التحويلات للخارج عليها رسوم.",
          "catAr": "المعاملات البنكية"
        },
        {
          "w": "angeben",
          "d": "Eine Information nennen oder in ein Formular schreiben.",
          "ar": "يذكر / يدوّن (بيانات)",
          "cat": "Bankgeschäfte",
          "ex": "Bitte geben Sie Ihren Namen und Ihre Adresse an.",
          "dAr": "ذكر معلومة أو كتابتها في استمارة.",
          "exAr": "اذكر اسمك وعنوانك لو سمحت.",
          "catAr": "المعاملات البنكية"
        },
        {
          "w": "eintragen",
          "d": "Etwas in eine Liste oder in ein Formular schreiben.",
          "ar": "يسجّل / يكتب في خانة",
          "cat": "Bankgeschäfte",
          "ex": "Tragen Sie Ihre neue PIN in das Feld ein.",
          "dAr": "كتابة شيء في قائمة أو استمارة.",
          "exAr": "اكتب رقم PIN الجديد في الخانة.",
          "catAr": "المعاملات البنكية"
        },
        {
          "w": "einzahlen",
          "d": "Geld auf ein Konto bringen.",
          "ar": "يودع (مالًا)",
          "cat": "Bankgeschäfte",
          "ex": "Ich möchte 500 Euro auf mein Sparkonto einzahlen.",
          "dAr": "إضافة مال إلى حساب.",
          "exAr": "عايز أودع خمسمئة يورو في حساب التوفير.",
          "catAr": "المعاملات البنكية"
        },
        {
          "w": "gutschreiben",
          "d": "Einen Betrag auf einem Konto als Plus buchen.",
          "ar": "يضيف المبلغ إلى الحساب",
          "cat": "Bankgeschäfte",
          "ex": "Der Betrag wird Ihrem Konto morgen gutgeschrieben.",
          "dAr": "تسجيل مبلغ كإضافة لرصيد الحساب.",
          "exAr": "المبلغ هيُضاف لحسابك بكرة.",
          "catAr": "المعاملات البنكية"
        },
        {
          "w": "überziehen",
          "d": "Mehr Geld von einem Konto nehmen, als darauf ist.",
          "ar": "يسحب على المكشوف",
          "cat": "Bankgeschäfte",
          "ex": "Wer sein Konto überzieht, muss hohe Zinsen bezahlen.",
          "dAr": "سحب مال من الحساب أكثر من الموجود فيه.",
          "exAr": "اللي يسحب على المكشوف لازم يدفع فوائد عالية.",
          "catAr": "المعاملات البنكية"
        },
        {
          "w": "der Zins",
          "d": "Geld, das man für einen Kredit zahlt oder für gespartes Geld bekommt.",
          "ar": "فائدة (بنكية)",
          "cat": "Bankgeschäfte",
          "ex": "Die Zinsen für diesen Kredit sind ziemlich hoch.",
          "dAr": "مال يُدفع مقابل قرض أو يُكتسب على المدخرات.",
          "exAr": "فوائد القرض ده عالية إلى حد كبير.",
          "catAr": "المعاملات البنكية"
        },
        {
          "w": "der Verlust",
          "d": "Die Situation, in der man etwas verloren hat.",
          "ar": "فقدان / خسارة",
          "cat": "Bankgeschäfte",
          "ex": "Melden Sie den Verlust Ihrer Bankkarte bitte sofort.",
          "dAr": "حالة فقدانك شيئًا.",
          "exAr": "بلّغ فورًا عن فقدان بطاقتك البنكية لو سمحت.",
          "catAr": "المعاملات البنكية"
        },
        {
          "w": "die Kopie",
          "d": "Ein Papier, das genauso aussieht wie das Original.",
          "ar": "نسخة / صورة",
          "cat": "Bankgeschäfte",
          "ex": "Schicken Sie uns bitte eine Kopie Ihres Ausweises.",
          "dAr": "ورقة لها نفس شكل الأصل.",
          "exAr": "ابعت لنا صورة من بطاقة هويتك لو سمحت.",
          "catAr": "المعاملات البنكية"
        },
        {
          "w": "das Konto",
          "d": "Ein Vertrag mit einer Bank, über den man Geld bekommt, aufbewahrt und bezahlt.",
          "ar": "حساب (بنكي)",
          "cat": "Bankgeschäfte",
          "ex": "Ich habe mein Konto bei einer Online-Bank.",
          "dAr": "اتفاق مع بنك يتيح استلام المال وحفظه ودفعه.",
          "exAr": "حسابي في بنك إلكتروني.",
          "catAr": "المعاملات البنكية"
        },
        {
          "w": "der Betrag",
          "d": "Eine bestimmte Summe Geld, die man bezahlt oder bekommt.",
          "ar": "مبلغ",
          "cat": "Bankgeschäfte",
          "ex": "Der überwiesene Betrag ist schon angekommen.",
          "dAr": "مبلغ محدد تدفعه أو تحصل عليه.",
          "exAr": "المبلغ المحوّل وصل بالفعل.",
          "catAr": "المعاملات البنكية"
        },
        {
          "w": "die Gebühr",
          "d": "Geld, das man für einen Service bezahlen muss.",
          "ar": "رسم / رسوم",
          "cat": "Bankgeschäfte",
          "ex": "Für die Kreditkarte verlangt die Bank eine jährliche Gebühr.",
          "dAr": "مال تدفعه مقابل خدمة.",
          "exAr": "البنك بيطلب رسومًا سنوية لبطاقة الائتمان.",
          "catAr": "المعاملات البنكية"
        },
        {
          "w": "die Überweisung",
          "d": "Das Schicken von Geld von einem Konto auf ein anderes.",
          "ar": "تحويل (بنكي)",
          "cat": "Bankgeschäfte",
          "ex": "Die Überweisung ist schon bei meinem Vermieter angekommen.",
          "dAr": "إرسال المال من حساب لآخر.",
          "exAr": "التحويل وصل لصاحب البيت بالفعل.",
          "catAr": "المعاملات البنكية"
        },
        {
          "w": "überweisen",
          "d": "Geld von einem Konto auf ein anderes schicken.",
          "ar": "يحوّل (مالًا)",
          "cat": "Bankgeschäfte",
          "ex": "Ich überweise dir das Geld für das Konzert heute Abend.",
          "dAr": "إرسال مال من حساب إلى حساب آخر.",
          "exAr": "هحوّل لك فلوس الحفلة الموسيقية مساء النهارده.",
          "catAr": "المعاملات البنكية"
        },
        {
          "w": "abheben",
          "d": "Geld von seinem Konto nehmen, zum Beispiel am Automaten.",
          "ar": "يسحب (مالًا)",
          "cat": "Bankgeschäfte",
          "ex": "Am Wochenende hebe ich immer etwas Bargeld ab.",
          "dAr": "أخذ مال من حسابك، مثلًا من ماكينة.",
          "exAr": "في الويك إند بسحب شوية فلوس نقدية دايمًا.",
          "catAr": "المعاملات البنكية"
        },
        {
          "w": "eröffnen",
          "d": "Etwas neu beginnen oder anlegen, zum Beispiel ein Konto oder ein Geschäft.",
          "ar": "يفتح (حسابًا) / يفتتح",
          "cat": "Bankgeschäfte",
          "ex": "Mit achtzehn habe ich mein erstes Konto eröffnet.",
          "dAr": "بدء شيء جديد أو إنشاؤه، مثل حساب أو متجر.",
          "exAr": "فتحت أول حساب لي وأنا عندي ثماني عشرة سنة.",
          "catAr": "المعاملات البنكية"
        },
        {
          "w": "sperren",
          "d": "Dafür sorgen, dass man etwas nicht mehr benutzen kann.",
          "ar": "يوقف / يجمّد (بطاقة)",
          "cat": "Bankgeschäfte",
          "ex": "Lassen Sie Ihre Karte sofort sperren, wenn sie gestohlen wurde.",
          "dAr": "جعل شيء غير قابل للاستخدام.",
          "exAr": "اطلب إيقاف بطاقتك فورًا لو اتسرقت.",
          "catAr": "المعاملات البنكية"
        },
        {
          "w": "beantragen",
          "d": "Offiziell und meistens schriftlich um etwas bitten.",
          "ar": "يقدّم طلبًا للحصول على",
          "cat": "Bankgeschäfte",
          "ex": "Ich habe bei meiner Bank eine Kreditkarte beantragt.",
          "dAr": "طلب شيء رسميًا وغالبًا كتابةً.",
          "exAr": "قدّمت طلب بطاقة ائتمان في بنكي.",
          "catAr": "المعاملات البنكية"
        },
        {
          "w": "der Antrag",
          "d": "Ein Formular, mit dem man offiziell um etwas bittet.",
          "ar": "طلب (رسمي)",
          "cat": "Bankgeschäfte",
          "ex": "Wir können nur vollständig ausgefüllte Anträge bearbeiten.",
          "dAr": "استمارة تطلب بها شيئًا رسميًا.",
          "exAr": "نقدر نعالج الطلبات المكتملة البيانات فقط.",
          "catAr": "المعاملات البنكية"
        },
        {
          "w": "die Bankkarte",
          "d": "Eine Karte von der Bank, mit der man bezahlen und Geld abheben kann.",
          "ar": "بطاقة البنك",
          "cat": "Bankgeschäfte",
          "ex": "Mit der Bankkarte kann ich an jedem Automaten Geld abheben.",
          "dAr": "بطاقة من البنك تتيح الدفع وسحب الأموال.",
          "exAr": "بالبطاقة البنكية أقدر أسحب فلوس من أي ماكينة.",
          "catAr": "المعاملات البنكية"
        },
        {
          "w": "die Kreditkarte",
          "d": "Eine Karte, mit der man bezahlt, aber das Geld erst später vom Konto abgebucht wird.",
          "ar": "بطاقة ائتمان",
          "cat": "Bankgeschäfte",
          "ex": "Im Ausland bezahle ich meistens mit der Kreditkarte.",
          "dAr": "بطاقة للدفع تُخصم الأموال مقابلها من الحساب لاحقًا.",
          "exAr": "في الخارج غالبًا بدفع ببطاقة الائتمان.",
          "catAr": "المعاملات البنكية"
        },
        {
          "w": "die Geheimzahl",
          "d": "Eine geheime Nummer, die man für die Bankkarte braucht.",
          "ar": "الرقم السري (PIN)",
          "cat": "Bankgeschäfte",
          "ex": "Achten Sie darauf, dass niemand Ihre Geheimzahl sieht.",
          "dAr": "رقم سري تحتاجه لاستخدام البطاقة البنكية.",
          "exAr": "احرص إن محدش يشوف رقمك السري.",
          "catAr": "المعاملات البنكية"
        },
        {
          "w": "der Geldautomat",
          "d": "Eine Maschine, an der man mit einer Karte Bargeld bekommt.",
          "ar": "ماكينة صرف آلي",
          "cat": "Bankgeschäfte",
          "ex": "Der Geldautomat hat meine Karte nicht mehr herausgegeben.",
          "dAr": "ماكينة تحصل منها على نقد باستخدام بطاقة.",
          "exAr": "ماكينة الصراف ما رجّعتش بطاقتي.",
          "catAr": "المعاملات البنكية"
        },
        {
          "w": "die Konditionen",
          "d": "Die Bedingungen, zum Beispiel Gebühren und Zinsen, zu denen eine Bank etwas anbietet.",
          "ar": "الشروط (البنكية)",
          "cat": "Bankgeschäfte",
          "ex": "Ich habe noch ein paar Fragen zu den Konditionen.",
          "dAr": "الشروط التي يقدّم بها البنك خدمة، مثل الرسوم والفوائد.",
          "exAr": "عندي لسه شوية أسئلة عن الشروط.",
          "catAr": "المعاملات البنكية"
        },
        {
          "w": "zurückzahlen",
          "d": "Geld, das man geliehen hat, wieder zurückgeben.",
          "ar": "يسدّد / يردّ المال",
          "cat": "Bankgeschäfte",
          "ex": "Ich könnte monatlich 200 Euro zurückzahlen.",
          "dAr": "إرجاع مال اقترضته.",
          "exAr": "ممكن أسدّد مئتي يورو شهريًا.",
          "catAr": "المعاملات البنكية"
        },
        {
          "w": "das Online-Banking",
          "d": "Bankgeschäfte, die man über das Internet erledigt.",
          "ar": "الخدمات البنكية عبر الإنترنت",
          "cat": "Online-Banking",
          "ex": "Mit Online-Banking kann ich Überweisungen auch nachts machen.",
          "dAr": "معاملات بنكية تُنجز عبر الإنترنت.",
          "exAr": "بالخدمات البنكية الإلكترونية أقدر أحوّل فلوس حتى بالليل.",
          "catAr": "الخدمات البنكية عبر الإنترنت"
        },
        {
          "w": "der Benutzername",
          "d": "Der Name, mit dem man sich auf einer Webseite oder in einer App anmeldet.",
          "ar": "اسم المستخدم",
          "cat": "Online-Banking",
          "ex": "Ich habe leider meinen Benutzernamen vergessen.",
          "dAr": "الاسم الذي تسجّل به دخولك لموقع أو تطبيق.",
          "exAr": "للأسف نسيت اسم المستخدم بتاعي.",
          "catAr": "الخدمات البنكية عبر الإنترنت"
        },
        {
          "w": "sich einloggen",
          "d": "Sich mit Benutzernamen und Passwort auf einer Webseite oder in einer App anmelden.",
          "ar": "يسجّل الدخول",
          "cat": "Online-Banking",
          "ex": "Ich logge mich jeden Morgen in meine Banking-App ein.",
          "dAr": "الدخول لموقع أو تطبيق باسم مستخدم وكلمة مرور.",
          "exAr": "بسجّل دخولي لتطبيق البنك كل صباح.",
          "catAr": "الخدمات البنكية عبر الإنترنت"
        },
        {
          "w": "der Log-in",
          "d": "Die Anmeldung auf einer Webseite oder in einer App.",
          "ar": "تسجيل الدخول",
          "cat": "Online-Banking",
          "ex": "Beim nächsten Log-in sehen Sie die neue Ansicht.",
          "dAr": "تسجيل الدخول لموقع أو تطبيق.",
          "exAr": "في تسجيل الدخول القادم هتشوف الواجهة الجديدة.",
          "catAr": "الخدمات البنكية عبر الإنترنت"
        },
        {
          "w": "die Fotoüberweisung",
          "d": "Eine Überweisung, bei der man ein Foto der Rechnung hochlädt und die Daten automatisch übernommen werden.",
          "ar": "تحويل بتصوير الفاتورة",
          "cat": "Online-Banking",
          "ex": "Mit der Fotoüberweisung muss ich die IBAN nicht mehr abtippen.",
          "dAr": "تحويل برفع صورة الفاتورة واستخراج بياناتها تلقائيًا.",
          "exAr": "بالتحويل عن طريق صورة الفاتورة مش محتاج أكتب IBAN يدويًا.",
          "catAr": "الخدمات البنكية عبر الإنترنت"
        },
        {
          "w": "die Ansicht",
          "d": "Die Art, wie etwas auf dem Bildschirm gezeigt wird; auch: die Meinung.",
          "ar": "طريقة العرض / رأي",
          "cat": "Online-Banking",
          "ex": "Die Ansicht können Sie auf der Webseite jederzeit ändern.",
          "dAr": "طريقة عرض شيء على الشاشة؛ وقد تعني الرأي أيضًا.",
          "exAr": "ممكن تغيّر طريقة العرض على الموقع في أي وقت.",
          "catAr": "الخدمات البنكية عبر الإنترنت"
        },
        {
          "w": "das Menü",
          "d": "Eine Liste auf dem Bildschirm, aus der man eine Funktion wählt.",
          "ar": "قائمة (على الشاشة)",
          "cat": "Online-Banking",
          "ex": "Klicken Sie im Menü auf „Mein Konto“.",
          "dAr": "قائمة على الشاشة تختار منها وظيفة.",
          "exAr": "اضغط في القائمة على «حسابي».",
          "catAr": "الخدمات البنكية عبر الإنترنت"
        },
        {
          "w": "das Passwort",
          "d": "Ein geheimes Wort, mit dem man sich in einem Programm anmeldet.",
          "ar": "كلمة السر",
          "cat": "Online-Banking",
          "ex": "Wähl ein sicheres Passwort mit Zahlen und Sonderzeichen.",
          "dAr": "كلمة سرية للدخول لبرنامج.",
          "exAr": "اختار كلمة مرور آمنة فيها أرقام ورموز خاصة.",
          "catAr": "الخدمات البنكية عبر الإنترنت"
        },
        {
          "w": "hochladen",
          "d": "Eine Datei von seinem Gerät ins Internet schicken.",
          "ar": "يرفع (ملفًا)",
          "cat": "Online-Banking",
          "ex": "Laden Sie einfach ein Foto der Rechnung hoch.",
          "dAr": "إرسال ملف من جهازك إلى الإنترنت.",
          "exAr": "ارفع ببساطة صورة الفاتورة.",
          "catAr": "الخدمات البنكية عبر الإنترنت"
        },
        {
          "w": "die Globalisierung",
          "d": "Die immer engere Verbindung von Wirtschaft, Kultur und Kommunikation auf der ganzen Welt.",
          "ar": "العولمة",
          "cat": "Globalisierung",
          "ex": "Durch die Globalisierung gibt es im Supermarkt Obst aus aller Welt.",
          "dAr": "الترابط المتزايد بين الاقتصاد والثقافة والتواصل في العالم كله.",
          "exAr": "بسبب العولمة فيه فاكهة من كل أنحاء العالم في السوبرماركت.",
          "catAr": "العولمة"
        },
        {
          "w": "global",
          "d": "So, dass es die ganze Welt betrifft.",
          "ar": "عالمي",
          "cat": "Globalisierung",
          "ex": "Der Klimawandel ist ein globales Problem.",
          "dAr": "يشمل العالم كله.",
          "exAr": "تغيّر المناخ مشكلة عالمية.",
          "catAr": "العولمة"
        },
        {
          "w": "fortschrittlich",
          "d": "Modern und offen für neue Ideen und Entwicklungen.",
          "ar": "تقدّمي / متطوّر",
          "cat": "Globalisierung",
          "ex": "Für die damalige Zeit war diese Idee sehr fortschrittlich.",
          "dAr": "حديث ومنفتح على أفكار وتطورات جديدة.",
          "exAr": "بالنسبة للزمن ده الفكرة كانت متقدمة جدًا.",
          "catAr": "العولمة"
        },
        {
          "w": "der Konsument",
          "d": "Eine Person, die Waren kauft und benutzt.",
          "ar": "مستهلك",
          "cat": "Globalisierung",
          "ex": "Die Konsumenten wollen billige, aber gute Produkte.",
          "dAr": "شخص يشتري البضائع ويستخدمها.",
          "exAr": "المستهلكون عايزين منتجات رخيصة لكن جيدة.",
          "catAr": "العولمة"
        },
        {
          "w": "die Konsumentin",
          "d": "Eine Frau, die Waren kauft und benutzt.",
          "ar": "مستهلِكة",
          "cat": "Globalisierung",
          "ex": "Als Konsumentin achte ich darauf, woher meine Kleidung kommt.",
          "dAr": "امرأة تشتري البضائع وتستخدمها.",
          "exAr": "بصفتي مستهلكة بهتم أعرف ملابسي جاية منين.",
          "catAr": "العولمة"
        },
        {
          "w": "der Verbraucher",
          "d": "Eine Person, die Produkte kauft und verbraucht.",
          "ar": "مستهلك",
          "cat": "Globalisierung",
          "ex": "Viele Waren reisen um die halbe Welt, bevor sie beim Verbraucher ankommen.",
          "dAr": "شخص يشتري المنتجات ويستهلكها.",
          "exAr": "بضائع كتير بتسافر نصف العالم قبل ما توصل للمستهلك.",
          "catAr": "العولمة"
        },
        {
          "w": "die Verbraucherin",
          "d": "Eine Frau, die Produkte kauft und verbraucht.",
          "ar": "مستهلِكة",
          "cat": "Globalisierung",
          "ex": "Jede Verbraucherin kann mit ihrem Einkauf etwas für die Umwelt tun.",
          "dAr": "امرأة تشتري المنتجات وتستهلكها.",
          "exAr": "كل مستهلكة تقدر تساعد البيئة من خلال مشترياتها.",
          "catAr": "العولمة"
        },
        {
          "w": "der Weltmarkt",
          "d": "Der Handel mit Waren zwischen allen Ländern der Welt.",
          "ar": "السوق العالمية",
          "cat": "Globalisierung",
          "ex": "Kleine Firmen haben es auf dem Weltmarkt oft schwer.",
          "dAr": "تجارة البضائع بين كل بلاد العالم.",
          "exAr": "الشركات الصغيرة غالبًا بتواجه صعوبة في السوق العالمية.",
          "catAr": "العولمة"
        },
        {
          "w": "das Produktangebot",
          "d": "Alle Produkte, die man an einem Ort oder bei einer Firma kaufen kann.",
          "ar": "تشكيلة المنتجات المعروضة",
          "cat": "Globalisierung",
          "ex": "Das Produktangebot im Internet ist riesig.",
          "dAr": "كل المنتجات المتاحة للشراء في مكان أو من شركة.",
          "exAr": "المنتجات المعروضة على الإنترنت كثيرة جدًا.",
          "catAr": "العولمة"
        },
        {
          "w": "verlegen",
          "d": "Etwas an einen anderen Ort oder auf eine andere Zeit bringen.",
          "ar": "ينقل (مكانًا أو موعدًا)",
          "cat": "Globalisierung",
          "ex": "Die Firma hat ihre Produktion ins Ausland verlegt.",
          "dAr": "نقل شيء لمكان آخر أو تغيير موعده.",
          "exAr": "الشركة نقلت إنتاجها للخارج.",
          "catAr": "العولمة"
        },
        {
          "w": "der Wohlstand",
          "d": "Die Situation, in der Menschen genug Geld haben und gut leben können.",
          "ar": "رخاء / رفاهية",
          "cat": "Globalisierung",
          "ex": "In vielen Ländern ist der Wohlstand in den letzten Jahren gewachsen.",
          "dAr": "حالة امتلاك الناس مالًا كافيًا وقدرتهم على العيش جيدًا.",
          "exAr": "الرخاء زاد في بلاد كتير في السنين الأخيرة.",
          "catAr": "العولمة"
        },
        {
          "w": "die Forschung",
          "d": "Die wissenschaftliche Arbeit, mit der man Neues herausfinden will.",
          "ar": "البحث العلمي",
          "cat": "Globalisierung",
          "ex": "Die Forschung an neuen Medikamenten braucht internationale Zusammenarbeit.",
          "dAr": "عمل علمي لاكتشاف أشياء جديدة.",
          "exAr": "البحث في أدوية جديدة محتاج تعاونًا دوليًا.",
          "catAr": "العولمة"
        },
        {
          "w": "die Wissenschaft",
          "d": "Das systematische Sammeln und Prüfen von Wissen, zum Beispiel an Universitäten.",
          "ar": "العلم",
          "cat": "Globalisierung",
          "ex": "Meine Schwester möchte später in der Wissenschaft arbeiten.",
          "dAr": "جمع المعرفة وفحصها بطريقة منظمة، مثلًا في الجامعات.",
          "exAr": "أختي عايزة تشتغل في المجال العلمي مستقبلًا.",
          "catAr": "العولمة"
        },
        {
          "w": "nützen",
          "d": "Hilfreich sein oder einen Vorteil bringen.",
          "ar": "يفيد / ينفع",
          "cat": "Globalisierung",
          "ex": "Nützt die Globalisierung wirklich allen Menschen?",
          "dAr": "أن يكون شيء مفيدًا أو يقدّم ميزة.",
          "exAr": "هل العولمة فعلًا بتنفع كل الناس؟",
          "catAr": "العولمة"
        },
        {
          "w": "profitieren (von + D)",
          "d": "Von einer Sache einen Vorteil oder Nutzen haben.",
          "ar": "يستفيد (من)",
          "cat": "Globalisierung",
          "ex": "Viele Länder profitieren vom internationalen Handel.",
          "dAr": "الحصول على ميزة أو فائدة من شيء.",
          "exAr": "بلاد كتير بتستفيد من التجارة الدولية.",
          "catAr": "العولمة"
        },
        {
          "w": "problematisch",
          "d": "Schwierig und mit Problemen verbunden.",
          "ar": "إشكالي / فيه مشاكل",
          "cat": "Globalisierung",
          "ex": "Ich finde es problematisch, dass die Mieten so stark steigen.",
          "dAr": "صعب ومرتبط بمشاكل.",
          "exAr": "شايف إن الزيادة الكبيرة في الإيجارات مشكلة.",
          "catAr": "العولمة"
        },
        {
          "w": "pro",
          "d": "Für eine Sache.",
          "ar": "مع / مؤيّد",
          "cat": "Globalisierung",
          "ex": "Die meisten im Kurs waren pro Homeoffice.",
          "dAr": "مؤيّد لشيء.",
          "exAr": "معظم الموجودين في الكورس كانوا مؤيّدين للعمل من البيت.",
          "catAr": "العولمة"
        },
        {
          "w": "contra",
          "d": "Gegen eine Sache.",
          "ar": "ضد / معارض",
          "cat": "Globalisierung",
          "ex": "Bist du pro oder contra Globalisierung?",
          "dAr": "معارض لشيء.",
          "exAr": "إنت مؤيّد ولا معارض للعولمة؟",
          "catAr": "العولمة"
        },
        {
          "w": "der Pluspunkt",
          "d": "Ein Vorteil oder eine positive Seite.",
          "ar": "نقطة إيجابية / ميزة",
          "cat": "Globalisierung",
          "ex": "Ein weiterer Pluspunkt ist die niedrige Gebühr.",
          "dAr": "ميزة أو جانب إيجابي.",
          "exAr": "ميزة إضافية هي الرسوم المنخفضة.",
          "catAr": "العولمة"
        },
        {
          "w": "die Konkurrenz",
          "d": "Die anderen Firmen oder Personen, die das Gleiche anbieten oder erreichen wollen.",
          "ar": "منافسة / المنافسون",
          "cat": "Globalisierung",
          "ex": "Durch die große Konkurrenz sinken die Preise.",
          "dAr": "الشركات أو الأشخاص الآخرون الذين يقدّمون نفس الشيء أو يريدون نفس الهدف.",
          "exAr": "بسبب المنافسة الكبيرة الأسعار بتنخفض.",
          "catAr": "العولمة"
        },
        {
          "w": "der Fortschritt",
          "d": "Eine positive Entwicklung zu etwas Besserem oder Neuem.",
          "ar": "تقدّم",
          "cat": "Globalisierung",
          "ex": "Der technische Fortschritt verändert unsere Arbeitswelt.",
          "dAr": "تطور إيجابي لشيء أفضل أو جديد.",
          "exAr": "التقدم التقني بيغيّر عالم شغلنا.",
          "catAr": "العولمة"
        },
        {
          "w": "der Austausch",
          "d": "Das gegenseitige Geben und Nehmen von Ideen, Waren oder Informationen.",
          "ar": "تبادل",
          "cat": "Globalisierung",
          "ex": "Der Austausch zwischen Universitäten wird immer wichtiger.",
          "dAr": "تبادل الأفكار أو البضائع أو المعلومات بين الأطراف.",
          "exAr": "التبادل بين الجامعات بيبقى أهم باستمرار.",
          "catAr": "العولمة"
        },
        {
          "w": "die Bedingung",
          "d": "Die Umstände, unter denen etwas passiert; auch: eine Forderung.",
          "ar": "ظرف / شرط",
          "cat": "Globalisierung",
          "ex": "Die Arbeiter arbeiten dort unter schlechten Bedingungen.",
          "dAr": "الظروف التي يحدث فيها شيء؛ أو مطلب يجب تحقيقه.",
          "exAr": "العمّال هناك بيشتغلوا في ظروف سيئة.",
          "catAr": "العولمة"
        },
        {
          "w": "die Produktion",
          "d": "Das Herstellen von Waren.",
          "ar": "إنتاج",
          "cat": "Globalisierung",
          "ex": "Die komplette Produktion wurde nach Asien verlegt.",
          "dAr": "صناعة البضائع.",
          "exAr": "الإنتاج كله اتنقل لآسيا.",
          "catAr": "العولمة"
        },
        {
          "w": "der Vorteil",
          "d": "Eine positive Seite einer Sache.",
          "ar": "ميزة",
          "cat": "Globalisierung",
          "ex": "Ein großer Vorteil von Online-Banking ist, dass es schnell geht.",
          "dAr": "جانب إيجابي في شيء.",
          "exAr": "ميزة كبيرة للخدمات البنكية الإلكترونية هي سرعتها.",
          "catAr": "العولمة"
        },
        {
          "w": "der Nachteil",
          "d": "Eine negative Seite einer Sache.",
          "ar": "عيب",
          "cat": "Globalisierung",
          "ex": "Ein Nachteil der Globalisierung sind die langen Transportwege.",
          "dAr": "جانب سلبي في شيء.",
          "exAr": "من عيوب العولمة طول مسافات النقل.",
          "catAr": "العولمة"
        },
        {
          "w": "der Irrsinn",
          "d": "Etwas, das völlig unvernünftig ist und keinen Sinn macht.",
          "ar": "جنون / حماقة",
          "cat": "Globalisierung",
          "ex": "Tomaten um die halbe Welt zu fliegen, ist doch ein Irrsinn.",
          "dAr": "شيء غير عقلاني تمامًا ولا معنى له.",
          "exAr": "نقل الطماطم بالطيران عبر نصف العالم جنون فعلًا.",
          "catAr": "العولمة"
        },
        {
          "w": "sinken",
          "d": "Weniger oder niedriger werden.",
          "ar": "ينخفض",
          "cat": "Globalisierung",
          "ex": "Die sinkenden Preise freuen die Konsumenten.",
          "dAr": "النقصان أو الانخفاض.",
          "exAr": "الأسعار المنخفضة بتفرّح المستهلكين.",
          "catAr": "العولمة"
        },
        {
          "w": "das Gewissen",
          "d": "Das innere Gefühl, das einem sagt, ob etwas richtig oder falsch ist.",
          "ar": "الضمير",
          "cat": "Gewissensfragen",
          "ex": "Ich habe ein schlechtes Gewissen, weil ich nicht bezahlt habe.",
          "dAr": "الإحساس الداخلي الذي يحدد لك الصحيح والخطأ.",
          "exAr": "ضميري بيأنّبني لأني ما دفعتش.",
          "catAr": "أسئلة للضمير"
        },
        {
          "w": "befürworten",
          "d": "Für eine Sache sein und sie unterstützen.",
          "ar": "يؤيّد",
          "cat": "Gewissensfragen",
          "ex": "Ich befürworte die Idee, alte Geschenke weiterzuverschenken.",
          "dAr": "تأييد شيء ودعمه.",
          "exAr": "أنا مؤيّد لفكرة إهداء الهدايا القديمة لآخرين.",
          "catAr": "أسئلة للضمير"
        },
        {
          "w": "tolerieren",
          "d": "Etwas akzeptieren, auch wenn man es selbst nicht gut findet.",
          "ar": "يتقبّل / يتسامح مع",
          "cat": "Gewissensfragen",
          "ex": "Man muss tolerieren, dass andere Menschen anders denken.",
          "dAr": "تقبّل شيء حتى لو مش عاجبك شخصيًا.",
          "exAr": "لازم تتقبّل إن غيرك بيفكّر بطريقة مختلفة.",
          "catAr": "أسئلة للضمير"
        },
        {
          "w": "merken",
          "d": "Etwas bemerken oder erkennen.",
          "ar": "يلاحظ",
          "cat": "Gewissensfragen",
          "ex": "Erst zu Hause merkte er, dass er nicht alles bezahlt hatte.",
          "dAr": "ملاحظة شيء أو إدراكه.",
          "exAr": "ما لاحظش إنه ما دفعش ثمن كل حاجة إلا لما رجع البيت.",
          "catAr": "أسئلة للضمير"
        },
        {
          "w": "bedenken",
          "d": "Über eine Sache nachdenken und sie bei einer Entscheidung beachten.",
          "ar": "يأخذ في الاعتبار",
          "cat": "Gewissensfragen",
          "ex": "Man muss auch bedenken, dass kleine Firmen Probleme bekommen.",
          "dAr": "التفكير في شيء وأخذه في الاعتبار عند القرار.",
          "exAr": "لازم نفكّر كمان إن الشركات الصغيرة بتواجه مشاكل.",
          "catAr": "أسئلة للضمير"
        },
        {
          "w": "betrügen",
          "d": "Jemanden mit Absicht täuschen, um selbst einen Vorteil zu haben.",
          "ar": "يغشّ / يخدع",
          "cat": "Gewissensfragen",
          "ex": "Niemand kann kontrollieren, ob ein Kunde betrügt.",
          "dAr": "خداع شخص عمدًا لتحصل على فائدة لنفسك.",
          "exAr": "محدش يقدر يراقب إذا كان عميل بيغش.",
          "catAr": "أسئلة للضمير"
        },
        {
          "w": "die Sicht",
          "d": "Die Art, wie man eine Sache sieht und beurteilt.",
          "ar": "وجهة نظر",
          "cat": "Gewissensfragen",
          "ex": "Aus meiner Sicht ist das ein echtes Problem.",
          "dAr": "طريقة رؤيتك لشيء وتقييمه.",
          "exAr": "من وجهة نظري دي مشكلة حقيقية.",
          "catAr": "أسئلة للضمير"
        },
        {
          "w": "der Vorwurf",
          "d": "Eine Aussage, mit der man jemandem sagt, dass er etwas falsch gemacht hat.",
          "ar": "لوم / اتهام",
          "cat": "Gewissensfragen",
          "ex": "Niemand kann mir einen Vorwurf machen.",
          "dAr": "قول تلوم فيه شخصًا لأنه فعل شيئًا خطأ.",
          "exAr": "محدش يقدر يلومني.",
          "catAr": "أسئلة للضمير"
        },
        {
          "w": "die Schuld",
          "d": "Die Verantwortung für etwas Schlechtes, das passiert ist.",
          "ar": "ذنب / مسؤولية",
          "cat": "Gewissensfragen",
          "ex": "Er ist ohne eigene Schuld arbeitslos geworden.",
          "dAr": "المسؤولية عن شيء سيئ حدث.",
          "exAr": "هو بقى عاطل من غير ذنب منه.",
          "catAr": "أسئلة للضمير"
        },
        {
          "w": "geraten (in + A)",
          "d": "Ohne Absicht in eine meistens schwierige Situation kommen.",
          "ar": "يقع في (مشكلة)",
          "cat": "Gewissensfragen",
          "ex": "Nach ihrer Krankheit ist sie in finanzielle Not geraten.",
          "dAr": "الوقوع من غير قصد في موقف غالبًا صعب.",
          "exAr": "بعد مرضها وقعت في ضائقة مالية.",
          "catAr": "أسئلة للضمير"
        },
        {
          "w": "das Versprechen",
          "d": "Die Aussage, dass man etwas ganz sicher tun wird.",
          "ar": "وعد",
          "cat": "Gewissensfragen",
          "ex": "Er hat sein Versprechen gehalten und das Geld zurückgezahlt.",
          "dAr": "قول تؤكّد فيه أنك ستفعل شيئًا بالتأكيد.",
          "exAr": "هو وفّى بوعده وردّ الفلوس.",
          "catAr": "أسئلة للضمير"
        },
        {
          "w": "wünschenswert",
          "d": "So, dass man es sich wünscht, weil es gut wäre.",
          "ar": "مرغوب فيه",
          "cat": "Gewissensfragen",
          "ex": "Für uns Konsumenten sind niedrige Preise natürlich wünschenswert.",
          "dAr": "شيء تتمنى حدوثه لأنه سيكون جيدًا.",
          "exAr": "طبعًا إحنا كمستهلكين بنتمنى أسعارًا منخفضة.",
          "catAr": "أسئلة للضمير"
        },
        {
          "w": "der Zustand",
          "d": "Die Situation oder die Verfassung, in der etwas oder jemand ist.",
          "ar": "حالة",
          "cat": "Gewissensfragen",
          "ex": "Das gebrauchte Fahrrad ist in einem sehr guten Zustand.",
          "dAr": "الحالة أو الوضع الذي يوجد فيه شخص أو شيء.",
          "exAr": "العجلة المستعملة حالتها جيدة جدًا.",
          "catAr": "أسئلة للضمير"
        },
        {
          "w": "die Ehrlichkeit",
          "d": "Die Eigenschaft, die Wahrheit zu sagen und andere nicht zu betrügen.",
          "ar": "الأمانة / الصدق",
          "cat": "Gewissensfragen",
          "ex": "Das Konzept basiert auf der Ehrlichkeit der Kunden.",
          "dAr": "قول الحقيقة وعدم خداع الآخرين.",
          "exAr": "الفكرة قائمة على أمانة العملاء.",
          "catAr": "أسئلة للضمير"
        },
        {
          "w": "stehlen",
          "d": "Etwas nehmen, das einer anderen Person gehört, ohne zu fragen.",
          "ar": "يسرق",
          "cat": "Gewissensfragen",
          "ex": "Mir wurde in der U-Bahn das Handy gestohlen.",
          "dAr": "أخذ شيء يملكه شخص آخر من غير إذنه.",
          "exAr": "موبايلي اتسرق مني في المترو.",
          "catAr": "أسئلة للضمير"
        },
        {
          "w": "der Dieb",
          "d": "Eine Person, die etwas stiehlt.",
          "ar": "لص / حرامي",
          "cat": "Gewissensfragen",
          "ex": "Die Polizei hat den Dieb schnell gefunden.",
          "dAr": "شخص يسرق شيئًا.",
          "exAr": "الشرطة لقت الحرامي بسرعة.",
          "catAr": "أسئلة للضمير"
        },
        {
          "w": "verzichten (auf + A)",
          "d": "Etwas nicht nehmen oder nicht tun, obwohl man es möchte.",
          "ar": "يستغني (عن)",
          "cat": "Gewissensfragen",
          "ex": "Wenn ich kein Kleingeld habe, verzichte ich auf die Zeitung.",
          "dAr": "ترك شيء أو عدم فعله رغم رغبتك فيه.",
          "exAr": "لو معيش فكّة، بستغنى عن الجريدة.",
          "catAr": "أسئلة للضمير"
        },
        {
          "w": "weiterverschenken",
          "d": "Ein Geschenk, das man bekommen hat, einer anderen Person schenken.",
          "ar": "يُهدي هدية لشخص آخر",
          "cat": "Gewissensfragen",
          "ex": "Darf man ein Geschenk einfach weiterverschenken?",
          "dAr": "إهداء هدية تلقيتها لشخص آخر.",
          "exAr": "هل ينفع تهدي هدية جت لك لشخص تاني ببساطة؟",
          "catAr": "أسئلة للضمير"
        },
        {
          "w": "ablehnen",
          "d": "Zu etwas Nein sagen oder etwas nicht gut finden.",
          "ar": "يرفض",
          "cat": "Gewissensfragen",
          "ex": "So ein Verhalten lehne ich ab.",
          "dAr": "رفض شيء أو عدم الإعجاب به.",
          "exAr": "أنا برفض السلوك ده.",
          "catAr": "أسئلة للضمير"
        },
        {
          "w": "akzeptieren",
          "d": "Etwas annehmen oder als richtig ansehen.",
          "ar": "يقبل",
          "cat": "Gewissensfragen",
          "ex": "Ich akzeptiere deine Entscheidung, auch wenn ich anders denke.",
          "dAr": "قبول شيء أو اعتباره صحيحًا.",
          "exAr": "أنا متقبّل قرارك حتى لو بفكّر بشكل مختلف.",
          "catAr": "أسئلة للضمير"
        },
        {
          "w": "das Verhalten",
          "d": "Die Art, wie sich jemand benimmt.",
          "ar": "سلوك / تصرّف",
          "cat": "Gewissensfragen",
          "ex": "Sein Verhalten an der Kasse fand ich nicht in Ordnung.",
          "dAr": "الطريقة التي يتصرف بها شخص.",
          "exAr": "ما عجبنيش تصرّفه عند الكاشير.",
          "catAr": "أسئلة للضمير"
        },
        {
          "w": "das Fundbüro",
          "d": "Ein Büro, in dem man verlorene Sachen abgeben und abholen kann.",
          "ar": "مكتب المفقودات",
          "cat": "Gewissensfragen",
          "ex": "Ich habe die gefundene Geldbörse zum Fundbüro gebracht.",
          "dAr": "مكتب تُسلَّم إليه الأشياء المفقودة ويستردها أصحابها.",
          "exAr": "ودّيت المحفظة اللي لقيتها لمكتب المفقودات.",
          "catAr": "أسئلة للضمير"
        },
        {
          "w": "ausziehen",
          "d": "Eine Wohnung für immer verlassen.",
          "ar": "ينتقل من السكن / يُخلي الشقة",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Als die Familie wieder genug Geld hatte, zog sie aus der Siedlung aus.",
          "dAr": "ترك مسكن بصورة نهائية.",
          "exAr": "لما الأسرة بقى عندها فلوس كفاية تاني، سابت المجمع السكني.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "fort",
          "d": "Weg, weit entfernt von einem Ort.",
          "ar": "بعيدًا",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Mein Bruder wohnt mehr als 500 Kilometer weit fort.",
          "dAr": "بعيدًا عن مكان.",
          "exAr": "أخويا ساكن بعيدًا بأكتر من خمسمئة كيلومتر.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "drin sein",
          "d": "Sich in etwas befinden.",
          "ar": "يكون بالداخل",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Im Portemonnaie ist leider nichts mehr drin.",
          "dAr": "وجود شيء داخل شيء آخر.",
          "exAr": "للأسف ما بقاش فيه حاجة في المحفظة.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "zu Wort kommen",
          "d": "In einem Gespräch die Möglichkeit bekommen, etwas zu sagen.",
          "ar": "يأخذ فرصة للكلام",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "In der Diskussion bin ich kaum zu Wort gekommen.",
          "dAr": "الحصول على فرصة للكلام أثناء حديث.",
          "exAr": "بالكاد أخدت فرصة أتكلم في النقاش.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "stammen (aus + D)",
          "d": "Seinen Ursprung an einem Ort oder in einer Zeit haben.",
          "ar": "يرجع أصله (إلى) / ينحدر من",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Die Möbel in der Wohnung stammen aus dem 18. Jahrhundert.",
          "dAr": "أن يكون أصل الشيء في مكان أو زمن معين.",
          "exAr": "أثاث الشقة يرجع للقرن الثامن عشر.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "überleben",
          "d": "Trotz Gefahr oder Schwierigkeiten weiterleben oder weiter existieren.",
          "ar": "ينجو / يصمد",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Viele kleine Läden können die starke Konkurrenz nicht überleben.",
          "dAr": "مواصلة الحياة أو الوجود رغم الخطر أو الصعوبات.",
          "exAr": "محلات صغيرة كتير مش بتقدر تصمد أمام المنافسة الشديدة.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "irgendwo",
          "d": "An einem Ort, den man nicht genau kennt.",
          "ar": "في مكان ما",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Ich habe meinen Schlüssel irgendwo in der Stadt verloren.",
          "dAr": "في مكان لا تعرفه بالتحديد.",
          "exAr": "ضيّعت مفتاحي في مكان ما في المدينة.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "nirgendwo",
          "d": "An keinem Ort.",
          "ar": "ولا في أي مكان / في لا مكان",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Ich finde meine Bankkarte nirgendwo.",
          "dAr": "في لا مكان.",
          "exAr": "مش لاقي بطاقتي البنكية في أي مكان.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "je ..., desto/umso ...",
          "d": "Eine Verbindung, die zeigt, dass sich zwei Dinge zusammen verändern.",
          "ar": "كلّما ... كلّما ...",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Je mehr ich spare, desto ruhiger schlafe ich.",
          "dAr": "تركيب يوضح أن شيئين يتغيّران معًا.",
          "exAr": "كلما وفّرت أكتر نمت بهدوء أكتر.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "der Kasten",
          "d": "Ein Behälter aus Holz, Metall oder Plastik.",
          "ar": "صندوق",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Das Geld für die Zeitung wirft man einfach in den Kasten.",
          "dAr": "وعاء من الخشب أو المعدن أو البلاستيك.",
          "exAr": "بتحط فلوس الجريدة ببساطة في الصندوق.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "der Staub",
          "d": "Sehr kleine, trockene Teilchen, die sich zum Beispiel auf Möbeln sammeln.",
          "ar": "غبار / تراب",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Die alte Vase steht im Keller und ist voller Staub.",
          "dAr": "جزيئات صغيرة جافة تتجمع مثلًا على الأثاث.",
          "exAr": "المزهرية القديمة في القبو ومليانة تراب.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "teilweise",
          "d": "Zum Teil, also nicht ganz.",
          "ar": "جزئيًا",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Die Waren werden teilweise rund um die Welt transportiert.",
          "dAr": "جزئيًا وليس بالكامل.",
          "exAr": "بعض البضائع بتُنقل حول العالم.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "zusätzlich",
          "d": "Außerdem noch, als Extra.",
          "ar": "إضافي / بالإضافة إلى",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Zusätzlich zur Miete zahlen die Bewohner die Nebenkosten.",
          "dAr": "علاوة على ذلك أو كإضافة.",
          "exAr": "السكان بيدفعوا المصاريف الإضافية بجانب الإيجار.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "beten",
          "d": "Zu Gott sprechen.",
          "ar": "يصلّي / يدعو",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Meine Großmutter betet jeden Tag fünfmal.",
          "dAr": "التوجّه إلى الله بالكلام أو الصلاة.",
          "exAr": "جدتي بتصلّي خمس مرات كل يوم.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "die Spende",
          "d": "Geld oder Sachen, die man freiwillig für einen guten Zweck gibt.",
          "ar": "تبرّع",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Die Organisation freut sich über jede Spende.",
          "dAr": "مال أو أشياء تُعطى تطوعًا لهدف خيري.",
          "exAr": "المنظمة بتفرح بكل تبرع.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "spenden",
          "d": "Freiwillig Geld oder Sachen für einen guten Zweck geben.",
          "ar": "يتبرّع",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Im Ramadan spenden wir jedes Jahr Lebensmittel.",
          "dAr": "إعطاء مال أو أشياء تطوعًا لهدف خيري.",
          "exAr": "كل سنة في رمضان بنتبرّع بأغذية.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "bedürftig",
          "d": "So arm, dass man Hilfe braucht.",
          "ar": "محتاج",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Die günstigen Wohnungen sind für bedürftige Familien gedacht.",
          "dAr": "فقير لدرجة الاحتياج إلى المساعدة.",
          "exAr": "الشقق الرخيصة مخصصة للأسر المحتاجة.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "wohltätig",
          "d": "Anderen Menschen helfend, ohne etwas dafür zu verlangen.",
          "ar": "خيري",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Der Verein sammelt Geld für wohltätige Projekte.",
          "dAr": "مساعدة الآخرين من غير طلب مقابل.",
          "exAr": "الجمعية بتجمع فلوس لمشروعات خيرية.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "die Siedlung",
          "d": "Eine Gruppe von Häusern, die zusammen geplant und gebaut wurden.",
          "ar": "مجمّع سكني",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "In der Siedlung wohnen vor allem Familien mit wenig Geld.",
          "dAr": "مجموعة بيوت خُطط لها وبُنيت معًا.",
          "exAr": "في المجمع السكني ساكنين خصوصًا أسر دخلها قليل.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "die Stiftung",
          "d": "Eine Organisation, die mit gespendetem Geld einen guten Zweck finanziert.",
          "ar": "مؤسسة خيرية / وقف",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Die Stiftung finanziert jedes Jahr zwanzig Stipendien.",
          "dAr": "منظمة تموّل هدفًا خيريًا باستخدام التبرعات.",
          "exAr": "المؤسسة بتموّل عشرين منحة دراسية كل سنة.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "der Tauschring",
          "d": "Eine Gruppe, in der Menschen Tätigkeiten ohne Geld miteinander tauschen.",
          "ar": "دائرة تبادل خدمات",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Im Tauschring repariere ich Fahrräder und bekomme dafür Hilfe im Garten.",
          "dAr": "مجموعة يتبادل فيها الناس الخدمات من غير مال.",
          "exAr": "في شبكة تبادل الخدمات بصلّح عجل وباخد مقابل ده مساعدة في الجنينة.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "die Tätigkeit",
          "d": "Eine Arbeit oder etwas, das man aktiv tut.",
          "ar": "نشاط / عمل",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Welche Tätigkeit könntest du im Tauschring anbieten?",
          "dAr": "عمل أو شيء تفعله بنشاط.",
          "exAr": "إيه الخدمة اللي ممكن تقدّمها في شبكة التبادل؟",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        },
        {
          "w": "finanziell",
          "d": "So, dass es mit Geld zu tun hat.",
          "ar": "مالي",
          "cat": "Andere wichtige Wörter und Wendungen",
          "ex": "Nach der Krankheit hatte die Familie große finanzielle Probleme.",
          "dAr": "متعلق بالمال.",
          "exAr": "بعد المرض الأسرة واجهت مشاكل مالية كبيرة.",
          "catAr": "كلمات وتعبيرات مهمة أخرى"
        }
      ],
      "visual": {
        "src": "assets/chapters/chapter-12.webp",
        "alt": "Kapitel 12 · Geld regiert die Welt?",
        "caption": "Geld regiert die Welt?"
      },
      "titleAr": "هل المال يحكم العالم؟",
      "subtitleAr": "Netzwerk neu B1.2 · الوحدة 12"
    }
  ];
  chapters.forEach(chapter => {
    if (!window.B1_BOOK.some(item => item.num === chapter.num)) window.B1_BOOK.push(chapter);
  });
})();
