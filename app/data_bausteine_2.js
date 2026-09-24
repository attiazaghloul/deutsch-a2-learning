/* Satzbaukasten, Teil 2: Satzmuster, Tabellen, Zeitangaben, Nomen-Verb-Verbindungen,
   Satzanfänge und Artikelregeln. Satzmuster-Zeilen folgen den Feldern in "slots". */
window.BAUSTEINE = window.BAUSTEINE || {};

window.BAUSTEINE.patterns = [
  {id:'aussage',title:'Aussagesatz',titleAr:'الجملة الخبرية',rule:'Das konjugierte Verb steht immer auf Position 2.',ruleAr:'الفعل المصرّف دايمًا في المكان التاني – مش لازم الفاعل يبقى الأول.',
    slots:['Position 1','Verb','Mittelfeld','Ende'],rows:[
      {cells:['Ich','lerne','heute Deutsch.',''],ar:'أنا بذاكر ألماني النهارده.'},
      {cells:['Heute','lerne','ich Deutsch.',''],ar:'النهارده بذاكر ألماني.'},
      {cells:['Deutsch','lerne','ich heute.',''],ar:'الألماني بذاكره النهارده.'}
    ]},
  {id:'wfrage',title:'W-Frage',titleAr:'السؤال بأداة استفهام',rule:'W-Wort auf Position 1, Verb auf Position 2.',ruleAr:'أداة السؤال الأول، الفعل تاني، بعده الفاعل.',
    slots:['W-Wort','Verb','Mittelfeld','Ende'],rows:[
      {cells:['Wo','wohnst','du?',''],ar:'انت ساكن فين؟'},
      {cells:['Wann','fängt','der Kurs','an?'],ar:'الكورس بيبدأ إمتى؟'},
      {cells:['Was','hast','du gestern','gemacht?'],ar:'عملت إيه امبارح؟'}
    ]},
  {id:'janein',title:'Ja/Nein-Frage',titleAr:'سؤال إجابته أيوه/لأ',rule:'Das Verb steht auf Position 1.',ruleAr:'الفعل في الأول خالص.',
    slots:['Verb','Subjekt','Mittelfeld','Ende'],rows:[
      {cells:['Hast','du','heute Zeit?',''],ar:'عندك وقت النهارده؟'},
      {cells:['Kannst','du','mir','helfen?'],ar:'تقدر تساعدني؟'},
      {cells:['Bist','du','schon mal in Berlin','gewesen?'],ar:'رحت برلين قبل كده؟'}
    ]},
  {id:'klammer',title:'Satzklammer',titleAr:'قوس الجملة (فعلين)',rule:'Zwei Verbteile: Teil 1 auf Position 2, Teil 2 ganz am Ende.',ruleAr:'لو في فعلين: المصرّف في المكان التاني، والتاني (مصدر / تصريف تالت / بادئة) في آخر الجملة.',
    slots:['Position 1','Verb 1','Mittelfeld','Verb 2 (Ende)'],rows:[
      {cells:['Ich','muss','morgen früh','aufstehen.'],ar:'Modalverb + Infinitiv – لازم أصحى بدري بكرة.'},
      {cells:['Wir','haben','gestern Pizza','gegessen.'],ar:'Perfekt: haben/sein + Partizip II – أكلنا بيتزا امبارح.'},
      {cells:['Der Film','fängt','um acht Uhr','an.'],ar:'فعل منفصل: البادئة في الآخر – الفيلم بيبدأ الساعة 8.'},
      {cells:['Ich','werde','nächstes Jahr in Wien','studieren.'],ar:'Futur: werden + Infinitiv – هدرس في فيينا السنة الجاية.'},
      {cells:['Das Haus','wurde','1990','gebaut.'],ar:'Passiv: werden + Partizip II – البيت اتبنى سنة 1990.'},
      {cells:['Ich','würde','gern mehr','reisen.'],ar:'Konjunktiv II: würde + Infinitiv – نفسي أسافر أكتر.'}
    ]},
  {id:'nebensatz',title:'Hauptsatz + Nebensatz',titleAr:'جملة رئيسية + جملة فرعية',rule:'Im Nebensatz steht das konjugierte Verb am Ende.',ruleAr:'في الجملة الفرعية الفعل المصرّف آخر كلمة. لو فيها فعلين: المصرّف بعد التاني.',
    slots:['Hauptsatz','Konnektor','Subjekt + Mittelfeld','Verb (Ende)'],rows:[
      {cells:['Ich bleibe zu Hause,','weil','ich krank','bin.'],ar:'هقعد في البيت عشان أنا عيّان.'},
      {cells:['Ich glaube,','dass','er morgen','kommen kann.'],ar:'فعلين: المصدر ثم المصرّف في الآخر.'},
      {cells:['Sie fragt,','ob','du die Hausaufgaben','gemacht hast.'],ar:'Perfekt: التصريف التالت ثم haben.'},
      {cells:['Ruf mich an,','wenn','du','ankommst.'],ar:'الفعل المنفصل بيتلزق في الآخر: ankommst.'}
    ]},
  {id:'nebenvorne',title:'Nebensatz zuerst',titleAr:'الجملة الفرعية في الأول',rule:'Der ganze Nebensatz ist Position 1 – danach kommt sofort das Verb.',ruleAr:'الجملة الفرعية كلها بتاخد المكان الأول، فالجملة الرئيسية تبدأ بالفعل: Verb, Verb.',
    slots:['Nebensatz (Position 1)','Verb','Subjekt + Rest',''],rows:[
      {cells:['Weil ich krank bin,','bleibe','ich zu Hause.',''],ar:'عشان أنا عيّان، هقعد في البيت.'},
      {cells:['Wenn es regnet,','nehmen','wir den Bus.',''],ar:'لو الدنيا مطرت، هناخد الأتوبيس.'},
      {cells:['Als ich klein war,','habe','ich in Kairo','gewohnt.'],ar:'لما كنت صغير كنت ساكن في القاهرة.'}
    ]},
  {id:'tekamolo',title:'Mittelfeld: TeKaMoLo',titleAr:'ترتيب الظروف: زمان – سبب – طريقة – مكان',rule:'Temporal – Kausal – Modal – Lokal (wann – warum – wie – wo).',ruleAr:'لو عندك أكتر من ظرف: الزمان الأول، بعده السبب، بعده الطريقة، وآخر حاجة المكان.',
    slots:['Subjekt + Verb','Te (wann?)','Ka / Mo (warum? wie?)','Lo (wo? wohin?)'],rows:[
      {cells:['Ich fahre','morgen','wegen der Arbeit mit dem Zug','nach Hamburg.'],ar:'بكرة هسافر هامبورج بالقطر عشان الشغل.'},
      {cells:['Wir treffen uns','am Abend','gemütlich','im Café.'],ar:'هنتقابل بالليل على رواقة في الكافيه.'}
    ]},
  {id:'objekte',title:'Dativ und Akkusativ im Satz',titleAr:'ترتيب المفعولين',rule:'Nomen: Dativ vor Akkusativ · Pronomen: Akkusativ vor Dativ · Pronomen vor Nomen.',ruleAr:'اسمين: الشخص (داتيف) قبل الحاجة. ضميرين: الأكوزاتيف الأول. والضمير قبل الاسم دايمًا.',
    slots:['Subjekt','Verb','Objekt 1','Objekt 2'],rows:[
      {cells:['Ich','gebe','dem Kind','den Ball.'],ar:'اسم + اسم: داتيف ثم أكوزاتيف.'},
      {cells:['Ich','gebe','ihm','den Ball.'],ar:'ضمير + اسم: الضمير الأول.'},
      {cells:['Ich','gebe','ihn','ihm.'],ar:'ضمير + ضمير: الأكوزاتيف الأول.'}
    ]},
  {id:'negation',title:'Verneinung: nicht oder kein?',titleAr:'النفي: nicht ولا kein؟',rule:'kein = ein/– + Nomen verneinen · nicht = alles andere (Verb, Adjektiv, bestimmtes Nomen).',ruleAr:'kein قبل الاسم اللي من غير أداة أو مع ein. nicht لباقي الحاجات، وبييجي غالبًا قبل الحاجة اللي بتنفيها أو في آخر الجملة.',
    slots:['Position 1','Verb','Mittelfeld','Ende'],rows:[
      {cells:['Ich','habe','kein Auto.',''],ar:'معنديش عربية (ein Auto → kein Auto).'},
      {cells:['Ich','trinke','keinen Kaffee.',''],ar:'مش بشرب قهوة (Kaffee من غير أداة → kein).'},
      {cells:['Ich','komme','heute','nicht.'],ar:'مش جاي النهارده (نفي الفعل → في الآخر).'},
      {cells:['Das Essen','ist','nicht','teuer.'],ar:'الأكل مش غالي (nicht قبل الصفة).'},
      {cells:['Ich','kann','heute nicht','kommen.'],ar:'nicht قبل الفعل التاني في الآخر.'}
    ]},
  {id:'imperativ',title:'Imperativ',titleAr:'صيغة الأمر',rule:'Verb auf Position 1. du: ohne -st und ohne du · ihr: wie Präsens · Sie: Verb + Sie.',ruleAr:'الفعل الأول. مع du: تشيل -st والضمير. مع ihr: زي المضارع من غير ihr. مع Sie: الفعل + Sie.',
    slots:['Verb','(Sie)','Mittelfeld','Ende'],rows:[
      {cells:['Komm','','bitte schnell!',''],ar:'تعالى بسرعة لو سمحت! (du kommst → Komm!)'},
      {cells:['Mach','','das Fenster','zu!'],ar:'فعل منفصل: البادئة في الآخر.'},
      {cells:['Kommt','','morgen pünktlich!',''],ar:'تعالوا بكرة في المعاد! (ihr kommt → Kommt!)'},
      {cells:['Nehmen','Sie','bitte Platz!',''],ar:'اتفضل اقعد! (رسمي: Verb + Sie)'}
    ]},
  {id:'zuinf',title:'Infinitiv mit zu',titleAr:'المصدر مع zu',rule:'zu steht direkt vor dem Infinitiv am Ende; bei trennbaren Verben in der Mitte.',ruleAr:'zu قبل المصدر في الآخر. في الأفعال المنفصلة بتدخل في النص: anzurufen.',
    slots:['Hauptsatz','Konnektor','Mittelfeld','zu + Infinitiv'],rows:[
      {cells:['Ich lerne Deutsch,','um','in Deutschland','zu arbeiten.'],ar:'بذاكر ألماني عشان أشتغل في ألمانيا.'},
      {cells:['Ich habe vergessen,','','dich','anzurufen.'],ar:'نسيت أكلمك.'},
      {cells:['Es macht Spaß,','','mit Freunden','zu kochen.'],ar:'الطبخ مع الأصحاب ممتع.'}
    ]},
  {id:'relativ',title:'Relativsatz',titleAr:'جملة الصلة (اللي)',rule:'Relativpronomen = Genus vom Nomen, Kasus vom Verb im Relativsatz. Verb am Ende.',ruleAr:'ضمير الصلة ياخد نوع الاسم (der/die/das) وحالته من فعل الجملة الفرعية، والفعل في الآخر.',
    slots:['Nomen','Relativpronomen','Mittelfeld','Verb (Ende)'],rows:[
      {cells:['Das ist der Mann,','der','neben mir','wohnt.'],ar:'Nominativ – ده الراجل اللي ساكن جنبي.'},
      {cells:['Das ist der Mann,','den','ich gestern','getroffen habe.'],ar:'Akkusativ – ده الراجل اللي قابلته امبارح.'},
      {cells:['Das ist die Frau,','der','ich','helfe.'],ar:'Dativ – دي الست اللي بساعدها.'}
    ]}
];

