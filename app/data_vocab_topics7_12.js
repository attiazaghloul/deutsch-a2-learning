/* Topic labels for the original vocabulary in chapters 7-12. */
(function () {
  const TOPICS = {
    7: [
      [0, 19, "Öffentliche Verkehrsmittel und Fahrkarten", "المواصلات العامة والتذاكر"],
      [20, 42, "Fahrrad, Mobilität und Wege", "الدراجات والتنقل والطرق"],
      [43, 51, "Verkehr der Zukunft", "مواصلات المستقبل"],
      [52, 71, "Auto, Tanken und Pannen", "السيارات والوقود والأعطال"],
      [72, 82, "Bahn- und Flugreisen", "السفر بالقطار والطائرة"],
      [83, 92, "Wegbeschreibung", "وصف الطريق"],
      [93, 101, "Kundenservice und Statistik", "خدمة العملاء والإحصاءات"],
      [102, 108, "Meinung und Information", "الرأي والمعلومات"],
      [109, 116, "Stadt und Freizeit", "المدينة ووقت الفراغ"],
      [117, 135, "Andere wichtige Wörter und Wendungen", "كلمات وتعبيرات مهمة أخرى"],
      [136, 144, "Verkehrsmeldungen und Reiseplanung", "أخبار المرور وتخطيط الرحلات"]
    ],
    8: [
      [0, 18, "Lernen und Prüfungen", "التعلم والامتحانات"],
      [19, 28, "Präsentieren und Vortragen", "العروض والتقديم"],
      [29, 35, "Erfahrung und Lernalltag", "الخبرة وروتين التعلم"],
      [36, 44, "Lernstrategien und Präsentationstechnik", "استراتيجيات التعلم وتقنيات العرض"]
    ],
    9: [
      [0, 18, "Sport, Verein und Mannschaft", "الرياضة والنادي والفريق"],
      [19, 30, "Gefühle und Verabredungen", "المشاعر والمواعيد"],
      [31, 35, "Fitness und Leistung", "اللياقة والأداء"],
      [36, 47, "Klettern und Wettkampf", "التسلق والمنافسة"]
    ],
    10: [
      [0, 15, "Nachbarn und Haus", "الجيران والمنزل"],
      [16, 22, "Umziehen und Einrichten", "الانتقال وتأثيث المنزل"],
      [23, 32, "Haustiere und Hausordnung", "الحيوانات المنزلية وقواعد البيت"],
      [33, 46, "Wohngemeinschaft und Zusammenleben", "السكن المشترك والتعايش"]
    ],
    11: [
      [0, 9, "Zeit und Planung", "الوقت والتخطيط"],
      [10, 18, "Wünsche, Träume und Erholung", "الأمنيات والأحلام والراحة"],
      [19, 30, "Alltag und Freizeit", "الحياة اليومية ووقت الفراغ"],
      [31, 39, "Gefühle und Zeitdruck", "المشاعر وضغط الوقت"],
      [40, 45, "Lebensphasen und Prioritäten", "مراحل الحياة والأولويات"]
    ],
    12: [
      [0, 0, "Unterhaltung und Kultur", "الترفيه والثقافة"],
      [1, 26, "Musik, Bands und Konzerte", "الموسيقى والفرق والحفلات"],
      [27, 39, "Kunst und Bildbeschreibung", "الفن ووصف الصور"],
      [40, 45, "Live-Auftritte und Publikum", "العروض المباشرة والجمهور"]
    ]
  };

  const FALLBACKS = {
    7: ["Verkehrsmeldungen und Reiseplanung", "أخبار المرور وتخطيط الرحلات"],
    8: ["Lernstrategien und Prüfungsvorbereitung", "استراتيجيات التعلم والاستعداد للامتحان"],
    9: ["Fitness und Leistung", "اللياقة والأداء"],
    10: ["Wohngemeinschaft und Zusammenleben", "السكن المشترك والتعايش"],
    11: ["Lebensziele und Pläne", "أهداف الحياة والخطط"],
    12: ["Film, Vorstellung und Rezension", "الأفلام والعروض والمراجعات"]
  };

  const books = [...window.BOOK1, ...window.BOOK2];
  books.filter(chapter => chapter.num >= 7 && chapter.num <= 12).forEach(chapter => {
    const ranges = TOPICS[chapter.num];
    chapter.vocab.forEach((item, index) => {
      if (item.cat) return;
      const topic = ranges.find(([start, end]) => index >= start && index <= end) || FALLBACKS[chapter.num];
      const values = topic.length === 4 ? topic.slice(2) : topic;
      item.cat = values[0];
      item.catAr = values[1];
    });
  });
})();
