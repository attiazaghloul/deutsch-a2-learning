/* ===================== Sehen: videos that go with a course book ===================== */
/* Impuls B1, Lektion 1–15: for every lesson its words and German videos on
   its topic, short ones first, then longer documentaries. The videos play in
   the app's player with their text (data_videos/<id>.json, made by
   scripts/fetch_video_transcripts.py, which reads the ids from this file).
   A video is [YouTube id, title, what it is about in Arabic, length]. */

const VIDEO_BOOKS=[
  {id:'impuls-b1',title:'Impuls B1',subtitle:'Lektion 1–15',level:'b1',
    text:'Deutsche Videos zu den Themen – Hören, Wortschatz festigen, Sprechen üben.',
    ar:'فيديوهات ألماني لمواضيع أول 15 درس — مجموعتين لكل درس: قصيرة وأطول.',
    method:[
      'راجع كلمات الدرس (Wortschatz) قبل ما تتفرج.',
      'شغّل النص الألماني تحت الفيديو، ولما تسمع كلمة من الدرس وقّف واكتب الجملة كاملة.',
      'لو الكلام سريع خلي السرعة 0.75×.',
      'الفيديوهات الطويلة: قسّمها لحتت كل واحدة 10 دقايق، وبعد كل حتة لخّص بصوت عالي في 3 جمل بكلمات الدرس.',
      'في الآخر سجّل لنفسك دقيقتين بتلخّص فيهم الفيديو واستخدم قاعدة الدرس.'
    ],
    lessons:[
      {n:1,de:'Nach Berlin ziehen – ein neuer Lebensabschnitt',ar:'الانتقال لبرلين – مرحلة جديدة في الحياة',
        words:['der Umzug','die Checkliste','sich ummelden','der Umzugskarton','entrümpeln','der Nachsendeauftrag'],
        short:[
          ['JBa3Fr84lm4','Umzug-Checkliste: Das sollten Sie beachten','التخطيط، الفرز والتعبئة، النقل، والـ Ummelden',''],
          ['uqtmbaNFAi0','So klappt es mit der Ummeldung','خطوات تسجيل العنوان الجديد','']],
        long:[
          ['ilCrpuVDAgE','Umzug von der Großstadt aufs Land (NDR Nordreportage)','زوجين بيرمموا مزرعة قديمة عمرها أكتر من 200 سنة في Mecklenburg','≈ 30 د'],
          ['PAZHgM5roxQ','Umzugshelfer unter Druck: Hamburgs Möbelpacker (NDR)','النقل في مدينة كبيرة كتحدي تنظيمي ونفسي وجسدي','≈ 30 د']]},
      {n:2,de:'Meine netten Nachbarn – Regeln in der Nachbarschaft',ar:'جيراني اللطاف – قواعد الجيرة',
        words:['die Ruhezeit','die Nachtruhe','das Mehrfamilienhaus','Rücksicht nehmen','sich beschweren','Konflikte lösen'],
        short:[
          ['lIQSBjyadOI','Erklärfilm: Ruhezeiten in der Wohnung (mit deutschen Untertiteln)','فيلم توضيحي بترجمة ألماني',''],
          ['F9dovuzG3-M','SO laut dürfen Deine Nachbarn wirklich sein!','الخناقات على الدوشة في المباني وإمتى بتبدأ Ruhezeiten',''],
          ['TqF4yI-Upx4','Was tun bei Streit mit den Nachbarn? (Schiedsfrau Kiel)','3 نصايح من وسيطة صلح','']],
        long:[
          ['CltYQZDc9uo','Helfen ist die halbe Miete – Wohnen für Hilfe (ZDF 37 Grad)','طلبة بيسكنوا مع كبار السن: zusammenleben، sich gegenseitig unterstützen','≈ 30 د']]},
      {n:3,de:'Land oder Stadt?',ar:'الريف ولا المدينة؟',
        words:['das Dorf','die Großstadt','die Infrastruktur','pendeln','die Lebensqualität','auf ein Auto angewiesen sein'],
        short:[
          ['LB1qEx1PQXc','Hinter den Städten – Wie Leben auf dem Land geht','الناس عايزة تعيش في القرية بس الواقع عكس كده','قصير/متوسط'],
          ['VwwP2cDxI48','Von Berlin nach Thanheim: Experiment Landleben (BR)','واحدة سابت برلين وراحت قرية','قصير/متوسط'],
          ['CVzjwO5OuIE','Ob Auto oder Bahn: Macht Pendeln uns krank?','عن الـ Pendler','قصير/متوسط']],
        long:[
          ['5UdN0tmUOFs','Land. Leben (SWR-Dokumentation)','مستقبل الحياة في قرى Rheinland-Pfalz','45 د'],
          ['Yost1u9MOco','Planet Wissen – Landflucht, warum unsere Dörfer sterben','برنامج علمي بحوار في الاستوديو','≈ 60 د'],
          ['TbTQOx3EEOY','45 Min – Landleben: Lust oder Frust','الحياة في ريف شمال ألمانيا','≈ 45 د']]},
      {n:4,de:'Einkaufsgewohnheiten – clever einkaufen und sparen',ar:'عادات الشراء – الشراء الذكي والتوفير',
        words:['die Eigenmarke','das Markenprodukt','das Angebot','Preise vergleichen','sparen','das Schnäppchen'],
        short:[
          ['6V88wUjmCGk','Halb so teuer, halb so gut? Eigenmarken vs. Markenprodukte','مقارنة الماركات بماركات السوبرماركت',''],
          ['4SAS2ZC30kI','Gewürzgurken im Check (Marktcheck SWR)','اختبار ماركات مقابل Eigenmarken',''],
          ['xbiCofgK704','Bis zu 30 Prozent sparen','مقارنة الأسعار من كتالوجات السوبرماركت','']],
        long:[
          ['4w_NeuuWfzg','stern TV Inside: Hinter den Kulissen der Discounter und Supermärkte','كواليس السوبرماركت','1:29 س']]},
      {n:5,de:'Deutsches Essen probieren',ar:'تجربة الأكل الألماني',
        words:['die Mahlzeit','der Gastarbeiter','der Imbiss','der Geschmack','würzig','das Abendbrot'],
        short:[
          ['mOSmvlnhtk4','Mahlzeit! Schnitzel, Pizza, Marmorkuchen','الأكل اللي الألمان بيحبوه والعولمة في المطبخ','قصير/متوسط'],
          ['zl-5koUYVmM','„Gastarbeiter gibt’s nicht mehr“ (SWR Zur Sache!)','مصطفى أيدين، من أوائل اللي جابوا الدونر لـ Heilbronn','']],
        long:[
          ['OA7d2U3KHSo','Vom Gastarbeiter zum Nachbarn – 50 Jahre Anwerbeabkommen','تاريخ الـ Gastarbeiter','متوسط'],
          ['CBdBcoz11Wg','Gastarbeiter: Leben in der neuen Heimat','إيطالي وتركي من أول جيل بيحكوا','متوسط'],
          ['vqcVj671c2s','Döner Doku – Das Geheimnis der Döner-Produktion','الدونر أكتر أكلة سريعة بيحبها الألمان','متوسط']]},
      {n:6,de:'Du bist, was du isst',ar:'إنت هو اللي بتاكله',
        words:['die Ernährung','der Ernährungstrend','das soziale Netzwerk','ausgewogen','das Essverhalten'],
        short:[
          ['IdKRyMhCrjQ','Trends der Ernährung: Das essen wir (Quarks, Ganze Folge)','الموضات في الأكل الصحي','≈ 45 د'],
          ['-OCqzQu-zhA','Ernährung ist Trend: Foodporn in den sozialen Medien','الأكل على السوشيال ميديا','']],
        long:[
          ['pKUAajN5fnc','Intuitiv Essen – Das große Quarks Ernährungsexperiment (Ganze Folge)','تجربة الأكل حسب الجوع بس','≈ 45 د'],
          ['O8rTG3qHXjU','Vitamine: Wie viel brauchen wir wirklich? (Quarks, Ganze Folge)','الفيتامينات والمكملات','≈ 45 د']]},
      {n:7,de:'Nachhaltigkeit im Alltag',ar:'الاستدامة في الحياة اليومية',
        words:['der Einwegbecher','Müll vermeiden','CO2 einsparen','das Deutschlandticket','der Klimawandel'],
        short:[
          ['MUK69giVQJA','Was taugt das Deutschlandticket wirklich?','التذكرة والمناخ','']],
        long:[
          ['xY131QrSWjQ','NDR – Das Experiment: Leben ohne Plastik','عيلة من 7 أفراد 4 أسابيع من غير بلاستيك','≈ 45 د']]},
      {n:8,de:'Prävention ist die beste Therapie',ar:'الوقاية أحسن علاج',
        words:['die Prävention','vorbeugen','der Bluthochdruck','der Bewegungsmangel','der Lebensstil'],
        short:[
          ['EMUNw8zyRZY','Von der Routineuntersuchung bis zur Impfung: Prävention schützt','4 أنواع للوقاية',''],
          ['3COphxrLT4U','15 Minuten Spazierengehen (ARD Gesund)','المشي كوقاية',''],
          ['UfR_DbQvCoU','Richtig essen bei Bluthochdruck (NDR)','ضغط الدم والأكل','متوسط']],
        long:[
          ['Tm0f5iXMeso','Wundermittel Sport (Quarks)','الرياضة والجسم والجينات','متوسط/طويل'],
          ['7GVkvM-_wtA','Langes Leben: Das weiß die Forschung übers Altern (Quarks, Ganze Folge)','العمر الطويل بصحة','≈ 45 د']]},
      {n:9,de:'Wenn der Ernstfall eintritt',ar:'لما تحصل حالة طوارئ',
        words:['der Notruf','die Leitstelle','die Unfallstelle sichern','Erste Hilfe leisten','Ruhe bewahren'],
        short:[
          ['l8V1mMvhsT4','ADAC How To: Unfallstelle absichern','أول خطوة: Ruhe bewahren',''],
          ['gnoG7zY7vb8','Erste Hilfe kann Leben retten – Teil 1','الإسعافات الأولية','']],
        long:[
          ['vPo7czntmeM','112 Notruf Nord – Folge 1 (NDR Doku)','مسلسل وثائقي عن الإسعاف','≈ 45 د'],
          ['NrhsYtbrhUk','112 Notruf Nord – Folge 3','مسلسل وثائقي عن الإسعاف','≈ 45 د'],
          ['uWv6ElcO-IA','112 Notruf Nord – Folge 4','مسلسل وثائقي عن الإسعاف','≈ 45 د']]},
      {n:10,de:'Erfolgreich Fremdsprachen lernen',ar:'تعلم اللغات بنجاح',
        words:['der Fortschritt','der Muttersprachler','der Wortschatz','wiederholen','die Motivation'],
        short:[
          ['DvxLUYgRrQM','Kann ich alle Sprachen lernen? (Quarks)','إيه اللي العلم بيقوله','قصير/متوسط'],
          ['RYpcyzasvGY','Sprachen lernen: App vs. Lehrer','تجربة 10 ساعات بطريقتين لتعلم السويدي','قصير/متوسط']],
        long:[
          ['AGFfuGf0mas','Yourope: Welche Sprache spricht Europa?','اللغات في أوروبا','متوسط'],
          ['W_-AViUeEYo','Der Traum vom Turm zu Babel','الإنسان ممكن يتعلم كام لغة؟','متوسط']]},
      {n:11,de:'Der Name liegt mir auf der Zunge',ar:'الاسم على طرف لساني (الذاكرة)',
        words:['das Gedächtnis','sich etwas merken','die Ablenkung','das Multitasking','die Aufmerksamkeit'],
        short:[
          ['FB206HgHhDA','Planet Wissen – Gedächtniskünstler: Jeder kann es lernen','بطل ذاكرة بيشرح طرقه','متوسط'],
          ['FFwlOUyqQyE','Wie können wir konzentriert bleiben trotz ständiger Ablenkung?','التركيز والتشتت','']],
        long:[
          ['eyQQq1mlkfE','Nie mehr was vergessen? (Quarks – Ralph Caspers)','إزاي المخ بيخزن الذكريات','متوسط'],
          ['cJrKwI7McK4','Erinnerungen: Wie funktioniert unser Gedächtnis?','الذاكرة والذكريات','متوسط']]},
      {n:12,de:'Persönlichkeitsentwicklung fördern',ar:'تنمية الشخصية',
        words:['die Komfortzone','das Selbstvertrauen','sich weiterentwickeln','der Rückschlag','die Empathie'],
        short:[
          ['KU6i8UUuJk8','Mehr Mut mit dem 4-Zonen-Modell','أخصائي نفسي عن Komfortzone','']],
        long:[
          ['19JLvumSQGA','Persönlichkeit: Kann ich ein anderer Mensch werden?','الشخصية وإزاي بتتقاس وتتغير','متوسط'],
          ['NUeYG4ZFtiA','Wie die Körperhaltung unsere Gefühle beeinflusst (Quarks)','وقفة الجسم والمشاعر','قصير/متوسط']]},
      {n:13,de:'Mein erster Besuch in Deutschland',ar:'زيارتي الأولى لألمانيا',
        words:['der Eindruck','sich zurechtfinden','das Wohnheim','sich gewöhnen an','die Ankunft'],
        short:[
          ['D23s49gLWaM','Als Ausländerin in Deutschland studieren (Uni Frankfurt)','طالبة أجنبية بتتكلم ألماني كويس',''],
          ['4x7-T-G9ipE','Gestrandet in der Notunterkunft','طلبة أول سنة في Heidelberg من غير سكن','قصير/متوسط']],
        long:[
          ['R0FH7mkW0-Y','Ausgebeutet, ausgebrannt, verschuldet – indische Studenten (DW, Deutsch)','تحديات الطلبة الأجانب','متوسط'],
          ['ludV8GKFffQ','Studieren in Deutschland: Das Studienkolleg der HSZG','خريجين دوليين بيحكوا عن البداية','قصير/متوسط']]},
      {n:14,de:'Schule früher und heute',ar:'المدرسة زمان ودلوقتي',
        words:['streng','die Autorität','der Lehrkräftemangel','die Digitalisierung','die Lehrkraft'],
        short:[
          ['7j2DY_Wx2T8','Vom Schulbuch zum iPad (NDR Doku)','من المدرس الصارم للمدرس المتعاطف','متوسط']],
        long:[
          ['Owc9JFq7i34','Der Lehrerberuf in den 50er Jahren (Dokumentation 1959)','تقرير أصلي من سنة 1959','متوسط'],
          ['UEFprMoZZeU','Brennpunkt Schule: Tagebuch einer Lehrerin','مدرّسة بكاميرا على راسها جوه الفصل','متوسط'],
          ['i6V-ywvnRgs','Keine Lehrer, kein Unterricht, keine Bildung','أزمة التعليم في ألمانيا','متوسط']]},
      {n:15,de:'Kulturunterschiede in Deutschland (DDR / BRD)',ar:'الفروق بين الشرق والغرب في ألمانيا',
        words:['der Plattenbau','der Trabi','der Mauerfall','die Wiedervereinigung','der Fluchtversuch'],
        short:[
          ['QnvPAzilNbs','Leben im geteilten Deutschland: Plattenbau oder Reihenhaus','الحياة في الشرق والغرب','متوسط'],
          ['RQgSE1ymHgw','Das letzte Jahr der DDR','من سقوط السور للوحدة','متوسط'],
          ['sUWrrvcnMRk','Zeitzeuge Joachim Rudolph erzählt von seiner Flucht','شاهد عيان بيحكي هروبه','']],
        long:[
          ['08UNsWm72nc','Planet Wissen – Flucht aus der DDR','برنامج علمي بحوار في الاستوديو','≈ 60 د'],
          ['9ZVUiviRph4','Die Mauer, unsere Familie und wir','أثر التقسيم لحد النهارده','متوسط/طويل'],
          ['2bVjZ8QL_8g','35 Jahre Deutsche Einheit: Wie vereint sind wir heute?','الوحدة بعد 35 سنة','متوسط']]}
    ]}
];