window.BAUSTEINE.tables = [
  {id:'personal',title:'Personalpronomen',titleAr:'الضمائر الشخصية',head:['Nominativ','Akkusativ','Dativ','Arabisch'],rows:[
    ['ich','mich','mir','أنا'],['du','dich','dir','انت / انتي'],['er','ihn','ihm','هو'],['sie','sie','ihr','هي'],['es','es','ihm','هو/هي (محايد)'],
    ['wir','uns','uns','إحنا'],['ihr','euch','euch','انتو'],['sie','sie','ihnen','هم'],['Sie','Sie','Ihnen','حضرتك / حضرتكم']
  ]},
  {id:'reflexiv',title:'Reflexivpronomen',titleAr:'ضمائر الانعكاس',head:['Person','Akkusativ','Dativ','Beispiel'],rows:[
    ['ich','mich','mir','Ich wasche mich. / Ich wasche mir die Hände.'],['du','dich','dir','Du freust dich.'],['er/sie/es','sich','sich','Er beeilt sich.'],
    ['wir','uns','uns','Wir treffen uns.'],['ihr','euch','euch','Ihr erholt euch.'],['sie/Sie','sich','sich','Sie merken sich das.']
  ]},
  {id:'possessiv',title:'Possessivartikel',titleAr:'أدوات الملكية',head:['Person','Possessiv','Arabisch','Beispiel'],rows:[
    ['ich','mein','بتاعي','mein Bruder, meine Schwester'],['du','dein','بتاعك','dein Handy'],['er / es','sein','بتاعه','sein Auto'],['sie','ihr','بتاعها','ihre Tasche'],
    ['wir','unser','بتاعنا','unsere Wohnung'],['ihr','euer','بتاعكم','eure Kinder'],['sie','ihr','بتاعهم','ihr Haus'],['Sie','Ihr','بتاع حضرتك','Ihr Ausweis']
  ]},
  {id:'artikel',title:'Bestimmter Artikel',titleAr:'أداة التعريف في الحالات الأربعة',head:['Kasus','maskulin','feminin','neutral','Plural'],rows:[
    ['Nominativ','der','die','das','die'],['Akkusativ','den','die','das','die'],['Dativ','dem','der','dem','den (+n)'],['Genitiv','des (+s)','der','des (+s)','der']
  ]},
  {id:'unbestimmt',title:'Unbestimmter Artikel & kein / mein',titleAr:'أداة النكرة و kein / mein',head:['Kasus','maskulin','feminin','neutral','Plural'],rows:[
    ['Nominativ','ein / kein','eine / keine','ein / kein','– / keine'],['Akkusativ','einen / keinen','eine / keine','ein / kein','– / keine'],
    ['Dativ','einem / keinem','einer / keiner','einem / keinem','– / keinen (+n)'],['Genitiv','eines / keines','einer / keiner','eines / keines','– / keiner']
  ]},
  {id:'adj-best',title:'Adjektiv nach der/die/das',titleAr:'نهايات الصفة بعد أداة التعريف',head:['Kasus','maskulin','feminin','neutral','Plural'],rows:[
    ['Nominativ','der alte Mann','die alte Frau','das alte Haus','die alten Leute'],['Akkusativ','den alten Mann','die alte Frau','das alte Haus','die alten Leute'],
    ['Dativ','dem alten Mann','der alten Frau','dem alten Haus','den alten Leuten'],['Genitiv','des alten Mannes','der alten Frau','des alten Hauses','der alten Leute']
  ],note:'Nur 5× -e (Nominativ Singular + Akkusativ feminin/neutral), sonst immer -en.',noteAr:'الصفة بتاخد -e في خمس أماكن بس (الفاعل المفرد + أكوزاتيف المؤنث والمحايد)، وفي كل الباقي -en.'},
  {id:'adj-unbest',title:'Adjektiv nach ein/kein/mein',titleAr:'نهايات الصفة بعد ein / kein / mein',head:['Kasus','maskulin','feminin','neutral','Plural (kein/mein)'],rows:[
    ['Nominativ','ein alter Mann','eine alte Frau','ein altes Haus','meine alten Freunde'],['Akkusativ','einen alten Mann','eine alte Frau','ein altes Haus','meine alten Freunde'],
    ['Dativ','einem alten Mann','einer alten Frau','einem alten Haus','meinen alten Freunden'],['Genitiv','eines alten Mannes','einer alten Frau','eines alten Hauses','meiner alten Freunde']
  ],note:'Wo der Artikel das Genus nicht zeigt (ein Mann, ein Haus), zeigt es das Adjektiv: -er / -es.',noteAr:'لما الأداة متبيّنش النوع (ein)، الصفة هي اللي تبيّنه: -er للمذكر و -es للمحايد.'},
  {id:'adj-null',title:'Adjektiv ohne Artikel',titleAr:'نهايات الصفة من غير أداة',head:['Kasus','maskulin','feminin','neutral','Plural'],rows:[
    ['Nominativ','guter Kaffee','frische Milch','kaltes Wasser','neue Schuhe'],['Akkusativ','guten Kaffee','frische Milch','kaltes Wasser','neue Schuhe'],
    ['Dativ','mit gutem Kaffee','mit frischer Milch','mit kaltem Wasser','mit neuen Schuhen'],['Genitiv','guten Kaffees','frischer Milch','kalten Wassers','neuer Schuhe']
  ],note:'Das Adjektiv übernimmt die Endung vom bestimmten Artikel (der → -er, dem → -em …).',noteAr:'الصفة بتاخد نهاية أداة التعريف بنفسها: der ← -er، dem ← -em، das ← -es.'},
  {id:'modal',title:'Modalverben im Präsens',titleAr:'الأفعال الناقصة في المضارع',head:['Person','können','müssen','wollen','dürfen','sollen','möchten'],rows:[
    ['ich','kann','muss','will','darf','soll','möchte'],['du','kannst','musst','willst','darfst','sollst','möchtest'],['er/sie/es','kann','muss','will','darf','soll','möchte'],
    ['wir','können','müssen','wollen','dürfen','sollen','möchten'],['ihr','könnt','müsst','wollt','dürft','sollt','möchtet'],['sie/Sie','können','müssen','wollen','dürfen','sollen','möchten']
  ],note:'können = يقدر · müssen = لازم · wollen = عايز (بإصرار) · dürfen = مسموح له · sollen = المفروض · möchten = حابب / نفسه',noteAr:'ich و er نفس الشكل ومن غير نهاية: ich kann – er kann.'},
  {id:'hilfs',title:'sein · haben · werden',titleAr:'الأفعال المساعدة',head:['Person','sein','haben','werden'],rows:[
    ['ich','bin','habe','werde'],['du','bist','hast','wirst'],['er/sie/es','ist','hat','wird'],['wir','sind','haben','werden'],['ihr','seid','habt','werdet'],['sie/Sie','sind','haben','werden']
  ]}
];

