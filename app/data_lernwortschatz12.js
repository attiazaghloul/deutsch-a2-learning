/* Lernwortschatz 12 adapted from Netzwerk neu A2.2, unit 12. */
(function () {
  const E = (w, ar, d, ex) => ({w, ar, d, ex});
  const SECTIONS = [
    ["Gute Unterhaltung", [
      E("die Unterhaltung (Sg.)", "الترفيه / التسلية", "etwas, das Menschen angenehm beschäftigt oder amüsiert", "Wir wünschen Ihnen gute Unterhaltung!"),
      E("die Gesellschaft, -en", "المجتمع / الجماعة", "Menschen, die zusammenleben, oder eine Gruppe, in der man nicht allein ist", "Der Roman erzählt von der modernen Gesellschaft."),
      E("das Werk, -e", "العمل الفني / المؤلَّف", "ein künstlerisches, literarisches oder musikalisches Ergebnis", "Dieses Werk gehört zu den bekanntesten Bildern des Malers."),
      E("das Schloss, ⸚er", "القصر", "ein großes repräsentatives Gebäude, in dem früher Herrscher lebten", "Das Schloss kann täglich besichtigt werden."),
      E("der König, -e", "الملك", "ein männliches Staatsoberhaupt in einer Monarchie", "Der König lebte mit seiner Familie im Schloss."),
      E("die Königin, -nen", "الملكة", "ein weibliches Staatsoberhaupt oder die Frau eines Königs", "Die Königin eröffnete das Museum."),
      E("die Führung, -en", "الجولة الإرشادية", "ein Rundgang, bei dem eine Person einen Ort erklärt", "Wir haben im Museum an einer Führung teilgenommen."),
      E("der Roman, -e", "الرواية", "eine längere erfundene Erzählung in Buchform", "Der neue Roman spielt in Hamburg."),
      E("der Bestseller, -", "كتاب أو منتج واسع المبيعات", "ein Buch oder Produkt, das besonders oft verkauft wird", "Der Krimi wurde schnell zum Bestseller."),
      E("jährlich", "سنويًا", "jedes Jahr einmal oder regelmäßig im Jahr", "Das Festival findet jährlich im Juli statt."),
      E("die Verfilmung, -en", "النسخة السينمائية", "ein Film, der nach einem Buch oder einer Geschichte entstanden ist", "Die Verfilmung des Romans war sehr erfolgreich."),
      E("meist", "غالبًا", "in den meisten Fällen", "Am Wochenende bleiben wir meist zu Hause.")
    ]],
    ["Festival und Musik", [
      E("das Festival, -s", "المهرجان", "eine größere Veranstaltung mit Musik, Film oder Kultur", "Auf dem Festival treten viele Bands auf."),
      E("live", "مباشر", "direkt vor Publikum und nicht als Aufnahme", "Die Sängerin klingt live besonders gut."),
      E("der Hit, -s", "أغنية ناجحة", "ein Lied, das sehr bekannt und erfolgreich ist", "Dieser Song war im Sommer ein großer Hit."),
      E("der Musikstil, -e", "النمط الموسيقي", "eine typische Art, Musik zu machen", "Jazz ist ihr liebster Musikstil."),
      E("Pop", "موسيقى البوب", "ein moderner und oft leicht zugänglicher Musikstil", "Im Radio läuft viel Pop."),
      E("Rap", "موسيقى الراب", "Musik, bei der Texte rhythmisch gesprochen werden", "Seine Rap-Texte erzählen vom Stadtleben."),
      E("Rock", "موسيقى الروك", "ein Musikstil mit elektrischen Gitarren und kräftigem Rhythmus", "Mein Bruder hört gern Rock."),
      E("rockig", "بطابع روك", "mit einem kräftigen Klang, der typisch für Rockmusik ist", "Das neue Lied klingt überraschend rockig."),
      E("Elektro", "موسيقى إلكترونية", "Musik, die überwiegend mit elektronischen Geräten produziert wird", "Beim Festival gibt es auch eine Bühne für Elektro."),
      E("melodisch", "لحني", "mit einer angenehmen und gut erkennbaren Melodie", "Der Refrain ist ruhig und melodisch."),
      E("die Stimmung, -en", "الأجواء / المزاج", "die Atmosphäre und die Gefühle an einem Ort", "Auf dem Konzert war die Stimmung fantastisch."),
      E("der Campingplatz, ⸚e", "موقع التخييم", "ein Gelände, auf dem man im Zelt oder Wohnwagen übernachten kann", "Der Campingplatz liegt direkt neben dem Festival."),
      E("die Übernachtung, -en", "المبيت", "das Schlafen für eine Nacht an einem anderen Ort", "Die Übernachtung im Zelt kostet zwanzig Euro."),
      E("die Verpflegung, -en", "الطعام والإعاشة", "Essen und Getränke, die für Personen bereitgestellt werden", "Im Preis ist die Verpflegung schon enthalten."),
      E("der Rucksack, ⸚e", "حقيبة ظهر", "eine Tasche, die man auf dem Rücken trägt", "Im Rucksack sind Wasser und eine Regenjacke.")
    ]],
    ["Ein Ticket online kaufen", [
      E("der Kauf, ⸚e", "عملية الشراء", "der Vorgang, bei dem man etwas gegen Geld bekommt", "Nach dem Kauf erhalten Sie eine Bestätigung."),
      E("der Stehplatz, ⸚e", "مكان للوقوف", "ein Platz bei einer Veranstaltung ohne Sitzmöglichkeit", "Die Stehplätze sind nah an der Bühne."),
      E("der Sitzplatz, ⸚e", "مقعد", "ein reservierter oder freier Platz zum Sitzen", "Unser Sitzplatz ist in der dritten Reihe."),
      E("die Reihe, -n", "الصف", "mehrere Plätze oder Dinge, die nebeneinander angeordnet sind", "Wir sitzen in der ersten Reihe."),
      E("der Warenkorb, ⸚e", "سلة التسوق", "ein digitaler Bereich, in dem ausgewählte Produkte vor dem Kauf liegen", "Zwei Tickets liegen im Warenkorb."),
      E("netto", "صافي قبل الضريبة", "ein Preis ohne Steuern oder andere Zuschläge", "Der Nettopreis beträgt sechzig Euro."),
      E("die Mehrwertsteuer (Sg.)", "ضريبة القيمة المضافة", "eine Steuer, die beim Kauf von Waren und Leistungen gezahlt wird", "Die Mehrwertsteuer ist im Endpreis enthalten."),
      E("zuzüglich", "بالإضافة إلى", "so, dass ein weiterer Betrag hinzukommt", "Der Preis gilt zuzüglich Versandkosten."),
      E("inklusive", "شامل", "so, dass etwas bereits im Preis oder Angebot enthalten ist", "Das Ticket kostet siebzig Euro inklusive Gebühren."),
      E("die Vorwahl, -en", "مفتاح الاتصال", "die Ziffern vor einer Telefonnummer für ein Land oder eine Region", "Für Deutschland lautet die Ländervorwahl plus neunundvierzig."),
      E("die Mobilnummer, -n", "رقم الهاتف المحمول", "die Telefonnummer eines Mobiltelefons", "Bitte geben Sie Ihre Mobilnummer an."),
      E("der Versand (Sg.)", "الشحن", "das Schicken einer Ware oder eines Tickets", "Der Versand erfolgt per Post."),
      E("die Versandkosten (Pl.)", "تكاليف الشحن", "der Preis für das Schicken einer Ware", "Beim Online-Ticket entstehen keine Versandkosten."),
      E("die Gebühr, -en", "الرسوم", "ein Geldbetrag für eine bestimmte Dienstleistung", "Für die Zahlung fällt eine kleine Gebühr an."),
      E("die Zahlungsart, -en", "طريقة الدفع", "die Methode, mit der eine Rechnung bezahlt wird", "Wählen Sie bitte eine Zahlungsart aus."),
      E("die Überweisung, -en", "التحويل البنكي", "das Senden von Geld von einem Bankkonto auf ein anderes", "Ich bezahle die Karten per Überweisung.")
    ]],
    ["Meldungen", [
      E("die Meldung, -en", "الخبر / البلاغ", "eine kurze Nachricht über ein Ereignis", "Die Meldung kam am frühen Morgen."),
      E("der Prominente, -n / die Prominente, -n", "شخص مشهور", "eine in der Öffentlichkeit bekannte Person", "Viele Prominente kamen zur Eröffnung."),
      E("der Nachrichtensprecher, -", "مذيع الأخبار", "ein Mann, der Nachrichten im Radio oder Fernsehen vorliest", "Der Nachrichtensprecher berichtet über das Festival."),
      E("die Nachrichtensprecherin, -nen", "مذيعة الأخبار", "eine Frau, die Nachrichten im Radio oder Fernsehen vorliest", "Die Nachrichtensprecherin kündigt das Wetter an."),
      E("der Hörer, -", "المستمع", "ein Mann, der eine Radiosendung oder einen Vortrag hört", "Ein Hörer ruft im Studio an."),
      E("die Hörerin, -nen", "المستمعة", "eine Frau, die eine Radiosendung oder einen Vortrag hört", "Die Hörerin gewinnt zwei Konzertkarten."),
      E("die Sendung, -en", "البرنامج الإذاعي أو التلفزيوني", "ein Programm, das im Radio oder Fernsehen ausgestrahlt wird", "Die Sendung beginnt um acht Uhr."),
      E("der Einsatz, ⸚e", "المهمة / التدخل", "eine organisierte Tätigkeit von Polizei, Feuerwehr oder Helfern", "Der Einsatz der Feuerwehr dauerte zwei Stunden."),
      E("die Stimme, -n", "الصوت", "der Klang, den ein Mensch beim Sprechen oder Singen erzeugt", "Die Sängerin hat eine kräftige Stimme."),
      E("die Stille (Sg.)", "الصمت", "ein Zustand ohne Geräusche", "Nach der Meldung herrschte plötzlich Stille."),
      E("verschlafen, er verschläft, hat verschlafen", "يتأخر في النوم", "zu lange schlafen und deshalb zu spät aufwachen", "Der Radiosprecher hat heute Morgen verschlafen."),
      E("der Sammler, -", "الجامع / هاوي الجمع", "ein Mann, der bestimmte Dinge systematisch sammelt", "Der Sammler besitzt viele alte Schallplatten."),
      E("die Sammlerin, -nen", "الجامعة / هاوية الجمع", "eine Frau, die bestimmte Dinge systematisch sammelt", "Die Sammlerin sucht seltene Filmplakate."),
      E("das Schnäppchen, -", "الصفقة الرخيصة", "ein besonders günstiger Kauf", "Nur fünf Euro? Das ist ein Schnäppchen!"),
      E("der Wert, -e", "القيمة", "die finanzielle oder persönliche Bedeutung einer Sache", "Der Wert des Bildes ist stark gestiegen."),
      E("wertvoll", "قيّم / ثمين", "von hohem finanziellen oder persönlichen Wert", "Die alte Uhr ist sehr wertvoll."),
      E("befreundet mit (+ D.)", "صديق لـ", "mit einer Person in einer freundschaftlichen Beziehung stehen", "Er ist mit einer Kunstexpertin befreundet."),
      E("bestätigen", "يؤكد", "sagen oder zeigen, dass etwas richtig oder angekommen ist", "Das Museum bestätigt den Termin per E-Mail."),
      E("das Quiz, -ze", "مسابقة أسئلة", "ein Spiel oder Wettbewerb mit Fragen und Antworten", "Im Radio gibt es heute ein Musikquiz.")
    ]],
    ["Malerei", [
      E("die Malerei (Sg.)", "فن الرسم", "die Kunst, Bilder mit Farben zu schaffen", "Sie interessiert sich für moderne Malerei."),
      E("der Titel, -", "العنوان", "der Name eines Bildes, Buches, Films oder Werkes", "Das Bild trägt den Titel ‚Abend‘."),
      E("die Bedeutung, -en", "المعنى / الدلالة", "das, was ein Wort, Zeichen oder Werk ausdrückt", "Die Farbe Rot hat im Bild eine besondere Bedeutung."),
      E("der Ausblick, -e", "الإطلالة", "das, was man von einem Ort aus in der Ferne sehen kann", "Von hier hat man einen tollen Ausblick auf das Meer."),
      E("das Blatt, ⸚er", "الورقة", "ein flaches Stück Papier zum Schreiben oder Malen", "Die Skizze ist auf einem weißen Blatt."),
      E("hübsch", "جميل / لطيف", "angenehm und schön anzusehen", "Die kleinen Häuser sehen hübsch aus."),
      E("verrückt", "غريب / مجنون", "sehr ungewöhnlich oder nicht vernünftig", "Ich finde die Farben auf dem Bild ein bisschen verrückt."),
      E("uninteressant", "غير ممتع", "so, dass etwas keine Aufmerksamkeit oder Neugier weckt", "Die graue Fläche wirkt auf mich uninteressant."),
      E("abstrakt", "تجريدي", "nicht gegenständlich und nicht wie die sichtbare Wirklichkeit", "Das Museum zeigt abstrakte Kunst."),
      E("der Vordergrund, ⸚e", "مقدمة الصورة", "der vordere Bereich eines Bildes", "Im Vordergrund liegt ein rotes Boot."),
      E("davor", "أمامه", "vor einer zuvor genannten Sache oder Person", "Hinter dem Haus steht ein Baum, davor sitzt eine Frau."),
      E("der Hintergrund, ⸚e", "خلفية الصورة", "der hintere Bereich eines Bildes", "Im Hintergrund sieht man Berge."),
      E("dahinter", "خلفه", "hinter einer zuvor genannten Sache oder Person", "Vorn steht ein Tisch, dahinter hängt ein Bild."),
      E("die Stelle, -n", "المكان / الموضع", "ein bestimmter Punkt oder Bereich", "Das Bild zeigt die Stelle, wo heute der Supermarkt ist."),
      E("hell", "فاتح / مضيء", "mit viel Licht oder einer leichten Farbe", "Die Bilder sind hellgrün."),
      E("dunkel", "داكن / مظلم", "mit wenig Licht oder einer kräftigen dunklen Farbe", "Der Himmel wirkt dunkel."),
      E("dunkelblau", "أزرق داكن", "von einer tiefen blauen Farbe", "Das Meer ist dunkelblau gemalt."),
      E("abmalen", "ينسخ بالرسم", "ein vorhandenes Bild oder Motiv möglichst ähnlich malen", "Die Schülerinnen malen die Vase ab.")
    ]],
    ["Andere wichtige Wörter und Wendungen", [
      E("die Kriminalität (Sg.)", "الجريمة", "die Gesamtheit strafbarer Handlungen in einem Gebiet", "Die Kriminalität ist in der Stadt zurückgegangen."),
      E("die Gewalt (Sg.)", "العنف", "körperliche oder psychische Kraft, die andere verletzt oder bedroht", "Der Film zeigt die Folgen von Gewalt."),
      E("wild", "صاخب / جامح", "ungeordnet, heftig oder nicht kontrolliert", "Das war eine wilde Zeit."),
      E("gut gelaunt sein", "يكون في مزاج جيد", "fröhlich und zufrieden sein", "Nach dem Konzert sind alle gut gelaunt."),
      E("schlecht gelaunt sein", "يكون في مزاج سيئ", "ärgerlich, traurig oder unzufrieden sein", "Heute ist er schlecht gelaunt."),
      E("-jährig", "ذو عمر … سنة", "ein Wortteil zur Angabe eines Alters oder einer Dauer", "Er hat eine zweijährige Tochter."),
      E("knapp", "قليل / بالكاد", "nur wenig oder gerade noch ausreichend", "Die Zeit bis zum Konzert ist knapp."),
      E("unendlich", "لا نهائي", "ohne Ende oder Grenze", "Die Landschaft wirkt unendlich weit."),
      E("abschließend", "ختامًا", "am Ende eines Textes, Gesprächs oder Vorgangs", "Abschließend möchte ich mich bedanken."),
      E("insbesondere", "خصوصًا", "vor allem oder ganz besonders", "Die Ausstellung gefällt insbesondere jungen Besuchern."),
      E("auffallen, er fällt auf, ist aufgefallen", "يلفت الانتباه", "durch eine Besonderheit bemerkt werden", "Was fällt dir an dem Bild auf?"),
      E("erhalten, er erhält, hat erhalten", "يتلقى / يحصل على", "etwas bekommen", "Sie hat zwei Eintrittskarten erhalten."),
      E("die Hauptrolle, -n", "الدور الرئيسي", "die wichtigste Rolle in einem Film oder Theaterstück", "Sie spielt die Hauptrolle in meinem Lieblingsfilm."),
      E("der Wanderer, -", "المتنزه / الرحّالة", "ein Mann, der längere Strecken zu Fuß durch die Natur geht", "Der Wanderer steht auf einem Bergweg."),
      E("die Wanderin, -nen", "المتنزهة / الرحّالة", "eine Frau, die längere Strecken zu Fuß durch die Natur geht", "Die Wanderin trägt einen roten Rucksack."),
      E("die Realität (Sg.)", "الواقع", "die wirkliche Welt im Gegensatz zu Fantasie oder Darstellung", "Das Bild sieht anders aus als die Realität."),
      E("die Rückfrage, -n", "سؤال استيضاحي", "eine zusätzliche Frage, wenn etwas nicht klar ist", "Bei Unklarheiten stellt sie eine Rückfrage."),
      E("unter anderem", "من ضمن أشياء أخرى", "neben weiteren nicht genannten Dingen oder Personen", "Im Museum sieht man unter anderem alte Autos."),
      E("wie immer", "كالعادة", "genauso wie sonst oder bei früheren Gelegenheiten", "Der Moderator ist wie immer gut vorbereitet.")
    ]]
  ];

  const WORDS = SECTIONS.flatMap(([cat, words]) => words.map(item => ({...item, cat})));
  const chapter = (window.BOOK2 || []).find(item => item.num === 12);
  if (!chapter) return;

  const key = value => String(value || "")
    .toLocaleLowerCase("de")
    .split(",")[0]
    .replace(/\s*\(.*?\)\s*/g, " ")
    .replace(/[.…]/g, "")
    .replace(/\s+/g, " ")
    .trim();
  const known = new Set(chapter.vocab.map(item => key(item.w)));
  const additions = [];

  for (const item of WORDS) {
    if (known.has(key(item.w))) continue;
    known.add(key(item.w));
    additions.push({
      ...item,
      img: `assets/vocab-scenes/k12-added/${String(additions.length + 1).padStart(2, "0")}.webp`
    });
  }

  chapter.vocab.push(...additions);
  chapter.readings = [
    {
      title: "Drei besondere Bauwerke",
      kind: "Kurze Informationstexte",
      text: `<strong>Amphitheater Trier</strong><br>Die große historische Arena in Trier entstand ungefähr im Jahr 180. In der Römerzeit fanden dort Veranstaltungen mit vielen Tausend Zuschauern statt. Heute wird das Amphitheater wieder für Konzerte und Theater genutzt.<br><br><strong>Berliner Fernsehturm</strong><br>Das höchste Gebäude Deutschlands wurde Ende der 1960er-Jahre eröffnet. Mehr als eine Million Menschen besuchen den Turm jedes Jahr. Oben kann man essen und einen weiten Ausblick über Berlin genießen.<br><br><strong>Karl-Marx-Hof in Wien</strong><br>Dieser außergewöhnlich lange Wohnkomplex wurde zwischen 1927 und 1930 gebaut. Er bietet rund 1.400 Wohnungen sowie Geschäfte, Kindergärten und weitere Einrichtungen für die Bewohner.`,
      ar: "ثلاثة مبانٍ مميزة: مدرج روماني قديم في ترير يُستخدم اليوم للحفلات، برج تلفزيون برلين الذي يوفر إطلالة واسعة، ومجمع Karl-Marx-Hof السكني الطويل في فيينا بما يضمه من مساكن وخدمات.",
      glossary: [["das Bauwerk","المبنى"],["entstehen","ينشأ"],["die Römerzeit","العصر الروماني"],["der Zuschauer","المشاهد"],["der Ausblick","الإطلالة"],["der Wohnkomplex","المجمع السكني"]],
      questions: [
        ["Wann entstand das Amphitheater in Trier?","Ungefähr im Jahr 180."],
        ["Wofür wird die Arena heute genutzt?","Für Konzerte und Theater."],
        ["Was kann man oben im Berliner Fernsehturm machen?","Essen und den Ausblick genießen."],
        ["Welche Angebote gibt es im Karl-Marx-Hof?","Wohnungen, Geschäfte, Kindergärten und weitere Einrichtungen."]
      ]
    },
    {
      title: "Kunst mal anders",
      kind: "Zwei Nachrichten aus Museen",
      text: `<strong>Nachricht aus dem Kunstmuseum</strong><br>Hallo Jana, ich komme gerade aus der Ausstellung „Meister der Natur“. Die Bilder sind wunderschön und sehr unterschiedlich: Es gibt Fotografien, Gemälde und kurze Videos. Besonders spannend fand ich eine Installation, in der sich Licht und Farben ständig verändern. Die Ausstellung ist modern, aber trotzdem leicht zu verstehen.<br><br><strong>Nachricht aus dem Automuseum</strong><br>Hallo Martin, heute war ich in einem Automuseum – einmal etwas ganz anderes. Dort stehen viele alte Fahrzeuge, und man erfährt viel über Technik und Design. Bei einigen Modellen darf man sogar die Türen öffnen und sich hineinsetzen. Dadurch wirkt die Geschichte der Autos plötzlich sehr lebendig.`,
      ar: "رسالتان عن زيارتين مختلفتين: الأولى لمعرض فني يجمع الصور واللوحات والفيديو وتركيبًا تتغير فيه الإضاءة، والثانية لمتحف سيارات قديمة يسمح للزائر بالتعرف على التقنية والتصميم وتجربة بعض السيارات.",
      glossary: [["die Ausstellung","المعرض"],["unterschiedlich","مختلف"],["die Installation","عمل فني تركيبي"],["sich verändern","يتغير"],["das Fahrzeug","المركبة"],["lebendig","نابض بالحياة"]],
      questions: [
        ["Welche Kunstformen sieht man in der ersten Ausstellung?","Fotografien, Gemälde, Videos und eine Installation."],
        ["Was verändert sich in der Installation?","Das Licht und die Farben."],
        ["Worüber informiert das Automuseum?","Über Technik und Design alter Fahrzeuge."],
        ["Was dürfen Besucher bei einigen Autos machen?","Die Türen öffnen und sich hineinsetzen."]
      ]
    }
  ];

  window.K12_LERNWORTSCHATZ_STATS = {
    official: WORDS.length,
    added: additions.length,
    skippedAsDuplicate: WORDS.length - additions.length,
    withoutImage: additions.filter(item => !item.img).length,
    total: chapter.vocab.length
  };
})();
