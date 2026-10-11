/* A2.1 conversation situations: for every chapter (1-6) five everyday situations with
   ready-to-use sentences, a model dialogue and a speaking task. Loaded after
   data_a21_lessons.js; the sentences are also merged into each chapter's Redemittel. */
(function () {
  const S = (situation, situationAr, phrases, lines, task, taskAr) => ({
    situation, situationAr,
    phrases: phrases.map(([de, ar]) => ({ de, ar })),
    dialogue: lines.map(([s, de, ar]) => ({ s, de, ar })),
    task, taskAr
  });

  const conversations = {
    /* ---------- Kapitel 1 ---------- */
    1: [
      S("Sich im neuen Kurs ausführlich vorstellen", "تعريف النفس بالتفصيل في كورس جديد", [
        ["Ich heiße Samir und komme aus Tunesien.", "اسمي سمير وأنا من تونس."],
        ["Ich lebe seit einem Jahr in Hamburg.", "عايش في هامبورغ من سنة."],
        ["Ich bin verheiratet und habe zwei Kinder.", "أنا متجوز وعندي ولدين."],
        ["Ich habe eine Ausbildung zum Elektriker gemacht.", "عملت تدريب مهني ككهربائي."],
        ["Jetzt arbeite ich bei einer Firma für Solaranlagen.", "دلوقتي بشتغل في شركة طاقة شمسية."],
        ["Meine Muttersprache ist Arabisch, Französisch spreche ich fließend.", "لغتي الأم عربي، والفرنساوي بتكلمه بطلاقة."],
        ["In meiner Freizeit spiele ich Fußball im Verein.", "في وقت فراغي بلعب كورة في النادي."],
        ["Und du? Erzähl doch mal von dir!", "وإنت؟ احكيلي عن نفسك!"]
      ], [
        ["Lehrerin", "Willkommen im Kurs! Stellt euch bitte kurz vor. Samir, fängst du an?", "أهلا بيكم في الكورس! عرّفوا بنفسكم بسرعة. سمير، تبدأ إنت؟"],
        ["Samir", "Gern. Ich heiße Samir, ich komme aus Tunesien und lebe seit einem Jahr in Hamburg.", "بكل سرور. اسمي سمير، من تونس وعايش في هامبورغ من سنة."],
        ["Lehrerin", "Und was machst du beruflich?", "وبتشتغل إيه؟"],
        ["Samir", "Ich habe eine Ausbildung zum Elektriker gemacht. Jetzt arbeite ich bei einer Firma für Solaranlagen.", "عملت تدريب ككهربائي. دلوقتي بشتغل في شركة طاقة شمسية."],
        ["Lehrerin", "Interessant! Welche Sprachen sprichst du?", "ممتع! بتتكلم أنهي لغات؟"],
        ["Samir", "Arabisch ist meine Muttersprache, Französisch spreche ich fließend und Deutsch lerne ich jetzt.", "العربي لغتي الأم، الفرنساوي بتكلمه بطلاقة، والألماني بتعلمه دلوقتي."],
        ["Lehrerin", "Super. Und was machst du gern in deiner Freizeit?", "تمام. وبتحب تعمل إيه في وقت فراغك؟"],
        ["Samir", "Ich spiele Fußball im Verein und koche gern für meine Familie.", "بلعب كورة في النادي وبحب أطبخ لعيلتي."]
      ], "Stell dich ausführlich vor: Herkunft, Wohnort, Familie, Beruf, Sprachen und Freizeit.", "عرّف بنفسك بالتفصيل: بلدك ومكان سكنك وعيلتك وشغلك ولغاتك ووقت فراغك."),
      S("Vom letzten Jahr erzählen", "الحكي عن السنة اللي فاتت", [
        ["Das letzte Jahr war echt spannend.", "السنة اللي فاتت كانت مثيرة بجد."],
        ["Ich habe meine Ausbildung abgeschlossen.", "خلّصت التدريب المهني."],
        ["Im Sommer bin ich nach Spanien geflogen.", "في الصيف سافرت إسبانيا."],
        ["Wir haben ein Auto gemietet und sind durch das Land gereist.", "أجّرنا عربية ولفّينا البلد."],
        ["Meine Schwester hat geheiratet.", "أختي اتجوزت."],
        ["Ich bin nach Zürich umgezogen.", "نقلت زيورخ."],
        ["Ich habe an einem Tenniskurs teilgenommen.", "اشتركت في كورس تنس."],
        ["Und was hast du letztes Jahr gemacht?", "وإنت عملت إيه السنة اللي فاتت؟"]
      ], [
        ["Lilly", "Julia, lang nicht gesehen! Wie war dein letztes Jahr?", "يوليا، وحشتيني! سنتك اللي فاتت كانت عاملة إزاي؟"],
        ["Julia", "Echt spannend! Ich habe meine Ausbildung zur Augenoptikerin abgeschlossen.", "مثيرة بجد! خلّصت تدريبي كأخصائية بصريات."],
        ["Lilly", "Glückwunsch! Und hast du gute Noten bekommen?", "مبروك! وجبتي درجات كويسة؟"],
        ["Julia", "Ja, zum Glück. Danach bin ich mit einer Freundin nach Spanien geflogen.", "أيوه لحسن الحظ. بعدها سافرت مع صاحبتي إسبانيا."],
        ["Lilly", "Toll! Was habt ihr dort gemacht?", "تحفة! عملتوا إيه هناك؟"],
        ["Julia", "Wir haben ein Auto gemietet und sind drei Wochen durch das Land gefahren.", "أجّرنا عربية ولفّينا البلد 3 أسابيع."],
        ["Lilly", "Und im August war doch die Hochzeit von deiner Schwester, oder?", "وفي أغسطس كان فرح أختك، مش كده؟"],
        ["Julia", "Genau! Ich habe das Fest mit ihr organisiert. Das war viel Arbeit, aber wunderschön.", "بالظبط! نظّمت الحفلة معاها. كان تعب كتير بس جميل جدًا."]
      ], "Erzähl im Perfekt von drei Ereignissen aus dem letzten Jahr.", "احكي بالـ Perfekt عن 3 أحداث من السنة اللي فاتت."),
      S("Sich verabreden", "الاتفاق على ميعاد", [
        ["Hast du am Samstag Zeit?", "فاضي يوم السبت؟"],
        ["Ich gehe auf den Flohmarkt. Kommst du mit?", "رايح سوق الحاجات القديمة. جاي معايا؟"],
        ["Das ist eine gute Idee!", "فكرة حلوة!"],
        ["Wann geht es los?", "هنبدأ إمتى؟"],
        ["Geht es auch ein bisschen später?", "ينفع متأخر شوية؟"],
        ["Einverstanden. Treffen wir uns am Bahnhof?", "موافق. نتقابل في المحطة؟"],
        ["Kann ich etwas mitbringen?", "أجيب حاجة معايا؟"],
        ["Super, bis Samstag!", "تمام، أشوفك السبت!"]
      ], [
        ["Lea", "Hey Ben, hast du am Samstag Zeit? Ich gehe auf den Flohmarkt am Hafen.", "أهلا بن، فاضي يوم السبت؟ رايحة سوق الحاجات القديمة عند الميناء."],
        ["Ben", "Oh ja, gern! Wann geht es los?", "أوه أيوه بكل سرور! هنبدأ إمتى؟"],
        ["Lea", "Um neun. Dann gibt es noch die schönen Sachen.", "الساعة 9. ساعتها لسه فيه الحاجات الحلوة."],
        ["Ben", "Um neun? Hm, geht es auch ein bisschen später? Ich arbeite am Freitag lange.", "الساعة 9؟ همم، ينفع متأخر شوية؟ بشتغل لحد متأخر يوم الجمعة."],
        ["Lea", "Okay, um halb elf. Treffen wir uns am Eingang?", "ماشي، 10 ونص. نتقابل عند المدخل؟"],
        ["Ben", "Einverstanden. Danach können wir noch einen Kaffee trinken.", "موافق. بعدها ممكن نشرب قهوة."]
      ], "Mach einen Vorschlag für das Wochenende. Dein Partner fragt nach und ändert die Uhrzeit.", "اقترح حاجة للويك إند. زميلك يستفسر ويغيّر الميعاد."),
      S("Absagen und begründen", "الاعتذار وذكر السبب", [
        ["Danke für die Einladung!", "شكرًا على الدعوة!"],
        ["Ich möchte gern, aber ich kann leider nicht.", "نفسي، بس للأسف مش هقدر."],
        ["Ich kann nicht kommen, weil ich arbeiten muss.", "مش هقدر آجي لأني لازم أشتغل."],
        ["Ich komme später, weil ich Überstunden habe.", "هاجي متأخر لأن عندي ساعات إضافية."],
        ["Ich besuche meinen Vater, weil er krank ist.", "هزور أبويا لأنه عيّان."],
        ["Schade, da geht es leider nicht.", "خسارة، مش هينفع للأسف."],
        ["Vielleicht nächstes Mal!", "يمكن المرة الجاية!"],
        ["Viel Spaß euch!", "انبسطوا!"]
      ], [
        ["Ben", "Hallo Marvin! Ich bin wieder da. Kommst du morgen Abend zum Essen?", "أهلا مارفن! أنا رجعت. هتيجي بكرة بالليل على العشا؟"],
        ["Marvin", "Ich komme gern, aber erst später, weil ich bis acht arbeiten muss.", "هاجي بكل سرور، بس متأخر لأني لازم أشتغل لحد 8."],
        ["Ben", "Kein Problem. Und Lea? Hast du von ihr gehört?", "مفيش مشكلة. وليا؟ سمعت منها حاجة؟"],
        ["Marvin", "Ja, sie kann leider nicht kommen, weil sie ihren Vater besucht. Er hat die Grippe.", "أيوه، للأسف مش هتقدر تيجي لأنها بتزور أبوها. عنده إنفلونزا."],
        ["Ben", "Oh, schade! Gute Besserung an ihren Vater.", "يا خسارة! سلامته."],
        ["Marvin", "Ich sage es ihr. Darf ich meinen Hund mitbringen?", "هقولها. ينفع أجيب كلبي معايا؟"],
        ["Ben", "Na klar, bring Taiga mit!", "طبعًا، هات تايجا!"]
      ], "Dein Freund lädt dich ein, aber du kannst nicht. Sag ab und begründe mit weil.", "صاحبك عزمك بس مش هتقدر. اعتذر وقول السبب بـ weil."),
      S("Ein besonderes Restaurant empfehlen", "ترشيح مطعم مميّز", [
        ["Kennst du das Restaurant „Dunkelbunt“?", "تعرف مطعم «دونكلبونت»؟"],
        ["Dort isst man im Dunkeln.", "هناك الواحد بياكل في الضلمة."],
        ["Man kann nichts sehen, aber man schmeckt alles intensiver.", "مش بتشوف حاجة بس بتدوق كل حاجة بشكل أقوى."],
        ["Das Essen war sehr lecker.", "الأكل كان لذيذ جدًا."],
        ["Man muss eine Woche vorher reservieren.", "لازم تحجز قبلها بأسبوع."],
        ["Handys müssen aus sein.", "الموبايلات لازم تبقى مقفولة."],
        ["Ich kann es dir wirklich empfehlen.", "بجد أرشّحهولك."],
        ["Wollen wir zusammen hingehen?", "نروح مع بعض؟"]
      ], [
        ["Nele", "Gloria, ich war am Samstag in einem total besonderen Restaurant!", "جلوريا، كنت يوم السبت في مطعم مميّز جدًا!"],
        ["Gloria", "Erzähl! Was war denn so besonders?", "احكي! إيه المميّز أوي؟"],
        ["Nele", "Man isst dort im Dunkeln. Man sieht gar nichts.", "الواحد بياكل هناك في الضلمة. مش بتشوف أي حاجة."],
        ["Gloria", "Im Dunkeln? Ist das nicht schwierig?", "في الضلمة؟ مش صعب؟"],
        ["Nele", "Am Anfang schon. Aber dann schmeckt und riecht man alles viel intensiver. Das Essen war super lecker.", "في الأول آه. بس بعدين بتدوق وبتشم كل حاجة أقوى بكتير. الأكل كان لذيذ جدًا."],
        ["Gloria", "Klingt spannend! Wie bekommt man einen Platz?", "يبان مثير! الواحد يحجز إزاي؟"],
        ["Nele", "Du musst ungefähr eine Woche vorher reservieren. Wollen wir zusammen hingehen?", "لازم تحجزي قبلها بأسبوع تقريبًا. نروح مع بعض؟"]
      ], "Empfiehl einem Freund ein besonderes Restaurant: Was ist besonders? Wie reserviert man?", "رشّح لصاحبك مطعم مميّز: إيه المميّز؟ وإزاي يحجز؟")
    ],

    /* ---------- Kapitel 2 ---------- */
    2: [
      S("Über die Schulzeit sprechen", "الكلام عن أيام المدرسة", [
        ["Wo bist du zur Schule gegangen?", "رحت المدرسة فين؟"],
        ["Ich bin in Damaskus zur Schule gegangen.", "رحت المدرسة في دمشق."],
        ["Ich musste jeden Tag eine Schuluniform tragen.", "كان لازم ألبس يونيفورم كل يوم."],
        ["Wir durften im Unterricht kein Handy benutzen.", "كان ممنوع نستخدم الموبايل في الحصة."],
        ["Am Nachmittag konnte ich Freunde treffen.", "بعد الضهر كنت أقدر أقابل أصحابي."],
        ["Mein Lieblingsfach war Geschichte.", "مادتي المفضّلة كانت التاريخ."],
        ["Musstest du viele Hausaufgaben machen?", "كان لازم تعمل واجبات كتير؟"],
        ["Echt? Das war bei mir auch so!", "بجد؟ عندي كمان كان كده!"]
      ], [
        ["Ayaka", "Wo bist du eigentlich zur Schule gegangen?", "إنت رحت المدرسة فين أصلًا؟"],
        ["Omar", "In Damaskus. Ich musste jeden Tag eine Schuluniform tragen.", "في دمشق. كان لازم ألبس يونيفورم كل يوم."],
        ["Ayaka", "Echt? In Japan auch! Durftet ihr im Unterricht das Handy benutzen?", "بجد؟ في اليابان كمان! كان مسموح تستخدموا الموبايل في الحصة؟"],
        ["Omar", "Nein, das war verboten. Und wir mussten viele Hausaufgaben machen.", "لأ، كان ممنوع. وكان لازم نعمل واجبات كتير."],
        ["Ayaka", "Ich musste nicht viele Hausaufgaben machen, aber wir hatten jeden Tag Unterricht bis vier.", "أنا ماكانش لازم أعمل واجبات كتير، بس كان عندنا دراسة كل يوم لحد 4."],
        ["Omar", "Bis vier? Ach, nee! Was war dein Lieblingsfach?", "لحد 4؟ لأ يا شيخ! إيه كانت مادتك المفضّلة؟"],
        ["Ayaka", "Kunst. Ich wollte immer Malerin werden.", "الرسم. كنت دايمًا عايزة أبقى رسّامة."]
      ], "Stell deinem Partner fünf Fragen zur Schulzeit mit Modalverben im Präteritum (musstest du …?, durftest du …?).", "اسأل زميلك 5 أسئلة عن أيام المدرسة بالأفعال المساعدة في الماضي."),
      S("Einen Kommentar schreiben und reagieren", "كتابة تعليق والرد", [
        ["Das kann ich gut verstehen.", "أنا فاهم ده كويس."],
        ["Das kenne ich auch.", "أنا كمان عارف الإحساس ده."],
        ["Das war bei mir nicht so.", "عندي ماكانش كده."],
        ["Das ist ja lustig!", "ده مضحك!"],
        ["Das überrascht mich, weil …", "ده مفاجئ بالنسبالي لأن …"],
        ["Ich war auch in der Theater-AG.", "أنا كمان كنت في نشاط المسرح."],
        ["Die Klassenfahrten waren immer super.", "رحلات المدرسة كانت دايمًا تحفة."],
        ["Ich hatte zum Glück tolle Lehrer.", "لحسن الحظ كان عندي مدرّسين تحفة."]
      ], [
        ["Mia", "Hast du meinen Beitrag über die Klassenfahrt gelesen?", "قريت البوست بتاعي عن رحلة المدرسة؟"],
        ["Tom", "Ja! Ihr wart eine Woche in Rom? Das ist ja toll!", "أيوه! كنتوا أسبوع في روما؟ ده تحفة!"],
        ["Mia", "Ja, aber wir mussten jeden Tag um sieben Uhr aufstehen.", "أيوه، بس كان لازم نصحى كل يوم الساعة 7."],
        ["Tom", "Das kenne ich! Bei uns war das genauso.", "عارف الإحساس ده! عندنا كان كده بالظبط."],
        ["Mia", "Und wohin seid ihr gefahren?", "وإنتو رحتوا فين؟"],
        ["Tom", "Nur nach Hamburg. Aber das war auch witzig – wir konnten jeden Abend ins Kino gehen.", "هامبورغ بس. بس كانت مسلّية برضه – كنا نقدر نروح السينما كل ليلة."]
      ], "Schreib einen kurzen Beitrag über ein Erlebnis aus der Schulzeit. Dein Partner kommentiert.", "اكتب بوست قصير عن تجربة من أيام المدرسة. زميلك يعلّق."),
      S("Über Pläne nach der Schule sprechen", "الكلام عن خطط بعد المدرسة", [
        ["Was machst du nach dem Abitur?", "هتعمل إيه بعد الثانوية؟"],
        ["Ich möchte eine Ausbildung zur Gärtnerin machen.", "عايزة أعمل تدريب كبستانية."],
        ["Ich mache erst mal ein Freiwilliges Soziales Jahr.", "هعمل الأول سنة تطوعية اجتماعية."],
        ["Ich möchte Medizin studieren.", "عايز أدرس طب."],
        ["Ich will Berufserfahrung sammeln.", "عايز أكتسب خبرة عملية."],
        ["Ich möchte von meinen Eltern unabhängig sein.", "عايز أبقى مستقل عن أهلي."],
        ["Eine Weltreise ist nützlich für das Leben.", "رحلة حول العالم مفيدة للحياة."],
        ["Ich will keine Zeit verlieren.", "مش عايز أضيّع وقت."]
      ], [
        ["Vida", "Alex, ihr macht doch bald euren Schulabschluss. Was wollt ihr danach machen?", "أليكس، إنتو هتخلّصوا المدرسة قريب. عايزين تعملوا إيه بعدها؟"],
        ["Alex", "Ich weiß es noch nicht genau. Ich möchte nicht gleich studieren.", "لسه مش عارف بالظبط. مش عايز أدرس على طول."],
        ["Vida", "Warum nicht? Mach doch eine Weltreise! Da sammelst du viele Erfahrungen.", "ليه لأ؟ اعمل رحلة حول العالم! هتكتسب خبرات كتير."],
        ["Fabian", "Das sehe ich anders. Eine Weltreise ist teuer und man verliert ein Jahr.", "أنا شايف غير كده. الرحلة حول العالم غالية والواحد بيضيّع سنة."],
        ["Alex", "Hm, vielleicht mache ich erst mal ein Praktikum. Dann verdiene ich auch Geld.", "همم، يمكن أعمل الأول تدريب عملي. ساعتها هكسب فلوس كمان."],
        ["Vida", "Das ist eine super Idee! Und am Wochenende besucht ihr mich in Leipzig, okay?", "دي فكرة تحفة! وفي الويك إند تزوروني في لايبزيج، ماشي؟"]
      ], "Diskutiert zu dritt: Ausbildung, Studium oder Weltreise? Sagt eure Meinung, stimmt zu oder lehnt ab.", "اتناقشوا 3: تدريب مهني ولا جامعة ولا رحلة حول العالم؟ قولوا رأيكم ووافقوا أو ارفضوا."),
      S("Die Meinung sagen und diskutieren", "قول الرأي والمناقشة", [
        ["Ich finde ein Sprachkurs im Ausland gut.", "أنا شايف كورس لغة برّه كويس."],
        ["Das ist meine Meinung.", "ده رأيي."],
        ["Das stimmt. / Genau.", "صح. / بالظبط."],
        ["Das ist eine super Idee.", "دي فكرة تحفة."],
        ["Das stimmt nicht.", "ده مش صحيح."],
        ["So einfach ist das nicht.", "الموضوع مش بالسهولة دي."],
        ["Das sehe ich anders.", "أنا شايف غير كده."],
        ["Ich denke, das geht nicht.", "أعتقد إن ده مش هينفع."]
      ], [
        ["Kemal", "Ich finde, Schüler sollen keine Hausaufgaben mehr machen.", "أنا شايف إن التلاميذ مش لازم يعملوا واجبات تاني."],
        ["Sophie", "Das sehe ich anders. Mit Hausaufgaben lernt man mehr.", "أنا شايفة غير كده. بالواجبات الواحد بيتعلم أكتر."],
        ["Kemal", "Das stimmt nicht immer. Viele Schüler haben am Nachmittag keine Freizeit.", "ده مش صحيح دايمًا. تلاميذ كتير مش عندهم وقت فراغ بعد الضهر."],
        ["Sophie", "Hm, das ist richtig. Vielleicht weniger Hausaufgaben?", "همم، ده صح. يمكن واجبات أقل؟"],
        ["Kemal", "Genau! Das ist eine super Idee.", "بالظبط! دي فكرة تحفة."],
        ["Sophie", "Und mehr Projekte in der Schule – das macht mehr Spaß.", "ومشاريع أكتر في المدرسة – ده ممتع أكتر."]
      ], "Wählt ein Thema (Schuluniform, Hausaufgaben, Handy in der Schule) und diskutiert.", "اختاروا موضوع (اليونيفورم، الواجبات، الموبايل في المدرسة) واتناقشوا."),
      S("Schulsysteme vergleichen", "مقارنة الأنظمة التعليمية", [
        ["Wie lange dauert die Schule in deinem Land?", "المدرسة في بلدك قد إيه؟"],
        ["Bei uns dauert die Schule zwölf Jahre.", "عندنا المدرسة 12 سنة."],
        ["In Deutschland gibt es verschiedene Schultypen.", "في ألمانيا فيه أنواع مختلفة من المدارس."],
        ["Mit dem Abitur kann man studieren.", "بالأبيتور الواحد يقدر يدرس في الجامعة."],
        ["Nach der Realschule machen viele eine Ausbildung.", "بعد المدرسة المتوسطة ناس كتير بيعملوا تدريب مهني."],
        ["Das Schulsystem ist in jedem Bundesland anders.", "النظام التعليمي مختلف في كل ولاية."],
        ["Bei uns gibt es keine Gesamtschule.", "عندنا مفيش مدرسة شاملة."],
        ["Das ist ein großer Unterschied.", "ده فرق كبير."]
      ], [
        ["Anna", "Wie ist das Schulsystem in Brasilien?", "النظام التعليمي في البرازيل عامل إزاي؟"],
        ["Lucas", "Die Kinder gehen neun Jahre in die Grundschule und dann drei Jahre in die Oberschule.", "العيال بيروحوا الابتدائي 9 سنين وبعدين 3 سنين ثانوي."],
        ["Anna", "In Deutschland ist das anders. Nach vier Jahren Grundschule wählt man den Schultyp.", "في ألمانيا الموضوع مختلف. بعد 4 سنين ابتدائي بيختاروا نوع المدرسة."],
        ["Lucas", "Schon mit zehn Jahren? Das ist aber früh!", "وهما عندهم 10 سنين؟ ده بدري أوي!"],
        ["Anna", "Ja, das finden viele. Deshalb gibt es auch Gesamtschulen. Dort kann man alle Abschlüsse machen.", "أيوه، ناس كتير شايفة كده. عشان كده فيه مدارس شاملة. هناك تقدر تاخد كل الشهادات."],
        ["Lucas", "Das finde ich gut. Und mit dem Abitur kann man dann studieren, oder?", "ده كويس في رأيي. وبالأبيتور ممكن تدرس في الجامعة، صح؟"]
      ], "Vergleiche das Schulsystem in deinem Land mit dem deutschen: Was ist gleich, was ist anders?", "قارن النظام التعليمي في بلدك بالألماني: إيه المتشابه وإيه المختلف؟")
    ],

    /* ---------- Kapitel 3 ---------- */
    3: [
      S("Geräte vergleichen", "مقارنة الأجهزة", [
        ["Ich brauche einen neuen Laptop.", "محتاج لابتوب جديد."],
        ["Kauf doch ein Tablet. Das ist leichter.", "اشتري تابلت. أخف."],
        ["Der Laptop ist teurer als das Tablet.", "اللابتوب أغلى من التابلت."],
        ["Das Tablet ist nicht so praktisch wie der Laptop.", "التابلت مش عملي زي اللابتوب."],
        ["Auf dem Laptop kann man besser schreiben.", "على اللابتوب الواحد بيكتب أحسن."],
        ["Der Bildschirm ist größer.", "الشاشة أكبر."],
        ["Am wichtigsten ist mir ein guter Akku.", "أهم حاجة عندي بطارية كويسة."],
        ["Ich arbeite lieber mit einer richtigen Tastatur.", "بفضّل أشتغل بكيبورد حقيقي."]
      ], [
        ["Paul", "Mein Handy ist kaputt. Ich brauche ein neues Smartphone.", "موبايلي باظ. محتاج موبايل جديد."],
        ["Eva", "Kauf doch das Modell von mir. Das ist billiger als die anderen.", "اشتري الموديل بتاعي. أرخص من الباقيين."],
        ["Paul", "Hm, aber ist die Kamera auch so gut wie bei den teuren Handys?", "همم، بس الكاميرا كويسة زي الموبايلات الغالية؟"],
        ["Eva", "Fast so gut. Und der Akku hält länger.", "تقريبًا كويسة زيها. والبطارية بتعيش أكتر."],
        ["Paul", "Das ist mir am wichtigsten. Ich bin den ganzen Tag unterwegs.", "دي أهم حاجة عندي. أنا برّه طول اليوم."],
        ["Eva", "Dann ist es perfekt für dich!", "يبقى ده مثالي ليك!"]
      ], "Vergleiche zwei Geräte mit als und wie. Was ist dir am wichtigsten?", "قارن جهازين بـ als وwie. إيه أهم حاجة عندك؟"),
      S("Ein Interview führen", "عمل مقابلة", [
        ["Was gefällt dir im Beruf am besten?", "إيه أكتر حاجة عاجباك في شغلك؟"],
        ["Was machst du in der Freizeit am liebsten?", "بتحب تعمل إيه أكتر حاجة في وقت فراغك؟"],
        ["Was war am Anfang am schwierigsten?", "إيه كان أصعب حاجة في الأول؟"],
        ["Was macht dich am glücklichsten?", "إيه أكتر حاجة بتفرّحك؟"],
        ["Am liebsten bin ich draußen in der Natur.", "أكتر حاجة بحبها إني أكون برّه في الطبيعة."],
        ["Am wichtigsten ist mir meine Familie.", "أهم حاجة عندي عيلتي."],
        ["Warte mal … wie sagt man gleich?", "استنّى … بيقولوا إيه بقى؟"],
        ["Danke für das Interview!", "شكرًا على المقابلة!"]
      ], [
        ["Reporterin", "Frau Rubens, Sie studieren Informatik. Was gefällt Ihnen am besten?", "أستاذة روبنز، حضرتك بتدرسي علوم كمبيوتر. إيه أكتر حاجة عاجباكي؟"],
        ["Gloria", "Am besten gefallen mir die Projekte. Wir entwickeln gerade eine App.", "أكتر حاجة عاجباني المشاريع. إحنا بنطوّر تطبيق دلوقتي."],
        ["Reporterin", "Was war am Anfang am schwierigsten?", "إيه كان أصعب حاجة في الأول؟"],
        ["Gloria", "Mathe! Aber jetzt geht es besser.", "الرياضيات! بس دلوقتي أحسن."],
        ["Reporterin", "Und was machen Sie in der Freizeit am liebsten?", "وبتحبي تعملي إيه أكتر حاجة في وقت فراغك؟"],
        ["Gloria", "Ich bin am liebsten draußen in der Natur. Da bekomme ich die besten Ideen.", "أكتر حاجة بحبها أكون برّه في الطبيعة. هناك بتجيلي أحسن الأفكار."]
      ], "Interviewe deinen Partner mit drei Fragen im Superlativ. Berichte dann einem anderen Paar.", "اعمل مقابلة مع زميلك بـ 3 أسئلة بصيغة التفضيل. وبعدين احكي لزوج تاني."),
      S("Meinung zu Fotos im Internet", "الرأي في نشر الصور على النت", [
        ["Ich finde es gut, dass man immer Kontakt hat.", "شايف إنه كويس إن الواحد دايمًا على تواصل."],
        ["Ich finde es blöd, dass manche Leute alles posten.", "شايف إنه سخيف إن ناس بتنشر كل حاجة."],
        ["Es nervt, dass die Leute Fotos an alle schicken.", "بيضايق إن الناس بتبعت الصور للكل."],
        ["Ich bin froh, dass ich Fotos sofort teilen kann.", "مبسوط إني أقدر أشارك الصور على طول."],
        ["Man muss nicht jede Party posten.", "مش لازم تنشر كل حفلة."],
        ["Das ist oft peinlich!", "ده غالبًا محرج!"],
        ["Ich sehe das sehr kritisch.", "أنا شايف ده بشكل نقدي."],
        ["Die Leute sollen vorsichtiger sein.", "الناس لازم تبقى أحذر."]
      ], [
        ["Konstantin", "Schau mal, meine Fotos vom Konzert! Schon 200 Likes!", "بص، صوري من الحفلة! 200 لايك خلاص!"],
        ["Carla", "Schön. Aber ich finde es ein bisschen blöd, dass du alles sofort postest.", "حلو. بس أنا شايفة إنه سخيف شوية إنك بتنشر كل حاجة على طول."],
        ["Konstantin", "Warum? Ich finde es super, dass meine Freunde alles sofort sehen.", "ليه؟ أنا شايف إنه تحفة إن أصحابي بيشوفوا كل حاجة على طول."],
        ["Carla", "Ich möchte lieber, dass du mich anrufst und mir alles erzählst.", "أنا أفضّل إنك تكلّمني وتحكيلي كل حاجة."],
        ["Konstantin", "Okay, das verstehe ich. Aber Fotos sind einfach schneller.", "ماشي، فاهم. بس الصور أسرع ببساطة."],
        ["Carla", "Na gut. Aber bitte poste keine Fotos von mir ohne Frage!", "طيب. بس من فضلك متنشرش صور ليّا من غير ما تسألني!"]
      ], "Diskutiert: Was sind die Vor- und Nachteile beim Posten von Fotos? Benutzt dass-Sätze.", "اتناقشوا: إيه مميزات وعيوب نشر الصور؟ استخدموا جمل dass."),
      S("Über Filme sprechen", "الكلام عن الأفلام", [
        ["Welche Filme siehst du gern?", "بتحب تتفرج على أنهي أفلام؟"],
        ["Ich sehe gern Komödien und Krimis.", "بحب أتفرج على الكوميدي والأفلام البوليسية."],
        ["Was ist dein Lieblingsfilm?", "إيه فيلمك المفضّل؟"],
        ["Wer ist dein Lieblingsschauspieler?", "مين ممثلك المفضّل؟"],
        ["Bei welchem Film hast du viel gelacht?", "ضحكت كتير في أنهي فيلم؟"],
        ["Bei Liebesfilmen weine ich oft.", "في الأفلام الرومانسية غالبًا بعيّط."],
        ["Ich sehe Filme lieber im Kino als im Fernsehen.", "بفضّل أتفرج على الأفلام في السينما عن التلفزيون."],
        ["Sieh deine Lieblingsserie doch mal auf Deutsch!", "اتفرج على مسلسلك المفضّل بالألماني!"]
      ], [
        ["Jana", "Wie oft gehst du eigentlich ins Kino?", "بتروح السينما قد إيه أصلًا؟"],
        ["Malik", "Ungefähr einmal im Monat. Ich sehe Filme lieber im Kino als zu Hause.", "حوالي مرة في الشهر. بفضّل أتفرج في السينما عن البيت."],
        ["Jana", "Und welche Filme siehst du am liebsten?", "وبتحب تتفرج على أنهي أفلام أكتر حاجة؟"],
        ["Malik", "Actionfilme und Thriller. Komödien finde ich oft langweilig.", "أكشن وإثارة. الكوميدي غالبًا بشوفه ممل."],
        ["Jana", "Echt? Ich liebe Komödien! Lachen ist am wichtigsten.", "بجد؟ أنا بحب الكوميدي! الضحك أهم حاجة."],
        ["Malik", "Okay, nächstes Mal sehen wir zusammen eine Komödie. Versprochen!", "ماشي، المرة الجاية هنتفرج على كوميدي مع بعض. وعد!"]
      ], "Frag deinen Partner nach seinen Lieblingsfilmen, Schauspielern und wo er Filme sieht.", "اسأل زميلك عن أفلامه وممثليه المفضّلين وبيتفرج فين."),
      S("Einen Film beschreiben und bewerten", "وصف فيلم وتقييمه", [
        ["Der Film heißt „Freunde fürs Leben“.", "الفيلم اسمه «أصحاب العمر»."],
        ["Es geht um sechs Jugendliche im Krankenhaus.", "الموضوع عن 6 مراهقين في المستشفى."],
        ["Die Geschichte spielt in Berlin.", "القصة بتدور في برلين."],
        ["Die Schauspieler waren super.", "الممثلين كانوا تحفة."],
        ["Die Filmmusik war sehr gut.", "موسيقى الفيلم كانت حلوة جدًا."],
        ["Das Ende hat mir nicht so gut gefallen.", "النهاية ماعجبتنيش أوي."],
        ["Die Handlung ist nicht logisch.", "الأحداث مش منطقية."],
        ["Sehr spannend – unbedingt ansehen!", "مثير جدًا – لازم تتفرج عليه!"]
      ], [
        ["Lisa", "Und, wie hat dir der Film gefallen?", "ها، الفيلم عجبك؟"],
        ["Tim", "Ich fand ihn super! Die Schauspieler haben wirklich toll gespielt.", "كان تحفة! الممثلين أداؤهم كان رائع فعلًا."],
        ["Lisa", "Ja, und die Geschichte war sehr spannend. Aber das Ende war ein bisschen traurig.", "أيوه، والقصة كانت مثيرة جدًا. بس النهاية كانت حزينة شوية."],
        ["Tim", "Stimmt. Ich musste fast weinen.", "صح. كنت هعيّط تقريبًا."],
        ["Lisa", "Mir hat auch die Filmmusik sehr gut gefallen.", "وأنا كمان موسيقى الفيلم عجبتني جدًا."],
        ["Tim", "Ich gebe dem Film fünf Sterne. Unbedingt ansehen!", "هدّي الفيلم 5 نجوم. لازم الناس تتفرج عليه!"]
      ], "Beschreib einen Film: Worum geht es? Wie hat er dir gefallen? Gib eine Bewertung.", "اوصف فيلم: عن إيه؟ وعجبك ولا لأ؟ وادّيله تقييم.")
    ],

    /* ---------- Kapitel 4 ---------- */
    4: [
      S("Über Gefühle sprechen", "الكلام عن المشاعر", [
        ["Wann bist du glücklich?", "إمتى بتبقى مبسوط؟"],
        ["Ich bin glücklich, wenn die Sonne scheint.", "ببقى مبسوط لما الشمس تطلع."],
        ["Wenn ich eine Prüfung habe, bin ich nervös.", "لما يكون عندي امتحان ببقى متوتر."],
        ["Ich bin genervt, wenn ich im Regen warten muss.", "ببقى متضايق لما أستنّى في المطر."],
        ["Wenn ich einen Horrorfilm sehe, habe ich Angst.", "لما أتفرج على فيلم رعب ببقى خايف."],
        ["Was machst du, wenn du schlechte Laune hast?", "بتعمل إيه لما مزاجك يبقى وحش؟"],
        ["Wenn ich schlechte Laune habe, höre ich Musik.", "لما مزاجي يبقى وحش بسمع موسيقى."],
        ["Das kenne ich!", "عارف الإحساس ده!"]
      ], [
        ["Aynur", "Du siehst heute so fröhlich aus. Was ist los?", "شكلك مبسوط النهارده. فيه إيه؟"],
        ["Daniel", "Ich bin immer glücklich, wenn Freitag ist! Und du? Alles gut?", "أنا دايمًا مبسوط لما يبقى يوم جمعة! وإنتي؟ كله تمام؟"],
        ["Aynur", "Na ja, ich bin ein bisschen nervös. Morgen habe ich die Führerscheinprüfung.", "يعني، متوترة شوية. بكرة عندي امتحان الرخصة."],
        ["Daniel", "Das verstehe ich. Was machst du, wenn du nervös bist?", "فاهم. بتعملي إيه لما تبقي متوترة؟"],
        ["Aynur", "Wenn ich nervös bin, gehe ich joggen. Das hilft.", "لما ببقى متوترة بروح أجري. ده بيفيد."],
        ["Daniel", "Gute Idee! Und wenn du bestehst, feiern wir zusammen!", "فكرة حلوة! ولو نجحتي هنحتفل مع بعض!"]
      ], "Erzähl: Wann bist du glücklich, nervös, traurig oder genervt? Benutze wenn.", "احكي: إمتى بتبقى مبسوط أو متوتر أو حزين أو متضايق؟ استخدم wenn."),
      S("Gratulieren", "التهنئة", [
        ["Herzlichen Glückwunsch zum Geburtstag!", "كل سنة وإنت طيب!"],
        ["Alles Gute für dich!", "كل الخير ليك!"],
        ["Herzlichen Glückwunsch zur Hochzeit!", "ألف مبروك على الجواز!"],
        ["Herzlichen Glückwunsch zur bestandenen Prüfung!", "مبروك النجاح!"],
        ["Wir wünschen euch viel Glück und Liebe.", "بنتمنّالكم سعادة وحب كتير."],
        ["Ich gratuliere dir herzlich!", "بهنّيك من قلبي!"],
        ["Das hast du super gemacht!", "عملتها تحفة!"],
        ["Ich bin so stolz auf dich!", "أنا فخور بيك جدًا!"]
      ], [
        ["Aynur", "Daniel! Ich habe den Führerschein! Ich habe die Prüfung bestanden!", "دانيال! أخدت الرخصة! نجحت في الامتحان!"],
        ["Daniel", "Das ist ja toll! Herzlichen Glückwunsch!", "ده رائع! ألف مبروك!"],
        ["Aynur", "Danke! Ich freue mich riesig. Ich war so nervös.", "شكرًا! أنا فرحانة جدًا. كنت متوترة أوي."],
        ["Daniel", "Das hast du super gemacht! Ich bin stolz auf dich.", "عملتيها تحفة! أنا فخور بيكي."],
        ["Aynur", "Am Samstag mache ich eine kleine Party. Kommst du?", "يوم السبت هعمل حفلة صغيرة. هتيجي؟"],
        ["Daniel", "Na klar! Ich bringe einen Kuchen mit.", "طبعًا! هجيب كيكة معايا."]
      ], "Gratuliere deinem Partner zu einem Ereignis (Geburtstag, Hochzeit, Prüfung, neue Stelle).", "هنّي زميلك بمناسبة (عيد ميلاد، فرح، امتحان، شغل جديد)."),
      S("Sich bedanken", "الشكر", [
        ["Vielen Dank für das schöne Geschenk!", "شكرًا جزيلًا على الهدية الحلوة!"],
        ["Tausend Dank für die Einladung!", "ألف شكر على الدعوة!"],
        ["Das ist sehr lieb von dir.", "ده لطف منك جدًا."],
        ["Danke für deine Hilfe!", "شكرًا على مساعدتك!"],
        ["Wir möchten uns für die Glückwünsche bedanken.", "عايزين نشكركم على التهاني."],
        ["Die Party war wunderschön!", "الحفلة كانت جميلة جدًا!"],
        ["Gern geschehen!", "العفو!"],
        ["Kein Problem, das habe ich gern gemacht.", "مفيش مشكلة، عملته بكل سرور."]
      ], [
        ["Nora", "Liebe Tante Hanne, vielen Dank für das schöne Geschenk!", "عزيزتي خالتو هانه، شكرًا جزيلًا على الهدية الحلوة!"],
        ["Tante Hanne", "Gern geschehen! Hat es euch gefallen?", "العفو! عجبتكم؟"],
        ["Nora", "Ja, sehr! Die Tassen sind wunderschön. Das ist so lieb von euch.", "أيوه، جدًا! الفناجين جميلة جدًا. ده لطف كبير منكم."],
        ["Tante Hanne", "Und die Hochzeit war ein wunderbarer Tag. Danke für die Einladung!", "والفرح كان يوم رائع. شكرًا على الدعوة!"],
        ["Nora", "Wir haben uns sehr gefreut, dass ihr da wart.", "إحنا فرحنا جدًا إنكم كنتم موجودين."],
        ["Tante Hanne", "Alles Liebe für euch und eure Zukunft!", "كل الحب ليكم ولمستقبلكم!"]
      ], "Bedanke dich für ein Geschenk oder eine Einladung. Dein Partner reagiert.", "اشكر على هدية أو دعوة. وزميلك يرد."),
      S("Freude und Bedauern zeigen", "التعبير عن الفرحة والأسف", [
        ["Das ist ja toll! Ich freue mich riesig!", "ده رائع! أنا فرحان جدًا!"],
        ["So ein Glück!", "يا لها من حظ!"],
        ["Das gibt's doch nicht!", "مش معقول!"],
        ["Das tut mir wirklich leid.", "أنا آسف جدًا."],
        ["Oh, ist das peinlich!", "أوه، ده محرج!"],
        ["Das macht doch nichts.", "ولا يهمّك."],
        ["Keine Sorge, es ist alles okay.", "متقلقش، كل حاجة تمام."],
        ["Hauptsache, wir feiern jetzt zusammen.", "المهم إننا بنحتفل دلوقتي مع بعض."]
      ], [
        ["Alia", "Tim, es tut mir so leid! Ich bin zu spät und das Geschenk habe ich zu Hause vergessen!", "تيم، أنا آسفة جدًا! اتأخرت ونسيت الهدية في البيت!"],
        ["Tim", "Das macht doch nichts. Hauptsache, du bist da!", "ولا يهمّك. المهم إنك جيتي!"],
        ["Alia", "Oh, und jetzt ist mir auch noch das Glas auf den Teppich gefallen. Ist das peinlich!", "أوه، ودلوقتي كمان الكوباية وقعت على السجادة. محرج أوي!"],
        ["Tim", "Keine Sorge, das ist nur Wasser. Es ist alles okay.", "متقلقيش، دي مية بس. كل حاجة تمام."],
        ["Alia", "Du bist so nett. Danke!", "إنت لطيف جدًا. شكرًا!"],
        ["Tim", "Komm, wir tanzen! Das ist meine Party und alle sollen Spaß haben.", "تعالي نرقص! دي حفلتي وكل الناس لازم تنبسط."]
      ], "Spielt eine unangenehme Situation auf einer Party. Eine Person entschuldigt sich, die andere beruhigt.", "مثّلوا موقف محرج في حفلة. واحد يعتذر والتاني يطمّنه."),
      S("Über ein Fest erzählen", "الحكي عن مهرجان", [
        ["Warst du schon mal auf der Kieler Woche?", "رحت أسبوع كيل قبل كده؟"],
        ["Das Fest findet jedes Jahr im Juni statt.", "المهرجان بيتعمل كل سنة في يونيو."],
        ["Es ist bekannt für die Segelregatten.", "معروف بسباقات المراكب الشراعية."],
        ["Man kann alte Schiffe bewundern.", "ممكن تتفرج على سفن قديمة."],
        ["Es gibt viele Konzerte und die meisten sind kostenlos.", "فيه حفلات كتير ومعظمها ببلاش."],
        ["Mir hat das Feuerwerk am besten gefallen.", "أكتر حاجة عجبتني الألعاب النارية."],
        ["Es war leider sehr voll.", "للأسف كان زحمة أوي."],
        ["Nächstes Jahr fahre ich wieder hin!", "السنة الجاية هروح تاني!"]
      ], [
        ["Jonas", "Warst du am Wochenende auf der Kieler Woche?", "كنتي في أسبوع كيل في الويك إند؟"],
        ["Mira", "Ja! Es war super. Wir haben die Segelregatta gesehen.", "أيوه! كان تحفة. شفنا سباق المراكب."],
        ["Jonas", "Und was hat dir am besten gefallen?", "وإيه أكتر حاجة عجبتك؟"],
        ["Mira", "Das Feuerwerk am Ende! Und die Konzerte waren kostenlos.", "الألعاب النارية في الآخر! والحفلات كانت ببلاش."],
        ["Jonas", "Klingt toll. Gab es auch etwas Negatives?", "يبان تحفة. كان فيه حاجة وحشة؟"],
        ["Mira", "Es war sehr voll und das Essen war ziemlich teuer. Aber ich fahre nächstes Jahr wieder hin!", "كان زحمة أوي والأكل كان غالي شوية. بس هروح تاني السنة الجاية!"]
      ], "Stell ein Fest aus deinem Land oder aus D-A-CH vor: Wann, wo, was kann man machen?", "قدّم مهرجان من بلدك أو من ألمانيا/النمسا/سويسرا: إمتى وفين والواحد يعمل إيه؟")
    ],

    /* ---------- Kapitel 5 ---------- */
    5: [
      S("Im Vorstellungsgespräch", "في مقابلة الشغل", [
        ["Freut mich, Sie kennenzulernen.", "سعيد بمعرفتك."],
        ["Haben Sie schon in einem Restaurant gearbeitet?", "اشتغلت قبل كده في مطعم؟"],
        ["Ja, ich habe in Italien als Kellnerin gearbeitet.", "أيوه، اشتغلت جرسونة في إيطاليا."],
        ["An welchen Tagen können Sie arbeiten?", "تقدري تشتغلي أنهي أيام؟"],
        ["Ich kann am Wochenende und auch spontan arbeiten.", "أقدر أشتغل في الويك إند وفي أي وقت كمان."],
        ["Welche Kleidung muss ich tragen?", "لازم ألبس إيه؟"],
        ["Wie ist die Bezahlung?", "المرتّب كام؟"],
        ["Ich gebe Ihnen morgen Bescheid.", "هبلّغك بكرة."]
      ], [
        ["Chef", "Guten Tag, Frau Rossi. Freut mich, Sie kennenzulernen.", "نهارك سعيد يا أستاذة روسي. سعيد بمعرفتك."],
        ["Valentina", "Guten Tag! Mich auch.", "نهارك سعيد! وأنا كمان."],
        ["Chef", "Haben Sie schon in einem Restaurant gearbeitet?", "اشتغلتي قبل كده في مطعم؟"],
        ["Valentina", "Ja, zwei Jahre in Mailand, als Kellnerin und an der Bar.", "أيوه، سنتين في ميلانو، جرسونة وعلى البار."],
        ["Chef", "Sehr gut. Sie studieren ja. An welchen Tagen können Sie arbeiten?", "كويس جدًا. إنتي بتدرسي. تقدري تشتغلي أنهي أيام؟"],
        ["Valentina", "Am Wochenende und am Donnerstagabend. Ich kann auch spontan arbeiten.", "في الويك إند ويوم الخميس بالليل. وأقدر أشتغل في أي وقت كمان."],
        ["Chef", "Perfekt. Wir tragen schwarze Hosen und weiße Hemden. Können Sie nächsten Donnerstag zum Probearbeiten kommen?", "ممتاز. إحنا بنلبس بنطلونات سودا وقمصان بيضا. تقدري تيجي الخميس الجاي للشغل التجريبي؟"],
        ["Valentina", "Ja, gern! Vielen Dank.", "أيوه، بكل سرور! شكرًا جزيلًا."]
      ], "Spielt ein Vorstellungsgespräch für einen Job als Aushilfe: Erfahrung, Arbeitszeit, Kleidung, Bezahlung.", "مثّلوا مقابلة شغل لوظيفة مؤقتة: الخبرة، المواعيد، اللبس، المرتّب."),
      S("Nach Dingen fragen", "السؤال عن الحاجات", [
        ["Wo ist die weiße Bluse?", "البلوزة البيضا فين؟"],
        ["Hast du den schwarzen Rock gesehen?", "شفت الجيبة السودا؟"],
        ["Die bequemen Schuhe stehen im Schrank.", "الجزمة المريحة في الدولاب."],
        ["Das neue T-Shirt liegt auf dem Bett.", "التي شيرت الجديد على السرير."],
        ["Ich ziehe den grauen Mantel an.", "هلبس البالطو الرمادي."],
        ["Mit dem roten Kleid gehe ich zur Party.", "هروح الحفلة بالفستان الأحمر."],
        ["Die aktuelle Speisekarte ist in meiner Tasche.", "المنيو الجديد في شنطتي."],
        ["Gefunden!", "لقيته!"]
      ], [
        ["Valentina", "Hilfe! Morgen ist mein Probetag. Wo ist die weiße Bluse?", "النجدة! بكرة يومي التجريبي. البلوزة البيضا فين؟"],
        ["Mitbewohnerin", "Die weiße Bluse hängt im Bad. Ich habe sie gewaschen.", "البلوزة البيضا متعلّقة في الحمّام. غسلتها."],
        ["Valentina", "Danke! Und hast du den schwarzen Rock gesehen?", "شكرًا! وشفتي الجيبة السودا؟"],
        ["Mitbewohnerin", "Der schwarze Rock liegt auf dem kleinen Stuhl.", "الجيبة السودا على الكرسي الصغير."],
        ["Valentina", "Super. Ziehe ich die bequemen Schuhe oder die neuen Schuhe an?", "تمام. ألبس الجزمة المريحة ولا الجزمة الجديدة؟"],
        ["Mitbewohnerin", "Die bequemen! Du musst den ganzen Tag stehen.", "المريحة! إنتي هتقفي طول اليوم."]
      ], "Such drei Dinge im Kursraum. Frag mit Adjektiv: Wo ist der/das/die …?", "دوّر على 3 حاجات في الفصل. اسأل بصفة: Wo ist der/das/die …؟"),
      S("In der Bank", "في البنك", [
        ["Ich möchte ein Konto eröffnen.", "عايز أفتح حساب."],
        ["Bitte füllen Sie dieses Formular aus.", "املا الاستمارة دي لو سمحت."],
        ["Wo muss ich unterschreiben?", "أوقّع فين؟"],
        ["Wann bekomme ich meine Bankkarte?", "هستلم كارت البنك إمتى؟"],
        ["Ich möchte 100 Euro abheben.", "عايز أسحب 100 يورو."],
        ["Ich möchte einen Betrag überweisen.", "عايز أحوّل مبلغ."],
        ["Könnten Sie bitte meine Karte sperren?", "ممكن توقف الكارت بتاعي لو سمحت؟"],
        ["Ohne Ausweis geht es leider nicht.", "من غير بطاقة للأسف مش هينفع."]
      ], [
        ["Angestellte", "Guten Tag. Was kann ich für Sie tun?", "نهارك سعيد. أقدر أعمل لحضرتك إيه؟"],
        ["Herr Varga", "Ich möchte ein Konto eröffnen. Ich habe eine neue Stelle.", "عايز أفتح حساب. عندي شغل جديد."],
        ["Angestellte", "Gern. Haben Sie Ihren Ausweis dabei?", "بكل سرور. معاك البطاقة؟"],
        ["Herr Varga", "Ja, hier ist mein Pass.", "أيوه، ده الباسبور."],
        ["Angestellte", "Danke. Bitte füllen Sie dieses Formular aus und unterschreiben Sie hier unten.", "شكرًا. املا الاستمارة دي ووقّع هنا تحت لو سمحت."],
        ["Herr Varga", "Wann bekomme ich die Bankkarte?", "هستلم كارت البنك إمتى؟"],
        ["Angestellte", "In einer Woche. Sie können sie hier abholen.", "بعد أسبوع. تقدر تستلمه من هنا."]
      ], "Spiel ein Gespräch in der Bank: Konto eröffnen, Geld abheben oder eine Karte sperren.", "مثّل حوار في البنك: فتح حساب أو سحب فلوس أو إيقاف كارت."),
      S("Bei der Behörde und der Polizei", "في المصلحة وفي الشرطة", [
        ["Ich möchte meinen Pass verlängern.", "عايز أجدّد الباسبور."],
        ["Ich möchte einen Personalausweis beantragen.", "عايز أطلّع بطاقة شخصية."],
        ["Haben Sie ein aktuelles Foto?", "معاك صورة حديثة؟"],
        ["Wann ist der Pass fertig?", "الباسبور هيخلص إمتى؟"],
        ["Ich möchte einen Diebstahl melden.", "عايز أبلّغ عن سرقة."],
        ["Jemand hat meine Geldbörse gestohlen.", "حد سرق محفظتي."],
        ["Wo ist das passiert?", "ده حصل فين؟"],
        ["Können Sie mir bitte helfen?", "ممكن تساعدني لو سمحت؟"]
      ], [
        ["Polizistin", "Guten Tag. Was ist passiert?", "نهارك سعيد. إيه اللي حصل؟"],
        ["Herr Ziegler", "Ich möchte einen Diebstahl melden. Jemand hat meine Geldbörse gestohlen.", "عايز أبلّغ عن سرقة. حد سرق محفظتي."],
        ["Polizistin", "Das tut mir leid. Wo ist das passiert?", "آسفة جدًا. ده حصل فين؟"],
        ["Herr Ziegler", "In der U-Bahn, zwischen Karlsplatz und Stephansplatz.", "في المترو، بين كارلس بلاتس وشتيفانس بلاتس."],
        ["Polizistin", "Was war in der Geldbörse?", "كان إيه في المحفظة؟"],
        ["Herr Ziegler", "Mein Ausweis, meine Bankkarte und 50 Euro.", "البطاقة وكارت البنك و50 يورو."],
        ["Polizistin", "Rufen Sie sofort Ihre Bank an und lassen Sie die Karte sperren. Ich schreibe jetzt den Bericht.", "كلّم البنك بتاعك حالًا وخليهم يوقفوا الكارت. هكتب المحضر دلوقتي."]
      ], "Du hast deine Tasche verloren. Geh zur Polizei und erkläre, was passiert ist.", "إنت ضيّعت شنطتك. روح الشرطة واشرح اللي حصل."),
      S("Höflich bitten", "الطلب بأدب", [
        ["Könntest du mich bitte abholen?", "ممكن تعدّي تاخدني لو سمحت؟"],
        ["Könnten Sie mir bitte helfen?", "ممكن تساعدني لو سمحت؟"],
        ["Könnte ich mal mit deinem Handy telefonieren?", "ممكن أكلّم من موبايلك؟"],
        ["Könntest du mir zehn Euro leihen?", "ممكن تسلّفني 10 يورو؟"],
        ["Könntet ihr bitte noch fünf Minuten warten?", "ممكن تستنّوا 5 دقايق كمان لو سمحتوا؟"],
        ["Ja, gern. / Natürlich.", "أيوه، بكل سرور. / طبعًا."],
        ["Tut mir leid, das geht leider nicht.", "آسف، للأسف مش هينفع."],
        ["Danke, das ist sehr nett von dir!", "شكرًا، ده لطف منك!"]
      ], [
        ["Lars", "Mira, könntest du mir bitte helfen? Mein Handy ist weg!", "ميرا، ممكن تساعديني لو سمحتي؟ موبايلي ضاع!"],
        ["Mira", "Oh nein! Natürlich. Was brauchst du?", "يا خبر! طبعًا. محتاج إيه؟"],
        ["Lars", "Könnte ich mal mit deinem Handy telefonieren? Ich muss meine Bank anrufen.", "ممكن أكلّم من موبايلك؟ لازم أكلّم البنك."],
        ["Mira", "Ja, gern. Hier, bitte.", "أيوه، بكل سرور. اتفضل."],
        ["Lars", "Danke! Und könntest du mir vielleicht noch zehn Euro für die Fahrkarte leihen?", "شكرًا! وممكن كمان تسلّفيني 10 يورو للتذكرة؟"],
        ["Mira", "Kein Problem. Das ist doch klar!", "مفيش مشكلة. أكيد طبعًا!"]
      ], "Bitte deinen Partner höflich um drei Dinge (könnte). Er/Sie stimmt zu oder lehnt ab.", "اطلب من زميلك 3 حاجات بأدب (könnte). يوافق أو يرفض.")
    ],

    /* ---------- Kapitel 6 ---------- */
    6: [
      S("Über Tätigkeiten im Beruf sprechen", "الكلام عن مهام الشغل", [
        ["Was machst du bei der Arbeit?", "بتعمل إيه في الشغل؟"],
        ["Ich organisiere Projekte und berate Kunden.", "بنظّم مشاريع وبنصح العملا."],
        ["Ich muss viel kontrollieren.", "لازم أراجع حاجات كتير."],
        ["Termine einhalten finde ich schwer.", "الالتزام بالمواعيد صعب بالنسبالي."],
        ["Ich arbeite oft am Wochenende.", "بشتغل غالبًا في الويك إند."],
        ["Das gefällt mir an meinem Job.", "ده اللي عاجبني في شغلي."],
        ["Hier klappt gar nichts!", "مفيش حاجة ماشية هنا!"],
        ["Bin noch im Büro – viel Arbeit!", "لسه في المكتب – شغل كتير!"]
      ], [
        ["Ella", "Samuel, wie war die Woche auf der Baustelle?", "صامويل، الأسبوع في موقع البناء كان عامل إزاي؟"],
        ["Samuel", "Stressig! Ich muss alles kontrollieren und die Termine einhalten. Das finde ich schwer.", "مضغوط! لازم أراجع كل حاجة وألتزم بالمواعيد. ده صعب بالنسبالي."],
        ["Ella", "Das verstehe ich. Ich muss jedes Wochenende Tests korrigieren.", "فاهمة. أنا لازم أصحّح امتحانات كل ويك إند."],
        ["Samuel", "Aber du arbeitest gern mit den Schülern, oder?", "بس إنتي بتحبي تشتغلي مع التلاميذ، صح؟"],
        ["Ella", "Ja, sehr! Ich organisiere auch gern Ausflüge mit ihnen.", "أيوه، جدًا! وبحب كمان أنظّم رحلات معاهم."],
        ["Samuel", "Am liebsten mache ich Projekte. Aber zu Behörden gehe ich gar nicht gern.", "أكتر حاجة بحبها المشاريع. بس الروحة للمصالح مش بحبها خالص."]
      ], "Erzähl deinem Partner: Welche Tätigkeiten machst du gern, welche nicht so gern?", "احكي لزميلك: إيه المهام اللي بتحبها، وإيه اللي مش بتحبها أوي؟"),
      S("Eine Fahrkarte kaufen", "شراء تذكرة قطر", [
        ["Eine Fahrkarte nach Wiesbaden, bitte.", "تذكرة لفيسبادن لو سمحت."],
        ["Wann fährt der nächste Zug?", "القطر الجاي بيقوم إمتى؟"],
        ["Muss ich umsteigen?", "لازم أغيّر؟"],
        ["Wann komme ich an?", "هوصل إمتى؟"],
        ["Hin und zurück, bitte.", "ذهاب وعودة لو سمحت."],
        ["Zweite Klasse, am Fenster.", "درجة تانية، جنب الشباك."],
        ["Ich habe eine BahnCard.", "معايا BahnCard."],
        ["Von welchem Gleis fährt der Zug?", "القطر بيقوم من أنهي رصيف؟"]
      ], [
        ["Mitarbeiter", "Guten Tag! Wohin möchten Sie fahren?", "نهارك سعيد! عايز تسافر فين؟"],
        ["Andreas", "Nach Wiesbaden, bitte. Wann fährt der nächste Zug?", "فيسبادن لو سمحت. القطر الجاي بيقوم إمتى؟"],
        ["Mitarbeiter", "Um 9:47 Uhr von Gleis 6. Sie müssen in Frankfurt umsteigen.", "الساعة 9:47 من رصيف 6. هتغيّر في فرانكفورت."],
        ["Andreas", "Und wann komme ich in Wiesbaden an?", "وهوصل فيسبادن إمتى؟"],
        ["Mitarbeiter", "Um 11:34 Uhr. Einfach oder hin und zurück?", "الساعة 11:34. ذهاب بس ولا ذهاب وعودة؟"],
        ["Andreas", "Hin und zurück, zweite Klasse. Und bitte einen Platz am Fenster.", "ذهاب وعودة، درجة تانية. ومكان جنب الشباك لو سمحت."],
        ["Mitarbeiter", "Gern. Haben Sie eine BahnCard? – Dann macht das 48 Euro.", "بكل سرور. معاك BahnCard؟ – يبقى الحساب 48 يورو."]
      ], "Kauf eine Fahrkarte am Schalter: Ziel, Uhrzeit, Umsteigen, Klasse, Platz, Preis.", "اشتري تذكرة من الشباك: الوجهة والساعة والتغيير والدرجة والمكان والسعر."),
      S("Ein Abendprogramm planen", "التخطيط لسهرة", [
        ["Was machen wir heute Abend?", "هنعمل إيه النهارده بالليل؟"],
        ["Es gibt ein tolles Konzert im Kulturzentrum.", "فيه حفلة تحفة في المركز الثقافي."],
        ["Ich habe Lust auf ein gutes Theaterstück.", "ليّا مزاج لمسرحية حلوة."],
        ["Kennst du ein gemütliches Restaurant?", "تعرف مطعم مريح؟"],
        ["Ich empfehle dir ein kleines italienisches Lokal.", "أرشّحلك مطعم إيطالي صغير."],
        ["Es gibt eine Ermäßigung für Studenten.", "فيه خصم للطلاب."],
        ["Das ist preiswert.", "ده بسعر معقول."],
        ["Gut, dann gehen wir zuerst essen und dann ins Theater.", "تمام، يبقى ناكل الأول وبعدين نروح المسرح."]
      ], [
        ["David", "Wir haben heute Abend frei. Was machen wir in Wiesbaden?", "إحنا فاضيين النهارده بالليل. هنعمل إيه في فيسبادن؟"],
        ["Andreas", "Es gibt ein Konzert mit einer bekannten Sängerin. Das klingt toll!", "فيه حفلة لمغنية مشهورة. يبان تحفة!"],
        ["David", "Hm, ich habe eher Lust auf ein gutes Theaterstück. Im r(h)eintheater gibt es einen Klassiker.", "همم، أنا ليّا مزاج أكتر لمسرحية حلوة. في مسرح الراين فيه عمل كلاسيكي."],
        ["Andreas", "Und vorher? Kennst du ein gemütliches Restaurant?", "وقبلها؟ تعرف مطعم مريح؟"],
        ["David", "Ja, die Trattoria Callas am Luisenplatz. Ein elegantes Restaurant mit leckerer Pasta.", "أيوه، تراتوريا كالاس في ميدان لويزن. مطعم أنيق بمكرونة لذيذة."],
        ["Andreas", "Super, dann gehen wir zuerst essen und danach ins Theater.", "تمام، يبقى ناكل الأول وبعدين نروح المسرح."]
      ], "Plant zu zweit einen Abend in eurer Stadt. Benutzt Adjektive: ein gemütliches Café, ein tolles Konzert …", "خطّطوا لسهرة في مدينتكم. استخدموا صفات: ein gemütliches Café وein tolles Konzert …"),
      S("Über Traumberufe sprechen", "الكلام عن مهنة الأحلام", [
        ["Was wolltest du als Kind werden?", "كنت عايز تبقى إيه وإنت صغير؟"],
        ["Mit zehn wollte ich Pilot werden.", "وأنا عندي 10 سنين كنت عايز أبقى طيار."],
        ["Was ist dein Traumberuf?", "إيه مهنة أحلامك؟"],
        ["Ich möchte gern Tierärztin werden.", "نفسي أبقى دكتورة بيطرية."],
        ["Ich finde den Beruf toll, weil …", "شايف المهنة تحفة لأن …"],
        ["Ich möchte mich selbstständig machen.", "عايز أفتح شغل لحسابي."],
        ["Er ist Fernfahrer geworden.", "بقى سوّاق نقل."],
        ["Ich kann die Entscheidung gut verstehen.", "أقدر أفهم القرار ده كويس."]
      ], [
        ["Lena", "Was wolltest du als Kind werden?", "كنت عايز تبقى إيه وإنت صغير؟"],
        ["Yusuf", "Fußballspieler natürlich! Und du?", "لاعب كورة طبعًا! وإنتي؟"],
        ["Lena", "Ich wollte immer Tierärztin werden. Ich liebe Tiere.", "كنت دايمًا عايزة أبقى دكتورة بيطرية. بحب الحيوانات."],
        ["Yusuf", "Und jetzt? Bist du zufrieden mit deinem Beruf?", "ودلوقتي؟ راضية عن شغلك؟"],
        ["Lena", "Ich bin Bürokauffrau. Aber vielleicht mache ich mich später selbstständig – mit einem Hundesalon!", "أنا موظفة مكتب. بس يمكن بعدين أفتح شغل لحسابي – صالون للكلاب!"],
        ["Yusuf", "Das ist eine tolle Idee! Ich drücke dir die Daumen.", "دي فكرة تحفة! ربنا يوفقك."]
      ], "Erzähl: Was wolltest du mit 10, 15 und 20 werden? Was ist heute dein Traumberuf? Benutze werden.", "احكي: كنت عايز تبقى إيه وإنت عندك 10 و15 و20؟ وإيه مهنة أحلامك النهارده؟ استخدم werden."),
      S("Am Telefon eine Nachricht hinterlassen", "سيبان رسالة في التليفون", [
        ["Kann ich bitte mit Herrn Jeschke sprechen?", "ممكن أكلّم السيد يشكه لو سمحت؟"],
        ["Herr Jeschke ist gerade nicht am Platz.", "السيد يشكه مش على مكتبه دلوقتي."],
        ["Er ist bei einem Kunden / außer Haus.", "هو عند عميل / برّه المكتب."],
        ["Möchten Sie eine Nachricht hinterlassen?", "تحب تسيب رسالة؟"],
        ["Könnte er mich bitte zurückrufen?", "ممكن يكلّمني تاني لو سمحت؟"],
        ["Meine Nummer ist 0176 2345678.", "رقمي 0176 2345678."],
        ["Können Sie mir die Durchwahl geben?", "ممكن تديني الرقم الداخلي؟"],
        ["Ach so! Ja, in Ordnung. Vielen Dank!", "آه كده! أيوه تمام. شكرًا جزيلًا!"]
      ], [
        ["Sekretärin", "Agentur10, Sie sprechen mit Petra Lang. Guten Tag.", "Agentur10، معاك بترا لانج. نهارك سعيد."],
        ["Herr Kaya", "Guten Tag, hier ist Mehmet Kaya. Kann ich bitte mit Herrn Jeschke sprechen?", "نهارك سعيد، معاك محمد كايا. ممكن أكلّم السيد يشكه لو سمحتي؟"],
        ["Sekretärin", "Herr Jeschke ist leider gerade bei einem Kunden. Möchten Sie eine Nachricht hinterlassen?", "للأسف السيد يشكه عند عميل دلوقتي. تحب تسيب رسالة؟"],
        ["Herr Kaya", "Ja, gern. Könnte er mich heute noch zurückrufen? Es geht um unser Projekt.", "أيوه، بكل سرور. ممكن يكلّمني النهارده؟ الموضوع بخصوص مشروعنا."],
        ["Sekretärin", "Natürlich. Wie ist Ihre Nummer?", "طبعًا. رقمك كام؟"],
        ["Herr Kaya", "0176 2345678. Können Sie mir auch seine Durchwahl geben?", "0176 2345678. ممكن كمان تديني رقمه الداخلي؟"],
        ["Sekretärin", "Gern, das ist die 312. Ich richte es ihm aus. Auf Wiederhören!", "بكل سرور، 312. هبلّغه. مع السلامة!"]
      ], "Ruf in einer Firma an. Die Person ist nicht da: Hinterlass eine Nachricht und frag nach der Durchwahl.", "كلّم شركة. الشخص مش موجود: سيب رسالة واسأل عن الرقم الداخلي.")
    ]
  };

  window.A2_CONVERSATIONS = conversations;
  if (!Array.isArray(window.BOOK0)) return;
  window.BOOK0.forEach(chapter => {
    const situations = conversations[chapter.num];
    if (!situations) return;
    chapter.conversations = situations;
    chapter.redemittel = chapter.redemittel || [];
    situations.forEach(item => {
      if (chapter.redemittel.some(group => group.cat === item.situation)) return;
      chapter.redemittel.push({ cat: item.situation, catAr: item.situationAr, items: item.phrases });
    });
  });
})();
