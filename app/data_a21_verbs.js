/* Verbs from Netzwerk neu A2.1 chapters 1-6 that are not yet in the A2 verb reference.
   Same format as data_verbs.js: Präsens (all persons), Präteritum, Perfekt, Arabic and an
   example. Loaded after data_a21_library.js and merged into window.A2_VERBS (sorted by chapter). */
(function mergeA21Verbs() {
  if (!Array.isArray(window.A2_VERBS)) return;
  // regular present forms from the stem (arbeit- → arbeitest, grüß- → grüßt)
  const regular = stem => {
    const middle = /(?:[td]|[bcdfgkpt]h?[mn])$/.test(stem) ? "e" : "";
    const du = /(?:s|ß|x|z)$/.test(stem) ? "t" : `${middle}st`;
    return [`${stem}e`, `${stem}${du}`, `${stem}${middle}t`, `${stem}en`, `${stem}${middle}t`, `${stem}en`];
  };
  const sep = (forms, prefix) => forms.map(form => `${form} ${prefix}`);
  const refl = forms => forms.map((form, index) => `${form} ${["mich", "dich", "sich", "uns", "euch", "sich"][index]}`);
  const V = (chapter, inf, forms, praet, aux, part, ar, example) => ({
    chapter, inf, forms: typeof forms === "string" ? regular(forms) : forms, praet, aux, part, ar, example
  });
  const nehmen = ["nehme", "nimmst", "nimmt", "nehmen", "nehmt", "nehmen"];
  const fahren = ["fahre", "fährst", "fährt", "fahren", "fahrt", "fahren"];
  const geben = ["gebe", "gibst", "gibt", "geben", "gebt", "geben"];

  const added = [
    // ---- Kapitel 1 ----
    V(1, "heiraten", "heirat", "heiratete", "haben", "geheiratet", "يتجوّز", "Meine Schwester hat im August geheiratet."),
    V(1, "aufwachsen", sep(["wachse", "wächst", "wächst", "wachsen", "wachst", "wachsen"], "auf"), "wuchs auf", "sein", "aufgewachsen", "يتربّى / يكبر", "Ich bin in Graz aufgewachsen."),
    V(1, "zusammenleben", sep(regular("leb"), "zusammen"), "lebte zusammen", "haben", "zusammengelebt", "يعيشوا مع بعض", "Wir haben zwei Jahre zusammengelebt."),
    V(1, "mieten", "miet", "mietete", "haben", "gemietet", "يأجّر", "Wir haben ein Auto gemietet."),
    V(1, "renovieren", "renovier", "renovierte", "haben", "renoviert", "يجدّد", "Wir haben das alte Haus renoviert."),
    V(1, "weitersuchen", sep(regular("such"), "weiter"), "suchte weiter", "haben", "weitergesucht", "يكمّل تدوير", "Ich habe immer weitergesucht."),
    V(1, "reiten", ["reite", "reitest", "reitet", "reiten", "reitet", "reiten"], "ritt", "sein", "geritten", "يركب خيل", "Am Wochenende bin ich geritten."),
    V(1, "teilnehmen", sep(nehmen, "teil"), "nahm teil", "haben", "teilgenommen", "يشارك", "Ich habe an einem Tenniskurs teilgenommen."),
    V(1, "sich anmelden", refl(regular("meld")).map(form => `${form} an`), "meldete sich an", "haben", "sich angemeldet", "يسجّل نفسه", "Ich habe mich im Verein angemeldet."),
    V(1, "beenden", "beend", "beendete", "haben", "beendet", "يُنهي", "Ich habe meine Ausbildung beendet."),
    V(1, "studieren", "studier", "studierte", "haben", "studiert", "يدرس (جامعة)", "Jonas hat Biologie studiert."),
    V(1, "vorschlagen", sep(["schlage", "schlägst", "schlägt", "schlagen", "schlagt", "schlagen"], "vor"), "schlug vor", "haben", "vorgeschlagen", "يقترح", "Lea hat einen Flohmarktbesuch vorgeschlagen."),
    V(1, "empfangen", ["empfange", "empfängst", "empfängt", "empfangen", "empfangt", "empfangen"], "empfing", "haben", "empfangen", "يستقبل", "Der Kellner hat uns am Eingang empfangen."),
    V(1, "auswählen", sep(regular("wähl"), "aus"), "wählte aus", "haben", "ausgewählt", "يختار", "Wir haben das Menü ausgewählt."),
    V(1, "reservieren", "reservier", "reservierte", "haben", "reserviert", "يحجز", "Ich habe einen Tisch reserviert."),
    V(1, "weiterhelfen", sep(["helfe", "hilfst", "hilft", "helfen", "helft", "helfen"], "weiter"), "half weiter", "haben", "weitergeholfen", "يساعد", "Der Kellner hat uns sofort weitergeholfen."),
    V(1, "erleben", "erleb", "erlebte", "haben", "erlebt", "يعيش تجربة", "Wir haben im Urlaub viel erlebt."),
    V(1, "fühlen", "fühl", "fühlte", "haben", "gefühlt", "يلمس / يحس", "Ich habe den Gegenstand mit der Hand gefühlt."),
    V(1, "schmecken", "schmeck", "schmeckte", "haben", "geschmeckt", "طعمه", "Das Essen hat super geschmeckt."),
    V(1, "braten", ["brate", "brätst", "brät", "braten", "bratet", "braten"], "briet", "haben", "gebraten", "يحمّر", "Ich habe den Knipp in der Pfanne gebraten."),
    V(1, "zuhören", sep(regular("hör"), "zu"), "hörte zu", "haben", "zugehört", "يسمع بانتباه", "Alle haben gut zugehört."),
    // ---- Kapitel 2 ----
    V(2, "bestehen", ["bestehe", "bestehst", "besteht", "bestehen", "besteht", "bestehen"], "bestand", "haben", "bestanden", "ينجح", "Sie hat die Prüfung bestanden."),
    V(2, "wiederholen", ["wiederhole", "wiederholst", "wiederholt", "wiederholen", "wiederholt", "wiederholen"], "wiederholte", "haben", "wiederholt", "يعيد / يراجع", "Er hat die Klasse wiederholt."),
    V(2, "üben", "üb", "übte", "haben", "geübt", "يتمرّن", "Wir haben die Aussprache geübt."),
    V(2, "ausschlafen", sep(["schlafe", "schläfst", "schläft", "schlafen", "schlaft", "schlafen"], "aus"), "schlief aus", "haben", "ausgeschlafen", "ينام لحد ما يشبع", "In den Ferien habe ich immer ausgeschlafen."),
    V(2, "sich erinnern", refl(["erinnere", "erinnerst", "erinnert", "erinnern", "erinnert", "erinnern"]), "erinnerte sich", "haben", "sich erinnert", "يفتكر", "Ich habe mich gern an die Schule erinnert."),
    V(2, "zustimmen", sep(regular("stimm"), "zu"), "stimmte zu", "haben", "zugestimmt", "يوافق", "Alle haben dem Vorschlag zugestimmt."),
    V(2, "ablehnen", sep(regular("lehn"), "ab"), "lehnte ab", "haben", "abgelehnt", "يرفض", "Fabian hat die Idee abgelehnt."),
    V(2, "wählen", "wähl", "wählte", "haben", "gewählt", "يختار", "Ich habe Biologie als Fach gewählt."),
    V(2, "jobben", "jobb", "jobbte", "haben", "gejobbt", "يشتغل شغلانة مؤقتة", "Ich habe auf Messen gejobbt."),
    V(2, "präsentieren", "präsentier", "präsentierte", "haben", "präsentiert", "يقدّم / يعرض", "Wir haben unsere Ergebnisse präsentiert."),
    V(2, "verlieren", ["verliere", "verlierst", "verliert", "verlieren", "verliert", "verlieren"], "verlor", "haben", "verloren", "يفقد", "Ich möchte keine Zeit verlieren."),
    V(2, "betreuen", "betreu", "betreute", "haben", "betreut", "يرعى", "Sara hat ein Kind im Rollstuhl betreut."),
    V(2, "erklären", "erklär", "erklärte", "haben", "erklärt", "يشرح", "Die Lehrerin hat alles gut erklärt."),
    // ---- Kapitel 3 ----
    V(3, "herunterladen", sep(["lade", "lädst", "lädt", "laden", "ladet", "laden"], "herunter"), "lud herunter", "haben", "heruntergeladen", "ينزّل", "Ich habe die App heruntergeladen."),
    V(3, "anklicken", sep(regular("klick"), "an"), "klickte an", "haben", "angeklickt", "يضغط على", "Ich habe den Link angeklickt."),
    V(3, "tippen", "tipp", "tippte", "haben", "getippt", "يكتب على الكيبورد", "Er hat die Nachricht schnell getippt."),
    V(3, "checken", "check", "checkte", "haben", "gecheckt", "يشيك", "Ich habe meine Mails gecheckt."),
    V(3, "kopieren", "kopier", "kopierte", "haben", "kopiert", "ينسخ", "Ich habe den Text kopiert."),
    V(3, "weiterleiten", sep(regular("leit"), "weiter"), "leitete weiter", "haben", "weitergeleitet", "يعيد إرسال", "Ich habe dir die E-Mail weitergeleitet."),
    V(3, "mailen", "mail", "mailte", "haben", "gemailt", "يبعت إيميل", "Ich habe Ihnen die Informationen gemailt."),
    V(3, "programmieren", "programmier", "programmierte", "haben", "programmiert", "يبرمج", "Wir haben die App programmiert."),
    V(3, "entwickeln", ["entwickle", "entwickelst", "entwickelt", "entwickeln", "entwickelt", "entwickeln"], "entwickelte", "haben", "entwickelt", "يطوّر", "Gloria hat eine App entwickelt."),
    V(3, "gründen", "gründ", "gründete", "haben", "gegründet", "يؤسّس", "Sie haben ein Start-up gegründet."),
    V(3, "kommentieren", "kommentier", "kommentierte", "haben", "kommentiert", "يعلّق", "Viele haben das Foto kommentiert."),
    V(3, "mitteilen", sep(regular("teil"), "mit"), "teilte mit", "haben", "mitgeteilt", "يبلّغ", "Sie hat mir die Nachricht mitgeteilt."),
    V(3, "lachen", "lach", "lachte", "haben", "gelacht", "يضحك", "Bei dem Film haben wir viel gelacht."),
    V(3, "weinen", "wein", "weinte", "haben", "geweint", "يعيّط", "Am Ende habe ich geweint."),
    V(3, "sterben", ["sterbe", "stirbst", "stirbt", "sterben", "sterbt", "sterben"], "starb", "sein", "gestorben", "يموت", "Die Mutter ist viel zu jung gestorben."),
    V(3, "flüstern", ["flüstere", "flüsterst", "flüstert", "flüstern", "flüstert", "flüstern"], "flüsterte", "haben", "geflüstert", "يهمس", "Sie hat mir das Wort ins Ohr geflüstert."),
    V(3, "gewinnen", ["gewinne", "gewinnst", "gewinnt", "gewinnen", "gewinnt", "gewinnen"], "gewann", "haben", "gewonnen", "يكسب", "Unsere Mannschaft hat gewonnen."),
    V(3, "ausprobieren", sep(regular("probier"), "aus"), "probierte aus", "haben", "ausprobiert", "يجرّب", "Ich habe die neue App ausprobiert."),
    // ---- Kapitel 4 ----
    V(4, "sich freuen", refl(["freue", "freust", "freut", "freuen", "freut", "freuen"]), "freute sich", "haben", "sich gefreut", "يفرح", "Wir haben uns über das Geschenk gefreut."),
    V(4, "schmücken", "schmück", "schmückte", "haben", "geschmückt", "يزيّن", "Wir haben den Raum mit Blumen geschmückt."),
    V(4, "lieben", "lieb", "liebte", "haben", "geliebt", "يحب", "Sie haben sich sehr geliebt."),
    V(4, "sich unterhalten", refl(["unterhalte", "unterhältst", "unterhält", "unterhalten", "unterhaltet", "unterhalten"]), "unterhielt sich", "haben", "sich unterhalten", "يدردش", "Auf der Party habe ich mich mit Tim unterhalten."),
    V(4, "sich treffen", refl(["treffe", "triffst", "trifft", "treffen", "trefft", "treffen"]), "traf sich", "haben", "sich getroffen", "يتقابل", "Wir haben uns im Café getroffen."),
    V(4, "sich streiten", refl(["streite", "streitest", "streitet", "streiten", "streitet", "streiten"]), "stritt sich", "haben", "sich gestritten", "يتخانق", "Die Geschwister haben sich gestritten."),
    V(4, "sich langweilen", refl(["langweile", "langweilst", "langweilt", "langweilen", "langweilt", "langweilen"]), "langweilte sich", "haben", "sich gelangweilt", "يزهق", "Im Seminar habe ich mich gelangweilt."),
    V(4, "sich ausruhen", refl(regular("ruh")).map(form => `${form} aus`), "ruhte sich aus", "haben", "sich ausgeruht", "يرتاح", "Am Sonntag habe ich mich ausgeruht."),
    V(4, "sich entschuldigen", refl(["entschuldige", "entschuldigst", "entschuldigt", "entschuldigen", "entschuldigt", "entschuldigen"]), "entschuldigte sich", "haben", "sich entschuldigt", "يعتذر", "Alia hat sich für die Verspätung entschuldigt."),
    V(4, "sich gewöhnen", refl(["gewöhne", "gewöhnst", "gewöhnt", "gewöhnen", "gewöhnt", "gewöhnen"]), "gewöhnte sich", "haben", "sich gewöhnt", "يتعوّد", "Ich habe mich an die Währung gewöhnt."),
    V(4, "sich austauschen", refl(regular("tausch")).map(form => `${form} aus`), "tauschte sich aus", "haben", "sich ausgetauscht", "يتبادلوا الآراء", "Wir haben uns über unsere Erfahrungen ausgetauscht."),
    V(4, "sich wohlfühlen", refl(regular("fühl")).map(form => `${form} wohl`), "fühlte sich wohl", "haben", "sich wohlgefühlt", "يرتاح", "In Kiel habe ich mich schnell wohlgefühlt."),
    V(4, "hoffen", "hoff", "hoffte", "haben", "gehofft", "يتمنّى", "Ich habe gehofft, dass du kommst."),
    V(4, "fallen", ["falle", "fällst", "fällt", "fallen", "fallt", "fallen"], "fiel", "sein", "gefallen", "يقع", "Das Glas ist auf den Teppich gefallen."),
    V(4, "anbieten", sep(["biete", "bietest", "bietet", "bieten", "bietet", "bieten"], "an"), "bot an", "haben", "angeboten", "يقدّم / يعزم", "Ich habe meinen Gästen Tee angeboten."),
    V(4, "bewundern", ["bewundere", "bewunderst", "bewundert", "bewundern", "bewundert", "bewundern"], "bewunderte", "haben", "bewundert", "يُعجب بـ", "Wir haben die alten Schiffe bewundert."),
    V(4, "wegfahren", sep(fahren, "weg"), "fuhr weg", "sein", "weggefahren", "يسافر / يمشي", "Meine Freundin ist gestern weggefahren."),
    V(4, "vermissen", "vermiss", "vermisste", "haben", "vermisst", "يوحشه", "Ich habe meine Familie sehr vermisst."),
    V(4, "unterrichten", ["unterrichte", "unterrichtest", "unterrichtet", "unterrichten", "unterrichtet", "unterrichten"], "unterrichtete", "haben", "unterrichtet", "يدرّس", "Paula hat in Argentinien Deutsch unterrichtet."),
    // ---- Kapitel 5 ----
    V(5, "bedienen", "bedien", "bediente", "haben", "bedient", "يخدم", "Die Kellnerin hat die Gäste bedient."),
    V(5, "servieren", "servier", "servierte", "haben", "serviert", "يقدّم (الأكل)", "Er hat die Getränke serviert."),
    V(5, "transportieren", "transportier", "transportierte", "haben", "transportiert", "ينقل", "Der Lkw hat die Waren transportiert."),
    V(5, "beschützen", "beschütz", "beschützte", "haben", "beschützt", "يحمي", "Die Polizei hat die Menschen beschützt."),
    V(5, "sich kümmern", refl(["kümmere", "kümmerst", "kümmert", "kümmern", "kümmert", "kümmern"]), "kümmerte sich", "haben", "sich gekümmert", "يهتم بـ", "Der Pfleger hat sich um die Patienten gekümmert."),
    V(5, "pflegen", "pfleg", "pflegte", "haben", "gepflegt", "يرعى", "Sie hat ihre Mutter gepflegt."),
    V(5, "leeren", "leer", "leerte", "haben", "geleert", "يفضّي", "Die Männer haben die Mülltonnen geleert."),
    V(5, "einsammeln", sep(["sammle", "sammelst", "sammelt", "sammeln", "sammelt", "sammeln"], "ein"), "sammelte ein", "haben", "eingesammelt", "يجمع", "Die Müllabfuhr hat den Müll eingesammelt."),
    V(5, "aufräumen", sep(regular("räum"), "auf"), "räumte auf", "haben", "aufgeräumt", "يرتّب", "Nach der Party haben wir aufgeräumt."),
    V(5, "genehmigen", "genehmig", "genehmigte", "haben", "genehmigt", "يوافق رسميًا", "Die Behörde hat den Antrag genehmigt."),
    V(5, "prüfen", "prüf", "prüfte", "haben", "geprüft", "يراجع / يفحص", "Der Beamte hat die Angaben geprüft."),
    V(5, "abgeben", sep(geben, "ab"), "gab ab", "haben", "abgegeben", "يسلّم", "Ich habe die Dokumente abgegeben."),
    V(5, "verlängern", ["verlängere", "verlängerst", "verlängert", "verlängern", "verlängert", "verlängern"], "verlängerte", "haben", "verlängert", "يجدّد", "Ich habe meinen Pass verlängert."),
    V(5, "melden", "meld", "meldete", "haben", "gemeldet", "يبلّغ", "Er hat den Diebstahl gemeldet."),
    V(5, "stehlen", ["stehle", "stiehlst", "stiehlt", "stehlen", "stehlt", "stehlen"], "stahl", "haben", "gestohlen", "يسرق", "Jemand hat meine Geldbörse gestohlen."),
    V(5, "sperren", "sperr", "sperrte", "haben", "gesperrt", "يوقف (كارت)", "Die Bank hat meine Karte gesperrt."),
    V(5, "leihen", ["leihe", "leihst", "leiht", "leihen", "leiht", "leihen"], "lieh", "haben", "geliehen", "يسلّف", "Mira hat mir zehn Euro geliehen."),
    V(5, "ausgeben", sep(geben, "aus"), "gab aus", "haben", "ausgegeben", "يصرف", "Ich habe zu viel Geld ausgegeben."),
    V(5, "bitten", ["bitte", "bittest", "bittet", "bitten", "bittet", "bitten"], "bat", "haben", "gebeten", "يطلب", "Ich habe ihn um einen Gefallen gebeten."),
    V(5, "funktionieren", "funktionier", "funktionierte", "haben", "funktioniert", "يشتغل", "Der Drucker hat nicht funktioniert."),
    V(5, "sich vorbereiten", refl(["bereite", "bereitest", "bereitet", "bereiten", "bereitet", "bereiten"]).map(form => `${form} vor`), "bereitete sich vor", "haben", "sich vorbereitet", "يستعد", "Ich habe mich gut auf das Gespräch vorbereitet."),
    // ---- Kapitel 6 ----
    V(6, "einhalten", sep(["halte", "hältst", "hält", "halten", "haltet", "halten"], "ein"), "hielt ein", "haben", "eingehalten", "يلتزم بـ", "Wir haben den Termin eingehalten."),
    V(6, "beraten", ["berate", "berätst", "berät", "beraten", "beratet", "beraten"], "beriet", "haben", "beraten", "ينصح", "Sie hat die Kunden gut beraten."),
    V(6, "kontrollieren", "kontrollier", "kontrollierte", "haben", "kontrolliert", "يراجع", "Er hat die Arbeit kontrolliert."),
    V(6, "klappen", "klapp", "klappte", "haben", "geklappt", "يمشي / ينجح", "Hat alles geklappt?"),
    V(6, "sich beeilen", refl(["beeile", "beeilst", "beeilt", "beeilen", "beeilt", "beeilen"]), "beeilte sich", "haben", "sich beeilt", "يستعجل", "Wir haben uns beeilt."),
    V(6, "wechseln", ["wechsle", "wechselst", "wechselt", "wechseln", "wechselt", "wechseln"], "wechselte", "haben", "gewechselt", "يغيّر", "Er hat den Beruf gewechselt."),
    V(6, "nutzen", "nutz", "nutzte", "haben", "genutzt", "يستغل", "Sie hat die Chance genutzt."),
    V(6, "bereuen", "bereu", "bereute", "haben", "bereut", "يندم", "Sie hat ihre Entscheidung nie bereut."),
    V(6, "zurückkommen", sep(["komme", "kommst", "kommt", "kommen", "kommt", "kommen"], "zurück"), "kam zurück", "sein", "zurückgekommen", "يرجع", "Ich bin gestern zurückgekommen."),
    V(6, "sich konzentrieren", refl(["konzentriere", "konzentrierst", "konzentriert", "konzentrieren", "konzentriert", "konzentrieren"]), "konzentrierte sich", "haben", "sich konzentriert", "يركّز", "Ich habe mich auf das Telefonat konzentriert."),
    V(6, "stören", "stör", "störte", "haben", "gestört", "يزعج", "Die Musik hat mich gestört."),
    V(6, "lächeln", ["lächle", "lächelst", "lächelt", "lächeln", "lächelt", "lächeln"], "lächelte", "haben", "gelächelt", "يبتسم", "Sie hat am Telefon gelächelt."),
    V(6, "ausrichten", sep(["richte", "richtest", "richtet", "richten", "richtet", "richten"], "aus"), "richtete aus", "haben", "ausgerichtet", "يبلّغ رسالة", "Ich habe ihm die Nachricht ausgerichtet."),
    V(6, "bereitlegen", sep(regular("leg"), "bereit"), "legte bereit", "haben", "bereitgelegt", "يجهّز", "Ich habe Stift und Papier bereitgelegt."),
    V(6, "sich verändern", refl(["verändere", "veränderst", "verändert", "verändern", "verändert", "verändern"]), "veränderte sich", "haben", "sich verändert", "يتغيّر", "Die Arbeitswelt hat sich stark verändert."),
    V(6, "zunehmen", sep(nehmen, "zu"), "nahm zu", "haben", "zugenommen", "يزيد", "Die Digitalisierung hat zugenommen."),
    V(6, "werden", ["werde", "wirst", "wird", "werden", "werdet", "werden"], "wurde", "sein", "geworden", "يصبح", "Er ist Fernfahrer geworden."),
    V(6, "reisen", "reis", "reiste", "sein", "gereist", "يسافر", "Sie ist durch ganz Europa gereist.")
  ];

  const known = new Set(window.A2_VERBS.map(verb => verb.inf));
  added.filter(verb => !known.has(verb.inf)).forEach(verb => { window.A2_VERBS.push(verb); known.add(verb.inf); });
  window.A2_VERBS.sort((a, b) => a.chapter - b.chapter);
})();
