/* Official Lernwortschatz 9 from Netzwerk neu A2.2, pp. 112-113. */
(function () {
  const SECTIONS = [
    ["Sport machen", [
      ["die Sportart, -en", "نوع رياضة"],
      ["sich bewegen", "يتحرك / يمارس نشاطًا بدنيًا"],
      ["das Kajak, -s (Kajak fahren)", "قارب كاياك / يجدّف بالكاياك"],
      ["das Kitesurfen (Sg.)", "رياضة ركوب الأمواج بالطائرة الشراعية"],
      ["surfen", "يركب الأمواج"],
      ["tauchen", "يغوص"],
      ["langlaufen, er läuft lang, ist langgelaufen", "يتزلج للمسافات الطويلة"],
      ["Volleyball spielen", "يلعب الكرة الطائرة"],
      ["das Tor, -e", "المرمى / الهدف"],
      ["schießen, er schießt, hat geschossen", "يسدد / يحرز هدفًا"],
      ["werfen, er wirft, hat geworfen", "يرمي"],
      ["mitspielen", "يشارك في اللعب"],
      ["das Rad, ⸚er (Rad fahren)", "الدراجة / يركب الدراجة"],
      ["die Radtour, -en", "جولة بالدراجة"],
      ["reiten, er reitet, ist geritten", "يركب الخيل"],
      ["Yoga machen", "يمارس اليوغا"],
      ["der Kletterer, -", "متسلّق"],
      ["die Kletterin, -nen", "متسلّقة"],
      ["die Wanderung, -en", "رحلة مشي / تنزّه"],
      ["die Strecke, -n", "المسافة / المسار"],
      ["die Kondition (Sg.)", "اللياقة البدنية"],
      ["die Gesundheit (Sg.)", "الصحة"],
      ["sich entspannen", "يسترخي"],
      ["der Wettbewerb, -e", "مسابقة / منافسة"]
    ]],
    ["Sportgeräte", [
      ["der Fußballschuh, -e", "حذاء كرة القدم"],
      ["der Klettergurt, -e", "حزام التسلق"],
      ["der Helm, -e", "خوذة"],
      ["die Matte, -n", "حصيرة رياضية"],
      ["das Mountainbike, -s", "دراجة جبلية"],
      ["der Schläger, -", "مضرب"],
      ["der Skistock, ⸚e", "عصا تزلج"],
      ["das Paddel, -", "مجداف"],
      ["das Surfbrett, -er", "لوح ركوب الأمواج"],
      ["die Taucherbrille, -n", "نظارة غوص"]
    ]],
    ["Vereine und Fans", [
      ["der Sportverein, -e", "نادي رياضي"],
      ["die Mannschaft, -en", "الفريق"],
      ["der Fußballstar, -s", "نجم كرة قدم"],
      ["der Fanartikel, -", "منتج أو تذكار خاص بالمشجعين"],
      ["treu", "وفيّ / مخلص"],
      ["sich benehmen, er benimmt sich, hat sich benommen", "يتصرف / يسلك"],
      ["das Vorbild, -er", "قدوة / مثل أعلى"],
      ["sympathisch", "لطيف / محبوب"],
      ["großartig", "رائع / عظيم"],
      ["genial", "عبقري / مذهل"],
      ["unglaublich", "لا يُصدّق"],
      ["der Wahnsinn (Sg.)", "شيء جنوني / مذهل"],
      ["wahnsinnig", "للغاية / بشكل مذهل"],
      ["die Hoffnung, -en", "الأمل"],
      ["bestimmt", "بالتأكيد / غالبًا"],
      ["der Erfolg, -e", "النجاح"],
      ["die Enttäuschung, -en", "خيبة الأمل"],
      ["verlieren, er verliert, hat verloren", "يخسر"],
      ["die Katastrophe, -n", "كارثة"]
    ]],
    ["Vorschläge machen", [
      ["Was denkst du, sollen wir …?", "ما رأيك، هل نفعل…؟"],
      ["Wir könnten …", "يمكننا أن… / من الممكن أن…"]
    ]],
    ["Wetter", [
      ["stark", "شديد / بقوة"],
      ["trocken", "جاف / بلا مطر"]
    ]],
    ["Andere wichtige Wörter und Wendungen", [
      ["außer (+ D.)", "باستثناء / عدا"],
      ["ausfallen, er fällt aus, ist ausgefallen", "يُلغى / يتعطل"],
      ["deshalb", "لذلك / لهذا السبب"],
      ["trotzdem", "مع ذلك / رغم ذلك"],
      ["basteln", "يصنع شيئًا يدويًا"],
      ["die Kette, -n", "سلسلة / عقد"],
      ["das Material, -ien", "المادة / الخامة"],
      ["zurückgeben, er gibt zurück, hat zurückgegeben", "يعيد / يرجع شيئًا"],
      ["bewachen", "يحرس"],
      ["der Staat, -en", "الدولة"],
      ["der Kanton, -e", "كانتون / إقليم سويسري"],
      ["der Cousin, -s", "ابن العم أو الخال"],
      ["die Cousine, -n", "بنت العم أو الخال"],
      ["die Sendung, -en", "برنامج / إرسال / شحنة"],
      ["eine Antwort geben", "يعطي إجابة / يجيب"],
      ["der Hinweis, -e", "ملاحظة / إرشاد"],
      ["quer", "بالعرض / عبر"],
      ["übermorgen", "بعد غد"],
      ["neulich", "مؤخرًا / منذ فترة قصيرة"],
      ["einverstanden sein", "يكون موافقًا"],
      ["passen", "يناسب / يلائم"]
    ]],
    ["Unterwegs in D-A-CH", [
      ["die Anreise, -n", "رحلة الوصول / الذهاب إلى المكان"],
      ["der Einwohner, -", "ساكن / مواطن"],
      ["die Einwohnerin, -nen", "ساكنة / مواطنة"],
      ["entfernt", "بعيد / على مسافة"],
      ["kulturell", "ثقافي"],
      ["faszinierend", "ساحر / مدهش"],
      ["das Gasthaus, ⸚er", "نُزل / مطعم ريفي"],
      ["hinunter", "إلى أسفل"],
      ["das Gebiet, -e", "منطقة / إقليم"],
      ["die Umgebung, -en", "المنطقة المحيطة"],
      ["der Nationalpark, -s", "حديقة وطنية / محمية طبيعية"],
      ["das Tal, ⸚er", "وادٍ"],
      ["die Höhle, -n", "كهف"],
      ["der Führer, -", "مرشد"],
      ["die Führerin, -nen", "مرشدة"],
      ["die Temperatur, -en", "درجة الحرارة"],
      ["der Nebel, -", "الضباب"]
    ]]
  ];

  // Definitions and examples follow the 88 newly added cards in their official order.
  // The seven words already present in the chapter keep their original explanations.
  const DETAILS = [
    ["den Körper aktiv bewegen oder körperlich tätig sein", "Regelmäßige Bewegung tut dem Körper gut."],
    ["ein schmales, leichtes Boot, das man mit einem Paddel fährt", "Am Wochenende fahren wir mit dem Kajak auf dem See."],
    ["eine Wassersportart, bei der ein Lenkdrachen ein Surfbrett zieht", "Bei starkem Wind macht Paul Kitesurfen."],
    ["auf einem Brett über Wasserwellen fahren", "Im Urlaub surft sie jeden Morgen im Meer."],
    ["unter der Wasseroberfläche schwimmen und dort bleiben", "Wir tauchen und beobachten Fische."],
    ["mit schmalen Skiern längere Strecken durch den Schnee fahren", "Im Winter laufen wir zehn Kilometer lang."],
    ["Volleyball als Sport oder Spiel ausüben", "Nach der Arbeit spielen wir Volleyball."],
    ["einen Ball oder ein anderes Objekt kräftig in eine Richtung bewegen", "Der Spieler schießt den Ball ins Tor."],
    ["etwas mit der Hand durch die Luft bewegen", "Wir werfen uns den Ball zu."],
    ["zusammen mit anderen an einem Spiel teilnehmen", "Darf ich bei euch mitspielen?"],
    ["mit einem Fahrrad fahren", "Bei gutem Wetter fahre ich mit dem Rad zur Arbeit."],
    ["eine längere gemeinsame Fahrt mit dem Fahrrad", "Am Sonntag machen wir eine Radtour am Fluss."],
    ["auf einem Pferd sitzen und es lenken", "Meine Cousine reitet seit drei Jahren."],
    ["Yogaübungen für Körper und Ruhe ausführen", "Morgens mache ich zwanzig Minuten Yoga."],
    ["ein Mann, der an Felsen oder Kletterwänden hochsteigt", "Der Kletterer sichert sich mit einem Seil."],
    ["eine Frau, die an Felsen oder Kletterwänden hochsteigt", "Die Kletterin erreicht den Gipfel."],
    ["ein längerer Spaziergang, besonders in der Natur", "Die Wanderung durch den Wald dauert drei Stunden."],
    ["der Weg oder die Entfernung zwischen zwei Punkten", "Diese Strecke ist zwölf Kilometer lang."],
    ["die körperliche Leistungsfähigkeit und Ausdauer", "Durch das Training hat er eine gute Kondition."],
    ["der Zustand, in dem Körper und Seele gut funktionieren", "Sport und Schlaf sind wichtig für die Gesundheit."],
    ["ruhig werden und körperliche oder seelische Spannung verlieren", "Nach dem Training entspanne ich mich im Garten."],
    ["eine Veranstaltung, bei der Teilnehmer ihre Leistungen vergleichen", "Sie nimmt an einem Kletterwettbewerb teil."],
    ["ein spezieller Schuh zum Fußballspielen", "Die neuen Fußballschuhe haben guten Halt."],
    ["ein Sicherheitsgurt, der beim Klettern den Körper hält", "Vor dem Start prüft er seinen Klettergurt."],
    ["eine weiche Unterlage für Sport- oder Bodenübungen", "Für Yoga lege ich eine Matte auf den Boden."],
    ["ein stabiles Fahrrad für Wege im Gelände und in den Bergen", "Mit dem Mountainbike fährt er durch den Wald."],
    ["ein Sportgerät zum Schlagen eines Balls, zum Beispiel beim Tennis", "Für das Tennisspiel brauche ich einen Schläger."],
    ["ein Stock, der beim Skifahren oder Langlaufen unterstützt", "Ein Skistock ist im Schnee liegen geblieben."],
    ["ein Gerät, mit dem man ein Boot durch das Wasser bewegt", "Sie zieht das Paddel kräftig durchs Wasser."],
    ["ein langes Brett zum Surfen auf Wellen", "Das Surfbrett liegt schon am Strand."],
    ["eine dicht sitzende Brille zum Sehen unter Wasser", "Mit der Taucherbrille sehe ich die Fische deutlich."],
    ["ein organisierter Verein, in dem Menschen gemeinsam Sport treiben", "Er trainiert zweimal pro Woche im Sportverein."],
    ["ein sehr bekannter und erfolgreicher Fußballspieler", "Der Fußballstar gibt jungen Spielern Autogramme."],
    ["ein Produkt für Fans, etwa ein Schal, Trikot oder Poster", "Im Stadion kauft sie einen Fanartikel."],
    ["zuverlässig verbunden und über lange Zeit loyal", "Die Fans bleiben ihrer Mannschaft treu."],
    ["sich in einer bestimmten Weise verhalten", "Die Zuschauer sollen sich fair benehmen."],
    ["eine Person, deren Verhalten oder Leistung man nachmachen möchte", "Die Sportlerin ist für viele Kinder ein Vorbild."],
    ["freundlich und angenehm, sodass man jemanden gernhat", "Der neue Trainer wirkt sehr sympathisch."],
    ["besonders gut, beeindruckend oder ausgezeichnet", "Die Stimmung im Stadion war großartig."],
    ["außergewöhnlich klug, kreativ oder sehr gut", "Das war eine geniale Idee."],
    ["so überraschend, dass man es kaum glauben kann", "Die Mannschaft hat unglaublich gut gespielt."],
    ["etwas extrem Überraschendes oder Beeindruckendes", "Fünf Tore in einem Spiel – das ist der Wahnsinn!"],
    ["sehr stark, extrem oder außerordentlich", "Die Fans freuen sich wahnsinnig über den Sieg."],
    ["mit großer Sicherheit oder sehr wahrscheinlich", "Sie gewinnt bestimmt den nächsten Wettbewerb."],
    ["ein positives Ergebnis nach Arbeit oder Anstrengung", "Das tägliche Training brachte großen Erfolg."],
    ["ein sehr schlimmes Ereignis oder eine völlig misslungene Situation", "Das Unwetter war eine Katastrophe für das Turnier."],
    ["eine Frage, mit der man die Meinung zu einem Vorschlag einholt", "Was denkst du, sollen wir morgen wandern?"],
    ["eine höfliche Form, um einen Vorschlag zu machen", "Wir könnten am Samstag Rad fahren."],
    ["mit viel Kraft oder in hoher Intensität", "Heute weht ein starker Wind."],
    ["ohne Nässe oder Feuchtigkeit", "Nach zwei sonnigen Tagen ist der Weg trocken."],
    ["mit Ausnahme von; alle oder alles, nur die genannte Person oder Sache nicht", "Außer meinem Bruder kommen alle mit."],
    ["nicht stattfinden oder nicht funktionieren", "Das Training fällt wegen des Regens aus."],
    ["aus diesem Grund; als Folge davon", "Es regnet stark, deshalb bleiben wir zu Hause."],
    ["obwohl etwas dagegen spricht; dennoch", "Er ist müde, trotzdem trainiert er weiter."],
    ["mit einfachen Materialien etwas von Hand herstellen", "Die Kinder basteln ein Boot aus Papier."],
    ["eine Reihe verbundener Glieder oder ein Schmuckstück für den Hals", "Sie trägt eine silberne Kette."],
    ["ein Stoff oder Werkstoff, aus dem etwas hergestellt wird", "Für das Modell brauchen wir Holz als Material."],
    ["etwas wieder zu der Person oder an den Ort bringen, von dem es kam", "Ich gebe das geliehene Fahrrad morgen zurück."],
    ["auf eine Person, ein Tier oder einen Ort aufpassen und ihn schützen", "Ein Sicherheitsdienst bewacht das Gebäude."],
    ["ein politisch organisiertes Land mit Regierung und Gesetzen", "Deutschland ist ein europäischer Staat."],
    ["ein Gliedstaat oder Verwaltungsgebiet der Schweiz", "Zürich ist ein Kanton in der Schweiz."],
    ["der Sohn eines Onkels oder einer Tante", "Mein Cousin wohnt in Bern."],
    ["die Tochter eines Onkels oder einer Tante", "Meine Cousine besucht uns am Wochenende."],
    ["ein Programm im Radio oder Fernsehen; auch eine verschickte Lieferung", "Die Sendung beginnt heute um acht Uhr."],
    ["auf eine Frage reagieren und die gesuchte Information nennen", "Kannst du mir bitte eine klare Antwort geben?"],
    ["eine Information, die beim Verstehen oder Finden hilft", "Der Lehrer gibt uns einen wichtigen Hinweis."],
    ["von einer Seite zur anderen oder nicht in Längsrichtung", "Wir gehen quer über den Platz."],
    ["der Tag nach morgen", "Übermorgen fahren wir in die Schweiz."],
    ["vor kurzer Zeit; kürzlich", "Neulich habe ich einen alten Freund getroffen."],
    ["dieselbe Meinung haben oder einem Vorschlag zustimmen", "Ich bin mit deinem Plan einverstanden."],
    ["die richtige Größe oder Form haben; geeignet sein", "Die Jacke passt mir genau."],
    ["die Reise zu einem Ziel oder Veranstaltungsort", "Die Anreise mit dem Zug dauert zwei Stunden."],
    ["ein Mann, der in einem Ort oder Land wohnt", "Jeder Einwohner kann den Park kostenlos besuchen."],
    ["eine Frau, die in einem Ort oder Land wohnt", "Die Einwohnerin kennt die Umgebung sehr gut."],
    ["in einer bestimmten, meist größeren Entfernung gelegen", "Das Gasthaus ist fünf Kilometer entfernt."],
    ["Kunst, Geschichte, Sprache und Lebensweise betreffend", "Die Stadt bietet viele kulturelle Veranstaltungen."],
    ["so interessant oder schön, dass es starke Aufmerksamkeit weckt", "Die Landschaft in den Alpen ist faszinierend."],
    ["ein meist ländliches Haus mit Unterkunft und Bewirtung für Gäste", "Wir übernachten in einem kleinen Gasthaus."],
    ["von oben nach unten", "Der Weg führt steil zum Tal hinunter."],
    ["ein bestimmter räumlicher Bereich oder eine Region", "In diesem Gebiet gibt es viele Seen."],
    ["das Gebiet und die Orte in der Nähe eines bestimmten Platzes", "Wir erkunden die Umgebung mit dem Fahrrad."],
    ["ein großes geschütztes Naturgebiet", "Im Nationalpark leben viele seltene Tiere."],
    ["ein tief liegendes Gebiet zwischen Bergen oder Hügeln", "Durch das Tal fließt ein kleiner Fluss."],
    ["ein natürlicher Hohlraum im Felsen oder unter der Erde", "In der Höhle ist es kühl und dunkel."],
    ["ein Mann, der Besucher durch einen Ort führt und ihn erklärt", "Der Führer zeigt uns die Altstadt."],
    ["eine Frau, die Besucher durch einen Ort führt und ihn erklärt", "Die Führerin erzählt viel über die Burg."],
    ["ein Messwert dafür, wie warm oder kalt etwas ist", "Heute liegt die Temperatur bei zehn Grad."],
    ["eine dichte Schicht kleiner Wassertröpfchen in der Luft, die die Sicht erschwert", "Am Morgen liegt dichter Nebel über dem Tal."]
  ];

  const WORDS = SECTIONS.flatMap(([cat, words]) => words.map(([w, ar]) => ({w, ar, cat})));
  const chapter = (window.BOOK1 || []).find(item => item.num === 9);
  if (!chapter) return;

  const key = value => value
    .toLocaleLowerCase("de")
    .split(",")[0]
    .replace(/\s*\(.*?\)\s*/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  const known = new Set(chapter.vocab.map(item => key(item.w)));
  const additions = [];

  for (const item of WORDS) {
    if (known.has(key(item.w))) continue;
    known.add(key(item.w));
    const [definition, example] = DETAILS[additions.length] || ["", ""];
    additions.push({
      w: item.w,
      d: definition,
      ex: example,
      ar: item.ar,
      cat: item.cat,
      img: `assets/vocab-scenes/k9-added/${String(additions.length + 1).padStart(2, "0")}.webp`
    });
  }

  chapter.vocab.push(...additions);
  window.K9_LERNWORTSCHATZ_STATS = {
    official: WORDS.length,
    added: additions.length,
    skippedAsDuplicate: WORDS.length - additions.length,
    withoutImage: additions.filter(item => !item.img).length,
    total: chapter.vocab.length
  };
})();