window.BAUSTEINE.time = [
  {title:'Uhrzeit, Tag, Monat, Jahr',titleAr:'الساعة واليوم والشهر والسنة',items:[
    {de:'um 8 Uhr',ar:'الساعة 8',ex:'Der Kurs beginnt um 8 Uhr.'},
    {de:'am Montag / am Wochenende',ar:'يوم الاتنين / في الويك إند',ex:'Am Montag habe ich frei.'},
    {de:'am Morgen / am Abend',ar:'الصبح / بالليل',ex:'Am Abend sehe ich fern.'},
    {de:'in der Nacht',ar:'بالليل (متأخر)',ex:'In der Nacht schlafe ich schlecht.'},
    {de:'am 3. Mai (am dritten Mai)',ar:'يوم 3 مايو',ex:'Ich habe am dritten Mai Geburtstag.'},
    {de:'im Mai / im Sommer',ar:'في مايو / في الصيف',ex:'Im Sommer fahren wir ans Meer.'},
    {de:'2024 / im Jahr 2024',ar:'سنة 2024 (من غير in لوحدها)',ex:'2024 bin ich nach Deutschland gekommen.'},
    {de:'morgens, mittags, abends, nachts',ar:'كل صبح / ضهر / ليلة (عادة)',ex:'Morgens trinke ich Tee.'},
    {de:'montags, dienstags …',ar:'كل يوم اتنين، تلات …',ex:'Montags gehe ich schwimmen.'}
  ]},
  {title:'Vergangenheit, Dauer, Zukunft',titleAr:'الماضي والمدة والمستقبل',items:[
    {de:'vor + Dativ',ar:'من (فات) – vor zwei Jahren',ex:'Vor zwei Jahren bin ich umgezogen.'},
    {de:'seit + Dativ',ar:'من (ولسه مستمر)',ex:'Ich wohne seit drei Monaten hier.'},
    {de:'in + Dativ',ar:'بعد (في المستقبل) – in einer Woche',ex:'In einer Woche habe ich Urlaub.'},
    {de:'für + Akkusativ',ar:'لمدة (مخطط لها)',ex:'Ich fahre für zwei Wochen nach Spanien.'},
    {de:'ab + Dativ',ar:'ابتداءً من',ex:'Ab Montag arbeite ich wieder.'},
    {de:'von … bis …',ar:'من … لحد …',ex:'Ich arbeite von 9 bis 17 Uhr.'},
    {de:'bis + Akkusativ',ar:'لحد',ex:'Bis nächsten Freitag muss ich fertig sein.'},
    {de:'während + Genitiv',ar:'أثناء',ex:'Während des Urlaubs habe ich viel gelesen.'},
    {de:'nach + Dativ / vor + Dativ',ar:'بعد / قبل (حدث)',ex:'Nach dem Essen gehe ich spazieren. – Vor dem Essen wasche ich mir die Hände.'}
  ]},
  {title:'Zeitadverbien',titleAr:'ظروف الزمان',items:[
    {de:'vorgestern – gestern – heute – morgen – übermorgen',ar:'أول امبارح – امبارح – النهارده – بكرة – بعد بكرة',ex:'Übermorgen fliege ich nach Kairo.'},
    {de:'früher – jetzt – später',ar:'زمان – دلوقتي – بعدين',ex:'Früher habe ich geraucht, jetzt nicht mehr.'},
    {de:'gerade',ar:'حالًا / دلوقتي بالظبط',ex:'Ich koche gerade.'},
    {de:'sofort / gleich',ar:'حالًا / كمان شوية',ex:'Ich komme gleich.'},
    {de:'bald',ar:'قريب',ex:'Bis bald!'},
    {de:'schon / noch nicht',ar:'خلاص / لسه',ex:'Hast du schon gegessen? – Nein, noch nicht.'},
    {de:'noch / nicht mehr',ar:'لسه / خلاص مبقاش',ex:'Wohnst du noch in Berlin? – Nein, nicht mehr.'},
    {de:'erst',ar:'لسه بس / مش قبل',ex:'Der Zug kommt erst um zehn.'},
    {de:'zuerst – dann – danach – zum Schluss',ar:'الأول – بعدين – بعد كده – في الآخر',ex:'Zuerst dusche ich, dann frühstücke ich.'}
  ]},
  {title:'Wie oft?',titleAr:'كام مرة؟',items:[
    {de:'immer',ar:'دايمًا (100%)',ex:'Ich trinke immer Kaffee am Morgen.'},
    {de:'fast immer / meistens',ar:'غالبًا',ex:'Meistens fahre ich mit dem Rad.'},
    {de:'oft / häufig',ar:'كتير',ex:'Wir gehen oft ins Kino.'},
    {de:'manchmal',ar:'أحيانًا',ex:'Manchmal koche ich selbst.'},
    {de:'selten',ar:'نادرًا',ex:'Ich esse selten Fleisch.'},
    {de:'fast nie / nie',ar:'تقريبًا مفيش / أبدًا',ex:'Er ist nie pünktlich.'},
    {de:'einmal, zweimal … pro Woche',ar:'مرة، مرتين … في الأسبوع',ex:'Ich gehe zweimal pro Woche zum Sport.'},
    {de:'jeden Tag / jede Woche / jedes Jahr',ar:'كل يوم / أسبوع / سنة',ex:'Jeden Tag lerne ich zehn Wörter.'}
  ]}
];

