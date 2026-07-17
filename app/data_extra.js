/* Original companion material aligned with Netzwerk neu A2.2, Kapitel 7-12. */
(function () {
  const EXTRA = {
    7: {
      vocab: [
        {w:"die Kaution, -en", d:"Geld als Sicherheit, das man später zurückbekommt.", ex:"Für das Leihrad zahlt man keine Kaution.", ar:"تأمين مالي / مبلغ ضمان"},
        {w:"der Kundenservice", d:"Eine Abteilung, die Kundinnen und Kunden bei Problemen hilft.", ex:"Der Kundenservice ist rund um die Uhr erreichbar.", ar:"خدمة العملاء"},
        {w:"reservieren", d:"Etwas vorher für eine bestimmte Zeit bestellen.", ex:"Ich reserviere ein Auto für morgen früh.", ar:"يحجز"},
        {w:"versichert sein", d:"Bei einem Unfall finanziell geschützt sein.", ex:"Sind die Fahrer bei der Fahrt versichert?", ar:"يكون مؤمَّنًا عليه"},
        {w:"der Bordcomputer, -", d:"Ein Computer in einem Fahrzeug, über den man es bedient.", ex:"Gib die PIN in den Bordcomputer ein.", ar:"كمبيوتر داخل المركبة"},
        {w:"die Nähe", d:"Ein Ort, der nicht weit entfernt ist.", ex:"Die App zeigt freie Fahrräder in meiner Nähe.", ar:"مكان قريب / الجوار"},
        {w:"der Tarif, -e", d:"Der Preis und die Regeln für eine Dienstleistung.", ex:"Der günstigste Tarif kostet zehn Cent pro Minute.", ar:"التعريفة / نظام السعر"},
        {w:"der Kinderwagen, -", d:"Ein Wagen, in dem man ein kleines Kind schiebt.", ex:"Gibt es im Zug Platz für einen Kinderwagen?", ar:"عربة أطفال"},
        {w:"das Bordbistro, -s", d:"Ein kleines Restaurant in einem Zug.", ex:"Das Bordbistro ist heute leider geschlossen.", ar:"مطعم القطار"},
        {w:"die Umleitung, -en", d:"Ein anderer Weg, weil die normale Straße gesperrt ist.", ex:"Wegen der Baustelle gibt es eine Umleitung.", ar:"طريق بديل / تحويلة"},
        {w:"die Ausfahrt, -en", d:"Eine Stelle, an der man eine Straße oder Autobahn verlässt.", ex:"Nehmen Sie die nächste Ausfahrt.", ar:"مخرج الطريق"},
        {w:"sich verfahren", d:"Den falschen Weg fahren.", ex:"Wir haben uns in der Innenstadt verfahren.", ar:"يضل الطريق بالسيارة"},
        {w:"die Sperrung, -en", d:"Wenn eine Straße oder Strecke vorübergehend geschlossen ist.", ex:"Wegen einer Sperrung fährt der Bus eine andere Route.", ar:"إغلاق طريق أو خط"}
      ],
      readings: [
        {
          title:"Mit Flexi durch die Stadt",
          kind:"Werbung",
          text:`Müssen Sie schnell von A nach B? Wollen Sie flexibel sein? Ab sofort können Sie Autos, Fahrräder und E-Scooter mit unserer Flexi-App leihen! Das ist ganz einfach: Sie laden die App auf Ihr Handy herunter und registrieren sich. Mit der App suchen Sie ein Fahrzeug in Ihrer Nähe. Sie können wählen, was Sie suchen: Auto, Fahrrad oder E-Scooter. Wenn Sie ein Fahrzeug gefunden haben, bekommen Sie eine PIN. Diese geben Sie in den Bordcomputer ein. Und dann geht's los! Unsere Tarife finden Sie online und in der App.`,
          ar:"هل تحتاج إلى الانتقال بسرعة من مكان إلى آخر؟ هل تريد أن تكون مرنًا؟ من الآن يمكنك استئجار السيارات والدراجات والسكوترات الكهربائية بتطبيق Flexi الخاص بنا! الأمر بسيط جدًا: نزّل التطبيق على هاتفك وسجّل حسابك. ابحث بالتطبيق عن مركبة قريبة منك، واختر سيارة أو دراجة أو سكوترًا كهربائيًا. عندما تجد مركبة ستحصل على رقم سري، أدخله في كمبيوتر المركبة ثم انطلق! ستجد تعريفاتنا على الإنترنت وفي التطبيق.",
          glossary:[["leihen","يستأجر"],["sich registrieren","يسجّل"],["das Fahrzeug","المركبة"],["die Nähe","المكان القريب"],["der Bordcomputer","كمبيوتر المركبة"],["der Tarif","التعريفة"]],
          questions:[["Welche Fahrzeuge kann man mit Flexi leihen?","Autos, Fahrräder und E-Scooter."],["Was macht man nach dem Herunterladen der App?","Man registriert sich."],["Wo gibt man die PIN ein?","In den Bordcomputer."],["Wo findet man die Tarife?","Online und in der App."]]
        },
        {
          title:"Neue Wege durch die Stadt",
          kind:"Artikel",
          text:`Überall Stau und Stress\nLondon, Berlin, Mexiko-Stadt oder Tokio – überall die gleiche Situation: Die Menschen müssen zur Arbeit fahren. Wie kommen sie dorthin? Sie fahren mit vielen anderen Menschen in zu vollen U-Bahnen, wo sie sich nicht setzen können oder stehen mit ihrem Auto im Stau. Die Luft ist schlecht und alle sind genervt. Muss das so sein? Nein, sagen Experten und es gibt viele Ideen, wie man das Problem lösen kann.\n\nEs geht auch anders\nKopenhagen – die Hauptstadt von Dänemark – ist ein gutes Beispiel: breite Radwege, viele Parkplätze für Fahrräder und besondere Ampeln für Radfahrer. Sie werden schnell grün, wenn ein Radfahrer kommt. Die Konsequenz? Mehr als 50 Prozent der Stadtbewohner fahren mit dem Fahrrad ins Büro. Aber natürlich will oder kann nicht jeder mit dem Fahrrad fahren – und manche Städte sind viel größer als Kopenhagen ...\n\nVielleicht sind E-Bikes oder E-Scooter die Lösung für die Zukunft. Diese elektrischen Fahrzeuge machen Spaß und man ist schnell. Aber Untersuchungen zeigen, dass die meisten Menschen sie in der Freizeit nutzen. Nur wenige Leute fahren mit dem E-Bike zur Arbeit.\n\nIn La Paz in Bolivien haben Seilbahnen das Verkehrsproblem in der Stadt reduziert. Inzwischen kann man dort mit zehn Seilbahn-Linien über der Stadt ohne Stau von A nach B fahren. Seilbahnen sind umweltfreundlich, aber teuer.\n\nWas ist die Lösung?\nWie sieht die Zukunft der Großstädte aus? Die Lösung ist eine Kombination von diesen Ideen und anderen Vorschlägen. Vielleicht dürfen Autos in Zukunft nicht mehr in die Innenstädte fahren oder es kostet Geld – wie zum Beispiel in Mailand.`,
          ar:"الازدحام والتوتر في كل مكان\nفي لندن وبرلين ومكسيكو سيتي وطوكيو نجد الوضع نفسه: يجب على الناس الذهاب إلى العمل. يركبون قطارات مترو مكتظة لا يجدون فيها مقعدًا، أو يقفون بسياراتهم في الزحام. الهواء ملوث والجميع منزعج. ولكن الخبراء يقولون إن هناك أفكارًا كثيرة لحل المشكلة.\n\nيمكن أن يكون الأمر مختلفًا\nتقدم كوبنهاجن، عاصمة الدنمارك، مثالًا جيدًا: مسارات واسعة ومواقف كثيرة للدراجات، وإشارات مرور خاصة لراكبي الدراجات تتحول سريعًا إلى الأخضر عند اقتراب دراجة. والنتيجة أن أكثر من نصف سكان المدينة يذهبون إلى العمل بالدراجة. بالطبع ليس كل شخص يريد أو يستطيع ركوب الدراجة، كما أن بعض المدن أكبر بكثير من كوبنهاجن.\n\nربما تكون الدراجات والسكوترات الكهربائية حل المستقبل؛ فهي ممتعة وسريعة. لكن الدراسا توضح أن معظم الناس يستخدمونها في وقت الفراغ، وقليلون فقط يذهبون إلى العمل بدراجة كهربائية.\n\nفي لاباز ببوليفيا خففت عربات التلفريك مشكلة المرور. ويمكن الآن التنقل فوق المدينة عبر عشرة خطوط بلا ازدحام. هي صديقة للبيئة لكنها مكلفة.\n\nما الحل؟\nيرجح أن مستقبل المدن الكبرى سيعتمد على مزيج من هذه الأفكار وغيرها. وربما تُمنع السيارات مستقبلًا من دخول مراكز المدن أو يصبح الدخول مقابل رسوم، كما في ميلانو.",
          glossary:[["der Stau","الازدحام"],["der Radweg","مسار الدراجات"],["die Untersuchung","الدراسة"],["die Seilbahn","التلفريك"],["umweltfreundlich","صديق للبيئة"],["die Innenstadt","وسط المدينة"]],
          questions:[["Warum sind viele Menschen in Großstädten genervt?","Wegen voller U-Bahnen, Stau und schlechter Luft."],["Was ist in Kopenhagen besonders gut für Radfahrer?","Breite Radwege, viele Fahrradparkplätze und besondere Ampeln."],["Welche Verkehrslösung gibt es in La Paz?","Zehn Seilbahn-Linien über der Stadt."],["Welche Lösung nennt der Text für die Zukunft?","Eine Kombination verschiedener Ideen und Vorschläge."]]
        },
        {
          title:"Der Weg zur Arbeit in D-A-CH",
          kind:"Erfahrungsberichte",
          text:`Anna Franze, 34, Grafikerin, Hamburg\nBei mir ist das ganz einfach. Ich fahre immer mit dem Fahrrad, nur bei Gewitter und Glatteis nicht. Das dauert eine halbe Stunde und ich bin viel schneller als mit dem Bus oder der U-Bahn, weil ich nie warten muss. Außerdem bin ich dann im Büro richtig wach!\n\nFelix Pinto, 56, Arzt, Vernay am Neuenburger See\nIch wohne auf dem Land und fahre jeden Tag nach Bern, d. h. ich pendle. Ich fahre mit dem Auto zum Bahnhof, das sind 30 Minuten. Dann fahre ich mit dem Zug. Zum Glück ist meine Praxis gleich beim Bahnhof. Die Zugfahrt dauert 40 Minuten.\n\nMilan Jurić, 22, Student, Wien\nIch wohne noch bei meinen Eltern und muss täglich zur Uni fahren. Zuerst nehme ich den Bus, dann fahre ich mit der Straßenbahn und am Ende noch mit der U-Bahn. Insgesamt dauert das etwa 50 Minuten, manchmal sogar eine Stunde – in eine Richtung!`,
          ar:"آنا فرانتسه، 34 عامًا، مصممة جرافيك من هامبورج\nالأمر بالنسبة لي بسيط جدًا. أذهب دائمًا بالدراجة، إلا عند العواصف الرعدية أو تجمد الطريق. يستغرق ذلك نصف ساعة، وأكون أسرع بكثير من الحافلة أو المترو لأنني لا أنتظر أبدًا. كما أصل إلى المكتب مستيقظة تمامًا!\n\nفيليكس بينتو، 56 عامًا، طبيب من فيرناي على بحيرة نوشاتيل\nأعيش في الريف وأذهب يوميًا إلى برن، أي إنني أتنقل يوميًا بين المنزل والعمل. أقود السيارة إلى المحطة لمدة 30 دقيقة، ثم أركب القطار. لحسن الحظ تقع عيادتي بجوار المحطة مباشرة، وتستغرق رحلة القطار 40 دقيقة.\n\nميلان يوريتش، 22 عامًا، طالب من فيينا\nما زلت أعيش مع والديّ ويجب عليّ الذهاب إلى الجامعة يوميًا. أستقل الحافلة أولًا، ثم الترام، وفي النهاية المترو. يستغرق الطريق نحو 50 ديقة في المجمل، وأحيانًا ساعة كاملة، وذلك في اتجاه واحد فقط!",
          glossary:[["das Gewitter","العاصفة الرعدية"],["das Glatteis","جليد الطريق"],["pendeln","يتنقل يوميًا بين العمل والمنزل"],["die Praxis","العيادة"],["insgesamt","في المجمل"],["in eine Richtung","في اتجاه واحد"]],
          questions:[["Wann fährt Anna nicht mit dem Fahrrad?","Bei Gewitter und Glatteis."],["Wie lange braucht Felix mit Auto und Zug?","Insgesamt 70 Minuten."],["Welche Verkehrsmittel benutzt Milan?","Bus, Straßenbahn und U-Bahn."],["Wer braucht manchmal eine Stunde für eine Richtung?","Milan Jurić."]]
        }
      ]
    },
    8: {
      vocab: [
        {w:"beschriften", d:"Auf einen Gegenstand einen Zettel mit seinem Namen kleben.", ex:"Ich beschrifte die Möbel mit deutschen Wörtern.", ar:"يضع اسمًا أو بطاقة على الشيء"},
        {w:"nachschlagen", d:"Eine Information in einem Buch oder Wörterbuch suchen.", ex:"Unbekannte Wörter schlage ich im Wörterbuch nach.", ar:"يبحث في القاموس / المرجع"},
        {w:"nachsprechen", d:"Einen gehörten Satz genauso wiederholen.", ex:"Hör den Dialog und sprich jeden Satz nach.", ar:"يردد خلف المتحدث"},
        {w:"der Lernstoff", d:"Alles, was man für einen Kurs oder eine Prüfung lernen muss.", ex:"Ich teile den Lernstoff auf sieben Tage auf.", ar:"المادة المطلوب مذاكرتها"},
        {w:"die Karteikarte, -n", d:"Eine kleine Karte zum Lernen von Fragen und Wörtern.", ex:"Auf die Vorderseite der Karteikarte schreibe ich das Wort.", ar:"بطاقة مذاكرة"},
        {w:"der Stichpunkt, -e", d:"Ein kurzes Wort oder eine kurze Notiz zu einem Thema.", ex:"Für meine Präsentation notiere ich nur Stichpunkte.", ar:"نقطة مختصرة"},
        {w:"der Blickkontakt", d:"Wenn man einer Person beim Sprechen in die Augen sieht.", ex:"Guter Blickkontakt macht eine Präsentation lebendig.", ar:"التواصل البصري"},
        {w:"deutlich", d:"So, dass man etwas gut hören oder verstehen kann.", ex:"Bitte sprich langsam und deutlich.", ar:"بوضوح"},
        {w:"auswendig lernen", d:"Etwas so lernen, dass man es ohne Text sagen kann.", ex:"Du musst nicht die ganze Präsentation auswendig lernen.", ar:"يحفظ عن ظهر قلب"},
        {w:"sich vorbereiten auf", d:"Vorher alles Nötige für etwas tun.", ex:"Wir bereiten uns gemeinsam auf die Prüfung vor.", ar:"يستعد لـ"},
        {w:"die Gliederung, -en", d:"Die geordnete Struktur eines Textes oder Vortrags.", ex:"Eine klare Gliederung hilft dem Publikum.", ar:"تقسيم / هيكل الموضوع"},
        {w:"die Rückmeldung, -en", d:"Eine Reaktion mit Lob, Kritik oder Tipps.", ex:"Nach dem Vortrag bekomme ich eine hilfreiche Rückmeldung.", ar:"تغذية راجعة / رأي"},
        {w:"die Folie, -n", d:"Eine einzelne Seite, die man bei einer Präsentation zeigt.", ex:"Auf dieser Folie sieht man nur ein Bild und drei Stichpunkte.", ar:"شريحة عرض"},
        {w:"der Vortrag, ⸚e", d:"Eine längere mündliche Präsentation vor anderen Menschen.", ex:"Der Vortrag dauert ungefähr zehn Minuten.", ar:"محاضرة / عرض شفهي"},
        {w:"das Publikum", d:"Alle Personen, die einen Vortrag oder eine Vorstellung ansehen.", ex:"Das Publikum stellt am Ende viele Fragen.", ar:"الجمهور"},
        {w:"die Lernstrategie, -n", d:"Eine geplante Methode, mit der man besser lernt.", ex:"Karteikarten sind eine gute Lernstrategie für Wortschatz.", ar:"استراتيجية مذاكرة"},
        {w:"der Prüfungstermin, -e", d:"Das festgelegte Datum einer Prüfung.", ex:"Der Prüfungstermin steht schon im Kalender.", ar:"موعد الامتحان"},
        {w:"die Aussprache", d:"Die Art, wie Laute und Wörter gesprochen werden.", ex:"Mit Aufnahmen kann ich meine Aussprache kontrollieren.", ar:"النطق"}
      ],
      readings: [
        {
          title:"Prüfungen – Wer hat kluge Tipps?",
          kind:"Forumsbeiträge",
          text:`Mona\nAm Ende vom Semester haben wir viele Prüfungen und man muss total viel lernen. Aber immer nur lernen ist auch hart – ich denke immer an zu viele andere Sachen und mache ganz viele Pausen. Am Anfang vom Semester mache ich mir einen schönen Plan und will ganz viel machen, aber am Ende schaffe ich das nicht – manche Themen kapiere ich einfach nicht. Ich glaube, ich bin nicht intelligent genug. Was kann ich tun? Ich möchte doch ein Stipendium bekommen.\n\nSchrauber\nIch arbeite tagsüber als Mechaniker und lerne abends für die Abschlussprüfung. Ich muss viel lernen, jeden Tag gleich nach der Arbeit mindestens noch zwei Stunden. Dann gehe ich natürlich zu spät ins Bett und schlafe zu wenig. Am nächsten Tag habe ich dann die Hälfte wieder vergessen. Ein Wochenende kenne ich eigentlich auch nicht mehr, weil ich dann auch lernen muss. Wie soll ich das schaffen?\n\njanjan02\nNächste Woche habe ich meine praktische Führerscheinprüfung und ich bin total nervös. Ich habe Angst, dass ich einen doofen Fehler beim Fahren mache, weil ich so aufgeregt bin. Mein Herz rast jetzt schon und ich habe Magenschmerzen. Ich hatte nicht viele Fahrstunden, weil ich keine Zeit hatte. Vielleicht habe ich zu wenig Erfahrung? Wer kann mir helfen?`,
          ar:"مونا\nفي نهاية الفصل الدراسي لدينا امتحانات كثيرة، ويجب علينا أن نذاكر كثيرًا جدًا. لكن المذاكرة طوال الوقت شاقة أيضًا؛ فأنا أفكر دائمًا في أشياء أخرى كثيرة وآخذ فترات راحة كثيرة. في بداية الفصل أضع خطة جيدة وأريد إنجاز الكثير، لكنني في النهاية لا أنجح، وبعض الموضوعات لا أفهمها ببساطة. أعتقد أنني لست ذكية بما يكفي. ماذا أفعل؟ فأنا أريد الحصول على منحة دراسية.\n\nشراوبر\nأعمل نهارًا ميكانيكيًا وأذاكر مساءً للامتحان النهائي. يجب عليّ أن أذاكر كثيرًا، ساعتين إضافيتين على الأقل كل يوم بعد العمل مباشرة. وبالطبع أذهب إلى الفراش متأخرًا ولا أنام كفاية، فأكون في اليوم التالي قد نسيت نصف ما ذاكرته. ولم يعد لديّ عطلة نهاية أسبوع فعليًا، لأنني يجب أن أذاكر فيها أيضًا. كيف سأتمكن من ذلك؟\n\nيانيان 02\nلديّ الأسبوع المقبل الامتحان العملي لرخصة القيادة، وأنا متوترة جدًا. أخاف أن أرتكب خطأً سخيفًا أثناء القيادة بسبب توتري الشديد. قلبي يخفق بسرعة من الآن ومعدتي تؤلمني. لم آخذ حصص قيادة كثيرة لأن وقتي لم يكن يسمح. ربما لديّ خبرة قليلة جدًا؟ من يستطيع مساعدتي؟",
          glossary:[["die Abschlussprüfung","الامتحان النهائي"],["das Stipendium","المنحة الدراسية"],["tagsüber","أثناء النهار"],["die Hälfte","النصف"],["das Herz rast","القلب يخفق بسرعة"],["die Fahrstunde","حصة تعليم القيادة"]],
          questions:[["Warum schafft Mona ihren Lernplan nicht?","Sie denkt an andere Sachen, macht viele Pausen und versteht manche Themen nicht."],["Warum schläft Schrauber zu wenig?","Weil er nach der Arbeit noch mindestens zwei Stunden lernt."],["Welche Prüfung hat janjan02?","Die praktische Führerscheinprüfung."],["Warum hat janjan02 wenig Fahrerfahrung?","Weil sie nicht viele Fahrstunden hatte."]]
        },
        {
          title:"Mit Sprache arbeiten",
          kind:"Berufsporträts",
          text:`Sprachen faszinieren. Viele Menschen lernen in ihrer Freizeit eine neue Sprache, andere machen die Sprache zu ihrem Beruf. Wir stellen Ihnen drei Personen und Berufe vor.\n\nTom Dahl\nVor einem Jahr habe ich meine Ausbildung zum Gebärdendolmetscher abgeschlossen. Das ist mein Traumberuf! Ich sorge dafür, dass die Kommunikation zwischen den Menschen klappt. Jeden Tag gibt es andere Aufgaben. Ich dolmetsche in Konferenzen, bei Behörden oder bei privaten Festen, zum Beispiel bei Hochzeiten auf dem Standesamt. Ich begleite gehörlose Menschen auch zum Arzt. Manchmal ist es auch komisch, wenn ich in ganz privaten Situationen neutral bleiben muss – ich bin ja kein Angehöriger. Das musste ich erst mal lernen. Von Montag bis Mittwoch arbeite ich selbstständig, donnerstags und freitags arbeite ich stundenweise für ein Gebärdentelefon: Ich kommuniziere mit Gehörlosen über Video und gebe die Informationen mündlich an ihre Gesprächspartner/innen weiter.\n\nCarina Holst\nIch habe Sprachwissenschaften studiert. Weil ich danach keine Arbeit gefunden habe, habe ich in mehreren Kursen programmieren gelernt. So bin ich auch zu meinem Job gekommen. Ich habe bei einer Firma ein Praktikum gemacht und da haben sie einen Auftrag bekommen: eine App zum Sprachenlernen. Mein Arbeitgeber hat mich für dieses Projekt in Vollzeit angestellt und jetzt arbeite ich nur noch an dieser App. Ich arbeite mit Autoren zusammen und programmiere Übungen und Aufgaben. Man kann sehr leicht speichern, was die Lernenden in die App sprechen und schreiben, aber wir müssen einen Weg finden, wie die App ihnen sinnvoll Feedback geben kann.\n\nMagdalena Duda\nSeit vier Jahren bin ich Übersetzerin. Ich arbeite freiberuflich, bin also meine eigene Chefin. Die Aufträge sind sehr unterschiedlich: offizielle Dokumente, Prospekte, Kataloge oder Verträge für ausländische Firmen. Da lerne ich immer wieder dazu. Und der letzte Auftrag war wieder mal ein Film. Das macht mir am meisten Spaß. Da überlege ich immer, wie eine Figur wohl spricht und welche Ausdrücke zu ihr passen. Manchmal habe ich sehr viel Arbeit. Dann fange ich morgens um 10 Uhr an und arbeite bis Mitternacht. Es kann aber auch sein, dass ich eine Zeit lang nur wenige Aufträge habe. Dann mache ich mir Sorgen, ob ich schnell wieder einen Auftrag bekomme.`,
          ar:"اللغات مذهلة. يتعلم أشخاص كثيرون لغة جديدة في وقت فراغهم، بينما يجعلها آخرون مهنتهم. نعرّفكم هنا بثلاثة أشخاص ومهن.\n\nتوم دال\nأنهيت منذ عام تدريبي لأصبح مترجمًا للغة الإشارة، وهذه مهنة أحلامي! أحرص على نجاح التواصل بين الناس. لديّ مهام مختلفة كل يوم؛ أترجم في المؤتمرات والمصالح الحكومية والمناسبات الخاصة، مثل حفلات الزفاف في مكتب الأحوال المدنية، وأرافق الصم إلى الطبيب. يكون الموقف غريبًا أحيانًا عندما يجب أن أبقى محايدًا في مواقف شخصية جدًا، فأنا لست من العائلة، وكان عليّ أن أتعلم ذلك. أعمل مستقلًا من الاثنين إلى الأربعاء، وأعمل بالساعة يومي الخميس والجمعة لهاتف لغة الإشارة؛ أتواصل مع الصم عبر الفيديو وأنقل المعلومات شفهيًا إلى الأشخاص الذين يتحدثون معهم.\n\nكارينا هولست\nدرست علوم اللغة. ولأنني لم أجد عملًا بعد ذلك، تعلمت البرمجة في عدة دورات، وهكذا وصلت إلى وظيفتي. أمضيت تدريبًا في شركة حصلت وقتها على مشروع لإنشاء تطبيق لتعلم اللغات. عيّنني صاحب العمل بدوام كامل في هذا المشروع، والآن لا أعمل إلا على هذا التطبيق. أتعاون مع المؤلفين وأبرمج التدريبات والمهام. يمكن بسهولة حفظ ما ينطقه المتعلمون أو يكتبونه في التطبيق، لكن علينا إيجاد طريقة يقدم بها التطبيق لهم ملاحظات مفيدة.\n\nماجدالينا دودا\nأعمل مترجمة منذ أربع سنوات. أعمل حرة، أي إنني مديرة نفسي. المهام مختلفة جدًا: وثائق رسمية ونشرات وكتالوجات أو عقود لشركات أجنبية، ومنها أتعلم دائمًا أشياء جديدة. وكانت المهمة الأخيرة فيلمًا مرة أخرى، وهذا ما يمتعني أكثر. أفكر هنا في الطريقة التي يتحدث بها كل بطل والتعبيرات المناسبة له. أحيانًا يكون لديّ عمل كثير، فأبدأ الساعة العاشرة صباحًا وأعمل حتى منتصف الليل. وقد تمر أيضًا فترة لا أحصل فيها إلا على مهام قليلة، وعندها أقلق بشأن متى سأحصل على مهمة جديدة.",
          glossary:[["der Gebärdendolmetscher","مترجم لغة الإشارة"],["gehörlos","أصم"],["die Sprachwissenschaften","علوم اللغة"],["in Vollzeit","بدوام كامل"],["freiberuflich","في عمل حر"],["der Auftrag","المهمة / التكليف"]],
          questions:[["Was ist Toms Beruf?","Er ist Gebärdendolmetscher."],["Woran arbeitet Carina?","An einer App zum Sprachenlernen."],["Welche Texte übersetzt Magdalena?","Offizielle Dokumente, Prospekte, Kataloge, Verträge und Filme."],["Welchen Nachteil nennt Magdalena?","Manchmal hat sie nur wenige Aufträge und macht sich Sorgen."]]
        },
        {
          title:"Nachbarn für Nachbarn",
          kind:"Projektvorstellung",
          text:`Das sind wir.\nUnser Verein existiert schon seit 10 Jahren und aktuell gibt es über 20 verschiedene Projekte und mehr als 50 Freiwillige. Unsere Idee ist einfach: Jede/r hat Talente und wir können alle voneinander lernen und uns helfen.\n\nGroßeltern werden und finden\nSie sind schon in Rente und haben viel Zeit? Sie haben Kinder und brauchen einen Babysitter? Wir bringen Familien und Senioren zusammen! In unserer Bücherei können „Großeltern“ und „Enkel“ zusammen spielen, lernen und Spaß haben.\n\nTausche Essen für Hilfe\nWir alle brauchen mal Hilfe: im Garten, beim Putzen oder Spülen, am PC oder beim Sprachenlernen für den Urlaub. Und jede/r kann mal helfen – und bekommt als Dankeschön für den Service eine Einladung zum Essen.\n\nRepair-Café\nWir werfen so viele Dinge weg, weil die Reparatur zu teuer ist. In unserem Repair-Café möchten wir das ändern. Bringen Sie Ihr kaputtes „Ding“. Sie können hier lernen, wie Sie es selbst reparieren. Wir haben das passende Werkzeug.`,
          ar:"من نحن\nتأسست جمعيتنا منذ عشر سنوات، ويوجد حاليًا أكثر من 20 مشروعًا مختلفًا وأكثر من 50 متطوعًا. فكرتنا بسيطة: لدى كل شخص مواهب، ويمكننا جميعًا أن نتعلم بعضنا من بعض وأن نساعد بعضنا.\n\nكن جدًا أو جدة، أو اعثر على جدين\nهل تقاعدت ولديك وقت كثير؟ هل لديك أطفال وتحتاج إلى جليس أطفال؟ نجمع العائلات وكبار السن معًا! يستطيع «الأجداد» و«الأحفاد» في مكتبتنا أن يلعبوا ويتعلموا ويستمتعوا معًا.\n\nبادل الطعام مقابل المساعدة\nنحن جميعًا نحتاج إلى المساعدة أحيانًا: في الحديقة أو التنظيف أو غسل الأطباق، أو في استخدام الكمبيوتر، أو تعلم لغة من أجل الإجازة. ويستطيع كل شخص أن يساعد أحيانًا، ويحصل شكرًا على خدمته على دعوة لتناول الطعام.\n\nمقهى الإصلاح\nنرمي أشياء كثيرة لأن إصلاحها مكلف جدًا. نريد تغيير ذلك في مقهى الإصلاح لدينا. أحضر الشيء المعطل، ويمكنك هنا أن تتعلم كيفية إصلاحه بنفسك. لدينا الأدوات المناسبة.",
          glossary:[["der Verein","الجمعية"],["der Freiwillige","المتطوع"],["in Rente sein","يكون متقاعدًا"],["das Dankeschön","عربون شكر"],["wegwerfen","يرمي"],["das Werkzeug","الأدوات"]],
          questions:[["Wie lange existiert der Verein?","Seit zehn Jahren."],["Was machen Familien und Senioren im ersten Projekt?","Sie spielen, lernen und haben zusammen Spaß."],["Was bekommt man für seine Hilfe?","Eine Einladung zum Essen."],["Was lernt man im Repair-Café?","Wie man kaputte Dinge selbst repariert."]]
        }
      ]
    },
    9: {
      vocab: [
        {w:"der Kletterpark, -s", d:"Ein Ort, an dem man gesichert zwischen Bäumen klettert.", ex:"Am Samstag gehen wir in den Kletterpark.", ar:"حديقة تسلق"},
        {w:"der Kletterwettbewerb, -e", d:"Ein Wettkampf im Klettern.", ex:"Bea nimmt an einem Kletterwettbewerb teil.", ar:"مسابقة تسلق"},
        {w:"aufgeregt", d:"Nervös und gespannt vor einem wichtigen Ereignis.", ex:"Vor dem Wettkampf bin ich sehr aufgeregt.", ar:"متحمس ومتوتر"},
        {w:"jemandem Mut machen", d:"Einer Person helfen, wieder an sich zu glauben.", ex:"Meine Freunde machen mir vor dem Spiel Mut.", ar:"يشجّع شخصًا"},
        {w:"das Finale, -", d:"Der letzte und entscheidende Teil eines Wettbewerbs.", ex:"Unsere Mannschaft steht im Finale.", ar:"النهائي"},
        {w:"der Zuschauer, -", d:"Eine Person, die ein Spiel oder einen Wettkampf ansieht.", ex:"Die Zuschauer jubeln laut.", ar:"المشاهد"},
        {w:"anfeuern", d:"Sportler laut unterstützen.", ex:"Die Fans feuern ihr Team an.", ar:"يشجّع بحماس"},
        {w:"sich verletzen", d:"Am Körper eine Verletzung bekommen.", ex:"Er hat sich beim Training am Fuß verletzt.", ar:"يُصاب"},
        {w:"sich aufwärmen", d:"Den Körper vor dem Sport mit leichten Übungen vorbereiten.", ex:"Vor dem Laufen wärme ich mich zehn Minuten auf.", ar:"يعمل إحماء"},
        {w:"durchhalten", d:"Trotz Anstrengung bis zum Ende weitermachen.", ex:"Die letzten Kilometer sind schwer, aber ich halte durch.", ar:"يصمد / يكمل للنهاية"},
        {w:"unentschieden", d:"Mit dem gleichen Ergebnis für beide Teams.", ex:"Das Spiel endet zwei zu zwei unentschieden.", ar:"تعادل"},
        {w:"der Teamgeist", d:"Das Gefühl, gemeinsam als Gruppe zu handeln.", ex:"Guter Teamgeist ist wichtiger als ein einzelner Star.", ar:"روح الفريق"}
      ],
      readings: [
        {
          title:"Ein Fußballstar: Stimmen nach dem Spiel",
          kind:"Kommentare auf einer Fanseite",
          text:`<strong>Mike07:</strong> Was für ein spannendes Spiel! Unser Stürmer war noch nicht ganz fit, trotzdem hat er bis zum Ende gekämpft. Er war auf dem Platz, deshalb konnte das Team gewinnen. Danke für deinen Einsatz!<br><br><strong>Bällchen:</strong> Ich war im Stadion und fand das Spiel ziemlich langweilig. Fast alle Spieler haben viele Fehler gemacht. Die Mannschaft hat trotzdem gewonnen, aber für mich war nur das Tor wirklich schön.<br><br><strong>Tor3000:</strong> Ich finde gut, dass unser Spieler freundlich zu seinen Fans bleibt. Obwohl er schon oft gewonnen hat, nimmt er sich nach dem Spiel Zeit für Fotos und kurze Gespräche. Hoffentlich bleibt das so!<br><br><strong>LeoB:</strong> Du spielst mit viel Energie, deshalb bist du für mich ein Vorbild. Bleib bitte lange bei unserem Verein. Die Mannschaft und die Fans brauchen dich.`,
          ar:"تعليقات المشجعين بعد المباراة: ثلاثة مشجعين يمدحون اللاعب بسبب مجهوده وتواضعه واهتمامه بالجمهور، بينما يرى مشجع واحد أن المباراة كانت مملة رغم الفوز.",
          glossary:[["der Stürmer","المهاجم"],["der Einsatz","المجهود / الالتزام"],["langweilig","ممل"],["sich Zeit nehmen","يخصص وقتًا"],["das Vorbild","القدوة"],["der Verein","النادي"]],
          questions:[
            ["Welcher Kommentar ist kritisch?","Der Kommentar von Bällchen."],
            ["Warum konnte die Mannschaft laut Mike07 gewinnen?","Weil der Stürmer trotz seiner fehlenden Fitness mitgespielt und gekämpft hat."],
            ["Was gefällt Tor3000 besonders?","Dass der Spieler freundlich ist und sich Zeit für seine Fans nimmt."],
            ["Warum ist der Spieler für LeoB ein Vorbild?","Weil er mit viel Energie spielt."]
          ]
        },
        {
          title:"Aktiv unterwegs in D-A-CH",
          kind:"Vier Reisetipps für Sportfans",
          text:`<strong>A – Es müssen nicht immer die Alpen sein</strong><br>In der Sächsischen Schweiz im Osten Deutschlands kann man durch Wälder und über Berge wandern oder an Felsen klettern. Mit passender Kleidung ist die Region fast das ganze Jahr interessant. Viele Besucher machen außerdem einen Ausflug nach Dresden, das ungefähr 40 Kilometer entfernt liegt.<br><br><strong>B – Nur Fliegen ist schöner</strong><br>Im Schweizer Gebiet Hoch-Ybrig fährt man mit dem „Sternensauser“ an einem Seil vom Berg ins Tal. Die Strecke ist 2,3 Kilometer lang und dauert nur etwas mehr als zwei Minuten. Im Sommer kann man dort wandern, im Winter Ski fahren. Zürich und Luzern sind nicht weit entfernt.<br><br><strong>C – Wenn der Sommer wieder heiß ist</strong><br>Die Eisriesenwelt bei Werfen im Salzburger Land ist auch im Sommer kalt. Deshalb braucht man feste Schuhe und warme Kleidung. Die Eishöhle ist von Mai bis Oktober geöffnet. Mit einer Seilbahn kommt man näher an den Eingang; für den Besuch sollte man ungefähr eineinhalb Stunden einplanen.<br><br><strong>D – Eine Radtour durch die deutsche Geschichte</strong><br>Das „Grüne Band“ folgt der früheren Grenze zwischen Ost- und Westdeutschland. Heute ist daraus ein langer Naturraum geworden. Man kann einzelne Abschnitte mit dem Fahrrad fahren oder mehrere Tage wandern. Informationstafeln erzählen unterwegs von Natur und deutscher Geschichte.`,
          ar:"أربع أفكار لرحلات رياضية في دول D-A-CH: المشي والتسلق في سويسرا الساكسونية، الانزلاق بالحبل في سويسرا، زيارة كهف جليدي قرب سالزبورغ، وركوب الدراجة على امتداد الحدود الألمانية القديمة المعروفة بالحزام الأخضر.",
          glossary:[["der Felsen","الصخرة"],["entfernt liegen","يبعد مسافة"],["das Seil","الحبل"],["die Eishöhle","الكهف الجليدي"],["einplanen","يخصص وقتًا في الخطة"],["die frühere Grenze","الحدود السابقة"],["der Abschnitt","الجزء / المقطع"],["die Informationstafel","لوحة معلومات"]],
          questions:[
            ["Wo kann man wandern und klettern, ohne in die Alpen zu fahren?","In der Sächsischen Schweiz."],
            ["Welche Aktivitäten bietet Hoch-Ybrig im Sommer und im Winter?","Im Sommer Wandern und Fahrten mit dem Sternensauser, im Winter Skifahren."],
            ["Warum braucht man in der Eisriesenwelt warme Kleidung?","Weil es in der Höhle auch im Sommer sehr kalt ist."],
            ["Was verbindet das Grüne Band?","Naturerlebnisse mit Informationen über die deutsche Geschichte."]
          ]
        }
      ]
    },
    10: {
      vocab: [
        {w:"die Wohngemeinschaft, -en", d:"Mehrere Personen wohnen zusammen in einer Wohnung.", ex:"In unserer Wohngemeinschaft teilen wir Küche und Bad.", ar:"سكن مشترك"},
        {w:"der Mitbewohner, -", d:"Eine Person, die mit anderen in derselben Wohnung lebt.", ex:"Mein neuer Mitbewohner kocht sehr gern.", ar:"زميل السكن"},
        {w:"die WG-Kasse, -n", d:"Gemeinsames Geld für Dinge, die alle in der WG brauchen.", ex:"Putzmittel bezahlen wir aus der WG-Kasse.", ar:"صندوق مصاريف السكن"},
        {w:"der Putzplan, -e", d:"Ein Plan, der zeigt, wer wann sauber macht.", ex:"Der Putzplan hängt an der Küchentür.", ar:"جدول التنظيف"},
        {w:"aufräumen", d:"Dinge an ihren richtigen Platz bringen.", ex:"Bitte räum nach der Party das Wohnzimmer auf.", ar:"يرتّب"},
        {w:"der Müll", d:"Dinge, die man nicht mehr braucht und wegwirft.", ex:"Wer bringt heute den Müll runter?", ar:"القمامة"},
        {w:"Rücksicht nehmen auf", d:"An die Bedürfnisse anderer Menschen denken.", ex:"Nachts nehmen wir Rücksicht auf die Nachbarn.", ar:"يراعي"},
        {w:"die Ruhezeit, -en", d:"Eine Zeit, in der man keinen Lärm machen soll.", ex:"Die Ruhezeit beginnt um 22 Uhr.", ar:"وقت الهدوء"},
        {w:"das WG-Casting, -s", d:"Ein Treffen, bei dem eine WG neue Mitbewohner kennenlernt.", ex:"Beim WG-Casting sprechen wir über Alltag und Regeln.", ar:"مقابلة اختيار زميل سكن"},
        {w:"zuverlässig", d:"So, dass andere sich auf eine Person verlassen können.", ex:"Wir suchen eine freundliche und zuverlässige Mitbewohnerin.", ar:"جدير بالثقة / ملتزم"},
        {w:"die Nebenkosten (Pl.)", d:"Zusätzliche Wohnkosten für Heizung, Wasser und anderes.", ex:"Die Nebenkosten sind schon in der Miete enthalten.", ar:"مصاريف إضافية للسكن"},
        {w:"einziehen", d:"Beginnen, in einer neuen Wohnung zu wohnen.", ex:"Die neue Mitbewohnerin zieht am ersten Oktober ein.", ar:"ينتقل للسكن"}
      ],
      readings: [
        {
          title:"Das WG-Casting",
          kind:"Dialogbericht",
          text:`In der WG von Nils, Amira und Jo wird ein Zimmer frei. Sie schreiben eine Anzeige und laden vier Interessierte zu einem WG-Casting ein. Vor dem ersten Gespräch sammeln sie Fragen: Wie sieht der Tagesablauf der Person aus? Kocht sie gern? Hat sie ein Haustier? Wie wichtig sind ihr Ordnung und Ruhe? Die Bewerberin Sofia erzählt, dass sie als Krankenpflegerin arbeitet und manchmal Nachtdienst hat. Sie ist zuverlässig, raucht nicht und würde gern zweimal pro Woche für alle kochen. Einen festen Putzplan findet sie sinnvoll. Amira fragt, ob Sofia auch am Wochenende Besuch bekommt. Sofia antwortet offen, dass ihre Schwester manchmal übernachtet, aber sie möchte vorher immer Bescheid sagen. Nach dem Gespräch sind sich die drei einig: Sofia passt gut zu ihnen. Sie erklären ihr die WG-Kasse, die Ruhezeiten und die Nebenkosten. Eine Woche später unterschreibt Sofia den Mietvertrag.`,
          ar:"ثلاثة زملاء سكن عملوا مقابلة لاختيار شخص جديد. صوفيا كانت واضحة وملتزمة ووافقت على نظام التنظيف والهدوء، فاختاروها.",
          glossary:[["frei werden","يصبح شاغرًا"],["der Interessierte","الشخص المهتم"],["der Tagesablauf","نظام اليوم"],["der Nachtdienst","نوبة ليلية"],["Bescheid sagen","يبلّغ"],["der Mietvertrag","عقد الإيجار"]],
          questions:[
            ["Warum veranstaltet die WG ein Casting?","Weil ein Zimmer frei wird."],
            ["Welchen Beruf hat Sofia?","Sie ist Krankenpflegerin."],
            ["Was sagt Sofia über Besuch?","Ihre Schwester übernachtet manchmal, aber Sofia sagt vorher Bescheid."],
            ["Welche Regeln erklärt die WG?","WG-Kasse, Ruhezeiten und Nebenkosten."]
          ]
        },
        {
          title:"Eine höfliche Beschwerde",
          kind:"E-Mail",
          text:`Sehr geehrter Herr Klein, seit drei Wochen funktioniert der Aufzug in unserem Haus nicht zuverlässig. Manchmal bleibt er zwischen dem zweiten und dritten Stock stehen. Gestern musste eine ältere Nachbarin fast zwanzig Minuten warten, bis die Tür wieder aufging. Außerdem ist das Licht im Treppenhaus kaputt. Besonders abends ist das gefährlich. Ich habe den Hausmeister bereits zweimal informiert, aber bisher hat sich nichts geändert. Könnten Sie bitte eine Firma beauftragen und uns mitteilen, wann die Reparatur stattfindet? Wir möchten keinen Streit, aber die Situation ist für mehrere Mieter schwierig. Bis zur Reparatur wäre es hilfreich, wenn ein Hinweis an der Aufzugtür hängen würde. Vielen Dank für Ihre Unterstützung. Mit freundlichen Grüßen, Elena Baumann.`,
          ar:"إيلينا كتبت شكوى مؤدبة لصاحب العقار عن الأسانسير والنور. شرحت المشكلة وتأثيرها وطلبت موعد إصلاح وتنبيه للسكان.",
          glossary:[["zuverlässig funktionieren","يعمل بثبات"],["stecken bleiben","يعلق"],["der Hausmeister","مسؤول المبنى"],["jemanden beauftragen","يكلّف شخصًا بمهمة"],["der Hinweis","تنبيه"],["die Unterstützung","المساعدة"]],
          questions:[
            ["Welche zwei Probleme gibt es im Haus?","Der Aufzug funktioniert nicht zuverlässig und das Treppenhauslicht ist kaputt."],
            ["Wer hatte gestern ein Problem mit dem Aufzug?","Eine ältere Nachbarin."],
            ["Wen hat Elena schon informiert?","Den Hausmeister."],
            ["Was soll bis zur Reparatur passieren?","Ein Hinweis soll an der Aufzugtür hängen."]
          ]
        }
      ]
    },
    11: {
      vocab: [
        {w:"das Sprichwort, ⸚er", d:"Ein kurzer, bekannter Satz mit einer allgemeinen Erfahrung.", ex:"„Zeit ist Geld“ ist ein bekanntes Sprichwort.", ar:"مثل / حكمة"},
        {w:"der Zeitdruck", d:"Das Gefühl, nicht genug Zeit zu haben.", ex:"Unter Zeitdruck mache ich mehr Fehler.", ar:"ضغط الوقت"},
        {w:"Zeit verschwenden", d:"Zeit für etwas Unwichtiges oder Nutzloses verbrauchen.", ex:"Ich möchte morgens keine Zeit mit Suchen verschwenden.", ar:"يضيّع الوقت"},
        {w:"sich Zeit nehmen", d:"Genug Zeit für eine Person oder Sache planen.", ex:"Am Sonntag nehme ich mir Zeit für meine Familie.", ar:"يخصص وقتًا"},
        {w:"rechtzeitig", d:"Früh genug, bevor es zu spät ist.", ex:"Wir müssen rechtzeitig mit dem Packen anfangen.", ar:"في الوقت المناسب"},
        {w:"die Lebensphase, -n", d:"Ein Abschnitt im Leben, zum Beispiel Kindheit oder Studium.", ex:"In jeder Lebensphase verändern sich unsere Wünsche.", ar:"مرحلة من الحياة"},
        {w:"die Erinnerung, -en", d:"Etwas aus der Vergangenheit, an das man sich erinnert.", ex:"Dieses Foto ist eine schöne Erinnerung.", ar:"ذكرى"},
        {w:"der Wunsch, ⸚e", d:"Etwas, das man gern haben oder erleben möchte.", ex:"Mein größter Wunsch ist eine lange Reise.", ar:"أمنية"},
        {w:"die Priorität, -en", d:"Etwas, das wichtiger als andere Dinge ist.", ex:"Gesundheit hat für mich die höchste Priorität.", ar:"أولوية"},
        {w:"aufschieben", d:"Etwas später machen, obwohl man es jetzt machen könnte.", ex:"Ich schiebe unangenehme Aufgaben oft auf.", ar:"يؤجل"},
        {w:"erledigen", d:"Eine Aufgabe vollständig machen.", ex:"Am Vormittag erledige ich wichtige Aufgaben.", ar:"ينجز"},
        {w:"der Terminplaner, -", d:"Ein Kalender für Termine und Aufgaben.", ex:"Alle Termine stehen in meinem digitalen Terminplaner.", ar:"منظم المواعيد"}
      ],
      readings: [
        {
          title:"Ein Tag ohne Zeitdruck",
          kind:"Blogbeitrag",
          text:`Früher begann Toms Arbeitstag chaotisch. Er suchte morgens seine Schlüssel, beantwortete beim Frühstück E-Mails und kam häufig zu spät. Den ganzen Tag hatte er das Gefühl, dass die Zeit nicht reicht. Dann änderte er einige Gewohnheiten. Am Abend legt er jetzt Kleidung, Schlüssel und Tasche bereit. Im Terminplaner stehen nicht nur berufliche Aufgaben, sondern auch Pausen. Die wichtigste Aufgabe erledigt er vormittags, bevor er soziale Medien öffnet. Kleinere Aufgaben sammelt er und bearbeitet sie später zusammen. Wenn eine neue Bitte kommt, prüft er zuerst, ob sie wirklich dringend ist. Nach 19 Uhr liest er keine Arbeitsnachrichten mehr. Tom schafft dadurch nicht plötzlich alles. Aber er entscheidet bewusster, wofür er seine Zeit verwendet. Er sagt: Wer jede Minute füllt, hat nicht automatisch mehr Zeit. Manchmal braucht man eine freie Stunde, um wieder gute Ideen zu haben.`,
          ar:"توم كان يومه فوضوي وتحت ضغط. جهز حاجاته بالليل، نظم الأولويات والمواعيد، جمع المهام الصغيرة وحدد وقتًا يتوقف بعده عن رسائل العمل.",
          glossary:[["chaotisch","فوضوي"],["bereitlegen","يجهز ويضع"],["beruflich","خاص بالعمل"],["dringend","عاجل"],["bewusst","بوعي"],["verwenden","يستخدم"]],
          questions:[
            ["Warum kam Tom morgens oft zu spät?","Weil er Dinge suchte und schon beim Frühstück E-Mails beantwortete."],
            ["Wann erledigt er die wichtigste Aufgabe?","Am Vormittag, bevor er soziale Medien öffnet."],
            ["Was macht er nach 19 Uhr nicht mehr?","Er liest keine Arbeitsnachrichten mehr."],
            ["Was hat Tom vor allem gelernt?","Bewusster zu entscheiden, wofür er seine Zeit verwendet."]
          ]
        },
        {
          title:"Wünsche verändern sich",
          kind:"Interview",
          text:`Eine Stadtzeitschrift hat drei Generationen nach ihren Wünschen gefragt. Die siebzehnjährige Mila möchte nach der Schule ein Jahr im Ausland verbringen. Sie würde gern neue Menschen kennenlernen und selbstständiger werden. Ihr Vater Daniel ist vierundvierzig. Früher wollte er beruflich möglichst schnell erfolgreich sein. Heute wünscht er sich vor allem mehr Zeit mit seiner Familie und weniger Termine am Wochenende. Milas Großmutter Ruth ist zweiundsiebzig. Sie sagt, dass materielle Dinge für sie nicht mehr so wichtig sind. Sie wäre gern gesund genug, um weiter im Garten zu arbeiten und ihre Freunde regelmäßig zu treffen. Alle drei haben unterschiedliche Pläne, aber eine Antwort ist gleich: Gute Beziehungen sind wichtiger als ein voller Kalender. Die Reporterin stellt am Ende fest, dass Wünsche von der Lebensphase abhängen. Manche Träume verschwinden, andere werden konkreter, und manchmal entdeckt man ganz neue.`,
          ar:"مقابلة مع ثلاث أجيال: ميلا تريد السفر، أبوها يريد وقتًا أكثر للعائلة، وجدتها تهتم بالصحة والأصدقاء. الأمنيات تتغير حسب مرحلة الحياة.",
          glossary:[["die Generation","الجيل"],["selbstständig","مستقل"],["beruflich erfolgreich","ناجح مهنيًا"],["materiell","مادي"],["abhängen von","يعتمد على"],["konkret","محدد وواضح"]],
          questions:[
            ["Was möchte Mila nach der Schule machen?","Ein Jahr im Ausland verbringen."],
            ["Wie haben sich Daniels Wünsche verändert?","Früher wollte er schnellen beruflichen Erfolg, heute mehr Familienzeit."],
            ["Was ist Ruth besonders wichtig?","Gesundheit, Gartenarbeit und regelmäßige Treffen mit Freunden."],
            ["Welche Antwort geben alle drei ähnlich?","Gute Beziehungen sind wichtiger als ein voller Kalender."]
          ]
        }
      ]
    },
    12: {
      vocab: [
        {w:"die Leinwand, ⸚e", d:"Eine Fläche, auf die man malt oder ein Bild projiziert.", ex:"Das große Bild hängt auf einer Leinwand.", ar:"لوحة رسم قماشية / شاشة عرض"},
        {w:"der Vordergrund", d:"Der vordere Teil eines Bildes.", ex:"Im Vordergrund sitzt eine Frau am Tisch.", ar:"مقدمة الصورة"},
        {w:"der Hintergrund", d:"Der hintere Teil eines Bildes.", ex:"Im Hintergrund sieht man das Meer.", ar:"خلفية الصورة"},
        {w:"der Bildrand, ⸚er", d:"Der äußere Bereich eines Bildes.", ex:"Am linken Bildrand steht ein kleines Boot.", ar:"حافة الصورة"},
        {w:"wirken", d:"Einen bestimmten Eindruck machen.", ex:"Die dunklen Farben wirken traurig.", ar:"يبدو / يعطي انطباعًا"},
        {w:"der Auftritt, -e", d:"Eine Vorstellung vor Publikum.", ex:"Der Auftritt der Band beginnt um neun Uhr.", ar:"عرض فني"},
        {w:"live", d:"Direkt vor Publikum und nicht als Aufnahme.", ex:"Die Sängerin klingt live besonders gut.", ar:"مباشر"},
        {w:"der Refrain, -s", d:"Der Teil eines Liedes, der mehrmals wiederholt wird.", ex:"Beim Refrain singt das Publikum mit.", ar:"لازمة الأغنية"},
        {w:"die Stimmung, -en", d:"Die Atmosphäre und Gefühle an einem Ort.", ex:"Auf dem Festival war die Stimmung fantastisch.", ar:"الأجواء / الحالة"},
        {w:"die Eintrittskarte, -n", d:"Ein Ticket für ein Konzert, Museum oder Theater.", ex:"Ich habe die Eintrittskarten online gekauft.", ar:"تذكرة دخول"},
        {w:"ausverkauft", d:"So, dass es keine Karten mehr gibt.", ex:"Das Konzert ist seit Wochen ausverkauft.", ar:"نفدت تذاكره"},
        {w:"darstellen", d:"Etwas in einem Bild, Text oder Theaterstück zeigen.", ex:"Das Gemälde stellt einen ruhigen Sommerabend dar.", ar:"يجسّد / يصوّر"},
        {w:"die Zugabe, -n", d:"Ein zusätzliches Lied am Ende eines Konzerts.", ex:"Nach langem Applaus spielt die Band noch eine Zugabe.", ar:"أغنية إضافية بعد نهاية الحفل"}
      ],
      readings: [
        {
          title:"Ein Konzert im alten Bahnhof",
          kind:"Kulturbericht",
          text:`Am Freitagabend spielt die Band „Nordlicht“ in einem alten Bahnhof, der heute als Kulturzentrum genutzt wird. Alle Eintrittskarten sind ausverkauft. Schon vor dem Eingang warten viele Fans, obwohl es kalt ist. Im Saal gibt es keine festen Sitzplätze. Die Bühne steht dort, wo früher die Züge abgefahren sind. Als die Musiker erscheinen, wird es sofort still. Das erste Lied beginnt nur mit einer Gitarre und einer leisen Stimme. Später wird die Musik schneller, und beim bekannten Refrain singt das ganze Publikum mit. Die Sängerin erzählt zwischen den Liedern, wie die Band ihre Texte schreibt. Viele handeln von Freundschaft, Veränderungen und dem Leben in der Stadt. Nach neunzig Minuten endet der Auftritt, aber die Fans klatschen weiter. Die Band kommt zurück und spielt zwei zusätzliche Lieder. Für Mara war besonders die ungewöhnliche Atmosphäre im Bahnhof unvergesslich.`,
          ar:"فرقة قدمت حفلة في محطة قطار قديمة تحولت لمركز ثقافي. الجمهور غنى اللازمة، والفرقة رجعت وقدمت أغنيتين إضافيتين.",
          glossary:[["das Kulturzentrum","مركز ثقافي"],["der Saal","القاعة"],["erscheinen","يظهر"],["handeln von","يتناول موضوع"],["zusätzlich","إضافي"],["unvergesslich","لا يُنسى"]],
          questions:[
            ["Wo findet das Konzert statt?","In einem alten Bahnhof, der heute ein Kulturzentrum ist."],
            ["Was macht das Publikum beim bekannten Refrain?","Es singt mit."],
            ["Wovon handeln viele Lieder?","Von Freundschaft, Veränderungen und dem Stadtleben."],
            ["Warum ist der Abend für Mara besonders?","Wegen der ungewöhnlichen Atmosphäre im Bahnhof."]
          ]
        },
        {
          title:"Ein Bild genau beschreiben",
          kind:"Bildbeschreibung",
          text:`Das Gemälde zeigt einen Strand am frühen Morgen. Im Vordergrund liegt ein rotes Fahrrad im Sand. Daneben stehen ein Korb und ein Paar Schuhe. In der Mitte des Bildes läuft eine Person langsam am Wasser entlang. Man sieht ihr Gesicht nicht, weil sie dem Meer zugewandt ist. Am rechten Bildrand liegt ein kleines Boot. Im Hintergrund sind zwei Inseln und mehrere helle Wolken zu erkennen. Die Farben Blau, Grau und Hellgelb bestimmen das Bild. Dadurch wirkt die Szene ruhig, aber auch ein wenig einsam. Vielleicht gehört das Fahrrad der Person am Wasser. Möglicherweise ist sie sehr früh aufgestanden, um den Strand ohne Touristen zu erleben. Der Maler stellt keine schnelle Handlung dar. Trotzdem erzählt das Bild eine Geschichte: Jemand hat den Alltag kurz verlassen und genießt einen stillen Moment.`,
          ar:"وصف لوحة لشاطئ صباحًا: عجلة حمراء في المقدمة، شخص عند المياه، مركب على اليمين وجزر في الخلف. الألوان تجعل الجو هادئًا وقليلًا من الوحدة.",
          glossary:[["dem Meer zugewandt","مواجه للبحر"],["zu erkennen sein","يمكن تمييزه"],["bestimmen","يسيطر / يحدد"],["einsam","وحيد"],["möglicherweise","ربما"],["die Handlung","الحدث"]],
          questions:[
            ["Was liegt im Vordergrund?","Ein rotes Fahrrad, ein Korb und ein Paar Schuhe."],
            ["Warum sieht man das Gesicht der Person nicht?","Weil sie dem Meer zugewandt ist."],
            ["Wie wirkt die Szene?","Ruhig und ein wenig einsam."],
            ["Welche mögliche Geschichte erzählt das Bild?","Jemand verlässt kurz den Alltag und genießt einen stillen Moment."]
          ]
        }
      ]
    }
  };

  const allChapters = [...window.BOOK1, ...window.BOOK2];
  allChapters.forEach(chapter => {
    const extra = EXTRA[chapter.num];
    if (!extra) return;
    const knownWords = new Set(chapter.vocab.map(item => item.w.toLowerCase()));
    chapter.vocab.push(...extra.vocab.filter(item => !knownWords.has(item.w.toLowerCase())));
    chapter.readings = extra.readings;
  });
})();
