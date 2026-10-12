/* Important verbs of Netzwerk neu B1.2 (chapters 7-12) for the B1 verb reference.
   Loaded after data_b1_verbs.js; verbs that already exist are skipped. */
(function addB12Verbs(){
  if (!Array.isArray(window.B1_VERBS)) return;
  const known = new Set(window.B1_VERBS.map(verb => verb.inf));
  const verbs = [
    {
      "chapter": 7,
      "inf": "sich streiten",
      "forms": [
        "streite mich",
        "streitest dich",
        "streitet sich",
        "streiten uns",
        "streitet euch",
        "streiten sich"
      ],
      "praes": "streitet sich",
      "praet": "stritt sich",
      "aux": "haben",
      "part": "sich gestritten",
      "rektion": "sich streiten mit + D über + A",
      "ar": "يتخانق / يتجادل",
      "example": "Meine Freundin und ich streiten uns oft, aber nach zehn Minuten ist alles vergessen."
    },
    {
      "chapter": 7,
      "inf": "sich verstehen",
      "forms": [
        "verstehe mich",
        "verstehst dich",
        "versteht sich",
        "verstehen uns",
        "versteht euch",
        "verstehen sich"
      ],
      "praes": "versteht sich",
      "praet": "verstand sich",
      "aux": "haben",
      "part": "sich verstanden",
      "rektion": "sich (gut) verstehen mit + D",
      "ar": "يتفاهم مع / علاقته كويسة بـ",
      "example": "Ich verstehe mich gut mit meinem Mitbewohner."
    },
    {
      "chapter": 7,
      "inf": "sich amüsieren",
      "forms": [
        "amüsiere mich",
        "amüsierst dich",
        "amüsiert sich",
        "amüsieren uns",
        "amüsiert euch",
        "amüsieren sich"
      ],
      "praes": "amüsiert sich",
      "praet": "amüsierte sich",
      "aux": "haben",
      "part": "sich amüsiert",
      "rektion": "sich amüsieren über + A",
      "ar": "يتسلى / يضحك على",
      "example": "Wir haben uns auf der Party köstlich amüsiert."
    },
    {
      "chapter": 7,
      "inf": "schätzen",
      "forms": [
        "schätze",
        "schätzt",
        "schätzt",
        "schätzen",
        "schätzt",
        "schätzen"
      ],
      "praes": "schätzt",
      "praet": "schätzte",
      "aux": "haben",
      "part": "geschätzt",
      "rektion": "etwas an jemandem (D) schätzen",
      "ar": "يقدّر / يخمّن",
      "example": "An meiner Freundin schätze ich vor allem ihre Ehrlichkeit."
    },
    {
      "chapter": 7,
      "inf": "sich einigen",
      "forms": [
        "einige mich",
        "einigst dich",
        "einigt sich",
        "einigen uns",
        "einigt euch",
        "einigen sich"
      ],
      "praes": "einigt sich",
      "praet": "einigte sich",
      "aux": "haben",
      "part": "sich geeinigt",
      "rektion": "sich einigen mit + D auf + A",
      "ar": "يتفق على",
      "example": "Nach einer langen Diskussion haben wir uns auf einen Kompromiss geeinigt."
    },
    {
      "chapter": 7,
      "inf": "sich aufregen",
      "forms": [
        "rege mich auf",
        "regst dich auf",
        "regt sich auf",
        "regen uns auf",
        "regt euch auf",
        "regen sich auf"
      ],
      "praes": "regt sich auf",
      "praet": "regte sich auf",
      "aux": "haben",
      "part": "sich aufgeregt",
      "rektion": "sich aufregen über + A",
      "ar": "يتعصب / ينفعل على",
      "example": "Reg dich doch nicht gleich so auf!"
    },
    {
      "chapter": 7,
      "inf": "behaupten",
      "forms": [
        "behaupte",
        "behauptest",
        "behauptet",
        "behaupten",
        "behauptet",
        "behaupten"
      ],
      "praes": "behauptet",
      "praet": "behauptete",
      "aux": "haben",
      "part": "behauptet",
      "rektion": "behaupten, dass …",
      "ar": "يدّعي / يزعم",
      "example": "Er behauptet, dass er nie lügt."
    },
    {
      "chapter": 7,
      "inf": "feststellen",
      "forms": [
        "stelle fest",
        "stellst fest",
        "stellt fest",
        "stellen fest",
        "stellt fest",
        "stellen fest"
      ],
      "praes": "stellt fest",
      "praet": "stellte fest",
      "aux": "haben",
      "part": "festgestellt",
      "rektion": "feststellen, dass …",
      "ar": "يلاحظ / يكتشف",
      "example": "Wir stellten fest, dass wir im selben Haus wohnten."
    },
    {
      "chapter": 7,
      "inf": "beweisen",
      "forms": [
        "beweise",
        "beweist",
        "beweist",
        "beweisen",
        "beweist",
        "beweisen"
      ],
      "praes": "beweist",
      "praet": "bewies",
      "aux": "haben",
      "part": "bewiesen",
      "rektion": "jemandem (D) etwas beweisen",
      "ar": "يثبت",
      "example": "Kannst du beweisen, dass du das Geld nicht genommen hast?"
    },
    {
      "chapter": 7,
      "inf": "lügen",
      "forms": [
        "lüge",
        "lügst",
        "lügt",
        "lügen",
        "lügt",
        "lügen"
      ],
      "praes": "lügt",
      "praet": "log",
      "aux": "haben",
      "part": "gelogen",
      "rektion": "—",
      "ar": "يكذب",
      "example": "Ich bin sicher, dass er gelogen hat."
    },
    {
      "chapter": 7,
      "inf": "schweigen",
      "forms": [
        "schweige",
        "schweigst",
        "schweigt",
        "schweigen",
        "schweigt",
        "schweigen"
      ],
      "praes": "schweigt",
      "praet": "schwieg",
      "aux": "haben",
      "part": "geschwiegen",
      "rektion": "—",
      "ar": "يسكت / يصمت",
      "example": "Nach dem Streit schwieg sie den ganzen Abend."
    },
    {
      "chapter": 7,
      "inf": "stehlen",
      "forms": [
        "stehle",
        "stiehlst",
        "stiehlt",
        "stehlen",
        "stehlt",
        "stehlen"
      ],
      "praes": "stiehlt",
      "praet": "stahl",
      "aux": "haben",
      "part": "gestohlen",
      "rektion": "jemandem (D) etwas stehlen",
      "ar": "يسرق",
      "example": "Der Rabe hat dem Fuchs ein Stück Käse gestohlen."
    },
    {
      "chapter": 7,
      "inf": "übertreiben",
      "forms": [
        "übertreibe",
        "übertreibst",
        "übertreibt",
        "übertreiben",
        "übertreibt",
        "übertreiben"
      ],
      "praes": "übertreibt",
      "praet": "übertrieb",
      "aux": "haben",
      "part": "übertrieben",
      "rektion": "(es mit + D) übertreiben",
      "ar": "يبالغ",
      "example": "Jetzt übertreibst du aber etwas!"
    },
    {
      "chapter": 7,
      "inf": "zwingen",
      "forms": [
        "zwinge",
        "zwingst",
        "zwingt",
        "zwingen",
        "zwingt",
        "zwingen"
      ],
      "praes": "zwingt",
      "praet": "zwang",
      "aux": "haben",
      "part": "gezwungen",
      "rektion": "jemanden zu + D zwingen",
      "ar": "يجبر / يُكره",
      "example": "Niemand kann dich zwingen, mit ihm befreundet zu sein."
    },
    {
      "chapter": 7,
      "inf": "nachgeben",
      "forms": [
        "gebe nach",
        "gibst nach",
        "gibt nach",
        "geben nach",
        "gebt nach",
        "geben nach"
      ],
      "praes": "gibt nach",
      "praet": "gab nach",
      "aux": "haben",
      "part": "nachgegeben",
      "rektion": "jemandem (D) nachgeben",
      "ar": "يتنازل / يرضخ",
      "example": "In einer Beziehung muss mal der eine, mal der andere nachgeben."
    },
    {
      "chapter": 7,
      "inf": "zusammenstoßen",
      "forms": [
        "stoße zusammen",
        "stößt zusammen",
        "stößt zusammen",
        "stoßen zusammen",
        "stoßt zusammen",
        "stoßen zusammen"
      ],
      "praes": "stößt zusammen",
      "praet": "stieß zusammen",
      "aux": "sein",
      "part": "zusammengestoßen",
      "rektion": "zusammenstoßen mit + D",
      "ar": "يصطدم بـ",
      "example": "Im Flur bin ich mit meinem neuen Nachbarn zusammengestoßen."
    },
    {
      "chapter": 7,
      "inf": "beißen",
      "forms": [
        "beiße",
        "beißt",
        "beißt",
        "beißen",
        "beißt",
        "beißen"
      ],
      "praes": "beißt",
      "praet": "biss",
      "aux": "haben",
      "part": "gebissen",
      "rektion": "jemanden in + A beißen",
      "ar": "يعضّ",
      "example": "Der Hund hat den Briefträger ins Bein gebissen."
    },
    {
      "chapter": 7,
      "inf": "fressen",
      "forms": [
        "fresse",
        "frisst",
        "frisst",
        "fressen",
        "fresst",
        "fressen"
      ],
      "praes": "frisst",
      "praet": "fraß",
      "aux": "haben",
      "part": "gefressen",
      "rektion": "—",
      "ar": "يأكل (للحيوانات) / يفترس",
      "example": "Der Fuchs wollte den Hasen fressen."
    },
    {
      "chapter": 7,
      "inf": "beschließen",
      "forms": [
        "beschließe",
        "beschließt",
        "beschließt",
        "beschließen",
        "beschließt",
        "beschließen"
      ],
      "praes": "beschließt",
      "praet": "beschloss",
      "aux": "haben",
      "part": "beschlossen",
      "rektion": "beschließen, etwas zu tun",
      "ar": "يقرر",
      "example": "Die Mehrheit der Versammlung hat beschlossen zu streiken."
    },
    {
      "chapter": 8,
      "inf": "sich anstrengen",
      "forms": [
        "strenge mich an",
        "strengst dich an",
        "strengt sich an",
        "strengen uns an",
        "strengt euch an",
        "strengen sich an"
      ],
      "praes": "strengt sich an",
      "praet": "strengte sich an",
      "aux": "haben",
      "part": "sich angestrengt",
      "rektion": "sich anstrengen für + A",
      "ar": "يجتهد / يبذل مجهودًا",
      "example": "Ich habe mich beim Training sehr angestrengt."
    },
    {
      "chapter": 8,
      "inf": "raten",
      "forms": [
        "rate",
        "rätst",
        "rät",
        "raten",
        "ratet",
        "raten"
      ],
      "praes": "rät",
      "praet": "riet",
      "aux": "haben",
      "part": "geraten",
      "rektion": "jemandem raten zu + D / zu + Infinitiv",
      "ar": "ينصح",
      "example": "Die Ärztin hat mir zu mehr Bewegung geraten."
    },
    {
      "chapter": 8,
      "inf": "atmen",
      "forms": [
        "atme",
        "atmest",
        "atmet",
        "atmen",
        "atmet",
        "atmen"
      ],
      "praes": "atmet",
      "praet": "atmete",
      "aux": "haben",
      "part": "geatmet",
      "rektion": "—",
      "ar": "يتنفّس",
      "example": "Atmen Sie bitte tief ein und aus."
    },
    {
      "chapter": 8,
      "inf": "leiden",
      "forms": [
        "leide",
        "leidest",
        "leidet",
        "leiden",
        "leidet",
        "leiden"
      ],
      "praes": "leidet",
      "praet": "litt",
      "aux": "haben",
      "part": "gelitten",
      "rektion": "leiden an + D / unter + D",
      "ar": "يعاني (من)",
      "example": "Mein Onkel leidet seit Jahren an Rückenschmerzen."
    },
    {
      "chapter": 8,
      "inf": "einnehmen",
      "forms": [
        "nehme ein",
        "nimmst ein",
        "nimmt ein",
        "nehmen ein",
        "nehmt ein",
        "nehmen ein"
      ],
      "praes": "nimmt ein",
      "praet": "nahm ein",
      "aux": "haben",
      "part": "eingenommen",
      "rektion": "ein Medikament einnehmen",
      "ar": "يتناول (دواء)",
      "example": "Nehmen Sie die Tabletten bitte nach dem Essen ein."
    },
    {
      "chapter": 8,
      "inf": "auflösen",
      "forms": [
        "löse auf",
        "löst auf",
        "löst auf",
        "lösen auf",
        "löst auf",
        "lösen auf"
      ],
      "praes": "löst auf",
      "praet": "löste auf",
      "aux": "haben",
      "part": "aufgelöst",
      "rektion": "etwas in + D auflösen",
      "ar": "يذوّب",
      "example": "Lösen Sie das Pulver in einem Glas Wasser auf."
    },
    {
      "chapter": 8,
      "inf": "verschreiben",
      "forms": [
        "verschreibe",
        "verschreibst",
        "verschreibt",
        "verschreiben",
        "verschreibt",
        "verschreiben"
      ],
      "praes": "verschreibt",
      "praet": "verschrieb",
      "aux": "haben",
      "part": "verschrieben",
      "rektion": "jemandem etwas verschreiben",
      "ar": "يكتب (دواء) في روشتة",
      "example": "Der Arzt hat mir ein Schmerzmittel verschrieben."
    },
    {
      "chapter": 8,
      "inf": "krankschreiben",
      "forms": [
        "schreibe krank",
        "schreibst krank",
        "schreibt krank",
        "schreiben krank",
        "schreibt krank",
        "schreiben krank"
      ],
      "praes": "schreibt krank",
      "praet": "schrieb krank",
      "aux": "haben",
      "part": "krankgeschrieben",
      "rektion": "jemanden krankschreiben",
      "ar": "يدّي إجازة مرضية",
      "example": "Die Ärztin hat mich für eine Woche krankgeschrieben."
    },
    {
      "chapter": 8,
      "inf": "aufbewahren",
      "forms": [
        "bewahre auf",
        "bewahrst auf",
        "bewahrt auf",
        "bewahren auf",
        "bewahrt auf",
        "bewahren auf"
      ],
      "praes": "bewahrt auf",
      "praet": "bewahrte auf",
      "aux": "haben",
      "part": "aufbewahrt",
      "rektion": "etwas in + D aufbewahren",
      "ar": "يحتفظ بـ / يحفظ",
      "example": "Wertsachen können Sie im Schließfach aufbewahren."
    },
    {
      "chapter": 8,
      "inf": "warnen",
      "forms": [
        "warne",
        "warnst",
        "warnt",
        "warnen",
        "warnt",
        "warnen"
      ],
      "praes": "warnt",
      "praet": "warnte",
      "aux": "haben",
      "part": "gewarnt",
      "rektion": "jemanden warnen vor + D",
      "ar": "يحذّر (من)",
      "example": "Die Pflegerin hat mich vor dem glatten Boden gewarnt."
    },
    {
      "chapter": 8,
      "inf": "kämmen",
      "forms": [
        "kämme",
        "kämmst",
        "kämmt",
        "kämmen",
        "kämmt",
        "kämmen"
      ],
      "praes": "kämmt",
      "praet": "kämmte",
      "aux": "haben",
      "part": "gekämmt",
      "rektion": "sich (D) die Haare kämmen",
      "ar": "يمشّط / يسرّح (الشعر)",
      "example": "Hast du dir heute schon die Haare gekämmt?"
    },
    {
      "chapter": 8,
      "inf": "empfinden",
      "forms": [
        "empfinde",
        "empfindest",
        "empfindet",
        "empfinden",
        "empfindet",
        "empfinden"
      ],
      "praes": "empfindet",
      "praet": "empfand",
      "aux": "haben",
      "part": "empfunden",
      "rektion": "etwas als + A empfinden",
      "ar": "يشعر بـ / يحسّ",
      "example": "Viele Menschen empfinden Musik als beruhigend."
    },
    {
      "chapter": 8,
      "inf": "spüren",
      "forms": [
        "spüre",
        "spürst",
        "spürt",
        "spüren",
        "spürt",
        "spüren"
      ],
      "praes": "spürt",
      "praet": "spürte",
      "aux": "haben",
      "part": "gespürt",
      "rektion": "—",
      "ar": "يحسّ بـ",
      "example": "Nach der Spritze habe ich keine Schmerzen mehr gespürt."
    },
    {
      "chapter": 8,
      "inf": "sich wundern",
      "forms": [
        "wundere mich",
        "wunderst dich",
        "wundert sich",
        "wundern uns",
        "wundert euch",
        "wundern sich"
      ],
      "praes": "wundert sich",
      "praet": "wunderte sich",
      "aux": "haben",
      "part": "sich gewundert",
      "rektion": "sich wundern über + A",
      "ar": "يستغرب / يندهش (من)",
      "example": "Ich habe mich über das ungewöhnliche Museum gewundert."
    },
    {
      "chapter": 8,
      "inf": "betragen",
      "impersonal": true,
      "forms": [
        "betrage",
        "beträgst",
        "beträgt",
        "betragen",
        "betragt",
        "betragen"
      ],
      "praes": "beträgt",
      "praet": "betrug",
      "aux": "haben",
      "part": "betragen",
      "rektion": "—",
      "ar": "يبلغ (مقدار)",
      "example": "Die Gebühr für das Telefon beträgt zwei Euro pro Tag."
    },
    {
      "chapter": 8,
      "inf": "sinken",
      "forms": [
        "sinke",
        "sinkst",
        "sinkt",
        "sinken",
        "sinkt",
        "sinken"
      ],
      "praes": "sinkt",
      "praet": "sank",
      "aux": "sein",
      "part": "gesunken",
      "rektion": "—",
      "ar": "ينخفض / يهبط",
      "example": "Bei ruhiger Musik sinkt der Puls."
    },
    {
      "chapter": 8,
      "inf": "beeinflussen",
      "forms": [
        "beeinflusse",
        "beeinflusst",
        "beeinflusst",
        "beeinflussen",
        "beeinflusst",
        "beeinflussen"
      ],
      "praes": "beeinflusst",
      "praet": "beeinflusste",
      "aux": "haben",
      "part": "beeinflusst",
      "rektion": "—",
      "ar": "يؤثّر على",
      "example": "Musik kann unsere Stimmung stark beeinflussen."
    },
    {
      "chapter": 8,
      "inf": "sich merken",
      "forms": [
        "merke mir",
        "merkst dir",
        "merkt sich",
        "merken uns",
        "merkt euch",
        "merken sich"
      ],
      "praes": "merkt sich",
      "praet": "merkte sich",
      "aux": "haben",
      "part": "sich gemerkt",
      "rektion": "sich (D) etwas merken",
      "ar": "يحفظ / يفتكر",
      "example": "Neue Wörter kann ich mir mit Bildern besser merken."
    },
    {
      "chapter": 8,
      "inf": "überprüfen",
      "forms": [
        "überprüfe",
        "überprüfst",
        "überprüft",
        "überprüfen",
        "überprüft",
        "überprüfen"
      ],
      "praes": "überprüft",
      "praet": "überprüfte",
      "aux": "haben",
      "part": "überprüft",
      "rektion": "—",
      "ar": "يراجع / يتحقّق من",
      "example": "Überprüfen Sie Ihre Antworten am Ende noch einmal."
    },
    {
      "chapter": 9,
      "inf": "anregen",
      "forms": [
        "rege an",
        "regst an",
        "regt an",
        "regen an",
        "regt an",
        "regen an"
      ],
      "praes": "regt an",
      "praet": "regte an",
      "aux": "haben",
      "part": "angeregt",
      "rektion": "jemanden zu + D anregen",
      "ar": "يحفّز / يشجّع على",
      "example": "Das Bild regt die Besucher zum Nachdenken an."
    },
    {
      "chapter": 9,
      "inf": "ansprechen",
      "forms": [
        "spreche an",
        "sprichst an",
        "spricht an",
        "sprechen an",
        "sprecht an",
        "sprechen an"
      ],
      "praes": "spricht an",
      "praet": "sprach an",
      "aux": "haben",
      "part": "angesprochen",
      "rektion": "jemanden ansprechen (= gefallen)",
      "ar": "يعجب / يشدّ (حد)؛ يكلّم حد",
      "example": "Moderne Kunst spricht mich leider nicht an."
    },
    {
      "chapter": 9,
      "inf": "beschädigen",
      "forms": [
        "beschädige",
        "beschädigst",
        "beschädigt",
        "beschädigen",
        "beschädigt",
        "beschädigen"
      ],
      "praes": "beschädigt",
      "praet": "beschädigte",
      "aux": "haben",
      "part": "beschädigt",
      "rektion": "etwas beschädigen",
      "ar": "يتلف / يضرّ بـ",
      "example": "Die Putzfirma hat aus Versehen ein Kunstwerk beschädigt."
    },
    {
      "chapter": 9,
      "inf": "musizieren",
      "forms": [
        "musiziere",
        "musizierst",
        "musiziert",
        "musizieren",
        "musiziert",
        "musizieren"
      ],
      "praes": "musiziert",
      "praet": "musizierte",
      "aux": "haben",
      "part": "musiziert",
      "rektion": "mit + D musizieren",
      "ar": "يعزف موسيقى",
      "example": "Am Wochenende musizieren wir gemeinsam im Park."
    },
    {
      "chapter": 9,
      "inf": "improvisieren",
      "forms": [
        "improvisiere",
        "improvisierst",
        "improvisiert",
        "improvisieren",
        "improvisiert",
        "improvisieren"
      ],
      "praes": "improvisiert",
      "praet": "improvisierte",
      "aux": "haben",
      "part": "improvisiert",
      "rektion": "—",
      "ar": "يرتجل",
      "example": "Beim Impro-Theater improvisieren die Schauspieler ohne Text."
    },
    {
      "chapter": 9,
      "inf": "erfinden",
      "forms": [
        "erfinde",
        "erfindest",
        "erfindet",
        "erfinden",
        "erfindet",
        "erfinden"
      ],
      "praes": "erfindet",
      "praet": "erfand",
      "aux": "haben",
      "part": "erfunden",
      "rektion": "etwas erfinden",
      "ar": "يخترع / يألّف",
      "example": "Die Spieler erfinden die Geschichte direkt auf der Bühne."
    },
    {
      "chapter": 9,
      "inf": "anwenden",
      "forms": [
        "wende an",
        "wendest an",
        "wendet an",
        "wenden an",
        "wendet an",
        "wenden an"
      ],
      "praes": "wendet an",
      "praet": "wandte an",
      "aux": "haben",
      "part": "angewandt",
      "rektion": "etwas anwenden",
      "ar": "يطبّق / يستخدم",
      "example": "Die Malerin wendet eine besondere Technik an."
    },
    {
      "chapter": 9,
      "inf": "rennen",
      "forms": [
        "renne",
        "rennst",
        "rennt",
        "rennen",
        "rennt",
        "rennen"
      ],
      "praes": "rennt",
      "praet": "rannte",
      "aux": "sein",
      "part": "gerannt",
      "rektion": "—",
      "ar": "يجري بسرعة",
      "example": "Der Dieb ist schnell über die Bühne gerannt."
    },
    {
      "chapter": 9,
      "inf": "schreien",
      "forms": [
        "schreie",
        "schreist",
        "schreit",
        "schreien",
        "schreit",
        "schreien"
      ],
      "praes": "schreit",
      "praet": "schrie",
      "aux": "haben",
      "part": "geschrien",
      "rektion": "—",
      "ar": "يصرخ / يزعّق",
      "example": "Die Fans haben vor Begeisterung laut geschrien.",
      "praetForms": [
        "schrie",
        "schriest",
        "schrie",
        "schrien",
        "schriet",
        "schrien"
      ]
    },
    {
      "chapter": 9,
      "inf": "aufführen",
      "forms": [
        "führe auf",
        "führst auf",
        "führt auf",
        "führen auf",
        "führt auf",
        "führen auf"
      ],
      "praes": "führt auf",
      "praet": "führte auf",
      "aux": "haben",
      "part": "aufgeführt",
      "rektion": "etwas aufführen",
      "ar": "يعرض (مسرحية / عرض)",
      "example": "Die Theatergruppe führt im Mai ein neues Stück auf."
    },
    {
      "chapter": 9,
      "inf": "auftreten",
      "forms": [
        "trete auf",
        "trittst auf",
        "tritt auf",
        "treten auf",
        "tretet auf",
        "treten auf"
      ],
      "praes": "tritt auf",
      "praet": "trat auf",
      "aux": "sein",
      "part": "aufgetreten",
      "rektion": "in + D / bei + D auftreten",
      "ar": "يطلع على المسرح / يقدّم عرض",
      "example": "Die Band ist gestern im Stadtpark aufgetreten."
    },
    {
      "chapter": 9,
      "inf": "umsetzen",
      "forms": [
        "setze um",
        "setzt um",
        "setzt um",
        "setzen um",
        "setzt um",
        "setzen um"
      ],
      "praes": "setzt um",
      "praet": "setzte um",
      "aux": "haben",
      "part": "umgesetzt",
      "rektion": "etwas umsetzen",
      "ar": "ينفّذ / يحوّل لواقع",
      "example": "In der Werkstatt können die Jugendlichen eigene Ideen umsetzen."
    },
    {
      "chapter": 9,
      "inf": "veranstalten",
      "forms": [
        "veranstalte",
        "veranstaltest",
        "veranstaltet",
        "veranstalten",
        "veranstaltet",
        "veranstalten"
      ],
      "praes": "veranstaltet",
      "praet": "veranstaltete",
      "aux": "haben",
      "part": "veranstaltet",
      "rektion": "etwas veranstalten",
      "ar": "ينظّم (حفلة / فعالية)",
      "example": "Die Galerie veranstaltet eine Feier zur Eröffnung."
    },
    {
      "chapter": 9,
      "inf": "sich schminken",
      "forms": [
        "schminke mich",
        "schminkst dich",
        "schminkt sich",
        "schminken uns",
        "schminkt euch",
        "schminken sich"
      ],
      "praes": "schminkt sich",
      "praet": "schminkte sich",
      "aux": "haben",
      "part": "sich geschminkt",
      "rektion": "sich schminken",
      "ar": "يحط مكياج",
      "example": "Vor dem Auftritt schminkt sich die Schauspielerin besonders stark."
    },
    {
      "chapter": 9,
      "inf": "zusehen",
      "forms": [
        "sehe zu",
        "siehst zu",
        "sieht zu",
        "sehen zu",
        "seht zu",
        "sehen zu"
      ],
      "praes": "sieht zu",
      "praet": "sah zu",
      "aux": "haben",
      "part": "zugesehen",
      "rektion": "jemandem (D) zusehen",
      "ar": "يتفرّج على",
      "example": "Wir haben den Schauspielern bei der Probe zugesehen."
    },
    {
      "chapter": 9,
      "inf": "besprechen",
      "forms": [
        "bespreche",
        "besprichst",
        "bespricht",
        "besprechen",
        "besprecht",
        "besprechen"
      ],
      "praes": "bespricht",
      "praet": "besprach",
      "aux": "haben",
      "part": "besprochen",
      "rektion": "etwas mit + D besprechen",
      "ar": "يناقش / يتكلم في",
      "example": "Nach der Probe besprechen wir die Szene mit der Regisseurin."
    },
    {
      "chapter": 9,
      "inf": "einsperren",
      "forms": [
        "sperre ein",
        "sperrst ein",
        "sperrt ein",
        "sperren ein",
        "sperrt ein",
        "sperren ein"
      ],
      "praes": "sperrt ein",
      "praet": "sperrte ein",
      "aux": "haben",
      "part": "eingesperrt",
      "rektion": "jemanden einsperren",
      "ar": "يحبس",
      "example": "Man kann Menschen einsperren, aber nicht ihre Gedanken."
    },
    {
      "chapter": 9,
      "inf": "ersetzen",
      "forms": [
        "ersetze",
        "ersetzt",
        "ersetzt",
        "ersetzen",
        "ersetzt",
        "ersetzen"
      ],
      "praes": "ersetzt",
      "praet": "ersetzte",
      "aux": "haben",
      "part": "ersetzt",
      "rektion": "etwas durch + A ersetzen",
      "ar": "يستبدل / يعوّض",
      "example": "Das Museum hat die kaputte Statue durch eine Kopie ersetzt."
    },
    {
      "chapter": 9,
      "inf": "sich verbeugen",
      "forms": [
        "verbeuge mich",
        "verbeugst dich",
        "verbeugt sich",
        "verbeugen uns",
        "verbeugt euch",
        "verbeugen sich"
      ],
      "praes": "verbeugt sich",
      "praet": "verbeugte sich",
      "aux": "haben",
      "part": "sich verbeugt",
      "rektion": "sich vor + D verbeugen",
      "ar": "ينحني (للتحية)",
      "example": "Am Ende verbeugen sich die Schauspieler vor dem Publikum."
    },
    {
      "chapter": 9,
      "inf": "proben",
      "forms": [
        "probe",
        "probst",
        "probt",
        "proben",
        "probt",
        "proben"
      ],
      "praes": "probt",
      "praet": "probte",
      "aux": "haben",
      "part": "geprobt",
      "rektion": "etwas proben",
      "ar": "يعمل بروفة / يتمرّن",
      "example": "Der Chor probt jeden Donnerstag im Gemeindehaus."
    },
    {
      "chapter": 10,
      "inf": "spenden",
      "forms": [
        "spende",
        "spendest",
        "spendet",
        "spenden",
        "spendet",
        "spenden"
      ],
      "praes": "spendet",
      "praet": "spendete",
      "aux": "haben",
      "part": "gespendet",
      "rektion": "etwas (A) spenden für + A / an + A",
      "ar": "يتبرّع",
      "example": "Viele Firmen haben der Tafel Lebensmittel gespendet."
    },
    {
      "chapter": 10,
      "inf": "verteilen",
      "forms": [
        "verteile",
        "verteilst",
        "verteilt",
        "verteilen",
        "verteilt",
        "verteilen"
      ],
      "praes": "verteilt",
      "praet": "verteilte",
      "aux": "haben",
      "part": "verteilt",
      "rektion": "etwas (A) an + A verteilen",
      "ar": "يوزّع",
      "example": "Die Helfer haben die Lebensmittel an bedürftige Menschen verteilt."
    },
    {
      "chapter": 10,
      "inf": "sich engagieren",
      "forms": [
        "engagiere mich",
        "engagierst dich",
        "engagiert sich",
        "engagieren uns",
        "engagiert euch",
        "engagieren sich"
      ],
      "praes": "engagiert sich",
      "praet": "engagierte sich",
      "aux": "haben",
      "part": "sich engagiert",
      "rektion": "sich engagieren für + A / bei + D",
      "ar": "ينشط / يلتزم بالعمل من أجل",
      "example": "Meine Tante hat sich viele Jahre bei der Freiwilligen Feuerwehr engagiert."
    },
    {
      "chapter": 10,
      "inf": "sich einsetzen",
      "forms": [
        "setze mich ein",
        "setzt dich ein",
        "setzt sich ein",
        "setzen uns ein",
        "setzt euch ein",
        "setzen sich ein"
      ],
      "praes": "setzt sich ein",
      "praet": "setzte sich ein",
      "aux": "haben",
      "part": "sich eingesetzt",
      "rektion": "sich einsetzen für + A",
      "ar": "يدافع عن / يسعى من أجل",
      "example": "Die Abgeordnete hat sich für die Rechte von Minderheiten eingesetzt."
    },
    {
      "chapter": 10,
      "inf": "bewältigen",
      "forms": [
        "bewältige",
        "bewältigst",
        "bewältigt",
        "bewältigen",
        "bewältigt",
        "bewältigen"
      ],
      "praes": "bewältigt",
      "praet": "bewältigte",
      "aux": "haben",
      "part": "bewältigt",
      "rektion": "eine Aufgabe / den Alltag bewältigen",
      "ar": "يتغلّب على / يتمكّن من إنجاز",
      "example": "Mit der Hilfe ihrer Patin hat die Familie den Alltag gut bewältigt."
    },
    {
      "chapter": 10,
      "inf": "abmelden",
      "forms": [
        "melde ab",
        "meldest ab",
        "meldet ab",
        "melden ab",
        "meldet ab",
        "melden ab"
      ],
      "praes": "meldet ab",
      "praet": "meldete ab",
      "aux": "haben",
      "part": "abgemeldet",
      "rektion": "(sich) abmelden bei + D",
      "ar": "يلغي التسجيل",
      "example": "Vor dem Umzug nach Ägypten habe ich mich beim Einwohnermeldeamt abgemeldet."
    },
    {
      "chapter": 10,
      "inf": "zulassen",
      "forms": [
        "lasse zu",
        "lässt zu",
        "lässt zu",
        "lassen zu",
        "lasst zu",
        "lassen zu"
      ],
      "praes": "lässt zu",
      "praet": "ließ zu",
      "aux": "haben",
      "part": "zugelassen",
      "rektion": "jemanden zu + D zulassen",
      "ar": "يسمح / يقبل رسميًا",
      "example": "Nur zwanzig Kinder wurden zum Studium in der Spielstadt zugelassen."
    },
    {
      "chapter": 10,
      "inf": "finanzieren",
      "forms": [
        "finanziere",
        "finanzierst",
        "finanziert",
        "finanzieren",
        "finanziert",
        "finanzieren"
      ],
      "praes": "finanziert",
      "praet": "finanzierte",
      "aux": "haben",
      "part": "finanziert",
      "rektion": "etwas (A) finanzieren",
      "ar": "يموّل",
      "example": "Die Stadt München finanziert das Projekt Mini-München."
    },
    {
      "chapter": 10,
      "inf": "abstimmen",
      "forms": [
        "stimme ab",
        "stimmst ab",
        "stimmt ab",
        "stimmen ab",
        "stimmt ab",
        "stimmen ab"
      ],
      "praes": "stimmt ab",
      "praet": "stimmte ab",
      "aux": "haben",
      "part": "abgestimmt",
      "rektion": "abstimmen über + A",
      "ar": "يصوّت",
      "example": "In der Bürgerversammlung haben wir über den neuen Spielplatz abgestimmt."
    },
    {
      "chapter": 10,
      "inf": "unterzeichnen",
      "forms": [
        "unterzeichne",
        "unterzeichnest",
        "unterzeichnet",
        "unterzeichnen",
        "unterzeichnet",
        "unterzeichnen"
      ],
      "praes": "unterzeichnet",
      "praet": "unterzeichnete",
      "aux": "haben",
      "part": "unterzeichnet",
      "rektion": "einen Vertrag unterzeichnen",
      "ar": "يوقّع (رسميًا)",
      "example": "1992 unterzeichneten die Politiker den Vertrag von Maastricht."
    },
    {
      "chapter": 10,
      "inf": "erfüllen",
      "forms": [
        "erfülle",
        "erfüllst",
        "erfüllt",
        "erfüllen",
        "erfüllt",
        "erfüllen"
      ],
      "praes": "erfüllt",
      "praet": "erfüllte",
      "aux": "haben",
      "part": "erfüllt",
      "rektion": "eine Funktion / einen Wunsch erfüllen",
      "ar": "يؤدّي / يحقّق",
      "example": "Die Freiwillige Feuerwehr erfüllt auf dem Land eine wichtige Funktion."
    },
    {
      "chapter": 10,
      "inf": "entsorgen",
      "forms": [
        "entsorge",
        "entsorgst",
        "entsorgt",
        "entsorgen",
        "entsorgt",
        "entsorgen"
      ],
      "praes": "entsorgt",
      "praet": "entsorgte",
      "aux": "haben",
      "part": "entsorgt",
      "rektion": "Müll / Abfälle entsorgen",
      "ar": "يتخلّص من (النفايات)",
      "example": "Alte Medikamente sollte man in der Apotheke entsorgen."
    },
    {
      "chapter": 10,
      "inf": "alarmieren",
      "forms": [
        "alarmiere",
        "alarmierst",
        "alarmiert",
        "alarmieren",
        "alarmiert",
        "alarmieren"
      ],
      "praes": "alarmiert",
      "praet": "alarmierte",
      "aux": "haben",
      "part": "alarmiert",
      "rektion": "jemanden (A) alarmieren",
      "ar": "يستدعي النجدة / يُنذر",
      "example": "Ein Nachbar hat sofort die Feuerwehr alarmiert."
    },
    {
      "chapter": 10,
      "inf": "löschen",
      "forms": [
        "lösche",
        "löschst",
        "löscht",
        "löschen",
        "löscht",
        "löschen"
      ],
      "praes": "löscht",
      "praet": "löschte",
      "aux": "haben",
      "part": "gelöscht",
      "rektion": "ein Feuer / einen Brand löschen",
      "ar": "يطفئ",
      "example": "Die Feuerwehrleute haben den Brand in einer Stunde gelöscht."
    },
    {
      "chapter": 10,
      "inf": "gründen",
      "forms": [
        "gründe",
        "gründest",
        "gründet",
        "gründen",
        "gründet",
        "gründen"
      ],
      "praes": "gründet",
      "praet": "gründete",
      "aux": "haben",
      "part": "gegründet",
      "rektion": "einen Verein / eine Firma gründen",
      "ar": "يؤسّس",
      "example": "Zwei Studentinnen haben vor drei Jahren einen Nachhilfeverein gegründet."
    },
    {
      "chapter": 10,
      "inf": "genehmigen",
      "forms": [
        "genehmige",
        "genehmigst",
        "genehmigt",
        "genehmigen",
        "genehmigt",
        "genehmigen"
      ],
      "praes": "genehmigt",
      "praet": "genehmigte",
      "aux": "haben",
      "part": "genehmigt",
      "rektion": "einen Antrag genehmigen",
      "ar": "يوافق رسميًا / يصرّح",
      "example": "Das Amt hat unseren Antrag nach zwei Wochen genehmigt."
    },
    {
      "chapter": 10,
      "inf": "vermitteln",
      "forms": [
        "vermittle",
        "vermittelst",
        "vermittelt",
        "vermitteln",
        "vermittelt",
        "vermitteln"
      ],
      "praes": "vermittelt",
      "praet": "vermittelte",
      "aux": "haben",
      "part": "vermittelt",
      "rektion": "jemanden an + A vermitteln / zwischen + D vermitteln",
      "ar": "يتوسّط / يوفّق بين",
      "example": "Die Dolmetscherin vermittelt zwischen dem Arzt und der Familie."
    },
    {
      "chapter": 10,
      "inf": "beitreten",
      "forms": [
        "trete bei",
        "trittst bei",
        "tritt bei",
        "treten bei",
        "tretet bei",
        "treten bei"
      ],
      "praes": "tritt bei",
      "praet": "trat bei",
      "aux": "sein",
      "part": "beigetreten",
      "rektion": "einer Organisation (D) beitreten",
      "ar": "ينضمّ (إلى)",
      "example": "Kroatien ist der Europäischen Union 2013 beigetreten."
    },
    {
      "chapter": 11,
      "inf": "abbiegen",
      "forms": [
        "biege ab",
        "biegst ab",
        "biegt ab",
        "biegen ab",
        "biegt ab",
        "biegen ab"
      ],
      "praes": "biegt ab",
      "praet": "bog ab",
      "aux": "sein",
      "part": "abgebogen",
      "rektion": "abbiegen (nach links / rechts, in + A)",
      "ar": "ينعطف / يلف (يمين أو شمال)",
      "example": "An der nächsten Ampel biegen Sie bitte links in die Hauptstraße ab."
    },
    {
      "chapter": 11,
      "inf": "herunterfahren",
      "forms": [
        "fahre herunter",
        "fährst herunter",
        "fährt herunter",
        "fahren herunter",
        "fahrt herunter",
        "fahren herunter"
      ],
      "praes": "fährt herunter",
      "praet": "fuhr herunter",
      "aux": "sein",
      "part": "heruntergefahren",
      "rektion": "herunterfahren (Tor, Rollladen); den Computer herunterfahren (haben)",
      "ar": "ينزل (آليًا) / يقفل الجهاز",
      "example": "Am Abend ist das Garagentor langsam heruntergefahren."
    },
    {
      "chapter": 11,
      "inf": "einliefern",
      "forms": [
        "liefere ein",
        "lieferst ein",
        "liefert ein",
        "liefern ein",
        "liefert ein",
        "liefern ein"
      ],
      "praes": "liefert ein",
      "praet": "lieferte ein",
      "aux": "haben",
      "part": "eingeliefert",
      "rektion": "jemanden ins Krankenhaus einliefern",
      "ar": "يدخّل (حد) المستشفى",
      "example": "Nach dem Unfall wurde der Radfahrer sofort ins Krankenhaus eingeliefert."
    },
    {
      "chapter": 11,
      "inf": "laden",
      "forms": [
        "lade",
        "lädst",
        "lädt",
        "laden",
        "ladet",
        "laden"
      ],
      "praes": "lädt",
      "praet": "lud",
      "aux": "haben",
      "part": "geladen",
      "rektion": "etwas in / auf + A laden",
      "ar": "يحمّل (حاجة في عربية أو سلة)",
      "example": "Der Bäcker lädt die frischen Brote in den Lieferwagen."
    },
    {
      "chapter": 11,
      "inf": "abhängen",
      "forms": [
        "hänge ab",
        "hängst ab",
        "hängt ab",
        "hängen ab",
        "hängt ab",
        "hängen ab"
      ],
      "praes": "hängt ab",
      "praet": "hing ab",
      "aux": "haben",
      "part": "abgehangen",
      "rektion": "abhängen von + D",
      "ar": "يتوقف على / يعتمد على",
      "example": "Ob wir am Sonntag aufs Land fahren, hängt vom Wetter ab."
    },
    {
      "chapter": 11,
      "inf": "berücksichtigen",
      "forms": [
        "berücksichtige",
        "berücksichtigst",
        "berücksichtigt",
        "berücksichtigen",
        "berücksichtigt",
        "berücksichtigen"
      ],
      "praes": "berücksichtigt",
      "praet": "berücksichtigte",
      "aux": "haben",
      "part": "berücksichtigt",
      "rektion": "etwas berücksichtigen",
      "ar": "ياخد في الاعتبار / يراعي",
      "example": "Beim Ranking wurden auch die Mieten und die Kinderbetreuung berücksichtigt."
    },
    {
      "chapter": 11,
      "inf": "werten",
      "forms": [
        "werte",
        "wertest",
        "wertet",
        "werten",
        "wertet",
        "werten"
      ],
      "praes": "wertet",
      "praet": "wertete",
      "aux": "haben",
      "part": "gewertet",
      "rektion": "etwas (als + A) werten",
      "ar": "يقيّم / يحسب (في التقييم)",
      "example": "Das Wetter wird bei diesem Städtevergleich nicht gewertet."
    },
    {
      "chapter": 11,
      "inf": "betreffen",
      "forms": [
        "betreffe",
        "betriffst",
        "betrifft",
        "betreffen",
        "betrefft",
        "betreffen"
      ],
      "praes": "betrifft",
      "praet": "betraf",
      "aux": "haben",
      "part": "betroffen",
      "rektion": "jemanden / etwas betreffen",
      "ar": "يخص / يمس",
      "example": "Die neuen Regeln betreffen vor allem Familien mit kleinen Kindern."
    },
    {
      "chapter": 11,
      "inf": "festlegen",
      "forms": [
        "lege fest",
        "legst fest",
        "legt fest",
        "legen fest",
        "legt fest",
        "legen fest"
      ],
      "praes": "legt fest",
      "praet": "legte fest",
      "aux": "haben",
      "part": "festgelegt",
      "rektion": "etwas festlegen",
      "ar": "يحدد / يقرر (رسميًا)",
      "example": "Das Gesetz legt fest, wie viele Urlaubstage man mindestens bekommt."
    },
    {
      "chapter": 11,
      "inf": "eingehen",
      "forms": [
        "gehe ein",
        "gehst ein",
        "geht ein",
        "gehen ein",
        "geht ein",
        "gehen ein"
      ],
      "praes": "geht ein",
      "praet": "ging ein",
      "aux": "sein",
      "part": "eingegangen",
      "rektion": "eingehen auf + A",
      "ar": "يتناول / يرد على (رأي أو سؤال)",
      "example": "Die Stadträtin ist auf jede Frage der Bürger eingegangen."
    },
    {
      "chapter": 11,
      "inf": "unterbrechen",
      "forms": [
        "unterbreche",
        "unterbrichst",
        "unterbricht",
        "unterbrechen",
        "unterbrecht",
        "unterbrechen"
      ],
      "praes": "unterbricht",
      "praet": "unterbrach",
      "aux": "haben",
      "part": "unterbrochen",
      "rektion": "jemanden unterbrechen",
      "ar": "يقاطع",
      "example": "Bitte unterbrechen Sie mich nicht, ich bin gleich fertig."
    },
    {
      "chapter": 11,
      "inf": "ausreden",
      "forms": [
        "rede aus",
        "redest aus",
        "redet aus",
        "reden aus",
        "redet aus",
        "reden aus"
      ],
      "praes": "redet aus",
      "praet": "redete aus",
      "aux": "haben",
      "part": "ausgeredet",
      "rektion": "jemanden ausreden lassen",
      "ar": "يكمّل كلامه للآخر",
      "example": "Lassen Sie Herrn Wolf bitte erst ausreden!"
    },
    {
      "chapter": 11,
      "inf": "fortsetzen",
      "forms": [
        "setze fort",
        "setzt fort",
        "setzt fort",
        "setzen fort",
        "setzt fort",
        "setzen fort"
      ],
      "praes": "setzt fort",
      "praet": "setzte fort",
      "aux": "haben",
      "part": "fortgesetzt",
      "rektion": "etwas fortsetzen",
      "ar": "يكمّل / يواصل",
      "example": "Nach einer kurzen Pause setzen wir die Diskussion fort."
    },
    {
      "chapter": 11,
      "inf": "springen",
      "forms": [
        "springe",
        "springst",
        "springt",
        "springen",
        "springt",
        "springen"
      ],
      "praes": "springt",
      "praet": "sprang",
      "aux": "sein",
      "part": "gesprungen",
      "rektion": "springen in + A / über + A",
      "ar": "ينط / يقفز",
      "example": "Im Sommer springen in Basel viele Leute in den Rhein."
    },
    {
      "chapter": 11,
      "inf": "steigen",
      "forms": [
        "steige",
        "steigst",
        "steigt",
        "steigen",
        "steigt",
        "steigen"
      ],
      "praes": "steigt",
      "praet": "stieg",
      "aux": "sein",
      "part": "gestiegen",
      "rektion": "steigen auf + A / in + A",
      "ar": "يطلع / يصعد",
      "example": "Wir sind auf den Turm gestiegen und hatten einen tollen Ausblick."
    },
    {
      "chapter": 11,
      "inf": "hindern",
      "forms": [
        "hindere",
        "hinderst",
        "hindert",
        "hindern",
        "hindert",
        "hindern"
      ],
      "praes": "hindert",
      "praet": "hinderte",
      "aux": "haben",
      "part": "gehindert",
      "rektion": "jemanden an + D hindern",
      "ar": "يمنع / يعيق",
      "example": "Der Regen hat uns nicht daran gehindert, durch die Altstadt zu bummeln."
    },
    {
      "chapter": 11,
      "inf": "fließen",
      "forms": [
        "fließe",
        "fließt",
        "fließt",
        "fließen",
        "fließt",
        "fließen"
      ],
      "praes": "fließt",
      "praet": "floss",
      "aux": "sein",
      "part": "geflossen",
      "rektion": "fließen durch + A / in + A",
      "ar": "يجري / يسيل (نهر أو مية)",
      "example": "Die Donau fließt mitten durch Wien."
    },
    {
      "chapter": 12,
      "inf": "überweisen",
      "forms": [
        "überweise",
        "überweist",
        "überweist",
        "überweisen",
        "überweist",
        "überweisen"
      ],
      "praes": "überweist",
      "praet": "überwies",
      "aux": "haben",
      "part": "überwiesen",
      "rektion": "jemandem etwas überweisen / Geld auf ein Konto überweisen",
      "ar": "يحوّل (فلوس)",
      "example": "Ich habe dir die 50 Euro gestern auf dein Konto überwiesen."
    },
    {
      "chapter": 12,
      "inf": "abheben",
      "forms": [
        "hebe ab",
        "hebst ab",
        "hebt ab",
        "heben ab",
        "hebt ab",
        "heben ab"
      ],
      "praes": "hebt ab",
      "praet": "hob ab",
      "aux": "haben",
      "part": "abgehoben",
      "rektion": "Geld (vom Konto / am Automaten) abheben",
      "ar": "يسحب (فلوس)",
      "example": "Am Wochenende habe ich 100 Euro am Geldautomaten abgehoben."
    },
    {
      "chapter": 12,
      "inf": "einzahlen",
      "forms": [
        "zahle ein",
        "zahlst ein",
        "zahlt ein",
        "zahlen ein",
        "zahlt ein",
        "zahlen ein"
      ],
      "praes": "zahlt ein",
      "praet": "zahlte ein",
      "aux": "haben",
      "part": "eingezahlt",
      "rektion": "Geld auf ein Konto einzahlen",
      "ar": "يودع (فلوس)",
      "example": "Sie hat ihr Weihnachtsgeld auf ihr Sparkonto eingezahlt."
    },
    {
      "chapter": 12,
      "inf": "leihen",
      "forms": [
        "leihe",
        "leihst",
        "leiht",
        "leihen",
        "leiht",
        "leihen"
      ],
      "praes": "leiht",
      "praet": "lieh",
      "aux": "haben",
      "part": "geliehen",
      "rektion": "jemandem etwas leihen / sich etwas von + D leihen",
      "ar": "يسلّف / يستلف",
      "example": "Mein Bruder hat mir sein Auto für das Wochenende geliehen."
    },
    {
      "chapter": 12,
      "inf": "sperren",
      "forms": [
        "sperre",
        "sperrst",
        "sperrt",
        "sperren",
        "sperrt",
        "sperren"
      ],
      "praes": "sperrt",
      "praet": "sperrte",
      "aux": "haben",
      "part": "gesperrt",
      "rektion": "etwas sperren (lassen)",
      "ar": "يوقف / يجمّد (كارت أو حساب)",
      "example": "Nach dem Diebstahl hat die Bank meine Karte sofort gesperrt."
    },
    {
      "chapter": 12,
      "inf": "beantragen",
      "forms": [
        "beantrage",
        "beantragst",
        "beantragt",
        "beantragen",
        "beantragt",
        "beantragen"
      ],
      "praes": "beantragt",
      "praet": "beantragte",
      "aux": "haben",
      "part": "beantragt",
      "rektion": "etwas (bei + D) beantragen",
      "ar": "يقدّم طلب للحصول على",
      "example": "Ich habe bei meiner Bank eine neue Kreditkarte beantragt."
    },
    {
      "chapter": 12,
      "inf": "überziehen",
      "forms": [
        "überziehe",
        "überziehst",
        "überzieht",
        "überziehen",
        "überzieht",
        "überziehen"
      ],
      "praes": "überzieht",
      "praet": "überzog",
      "aux": "haben",
      "part": "überzogen",
      "rektion": "das Konto (um + A) überziehen",
      "ar": "يسحب على المكشوف",
      "example": "Er hat sein Konto um 300 Euro überzogen."
    },
    {
      "chapter": 12,
      "inf": "gutschreiben",
      "forms": [
        "schreibe gut",
        "schreibst gut",
        "schreibt gut",
        "schreiben gut",
        "schreibt gut",
        "schreiben gut"
      ],
      "praes": "schreibt gut",
      "praet": "schrieb gut",
      "aux": "haben",
      "part": "gutgeschrieben",
      "rektion": "jemandem einen Betrag gutschreiben",
      "ar": "يضيف مبلغ للحساب",
      "example": "Der Betrag wurde Ihrem Konto heute gutgeschrieben."
    },
    {
      "chapter": 12,
      "inf": "zurückzahlen",
      "forms": [
        "zahle zurück",
        "zahlst zurück",
        "zahlt zurück",
        "zahlen zurück",
        "zahlt zurück",
        "zahlen zurück"
      ],
      "praes": "zahlt zurück",
      "praet": "zahlte zurück",
      "aux": "haben",
      "part": "zurückgezahlt",
      "rektion": "jemandem etwas zurückzahlen",
      "ar": "يسدّد / يرجّع الفلوس",
      "example": "Wir haben den Kredit in fünf Jahren zurückgezahlt."
    },
    {
      "chapter": 12,
      "inf": "eintragen",
      "forms": [
        "trage ein",
        "trägst ein",
        "trägt ein",
        "tragen ein",
        "tragt ein",
        "tragen ein"
      ],
      "praes": "trägt ein",
      "praet": "trug ein",
      "aux": "haben",
      "part": "eingetragen",
      "rektion": "etwas in + A eintragen",
      "ar": "يسجّل / يكتب (في خانة أو قايمة)",
      "example": "Tragen Sie Ihre neue PIN in das Feld ein."
    },
    {
      "chapter": 12,
      "inf": "betrügen",
      "forms": [
        "betrüge",
        "betrügst",
        "betrügt",
        "betrügen",
        "betrügt",
        "betrügen"
      ],
      "praes": "betrügt",
      "praet": "betrog",
      "aux": "haben",
      "part": "betrogen",
      "rektion": "jemanden (um + A) betrügen",
      "ar": "يغشّ / ينصب على",
      "example": "Der falsche Handwerker hat die alte Dame um 500 Euro betrogen."
    },
    {
      "chapter": 12,
      "inf": "verzichten",
      "forms": [
        "verzichte",
        "verzichtest",
        "verzichtet",
        "verzichten",
        "verzichtet",
        "verzichten"
      ],
      "praes": "verzichtet",
      "praet": "verzichtete",
      "aux": "haben",
      "part": "verzichtet",
      "rektion": "verzichten auf + A",
      "ar": "يستغنى عن",
      "example": "Um Geld zu sparen, verzichten wir dieses Jahr auf den Urlaub."
    },
    {
      "chapter": 12,
      "inf": "profitieren",
      "forms": [
        "profitiere",
        "profitierst",
        "profitiert",
        "profitieren",
        "profitiert",
        "profitieren"
      ],
      "praes": "profitiert",
      "praet": "profitierte",
      "aux": "haben",
      "part": "profitiert",
      "rektion": "profitieren von + D",
      "ar": "يستفيد من",
      "example": "Viele Verbraucher profitieren von den sinkenden Preisen."
    },
    {
      "chapter": 12,
      "inf": "befürworten",
      "forms": [
        "befürworte",
        "befürwortest",
        "befürwortet",
        "befürworten",
        "befürwortet",
        "befürworten"
      ],
      "praes": "befürwortet",
      "praet": "befürwortete",
      "aux": "haben",
      "part": "befürwortet",
      "rektion": "etwas befürworten",
      "ar": "يؤيّد",
      "example": "Die meisten Mitglieder haben die Idee eines Tauschrings befürwortet."
    },
    {
      "chapter": 12,
      "inf": "ablehnen",
      "forms": [
        "lehne ab",
        "lehnst ab",
        "lehnt ab",
        "lehnen ab",
        "lehnt ab",
        "lehnen ab"
      ],
      "praes": "lehnt ab",
      "praet": "lehnte ab",
      "aux": "haben",
      "part": "abgelehnt",
      "rektion": "etwas ablehnen",
      "ar": "يرفض",
      "example": "Die Bank hat meinen Antrag auf einen Kredit leider abgelehnt."
    },
    {
      "chapter": 12,
      "inf": "sich einloggen",
      "forms": [
        "logge mich ein",
        "loggst dich ein",
        "loggt sich ein",
        "loggen uns ein",
        "loggt euch ein",
        "loggen sich ein"
      ],
      "praes": "loggt sich ein",
      "praet": "loggte sich ein",
      "aux": "haben",
      "part": "sich eingeloggt",
      "rektion": "sich (mit + D) in + A einloggen",
      "ar": "يسجّل الدخول",
      "example": "Ich habe mich mit meinem neuen Passwort ins Online-Banking eingeloggt."
    },
    {
      "chapter": 12,
      "inf": "bedenken",
      "forms": [
        "bedenke",
        "bedenkst",
        "bedenkt",
        "bedenken",
        "bedenkt",
        "bedenken"
      ],
      "praes": "bedenkt",
      "praet": "bedachte",
      "aux": "haben",
      "part": "bedacht",
      "rektion": "etwas bedenken / bedenken, dass ...",
      "ar": "يأخذ في اعتباره",
      "example": "Man muss auch bedenken, dass lange Transportwege der Umwelt schaden."
    }
  ];
  verbs.filter(verb => !known.has(verb.inf)).forEach(verb => window.B1_VERBS.push(verb));
})();
