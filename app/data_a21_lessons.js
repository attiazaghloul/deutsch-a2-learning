/* Lesson sections for Netzwerk neu A2.1, chapters 1-6: goals, reading texts with
   comprehension questions, ready-made phrases (Redemittel), speaking tasks and a quiz.
   Loaded after data_a21_vocab.js. All texts are original learning texts that follow the
   topics and communicative goals of the coursebook chapters. The reading pictures of the
   earlier lessons are kept. */
(function enrichA21Lessons(){
  const G = (de, ar) => ({ de, ar });
  const R = (cat, catAr, items) => ({ cat, catAr, items: items.map(([de, ar]) => ({ de, ar })) });
  const Q = (q, o, a, fb, fbAr) => ({ q, o, a, fb, fbAr });
  const RD = (kind, title, text, ar, questions) => ({ kind, title, text, ar, questions });
  const content = {};

  /* ---------- Kapitel 1 ---------- */
  content[1] = {
    intro: "In diesem Kapitel geht es um dich und dein Leben. Du stellst dich ausführlich vor – Familie, Wohnen, Beruf, Freizeit und Sprachen – und berichtest im Perfekt, was du letztes Jahr gemacht hast. Du verabredest dich, sagst zu oder ab und begründest mit weil. Außerdem verstehst du Informationen auf einer Homepage und stellst ein besonderes Restaurant vor.",
    introAr: "الوحدة دي عنك وعن حياتك. هتعرّف بنفسك بالتفصيل – العيلة والسكن والشغل ووقت الفراغ واللغات – وتحكي بالـ Perfekt عملت إيه السنة اللي فاتت. هتتفق على مواعيد، توافق أو تعتذر وتقول السبب بـ weil. وكمان هتفهم معلومات على موقع وتقدّم مطعم مميّز.",
    badges: ["Vorstellung", "Perfekt", "Genitiv: Name + s", "weil", "Verabredung", "Restaurant", "Lernen mit allen Sinnen"],
    goals: [
      G("Sich ausführlich vorstellen: Familie, Beruf, Freizeit, Sprachen", "تعرّف بنفسك بالتفصيل: العيلة والشغل ووقت الفراغ واللغات"),
      G("Über Vergangenes berichten (Perfekt)", "تحكي عن الماضي (Perfekt)"),
      G("Sagen, wem etwas gehört: Julias Schwester", "تقول الحاجة بتاعة مين: Julias Schwester"),
      G("Sich verabreden: vorschlagen, zusagen, absagen, nachfragen", "تتفق على ميعاد: تقترح وتوافق وتعتذر وتستفسر"),
      G("Etwas begründen mit weil", "تقول السبب بـ weil"),
      G("Informationen auf einer Homepage verstehen", "تفهم معلومات على موقع"),
      G("Ein besonderes Restaurant vorstellen", "تقدّم مطعم مميّز"),
      G("Wörter mit allen Sinnen lernen", "تتعلم الكلمات بكل حواسك")
    ],
    readings: [
      RD("Porträts", "Das sind wir",
        "<b>Mariam, 28:</b> Ich komme aus Jordanien und lebe seit drei Jahren in Leipzig. Meine Eltern sind schon Rentner und wohnen noch in Amman. Ich bin verheiratet und habe eine kleine Tochter – sie ist total süß. Nach der Schule habe ich eine Ausbildung zur Bankkauffrau gemacht. Jetzt arbeite ich in einer Bank und lerne abends Deutsch. Arabisch ist meine Muttersprache, Englisch spreche ich fließend.<br><br><b>Tobias, 34:</b> Ich bin in Graz aufgewachsen, aber jetzt lebe ich mit meiner Freundin in Wien. Wir haben eine kleine Wohnung im Stadtzentrum. Ich bin Physiotherapeut und arbeite in einer Praxis. In meiner Freizeit spiele ich Basketball im Verein und am Wochenende fahre ich gern Rad. Ich spreche Deutsch, Englisch und ein bisschen Italienisch.",
        "<b>مريم، 28 سنة:</b> أنا من الأردن وعايشة في لايبزيج من 3 سنين. أهلي على المعاش ولسه ساكنين في عمّان. أنا متجوزة وعندي بنت صغيرة – عسل خالص. بعد المدرسة عملت تدريب مهني كموظفة بنك. دلوقتي بشتغل في بنك وبتعلم ألماني بالليل. العربي لغتي الأم، والإنجليزي بتكلمه بطلاقة.<br><br><b>توبياس، 34 سنة:</b> اتربيت في جراتس، بس دلوقتي عايش مع صاحبتي في فيينا. عندنا شقة صغيرة في وسط المدينة. أنا أخصائي علاج طبيعي وبشتغل في عيادة. في وقت فراغي بلعب باسكت في النادي، وفي الويك إند بحب أركب عجلة. بتكلم ألماني وإنجليزي وشوية إيطالي.",
        [["Seit wann lebt Mariam in Leipzig?", "Seit drei Jahren."], ["Was hat Mariam nach der Schule gemacht?", "Eine Ausbildung zur Bankkauffrau."], ["Wo ist Tobias aufgewachsen?", "In Graz."], ["Was macht Tobias in seiner Freizeit?", "Er spielt Basketball im Verein und fährt Rad."]]),
      RD("Blog", "Mein letztes Jahr",
        "Das letzte Jahr war wirklich spannend – es ist so viel passiert! Im Februar habe ich meine Ausbildung zur Augenoptikerin abgeschlossen. Ich habe viel gelernt und zum Glück gute Noten bekommen. Danach habe ich sofort eine Stelle in einem Brillengeschäft gefunden.<br><br>Im Sommer bin ich mit meiner Freundin Lilly nach Portugal geflogen. Wir haben ein Auto gemietet und sind zwei Wochen durch das Land gereist. Lillys Familie wohnt in Porto – dort haben wir ihre Großeltern besucht.<br><br>Im Herbst ist mein Bruder umgezogen und ich habe ihm geholfen. Und im Dezember hat meine Schwester geheiratet! Ich habe die Hochzeit mit ihr organisiert. Das war viel Arbeit, aber das Fest war wunderschön. Viele Verwandte sind gekommen und wir haben bis morgens gefeiert.",
        "السنة اللي فاتت كانت مثيرة فعلًا – حصلت حاجات كتير! في فبراير خلّصت تدريبي كأخصائية بصريات. اتعلمت كتير ولحسن الحظ جبت درجات كويسة. بعدها على طول لقيت شغل في محل نضارات.<br><br>في الصيف سافرت أنا وصاحبتي ليلي البرتغال. أجّرنا عربية ولفّينا البلد أسبوعين. عيلة ليلي ساكنة في بورتو – زرنا جدّها وجدّتها هناك.<br><br>في الخريف أخويا نقل وساعدته. وفي ديسمبر أختي اتجوزت! نظّمت الفرح معاها. كان تعب كتير بس الحفلة كانت جميلة جدًا. قرايب كتير جم وفضلنا نحتفل لحد الصبح.",
        [["Welche Ausbildung hat die Person abgeschlossen?", "Eine Ausbildung zur Augenoptikerin."], ["Wohin ist sie im Sommer geflogen?", "Nach Portugal."], ["Wen haben sie in Porto besucht?", "Lillys Großeltern."], ["Was ist im Dezember passiert?", "Ihre Schwester hat geheiratet."]]),
      RD("Homepage", "Restaurant „Dunkelbunt“ – Essen ohne Licht",
        "<b>Was ist bei uns besonders?</b> Bei uns essen Sie im Dunkeln. Sie sehen nichts – aber Ihre anderen Sinne werden sehr aktiv: Hören, Riechen, Schmecken und Fühlen.<br><br><b>Wie funktioniert das?</b> Wir empfangen Sie am Eingang. Im Hellen wählen Sie Ihr Menü aus unserer Speisekarte aus. Dann führt Sie ein Kellner zu Ihrem Platz. Nach dem Essen bezahlen Sie an der Rezeption.<br><br><b>Was ist verboten?</b> Handys und Kameras müssen aus sein. Fotografieren und Rauchen ist nicht erlaubt.<br><br><b>Ich brauche Hilfe!</b> Rufen Sie einfach den Namen von Ihrem Kellner. Er kommt sofort und hilft Ihnen weiter.<br><br><b>Reservierung:</b> Bitte reservieren Sie spätestens eine Woche vor Ihrem Besuch.",
        "<b>إيه المميّز عندنا؟</b> عندنا بتاكل في الضلمة. مش هتشوف حاجة – بس حواسك التانية هتبقى نشيطة جدًا: السمع والشم والتذوّق واللمس.<br><br><b>بيمشي إزاي؟</b> بنستقبلك عند المدخل. في النور بتختار الوجبة من المنيو. بعدين الجرسون بياخدك لمكانك. بعد الأكل بتدفع عند الاستقبال.<br><br><b>إيه الممنوع؟</b> الموبايلات والكاميرات لازم تبقى مقفولة. التصوير والتدخين ممنوعين.<br><br><b>محتاج مساعدة!</b> نادي على اسم الجرسون بتاعك. هييجي على طول ويساعدك.<br><br><b>الحجز:</b> من فضلك احجز قبل زيارتك بأسبوع على الأقل.",
        [["Was ist im Restaurant besonders?", "Man isst im Dunkeln."], ["Wo wählt man das Essen aus?", "Im Hellen, an der Rezeption / am Eingang aus der Speisekarte."], ["Was ist verboten?", "Fotografieren und Rauchen; Handys müssen aus sein."], ["Wann muss man reservieren?", "Spätestens eine Woche vor dem Besuch."]])
    ],
    redemittel: [
      R("Sich vorstellen", "تعريف النفس", [
        ["Ich komme aus … / Ich lebe jetzt in …", "أنا من … / عايش دلوقتي في …"],
        ["Ich bin verheiratet / geschieden / ledig.", "أنا متجوز / مطلّق / أعزب."],
        ["Ich habe eine Ausbildung zum/zur … gemacht.", "عملت تدريب مهني كـ …"],
        ["Ich arbeite als … / Ich studiere …", "بشتغل … / بدرس …"],
        ["In der Freizeit spiele ich gern …", "في وقت فراغي بحب ألعب …"],
        ["Meine Muttersprache ist Arabisch. Ich spreche fließend Englisch.", "لغتي الأم عربي. بتكلم إنجليزي بطلاقة."]
      ]),
      R("Über Vergangenes berichten", "الحكي عن الماضي", [
        ["Das letzte Jahr war echt spannend.", "السنة اللي فاتت كانت مثيرة بجد."],
        ["Ich habe meine Ausbildung abgeschlossen.", "خلّصت تدريبي المهني."],
        ["Wir sind durch Spanien gereist.", "لفّينا إسبانيا."],
        ["Letztes Jahr bin ich umgezogen.", "السنة اللي فاتت نقلت."],
        ["Zum Glück habe ich gute Noten bekommen.", "لحسن الحظ جبت درجات كويسة."]
      ]),
      R("Etwas vorschlagen", "تقترح حاجة", [
        ["Gehen wir zusammen ins Kino?", "نروح السينما مع بعض؟"],
        ["Ich gehe auf den Flohmarkt. Kommst du mit?", "رايح سوق الحاجات القديمة. جاي معايا؟"],
        ["Hast du am Samstag Zeit?", "فاضي يوم السبت؟"],
        ["Hast du auch Lust?", "ليك مزاج كمان؟"]
      ]),
      R("Zusagen, absagen, nachfragen", "توافق وتعتذر وتستفسر", [
        ["Das ist eine gute Idee! / Einverstanden.", "فكرة حلوة! / موافق."],
        ["Ich möchte gern, aber ich muss arbeiten.", "نفسي، بس لازم أشتغل."],
        ["Schade, da geht es leider nicht.", "خسارة، مش هينفع للأسف."],
        ["Wann geht es los?", "هتبدأ إمتى؟"],
        ["Geht es auch ein bisschen später?", "ينفع متأخر شوية؟"],
        ["Kann ich etwas mitbringen?", "أجيب حاجة معايا؟"]
      ]),
      R("Etwas begründen", "تقول السبب", [
        ["Ich komme später, weil ich arbeiten muss.", "هاجي متأخر لأني لازم أشتغل."],
        ["Lea kann nicht kommen, weil sie ihren Vater besucht.", "ليا مش هتقدر تيجي لأنها بتزور أبوها."],
        ["Warum isst du nichts? – Weil ich keinen Hunger habe.", "ليه مش بتاكل؟ – لأني مش جعان."]
      ])
    ],
    speaking: {
      questions: [
        G("Stell dich ausführlich vor: Familie, Wohnen, Beruf, Freizeit, Sprachen.", "عرّف بنفسك بالتفصيل: العيلة والسكن والشغل ووقت الفراغ واللغات."),
        G("Was hast du letztes Jahr gemacht? Erzähl von drei Ereignissen.", "عملت إيه السنة اللي فاتت؟ احكي عن 3 أحداث."),
        G("Mach einen Vorschlag für Samstag. Dein Partner sagt zu oder ab.", "اقترح حاجة ليوم السبت. زميلك يوافق أو يعتذر."),
        G("Warum lernst du Deutsch? Antworte mit weil.", "ليه بتتعلم ألماني؟ جاوب بـ weil."),
        G("Welches besondere Restaurant kennst du? Stell es vor.", "تعرف أنهي مطعم مميّز؟ قدّمه."),
        G("Wie lernst du neue Wörter am besten?", "إزاي بتتعلم الكلمات الجديدة أحسن حاجة؟")
      ],
      model: "Ich heiße Nadia und komme aus Marokko. Seit zwei Jahren lebe ich in Köln. Ich bin verheiratet und habe einen Sohn. Nach der Schule habe ich in Rabat Informatik studiert. Jetzt arbeite ich als Programmiererin in einer kleinen Firma. In meiner Freizeit gehe ich gern schwimmen und treffe Freunde. Letztes Jahr bin ich umgezogen und habe einen Deutschkurs angefangen. Ich lerne Deutsch, weil ich hier bleiben und Karriere machen möchte.",
      modelAr: "اسمي نادية وأنا من المغرب. عايشة في كولن من سنتين. أنا متجوزة وعندي ولد. بعد المدرسة درست علوم كمبيوتر في الرباط. دلوقتي بشتغل مبرمجة في شركة صغيرة. في وقت فراغي بحب أعوم وأقابل أصحابي. السنة اللي فاتت نقلت وبدأت كورس ألماني. بتعلم ألماني لأني عايزة أفضل هنا وأترقّى في شغلي."
    },
    quiz: [
      Q("Wir ___ letztes Jahr nach Zürich gezogen.", ["sind", "haben", "werden"], 0, "ziehen (Ortswechsel) → Perfekt mit sein.", "ziehen فيه تغيير مكان ← sein."),
      Q("Sie hat ihre Ausbildung ___.", ["abgeschlossen", "geabschlossen", "abgeschließt"], 0, "Trennbares Verb: ab-ge-schlossen.", "فعل منفصل: ab + ge + schlossen."),
      Q("Ich habe mein Studium ___. (beenden)", ["beendet", "gebeendet", "beendt"], 0, "Nicht trennbar (be-): ohne ge-.", "be- غير منفصلة ← من غير ge."),
      Q("Das ist die Schwester von Julia. → Das ist ___ Schwester.", ["Julias", "Julia", "die Julias"], 0, "Genitiv bei Namen: Name + s.", "الملكية مع الأسماء: الاسم + s."),
      Q("Das ist der Bruder von Max. → Das ist ___ Bruder.", ["Max'", "Maxs", "Maxes"], 0, "Nach -x nur ein Apostroph.", "بعد x بنحط فاصلة علوية بس."),
      Q("Marvin kommt später, weil er arbeiten ___.", ["muss", "musst", "müssen"], 0, "Im weil-Satz steht das Verb am Ende.", "في جملة weil الفعل في الآخر."),
      Q("Ich komme nicht, weil ___.", ["ich krank bin", "bin ich krank", "ich bin krank"], 0, "weil + Subjekt + … + Verb am Ende.", "weil + الفاعل + … + الفعل في الآخر."),
      Q("Du kannst nicht kommen. Was sagst du?", ["Schade, da geht es leider nicht.", "Einverstanden!", "Das ist eine gute Idee."], 0, "Absagen: Schade, da geht es leider nicht.", "للاعتذار: Schade, da geht es leider nicht.")
    ]
  };

  /* ---------- Kapitel 2 ---------- */
  content[2] = {
    intro: "In diesem Kapitel geht es um die Schulzeit und die Zeit danach. Du verstehst Berichte über die Schule, sprichst mit Modalverben im Präteritum über früher (ich musste, ich konnte, ich durfte) und schreibst Kommentare. Du verstehst eine Radiosendung über Ausbildung, Studium und Freiwilliges Soziales Jahr, sagst deine Meinung, stimmst zu oder lehnst ab und lernst das Schulsystem in Deutschland kennen.",
    introAr: "الوحدة دي عن أيام المدرسة واللي بعدها. هتفهم حكايات عن المدرسة، وتتكلم عن زمان بأفعال المساعدة في الماضي (ich musste وich konnte وich durfte)، وتكتب تعليقات. هتفهم برنامج إذاعي عن التدريب المهني والجامعة والسنة التطوعية، وتقول رأيك وتوافق أو ترفض، وتتعرف على النظام التعليمي في ألمانيا.",
    badges: ["Schulzeit", "Modalverben im Präteritum", "Artikel im Dativ", "Possessivartikel im Dativ", "Meinung sagen", "Schultypen"],
    goals: [
      G("Berichte aus der Schulzeit verstehen", "تفهم حكايات عن أيام المدرسة"),
      G("Über die eigene Schulzeit sprechen (ich musste, ich konnte, ich durfte)", "تتكلم عن أيام مدرستك (ich musste وich konnte وich durfte)"),
      G("Kommentare schreiben", "تكتب تعليقات"),
      G("Eine Radiosendung über die Zeit nach der Schule verstehen", "تفهم برنامج إذاعي عن الفترة بعد المدرسة"),
      G("Über Erfahrungen sprechen und die eigene Meinung sagen", "تتكلم عن تجاربك وتقول رأيك"),
      G("Zustimmen und ablehnen", "توافق وترفض"),
      G("Informationen über ein Schulsystem verstehen und über Schultypen sprechen", "تفهم معلومات عن نظام تعليمي وتتكلم عن أنواع المدارس"),
      G("Grammatik: Modalverben im Präteritum, Artikel und Possessivartikel im Dativ", "القواعد: الأفعال المساعدة في الماضي والأدوات وأدوات الملكية في الداتيف")
    ],
    readings: [
      RD("Schulplattform", "Erinnerungen an die Schule",
        "<b>Sami (Schule 2008–2017):</b> Ich wollte immer schnell erwachsen sein. Heute verstehe ich das nicht mehr! In der Schule hatte ich so viel Freizeit. Im Sommer hatten wir sechs Wochen Ferien und ich konnte jeden Tag ins Schwimmbad gehen.<br><br><b>Elena (Schule 2001–2010):</b> Ich bin mit 12 Jahren nach Deutschland gekommen. Am Anfang war es schwer, weil ich die Sprache nicht konnte. Aber meine Mitschüler waren sehr nett. Nach ein paar Monaten hatte ich viele Freunde.<br><br><b>Jonas (Schule 1995–2004):</b> Wer erinnert sich noch an Herrn Kaiser? Wir mussten jede Woche einen Vokabeltest schreiben und durften im Unterricht nie sprechen. Er war sehr streng! Aber unsere Mathelehrerin war toll und der Unterricht hat meistens Spaß gemacht.",
        "<b>سامي (المدرسة 2008–2017):</b> كنت دايمًا عايز أكبر بسرعة. النهارده مش فاهم ده خالص! في المدرسة كان عندي وقت فراغ كتير. في الصيف كان عندنا 6 أسابيع إجازة وكنت أقدر أروح حمام السباحة كل يوم.<br><br><b>إيلينا (المدرسة 2001–2010):</b> جيت ألمانيا وأنا عندي 12 سنة. في الأول كان صعب، لأني مكنتش أعرف اللغة. بس زمايلي كانوا لطاف جدًا. بعد كام شهر بقى عندي أصحاب كتير.<br><br><b>يوناس (المدرسة 1995–2004):</b> مين لسه فاكر الأستاذ كايزر؟ كان لازم نكتب اختبار كلمات كل أسبوع، وكان ممنوع نتكلم في الحصة خالص. كان شديد جدًا! بس مدرّسة الرياضيات كانت تحفة والحصص كانت غالبًا ممتعة.",
        [["Was konnte Sami in den Ferien machen?", "Er konnte jeden Tag ins Schwimmbad gehen."], ["Warum war es für Elena am Anfang schwer?", "Weil sie die Sprache nicht konnte."], ["Was mussten die Schüler bei Herrn Kaiser machen?", "Jede Woche einen Vokabeltest schreiben."], ["Wie war die Mathelehrerin?", "Toll; der Unterricht hat Spaß gemacht."]]),
      RD("Radiosendung", "Schule aus – und dann?",
        "<b>Moderatorin:</b> Die Schule ist vorbei – und dann? Heute erzählen drei junge Leute von ihren Plänen.<br><br><b>Maike, 19:</b> Ich mache eine Ausbildung zur Gärtnerin. Ich wollte nach der Schule nicht mehr nur am Schreibtisch sitzen. Jetzt arbeite ich draußen mit Pflanzen und verdiene schon ein bisschen Geld.<br><br><b>Sara, 18:</b> Ich mache ein Freiwilliges Soziales Jahr. Ich helfe einer Familie mit einem Kind im Rollstuhl. Ich wollte eine Pause vom Lernen haben und etwas für andere Menschen machen.<br><br><b>Vida, 21:</b> Ich studiere Jura in Leipzig. Am Vormittag besuche ich Vorlesungen und am Abend lerne ich oft in der Bibliothek. Neben dem Studium jobbe ich in einem Café, weil ich meine Miete selbst bezahle.",
        "<b>المذيعة:</b> المدرسة خلصت – وبعدين؟ النهارده 3 شباب بيحكوا عن خططهم.<br><br><b>مايكه، 19 سنة:</b> بعمل تدريب مهني كبستانية. مكنتش عايزة أقعد على مكتب وبس بعد المدرسة. دلوقتي بشتغل برّه مع النباتات وبكسب شوية فلوس كمان.<br><br><b>سارة، 18 سنة:</b> بعمل سنة تطوعية اجتماعية. بساعد عيلة عندها طفل على كرسي متحرك. كنت عايزة أخد بريك من المذاكرة وأعمل حاجة للناس.<br><br><b>فيدا، 21 سنة:</b> بدرس حقوق في لايبزيج. الصبح بحضر محاضرات وبالليل غالبًا بذاكر في المكتبة. جنب الدراسة بشتغل في كافيه لأني بدفع الإيجار بنفسي.",
        [["Was macht Maike?", "Eine Ausbildung zur Gärtnerin."], ["Warum macht Sara ein Freiwilliges Soziales Jahr?", "Sie wollte eine Pause vom Lernen und etwas für andere Menschen machen."], ["Was studiert Vida?", "Jura in Leipzig."], ["Warum jobbt Vida in einem Café?", "Weil sie ihre Miete selbst bezahlt."]]),
      RD("Info-Text", "Das Schulsystem in Deutschland",
        "In Deutschland gehen alle Kinder mit sechs Jahren in die Grundschule. Sie dauert meistens vier Jahre. Danach gibt es verschiedene Schultypen. Die Hauptschule dauert bis Klasse 9; danach machen viele Schüler eine Ausbildung. Die Realschule geht bis Klasse 10. Mit dem Realschulabschluss kann man eine Ausbildung beginnen oder weiter zur Schule gehen.<br><br>Das Gymnasium dauert acht oder neun Jahre und endet mit dem Abitur. Mit dem Abitur kann man an der Universität studieren. In einer Gesamtschule kann man alle Abschlüsse machen – man muss also nicht schon mit zehn Jahren wählen.<br><br>Wichtig: Das Schulsystem ist in jedem Bundesland ein bisschen anders. Die Schulpflicht dauert in Deutschland mindestens neun Jahre.",
        "في ألمانيا كل الأطفال بيدخلوا المدرسة الابتدائية وهم عندهم 6 سنين. غالبًا بتكمل 4 سنين. بعدها فيه أنواع مختلفة من المدارس. المدرسة الأساسية لحد الصف التاسع؛ وبعدها تلاميذ كتير بيعملوا تدريب مهني. المدرسة المتوسطة لحد الصف العاشر. بشهادتها ممكن تبدأ تدريب مهني أو تكمّل في المدرسة.<br><br>الجيمنازيوم بيكمل 8 أو 9 سنين وبينتهي بالأبيتور. بالأبيتور ممكن تدرس في الجامعة. وفي المدرسة الشاملة ممكن تاخد كل الشهادات – يعني مش لازم تختار وإنت عندك 10 سنين.<br><br>مهم: النظام التعليمي بيختلف شوية في كل ولاية. والتعليم الإلزامي في ألمانيا 9 سنين على الأقل.",
        [["Wie lange dauert die Grundschule meistens?", "Vier Jahre."], ["Womit endet das Gymnasium?", "Mit dem Abitur."], ["Was ist besonders an der Gesamtschule?", "Man kann dort alle Abschlüsse machen."], ["Ist das Schulsystem überall gleich?", "Nein, es ist in jedem Bundesland ein bisschen anders."]])
    ],
    redemittel: [
      R("Über die Schulzeit erzählen", "الحكي عن أيام المدرسة", [
        ["Ich musste jeden Tag um sechs Uhr aufstehen.", "كان لازم أصحى كل يوم الساعة 6."],
        ["In der Schule konnte ich nachmittags Freunde treffen.", "في أيام المدرسة كنت أقدر أقابل أصحابي بعد الضهر."],
        ["Wir durften im Unterricht nicht sprechen.", "كان ممنوع نتكلم في الحصة."],
        ["Mein Lieblingsfach war Geschichte.", "مادتي المفضّلة كانت التاريخ."],
        ["Ich habe schöne Erinnerungen an die Schulzeit.", "عندي ذكريات حلوة عن أيام المدرسة."]
      ]),
      R("Kommentare schreiben", "كتابة تعليقات", [
        ["Das kann ich gut verstehen.", "أنا فاهم ده كويس."],
        ["Das kenne ich auch.", "أنا كمان عارف الإحساس ده."],
        ["Das war bei mir auch so / nicht so.", "عندي كمان كان كده / مكانش كده."],
        ["Das ist ja lustig / schrecklich!", "ده مضحك / فظيع!"],
        ["Das überrascht mich, weil …", "ده مفاجئ بالنسبالي لأن …"]
      ]),
      R("Seine Meinung sagen", "تقول رأيك", [
        ["Ich finde eine Ausbildung gut.", "أنا شايف التدريب المهني كويس."],
        ["Das ist meine Meinung.", "ده رأيي."],
        ["Eine Pause ist wichtig, denke ich.", "البريك مهم، في رأيي."]
      ]),
      R("Zustimmen und ablehnen", "الموافقة والرفض", [
        ["Das stimmt. / Das ist richtig. / Genau.", "ده صحيح. / بالظبط."],
        ["Das ist eine super Idee!", "دي فكرة تحفة!"],
        ["Das stimmt nicht. / So einfach ist das nicht.", "ده مش صحيح. / الموضوع مش بالسهولة دي."],
        ["Das sehe ich anders.", "أنا شايف غير كده."],
        ["Ich denke, das geht nicht.", "أعتقد إن ده مش هينفع."]
      ]),
      R("Überraschung zeigen", "التعبير عن المفاجأة", [
        ["Echt? / Ehrlich?", "بجد؟"],
        ["Ach, nee!", "لأ يا شيخ!"],
        ["Ach, komm!", "يا راجل!"]
      ])
    ],
    speaking: {
      questions: [
        G("Wo bist du zur Schule gegangen und wie lange?", "رحت المدرسة فين وقد إيه؟"),
        G("Was musstest du in der Schule machen? Was durftest du nicht?", "كان لازم تعمل إيه في المدرسة؟ وإيه اللي كان ممنوع؟"),
        G("Was war dein Lieblingsfach? Warum?", "إيه كانت مادتك المفضّلة؟ ليه؟"),
        G("Was hast du nach der Schule gemacht?", "عملت إيه بعد المدرسة؟"),
        G("Ausbildung, Studium oder Weltreise – was findest du am besten? Sag deine Meinung.", "تدريب مهني ولا جامعة ولا رحلة حول العالم – إيه الأحسن في رأيك؟"),
        G("Wie ist das Schulsystem in deinem Land?", "النظام التعليمي في بلدك عامل إزاي؟")
      ],
      model: "Ich bin in Kairo zur Schule gegangen, insgesamt zwölf Jahre. Ich musste jeden Tag um sieben Uhr in der Schule sein und wir mussten eine Schuluniform tragen. Wir durften im Unterricht kein Handy benutzen. Mein Lieblingsfach war Biologie, weil die Lehrerin super erklärt hat. Nach der Schule habe ich Pharmazie studiert. Ich finde ein Studium gut, aber eine Ausbildung ist auch toll, weil man schnell Geld verdient.",
      modelAr: "رحت المدرسة في القاهرة، 12 سنة. كان لازم أكون في المدرسة كل يوم الساعة 7 وكان لازم نلبس يونيفورم. وكان ممنوع نستخدم الموبايل في الحصة. مادتي المفضّلة كانت الأحياء لأن المدرّسة كانت بتشرح تحفة. بعد المدرسة درست صيدلة. أنا شايف الجامعة كويسة، بس التدريب المهني كمان حلو لأنك بتكسب فلوس بسرعة."
    },
    quiz: [
      Q("Früher ___ ich jeden Tag um sechs Uhr aufstehen.", ["musste", "muss", "musstest"], 0, "Präteritum von müssen: ich musste.", "الماضي من müssen: ich musste."),
      Q("Als Kind ___ du nicht allein ins Kino gehen.", ["durftest", "darfst", "durfte"], 0, "du durftest.", "الماضي من dürfen مع du: durftest."),
      Q("Wir ___ in den Ferien ausschlafen.", ["konnten", "können", "konnte"], 0, "wir konnten.", "الماضي من können مع wir: konnten."),
      Q("Ich ___ immer Ärztin werden.", ["wollte", "wolltet", "will werden"], 0, "ich wollte.", "الماضي من wollen مع ich: wollte."),
      Q("Ich gehe mit ___ Freundin ins Kino. (mein)", ["meiner", "meine", "meinem"], 0, "mit + Dativ, feminin: meiner.", "mit + Dativ مؤنث: meiner."),
      Q("Er spricht mit ___ Eltern. (sein)", ["seinen", "seine", "seiner"], 0, "Dativ Plural: seinen Eltern.", "جمع الداتيف: seinen."),
      Q("„Das sehe ich anders.“ bedeutet:", ["Ich habe eine andere Meinung.", "Ich stimme zu.", "Ich sehe nichts."], 0, "Ablehnen: Das sehe ich anders.", "للرفض: Das sehe ich anders."),
      Q("Mit welchem Abschluss kann man studieren?", ["Abitur", "Hauptschulabschluss", "Grundschule"], 0, "Mit dem Abitur kann man an die Universität.", "بالأبيتور تقدر تدخل الجامعة.")
    ]
  };

  /* ---------- Kapitel 3 ---------- */
  content[3] = {
    intro: "In diesem Kapitel geht es um Medien und Filme. Du sprichst über Geräte und Aktivitäten mit Medien, vergleichst Dinge mit Komparativ und Superlativ (als, wie, am besten) und machst ein Interview. Du verstehst Meinungen über Fotos im Internet, äußerst deine Meinung mit dass-Sätzen, sprichst über Filme und schreibst einen Kommentar zu einem Film.",
    introAr: "الوحدة دي عن الإعلام والأفلام. هتتكلم عن الأجهزة والحاجات اللي بنعملها عليها، وتقارن بين الحاجات بصيغة المقارنة والتفضيل (als وwie وam besten)، وتعمل مقابلة. هتفهم آراء عن نشر الصور على النت، وتعبّر عن رأيك بجمل dass، وتتكلم عن الأفلام وتكتب تعليق على فيلم.",
    badges: ["Medien", "Komparativ", "Superlativ", "als / wie", "dass-Sätze", "Meinung", "Film"],
    goals: [
      G("Über Medien und Geräte sprechen: Vor- und Nachteile", "تتكلم عن الإعلام والأجهزة: المميزات والعيوب"),
      G("Vergleiche formulieren: größer als, so groß wie", "تقارن: أكبر من، كبير زي"),
      G("Ein Interview machen (Superlativ: am liebsten, am besten)", "تعمل مقابلة (التفضيل: am liebsten وam besten)"),
      G("Meinungen in Texten verstehen", "تفهم الآراء في النصوص"),
      G("Die eigene Meinung äußern: Ich finde, dass …", "تعبّر عن رأيك: Ich finde, dass …"),
      G("Über Filme sprechen und Filmbeschreibungen verstehen", "تتكلم عن الأفلام وتفهم وصفها"),
      G("Einen Film beschreiben und kommentieren", "توصف فيلم وتعلّق عليه"),
      G("Lange Texte lesen: erst schnell, dann genau", "تقرا النصوص الطويلة: الأول بسرعة وبعدين بالتفصيل")
    ],
    readings: [
      RD("Dialog", "Tablet oder Laptop?",
        "Lina: Ich brauche einen neuen Computer für die Uni. Kaufe ich lieber ein Tablet oder einen Laptop?<br>Ben: Kauf doch ein Tablet. Das ist viel leichter als ein Laptop und auch billiger.<br>Lina: Findest du? Auf dem Laptop kann man aber besser schreiben. Und der Bildschirm ist größer.<br>Ben: Das stimmt. Aber ein Laptop ist nicht so praktisch wie ein Tablet. Du kannst das Tablet überall mitnehmen.<br>Lina: Hm, ich schreibe viele Hausarbeiten. Da arbeite ich lieber mit einer richtigen Tastatur.<br>Ben: Dann nimm doch einen kleinen Laptop. Die sind fast so leicht wie ein Tablet.<br>Lina: Gute Idee! Am wichtigsten ist mir, dass der Akku lange hält.",
        "لينا: محتاجة كمبيوتر جديد للجامعة. أشتري تابلت ولا لابتوب أحسن؟<br>بن: اشتري تابلت. أخف بكتير من اللابتوب وأرخص كمان.<br>لينا: شايف كده؟ بس على اللابتوب الواحد بيكتب أحسن. والشاشة أكبر.<br>بن: صح. بس اللابتوب مش عملي زي التابلت. التابلت تقدري تاخديه في أي حتة.<br>لينا: همم، أنا بكتب أبحاث كتير. ساعتها بفضّل أشتغل بكيبورد حقيقي.<br>بن: خلاص خدي لابتوب صغير. دول تقريبًا خفاف زي التابلت.<br>لينا: فكرة حلوة! أهم حاجة عندي إن البطارية تعيش كتير.",
        [["Wofür braucht Lina einen Computer?", "Für die Uni."], ["Was ist der Vorteil von einem Tablet?", "Es ist leichter und billiger; man kann es überall mitnehmen."], ["Warum möchte Lina lieber einen Laptop?", "Sie schreibt viele Hausarbeiten und möchte eine richtige Tastatur."], ["Was ist für Lina am wichtigsten?", "Dass der Akku lange hält."]]),
      RD("Kommentare", "Fotos posten – ja oder nein?",
        "<b>Carla:</b> Ich finde mein Handy sehr praktisch. Aber ich finde es blöd, dass manche Leute jede Aktivität posten. Es interessiert mich nicht, dass eine Freundin gerade ein Käsebrot isst!<br><br><b>Konstantin:</b> Ich finde es super, dass man immer Kontakt mit Freunden hat. Gestern war ich auf einem Konzert und habe sofort Fotos gepostet. Meinen Freunden hat das sehr gefallen.<br><br><b>Nadica:</b> Ich finde es toll, dass man Freunde schnell informieren kann. Aber man muss nicht jede Party posten – das ist oft peinlich! Ein Kollege hat sich krank gemeldet und am Abend ein Partyfoto gepostet. Die Chefin hat es gesehen …<br><br><b>Ferdinand:</b> Ich sehe das kritisch. Ich finde es nicht gut, dass Eltern Fotos von ihren Kindern posten. Die Kinder können nicht sagen, dass sie das nicht wollen.",
        "<b>كارلا:</b> شايفة الموبايل عملي جدًا. بس شايفة إنه سخيف إن ناس بتنشر كل حاجة بتعملها. مش فارق معايا إن صاحبتي بتاكل ساندويتش جبنة دلوقتي!<br><br><b>كونستانتين:</b> شايف إنه تحفة إن الواحد دايمًا على تواصل مع أصحابه. امبارح كنت في حفلة ونشرت صور على طول. أصحابي عجبهم ده جدًا.<br><br><b>ناديتسا:</b> شايفة إنه حلو إن الواحد يقدر يبلّغ أصحابه بسرعة. بس مش لازم ننشر كل حفلة – ده غالبًا محرج! زميل بلّغ إنه عيّان وبالليل نشر صورة من حفلة. المديرة شافتها …<br><br><b>فرديناند:</b> أنا شايف الموضوع بشكل نقدي. مش شايف إنه كويس إن الأهل ينشروا صور ولادهم. العيال مش بيقدروا يقولوا إنهم مش عايزين ده.",
        [["Was findet Carla blöd?", "Dass manche Leute jede Aktivität posten."], ["Was hat Konstantin gestern gemacht?", "Er war auf einem Konzert und hat sofort Fotos gepostet."], ["Was ist dem Kollegen von Nadica passiert?", "Er hat sich krank gemeldet und ein Partyfoto gepostet; die Chefin hat es gesehen."], ["Was findet Ferdinand nicht gut?", "Dass Eltern Fotos von ihren Kindern posten."]]),
      RD("Filmbeschreibung", "Freunde fürs Leben",
        "Der Film „Freunde fürs Leben“ erzählt die Geschichte von sechs Jugendlichen. Sie kennen sich am Anfang nicht und ihre Leben sind sehr verschieden. Aber alle haben ein Schicksal: eine Krankheit oder einen Unfall. Plötzlich ist alles anders.<br><br>Im Krankenhaus werden die Jugendlichen Freunde. Sie lachen zusammen, sie streiten sich und sie helfen sich. Die Hauptperson ist Leo, ein Junge mit viel Humor. Er möchte allen zeigen, dass man auch in schweren Zeiten fröhlich sein kann.<br><br>Die Schauspieler spielen wirklich toll und die Filmmusik ist sehr schön. Der Film ist manchmal traurig, aber auch sehr lustig. Er zeigt, dass Freundschaft das Wichtigste im Leben ist. Unsere Bewertung: sehr spannend – unbedingt ansehen!",
        "فيلم «أصحاب العمر» بيحكي قصة 6 مراهقين. في الأول مش عارفين بعض وحياتهم مختلفة جدًا. بس كلهم عندهم قدر: مرض أو حادثة. وفجأة كل حاجة بتتغير.<br><br>في المستشفى المراهقين بيبقوا أصحاب. بيضحكوا مع بعض وبيتخانقوا وبيساعدوا بعض. البطل هو ليو، ولد دمه خفيف جدًا. عايز يوري الكل إن الواحد ممكن يبقى مبسوط حتى في الأوقات الصعبة.<br><br>الممثلين أداؤهم تحفة وموسيقى الفيلم جميلة جدًا. الفيلم ساعات حزين بس كمان مضحك جدًا. وبيوري إن الصداقة أهم حاجة في الحياة. تقييمنا: مثير جدًا – لازم تتفرّج عليه!",
        [["Worum geht es im Film?", "Um sechs Jugendliche mit einer Krankheit oder einem Unfall, die im Krankenhaus Freunde werden."], ["Wer ist die Hauptperson?", "Leo, ein Junge mit viel Humor."], ["Wie sind die Schauspieler und die Musik?", "Die Schauspieler spielen toll und die Filmmusik ist sehr schön."], ["Was zeigt der Film?", "Dass Freundschaft das Wichtigste im Leben ist."]])
    ],
    redemittel: [
      R("Vergleiche formulieren", "المقارنة", [
        ["Das Tablet ist leichter als der Laptop.", "التابلت أخف من اللابتوب."],
        ["Der Laptop ist (genau)so praktisch wie das Tablet.", "اللابتوب عملي زي التابلت بالظبط."],
        ["Der Laptop ist nicht so leicht wie das Tablet.", "اللابتوب مش خفيف زي التابلت."],
        ["Ich arbeite lieber mit einem Laptop.", "بفضّل أشتغل على لابتوب."],
        ["Am liebsten bin ich draußen in der Natur.", "أكتر حاجة بحبها إني أكون برّه في الطبيعة."]
      ]),
      R("Ein Interview machen", "عمل مقابلة", [
        ["Was gefällt dir im Beruf am besten?", "إيه أكتر حاجة بتعجبك في شغلك؟"],
        ["Was machst du in der Freizeit am liebsten?", "بتحب تعمل إيه أكتر حاجة في وقت فراغك؟"],
        ["Was war am Anfang am schwierigsten?", "إيه كان أصعب حاجة في الأول؟"],
        ["Was ist dir am wichtigsten?", "إيه أهم حاجة عندك؟"]
      ]),
      R("Die eigene Meinung äußern", "التعبير عن الرأي", [
        ["Ich finde, dass das Posten praktisch ist.", "أنا شايف إن النشر عملي."],
        ["Ich finde es (nicht) gut, dass …", "أنا شايف إنه (مش) كويس إن …"],
        ["Ich bin froh, dass …", "أنا مبسوط إن …"],
        ["Es ist schlecht, dass …", "وحش إن …"],
        ["Ich mag es nicht, dass …", "مش بحب إن …"],
        ["Ich sehe das sehr kritisch.", "أنا شايف ده بشكل نقدي."]
      ]),
      R("Einen Film beschreiben", "وصف فيلم", [
        ["Der Film heißt …", "الفيلم اسمه …"],
        ["Der Film erzählt die Geschichte von …", "الفيلم بيحكي قصة …"],
        ["Es geht um … / Die Hauptperson ist …", "الموضوع عن … / البطل هو …"],
        ["Die Geschichte spielt in Berlin.", "القصة بتدور في برلين."],
        ["Der Film zeigt, dass …", "الفيلم بيوري إن …"]
      ]),
      R("Einen Film kommentieren", "التعليق على فيلم", [
        ["Die Schauspieler waren super.", "الممثلين كانوا تحفة."],
        ["Die Geschichte war sehr interessant / spannend.", "القصة كانت ممتعة / مثيرة جدًا."],
        ["Der Film ist ein bisschen langweilig.", "الفيلم ممل شوية."],
        ["Die Handlung ist nicht logisch.", "الأحداث مش منطقية."],
        ["Der Film hat mir überhaupt nicht gefallen.", "الفيلم ماعجبنيش خالص."]
      ])
    ],
    speaking: {
      questions: [
        G("Welche Geräte benutzt du jeden Tag? Was machst du damit?", "بتستخدم أنهي أجهزة كل يوم؟ وبتعمل بيها إيه؟"),
        G("Vergleiche zwei Geräte: Was ist besser, praktischer, billiger?", "قارن بين جهازين: إيه الأحسن والأعمل والأرخص؟"),
        G("Was machst du in der Freizeit am liebsten? Was ist dir am wichtigsten?", "بتحب تعمل إيه أكتر حاجة في وقت فراغك؟ وإيه أهم حاجة عندك؟"),
        G("Postest du Fotos? Sag deine Meinung mit „Ich finde, dass …“.", "بتنشر صور؟ قول رأيك بـ «Ich finde, dass …»."),
        G("Was ist dein Lieblingsfilm? Worum geht es?", "إيه فيلمك المفضّل؟ عن إيه؟"),
        G("Welchen Film hast du zuletzt gesehen? Wie hat er dir gefallen?", "آخر فيلم شفته إيه؟ وعجبك ولا لأ؟")
      ],
      model: "Ich benutze jeden Tag mein Smartphone. Ich chatte mit Freunden, lese Nachrichten und höre Musik. Für die Arbeit brauche ich einen Laptop, weil ich darauf besser schreiben kann. Ein Tablet ist leichter, aber nicht so praktisch für lange Texte. Fotos poste ich selten. Ich finde, dass man nicht alles im Internet zeigen muss. Am liebsten sehe ich Komödien. Zuletzt habe ich einen Film über eine Freundschaft gesehen. Die Schauspieler waren super und die Geschichte war sehr spannend.",
      modelAr: "بستخدم موبايلي كل يوم. بشات مع أصحابي وبقرا الأخبار وبسمع موسيقى. للشغل محتاج لابتوب لأني بكتب عليه أحسن. التابلت أخف بس مش عملي زي اللابتوب للنصوص الطويلة. نادرًا ما بنشر صور. شايف إن الواحد مش لازم يوري كل حاجة على النت. أكتر حاجة بحب أتفرج على الأفلام الكوميدي. آخر فيلم شفته كان عن صداقة. الممثلين كانوا تحفة والقصة كانت مثيرة جدًا."
    },
    quiz: [
      Q("Ein Tablet ist leichter ___ ein Laptop.", ["als", "wie", "dann"], 0, "Komparativ + als.", "صيغة المقارنة + als."),
      Q("Der Laptop ist so teuer ___ das Smartphone.", ["wie", "als", "dass"], 0, "so … wie = gleich.", "so … wie = زي بعض."),
      Q("Komparativ von „gut“:", ["besser", "güter", "mehr gut"], 0, "gut – besser – am besten.", "شاذة: gut – besser – am besten."),
      Q("Ich trinke ___ Tee als Kaffee. (gern)", ["lieber", "gerner", "mehr gern"], 0, "gern – lieber – am liebsten.", "شاذة: gern – lieber – am liebsten."),
      Q("Wer wohnt am ___ zur Schule? (nah)", ["nächsten", "nahsten", "nähesten"], 0, "nah – näher – am nächsten.", "شاذة: nah – näher – am nächsten."),
      Q("Ich finde, dass das Handy sehr praktisch ___.", ["ist", "sein", "bin"], 0, "dass-Satz: Verb am Ende.", "جملة dass: الفعل في الآخر."),
      Q("Es nervt, dass die Leute Fotos an alle ___.", ["schicken", "schickt", "geschickt"], 0, "Subjekt „die Leute“ → schicken, am Ende.", "الفاعل جمع ← schicken في الآخر."),
      Q("Positiv oder negativ? „Die Handlung ist nicht logisch.“", ["negativ", "positiv", "neutral"], 0, "nicht logisch = Kritik.", "مش منطقية = انتقاد.")
    ]
  };

  /* ---------- Kapitel 4 ---------- */
  content[4] = {
    intro: "In diesem Kapitel geht es um Gefühle und besondere Ereignisse: Hochzeit, Geburt, erster Schultag, Führerschein. Du sprichst über Gefühle mit wenn-Sätzen, gratulierst und bedankst dich, drückst Freude oder Bedauern aus und benutzt reflexive Verben (sich freuen, sich ärgern). Außerdem sprichst du über ein Fest wie die Kieler Woche und verstehst und schreibst Blogs über das Leben im Ausland.",
    introAr: "الوحدة دي عن المشاعر والمناسبات الخاصة: الفرح والولادة وأول يوم مدرسة ورخصة القيادة. هتتكلم عن مشاعرك بجمل wenn، وتهنّي وتشكر، وتعبّر عن الفرحة أو الأسف، وتستخدم الأفعال الانعكاسية (sich freuen وsich ärgern). وكمان هتتكلم عن مهرجان زي «أسبوع كيل» وتفهم وتكتب مدونات عن الحياة في الخارج.",
    badges: ["Gefühle", "wenn-Sätze", "Glückwünsche", "Dank", "Freude und Bedauern", "reflexive Verben", "Feste", "Blogs"],
    goals: [
      G("Über Gefühle sprechen: Ich bin glücklich, wenn …", "تتكلم عن مشاعرك: Ich bin glücklich, wenn …"),
      G("Glückwünsche ausdrücken und Karten schreiben", "تهنّي وتكتب كروت"),
      G("Sich bedanken", "تشكر"),
      G("Freude oder Bedauern ausdrücken und jemanden beruhigen", "تعبّر عن الفرحة أو الأسف وتطمّن حد"),
      G("Reflexive Verben benutzen: sich freuen, sich ärgern, sich treffen", "تستخدم الأفعال الانعكاسية"),
      G("Über ein Ereignis oder eine Veranstaltung sprechen", "تتكلم عن حدث أو فعالية"),
      G("Blogs verstehen und schreiben", "تفهم وتكتب مدونات"),
      G("Texte strukturieren: Abschnitte und Hauptthemen", "تنظّم النصوص: فقرات وأفكار رئيسية")
    ],
    readings: [
      RD("Karten", "Herzlichen Glückwunsch!",
        "<b>Einladung</b><br>Liebe Familie, liebe Freunde,<br>wir heiraten! Am 14. Juni feiern wir unsere Hochzeit im Gasthaus „Zur Linde“. Wir freuen uns sehr, wenn ihr dabei seid. Bitte sagt uns bis Ende April Bescheid.<br>Nora und Karim<br><br><b>Glückwunsch</b><br>Liebes Brautpaar,<br>herzlichen Glückwunsch zur Hochzeit! Wir wünschen euch viel Liebe, Glück und Gesundheit für die Zukunft. Alles Liebe, Tante Hanne und Onkel Paul<br><br><b>Absage</b><br>Liebe Nora, lieber Karim,<br>vielen Dank für die Einladung! Leider können wir nicht kommen, weil wir im Juni in Kanada sind. Das tut uns sehr leid. Wir feiern nach dem Urlaub mit euch!<br>Eure Lisa und Tom<br><br><b>Dank</b><br>Tausend Dank für die vielen Glückwünsche und die schönen Geschenke. Es war ein wunderbarer Tag!",
        "<b>دعوة</b><br>عيلتنا العزيزة وأصحابنا الأعزاء،<br>إحنا هنتجوز! يوم 14 يونيو هنحتفل بفرحنا في مطعم «تسور ليندِه». هنفرح جدًا لو كنتم معانا. من فضلكم بلّغونا لحد آخر أبريل.<br>نورا وكريم<br><br><b>تهنئة</b><br>العريس والعروسة الأعزاء،<br>ألف مبروك على الجواز! بنتمنّالكم حب وسعادة وصحة في المستقبل. مع كل الحب، خالتو هانه وعمو باول<br><br><b>اعتذار</b><br>عزيزتي نورا، عزيزي كريم،<br>شكرًا جزيلًا على الدعوة! للأسف مش هنقدر نيجي لأننا هنبقى في كندا في يونيو. إحنا آسفين جدًا. هنحتفل معاكم بعد الإجازة!<br>ليزا وتوم<br><br><b>شكر</b><br>ألف شكر على كل التهاني والهدايا الحلوة. كان يوم رائع!",
        [["Wann und wo ist die Hochzeit?", "Am 14. Juni im Gasthaus „Zur Linde“."], ["Was wünschen Tante Hanne und Onkel Paul?", "Viel Liebe, Glück und Gesundheit."], ["Warum können Lisa und Tom nicht kommen?", "Weil sie im Juni in Kanada sind."], ["Wofür bedankt sich das Brautpaar?", "Für die Glückwünsche und die Geschenke."]]),
      RD("Info-Text", "Die Kieler Woche",
        "Jedes Jahr im Juni findet in Norddeutschland die Kieler Woche statt. Sie ist weltweit bekannt: Ungefähr drei Millionen Besucher kommen jedes Jahr nach Kiel. Die Kieler Woche ist die größte Segelveranstaltung der Welt. Tausende Segler aus vielen Nationen nehmen an den Regatten teil.<br><br>Aber nicht nur Segelfans haben hier Spaß. Im Hafen kann man alte Schiffe bewundern und es gibt ein großes Sommerfest für Kinder und Erwachsene. Wenn man Hunger hat, findet man an vielen Ständen internationale Spezialitäten. Auch für Musikfans ist viel los: Es gibt über 400 Konzerte, und die meisten sind kostenlos.<br><br>Die Kieler Woche endet immer mit einem großen Feuerwerk. Alle freuen sich dann schon auf das nächste Jahr.",
        "كل سنة في يونيو بيتعمل «أسبوع كيل» في شمال ألمانيا. معروف على مستوى العالم: حوالي 3 مليون زائر بييجوا كيل كل سنة. أسبوع كيل هو أكبر فعالية للإبحار الشراعي في العالم. آلاف البحّارة من دول كتير بيشاركوا في السباقات.<br><br>بس مش بس محبّين الإبحار هما اللي بينبسطوا هنا. في الميناء ممكن تتفرج على سفن قديمة، وفيه حفلة صيف كبيرة للأطفال والكبار. ولو جعت، هتلاقي أكلات دولية في محلات كتير. ولمحبّي الموسيقى كمان فيه حاجات كتير: أكتر من 400 حفلة، ومعظمها ببلاش.<br><br>أسبوع كيل دايمًا بيخلص بألعاب نارية كبيرة. والكل بيبقى مستنّي السنة الجاية بفرحة.",
        [["Wann findet die Kieler Woche statt?", "Jedes Jahr im Juni."], ["Wie viele Besucher kommen?", "Ungefähr drei Millionen."], ["Was kann man im Hafen machen?", "Alte Schiffe bewundern."], ["Womit endet die Kieler Woche?", "Mit einem großen Feuerwerk."]]),
      RD("Blog", "Hier fühle ich mich wohl",
        "Ich komme aus Indien und bin seit dem Frühjahr in Kiel. Ich studiere hier Meeresbiologie. Am Anfang war ich überrascht, wie einfach vieles ist: Die Anmeldung an der Uni und im Wohnheim war schnell, und die Mitarbeiter waren sehr hilfsbereit.<br><br>Man sagt, dass die Deutschen sehr pünktlich sind. Im Verkehr stimmt das: Wenn der Bus um 9:12 Uhr abfahren soll, dann fährt er auch um 9:12 Uhr ab! An das Wetter habe ich mich noch nicht gewöhnt – es regnet so oft.<br><br>Am Anfang habe ich mich ein bisschen fremd gefühlt und meine Familie sehr vermisst. Aber jetzt fühle ich mich wohl. Ich habe nette Freunde gefunden. Wenn wir eine Party machen, bringt jeder etwas zu essen mit. Und wenn ich meine Freunde einlade, koche ich indisches Essen – darüber freuen sie sich immer!",
        "أنا من الهند وفي كيل من الربيع. بدرس هنا أحياء بحرية. في الأول اتفاجئت قد إيه حاجات كتير سهلة: التسجيل في الجامعة والسكن الطلابي كان سريع، والموظفين كانوا خدومين جدًا.<br><br>بيقولوا إن الألمان مواعيدهم مظبوطة جدًا. في المواصلات ده صح: لو الأتوبيس المفروض يقوم 9:12، يبقى بيقوم 9:12 فعلًا! بس لسه ماتعودتش على الجو – بتمطر كتير أوي.<br><br>في الأول حسيت إني غريب شوية وعيلتي وحشتني جدًا. بس دلوقتي مرتاح. لقيت أصحاب لطاف. لما بنعمل حفلة كل واحد بيجيب أكل معاه. ولما بعزم أصحابي بطبخ أكل هندي – ودايمًا بيفرحوا بيه!",
        [["Seit wann ist die Person in Kiel?", "Seit dem Frühjahr."], ["Was war am Anfang überraschend?", "Dass vieles so einfach ist, z. B. die Anmeldung an der Uni."], ["Woran hat sich die Person noch nicht gewöhnt?", "An das Wetter; es regnet so oft."], ["Was macht sie, wenn sie Freunde einlädt?", "Sie kocht indisches Essen."]])
    ],
    redemittel: [
      R("Über Gefühle sprechen", "الكلام عن المشاعر", [
        ["Ich bin glücklich, wenn ich mit Freunden feiern kann.", "ببقى مبسوط لما أقدر أحتفل مع أصحابي."],
        ["Ich bin nervös, wenn ich eine Prüfung habe.", "ببقى متوتر لما يكون عندي امتحان."],
        ["Wenn ich einen Horrorfilm sehe, habe ich Angst.", "لما أتفرج على فيلم رعب ببقى خايف."],
        ["Ich ärgere mich, wenn der Bus zu spät kommt.", "بتضايق لما الأتوبيس يتأخر."],
        ["Heute habe ich schlechte Laune.", "مزاجي وحش النهارده."]
      ]),
      R("Glückwünsche ausdrücken", "التهنئة", [
        ["Herzlichen Glückwunsch zur Hochzeit!", "ألف مبروك على الجواز!"],
        ["Alles Gute zum Geburtstag!", "كل سنة وإنت طيب!"],
        ["Viel Glück bei der Prüfung!", "بالتوفيق في الامتحان!"],
        ["Wir wünschen euch viel Liebe und Glück.", "بنتمنّالكم حب وسعادة كتير."],
        ["Wir gratulieren dir herzlich!", "بنهنّيك من قلبنا!"]
      ]),
      R("Sich bedanken", "الشكر", [
        ["Vielen Dank für die Einladung!", "شكرًا جزيلًا على الدعوة!"],
        ["Tausend Dank für das schöne Geschenk!", "ألف شكر على الهدية الحلوة!"],
        ["Wir möchten uns für die Glückwünsche bedanken.", "عايزين نشكركم على التهاني."],
        ["Danke schön! Das ist sehr lieb von dir.", "شكرًا! ده لطف منك."]
      ]),
      R("Freude ausdrücken", "التعبير عن الفرحة", [
        ["Das ist ja toll!", "ده رائع!"],
        ["Ich freue mich riesig!", "أنا فرحان جدًا!"],
        ["So ein Glück!", "يا لها من حظ!"],
        ["Das gibt's doch nicht!", "مش معقول!"]
      ]),
      R("Bedauern ausdrücken und beruhigen", "التعبير عن الأسف والتطمين", [
        ["Das tut mir wirklich leid!", "أنا آسف جدًا!"],
        ["Schade! / So ein Pech!", "خسارة! / يا للحظ الوحش!"],
        ["Oh, ist das peinlich! Das ist mir so unangenehm.", "أوه، ده محرج! أنا متكسف جدًا."],
        ["Das macht doch nichts. Keine Sorge!", "ولا يهمّك. متقلقش!"],
        ["Es ist alles okay. Hauptsache, wir feiern jetzt.", "كل حاجة تمام. المهم إننا بنحتفل دلوقتي."]
      ]),
      R("Über ein Fest sprechen", "الكلام عن مهرجان", [
        ["Das Fest ist bekannt für …", "المهرجان معروف بـ …"],
        ["Es findet immer im Juni statt.", "دايمًا بيتعمل في يونيو."],
        ["Man kann dort viel sehen, essen und hören.", "ممكن تشوف وتاكل وتسمع حاجات كتير هناك."],
        ["Das Fest ist kostenlos.", "المهرجان ببلاش."],
        ["Es endet mit einem Feuerwerk.", "بيخلص بألعاب نارية."]
      ])
    ],
    speaking: {
      questions: [
        G("Wann bist du glücklich? Wann bist du nervös? Antworte mit wenn.", "إمتى بتبقى مبسوط؟ وإمتى بتبقى متوتر؟ جاوب بـ wenn."),
        G("Welche Feste feiert man in deinem Land? Wie?", "إيه المناسبات اللي بيحتفلوا بيها في بلدك؟ وإزاي؟"),
        G("Gratuliere einem Freund zum Geburtstag oder zur Hochzeit.", "هنّي صاحبك بعيد ميلاده أو فرحه."),
        G("Ein Glas ist runtergefallen. Entschuldige dich – dein Partner beruhigt dich.", "كوباية وقعت. اعتذر – وزميلك يطمّنك."),
        G("Wann ärgerst du dich? Worauf freust du dich?", "إمتى بتتضايق؟ وإيه اللي مستنّيه بفرحة؟"),
        G("Warst du schon im Ausland? Wie hast du dich gefühlt?", "سافرت بره قبل كده؟ حسيت بإيه؟")
      ],
      model: "Ich bin glücklich, wenn meine Familie zusammen ist. Bei uns in Ägypten feiern wir Hochzeiten sehr groß – mit vielen Gästen, Musik und Tanz. Letzten Monat hat meine Cousine geheiratet. Ich habe ihr eine Karte geschrieben: „Herzlichen Glückwunsch! Ich wünsche euch viel Liebe.“ Ich ärgere mich, wenn Leute unpünktlich sind. Und ich freue mich schon auf den Sommer, weil ich dann meine Eltern besuche.",
      modelAr: "ببقى مبسوط لما عيلتي تبقى متجمّعة. عندنا في مصر بنحتفل بالأفراح جامد – بضيوف كتير وموسيقى ورقص. الشهر اللي فات بنت عمي اتجوزت. كتبتلها كارت: «ألف مبروك! بتمنّالكم حب كتير.» بتضايق لما الناس مش بتيجي في مواعيدها. ومستنّي الصيف بفرحة لأني هزور أهلي ساعتها."
    },
    quiz: [
      Q("Ich bin traurig, ___ meine Freundin wegfährt.", ["wenn", "weil dann", "dass"], 0, "Bedingung/Zeit: wenn + Verb am Ende.", "شرط أو وقت: wenn والفعل في الآخر."),
      Q("Wenn ich Urlaub habe, ___ ich meine Familie.", ["besuche", "ich besuche", "besuchen"], 0, "Nach dem wenn-Satz kommt das Verb zuerst.", "بعد جملة wenn الفعل ييجي الأول."),
      Q("Ich freue ___ auf die Party.", ["mich", "mir", "sich"], 0, "ich → mich.", "الضمير الانعكاسي مع ich هو mich."),
      Q("Ärgerst ___ dich oft?", ["du", "dich", "dir"], 0, "Subjekt du + Reflexivpronomen dich.", "الفاعل du والضمير dich."),
      Q("Wir treffen ___ morgen.", ["uns", "euch", "sich"], 0, "wir → uns.", "الضمير الانعكاسي مع wir هو uns."),
      Q("Ein Freund hat die Prüfung bestanden. Was sagst du?", ["Herzlichen Glückwunsch!", "Gute Besserung!", "Das tut mir leid."], 0, "Gratulieren: Herzlichen Glückwunsch!", "للتهنئة: Herzlichen Glückwunsch!"),
      Q("Ein Freund ist traurig, weil er zu spät ist. Wie beruhigst du ihn?", ["Das macht doch nichts.", "So ein Glück!", "Ich freue mich riesig."], 0, "Beruhigen: Das macht doch nichts.", "للتطمين: Das macht doch nichts."),
      Q("Ich bedanke mich ___ das Geschenk.", ["für", "über", "auf"], 0, "sich bedanken für + Akkusativ.", "sich bedanken بييجي مع für.")
    ]
  };

  /* ---------- Kapitel 5 ---------- */
  content[5] = {
    intro: "In diesem Kapitel geht es um das Leben in der Stadt. Du sprichst über wichtige Einrichtungen einer Stadt, verstehst ein Vorstellungsgespräch und fragst nach Dingen – mit Adjektiven nach dem bestimmten Artikel. Du verstehst Gespräche bei der Bank, bei Behörden und bei der Polizei (mit und ohne), bittest höflich mit könnte und folgst einer Stadt-Tour über die Wiener Ringstraße.",
    introAr: "الوحدة دي عن الحياة في المدينة. هتتكلم عن الأماكن المهمة في المدينة، وتفهم مقابلة شغل، وتسأل عن الحاجات – بالصفات بعد أداة التعريف. هتفهم الكلام في البنك والمصالح الحكومية والشرطة (mit وohne)، وتطلب بأدب بـ könnte، وتمشي مع جولة في شارع الرينج في فيينا.",
    badges: ["Stadt", "Vorstellungsgespräch", "Adjektive nach bestimmtem Artikel", "Bank", "Behörde", "mit / ohne", "könnte", "Wien"],
    goals: [
      G("Über Einrichtungen in der Stadt sprechen: Polizei, Krankenhaus, Müllabfuhr", "تتكلم عن الخدمات في المدينة: الشرطة والمستشفى وجمع الزبالة"),
      G("Ein Vorstellungsgespräch verstehen", "تفهم مقابلة شغل"),
      G("Nach Dingen fragen und Dinge beschreiben: der schwarze Rock", "تسأل عن حاجات وتوصفها: der schwarze Rock"),
      G("Gespräche bei Banken und Behörden verstehen", "تفهم الكلام في البنوك والمصالح الحكومية"),
      G("Sagen, was man mit oder ohne etwas (nicht) kann", "تقول إيه اللي تقدر أو ماتقدرش تعمله بحاجة أو من غيرها"),
      G("Höflich um etwas bitten: Könnten Sie …?", "تطلب بأدب: Könnten Sie …?"),
      G("Einer Stadt-Tour folgen und eine Stadt beschreiben", "تمشي مع جولة في المدينة وتوصف مدينة"),
      G("Sich eine Situation vor dem Hören vorstellen", "تتخيّل الموقف قبل ما تسمع")
    ],
    readings: [
      RD("Blog", "Hallo Wien!",
        "Seit vorgestern bin ich in Wien und alles ist super! Meine Vermieterin ist sehr nett und hat mir schon viel über die Stadt erzählt. Mein Zimmer ist klein, aber hell und gemütlich.<br><br>Gestern habe ich mir den Stephansdom angesehen und einen langen Spaziergang im Zentrum gemacht. Dabei habe ich in ein paar Restaurants und Cafés nach einem Job als Aushilfe gefragt. Ich möchte ja noch vor dem Studium Geld verdienen. Und stellt euch vor: Ich habe morgen um halb zehn ein Vorstellungsgespräch in einem modernen Restaurant! Die Speisekarte hat mir sehr gut gefallen. Drückt mir die Daumen!<br><br>Danach muss ich dringend ein paar Dinge erledigen: Ich brauche ein Konto für meinen Lohn und ich muss mich bei der Behörde anmelden.",
        "من أول امبارح وأنا في فيينا وكل حاجة تحفة! صاحبة السكن لطيفة جدًا وحكتلي كتير عن المدينة. أوضتي صغيرة بس منوّرة ومريحة.<br><br>امبارح اتفرجت على كاتدرائية القديس ستيفان وعملت تمشية طويلة في وسط البلد. وفي الطريق سألت في كام مطعم وكافيه عن شغل مؤقت. عايزة أكسب فلوس قبل الدراسة. وتخيّلوا: عندي بكرة الساعة 9:30 مقابلة شغل في مطعم حديث! المنيو عجبني جدًا. ادعولي!<br><br>بعدها لازم أخلّص كام حاجة مستعجلة: محتاجة حساب بنكي لمرتّبي ولازم أسجّل نفسي في المصلحة.",
        [["Seit wann ist Valentina in Wien?", "Seit vorgestern."], ["Was hat sie gestern gemacht?", "Sie hat sich den Stephansdom angesehen, einen Spaziergang gemacht und nach einem Job gefragt."], ["Wann ist das Vorstellungsgespräch?", "Morgen um halb zehn."], ["Was muss sie danach erledigen?", "Ein Konto eröffnen und sich bei der Behörde anmelden."]]),
      RD("Dialoge", "Bei der Bank, beim Amt und bei der Polizei",
        "<b>A – Bei der Behörde</b><br>Beamtin: Guten Tag. Was kann ich für Sie tun?<br>Frau Nowak: Ich möchte meinen Pass verlängern. Er ist nur noch einen Monat gültig.<br>Beamtin: Haben Sie ein aktuelles Foto mitgebracht? Ohne Foto geht es leider nicht.<br>Frau Nowak: Ja, hier, bitte.<br><br><b>B – In der Bank</b><br>Herr Varga: Ich möchte ein Konto eröffnen. Ich habe eine neue Stelle und brauche ein Konto für meinen Lohn.<br>Angestellte: Gern. Füllen Sie bitte dieses Formular aus und unterschreiben Sie hier. Ihre Bankkarte können Sie nächste Woche abholen.<br><br><b>C – Bei der Polizei</b><br>Herr Ziegler: Ich möchte einen Diebstahl melden. In der U-Bahn hat jemand meine Geldbörse gestohlen.<br>Polizistin: Das tut mir leid. Was war in der Geldbörse?<br>Herr Ziegler: Mein Ausweis, meine Kreditkarte und 50 Euro. Könnten Sie mir bitte helfen? Ich muss die Karte sperren.",
        "<b>أ – في المصلحة</b><br>الموظفة: نهارك سعيد. أقدر أعمل لحضرتك إيه؟<br>السيدة نوفاك: عايزة أجدّد الباسبور. صالح شهر واحد بس.<br>الموظفة: جبتي صورة حديثة؟ من غير صورة للأسف مش هينفع.<br>السيدة نوفاك: أيوه، اتفضلي.<br><br><b>ب – في البنك</b><br>السيد فارجا: عايز أفتح حساب. عندي شغل جديد ومحتاج حساب لمرتّبي.<br>الموظفة: بكل سرور. املا الاستمارة دي ووقّع هنا. كارت البنك تقدر تستلمه الأسبوع الجاي.<br><br><b>ج – في الشرطة</b><br>السيد تسيجلر: عايز أبلّغ عن سرقة. حد سرق محفظتي في المترو.<br>الشرطية: آسفة جدًا. كان إيه في المحفظة؟<br>السيد تسيجلر: البطاقة وكارت الائتمان و50 يورو. ممكن تساعديني لو سمحتي؟ لازم أوقف الكارت.",
        [["Was möchte Frau Nowak?", "Ihren Pass verlängern."], ["Was braucht sie für den Pass?", "Ein aktuelles Foto."], ["Warum braucht Herr Varga ein Konto?", "Für seinen Lohn; er hat eine neue Stelle."], ["Was ist Herrn Ziegler passiert?", "Jemand hat in der U-Bahn seine Geldbörse gestohlen."]]),
      RD("Stadt-Tour", "Rund um den Ring: Wien",
        "Die Ringstraße ist eine der schönsten Straßen in Wien. Sie ist ungefähr fünf Kilometer lang und an ihr stehen viele berühmte Gebäude.<br><br>Wir beginnen beim Parlament. Hier machen die Politiker neue Gesetze. Das große Gebäude ist über 140 Jahre alt. Direkt daneben steht das Rathaus von Wien.<br><br>Gegenüber vom Rathaus sehen Sie das Burgtheater, das wichtigste Theater in Österreich. Über 100 Schauspielerinnen und Schauspieler arbeiten hier.<br><br>Dann gehen wir in den Volksgarten. Hier finden Wiener und Touristen Ruhe und Entspannung. Im Sommer kann man in zwei Lokalen Pause machen, und nachts feiern junge Leute in der Clubdisco.<br><br>Zum Schluss besuchen wir die Staatsoper. Hier können Sie am Abend eine berühmte Oper hören – wenn Sie ein Ticket bekommen!",
        "شارع الرينج من أجمل شوارع فيينا. طوله حوالي 5 كيلو وعليه مباني مشهورة كتير.<br><br>هنبدأ من البرلمان. هنا السياسيين بيعملوا القوانين الجديدة. المبنى الكبير ده عمره أكتر من 140 سنة. وجنبه على طول مبنى بلدية فيينا.<br><br>قصاد البلدية هتشوف «البورج تياتر»، أهم مسرح في النمسا. أكتر من 100 ممثلة وممثل بيشتغلوا هنا.<br><br>بعدين هنروح «فولكس جارتن». هنا أهل فيينا والسيّاح بيلاقوا الهدوء والراحة. في الصيف ممكن تاخد بريك في مطعمين، وبالليل الشباب بيسهروا في الديسكو.<br><br>وفي الآخر هنزور دار الأوبرا. هنا ممكن تسمع أوبرا مشهورة بالليل – لو لقيت تذكرة!",
        [["Wie lang ist die Ringstraße?", "Ungefähr fünf Kilometer."], ["Was machen die Politiker im Parlament?", "Neue Gesetze."], ["Was ist das Burgtheater?", "Das wichtigste Theater in Österreich."], ["Was kann man im Volksgarten machen?", "Ruhe finden, in Lokalen Pause machen, nachts in der Clubdisco feiern."]])
    ],
    redemittel: [
      R("Im Vorstellungsgespräch", "في مقابلة الشغل", [
        ["Freut mich! Schön, Sie kennenzulernen.", "تشرّفنا! سعيد بمعرفتك."],
        ["Haben Sie schon in einem Restaurant gearbeitet?", "اشتغلت قبل كده في مطعم؟"],
        ["An welchen Tagen können Sie arbeiten?", "تقدر تشتغل أنهي أيام؟"],
        ["Ich kann auch spontan arbeiten.", "أقدر أشتغل في أي وقت كمان."],
        ["Wie ist die Bezahlung?", "المرتّب كام؟"],
        ["Ich gebe Ihnen morgen Bescheid.", "هبلّغك بكرة."]
      ]),
      R("Nach Dingen fragen und sie beschreiben", "السؤال عن الحاجات ووصفها", [
        ["Wo ist die weiße Bluse? – Im Schrank.", "البلوزة البيضا فين؟ – في الدولاب."],
        ["Ich ziehe den schwarzen Rock an.", "هلبس الجيبة السودا."],
        ["Die bequemen Schuhe stehen im Schrank.", "الجزمة المريحة في الدولاب."],
        ["Wer sieht den grauen Mantel?", "مين شايف البالطو الرمادي؟"]
      ]),
      R("Bei Bank und Behörde", "في البنك والمصلحة", [
        ["Ich möchte ein Konto eröffnen.", "عايز أفتح حساب."],
        ["Ich möchte einen Betrag überweisen.", "عايز أحوّل مبلغ."],
        ["Ich möchte meinen Pass verlängern.", "عايز أجدّد الباسبور."],
        ["Ich möchte einen Personalausweis beantragen.", "عايز أطلّع بطاقة شخصية."],
        ["Wo muss ich unterschreiben?", "أوقّع فين؟"],
        ["Ich möchte einen Diebstahl melden.", "عايز أبلّغ عن سرقة."]
      ]),
      R("Mit und ohne", "مع ومن غير", [
        ["Ohne meinen Führerschein darf ich nicht Auto fahren.", "من غير رخصتي ماينفعش أسوق."],
        ["Ohne Bankkarte kann ich kein Geld abheben.", "من غير كارت البنك ماقدرش أسحب فلوس."],
        ["Mit einem Pass dürfen Sie über die Grenze fahren.", "بالباسبور تقدر تعدّي الحدود."],
        ["Mit einer Fahrkarte kann man U-Bahn fahren.", "بالتذكرة الواحد يقدر يركب المترو."]
      ]),
      R("Höflich bitten", "الطلب بأدب", [
        ["Könnten Sie mir bitte helfen?", "ممكن تساعدني لو سمحت؟"],
        ["Könnten Sie bitte meine Karte sperren?", "ممكن توقف الكارت بتاعي لو سمحت؟"],
        ["Könntest du mich bitte abholen?", "ممكن تعدّي تاخدني لو سمحت؟"],
        ["Könnte ich mal mit deinem Handy telefonieren?", "ممكن أكلّم من موبايلك؟"],
        ["Ja, gern. / Tut mir leid, mein Akku ist leer.", "أيوه، بكل سرور. / آسف، البطارية خلصانة."]
      ]),
      R("Eine Stadt beschreiben", "وصف مدينة", [
        ["In meiner Stadt gibt es viele Sehenswürdigkeiten.", "في مدينتي فيه معالم كتير."],
        ["Das wichtigste Gebäude ist das Rathaus.", "أهم مبنى هو البلدية."],
        ["Im Park findet man Ruhe und Entspannung.", "في الجنينة الواحد بيلاقي الهدوء والراحة."],
        ["Die Innenstadt ist sehr belebt.", "وسط البلد زحمة ومليان حياة."]
      ])
    ],
    speaking: {
      questions: [
        G("Was ist für dich wichtig in einer Stadt?", "إيه المهم بالنسبالك في المدينة؟"),
        G("Spiel ein Vorstellungsgespräch: Du möchtest als Aushilfe arbeiten.", "مثّل مقابلة شغل: عايز تشتغل شغل مؤقت."),
        G("Beschreibe deine Kleidung heute: Ich trage den blauen Pullover …", "اوصف لبسك النهارده: Ich trage den blauen Pullover …"),
        G("Was hast du schon bei einer Behörde oder Bank erledigt?", "عملت إيه قبل كده في مصلحة أو بنك؟"),
        G("Bitte deinen Partner höflich um drei Dinge (könnte).", "اطلب من زميلك 3 حاجات بأدب (könnte)."),
        G("Stell eine Stadt vor, die du gut kennst.", "قدّم مدينة إنت عارفها كويس.")
      ],
      model: "Für mich ist in einer Stadt wichtig, dass die öffentlichen Verkehrsmittel gut sind und dass es viele Parks gibt. Letzten Monat war ich bei der Behörde. Ich musste meinen Pass verlängern. Ohne ein aktuelles Foto ging es nicht, also bin ich noch einmal zum Fotografen gegangen. In der Bank habe ich ein Konto eröffnet. Die Angestellte war sehr freundlich. Ich habe gefragt: „Könnten Sie mir bitte das Formular erklären?“ Meine Lieblingsstadt ist Alexandria, weil man dort am Meer spazieren gehen kann.",
      modelAr: "المهم بالنسبالي في المدينة إن المواصلات العامة تبقى كويسة ويكون فيه جناين كتير. الشهر اللي فات كنت في المصلحة. كان لازم أجدّد الباسبور. من غير صورة حديثة ماكانش ينفع، فرحت للمصوّر تاني. وفي البنك فتحت حساب. الموظفة كانت لطيفة جدًا. سألتها: «ممكن تشرحيلي الاستمارة لو سمحتي؟» مدينتي المفضّلة إسكندرية لأن الواحد يقدر يتمشّى على البحر هناك."
    },
    quiz: [
      Q("Der ___ Rock ist neu. (schwarz)", ["schwarze", "schwarzen", "schwarzer"], 0, "Nominativ nach der: -e.", "بعد der في حالة الفاعل: -e."),
      Q("Ich ziehe den ___ Rock an. (schwarz)", ["schwarzen", "schwarze", "schwarzes"], 0, "Akkusativ maskulin nach den: -en.", "المفعول المذكر بعد den: -en."),
      Q("Mit dem ___ T-Shirt gehe ich zur Arbeit. (weiß)", ["weißen", "weiße", "weißes"], 0, "Dativ: immer -en.", "في الداتيف دايمًا -en."),
      Q("Die ___ Schuhe stehen im Schrank. (bequem)", ["bequemen", "bequeme", "bequemer"], 0, "Plural nach die: -en.", "الجمع بعد die: -en."),
      Q("Ohne ___ Pass können Sie nicht reisen. (Ihr)", ["Ihren", "Ihrem", "Ihr"], 0, "ohne + Akkusativ: Ihren Pass.", "بعد ohne بييجي Akkusativ: Ihren."),
      Q("Mit ___ Fahrkarte kann man U-Bahn fahren. (eine)", ["einer", "eine", "einen"], 0, "mit + Dativ: einer.", "بعد mit بييجي Dativ: einer."),
      Q("Sehr höflich: „___ Sie mir bitte helfen?“", ["Könnten", "Können", "Kann"], 0, "Konjunktiv II: könnten = sehr höflich.", "könnten = مؤدبة جدًا."),
      Q("Ihre Geldbörse ist weg. Wohin gehen Sie?", ["zur Polizei", "zum Bäcker", "ins Kino"], 0, "Diebstahl → Polizei.", "سرقة ← الشرطة.")
    ]
  };

  /* ---------- Kapitel 6 ---------- */
  content[6] = {
    intro: "In diesem Kapitel geht es um die Arbeitswelt. Du sprichst über Tätigkeiten im Beruf, kaufst Fahrkarten am Schalter und planst eine Geschäftsreise. Du verstehst Freizeitangebote und beschreibst sie mit Adjektiven nach dem unbestimmten Artikel. Du sprichst über Berufswechsel und Traumberufe (werden), bereitest ein Telefongespräch vor und gibst Informationen über die moderne Arbeitswelt weiter.",
    introAr: "الوحدة دي عن عالم الشغل. هتتكلم عن المهام في الشغل، وتشتري تذاكر من الشباك وتخطط لرحلة عمل. هتفهم عروض وقت الفراغ وتوصفها بالصفات بعد أداة النكرة. هتتكلم عن تغيير المهنة ومهنة الأحلام (werden)، وتحضّر لمكالمة تليفون، وتنقل معلومات عن عالم الشغل الحديث.",
    badges: ["Tätigkeiten", "Bahnreisen", "Adjektive nach unbestimmtem Artikel", "werden", "Traumberuf", "Telefonieren", "moderne Arbeitswelt"],
    goals: [
      G("Über Tätigkeiten im Beruf sprechen", "تتكلم عن المهام في الشغل"),
      G("Ein Gespräch am Fahrkartenschalter führen", "تتكلم عند شباك التذاكر"),
      G("Über Freizeitangebote sprechen: ein elegantes Restaurant", "تتكلم عن عروض وقت الفراغ: مطعم أنيق"),
      G("Texten Informationen entnehmen und Personen vorstellen", "تاخد معلومات من النصوص وتقدّم أشخاص"),
      G("Berufswünsche äußern und über einen Traumberuf schreiben (werden)", "تقول المهنة اللي نفسك فيها وتكتب عن مهنة أحلامك (werden)"),
      G("Ein Telefongespräch vorbereiten und telefonieren", "تحضّر لمكالمة وتتكلم في التليفون"),
      G("Informationen über die moderne Arbeitswelt weitergeben", "تنقل معلومات عن عالم الشغل الحديث"),
      G("Auf Deutsch telefonieren üben", "تتمرّن على الكلام في التليفون بالألماني")
    ],
    readings: [
      RD("Dialog", "Am Fahrkartenschalter",
        "Bahn-Mitarbeiterin: Guten Morgen! Was kann ich für Sie tun?<br>David: Guten Morgen. Zwei Fahrkarten nach Wiesbaden, bitte.<br>Bahn-Mitarbeiterin: Wann möchten Sie fahren?<br>David: Jetzt gleich. Wir haben um zwölf einen wichtigen Termin.<br>Bahn-Mitarbeiterin: Der nächste Zug fährt um 9:47 Uhr von Gleis 6. Sie müssen in Frankfurt umsteigen und kommen um 11:34 Uhr in Wiesbaden an. Einfach oder hin und zurück?<br>David: Hin und zurück, bitte. Zweite Klasse.<br>Bahn-Mitarbeiterin: Möchten Sie Plätze reservieren?<br>David: Ja, bitte zwei Plätze nebeneinander am Fenster.<br>Bahn-Mitarbeiterin: Haben Sie eine BahnCard?<br>David: Ja, hier ist sie. Was kostet das zusammen?<br>Bahn-Mitarbeiterin: Das macht 96 Euro.",
        "موظفة السكة الحديد: صباح الخير! أقدر أعمل لحضرتك إيه؟<br>دافيد: صباح النور. تذكرتين لفيسبادن لو سمحتي.<br>الموظفة: عايز تسافر إمتى؟<br>دافيد: دلوقتي على طول. عندنا ميعاد مهم الساعة 12.<br>الموظفة: القطر الجاي بيقوم 9:47 من رصيف 6. هتغيّر في فرانكفورت وهتوصل فيسبادن 11:34. ذهاب بس ولا ذهاب وعودة؟<br>دافيد: ذهاب وعودة لو سمحتي. درجة تانية.<br>الموظفة: تحب تحجز أماكن؟<br>دافيد: أيوه، مكانين جنب بعض جنب الشباك لو سمحتي.<br>الموظفة: معاك كارت BahnCard؟<br>دافيد: أيوه، اتفضلي. الحساب كله كام؟<br>الموظفة: 96 يورو.",
        [["Wohin fahren David und Andreas?", "Nach Wiesbaden."], ["Wo müssen sie umsteigen?", "In Frankfurt."], ["Wann kommen sie an?", "Um 11:34 Uhr."], ["Was kostet das zusammen?", "96 Euro."]]),
      RD("Zeitungsartikel", "Neuer Job, neues Glück?",
        "Einen Jobwechsel kennt fast jeder. Aber manche Menschen fangen beruflich ganz neu an. Wir stellen zwei Beispiele vor.<br><br><b>Vom Büro zum eigenen Laden:</b> Marlies Haunstein hat nach ihrem Studium fast 20 Jahre als Übersetzerin gearbeitet. Dann wurde sie arbeitslos. Sie wollte schon lange etwas für die Umwelt tun und hat die Chance genutzt: Heute hat sie einen kleinen Laden und verkauft Lebensmittel ohne Plastik. Das finanzielle Risiko ist größer, aber sie hat ihre Entscheidung nie bereut.<br><br><b>Vom Operationssaal in den Lkw:</b> Markus Studer war 25 Jahre lang ein erfolgreicher Herzchirurg. Mit 55 hat er aufgehört und ist Fernfahrer geworden – das wollte er schon als Kind. Jetzt verdient er viel weniger, aber er liebt die Freiheit auf der Straße. „Es war die richtige Entscheidung“, sagt er.",
        "تغيير الشغل حاجة كل الناس تقريبًا عارفاها. بس فيه ناس بتبدأ مهنيًا من الأول خالص. هنقدّملكم مثالين.<br><br><b>من المكتب لمحل خاص:</b> مارليس هاونشتاين اشتغلت بعد دراستها حوالي 20 سنة مترجمة. بعدين بقت عاطلة. كانت من زمان عايزة تعمل حاجة للبيئة واستغلّت الفرصة: النهارده عندها محل صغير بتبيع فيه أكل من غير بلاستيك. المخاطرة المالية أكبر، بس عمرها ما ندمت على قرارها.<br><br><b>من غرفة العمليات للشاحنة:</b> ماركوس شتودر كان جرّاح قلب ناجح 25 سنة. وهو عنده 55 بطّل وبقى سوّاق نقل – ده كان حلمه من وهو صغير. دلوقتي بيكسب أقل بكتير، بس بيحب الحرية على الطريق. «كان القرار الصح»، بيقول.",
        [["Was war Marlies Haunstein früher von Beruf?", "Übersetzerin."], ["Was verkauft sie heute?", "Lebensmittel ohne Plastik."], ["Was ist Markus Studer geworden?", "Fernfahrer."], ["Warum ist er zufrieden?", "Er liebt die Freiheit auf der Straße; es war die richtige Entscheidung."]]),
      RD("Ratgeber", "Erfolgreich telefonieren",
        "Sie müssen ein wichtiges Telefongespräch führen und sind nervös? Bereiten Sie sich gut vor, dann wird es leichter!<br><br>Zuerst ist es wichtig, dass niemand Sie stört. Machen Sie die Musik aus und schließen Sie Tür und Fenster. So können Sie sich besser konzentrieren. Schreiben Sie vorher Ihre Fragen auf ein Blatt Papier, dann vergessen Sie nichts. Legen Sie auch einen Stift bereit: So können Sie wichtige Informationen sofort notieren und müssen nicht hektisch suchen.<br><br>Ist die Person nicht da? Dann hinterlassen Sie eine Nachricht oder fragen Sie: „Kann sie mich zurückrufen?“ Auf dem Anrufbeantworter nennen Sie langsam und deutlich Ihren Namen, Ihre Nummer und den Grund für Ihren Anruf.<br><br>Und ganz wichtig: Lächeln Sie! Man kann das Lächeln am Telefon „hören“.",
        "لازم تعمل مكالمة مهمة وإنت متوتر؟ حضّر نفسك كويس، والموضوع هيبقى أسهل!<br><br>الأول مهم إن محدش يزعجك. اقفل المزيكا واقفل الباب والشباك. كده هتقدر تركّز أحسن. اكتب أسئلتك قبلها على ورقة، كده مش هتنسى حاجة. وحضّر قلم كمان: كده تقدر تكتب المعلومات المهمة على طول من غير ما تدوّر بتوتر.<br><br>الشخص مش موجود؟ يبقى سيب رسالة أو اسأل: «ممكن يكلّمني تاني؟» وعلى الأنسر ماشين قول اسمك ورقمك وسبب مكالمتك ببطء ووضوح.<br><br>وأهم حاجة: ابتسم! الابتسامة ممكن «تتسمع» في التليفون.",
        [["Was ist vor dem Telefonieren wichtig?", "Dass niemand stört: Musik aus, Tür und Fenster zu."], ["Warum soll man die Fragen vorher aufschreiben?", "Dann vergisst man nichts."], ["Was sagt man auf dem Anrufbeantworter?", "Namen, Nummer und den Grund für den Anruf – langsam und deutlich."], ["Was ist ganz wichtig?", "Lächeln."]])
    ],
    redemittel: [
      R("Über Tätigkeiten im Beruf sprechen", "الكلام عن مهام الشغل", [
        ["Ich organisiere gern Projekte.", "بحب أنظّم مشاريع."],
        ["Ich muss oft am Wochenende arbeiten.", "غالبًا لازم أشتغل في الويك إند."],
        ["Ich berate Kunden und kontrolliere Termine.", "بنصح العملا وبراجع المواعيد."],
        ["Termine einhalten finde ich schwer.", "الالتزام بالمواعيد صعب بالنسبالي."],
        ["Hier klappt gar nichts!", "مفيش حاجة ماشية هنا!"]
      ]),
      R("Am Fahrkartenschalter: Fahrgast", "عند شباك التذاكر: الراكب", [
        ["Eine Fahrkarte nach Berlin, bitte.", "تذكرة لبرلين لو سمحت."],
        ["Wann fährt der nächste Zug nach …?", "القطر الجاي لـ … بيقوم إمتى؟"],
        ["Muss ich umsteigen?", "لازم أغيّر؟"],
        ["Wann komme ich in … an?", "هوصل … إمتى؟"],
        ["Hin und zurück, zweite Klasse, bitte.", "ذهاب وعودة، درجة تانية لو سمحت."],
        ["Am Fenster, bitte. / Bitte zwei Plätze nebeneinander.", "جنب الشباك لو سمحت. / مكانين جنب بعض لو سمحت."]
      ]),
      R("Am Fahrkartenschalter: Mitarbeiter/in", "عند الشباك: الموظف", [
        ["Einfach oder hin und zurück?", "ذهاب بس ولا ذهاب وعودة؟"],
        ["Sie müssen in Frankfurt umsteigen.", "لازم تغيّر في فرانكفورت."],
        ["Der Zug fährt um 9:47 Uhr von Gleis 6.", "القطر بيقوم 9:47 من رصيف 6."],
        ["Möchten Sie einen Platz reservieren?", "تحب تحجز مكان؟"],
        ["Haben Sie eine BahnCard?", "معاك BahnCard؟"]
      ]),
      R("Berufswünsche äußern", "التعبير عن المهنة المرغوبة", [
        ["Ich wollte schon immer Tiertrainer werden.", "كنت دايمًا عايز أبقى مدرّب حيوانات."],
        ["Mit 15 wollte ich Pilotin werden.", "وأنا عندي 15 سنة كنت عايزة أبقى طيارة."],
        ["Ich finde den Beruf toll, weil …", "شايف المهنة تحفة لأن …"],
        ["Mein Traumberuf ist …", "مهنة أحلامي هي …"]
      ]),
      R("Telefonieren: Anrufer/in", "التليفون: المتصل", [
        ["Kann ich bitte mit Herrn Jeschke sprechen?", "ممكن أكلّم السيد يشكه لو سمحت؟"],
        ["Können Sie mich bitte mit Frau Bauer verbinden?", "ممكن توصّلني بالسيدة باور لو سمحت؟"],
        ["Kann ich eine Nachricht hinterlassen?", "ممكن أسيب رسالة؟"],
        ["Können Sie mir bitte die Durchwahl geben?", "ممكن تديني الرقم الداخلي لو سمحت؟"]
      ]),
      R("Telefonieren: Firma", "التليفون: الشركة", [
        ["Herr Jeschke ist gerade nicht am Platz.", "السيد يشكه مش على مكتبه دلوقتي."],
        ["Frau Bauer ist außer Haus.", "السيدة باور برّه المكتب."],
        ["Möchten Sie eine Nachricht hinterlassen?", "تحب تسيب رسالة؟"],
        ["Kann er Sie zurückrufen?", "ممكن يكلّمك تاني؟"],
        ["Ach so! Ja, in Ordnung. Also gut.", "آه كده! أيوه تمام. خلاص ماشي."]
      ])
    ],
    speaking: {
      questions: [
        G("Welche Tätigkeiten machst du gern, welche nicht so gern?", "إيه المهام اللي بتحب تعملها، وإيه اللي مش بتحبها أوي؟"),
        G("Kauf eine Fahrkarte am Schalter: Ziel, Zeit, Klasse, Platz.", "اشتري تذكرة من الشباك: الوجهة والوقت والدرجة والمكان."),
        G("Was gibt es in deiner Stadt am Abend? Empfiehl etwas: ein gemütliches Café …", "فيه إيه في مدينتك بالليل؟ رشّح حاجة: كافيه مريح …"),
        G("Was wolltest du als Kind werden? Was ist dein Traumberuf?", "كنت عايز تبقى إيه وإنت صغير؟ وإيه مهنة أحلامك؟"),
        G("Du rufst in einer Firma an, aber die Person ist nicht da. Spiel das Gespräch.", "بتكلّم شركة والشخص مش موجود. مثّل المكالمة."),
        G("Wie verändert sich die Arbeitswelt? Was findest du gut, was nicht?", "عالم الشغل بيتغيّر إزاي؟ إيه اللي شايفه كويس وإيه لأ؟")
      ],
      model: "Ich arbeite in einem Büro. Ich organisiere gern Projekte und berate Kunden, aber ich muss leider oft Überstunden machen. Als Kind wollte ich Pilot werden, weil ich Flugzeuge toll fand. Heute ist mein Traumberuf Koch, denn ich koche sehr gern. Vielleicht mache ich mich später selbstständig und eröffne ein kleines Restaurant. In meiner Stadt gibt es ein gemütliches Café mit einem schönen Garten – das kann ich empfehlen. Ich finde gut, dass man heute mobil arbeiten kann, aber man muss auch an die Freizeit denken.",
      modelAr: "أنا بشتغل في مكتب. بحب أنظّم مشاريع وأنصح العملا، بس للأسف غالبًا لازم أعمل ساعات إضافية. وأنا صغير كنت عايز أبقى طيار، لأني كنت شايف الطيارات تحفة. النهارده مهنة أحلامي طبّاخ، لأني بحب الطبخ جدًا. يمكن بعدين أفتح شغل لحسابي وأعمل مطعم صغير. في مدينتي فيه كافيه مريح بجنينة حلوة – أرشّحه. شايف إنه كويس إن الواحد يقدر يشتغل من أي مكان النهارده، بس لازم يفتكر وقت فراغه كمان."
    },
    quiz: [
      Q("Wir suchen ein ___ Restaurant. (elegant)", ["elegantes", "elegante", "eleganten"], 0, "Akkusativ neutral nach ein: -es.", "المحايد بعد ein: -es."),
      Q("Das ist ein ___ Klassiker. (bekannt)", ["bekannter", "bekannte", "bekannten"], 0, "Nominativ maskulin nach ein: -er.", "المذكر بعد ein في حالة الفاعل: -er."),
      Q("Sie singt mit einer ___ Band. (toll)", ["tollen", "tolle", "toller"], 0, "Dativ: -en.", "الداتيف: -en."),
      Q("Ich habe keine ___ Probleme. (groß)", ["großen", "große", "großer"], 0, "Plural nach kein-: -en.", "الجمع بعد kein: -en."),
      Q("Er ___ Fernfahrer. (werden, Präsens)", ["wird", "werdet", "wirst"], 0, "er wird.", "تصريف werden مع er: wird."),
      Q("Sie ___ arbeitslos. (werden, Präteritum)", ["wurde", "wird", "geworden"], 0, "Präteritum: sie wurde.", "الماضي: sie wurde."),
      Q("Einfach oder ___?", ["hin und zurück", "hin und her", "mit und ohne"], 0, "Am Schalter: einfach oder hin und zurück.", "عند الشباك: ذهاب بس ولا ذهاب وعودة."),
      Q("Herr Jeschke ist nicht da. Was fragt die Firma?", ["Möchten Sie eine Nachricht hinterlassen?", "Wann fährt der Zug?", "Haben Sie eine BahnCard?"], 0, "Am Telefon: eine Nachricht hinterlassen.", "في التليفون: تسيب رسالة.")
    ]
  };

  if (!Array.isArray(window.BOOK0)) return;
  window.BOOK0.forEach(chapter => {
    const lesson = content[chapter.num];
    if (!lesson) return;
    /* keep the pictures of the earlier readings for the new texts */
    const pictures = [...(chapter.readings || []).map(reading => reading.visual), ...(chapter.scenes || [])].filter(picture => picture?.src);
    lesson.readings.forEach((reading, index) => {
      const picture = pictures[index];
      if (picture) reading.visual = { ...picture, alt: reading.title };
    });
    /* the quiz is authored with the right option first; move it to a varying position */
    lesson.quiz.forEach((item, index) => {
      const target = (index * 2 + chapter.num) % item.o.length;
      [item.o[0], item.o[target]] = [item.o[target], item.o[0]];
      item.a = target;
    });
    Object.assign(chapter, lesson);
    const skip = /Grammatik|Kurssprache|Weitere/;
    chapter.readings.forEach(reading => {
      const text = reading.text.toLocaleLowerCase('de-DE');
      const seen = new Set();
      const words = chapter.vocab.filter(item => {
        const plain = String(item.w || '').replace(/^(der|die|das)\s+/i, '').split(/[,(]/)[0].trim();
        const key = plain.toLocaleLowerCase('de-DE');
        if (seen.has(key) || skip.test(item.cat || '') || plain.length < 5 || !/[؀-ۿ]/.test(item.ar || '') || !text.includes(key)) return false;
        seen.add(key);
        return true;
      }).slice(0, 8);
      reading.glossary = words.map(item => [item.w, item.ar]);
      if (reading.glossary.length < 5) {
        const used = new Set(reading.glossary.map(item => item[0]));
        chapter.vocab.filter(item => !used.has(item.w) && !skip.test(item.cat || '') && String(item.w).length > 4).slice(0, 5 - reading.glossary.length).forEach(item => reading.glossary.push([item.w, item.ar]));
      }
    });
  });
})();
