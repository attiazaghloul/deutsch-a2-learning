/* A1.1 conversation situations: for every chapter five everyday situations with
   ready-to-use sentences, a short model dialogue and a speaking task. Loaded after
   data_a11_lessons.js; the sentences are also merged into each chapter's Redemittel so
   the phrase library and the games use them. */
(function () {
  const S = (situation, situationAr, phrases, lines, task, taskAr) => ({
    situation, situationAr,
    phrases: phrases.map(([de, ar]) => ({ de, ar })),
    dialogue: lines.map(([s, de, ar]) => ({ s, de, ar })),
    task, taskAr
  });

  window.A1_CONVERSATIONS = {
    /* ---------- Kapitel 1 ---------- */
    1: [
      S("Sich im Deutschkurs vorstellen", "تعرّف بنفسك في كورس الألماني", [
        ["Hallo, ich bin Amira.", "أهلا، أنا أميرة."],
        ["Ich heiße Amira Hassan.", "اسمي أميرة حسن."],
        ["Ich komme aus Ägypten, aus Kairo.", "أنا من مصر، من القاهرة."],
        ["Ich wohne jetzt in Hamburg.", "أنا ساكنة دلوقتي في هامبورغ."],
        ["Ich spreche Arabisch und Englisch.", "باتكلم عربي وإنجليزي."],
        ["Ich lerne Deutsch.", "باتعلم ألماني."],
        ["Und du? Wie heißt du?", "وإنت؟ اسمك إيه؟"],
        ["Freut mich!", "تشرفت!"]
      ], [
        ["Lehrerin", "Guten Morgen! Willkommen im Kurs. Wer bist du?", "صباح الخير! أهلا بيكم في الكورس. إنت مين؟"],
        ["Amira", "Guten Morgen! Ich bin Amira.", "صباح الخير! أنا أميرة."],
        ["Lehrerin", "Woher kommst du, Amira?", "إنتي منين يا أميرة؟"],
        ["Amira", "Ich komme aus Ägypten, aus Kairo.", "أنا من مصر، من القاهرة."],
        ["Lehrerin", "Und wo wohnst du jetzt?", "وساكنة فين دلوقتي؟"],
        ["Amira", "Ich wohne in Hamburg. Ich spreche Arabisch und Englisch.", "ساكنة في هامبورغ. باتكلم عربي وإنجليزي."],
        ["Lehrerin", "Sehr gut! Willkommen, Amira.", "ممتاز! أهلا بيكي يا أميرة."]
      ], "Stell dich vor: Name, Land, Wohnort und Sprachen. Sprich vier Sätze.", "عرّف بنفسك: الاسم والبلد ومكان السكن واللغات. قول أربع جمل."),
      S("Formell begrüßen: Herr und Frau", "تحية رسمية: السيد والسيدة", [
        ["Guten Tag, Frau Weber.", "نهارك سعيد يا أستاذة فيبر."],
        ["Guten Abend, Herr Hansen.", "مساء الخير يا أستاذ هانزن."],
        ["Wie geht es Ihnen?", "حضرتك عامل إيه؟"],
        ["Danke, gut. Und Ihnen?", "الحمد لله كويس. وحضرتك؟"],
        ["Das ist Frau Kowalski.", "دي السيدة كوفالسكي."],
        ["Mein Name ist Oliver Hansen.", "اسمي أوليفر هانزن."],
        ["Wie ist Ihr Name, bitte?", "ممكن أعرف اسم حضرتك؟"],
        ["Auf Wiedersehen, Frau Weber!", "مع السلامة يا أستاذة فيبر!"]
      ], [
        ["Herr Hansen", "Guten Tag, Frau Weber. Wie geht es Ihnen?", "نهارك سعيد يا أستاذة فيبر. حضرتك عاملة إيه؟"],
        ["Frau Weber", "Danke, gut. Und Ihnen, Herr Hansen?", "الحمد لله كويسة. وحضرتك يا أستاذ هانزن؟"],
        ["Herr Hansen", "Auch gut, danke. Das ist Frau Kowalski.", "كويس برضه، شكرًا. دي السيدة كوفالسكي."],
        ["Frau Kowalski", "Guten Tag, Herr Hansen. Mein Name ist Anna Kowalski.", "نهارك سعيد يا أستاذ هانزن. اسمي آنا كوفالسكي."],
        ["Herr Hansen", "Freut mich, Frau Kowalski.", "تشرفت يا أستاذة كوفالسكي."],
        ["Frau Weber", "Auf Wiedersehen, Herr Hansen. Auf Wiedersehen, Frau Kowalski!", "مع السلامة يا أستاذ هانزن. مع السلامة يا أستاذة كوفالسكي!"]
      ], "Du triffst deine Lehrerin auf der Straße. Begrüße sie formell, frage nach dem Befinden und verabschiede dich.", "إنت قابلت مدرّستك في الشارع. سلّم عليها بشكل رسمي واسأل عن حالها وودّعها."),
      S("Telefonnummer und E-Mail-Adresse austauschen", "تبادل رقم التليفون والإيميل", [
        ["Wie ist deine Telefonnummer?", "رقم تليفونك كام؟"],
        ["Meine Handynummer ist 0171 8264731.", "رقم موبايلي 0171 8264731."],
        ["Wie ist deine E-Mail-Adresse?", "إيميلك إيه؟"],
        ["Meine E-Mail-Adresse ist lara_brandt@mail-beispiel.de.", "إيميلي lara_brandt@mail-beispiel.de."],
        ["Das schreibt man mit Unterstrich.", "ده بيتكتب بشرطة سفلية."],
        ["Der Unterstrich ist zwischen Vor- und Nachname.", "الشرطة السفلية بين الاسم الأول واسم العيلة."],
        ["Kannst du das buchstabieren?", "ممكن تهجّيها؟"],
        ["Danke, ich schreibe es auf.", "شكرًا، هاكتبها."]
      ], [
        ["Ruben", "Wie ist deine E-Mail-Adresse, Lara?", "إيميلك إيه يا لارا؟"],
        ["Lara", "Lara Unterstrich Brandt at mail-beispiel Punkt de.", "الإيميل: lara_brandt@mail-beispiel.de"],
        ["Ruben", "Wie bitte? Kannst du das buchstabieren?", "نعم؟ ممكن تهجّيها؟"],
        ["Lara", "L – A – R – A. Und Brandt: B – R – A – N – D – T.", "L – A – R – A. وبراندت: B – R – A – N – D – T."],
        ["Ruben", "Danke! Und deine Handynummer?", "شكرًا! ورقم موبايلك؟"],
        ["Lara", "Null eins sieben eins, acht zwei sechs vier, sieben drei eins.", "رقم الموبايل: 0171 8264 731."]
      ], "Tausche mit einem Partner die Handynummer und E-Mail-Adresse. Buchstabiere deinen Namen.", "بادل رقم الموبايل والإيميل مع شريك. وهجّي اسمك."),
      S("Über Länder und Sprachen sprechen", "الكلام عن الدول واللغات", [
        ["Woher kommst du?", "إنت منين؟"],
        ["Ich komme aus der Schweiz.", "أنا من سويسرا."],
        ["Sie kommt aus den USA und wohnt in San Francisco.", "هي من أمريكا وساكنة في سان فرانسيسكو."],
        ["Er kommt aus Algerien und wohnt in Paris.", "هو من الجزائر وساكن في باريس."],
        ["Welche Sprachen sprichst du?", "بتتكلم لغات إيه؟"],
        ["Ich spreche Deutsch, Französisch und Italienisch.", "باتكلم ألماني وفرنسي وإيطالي."],
        ["Ich lerne Spanisch.", "باتعلم إسباني."],
        ["Und wie heißt dein Land auf Deutsch?", "وبلدك اسمها إيه بالألماني؟"]
      ], [
        ["Saki", "Hallo! Woher kommst du?", "أهلا! إنت منين؟"],
        ["Kateb", "Ich komme aus Algerien. Und du?", "أنا من الجزائر. وإنتي؟"],
        ["Saki", "Ich komme aus Japan, aus Tokio. Wo wohnst du?", "أنا من اليابان، من طوكيو. إنت ساكن فين؟"],
        ["Kateb", "Ich wohne in Paris. Ich spreche Arabisch und Französisch.", "أنا ساكن في باريس. باتكلم عربي وفرنسي."],
        ["Saki", "Ich spreche Japanisch und Deutsch. Ich lerne Englisch.", "أنا باتكلم ياباني وألماني. وباتعلم إنجليزي."],
        ["Kateb", "Toll! Wir lernen alle Deutsch.", "رائع! كلنا بنتعلم ألماني."]
      ], "Frage zwei Personen im Kurs: Woher kommst du? Welche Sprachen sprichst du? Berichte danach: „Er / Sie kommt aus …“.", "اسأل شخصين في الكورس: إنت منين؟ بتتكلم لغات إيه؟ وبعدين احكي: „Er / Sie kommt aus …“."),
      S("Im Kurs nachfragen", "الاستفسار في الكورس", [
        ["Wie bitte?", "نعم؟ / ممكن تعيد؟"],
        ["Noch einmal, bitte.", "مرة تانية من فضلك."],
        ["Bitte ein bisschen langsamer.", "من فضلك أبطأ شوية."],
        ["Das verstehe ich nicht.", "أنا مش فاهم ده."],
        ["Was heißt „Handtuch“ auf Arabisch?", "كلمة Handtuch معناها إيه بالعربي؟"],
        ["Wie schreibt man das?", "بيتكتب إزاي؟"],
        ["Kannst du das buchstabieren?", "ممكن تهجّيها؟"],
        ["Danke, jetzt verstehe ich.", "شكرًا، دلوقتي فهمت."]
      ], [
        ["Lehrerin", "Schreiben Sie bitte Ihren Namen auf.", "اكتبوا اسمكم من فضلكم."],
        ["Tarek", "Wie bitte? Noch einmal, bitte.", "نعم؟ مرة تانية من فضلك."],
        ["Lehrerin", "Schreiben Sie Ihren Namen auf. Hier, auf das Blatt.", "اكتبوا اسمكم. هنا على الورقة."],
        ["Tarek", "Bitte ein bisschen langsamer. Ich verstehe das Wort „aufschreiben“ nicht.", "من فضلك أبطأ شوية. أنا مش فاهم كلمة aufschreiben."],
        ["Lehrerin", "„Aufschreiben“ heißt: Sie schreiben etwas auf Papier.", "aufschreiben معناها: تكتب حاجة على الورق."],
        ["Tarek", "Ah, danke! Jetzt verstehe ich.", "آه، شكرًا! دلوقتي فهمت."]
      ], "Du verstehst ein Wort nicht. Bitte deinen Partner um Wiederholung, frage nach der Bedeutung und danke.", "إنت مش فاهم كلمة. اطلب من شريكك يعيد، واسأل عن معناها، وقول شكرًا.")
    ],

    /* ---------- Kapitel 2 ---------- */
    2: [
      S("Über Hobbys sprechen", "الكلام عن الهوايات", [
        ["Was machst du gern?", "بتحب تعمل إيه؟"],
        ["Ich spiele gern Fußball.", "بحب ألعب كورة."],
        ["Hörst du gern Musik?", "بتحب تسمع موسيقى؟"],
        ["Ja, sehr gern. Und du?", "أيوه، جدًا. وإنت؟"],
        ["Ich koche nicht so gern.", "مابحبش أطبخ أوي."],
        ["Schwimmst du gern? – Es geht so.", "بتحب تعوم؟ – عادي."],
        ["Mein Hobby ist Fotografieren.", "هوايتي التصوير."],
        ["Ich reise gern und lese viel.", "بحب أسافر وأقرأ كتير."]
      ], [
        ["Tim", "Was ist dein Hobby, Mia?", "إيه هوايتك يا ميا؟"],
        ["Mia", "Ich tanze gern. Und ich höre gern Musik.", "بحب أرقص. وبحب أسمع موسيقى."],
        ["Tim", "Spielst du auch Fußball?", "بتلعبي كورة كمان؟"],
        ["Mia", "Nein, nicht so gern. Und du?", "لأ، مش أوي. وإنت؟"],
        ["Tim", "Ich spiele sehr gern Fußball und ich jogge am Sonntag.", "أنا بحب ألعب كورة جدًا وبجري يوم الأحد."],
        ["Mia", "Toll! Das ist ein schönes Hobby.", "رائع! دي هواية جميلة."]
      ], "Frage drei Personen: Was machst du gern? Notiere die Antworten und berichte.", "اسأل تلات ناس: بتحب تعمل إيه؟ اكتب الإجابات واحكي."),
      S("Sich verabreden", "الاتفاق على ميعاد", [
        ["Gehen wir ins Kino?", "نروح السينما؟"],
        ["Ja, gern! Wann?", "أيوه بكل سرور! إمتى؟"],
        ["Am Freitag?", "يوم الجمعة؟"],
        ["Nein, das geht leider nicht. Da arbeite ich.", "لأ، للأسف مش هينفع. بكون في الشغل."],
        ["Und am Samstag? – Ja, super!", "وإيه رأيك السبت؟ – أيوه، تمام!"],
        ["Um wie viel Uhr?", "الساعة كام؟"],
        ["Um acht Uhr, am Bahnhof.", "الساعة 8 عند المحطة."],
        ["Okay, bis Samstag!", "ماشي، أشوفك السبت!"]
      ], [
        ["Nora", "Hi Jan! Hast du am Wochenende Zeit?", "هاي يان! عندك وقت في الويك إند؟"],
        ["Jan", "Am Samstag, ja. Am Sonntag arbeite ich.", "يوم السبت أيوه. الأحد باشتغل."],
        ["Nora", "Gehen wir am Samstag schwimmen?", "نروح نعوم يوم السبت؟"],
        ["Jan", "Gern! Wann gehen wir?", "بكل سرور! هنروح إمتى؟"],
        ["Nora", "Um zehn Uhr am Schwimmbad.", "الساعة 10 عند حمّام السباحة."],
        ["Jan", "Super, bis Samstag!", "تمام، أشوفك السبت!"]
      ], "Verabrede dich mit einem Partner. Vorschlag, Tag, Uhrzeit, Treffpunkt – und lehne einmal höflich ab.", "اتفق مع شريك على ميعاد. اقتراح ويوم وساعة ومكان – ورفض مرة بأدب."),
      S("Im Sportclub anmelden: Formular", "التسجيل في النادي: الاستمارة", [
        ["Ich möchte mich anmelden.", "عايز أسجّل."],
        ["Wie ist Ihr Familienname? – Hassan.", "اسم العيلة إيه؟ – حسن."],
        ["Wie ist Ihr Vorname? – Ahmed.", "الاسم الأول إيه؟ – أحمد."],
        ["Wann sind Sie geboren?", "تاريخ ميلادك إمتى؟"],
        ["Mein Geburtsdatum ist der 5. Mai 1998.", "تاريخ ميلادي 5 مايو 1998."],
        ["Wo wohnen Sie? – In der Hauptstraße 25, in 20095 Hamburg.", "ساكن فين؟ – في شارع هاوبت 25، 20095 هامبورغ."],
        ["Wie ist Ihre Telefonnummer?", "رقم تليفونك كام؟"],
        ["Bitte unterschreiben Sie hier.", "من فضلك وقّع هنا."]
      ], [
        ["Mitarbeiterin", "Guten Tag! Möchten Sie sich anmelden?", "مساء الخير! عايز تسجّل؟"],
        ["Ahmed", "Ja, bitte. Ich möchte Karate machen.", "أيوه من فضلك. عايز ألعب كاراتيه."],
        ["Mitarbeiterin", "Gern. Wie ist Ihr Familienname?", "حاضر. إيه اسم عيلتك؟"],
        ["Ahmed", "Hassan. H – A – double S – A – N.", "حسن. H – A – SS – A – N."],
        ["Mitarbeiterin", "Und Ihr Wohnort und die Postleitzahl?", "ومكان سكنك والرمز البريدي؟"],
        ["Ahmed", "Hamburg, 20095. Hauptstraße 25.", "هامبورغ، 20095. شارع هاوبت 25."]
      ], "Fülle ein Formular für den Sportclub aus: Familienname, Vorname, Geburtsdatum, Geburtsort, Adresse, Telefon.", "املا استمارة نادي رياضي: اسم العيلة والاسم الأول وتاريخ ومكان الميلاد والعنوان والتليفون."),
      S("Beruf und Arbeitszeiten", "المهنة ومواعيد الشغل", [
        ["Was sind Sie von Beruf?", "مهنة حضرتك إيه؟"],
        ["Ich bin Krankenpfleger.", "أنا ممرّض."],
        ["Wo arbeiten Sie?", "حضرتك بتشتغل فين؟"],
        ["Ich arbeite im Krankenhaus.", "باشتغل في مستشفى."],
        ["Wann arbeiten Sie?", "بتشتغل إمتى؟"],
        ["Ich arbeite von Montag bis Freitag.", "باشتغل من الاتنين للجمعة."],
        ["Am Samstag habe ich frei.", "السبت عندي إجازة."],
        ["Ich studiere noch. Ich bin Student.", "أنا لسه بدرس. أنا طالب."]
      ], [
        ["Lisa", "Was bist du von Beruf, Karim?", "مهنتك إيه يا كريم؟"],
        ["Karim", "Ich bin Ingenieur. Ich arbeite bei einer Firma. Und du?", "أنا مهندس. باشتغل في شركة. وإنتي؟"],
        ["Lisa", "Ich bin Lehrerin. Ich arbeite in einer Schule.", "أنا مدرّسة. باشتغل في مدرسة."],
        ["Karim", "Wann hast du frei?", "إمتى عندك إجازة؟"],
        ["Lisa", "Am Samstag und am Sonntag. Und du?", "السبت والأحد. وإنت؟"],
        ["Karim", "Ich habe am Mittwoch und am Sonntag frei.", "أنا إجازتي الأربع والأحد."]
      ], "Erzähle über deinen Beruf (oder deinen Traumberuf): Was, wo, wann und wie lange arbeitest du?", "احكي عن مهنتك (أو مهنة أحلامك): إيه، فين، إمتى، وقد إيه بتشتغل؟"),
      S("Im Taxi: Adresse und Preis", "في التاكسي: العنوان والسعر", [
        ["Zum Bahnhof, bitte.", "للمحطة من فضلك."],
        ["Die Adresse ist Lindenstraße 42.", "العنوان شارع ليندن 42."],
        ["Wie weit ist das? – Zehn Kilometer.", "قد إيه المسافة؟ – عشر كيلومترات."],
        ["Das dauert ungefähr zwanzig Minuten.", "ده بياخد حوالي عشرين دقيقة."],
        ["Was kostet das?", "الحساب كام؟"],
        ["Das macht 34 Euro.", "الحساب 34 يورو."],
        ["Hier sind 40 Euro. Stimmt so.", "اتفضل 40 يورو. الباقي ليك."],
        ["Danke, schönen Tag noch!", "شكرًا، يومك سعيد!"]
      ], [
        ["Fahrer", "Guten Tag! Wohin möchten Sie?", "مساء الخير! عايز تروح فين؟"],
        ["Fahrgast", "Zum Hotel Alster, Lindenstraße 42, bitte.", "لفندق ألستر، شارع ليندن 42 من فضلك."],
        ["Fahrer", "Das ist ganz einfach. Es sind zwölf Kilometer.", "ده بسيط. المسافة اتناشر كيلومتر."],
        ["Fahrgast", "Was kostet das ungefähr?", "الحساب هيبقى كام تقريبًا؟"],
        ["Fahrer", "Ungefähr vierzig Euro.", "حوالي أربعين يورو."],
        ["Fahrgast", "Okay. Ich habe heute leider nur fünfzig Euro.", "تمام. للأسف معايا خمسين يورو بس."]
      ], "Du fährst mit dem Taxi. Nenne dein Ziel, die Adresse und frage nach dem Preis.", "إنت ركبت تاكسي. قول الوجهة والعنوان واسأل عن السعر.")
    ],

    /* ---------- Kapitel 3 ---------- */
    3: [
      S("Nach dem Weg fragen", "السؤال عن الطريق", [
        ["Entschuldigung, wo ist bitte der Bahnhof?", "لو سمحت، فين المحطة؟"],
        ["Wie komme ich zum Hafen?", "أروح الميناء إزاي؟"],
        ["Gehen Sie hier geradeaus.", "امشي من هنا على طول."],
        ["Dann gehen Sie rechts.", "بعدين خد يمين."],
        ["An der Brücke gehen Sie links.", "عند الكوبري خد شمال."],
        ["Das ist ganz einfach.", "ده بسيط جدًا."],
        ["Ist das weit? – Nein, nur fünf Minuten.", "هو بعيد؟ – لأ، خمس دقايق بس."],
        ["Vielen Dank! – Bitte, gern!", "شكرًا جزيلًا! – العفو، بكل سرور!"]
      ], [
        ["Tourist", "Entschuldigung, wo ist der Viktualienmarkt?", "لو سمحت، فين سوق فيكتواليين؟"],
        ["Passantin", "Das ist ganz einfach. Gehen Sie hier geradeaus.", "ده بسيط جدًا. امشي من هنا على طول."],
        ["Tourist", "Geradeaus. Und dann?", "على طول. وبعدين؟"],
        ["Passantin", "Dann links, bis zur Kirche. Da ist der Markt.", "بعدين شمال لحد الكنيسة. السوق هناك."],
        ["Tourist", "Also: geradeaus, links, Kirche. Ist das richtig?", "يعني: على طول، شمال، الكنيسة. صح؟"],
        ["Passantin", "Ja, genau. Viel Spaß!", "أيوه بالظبط. استمتع!"]
      ], "Frage nach dem Weg zum Bahnhof und beschreibe deinem Partner den Weg von eurem Kursraum zur nächsten U-Bahn.", "اسأل عن الطريق للمحطة ووصّف لشريكك الطريق من قاعة الكورس لأقرب مترو."),
      S("Am Bahnhof: Fahrkarte kaufen", "في المحطة: شراء تذكرة", [
        ["Eine Fahrkarte nach Hamburg, bitte.", "تذكرة لهامبورغ من فضلك."],
        ["Einfach oder hin und zurück?", "ذهاب بس ولا ذهاب وعودة؟"],
        ["Was kostet die Fahrkarte?", "التذكرة بكام؟"],
        ["Der Zug fährt um 10:15 Uhr.", "القطر بيمشي الساعة 10:15."],
        ["Von welchem Gleis fährt der Zug?", "القطر بيمشي من أنهي رصيف؟"],
        ["Von Gleis drei.", "من رصيف 3."],
        ["Wie lange dauert die Fahrt?", "الرحلة بتاخد قد إيه؟"],
        ["Zwei Stunden.", "ساعتين."]
      ], [
        ["Kunde", "Guten Tag. Eine Fahrkarte nach Berlin, bitte.", "مساء الخير. تذكرة لبرلين من فضلك."],
        ["Verkäuferin", "Einfach oder hin und zurück?", "ذهاب بس ولا ذهاب وعودة؟"],
        ["Kunde", "Hin und zurück, bitte. Was kostet das?", "ذهاب وعودة من فضلك. بكام؟"],
        ["Verkäuferin", "Das macht 59 Euro.", "ده بـ 59 يورو."],
        ["Kunde", "Und wann fährt der nächste Zug?", "ومتى بيمشي أقرب قطر؟"],
        ["Verkäuferin", "In zehn Minuten, von Gleis vier.", "بعد عشر دقايق من رصيف 4."]
      ], "Du kaufst eine Fahrkarte. Nenne das Ziel, frage nach dem Preis und der Abfahrt.", "إنت بتشتري تذكرة. قول الوجهة واسأل عن السعر وميعاد المغادرة."),
      S("Im Touristenbüro: Tipps für die Stadt", "في مكتب السياحة: نصايح عن المدينة", [
        ["Haben Sie einen Stadtplan?", "عندكم خريطة للمدينة؟"],
        ["Was kann man hier besichtigen?", "إيه اللي ممكن نزوره هنا؟"],
        ["Das Rathaus ist sehr schön.", "مبنى البلدية جميل جدًا."],
        ["Gibt es eine Stadttour?", "في جولة في المدينة؟"],
        ["Ist das Museum heute geöffnet?", "المتحف مفتوح النهارده؟"],
        ["Der Eintritt kostet sieben Euro.", "الدخول بـ 7 يورو."],
        ["Wie komme ich zum Hafen? – Mit der U-Bahn.", "أروح الميناء إزاي؟ – بالمترو."],
        ["Vielen Dank für die Informationen!", "شكرًا جزيلًا على المعلومات!"]
      ], [
        ["Tourist", "Guten Tag. Haben Sie einen Stadtplan?", "مساء الخير. عندكم خريطة للمدينة؟"],
        ["Mitarbeiter", "Ja, hier. Er ist kostenlos.", "أيوه اتفضل. مجانية."],
        ["Tourist", "Was kann man hier besichtigen?", "إيه اللي ممكن نزوره هنا؟"],
        ["Mitarbeiter", "Der Hafen, das Rathaus und die große Kirche sind sehr bekannt.", "الميناء ومبنى البلدية والكنيسة الكبيرة مشهورين جدًا."],
        ["Tourist", "Wie komme ich zum Hafen?", "أروح الميناء إزاي؟"],
        ["Mitarbeiter", "Mit der S-Bahn. Die Station heißt „Landungsbrücken“.", "بالـ S-Bahn. المحطة اسمها Landungsbrücken."]
      ], "Du bist Tourist in Hamburg. Frage nach einem Stadtplan, nach zwei Sehenswürdigkeiten und wie du dorthin kommst.", "إنت سائح في هامبورغ. اسأل عن خريطة وعن معلمين سياحيين وإزاي توصل لهم."),
      S("Treffpunkt in der Stadt ausmachen", "تحديد مكان اللقاء في المدينة", [
        ["Wo treffen wir uns?", "هنتقابل فين؟"],
        ["Am Bahnhof, vor dem Eingang.", "عند المحطة قدّام المدخل."],
        ["Fährst du mit dem Bus oder mit der U-Bahn?", "هتيجي بالأتوبيس ولا بالمترو؟"],
        ["Ich fahre mit der U-Bahn.", "هاجي بالمترو."],
        ["Ich gehe zu Fuß. Das sind zehn Minuten.", "هاجي مشي. عشر دقايق."],
        ["Wie lange brauchst du?", "هتاخد قد إيه؟"],
        ["Ich bin gleich da.", "أنا جاي حالًا."],
        ["Bis gleich!", "أشوفك بعد شوية!"]
      ], [
        ["Lena", "Hallo Tim! Wo treffen wir uns heute?", "هاي تيم! هنتقابل فين النهارده؟"],
        ["Tim", "Am Hafen, bei der großen Brücke.", "عند الميناء جنب الكوبري الكبير."],
        ["Lena", "Okay. Fährst du mit dem Bus?", "ماشي. هتيجي بالأتوبيس؟"],
        ["Tim", "Nein, ich fahre mit dem Fahrrad. Und du?", "لأ، هاجي بالعجلة. وإنتي؟"],
        ["Lena", "Ich nehme die U-Bahn. Um drei Uhr?", "أنا هاخد المترو. الساعة 3؟"],
        ["Tim", "Perfekt. Bis gleich!", "تمام. أشوفك بعد شوية!"]
      ], "Verabrede dich in der Stadt: Treffpunkt, Uhrzeit und Verkehrsmittel – dann beschreibe den Weg.", "اتفق على لقاء في المدينة: المكان والساعة ووسيلة المواصلات – وبعدين وصّف الطريق."),
      S("Über Monate und Jahreszeiten sprechen", "الكلام عن الشهور والفصول", [
        ["Welche Jahreszeit magst du?", "أنهي فصل بتحبه؟"],
        ["Ich mag den Sommer. Da ist es warm.", "بحب الصيف. الجو دافي."],
        ["Im Winter ist es kalt.", "في الشتا الجو بارد."],
        ["Im Herbst regnet es oft.", "في الخريف بتمطر كتير."],
        ["Wann hast du Geburtstag?", "عيد ميلادك إمتى؟"],
        ["Im Mai. Und du?", "في مايو. وإنت؟"],
        ["Im Juli ist es heiß in Ägypten.", "في يوليو الجو حر في مصر."],
        ["Mein Lieblingsmonat ist Oktober.", "شهري المفضل أكتوبر."]
      ], [
        ["Anna", "Welche Jahreszeit magst du, Omar?", "أنهي فصل بتحبه يا عمر؟"],
        ["Omar", "Ich mag den Herbst. Es ist nicht zu heiß und nicht zu kalt.", "بحب الخريف. مش حر أوي ولا برد أوي."],
        ["Anna", "Wirklich? Ich mag den Sommer. Im Juli fahre ich ans Meer.", "بجد؟ أنا بحب الصيف. في يوليو باروح البحر."],
        ["Omar", "Und wann hast du Geburtstag?", "وعيد ميلادك إمتى؟"],
        ["Anna", "Im Dezember, am ersten Dezember.", "في ديسمبر، في أول ديسمبر."],
        ["Omar", "Das ist ja bald! Alles Gute!", "ده قريب! كل سنة وإنتي طيبة!"]
      ], "Erzähle: Deine Lieblingsjahreszeit, dein Geburtsmonat und das Wetter in deinem Land.", "احكي: فصلك المفضل وشهر ميلادك والطقس في بلدك.")
    ],

    /* ---------- Kapitel 4 ---------- */
    4: [
      S("Im Supermarkt einkaufen", "التسوق في السوبر ماركت", [
        ["Entschuldigung, wo finde ich Reis?", "لو سمحت، فين ألاقي الرز؟"],
        ["Dort rechts, bei den Nudeln.", "هناك على اليمين جنب المكرونة."],
        ["Haben Sie auch frisches Obst?", "عندكم فاكهة طازة؟"],
        ["Was kosten die Äpfel?", "التفاح بكام؟"],
        ["Ein Kilo kostet zwei Euro.", "الكيلو بـ 2 يورو."],
        ["Ich nehme ein Kilo Äpfel und drei Bananen.", "هاخد كيلو تفاح وتلات موزات."],
        ["Brauchen Sie eine Tüte?", "محتاج كيس؟"],
        ["Das ist alles. Danke!", "ده كل حاجة. شكرًا!"]
      ], [
        ["Kunde", "Entschuldigung, wo finde ich Milch?", "لو سمحت، فين ألاقي اللبن؟"],
        ["Mitarbeiterin", "Dort links, neben dem Käse.", "هناك على الشمال جنب الجبنة."],
        ["Kunde", "Danke. Und haben Sie auch Joghurt?", "شكرًا. وعندكم زبادي؟"],
        ["Mitarbeiterin", "Ja, der Joghurt ist gleich daneben.", "أيوه، الزبادي جنبه على طول."],
        ["Kunde", "Was kostet der Joghurt?", "الزبادي بكام؟"],
        ["Mitarbeiterin", "Ein Becher kostet 60 Cent.", "الكوب بـ 60 سنت."]
      ], "Du bist im Supermarkt. Frage nach drei Lebensmitteln und nach dem Preis.", "إنت في سوبر ماركت. اسأل عن تلات أغذية وعن السعر."),
      S("In der Bäckerei bestellen", "الطلب في المخبز", [
        ["Bitte? Was möchten Sie?", "تفضل؟ تحب إيه؟"],
        ["Ich möchte vier Brötchen, bitte.", "عايز أربع عيش صغير من فضلك."],
        ["Haben Sie auch Kuchen?", "عندكم كيك؟"],
        ["Ein Stück Apfelkuchen, bitte.", "حتة كيك تفاح من فضلك."],
        ["Sonst noch etwas?", "حاجة تانية؟"],
        ["Nein, danke. Das ist alles.", "لا شكرًا. ده كل حاجة."],
        ["Das macht 4 Euro 20.", "الحساب 4 يورو و20 سنت."],
        ["Können Sie wechseln? – Ja, Moment.", "تقدر تفكّ لي؟ – أيوه، لحظة."]
      ], [
        ["Verkäufer", "Guten Morgen! Bitte?", "صباح الخير! تفضلي؟"],
        ["Kundin", "Guten Morgen. Ich möchte ein Brot und zwei Brötchen.", "صباح الخير. عايزة عيش وعيشتين صغار."],
        ["Verkäufer", "Gern. Sonst noch etwas?", "حاضر. حاجة تانية؟"],
        ["Kundin", "Ja, ein Stück Käsekuchen, bitte.", "أيوه، حتة تشيز كيك من فضلك."],
        ["Verkäufer", "Das macht 6 Euro 10, bitte.", "الحساب 6 يورو و10 سنت."],
        ["Kundin", "Hier, 10 Euro. Können Sie wechseln?", "اتفضل 10 يورو. تقدر تفكّ؟"]
      ], "Spielt eine Szene in der Bäckerei: Kunde und Verkäufer. Bestelle drei Dinge und bezahle.", "مثّلوا مشهد في مخبز: زبون وبائع. اطلب تلات حاجات وادفع."),
      S("Beim Essen: Gastgeber und Gast", "على السفرة: المضيف والضيف", [
        ["Guten Appetit!", "بالهنا والشفا!"],
        ["Danke, gleichfalls!", "شكرًا، وإنت كمان!"],
        ["Möchtest du noch etwas Salat?", "تحب سلطة كمان؟"],
        ["Ja, gerne. / Nein, danke. Ich bin satt.", "أيوه بكل سرور. / لا شكرًا. أنا شبعان."],
        ["Das schmeckt sehr gut!", "ده طعمه حلو جدًا!"],
        ["Die Suppe ist sehr lecker.", "الشوربة لذيذة جدًا."],
        ["Ich esse kein Fleisch.", "أنا مابكلش لحمة."],
        ["Möchten Sie etwas trinken? – Ja, ein Wasser, bitte.", "تحبوا تشربوا حاجة؟ – أيوه، مية من فضلك."]
      ], [
        ["Bea", "So, das Essen ist fertig. Guten Appetit!", "خلاص الأكل جاهز. بالهنا والشفا!"],
        ["Luca", "Danke, gleichfalls! Das sieht lecker aus.", "شكرًا، وإنتي كمان! شكله لذيذ."],
        ["Bea", "Möchtest du noch Reis?", "تحب رز كمان؟"],
        ["Luca", "Ja, gerne. Die Soße schmeckt sehr gut.", "أيوه بكل سرور. الصلصة طعمها حلو جدًا."],
        ["Bea", "Und etwas trinken? Wasser oder Saft?", "وحاجة تشربها؟ مية ولا عصير؟"],
        ["Luca", "Einen Apfelsaft, bitte. Danke, ich bin satt.", "عصير تفاح من فضلك. شكرًا، أنا شبعت."]
      ], "Du lädst einen Freund zum Essen ein. Wünsche Guten Appetit, biete mehr Essen an und sprich über den Geschmack.", "إنت عازم صاحبك على الأكل. اتمنى له بالهنا واعرض عليه أكل زيادة وتكلم عن الطعم."),
      S("Über Essen und Vorlieben sprechen", "الكلام عن الأكل والأشياء المفضلة", [
        ["Was isst du zum Frühstück?", "بتاكل إيه على الفطار؟"],
        ["Ich esse Brot mit Käse und trinke Tee.", "باكل عيش بجبنة وبشرب شاي."],
        ["Isst du gern Fisch?", "بتحب تاكل سمك؟"],
        ["Ja, sehr gern. / Nein, nicht so gern.", "أيوه، جدًا. / لأ، مش أوي."],
        ["Was trinkst du nicht gern?", "إيه اللي مابتحبش تشربه؟"],
        ["Ich mag keinen Kaffee.", "مابحبش القهوة."],
        ["Mittags esse ich meistens Reis.", "الضهر باكل غالبًا رز."],
        ["Zum Abendessen mag ich Suppe.", "على العشا بحب شوربة."]
      ], [
        ["Sara", "Was isst du gern, Daniel?", "بتحب تاكل إيه يا دانيال؟"],
        ["Daniel", "Ich esse gern Pizza und Nudeln. Und du?", "بحب أكل بيتزا ومكرونة. وإنتي؟"],
        ["Sara", "Ich esse gern Obst und Gemüse. Ich esse kein Fleisch.", "بحب فاكهة وخضار. ومابكلش لحمة."],
        ["Daniel", "Und was trinkst du zum Frühstück?", "وبتشربي إيه على الفطار؟"],
        ["Sara", "Tee mit Milch. Ich mag keinen Kaffee.", "شاي بلبن. مابحبش القهوة."],
        ["Daniel", "Interessant! Ich trinke jeden Morgen Kaffee.", "مثير! أنا بشرب قهوة كل صبح."]
      ], "Frage zwei Personen, was sie zum Frühstück, Mittag- und Abendessen essen und trinken. Berichte.", "اسأل شخصين بياكلوا ويشربوا إيه على الفطار والغدا والعشا. احكي."),
      S("Einen Einkauf planen", "تخطيط مشوار تسوق", [
        ["Was brauchen wir für die Grillparty?", "إيه اللي محتاجينه لحفلة الشوي؟"],
        ["Wir brauchen Würstchen, Brot und Salat.", "محتاجين سجق وعيش وسلطة."],
        ["Schreibst du den Einkaufszettel?", "هتكتب قايمة المشتريات؟"],
        ["Ja, ich schreibe ihn jetzt.", "أيوه هاكتبها دلوقتي."],
        ["Wie viel Käse kaufen wir?", "هنشتري جبنة قد إيه؟"],
        ["Zweihundert Gramm reichen.", "200 جرام كفاية."],
        ["Ich kaufe das Obst, du kaufst die Getränke.", "أنا هاشتري الفاكهة وإنت المشروبات."],
        ["Wir bezahlen zusammen.", "هندفع مع بعض."]
      ], [
        ["Mia", "Am Samstag machen wir eine Grillparty. Was brauchen wir?", "يوم السبت هنعمل حفلة شوي. محتاجين إيه؟"],
        ["Ben", "Wir brauchen Fleisch, Würstchen und Brot.", "محتاجين لحمة وسجق وعيش."],
        ["Mia", "Und Salat. Ich kaufe drei Tomaten und eine Gurke.", "وسلطة. أنا هاشتري تلات طماطم وخيارة."],
        ["Ben", "Gut. Ich kaufe die Getränke: Wasser, Saft und Cola.", "كويس. أنا هاشتري المشروبات: مية وعصير وكولا."],
        ["Mia", "Vergiss den Käse nicht!", "ماتنساش الجبنة!"],
        ["Ben", "Nein, ich schreibe ihn auf den Zettel.", "لأ، هاكتبها في القايمة."]
      ], "Plant mit einem Partner eine Party. Schreibt einen Einkaufszettel mit zehn Dingen und verteilt, wer was kauft.", "خططوا لحفلة مع شريك. اكتبوا قايمة مشتريات بعشر حاجات ووزّعوا مين هيشتري إيه.")
    ],

    /* ---------- Kapitel 5 ---------- */
    5: [
      S("Nach der Uhrzeit fragen", "السؤال عن الساعة", [
        ["Wie spät ist es?", "الساعة كام؟"],
        ["Wie viel Uhr ist es, bitte?", "الساعة كام لو سمحت؟"],
        ["Es ist halb drei.", "الساعة 2:30."],
        ["Es ist Viertel vor fünf.", "الساعة 4:45."],
        ["Es ist zehn nach neun.", "الساعة 9:10."],
        ["Wann beginnt der Kurs? – Um Viertel nach acht.", "الكورس بيبدأ إمتى؟ – الساعة 8:15."],
        ["Es ist schon spät.", "الوقت اتأخر."],
        ["Entschuldigung, meine Uhr geht falsch.", "آسف، ساعتي غلط."]
      ], [
        ["Tom", "Entschuldigung, wie spät ist es?", "لو سمحتي، الساعة كام؟"],
        ["Frau", "Es ist Viertel nach zehn.", "الساعة 10:15."],
        ["Tom", "Danke. Wann fährt der Bus?", "شكرًا. الأتوبيس بيمشي إمتى؟"],
        ["Frau", "Um zehn Uhr dreißig.", "الساعة 10:30."],
        ["Tom", "Dann habe ich noch Zeit. Danke!", "يبقى لسه عندي وقت. شكرًا!"],
        ["Frau", "Gern geschehen!", "العفو!"]
      ], "Frage fünf Personen nach der Uhrzeit. Sie nennen die Zeit. Schreibe die Zeit inoffiziell (halb acht) und offiziell (7:30 Uhr).", "اسأل خمس ناس عن الساعة. هما بيقولوا الوقت. اكتبه بالطريقة العادية (halb acht) والرسمية (7:30 Uhr)."),
      S("Über die Familie sprechen", "الكلام عن العيلة", [
        ["Das ist meine Familie.", "دي عيلتي."],
        ["Ich habe zwei Brüder und eine Schwester.", "عندي أخوين وأخت."],
        ["Mein Vater arbeitet als Taxifahrer.", "أبويا بيشتغل سواق تاكسي."],
        ["Meine Mutter ist Lehrerin.", "أمي مدرّسة."],
        ["Meine Großeltern wohnen in Alexandria.", "أجدادي ساكنين في إسكندرية."],
        ["Bist du verheiratet?", "إنت متجوز؟"],
        ["Ich habe zwei Kinder: einen Sohn und eine Tochter.", "عندي طفلين: ابن وبنت."],
        ["Unser Hund heißt Max.", "كلبنا اسمه ماكس."]
      ], [
        ["Lea", "Wer ist das auf dem Foto, Karim?", "مين ده في الصورة يا كريم؟"],
        ["Karim", "Das ist meine Familie. Hier sind meine Eltern.", "دي عيلتي. هنا أهلي."],
        ["Lea", "Und wer ist der Mann links?", "ومين الراجل على الشمال؟"],
        ["Karim", "Das ist mein Onkel. Er ist Arzt.", "ده عمي. هو دكتور."],
        ["Lea", "Hast du Geschwister?", "عندك إخوات؟"],
        ["Karim", "Ja, ich habe einen Bruder und zwei Schwestern.", "أيوه، عندي أخ واتنين أخوات."]
      ], "Zeige ein Familienfoto (oder zeichne es) und stelle drei Personen vor: Name, Beruf, Alter.", "اعرض صورة عيلتك (أو ارسمها) وعرّف بتلات أشخاص: الاسم والمهنة والعمر."),
      S("Einen Termin telefonisch vereinbaren", "حجز ميعاد بالتليفون", [
        ["Praxis Dr. Klein, guten Tag.", "عيادة دكتور كلاين، مساء الخير."],
        ["Guten Tag, ich hätte gern einen Termin.", "مساء الخير، عايز أحجز ميعاد."],
        ["Haben Sie am Montag Zeit?", "عندك وقت يوم الاتنين؟"],
        ["Nein, da kann ich leider nicht. Da muss ich arbeiten.", "لا للأسف مش هينفع. لازم أشتغل ساعتها."],
        ["Geht es am Dienstag um 15 Uhr?", "ينفع التلات الساعة 3؟"],
        ["Ja, das geht.", "أيوه ينفع."],
        ["Wie ist Ihr Name, bitte?", "ممكن اسم حضرتك؟"],
        ["Bis Dienstag!", "أشوفك الثلاثاء!"]
      ], [
        ["Rezeption", "Praxis Dr. Klein, guten Tag.", "عيادة دكتور كلاين، مساء الخير."],
        ["Patient", "Guten Tag. Ich hätte gern einen Termin.", "مساء الخير. عايز أحجز ميعاد."],
        ["Rezeption", "Können Sie am Mittwoch um zehn Uhr kommen?", "ينفع تيجي الأربع الساعة 10؟"],
        ["Patient", "Nein, da kann ich leider nicht. Geht es am Donnerstag?", "لا للأسف مش هينفع. ينفع الخميس؟"],
        ["Rezeption", "Ja, am Donnerstag um 14 Uhr 15.", "أيوه، الخميس الساعة 2:15."],
        ["Patient", "Das passt. Vielen Dank! Auf Wiederhören!", "ده مناسب. شكرًا جزيلًا! مع السلامة!"]
      ], "Rufe in einer Praxis oder beim Friseur an und vereinbare einen Termin. Ein Tag passt nicht, ein anderer passt.", "كلّم عيادة أو حلاق واحجز ميعاد. يوم مش مناسب ويوم تاني مناسب."),
      S("Sich für eine Verspätung entschuldigen", "الاعتذار عن التأخير", [
        ["Entschuldigung, ich bin zu spät.", "آسف، أنا متأخر."],
        ["Es tut mir leid.", "أنا آسف."],
        ["Der Bus hatte Verspätung.", "الأتوبيس اتأخر."],
        ["Ich bitte um Entschuldigung.", "أطلب العذر."],
        ["Kein Problem. Kommen Sie herein.", "مفيش مشكلة. اتفضل ادخل."],
        ["Schon gut. Wir fangen jetzt an.", "ولا يهمك. هنبدأ دلوقتي."],
        ["Das nächste Mal bitte pünktlich!", "المرة الجاية في الميعاد من فضلك!"],
        ["Ja, natürlich. Das kommt nicht wieder vor.", "طبعًا. مش هتتكرر."]
      ], [
        ["Lehrerin", "Guten Morgen, Tarek. Es ist schon Viertel nach acht.", "صباح الخير يا طارق. الساعة بقت 8:15."],
        ["Tarek", "Entschuldigung, ich bin zu spät. Es tut mir leid.", "آسف، أنا متأخر. أنا آسف بجد."],
        ["Lehrerin", "Was ist denn passiert?", "حصل إيه؟"],
        ["Tarek", "Mein Bus hatte zehn Minuten Verspätung.", "الأتوبيس اتأخر عشر دقايق."],
        ["Lehrerin", "Kein Problem. Setzen Sie sich bitte.", "مفيش مشكلة. اتفضل اقعد."],
        ["Tarek", "Danke. Ich bin das nächste Mal pünktlich.", "شكرًا. المرة الجاية هاكون في الميعاد."]
      ], "Du kommst zu spät zu einem Treffen. Entschuldige dich und nenne einen Grund. Dein Partner reagiert.", "إنت اتأخرت على لقاء. اعتذر وقول السبب. وشريكك يرد."),
      S("Sich verabreden: können, müssen, wollen", "الاتفاق على ميعاد: können وmüssen وwollen", [
        ["Kannst du am Samstag?", "تقدر السبت؟"],
        ["Ich kann leider nicht. Ich muss arbeiten.", "للأسف مش هقدر. لازم أشتغل."],
        ["Wollen wir joggen gehen?", "تحب نروح نجري؟"],
        ["Ja, gern! Um wie viel Uhr?", "أيوه بكل سرور! الساعة كام؟"],
        ["Um halb neun, im Park.", "الساعة 8:30 في الحديقة."],
        ["Ich muss vorher noch einkaufen.", "لازم أشتري حاجات قبلها."],
        ["Kannst du um neun Uhr?", "تقدر الساعة 9؟"],
        ["Ja, das geht. Bis dann!", "أيوه ينفع. أشوفك وقتها!"]
      ], [
        ["Max", "Hi Bea! Wir wollen am Sonntag zusammen joggen gehen. Kommst du mit?", "هاي بيا! عايزين نجري مع بعض يوم الأحد. هتيجي؟"],
        ["Bea", "Am Sonntag kann ich leider nicht. Ich muss meine Oma besuchen.", "يوم الأحد للأسف مش هقدر. لازم أزور جدتي."],
        ["Max", "Und am Samstag? Kannst du da?", "والسبت؟ تقدري ساعتها؟"],
        ["Bea", "Ja, am Samstag habe ich Zeit.", "أيوه، السبت عندي وقت."],
        ["Max", "Super! Um neun Uhr im Park?", "تمام! الساعة 9 في الحديقة؟"],
        ["Bea", "Okay, bis Samstag!", "ماشي، أشوفك السبت!"]
      ], "Verabredet euch für das Wochenende. Benutze „können“, „müssen“ und „wollen“ je einmal.", "اتفقوا على ميعاد في الويك إند. استخدم können وmüssen وwollen مرة لكل واحد.")
    ],

    /* ---------- Kapitel 6 ---------- */
    6: [
      S("Zu einer Geburtstagsparty einladen", "دعوة لحفلة عيد ميلاد", [
        ["Ich habe am Samstag Geburtstag.", "عيد ميلادي يوم السبت."],
        ["Ich mache eine Party. Ich lade dich ein!", "هاعمل حفلة. وباعزمك!"],
        ["Die Party ist am 14. Juni um 18 Uhr.", "الحفلة يوم 14 يونيو الساعة 6 مساءً."],
        ["Kommst du? – Ja, gerne!", "هتيجي؟ – أيوه بكل سرور!"],
        ["Kannst du etwas zu trinken mitbringen?", "ممكن تجيب حاجة للشرب؟"],
        ["Ja, ich bringe Saft mit.", "أيوه، هاجيب عصير."],
        ["Danke für die Einladung!", "شكرًا على الدعوة!"],
        ["Hoffentlich hast du Zeit.", "يا رب يكون عندك وقت."]
      ], [
        ["Lena", "Hallo Max! Am Samstag habe ich Geburtstag.", "هاي ماكس! يوم السبت عيد ميلادي."],
        ["Max", "Alles Gute zum Geburtstag!", "كل سنة وإنتي طيبة!"],
        ["Lena", "Danke! Ich mache eine Party. Ich lade dich herzlich ein.", "شكرًا! هاعمل حفلة. وباعزمك من قلبي."],
        ["Max", "Gern! Wann und wo ist die Party?", "بكل سرور! إمتى وفين الحفلة؟"],
        ["Lena", "Am Samstag um 18 Uhr bei mir. Kannst du Salat mitbringen?", "السبت الساعة 6 عندي. ممكن تجيب سلطة؟"],
        ["Max", "Ja, klar. Ich bringe auch ein Geschenk mit.", "أكيد. وهاجيب هدية كمان."]
      ], "Schreibe eine Einladung zu deiner Party (Datum, Uhrzeit, Ort, mitbringen) und lade einen Partner mündlich ein.", "اكتب دعوة لحفلتك (التاريخ والساعة والمكان وإيه اللي يجيبه) واعزم شريك شفهيًا."),
      S("Im Restaurant bestellen", "الطلب في المطعم", [
        ["Die Speisekarte, bitte.", "المنيو من فضلك."],
        ["Was möchten Sie trinken?", "تحب تشرب إيه؟"],
        ["Für mich bitte ein Wasser.", "ليا مية من فضلك."],
        ["Ich hätte gern einen Apfelsaft.", "عايز عصير تفاح."],
        ["Ich nehme das Schnitzel mit Pommes.", "هاخد الشنيتزل بالبطاطس."],
        ["Für mich bitte eine Tomatensuppe.", "ليا شوربة طماطم من فضلك."],
        ["Möchten Sie auch ein Dessert?", "تحب حلو كمان؟"],
        ["Danke, das ist alles.", "شكرًا، ده كل حاجة."]
      ], [
        ["Kellnerin", "Guten Abend! Hier ist die Speisekarte. Was möchten Sie trinken?", "مساء الخير! دي المنيو. تحبوا تشربوا إيه؟"],
        ["Gast", "Ich hätte gern eine Cola. Und für meine Freundin ein Wasser.", "عايز كولا. ولصاحبتي مية."],
        ["Kellnerin", "Gern. Möchten Sie schon essen?", "حاضر. تحبوا تطلبوا أكل دلوقتي؟"],
        ["Gast", "Ja, ich nehme die Pizza. Und für sie eine Suppe.", "أيوه، هاخد البيتزا. وليها شوربة."],
        ["Kellnerin", "Sehr gern. Sonst noch etwas?", "حاضر. حاجة تانية؟"],
        ["Gast", "Nein, danke. Das ist alles.", "لا شكرًا. ده كل حاجة."]
      ], "Spielt eine Restaurant-Szene zu dritt: zwei Gäste und ein Kellner. Bestellt Getränke und Essen.", "مثّلوا مشهد مطعم تلاتة: ضيفين وجرسون. اطلبوا مشروبات وأكل."),
      S("Im Restaurant bezahlen", "الدفع في المطعم", [
        ["Entschuldigung, wir möchten bitte zahlen.", "لو سمحت، عايزين الحساب."],
        ["Zusammen oder getrennt?", "مع بعض ولا كل واحد لوحده؟"],
        ["Zusammen, bitte.", "مع بعض من فضلك."],
        ["Das macht zusammen 26 Euro 50.", "الحساب مع بعض 26 يورو و50 سنت."],
        ["Getrennt, bitte. Ich zahle die Suppe.", "كل واحد لوحده. أنا هادفع حساب الشوربة."],
        ["Stimmt so!", "الباقي ليك!"],
        ["Hier sind 30 Euro.", "اتفضل 30 يورو."],
        ["Vielen Dank! Schönen Abend noch!", "شكرًا جزيلًا! أمسية سعيدة!"]
      ], [
        ["Gast", "Entschuldigung, können wir bitte zahlen?", "لو سمحت، ممكن ندفع؟"],
        ["Kellner", "Natürlich. Zusammen oder getrennt?", "طبعًا. مع بعض ولا كل واحد لوحده؟"],
        ["Gast", "Zusammen, bitte.", "مع بعض من فضلك."],
        ["Kellner", "Das macht 38 Euro 40.", "الحساب 38 يورو و40 سنت."],
        ["Gast", "Hier sind 40 Euro. Stimmt so!", "اتفضل 40 يورو. الباقي ليك!"],
        ["Kellner", "Vielen Dank und einen schönen Abend!", "شكرًا جزيلًا وأمسية سعيدة!"]
      ], "Du bezahlst im Restaurant. Bitte um die Rechnung, sage „zusammen“ oder „getrennt“ und gib Trinkgeld.", "إنت بتدفع في المطعم. اطلب الحساب وقول „zusammen“ أو „getrennt“ وادّي بقشيش."),
      S("Über ein Ereignis sprechen", "الكلام عن حدث", [
        ["Wie war die Party?", "الحفلة كانت إزاي؟"],
        ["Sie war super!", "كانت رائعة!"],
        ["Das Essen war lecker.", "الأكل كان لذيذ."],
        ["Die Musik war nicht so gut.", "الموسيقى ماكانتش حلوة أوي."],
        ["Hattet ihr viel Spaß?", "استمتعتوا كتير؟"],
        ["Ja, wir hatten viel Spaß.", "أيوه، استمتعنا جدًا."],
        ["Leider war das Wetter nicht gut.", "للأسف الجو ماكانش كويس."],
        ["Es war ein schöner Abend.", "كانت أمسية جميلة."]
      ], [
        ["Anna", "Hallo Tim! Wie war deine Geburtstagsparty gestern?", "هاي تيم! حفلة عيد ميلادك امبارح كانت إزاي؟"],
        ["Tim", "Sie war toll! Wir waren fünfzehn Personen.", "كانت رائعة! كنا خمستاشر شخص."],
        ["Anna", "Und das Essen? War das gut?", "والأكل؟ كان حلو؟"],
        ["Tim", "Ja, das Essen war lecker. Wir hatten viel Spaß.", "أيوه، الأكل كان لذيذ. استمتعنا كتير."],
        ["Anna", "Wie war die Musik?", "والموسيقى كانت إزاي؟"],
        ["Tim", "Auch super. Und das Wetter war schön – wir waren im Garten.", "برضه رائعة. والجو كان جميل – كنا في الجنينة."]
      ], "Erzähle von einem Fest oder einem Ausflug: Wie war das Essen, das Wetter, die Musik? Benutze „war“ und „hatte“.", "احكي عن حفلة أو رحلة: الأكل والجو والموسيقى كانوا إزاي؟ استخدم war وhatte."),
      S("Veranstaltungstipps und Karten", "نصايح عن الفعاليات والتذاكر", [
        ["Was ist am Wochenende los?", "فيه إيه في الويك إند؟"],
        ["Am Freitag ist ein Open-Air-Kino am See.", "يوم الجمعة في سينما في الهواء الطلق عند البحيرة."],
        ["Der Eintritt kostet sechs Euro.", "الدخول بـ 6 يورو."],
        ["Das Konzert beginnt um 20 Uhr.", "الحفلة بتبدأ الساعة 8 مساءً."],
        ["Eine Karte für das Konzert kostet 49 Euro.", "تذكرة الحفلة بـ 49 يورو."],
        ["Kommst du mit? – Klar!", "هتيجي معانا؟ – أكيد!"],
        ["Ich lade dich ein. Die Karte ist ein Geschenk.", "أنا باعزمك. التذكرة هدية."],
        ["Treffen wir uns um sieben am Eingang?", "نتقابل الساعة 7 عند المدخل؟"]
      ], [
        ["Sofia", "Hast du schon einen Plan für das Wochenende?", "عندك خطة للويك إند؟"],
        ["Max", "Nein. Was ist denn los?", "لأ. فيه إيه؟"],
        ["Sofia", "Am Samstag ist Museumsnacht. Alle Museen sind bis Mitternacht offen.", "السبت ليلة المتاحف. كل المتاحف مفتوحة لحد منتصف الليل."],
        ["Max", "Super! Was kostet die Karte?", "رائع! التذكرة بكام؟"],
        ["Sofia", "Zwölf Euro. Ich lade dich ein.", "12 يورو. أنا باعزمك."],
        ["Max", "Danke! Treffen wir uns um sieben am Hauptbahnhof?", "شكرًا! نتقابل الساعة 7 في المحطة الرئيسية؟"]
      ], "Wähle eine Veranstaltung (Kino, Konzert, Museumsnacht) und lade einen Freund ein. Nenne Tag, Uhrzeit, Preis und Treffpunkt.", "اختر فعالية (سينما أو حفلة أو ليلة المتاحف) واعزم صاحبك. قول اليوم والساعة والسعر ومكان اللقاء.")
    ],
  };

  (function mergeA1Conversations() {
    if (!Array.isArray(window.A1_BOOK)) return;
    window.A1_BOOK.forEach(chapter => {
      const situations = window.A1_CONVERSATIONS[chapter.num];
      if (!situations) return;
      chapter.conversations = situations;
      chapter.redemittel = chapter.redemittel || [];
      situations.forEach(item => {
        if (chapter.redemittel.some(group => group.cat === item.situation)) return;
        chapter.redemittel.push({ cat: item.situation, catAr: item.situationAr, items: item.phrases });
      });
    });
  })();
})();
