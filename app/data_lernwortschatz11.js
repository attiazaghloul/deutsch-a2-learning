/* Lernwortschatz 11 adapted from Netzwerk neu A2.2, unit 11. */
(function () {
  const E = (w, ar, d, ex) => ({w, ar, d, ex});
  const SECTIONS = [
    ["Lebensphasen", [
      E("vergehen, er vergeht, ist vergangen", "يمضي / ينقضي", "mit der Zeit vorbeigehen", "Die Ferien sind viel zu schnell vergangen."),
      E("Die Zeit vergeht schnell.", "الوقت يمر بسرعة", "eine feste Wendung dafür, dass man eine Zeitspanne als kurz erlebt", "Beim Spielen vergeht die Zeit schnell."),
      E("die Ehe, -n", "الزواج", "eine gesetzlich anerkannte Verbindung von zwei Menschen", "Ihre Ehe besteht seit zwanzig Jahren."),
      E("die Hausfrau, -en", "ربة منزل", "eine Frau, die sich hauptsächlich um Haushalt und Familie kümmert", "Die Hausfrau organisiert den Alltag der Familie."),
      E("der Hausmann, ⸚er", "رب منزل", "ein Mann, der sich hauptsächlich um Haushalt und Familie kümmert", "Als Hausmann kocht er jeden Tag für die Kinder."),
      E("backen", "يَخبز", "Lebensmittel mit Hitze im Ofen zubereiten", "Am Sonntag backen wir Brot."),
      E("einen Kuchen backen", "يخبز كعكة", "einen Kuchenteig im Ofen fertig zubereiten", "Zum Geburtstag backt sie einen Kuchen."),
      E("bauen", "يبني", "ein Gebäude oder einen Gegenstand aus Teilen herstellen", "Die Familie baut ein kleines Haus."),
      E("einrichten", "يؤثث / يجهز", "einen Raum mit Möbeln und Dingen zum Wohnen ausstatten", "Wir richten das Kinderzimmer neu ein."),
      E("sparen", "يوفّر / يدّخر", "Geld oder andere Mittel nicht vollständig ausgeben", "Sie sparen für eine lange Reise."),
      E("verletzt", "مصاب / مجروح", "durch einen Unfall oder eine Wunde körperlich geschädigt", "Ich habe mich an der Hand verletzt."),
      E("verreisen", "يسافر", "für einige Zeit an einen anderen Ort fahren", "Wir verreisen im Sommer für zwei Wochen.")
    ]],
    ["Arbeit", [
      E("anstellen", "يوظّف", "jemandem eine bezahlte Stelle geben", "Die Firma stellt im Herbst zwei Mitarbeiter an."),
      E("entlassen, er entlässt, hat entlassen", "يفصل من العمل", "ein Arbeitsverhältnis durch den Arbeitgeber beenden", "Die Firma musste ihn leider entlassen."),
      E("behalten, er behält, hat behalten", "يحتفظ بـ", "etwas nicht weggeben oder verlieren", "Er möchte seine Stelle behalten."),
      E("der Werktag, -e", "يوم عمل", "ein Tag von Montag bis Samstag, der kein Feiertag ist", "An Werktagen beginnt die Arbeit um acht Uhr."),
      E("der Export, -e", "التصدير", "der Verkauf von Waren ins Ausland", "Der Export deutscher Maschinen ist gestiegen."),
      E("der Import, -e", "الاستيراد", "der Einkauf von Waren aus dem Ausland", "Beim Import gelten besondere Regeln."),
      E("die Frist, -en", "المهلة", "ein festgelegter Zeitraum, bis zu dessen Ende etwas erledigt sein muss", "Die Frist für die Bewerbung endet morgen.")
    ]],
    ["Freizeit und Ratschläge", [
      E("Ich würde gern …", "أودّ أن…", "eine höfliche Form, um einen Wunsch auszudrücken", "Ich würde gern öfter meine Freunde treffen."),
      E("ausschalten", "يطفئ", "ein elektrisches Gerät außer Betrieb setzen", "Am Abend schalte ich das Handy aus."),
      E("klingeln", "يرنّ", "ein kurzes Signal als Ton geben", "Das Handy hat schon dreimal geklingelt."),
      E("ständig", "باستمرار", "sehr oft oder ohne Unterbrechung", "Während der Arbeit kommen ständig neue Nachrichten."),
      E("schimpfen", "يؤنّب / يتذمر", "laut und ärgerlich über jemanden oder etwas sprechen", "Der Nachbar schimpft über den Lärm."),
      E("verbringen mit (+ D.)", "يقضي مع", "eine bestimmte Zeit gemeinsam mit jemandem nutzen", "Am Wochenende verbringe ich Zeit mit meiner Familie."),
      E("an deiner Stelle", "لو كنت مكانك", "eine Wendung, mit der man einen persönlichen Rat gibt", "An deiner Stelle würde ich früher schlafen."),
      E("meiner Meinung nach", "في رأيي", "eine Wendung zum Ausdrücken der eigenen Ansicht", "Meiner Meinung nach brauchen wir mehr Freizeit.")
    ]],
    ["Ausflüge organisieren", [
      E("sich interessieren für (+ A.)", "يهتم بـ", "mehr über ein Thema wissen oder an etwas teilnehmen wollen", "Ich interessiere mich für Kajakfahren."),
      E("Wofür interessierst du dich?", "بماذا تهتم؟", "eine Frage nach dem Gegenstand eines Interesses", "Wofür interessierst du dich in deiner Freizeit?"),
      E("sich vorbereiten auf (+ A.)", "يستعد لـ", "vor einem Ereignis alles Notwendige tun", "Wir bereiten uns auf den Ausflug vor."),
      E("sich kümmern um (+ A.)", "يعتني بـ / يتولى", "für jemanden oder etwas sorgen", "Linda kümmert sich um die Getränke."),
      E("Worum kümmert sich Linda?", "بماذا تتولى ليندا؟", "eine Frage nach der Aufgabe, für die Linda sorgt", "Worum kümmert sich Linda beim Picknick?"),
      E("sich unterhalten mit (+ D.)", "يتحدث مع", "ein Gespräch mit jemandem führen", "Ich unterhalte mich gern mit meinen Nachbarn."),
      E("Mit wem hast du dich so lange unterhalten?", "مع من تحدثت كل هذا الوقت؟", "eine Frage nach der Person in einem Gespräch", "Mit wem hast du dich auf der Party unterhalten?"),
      E("sich erinnern an (+ A.)", "يتذكر", "eine vergangene Person oder Situation wieder im Gedächtnis haben", "Ich erinnere mich noch an den letzten Ausflug."),
      E("Ich erinnere mich noch an den letzten Ausflug.", "ما زلت أتذكر الرحلة الأخيرة", "eine Aussage über eine klare Erinnerung an ein gemeinsames Erlebnis", "Ich erinnere mich noch an den letzten Ausflug zum See."),
      E("Alles bestens!", "كل شيء على ما يرام!", "eine positive Antwort: Alles ist sehr gut", "Danke für die Organisation – alles bestens!")
    ]],
    ["Zeitreise", [
      E("das Feuer, -", "النار", "Licht und Wärme, die beim Verbrennen entstehen", "Früher kochten viele Menschen über dem Feuer."),
      E("das Gas, -e", "الغاز", "ein brennbarer Stoff zum Heizen oder Kochen", "Der Herd funktioniert mit Gas."),
      E("die Heizung, -en", "التدفئة", "eine Anlage, die Räume warm macht", "Im Winter läuft die Heizung jeden Tag."),
      E("heizen", "يُدفّئ", "einen Raum oder ein Gebäude warm machen", "Die Familie heizt den Bauernhof mit Holz."),
      E("der Strom (Sg.)", "الكهرباء", "elektrische Energie für Licht und Geräte", "Ohne Strom funktioniert der Computer nicht."),
      E("die Hektik (Sg.)", "العجلة والتوتر", "große Eile, Unruhe und Stress", "Auf dem Land lebt die Familie ohne Hektik."),
      E("der Helfer, -", "المساعد", "ein Mann, der einer Person Unterstützung gibt", "Ein Helfer trägt die schweren Kisten."),
      E("die Helferin, -nen", "المساعدة", "eine Frau, die einer Person Unterstützung gibt", "Die Helferin bringt warme Decken."),
      E("der Notfall, ⸚e", "حالة طوارئ", "eine gefährliche Situation, in der sofort Hilfe nötig ist", "Bei einem Notfall rufen wir die Polizei."),
      E("Bei einem Notfall rufen wir die Polizei.", "عند الطوارئ نتصل بالشرطة", "eine Handlungsanweisung für eine gefährliche Situation", "Bei einem Notfall rufen wir sofort die Polizei."),
      E("die Unterkunft, ⸚e", "مكان الإقامة", "ein Ort, an dem man vorübergehend wohnen und schlafen kann", "Für die Reise suchen wir eine günstige Unterkunft."),
      E("bieten, er bietet, hat geboten", "يقدّم / يوفّر", "jemandem etwas zur Verfügung stellen", "Der Bauernhof bietet Unterkunft und Verpflegung."),
      E("das Einkaufszentrum, -zentren", "مركز التسوق", "ein großes Gebäude mit vielen Geschäften", "Das Einkaufszentrum liegt am Stadtrand."),
      E("besitzen, er besitzt, hat besessen", "يمتلك", "etwas als Eigentum haben", "Die Familie besitzt einen alten Bauernhof."),
      E("produzieren", "يُنتج", "Waren, Lebensmittel oder Energie herstellen", "Sie produzieren ihr eigenes Obst und Gemüse.")
    ]],
    ["Vergangenheit und Verzicht", [
      E("träumen von (+ D.)", "يحلم بـ", "im Schlaf oder in der Fantasie etwas erleben", "Als Kind träumte sie von einem Haus am Meer."),
      E("verzichten auf (+ A.)", "يستغني عن", "etwas bewusst nicht benutzen oder haben", "Auf mein Fahrrad kann ich nicht verzichten."),
      E("altmodisch", "قديم الطراز", "nicht modern und aus einer früheren Zeit", "Der Fernseher wirkt heute altmodisch."),
      E("damals", "آنذاك / وقتها", "zu einem bestimmten Zeitpunkt in der Vergangenheit", "Damals gab es in dem Haus kein Internet.")
    ]],
    ["Sprichwörter", [
      E("das Sprichwort, ⸚er", "مثل شعبي", "ein kurzer bekannter Satz mit einer allgemeinen Erfahrung", "‚Zeit heilt alle Wunden‘ ist ein Sprichwort."),
      E("die Erklärung, -en", "الشرح", "Informationen, die etwas verständlich machen", "Die Lehrerin gibt eine klare Erklärung."),
      E("das Gold (Sg.)", "الذهب", "ein wertvolles gelbes Metall", "Morgenstund hat Gold im Mund."),
      E("der Rat (Sg.)", "النصيحة", "eine Empfehlung, wie man handeln sollte", "Ich gebe dir einen guten Rat."),
      E("heilen", "يَشفى / يُعالج", "wieder gesund werden oder gesund machen", "Mit der Zeit kann eine Wunde heilen.")
    ]],
    ["Andere wichtige Wörter und Wendungen", [
      E("Acht geben", "ينتبه", "aufmerksam sein und eine Gefahr vermeiden", "Gib auf der Treppe gut Acht!"),
      E("hereinkommen, er kommt herein, ist hereingekommen", "يدخل", "von draußen in einen Raum kommen", "Der Arzt ist gerade hereingekommen."),
      E("brechen, er bricht, ist gebrochen", "ينكسر", "durch Druck oder einen Stoß in Teile gehen", "Das Glas ist auf den Boden gefallen und gebrochen."),
      E("die Lücke, -n", "الفجوة / الفراغ", "eine freie Stelle, an der etwas fehlt", "Ergänzen Sie das passende Wort in der Lücke."),
      E("das Mitleid (Sg.)", "الشفقة / التعاطف", "Mitgefühl mit einer leidenden Person", "Ich habe Mitleid mit dem verletzten Mann."),
      E("Du Armer! / Du Arme!", "يا مسكين! / يا مسكينة!", "ein mitfühlender Ausruf zu einer Person mit einem Problem", "Du Arme! Hoffentlich bist du bald wieder gesund."),
      E("besorgen", "يشتري / يُحضر", "etwas holen oder kaufen, das gebraucht wird", "Ich muss noch Brot im Supermarkt besorgen."),
      E("der Alkohol (Sg.)", "الكحول", "ein Stoff in Getränken wie Bier und Wein", "Beim Autofahren trinkt er keinen Alkohol."),
      E("betrunken", "ثمل", "durch Alkohol nicht mehr nüchtern", "Betrunken darf man kein Auto fahren."),
      E("bluten", "ينزف", "Blut aus einer Wunde verlieren", "Die kleine Wunde am Finger blutet."),
      E("effektiv", "فعّال", "mit einer guten Wirkung und ohne unnötigen Aufwand", "Mit einem Plan lernen wir effektiver."),
      E("kühl", "مائل للبرودة", "ein wenig kalt", "Am Abend ist es draußen kühl."),
      E("niedrig", "منخفض", "von geringer Höhe, Menge oder Stufe", "Die Temperaturen bleiben niedrig."),
      E("reich", "غني", "viel Geld oder viele wertvolle Dinge besitzend", "Er ist reich, aber er lebt sehr einfach."),
      E("meist", "غالبًا", "in den meisten Fällen", "Am Wochenende sind wir meist zu Hause."),
      E("vor allem", "خصوصًا / قبل كل شيء", "mehr als alles andere oder besonders", "Vor allem brauche ich am Abend Ruhe."),
      E("Papa", "بابا / أبي", "eine vertraute Bezeichnung für den Vater", "Hilfst du mir bitte, Papa?")
    ]]
  ];

  const WORDS = SECTIONS.flatMap(([cat, words]) => words.map(item => ({...item, cat})));
  const chapter = (window.BOOK2 || []).find(item => item.num === 11);
  if (!chapter) return;

  const key = value => String(value || "")
    .toLocaleLowerCase("de")
    .split(",")[0]
    .replace(/\s*\(.*?\)\s*/g, " ")
    .replace(/[.…]/g, "")
    .replace(/\s+/g, " ")
    .trim();
  const known = new Set(chapter.vocab.map(item => key(item.w)));
  const additions = [];

  for (const item of WORDS) {
    if (known.has(key(item.w))) continue;
    known.add(key(item.w));
    additions.push({
      ...item,
      img: `assets/vocab-scenes/k11-added/${String(additions.length + 1).padStart(2, "0")}.webp`
    });
  }

  chapter.vocab.push(...additions);
  chapter.readings = [
    {
      title: "Leben wie vor hundert Jahren",
      kind: "Anzeige und Familienbericht",
      text: `<strong>Eine ungewöhnliche Anzeige</strong><br>Familie Ketterer sucht für einen besonderen Bauernhof im Schwarzwald neue Bewohner. Dort gibt es keinen modernen Komfort wie in der Stadt. Die zukünftigen Bewohner sollen gern praktisch arbeiten, die Natur mögen und sich ein ruhiges Leben vorstellen können.<br><br><strong>Das Leben der Familie Ketterer</strong><br>Die Familie lebt seit sechs Jahren auf dem einsamen Hof und hat ihre Entscheidung nie bereut. Sie produziert eigenes Obst und Gemüse und backt auch das Brot selbst. Wenn sie etwas aus dem Supermarkt braucht, fährt sie mit dem Fahrrad oder mit einer Kutsche. Der Bauernhof ist groß, aber im Winter oft kalt, deshalb heizt die Familie mit Holz. Das Leben ist manchmal anstrengend, trotzdem genießt sie die Ruhe und die Zeit miteinander.`,
      ar: "تعيش عائلة كيترر منذ ست سنوات في مزرعة منعزلة بالغابة السوداء، بعيدًا عن وسائل الراحة الحديثة. تنتج طعامها وتخبز خبزها وتذهب للتسوق بالدراجة أو العربة وتستخدم الخشب للتدفئة. الحياة شاقة أحيانًا، لكن الأسرة تستمتع بالهدوء والوقت المشترك.",
      glossary: [["der Bauernhof","المزرعة"],["einsam","منعزل"],["bereuen","يندم"],["die Kutsche","عربة تجرها الخيول"],["heizen","يدفئ"],["anstrengend","شاق"]],
      questions: [
        ["Seit wann lebt Familie Ketterer auf dem Bauernhof?","Seit sechs Jahren."],
        ["Welche Lebensmittel produziert die Familie selbst?","Obst, Gemüse und Brot."],
        ["Wie fährt sie zum Supermarkt?","Mit dem Fahrrad oder mit einer Kutsche."],
        ["Warum braucht die Familie im Winter viel Holz?","Weil sie den kalten Bauernhof mit Holz heizt."]
      ]
    },
    {
      title: "Worauf können Sie verzichten?",
      kind: "Umfrage mit vier Stimmen",
      text: `<strong>Massimo, 40</strong><br>Ich lebe gern auf dem Land und könnte auf vieles verzichten. Mein Garten ist mir aber wichtig. Dort baue ich Obst und Gemüse an. Außerdem brauche ich echte Freunde, die auch in schwierigen Zeiten zu mir halten.<br><br><strong>Ingrid, 58</strong><br>Ein Auto brauche ich nicht unbedingt. Ich fahre lieber mit dem Rad oder mit öffentlichen Verkehrsmitteln. Auf ein gemütliches Zuhause und gute Bücher möchte ich dagegen nicht verzichten.<br><br><strong>Lea, 28</strong><br>Ohne mein Auto wäre mein Alltag schwierig, denn ich wohne weit von meiner Arbeit entfernt. Dafür brauche ich nur wenig Kleidung und kaufe selten neue Sachen.<br><br><strong>Fred, 36</strong><br>Filme sehe ich meistens online, deshalb könnte ich meinen Fernseher verkaufen. Meinen Laptop brauche ich aber jeden Tag: zum Arbeiten, Schreiben, Einkaufen und für den Kontakt mit Freunden.`,
      ar: "أربعة أشخاص يشرحون ما يمكنهم الاستغناء عنه وما لا يمكنهم تركه: ماسيمو يحتاج حديقته وأصدقاءه، إنجريد تستغني عن السيارة لكنها تحب بيتها وكتبها، ليا تحتاج سيارتها للعمل، وفريد يستغني عن التلفاز لكنه يعتمد على الحاسوب المحمول.",
      glossary: [["verzichten auf","يستغني عن"],["anbauen","يزرع"],["zu jemandem halten","يقف بجانب شخص"],["öffentliche Verkehrsmittel","المواصلات العامة"],["dagegen","في المقابل"],["entfernt","بعيد"]],
      questions: [
        ["Warum ist Massimo sein Garten wichtig?","Weil er dort Obst und Gemüse anbaut."],
        ["Worauf kann Ingrid verzichten?","Auf ein Auto."],
        ["Warum braucht Lea ihr Auto?","Weil sie weit von ihrer Arbeit entfernt wohnt."],
        ["Welches Gerät könnte Fred verkaufen?","Seinen Fernseher."]
      ]
    }
  ];
  window.K11_LERNWORTSCHATZ_STATS = {
    official: WORDS.length,
    added: additions.length,
    skippedAsDuplicate: WORDS.length - additions.length,
    withoutImage: additions.filter(item => !item.img).length,
    total: chapter.vocab.length
  };
})();
