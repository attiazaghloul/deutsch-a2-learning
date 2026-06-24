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
  },

  /* ============================ 2.1 ============================ */
  "2.1": {
    explain: {
      idea: { de: "<b>Starke Verben</b> ändern ihren Stammvokal – meistens nur bei <b>du</b> und <b>er/sie/es</b>.", ar: "الأفعال القوية بتغيّر حرف العلة في الجذع — غالبًا مع du و er/sie/es بس." },
      rules: [
        { de: "<b>a &rarr; ä</b>: fahren &rarr; du fährst, er fährt (auch halten, schlafen, tragen, waschen, braten).", ar: "a تتحوّل ä: fahren ← du fährst." },
        { de: "<b>e &rarr; i</b>: essen &rarr; du isst, geben &rarr; du gibst, nehmen &rarr; du nimmst, sprechen &rarr; du sprichst, helfen &rarr; du hilfst.", ar: "e تتحوّل i: nehmen ← du nimmst." },
        { de: "<b>e &rarr; ie</b>: lesen &rarr; du liest, sehen &rarr; du siehst. <b>au &rarr; äu</b>: laufen &rarr; du läufst.", ar: "e تتحوّل ie: lesen ← du liest." },
        { de: "Bei <b>ich, wir, ihr, sie/Sie</b> bleibt der Vokal normal.", ar: "مع ich/wir/ihr/sie الحرف بيفضل زي ما هو." }
      ],
      examples: ["fahren: ich fahre · du <b>fährst</b> · er <b>fährt</b>", "nehmen: du <b>nimmst</b> · sprechen: du <b>sprichst</b>", "lesen: du <b>liest</b> · laufen: du <b>läufst</b>"],
      mistake: { de: "Falsch: <s>du fahrst</s>, <s>du esst</s>. Richtig: <b>du fährst</b>, <b>du isst</b>.", ar: "غلط: du fahrst / du esst. صح: du fährst / du isst." }
    },
    exercises: [
      { title: "Übung 1", instruction: { de: "Antworte mit „Nein …“ und der starken Verbform.", ar: "جاوب بـ Nein والشكل القوي للفعل." }, example: "Schreibt Peter? (reden) → Nein, er redet.",
        items: ["a) Trinkt Inge? (essen) → Nein, sie {{isst}}.", "b) Lernt Christian? (schlafen) → Nein, er {{schläft}}.", "c) Geht Lena? (laufen) → Nein, sie {{läuft}}.", "d) Arbeitet Klaus? (Zeitung lesen) → Nein, er {{liest}} Zeitung.", "e) Bleibt Claudia? (nach Hause fahren) → Nein, sie {{fährt}} nach Hause."] },
      { title: "Übung 2", instruction: { de: "Ergänze die starke Verbform.", ar: "أكمل الشكل القوي للفعل." }, example: "Ich schlafe lange. – Carlos schläft nicht lange.",
        items: ["a) Ich fahre nach München. – Eva {{fährt}} nach Bremen.", "b) Ich spreche langsam. – Du {{sprichst}} schnell.", "c) Ich lese Zeitung. – Max {{liest}} ein Deutschbuch.", "d) Ich trage braune Schuhe. – Sandra {{trägt}} schwarze Schuhe.", "e) Ich esse Kuchen. – Pavel {{isst}} Obst.", "f) Ich helfe Peter. – Du {{hilfst}} Julia.", "g) Ich laufe nicht schnell. – Laura {{läuft}} auch nicht schnell."] },
      { title: "Übung 3", instruction: { de: "Stelle die Frage mit <b>du</b> (starke Form!).", ar: "اسأل بصيغة du (بالشكل القوي)." }, example: "Ich wohne in Passau. Und du? → Wohnst du auch in Passau?",
        items: ["a) Ich lese viel. Und du? → {{=Liest du auch viel|Liest du viel}}", "b) Ich esse gerne Eis. Und du? → {{=Isst du auch gerne Eis|Isst du gerne Eis}}", "c) Ich schlafe lange. Und du? → {{=Schläfst du auch lange|Schläfst du lange}}", "d) Ich helfe Klaus. Und du? → {{=Hilfst du auch Klaus|Hilfst du Klaus}}", "e) Ich laufe im Park. Und du? → {{=Läufst du auch im Park|Läufst du im Park}}", "f) Ich fahre Fahrrad. Und du? → {{=Fährst du auch Fahrrad|Fährst du Fahrrad}}", "g) Ich nehme eine Pizza. Und du? → {{=Nimmst du auch eine Pizza|Nimmst du eine Pizza}}", "h) Ich spreche mit Max. Und du? → {{=Sprichst du auch mit Max|Sprichst du mit Max}}"] }
    ]
  },

  /* ============================ 2.2 ============================ */
  "2.2": {
    explain: {
      idea: { de: "Jedes Nomen hat einen <b>Artikel</b>: der (m), die (f), das (n), im Plural immer <b>die</b>. Lerne das Nomen immer mit Artikel!", ar: "كل اسم ليه أداة: der/die/das، وفي الجمع دايمًا die. احفظ الاسم مع أداته." },
      rules: [
        { de: "Bestimmt: <b>der / die / das</b> · Plural <b>die</b>.", ar: "معرفة: der/die/das، جمع die." },
        { de: "Unbestimmt: <b>ein / eine / ein</b> · Plural: <b>kein Artikel</b> (Das sind Bücher).", ar: "نكرة: ein/eine/ein، وفي الجمع بدون أداة." },
        { de: "Verneinung: <b>nicht</b> beim Verb/Adjektiv, <b>kein/keine</b> vor einem Nomen.", ar: "النفي: nicht مع الفعل/الصفة، kein/keine قبل الاسم." }
      ],
      examples: ["<b>der</b> Tisch &rarr; <b>ein</b> Tisch", "<b>die</b> Tasche &rarr; <b>eine</b> Tasche", "Ist das ein Apfel? – Nein, das ist <b>kein</b> Apfel."],
      mistake: { de: "Nicht nur „Buch“ lernen, sondern <b>das Buch</b>. Sonst fehlt dir später der Akkusativ/Dativ.", ar: "ماتحفظش „Buch“ بس، احفظ das Buch." }
    },
    exercises: [
      { title: "Übung 1", instruction: { de: "Schreibe den richtigen Artikel: der / die / das.", ar: "اكتب الأداة الصح: der/die/das." },
        items: ["a) {{das}} Hotel", "b) {{das}} Bier", "c) {{die}} Milch", "d) {{der}} Orangensaft", "e) {{der}} Stift", "f) {{die}} Flasche", "g) {{das}} Brot", "h) {{die}} Schule", "i) {{der}} Supermarkt", "j) {{das}} Kino", "k) {{der}} Freund", "l) {{die}} Professorin"] },
      { title: "Übung 2", instruction: { de: "Ergänze Singular-Artikel und Pluralform.", ar: "أكمل أداة المفرد وصيغة الجمع." }, example: "das Brot – die Brote",
        items: ["a) {{der}} Lehrer – die {{Lehrer}}", "b) {{die}} Übung – die {{Übungen}}", "c) {{die}} Frage – die {{Fragen}}", "d) {{das}} Fahrrad – die {{Fahrräder}}", "e) {{die}} Schule – die {{Schulen}}", "f) {{die}} Stadt – die {{Städte}}", "g) {{der}} Baum – die {{Bäume}}", "h) {{der}} Beruf – die {{Berufe}}"] },
      { title: "Übung 3", instruction: { de: "Schreibe eigene Nomen im Plural (mit „die …“).", ar: "اكتب أسماء من عندك في الجمع." }, example: "die Tomate – die Tomaten",
        items: ["1) {{*}}", "2) {{*}}", "3) {{*}}", "4) {{*}}"] },
      { title: "Übung 4", instruction: { de: "Was ist das? Antworte mit ein/eine – im Plural ohne Artikel.", ar: "Was ist das? جاوب بـ ein/eine، وفي الجمع بدون أداة." }, example: "(Tisch) → Das ist ein Tisch.",
        items: ["a) (Stuhl) → Das ist {{ein}} Stuhl.", "b) (Tasche) → Das ist {{eine}} Tasche.", "c) (Mappe) → Das ist {{eine}} Mappe.", "d) (Stifte) → {{=Das sind Stifte}}", "e) (Tasse) → Das ist {{eine}} Tasse.", "f) (Computer) → Das ist {{ein}} Computer.", "g) (Jacke) → Das ist {{eine}} Jacke.", "h) (Äpfel) → {{=Das sind Äpfel}}", "i) (Tür) → Das ist {{eine}} Tür.", "j) (Deutschbücher) → {{=Das sind Deutschbücher}}", "k) (Blumen) → {{=Das sind Blumen}}", "l) (Schuhe) → {{=Das sind Schuhe}}"] },
      { title: "Übung 5", instruction: { de: "Antworte verneint mit <b>nicht</b>.", ar: "جاوب بالنفي باستخدام nicht." }, example: "Lebst du in Köln? → Nein, ich lebe nicht in Köln.",
        items: ["a) Reist du nach Hamburg? → {{=Nein, ich reise nicht nach Hamburg}}", "b) Kommt Carlos aus Rom? → {{=Nein, er kommt nicht aus Rom}}", "c) Besuchst du Klaus? → {{=Nein, ich besuche Klaus nicht}}", "d) Bist du krank? → {{=Nein, ich bin nicht krank}}", "e) Gehst du ins Kino? → {{=Nein, ich gehe nicht ins Kino}}", "f) Lernt Carlos viel? → {{=Nein, er lernt nicht viel}}"] },
      { title: "Übung 6", instruction: { de: "Verneine mit <b>kein/keine</b> und ergänze frei.", ar: "انفِ بـ kein/keine وأكمل بحرية." },
        items: ["a) Ist das Brot? – Nein, das ist {{kein}} Brot. Das ist {{*}}.", "b) Ist das Suppe? – Nein, das ist {{keine}} Suppe. Das ist {{*}}.", "c) Ist das Milch? – Nein, das ist {{keine}} Milch. Das ist {{*}}.", "d) Ist das Apfelsaft? – Nein, das ist {{kein}} Apfelsaft. Das ist {{*}}."] }
    ]
  },

  /* ============================ 2.3 ============================ */
  "2.3": {
    explain: {
      idea: { de: "Im Deutschen gibt es eine <b>persönliche</b> und eine <b>höfliche</b> Anrede.", ar: "في الألماني فيه مخاطبة شخصية وأخرى رسمية." },
      rules: [
        { de: "<b>du</b> (eine bekannte Person) &rarr; Verb auf <b>-st</b>.", ar: "du لشخص واحد بتعرفه ← الفعل ‑st." },
        { de: "<b>ihr</b> (mehrere bekannte Personen) &rarr; Verb auf <b>-t</b>.", ar: "ihr لمجموعة بتعرفهم ← الفعل ‑t." },
        { de: "<b>Sie</b> (fremde Erwachsene, formell, Sg. + Pl.) &rarr; Verb auf <b>-en</b>.", ar: "Sie للرسمي (مفرد وجمع) ← الفعل ‑en." }
      ],
      examples: ["Wo wohn<b>st</b> du?", "Wo wohn<b>t</b> ihr?", "Wo wohn<b>en</b> Sie?"],
      mistake: { de: "Nicht <s>Wo wohnst Sie?</s> – Bei <b>Sie</b> heißt das Verb <b>wohnen</b>.", ar: "غلط: Wo wohnst Sie? – مع Sie الفعل wohnen." }
    },
    exercises: [
      { title: "Übung 1", instruction: { de: "Ergänze Verb-Endung und Pronomen (du / Sie / ihr).", ar: "أكمل نهاية الفعل والضمير." },
        items: ["a) Carlos (du): Wie heiß{{t}} {{du}}? · Lern{{st}} {{du}} Deutsch? · Komm{{st}} {{du}} aus Madrid? · Wohn{{st}} {{du}} in Passau? · Trink{{st}} {{du}} Bier?", "b) Frau Mayer (Sie): Wie heiß{{en}} {{Sie}}? · Arbeit{{en}} {{Sie}} in Berlin? · Komm{{en}} {{Sie}} aus Köln? · Wohn{{en}} {{Sie}} in Dresden? · Trink{{en}} {{Sie}} Wein?", "c) Anna und Maria (ihr): Wie heiß{{t}} {{ihr}}? · Studier{{t}} {{ihr}} in Passau? · Lern{{t}} {{ihr}} Deutsch? · Komm{{t}} {{ihr}} aus Italien? · Trink{{t}} {{ihr}} Wein?", "d) Frau Müller und Frau Berg (Sie): Wo wohn{{en}} {{Sie}}? · Fahr{{en}} {{Sie}} nach Frankfurt? · Lern{{en}} {{Sie}} Deutsch? · Geh{{en}} {{Sie}} ins Kino? · Trink{{en}} {{Sie}} Bier?"] },
      { title: "Übung 2", instruction: { de: "Maria fragt – ergänze Verb-Endung und Pronomen.", ar: "ماريا بتسأل — أكمل النهاية والضمير." },
        items: ["a) Was studier{{st}} {{du}}, Robert?", "b) Arbeit{{en}} {{Sie}} in München, Herr Berg?", "c) Trink{{st}} {{du}} Wein, Carlos?", "d) Hallo Anna, hallo Eva! Komm{{t}} {{ihr}}?", "e) Wohn{{en}} {{Sie}} in München, Frau Klein?", "f) Lern{{st}} {{du}} auch Englisch, Peter?", "g) Komm{{st}} {{du}}, Papa?", "h) Herr und Frau Moor, haben {{Sie}} Zeit?"] },
      { title: "Übung 3", instruction: { de: "Ergänze die Sätze.", ar: "أكمل الجمل." },
        items: ["a) Peter frag{{t}} Julia: „Studier{{st}} {{du}} Mathematik?“", "b) Der Reporter frag{{t}} Frau Weiß: „Wie heiß{{en}} {{Sie}}?“", "c) Du frag{{st}} Maria: „Geh{{st}} {{du}} ins Kino?“", "d) Paul fragt Max und Julia: „Was mach{{t}} {{ihr}} morgen?“", "e) Der Professor fragt Carlos und Peter: „Woher komm{{t}} {{ihr}}?“", "f) Ich frage Max und Robert: „Spiel{{t}} {{ihr}} Fußball?“", "g) Du frag{{st}} die Touristen: „Komm{{t}} {{ihr}} aus Wien?“"] },
      { title: "Übung 4", instruction: { de: "Ergänze die Pronomen (Sie / ich).", ar: "أكمل الضمائر." },
        items: ["Herr Klein: Entschuldigen {{Sie}}, sind {{Sie}} nicht aus England? · Carlos: Nein, {{ich}} komme aus Spanien. · Herr Klein: Ach so! Kommen {{Sie}} aus Malaga? · Carlos: Nein, {{ich}} komme aus Madrid. Und woher kommen {{Sie}}? · Herr Klein: {{Ich}} komme aus Meran. · Carlos: Ach, {{Sie}} kommen aus Italien. · Herr Klein: Ja, {{ich}} komme aus Norditalien."] }
    ]
  },

  /* ============================ 3.1 ============================ */
  "3.1": {
    explain: {
      idea: { de: "Manche <b>Endungen</b> verraten den Artikel eines Nomens.", ar: "بعض النهايات بتحدد أداة الاسم." },
      rules: [
        { de: "<b>die</b>: -ung, -heit, -keit, -schaft, -tät, -ion, -ik, -ur (die Zeitung, die Information).", ar: "die: ‑ung/-heit/-keit/-schaft/-tät/-ion/-ik/-ur." },
        { de: "<b>das</b>: -chen, -lein, -ment, -um, Infinitiv als Nomen (das Mädchen, das Lernen).", ar: "das: ‑chen/-lein/-ment/-um والمصدر كاسم." },
        { de: "<b>der</b>: -or, -ismus, -en, Monate/Tage/Tageszeiten (der Motor, der Montag, der Morgen).", ar: "der: ‑or/-ismus/-en والشهور/الأيام." }
      ],
      examples: ["<b>die</b> Wohnung, <b>die</b> Krankheit, <b>die</b> Natur", "<b>das</b> Brötchen, <b>das</b> Dokument, <b>das</b> Zentrum", "<b>der</b> Monitor, <b>der</b> Optimismus, <b>der</b> Mai"],
      mistake: { de: "Regeln helfen, sind aber nicht 100 %. Bei Unsicherheit: Artikel mit dem Wort lernen.", ar: "القواعد بتساعد بس مش 100%. لو مش متأكد احفظ الأداة مع الكلمة." }
    },
    exercises: [
      { title: "Übung 1", instruction: { de: "Schreibe den Artikel (der / die / das).", ar: "اكتب الأداة." },
        items: ["a) {{der}} Onkel", "b) {{die}} Wohnung", "c) {{der}} Wagen", "d) {{die}} Lehrerin", "e) {{das}} Tischchen", "f) {{der}} Nachbar", "g) {{das}} Brötchen", "h) {{die}} Freundin", "i) {{der}} Mai", "j) {{die}} Zeitung", "k) {{der}} Professor", "l) {{die}} Polizei", "m) {{das}} Datum", "n) {{die}} Information", "o) {{die}} Packung", "p) {{die}} Reporterin", "q) {{die}} Metzgerei", "r) {{die}} Natur", "s) {{die}} Musik", "t) {{der}} Mittwoch", "u) {{der}} Opa", "v) {{der}} Optimismus", "w) {{die}} Gesundheit", "x) {{das}} Dokument", "y) {{der}} Monitor", "z) {{die}} Fabrik", "aa) {{die}} Wirtschaft"] },
      { title: "Übung 2", instruction: { de: "Artikel bestimmen: der (mask. Nomen) · das (Infinitiv) · die (Plural).", ar: "حدد الأداة." },
        items: ["a) {{die}} Jacken", "b) {{das}} Essen", "c) {{die}} Übungen", "d) {{der}} Norden", "e) {{die}} Augen", "f) {{das}} Tanzen", "g) {{der}} Kuchen", "h) {{die}} Hosen", "i) {{das}} Lesen", "j) {{der}} Regen", "k) {{die}} Taschen", "l) {{der}} Garten", "m) {{die}} Krankheiten", "n) {{der}} Schinken", "o) {{das}} Leben", "p) {{die}} Antworten", "q) {{das}} Sprechen", "r) {{die}} Birnen", "s) {{der}} Braten"] }
    ]
  },

  /* ============================ 3.2 ============================ */
  "3.2": {
    explain: {
      idea: { de: "Ein <b>Kompositum</b> ist ein zusammengesetztes Nomen. Das <b>letzte Wort</b> (Grundwort) bestimmt Artikel und Bedeutung.", ar: "الاسم المركّب: الكلمة الأخيرة هي اللي بتحدد الأداة والمعنى." },
      rules: [
        { de: "Artikel = Artikel des <b>letzten</b> Wortes (die Kaffee + <b>die Maschine</b> = <b>die</b> Kaffeemaschine).", ar: "الأداة = أداة الكلمة الأخيرة." },
        { de: "Manchmal Fugenzeichen: <b>-s</b> (Übungsbuch), <b>-n</b> (Orangensaft), <b>-er</b> (Kindergarten).", ar: "أحيانًا حرف وصل: ‑s / ‑n / ‑er." },
        { de: "Auch Adjektiv + Nomen oder Verb + Nomen: hoch + Haus = das Hochhaus, schlafen + Tablette = die Schlaftablette.", ar: "كمان صفة+اسم أو فعل+اسم." }
      ],
      examples: ["der Kaffee + die Maschine = <b>die</b> Kaffeemaschine", "das Kind + er + der Garten = <b>der</b> Kindergarten", "waschen + die Maschine = <b>die</b> Waschmaschine"],
      mistake: { de: "Nicht den Artikel vom <b>ersten</b> Wort nehmen!", ar: "ماتاخدش أداة الكلمة الأولى." }
    },
    exercises: [
      { title: "Übung 1", instruction: { de: "Schreibe den Artikel des Kompositums (Grundwort = letztes Wort).", ar: "اكتب أداة الكلمة المركّبة." }, example: "der Computerkurs",
        items: ["a) {{das}} Wörterbuch", "b) {{der}} Staubsauger", "c) {{der}} Videorecorder", "d) {{das}} Mittagessen", "e) {{der}} Campingbus", "f) {{der}} Wasserkocher", "g) {{das}} Mineralwasser", "h) {{der}} Kühlschrank"] },
      { title: "Übung 2", instruction: { de: "Bilde das Nomen <b>mit Artikel</b>.", ar: "كوّن الاسم المركّب مع الأداة." },
        items: ["a) die Sonne + der Schirm → {{der Sonnenschirm}}", "b) die Wohnung + die Tür → {{die Wohnungstür}}", "c) die Blume + die Vase → {{die Blumenvase}}", "d) der Beruf + die Schule → {{die Berufsschule}}", "e) das Wort + das Buch → {{das Wörterbuch}}"] },
      { title: "Übung 3", instruction: { de: "Adjektiv + Nomen: bilde das Nomen mit Artikel.", ar: "صفة + اسم: كوّن الاسم مع الأداة." }, example: "hoch + das Haus → das Hochhaus",
        items: ["a) schwarz + das Brot → {{das Schwarzbrot}}", "b) groß + die Stadt → {{die Großstadt}}", "c) frisch + die Milch → {{die Frischmilch}}", "d) klein + das Kind → {{das Kleinkind}}", "e) alt + das Papier → {{das Altpapier}}"] },
      { title: "Übung 4", instruction: { de: "Verb + Nomen: bilde das passende Nomen mit Artikel.", ar: "فعل + اسم: كوّن الاسم المناسب مع الأداة." }, example: "waschen + Maschine → die Waschmaschine",
        items: ["a) fragen + Wort → {{das Fragewort}}", "b) spielen + Platz → {{der Spielplatz}}", "c) kaufen + Haus → {{das Kaufhaus}}", "d) reisen + Büro → {{das Reisebüro}}", "e) tanzen + Kurs → {{der Tanzkurs}}", "f) gehen + Weg → {{der Gehweg}}"] }
    ]
  },

  /* ============================ 3.3 ============================ */
  "3.3": {
    explain: {
      idea: { de: "Nach <b>sein</b> hat das Adjektiv <b>keine Endung</b>: „Das Auto ist neu.“", ar: "بعد الفعل sein الصفة بدون نهاية: Das Auto ist neu." },
      rules: [
        { de: "Prädikatives Adjektiv = Grundform, ohne Endung (ist klein, ist teuer).", ar: "الصفة الخبرية بدون نهاية." },
        { de: "Gegenteile lernen: gut–schlecht, billig–teuer, alt–neu, schnell–langsam.", ar: "اتعلّم الأضداد: gut–schlecht …" },
        { de: "Farben: rot, blau, grün, gelb, weiß, schwarz, braun; hell- / dunkel-.", ar: "الألوان: rot/blau/grün …" }
      ],
      examples: ["Ist das Buch dick? – Ja, es ist sehr <b>dick</b>.", "Ist der Film interessant? – Nein, er ist <b>langweilig</b>.", "Welche Farbe hat eine Kirsche? – Sie ist <b>rot</b>."],
      mistake: { de: "Kein „-e“ nach sein: <s>Das Haus ist kleine</s> &rarr; <b>Das Haus ist klein</b>.", ar: "بدون ‑e بعد sein." }
    },
    exercises: [
      { title: "Übung 1", instruction: { de: "Ergänze Pronomen (er/sie/es/sie) und Adjektiv.", ar: "أكمل الضمير والصفة." }, example: "Buch – dick → Ja, es ist sehr dick.",
        items: ["a) Haus – klein → Ja, {{es}} ist sehr {{klein}}.", "b) Frage – schwierig → Ja, {{sie}} ist sehr {{schwierig}}.", "c) Getränke – kalt → Ja, {{sie}} sind sehr {{kalt}}.", "d) Peter – faul → Ja, {{er}} ist sehr {{faul}}.", "e) Laptop – teuer → Ja, {{er}} ist sehr {{teuer}}.", "f) Miete – hoch → Ja, {{sie}} ist sehr {{hoch}}.", "g) du – krank → Ja, {{ich}} bin sehr {{krank}}.", "h) Bananen – billig → Ja, {{sie}} sind sehr {{billig}}.", "i) Tee – heiß → Ja, {{er}} ist sehr {{heiß}}.", "j) Musik – laut → Ja, {{sie}} ist sehr {{laut}}.", "k) Äpfel – sauer → Ja, {{sie}} sind sehr {{sauer}}.", "l) Paul und Eva – müde → Ja, {{sie}} sind sehr {{müde}}."] },
      { title: "Übung 2", instruction: { de: "Antworte mit dem <b>Gegenteil</b>.", ar: "جاوب بالعكس (الضد)." }, example: "Ist der Film interessant? – Nein, er ist langweilig.",
        items: ["a) Ist das Wasser warm? → Nein, es ist {{kalt}}.", "b) Ist die Milch billig? → Nein, sie ist {{teuer}}.", "c) Ist die Prüfung einfach? → Nein, sie ist {{schwierig|schwer}}.", "d) Ist Paul gesund? → Nein, er ist {{krank}}.", "e) Ist die Studentin faul? → Nein, sie ist {{fleißig}}.", "f) Ist der Herr verheiratet? → Nein, er ist {{ledig}}.", "g) Ist das Auto langsam? → Nein, es ist {{schnell}}.", "h) Ist das Wetter gut? → Nein, es ist {{schlecht}}.", "i) Ist die Übung schwierig? → Nein, sie ist {{einfach|leicht}}.", "j) Sind die Kinder leise? → Nein, sie sind {{laut}}.", "k) Ist der Apfel süß? → Nein, er ist {{sauer}}.", "l) Ist die Jacke teuer? → Nein, sie ist {{billig}}.", "m) Ist das Brot alt? → Nein, es ist {{frisch}}.", "n) Ist der Mann alt? → Nein, er ist {{jung}}.", "o) Ist das Fahrrad alt? → Nein, es ist {{neu}}.", "p) Ist die Antwort richtig? → Nein, sie ist {{falsch}}.", "q) Ist das Ei hart? → Nein, es ist {{weich}}.", "r) Bist du krank? → Nein, ich bin {{gesund}}."] },
      { title: "Übung 3", instruction: { de: "Welche Farbe? Ergänze.", ar: "أنهي اللون." }, example: "Welche Farbe hat eine Kirsche? – Sie ist rot.",
        items: ["a) Welche Farbe hat eine Gurke? → Sie ist {{grün}}.", "b) Welche Farbe hat eine Banane? → Sie ist {{gelb}}.", "c) Welche Farbe hat eine Tomate? → Sie ist {{rot}}.", "d) Welche Farbe hat der Ozean? → Er ist {{blau}}.", "e) Welche Farbe hat Milch? → Sie ist {{weiß}}.", "f) Welche Farbe hat Kaffee? → Er ist {{braun}}.", "g) Welche Farbe hat Orangensaft? → Er ist {{orange}}.", "h) Welche Farbe hat Blut? → Es ist {{rot}}."] }
    ]
  },

  /* ============================ 4.1 ============================ */
  "4.1": {
    explain: {
      idea: { de: "Manche Verben haben eine <b>Vorsilbe</b>. Sie ist entweder <b>nicht trennbar</b> oder <b>trennbar</b>.", ar: "بعض الأفعال ليها بادئة: إما غير قابلة للفصل أو قابلة." },
      rules: [
        { de: "<b>Nicht trennbar</b>: be-, emp-, ent-, er-, ge-, ver-, zer- (Peter bekommt …).", ar: "غير قابلة للفصل: be-/emp-/ent-/er-/ge-/ver-/zer-." },
        { de: "<b>Trennbar</b>: ab-, an-, auf-, aus-, ein-, mit-, vor-, zu-, zurück-, her-.", ar: "قابلة للفصل: ab-/an-/auf-/aus-/ein-/mit-/vor-/zu-/zurück-/her-." },
        { de: "Bei trennbaren Verben geht die Vorsilbe ans <b>Satzende</b>: Der Zug kommt um 18 Uhr <b>an</b>.", ar: "في الأفعال القابلة للفصل البادئة بتروح آخر الجملة." }
      ],
      examples: ["bezahlen (nicht trennbar): Du <b>bezahlst</b> die Rechnung.", "ankommen (trennbar): Der Zug <b>kommt</b> um 18 Uhr <b>an</b>.", "einkaufen: Du <b>kaufst</b> im Supermarkt <b>ein</b>."],
      mistake: { de: "Trennbar &rarr; Vorsilbe ans Ende. Nicht: <s>Ich ankomme …</s>, sondern <b>Ich komme … an</b>.", ar: "القابلة للفصل: البادئة آخر الجملة." }
    },
    exercises: [
      { title: "Übung 1", instruction: { de: "Nicht trennbare Verben – ergänze die Form.", ar: "أفعال غير قابلة للفصل." }, example: "besuchen – Max besucht die Tante.",
        items: ["a) bezahlen – Du {{bezahlst}} die Rechnung.", "b) beginnen – Der Kurs {{beginnt}} am Montag.", "c) empfehlen – Ich {{empfehle}} das Steak.", "d) entlassen – Die Firma {{entlässt}} viele Arbeiter.", "e) erklären – Der Lehrer {{erklärt}} die Grammatik.", "f) genießen – Du {{genießt}} die Freizeit.", "g) verstehen – Ich {{verstehe}} das Problem.", "h) vergessen – Paul {{vergisst}} die Hausaufgabe.", "i) verdienen – Karl {{verdient}} viel Geld.", "j) zerreißen – Maria {{zerreißt}} die Notiz."] },
      { title: "Übung 2", instruction: { de: "Trennbare Verben – Verb + Vorsilbe ans Ende.", ar: "أفعال قابلة للفصل — البادئة آخر الجملة." }, example: "abschließen – Du schließt die Tür ab.",
        items: ["a) abfahren – Der Bus {{fährt}} in 10 Minuten {{ab}}.", "b) ankreuzen – Du {{kreuzt}} die richtige Antwort {{an}}.", "c) aufstehen – Er {{steht}} um 7.00 Uhr {{auf}}.", "d) aussteigen – Ich {{steige}} in Frankfurt {{aus}}.", "e) ankommen – Der Zug {{kommt}} um 20.30 Uhr {{an}}.", "f) einladen – Ich {{lade}} Peter ins Kino {{ein}}.", "g) herstellen – Siemens {{stellt}} Waschmaschinen {{her}}.", "h) vorlesen – Die Studentin {{liest}} das Referat {{vor}}.", "i) zumachen – Du {{machst}} die Tür {{zu}}.", "j) zurückgeben – Er {{gibt}} das Buch {{zurück}}."] },
      { title: "Übung 3", instruction: { de: "Setze das passende Verb ein (Wortbank: einkaufen, mitfahren, einladen, bekommen, abfahren, zuhören, aussteigen, vorlesen, bestellen, zurückkommen, ankreuzen, erklären, vergessen, ausfüllen).", ar: "اختار الفعل المناسب من البنك." }, example: "Ich rufe Anna an.",
        items: ["a) Du {{kaufst}} im Supermarkt {{ein}}.", "b) Wir {{fahren}} morgen nicht nach München {{mit}}.", "c) Ich {{lade}} dich zum Essen {{ein}}.", "d) Klaus {{bekommt}} morgen Besuch.", "e) Der Zug {{fährt}} in fünf Minuten {{ab}}.", "f) Wir {{hören}} dem Lehrer im Deutschkurs {{zu}}.", "g) Paul {{steigt}} an der nächsten Station {{aus}}.", "i) Jana {{liest}} den Kindern eine Geschichte {{vor}}.", "j) Ich {{bestelle}} Tee mit Zitrone.", "k) Nadja {{kommt}} morgen aus Rumänien {{zurück}}.", "l) Wir {{kreuzen}} die richtige Antwort {{an}}.", "m) Der Lehrer {{erklärt}} die Grammatik.", "n) Eva {{vergisst}} oft Termine.", "o) Maria {{füllt}} das Formular {{aus}}."] }
    ]
  },

  /* ============================ 4.2 ============================ */
  "4.2": {
    explain: {
      idea: { de: "Viele Verben haben ein <b>Akkusativobjekt</b>. Nur der <b>maskuline</b> Artikel ändert sich.", ar: "أفعال كتير ليها مفعول به (Akkusativ). المذكر بس اللي بيتغيّر." },
      rules: [
        { de: "Bestimmt: <b>den</b> (m), die (f), das (n), die (Pl).", ar: "معرفة: den/die/das/die." },
        { de: "Unbestimmt: <b>einen</b> (m), eine (f), ein (n), – (Pl).", ar: "نكرة: einen/eine/ein/–." },
        { de: "Verneinung: <b>keinen</b> (m), keine (f), kein (n), keine (Pl).", ar: "النفي: keinen/keine/kein/keine." }
      ],
      examples: ["Elena isst <b>den</b> Kuchen.", "Ich esse <b>einen</b> Salat.", "Ich möchte <b>keinen</b> Apfelsaft."],
      mistake: { de: "Nur maskulin ändert sich: der &rarr; <b>den</b>, ein &rarr; <b>einen</b>. Feminin/neutral/Plural bleiben.", ar: "المذكر بس بيتغيّر: der←den، ein←einen." }
    },
    exercises: [
      { title: "Übung 1", instruction: { de: "Ergänze den bestimmten Artikel im Akkusativ.", ar: "أكمل أداة التعريف في حالة النصب." }, example: "Lehrer – fragen → Ich frage den Lehrer.",
        items: ["a) Koffer – packen → Ich packe {{den}} Koffer.", "b) Fenster – schließen → Ich schließe {{das}} Fenster.", "c) Freunde – treffen → Ich treffe {{die}} Freunde.", "d) Miete – bezahlen → Ich bezahle {{die}} Miete.", "e) Problem – verstehen → Ich verstehe {{das}} Problem.", "f) Leute – kennen → Ich kenne {{die}} Leute.", "g) Termin – aufschreiben → Ich schreibe {{den}} Termin auf.", "h) Schuhe – anziehen → Ich ziehe {{die}} Schuhe an.", "i) Formular – ausfüllen → Ich fülle {{das}} Formular aus.", "j) Text – vorlesen → Ich lese {{den}} Text vor.", "k) Kollegin – anrufen → Ich rufe {{die}} Kollegin an.", "l) Handy – aufladen → Ich lade {{das}} Handy auf."] },
      { title: "Übung 2", instruction: { de: "Ergänze Verb und Artikel. (b) = bestimmt, (u) = unbestimmt.", ar: "أكمل الفعل والأداة. (b) معرفة، (u) نكرة." },
        items: ["a) besuchen (b) → Du {{besuchst}} {{den}} Großvater.", "b) bezahlen (b) → Ihr {{bezahlt}} {{die}} Fahrkarte.", "c) buchen (u) → Maria {{bucht}} {{eine}} Reise.", "d) braten (u) → Karl {{brät}} {{ein}} Steak.", "e) kennen (b) → Ich {{kenne}} {{den}} Professor.", "f) kaufen (u) → Ihr {{kauft}} {{ein}} Deutschbuch.", "g) lernen (b) → Wir {{lernen}} {{die}} Wörter.", "h) brauchen (u) → Du {{brauchst}} {{ein}} Wörterbuch.", "i) trinken (u) → Ich {{trinke}} {{einen}} Orangensaft.", "j) verstehen (b) → Er {{versteht}} {{das}} Wort nicht.", "k) zählen (b) → Wir {{zählen}} {{die}} Stühle.", "l) bestellen (u) → Er {{bestellt}} {{ein}} Mineralwasser.", "m) lesen (b) → Du {{liest}} {{die}} Zeitung.", "n) essen (u) → Ich {{esse}} Erdbeeren. (Plural → kein Artikel)", "o) sehen (u) → Du {{siehst}} {{einen}} Film.", "p) tragen (b) → Eva {{trägt}} {{die}} Tasche.", "q) treffen (b) → Ich {{treffe}} {{die}} Freunde.", "r) haben (u) → Du {{hast}} {{eine}} Sonnenbrille.", "s) machen (b) → Sie {{macht}} {{die}} Hausaufgabe."] },
      { title: "Übung 3", instruction: { de: "Stelle das Objekt nach vorne (Verb bleibt Position 2).", ar: "حط المفعول في البداية، والفعل في المركز 2." }, example: "Den Text hier lese ich.",
        items: ["a) ein Kotelett → {{=Ein Kotelett esse ich}}", "b) eine Tasse Kaffee → {{=Eine Tasse Kaffee trinke ich}}", "c) die Banane hier → {{=Die Banane hier esse ich}}", "d) die Zeitung hier → {{=Die Zeitung hier lese ich}}", "e) Trauben → {{=Trauben esse ich}}", "f) ein Teller Suppe → {{=Einen Teller Suppe esse ich}}", "g) ein Stück Kuchen → {{=Ein Stück Kuchen esse ich}}", "h) der Döner hier → {{=Den Döner hier esse ich}}", "i) eine Portion Eis → {{=Eine Portion Eis esse ich}}", "j) Orangensaft → {{=Orangensaft trinke ich}}", "k) der Salat hier → {{=Den Salat hier esse ich}}", "l) eine Tafel Schokolade → {{=Eine Tafel Schokolade esse ich}}"] },
      { title: "Übung 4", instruction: { de: "Verneine mit kein/keine/keinen (Akkusativ).", ar: "انفِ بـ kein/keine/keinen." }, example: "Trinkst du Tee? – Nein, ich trinke jetzt keinen Tee.",
        items: ["a) ein Stück Kuchen → Nein danke, jetzt {{kein}} Stück Kuchen.", "b) ein Eis → Nein danke, jetzt {{kein}} Eis.", "c) eine Pizza → Nein danke, jetzt {{keine}} Pizza.", "d) Pommes → Nein danke, jetzt {{keine}} Pommes.", "e) ein Steak → Nein danke, jetzt {{kein}} Steak.", "f) Kirschsaft → Nein danke, jetzt {{keinen}} Kirschsaft.", "g) eine Orange → Nein danke, jetzt {{keine}} Orange.", "h) Erdnüsse → Nein danke, jetzt {{keine}} Erdnüsse.", "i) ein Sandwich → Nein danke, jetzt {{kein}} Sandwich.", "j) Mineralwasser → Nein danke, jetzt {{kein}} Mineralwasser.", "k) eine Kiwi → Nein danke, jetzt {{keine}} Kiwi.", "l) Gurkensalat → Nein danke, jetzt {{keinen}} Gurkensalat.", "m) ein Apfel → Nein danke, jetzt {{keinen}} Apfel.", "n) Erdbeeren → Nein danke, jetzt {{keine}} Erdbeeren.", "o) Milchkaffee → Nein danke, jetzt {{keinen}} Milchkaffee.", "p) ein Burger → Nein danke, jetzt {{keinen}} Burger."] },
      { title: "Übung 5", instruction: { de: "haben + kein. Ergänze Verb und kein-Form.", ar: "haben + kein. أكمل الفعل وصيغة kein." }, example: "Uhr – ich → Leider habe ich keine Uhr.",
        items: ["a) Urlaub – ihr → Leider {{habt}} ihr {{keinen}} Urlaub.", "b) Notebook – du → Leider {{hast}} du {{kein}} Notebook.", "c) Garten – wir → Leider {{haben}} wir {{keinen}} Garten.", "d) Zeit – Lena → Leider {{hat}} Lena {{keine}} Zeit.", "e) Auto – du → Leider {{hast}} du {{kein}} Auto.", "f) Stift – ich → Leider {{habe}} ich {{keinen}} Stift.", "g) E-Bike – ihr → Leider {{habt}} ihr {{kein}} E-Bike.", "h) Informationen – Theo → Leider {{hat}} Theo {{keine}} Informationen."] }
    ]
  },

  /* ============================ 4.3 ============================ */
  "4.3": {
    explain: {
      idea: { de: "Das Akkusativobjekt kann man mit einem <b>Pronomen</b> ersetzen: ihn / sie / es / sie.", ar: "ممكن نستبدل المفعول بضمير: ihn/sie/es/sie." },
      rules: [
        { de: "der &rarr; <b>ihn</b>, die &rarr; <b>sie</b>, das &rarr; <b>es</b>, Plural &rarr; <b>sie</b>.", ar: "der←ihn، die←sie، das←es، الجمع←sie." },
        { de: "Akkusativ der Personen: mich, dich, <b>ihn</b>, sie, es, uns, euch, sie/Sie.", ar: "ضمائر النصب: mich/dich/ihn/sie/es/uns/euch/sie." },
        { de: "Verneinung mit <b>kein-</b>: Ich mag <b>keinen</b> Kaffee.", ar: "النفي بـ kein: Ich mag keinen Kaffee." }
      ],
      examples: ["Isst du den Kuchen? – Ja, ich esse <b>ihn</b>.", "Trinkst du die Milch? – Ja, ich trinke <b>sie</b>.", "Liest du das Buch? – Ja, ich lese <b>es</b>."],
      mistake: { de: "Das Pronomen richtet sich nach dem <b>Artikel</b>, nicht nach der Bedeutung.", ar: "الضمير حسب الأداة مش حسب المعنى." }
    },
    exercises: [
      { title: "Übung 1", instruction: { de: "Ergänze Artikel und Pronomen.", ar: "أكمل الأداة والضمير." }, example: "Wer bekommt das Steak? – Ich bekomme es.",
        items: ["a) Wer bekommt {{die}} Suppe? – Ich bekomme {{sie}}.", "b) Wer bekommt {{den}} Salat? – Ich bekomme {{ihn}}.", "c) Wer bekommt {{das}} Kotelett? – Ich bekomme {{es}}.", "d) Wer bekommt {{das}} Eis? – Ich bekomme {{es}}.", "e) Wer bekommt {{den}} Kaffee? – Ich bekomme {{ihn}}."] },
      { title: "Übung 2", instruction: { de: "Ergänze Subjekt- und Akkusativpronomen.", ar: "أكمل ضمير الفاعل وضمير النصب." }, example: "Ich kenne Maria, aber sie kennt mich nicht.",
        items: ["a) Du kennst den Professor, aber {{er}} kennt {{dich}} nicht.", "b) Maria kennt den Lehrer, aber {{er}} kennt {{sie}} nicht.", "c) Wir kennen Arnold Schwarzenegger, aber {{er}} kennt {{uns}} nicht.", "d) Ihr kennt mich, aber {{ich}} kenne {{euch}} nicht.", "e) Das Mädchen kennt Paul, aber {{er}} kennt {{es}} nicht.", "f) Herr Meier kennt Frau Schneider, aber {{sie}} kennt {{ihn}} nicht.", "g) Frau Berg kennt dich, aber {{du}} kennst {{sie}} nicht."] },
      { title: "Übung 3", instruction: { de: "Ergänze Artikel und Pronomen.", ar: "أكمل الأداة والضمير." }, example: "Trinken Sie den Kaffee hier? – Nein, ich trinke ihn nicht.",
        items: ["a) Nehmen Sie {{den}} Salat? – Nein, ich nehme {{ihn}} nicht.", "b) Nehmen Sie {{das}} Sandwich? – Nein, ich nehme {{es}} nicht.", "c) Nehmen Sie {{die}} Milch? – Nein, ich nehme {{sie}} nicht.", "d) Nehmen Sie {{das}} Bier? – Nein, ich nehme {{es}} nicht.", "e) Nehmen Sie {{die}} Erdbeeren? – Nein, ich nehme {{sie}} nicht.", "f) Nehmen Sie {{den}} Apfelsaft? – Nein, ich nehme {{ihn}} nicht.", "g) Nehmen Sie {{die}} Zeitung? – Nein, ich nehme {{sie}} nicht.", "h) Nehmen Sie {{das}} Mineralwasser? – Nein, ich nehme {{es}} nicht.", "i) Nehmen Sie {{die}} Suppe? – Nein, ich nehme {{sie}} nicht.", "j) Nehmen Sie {{den}} Tee? – Nein, ich nehme {{ihn}} nicht.", "k) Nehmen Sie {{das}} Buch? – Nein, ich nehme {{es}} nicht.", "l) Nehmen Sie {{den}} Kuchen? – Nein, ich nehme {{ihn}} nicht."] },
      { title: "Übung 4", instruction: { de: "Verneine mit kein-.", ar: "انفِ بـ kein." }, example: "Mögen Sie Kaffee? – Nein, ich mag keinen Kaffee.",
        items: ["a) Erdbeereis → Nein, ich mag {{kein}} Erdbeereis.", "b) Kakao → Nein, ich mag {{keinen}} Kakao.", "c) Tomatensuppe → Nein, ich mag {{keine}} Tomatensuppe.", "d) Apfelsaft → Nein, ich mag {{keinen}} Apfelsaft.", "e) Schokolade → Nein, ich mag {{keine}} Schokolade.", "f) Bier → Nein, ich mag {{kein}} Bier.", "g) Salami → Nein, ich mag {{keine}} Salami.", "h) Pommes → Nein, ich mag {{keine}} Pommes."] }
    ]
  },

  /* ============================ 5.1 ============================ */
  "5.1": {
    explain: {
      idea: { de: "<b>Possessivartikel</b> zeigen Besitz: mein, dein, sein, ihr, unser, euer, ihr/Ihr.", ar: "ضمائر الملكية بتوضّح المُلكية: mein/dein/sein/ihr …" },
      rules: [
        { de: "Endungen wie <b>ein-</b>: Nom. mask. mein, fem. meine, neutr. mein, Pl. meine.", ar: "النهايات زي ein: mein/meine/mein/meine." },
        { de: "Im <b>Akkusativ</b> ändert sich nur maskulin: <b>meinen</b> Onkel.", ar: "في النصب المذكر بس بيتغيّر: meinen." },
        { de: "<b>sein</b> = er/es, <b>ihr</b> = sie/Plural. Achtung: euer &rarr; <b>eure</b>, <b>euren</b>.", ar: "sein لـ er/es، ihr لـ sie/الجمع. euer←eure/euren." }
      ],
      examples: ["Das ist <b>mein</b> Fahrrad.", "Ich besuche <b>meinen</b> Onkel.", "Anna hat ein Tablet. Das ist <b>ihr</b> Tablet."],
      mistake: { de: "Akkusativ maskulin: <b>meinen/deinen/seinen</b> – nicht „mein Onkel“ als Objekt.", ar: "النصب المذكر: meinen/deinen/seinen." }
    },
    exercises: [
      { title: "Übung 1", instruction: { de: "Ergänze mein / meine / meinen.", ar: "أكمل mein/meine/meinen." }, example: "Ich besuche meinen Onkel.",
        items: ["a) Ich bringe {{mein}} Fahrrad in die Garage.", "b) {{Mein}} Onkel fährt morgen nach Köln.", "c) Ich treffe morgen {{meine}} Kollegin.", "d) Ich muss {{mein}} Zimmer aufräumen.", "e) {{Meine}} Eltern fahren in Urlaub.", "f) {{Mein}} Bleistift ist weg.", "g) Ich will {{meinen}} Großvater einladen.", "h) Ich suche {{meine}} Socken.", "i) Ich möchte {{meinen}} Computer verkaufen.", "j) {{Meine}} Freundin sucht einen Job.", "k) {{Mein}} Rucksack liegt hier.", "l) Ich muss {{meine}} Schuhe putzen.", "m) Ich finde {{meinen}} Kugelschreiber nicht.", "n) {{Mein}} Auto ist sehr teuer."] },
      { title: "Übung 2", instruction: { de: "Ergänze den Possessivartikel (Akkusativ).", ar: "أكمل ضمير الملكية في النصب." }, example: "Ich besuche meine Tante.",
        items: ["a) Wir besuchen {{unsere}} Eltern.", "b) Paul fragt {{seinen}} Vater.", "c) Eva sieht morgen {{ihren}} Onkel.", "d) Ihr ladet {{eure}} Tante ein.", "e) Du räumst {{dein}} Zimmer auf.", "f) Trifft Amira {{ihre}} Freundin?", "g) Besucht ihr {{euren}} Großvater?", "h) Sie treffen {{ihre}} Freunde.", "i) Wir räumen {{unsere}} Wohnung auf.", "j) Max zählt {{sein}} Geld.", "k) Eva trifft heute Abend {{ihre}} Geschwister.", "l) Kennst du {{deine}} Nachbarin?", "m) Wir holen {{unser}} Gepäck.", "n) Ihr bezahlt {{eure}} Rechnung."] }
    ]
  },

  /* ============================ 5.2 ============================ */
  "5.2": {
    explain: {
      idea: { de: "Für die Vergangenheit von <b>haben</b> und <b>sein</b> benutzt man das <b>Präteritum</b>.", ar: "للماضي مع haben و sein بنستخدم الـ Präteritum." },
      rules: [
        { de: "<b>haben</b>: hatte, hattest, hatte, hatten, hattet, hatten.", ar: "haben: hatte/hattest/hatte/hatten/hattet/hatten." },
        { de: "<b>sein</b>: war, warst, war, waren, wart, waren.", ar: "sein: war/warst/war/waren/wart/waren." },
        { de: "<b>sein</b> für Ort/Zustand (Ich war in Köln), <b>haben</b> für Besitz (Ich hatte Zeit).", ar: "sein للمكان/الحالة، haben للمُلكية." }
      ],
      examples: ["Ich <b>war</b> gestern im Kino.", "<b>Hattest</b> du Urlaub?", "<b>Wart</b> ihr zufrieden?"],
      mistake: { de: "Mische nicht: <s>Ich hatte in Köln</s> &rarr; <b>Ich war in Köln</b>.", ar: "ماتخلطش: للمكان war مش hatte." }
    },
    exercises: [
      { title: "Übung 1", instruction: { de: "Ergänze die richtige Form von war / hatte.", ar: "أكمل الشكل الصح من war/hatte." }, example: "Hatte er keine Zeit?",
        items: ["a) {{Warst}} du gestern im Kino?", "b) {{Hattet}} ihr Besuch?", "c) {{War}} er in Urlaub?", "d) {{Hattest}} du Urlaub?", "e) {{Wart}} ihr mit dem Essen zufrieden?", "f) {{Hatten}} Sie Probleme?", "g) {{Warst}} du krank?", "h) {{Waren}} Sie letzte Woche in Köln?", "i) {{War}} der Film interessant?", "j) {{Wart}} ihr schon in der neuen Disko?", "k) {{Hattest}} du viel Arbeit?", "l) {{Warst}} du schon bei Klaus?"] }
    ]
  },

  /* ============================ 5.3 ============================ */
  "5.3": {
    explain: {
      idea: { de: "<b>Häufigkeitsadverbien</b> sagen, wie oft man etwas macht – von <b>nie</b> bis <b>immer</b>.", ar: "ظروف التكرار بتقول بتعمل الحاجة كل قد إيه — من nie لـ immer." },
      rules: [
        { de: "Skala: nie &lt; selten &lt; manchmal &lt; oft &lt; meistens &lt; immer.", ar: "السلّم: nie < selten < manchmal < oft < meistens < immer." },
        { de: "Synonyme: ab und zu / hin und wieder = manchmal; ständig = immer; kaum / fast nie = selten.", ar: "مرادفات: ab und zu = manchmal، ständig = immer." },
        { de: "Auf eine <b>verneinte</b> Frage antwortest du mit <b>Doch</b> (positiv) oder <b>Nein</b> (negativ).", ar: "الرد على سؤال منفي: Doch (إيجابي) أو Nein (سلبي)." }
      ],
      examples: ["Trinkst du Cola? – manchmal → Ja, ich trinke <b>manchmal</b> Cola.", "Trinkst du keinen Tee? – oft → <b>Doch</b>, ich trinke oft Tee.", "Trinkst du keinen Kaffee? – nie → <b>Nein</b>, ich trinke nie Kaffee."],
      mistake: { de: "Verneinte Frage + positive Antwort = <b>Doch</b> (nicht „Ja“).", ar: "سؤال منفي + رد إيجابي = Doch مش Ja." }
    },
    exercises: [
      { title: "Übung 2", instruction: { de: "Antworte mit Ja / Nein / Doch und dem Adverb.", ar: "جاوب بـ Ja/Nein/Doch مع الظرف." },
        items: ["a) Gehst du manchmal ins Kino? (ab und zu) → {{=Ja, ich gehe ab und zu ins Kino}}", "b) Isst du kein Obst? (oft) → {{=Doch, ich esse oft Obst}}", "c) Spielst du oft Fußball? (selten) → {{=Nein, ich spiele selten Fußball}}", "d) Kaufst du keinen Käse? (manchmal) → {{=Doch, ich kaufe manchmal Käse}}", "e) Hörst du zu Hause Musik? (ständig) → {{=Ja, ich höre ständig Musik}}", "f) Trinkst du keinen Alkohol? (nie) → {{=Nein, ich trinke nie Alkohol}}", "g) Gehst du oft ins Café? (kaum) → {{=Nein, ich gehe kaum ins Café}}", "h) Spielst du Karten? (hin und wieder) → {{=Ja, ich spiele hin und wieder Karten}}", "i) Fährst du nie mit dem Fahrrad? (nie) → {{=Nein, ich fahre nie mit dem Fahrrad}}", "j) Isst du nie Fleisch? (oft) → {{=Doch, ich esse oft Fleisch}}", "k) Fährst du nie mit dem Bus? (ab und zu) → {{=Doch, ich fahre ab und zu mit dem Bus}}", "l) Gehst du oft in die Disko? (fast nie) → {{=Nein, ich gehe fast nie in die Disko}}", "m) Liest du immer die Zeitung? (kaum) → {{=Nein, ich lese kaum die Zeitung}}", "n) Lernst du die Wörter nicht? (immer) → {{=Doch, ich lerne immer die Wörter}}"] },
      { title: "Übung 3", instruction: { de: "Bilde die Frage mit „manchmal“.", ar: "كوّن السؤال بـ manchmal." }, example: "kaufen – Wein → Kaufst du manchmal Wein?",
        items: ["a) fahren – mit dem Bus → {{=Fährst du manchmal mit dem Bus}}", "b) essen – Obst → {{=Isst du manchmal Obst}}", "c) tragen – Jeans → {{=Trägst du manchmal Jeans}}", "d) trinken – Bier → {{=Trinkst du manchmal Bier}}", "e) lesen – Zeitung → {{=Liest du manchmal Zeitung}}", "f) nehmen – Whisky → {{=Nimmst du manchmal Whisky}}", "g) reisen – nach Spanien → {{=Reist du manchmal nach Spanien}}", "h) bestellen – Tee → {{=Bestellst du manchmal Tee}}", "i) fliegen – in Urlaub → {{=Fliegst du manchmal in Urlaub}}"] }
    ]
  },

  /* ============================ 6.1 ============================ */
  "6.1": {
    explain: {
      idea: { de: "Einige Verben brauchen ein <b>Dativobjekt</b> (helfen, danken, gehören, gefallen …).", ar: "بعض الأفعال بتاخد مفعول في حالة الجر (helfen/danken/gehören …)." },
      rules: [
        { de: "Bestimmt: <b>dem</b> (m), <b>der</b> (f), <b>dem</b> (n), <b>den</b> + <b>-n</b> (Pl).", ar: "معرفة: dem/der/dem/den (+n للجمع)." },
        { de: "Unbestimmt: <b>einem</b> (m), <b>einer</b> (f), <b>einem</b> (n).", ar: "نكرة: einem/einer/einem." },
        { de: "Im Plural bekommt das Nomen ein <b>-n</b>: den Kinder<b>n</b>, den Leute<b>n</b>.", ar: "في الجمع الاسم بياخد ‑n." }
      ],
      examples: ["Ich danke <b>dem</b> Großvater.", "Du antwortest <b>der</b> Reporterin.", "Wir helfen <b>den</b> Leute<b>n</b>."],
      mistake: { de: "Plural-Dativ: Artikel <b>den</b> + Nomen mit <b>-n</b> (den Kindern).", ar: "جمع الجر: den + الاسم بـ ‑n." }
    },
    exercises: [
      { title: "Übung 1", instruction: { de: "Subjekt = Person, Dativobjekt = Person. Ergänze Verb und Artikel.", ar: "أكمل الفعل والأداة." }, example: "helfen → Du hilfst dem Onkel.",
        items: ["a) antworten → Paul {{antwortet}} {{dem}} Professor.", "b) danken → Er {{dankt}} {{der}} Tante.", "c) glauben → Ich {{glaube}} {{der}} Reporterin.", "d) gratulieren → Du {{gratulierst}} {{dem}} Onkel.", "e) vertrauen → Er {{vertraut}} {{dem}} Großvater.", "f) verzeihen → Ich {{verzeihe}} {{dem}} Freund.", "g) zuhören → Der Student {{hört}} {{der}} Professorin {{zu}}."] },
      { title: "Übung 2", instruction: { de: "Subjekt = Sache, Dativobjekt = Person. Ergänze Verb und Artikel.", ar: "أكمل الفعل والأداة." }, example: "gehören → Das Haus gehört dem Onkel.",
        items: ["a) schmecken → Das Eis {{schmeckt}} {{den}} Kindern.", "b) gehören → Das Buch {{gehört}} {{dem}} Lehrer.", "c) gefallen → Die Musik {{gefällt}} {{der}} Studentin.", "d) passen → Die Jacke {{passt}} {{dem}} Mädchen."] },
      { title: "Übung 3", instruction: { de: "Bilde Sätze mit gehören / schmecken / gefallen.", ar: "كوّن جمل بـ gehören/schmecken/gefallen." }, example: "Haus – Onkel → Das Haus gehört dem Onkel.",
        items: ["a) Pizza – Kinder (schmecken) → {{=Die Pizza schmeckt den Kindern}}", "b) Jacke – Großvater (gehören) → {{=Die Jacke gehört dem Großvater}}", "c) Film – Studentin (gefallen) → {{=Der Film gefällt der Studentin}}", "d) Wein – Gäste (schmecken) → {{=Der Wein schmeckt den Gästen}}", "e) Wagen – Chef (gehören) → {{=Der Wagen gehört dem Chef}}", "f) Hund – Nachbarin (gehören) → {{=Der Hund gehört der Nachbarin}}", "g) Bücher – Studenten (gehören) → {{=Die Bücher gehören den Studenten}}", "h) Erdbeeren – Mädchen (schmecken) → {{=Die Erdbeeren schmecken dem Mädchen}}", "i) Bilder – Touristen (gefallen) → {{=Die Bilder gefallen den Touristen}}"] }
    ]
  },

  /* ============================ 6.2 ============================ */
  "6.2": {
    explain: {
      idea: { de: "Auch das Dativobjekt kann man mit einem <b>Pronomen</b> ersetzen.", ar: "ممكن نستبدل مفعول الجر بضمير." },
      rules: [
        { de: "Dativ: <b>mir, dir, ihm, ihr, ihm, uns, euch, ihnen/Ihnen</b>.", ar: "ضمائر الجر: mir/dir/ihm/ihr/ihm/uns/euch/ihnen." },
        { de: "der/das &rarr; <b>ihm</b>, die &rarr; <b>ihr</b>, Plural &rarr; <b>ihnen</b>.", ar: "der/das←ihm، die←ihr، الجمع←ihnen." },
        { de: "Oft steht das <b>Pronomen vor dem Nomen</b>: Gefällt <b>dir</b> der Film?", ar: "غالبًا الضمير قبل الاسم." }
      ],
      examples: ["Hört Maria Robert zu? – Ja, sie hört <b>ihm</b> zu.", "Glaubst du mir? – Ja, ich glaube <b>dir</b>.", "Schmeckt euch die Suppe? – Ja, sie schmeckt <b>uns</b> gut."],
      mistake: { de: "Dativ-Plural ist <b>ihnen</b> (klein), höflich <b>Ihnen</b> (groß).", ar: "جمع الجر ihnen، والرسمي Ihnen." }
    },
    exercises: [
      { title: "Übung 1", instruction: { de: "Ersetze das Dativobjekt durch ein Pronomen.", ar: "استبدل مفعول الجر بضمير." }, example: "Glaubst du der Studentin? – Nein, ich glaube ihr nicht.",
        items: ["a) Antwortest du Peter? → Nein, ich antworte {{ihm}} nicht.", "b) Dankst du den Leuten? → Nein, ich danke {{ihnen}} nicht.", "c) Vertraust du Eva? → Nein, ich vertraue {{ihr}} nicht.", "d) Glaubst du Max und Maria? → Nein, ich glaube {{ihnen}} nicht.", "e) Hörst du uns zu? → Nein, ich höre {{euch}} nicht zu.", "f) Hilfst du Paul? → Nein, ich helfe {{ihm}} nicht.", "g) Verzeihst du uns? → Nein, ich verzeihe {{euch}} nicht.", "h) Gratulierst du Maria? → Nein, ich gratuliere {{ihr}} nicht.", "i) Hörst du Klaus zu? → Nein, ich höre {{ihm}} nicht zu."] },
      { title: "Übung 2", instruction: { de: "Ergänze Subjektpronomen (er/sie/es) und Dativpronomen.", ar: "أكمل ضمير الفاعل وضمير الجر." }, example: "Schmeckt Maria der Wein? – Ja, er schmeckt ihr gut.",
        items: ["a) euch – Suppe → Ja, {{sie}} schmeckt {{uns}} gut.", "b) Julia – Erdnüsse → Ja, {{sie}} schmecken {{ihr}} gut.", "c) dir – Steak → Ja, {{es}} schmeckt {{mir}} gut.", "d) Ihnen – Salat → Ja, {{er}} schmeckt {{mir}} gut.", "e) Robert – Schnitzel → Ja, {{es}} schmeckt {{ihm}} gut.", "f) euch – Trauben → Ja, {{sie}} schmecken {{uns}} gut.", "g) dir – Fisch → Ja, {{er}} schmeckt {{mir}} gut.", "h) Kindern – Eis → Ja, {{es}} schmeckt {{ihnen}} gut."] },
      { title: "Übung 3", instruction: { de: "Wem gehört …? Ergänze Pronomen und Dativ.", ar: "لمين بتخص؟ أكمل الضمير والجر." }, example: "Wem gehört das Haus? – Es gehört dem Onkel.",
        items: ["a) Wem gehört der Rucksack? – {{Er}} gehört {{der}} Touristin.", "b) Wem gehört die Kamera? – {{Sie}} gehört {{dem}} Reporter.", "c) Wem gehört das Tablet? – {{Es}} gehört {{dem}} Mädchen.", "d) Wem gehört der Brief? – {{Er}} gehört {{mir}}.", "e) Wem gehört die Tasche? – {{Sie}} gehört {{der}} Tante.", "f) Wem gehört das Auto? – {{Es}} gehört {{dem}} Lehrer.", "g) Wem gehören die Handschuhe? – {{Sie}} gehören {{dir}}.", "h) Wem gehören die Bücher? – {{Sie}} gehören {{uns}}.", "i) Wem gehören die Fahrräder? – {{Sie}} gehören {{den}} Studentinnen."] }
    ]
  },

  /* ============================ 6.3 ============================ */
  "6.3": {
    explain: {
      idea: { de: "Mit dem <b>Imperativ</b> gibst du Befehle, Bitten oder Ratschläge.", ar: "صيغة الأمر للأوامر والطلبات والنصائح." },
      rules: [
        { de: "<b>du</b>: Verbstamm ohne -st, ohne Pronomen (komm! lies! nimm!). Bei -t/-d: + e (arbeite!).", ar: "du: الجذع بدون ‑st وبدون ضمير. مع ‑t/-d نزود e." },
        { de: "<b>ihr</b>: ihr-Form ohne Pronomen (kommt! lest!).", ar: "ihr: شكل ihr بدون ضمير." },
        { de: "<b>Sie</b>: Verb + Sie (kommen Sie! lesen Sie!). sein &rarr; Sei! Seid! Seien Sie!", ar: "Sie: الفعل + Sie." }
      ],
      examples: ["geben → <b>Gib!</b> · <b>Gebt!</b> · <b>Geben Sie!</b>", "anrufen → <b>Ruf an!</b> · <b>Ruft an!</b> · <b>Rufen Sie an!</b>", "sein → <b>Sei!</b> · <b>Seid!</b> · <b>Seien Sie!</b>"],
      mistake: { de: "du-Imperativ ohne „du“ und ohne -st: <b>Komm!</b> (nicht „Du kommst!“).", ar: "أمر du بدون الضمير وبدون ‑st." }
    },
    exercises: [
      { title: "Übung 1", instruction: { de: "Bilde die drei Imperativformen (du · ihr · Sie).", ar: "كوّن صيغ الأمر الثلاثة." }, example: "gehen → Geh! · Geht! · Gehen Sie!",
        items: ["a) fragen → {{Frag|Frage}} ! · {{Fragt}} ! · {{Fragen Sie}} !", "b) kaufen → {{Kauf|Kaufe}} ! · {{Kauft}} ! · {{Kaufen Sie}} !", "c) arbeiten → {{Arbeite}} ! · {{Arbeitet}} ! · {{Arbeiten Sie}} !", "d) antworten → {{Antworte}} ! · {{Antwortet}} ! · {{Antworten Sie}} !", "e) reden → {{Rede}} ! · {{Redet}} ! · {{Reden Sie}} !", "f) laufen → {{Lauf|Laufe}} ! · {{Lauft}} ! · {{Laufen Sie}} !", "g) fahren → {{Fahr|Fahre}} ! · {{Fahrt}} ! · {{Fahren Sie}} !", "h) schlafen → {{Schlaf|Schlafe}} ! · {{Schlaft}} ! · {{Schlafen Sie}} !", "i) geben → {{Gib}} ! · {{Gebt}} ! · {{Geben Sie}} !", "j) sprechen → {{Sprich}} ! · {{Sprecht}} ! · {{Sprechen Sie}} !", "k) essen → {{Iss}} ! · {{Esst}} ! · {{Essen Sie}} !", "l) nehmen → {{Nimm}} ! · {{Nehmt}} ! · {{Nehmen Sie}} !", "m) sein → {{Sei}} ! · {{Seid}} ! · {{Seien Sie}} !"] },
      { title: "Übung 2", instruction: { de: "Ergänze den Imperativ (Form passend zur Anrede).", ar: "أكمل صيغة الأمر المناسبة." },
        items: ["a) Maria, {{nimm}} bitte die Tasche! (nehmen)", "b) Carlos und Peter, {{sprecht}} bitte nicht so laut! (sprechen)", "c) Claudia, {{gib}} Max bitte das Besteck! (geben)", "d) Herr Meier, {{holen Sie}} bitte das Paket! (holen)", "e) Klaus, {{iss}} nicht so schnell! (essen)", "f) Robert, {{sei}} bitte leise! (sein)", "g) {{Warte}} bitte 5 Minuten, Julia! (warten)"] },
      { title: "Übung 3", instruction: { de: "Gib einen Rat (du-Imperativ).", ar: "اكتب نصيحة (أمر du)." }, example: "Ich habe Durst. (ein Bier – trinken) → Dann trink ein Bier!",
        items: ["a) Ich bin müde. (zu Bett – gehen) → {{=Dann geh zu Bett}}", "b) Ich habe Kopfschmerzen. (eine Tablette – nehmen) → {{=Dann nimm eine Tablette}}", "c) Ich arbeite zu viel. (Urlaub – machen) → {{=Dann mach Urlaub}}", "d) Ich habe Hunger. (ein Käsebrot – essen) → {{=Dann iss ein Käsebrot}}", "e) Ich habe Zahnschmerzen. (zum Zahnarzt – gehen) → {{=Dann geh zum Zahnarzt}}"] },
      { title: "Übung 4", instruction: { de: "Trennbare Verben – bilde die drei Imperativformen.", ar: "أفعال قابلة للفصل — كوّن الصيغ الثلاثة." }, example: "herkommen → Komm her! · Kommt her! · Kommen Sie her!",
        items: ["a) anrufen → {{Ruf an|Rufe an}} ! · {{Ruft an}} ! · {{Rufen Sie an}} !", "b) einsteigen → {{Steig ein|Steige ein}} ! · {{Steigt ein}} ! · {{Steigen Sie ein}} !", "c) zuhören → {{Hör zu|Höre zu}} ! · {{Hört zu}} ! · {{Hören Sie zu}} !", "d) ankreuzen → {{Kreuz an|Kreuze an}} ! · {{Kreuzt an}} ! · {{Kreuzen Sie an}} !", "e) vorlesen → {{Lies vor}} ! · {{Lest vor}} ! · {{Lesen Sie vor}} !"] }
    ]
  },

  /* ============================ 7.1 ============================ */
  "7.1": {
    explain: {
      idea: { de: "Im Aussagesatz steht das <b>Verb auf Position 2</b>. Andere Satzteile können auf Position 1 stehen.", ar: "في الجملة الخبرية الفعل في المركز 2، وباقي الأجزاء ممكن تيجي في المركز 1." },
      rules: [
        { de: "Position 1 kann sein: Subjekt, Zeit (temporal), Ort (lokal), Objekt oder Art (modal).", ar: "المركز 1 ممكن: الفاعل/الزمن/المكان/المفعول/الكيفية." },
        { de: "In der Mitte: <b>te–ka–mo–lo</b> (temporal, kausal, modal, lokal).", ar: "في النص: te-ka-mo-lo (زمن، سبب، كيفية، مكان)." },
        { de: "Das Subjekt steht direkt <b>nach dem Verb</b>, wenn ein anderer Teil vorne steht.", ar: "الفاعل بعد الفعل لو جزء تاني اتقدّم." }
      ],
      examples: ["<b>Mein Onkel fliegt</b> am Montag nach Malta.", "<b>Am Montag fliegt</b> mein Onkel nach Malta.", "<b>Nach Malta fliegt</b> mein Onkel am Montag."],
      mistake: { de: "Verb bleibt immer Position 2: <s>Am Montag mein Onkel fliegt</s> &rarr; <b>Am Montag fliegt mein Onkel</b>.", ar: "الفعل دايمًا في المركز 2." }
    },
    exercises: [
      { title: "Übung 1", instruction: { de: "Beginne mit dem Satzteil in Klammern. Verb bleibt Position 2.", ar: "ابدأ بالجزء اللي بين القوسين، والفعل في المركز 2." },
        items: ["a) Der Schirm gehört der Kollegin. (Dativ zuerst) → {{=Der Kollegin gehört der Schirm}}", "b) Der Bus fährt zum Rathaus. (Ort zuerst) → {{=Zum Rathaus fährt der Bus}}", "c) Ich verreise nächste Woche. (Zeit zuerst) → {{=Nächste Woche verreise ich}}", "d) Du hilfst den Kollegen gerne. (modal zuerst) → {{=Gerne hilfst du den Kollegen}}", "e) Mein Onkel fliegt am Montag nach Malta. (Zeit zuerst) → {{=Am Montag fliegt mein Onkel nach Malta}}", "f) Mein Onkel fliegt am Montag nach Malta. (Ort zuerst) → {{=Nach Malta fliegt mein Onkel am Montag}}", "g) Max trifft jeden Freitag seine Freunde in der Kneipe. (Akkusativ zuerst) → {{=Seine Freunde trifft Max jeden Freitag in der Kneipe}}", "h) Max trifft jeden Freitag seine Freunde in der Kneipe. (Ort zuerst) → {{=In der Kneipe trifft Max jeden Freitag seine Freunde}}", "i) Max trifft jeden Freitag seine Freunde in der Kneipe. (Zeit zuerst) → {{=Jeden Freitag trifft Max seine Freunde in der Kneipe}}"] }
    ]
  },

  /* ============================ 7.2 ============================ */
  "7.2": {
    explain: {
      idea: { de: "<b>Modalverben</b> stehen auf Position 2, das zweite Verb im <b>Infinitiv am Satzende</b>.", ar: "الأفعال المساعدة في المركز 2، والفعل التاني مصدر في آخر الجملة." },
      rules: [
        { de: "können (Fähigkeit), dürfen (Erlaubnis), müssen (Pflicht), wollen (Wille), sollen (Auftrag), möchten (Wunsch).", ar: "können/dürfen/müssen/wollen/sollen/möchten." },
        { de: "ich: kann, darf, muss, will, soll, möchte. Bei ich/er kein -t/-e am Modalverb!", ar: "ich: kann/darf/muss/will/soll/möchte (بدون نهاية)." },
        { de: "Trennbare Verben werden am Ende wieder <b>zusammen</b>: Eva muss jetzt <b>einsteigen</b>.", ar: "الأفعال القابلة للفصل بترجع متجمّعة في آخر الجملة." }
      ],
      examples: ["Robert <b>muss</b> am Sonntag <b>arbeiten</b>.", "Julia <b>will</b> die Tante <b>besuchen</b>.", "Eva <b>muss</b> jetzt <b>einsteigen</b>."],
      mistake: { de: "Zweites Verb als Infinitiv ans Ende: <s>Ich will den Kuchen esse nicht</s> &rarr; <b>… nicht essen</b>.", ar: "الفعل التاني مصدر في الآخر." }
    },
    exercises: [
      { title: "Übung 1 · wollen", instruction: { de: "Bilde Sätze mit <b>wollen</b>.", ar: "كوّن جمل بـ wollen." },
        items: ["a) Wir kommen nicht mit. → {{=Wir wollen nicht mitkommen}}", "b) Ihr steht nicht früh auf. → {{=Ihr wollt nicht früh aufstehen}}", "c) Du triffst Klaus nicht. → {{=Du willst Klaus nicht treffen}}", "d) Ich esse den Kuchen nicht. → {{=Ich will den Kuchen nicht essen}}", "e) Eva trinkt kein Bier. → {{=Eva will kein Bier trinken}}"] },
      { title: "Übung 1 · dürfen", instruction: { de: "Bilde Sätze mit <b>dürfen</b>.", ar: "كوّن جمل بـ dürfen." },
        items: ["a) Robert geht nicht aus. → {{=Robert darf nicht ausgehen}}", "b) Ihr kommt nicht mit. → {{=Ihr dürft nicht mitkommen}}", "c) Ich rauche nicht mehr. → {{=Ich darf nicht mehr rauchen}}", "d) Kinder trinken keinen Alkohol. → {{=Kinder dürfen keinen Alkohol trinken}}", "e) Du isst keinen Zucker. → {{=Du darfst keinen Zucker essen}}"] },
      { title: "Übung 1 · können", instruction: { de: "Bilde Sätze mit <b>können</b>.", ar: "كوّن جمل بـ können." },
        items: ["a) Julia versteht den Satz nicht. → {{=Julia kann den Satz nicht verstehen}}", "b) Du trägst den Koffer nicht. → {{=Du kannst den Koffer nicht tragen}}", "c) Carlos läuft sehr schnell. → {{=Carlos kann sehr schnell laufen}}", "d) Ich schlafe nicht ein. → {{=Ich kann nicht einschlafen}}", "e) Wir sehen euch nicht. → {{=Wir können euch nicht sehen}}"] },
      { title: "Übung 1 · müssen", instruction: { de: "Bilde Sätze mit <b>müssen</b>.", ar: "كوّن جمل بـ müssen." },
        items: ["a) Carlos lernt die Wörter. → {{=Carlos muss die Wörter lernen}}", "b) Ihr kauft noch ein. → {{=Ihr müsst noch einkaufen}}", "c) Ich nehme das Medikament. → {{=Ich muss das Medikament nehmen}}", "d) Paul repariert das Fahrrad. → {{=Paul muss das Fahrrad reparieren}}", "e) Wir warten lange. → {{=Wir müssen lange warten}}"] },
      { title: "Übung 2", instruction: { de: "Antworte frei: „Ja, ich kann … spielen.“ / „Nein, ich kann nicht … spielen.“", ar: "جاوب بحرية بـ Ja/Nein ich kann …" },
        items: ["a) Schach: {{*}}", "b) Tischtennis: {{*}}", "c) Karten: {{*}}", "d) Theater: {{*}}", "e) Roulette: {{*}}", "f) Geige: {{*}}", "g) Golf: {{*}}", "h) Fußball: {{*}}"] }
    ]
  },

  /* ============================ 7.3 ============================ */
  "7.3": {
    explain: {
      idea: { de: "Einige Präpositionen verlangen <b>immer Dativ</b>.", ar: "بعض حروف الجر بتاخد Dativ دايمًا." },
      rules: [
        { de: "Dativ-Präpositionen: <b>aus, bei, mit, nach, seit, von, zu, gegenüber</b>.", ar: "حروف الجر: aus/bei/mit/nach/seit/von/zu/gegenüber." },
        { de: "Artikel im Dativ: dem (m), der (f), dem (n), den + -n (Pl).", ar: "أداة الجر: dem/der/dem/den." },
        { de: "Verschmelzungen: <b>beim</b> (bei dem), <b>vom</b> (von dem), <b>zum</b> (zu dem), <b>zur</b> (zu der).", ar: "اندماجات: beim/vom/zum/zur." }
      ],
      examples: ["Paul fährt mit <b>dem</b> Taxi.", "Maria wohnt seit <b>einem</b> Jahr in Wien.", "Ich gehe <b>zum</b> Bahnhof."],
      mistake: { de: "Nach diesen Präpositionen niemals Akkusativ: <s>mit den Bus</s> &rarr; <b>mit dem Bus</b>.", ar: "بعدهم Dativ مش Akkusativ." }
    },
    exercises: [
      { title: "Übung 1", instruction: { de: "Ergänze den Artikel im Dativ.", ar: "أكمل أداة الجر." }, example: "mit dem Taxi",
        items: ["a) Paul fährt mit {{dem}} Taxi nach Hause.", "b) Maria wohnt seit {{einem}} Jahr in Wien.", "c) Ich hole das Paket von {{der}} Post ab.", "d) Wann gehst du morgens aus {{dem}} Haus?", "e) Wohin gehst du nach {{dem}} Essen?", "f) Hol bitte den Wein aus {{dem}} Keller!", "g) Peter wohnt bei {{den}} Eltern.", "h) Eva arbeitet seit {{einer}} Woche in Bonn.", "i) Klaus nimmt die Jacke aus {{dem}} Schrank.", "j) Nach {{der}} Arbeit besucht er Maria.", "k) Das Hotel liegt {{dem}} Bahnhof gegenüber.", "l) Max wohnte lange bei {{seiner}} Tante."] },
      { title: "Übung 2", instruction: { de: "Ergänze eine Präposition mit Dativ.", ar: "أكمل حرف جر مناسب." },
        items: ["a) Paul geht {{mit}} dem Hund spazieren.", "b) Diese Tomaten kommen {{aus}} Spanien.", "c) Ich wohne {{seit}} drei Monaten in Passau.", "d) Die Tankstelle liegt dem Parkhaus {{gegenüber}}.", "e) Wie viel Geld hast du {{bei}} dir?", "f) Kannst du mich {{vom}} Flughafen abholen?", "g) Maria will nicht {{mit}} mir in Urlaub fahren.", "h) Ich bringe dich {{zum}} Bahnhof.", "i) Maria wohnt {{bei}} ihren Eltern.", "j) Sie fährt {{mit}} dem Taxi nach Hause.", "k) Wir holen unsere Tante {{vom}} Bahnhof ab.", "l) Heute Nachmittag gehe ich {{zu}} Klaus.", "m) {{Bei}} Regen mag ich nicht joggen.", "n) {{Von}} wem ist das Geschenk?"] },
      { title: "Übung 3", instruction: { de: "Antworte mit einem Dativpronomen.", ar: "جاوب بضمير الجر." }, example: "Gehst du zu Klaus? – Nein, ich gehe nicht zu ihm.",
        items: ["a) Kommst du von Julia? → Nein, ich komme nicht von {{ihr}}.", "b) Telefonierst du mit dem Großvater? → Nein, ich telefoniere nicht mit {{ihm}}.", "c) Sprichst du mit der Sekretärin? → Nein, ich spreche nicht mit {{ihr}}.", "d) Sind die Blumen von Max? → Nein, sie sind nicht von {{ihm}}.", "e) Lernst du mit den Studentinnen? → Nein, ich lerne nicht mit {{ihnen}}.", "f) Fährst du zu Frau Berg? → Nein, ich fahre nicht zu {{ihr}}.", "g) Wohnst du bei deinen Eltern? → Nein, ich wohne nicht bei {{ihnen}}.", "h) Ist das Geschenk von Christian? → Nein, es ist nicht von {{ihm}}."] }
    ]
  },

  /* ============================ 8.1 ============================ */
  "8.1": {
    explain: {
      idea: { de: "Das <b>Perfekt</b> ist die wichtigste Vergangenheit beim Sprechen: <b>haben/sein + Partizip II</b>.", ar: "الـ Perfekt هو ماضي الكلام: haben/sein + التصريف الثالث." },
      rules: [
        { de: "Schwach: <b>ge-…-t</b> (gekauft), Verben auf -ieren ohne ge (telefoniert).", ar: "ضعيف: ge…t، وأفعال ‑ieren بدون ge." },
        { de: "Stark: <b>ge-…-en</b> mit Vokalwechsel (gesprochen, gegangen).", ar: "قوي: ge…en مع تغيّر الحرف." },
        { de: "Mit <b>sein</b> bei Bewegung/Zustandswechsel (ist gereist, ist gegangen). Nicht trennbar: ohne ge (besucht). Trennbar: ge nach Vorsilbe (eingekauft).", ar: "sein للحركة/تغيّر الحالة. غير قابل للفصل بدون ge، القابل ge بعد البادئة." }
      ],
      examples: ["Ich <b>habe</b> ein Eis <b>gekauft</b>.", "Ich <b>bin</b> nach Hause <b>gegangen</b>.", "Du <b>hast</b> etwas <b>eingekauft</b>."],
      mistake: { de: "Bewegung &rarr; <b>sein</b>: <s>Ich habe gegangen</s> &rarr; <b>Ich bin gegangen</b>.", ar: "الحركة بـ sein: Ich bin gegangen." }
    },
    exercises: [
      { title: "Übung 1", instruction: { de: "Schwache Verben im Perfekt: Ergänze Hilfsverb und Partizip II.", ar: "الأفعال الضعيفة: أكمل الفعل المساعد والتصريف الثالث." }, example: "kaufen – du – den Wagen → Du hast den Wagen gekauft.",
        items: ["a) wohnen – er – in Köln → Er {{hat}} in Köln {{gewohnt}}.", "b) lernen – Eva – Arabisch → Eva {{hat}} Arabisch {{gelernt}}.", "c) suchen – er – seine Brille → Er {{hat}} seine Brille {{gesucht}}.", "d) holen – du – Bier → Du {{hast}} Bier aus dem Keller {{geholt}}.", "e) buchen – wir – einen Flug → Wir {{haben}} einen Flug {{gebucht}}.", "f) danken – ihr – euren Freunden → Ihr {{habt}} euren Freunden {{gedankt}}.", "g) spielen – sie – Fußball → Sie {{haben}} Fußball {{gespielt}}.", "h) sagen – Max – kein Wort → Max {{hat}} kein Wort {{gesagt}}.", "i) passen – die Jacke – mir nicht → Die Jacke {{hat}} mir nicht {{gepasst}}.", "j) warten – wir – auf den Bus → Wir {{haben}} auf den Bus {{gewartet}}.", "k) antworten – du – der Reporterin → Du {{hast}} der Reporterin {{geantwortet}}.", "l) mieten – Eva und Max – ein Auto → Eva und Max {{haben}} ein Auto {{gemietet}}.", "m) korrigieren – du – den Text → Du {{hast}} den Text {{korrigiert}}.", "n) gratulieren – wir – ihm → Wir {{haben}} ihm {{gratuliert}}.", "o) studieren – Lisa – Informatik → Lisa {{hat}} Informatik {{studiert}}.", "p) reisen – Paul – nach Japan → Paul {{ist}} nach Japan {{gereist}}.", "q) passieren – ein Unfall → Ein Unfall {{ist}} {{passiert}}.", "r) starten – das Flugzeug – schon → Das Flugzeug {{ist}} schon {{gestartet}}."] },
      { title: "Übung 2", instruction: { de: "Starke Verben im Perfekt: Ergänze Hilfsverb und Partizip II.", ar: "الأفعال القوية في الـ Perfekt." }, example: "Wann trinkst du den Tee? – Ich habe ihn schon getrunken.",
        items: ["a) Wann triffst du Carmen? → Ich {{habe}} sie schon {{getroffen}}.", "b) Wann wäschst du den Pullover? → Ich {{habe}} ihn schon {{gewaschen}}.", "c) Wann liest du die Zeitung? → Ich {{habe}} sie schon {{gelesen}}.", "d) Wann isst du den Kuchen? → Ich {{habe}} ihn schon {{gegessen}}.", "e) Wann hilfst du Paul? → Ich {{habe}} ihm schon {{geholfen}}.", "f) Wann schließt du das Fenster? → Ich {{habe}} es schon {{geschlossen}}.", "g) Wann schneidest du die Zwiebel? → Ich {{habe}} sie schon {{geschnitten}}.", "h) Wann schreibst du Eva und Maria? → Ich {{habe}} ihnen schon {{geschrieben}}."] },
      { title: "Übung 3", instruction: { de: "Bilde die Perfekt-Frage.", ar: "كوّن سؤال الـ Perfekt." }, example: "was – trinken → Was hast du getrunken?",
        items: ["a) was – nehmen → {{=Was hast du genommen}}", "b) was – finden → {{=Was hast du gefunden}}", "c) wem – helfen → {{=Wem hast du geholfen}}", "d) wie lange – schlafen → {{=Wie lange hast du geschlafen}}", "e) was – tragen → {{=Was hast du getragen}}", "f) wem – schreiben → {{=Wem hast du geschrieben}}", "g) was – lesen → {{=Was hast du gelesen}}", "h) wen – sehen → {{=Wen hast du gesehen}}", "i) was – essen → {{=Was hast du gegessen}}", "j) wohin – gehen → {{=Wohin bist du gegangen}}", "k) wie lange – bleiben → {{=Wie lange bist du geblieben}}", "l) wohin – laufen → {{=Wohin bist du gelaufen}}", "m) wann – kommen → {{=Wann bist du gekommen}}", "n) wohin – fahren → {{=Wohin bist du gefahren}}", "o) wohin – fliegen → {{=Wohin bist du geflogen}}", "p) wo – sitzen → {{=Wo hast du gesessen|Wo bist du gesessen}}", "q) wo – stehen → {{=Wo hast du gestanden|Wo bist du gestanden}}", "r) wo – liegen → {{=Wo hast du gelegen|Wo bist du gelegen}}"] },
      { title: "Übung 4", instruction: { de: "Gemischte Verben: bilde die Perfekt-Frage.", ar: "أفعال مختلطة: كوّن سؤال الـ Perfekt." }, example: "das Paket – bringen → Hast du das Paket gebracht?",
        items: ["a) die Adresse – nennen → {{=Hast du die Adresse genannt}}", "b) die Antwort – wissen → {{=Hast du die Antwort gewusst}}", "c) Paul eine E-Mail – senden → {{=Hast du Paul eine E-Mail gesandt|Hast du Paul eine E-Mail gesendet}}", "d) die Journalistin – kennen → {{=Hast du die Journalistin gekannt}}", "e) an die Verabredung – denken → {{=Hast du an die Verabredung gedacht}}", "f) auf die Straße – rennen → {{=Bist du auf die Straße gerannt}}"] },
      { title: "Übung 5", instruction: { de: "Nicht trennbare Verben (ohne ge): Partizip II.", ar: "أفعال غير قابلة للفصل (بدون ge)." }, example: "bestellen → Du hast etwas bestellt.",
        items: ["a) erklären → Du hast etwas {{erklärt}}.", "b) genießen → Du hast etwas {{genossen}}.", "c) empfehlen → Du hast etwas {{empfohlen}}.", "d) verlieren → Du hast etwas {{verloren}}.", "e) bekommen → Du hast etwas {{bekommen}}.", "f) zerbrechen → Du hast etwas {{zerbrochen}}.", "g) erwarten → Du hast etwas {{erwartet}}.", "h) vergessen → Du hast etwas {{vergessen}}."] },
      { title: "Übung 6", instruction: { de: "Trennbare Verben (ge nach der Vorsilbe): Perfekt.", ar: "أفعال قابلة للفصل (ge بعد البادئة)." }, example: "einkaufen – etwas → Du hast etwas eingekauft.",
        items: ["a) zuhören – mir → Du hast mir {{zugehört}}.", "b) anrufen – mich → Du hast mich {{angerufen}}.", "c) mitbringen – etwas → Du hast etwas {{mitgebracht}}.", "d) einladen – mich → Du hast mich {{eingeladen}}.", "e) aufwecken – mich → Du hast mich {{aufgeweckt}}.", "f) zurückgeben – etwas → Du hast etwas {{zurückgegeben}}.", "g) aufstehen – gerade → Du {{bist}} gerade {{aufgestanden}}.", "h) einsteigen – ins Taxi → Du {{bist}} ins Taxi {{eingestiegen}}."] }
    ]
  },

  /* ============================ 8.2 ============================ */
  "8.2": {
    explain: {
      idea: { de: "<b>Konjunktionen</b> verbinden zwei Hauptsätze. Danach bleibt die <b>normale Wortstellung</b>.", ar: "أدوات الربط بتوصل جملتين، وبعدها الترتيب يفضل عادي." },
      rules: [
        { de: "<b>und</b> = Aufzählung, <b>oder</b> = Alternative, <b>aber</b> = Gegensatz.", ar: "und إضافة، oder اختيار، aber تضاد." },
        { de: "<b>sondern</b> = Korrektur nach einer Verneinung (nicht … sondern …).", ar: "sondern تصحيح بعد نفي." },
        { de: "<b>denn</b> = Grund (warum?). Nach denn keine Umstellung.", ar: "denn سبب. بعدها مفيش قلب للترتيب." }
      ],
      examples: ["Ich lerne Deutsch, <b>denn</b> ich brauche Deutsch.", "Paul wohnt nicht in Köln, <b>sondern</b> in Bonn.", "Ich habe Zeit, <b>aber</b> ich bin müde."],
      mistake: { de: "<b>sondern</b> nur nach Verneinung. Sonst <b>aber</b>.", ar: "sondern بعد النفي بس، غير كده aber." }
    },
    exercises: [
      { title: "Übung 1", instruction: { de: "Verbinde die zwei Sätze mit der passenden Konjunktion.", ar: "اربط الجملتين بأداة الربط المناسبة." },
        items: ["a) Sie fliegen nicht nach Kreta. Ihre Mutter liegt im Krankenhaus. (denn) → {{=Sie fliegen nicht nach Kreta, denn ihre Mutter liegt im Krankenhaus}}", "b) Paul fährt nicht zu Klaus. Er fährt zu Maria. (sondern) → {{=Paul fährt nicht zu Klaus, sondern zu Maria|Paul fährt nicht zu Klaus, sondern er fährt zu Maria}}", "c) Ich möchte dich einladen. Du hast keine Zeit. (aber) → {{=Ich möchte dich einladen, aber du hast keine Zeit}}", "d) Lisa besucht mich vielleicht am Montag. Vielleicht am Dienstag. (oder) → {{=Lisa besucht mich vielleicht am Montag oder am Dienstag|Lisa besucht mich vielleicht am Montag, oder sie besucht mich am Dienstag}}", "e) Werner ist Journalist. Er arbeitet bei einer Tageszeitung. (und) → {{=Werner ist Journalist und arbeitet bei einer Tageszeitung|Werner ist Journalist und er arbeitet bei einer Tageszeitung}}", "f) Maria bestellt keinen Wein. Sie bestellt Bier. (sondern) → {{=Maria bestellt keinen Wein, sondern Bier|Maria bestellt keinen Wein, sondern sie bestellt Bier}}", "g) Wir gehen nicht ins Kino. Wir gehen ins Theater. (sondern) → {{=Wir gehen nicht ins Kino, sondern ins Theater|Wir gehen nicht ins Kino, sondern wir gehen ins Theater}}", "h) Er geht in den Keller. Er holt eine Flasche Wein. (und) → {{=Er geht in den Keller und holt eine Flasche Wein|Er geht in den Keller und er holt eine Flasche Wein}}", "i) Wir wollen Lisa besuchen. Sie hat morgen Geburtstag. (denn) → {{=Wir wollen Lisa besuchen, denn sie hat morgen Geburtstag}}", "j) Er will die Wohnung nicht mieten. Sie ist viel zu dunkel. (denn) → {{=Er will die Wohnung nicht mieten, denn sie ist viel zu dunkel}}"] },
      { title: "Übung 2", instruction: { de: "Ergänze die passende Konjunktion (und / oder / aber / sondern / denn).", ar: "أكمل أداة الربط المناسبة." },
        items: ["a) Jonas kann mich heute nicht besuchen, {{denn}} er muss noch lange arbeiten.", "b) Wir können ins Kino {{oder}} ins Theater gehen.", "c) Paul ist ein sehr guter Koch {{und|denn}} er kocht oft für seine Familie.", "d) Wir möchten in Urlaub fahren, {{aber}} wir haben leider kein Geld.", "e) Sie können die Rechnung bar {{oder}} mit Karte bezahlen.", "f) Ich will nicht in dieses Restaurant gehen, {{denn}} der Service ist sehr schlecht.", "g) Maria hat gestern Claudia besucht, {{aber}} sie ist nicht sehr lange geblieben.", "h) Ich räume mein Zimmer auf, {{und}} Robert putzt die Küche.", "i) Ich schicke dir keine E-Mail, {{sondern}} ein Foto.", "j) Bei dem Projekt helfen mir Paul {{und}} sein Bruder.", "k) Boris arbeitet viel und hart, {{aber}} er verdient nur sehr wenig Geld."] }
    ]
  },

  /* ============================ 8.3 ============================ */
  "8.3": {
    explain: {
      idea: { de: "Einige Präpositionen verlangen <b>immer Akkusativ</b>.", ar: "بعض حروف الجر بتاخد Akkusativ دايمًا." },
      rules: [
        { de: "Akkusativ-Präpositionen: <b>bis, durch, für, gegen, ohne, um</b>.", ar: "حروف الجر: bis/durch/für/gegen/ohne/um." },
        { de: "Maskulin wird <b>den / einen</b>; feminin, neutral, Plural bleiben gleich.", ar: "المذكر يبقى den/einen، والباقي زي ما هو." },
        { de: "Verschmelzungen: <b>durchs</b> (durch das), <b>fürs</b> (für das), <b>ums</b> (um das).", ar: "اندماجات: durchs/fürs/ums." }
      ],
      examples: ["Wir gehen <b>durch den</b> Park.", "Das Geschenk ist <b>für meine</b> Mutter.", "Er kommt <b>ohne einen</b> Stift."],
      mistake: { de: "Nach diesen Präpositionen kein Dativ: <s>für dem Freund</s> &rarr; <b>für den Freund</b>.", ar: "بعدهم Akkusativ مش Dativ." }
    },
    exercises: [
      { title: "Übung 1", instruction: { de: "Ergänze das richtige Wort im Akkusativ.", ar: "أكمل الكلمة الصح في النصب." },
        items: ["a) Paul fährt ohne {{seine}} Kollegin zur Konferenz.", "b) Der Hund läuft um {{den}} Baum.", "c) Ich bin gegen {{den}} Stuhl gelaufen. Aua!", "d) Sie geht nie ohne {{einen}} Schirm spazieren.", "e) Das Geschenk ist für {{deinen}} Großvater.", "f) Peter geht durch {{die}} Fußgängerzone.", "g) Robert fährt für {{eine}} Woche nach Italien.", "h) Wo ist der Schlüssel für {{den}} Keller?", "i) Er will nicht ohne {{mich}} nach Spanien fliegen.", "j) Die Reporter stehen um {{die}} Ministerin.", "k) Eva schreibt das Diktat ohne {{einen}} Fehler.", "l) Gehen wir nicht durch {{die}} Bahnhofsstraße?", "m) Wir spielen gegen {{die}} Mannschaft aus Köln.", "n) Jonas ist ohne {{eine}} Erklärung weggegangen.", "o) Peter muss noch für {{die}} Prüfung lernen.", "p) Für {{wen}} ist die Torte hier?"] },
      { title: "Übung 2", instruction: { de: "Ergänze eine Präposition mit Akkusativ.", ar: "أكمل حرف جر بالنصب." },
        items: ["a) Die Gäste sitzen {{um}} den Tisch und trinken Wein.", "b) Der Mechaniker muss den Wagen {{bis}} nächsten Freitag reparieren.", "c) Sie sieht {{durch}} das Mikroskop.", "d) Es ist kalt. Geh nicht {{ohne}} Jacke raus!", "e) Er will Rosen {{für}} die Freundin kaufen.", "f) Geh nachts nicht {{durch}} den Park! Das ist zu gefährlich.", "g) Das ist eine schlechte Idee. Ich bin {{gegen}} die Idee.", "h) Sie kommt immer {{um}} 18.00 Uhr nach Hause.", "i) Ich kann die Arbeit {{ohne}} Hilfe nicht machen.", "j) Der Zug fährt nur {{bis}} Frankfurt. Dort müssen Sie umsteigen.", "k) Er sieht {{durch}} das Fenster auf die Straße.", "l) Du kannst nicht {{ohne}} ein Geschenk zur Party gehen!", "m) {{Für}} wen ist das Geschenk?", "n) Der Mann lacht {{ohne}} Grund."] }
    ]
  }

};
