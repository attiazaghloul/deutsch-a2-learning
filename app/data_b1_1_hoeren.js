/* B1.1 listening training: three original listening texts per chapter
   (dialogues, announcements, radio pieces, voicemails) with questions in
   Goethe-B1 style. Texts recycle the chapter's vocabulary and grammar and are
   played line by line with the recorded app voices (browser voice until
   scripts/generate_b1_fixed_speech.py has been run). */
window.B1_HOEREN = {
  1: {
    title: "Gute Reise!", titleAr: "رحلة سعيدة!",
    tasks: [
      {
        id: "b1l-1-1", type: "Gespräch", typeAr: "حوار",
        title: "Welcher Urlaub passt zu uns?", titleAr: "أي إجازة تناسبنا؟",
        situation: "Lea und Samir planen ihren Sommerurlaub.",
        situationAr: "Lea وSamir بيخططوا لإجازة الصيف.",
        lines: [
          {s:"Lea", de:"Samir, wir müssen endlich unseren Urlaub planen. Sonst sind die guten Ferienhäuser alle weg.", ar:"يا سمير، لازم نخطط لإجازتنا أخيرًا. وإلا بيوت الإجازات الحلوة كلها هتخلص."},
          {s:"Samir", de:"Du hast recht. Ich habe keine Lust, wieder in letzter Minute etwas zu suchen.", ar:"عندك حق. مش عايز أدور على حاجة في آخر لحظة تاني."},
          {s:"Lea", de:"Ich würde am liebsten zwei Wochen an die Küste fahren. Einfach am Strand liegen und faulenzen.", ar:"أنا أفضّل أروح الساحل أسبوعين. أنام على البحر وأكسل وبس."},
          {s:"Samir", de:"Zwei Wochen nur Sand und Meer? Das ist mir zu langweilig. Ich möchte auch etwas erleben.", ar:"أسبوعين رمل وبحر بس؟ ده ممل بالنسبة لي. أنا عايز كمان أعيش تجربة."},
          {s:"Lea", de:"Und was schlägst du vor?", ar:"وإنت بتقترح إيه؟"},
          {s:"Samir", de:"Wir könnten zuerst eine Woche in den Bergen wandern und danach eine Woche ans Meer fahren.", ar:"ممكن الأول نتمشى أسبوع في الجبال وبعدين نروح البحر أسبوع."},
          {s:"Lea", de:"Hm, das ist ein Kompromiss. Aber ich möchte nicht zelten. Das letzte Mal hat es die ganze Zeit geregnet.", ar:"هممم، ده حل وسط. بس مش عايزة أخيّم. آخر مرة الدنيا مطرت طول الوقت."},
          {s:"Samir", de:"Meinetwegen können wir in den Bergen eine kleine Pension nehmen. Die ist auch nicht so teuer.", ar:"مفيش مشكلة عندي ناخد بنسيون صغير في الجبال. وكمان مش غالي."},
          {s:"Lea", de:"Gut. Und am Meer ein Ferienhaus mit Aussicht. Ich habe schon eins gefunden, nur zweihundert Meter vom Strand entfernt.", ar:"تمام. وعلى البحر بيت إجازة بإطلالة. أنا لقيت واحد فعلًا، على بعد ميتين متر بس من البحر."},
          {s:"Samir", de:"Klingt herrlich. Dann buchen wir es heute Abend, damit wir es rechtzeitig haben.", ar:"شكله رائع. يبقى نحجزه النهارده بالليل عشان نلحقه في الوقت المناسب."}
        ],
        questions: [
          {q:"Lea möchte im Urlaub vor allem aktiv sein.", qAr:"Lea عايزة تكون نشيطة في الإجازة في الأساس.", o:["Richtig","Falsch"], a:1, why:"Lea will am Strand liegen und faulenzen.", whyAr:"Lea عايزة تنام على البحر وتكسل."},
          {q:"Was schlägt Samir vor?", qAr:"سمير بيقترح إيه؟", o:["Zwei Wochen am Meer.","Eine Woche Berge und eine Woche Meer.","Eine Städtereise."], a:1, why:"Zuerst eine Woche wandern, danach eine Woche ans Meer.", whyAr:"أسبوع مشي في الجبال وبعدين أسبوع على البحر."},
          {q:"Warum möchte Lea nicht zelten?", qAr:"ليه Lea مش عايزة تخيّم؟", o:["Weil es zu teuer ist.","Weil es beim letzten Mal viel geregnet hat.","Weil sie Angst vor Insekten hat."], a:1, why:"Das letzte Mal hat es die ganze Zeit geregnet.", whyAr:"آخر مرة الدنيا مطرت طول الوقت."},
          {q:"Das Ferienhaus liegt direkt am Strand.", qAr:"بيت الإجازة على البحر مباشرة.", o:["Richtig","Falsch"], a:1, why:"Es liegt zweihundert Meter vom Strand entfernt.", whyAr:"على بعد ميتين متر من البحر."},
          {q:"Wann wollen sie buchen?", qAr:"هيحجزوا إمتى؟", o:["Morgen früh.","Heute Abend.","In letzter Minute."], a:1, why:"„Dann buchen wir es heute Abend.“", whyAr:"قالوا: هنحجزه النهارده بالليل."}
        ]
      },
      {
        id: "b1l-1-2", type: "Durchsage", typeAr: "إعلان",
        title: "Am Flughafen", titleAr: "في المطار",
        situation: "Du bist am Flughafen und hörst mehrere Durchsagen.",
        situationAr: "إنت في المطار وبتسمع كذا إعلان.",
        lines: [
          {s:"Durchsage", de:"Achtung, eine Information für die Passagiere des Fluges LH 348 nach Lissabon.", ar:"انتباه، معلومة لركاب الرحلة LH 348 المتجهة إلى لشبونة."},
          {s:"Durchsage", de:"Wegen eines technischen Problems startet Ihr Flug heute nicht um vierzehn Uhr zehn, sondern voraussichtlich um fünfzehn Uhr dreißig.", ar:"بسبب مشكلة فنية رحلتكم النهارده مش هتقوم الساعة 2:10، لكن غالبًا الساعة 3:30."},
          {s:"Durchsage", de:"Das Boarding findet nicht mehr an Gate B 12 statt, sondern an Gate C 4.", ar:"الصعود للطيارة مش هيبقى من بوابة B 12، لكن من بوابة C 4."},
          {s:"Durchsage", de:"Für die Wartezeit erhalten Sie am Informationsschalter einen Gutschein über zehn Euro für Essen und Getränke.", ar:"عشان وقت الانتظار هتاخدوا من مكتب الاستعلامات قسيمة بعشرة يورو للأكل والمشروبات."},
          {s:"Durchsage", de:"Und noch eine Bitte an alle Reisenden: Lassen Sie Ihr Gepäck nicht unbeaufsichtigt. Unbeaufsichtigtes Gepäck wird entfernt.", ar:"وطلب كمان لكل المسافرين: ما تسيبوش شنطكم من غير رقابة. الشنط اللي من غير صاحب هيتم إزالتها."},
          {s:"Durchsage", de:"Frau Katharina Brenner, gebucht nach Wien, wird gebeten, sofort zum Ausgang A 7 zu kommen. Ihr Flug ist bereit zum Abflug.", ar:"السيدة Katharina Brenner المسافرة لفيينا، مطلوب منها تيجي حالًا لمخرج A 7. رحلتها جاهزة للإقلاع."}
        ],
        questions: [
          {q:"Warum startet der Flug nach Lissabon später?", qAr:"ليه رحلة لشبونة هتتأخر؟", o:["Wegen des Wetters.","Wegen eines technischen Problems.","Weil Passagiere fehlen."], a:1, why:"„Wegen eines technischen Problems …“", whyAr:"بسبب مشكلة فنية."},
          {q:"Wann startet der Flug voraussichtlich?", qAr:"الرحلة غالبًا هتقوم إمتى؟", o:["Um 14:10 Uhr.","Um 15:30 Uhr.","Um 16:30 Uhr."], a:1, why:"Voraussichtlich um fünfzehn Uhr dreißig.", whyAr:"غالبًا الساعة 3:30."},
          {q:"Wo ist jetzt das Boarding?", qAr:"الصعود للطيارة بقى فين؟", o:["Gate B 12.","Gate C 4.","Ausgang A 7."], a:1, why:"„… sondern an Gate C 4.“", whyAr:"من بوابة C 4."},
          {q:"Die Passagiere bekommen einen Gutschein für Essen und Getränke.", qAr:"الركاب هياخدوا قسيمة للأكل والشرب.", o:["Richtig","Falsch"], a:0, why:"Einen Gutschein über zehn Euro am Informationsschalter.", whyAr:"قسيمة بعشرة يورو من مكتب الاستعلامات."},
          {q:"Was soll Frau Brenner tun?", qAr:"المفروض السيدة Brenner تعمل إيه؟", o:["Ihr Gepäck abholen.","Sofort zum Ausgang A 7 kommen.","Zum Informationsschalter gehen."], a:1, why:"Ihr Flug nach Wien ist bereit zum Abflug.", whyAr:"رحلتها لفيينا جاهزة للإقلاع."}
        ]
      },
      {
        id: "b1l-1-3", type: "Radio", typeAr: "راديو",
        title: "Reisetipp: Urlaub zu Hause", titleAr: "نصيحة سفر: إجازة في البيت",
        situation: "Im Radio spricht eine Reporterin mit einem Mann über Urlaub in der eigenen Stadt.",
        situationAr: "في الراديو مذيعة بتكلم راجل عن الإجازة في مدينته.",
        lines: [
          {s:"Reporterin", de:"Herr Keller, Sie sind dieses Jahr nicht verreist. Warum nicht?", ar:"أستاذ Keller، إنت ما سافرتش السنة دي. ليه؟"},
          {s:"Herr Keller", de:"Ehrlich gesagt hatte ich keine Lust auf Stau, volle Flughäfen und teure Hotels. Deshalb habe ich Urlaub zu Hause gemacht.", ar:"بصراحة ما كانش ليا مزاج للزحمة والمطارات المليانة والفنادق الغالية. عشان كده عملت إجازة في البيت."},
          {s:"Reporterin", de:"Und war das nicht langweilig?", ar:"وما كانش ده ممل؟"},
          {s:"Herr Keller", de:"Im Gegenteil. Ich habe versucht, meine Stadt wie ein Tourist zu entdecken. Ich habe zum Beispiel eine Stadtführung gemacht und eine Schifffahrt auf dem Fluss.", ar:"بالعكس. حاولت أكتشف مدينتي كأني سايح. مثلًا عملت جولة في المدينة ورحلة بالمركب في النهر."},
          {s:"Reporterin", de:"Was war Ihr schönstes Erlebnis?", ar:"إيه أحلى تجربة عشتها؟"},
          {s:"Herr Keller", de:"Ein Picknick auf dem Aussichtsturm im Stadtwald. Die Aussicht war herrlich, obwohl ich dort schon hundertmal vorbeigefahren bin.", ar:"نزهة أكل فوق برج المشاهدة في غابة المدينة. المنظر كان رائع، رغم إني عديت من هناك مية مرة قبل كده."},
          {s:"Reporterin", de:"Würden Sie das wieder machen?", ar:"ممكن تعمل كده تاني؟"},
          {s:"Herr Keller", de:"Auf jeden Fall. Ich habe viel Geld gespart und war trotzdem erholt. Nächstes Jahr fahre ich aber wieder ans Meer, denn das Meer fehlt mir doch.", ar:"أكيد. وفرت فلوس كتير وبرضه ارتحت. بس السنة الجاية هروح البحر تاني، لأن البحر واحشني برضه."}
        ],
        questions: [
          {q:"Herr Keller ist zu Hause geblieben, weil er krank war.", qAr:"Keller فضل في البيت لأنه كان عيان.", o:["Richtig","Falsch"], a:1, why:"Er hatte keine Lust auf Stau, volle Flughäfen und teure Hotels.", whyAr:"ما كانش ليه مزاج للزحمة والمطارات والفنادق الغالية."},
          {q:"Was hat er in seiner Stadt gemacht?", qAr:"عمل إيه في مدينته؟", o:["Eine Stadtführung und eine Schifffahrt.","Einen Sprachkurs.","Eine Radtour ans Meer."], a:0, why:"Er hat eine Stadtführung und eine Schifffahrt gemacht.", whyAr:"عمل جولة في المدينة ورحلة بالمركب."},
          {q:"Wo hat er ein Picknick gemacht?", qAr:"عمل النزهة فين؟", o:["Am Fluss.","Auf einem Aussichtsturm.","Im Hotelgarten."], a:1, why:"Auf dem Aussichtsturm im Stadtwald.", whyAr:"فوق برج المشاهدة في غابة المدينة."},
          {q:"Nächstes Jahr möchte er wieder ans Meer fahren.", qAr:"السنة الجاية عايز يروح البحر تاني.", o:["Richtig","Falsch"], a:0, why:"„Nächstes Jahr fahre ich aber wieder ans Meer.“", whyAr:"قال: السنة الجاية هروح البحر تاني."}
        ]
      }
    ]
  },
  2: {
    title: "Das ist ja praktisch!", titleAr: "ده عملي جدًا!",
    tasks: [
      {
        id: "b1l-2-1", type: "Gespräch", typeAr: "حوار",
        title: "Im Elektrogeschäft", titleAr: "في محل الأجهزة الكهربائية",
        situation: "Frau Yilmaz sucht einen neuen Staubsauger.",
        situationAr: "السيدة Yilmaz بتدور على مكنسة كهربائية جديدة.",
        lines: [
          {s:"Verkäufer", de:"Guten Tag, kann ich Ihnen helfen?", ar:"أهلًا، أقدر أساعدك؟"},
          {s:"Frau Yilmaz", de:"Ja, gern. Mein alter Staubsauger ist kaputtgegangen. Ich suche einen neuen, aber er sollte nicht zu schwer sein.", ar:"أيوه لو سمحت. المكنسة القديمة باظت. بدور على واحدة جديدة، بس ما تكونش تقيلة أوي."},
          {s:"Verkäufer", de:"Dann würde ich Ihnen dieses Modell empfehlen. Er hat kein Kabel und wiegt nur zwei Kilo.", ar:"يبقى أنصحك بالموديل ده. ملوش سلك ووزنه كيلوين بس."},
          {s:"Frau Yilmaz", de:"Und wie lange hält der Akku?", ar:"والبطارية بتقعد قد إيه؟"},
          {s:"Verkäufer", de:"Ungefähr vierzig Minuten. Danach muss man ihn etwa drei Stunden aufladen.", ar:"حوالي أربعين دقيقة. وبعدها لازم تشحنيها حوالي تلات ساعات."},
          {s:"Frau Yilmaz", de:"Vierzig Minuten reichen für meine Wohnung. Was kostet er denn?", ar:"أربعين دقيقة كفاية لشقتي. بكام بقى؟"},
          {s:"Verkäufer", de:"Normalerweise zweihundertneunundvierzig Euro, aber diese Woche ist er im Sonderangebot für hundertneunundneunzig.", ar:"عادة ب 249 يورو، بس الأسبوع ده عليها عرض ب 199."},
          {s:"Frau Yilmaz", de:"Das lohnt sich. Kann ich ihn zurückgeben, wenn er mir nicht gefällt?", ar:"ده يستاهل. أقدر أرجعها لو ما عجبتنيش؟"},
          {s:"Verkäufer", de:"Ja, innerhalb von vierzehn Tagen, aber nur mit Kassenbon und in der Originalverpackung.", ar:"أيوه، خلال أربعتاشر يوم، بس بالفاتورة وفي العلبة الأصلية."},
          {s:"Frau Yilmaz", de:"Gut, dann nehme ich ihn.", ar:"تمام، هاخدها."}
        ],
        questions: [
          {q:"Was ist Frau Yilmaz beim Staubsauger wichtig?", qAr:"إيه المهم عند السيدة Yilmaz في المكنسة؟", o:["Er soll sehr leise sein.","Er soll nicht zu schwer sein.","Er soll eine App haben."], a:1, why:"„… aber er sollte nicht zu schwer sein.“", whyAr:"قالت: ما تكونش تقيلة أوي."},
          {q:"Wie lange hält der Akku?", qAr:"البطارية بتقعد قد إيه؟", o:["Etwa 40 Minuten.","Etwa 3 Stunden.","Etwa 20 Minuten."], a:0, why:"Ungefähr vierzig Minuten.", whyAr:"حوالي أربعين دقيقة."},
          {q:"Wie viel kostet der Staubsauger diese Woche?", qAr:"المكنسة بكام الأسبوع ده؟", o:["249 Euro.","199 Euro.","149 Euro."], a:1, why:"Im Sonderangebot für 199 Euro.", whyAr:"عليها عرض ب 199 يورو."},
          {q:"Man kann den Staubsauger ohne Kassenbon zurückgeben.", qAr:"ممكن ترجّع المكنسة من غير فاتورة.", o:["Richtig","Falsch"], a:1, why:"Nur mit Kassenbon und in der Originalverpackung.", whyAr:"بس بالفاتورة وفي العلبة الأصلية."}
        ]
      },
      {
        id: "b1l-2-2", type: "Telefon", typeAr: "مكالمة",
        title: "Die Hotline hilft", titleAr: "خدمة العملاء بتساعد",
        situation: "Jonas ruft bei der Hotline an, weil sein neuer Drucker nicht funktioniert.",
        situationAr: "Jonas بيتصل بخدمة العملاء لأن الطابعة الجديدة مش شغالة.",
        lines: [
          {s:"Hotline", de:"Kundenservice Printo, mein Name ist Weber. Was kann ich für Sie tun?", ar:"خدمة عملاء Printo، معاك Weber. أقدر أعمل لك إيه؟"},
          {s:"Jonas", de:"Guten Tag. Ich habe letzte Woche einen Drucker bei Ihnen gekauft, aber er druckt einfach nicht.", ar:"أهلًا. اشتريت منكم طابعة الأسبوع اللي فات، بس ببساطة مش بتطبع."},
          {s:"Hotline", de:"Das tut mir leid. Haben Sie den Drucker mit dem WLAN verbunden?", ar:"آسفة جدًا. وصلت الطابعة بالواي فاي؟"},
          {s:"Jonas", de:"Ich habe es versucht, aber auf dem Display steht immer: Verbindung fehlgeschlagen.", ar:"حاولت، بس الشاشة دايمًا مكتوب عليها: فشل الاتصال."},
          {s:"Hotline", de:"Dann schalten Sie den Drucker bitte einmal aus. Warten Sie dreißig Sekunden und schalten Sie ihn wieder ein.", ar:"يبقى اقفل الطابعة مرة. استنى تلاتين ثانية وشغلها تاني."},
          {s:"Jonas", de:"Okay … er ist wieder an. Jetzt blinkt eine blaue Lampe.", ar:"تمام… اشتغلت تاني. دلوقتي فيه لمبة زرقا بتنور وتطفي."},
          {s:"Hotline", de:"Sehr gut. Drücken Sie jetzt drei Sekunden lang auf die Taste mit dem WLAN-Symbol und geben Sie Ihr Passwort ein.", ar:"ممتاز. دلوقتي دوس تلات ثواني على الزرار اللي عليه علامة الواي فاي ودخل الباسورد."},
          {s:"Jonas", de:"Moment … jetzt steht da: verbunden. Super, vielen Dank!", ar:"لحظة… دلوقتي مكتوب: متصل. جامد، شكرًا جدًا!"},
          {s:"Hotline", de:"Gern geschehen. Falls es noch einmal Probleme gibt, finden Sie auch eine Anleitung auf unserer Webseite.", ar:"العفو. لو حصلت مشكلة تاني، هتلاقي كمان دليل استخدام على موقعنا."}
        ],
        questions: [
          {q:"Wann hat Jonas den Drucker gekauft?", qAr:"Jonas اشترى الطابعة إمتى؟", o:["Gestern.","Letzte Woche.","Letzten Monat."], a:1, why:"„… letzte Woche einen Drucker bei Ihnen gekauft.“", whyAr:"الأسبوع اللي فات."},
          {q:"Was steht auf dem Display?", qAr:"إيه المكتوب على الشاشة؟", o:["Papier fehlt.","Verbindung fehlgeschlagen.","Tinte leer."], a:1, why:"Auf dem Display steht: Verbindung fehlgeschlagen.", whyAr:"مكتوب: فشل الاتصال."},
          {q:"Was soll Jonas zuerst machen?", qAr:"Jonas المفروض يعمل إيه الأول؟", o:["Den Drucker aus- und wieder einschalten.","Den Drucker zurückschicken.","Ein neues Kabel kaufen."], a:0, why:"Ausschalten, dreißig Sekunden warten, wieder einschalten.", whyAr:"يقفلها، يستنى تلاتين ثانية، ويشغلها."},
          {q:"Am Ende funktioniert der Drucker.", qAr:"في الآخر الطابعة اشتغلت.", o:["Richtig","Falsch"], a:0, why:"Auf dem Display steht „verbunden“.", whyAr:"الشاشة كتبت: متصل."}
        ]
      },
      {
        id: "b1l-2-3", type: "Mailbox", typeAr: "رسالة صوتية",
        title: "Eine Reklamation", titleAr: "شكوى",
        situation: "Herr Brandt hinterlässt eine Nachricht bei einem Online-Shop.",
        situationAr: "الأستاذ Brandt بيسيب رسالة لمتجر أونلاين.",
        lines: [
          {s:"Herr Brandt", de:"Guten Tag, hier spricht Thomas Brandt, Kundennummer vier-sieben-eins-neun.", ar:"أهلًا، معاك Thomas Brandt، رقم العميل 4719."},
          {s:"Herr Brandt", de:"Ich habe vor zehn Tagen bei Ihnen Funkkopfhörer bestellt. Das Paket ist gestern endlich angekommen, aber leider ist der Kopfhörer beschädigt.", ar:"طلبت منكم من عشر أيام سماعات لاسلكية. الطرد وصل امبارح أخيرًا، بس للأسف السماعة متضررة."},
          {s:"Herr Brandt", de:"Die linke Seite funktioniert nicht, und das Ladekabel fehlt auch.", ar:"الناحية الشمال مش شغالة، وكابل الشحن كمان ناقص."},
          {s:"Herr Brandt", de:"Ich möchte die Kopfhörer nicht umtauschen, sondern mein Geld zurückbekommen, weil ich sie inzwischen in einem Geschäft gekauft habe.", ar:"مش عايز أبدل السماعات، عايز فلوسي ترجع، لأني اشتريتها في الوقت ده من محل."},
          {s:"Herr Brandt", de:"Bitte schicken Sie mir ein Rücksendeetikett per E-Mail. Sie erreichen mich heute bis achtzehn Uhr unter null-eins-sieben-sechs, zwei-drei-acht-fünf-null. Vielen Dank.", ar:"من فضلكم ابعتولي ملصق الإرجاع بالإيميل. تقدروا توصلولي النهارده لحد الساعة 6 على رقم 0176 23850. شكرًا جدًا."}
        ],
        questions: [
          {q:"Wann ist das Paket angekommen?", qAr:"الطرد وصل إمتى؟", o:["Vor zehn Tagen.","Gestern.","Heute Morgen."], a:1, why:"„Das Paket ist gestern endlich angekommen.“", whyAr:"وصل امبارح."},
          {q:"Welches Problem hat Herr Brandt?", qAr:"مشكلة الأستاذ Brandt إيه؟", o:["Die Farbe ist falsch.","Eine Seite funktioniert nicht und das Kabel fehlt.","Die Kopfhörer sind zu groß."], a:1, why:"Die linke Seite funktioniert nicht, das Ladekabel fehlt.", whyAr:"الناحية الشمال مش شغالة وكابل الشحن ناقص."},
          {q:"Herr Brandt möchte neue Kopfhörer bekommen.", qAr:"Brandt عايز سماعات جديدة.", o:["Richtig","Falsch"], a:1, why:"Er möchte sein Geld zurückbekommen.", whyAr:"عايز فلوسه ترجع."},
          {q:"Was soll der Shop schicken?", qAr:"المتجر المفروض يبعت إيه؟", o:["Ein Rücksendeetikett per E-Mail.","Ein neues Ladekabel.","Einen Gutschein."], a:0, why:"„Bitte schicken Sie mir ein Rücksendeetikett per E-Mail.“", whyAr:"ملصق إرجاع بالإيميل."}
        ]
      }
    ]
  },
  3: {
    title: "Veränderungen", titleAr: "تغييرات",
    tasks: [
      {
        id: "b1l-3-1", type: "Interview", typeAr: "مقابلة",
        title: "Ein neues Leben auf dem Land", titleAr: "حياة جديدة في الريف",
        situation: "Eine Reporterin interviewt Nina, die von Berlin aufs Land gezogen ist.",
        situationAr: "مذيعة بتعمل مقابلة مع Nina اللي نقلت من برلين للريف.",
        lines: [
          {s:"Reporterin", de:"Nina, Sie haben zehn Jahre in Berlin gelebt. Warum sind Sie aufs Land gezogen?", ar:"يا Nina، عشتي عشر سنين في برلين. ليه نقلتي للريف؟"},
          {s:"Nina", de:"Als mein Sohn geboren wurde, war mir die Stadt plötzlich zu laut und zu hektisch.", ar:"لما ابني اتولد، المدينة فجأة بقت دوشة وسريعة زيادة عليا."},
          {s:"Nina", de:"Außerdem waren die Mieten so hoch, dass wir uns keine größere Wohnung leisten konnten.", ar:"وكمان الإيجارات كانت عالية لدرجة إننا ما قدرناش ناخد شقة أكبر."},
          {s:"Reporterin", de:"War der Anfang schwer?", ar:"البداية كانت صعبة؟"},
          {s:"Nina", de:"Ja, am Anfang habe ich mich ziemlich einsam gefühlt. Ich kannte niemanden, und der Bus fuhr nur zweimal am Tag.", ar:"أيوه، في الأول حسيت بالوحدة جدًا. ما كنتش أعرف حد، والأتوبيس كان بيمشي مرتين بس في اليوم."},
          {s:"Nina", de:"Aber nachdem ich im Sportverein angefangen hatte, habe ich schnell Freunde gefunden.", ar:"بس بعد ما بدأت في النادي الرياضي، لقيت أصحاب بسرعة."},
          {s:"Reporterin", de:"Und Ihre Arbeit?", ar:"وشغلك؟"},
          {s:"Nina", de:"Ich arbeite als Grafikerin. Seit der Pandemie arbeite ich fast nur noch im Homeoffice. Nur einmal im Monat fahre ich nach Berlin ins Büro.", ar:"أنا شغالة مصممة جرافيك. من وقت الجائحة بشتغل تقريبًا من البيت بس. مرة واحدة في الشهر بروح المكتب في برلين."},
          {s:"Reporterin", de:"Vermissen Sie die Stadt?", ar:"المدينة واحشاكي؟"},
          {s:"Nina", de:"Manchmal vermisse ich die Kinos und Restaurants. Aber ich möchte nicht zurück. Hier bin ich viel entspannter.", ar:"ساعات بتوحشني السينمات والمطاعم. بس مش عايزة أرجع. هنا أنا مرتاحة أكتر بكتير."}
        ],
        questions: [
          {q:"Wann wollte Nina die Stadt verlassen?", qAr:"إمتى Nina حبت تسيب المدينة؟", o:["Als sie eine neue Stelle bekam.","Als ihr Sohn geboren wurde.","Als sie Rentnerin wurde."], a:1, why:"„Als mein Sohn geboren wurde …“", whyAr:"لما ابنها اتولد."},
          {q:"Die Mieten in Berlin waren für die Familie zu hoch.", qAr:"الإيجارات في برلين كانت عالية على العيلة.", o:["Richtig","Falsch"], a:0, why:"Sie konnten sich keine größere Wohnung leisten.", whyAr:"ما قدروش ياخدوا شقة أكبر."},
          {q:"Wie hat Nina Freunde gefunden?", qAr:"Nina لقيت أصحاب إزاي؟", o:["Im Sportverein.","Bei der Arbeit.","Im Bus."], a:0, why:"Nachdem sie im Sportverein angefangen hatte.", whyAr:"بعد ما بدأت في النادي الرياضي."},
          {q:"Wie oft fährt Nina ins Büro nach Berlin?", qAr:"Nina بتروح المكتب في برلين كل قد إيه؟", o:["Jeden Tag.","Einmal pro Woche.","Einmal im Monat."], a:2, why:"„Nur einmal im Monat fahre ich nach Berlin ins Büro.“", whyAr:"مرة واحدة في الشهر."},
          {q:"Nina möchte wieder in Berlin wohnen.", qAr:"Nina عايزة ترجع تسكن في برلين.", o:["Richtig","Falsch"], a:1, why:"„Aber ich möchte nicht zurück.“", whyAr:"قالت: مش عايزة أرجع."}
        ]
      },
      {
        id: "b1l-3-2", type: "Gespräch", typeAr: "حوار",
        title: "Früher war alles anders", titleAr: "زمان كان كل حاجة مختلفة",
        situation: "Enkelin Aya spricht mit ihrem Opa über seine Jugend.",
        situationAr: "الحفيدة Aya بتتكلم مع جدها عن شبابه.",
        lines: [
          {s:"Aya", de:"Opa, wie war das eigentlich, als du so alt warst wie ich?", ar:"يا جدو، كان الوضع عامل إزاي لما كنت قدي كده؟"},
          {s:"Opa", de:"Mit neunzehn arbeitete ich schon in einer Fabrik. Wir begannen jeden Morgen um sechs Uhr.", ar:"وأنا عندي تسعتاشر سنة كنت بشتغل في مصنع. كنا بنبدأ كل يوم الساعة ستة الصبح."},
          {s:"Aya", de:"Um sechs? Und was habt ihr dort gemacht?", ar:"الساعة ستة؟ وكنتوا بتعملوا إيه هناك؟"},
          {s:"Opa", de:"Wir stellten Teile für Autos her. Die Arbeit war monoton und sehr laut. Maschinen wie heute gab es kaum, fast alles war Handarbeit.", ar:"كنا بنصنع قطع غيار للعربيات. الشغل كان روتيني ودوشة جدًا. مكنش فيه مكن زي النهارده تقريبًا، كل حاجة تقريبًا كانت شغل إيد."},
          {s:"Aya", de:"Und in deiner Freizeit?", ar:"وفي وقت فراغك؟"},
          {s:"Opa", de:"Wir hatten kein Handy und keinen Computer. Wenn wir uns treffen wollten, riefen wir vom Telefon im Flur an oder standen einfach vor der Tür.", ar:"ما كانش عندنا موبايل ولا كمبيوتر. لما كنا عايزين نتقابل، كنا بنتصل من التليفون اللي في الطرقة أو نقف قدام الباب وخلاص."},
          {s:"Aya", de:"Findest du, dass früher alles besser war?", ar:"شايف إن زمان كل حاجة كانت أحسن؟"},
          {s:"Opa", de:"Nein, das nicht. Die Arbeit ist heute gesünder, und die medizinische Behandlung ist viel besser. Aber die Leute hatten mehr Zeit füreinander.", ar:"لأ، مش كده. الشغل النهارده صحي أكتر، والعلاج الطبي أحسن بكتير. بس الناس كان عندها وقت أكتر لبعض."}
        ],
        questions: [
          {q:"Wo arbeitete der Opa mit neunzehn Jahren?", qAr:"الجد كان بيشتغل فين وعنده تسعتاشر سنة؟", o:["In einem Krankenhaus.","In einer Fabrik.","In einem Büro."], a:1, why:"„Mit neunzehn arbeitete ich schon in einer Fabrik.“", whyAr:"في مصنع."},
          {q:"Die Arbeit war damals abwechslungsreich.", qAr:"الشغل زمان كان متنوع.", o:["Richtig","Falsch"], a:1, why:"Die Arbeit war monoton und sehr laut.", whyAr:"الشغل كان روتيني ودوشة."},
          {q:"Wie haben sich die jungen Leute verabredet?", qAr:"الشباب كانوا بيتفقوا على مقابلة إزاي؟", o:["Per SMS.","Mit dem Telefon im Flur oder direkt an der Tür.","Mit Briefen."], a:1, why:"Sie riefen vom Telefon im Flur an oder standen vor der Tür.", whyAr:"بيتصلوا من تليفون الطرقة أو يقفوا قدام الباب."},
          {q:"Was ist nach Meinung des Opas heute besser?", qAr:"إيه اللي أحسن النهارده في رأي الجد؟", o:["Die Leute haben mehr Zeit.","Die Arbeit und die Medizin.","Die Freizeit ohne Handy."], a:1, why:"Die Arbeit ist gesünder, die Behandlung besser.", whyAr:"الشغل صحي أكتر والعلاج أحسن."}
        ]
      },
      {
        id: "b1l-3-3", type: "Radio", typeAr: "راديو",
        title: "Glücksforschung", titleAr: "أبحاث السعادة",
        situation: "Im Radio spricht ein Experte darüber, was Menschen glücklich macht.",
        situationAr: "في الراديو خبير بيتكلم عن اللي بيخلي الناس سعيدة.",
        lines: [
          {s:"Moderatorin", de:"Herzlich willkommen zu „Wissen am Morgen“. Heute ist Professor Hartmann bei uns. Herr Hartmann, was macht Menschen wirklich glücklich?", ar:"أهلًا بيكم في برنامج «معرفة الصبح». النهارده معانا بروفيسور Hartmann. أستاذ Hartmann، إيه اللي بيسعد الناس فعلًا؟"},
          {s:"Prof. Hartmann", de:"Viele denken, dass Geld glücklich macht. Das stimmt aber nur bis zu einem bestimmten Einkommen. Danach wird man kaum glücklicher.", ar:"ناس كتير فاكرة إن الفلوس بتسعد. بس ده صحيح لحد دخل معين بس. بعد كده الواحد بالكاد بيبقى أسعد."},
          {s:"Moderatorin", de:"Was ist denn wichtiger?", ar:"طب إيه الأهم؟"},
          {s:"Prof. Hartmann", de:"Vor allem gute Beziehungen: Familie, Freunde, nette Kollegen. Menschen mit engen Freunden sind deutlich zufriedener.", ar:"قبل أي حاجة العلاقات الكويسة: العيلة، الأصحاب، الزملاء اللطاف. الناس اللي عندهم أصحاب مقربين راضيين أكتر بوضوح."},
          {s:"Prof. Hartmann", de:"Außerdem hilft Bewegung. Schon zwanzig Minuten Spazierengehen am Tag verbessern die Stimmung.", ar:"وكمان الحركة بتساعد. عشرين دقيقة مشي في اليوم بس بتحسن المزاج."},
          {s:"Moderatorin", de:"Und große Veränderungen, zum Beispiel ein Umzug oder eine neue Stelle?", ar:"والتغييرات الكبيرة، زي النقل أو شغلانة جديدة؟"},
          {s:"Prof. Hartmann", de:"Die machen oft nur kurz glücklich. Nach etwa einem Jahr sind die meisten Menschen wieder so zufrieden wie vorher.", ar:"دي غالبًا بتسعد لفترة قصيرة. بعد حوالي سنة أغلب الناس بيرجعوا راضيين زي الأول بالظبط."},
          {s:"Prof. Hartmann", de:"Mein Tipp: Schreiben Sie jeden Abend drei Dinge auf, für die Sie dankbar sind. Das klingt einfach, aber es wirkt.", ar:"نصيحتي: اكتبوا كل ليلة تلات حاجات إنتوا ممتنين ليها. شكلها بسيطة، بس بتنفع."}
        ],
        questions: [
          {q:"Geld macht laut Professor Hartmann immer glücklicher.", qAr:"حسب البروفيسور، الفلوس دايمًا بتزود السعادة.", o:["Richtig","Falsch"], a:1, why:"Nur bis zu einem bestimmten Einkommen.", whyAr:"لحد دخل معين بس."},
          {q:"Was ist für das Glück besonders wichtig?", qAr:"إيه المهم جدًا للسعادة؟", o:["Gute Beziehungen.","Ein großes Haus.","Viel Urlaub."], a:0, why:"Vor allem gute Beziehungen: Familie, Freunde, Kollegen.", whyAr:"العلاقات الكويسة."},
          {q:"Wie lange sollte man laut Studie spazieren gehen?", qAr:"المفروض الواحد يتمشى قد إيه؟", o:["Zehn Minuten pro Woche.","Zwanzig Minuten am Tag.","Zwei Stunden am Tag."], a:1, why:"Schon zwanzig Minuten am Tag verbessern die Stimmung.", whyAr:"عشرين دقيقة في اليوم."},
          {q:"Was empfiehlt der Professor am Ende?", qAr:"البروفيسور نصح بإيه في الآخر؟", o:["Jeden Abend drei positive Dinge aufschreiben.","Öfter umziehen.","Die Stelle wechseln."], a:0, why:"Drei Dinge aufschreiben, für die man dankbar ist.", whyAr:"تكتب تلات حاجات ممتن ليها."}
        ]
      }
    ]
  },
  4: {
    title: "Arbeitswelt", titleAr: "عالم الشغل",
    tasks: [
      {
        id: "b1l-4-1", type: "Gespräch", typeAr: "حوار",
        title: "Das Vorstellungsgespräch", titleAr: "مقابلة العمل",
        situation: "Karim hat ein Vorstellungsgespräch bei einer Firma für Solaranlagen.",
        situationAr: "Karim عنده مقابلة شغل في شركة ألواح طاقة شمسية.",
        lines: [
          {s:"Frau Albers", de:"Herr Haddad, schön, dass Sie da sind. Erzählen Sie doch bitte kurz etwas über sich.", ar:"أستاذ حداد، كويس إنك جيت. احكيلنا شوية عن نفسك لو سمحت."},
          {s:"Karim", de:"Gern. Ich bin Elektroingenieur und habe mein Studium in Kairo abgeschlossen. Seit drei Jahren lebe ich in Deutschland.", ar:"أكيد. أنا مهندس كهربا وخلصت دراستي في القاهرة. عايش في ألمانيا من تلات سنين."},
          {s:"Karim", de:"Zurzeit arbeite ich bei einer kleinen Firma, die Solaranlagen auf Dächern installiert.", ar:"حاليًا بشتغل في شركة صغيرة بتركب ألواح طاقة شمسية على الأسطح."},
          {s:"Frau Albers", de:"Warum möchten Sie die Stelle wechseln?", ar:"ليه عايز تغير شغلك؟"},
          {s:"Karim", de:"Bei Ihnen könnte ich auch in der Planung arbeiten. Das interessiert mich sehr, und ich möchte mich weiterentwickeln.", ar:"عندكم ممكن أشتغل كمان في التخطيط. ده بيهمني جدًا، وعايز أطور نفسي."},
          {s:"Frau Albers", de:"Was sind Ihre Stärken?", ar:"إيه نقط قوتك؟"},
          {s:"Karim", de:"Ich arbeite sehr exakt und bleibe auch unter Stress ruhig. Meine Schwäche ist, dass ich manchmal zu viel selbst mache, statt Aufgaben abzugeben.", ar:"بشتغل بدقة جدًا وبفضل هادي حتى تحت الضغط. نقطة ضعفي إني ساعات بعمل حاجات كتير بنفسي بدل ما أوزع المهام."},
          {s:"Frau Albers", de:"Gut. Haben Sie noch Fragen an uns?", ar:"تمام. عندك أي أسئلة لينا؟"},
          {s:"Karim", de:"Ja. Gibt es bei Ihnen die Möglichkeit, Weiterbildungen zu machen? Und wie sind die Arbeitszeiten?", ar:"أيوه. فيه عندكم إمكانية تعمل دورات تدريبية؟ ومواعيد الشغل عاملة إزاي؟"},
          {s:"Frau Albers", de:"Wir bezahlen jedes Jahr eine Weiterbildung. Die Arbeitszeit ist flexibel, und an zwei Tagen pro Woche kann man von zu Hause arbeiten.", ar:"إحنا بندفع دورة تدريبية كل سنة. مواعيد الشغل مرنة، وتقدر تشتغل من البيت يومين في الأسبوع."}
        ],
        questions: [
          {q:"Was ist Karim von Beruf?", qAr:"Karim شغلته إيه؟", o:["Rechtsanwalt.","Elektroingenieur.","Schreiner."], a:1, why:"„Ich bin Elektroingenieur.“", whyAr:"مهندس كهربا."},
          {q:"Warum möchte Karim die Stelle wechseln?", qAr:"ليه Karim عايز يغير شغله؟", o:["Er möchte mehr Geld verdienen.","Er möchte auch in der Planung arbeiten.","Er hat Probleme mit dem Chef."], a:1, why:"Er könnte auch in der Planung arbeiten und sich weiterentwickeln.", whyAr:"عايز يشتغل في التخطيط ويطور نفسه."},
          {q:"Karim nennt als Schwäche, dass er unter Stress nervös wird.", qAr:"Karim قال إن نقطة ضعفه إنه بيتوتر تحت الضغط.", o:["Richtig","Falsch"], a:1, why:"Er bleibt unter Stress ruhig; seine Schwäche: Er macht zu viel selbst.", whyAr:"بيفضل هادي؛ ضعفه إنه بيعمل حاجات كتير بنفسه."},
          {q:"Was bietet die Firma?", qAr:"الشركة بتقدم إيه؟", o:["Einen Firmenwagen.","Jedes Jahr eine Weiterbildung und flexible Arbeitszeiten.","Mehr Urlaubstage."], a:1, why:"Jährliche Weiterbildung, flexible Zeit, zwei Tage Homeoffice.", whyAr:"دورة كل سنة ومواعيد مرنة ويومين من البيت."}
        ]
      },
      {
        id: "b1l-4-2", type: "Mailbox", typeAr: "رسالة صوتية",
        title: "Krankmeldung", titleAr: "إبلاغ بالمرض",
        situation: "Sofia ruft morgens im Büro an und spricht auf die Mailbox ihrer Chefin.",
        situationAr: "Sofia بتتصل بالمكتب الصبح وبتسيب رسالة لمديرتها.",
        lines: [
          {s:"Sofia", de:"Guten Morgen, Frau Lange, hier ist Sofia Marino.", ar:"صباح الخير يا أستاذة Lange، معاكي Sofia Marino."},
          {s:"Sofia", de:"Es tut mir leid, aber ich kann heute nicht zur Arbeit kommen. Ich habe hohes Fieber und habe heute Nacht kaum geschlafen.", ar:"آسفة، بس مش هقدر آجي الشغل النهارده. عندي سخونية عالية ومنمتش تقريبًا طول الليل."},
          {s:"Sofia", de:"Ich gehe gleich um neun Uhr zum Arzt und schicke Ihnen die Krankmeldung dann per E-Mail.", ar:"هروح للدكتور الساعة تسعة كمان شوية وهبعتلك الإجازة المرضية بالإيميل."},
          {s:"Sofia", de:"Das Meeting mit der Firma Kraus um vierzehn Uhr müssen wir leider verschieben. Könnten Sie Herrn Kraus bitte Bescheid sagen?", ar:"الاجتماع مع شركة Kraus الساعة اتنين للأسف لازم نأجله. ممكن تبلغي أستاذ Kraus لو سمحتي؟"},
          {s:"Sofia", de:"Die Unterlagen für die Präsentation liegen in meinem Ordner auf dem Server. Paul kennt das Projekt auch gut, falls es dringend ist.", ar:"ورق العرض موجود في الفولدر بتاعي على السيرفر. Paul كمان عارف المشروع كويس لو الموضوع مستعجل."},
          {s:"Sofia", de:"Ich hoffe, dass ich am Donnerstag wieder da bin. Vielen Dank und bis bald.", ar:"أتمنى أرجع يوم الخميس. شكرًا جدًا وأشوفك قريب."}
        ],
        questions: [
          {q:"Warum kann Sofia nicht zur Arbeit kommen?", qAr:"ليه Sofia مش هتقدر تروح الشغل؟", o:["Ihr Kind ist krank.","Sie hat hohes Fieber.","Ihr Zug fällt aus."], a:1, why:"„Ich habe hohes Fieber.“", whyAr:"عندها سخونية عالية."},
          {q:"Wie schickt Sofia die Krankmeldung?", qAr:"Sofia هتبعت الإجازة المرضية إزاي؟", o:["Per Post.","Per E-Mail.","Ein Kollege bringt sie."], a:1, why:"„… und schicke Ihnen die Krankmeldung dann per E-Mail.“", whyAr:"بالإيميل."},
          {q:"Das Meeting mit Herrn Kraus findet trotzdem statt.", qAr:"الاجتماع مع أستاذ Kraus هيتعمل برضه.", o:["Richtig","Falsch"], a:1, why:"Das Meeting müssen sie verschieben.", whyAr:"لازم يتأجل."},
          {q:"Wann möchte Sofia wieder arbeiten?", qAr:"Sofia عايزة ترجع الشغل إمتى؟", o:["Morgen.","Am Donnerstag.","Nächste Woche."], a:1, why:"„Ich hoffe, dass ich am Donnerstag wieder da bin.“", whyAr:"يوم الخميس."}
        ]
      },
      {
        id: "b1l-4-3", type: "Gespräch", typeAr: "حوار",
        title: "Neue Kollegin, neue Aufgaben", titleAr: "زميلة جديدة ومهام جديدة",
        situation: "Zwei Kollegen sprechen in der Kaffeeküche über die Arbeit.",
        situationAr: "زميلين بيتكلموا في مطبخ الشغل عن الشغل.",
        lines: [
          {s:"Ben", de:"Hallo Julia! Na, wie ist deine erste Woche bei uns?", ar:"أهلًا Julia! ها، أول أسبوع عندنا عامل إزاي؟"},
          {s:"Julia", de:"Anstrengend, aber gut. Alle sind sehr nett. Nur mit dem neuen Programm habe ich noch Probleme.", ar:"متعب بس حلو. كلهم لطاف جدًا. بس لسه عندي مشاكل مع البرنامج الجديد."},
          {s:"Ben", de:"Ach, das ging mir am Anfang genauso. Wenn du willst, zeige ich es dir morgen nach der Mittagspause.", ar:"آه، أنا كمان كان حالي كده في الأول. لو حابة، أوريهولك بكرة بعد استراحة الغدا."},
          {s:"Julia", de:"Das wäre super! Du, weißt du, wer für die Kundenakten zuständig ist?", ar:"ده يبقى جامد! قولي، تعرف مين المسؤول عن ملفات العملاء؟"},
          {s:"Ben", de:"Das macht Frau Schulte aus der Buchhaltung. Aber sie ist diese Woche im Urlaub. Bis Freitag kannst du Herrn Demir fragen.", ar:"دي Frau Schulte من الحسابات. بس هي في إجازة الأسبوع ده. لحد الجمعة تقدري تسألي أستاذ Demir."},
          {s:"Julia", de:"Danke. Und noch etwas: Kann man hier eigentlich auch früher gehen, wenn man früher anfängt?", ar:"شكرًا. وحاجة كمان: هو ينفع هنا نمشي بدري لو بدأنا بدري؟"},
          {s:"Ben", de:"Ja, wir haben Gleitzeit. Du musst nur zwischen zehn und fünfzehn Uhr da sein.", ar:"أيوه، عندنا مواعيد مرنة. بس لازم تكوني موجودة من عشرة لتلاتة."}
        ],
        questions: [
          {q:"Womit hat Julia noch Probleme?", qAr:"Julia لسه عندها مشاكل مع إيه؟", o:["Mit den Kollegen.","Mit dem neuen Programm.","Mit dem Weg zur Arbeit."], a:1, why:"„Nur mit dem neuen Programm habe ich noch Probleme.“", whyAr:"مع البرنامج الجديد."},
          {q:"Wann hilft Ben ihr?", qAr:"Ben هيساعدها إمتى؟", o:["Heute Abend.","Morgen nach der Mittagspause.","Am Freitag."], a:1, why:"Morgen nach der Mittagspause.", whyAr:"بكرة بعد استراحة الغدا."},
          {q:"Frau Schulte kann Julia diese Woche helfen.", qAr:"Frau Schulte تقدر تساعد Julia الأسبوع ده.", o:["Richtig","Falsch"], a:1, why:"Sie ist diese Woche im Urlaub.", whyAr:"هي في إجازة الأسبوع ده."},
          {q:"Wann müssen alle Mitarbeiter im Büro sein?", qAr:"كل الموظفين لازم يكونوا في المكتب إمتى؟", o:["Zwischen 8 und 17 Uhr.","Zwischen 10 und 15 Uhr.","Nur vormittags."], a:1, why:"Kernzeit zwischen zehn und fünfzehn Uhr.", whyAr:"من عشرة لتلاتة."}
        ]
      }
    ]
  },
  5: {
    title: "Umweltfreundlich?", titleAr: "صديق للبيئة؟",
    tasks: [
      {
        id: "b1l-5-1", type: "Diskussion", typeAr: "نقاش",
        title: "Auto oder Fahrrad?", titleAr: "عربية ولا عجلة؟",
        situation: "In einer Radiosendung diskutieren zwei Hörer über Verkehr in der Stadt.",
        situationAr: "في برنامج راديو اتنين مستمعين بيتناقشوا عن المرور في المدينة.",
        lines: [
          {s:"Moderator", de:"Unser Thema heute: Sollen Autos aus der Innenstadt verschwinden? Frau Roth, was meinen Sie?", ar:"موضوعنا النهارده: هل العربيات لازم تختفي من وسط البلد؟ يا أستاذة Roth، رأيك إيه؟"},
          {s:"Frau Roth", de:"Ich bin klar dafür. Die Abgase sind schlecht für die Gesundheit, und in der Innenstadt gibt es kaum Platz für Fußgänger und Radfahrer.", ar:"أنا موافقة جدًا. العوادم وحشة للصحة، ووسط البلد مفيهاش مكان تقريبًا للمشاة وراكبي العجل."},
          {s:"Frau Roth", de:"Ich fahre jeden Tag mit dem Fahrrad zur Arbeit, damit ich fit bleibe. Außerdem spare ich Geld.", ar:"بروح الشغل بالعجلة كل يوم عشان أفضل فيت. وكمان بوفر فلوس."},
          {s:"Moderator", de:"Herr Wagner, Sie sehen das anders.", ar:"أستاذ Wagner، إنت شايف الموضوع بشكل مختلف."},
          {s:"Herr Wagner", de:"Ja. Ich verstehe das Argument, aber ich habe ein Geschäft in der Innenstadt. Wenn keine Autos mehr kommen dürfen, verliere ich Kunden.", ar:"أيوه. فاهم الحجة، بس عندي محل في وسط البلد. لو العربيات ما بقتش تقدر تيجي، هخسر زباين."},
          {s:"Herr Wagner", de:"Und ältere Menschen können nicht so einfach mit dem Rad fahren.", ar:"والناس الكبار في السن مش هيقدروا يركبوا عجل بسهولة كده."},
          {s:"Frau Roth", de:"Da haben Sie recht. Deshalb brauchen wir bessere Busse und Bahnen, die öfter fahren und weniger kosten.", ar:"عندك حق في دي. عشان كده محتاجين أتوبيسات وقطارات أحسن، تمشي أكتر وتكلف أقل."},
          {s:"Herr Wagner", de:"Dem stimme ich zu. Wenn der Bus alle fünf Minuten fährt, lasse ich mein Auto auch gern stehen.", ar:"أنا موافق على ده. لو الأتوبيس بيمشي كل خمس دقايق، أنا كمان هسيب عربيتي بكل سرور."}
        ],
        questions: [
          {q:"Frau Roth ist gegen Autos in der Innenstadt.", qAr:"Frau Roth ضد العربيات في وسط البلد.", o:["Richtig","Falsch"], a:0, why:"„Ich bin klar dafür“ – dass Autos verschwinden.", whyAr:"موافقة إن العربيات تختفي."},
          {q:"Warum fährt Frau Roth mit dem Fahrrad?", qAr:"ليه Frau Roth بتركب عجلة؟", o:["Weil sie kein Auto hat.","Damit sie fit bleibt und Geld spart.","Weil der Bus zu spät kommt."], a:1, why:"„… damit ich fit bleibe. Außerdem spare ich Geld.“", whyAr:"عشان تفضل فيت وتوفر فلوس."},
          {q:"Welche Sorge hat Herr Wagner?", qAr:"إيه قلق Herr Wagner؟", o:["Er verliert Kunden.","Er findet keinen Parkplatz.","Das Fahrrad ist zu teuer."], a:0, why:"Er hat ein Geschäft und verliert Kunden ohne Autos.", whyAr:"عنده محل وهيخسر زباين."},
          {q:"Worin sind sich beide am Ende einig?", qAr:"اتفقوا على إيه في الآخر؟", o:["Autos sollen bleiben.","Man braucht bessere Busse und Bahnen.","Alle sollen Rad fahren."], a:1, why:"Bessere Busse und Bahnen, die öfter fahren.", whyAr:"محتاجين أتوبيسات وقطارات أحسن."}
        ]
      },
      {
        id: "b1l-5-2", type: "Durchsage", typeAr: "إعلان",
        title: "Aktion: Saubere Stadt", titleAr: "حملة: مدينة نضيفة",
        situation: "Im Lokalradio wird eine Umweltaktion angekündigt.",
        situationAr: "في الراديو المحلي بيعلنوا عن حملة للبيئة.",
        lines: [
          {s:"Sprecherin", de:"Liebe Hörerinnen und Hörer, am Samstag, dem zwölften Oktober, findet wieder unsere Aktion „Saubere Stadt“ statt.", ar:"أعزائي المستمعين، يوم السبت 12 أكتوبر هتتعمل تاني حملتنا «مدينة نضيفة»."},
          {s:"Sprecherin", de:"Wir sammeln gemeinsam Abfall im Stadtpark und am Flussufer. Treffpunkt ist um zehn Uhr am Haupteingang des Parks.", ar:"هنجمع الزبالة مع بعض في حديقة المدينة وعلى شط النهر. نقطة التجمع الساعة عشرة عند البوابة الرئيسية للحديقة."},
          {s:"Sprecherin", de:"Handschuhe und Müllsäcke bekommen Sie von uns. Bitte bringen Sie aber eine eigene Trinkflasche mit, damit wir keinen zusätzlichen Plastikmüll produzieren.", ar:"الجوانتيات وأكياس الزبالة هتاخدوها مننا. بس من فضلكم هاتوا زجاجة ميه بتاعتكم، عشان ما نعملش زبالة بلاستيك زيادة."},
          {s:"Sprecherin", de:"Nach der Aktion gibt es um dreizehn Uhr ein kostenloses Mittagessen mit regionalen Bioprodukten.", ar:"بعد الحملة الساعة واحدة فيه غدا ببلاش من منتجات أورجانيك محلية."},
          {s:"Sprecherin", de:"Kinder sind herzlich willkommen, sie müssen aber von einem Erwachsenen begleitet werden. Eine Anmeldung ist nicht nötig.", ar:"الأطفال مرحب بيهم جدًا، بس لازم يكون معاهم شخص كبير. مش محتاجين تسجيل."}
        ],
        questions: [
          {q:"Wo beginnt die Aktion?", qAr:"الحملة بتبدأ فين؟", o:["Am Rathaus.","Am Haupteingang des Parks.","Am Bahnhof."], a:1, why:"Treffpunkt ist am Haupteingang des Parks.", whyAr:"عند البوابة الرئيسية للحديقة."},
          {q:"Was sollen die Teilnehmer mitbringen?", qAr:"المشاركين المفروض يجيبوا إيه؟", o:["Handschuhe.","Müllsäcke.","Eine eigene Trinkflasche."], a:2, why:"Handschuhe und Säcke gibt es dort; die Trinkflasche soll man mitbringen.", whyAr:"الجوانتيات والأكياس موجودة؛ الزجاجة يجيبوها."},
          {q:"Das Mittagessen kostet nichts.", qAr:"الغدا ببلاش.", o:["Richtig","Falsch"], a:0, why:"Ein kostenloses Mittagessen.", whyAr:"غدا مجاني."},
          {q:"Man muss sich vorher anmelden.", qAr:"لازم تسجل قبلها.", o:["Richtig","Falsch"], a:1, why:"„Eine Anmeldung ist nicht nötig.“", whyAr:"مش محتاجين تسجيل."}
        ]
      },
      {
        id: "b1l-5-3", type: "Gespräch", typeAr: "حوار",
        title: "Nachhaltig einkaufen", titleAr: "تسوق مستدام",
        situation: "Salma und David kaufen auf dem Wochenmarkt ein.",
        situationAr: "Salma وDavid بيتسوقوا في السوق الأسبوعي.",
        lines: [
          {s:"David", de:"Warum kaufen wir eigentlich nicht im Supermarkt? Da ist es doch billiger.", ar:"هو إحنا ليه مش بنشتري من السوبر ماركت؟ هناك أرخص."},
          {s:"Salma", de:"Nicht immer. Und hier kommt das Gemüse aus der Region. Die Transportwege sind kürzer, und das ist besser fürs Klima.", ar:"مش دايمًا. وهنا الخضار من المنطقة نفسها. طرق النقل أقصر، وده أحسن للمناخ."},
          {s:"David", de:"Stimmt. Und es gibt fast keinen Verpackungsmüll. Ich habe unsere Stofftaschen mitgebracht.", ar:"صح. وتقريبًا مفيش زبالة تغليف. أنا جبت شنط القماش بتاعتنا."},
          {s:"Salma", de:"Sehr gut. Schau mal, die Äpfel hier sind kleiner als im Supermarkt, aber sie schmecken viel besser.", ar:"حلو جدًا. بص، التفاح هنا أصغر من اللي في السوبر ماركت، بس طعمه أحلى بكتير."},
          {s:"David", de:"Und Erdbeeren? Ich hätte so gern Erdbeeren.", ar:"وفراولة؟ نفسي أوي في فراولة."},
          {s:"Salma", de:"Im Oktober? Die kommen jetzt aus Spanien oder sogar aus Marokko. Lass uns lieber Birnen nehmen, die haben gerade Saison.", ar:"في أكتوبر؟ دي دلوقتي جاية من إسبانيا أو حتى من المغرب. خلينا ناخد كمتري أحسن، ده موسمه دلوقتي."},
          {s:"David", de:"Okay, überzeugt. Dann essen wir eben saisonal. Aber Fleisch kaufen wir heute keins, oder?", ar:"ماشي، اقتنعت. يبقى ناكل حسب الموسم. بس لحمة مش هنشتري النهارده، صح؟"},
          {s:"Salma", de:"Nein, wir essen diese Woche vegetarisch. Das ist gesünder, und wir sparen Geld.", ar:"لأ، الأسبوع ده هناكل نباتي. ده صحي أكتر وبنوفر فلوس."}
        ],
        questions: [
          {q:"Warum kauft Salma lieber auf dem Markt ein?", qAr:"ليه Salma بتفضل تشتري من السوق؟", o:["Weil es dort immer billiger ist.","Weil das Gemüse aus der Region kommt.","Weil der Markt näher ist."], a:1, why:"Das Gemüse kommt aus der Region, kurze Transportwege.", whyAr:"الخضار من المنطقة وطرق النقل أقصر."},
          {q:"Die Äpfel auf dem Markt sind größer als im Supermarkt.", qAr:"التفاح في السوق أكبر من السوبر ماركت.", o:["Richtig","Falsch"], a:1, why:"Sie sind kleiner, aber schmecken besser.", whyAr:"أصغر بس طعمه أحلى."},
          {q:"Warum kaufen sie keine Erdbeeren?", qAr:"ليه مش هيشتروا فراولة؟", o:["Sie sind zu teuer.","Sie haben im Oktober keine Saison.","David mag keine Erdbeeren."], a:1, why:"Im Oktober kommen sie aus Spanien oder Marokko.", whyAr:"في أكتوبر جاية من إسبانيا أو المغرب."},
          {q:"Was essen die beiden diese Woche?", qAr:"الاتنين هياكلوا إيه الأسبوع ده؟", o:["Vegetarisch.","Viel Fleisch.","Nur Obst."], a:0, why:"„… wir essen diese Woche vegetarisch.“", whyAr:"نباتي."}
        ]
      }
    ]
  },
  6: {
    title: "Blick nach vorn", titleAr: "نظرة للمستقبل",
    tasks: [
      {
        id: "b1l-6-1", type: "Gespräch", typeAr: "حوار",
        title: "Gute Vorsätze", titleAr: "قرارات السنة الجديدة",
        situation: "An Silvester sprechen Nora und Omar über ihre Pläne für das neue Jahr.",
        situationAr: "ليلة رأس السنة Nora وOmar بيتكلموا عن خططهم للسنة الجديدة.",
        lines: [
          {s:"Nora", de:"Und, Omar, hast du dir für das neue Jahr etwas vorgenommen?", ar:"ها يا Omar، حطيت لنفسك أي قرار للسنة الجديدة؟"},
          {s:"Omar", de:"Ja, ich werde endlich den Führerschein machen. Ich habe mich schon bei einer Fahrschule angemeldet.", ar:"أيوه، أخيرًا هطلع رخصة السواقة. سجلت فعلًا في مدرسة سواقة."},
          {s:"Nora", de:"Super! Ich will weniger Zeit am Handy verbringen. Letztes Jahr habe ich jeden Tag fast vier Stunden gescrollt.", ar:"جامد! أنا عايزة أقضي وقت أقل على الموبايل. السنة اللي فاتت كنت بقلّب تقريبًا أربع ساعات كل يوم."},
          {s:"Omar", de:"Vier Stunden? Wie willst du das schaffen?", ar:"أربع ساعات؟ هتعملي ده إزاي؟"},
          {s:"Nora", de:"Ich werde die sozialen Netzwerke vom Handy löschen und abends lieber lesen. Das Buch für Januar habe ich schon gekauft.", ar:"همسح السوشيال ميديا من الموبايل وبالليل أقرأ أحسن. كتاب يناير اشتريته خلاص."},
          {s:"Omar", de:"Das klingt gut. Aber ehrlich gesagt halte ich meine Vorsätze meistens nicht lange durch.", ar:"ده كويس. بس بصراحة أنا غالبًا مش بكمل قراراتي كتير."},
          {s:"Nora", de:"Der Trick ist, konkret zu planen. Nicht „mehr Sport“, sondern „dienstags und freitags joggen“.", ar:"الحيلة إنك تخطط بشكل محدد. مش «رياضة أكتر»، لكن «أجري التلات والجمعة»."},
          {s:"Omar", de:"Dann sage ich: Ich werde bis Juni den Führerschein haben. Wenn nicht, lade ich dich zum Essen ein.", ar:"يبقى أقول: هيكون معايا الرخصة قبل يونيو. ولو لأ، هعزمك على الأكل."}
        ],
        questions: [
          {q:"Was hat Omar für das neue Jahr vor?", qAr:"Omar ناوي على إيه في السنة الجديدة؟", o:["Mehr Sport machen.","Den Führerschein machen.","Weniger arbeiten."], a:1, why:"„Ich werde endlich den Führerschein machen.“", whyAr:"هيطلع رخصة السواقة."},
          {q:"Nora war letztes Jahr sehr viel am Handy.", qAr:"Nora كانت على الموبايل كتير جدًا السنة اللي فاتت.", o:["Richtig","Falsch"], a:0, why:"Fast vier Stunden jeden Tag.", whyAr:"تقريبًا أربع ساعات كل يوم."},
          {q:"Was will Nora abends machen?", qAr:"Nora عايزة تعمل إيه بالليل؟", o:["Joggen.","Lesen.","Fernsehen."], a:1, why:"„… abends lieber lesen.“", whyAr:"تقرأ."},
          {q:"Was ist laut Nora der Trick bei Vorsätzen?", qAr:"إيه الحيلة في القرارات حسب Nora؟", o:["Sie niemandem erzählen.","Konkret planen.","Viele Vorsätze haben."], a:1, why:"„Der Trick ist, konkret zu planen.“", whyAr:"التخطيط بشكل محدد."}
        ]
      },
      {
        id: "b1l-6-2", type: "Vortrag", typeAr: "محاضرة",
        title: "Die Stadt der Zukunft", titleAr: "مدينة المستقبل",
        situation: "Eine Stadtplanerin hält einen kurzen Vortrag über das Leben im Jahr 2050.",
        situationAr: "مخططة مدن بتلقي محاضرة قصيرة عن الحياة سنة 2050.",
        lines: [
          {s:"Frau Dr. Kaya", de:"Meine Damen und Herren, wie werden wir im Jahr zwanzig-fünfzig in der Stadt leben? Ich möchte Ihnen heute drei Prognosen vorstellen.", ar:"سيداتي وسادتي، هنعيش إزاي في المدينة سنة 2050؟ حابة النهارده أعرض عليكم تلات توقعات."},
          {s:"Frau Dr. Kaya", de:"Erstens: Die Mobilität wird sich stark verändern. Private Autos werden seltener sein. Stattdessen werden selbstfahrende Busse und Leihfahrräder den Verkehr bestimmen.", ar:"أولًا: التنقل هيتغير جامد. العربيات الخاصة هتبقى أقل. بدالها الأتوبيسات ذاتية القيادة والعجل المؤجر هيتحكموا في المرور."},
          {s:"Frau Dr. Kaya", de:"Zweitens: Es wird mehr Grün geben. Auf vielen Dächern werden Gärten entstehen, in denen die Bewohner Gemüse anbauen.", ar:"تانيًا: هيبقى فيه خضرة أكتر. على أسطح كتير هتتعمل جناين السكان هيزرعوا فيها خضار."},
          {s:"Frau Dr. Kaya", de:"Drittens: Wohnen und Arbeiten werden näher zusammenrücken. Viele Menschen werden in Wohnanlagen leben, in denen es auch Büros, Ärzte und Geschäfte gibt.", ar:"تالتًا: السكن والشغل هيقربوا من بعض. ناس كتير هتعيش في مجمعات سكنية فيها كمان مكاتب ودكاترة ومحلات."},
          {s:"Frau Dr. Kaya", de:"Natürlich weiß niemand genau, ob diese Prognosen stimmen. Aber eins ist sicher: Die Städte, die heute planen, werden morgen die lebenswertesten sein.", ar:"طبعًا محدش يعرف بالظبط إذا كانت التوقعات دي صح. بس حاجة واحدة أكيدة: المدن اللي بتخطط النهارده هتبقى بكرة أحلى مدن للعيشة."}
        ],
        questions: [
          {q:"Wie viele Prognosen stellt Frau Dr. Kaya vor?", qAr:"الدكتورة Kaya عرضت كام توقع؟", o:["Zwei.","Drei.","Fünf."], a:1, why:"„… drei Prognosen vorstellen.“", whyAr:"تلاتة."},
          {q:"Im Jahr 2050 wird es laut Prognose mehr private Autos geben.", qAr:"سنة 2050 هيبقى فيه عربيات خاصة أكتر حسب التوقع.", o:["Richtig","Falsch"], a:1, why:"Private Autos werden seltener sein.", whyAr:"العربيات الخاصة هتبقى أقل."},
          {q:"Was wird es auf vielen Dächern geben?", qAr:"إيه اللي هيبقى على أسطح كتير؟", o:["Solaranlagen.","Gärten.","Parkplätze für Drohnen."], a:1, why:"Gärten, in denen die Bewohner Gemüse anbauen.", whyAr:"جناين يزرعوا فيها خضار."},
          {q:"Was sagt sie am Ende?", qAr:"قالت إيه في الآخر؟", o:["Ihre Prognosen sind sicher richtig.","Städte, die heute planen, werden morgen lebenswerter sein.","Niemand wird in Städten wohnen."], a:1, why:"Die Städte, die heute planen, werden die lebenswertesten sein.", whyAr:"المدن اللي بتخطط النهارده هتبقى الأحلى للعيشة."}
        ]
      },
      {
        id: "b1l-6-3", type: "Gespräch", typeAr: "حوار",
        title: "Ein Rat für den Praktikanten", titleAr: "نصيحة للمتدرب",
        situation: "Der Praktikant Yusuf fragt seine Kollegin Klara um Rat.",
        situationAr: "المتدرب Yusuf بيطلب نصيحة من زميلته Klara.",
        lines: [
          {s:"Yusuf", de:"Klara, hast du kurz Zeit? Ich brauche einen Rat.", ar:"Klara، عندك دقيقة؟ محتاج نصيحة."},
          {s:"Klara", de:"Klar, worum geht es?", ar:"أكيد، الموضوع إيه؟"},
          {s:"Yusuf", de:"Mein Praktikum endet in zwei Monaten. Der Chef hat gefragt, ob ich danach eine Ausbildung hier machen möchte. Aber ich wollte eigentlich studieren.", ar:"التدريب بتاعي هيخلص بعد شهرين. المدير سألني لو عايز أعمل تدريب مهني هنا بعدها. بس أنا أصلًا كنت عايز أدرس في الجامعة."},
          {s:"Klara", de:"An deiner Stelle würde ich mir beide Möglichkeiten genau ansehen. Was gefällt dir denn an der Arbeit hier?", ar:"لو مكانك كنت هبص على الاختيارين كويس. إيه اللي عاجبك في الشغل هنا؟"},
          {s:"Yusuf", de:"Die Kollegen sind toll, und ich lerne jeden Tag etwas Praktisches. Außerdem würde ich sofort Geld verdienen.", ar:"الزملاء رائعين، وكل يوم بتعلم حاجة عملية. وكمان هكسب فلوس على طول."},
          {s:"Klara", de:"Und das Studium?", ar:"والدراسة؟"},
          {s:"Yusuf", de:"Mit einem Studium hätte ich später vielleicht bessere Chancen. Aber ich hätte vier Jahre lang wenig Geld.", ar:"بالدراسة يمكن يبقى عندي فرص أحسن بعدين. بس هفضل أربع سنين معايا فلوس قليلة."},
          {s:"Klara", de:"Weißt du, du könntest auch zuerst die Ausbildung machen und später ein duales Studium anfangen. Das habe ich auch so gemacht.", ar:"بص، ممكن كمان تعمل التدريب المهني الأول وبعدين تبدأ دراسة مزدوجة. أنا كمان عملت كده."},
          {s:"Yusuf", de:"Wirklich? Das wusste ich nicht. Dann spreche ich morgen mit dem Chef darüber.", ar:"بجد؟ ما كنتش أعرف. يبقى هكلم المدير في الموضوع ده بكرة."}
        ],
        questions: [
          {q:"Wann endet Yusufs Praktikum?", qAr:"تدريب Yusuf هيخلص إمتى؟", o:["In zwei Wochen.","In zwei Monaten.","In vier Jahren."], a:1, why:"„Mein Praktikum endet in zwei Monaten.“", whyAr:"بعد شهرين."},
          {q:"Was hat der Chef Yusuf angeboten?", qAr:"المدير عرض على Yusuf إيه؟", o:["Eine feste Stelle.","Eine Ausbildung.","Ein Studium im Ausland."], a:1, why:"Ob er danach eine Ausbildung machen möchte.", whyAr:"تدريب مهني."},
          {q:"Ein Vorteil der Ausbildung: Yusuf würde sofort Geld verdienen.", qAr:"ميزة التدريب المهني: Yusuf هيكسب فلوس على طول.", o:["Richtig","Falsch"], a:0, why:"„Außerdem würde ich sofort Geld verdienen.“", whyAr:"هيكسب فلوس على طول."},
          {q:"Was schlägt Klara vor?", qAr:"Klara بتقترح إيه؟", o:["Sofort zu studieren.","Zuerst die Ausbildung, später ein duales Studium.","Die Firma zu wechseln."], a:1, why:"Zuerst die Ausbildung und später ein duales Studium.", whyAr:"التدريب المهني الأول وبعدين دراسة مزدوجة."}
        ]
      }
    ]
  }
};
