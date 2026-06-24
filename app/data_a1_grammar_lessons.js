/* Neu aufbereitete A1-Grammatiklektionen (Skript).
   Erklärung neu geschrieben + Übungen interaktiv mit Selbstkorrektur.
   Gap-Syntax in den Items:
     {{antwort}}        -> kleines Eingabefeld, geprüft (Alternativen mit |)
     {{=ganzer satz}}   -> breites Eingabefeld, geprüft (ganzer Satz)
     {{*}}              -> freies Feld (eigene Antwort, immer ok)            */
window.A1_GRAMMAR_LESSONS = {

  /* ============================ 1.1 ============================ */
  "1.1": {
    explain: {
      idea: {
        de: "Ein Verb beschreibt eine Handlung: <b>lernen, wohnen, trinken</b>. Im Deutschen ändert sich die Endung des Verbs, je nachdem <b>wer</b> etwas macht.",
        ar: "الفعل بيوصف حدث (lernen, wohnen, trinken)، ونهاية الفعل بتتغيّر حسب الفاعل — مين اللي بيعمل الحاجة."
      },
      rules: [
        { de: "Stamm + Endung: ich <b>-e</b>, du <b>-st</b>, er/sie/es <b>-t</b>, wir <b>-en</b>, ihr <b>-t</b>, sie/Sie <b>-en</b>.",
          ar: "الجذع + النهاية: ‎ich ‑e، du ‑st، er/sie/es ‑t، wir ‑en، ihr ‑t، sie/Sie ‑en." },
        { de: "Stamm auf <b>-t / -d</b> (arbeiten, reden): vor <b>-st</b> und <b>-t</b> kommt ein extra <b>-e</b> &rarr; du arbeit<b>est</b>, er arbeit<b>et</b>.",
          ar: "لو الجذع بينتهي بـ ‑t أو ‑d بنزوّد ‑e قبل النهاية: du arbeitest، er arbeitet." },
        { de: "Stamm auf <b>-s / -ss / -ß / -z</b> (reisen, heißen, tanzen): die <b>du</b>-Form bekommt nur <b>-t</b> &rarr; du reis<b>t</b>, du heiß<b>t</b>, du tanz<b>t</b>.",
          ar: "لو الجذع بينتهي بـ ‑s/-ss/-ß/-z نهاية du بتبقى ‑t بس: du reist، du heißt، du tanzt." },
        { de: "<b>sein</b> ist unregelmäßig: ich <b>bin</b>, du <b>bist</b>, er/sie/es <b>ist</b>, wir <b>sind</b>, ihr <b>seid</b>, sie/Sie <b>sind</b>.",
          ar: "الفعل sein شاذ: ich bin، du bist، er ist، wir sind، ihr seid، sie sind." }
      ],
      examples: [
        "lernen: ich <b>lerne</b> · du <b>lernst</b> · er <b>lernt</b> · wir <b>lernen</b> · ihr <b>lernt</b> · sie <b>lernen</b>",
        "arbeiten: du <b>arbeitest</b> · er <b>arbeitet</b> · ihr <b>arbeitet</b>",
        "heißen: du <b>heißt</b> · reisen: du <b>reist</b> · tanzen: du <b>tanzt</b>",
        "sein: ich <b>bin</b> · du <b>bist</b> · er <b>ist</b> · wir <b>sind</b>"
      ],
      mistake: {
        de: "Falsch: <s>du lernen</s>, <s>du arbeitst</s>. Richtig: <b>du lernst</b>, <b>du arbeitest</b>.",
        ar: "غلط: du lernen / du arbeitst. صح: du lernst / du arbeitest."
      }
    },
    exercises: [
      {
        title: "Übung 1",
        instruction: { de: "Ergänze die Verb-Endung.", ar: "أكمل نهاية الفعل." },
        example: "gehen → Du geh<b>st</b> ins Kino.",
        items: [
          "a) Maria komm{{t}} aus Rom.",
          "b) Carlos komm{{t}} aus Madrid.",
          "c) Ich komm{{e}} aus {{*}}.",
          "d) Karl und Eva komm{{en}} aus Passau.",
          "e) Martin kauf{{t}} Obst.",
          "f) Maria kauf{{t}} Cola.",
          "g) Robert und Inga kauf{{en}} Eis.",
          "h) Ich kauf{{e}} Mineralwasser.",
          "i) Ich wohn{{e}} in Passau.",
          "j) Carlos wohn{{t}} auch in Passau.",
          "k) Wir wohn{{en}} in Passau.",
          "l) Ihr wohn{{t}} auch in Passau.",
          "m) Du trink{{st}} Orangensaft.",
          "n) Ihr trink{{t}} Kaffee.",
          "o) Ich trink{{e}} Bier.",
          "p) Robert trink{{t}} Mineralwasser."
        ]
      },
      {
        title: "Übung 2",
        instruction: { de: "Wähle das passende Verb und schreibe die richtige Form. Wortbank: wohnst · gehen · kommt · hört · studiert · kauft · trinken · mache · kennt · lernst · lebt", ar: "اختار الفعل المناسب من البنك واكتب التصريف الصح." },
        example: "Max komm<b>t</b> aus Köln.",
        items: [
          "a) Murat {{hört}} Musik.",
          "b) Du {{wohnst}} in Passau.",
          "c) Hanna {{lebt}} in Wien.",
          "d) Ich {{mache}} eine Pause.",
          "e) Ihr {{studiert}} in Berlin.",
          "f) Wir {{gehen}} nach Hause.",
          "g) Theo {{kennt}} Eva.",
          "h) Du {{lernst}} Deutsch.",
          "i) Eva {{kauft}} ein Eis.",
          "j) Wir {{trinken}} Saft."
        ]
      },
      {
        title: "Übung 3",
        instruction: { de: "Ergänze die Endungen (Frage und Antwort).", ar: "أكمل النهايات في السؤال والإجابة." },
        example: "kaufen → Lena kauf<b>t</b> Cola. Und du? – Ich kauf<b>e</b> Saft.",
        items: [
          "a) kommen: Hatem komm{{t}} aus Kairo. Und du? – Ich komm{{e}} aus {{*}}.",
          "b) trinken: Ich trink{{e}} Kaffee. Und du? – Ich trink{{e}} Wasser.",
          "c) wohnen: Maria wohn{{t}} in Rom. Und du? – Ich wohn{{e}} in {{*}}.",
          "d) fragen: Wir frag{{en}} Frau Lehmann. Und du? – Ich frag{{e}} Theo.",
          "e) studieren: Paul studier{{t}} in München. Und du? – Ich studier{{e}} auch in München.",
          "f) gehen: Ich geh{{e}} nach Hause. Und du? – Ich geh{{e}} auch nach Hause."
        ]
      },
      {
        title: "Übung 4",
        instruction: { de: "Verben auf -t/-d und -s/-ß: Ergänze die Endungen.", ar: "أفعال تنتهي بـ ‑t/-d و‑s/-ß: أكمل النهايات." },
        example: "arbeiten → Du arbeit<b>est</b>. · heißen → Du heiß<b>t</b>.",
        items: [
          "a) Ich red{{e}} mit Paul.",
          "b) Du red{{est}} mit Klaus.",
          "c) Wir red{{en}} mit Maria.",
          "d) Paul red{{et}} mit Eva.",
          "e) Der Student antwort{{et}}.",
          "f) Ich antwort{{e}} Carlos.",
          "g) Du antwort{{est}} Maria.",
          "h) Ihr antwort{{et}} nicht.",
          "i) Wir reis{{en}} nach Spanien.",
          "j) Ich reis{{e}} nach Polen.",
          "k) Du reis{{t}} nach Frankreich.",
          "l) Ihr reis{{t}} nach Kanada.",
          "m) Die Studentin heiß{{t}} Elena.",
          "n) Der Student heiß{{t}} Carlos.",
          "o) Du heiß{{t}} {{*}}.",
          "p) Ich heiß{{e}} {{*}}."
        ]
      },
      {
        title: "Übung 5",
        instruction: { de: "Ergänze die Endungen für alle Personen.", ar: "أكمل النهايات لكل الضمائر." },
        items: [
          "a) Ich studier{{e}}. · Max studier{{t}}. · Wir studier{{en}}. · Eva studier{{t}}. · Paul und Maria studier{{en}}. · Ihr studier{{t}}.",
          "b) Ihr arbeit{{et}}. · Lena und Hanna arbeit{{en}}. · Wir arbeit{{en}}. · Du arbeit{{est}}. · Ich arbeit{{e}}. · Max arbeit{{et}}.",
          "c) Wir reis{{en}} nach Prag. · Ich reis{{e}}. · Carlos reis{{t}}. · Ihr reis{{t}}. · Du reis{{t}}. · Lena und Theo reis{{en}}.",
          "d) Thomas und Eva red{{en}} mit Lena. · Du red{{est}}. · Ich red{{e}}. · Hanna red{{et}}. · Ihr red{{et}}. · Wir red{{en}}."
        ]
      },
      {
        title: "Übung 6",
        instruction: { de: "Ergänze das Verb <b>sein</b>.", ar: "أكمل الفعل sein." },
        example: "Paul und Eva <b>sind</b> im Supermarkt.",
        items: [
          "a) Max {{ist}} im Kino.",
          "b) Du {{bist}} in Berlin.",
          "c) Wir {{sind}} im Hotel.",
          "d) Paul und Jana {{sind}} zu Hause.",
          "e) Ihr {{seid}} im Bus.",
          "f) Ich {{bin}} im Deutschkurs."
        ]
      },
      {
        title: "Übung 7",
        instruction: { de: "Ergänze das Verb <b>sein</b>.", ar: "أكمل الفعل sein." },
        items: [
          "a) Julia und Maria {{sind}} in Italien.",
          "b) Du {{bist}} hier.",
          "c) Wir {{sind}} im Supermarkt.",
          "d) Ihr {{seid}} nicht in Rom.",
          "e) Lena {{ist}} zu Hause.",
          "f) Carlos {{ist}} Spanier.",
          "g) Ihr {{seid}} im Bus.",
          "h) Ich {{bin}} im Deutschkurs.",
          "i) Du {{bist}} nett.",
          "j) Pedro {{ist}} krank."
        ]
      }
    ]
  },

  /* ============================ 1.2 ============================ */
  "1.2": {
    explain: {
      idea: {
        de: "Personalpronomen ersetzen einen Namen oder ein Nomen, damit man ihn nicht wiederholen muss: <b>Maria → sie</b>, <b>der Tisch → er</b>.",
        ar: "ضمائر الفاعل بتحل محل الاسم عشان مانكررش الاسم: ماريا → sie، الطاولة (der Tisch) → er."
      },
      rules: [
        { de: "Eine Person: <b>ich</b> (ich selbst), <b>du</b> (eine bekannte Person), <b>er/sie/es</b> (über jemanden).",
          ar: "شخص واحد: ich (أنا)، du (شخص بتكلمه)، er/sie/es (بتتكلم عن حد)." },
        { de: "Mehrere: <b>wir</b> (ich + andere), <b>ihr</b> (mehrere bekannte Personen), <b>sie</b> (über mehrere).",
          ar: "أكتر من واحد: wir (أنا + ناس)، ihr (ناس بتكلمهم)، sie (بتتكلم عنهم)." },
        { de: "Das Pronomen für ein Nomen kommt vom <b>Artikel</b>: der → <b>er</b>, die → <b>sie</b>, das → <b>es</b>.",
          ar: "ضمير الاسم بييجي من أداة التعريف: der → er، die → sie، das → es." },
        { de: "Höflich ist immer <b>Sie</b> (groß) mit der Verbform wie bei sie-Plural.",
          ar: "الصيغة الرسمية دايمًا Sie بحرف كبير، والفعل زي sie الجمع." }
      ],
      examples: [
        "Maria kommt aus Italien. → <b>Sie</b> kommt aus Italien.",
        "Carlos lernt Deutsch. → <b>Er</b> lernt Deutsch.",
        "Das Kind spielt. → <b>Es</b> spielt.",
        "Anna und Max wohnen hier. → <b>Sie</b> wohnen hier."
      ],
      mistake: {
        de: "Nicht raten: lerne das Nomen mit Artikel. <b>das Mädchen → es</b> (nicht „sie“), weil der Artikel <b>das</b> ist.",
        ar: "ماتخمنش: احفظ الاسم مع أداته. das Mädchen → es (مش sie) لأن الأداة das."
      }
    },
    exercises: [
      {
        title: "Übung 1",
        instruction: { de: "Antworte mit dem richtigen Personalpronomen.", ar: "جاوب بضمير الفاعل الصح." },
        example: "Carlos – hören – Musik → Hört Carlos Musik? – Ja, <b>er</b> hört Musik.",
        items: [
          "a) Arbeitet Frau Weiß? – Ja, {{sie}} arbeitet.",
          "b) Redet Peter? – Ja, {{er}} redet.",
          "c) Lernt ihr? – Ja, {{wir}} lernen.",
          "d) Studierst du? – Ja, {{ich}} studiere.",
          "e) Trinkt ihr Saft? – Ja, {{wir}} trinken Saft.",
          "f) Tanzen Eva und Lisa? – Ja, {{sie}} tanzen."
        ]
      },
      {
        title: "Übung 2",
        instruction: { de: "Ergänze Pronomen (und Verb).", ar: "أكمل الضمير (والفعل)." },
        items: [
          "a) Du lernst doch Deutsch, oder? – Ja, {{ich}} lerne Deutsch.",
          "b) Du gehst doch jetzt nach Hause, oder? – Ja, {{ich}} {{gehe}} nach Hause.",
          "c) Carlos lernt doch auch Deutsch, oder? – Ja, {{er}} {{lernt}} auch Deutsch.",
          "d) Maria kommt doch aus Italien, oder? – Ja, {{sie}} {{kommt}} aus Italien.",
          "e) Ihr studiert doch in München, oder? – Ja, {{wir}} {{studieren}} in München.",
          "f) Eva und Max wohnen doch in Köln, oder? – Ja, {{sie}} {{wohnen}} in Köln."
        ]
      },
      {
        title: "Übung 3",
        instruction: { de: "Ergänze Verb oder Pronomen.", ar: "أكمل الفعل أو الضمير." },
        items: [
          "a) Herr Schneider wohn{{t}} in München. Er ist Lehrer.",
          "b) Herr Schneider trinkt Wasser. {{Er}} trinkt kein Bier.",
          "c) Wohnt Herr Schneider in München? – Ja, {{er}} {{wohnt}} in München.",
          "d) Was {{ist}} Herr Schneider von Beruf? – {{Er}} {{ist}} Lehrer.",
          "e) Wie heißt die Frau? – {{Sie}} {{heißt}} Frau Berg.",
          "f) Frau Berg {{wohnt}} in Köln. {{Sie}} ist Reporterin.",
          "g) Wo {{wohnt}} Frau Berg? – {{Sie}} {{wohnt}} in Köln.",
          "h) Was ist {{sie}} von Beruf? – {{Sie}} {{ist}} Reporterin."
        ]
      },
      {
        title: "Übung 4",
        instruction: { de: "Antworte mit dem richtigen Personalpronomen.", ar: "جاوب بالضمير الصح." },
        example: "Wo wohnt Carlos? – <b>Er</b> wohnt in Rom.",
        items: [
          "a) Wie heißt die Studentin? – {{Sie}} heißt Maria.",
          "b) Was trinkt Herr Klein? – {{Er}} trinkt Orangensaft.",
          "c) Was studieren Max und Anna? – {{Sie}} studieren Jura.",
          "d) Wo wohnt ihr? – {{Wir}} wohnen in Passau.",
          "e) Was bist du von Beruf? – {{Ich}} bin Reporter."
        ]
      }
    ]
  },

  /* ============================ 1.3 ============================ */
  "1.3": {
    explain: {
      idea: {
        de: "Im deutschen Satz hat das <b>konjugierte Verb</b> einen festen Platz. Das ist die wichtigste Regel der Wortstellung.",
        ar: "في الجملة الألمانية الفعل المصرّف ليه مكان ثابت. دي أهم قاعدة في ترتيب الجملة."
      },
      rules: [
        { de: "<b>Aussagesatz</b>: Verb auf <b>Position 2</b>. Position 1 kann das Subjekt oder eine Angabe sein (heute, in Rom …).",
          ar: "الجملة الخبرية: الفعل في المركز 2. المركز 1 ممكن يكون الفاعل أو ظرف (heute، in Rom …)." },
        { de: "<b>W-Frage</b>: Fragewort auf Position 1, Verb auf Position 2 (Woher kommst du?).",
          ar: "سؤال بأداة استفهام: الأداة في المركز 1 والفعل في المركز 2 (Woher kommst du?)." },
        { de: "<b>Ja/Nein-Frage</b>: Verb auf <b>Position 1</b> (Kommst du aus Rom?).",
          ar: "سؤال نعم/لا: الفعل في المركز 1 (Kommst du aus Rom?)." },
        { de: "Richtung: <b>wo?</b> = Ort (in Wien), <b>wohin?</b> = Ziel (nach Rom), <b>woher?</b> = Herkunft (aus Kairo). Antwort auf eine Verneinung mit <b>Doch</b>.",
          ar: "wo? مكان (in Wien)، wohin? اتجاه (nach Rom)، woher? أصل (aus Kairo). الرد على سؤال منفي بـ Doch." }
      ],
      examples: [
        "<b>Maria kommt</b> aus Rom. → <b>Aus Rom kommt</b> Maria. (Verb bleibt Position 2)",
        "<b>Woher kommt</b> Maria? – Aus Rom.",
        "<b>Kommt</b> Maria aus Rom? – Ja.",
        "Studierst du nicht? – <b>Doch</b>, ich studiere."
      ],
      mistake: {
        de: "Falsch: <s>Heute ich wohne in Köln.</s> Richtig: <b>Heute wohne ich</b> in Köln. Verb bleibt Position 2.",
        ar: "غلط: Heute ich wohne in Köln. صح: Heute wohne ich in Köln — الفعل يفضل في المركز 2."
      }
    },
    exercises: [
      {
        title: "Übung 1",
        instruction: { de: "Ergänze die Verb-Endung.", ar: "أكمل نهاية الفعل." },
        items: [
          "a) Ich komm{{e}} morgen.",
          "b) Maria studier{{t}} Informatik.",
          "c) Du wohn{{st}} in Passau.",
          "d) Wir trink{{en}} Saft.",
          "e) Ihr studier{{t}} in Passau.",
          "f) Carlos kauf{{t}} Obst."
        ]
      },
      {
        title: "Übung 2",
        instruction: { de: "Beginne den Satz mit der Angabe/dem Objekt. Das Verb bleibt auf Position 2.", ar: "ابدأ الجملة بالظرف/المفعول، والفعل يفضل في المركز 2." },
        example: "Clara wohnt in Wien. → In Wien wohnt Clara.",
        items: [
          "a) Wir hören Musik. → {{=Musik hören wir}}",
          "b) Max und Eva reisen nach Irland. → {{=Nach Irland reisen Max und Eva}}",
          "c) Wir kaufen Brot. → {{=Brot kaufen wir}}",
          "d) Herr Berg arbeitet in München. → {{=In München arbeitet Herr Berg}}",
          "e) Dora kommt aus Ungarn. → {{=Aus Ungarn kommt Dora}}",
          "f) Ich schreibe eine SMS. → {{=Eine SMS schreibe ich}}",
          "g) Lena studiert in Wien. → {{=In Wien studiert Lena}}",
          "h) Du bist zu Hause. → {{=Zu Hause bist du}}"
        ]
      },
      {
        title: "Übung 3",
        instruction: { de: "Ergänze das Fragewort und das Verb.", ar: "أكمل أداة الاستفهام والفعل." },
        example: "Was machst du? – Ich lerne Deutsch.",
        items: [
          "a) {{Wer}} kauft Brot? – Carlos {{kauft}} Brot.",
          "b) {{Wie}} heißt die Lehrerin? – Sie {{heißt}} Frau Lehmann.",
          "c) {{Was}} trinkt Paul? – Paul {{trinkt}} Bier.",
          "d) {{Wer}} wohnt in Passau? – Peter und Maria {{wohnen}} in Passau.",
          "e) {{Was}} studiert ihr? – {{Wir}} studieren Jura.",
          "f) {{Wer}} lernt Deutsch? – Wir {{lernen}} Deutsch.",
          "g) {{Wie}} alt ist Thomas? – {{Er}} {{ist}} 20 Jahre alt.",
          "h) {{Wie}} spät ist es? – Es {{ist}} jetzt 12:00 Uhr."
        ]
      },
      {
        title: "Übung 4",
        instruction: { de: "Ergänze das Fragewort (was / wer / wo / woher) und die Endungen.", ar: "أكمل أداة الاستفهام (was/wer/wo/woher) والنهايات." },
        items: [
          "a) {{Was}} ist das? – Das ist Käse.",
          "a) {{Wer}} kauft Käse? – Peter kauft Käse.",
          "a) {{Wo}} kauft Peter Käse? – Im Supermarkt.",
          "a) {{Woher}} komm{{t}} der Käse? – Aus Frankreich.",
          "c) {{Was}} ist das? – Das {{ist}} Brot.",
          "c) {{Wer}} kauf{{t}} Brot? – Paul und Maria kauf{{en}} Brot.",
          "c) {{Wo}} kauf{{en}} Paul und Maria Brot? – Im Supermarkt."
        ]
      },
      {
        title: "Übung 4 · wo / wohin / woher",
        instruction: { de: "Ergänze Verb-Endung und Präposition (in / zu / nach / aus / von).", ar: "أكمل نهاية الفعل وحرف الجر (in/zu/nach/aus/von)." },
        items: [
          "wo? – Max wohn{{t}} {{in}} Wien.",
          "wo? – Lisa arbeit{{et}} {{zu}} Hause.",
          "wo? – Wir studier{{en}} {{in}} Zürich.",
          "wohin? – Wir reis{{en}} {{nach}} Rom.",
          "wohin? – Du flieg{{st}} {{nach}} Japan.",
          "wohin? – Jana geh{{t}} {{nach}} Hause.",
          "woher? – Ich komm{{e}} {{von}} zu Hause.",
          "woher? – Ihr komm{{t}} {{aus}} Syrien.",
          "woher? – Hatem komm{{t}} {{aus}} Kairo."
        ]
      },
      {
        title: "Übung 5",
        instruction: { de: "Ergänze: wo – wohin – woher.", ar: "أكمل: wo – wohin – woher." },
        items: [
          "a) {{Wo}} studierst du?",
          "b) {{Wohin}} gehst du?",
          "c) {{Wo}} wohnst du?",
          "d) {{Woher}} kommst du?",
          "e) {{Wo}} arbeitest du?",
          "f) {{Wo}} bist du?"
        ]
      },
      {
        title: "Übung 6",
        instruction: { de: "Antworte mit „Ja, …“. Denk an du → ich, ihr → wir.", ar: "جاوب بـ Ja. خلي بالك du → ich، ihr → wir." },
        example: "Bist du Student*in? → Ja, ich bin Student*in.",
        items: [
          "a) Fragst du Lisa? → {{=Ja, ich frage Lisa}}",
          "b) Reist du nach Italien? → {{=Ja, ich reise nach Italien}}",
          "c) Arbeitest du mit Hatem? → {{=Ja, ich arbeite mit Hatem}}",
          "d) Tanzt du gern? → {{=Ja, ich tanze gern}}",
          "e) Kaufst du Butter? → {{=Ja, ich kaufe Butter}}",
          "f) Gehst du nach Hause? → {{=Ja, ich gehe nach Hause}}",
          "g) Studiert ihr in Wien? → {{=Ja, wir studieren in Wien}}",
          "h) Lernt ihr Deutsch? → {{=Ja, wir lernen Deutsch}}",
          "i) Redet ihr mit Paul? → {{=Ja, wir reden mit Paul}}",
          "j) Wohnt ihr in Passau? → {{=Ja, wir wohnen in Passau}}",
          "k) Fliegt ihr nach Paris? → {{=Ja, wir fliegen nach Paris}}",
          "l) Seid ihr zu Hause? → {{=Ja, wir sind zu Hause}}"
        ]
      },
      {
        title: "Übung 7",
        instruction: { de: "Antworte mit „Nein, …“ und der Information in Klammern.", ar: "جاوب بـ Nein والمعلومة اللي بين القوسين." },
        example: "Bestellst du Tee? (Kaffee) → Nein, ich bestelle Kaffee.",
        items: [
          "a) Trinkt ihr Cola? (Orangensaft) → {{=Nein, wir trinken Orangensaft}}",
          "b) Arbeitest du in Berlin? (Köln) → {{=Nein, ich arbeite in Köln}}",
          "c) Kommt ihr aus Österreich? (Spanien) → {{=Nein, wir kommen aus Spanien}}",
          "d) Antwortest du? (nicht) → {{=Nein, ich antworte nicht}}",
          "e) Geht ihr ins Kino? (nach Hause) → {{=Nein, wir gehen nach Hause}}",
          "f) Kaufst du Käse? (Wurst) → {{=Nein, ich kaufe Wurst}}",
          "g) Studiert ihr in Wien? (Passau) → {{=Nein, wir studieren in Passau}}",
          "h) Fliegst du nach Tokio? (Kairo) → {{=Nein, ich fliege nach Kairo}}"
        ]
      },
      {
        title: "Übung 8",
        instruction: { de: "Antworte mit Ja / Nein / Doch. Bei einer verneinten Frage und + antwortest du mit <b>Doch</b>.", ar: "جاوب بـ Ja/Nein/Doch. لو السؤال منفي والإشارة +، الرد يبقى Doch." },
        items: [
          "a) Studiert Maria Mathematik? (+) → {{=Ja, sie studiert Mathematik}}",
          "b) Kommt Carlos aus London? (–) → {{=Nein, er kommt nicht aus London}}",
          "c) Reist du nach England? (+) → {{=Ja, ich reise nach England}}",
          "d) Lernst du nicht Deutsch? (+) → {{=Doch, ich lerne Deutsch}}",
          "e) Kommst du nicht aus Tokio? (–) → {{=Nein, ich komme nicht aus Tokio}}",
          "f) Gehst du nach Hause? (–) → {{=Nein, ich gehe nicht nach Hause}}",
          "g) Trinkst du Tee? (+) → {{=Ja, ich trinke Tee}}",
          "h) Arbeitest du nicht in München? (–) → {{=Nein, ich arbeite nicht in München}}",
          "i) Gehst du ins Kino? (–) → {{=Nein, ich gehe nicht ins Kino}}",
          "j) Studieren Robert und Eva Jura? (+) → {{=Ja, sie studieren Jura}}"
        ]
      }
    ]
  }

};
