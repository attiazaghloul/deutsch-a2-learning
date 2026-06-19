/* Hören & Sprechen A1: chapter, exercise, page and original track mapping. */
function exA1(id, title, tracks, pages, task, taskAr) {
  return {id, title, tracks, exercisePages:pages, task, taskAr};
}
window.HOEREN_A1_BOOK = {
  id: "hoeren",
  title: "Hören & Sprechen A1",
  subtitle: "34 Übungen · 8 Themen · Original-Audios",
  introTrack: 1,
  outroTrack: 60,
  chapters: [
    {
      id: "A", title: "Begrüßung, Kontaktaufnahme, Herkunft", titleAr: "التحية والتعارف والأصل",
      exercises: [
        exA1("A1", "Lisa und Paul stellen sich vor", [2,3,4], [7],
          "Zwei Personen stellen sich vor. Höre und verstehe Name, Herkunft und erste Informationen.",
          "شخصان يقدّمان نفسيهما. استمع وافهم الاسم والبلد وأول المعلومات."),
        exA1("A2", "Begrüßen und Verabschieden", [5,6], [9],
          "Begrüßungen und Verabschiedungen hören und die passenden Ausdrücke üben.",
          "استمع لعبارات التحية والوداع وتدرّب على الصياغات المناسبة."),
        exA1("A3", "Wie heißen Sie?", [7,8], [10],
          "Nach dem Namen fragen und antworten; Namen verstehen und buchstabieren.",
          "السؤال عن الاسم والرد، وفهم الأسماء وتهجئتها."),
        exA1("A4", "Woher kommen Sie?", [9,10], [11],
          "Nach Herkunft und Land fragen und die Antworten verstehen.",
          "السؤال عن البلد والأصل وفهم الإجابات."),
        exA1("A5", "Informationen über Menschen", [11], [11],
          "Kurze Informationen über Personen hören und die wichtigsten Angaben notieren.",
          "استمع لمعلومات قصيرة عن أشخاص ودوّن أهم البيانات."),
        exA1("A6", "Interview: Herr Meier und seine Familie", [12], [13],
          "Ein Interview über eine Familie verstehen und Angaben zu den Personen erfassen.",
          "افهم مقابلة عن عائلة وسجّل المعلومات عن الأشخاص."),
        exA1("A7", "Wie geht es dir? Wie geht es Ihnen?", [13,14,15], [15],
          "Nach dem Befinden fragen und formell wie informell darauf reagieren.",
          "السؤال عن الحال والرد بصيغة رسمية وغير رسمية."),
        exA1("A8", "Lisa und Paul erzählen von sich", [16], [16],
          "Eine längere Selbstvorstellung verstehen und die Informationen ordnen.",
          "افهم تقديمًا أطول للنفس ورتّب المعلومات.")
      ]
    },
    {
      id: "B", title: "Alphabet, Zahlen, Datum, Uhrzeit, Wochentage", titleAr: "الأبجدية والأرقام والتاريخ والوقت وأيام الأسبوع",
      exercises: [
        exA1("B1", "Das Alphabet", [17,18], [19],
          "Das deutsche Alphabet hören und Wörter richtig buchstabieren.",
          "استمع للأبجدية الألمانية وتهجَّ الكلمات بشكل صحيح."),
        exA1("B2", "Zahlen bis 100", [19,20], [19],
          "Zahlen bis 100 hören, verstehen und richtig aufschreiben.",
          "استمع للأرقام حتى 100 وافهمها واكتبها صح."),
        exA1("B3", "Zahlen bis 1000", [21,22], [21],
          "Größere Zahlen bis 1000 verstehen und notieren.",
          "افهم أرقامًا أكبر حتى 1000 ودوّنها."),
        exA1("B4", "Zahlen bis 1000 (Übung)", [23,24], [23],
          "Weitere Übung mit Zahlen bis 1000, z. B. Preise und Nummern.",
          "تمرين إضافي على الأرقام حتى 1000 مثل الأسعار والأرقام."),
        exA1("B5", "Uhrzeit", [25,26], [25],
          "Die Uhrzeit verstehen und offizielle wie inoffizielle Zeitangaben hören.",
          "افهم الساعة واستمع للوقت بالصيغة الرسمية وغير الرسمية."),
        exA1("B6", "Datum und Monate", [27,28,29], [29],
          "Datum und Monatsnamen hören und richtig zuordnen.",
          "استمع للتاريخ وأسماء الشهور وربطها بشكل صحيح."),
        exA1("B7", "Wochentage", [30], [31],
          "Die Wochentage hören und in der richtigen Reihenfolge üben.",
          "استمع لأيام الأسبوع وتدرّب على ترتيبها الصحيح.")
      ]
    },
    {
      id: "C", title: "Ortsangaben, Wegbeschreibung", titleAr: "تحديد الأماكن ووصف الطريق",
      exercises: [
        exA1("C1", "Wo liegt …?", [31,32], [33],
          "Orte in der Stadt verstehen und sagen, wo etwas liegt.",
          "افهم أماكن المدينة وقُل أين يقع الشيء."),
        exA1("C2", "Orte", [33,34], [35],
          "Gebäude und Orte benennen und in einem Plan finden.",
          "تسمية المباني والأماكن وإيجادها على الخريطة."),
        exA1("C3", "Wegbeschreibung", [35,36], [37],
          "Eine Wegbeschreibung verstehen: links, rechts, geradeaus.",
          "افهم وصف الطريق: شمال، يمين، على طول.")
      ]
    },
    {
      id: "D", title: "Essen und Trinken", titleAr: "الأكل والشرب",
      exercises: [
        exA1("D1", "Im Café", [37,38], [41],
          "Ein Gespräch im Café verstehen und etwas bestellen.",
          "افهم حوارًا في الكافيه واطلب شيئًا."),
        exA1("D2", "Im Restaurant", [39,40], [44],
          "Im Restaurant bestellen, bezahlen und Vorlieben äußern.",
          "في المطعم: الطلب والدفع والتعبير عن التفضيلات."),
        exA1("D3", "Zusatzübung – Diktat", [41], [48],
          "Ein kurzes Diktat zum Thema Essen und Trinken hören und schreiben.",
          "استمع لإملاء قصير عن الأكل والشرب واكتبه.")
      ]
    },
    {
      id: "E", title: "Familie", titleAr: "العائلة",
      exercises: [
        exA1("E1", "Meine Familie", [42,43], [49],
          "Über Familienmitglieder sprechen und Verwandtschaft verstehen.",
          "الكلام عن أفراد العائلة وفهم صلات القرابة."),
        exA1("E2", "Familienstand", [44,45], [51],
          "Den Familienstand verstehen: ledig, verheiratet, geschieden.",
          "فهم الحالة الاجتماعية: أعزب، متزوج، مطلّق."),
        exA1("E3", "Informationen zur Person", [46,47], [53],
          "Persönliche Angaben in einem Gespräch verstehen und ergänzen.",
          "فهم البيانات الشخصية في حوار وإكمالها.")
      ]
    },
    {
      id: "F", title: "Arbeit und Beruf", titleAr: "العمل والمهنة",
      exercises: [
        exA1("F1", "Bei der Arbeit", [48], [55],
          "Gespräche am Arbeitsplatz verstehen und Tätigkeiten zuordnen.",
          "فهم محادثات في مكان العمل وربط المهام."),
        exA1("F2", "Berufe", [49], [57],
          "Berufe hören, benennen und den richtigen Personen zuordnen.",
          "الاستماع للمهن وتسميتها وربطها بالأشخاص الصحيحين.")
      ]
    },
    {
      id: "G", title: "Freizeit", titleAr: "وقت الفراغ",
      exercises: [
        exA1("G1", "Was machen Lisa und Paul?", [50], [59],
          "Freizeitaktivitäten verstehen und sagen, wer was gern macht.",
          "فهم أنشطة وقت الفراغ وقول مَن يحب أن يفعل ماذا."),
        exA1("G2", "Anrufbeantworter", [51,52], [61],
          "Nachrichten auf dem Anrufbeantworter verstehen und Notizen machen.",
          "فهم رسائل المسجِّل الصوتي وتدوين الملاحظات."),
        exA1("G3", "Was machst du gerne?", [53], [63],
          "Über Hobbys und Vorlieben sprechen und Antworten verstehen.",
          "الكلام عن الهوايات والتفضيلات وفهم الإجابات."),
        exA1("G4", "Ich war … / Ich bin gewesen …", [54], [63],
          "Über Vergangenes sprechen und einfache Vergangenheitsformen hören.",
          "الكلام عن الماضي وسماع صيغ الماضي البسيطة.")
      ]
    },
    {
      id: "H", title: "Einkaufen", titleAr: "التسوق",
      exercises: [
        exA1("H1", "Im Supermarkt", [55], [67],
          "Ein Einkaufsgespräch im Supermarkt verstehen.",
          "فهم حوار تسوق في السوبر ماركت."),
        exA1("H2", "Einkaufen – Kleidung", [56,57], [69],
          "Beim Kleiderkauf Größe, Farbe und Preis verstehen.",
          "عند شراء الملابس: فهم المقاس واللون والسعر."),
        exA1("H3", "Einkaufen – Elektrogeräte", [58], [71],
          "Ein Verkaufsgespräch über Elektrogeräte verstehen.",
          "فهم حوار بيع عن الأجهزة الكهربائية."),
        exA1("H4", "Abschlussübung – Einkaufen", [59], [72],
          "Eine zusammenfassende Übung zum Thema Einkaufen.",
          "تمرين ختامي شامل عن موضوع التسوق.")
      ]
    }
  ]
};
