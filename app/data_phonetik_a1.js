/* Deutsch ueben Phonetik A1: Prosodie, Vokale, Konsonanten. */
function exPh(id, title, tracks, pages, solutionPages, task, taskAr, guide) {
  return {id, title, tracks, exercisePages: pages, solutionPages, task, taskAr, guide};
}
function phTracks(cd, start, end) {
  const out = [];
  for (let n = start; n <= end; n++) out.push(`${cd}.${String(n).padStart(2, "0")}`);
  return out;
}

const PHONETIK_GUIDES = {
  A1: {
    focus: "Wortakzent",
    focusAr: "نبر الكلمة: أي مقطع في الكلمة تسمعه أقوى من الباقي.",
    stepsAr: [
      "اسمع الكلمة مرة كاملة بدون إجابة، ثم أعدها وحدد المقطع الأقوى.",
      "اضرب بإصبعك أو صفق مرة عند المقطع المنبور.",
      "في الكلمات المركبة ركز غالبا على الكلمة الأولى، مثل Rueckenschmerzen.",
      "بعد الحل افتح صفحة الكتاب فقط للمراجعة أو لرؤية الشكل الأصلي."
    ],
    rememberAr: "النبر الخاطئ قد يغير المعنى: mehr Wasser ليست Meerwasser."
  },
  A2: {
    focus: "Satzakzent und Rhythmus",
    focusAr: "نبر الجملة والإيقاع: الكلمة المهمة في الجملة تكون أوضح وأقوى.",
    stepsAr: [
      "استمع للجملة وحدد الكلمة التي تحمل المعنى الأساسي.",
      "كرر الجملة بنفس الإيقاع، وليس كلمة كلمة.",
      "لاحظ الفرق بين الجملة العادية والجملة التي فيها شعور أو تأكيد.",
      "استخدم التسجيل كقالب: اسمع، أوقف، كرر، ثم اسمع مرة ثانية."
    ],
    rememberAr: "في الألمانية لا تنطق كل الكلمات بنفس القوة؛ المعنى يظهر من النبر."
  },
  A3: {
    focus: "Melodie",
    focusAr: "لحن الجملة: هل الصوت يرتفع أم ينخفض؟ وأين تقف؟",
    stepsAr: [
      "استمع للجملة وحدد الوقفات القصيرة.",
      "ارسم بسهم بسيط: الصوت صاعد أم نازل.",
      "كرر الحوار مع التسجيل كأنك تغني اللحن نفسه.",
      "في الأسئلة غالبا تسمع ارتفاعا في آخر الجملة."
    ],
    rememberAr: "اللحن يجعل الكلام مفهوما وطبيعيا، حتى لو الكلمات صحيحة."
  },
  B1: {
    focus: "Lange und kurze Vokale",
    focusAr: "الحروف المتحركة الطويلة والقصيرة، مثل Miete / Mitte.",
    stepsAr: [
      "اسمع الزوجين وقارن طول الصوت، لا شكل الكلمة فقط.",
      "مد الصوت الطويل قليلا، واجعل القصير أسرع وأقصر.",
      "كرر الأمثلة بصوت عال ثم اختبر نفسك بدون النظر للكتاب.",
      "اربط الطول بالمعنى حتى لا تختلط الكلمات."
    ],
    rememberAr: "طول الحركة في الألمانية جزء من النطق الصحيح وليس زينة."
  },
  B2: {
    focus: "a und ae",
    focusAr: "الفرق بين a و ä في كلمات الطقس والفصول والمهن.",
    stepsAr: [
      "افتح الفم أكثر مع a، واجعل ä أقرب لصوت e المفتوح.",
      "اسمع الكلمة ثم قلها ببطء مرة وبسرعة طبيعية مرة.",
      "قارن أزواج الكلمات بدل حفظ كل كلمة وحدها."
    ],
    rememberAr: "الفرق صغير في السمع لكنه واضح في حركة الفم."
  },
  B3: {
    focus: "Der Vokal e",
    focusAr: "صوت e في الإعلانات والحوارات اليومية.",
    stepsAr: [
      "ركز هل e طويلة وواضحة أم قصيرة ومخففة.",
      "كرر الكلمات داخل الجملة، لأن الصوت يتغير مع السرعة.",
      "استخدم الإعلانات الصوتية للتدريب على السمع السريع."
    ],
    rememberAr: "لا تنطق كل e بنفس الطريقة؛ السياق والضغط مهمان."
  },
  B4: {
    focus: "Der Vokal i",
    focusAr: "صوت i وخاصة ie الطويلة.",
    stepsAr: [
      "عندما ترى ie غالبا انطق i طويلة.",
      "حدد المقطع المنبور قبل التكرار.",
      "تدرب على الجمل السريعة بعد فهم الصوت ببطء."
    ],
    rememberAr: "ie في الألمانية ليست حرفين منفصلين غالبا؛ هي i طويلة."
  },
  B5: {
    focus: "o und oe",
    focusAr: "الفرق بين o و ö في كلمات وجمل يومية.",
    stepsAr: [
      "ابدأ بشكل الفم لصوت o، ثم قرب اللسان للأمام لإنتاج ö.",
      "اسمع ثم كرر في إيقاع ثابت.",
      "لا تحول ö إلى o؛ الفرق مطلوب في المعنى."
    ],
    rememberAr: "ö تحتاج شكل فم دائري مع إحساس قريب من e."
  },
  B6: {
    focus: "u und ue",
    focusAr: "الفرق بين u و ü.",
    stepsAr: [
      "ابدأ بـ u بشفاه دائرية، ثم حافظ على الشفاه وحرك اللسان للأمام لصوت ü.",
      "كرر الكلمات القصيرة ثم الجمل.",
      "سجل صوتك وقارن مع التسجيل الأصلي."
    ],
    rememberAr: "ü ليست u عادية؛ مكان اللسان يتغير."
  },
  B7: {
    focus: "Diphthonge",
    focusAr: "الأصوات المركبة: au / äu / ai / ei / eu.",
    stepsAr: [
      "انطق الصوت كحركة واحدة منزلقة وليس حرفين منفصلين.",
      "استمع لبداية الصوت ونهايته.",
      "كرر الكلمات الشائعة ثم الجمل."
    ],
    rememberAr: "الصوت المركب يتحرك من موضع إلى موضع داخل نفس المقطع."
  },
  B8: {
    focus: "Vokaleinsatz",
    focusAr: "بداية الحرف المتحرك بصوت قطع خفيف، خاصة في أول الكلمة.",
    stepsAr: [
      "استمع لبداية الكلمة: هل يوجد توقف صغير قبل الحركة؟",
      "تدرب على الأرقام والكلمات التي تبدأ بحرف متحرك.",
      "لا تضف همزة عربية قوية؛ المطلوب قطع ألماني خفيف."
    ],
    rememberAr: "Vokaleinsatz يساعد على وضوح بداية الكلمة."
  },
  C1: {
    focus: "Der Konsonant r",
    focusAr: "حرف r: أحيانا ينطق كحرف ساكن، وأحيانا يتحول لصوت قريب من الحركة.",
    stepsAr: [
      "اسمع مكان r في الكلمة: أولها، وسطها، آخرها.",
      "كرر ببطء ثم بسرعة طبيعية.",
      "فرق بين r الواضحة و r في آخر الكلمة."
    ],
    rememberAr: "لا يوجد شكل واحد فقط لـ r في الألمانية."
  },
  C2: {
    focus: "p t k / b d g",
    focusAr: "الفرق بين الحروف المهموسة والمجهورة في بداية الكلمة.",
    stepsAr: [
      "ضع يدك أمام فمك لتشعر بالهواء مع p/t/k.",
      "قارن كل زوج: p مع b، t مع d، k مع g.",
      "كرر داخل كلمات ثم داخل جمل قصيرة."
    ],
    rememberAr: "p/t/k في بداية الكلمة تحتاج دفعة هواء واضحة."
  },
  C3: {
    focus: "s und z",
    focusAr: "الفرق بين s و z وأصواتها في القوافي والكلمات اليومية.",
    stepsAr: [
      "استمع هل الصوت فيه ذبذبة أم لا.",
      "كرر الكلمات في مجموعات صغيرة.",
      "انتبه للكلمات التي تنتهي بـ -tion."
    ],
    rememberAr: "الفرق بين s و z سمعي قبل أن يكون كتابيا."
  },
  C4: {
    focus: "sch, ch, h",
    focusAr: "أصوات sch و ch و h الصامتة أو المنطوقة.",
    stepsAr: [
      "فرق بين ich-Laut و ach-Laut في ch.",
      "لا تنطق h دائما؛ أحيانا فقط تطيل الحركة قبلها.",
      "كرر الحوارات ببطء ثم بسرعة التسجيل."
    ],
    rememberAr: "ch ليس دائما صوتا واحدا؛ يتغير حسب الحرف قبله."
  },
  C5: {
    focus: "f, v, w",
    focusAr: "أصوات f و v و w.",
    stepsAr: [
      "قارن بين احتكاك f وصوت w الألماني.",
      "انتبه أن v في كلمات كثيرة تنطق f.",
      "كرر الكلمات ثم الجمل حتى يثبت شكل الفم."
    ],
    rememberAr: "حرف v في الكتابة لا يعني دائما صوت v العربي/الإنجليزي."
  },
  C6: {
    focus: "Der Konsonant l",
    focusAr: "حرف l في مواضع مختلفة من المقطع.",
    stepsAr: [
      "ضع طرف اللسان خلف الأسنان العليا.",
      "كرر l في أول ووسط وآخر الكلمة.",
      "اسمع الفرق بين نطق واضح ونطق ثقيل."
    ],
    rememberAr: "l الألمانية خفيفة وواضحة."
  },
  C7: {
    focus: "ng und nk",
    focusAr: "صوتا ng و nk في الكلمات الألمانية.",
    stepsAr: [
      "لا تضف g واضحة بعد ng إذا لم تكن مسموعة.",
      "قارن Klang و krank ونهايات الكلمات.",
      "كرر مع إغلاق الهواء من مؤخرة اللسان."
    ],
    rememberAr: "ng صوت أنفي من الخلف، وليس n + g دائما."
  },
  C8: {
    focus: "Der Konsonant j",
    focusAr: "حرف j حسب أصل الكلمة: ألماني أو إنجليزي أو فرنسي.",
    stepsAr: [
      "اسمع الكلمة أولا ولا تعتمد على شكل الحرف فقط.",
      "صنف j: ألماني مثل Jahr، أو إنجليزي، أو فرنسي.",
      "كرر إجابات Ja في الكاريوكي مع التسجيل."
    ],
    rememberAr: "نطق j يتغير حسب الكلمة، لذلك السمع هو الحكم."
  }
};

