/* Lesson sections for Netzwerk neu A1.2, chapters 7-12: goals, reading texts with
   comprehension questions, ready-made phrases (Redemittel), speaking tasks and a quiz.
   Loaded after data_a12_vocab.js. All texts are original learning texts that follow the
   topics and communicative goals of the coursebook chapters. */
(function enrichA12Lessons(){
  const G = (de, ar) => ({ de, ar });
  const R = (cat, catAr, items) => ({ cat, catAr, items: items.map(([de, ar]) => ({ de, ar })) });
  const Q = (q, o, a, fb, fbAr) => ({ q, o, a, fb, fbAr });
  const RD = (kind, title, text, ar, questions) => ({ kind, title, text, ar, questions });
  const content = {};

  /* ---------- Kapitel 7 ---------- */
  content[7] = {
    intro: "In diesem Kapitel geht es um den Arbeitsalltag. Du verstehst einen Blog über ein Praktikum, sprichst über deinen Alltag und verbindest Sätze mit und, oder, aber. Du sagst, wohin du gehst, wo du bist und woher du kommst, beschreibst Abläufe am Computer, schreibst einen kurzen formellen Brief und machst Small Talk im Büro.",
    introAr: "الوحدة دي عن روتين الشغل. هتفهم مدونة عن تدريب عملي، وتتكلم عن يومك، وتربط الجمل بـ und وoder وaber. هتقول رايح فين وإنت فين وجاي منين، وتوصف خطوات الشغل على الكمبيوتر، وتكتب جواب رسمي قصير، وتعمل Small Talk في المكتب.",
    badges: ["Arbeitsalltag", "und / oder / aber", "Dativ", "mit + Dativ", "zu, bei, aus, von", "Computer", "Briefe", "Small Talk"],
    goals: [
      G("Einen Blogbeitrag über den Arbeitsalltag verstehen", "تفهم تدوينة عن روتين الشغل"),
      G("Über den eigenen (Arbeits-)Alltag schreiben", "تكتب عن يومك وشغلك"),
      G("Gespräche am Arbeitsplatz verstehen", "تفهم الكلام في الشغل"),
      G("Ortsangaben machen: Wohin? Wo? Woher?", "تحدد المكان: لفين؟ فين؟ منين؟"),
      G("Abläufe am Computer beschreiben: zuerst, dann", "توصف خطوات الشغل على الكمبيوتر: الأول، بعدين"),
      G("Formelle Briefe verstehen und beantworten", "تفهم الجوابات الرسمية وترد عليها"),
      G("Small Talk im Büro machen", "تعمل دردشة خفيفة في المكتب"),
      G("Grammatik: und/oder/aber, Artikel im Dativ, Präpositionen mit Dativ", "القواعد: und/oder/aber، الأدوات في الداتيف، حروف الجر مع الداتيف")
    ],
    readings: [
      RD("Blog", "Meine erste Woche im Büro",
        "Hallo zusammen! Seit Montag mache ich ein Praktikum bei einer kleinen Firma in Hamburg. Ich muss jeden Tag um acht Uhr im Büro sein. Zuerst fahre ich den Computer hoch und lese meine E-Mails. Dann haben wir oft eine Besprechung mit der Chefin. Sie ist sehr nett und erklärt viel, aber manchmal hat sie keine Zeit.<br><br>Um zwölf mache ich Mittagspause. Ich esse mit meinen Kollegen in der Kantine oder ich gehe allein in den Park. Am Nachmittag telefoniere ich mit Kunden und schreibe Berichte. Das ist nicht leicht, und ich mache noch viele Fehler. Mein Kollege Jonas korrigiert meine Texte – danke, Jonas!<br><br>Am Freitag fahre ich mit der Chefin zu einem Kunden. Ich freue mich schon!",
        "أهلا بيكم! من يوم الاتنين بعمل تدريب عملي في شركة صغيرة في هامبورغ. لازم أكون في المكتب كل يوم الساعة 8. الأول بشغّل الكمبيوتر وبقرا إيميلاتي. بعدين غالبًا بيكون عندنا اجتماع مع المديرة. هي لطيفة جدًا وبتشرح كتير، بس ساعات مبيبقاش عندها وقت.<br><br>الساعة 12 باخد استراحة الغدا. باكل مع زمايلي في الكافيتيريا أو بروح الجنينة لوحدي. بعد الضهر بكلّم العملا في التليفون وبكتب تقارير. ده مش سهل، ولسه بغلط كتير. زميلي يوناس بيصحّحلي نصوصي – شكرًا يا يوناس!<br><br>يوم الجمعة هروح مع المديرة لعميل. أنا مبسوط من دلوقتي!",
        [["Wo macht die Person ein Praktikum?", "Bei einer kleinen Firma in Hamburg."], ["Was macht sie zuerst am Morgen?", "Sie fährt den Computer hoch und liest E-Mails."], ["Wer korrigiert ihre Texte?", "Ihr Kollege Jonas."], ["Was macht sie am Freitag?", "Sie fährt mit der Chefin zu einem Kunden."]]),
      RD("Brief", "Einladung zum Sommerfest",
        "Sprachcafé International · Lindenstraße 12 · 50674 Köln<br><br>Herrn<br>Karim Haddad<br>Ringstraße 5<br>50823 Köln<br><br>Köln, 2. Juni<br><br><b>Einladung zum Sommerfest</b><br><br>Sehr geehrter Herr Haddad,<br>herzlich willkommen im Sprachcafé! Wir treffen uns jeden Mittwoch um 19 Uhr und sprechen Deutsch, Arabisch und Englisch. Am 21. Juni feiern wir unser Sommerfest im Stadtgarten. Es gibt Spezialitäten aus vielen Ländern, Spiele für Kinder und Erwachsene und ab 20 Uhr spielt eine Musikgruppe. Kommen Sie auch? Bitte schreiben Sie uns bis zum 15. Juni.<br><br>Mit freundlichen Grüßen<br>Sabine Krämer",
        "مقهى اللغات الدولي · شارع ليندن 12 · 50674 كولن<br><br>السيد<br>كريم حداد<br>شارع رينج 5<br>50823 كولن<br><br>كولن، 2 يونيو<br><br><b>دعوة لحفلة الصيف</b><br><br>السيد المحترم حداد،<br>أهلا بيك في مقهى اللغات! بنتقابل كل أربع الساعة 7 بالليل وبنتكلم ألماني وعربي وإنجليزي. يوم 21 يونيو هنحتفل بحفلة الصيف في حديقة المدينة. هيكون فيه أكلات مميزة من بلاد كتير، وألعاب للأطفال والكبار، ومن الساعة 8 هتعزف فرقة موسيقية. هتيجي؟ من فضلك ابعتلنا لحد 15 يونيو.<br><br>مع خالص التحيات<br>زابينه كريمر",
        [["Wer ist der Empfänger?", "Herr Karim Haddad."], ["Wann trifft sich das Sprachcafé?", "Jeden Mittwoch um 19 Uhr."], ["Wo ist das Sommerfest?", "Im Stadtgarten."], ["Bis wann soll Herr Haddad antworten?", "Bis zum 15. Juni."]]),
      RD("Dialog", "Small Talk im Aufzug",
        "Frau Lenz: Guten Morgen, Herr Petrović! Na, wie war Ihr Wochenende?<br>Herr Petrović: Guten Morgen! Sehr schön, danke. Wir waren am Samstag mit den Kindern im Zoo. Und Sie?<br>Frau Lenz: Ich war bei meiner Schwester in Bonn. Leider hat es den ganzen Tag geregnet.<br>Herr Petrović: Ach, das Wetter ist schrecklich, oder? Und heute ist es schon wieder so kalt.<br>Frau Lenz: Ja, wirklich. Sagen Sie, sehen Sie heute Abend das Fußballspiel?<br>Herr Petrović: Nein, ich mag Fußball nicht so gern. Ich spiele lieber Tennis.<br>Frau Lenz: Ah, Tennis ist auch toll. Oh, hier ist mein Stock. Bis später!<br>Herr Petrović: Bis dann, Frau Lenz!",
        "السيدة لنتس: صباح الخير يا أستاذ بتروفيتش! ها، الويك إند كان عامل إزاي؟<br>السيد بتروفيتش: صباح الخير! كان حلو جدًا، شكرًا. يوم السبت كنا مع العيال في جنينة الحيوانات. وحضرتك؟<br>السيدة لنتس: كنت عند أختي في بون. للأسف الدنيا مطّرت طول اليوم.<br>السيد بتروفيتش: آه، الجو فظيع، مش كده؟ والنهارده تاني برد أوي.<br>السيدة لنتس: أيوه فعلًا. قولّي، هتتفرج على الماتش النهارده بالليل؟<br>السيد بتروفيتش: لأ، أنا مش بحب الكورة أوي. بفضّل ألعب تنس.<br>السيدة لنتس: آه، التنس كمان حلو. أوه، ده الدور بتاعي. أشوفك بعدين!<br>السيد بتروفيتش: سلام يا أستاذة لنتس!",
        [["Wo war Herr Petrović am Samstag?", "Mit den Kindern im Zoo."], ["Wie war das Wetter bei Frau Lenz?", "Es hat den ganzen Tag geregnet."], ["Mag Herr Petrović Fußball?", "Nein, nicht so gern. Er spielt lieber Tennis."], ["Über welche Themen sprechen die beiden?", "Über das Wochenende, das Wetter und Sport."]])
    ],
    redemittel: [
      R("Über den Arbeitsalltag sprechen", "الكلام عن روتين الشغل", [
        ["Ich muss schon um halb acht im Büro sein.", "لازم أكون في المكتب 7 ونص."],
        ["Am Vormittag habe ich oft Besprechungen.", "الصبح غالبًا عندي اجتماعات."],
        ["Ich telefoniere gern, aber die Computerarbeit finde ich nicht so toll.", "بحب أتكلم في التليفون، بس شغل الكمبيوتر مش عاجبني أوي."],
        ["Um zehn mache ich Pause.", "الساعة 10 باخد استراحة."],
        ["Meine Kollegen sind sehr nett und erklären viel.", "زمايلي لطاف جدًا وبيشرحوا كتير."]
      ]),
      R("Wohin? Wo? Woher?", "لفين؟ فين؟ منين؟", [
        ["Wohin gehst du? – Zum Chef. / Zur Bank.", "رايح فين؟ – للمدير. / للبنك."],
        ["Wo warst du? – Beim Arzt. / Bei der Chefin.", "كنت فين؟ – عند الدكتور. / عند المديرة."],
        ["Woher kommst du? – Aus der Bank. / Vom Chef.", "جاي منين؟ – من البنك. / من عند المدير."],
        ["Ich bin in der Bank. / Er ist im Haus.", "أنا في البنك. / هو في البيت."]
      ]),
      R("Eine Reihenfolge beschreiben", "وصف الترتيب", [
        ["Zuerst fahre ich den Computer hoch.", "الأول بشغّل الكمبيوتر."],
        ["Dann gebe ich das Passwort ein.", "بعدين بكتب الباسورد."],
        ["Dann öffne ich die Datei und speichere sie.", "بعدين بفتح الملف وبحفظه."],
        ["Zum Schluss drucke ich den Text.", "في الآخر بطبع النص."]
      ]),
      R("Probleme mit Medien", "مشاكل مع الأجهزة", [
        ["Ich habe kein Netz.", "مفيش شبكة."],
        ["Das WLAN ist so langsam.", "الواي فاي بطيء أوي."],
        ["Mist, mein Akku ist leer.", "أوف، البطارية خلصت."],
        ["Der Drucker druckt nicht.", "الطابعة مش بتطبع."]
      ]),
      R("Briefe schreiben", "كتابة الجوابات", [
        ["Sehr geehrte Damen und Herren, …", "السادة المحترمين، …"],
        ["Sehr geehrte Frau Arends, / Sehr geehrter Herr Müller,", "السيدة المحترمة أرندس، / السيد المحترم مولر،"],
        ["Liebe Frau …, / Lieber Herr …,", "عزيزتي السيدة … / عزيزي السيد …"],
        ["Vielen Dank für Ihren Brief.", "شكرًا جزيلًا على جوابك."],
        ["Mit freundlichen Grüßen / Viele Grüße", "مع خالص التحيات / تحياتي"]
      ]),
      R("Small Talk machen", "الدردشة الخفيفة", [
        ["Heute ist es wieder heiß.", "النهارده الجو حر تاني."],
        ["Ach, jetzt regnet es schon wieder. Das ist schrecklich, oder?", "يوه، بتمطر تاني. ده فظيع، مش كده؟"],
        ["Sehen Sie auch das Fußballspiel heute Abend?", "هتتفرج على الماتش النهارده بالليل؟"],
        ["Und wie war Ihr Wochenende?", "والويك إند بتاعك كان عامل إزاي؟"],
        ["Endlich Freitag! Was machen Sie am Wochenende?", "أخيرًا الجمعة! هتعمل إيه في الويك إند؟"],
        ["Wie geht es Ihren Kindern?", "ولادك عاملين إيه؟"]
      ])
    ],
    speaking: {
      questions: [
        G("Wie sieht dein Arbeitstag oder dein Tag im Kurs aus?", "يومك في الشغل أو في الكورس شكله إزاي؟"),
        G("Was machst du gern bei der Arbeit, was nicht so gern?", "إيه اللي بتحب تعمله في الشغل، وإيه اللي مش بتحبه أوي؟"),
        G("Wohin gehst du heute noch? Wo warst du gestern?", "هتروح فين النهارده؟ وكنت فين امبارح؟"),
        G("Beschreibe: Wie druckst du einen Text am Computer?", "اوصف: إزاي بتطبع نص على الكمبيوتر؟"),
        G("Mach Small Talk: Sprich über das Wetter und das Wochenende.", "اعمل Small Talk: اتكلم عن الجو والويك إند."),
        G("Welche Themen findest du gut für Small Talk, welche nicht?", "أنهي مواضيع شايفها كويسة للـ Small Talk، وأنهي لأ؟")
      ],
      model: "Ich arbeite in einem Büro. Morgens fahre ich mit der U-Bahn zur Arbeit. Zuerst fahre ich den Computer hoch und lese meine E-Mails, dann habe ich oft eine Besprechung. Ich telefoniere gern mit Kunden, aber die Computerarbeit finde ich nicht so toll. In der Mittagspause esse ich mit meinen Kollegen. Nach der Arbeit gehe ich manchmal noch zur Bank oder zum Supermarkt. Im Aufzug mache ich oft Small Talk: über das Wetter oder das Wochenende.",
      modelAr: "أنا بشتغل في مكتب. الصبح بروح الشغل بالمترو. الأول بشغّل الكمبيوتر وبقرا الإيميلات، بعدين غالبًا عندي اجتماع. بحب أكلّم العملا في التليفون، بس شغل الكمبيوتر مش عاجبني أوي. في استراحة الغدا باكل مع زمايلي. بعد الشغل ساعات بروح البنك أو السوبر ماركت. في الأسانسير غالبًا بعمل Small Talk: عن الجو أو الويك إند."
    },
    quiz: [
      Q("Ich fahre ___ dem Bus zur Arbeit.", ["mit", "zu", "aus"], 0, "Verkehrsmittel: mit + Dativ.", "وسيلة المواصلات: mit + Dativ."),
      Q("Am Nachmittag geht Julia ___ Chef.", ["zum", "zur", "beim"], 0, "zu + dem = zum (Richtung).", "zu + dem = zum (اتجاه)."),
      Q("Tom muss heute ___ Bank gehen.", ["zur", "zum", "bei der"], 0, "zu + der = zur.", "die Bank مؤنث: zu + der = zur."),
      Q("Um 15 Uhr ist Julia ___ Chef.", ["beim", "zum", "vom"], 0, "Wo? bei + dem = beim.", "فين؟ bei + dem = beim."),
      Q("Die Firma ist klein, ___ sie hat viele Kunden.", ["aber", "oder", "und"], 0, "Gegensatz: aber.", "للتعارض بنستخدم aber."),
      Q("Ich spreche mit ___ Kollegin.", ["der", "die", "dem"], 0, "mit + Dativ: die Kollegin → mit der Kollegin.", "بعد mit داتيف: die بتبقى der."),
      Q("Kommst du nicht mit? – ___, ich komme mit!", ["Doch", "Ja", "Nein"], 0, "Positive Antwort auf eine negative Frage: Doch.", "الرد بالإيجاب على سؤال منفي: Doch."),
      Q("Formeller Brief: Wie endet er?", ["Mit freundlichen Grüßen", "Tschüs und Kuss", "Bis gleich"], 0, "Formeller Gruß: Mit freundlichen Grüßen.", "التحية الرسمية في الآخر: Mit freundlichen Grüßen.")
    ]
  };

  /* ---------- Kapitel 8 ---------- */
  content[8] = {
    intro: "In diesem Kapitel geht es um Fitness und Gesundheit. Du verstehst und gibst Aufforderungen mit dem Imperativ, sagst Alter, Größe und Gewicht, nennst Körperteile und führst Gespräche beim Arzt. Du gibst wieder, was der Arzt sagt (sollen), sprichst über Gebote und Verbote (müssen, dürfen) und gibst Gesundheitstipps.",
    introAr: "الوحدة دي عن اللياقة والصحة. هتفهم وتدّي أوامر بصيغة الأمر (Imperativ)، وتقول سنك وطولك ووزنك، وتسمّي أعضاء الجسم، وتتكلم مع الدكتور. هتنقل كلام الدكتور (sollen)، وتتكلم عن المسموح والممنوع (müssen وdürfen)، وتدّي نصايح صحية.",
    badges: ["Fitness", "Imperativ", "Körperteile", "beim Arzt", "sollen", "müssen / dürfen", "Hausmittel", "Krankenhaus"],
    goals: [
      G("Aufforderungen verstehen und ausdrücken (Imperativ)", "تفهم الأوامر وتقولها (صيغة الأمر)"),
      G("Persönliche Angaben machen: Alter, Größe, Gewicht", "تدّي بياناتك: السن والطول والوزن"),
      G("Körperteile nennen", "تسمّي أعضاء الجسم"),
      G("Gespräche beim Arzt führen", "تتكلم مع الدكتور"),
      G("Anweisungen wiedergeben (sollen)", "تنقل التعليمات (sollen)"),
      G("Gebote und Verbote verstehen und geben (müssen, nicht dürfen)", "تفهم وتقول اللازم والممنوع"),
      G("Gesundheitstipps verstehen und geben", "تفهم وتدّي نصايح صحية"),
      G("Wörter erschließen: Komposita, Kontext, internationale Wörter", "تستنتج معنى الكلمات: الكلمات المركبة والسياق والكلمات الدولية")
    ],
    readings: [
      RD("Blog", "Mein Fitness-Experiment",
        "Seit drei Wochen mache ich ein Experiment: einen Monat gesund leben! Jeden Morgen stehe ich um sechs Uhr auf und jogge eine halbe Stunde im Park. Am Anfang war das schwer, aber jetzt geht es gut. Danach dusche ich und frühstücke: Müsli mit Obst und einen Tee.<br><br>Ich trinke jeden Tag mindestens zwei Liter Wasser. Süßigkeiten esse ich nicht mehr – die Schokolade habe ich meiner Nachbarin gegeben. Mittags esse ich Salat oder Suppe, abends nur ein bisschen. Abends bin ich müde und gehe früh ins Bett.<br><br>Meine Freunde sagen: „Komm doch mal mit! Sei nicht so langweilig!“ Aber ich will das schaffen. Noch eine Woche – dann gibt es wieder Pizza!",
        "من تلات أسابيع بعمل تجربة: أعيش شهر بشكل صحي! كل يوم الصبح بصحى الساعة 6 وبجري نص ساعة في الجنينة. في الأول كان صعب، بس دلوقتي ماشي كويس. بعدها باخد دش وبفطر: موسلي بالفاكهة وشاي.<br><br>بشرب كل يوم على الأقل 2 لتر مية. الحلويات مبقتش آكلها – الشوكولاتة إديتها لجارتي. الضهر باكل سلطة أو شوربة، وبالليل حاجة بسيطة. بالليل ببقى تعبان وبنام بدري.<br><br>أصحابي بيقولوا: «تعالى معانا! متبقاش ممل كده!» بس أنا عايز أنجح في ده. فاضل أسبوع – بعدها هيبقى فيه بيتزا تاني!",
        [["Wie lange dauert das Experiment?", "Einen Monat."], ["Was macht die Person jeden Morgen?", "Sie steht um sechs auf und joggt eine halbe Stunde."], ["Wie viel Wasser trinkt sie?", "Mindestens zwei Liter am Tag."], ["Wem hat sie die Schokolade gegeben?", "Ihrer Nachbarin."]]),
      RD("Dialog", "In der Arztpraxis",
        "Ärztin: Guten Tag, Herr Yilmaz. Was fehlt Ihnen denn?<br>Herr Yilmaz: Guten Tag, Frau Doktor. Ich bin total erkältet. Mein Hals tut weh und ich muss immer husten.<br>Ärztin: Haben Sie auch Fieber?<br>Herr Yilmaz: Ja, gestern Abend hatte ich 38,5 Grad.<br>Ärztin: Machen Sie bitte den Mund auf … Ja, der Hals ist sehr rot. Sie haben eine Grippe. Sie müssen im Bett bleiben und viel Tee trinken. Ich gebe Ihnen ein Rezept für Tabletten und einen Hustensaft.<br>Herr Yilmaz: Wie oft muss ich die Tabletten nehmen?<br>Ärztin: Nehmen Sie dreimal täglich eine Tablette nach dem Essen. Und Sie dürfen eine Woche nicht arbeiten.<br>Herr Yilmaz: Darf ich duschen?<br>Ärztin: Ja, kurz duschen ist erlaubt. Aber baden Sie nicht! Gute Besserung!",
        "الدكتورة: نهارك سعيد يا أستاذ يلماظ. بتشتكي من إيه؟<br>السيد يلماظ: نهارك سعيد يا دكتورة. أنا عندي برد جامد. زوري بيوجعني وبكحّ على طول.<br>الدكتورة: عندك سخونية كمان؟<br>السيد يلماظ: أيوه، امبارح بالليل كانت 38.5.<br>الدكتورة: افتح بقك لو سمحت … أيوه، الزور أحمر جدًا. عندك إنفلونزا. لازم تفضل في السرير وتشرب شاي كتير. هكتبلك روشتة لحبوب وشراب كحة.<br>السيد يلماظ: أخد الحبوب كام مرة؟<br>الدكتورة: خد حباية 3 مرات في اليوم بعد الأكل. وممنوع تشتغل أسبوع.<br>السيد يلماظ: ينفع آخد دش؟<br>الدكتورة: أيوه، دش سريع مسموح. بس متاخدش حمّام في البانيو! سلامتك!",
        [["Was tut Herrn Yilmaz weh?", "Der Hals."], ["Was hat er?", "Eine Grippe."], ["Wie oft muss er die Tabletten nehmen?", "Dreimal täglich nach dem Essen."], ["Was darf er nicht machen?", "Er darf nicht arbeiten und nicht baden."]]),
      RD("Forum", "Hausmittel gegen Schnupfen und Kopfschmerzen",
        "Lena: Hilfe! Ich habe seit Tagen Schnupfen und Kopfschmerzen. Ich möchte keine Tabletten nehmen. Hat jemand einen Tipp?<br><br>Marco: Trink heißen Tee mit Ingwer und Honig! Das hilft bei mir immer. Und schlaf viel.<br><br>Amina: Meine Oma sagt: Hühnersuppe hilft! Koch die Suppe eine Stunde und iss sie heiß. Die Nase ist dann sofort wieder frei.<br><br>Tom: Bei Kopfschmerzen gehe ich an die frische Luft. Mach einen Spaziergang und trink genug Wasser. Sitz nicht den ganzen Tag am Computer!<br><br>Lena: Danke für eure Tipps! Ich koche heute eine Suppe und gehe dann früh ins Bett.",
        "لينا: النجدة! عندي رشح وصداع من كام يوم. مش عايزة آخد حبوب. حد عنده نصيحة؟<br><br>ماركو: اشربي شاي سخن بالجنزبيل والعسل! ده دايمًا بيفيدني. ونامي كتير.<br><br>أمينة: تيتة بتقول: شوربة الفراخ بتفيد! اطبخي الشوربة ساعة وكُليها سخنة. المناخير هتتفتح على طول.<br><br>توم: لما يبقى عندي صداع بطلع في الهوا. اتمشّي واشربي مية كفاية. متقعديش طول اليوم قدام الكمبيوتر!<br><br>لينا: شكرًا على نصايحكم! هعمل شوربة النهارده وبعدين هنام بدري.",
        [["Welche Probleme hat Lena?", "Schnupfen und Kopfschmerzen."], ["Was empfiehlt Marco?", "Heißen Tee mit Ingwer und Honig und viel schlafen."], ["Was sagt Aminas Oma?", "Hühnersuppe hilft."], ["Was macht Lena heute?", "Sie kocht eine Suppe und geht früh ins Bett."]])
    ],
    redemittel: [
      R("Aufforderungen (Imperativ)", "الأوامر (صيغة الأمر)", [
        ["Steh auf! Mach Sport!", "قوم! اعمل رياضة!"],
        ["Trink mindestens zwei Liter!", "اشرب على الأقل 2 لتر!"],
        ["Steht auf! Seid aktiv!", "قوموا! خليكو نشيطين!"],
        ["Gehen Sie ins Fitness-Studio!", "روح الجيم (لحضرتك)!"],
        ["Mach bitte das Fenster auf!", "افتح الشباك لو سمحت!"]
      ]),
      R("Persönliche Angaben machen", "البيانات الشخصية", [
        ["Wie alt bist du? – Ich bin 27 (Jahre alt).", "عندك كام سنة؟ – عندي 27 سنة."],
        ["Wie groß bist du? – Ich bin eins fünfundsiebzig.", "طولك كام؟ – طولي متر و75."],
        ["Wie viel wiegst du? – Ich wiege 73 Kilo.", "وزنك كام؟ – وزني 73 كيلو."],
        ["Das möchte ich nicht sagen.", "مش عايز أقول."]
      ]),
      R("Beim Arzt: der Arzt / die Ärztin", "عند الدكتور: الدكتور بيقول", [
        ["Wie geht es Ihnen? / Was fehlt Ihnen?", "عامل إيه؟ / بتشتكي من إيه؟"],
        ["Was tut Ihnen weh?", "إيه اللي بيوجعك؟"],
        ["Haben Sie Fieber?", "عندك سخونية؟"],
        ["Ich schreibe Ihnen ein Rezept für Tabletten.", "هكتبلك روشتة لحبوب."],
        ["Nehmen Sie die Tabletten vor dem Essen.", "خد الحبوب قبل الأكل."],
        ["Gute Besserung!", "سلامتك!"]
      ]),
      R("Beim Arzt: der Patient / die Patientin", "عند الدكتور: المريض بيقول", [
        ["Ich bin krank. / Mir ist schlecht.", "أنا عيّان. / حاسس إني تعبان."],
        ["Mein Kopf tut weh. / Meine Augen tun weh.", "راسي بتوجعني. / عينيّا بتوجعني."],
        ["Ich habe Kopfschmerzen und Fieber.", "عندي صداع وسخونية."],
        ["Wie lange muss ich im Bett bleiben?", "لازم أفضل في السرير قد إيه؟"],
        ["Darf ich duschen? Muss ich noch einmal kommen?", "ينفع آخد دش؟ لازم آجي تاني؟"]
      ]),
      R("Anweisungen wiedergeben", "نقل التعليمات", [
        ["Die Ärztin sagt, ich soll viel trinken.", "الدكتورة بتقول المفروض أشرب كتير."],
        ["Ich soll das Bein nur wenig bewegen.", "المفروض محرّكش رجلي كتير."],
        ["Du sollst zu Hause bleiben.", "المفروض تفضل في البيت."],
        ["Wir sollen pünktlich sein.", "المفروض نكون في الميعاد."]
      ]),
      R("Erlaubt und verboten", "المسموح والممنوع", [
        ["Sie dürfen duschen. Duschen ist erlaubt.", "مسموح تاخد دش."],
        ["Sie dürfen nicht baden. Baden ist verboten.", "ممنوع تاخد حمّام في البانيو."],
        ["Sie müssen im Bett bleiben.", "لازم تفضل في السرير."],
        ["Rauchen Sie nicht!", "متدخّنش!"]
      ]),
      R("Tipps geben", "إدّي نصايح", [
        ["Versuch mal Tee mit Honig!", "جرّب شاي بالعسل!"],
        ["Trink vor dem Schlafen heiße Milch.", "اشرب لبن سخن قبل النوم."],
        ["Geh früh ins Bett!", "نام بدري!"],
        ["Hat jemand einen Tipp für mich?", "حد عنده نصيحة ليّا؟"]
      ])
    ],
    speaking: {
      questions: [
        G("Was machst du für deine Gesundheit?", "بتعمل إيه عشان صحتك؟"),
        G("Gib einem Freund drei Fitness-Tipps im Imperativ.", "إدّي صاحبك 3 نصايح لياقة بصيغة الأمر."),
        G("Du bist beim Arzt: Sag, was dir wehtut und frag nach den Tabletten.", "إنت عند الدكتور: قول إيه اللي بيوجعك واسأل عن الحبوب."),
        G("Erzähl einem Freund, was der Arzt gesagt hat (sollen).", "احكي لصاحبك الدكتور قال إيه (sollen)."),
        G("Welche Hausmittel kennst du aus deinem Land?", "تعرف إيه من وصفات البيت في بلدك؟"),
        G("Was darf man im Krankenhaus nicht machen?", "إيه الممنوع في المستشفى؟")
      ],
      model: "Ich mache dreimal in der Woche Sport. Ich jogge im Park oder gehe ins Fitness-Studio. Letzte Woche war ich krank: Ich hatte Kopfschmerzen und Fieber. Ich war beim Arzt. Der Arzt hat gesagt, ich soll im Bett bleiben und viel Tee trinken. Ich musste dreimal täglich eine Tablette nehmen und ich durfte nicht arbeiten. Meine Mutter sagt immer: Trink Tee mit Honig und iss Hühnersuppe! Das hilft wirklich.",
      modelAr: "بعمل رياضة 3 مرات في الأسبوع. بجري في الجنينة أو بروح الجيم. الأسبوع اللي فات كنت عيّان: كان عندي صداع وسخونية. رحت للدكتور. الدكتور قال المفروض أفضل في السرير وأشرب شاي كتير. كان لازم آخد حباية 3 مرات في اليوم، وكان ممنوع أشتغل. ماما دايمًا بتقول: اشرب شاي بالعسل وكُل شوربة فراخ! ده بيفيد فعلًا."
    },
    quiz: [
      Q("Imperativ von „du stehst auf“:", ["Steh auf!", "Stehst auf!", "Stehe auf du!"], 0, "Imperativ mit du: Endung -st weg, Präfix ans Ende.", "الأمر مع du: نشيل -st والبادئة في الآخر."),
      Q("Imperativ von „ihr seid ruhig“:", ["Seid ruhig!", "Sei ruhig!", "Sind ruhig!"], 0, "ihr seid → Seid!", "الأمر مع ihr من sein هو Seid!"),
      Q("Imperativ mit Sie: „Sie trinken viel Wasser.“", ["Trinken Sie viel Wasser!", "Trink Sie viel Wasser!", "Sie trinken viel Wasser!"], 0, "Sie-Form: Verb zuerst, dann Sie.", "مع Sie: الفعل الأول وبعدين Sie."),
      Q("Mein Kopf ___ weh.", ["tut", "tun", "macht"], 0, "Ein Körperteil: tut weh.", "عضو واحد: tut weh."),
      Q("Meine Füße ___ weh.", ["tun", "tut", "tue"], 0, "Plural: tun weh.", "جمع: tun weh."),
      Q("Der Arzt sagt: „Bleiben Sie zu Hause!“ → Ich ___ zu Hause bleiben.", ["soll", "darf", "kann"], 0, "Anweisung wiedergeben: sollen.", "لنقل التعليمات: sollen."),
      Q("Mit Fieber ___ Sie nicht baden.", ["dürfen", "müssen", "sollen"], 0, "Verbot: nicht dürfen.", "الممنوع: nicht dürfen."),
      Q("Was sagt man zu einer kranken Person?", ["Gute Besserung!", "Guten Appetit!", "Herzlichen Glückwunsch!"], 0, "Für Kranke: Gute Besserung!", "للعيّان: Gute Besserung!")
    ]
  };

  /* ---------- Kapitel 9 ---------- */
  content[9] = {
    intro: "In diesem Kapitel geht es ums Wohnen. Du nennst Zimmer, Möbel und Geräte, verstehst Wohnungsanzeigen und beschreibst eine Wohnung mit sein + Adjektiv. Du planst die Einrichtung (Wohin? in + Akkusativ), beantwortest eine Einladung, sagst, wo etwas ist (Wechselpräpositionen mit Dativ), drückst Gefallen und Missfallen aus, nennst Farben und sprichst über Wohnformen.",
    introAr: "الوحدة دي عن السكن. هتسمّي الأوض والعفش والأجهزة، وتفهم إعلانات الشقق، وتوصف شقة بـ sein + صفة. هتخطط ترتيب العفش (لفين؟ in + Akkusativ)، وترد على دعوة، وتقول الحاجة فين (حروف الجر المتغيرة مع Dativ)، وتعبّر عن إعجابك أو عدمه، وتسمّي الألوان، وتتكلم عن أنواع السكن.",
    badges: ["Zimmer", "Möbel und Geräte", "Wohnungsanzeigen", "sein + Adjektiv", "in + Akkusativ", "Wechselpräpositionen", "Farben", "Wohnformen"],
    goals: [
      G("Zimmer, Möbel und Geräte nennen", "تسمّي الأوض والعفش والأجهزة"),
      G("Wohnungsanzeigen verstehen", "تفهم إعلانات الشقق"),
      G("Eine Wohnung beschreiben: Die Wohnung ist (zu) teuer.", "توصف شقة: الشقة غالية (أوي)."),
      G("Die Wohnungseinrichtung planen: Wohin stellen wir den Schrank?", "تخطط ترتيب العفش: نحط الدولاب فين؟"),
      G("Eine Einladung beantworten: zusagen oder absagen", "ترد على دعوة: توافق أو تعتذر"),
      G("Sagen, wo etwas ist: auf, unter, neben, zwischen …", "تقول الحاجة فين: على، تحت، جنب، بين …"),
      G("Gefallen und Missfallen ausdrücken und Farben nennen", "تعبّر عن الإعجاب وعدمه وتسمّي الألوان"),
      G("Über Wohnformen sprechen und einen Text über eine Wohnung schreiben", "تتكلم عن أنواع السكن وتكتب نص عن شقة")
    ],
    readings: [
      RD("Anzeigen", "Wohnungsanzeigen",
        "<b>A</b> Helle 2-Zimmer-Wohnung im Zentrum, 55 qm, 3. Stock, Küche, Bad mit Dusche, Balkon. Miete: 750 € warm. Ab 1. Mai frei. Tel. 0176 334455<br><br><b>B</b> Große 3-Zimmer-Altbauwohnung, 90 qm, Erdgeschoss, ruhig, mit Garten. Nur 5 Minuten zum Bahnhof. Miete: 980 €. E-Mail: altbau@mail-beispiel.de<br><br><b>C</b> Kleines Apartment für Studenten, 25 qm, möbliert (Bett, Schreibtisch, Regal), nicht weit zur Uni. Miete: 420 €. Tel. 0151 778899<br><br><b>D</b> 3 Zimmer, Küche, Bad, 80 qm, Reihenhaus am Stadtrand, mit Terrasse. Günstig: 790 €. Ab sofort frei. Tel. 0170 112233",
        "<b>A</b> شقة أوضتين منوّرة في وسط البلد، 55 متر، الدور التالت، مطبخ، حمام بدش، بلكونة. الإيجار: 750 يورو شامل. فاضية من أول مايو.<br><br><b>B</b> شقة 3 أوض كبيرة في عمارة قديمة، 90 متر، دور أرضي، هادية، بجنينة. 5 دقايق بس من المحطة. الإيجار: 980 يورو.<br><br><b>C</b> شقة صغيرة للطلاب، 25 متر، مفروشة (سرير، مكتب، رف)، مش بعيدة عن الجامعة. الإيجار: 420 يورو.<br><br><b>D</b> 3 أوض ومطبخ وحمام، 80 متر، بيت في صف بيوت على أطراف المدينة، بتراس. رخيصة: 790 يورو. فاضية من دلوقتي.",
        [["Welche Wohnung hat einen Garten?", "Wohnung B, die Altbauwohnung."], ["Wie viel kostet das Apartment für Studenten?", "420 Euro."], ["Welche Wohnung ist im Zentrum?", "Wohnung A."], ["Carla und Alex suchen 3 Zimmer, 80 qm, maximal 800 Euro. Welche Wohnung passt?", "Wohnung D."]]),
      RD("E-Mail", "Endlich umgezogen!",
        "Liebe Sara,<br>wir sind endlich umgezogen! Die neue Wohnung ist toll: Sie ist groß und hell und hat einen Balkon. Das Wohnzimmer ist mein Lieblingszimmer. Dort steht ein grünes Sofa, und neben dem Sofa steht eine gelbe Lampe. Über dem Sofa hängt ein Bild von meiner Oma. Der Fernseher steht zwischen den Fenstern.<br><br>Die Küche ist leider ein bisschen klein, aber praktisch. Der Kühlschrank steht neben dem Herd. Ich arbeite oft im Arbeitszimmer – der Schreibtisch steht direkt vor dem Fenster, und der Blick auf den Park ist wunderschön.<br><br>Am Samstag feiern wir eine Einweihungsfeier. Hast du Zeit? Wir freuen uns!<br>Liebe Grüße<br>Nadia",
        "عزيزتي سارة،<br>أخيرًا نقلنا! الشقة الجديدة تحفة: كبيرة ومنوّرة وفيها بلكونة. الصالة هي أوضتي المفضّلة. فيها كنبة خضرا، وجنب الكنبة أباجورة صفرا. وفوق الكنبة صورة لتيتة. والتلفزيون بين الشبابيك.<br><br>المطبخ للأسف صغير شوية بس عملي. التلاجة جنب البوتاجاز. أنا بشتغل كتير في أوضة المكتب – المكتب قدام الشباك على طول، والمنظر على الجنينة جميل جدًا.<br><br>يوم السبت هنعمل حفلة للشقة الجديدة. فاضية؟ هنفرح بيكي!<br>تحياتي<br>نادية",
        [["Wie ist die neue Wohnung?", "Groß und hell, mit Balkon."], ["Was hängt über dem Sofa?", "Ein Bild von Nadias Oma."], ["Wo steht der Kühlschrank?", "Neben dem Herd."], ["Was ist am Samstag?", "Eine Einweihungsfeier."]]),
      RD("Interviews", "So wohnen wir",
        "<b>Jonas, 23:</b> Ich wohne in einer WG mit zwei Freunden. Mein Zimmer ist klein, aber gemütlich. Wir haben eine große Küche – dort kochen wir oft zusammen. Das ist toll! Leider ist die Wohnung an einer Straße und ein bisschen laut.<br><br><b>Familie Becker:</b> Wir wohnen in einem Reihenhaus am Stadtrand. Die Kinder haben eigene Zimmer, und wir haben einen Garten. Das finden wir super! Aber wir brauchen immer das Auto, denn der Weg zur Arbeit ist weit.<br><br><b>Frau Okafor, 67:</b> Ich wohne im zehnten Stock in einem Hochhaus. Die Wohnung ist nicht groß, aber hell. Von meinem Balkon sehe ich die ganze Stadt. Zum Glück gibt es einen Aufzug!",
        "<b>يوناس، 23 سنة:</b> ساكن في سكن مشترك مع اتنين صحابي. أوضتي صغيرة بس مريحة. عندنا مطبخ كبير – بنطبخ فيه مع بعض كتير. ده حلو! للأسف الشقة على شارع وفيها دوشة شوية.<br><br><b>عيلة بيكر:</b> ساكنين في بيت في صف بيوت على أطراف المدينة. العيال كل واحد ليه أوضة، وعندنا جنينة. ده ممتاز! بس دايمًا محتاجين العربية، لأن الطريق للشغل بعيد.<br><br><b>السيدة أوكافور، 67 سنة:</b> ساكنة في الدور العاشر في برج. الشقة مش كبيرة بس منوّرة. من البلكونة بشوف المدينة كلها. لحسن الحظ فيه أسانسير!",
        [["Wo wohnt Jonas?", "In einer WG mit zwei Freunden."], ["Was ist der Nachteil von Jonas' Wohnung?", "Sie ist ein bisschen laut."], ["Warum brauchen die Beckers immer das Auto?", "Der Weg zur Arbeit ist weit."], ["Was sieht Frau Okafor von ihrem Balkon?", "Die ganze Stadt."]])
    ],
    redemittel: [
      R("Eine Wohnung beschreiben", "وصف الشقة", [
        ["Die Wohnung ist ruhig und hell.", "الشقة هادية ومنوّرة."],
        ["Die Wohnung liegt im Zentrum. / Die Lage ist zentral.", "الشقة في وسط البلد. / الموقع مركزي."],
        ["Die Wohnung ist zu teuer / zu laut / zu klein.", "الشقة غالية / دوشة / صغيرة أوي."],
        ["Die Wohnung hat drei Zimmer, Küche, Bad und einen Balkon.", "الشقة فيها 3 أوض ومطبخ وحمام وبلكونة."],
        ["Es ist nicht weit zum Bahnhof.", "مش بعيدة عن المحطة."]
      ]),
      R("Die Einrichtung planen", "ترتيب العفش", [
        ["Wohin stellen wir den Schrank? – Ins Schlafzimmer.", "نحط الدولاب فين؟ – في أوضة النوم."],
        ["Ich stelle den Computer in die Küche.", "هحط الكمبيوتر في المطبخ."],
        ["Wir hängen das Bild an die Wand.", "هنعلّق الصورة على الحيطة."],
        ["Stell die Lampe bitte auf den Schreibtisch!", "حط الأباجورة على المكتب لو سمحت!"]
      ]),
      R("Sagen, wo etwas ist", "تقول الحاجة فين", [
        ["Der Schrank steht im Flur.", "الدولاب في الطرقة."],
        ["Das Bild hängt über dem Fernseher.", "الصورة متعلّقة فوق التلفزيون."],
        ["Der Teppich liegt unter dem Sofa.", "السجادة تحت الكنبة."],
        ["Der Tisch steht zwischen dem Sofa und dem Sessel.", "الترابيزة بين الكنبة والفوتيه."]
      ]),
      R("Gefallen und Missfallen", "الإعجاب وعدمه", [
        ["Das Wohnzimmer ist ja super!", "الصالة تحفة!"],
        ["Ich finde die Wohnung echt gemütlich!", "شايف الشقة مريحة جدًا!"],
        ["Das sieht total gut aus.", "شكله حلو جدًا."],
        ["Ich finde die Lampe hässlich.", "شايف الأباجورة وحشة."],
        ["Ich mag es nicht besonders.", "مش عاجبني أوي."]
      ]),
      R("Eine Einladung beantworten", "الرد على دعوة", [
        ["Vielen Dank für die Einladung!", "شكرًا جزيلًا على الدعوة!"],
        ["Glückwunsch, ich komme sehr gern!", "مبروك، هاجي بكل سرور!"],
        ["Kann ich etwas mitbringen? Ich bringe einen Salat mit.", "أجيب حاجة معايا؟ هجيب سلطة."],
        ["Es tut mir leid, aber ich kann nicht kommen.", "آسف، مش هقدر آجي."],
        ["Ich habe am Samstag leider keine Zeit.", "للأسف معنديش وقت يوم السبت."],
        ["Hoffentlich sehen wir uns bald!", "يا رب نشوف بعض قريب!"]
      ])
    ],
    speaking: {
      questions: [
        G("Beschreibe deine Wohnung: Wie viele Zimmer? Wie ist sie?", "اوصف شقتك: كام أوضة؟ شكلها إيه؟"),
        G("Was ist dein Lieblingszimmer? Was machst du dort?", "إيه أوضتك المفضّلة؟ بتعمل فيها إيه؟"),
        G("Wo stehen die Möbel in deinem Wohnzimmer?", "العفش في الصالة بتاعتك فين؟"),
        G("Du ziehst um: Wohin stellst du das Sofa, den Schreibtisch und das Bett?", "إنت بتنقل: هتحط الكنبة والمكتب والسرير فين؟"),
        G("Antworte auf eine Einladung zur Einweihungsfeier.", "رد على دعوة لحفلة شقة جديدة."),
        G("Welche Wohnform findest du gut? Warum?", "أنهي نوع سكن شايفه كويس؟ ليه؟")
      ],
      model: "Ich wohne in einer Drei-Zimmer-Wohnung im zweiten Stock. Die Wohnung ist nicht sehr groß, aber hell und gemütlich. Mein Lieblingszimmer ist das Wohnzimmer. Dort steht ein großes Sofa und vor dem Sofa liegt ein bunter Teppich. Über dem Fernseher hängt ein Bild. Die Küche ist klein, aber praktisch. Leider ist die Straße ein bisschen laut. Aber die Lage ist super: Der Bahnhof ist nicht weit.",
      modelAr: "أنا ساكن في شقة 3 أوض في الدور التاني. الشقة مش كبيرة أوي بس منوّرة ومريحة. أوضتي المفضّلة الصالة. فيها كنبة كبيرة وقدام الكنبة سجادة ملوّنة. وفوق التلفزيون صورة متعلّقة. المطبخ صغير بس عملي. للأسف الشارع فيه دوشة شوية. بس الموقع ممتاز: المحطة مش بعيدة."
    },
    quiz: [
      Q("Die Wohnung kostet 1.500 Euro. Sie ist ___ teuer für mich.", ["zu", "sehr gern", "nicht"], 0, "zu + Adjektiv: mehr als gut ist.", "zu + صفة = أكتر من اللازم."),
      Q("Wohin stellen wir den Stuhl? – In ___ Flur.", ["den", "dem", "der"], 0, "Wohin? in + Akkusativ: der Flur → in den Flur.", "لفين؟ in + Akkusativ: in den Flur."),
      Q("Wo ist das Sofa? – ___ Wohnzimmer.", ["Im", "Ins", "In den"], 0, "Wo? in + Dativ: in dem = im.", "فين؟ in + Dativ: im."),
      Q("Das Bild hängt über ___ Fernseher.", ["dem", "den", "der"], 0, "Wo? über + Dativ: der Fernseher → dem Fernseher.", "فين؟ über + Dativ: dem."),
      Q("Ich stelle die Lampe auf ___ Schreibtisch.", ["den", "dem", "der"], 0, "Wohin? auf + Akkusativ: den Schreibtisch.", "لفين؟ auf + Akkusativ: den."),
      Q("Die Bücher stehen in ___ Regalen.", ["den", "die", "der"], 0, "Dativ Plural: den Regalen (+n).", "جمع الداتيف: den Regalen."),
      Q("Positiv oder negativ? „Ich finde die Lampe hässlich.“", ["negativ", "positiv", "neutral"], 0, "hässlich = nicht schön.", "hässlich = مش حلو."),
      Q("Du kannst nicht kommen. Was schreibst du?", ["Es tut mir leid, aber ich habe keine Zeit.", "Ich komme sehr gern!", "Ich bringe einen Kuchen mit."], 0, "Absagen: Es tut mir leid, aber …", "للاعتذار: Es tut mir leid, aber …")
    ]
  };

  /* ---------- Kapitel 10 ---------- */
  content[10] = {
    intro: "In diesem Kapitel geht es um Studium und Beruf. Du sprichst über Berufe und sagst, was dir im Beruf wichtig ist. Du beschreibst einen Tagesablauf und erzählst im Perfekt, was du gemacht hast – mit haben oder sein. Du verstehst Aussagen über die Jobsuche, telefonierst in einer Firma, fragst nach und sprichst über Saison-Jobs.",
    introAr: "الوحدة دي عن الدراسة والشغل. هتتكلم عن المهن وتقول إيه المهم بالنسبالك في الشغل. هتوصف يومك وتحكي باستخدام الـ Perfekt عملت إيه – مع haben أو sein. هتفهم كلام عن التدوير على شغل، وتكلّم شركة في التليفون، وتستفسر، وتتكلم عن الشغل الموسمي.",
    badges: ["Berufe", "Perfekt", "Partizip II", "haben oder sein", "Jobsuche", "Telefonieren", "Saison-Jobs"],
    goals: [
      G("Über Berufe sprechen: Vorteile und Nachteile", "تتكلم عن المهن: المميزات والعيوب"),
      G("Sagen, was im Beruf wichtig ist", "تقول إيه المهم في الشغل"),
      G("Einen Tagesablauf beschreiben", "توصف جدول يومك"),
      G("Über Vergangenes sprechen (Perfekt mit haben)", "تتكلم عن الماضي (Perfekt مع haben)"),
      G("Von einem Tag berichten (Perfekt mit sein)", "تحكي عن يوم (Perfekt مع sein)"),
      G("Aussagen über die Jobsuche verstehen", "تفهم كلام عن التدوير على شغل"),
      G("Telefonieren und nachfragen", "تتكلم في التليفون وتستفسر"),
      G("Grammatik: Satzklammer, Partizip II regelmäßig, unregelmäßig und auf -ieren", "القواعد: قوس الجملة واسم المفعول المنتظم والشاذ وأفعال -ieren")
    ],
    readings: [
      RD("Chat", "Wie war dein Tag?",
        "Sami: Hey Lina, wie war dein Tag?<br>Lina: Na ja, es geht. Ich bin um sieben aufgestanden und um acht zur Uni gefahren. Das Seminar war total langweilig – der Professor hat nur geredet.<br>Sami: Oh je! Und dann?<br>Lina: Dann habe ich mit Maria für die Prüfung gelernt. Wir haben vier Stunden in der Bibliothek gesessen. Danach hatte ich Hunger und habe in der Mensa gegessen.<br>Sami: Hast du heute auch gearbeitet?<br>Lina: Ja, am Nachmittag bin ich ins Café gegangen. Ich arbeite dort als Kellnerin. Es war viel los, aber die Chefin war nett.<br>Sami: Echt fleißig! Machst du jetzt Feierabend?<br>Lina: Ja! Ich bin gerade nach Hause gekommen. Jetzt schlafe ich!",
        "سامي: أهلا لينا، يومك كان عامل إزاي؟<br>لينا: يعني، ماشي. صحيت الساعة 7 ورحت الجامعة الساعة 8. السيمينار كان ممل جدًا – البروفيسور كان بيتكلم وبس.<br>سامي: يا ساتر! وبعدين؟<br>لينا: بعدين ذاكرت مع ماريا للامتحان. قعدنا 4 ساعات في المكتبة. بعدها جعت وأكلت في مطعم الجامعة.<br>سامي: اشتغلتي النهارده كمان؟<br>لينا: أيوه، بعد الضهر رحت الكافيه. أنا بشتغل هناك جرسونة. كان فيه زحمة، بس المديرة كانت لطيفة.<br>سامي: مجتهدة بجد! هتخلّصي اليوم دلوقتي؟<br>لينا: أيوه! لسه راجعة البيت. دلوقتي هنام!",
        [["Wann ist Lina aufgestanden?", "Um sieben Uhr."], ["Wie war das Seminar?", "Total langweilig."], ["Wo hat Lina gegessen?", "In der Mensa."], ["Als was arbeitet Lina im Café?", "Als Kellnerin."]]),
      RD("Erfahrungsberichte", "So habe ich meinen Job gefunden",
        "<b>Hamid, 34, Busfahrer:</b> Ich bin vor fünf Jahren nach Deutschland gekommen. Zuerst habe ich einen Deutschkurs gemacht. Dann bin ich jede Woche zur Agentur für Arbeit gegangen. Dort habe ich eine Anzeige gesehen: Die Stadt hat Busfahrer gesucht. Ich habe sofort eine Bewerbung geschrieben – und jetzt fahre ich jeden Tag Bus!<br><br><b>Julia, 27, Grafikerin:</b> Ich habe Design studiert. Nach dem Studium habe ich ein Profil in einem Job-Portal gemacht. Eine Firma hat mein Profil gesehen und mir eine Nachricht geschrieben. Wir haben telefoniert und dann hatte ich ein Vorstellungsgespräch. Zwei Tage später haben sie „Ja“ gesagt.<br><br><b>Peter, 58, Koch:</b> Ich war ein Jahr arbeitslos. Dann habe ich einen Freund getroffen. Er hat gesagt: „Mein Restaurant sucht einen Koch!“ Ich bin gleich mitgegangen.",
        "<b>حامد، 34 سنة، سوّاق أتوبيس:</b> جيت ألمانيا من 5 سنين. الأول عملت كورس ألماني. بعدين كنت بروح مكتب العمل كل أسبوع. هناك شفت إعلان: المدينة كانت بتدوّر على سوّاقين أتوبيس. كتبت طلب على طول – ودلوقتي بسوق أتوبيس كل يوم!<br><br><b>يوليا، 27 سنة، مصممة جرافيك:</b> درست تصميم. بعد الدراسة عملت بروفايل على موقع وظايف. شركة شافت البروفايل وبعتتلي رسالة. اتكلمنا في التليفون وبعدين عملت مقابلة شغل. بعدها بيومين قالوا «أيوه».<br><br><b>بيتر، 58 سنة، طبّاخ:</b> كنت عاطل سنة. بعدين قابلت صاحبي. قال: «المطعم بتاعي بيدوّر على طبّاخ!» رحت معاه على طول.",
        [["Was hat Hamid zuerst gemacht?", "Einen Deutschkurs."], ["Wie hat Julia ihre Stelle gefunden?", "Durch ein Job-Portal: Eine Firma hat ihr Profil gesehen."], ["Wie lange war Peter arbeitslos?", "Ein Jahr."], ["Wer hat Peter geholfen?", "Ein Freund mit einem Restaurant."]]),
      RD("Telefongespräch", "Ein Anruf bei der Sprachschule",
        "Herr Becker: Sprachschule Lingua, Becker, guten Tag.<br>Frau Nowak: Guten Tag, hier ist Ewa Nowak. Ich habe eine Frage zur Prüfung. Kann ich bitte mit Frau Schulz sprechen?<br>Herr Becker: Tut mir leid, Frau Schulz ist heute nicht da. Kann ich Ihnen helfen?<br>Frau Nowak: Vielleicht. Wann sind die Termine für die Prüfung Start Deutsch 1?<br>Herr Becker: Am 14. März und am 9. Mai.<br>Frau Nowak: Entschuldigung, das habe ich nicht verstanden. Können Sie das bitte wiederholen?<br>Herr Becker: Natürlich: am vierzehnten März und am neunten Mai. Die Prüfung kostet 120 Euro.<br>Frau Nowak: Vielen Dank! Können Sie mir noch die Durchwahl von Frau Schulz geben?<br>Herr Becker: Ja, das ist die 43. Auf Wiederhören!<br>Frau Nowak: Auf Wiederhören!",
        "السيد بيكر: مدرسة لينجوا للغات، بيكر، نهارك سعيد.<br>السيدة نوفاك: نهارك سعيد، معاك إيفا نوفاك. عندي سؤال عن الامتحان. ممكن أكلّم السيدة شولتس؟<br>السيد بيكر: آسف، السيدة شولتس مش موجودة النهارده. أقدر أساعدك؟<br>السيدة نوفاك: يمكن. مواعيد امتحان Start Deutsch 1 إمتى؟<br>السيد بيكر: يوم 14 مارس و9 مايو.<br>السيدة نوفاك: عفوًا، مفهمتش. ممكن تعيد لو سمحت؟<br>السيد بيكر: طبعًا: يوم أربعتاشر مارس ويوم تسعة مايو. الامتحان بـ 120 يورو.<br>السيدة نوفاك: شكرًا جزيلًا! ممكن تديني الرقم الداخلي للسيدة شولتس؟<br>السيد بيكر: أيوه، 43. مع السلامة!<br>السيدة نوفاك: مع السلامة!",
        [["Mit wem möchte Frau Nowak sprechen?", "Mit Frau Schulz."], ["Wann sind die Prüfungstermine?", "Am 14. März und am 9. Mai."], ["Wie viel kostet die Prüfung?", "120 Euro."], ["Wie ist die Durchwahl von Frau Schulz?", "Die 43."]])
    ],
    redemittel: [
      R("Über Berufe und Jobs sprechen", "الكلام عن المهن والشغل", [
        ["Was bist du von Beruf? – Ich bin Erzieherin.", "إنت بتشتغل إيه؟ – أنا مربّية أطفال."],
        ["Die Arbeit macht (viel) Spaß.", "الشغل ممتع (جدًا)."],
        ["Die Arbeit ist interessant, aber anstrengend.", "الشغل ممتع بس مُتعِب."],
        ["Ich verdiene nicht so viel Geld.", "مش بكسب فلوس كتير."],
        ["Ich kann im Beruf viel reisen / Karriere machen.", "أقدر أسافر كتير / أترقّى في شغلي."],
        ["Für mich ist wichtig: nette Kollegen.", "المهم بالنسبالي: زمايل لطاف."]
      ]),
      R("Über Vergangenes sprechen", "الكلام عن الماضي", [
        ["Was hast du heute gemacht?", "عملت إيه النهارده؟"],
        ["Ich habe sechs Stunden gelernt.", "ذاكرت 6 ساعات."],
        ["Ich bin zur Uni gefahren.", "رحت الجامعة (بمواصلة)."],
        ["Wir haben die Präsentation geplant.", "خططنا للعرض التقديمي."],
        ["Gestern war ich müde und hatte keine Zeit.", "امبارح كنت تعبان ومكانش عندي وقت."]
      ]),
      R("Am Telefon: sich melden und fragen", "في التليفون: تعرّف بنفسك وتسأل", [
        ["Guten Tag, mein Name ist … / Hier ist …", "نهارك سعيد، اسمي … / معاك …"],
        ["Kann ich bitte mit Frau … sprechen?", "ممكن أكلّم السيدة …؟"],
        ["Können Sie mich mit Herrn … verbinden?", "ممكن توصّلني بالسيد …؟"],
        ["Ich habe eine Frage zu der Anzeige.", "عندي سؤال عن الإعلان."],
        ["Können Sie mir die Durchwahl geben?", "ممكن تديني الرقم الداخلي؟"]
      ]),
      R("Am Telefon: nachfragen und sich verabschieden", "في التليفون: تستفسر وتودّع", [
        ["Entschuldigung, wie bitte?", "عفوًا، نعم؟"],
        ["Können Sie das bitte wiederholen?", "ممكن تعيد لو سمحت؟"],
        ["Können Sie das bitte buchstabieren?", "ممكن تهجّيها لو سمحت؟"],
        ["Entschuldigung, das habe ich nicht verstanden.", "عفوًا، مفهمتش."],
        ["Vielen Dank. Auf Wiederhören!", "شكرًا جزيلًا. مع السلامة!"]
      ])
    ],
    speaking: {
      questions: [
        G("Was bist du von Beruf? Oder: Was möchtest du werden?", "إنت بتشتغل إيه؟ أو: عايز تشتغل إيه؟"),
        G("Was ist für dich im Beruf wichtig? Nenne drei Dinge.", "إيه المهم بالنسبالك في الشغل؟ قول 3 حاجات."),
        G("Was hast du gestern gemacht? Erzähl im Perfekt.", "عملت إيه امبارح؟ احكي بالـ Perfekt."),
        G("Wohin bist du letztes Wochenende gefahren oder gegangen?", "رحت فين الويك إند اللي فات؟"),
        G("Wie hast du deine Stelle oder deinen Kurs gefunden?", "لقيت شغلك أو كورسك إزاي؟"),
        G("Ruf in einer Firma an: Melde dich und frag nach einer Person.", "كلّم شركة: عرّف بنفسك واسأل عن شخص.")
      ],
      model: "Ich bin Informatiker von Beruf. Die Arbeit ist interessant und ich verdiene gut, aber ich sitze den ganzen Tag am Computer. Für mich sind nette Kollegen sehr wichtig. Gestern bin ich um sieben aufgestanden und mit dem Fahrrad zur Arbeit gefahren. Am Vormittag habe ich mit Kunden telefoniert, am Nachmittag haben wir ein Projekt geplant. Abends bin ich mit Freunden ins Kino gegangen. Meine Stelle habe ich durch ein Job-Portal gefunden.",
      modelAr: "أنا متخصص كمبيوتر. الشغل ممتع ومرتّبي كويس، بس بقعد طول اليوم قدام الكمبيوتر. الزمايل اللطاف مهمين أوي بالنسبالي. امبارح صحيت الساعة 7 ورحت الشغل بالعجلة. الصبح كلّمت عملا في التليفون، وبعد الضهر خططنا لمشروع. بالليل رحت السينما مع أصحابي. لقيت شغلي عن طريق موقع وظايف."
    },
    quiz: [
      Q("Ich ___ gestern lange gearbeitet.", ["habe", "bin", "hat"], 0, "arbeiten: Perfekt mit haben.", "arbeiten بيتصرّف مع haben."),
      Q("Wir ___ nach Berlin gefahren.", ["sind", "haben", "seid"], 0, "fahren = Ortsveränderung → sein.", "fahren فيه تغيير مكان ← sein."),
      Q("Partizip II von „machen“:", ["gemacht", "gemachen", "machte"], 0, "Regelmäßig: ge- + Stamm + -t.", "المنتظم: ge + الجذر + t."),
      Q("Partizip II von „finden“:", ["gefunden", "gefindet", "fand"], 0, "Unregelmäßig: gefunden.", "شاذ: gefunden."),
      Q("Partizip II von „studieren“:", ["studiert", "gestudiert", "gestudieren"], 0, "Verben auf -ieren: ohne ge-.", "أفعال -ieren من غير ge."),
      Q("Was ___ passiert? – Nichts!", ["ist", "hat", "sind"], 0, "passieren: Perfekt mit sein.", "passieren مع sein."),
      Q("Lea ___ zwei Jahre in Spanien geblieben.", ["ist", "hat", "war"], 0, "bleiben: Perfekt mit sein.", "bleiben مع sein."),
      Q("Am Telefon: Du hast den Namen nicht verstanden. Was sagst du?", ["Können Sie den Namen bitte buchstabieren?", "Auf Wiederhören!", "Ich bin Koch."], 0, "Nachfragen: Können Sie das buchstabieren?", "للاستفسار: Können Sie das buchstabieren?")
    ]
  };

  /* ---------- Kapitel 11 ---------- */
  content[11] = {
    intro: "In diesem Kapitel geht es um Kleidung und Einkaufen. Du sprichst über Kleidung und Farben, fragst mit welcher? und zeigst mit dieser. Du verstehst Komplimente, berichtest im Perfekt über Einkäufe (trennbare und nicht trennbare Verben), führst Gespräche beim Kleiderkauf mit Verben mit Dativ, orientierst dich im Kaufhaus und lernst die Trendstadt Berlin kennen.",
    introAr: "الوحدة دي عن اللبس والشوبنج. هتتكلم عن اللبس والألوان، وتسأل بـ welcher؟ وتشاور بـ dieser. هتفهم المجاملات، وتحكي بالـ Perfekt عن مشترياتك (الأفعال المنفصلة وغير المنفصلة)، وتتكلم في محل الهدوم بأفعال الداتيف، وتعرف تتحرك في المول، وتتعرف على برلين مدينة الموضة.",
    badges: ["Kleidung", "welcher? – dieser", "Komplimente", "Perfekt mit Präfix", "Personalpronomen im Dativ", "gefallen, passen, stehen", "Kaufhaus", "Berlin"],
    goals: [
      G("Über Kleidung sprechen und Farben nennen", "تتكلم عن اللبس والألوان"),
      G("Mit welcher? fragen und mit dieser zeigen", "تسأل بـ welcher وتشاور بـ dieser"),
      G("Komplimente verstehen und machen", "تفهم المجاملات وتقولها"),
      G("Über Einkäufe berichten (Perfekt: trennbare und nicht trennbare Verben)", "تحكي عن مشترياتك (Perfekt للأفعال المنفصلة وغير المنفصلة)"),
      G("Gespräche beim Kleiderkauf führen", "تتكلم في محل الهدوم"),
      G("Verben mit Dativ: gefallen, passen, stehen, helfen", "أفعال الداتيف: gefallen وpassen وstehen وhelfen"),
      G("Sich im Kaufhaus orientieren und nach Auskunft fragen", "تتحرك في المول وتسأل عن الأماكن"),
      G("Informationen über Berlin verstehen und recherchieren", "تفهم معلومات عن برلين وتدوّر عليها")
    ],
    readings: [
      RD("Chat", "Neue Klamotten!",
        "Mira: Seht mal: mein neues Kleid! 😊<br>Selin: Wow, das steht dir super! Wo hast du das entdeckt?<br>Mira: Im Secondhand-Laden in der Altstadt. Es hat nur 15 Euro gekostet.<br>Ben: Toll! Ich habe letzte Woche online eine Jacke bestellt. Sie ist gestern angekommen, aber sie hat nicht gepasst – viel zu eng. Ich habe sie zurückgeschickt.<br>Selin: Das nervt! Ich kaufe Schuhe nie online. Ich muss sie immer anprobieren.<br>Mira: Ich auch. Ben, komm doch am Samstag mit! Wir gehen zusammen shoppen.<br>Ben: Gute Idee! Ich brauche wirklich eine neue Jacke.",
        "ميرا: بصّوا: فستاني الجديد! 😊<br>سلين: واو، لايق عليكي جدًا! لقيتيه فين؟<br>ميرا: في محل الهدوم المستعملة في البلد القديمة. كان بـ 15 يورو بس.<br>بن: تحفة! أنا طلبت جاكيت أونلاين الأسبوع اللي فات. وصل امبارح، بس مكانش مقاسي – ضيّق أوي. رجّعته.<br>سلين: ده بيضايق! أنا عمري ما بشتري جزم أونلاين. لازم دايمًا أقيسها.<br>ميرا: وأنا كمان. يا بن، تعالى معانا يوم السبت! هننزل نتسوّق مع بعض.<br>بن: فكرة حلوة! أنا فعلًا محتاج جاكيت جديد.",
        [["Wo hat Mira das Kleid gekauft?", "Im Secondhand-Laden in der Altstadt."], ["Was war das Problem mit Bens Jacke?", "Sie war viel zu eng und hat nicht gepasst."], ["Warum kauft Selin Schuhe nicht online?", "Sie muss sie immer anprobieren."], ["Was machen die Freunde am Samstag?", "Sie gehen zusammen shoppen."]]),
      RD("Dialog", "Im Kleidergeschäft",
        "Verkäuferin: Guten Tag! Kann ich Ihnen helfen?<br>Kunde: Ja, gern. Ich suche einen Pullover.<br>Verkäuferin: Welche Größe brauchen Sie?<br>Kunde: Meistens L.<br>Verkäuferin: Wie gefällt Ihnen dieser Pullover hier?<br>Kunde: Hm, Grün steht mir nicht so gut. Haben Sie den auch in Blau?<br>Verkäuferin: Einen Moment, bitte … Hier ist er in Blau. Probieren Sie ihn doch mal an.<br>Kunde: Danke … Oh, er ist zu weit. Haben Sie ihn auch in M?<br>Verkäuferin: Ja, hier, bitte. Und? Passt er Ihnen?<br>Kunde: Ja, perfekt! Was kostet er?<br>Verkäuferin: Nur 39,90 Euro. Er ist reduziert.<br>Kunde: Super, dann nehme ich ihn.",
        "البيّاعة: نهارك سعيد! أقدر أساعد حضرتك؟<br>الزبون: أيوه لو سمحتي. بدوّر على بلوفر.<br>البيّاعة: مقاس حضرتك كام؟<br>الزبون: غالبًا L.<br>البيّاعة: إيه رأيك في البلوفر ده؟<br>الزبون: همم، الأخضر مش لايق عليّا أوي. عندك منه أزرق؟<br>البيّاعة: لحظة من فضلك … أهو أزرق. جرّبه كده.<br>الزبون: شكرًا … أوه، واسع أوي. عندك منه M؟<br>البيّاعة: أيوه، اتفضل. ها؟ مقاسك؟<br>الزبون: أيوه، ممتاز! بكام؟<br>البيّاعة: 39.90 يورو بس. عليه تخفيض.<br>الزبون: تمام، هاخده.",
        [["Was sucht der Kunde?", "Einen Pullover."], ["Warum möchte er keinen grünen Pullover?", "Grün steht ihm nicht so gut."], ["Welche Größe passt am Ende?", "M."], ["Warum ist der Pullover günstig?", "Er ist reduziert."]]),
      RD("Info-Text", "Shopping in Berlin",
        "Berlin ist die Hauptstadt von Deutschland und eine Trendstadt. Hier leben viele Künstler, Designer und Fotografen. Die Mode-Szene ist kreativ und individuell. Viele junge Designer haben ein eigenes Geschäft.<br><br>Ein schöner Ort zum Shoppen sind die Hackeschen Höfe: acht Höfe aus dem Jahr 1907 mit tollen Geschäften und Cafés. Am Alexanderplatz gibt es große Kaufhäuser. Dort findet man fast alles: Kleidung, Kosmetik, Elektrogeräte und Souvenirs.<br><br>Am Sonntag sind die Geschäfte in Berlin meistens geschlossen. Aber dann kann man auf einen Flohmarkt gehen – zum Beispiel im Mauerpark. Dort gibt es alte Kleidung, Möbel und originelle Geschenke.",
        "برلين عاصمة ألمانيا ومدينة الصيحات. هنا عايشين فنانين ومصممين ومصورين كتير. عالم الموضة فيها مبدع ومميّز. مصممين شباب كتير عندهم محلاتهم الخاصة.<br><br>مكان حلو للشوبنج هو «هاكيشه هوفه»: تمن أحواش من سنة 1907 فيها محلات وكافيهات تحفة. وفي ميدان ألكسندر فيه مولات كبيرة. هناك تلاقي كل حاجة تقريبًا: لبس ومستحضرات تجميل وأجهزة كهربائية وتذكارات.<br><br>يوم الأحد المحلات في برلين غالبًا قافلة. بس ساعتها ممكن تروح سوق الحاجات القديمة – مثلًا في «ماورپارك». هناك فيه لبس قديم وعفش وهدايا مختلفة.",
        [["Wer lebt in Berlin?", "Viele Künstler, Designer und Fotografen."], ["Was sind die Hackeschen Höfe?", "Acht Höfe aus dem Jahr 1907 mit Geschäften und Cafés."], ["Was findet man in den Kaufhäusern am Alexanderplatz?", "Fast alles: Kleidung, Kosmetik, Elektrogeräte und Souvenirs."], ["Was kann man am Sonntag machen?", "Auf einen Flohmarkt gehen, z. B. im Mauerpark."]])
    ],
    redemittel: [
      R("Über Kleidung sprechen", "الكلام عن اللبس", [
        ["Sieh mal, der Mantel ist doch toll, oder?", "بص، البالطو ده تحفة، مش كده؟"],
        ["Welcher denn? – Na, dieser hier.", "أنهي واحد؟ – ده اللي هنا."],
        ["Ich finde diese Jacke viel besser.", "شايف الجاكيت ده أحسن بكتير."],
        ["Bei der Arbeit trage ich meistens einen Anzug.", "في الشغل غالبًا بلبس بدلة."],
        ["Die Hose ist zu eng / zu weit / zu lang.", "البنطلون ضيّق / واسع / طويل أوي."]
      ]),
      R("Komplimente machen", "المجاملات", [
        ["Das steht dir sehr gut!", "لايق عليك جدًا!"],
        ["Du siehst toll aus!", "شكلك حلو أوي!"],
        ["Die Schuhe passen perfekt.", "الجزمة مظبوطة تمامًا."],
        ["Das Kleid gefällt mir sehr.", "الفستان عاجبني جدًا."],
        ["Danke, das T-Shirt ist neu.", "شكرًا، التي شيرت جديد."]
      ]),
      R("Im Geschäft: Verkäufer/in", "في المحل: البيّاع", [
        ["Kann ich Ihnen helfen?", "أقدر أساعد حضرتك؟"],
        ["Welche Größe brauchen Sie?", "مقاس حضرتك كام؟"],
        ["Wie gefällt Ihnen dieser Pullover?", "إيه رأيك في البلوفر ده؟"],
        ["Passt Ihnen die Hose?", "البنطلون مقاسك؟"],
        ["Die Umkleidekabine ist dort hinten.", "البروفة هناك ورا."]
      ]),
      R("Im Geschäft: Kunde/Kundin", "في المحل: الزبون", [
        ["Ich suche einen Pullover in Größe L.", "بدوّر على بلوفر مقاس L."],
        ["Haben Sie den auch in Blau / in M?", "عندك منه أزرق / مقاس M؟"],
        ["Kann ich den anprobieren?", "ممكن أقيسه؟"],
        ["Grün gefällt mir nicht so gut.", "الأخضر مش عاجبني أوي."],
        ["Was kostet die Jacke? – Dann nehme ich sie.", "الجاكيت بكام؟ – طيب هاخده."]
      ]),
      R("Sich im Kaufhaus orientieren", "التحرك في المول", [
        ["Entschuldigung, wo finde ich Taschen?", "عفوًا، ألاقي الشنط فين؟"],
        ["Wo gibt es hier Kosmetik?", "فين مستحضرات التجميل هنا؟"],
        ["Das gibt es im dritten Stock.", "ده في الدور التالت."],
        ["Schuhe finden Sie im Erdgeschoss.", "الجزم هتلاقيها في الدور الأرضي."],
        ["Tut mir leid, das haben wir nicht.", "آسف، مش عندنا ده."]
      ])
    ],
    speaking: {
      questions: [
        G("Was trägst du gern? Was trägst du bei der Arbeit oder im Kurs?", "بتحب تلبس إيه؟ وبتلبس إيه في الشغل أو الكورس؟"),
        G("Mach deinem Partner ein Kompliment.", "قول مجاملة لزميلك."),
        G("Was hast du zuletzt gekauft? Wo? Was hat es gekostet?", "آخر حاجة اشتريتها إيه؟ منين؟ بكام؟"),
        G("Kaufst du Kleidung online? Warum (nicht)?", "بتشتري هدوم أونلاين؟ ليه (لأ)؟"),
        G("Du bist im Geschäft: Frag nach Größe, Farbe und Preis.", "إنت في محل: اسأل عن المقاس واللون والسعر."),
        G("Was möchtest du in Berlin besuchen?", "عايز تزور إيه في برلين؟")
      ],
      model: "Ich trage gern Jeans und T-Shirts, denn das ist bequem. Bei der Arbeit trage ich eine Bluse und eine schwarze Hose. Letzte Woche habe ich im Kaufhaus neue Schuhe gekauft. Ich habe sie anprobiert und sie haben perfekt gepasst. Sie haben 59 Euro gekostet. Online kaufe ich nicht so gern, denn oft passt die Kleidung nicht und ich muss alles zurückschicken. Meine Freundin hat gesagt: „Die Schuhe stehen dir super!“",
      modelAr: "بحب ألبس جينز وتي شيرتات، لأنها مريحة. في الشغل بلبس بلوزة وبنطلون أسود. الأسبوع اللي فات اشتريت جزمة جديدة من المول. قستها وكانت مظبوطة تمامًا. كانت بـ 59 يورو. مش بحب أشتري أونلاين أوي، لأن غالبًا اللبس مبيبقاش مقاسي ولازم أرجّع كل حاجة. صاحبتي قالت: «الجزمة لايقة عليكي جدًا!»"
    },
    quiz: [
      Q("___ Mantel meinst du? – Diesen hier.", ["Welchen", "Welcher", "Welches"], 0, "Akkusativ maskulin: welchen.", "Akkusativ مذكر: welchen."),
      Q("___ Kleid ist schön!", ["Dieses", "Dieser", "Diese"], 0, "das Kleid → dieses.", "das Kleid محايد ← dieses."),
      Q("Die Jacke gefällt ___. (ich)", ["mir", "mich", "ich"], 0, "gefallen + Dativ: mir.", "gefallen بييجي مع الداتيف: mir."),
      Q("Kann ich ___ helfen? (Sie)", ["Ihnen", "Sie", "Ihr"], 0, "helfen + Dativ: Ihnen.", "helfen بييجي مع الداتيف: Ihnen."),
      Q("Die Schuhe passen ___ nicht. (er)", ["ihm", "ihn", "er"], 0, "passen + Dativ: ihm.", "passen بييجي مع الداتيف: ihm."),
      Q("Ich habe die Hose ___. (umtauschen)", ["umgetauscht", "geumtauscht", "umtauscht"], 0, "Trennbar: um-ge-tauscht.", "منفصل: um + ge + tauscht."),
      Q("Er hat 30 Euro ___. (bezahlen)", ["bezahlt", "gebezahlt", "bezahlen"], 0, "Nicht trennbar (be-): ohne ge-.", "غير منفصل (be-): من غير ge."),
      Q("Kompliment: Was passt?", ["Das steht dir sehr gut!", "Das nervt!", "Das ist doof."], 0, "Ein Kompliment ist positiv.", "المجاملة كلام إيجابي.")
    ]
  };

  /* ---------- Kapitel 12 ---------- */
  content[12] = {
    intro: "In diesem Kapitel geht es um Urlaub und Reisen. Du verstehst Urlaubsgrüße, sprichst über Reisevorbereitungen und packst den Koffer. Du verstehst Gespräche im Hotel, machst Vorschläge für eine Stadttour mit man, beschreibst einen Weg mit Bus und Bahn, schreibst eine Postkarte mit denn, verstehst und schreibst Reiseberichte, stellst W-Fragen, sprichst über das Wetter und über Reiseziele in Deutschland.",
    introAr: "الوحدة دي عن الإجازة والسفر. هتفهم تحيات من الإجازة، وتتكلم عن تحضيرات السفر وتجهّز الشنطة. هتفهم الكلام في الفندق، وتقترح جولة في المدينة بـ man، وتوصف طريق بالأتوبيس والقطر، وتكتب كارت بوستال بـ denn، وتفهم وتكتب تقارير رحلات، وتسأل بأدوات W، وتتكلم عن الطقس وأماكن السفر في ألمانيا.",
    badges: ["Urlaub", "Koffer packen", "Hotel", "man", "Wegbeschreibung", "denn", "W-Fragen", "Zeitangaben mit Dativ", "Wetter"],
    goals: [
      G("Urlaubsgrüße verstehen und eine Postkarte schreiben", "تفهم تحيات الإجازة وتكتب كارت بوستال"),
      G("Über Reisevorbereitungen sprechen", "تتكلم عن تحضيرات السفر"),
      G("Gespräche im Hotel verstehen", "تفهم الكلام في الفندق"),
      G("Vorschläge für eine Stadttour machen (man)", "تقترح جولة في المدينة (man)"),
      G("Einen Weg mit Bus und Bahn beschreiben", "توصف طريق بالأتوبيس والقطر"),
      G("Reiseberichte verstehen und schreiben; Fragen zu einer Reise stellen", "تفهم وتكتب تقارير الرحلات وتسأل عن رحلة"),
      G("Das Wetter beschreiben und Himmelsrichtungen nennen", "توصف الطقس وتسمّي الاتجاهات"),
      G("Grammatik: man, denn, Fragewörter, Zeitangaben mit Dativ", "القواعد: man وdenn وأدوات الاستفهام وتحديد الوقت مع Dativ")
    ],
    readings: [
      RD("Postkarte", "Grüße aus Hamburg",
        "Liebe Oma, lieber Opa,<br>herzliche Grüße aus Hamburg! Die Stadt ist toll, denn man kann hier sehr viel machen. Gestern haben wir eine Hafen-Rundfahrt gemacht und am Abend waren wir im Musical. Heute Vormittag haben wir die Speicherstadt besichtigt und Fischbrötchen gegessen – lecker!<br><br>Das Wetter ist leider nicht so gut: Es ist windig und manchmal regnet es. Aber zum Glück gibt es viele Museen und Cafés. Morgen fahren wir mit dem Schiff an die Elbe und dann gehen wir noch ein bisschen shoppen.<br><br>Bis bald und viele Grüße<br>eure Lea und Malik",
        "عزيزتي تيتة، عزيزي جدو،<br>تحيات حارة من هامبورغ! المدينة تحفة، لأن الواحد يقدر يعمل حاجات كتير هنا. امبارح عملنا جولة بالمركب في الميناء وبالليل كنا في مسرحية غنائية. النهارده الصبح زرنا حي المخازن القديم وأكلنا ساندويتش سمك – لذيذ!<br><br>الجو للأسف مش حلو أوي: فيه هوا وساعات بتمطر. بس لحسن الحظ فيه متاحف وكافيهات كتير. بكرة هنروح بالمركب للإلبه وبعدين هنتسوّق شوية.<br><br>أشوفكم قريب، تحياتنا<br>ليا ومالك",
        [["Warum finden Lea und Malik Hamburg toll?", "Man kann dort sehr viel machen."], ["Was haben sie gestern gemacht?", "Eine Hafen-Rundfahrt und am Abend waren sie im Musical."], ["Wie ist das Wetter?", "Windig, manchmal regnet es."], ["Was machen sie morgen?", "Sie fahren mit dem Schiff an die Elbe und gehen shoppen."]]),
      RD("Reisebericht", "Mein Wochenende in Wien",
        "Im April bin ich mit meiner Schwester für drei Tage nach Wien gefahren. Wir hatten ein Zimmer in einer kleinen Pension im Zentrum – sauber und nicht teuer. Seit dem Frühstück am ersten Tag waren wir unterwegs: Zuerst haben wir das Schloss Schönbrunn besichtigt, dann sind wir mit der Straßenbahn in die Altstadt gefahren.<br><br>Am zweiten Tag ist etwas Dummes passiert: Ich habe meinen Rucksack in der U-Bahn vergessen! Darin waren mein Pass und mein Handy. Zum Glück hat ein netter Mann den Rucksack zum Fundbüro gebracht. Nach zwei Stunden hatte ich alles wieder. Mann, war ich froh!<br><br>Am Abend haben wir Wiener Schnitzel gegessen. Nach der Reise waren wir müde, aber glücklich.",
        "في أبريل سافرت أنا وأختي فيينا تلات أيام. كان عندنا أوضة في بنسيون صغير في وسط البلد – نضيف ومش غالي. من بعد الفطار في أول يوم وإحنا بره: الأول زرنا قصر شونبرون، بعدين رحنا البلد القديمة بالترام.<br><br>تاني يوم حصلت حاجة غبية: نسيت شنطة ضهري في المترو! وكان فيها الباسبور والموبايل. لحسن الحظ راجل لطيف ودّى الشنطة لمكتب المفقودات. بعد ساعتين كل حاجة رجعتلي. يا سلام، قد إيه كنت فرحان!<br><br>بالليل أكلنا شنيتسل فييني. بعد الرحلة كنا تعبانين بس مبسوطين.",
        [["Mit wem ist die Person nach Wien gefahren?", "Mit ihrer Schwester."], ["Wo haben sie übernachtet?", "In einer kleinen Pension im Zentrum."], ["Was ist am zweiten Tag passiert?", "Die Person hat ihren Rucksack in der U-Bahn vergessen."], ["Wer hat geholfen?", "Ein netter Mann hat den Rucksack zum Fundbüro gebracht."]]),
      RD("Dialog", "An der Hotelrezeption",
        "Rezeption: Guten Abend! Willkommen im Hotel Rhein.<br>Gast: Guten Abend. Ich habe ein Einzelzimmer für zwei Nächte reserviert. Mein Name ist Ahmed Saleh.<br>Rezeption: Einen Moment … Ja, Herr Saleh. Kann ich bitte Ihren Ausweis sehen? Und füllen Sie bitte die Anmeldung aus.<br>Gast: Hier, bitte. Wann gibt es Frühstück?<br>Rezeption: Von 6.30 bis 10 Uhr im Erdgeschoss. Hier ist Ihr Schlüssel: Zimmer 312 im dritten Stock. Der Aufzug ist dort links.<br>Gast: Danke. Was kann man hier am Abend machen?<br>Rezeption: Man kann in der Altstadt spazieren gehen oder am Rhein essen. Mit der Tram Nummer 8 fahren Sie bis zum Marktplatz. Dort steigen Sie aus.<br>Gast: Super, vielen Dank!",
        "الاستقبال: مساء الخير! أهلا بيك في فندق راين.<br>الضيف: مساء الخير. أنا حاجز أوضة سينجل لليلتين. اسمي أحمد صالح.<br>الاستقبال: لحظة … أيوه يا أستاذ صالح. ممكن أشوف البطاقة؟ واملأ استمارة التسجيل لو سمحت.<br>الضيف: اتفضل. الفطار إمتى؟<br>الاستقبال: من 6:30 لـ 10 في الدور الأرضي. ده مفتاحك: أوضة 312 في الدور التالت. الأسانسير هناك على الشمال.<br>الضيف: شكرًا. الواحد ممكن يعمل إيه هنا بالليل؟<br>الاستقبال: ممكن تتمشّى في البلد القديمة أو تاكل على الراين. بترام رقم 8 توصل لحد ميدان السوق. هناك انزل.<br>الضيف: تمام، شكرًا جزيلًا!",
        [["Was hat Herr Saleh reserviert?", "Ein Einzelzimmer für zwei Nächte."], ["Wann gibt es Frühstück?", "Von 6.30 bis 10 Uhr."], ["In welchem Stock ist sein Zimmer?", "Im dritten Stock."], ["Wie kommt er zum Marktplatz?", "Mit der Tram Nummer 8."]])
    ],
    redemittel: [
      R("Über Reisevorbereitungen sprechen", "الكلام عن تحضيرات السفر", [
        ["Ich fahre in Urlaub und packe eine Hose ein.", "مسافر إجازة وهحط بنطلون في الشنطة."],
        ["Nimmst du deine Sportschuhe mit?", "هتاخد الكوتشي معاك؟"],
        ["Ich nehme immer Sonnencreme mit.", "دايمًا باخد كريم شمس معايا."],
        ["Die Tasche geht nicht zu. Kannst du mir helfen?", "الشنطة مش بتتقفل. ممكن تساعدني؟"]
      ]),
      R("Im Hotel", "في الفندق", [
        ["Ich habe ein Doppelzimmer reserviert.", "أنا حاجز أوضة دبل."],
        ["Haben Sie noch ein Einzelzimmer frei?", "لسه عندكم أوضة سينجل فاضية؟"],
        ["Wann gibt es Frühstück?", "الفطار إمتى؟"],
        ["Kann ich mit Karte zahlen?", "ينفع أدفع بالكارت؟"],
        ["Was kann man hier am Abend machen?", "الواحد يقدر يعمل إيه هنا بالليل؟"]
      ]),
      R("Einen Weg beschreiben", "وصف الطريق", [
        ["Zum Museum fährt man mit der Tram Nummer 8.", "للمتحف بتركب ترام رقم 8."],
        ["Man steigt an der Haltestelle Bahnhof ein.", "بتركب من محطة البانهوف."],
        ["Am Marktplatz steigt man um.", "في ميدان السوق بتغيّر."],
        ["Der Park ist an der Haltestelle Rathaus.", "الجنينة عند محطة البلدية."]
      ]),
      R("Eine Postkarte schreiben", "كتابة كارت بوستال", [
        ["Herzliche Grüße aus …!", "تحيات حارة من …!"],
        ["Hier ist es toll, denn man kann viel machen.", "هنا تحفة، لأن الواحد يقدر يعمل كتير."],
        ["Heute haben wir das Museum besucht.", "النهارده زرنا المتحف."],
        ["Morgen machen wir eine Stadttour.", "بكرة هنعمل جولة في المدينة."],
        ["Bis bald und viele Grüße!", "أشوفك قريب، تحياتي!"]
      ]),
      R("Eine Reihenfolge beschreiben", "وصف الترتيب", [
        ["Zuerst machen wir eine Stadttour.", "الأول هنعمل جولة في المدينة."],
        ["Dann gehen wir ins Museum.", "بعدين هنروح المتحف."],
        ["Danach trinken wir einen Kaffee.", "بعد كده هنشرب قهوة."],
        ["Zum Schluss fahren wir ins Hotel.", "في الآخر هنرجع الفندق."]
      ]),
      R("Das Wetter beschreiben", "وصف الطقس", [
        ["Es ist warm / kalt / heiß / windig.", "الجو دافي / برد / حر / فيه هوا."],
        ["Die Sonne scheint. Es ist sonnig.", "الشمس طالعة. الجو مشمس."],
        ["Es regnet. / Es schneit.", "بتمطر. / بتتلّج."],
        ["Wir haben 4 Grad minus.", "الحرارة 4 تحت الصفر."],
        ["So eine Hitze! / So ein Mistwetter!", "إيه الحر ده! / إيه الجو الوحش ده!"]
      ])
    ],
    speaking: {
      questions: [
        G("Wo machst du gern Urlaub: am Meer, in den Bergen oder in einer Stadt?", "بتحب تقضي إجازتك فين: على البحر، في الجبل، ولا في مدينة؟"),
        G("Was nimmst du immer in den Urlaub mit?", "بتاخد إيه دايمًا معاك في الإجازة؟"),
        G("Was kann man in deiner Stadt machen? Benutze „man“.", "الواحد يقدر يعمل إيه في مدينتك؟ استخدم man."),
        G("Beschreibe den Weg von deiner Wohnung zum Bahnhof.", "اوصف الطريق من شقتك للمحطة."),
        G("Erzähl von deiner letzten Reise: Wann? Wohin? Mit wem? Was ist passiert?", "احكي عن آخر سفرية: إمتى؟ فين؟ مع مين؟ إيه اللي حصل؟"),
        G("Wie ist das Wetter heute? Wie ist es im Sommer in deinem Land?", "الجو النهارده عامل إزاي؟ وفي الصيف في بلدك؟")
      ],
      model: "Ich mache am liebsten Urlaub am Meer, denn ich schwimme gern. Letzten Sommer bin ich mit meiner Familie an die Ostsee gefahren. Wir haben eine Woche in einer Ferienwohnung gewohnt. Ich habe immer Sonnencreme, eine Sonnenbrille und ein Buch mitgenommen. Das Wetter war meistens schön: sonnig und warm, nur am Mittwoch hat es geregnet. Da sind wir ins Museum gegangen. In meiner Stadt kann man auch viel machen: Man kann im Park spazieren gehen oder in der Altstadt essen.",
      modelAr: "بحب أقضي إجازتي على البحر أكتر حاجة، لأني بحب العوم. الصيف اللي فات رحت مع عيلتي بحر البلطيق. قعدنا أسبوع في شقة مصيفية. كنت دايمًا باخد كريم شمس ونضارة شمس وكتاب. الجو كان غالبًا حلو: مشمس ودافي، بس يوم الأربع مطّرت. ساعتها رحنا المتحف. في مدينتي كمان الواحد يقدر يعمل حاجات كتير: ممكن يتمشّى في الجنينة أو ياكل في البلد القديمة."
    },
    quiz: [
      Q("In Basel ___ man viel machen.", ["kann", "können", "kannst"], 0, "man + Verb in der 3. Person Singular.", "man + الفعل زي er/sie/es."),
      Q("Die Stadt ist toll, ___ man kann viel machen.", ["denn", "aber", "oder"], 0, "Grund: denn (Verb auf Position 2).", "للسبب: denn (والفعل في التاني)."),
      Q("___ hat euch geholfen? – Ein Taxifahrer.", ["Wer", "Wen", "Wem"], 0, "Frage nach der Person im Nominativ: Wer?", "للسؤال عن الفاعل: Wer؟"),
      Q("___ gehören die Sachen? – Mir.", ["Wem", "Wen", "Wer"], 0, "gehören + Dativ: Wem?", "gehören + Dativ: Wem؟"),
      Q("Wir sind ___ einer Woche zu Hause.", ["seit", "vor", "ab"], 0, "seit: von der Vergangenheit bis jetzt.", "seit: من الماضي لحد دلوقتي."),
      Q("___ dem Frühstück dusche ich.", ["Vor", "Seit", "Ab"], 0, "vor = früher als.", "vor = قبل."),
      Q("Es gibt viele Wolken. Es ist ___.", ["bewölkt", "sonnig", "heiß"], 0, "Wolken → bewölkt.", "سحاب ← bewölkt."),
      Q("München liegt im ___ von Deutschland.", ["Süden", "Norden", "Westen"], 0, "München ist im Süden.", "ميونخ في الجنوب.")
    ]
  };

  if (!Array.isArray(window.A1_BOOK)) return;
  window.A1_BOOK.forEach(chapter => {
    const lesson = content[chapter.num];
    if (!lesson || chapter.num < 7) return;
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
