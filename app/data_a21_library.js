/* Original A2.1 verb and ready-expression library for chapters 1-6. */
(() => {
  const V = (chapter, inf, forms, praetForms, aux, part, ar, example) => ({
    chapter, inf, forms, praet: praetForms[0], praetForms, aux, part, ar, example
  });
  const E = (chapter, cat, de, meaning, ar, example) => ({
    chapter, cat, de, meaning, ar, example
  });

  const verbs = [
    V(1,"sich vorstellen",["stelle mich vor","stellst dich vor","stellt sich vor","stellen uns vor","stellt euch vor","stellen sich vor"],["stellte mich vor","stelltest dich vor","stellte sich vor","stellten uns vor","stelltet euch vor","stellten sich vor"],"haben","vorgestellt","يعرّف نفسه","Am ersten Kurstag habe ich mich kurz vorgestellt."),
    V(1,"sich verabreden",["verabrede mich","verabredest dich","verabredet sich","verabreden uns","verabredet euch","verabreden sich"],["verabredete mich","verabredetest dich","verabredete sich","verabredeten uns","verabredetet euch","verabredeten sich"],"haben","verabredet","يتفق على مقابلة","Wir haben uns für Samstag verabredet."),
    V(1,"absagen",["sage ab","sagst ab","sagt ab","sagen ab","sagt ab","sagen ab"],["sagte ab","sagtest ab","sagte ab","sagten ab","sagtet ab","sagten ab"],"haben","abgesagt","يلغي","Sie hat den Termin leider abgesagt."),
    V(1,"zusagen",["sage zu","sagst zu","sagt zu","sagen zu","sagt zu","sagen zu"],["sagte zu","sagtest zu","sagte zu","sagten zu","sagtet zu","sagten zu"],"haben","zugesagt","يوافق / يؤكد الحضور","Alle Freunde haben für das Essen zugesagt."),
    V(1,"verschieben",["verschiebe","verschiebst","verschiebt","verschieben","verschiebt","verschieben"],["verschob","verschobst","verschob","verschoben","verschobt","verschoben"],"haben","verschoben","يؤجل","Wir haben das Treffen auf Sonntag verschoben."),
    V(1,"mitbringen",["bringe mit","bringst mit","bringt mit","bringen mit","bringt mit","bringen mit"],["brachte mit","brachtest mit","brachte mit","brachten mit","brachtet mit","brachten mit"],"haben","mitgebracht","يحضر معه","Ich habe einen Salat mitgebracht."),
    V(1,"bestellen",["bestelle","bestellst","bestellt","bestellen","bestellt","bestellen"],["bestellte","bestelltest","bestellte","bestellten","bestelltet","bestellten"],"haben","bestellt","يطلب","Wir haben zwei Tagesgerichte bestellt."),
    V(1,"kennenlernen",["lerne kennen","lernst kennen","lernt kennen","lernen kennen","lernt kennen","lernen kennen"],["lernte kennen","lerntest kennen","lernte kennen","lernten kennen","lerntet kennen","lernten kennen"],"haben","kennengelernt","يتعرّف على","Im Kurs habe ich viele nette Leute kennengelernt."),

    V(2,"sich bewerben",["bewerbe mich","bewirbst dich","bewirbt sich","bewerben uns","bewerbt euch","bewerben sich"],["bewarb mich","bewarbst dich","bewarb sich","bewarben uns","bewarbt euch","bewarben sich"],"haben","beworben","يتقدّم لوظيفة أو تدريب","Sie hat sich um einen Ausbildungsplatz beworben."),
    V(2,"durchfallen",["falle durch","fällst durch","fällt durch","fallen durch","fallt durch","fallen durch"],["fiel durch","fielst durch","fiel durch","fielen durch","fielt durch","fielen durch"],"sein","durchgefallen","يرسب","Beim ersten Versuch bin ich durchgefallen."),
    V(2,"verbessern",["verbessere","verbesserst","verbessert","verbessern","verbessert","verbessern"],["verbesserte","verbessertest","verbesserte","verbesserten","verbessertet","verbesserten"],"haben","verbessert","يحسّن","Mit viel Übung habe ich meine Note verbessert."),
    V(2,"fehlen",["fehle","fehlst","fehlt","fehlen","fehlt","fehlen"],["fehlte","fehltest","fehlte","fehlten","fehltet","fehlten"],"haben","gefehlt","يتغيب / ينقص","Warum hast du gestern im Unterricht gefehlt?"),
    V(2,"unterrichten",["unterrichte","unterrichtest","unterrichtet","unterrichten","unterrichtet","unterrichten"],["unterrichtete","unterrichtetest","unterrichtete","unterrichteten","unterrichtetet","unterrichteten"],"haben","unterrichtet","يدرّس","Frau Kern hat uns zwei Jahre unterrichtet."),
    V(2,"abschließen",["schließe ab","schließt ab","schließt ab","schließen ab","schließt ab","schließen ab"],["schloss ab","schlossest ab","schloss ab","schlossen ab","schlosst ab","schlossen ab"],"haben","abgeschlossen","ينهي / يتخرج","Er hat seine Ausbildung erfolgreich abgeschlossen."),
    V(2,"sich entscheiden",["entscheide mich","entscheidest dich","entscheidet sich","entscheiden uns","entscheidet euch","entscheiden sich"],["entschied mich","entschiedest dich","entschied sich","entschieden uns","entschiedet euch","entschieden sich"],"haben","entschieden","يقرر","Nach der Schule hat sie sich für eine Lehre entschieden."),
    V(2,"sich melden",["melde mich","meldest dich","meldet sich","melden uns","meldet euch","melden sich"],["meldete mich","meldetest dich","meldete sich","meldeten uns","meldetet euch","meldeten sich"],"haben","gemeldet","يرفع يده / يتواصل","Im Unterricht habe ich mich oft gemeldet."),

    V(3,"hochladen",["lade hoch","lädst hoch","lädt hoch","laden hoch","ladet hoch","laden hoch"],["lud hoch","ludst hoch","lud hoch","luden hoch","ludet hoch","luden hoch"],"haben","hochgeladen","يرفع على الإنترنت","Sie hat die Fotos in die Cloud hochgeladen."),
    V(3,"speichern",["speichere","speicherst","speichert","speichern","speichert","speichern"],["speicherte","speichertest","speicherte","speicherten","speichertet","speicherten"],"haben","gespeichert","يحفظ","Hast du das Dokument gespeichert?"),
    V(3,"löschen",["lösche","löschst","löscht","löschen","löscht","löschen"],["löschte","löschtest","löschte","löschten","löschtet","löschten"],"haben","gelöscht","يحذف","Ich habe die alte App gelöscht."),
    V(3,"posten",["poste","postest","postet","posten","postet","posten"],["postete","postetest","postete","posteten","postetet","posteten"],"haben","gepostet","ينشر منشورًا","Er hat ein Foto vom Konzert gepostet."),
    V(3,"teilen",["teile","teilst","teilt","teilen","teilt","teilen"],["teilte","teiltest","teilte","teilten","teiltet","teilten"],"haben","geteilt","يشارك","Wir haben den Link mit der Gruppe geteilt."),
    V(3,"bewerten",["bewerte","bewertest","bewertet","bewerten","bewertet","bewerten"],["bewertete","bewertetest","bewertete","bewerteten","bewertetet","bewerteten"],"haben","bewertet","يقيّم","Die Zuschauer haben den Film positiv bewertet."),
    V(3,"vergleichen",["vergleiche","vergleichst","vergleicht","vergleichen","vergleicht","vergleichen"],["verglich","verglichst","verglich","verglichen","verglicht","verglichen"],"haben","verglichen","يقارن","Wir haben zwei Streamingdienste verglichen."),
    V(3,"chatten",["chatte","chattest","chattet","chatten","chattet","chatten"],["chattete","chattetest","chattete","chatteten","chattetet","chatteten"],"haben","gechattet","يدردش","Gestern haben wir lange miteinander gechattet."),

    V(4,"sich ärgern",["ärgere mich","ärgerst dich","ärgert sich","ärgern uns","ärgert euch","ärgern sich"],["ärgerte mich","ärgertest dich","ärgerte sich","ärgerten uns","ärgertet euch","ärgerten sich"],"haben","geärgert","ينزعج","Ich habe mich über die Absage geärgert."),
    V(4,"gratulieren",["gratuliere","gratulierst","gratuliert","gratulieren","gratuliert","gratulieren"],["gratulierte","gratuliertest","gratulierte","gratulierten","gratuliertet","gratulierten"],"haben","gratuliert","يهنئ","Wir haben ihr zum Geburtstag gratuliert."),
    V(4,"sich bedanken",["bedanke mich","bedankst dich","bedankt sich","bedanken uns","bedankt euch","bedanken sich"],["bedankte mich","bedanktest dich","bedankte sich","bedankten uns","bedanktet euch","bedankten sich"],"haben","bedankt","يشكر","Er hat sich für das Geschenk bedankt."),
    V(4,"wünschen",["wünsche","wünschst","wünscht","wünschen","wünscht","wünschen"],["wünschte","wünschtest","wünschte","wünschten","wünschtet","wünschten"],"haben","gewünscht","يتمنى","Alle haben mir viel Erfolg gewünscht."),
    V(4,"vorbereiten",["bereite vor","bereitest vor","bereitet vor","bereiten vor","bereitet vor","bereiten vor"],["bereitete vor","bereitetest vor","bereitete vor","bereiteten vor","bereitetet vor","bereiteten vor"],"haben","vorbereitet","يحضّر","Wir haben die Feier gemeinsam vorbereitet."),
    V(4,"stattfinden",["finde statt","findest statt","findet statt","finden statt","findet statt","finden statt"],["fand statt","fandest statt","fand statt","fanden statt","fandet statt","fanden statt"],"haben","stattgefunden","يُقام","Das Fest hat trotz des Regens stattgefunden."),
    V(4,"veröffentlichen",["veröffentliche","veröffentlichst","veröffentlicht","veröffentlichen","veröffentlicht","veröffentlichen"],["veröffentlichte","veröffentlichtest","veröffentlichte","veröffentlichten","veröffentlichtet","veröffentlichten"],"haben","veröffentlicht","ينشر","Sie hat einen Bericht über das Fest veröffentlicht."),
    V(4,"überraschen",["überrasche","überraschst","überrascht","überraschen","überrascht","überraschen"],["überraschte","überraschtest","überraschte","überraschten","überraschtet","überraschten"],"haben","überrascht","يفاجئ","Die Freunde haben ihn mit einer Feier überrascht."),

    V(5,"beantragen",["beantrage","beantragst","beantragt","beantragen","beantragt","beantragen"],["beantragte","beantragtest","beantragte","beantragten","beantragtet","beantragten"],"haben","beantragt","يقدّم طلبًا رسميًا","Ich habe einen neuen Ausweis beantragt."),
    V(5,"unterschreiben",["unterschreibe","unterschreibst","unterschreibt","unterschreiben","unterschreibt","unterschreiben"],["unterschrieb","unterschriebst","unterschrieb","unterschrieben","unterschriebt","unterschrieben"],"haben","unterschrieben","يوقّع","Sie hat das Formular unterschrieben."),
    V(5,"ausfüllen",["fülle aus","füllst aus","füllt aus","füllen aus","füllt aus","füllen aus"],["füllte aus","fülltest aus","füllte aus","füllten aus","fülltet aus","füllten aus"],"haben","ausgefüllt","يملأ استمارة","Haben Sie den Antrag vollständig ausgefüllt?"),
    V(5,"überweisen",["überweise","überweist","überweist","überweisen","überweist","überweisen"],["überwies","überwiesest","überwies","überwiesen","überwiest","überwiesen"],"haben","überwiesen","يحوّل مالًا","Ich habe die Miete gestern überwiesen."),
    V(5,"abheben",["hebe ab","hebst ab","hebt ab","heben ab","hebt ab","heben ab"],["hob ab","hobst ab","hob ab","hoben ab","hobt ab","hoben ab"],"haben","abgehoben","يسحب مالًا","Am Automaten habe ich Bargeld abgehoben."),
    V(5,"einzahlen",["zahle ein","zahlst ein","zahlt ein","zahlen ein","zahlt ein","zahlen ein"],["zahlte ein","zahltest ein","zahlte ein","zahlten ein","zahltet ein","zahlten ein"],"haben","eingezahlt","يودع مالًا","Sie hat zweihundert Euro eingezahlt."),
    V(5,"eröffnen",["eröffne","eröffnest","eröffnet","eröffnen","eröffnet","eröffnen"],["eröffnete","eröffnetest","eröffnete","eröffneten","eröffnetet","eröffneten"],"haben","eröffnet","يفتح / ينشئ","Wir haben ein gemeinsames Konto eröffnet."),
    V(5,"nachreichen",["reiche nach","reichst nach","reicht nach","reichen nach","reicht nach","reichen nach"],["reichte nach","reichtest nach","reichte nach","reichten nach","reichtet nach","reichten nach"],"haben","nachgereicht","يسلّم لاحقًا","Das fehlende Dokument habe ich später nachgereicht."),

    V(6,"kündigen",["kündige","kündigst","kündigt","kündigen","kündigt","kündigen"],["kündigte","kündigtest","kündigte","kündigten","kündigtet","kündigten"],"haben","gekündigt","يستقيل / ينهي العقد","Er hat seine alte Stelle gekündigt."),
    V(6,"verdienen",["verdiene","verdienst","verdient","verdienen","verdient","verdienen"],["verdiente","verdientest","verdiente","verdienten","verdientet","verdienten"],"haben","verdient","يكسب راتبًا","In ihrem neuen Beruf verdient sie mehr."),
    V(6,"durchstellen",["stelle durch","stellst durch","stellt durch","stellen durch","stellt durch","stellen durch"],["stellte durch","stelltest durch","stellte durch","stellten durch","stelltet durch","stellten durch"],"haben","durchgestellt","يحوّل المكالمة","Die Assistentin hat mich sofort durchgestellt."),
    V(6,"zurückrufen",["rufe zurück","rufst zurück","ruft zurück","rufen zurück","ruft zurück","rufen zurück"],["rief zurück","riefst zurück","rief zurück","riefen zurück","rieft zurück","riefen zurück"],"haben","zurückgerufen","يعيد الاتصال","Herr König hat am Nachmittag zurückgerufen."),
    V(6,"hinterlassen",["hinterlasse","hinterlässt","hinterlässt","hinterlassen","hinterlasst","hinterlassen"],["hinterließ","hinterließest","hinterließ","hinterließen","hinterließt","hinterließen"],"haben","hinterlassen","يترك رسالة","Ich habe eine Nachricht hinterlassen."),
    V(6,"bestätigen",["bestätige","bestätigst","bestätigt","bestätigen","bestätigt","bestätigen"],["bestätigte","bestätigtest","bestätigte","bestätigten","bestätigtet","bestätigten"],"haben","bestätigt","يؤكد","Die Firma hat den Termin per E-Mail bestätigt."),
    V(6,"organisieren",["organisiere","organisierst","organisiert","organisieren","organisiert","organisieren"],["organisierte","organisiertest","organisierte","organisierten","organisiertet","organisierten"],"haben","organisiert","ينظّم","Unser Team hat die Veranstaltung organisiert."),
    V(6,"aufbauen",["baue auf","baust auf","baut auf","bauen auf","baut auf","bauen auf"],["baute auf","bautest auf","baute auf","bauten auf","bautet auf","bauten auf"],"haben","aufgebaut","يركّب / يجهّز","Die Techniker haben Licht und Ton aufgebaut.")
  ];

  const expressions = [
    E(1,"Kennenlernen","Darf ich mich kurz vorstellen?","Eine höfliche Einleitung, bevor man Informationen über sich gibt.","اسمح لي أن أعرّف نفسي بسرعة","Darf ich mich kurz vorstellen? Ich heiße Salma und komme aus Kairo."),
    E(1,"Verabredung","Wie wäre es mit Samstag?","Ein freundlicher Vorschlag für einen Termin.","ما رأيك في يوم السبت؟","Wie wäre es mit Samstag gegen fünf?"),
    E(1,"Verabredung","Das passt mir gut.","Der vorgeschlagene Termin ist geeignet.","الموعد مناسب لي","Freitagabend? Das passt mir gut."),
    E(1,"Verabredung","Ich muss dir leider absagen.","Man kann einen Termin nicht wahrnehmen.","للأسف لازم ألغي الموعد","Ich muss dir leider absagen, weil ich arbeiten muss."),
    E(1,"Restaurant","Was können Sie empfehlen?","Eine höfliche Frage nach einer Empfehlung.","ماذا تنصحني أن أطلب؟","Was können Sie empfehlen? Ich esse gern vegetarisch."),
    E(1,"Restaurant","Wir möchten bitte zahlen.","Eine höfliche Bitte um die Rechnung.","نريد الحساب من فضلك","Entschuldigung, wir möchten bitte zahlen."),
    E(1,"Alltag","Das klingt nach einem guten Plan.","Man findet einen Vorschlag gut.","تبدو خطة جيدة","Erst essen, dann ins Kino? Das klingt nach einem guten Plan."),
    E(1,"Erfahrung","Das war ein besonderes Erlebnis.","Etwas war ungewöhnlich und bleibt in Erinnerung.","كانت تجربة مميزة","Die Reise mit meinen Freunden war ein besonderes Erlebnis."),

    E(2,"Schule","Das war nicht mein Lieblingsfach.","Man mochte ein Schulfach nicht besonders.","لم تكن مادتي المفضلة","Chemie war interessant, aber nicht mein Lieblingsfach."),
    E(2,"Erinnerung","Daran erinnere ich mich noch gut.","Eine Erinnerung ist noch klar.","ما زلت أتذكر ذلك جيدًا","An meine erste Lehrerin erinnere ich mich noch gut."),
    E(2,"Meinung","Meiner Meinung nach ...","Eine klare Einleitung für die eigene Meinung.","في رأيي","Meiner Meinung nach sind Praktika sehr wichtig."),
    E(2,"Meinung","Da bin ich anderer Meinung.","Man stimmt einer Aussage höflich nicht zu.","لدي رأي مختلف","Da bin ich anderer Meinung. Noten sind nicht alles."),
    E(2,"Präsentation","Heute möchte ich ... vorstellen.","Ein passender Beginn für eine Präsentation.","اليوم أود أن أقدّم...","Heute möchte ich das Schulsystem in meinem Land vorstellen."),
    E(2,"Präsentation","Zum Schluss kann man sagen, dass ...","Eine Zusammenfassung am Ende eines Vortrags.","في النهاية يمكن القول إن...","Zum Schluss kann man sagen, dass es viele Bildungswege gibt."),
    E(2,"Prüfung","Ich drücke dir die Daumen.","Man wünscht einer Person viel Glück.","أتمنى لك التوفيق","Morgen hast du deine Prüfung. Ich drücke dir die Daumen."),
    E(2,"Lernen","Aus Fehlern lernt man.","Fehler helfen dabei, später besser zu werden.","نتعلم من الأخطاء","Die Antwort war falsch, aber aus Fehlern lernt man."),

    E(3,"Medien","Ich bin nicht ständig online.","Man nutzt das Internet nicht die ganze Zeit.","لست متصلًا بالإنترنت طوال الوقت","Abends bin ich nicht ständig online."),
    E(3,"Meinung","Das sehe ich genauso.","Man stimmt einer Meinung vollständig zu.","أرى الأمر بنفس الطريقة","Soziale Medien brauchen klare Regeln. Das sehe ich genauso."),
    E(3,"Meinung","Das kommt darauf an.","Die Antwort hängt von der Situation ab.","هذا يعتمد على الوضع","Sind Apps immer praktisch? Das kommt darauf an."),
    E(3,"Vergleich","Im Vergleich zu ...","Man stellt zwei Dinge gegenüber.","بالمقارنة مع...","Im Vergleich zu Büchern sind Videos oft kürzer."),
    E(3,"Film","Der Film ist nicht mein Ding.","Der Film passt nicht zum eigenen Geschmack.","الفيلم ليس من نوعي","Horrorfilme sind nicht mein Ding."),
    E(3,"Film","Die Handlung hat mich überrascht.","Die Geschichte verlief anders als erwartet.","أحداث الفيلم فاجأتني","Die Handlung hat mich am Ende wirklich überrascht."),
    E(3,"Digital","Schick mir bitte den Link.","Eine alltägliche Bitte um eine Internetadresse.","أرسل لي الرابط من فضلك","Die Seite klingt interessant. Schick mir bitte den Link."),
    E(3,"Digital","Ich mache eine Pause vom Bildschirm.","Man benutzt für eine Zeit keine digitalen Geräte.","سآخذ استراحة من الشاشة","Nach der Arbeit mache ich eine Pause vom Bildschirm."),

    E(4,"Gefühle","Ich freue mich riesig für dich.","Man zeigt starke Freude über das Glück einer Person.","أنا سعيد جدًا من أجلك","Du hast die Stelle bekommen? Ich freue mich riesig für dich."),
    E(4,"Gefühle","Das tut mir wirklich leid.","Man zeigt Mitgefühl oder entschuldigt sich.","أنا آسف جدًا","Du bist krank? Das tut mir wirklich leid."),
    E(4,"Glückwunsch","Herzlichen Glückwunsch zu ...","Eine freundliche Gratulation zu einem Anlass.","ألف مبروك على...","Herzlichen Glückwunsch zu deinem Abschluss!"),
    E(4,"Dank","Vielen Dank, das ist sehr lieb von dir.","Ein warmer Dank für eine nette Handlung.","شكرًا جدًا، هذا لطف منك","Du hast einen Kuchen mitgebracht? Vielen Dank, das ist sehr lieb von dir."),
    E(4,"Einladung","Danke für die Einladung.","Man bedankt sich dafür, eingeladen worden zu sein.","شكرًا على الدعوة","Danke für die Einladung. Ich komme sehr gern."),
    E(4,"Überraschung","Damit habe ich nicht gerechnet.","Etwas ist völlig unerwartet passiert.","لم أتوقع ذلك","Ihr habt eine Feier organisiert? Damit habe ich nicht gerechnet."),
    E(4,"Trost","Kopf hoch!","Eine Person soll nicht traurig sein und weitermachen.","لا تحبط / ارفع رأسك","Die Prüfung war schwer, aber Kopf hoch!"),
    E(4,"Fest","Die Stimmung war großartig.","Die Atmosphäre bei einem Ereignis war sehr gut.","كانت الأجواء رائعة","Beim Straßenfest war die Stimmung großartig."),

    E(5,"Bewerbung","Vielen Dank für die Einladung zum Gespräch.","Ein höflicher Beginn im Bewerbungsgespräch.","شكرًا على دعوتي للمقابلة","Vielen Dank für die Einladung zum Gespräch. Ich freue mich, hier zu sein."),
    E(5,"Bewerbung","Zu meinen Stärken gehört ...","Man beschreibt eine persönliche Stärke.","من نقاط قوتي...","Zu meinen Stärken gehört, dass ich sehr gut organisiere."),
    E(5,"Bewerbung","Ich habe bereits Erfahrung mit ...","Man nennt passende Berufserfahrung.","لدي خبرة سابقة في...","Ich habe bereits Erfahrung mit Kundenberatung."),
    E(5,"Behörde","Könnten Sie mir bitte weiterhelfen?","Eine höfliche Bitte um Unterstützung.","هل يمكنك مساعدتي من فضلك؟","Könnten Sie mir bitte weiterhelfen? Ich suche das Bürgerbüro."),
    E(5,"Behörde","Welche Unterlagen brauche ich?","Man fragt nach den notwendigen Dokumenten.","ما المستندات المطلوبة؟","Welche Unterlagen brauche ich für den Antrag?"),
    E(5,"Bank","Ich möchte ein Konto eröffnen.","Eine typische Bitte bei einer Bank.","أريد فتح حساب","Guten Tag, ich möchte ein Konto eröffnen."),
    E(5,"Stadt","Das liegt ganz in der Nähe.","Ein Ort ist nicht weit entfernt.","المكان قريب جدًا","Die nächste Haltestelle liegt ganz in der Nähe."),
    E(5,"Stadt","Besonders sehenswert ist ...","Man empfiehlt einen interessanten Ort.","من الأماكن الجديرة بالزيارة...","Besonders sehenswert ist der alte Marktplatz."),

    E(6,"Beruf","Zu meinen Aufgaben gehört ...","Man beschreibt einen Teil der eigenen Arbeit.","من ضمن مهامي...","Zu meinen Aufgaben gehört die Beratung neuer Kunden."),
    E(6,"Beruf","Ich bin für ... zuständig.","Man nennt den eigenen Verantwortungsbereich.","أنا مسؤول عن...","Ich bin für die Technik zuständig."),
    E(6,"Berufswunsch","Später möchte ich ... werden.","Man spricht über einen zukünftigen Beruf.","في المستقبل أريد أن أصبح...","Später möchte ich Veranstaltungstechniker werden."),
    E(6,"Bahn","Gibt es eine direkte Verbindung?","Man fragt nach einer Reise ohne Umsteigen.","هل توجد رحلة مباشرة؟","Gibt es eine direkte Verbindung nach Hamburg?"),
    E(6,"Bahn","Von welchem Gleis fährt der Zug ab?","Man fragt am Bahnhof nach dem richtigen Bahnsteig.","القطار يغادر من أي رصيف؟","Von welchem Gleis fährt der Zug nach Köln ab?"),
    E(6,"Telefon","Könnten Sie mich bitte mit ... verbinden?","Eine höfliche Bitte, einen Anruf weiterzuleiten.","هل يمكنك تحويلي إلى...؟","Könnten Sie mich bitte mit Frau Weber verbinden?"),
    E(6,"Telefon","Möchten Sie eine Nachricht hinterlassen?","Man bietet an, Informationen zu notieren.","هل تريد ترك رسالة؟","Herr Klein ist nicht da. Möchten Sie eine Nachricht hinterlassen?"),
    E(6,"Telefon","Könnten Sie mich bitte zurückrufen?","Eine höfliche Bitte um einen späteren Anruf.","هل يمكنك معاودة الاتصال بي؟","Könnten Sie mich bitte heute Nachmittag zurückrufen?")
  ];

  window.A2_VERBS = [...verbs, ...(window.A2_VERBS || [])];
  window.READY_EXPRESSIONS = [...expressions, ...(window.READY_EXPRESSIONS || [])];
})();
