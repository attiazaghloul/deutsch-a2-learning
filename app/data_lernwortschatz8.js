/* Official Lernwortschatz 8 from Netzwerk neu A2.2, pp. 100-101. */
(function () {
  const WORDS = [
    ["die Energie, -n","الطاقة"],["lassen","يترك / يدع"],["unternehmen, er unternimmt, hat unternommen","يقوم بشيء / ينظّم نشاطًا"],["verschieben, er verschiebt, hat verschoben","يؤجل / يغيّر الموعد"],
    ["der Arbeitgeber, -","صاحب العمل"],["anstellen","يوظّف"],["die Vollzeit (Sg.)","دوام كامل"],["freiberuflich","يعمل بشكل حر"],["stundenweise","بالساعة"],["der Auftrag, ⸚e","مهمة / تكليف"],["der PC, -s","حاسوب شخصي"],["die Autorin, -nen","مؤلفة"],["der Babysitter, -","جليس أطفال"],["ausländisch","أجنبي"],["die Konferenz, -en","مؤتمر"],["der Workshop, -s","ورشة عمل"],["zusammenarbeiten","يتعاون / يعمل معًا"],["pensioniert","متقاعد"],["die Rente, -n","معاش التقاعد"],["die Seniorin, -nen","سيدة مسنّة"],["dolmetschen","يترجم شفهيًا"],["der Dolmetscher, -","مترجم شفهي"],["übersetzen","يترجم"],["die Übersetzung, -en","ترجمة"],["begleiten","يرافق"],["gehörlos","أصم"],["neutral bleiben","يبقى محايدًا"],["kommunizieren","يتواصل"],["die Kommunikation (Sg.)","التواصل"],["anderen helfen","يساعد الآخرين"],["die Aktion, -en","مبادرة / نشاط"],["starten","يبدأ / يطلق"],["der/die Freiwillige, -n","متطوع / متطوعة"],
    ["die Gitarre, -n","جيتار"],["das Klavier, -e","بيانو"],["das Instrument, -e","آلة موسيقية"],["das Interesse, -n","اهتمام"],["klug","ذكي / حكيم"],["intelligent","ذكي"],["die Bücherei, -en","مكتبة"],["der Kursleiter, -","مدرّس / قائد الدورة"],["der/die Lehrende, -n","معلّم / معلّمة"],["der/die Lernende, -n","متعلّم / متعلّمة"],["die Sprechstunde, -n","ساعة الاستشارة"],["das Sekretariat, -e","السكرتارية"],["erfahren","يعرف / يكتشف"],["neugierig","فضولي"],["kompliziert","معقّد"],["hart","صعب / قاسٍ"],["kapieren","يفهم"],
    ["die Prüferin, -nen","مُمتحِنة"],["mündlich","شفهي"],["schriftlich","كتابي"],["die Schrift, -en","الكتابة / الخط"],["die Einführung, -en","مقدمة / تمهيد"],["der Stoff, -e","المادة الدراسية"],["die Disziplin (Sg.)","الانضباط"],["das Stipendium, Stipendien","منحة دراسية"],["der Ratschlag, ⸚e","نصيحة"],["die Beratung, -en","استشارة"],["die Förderung, -en","دعم / تشجيع"],["bieten, er bietet, hat geboten","يقدّم / يوفّر"],["das Feedback, -s","تغذية راجعة"],["der Trick, -s","حيلة / طريقة ذكية"],["der Zeitplan, ⸚e","جدول زمني"],["realistisch","واقعي"],
    ["die Mitteilung, -en","رسالة / إشعار"],["existieren","يوجد"],["zurechtkommen, er kommt zurecht, ist zurechtgekommen","يتدبّر أمره"],["sich beschweren","يشتكي"],["dabei haben","يحمل معه"],["putzen","ينظّف"],["spülen","يغسل الأطباق"],["tief","عميق"],["fett","دهني / سمين"],["einzeln","منفرد / كل على حدة"],["erforderlich","مطلوب / ضروري"],["die Hälfte, -n","النصف"],["die Menge, -n","الكمية"],["die Qualität, -en","الجودة"],["der Katalog, -e","كتالوج"],["der Prospekt, -e","نشرة إعلانية"],["das Herz, -en","القلب"],["die Figur, -en","شكل / قوام"],["das Mineralwasser, -","مياه معدنية"],["die Zitrone, -n","ليمونة"],["die Portion, -en","حصة / وجبة"],["tagsüber","أثناء النهار"],["die Mitternacht (Sg.)","منتصف الليل"],["der Wald, ⸚er","الغابة"],["notwendig","ضروري"],["prima","ممتاز"],["sowieso","على أي حال"],["übrigens","بالمناسبة"],["sorgen","يعتني / يقلق"],["der Service, -s","الخدمة"],["reparieren","يصلّح"],["die Reparatur, -en","إصلاح"],["das Werkzeug, -e","أداة / عُدّة"],["wegwerfen, er wirft weg, hat weggeworfen","يرمي / يتخلص من"],["gebraucht","مستعمل"],["voneinander","من بعضنا البعض"],
    ["eine Präsentation halten","يقدّم عرضًا"],["vortragen, er trägt vor, hat vorgetragen","يلقي / يعرض"],["beachten","يراعي / ينتبه إلى"],["die Einleitung, -en","المقدمة"],["die Gliederung, -en","التقسيم / الهيكل"],["der Hauptteil, -e","الجزء الرئيسي"],["der Inhalt, -e","المحتوى"],["der Punkt, -e","النقطة"],["der Schluss, ⸚e","الخاتمة"],["flüssig","بطلاقة"],["die Zuhörerin, -nen","مستمعة"],["der/die Angehörige, -n","قريب / فرد من العائلة"],["das Standesamt, ⸚er","مكتب الأحوال المدنية"],["das Forum, Foren","منتدى"],["abonnieren","يشترك / يتابع"],["die Mailbox, -en","البريد الصوتي"]
  ];

  const chapter = (window.BOOK1 || []).find(item => item.num === 8);
  if (!chapter) return;
  const key = value => value.toLocaleLowerCase("de").split(",")[0].replace(/\s*\(.*?\)\s*/g, " ").replace(/\s+/g, " ").trim();
  const known = new Set(chapter.vocab.map(item => key(item.w)));
  let photoNumber = 50;
  const additions = [];
  for (const [w, ar] of WORDS) {
    if (known.has(key(w))) continue;
    additions.push({
      w,
      d: `Dieses Wort gehört zum offiziellen Lernwortschatz von Kapitel 8.`,
      ex: `Lerne „${w.split(",")[0]}“ mit dem Bild und benutze das Wort in einem eigenen Satz.`,
      ar,
      cat: "Lernwortschatz 8",
      img: `assets/vocab-scenes/k8/${String(photoNumber++).padStart(2, "0")}.webp`
    });
  }
  chapter.vocab.push(...additions);
  window.K8_LERNWORTSCHATZ_STATS = {official: WORDS.length, added: additions.length, total: chapter.vocab.length};
})();