window.BAUSTEINE.nounVerb = [
  {de:'eine Entscheidung treffen',ar:'ياخد قرار',ex:'Ich muss bald eine Entscheidung treffen.'},
  {de:'eine Frage stellen',ar:'يسأل سؤال',ex:'Darf ich Ihnen eine Frage stellen?'},
  {de:'einen Antrag stellen',ar:'يقدّم طلب',ex:'Ich möchte einen Antrag auf Kindergeld stellen.'},
  {de:'Platz nehmen',ar:'يتفضل يقعد',ex:'Bitte nehmen Sie Platz.'},
  {de:'eine Rolle spielen',ar:'يلعب دور / يفرق',ex:'Das Geld spielt keine Rolle.'},
  {de:'Bescheid sagen / geben',ar:'يبلّغ / يعرّف',ex:'Sag mir bitte Bescheid, wenn du kommst.'},
  {de:'Bescheid wissen',ar:'عارف الموضوع',ex:'Weißt du schon Bescheid?'},
  {de:'einen Termin vereinbaren',ar:'يحدد ميعاد',ex:'Ich möchte einen Termin beim Arzt vereinbaren.'},
  {de:'einen Termin absagen / verschieben',ar:'يلغي / يأجل ميعاد',ex:'Ich muss den Termin leider verschieben.'},
  {de:'Hilfe leisten',ar:'يقدّم مساعدة',ex:'Er hat sofort Erste Hilfe geleistet.'},
  {de:'einen Fehler machen',ar:'يغلط',ex:'Jeder macht mal einen Fehler.'},
  {de:'Sport treiben',ar:'يمارس رياضة',ex:'Ich treibe dreimal pro Woche Sport.'},
  {de:'eine Prüfung ablegen / bestehen',ar:'يمتحن / ينجح في امتحان',ex:'Sie hat die Prüfung bestanden.'},
  {de:'Rücksicht nehmen auf + A',ar:'يراعي',ex:'Bitte nehmen Sie Rücksicht auf die Nachbarn.'},
  {de:'in Frage kommen',ar:'وارد / ممكن',ex:'Das kommt nicht in Frage!'},
  {de:'zur Verfügung stehen',ar:'متاح',ex:'Ich stehe Ihnen gern zur Verfügung.'},
  {de:'in Kontakt bleiben',ar:'يفضل على تواصل',ex:'Lass uns in Kontakt bleiben!'},
  {de:'Kontakt aufnehmen mit + D',ar:'يتواصل مع',ex:'Bitte nehmen Sie Kontakt mit uns auf.'},
  {de:'Abschied nehmen von + D',ar:'يودّع',ex:'Wir nehmen Abschied von unseren Freunden.'},
  {de:'einen Vorschlag machen',ar:'يقترح',ex:'Darf ich einen Vorschlag machen?'},
  {de:'einen Spaziergang machen',ar:'يتمشى',ex:'Nach dem Essen machen wir einen Spaziergang.'},
  {de:'eine Pause machen',ar:'ياخد استراحة',ex:'Lass uns kurz eine Pause machen.'},
  {de:'Urlaub machen',ar:'ياخد إجازة',ex:'Wir machen im August Urlaub.'},
  {de:'sich Sorgen machen',ar:'يقلق',ex:'Mach dir keine Sorgen!'},
  {de:'Spaß machen',ar:'ممتع',ex:'Deutsch lernen macht mir Spaß.'},
  {de:'Angst haben vor + D',ar:'يخاف من',ex:'Ich habe Angst vor der Prüfung.'},
  {de:'Recht haben',ar:'عنده حق',ex:'Da hast du Recht.'},
  {de:'Glück / Pech haben',ar:'حظه حلو / وحش',ex:'Wir hatten Glück mit dem Wetter.'},
  {de:'Durst / Hunger haben',ar:'عطشان / جعان',ex:'Ich habe großen Hunger.'},
  {de:'Kritik üben an + D',ar:'ينتقد',ex:'Er übt Kritik an dem Plan.'},
  {de:'einen Vertrag abschließen',ar:'يمضي عقد',ex:'Wir haben einen Mietvertrag abgeschlossen.'},
  {de:'einen Vertrag kündigen',ar:'يلغي عقد',ex:'Ich möchte meinen Handyvertrag kündigen.'},
  {de:'Geld abheben / überweisen',ar:'يسحب / يحوّل فلوس',ex:'Ich hebe am Automaten Geld ab.'},
  {de:'eine Wohnung mieten / kündigen',ar:'يأجر / يسيب شقة',ex:'Wir haben die Wohnung zum Juni gekündigt.'},
  {de:'Erfahrungen sammeln',ar:'يكتسب خبرة',ex:'Im Praktikum habe ich viele Erfahrungen gesammelt.'},
  {de:'einen Eindruck machen',ar:'يسيب انطباع',ex:'Er hat einen guten Eindruck gemacht.'},
  {de:'Wert legen auf + A',ar:'يهتم جدًا بـ',ex:'Ich lege großen Wert auf Pünktlichkeit.'},
  {de:'in Ordnung sein',ar:'تمام / ماشي',ex:'Ist alles in Ordnung?'},
  {de:'zu Ende gehen',ar:'يخلص / يقرب يخلص',ex:'Der Urlaub geht leider zu Ende.'},
  {de:'Zeit verbringen',ar:'يقضّي وقت',ex:'Ich verbringe viel Zeit mit meiner Familie.'}
];