window.PHONETIK_A1_TRACK_TASKS = {
  "1.03": "3b · In den Bergen - Reihenfolge hoeren",
  "1.04": "3c · In den Bergen - wiederholen",
  "1.05": "4a · Wortfamilien - Betonung markieren",
  "1.06": "5b · Monate - Loesung kontrollieren",
  "1.07": "6a · Gute Wuensche - Betonung markieren",
  "1.08": "6b · Gute Wuensche - Karaoke sprechen"
};

window.PHONETIK_A1_BOOK = {
  id: "phonetik",
  title: "Deutsch ueben Phonetik A1",
  subtitle: "19 Uebungen · Prosodie, Vokale, Konsonanten",
  assetBase: "assets/listening/a1-phonetik",
  progressKey: "a1PhonetikProgress",
  introTrack: "1.01",
  outroTrack: "3.82",
  chapters: [
    {
      id: "A", title: "Prosodie", titleAr: "الإيقاع والنبر واللحن",
      exercises: [
        exPh("A1", "Wortakzent", phTracks(1, 1, 8), [6, 7, 8, 9], [77],
          "Hoere die Minimalpaare und markiere Wortakzent und Bedeutung. Wiederhole die Woerter laut.",
          "استمع للأزواج المتشابهة وحدد نبر الكلمة والمعنى. كرر الكلمات بصوت عال.",
          PHONETIK_GUIDES.A1),
        exPh("A2", "Satzakzent und Rhythmus", phTracks(1, 9, 25), [10, 11, 12, 13, 14, 15], [78, 79],
          "Uebe Satzakzent, Rhythmus und emotionale Betonung in kurzen Dialogen und Saetzen.",
          "تدرب على نبر الجملة والإيقاع والتعبير العاطفي في حوارات وجمل قصيرة.",
          PHONETIK_GUIDES.A2),
        exPh("A3", "Melodie", phTracks(1, 26, 38), [16, 17, 18, 19, 20], [79, 80],
          "Markiere Pausen, Melodie und Satzmelodie. Sprich die Dialoge im Karaoke-Modus mit.",
          "حدد الوقفات ولحن الجملة، ثم تحدث مع التسجيل في وضع الكاريوكي.",
          PHONETIK_GUIDES.A3)
      ]
    },
    {
      id: "B", title: "Vokale", titleAr: "الحروف المتحركة",
      exercises: [
        exPh("B1", "Lange und kurze Vokale", phTracks(2, 1, 14), [21, 22, 23, 24, 25, 26], [80, 81],
          "Unterscheide lange und kurze betonte Vokale. Hoere, markiere und wiederhole.",
          "ميز بين الحروف المتحركة الطويلة والقصيرة. استمع، حدد، ثم كرر.",
          PHONETIK_GUIDES.B1),
        exPh("B2", "Die Vokale a und ae", phTracks(2, 15, 22), [27, 28, 29], [81, 82],
          "Uebe a und ae in Woertern zu Jahreszeiten, Wetter und Berufen.",
          "تدرب على a و ae في كلمات عن الفصول والطقس والمهن.",
          PHONETIK_GUIDES.B2),
        exPh("B3", "Der Vokal e", phTracks(2, 23, 34), [30, 31, 32, 33, 34], [82, 83],
          "Hoere e in Durchsagen, Dialogen und Alltagssituationen.",
          "استمع لصوت e في الإعلانات والحوارات والمواقف اليومية.",
          PHONETIK_GUIDES.B3),
        exPh("B4", "Der Vokal i", phTracks(2, 35, 46), [35, 36], [83, 84],
          "Markiere betonte Silben mit langem i (ie) und uebe Zungenbrecher.",
          "حدد المقاطع المنبورة مع i الطويلة (ie) وتدرب على جمل النطق السريع.",
          PHONETIK_GUIDES.B4),
        exPh("B5", "Die Vokale o und oe", phTracks(2, 47, 58), [37, 38, 39, 40], [84, 85],
          "Hoere o/oe in Alltagssaetzen und wiederhole im Rhythmus.",
          "استمع إلى o/oe في جمل يومية وكررها بإيقاع منتظم.",
          PHONETIK_GUIDES.B5),
        exPh("B6", "Die Vokale u und ue", phTracks(2, 59, 70), [41, 42, 43, 44], [85, 86],
          "Uebe u und ue in Woertern und kurzen Dialogen.",
          "تدرب على u و ue في الكلمات والحوارات القصيرة.",
          PHONETIK_GUIDES.B6),
        exPh("B7", "Die Diphthonge au/aeu, ai/ei, eu", phTracks(2, 71, 78), [45, 46], [86, 87],
          "Hoere und sprich Diphthonge in typischen Woertern und Saetzen.",
          "استمع وانطق الأصوات المركبة في كلمات وجمل شائعة.",
          PHONETIK_GUIDES.B7),
        exPh("B8", "Der Vokaleinsatz", phTracks(2, 79, 90), [47, 48], [87, 88],
          "Markiere den Knacklaut (Vokaleinsatz) und uebe Zahlen und Zungenbrecher.",
          "حدد صوت بداية الحرف المتحرك وتدرب على الأرقام وجمل النطق.",
          PHONETIK_GUIDES.B8)
      ]
    },
    {
      id: "C", title: "Konsonanten", titleAr: "الحروف الساكنة",
      exercises: [
        exPh("C1", "Der Konsonant r", phTracks(3, 1, 14), [49, 50, 51, 52, 53], [88, 89],
          "Unterscheide vokalisiertes und konsonantisches r. Hoere und wiederhole.",
          "ميز بين r المتحولة إلى صوت حركة و r الساكنة. استمع وكرر.",
          PHONETIK_GUIDES.C1),
        exPh("C2", "Die Konsonanten p, t, k - b, d, g", phTracks(3, 15, 28), [54, 55, 56, 57], [89, 90],
          "Uebe stimmlose und stimmhafte Konsonanten am Wortanfang und in Saetzen.",
          "تدرب على الحروف المهموسة والمجهورة في بداية الكلمات وداخل الجمل.",
          PHONETIK_GUIDES.C2),
        exPh("C3", "Die Konsonanten s und z", phTracks(3, 29, 41), [58, 59, 60, 61], [90],
          "Hoere s und z in Reimen, -tion-Woertern und Alltagssaetzen.",
          "استمع إلى s و z في القوافي وكلمات -tion والجمل اليومية.",
          PHONETIK_GUIDES.C3),
        exPh("C4", "Die Konsonanten sch, ch, h", phTracks(3, 42, 57), [62, 63, 64, 65, 66, 67], [90, 91],
          "Markiere ch (ich/ach), sch und stummes h in Dialogen.",
          "حدد ch بنوعيها و sch و h الصامتة في الحوارات.",
          PHONETIK_GUIDES.C4),
        exPh("C5", "Die Konsonanten f, v, w", phTracks(3, 58, 65), [68, 69, 70, 71], [91],
          "Uebe f, v und w in Woertern und Saetzen.",
          "تدرب على f و v و w في الكلمات والجمل.",
          PHONETIK_GUIDES.C5),
        exPh("C6", "Der Konsonant l", phTracks(3, 66, 71), [72, 73], [91],
          "Hoere l in verschiedenen Silbenpositionen und wiederhole.",
          "استمع إلى l في مواضع مختلفة من المقطع وكرر.",
          PHONETIK_GUIDES.C6),
        exPh("C7", "Die Konsonanten ng und nk", phTracks(3, 72, 77), [74, 75], [91],
          "Uebe ng und nk in typischen deutschen Woertern.",
          "تدرب على ng و nk في كلمات ألمانية شائعة.",
          PHONETIK_GUIDES.C7),
        exPh("C8", "Der Konsonant j", phTracks(3, 78, 82), [76], [91],
          "Hoere j (deutsch, englisch, franzoesisch) und uebe Karaoke-Antworten mit Ja.",
          "استمع إلى نطق j حسب أصل الكلمة وتدرب على إجابات Ja مع التسجيل.",
          PHONETIK_GUIDES.C8)
      ]
    }
  ]
};
