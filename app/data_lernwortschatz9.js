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
    additions.push({
      w: item.w,
      d: `Dieses Wort gehört zum offiziellen Lernwortschatz von Kapitel 9 (${item.cat}).`,
      ex: `Bilde einen eigenen Satz mit „${item.w.split(",")[0]}“.`,
      ar: item.ar,
      cat: `Lernwortschatz 9 · ${item.cat}`,
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
