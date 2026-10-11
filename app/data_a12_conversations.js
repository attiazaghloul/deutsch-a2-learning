/* A1.2 conversation situations: for every chapter (7-12) five everyday situations with
   ready-to-use sentences, a short model dialogue and a speaking task. Loaded after
   data_a12_lessons.js; the sentences are also merged into each chapter's Redemittel. */
(function () {
  const S = (situation, situationAr, phrases, lines, task, taskAr) => ({
    situation, situationAr,
    phrases: phrases.map(([de, ar]) => ({ de, ar })),
    dialogue: lines.map(([s, de, ar]) => ({ s, de, ar })),
    task, taskAr
  });

  const conversations = {
    /* ---------- Kapitel 7 ---------- */
    7: [
      S("Kaffee zum Mitnehmen bestellen", "طلب قهوة تيك أواي", [
        ["Guten Morgen! Einen Kaffee zum Mitnehmen, bitte.", "صباح الخير! قهوة تيك أواي لو سمحت."],
        ["Groß oder klein?", "كبير ولا صغير؟"],
        ["Groß, bitte. Mit Milch.", "كبير لو سمحت. بلبن."],
        ["Haben Sie keinen Zucker?", "مفيش سكر؟"],
        ["Doch, hier steht er.", "لأ فيه، أهو هنا."],
        ["Das macht 3,60 Euro.", "الحساب 3.60 يورو."],
        ["Kann ich mit Karte zahlen?", "ينفع أدفع بالكارت؟"],
        ["Danke, schönen Tag noch!", "شكرًا، يومك سعيد!"]
      ], [
        ["Verkäuferin", "Guten Morgen! Was darf es sein?", "صباح الخير! تحب تاخد إيه؟"],
        ["Adnan", "Morgen! Einen Kaffee zum Mitnehmen, bitte.", "صباح النور! قهوة تيك أواي لو سمحتي."],
        ["Verkäuferin", "Groß oder klein?", "كبير ولا صغير؟"],
        ["Adnan", "Groß, bitte. Haben Sie keinen Zucker?", "كبير لو سمحتي. مفيش سكر؟"],
        ["Verkäuferin", "Doch, hier steht er. Das macht dann 3,60 Euro.", "لأ فيه، أهو هنا. الحساب 3.60 يورو."],
        ["Adnan", "Hier, bitte. Danke und schönen Tag noch!", "اتفضلي. شكرًا ويومك سعيد!"]
      ], "Bestelle ein Getränk zum Mitnehmen: Größe, Milch oder Zucker, Preis.", "اطلب مشروب تيك أواي: الحجم، اللبن أو السكر، والسعر."),
      S("Einen Tag frei nehmen", "طلب يوم إجازة", [
        ["Haben Sie kurz Zeit? Ich habe eine Frage.", "حضرتك فاضي دقيقة؟ عندي سؤال."],
        ["Kann ich am Freitag einen Tag frei haben?", "ممكن آخد يوم الجمعة إجازة؟"],
        ["Ich fahre mit einem Freund zu einem Konzert.", "مسافر مع صاحبي لحفلة."],
        ["Mit wem muss ich sprechen?", "لازم أكلّم مين؟"],
        ["Sie müssen mit der Chefin sprechen.", "لازم تكلّم المديرة."],
        ["Kann ich am Dienstag früher gehen?", "ممكن أمشي بدري يوم التلات؟"],
        ["Das ist kein Problem.", "مفيش مشكلة."],
        ["Vielen Dank!", "شكرًا جزيلًا!"]
      ], [
        ["Laura", "Adnan, hast du kurz Zeit? Ich möchte am Freitag einen Tag frei haben.", "يا عدنان، فاضي دقيقة؟ عايزة آخد الجمعة إجازة."],
        ["Adnan", "Warum? Was machst du denn?", "ليه؟ هتعملي إيه؟"],
        ["Laura", "Ich fahre mit einem Freund und einer Freundin zu einem Festival.", "مسافرة مع صاحب وصاحبة لمهرجان."],
        ["Adnan", "Schön! Dann musst du mit der Chefin sprechen.", "حلو! يبقى لازم تكلّمي المديرة."],
        ["Laura", "Okay. Und am Dienstag möchte ich schon um vier nach Hause gehen.", "ماشي. ويوم التلات عايزة أروّح الساعة 4."],
        ["Adnan", "Das ist kein Problem. Sag es der Chefin einfach auch.", "مفيش مشكلة. قوليها للمديرة برضه."]
      ], "Frag deinen Kollegen: Du möchtest einen Tag frei haben. Sag, warum.", "اسأل زميلك: عايز تاخد يوم إجازة. قول السبب."),
      S("Wohin gehst du? – Wege im Alltag", "رايح فين؟ – مشاوير اليوم", [
        ["Wohin gehst du? – Zur Bank.", "رايح فين؟ – للبنك."],
        ["Ich muss noch zur Post und zum Supermarkt.", "لسه لازم أروح البوستة والسوبر ماركت."],
        ["Woher kommst du? – Vom Arzt.", "جاي منين؟ – من عند الدكتور."],
        ["Ich komme gerade aus der Bank.", "لسه طالع من البنك."],
        ["Um drei bin ich beim Chef.", "الساعة 3 هكون عند المدير."],
        ["Der Termin dauert eine Stunde.", "الميعاد هياخد ساعة."],
        ["So ein Zufall!", "يا لها من صدفة!"],
        ["Bis später!", "أشوفك بعدين!"]
      ], [
        ["Julia", "Hallo Tom! So ein Zufall! Woher kommst du?", "أهلا يا توم! يا لها من صدفة! جاي منين؟"],
        ["Tom", "Aus der Bank. Ich hatte einen Termin. Und du, wohin gehst du?", "من البنك. كان عندي ميعاد. وإنتي رايحة فين؟"],
        ["Julia", "Zur Post. Ich muss ein Paket abholen.", "للبوستة. لازم أستلم طرد."],
        ["Tom", "Und danach? Kommst du wieder ins Büro?", "وبعدها؟ هترجعي المكتب؟"],
        ["Julia", "Ja, um drei bin ich beim Chef. Ich muss einen Bericht schreiben.", "أيوه، الساعة 3 هكون عند المدير. لازم أكتب تقرير."],
        ["Tom", "Viel Glück! Bis später!", "بالتوفيق! أشوفك بعدين!"]
      ], "Erzähl deinem Partner: Wohin gehst du heute? Wo warst du gestern? Benutze zu, bei, aus, von.", "احكي لزميلك: رايح فين النهارده؟ كنت فين امبارح؟ استخدم zu وbei وaus وvon."),
      S("Hilfe am Computer", "مساعدة على الكمبيوتر", [
        ["Kannst du mir helfen? Der Drucker druckt nicht.", "ممكن تساعدني؟ الطابعة مش بتطبع."],
        ["Ist der Drucker an?", "الطابعة شغّالة؟"],
        ["Zuerst fährst du den Computer hoch.", "الأول شغّل الكمبيوتر."],
        ["Dann gibst du das Passwort ein.", "بعدين اكتب الباسورد."],
        ["Öffne die Datei und speichere sie.", "افتح الملف واحفظه."],
        ["Mist, mein Akku ist leer.", "أوف، البطارية خلصت."],
        ["Das WLAN ist so langsam.", "الواي فاي بطيء أوي."],
        ["Kein Problem, das mache ich schnell.", "مفيش مشكلة، هعملها بسرعة."]
      ], [
        ["Anna", "Max, du hast doch einen Drucker. Kannst du zwei Kinotickets drucken?", "يا ماكس، إنت عندك طابعة. ممكن تطبع تذكرتين سينما؟"],
        ["Max", "Kein Problem! Schick mir die Datei.", "مفيش مشكلة! ابعتيلي الملف."],
        ["Anna", "Okay … Hast du sie?", "ماشي … وصلتك؟"],
        ["Max", "Ja. Zuerst öffne ich die Datei, dann drucke ich sie … Hm, der Drucker druckt nicht.", "أيوه. الأول هفتح الملف وبعدين أطبعه … همم، الطابعة مش بتطبع."],
        ["Anna", "Ist der Drucker vielleicht aus?", "يمكن الطابعة مطفية؟"],
        ["Max", "Oh ja! Ich mache ihn an … So, jetzt druckt er. Hier sind deine Tickets!", "أوه أيوه! هشغّلها … كده، دلوقتي بتطبع. أدي تذاكرك!"]
      ], "Erkläre deinem Partner: Wie druckt man eine Datei? Benutze zuerst und dann.", "اشرح لزميلك: إزاي تطبع ملف؟ استخدم zuerst وdann."),
      S("Small Talk mit Kollegen", "دردشة مع الزملاء", [
        ["Und wie war Ihr Wochenende?", "والويك إند بتاعك كان عامل إزاي؟"],
        ["Heute ist es wieder heiß, oder?", "النهارده حر تاني، مش كده؟"],
        ["Ach, jetzt regnet es schon wieder.", "يوه، بتمطر تاني."],
        ["Sehen Sie heute Abend das Fußballspiel?", "هتتفرج على الماتش النهارده بالليل؟"],
        ["Mögen Sie eigentlich Sport?", "بتحب الرياضة أصلًا؟"],
        ["Wie geht es Ihren Kindern?", "ولادك عاملين إيه؟"],
        ["Endlich Freitag! Was machen Sie am Wochenende?", "أخيرًا الجمعة! هتعمل إيه في الويك إند؟"],
        ["Schönes Wochenende!", "ويك إند سعيد!"]
      ], [
        ["Frau Weber", "Guten Morgen, Herr Kaya! Endlich Freitag!", "صباح الخير يا أستاذ كايا! أخيرًا الجمعة!"],
        ["Herr Kaya", "Ja, endlich! Was machen Sie am Wochenende?", "أيوه أخيرًا! هتعملي إيه في الويك إند؟"],
        ["Frau Weber", "Wir fahren an den See – hoffentlich ist das Wetter schön.", "هنروح البحيرة – يا رب الجو يبقى حلو."],
        ["Herr Kaya", "Im Radio sagen sie: Sonne und 25 Grad!", "في الراديو بيقولوا: شمس و25 درجة!"],
        ["Frau Weber", "Super! Und Sie? Sehen Sie am Samstag das Fußballspiel?", "تمام! وحضرتك؟ هتتفرج على الماتش يوم السبت؟"],
        ["Herr Kaya", "Natürlich! Schönes Wochenende, Frau Weber!", "طبعًا! ويك إند سعيد يا أستاذة فيبر!"]
      ], "Mach mit drei Personen Small Talk: Wetter, Wochenende, Sport. Keine persönlichen Themen!", "اعمل Small Talk مع 3 أشخاص: الجو، الويك إند، الرياضة. من غير مواضيع شخصية!")
    ],

    /* ---------- Kapitel 8 ---------- */
    8: [
      S("Im Fitness-Studio anmelden", "الاشتراك في الجيم", [
        ["Ich möchte mich im Fitness-Studio anmelden.", "عايز أشترك في الجيم."],
        ["Wie alt sind Sie? – Ich bin 27.", "سنك كام؟ – 27."],
        ["Wie groß sind Sie? – Eins achtzig.", "طولك كام؟ – متر و80."],
        ["Wie viel wiegen Sie? – Circa 80 Kilo.", "وزنك كام؟ – حوالي 80 كيلو."],
        ["Machen Sie regelmäßig Sport?", "بتعمل رياضة بانتظام؟"],
        ["Ich möchte fit bleiben.", "عايز أفضل لايق."],
        ["Wie viel kostet das im Monat?", "الشهر بكام؟"],
        ["Wann ist das Studio geöffnet?", "الجيم بيفتح إمتى؟"]
      ], [
        ["Trainerin", "Hallo! Sie möchten sich anmelden? Wie alt sind Sie?", "أهلا! عايز تشترك؟ سنك كام؟"],
        ["Karim", "Ich bin 29.", "عندي 29 سنة."],
        ["Trainerin", "Und wie groß sind Sie und wie viel wiegen Sie?", "وطولك كام ووزنك كام؟"],
        ["Karim", "Ich bin eins achtzig groß und wiege circa 85 Kilo.", "طولي متر و80 ووزني حوالي 85 كيلو."],
        ["Trainerin", "Gut. Machen Sie regelmäßig Sport?", "كويس. بتعمل رياضة بانتظام؟"],
        ["Karim", "Nein, leider nicht. Aber ich möchte fit und gesund werden.", "لأ، للأسف. بس عايز أبقى لايق وصحتي كويسة."]
      ], "Spiel das Gespräch im Fitness-Studio: Sag Alter, Größe, Gewicht und warum du Sport machen möchtest.", "مثّل الحوار في الجيم: قول سنك وطولك ووزنك وليه عايز تعمل رياضة."),
      S("Fitness-Tipps geben", "إدّي نصايح لياقة", [
        ["Steh früh auf!", "اصحى بدري!"],
        ["Mach jeden Tag zehn Minuten Sport!", "اعمل رياضة 10 دقايق كل يوم!"],
        ["Trink viel Wasser!", "اشرب مية كتير!"],
        ["Iss mehr Obst und Gemüse!", "كُل فاكهة وخضار أكتر!"],
        ["Fahr mit dem Fahrrad zur Arbeit!", "روح الشغل بالعجلة!"],
        ["Geht zusammen joggen!", "اجروا مع بعض!"],
        ["Seid aktiv!", "خليكو نشيطين!"],
        ["Super, mach weiter so!", "ممتاز، كمّل كده!"]
      ], [
        ["Tim", "Ich bin immer so müde. Hast du einen Tipp für mich?", "أنا دايمًا تعبان. عندك نصيحة ليّا؟"],
        ["Sara", "Ja! Geh früh ins Bett und steh früh auf.", "أيوه! نام بدري واصحى بدري."],
        ["Tim", "Hm, und was noch?", "همم، وإيه كمان؟"],
        ["Sara", "Mach Sport! Fahr mit dem Fahrrad zur Arbeit.", "اعمل رياضة! روح الشغل بالعجلة."],
        ["Tim", "Mit dem Fahrrad? Das ist so weit!", "بالعجلة؟ ده بعيد أوي!"],
        ["Sara", "Dann lauf jeden Morgen zehn Minuten. Und trink viel Wasser!", "طيب اجري كل يوم الصبح 10 دقايق. واشرب مية كتير!"]
      ], "Dein Freund ist immer müde. Gib ihm fünf Tipps im Imperativ.", "صاحبك دايمًا تعبان. إدّيله 5 نصايح بصيغة الأمر."),
      S("Einen Arzttermin machen", "حجز ميعاد عند الدكتور", [
        ["Praxis Dr. Klimke, guten Tag.", "عيادة دكتور كليمكه، نهارك سعيد."],
        ["Ich brauche bitte einen Termin.", "محتاج ميعاد لو سمحت."],
        ["Was fehlt Ihnen denn?", "بتشتكي من إيه؟"],
        ["Ich habe seit drei Tagen Bauchschmerzen.", "عندي مغص من 3 أيام."],
        ["Können Sie heute um 11 Uhr kommen?", "ممكن تيجي النهارده الساعة 11؟"],
        ["Ja, das geht.", "أيوه، ينفع."],
        ["Bringen Sie bitte Ihre Versichertenkarte mit.", "هات كارت التأمين معاك لو سمحت."],
        ["Bis später!", "أشوفك بعدين!"]
      ], [
        ["Praxis", "Praxis Dr. Klimke, guten Tag.", "عيادة دكتور كليمكه، نهارك سعيد."],
        ["Frau Pohn", "Guten Tag, hier ist Pohn. Ich brauche bitte einen Termin.", "نهارك سعيد، معاك بون. محتاجة ميعاد لو سمحتي."],
        ["Praxis", "Was fehlt Ihnen denn?", "بتشتكي من إيه؟"],
        ["Frau Pohn", "Ich hatte einen Unfall mit dem Fahrrad. Mein Knie tut sehr weh.", "عملت حادثة بالعجلة. ركبتي بتوجعني جدًا."],
        ["Praxis", "Können Sie heute um 11 Uhr kommen?", "ممكن تيجي النهارده الساعة 11؟"],
        ["Frau Pohn", "Ja, das geht. Vielen Dank!", "أيوه، ينفع. شكرًا جزيلًا!"]
      ], "Ruf in einer Arztpraxis an: Sag, was dir wehtut, und mach einen Termin.", "كلّم عيادة: قول إيه اللي بيوجعك واحجز ميعاد."),
      S("Beim Arzt", "عند الدكتور", [
        ["Was tut Ihnen weh?", "إيه اللي بيوجعك؟"],
        ["Mein Hals tut weh und ich habe Fieber.", "زوري بيوجعني وعندي سخونية."],
        ["Seit wann haben Sie die Schmerzen?", "الوجع ده من إمتى؟"],
        ["Legen Sie sich bitte hin.", "نام هنا لو سمحت."],
        ["Ich schreibe Ihnen ein Rezept.", "هكتبلك روشتة."],
        ["Wie oft muss ich die Tabletten nehmen?", "آخد الحبوب كام مرة؟"],
        ["Darf ich arbeiten gehen?", "ينفع أروح الشغل؟"],
        ["Gute Besserung!", "سلامتك!"]
      ], [
        ["Arzt", "Guten Tag, Herr Brandt. Was fehlt Ihnen?", "نهارك سعيد يا أستاذ برانت. بتشتكي من إيه؟"],
        ["Herr Brandt", "Ich habe Kopfschmerzen und Halsschmerzen, aber kein Fieber.", "عندي صداع ووجع زور، بس مفيش سخونية."],
        ["Arzt", "Seit wann haben Sie die Schmerzen?", "الوجع من إمتى؟"],
        ["Herr Brandt", "Seit gestern. Muss ich im Bett bleiben?", "من امبارح. لازم أفضل في السرير؟"],
        ["Arzt", "Nein, aber Sie dürfen zwei Tage nicht arbeiten. Trinken Sie viel Tee.", "لأ، بس ممنوع تشتغل يومين. اشرب شاي كتير."],
        ["Herr Brandt", "Danke, Herr Doktor.", "شكرًا يا دكتور."],
        ["Arzt", "Hier ist das Rezept für Halstabletten. Gute Besserung!", "دي الروشتة لأقراص الزور. سلامتك!"]
      ], "Spiel einen Arztbesuch: Sag deine Schmerzen, frag nach Medikamenten und was du (nicht) darfst.", "مثّل زيارة دكتور: قول وجعك، واسأل عن الأدوية وإيه المسموح والممنوع."),
      S("In der Apotheke", "في الصيدلية", [
        ["Ich habe ein Rezept vom Arzt.", "معايا روشتة من الدكتور."],
        ["Haben Sie etwas gegen Husten?", "عندكم حاجة للكحة؟"],
        ["Nehmen Sie dreimal täglich zehn Tropfen.", "خد 10 نقط 3 مرات في اليوم."],
        ["Vor oder nach dem Essen?", "قبل الأكل ولا بعده؟"],
        ["Ich brauche auch Pflaster.", "محتاج بلاستر كمان."],
        ["Das macht 12,50 Euro.", "الحساب 12.50 يورو."],
        ["Gibt es ein Hausmittel?", "فيه وصفة بلدي؟"],
        ["Danke für Ihre Hilfe!", "شكرًا على مساعدتك!"]
      ], [
        ["Apothekerin", "Guten Tag. Was kann ich für Sie tun?", "نهارك سعيد. أقدر أساعدك إزاي؟"],
        ["Herr Brandt", "Ich habe ein Rezept für Halstabletten. Und haben Sie auch etwas gegen Husten?", "معايا روشتة لأقراص زور. وعندكم حاجة للكحة كمان؟"],
        ["Apothekerin", "Ja, hier ist ein Hustensaft. Nehmen Sie ihn morgens und abends.", "أيوه، ده شراب كحة. خده الصبح وبالليل."],
        ["Herr Brandt", "Vor oder nach dem Essen?", "قبل الأكل ولا بعده؟"],
        ["Apothekerin", "Nach dem Essen. Das macht zusammen 12,50 Euro.", "بعد الأكل. الحساب كله 12.50 يورو."],
        ["Herr Brandt", "Hier, bitte. Danke für Ihre Hilfe!", "اتفضلي. شكرًا على مساعدتك!"]
      ], "Du bist in der Apotheke: Frag nach einem Medikament und wie du es nehmen musst.", "إنت في الصيدلية: اسأل عن دوا وإزاي تاخده.")
    ],

    /* ---------- Kapitel 9 ---------- */
    9: [
      S("Eine Wohnung suchen", "التدوير على شقة", [
        ["Wir suchen eine 3-Zimmer-Wohnung.", "بندوّر على شقة 3 أوض."],
        ["Die Wohnung soll ungefähr 80 Quadratmeter haben.", "الشقة تكون حوالي 80 متر."],
        ["Die Miete ist maximal 800 Euro.", "الإيجار بالكتير 800 يورو."],
        ["Gerne mit Balkon oder Terrasse.", "يا ريت ببلكونة أو تراس."],
        ["Ist die Wohnung noch frei?", "الشقة لسه فاضية؟"],
        ["Wie hoch ist die Miete?", "الإيجار كام؟"],
        ["Wann kann man die Wohnung besichtigen?", "ممكن نعاين الشقة إمتى؟"],
        ["Die Wohnung ist zu teuer für uns.", "الشقة غالية علينا أوي."]
      ], [
        ["Alex", "Guten Tag, ich rufe wegen der Wohnung an. Ist sie noch frei?", "نهارك سعيد، بكلّمك عشان الشقة. لسه فاضية؟"],
        ["Vermieterin", "Ja, die Wohnung ist noch frei.", "أيوه، الشقة لسه فاضية."],
        ["Alex", "Wie groß ist sie und wie hoch ist die Miete?", "مساحتها كام والإيجار كام؟"],
        ["Vermieterin", "Sie hat 80 Quadratmeter, drei Zimmer und einen Balkon. Die Miete ist 790 Euro.", "80 متر، 3 أوض وبلكونة. الإيجار 790 يورو."],
        ["Alex", "Super! Wann können wir die Wohnung besichtigen?", "ممتاز! نقدر نعاين الشقة إمتى؟"],
        ["Vermieterin", "Am Samstag um 10 Uhr?", "السبت الساعة 10؟"],
        ["Alex", "Ja, das passt. Vielen Dank!", "أيوه، مناسب. شكرًا جزيلًا!"]
      ], "Ruf wegen einer Wohnungsanzeige an: Frag nach Größe, Miete, Balkon und Besichtigungstermin.", "اتصل بخصوص إعلان شقة: اسأل عن المساحة والإيجار والبلكونة وميعاد المعاينة."),
      S("Die Möbel stellen", "ترتيب العفش", [
        ["Wohin stellen wir den Schrank?", "نحط الدولاب فين؟"],
        ["Ins Schlafzimmer.", "في أوضة النوم."],
        ["Stell den Computer bitte ins Arbeitszimmer!", "حط الكمبيوتر في أوضة المكتب لو سمحت!"],
        ["Den Fernseher stellen wir ins Wohnzimmer.", "التلفزيون هنحطه في الصالة."],
        ["Der Kühlschrank kommt in die Küche.", "التلاجة هتروح المطبخ."],
        ["Wir hängen das Bild an die Wand.", "هنعلّق الصورة على الحيطة."],
        ["Leg den Teppich vor das Sofa.", "حط السجادة قدام الكنبة."],
        ["Das sieht gut aus!", "شكله حلو!"]
      ], [
        ["Carla", "So, wohin stellen wir den Computer?", "طيب، نحط الكمبيوتر فين؟"],
        ["Alex", "Ins Arbeitszimmer natürlich.", "في أوضة المكتب طبعًا."],
        ["Carla", "Hm, ich möchte ihn lieber in die Küche stellen. Da koche ich und lese Rezepte.", "همم، أنا أفضّل أحطه في المطبخ. هناك بطبخ وبقرا وصفات."],
        ["Alex", "Na gut. Und die Lampe?", "ماشي. والأباجورة؟"],
        ["Carla", "Die stellen wir ins Wohnzimmer neben das Sofa.", "هنحطها في الصالة جنب الكنبة."],
        ["Alex", "Okay. Und das Bild hängen wir über den Fernseher.", "تمام. والصورة هنعلّقها فوق التلفزيون."]
      ], "Du ziehst um. Sag deinem Partner, wohin er die Möbel stellen soll (in + Akkusativ).", "إنت بتنقل. قول لزميلك يحط العفش فين (in + Akkusativ)."),
      S("Auf eine Einladung antworten", "الرد على دعوة", [
        ["Vielen Dank für die Einladung!", "شكرًا جزيلًا على الدعوة!"],
        ["Glückwunsch zur neuen Wohnung!", "مبروك على الشقة الجديدة!"],
        ["Ich komme sehr gern.", "هاجي بكل سرور."],
        ["Kann ich etwas mitbringen?", "أجيب حاجة معايا؟"],
        ["Ich bringe einen Kuchen mit, okay?", "هجيب كيكة، ماشي؟"],
        ["Kann meine Freundin mitkommen?", "ينفع صاحبتي تيجي معايا؟"],
        ["Es tut mir leid, aber ich muss am Samstag arbeiten.", "آسف، بس لازم أشتغل يوم السبت."],
        ["Viel Spaß und bis bald!", "انبسطوا وأشوفكم قريب!"]
      ], [
        ["Vanessa", "Hallo Carla! Danke für die Einladung. Glückwunsch zur neuen Wohnung!", "أهلا يا كارلا! شكرًا على الدعوة. مبروك على الشقة الجديدة!"],
        ["Carla", "Danke! Kommst du am Samstag?", "شكرًا! هتيجي يوم السبت؟"],
        ["Vanessa", "Ja, ich komme sehr gern. Wann beginnt die Feier?", "أيوه، هاجي بكل سرور. الحفلة الساعة كام؟"],
        ["Carla", "Um sieben. Die Adresse ist Hansastraße 11a.", "الساعة 7. العنوان شارع هانزا 11a."],
        ["Vanessa", "Kann ich etwas mitbringen? Vielleicht einen Salat?", "أجيب حاجة؟ يمكن سلطة؟"],
        ["Carla", "Oh ja, super! Bis Samstag!", "أوه أيوه، تحفة! أشوفك السبت!"]
      ], "Antworte auf eine Einladung: einmal zusagen, einmal absagen. Nenne einen Grund.", "رد على دعوة: مرة توافق ومرة تعتذر. قول السبب."),
      S("Eine Wohnung bewerten", "تقييم شقة", [
        ["Das Wohnzimmer ist ja super!", "الصالة تحفة!"],
        ["Die Terrasse ist wirklich toll.", "التراس حلو جدًا فعلًا."],
        ["Ich finde die Wohnung echt gemütlich.", "شايف الشقة مريحة جدًا."],
        ["Das Bild sieht schön aus.", "الصورة شكلها حلو."],
        ["Ich finde die Lampe hässlich.", "شايف الأباجورة وحشة."],
        ["Der Tisch ist nicht mehr schön.", "الترابيزة مبقتش حلوة."],
        ["Ich mag die Farbe nicht besonders.", "اللون مش عاجبني أوي."],
        ["Der rote Sessel gefällt mir.", "الفوتيه الأحمر عاجبني."]
      ], [
        ["Vanessa", "Wow, das Wohnzimmer ist ja super!", "واو، الصالة تحفة!"],
        ["Carla", "Danke! Wie findest du die Lampe? Sie ist neu.", "شكرًا! إيه رأيك في الأباجورة؟ جديدة."],
        ["Vanessa", "Hm, sie ist nicht langweilig, aber ich finde sie ein bisschen hässlich.", "همم، مش مملة، بس شايفاها وحشة شوية."],
        ["Carla", "Ach, schade! Und das Bild über dem Fernseher?", "يا خسارة! والصورة اللي فوق التلفزيون؟"],
        ["Vanessa", "Das sieht schön aus. Und die Terrasse ist wirklich toll!", "دي شكلها حلو. والتراس تحفة فعلًا!"],
        ["Carla", "Ja, da sitzen wir im Sommer jeden Abend.", "أيوه، بنقعد فيه كل ليلة في الصيف."]
      ], "Zeig ein Foto von einem Zimmer. Dein Partner sagt, was ihm gefällt und was nicht.", "وري صورة أوضة. زميلك يقول إيه اللي عاجبه وإيه اللي لأ."),
      S("Wo ist …? Dinge suchen", "فين …؟ التدوير على حاجات", [
        ["Wo ist mein Handy?", "موبايلي فين؟"],
        ["Es liegt auf dem Tisch.", "على الترابيزة."],
        ["Der Schlüssel liegt unter der Zeitung.", "المفتاح تحت الجرنال."],
        ["Die Tasche steht neben der Tür.", "الشنطة جنب الباب."],
        ["Die Jacke hängt hinter der Tür.", "الجاكيت متعلّق ورا الباب."],
        ["Die Bücher stehen im Regal.", "الكتب في الرف."],
        ["Die Katze sitzt zwischen den Kissen.", "القطة قاعدة بين المخدّات."],
        ["Ich habe es gefunden!", "لقيته!"]
      ], [
        ["Luca", "Anna, wo ist mein Schlüssel?", "يا آنا، مفتاحي فين؟"],
        ["Anna", "Liegt er nicht auf dem Tisch im Flur?", "مش على الترابيزة في الطرقة؟"],
        ["Luca", "Nein, da liegt er nicht. Und meine Tasche finde ich auch nicht!", "لأ، مش هناك. وشنطتي كمان مش لاقيها!"],
        ["Anna", "Die Tasche steht neben dem Sofa im Wohnzimmer.", "الشنطة جنب الكنبة في الصالة."],
        ["Luca", "Ah ja, danke! … Oh, der Schlüssel ist in der Tasche!", "آه صح، شكرًا! … أوه، المفتاح في الشنطة!"],
        ["Anna", "Na super! Jetzt aber schnell, der Bus kommt gleich.", "يا سلام! يلا بسرعة بقى، الأتوبيس جاي."]
      ], "Versteck einen Gegenstand im Kursraum. Dein Partner fragt: Ist er unter/auf/neben …?", "خبّي حاجة في الفصل. زميلك يسأل: هي تحت/على/جنب …؟")
    ],

    /* ---------- Kapitel 10 ---------- */
    10: [
      S("Über den Beruf sprechen", "الكلام عن المهنة", [
        ["Was sind Sie von Beruf?", "حضرتك بتشتغل إيه؟"],
        ["Ich bin Erzieherin. Ich betreue Kinder.", "أنا مربّية أطفال. براعي العيال."],
        ["Die Arbeit macht viel Spaß.", "الشغل ممتع جدًا."],
        ["Ich arbeite gern mit Menschen.", "بحب أشتغل مع الناس."],
        ["Die Arbeit ist anstrengend, aber interessant.", "الشغل مُتعِب بس ممتع."],
        ["Ich verdiene nicht so viel Geld.", "مش بكسب فلوس كتير."],
        ["Ein Vorteil: Ich bin immer draußen.", "ميزة: أنا دايمًا بره."],
        ["Ein Nachteil: Ich arbeite oft am Wochenende.", "عيب: بشتغل غالبًا في الويك إند."]
      ], [
        ["Moderatorin", "Frau Wimmer, was sind Sie von Beruf?", "أستاذة فيمر، حضرتك بتشتغلي إيه؟"],
        ["Julia", "Ich bin Segellehrerin am Bodensee.", "أنا مدرّبة إبحار شراعي في بحيرة بودن."],
        ["Moderatorin", "Was finden Sie gut an Ihrem Beruf?", "إيه اللي عاجبك في شغلك؟"],
        ["Julia", "Ich bin immer draußen und arbeite mit netten Menschen.", "أنا دايمًا بره وبشتغل مع ناس لطاف."],
        ["Moderatorin", "Und gibt es auch Nachteile?", "وفيه عيوب كمان؟"],
        ["Julia", "Ja, im Winter habe ich keine Arbeit und verdiene nichts.", "أيوه، في الشتا مبيبقاش عندي شغل ومبكسبش حاجة."]
      ], "Interviewe deinen Partner: Beruf, Vorteile, Nachteile, was ist wichtig?", "اعمل مقابلة مع زميلك: المهنة، المميزات، العيوب، وإيه المهم؟"),
      S("Was hast du heute gemacht?", "عملت إيه النهارده؟", [
        ["Wie war dein Tag?", "يومك كان عامل إزاي؟"],
        ["Na ja, es geht.", "يعني، ماشي."],
        ["Ich war schon um halb neun an der Uni.", "كنت في الجامعة من 8 ونص."],
        ["Ich habe sechs Stunden gelernt.", "ذاكرت 6 ساعات."],
        ["Hast du keine Pause gemacht?", "مخدتش استراحة؟"],
        ["Ich habe schnell eine Pizza geholt.", "جبت بيتزا بسرعة."],
        ["Echt fleißig!", "مجتهد بجد!"],
        ["Machst du jetzt Feierabend?", "هتخلّص اليوم دلوقتي؟"]
      ], [
        ["Tina", "Hey Daniel, wie war dein Tag?", "أهلا يا دانيال، يومك كان عامل إزاي؟"],
        ["Daniel", "Na ja, es geht. Ich war im Seminar. Es war total langweilig.", "يعني، ماشي. كنت في السيمينار. كان ممل جدًا."],
        ["Tina", "Oh, das kenne ich! Und dann?", "أوه، أنا عارفة الإحساس ده! وبعدين؟"],
        ["Daniel", "Dann habe ich mit Max die Präsentation geplant und sechs Stunden gelernt.", "بعدين خططت مع ماكس للعرض التقديمي وذاكرت 6 ساعات."],
        ["Tina", "Echt fleißig! Hast du keine Pause gemacht?", "مجتهد بجد! مخدتش استراحة؟"],
        ["Daniel", "Doch, ich habe eine Pizza geholt. Jetzt mache ich Feierabend!", "لأ خدت، جبت بيتزا. دلوقتي هخلّص اليوم!"]
      ], "Erzähl deinem Partner im Perfekt: Was hast du heute oder gestern gemacht?", "احكي لزميلك بالـ Perfekt: عملت إيه النهارده أو امبارح؟"),
      S("Von früher erzählen", "الحكي عن زمان", [
        ["Wo bist du zur Schule gegangen?", "رحت المدرسة فين؟"],
        ["Ich bin in Kairo zur Schule gegangen.", "رحت المدرسة في القاهرة."],
        ["Was hast du studiert?", "درست إيه؟"],
        ["Ich habe Wirtschaft studiert.", "درست اقتصاد."],
        ["Wann bist du nach Deutschland gekommen?", "جيت ألمانيا إمتى؟"],
        ["Vor zwei Jahren bin ich nach Deutschland gekommen.", "جيت ألمانيا من سنتين."],
        ["Wo hast du letztes Jahr gearbeitet?", "اشتغلت فين السنة اللي فاتت؟"],
        ["Ich bin ein Jahr in Spanien geblieben.", "قعدت سنة في إسبانيا."]
      ], [
        ["Elio", "Mona, wo bist du zur Schule gegangen?", "يا منى، رحتي المدرسة فين؟"],
        ["Mona", "In Alexandria. Danach habe ich in Kairo studiert.", "في إسكندرية. بعدها درست في القاهرة."],
        ["Elio", "Was hast du studiert?", "درستي إيه؟"],
        ["Mona", "Architektur. Dann bin ich vor drei Jahren nach München gekommen.", "عمارة. بعدين جيت ميونخ من 3 سنين."],
        ["Elio", "Und wie hast du deine Stelle gefunden?", "ولقيتي شغلك إزاي؟"],
        ["Mona", "Ich habe eine Anzeige im Internet gelesen und gleich meine Bewerbung geschickt.", "قريت إعلان على النت وبعتّ طلبي على طول."]
      ], "Frag drei Personen im Kurs: Wo bist du zur Schule gegangen? Wann bist du gekommen? Was hast du gemacht?", "اسأل 3 أشخاص في الكورس: رحت المدرسة فين؟ جيت إمتى؟ عملت إيه؟"),
      S("Bei einer Firma anrufen", "الاتصال بشركة", [
        ["Firma Hölke, Sie sprechen mit Tom Müller.", "شركة هولكه، معاك توم مولر."],
        ["Guten Tag, hier ist Claudia Lange.", "نهارك سعيد، معاك كلاوديا لانجه."],
        ["Ich habe eine Frage zu Ihrer Anzeige.", "عندي سؤال عن إعلانكم."],
        ["Können Sie mich mit Frau Selmicz verbinden?", "ممكن توصّلني بالسيدة سلميتش؟"],
        ["Frau Selmicz ist heute leider nicht da.", "السيدة سلميتش للأسف مش موجودة النهارده."],
        ["Können Sie morgen noch einmal anrufen?", "ممكن تتصلي تاني بكرة؟"],
        ["Können Sie den Namen bitte buchstabieren?", "ممكن تهجّي الاسم لو سمحت؟"],
        ["Vielen Dank. Auf Wiederhören!", "شكرًا جزيلًا. مع السلامة!"]
      ], [
        ["Tom Müller", "Firma Hölke, Sie sprechen mit Tom Müller.", "شركة هولكه، معاك توم مولر."],
        ["Claudia Lange", "Guten Tag, hier ist Claudia Lange. Sie suchen eine Sekretärin. Ich habe eine Frage zu der Anzeige.", "نهارك سعيد، معاك كلاوديا لانجه. حضراتكم بتدوّروا على سكرتيرة. عندي سؤال عن الإعلان."],
        ["Tom Müller", "Tut mir leid, da kann ich Ihnen nicht helfen. Sie müssen mit Frau Selmicz sprechen.", "آسف، مقدرش أساعدك في ده. لازم تكلّمي السيدة سلميتش."],
        ["Claudia Lange", "Entschuldigung, das habe ich nicht verstanden. Können Sie den Namen bitte wiederholen?", "عفوًا، مفهمتش. ممكن تعيد الاسم لو سمحت؟"],
        ["Tom Müller", "Selmicz: S-E-L-M-I-C-Z. Sie ist heute leider nicht da. Können Sie morgen anrufen?", "سلميتش: S-E-L-M-I-C-Z. للأسف مش موجودة النهارده. ممكن تتصلي بكرة؟"],
        ["Claudia Lange", "Ja, natürlich. Können Sie mir die Durchwahl von Frau Selmicz geben?", "أيوه طبعًا. ممكن تديني الرقم الداخلي بتاعها؟"],
        ["Tom Müller", "Das ist die 214. Auf Wiederhören!", "214. مع السلامة!"]
      ], "Ruf bei einer Firma oder Sprachschule an: Melde dich, frag nach einer Person, frag nach und verabschiede dich.", "اتصل بشركة أو مدرسة لغات: عرّف بنفسك، اسأل عن حد، استفسر، وودّع."),
      S("Einen Saison-Job suchen", "التدوير على شغل موسمي", [
        ["Ich suche einen Job für den Sommer.", "بدوّر على شغل للصيف."],
        ["Auf dem Oktoberfest arbeiten jedes Jahr 13.000 Menschen.", "في مهرجان أكتوبر بيشتغل 13,000 واحد كل سنة."],
        ["Ich habe als Kellnerin gearbeitet.", "اشتغلت جرسونة."],
        ["Der Job ist anstrengend, aber ich verdiene viel.", "الشغل مُتعِب بس بكسب كويس."],
        ["Die Arbeit macht Spaß, aber ich bekomme nicht viel Geld.", "الشغل ممتع بس مش باخد فلوس كتير."],
        ["Wann beginnt die Arbeit?", "الشغل بيبدأ إمتى؟"],
        ["Wie lange dauert der Job?", "الشغل مدته قد إيه؟"],
        ["Haben Sie schon Erfahrung?", "عندك خبرة؟"]
      ], [
        ["Chef", "Guten Tag! Sie möchten auf dem Weihnachtsmarkt arbeiten?", "نهارك سعيد! عايز تشتغل في سوق الكريسماس؟"],
        ["Paul", "Ja, ich suche einen Job für den Dezember.", "أيوه، بدوّر على شغل لشهر ديسمبر."],
        ["Chef", "Haben Sie schon Erfahrung als Verkäufer?", "عندك خبرة كبيّاع؟"],
        ["Paul", "Ja, letztes Jahr habe ich in einer Bäckerei gearbeitet.", "أيوه، السنة اللي فاتت اشتغلت في مخبز."],
        ["Chef", "Sehr gut. Der Markt ist täglich von 10 bis 21 Uhr geöffnet. Das ist anstrengend!", "كويس جدًا. السوق فاتح كل يوم من 10 لـ 9 بالليل. ده مُتعِب!"],
        ["Paul", "Kein Problem. Wann kann ich anfangen?", "مفيش مشكلة. أقدر أبدأ إمتى؟"]
      ], "Erzähl von einem Saison-Job oder einem interessanten Job in deinem Land.", "احكي عن شغل موسمي أو شغل مثير للاهتمام في بلدك.")
    ],

    /* ---------- Kapitel 11 ---------- */
    11: [
      S("Was ziehe ich an?", "ألبس إيه؟", [
        ["Was ziehe ich nur an?", "ألبس إيه بس؟"],
        ["Zieh doch das blaue Hemd an!", "البس القميص الأزرق!"],
        ["Das T-Shirt ist viel zu weit.", "التي شيرت واسع أوي."],
        ["Die Hose ist zu eng.", "البنطلون ضيّق أوي."],
        ["Bei der Arbeit trage ich einen Anzug.", "في الشغل بلبس بدلة."],
        ["Am Wochenende trage ich Jeans und Pullover.", "في الويك إند بلبس جينز وبلوفر."],
        ["Auf einer Hochzeit trage ich ein Kleid.", "في الفرح بلبس فستان."],
        ["Ich muss einkaufen!", "لازم أنزل أشتري!"]
      ], [
        ["Max", "Hilfe! Ich gehe heute Abend auf eine Party. Was ziehe ich an?", "النجدة! رايح حفلة النهارده بالليل. ألبس إيه؟"],
        ["Luca", "Zieh doch das schwarze T-Shirt an.", "البس التي شيرت الأسود."],
        ["Max", "Das ist doof und viel zu lang.", "ده سخيف وطويل أوي."],
        ["Luca", "Und das blaue Hemd?", "والقميص الأزرق؟"],
        ["Max", "Hm, das ist ein bisschen eng. Und die Jeans?", "همم، ده ضيّق شوية. والجينز؟"],
        ["Luca", "Die Jeans und das Hemd – perfekt! Du siehst toll aus!", "الجينز والقميص – ممتاز! شكلك حلو أوي!"]
      ], "Was trägst du bei der Arbeit, am Wochenende und auf einer Party? Erzähl.", "بتلبس إيه في الشغل وفي الويك إند وفي الحفلات؟ احكي."),
      S("Welcher? – Dieser!", "أنهي؟ – ده!", [
        ["Sieh mal, der Mantel ist doch toll, oder?", "بص، البالطو ده تحفة، مش كده؟"],
        ["Welcher Mantel? – Na, dieser hier.", "أنهي بالطو؟ – ده اللي هنا."],
        ["Findest du? Ich finde diese Jacke viel besser.", "شايف كده؟ أنا شايف الجاكيت ده أحسن بكتير."],
        ["Welche Schuhe meinst du? – Diese.", "تقصد أنهي جزمة؟ – دي."],
        ["Welches Kleid gefällt dir?", "أنهي فستان عاجبك؟"],
        ["Dieses Kleid ist zu teuer.", "الفستان ده غالي أوي."],
        ["Wie findest du diesen Hut?", "إيه رأيك في البرنيطة دي؟"],
        ["Quatsch! Der ist super!", "كلام فاضي! دي تحفة!"]
      ], [
        ["Jana", "Sieh mal, der Mantel ist doch toll, oder?", "بص، البالطو ده تحفة، مش كده؟"],
        ["Andreas", "Welcher Mantel?", "أنهي بالطو؟"],
        ["Jana", "Na, dieser hier. Der graue.", "ده اللي هنا. الرمادي."],
        ["Andreas", "Findest du? Also, ich finde diese Jacke hier viel besser.", "شايفة كده؟ أنا شايف الجاكيت ده أحسن بكتير."],
        ["Jana", "Welche Jacke meinst du? Diese?! Die ist doch langweilig.", "تقصد أنهي جاكيت؟ ده؟! ده ممل."],
        ["Andreas", "Quatsch! Und wie findest du diesen Hut?", "كلام فاضي! وإيه رأيك في البرنيطة دي؟"]
      ], "Zeig auf Kleidung im Kurs oder auf Fotos: Frag mit welcher? und antworte mit dieser.", "شاور على لبس في الفصل أو في صور: اسأل بـ welcher؟ وجاوب بـ dieser."),
      S("Kleidung kaufen", "شراء هدوم", [
        ["Kann ich Ihnen helfen?", "أقدر أساعد حضرتك؟"],
        ["Ja, bitte. Ich suche eine Jacke.", "أيوه لو سمحت. بدوّر على جاكيت."],
        ["Welche Größe brauchen Sie?", "مقاس حضرتك كام؟"],
        ["Haben Sie die auch in Schwarz?", "عندك منه أسود؟"],
        ["Kann ich die Jacke anprobieren?", "ممكن أقيس الجاكيت؟"],
        ["Passt Ihnen die Jacke?", "الجاكيت مقاسك؟"],
        ["Nein, sie ist zu klein.", "لأ، صغير."],
        ["Was kostet die Jacke? – Dann nehme ich sie.", "الجاكيت بكام؟ – طيب هاخده."]
      ], [
        ["Verkäufer", "Guten Tag! Kann ich Ihnen helfen?", "نهارك سعيد! أقدر أساعد حضرتك؟"],
        ["Frau Ali", "Ja, bitte. Ich suche eine Bluse. Größe 38.", "أيوه لو سمحت. بدوّر على بلوزة. مقاس 38."],
        ["Verkäufer", "Wie gefällt Ihnen diese Bluse hier?", "إيه رأيك في البلوزة دي؟"],
        ["Frau Ali", "Sie gefällt mir. Haben Sie die auch in Weiß?", "عاجباني. عندك منها أبيض؟"],
        ["Verkäufer", "Einen Moment, bitte … Ja, hier. Die Umkleidekabine ist dort hinten.", "لحظة من فضلك … أيوه، اتفضلي. البروفة هناك ورا."],
        ["Frau Ali", "Danke … Sie passt perfekt! Was kostet sie?", "شكرًا … مظبوطة تمامًا! بكام؟"],
        ["Verkäufer", "29,90 Euro. Sie steht Ihnen sehr gut!", "29.90 يورو. لايقة عليكي جدًا!"]
      ], "Spiel ein Gespräch im Kleidergeschäft: Größe, Farbe, anprobieren, Preis.", "مثّل حوار في محل هدوم: المقاس، اللون، القياس، السعر."),
      S("Online gekauft – und dann?", "اشتريت أونلاين – وبعدين؟", [
        ["Ich habe die Sachen im Internet bestellt.", "طلبت الحاجات من النت."],
        ["Der Hut ist heute angekommen.", "البرنيطة وصلت النهارده."],
        ["Die Hose hat nicht gepasst.", "البنطلون مكانش مقاسي."],
        ["Ich habe alles zurückgeschickt.", "رجّعت كل حاجة."],
        ["Ich habe die Schuhe umgetauscht.", "بدّلت الجزمة."],
        ["Das nervt!", "ده بيضايق!"],
        ["Wo hast du das T-Shirt entdeckt?", "لقيت التي شيرت ده فين؟"],
        ["Hast du viel bezahlt?", "دفعت كتير؟"]
      ], [
        ["Timo", "Cooles T-Shirt! Wo hast du es entdeckt?", "تي شيرت روش! لقيته فين؟"],
        ["Andreas", "Jana hat es gefunden und mir empfohlen. Ich habe es online bestellt.", "يانا لقيته ونصحتني بيه. طلبته أونلاين."],
        ["Timo", "Hast du viel bezahlt?", "دفعت كتير؟"],
        ["Andreas", "Nein, nur 19 Euro. Und den Hut habe ich auch bestellt.", "لأ، 19 يورو بس. والبرنيطة كمان طلبتها."],
        ["Susi", "Ich habe auch schon online Klamotten gekauft, aber sie haben nicht gepasst.", "أنا كمان اشتريت هدوم أونلاين، بس مكانتش مقاسي."],
        ["Andreas", "Und dann?", "وبعدين؟"],
        ["Susi", "Ich habe alles zurückgeschickt. Das nervt!", "رجّعت كل حاجة. ده بيضايق!"]
      ], "Erzähl im Perfekt: Was hast du zuletzt gekauft? Online oder im Geschäft? Hat es gepasst?", "احكي بالـ Perfekt: آخر حاجة اشتريتها إيه؟ أونلاين ولا من محل؟ كانت مقاسك؟"),
      S("Im Kaufhaus nach dem Weg fragen", "السؤال عن الأماكن في المول", [
        ["Entschuldigung, wo finde ich Taschen?", "عفوًا، ألاقي الشنط فين؟"],
        ["Wo gibt es hier Kosmetik?", "مستحضرات التجميل فين هنا؟"],
        ["Ich suche ein Geschenk für meinen Vater.", "بدوّر على هدية لبابا."],
        ["Das gibt es im dritten Stock.", "ده في الدور التالت."],
        ["Elektrogeräte finden Sie im Untergeschoss.", "الأجهزة الكهربائية هتلاقيها في البدروم."],
        ["Der Aufzug ist dort rechts.", "الأسانسير هناك على اليمين."],
        ["Tut mir leid, das haben wir nicht.", "آسف، مش عندنا."],
        ["Ich danke Ihnen.", "متشكر جدًا."]
      ], [
        ["Frau Wagner", "Entschuldigung, wo finde ich Kameras?", "عفوًا، ألاقي الكاميرات فين؟"],
        ["Mitarbeiter", "Kameras und Fotozubehör gibt es im vierten Stock.", "الكاميرات وإكسسوارات التصوير في الدور الرابع."],
        ["Frau Wagner", "Danke. Und wo gibt es Parfüm?", "شكرًا. والبرفانات فين؟"],
        ["Mitarbeiter", "Parfüm und Kosmetik finden Sie im Erdgeschoss, gleich hier links.", "البرفانات ومستحضرات التجميل في الدور الأرضي، هنا على الشمال على طول."],
        ["Frau Wagner", "Und haben Sie auch USB-Sticks?", "وعندكم فلاشات كمان؟"],
        ["Mitarbeiter", "Ja, die gibt es auch im vierten Stock bei den Elektrogeräten.", "أيوه، دي كمان في الدور الرابع عند الأجهزة الكهربائية."],
        ["Frau Wagner", "Ich danke Ihnen!", "متشكرة جدًا!"]
      ], "Du suchst drei Dinge im Kaufhaus. Frag nach dem Stock und antworte.", "بتدوّر على 3 حاجات في المول. اسأل عن الدور وجاوب.")
    ],

    /* ---------- Kapitel 12 ---------- */
    12: [
      S("Den Koffer packen", "تحضير الشنطة", [
        ["Ich fahre in Urlaub und packe eine Hose ein.", "مسافر إجازة وهحط بنطلون في الشنطة."],
        ["Nimmst du einen Pullover mit?", "هتاخد بلوفر معاك؟"],
        ["Am Morgen ist es noch kalt.", "الصبح لسه برد."],
        ["Vergiss die Sonnencreme nicht!", "متنساش كريم الشمس!"],
        ["Du darfst nicht so viel mitnehmen.", "مينفعش تاخد حاجات كتير كده."],
        ["Die Tasche geht nicht zu.", "الشنطة مش بتتقفل."],
        ["Kannst du mir helfen?", "ممكن تساعدني؟"],
        ["Gleich bin ich fertig.", "هخلّص حالًا."]
      ], [
        ["Johannes", "Ich bin fertig. Und du?", "أنا خلصت. وإنتي؟"],
        ["Katharina", "Gleich! Warte, die Tasche ist zu klein.", "حالًا! استنّى، الشنطة صغيرة."],
        ["Johannes", "Zu klein? Du nimmst zwei Pullover und drei Hosen mit – das ist echt zu viel!", "صغيرة؟ إنتي واخدة بلوفرين و3 بناطيل – ده كتير بجد!"],
        ["Katharina", "Aber am Morgen ist es noch kalt. Da brauche ich einen Pullover.", "بس الصبح لسه برد. محتاجة بلوفر."],
        ["Johannes", "Okay, okay. Hast du die Sonnencreme?", "ماشي ماشي. خدتي كريم الشمس؟"],
        ["Katharina", "Ja. Aber die Tasche geht nicht zu. Kannst du mir helfen?", "أيوه. بس الشنطة مش بتتقفل. ممكن تساعدني؟"]
      ], "Spielt „Kofferpacken“: Jede Person sagt alle Dinge davor und ein neues Ding.", "العبوا «تحضير الشنطة»: كل واحد يقول كل الحاجات اللي قبله وحاجة جديدة."),
      S("Im Hotel einchecken", "تسجيل الدخول في الفندق", [
        ["Ich habe ein Doppelzimmer reserviert.", "حاجز أوضة دبل."],
        ["Auf welchen Namen?", "باسم مين؟"],
        ["Kann ich bitte Ihren Ausweis sehen?", "ممكن أشوف البطاقة لو سمحت؟"],
        ["Füllen Sie bitte die Anmeldung aus.", "املا استمارة التسجيل لو سمحت."],
        ["Wann gibt es Frühstück?", "الفطار إمتى؟"],
        ["Hier ist Ihr Schlüssel. Zimmer 205.", "ده مفتاحك. أوضة 205."],
        ["Gibt es WLAN im Zimmer?", "فيه واي فاي في الأوضة؟"],
        ["Kann ich mit Karte zahlen?", "ينفع أدفع بالكارت؟"]
      ], [
        ["Rezeption", "Guten Tag! Willkommen im Hotel Basilisk.", "نهارك سعيد! أهلا بيكم في فندق بازيليسك."],
        ["Johannes", "Guten Tag. Wir haben ein Doppelzimmer für drei Nächte reserviert.", "نهارك سعيد. حاجزين أوضة دبل لتلات ليالي."],
        ["Rezeption", "Auf welchen Namen, bitte?", "باسم مين لو سمحت؟"],
        ["Johannes", "Auf Bauer. Johannes Bauer.", "باسم باور. يوهانس باور."],
        ["Rezeption", "Ja, hier. Kann ich bitte Ihren Ausweis sehen?", "أيوه، أهو. ممكن أشوف البطاقة لو سمحت؟"],
        ["Johannes", "Hier, bitte. Wann gibt es Frühstück?", "اتفضلي. الفطار إمتى؟"],
        ["Rezeption", "Von 7 bis 10 Uhr. Hier ist Ihr Schlüssel, Zimmer 205.", "من 7 لـ 10. ده مفتاحك، أوضة 205."]
      ], "Du kommst im Hotel an: Sag deinen Namen, frag nach Frühstück, WLAN und Bezahlung.", "إنت وصلت الفندق: قول اسمك، واسأل عن الفطار والواي فاي والدفع."),
      S("Eine Stadttour planen", "التخطيط لجولة في المدينة", [
        ["Was kann man hier machen?", "الواحد يقدر يعمل إيه هنا؟"],
        ["Man kann in der Altstadt spazieren gehen.", "ممكن تتمشّى في البلد القديمة."],
        ["Man kann Museen besichtigen.", "ممكن تزور متاحف."],
        ["Zuerst machen wir eine Stadttour mit der Tram.", "الأول هنعمل جولة بالترام."],
        ["Dann gehen wir ins Museum.", "بعدين هنروح المتحف."],
        ["Danach essen wir im Restaurant.", "بعد كده هناكل في مطعم."],
        ["Zum Schluss gehen wir in einen Club.", "في الآخر هنروح نادي ليلي."],
        ["Das klingt super!", "ده يبان تحفة!"]
      ], [
        ["Katharina", "Entschuldigung, was kann man in Basel machen?", "عفوًا، الواحد يقدر يعمل إيه في بازل؟"],
        ["Rezeption", "Man kann in der Altstadt spazieren gehen oder eine Stadttour mit der Oldtimer-Tram machen.", "ممكن تتمشّي في البلد القديمة أو تعملي جولة بالترام القديم."],
        ["Johannes", "Und gibt es auch gute Museen?", "وفيه متاحف حلوة كمان؟"],
        ["Rezeption", "Ja, das Vitra Design Museum ist sehr bekannt.", "أيوه، متحف فيترا للتصميم مشهور جدًا."],
        ["Katharina", "Super! Zuerst machen wir die Stadttour, dann gehen wir ins Museum.", "تمام! الأول هنعمل الجولة، بعدين نروح المتحف."],
        ["Johannes", "Und danach essen wir im Restaurant Löwenzorn!", "وبعدها ناكل في مطعم لوفنتسورن!"]
      ], "Plane einen Tag in deiner Stadt: Was kann man machen? Benutze man, zuerst, dann, danach, zum Schluss.", "خطط ليوم في مدينتك: الواحد يقدر يعمل إيه؟ استخدم man وzuerst وdann وdanach وzum Schluss."),
      S("Nach dem Weg fragen", "السؤال عن الطريق", [
        ["Wie komme ich zum Museum?", "أروح المتحف إزاي؟"],
        ["Zum Museum fährt man mit der Tram Nummer 8.", "للمتحف بتركب ترام رقم 8."],
        ["Man steigt am Bahnhof ein.", "بتركب من المحطة."],
        ["Am Marktplatz steigt man um.", "في ميدان السوق بتغيّر."],
        ["Dann nimmt man den Bus Nummer 30.", "بعدين بتركب أتوبيس رقم 30."],
        ["Das Museum ist an der Haltestelle Rathaus.", "المتحف عند محطة البلدية."],
        ["Wie lange dauert die Fahrt?", "المشوار بياخد قد إيه؟"],
        ["Die S-Bahn fährt alle zehn Minuten.", "قطار الضواحي بييجي كل 10 دقايق."]
      ], [
        ["Tourist", "Entschuldigung, wie komme ich zum Zoo?", "عفوًا، أروح جنينة الحيوانات إزاي؟"],
        ["Frau", "Fahren Sie mit der Tram Nummer 2. Sie steigt hier am Bahnhof ein.", "اركب ترام رقم 2. هتركبه هنا من المحطة."],
        ["Tourist", "Muss ich umsteigen?", "لازم أغيّر؟"],
        ["Frau", "Ja, am Barfüßerplatz steigen Sie in die Tram Nummer 10 um.", "أيوه، في ميدان بارفوسر هتغيّر لترام رقم 10."],
        ["Tourist", "Und wo steige ich aus?", "وأنزل فين؟"],
        ["Frau", "An der Haltestelle Zoo. Die Fahrt dauert ungefähr 15 Minuten.", "عند محطة الزو. المشوار حوالي 15 دقيقة."],
        ["Tourist", "Vielen Dank!", "شكرًا جزيلًا!"]
      ], "Beschreibe den Weg von deiner Sprachschule zu einer Sehenswürdigkeit mit Bus oder Bahn.", "اوصف الطريق من مدرسة اللغة لمَعلَم سياحي بالأتوبيس أو القطر."),
      S("Über eine Reise und das Wetter erzählen", "الحكي عن رحلة والطقس", [
        ["Wie war dein Urlaub?", "إجازتك كانت عاملة إزاي؟"],
        ["Wo warst du? – Ich war in Salzburg.", "كنت فين؟ – كنت في سالزبورج."],
        ["Mit wem bist du gefahren?", "سافرت مع مين؟"],
        ["Wir haben in einer Pension übernachtet.", "نمنا في بنسيون."],
        ["Das Wetter war wunderbar: sonnig und warm.", "الجو كان رائع: مشمس ودافي."],
        ["Leider hat es zwei Tage geregnet.", "للأسف مطّرت يومين."],
        ["Es war 4 Grad minus und es hat geschneit.", "كانت 4 تحت الصفر وكانت بتتلّج."],
        ["Wir waren total müde, aber glücklich.", "كنا تعبانين جدًا بس مبسوطين."]
      ], [
        ["Bea", "Hallo Max! Wie war euer Urlaub auf dem Bauernhof?", "أهلا يا ماكس! إجازتكم في المزرعة كانت عاملة إزاي؟"],
        ["Max", "Am Anfang ziemlich langweilig. Aber dann war es richtig schön!", "في الأول مملة شوية. بس بعدين بقت حلوة فعلًا!"],
        ["Bea", "Und wie war das Wetter?", "والجو كان عامل إزاي؟"],
        ["Max", "Sonnig und warm, nur am Sonntag hat es geregnet. Und du? Wo warst du?", "مشمس ودافي، بس يوم الحد مطّرت. وإنتي؟ كنتي فين؟"],
        ["Bea", "Ich war in Bremen. Ich habe das Rathaus besucht und an der Weser gesessen.", "كنت في بريمن. زرت البلدية وقعدت على نهر الفيزر."],
        ["Max", "Toll! Bremen ist wirklich schön.", "تحفة! بريمن حلوة فعلًا."]
      ], "Erzähl von einer Reise: Wann? Wohin? Mit wem? Wie war das Wetter? Was ist passiert?", "احكي عن سفرية: إمتى؟ فين؟ مع مين؟ الجو كان عامل إزاي؟ إيه اللي حصل؟")
    ]
  };

  window.A1_CONVERSATIONS = Object.assign(window.A1_CONVERSATIONS || {}, conversations);
  if (!Array.isArray(window.A1_BOOK)) return;
  window.A1_BOOK.forEach(chapter => {
    const situations = conversations[chapter.num];
    if (!situations || chapter.num < 7) return;
    chapter.conversations = situations;
    chapter.redemittel = chapter.redemittel || [];
    situations.forEach(item => {
      if (chapter.redemittel.some(group => group.cat === item.situation)) return;
      chapter.redemittel.push({ cat: item.situation, catAr: item.situationAr, items: item.phrases });
    });
  });
})();
