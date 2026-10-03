/* Lesson sections for Netzwerk neu A1.1, chapters 1-6: goals, reading texts with
   comprehension questions, ready-made phrases (Redemittel), speaking tasks and a quiz.
   Loaded after data_a11_vocab.js. All texts are original learning texts that follow the
   topics and communicative goals of the coursebook chapters. */
(function enrichA11Lessons(){
  const G = (de, ar) => ({ de, ar });
  const R = (cat, catAr, items) => ({ cat, catAr, items: items.map(([de, ar]) => ({ de, ar })) });
  const Q = (q, o, a, fb, fbAr) => ({ q, o, a, fb, fbAr });
  const RD = (kind, title, text, ar, questions) => ({ kind, title, text, ar, questions });
  const content = {};

  /* ---------- Kapitel 1 ---------- */
  content[1] = {
    intro: "In diesem Kapitel lernst du, Menschen zu begrüßen und dich vorzustellen. Du fragst nach Namen, Herkunft, Wohnort und Sprachen, nennst Zahlen bis 20, Telefonnummern und E-Mail-Adressen und buchstabierst Wörter.",
    introAr: "في الوحدة دي هتتعلم تسلّم على الناس وتعرّف بنفسك. هتسأل عن الاسم والبلد ومكان السكن واللغات، وتقول الأرقام لحد 20 ورقم التليفون والإيميل، وتهجّي الكلمات.",
    badges: ["Begrüßung", "Vorstellung", "W-Fragen", "Verben im Präsens", "Zahlen 0–20", "Alphabet", "Länder und Sprachen"],
    goals: [
      G("Grüßen und sich verabschieden", "تسلّم وتودّع"),
      G("Sich und andere vorstellen", "تعرّف بنفسك وبغيرك"),
      G("Nach dem Befinden fragen und darauf reagieren", "تسأل عن الحال وترد"),
      G("Über Herkunft, Wohnort und Sprachen sprechen", "تتكلم عن بلدك ومكان سكنك ولغاتك"),
      G("Zahlen bis 20, Telefonnummer und E-Mail-Adresse nennen", "تقول الأرقام لحد 20 ورقم التليفون والإيميل"),
      G("Wörter buchstabieren", "تهجّي الكلمات"),
      G("Grammatik: W-Frage, Aussagesatz, Verben und Personalpronomen", "القواعد: أسئلة W والجملة الخبرية والأفعال والضمائر")
    ],
    readings: [
      RD("Steckbriefe", "Vier Personen im Deutschkurs",
        "Carlos kommt aus Spanien, aus Madrid. Er wohnt jetzt in Köln. Er spricht Spanisch, Englisch und ein bisschen Deutsch.<br><br>Yuki kommt aus Japan, aus Tokio. Sie wohnt in Berlin. Sie spricht Japanisch und Englisch. Sie lernt Deutsch.<br><br>Amira kommt aus Ägypten, aus Kairo. Sie wohnt in Hamburg. Sie spricht Arabisch, Englisch und Deutsch.<br><br>Piotr kommt aus Polen und wohnt in Wien. Er spricht Polnisch, Russisch und Deutsch.",
        "كارلوس من إسبانيا، من مدريد. ساكن دلوقتي في كولن. بيتكلم إسباني وإنجليزي وشوية ألماني.<br><br>يوكي من اليابان، من طوكيو. ساكنة في برلين. بتتكلم ياباني وإنجليزي وبتتعلم ألماني.<br><br>أميرة من مصر، من القاهرة. ساكنة في هامبورغ. بتتكلم عربي وإنجليزي وألماني.<br><br>بيوتر من بولندا وساكن في فيينا. بيتكلم بولندي وروسي وألماني.",
        [["Woher kommt Yuki?", "Aus Japan, aus Tokio."], ["Wo wohnt Carlos?", "In Köln."], ["Welche Sprachen spricht Amira?", "Arabisch, Englisch und Deutsch."], ["Wer wohnt in Wien?", "Piotr."]]),
      RD("E-Mail", "Eine E-Mail an die Kursleiterin",
        "Betreff: Anmeldung<br><br>Guten Tag, Frau Weber,<br>mein Name ist Ana Silva. Ich komme aus Brasilien und wohne in Frankfurt. Ich spreche Portugiesisch, Spanisch und ein bisschen Englisch. Ich lerne Deutsch. Meine Handynummer ist 0171 5551234. Meine E-Mail-Adresse ist ana.silva@mail-beispiel.de.<br><br>Viele Grüße<br>Ana Silva",
        "الموضوع: التسجيل<br><br>مساء الخير أستاذة فيبر،<br>اسمي آنا سيلفا. أنا من البرازيل وساكنة في فرانكفورت. باتكلم برتغالي وإسباني وشوية إنجليزي. باتعلم ألماني. رقم موبايلي 0171 5551234. وإيميلي ana.silva@mail-beispiel.de.<br><br>مع خالص التحية<br>آنا سيلفا",
        [["Wie heißt die Frau?", "Ana Silva."], ["Woher kommt Ana?", "Aus Brasilien."], ["Wo wohnt sie?", "In Frankfurt."], ["Wie ist Anas Handynummer?", "0171 5551234."]]),
      RD("Dialog", "Hallo und Tschüs im Café",
        "Lena: Hallo, ich bin Lena. Und du?<br>Tom: Hallo Lena, ich heiße Tom. Wie geht's?<br>Lena: Danke, gut. Und dir?<br>Tom: Auch gut, danke. Woher kommst du?<br>Lena: Ich komme aus Österreich, aus Graz. Und du?<br>Tom: Ich komme aus der Schweiz, aus Bern. Und wo wohnst du?<br>Lena: Ich wohne jetzt in München.<br>Tom: Aha. Tschüs, Lena! Bis bald!<br>Lena: Tschüs, Tom!",
        "لينا: أهلا، أنا لينا. وإنت؟<br>توم: أهلا لينا، اسمي توم. إزيك؟<br>لينا: الحمد لله كويسة. وإنت؟<br>توم: أنا كمان كويس، شكرًا. إنتي منين؟<br>لينا: أنا من النمسا، من غراتس. وإنت؟<br>توم: أنا من سويسرا، من برن. وإنتي ساكنة فين؟<br>لينا: ساكنة دلوقتي في ميونخ.<br>توم: آها. سلام يا لينا! أشوفك قريب!<br>لينا: سلام يا توم!",
        [["Woher kommt Lena?", "Aus Österreich, aus Graz."], ["Woher kommt Tom?", "Aus der Schweiz, aus Bern."], ["Wo wohnt Lena jetzt?", "In München."], ["Wie fragt Tom nach dem Befinden?", "Wie geht's?"]])
    ],
    redemittel: [
      R("Grüßen und verabschieden", "التحية والوداع", [
        ["Hallo! / Guten Morgen! / Guten Tag! / Guten Abend!", "أهلا! / صباح الخير! / نهارك سعيد! / مساء الخير!"],
        ["Gute Nacht!", "تصبح على خير!"],
        ["Auf Wiedersehen! / Tschüs! / Ciao!", "مع السلامة! / سلام! / باي!"],
        ["Bis bald! / Bis später!", "أشوفك قريب! / أشوفك بعدين!"]
      ]),
      R("Sich und andere vorstellen", "التعريف بنفسك وبغيرك", [
        ["Wie heißt du? – Ich heiße Niklas.", "اسمك إيه؟ – اسمي نيكلاس."],
        ["Wie heißen Sie? – Mein Name ist Nina Weber.", "حضرتك اسمك إيه؟ – اسمي نينا فيبر."],
        ["Wer bist du? – Ich bin Julia.", "إنت مين؟ – أنا يوليا."],
        ["Das ist Frau Kowalski. / Das ist Herr Hansen.", "دي السيدة كوفالسكي. / ده السيد هانزن."],
        ["Entschuldigung, wie heißt du?", "لو سمحت، اسمك إيه؟"]
      ]),
      R("Nach dem Befinden fragen", "السؤال عن الحال", [
        ["Wie geht's? / Wie geht es dir?", "إزيك؟ / عامل إيه؟"],
        ["Wie geht es Ihnen?", "حضرتك عامل إيه؟"],
        ["Danke, sehr gut! / Danke, gut. / Ganz gut.", "الحمد لله ممتاز! / كويس. / كويس نوعًا ما."],
        ["Und dir? / Und Ihnen?", "وإنت؟ / وحضرتك؟"]
      ]),
      R("Über Herkunft, Wohnort und Sprachen sprechen", "الكلام عن البلد والسكن واللغات", [
        ["Woher kommst du? / Woher kommen Sie?", "إنت منين؟ / حضرتك منين؟"],
        ["Ich komme aus Ägypten.", "أنا من مصر."],
        ["Wo wohnst du? – Ich wohne in Hamburg.", "إنت ساكن فين؟ – أنا ساكن في هامبورغ."],
        ["Welche Sprachen sprichst du?", "بتتكلم لغات إيه؟"],
        ["Ich spreche Arabisch und Englisch. Ich lerne Deutsch.", "باتكلم عربي وإنجليزي. وباتعلم ألماني."]
      ]),
      R("Telefonnummer und E-Mail-Adresse", "رقم التليفون والإيميل", [
        ["Wie ist deine Telefonnummer?", "رقم تليفونك كام؟"],
        ["Wie ist Ihre E-Mail-Adresse?", "إيميل حضرتك إيه؟"],
        ["Meine Handynummer ist 0171 – 5551234.", "رقم موبايلي 0171 – 5551234."],
        ["Man schreibt „@“ und sagt „at“; „.“ sagt man „Punkt“.", "الرمز @ بنقول عليه at، والنقطة بنقول عليها Punkt."]
      ]),
      R("Nachfragen im Kurs", "الاستفسار في الكورس", [
        ["Wie bitte?", "نعم؟ / ممكن تعيد؟"],
        ["Entschuldigung, noch einmal bitte.", "لو سمحت، مرة تانية."],
        ["Bitte ein bisschen langsamer.", "من فضلك أبطأ شوية."],
        ["Das verstehe ich nicht.", "أنا مش فاهم ده."],
        ["Kannst du das buchstabieren?", "ممكن تهجّيها؟"]
      ])
    ],
    speaking: {
      questions: [
        G("Wie heißt du?", "اسمك إيه؟"),
        G("Woher kommst du und wo wohnst du?", "إنت منين وساكن فين؟"),
        G("Welche Sprachen sprichst du?", "بتتكلم لغات إيه؟"),
        G("Wie ist deine Handynummer?", "رقم موبايلك كام؟"),
        G("Buchstabiere deinen Namen.", "هجّي اسمك.")
      ],
      model: "Hallo, ich heiße Ahmed Hassan. Ich komme aus Ägypten, aus Kairo. Jetzt wohne ich in Hamburg. Ich spreche Arabisch und Englisch. Ich lerne Deutsch. Meine Handynummer ist 0171 8264731. Mein Name buchstabiert man: A – H – M – E – D.",
      modelAr: "أهلا، اسمي أحمد حسن. أنا من مصر، من القاهرة. ساكن دلوقتي في هامبورغ. باتكلم عربي وإنجليزي وباتعلم ألماني. رقم موبايلي 0171 8264731. واسمي بيتهجّى: A – H – M – E – D."
    },
    quiz: [
      Q("Wie ___ du?", ["heißt", "heiße", "heißen"], 0, "Zu „du“ passt die Endung -st: du heißt.", "مع du بنستخدم النهاية -st: du heißt."),
      Q("Ich ___ aus Ägypten.", ["komme", "kommst", "kommt"], 0, "Zu „ich“ passt -e: ich komme.", "مع ich بنستخدم -e: ich komme."),
      Q("___ wohnen Sie? – In Hamburg.", ["Woher", "Wo", "Wer"], 1, "Nach dem Ort fragt man mit „Wo“.", "للسؤال عن المكان بنقول Wo."),
      Q("Yuki ___ aus Japan.", ["komme", "kommt", "kommen"], 1, "Zu „sie“ (Singular) passt -t: sie kommt.", "مع sie المفرد بنستخدم -t: sie kommt."),
      Q("Welche Zahl ist „dreizehn“?", ["13", "30", "3"], 0, "dreizehn = 13, dreißig = 30.", "dreizehn = 13 وdreißig = 30."),
      Q("Du verstehst etwas nicht. Was sagst du?", ["Wie bitte? Noch einmal, bitte.", "Guten Abend.", "Ich heiße Max."], 0, "Mit „Wie bitte?“ bittest du um Wiederholung.", "بـ Wie bitte? بتطلب إن حد يعيد."),
      Q("„Wie geht's?“ – Welche Antwort passt?", ["Danke, gut.", "Ich heiße Anna.", "Aus Spanien."], 0, "Auf die Frage nach dem Befinden antwortet man mit „Danke, gut.“", "على السؤال عن الحال بنرد: Danke, gut."),
      Q("Formelle Frage: Wie ___ Sie?", ["heißt", "heißen", "heiße"], 1, "Zu „Sie“ passt dieselbe Form wie bei „wir“: Sie heißen.", "مع Sie الفعل بيبقى زي wir: Sie heißen.")
    ]
  };

  /* ---------- Kapitel 2 ---------- */
  content[2] = {
    intro: "Hier sprichst du über Hobbys, verabredest dich und nennst die Wochentage. Du erzählst von Arbeit, Beruf und Arbeitszeiten, nennst Zahlen ab 20 und füllst ein Formular aus.",
    introAr: "هنا هتتكلم عن الهوايات، وتتفق على ميعاد، وتقول أيام الأسبوع. هتحكي عن الشغل والمهنة ومواعيد العمل، وتقول الأرقام من 20 وتملا استمارة.",
    badges: ["Hobbys", "Wochentage", "Zahlen ab 20", "Berufe", "Ja-/Nein-Frage", "der, das, die", "Plural", "haben und sein"],
    goals: [
      G("Über Hobbys sprechen", "تتكلم عن هواياتك"),
      G("Sich verabreden", "تتفق على ميعاد"),
      G("Wochentage nennen", "تقول أيام الأسبوع"),
      G("Über Arbeit, Beruf und Arbeitszeiten sprechen", "تتكلم عن الشغل والمهنة ومواعيد العمل"),
      G("Zahlen ab 20 nennen", "تقول الأرقام من 20 فما فوق"),
      G("Ein Formular ausfüllen", "تملا استمارة"),
      G("Grammatik: Ja-/Nein-Frage, Artikel, Plural, haben und sein", "القواعد: سؤال نعم/لا، أدوات التعريف، الجمع، haben وsein")
    ],
    readings: [
      RD("Aushang", "Neu im Sportclub Alster",
        "Willkommen im Sportclub Alster!<br><br>Montag, 18 Uhr: Yoga<br>Dienstag, 19 Uhr: Zumba<br>Mittwoch, 17 Uhr: Karate für Kinder<br>Donnerstag, 20 Uhr: Tennis<br>Samstag, 10 Uhr: Schwimmen im Schwimmbad<br><br>Sonntag haben wir frei. Neue Mitglieder zahlen im ersten Monat nur 20 Euro. Fragen? Telefon: 040 – 55 66 77.",
        "أهلا بيكم في نادي ألستر الرياضي!<br><br>الاتنين الساعة 6 مساءً: يوجا<br>التلات الساعة 7: زومبا<br>الأربع الساعة 5: كاراتيه للأطفال<br>الخميس الساعة 8: تنس<br>السبت الساعة 10: سباحة في حمّام السباحة<br><br>يوم الأحد إجازة. الأعضاء الجدد بيدفعوا في أول شهر 20 يورو بس. أسئلة؟ تليفون: 040 – 55 66 77.",
        [["Wann ist Yoga?", "Am Montag um 18 Uhr."], ["Was kann man am Donnerstag machen?", "Tennis spielen."], ["Wann hat der Club frei?", "Am Sonntag."], ["Wie viel zahlen neue Mitglieder im ersten Monat?", "20 Euro."]]),
      RD("Profil", "Murat ist Taxifahrer",
        "Ich heiße Murat Yilmaz. Ich bin 34 Jahre alt und komme aus der Türkei. Jetzt wohne ich in Köln. Ich bin Taxifahrer. Ich arbeite von Montag bis Freitag, von 14 bis 22 Uhr. Am Samstag und am Sonntag habe ich frei. Dann spiele ich Fußball und koche gern mit meiner Frau. Sie ist Krankenpflegerin und arbeitet nachts.",
        "اسمي مراد يلماز. عندي 34 سنة ومن تركيا. ساكن دلوقتي في كولن. أنا سواق تاكسي. باشتغل من الاتنين للجمعة من الساعة 2 الضهر لحد 10 بالليل. السبت والأحد عندي إجازة. ساعتها بالعب كورة وبحب أطبخ مع مراتي. هي ممرضة وبتشتغل بالليل.",
        [["Was ist Murat von Beruf?", "Taxifahrer."], ["Wann arbeitet er?", "Von Montag bis Freitag, von 14 bis 22 Uhr."], ["Was macht er am Wochenende?", "Er spielt Fußball und kocht gern."], ["Was ist seine Frau von Beruf?", "Krankenpflegerin."]]),
      RD("Chat", "Gehen wir ins Kino?",
        "Nora: Hallo Jan! Gehen wir am Freitag ins Kino?<br>Jan: Hi Nora! Am Freitag? Nein, leider nicht. Da arbeite ich.<br>Nora: Und am Samstag?<br>Jan: Am Samstag habe ich frei. Ja, super! Um wie viel Uhr?<br>Nora: Um 20 Uhr. Treffen wir uns am Bahnhof?<br>Jan: Okay, bis Samstag!",
        "نورا: أهلا يان! نروح السينما يوم الجمعة؟<br>يان: هاي نورا! الجمعة؟ لا للأسف مش هينفع. بكون في الشغل.<br>نورا: طيب والسبت؟<br>يان: السبت عندي إجازة. أيوه تمام! الساعة كام؟<br>نورا: الساعة 8 مساءً. نتقابل عند المحطة؟<br>يان: ماشي، أشوفك السبت!",
        [["Warum geht Jan am Freitag nicht ins Kino?", "Er arbeitet am Freitag."], ["Welcher Tag passt für beide?", "Der Samstag."], ["Um wie viel Uhr treffen sie sich?", "Um 20 Uhr."], ["Wo treffen sie sich?", "Am Bahnhof."]])
    ],
    redemittel: [
      R("Über Hobbys sprechen", "الكلام عن الهوايات", [
        ["Was machst du gern?", "بتحب تعمل إيه؟"],
        ["Ich reise gern. / Ich koche gern.", "بحب أسافر. / بحب أطبخ."],
        ["Hörst du gern Musik? – Ja, sehr gern.", "بتحب تسمع موسيقى؟ – أيوه، جدًا."],
        ["Gehst du gern ins Kino? – Nein, nicht so gern.", "بتحب تروح السينما؟ – لأ، مش أوي."],
        ["Liest du gern? – Es geht so.", "بتحب تقرأ؟ – عادي."]
      ]),
      R("Sich verabreden", "الاتفاق على ميعاد", [
        ["Gehen wir ins Kino?", "نروح السينما؟"],
        ["Wann gehen wir? – Am Montag.", "هنروح إمتى؟ – يوم الاتنين."],
        ["Am Freitag? – Nein, das geht leider nicht.", "يوم الجمعة؟ – لأ للأسف مش هينفع."],
        ["Ja, super! / Ja, gern!", "أيوه، تمام! / أيوه، بكل سرور!"]
      ]),
      R("Über Arbeit und Beruf sprechen", "الكلام عن الشغل والمهنة", [
        ["Was bist du von Beruf? – Ich bin Studentin.", "مهنتك إيه؟ – أنا طالبة."],
        ["Was machen Sie? – Ich studiere Informatik.", "حضرتك بتعمل إيه؟ – أنا بدرس كمبيوتر."],
        ["Wo arbeitest du? – Bei einer Firma in Köln.", "بتشتغل فين؟ – في شركة في كولن."],
        ["Wann arbeitest du? – Von Montag bis Freitag.", "بتشتغل إمتى؟ – من الاتنين للجمعة."],
        ["Wann hast du frei? – Am Samstag.", "إمتى بتبقى إجازة؟ – يوم السبت."]
      ]),
      R("Zahlen ab 20", "الأرقام من 20", [
        ["21 einundzwanzig, 22 zweiundzwanzig, 30 dreißig", "21 واحد وعشرين، 22 اتنين وعشرين، 30 تلاتين"],
        ["40 vierzig, 50 fünfzig, 60 sechzig", "40 أربعين، 50 خمسين، 60 ستين"],
        ["70 siebzig, 80 achtzig, 90 neunzig", "70 سبعين، 80 تمانين، 90 تسعين"],
        ["100 hundert, 1.000 tausend, 1.000.000 eine Million", "100 مية، 1000 ألف، 1000000 مليون"]
      ]),
      R("Ein Formular ausfüllen", "ملء استمارة", [
        ["Familienname, Vorname", "اسم العيلة، الاسم الأول"],
        ["Geburtsdatum und Geburtsort", "تاريخ الميلاد ومكان الميلاد"],
        ["Straße, Hausnummer, Postleitzahl, Wohnort", "الشارع، رقم المبنى، الرمز البريدي، مكان السكن"],
        ["Telefonnummer und E-Mail-Adresse", "رقم التليفون والإيميل"]
      ])
    ],
    speaking: {
      questions: [
        G("Was ist dein Hobby?", "هوايتك إيه؟"),
        G("Was bist du von Beruf? Wo arbeitest du?", "مهنتك إيه؟ وبتشتغل فين؟"),
        G("Wann hast du frei?", "إمتى عندك إجازة؟"),
        G("Verabrede dich mit einem Freund für Samstag.", "اتفق مع صاحبك على ميعاد يوم السبت."),
        G("Wie ist deine Postleitzahl und Hausnummer?", "إيه الرمز البريدي ورقم المبنى بتوعك؟")
      ],
      model: "Ich bin Ahmed und arbeite als Verkäufer in einem Supermarkt. Ich arbeite von Montag bis Freitag. Am Samstag und am Sonntag habe ich frei. Mein Hobby ist Fußball. Ich spiele auch gern Tennis, aber ich koche nicht so gern. Am Samstag gehe ich mit meinem Freund ins Kino.",
      modelAr: "أنا أحمد وباشتغل بائع في سوبر ماركت. باشتغل من الاتنين للجمعة. السبت والأحد عندي إجازة. هوايتي كرة القدم. وكمان بحب أعلب تنس، لكن مابحبش أطبخ أوي. يوم السبت هاروح السينما مع صاحبي."
    },
    quiz: [
      Q("___ du gern Musik? – Ja, sehr gern.", ["Hörst", "Hören", "Hört"], 0, "Ja-/Nein-Frage: Verb auf Position 1, zu „du“ passt -st: hörst.", "في سؤال نعم/لا الفعل في الأول، ومع du النهاية -st."),
      Q("Das ist ___ Stift.", ["der", "die", "das"], 0, "„Stift“ ist maskulin: der Stift.", "Stift مذكر: der Stift."),
      Q("Die Mehrzahl von „das Buch“ ist …", ["die Bücher", "die Buchs", "die Buchen"], 0, "das Buch → die Bücher (Umlaut + -er).", "الجمع: die Bücher."),
      Q("Ich ___ Studentin.", ["bin", "habe", "ist"], 0, "Beruf und Herkunft: sein → ich bin.", "للمهنة بنستخدم sein: ich bin."),
      Q("Ich ___ am Samstag frei.", ["habe", "bin", "hat"], 0, "frei haben: ich habe frei.", "frei haben: ich habe frei."),
      Q("Welche Zahl ist „vierundsechzig“?", ["64", "46", "74"], 0, "Erst die Einer, dann „und“, dann die Zehner: 4 + 60 = 64.", "الأحاد الأول ثم und ثم العشرات: 4 + 60 = 64."),
      Q("Wann arbeitest du? – ___ Montag bis Freitag.", ["Von", "Am", "Um"], 0, "von … bis … nennt einen Zeitraum.", "von … bis … بتحدد فترة."),
      Q("Gehen wir am Freitag ins Kino? – Antwort: Nein, ...", ["das geht leider nicht.", "ich heiße Max.", "ich bin Lehrer."], 0, "So lehnst du höflich ab.", "كده بترفض بأدب.")
    ]
  };

  /* ---------- Kapitel 3 ---------- */
  content[3] = {
    intro: "In Hamburg lernst du, Orte und Gebäude zu benennen, nach Dingen und nach dem Weg zu fragen und einen Weg zu beschreiben. Du nennst Verkehrsmittel, Monate und Jahreszeiten.",
    introAr: "في هامبورغ هتتعلم تسمّي الأماكن والمباني وتسأل عن الحاجات وعن الطريق وتوصف طريق. وهتقول وسائل المواصلات والشهور والفصول.",
    badges: ["Plätze und Gebäude", "Verkehrsmittel", "Wegbeschreibung", "Monate und Jahreszeiten", "ein, kein", "Imperativ mit Sie", "Adjektiv mit sein"],
    goals: [
      G("Plätze und Gebäude benennen", "تسمّي الأماكن والمباني"),
      G("Fragen zu Orten stellen und beantworten", "تسأل وتجاوب عن الأماكن"),
      G("Verkehrsmittel benennen", "تسمّي وسائل المواصلات"),
      G("Nach Dingen fragen", "تسأل عن الحاجات"),
      G("Nach dem Weg fragen und einen Weg beschreiben", "تسأل عن الطريق وتوصف طريق"),
      G("Jahreszeiten und Monate benennen", "تسمّي الفصول والشهور"),
      G("Grammatik: ein/kein, bestimmter Artikel, Imperativ mit Sie, Adjektiv mit sein", "القواعد: ein/kein، أداة التعريف، الأمر مع Sie، الصفة مع sein")
    ],
    readings: [
      RD("Reisetipp", "Ein Tag in Hamburg",
        "Hamburg ist eine große Stadt im Norden von Deutschland. Der Hafen ist sehr bekannt. Dort fahren viele Schiffe. Am Hafen gibt es Cafés und Restaurants. Das Rathaus ist alt und schön. Die Kirche hat einen hohen Turm: Er ist über 100 Meter hoch. Im Park und am See sitzen viele Leute. In Hamburg fährt man gut mit der S-Bahn, der U-Bahn und dem Bus. Im Juli ist es warm, im Winter ist es kalt und oft regnet es.",
        "هامبورغ مدينة كبيرة في شمال ألمانيا. الميناء مشهور جدًا. بتمشي فيه سفن كتير. عند الميناء في كافيهات ومطاعم. مبنى البلدية قديم وجميل. الكنيسة ليها برج عالي: ارتفاعه أكتر من 100 متر. في الحديقة وعلى البحيرة بيقعد ناس كتير. في هامبورغ بتتنقل كويس بالـ S-Bahn والمترو والأتوبيس. في يوليو الجو دافي، وفي الشتا بارد وبتمطر كتير.",
        [["Wo liegt Hamburg?", "Im Norden von Deutschland."], ["Was gibt es am Hafen?", "Cafés und Restaurants."], ["Wie hoch ist der Kirchturm?", "Über 100 Meter."], ["Wie fährt man in Hamburg gut?", "Mit der S-Bahn, der U-Bahn und dem Bus."]]),
      RD("Dialog", "Entschuldigung, wo ist der Bahnhof?",
        "Tourist: Entschuldigung, wo ist bitte der Bahnhof?<br>Frau: Das ist ganz einfach. Gehen Sie hier geradeaus bis zur Brücke. Dann gehen Sie rechts. Da ist die Kirche. Gehen Sie weiter bis zum Park. Der Bahnhof ist links.<br>Tourist: Also: geradeaus, dann rechts, dann links?<br>Frau: Ja, genau.<br>Tourist: Vielen Dank!<br>Frau: Bitte, gern!",
        "السائح: لو سمحت، فين المحطة؟<br>السيدة: بسيطة جدًا. امشي من هنا على طول لحد الكوبري. بعدين خد يمين. هتلاقي الكنيسة. كمّل لحد الحديقة. المحطة على الشمال.<br>السائح: يعني: على طول، بعدين يمين، بعدين شمال؟<br>السيدة: أيوه بالظبط.<br>السائح: شكرًا جزيلًا!<br>السيدة: العفو، بكل سرور!",
        [["Was sucht der Tourist?", "Den Bahnhof."], ["Wohin geht man bei der Brücke?", "Nach rechts."], ["Wo ist der Bahnhof?", "Links, nach dem Park."], ["Was sagt der Tourist am Ende?", "Vielen Dank!"]]),
      RD("Info", "Die Jahreszeiten in Deutschland",
        "In Deutschland gibt es vier Jahreszeiten. Der Frühling beginnt im März. Die Blumen blühen, und es wird warm. Im Sommer, von Juni bis August, ist es oft heiß. Viele Leute machen Urlaub und schwimmen im See. Im Herbst, von September bis November, regnet es oft, und die Blätter sind gelb und rot. Der Winter kommt im Dezember. Dann ist es kalt, und manchmal schneit es. Im Januar und Februar ist es am kältesten.",
        "في ألمانيا في أربع فصول. الربيع بيبدأ في مارس. الورد بيتفتح والجو بيدفى. في الصيف، من يونيو لأغسطس، الجو غالبًا حر. ناس كتير بتاخد أجازة وبتعوم في البحيرة. في الخريف، من سبتمبر لنوفمبر، بتمطر كتير وورق الشجر بيبقى أصفر وأحمر. الشتا بيجي في ديسمبر. ساعتها الجو بارد وساعات بتتلج. في يناير وفبراير بيبقى أبرد وقت.",
        [["Wann beginnt der Frühling?", "Im März."], ["Welche Monate hat der Sommer?", "Juni, Juli und August."], ["Wie ist das Wetter im Herbst?", "Es regnet oft."], ["Wann ist es am kältesten?", "Im Januar und Februar."]])
    ],
    redemittel: [
      R("Fragen zu Orten stellen und antworten", "الأسئلة عن الأماكن", [
        ["Was ist das? – Das ist der Hafen.", "إيه ده؟ – ده الميناء."],
        ["Ist das eine Kirche? – Ja, das ist die Michaeliskirche.", "دي كنيسة؟ – أيوه، دي كنيسة ميخائيل."],
        ["Ist das ein Hotel? – Nein, das ist das Rathaus.", "ده فندق؟ – لأ، ده مبنى البلدية."],
        ["Wo ist hier ein Café?", "فين كافيه هنا؟"]
      ]),
      R("Nach Dingen fragen", "السؤال عن الحاجات", [
        ["Ist das ein Bus? – Ja, das ist ein Bus.", "ده أتوبيس؟ – أيوه ده أتوبيس."],
        ["Ist das ein Auto? – Nein, das ist kein Auto.", "دي عربية؟ – لأ، دي مش عربية."],
        ["Das sind keine Schiffe.", "دول مش سفن."]
      ]),
      R("Nach dem Weg fragen", "السؤال عن الطريق", [
        ["Entschuldigung, wo ist bitte der Bahnhof?", "لو سمحت، فين المحطة؟"],
        ["Wie komme ich zum Hafen?", "أوصل للميناء إزاي؟"],
        ["Ist das weit von hier?", "هو بعيد من هنا؟"],
        ["Vielen Dank! – Bitte, gern!", "شكرًا جزيلًا! – العفو، بكل سرور!"]
      ]),
      R("Einen Weg beschreiben", "وصف طريق", [
        ["Gehen Sie geradeaus.", "امشي على طول."],
        ["Gehen Sie rechts / links.", "خد يمين / شمال."],
        ["Gehen Sie bis zur Brücke und dann rechts.", "امشي لحد الكوبري وبعدين يمين."],
        ["Das ist ganz einfach.", "ده بسيط جدًا."],
        ["Da ist der Bahnhof. – Ja, genau.", "المحطة هناك. – أيوه بالظبط."]
      ]),
      R("Verkehrsmittel", "وسائل المواصلات", [
        ["Ich fahre mit dem Bus / mit der U-Bahn / mit dem Fahrrad.", "باروح بالأتوبيس / بالمترو / بالعجلة."],
        ["Ich gehe zu Fuß.", "بامشي على رجلي."],
        ["Eine Fahrkarte, bitte.", "تذكرة من فضلك."]
      ]),
      R("Monate und Jahreszeiten", "الشهور والفصول", [
        ["Welcher Monat ist das? – Das ist der Mai.", "ده أنهي شهر؟ – ده مايو."],
        ["Im Sommer ist es warm, im Winter ist es kalt.", "في الصيف الجو دافي وفي الشتا بارد."],
        ["Meine Lieblingsjahreszeit ist der Herbst.", "فصلي المفضل هو الخريف."]
      ])
    ],
    speaking: {
      questions: [
        G("Was gibt es in deiner Stadt? Nenne drei Gebäude.", "إيه الموجود في مدينتك؟ اذكر تلات مباني."),
        G("Wie fährst du zur Arbeit oder zum Kurs?", "بتروح الشغل أو الكورس إزاي؟"),
        G("Beschreibe den Weg vom Bahnhof zu deiner Wohnung.", "وصّف الطريق من المحطة لشقتك."),
        G("Welche Jahreszeit magst du und warum?", "أنهي فصل بتحبه وليه؟"),
        G("In welchem Monat hast du Geburtstag?", "عيد ميلادك في أنهي شهر؟")
      ],
      model: "In meiner Stadt gibt es einen Bahnhof, einen Markt und ein Museum. Ich fahre mit dem Bus zum Kurs. Vom Bahnhof gehe ich geradeaus, dann links, und dort ist meine Wohnung. Ich mag den Sommer, weil es warm ist. Mein Geburtstag ist im Mai.",
      modelAr: "في مدينتي فيه محطة وسوق ومتحف. باروح الكورس بالأتوبيس. من المحطة بامشي على طول وبعدين شمال، وهناك شقتي. بحب الصيف عشان الجو دافي. عيد ميلادي في مايو."
    },
    quiz: [
      Q("Das ist ___ Hafen. (bestimmt)", ["der", "die", "das"], 0, "„Hafen“ ist maskulin: der Hafen.", "Hafen مذكر: der Hafen."),
      Q("Das ist ___ Brücke. (unbestimmt)", ["ein", "eine", "einen"], 1, "„Brücke“ ist feminin: eine Brücke.", "Brücke مؤنث: eine Brücke."),
      Q("Das ist ___ Hotel. Das ist das Rathaus.", ["kein", "keine", "nicht"], 0, "Neutrum: kein Hotel.", "محايد: kein Hotel."),
      Q("___ Sie geradeaus! (gehen)", ["Gehen", "Geht", "Gehe"], 0, "Imperativ mit Sie: Verb auf Position 1 + Sie.", "الأمر مع Sie: الفعل في الأول ثم Sie."),
      Q("Welcher Monat kommt nach Mai?", ["Juni", "April", "Juli"], 0, "Mai → Juni → Juli.", "مايو → يونيو → يوليو."),
      Q("Der Turm ist sehr ___. (112 Meter)", ["hoch", "breit", "kalt"], 0, "Ein Turm ist hoch.", "البرج بيبقى عالي."),
      Q("Ich fahre ___ dem Bus.", ["mit", "zu", "nach"], 0, "Verkehrsmittel: mit + Dativ.", "وسيلة المواصلات: mit + Dativ."),
      Q("Das Auto ___ neu.", ["ist", "sind", "bin"], 0, "Nach „sein“ steht das Adjektiv ohne Endung: Das Auto ist neu.", "بعد sein الصفة من غير نهاية: Das Auto ist neu.")
    ]
  };

  /* ---------- Kapitel 4 ---------- */
  content[4] = {
    intro: "In diesem Kapitel planst du einen Einkauf und führst Gespräche beim Einkaufen und beim Essen. Du sprichst über Vorlieben beim Essen und Trinken und über deine Mahlzeiten am Tag.",
    introAr: "في الوحدة دي هتخطط لمشوار تسوق وتتكلم وإنت بتشتري وبتاكل. وهتتكلم عن اللي بتحبه في الأكل والشرب وعن وجباتك في اليوم.",
    badges: ["Mahlzeiten", "Lebensmittel", "Getränke", "Einkaufen", "Akkusativ", "mögen und möchten", "Positionen im Satz", "Umlaute ä, ö, ü"],
    goals: [
      G("Einen Einkauf planen", "تخطط لمشوار تسوق"),
      G("Gespräche beim Einkauf führen", "تتكلم وإنت بتشتري"),
      G("Gespräche beim Essen führen", "تتكلم وإنت بتاكل"),
      G("Über Vorlieben beim Essen sprechen", "تتكلم عن اللي بتحبه في الأكل"),
      G("Über Essen sprechen", "تتكلم عن الأكل"),
      G("Grammatik: Akkusativ, mögen und möchten, Position im Satz", "القواعد: Akkusativ، mögen وmöchten، موضع الكلمات في الجملة")
    ],
    readings: [
      RD("Einkaufszettel", "Familie Berger macht eine Grillparty",
        "Am Samstag macht Familie Berger eine Grillparty. Frau Berger schreibt einen Einkaufszettel: zehn Würstchen, ein Kilo Hähnchen, ein Brot, einen Salat, drei Tomaten, eine Gurke, 200 Gramm Käse und zwei Liter Orangensaft. Im Supermarkt findet sie alles. Herr Berger kauft die Getränke. Zusammen bezahlen sie 38 Euro.",
        "يوم السبت عيلة بيرجر هتعمل حفلة شوي. السيدة بيرجر بتكتب قايمة مشتريات: عشر سجقات، كيلو فراخ، عيش، خس، تلات طماطم، خيارة، 200 جرام جبنة ولترين عصير برتقال. في السوبر ماركت بتلاقي كل حاجة. السيد بيرجر بيشتري المشروبات. مع بعض بيدفعوا 38 يورو.",
        [["Was machen die Bergers am Samstag?", "Eine Grillparty."], ["Wie viel Hähnchen kauft Frau Berger?", "Ein Kilo."], ["Wer kauft die Getränke?", "Herr Berger."], ["Wie viel bezahlen sie zusammen?", "38 Euro."]]),
      RD("Dialog", "In der Bäckerei",
        "Verkäuferin: Guten Morgen! Bitte?<br>Kundin: Guten Morgen! Ich möchte drei Brötchen und ein Brot, bitte.<br>Verkäuferin: Gern. Sonst noch etwas?<br>Kundin: Ja, haben Sie auch Kuchen?<br>Verkäuferin: Ja, hier. Der Apfelkuchen ist ganz frisch.<br>Kundin: Dann nehme ich ein Stück Apfelkuchen. Was kostet das zusammen?<br>Verkäuferin: Das macht 5 Euro 40, bitte.<br>Kundin: Hier sind 10 Euro.<br>Verkäuferin: Danke! Und 4 Euro 60 zurück. Schönen Tag noch!",
        "البائعة: صباح الخير! تفضل؟<br>الزبونة: صباح الخير! عايزة تلات عيش صغير وعيشة كبيرة من فضلك.<br>البائعة: حاضر. حاجة تانية؟<br>الزبونة: أيوه، عندكم كيك؟<br>البائعة: أيوه، هنا. كيك التفاح طازة خالص.<br>الزبونة: يبقى هاخد حتة كيك تفاح. الحساب كام مع بعض؟<br>البائعة: الحساب 5 يورو و40 سنت.<br>الزبونة: اتفضلي 10 يورو.<br>البائعة: شكرًا! والباقي 4 يورو و60. يومك سعيد!",
        [["Was möchte die Kundin zuerst?", "Drei Brötchen und ein Brot."], ["Was ist ganz frisch?", "Der Apfelkuchen."], ["Wie viel kostet alles zusammen?", "5 Euro 40."], ["Wie viel Geld bekommt die Kundin zurück?", "4 Euro 60."]]),
      RD("Interview", "Was isst du gern?",
        "Sara: Zum Frühstück trinke ich Tee und esse Brot mit Marmelade. Mittags esse ich oft Reis mit Hähnchen. Abends mag ich Suppe und Salat. Ich esse keinen Fisch, aber ich mag Obst sehr gern.<br><br>Daniel: Ich trinke morgens Kaffee und esse ein Brötchen mit Käse. Mittags esse ich in der Kantine. Am Nachmittag esse ich gern Schokolade. Ich mag keine Tomaten.",
        "سارة: على الفطار بشرب شاي وباكل عيش بمربى. الضهر غالبًا باكل رز بفراخ. بالليل بحب شوربة وسلطة. مابكلش سمك، بس بحب الفاكهة جدًا.<br><br>دانيال: الصبح بشرب قهوة وباكل عيش صغير بجبنة. الضهر باكل في كافيتريا الشركة. بعد الضهر بحب آكل شيكولاتة. مابحبش الطماطم.",
        [["Was trinkt Sara zum Frühstück?", "Tee."], ["Was isst sie nicht?", "Fisch."], ["Wo isst Daniel mittags?", "In der Kantine."], ["Was mag Daniel nicht?", "Tomaten."]])
    ],
    redemittel: [
      R("Gespräche beim Einkauf führen", "الكلام أثناء التسوق", [
        ["Bitte? Was möchten Sie?", "تفضل؟ تحب إيه؟"],
        ["Ich möchte drei Brötchen, bitte.", "عايز تلات عيش صغير من فضلك."],
        ["Haben Sie Käse?", "عندكم جبنة؟"],
        ["Wo finde ich Reis? – Dort rechts.", "فين ألاقي الرز؟ – هناك على اليمين."],
        ["Was kostet das Brot? / Wie viel kosten die Tomaten?", "العيش بكام؟ / الطماطم بكام؟"],
        ["Sonst noch etwas? – Nein, danke. Das ist alles.", "حاجة تانية؟ – لا شكرًا. ده كل حاجة."],
        ["Können Sie wechseln?", "تقدر تفكّ لي؟"]
      ]),
      R("Gespräche beim Essen führen", "الكلام أثناء الأكل", [
        ["Guten Appetit! – Danke, gleichfalls!", "بالهنا والشفا! – شكرًا، وإنت كمان!"],
        ["Möchtest du noch etwas Reis?", "تحب شوية رز كمان؟"],
        ["Ja, gerne. / Nein, danke. Ich bin satt.", "أيوه بكل سرور. / لا شكرًا. أنا شبعان."],
        ["Das schmeckt sehr gut! / Die Suppe ist lecker.", "ده طعمه حلو جدًا! / الشوربة لذيذة."],
        ["Prost! / Zum Wohl!", "في صحتك!"]
      ]),
      R("Über Vorlieben beim Essen sprechen", "الكلام عن أكلك المفضل", [
        ["Isst du gern Fisch? – Ja, sehr gern.", "بتحب تاكل سمك؟ – أيوه، جدًا."],
        ["Was trinkst du (nicht) gern?", "إيه اللي (مابتحبش) تشربه؟"],
        ["Ich mag Schokolade.", "بحب الشيكولاتة."],
        ["Ich mag keinen Käse / kein Fleisch / keine Tomaten.", "مابحبش الجبنة / اللحمة / الطماطم."]
      ]),
      R("Über Essen sprechen", "الكلام عن الأكل", [
        ["Zum Frühstück trinke ich Tee.", "على الفطار بشرب شاي."],
        ["Mittags esse ich oft Reis.", "الضهر باكل رز كتير."],
        ["Abends mag ich Suppe.", "بالليل بحب شوربة."],
        ["Am Nachmittag esse ich gern Obst.", "بعد الضهر بحب آكل فاكهة."]
      ])
    ],
    speaking: {
      questions: [
        G("Was isst du zum Frühstück?", "بتاكل إيه على الفطار؟"),
        G("Was isst und trinkst du gern? Was nicht?", "إيه اللي بتحب تاكله وتشربه؟ وإيه اللي لأ؟"),
        G("Du bist im Supermarkt. Frage nach Reis und nach dem Preis.", "إنت في سوبر ماركت. اسأل عن الرز وسعره."),
        G("Du bist in der Bäckerei. Bestelle zwei Brötchen und einen Kaffee.", "إنت في المخبز. اطلب عيشتين صغيرتين وقهوة."),
        G("Wie sagst du bei Tisch: Guten Appetit?", "بتقول إيه على السفرة بدل بالهنا؟")
      ],
      model: "Zum Frühstück trinke ich Tee und esse Brot mit Käse. Mittags esse ich Reis mit Hähnchen und Salat. Abends esse ich oft Suppe. Ich mag Obst sehr gern, aber ich mag keinen Fisch. Am Samstag kaufe ich im Supermarkt ein: ein Brot, einen Salat und zwei Liter Milch.",
      modelAr: "على الفطار بشرب شاي وباكل عيش بجبنة. الضهر باكل رز بفراخ وسلطة. بالليل غالبًا باكل شوربة. بحب الفاكهة جدًا لكن مابحبش السمك. يوم السبت باشتري من السوبر ماركت: عيش وخس ولترين لبن."
    },
    quiz: [
      Q("Ich kaufe ___ Apfel. (maskulin, unbestimmt)", ["einen", "ein", "eine"], 0, "Maskulin im Akkusativ: einen Apfel.", "المذكر في Akkusativ: einen Apfel."),
      Q("Ich esse ___ Banane. (feminin)", ["eine", "einen", "ein"], 0, "Feminin ändert sich im Akkusativ nicht: eine Banane.", "المؤنث ما بيتغيرش في Akkusativ: eine Banane."),
      Q("Ich mag ___ Fleisch. (Negation)", ["kein", "keinen", "keine"], 0, "Neutrum im Akkusativ: kein Fleisch.", "المحايد في Akkusativ: kein Fleisch."),
      Q("Ich ___ einen Kaffee. (höflich)", ["möchte", "möchtest", "möchten"], 0, "Zu „ich“ passt: ich möchte.", "مع ich: ich möchte."),
      Q("Er ___ gern Fisch. (essen)", ["isst", "esst", "esse"], 0, "essen ist unregelmäßig: er isst.", "essen غير منتظم: er isst."),
      Q("Das Verb steht im Aussagesatz auf Position ...", ["2", "1", "3"], 0, "Im Aussagesatz steht das konjugierte Verb auf Position 2: Morgens esse ich Müsli.", "في الجملة الخبرية الفعل في الموضع التاني."),
      Q("Verkäuferin: „Sonst noch etwas?“ – Antwort:", ["Nein, danke. Das ist alles.", "Ja, ich bin Lehrerin.", "Guten Abend."], 0, "So beendest du den Einkauf höflich.", "كده بتنهي التسوق بأدب."),
      Q("Was sagt man vor dem Essen?", ["Guten Appetit!", "Gute Nacht!", "Auf Wiedersehen!"], 0, "Vor dem Essen sagt man „Guten Appetit!“", "قبل الأكل بنقول Guten Appetit!")
    ]
  };

  /* ---------- Kapitel 5 ---------- */
  content[5] = {
    intro: "Hier lernst du die Uhrzeit zu verstehen und zu nennen und Zeitangaben zu machen. Du sprichst über deine Familie, verabredest dich, vereinbarst einen Termin am Telefon und entschuldigst dich für eine Verspätung.",
    introAr: "هنا هتتعلم تفهم وتقول الساعة وتحدد الأوقات. هتتكلم عن عيلتك وتتفق على ميعاد وتحجز ميعاد بالتليفون وتعتذر عن التأخير.",
    badges: ["Uhrzeit", "Tagesablauf", "Familie", "Termine", "am, um, von … bis", "Possessivartikel", "Modalverben", "Satzklammer"],
    goals: [
      G("Die Uhrzeit verstehen und nennen", "تفهم وتقول الساعة"),
      G("Zeitangaben machen", "تحدد الأوقات"),
      G("Über die Familie sprechen", "تتكلم عن العيلة"),
      G("Sich verabreden", "تتفق على ميعاد"),
      G("Einen Termin telefonisch vereinbaren", "تحجز ميعاد بالتليفون"),
      G("Sich für eine Verspätung entschuldigen und darauf reagieren", "تعتذر عن التأخير وترد على الاعتذار"),
      G("Grammatik: Zeitangaben, Possessivartikel, Modalverben und Satzklammer", "القواعد: الأوقات، أدوات الملكية، الأفعال المساعدة وإطار الجملة")
    ],
    readings: [
      RD("Tagesablauf", "Ein Tag von Sofia",
        "Sofia steht um halb sieben auf. Um sieben Uhr frühstückt sie, und um Viertel nach sieben geht sie zur Arbeit. Sie arbeitet von acht bis siebzehn Uhr im Büro. Um zwölf Uhr isst sie mit ihren Kollegen in der Kantine zu Mittag. Am Nachmittag hat sie noch eine Besprechung um drei. Um halb sechs geht sie ins Fitness-Studio. Um acht Uhr kocht sie, und um elf Uhr geht sie schlafen.",
        "صوفيا بتصحى الساعة 6:30. الساعة 7 بتفطر، والساعة 7:15 بتروح الشغل. بتشتغل من 8 لـ 5 في المكتب. الساعة 12 بتتغدى مع زمايلها في الكافيتريا. بعد الضهر عندها اجتماع الساعة 3. الساعة 5:30 بتروح الجيم. الساعة 8 بتطبخ، والساعة 11 بتنام.",
        [["Wann steht Sofia auf?", "Um halb sieben."], ["Von wann bis wann arbeitet sie?", "Von acht bis siebzehn Uhr."], ["Wo isst sie zu Mittag?", "In der Kantine."], ["Wann geht sie schlafen?", "Um elf Uhr."]]),
      RD("Familie", "Mein Familienfoto",
        "Das ist meine Familie. Links sitzen meine Großeltern: mein Opa Karl und meine Oma Ingrid. In der Mitte sind meine Eltern. Mein Vater arbeitet als Techniker, meine Mutter ist Lehrerin. Rechts stehen mein Bruder Jonas und meine Schwester Lea. Jonas ist verheiratet und hat einen Sohn. Das Baby heißt Mia, sie ist erst drei Monate alt. Unser Hund heißt Bello. Er ist auch auf dem Foto.",
        "دي عيلتي. على الشمال قاعدين جدي وجدتي: جدي كارل وجدتي إنجريد. في النص أهلي. بابا بيشتغل فني وماما مدرسة. على اليمين واقفين أخويا يوناس وأختي ليا. يوناس متجوز وعنده ابن. البيبي اسمها ميا، عمرها تلات شهور بس. كلبنا اسمه بيلّو. هو كمان في الصورة.",
        [["Wer sitzt links?", "Die Großeltern."], ["Was ist die Mutter von Beruf?", "Lehrerin."], ["Wie heißt das Baby?", "Mia."], ["Wie heißt der Hund?", "Bello."]]),
      RD("Telefon", "Ein Termin beim Friseur",
        "Friseursalon Kurz, guten Tag.<br>Guten Tag, hier ist Nora Weiß. Ich hätte gern einen Termin.<br>Gern. Haben Sie am Dienstag Zeit?<br>Nein, am Dienstag kann ich nicht. Da muss ich arbeiten.<br>Und am Mittwoch um 16 Uhr?<br>Ja, das passt. Vielen Dank!<br>Bitte, bis Mittwoch, Frau Weiß!<br><br>Am Mittwoch ist Nora zehn Minuten zu spät. Sie sagt: Entschuldigung, ich bin zu spät. Es tut mir leid. – Kein Problem, kommen Sie!",
        "صالون كورتز، مساء الخير.<br>مساء الخير، أنا نورا فايس. عايزة أحجز ميعاد.<br>حاضر. عندك وقت يوم التلات؟<br>لا، يوم التلات مش هينفع. لازم أشتغل ساعتها.<br>وإيه رأيك الأربع الساعة 4؟<br>أيوه، ده مناسب. شكرًا جزيلًا!<br>العفو، أشوفك الأربع يا سيدة فايس!<br><br>يوم الأربع نورا اتأخرت عشر دقايق. بتقول: آسفة، أنا متأخرة. بجد أسفة. – مفيش مشكلة، اتفضلي!",
        [["Was möchte Nora?", "Einen Termin beim Friseur."], ["Warum kann sie am Dienstag nicht?", "Sie muss arbeiten."], ["Wann ist der Termin?", "Am Mittwoch um 16 Uhr."], ["Wie spät ist sie am Mittwoch?", "Zehn Minuten."]])
    ],
    redemittel: [
      R("Die Uhrzeit nennen", "قول الساعة", [
        ["Wie spät ist es? / Wie viel Uhr ist es?", "الساعة كام؟"],
        ["Es ist Viertel vor drei. / Es ist halb zwei.", "الساعة 2:45 إلا ربع. / الساعة 1:30."],
        ["Es ist vierzehn Uhr fünfundvierzig. (offiziell)", "الساعة 14:45 (بالنظام الرسمي)."],
        ["Um zehn nach neun.", "الساعة 9:10."]
      ]),
      R("Zeitangaben", "تحديد الأوقات", [
        ["am Montag / am Vormittag / am Wochenende", "يوم الاتنين / قبل الضهر / في الويك إند"],
        ["um acht Uhr / um Viertel nach zwölf", "الساعة 8 / الساعة 12:15"],
        ["von neun bis halb zwei", "من 9 لـ 1:30"]
      ]),
      R("Über die Familie sprechen", "الكلام عن العيلة", [
        ["Das ist mein Vater / meine Mutter / mein Kind.", "ده أبويا / دي أمي / ده ابني (أو بنتي)."],
        ["Ich habe zwei Brüder und eine Schwester.", "عندي أخوين وأخت."],
        ["Meine Eltern wohnen in Kairo.", "أهلي ساكنين في القاهرة."],
        ["Meine Schwester ist verheiratet. Sie hat eine Tochter.", "أختي متجوزة. وعندها بنت."]
      ]),
      R("Einen Termin vereinbaren", "حجز ميعاد", [
        ["Ich hätte gern einen Termin.", "عايز أحجز ميعاد."],
        ["Haben Sie heute / morgen / am Montag einen Termin frei?", "عندكم ميعاد فاضي النهارده / بكرة / يوم الاتنين؟"],
        ["Können Sie am Mittwoch um 16 Uhr kommen?", "ينفع تيجي الأربع الساعة 4؟"],
        ["Ja, da kann ich. / Nein, da kann ich leider nicht.", "أيوه ينفع. / لا للأسف مش هينفع."],
        ["Geht es am Donnerstag? – Ja, das geht.", "ينفع يوم الخميس؟ – أيوه ينفع."]
      ]),
      R("Sich für eine Verspätung entschuldigen", "الاعتذار عن التأخير", [
        ["Entschuldigung, ich bin zu spät.", "آسف، أنا متأخر."],
        ["Es tut mir leid.", "أنا آسف."],
        ["Bitte entschuldigen Sie. / Ich bitte um Entschuldigung.", "من فضلك اعذرني. / أطلب العذر."],
        ["Kein Problem. / Schon gut. / Macht nichts.", "مفيش مشكلة. / ولا يهمك."],
        ["Das nächste Mal bitte pünktlich!", "المرة الجاية في الميعاد من فضلك!"]
      ])
    ],
    speaking: {
      questions: [
        G("Wie spät ist es jetzt?", "الساعة كام دلوقتي؟"),
        G("Wann stehst du auf und wann frühstückst du?", "بتصحى إمتى وبتفطر إمتى؟"),
        G("Erzähle von deiner Familie.", "احكي عن عيلتك."),
        G("Du rufst in einer Praxis an. Vereinbare einen Termin.", "إنت بتكلم عيادة. احجز ميعاد."),
        G("Du kommst zu spät. Was sagst du?", "إنت جيت متأخر. بتقول إيه؟")
      ],
      model: "Ich stehe um halb sieben auf. Um sieben Uhr frühstücke ich und um acht fahre ich zur Arbeit. Meine Familie ist groß: Ich habe zwei Brüder und eine Schwester. Mein Vater ist Lehrer, meine Mutter arbeitet im Krankenhaus. Entschuldigung, ich bin zu spät – es tut mir leid!",
      modelAr: "باصحى الساعة 6:30. الساعة 7 بفطر والساعة 8 باروح الشغل. عيلتي كبيرة: عندي أخوين وأخت. أبويا مدرس وأمي بتشتغل في المستشفى. آسف، أنا متأخر – بجد أسف!"
    },
    quiz: [
      Q("Wie spät ist es? 7:30 Uhr = ...", ["halb acht", "halb sieben", "Viertel nach sieben"], 0, "„Halb acht“ heißt eine halbe Stunde vor acht = 7:30.", "halb acht = 7:30 (نص ساعة قبل 8)."),
      Q("Ich stehe ___ sieben Uhr auf.", ["um", "am", "von"], 0, "Uhrzeit: um + Zeit.", "الساعة: um + الوقت."),
      Q("Ich arbeite ___ Montag ___ Freitag.", ["von … bis", "um … am", "am … um"], 0, "Zeitraum: von … bis …", "الفترة: von … bis …"),
      Q("Das ist ___ Bruder. (ich)", ["mein", "meine", "meinen"], 0, "Maskulin im Nominativ: mein Bruder.", "المذكر في Nominativ: mein Bruder."),
      Q("Ich sehe ___ Schwester. (ich, Akkusativ)", ["meine", "mein", "meinen"], 0, "Feminin bleibt gleich: meine Schwester.", "المؤنث ما بيتغيرش: meine Schwester."),
      Q("Ich ___ heute arbeiten.", ["muss", "musst", "müssen"], 0, "Zu „ich“ passt: ich muss.", "مع ich: ich muss."),
      Q("Wir wollen ins Kino ___.", ["gehen", "gehe", "geht"], 0, "Modalverb auf Position 2, Infinitiv am Satzende: Wir wollen ins Kino gehen.", "الفعل المساعد في الموضع التاني والمصدر في آخر الجملة."),
      Q("Du kommst zu spät. Was sagst du?", ["Entschuldigung, es tut mir leid.", "Guten Appetit!", "Ich heiße Max."], 0, "So entschuldigst du dich.", "كده بتعتذر.")
    ]
  };

  /* ---------- Kapitel 6 ---------- */
  content[6] = {
    intro: "In diesem Kapitel sprichst du über Freizeit, nennst das Datum und sprichst über Geburtstage. Du verstehst und schreibst eine Einladung, bestellst und bezahlst im Restaurant, erzählst von einem Ereignis und verstehst Veranstaltungstipps.",
    introAr: "في الوحدة دي هتتكلم عن وقت الفراغ وتقول التاريخ وتتكلم عن أعياد الميلاد. هتفهم وتكتب دعوة، وتطلب وتدفع في المطعم، وتحكي عن حدث، وتفهم نصايح الفعاليات.",
    badges: ["Datum", "Geburtstag", "Einladung", "Restaurant", "Veranstaltungen", "trennbare Verben", "Akkusativ-Pronomen", "Präteritum haben/sein"],
    goals: [
      G("Über Freizeit sprechen", "تتكلم عن وقت الفراغ"),
      G("Das Datum verstehen und nennen", "تفهم وتقول التاريخ"),
      G("Über Geburtstage sprechen", "تتكلم عن أعياد الميلاد"),
      G("Eine Einladung verstehen und schreiben", "تفهم وتكتب دعوة"),
      G("Essen und Getränke bestellen und bezahlen", "تطلب أكل ومشروبات وتدفع"),
      G("Über ein Ereignis sprechen", "تتكلم عن حدث"),
      G("Veranstaltungstipps verstehen", "تفهم نصايح عن الفعاليات"),
      G("Grammatik: Datum, trennbare Verben, mich/dich/…, für + Akkusativ, war und hatte", "القواعد: التاريخ، الأفعال المنفصلة، mich/dich، für + Akkusativ، war وhatte")
    ],
    readings: [
      RD("Einladung", "Lenas Einladung zur Geburtstagsparty",
        "Betreff: Einladung zu meiner Party<br><br>Liebe Freunde,<br>ich habe am 12. Juni Geburtstag und mache eine Party. Ich lade euch herzlich ein! Die Party ist am Samstag, den 14. Juni, ab 18 Uhr bei mir zu Hause. Wir grillen im Garten. Könnt ihr etwas zu trinken mitbringen? Bitte sagt bis Mittwoch Bescheid. Hoffentlich habt ihr Zeit!<br><br>Liebe Grüße<br>Lena",
        "الموضوع: دعوة لحفلتي<br><br>أصدقائي الأعزاء،<br>عيد ميلادي يوم 12 يونيو وهاعمل حفلة. بدعوكم بكل حب! الحفلة يوم السبت 14 يونيو من الساعة 6 في بيتي. هنشوي في الجنينة. ممكن تجيبوا حاجة للشرب؟ من فضلكم قولولي لحد الأربع. يا رب يكون عندكم وقت!<br><br>مع خالص المحبة<br>لينا",
        [["Wann hat Lena Geburtstag?", "Am 12. Juni."], ["Wann ist die Party?", "Am Samstag, den 14. Juni, ab 18 Uhr."], ["Was machen sie im Garten?", "Sie grillen."], ["Was sollen die Gäste mitbringen?", "Etwas zu trinken."]]),
      RD("Dialog", "Im Restaurant: Bestellen und Bezahlen",
        "Kellner: Guten Abend! Was möchten Sie trinken?<br>Gast 1: Für mich bitte ein Wasser.<br>Gast 2: Und ich hätte gern einen Apfelsaft.<br>Kellner: Möchten Sie auch etwas essen?<br>Gast 1: Ja, ich nehme das Schnitzel mit Pommes.<br>Gast 2: Für mich bitte eine Tomatensuppe.<br>Kellner: Gern. – (später) Hat es geschmeckt?<br>Gast 1: Ja, sehr gut. Wir möchten bitte zahlen.<br>Kellner: Zusammen oder getrennt?<br>Gast 2: Zusammen, bitte.<br>Kellner: Das macht 26 Euro 50.<br>Gast 1: 28 Euro, stimmt so.<br>Kellner: Vielen Dank! Einen schönen Abend noch!",
        "الجرسون: مساء الخير! تحبوا تشربوا إيه؟<br>الضيف 1: ليا من فضلك مية.<br>الضيف 2: وأنا عايز عصير تفاح.<br>الجرسون: تحبوا تاكلوا حاجة كمان؟<br>الضيف 1: أيوه، هاخد الشنيتزل بالبطاطس.<br>الضيف 2: وليا شوربة طماطم من فضلك.<br>الجرسون: حاضر. – (بعد شوية) الأكل عجبكم؟<br>الضيف 1: أيوه، حلو جدًا. عايزين الحساب من فضلك.<br>الجرسون: مع بعض ولا كل واحد لوحده؟<br>الضيف 2: مع بعض من فضلك.<br>الجرسون: الحساب 26 يورو و50 سنت.<br>الضيف 1: 28 يورو، الباقي ليك.<br>الجرسون: شكرًا جزيلًا! أمسية سعيدة!",
        [["Was trinkt Gast 2?", "Einen Apfelsaft."], ["Was isst Gast 1?", "Schnitzel mit Pommes."], ["Wie bezahlen sie?", "Zusammen."], ["Wie viel Trinkgeld geben sie?", "1 Euro 50 (sie zahlen 28 Euro statt 26,50 Euro)."]]),
      RD("Radio", "Veranstaltungstipps für das Wochenende",
        "Hallo, liebe Hörerinnen und Hörer! Das sind unsere Tipps für das Wochenende. Am Freitag, den 20. Juni, beginnt um 21 Uhr das Open-Air-Kino am See. Der Eintritt kostet 6 Euro. Am Samstag, den 21. Juni, ist Museumsnacht: Alle Museen sind bis Mitternacht geöffnet, die Karte kostet 12 Euro. Und am Sonntag, den 22. Juni, gibt es ein Stadtfest mit Musik, Essen und Getränken. Dort ist der Eintritt frei. Wir wünschen euch ein schönes Wochenende!",
        "أهلا يا مستمعينا الأعزاء! دي نصايحنا للويك إند. يوم الجمعة 20 يونيو الساعة 9 مساءً بيبدأ سينما الهواء الطلق عند البحيرة. التذكرة بـ 6 يورو. يوم السبت 21 يونيو ليلة المتاحف: كل المتاحف مفتوحة لحد منتصف الليل والتذكرة بـ 12 يورو. ويوم الأحد 22 يونيو في مهرجان المدينة بموسيقى وأكل وشرب. الدخول هناك مجاني. نتمنالكم ويك إند جميل!",
        [["Was gibt es am Freitag?", "Open-Air-Kino am See."], ["Was kostet die Karte für die Museumsnacht?", "12 Euro."], ["Wie lange sind die Museen am Samstag geöffnet?", "Bis Mitternacht."], ["Was kostet der Eintritt zum Stadtfest?", "Nichts – er ist frei."]])
    ],
    redemittel: [
      R("Das Datum nennen", "قول التاريخ", [
        ["Der Wievielte ist heute? – Heute ist der 3. Mai.", "النهارده كام في الشهر؟ – النهارده 3 مايو."],
        ["Wann hast du Geburtstag? – Am 12. Juni.", "عيد ميلادك إمتى؟ – يوم 12 يونيو."],
        ["Am ersten Januar, am zweiten Februar, am dritten März …", "في أول يناير، في تاني فبراير، في تالت مارس …"]
      ]),
      R("Eine Einladung schreiben", "كتابة دعوة", [
        ["Liebe Anna, / Lieber Tom, / Hallo zusammen,", "عزيزتي آنا، / عزيزي توم، / أهلا بالجميع،"],
        ["Ich mache eine Party / ein Fest. Ich lade dich / euch herzlich ein.", "هاعمل حفلة. بدعوك / بدعوكم من القلب."],
        ["Die Party ist am Samstag in … Wir fangen um … an.", "الحفلة يوم السبت في … هنبدأ الساعة …"],
        ["Kannst du / Könnt ihr etwas mitbringen?", "ممكن تجيب / تجيبوا حاجة معاكم؟"],
        ["Hoffentlich hast du / habt ihr Zeit!", "يا رب يكون عندك / عندكم وقت!"],
        ["Liebe Grüße / Viele Grüße / Herzliche Grüße", "مع خالص التحية / تحياتي / أطيب التحيات"]
      ]),
      R("Essen und Getränke bestellen und bezahlen", "طلب الأكل والدفع", [
        ["Was möchten Sie trinken / bestellen?", "تحب تشرب / تطلب إيه؟"],
        ["Für mich bitte ein Wasser. / Ich hätte gern einen Apfelsaft.", "ليا مية من فضلك. / عايز عصير تفاح."],
        ["Ich nehme das Schnitzel. / Für mich eine Suppe.", "هاخد الشنيتزل. / ليا شوربة."],
        ["Entschuldigung, wir möchten bitte zahlen.", "لو سمحت، عايزين الحساب."],
        ["Zusammen oder getrennt? – Zusammen, bitte!", "مع بعض ولا كل واحد لوحده؟ – مع بعض من فضلك!"],
        ["Das macht 26 Euro 50. – Stimmt so!", "الحساب 26 يورو و50 سنت. – الباقي ليك!"]
      ]),
      R("Über ein Ereignis sprechen", "الكلام عن حدث", [
        ["Wie war die Party? – Sie war super!", "الحفلة كانت إزاي؟ – كانت رائعة!"],
        ["Das Essen war lecker. Der Kellner war nett.", "الأكل كان لذيذ. والجرسون كان لطيف."],
        ["Hattet ihr Spaß? – Ja, wir hatten viel Spaß.", "استمتعتم؟ – أيوه، استمتعنا جدًا."],
        ["Leider war das Wetter nicht so gut.", "للأسف الجو ماكانش حلو أوي."]
      ]),
      R("Veranstaltungen", "الفعاليات", [
        ["Was ist am Wochenende los?", "فيه إيه في الويك إند؟"],
        ["Der Eintritt kostet fünf Euro. / Der Eintritt ist frei.", "التذكرة بـ 5 يورو. / الدخول مجاني."],
        ["Das Konzert beginnt um 20 Uhr.", "الحفلة بتبدأ الساعة 8 مساءً."],
        ["Kommst du mit? – Klar!", "هتيجي معانا؟ – أكيد!"]
      ])
    ],
    speaking: {
      questions: [
        G("Wann hast du Geburtstag?", "عيد ميلادك إمتى؟"),
        G("Wie feierst du deinen Geburtstag?", "بتحتفل بعيد ميلادك إزاي؟"),
        G("Lade einen Freund zu einer Party ein.", "اعزم صاحبك على حفلة."),
        G("Du bist im Restaurant: Bestelle ein Getränk und ein Essen und bezahle.", "إنت في مطعم: اطلب مشروب وأكل وادفع."),
        G("Wie war dein letzter Geburtstag oder dein letztes Fest?", "عيد ميلادك الأخير أو آخر حفلة كانت إزاي؟")
      ],
      model: "Mein Geburtstag ist am zehnten Oktober. Ich lade meine Freunde am Samstag ein. Die Party beginnt um sieben Uhr. Wir grillen, und ich bitte meine Freunde, etwas zu trinken mitzubringen. Letztes Jahr war die Party sehr schön. Das Essen war lecker, und wir hatten viel Spaß.",
      modelAr: "عيد ميلادي يوم 10 أكتوبر. باعزم أصحابي يوم السبت. الحفلة بتبدأ الساعة 7. هنشوي وباطلب من أصحابي يجيبوا حاجة للشرب. السنة اللي فاتت كانت الحفلة جميلة جدًا. الأكل كان لذيذ واستمتعنا جدًا."
    },
    quiz: [
      Q("Mein Geburtstag ist ___ dritten Mai.", ["am", "um", "im"], 0, "Datum mit Tag: am dritten Mai.", "التاريخ مع اليوم: am dritten Mai."),
      Q("Ich lade dich ___. (einladen)", ["ein", "mit", "an"], 0, "einladen ist trennbar: Ich lade dich ein.", "الفعل einladen منفصل: Ich lade dich ein."),
      Q("Bring bitte Saft ___. (mitbringen)", ["mit", "ein", "auf"], 0, "mitbringen ist trennbar: Bring Saft mit.", "mitbringen منفصل: Bring Saft mit."),
      Q("Der Kuchen ist für ___. (er, Akkusativ)", ["ihn", "er", "ihm"], 0, "für + Akkusativ: für ihn.", "für + Akkusativ: für ihn."),
      Q("Ich sehe ___ im Park. (du)", ["dich", "dir", "du"], 0, "Akkusativ von „du“ ist „dich“.", "الـ Akkusativ لـ du هو dich."),
      Q("Die Party ___ sehr schön.", ["war", "hatte", "waren"], 0, "Präteritum von sein: es war.", "الماضي لـ sein: es war."),
      Q("Wir ___ viel Spaß.", ["hatten", "waren", "hat"], 0, "Präteritum von haben: wir hatten.", "الماضي لـ haben: wir hatten."),
      Q("Kellner: „Zusammen oder getrennt?“ – Antwort:", ["Zusammen, bitte.", "Guten Morgen.", "Ich bin müde."], 0, "So sagst du, dass ihr gemeinsam zahlt.", "كده بتقول إنكم هتدفعوا مع بعض.")
    ]
  };

  if (!Array.isArray(window.A1_BOOK)) return;
  window.A1_BOOK.forEach(chapter => {
    const lesson = content[chapter.num];
    if (!lesson) return;
    Object.assign(chapter, lesson);
    const skip = /Grammatik|Kurssprache|Personalpronomen|Fragewörter|^Zahlen|Im Kurs|Weitere/;
    chapter.readings.forEach(reading => {
      const text = reading.text.toLocaleLowerCase('de-DE');
      const seen = new Set();
      const words = chapter.vocab.filter(item => {
        const plain = String(item.w || '').replace(/^(der|die|das)\s+/i, '').split(/[,(]/)[0].trim();
        const key = plain.toLocaleLowerCase('de-DE');
        if (seen.has(key) || skip.test(item.cat || '') || plain.length < 5 || !/[\u0600-\u06ff]/.test(item.ar || '') || !text.includes(key)) return false;
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
