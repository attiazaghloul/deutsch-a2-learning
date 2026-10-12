/* Lesson sections for Netzwerk neu B1.2, chapters 7-12: goals, original reading texts
   with Arabic translation and comprehension questions, grammar overview, Redemittel,
   speaking tasks and a chapter quiz. Loaded after data_b1_2_vocab.js. */
(function enrichB12Lessons(){
  const content = {
    "7": {
      "intro": "In diesem Kapitel geht es um Freundschaften, Beziehungen und Konflikte. Sie erzählen von Freundschaften, sprechen diplomatisch über Streit und lesen Fabeln. Dabei lernen Sie das Plusquamperfekt und Nebensätze mit nachdem, bevor, bis, seit/seitdem und während.",
      "introAr": "الفصل ده عن الصداقة والعلاقات بين الناس والخناقات. هتحكي عن أصحابك، وتتكلم عن الخلافات بأسلوب دبلوماسي، وتقرا حكايات على لسان الحيوانات. وفي الجرامر هتتعلم الـ Plusquamperfekt والجمل الجانبية بـ nachdem وbevor وbis وseit/seitdem وwährend.",
      "badges": [
        "Plusquamperfekt",
        "Nebensätze mit nachdem",
        "bevor, bis, seit, während",
        "derselbe, dasselbe, dieselbe",
        "Freundschaft und Konflikte"
      ],
      "goals": [
        {
          "de": "Freundschaftsgeschichten verstehen und von Freundschaften erzählen",
          "ar": "تفهم حكايات عن الصداقة وتحكي عن أصحابك"
        },
        {
          "de": "Zeitliche Abfolgen mit dem Plusquamperfekt ausdrücken",
          "ar": "تعبّر عن ترتيب الأحداث في الماضي بالـ Plusquamperfekt"
        },
        {
          "de": "Nebensätze mit nachdem, bevor, bis, seit/seitdem und während bilden",
          "ar": "تعمل جمل جانبية بـ nachdem وbevor وbis وseit/seitdem وwährend"
        },
        {
          "de": "Über Konflikte sprechen und die eigene Meinung sagen",
          "ar": "تتكلم عن الخلافات وتقول رأيك"
        },
        {
          "de": "Konfliktgespräche diplomatisch führen",
          "ar": "تدير خناقة بهدوء وبأسلوب دبلوماسي"
        },
        {
          "de": "Ein Paar vorstellen und kurzen Texten Informationen zuordnen",
          "ar": "تقدّم ثنائي (زوجين) معروفين وتربط معلومات بنصوص قصيرة"
        },
        {
          "de": "Über Fabeln sprechen und einen Text lebendig vorlesen",
          "ar": "تتكلم عن الحكايات الرمزية وتقرا نص بصوت عالي بطريقة حلوة"
        },
        {
          "de": "Chatnachrichten und persönliche E-Mails verstehen und schreiben",
          "ar": "تفهم رسايل الشات والإيميلات الشخصية وتكتبها"
        },
        {
          "de": "derselbe, dasselbe und dieselbe richtig verwenden",
          "ar": "تستخدم derselbe وdasselbe وdieselbe صح"
        }
      ],
      "readings": [
        {
          "kind": "Zeitschriftenartikel",
          "title": "Wie wir Freunde wurden",
          "text": "Zum Tag der Freundschaft haben wir unsere Leserinnen und Leser gefragt: Wie habt ihr euren besten Freund oder eure beste Freundin kennengelernt? Hier sind drei Antworten.<br><br>Jonas, 34: „Ich war gerade nach Hamburg gezogen und kannte dort niemanden. Ich hatte eine neue Stelle bei einer Bank gefunden, aber nach der Arbeit saß ich oft allein in meiner Wohnung. Eines Abends ging ich zum ersten Mal in eine Kletterhalle. Dort traf ich Benni. Wir kamen sofort ins Gespräch und stellten fest, dass wir in derselben Straße wohnten. Wir waren uns vorher nie über den Weg gelaufen! Seitdem klettern wir jeden Mittwoch zusammen.“<br><br>Hoda, 41: „Meine Freundin Sanaa kenne ich seit der Grundschule. Wir hatten zusammen gelernt, gespielt und uns immer alles erzählt. Nachdem wir die Schule beendet hatten, zog Sanaa nach Kanada. Wir verloren uns ein paar Jahre aus den Augen, weil wir beide beruflich stark eingespannt waren. Aber vor fünf Jahren sah ich sie zufällig am Flughafen in Kairo. Wir merkten schnell: Zwischen uns war alles beim Alten geblieben. Heute telefonieren wir jede Woche.“<br><br>Lukas, 27: „Mein bester Freund war früher eigentlich mein Feind! In der siebten Klasse hatten Tim und ich uns um einen Platz in der Fußballmannschaft gestritten. Bevor der Trainer sich entschied, mussten wir beide ein Probetraining machen. Am Ende wählte er keinen von uns, und wir mussten zusammen auf der Bank sitzen. Wir lachten über uns selbst – und seit diesem Tag sind wir unzertrennlich.“<br><br>Was zeigen diese Geschichten? Freundschaft beginnt oft zufällig. Aber damit sie lange hält, braucht man Zeit, Verständnis und manchmal auch ein bisschen Glück.",
          "ar": "بمناسبة يوم الصداقة سألنا قارئاتنا وقرّاءنا: كيف تعرّفتم على أفضل صديق أو أفضل صديقة لكم؟ إليكم ثلاث إجابات.<br><br>يوناس، ٣٤ سنة: «كنت قد انتقلت للتو إلى هامبورغ ولم أكن أعرف أحدًا هناك. كنت قد وجدت وظيفة جديدة في بنك، لكنني بعد العمل كنت أجلس غالبًا وحدي في شقتي. وفي إحدى الأمسيات ذهبت لأول مرة إلى صالة تسلّق. هناك قابلت بِني. بدأنا الحديث فورًا واكتشفنا أننا نسكن في الشارع نفسه. لم نكن قد التقينا صدفةً من قبل أبدًا! ومنذ ذلك الحين نتسلّق معًا كل يوم أربعاء.»<br><br>هدى، ٤١ سنة: «أعرف صديقتي سناء منذ المدرسة الابتدائية. كنا قد تعلّمنا ولعبنا معًا وكنا نحكي لبعضنا كل شيء دائمًا. بعد أن أنهينا المدرسة انتقلت سناء إلى كندا. انقطعت صلتنا لبضع سنوات، لأن كلتينا كانت مشغولة جدًا في العمل. لكن قبل خمس سنوات رأيتها صدفةً في مطار القاهرة. ولاحظنا بسرعة: كل شيء بيننا بقي على حاله. واليوم نتحدث في التليفون كل أسبوع.»<br><br>لوكاس، ٢٧ سنة: «أفضل صديق لي كان في الأصل عدوّي! في الصف السابع كنا أنا وتيم قد تشاجرنا على مكان في فريق كرة القدم. وقبل أن يقرّر المدرّب، كان علينا نحن الاثنين أن نقوم بتدريب تجريبي. وفي النهاية لم يختر أيًّا منا، واضطررنا أن نجلس معًا على دكة الاحتياط. ضحكنا على أنفسنا – ومنذ ذلك اليوم لا نفترق.»<br><br>ماذا تُظهر هذه القصص؟ الصداقة تبدأ غالبًا بالصدفة. لكن لكي تدوم طويلًا، يحتاج المرء إلى الوقت والتفهّم وأحيانًا أيضًا إلى قليل من الحظ.",
          "questions": [
            [
              "Warum saß Jonas in Hamburg oft allein in seiner Wohnung?",
              "Weil er gerade nach Hamburg gezogen war und dort niemanden kannte.",
              "ليه يوناس كان بيقعد غالبًا لوحده في شقته في هامبورغ؟",
              "لأنه كان لسه منتقل لهامبورغ وماكانش يعرف حد هناك."
            ],
            [
              "Was stellten Jonas und Benni fest?",
              "Dass sie in derselben Straße wohnten.",
              "يوناس وبني اكتشفوا إيه؟",
              "إنهم ساكنين في نفس الشارع."
            ],
            [
              "Warum haben sich Hoda und Sanaa ein paar Jahre aus den Augen verloren?",
              "Sanaa war nach Kanada gezogen und beide waren beruflich stark eingespannt.",
              "ليه هدى وسناء انقطعت صلتهما لبضع سنين؟",
              "سناء كانت انتقلت لكندا، والاتنين كانوا مشغولين جدًا بالشغل."
            ],
            [
              "Wie wurden Lukas und Tim Freunde?",
              "Der Trainer wählte keinen von beiden, sie saßen zusammen auf der Bank und lachten über sich selbst.",
              "لوكاس وتيم بقوا أصحاب إزاي؟",
              "المدرّب ما اختارش أي واحد فيهم، فقعدوا على دكة الاحتياط مع بعض وضحكوا على نفسهم."
            ],
            [
              "Was braucht eine Freundschaft laut Artikel, damit sie lange hält?",
              "Zeit, Verständnis und manchmal ein bisschen Glück.",
              "حسب المقال، الصداقة محتاجة إيه علشان تستمر طويلًا؟",
              "وقت وتفهّم وأحيانًا شوية حظ."
            ]
          ],
          "titleAr": "إزاي بقينا أصحاب",
          "kindAr": "مقال في مجلة"
        },
        {
          "kind": "Forum",
          "title": "Streiten – aber wie?",
          "text": "Thema der Woche: Wie streitet ihr in eurer Beziehung oder in eurer WG?<br><br>Mona_88: Mein Freund und ich wohnen seit einem Jahr zusammen. Seit wir zusammenwohnen, streiten wir uns oft über den Haushalt. Er sagt immer, dass er gleich aufräumt – und dann passiert nichts. Früher habe ich mich jedes Mal schrecklich aufgeregt. Jetzt versuche ich, ruhig zu bleiben und Ich-Aussagen zu benutzen: „Ich wünsche mir, dass wir die Arbeit gerecht verteilen.“ Das funktioniert viel besser!<br><br>Karl_WG: Bei uns in der WG gibt es eine einfache Regel: Bevor sich jemand beschwert, kocht er erst einmal Tee für alle. Klingt komisch, aber während man zusammen Tee trinkt, ist die Stimmung schon viel entspannter. Dann klären wir das Problem, und meistens einigen wir uns schnell auf einen Kompromiss.<br><br>Sternchen: Ehrlich gesagt hasse ich Streit. Ich schweige lieber, bis der andere sich beruhigt hat. Aber meine Schwester behauptet, dass Schweigen alles schlimmer macht. Vielleicht hat sie recht: Nachdem ich letzten Monat drei Wochen lang nichts gesagt hatte, gab es einen riesigen Streit mit meiner Mitbewohnerin.<br><br>Paul_K: Ich glaube, Konflikte gehören einfach zum Alltag. Wichtig ist, dass man nicht übertreibt und nicht jedes Wort auf die Goldwaage legt. Sätze wie „Immer das Gleiche mit dir!“ machen alles nur schlimmer. Und noch etwas: Der Klügere gibt nach – aber es sollte nicht immer derselbe sein!",
          "ar": "موضوع الأسبوع: كيف تتشاجرون في علاقتكم أو في سكنكم المشترك؟<br><br>منى_88: صديقي وأنا نسكن معًا منذ سنة. ومنذ أن بدأنا السكن معًا، نتشاجر كثيرًا بسبب أعمال البيت. هو يقول دائمًا إنه سيرتّب حالًا – ثم لا يحدث شيء. في الماضي كنت أنفعل بشدة في كل مرة. والآن أحاول أن أبقى هادئة وأن أستخدم جملًا بصيغة «أنا»: «أتمنى أن نوزّع العمل بشكل عادل.» وهذا ينجح بشكل أفضل بكثير!<br><br>كارل_سكن_مشترك: عندنا في السكن المشترك قاعدة بسيطة: قبل أن يشتكي أحد، يُعدّ أولًا شايًا للجميع. يبدو ذلك غريبًا، لكن أثناء شرب الشاي معًا يصبح الجو أكثر هدوءًا بكثير. بعدها نوضّح المشكلة، وغالبًا ما نتفق بسرعة على حلّ وسط.<br><br>نجمة: بصراحة أنا أكره الخناقات. أفضّل أن أسكت حتى يهدأ الطرف الآخر. لكن أختي تزعم أن السكوت يجعل كل شيء أسوأ. ربما معها حق: بعد أن سكتّ ثلاثة أسابيع كاملة الشهر الماضي، حدثت خناقة ضخمة مع زميلتي في السكن.<br><br>باول_ك: أعتقد أن الخلافات ببساطة جزء من الحياة اليومية. المهم ألّا يبالغ المرء وألّا يدقّق في كل كلمة. جمل مثل «دائمًا نفس الشيء معك!» تجعل كل شيء أسوأ فقط. وشيء آخر: الأذكى هو من يتنازل – لكن لا ينبغي أن يكون الشخص نفسه دائمًا!",
          "questions": [
            [
              "Worüber streiten sich Mona und ihr Freund?",
              "Über den Haushalt, weil er nicht aufräumt.",
              "منى وصديقها بيتخانقوا على إيه؟",
              "على شغل البيت لأنه مش بيرتّب."
            ],
            [
              "Was macht Mona heute anders als früher?",
              "Sie bleibt ruhig und benutzt Ich-Aussagen, statt sich aufzuregen.",
              "منى بتعمل إيه دلوقتي بشكل مختلف عن زمان؟",
              "بتفضل هادية وبتستخدم جمل بصيغة «أنا» بدل ما تتعصّب."
            ],
            [
              "Welche Regel gibt es in Karls WG?",
              "Bevor sich jemand beschwert, kocht er Tee für alle.",
              "إيه القاعدة الموجودة في سكن كارل المشترك؟",
              "قبل ما حد يشتكي، بيعمل شاي للجميع."
            ],
            [
              "Was passierte, nachdem Sternchen drei Wochen lang geschwiegen hatte?",
              "Es gab einen riesigen Streit mit ihrer Mitbewohnerin.",
              "إيه اللي حصل بعد ما نجمة سكتت ثلاث أسابيع؟",
              "حصلت خناقة كبيرة جدًا مع زميلتها في السكن."
            ],
            [
              "Was meint Paul mit „aber es sollte nicht immer derselbe sein“?",
              "Es soll nicht immer dieselbe Person nachgeben.",
              "باول يقصد إيه بـ«لكن مش المفروض يكون نفس الشخص دائمًا»؟",
              "مش المفروض يكون نفس الشخص هو اللي بيتنازل كل مرة."
            ]
          ],
          "titleAr": "نتخانق، لكن إزاي؟",
          "kindAr": "منتدى"
        },
        {
          "kind": "Fabel",
          "title": "Der Fuchs und die Giraffe",
          "text": "Es war ein heißer Sommer, und ein Fuchs hatte seit Tagen nichts gefressen. Alle Mäuse waren vor der Hitze in ihre Löcher geflohen. Da sah der Fuchs einen Baum mit süßen, reifen Früchten. Leider hingen sie so hoch, dass er sie nicht erreichen konnte. Unter dem Baum stand eine Giraffe und fraß in aller Ruhe.<br><br>Der Fuchs dachte: ‚Die Giraffe ist groß, aber sicher nicht besonders klug. Wenn ich sie lobe, gibt sie mir bestimmt ein paar Früchte.‘ Er lief zu ihr und sagte mit süßer Stimme: „Liebe Giraffe, was hast du für einen wunderbaren Hals! Du bist das schönste Tier im ganzen Land. Und ich bin sicher, dass du auch das großzügigste bist.“<br><br>Die Giraffe hörte auf zu fressen und sah zu ihm hinunter. Sie hatte schon viele Geschichten über den Fuchs gehört. Er hatte zum Beispiel den Raben um seinen Käse gebracht. „Mein Freund“, sagte sie ruhig, „bevor du mich weiter lobst, sag mir lieber ehrlich, was du willst.“<br><br>Der Fuchs schwieg einen Moment. Er hatte nicht erwartet, dass die Giraffe seinen Trick so schnell erkennen würde. Dann senkte er den Kopf und sagte: „Ich habe Hunger. Seit drei Tagen habe ich nichts gefressen, und ich komme nicht an die Früchte.“<br><br>Nachdem der Fuchs die Wahrheit gesagt hatte, lachte die Giraffe freundlich. Sie schüttelte mit ihrem langen Hals den Baum, bis viele Früchte auf den Boden fielen. „Siehst du“, sagte sie, „wer ehrlich fragt, bekommt mehr als jemand, der lügt.“ Während der Fuchs fraß, dachte er lange über diese Worte nach.<br><br>Die Moral von der Geschichte: Ehrlich währt am längsten.",
          "ar": "كان صيفًا حارًّا، وكان هناك ثعلب لم يأكل شيئًا منذ أيام. كل الفئران كانت قد هربت من الحرّ إلى جحورها. فرأى الثعلب شجرة عليها ثمار حلوة ناضجة. لكن للأسف كانت معلّقة عاليًا جدًا لدرجة أنه لم يستطع الوصول إليها. وتحت الشجرة كانت تقف زرافة تأكل في هدوء تام.<br><br>فكّر الثعلب: ‹الزرافة طويلة، لكنها بالتأكيد ليست ذكية جدًا. إذا مدحتها، فستعطيني بالتأكيد بعض الثمار.› فجرى إليها وقال بصوت معسول: «عزيزتي الزرافة، يا لكِ من رقبة رائعة! أنتِ أجمل حيوان في البلاد كلها. وأنا متأكد أنكِ أيضًا أكرمها.»<br><br>توقّفت الزرافة عن الأكل ونظرت إليه من أعلى. كانت قد سمعت حكايات كثيرة عن الثعلب. فقد كان مثلًا قد خدع الغراب وأخذ منه قطعة الجبن. قالت بهدوء: «يا صديقي، قبل أن تستمر في مدحي، قل لي بصراحة ماذا تريد.»<br><br>سكت الثعلب لحظة. لم يكن يتوقّع أن تكتشف الزرافة حيلته بهذه السرعة. ثم أخفض رأسه وقال: «أنا جائع. منذ ثلاثة أيام لم آكل شيئًا، ولا أستطيع الوصول إلى الثمار.»<br><br>بعد أن قال الثعلب الحقيقة، ضحكت الزرافة بلطف. وهزّت الشجرة برقبتها الطويلة حتى سقطت ثمار كثيرة على الأرض. وقالت: «أرأيت؟ من يسأل بصدق يحصل على أكثر ممّا يحصل عليه الكاذب.» وبينما كان الثعلب يأكل، فكّر طويلًا في هذه الكلمات.<br><br>مغزى الحكاية: الصدق يدوم أطول.",
          "questions": [
            [
              "Warum war der Fuchs so hungrig?",
              "Er hatte seit Tagen nichts gefressen, weil die Mäuse vor der Hitze in ihre Löcher geflohen waren.",
              "ليه الثعلب كان جعان جدًا؟",
              "ماكانش أكل من أيام لأن الفئران هربت من الحر لجحورها."
            ],
            [
              "Warum lobte der Fuchs die Giraffe?",
              "Er hoffte, dass sie ihm dann ein paar Früchte gibt.",
              "ليه الثعلب مدح الزرافة؟",
              "كان متوقع إنها تدّيه شوية فاكهة بعدها."
            ],
            [
              "Warum glaubte die Giraffe dem Fuchs nicht?",
              "Sie hatte schon viele Geschichten über seine Tricks gehört, zum Beispiel über den Raben und den Käse.",
              "ليه الزرافة ما صدّقتش الثعلب؟",
              "كانت سمعت قصصًا كتير عن حيله، مثل قصة الغراب والجبنة."
            ],
            [
              "Was tat die Giraffe, nachdem der Fuchs die Wahrheit gesagt hatte?",
              "Sie schüttelte den Baum, bis viele Früchte auf den Boden fielen.",
              "الزرافة عملت إيه بعد ما الثعلب قال الحقيقة؟",
              "هزّت الشجرة لحد ما فاكهة كتير وقعت على الأرض."
            ],
            [
              "Was ist die Moral der Fabel?",
              "Ehrlich währt am längsten: Wer ehrlich fragt, bekommt mehr als jemand, der lügt.",
              "إيه العبرة من الحكاية؟",
              "الصدق يدوم أطول: اللي يسأل بصدق بيحصل على أكتر من اللي بيكذب."
            ]
          ],
          "titleAr": "الثعلب والزرافة",
          "kindAr": "حكاية رمزية"
        },
        {
          "kind": "Zeitungsartikel",
          "title": "WG statt Altenheim",
          "text": "Nachdem ihr Mann vor sechs Jahren gestorben war, fühlte sich Renate Kühn in ihrem großen Haus sehr einsam. Ihre Kinder wohnten weit weg und waren beruflich stark eingespannt. „Ins Altenheim wollte ich auf keinen Fall“, erzählt die 71-Jährige. Deshalb beschloss sie, etwas ganz Neues auszuprobieren: eine Wohngemeinschaft für Menschen über 60.<br><br>Nachdem sie eine Anzeige in die Zeitung gesetzt hatte, meldeten sich über zwanzig Interessenten. Bei einer ersten Versammlung im Gemeindehaus lernten sich alle kennen. Am Ende blieben vier Frauen und zwei Männer übrig. Bevor sie zusammenziehen konnten, mussten sie das alte Haus umbauen, denn jede Person sollte ein eigenes Zimmer mit Bad bekommen.<br><br>Heute leben die sechs schon seit vier Jahren zusammen. Die Hausarbeit verteilen sie gerecht: Während einer kocht, deckt ein anderer den Tisch. Einmal pro Woche gibt es eine Hausversammlung. Dort klären sie Probleme und beschließen, was gekauft oder repariert werden muss. Wichtige Entscheidungen trifft die Mehrheit.<br><br>Natürlich gibt es auch Konflikte. „Am Anfang haben wir uns oft über Kleinigkeiten aufgeregt, zum Beispiel über die Lautstärke des Fernsehers“, sagt Heinz Bauer, 75. „Aber wir haben gelernt, Rücksicht aufeinander zu nehmen und diplomatisch zu bleiben.“ Wer allein sein möchte, schließt einfach seine Tür.<br><br>Für Renate Kühn hat sich das Experiment gelohnt. „Seit ich hier wohne, bin ich nie mehr einsam“, sagt sie und lacht. „Hier ist immer jemand zum Reden da. Die WG ist kein Ersatz für meine Familie, aber sie ist inzwischen so etwas wie eine zweite Familie.“",
          "ar": "بعد أن تُوفّي زوجها قبل ست سنوات، شعرت ريناته كون بوحدة شديدة في بيتها الكبير. كان أولادها يسكنون بعيدًا وكانوا مشغولين جدًا في عملهم. تحكي السيدة البالغة من العمر ٧١ عامًا: «لم أكن أريد الذهاب إلى دار المسنين بأي حال». لذلك قرّرت أن تجرّب شيئًا جديدًا تمامًا: سكنًا مشتركًا لأشخاص فوق الستين.<br><br>بعد أن نشرت إعلانًا في الجريدة، تقدّم أكثر من عشرين شخصًا مهتمًا. وفي اجتماع أول في قاعة الحي تعرّف الجميع على بعضهم. وفي النهاية بقيت أربع نساء ورجلان. وقبل أن يتمكّنوا من الانتقال معًا، كان عليهم أن يعيدوا تجهيز البيت القديم، لأن كل شخص كان يجب أن يحصل على غرفة خاصة بحمّام.<br><br>واليوم يعيش الستة معًا منذ أربع سنوات. وهم يوزّعون أعمال البيت بشكل عادل: بينما يطبخ أحدهم، يجهّز آخر المائدة. ومرة في الأسبوع يُعقد اجتماع للبيت. وهناك يحلّون المشكلات ويقرّرون ما يجب شراؤه أو إصلاحه. والقرارات المهمة تتّخذها الأغلبية.<br><br>وبالطبع توجد خلافات أيضًا. يقول هاينتس باور، ٧٥ سنة: «في البداية كنا ننفعل كثيرًا بسبب أشياء صغيرة، مثلًا بسبب ارتفاع صوت التلفزيون. لكننا تعلّمنا أن نراعي بعضنا وأن نبقى دبلوماسيين.» ومن يريد أن يكون وحده، يغلق بابه ببساطة.<br><br>بالنسبة لريناته كون كانت التجربة تستحق العناء. تقول وهي تضحك: «منذ أن أسكن هنا، لم أعد أشعر بالوحدة أبدًا. هنا يوجد دائمًا شخص أتحدث معه. السكن المشترك ليس بديلًا عن عائلتي، لكنه أصبح الآن ما يشبه عائلة ثانية.»",
          "questions": [
            [
              "Warum fühlte sich Renate Kühn einsam?",
              "Ihr Mann war gestorben und ihre Kinder wohnten weit weg.",
              "ليه ريناته كون كانت حاسّة بالوحدة؟",
              "زوجها كان توفّي وأولادها ساكنين بعيد."
            ],
            [
              "Was mussten die sechs Personen tun, bevor sie zusammenziehen konnten?",
              "Sie mussten das alte Haus umbauen, damit jeder ein eigenes Zimmer mit Bad bekommt.",
              "الستة أشخاص كان لازم يعملوا إيه قبل ما يسكنوا مع بعض؟",
              "كان لازم يعدّلوا البيت القديم علشان كل واحد يكون له غرفة وحمام خاص."
            ],
            [
              "Wie organisieren die Bewohner das Zusammenleben?",
              "Sie verteilen die Hausarbeit gerecht und machen einmal pro Woche eine Hausversammlung.",
              "السكان بينظّموا الحياة مع بعض إزاي؟",
              "بيوزّعوا شغل البيت بالعدل وبيعملوا اجتماعًا أسبوعيًا للسكان."
            ],
            [
              "Worüber haben sie sich am Anfang aufgeregt?",
              "Über Kleinigkeiten, zum Beispiel über die Lautstärke des Fernsehers.",
              "كانوا بيتضايقوا من إيه في البداية؟",
              "من حاجات صغيرة، مثل درجة صوت التلفزيون."
            ],
            [
              "Was hat sich für Renate geändert, seit sie in der WG wohnt?",
              "Sie ist nie mehr einsam, weil immer jemand zum Reden da ist.",
              "إيه اللي اتغيّر لريناته من وقت سكنها في السكن المشترك؟",
              "ما بقتش وحيدة، لأن فيه دايمًا حد تتكلم معاه."
            ]
          ],
          "titleAr": "سكن مشترك بدل دار المسنين",
          "kindAr": "مقال في جريدة"
        }
      ],
      "grammar": [
        {
          "t": "Plusquamperfekt",
          "tAr": "الماضي التام (Plusquamperfekt)",
          "body": "<p>Mit dem <b>Plusquamperfekt</b> drückt man aus, dass etwas <b>vor</b> einer anderen Handlung in der Vergangenheit passiert ist (Vorvergangenheit). Man bildet es mit <b>hatte/war</b> + <b>Partizip II</b>.</p><div class=\"ar\">لما تحكي عن الماضي وعايز تقول إن حاجة حصلت <b>قبل</b> حاجة تانية في الماضي، تستخدم الـ Plusquamperfekt: hatte أو war (زي الـ Perfekt بالظبط بس في الماضي) + Partizip II في آخر الجملة.</div><div class=\"exbox\">Früher <b>hatten</b> wir uns fast jeden Tag <b>getroffen</b>.<br>Wir <b>waren</b> viel zusammen <b>gereist</b>.<br>Elena kannte niemanden, denn sie <b>war</b> gerade nach Frankfurt <b>gezogen</b>.</div>"
        },
        {
          "t": "Nebensätze mit nachdem",
          "tAr": "الجمل الجانبية بـ nachdem (بعد ما)",
          "body": "<p>Mit <b>nachdem</b> sagt man, was <b>zuerst</b> passiert ist. Im Nebensatz steht eine <b>frühere Zeitform</b> als im Hauptsatz: Hauptsatz <b>Präsens</b> → Nebensatz <b>Perfekt</b>; Hauptsatz <b>Präteritum/Perfekt</b> → Nebensatz <b>Plusquamperfekt</b>.</p><div class=\"ar\">nachdem يعني «بعد ما». الحاجة اللي في جملة nachdem حصلت الأول، علشان كده زمنها بيكون «أقدم» خطوة من الجملة الأساسية. والفعل بيروح آخر الجملة.</div><div class=\"exbox\"><b>Nachdem</b> sie in Freiburg angekommen <b>war</b>, fand sie schnell eine Wohnung.<br><b>Nachdem</b> sie nette Leute getroffen <b>hat</b>, fühlt sie sich wohl.<br>Wir <b>sind</b> essen gegangen, <b>nachdem</b> wir den Film gesehen <b>hatten</b>.</div>"
        },
        {
          "t": "Temporalsätze mit bevor, bis, seit/seitdem, während",
          "tAr": "جمل الوقت بـ bevor وbis وseit/seitdem وwährend",
          "body": "<p><b>bevor</b> = die Handlung im Nebensatz kommt <b>später</b>; <b>bis</b> = Endpunkt; <b>seit/seitdem</b> = Beginn in der Vergangenheit, dauert bis jetzt; <b>während</b> = <b>gleichzeitig</b>. Das Verb steht am <b>Ende</b> des Nebensatzes.</p><div class=\"ar\">bevor = قبل ما، bis = لحد ما، seit/seitdem = من ساعة ما (ولسه مستمر)، während = في نفس الوقت اللي. ولو بدأت بالجملة الجانبية، الجملة الأساسية بتبدأ بالفعل.</div><div class=\"exbox\">Sie trinken Kaffee, <b>bevor</b> Julia telefoniert.<br>Wir warten, <b>bis</b> du zurück<b>kommst</b>.<br><b>Seitdem</b> du den Job gewechselt hast, <b>bist</b> du ständig erschöpft.<br><b>Während</b> ich aufräume, <b>kochst</b> du für uns.</div>"
        },
        {
          "t": "derselbe, dasselbe, dieselbe",
          "tAr": "نفس الـ… (derselbe / dasselbe / dieselbe)",
          "body": "<p><b>derselbe/dasselbe/dieselbe</b> bedeutet „genau dieser und kein anderer“. Das Wort hat zwei Teile: den <b>bestimmten Artikel</b> und <b>-selb-</b> mit Adjektivendung (wie nach dem bestimmten Artikel).</p><div class=\"ar\">لما تقول «نفس الشخص / نفس الحاجة» تستخدم derselbe/dasselbe/dieselbe. أوله أداة التعريف بتتصرف عادي، وآخره -selbe- بياخد نهاية الصفة بعد أداة التعريف: denselben، demselben، derselben…</div><div class=\"exbox\">Wir wohnen im <b>selben</b> Haus.<br>Er macht schon wieder <b>denselben</b> Fehler.<br>Ich hatte gerade <b>dieselbe</b> Idee.<br>Man muss über <b>dieselben</b> Dinge lachen können.</div>"
        },
        {
          "t": "Modalpartikeln: aber, denn, ja, mal, wohl, doch",
          "tAr": "الكلمات الصغيرة اللي بتدّي إحساس (Modalpartikeln)",
          "body": "<p><b>Modalpartikeln</b> machen Aussagen persönlicher oder emotionaler: <b>aber</b> = Überraschung, <b>denn</b> = Interesse (nur in Fragen), <b>ja</b> = gemeinsames Wissen, <b>mal</b> = freundliche Aufforderung, <b>wohl</b> = Vermutung, <b>doch</b> = Aufforderung oder Widerspruch.</p><div class=\"ar\">الكلمات دي مش بتغيّر المعنى الأساسي، بس بتخلّي الكلام طبيعي وفيه إحساس، زي «بقى» و«يعني» و«أكيد» عندنا. denn بتيجي في الأسئلة بس.</div><div class=\"exbox\">Das ist <b>aber</b> schön!<br>Wann kommt sie <b>denn</b>?<br>Du hast <b>ja</b> recht.<br>Besuch uns <b>doch mal</b>!<br>Er ist <b>wohl</b> krank.</div>"
        }
      ],
      "redemittel": [
        {
          "cat": "Etwas hervorheben",
          "catAr": "تأكّد على حاجة مهمة بالنسبالك",
          "items": [
            {
              "de": "Im Gegensatz zu … finde ich …",
              "ar": "على عكس … أنا شايف إن …"
            },
            {
              "de": "An … schätze ich vor allem …",
              "ar": "أكتر حاجة بقدّرها في … هي …"
            },
            {
              "de": "Für mich spielt … eine große Rolle.",
              "ar": "بالنسبالي … ليها دور كبير."
            },
            {
              "de": "Besonders wichtig ist/sind für mich …, weil …",
              "ar": "أهم حاجة عندي هي …، علشان …"
            },
            {
              "de": "… finde ich am wichtigsten, denn …",
              "ar": "… دي أهم حاجة في نظري، لإن …"
            },
            {
              "de": "Was ich an echten Freunden schätze, ist ihre Ehrlichkeit.",
              "ar": "اللي بقدّره في الصحاب الحقيقيين هو صراحتهم."
            }
          ]
        },
        {
          "cat": "Konfliktgespräche führen: diplomatisch",
          "catAr": "تدير خناقة بأسلوب دبلوماسي",
          "items": [
            {
              "de": "Sei mir nicht böse, bitte.",
              "ar": "ماتزعلش مني، لو سمحت."
            },
            {
              "de": "Das ist ja nicht so schlimm.",
              "ar": "يعني مش وحشة أوي كده."
            },
            {
              "de": "Wir finden bestimmt einen Kompromiss.",
              "ar": "أكيد هنلاقي حل وسط."
            },
            {
              "de": "Ich kann dich ja gut verstehen.",
              "ar": "أنا فاهمك كويس والله."
            },
            {
              "de": "Ich wünsche mir, dass …",
              "ar": "نفسي إن …"
            },
            {
              "de": "Ich würde gern …",
              "ar": "كنت حابب …"
            },
            {
              "de": "Können wir in Ruhe darüber reden?",
              "ar": "ممكن نتكلم في الموضوع ده بهدوء؟"
            }
          ]
        },
        {
          "cat": "Konfliktgespräche führen: undiplomatisch",
          "catAr": "جمل مش دبلوماسية في الخناقة (خلي بالك منها)",
          "items": [
            {
              "de": "Jetzt übertreibst du aber etwas!",
              "ar": "لا كده إنت بتبالغ شوية!"
            },
            {
              "de": "Immer das Gleiche mit dir!",
              "ar": "كل مرة نفس الحكاية معاك!"
            },
            {
              "de": "Das kann echt nicht wahr sein!",
              "ar": "مش ممكن بجد!"
            },
            {
              "de": "Reg dich doch nicht gleich so auf.",
              "ar": "ماتتعصبش كده على طول."
            },
            {
              "de": "Das nervt mich wirklich.",
              "ar": "ده بيضايقني بجد."
            },
            {
              "de": "Du machst immer/nie …",
              "ar": "إنت دايمًا/عمرك ما …"
            }
          ]
        },
        {
          "cat": "Die eigene Meinung sagen",
          "catAr": "تقول رأيك",
          "items": [
            {
              "de": "Ich bin der Meinung, dass …",
              "ar": "رأيي إن …"
            },
            {
              "de": "Meiner Meinung nach …",
              "ar": "في رأيي …"
            },
            {
              "de": "Ich bin überzeugt, dass …",
              "ar": "أنا مقتنع إن …"
            },
            {
              "de": "Das sehe ich nicht so.",
              "ar": "أنا مش شايف كده."
            },
            {
              "de": "Es scheint mir am wichtigsten, dass …",
              "ar": "شايف إن أهم حاجة إن …"
            },
            {
              "de": "Das finde ich viel schlimmer als …",
              "ar": "دي في نظري أوحش بكتير من …"
            }
          ]
        },
        {
          "cat": "Von Freundschaften erzählen",
          "catAr": "تحكي عن صحابك",
          "items": [
            {
              "de": "Wir kennen uns schon seit einer Ewigkeit.",
              "ar": "إحنا نعرف بعض من زمان أوي."
            },
            {
              "de": "Wir haben uns in der Schule kennengelernt.",
              "ar": "اتعرفنا على بعض في المدرسة."
            },
            {
              "de": "Wir haben schon viel gemeinsam erlebt.",
              "ar": "عدّينا بحاجات كتير مع بعض."
            },
            {
              "de": "Wir verstehen uns super.",
              "ar": "إحنا متفاهمين جدًا."
            },
            {
              "de": "Leider haben wir uns aus den Augen verloren.",
              "ar": "للأسف بعدنا عن بعض واتقطعت الصلة."
            },
            {
              "de": "Wir unternehmen oft etwas zusammen.",
              "ar": "بنعمل حاجات كتير مع بعض."
            },
            {
              "de": "Wir sind uns zufällig über den Weg gelaufen.",
              "ar": "قابلنا بعض صدفة."
            }
          ]
        },
        {
          "cat": "Modalpartikeln im Gespräch",
          "catAr": "كلمات صغيرة بتدّي إحساس للكلام",
          "items": [
            {
              "de": "Das ist aber schön!",
              "ar": "ده حلو أوي بجد! (مفاجأة)"
            },
            {
              "de": "Wann kommt sie denn?",
              "ar": "هي جاية إمتى بقى؟ (اهتمام)"
            },
            {
              "de": "Du hast ja recht.",
              "ar": "ما إنت عندك حق. (حاجة معروفة)"
            },
            {
              "de": "Komm mal her!",
              "ar": "تعالى هنا كده! (طلب لطيف)"
            },
            {
              "de": "Er ist wohl krank.",
              "ar": "شكله عيّان. (تخمين)"
            },
            {
              "de": "Besuch uns doch mal!",
              "ar": "ما تيجي تزورنا بقى!"
            }
          ]
        }
      ],
      "speaking": {
        "questions": [
          {
            "de": "Was ist für Sie ein echter Freund oder eine echte Freundin?",
            "ar": "مين هو الصاحب الحقيقي بالنسبالك؟"
          },
          {
            "de": "Wie haben Sie Ihren besten Freund oder Ihre beste Freundin kennengelernt?",
            "ar": "اتعرفت على أقرب صاحب ليك إزاي؟"
          },
          {
            "de": "Worüber streiten Sie sich manchmal mit Freunden oder in der Familie?",
            "ar": "ساعات بتتخانق مع صحابك أو أهلك على إيه؟"
          },
          {
            "de": "Wie lösen Sie Konflikte? Bleiben Sie diplomatisch?",
            "ar": "بتحل الخلافات إزاي؟ بتفضل هادي ودبلوماسي؟"
          },
          {
            "de": "Kennen Sie eine Fabel oder ein Sprichwort aus Ihrem Land?",
            "ar": "تعرف حكاية على لسان الحيوانات أو مثل شعبي من بلدك؟"
          }
        ],
        "model": "Für mich ist ein echter Freund jemand, der ehrlich ist und mich auch in schweren Zeiten unterstützt. Meinen besten Freund Omar kenne ich seit der Schule. Nachdem wir das Abitur gemacht hatten, haben wir zusammen in Kairo studiert. Seit ich in Deutschland lebe, telefonieren wir jede Woche. Natürlich streiten wir uns manchmal, zum Beispiel weil er sich oft verspätet. Früher habe ich mich darüber sehr aufgeregt. Heute bleibe ich lieber ruhig und sage: „Ich wünsche mir, dass du pünktlich bist.“ Meistens finden wir dann schnell einen Kompromiss. Ein ägyptisches Sprichwort sagt übrigens: Ein Freund in der Not ist ein wahrer Freund.",
        "modelAr": "بالنسبالي الصاحب الحقيقي هو اللي بيكون صريح ويقف جنبي في الأوقات الصعبة. أقرب صاحب ليا عمر، أعرفه من أيام المدرسة. بعد ما خلّصنا الثانوية، درسنا مع بعض في القاهرة. ومن ساعة ما بقيت عايش في ألمانيا، بنكلم بعض كل أسبوع. أكيد ساعات بنتخانق، مثلًا علشان هو بيتأخر كتير. زمان كنت بتعصب جدًا من كده. دلوقتي بفضّل أفضل هادي وأقول: «نفسي تيجي في ميعادك.» وغالبًا بنلاقي حل وسط بسرعة. وعلى فكرة فيه مثل مصري بيقول: الصاحب وقت الضيق هو الصاحب الحقيقي."
      },
      "quiz": [
        {
          "q": "Als ich ankam, ___ der Zug schon ___.",
          "o": [
            "ist … abgefahren",
            "war … abgefahren",
            "hat … abgefahren"
          ],
          "a": 1,
          "fb": "Vorvergangenheit: Plusquamperfekt mit war (abfahren → sein).",
          "fbAr": "القطر مشي قبل ما أوصل، يبقى Plusquamperfekt، وabfahren بياخد sein ← war abgefahren.",
          "qAr": "لما وصلت، ___ القطر بالفعل ___ .",
          "oAr": [
            "غادر؛ مع الفعل المساعد ist",
            "كان قد غادر؛ مع war",
            "غادر؛ مع الفعل المساعد hat"
          ]
        },
        {
          "q": "Nachdem wir gegessen ___, gingen wir spazieren.",
          "o": [
            "hatten",
            "haben",
            "sind"
          ],
          "a": 0,
          "fb": "Hauptsatz im Präteritum → Nebensatz mit nachdem im Plusquamperfekt.",
          "fbAr": "الجملة الأساسية Präteritum (gingen)، يبقى جملة nachdem تكون Plusquamperfekt: hatten gegessen.",
          "qAr": "بعد ما إحنا ___ أكلنا، خرجنا نتمشى.",
          "oAr": [
            "كانوا؛ صيغة hatten",
            "فعل haben مع الجمع",
            "يكونون؛ صيغة sind"
          ]
        },
        {
          "q": "Ich lese oft Zeitung, ___ ich frühstücke.",
          "o": [
            "bevor",
            "bis",
            "während"
          ],
          "a": 2,
          "fb": "während = gleichzeitig.",
          "fbAr": "الحاجتين بيحصلوا في نفس الوقت، يبقى während.",
          "qAr": "غالبًا بقرأ الجريدة ___ بفطر.",
          "oAr": [
            "قبل ما",
            "لحد ما",
            "أثناء أو بينما"
          ]
        },
        {
          "q": "___ du den neuen Job hast, bist du ständig erschöpft.",
          "o": [
            "Seitdem",
            "Bevor",
            "Bis"
          ],
          "a": 0,
          "fb": "seitdem = Beginn in der Vergangenheit, dauert bis jetzt.",
          "fbAr": "الحالة بدأت مع الشغل الجديد ولسه مستمرة، يبقى seitdem.",
          "qAr": "___ بقيت في الشغل الجديد، إنت مرهق باستمرار.",
          "oAr": [
            "من ساعة ما",
            "قبل ما",
            "لحد ما"
          ]
        },
        {
          "q": "Wir warten hier, ___ du zurückkommst.",
          "o": [
            "während",
            "bis",
            "nachdem"
          ],
          "a": 1,
          "fb": "bis nennt den Endpunkt.",
          "fbAr": "bis = لحد ما ترجع، ده آخر الانتظار.",
          "qAr": "هنستنى هنا ___ ترجع.",
          "oAr": [
            "أثناء أو بينما",
            "لحد ما",
            "بعد ما"
          ]
        },
        {
          "q": "Er macht immer ___ Fehler.",
          "o": [
            "derselbe",
            "denselben",
            "demselben"
          ],
          "a": 1,
          "fb": "machen + Akkusativ, maskulin: denselben.",
          "fbAr": "Fehler مذكّر وفي الأكوزاتيف (بعد machen)، يبقى denselben.",
          "qAr": "هو دايمًا بيعمل ___ الخطأ.",
          "oAr": [
            "نفسه؛ صيغة للمذكر",
            "نفسه؛ صيغة للمذكر",
            "نفسه؛ صيغة للمذكر"
          ]
        },
        {
          "q": "Was bedeutet „Jetzt übertreibst du aber etwas!“?",
          "o": [
            "Du machst das Problem größer, als es ist.",
            "Du kommst zu spät.",
            "Du hast völlig recht."
          ],
          "a": 0,
          "fb": "übertreiben = etwas größer oder schlimmer machen, als es ist.",
          "fbAr": "übertreiben يعني تبالغ وتكبّر الموضوع.",
          "qAr": "«إنت كده بتبالغ شوية!» معناها إيه؟",
          "oAr": [
            "إنت بتكبّر المشكلة عن حجمها الحقيقي.",
            "إنت بتوصل متأخر.",
            "معاك حق تمامًا."
          ]
        },
        {
          "q": "Wenn man keinen Kontakt mehr zu jemandem hat, hat man ihn …",
          "o": [
            "über den Weg gelaufen.",
            "ins Gespräch gekommen.",
            "aus den Augen verloren."
          ],
          "a": 2,
          "fb": "jemanden aus den Augen verlieren = keinen Kontakt mehr haben.",
          "fbAr": "aus den Augen verlieren يعني الصلة اتقطعت بينكم.",
          "qAr": "لو انقطع تواصلك مع شخص، يبقى إنت ...",
          "oAr": [
            "قابلته بالصدفة.",
            "بدأت تتكلم معاه.",
            "انقطعت صلتك بيه."
          ]
        }
      ],
      "badgesAr": [
        "الماضي التام: ماضي قبل الماضي",
        "جمل جانبية بـ nachdem: بعد ما",
        "قبل ما، لحد ما، من ساعة ما، أثناء",
        "نفس الشخص أو نفس الشيء",
        "الصداقة والخلافات"
      ]
    },
    "8": {
      "intro": "In Kapitel 8 dreht sich alles um Gesundheit, das Krankenhaus, Musik, Gefühle und das Lernen. Sie lernen, Hilfe anzubieten, jemanden zu warnen, über Musik und Gefühle zu sprechen und Lerntipps zu geben. In der Grammatik geht es um brauchen + zu, Reflexivpronomen im Dativ und zweiteilige Konnektoren.",
      "introAr": "في الفصل ٨ كل حاجة بتدور حوالين الصحة والمستشفى والمزيكا والمشاعر والمذاكرة. هتتعلم إزاي تعرض مساعدة، وتحذّر حد، وتتكلم عن المزيكا والمشاعر، وتدّي نصايح للتعلّم. وفي القواعد هتاخد brauchen + zu، وضمائر الانعكاس في الداتيف، والروابط اللي من جزئين.",
      "badges": [
        "brauchen + zu",
        "Reflexivpronomen im Dativ",
        "Zweiteilige Konnektoren",
        "Verben mit mit-, weg-, zurück- …",
        "Gesundheit & Musik"
      ],
      "goals": [
        {
          "de": "Hilfe anbieten und annehmen oder ablehnen",
          "ar": "تعرض مساعدة وتقبلها أو ترفضها بأدب"
        },
        {
          "de": "Jemanden warnen und Warnungen verstehen",
          "ar": "تحذّر حد وتفهم التحذيرات"
        },
        {
          "de": "Gewohnheiten nennen (sich anziehen, sich die Zähne putzen …)",
          "ar": "تحكي عن عاداتك اليومية (تلبس، تغسل سنانك …)"
        },
        {
          "de": "Über Gesundheit, Kranksein und das Krankenhaus sprechen",
          "ar": "تتكلم عن الصحة والعيا والمستشفى"
        },
        {
          "de": "Informationen in einem Infotext finden",
          "ar": "تلاقي المعلومات اللي محتاجها في نص إرشادات"
        },
        {
          "de": "Über Musik und Gefühle sprechen",
          "ar": "تتكلم عن المزيكا والمشاعر"
        },
        {
          "de": "Wichtige Informationen aus einem Zeitungsartikel weitergeben",
          "ar": "تنقل أهم المعلومات من مقالة في الجرنال"
        },
        {
          "de": "Eine Diskussion im Radio verstehen, über Lernen sprechen und Lerntipps geben",
          "ar": "تفهم مناقشة في الراديو وتتكلم عن المذاكرة وتدّي نصايح"
        },
        {
          "de": "Besondere Orte vorstellen",
          "ar": "تعرّف الناس على أماكن مميزة"
        }
      ],
      "readings": [
        {
          "kind": "Blog",
          "title": "Zwölf Tage mit einer kaputten Schulter",
          "text": "Im Januar bin ich auf dem Weg zur Arbeit auf dem glatten Gehweg ausgerutscht und unglücklich auf die rechte Schulter gefallen. Mir war sofort schwindelig und ich war ganz blass. Ein Passant hat den Notruf gewählt, und wenige Minuten später brachte mich ein Krankenwagen in die Notaufnahme. Dort musste ich zuerst meine Versichertenkarte zeigen, dann wurde ich untersucht. Die Diagnose: Die Schulter war gebrochen. Ich musste operiert werden und blieb zwölf Tage im Krankenhaus.<br><br>Die ersten Tage waren nicht leicht. Ich konnte mich nicht allein anziehen, und sogar das Zähneputzen war mit der linken Hand ein echtes Abenteuer. Zum Glück war der Pfleger Thomas sehr geduldig. „Sie brauchen mich nur zu rufen, wenn Sie Hilfe brauchen“, sagte er immer. Und als ich am dritten Tag allein zum Fenster gehen wollte, warnte er mich: „Seien Sie vorsichtig! Sie brauchen heute noch nicht aufzustehen.“ Gegen die Schmerzen bekam ich ein Schmerzmittel, das ich in Wasser auflösen und dreimal am Tag einnehmen musste.<br><br>Nach einer Woche ging es mir einigermaßen gut. Ich habe mir die Haare wieder selbst gekämmt und bin in der Besuchszeit mit meinen Freunden in die Cafeteria gegangen. Langweilig war es trotzdem manchmal, denn der Fernseher kostete 2,50 Euro pro Tag, und das Programm war nicht besonders spannend.<br><br>Für alle, die bald ins Krankenhaus müssen, habe ich drei Tipps: Packt bequeme Kleidung ein, also einen Schlafanzug, einen Bademantel und Hausschuhe. Nehmt keine Wertsachen mit oder bewahrt sie im Schließfach auf. Und nehmt Rücksicht auf eure Zimmernachbarn – telefoniert leise oder geht dafür auf den Flur. Bei meiner Entlassung habe ich mich bei allen bedankt. Die Pfleger haben wirklich einen anstrengenden Job!",
          "ar": "في يناير انزلقتُ على الرصيف الزلِق وأنا في طريقي إلى العمل، ووقعتُ وقعةً سيئة على كتفي اليمنى. شعرتُ بالدوار فورًا وكنتُ شاحبة جدًا. اتصل أحد المارّة برقم الطوارئ، وبعد دقائق قليلة نقلتني سيارة إسعاف إلى قسم الطوارئ. هناك كان عليّ أولًا أن أُظهر بطاقة التأمين الصحي، ثم فحصوني. التشخيص: الكتف مكسورة. كان لا بد أن أُجري عملية، وبقيتُ في المستشفى اثني عشر يومًا.<br><br>لم تكن الأيام الأولى سهلة. لم أستطع أن أرتدي ملابسي وحدي، وحتى تنظيف الأسنان باليد اليسرى كان مغامرة حقيقية. لحسن الحظ كان الممرض توماس صبورًا جدًا. كان يقول دائمًا: «يكفي أن تناديني إذا احتجتِ إلى مساعدة». وعندما أردتُ في اليوم الثالث أن أمشي وحدي إلى النافذة حذّرني قائلًا: «انتبهي! لا داعي لأن تقومي من السرير اليوم». وضد الألم أخذتُ مسكّنًا كان عليّ أن أذيبه في الماء وأتناوله ثلاث مرات في اليوم.<br><br>بعد أسبوع أصبحتُ بخير إلى حدٍّ ما. صرتُ أمشّط شعري بنفسي من جديد، وفي مواعيد الزيارة كنتُ أذهب مع أصدقائي إلى الكافيتيريا. ومع ذلك كان الوقت مملًّا أحيانًا، لأن التلفزيون كان يكلّف 2,50 يورو في اليوم، والبرامج لم تكن مشوّقة جدًا.<br><br>لكل من سيدخل المستشفى قريبًا عندي ثلاث نصائح: احزموا ملابس مريحة، أي بيجامة وروب حمّام وشبشبًا. لا تأخذوا معكم أشياء ثمينة، أو احفظوها في الخزانة ذات القفل. وراعوا جيرانكم في الغرفة – تكلّموا في الهاتف بصوت منخفض أو اخرجوا لذلك إلى الممر. عند خروجي من المستشفى شكرتُ الجميع. إن عمل الممرضين مُتعب حقًا!",
          "questions": [
            [
              "Wie ist der Unfall passiert?",
              "Die Autorin ist auf dem glatten Gehweg ausgerutscht und auf die rechte Schulter gefallen.",
              "الحادث حصل إزاي؟",
              "الكاتبة اتزحلقت على الرصيف الزلق ووقعت على كتفها اليمين."
            ],
            [
              "Was musste sie in der Notaufnahme zuerst zeigen?",
              "Ihre Versichertenkarte.",
              "إيه أول حاجة كان لازم توريها في قسم الطوارئ؟",
              "بطاقة التأمين الصحي."
            ],
            [
              "Warum hat der Pfleger sie am dritten Tag gewarnt?",
              "Weil sie allein zum Fenster gehen wollte, sie sollte aber noch nicht aufstehen.",
              "ليه الممرّض حذّرها في اليوم الثالث؟",
              "لأنها كانت عايزة تروح الشباك لوحدها، لكن ماكانش المفروض تقوم لسه."
            ],
            [
              "Wie musste sie das Schmerzmittel einnehmen?",
              "Sie musste es in Wasser auflösen und dreimal am Tag einnehmen.",
              "كان لازم تاخد المسكّن إزاي؟",
              "كان لازم تدوّبه في الميّه وتاخده ثلاث مرات في اليوم."
            ],
            [
              "Welche drei Tipps gibt sie?",
              "Bequeme Kleidung einpacken, keine Wertsachen mitnehmen oder sie im Schließfach aufbewahren und Rücksicht auf die Zimmernachbarn nehmen.",
              "إيه النصائح الثلاث اللي بتقدّمها؟",
              "تاخد هدوم مريحة، وما تاخدش مقتنيات ثمينة أو تحفظها في خزانة مقفولة، وتراعي جيران الغرفة."
            ]
          ],
          "titleAr": "اثنا عشر يومًا مع كتف مصاب",
          "kindAr": "مدوّنة"
        },
        {
          "kind": "Zeitungsartikel",
          "title": "Warum uns Musik so stark berührt",
          "text": "Ob im Auto, beim Sport oder beim Kochen – Musik begleitet uns fast überall. Aber warum reagieren wir so stark auf Töne und Rhythmen? Die Musikforscherin Dr. Laura Brandt aus Leipzig untersucht diese Frage seit zehn Jahren. Ihr Ergebnis: Musik wirkt nicht nur auf unsere Gefühle, sondern auch auf unseren Körper.<br><br>In einem Experiment hörten 60 Personen verschiedene Musikstücke, während die Forscher ihren Puls und ihre Atmung maßen. Bei schnellen Stücken in Dur atmeten die Teilnehmer schneller und empfanden eher Freude. Bei langsamen Stücken in Moll sank der Puls, und viele fühlten sich traurig, aber gleichzeitig ruhiger. „Interessant ist, dass diese Wirkung sowohl bei Musikfans als auch bei Menschen auftritt, die sich kaum für Musik interessieren“, erklärt Brandt. Es spielt also keine Rolle, ob uns ein Lied gefällt oder nicht.<br><br>Das wissen auch Werbefachleute. In fast jeder Reklame läuft Musik, denn sie soll positive Gefühle mit einem Produkt verbinden. Im Kino ist es ähnlich: Ein Horrorfilm ohne Musik wäre zwar immer noch spannend, aber wir würden uns vermutlich viel weniger fürchten.<br><br>Besonders spannend findet Brandt den Einsatz von Musik in Kliniken. Einerseits hilft beruhigende Musik Patienten, vor einer Operation weniger Angst zu haben. Andererseits erreicht Musik Menschen, die an Demenz leiden. „Manche Patienten können weder ihren Namen sagen noch ihre Kinder erkennen, aber sie singen alte Lieder mit“, erzählt sie. Mithilfe von Musik gelangen alte Erinnerungen wieder ins Bewusstsein.<br><br>Brandts Tipp für den Alltag: Wer gestresst ist, sollte entweder ein ruhiges Stück hören oder selbst singen. Beides senkt den Stress – und kostet nichts.",
          "ar": "سواء في السيارة أو أثناء الرياضة أو أثناء الطبخ – الموسيقى ترافقنا في كل مكان تقريبًا. لكن لماذا نتفاعل بهذه القوة مع النغمات والإيقاعات؟ الباحثة في علم الموسيقى الدكتورة لاورا براندت من مدينة لايبزيغ تدرس هذا السؤال منذ عشر سنوات. والنتيجة التي توصّلت إليها: الموسيقى لا تؤثر على مشاعرنا فقط، بل على أجسامنا أيضًا.<br><br>في إحدى التجارب استمع 60 شخصًا إلى مقطوعات موسيقية مختلفة، بينما قاس الباحثون نبضهم وتنفّسهم. مع المقطوعات السريعة في مقام الماجير تنفّس المشاركون بسرعة أكبر وشعروا غالبًا بالفرح. أما مع المقطوعات البطيئة في مقام المينور فانخفض النبض، وشعر كثيرون بالحزن، لكنهم أصبحوا في الوقت نفسه أهدأ. وتشرح براندت: «المثير للاهتمام أن هذا التأثير يظهر لدى محبّي الموسيقى ولدى الأشخاص الذين لا يكادون يهتمون بالموسيقى على حدٍّ سواء». إذن لا يهم إن كانت الأغنية تعجبنا أم لا.<br><br>وهذا ما يعرفه أيضًا خبراء الإعلانات. ففي كل إعلان تقريبًا توجد موسيقى، لأنها يجب أن تربط مشاعر إيجابية بالمنتج. وفي السينما الأمر مشابه: فيلم الرعب بدون موسيقى سيظل مشوّقًا بالفعل، لكننا على الأرجح سنخاف أقل بكثير.<br><br>وتجد براندت أن استخدام الموسيقى في المستشفيات مثير بشكل خاص. فمن ناحية تساعد الموسيقى المهدّئة المرضى على أن يشعروا بخوف أقل قبل العملية. ومن ناحية أخرى تصل الموسيقى إلى الأشخاص الذين يعانون من الخَرَف. وتحكي: «بعض المرضى لا يستطيعون قول أسمائهم ولا التعرّف على أولادهم، لكنهم يغنّون الأغاني القديمة مع الآخرين». وبمساعدة الموسيقى تعود الذكريات القديمة إلى الوعي من جديد.<br><br>ونصيحة براندت للحياة اليومية: من يشعر بالتوتر عليه إمّا أن يستمع إلى مقطوعة هادئة أو أن يغنّي بنفسه. كلا الأمرين يقلّل التوتر – ولا يكلّف شيئًا.",
          "questions": [
            [
              "Was ist das wichtigste Ergebnis von Dr. Brandt?",
              "Musik wirkt nicht nur auf die Gefühle, sondern auch auf den Körper.",
              "إيه أهم نتيجة توصلت لها د. برانت؟",
              "الموسيقى بتأثر على الجسم كمان، مش المشاعر بس."
            ],
            [
              "Was passiert bei langsamen Stücken in Moll?",
              "Der Puls sinkt, viele fühlen sich traurig, aber ruhiger.",
              "إيه اللي بيحصل مع المقطوعات البطيئة في السلم الصغير؟",
              "النبض بيقل، وناس كتير بيحسّوا بالحزن لكن بهدوء أكتر."
            ],
            [
              "Warum läuft in fast jeder Reklame Musik?",
              "Weil sie positive Gefühle mit einem Produkt verbinden soll.",
              "ليه تقريبًا كل إعلان فيه موسيقى؟",
              "علشان تربط مشاعر إيجابية بالمنتج."
            ],
            [
              "Wie hilft Musik in Kliniken?",
              "Sie nimmt Patienten vor einer Operation die Angst und erreicht Menschen mit Demenz.",
              "الموسيقى بتساعد في المستشفيات إزاي؟",
              "بتخفّف خوف المرضى قبل العملية وبتصل لمرضى الخرف."
            ],
            [
              "Was rät Dr. Brandt gestressten Menschen?",
              "Sie sollen entweder ein ruhiges Stück hören oder selbst singen.",
              "د. برانت بتنصح المضغوطين بإيه؟",
              "يسمعوا مقطوعة هادية أو يغنّوا بنفسهم."
            ]
          ],
          "titleAr": "ليه الموسيقى بتأثر فينا بقوة",
          "kindAr": "مقال في جريدة"
        },
        {
          "kind": "Interview",
          "title": "Wörter lernen mit allen Sinnen",
          "text": "Moderator: Frau Keller, Sie arbeiten als Lerncoach. Warum vergessen wir so viele neue Wörter?<br><br>Sabine Keller: Unser Gehirn ist sehr klug: Es merkt sich vor allem das, was wichtig oder interessant ist. Wenn man eine Liste mit fünfzig Wörtern nur liest, gelangen die meisten Wörter gar nicht ins Langzeitgedächtnis. Deshalb ist Motivation so wichtig. Wer motiviert ist und ein klares Ziel hat, lernt effektiver.<br><br>Moderator: Gibt es eine Tageszeit, zu der man am besten lernt?<br><br>Sabine Keller: Nein, eine feste Zeit für alle gibt es nicht. Manche Menschen können sich morgens gut konzentrieren, andere abends. Wichtiger ist, dass man kleine Mengen lernt und regelmäßig Pausen macht. Zwanzig Minuten konzentriert lernen, dann fünf Minuten an die frische Luft – das funktioniert bei vielen gut.<br><br>Moderator: Und was raten Sie unseren Hörerinnen und Hörern konkret?<br><br>Sabine Keller: Nutzen Sie mehrere Sinne! Sprechen Sie neue Wörter laut aus, schreiben Sie sie auf und bewegen Sie sich dabei, wenn Sie möchten. Außerdem sollte man Wörter in einem Kontext lernen. Denken Sie sich zum Beispiel eine fantasievolle Geschichte aus, in der alle neuen Wörter vorkommen. Je ungewöhnlicher die Geschichte ist, desto besser merken Sie sich die Wörter.<br><br>Moderator: Und wenn mir ein Wort trotzdem nicht einfällt?<br><br>Sabine Keller: Das kennt jeder! Man sagt dann: „Mir liegt es auf der Zunge.“ Keine Panik. Überprüfen Sie einfach ein paar Tage später, an welche Wörter Sie sich noch erinnern, und wiederholen Sie nur die schwierigen. Sie brauchen nicht jeden Tag alles zu wiederholen.<br><br>Moderator: Vielen Dank für die Tipps, Frau Keller!",
          "ar": "المذيع: سيدة كيلر، أنتِ تعملين مدرّبة في مجال التعلّم. لماذا ننسى هذا العدد الكبير من الكلمات الجديدة؟<br><br>سابينه كيلر: مخّنا ذكي جدًا: فهو يحفظ قبل كل شيء ما هو مهم أو مثير للاهتمام. عندما يقرأ المرء قائمة من خمسين كلمة قراءةً فقط، فإن معظم الكلمات لا تصل إلى الذاكرة طويلة المدى أصلًا. لذلك الدافع مهم جدًا. من لديه دافع وهدف واضح يتعلّم بفعالية أكبر.<br><br>المذيع: هل يوجد وقت معيّن في اليوم يكون التعلّم فيه أفضل؟<br><br>سابينه كيلر: لا، لا يوجد وقت ثابت يناسب الجميع. بعض الناس يستطيعون التركيز جيدًا في الصباح، وآخرون في المساء. الأهم هو أن يتعلّم المرء كميات صغيرة وأن يأخذ استراحات بانتظام. عشرون دقيقة من التعلّم بتركيز، ثم خمس دقائق في الهواء الطلق – هذا ينجح مع كثيرين.<br><br>المذيع: وبماذا تنصحين مستمعاتنا ومستمعينا بشكل عملي؟<br><br>سابينه كيلر: استخدموا أكثر من حاسّة! انطقوا الكلمات الجديدة بصوت عالٍ، واكتبوها، وتحرّكوا أثناء ذلك إن أردتم. بالإضافة إلى ذلك يجب تعلّم الكلمات في سياق. اخترعوا مثلًا قصة خيالية تظهر فيها كل الكلمات الجديدة. كلما كانت القصة أغرب، حفظتم الكلمات بشكل أفضل.<br><br>المذيع: وإذا لم تخطر ببالي كلمةٌ رغم ذلك؟<br><br>سابينه كيلر: هذا يعرفه الجميع! يقول المرء حينها: «الكلمة على طرف لساني». لا داعي للذعر. راجعوا ببساطة بعد بضعة أيام أيّ الكلمات ما زلتم تتذكّرونها، وكرّروا الصعبة فقط. لا داعي لأن تكرّروا كل شيء كل يوم.<br><br>المذيع: شكرًا جزيلًا على النصائح، سيدة كيلر!",
          "questions": [
            [
              "Warum vergessen wir viele neue Wörter?",
              "Weil das Gehirn sich vor allem merkt, was wichtig oder interessant ist; nur gelesene Wörter gelangen nicht ins Langzeitgedächtnis.",
              "ليه بننسى كلمات جديدة كتير؟",
              "لأن المخ بيحتفظ خصوصًا بالمهم أو المثير للاهتمام؛ الكلمات اللي نقرأها بس مش بتوصل للذاكرة طويلة المدى."
            ],
            [
              "Gibt es eine beste Tageszeit zum Lernen?",
              "Nein, wichtiger sind kleine Mengen und regelmäßige Pausen.",
              "هل فيه وقت يومي أفضل للتعلّم؟",
              "لا، الأهم كميات صغيرة واستراحات منتظمة."
            ],
            [
              "Wie kann man beim Lernen mehrere Sinne nutzen?",
              "Man spricht die Wörter laut aus, schreibt sie auf und bewegt sich dabei.",
              "ممكن نستخدم عدة حواس أثناء التعلّم إزاي؟",
              "ننطق الكلمات بصوت عالي ونكتبها ونتحرك أثناء كده."
            ],
            [
              "Wie lernt man Wörter im Kontext?",
              "Man denkt sich eine fantasievolle, ungewöhnliche Geschichte mit den neuen Wörtern aus.",
              "بنتعلّم الكلمات في سياق إزاي؟",
              "نبتكر قصة خيالية وغير مألوفة فيها الكلمات الجديدة."
            ],
            [
              "Muss man jeden Tag alle Wörter wiederholen?",
              "Nein, man braucht nur die schwierigen Wörter zu wiederholen.",
              "هل لازم نراجع كل الكلمات كل يوم؟",
              "لا، يكفي نراجع الكلمات الصعبة فقط."
            ]
          ],
          "titleAr": "تعلّم الكلمات بكل الحواس",
          "kindAr": "مقابلة"
        },
        {
          "kind": "Zeitungsartikel",
          "title": "Drei Ausflugstipps für alle Sinne",
          "text": "Sie suchen für das Wochenende etwas Besonderes? Wir stellen Ihnen drei Orte vor, an denen Sie die Welt mit allen Sinnen erleben können.<br><br>Im Barfußpark am Seeufer laufen Sie ohne Schuhe über einen drei Kilometer langen Weg. Unter Ihren Füßen spüren Sie Sand, Steine, Holz, Gras und sogar kühlen Schlamm. Viele Besucher wundern sich, wie unterschiedlich sich die Materialien anfühlen. Der Park ist familienfreundlich und für Kinder ab drei Jahren geeignet. Planen Sie etwa zwei Stunden ein und nehmen Sie ein Handtuch mit!<br><br>Ein ganz anderes Erlebnis bietet das Restaurant „Im Dunkeln“. Hier essen Sie in völliger Dunkelheit. Die Kellnerinnen und Kellner sind blind und führen Sie sicher zu Ihrem Platz. Weil Sie nichts sehen, schmecken und riechen Sie viel intensiver. Raten Sie mal, was auf Ihrem Teller liegt! Das Abendessen dauert ungefähr drei Stunden. Dieser Ort ist zwar nicht ganz billig, aber jeden Euro wert.<br><br>Musikfans sollten den Klangwald im Mittelgebirge besuchen. Auf einem Rundweg stehen zwanzig große Instrumente aus Holz und Metall, auf denen jeder spielen darf. Sie können entweder allein Musik machen oder gemeinsam mit anderen Besuchern ein kleines Konzert geben. Der Weg ist barrierearm, deshalb kommt man auch mit dem Rollstuhl oder dem Kinderwagen gut voran. Für den Rundweg braucht man etwa anderthalb Stunden.<br><br>Unser Tipp: Alle drei Orte sind sowohl bei Sonne als auch bei Regen ein Erlebnis – nur im Barfußpark sollten Sie bei Regen mit schmutzigen Füßen rechnen!",
          "ar": "هل تبحثون عن شيء مميز لعطلة نهاية الأسبوع؟ نقدّم لكم ثلاثة أماكن يمكنكم فيها أن تعيشوا العالم بكل حواسّكم.<br><br>في حديقة المشي حافيًا على شاطئ البحيرة تمشون بدون أحذية على طريق طوله ثلاثة كيلومترات. تحت أقدامكم تشعرون بالرمل والحجارة والخشب والعشب، بل وبالطين البارد أيضًا. كثير من الزوار يتعجّبون من اختلاف ملمس هذه المواد. الحديقة مناسبة للعائلات وللأطفال من سن ثلاث سنوات. خطّطوا لحوالي ساعتين وخذوا معكم منشفة!<br><br>تجربة مختلفة تمامًا يقدّمها مطعم «في الظلام». هنا تأكلون في ظلام تام. النُّدُل والنادلات مكفوفون، وهم يقودونكم بأمان إلى أماكنكم. ولأنكم لا ترون شيئًا، فإنكم تتذوّقون وتشمّون بشكل أقوى بكثير. خمّنوا ما الذي في طبقكم! يستغرق العشاء حوالي ثلاث ساعات. صحيح أن هذا المكان ليس رخيصًا تمامًا، لكنه يستحق كل يورو.<br><br>على محبّي الموسيقى أن يزوروا «غابة الأصوات» في المنطقة الجبلية. على طريق دائري توجد عشرون آلة موسيقية كبيرة من الخشب والمعدن، ويُسمح لأي شخص بالعزف عليها. يمكنكم إمّا أن تعزفوا وحدكم أو أن تقدّموا حفلة صغيرة مع زوار آخرين. الطريق شبه خالٍ من العوائق، لذلك يمكن التقدّم فيه بسهولة بالكرسي المتحرك أو بعربة الأطفال. يحتاج المرء إلى حوالي ساعة ونصف للطريق الدائري.<br><br>نصيحتنا: الأماكن الثلاثة تجربة رائعة في الشمس وفي المطر على حدٍّ سواء – فقط في حديقة المشي حافيًا يجب أن تتوقعوا أقدامًا متّسخة عند المطر!",
          "questions": [
            [
              "Was spürt man im Barfußpark unter den Füßen?",
              "Sand, Steine, Holz, Gras und sogar kühlen Schlamm.",
              "في حديقة المشي حافيًا بنحس بإيه تحت القدمين؟",
              "رمل وحجارة وخشب وعشب، وحتى طين بارد."
            ],
            [
              "Für wen ist der Barfußpark geeignet?",
              "Für Familien und für Kinder ab drei Jahren.",
              "حديقة المشي حافيًا مناسبة لمين؟",
              "للعائلات وللأطفال من سن ثلاث سنين."
            ],
            [
              "Warum schmeckt man im Restaurant „Im Dunkeln“ intensiver?",
              "Weil man nichts sieht.",
              "ليه التذوق أقوى في مطعم «في الظلام»؟",
              "لأنك مش بتشوف حاجة."
            ],
            [
              "Was kann man im Klangwald machen?",
              "Man kann allein oder mit anderen auf großen Instrumenten aus Holz und Metall spielen.",
              "ممكن نعمل إيه في غابة الأصوات؟",
              "نعزف وحدنا أو مع الآخرين على آلات كبيرة من الخشب والمعدن."
            ],
            [
              "Kann man den Klangwald auch mit dem Rollstuhl besuchen?",
              "Ja, der Weg ist barrierearm.",
              "هل ممكن نزور غابة الأصوات بالكرسي المتحرك؟",
              "نعم، الطريق قليل العوائق."
            ]
          ],
          "titleAr": "ثلاث نصائح لرحلات تخاطب كل الحواس",
          "kindAr": "مقال في جريدة"
        }
      ],
      "grammar": [
        {
          "t": "nicht/kein/nur + brauchen + zu + Infinitiv",
          "tAr": "brauchen + zu بمعنى «مش لازم» أو «بس»",
          "body": "<p><b>nicht/kein + brauchen + zu</b> + Infinitiv bedeutet <b>nicht müssen</b>. <b>nur + brauchen + zu</b> + Infinitiv bedeutet <b>nur müssen</b>. Der Infinitiv mit <b>zu</b> steht am Satzende.</p><div class=\"ar\">brauchen … zu مع nicht أو kein معناها «مش لازم»، ومع nur معناها «كل اللي عليك إنك …». والمصدر بـ zu بيروح آخر الجملة.</div><div class=\"exbox\">Du <b>brauchst</b> mir <b>nicht zu</b> helfen. (= Du musst mir nicht helfen.)<br>Er <b>braucht kein</b> Fieber <b>zu</b> messen.<br>Sie <b>brauchen</b> mich <b>nur zu</b> rufen.</div>"
        },
        {
          "t": "Reflexivpronomen im Akkusativ und Dativ",
          "tAr": "ضمائر الانعكاس في الأكوزاتيف والداتيف",
          "body": "<p>Gibt es nur das Reflexivpronomen, steht es im <b>Akkusativ</b>: Ich ziehe <b>mich</b> an. Gibt es zusätzlich ein <b>Akkusativobjekt</b>, steht das Reflexivpronomen im <b>Dativ</b>: Ich ziehe <b>mir</b> den Pullover an. Nur bei <b>ich</b> und <b>du</b> sieht man den Unterschied.</p><div class=\"ar\">لو مفيش في الجملة غير ضمير الانعكاس يبقى أكوزاتيف (mich). لو فيه كمان مفعول به أكوزاتيف (زي den Pullover) الضمير بيتحوّل داتيف (mir). الفرق بيبان بس مع ich و du.</div><div class=\"exbox\">Ich wasche <b>mich</b>. – Ich wasche <b>mir</b> die Hände.<br>Kämmst du <b>dich</b>? – Kämmst du <b>dir</b> die Haare?<br>Er putzt <b>sich</b> die Zähne.</div>"
        },
        {
          "t": "Zweiteilige Konnektoren",
          "tAr": "الروابط اللي من جزئين",
          "body": "<p><b>sowohl … als auch</b> / <b>nicht nur …, sondern auch</b> = das eine und das andere; <b>entweder … oder</b> = das eine oder das andere; <b>weder … noch</b> = beides nicht; <b>zwar …, aber</b> = mit Einschränkung; <b>einerseits …, andererseits</b> = zwei Seiten einer Sache.</p><div class=\"ar\">الروابط دي ليها جزئين: sowohl … als auch يعني «ده وده»، entweder … oder «يا ده يا ده»، weder … noch «لا ده ولا ده»، zwar … aber «صحيح … بس»، einerseits … andererseits «من ناحية … ومن ناحية تانية».</div><div class=\"exbox\">Ich höre <b>sowohl</b> Klassik <b>als auch</b> Pop.<br>Sie hört <b>weder</b> Pop <b>noch</b> Jazz.<br><b>Einerseits</b> höre ich gern laute Musik, <b>andererseits</b> stört sie mich manchmal.</div>"
        },
        {
          "t": "Verben mit mit-, vorbei-, weg-, weiter-, zusammen-, zurück-",
          "tAr": "أفعال بالبادئات mit- و weg- و zurück- …",
          "body": "<p>Die Vorsilben <b>mit-, vorbei-, weg-, weiter-, zusammen-</b> und <b>zurück-</b> sind <b>trennbar</b> und behalten meistens ihre Bedeutung: mit = gemeinsam, weg = fort, zurück = wieder zurück, weiter = fortsetzen.</p><div class=\"ar\">البادئات دي بتنفصل عن الفعل وبتروح آخر الجملة، ومعناها غالبًا بيفضل زي ما هو: mit = مع، weg = يمشي/بعيد، zurück = يرجع، weiter = يكمّل، zusammen = مع بعض، vorbei = يعدّي.</div><div class=\"exbox\">Möchtest du <b>mit</b>kommen? – Ja, ich komme gern <b>mit</b>.<br>Ich muss noch mal <b>zurück</b>gehen.<br>Wir haben lange <b>zusammen</b>gearbeitet.</div>"
        }
      ],
      "redemittel": [
        {
          "cat": "Hilfe anbieten",
          "catAr": "تعرض مساعدة",
          "items": [
            {
              "de": "Brauchen Sie noch Hilfe?",
              "ar": "حضرتك محتاج مساعدة تانية؟"
            },
            {
              "de": "Brauchst du noch Hilfe?",
              "ar": "محتاج مساعدة تانية؟"
            },
            {
              "de": "Kann ich noch etwas für Sie tun?",
              "ar": "أقدر أعمل لحضرتك أي حاجة تانية؟"
            },
            {
              "de": "Was kann ich für dich tun?",
              "ar": "أقدر أعملك إيه؟"
            },
            {
              "de": "Sie brauchen mich nur zu rufen, wenn ich Ihnen helfen soll.",
              "ar": "بس ناديني لو عايزني أساعد حضرتك."
            },
            {
              "de": "Du brauchst mich nur zu rufen, wenn ich dir helfen soll.",
              "ar": "بس ناديني لو عايزني أساعدك."
            },
            {
              "de": "Und sonst noch etwas?",
              "ar": "وأي حاجة تانية؟"
            }
          ]
        },
        {
          "cat": "Hilfe annehmen oder ablehnen",
          "catAr": "تقبل المساعدة أو ترفضها",
          "items": [
            {
              "de": "Ja, das wäre sehr nett.",
              "ar": "أيوه، يبقى كتر خيرك."
            },
            {
              "de": "Gern, vielen Dank.",
              "ar": "ياريت، شكرًا جدًا."
            },
            {
              "de": "Danke, das wäre toll.",
              "ar": "شكرًا، ده هيبقى حلو قوي."
            },
            {
              "de": "Nein, danke, das ist nicht nötig.",
              "ar": "لا شكرًا، مش لازم."
            },
            {
              "de": "Nein, danke, das ist nicht notwendig.",
              "ar": "لا شكرًا، مش ضروري."
            },
            {
              "de": "Danke, aber Sie brauchen mir nicht zu helfen.",
              "ar": "شكرًا، بس مش لازم حضرتك تساعدني."
            },
            {
              "de": "Danke, aber du brauchst mir nicht zu helfen.",
              "ar": "شكرًا، بس مش لازم تساعدني."
            }
          ]
        },
        {
          "cat": "Dringend raten und warnen",
          "catAr": "تنصح بشدة وتحذّر",
          "items": [
            {
              "de": "Sie sollten nicht so viel arbeiten.",
              "ar": "المفروض حضرتك متشتغلش كتير كده."
            },
            {
              "de": "Du solltest nicht so viel Kaffee trinken.",
              "ar": "المفروض متشربش قهوة كتير كده."
            },
            {
              "de": "Ich kann Ihnen nur dringend raten, …",
              "ar": "أنا بنصح حضرتك بشدة إنك …"
            },
            {
              "de": "Ich muss dich warnen: …",
              "ar": "لازم أحذّرك: …"
            },
            {
              "de": "Es ist dringend notwendig, dass Sie …",
              "ar": "ضروري جدًا إن حضرتك …"
            },
            {
              "de": "Das ist nicht gut für dich!",
              "ar": "ده مش كويس ليك!"
            },
            {
              "de": "Seien Sie vorsichtig! / Sei vorsichtig!",
              "ar": "خلي بالك!"
            }
          ]
        },
        {
          "cat": "Informationen aus Texten weitergeben",
          "catAr": "تنقل معلومات من نص",
          "items": [
            {
              "de": "Im Text geht es um …",
              "ar": "النص بيتكلم عن …"
            },
            {
              "de": "Die wichtigsten Themen sind …",
              "ar": "أهم المواضيع هي …"
            },
            {
              "de": "Außerdem steht im Text, dass …",
              "ar": "وكمان مكتوب في النص إن …"
            },
            {
              "de": "Besonders interessant ist der Punkt …",
              "ar": "أكتر نقطة مثيرة للاهتمام هي …"
            },
            {
              "de": "Die Autorin meint, dass …",
              "ar": "الكاتبة شايفة إن …"
            },
            {
              "de": "Einfach gesagt bedeutet das: …",
              "ar": "ببساطة كده معناها: …"
            }
          ]
        },
        {
          "cat": "Wenn man etwas vergessen hat",
          "catAr": "لما تنسى حاجة",
          "items": [
            {
              "de": "Das fällt mir gerade nicht ein.",
              "ar": "مش جاية في بالي دلوقتي."
            },
            {
              "de": "Keine Ahnung!",
              "ar": "معنديش فكرة!"
            },
            {
              "de": "Ich komme gerade nicht drauf.",
              "ar": "مش قادر أفتكرها دلوقتي."
            },
            {
              "de": "Da bin ich wirklich überfragt.",
              "ar": "والله ما أعرف، ده سؤال صعب عليّ."
            },
            {
              "de": "Mir liegt es auf der Zunge.",
              "ar": "على طرف لساني."
            },
            {
              "de": "Moment, gleich fällt es mir wieder ein.",
              "ar": "ثانية واحدة، هفتكرها حالًا."
            }
          ]
        },
        {
          "cat": "Über Musik und Gefühle sprechen",
          "catAr": "تتكلم عن المزيكا والمشاعر",
          "items": [
            {
              "de": "Wenn ich jogge, höre ich immer …",
              "ar": "لما بجري بسمع دايمًا …"
            },
            {
              "de": "Wenn ich gestresst bin, höre ich gern …",
              "ar": "لما بكون متوتر بحب أسمع …"
            },
            {
              "de": "Bei dieser Musik bekomme ich sofort gute Laune.",
              "ar": "المزيكا دي بتعدّل مزاجي على طول."
            },
            {
              "de": "Dieses Lied verbinde ich mit einer besonderen Erinnerung.",
              "ar": "الأغنية دي مرتبطة عندي بذكرى مميزة."
            },
            {
              "de": "Dieses Lied geht mir oft durch den Kopf.",
              "ar": "الأغنية دي بتفضل تلف في دماغي كتير."
            },
            {
              "de": "Langsame Musik wirkt auf mich beruhigend.",
              "ar": "المزيكا الهادية بتريّح أعصابي."
            },
            {
              "de": "… mag ich gar nicht, das nervt mich.",
              "ar": "… مش بحبها خالص، بتضايقني."
            }
          ]
        },
        {
          "cat": "Einen besonderen Ort vorstellen",
          "catAr": "تعرّف الناس على مكان مميز",
          "items": [
            {
              "de": "Ich möchte euch … vorstellen.",
              "ar": "عايز أعرّفكم على …"
            },
            {
              "de": "Dort kann man …",
              "ar": "هناك ممكن …"
            },
            {
              "de": "Der Ort ist besonders für … geeignet.",
              "ar": "المكان ده مناسب خصوصًا لـ …"
            },
            {
              "de": "Man sollte etwa … Stunden einplanen.",
              "ar": "المفروض تحسب حوالي … ساعات."
            },
            {
              "de": "Ich interessiere mich sehr für …, deshalb …",
              "ar": "أنا مهتم جدًا بـ …، علشان كده …"
            },
            {
              "de": "… klingt für mich am spannendsten, denn …",
              "ar": "… شكله أكتر حاجة مشوّقة بالنسبة لي، لأن …"
            }
          ]
        }
      ],
      "speaking": {
        "questions": [
          {
            "de": "Was machen Sie, um gesund und fit zu bleiben?",
            "ar": "بتعمل إيه علشان تفضل بصحة كويسة ولياقة عالية؟"
          },
          {
            "de": "Waren Sie schon einmal im Krankenhaus? Erzählen Sie.",
            "ar": "دخلت مستشفى قبل كده؟ احكي."
          },
          {
            "de": "Welche Musik hören Sie in welchen Situationen?",
            "ar": "بتسمع مزيكا إيه وفي أنهي مواقف؟"
          },
          {
            "de": "Welches Lied verbinden Sie mit einer besonderen Erinnerung?",
            "ar": "أنهي أغنية مرتبطة عندك بذكرى مميزة؟"
          },
          {
            "de": "Wie merken Sie sich neue Wörter am besten?",
            "ar": "إزاي بتحفظ الكلمات الجديدة أحسن حاجة؟"
          },
          {
            "de": "Welchen besonderen Ort in Ihrer Heimat können Sie empfehlen?",
            "ar": "أنهي مكان مميز في بلدك تقدر ترشّحه؟"
          }
        ],
        "model": "Um fit zu bleiben, gehe ich dreimal pro Woche joggen und trinke ausreichend Wasser. Letztes Jahr war ich nach einem kleinen Unfall zwei Tage im Krankenhaus, aber zum Glück brauchte ich nicht lange dort zu bleiben. Musik ist für mich sehr wichtig: Ich höre sowohl arabische Popmusik als auch Klassik. Wenn ich gestresst bin, höre ich ruhige Stücke, denn sie wirken auf mich beruhigend. Ein Lied von Amr Diab verbinde ich mit meiner Hochzeit, deshalb geht es mir oft durch den Kopf. Neue Wörter merke ich mir am besten, wenn ich sie laut ausspreche und in kleinen Geschichten benutze. Einen besonderen Ort kann ich auch empfehlen: die Oase Siwa. Dort ist es zwar sehr heiß, aber die Ruhe und der Sternenhimmel sind einfach traumhaft.",
        "modelAr": "علشان أفضل فِت، بجري تلات مرات في الأسبوع وبشرب مية كفاية. السنة اللي فاتت قعدت يومين في المستشفى بعد حادثة صغيرة، بس الحمد لله مكانش لازم أقعد هناك كتير. المزيكا مهمة جدًا بالنسبة لي: بسمع بوب عربي وكلاسيك الاتنين. لما بكون متوتر بسمع مقطوعات هادية، لأنها بتريّح أعصابي. فيه أغنية لعمرو دياب مرتبطة عندي بفرحي، علشان كده بتفضل تلف في دماغي كتير. الكلمات الجديدة بحفظها أحسن لما أنطقها بصوت عالي وأستخدمها في حكايات صغيرة. وكمان أقدر أرشّح مكان مميز: واحة سيوة. صحيح الجو هناك حر جدًا، بس الهدوء والسما المليانة نجوم حاجة تحفة."
      },
      "quiz": [
        {
          "q": "Du ___ mir nicht zu helfen, ich schaffe das allein.",
          "o": [
            "brauchst",
            "musst",
            "sollst"
          ],
          "a": 0,
          "fb": "nicht + brauchen + zu + Infinitiv = nicht müssen. „müssen“ und „sollen“ stehen ohne „zu“.",
          "fbAr": "علشان فيه zu قبل الفعل لازم تستخدم brauchen. musst و sollst مش بياخدوا zu.",
          "qAr": "إنت مش ___ تساعدني، أقدر أعمل ده لوحدي.",
          "oAr": [
            "تحتاج؛ صيغة brauchen",
            "لازم عليك؛ صيغة müssen",
            "المفروض عليك؛ صيغة sollen"
          ]
        },
        {
          "q": "Ich putze ___ jeden Abend die Zähne.",
          "o": [
            "mich",
            "mir",
            "mein"
          ],
          "a": 1,
          "fb": "Es gibt ein Akkusativobjekt (die Zähne), deshalb steht das Reflexivpronomen im Dativ: mir.",
          "fbAr": "فيه مفعول به أكوزاتيف (die Zähne)، يبقى ضمير الانعكاس داتيف: mir.",
          "qAr": "كل مساء بنظّف ___ أسناني.",
          "oAr": [
            "نفسي في الأكوزاتيف",
            "لنفسي في الداتيف",
            "بتاعي أو خاصتي"
          ]
        },
        {
          "q": "Wir hören ___ Rock als auch Jazz.",
          "o": [
            "weder",
            "entweder",
            "sowohl"
          ],
          "a": 2,
          "fb": "sowohl … als auch = das eine und das andere.",
          "fbAr": "sowohl … als auch معناها «ده وده».",
          "qAr": "إحنا بنسمع ___ روك وجاز معًا.",
          "oAr": [
            "لا؛ الجزء الأول من weder … noch",
            "يا إما",
            "كل من؛ الجزء الأول من سواء الأول والثاني"
          ]
        },
        {
          "q": "Sie isst ___ Fleisch noch Fisch.",
          "o": [
            "weder",
            "sowohl",
            "zwar"
          ],
          "a": 0,
          "fb": "weder … noch = das eine nicht und das andere auch nicht.",
          "fbAr": "weder … noch معناها «لا ده ولا ده».",
          "qAr": "هي لا بتاكل ___ لحمة ولا سمك.",
          "oAr": [
            "لا؛ الجزء الأول من weder … noch",
            "كل من؛ الجزء الأول من سواء الأول والثاني",
            "صحيح إن"
          ]
        },
        {
          "q": "Die Ärztin hat mir ein Schmerzmittel ___.",
          "o": [
            "geschrieben",
            "verschrieben",
            "beschrieben"
          ],
          "a": 1,
          "fb": "Ein Arzt verschreibt ein Medikament.",
          "fbAr": "الدكتور بيكتب الدوا في الروشتة: verschreiben.",
          "qAr": "الدكتورة ___ لي مسكّنًا.",
          "oAr": [
            "كتب؛ التصريف الثالث",
            "وصف دواءً؛ التصريف الثالث",
            "وصف شيئًا؛ التصريف الثالث"
          ]
        },
        {
          "q": "Bei einem Notfall wählen Sie bitte sofort den ___.",
          "o": [
            "Notausgang",
            "Alarmknopf",
            "Notruf"
          ],
          "a": 2,
          "fb": "Den Notruf (zum Beispiel 112) wählt man am Telefon.",
          "fbAr": "Notruf هو رقم الطوارئ اللي بتتصل بيه (زي ١١٢).",
          "qAr": "في حالة طوارئ اتصل فورًا بالـ___ .",
          "oAr": [
            "مخرج الطوارئ",
            "زر الإنذار",
            "رقم الطوارئ"
          ]
        },
        {
          "q": "Hast du ___ heute schon die Haare gekämmt?",
          "o": [
            "dich",
            "dir",
            "sich"
          ],
          "a": 1,
          "fb": "Mit Akkusativobjekt (die Haare) steht der Dativ: dir.",
          "fbAr": "علشان فيه die Haare، الضمير بيبقى داتيف: dir.",
          "qAr": "سرّحت ___ شعرك النهارده بالفعل؟",
          "oAr": [
            "نفسك في الأكوزاتيف",
            "لنفسك في الداتيف",
            "نفسه أو نفسها؛ ضمير انعكاسي"
          ]
        },
        {
          "q": "Er geht ___ gern auf Konzerte, aber oft bleibt er lieber zu Hause.",
          "o": [
            "zwar",
            "weder",
            "sowohl"
          ],
          "a": 0,
          "fb": "zwar …, aber = das eine mit Einschränkung.",
          "fbAr": "zwar … aber معناها «صحيح … بس».",
          "qAr": "صحيح إنه ___ بيحب الحفلات، لكن غالبًا بيفضّل يقعد في البيت.",
          "oAr": [
            "صحيح إن",
            "لا؛ الجزء الأول من weder … noch",
            "كل من؛ الجزء الأول من سواء الأول والثاني"
          ]
        }
      ],
      "badgesAr": [
        "التعبير عن عدم الاضطرار أو ما يلزم فقط",
        "الضمير الانعكاسي في الداتيف",
        "روابط من جزئين",
        "أفعال ببادئات: مع، بعيدًا، رجوعًا وغيرها",
        "الصحة والموسيقى"
      ]
    },
    "9": {
      "intro": "In diesem Kapitel geht es um Kunst im Alltag, um Galerien, Theater, Impro-Theater und Musik. Sie lernen, Informationen aus Zeitungstexten weiterzugeben, nachzufragen und zu sagen, wie Ihnen ein Kunstwerk gefällt. In der Grammatik üben Sie die Stellung von nicht, nicht … sondern … und die Adjektivdeklination ohne Artikel.",
      "introAr": "الفصل ده عن الفن في الحياة اليومية: المعارض، المسرح، المسرح الارتجالي والموسيقى. هتتعلم إزاي تنقل معلومات من مقالات الجرايد، وتسأل تاني لو مش فاهم، وتقول رأيك في عمل فني عجبك ولا لأ. وفي القواعد هتتمرن على مكان nicht في الجملة، وnicht … sondern …، وتصريف الصفة من غير أداة.",
      "badges": [
        "Stellung von nicht",
        "nicht … sondern …",
        "Adjektive ohne Artikel",
        "Kunst und Theater"
      ],
      "goals": [
        {
          "de": "Einen Blogbeitrag über Kunst im Alltag verstehen und kommentieren",
          "ar": "تفهم بوست في مدونة عن الفن في الحياة اليومية وتعلّق عليه"
        },
        {
          "de": "Informationen aus Zeitungstexten weitergeben und nachfragen",
          "ar": "تنقل معلومات من مقالات الجرايد وتسأل تاني عشان تتأكد"
        },
        {
          "de": "Etwas mit nicht und kein verneinen und mit sondern korrigieren",
          "ar": "تنفي حاجة بـ nicht وkein وتصحّحها بـ sondern"
        },
        {
          "de": "Über Bilder sprechen und sagen, wie einem etwas gefällt",
          "ar": "تتكلم عن صور ولوحات وتقول عجبتك قد إيه"
        },
        {
          "de": "Aussagen verstärken und relativieren",
          "ar": "تقوّي كلامك أو تخففه بكلمات زي total وeher"
        },
        {
          "de": "Ein Kursprogramm und Anzeigen verstehen",
          "ar": "تفهم برنامج كورسات وإعلانات صغيرة"
        },
        {
          "de": "Personen oder Dinge mit Adjektiven ohne Artikel genauer beschreiben und Anzeigen schreiben",
          "ar": "توصف ناس أو حاجات بصفات من غير أداة وتكتب إعلان"
        },
        {
          "de": "Ein Interview über Impro-Theater verstehen und selbst improvisieren",
          "ar": "تفهم حوار عن المسرح الارتجالي وترتجل بنفسك"
        },
        {
          "de": "Über Musik, Singen und Volkslieder sprechen",
          "ar": "تتكلم عن الموسيقى والغُنا والأغاني الشعبية"
        }
      ],
      "readings": [
        {
          "kind": "Blog",
          "title": "Kunst auf meinem Weg ins Büro",
          "text": "Seit drei Monaten wohne ich in Graz und fahre jeden Morgen mit dem Fahrrad zur Arbeit. Früher dachte ich, dass man Kunst nur in Museen und Galerien findet. Aber auf meinem Weg ins Büro habe ich gemerkt: Kunst ist überall, man muss nur genau hinsehen.<br><br>Mein erster Halt ist ein kleiner Platz mit einem alten Brunnen. In der Mitte steht eine Statue aus hellem Stein, eine Frau mit einem Krug. Der Brunnen ist über 300 Jahre alt, aber direkt dahinter steht ein modernes Kaufhaus aus Glas. Im Glas spiegelt sich die Statue – diesen Kontrast von alt und neu finde ich richtig spannend.<br><br>Dann fahre ich über eine Brücke. An der grauen Mauer unter der Brücke hat eine junge Künstlerin fantasievolle Graffiti gemalt: bunte Fische, eine riesige Biene und eine Frau mit einer verrückten Frisur. Ehrlich gesagt gefallen mir nicht alle Bilder, manche finde ich ziemlich chaotisch. Aber jede Woche entdecke ich etwas Neues, und das macht mir gute Laune.<br><br>Am meisten überrascht hat mich aber eine Installation vor dem Rathaus. Dort stehen seit Mai zwanzig bunte Stühle aus altem Holz. Man darf sich einfach hinsetzen, ohne etwas konsumieren zu müssen. Viele Leute nutzen das: Studierende lesen, ältere Menschen unterhalten sich, Kinder springen herum. Die Installation regt zum Nachdenken an: Wo kann man in einer Stadt sitzen, ohne Geld auszugeben?<br><br>Natürlich ist das keine Kunst für die Ewigkeit, sondern Kunst für den Alltag. Doch genau das spricht mich an. Und ihr? Welche Kunst seht ihr auf dem Weg zur Arbeit oder zur Uni? Schreibt es mir in den Kommentaren!",
          "ar": "منذ ثلاثة أشهر أسكن في مدينة غراتس وأذهب كل صباح إلى العمل بالدراجة. في الماضي كنت أظن أن الفن لا يوجد إلا في المتاحف والمعارض. لكنني لاحظت في طريقي إلى المكتب: الفن موجود في كل مكان، وكل ما عليك هو أن تنظر بدقة.<br><br>محطتي الأولى ساحة صغيرة فيها نافورة قديمة. في وسطها تمثال من حجر فاتح اللون لامرأة تحمل إبريقًا. عمر النافورة أكثر من 300 سنة، لكن خلفها مباشرةً يقف متجر كبير حديث من الزجاج. ينعكس التمثال في الزجاج، وهذا التناقض بين القديم والجديد أجده مثيرًا جدًا.<br><br>بعد ذلك أعبر جسرًا. على الجدار الرمادي تحت الجسر رسمت فنانة شابة رسومات جرافيتي مليئة بالخيال: أسماك ملونة ونحلة ضخمة وامرأة بتسريحة شعر مجنونة. بصراحة لا تعجبني كل الرسومات، فبعضها أجده فوضويًا إلى حد ما. لكنني أكتشف كل أسبوع شيئًا جديدًا، وهذا يحسّن مزاجي.<br><br>لكن أكثر ما فاجأني هو عمل فني تركيبي أمام مبنى البلدية. هناك منذ شهر مايو عشرون كرسيًا ملونًا من الخشب القديم. يمكنك ببساطة أن تجلس دون أن تضطر إلى شراء أو استهلاك أي شيء. كثير من الناس يستفيدون من ذلك: الطلاب يقرؤون، وكبار السن يتحدثون مع بعضهم، والأطفال يقفزون هنا وهناك. هذا العمل يدفع إلى التفكير: أين يمكن للإنسان في المدينة أن يجلس دون أن ينفق مالًا؟<br><br>بالطبع هذا ليس فنًا للخلود، بل فن للحياة اليومية. لكن هذا بالضبط ما يعجبني. وأنتم؟ ما الفن الذي ترونه في طريقكم إلى العمل أو إلى الجامعة؟ اكتبوا لي في التعليقات!",
          "questions": [
            [
              "Was dachte die Bloggerin früher über Kunst?",
              "Sie dachte, dass man Kunst nur in Museen und Galerien findet.",
              "المدوّنة كانت بتعتقد إيه عن الفن زمان؟",
              "كانت فاكرة إن الفن موجود فقط في المتاحف والمعارض."
            ],
            [
              "Was findet sie am Platz mit dem Brunnen spannend?",
              "Den Kontrast von alt und neu: Die alte Statue spiegelt sich im modernen Kaufhaus aus Glas.",
              "إيه اللي شايفاه مثيرًا في الساحة اللي فيها النافورة؟",
              "التباين بين القديم والجديد: التمثال القديم بينعكس في المتجر الزجاجي الحديث."
            ],
            [
              "Wie gefallen ihr die Graffiti unter der Brücke?",
              "Nicht alle gefallen ihr, manche findet sie chaotisch, aber sie entdeckt jede Woche etwas Neues.",
              "إيه رأيها في الغرافيتي تحت الجسر؟",
              "مش كله عاجبها، وبعضه شايفاه فوضويًا، لكنها بتكتشف حاجة جديدة كل أسبوع."
            ],
            [
              "Was ist das Besondere an der Installation vor dem Rathaus?",
              "Man kann auf bunten Stühlen sitzen, ohne etwas konsumieren zu müssen.",
              "إيه المميز في التركيب الفني أمام البلدية؟",
              "ممكن تقعد على كراسي ملونة من غير ما تضطر تشتري حاجة."
            ],
            [
              "Was für Kunst ist das für die Bloggerin?",
              "Keine Kunst für die Ewigkeit, sondern Kunst für den Alltag.",
              "بالنسبة للمدوّنة ده نوع فن إيه؟",
              "فن للحياة اليومية، مش فن للأبد."
            ]
          ],
          "titleAr": "الفن في طريقي إلى المكتب",
          "kindAr": "مدوّنة"
        },
        {
          "kind": "Zeitungsartikel",
          "title": "Kunst oder Müll? Ein teures Missverständnis",
          "text": "In der Städtischen Galerie in Neustadt ist letzte Woche ein ungewöhnliches Missgeschick passiert. Ein Mitarbeiter einer Putzfirma hat aus Versehen ein Kunstwerk in den Müll geworfen. Es handelte sich um eine Installation der jungen Künstlerin Lea Brandt: einen Berg aus alten Zeitungen, leeren Kaffeebechern und Plastiktüten. Der Titel des Werks: „Unser Konsum“.<br><br>Der Mann hatte nicht erkannt, dass der scheinbar chaotische Haufen ein Kunstwerk war. „Ich dachte, das ist Abfall von der Eröffnung am Abend vorher“, erklärte er später. Nach der Feier mit Büfett und Snacks war im Saal tatsächlich einiges durcheinander. Er räumte deshalb gründlich auf – und mit dem Müll verschwand auch die Installation. Der Wert des Kunstwerks: rund 15.000 Euro.<br><br>Die Leiterin der Galerie, Sabine Hoff, ist nicht wütend auf den Mitarbeiter, sondern auf die Putzfirma. „Die Firma hat ihr Personal nicht richtig informiert. Eigentlich darf niemand näher als einen Meter an die Kunstwerke herangehen“, sagt sie.<br><br>Und was sagt die Künstlerin? Lea Brandt reagierte überraschend gelassen. „Das ist nicht schlimm, sondern eigentlich ziemlich witzig“, meinte sie. „Mein Werk zeigt ja, wie viel Müll wir jeden Tag produzieren. Dass man es wirklich für Müll hält, beweist doch, dass die Idee funktioniert.“ Sie will die Installation in den nächsten Tagen neu bauen. Material dafür gibt es genug: Die Besucherinnen und Besucher der Galerie sollen ihre leeren Becher einfach mitbringen.<br><br>Es ist übrigens nicht das erste Mal, dass so etwas passiert. Auch in anderen Museen haben Reinigungskräfte schon Kunstwerke beschädigt, weil sie diese für schmutzig hielten.",
          "ar": "في المعرض الفني التابع لمدينة نويشتات وقع الأسبوع الماضي حادث غريب. فقد ألقى موظف في شركة تنظيف عملًا فنيًا في القمامة عن غير قصد. كان الأمر يتعلق بعمل تركيبي للفنانة الشابة ليا برانت: كومة من الجرائد القديمة وأكواب القهوة الفارغة والأكياس البلاستيكية. وكان عنوان العمل: «استهلاكنا».<br><br>لم يدرك الرجل أن هذه الكومة التي تبدو فوضوية في الظاهر كانت عملًا فنيًا. وقد أوضح فيما بعد: «ظننت أنها مخلفات من حفل الافتتاح في الليلة السابقة». وبالفعل كان هناك بعض الفوضى في القاعة بعد الحفل الذي قُدّم فيه بوفيه ووجبات خفيفة. لذلك نظّف المكان جيدًا، ومع القمامة اختفى أيضًا العمل الفني. وتبلغ قيمة العمل حوالي 15000 يورو.<br><br>مديرة المعرض سابينه هوف ليست غاضبة من الموظف، بل من شركة التنظيف. وتقول: «الشركة لم تُبلغ موظفيها بشكل صحيح. في الأصل لا يُسمح لأحد بأن يقترب من الأعمال الفنية أكثر من متر واحد».<br><br>وماذا تقول الفنانة؟ لقد كان رد فعل ليا برانت هادئًا على نحو مفاجئ، إذ قالت: «الأمر ليس سيئًا، بل هو في الحقيقة مضحك إلى حد ما. فعملي يُظهر كم القمامة التي ننتجها كل يوم. وأن يظن أحدهم فعلًا أنه قمامة، فهذا دليل على أن الفكرة ناجحة». وهي تنوي أن تبني العمل من جديد في الأيام القادمة. والمواد اللازمة لذلك متوفرة بكثرة: فعلى زوار المعرض أن يحضروا معهم أكوابهم الفارغة ببساطة.<br><br>وبالمناسبة، ليست هذه المرة الأولى التي يحدث فيها شيء كهذا. ففي متاحف أخرى أيضًا أتلف عمال النظافة أعمالًا فنية لأنهم ظنوا أنها متسخة.",
          "questions": [
            [
              "Was ist in der Galerie in Neustadt passiert?",
              "Ein Mitarbeiter einer Putzfirma hat aus Versehen ein Kunstwerk in den Müll geworfen.",
              "إيه اللي حصل في المعرض في نويشتات؟",
              "عامل من شركة تنظيف رمى عملًا فنيًا في القمامة بالغلط."
            ],
            [
              "Woraus bestand die Installation?",
              "Aus alten Zeitungen, leeren Kaffeebechern und Plastiktüten.",
              "التركيب الفني كان بيتكوّن من إيه؟",
              "صحف قديمة وأكواب قهوة فاضية وأكياس بلاستيك."
            ],
            [
              "Warum hat der Mann die Installation weggeworfen?",
              "Er dachte, dass es Abfall von der Eröffnung am Abend vorher ist.",
              "ليه الراجل رمى التركيب الفني؟",
              "افتكره مخلفات افتتاح الليلة السابقة."
            ],
            [
              "Auf wen ist die Leiterin der Galerie wütend?",
              "Nicht auf den Mitarbeiter, sondern auf die Putzfirma, weil sie ihr Personal nicht richtig informiert hat.",
              "مديرة المعرض غضبانة من مين؟",
              "مش من العامل، لكن من شركة التنظيف لأنها ما وضّحتش الأمر لموظفيها كويس."
            ],
            [
              "Wie reagiert die Künstlerin?",
              "Gelassen: Sie findet es witzig und will die Installation neu bauen.",
              "الفنانة ردّ فعلها إيه؟",
              "بهدوء: شايفة الموضوع مضحك وعايزة تعيد بناء التركيب الفني."
            ]
          ],
          "titleAr": "فن ولا قمامة؟ سوء فهم مكلف",
          "kindAr": "مقال في جريدة"
        },
        {
          "kind": "Interview",
          "title": "Auf unserer Bühne gibt es keinen Text",
          "text": "<b>Frau Keller, Sie spielen seit zehn Jahren Impro-Theater. Was ist das eigentlich?</b><br>Beim Impro-Theater gibt es kein festes Stück und keinen Text. Wir erfinden alles spontan auf der Bühne. Das Publikum ruft uns Begriffe zu, zum Beispiel einen Ort, einen Gegenstand oder einen Beruf, und daraus machen wir sofort eine Szene.<br><br><b>Wie haben Sie angefangen?</b><br>Im Studium musste ich einmal ein Referat halten und hatte meine Notizen zu Hause vergessen. Ich habe einfach improvisiert – und es hat mir Spaß gemacht! Kurz danach habe ich einen Impro-Kurs an der Volkshochschule besucht. Drei Jahre später habe ich mit Freunden unsere Gruppe „Spontan“ gegründet. Sie besteht heute aus sechs Personen.<br><br><b>Was ist anders als im normalen Theater?</b><br>Wir proben keine Szenen und lernen keine Rollen auswendig. Wir brauchen auch kein großes Bühnenbild und keine Kostüme. Meistens stehen nur ein paar Stühle auf der Bühne. Trotzdem üben wir viel: Wir trainieren, schnell zu reagieren und die Ideen der Partner anzunehmen.<br><br><b>Was ist die wichtigste Regel?</b><br>„Ja, genau – und …“. Wenn mein Partner sagt: „Da ist ja ein Dieb im Treppenhaus!“, dann sage ich nicht „Nein, das ist mein Nachbar“, sondern „Ja, genau – und er hat meine Briefmarken gestohlen!“. So wächst die Geschichte. Wer Nein sagt, stoppt die Szene.<br><br><b>Passieren auch Fehler?</b><br>Natürlich! Aber im Impro-Theater gibt es eigentlich keine Fehler. Ein Missverständnis zwischen zwei Spielern ist oft der lustigste Moment des Abends. Das Publikum ist dann besonders begeistert.<br><br><b>Kann jeder Impro-Theater lernen?</b><br>Ja, man braucht keine besondere Qualifikation, nur Mut und Fantasie. Ich empfehle allen, einen Kurs zu machen. Man lernt dort nicht nur Theater, sondern auch, im Alltag spontaner zu sein.",
          "ar": "<b>سيدة كيلر، أنتِ تمثلين في المسرح الارتجالي منذ عشر سنوات. ما هو هذا المسرح في الأساس؟</b><br>في المسرح الارتجالي لا توجد مسرحية ثابتة ولا نص. نحن نخترع كل شيء بشكل عفوي على خشبة المسرح. الجمهور ينادي علينا بكلمات، مثل مكان أو شيء أو مهنة، ومنها نصنع مشهدًا في الحال.<br><br><b>كيف بدأتِ؟</b><br>أثناء دراستي الجامعية كان عليّ مرة أن ألقي عرضًا شفهيًا، وكنت قد نسيت ملاحظاتي في البيت. فارتجلت ببساطة، واستمتعت بذلك! وبعدها بوقت قصير حضرت دورة في المسرح الارتجالي في الجامعة الشعبية. وبعد ثلاث سنوات أسست مع أصدقائي فرقتنا «عفوي». وهي تتكون اليوم من ستة أشخاص.<br><br><b>ما الفرق عن المسرح العادي؟</b><br>نحن لا نتمرن على مشاهد ولا نحفظ أدوارًا. ولا نحتاج كذلك إلى ديكور كبير ولا إلى أزياء مسرحية. في أغلب الأحيان لا يوجد على الخشبة إلا بضعة كراسٍ. ومع ذلك نتدرب كثيرًا: نتدرب على أن نتفاعل بسرعة وأن نقبل أفكار شركائنا.<br><br><b>ما أهم قاعدة؟</b><br>«نعم، بالضبط، و...». عندما يقول شريكي: «هناك لص على الدرج!»، لا أقول: «لا، هذا جاري»، بل أقول: «نعم، بالضبط، وقد سرق طوابع البريد الخاصة بي!». هكذا تكبر القصة. ومن يقول «لا» يوقف المشهد.<br><br><b>هل تحدث أخطاء أيضًا؟</b><br>بالطبع! لكن في المسرح الارتجالي لا توجد أخطاء في الحقيقة. فسوء الفهم بين ممثلَين يكون غالبًا أطرف لحظة في الأمسية. ويكون الجمهور حينها متحمسًا بشكل خاص.<br><br><b>هل يستطيع كل شخص أن يتعلم المسرح الارتجالي؟</b><br>نعم، لا يحتاج المرء إلى مؤهل خاص، بل إلى الشجاعة والخيال فقط. أنصح الجميع بأن يأخذوا دورة. فهناك لا يتعلم المرء المسرح فقط، بل يتعلم أيضًا أن يكون أكثر عفوية في حياته اليومية.",
          "questions": [
            [
              "Woher bekommen die Schauspieler beim Impro-Theater ihre Ideen?",
              "Vom Publikum, das ihnen Begriffe wie einen Ort, einen Gegenstand oder einen Beruf zuruft.",
              "ممثلون المسرح الارتجالي بيجيبوا أفكارهم منين؟",
              "من الجمهور اللي بينادي بكلمات، مثل مكان أو شيء أو مهنة."
            ],
            [
              "Wie ist Frau Keller zum Impro-Theater gekommen?",
              "Sie hatte bei einem Referat ihre Notizen vergessen und musste improvisieren; das hat ihr Spaß gemacht.",
              "السيدة كيلر دخلت المسرح الارتجالي إزاي؟",
              "نسيت ملاحظاتها وقت عرض شفهي واضطرت ترتجل، واستمتعت بده."
            ],
            [
              "Was braucht man beim Impro-Theater nicht?",
              "Keinen Text, kein großes Bühnenbild und keine Kostüme.",
              "إيه اللي مش محتاجينه في المسرح الارتجالي؟",
              "لا نص ولا ديكور مسرحي كبير ولا أزياء."
            ],
            [
              "Was bedeutet die Regel „Ja, genau – und …“?",
              "Man nimmt die Idee des Partners an und erzählt sie weiter, statt Nein zu sagen.",
              "قاعدة «أيوه بالظبط، و...» معناها إيه؟",
              "تقبل فكرة شريكك وتكمّلها بدل ما تقول لا."
            ],
            [
              "Was lernt man in einem Impro-Kurs außer Theater?",
              "Man lernt, im Alltag spontaner zu sein.",
              "بنتعلّم إيه في كورس الارتجال غير المسرح؟",
              "نتعلّم نكون تلقائيين أكتر في الحياة اليومية."
            ]
          ],
          "titleAr": "على مسرحنا مفيش نص",
          "kindAr": "مقابلة"
        },
        {
          "kind": "Forum",
          "title": "Singt ihr noch – oder nur unter der Dusche?",
          "text": "<b>Karim, 34:</b> Bei uns im Haus gibt es seit einem Jahr eine neue Tradition. Jeden ersten Freitag im Monat treffen sich die Nachbarn im Hof und musizieren zusammen. Frau Weber spielt Akkordeon, ein Student bringt seine Gitarre mit und wir anderen singen. Wir sind alle keine Meister, aber das ist nicht wichtig. Über die Musik habe ich in meiner Nachbarschaft viele Freundschaften geschlossen. Vorher kannte ich nur die Namen an den Briefkästen!<br><br><b>Julia, 27:</b> Im Schulchor habe ich früher gern gesungen, aber das ist schon lange her. Heute singe ich nur noch heimlich im Auto. Abends sehe ich mir manchmal Casting-Shows an und höre den Kandidaten zu. Manche sind wirklich talentiert, andere eher nicht – das finde ich ziemlich lustig. Vielleicht sollte ich mal wieder in einen Chor gehen …<br><br><b>Mehmet, 52:</b> Mein Neffe hat mich letztes Jahr in einen offenen Chor mitgenommen. Dort singt man vor allem alte Volkslieder. Am Anfang fand ich das total uncool – ich dachte, so etwas singen nur Großeltern. Aber ich habe schnell gemerkt: Diese Lieder sind zeitlos. Jeder kennt die Melodien, und viele Texte erzählen von Liebe, Heimat oder Freiheit. Mein Lieblingslied ist „Die Gedanken sind frei“. Es ist über 200 Jahre alt, aber der Text ist immer noch aktuell. Die Idee, dass niemand unsere Gedanken einsperren kann, bewegt mich jedes Mal. Seitdem habe ich kein einziges Treffen verpasst.<br><br><b>Lena, 41:</b> Ich bin dankbar für eure Beiträge! Ich leite einen kleinen Chor mit begrenzten Plätzen, aber für neue Sängerinnen und Sänger haben wir immer einen Stuhl frei. Man braucht keine Erfahrung, sondern nur Freude am Singen. Kommt doch einfach mal vorbei!",
          "ar": "<b>كريم، 34 سنة:</b> في عمارتنا توجد منذ سنة عادة جديدة. في أول يوم جمعة من كل شهر يلتقي الجيران في الفناء ويعزفون الموسيقى معًا. السيدة فيبر تعزف على الأكورديون، وطالب يحضر معه جيتاره، ونحن الباقين نغني. لا أحد منا أستاذ في الموسيقى، لكن هذا ليس مهمًا. من خلال الموسيقى كوّنت صداقات كثيرة في الحي الذي أسكن فيه. قبل ذلك لم أكن أعرف إلا الأسماء المكتوبة على صناديق البريد!<br><br><b>يوليا، 27 سنة:</b> في الماضي كنت أحب الغناء في كورال المدرسة، لكن هذا كان منذ زمن طويل. اليوم لا أغني إلا سرًا في السيارة. في المساء أشاهد أحيانًا برامج اكتشاف المواهب وأستمع إلى المتسابقين. بعضهم موهوب فعلًا، والبعض الآخر ليس كذلك، وهذا أجده مضحكًا إلى حد ما. ربما يجب أن أنضم إلى كورال مرة أخرى...<br><br><b>محمد، 52 سنة:</b> أخذني ابن أختي في العام الماضي معه إلى كورال مفتوح للجميع. هناك يغنون الأغاني الشعبية القديمة بالأساس. في البداية وجدت ذلك غير عصري على الإطلاق، وظننت أن الأجداد فقط يغنون مثل هذه الأغاني. لكنني لاحظت بسرعة: هذه الأغاني خالدة. الكل يعرف ألحانها، وكثير من كلماتها يحكي عن الحب والوطن والحرية. أغنيتي المفضلة هي «الأفكار حرة». عمرها أكثر من 200 سنة، لكن كلماتها ما زالت معاصرة. فكرة أن أحدًا لا يستطيع أن يسجن أفكارنا تؤثر فيّ في كل مرة. ومنذ ذلك الحين لم يفُتني أي لقاء.<br><br><b>لينا، 41 سنة:</b> أنا ممتنة لمشاركاتكم! أنا أدير كورالًا صغيرًا عدد أماكنه محدود، لكن عندنا دائمًا كرسي فارغ للمغنين والمغنيات الجدد. لا تحتاجون إلى خبرة، بل إلى حب الغناء فقط. تعالوا ببساطة لزيارتنا!",
          "questions": [
            [
              "Was machen Karims Nachbarn jeden ersten Freitag im Monat?",
              "Sie treffen sich im Hof und musizieren zusammen.",
              "جيران كريم بيعملوا إيه أول جمعة من كل شهر؟",
              "بيتقابلوا في الفناء وبيعزفوا موسيقى مع بعض."
            ],
            [
              "Wo singt Julia heute?",
              "Nur noch heimlich im Auto.",
              "يوليا بتغنّي فين دلوقتي؟",
              "بس في السر في العربية."
            ],
            [
              "Wie fand Mehmet die Volkslieder am Anfang und wie findet er sie heute?",
              "Am Anfang fand er sie total uncool, heute findet er sie zeitlos.",
              "محمد كان شايف الأغاني الشعبية إزاي في الأول، ودلوقتي شايفها إزاي؟",
              "في الأول كان شايفها قديمة ومش جذابة، ودلوقتي شايفها صالحة لكل زمن."
            ],
            [
              "Warum bewegt Mehmet das Lied „Die Gedanken sind frei“?",
              "Wegen der Idee, dass niemand unsere Gedanken einsperren kann.",
              "ليه أغنية «الأفكار حرة» بتأثر في محمد؟",
              "بسبب فكرة إن محدش يقدر يحبس أفكارنا."
            ],
            [
              "Was braucht man für Lenas Chor?",
              "Keine Erfahrung, sondern nur Freude am Singen.",
              "كورال لينا محتاج إيه؟",
              "مش خبرة، لكن الاستمتاع بالغناء فقط."
            ]
          ],
          "titleAr": "لسه بتغنّوا، ولا تحت الدش بس؟",
          "kindAr": "منتدى"
        }
      ],
      "grammar": [
        {
          "t": "Stellung von nicht im Satz",
          "tAr": "مكان nicht في الجملة",
          "body": "<p>Wenn <b>nicht</b> den ganzen Satz verneint, steht es <b>möglichst am Ende</b>. Aber es steht <b>vor</b> dem zweiten Verbteil, vor Adjektiven/Adverbien, vor Präpositionalergänzungen und vor Ortsangaben. Verneint <b>nicht</b> nur ein Wort, steht es <b>direkt vor diesem Wort</b>.</p><div class=\"ar\">لو nicht بتنفي الجملة كلها، بتروح على قد ما تقدر في الآخر. بس بتيجي قبل الجزء التاني من الفعل، وقبل الصفة، وقبل حرف الجر، وقبل المكان. ولو بتنفي كلمة واحدة بس، بتحطها قبل الكلمة دي على طول.</div><div class=\"exbox\">Das Bild gefällt mir <b>nicht</b>.<br>Wir konnten <b>nicht</b> kommen.<br>Sie interessiert sich <b>nicht</b> für Kunst.<br>Ich war <b>nicht</b> heute im Museum.</div>"
        },
        {
          "t": "nicht … sondern … / kein … sondern …",
          "tAr": "مش … لكن … (التصحيح بـ sondern)",
          "body": "<p>Wenn man einen <b>verneinten</b> Satz oder Satzteil korrigiert, setzt man den Satz mit <b>sondern</b> fort, nicht mit <i>aber</i>. Vor <b>sondern</b> steht immer ein Komma.</p><div class=\"ar\">لما تنفي حاجة بـ nicht أو kein وعايز تقول الصح، بتكمّل بـ sondern (مش aber). وقبل sondern لازم فاصلة.</div><div class=\"exbox\">Ich war <b>nicht</b> heute im Museum, <b>sondern</b> gestern.<br>Das Bild ist <b>nicht</b> teuer, <b>sondern</b> günstig.<br>Das ist <b>kein</b> Original, <b>sondern</b> eine Kopie.</div>"
        },
        {
          "t": "Adjektive ohne Artikel",
          "tAr": "تصريف الصفة من غير أداة",
          "body": "<p>Steht <b>kein Artikel</b> vor dem Adjektiv, bekommt das Adjektiv die <b>Endung des bestimmten Artikels</b>: der → gro<b>ßer</b> Spaß, das → klein<b>es</b> Projekt, dem → mit nett<b>em</b> Team. <b>Ausnahme:</b> Genitiv maskulin und neutrum: -<b>en</b> (wegen schlecht<b>en</b> Wetters).</p><div class=\"ar\">لو مفيش أداة قبل الصفة، الصفة بتاخد نهاية أداة التعريف (der → -er، das → -es، dem → -em …). الاستثناء: الجينتيف المذكر والمحايد بياخد -en. ده بيتستخدم كتير في الإعلانات.</div><div class=\"exbox\">Kleine Gruppe sucht nett<b>e</b> Person.<br>Suche alt<b>en</b> Fernseher aus braun<b>em</b> Holz.<br>Groß<b>er</b> Spaß und lang<b>e</b> Partys sind inklusive.</div>"
        },
        {
          "t": "Adjektive nach bestimmtem und unbestimmtem Artikel",
          "tAr": "تصريف الصفة بعد أداة التعريف وأداة النكرة",
          "body": "<p>Nach dem <b>bestimmten Artikel</b> (auch <i>dieser, jener</i>) hat das Adjektiv nur die Endungen <b>-e</b> und <b>-en</b>. Nach dem <b>unbestimmten Artikel</b> (auch <i>kein, mein</i>) zeigt das Adjektiv im Nominativ maskulin <b>-er</b> und im Nominativ/Akkusativ neutrum <b>-es</b>.</p><div class=\"ar\">بعد der/die/das الصفة بتاخد -e أو -en بس. بعد ein/kein/mein الصفة لازم توضّح الجنس لما الأداة ما توضحوش: ein neu<b>er</b> Film، ein klein<b>es</b> Theater.</div><div class=\"exbox\">Ich warte auf die groß<b>e</b> Eröffnungsfeier.<br>Ein jung<b>er</b> Mann singt Lieder.<br>Auf der Bühne steht ein alt<b>es</b> Sofa.</div>"
        }
      ],
      "redemittel": [
        {
          "cat": "Nachfragen",
          "catAr": "تسأل تاني عشان تتأكد",
          "items": [
            {
              "de": "Habe ich richtig verstanden, dass …?",
              "ar": "أنا فهمت صح إن …؟"
            },
            {
              "de": "Könntest du mir noch einmal erklären, was / wer …?",
              "ar": "ممكن تشرحلي تاني إيه / مين …؟"
            },
            {
              "de": "Mich würde genauer interessieren, warum / ob …",
              "ar": "حابب أعرف بالتفصيل ليه / هل …"
            },
            {
              "de": "Darf ich noch mal nachfragen, wie viel / ob …?",
              "ar": "ممكن أسأل تاني كام / هل …؟"
            },
            {
              "de": "Was meinst du genau mit …?",
              "ar": "تقصد إيه بالظبط بـ …؟"
            },
            {
              "de": "Wie war das noch mal mit …?",
              "ar": "إيه الحكاية تاني بخصوص …؟"
            }
          ]
        },
        {
          "cat": "Aussagen verstärken",
          "catAr": "تقوّي كلامك (إعجاب أو رفض قوي)",
          "items": [
            {
              "de": "Das Bild gefällt mir total gut / schlecht.",
              "ar": "الصورة عاجباني جدًا / مش عاجباني خالص."
            },
            {
              "de": "Ich finde es wirklich super / schrecklich.",
              "ar": "أنا شايفها بجد تحفة / وحشة جدًا."
            },
            {
              "de": "Das finde ich besonders schön / hässlich.",
              "ar": "دي بالذات شايفها حلوة / وحشة جدًا."
            },
            {
              "de": "Die Ausstellung war richtig toll / doof.",
              "ar": "المعرض كان جامد فعلًا / سخيف فعلًا."
            },
            {
              "de": "Ich bin total begeistert.",
              "ar": "أنا منبهر خالص."
            },
            {
              "de": "Das ist wirklich nichts für mich.",
              "ar": "ده بجد مش بتاعي خالص."
            }
          ]
        },
        {
          "cat": "Aussagen relativieren",
          "catAr": "تخفّف كلامك شوية",
          "items": [
            {
              "de": "Die Ausstellung war ziemlich gut / schlecht.",
              "ar": "المعرض كان كويس / وحش لحد ما."
            },
            {
              "de": "Ich finde das eher witzig / langweilig.",
              "ar": "أنا شايفه مضحك / ممل أكتر منه حاجة تانية."
            },
            {
              "de": "Mich spricht es eigentlich nicht an.",
              "ar": "هو في الحقيقة مش بيشدني."
            },
            {
              "de": "Ich bin relativ begeistert / enttäuscht.",
              "ar": "أنا متحمس / مخذول نسبيًا."
            },
            {
              "de": "Ich finde es ziemlich durcheinander.",
              "ar": "شايفه ملخبط شوية."
            },
            {
              "de": "Das gefällt mir relativ gut.",
              "ar": "ده عاجبني لحد ما."
            }
          ]
        },
        {
          "cat": "Ein Bild beschreiben",
          "catAr": "توصف صورة أو لوحة",
          "items": [
            {
              "de": "Im Vordergrund sieht man …",
              "ar": "في مقدمة الصورة بنشوف …"
            },
            {
              "de": "Im Hintergrund ist / sind …",
              "ar": "في الخلفية فيه …"
            },
            {
              "de": "In der Mitte des Bildes steht …",
              "ar": "في نص الصورة واقف …"
            },
            {
              "de": "Links / Rechts / Oben / Unten sieht man …",
              "ar": "على الشمال / اليمين / فوق / تحت بنشوف …"
            },
            {
              "de": "Die Farben sind hell / dunkel / bunt.",
              "ar": "الألوان فاتحة / غامقة / ملونة."
            },
            {
              "de": "Die Stimmung auf dem Bild ist romantisch / traurig / fröhlich.",
              "ar": "الجو في الصورة رومانسي / حزين / مبهج."
            },
            {
              "de": "Das Bild erinnert mich an …",
              "ar": "الصورة بتفكرني بـ …"
            }
          ]
        },
        {
          "cat": "Über einen Film oder ein Theaterstück schreiben",
          "catAr": "تكتب عن فيلم أو مسرحية",
          "items": [
            {
              "de": "Der Film / Das Stück heißt …",
              "ar": "الفيلم / المسرحية اسمها …"
            },
            {
              "de": "In dem Film / Stück geht es um …",
              "ar": "الفيلم / المسرحية بتتكلم عن …"
            },
            {
              "de": "Das Stück handelt von …",
              "ar": "المسرحية بتدور حوالين …"
            },
            {
              "de": "Am Anfang … Dann … Am Ende …",
              "ar": "في الأول … بعد كده … وفي الآخر …"
            },
            {
              "de": "Das Stück ist sehr spannend / lustig, weil …",
              "ar": "المسرحية مشوّقة / مضحكة جدًا عشان …"
            },
            {
              "de": "Ich kann den Film (nicht) empfehlen, denn …",
              "ar": "أنصح / مش بنصح بالفيلم، عشان …"
            }
          ]
        },
        {
          "cat": "Gedanken – feste Ausdrücke",
          "catAr": "تعبيرات ثابتة بكلمة Gedanken",
          "items": [
            {
              "de": "Mach dir mal keine Gedanken.",
              "ar": "ما تشيلش هم / ما تقلقش."
            },
            {
              "de": "Darüber muss ich mir erst noch Gedanken machen.",
              "ar": "لازم أفكر في الموضوع ده الأول."
            },
            {
              "de": "Ich war total in Gedanken.",
              "ar": "كنت سرحان خالص."
            },
            {
              "de": "Hoffentlich kommt er bald auf andere Gedanken.",
              "ar": "يا رب ينشغل بحاجة تانية قريب وينسى."
            },
            {
              "de": "Die Gedanken sind frei.",
              "ar": "الأفكار حرة، محدش يقدر يتحكم فيها."
            }
          ]
        }
      ],
      "speaking": {
        "questions": [
          {
            "de": "Welche Kunst sehen Sie auf Ihrem Weg zur Arbeit oder zum Kurs?",
            "ar": "إيه الفن اللي بتشوفه في طريقك للشغل أو للكورس؟"
          },
          {
            "de": "Welches Kunstwerk gefällt Ihnen besonders gut und warum?",
            "ar": "إيه العمل الفني اللي عاجبك جدًا وليه؟"
          },
          {
            "de": "Gehen Sie gern ins Theater oder ins Museum? Warum (nicht)?",
            "ar": "بتحب تروح المسرح أو المتحف؟ ليه (لأ)؟"
          },
          {
            "de": "In welchen Situationen müssen Sie improvisieren?",
            "ar": "في أنهي مواقف بتضطر ترتجل؟"
          },
          {
            "de": "Singen Sie gern? Welche Volkslieder kennen Sie aus Ihrem Land?",
            "ar": "بتحب تغني؟ تعرف أنهي أغاني شعبية من بلدك؟"
          }
        ],
        "model": "Auf meinem Weg zur Arbeit komme ich an einer alten Mauer mit bunten Graffiti vorbei. Ehrlich gesagt gefallen mir nicht alle Bilder, aber eins finde ich wirklich super: eine Frau mit einer riesigen Rose. Ins Museum gehe ich nicht oft, sondern lieber ins Theater, weil mich Schauspieler auf der Bühne mehr ansprechen. Improvisieren muss ich vor allem beim Kochen, denn mir fehlen oft Zutaten und ich ersetze sie durch andere. Ich singe nicht besonders gut, aber in meiner Familie singen wir auf Hochzeiten immer alte Volkslieder. Die Melodien sind zeitlos und jeder kennt sie. Das bewegt mich jedes Mal.",
        "modelAr": "في طريقي للشغل بعدّي على سور قديم عليه رسومات جرافيتي ملونة. بصراحة مش كل الرسومات عاجباني، بس فيه واحدة شايفها بجد تحفة: ست ماسكة وردة كبيرة جدًا. أنا مش بروح المتحف كتير، لكن بفضّل أروح المسرح، عشان الممثلين على الخشبة بيشدّوني أكتر. بضطر أرتجل خصوصًا وأنا بطبخ، عشان ساعات كتير بتنقصني مكونات فبحط بدالها حاجات تانية. أنا صوتي مش حلو قوي، بس في عيلتي دايمًا بنغني أغاني شعبية قديمة في الأفراح. الألحان دي ما بتقدمش وكل الناس عارفاها، وده بيأثر فيّا كل مرة."
      },
      "quiz": [
        {
          "q": "Wo steht nicht richtig? „Wir konnten gestern ___.“",
          "o": [
            "nicht kommen",
            "kommen nicht",
            "nicht gestern kommen"
          ],
          "a": 0,
          "fb": "nicht steht vor dem zweiten Verbteil: nicht kommen.",
          "fbAr": "nicht بتيجي قبل الجزء التاني من الفعل (المصدر في الآخر).",
          "qAr": "فين المكان الصحيح لـ nicht في الجملة: «إحنا ما قدرناش امبارح ___»؟",
          "oAr": [
            "عدم المجيء؛ بترتيبين للكلمات",
            "عدم المجيء؛ بترتيبين للكلمات",
            "عدم المجيء امبارح"
          ]
        },
        {
          "q": "Welcher Satz ist richtig?",
          "o": [
            "Sie interessiert sich für Kunst nicht.",
            "Sie interessiert sich nicht für Kunst.",
            "Sie nicht interessiert sich für Kunst."
          ],
          "a": 1,
          "fb": "nicht steht vor der Präpositionalergänzung: nicht für Kunst.",
          "fbAr": "nicht بتيجي قبل حرف الجر: nicht für Kunst.",
          "qAr": "أي جملة ألمانية صحيحة؟",
          "oAr": [
            "هي مش مهتمة بالفن؛ بصيغ مختلفة لترتيب النفي",
            "هي مش مهتمة بالفن؛ بصيغ مختلفة لترتيب النفي",
            "هي مش مهتمة بالفن؛ بصيغ مختلفة لترتيب النفي"
          ]
        },
        {
          "q": "Das Bild ist nicht teuer, ___ günstig.",
          "o": [
            "aber",
            "oder",
            "sondern"
          ],
          "a": 2,
          "fb": "Nach einer Verneinung korrigiert man mit sondern.",
          "fbAr": "بعد النفي وعايز تقول الصح بتستخدم sondern مش aber.",
          "qAr": "اللوحة مش غالية، ___ رخيصة.",
          "oAr": [
            "لكن",
            "أو",
            "بل"
          ]
        },
        {
          "q": "Suche ___ Fernseher aus braunem Holz.",
          "o": [
            "alter",
            "alten",
            "altes"
          ],
          "a": 1,
          "fb": "Akkusativ maskulin ohne Artikel: den → alten Fernseher.",
          "fbAr": "مفعول به مذكر من غير أداة: زي den، يعني alten.",
          "qAr": "مطلوب تلفزيون ___ من خشب بني.",
          "oAr": [
            "قديم؛ بصيغ مختلفة للصفة",
            "قديم؛ بصيغ مختلفة للصفة",
            "قديم؛ بصيغ مختلفة للصفة"
          ]
        },
        {
          "q": "Kleine Gruppe braucht Hilfe von ___ Person.",
          "o": [
            "netter",
            "nette",
            "nettem"
          ],
          "a": 0,
          "fb": "von + Dativ feminin: der → netter Person.",
          "fbAr": "von بتاخد داتيف، والمؤنث في الداتيف der، فالصفة netter.",
          "qAr": "مجموعة صغيرة محتاجة مساعدة من شخص ___ .",
          "oAr": [
            "لطيف؛ بصيغ مختلفة للصفة",
            "لطيف؛ بصيغ مختلفة للصفة",
            "لطيف؛ بصيغ مختلفة للصفة"
          ]
        },
        {
          "q": "Wegen ___ Wetters fällt das Konzert im Park aus.",
          "o": [
            "schlechtes",
            "schlechten",
            "schlechter"
          ],
          "a": 1,
          "fb": "Genitiv maskulin/neutrum ohne Artikel: -en.",
          "fbAr": "الجينتيف المذكر والمحايد من غير أداة استثناء: -en.",
          "qAr": "بسبب الطقس الـ___، الحفلة في الحديقة اتلغت.",
          "oAr": [
            "سيئ؛ بصيغ مختلفة للصفة",
            "سيئ؛ بصيغ مختلفة للصفة",
            "سيئ؛ بصيغ مختلفة للصفة"
          ]
        },
        {
          "q": "Welches Wort passt? „Für die Rolle muss sie sich stark ___.“",
          "o": [
            "schminken",
            "musizieren",
            "konsumieren"
          ],
          "a": 0,
          "fb": "sich schminken = Farbe ins Gesicht machen.",
          "fbAr": "sich schminken يعني تحط مكياج.",
          "qAr": "اختار الكلمة المناسبة: «علشان الدور لازم ___ جدًا».",
          "oAr": [
            "يحط مكياج",
            "يعزف موسيقى",
            "يستهلك أو يشتري للاستهلاك"
          ]
        },
        {
          "q": "Was bedeutet „Das Bild spricht mich nicht an“?",
          "o": [
            "Das Bild ist zu laut.",
            "Ich habe das Bild nicht gesehen.",
            "Das Bild gefällt mir nicht."
          ],
          "a": 2,
          "fb": "ansprechen = gefallen, ein Gefühl auslösen.",
          "fbAr": "ansprechen هنا معناها «يعجبني / يشدّني»، مش «يكلمني».",
          "qAr": "«اللوحة دي مش بتجذبني» معناها إيه؟",
          "oAr": [
            "صوت اللوحة عالي زيادة.",
            "أنا ما شفتش اللوحة.",
            "اللوحة مش عاجباني."
          ]
        }
      ],
      "badgesAr": [
        "مكان nicht في الجملة",
        "ليس... بل...",
        "صفات من غير أداة",
        "الفن والمسرح"
      ]
    },
    "10": {
      "intro": "In diesem Kapitel geht es um Werte in der Gesellschaft, um ehrenamtliches Engagement, um Ämter und Institutionen in einer Stadt und um die Europäische Union. Sie lernen, Vorgänge mit dem Passiv zu beschreiben – im Präsens, in der Vergangenheit und mit Modalverben. Außerdem üben Sie, eine Auswahl zu begründen und eine kurze Präsentation zu halten.",
      "introAr": "الوحدة دي بتتكلم عن القيم في المجتمع، والشغل التطوعي، والمصالح الحكومية والمؤسسات في المدينة، والاتحاد الأوروبي. هتتعلم توصف العمليات بالمبني للمجهول (Passiv) في المضارع والماضي ومع الأفعال المساعدة. وكمان هتتدرب إزاي تختار حاجة وتبرر اختيارك، وإزاي تقدّم عرض تقديمي قصير.",
      "badges": [
        "Passiv Präsens",
        "Passiv Präteritum und Perfekt",
        "Passiv mit Modalverb",
        "Adjektive mit -bar und -los",
        "Engagement und Gesellschaft"
      ],
      "goals": [
        {
          "de": "über Werte in der Gesellschaft sprechen",
          "ar": "تتكلم عن القيم المهمة في المجتمع"
        },
        {
          "de": "Texte über soziales Engagement verstehen und darüber sprechen",
          "ar": "تفهم نصوص عن الشغل التطوعي وتتكلم عنه"
        },
        {
          "de": "eine Auswahl treffen und begründen",
          "ar": "تختار حاجة وتقول ليه اخترتها"
        },
        {
          "de": "Vorgänge mit dem Passiv beschreiben (Präsens, Präteritum, Perfekt)",
          "ar": "توصف إيه اللي بيحصل بالمبني للمجهول في المضارع والماضي"
        },
        {
          "de": "sagen, was gemacht werden muss oder kann (Passiv mit Modalverb)",
          "ar": "تقول إيه اللي لازم أو ممكن يتعمل بالـ Passiv مع müssen و können"
        },
        {
          "de": "über Institutionen und Projekte in einer Stadt sprechen",
          "ar": "تتكلم عن المؤسسات والمشاريع في المدينة"
        },
        {
          "de": "Informationen über die EU verstehen",
          "ar": "تفهم معلومات عن الاتحاد الأوروبي"
        },
        {
          "de": "eine kurze Präsentation halten und Rückmeldung geben",
          "ar": "تقدّم عرض قصير وتدي رأيك في عرض غيرك"
        },
        {
          "de": "Adjektive mit -bar und -los bilden und verstehen",
          "ar": "تكوّن وتفهم الصفات اللي بتخلص بـ -bar و -los"
        }
      ],
      "readings": [
        {
          "kind": "Blog",
          "title": "Mein Samstag bei der Tafel",
          "text": "Seit einem Jahr arbeite ich jeden Samstag ehrenamtlich bei der Tafel in Hannover. Viele Freunde fragen mich: „Warum machst du das? Du bekommst doch kein Geld dafür!“ Hier erzähle ich euch, wie so ein Tag aussieht und warum mir diese Arbeit so wichtig ist.<br><br>Um sieben Uhr beginnt unser Tag. Zuerst wird der Tagesablauf geplant: Wer fährt den Lieferwagen, wer sortiert, wer steht an der Ausgabe? Danach werden die Lebensmittel bei Supermärkten und Bäckereien abgeholt. Das sind Waren, die nicht mehr verkauft werden können, aber noch gut sind: Brot vom Vortag, Joghurt, Obst und Gemüse. In Deutschland werden jedes Jahr Millionen Tonnen Lebensmittel weggeworfen – für mich ist das unglaublich.<br><br>Im Lager wird dann alles kontrolliert und sortiert. Was wirklich schlecht ist, wird entsorgt. Ab zwölf Uhr werden die Lebensmittel an bedürftige Menschen verteilt. Zu uns kommen Rentnerinnen, Studenten, Familien mit Kindern und auch Geflüchtete. Jeder wird freundlich begrüßt, und niemand muss sich schämen. Respekt ist bei uns die wichtigste Regel.<br><br>Am Nachmittag ist es ruhiger. Dann werden Anfragen beantwortet, und neue Helferinnen und Helfer werden eingearbeitet. Die Arbeit ist manchmal körperlich anstrengend, denn die Kisten sind schwer. Aber die Stimmung im Team ist toll, und wir haben viel Humor.<br><br>Warum ich das mache? Als ich vor fünf Jahren aus Ägypten nach Deutschland kam, hatte ich wenig Geld und kannte niemanden. Damals haben mir fremde Menschen geholfen, ohne etwas zu erwarten. Diese Hilfsbereitschaft möchte ich heute zurückgeben. Außerdem habe ich bei der Tafel viele nette Leute kennengelernt, und mein Deutsch ist viel besser geworden.<br><br>Wenn ihr auch mitmachen wollt: Neue Helfer werden immer gesucht! Schreibt mir einfach eine Nachricht. – Karim",
          "ar": "منذ عام أعمل كل يوم سبت متطوعًا في «التافل» (بنك الطعام) في هانوفر. كثير من أصدقائي يسألونني: «لماذا تفعل ذلك؟ أنت لا تحصل على أي مال مقابله!» هنا أحكي لكم كيف يبدو يوم كهذا ولماذا هذا العمل مهم جدًا بالنسبة لي.<br><br>يبدأ يومنا في الساعة السابعة. أولًا يتم تخطيط برنامج اليوم: من يقود سيارة التوصيل، ومن يفرز، ومن يقف عند مكان التوزيع؟ بعد ذلك يتم جلب المواد الغذائية من السوبرماركت والمخابز. هذه بضائع لم يعد من الممكن بيعها، لكنها ما زالت جيدة: خبز من اليوم السابق، زبادي، فواكه وخضراوات. في ألمانيا تُرمى كل عام ملايين الأطنان من المواد الغذائية – وهذا بالنسبة لي أمر لا يُصدَّق.<br><br>في المخزن يتم بعد ذلك فحص كل شيء وفرزه. وما هو فاسد فعلًا يتم التخلص منه. ابتداءً من الساعة الثانية عشرة تُوزَّع المواد الغذائية على الأشخاص المحتاجين. يأتي إلينا متقاعدات وطلاب وعائلات مع أطفالها وأيضًا لاجئون. كل شخص يُستقبل بلطف، ولا أحد يحتاج أن يخجل. الاحترام هو أهم قاعدة عندنا.<br><br>في فترة بعد الظهر يكون الجو أهدأ. عندها يتم الرد على الاستفسارات، ويتم تدريب المتطوعات والمتطوعين الجدد. العمل أحيانًا مرهق جسديًا، لأن الصناديق ثقيلة. لكن الجو في الفريق رائع، ولدينا الكثير من روح الدعابة.<br><br>لماذا أفعل هذا؟ عندما جئت قبل خمس سنوات من مصر إلى ألمانيا، كان معي القليل من المال ولم أكن أعرف أحدًا. في ذلك الوقت ساعدني أشخاص غرباء دون أن ينتظروا شيئًا في المقابل. هذا الاستعداد للمساعدة أريد أن أردّه اليوم. بالإضافة إلى ذلك تعرفت في التافل على أشخاص لطفاء كثيرين، وتحسّنت لغتي الألمانية كثيرًا.<br><br>إذا أردتم أنتم أيضًا المشاركة: نحن نبحث دائمًا عن متطوعين جدد! فقط أرسلوا لي رسالة. – كريم",
          "questions": [
            [
              "Was wird morgens als Erstes gemacht?",
              "Zuerst wird der Tagesablauf geplant.",
              "إيه أول حاجة بتتعمل في الصباح؟",
              "أولًا بيتخطط برنامج اليوم."
            ],
            [
              "Woher bekommt die Tafel die Lebensmittel?",
              "Sie werden bei Supermärkten und Bäckereien abgeholt.",
              "بنك الطعام بيجيب الأطعمة منين؟",
              "بيجمعوها من السوبرماركتات والمخابز."
            ],
            [
              "Was passiert mit Lebensmitteln, die wirklich schlecht sind?",
              "Sie werden entsorgt.",
              "إيه اللي بيحصل للأطعمة الفاسدة فعلًا؟",
              "بيتم التخلص منها."
            ],
            [
              "Wer kommt zur Tafel, um Lebensmittel abzuholen?",
              "Rentnerinnen, Studenten, Familien mit Kindern und Geflüchtete, also bedürftige Menschen.",
              "مين بييجي بنك الطعام علشان ياخد أكل؟",
              "متقاعدات وطلاب وأسر بأطفال ولاجئون، يعني ناس محتاجين."
            ],
            [
              "Warum arbeitet Karim ehrenamtlich bei der Tafel?",
              "Weil ihm früher selbst fremde Menschen geholfen haben und er diese Hilfsbereitschaft zurückgeben möchte.",
              "ليه كريم بيتطوّع في بنك الطعام؟",
              "لأن غرباء ساعدوه قبل كده، وهو عايز يردّ المساعدة دي."
            ]
          ],
          "titleAr": "يوم السبت بتاعي في بنك الطعام",
          "kindAr": "مدوّنة"
        },
        {
          "kind": "Zeitungsartikel",
          "title": "Kinder regieren ihre eigene Stadt",
          "text": "Jedes Jahr in den Sommerferien entsteht auf einem Sportplatz am Rand von Lindental für drei Wochen eine ganz besondere Stadt: die „Kinderstadt Sonnenfeld“. Hier leben und arbeiten Kinder zwischen 8 und 14 Jahren – und Erwachsene haben fast nichts zu sagen.<br><br>Wer mitmachen will, muss sich zuerst beim Einwohnermeldeamt anmelden. Dort bekommt jedes Kind einen Ausweis. Danach kann beim Arbeitsamt eine Arbeitsstelle gesucht werden. Es gibt über 40 Berufe: Man kann in der Bäckerei, bei der Zeitung, bei der Polizei oder bei der Müllabfuhr arbeiten. Für jede Stunde Arbeit gibt es zwei „Sonnentaler“, die Währung der Kinderstadt. Natürlich müssen auch Steuern bezahlt werden. Mit diesem Geld werden zum Beispiel die Straßenreinigung und das Kino finanziert.<br><br>„In einer Stadt muss so viel organisiert werden, das hätte ich nicht gedacht“, sagt die elfjährige Lena. Sie arbeitet im Rathaus. „Jeden Tag müssen Anträge geprüft und Entscheidungen getroffen werden.“ Lena wurde letzte Woche in den Stadtrat gewählt. Auch eine Bürgermeisterin gibt es: Die zwölfjährige Aylin wurde mit großer Mehrheit gewählt. Ihr wichtigstes Vorhaben: „Der Müll soll besser getrennt werden.“ In der Bürgerversammlung wird jeden Freitag über solche Ideen abgestimmt.<br><br>Und die Eltern? Sie dürfen nur ins Elterncafé am Eingang. „Das ist am Anfang schwer“, lacht eine Mutter, „aber die Kinder werden hier wirklich selbstständig.“<br><br>Das Projekt wird von der Stadt Lindental und mehreren Firmen finanziert. Die Organisatoren sind zufrieden: Die Kinder lernen spielerisch, wie Demokratie funktioniert und wie wichtig Regeln für das Zusammenleben sind. Deshalb soll die Kinderstadt auch im nächsten Sommer wieder geöffnet werden.",
          "ar": "كل عام في العطلة الصيفية تنشأ لمدة ثلاثة أسابيع على ملعب رياضي في أطراف مدينة ليندنتال مدينة مميزة جدًا: «مدينة الأطفال زونِنفِلد». هنا يعيش ويعمل أطفال تتراوح أعمارهم بين 8 و14 سنة – والكبار ليس لهم تقريبًا أي رأي.<br><br>من يريد المشاركة عليه أولًا أن يسجّل نفسه في مكتب تسجيل السكان. هناك يحصل كل طفل على بطاقة هوية. بعد ذلك يمكن البحث عن وظيفة في مكتب العمل. هناك أكثر من 40 مهنة: يمكن العمل في المخبز أو في الجريدة أو في الشرطة أو في جمع القمامة. مقابل كل ساعة عمل يحصل الطفل على اثنين «زونِن تالر»، وهي عملة مدينة الأطفال. وبالطبع يجب أيضًا دفع الضرائب. بهذه الأموال يتم مثلًا تمويل تنظيف الشوارع والسينما.<br><br>تقول لينا ذات الأحد عشر عامًا: «في المدينة يجب تنظيم أشياء كثيرة جدًا، لم أكن أتوقع ذلك». هي تعمل في مبنى البلدية. «كل يوم يجب فحص الطلبات واتخاذ القرارات». تم انتخاب لينا الأسبوع الماضي في مجلس المدينة. وهناك أيضًا عمدة: آيلين ذات الاثني عشر عامًا انتُخبت بأغلبية كبيرة. أهم مشروع لها: «يجب فرز القمامة بشكل أفضل». في اجتماع المواطنين يتم التصويت كل يوم جمعة على مثل هذه الأفكار.<br><br>والآباء؟ يُسمح لهم فقط بالدخول إلى مقهى الآباء عند المدخل. تضحك إحدى الأمهات وتقول: «هذا صعب في البداية، لكن الأطفال يصبحون هنا مستقلين فعلًا».<br><br>يتم تمويل المشروع من مدينة ليندنتال وعدة شركات. المنظمون راضون: الأطفال يتعلمون من خلال اللعب كيف تعمل الديمقراطية وكم هي مهمة القواعد للعيش المشترك. لذلك من المقرر أن تُفتح مدينة الأطفال مرة أخرى في الصيف القادم أيضًا.",
          "questions": [
            [
              "Was müssen die Kinder zuerst machen, wenn sie mitmachen wollen?",
              "Sie müssen sich beim Einwohnermeldeamt anmelden.",
              "الأطفال لازم يعملوا إيه أولًا لو عايزين يشاركوا؟",
              "لازم يسجّلوا في مكتب تسجيل السكان."
            ],
            [
              "Was wird mit den Steuern finanziert?",
              "Zum Beispiel die Straßenreinigung und das Kino.",
              "إيه اللي بيتم تمويله بالضرائب؟",
              "مثلًا تنظيف الشوارع والسينما."
            ],
            [
              "Welche Aufgaben gibt es jeden Tag im Rathaus?",
              "Anträge müssen geprüft und Entscheidungen getroffen werden.",
              "إيه المهام اليومية في مبنى البلدية؟",
              "لازم تُفحص الطلبات وتُتخذ قرارات."
            ],
            [
              "Was ist das wichtigste Vorhaben der Bürgermeisterin Aylin?",
              "Der Müll soll besser getrennt werden.",
              "إيه أهم خطة لرئيسة البلدية أيلين؟",
              "تحسين فصل القمامة."
            ],
            [
              "Wo dürfen sich die Eltern aufhalten?",
              "Nur im Elterncafé am Eingang.",
              "مسموح للأهالي يقعدوا فين؟",
              "فقط في كافيه الأهالي عند المدخل."
            ]
          ],
          "titleAr": "أطفال بيحكموا مدينتهم",
          "kindAr": "مقال في جريدة"
        },
        {
          "kind": "Lesetext",
          "title": "Wie aus Feinden Partner wurden",
          "text": "Nach dem Zweiten Weltkrieg war Europa zerstört. Millionen Menschen hatten ihr Leben verloren, viele Städte lagen in Trümmern. Die Politiker wollten verhindern, dass so etwas noch einmal passiert. Ihre Idee: Länder, die wirtschaftlich eng zusammenarbeiten, führen keinen Krieg gegeneinander.<br><br>Deshalb wurde 1951 von sechs Staaten – Belgien, Deutschland, Frankreich, Italien, Luxemburg und den Niederlanden – ein erster Vertrag unterzeichnet. Damit wurde die Produktion von Kohle und Stahl gemeinsam kontrolliert. Diese Rohstoffe brauchte man damals vor allem, um Waffen herzustellen. 1957 wurden in Rom zwei weitere Verträge geschlossen, und die Zusammenarbeit wurde auf die ganze Wirtschaft ausgeweitet.<br><br>Im Lauf der Zeit sind immer mehr Länder dazugekommen. 1992 wurde in der niederländischen Stadt Maastricht ein wichtiger Vertrag unterzeichnet: Aus der Europäischen Gemeinschaft wurde die Europäische Union. Seitdem ist viel erreicht worden. An vielen Grenzen sind die Kontrollen abgeschafft worden, und 2002 wurde in zwölf Ländern der Euro als gemeinsame Währung eingeführt. Heute können Bürgerinnen und Bürger der EU in jedem Mitgliedsstaat leben, arbeiten und studieren.<br><br>Die gemeinsamen Werte der EU sind die Würde des Menschen, Freiheit, Demokratie, Gleichberechtigung und die Menschenrechte. Sie werden von allen Mitgliedsstaaten anerkannt.<br><br>Natürlich gibt es auch Kritik. Manche Menschen haben Angst, dass nationale Traditionen verschwinden. Andere finden, dass es zu viele Vorschriften gibt und dass Entscheidungen zu langsam getroffen werden. Anfang 2020 hat Großbritannien die EU endgültig verlassen. Trotzdem sind viele Menschen überzeugt: Die Zusammenarbeit hat dafür gesorgt, dass die Mitgliedsstaaten seit Jahrzehnten in Frieden zusammenleben.",
          "ar": "بعد الحرب العالمية الثانية كانت أوروبا مدمَّرة. ملايين الناس فقدوا حياتهم، وكثير من المدن كانت أنقاضًا. أراد السياسيون منع حدوث شيء كهذا مرة أخرى. وكانت فكرتهم: الدول التي تتعاون اقتصاديًا بشكل وثيق لا تخوض حربًا ضد بعضها.<br><br>لذلك وقّعت ست دول عام 1951 – بلجيكا وألمانيا وفرنسا وإيطاليا ولوكسمبورغ وهولندا – أول معاهدة. وبذلك أصبح إنتاج الفحم والصلب يُراقَب بشكل مشترك. فهذه المواد الخام كانت تُستخدم في ذلك الوقت أساسًا لصناعة الأسلحة. وفي عام 1957 أُبرمت في روما معاهدتان أخريان، وتم توسيع التعاون ليشمل الاقتصاد كله.<br><br>ومع مرور الوقت انضمت دول أكثر فأكثر. في عام 1992 وُقّعت في مدينة ماستريخت الهولندية معاهدة مهمة: فتحوّلت الجماعة الأوروبية إلى الاتحاد الأوروبي. ومنذ ذلك الحين تحقق الكثير. فقد أُلغيت الرقابة على كثير من الحدود، وفي عام 2002 تم إدخال اليورو كعملة مشتركة في اثنتي عشرة دولة. واليوم يستطيع مواطنو ومواطنات الاتحاد الأوروبي أن يعيشوا ويعملوا ويدرسوا في أي دولة عضو.<br><br>القيم المشتركة للاتحاد الأوروبي هي كرامة الإنسان والحرية والديمقراطية والمساواة في الحقوق وحقوق الإنسان. وهذه القيم معترف بها من جميع الدول الأعضاء.<br><br>بالطبع هناك أيضًا انتقادات. بعض الناس يخافون من أن تختفي التقاليد الوطنية. وآخرون يرون أن هناك لوائح كثيرة جدًا وأن القرارات تُتخذ ببطء شديد. في بداية عام 2020 غادرت بريطانيا الاتحاد الأوروبي نهائيًا. ومع ذلك فإن كثيرًا من الناس مقتنعون بأن هذا التعاون جعل الدول الأعضاء تعيش معًا في سلام منذ عقود.",
          "questions": [
            [
              "Was war die Idee der Politiker nach dem Zweiten Weltkrieg?",
              "Länder, die wirtschaftlich eng zusammenarbeiten, führen keinen Krieg gegeneinander.",
              "إيه فكرة السياسيين بعد الحرب العالمية الثانية؟",
              "البلاد اللي بتتعاون اقتصاديًا بشكل وثيق ما بتحاربش بعض."
            ],
            [
              "Was wurde mit dem ersten Vertrag 1951 gemeinsam kontrolliert?",
              "Die Produktion von Kohle und Stahl.",
              "إيه اللي اتراقب بشكل مشترك بالاتفاق الأول سنة ١٩٥١؟",
              "إنتاج الفحم والصلب."
            ],
            [
              "Was passierte 1992 in Maastricht?",
              "Ein Vertrag wurde unterzeichnet, und aus der Europäischen Gemeinschaft wurde die Europäische Union.",
              "إيه اللي حصل في ماستريخت سنة ١٩٩٢؟",
              "اتوقّعت معاهدة، وتحولت الجماعة الأوروبية للاتحاد الأوروبي."
            ],
            [
              "Welche gemeinsamen Werte hat die EU?",
              "Die Würde des Menschen, Freiheit, Demokratie, Gleichberechtigung und die Menschenrechte.",
              "إيه القيم المشتركة للاتحاد الأوروبي؟",
              "كرامة الإنسان والحرية والديمقراطية والمساواة في الحقوق وحقوق الإنسان."
            ],
            [
              "Welche Kritik an der EU gibt es?",
              "Manche haben Angst, dass nationale Traditionen verschwinden. Andere finden, dass es zu viele Vorschriften gibt und Entscheidungen zu langsam getroffen werden.",
              "إيه الانتقادات الموجّهة للاتحاد الأوروبي؟",
              "البعض خايف من اختفاء التقاليد الوطنية، وغيرهم شايف القواعد كثيرة والقرارات بطيئة."
            ]
          ],
          "titleAr": "إزاي الأعداء بقوا شركاء",
          "kindAr": "نص قراءة"
        },
        {
          "kind": "E-Mail",
          "title": "Ich bin jetzt Patin!",
          "text": "Liebe Mona,<br><br>danke für deine lange Nachricht! Du hast gefragt, was es bei mir Neues gibt. Also: Seit drei Monaten bin ich Patin! Ich wollte mich schon lange ehrenamtlich engagieren, aber ich wusste nicht genau, wie. Im Frühling habe ich dann im Internet einen Verein gefunden, der Paten an Familien vermittelt. Ich bin zu einem Infoabend gegangen und wurde nach einem kurzen Gespräch zu einer Schulung eingeladen.<br><br>Meine Patenfamilie kommt aus Afghanistan. Die Eltern und ihre zwei Kinder sind vor zwei Jahren nach ihrer Flucht in Deutschland angekommen. Der Vater hat inzwischen eine Arbeitsstelle in einer Bäckerei gefunden, die Mutter besucht einen Integrationskurs. Trotzdem haben sie oft Mühe, den Alltag zu bewältigen. Es gibt so viele Formulare und Vorschriften! Letzte Woche musste zum Beispiel ein Antrag für den Kindergarten ausgefüllt werden. Wir sind zusammen zum Amt gegangen, und zum Glück ist der Antrag schon genehmigt worden.<br><br>Am meisten Zeit verbringe ich mit dem zehnjährigen Omid. Jeden Mittwoch machen wir zusammen Hausaufgaben, und manchmal gehen wir in den Zoo oder ins Schwimmbad. Omid ist super in Mathe, aber beim Lesen braucht er noch Hilfe. Dafür bringt er mir ein paar Wörter auf Dari bei – das ist gar nicht so einfach!<br><br>Ich habe in dieser Zeit schon viel gelernt. Früher hatte ich zum Beispiel einige Vorurteile, die ich heute peinlich finde. Und ich habe gemerkt, wie viel Kraft man braucht, wenn man in einem fremden Land neu anfängt.<br><br>Willst du nicht auch Patin werden? Neue Paten werden immer gesucht, und du musst kein Profi sein. Man braucht nur etwas Zeit und viel Geduld. Komm doch nächsten Monat mit zum Infoabend!<br><br>Liebe Grüße<br>Julia",
          "ar": "عزيزتي منى،<br><br>شكرًا على رسالتك الطويلة! سألتِني ما الجديد عندي. حسنًا: منذ ثلاثة أشهر أصبحت «راعية» (متطوعة لرعاية عائلة)! كنت أريد منذ وقت طويل أن أنشط تطوعيًا، لكني لم أكن أعرف بالضبط كيف. ثم في الربيع وجدت على الإنترنت جمعية توفّق بين الرعاة والعائلات. ذهبت إلى أمسية تعريفية، وبعد حديث قصير تمت دعوتي إلى دورة تدريبية.<br><br>العائلة التي أرعاها من أفغانستان. وصل الوالدان وطفلاهما إلى ألمانيا قبل عامين بعد هروبهم. الأب وجد في هذه الأثناء وظيفة في مخبز، والأم تحضر دورة اندماج. ومع ذلك فإنهم كثيرًا ما يجدون صعوبة في التغلب على الحياة اليومية. هناك استمارات ولوائح كثيرة جدًا! في الأسبوع الماضي مثلًا كان يجب ملء طلب للحضانة. ذهبنا معًا إلى المكتب الحكومي، ولحسن الحظ تمت الموافقة على الطلب بالفعل.<br><br>أقضي معظم وقتي مع أُميد ذي العشر سنوات. كل يوم أربعاء نحل الواجبات المدرسية معًا، وأحيانًا نذهب إلى حديقة الحيوان أو حمام السباحة. أُميد ممتاز في الرياضيات، لكنه ما زال يحتاج إلى مساعدة في القراءة. وفي المقابل يعلّمني بعض الكلمات بلغة الداري – وهذا ليس سهلًا على الإطلاق!<br><br>لقد تعلمت الكثير خلال هذه الفترة. مثلًا كانت لديّ في الماضي بعض الأحكام المسبقة التي أجدها اليوم محرجة. ولاحظت كم يحتاج الإنسان من القوة عندما يبدأ من جديد في بلد غريب.<br><br>ألا تريدين أنتِ أيضًا أن تصبحي راعية؟ نحن نبحث دائمًا عن رعاة جدد، ولا يجب أن تكوني محترفة. كل ما تحتاجينه هو بعض الوقت والكثير من الصبر. تعالي معي الشهر القادم إلى الأمسية التعريفية!<br><br>تحياتي الحارة<br>جوليا",
          "questions": [
            [
              "Wie hat Julia den Verein gefunden?",
              "Sie hat ihn im Frühling im Internet gefunden.",
              "يوليا لقت الجمعية إزاي؟",
              "لقتها على الإنترنت في الربيع."
            ],
            [
              "Warum hat die Familie oft Mühe, den Alltag zu bewältigen?",
              "Weil es so viele Formulare und Vorschriften gibt.",
              "ليه الأسرة غالبًا بتواجه صعوبة في التعامل مع الحياة اليومية؟",
              "لأن فيه استمارات وقواعد كتير جدًا."
            ],
            [
              "Was ist mit dem Antrag für den Kindergarten passiert?",
              "Er ist schon genehmigt worden.",
              "إيه اللي حصل لطلب الروضة؟",
              "اتوافق عليه بالفعل."
            ],
            [
              "Was machen Julia und Omid jeden Mittwoch?",
              "Sie machen zusammen Hausaufgaben.",
              "يوليا وأوميد بيعملوا إيه كل أربعاء؟",
              "بيعملوا الواجب مع بعض."
            ],
            [
              "Was braucht man laut Julia, wenn man Pate oder Patin werden will?",
              "Etwas Zeit und viel Geduld.",
              "حسب يوليا، محتاج إيه علشان تبقى راعيًا متطوّعًا؟",
              "شوية وقت وصبر كتير."
            ]
          ],
          "titleAr": "أنا بقيت راعية متطوّعة!",
          "kindAr": "بريد إلكتروني"
        }
      ],
      "grammar": [
        {
          "t": "Passiv Präsens",
          "tAr": "المبني للمجهول في المضارع",
          "body": "<p>Im <b>Passiv</b> ist wichtig, <b>was passiert</b>, nicht wer etwas tut. Man bildet es mit <b>werden + Partizip II</b>. Wer etwas tut, kann man mit <b>von + Dativ</b> sagen.</p><div class=\"ar\">في الـ Passiv المهم «إيه اللي بيحصل» مش «مين بيعمل». بنستخدم werden متصرّف + Partizip II في آخر الجملة. ولو عايز تقول مين اللي عمل، استخدم von + Dativ.</div><div class=\"exbox\">Aktiv: Die Tafel <b>verteilt</b> die Lebensmittel.<br>Passiv: Die Lebensmittel <b>werden</b> (von der Tafel) <b>verteilt</b>.<br>Die Feuerwehrleute <b>werden</b> von der Zentrale <b>alarmiert</b>.</div>"
        },
        {
          "t": "Passiv in der Vergangenheit",
          "tAr": "المبني للمجهول في الماضي",
          "body": "<p><b>Präteritum:</b> wurde + Partizip II. <b>Perfekt:</b> sein + Partizip II + <b>worden</b> (nicht „geworden“). Meistens benutzt man das <b>Präteritum</b>.</p><div class=\"ar\">في الماضي البسيط: wurde + Partizip II. وفي الـ Perfekt: sein + Partizip II + worden. خلي بالك: في الـ Passiv بنقول worden مش geworden. والأشهر في الكلام عن الماضي هو wurde.</div><div class=\"exbox\">Die erste Tafel <b>wurde</b> 1993 in Berlin <b>gegründet</b>.<br>Die Feuerwehr <b>wurde</b> sofort <b>alarmiert</b>.<br>Mehr als 940 Tafeln <b>sind</b> bundesweit <b>gegründet worden</b>.</div>"
        },
        {
          "t": "Passiv mit Modalverb",
          "tAr": "المبني للمجهول مع الأفعال الناقصة",
          "body": "<p>Das <b>Modalverb</b> steht auf Position 2, am Ende stehen <b>Partizip II + werden</b> (Infinitiv).</p><div class=\"ar\">الفعل الناقص (müssen, können, sollen, dürfen) بيتصرّف وييجي في المكان التاني، وفي آخر الجملة بييجي Partizip II وبعده werden في المصدر.</div><div class=\"exbox\">Das Geld <b>kann</b> in der Bank <b>abgeholt werden</b>.<br>In einer Stadt <b>müssen</b> viele Dinge <b>erledigt werden</b>.<br>Der Müll <b>soll</b> besser <b>getrennt werden</b>.</div>"
        },
        {
          "t": "Adjektive mit -bar und -los",
          "tAr": "الصفات بـ -bar و -los",
          "body": "<p>Adjektive mit <b>-bar</b> kommen meistens von einem <b>Verb</b>: Man <b>kann</b> etwas machen. Adjektive mit <b>-los</b> kommen von einem <b>Nomen</b>: Es gibt etwas <b>nicht</b>.</p><div class=\"ar\">-bar بتيجي بعد جذر الفعل ومعناها «ممكن يتعمل» (machbar = ممكن يتعمل). و -los بتيجي بعد اسم ومعناها «من غير» (kostenlos = من غير تكلفة).</div><div class=\"exbox\">machen → <b>machbar</b>: Das ist machbar.<br>erreichen → <b>erreichbar</b>: Ich bin telefonisch erreichbar.<br>die Kosten → <b>kostenlos</b>, die Hilfe → <b>hilflos</b>, die Arbeit → <b>arbeitslos</b></div>"
        }
      ],
      "redemittel": [
        {
          "cat": "Über Werte sprechen",
          "catAr": "تتكلم عن القيم",
          "items": [
            {
              "de": "Für mich ist Respekt am wichtigsten, denn …",
              "ar": "بالنسبة لي الاحترام هو أهم حاجة، لأن …"
            },
            {
              "de": "Ich finde Bildung sehr wichtig, weil Bildung die Zukunft sichert.",
              "ar": "أنا شايف التعليم مهم جدًا، لأنه بيأمّن المستقبل."
            },
            {
              "de": "Ich finde, man muss andere Menschen ernst nehmen.",
              "ar": "أنا شايف إن لازم ناخد الناس التانية بجد."
            },
            {
              "de": "Ohne Meinungsfreiheit kann eine Demokratie nicht funktionieren.",
              "ar": "من غير حرية الرأي الديمقراطية مش هتنفع."
            },
            {
              "de": "Zivilcourage bedeutet für mich, dass …",
              "ar": "الشجاعة المدنية معناها بالنسبة لي إن …"
            },
            {
              "de": "Ein gutes Beispiel dafür ist …",
              "ar": "مثال كويس على كده هو …"
            },
            {
              "de": "In meiner Heimat spielt … eine große Rolle.",
              "ar": "في بلدي … ليها دور كبير."
            }
          ]
        },
        {
          "cat": "Eine Auswahl treffen",
          "catAr": "تختار وتبرر اختيارك",
          "items": [
            {
              "de": "Ich würde gerne bei … mithelfen, weil …",
              "ar": "أنا حابب أساعد في …، لأن …"
            },
            {
              "de": "Ich könnte mir vorstellen, …",
              "ar": "ممكن أتخيل نفسي …"
            },
            {
              "de": "… finde ich am sinnvollsten, darum …",
              "ar": "… أنا شايفها أكتر حاجة ليها معنى، علشان كده …"
            },
            {
              "de": "… würde gut zu mir passen, weil …",
              "ar": "… هتناسبني كويس، لأن …"
            },
            {
              "de": "… spricht mich am meisten an, da …",
              "ar": "… هي أكتر حاجة شدّتني، لأن …"
            },
            {
              "de": "Die Idee von … überzeugt mich.",
              "ar": "فكرة … مقنعاني."
            },
            {
              "de": "Das Konzept von … interessiert mich.",
              "ar": "الفكرة بتاعة … مثيرة لاهتمامي."
            }
          ]
        },
        {
          "cat": "Eine Präsentation beginnen",
          "catAr": "تبدأ العرض التقديمي",
          "items": [
            {
              "de": "Ich halte heute eine Präsentation zum Thema …",
              "ar": "النهارده هقدّم عرض عن موضوع …"
            },
            {
              "de": "Mein Thema heute ist …",
              "ar": "موضوعي النهارده هو …"
            },
            {
              "de": "Ich möchte heute über … sprechen.",
              "ar": "عايز أتكلم النهارده عن …"
            },
            {
              "de": "Ich spreche über folgende Punkte: …",
              "ar": "هتكلم عن النقط دي: …"
            },
            {
              "de": "In meiner Präsentation möchte ich zuerst …, dann …, danach … und zum Schluss …",
              "ar": "في العرض بتاعي عايز الأول …، بعدين …، بعد كده … وفي الآخر …"
            }
          ]
        },
        {
          "cat": "Den Hauptteil strukturieren",
          "catAr": "ترتّب الجزء الأساسي من العرض",
          "items": [
            {
              "de": "Zu meinem ersten Punkt: …",
              "ar": "بالنسبة لأول نقطة: …"
            },
            {
              "de": "Damit komme ich zum zweiten Punkt: …",
              "ar": "وكده أوصل للنقطة التانية: …"
            },
            {
              "de": "Ich möchte ein zweites Beispiel nennen: …",
              "ar": "عايز أدي مثال تاني: …"
            },
            {
              "de": "Ich gebe Ihnen ein Beispiel: …",
              "ar": "هديكم مثال: …"
            },
            {
              "de": "Meiner Meinung nach sollte …",
              "ar": "في رأيي المفروض …"
            },
            {
              "de": "Ich habe die Erfahrung gemacht, dass …",
              "ar": "من تجربتي لقيت إن …"
            },
            {
              "de": "Bei uns ist es ein wenig anders: …",
              "ar": "عندنا الموضوع مختلف شوية: …"
            }
          ]
        },
        {
          "cat": "Eine Präsentation beenden",
          "catAr": "تختم العرض التقديمي",
          "items": [
            {
              "de": "Abschließend möchte ich kurz zusammenfassen: …",
              "ar": "في الختام عايز ألخّص بسرعة: …"
            },
            {
              "de": "Zum Schluss möchte ich noch einmal sagen, dass …",
              "ar": "وفي الآخر عايز أقول تاني إن …"
            },
            {
              "de": "Vielen Dank für Ihre Aufmerksamkeit.",
              "ar": "شكرًا جدًا على انتباهكم."
            },
            {
              "de": "Haben Sie noch Fragen zum Thema?",
              "ar": "حد عنده أسئلة عن الموضوع؟"
            },
            {
              "de": "Entschuldigung, jetzt habe ich den Faden verloren.",
              "ar": "معلش، أنا كده تهت ونسيت كنت بقول إيه."
            }
          ]
        },
        {
          "cat": "Rückmeldung zu einer Präsentation geben",
          "catAr": "تدي رأيك في عرض حد تاني",
          "items": [
            {
              "de": "Die Präsentation hat mir gut gefallen, sie war sehr interessant.",
              "ar": "العرض عجبني جدًا، كان ممتع قوي."
            },
            {
              "de": "Das ist ein spannendes Thema, manche Informationen waren neu für mich.",
              "ar": "الموضوع ده شيّق، وفيه معلومات كانت جديدة عليّا."
            },
            {
              "de": "Du hast passende Beispiele und Bilder ausgewählt.",
              "ar": "انت اخترت أمثلة وصور مناسبة."
            },
            {
              "de": "Deine Präsentation wäre noch besser, wenn du lauter gesprochen hättest.",
              "ar": "العرض بتاعك كان هيبقى أحسن لو كنت اتكلمت بصوت أعلى."
            },
            {
              "de": "Ich habe noch eine Frage zu deinem Thema.",
              "ar": "عندي سؤال كمان عن موضوعك."
            },
            {
              "de": "Ein Punkt deiner Präsentation interessiert mich besonders.",
              "ar": "فيه نقطة في العرض بتاعك شدّتني بالذات."
            },
            {
              "de": "Ich weiß nicht, ob ich das richtig verstanden habe.",
              "ar": "مش متأكد إذا كنت فهمت ده صح."
            }
          ]
        },
        {
          "cat": "Meinung äußern und widersprechen",
          "catAr": "تقول رأيك وتعترض",
          "items": [
            {
              "de": "Ich bin überzeugt, dass Sicherheit sehr wichtig ist.",
              "ar": "أنا مقتنع إن الأمان مهم جدًا."
            },
            {
              "de": "Meiner Meinung nach ist es notwendig, dass neue Schulen gebaut werden.",
              "ar": "في رأيي لازم يتبنى مدارس جديدة."
            },
            {
              "de": "Ich stehe auf dem Standpunkt, dass …",
              "ar": "أنا موقفي إن …"
            },
            {
              "de": "Für mich zählt besonders, dass …",
              "ar": "اللي يهمني بالذات إن …"
            },
            {
              "de": "Da kann ich dir nicht voll zustimmen, weil …",
              "ar": "مقدرش أوافقك تمامًا، لأن …"
            },
            {
              "de": "Das sehe ich völlig anders als du.",
              "ar": "أنا شايف الموضوع ده مختلف خالص عنك."
            },
            {
              "de": "Da muss ich dir leider widersprechen.",
              "ar": "للأسف لازم أعترض على كلامك هنا."
            },
            {
              "de": "Da bin ich nicht deiner Ansicht.",
              "ar": "أنا مش موافقك في الرأي ده."
            }
          ]
        }
      ],
      "speaking": {
        "questions": [
          {
            "de": "Welche Werte sind für Sie im Zusammenleben am wichtigsten? Warum?",
            "ar": "إيه القيم اللي شايفها أهم حاجة في العيش مع الناس؟ وليه؟"
          },
          {
            "de": "Haben Sie sich schon einmal ehrenamtlich engagiert? Wo und wie?",
            "ar": "عمرك اشتغلت متطوع قبل كده؟ فين وإزاي؟"
          },
          {
            "de": "Welche sozialen Projekte gibt es in Ihrer Heimat?",
            "ar": "إيه المشاريع الاجتماعية اللي موجودة في بلدك؟"
          },
          {
            "de": "Bei welcher Organisation würden Sie gern mithelfen und warum?",
            "ar": "حابب تساعد في أنهي منظمة، وليه؟"
          },
          {
            "de": "Was muss in einer Stadt alles gemacht werden, damit das Zusammenleben funktioniert?",
            "ar": "إيه الحاجات اللي لازم تتعمل في المدينة علشان العيشة مع بعض تمشي كويس؟"
          },
          {
            "de": "Was wissen Sie über die EU? Was finden Sie gut, was kritisieren Sie?",
            "ar": "تعرف إيه عن الاتحاد الأوروبي؟ إيه اللي عاجبك وإيه اللي بتنتقده؟"
          }
        ],
        "model": "Für mich sind Respekt und Hilfsbereitschaft die wichtigsten Werte, denn ohne sie kann eine Gemeinschaft nicht funktionieren. In Ägypten wird Nachbarn und Verwandten oft spontan geholfen, das finde ich sehr schön. Seit einem halben Jahr engagiere ich mich ehrenamtlich bei einem Verein in meiner Stadt. Dort wird Kindern aus Migrantenfamilien kostenlos Nachhilfe gegeben. Jeden Dienstag werden die Hausaufgaben gemacht und Texte zusammen gelesen. Am Anfang hatte ich Angst, dass die Arbeit zu schwierig ist, aber sie ist gut machbar. Der Verein wurde vor zehn Jahren von zwei Lehrerinnen gegründet und wird von der Stadt finanziert. Ich würde jedem empfehlen, so etwas auszuprobieren, weil man selbst sehr viel lernt.",
        "modelAr": "بالنسبة لي الاحترام والاستعداد للمساعدة هما أهم قيمتين، لأن من غيرهم الجماعة مش هتمشي. في مصر الناس كتير بتساعد الجيران والقرايب من غير ما حد يطلب، وده بيعجبني جدًا. من ست شهور بشتغل متطوع في جمعية في مدينتي. هناك بيتدّي لأطفال من عائلات مهاجرة دروس تقوية ببلاش. كل يوم تلات بنعمل الواجبات ونقرا نصوص مع بعض. في الأول كنت خايف إن الشغل يبقى صعب قوي، بس طلع سهل نعمله. الجمعية اتأسست من عشر سنين على إيد مدرّستين، والمدينة بتموّلها. أنا أنصح أي حد يجرّب حاجة زي كده، لأن الواحد بيتعلم كتير جدًا."
      },
      "quiz": [
        {
          "q": "Die Lebensmittel ___ von der Tafel an bedürftige Menschen verteilt.",
          "o": [
            "wird",
            "werden",
            "wurde"
          ],
          "a": 1,
          "fb": "Subjekt „die Lebensmittel“ ist Plural → werden + Partizip II.",
          "fbAr": "die Lebensmittel جمع، يبقى werden مش wird.",
          "qAr": "الأطعمة ___ توزيعها من بنك الطعام على المحتاجين.",
          "oAr": [
            "فعل werden مع المفرد",
            "الفعل werden",
            "فعل werden في الماضي مع المفرد"
          ]
        },
        {
          "q": "Die erste deutsche Tafel ___ 1993 in Berlin gegründet.",
          "o": [
            "wurde",
            "wird",
            "ist"
          ],
          "a": 0,
          "fb": "Passiv Präteritum: wurde + Partizip II (1993 = Vergangenheit).",
          "fbAr": "1993 ماضي، فبنستخدم wurde + Partizip II.",
          "qAr": "أول بنك طعام ألماني ___ تأسيسه سنة ١٩٩٣ في برلين.",
          "oAr": [
            "فعل werden في الماضي مع المفرد",
            "فعل werden مع المفرد",
            "يكون؛ صيغة ist"
          ]
        },
        {
          "q": "Mehr als 940 Tafeln sind bundesweit gegründet ___.",
          "o": [
            "geworden",
            "werden",
            "worden"
          ],
          "a": 2,
          "fb": "Passiv Perfekt: sein + Partizip II + worden.",
          "fbAr": "في الـ Perfekt بتاع الـ Passiv بنقول worden مش geworden.",
          "qAr": "أكتر من ٩٤٠ بنك طعام تم تأسيسها في أنحاء البلاد ___ .",
          "oAr": [
            "أصبح؛ التصريف الثالث لـ werden",
            "الفعل werden",
            "صيغة worden المستخدمة في المبني للمجهول"
          ]
        },
        {
          "q": "In einer Stadt muss viel ___.",
          "o": [
            "erledigt werden",
            "werden erledigt",
            "erledigen werden"
          ],
          "a": 0,
          "fb": "Passiv mit Modalverb: Modalverb … Partizip II + werden.",
          "fbAr": "مع müssen بييجي في الآخر Partizip II وبعده werden.",
          "qAr": "في المدينة حاجات كتير لازم ___ .",
          "oAr": [
            "يتم إنجازها؛ بصيغ مختلفة لتركيب المبني للمجهول",
            "يتم إنجازها؛ بصيغ مختلفة لتركيب المبني للمجهول",
            "يتم إنجازها؛ بصيغ مختلفة لتركيب المبني للمجهول"
          ]
        },
        {
          "q": "Die Feuerwehrleute werden ___ der Zentrale alarmiert.",
          "o": [
            "durch die",
            "von",
            "mit"
          ],
          "a": 1,
          "fb": "Wer etwas tut, steht im Passiv mit von + Dativ.",
          "fbAr": "الفاعل في الـ Passiv بنقوله بـ von + Dativ: von der Zentrale.",
          "qAr": "رجال الإطفاء بيتم إبلاغهم ___ المركز.",
          "oAr": [
            "عن طريق؛ حرف الجر durch مع الأداة die",
            "من أو بواسطة",
            "مع أو بواسطة وسيلة"
          ]
        },
        {
          "q": "Die Reparatur kostet nichts, sie ist ___.",
          "o": [
            "kostenlos",
            "kostbar",
            "hilflos"
          ],
          "a": 0,
          "fb": "-los = ohne: kostenlos = ohne Kosten.",
          "fbAr": "-los معناها «من غير»، و kostenlos يعني ببلاش.",
          "qAr": "التصليح مش بيكلّف حاجة، هو ___ .",
          "oAr": [
            "مجاني",
            "ثمين",
            "عاجز عن مساعدة نفسه"
          ]
        },
        {
          "q": "Viele Menschen arbeiten ___ bei der Tafel und bekommen kein Geld dafür.",
          "o": [
            "bedürftig",
            "ehrenamtlich",
            "national"
          ],
          "a": 1,
          "fb": "Ehrenamtlich = freiwillig und ohne Bezahlung.",
          "fbAr": "ehrenamtlich يعني تطوعي من غير مرتب.",
          "qAr": "ناس كتير بتشتغل ___ في بنك الطعام ومش بتاخد فلوس مقابل ده.",
          "oAr": [
            "محتاج",
            "بشكل تطوعي من غير أجر",
            "وطني"
          ]
        },
        {
          "q": "Vor dem Umzug ins Ausland muss man sich beim Einwohnermeldeamt ___.",
          "o": [
            "anmelden",
            "beitreten",
            "abmelden"
          ],
          "a": 2,
          "fb": "Wenn man wegzieht, meldet man sich ab.",
          "fbAr": "لما بتسيب المدينة بتعمل abmelden، يعني تلغي تسجيلك.",
          "qAr": "قبل الانتقال للخارج لازم ___ تسجيلك في مكتب تسجيل السكان.",
          "oAr": [
            "يسجّل",
            "ينضم",
            "يلغي التسجيل"
          ]
        }
      ],
      "badgesAr": [
        "المبني للمجهول في المضارع",
        "المبني للمجهول في الماضي",
        "المبني للمجهول مع فعل مساعد للكيفية",
        "صفات بنهايتي -bar و-los",
        "التطوع والمجتمع"
      ]
    },
    "11": {
      "intro": "In diesem Kapitel geht es um das Leben in der Stadt und auf dem Land, um lebenswerte Städte und um Städtereisen in Deutschland, Österreich und der Schweiz. Sie lernen, Artikelwörter als Pronomen, irgendein und Adjektive als Nomen zu benutzen, und beschreiben Dinge genauer mit Relativsätzen mit was und wo. Außerdem üben Sie, in Diskussionen zu vermitteln und E-Mails an verschiedene Empfänger zu schreiben.",
      "introAr": "الفصل ده بيتكلم عن الحياة في المدينة وفي الريف، وعن المدن اللي تستاهل العيشة فيها، وعن الرحلات لمدن في ألمانيا والنمسا وسويسرا. هتتعلم إزاي تستخدم أدوات زي einer / eins / welche كضماير، وكلمة irgendein، والصفات اللي بتبقى أسماء زي der Obdachlose، وهتوصف الحاجات بدقة أكتر بجمل صلة بـ was و wo. وكمان هتتدرب إزاي تتوسط في نقاش وتكتب إيميلات لناس مختلفة، رسمي وغير رسمي.",
      "badges": [
        "Artikelwörter als Pronomen",
        "irgendein / irgendwelche",
        "Adjektive als Nomen",
        "Relativsätze mit was und wo",
        "Stadt und Land"
      ],
      "goals": [
        {
          "de": "über das Leben in der Stadt und auf dem Land sprechen und schreiben",
          "ar": "تتكلم وتكتب عن الحياة في المدينة وفي الريف"
        },
        {
          "de": "über bereits Genanntes sprechen (einer, eins, welche, keins)",
          "ar": "تتكلم عن حاجة اتقالت قبل كده من غير ما تكرر الاسم"
        },
        {
          "de": "einen Magazintext verstehen und einen kurzen Bericht schreiben",
          "ar": "تفهم مقال في مجلة وتكتب تقرير قصير"
        },
        {
          "de": "Übersichtstafeln und Ansagen verstehen",
          "ar": "تفهم لوحات الإرشاد والإعلانات (في المصلحة أو المحطة)"
        },
        {
          "de": "über lebenswerte Städte diskutieren",
          "ar": "تتناقش عن المدن اللي تستاهل العيشة فيها"
        },
        {
          "de": "etwas mit Relativsätzen mit was und wo näher beschreiben",
          "ar": "توصف حاجة بالتفصيل بجمل صلة بـ was و wo"
        },
        {
          "de": "in einer Diskussion auf Standpunkte eingehen und vermitteln",
          "ar": "ترد على آراء الناس وتتوسط في النقاش"
        },
        {
          "de": "einen Blog über eine Stadt verstehen und ein Programm für einen Stadtbesuch erstellen",
          "ar": "تفهم بلوج عن مدينة وتعمل برنامج لزيارة مدينة"
        },
        {
          "de": "an unterschiedliche Empfänger formell und informell schreiben",
          "ar": "تكتب لناس مختلفة بشكل رسمي وغير رسمي"
        }
      ],
      "readings": [
        {
          "kind": "Forum",
          "title": "Stadtmensch oder Landmensch?",
          "text": "Lina_HH: Hallo zusammen! Ich ziehe bald für meinen neuen Job um und kann mich nicht entscheiden: Großstadt oder Dorf? Seid ihr Stadtmenschen oder Landmenschen? Erzählt doch mal!<br><br>Tarek92: Ich bin eindeutig einer, der die Stadt braucht. Ich wohne mitten in Köln, und hier ist immer irgendwas los. Abends gehe ich spontan in irgendeine Kneipe oder auf irgendein Konzert. Ein Auto? Habe ich keins und brauche auch keins, denn mit Bus, Bahn und Fahrrad erreiche ich alles. Klar, der Lärm und der Dreck auf den Straßen nerven manchmal, aber das nehme ich in Kauf.<br><br>Waldfee: Anscheinend bin ich das Gegenteil von Tarek. Ich habe lange in Frankfurt gearbeitet, aber das Tempo und der Stress waren mir zu viel. Vor zwei Jahren habe ich ein altes Haus in einem Dorf im Taunus gekauft. Es ist klein, aber es ist meins! Am Abend sitze ich im Garten und höre nur die Vögel. Hier kennt jeder jeden, und die Nachbarn helfen sich gegenseitig.<br><br>Mo_aus_Leipzig: Ich verstehe euch beide. Ich wohne am Rand der Stadt. Ein Park? Gleich um die Ecke gibt es einen. Geschäfte? Es gibt welche in der Nähe, und die Innenstadt ist auch nur zwanzig Minuten entfernt. Für mich ist das die perfekte Mischung.<br><br>Waldfee: @Lina: Eins musst du aber wissen: Auf dem Land braucht man fast immer ein Auto. Bei uns fährt der Bus nur zweimal am Tag.<br><br>Lina_HH: Danke für eure Antworten! Ich glaube, ich suche mir erst mal irgendeine kleine Wohnung in der Stadt. Wenn es mir dort zu laut ist, kann ich ja immer noch aufs Land ziehen.",
          "ar": "لينا_HH: مرحبًا بالجميع! سأنتقل قريبًا بسبب عملي الجديد ولا أستطيع أن أقرر: مدينة كبيرة أم قرية؟ هل أنتم من محبي المدينة أم من محبي الريف؟ احكوا لي!<br><br>طارق92: أنا بلا شك واحد من الناس الذين يحتاجون إلى المدينة. أسكن في قلب كولونيا، وهنا يحدث دائمًا شيء ما. في المساء أذهب بشكل عفوي إلى أي حانة أو إلى أي حفلة موسيقية. سيارة؟ ليس عندي واحدة ولا أحتاج إلى واحدة، لأنني أصل إلى كل مكان بالأتوبيس والقطار والدراجة. طبعًا الضوضاء والقذارة في الشوارع مزعجة أحيانًا، لكنني أتقبل ذلك.<br><br>جنية_الغابة: على ما يبدو أنا عكس طارق. عملت لفترة طويلة في فرانكفورت، لكن السرعة والضغط كانا أكثر من اللازم بالنسبة لي. منذ عامين اشتريت بيتًا قديمًا في قرية في منطقة تاونوس. إنه صغير، لكنه بيتي أنا! في المساء أجلس في الحديقة ولا أسمع إلا العصافير. هنا يعرف كل واحد الآخر، والجيران يساعدون بعضهم بعضًا.<br><br>مو_من_لايبزيغ: أنا أفهمكما أنتما الاثنين. أسكن على أطراف المدينة. حديقة عامة؟ توجد واحدة قريبة جدًا. محلات؟ توجد بعض المحلات بالقرب مني، ووسط المدينة أيضًا على بُعد عشرين دقيقة فقط. بالنسبة لي هذا هو المزيج المثالي.<br><br>جنية_الغابة: @لينا: لكن يجب أن تعرفي شيئًا واحدًا: في الريف تحتاجين دائمًا تقريبًا إلى سيارة. عندنا يمر الأتوبيس مرتين فقط في اليوم.<br><br>لينا_HH: شكرًا على ردودكم! أظن أنني سأبحث أولًا عن أي شقة صغيرة في المدينة. وإذا كان المكان هناك مزعجًا جدًا، يمكنني دائمًا أن أنتقل إلى الريف بعد ذلك.",
          "questions": [
            [
              "Warum braucht Tarek kein Auto?",
              "Weil er mit Bus, Bahn und Fahrrad alles erreicht.",
              "ليه طارق مش محتاج عربية؟",
              "لأنه بيوصل لكل حاجة بالأتوبيس والقطار والعجلة."
            ],
            [
              "Warum hat Waldfee Frankfurt verlassen?",
              "Das Tempo und der Stress in der Stadt waren ihr zu viel.",
              "ليه «جنية الغابة» سابت فرانكفورت؟",
              "السرعة والضغط في المدينة كانوا زيادة عليها."
            ],
            [
              "Was gefällt Waldfee am Leben im Dorf?",
              "Die Ruhe im Garten und dass sich die Nachbarn gegenseitig helfen.",
              "إيه اللي عاجب «جنية الغابة» في حياة القرية؟",
              "هدوء الجنينة ومساعدة الجيران لبعض."
            ],
            [
              "Warum findet Mo seine Wohnlage perfekt?",
              "Er hat einen Park und Geschäfte in der Nähe, und die Innenstadt ist nur zwanzig Minuten entfernt.",
              "ليه مو شايف موقع سكنه مثاليًا؟",
              "عنده حديقة ومحلات قريبة، ووسط المدينة على بعد عشرين دقيقة فقط."
            ],
            [
              "Wofür entscheidet sich Lina am Ende?",
              "Sie sucht sich erst einmal eine kleine Wohnung in der Stadt.",
              "لينا بتختار إيه في النهاية؟",
              "بتدوّر مبدئيًا على شقة صغيرة في المدينة."
            ]
          ],
          "titleAr": "بتحب المدينة ولا الريف؟",
          "kindAr": "منتدى"
        },
        {
          "kind": "Reportage",
          "title": "Fünf Uhr morgens in Hamburg",
          "text": "Fünf Uhr morgens in Hamburg. Die meisten Bewohner der Stadt schlafen noch, aber viele Menschen sind schon – oder immer noch – bei der Arbeit.<br><br>Im Städtischen Klinikum ist die Krankenschwester Aylin Demir seit zehn Uhr abends im Dienst. Es war eine unruhige Nacht. „Gegen Mitternacht wurden zwei Verletzte nach einem Unfall auf der Autobahn eingeliefert“, erzählt sie. „Einer musste sofort operiert werden. Und eine ältere Kranke auf meiner Station konnte nicht schlafen und hat oft nach mir gerufen.“ Jetzt schreibt Aylin alles für die Übergabe auf. Um sechs kommen die Kollegen von der Frühschicht, dann hat sie endlich Feierabend.<br><br>Zwei Straßen weiter riecht es nach Kaffee und frischen Brötchen. In der kleinen Bäckerei Hansen arbeiten der Chef und drei Angestellte schon seit halb drei in der Backstube. Auch ein Auszubildender ist dabei: Jonas, 17 Jahre alt. „Am Anfang war das frühe Aufstehen schlimm“, sagt er und lacht. „Aber jetzt mag ich die Ruhe am Morgen.“ Um halb fünf lädt er zusammen mit der Fahrerin die Körbe ins Auto. Hotels und Cafés warten auf ihre Bestellungen.<br><br>Am Hauptbahnhof macht sich gerade die erste U-Bahn auf den Weg. Ein Reinigungsfahrzeug fährt langsam über den Platz. Auf einer Bank sitzt ein Obdachloser. Ein Bekannter von ihm, ein Sozialarbeiter, kommt jeden Morgen vorbei und bringt ihm einen Kaffee und ein Brötchen aus der Bäckerei Hansen. „Der Kaffee ist der beste in der ganzen Stadt“, sagt der Mann und lächelt.<br><br>Langsam wird es hell. Die ersten Pendler steigen aus den Zügen, Jugendliche mit Schultaschen warten auf den Bus. Für Aylin und Jonas ist der halbe Arbeitstag schon vorbei – für viele andere beginnt er gerade erst.",
          "ar": "الساعة الخامسة صباحًا في هامبورغ. معظم سكان المدينة ما زالوا نائمين، لكن كثيرًا من الناس يعملون بالفعل – أو ما زالوا يعملون.<br><br>في المستشفى البلدي تعمل الممرضة أيلين دمير منذ الساعة العاشرة مساءً. كانت ليلة مضطربة. تحكي: «حوالي منتصف الليل تم نقل مصابَين إلى المستشفى بعد حادث على الطريق السريع. واحد منهما كان لا بد أن تُجرى له عملية فورًا. وسيدة مريضة كبيرة في السن في قسمي لم تستطع النوم ونادتني مرات كثيرة.» الآن تكتب أيلين كل شيء من أجل تسليم الوردية. في الساعة السادسة يأتي الزملاء من الوردية الصباحية، وبعدها ينتهي يوم عملها أخيرًا.<br><br>على بُعد شارعين تفوح رائحة القهوة والخبز الطازج. في مخبز هانزن الصغير يعمل صاحب المخبز وثلاثة موظفين في مكان الخَبز منذ الساعة الثانية والنصف. ومعهم أيضًا متدرب: يوناس، عمره 17 سنة. يقول وهو يضحك: «في البداية كان الاستيقاظ المبكر صعبًا جدًا، لكنني الآن أحب الهدوء في الصباح.» في الرابعة والنصف يحمّل السلال في السيارة مع السائقة. الفنادق والمقاهي تنتظر طلبياتها.<br><br>في محطة القطار الرئيسية ينطلق الآن أول قطار مترو. عربة تنظيف تسير ببطء فوق الميدان. على أحد المقاعد يجلس رجل مشرد. أحد معارفه، وهو أخصائي اجتماعي، يمر عليه كل صباح ويحضر له قهوة وخبزًا صغيرًا من مخبز هانزن. يقول الرجل مبتسمًا: «هذه القهوة هي الأفضل في المدينة كلها.»<br><br>يبدأ النور في الظهور ببطء. أول المسافرين اليوميين ينزلون من القطارات، والشباب الصغار بحقائب المدرسة ينتظرون الأتوبيس. بالنسبة لأيلين ويوناس انتهى نصف يوم العمل بالفعل – أما بالنسبة لكثيرين غيرهم فهو يبدأ الآن فقط.",
          "questions": [
            [
              "Warum war die Nacht für Aylin unruhig?",
              "Zwei Verletzte wurden eingeliefert, und eine ältere Kranke hat oft nach ihr gerufen.",
              "ليه ليلة أيلين كانت مضطربة؟",
              "وصل مصابان، ومريضة كبيرة في السن كانت بتنادي عليها كتير."
            ],
            [
              "Was macht Aylin vor ihrem Feierabend?",
              "Sie schreibt alles für die Übergabe an die Frühschicht auf.",
              "أيلين بتعمل إيه قبل نهاية شغلها؟",
              "بتكتب كل المعلومات لتسليم المناوبة لوردية الصباح."
            ],
            [
              "Seit wann arbeiten die Angestellten in der Bäckerei?",
              "Seit halb drei.",
              "من إمتى موظفو المخبز بيشتغلوا؟",
              "من الساعة اتنين ونصف."
            ],
            [
              "Was macht Jonas um halb fünf?",
              "Er lädt mit der Fahrerin die Körbe mit Brot ins Auto.",
              "يوناس بيعمل إيه الساعة أربعة ونصف؟",
              "بيحمّل سلال العيش في العربية مع السائقة."
            ],
            [
              "Wer kümmert sich am Bahnhof um den Obdachlosen?",
              "Ein Bekannter, ein Sozialarbeiter, der ihm Kaffee und ein Brötchen bringt.",
              "مين بيهتم بالمشرد عند المحطة؟",
              "واحد من معارفه، أخصائي اجتماعي بيجيب له قهوة وخبزة صغيرة."
            ]
          ],
          "titleAr": "الساعة خمسة صباحًا في هامبورغ",
          "kindAr": "تقرير صحفي"
        },
        {
          "kind": "Zeitungsartikel",
          "title": "Was macht eine Stadt lebenswert?",
          "text": "Jedes Jahr veröffentlichen Zeitschriften und Unternehmen neue Rankings der lebenswertesten Städte der Welt. Städte wie Wien, Zürich oder Kopenhagen liegen dabei oft ganz vorne, was viele Bewohner natürlich freut. Aber wie entstehen solche Listen eigentlich?<br><br>Meistens bewerten Fachleute viele verschiedene Aspekte. Bei manchen Studien steht die Arbeit im Vordergrund: Wie viele Stunden arbeiten die Menschen pro Woche? Wie hoch ist die Arbeitslosigkeit? Wie lange dauert der Weg zur Arbeit? Auch Gesetze spielen eine Rolle, denn sie legen fest, wie viel Anspruch man auf Urlaub oder Elternzeit hat.<br><br>Andere Studien berücksichtigen vor allem das Leben in der Stadt selbst. Gibt es genug Grünflächen, wo Kinder spielen und Erwachsene sich erholen können? Wie gut funktionieren Busse und Bahnen? Ist die Luft sauber? Fühlt man sich auch nachts sicher? Wichtig ist außerdem, ob alle Menschen Zugang zum Gesundheitssystem und zu guter Kinderbetreuung haben.<br><br>Doch nicht alles, was in einem Ranking gut aussieht, ist für die Bewohner auch positiv. „Wenn eine Stadt auf Platz eins steht, ziehen viele Menschen dorthin“, erklärt die Stadtforscherin Petra Lang. „Dann steigen die Mieten, was besonders für Familien und Studierende ein Problem ist.“ Außerdem gibt es Dinge, die man nicht messen kann: die Atmosphäre in einem Viertel, die Freundlichkeit der Nachbarn oder das Gefühl, irgendwo zu Hause zu sein.<br><br>Darum sagt die Expertin: „Eine Stadt, wo man sich wohlfühlt, muss nicht ganz oben im Ranking stehen. Das, was für den einen wichtig ist, ist für den anderen vielleicht ganz egal.“ Wie gut man in einer Stadt lebt, hängt also auch von der eigenen Lebenssituation ab.",
          "ar": "كل سنة تنشر مجلات وشركات تصنيفات جديدة لأفضل المدن للعيش في العالم. ومدن مثل فيينا وزيورخ وكوبنهاغن غالبًا ما تأتي في المقدمة، وهذا يُسعد كثيرًا من سكانها بالطبع. لكن كيف تُصنع هذه القوائم في الحقيقة؟<br><br>في أغلب الأحيان يقيّم خبراء جوانب كثيرة ومختلفة. في بعض الدراسات يكون العمل هو الأهم: كم ساعة يعمل الناس في الأسبوع؟ ما نسبة البطالة؟ كم يستغرق الطريق إلى العمل؟ والقوانين أيضًا لها دور، لأنها تحدد مقدار حق الإنسان في الإجازة أو في إجازة رعاية الطفل.<br><br>ودراسات أخرى تراعي قبل كل شيء الحياة في المدينة نفسها. هل توجد مساحات خضراء كافية يمكن أن يلعب فيها الأطفال ويرتاح فيها الكبار؟ ما مدى جودة الأتوبيسات والقطارات؟ هل الهواء نظيف؟ هل يشعر الإنسان بالأمان حتى في الليل؟ ومن المهم أيضًا هل يحصل كل الناس على خدمات النظام الصحي وعلى رعاية جيدة للأطفال.<br><br>لكن ليس كل ما يبدو جيدًا في التصنيف إيجابيًا أيضًا للسكان. تشرح باحثة شؤون المدن بترا لانغ: «عندما تحتل مدينة المركز الأول، ينتقل إليها كثير من الناس. وبعدها ترتفع الإيجارات، وهذه مشكلة خصوصًا للعائلات والطلاب.» وبالإضافة إلى ذلك توجد أشياء لا يمكن قياسها: الجو في أحد الأحياء، ولطف الجيران، أو الشعور بأنك في بيتك في مكان ما.<br><br>لهذا تقول الخبيرة: «المدينة التي يشعر فيها الإنسان بالراحة ليس من الضروري أن تكون في أعلى التصنيف. ما هو مهم لشخص ما قد لا يهم شخصًا آخر على الإطلاق.» إذن مدى جودة الحياة في مدينة ما يعتمد أيضًا على ظروف حياة كل شخص.",
          "questions": [
            [
              "Wer bewertet die Städte für die Rankings?",
              "Meistens Fachleute.",
              "مين بيقيّم المدن في التصنيفات؟",
              "غالبًا خبراء."
            ],
            [
              "Welche Fragen zur Arbeit stellen manche Studien?",
              "Wie viele Stunden man pro Woche arbeitet, wie hoch die Arbeitslosigkeit ist und wie lange der Weg zur Arbeit dauert.",
              "بعض الدراسات بتسأل إيه عن العمل؟",
              "عدد ساعات العمل الأسبوعية، ونسبة البطالة، ومدة الطريق للشغل."
            ],
            [
              "Was legen Gesetze fest?",
              "Wie viel Anspruch man auf Urlaub oder Elternzeit hat.",
              "القوانين بتحدد إيه؟",
              "مقدار الحق في الإجازة أو الإجازة الوالدية."
            ],
            [
              "Welches Problem kann ein erster Platz im Ranking bringen?",
              "Viele Menschen ziehen in die Stadt, und die Mieten steigen.",
              "إيه المشكلة اللي ممكن يسببها المركز الأول في التصنيف؟",
              "ناس كتير تنتقل للمدينة، والإيجارات تزيد."
            ],
            [
              "Was kann man laut Petra Lang nicht messen?",
              "Die Atmosphäre in einem Viertel, die Freundlichkeit der Nachbarn und das Gefühl, zu Hause zu sein.",
              "حسب بيترا لانغ، إيه اللي ما ينفعش نقيسه؟",
              "أجواء الحي ولطف الجيران والإحساس إنك في بيتك."
            ]
          ],
          "titleAr": "إيه اللي يخلّي المدينة مناسبة للعيش؟",
          "kindAr": "مقال في جريدة"
        },
        {
          "kind": "Blog",
          "title": "Drei Tage in Bern",
          "text": "Hallo ihr Lieben! Letztes Wochenende war ich zum ersten Mal in Bern, der Hauptstadt der Schweiz. Viele Leute denken bei der Schweiz zuerst an Zürich oder Genf, aber ich muss sagen: Bern hat mir fast noch besser gefallen.<br><br>Am Freitag habe ich einen Stadtbummel durch die Altstadt gemacht, die zum UNESCO-Welterbe gehört. Die Gassen sind schmal, die Fassaden der alten Häuser sind aus grau-grünem Sandstein, und überall gibt es Lauben. Das sind lange Arkaden, wo man auch bei Regen gemütlich shoppen kann. Mittendrin steht das Wahrzeichen der Stadt, der Zytglogge, ein alter Turm mit einer berühmten Uhr. Zu jeder vollen Stunde warten dort Touristen auf die kleinen Figuren, die sich bewegen.<br><br>Am Samstag bin ich auf den Turm des Berner Münsters gestiegen. Mehr als 250 Stufen! Aber der Ausblick auf die roten Dächer und den Fluss war fantastisch. Die Aare fließt in einem großen Bogen um die Altstadt herum. Im Sommer springen die Einheimischen in den Fluss und lassen sich vom Wasser durch die Stadt tragen. Das war mir allerdings zu kalt!<br><br>Am Sonntag wollte ich die Stadt von oben sehen. Wer keine Lust hat zu wandern, kann mit der Bahn auf den Gurten, den Hausberg von Bern, rauffahren. Dort oben, fern vom Lärm der Stadt, habe ich in der Sonne gepicknickt.<br><br>Noch ein Tipp: Nehmt euch ein Velo, so heißt das Fahrrad hier! Damit kann man ganz entspannt durch die Stadt rollen. Und wer lieber mit dem Bus fährt, braucht ein Billett. Bis bald, eure Nora",
          "ar": "أهلًا يا أعزائي! في نهاية الأسبوع الماضي كنت لأول مرة في برن، عاصمة سويسرا. كثير من الناس يفكرون عند ذكر سويسرا في زيورخ أو جنيف أولًا، لكن يجب أن أقول: برن أعجبتني تقريبًا أكثر.<br><br>يوم الجمعة قمت بجولة تمشية في المدينة القديمة، التي تنتمي إلى التراث العالمي لليونسكو. الأزقة ضيقة، وواجهات البيوت القديمة من الحجر الرملي الرمادي المائل للأخضر، وفي كل مكان توجد «لاوبن». وهي ممرات طويلة بأقواس يمكن فيها التسوق براحة حتى في المطر. وفي قلب المدينة يقف رمزها، «تسيتغلوغه»، وهو برج قديم به ساعة مشهورة. عند كل ساعة كاملة ينتظر السياح هناك التماثيل الصغيرة التي تتحرك.<br><br>يوم السبت صعدت إلى برج كاتدرائية برن. أكثر من 250 درجة! لكن المنظر على الأسطح الحمراء والنهر كان رائعًا. نهر الآره يجري في قوس كبير حول المدينة القديمة. في الصيف يقفز أهل البلد في النهر ويتركون المياه تحملهم عبر المدينة. لكن ذلك كان باردًا جدًا بالنسبة لي!<br><br>يوم الأحد أردت أن أرى المدينة من فوق. من لا يرغب في المشي يمكنه أن يصعد بالقطار إلى جبل غورتن، جبل برن القريب منها. وهناك في الأعلى، بعيدًا عن ضوضاء المدينة، عملت نزهة وأكلت في الشمس.<br><br>نصيحة أخرى: خذوا «فيلو»، هكذا يسمّون الدراجة هنا! بها يمكن التجول في المدينة براحة تامة. ومن يفضل ركوب الأتوبيس يحتاج إلى «بيليه»، أي تذكرة. إلى اللقاء قريبًا، صديقتكم نورا",
          "questions": [
            [
              "Was ist der Zytglogge?",
              "Ein alter Turm mit einer berühmten Uhr und das Wahrzeichen von Bern.",
              "إيه هو تسيتغلوغه؟",
              "برج قديم بساعة شهيرة، وهو معلم برن المميز."
            ],
            [
              "Was sind Lauben?",
              "Lange Arkaden, wo man auch bei Regen gemütlich shoppen kann.",
              "إيه هي Lauben؟",
              "ممرات طويلة مسقوفة بأقواس ممكن تتسوق فيها براحة حتى وقت المطر."
            ],
            [
              "Was machen die Einheimischen im Sommer in der Aare?",
              "Sie springen in den Fluss und lassen sich vom Wasser durch die Stadt tragen.",
              "السكان المحليون بيعملوا إيه في نهر آره صيفًا؟",
              "بينطّوا في النهر ويسيبوا الميّه تحملهم عبر المدينة."
            ],
            [
              "Wie kommt man auf den Gurten, wenn man nicht wandern will?",
              "Man kann mit der Bahn rauffahren.",
              "إزاي نطلع غورتن لو مش عايزين نمشي؟",
              "ممكن نطلع بالقطار."
            ],
            [
              "Was bedeuten „Velo“ und „Billett“?",
              "Velo ist das Schweizer Wort für Fahrrad, Billett das Wort für Fahrkarte.",
              "«Velo» و«Billett» معناهم إيه؟",
              "Velo كلمة سويسرية بمعنى دراجة، وBillett بمعنى تذكرة سفر."
            ]
          ],
          "titleAr": "ثلاث أيام في برن",
          "kindAr": "مدوّنة"
        }
      ],
      "grammar": [
        {
          "t": "Artikelwörter als Pronomen",
          "tAr": "أدوات زي ein و kein و mein كضماير",
          "body": "<p>Wenn man ein Nomen nicht wiederholen will, benutzt man <b>ein-, kein-, mein-</b> als Pronomen. Die Formen sind wie beim Artikelwort, aber im Nominativ maskulin heißt es <b>einer</b>, im Nominativ und Akkusativ neutral <b>eins</b>. Im Plural sagt man positiv <b>welche</b>.</p><div class=\"ar\">لما متحبش تكرر الاسم، بتستخدم einer / eins / eine / welche بدل الاسم. خلي بالك: المذكر في الـNominativ بيبقى einer، والمحايد بيبقى eins، والجمع الإيجابي بيبقى welche.</div><div class=\"exbox\">Bist du ein Landmensch? – Ja, ich bin <b>einer</b>.<br>Hast du ein Auto? – Nein, ich habe <b>keins</b>.<br>Ist das dein Haus? – Ja, das ist <b>meins</b>.<br>Interessante Leute? Hier trifft man immer <b>welche</b>.</div>"
        },
        {
          "t": "irgendein, irgendeine, irgendwelche",
          "tAr": "irgendein يعني «أي واحد»",
          "body": "<p><b>irgendein/irgendeine</b> bedeutet: Es ist nicht wichtig oder nicht bekannt, welche Person oder Sache. Im Singular hat es die Endungen von <b>ein/eine</b>, im Plural sagt man <b>irgendwelche</b>. Als Pronomen: <b>irgendeiner, irgendeins, irgendeine</b>.</p><div class=\"ar\">irgendein معناها «أي واحد، مش فارقة». في المفرد بتتصرف زي ein، وفي الجمع بنقول irgendwelche. ولو استخدمتها لوحدها من غير اسم بتبقى irgendeiner / irgendeins.</div><div class=\"exbox\">Wir finden schon <b>irgendein</b> Café.<br>Gibt es hier <b>irgendwelche</b> Cafés?<br>Ein Café? Wir finden bestimmt <b>irgendeins</b>.</div>"
        },
        {
          "t": "Adjektive als Nomen",
          "tAr": "الصفات اللي بتبقى أسماء",
          "body": "<p>Viele Adjektive und Partizipien kann man als Nomen benutzen: <b>der Obdachlose, die Angestellte, die Verletzten</b>. Man schreibt sie groß, aber sie haben <b>die gleiche Endung wie Adjektive</b> vor einem Nomen.</p><div class=\"ar\">صفات كتير بتتحول لأسماء وبتتكتب بحرف كبير، بس نهايتها بتتغير زي الصفة بالظبط حسب الأداة والحالة: der Bekannte بس ein Bekannter.</div><div class=\"exbox\">der obdachlose Mann → <b>der Obdachlose</b> / <b>ein Obdachloser</b><br>die angestellte Bäckerin → <b>die Angestellte</b> / <b>eine Angestellte</b><br>Ich habe mit einer <b>Verwandten</b> gesprochen.</div>"
        },
        {
          "t": "Relativsätze mit was und wo",
          "tAr": "جمل الصلة بـ was و wo",
          "body": "<p><b>was</b> bezieht sich auf ganze Sätze oder auf Pronomen wie <b>alles, etwas, nichts, vieles, das</b>. <b>wo</b> bezieht sich auf Ortsangaben. Das Verb steht am Ende.</p><div class=\"ar\">was بتستخدمها بعد alles / etwas / nichts / das أو لما ترجع على الجملة كلها. و wo للأماكن. والفعل بيروح آخر الجملة زي أي جملة جانبية.</div><div class=\"exbox\">Hier gibt es viele Parks, <b>was</b> ich toll finde.<br>Das Wetter ist nichts, <b>was</b> für Rankings wichtig ist.<br>Hamburg ist eine Stadt, <b>wo</b> ich gerne wohnen würde.</div>"
        }
      ],
      "redemittel": [
        {
          "cat": "Über das Leben in der Stadt sprechen",
          "catAr": "تتكلم عن الحياة في المدينة",
          "items": [
            {
              "de": "Ich finde eine schöne Fußgängerzone wichtig.",
              "ar": "أنا شايف إن منطقة مشاة حلوة حاجة مهمة."
            },
            {
              "de": "Hier ist Tag und Nacht etwas los.",
              "ar": "هنا فيه حاجات بتحصل ليل ونهار."
            },
            {
              "de": "Mir ist es in der Stadt zu laut und stressig.",
              "ar": "المدينة بالنسبالي دوشة ومتعبة أوي."
            },
            {
              "de": "In der Stadt kann ich leben, wie ich will.",
              "ar": "في المدينة أقدر أعيش زي ما أنا عايز."
            },
            {
              "de": "Auf dem Land kennt jeder jeden.",
              "ar": "في الريف كل الناس عارفة بعض."
            },
            {
              "de": "Ein Haus mit Garten könnte ich mir in der Stadt nicht leisten.",
              "ar": "بيت بجنينة مكنتش هقدر أتحمل تمنه في المدينة."
            },
            {
              "de": "Ein großer Vorteil / Nachteil ist, dass ...",
              "ar": "ميزة / عيب كبير إن ..."
            },
            {
              "de": "Ich kann mir kein anderes Leben vorstellen.",
              "ar": "مش قادر أتخيل حياة تانية."
            }
          ]
        },
        {
          "cat": "Etwas näher beschreiben",
          "catAr": "توصف حاجة بالتفصيل",
          "items": [
            {
              "de": "Ich möchte in einer Stadt wohnen, wo ...",
              "ar": "عايز أسكن في مدينة فيها ..."
            },
            {
              "de": "Ein schöner Ort ist für mich ein Ort, wo ...",
              "ar": "المكان الحلو بالنسبالي هو المكان اللي ..."
            },
            {
              "de": "Ich finde alles interessant, was ...",
              "ar": "أنا بلاقي كل حاجة ... مثيرة للاهتمام."
            },
            {
              "de": "In meiner Stadt gibt es nichts, was ...",
              "ar": "في مدينتي مفيش حاجة ..."
            },
            {
              "de": "Viel Kultur ist etwas, was eine Stadt attraktiv macht.",
              "ar": "الثقافة الكتير حاجة بتخلي المدينة جذابة."
            },
            {
              "de": "Hier gibt es viele Parks, was ich toll finde.",
              "ar": "هنا فيه جناين كتير، وده شيء بحبه جدًا."
            }
          ]
        },
        {
          "cat": "Auf Standpunkte eingehen",
          "catAr": "ترد على آراء الآخرين",
          "items": [
            {
              "de": "Das ist nur ein Aspekt. Man muss auch daran denken, dass ...",
              "ar": "دي ناحية واحدة بس. لازم نفكر كمان إن ..."
            },
            {
              "de": "Wir müssen da auf mehrere Aspekte achten: Erstens ..., zweitens ... und drittens ...",
              "ar": "لازم ناخد بالنا من كذا حاجة: أولًا ...، تانيًا ... وتالتًا ..."
            },
            {
              "de": "Das sind interessante Punkte, aber ... fehlt meiner Meinung nach noch.",
              "ar": "دي نقط مهمة، بس في رأيي لسه ناقص ..."
            },
            {
              "de": "Wir dürfen aber nicht außer Acht lassen, dass ...",
              "ar": "بس مينفعش ننسى إن ..."
            },
            {
              "de": "Sie vergessen aber, dass ...",
              "ar": "بس حضرتك ناسي إن ..."
            },
            {
              "de": "Was ... gesagt hat, stimmt (nicht ganz).",
              "ar": "اللي قاله ... صح (مش أوي)."
            }
          ]
        },
        {
          "cat": "In einer Diskussion vermitteln",
          "catAr": "تتوسط في نقاش",
          "items": [
            {
              "de": "Ich glaube, Sie sehen nur eine Seite. Wichtig ist auch, was ... gesagt hat.",
              "ar": "أعتقد إن حضرتك شايف ناحية واحدة بس. اللي قاله ... مهم برضه."
            },
            {
              "de": "Haben Sie auch ein konkretes Beispiel dafür?",
              "ar": "عند حضرتك مثال واضح على كده؟"
            },
            {
              "de": "Welche Lösung schlagen Sie vor?",
              "ar": "إيه الحل اللي حضرتك بتقترحه؟"
            },
            {
              "de": "Ich denke, Sie haben beide (zum Teil) recht.",
              "ar": "أنا شايف إن انتو الاتنين معاكم حق (لحد ما)."
            },
            {
              "de": "Da gebe ich ... recht.",
              "ar": "في النقطة دي أنا موافق ... ."
            },
            {
              "de": "Lassen Sie ... bitte ausreden.",
              "ar": "من فضلك سيب ... يكمّل كلامه."
            },
            {
              "de": "Sie wurden unterbrochen. Was wollten Sie noch sagen?",
              "ar": "حضرتك اتقاطعت. كنت عايز تقول إيه كمان؟"
            }
          ]
        },
        {
          "cat": "Briefe und E-Mails schreiben: informell",
          "catAr": "تكتب جواب أو إيميل لصاحبك (غير رسمي)",
          "items": [
            {
              "de": "Liebe Anna, / Lieber Tim, / Hallo Sara,",
              "ar": "عزيزتي آنا، / عزيزي تيم، / أهلًا سارة،"
            },
            {
              "de": "ich freue mich sehr, dass du mich bald besuchen kommst.",
              "ar": "أنا مبسوط جدًا إنك جاي تزورني قريب."
            },
            {
              "de": "Ich freue mich schon darauf, dir meine Stadt zu zeigen.",
              "ar": "مستني أوريك مدينتي."
            },
            {
              "de": "Hoffentlich gefallen dir die Vorschläge.",
              "ar": "يا رب الاقتراحات تعجبك."
            },
            {
              "de": "Bis bald!",
              "ar": "أشوفك قريب!"
            },
            {
              "de": "Viele Grüße",
              "ar": "تحياتي"
            }
          ]
        },
        {
          "cat": "Briefe und E-Mails schreiben: formell",
          "catAr": "تكتب جواب أو إيميل رسمي",
          "items": [
            {
              "de": "Sehr geehrter Herr Weber, / Sehr geehrte Frau Lundin,",
              "ar": "السيد فيبر المحترم، / السيدة لوندين المحترمة،"
            },
            {
              "de": "bald kommen Sie zu uns nach Köln.",
              "ar": "قريب حضرتك جاي عندنا كولونيا."
            },
            {
              "de": "Meine Kollegen und ich freuen uns schon darauf, Sie kennenzulernen.",
              "ar": "أنا وزمايلي مستنيين نتعرف على حضرتك."
            },
            {
              "de": "Gerne zeigen wir Ihnen einige Sehenswürdigkeiten.",
              "ar": "يسعدنا نوري حضرتك شوية من المعالم السياحية."
            },
            {
              "de": "Hoffentlich haben Sie Lust bekommen, die Stadt kennenzulernen.",
              "ar": "نتمنى يكون عندك رغبة تتعرف على المدينة."
            },
            {
              "de": "Wir freuen uns, Sie bald hier zu begrüßen.",
              "ar": "هيسعدنا نرحب بحضرتك هنا قريب."
            },
            {
              "de": "Mit freundlichen Grüßen",
              "ar": "مع أطيب التحيات"
            }
          ]
        }
      ],
      "speaking": {
        "questions": [
          {
            "de": "Was sind die Vorteile vom Leben in der Stadt?",
            "ar": "إيه مميزات العيشة في المدينة؟"
          },
          {
            "de": "Was ist auf dem Land besser als in der Stadt?",
            "ar": "إيه الحاجات اللي أحسن في الريف عن المدينة؟"
          },
          {
            "de": "Was gefällt Ihnen an Ihrem Wohnort gut, was überhaupt nicht?",
            "ar": "إيه اللي عاجبك في المكان اللي ساكن فيه، وإيه اللي مش عاجبك خالص؟"
          },
          {
            "de": "Was macht für Sie eine Stadt lebenswert?",
            "ar": "إيه اللي بيخلي المدينة بالنسبالك تستاهل العيشة فيها؟"
          },
          {
            "de": "Wo würden Sie später gern leben? Warum?",
            "ar": "تحب تعيش فين بعدين؟ وليه؟"
          }
        ],
        "model": "Ich wohne in Kairo, und ich bin eindeutig ein Stadtmensch. Hier ist Tag und Nacht etwas los, was ich sehr mag. Wenn ich abends Lust habe, finde ich immer irgendein Café oder irgendein Konzert. Natürlich gibt es auch Nachteile: Der Verkehr ist schrecklich, und der Lärm ist manchmal zu viel. Auf dem Land ist es ruhiger, und die Luft ist sauberer, aber dort gibt es kaum Freizeitangebote. Für mich ist eine Stadt lebenswert, wenn es genug Grünflächen und gute Busse und Bahnen gibt. Später möchte ich gern in einer Stadt am Meer wohnen, wo man nach der Arbeit am Ufer spazieren gehen kann.",
        "modelAr": "أنا ساكن في القاهرة، وأكيد أنا ابن مدينة. هنا فيه حاجات بتحصل ليل ونهار، وده شيء بحبه جدًا. لو عايز أخرج بالليل، دايمًا بلاقي أي كافيه أو أي حفلة. طبعًا فيه عيوب: المرور فظيع، والدوشة ساعات بتبقى كتير أوي. في الريف الدنيا أهدى والهوا أنضف، بس هناك مفيش تقريبًا أنشطة لوقت الفراغ. بالنسبالي المدينة تستاهل العيشة فيها لو فيها مساحات خضرا كفاية وأتوبيسات وقطارات كويسة. بعدين نفسي أعيش في مدينة على البحر، أقدر أتمشى فيها على الشط بعد الشغل."
      },
      "quiz": [
        {
          "q": "Hast du ein Fahrrad? – Nein, ich habe ___.",
          "o": [
            "keins",
            "keinen",
            "kein"
          ],
          "a": 0,
          "fb": "das Fahrrad, Akkusativ: keins (Pronomen, neutral).",
          "fbAr": "Fahrrad محايد، والضمير منه في الـAkkusativ بيبقى keins مش kein.",
          "qAr": "عندك عجلة؟ لا، ما عنديش ___ .",
          "oAr": [
            "ولا واحد أو لا شيء؛ بصيغ مختلفة للنفي",
            "ولا واحد أو لا شيء؛ بصيغ مختلفة للنفي",
            "ولا واحد أو لا شيء؛ بصيغ مختلفة للنفي"
          ]
        },
        {
          "q": "Gibt es hier Cafés? – Ja, gleich da drüben gibt es ___.",
          "o": [
            "eine",
            "welche",
            "einen"
          ],
          "a": 1,
          "fb": "Plural, positiv: welche.",
          "fbAr": "Cafés جمع، والجمع الإيجابي بيبقى welche.",
          "qAr": "فيه كافيهات هنا؟ أيوه، هناك قريب فيه ___ .",
          "oAr": [
            "واحد أو واحدة؛ حسب الجنس النحوي والإعراب",
            "بعض؛ ضمير للجمع",
            "واحد أو واحدة؛ حسب الجنس النحوي والإعراب"
          ]
        },
        {
          "q": "Kennst du ___ gutes Restaurant in der Altstadt?",
          "o": [
            "irgendeine",
            "irgendwelche",
            "irgendein"
          ],
          "a": 2,
          "fb": "das Restaurant, Akkusativ: irgendein (wie ein).",
          "fbAr": "Restaurant محايد ومفرد، فبنقول irgendein زي ein بالظبط.",
          "qAr": "تعرف ___ مطعم كويس في المدينة القديمة؟",
          "oAr": [
            "أي واحد أو بعض غير محددين؛ بصيغ مختلفة",
            "أي واحد أو بعض غير محددين؛ بصيغ مختلفة",
            "أي واحد أو بعض غير محددين؛ بصيغ مختلفة"
          ]
        },
        {
          "q": "Ein ___ von mir arbeitet bei der Stadt.",
          "o": [
            "Bekannter",
            "Bekannte",
            "Bekannten"
          ],
          "a": 0,
          "fb": "ein + Nominativ maskulin: ein Bekannter (wie ein netter Mann).",
          "fbAr": "بعد ein في المذكر Nominativ الصفة بتاخد -er: ein Bekannter.",
          "qAr": "واحد ___ منّي بيشتغل في البلدية.",
          "oAr": [
            "شخص من المعارف؛ بصيغ مختلفة للاسم",
            "شخص من المعارف؛ بصيغ مختلفة للاسم",
            "شخص من المعارف؛ بصيغ مختلفة للاسم"
          ]
        },
        {
          "q": "Ich habe gestern mit einer ___ telefoniert.",
          "o": [
            "Verwandte",
            "Verwandten",
            "Verwandter"
          ],
          "a": 1,
          "fb": "mit + Dativ, feminin: einer Verwandten.",
          "fbAr": "mit بتاخد Dativ، وبعد einer الصفة بتاخد -en: einer Verwandten.",
          "qAr": "امبارح اتكلمت بالتليفون مع ___ .",
          "oAr": [
            "قريب أو قريبة؛ بصيغ مختلفة للاسم",
            "قريب أو قريبة؛ بصيغ مختلفة للاسم",
            "قريب أو قريبة؛ بصيغ مختلفة للاسم"
          ]
        },
        {
          "q": "Hier gibt es viele Parks, ___ ich toll finde.",
          "o": [
            "das",
            "die",
            "was"
          ],
          "a": 2,
          "fb": "was bezieht sich auf den ganzen Satz.",
          "fbAr": "was هنا راجعة على الجملة كلها، مش على كلمة واحدة.",
          "qAr": "هنا فيه حدائق كتير، ___ شايفها رائعة.",
          "oAr": [
            "أداة معرفة أو وصل بحسب السياق والجنس النحوي",
            "أداة معرفة أو وصل بحسب السياق والجنس النحوي",
            "ما أو الذي"
          ]
        },
        {
          "q": "Hamburg ist eine Stadt, ___ ich gerne wohnen würde.",
          "o": [
            "wo",
            "was",
            "wohin"
          ],
          "a": 0,
          "fb": "wo bezieht sich auf einen Ort.",
          "fbAr": "wo بنستخدمها مع الأماكن: المدينة اللي (فيها) أحب أسكن.",
          "qAr": "هامبورغ مدينة ___ أحب أسكن فيها.",
          "oAr": [
            "حيث أو أين",
            "ما أو الذي",
            "إلى أين"
          ]
        },
        {
          "q": "Lassen Sie Frau Berg bitte ___! Sie war noch nicht fertig.",
          "o": [
            "unterbrechen",
            "ausreden",
            "eingehen"
          ],
          "a": 1,
          "fb": "jemanden ausreden lassen = zu Ende sprechen lassen.",
          "fbAr": "ausreden lassen يعني تسيب الشخص يكمّل كلامه للآخر.",
          "qAr": "سيب السيدة بيرغ ___ لو سمحت! لسه ما خلصتش.",
          "oAr": [
            "يقاطع",
            "يكمل كلامه",
            "يتناول أو يرد على"
          ]
        }
      ],
      "badgesAr": [
        "كلمات الأدوات المستخدمة كضمائر",
        "أي واحد أو بعض غير محددين",
        "صفات تُستخدم كأسماء",
        "جمل الوصل بـ was وwo",
        "المدينة والريف"
      ]
    },
    "12": {
      "intro": "In diesem Kapitel geht es um Geld, Banken und die Globalisierung. Sie lernen, Bankgespräche zu führen, Argumente zu nennen und über ehrliches Verhalten zu diskutieren. In der Grammatik üben Sie Sätze mit je ..., desto/umso ... und Partizipien als Adjektive.",
      "introAr": "الفصل ده كله عن الفلوس والبنوك والعولمة. هتتعلم إزاي تتكلم في البنك، وتقول حججك مع أو ضد حاجة، وتتناقش عن التصرف الأمين. وفي القواعد هتتدرب على جمل je ..., desto/umso ... (كل ما ... كل ما ...) واستخدام اسم الفاعل واسم المفعول (Partizip I و II) كصفات.",
      "badges": [
        "je ..., desto/umso ...",
        "Partizip I als Adjektiv",
        "Partizip II als Adjektiv",
        "Verben mit hin- und her-",
        "Geld und Banken",
        "Globalisierung"
      ],
      "goals": [
        {
          "de": "Über Kosten und Geld sprechen und schreiben",
          "ar": "تتكلم وتكتب عن التكاليف والفلوس"
        },
        {
          "de": "Bankgespräche verstehen und führen",
          "ar": "تفهم وتعمل محادثات في البنك"
        },
        {
          "de": "Informationen auf einer Webseite und in einer Broschüre verstehen",
          "ar": "تفهم معلومات على موقع بنك أو في كتيّب إرشادات"
        },
        {
          "de": "Nach Tätigkeiten fragen: Hast du das Formular schon ausgefüllt?",
          "ar": "تسأل حد عمل حاجة ولا لأ: «ملّيت الاستمارة؟»"
        },
        {
          "de": "Argumente für und gegen die Globalisierung verstehen und äußern",
          "ar": "تفهم وتقول حجج مع وضد العولمة"
        },
        {
          "de": "Personen, Dinge und Situationen mit Partizipien genauer beschreiben",
          "ar": "توصف الناس والحاجات والمواقف بدقة باستخدام الـ Partizip"
        },
        {
          "de": "Über Verhalten diskutieren und eine schwierige Situation beschreiben",
          "ar": "تتناقش عن تصرفات الناس وتوصف موقف صعب"
        },
        {
          "de": "Einen informativen Text verstehen und über ein Hilfsprojekt berichten",
          "ar": "تفهم نص معلوماتي وتحكي عن مشروع خيري"
        },
        {
          "de": "Sätze mit je ..., desto/umso ... bilden",
          "ar": "تعمل جمل بـ je ..., desto/umso ... (كل ما ... كل ما ...)"
        }
      ],
      "readings": [
        {
          "kind": "Blog",
          "title": "Mein erstes Konto in Deutschland",
          "text": "Als ich vor drei Monaten zum Studium nach Leipzig gekommen bin, hatte ich nur etwas Bargeld und meine ägyptische Kreditkarte dabei. Schnell habe ich gemerkt: Ohne deutsches Konto geht hier fast nichts. Mein Vermieter wollte die Miete per Überweisung, die Uni brauchte meine IBAN und auch der Handyvertrag funktionierte nur mit einem Konto.<br><br>Also bin ich zu einer Bank in meiner Nähe gegangen. Die Bankangestellte war sehr freundlich und hat mir die Konditionen genau erklärt. Für Studenten fällt keine Kontoführungsgebühr an, aber für jede Überweisung am Schalter muss man eine kleine Gebühr bezahlen. „Je mehr Sie online erledigen, desto weniger zahlen Sie“, hat sie gesagt. Für die Kontoeröffnung brauchte ich meinen Pass, die Meldebescheinigung und ein ausgefülltes Formular. Nach einer Woche kam die Bankkarte und in einem zweiten Brief die Geheimzahl.<br><br>Heute erledige ich fast alle Bankgeschäfte mit Online-Banking. Ich logge mich mit meinem Benutzernamen und meinem Passwort in die App ein und sehe sofort meinen Kontostand. Die Miete bezahle ich per Dauerauftrag, so kann ich die Zahlung nie versäumen. Am besten gefällt mir die Fotoüberweisung: Ich fotografiere die Rechnung, und die erkannten Daten werden automatisch eingetragen.<br><br>Nur einmal hatte ich richtig Stress: Ich hatte mein Konto überzogen, weil ich die Kaution für mein Zimmer bezahlen musste. Die Zinsen dafür waren ziemlich hoch! Seitdem schaue ich jede Woche auf meinen Kontoauszug und notiere alle Ausgaben. Mein Tipp für alle neuen Studenten: Vergleicht die Banken, bevor ihr ein Konto eröffnet. Je früher ihr euch informiert, desto besser! – Karim, 23, aus Kairo",
          "ar": "لما جيت لايبزيغ من تلات شهور علشان أدرس، ماكانش معايا غير شوية فلوس كاش وبطاقة الائتمان المصرية بتاعتي. وبسرعة لاحظت إن من غير حساب ألماني تقريبًا مفيش حاجة بتمشي هنا. صاحب الشقة كان عايز الإيجار بتحويل بنكي، والجامعة كانت محتاجة رقم الـ IBAN بتاعي، وكمان عقد الموبايل ماكانش ينفع غير بحساب في البنك.<br><br>فرحت بنك قريب مني. موظفة البنك كانت لطيفة جدًا وشرحتلي الشروط بالتفصيل. الطلبة مابيدفعوش رسوم إدارة حساب، بس كل تحويل بتعمله عند الشباك عليه رسم صغير. وقالتلي: «كل ما تخلّص حاجات أكتر أونلاين، كل ما تدفع أقل». علشان أفتح الحساب كنت محتاج الباسبور وشهادة تسجيل السكن واستمارة متملّية. وبعد أسبوع وصلت بطاقة البنك، والرقم السري جه في جواب تاني.<br><br>النهارده بخلّص تقريبًا كل معاملاتي البنكية أونلاين. بسجّل دخول في التطبيق باسم المستخدم وكلمة السر وبشوف رصيدي على طول. الإيجار بدفعه بأمر تحويل دائم، فعمري ما هنسى أدفع في الميعاد. وأكتر حاجة عاجباني هي التحويل بالصورة: بصوّر الفاتورة، والبيانات اللي اتعرفت عليها بتتكتب لوحدها.<br><br>مرة واحدة بس اتوترت جامد: كنت سحبت على المكشوف من حسابي لأني كان لازم أدفع التأمين بتاع أوضتي. والفوايد كانت عالية جدًا! ومن ساعتها ببص على كشف الحساب كل أسبوع وبكتب كل مصاريفي. نصيحتي لكل الطلبة الجداد: قارنوا بين البنوك قبل ما تفتحوا حساب. وكل ما تسألوا بدري، كل ما يبقى أحسن! – كريم، ٢٣ سنة، من القاهرة",
          "questions": [
            [
              "Warum brauchte Karim ein deutsches Konto?",
              "Weil der Vermieter eine Überweisung wollte, die Uni seine IBAN brauchte und der Handyvertrag nur mit Konto funktionierte.",
              "ليه كريم كان محتاج حسابًا ألمانيًا؟",
              "لأن صاحب البيت طلب تحويلًا، والجامعة احتاجت IBAN، وعقد المحمول محتاج حسابًا."
            ],
            [
              "Was brauchte er für die Kontoeröffnung?",
              "Seinen Pass, die Meldebescheinigung und ein ausgefülltes Formular.",
              "كان محتاج إيه لفتح الحساب؟",
              "جواز سفره وشهادة تسجيل السكن واستمارة مكتملة."
            ],
            [
              "Wie bezahlt Karim seine Miete?",
              "Per Dauerauftrag.",
              "كريم بيدفع الإيجار إزاي؟",
              "بأمر تحويل دائم."
            ],
            [
              "Wie funktioniert die Fotoüberweisung?",
              "Er fotografiert die Rechnung und die Daten werden automatisch eingetragen.",
              "التحويل بصورة الفاتورة بيشتغل إزاي؟",
              "بيصوّر الفاتورة وبتدخل البيانات تلقائيًا."
            ],
            [
              "Warum hatte Karim einmal Stress?",
              "Er hatte sein Konto für die Kaution überzogen und musste hohe Zinsen bezahlen.",
              "ليه كريم اتوتر مرة؟",
              "كان سحب على المكشوف لدفع التأمين، واضطر يدفع فوائد عالية."
            ]
          ],
          "titleAr": "أول حساب بنكي لي في ألمانيا",
          "kindAr": "مدوّنة"
        },
        {
          "kind": "Forum",
          "title": "Profitieren wir alle von der Globalisierung?",
          "text": "Nadia, 29, Ingenieurin aus Hamburg: Für mich ist die Globalisierung vor allem eine Chance. Ich bin in Alexandria aufgewachsen, habe in Berlin studiert und arbeite heute für eine Firma, die Kunden auf vier Kontinenten hat. Ohne den internationalen Austausch wäre mein Leben ganz anders. Positiv ist auch, dass sich neue Ideen heute sehr schnell verbreiten. In der Forschung arbeiten Wissenschaftler aus vielen Ländern zusammen, zum Beispiel an neuen Medikamenten. Außerdem ist das Produktangebot riesig, und durch die wachsende Konkurrenz sinken oft die Preise. Das ist doch ein großer Vorteil für uns Verbraucher. Pauschal kann man sagen: Je offener die Welt ist, desto mehr Möglichkeiten haben wir.<br><br>Felix, 41, Tischler aus Kassel: Ich sehe die Globalisierung eher kritisch. Mein Onkel hatte eine kleine Möbelfabrik. Vor zehn Jahren musste er schließen, weil die Konkurrenz auf dem Weltmarkt zu groß war. Viele große Firmen haben ihre Produktion in Länder verlegt, in denen die Menschen unter schlechten Bedingungen für sehr wenig Geld arbeiten. Billige Produkte sind schön, aber wer bezahlt den wirklichen Preis? Man muss auch bedenken, dass viele Waren um die halbe Welt transportiert werden. Das ist aus meiner Sicht ein echter Irrsinn, denn die Umwelt leidet darunter. Es ist wirklich sehr problematisch, dass die Unterschiede zwischen Arm und Reich immer größer werden. Man sollte sich überlegen, ob wir nicht lieber regionale Produkte kaufen sollten, auch wenn sie etwas mehr kosten. Je mehr Menschen das tun, umso besser geht es den kleinen Firmen in unserer Region.",
          "ar": "نادية، ٢٩ سنة، مهندسة من هامبورج: بالنسبة لي العولمة قبل أي حاجة فرصة. أنا اتربيت في إسكندرية، ودرست في برلين، وبشتغل النهارده في شركة عندها عملاء في أربع قارات. من غير التبادل الدولي كانت حياتي هتبقى مختلفة خالص. وكمان من الحاجات الإيجابية إن الأفكار الجديدة بتنتشر بسرعة جدًا النهارده. في البحث العلمي علماء من دول كتير بيشتغلوا مع بعض، مثلًا على أدوية جديدة. وكمان تشكيلة المنتجات ضخمة، وبسبب المنافسة اللي بتزيد الأسعار غالبًا بتنزل. وده طبعًا ميزة كبيرة لينا كمستهلكين. وبشكل عام ممكن نقول: كل ما العالم يبقى مفتوح أكتر، كل ما يبقى عندنا فرص أكتر.<br><br>فيليكس، ٤١ سنة، نجّار من كاسل: أنا شايف العولمة بنظرة نقدية شوية. خالي كان عنده مصنع موبيليا صغير. من عشر سنين اضطر يقفله، لأن المنافسة في السوق العالمية كانت كبيرة قوي. شركات كبيرة كتير نقلت الإنتاج بتاعها لدول الناس فيها بتشتغل في ظروف وحشة وبفلوس قليلة جدًا. المنتجات الرخيصة حلوة، بس مين اللي بيدفع التمن الحقيقي؟ ولازم كمان ناخد في اعتبارنا إن بضايع كتير بتتنقل نص الكرة الأرضية. وده من وجهة نظري جنون حقيقي، لأن البيئة بتتضرر منه. وفعلًا مشكلة كبيرة إن الفرق بين الغني والفقير بيكبر أكتر وأكتر. لازم نفكر: مش أحسن نشتري منتجات محلية، حتى لو تمنها أغلى شوية؟ وكل ما ناس أكتر يعملوا كده، كل ما الشركات الصغيرة في منطقتنا تبقى أحسن.",
          "questions": [
            [
              "Warum ist die Globalisierung für Nadia eine Chance?",
              "Sie hat in verschiedenen Ländern gelebt und arbeitet für eine internationale Firma.",
              "ليه العولمة فرصة لنادية؟",
              "عاشت في بلاد مختلفة وبتشتغل في شركة دولية."
            ],
            [
              "Welchen Vorteil sieht Nadia in der Forschung?",
              "Wissenschaftler aus vielen Ländern arbeiten zusammen, zum Beispiel an neuen Medikamenten.",
              "نادية شايفة إيه ميزة في البحث العلمي؟",
              "علماء من بلاد كتير بيتعاونوا، مثلًا لتطوير أدوية جديدة."
            ],
            [
              "Was ist mit der Firma von Felix’ Onkel passiert?",
              "Sie musste schließen, weil die Konkurrenz auf dem Weltmarkt zu groß war.",
              "إيه اللي حصل لشركة عم فيليكس؟",
              "اضطرت تقفل لأن المنافسة في السوق العالمية كانت شديدة جدًا."
            ],
            [
              "Warum findet Felix die langen Transportwege schlecht?",
              "Weil die Umwelt darunter leidet.",
              "ليه فيليكس شايف مسافات النقل الطويلة سيئة؟",
              "لأنها بتضر البيئة."
            ],
            [
              "Was schlägt Felix vor?",
              "Man sollte lieber regionale Produkte kaufen, auch wenn sie etwas mehr kosten.",
              "فيليكس بيقترح إيه؟",
              "الأفضل نشتري منتجات محلية، حتى لو أغلى شوية."
            ]
          ],
          "titleAr": "هل كلنا بنستفيد من العولمة؟",
          "kindAr": "منتدى"
        },
        {
          "kind": "Kolumne",
          "title": "Gewissensfrage: Zu viel Wechselgeld",
          "text": "Liebe Frau Berger,<br><br>letzte Woche habe ich in einer Bäckerei mit einem 50-Euro-Schein bezahlt. Erst zu Hause habe ich gemerkt, dass die Verkäuferin mir zu viel Wechselgeld gegeben hatte: Statt 45 Euro waren 65 Euro in meiner Geldbörse. Ich war überrascht und habe mich zuerst gefreut, denn diesen Monat bin ich ziemlich knapp bei Kasse. Die Bäckerei gehört zu einer großen Kette, und 20 Euro sind für so eine Firma doch nur ein geringer Betrag. Niemand hat etwas gemerkt, und eigentlich habe ich ja nicht betrogen. Trotzdem habe ich ein schlechtes Gewissen. Muss ich das Geld zurückbringen?<br>Mona K., Bremen<br><br>Liebe Mona,<br><br>Ihre Frage zeigt schon, dass Ihr Gewissen gut funktioniert! Sie haben recht: Sie haben nicht absichtlich betrogen. Aber jetzt, wo Sie den Fehler kennen, ist die Situation anders. Bedenken Sie bitte: Die Verkäuferin muss am Abend die Kasse zählen. Fehlt Geld, bekommt oft nicht die Firma, sondern die Angestellte Probleme. Vielleicht muss sie den fehlenden Betrag sogar selbst bezahlen. Und je länger Sie warten, desto unangenehmer wird es für Sie beide.<br><br>Ich finde es in Ordnung, wenn man so einen Fehler nicht sofort bemerkt. So ein Verhalten lehne ich aber ab, wenn man das Geld bewusst behält. Mein Rat: Gehen Sie morgen in die Bäckerei und geben Sie das zu viel erhaltene Wechselgeld zurück. Die Verkäuferin wird sich bestimmt freuen, und Sie können wieder ruhig schlafen. Ehrlichkeit kostet manchmal etwas, aber sie lohnt sich fast immer.<br><br>Herzliche Grüße<br>Ihre Sabine Berger",
          "ar": "عزيزتي السيدة بيرجر،<br><br>الأسبوع اللي فات دفعت في مخبز بورقة ٥٠ يورو. ولما رجعت البيت بس لاحظت إن البيّاعة إدتني باقي زيادة: بدل ٤٥ يورو كان في محفظتي ٦٥ يورو. اتفاجئت وفي الأول فرحت، لأني الشهر ده مزنوقة في الفلوس شوية. المخبز تبع سلسلة كبيرة، و٢٠ يورو بالنسبة لشركة زي دي مبلغ صغير خالص. محدش لاحظ حاجة، وأنا في الحقيقة ماغشّيتش حد. ومع ذلك ضميري مأنّبني. هل لازم أرجّع الفلوس؟<br>منى ك.، بريمن<br><br>عزيزتي منى،<br><br>سؤالك نفسه بيبيّن إن ضميرك شغال كويس! عندك حق: إنتي ماغشّيتيش بقصد. بس دلوقتي وإنتي عارفة الغلطة، الموقف بقى مختلف. خدي بالك: البيّاعة لازم تعدّ الخزنة بالليل. ولو في فلوس ناقصة، غالبًا مش الشركة اللي بتتعب، لكن الموظفة. ويمكن كمان تضطر تدفع المبلغ الناقص من جيبها. وكل ما تستني أكتر، كل ما الموضوع يبقى أتقل عليكم إنتو الاتنين.<br><br>أنا شايفة إنه عادي لو الواحد ماخدش باله من غلطة زي دي على طول. بس أنا أرفض التصرف ده لو الواحد خلّى الفلوس معاه وهو عارف. نصيحتي: روحي المخبز بكرة ورجّعي الباقي اللي خدتيه زيادة. البيّاعة أكيد هتفرح، وإنتي هتعرفي تنامي مرتاحة تاني. الأمانة ساعات بتكلّف حاجة، بس تقريبًا دايمًا بتستاهل.<br><br>مع خالص التحيات<br>سابينه بيرجر",
          "questions": [
            [
              "Was hat Mona zu Hause gemerkt?",
              "Dass die Verkäuferin ihr 20 Euro zu viel Wechselgeld gegeben hatte.",
              "منى لاحظت إيه لما رجعت البيت؟",
              "إن البائعة رجّعت لها عشرين يورو زيادة في الباقي."
            ],
            [
              "Warum hat sie sich zuerst gefreut?",
              "Weil sie diesen Monat knapp bei Kasse ist.",
              "ليه فرحت في الأول؟",
              "لأن الفلوس قليلة معاها الشهر ده."
            ],
            [
              "Wer bekommt oft Probleme, wenn in der Kasse Geld fehlt?",
              "Die Verkäuferin, nicht die Firma.",
              "مين غالبًا بيتورّط لما يكون فيه عجز في الخزنة؟",
              "البائعة، مش الشركة."
            ],
            [
              "Welches Verhalten lehnt Frau Berger ab?",
              "Wenn man das Geld bewusst behält.",
              "السيدة بيرغر بترفض أي تصرف؟",
              "الاحتفاظ بالفلوس عن قصد."
            ],
            [
              "Welchen Rat gibt Frau Berger?",
              "Mona soll morgen in die Bäckerei gehen und das Geld zurückgeben.",
              "السيدة بيرغر بتقدّم إيه نصيحة؟",
              "منى تروح المخبز بكرة وترجّع الفلوس."
            ]
          ],
          "titleAr": "سؤال للضمير: باقي زيادة",
          "kindAr": "عمود صحفي"
        },
        {
          "kind": "Zeitungsartikel",
          "title": "Zeit statt Geld: der Tauschring in Bergheim",
          "text": "In der kleinen Stadt Bergheim bezahlt man manche Dienste nicht mit Euro, sondern mit Zeit. Vor acht Jahren hat die Rentnerin Helga Sommer hier einen Tauschring gegründet. Die Idee stammt ursprünglich aus Kanada: Die Mitglieder bieten Tätigkeiten an, die sie gut können, und bekommen dafür Hilfe von anderen. Heute hat der Verein über 120 Mitglieder.<br><br>Das Prinzip ist einfach: Für jede Stunde Arbeit bekommt man eine Gutschrift auf einem „Zeitkonto“. Ob jemand Nachhilfe in Mathe gibt, einen tropfenden Wasserhahn repariert oder den Garten pflegt – jede Stunde ist gleich viel wert. „Bei uns zählt nicht, wie viel jemand verdient, sondern die Zeit, die er schenkt“, erklärt Sommer. Die geleisteten Stunden werden in eine Liste eingetragen. Zusätzlich treffen sich die Mitglieder einmal im Monat im Gemeindehaus.<br><br>Besonders Menschen, die in finanzielle Schwierigkeiten geraten sind, profitieren davon. Der 34-jährige Omar zum Beispiel war nach einem Unfall lange arbeitslos. „Ich hatte kaum Geld, aber viel Zeit“, erzählt er. Er hat für ältere Nachbarn eingekauft und ihnen bei Computerproblemen geholfen. Dafür hat ihm ein pensionierter Lehrer Deutschunterricht gegeben. „Je mehr ich mitgemacht habe, desto mehr Leute habe ich kennengelernt“, sagt Omar. Inzwischen hat er wieder eine Stelle gefunden, aber er bleibt im Tauschring.<br><br>Natürlich gibt es auch Kritik. Manche Mitglieder finden, dass eine Stunde Computerhilfe mehr wert ist als eine Stunde Rasenmähen. Helga Sommer sieht das anders: „Jede Arbeit ist wichtig. Und die entstandenen Freundschaften kann man sowieso nicht mit Geld bezahlen.“ Wer mitmachen möchte, kann sich auf der Webseite des Vereins informieren.",
          "ar": "في مدينة بيرجهايم الصغيرة، فيه خدمات الناس مابيدفعوش تمنها باليورو، لكن بالوقت. من تمان سنين، أسّست هيلجا زومر، وهي ست على المعاش، دائرة لتبادل الخدمات هنا. الفكرة أصلها من كندا: الأعضاء بيعرضوا أعمال بيعرفوا يعملوها كويس، وبياخدوا مقابلها مساعدة من الباقيين. والنهارده الجمعية فيها أكتر من ١٢٠ عضو.<br><br>الفكرة بسيطة: على كل ساعة شغل بتاخد رصيد في «حساب وقت». سواء حد بيدّي دروس تقوية في الرياضيات، أو بيصلّح حنفية بتنقّط، أو بيراعي جنينة – كل ساعة ليها نفس القيمة. وبتشرح زومر: «عندنا مش مهم الواحد بيكسب كام، المهم الوقت اللي بيدّيه». الساعات اللي اتعملت بتتسجّل في قايمة. وكمان الأعضاء بيتقابلوا مرة كل شهر في دار المجتمع المحلي.<br><br>وأكتر ناس بيستفيدوا هما اللي وقعوا في مشاكل مادية. مثلًا عمر، ٣٤ سنة، فضل عاطل عن الشغل فترة طويلة بعد حادثة. وبيحكي: «ماكانش معايا فلوس تقريبًا، بس كان عندي وقت كتير». كان بيشتري حاجات للجيران الكبار في السن وبيساعدهم في مشاكل الكمبيوتر. وفي المقابل، مدرّس على المعاش اداله دروس ألماني. وبيقول عمر: «كل ما شاركت أكتر، كل ما اتعرفت على ناس أكتر». ودلوقتي لقى شغل تاني، بس لسه مكمّل في دائرة التبادل.<br><br>وطبعًا فيه انتقادات كمان. بعض الأعضاء شايفين إن ساعة مساعدة في الكمبيوتر تستاهل أكتر من ساعة قص نجيلة. بس هيلجا زومر شايفة الموضوع بشكل تاني: «كل شغل مهم. والصداقات اللي اتكونت، أصلًا ماتتشتريش بفلوس». واللي عايز يشارك يقدر يعرف معلومات أكتر على موقع الجمعية.",
          "questions": [
            [
              "Woher stammt die Idee des Tauschrings?",
              "Aus Kanada.",
              "فكرة شبكة تبادل الخدمات أصلها منين؟",
              "من كندا."
            ],
            [
              "Wie funktioniert das Zeitkonto?",
              "Für jede Stunde Arbeit bekommt man eine Gutschrift, und jede Stunde ist gleich viel wert.",
              "حساب الوقت بيشتغل إزاي؟",
              "بتاخد رصيدًا لكل ساعة عمل، وكل ساعة لها نفس القيمة."
            ],
            [
              "Warum hat Omar beim Tauschring mitgemacht?",
              "Er war nach einem Unfall arbeitslos und hatte kaum Geld, aber viel Zeit.",
              "ليه عمر شارك في شبكة التبادل؟",
              "كان عاطلًا بعد حادث ومعاه فلوس قليلة لكن وقت كتير."
            ],
            [
              "Was hat Omar für seine Hilfe bekommen?",
              "Deutschunterricht von einem pensionierten Lehrer.",
              "عمر أخد إيه مقابل مساعدته؟",
              "دروس ألماني من مدرس متقاعد."
            ],
            [
              "Welche Kritik gibt es am Tauschring?",
              "Manche finden, dass Computerhilfe mehr wert ist als Rasenmähen.",
              "إيه الانتقاد الموجّه لشبكة التبادل؟",
              "البعض شايف إن المساعدة في الكمبيوتر قيمتها أعلى من قص العشب."
            ]
          ],
          "titleAr": "وقت بدل الفلوس: شبكة تبادل الخدمات في بيرغهايم",
          "kindAr": "مقال في جريدة"
        }
      ],
      "grammar": [
        {
          "t": "Sätze mit je ..., desto/umso ...",
          "tAr": "جمل «كل ما ... كل ما ...»",
          "body": "<p>Mit <b>je ..., desto/umso ...</b> sagt man, dass sich zwei Dinge zusammen verändern. Der Satz mit <b>je</b> ist ein <b>Nebensatz</b> (Verb am Ende), danach kommt <b>desto/umso + Komparativ</b> und direkt das <b>Verb</b>.</p><div class=\"ar\">je + صفة مقارنة (Komparativ) وبعدين الجملة والفعل في الآخر، وبعدها desto أو umso + Komparativ وعلى طول الفعل. يعني: «كل ما ... كل ما ...».</div><div class=\"exbox\"><b>Je</b> öfter man Online-Banking macht, <b>desto</b> leichter <b>wird</b> es.<br><b>Je</b> höher der Kredit <b>ist</b>, <b>umso</b> günstiger <b>sind</b> die Zinsen.<br><b>Je</b> früher, <b>desto</b> lieber!</div>"
        },
        {
          "t": "Partizip II als Adjektiv",
          "tAr": "اسم المفعول (Partizip II) كصفة",
          "body": "<p>Viele <b>Partizipien II</b> kann man wie ein <b>Adjektiv</b> vor ein Nomen stellen. Sie haben eine <b>passive</b> oder <b>abgeschlossene</b> Bedeutung und bekommen die normalen <b>Adjektivendungen</b>.</p><div class=\"ar\">الـ Partizip II (زي überwiesen, gespeichert) ممكن يبقى صفة قبل الاسم، ومعناه إن الحاجة «اتعملت» خلاص. وبياخد نفس نهايات الصفات العادية.</div><div class=\"exbox\">der Betrag, der überwiesen wurde → der <b>überwiesene</b> Betrag<br>eine PIN, die gespeichert wurde → eine <b>gespeicherte</b> PIN<br>Hast du das Formular ausgefüllt? – Ja, hier ist das <b>ausgefüllte</b> Formular.</div>"
        },
        {
          "t": "Partizip I als Adjektiv",
          "tAr": "اسم الفاعل (Partizip I) كصفة",
          "body": "<p>Das <b>Partizip I</b> bildet man so: <b>Infinitiv + d</b> (steigen → steigend). Es beschreibt etwas, das <b>gerade passiert</b> (aktiv, gleichzeitig), und wird wie ein Adjektiv dekliniert.</p><div class=\"ar\">الـ Partizip I = المصدر + d. معناه إن الحاجة «بتحصل دلوقتي» أو الشخص «بيعمل» الحاجة. وبيتصرف زي الصفة بالظبط.</div><div class=\"exbox\">Preise, die steigen → <b>steigende</b> Preise<br>auf dem Weltmarkt, der wächst → auf dem <b>wachsenden</b> Weltmarkt<br>ein Argument, das überzeugt → ein <b>überzeugendes</b> Argument</div>"
        },
        {
          "t": "Verben mit hin- und her-",
          "tAr": "أفعال بـ hin- و her-",
          "body": "<p>Die Präfixe <b>hin-</b> und <b>her-</b> zeigen die <b>Richtung</b>: <b>her-</b> = zum Sprecher hin, <b>hin-</b> = vom Sprecher weg. Oft kommt eine Präposition dazu: <b>herauf, hinunter, herein, hinaus</b>. Im Alltag sagt man oft nur <b>rauf, runter, rein, raus</b>.</p><div class=\"ar\">her- يعني ناحيتي (ناحية اللي بيتكلم)، و hin- يعني بعيد عني. Komm herein! = تعالى ادخل (لجوّه عندي). Ich gehe hinaus. = أنا خارج (بعيد عن هنا).</div><div class=\"exbox\">Komm <b>herauf</b>, dann müssen wir nicht so laut reden! (Sprecher ist oben)<br>Ich kann nicht <b>hinaufkommen</b>, die Tür ist zu. (Sprecher ist unten)<br>Einen Moment, ich lasse dich gleich <b>herein</b>.</div>"
        }
      ],
      "redemittel": [
        {
          "cat": "Bankgespräche führen: Kunde/Kundin",
          "catAr": "محادثة في البنك: العميل",
          "items": [
            {
              "de": "Ich möchte gern ein Konto eröffnen.",
              "ar": "عايز أفتح حساب لو سمحت."
            },
            {
              "de": "Ich möchte einen Kredit aufnehmen.",
              "ar": "عايز آخد قرض."
            },
            {
              "de": "Ich habe noch Fragen zu den Konditionen.",
              "ar": "عندي لسه أسئلة عن الشروط."
            },
            {
              "de": "Wie hoch sind die Gebühren/Zinsen?",
              "ar": "الرسوم / الفوايد قد إيه؟"
            },
            {
              "de": "Ich könnte monatlich ... Euro zurückzahlen.",
              "ar": "أقدر أسدّد ... يورو كل شهر."
            },
            {
              "de": "Wie bekomme ich einen Kontoauszug / das Geld?",
              "ar": "إزاي آخد كشف حساب / الفلوس؟"
            },
            {
              "de": "Fallen für Überweisungen Gebühren an?",
              "ar": "فيه رسوم على التحويلات؟"
            },
            {
              "de": "Ich möchte meine Karte sperren lassen.",
              "ar": "عايز أوقّف الكارت بتاعي."
            }
          ]
        },
        {
          "cat": "Bankgespräche führen: Bankangestellte/r",
          "catAr": "محادثة في البنك: موظف البنك",
          "items": [
            {
              "de": "Was kann ich für Sie tun?",
              "ar": "أقدر أخدمك إزاي؟"
            },
            {
              "de": "Zu Ihrem Konto bekommen Sie ...",
              "ar": "مع حسابك هتاخد ..."
            },
            {
              "de": "Wir empfehlen Ihnen Online-Banking. Da können Sie ...",
              "ar": "بننصحك بالأونلاين بانكينج. هناك تقدر ..."
            },
            {
              "de": "Wie hoch soll der Kredit sein?",
              "ar": "عايز القرض يبقى قد إيه؟"
            },
            {
              "de": "Wie schnell möchten Sie den Kredit zurückzahlen?",
              "ar": "عايز تسدّد القرض في قد إيه؟"
            },
            {
              "de": "Die Gebühren/Zinsen betragen ...",
              "ar": "الرسوم / الفوايد بتوصل لـ ..."
            },
            {
              "de": "Sie finden den Kontoauszug im Online-Banking.",
              "ar": "هتلاقي كشف الحساب في الأونلاين بانكينج."
            }
          ]
        },
        {
          "cat": "Argumente einleiten",
          "catAr": "تبدأ تقول حججك",
          "items": [
            {
              "de": "Ich finde, ...",
              "ar": "أنا شايف إن ..."
            },
            {
              "de": "Man muss auch bedenken, dass ...",
              "ar": "لازم كمان ناخد في اعتبارنا إن ..."
            },
            {
              "de": "Man sollte sich überlegen, ob ...",
              "ar": "المفروض نفكر هل ..."
            },
            {
              "de": "Das ist für mich / aus meiner Sicht ...",
              "ar": "ده بالنسبة لي / من وجهة نظري ..."
            },
            {
              "de": "Pauschal kann man sagen, ...",
              "ar": "بشكل عام ممكن نقول إن ..."
            }
          ]
        },
        {
          "cat": "Pro-Argumente nennen",
          "catAr": "تقول حجج «مع»",
          "items": [
            {
              "de": "Ich finde es gut, dass ...",
              "ar": "أنا شايف إنه كويس إن ..."
            },
            {
              "de": "Ich finde, es gibt viele überzeugende Argumente für ...",
              "ar": "شايف إن فيه حجج مقنعة كتير لصالح ..."
            },
            {
              "de": "Das ist doch ein (großer) Vorteil.",
              "ar": "ما ده ميزة (كبيرة) أهو."
            },
            {
              "de": "Positiv ist auch, dass ...",
              "ar": "وكمان من الحاجات الإيجابية إن ..."
            },
            {
              "de": "... ist/sind erfreulich.",
              "ar": "... حاجة تفرّح."
            },
            {
              "de": "Außerdem gefällt mir, dass ...",
              "ar": "وكمان عاجبني إن ..."
            },
            {
              "de": "Ein weiterer Pluspunkt ist, dass ...",
              "ar": "ونقطة إيجابية تانية إن ..."
            }
          ]
        },
        {
          "cat": "Contra-Argumente nennen",
          "catAr": "تقول حجج «ضد»",
          "items": [
            {
              "de": "Ich sehe ... eher kritisch.",
              "ar": "أنا شايف ... بنظرة نقدية شوية."
            },
            {
              "de": "Das ist doch ein wichtiges Argument gegen ...",
              "ar": "ما دي حجة مهمة ضد ..."
            },
            {
              "de": "Es ist wirklich sehr problematisch, dass ...",
              "ar": "فعلًا مشكلة كبيرة إن ..."
            },
            {
              "de": "Dann sind da noch die Probleme mit ...",
              "ar": "وكمان فيه المشاكل بتاعة ..."
            },
            {
              "de": "Das ist aus meiner Sicht ein echter Irrsinn.",
              "ar": "ده من وجهة نظري جنون حقيقي."
            },
            {
              "de": "Ein großer Nachteil ist, dass ...",
              "ar": "عيب كبير إن ..."
            }
          ]
        },
        {
          "cat": "Etwas akzeptieren oder befürworten",
          "catAr": "تقبل حاجة أو تأيدها",
          "items": [
            {
              "de": "Ich finde es in Ordnung, wenn ...",
              "ar": "أنا شايف إنه عادي لو ..."
            },
            {
              "de": "Für mich ist es okay, ...",
              "ar": "بالنسبة لي مفيش مشكلة ..."
            },
            {
              "de": "Ich habe kein Problem damit, dass ...",
              "ar": "معنديش مشكلة إن ..."
            },
            {
              "de": "Man muss akzeptieren, wenn/dass ...",
              "ar": "لازم نقبل لو / إن ..."
            },
            {
              "de": "Man muss tolerieren, wenn/dass ...",
              "ar": "لازم نتقبل لو / إن ..."
            },
            {
              "de": "Ich befürworte das, weil ...",
              "ar": "أنا مع ده، علشان ..."
            }
          ]
        },
        {
          "cat": "Etwas ablehnen",
          "catAr": "ترفض حاجة",
          "items": [
            {
              "de": "Ich finde es wirklich nicht gut, wenn ...",
              "ar": "أنا فعلًا مش شايف إنه كويس لو ..."
            },
            {
              "de": "Auf keinen Fall sollte man ...",
              "ar": "مينفعش أبدًا الواحد ..."
            },
            {
              "de": "Ich finde es falsch/schlimm/unmöglich, wenn/dass ...",
              "ar": "أنا شايف إنه غلط / وحش / مش معقول لو / إن ..."
            },
            {
              "de": "So ein Verhalten lehne ich ab, weil ...",
              "ar": "أنا رافض التصرف ده، علشان ..."
            },
            {
              "de": "Entschuldigung, darf ich kurz etwas sagen?",
              "ar": "لو سمحت، ممكن أقول حاجة بسرعة؟"
            }
          ]
        }
      ],
      "speaking": {
        "questions": [
          {
            "de": "Wofür geben Sie am meisten Geld aus?",
            "ar": "إنت بتصرف أكتر فلوسك على إيه؟"
          },
          {
            "de": "Bezahlen Sie lieber bar, mit Karte oder mit dem Handy? Warum?",
            "ar": "بتحب تدفع كاش ولا بالكارت ولا بالموبايل؟ ليه؟"
          },
          {
            "de": "Welche Vor- und Nachteile hat die Globalisierung für Ihr Heimatland?",
            "ar": "العولمة ليها مميزات وعيوب إيه بالنسبة لبلدك؟"
          },
          {
            "de": "Was würden Sie tun, wenn Sie eine Geldbörse auf der Straße finden würden?",
            "ar": "هتعمل إيه لو لقيت محفظة في الشارع؟"
          },
          {
            "de": "Wen oder was würden Sie gern finanziell unterstützen?",
            "ar": "تحب تساعد مين أو إيه بالفلوس؟"
          },
          {
            "de": "Stimmt es, dass Geld die Welt regiert?",
            "ar": "هل صحيح إن الفلوس بتحكم العالم؟"
          }
        ],
        "model": "Am meisten Geld gebe ich für die Miete und für Lebensmittel aus. Meistens bezahle ich mit der Bankkarte, weil ich nicht gern viel Bargeld dabeihabe. In Ägypten hat die Globalisierung vieles verändert: Das Produktangebot ist größer geworden und junge Leute können für internationale Firmen arbeiten. Ich sehe aber auch die steigenden Preise eher kritisch, denn viele Familien sind knapp bei Kasse. Wenn ich eine Geldbörse finden würde, würde ich sie sofort zum Fundbüro bringen. So ein Verhalten finde ich selbstverständlich, weil ich selbst auch froh wäre, meine Geldbörse zurückzubekommen. Wenn ich genug Geld hätte, würde ich eine Schule in meinem Heimatdorf unterstützen. Geld regiert die Welt nicht ganz, aber je mehr Geld man hat, desto mehr Möglichkeiten hat man.",
        "modelAr": "أكتر فلوس بصرفها على الإيجار والأكل. غالبًا بدفع بكارت البنك، لأني مابحبش يبقى معايا كاش كتير. في مصر العولمة غيّرت حاجات كتير: تشكيلة المنتجات بقت أكبر، والشباب بقوا يقدروا يشتغلوا في شركات عالمية. بس أنا كمان شايف الأسعار اللي بتزيد بنظرة نقدية، لأن عائلات كتير مزنوقة في الفلوس. لو لقيت محفظة، هوديها على طول لمكتب المفقودات. التصرف ده بالنسبة لي طبيعي جدًا، لأني أنا كمان كنت هبقى مبسوط لو محفظتي رجعتلي. ولو معايا فلوس كفاية، كنت هساعد مدرسة في قريتي. الفلوس مش بتحكم العالم بالكامل، بس كل ما الواحد معاه فلوس أكتر، كل ما يبقى عنده فرص أكتر."
      },
      "quiz": [
        {
          "q": "Je mehr man verdient, ___ mehr Steuern zahlt man.",
          "o": [
            "desto",
            "als",
            "dann"
          ],
          "a": 0,
          "fb": "je ..., desto/umso ... gehören zusammen.",
          "fbAr": "je دايمًا معاها desto أو umso.",
          "qAr": "كلما كسبنا أكتر، ___ دفعنا ضرائب أكتر.",
          "oAr": [
            "الجزء الثاني من رابط كلما",
            "عندما في الماضي أو من في المقارنة",
            "بعد كده"
          ]
        },
        {
          "q": "Je höher der Kredit ___, desto höher sind die Zinsen.",
          "o": [
            "sind",
            "ist",
            "wird sein"
          ],
          "a": 1,
          "fb": "Im je-Satz steht das Verb am Ende: ... der Kredit ist.",
          "fbAr": "جملة je جملة جانبية، فالفعل بيروح آخرها: der Kredit ist.",
          "qAr": "كلما ___ القرض أعلى، كانت الفوائد أعلى.",
          "oAr": [
            "يكونون؛ صيغة sind",
            "يكون؛ صيغة ist",
            "سيكون"
          ]
        },
        {
          "q": "Je länger ich warte, desto ___.",
          "o": [
            "nervöser ich werde",
            "ich werde nervöser",
            "nervöser werde ich"
          ],
          "a": 2,
          "fb": "Nach desto + Komparativ kommt direkt das Verb.",
          "fbAr": "بعد desto + الـ Komparativ الفعل بييجي على طول، وبعدين الفاعل.",
          "qAr": "كلما انتظرت أطول، ___ .",
          "oAr": [
            "أصبح أكثر توترًا؛ بصيغ مختلفة للترتيب",
            "أصبح أكثر توترًا؛ بصيغ مختلفة للترتيب",
            "أصبح أكثر توترًا؛ بصيغ مختلفة للترتيب"
          ]
        },
        {
          "q": "Hier ist das ___ Formular.",
          "o": [
            "ausgefüllte",
            "ausfüllende",
            "ausgefüllt"
          ],
          "a": 0,
          "fb": "Das Formular wurde ausgefüllt → das ausgefüllte Formular (Partizip II, passiv).",
          "fbAr": "الاستمارة اتملت خلاص، يبقى Partizip II بنهاية الصفة: das ausgefüllte.",
          "qAr": "هنا الاستمارة الـ___ .",
          "oAr": [
            "مكتمل أو تم ملؤه؛ بصيغ مختلفة",
            "يملأ حاليًا؛ صفة من Partizip I",
            "مكتمل أو تم ملؤه؛ بصيغ مختلفة"
          ]
        },
        {
          "q": "Wegen der ___ Preise kaufen viele Leute weniger.",
          "o": [
            "gestiegt",
            "steigenden",
            "steigende"
          ],
          "a": 1,
          "fb": "Preise, die steigen → die steigenden Preise (Genitiv Plural: -en).",
          "fbAr": "الأسعار «بتزيد» دلوقتي → Partizip I، وبعد der في الجمع النهاية -en.",
          "qAr": "بسبب الأسعار الـ___، ناس كتير بتشتري أقل.",
          "oAr": [
            "صيغة من فعل يرتفع",
            "مرتفع حاليًا؛ بصيغ مختلفة للصفة",
            "مرتفع حاليًا؛ بصيغ مختلفة للصفة"
          ]
        },
        {
          "q": "Melden Sie den ___ Ihrer Bankkarte sofort.",
          "o": [
            "Verlust",
            "Beleg",
            "Zins"
          ],
          "a": 0,
          "fb": "der Verlust = wenn man etwas verloren hat.",
          "fbAr": "Verlust يعني فقدان الكارت.",
          "qAr": "بلّغ فورًا عن ___ بطاقتك البنكية.",
          "oAr": [
            "الفقدان",
            "الإيصال",
            "الفائدة المالية"
          ]
        },
        {
          "q": "Wer sein Konto ___, muss hohe Zinsen bezahlen.",
          "o": [
            "einzahlt",
            "gutschreibt",
            "überzieht"
          ],
          "a": 2,
          "fb": "ein Konto überziehen = mehr Geld abheben, als auf dem Konto ist.",
          "fbAr": "überziehen يعني تسحب فلوس أكتر من اللي في حسابك.",
          "qAr": "اللي ___ من حسابه، لازم يدفع فوائد عالية.",
          "oAr": [
            "يودع مالًا",
            "يضيف مبلغًا للحساب",
            "يسحب على المكشوف"
          ]
        },
        {
          "q": "Viele Länder ___ von der Globalisierung.",
          "o": [
            "nützen",
            "profitieren",
            "befürworten"
          ],
          "a": 1,
          "fb": "profitieren von + Dativ = einen Vorteil haben.",
          "fbAr": "profitieren von يعني يستفيد من.",
          "qAr": "بلاد كتير ___ من العولمة.",
          "oAr": [
            "يفيد",
            "يستفيد",
            "يؤيّد"
          ]
        },
        {
          "q": "Komm doch ___! Ich bin oben im Büro.",
          "o": [
            "herauf",
            "hinauf",
            "hinunter"
          ],
          "a": 0,
          "fb": "Der Sprecher ist oben und die Bewegung geht zu ihm: her- + auf = herauf.",
          "fbAr": "اللي بيتكلم فوق والحركة ناحيته، يبقى her: herauf.",
          "qAr": "تعال ___! أنا فوق في المكتب.",
          "oAr": [
            "إلى أعلى ناحية المتكلم",
            "إلى أعلى بعيدًا عن المتكلم",
            "إلى أسفل بعيدًا عن المتكلم"
          ]
        }
      ],
      "badgesAr": [
        "كلما... زاد أو قل...",
        "اسم الفاعل المستخدم كصفة",
        "التصريف الثالث المستخدم كصفة",
        "أفعال الحركة بعيدًا عن المتكلم أو ناحيته",
        "المال والبنوك",
        "العولمة"
      ]
    }
  };
  if (!Array.isArray(window.B1_BOOK)) return;
  window.B1_BOOK.forEach(chapter => {
    const lesson = content[chapter.num];
    if (!lesson) return;
    Object.assign(chapter, lesson);
    chapter.readings.forEach(reading => {
      const text = reading.text.toLocaleLowerCase('de-DE');
      const words = chapter.vocab.filter(item => {
        const plain = String(item.w || '').replace(/^(der|die|das|sich)\s+/i, '').split(/[,(]/)[0].trim();
        return plain.length > 3 && text.includes(plain.toLocaleLowerCase('de-DE'));
      }).slice(0, 8);
      reading.glossary = words.map(item => [item.w, item.ar]);
    });
  });
})();