window.BAUSTEINE.starters = [
  {group:'Meinung sagen',groupAr:'تقول رأيك',items:[
    {de:'Ich finde, dass …',note:'Verb am Ende',ar:'أنا شايف إن …',ex:'Ich finde, dass das Essen zu teuer ist.'},
    {de:'Ich glaube / denke, dass …',note:'Verb am Ende',ar:'أعتقد إن …',ex:'Ich denke, dass er recht hat.'},
    {de:'Meiner Meinung nach …',note:'danach Verb + Subjekt',ar:'في رأيي …',ex:'Meiner Meinung nach ist das eine gute Idee.'},
    {de:'Ich bin der Meinung, dass …',note:'Verb am Ende',ar:'أنا من رأيي إن …',ex:'Ich bin der Meinung, dass Kinder draußen spielen sollten.'},
    {de:'Ich bin dafür / dagegen, dass …',note:'Verb am Ende',ar:'أنا مع / ضد إن …',ex:'Ich bin dagegen, dass wir so früh losfahren.'},
    {de:'Da hast du recht. / Da stimme ich dir zu.',note:'fester Satz',ar:'عندك حق / موافقك',ex:'Da stimme ich dir völlig zu.'},
    {de:'Das sehe ich anders.',note:'fester Satz',ar:'أنا شايف الموضوع غير كده',ex:'Das sehe ich anders, weil …'}
  ]},
  {group:'Bitten und fragen',groupAr:'تطلب وتسأل بأدب',items:[
    {de:'Könnten Sie bitte …?',note:'Infinitiv am Ende',ar:'ممكن حضرتك …؟',ex:'Könnten Sie das bitte wiederholen?'},
    {de:'Kannst du mir … helfen?',note:'helfen + Dativ',ar:'ممكن تساعدني في …؟',ex:'Kannst du mir beim Umzug helfen?'},
    {de:'Ich hätte gern …',note:'+ Akkusativ',ar:'عايز / حابب آخد …',ex:'Ich hätte gern einen Kaffee.'},
    {de:'Ich möchte …',note:'Infinitiv am Ende',ar:'حابب …',ex:'Ich möchte einen Termin vereinbaren.'},
    {de:'Wissen Sie, wo / wann / ob …?',note:'Verb am Ende',ar:'حضرتك تعرف فين / إمتى / هل …؟',ex:'Wissen Sie, wann der Zug abfährt?'},
    {de:'Darf ich …?',note:'Infinitiv am Ende',ar:'ممكن أ…؟ (استئذان)',ex:'Darf ich hier rauchen?'},
    {de:'Wäre es möglich, dass …?',note:'Verb am Ende',ar:'ممكن يعني إن …؟',ex:'Wäre es möglich, dass ich morgen später komme?'}
  ]},
  {group:'Vorschlagen und planen',groupAr:'تقترح وتخطط',items:[
    {de:'Wollen wir … ?',note:'Infinitiv am Ende',ar:'ما تيجي …؟',ex:'Wollen wir heute Abend ins Kino gehen?'},
    {de:'Wie wäre es mit …?',note:'+ Dativ',ar:'إيه رأيك في …؟',ex:'Wie wäre es mit einem Picknick?'},
    {de:'Lass uns …',note:'Infinitiv am Ende',ar:'يلا نـ…',ex:'Lass uns zusammen kochen!'},
    {de:'Ich schlage vor, dass …',note:'Verb am Ende',ar:'بقترح إن …',ex:'Ich schlage vor, dass wir uns um sieben treffen.'},
    {de:'Hast du Lust, … zu …?',note:'zu + Infinitiv',ar:'عندك مزاج …؟',ex:'Hast du Lust, am Samstag schwimmen zu gehen?'},
    {de:'Passt es dir am …?',note:'passen + Dativ',ar:'يناسبك يوم …؟',ex:'Passt es dir am Freitag um drei?'}
  ]},
  {group:'Gründe und Folgen',groupAr:'أسباب ونتايج',items:[
    {de:'…, weil …',note:'Verb am Ende',ar:'… عشان …',ex:'Ich lerne Deutsch, weil ich in Deutschland arbeiten möchte.'},
    {de:'…, deshalb …',note:'danach Verb + Subjekt',ar:'… علشان كده …',ex:'Ich habe keine Zeit, deshalb kann ich nicht kommen.'},
    {de:'Der Grund dafür ist, dass …',note:'Verb am Ende',ar:'السبب في كده إن …',ex:'Der Grund dafür ist, dass die Mieten steigen.'},
    {de:'Das liegt daran, dass …',note:'Verb am Ende',ar:'ده راجع لإن …',ex:'Das liegt daran, dass ich schlecht geschlafen habe.'},
    {de:'Einerseits …, andererseits …',note:'Verb + Subjekt',ar:'من ناحية … ومن ناحية …',ex:'Einerseits ist die Arbeit interessant, andererseits ist sie anstrengend.'}
  ]},
  {group:'Erzählen',groupAr:'تحكي حاجة حصلت',items:[
    {de:'Zuerst … / Dann … / Danach … / Zum Schluss …',note:'danach Verb + Subjekt',ar:'الأول … بعدين … بعد كده … في الآخر',ex:'Zuerst sind wir ins Museum gegangen, dann haben wir gegessen.'},
    {de:'Letztes Wochenende habe ich …',note:'Perfekt: Partizip am Ende',ar:'الويك إند اللي فات …',ex:'Letztes Wochenende habe ich meine Freunde besucht.'},
    {de:'Als ich … war, …',note:'Nebensatz zuerst → Verb, Verb',ar:'لما كنت …',ex:'Als ich Kind war, habe ich in Alexandria gewohnt.'},
    {de:'Plötzlich …',note:'danach Verb + Subjekt',ar:'فجأة …',ex:'Plötzlich hat das Telefon geklingelt.'},
    {de:'Am Ende …',note:'danach Verb + Subjekt',ar:'في النهاية …',ex:'Am Ende war alles gut.'}
  ]},
  {group:'Beschweren und reagieren',groupAr:'تشتكي وترد',items:[
    {de:'Leider … / Es tut mir leid, aber …',note:'Verb + Subjekt / Hauptsatz',ar:'للأسف … / آسف بس …',ex:'Es tut mir leid, aber ich kann morgen nicht.'},
    {de:'Ich möchte mich über … beschweren.',note:'über + Akkusativ',ar:'عايز أشتكي من …',ex:'Ich möchte mich über den Lärm beschweren.'},
    {de:'… funktioniert nicht.',note:'fester Satz',ar:'… مش شغال',ex:'Die Heizung funktioniert nicht.'},
    {de:'Das ist ja toll! / Wie schade!',note:'Reaktion',ar:'ده حلو جدًا! / يا خسارة!',ex:'Du hast die Prüfung bestanden? Das ist ja toll!'},
    {de:'Kein Problem. / Macht nichts.',note:'Reaktion',ar:'مفيش مشكلة / ولا يهمك',ex:'Entschuldigung! – Macht nichts.'}
  ]}
];

