/* Deutsch üben Phonetik A1: Prosodie, Vokale, Konsonanten. */
function exPh(id, title, tracks, pages, task, taskAr, solutionPages) {
  return {id, title, tracks, exercisePages: pages, solutionPages, task, taskAr};
}
function phTracks(cd, start, end) {
  const out = [];
  for (let n = start; n <= end; n++) out.push(`${cd}.${String(n).padStart(2, "0")}`);
  return out;
}

window.PHONETIK_A1_BOOK = {
  id: "phonetik",
  title: "Deutsch üben Phonetik A1",
  subtitle: "19 Übungen · Prosodie, Vokale, Konsonanten",
  assetBase: "assets/listening/a1-phonetik",
  progressKey: "a1PhonetikProgress",
  introTrack: "1.01",
  outroTrack: "3.82",
  chapters: [
    {
      id: "A", title: "Prosodie", titleAr: "الإيقاع والنبر واللحن",
      exercises: [
        exPh("A1", "Wortakzent", phTracks(1, 1, 8), [6, 7, 8, 9], [77],
          "Höre die Minimalpaare und markiere Wortakzent und Bedeutung. Wiederhole die Wörter laut.",
          "استمع لأزواج الكلمات وحدّد نبر الكلمة والمعنى. كرّر الكلمات بصوت عالٍ."),
        exPh("A2", "Satzakzent und Rhythmus", phTracks(1, 9, 25), [10, 11, 12, 13, 14, 15], [78, 79],
          "Übe Satzakzent, Rhythmus und emotionale Betonung in kurzen Dialogen und Sätzen.",
          "تدرّب على نبر الجملة والإيقاع والتعبير العاطفي في حوارات وجمل قصيرة."),
        exPh("A3", "Melodie", phTracks(1, 26, 38), [16, 17, 18, 19, 20], [79, 80],
          "Markiere Pausen, Melodie und Satzmelodie. Sprich die Dialoge im Karaoke-Modus mit.",
          "حدّد الوقفات واللحن ونبر الجمل. تكلّم الحوارات مع التسجيل الصوتي.")
      ]
    },
    {
      id: "B", title: "Vokale", titleAr: "الحروف العليا (الفواصل)",
      exercises: [
        exPh("B1", "Lange und kurze Vokale", phTracks(2, 1, 14), [21, 22, 23, 24, 25, 26], [80, 81],
          "Unterscheide lange und kurze betonte Vokale. Höre, markiere und wiederhole.",
          "ميّز بين الحروف العليا الطويلة والقصيرة المشدّدة. استمع، علّم وكرّر."),
        exPh("B2", "Die Vokale a und ä", phTracks(2, 15, 22), [27, 28, 29], [81, 82],
          "Übe a und ä in Wörtern zu Jahreszeiten, Wetter und Berufen.",
          "تدرّب على a و ä في كلمات الفصول والطقس والمهن."),
        exPh("B3", "Der Vokal e", phTracks(2, 23, 34), [30, 31, 32, 33, 34], [82, 83],
          "Höre e in Durchsagen, Dialogen und Alltagssituationen.",
          "استمع لصوت e في الإعلانات والحوارات ومواقف الحياة اليومية."),
        exPh("B4", "Der Vokal i", phTracks(2, 35, 46), [35, 36], [83, 84],
          "Markiere betonte Silben mit langem i (ie) und übe Zungenbrecher.",
          "حدّد المقاطع المشدّدة مع i الطويل (ie) وتدرّب على جمل النطق السريع."),
        exPh("B5", "Die Vokale o und ö", phTracks(2, 47, 58), [37, 38, 39, 40], [84, 85],
          "Höre o/ö in Alltagssätzen und wiederhole im Rhythmus.",
          "استمع لـ o/ö في جمل يومية وكرّرها بإيقاع منتظم."),
        exPh("B6", "Die Vokale u und ü", phTracks(2, 59, 70), [41, 42, 43, 44], [85, 86],
          "Übe u und ü in Wörtern und kurzen Dialogen.",
          "تدرّب على u و ü في الكلمات والحوارات القصيرة."),
        exPh("B7", "Die Diphthonge au/äu, ai/ei, eu", phTracks(2, 71, 78), [45, 46], [86, 87],
          "Höre und sprich Diphthonge in typischen Wörtern und Sätzen.",
          "استمع وانطق الحروف المركّبة في كلمات وجمل شائعة."),
        exPh("B8", "Der Vokaleinsatz", phTracks(2, 79, 90), [47, 48], [87, 88],
          "Markiere den Knacklaut (Vokaleinsatz) und übe Zahlen und Zungenbrecher.",
          "حدّد صوت بداية الحرف العلّي (Knacklaut) وتدرّب على الأرقام وجمل النطق.")
      ]
    },
    {
      id: "C", title: "Konsonanten", titleAr: "الحروف الساكنة",
      exercises: [
        exPh("C1", "Der Konsonant r", phTracks(3, 1, 14), [49, 50, 51, 52, 53], [88, 89],
          "Unterscheide vokalisiertes und konsonantisches r. Höre und wiederhole.",
          "ميّز بين r الممصوص و r الحاد. استمع وكرّر."),
        exPh("C2", "Die Konsonanten p, t, k – b, d, g", phTracks(3, 15, 28), [54, 55, 56, 57], [89, 90],
          "Übe stimmlose und stimmhafte Konsonanten am Wortanfang und in Sätzen.",
          "تدرّب على الحروف الصماء والمجهورة في بداية الكلمات وفي الجمل."),
        exPh("C3", "Die Konsonanten s und z", phTracks(3, 29, 41), [58, 59, 60, 61], [90],
          "Höre s und z in Reimen, -tion-Wörtern und Alltagssätzen.",
          "استمع لـ s و z في القصائد وكلمات -tion وجمل يومية."),
        exPh("C4", "Die Konsonanten sch, ch, h", phTracks(3, 42, 57), [62, 63, 64, 65, 66, 67], [90, 91],
          "Markiere ch (ich/ach), sch und stummes h in Dialogen.",
          "حدّد ch (ich/ach) و sch و h الصامت في الحوارات."),
        exPh("C5", "Die Konsonanten f, v, w", phTracks(3, 58, 65), [68, 69, 70, 71], [91],
          "Übe f, v und w in Wörtern und Sätzen.",
          "تدرّب على f و v و w في الكلمات والجمل."),
        exPh("C6", "Der Konsonant l", phTracks(3, 66, 71), [72, 73], [91],
          "Höre l in verschiedenen Silbenpositionen und wiederhole.",
          "استمع لـ l في مواقع مختلفة من المقطع وكرّر."),
        exPh("C7", "Die Konsonanten ng und nk", phTracks(3, 72, 77), [74, 75], [91],
          "Übe ng und nk in typischen deutschen Wörtern.",
          "تدرّب على ng و nk في كلمات ألمانية شائعة."),
        exPh("C8", "Der Konsonant j", phTracks(3, 78, 82), [76], [91],
          "Höre j (deutsch, englisch, französisch) und übe Karaoke-Antworten mit Ja.",
          "استمع لنطق j (ألماني، إنجليزي، فرنسي) وتدرّب على إجابات بـ Ja.")
      ]
    }
  ]
};