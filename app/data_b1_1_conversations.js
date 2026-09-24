/* B1.1 conversation situations: for every chapter topic five everyday
   situations with ready-to-use sentences, a model dialogue and a speaking
   task. Loaded after data_b1_1_lessons.js; the sentences are also merged into
   each chapter's Redemittel so the phrase library and games use them. */
window.B1_CONVERSATIONS = {
  1: [
    {
      situation: "Urlaubspläne besprechen", situationAr: "نتكلم عن خطط الإجازة",
      phrases: [
        {de:"Was hast du in den Ferien vor?", ar:"ناوي تعمل إيه في الإجازة؟"},
        {de:"Ich habe vor, zwei Wochen ans Meer zu fahren.", ar:"ناوي أسافر البحر أسبوعين."},
        {de:"Mir ist wichtig, dass ich mich richtig erhole.", ar:"المهم عندي إني أرتاح كويس."},
        {de:"Ich hätte Lust, mal etwas ganz anderes auszuprobieren.", ar:"نفسي أجرب حاجة مختلفة خالص."},
        {de:"Am liebsten verbringe ich den Urlaub in den Bergen.", ar:"أكتر حاجة بحبها أقضي الإجازة في الجبال."},
        {de:"Städtereisen finde ich spannender als Strandurlaub.", ar:"رحلات المدن بالنسبالي أمتع من إجازة الشاطئ."},
        {de:"Es kommt darauf an, wie viel Geld ich übrig habe.", ar:"ده يعتمد على الفلوس اللي هيفضل معايا."},
        {de:"Hast du schon eine Unterkunft gebucht?", ar:"حجزت مكان تقعد فيه ولا لسه؟"}
      ],
      dialogue: [
        {s:"Lena", de:"Sag mal, was hast du im Sommer vor?", ar:"قولّي، ناوي على إيه في الصيف؟"},
        {s:"Karim", de:"Ich habe vor, mit dem Zug durch Italien zu reisen.", ar:"ناوي ألف إيطاليا بالقطر."},
        {s:"Lena", de:"Klingt toll! Ist das nicht ziemlich teuer?", ar:"حلو أوي! مش غالي شوية؟"},
        {s:"Karim", de:"Es geht. Ich übernachte in Jugendherbergen, weil die günstiger sind.", ar:"مش أوي. هبات في بيوت الشباب لأنها أرخص."},
        {s:"Lena", de:"Ich würde lieber am Strand liegen und faulenzen.", ar:"أنا أفضل أنام على البحر وأرتاح."},
        {s:"Karim", de:"Obwohl ich gern schwimme, wird mir das nach zwei Tagen langweilig.", ar:"مع إني بحب العوم، بزهق من ده بعد يومين."}
      ],
      task: "Erzähl einer Freundin von deinem Traumurlaub: Wohin, mit wem, was möchtest du dort machen und warum?",
      taskAr: "احكي لصاحبتك عن إجازة أحلامك: فين، مع مين، هتعمل إيه وليه؟"
    },
    {
      situation: "Im Hotel: einchecken und Probleme melden", situationAr: "في الفندق: تسجيل الدخول والشكوى من مشكلة",
      phrases: [
        {de:"Guten Abend, ich habe ein Zimmer auf den Namen Haddad reserviert.", ar:"مساء الخير، حاجز أوضة باسم حداد."},
        {de:"Ist das Frühstück im Preis enthalten?", ar:"الفطار داخل في السعر؟"},
        {de:"Ab wann kann man frühstücken?", ar:"الفطار بيبدأ الساعة كام؟"},
        {de:"Entschuldigung, in meinem Zimmer funktioniert die Heizung nicht.", ar:"لو سمحت، التدفئة في أوضتي مش شغالة."},
        {de:"Das Zimmer ist leider sehr laut, weil es direkt an der Straße liegt.", ar:"الأوضة للأسف دوشة جدًا لأنها على الشارع على طول."},
        {de:"Könnten Sie mir bitte ein anderes Zimmer geben?", ar:"ممكن تديني أوضة تانية لو سمحت؟"},
        {de:"Könnten Sie jemanden vorbeischicken, der sich das ansieht?", ar:"ممكن تبعتوا حد يبص عليها؟"},
        {de:"Bis wann muss ich morgen auschecken?", ar:"لازم أسيب الأوضة بكرة لحد الساعة كام؟"}
      ],
      dialogue: [
        {s:"Gast", de:"Entschuldigung, ich habe ein Problem mit meinem Zimmer.", ar:"لو سمحت، عندي مشكلة في أوضتي."},
        {s:"Rezeption", de:"Das tut mir leid. Was ist denn los?", ar:"آسفين جدًا. في إيه؟"},
        {s:"Gast", de:"Die Dusche ist kalt, und das WLAN funktioniert auch nicht.", ar:"الدش مايته ساقعة، والواي فاي كمان مش شغال."},
        {s:"Rezeption", de:"Ich schicke sofort einen Techniker nach oben.", ar:"هبعت فني فوق حالًا."},
        {s:"Gast", de:"Wäre es möglich, das Zimmer zu wechseln? Ich bin sehr müde.", ar:"ينفع أغير الأوضة؟ أنا تعبان جدًا."},
        {s:"Rezeption", de:"Natürlich. Sie bekommen Zimmer 214, dort ist es auch ruhiger.", ar:"طبعًا. هتاخد أوضة ٢١٤، وهي كمان أهدى."}
      ],
      task: "Du bist im Hotel und das Zimmer ist nicht in Ordnung. Beschreibe zwei Probleme und bitte höflich um eine Lösung.",
      taskAr: "إنت في فندق والأوضة فيها مشاكل. اوصف مشكلتين واطلب حل بأدب."
    },
    {
      situation: "Vor Ort nach Tipps fragen", situationAr: "تسأل عن نصايح في المكان اللي زايره",
      phrases: [
        {de:"Können Sie mir einen Tipp geben, was man hier unbedingt sehen sollte?", ar:"ممكن تنصحني بحاجة لازم أشوفها هنا؟"},
        {de:"Lohnt es sich, die Altstadt zu besichtigen?", ar:"تستاهل أزور المدينة القديمة؟"},
        {de:"Wie komme ich am besten zum Hafen?", ar:"أوصل للميناء إزاي أحسن حاجة؟"},
        {de:"Gibt es hier in der Nähe ein Restaurant mit typischer Küche?", ar:"في مطعم قريب فيه أكل محلي تقليدي؟"},
        {de:"Muss man die Tickets vorher reservieren?", ar:"لازم أحجز التذاكر قبلها؟"},
        {de:"Wie lange braucht man ungefähr zu Fuß?", ar:"المشي بياخد وقت قد إيه تقريبًا؟"},
        {de:"Ist das auch bei Regen eine gute Idee?", ar:"ده ينفع برده لو الدنيا بتمطر؟"},
        {de:"Vielen Dank, das hilft mir sehr weiter!", ar:"شكرًا جدًا، ده ساعدني كتير!"}
      ],
      dialogue: [
        {s:"Tourist", de:"Entschuldigung, wir sind nur heute hier. Was sollten wir unbedingt sehen?", ar:"لو سمحت، إحنا هنا النهارده بس. إيه اللي لازم نشوفه؟"},
        {s:"Einheimische", de:"Auf jeden Fall die Burg. Von oben hat man einen tollen Blick.", ar:"أكيد القلعة. من فوق المنظر تحفة."},
        {s:"Tourist", de:"Muss man dafür Eintritt bezahlen?", ar:"لازم ندفع تذكرة دخول؟"},
        {s:"Einheimische", de:"Ja, acht Euro. Aber es lohnt sich wirklich.", ar:"أيوه، تمانية يورو. بس بجد تستاهل."},
        {s:"Tourist", de:"Und wie kommen wir am besten dorthin?", ar:"ونوصل هناك إزاي أحسن حاجة؟"},
        {s:"Einheimische", de:"Nehmen Sie den Bus Nummer 5, zu Fuß ist es ziemlich steil.", ar:"اركبوا أتوبيس رقم ٥، المشي طالع جامد."}
      ],
      task: "Frag eine Person aus der Stadt nach zwei Sehenswürdigkeiten, dem Weg und den Preisen.",
      taskAr: "اسأل حد من أهل المدينة عن مكانين سياحيين، والطريق، والأسعار."
    },
    {
      situation: "Von einer Reise erzählen", situationAr: "تحكي عن رحلة",
      phrases: [
        {de:"Letztes Jahr bin ich nach Portugal gefahren.", ar:"السنة اللي فاتت سافرت البرتغال."},
        {de:"Am Anfang war alles ein bisschen chaotisch.", ar:"في الأول كل حاجة كانت ملخبطة شوية."},
        {de:"Das Beste an der Reise war die Bootstour.", ar:"أحلى حاجة في الرحلة كانت رحلة المركب."},
        {de:"Leider ist am dritten Tag etwas schiefgegangen.", ar:"للأسف في اليوم التالت حصلت مشكلة."},
        {de:"Obwohl es viel geregnet hat, hatten wir eine tolle Zeit.", ar:"مع إنها مطرت كتير، قضينا وقت حلو جدًا."},
        {de:"Ich werde nie vergessen, wie freundlich die Leute waren.", ar:"عمري ما هنسى الناس كانوا لطاف إزاي."},
        {de:"Beim nächsten Mal würde ich länger bleiben.", ar:"المرة الجاية هقعد مدة أطول."},
        {de:"Ich kann dir das Land nur empfehlen.", ar:"أنصحك بالبلد دي جدًا."}
      ],
      dialogue: [
        {s:"Paul", de:"Du bist ja ganz braun! Wo warst du denn?", ar:"إنت اسمرّيت خالص! كنت فين؟"},
        {s:"Amira", de:"Zwei Wochen auf Kreta. Es war wunderschön.", ar:"أسبوعين في كريت. كانت تحفة."},
        {s:"Paul", de:"Und was hat dir am besten gefallen?", ar:"وإيه أكتر حاجة عجبتك؟"},
        {s:"Amira", de:"Die Wanderung durch eine Schlucht. Wir sind sechs Stunden gelaufen!", ar:"التمشية في وادي بين الجبال. مشينا ست ساعات!"},
        {s:"Paul", de:"Gab es auch Probleme?", ar:"كان في مشاكل؟"},
        {s:"Amira", de:"Ja, unser Koffer ist erst drei Tage später angekommen. Aber das war dann auch egal.", ar:"أيوه، شنطتنا وصلت بعد تلات أيام. بس بعدها ماكانش فارق."}
      ],
      task: "Erzähl von einer Reise: Wohin, wann, was war schön, was ist schiefgegangen? Benutze Perfekt und Präteritum.",
      taskAr: "احكي عن رحلة: فين، إمتى، إيه اللي كان حلو، وإيه اللي باظ؟ استخدم Perfekt وPräteritum."
    },
    {
      situation: "Eine Reise gemeinsam planen", situationAr: "نخطط لرحلة سوا ونتفق",
      phrases: [
        {de:"Wie wäre es, wenn wir mit dem Zug fahren?", ar:"إيه رأيك لو نسافر بالقطر؟"},
        {de:"Ich schlage vor, dass wir früh losfahren.", ar:"باقترح إننا نتحرك بدري."},
        {de:"Das ist eine gute Idee, aber das Hotel ist zu teuer.", ar:"فكرة حلوة، بس الفندق غالي أوي."},
        {de:"Was hältst du davon, eine Ferienwohnung zu mieten?", ar:"إيه رأيك نأجر شقة مصيفية؟"},
        {de:"Da bin ich anderer Meinung.", ar:"أنا ليّا رأي تاني في دي."},
        {de:"Einverstanden, dann machen wir es so.", ar:"موافق، يبقى نعملها كده."},
        {de:"Wer kümmert sich um die Tickets?", ar:"مين هيتولى موضوع التذاكر؟"},
        {de:"Ich übernehme das Buchen, und du planst das Programm.", ar:"أنا هحجز، وإنت تخطط البرنامج."}
      ],
      dialogue: [
        {s:"Mia", de:"Wir wollten doch im Mai zusammen wegfahren. Wie wäre es mit Wien?", ar:"مش كنا عايزين نسافر سوا في مايو؟ إيه رأيك في فيينا؟"},
        {s:"Tarek", de:"Wien finde ich super. Fahren wir mit dem Zug oder fliegen wir?", ar:"فيينا فكرة ممتازة. نروح بالقطر ولا بالطيارة؟"},
        {s:"Mia", de:"Ich schlage den Zug vor. Das ist umweltfreundlicher und entspannter.", ar:"باقترح القطر. أحسن للبيئة وأريح."},
        {s:"Tarek", de:"Einverstanden. Und wo übernachten wir?", ar:"موافق. وهنبات فين؟"},
        {s:"Mia", de:"Was hältst du von einer kleinen Pension im Zentrum?", ar:"إيه رأيك في بنسيون صغير في وسط البلد؟"},
        {s:"Tarek", de:"Gute Idee. Ich kümmere mich um die Tickets, du buchst die Pension.", ar:"فكرة حلوة. أنا أجيب التذاكر وإنتي تحجزي البنسيون."}
      ],
      task: "Plant zu zweit ein Wochenende: Ziel, Verkehrsmittel, Unterkunft, Programm und wer was organisiert.",
      taskAr: "خططوا اتنين لويك إند: المكان، المواصلات، السكن، البرنامج، ومين يعمل إيه."
    }
  ],
  2: [
    {
      situation: "Im Elektrogeschäft beraten werden", situationAr: "تسأل عن جهاز في محل الإلكترونيات",
      phrases: [
        {de:"Ich suche einen Laptop, der nicht zu schwer ist.", ar:"بدوّر على لابتوب مايكونش تقيل أوي."},
        {de:"Wofür brauchen Sie das Gerät hauptsächlich?", ar:"هتستخدم الجهاز في إيه أساسًا؟"},
        {de:"Wie lange hält der Akku ungefähr?", ar:"البطارية بتقعد قد إيه تقريبًا؟"},
        {de:"Was ist der Unterschied zwischen diesen beiden Modellen?", ar:"إيه الفرق بين الموديلين دول؟"},
        {de:"Gibt es darauf Garantie?", ar:"عليه ضمان؟"},
        {de:"Das ist mir leider zu teuer. Haben Sie etwas Günstigeres?", ar:"ده غالي عليّا للأسف. عندك حاجة أرخص؟"},
        {de:"Kann ich das Gerät einmal ausprobieren?", ar:"ممكن أجرب الجهاز؟"},
        {de:"Ich überlege es mir noch einmal.", ar:"هفكر فيها تاني."}
      ],
      dialogue: [
        {s:"Verkäufer", de:"Guten Tag, kann ich Ihnen helfen?", ar:"أهلًا، أقدر أساعدك؟"},
        {s:"Kundin", de:"Ja, ich suche Kopfhörer, die man ohne Kabel benutzen kann.", ar:"أيوه، بدوّر على سماعات من غير سلك."},
        {s:"Verkäufer", de:"Möchten Sie damit auch telefonieren oder nur Musik hören?", ar:"عايزة تتكلمي بيها في التليفون كمان ولا مزيكا بس؟"},
        {s:"Kundin", de:"Beides. Und sie sollten beim Sport nicht herausfallen.", ar:"الاتنين. ولازم ماتقعش وأنا بتمرن."},
        {s:"Verkäufer", de:"Dann empfehle ich Ihnen dieses Modell. Der Akku hält acht Stunden.", ar:"يبقى أنصحك بالموديل ده. البطارية بتقعد تمن ساعات."},
        {s:"Kundin", de:"Klingt gut. Kann ich sie zurückgeben, wenn sie nicht passen?", ar:"كويس. أقدر أرجعها لو ماناسبتنيش؟"}
      ],
      task: "Du möchtest ein neues Handy kaufen. Frag nach Akku, Kamera, Speicher, Preis und Garantie.",
      taskAr: "عايز تشتري موبايل جديد. اسأل عن البطارية، الكاميرا، المساحة، السعر والضمان."
    },
    {
      situation: "Ein Gerät reklamieren", situationAr: "تشتكي من جهاز بايظ",
      phrases: [
        {de:"Ich habe diese Kaffeemaschine letzte Woche bei Ihnen gekauft.", ar:"اشتريت ماكينة القهوة دي منكم الأسبوع اللي فات."},
        {de:"Leider funktioniert sie schon nicht mehr.", ar:"للأسف خلاص مابقتش شغالة."},
        {de:"Das Display bleibt schwarz, obwohl der Akku voll ist.", ar:"الشاشة بتفضل سودا مع إن البطارية مليانة."},
        {de:"Hier ist der Kassenbon.", ar:"اتفضل الفاتورة."},
        {de:"Ich möchte das Gerät umtauschen.", ar:"عايز أبدل الجهاز."},
        {de:"Können Sie das Gerät reparieren lassen?", ar:"ممكن تبعتوا الجهاز يتصلح؟"},
        {de:"Ich hätte lieber mein Geld zurück.", ar:"أفضل آخد فلوسي."},
        {de:"Wie lange dauert die Reparatur?", ar:"التصليح بياخد قد إيه؟"}
      ],
      dialogue: [
        {s:"Kunde", de:"Guten Tag, ich möchte diesen Wasserkocher reklamieren.", ar:"أهلًا، عايز أشتكي من الكاتل ده."},
        {s:"Verkäuferin", de:"Was ist denn das Problem?", ar:"إيه المشكلة؟"},
        {s:"Kunde", de:"Er schaltet sich nach einer Minute einfach aus, obwohl das Wasser noch kalt ist.", ar:"بيفصل لوحده بعد دقيقة مع إن المية لسه ساقعة."},
        {s:"Verkäuferin", de:"Haben Sie den Kassenbon dabei?", ar:"معاك الفاتورة؟"},
        {s:"Kunde", de:"Ja, hier. Ich hätte gern ein neues Gerät.", ar:"أيوه، اتفضلي. عايز جهاز جديد."},
        {s:"Verkäuferin", de:"Kein Problem, Sie haben noch Garantie. Ich hole Ihnen sofort einen neuen.", ar:"مفيش مشكلة، لسه عليه ضمان. هجيبلك واحد جديد حالًا."}
      ],
      task: "Dein neuer Drucker druckt nicht. Geh ins Geschäft, erkläre das Problem und sag, was du möchtest.",
      taskAr: "الطابعة الجديدة مش بتطبع. روح المحل، اشرح المشكلة وقول عايز إيه."
    },
    {
      situation: "Technische Probleme am Telefon erklären", situationAr: "تشرح مشكلة تقنية في التليفون (خدمة العملاء)",
      phrases: [
        {de:"Seit gestern kann ich mich nicht mehr einloggen.", ar:"من امبارح مش عارف أدخل على الحساب."},
        {de:"Es kommt immer die Fehlermeldung „Passwort falsch“.", ar:"بتطلعلي دايمًا رسالة الخطأ \"كلمة السر غلط\"."},
        {de:"Ich habe das Gerät schon neu gestartet.", ar:"عملت ريستارت للجهاز خلاص."},
        {de:"Was genau soll ich jetzt anklicken?", ar:"أدوس على إيه بالظبط دلوقتي؟"},
        {de:"Können Sie das bitte noch einmal langsam erklären?", ar:"ممكن تشرحها تاني ببطء لو سمحت؟"},
        {de:"Jetzt hat es funktioniert, vielen Dank!", ar:"كده اشتغلت، شكرًا جدًا!"},
        {de:"Wenn es wieder passiert, rufe ich noch einmal an.", ar:"لو حصلت تاني هتصل تاني."},
        {de:"Muss ich dafür einen Techniker kommen lassen?", ar:"لازم أجيب فني علشان كده؟"}
      ],
      dialogue: [
        {s:"Hotline", de:"Kundenservice, mein Name ist Berger. Was kann ich für Sie tun?", ar:"خدمة العملاء، معاك برجر. أقدر أساعدك في إيه؟"},
        {s:"Kundin", de:"Mein Internet ist seit heute Morgen total langsam.", ar:"النت عندي بطيء جدًا من الصبح."},
        {s:"Hotline", de:"Haben Sie den Router schon einmal ausgeschaltet?", ar:"جربتي تطفي الراوتر؟"},
        {s:"Kundin", de:"Ja, zweimal. Aber es hat nichts gebracht.", ar:"أيوه، مرتين. بس مفيش فايدة."},
        {s:"Hotline", de:"Dann prüfe ich jetzt Ihre Leitung. Einen Moment bitte.", ar:"يبقى هكشف على الخط بتاعك دلوقتي. لحظة من فضلك."},
        {s:"Hotline", de:"Es gibt eine Störung in Ihrer Straße. Morgen früh ist sie behoben.", ar:"في عطل في شارعكم. هيتصلح بكرة الصبح."}
      ],
      task: "Ruf beim Kundenservice an: Dein Laptop startet nicht mehr. Beschreibe, was passiert und was du schon versucht hast.",
      taskAr: "كلّم خدمة العملاء: اللابتوب مش بيفتح. اوصف اللي بيحصل واللي جربته."
    },
    {
      situation: "Ein Produkt empfehlen oder davon abraten", situationAr: "تنصح بمنتج أو تنصح بلاش",
      phrases: [
        {de:"Ich kann dir diese App wirklich empfehlen.", ar:"بجد أنصحك بالتطبيق ده."},
        {de:"Sie ist so praktisch, dass ich sie jeden Tag benutze.", ar:"عملي جدًا لدرجة إني بستخدمه كل يوم."},
        {de:"Der Vorteil ist, dass man viel Zeit spart.", ar:"الميزة إنك بتوفر وقت كتير."},
        {de:"Ein Nachteil ist allerdings der hohe Preis.", ar:"بس في عيب، السعر العالي."},
        {de:"Ich würde dir eher davon abraten.", ar:"أنا أنصحك تبعد عنه."},
        {de:"Für mich hat sich der Kauf nicht gelohnt.", ar:"بالنسبالي الشرا ماكانش يستاهل."},
        {de:"Die Werbung verspricht mehr, als das Gerät kann.", ar:"الإعلان بيوعد بأكتر من اللي الجهاز يقدر يعمله."},
        {de:"Lies am besten vorher ein paar Bewertungen.", ar:"الأحسن تقرا شوية تقييمات الأول."}
      ],
      dialogue: [
        {s:"Jonas", de:"Du hast doch so einen Saugroboter. Lohnt sich das?", ar:"إنت عندك مكنسة روبوت، صح؟ تستاهل؟"},
        {s:"Sara", de:"Für mich schon. Ich komme spät nach Hause, und die Wohnung ist trotzdem sauber.", ar:"بالنسبالي أيوه. برجع البيت متأخر والشقة برده نضيفة."},
        {s:"Jonas", de:"Und gibt es auch Nachteile?", ar:"وفي عيوب؟"},
        {s:"Sara", de:"Er ist ziemlich laut und bleibt manchmal unter dem Sofa hängen.", ar:"صوته عالي شوية وساعات بيتزنق تحت الكنبة."},
        {s:"Jonas", de:"Würdest du ihn noch einmal kaufen?", ar:"هتشتريها تاني؟"},
        {s:"Sara", de:"Ja, aber ich würde ein Modell mit App-Steuerung nehmen.", ar:"أيوه، بس هاخد موديل بيتحكم فيه من التطبيق."}
      ],
      task: "Empfiehl einer Kollegin ein Gerät, das du benutzt. Nenne zwei Vorteile und einen Nachteil.",
      taskAr: "انصح زميلتك بجهاز بتستخدمه. قول ميزتين وعيب."
    },
    {
      situation: "Online bestellen und zurückschicken", situationAr: "تطلب أونلاين وترجّع حاجة",
      phrases: [
        {de:"Ich habe die Jacke online bestellt, aber sie ist mir zu klein.", ar:"طلبت الجاكيت أونلاين بس طلع صغير عليّا."},
        {de:"Wie kann ich die Ware zurückschicken?", ar:"أرجّع البضاعة إزاي؟"},
        {de:"Muss ich die Rücksendung selbst bezahlen?", ar:"لازم أدفع أنا مصاريف الإرجاع؟"},
        {de:"Das Paket ist immer noch nicht angekommen.", ar:"الطرد لسه ماوصلش."},
        {de:"Laut Sendungsverfolgung liegt es seit drei Tagen im Lager.", ar:"حسب التتبع هو في المخزن من تلات أيام."},
        {de:"Die Lieferung war beschädigt.", ar:"الشحنة وصلت متكسرة."},
        {de:"Wann bekomme ich mein Geld zurück?", ar:"فلوسي هترجع إمتى؟"},
        {de:"Ich würde gern die Bestellung stornieren.", ar:"عايز ألغي الطلب."}
      ],
      dialogue: [
        {s:"Kundin", de:"Hallo, ich rufe wegen meiner Bestellung Nummer 4711 an.", ar:"ألو، بتصل بخصوص طلب رقم ٤٧١١."},
        {s:"Service", de:"Einen Moment … Ja, ich sehe sie. Was ist das Problem?", ar:"لحظة… أيوه، شايفه. إيه المشكلة؟"},
        {s:"Kundin", de:"Ich habe Schuhe in Größe 39 bestellt, aber 41 bekommen.", ar:"طلبت جزمة مقاس ٣٩ وجالي ٤١."},
        {s:"Service", de:"Das tut mir leid. Sie können sie kostenlos zurückschicken.", ar:"آسفين جدًا. تقدري ترجعيها مجانًا."},
        {s:"Kundin", de:"Und bekomme ich dann die richtige Größe?", ar:"وهيجيلي المقاس الصح بعدها؟"},
        {s:"Service", de:"Ja, wir schicken sie Ihnen sofort, sobald das Paket bei uns ist.", ar:"أيوه، هنبعتهولك أول ما الطرد يوصلنا."}
      ],
      task: "Du hast ein falsches Produkt bekommen. Schreib oder sprich mit dem Kundenservice und kläre Umtausch und Kosten.",
      taskAr: "جالك منتج غلط. كلّم خدمة العملاء واتفق على التبديل والتكاليف."
    }
  ],
  3: [
    {
      situation: "Über früher und heute sprechen", situationAr: "نتكلم عن زمان والنهارده",
      phrases: [
        {de:"Früher habe ich auf dem Land gewohnt, heute lebe ich in der Stadt.", ar:"زمان كنت ساكن في الريف، النهارده عايش في المدينة."},
        {de:"Als Kind hatte ich viel mehr Zeit zum Spielen.", ar:"وأنا صغير كان عندي وقت أكتر للعب."},
        {de:"Damals gab es noch keine Smartphones.", ar:"ساعتها ماكانش في لسه سمارت فونز."},
        {de:"Seitdem hat sich vieles verändert.", ar:"من ساعتها حاجات كتير اتغيرت."},
        {de:"Heute lege ich mehr Wert auf Gesundheit als früher.", ar:"النهارده بهتم بصحتي أكتر من زمان."},
        {de:"Ich vermisse manchmal die Ruhe von damals.", ar:"ساعات بتوحشني هدوء زمان."},
        {de:"Im Vergleich zu früher bin ich viel selbstständiger.", ar:"مقارنة بزمان بقيت معتمد على نفسي أكتر بكتير."},
        {de:"Das war damals ganz normal.", ar:"ده كان عادي جدًا ساعتها."}
      ],
      dialogue: [
        {s:"Oma", de:"Als ich jung war, haben wir Briefe geschrieben.", ar:"وأنا صغيرة كنا بنكتب جوابات."},
        {s:"Enkel", de:"Und wie lange hat es gedauert, bis eine Antwort kam?", ar:"وكان الرد بياخد قد إيه لحد ما يوصل؟"},
        {s:"Oma", de:"Oft zwei Wochen. Dafür haben wir uns über jeden Brief sehr gefreut.", ar:"غالبًا أسبوعين. بس كنا بنفرح أوي بكل جواب."},
        {s:"Enkel", de:"Heute schreibe ich jeden Tag hundert Nachrichten.", ar:"النهارده بكتب ميت رسالة في اليوم."},
        {s:"Oma", de:"Ja, aber schreibt ihr euch auch etwas Wichtiges?", ar:"أيوه، بس بتكتبوا لبعض حاجة مهمة؟"},
        {s:"Enkel", de:"Nicht immer. Vielleicht sollte ich dir mal einen Brief schreiben!", ar:"مش دايمًا. يمكن لازم أكتبلك جواب مرة!"}
      ],
      task: "Vergleiche dein Leben vor zehn Jahren mit heute: Wohnort, Arbeit, Freizeit, Technik.",
      taskAr: "قارن حياتك من عشر سنين بالنهارده: السكن، الشغل، وقت الفراغ، التكنولوجيا."
    },
    {
      situation: "Von einem Neuanfang erzählen", situationAr: "تحكي عن بداية جديدة",
      phrases: [
        {de:"Vor drei Jahren habe ich beschlossen, nach Deutschland zu ziehen.", ar:"من تلات سنين قررت أنقل ألمانيا."},
        {de:"Das war eine der schwierigsten Entscheidungen meines Lebens.", ar:"دي كانت من أصعب القرارات في حياتي."},
        {de:"Am Anfang habe ich kaum jemanden gekannt.", ar:"في الأول ماكنتش أعرف حد تقريبًا."},
        {de:"Nach ein paar Monaten habe ich mich gut eingelebt.", ar:"بعد كام شهر اتعودت على المكان كويس."},
        {de:"Der Wendepunkt war, als ich meine erste Stelle bekommen habe.", ar:"نقطة التحول كانت لما خدت أول شغلانة."},
        {de:"Ich habe gelernt, geduldig zu sein.", ar:"اتعلمت أكون صبور."},
        {de:"Rückblickend war es die richtige Entscheidung.", ar:"لما أبص ورا، كان القرار الصح."},
        {de:"Ich bereue es überhaupt nicht.", ar:"مش ندمان خالص."}
      ],
      dialogue: [
        {s:"Nina", de:"Wie war es für dich, als du nach Hamburg gekommen bist?", ar:"كان عامل إزاي لما جيت هامبورج؟"},
        {s:"Omar", de:"Ehrlich gesagt ziemlich schwer. Ich habe die Leute kaum verstanden.", ar:"بصراحة صعب شوية. ماكنتش فاهم الناس تقريبًا."},
        {s:"Nina", de:"Und was hat dir geholfen?", ar:"وإيه اللي ساعدك؟"},
        {s:"Omar", de:"Ich bin in einen Sportverein gegangen. Dort habe ich schnell Freunde gefunden.", ar:"دخلت نادي رياضي. لقيت صحاب بسرعة هناك."},
        {s:"Nina", de:"Und heute? Fühlst du dich zu Hause?", ar:"والنهارده؟ حاسس إنك في بيتك؟"},
        {s:"Omar", de:"Ja, seit ich hier arbeite, fühle ich mich richtig wohl.", ar:"أيوه، من ساعة ما اشتغلت هنا وأنا مرتاح جدًا."}
      ],
      task: "Erzähl von einer wichtigen Veränderung in deinem Leben: Was war vorher, was ist passiert, wie ist es heute?",
      taskAr: "احكي عن تغيير مهم في حياتك: كان إيه قبلها، حصل إيه، والنهارده عامل إزاي؟"
    },
    {
      situation: "Gefühle bei Veränderungen ausdrücken", situationAr: "تعبر عن مشاعرك مع التغيير",
      phrases: [
        {de:"Ich bin ziemlich nervös, weil alles neu ist.", ar:"أنا متوتر شوية لإن كل حاجة جديدة."},
        {de:"Ich freue mich riesig auf die neue Wohnung.", ar:"فرحان جدًا بالشقة الجديدة."},
        {de:"Es fällt mir schwer, mich von meinen Freunden zu verabschieden.", ar:"صعب عليّا أودّع صحابي."},
        {de:"Ich habe ein bisschen Angst, dass es nicht klappt.", ar:"خايف شوية إنها ماتنجحش."},
        {de:"Ich bin gespannt, wie es wird.", ar:"متشوق أشوف هتبقى عاملة إزاي."},
        {de:"Das hat mich total überrascht.", ar:"ده فاجئني جدًا."},
        {de:"Ich bin erleichtert, dass alles vorbei ist.", ar:"ارتحت إن كل ده خلص."},
        {de:"Mit der Zeit habe ich mich daran gewöhnt.", ar:"مع الوقت اتعودت عليه."}
      ],
      dialogue: [
        {s:"Lea", de:"Morgen ist dein erster Tag an der Uni. Wie fühlst du dich?", ar:"بكرة أول يوم ليك في الجامعة. حاسس بإيه؟"},
        {s:"Yusuf", de:"Ich bin total aufgeregt und ein bisschen nervös.", ar:"متحمس جدًا ومتوتر شوية."},
        {s:"Lea", de:"Wovor hast du denn Angst?", ar:"خايف من إيه؟"},
        {s:"Yusuf", de:"Dass ich in den Vorlesungen nicht alles verstehe.", ar:"إني ماأفهمش كل حاجة في المحاضرات."},
        {s:"Lea", de:"Das geht allen am Anfang so. Du gewöhnst dich schnell daran.", ar:"كله بيحس كده في الأول. هتتعود بسرعة."},
        {s:"Yusuf", de:"Danke, das beruhigt mich.", ar:"شكرًا، ده طمّنّي."}
      ],
      task: "Beschreibe, wie du dich vor und nach einer großen Veränderung gefühlt hast (Umzug, neuer Job, Prüfung).",
      taskAr: "اوصف حسيت بإيه قبل وبعد تغيير كبير (نقل، شغل جديد، امتحان)."
    },
    {
      situation: "Gratulieren und Mut machen", situationAr: "تهنّي حد وتشجعه",
      phrases: [
        {de:"Herzlichen Glückwunsch zur neuen Stelle!", ar:"مبروك الشغل الجديد!"},
        {de:"Ich freue mich so für dich!", ar:"فرحانلك جدًا!"},
        {de:"Das hast du dir wirklich verdient.", ar:"إنت تستاهل ده بجد."},
        {de:"Du schaffst das bestimmt!", ar:"أكيد هتقدر!"},
        {de:"Mach dir keine Sorgen, das wird schon.", ar:"ماتقلقش، هتتعدل."},
        {de:"Wenn du Hilfe brauchst, sag einfach Bescheid.", ar:"لو احتجت مساعدة قولّي بس."},
        {de:"Ich drücke dir die Daumen.", ar:"بتمنالك التوفيق."},
        {de:"Das ist doch eine tolle Chance!", ar:"دي فرصة ممتازة!"}
      ],
      dialogue: [
        {s:"Sami", de:"Ich habe die Wohnung bekommen!", ar:"خدت الشقة!"},
        {s:"Julia", de:"Wirklich? Herzlichen Glückwunsch! Ich freue mich so für dich.", ar:"بجد؟ مبروك! فرحانة ليك جدًا."},
        {s:"Sami", de:"Danke! Aber ich habe Angst vor dem Umzug. Das ist so viel Arbeit.", ar:"شكرًا! بس خايف من النقل. شغل كتير أوي."},
        {s:"Julia", de:"Mach dir keine Sorgen. Ich helfe dir am Samstag beim Tragen.", ar:"ماتقلقش. هساعدك في الشيل يوم السبت."},
        {s:"Sami", de:"Das ist wirklich lieb von dir.", ar:"ده لطف منك بجد."},
        {s:"Julia", de:"Dafür lädst du mich zur Einweihungsparty ein!", ar:"وفي المقابل تعزمني على حفلة البيت الجديد!"}
      ],
      task: "Eine Freundin hat die Prüfung bestanden und zieht bald um. Gratuliere ihr und biete Hilfe an.",
      taskAr: "صاحبتك نجحت في الامتحان وهتعزّل قريب. هنّيها واعرض عليها المساعدة."
    },
    {
      situation: "Eine Biografie vorstellen", situationAr: "تقدّم سيرة حياة شخص",
      phrases: [
        {de:"Sie wurde 1952 in Kairo geboren.", ar:"اتولدت سنة ١٩٥٢ في القاهرة."},
        {de:"Nach dem Abitur studierte sie Medizin.", ar:"بعد الثانوية درست طب."},
        {de:"1978 zog sie nach Berlin.", ar:"في ١٩٧٨ نقلت برلين."},
        {de:"Dort arbeitete sie zwanzig Jahre als Ärztin.", ar:"هناك اشتغلت دكتورة عشرين سنة."},
        {de:"Besonders bekannt wurde sie durch ihr Buch.", ar:"اتشهرت أكتر بكتابها."},
        {de:"In dieser Zeit gründete sie auch einen Verein.", ar:"في الفترة دي أسست جمعية كمان."},
        {de:"Heute lebt sie mit ihrer Familie in München.", ar:"النهارده عايشة مع عيلتها في ميونخ."},
        {de:"Mich beeindruckt an ihr, dass sie nie aufgegeben hat.", ar:"اللي مبهرني فيها إنها عمرها ما استسلمت."}
      ],
      dialogue: [
        {s:"Lehrerin", de:"Über wen möchtest du heute sprechen?", ar:"هتتكلم عن مين النهارده؟"},
        {s:"Adam", de:"Über meinen Großvater. Er hatte ein sehr spannendes Leben.", ar:"عن جدي. كانت حياته مشوقة جدًا."},
        {s:"Lehrerin", de:"Erzähl mal!", ar:"احكي!"},
        {s:"Adam", de:"Er wuchs in einem kleinen Dorf auf und musste mit vierzehn arbeiten.", ar:"اتربى في قرية صغيرة واضطر يشتغل وهو عنده أربعتاشر سنة."},
        {s:"Adam", de:"Später eröffnete er eine Bäckerei, die es heute noch gibt.", ar:"بعدين فتح مخبز لسه موجود لحد النهارده."},
        {s:"Lehrerin", de:"Was bewunderst du am meisten an ihm?", ar:"إيه أكتر حاجة معجب بيها فيه؟"}
      ],
      task: "Stell das Leben einer Person vor, die du bewunderst: Herkunft, Ausbildung, wichtige Stationen, was dich beeindruckt.",
      taskAr: "قدّم حياة شخص معجب بيه: أصله، تعليمه، محطات مهمة، وإيه اللي مبهرك فيه."
    }
  ],
  4: [
    {
      situation: "Sich im Vorstellungsgespräch vorstellen", situationAr: "تقدم نفسك في مقابلة شغل",
      phrases: [
        {de:"Vielen Dank für die Einladung zum Gespräch.", ar:"شكرًا جدًا على الدعوة للمقابلة."},
        {de:"Ich habe eine Ausbildung als Elektriker gemacht.", ar:"عملت تدريب مهني ككهربائي."},
        {de:"Zurzeit arbeite ich bei einer kleinen Firma in Köln.", ar:"حاليًا بشتغل في شركة صغيرة في كولونيا."},
        {de:"Ich bin für die Kundenbetreuung zuständig.", ar:"أنا مسؤول عن خدمة العملاء."},
        {de:"Ich habe drei Jahre Berufserfahrung in diesem Bereich.", ar:"عندي تلات سنين خبرة في المجال ده."},
        {de:"Ich interessiere mich für diese Stelle, weil ich mich weiterentwickeln möchte.", ar:"مهتم بالوظيفة دي لإني عايز أطور نفسي."},
        {de:"An Ihrer Firma gefällt mir besonders, dass Sie international arbeiten.", ar:"اللي عاجبني في شركتكم بالذات إنكم بتشتغلوا دوليًا."},
        {de:"Ich könnte ab dem ersten März anfangen.", ar:"أقدر أبدأ من أول مارس."}
      ],
      dialogue: [
        {s:"Chefin", de:"Erzählen Sie doch mal etwas über sich.", ar:"احكيلنا شوية عن نفسك."},
        {s:"Bewerber", de:"Gern. Ich heiße Ali Hassan und habe Informatik studiert.", ar:"بكل سرور. اسمي علي حسن ودرست علوم حاسب."},
        {s:"Bewerber", de:"Seit zwei Jahren arbeite ich als Programmierer in einem Start-up.", ar:"من سنتين بشتغل مبرمج في شركة ناشئة."},
        {s:"Chefin", de:"Warum möchten Sie wechseln?", ar:"ليه عايز تغير؟"},
        {s:"Bewerber", de:"Ich würde gern in einem größeren Team arbeiten und mehr Verantwortung übernehmen.", ar:"حابب أشتغل في فريق أكبر وآخد مسؤولية أكتر."},
        {s:"Chefin", de:"Das passt gut, wir suchen jemanden, der später ein Projekt leitet.", ar:"ده مناسب، إحنا بندور على حد يقود مشروع بعدين."}
      ],
      task: "Stell dich in einem Vorstellungsgespräch vor: Ausbildung, Erfahrung, aktuelle Aufgaben und warum du die Stelle möchtest.",
      taskAr: "قدم نفسك في مقابلة شغل: تعليمك، خبرتك، شغلك الحالي، وليه عايز الوظيفة."
    },
    {
      situation: "Stärken, Schwächen und Erfahrungen", situationAr: "نقاط القوة والضعف والخبرات",
      phrases: [
        {de:"Zu meinen Stärken gehört, dass ich sehr zuverlässig bin.", ar:"من نقاط قوتي إني بعتمد عليّا جدًا."},
        {de:"Ich arbeite gern im Team, kann aber auch selbstständig arbeiten.", ar:"بحب الشغل في فريق، بس أقدر أشتغل لوحدي كمان."},
        {de:"Ich behalte auch in stressigen Situationen einen kühlen Kopf.", ar:"بحافظ على هدوئي حتى في المواقف المضغوطة."},
        {de:"Eine Schwäche von mir ist, dass ich manchmal zu ungeduldig bin.", ar:"من نقاط ضعفي إني ساعات بكون مستعجل زيادة."},
        {de:"Daran arbeite ich, indem ich mir mehr Zeit nehme.", ar:"بشتغل على ده بإني باخد وقت أكتر."},
        {de:"In meinem letzten Job habe ich gelernt, Prioritäten zu setzen.", ar:"في شغلي اللي فات اتعلمت أرتب الأولويات."},
        {de:"Ein Erfolg, auf den ich stolz bin, war unser neues Kundensystem.", ar:"من النجاحات اللي فخور بيها نظام العملاء الجديد بتاعنا."},
        {de:"Mit Kritik kann ich gut umgehen.", ar:"بتعامل مع النقد كويس."}
      ],
      dialogue: [
        {s:"Personalchef", de:"Was sind Ihre größten Stärken?", ar:"إيه أكبر نقاط قوتك؟"},
        {s:"Bewerberin", de:"Ich bin sehr organisiert und kann gut mit Menschen umgehen.", ar:"أنا منظمة جدًا وبعرف أتعامل مع الناس كويس."},
        {s:"Personalchef", de:"Und gibt es auch etwas, das Sie verbessern möchten?", ar:"وفي حاجة عايزة تحسنيها؟"},
        {s:"Bewerberin", de:"Ich spreche nicht gern vor großen Gruppen.", ar:"مابحبش أتكلم قدام مجموعات كبيرة."},
        {s:"Bewerberin", de:"Deshalb habe ich letztes Jahr einen Präsentationskurs gemacht.", ar:"علشان كده عملت كورس عروض تقديمية السنة اللي فاتت."},
        {s:"Personalchef", de:"Das finde ich sehr gut, dass Sie aktiv daran arbeiten.", ar:"كويس جدًا إنك بتشتغلي على ده بنفسك."}
      ],
      task: "Nenne zwei Stärken mit einem Beispiel und eine Schwäche – und was du dagegen tust.",
      taskAr: "قول نقطتين قوة بمثال، ونقطة ضعف – وبتعمل إيه علشانها."
    },
    {
      situation: "Im Vorstellungsgespräch Fragen stellen", situationAr: "تسأل أسئلة في المقابلة",
      phrases: [
        {de:"Darf ich Ihnen auch ein paar Fragen stellen?", ar:"ممكن أسألك كام سؤال أنا كمان؟"},
        {de:"Wie sieht ein typischer Arbeitstag aus?", ar:"يوم الشغل العادي شكله إيه؟"},
        {de:"Mit wem würde ich hauptsächlich zusammenarbeiten?", ar:"هشتغل مع مين أساسًا؟"},
        {de:"Gibt es die Möglichkeit, im Homeoffice zu arbeiten?", ar:"في إمكانية أشتغل من البيت؟"},
        {de:"Welche Weiterbildungsmöglichkeiten bieten Sie an?", ar:"إيه فرص التدريب اللي بتقدموها؟"},
        {de:"Wie sind die Arbeitszeiten geregelt?", ar:"مواعيد الشغل منظمة إزاي؟"},
        {de:"Wann kann ich mit einer Antwort rechnen?", ar:"أتوقع الرد إمتى؟"},
        {de:"Ich würde mich sehr freuen, von Ihnen zu hören.", ar:"هكون مبسوط جدًا لو سمعت منكم."}
      ],
      dialogue: [
        {s:"Chef", de:"Haben Sie noch Fragen an uns?", ar:"عندك أسئلة لينا؟"},
        {s:"Bewerberin", de:"Ja, gern. Wie ist das Team zusammengesetzt?", ar:"أيوه. الفريق متكون من مين؟"},
        {s:"Chef", de:"Sie wären zu sechst, alle zwischen 25 und 40.", ar:"هتكونوا ست أشخاص، كلهم بين ٢٥ و٤٠."},
        {s:"Bewerberin", de:"Gibt es feste Arbeitszeiten oder Gleitzeit?", ar:"في مواعيد ثابتة ولا مواعيد مرنة؟"},
        {s:"Chef", de:"Wir haben Gleitzeit, Kernzeit ist von zehn bis drei.", ar:"مواعيد مرنة، والوقت الأساسي من عشرة لتلاتة."},
        {s:"Bewerberin", de:"Das klingt sehr gut. Wann erfahre ich Ihre Entscheidung?", ar:"كويس جدًا. هعرف قراركم إمتى؟"}
      ],
      task: "Stell am Ende eines Vorstellungsgesprächs drei Fragen: zu Team, Arbeitszeit und Weiterbildung.",
      taskAr: "اسأل تلات أسئلة في آخر المقابلة: عن الفريق، المواعيد، والتدريب."
    },
    {
      situation: "Mit Kollegen Aufgaben absprechen", situationAr: "تتفق مع زمايلك على المهام",
      phrases: [
        {de:"Hättest du kurz Zeit? Ich bräuchte deine Hilfe.", ar:"عندك دقيقة؟ محتاج مساعدتك."},
        {de:"Könntest du bitte den Bericht bis Freitag fertig machen?", ar:"ممكن تخلص التقرير لحد الجمعة لو سمحت؟"},
        {de:"Ich übernehme die Präsentation, wenn du die Zahlen vorbereitest.", ar:"أنا هعمل العرض لو إنت جهزت الأرقام."},
        {de:"Das schaffe ich leider heute nicht mehr.", ar:"مش هلحق أعملها النهارده للأسف."},
        {de:"Sollen wir das in der Besprechung klären?", ar:"نتفق عليها في الاجتماع؟"},
        {de:"Wer ist dafür zuständig?", ar:"مين المسؤول عن ده؟"},
        {de:"Ich schicke dir die Unterlagen gleich per Mail.", ar:"هبعتلك الورق على الإيميل حالًا."},
        {de:"Danke, dass du eingesprungen bist!", ar:"شكرًا إنك غطيت مكاني!"}
      ],
      dialogue: [
        {s:"Tom", de:"Du, hättest du kurz Zeit? Der Kunde möchte das Angebot schon morgen.", ar:"بقولك، عندك دقيقة؟ العميل عايز العرض بكرة."},
        {s:"Rana", de:"Morgen schon? Das ist knapp.", ar:"بكرة؟ الوقت ضيق."},
        {s:"Tom", de:"Ich weiß. Könntest du die Preise berechnen? Ich schreibe den Text.", ar:"عارف. ممكن تحسبي الأسعار؟ وأنا أكتب النص."},
        {s:"Rana", de:"Einverstanden, aber dann brauche ich bis Mittag die Liste der Produkte.", ar:"ماشي، بس محتاجة لستة المنتجات لحد الضهر."},
        {s:"Tom", de:"Kein Problem, ich schicke sie dir gleich.", ar:"مفيش مشكلة، هبعتهالك حالًا."},
        {s:"Rana", de:"Gut, dann schaffen wir das bestimmt.", ar:"تمام، يبقى أكيد هنلحقها."}
      ],
      task: "Ein wichtiges Projekt muss schnell fertig werden. Verteile mit einer Kollegin die Aufgaben und vereinbart eine Frist.",
      taskAr: "مشروع مهم لازم يخلص بسرعة. وزّع المهام مع زميلتك واتفقوا على ميعاد."
    },
    {
      situation: "Sich krankmelden und Termine verschieben", situationAr: "تبلّغ إنك عيان وتأجل مواعيد",
      phrases: [
        {de:"Guten Morgen, ich muss mich leider krankmelden.", ar:"صباح الخير، للأسف لازم أبلغ إني عيان."},
        {de:"Ich habe hohes Fieber und gehe gleich zum Arzt.", ar:"عندي حرارة عالية ورايح للدكتور حالًا."},
        {de:"Ich schicke Ihnen die Krankschreibung, sobald ich sie habe.", ar:"هبعتلك الإجازة المرضية أول ما آخدها."},
        {de:"Könnte jemand meinen Termin um zehn Uhr übernehmen?", ar:"ممكن حد ياخد ميعادي الساعة عشرة؟"},
        {de:"Wäre es möglich, das Treffen auf Donnerstag zu verschieben?", ar:"ينفع نأجل الاجتماع ليوم الخميس؟"},
        {de:"Es tut mir leid für die Umstände.", ar:"آسف على الإزعاج."},
        {de:"Ich melde mich, sobald es mir besser geht.", ar:"هكلمك أول ما أبقى أحسن."},
        {de:"Die wichtigsten Unterlagen liegen auf meinem Schreibtisch.", ar:"أهم الورق على مكتبي."}
      ],
      dialogue: [
        {s:"Mitarbeiterin", de:"Guten Morgen, Frau Klein. Ich kann heute leider nicht kommen, ich bin krank.", ar:"صباح الخير يا مدام كلاين. للأسف مش هقدر آجي النهارده، أنا عيانة."},
        {s:"Chefin", de:"Oh, gute Besserung! Was fehlt Ihnen denn?", ar:"ألف سلامة! عندك إيه؟"},
        {s:"Mitarbeiterin", de:"Ich habe eine starke Erkältung und Fieber.", ar:"عندي برد جامد وحرارة."},
        {s:"Chefin", de:"Haben Sie heute wichtige Termine?", ar:"عندك مواعيد مهمة النهارده؟"},
        {s:"Mitarbeiterin", de:"Um elf ein Kundengespräch. Könnte Herr Wolf das übernehmen?", ar:"الساعة حداشر مقابلة مع عميل. ممكن الأستاذ فولف ياخدها؟"},
        {s:"Chefin", de:"Ich frage ihn. Kurieren Sie sich erst einmal aus.", ar:"هسأله. خدي بالك من صحتك الأول."}
      ],
      task: "Ruf deinen Chef an: Du bist krank. Erkläre kurz, wie lange du fehlst und wer deine Aufgaben übernehmen kann.",
      taskAr: "كلّم مديرك: إنت عيان. اشرح باختصار هتغيب قد إيه ومين ممكن ياخد شغلك."
    }
  ],
  5: [
    {
      situation: "Über Umweltthemen diskutieren", situationAr: "نتناقش في مواضيع البيئة",
      phrases: [
        {de:"Meiner Meinung nach sollte jeder etwas für die Umwelt tun.", ar:"في رأيي كل واحد لازم يعمل حاجة علشان البيئة."},
        {de:"Ich bin davon überzeugt, dass kleine Schritte viel bewirken.", ar:"أنا مقتنع إن الخطوات الصغيرة بتفرق كتير."},
        {de:"Man darf nicht vergessen, dass nicht alle genug Geld haben.", ar:"مانقدرش ننسى إن مش كل الناس معاها فلوس كفاية."},
        {de:"Ein wichtiges Argument dafür ist, dass die Luft sauberer wird.", ar:"من الحجج المهمة لده إن الهوا بيبقى أنضف."},
        {de:"Auf der einen Seite …, auf der anderen Seite …", ar:"من ناحية …، ومن ناحية تانية …"},
        {de:"Ich sehe das ein bisschen anders.", ar:"أنا شايف الموضوع مختلف شوية."},
        {de:"Die Politik muss mehr Verantwortung übernehmen.", ar:"السياسة لازم تتحمل مسؤولية أكبر."},
        {de:"Zusammenfassend kann man sagen, dass …", ar:"باختصار نقدر نقول إن …"}
      ],
      dialogue: [
        {s:"Moderatorin", de:"Sollten Autos in der Innenstadt verboten werden?", ar:"العربيات لازم تتمنع في وسط البلد؟"},
        {s:"Herr Braun", de:"Ich bin dafür. Die Luft wäre besser und es wäre viel ruhiger.", ar:"أنا موافق. الهوا هيبقى أحسن والدنيا هتبقى أهدى بكتير."},
        {s:"Frau Aydin", de:"Das sehe ich anders. Viele ältere Menschen sind auf das Auto angewiesen.", ar:"أنا شايفة غير كده. ناس كبيرة كتير محتاجة العربية."},
        {s:"Herr Braun", de:"Aber dafür könnte man mehr Busse und Taxis anbieten.", ar:"بس ممكن نوفر أتوبيسات وتاكسيات أكتر."},
        {s:"Frau Aydin", de:"Das stimmt, aber das kostet die Stadt viel Geld.", ar:"صح، بس ده هيكلف المدينة فلوس كتير."},
        {s:"Moderatorin", de:"Vielleicht wäre ein autofreier Sonntag ein erster Schritt.", ar:"يمكن يوم حد من غير عربيات يبقى أول خطوة."}
      ],
      task: "Diskutiert: Sollte Plastik im Supermarkt verboten werden? Nennt Argumente dafür und dagegen.",
      taskAr: "اتناقشوا: البلاستيك لازم يتمنع في السوبر ماركت؟ قولوا حجج مع وضد."
    },
    {
      situation: "Eine Umweltaktion planen", situationAr: "نخطط لحملة بيئية",
      phrases: [
        {de:"Wir könnten eine Müllsammelaktion im Park organisieren.", ar:"ممكن ننظم حملة جمع زبالة في الجنينة."},
        {de:"Damit möglichst viele mitmachen, sollten wir Plakate aufhängen.", ar:"علشان أكبر عدد يشارك، لازم نعلق بوسترات."},
        {de:"Um die Nachbarn zu informieren, schreiben wir einen Aushang.", ar:"علشان نعرّف الجيران، هنكتب إعلان."},
        {de:"Wer kann Handschuhe und Müllsäcke besorgen?", ar:"مين يقدر يجيب جوانتيات وأكياس زبالة؟"},
        {de:"Am besten treffen wir uns am Samstag um zehn am Eingang.", ar:"أحسن حاجة نتقابل السبت الساعة عشرة عند المدخل."},
        {de:"Wir sollten auch die Stadt um Unterstützung bitten.", ar:"لازم نطلب دعم من البلدية كمان."},
        {de:"Nach der Aktion könnten wir zusammen grillen.", ar:"بعد الحملة ممكن نعمل شوي سوا."},
        {de:"Ich kümmere mich um die Werbung in den sozialen Medien.", ar:"أنا هتولى الإعلان على السوشيال ميديا."}
      ],
      dialogue: [
        {s:"Eva", de:"Im Park liegt so viel Müll. Wollen wir nicht etwas dagegen tun?", ar:"الجنينة فيها زبالة كتير. مانعملش حاجة؟"},
        {s:"Malik", de:"Gute Idee! Wir könnten eine Aufräumaktion machen.", ar:"فكرة حلوة! ممكن نعمل حملة تنضيف."},
        {s:"Eva", de:"Damit viele kommen, sollten wir die Schule fragen.", ar:"علشان ناس كتير تيجي، لازم نسأل المدرسة."},
        {s:"Malik", de:"Genau. Ich schreibe der Direktorin eine E-Mail.", ar:"بالظبط. هكتب للمديرة إيميل."},
        {s:"Eva", de:"Und ich frage beim Rathaus nach Müllsäcken.", ar:"وأنا هسأل في البلدية على أكياس زبالة."},
        {s:"Malik", de:"Perfekt. Dann treffen wir uns nächsten Samstag.", ar:"تمام. يبقى نتقابل السبت الجاي."}
      ],
      task: "Plant eine Aktion für mehr Umweltschutz in eurem Viertel: Was, wann, wo, wer macht was, wie informiert ihr andere?",
      taskAr: "خططوا لحملة لحماية البيئة في حيكم: إيه، إمتى، فين، مين يعمل إيه، وهتعرّفوا الناس إزاي؟"
    },
    {
      situation: "Tipps für den Alltag geben", situationAr: "تدّي نصايح للحياة اليومية",
      phrases: [
        {de:"Du solltest das Licht ausschalten, wenn du den Raum verlässt.", ar:"لازم تطفي النور لما تخرج من الأوضة."},
        {de:"An deiner Stelle würde ich öfter mit dem Rad fahren.", ar:"لو مكانك كنت ركبت العجلة أكتر."},
        {de:"Es lohnt sich, Glas und Papier zu trennen.", ar:"يستاهل تفصل الإزاز عن الورق."},
        {de:"Statt Wasser in Flaschen zu kaufen, kannst du Leitungswasser trinken.", ar:"بدل ما تشتري مية في إزايز، تقدر تشرب من الحنفية."},
        {de:"Kauf lieber regionales Obst und Gemüse.", ar:"الأحسن تشتري فاكهة وخضار من المنطقة."},
        {de:"Reparieren ist oft günstiger, als etwas Neues zu kaufen.", ar:"التصليح غالبًا أرخص من إنك تشتري جديد."},
        {de:"So sparst du nicht nur Energie, sondern auch Geld.", ar:"كده بتوفر مش بس طاقة، كمان فلوس."},
        {de:"Probier es doch einfach mal aus!", ar:"جرّبها بس!"}
      ],
      dialogue: [
        {s:"Nora", de:"Meine Stromrechnung ist so hoch. Hast du einen Tipp?", ar:"فاتورة الكهربا عالية جدًا. عندك نصيحة؟"},
        {s:"Felix", de:"Lässt du deine Geräte im Stand-by?", ar:"بتسيبي الأجهزة على الاستعداد؟"},
        {s:"Nora", de:"Ja, den Fernseher und den Computer.", ar:"أيوه، التليفزيون والكمبيوتر."},
        {s:"Felix", de:"Du solltest eine Steckdosenleiste mit Schalter benutzen. Das spart viel.", ar:"استخدمي مشترك بزرار. ده بيوفر كتير."},
        {s:"Nora", de:"Und was ist mit dem Kühlschrank?", ar:"وإيه بالنسبة للتلاجة؟"},
        {s:"Felix", de:"Wenn er älter als fünfzehn Jahre ist, lohnt sich ein neuer.", ar:"لو عمرها أكتر من خمستاشر سنة، تستاهل تجيبي جديدة."}
      ],
      task: "Gib einem Freund drei konkrete Tipps, wie er im Alltag umweltfreundlicher leben kann, und begründe sie.",
      taskAr: "ادّي صاحبك تلات نصايح محددة يعيش بيها بطريقة أحسن للبيئة، ووضّح السبب."
    },
    {
      situation: "Höflich zustimmen und widersprechen", situationAr: "توافق أو تعترض بأدب",
      phrases: [
        {de:"Da hast du völlig recht.", ar:"عندك حق تمامًا."},
        {de:"Genau das denke ich auch.", ar:"ده بالظبط اللي أنا شايفه."},
        {de:"Da stimme ich dir nur teilweise zu.", ar:"أنا موافقك في جزء بس."},
        {de:"Das mag sein, aber …", ar:"ممكن، بس …"},
        {de:"Ich verstehe deinen Punkt, trotzdem finde ich …", ar:"فاهم وجهة نظرك، ومع ذلك شايف …"},
        {de:"Da muss ich dir leider widersprechen.", ar:"للأسف لازم أعارضك في دي."},
        {de:"Hast du dabei auch an … gedacht?", ar:"فكرت برده في …؟"},
        {de:"Lass uns einen Kompromiss finden.", ar:"يلا نلاقي حل وسط."}
      ],
      dialogue: [
        {s:"Leon", de:"Ich finde, Fliegen sollte viel teurer werden.", ar:"أنا شايف إن الطيران لازم يغلى أكتر بكتير."},
        {s:"Aya", de:"Da stimme ich dir nur teilweise zu. Viele besuchen so ihre Familie im Ausland.", ar:"موافقاك في جزء بس. ناس كتير بتزور عيلتها برة كده."},
        {s:"Leon", de:"Das mag sein, aber Kurzstrecken könnte man doch mit dem Zug fahren.", ar:"ممكن، بس المسافات القصيرة ممكن تتعمل بالقطر."},
        {s:"Aya", de:"Da hast du recht. Inlandsflüge braucht man eigentlich nicht.", ar:"عندك حق. الرحلات الداخلية مش محتاجينها أصلًا."},
        {s:"Leon", de:"Also sind wir uns einig: Zug statt Flug für kurze Strecken.", ar:"يبقى متفقين: قطر بدل طيارة للمسافات القصيرة."},
        {s:"Aya", de:"Ja, das ist ein guter Kompromiss.", ar:"أيوه، ده حل وسط كويس."}
      ],
      task: "Jemand sagt: „Umweltschutz ist nur etwas für reiche Leute.“ Reagiere höflich: zustimmen, widersprechen, Kompromiss.",
      taskAr: "حد بيقول: \"حماية البيئة للأغنيا بس.\" رد بأدب: وافق، اعترض، واقترح حل وسط."
    },
    {
      situation: "Über Klima und Folgen sprechen", situationAr: "نتكلم عن المناخ ونتايجه",
      phrases: [
        {de:"Die Sommer werden immer heißer und trockener.", ar:"الصيف بيبقى أسخن وأنشف كل سنة."},
        {de:"Wegen der Hitze gibt es immer öfter Waldbrände.", ar:"بسبب الحر بقى في حرايق غابات أكتر."},
        {de:"Die Folge davon ist, dass die Ernte schlechter wird.", ar:"والنتيجة إن المحصول بيقل."},
        {de:"Das Wetter ist so unberechenbar geworden.", ar:"الجو بقى مش متوقع خالص."},
        {de:"Letzte Woche hat es so stark gehagelt, dass viele Autos kaputt waren.", ar:"الأسبوع اللي فات نزل برَد جامد لدرجة إن عربيات كتير اتضررت."},
        {de:"Es ist höchste Zeit, dass wir handeln.", ar:"جه الوقت إننا نتحرك."},
        {de:"Die Wissenschaftler warnen schon seit Jahren davor.", ar:"العلما بيحذروا من ده من سنين."},
        {de:"Trotz allem bin ich optimistisch.", ar:"ورغم كل ده أنا متفائل."}
      ],
      dialogue: [
        {s:"Hana", de:"So ein heißer April! Das ist doch nicht normal.", ar:"أبريل حر كده! ده مش طبيعي."},
        {s:"Ben", de:"Nein, und im Garten ist schon alles trocken.", ar:"لأ، والجنينة كلها ناشفة من دلوقتي."},
        {s:"Hana", de:"Mein Opa sagt, früher lag im April oft noch Schnee.", ar:"جدي بيقول زمان كان ساعات في تلج في أبريل."},
        {s:"Ben", de:"Das ist der Klimawandel. Die Folgen sieht man überall.", ar:"ده تغير المناخ. النتايج باينة في كل حتة."},
        {s:"Hana", de:"Glaubst du, dass wir das noch stoppen können?", ar:"تفتكر لسه نقدر نوقفه؟"},
        {s:"Ben", de:"Ganz stoppen nicht, aber wir können es auf jeden Fall bremsen.", ar:"نوقفه خالص لأ، بس أكيد نقدر نبطّأه."}
      ],
      task: "Beschreibe, wie sich das Wetter in deinem Heimatland verändert hat und welche Folgen das hat.",
      taskAr: "اوصف الجو اتغير إزاي في بلدك وإيه النتايج."
    }
  ],
  6: [
    {
      situation: "Pläne und Vorsätze", situationAr: "الخطط والقرارات للمستقبل",
      phrases: [
        {de:"Nächstes Jahr werde ich die B1-Prüfung machen.", ar:"السنة الجاية هعمل امتحان B1."},
        {de:"Ich habe mir vorgenommen, jeden Tag zwanzig Minuten Deutsch zu lernen.", ar:"قررت أذاكر ألماني عشرين دقيقة كل يوم."},
        {de:"Mein Ziel ist es, eine Ausbildung als Pflegefachkraft zu machen.", ar:"هدفي أعمل تدريب مهني في التمريض."},
        {de:"In fünf Jahren möchte ich ein eigenes Geschäft haben.", ar:"بعد خمس سنين عايز يكون عندي محل خاص بيا."},
        {de:"Dafür muss ich noch viel sparen.", ar:"علشان كده لازم أحوّش كتير."},
        {de:"Ich werde auf jeden Fall mehr Sport treiben.", ar:"أكيد هعمل رياضة أكتر."},
        {de:"Ob ich das schaffe, weiß ich noch nicht.", ar:"لسه مش عارف هقدر ولا لأ."},
        {de:"Schritt für Schritt komme ich meinem Ziel näher.", ar:"خطوة بخطوة بقرب من هدفي."}
      ],
      dialogue: [
        {s:"Lisa", de:"Hast du für das neue Jahr gute Vorsätze?", ar:"عندك قرارات للسنة الجديدة؟"},
        {s:"Hamid", de:"Ja, ich werde endlich den Führerschein machen.", ar:"أيوه، أخيرًا هطلع رخصة السواقة."},
        {s:"Lisa", de:"Toll! Und warum gerade jetzt?", ar:"حلو! وليه دلوقتي بالذات؟"},
        {s:"Hamid", de:"Weil ich eine Stelle auf dem Land annehmen möchte. Dort fährt kaum ein Bus.", ar:"علشان عايز آخد شغل في الريف. مفيش أتوبيسات تقريبًا هناك."},
        {s:"Lisa", de:"Ich habe mir vorgenommen, weniger Zeit am Handy zu verbringen.", ar:"وأنا قررت أقضي وقت أقل على الموبايل."},
        {s:"Hamid", de:"Das nehme ich mir auch jedes Jahr vor!", ar:"ده أنا كمان بقرره كل سنة!"}
      ],
      task: "Erzähl von drei Zielen für die nächsten Jahre und was du konkret dafür tun wirst (Futur I).",
      taskAr: "احكي عن تلات أهداف للسنين الجاية وهتعمل إيه بالظبط علشانها (Futur I)."
    },
    {
      situation: "Vermutungen über die Zukunft", situationAr: "توقعات عن المستقبل",
      phrases: [
        {de:"Ich vermute, dass in zwanzig Jahren kaum noch jemand Bargeld benutzt.", ar:"أتوقع إن بعد عشرين سنة محدش هيستخدم كاش تقريبًا."},
        {de:"Wahrscheinlich werden Roboter viele Arbeiten übernehmen.", ar:"غالبًا الروبوتات هتعمل شغل كتير."},
        {de:"Es kann gut sein, dass wir alle weniger arbeiten.", ar:"وارد جدًا إننا كلنا نشتغل أقل."},
        {de:"Ich bin mir ziemlich sicher, dass Städte grüner werden.", ar:"أنا متأكد تقريبًا إن المدن هتبقى أخضر."},
        {de:"Vielleicht wird man sogar Urlaub auf dem Mond machen.", ar:"يمكن الناس تصيّف على القمر كمان."},
        {de:"Das halte ich eher für unwahrscheinlich.", ar:"ده أنا شايفه مش مرجح."},
        {de:"Niemand kann genau sagen, wie es sein wird.", ar:"محدش يقدر يقول بالظبط هتبقى إزاي."},
        {de:"Das wird sich zeigen.", ar:"الأيام هتبيّن."}
      ],
      dialogue: [
        {s:"Kim", de:"Wie werden wir wohl in dreißig Jahren wohnen?", ar:"يا ترى هنعيش إزاي بعد تلاتين سنة؟"},
        {s:"Aras", de:"Ich vermute, dass die Wohnungen kleiner, aber intelligenter werden.", ar:"أتوقع إن الشقق هتبقى أصغر بس أذكى."},
        {s:"Kim", de:"Du meinst, der Kühlschrank bestellt selbst die Milch?", ar:"قصدك التلاجة هتطلب اللبن لوحدها؟"},
        {s:"Aras", de:"Genau. Und wahrscheinlich wird niemand mehr ein eigenes Auto haben.", ar:"بالظبط. وغالبًا محدش هيبقى عنده عربية خاصة."},
        {s:"Kim", de:"Das halte ich für unwahrscheinlich. Autos sind den Leuten zu wichtig.", ar:"ده مش مرجح في رأيي. العربيات مهمة للناس أوي."},
        {s:"Aras", de:"Mal sehen. Das wird sich zeigen.", ar:"هنشوف. الأيام هتبيّن."}
      ],
      task: "Wie wird Arbeit in 20 Jahren aussehen? Stelle drei Vermutungen auf und sag, wie sicher du dir bist.",
      taskAr: "الشغل هيبقى شكله إيه بعد ٢٠ سنة؟ قول تلات توقعات وقد إيه إنت متأكد."
    },
    {
      situation: "Wünsche und Träume", situationAr: "الأمنيات والأحلام",
      phrases: [
        {de:"Wenn ich mehr Zeit hätte, würde ich ein Instrument lernen.", ar:"لو عندي وقت أكتر كنت اتعلمت آلة موسيقية."},
        {de:"Ich wäre gern ein bisschen mutiger.", ar:"كان نفسي أبقى أجرأ شوية."},
        {de:"Am liebsten würde ich um die Welt reisen.", ar:"أكتر حاجة نفسي فيها إني ألف العالم."},
        {de:"Wenn ich im Lotto gewinnen würde, würde ich meiner Familie ein Haus kaufen.", ar:"لو كسبت اليانصيب كنت اشتريت لعيلتي بيت."},
        {de:"Es wäre schön, wenn wir uns öfter sehen könnten.", ar:"كان هيبقى حلو لو نقدر نشوف بعض أكتر."},
        {de:"Ich hätte gern einen Job, der mir wirklich Spaß macht.", ar:"كان نفسي في شغل بحبه بجد."},
        {de:"Mein größter Traum ist es, ein Buch zu schreiben.", ar:"أكبر حلم عندي إني أكتب كتاب."},
        {de:"Wer weiß, vielleicht klappt es ja eines Tages.", ar:"مين عارف، يمكن تحصل في يوم من الأيام."}
      ],
      dialogue: [
        {s:"Mona", de:"Was würdest du machen, wenn du ein Jahr frei hättest?", ar:"كنت هتعمل إيه لو عندك سنة إجازة؟"},
        {s:"David", de:"Ich würde nach Südamerika fliegen und Spanisch lernen.", ar:"كنت هسافر أمريكا الجنوبية وأتعلم إسباني."},
        {s:"Mona", de:"Klingt super. Ich würde in einem Tierheim helfen.", ar:"جميل. أنا كنت هساعد في ملجأ حيوانات."},
        {s:"David", de:"Wirklich? Das hätte ich nicht gedacht.", ar:"بجد؟ ماكنتش أتوقع."},
        {s:"Mona", de:"Doch, wenn ich Zeit hätte, hätte ich schon lange einen Hund.", ar:"أيوه، لو عندي وقت كان بقى عندي كلب من زمان."},
        {s:"David", de:"Vielleicht klappt es ja nach dem Studium.", ar:"يمكن تحصل بعد الدراسة."}
      ],
      task: "Was würdest du tun, wenn du drei Wünsche frei hättest? Benutze Konjunktiv II und begründe.",
      taskAr: "كنت هتعمل إيه لو عندك تلات أمنيات؟ استخدم Konjunktiv II ووضّح السبب."
    },
    {
      situation: "Ratschläge geben", situationAr: "تدّي نصايح",
      phrases: [
        {de:"An deiner Stelle würde ich zuerst mit der Chefin sprechen.", ar:"لو مكانك كنت هكلم المديرة الأول."},
        {de:"Du solltest dir mehr Pausen gönnen.", ar:"لازم تدّي نفسك راحات أكتر."},
        {de:"Hast du schon mal überlegt, eine Weiterbildung zu machen?", ar:"فكرت قبل كده تعمل تدريب إضافي؟"},
        {de:"Es wäre besser, wenn du dich früher bewerben würdest.", ar:"كان يبقى أحسن لو قدّمت بدري."},
        {de:"Ich an deiner Stelle würde nicht so schnell aufgeben.", ar:"لو أنا مكانك ماكنتش استسلمت بسرعة كده."},
        {de:"Warum fragst du nicht einfach deine Kollegen?", ar:"ليه ماتسألش زمايلك وخلاص؟"},
        {de:"Mir hat es geholfen, alles aufzuschreiben.", ar:"اللي ساعدني إني كتبت كل حاجة."},
        {de:"Ich bin sicher, du findest eine gute Lösung.", ar:"أنا متأكد إنك هتلاقي حل كويس."}
      ],
      dialogue: [
        {s:"Tim", de:"Ich bin mit meinem Job total unzufrieden. Was soll ich machen?", ar:"أنا مش مبسوط خالص في شغلي. أعمل إيه؟"},
        {s:"Rania", de:"Was stört dich denn genau?", ar:"إيه اللي مضايقك بالظبط؟"},
        {s:"Tim", de:"Ich mache jeden Tag das Gleiche und lerne nichts Neues.", ar:"بعمل نفس الحاجة كل يوم ومش بتعلم جديد."},
        {s:"Rania", de:"An deiner Stelle würde ich mit deinem Chef über neue Aufgaben sprechen.", ar:"لو مكانك كنت هتكلم مع مديرك عن مهام جديدة."},
        {s:"Tim", de:"Und wenn er Nein sagt?", ar:"ولو قال لأ؟"},
        {s:"Rania", de:"Dann solltest du dich nach einer anderen Stelle umsehen.", ar:"يبقى تدوّر على شغل تاني."}
      ],
      task: "Ein Freund ist gestresst, weil er Arbeit und Deutschkurs kaum schafft. Gib ihm drei Ratschläge.",
      taskAr: "صاحبك متوتر لإنه مش ملاحق على الشغل وكورس الألماني. ادّيله تلات نصايح."
    },
    {
      situation: "Eine Präsentation halten", situationAr: "تقدم عرض (Präsentation)",
      phrases: [
        {de:"In meiner Präsentation geht es um das Thema „Wohnen in der Zukunft“.", ar:"العرض بتاعي عن موضوع \"السكن في المستقبل\"."},
        {de:"Zuerst berichte ich von meinen eigenen Erfahrungen.", ar:"الأول هحكي عن تجربتي الشخصية."},
        {de:"Danach erkläre ich, wie die Situation in meinem Heimatland ist.", ar:"بعد كده هشرح الوضع في بلدي."},
        {de:"Ein Vorteil ist …, ein Nachteil ist allerdings …", ar:"ميزة هي …، بس في عيب وهو …"},
        {de:"Ich komme jetzt zu meinem letzten Punkt.", ar:"دلوقتي هوصل لآخر نقطة."},
        {de:"Meiner Meinung nach …", ar:"في رأيي …"},
        {de:"Zum Schluss möchte ich sagen, dass …", ar:"في الآخر حابب أقول إن …"},
        {de:"Vielen Dank für Ihre Aufmerksamkeit. Haben Sie noch Fragen?", ar:"شكرًا على انتباهكم. في أي أسئلة؟"}
      ],
      dialogue: [
        {s:"Sprecherin", de:"In meiner Präsentation geht es um die Frage: Stadt oder Land?", ar:"العرض بتاعي عن سؤال: المدينة ولا الريف؟"},
        {s:"Sprecherin", de:"Ich selbst bin auf dem Land aufgewachsen und wohne jetzt in Frankfurt.", ar:"أنا اتربيت في الريف ودلوقتي ساكنة في فرانكفورت."},
        {s:"Sprecherin", de:"In meinem Heimatland ziehen viele junge Leute in die großen Städte.", ar:"في بلدي شباب كتير بينقلوا المدن الكبيرة."},
        {s:"Sprecherin", de:"Ein Vorteil der Stadt sind die Jobs, ein Nachteil sind die hohen Mieten.", ar:"من مميزات المدينة الشغل، ومن العيوب الإيجارات العالية."},
        {s:"Sprecherin", de:"Meiner Meinung nach ist eine kleine Stadt der beste Kompromiss.", ar:"في رأيي المدينة الصغيرة أحسن حل وسط."},
        {s:"Sprecherin", de:"Vielen Dank fürs Zuhören. Haben Sie noch Fragen?", ar:"شكرًا على الاستماع. في أي أسئلة؟"}
      ],
      task: "Halte eine Kurzpräsentation (3 Minuten) zum Thema „Soziale Medien – Fluch oder Segen?“ mit Einleitung, Erfahrung, Situation im Heimatland, Vor- und Nachteilen, Meinung und Schluss.",
      taskAr: "قدّم عرض قصير (٣ دقايق) عن \"السوشيال ميديا – نعمة ولا نقمة؟\": مقدمة، تجربتك، الوضع في بلدك، المميزات والعيوب، رأيك، والخاتمة."
    }
  ]
};

(function mergeB1Conversations(){
  if (!Array.isArray(window.B1_BOOK)) return;
  window.B1_BOOK.forEach(chapter => {
    const situations = window.B1_CONVERSATIONS[chapter.num] || [];
    chapter.conversations = situations;
    chapter.redemittel = chapter.redemittel || [];
    situations.forEach(item => {
      if (chapter.redemittel.some(group => group.cat === item.situation)) return;
      chapter.redemittel.push({ cat: item.situation, catAr: item.situationAr, items: item.phrases });
    });
  });
})();