window.BAUSTEINE.articleRules = [
  {art:'der',rules:[
    {rule:'-er (Personen, Geräte)',ex:'der Lehrer, der Computer'},{rule:'-ling',ex:'der Frühling, der Lehrling'},{rule:'-ismus',ex:'der Tourismus'},
    {rule:'-or',ex:'der Motor, der Doktor'},{rule:'-ig / -ich',ex:'der Honig, der Teppich'},{rule:'-ant / -ist',ex:'der Praktikant, der Polizist'},
    {rule:'Tage, Monate, Jahreszeiten',ex:'der Montag, der Mai, der Winter'},{rule:'Himmelsrichtungen & Wetter',ex:'der Norden, der Regen, der Schnee'},
    {rule:'männliche Personen',ex:'der Vater, der Arzt'}
  ]},
  {art:'die',rules:[
    {rule:'-ung',ex:'die Wohnung, die Zeitung'},{rule:'-heit / -keit',ex:'die Freiheit, die Möglichkeit'},{rule:'-schaft',ex:'die Freundschaft'},
    {rule:'-ion / -tion',ex:'die Information, die Region'},{rule:'-tät',ex:'die Universität'},{rule:'-ie / -ik',ex:'die Familie, die Musik'},
    {rule:'-ei',ex:'die Bäckerei, die Polizei'},{rule:'-in (weiblich)',ex:'die Lehrerin, die Ärztin'},{rule:'-ur / -enz / -anz',ex:'die Kultur, die Konferenz, die Distanz'},
    {rule:'meistens -e',ex:'die Tasche, die Straße (aber: der Name, das Auge)'},{rule:'Zahlen als Nomen',ex:'die Eins, die Zehn'}
  ]},
  {art:'das',rules:[
    {rule:'-chen / -lein (Verkleinerung)',ex:'das Mädchen, das Brötchen'},{rule:'-um',ex:'das Museum, das Zentrum'},{rule:'-ment',ex:'das Dokument, das Instrument'},
    {rule:'-ma',ex:'das Thema, das Klima'},{rule:'meistens -nis / -tum',ex:'das Ergebnis, das Eigentum (aber: die Erlaubnis)'},
    {rule:'Ge- + Nomen',ex:'das Gemüse, das Getränk, das Gesetz'},{rule:'Infinitiv als Nomen',ex:'das Essen, das Schwimmen'},
    {rule:'Metalle, Farben, Sprachen',ex:'das Gold, das Rot, das Deutsch'},{rule:'-o (oft Fremdwörter)',ex:'das Auto, das Büro, das Kino'}
  ]}
];
