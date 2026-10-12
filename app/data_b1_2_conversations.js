/* B1.2 conversation situations (chapters 7-12): five everyday situations per chapter
   with ready-to-use sentences, a model dialogue and a speaking task. The sentences are
   also added to each chapter's Redemittel. Loaded after data_b1_2_lessons.js. */
(function addB12Conversations(){
  const conversations = {
    "7": [
      {
        "situation": "Sich für eine Verspätung entschuldigen",
        "situationAr": "تعتذر إنك اتأخرت",
        "phrases": [
          {
            "de": "Tut mir wirklich leid, dass ich so spät komme.",
            "ar": "أنا آسف بجد إني اتأخرت كده."
          },
          {
            "de": "Sei mir bitte nicht böse.",
            "ar": "ماتزعلش مني لو سمحت."
          },
          {
            "de": "Ich hätte dir Bescheid sagen sollen.",
            "ar": "كان المفروض أبلّغك."
          },
          {
            "de": "Ich kann verstehen, dass du sauer bist.",
            "ar": "أنا فاهم إنك متضايق."
          },
          {
            "de": "Das passiert mir in letzter Zeit leider öfter.",
            "ar": "للأسف ده بيحصل لي كتير الفترة دي."
          },
          {
            "de": "Ich verspreche dir, dass ich das nächste Mal pünktlich bin.",
            "ar": "أوعدك إني المرة الجاية هاجي في ميعادي."
          },
          {
            "de": "Wie kann ich das wiedergutmachen?",
            "ar": "أصلّح الموقف ده إزاي؟"
          },
          {
            "de": "Darf ich dich nach dem Film auf ein Getränk einladen?",
            "ar": "ممكن أعزمك على حاجة تشربها بعد الفيلم؟"
          },
          {
            "de": "Das nervt mich wirklich, aber ich bin dir nicht mehr böse.",
            "ar": "ده مضايقني فعلًا، بس خلاص مش زعلان منك."
          }
        ],
        "dialogue": [
          {
            "s": "Lea",
            "de": "Endlich! Ich warte schon seit Viertel nach sieben hier.",
            "ar": "أخيرًا! أنا مستنياك هنا من سبعة وربع."
          },
          {
            "s": "Samir",
            "de": "Es tut mir wirklich leid. Sei mir bitte nicht böse.",
            "ar": "أنا آسف بجد. ماتزعليش مني لو سمحتي."
          },
          {
            "s": "Lea",
            "de": "Immer das Gleiche! Warum hast du nicht wenigstens geschrieben?",
            "ar": "كل مرة نفس الحكاية! ليه ماكتبتليش حتى رسالة؟"
          },
          {
            "s": "Samir",
            "de": "Mein Handy war leer, weil ich vergessen hatte, es aufzuladen.",
            "ar": "موبايلي كان فاصل شحن، علشان كنت نسيت أشحنه."
          },
          {
            "s": "Lea",
            "de": "Ich hatte die Karten schon gekauft und habe mich total gelangweilt.",
            "ar": "أنا كنت اشتريت التذاكر خلاص وزهقت جدًا."
          },
          {
            "s": "Samir",
            "de": "Ich kann verstehen, dass du sauer bist. Darf ich dich nach dem Film zum Essen einladen?",
            "ar": "فاهم إنك متضايقة. ممكن أعزمك على الأكل بعد الفيلم؟"
          },
          {
            "s": "Lea",
            "de": "Na gut. Aber ich wünsche mir, dass du beim nächsten Mal pünktlich bist.",
            "ar": "ماشي. بس نفسي المرة الجاية تيجي في ميعادك."
          },
          {
            "s": "Samir",
            "de": "Versprochen! Komm, der Film fängt gleich an.",
            "ar": "وعد! يلا، الفيلم هيبدأ دلوقتي."
          }
        ],
        "task": "Sie sind 45 Minuten zu spät zu einem Treffen gekommen. Entschuldigen Sie sich, erklären Sie den Grund und machen Sie einen Vorschlag, wie Sie es wiedergutmachen können.",
        "taskAr": "إنت اتأخرت ٤٥ دقيقة على ميعاد. اعتذر، واشرح السبب، واقترح إزاي تصلّح الموقف."
      },
      {
        "situation": "Mit der Mitbewohnerin über den Putzplan sprechen",
        "situationAr": "تتكلم مع اللي ساكنة معاك عن جدول التنضيف",
        "phrases": [
          {
            "de": "Hast du kurz Zeit? Ich möchte etwas mit dir klären.",
            "ar": "فاضية شوية؟ عايزة أوضّح حاجة معاكي."
          },
          {
            "de": "Mir ist aufgefallen, dass die Küche oft unordentlich ist.",
            "ar": "لاحظت إن المطبخ كتير بيبقى مكركب."
          },
          {
            "de": "Ich wünsche mir, dass wir die Hausarbeit gerecht verteilen.",
            "ar": "نفسي نقسّم شغل البيت بالعدل."
          },
          {
            "de": "Ich weiß, dass du gerade sehr eingespannt bist.",
            "ar": "عارفة إنك مشغولة جدًا الفترة دي."
          },
          {
            "de": "Wie wäre es mit einem Putzplan?",
            "ar": "إيه رأيك نعمل جدول للتنضيف؟"
          },
          {
            "de": "Während du kochst, kann ich abwaschen.",
            "ar": "وإنتي بتطبخي ممكن أنا أغسل المواعين."
          },
          {
            "de": "Lass uns einen Kompromiss finden.",
            "ar": "خلينا نلاقي حل وسط."
          },
          {
            "de": "Können wir uns darauf einigen?",
            "ar": "ممكن نتفق على كده؟"
          },
          {
            "de": "Gut, dass wir darüber gesprochen haben.",
            "ar": "كويس إننا اتكلمنا في الموضوع."
          }
        ],
        "dialogue": [
          {
            "s": "Julia",
            "de": "Hast du kurz Zeit, Mia? Ich möchte etwas mit dir klären.",
            "ar": "فاضية شوية يا ميا؟ عايزة أوضّح حاجة معاكي."
          },
          {
            "s": "Mia",
            "de": "Klar. Was ist denn los?",
            "ar": "أكيد. فيه إيه بقى؟"
          },
          {
            "s": "Julia",
            "de": "Seit du den neuen Job hast, putze ich fast allein. Das ärgert mich ein bisschen.",
            "ar": "من ساعة ما بدأتي الشغل الجديد وأنا بنضّف لوحدي تقريبًا. ده مضايقني شوية."
          },
          {
            "s": "Mia",
            "de": "Du hast ja recht. Ich bin abends einfach total erschöpft.",
            "ar": "معاكي حق. أنا بليل بكون مهدودة خالص."
          },
          {
            "s": "Julia",
            "de": "Das kann ich gut verstehen. Wie wäre es mit einem Putzplan?",
            "ar": "فاهماكي كويس. إيه رأيك نعمل جدول تنضيف؟"
          },
          {
            "s": "Mia",
            "de": "Gute Idee! Ich könnte am Wochenende das Bad putzen.",
            "ar": "فكرة حلوة! ممكن أنا أنضّف الحمام في الويك إند."
          },
          {
            "s": "Julia",
            "de": "Super. Und während ich koche, könntest du abwaschen.",
            "ar": "تمام. ولما أكون بطبخ ممكن إنتي تغسلي المواعين."
          },
          {
            "s": "Mia",
            "de": "Einverstanden. Gut, dass wir darüber gesprochen haben!",
            "ar": "موافقة. كويس إننا اتكلمنا في الموضوع!"
          }
        ],
        "task": "Ihr Mitbewohner / Ihre Mitbewohnerin hilft kaum im Haushalt. Sprechen Sie diplomatisch mit ihm/ihr, benutzen Sie Ich-Aussagen und einigen Sie sich auf einen Plan.",
        "taskAr": "اللي ساكن معاك مش بيساعد في شغل البيت تقريبًا. كلّمه بهدوء ودبلوماسية، واستخدم جمل بصيغة «أنا»، واتفقوا على خطة."
      },
      {
        "situation": "Einen alten Freund zufällig wiedertreffen",
        "situationAr": "تقابل صاحب قديم صدفة",
        "phrases": [
          {
            "de": "Das gibt's doch nicht! Bist du das wirklich?",
            "ar": "مش ممكن! ده إنت بجد؟"
          },
          {
            "de": "Wir haben uns ja ewig nicht gesehen!",
            "ar": "ده إحنا ماشفناش بعض من زمان أوي!"
          },
          {
            "de": "Wie geht es dir denn?",
            "ar": "عامل إيه بقى؟"
          },
          {
            "de": "Was hast du in der Zwischenzeit gemacht?",
            "ar": "عملت إيه في الفترة دي كلها؟"
          },
          {
            "de": "Nachdem du weggezogen warst, haben wir uns aus den Augen verloren.",
            "ar": "بعد ما نقلت، الصلة اتقطعت بينا."
          },
          {
            "de": "Ich war beruflich ziemlich eingespannt.",
            "ar": "كنت مشغول جدًا في الشغل."
          },
          {
            "de": "Lass uns unsere Nummern austauschen.",
            "ar": "تعالى ناخد أرقام بعض."
          },
          {
            "de": "Wir sollten uns unbedingt bald treffen.",
            "ar": "لازم نتقابل قريب."
          },
          {
            "de": "Schön, dass wir uns über den Weg gelaufen sind!",
            "ar": "حلو إننا قابلنا بعض صدفة!"
          }
        ],
        "dialogue": [
          {
            "s": "Tarek",
            "de": "Das gibt's doch nicht! Jana, bist du das?",
            "ar": "مش ممكن! يانا، ده إنتي؟"
          },
          {
            "s": "Jana",
            "de": "Tarek! Wir haben uns ja ewig nicht gesehen!",
            "ar": "طارق! ده إحنا ماشفناش بعض من زمان أوي!"
          },
          {
            "s": "Tarek",
            "de": "Bestimmt fünf Jahre. Nachdem du nach München gezogen warst, haben wir uns aus den Augen verloren.",
            "ar": "أكيد خمس سنين. بعد ما نقلتي ميونخ، الصلة اتقطعت بينا."
          },
          {
            "s": "Jana",
            "de": "Stimmt. Ich war dort beruflich total eingespannt. Und was machst du hier?",
            "ar": "صح. كنت مشغولة جدًا في الشغل هناك. وإنت بتعمل إيه هنا؟"
          },
          {
            "s": "Tarek",
            "de": "Ich arbeite seit einem Jahr in der Firma da drüben. Und du?",
            "ar": "أنا بشتغل من سنة في الشركة اللي هناك دي. وإنتي؟"
          },
          {
            "s": "Jana",
            "de": "Ich bin gerade wieder hierher zurückgezogen. Komm, lass uns unsere Nummern austauschen!",
            "ar": "أنا لسه راجعة. تعالى ناخد أرقام بعض!"
          },
          {
            "s": "Tarek",
            "de": "Gern. Hast du Samstag Zeit? Dann können wir in Ruhe einen Kaffee trinken.",
            "ar": "أكيد. فاضية يوم السبت؟ نشرب قهوة بهدوء."
          },
          {
            "s": "Jana",
            "de": "Perfekt! Schön, dass wir uns über den Weg gelaufen sind.",
            "ar": "تمام جدًا! حلو إننا قابلنا بعض صدفة."
          }
        ],
        "task": "Sie treffen zufällig einen alten Schulfreund / eine alte Schulfreundin. Erzählen Sie, was Sie in den letzten Jahren gemacht haben, und verabreden Sie sich.",
        "taskAr": "قابلت صدفة صاحب قديم من المدرسة. احكي عملت إيه في السنين اللي فاتت، واتفقوا على ميعاد."
      },
      {
        "situation": "Den Tag der Freundschaft gemeinsam planen",
        "situationAr": "تخطط مع صاحبك ليوم الصداقة",
        "phrases": [
          {
            "de": "Am 30. Juli ist Tag der Freundschaft. Wollen wir etwas zusammen machen?",
            "ar": "يوم ٣٠ يوليو هو يوم الصداقة. نعمل حاجة مع بعض؟"
          },
          {
            "de": "Was hältst du davon, wenn wir ein Picknick machen?",
            "ar": "إيه رأيك نعمل نزهة (بيكنيك)؟"
          },
          {
            "de": "Wir könnten alle Freunde zum Grillen einladen.",
            "ar": "ممكن نعزم كل الصحاب على شوي."
          },
          {
            "de": "Bevor wir einladen, sollten wir den Ort klären.",
            "ar": "قبل ما نعزم حد، لازم نحدد المكان."
          },
          {
            "de": "Wer kümmert sich um das Essen?",
            "ar": "مين هيتولّى موضوع الأكل؟"
          },
          {
            "de": "Ich übernehme die Getränke.",
            "ar": "أنا عليا المشروبات."
          },
          {
            "de": "Das ist eine tolle Gelegenheit, alte Freunde wiederzusehen.",
            "ar": "دي فرصة حلوة نشوف الصحاب القدام."
          },
          {
            "de": "Und wenn es regnet?",
            "ar": "طب ولو الدنيا مطرت؟"
          },
          {
            "de": "Abgemacht! Ich schreibe allen eine Nachricht.",
            "ar": "اتفقنا! أنا هبعت رسالة للكل."
          }
        ],
        "dialogue": [
          {
            "s": "Nadia",
            "de": "Am 30. Juli ist Tag der Freundschaft. Wollen wir etwas mit der Clique machen?",
            "ar": "يوم ٣٠ يوليو يوم الصداقة. نعمل حاجة مع الشلة؟"
          },
          {
            "s": "Felix",
            "de": "Gute Idee! Was hältst du von einem Grillabend im Park?",
            "ar": "فكرة حلوة! إيه رأيك في سهرة شوي في الجنينة؟"
          },
          {
            "s": "Nadia",
            "de": "Super. Das ist eine tolle Gelegenheit, auch Sven wiederzusehen.",
            "ar": "تحفة. دي فرصة حلوة نشوف سفين كمان."
          },
          {
            "s": "Felix",
            "de": "Ich bringe den Grill mit. Wer kümmert sich um das Essen?",
            "ar": "أنا هجيب الشواية. مين هيتولّى الأكل؟"
          },
          {
            "s": "Nadia",
            "de": "Das übernehme ich. Und wenn es regnet?",
            "ar": "أنا عليا الأكل. طب ولو الدنيا مطرت؟"
          },
          {
            "s": "Felix",
            "de": "Dann feiern wir bei mir. Mein Balkon ist ja groß genug.",
            "ar": "يبقى نحتفل عندي. البلكونة بتاعتي كبيرة كفاية."
          },
          {
            "s": "Nadia",
            "de": "Perfekt. Bevor ich alle einlade, frage ich noch, wer Zeit hat.",
            "ar": "تمام. قبل ما أعزم الكل، هسأل الأول مين فاضي."
          },
          {
            "s": "Felix",
            "de": "Abgemacht! Ich freue mich schon.",
            "ar": "اتفقنا! أنا مستني اليوم ده من دلوقتي."
          }
        ],
        "task": "Planen Sie mit Ihrem Partner / Ihrer Partnerin ein Programm für den Tag der Freundschaft: Ort, Essen, Gäste und ein Plan B bei schlechtem Wetter.",
        "taskAr": "خطّط مع زميلك لبرنامج يوم الصداقة: المكان، والأكل، والمعازيم، وخطة بديلة لو الجو وحش."
      },
      {
        "situation": "Einer Freundin von einer Hochzeit erzählen",
        "situationAr": "تحكي لصاحبتك عن فرح",
        "phrases": [
          {
            "de": "Schade, dass du nicht mitkommen konntest!",
            "ar": "خسارة إنك ماقدرتيش تيجي!"
          },
          {
            "de": "Die Hochzeit war wirklich wunderschön.",
            "ar": "الفرح كان جميل جدًا بجد."
          },
          {
            "de": "Nachdem das Paar Ja gesagt hatte, haben alle geklatscht.",
            "ar": "بعد ما العرسان قالوا «أيوه»، الكل سقّف."
          },
          {
            "de": "Am besten hat mir die Rede des Bruders gefallen.",
            "ar": "أكتر حاجة عجبتني كانت كلمة الأخ."
          },
          {
            "de": "Während wir gegessen haben, spielte eine Band.",
            "ar": "وإحنا بناكل، كانت فيه فرقة بتعزف."
          },
          {
            "de": "Wir haben bis Mitternacht getanzt.",
            "ar": "رقصنا لحد نص الليل."
          },
          {
            "de": "Ich habe dir ein paar Fotos mitgebracht.",
            "ar": "جبتلك شوية صور."
          },
          {
            "de": "Geht es dir inzwischen wieder besser?",
            "ar": "بقيتي أحسن دلوقتي؟"
          },
          {
            "de": "Wollen wir uns nächste Woche treffen?",
            "ar": "نتقابل الأسبوع الجاي؟"
          }
        ],
        "dialogue": [
          {
            "s": "Sara",
            "de": "Und, wie war die Hochzeit? Schade, dass ich krank war!",
            "ar": "ها، الفرح كان عامل إزاي؟ خسارة إني كنت عيانة!"
          },
          {
            "s": "Leonie",
            "de": "Es war wunderschön! Nachdem Anna und Ben Ja gesagt hatten, haben alle geweint und geklatscht.",
            "ar": "كان تحفة! بعد ما آنا وبن قالوا «أيوه»، الكل عيّط وسقّف."
          },
          {
            "s": "Sara",
            "de": "Das ist aber schön! Was hat dir am besten gefallen?",
            "ar": "الله! إيه أكتر حاجة عجبتك؟"
          },
          {
            "s": "Leonie",
            "de": "Die Rede von Annas Bruder. Er hat lustige Einzelheiten aus ihrer Kindheit erzählt.",
            "ar": "كلمة أخو آنا. حكى تفاصيل مضحكة من طفولتها."
          },
          {
            "s": "Sara",
            "de": "Und habt ihr auch getanzt?",
            "ar": "وكمان رقصتوا؟"
          },
          {
            "s": "Leonie",
            "de": "Klar, bis Mitternacht! Während wir gegessen haben, hat eine Band gespielt.",
            "ar": "أكيد، لحد نص الليل! وإحنا بناكل كانت فيه فرقة بتعزف."
          },
          {
            "s": "Sara",
            "de": "Toll! Hast du Fotos gemacht?",
            "ar": "حلو! صوّرتي؟"
          },
          {
            "s": "Leonie",
            "de": "Ja, viele. Wollen wir uns am Samstag treffen? Dann zeige ich sie dir.",
            "ar": "أيوه، كتير. نتقابل يوم السبت؟ وأورّيكي الصور."
          }
        ],
        "task": "Sie waren auf einer Hochzeit, Ihr Freund / Ihre Freundin war krank. Erzählen Sie, wie die Feier war, was Ihnen am besten gefallen hat, und schlagen Sie ein Treffen vor.",
        "taskAr": "إنت كنت في فرح، وصاحبك كان عيان. احكيله الفرح كان عامل إزاي، وإيه أكتر حاجة عجبتك، واقترح تتقابلوا."
      }
    ],
    "8": [
      {
        "situation": "Im Krankenhaus: Ein Patient will aufstehen",
        "situationAr": "في المستشفى: مريض عايز يقوم من السرير",
        "phrases": [
          {
            "de": "Kann ich kurz spazieren gehen?",
            "ar": "ممكن أتمشّى شوية؟"
          },
          {
            "de": "Ich fühle mich noch etwas schwach.",
            "ar": "لسه حاسس إني ضعيف شوية."
          },
          {
            "de": "Mir ist ein bisschen schwindelig.",
            "ar": "أنا دايخ شوية."
          },
          {
            "de": "Ich muss Sie warnen: Draußen ist es sehr kalt.",
            "ar": "لازم أحذّر حضرتك: برّه الجو برد جدًا."
          },
          {
            "de": "Seien Sie vorsichtig, der Boden ist glatt!",
            "ar": "خلي بالك، الأرض بتزحلق!"
          },
          {
            "de": "Es ist dringend notwendig, dass Sie im Bett bleiben.",
            "ar": "ضروري جدًا إن حضرتك تفضل في السرير."
          },
          {
            "de": "Soll ich Sie begleiten?",
            "ar": "تحب آجي مع حضرتك؟"
          },
          {
            "de": "Können Sie mir bitte ein paar Zeitschriften bringen?",
            "ar": "ممكن تجيبيلي كام مجلة لو سمحتي؟"
          },
          {
            "de": "Sie brauchen nur zu klingeln.",
            "ar": "كل اللي عليك إنك ترن الجرس."
          }
        ],
        "dialogue": [
          {
            "s": "Herr Krause",
            "de": "Schwester Anna, ich liege schon seit zwei Tagen im Bett. Kann ich kurz in den Park gehen?",
            "ar": "يا سيستر آنا، أنا نايم في السرير بقالي يومين. ممكن أنزل الجنينة شوية؟"
          },
          {
            "s": "Anna",
            "de": "Ich muss Sie warnen: Draußen ist es kalt und die Wege sind glatt. Fühlen Sie sich denn schon fit?",
            "ar": "لازم أحذّر حضرتك: برّه الجو برد والطرق بتزحلق. حضرتك حاسس إنك كويس خلاص؟"
          },
          {
            "s": "Herr Krause",
            "de": "Na ja, mir ist noch ein bisschen schwindelig.",
            "ar": "يعني، لسه دايخ شوية."
          },
          {
            "s": "Anna",
            "de": "Dann ist es dringend notwendig, dass Sie heute noch im Bett bleiben. Sonst verletzen Sie sich vielleicht.",
            "ar": "يبقى ضروري جدًا إنك تفضل النهارده في السرير. وإلا ممكن تتعوّر."
          },
          {
            "s": "Herr Krause",
            "de": "Schade. Aber mir ist so langweilig!",
            "ar": "خسارة. بس أنا زهقان جدًا!"
          },
          {
            "s": "Anna",
            "de": "Ich kann Ihnen ein paar Zeitschriften bringen. Oder wir machen zusammen ein bisschen Gymnastik im Bett.",
            "ar": "أقدر أجيبلك كام مجلة. أو نعمل سوا شوية تمارين خفيفة في السرير."
          },
          {
            "s": "Herr Krause",
            "de": "Zeitschriften wären toll, vielen Dank.",
            "ar": "المجلات تبقى حلوة قوي، شكرًا جدًا."
          },
          {
            "s": "Anna",
            "de": "Gern. Und wenn Sie noch etwas möchten, brauchen Sie nur zu klingeln.",
            "ar": "العفو. ولو عايز أي حاجة تانية، بس رن الجرس."
          }
        ],
        "task": "Sie sind Pfleger oder Pflegerin. Ein Patient möchte allein aufstehen. Warnen Sie ihn und bieten Sie Hilfe an.",
        "taskAr": "إنت ممرض أو ممرضة. فيه مريض عايز يقوم لوحده. حذّره واعرض عليه مساعدة."
      },
      {
        "situation": "Beim Arzt über Beschwerden sprechen",
        "situationAr": "تحكي للدكتور عن تعبك",
        "phrases": [
          {
            "de": "Ich habe seit drei Tagen Kopfschmerzen.",
            "ar": "عندي صداع بقاله تلات أيام."
          },
          {
            "de": "Ich habe Schmerzen in der Brust.",
            "ar": "عندي وجع في صدري."
          },
          {
            "de": "Mir tut die Schulter weh.",
            "ar": "كتفي بيوجعني."
          },
          {
            "de": "Ich fühle mich schwach und müde.",
            "ar": "حاسس إني ضعيف وتعبان."
          },
          {
            "de": "Haben Sie auch Fieber?",
            "ar": "عندك سخونية كمان؟"
          },
          {
            "de": "Ich verschreibe Ihnen ein Schmerzmittel.",
            "ar": "هكتبلك على مسكّن."
          },
          {
            "de": "Ich schreibe Sie bis Freitag krank.",
            "ar": "هديك إجازة مرضي لحد يوم الجمعة."
          },
          {
            "de": "Wie oft muss ich die Tabletten einnehmen?",
            "ar": "لازم آخد الأقراص كام مرة؟"
          },
          {
            "de": "Muss ich noch einmal kommen?",
            "ar": "لازم آجي تاني؟"
          }
        ],
        "dialogue": [
          {
            "s": "Dr. Moltke",
            "de": "Guten Tag, Frau Haddad. Was fehlt Ihnen denn?",
            "ar": "أهلًا يا مدام حداد. خير، مالك؟"
          },
          {
            "s": "Frau Haddad",
            "de": "Ich habe seit drei Tagen starke Kopfschmerzen und fühle mich ganz schwach.",
            "ar": "عندي صداع جامد بقاله تلات أيام وحاسة إني ضعيفة خالص."
          },
          {
            "s": "Dr. Moltke",
            "de": "Haben Sie auch Fieber?",
            "ar": "عندك سخونية كمان؟"
          },
          {
            "s": "Frau Haddad",
            "de": "Nein, aber mir ist manchmal schwindelig.",
            "ar": "لأ، بس ساعات بدوخ."
          },
          {
            "s": "Dr. Moltke",
            "de": "Sie sind sehr blass. Trinken Sie genug? Sie sollten mindestens zwei Liter am Tag trinken.",
            "ar": "إنتِ شاحبة جدًا. بتشربي كفاية؟ المفروض تشربي على الأقل اتنين لتر في اليوم."
          },
          {
            "s": "Frau Haddad",
            "de": "Ehrlich gesagt trinke ich bei der Arbeit fast nichts.",
            "ar": "بصراحة في الشغل تقريبًا مش بشرب حاجة."
          },
          {
            "s": "Dr. Moltke",
            "de": "Das ist nicht gut für Sie! Ich verschreibe Ihnen ein Schmerzmittel und schreibe Sie bis Freitag krank.",
            "ar": "ده مش كويس ليكي! هكتبلك على مسكّن وهديكي إجازة مرضي لحد الجمعة."
          },
          {
            "s": "Frau Haddad",
            "de": "Danke. Muss ich noch einmal kommen?",
            "ar": "شكرًا. لازم آجي تاني؟"
          },
          {
            "s": "Dr. Moltke",
            "de": "Nein, Sie brauchen nur anzurufen, wenn es nicht besser wird.",
            "ar": "لأ، بس اتصلي لو مافيش تحسّن."
          }
        ],
        "task": "Spielen Sie ein Gespräch in der Arztpraxis. Beschreiben Sie Ihre Beschwerden und fragen Sie, wie Sie das Medikament einnehmen sollen.",
        "taskAr": "مثّل حوار في عيادة الدكتور. اوصف تعبك واسأل إزاي تاخد الدوا."
      },
      {
        "situation": "In der Apotheke ein Medikament abholen",
        "situationAr": "تستلم دوا من الصيدلية",
        "phrases": [
          {
            "de": "Ich habe hier ein Rezept von meiner Ärztin.",
            "ar": "معايا روشتة من الدكتورة بتاعتي."
          },
          {
            "de": "Wie muss ich das Medikament einnehmen?",
            "ar": "آخد الدوا ده إزاي؟"
          },
          {
            "de": "Lösen Sie das Pulver in einem Glas Wasser auf.",
            "ar": "دوّب البودرة في كوباية مية."
          },
          {
            "de": "Nehmen Sie die Tabletten vor dem Essen ein.",
            "ar": "خد الأقراص قبل الأكل."
          },
          {
            "de": "Wie lange muss ich das Medikament nehmen?",
            "ar": "لازم آخد الدوا لمدة قد إيه؟"
          },
          {
            "de": "Sie dürfen dabei keinen Alkohol trinken.",
            "ar": "ممنوع تشرب كحول مع الدوا ده."
          },
          {
            "de": "Muss ich das Medikament im Kühlschrank aufbewahren?",
            "ar": "لازم أحفظ الدوا في التلاجة؟"
          },
          {
            "de": "Haben Sie auch etwas gegen Halsschmerzen?",
            "ar": "عندك حاجة لوجع الزور كمان؟"
          }
        ],
        "dialogue": [
          {
            "s": "Karim",
            "de": "Guten Morgen. Ich habe hier ein Rezept von meiner Ärztin.",
            "ar": "صباح الخير. معايا روشتة من الدكتورة بتاعتي."
          },
          {
            "s": "Apothekerin",
            "de": "Einen Moment, bitte. Ja, das Schmerzmittel haben wir da. Es ist ein Pulver.",
            "ar": "ثانية واحدة لو سمحت. أيوه، المسكّن ده موجود عندنا. هو بودرة."
          },
          {
            "s": "Karim",
            "de": "Wie muss ich es denn einnehmen?",
            "ar": "طب آخده إزاي؟"
          },
          {
            "s": "Apothekerin",
            "de": "Lösen Sie das Pulver in einem Glas Wasser auf und nehmen Sie es morgens vor dem Frühstück ein.",
            "ar": "دوّب البودرة في كوباية مية وخدها الصبح قبل الفطار."
          },
          {
            "s": "Karim",
            "de": "Und wie lange?",
            "ar": "ولمدة قد إيه؟"
          },
          {
            "s": "Apothekerin",
            "de": "Fünf Tage. Ich muss Sie aber warnen: Sie dürfen dabei keinen Alkohol trinken.",
            "ar": "خمس أيام. بس لازم أحذّرك: ممنوع تشرب كحول معاه."
          },
          {
            "s": "Karim",
            "de": "Kein Problem. Muss ich das Medikament im Kühlschrank aufbewahren?",
            "ar": "مافيش مشكلة. لازم أحفظ الدوا في التلاجة؟"
          },
          {
            "s": "Apothekerin",
            "de": "Nein, das brauchen Sie nicht zu tun. Ein trockener Ort reicht.",
            "ar": "لأ، مش لازم. أي مكان ناشف يكفي."
          }
        ],
        "task": "Sie holen ein Medikament in der Apotheke ab. Fragen Sie, wie und wie lange Sie es einnehmen sollen und wie Sie es aufbewahren müssen.",
        "taskAr": "إنت بتستلم دوا من الصيدلية. اسأل تاخده إزاي ولمدة قد إيه وتحفظه إزاي."
      },
      {
        "situation": "Eine Freundin im Krankenhaus besuchen",
        "situationAr": "تزور صاحبتك في المستشفى",
        "phrases": [
          {
            "de": "Wie geht es dir heute?",
            "ar": "عاملة إيه النهارده؟"
          },
          {
            "de": "Ich habe dir Obst und Zeitschriften mitgebracht.",
            "ar": "جبتلك فاكهة ومجلات."
          },
          {
            "de": "Kann ich sonst noch etwas für dich tun?",
            "ar": "أقدر أعملك أي حاجة تانية؟"
          },
          {
            "de": "Soll ich dir etwas aus der Drogerie holen?",
            "ar": "تحبي أجيبلك حاجة من محل أدوات النظافة؟"
          },
          {
            "de": "Wann wirst du entlassen?",
            "ar": "هيخرّجوكي امتى؟"
          },
          {
            "de": "Die Besuchszeit ist gleich vorbei.",
            "ar": "ميعاد الزيارة قرّب يخلص."
          },
          {
            "de": "Gute Besserung!",
            "ar": "ألف سلامة عليكي!"
          },
          {
            "de": "Ruf mich an, wenn du etwas brauchst.",
            "ar": "كلّميني لو احتجتي أي حاجة."
          }
        ],
        "dialogue": [
          {
            "s": "Lena",
            "de": "Hallo Mona! Wie geht es dir heute?",
            "ar": "أهلًا يا منى! عاملة إيه النهارده؟"
          },
          {
            "s": "Mona",
            "de": "Schon einigermaßen gut, danke. Die Schulter tut nicht mehr so weh.",
            "ar": "كويسة شوية الحمد لله، شكرًا. كتفي مبقاش بيوجعني قوي."
          },
          {
            "s": "Lena",
            "de": "Schön! Ich habe dir Zeitschriften und Obst mitgebracht.",
            "ar": "حلو! جبتلك مجلات وفاكهة."
          },
          {
            "s": "Mona",
            "de": "Wie lieb von dir! Aber du brauchst mir nicht jedes Mal etwas mitzubringen.",
            "ar": "إنتِ زي العسل! بس مش لازم تجيبيلي حاجة كل مرة."
          },
          {
            "s": "Lena",
            "de": "Ach, das mache ich gern. Kann ich sonst noch etwas für dich tun?",
            "ar": "يا ستي بعملها بمزاجي. أقدر أعملك أي حاجة تانية؟"
          },
          {
            "s": "Mona",
            "de": "Ja, das wäre sehr nett: Kannst du mir aus der Drogerie eine Zahnbürste und Zahnpasta holen?",
            "ar": "أيوه، يبقى كتر خيرك: ممكن تجيبيلي فرشة سنان ومعجون من المحل؟"
          },
          {
            "s": "Lena",
            "de": "Klar, die Drogerie ist ja direkt am Haupteingang. Wann wirst du denn entlassen?",
            "ar": "أكيد، المحل جنب المدخل الرئيسي على طول. هيخرّجوكي امتى؟"
          },
          {
            "s": "Mona",
            "de": "Vermutlich am Freitag. Danach brauche ich nur noch zur Kontrolle zu kommen.",
            "ar": "غالبًا يوم الجمعة. بعدها هحتاج بس آجي للمتابعة."
          },
          {
            "s": "Lena",
            "de": "Super! Dann bis gleich, ich bin in zehn Minuten zurück.",
            "ar": "تمام! يلا أشوفك كمان شوية، راجعة بعد عشر دقايق."
          }
        ],
        "task": "Sie besuchen einen Freund oder eine Freundin im Krankenhaus. Fragen Sie, wie es ihm oder ihr geht, und bieten Sie Hilfe an.",
        "taskAr": "إنت بتزور صاحبك أو صاحبتك في المستشفى. اسأله عامل إيه واعرض عليه مساعدة."
      },
      {
        "situation": "Sich über den Musikgeschmack unterhalten",
        "situationAr": "تدردش مع حد عن ذوقكم في المزيكا",
        "phrases": [
          {
            "de": "Was für Musik hörst du gern?",
            "ar": "بتحب تسمع مزيكا إيه؟"
          },
          {
            "de": "Ich höre sowohl Pop als auch Jazz.",
            "ar": "بسمع بوب وجاز الاتنين."
          },
          {
            "de": "Ich mag weder Techno noch Heavy Metal.",
            "ar": "مش بحب لا تكنو ولا هيفي ميتال."
          },
          {
            "de": "Bei dieser Musik bekomme ich sofort gute Laune.",
            "ar": "المزيكا دي بتعدّل مزاجي على طول."
          },
          {
            "de": "Dieses Lied erinnert mich an meinen Urlaub.",
            "ar": "الأغنية دي بتفكّرني بالإجازة بتاعتي."
          },
          {
            "de": "Spielst du ein Instrument?",
            "ar": "بتعزف على أي آلة؟"
          },
          {
            "de": "Klassik wirkt auf mich beruhigend.",
            "ar": "المزيكا الكلاسيك بتهدّيني."
          },
          {
            "de": "Kommst du mit zum Konzert?",
            "ar": "تيجي معايا الحفلة؟"
          },
          {
            "de": "Das Lied geht mir nicht mehr aus dem Kopf.",
            "ar": "الأغنية مش راضية تطلع من دماغي."
          }
        ],
        "dialogue": [
          {
            "s": "Jonas",
            "de": "Was hörst du da gerade?",
            "ar": "إنتِ بتسمعي إيه دلوقتي؟"
          },
          {
            "s": "Salma",
            "de": "Ein Lied von Fairuz. Bei ihrer Musik bekomme ich sofort gute Laune.",
            "ar": "أغنية لفيروز. مزيكتها بتعدّل مزاجي على طول."
          },
          {
            "s": "Jonas",
            "de": "Die kenne ich nicht. Ist das eher traurige oder fröhliche Musik?",
            "ar": "معرفهاش. هي مزيكا حزينة ولا مبهجة؟"
          },
          {
            "s": "Salma",
            "de": "Beides! Manche Lieder sind zwar langsam, aber trotzdem nicht traurig. Und du, was hörst du gern?",
            "ar": "الاتنين! فيه أغاني صحيح بطيئة، بس برضه مش حزينة. وإنت بتحب تسمع إيه؟"
          },
          {
            "s": "Jonas",
            "de": "Ich höre sowohl Rock als auch Jazz. Nur Schlager mag ich gar nicht.",
            "ar": "بسمع روك وجاز الاتنين. بس الشلاجر مش بحبه خالص."
          },
          {
            "s": "Salma",
            "de": "Spielst du auch selbst ein Instrument?",
            "ar": "وإنت بتعزف على آلة بنفسك؟"
          },
          {
            "s": "Jonas",
            "de": "Ja, ich spiele seit zehn Jahren Gitarre. Am Samstag spielen wir übrigens ein Konzert im Jugendzentrum. Kommst du mit?",
            "ar": "أيوه، بعزف جيتار بقالي عشر سنين. وعلى فكرة، عندنا حفلة يوم السبت في مركز الشباب. تيجي؟"
          },
          {
            "s": "Salma",
            "de": "Gern! Entweder komme ich direkt nach der Arbeit oder ich treffe dich um acht dort.",
            "ar": "ياريت! يا إما هاجي على طول بعد الشغل، يا إما هقابلك هناك الساعة تمانية."
          }
        ],
        "task": "Unterhalten Sie sich mit einem Partner oder einer Partnerin über Ihren Musikgeschmack. Benutzen Sie mindestens drei zweiteilige Konnektoren.",
        "taskAr": "اتكلم مع زميلك أو زميلتك عن ذوقكم في المزيكا. استخدم على الأقل تلات روابط من جزئين."
      }
    ],
    "9": [
      {
        "situation": "Mit einer Freundin durch eine Ausstellung gehen",
        "situationAr": "تتفرج على معرض مع صاحبتك",
        "phrases": [
          {
            "de": "Schau mal, wie findest du dieses Bild?",
            "ar": "بصي، إيه رأيك في الصورة دي؟"
          },
          {
            "de": "Das gefällt mir total gut.",
            "ar": "دي عاجباني جدًا."
          },
          {
            "de": "Mich spricht es eigentlich nicht an.",
            "ar": "هي بصراحة مش بتشدني."
          },
          {
            "de": "Im Vordergrund sieht man …",
            "ar": "في المقدمة بنشوف …"
          },
          {
            "de": "Die Farben finde ich besonders schön.",
            "ar": "الألوان بالذات شايفاها حلوة."
          },
          {
            "de": "Ich finde es ziemlich durcheinander.",
            "ar": "شايفاها ملخبطة شوية."
          },
          {
            "de": "Was will der Künstler damit sagen?",
            "ar": "الفنان عايز يقول إيه بكده؟"
          },
          {
            "de": "Das regt wirklich zum Nachdenken an.",
            "ar": "دي فعلًا بتخليك تفكر."
          },
          {
            "de": "Über Geschmack kann man nicht streiten.",
            "ar": "الأذواق ما بتتناقشش."
          }
        ],
        "dialogue": [
          {
            "s": "Mona",
            "de": "Schau mal, Sara, wie findest du dieses Bild?",
            "ar": "بصي يا سارة، إيه رأيك في الصورة دي؟"
          },
          {
            "s": "Sara",
            "de": "Ehrlich gesagt ist es mir zu chaotisch. Ich sehe nur Farben und Linien.",
            "ar": "بصراحة شايفاها فوضوية زيادة. أنا مش شايفة غير ألوان وخطوط."
          },
          {
            "s": "Mona",
            "de": "Ich finde es wirklich super! In der Mitte sieht man doch eine Frau mit einer Rose.",
            "ar": "أنا شايفاها تحفة بجد! ما في النص فيه ست ماسكة وردة."
          },
          {
            "s": "Sara",
            "de": "Ach so, stimmt! Jetzt sehe ich sie auch. Und im Hintergrund ist eine Mauer, oder?",
            "ar": "آه صح! دلوقتي شايفاها. وفي الخلفية فيه سور، مش كده؟"
          },
          {
            "s": "Mona",
            "de": "Genau. Ich glaube, das Bild handelt vom Frieden.",
            "ar": "بالظبط. أنا شايفة إن الصورة بتتكلم عن السلام."
          },
          {
            "s": "Sara",
            "de": "Hm, das regt wirklich zum Nachdenken an. Aber kaufen würde ich es nicht.",
            "ar": "امم، دي فعلًا بتخلي الواحد يفكر. بس مش هشتريها."
          },
          {
            "s": "Mona",
            "de": "Na ja, über Geschmack kann man nicht streiten. Gehen wir weiter zu den Fotos?",
            "ar": "ماشي، الأذواق ما بتتناقشش. نكمّل على الصور؟"
          },
          {
            "s": "Sara",
            "de": "Gern, Fotos sprechen mich eher an als abstrakte Bilder.",
            "ar": "ماشي، الصور بتشدني أكتر من اللوحات التجريدية."
          }
        ],
        "task": "Sie sind mit einer Freundin oder einem Freund in einer Ausstellung. Beschreiben Sie ein Bild und sagen Sie, wie es Ihnen gefällt. Verstärken oder relativieren Sie Ihre Meinung.",
        "taskAr": "إنت في معرض مع صاحبك أو صاحبتك. اوصف صورة وقول عجبتك ولا لأ، وقوّي أو خفّف رأيك."
      },
      {
        "situation": "Sich für einen Kurs im Bildungszentrum anmelden",
        "situationAr": "تسجّل في كورس في مركز تعليمي",
        "phrases": [
          {
            "de": "Ich interessiere mich für den Malkurs.",
            "ar": "أنا مهتم بكورس الرسم."
          },
          {
            "de": "Habe ich richtig verstanden, dass der Kurs am Abend stattfindet?",
            "ar": "أنا فهمت صح إن الكورس بيكون بالليل؟"
          },
          {
            "de": "Braucht man eine besondere Qualifikation?",
            "ar": "محتاج مؤهل معين؟"
          },
          {
            "de": "Darf ich noch mal nachfragen, wie viel der Kurs kostet?",
            "ar": "ممكن أسأل تاني الكورس بكام؟"
          },
          {
            "de": "Muss ich das Material selbst mitbringen?",
            "ar": "لازم أجيب الخامات معايا؟"
          },
          {
            "de": "Sind noch Plätze frei?",
            "ar": "لسه فيه أماكن فاضية؟"
          },
          {
            "de": "Die Plätze sind leider begrenzt.",
            "ar": "الأماكن للأسف محدودة."
          },
          {
            "de": "Gibt es eine Broschüre mit allen Kursen?",
            "ar": "فيه بروشور فيه كل الكورسات؟"
          }
        ],
        "dialogue": [
          {
            "s": "Herr Yilmaz",
            "de": "Guten Tag, ich interessiere mich für die Theatergruppe „lautstark“.",
            "ar": "صباح الخير، أنا مهتم بفرقة المسرح «lautstark»."
          },
          {
            "s": "Frau Berger",
            "de": "Sehr gern. Der Kurs findet jeden Mittwoch von 18 bis 20 Uhr statt.",
            "ar": "أهلًا بيك. الكورس كل أربع من 6 لـ 8 بالليل."
          },
          {
            "s": "Herr Yilmaz",
            "de": "Ich habe aber keine Erfahrung mit Theater. Braucht man eine besondere Qualifikation?",
            "ar": "بس أنا ما عنديش خبرة في المسرح. محتاج مؤهل معين؟"
          },
          {
            "s": "Frau Berger",
            "de": "Nein, Sie brauchen keine Erfahrung, sondern nur Spaß am Spiel.",
            "ar": "لا، مش محتاج خبرة، محتاج بس تكون بتستمتع بالتمثيل."
          },
          {
            "s": "Herr Yilmaz",
            "de": "Habe ich richtig verstanden, dass wir am Ende ein Stück aufführen?",
            "ar": "أنا فهمت صح إننا في الآخر هنعرض مسرحية؟"
          },
          {
            "s": "Frau Berger",
            "de": "Ja, genau. Die Aufführung ist im Juni, und jede Person bekommt eine passende Rolle.",
            "ar": "أيوه بالظبط. العرض في يونيو، وكل واحد هياخد دور مناسب ليه."
          },
          {
            "s": "Herr Yilmaz",
            "de": "Darf ich noch mal nachfragen, wie viel der Kurs kostet?",
            "ar": "ممكن أسأل تاني الكورس بكام؟"
          },
          {
            "s": "Frau Berger",
            "de": "120 Euro für das Semester. Die Plätze sind aber begrenzt, melden Sie sich am besten gleich an.",
            "ar": "120 يورو للترم. بس الأماكن محدودة، فالأحسن تسجل دلوقتي."
          }
        ],
        "task": "Sie möchten einen künstlerischen Kurs besuchen. Rufen Sie im Bildungszentrum an, fragen Sie nach Zeit, Preis und Voraussetzungen und fragen Sie nach, wenn Sie etwas nicht verstanden haben.",
        "taskAr": "عايز تاخد كورس فني. كلّم المركز التعليمي واسأل عن المعاد والسعر والشروط، واسأل تاني لو في حاجة مش فاهمها."
      },
      {
        "situation": "Auf eine Anzeige für die Theatergruppe antworten",
        "situationAr": "ترد على إعلان لفرقة مسرح",
        "phrases": [
          {
            "de": "Ich rufe wegen Ihrer Anzeige an.",
            "ar": "أنا بتصل بخصوص إعلانكم."
          },
          {
            "de": "Suchen Sie noch alte Möbel für die Bühne?",
            "ar": "لسه بتدوروا على عفش قديم للمسرح؟"
          },
          {
            "de": "Ich habe eine alte Couch aus braunem Leder.",
            "ar": "عندي كنبة قديمة من جلد بني."
          },
          {
            "de": "Sie muss nicht mehr funktionieren, oder?",
            "ar": "مش لازم تكون شغالة، صح؟"
          },
          {
            "de": "Wann können Sie die Sachen abholen?",
            "ar": "إمتى تقدروا تيجوا تاخدوا الحاجات؟"
          },
          {
            "de": "Ich habe auch noch bunte Vasen und einen großen Spiegel.",
            "ar": "وعندي كمان فازات ملونة ومراية كبيرة."
          },
          {
            "de": "Das passt perfekt zu unserem Bühnenbild.",
            "ar": "ده مناسب جدًا لديكور المسرحية."
          },
          {
            "de": "Vielen Dank, wir sind Ihnen sehr dankbar!",
            "ar": "شكرًا جدًا، إحنا ممتنين ليك جدًا!"
          }
        ],
        "dialogue": [
          {
            "s": "Laila",
            "de": "Hallo, hier ist Laila. Ich rufe wegen Ihrer Anzeige an. Suchen Sie noch alte Möbel?",
            "ar": "ألو، معاك ليلى. بتصل بخصوص إعلانك. لسه بتدور على عفش قديم؟"
          },
          {
            "s": "Mike",
            "de": "Ja, wir brauchen für unser Theaterstück bequeme Stühle und einen runden Tisch.",
            "ar": "أيوه، محتاجين للمسرحية كراسي مريحة وترابيزة مدورة."
          },
          {
            "s": "Laila",
            "de": "Einen runden Tisch habe ich nicht, sondern einen eckigen. Aber ich habe eine alte Couch.",
            "ar": "ترابيزة مدورة ما عنديش، عندي واحدة مربعة. بس عندي كنبة قديمة."
          },
          {
            "s": "Mike",
            "de": "Super! Eine alte Couch passt perfekt zu unserem Bühnenbild. Ist sie sehr groß?",
            "ar": "جامد! كنبة قديمة هتبقى مناسبة جدًا للديكور. هي كبيرة قوي؟"
          },
          {
            "s": "Laila",
            "de": "Nicht sehr groß, aber schwer. Ich habe auch noch bunte Vasen und einen großen Spiegel.",
            "ar": "مش كبيرة قوي، بس تقيلة. وعندي كمان فازات ملونة ومراية كبيرة."
          },
          {
            "s": "Mike",
            "de": "Toll, die nehmen wir gern. Wann kann ich die Sachen abholen?",
            "ar": "تمام، هناخدهم بكل سرور. إمتى أقدر آجي آخد الحاجات؟"
          },
          {
            "s": "Laila",
            "de": "Am Samstagvormittag bin ich zu Hause.",
            "ar": "يوم السبت الصبح هكون في البيت."
          },
          {
            "s": "Mike",
            "de": "Perfekt, dann komme ich um zehn Uhr. Vielen Dank, wir sind Ihnen sehr dankbar!",
            "ar": "تمام، يبقى آجي الساعة عشرة. شكرًا جدًا، إحنا ممتنين ليكي جدًا!"
          }
        ],
        "task": "Eine Theatergruppe sucht Gegenstände für die Bühne. Rufen Sie an und beschreiben Sie genau, was Sie anbieten können (Adjektive ohne Artikel!). Vereinbaren Sie einen Termin zum Abholen.",
        "taskAr": "فرقة مسرح بتدور على حاجات للديكور. اتصل واوصف بالظبط إنت عندك إيه (استخدم صفات من غير أداة!)، واتفق على معاد ييجوا ياخدوها."
      },
      {
        "situation": "Nach der Vorstellung über das Theaterstück sprechen",
        "situationAr": "تتكلم عن المسرحية بعد العرض",
        "phrases": [
          {
            "de": "Wie hat dir das Stück gefallen?",
            "ar": "المسرحية عجبتك؟"
          },
          {
            "de": "Ich bin total begeistert!",
            "ar": "أنا منبهر خالص!"
          },
          {
            "de": "Die Schauspieler waren richtig gut.",
            "ar": "الممثلين كانوا جامدين فعلًا."
          },
          {
            "de": "Das Bühnenbild fand ich besonders schön.",
            "ar": "الديكور بالذات شايفه حلو."
          },
          {
            "de": "Der zweite Teil war eher langweilig.",
            "ar": "الجزء التاني كان ممل شوية."
          },
          {
            "de": "Worum ging es eigentlich am Ende?",
            "ar": "هو في الآخر كان الموضوع إيه بالظبط؟"
          },
          {
            "de": "Die Kostüme passten gut zur Epoche des Stücks.",
            "ar": "الأزياء كانت مناسبة لزمن المسرحية."
          },
          {
            "de": "Ich kann das Stück wirklich empfehlen.",
            "ar": "بجد أنصح بالمسرحية."
          }
        ],
        "dialogue": [
          {
            "s": "Omar",
            "de": "Und, wie hat dir das Stück gefallen?",
            "ar": "ها، المسرحية عجبتك؟"
          },
          {
            "s": "Nina",
            "de": "Ich bin total begeistert! Die Hauptdarstellerin war richtig gut.",
            "ar": "أنا منبهرة خالص! البطلة كانت جامدة جدًا."
          },
          {
            "s": "Omar",
            "de": "Ja, und das Bühnenbild fand ich besonders schön – das alte Treppenhaus sah so echt aus.",
            "ar": "أيوه، والديكور بالذات شايفه حلو، بيت السلم القديم كان شكله حقيقي جدًا."
          },
          {
            "s": "Nina",
            "de": "Stimmt. Nur der zweite Teil war mir eher zu lang.",
            "ar": "صح. بس الجزء التاني كان طويل شوية بالنسبالي."
          },
          {
            "s": "Omar",
            "de": "Findest du? Ich fand ihn nicht langweilig, sondern spannend. Mich hat das Ende sehr bewegt.",
            "ar": "بجد؟ أنا ما شفتوش ممل، بالعكس شايفه مشوّق. النهاية أثرت فيّا جدًا."
          },
          {
            "s": "Nina",
            "de": "Mich auch. Habe ich eigentlich richtig verstanden, dass der Dieb ihr Bruder war?",
            "ar": "وأنا كمان. هو أنا فهمت صح إن الحرامي كان أخوها؟"
          },
          {
            "s": "Omar",
            "de": "Nein, nicht ihr Bruder, sondern ihr Neffe!",
            "ar": "لا، مش أخوها، ده ابن أخوها!"
          },
          {
            "s": "Nina",
            "de": "Ach so! Na ja, ich kann das Stück trotzdem wirklich empfehlen.",
            "ar": "آه كده! على العموم، بجد أنصح بالمسرحية."
          }
        ],
        "task": "Sie waren mit einer Freundin oder einem Freund im Theater. Sprechen Sie über das Stück, die Schauspieler, das Bühnenbild und die Kostüme. Korrigieren Sie Missverständnisse mit „nicht …, sondern …“.",
        "taskAr": "كنت في المسرح مع صاحبك. اتكلموا عن المسرحية والممثلين والديكور والأزياء، وصحّح أي سوء فهم بـ «nicht …, sondern …»."
      },
      {
        "situation": "Einen Nachbarn zum Chor einladen",
        "situationAr": "تعزم جارك ييجي الكورال",
        "phrases": [
          {
            "de": "Hast du Lust, mal mit in unseren Chor zu kommen?",
            "ar": "تحب تيجي معانا الكورال مرة؟"
          },
          {
            "de": "Bei uns kann jeder mitmachen.",
            "ar": "عندنا أي حد يقدر يشارك."
          },
          {
            "de": "Man braucht keine Erfahrung.",
            "ar": "مش محتاج خبرة."
          },
          {
            "de": "Wir singen vor allem Volkslieder.",
            "ar": "إحنا بنغني أغاني شعبية أساسًا."
          },
          {
            "de": "Ich singe nur heimlich unter der Dusche.",
            "ar": "أنا بغني بس في السر في الدُش."
          },
          {
            "de": "Das ist schon lange her.",
            "ar": "ده كان من زمان قوي."
          },
          {
            "de": "Die Treffen sind immer donnerstags.",
            "ar": "اللقاءات دايمًا يوم الخميس."
          },
          {
            "de": "Mach dir keine Gedanken, das klappt schon!",
            "ar": "ما تقلقش، هتمشي!"
          }
        ],
        "dialogue": [
          {
            "s": "Karim",
            "de": "Hallo Herr Schulz! Hätten Sie Lust, mal mit in unseren Chor zu kommen?",
            "ar": "أهلًا يا أستاذ شولتس! تحب تيجي معانا الكورال مرة؟"
          },
          {
            "s": "Herr Schulz",
            "de": "In einen Chor? Ich habe früher im Schulchor gesungen, aber das ist schon lange her.",
            "ar": "كورال؟ أنا زمان كنت بغني في كورال المدرسة، بس ده من زمان قوي."
          },
          {
            "s": "Karim",
            "de": "Das macht nichts. Man braucht keine Erfahrung, sondern nur Spaß am Singen.",
            "ar": "مش مشكلة. مش محتاج خبرة، محتاج بس تكون بتحب الغُنا."
          },
          {
            "s": "Herr Schulz",
            "de": "Und was singen Sie da? Moderne Popsongs?",
            "ar": "وبتغنوا إيه هناك؟ أغاني بوب حديثة؟"
          },
          {
            "s": "Karim",
            "de": "Nein, nicht Popsongs, sondern vor allem alte Volkslieder. Die Melodien kennt jeder.",
            "ar": "لا، مش بوب، أغلبها أغاني شعبية قديمة. الألحان دي الكل عارفها."
          },
          {
            "s": "Herr Schulz",
            "de": "Hm, ich weiß nicht. Ich singe sonst nur heimlich unter der Dusche.",
            "ar": "امم، مش عارف. أنا عادةً بغني بس في السر في الدُش."
          },
          {
            "s": "Karim",
            "de": "Machen Sie sich keine Gedanken! Die Treffen sind donnerstags um 19 Uhr im Gemeindehaus.",
            "ar": "ما تقلقش خالص! اللقاءات كل خميس الساعة 7 بالليل في قاعة الحي."
          },
          {
            "s": "Herr Schulz",
            "de": "Na gut, ich komme einmal mit und sehe erst mal zu.",
            "ar": "خلاص ماشي، هاجي مرة وأتفرج الأول."
          }
        ],
        "task": "Laden Sie eine Person aus Ihrer Nachbarschaft zu Ihrem Chor oder Ihrer Musikgruppe ein. Erzählen Sie, was Sie singen oder spielen, und reagieren Sie auf Bedenken.",
        "taskAr": "اعزم حد من جيرانك ييجي الكورال أو الفرقة الموسيقية بتاعتك. احكي بتغنوا أو بتعزفوا إيه، وطمّنه لو عنده تردد."
      }
    ],
    "10": [
      {
        "situation": "Sich als Helfer bei der Tafel melden",
        "situationAr": "تتطوع كمساعد في بنك الطعام (التافل)",
        "phrases": [
          {
            "de": "Ich würde gern ehrenamtlich bei Ihnen mithelfen.",
            "ar": "حابب أساعد معاكم بشكل تطوعي."
          },
          {
            "de": "Welche Aufgaben gibt es für neue Helfer?",
            "ar": "إيه المهام اللي ممكن يعملها المتطوعين الجداد؟"
          },
          {
            "de": "Wie viele Stunden pro Woche sollte man Zeit haben?",
            "ar": "المفروض يكون عندي كام ساعة في الأسبوع؟"
          },
          {
            "de": "Ich habe samstags meistens Zeit.",
            "ar": "أنا غالبًا فاضي يوم السبت."
          },
          {
            "de": "Muss ich vorher eine Schulung machen?",
            "ar": "لازم آخد تدريب الأول؟"
          },
          {
            "de": "Ich kann auch Arabisch übersetzen, wenn das hilft.",
            "ar": "وأقدر كمان أترجم عربي لو ده هيساعد."
          },
          {
            "de": "Wann kann ich anfangen?",
            "ar": "أقدر أبدأ إمتى؟"
          },
          {
            "de": "Wo und wann werden die Lebensmittel verteilt?",
            "ar": "الأكل بيتوزّع فين وإمتى؟"
          },
          {
            "de": "Vielen Dank, ich freue mich auf die Arbeit im Team.",
            "ar": "شكرًا جدًا، مستني أشتغل مع الفريق."
          }
        ],
        "dialogue": [
          {
            "s": "Omar",
            "de": "Guten Tag, ich habe Ihren Aufruf gelesen. Ich würde gern ehrenamtlich bei der Tafel mithelfen.",
            "ar": "صباح الخير، قريت الإعلان بتاعكم. حابب أساعد كمتطوع في التافل."
          },
          {
            "s": "Frau Berger",
            "de": "Das freut mich sehr! Neue Helfer werden immer gebraucht. Wann hätten Sie denn Zeit?",
            "ar": "ده يفرّحني جدًا! إحنا دايمًا محتاجين متطوعين جداد. انت فاضي إمتى؟"
          },
          {
            "s": "Omar",
            "de": "Ich habe samstags meistens Zeit. Welche Aufgaben gibt es denn?",
            "ar": "أنا غالبًا فاضي يوم السبت. إيه المهام اللي عندكم؟"
          },
          {
            "s": "Frau Berger",
            "de": "Am Samstagvormittag werden die Lebensmittel bei den Supermärkten abgeholt und sortiert. Ab zwölf Uhr werden sie verteilt.",
            "ar": "يوم السبت الصبح بيتجاب الأكل من السوبرماركتات وبيتفرز. ومن الساعة اتناشر بيتوزّع."
          },
          {
            "s": "Omar",
            "de": "Muss ich vorher eine Schulung machen?",
            "ar": "لازم آخد تدريب الأول؟"
          },
          {
            "s": "Frau Berger",
            "de": "Ja, alle neuen Helfer werden an einem Abend über die Hygienevorschriften informiert. Das dauert nur zwei Stunden.",
            "ar": "أيوه، كل المتطوعين الجداد بيتعرّفوا في سهرة واحدة على قواعد النظافة. ده بياخد ساعتين بس."
          },
          {
            "s": "Omar",
            "de": "Gut. Ich spreche übrigens Arabisch und kann auch übersetzen, wenn das hilft.",
            "ar": "تمام. على فكرة أنا بتكلم عربي وأقدر أترجم كمان لو ده هيفيد."
          },
          {
            "s": "Frau Berger",
            "de": "Wunderbar, das ist sehr nützlich! Dann sehen wir uns nächsten Samstag um acht Uhr.",
            "ar": "هايل، ده مفيد جدًا! يبقى نتقابل السبت الجاي الساعة تمانية."
          }
        ],
        "task": "Sie möchten sich ehrenamtlich engagieren. Rufen Sie bei einer Organisation an, fragen Sie nach Aufgaben, Zeiten und Schulungen und sagen Sie, was Sie gut können.",
        "taskAr": "انت عايز تشتغل متطوع. اتصل بمنظمة واسأل عن المهام والمواعيد والتدريب، وقول انت شاطر في إيه."
      },
      {
        "situation": "Einem älteren Nachbarn Hilfe anbieten",
        "situationAr": "تعرض المساعدة على جار كبير في السن",
        "phrases": [
          {
            "de": "Entschuldigung, kann ich Ihnen helfen?",
            "ar": "لو سمحت، أقدر أساعدك؟"
          },
          {
            "de": "Soll ich Ihnen die Tasche nach oben tragen?",
            "ar": "تحب أطلّعلك الشنطة فوق؟"
          },
          {
            "de": "Ich gehe sowieso einkaufen. Brauchen Sie etwas?",
            "ar": "أنا كده كده نازل أشتري حاجات. محتاج حاجة؟"
          },
          {
            "de": "Schreiben Sie mir einfach eine Liste.",
            "ar": "اكتبلي ليستة وخلاص."
          },
          {
            "de": "Das mache ich gern, das ist doch selbstverständlich.",
            "ar": "ده بعمله بكل سرور، ده واجب."
          },
          {
            "de": "Sie können mich jederzeit anrufen.",
            "ar": "تقدر تكلمني في أي وقت."
          },
          {
            "de": "Hier ist meine Telefonnummer, ich bin abends immer erreichbar.",
            "ar": "ده رقمي، وأنا موجود دايمًا بالليل."
          },
          {
            "de": "Das ist wirklich kein Problem.",
            "ar": "ده بجد مش مشكلة خالص."
          },
          {
            "de": "Sagen Sie Bescheid, wenn Sie wieder Hilfe brauchen.",
            "ar": "قولّي لو احتجت مساعدة تاني."
          }
        ],
        "dialogue": [
          {
            "s": "Lea",
            "de": "Guten Morgen, Herr Krause! Die Tasche sieht schwer aus. Soll ich sie Ihnen nach oben tragen?",
            "ar": "صباح الخير يا أستاذ كراوزه! الشنطة شكلها تقيلة. تحب أطلّعهالك فوق؟"
          },
          {
            "s": "Herr Krause",
            "de": "Oh, das ist sehr nett von Ihnen. Mein Knie tut seit Wochen weh.",
            "ar": "آه، ده لطف كبير منك. ركبتي بتوجعني من أسابيع."
          },
          {
            "s": "Lea",
            "de": "Das tut mir leid. Ich gehe übrigens zweimal pro Woche einkaufen. Brauchen Sie auch etwas?",
            "ar": "سلامتك. على فكرة أنا بنزل أشتري حاجات مرتين في الأسبوع. محتاج حاجة انت كمان؟"
          },
          {
            "s": "Herr Krause",
            "de": "Wirklich? Ich möchte Ihnen aber keine Mühe machen.",
            "ar": "بجد؟ بس مش عايز أتعبك."
          },
          {
            "s": "Lea",
            "de": "Das ist doch selbstverständlich! Schreiben Sie mir einfach eine Liste.",
            "ar": "ده واجب! اكتبلي ليستة وخلاص."
          },
          {
            "s": "Herr Krause",
            "de": "Dann bräuchte ich Vollmilch, Quark und ein paar Semmeln. Was bin ich Ihnen schuldig?",
            "ar": "يبقى محتاج لبن كامل الدسم وجبنة كوارك وشوية عيش فينو. أدفعلك كام؟"
          },
          {
            "s": "Lea",
            "de": "Wir rechnen ab, wenn ich zurück bin. Hier ist meine Nummer, ich bin abends immer erreichbar.",
            "ar": "نتحاسب لما أرجع. ده رقمي، وأنا موجودة دايمًا بالليل."
          },
          {
            "s": "Herr Krause",
            "de": "Vielen Dank! So viel Hilfsbereitschaft erlebt man heute selten.",
            "ar": "متشكر جدًا! الواحد نادرًا لما يلاقي الاستعداد ده للمساعدة النهارده."
          }
        ],
        "task": "Ihre ältere Nachbarin kann nicht mehr gut laufen. Bieten Sie ihr Hilfe beim Einkaufen an, fragen Sie, was sie braucht, und vereinbaren Sie, wie Sie in Kontakt bleiben.",
        "taskAr": "جارتك الكبيرة في السن مبقتش تقدر تمشي كويس. اعرض عليها تساعدها في المشتريات، اسألها محتاجة إيه، واتفقوا إزاي تفضلوا على تواصل."
      },
      {
        "situation": "Beim Bürgeramt einen Wohnsitz anmelden",
        "situationAr": "تسجّل عنوان سكنك في مكتب المواطنين",
        "phrases": [
          {
            "de": "Ich möchte meinen neuen Wohnsitz anmelden.",
            "ar": "عايز أسجّل عنوان سكني الجديد."
          },
          {
            "de": "Ich habe einen Termin um zehn Uhr.",
            "ar": "عندي ميعاد الساعة عشرة."
          },
          {
            "de": "Welche Unterlagen brauche ich?",
            "ar": "محتاج أوراق إيه؟"
          },
          {
            "de": "Hier sind mein Pass und die Wohnungsgeberbestätigung.",
            "ar": "اتفضل الباسبور وإقرار صاحب السكن."
          },
          {
            "de": "Muss das Formular auf Deutsch ausgefüllt werden?",
            "ar": "لازم الاستمارة تتملي بالألماني؟"
          },
          {
            "de": "Kann das auch online erledigt werden?",
            "ar": "ينفع ده يتعمل أونلاين؟"
          },
          {
            "de": "Bis wann muss ich mich anmelden?",
            "ar": "لازم أسجّل لحد إمتى؟"
          },
          {
            "de": "Wann bekomme ich die Meldebescheinigung?",
            "ar": "هاخد شهادة التسجيل إمتى؟"
          },
          {
            "de": "Könnten Sie das bitte noch einmal langsam erklären?",
            "ar": "ممكن تشرح ده تاني بالراحة لو سمحت؟"
          }
        ],
        "dialogue": [
          {
            "s": "Herr Wolff",
            "de": "Guten Tag. Was kann ich für Sie tun?",
            "ar": "صباح الخير. أقدر أساعدك في إيه؟"
          },
          {
            "s": "Nadia",
            "de": "Guten Tag. Ich bin letzte Woche umgezogen und möchte meinen neuen Wohnsitz anmelden.",
            "ar": "صباح الخير. أنا عزّلت الأسبوع اللي فات وعايزة أسجّل عنواني الجديد."
          },
          {
            "s": "Herr Wolff",
            "de": "Gut. Haben Sie Ihren Pass und die Bestätigung vom Vermieter dabei?",
            "ar": "تمام. معاكي الباسبور والإقرار من صاحب الشقة؟"
          },
          {
            "s": "Nadia",
            "de": "Ja, hier bitte. Muss das Formular noch ausgefüllt werden?",
            "ar": "أيوه، اتفضل. لسه لازم الاستمارة تتملي؟"
          },
          {
            "s": "Herr Wolff",
            "de": "Nein, das wird jetzt direkt am Computer gemacht. Waren Sie vorher in einer anderen Stadt gemeldet?",
            "ar": "لأ، ده بيتعمل دلوقتي على الكمبيوتر على طول. كنتي متسجّلة قبل كده في مدينة تانية؟"
          },
          {
            "s": "Nadia",
            "de": "Ja, in Leipzig. Muss ich mich dort noch abmelden?",
            "ar": "أيوه، في لايبزيج. لازم ألغي تسجيلي هناك؟"
          },
          {
            "s": "Herr Wolff",
            "de": "Nein, das wird automatisch erledigt. So, hier ist Ihre Meldebescheinigung.",
            "ar": "لأ، ده بيتعمل أوتوماتيك. اتفضلي، دي شهادة التسجيل بتاعتك."
          },
          {
            "s": "Nadia",
            "de": "Das ging aber schnell! Vielen Dank für Ihre Hilfe.",
            "ar": "ده كان سريع قوي! شكرًا جدًا على مساعدتك."
          }
        ],
        "task": "Sie sind in eine neue Stadt gezogen. Melden Sie sich beim Amt an: Fragen Sie nach den Unterlagen, nach Fristen und danach, was noch erledigt werden muss.",
        "taskAr": "انت نقلت لمدينة جديدة. سجّل نفسك في المصلحة: اسأل عن الأوراق المطلوبة والمواعيد النهائية وإيه اللي لسه لازم يتعمل."
      },
      {
        "situation": "In der Bürgerversammlung über ein Projekt diskutieren",
        "situationAr": "تناقش مشروع في اجتماع المواطنين",
        "phrases": [
          {
            "de": "Ich möchte gern etwas zu diesem Vorhaben sagen.",
            "ar": "حابب أقول حاجة عن المشروع ده."
          },
          {
            "de": "Meiner Meinung nach sollte das Geld für einen Spielplatz verwendet werden.",
            "ar": "في رأيي الفلوس المفروض تتصرف على ملعب أطفال."
          },
          {
            "de": "Ich bin überzeugt, dass ein Jugendzentrum gebraucht wird.",
            "ar": "أنا مقتنع إن إحنا محتاجين مركز شباب."
          },
          {
            "de": "Da kann ich Ihnen nicht ganz zustimmen.",
            "ar": "مقدرش أوافقك تمامًا في دي."
          },
          {
            "de": "Wer soll das finanzieren?",
            "ar": "مين هيموّل ده؟"
          },
          {
            "de": "Das ist zu teuer, aber eine kleinere Lösung wäre machbar.",
            "ar": "ده غالي قوي، بس حل أصغر ممكن يتعمل."
          },
          {
            "de": "Ich schlage vor, dass wir darüber abstimmen.",
            "ar": "أنا بقترح إننا نصوّت على الموضوع ده."
          },
          {
            "de": "Wann wird die Entscheidung getroffen?",
            "ar": "القرار هيتاخد إمتى؟"
          },
          {
            "de": "Wir müssen auch an die älteren Menschen denken.",
            "ar": "لازم نفكر كمان في الناس الكبار في السن."
          }
        ],
        "dialogue": [
          {
            "s": "Bürgermeisterin Lang",
            "de": "Heute soll über die Nutzung des alten Bahnhofs abgestimmt werden. Wer möchte etwas sagen?",
            "ar": "النهارده المفروض نصوّت على استخدام المحطة القديمة. مين عايز يقول حاجة؟"
          },
          {
            "s": "Herr Yilmaz",
            "de": "Ich bin überzeugt, dass dort ein Jugendzentrum gebraucht wird. Die Jugendlichen haben keinen Treffpunkt.",
            "ar": "أنا مقتنع إن إحنا محتاجين هناك مركز شباب. الشباب مالهمش مكان يتقابلوا فيه."
          },
          {
            "s": "Bürgermeisterin Lang",
            "de": "Danke. Aber wer soll das Jugendzentrum finanzieren? Die Stadt hat wenig Geld.",
            "ar": "شكرًا. بس مين هيموّل مركز الشباب؟ المدينة مفيش معاها فلوس كتير."
          },
          {
            "s": "Herr Yilmaz",
            "de": "Ein Teil kann durch Spenden finanziert werden. Und viele Eltern würden ehrenamtlich mithelfen.",
            "ar": "جزء ممكن يتموّل من التبرعات. وأهالي كتير هيساعدوا كمتطوعين."
          },
          {
            "s": "Bürgermeisterin Lang",
            "de": "Das ist eine gute Idee. Allerdings müssen auch die älteren Bürger berücksichtigt werden.",
            "ar": "دي فكرة حلوة. بس لازم كمان ناخد في اعتبارنا المواطنين الكبار في السن."
          },
          {
            "s": "Herr Yilmaz",
            "de": "Dann schlage ich ein Begegnungszentrum für alle Generationen vor. Das wäre auch machbar.",
            "ar": "يبقى أنا بقترح مركز لقاءات لكل الأجيال. وده كمان ممكن يتعمل."
          },
          {
            "s": "Bürgermeisterin Lang",
            "de": "Gut. Dann stimmen wir jetzt über diesen Vorschlag ab. Wer ist dafür?",
            "ar": "تمام. يبقى نصوّت دلوقتي على الاقتراح ده. مين موافق؟"
          },
          {
            "s": "Herr Yilmaz",
            "de": "Fast alle Hände sind oben. Der Vorschlag wurde angenommen!",
            "ar": "تقريبًا كل الإيدين مرفوعة. الاقتراح اتقبل!"
          }
        ],
        "task": "In Ihrer Stadt wird ein altes Gebäude frei. Machen Sie in der Bürgerversammlung einen Vorschlag, begründen Sie ihn und reagieren Sie auf Gegenargumente.",
        "taskAr": "في مدينتك فيه مبنى قديم فاضي. اعمل اقتراح في اجتماع المواطنين، برّره، وردّ على الآراء المعارضة."
      },
      {
        "situation": "Mit einer Dolmetscherin einen Arzttermin vorbereiten",
        "situationAr": "تجهّز لميعاد عند الدكتور مع مترجمة",
        "phrases": [
          {
            "de": "Ich brauche für meinen Arzttermin eine Dolmetscherin.",
            "ar": "محتاج مترجمة لميعادي عند الدكتور."
          },
          {
            "de": "Können Sie für mich vermitteln?",
            "ar": "ممكن تتوسطي ليّا / تترجمي بيني وبينهم؟"
          },
          {
            "de": "Wird der Termin von der Krankenkasse bezahlt?",
            "ar": "التأمين الصحي بيدفع تمن الميعاد ده؟"
          },
          {
            "de": "Ich verstehe die medizinischen Wörter nicht gut.",
            "ar": "مش بفهم الكلمات الطبية كويس."
          },
          {
            "de": "Bitte erklären Sie dem Arzt, dass …",
            "ar": "لو سمحتي اشرحي للدكتور إن …"
          },
          {
            "de": "In meiner Kultur ist das ein bisschen anders.",
            "ar": "في ثقافتي الموضوع ده مختلف شوية."
          },
          {
            "de": "Wann und wo treffen wir uns?",
            "ar": "هنتقابل إمتى وفين؟"
          },
          {
            "de": "Soll ich meine Unterlagen mitbringen?",
            "ar": "أجيب أوراقي معايا؟"
          },
          {
            "de": "Vielen Dank, das beruhigt mich sehr.",
            "ar": "شكرًا جدًا، ده مطمّنّي قوي."
          }
        ],
        "dialogue": [
          {
            "s": "Herr Haddad",
            "de": "Guten Tag, Frau Aksoy. Ich habe am Donnerstag einen Termin beim Kinderarzt und brauche Ihre Hilfe.",
            "ar": "صباح الخير يا مدام أكسوي. عندي ميعاد يوم الخميس عند دكتور الأطفال ومحتاج مساعدتك."
          },
          {
            "s": "Frau Aksoy",
            "de": "Gern. Worum geht es bei dem Termin?",
            "ar": "بكل سرور. الميعاد عن إيه؟"
          },
          {
            "s": "Herr Haddad",
            "de": "Mein Sohn soll untersucht werden, weil er oft Bauchschmerzen hat. Ich verstehe die medizinischen Wörter nicht gut.",
            "ar": "ابني المفروض يتكشف عليه، لأنه بيتعب في بطنه كتير. وأنا مش بفهم الكلمات الطبية كويس."
          },
          {
            "s": "Frau Aksoy",
            "de": "Kein Problem. Ich übersetze alles und erkläre auch, wenn etwas kulturell unterschiedlich ist.",
            "ar": "مفيش مشكلة. هترجم كل حاجة، وهشرح كمان لو فيه حاجة مختلفة ثقافيًا."
          },
          {
            "s": "Herr Haddad",
            "de": "Muss Ihre Arbeit von mir bezahlt werden?",
            "ar": "لازم أنا أدفع تمن شغلك؟"
          },
          {
            "s": "Frau Aksoy",
            "de": "Nein, der Einsatz wird von der Stadt finanziert. Für Sie ist er kostenlos.",
            "ar": "لأ، الشغل ده بتموّله المدينة. بالنسبة لك ببلاش."
          },
          {
            "s": "Herr Haddad",
            "de": "Das beruhigt mich sehr. Soll ich die Unterlagen vom letzten Arzt mitbringen?",
            "ar": "ده مطمّنّي قوي. أجيب الأوراق من الدكتور اللي فات؟"
          },
          {
            "s": "Frau Aksoy",
            "de": "Ja, bitte. Wir treffen uns um halb neun vor der Praxis.",
            "ar": "أيوه لو سمحت. هنتقابل الساعة تمانية ونص قدام العيادة."
          }
        ],
        "task": "Sie brauchen bei einem wichtigen Termin (Arzt, Schule oder Amt) Unterstützung von einem Dolmetscher. Rufen Sie an, erklären Sie Ihr Problem und klären Sie Ort, Zeit und Kosten.",
        "taskAr": "انت محتاج مساعدة من مترجم في ميعاد مهم (دكتور أو مدرسة أو مصلحة). اتصل، اشرح مشكلتك، واتفق على المكان والوقت والتكلفة."
      }
    ],
    "11": [
      {
        "situation": "Im neuen Viertel nach Geschäften und Orten fragen",
        "situationAr": "تسأل عن المحلات والأماكن في الحي الجديد",
        "phrases": [
          {
            "de": "Entschuldigung, ich bin neu hier im Viertel.",
            "ar": "لو سمحت، أنا لسه جديد في الحي ده."
          },
          {
            "de": "Gibt es hier in der Nähe eine Apotheke?",
            "ar": "فيه صيدلية قريبة من هنا؟"
          },
          {
            "de": "Ja, gleich da drüben ist eine.",
            "ar": "أيوه، فيه واحدة هناك على طول."
          },
          {
            "de": "Tut mir leid, hier gibt es keine.",
            "ar": "آسف، مفيش هنا خالص."
          },
          {
            "de": "Kennen Sie irgendein gutes Café?",
            "ar": "تعرف أي كافيه كويس؟"
          },
          {
            "de": "Wo kann man hier gut joggen?",
            "ar": "فين ممكن الواحد يجري كويس هنا؟"
          },
          {
            "de": "Es gibt nur einen Park, den Stadtgarten.",
            "ar": "فيه جنينة واحدة بس، الـStadtgarten."
          },
          {
            "de": "Im Zentrum gibt es natürlich mehr Geschäfte.",
            "ar": "في وسط البلد طبعًا فيه محلات أكتر."
          },
          {
            "de": "Vielen Dank für die Tipps!",
            "ar": "متشكر جدًا على النصايح!"
          }
        ],
        "dialogue": [
          {
            "s": "Sara",
            "de": "Guten Tag! Entschuldigung, ich bin gerade hier eingezogen. Gibt es in der Nähe einen Supermarkt?",
            "ar": "نهارك سعيد! لو سمحت، أنا لسه عازلة هنا. فيه سوبر ماركت قريب؟"
          },
          {
            "s": "Herr Becker",
            "de": "Herzlich willkommen! Ja, es gibt einen an der Ecke, gleich neben der Post.",
            "ar": "أهلًا وسهلًا! أيوه، فيه واحد على الناصية، جنب البوسطة على طول."
          },
          {
            "s": "Sara",
            "de": "Super. Und eine Apotheke? Ich habe noch keine gesehen.",
            "ar": "تمام. وصيدلية؟ أنا لسه مشفتش ولا واحدة."
          },
          {
            "s": "Herr Becker",
            "de": "Hier im Viertel gibt es leider keine. Die nächste ist am Marktplatz, zehn Minuten zu Fuß.",
            "ar": "للأسف مفيش في الحي هنا. أقرب واحدة في ميدان السوق، عشر دقايق مشي."
          },
          {
            "s": "Sara",
            "de": "Kennen Sie vielleicht irgendein nettes Café?",
            "ar": "تعرف بالصدفة أي كافيه لطيف؟"
          },
          {
            "s": "Herr Becker",
            "de": "Oh ja, da gibt es sogar welche! Mein Lieblingscafé ist das Café Rosa in der Lindenstraße.",
            "ar": "آه طبعًا، فيه كذا واحد كمان! الكافيه المفضل عندي هو كافيه روزا في شارع ليندن."
          },
          {
            "s": "Sara",
            "de": "Und wo kann man hier gut joggen?",
            "ar": "وفين ممكن الواحد يجري كويس هنا؟"
          },
          {
            "s": "Herr Becker",
            "de": "Am Fluss. Dort gibt es einen schönen Weg, wo morgens viele Leute laufen.",
            "ar": "جنب النهر. هناك فيه طريق حلو بيجري فيه ناس كتير الصبح."
          },
          {
            "s": "Sara",
            "de": "Vielen Dank, Sie haben mir sehr geholfen!",
            "ar": "متشكرة جدًا، حضرتك ساعدتني كتير!"
          }
        ],
        "task": "Sie sind neu in einer Stadt. Fragen Sie Ihren Nachbarn nach drei Orten (zum Beispiel Bank, Café, Park). Ihr Partner antwortet mit Pronomen wie einer, eins, welche oder keine.",
        "taskAr": "إنت لسه جديد في مدينة. اسأل جارك عن تلات أماكن (مثلًا بنك، كافيه، جنينة). وزميلك يرد عليك بضماير زي einer أو eins أو welche أو keine."
      },
      {
        "situation": "Im Bürgerbüro die neue Adresse anmelden",
        "situationAr": "تسجل عنوانك الجديد في مكتب خدمة المواطنين",
        "phrases": [
          {
            "de": "Ich möchte meine neue Adresse anmelden.",
            "ar": "عايز أسجل عنواني الجديد."
          },
          {
            "de": "In welches Zimmer muss ich gehen?",
            "ar": "لازم أروح أنهي أوضة؟"
          },
          {
            "de": "Brauche ich dafür einen Termin?",
            "ar": "محتاج ميعاد علشان كده؟"
          },
          {
            "de": "Welche Unterlagen brauche ich?",
            "ar": "محتاج أي ورق؟"
          },
          {
            "de": "Hier ist mein Pass.",
            "ar": "اتفضل الباسبور بتاعي."
          },
          {
            "de": "Ich habe die Bestätigung vom Vermieter dabei.",
            "ar": "معايا التأكيد من صاحب الشقة."
          },
          {
            "de": "Bekomme ich eine Meldebescheinigung?",
            "ar": "هاخد شهادة تسجيل السكن؟"
          },
          {
            "de": "Wie lange dauert das ungefähr?",
            "ar": "ده بياخد وقت قد إيه تقريبًا؟"
          },
          {
            "de": "Wo bekomme ich einen Parkausweis für Anwohner?",
            "ar": "منين آخد تصريح ركن للسكان؟"
          }
        ],
        "dialogue": [
          {
            "s": "Herr Okafor",
            "de": "Guten Morgen. Ich bin vor einer Woche umgezogen und möchte meine neue Adresse anmelden.",
            "ar": "صباح الخير. أنا عزلت من أسبوع وعايز أسجل عنواني الجديد."
          },
          {
            "s": "Frau Kraus",
            "de": "Da sind Sie hier richtig, in Zimmer 112. Haben Sie einen Termin?",
            "ar": "حضرتك في المكان الصح، أوضة 112. عندك ميعاد؟"
          },
          {
            "s": "Herr Okafor",
            "de": "Ja, um neun Uhr. Welche Unterlagen brauchen Sie von mir?",
            "ar": "أيوه، الساعة تسعة. محتاجة مني أي ورق؟"
          },
          {
            "s": "Frau Kraus",
            "de": "Ihren Pass und die Bestätigung von Ihrem Vermieter, bitte.",
            "ar": "الباسبور بتاعك والتأكيد من صاحب الشقة، لو سمحت."
          },
          {
            "s": "Herr Okafor",
            "de": "Hier, bitte. Bekomme ich auch eine Meldebescheinigung?",
            "ar": "اتفضلي. وهاخد كمان شهادة تسجيل سكن؟"
          },
          {
            "s": "Frau Kraus",
            "de": "Natürlich, die drucke ich Ihnen gleich aus. Brauchen Sie sonst noch etwas?",
            "ar": "طبعًا، هطبعهالك حالًا. محتاج أي حاجة تانية؟"
          },
          {
            "s": "Herr Okafor",
            "de": "Ja, ich habe ein Auto. Wo bekomme ich einen Parkausweis für Anwohner?",
            "ar": "أيوه، أنا عندي عربية. منين آخد تصريح ركن للسكان؟"
          },
          {
            "s": "Frau Kraus",
            "de": "Dafür müssen Sie in den zweiten Stock gehen, in Zimmer 203.",
            "ar": "علشان كده لازم تطلع الدور التاني، أوضة 203."
          }
        ],
        "task": "Spielen Sie zu zweit: Sie sind umgezogen und melden im Bürgerbüro Ihre neue Adresse an. Fragen Sie nach Unterlagen, Dauer und einem weiteren Anliegen.",
        "taskAr": "مثّلوا اتنين اتنين: إنت عزلت ورايح مكتب خدمة المواطنين تسجل عنوانك الجديد. اسأل عن الورق المطلوب والوقت ومصلحة تانية محتاجها."
      },
      {
        "situation": "Einem Freund ein Wochenendprogramm in der eigenen Stadt vorschlagen",
        "situationAr": "تقترح على صاحبك برنامج لآخر الأسبوع في مدينتك",
        "phrases": [
          {
            "de": "Wann kommt dein Zug genau an?",
            "ar": "القطر بتاعك بيوصل إمتى بالظبط؟"
          },
          {
            "de": "Ich hole dich vom Bahnhof ab.",
            "ar": "هاجي آخدك من المحطة."
          },
          {
            "de": "Am Freitag könnten wir einen Stadtbummel machen.",
            "ar": "يوم الجمعة ممكن نتمشى في البلد."
          },
          {
            "de": "Hast du Lust, auf den Turm zu steigen?",
            "ar": "نفسك نطلع البرج؟"
          },
          {
            "de": "Von oben hat man einen tollen Ausblick.",
            "ar": "من فوق المنظر بيبقى تحفة."
          },
          {
            "de": "Wenn das Wetter schön ist, machen wir eine Bootstour.",
            "ar": "لو الجو حلو، نعمل رحلة بالمركب."
          },
          {
            "de": "Am Abend zeige ich dir eine Kneipe, wo die Einheimischen hingehen.",
            "ar": "بالليل هوريك بار صغير بيروحه أهل البلد."
          },
          {
            "de": "Was möchtest du unbedingt sehen?",
            "ar": "إيه اللي لازم تشوفه؟"
          },
          {
            "de": "Ich freue mich schon riesig auf dich!",
            "ar": "أنا مستنيك على نار!"
          }
        ],
        "dialogue": [
          {
            "s": "Lukas",
            "de": "Hallo Mira! Ich freue mich so, dass du am Wochenende kommst. Wann kommt dein Zug an?",
            "ar": "أهلًا ميرا! أنا مبسوط جدًا إنك جاية آخر الأسبوع. القطر بتاعك بيوصل إمتى؟"
          },
          {
            "s": "Mira",
            "de": "Am Freitag um 15 Uhr. Hast du schon irgendwelche Pläne?",
            "ar": "يوم الجمعة الساعة تلاتة. عندك أي خطط؟"
          },
          {
            "s": "Lukas",
            "de": "Klar! Ich hole dich ab, und dann machen wir einen Stadtbummel durch die Altstadt.",
            "ar": "طبعًا! هاجي آخدك، وبعدين نتمشى في المدينة القديمة."
          },
          {
            "s": "Mira",
            "de": "Super. Gibt es auch einen Ort, wo man die Stadt von oben sehen kann?",
            "ar": "تمام. فيه كمان مكان ممكن نشوف منه المدينة من فوق؟"
          },
          {
            "s": "Lukas",
            "de": "Ja, wir können am Samstag auf den Kirchturm steigen. Der Ausblick ist fantastisch.",
            "ar": "أيوه، ممكن يوم السبت نطلع برج الكنيسة. المنظر من هناك رهيب."
          },
          {
            "s": "Mira",
            "de": "Und was machen wir, wenn es regnet?",
            "ar": "وهنعمل إيه لو الدنيا مطرت؟"
          },
          {
            "s": "Lukas",
            "de": "Dann gehen wir ins Museum. Es gibt hier zwei, die wirklich gut sind.",
            "ar": "ساعتها نروح المتحف. فيه هنا اتنين حلوين بجد."
          },
          {
            "s": "Mira",
            "de": "Perfekt! Ich freue mich schon riesig.",
            "ar": "تمام جدًا! أنا مستنية على نار."
          }
        ],
        "task": "Ein Freund besucht Sie für ein Wochenende. Schlagen Sie am Telefon ein Programm für zwei Tage vor: Sehenswürdigkeiten, Essen und ein Plan für schlechtes Wetter.",
        "taskAr": "صاحبك جاي يزورك آخر الأسبوع. اقترح عليه في التليفون برنامج ليومين: أماكن سياحية، أكل، وخطة لو الجو وحش."
      },
      {
        "situation": "Bei einer Bürgerversammlung über neue Projekte streiten",
        "situationAr": "تتناقشوا في اجتماع للسكان عن مشاريع جديدة للمدينة",
        "phrases": [
          {
            "de": "Ich bin der Meinung, dass wir zuerst eine neue Kita brauchen.",
            "ar": "أنا رأيي إننا محتاجين حضانة جديدة الأول."
          },
          {
            "de": "Das ist nur ein Aspekt. Man muss auch an die Geschäfte denken.",
            "ar": "دي ناحية واحدة بس. لازم نفكر في المحلات كمان."
          },
          {
            "de": "Sie vergessen aber, dass das Budget begrenzt ist.",
            "ar": "بس حضرتك ناسي إن الميزانية محدودة."
          },
          {
            "de": "Wir dürfen die Familien nicht außer Acht lassen.",
            "ar": "مينفعش نتجاهل العائلات."
          },
          {
            "de": "Lassen Sie mich bitte ausreden!",
            "ar": "من فضلك سيبني أكمّل كلامي!"
          },
          {
            "de": "Haben Sie dafür ein konkretes Beispiel?",
            "ar": "عندك مثال واضح على كده؟"
          },
          {
            "de": "Da gebe ich Ihnen recht.",
            "ar": "في دي معاك حق."
          },
          {
            "de": "Welche Lösung schlagen Sie vor?",
            "ar": "إيه الحل اللي بتقترحه؟"
          },
          {
            "de": "Vielleicht finden wir einen Kompromiss.",
            "ar": "يمكن نلاقي حل وسط."
          }
        ],
        "dialogue": [
          {
            "s": "Herr Brandt",
            "de": "Wir brauchen dringend ein Parkhaus im Zentrum. Sonst kommen keine Kunden mehr in unsere Geschäfte.",
            "ar": "إحنا محتاجين جراج متعدد الأدوار في وسط البلد ضروري. وإلا مش هييجي زباين لمحلاتنا تاني."
          },
          {
            "s": "Frau Yilmaz",
            "de": "Das ist nur ein Aspekt. Viele Familien finden keinen Platz in der Kita, was für sie ein großes Problem ist.",
            "ar": "دي ناحية واحدة بس. عائلات كتير مش لاقية مكان في الحضانة، وده مشكلة كبيرة ليهم."
          },
          {
            "s": "Herr Brandt",
            "de": "Aber ohne Kunden gibt es bald keine Geschäfte mehr im Zentrum, und dann ...",
            "ar": "بس من غير زباين قريب مش هيبقى فيه محلات في وسط البلد، وبعدين ..."
          },
          {
            "s": "Frau Yilmaz",
            "de": "Entschuldigung, darf ich kurz ...",
            "ar": "لا مؤاخذة، ممكن بس ..."
          },
          {
            "s": "Herr Brandt",
            "de": "Lassen Sie mich bitte ausreden! Dann verliert die Stadt auch Arbeitsplätze.",
            "ar": "من فضلك سيبيني أكمّل! ساعتها المدينة هتخسر فرص شغل كمان."
          },
          {
            "s": "Frau Yilmaz",
            "de": "Da gebe ich Ihnen recht. Sie vergessen aber, dass eine neue Straßenbahnlinie auch Kunden bringt.",
            "ar": "في دي معاك حق. بس حضرتك ناسي إن خط ترام جديد هيجيب زباين برضه."
          },
          {
            "s": "Herr Brandt",
            "de": "Hm, das stimmt zum Teil. Welche Lösung schlagen Sie also vor?",
            "ar": "همم، ده صح لحد ما. طب إيه الحل اللي بتقترحيه؟"
          },
          {
            "s": "Frau Yilmaz",
            "de": "Wir bauen zuerst die Kita und verbessern dann die Busse und Bahnen ins Zentrum. So haben wir beide etwas davon.",
            "ar": "نبني الحضانة الأول، وبعدين نحسّن الأتوبيسات والقطارات اللي رايحة وسط البلد. كده الاتنين هيستفيدوا."
          }
        ],
        "task": "Ihre Stadt hat nur Geld für ein Projekt. Diskutieren Sie zu zweit: Parkhaus, Kita, Sporthalle oder neue Wohnungen? Gehen Sie auf die Argumente des Partners ein und finden Sie einen Kompromiss.",
        "taskAr": "مدينتكم معاها فلوس لمشروع واحد بس. اتناقشوا اتنين اتنين: جراج، حضانة، صالة رياضة ولا شقق جديدة؟ رد على حجج زميلك وحاولوا توصلوا لحل وسط."
      },
      {
        "situation": "In der Touristeninformation eine Stadtrundfahrt buchen",
        "situationAr": "تحجز جولة في المدينة من مكتب الاستعلامات السياحية",
        "phrases": [
          {
            "de": "Ich interessiere mich für eine Stadtrundfahrt.",
            "ar": "أنا مهتم بجولة في المدينة."
          },
          {
            "de": "Wann fährt der nächste Bus ab?",
            "ar": "الأتوبيس الجاي بيتحرك إمتى؟"
          },
          {
            "de": "Wie lange dauert die Rundfahrt?",
            "ar": "الجولة بتاخد قد إيه؟"
          },
          {
            "de": "Welche Sehenswürdigkeiten sieht man unterwegs?",
            "ar": "بنشوف أنهي معالم سياحية في السكة؟"
          },
          {
            "de": "Gibt es auch eine Führung auf Englisch?",
            "ar": "فيه كمان جولة بمرشد بالإنجليزي؟"
          },
          {
            "de": "Gibt es eine Ermäßigung für Studenten?",
            "ar": "فيه خصم للطلبة؟"
          },
          {
            "de": "Ich nehme zwei Tickets für 14 Uhr, bitte.",
            "ar": "عايز تذكرتين لجولة الساعة اتنين، لو سمحت."
          },
          {
            "de": "Haben Sie auch einen Stadtplan?",
            "ar": "عندكم كمان خريطة للمدينة؟"
          },
          {
            "de": "Können Sie mir ein Restaurant empfehlen, wo man typisch essen kann?",
            "ar": "ممكن ترشحلي مطعم ألاقي فيه أكل البلد التقليدي؟"
          }
        ],
        "dialogue": [
          {
            "s": "Tourist",
            "de": "Guten Tag! Wir interessieren uns für eine Stadtrundfahrt. Was können Sie uns empfehlen?",
            "ar": "نهارك سعيد! إحنا مهتمين بجولة في المدينة. ترشحلنا إيه؟"
          },
          {
            "s": "Mitarbeiterin",
            "de": "Wir haben eine Rundfahrt mit dem Bus und eine mit dem Boot. Die Bootstour ist bei schönem Wetter sehr beliebt.",
            "ar": "عندنا جولة بالأتوبيس وجولة بالمركب. جولة المركب مطلوبة جدًا لما الجو بيبقى حلو."
          },
          {
            "s": "Tourist",
            "de": "Die Bootstour klingt toll. Wie lange dauert sie?",
            "ar": "جولة المركب شكلها حلو. بتاخد قد إيه؟"
          },
          {
            "s": "Mitarbeiterin",
            "de": "Ungefähr neunzig Minuten. Sie fahren am Ufer entlang und sehen die Altstadt, die Brücken und das Denkmal am Hafen.",
            "ar": "حوالي تسعين دقيقة. بتمشوا على طول الشط وبتشوفوا المدينة القديمة والكباري والنصب التذكاري اللي عند الميناء."
          },
          {
            "s": "Tourist",
            "de": "Gibt es eine Ermäßigung für Studenten?",
            "ar": "فيه خصم للطلبة؟"
          },
          {
            "s": "Mitarbeiterin",
            "de": "Ja, mit Studentenausweis kostet das Ticket zwölf statt achtzehn Euro.",
            "ar": "أيوه، بكارنيه الطالب التذكرة بتبقى اتناشر يورو بدل تمنتاشر."
          },
          {
            "s": "Tourist",
            "de": "Prima, dann nehme ich zwei Tickets für 14 Uhr. Haben Sie auch einen Stadtplan?",
            "ar": "حلو، يبقى هاخد تذكرتين لجولة الساعة اتنين. عندكم كمان خريطة للمدينة؟"
          },
          {
            "s": "Mitarbeiterin",
            "de": "Natürlich, hier ist einer. Die Anlegestelle habe ich Ihnen markiert. Viel Spaß!",
            "ar": "طبعًا، اتفضل واحدة. علّمتلك على مكان المرسى. انبسطوا!"
          }
        ],
        "task": "Sie sind Tourist in einer fremden Stadt. Fragen Sie in der Touristeninformation nach einer Rundfahrt: Dauer, Preis, Sehenswürdigkeiten und Ermäßigung. Buchen Sie dann Tickets.",
        "taskAr": "إنت سايح في مدينة غريبة. اسأل في مكتب الاستعلامات السياحية عن جولة: مدتها، سعرها، المعالم اللي هتشوفها، وهل فيه خصم. وبعدين احجز التذاكر."
      }
    ],
    "12": [
      {
        "situation": "Ein Girokonto eröffnen",
        "situationAr": "تفتح حساب جاري في البنك",
        "phrases": [
          {
            "de": "Guten Tag, ich möchte gern ein Girokonto eröffnen.",
            "ar": "صباح الخير، عايز أفتح حساب جاري لو سمحت."
          },
          {
            "de": "Welche Unterlagen brauche ich dafür?",
            "ar": "محتاج أوراق إيه علشان كده؟"
          },
          {
            "de": "Gibt es ein kostenloses Konto für Studierende?",
            "ar": "فيه حساب ببلاش للطلبة؟"
          },
          {
            "de": "Wie hoch ist die Kontoführungsgebühr?",
            "ar": "رسوم إدارة الحساب قد إيه؟"
          },
          {
            "de": "Fallen Gebühren für Überweisungen ins Ausland an?",
            "ar": "فيه رسوم على التحويلات للخارج؟"
          },
          {
            "de": "Bekomme ich auch eine Kreditkarte?",
            "ar": "هاخد كمان كريدت كارد؟"
          },
          {
            "de": "Wann bekomme ich die Bankkarte und die Geheimzahl?",
            "ar": "إمتى هتوصلني بطاقة البنك والرقم السري؟"
          },
          {
            "de": "Kann ich meine Bankgeschäfte auch online erledigen?",
            "ar": "أقدر أخلّص معاملاتي البنكية أونلاين كمان؟"
          },
          {
            "de": "Wo muss ich unterschreiben?",
            "ar": "أمضي فين؟"
          }
        ],
        "dialogue": [
          {
            "s": "Herr Schulz",
            "de": "Guten Tag, was kann ich für Sie tun?",
            "ar": "صباح الخير، أقدر أخدمك إزاي؟"
          },
          {
            "s": "Amira",
            "de": "Guten Tag, ich möchte gern ein Girokonto eröffnen. Ich studiere seit Oktober hier in Köln.",
            "ar": "صباح الخير، عايزة أفتح حساب جاري. أنا بدرس هنا في كولونيا من أكتوبر."
          },
          {
            "s": "Herr Schulz",
            "de": "Sehr gern. Für Studierende ist unser Konto kostenlos, es fällt also keine Kontoführungsgebühr an.",
            "ar": "بكل سرور. الحساب بتاعنا للطلبة ببلاش، يعني مفيش رسوم إدارة حساب."
          },
          {
            "s": "Amira",
            "de": "Super. Welche Unterlagen brauchen Sie von mir?",
            "ar": "تمام جدًا. محتاج مني أوراق إيه؟"
          },
          {
            "s": "Herr Schulz",
            "de": "Ihren Pass, die Meldebescheinigung und Ihre Studienbescheinigung. Füllen Sie bitte noch dieses Formular aus.",
            "ar": "الباسبور، وشهادة تسجيل السكن، وشهادة القيد في الجامعة. واملي الاستمارة دي لو سمحتي."
          },
          {
            "s": "Amira",
            "de": "Hier ist das ausgefüllte Formular. Wann bekomme ich die Bankkarte?",
            "ar": "اتفضل الاستمارة متملّية. إمتى هاخد بطاقة البنك؟"
          },
          {
            "s": "Herr Schulz",
            "de": "Die Karte kommt in etwa einer Woche per Post, die Geheimzahl in einem separaten Brief.",
            "ar": "الكارت هيوصل بالبوستة في حوالي أسبوع، والرقم السري في جواب لوحده."
          },
          {
            "s": "Amira",
            "de": "Und kann ich Überweisungen auch online machen?",
            "ar": "وأقدر أعمل التحويلات أونلاين كمان؟"
          },
          {
            "s": "Herr Schulz",
            "de": "Natürlich. Je mehr Sie online erledigen, desto weniger Zeit verlieren Sie am Schalter.",
            "ar": "طبعًا. كل ما تخلّصي حاجات أونلاين أكتر، كل ما تضيّعي وقت أقل عند الشباك."
          },
          {
            "s": "Amira",
            "de": "Perfekt, vielen Dank für die Beratung!",
            "ar": "تمام، شكرًا جدًا على المساعدة!"
          }
        ],
        "task": "Sie möchten in Deutschland ein Konto eröffnen. Spielen Sie das Gespräch in der Bank und fragen Sie nach Gebühren, Unterlagen und Online-Banking.",
        "taskAr": "عايز تفتح حساب في ألمانيا. مثّل الحوار في البنك واسأل عن الرسوم والأوراق المطلوبة والأونلاين بانكينج."
      },
      {
        "situation": "Die Bankkarte nach einem Diebstahl sperren lassen",
        "situationAr": "توقّف بطاقة البنك بعد ما اتسرقت",
        "phrases": [
          {
            "de": "Ich habe meine Bankkarte verloren.",
            "ar": "بطاقة البنك بتاعتي ضاعت."
          },
          {
            "de": "Ich glaube, meine Geldbörse wurde gestohlen.",
            "ar": "أعتقد إن محفظتي اتسرقت."
          },
          {
            "de": "Bitte sperren Sie meine Karte sofort.",
            "ar": "لو سمحت وقّف الكارت بتاعي حالًا."
          },
          {
            "de": "Ich lese Ihnen meine IBAN vor.",
            "ar": "هقرالك رقم الـ IBAN بتاعي."
          },
          {
            "de": "Ich habe die Karte zuletzt gestern am Geldautomaten benutzt.",
            "ar": "آخر مرة استخدمت الكارت كانت امبارح عند ماكينة الصرف."
          },
          {
            "de": "Wurde schon Geld von meinem Konto abgehoben?",
            "ar": "حد سحب فلوس من حسابي خلاص؟"
          },
          {
            "de": "Muss ich den Diebstahl bei der Polizei melden?",
            "ar": "لازم أبلّغ البوليس عن السرقة؟"
          },
          {
            "de": "Wie lange dauert es, bis ich eine neue Karte bekomme?",
            "ar": "هياخد قد إيه لحد ما آخد كارت جديد؟"
          },
          {
            "de": "Kostet die neue Karte etwas?",
            "ar": "الكارت الجديد بفلوس؟"
          }
        ],
        "dialogue": [
          {
            "s": "Frau Weber",
            "de": "Sperr-Hotline, mein Name ist Weber. Wie kann ich Ihnen helfen?",
            "ar": "خط إيقاف الكروت، معاك فيبر. أقدر أساعدك إزاي؟"
          },
          {
            "s": "Tarek",
            "de": "Guten Abend. Ich glaube, meine Geldbörse wurde in der U-Bahn gestohlen. Meine Bankkarte war drin.",
            "ar": "مساء الخير. أعتقد إن محفظتي اتسرقت في المترو، وبطاقة البنك كانت جواها."
          },
          {
            "s": "Frau Weber",
            "de": "Das tut mir leid. Nennen Sie mir bitte Ihren Namen und Ihre IBAN.",
            "ar": "آسفة جدًا. قولّي اسمك ورقم الـ IBAN لو سمحت."
          },
          {
            "s": "Tarek",
            "de": "Tarek Mansour. Meine IBAN habe ich auf dem Handy, ich lese sie Ihnen vor.",
            "ar": "طارق منصور. الـ IBAN عندي على الموبايل، هقرهولك."
          },
          {
            "s": "Frau Weber",
            "de": "Danke. Ihre Karte ist jetzt gesperrt. Seit gestern wurde kein Geld abgehoben.",
            "ar": "شكرًا. الكارت بتاعك اتوقف دلوقتي. ومن امبارح محدش سحب أي فلوس."
          },
          {
            "s": "Tarek",
            "de": "Zum Glück! Muss ich den Diebstahl auch bei der Polizei melden?",
            "ar": "الحمد لله! لازم كمان أبلّغ البوليس عن السرقة؟"
          },
          {
            "s": "Frau Weber",
            "de": "Ja, bitte zeigen Sie den Diebstahl bei der Polizei an. Das ist wichtig, falls doch etwas passiert.",
            "ar": "أيوه، لو سمحت اعمل محضر سرقة في البوليس. ده مهم لو حصلت أي حاجة بعدين."
          },
          {
            "s": "Tarek",
            "de": "Und wann bekomme ich eine neue Karte?",
            "ar": "وإمتى هاخد كارت جديد؟"
          },
          {
            "s": "Frau Weber",
            "de": "Die neue Karte kommt innerhalb einer Woche, die neue Geheimzahl schicken wir Ihnen per Post.",
            "ar": "الكارت الجديد هيوصل خلال أسبوع، والرقم السري الجديد هنبعتهولك بالبوستة."
          },
          {
            "s": "Tarek",
            "de": "Vielen Dank, Sie haben mir sehr geholfen.",
            "ar": "شكرًا جدًا، ساعدتيني كتير."
          }
        ],
        "task": "Ihre Bankkarte ist weg. Rufen Sie bei der Sperr-Hotline an, erklären Sie, was passiert ist, und fragen Sie nach einer neuen Karte.",
        "taskAr": "بطاقة البنك بتاعتك ضاعت. كلّم خط إيقاف الكروت، واشرح اللي حصل، واسأل عن كارت جديد."
      },
      {
        "situation": "Einen Freund um Geld bitten",
        "situationAr": "تطلب من صاحبك يسلفك فلوس",
        "phrases": [
          {
            "de": "Kannst du mir vielleicht etwas Geld leihen?",
            "ar": "ممكن تسلفني شوية فلوس؟"
          },
          {
            "de": "Ich bin diesen Monat ziemlich knapp bei Kasse.",
            "ar": "أنا الشهر ده مزنوق في الفلوس شوية."
          },
          {
            "de": "Die Reparatur ist ganz schön ins Geld gegangen.",
            "ar": "التصليح كلّفني كتير قوي."
          },
          {
            "de": "Ich zahle es dir bis Ende des Monats zurück.",
            "ar": "هرجعهملك قبل آخر الشهر."
          },
          {
            "de": "Mein Gehalt kommt erst am Ersten.",
            "ar": "مرتبي مش هييجي غير أول الشهر."
          },
          {
            "de": "Ich könnte es dir in zwei Raten zurückzahlen.",
            "ar": "ممكن أرجعهملك على قسطين."
          },
          {
            "de": "Soll ich dir das Geld überweisen oder bar geben?",
            "ar": "أحوّلك الفلوس ولا أديهوملك كاش؟"
          },
          {
            "de": "Tut mir leid, ich kann dir gerade nichts leihen.",
            "ar": "آسف، مش هقدر أسلفك حاجة دلوقتي."
          },
          {
            "de": "Danke, du bist ein echter Freund!",
            "ar": "شكرًا، إنت صاحب جدع بجد!"
          }
        ],
        "dialogue": [
          {
            "s": "Malek",
            "de": "Jonas, hast du kurz Zeit? Das ist mir ein bisschen peinlich.",
            "ar": "يا يوناس، فاضي دقيقة؟ الموضوع محرج لي شوية."
          },
          {
            "s": "Jonas",
            "de": "Klar, was ist los?",
            "ar": "أكيد، فيه إيه؟"
          },
          {
            "s": "Malek",
            "de": "Ich bin diesen Monat knapp bei Kasse. Die Reparatur von meinem Fahrrad ist ganz schön ins Geld gegangen. Kannst du mir 150 Euro leihen?",
            "ar": "أنا الشهر ده مزنوق في الفلوس. تصليح العجلة كلّفني كتير. ممكن تسلفني ١٥٠ يورو؟"
          },
          {
            "s": "Jonas",
            "de": "Hm, 150 Euro sind nicht wenig. Wann kannst du sie mir zurückzahlen?",
            "ar": "همم، ١٥٠ يورو مش قليلين. تقدر ترجعهملي إمتى؟"
          },
          {
            "s": "Malek",
            "de": "Mein Gehalt kommt am Ersten. Ich könnte dir das Geld in zwei Raten zurückzahlen, die erste schon nächste Woche.",
            "ar": "مرتبي بييجي أول الشهر. ممكن أرجعلك الفلوس على قسطين، أول قسط الأسبوع الجاي على طول."
          },
          {
            "s": "Jonas",
            "de": "Okay, das passt. Soll ich es dir überweisen? Dann haben wir beide einen Beleg.",
            "ar": "ماشي، تمام. أحوّلهملك؟ كده يبقى معانا إحنا الاتنين إثبات."
          },
          {
            "s": "Malek",
            "de": "Ja, gern. Ich schicke dir gleich meine IBAN.",
            "ar": "أيوه، ياريت. هبعتلك الـ IBAN بتاعي حالًا."
          },
          {
            "s": "Jonas",
            "de": "Mach das. Und mach dir keine Sorgen, so etwas kann jedem passieren.",
            "ar": "ابعته. وماتقلقش، الحاجات دي بتحصل لأي حد."
          },
          {
            "s": "Malek",
            "de": "Danke, du bist ein echter Freund!",
            "ar": "شكرًا، إنت صاحب جدع بجد!"
          }
        ],
        "task": "Sie müssen eine unerwartete Rechnung bezahlen. Bitten Sie eine Freundin um Geld und erklären Sie, wann und wie Sie es zurückzahlen.",
        "taskAr": "لازم تدفع فاتورة ماكنتش عامل حسابها. اطلب من صاحبتك تسلفك فلوس، واشرحلها هترجعهم إمتى وإزاي."
      },
      {
        "situation": "Über billige Kleidung und Globalisierung diskutieren",
        "situationAr": "تتناقش عن اللبس الرخيص والعولمة",
        "phrases": [
          {
            "de": "Ich finde es gut, dass Kleidung heute so günstig ist.",
            "ar": "أنا شايف إنه كويس إن اللبس بقى رخيص كده النهارده."
          },
          {
            "de": "Man muss aber auch bedenken, unter welchen Bedingungen sie produziert wird.",
            "ar": "بس لازم كمان ناخد في اعتبارنا هو بيتعمل في ظروف إيه."
          },
          {
            "de": "Ein großer Vorteil ist das riesige Produktangebot.",
            "ar": "ميزة كبيرة إن تشكيلة المنتجات ضخمة."
          },
          {
            "de": "Ich sehe das eher kritisch.",
            "ar": "أنا شايف ده بنظرة نقدية شوية."
          },
          {
            "de": "Es ist wirklich problematisch, dass die Arbeiterinnen so wenig verdienen.",
            "ar": "فعلًا مشكلة إن العاملات بيكسبوا قليل قوي كده."
          },
          {
            "de": "Positiv ist auch, dass in vielen Ländern neue Arbeitsplätze entstehen.",
            "ar": "ومن الحاجات الإيجابية كمان إن فيه فرص شغل جديدة بتظهر في دول كتير."
          },
          {
            "de": "Da hast du recht, aber ...",
            "ar": "عندك حق، بس ..."
          },
          {
            "de": "Entschuldigung, darf ich kurz etwas sagen?",
            "ar": "معلش، ممكن أقول حاجة بسرعة؟"
          },
          {
            "de": "Je billiger ein T-Shirt ist, desto schlechter sind oft die Arbeitsbedingungen.",
            "ar": "كل ما التيشيرت يبقى أرخص، كل ما ظروف الشغل غالبًا تبقى أوحش."
          }
        ],
        "dialogue": [
          {
            "s": "Lina",
            "de": "Schau mal, das T-Shirt kostet nur vier Euro! Das ist doch ein echter Vorteil für uns Konsumenten.",
            "ar": "بص، التيشيرت ده بأربعة يورو بس! ما دي ميزة حقيقية لينا كمستهلكين."
          },
          {
            "s": "Paul",
            "de": "Ich sehe das eher kritisch. Wer bekommt denn bei so einem Preis überhaupt noch Geld?",
            "ar": "أنا شايف ده بنظرة نقدية شوية. بسعر زي ده مين أصلًا اللي بياخد فلوس؟"
          },
          {
            "s": "Lina",
            "de": "Na ja, die Firmen produzieren eben in Ländern mit niedrigen Löhnen. Dadurch entstehen dort auch Arbeitsplätze.",
            "ar": "بص، الشركات بتنتج في دول المرتبات فيها قليلة. وبكده بيبقى فيه فرص شغل هناك كمان."
          },
          {
            "s": "Paul",
            "de": "Das stimmt teilweise. Aber man muss auch bedenken, dass die Menschen dort oft unter schlechten Bedingungen arbeiten.",
            "ar": "ده صح جزئيًا. بس لازم كمان ناخد في اعتبارنا إن الناس هناك غالبًا بيشتغلوا في ظروف وحشة."
          },
          {
            "s": "Lina",
            "de": "Entschuldigung, darf ich kurz etwas sagen? Nicht jeder kann sich teure Kleidung leisten.",
            "ar": "معلش، ممكن أقول حاجة بسرعة؟ مش كل الناس تقدر تشتري لبس غالي."
          },
          {
            "s": "Paul",
            "de": "Da hast du recht. Aber je billiger die Kleidung ist, desto schneller werfen wir sie weg. Das ist aus meiner Sicht ein echter Irrsinn.",
            "ar": "عندك حق. بس كل ما اللبس يبقى أرخص، كل ما نرميه أسرع. وده من وجهة نظري جنون حقيقي."
          },
          {
            "s": "Lina",
            "de": "Hm, vielleicht sollten wir weniger, aber dafür bessere Sachen kaufen.",
            "ar": "همم، يمكن المفروض نشتري حاجات أقل، بس أحسن."
          },
          {
            "s": "Paul",
            "de": "Genau! Oder gebrauchte Kleidung. Die kostet auch nicht die Welt.",
            "ar": "بالظبط! أو لبس مستعمل. ده كمان مش غالي خالص."
          }
        ],
        "task": "Diskutieren Sie zu zweit: Billige T-Shirts – pro oder contra? Nennen Sie je zwei Argumente und reagieren Sie auf die Argumente Ihres Partners.",
        "taskAr": "اتناقشوا اتنين اتنين: التيشيرتات الرخيصة – مع ولا ضد؟ قول حجتين لكل ناحية، ورد على حجج اللي معاك."
      },
      {
        "situation": "Im Tauschring eine Tätigkeit anbieten",
        "situationAr": "تعرض خدمة في دايرة تبادل الخدمات",
        "phrases": [
          {
            "de": "Ich interessiere mich für den Tauschring. Wie funktioniert das?",
            "ar": "أنا مهتم بدايرة تبادل الخدمات. بتشتغل إزاي؟"
          },
          {
            "de": "Was kann ich anbieten?",
            "ar": "أقدر أعرض إيه؟"
          },
          {
            "de": "Ich könnte Nachhilfe in Mathe oder Arabisch geben.",
            "ar": "ممكن أدّي دروس تقوية في الرياضيات أو العربي."
          },
          {
            "de": "Ich kann gut kochen und Fahrräder reparieren.",
            "ar": "أنا بعرف أطبخ وأصلّح عجل كويس."
          },
          {
            "de": "Für jede Stunde bekommt man eine Gutschrift.",
            "ar": "على كل ساعة بتاخد رصيد."
          },
          {
            "de": "Muss man eine Mitgliedsgebühr bezahlen?",
            "ar": "لازم ندفع اشتراك عضوية؟"
          },
          {
            "de": "Ich bräuchte Hilfe beim Umzug.",
            "ar": "أنا محتاج مساعدة في النقل."
          },
          {
            "de": "Wo trage ich meine Stunden ein?",
            "ar": "أسجّل ساعاتي فين؟"
          },
          {
            "de": "Wann trifft sich die Gruppe?",
            "ar": "المجموعة بتتقابل إمتى؟"
          }
        ],
        "dialogue": [
          {
            "s": "Youssef",
            "de": "Guten Tag, ich habe Ihren Flyer gelesen. Wie funktioniert der Tauschring genau?",
            "ar": "صباح الخير، قريت الفلاير بتاعكم. دايرة التبادل بتشتغل إزاي بالظبط؟"
          },
          {
            "s": "Frau Sommer",
            "de": "Ganz einfach: Sie bieten eine Tätigkeit an und bekommen für jede Stunde eine Gutschrift auf Ihrem Zeitkonto.",
            "ar": "بسيطة جدًا: بتعرض خدمة، وعلى كل ساعة بتاخد رصيد في حساب الوقت بتاعك."
          },
          {
            "s": "Youssef",
            "de": "Und mit diesen Stunden kann ich dann selbst Hilfe bekommen?",
            "ar": "وبالساعات دي أقدر أنا كمان آخد مساعدة؟"
          },
          {
            "s": "Frau Sommer",
            "de": "Genau. Jede Stunde ist gleich viel wert, egal ob Gartenarbeit oder Computerhilfe.",
            "ar": "بالظبط. كل ساعة ليها نفس القيمة، سواء شغل في الجنينة أو مساعدة في الكمبيوتر."
          },
          {
            "s": "Youssef",
            "de": "Ich könnte Nachhilfe in Mathe geben oder Arabisch unterrichten.",
            "ar": "ممكن أدّي دروس تقوية في الرياضيات أو أعلّم عربي."
          },
          {
            "s": "Frau Sommer",
            "de": "Wunderbar, Arabischunterricht wird oft gesucht! Und welche Hilfe bräuchten Sie?",
            "ar": "هايل، دروس العربي مطلوبة كتير! وإنت محتاج مساعدة في إيه؟"
          },
          {
            "s": "Youssef",
            "de": "Ich ziehe bald um und bräuchte Hilfe beim Tragen.",
            "ar": "أنا هنقل قريب ومحتاج حد يساعدني في الشيل."
          },
          {
            "s": "Frau Sommer",
            "de": "Kein Problem. Tragen Sie Ihr Angebot und Ihren Wunsch einfach in diese Liste ein.",
            "ar": "مفيش مشكلة. اكتب الخدمة اللي بتعرضها واللي محتاجه في القايمة دي."
          },
          {
            "s": "Youssef",
            "de": "Muss man dafür eine Gebühr bezahlen?",
            "ar": "لازم ندفع رسوم علشان كده؟"
          },
          {
            "s": "Frau Sommer",
            "de": "Nur drei Euro im Monat für die Organisation. Unser nächstes Treffen ist am Donnerstag.",
            "ar": "تلاتة يورو بس في الشهر للتنظيم. والاجتماع الجاي يوم الخميس."
          }
        ],
        "task": "Sie möchten in einem Tauschring mitmachen. Erklären Sie, welche Tätigkeit Sie anbieten können und welche Hilfe Sie brauchen.",
        "taskAr": "عايز تشارك في دايرة تبادل خدمات. اشرح إنت تقدر تعرض أنهي خدمة ومحتاج مساعدة في إيه."
      }
    ]
  };
  window.B1_CONVERSATIONS = Object.assign(window.B1_CONVERSATIONS || {}, conversations);
  if (!Array.isArray(window.B1_BOOK)) return;
  window.B1_BOOK.forEach(chapter => {
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
