/* Lernwortschatz 10 adapted from Netzwerk neu A2.2, unit 10. */
(function () {
  const E = (w, ar, d, ex) => ({w, ar, d, ex});
  const SECTIONS = [
    ["Wohnformen und Maße", [
      E("der Bauernhof, ⸚e", "مزرعة / بيت ريفي", "ein landwirtschaftlicher Betrieb mit Haus, Stall und Feldern", "Auf dem Bauernhof leben Kühe und Schafe."),
      E("die Breite, -n", "العرض", "die Entfernung von einer Seite bis zur anderen", "Die Breite des Zimmers beträgt vier Meter."),
      E("eben", "مستوٍ / مسطّح", "ohne Steigung, Gefälle oder Unebenheiten", "Der Weg am Ufer ist ganz eben."),
      E("einfach", "بسيط", "nicht kompliziert oder luxuriös", "Die Ferienwohnung ist klein und einfach."),
      E("die Ferienwohnung, -en", "شقة عطلات", "eine Wohnung, die Gäste für eine begrenzte Urlaubszeit mieten", "Im Sommer mieten wir eine Ferienwohnung an der Nordsee."),
      E("die Fläche, -n", "المساحة", "die Größe eines Bodens oder Gebiets in Quadratmetern", "Die Wohnung hat eine Fläche von 65 Quadratmetern."),
      E("die Hallig, -en", "جزيرة صغيرة غير محمية بالسدود", "eine kleine, flache Insel im nordfriesischen Wattenmeer", "Bei Sturm steht ein Teil der Hallig unter Wasser."),
      E("das Hausboot, -e", "منزل عائم", "ein Boot, das als Wohnung eingerichtet ist", "Sie wohnen das ganze Jahr auf einem Hausboot."),
      E("die Höhe, -n", "الارتفاع", "die Entfernung von unten nach oben", "Die Deckenhöhe beträgt fast drei Meter."),
      E("intensiv", "مكثف / شديد", "sehr stark oder mit großer Wirkung", "Auf der Insel erlebt man die Natur besonders intensiv."),
      E("die Kuh, ⸚e", "بقرة", "ein großes Nutztier, das Milch gibt", "Die Kuh steht auf der Weide."),
      E("die Länge, -n", "الطول", "die Entfernung von einem Ende bis zum anderen", "Die Länge des Hausboots beträgt zwölf Meter."),
      E("der Luxus (Sg.)", "الرفاهية", "teure und besonders angenehme Ausstattung, die nicht notwendig ist", "Das kleine Haus bietet wenig Luxus, aber viel Ruhe."),
      E("mitten in (+ D.)", "في وسط", "genau im Zentrum eines Ortes oder Bereichs", "Das Haus steht mitten in einem großen Garten."),
      E("nass", "مبتل", "mit Wasser bedeckt oder voller Feuchtigkeit", "Nach dem Regen sind die Wege nass."),
      E("der Quadratmeter, -", "متر مربع", "eine Maßeinheit für Flächen", "Das Zimmer ist zwanzig Quadratmeter groß."),
      E("schaukeln", "يتمايل", "sich regelmäßig hin und her bewegen", "Das Hausboot schaukelt leicht auf dem Wasser."),
      E("sich spiegeln in (+ D.)", "ينعكس في", "als Bild auf einer glatten Fläche sichtbar sein", "Die Häuser spiegeln sich im See."),
      E("der Stadtrand, ⸚er", "أطراف المدينة", "der äußere Teil einer Stadt", "Am Stadtrand sind die Mieten günstiger."),
      E("das Ufer, -", "ضفة / شاطئ", "der Rand eines Flusses, Sees oder Meeres", "Wir sitzen am Ufer und sehen den Booten zu."),
      E("die Wagenburg, -en", "تجمع عربات سكنية", "ein Wohnplatz aus mehreren im Kreis stehenden Bauwagen", "In der Wagenburg teilen die Bewohner einen Garten."),
      E("zum Teil", "جزئيًا", "nicht vollständig, sondern nur teilweise", "Die Möbel sind zum Teil selbst gebaut."),
      E("das Dach, ⸚er", "السقف الخارجي", "der obere Abschluss eines Hauses", "Auf dem Dach liegen Solarpaneele.")
    ]],
    ["Nachbarschaft und Alltag", [
      E("einsam", "وحيد / منعزل", "ohne Gesellschaft und mit wenig Kontakt zu anderen", "Auf der kleinen Insel fühlt man sich im Winter manchmal einsam."),
      E("die Verzeihung (Sg.)", "المسامحة / العفو", "das Entschuldigen oder Vergeben eines Fehlers", "Er bittet die Nachbarin um Verzeihung."),
      E("vorkommen, es kommt vor, ist vorgekommen", "يحدث", "geschehen oder passieren", "So ein Missverständnis kann in jedem Haus vorkommen."),
      E("bellen", "ينبح", "das typische laute Geräusch eines Hundes machen", "Der Hund bellt, wenn jemand klingelt."),
      E("das Päckchen, -", "طرد صغير", "eine kleine Sendung, die mit der Post kommt", "Kannst du mein Päckchen annehmen?"),
      E("stinken, er stinkt, hat gestunken", "تنبعث منه رائحة كريهة", "sehr unangenehm riechen", "Der Müll im Treppenhaus stinkt."),
      E("der Aushang, ⸚e", "إعلان معلّق", "eine öffentliche Information auf Papier an einer Wand oder Tür", "Im Treppenhaus hängt ein Aushang für alle Mieter."),
      E("schmutzig", "متسخ", "nicht sauber", "Nach dem Umzug ist der Boden schmutzig."),
      E("die Torte, -n", "تورتة", "ein feiner, oft verzierter Kuchen", "Zum Nachbarschaftsfest bringt sie eine Torte mit."),
      E("der Wein, -e", "النبيذ", "ein alkoholisches Getränk aus Trauben", "Zum Essen trinken die Gäste ein Glas Wein."),
      E("der Blumentopf, ⸚e", "أصيص زرع", "ein Gefäß, in dem eine Pflanze wächst", "Der Blumentopf steht auf der Fensterbank."),
      E("der Boden, ⸚", "الأرضية", "die untere Fläche eines Raumes", "Die Kinder sitzen auf dem Boden."),
      E("das Gartenhaus, ⸚er", "بيت صغير في الحديقة", "ein kleines Gebäude für Geräte oder Freizeit im Garten", "Die Fahrräder stehen neben dem Gartenhaus."),
      E("das Kursfest, -e", "حفلة الكورس", "eine Feier für Teilnehmer eines Kurses", "Beim Kursfest lernen sich alle besser kennen."),
      E("außerhalb von (+ D.)", "خارج", "nicht innerhalb eines Ortes oder Bereichs", "Sie wohnen außerhalb von Hamburg."),
      E("gespannt", "متحمس / مترقب", "neugierig und erwartungsvoll", "Wir sind gespannt auf die neuen Nachbarn."),
      E("immer wenn", "كلما", "jedes Mal, wenn eine Bedingung eintritt", "Immer wenn es laut wird, schließt sie das Fenster.")
    ]],
    ["Einrichten und Umziehen", [
      E("die Kerze, -n", "شمعة", "ein Gegenstand aus Wachs, der Licht gibt", "Auf dem Tisch brennt eine Kerze."),
      E("das Kissen, -", "وسادة", "ein weicher Gegenstand zum Sitzen oder für den Kopf", "Das Kissen liegt auf dem Sofa."),
      E("der Lampion, -s", "فانوس ورقي", "eine dekorative Lampe aus Papier", "Wir hängen bunte Lampions in den Garten."),
      E("das Positionsverb, -en", "فعل يصف وضعًا ثابتًا", "ein Verb, das die feste Lage oder Position beschreibt", "„Stehen“ ist ein Positionsverb."),
      E("das Poster, -", "ملصق", "ein großes Bild aus Papier für die Wand", "Über dem Bett hängt ein Poster."),
      E("der Roller, -", "سكوتر", "ein Fahrzeug mit zwei Rädern und einer Trittfläche", "Der Roller steht vor der Garage."),
      E("das Spielzeug, -e", "لعبة", "ein Gegenstand, mit dem Kinder spielen", "Das Spielzeug liegt in einer Kiste."),
      E("hängen, er hängt, hat gehangen", "يكون معلّقًا", "an einer Stelle befestigt sein und nach unten reichen", "Die Lampe hängt über dem Tisch."),
      E("legen", "يضع أفقيًا", "etwas in eine liegende Position bringen", "Leg bitte das Kissen auf den Stuhl."),
      E("das Richtungsverb, -en", "فعل يدل على حركة واتجاه", "ein Verb, das eine Bewegung zu einem Ziel beschreibt", "„Stellen“ ist ein Richtungsverb."),
      E("die Veränderung, -en", "تغيير", "der Vorgang, bei dem etwas anders wird", "Die neue Farbe ist eine große Veränderung."),
      E("die Dekoration, -en", "زينة / ديكور", "Gegenstände, die einen Raum schöner machen", "Die Dekoration für das Fest ist schon fertig."),
      E("möbliert", "مفروش", "mit Möbeln ausgestattet", "Das Zimmer wird möbliert vermietet."),
      E("sich auskennen mit (+ D.)", "يكون خبيرًا في", "über ein Thema gute Kenntnisse haben", "Sie kennt sich mit Umzügen gut aus."),
      E("kündigen", "يفسخ العقد", "einen Vertrag offiziell beenden", "Wir kündigen die alte Wohnung zum Monatsende."),
      E("sich verirren", "يضل الطريق", "den richtigen Weg verlieren", "Auf dem Weg zur neuen Wohnung haben wir uns verirrt."),
      E("die Zulassung, -en", "تصريح / قبول رسمي", "eine offizielle Erlaubnis oder Genehmigung", "Für den Wohnwagen braucht man eine Zulassung."),
      E("per", "عن طريق", "mithilfe eines bestimmten Kommunikations- oder Transportmittels", "Bitte schicken Sie die Unterlagen per E-Mail."),
      E("einmalig", "لمرة واحدة", "nur ein einziges Mal", "Die Kaution zahlt man einmalig."),
      E("gelten, er gilt, hat gegolten", "يسري / يكون معمولًا به", "gültig sein oder als Regel bestehen", "Diese Hausordnung gilt für alle Bewohner."),
      E("der Zeitraum, ⸚e", "فترة زمنية", "eine bestimmte Zeit zwischen Anfang und Ende", "Der Mietvertrag gilt für einen Zeitraum von zwei Jahren."),
      E("der Satzakzent, -e", "نبرة الجملة", "die besondere Betonung eines Wortes im Satz", "Der Satzakzent liegt auf der neuen Information."),
      E("der Akzent, -e", "لكنة / نبرة", "eine besondere Aussprache oder Betonung", "Man hört einen leichten regionalen Akzent."),
      E("mehrmalig", "متكرر", "mehr als einmal vorkommend", "Bei mehrmaligen Ereignissen benutzt man oft „wenn“."),
      E("die Vergangenheit (Sg.)", "الماضي", "die Zeit, die schon vorbei ist", "„Als“ beschreibt oft ein Ereignis in der Vergangenheit.")
    ]],
    ["Tiere und Kosenamen", [
      E("der Bär, -en", "دب", "ein großes wildes Säugetier mit dichtem Fell", "Im Tierpark lebt ein brauner Bär."),
      E("das Bärchen, -", "دب صغير / اسم تدليل", "die Verkleinerungsform von Bär und ein Kosename", "Sie nennt ihr Kind liebevoll Bärchen."),
      E("der Hase, -n", "أرنب بري", "ein Tier mit langen Ohren, das schnell laufen kann", "Der Hase läuft über das Feld."),
      E("das Häschen, -", "أرنب صغير / اسم تدليل", "die Verkleinerungsform von Hase", "Das kleine Häschen frisst eine Karotte."),
      E("das Kätzchen, -", "قطة صغيرة", "eine junge oder sehr kleine Katze", "Das Kätzchen schläft in einem Korb."),
      E("die Katze, -n", "قطة", "ein beliebtes Haustier, das miaut", "Unsere Katze sitzt gern am Fenster."),
      E("der Kosename, -n", "اسم تدليل", "ein liebevoller Name für eine vertraute Person", "„Mausi“ ist ein häufiger Kosename."),
      E("die Maus, ⸚e", "فأر", "ein kleines Nagetier mit langem Schwanz", "Die Maus versteckt sich hinter dem Schrank."),
      E("das Mäuschen, -", "فأر صغير / اسم تدليل", "die Verkleinerungsform von Maus und ein Kosename", "Komm her, mein Mäuschen!"),
      E("das Mausi, -s", "اسم تدليل: يا حبيبتي", "ein umgangssprachlicher Kosename", "Er nennt seine Freundin manchmal Mausi."),
      E("das Tierchen, -", "حيوان صغير", "ein kleines Tier oder eine liebevolle Bezeichnung für ein Tier", "Das Tierchen braucht viel Wärme."),
      E("die Ratte, -n", "جرذ", "ein Nagetier, das größer als eine Maus ist", "Manche Menschen halten Ratten als Haustiere."),
      E("das Futter (Sg.)", "طعام الحيوانات", "Nahrung für Tiere", "Der Hund bekommt morgens sein Futter."),
      E("die Lebenssituation, -en", "ظروف المعيشة", "die persönlichen Bedingungen, unter denen jemand lebt", "Ein Haustier muss zur Lebenssituation passen."),
      E("modisch", "مواكب للموضة", "dem aktuellen Stil oder der Mode entsprechend", "Der Hund trägt ein modisches Halsband."),
      E("das Schwein, -e", "خنزير", "ein Nutztier mit kurzem Rüssel", "Auf dem Bauernhof leben mehrere Schweine."),
      E("der Tierarzt, ⸚e", "طبيب بيطري", "ein Arzt, der Tiere untersucht und behandelt", "Der Tierarzt untersucht den Hund."),
      E("die Tierärztin, -nen", "طبيبة بيطرية", "eine Ärztin, die Tiere behandelt", "Die Tierärztin gibt der Katze ein Medikament."),
      E("die Vermutung, -en", "افتراض / تخمين", "eine Meinung, die noch nicht sicher bewiesen ist", "Meine Vermutung ist, dass der Hund Heimweh hat."),
      E("der Vogel, ⸚", "طائر", "ein Tier mit Federn und Flügeln", "Ein Vogel sitzt auf dem Dach."),
      E("der Bauer, -n", "مزارع", "ein Mann, der einen landwirtschaftlichen Betrieb führt", "Der Bauer füttert die Schafe."),
      E("die Bäuerin, -nen", "مزارعة", "eine Frau, die einen Bauernhof führt", "Die Bäuerin verkauft frische Eier."),
      E("der Besitzer, -", "مالك", "ein Mann, dem etwas oder ein Tier gehört", "Der Besitzer sucht seinen Hund."),
      E("die Besitzerin, -nen", "مالكة", "eine Frau, der etwas oder ein Tier gehört", "Die Besitzerin bringt die Katze zum Tierarzt."),
      E("besorgt", "قلق", "voller Sorge und Angst, dass etwas passiert ist", "Die Familie ist wegen des verschwundenen Hundes besorgt."),
      E("dünn", "نحيف", "mit wenig Körpergewicht oder geringer Dicke", "Nach der langen Reise war der Hund sehr dünn."),
      E("hergeben, er gibt her, hat hergegeben", "يتخلى عن / يعطي", "etwas, das man besitzt, einer anderen Person geben", "Die Familie möchte ihr Haustier nicht hergeben."),
      E("nämlich", "وذلك لأن / تحديدًا", "leitet eine genauere Erklärung oder Begründung ein", "Pero kannte den Weg, er war nämlich früher dort."),
      E("nie mehr", "لن يحدث أبدًا مرة أخرى", "zu keinem späteren Zeitpunkt wieder", "Wir geben unseren Hund nie mehr weg."),
      E("das Schaf, -e", "خروف", "ein Nutztier mit dichter Wolle", "Die Schafe stehen auf der Weide.")
    ]],
    ["Tiergeschichten und wichtige Wörter", [
      E("die Tiergeschichte, -n", "قصة عن حيوان", "eine Erzählung, in der ein Tier im Mittelpunkt steht", "Die Zeitung berichtet über eine besondere Tiergeschichte."),
      E("das Zuhause (Sg.)", "المنزل / الموطن", "der Ort, an dem man lebt und sich geborgen fühlt", "Der Hund findet nach einer langen Reise sein Zuhause wieder."),
      E("zumindest", "على الأقل", "wenigstens; wenn auch nicht mehr", "Zumindest ist das Tier jetzt wieder sicher."),
      E("zurücklaufen, er läuft zurück, ist zurückgelaufen", "يركض عائدًا", "zu Fuß oder laufend an einen früheren Ort zurückkehren", "Der Hund ist über 300 Kilometer zurückgelaufen."),
      E("die Geschichte, -n", "قصة / حكاية", "eine Erzählung über Ereignisse oder Personen", "Diese Geschichte hat ein glückliches Ende."),
      E("der Stil, -e", "أسلوب", "die typische Art, wie ein Text geschrieben ist", "Text A hat einen persönlichen Stil."),
      E("der Altbau, -ten", "مبنى قديم", "ein älteres Wohngebäude, meist aus der Zeit vor 1949", "Die Wohnung liegt in einem renovierten Altbau."),
      E("blitzschnell", "بسرعة البرق", "außergewöhnlich schnell", "Die Katze läuft blitzschnell zur Tür."),
      E("dick", "سمين / سميك", "mit viel Körpergewicht oder großer Stärke", "Der Hund ist zu dick und braucht mehr Bewegung."),
      E("nebenan", "في المكان المجاور", "direkt in der Nachbarwohnung oder im Nachbarhaus", "Die Tierärztin wohnt gleich nebenan."),
      E("das Stockwerk, -e", "طابق", "eine Etage in einem Gebäude", "Wir wohnen im dritten Stockwerk."),
      E("der Textanfang, ⸚e", "بداية النص", "der erste Teil eines Textes", "Der Textanfang macht die Leser neugierig."),
      E("weglaufen, er läuft weg, ist weggelaufen", "يهرب / يجري بعيدًا", "einen Ort laufend verlassen und nicht zurückkommen", "Der Hund ist durch das offene Tor weggelaufen."),
      E("die Wohnungsnot (Sg.)", "أزمة سكن", "eine Situation, in der es zu wenige bezahlbare Wohnungen gibt", "In vielen Großstädten herrscht Wohnungsnot."),
      E("verbessern", "يحسّن", "etwas besser machen", "Wir möchten das Zusammenleben im Haus verbessern."),
      E("der Verbesserungsvorschlag, ⸚e", "اقتراح للتحسين", "eine konkrete Idee, wie etwas besser werden kann", "Der Mieter macht einen Verbesserungsvorschlag für den Hof.")
    ]]
  ];

  const WORDS = SECTIONS.flatMap(([cat, words]) => words.map(item => ({...item, cat})));
  const chapter = (window.BOOK2 || []).find(item => item.num === 10);
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
      img: `assets/vocab-scenes/k10-added/${String(additions.length + 1).padStart(2, "0")}.webp`
    });
  }

  chapter.vocab.push(...additions);
  window.K10_LERNWORTSCHATZ_STATS = {
    official: WORDS.length,
    added: additions.length,
    skippedAsDuplicate: WORDS.length - additions.length,
    withoutImage: additions.filter(item => !item.img).length,
    total: chapter.vocab.length
  };
})();
