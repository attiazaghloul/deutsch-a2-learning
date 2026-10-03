/* Verbs from Netzwerk neu A1.1 chapters 1-6 that are not yet in the A1 verb reference.
   Same format as data_a1_verbs.js: Präsens (all persons), Präteritum, Perfekt, Arabic and an
   example. Loaded after data_a1_verbs.js and merged into window.A1_VERBS (sorted by chapter). */
(function mergeA11Verbs() {
  if (!Array.isArray(window.A1_VERBS)) return;
  // regular present forms from the stem (arbeit- → arbeitest, grüß- → grüßt)
  const regular = stem => {
    const middle = /(?:[td]|[bcdfgkpt]h?[mn])$/.test(stem) ? "e" : "";
    const du = /(?:s|ß|x|z)$/.test(stem) ? "t" : `${middle}st`;
    return [`${stem}e`, `${stem}${du}`, `${stem}${middle}t`, `${stem}en`, `${stem}${middle}t`, `${stem}en`];
  };
  const sep = (forms, prefix) => forms.map(form => `${form} ${prefix}`);
  const V = (chapter, inf, forms, praet, aux, part, ar, example) => ({
    chapter, inf, forms: typeof forms === "string" ? regular(forms) : forms, praet, aux, part, ar, example
  });

  const added = [
    // ---- Kapitel 1 ----
    V(1, "buchstabieren", "buchstabier", "buchstabierte", "haben", "buchstabiert", "يهجّي", "Ich habe meinen Namen buchstabiert."),
    V(1, "fragen", "frag", "fragte", "haben", "gefragt", "يسأل", "Ich habe den Lehrer gefragt."),
    V(1, "schreiben", ["schreibe", "schreibst", "schreibt", "schreiben", "schreibt", "schreiben"], "schrieb", "haben", "geschrieben", "يكتب", "Ich habe eine E-Mail geschrieben."),
    V(1, "sagen", "sag", "sagte", "haben", "gesagt", "يقول", "Er hat „Guten Tag“ gesagt."),
    V(1, "kennen", ["kenne", "kennst", "kennt", "kennen", "kennt", "kennen"], "kannte", "haben", "gekannt", "يعرف (شخصًا)", "Ich habe sie schon lange gekannt."),
    V(1, "verstehen", ["verstehe", "verstehst", "versteht", "verstehen", "versteht", "verstehen"], "verstand", "haben", "verstanden", "يفهم", "Ich habe die Frage nicht verstanden."),
    V(1, "vorstellen", sep(["stelle", "stellst", "stellt", "stellen", "stellt", "stellen"], "vor"), "stellte vor", "haben", "vorgestellt", "يعرّف / يقدّم", "Ich habe meine Freundin vorgestellt."),
    V(1, "grüßen", "grüß", "grüßte", "haben", "gegrüßt", "يسلّم / يحيّي", "Er hat mich freundlich gegrüßt."),
    V(1, "sich verabschieden", ["verabschiede mich", "verabschiedest dich", "verabschiedet sich", "verabschieden uns", "verabschiedet euch", "verabschieden sich"], "verabschiedete sich", "haben", "sich verabschiedet", "يودّع", "Wir haben uns herzlich verabschiedet."),
    V(1, "ergänzen", ["ergänze", "ergänzt", "ergänzt", "ergänzen", "ergänzt", "ergänzen"], "ergänzte", "haben", "ergänzt", "يكمّل", "Ich habe die Verben ergänzt."),
    V(1, "zuordnen", sep(regular("ordn"), "zu"), "ordnete zu", "haben", "zugeordnet", "يوصّل / يربط", "Ich habe die Bilder den Wörtern zugeordnet."),
    V(1, "unterstreichen", ["unterstreiche", "unterstreichst", "unterstreicht", "unterstreichen", "unterstreicht", "unterstreichen"], "unterstrich", "haben", "unterstrichen", "يحط خط تحت", "Ich habe die Verben unterstrichen."),
    V(1, "notieren", "notier", "notierte", "haben", "notiert", "يدوّن", "Ich habe die Telefonnummer notiert."),
    V(1, "raten", ["rate", "rätst", "rät", "raten", "ratet", "raten"], "riet", "haben", "geraten", "يخمّن / ينصح", "Wir haben den Namen geraten."),
    V(1, "sammeln", ["sammle", "sammelst", "sammelt", "sammeln", "sammelt", "sammeln"], "sammelte", "haben", "gesammelt", "يجمع", "Wir haben deutsche Wörter gesammelt."),
    V(1, "reagieren", "reagier", "reagierte", "haben", "reagiert", "يرد / يتفاعل", "Sie hat nicht auf die E-Mail reagiert."),
    V(1, "variieren", "variier", "variierte", "haben", "variiert", "يغيّر / ينوّع", "Wir haben den Dialog variiert."),
    V(1, "mitlesen", sep(["lese", "liest", "liest", "lesen", "lest", "lesen"], "mit"), "las mit", "haben", "mitgelesen", "يقرأ مع التسجيل", "Ich habe den Text mitgelesen."),
    V(1, "mitsprechen", sep(["spreche", "sprichst", "spricht", "sprechen", "sprecht", "sprechen"], "mit"), "sprach mit", "haben", "mitgesprochen", "يردد مع التسجيل", "Wir haben laut mitgesprochen."),
    // ---- Kapitel 2 ----
    V(2, "joggen", "jogg", "joggte", "haben", "gejoggt", "يجري (هرولة)", "Ich habe im Park gejoggt."),
    V(2, "singen", ["singe", "singst", "singt", "singen", "singt", "singen"], "sang", "haben", "gesungen", "يغنّي", "Sie hat sehr schön gesungen."),
    V(2, "lieben", "lieb", "liebte", "haben", "geliebt", "يحب (بقوة)", "Er hat sie sehr geliebt."),
    V(2, "fotografieren", "fotografier", "fotografierte", "haben", "fotografiert", "يصوّر", "Ich habe den Turm fotografiert."),
    V(2, "nennen", ["nenne", "nennst", "nennt", "nennen", "nennt", "nennen"], "nannte", "haben", "genannt", "يسمّي / يذكر", "Sie hat drei Berufe genannt."),
    V(2, "wählen", "wähl", "wählte", "haben", "gewählt", "يختار / ينتخب", "Wir haben ein Thema gewählt."),
    V(2, "tauschen", "tausch", "tauschte", "haben", "getauscht", "يبدّل / يتبادل", "Wir haben die Rollen getauscht."),
    V(2, "präsentieren", "präsentier", "präsentierte", "haben", "präsentiert", "يقدّم / يعرض", "Sie hat ihr Ergebnis präsentiert."),
    V(2, "vergleichen", ["vergleiche", "vergleichst", "vergleicht", "vergleichen", "vergleicht", "vergleichen"], "verglich", "haben", "verglichen", "يقارن", "Wir haben die Antworten verglichen."),
    V(2, "merken", "merk", "merkte", "haben", "gemerkt", "يحفظ في الذاكرة / يلاحظ", "Ich habe mir die Nummer gemerkt."),
    V(2, "markieren", "markier", "markierte", "haben", "markiert", "يعلّم بقلم", "Ich habe die Verben markiert."),
    V(2, "nachsprechen", sep(["spreche", "sprichst", "spricht", "sprechen", "sprecht", "sprechen"], "nach"), "sprach nach", "haben", "nachgesprochen", "يردد وراه", "Wir haben die Sätze nachgesprochen."),
    V(2, "ankreuzen", sep(regular("kreuz"), "an"), "kreuzte an", "haben", "angekreuzt", "يعلّم بعلامة ×", "Ich habe die Antwort angekreuzt."),
    V(2, "antworten", "antwort", "antwortete", "haben", "geantwortet", "يجاوب", "Er hat nicht geantwortet."),
    V(2, "berichten", "bericht", "berichtete", "haben", "berichtet", "يحكي / يقدّم تقرير", "Sie hat im Kurs berichtet."),
    V(2, "sich verabreden", ["verabrede mich", "verabredest dich", "verabredet sich", "verabreden uns", "verabredet euch", "verabreden sich"], "verabredete sich", "haben", "sich verabredet", "يتفق على ميعاد", "Wir haben uns für Samstag verabredet."),
    V(2, "stehen", ["stehe", "stehst", "steht", "stehen", "steht", "stehen"], "stand", "haben", "gestanden", "واقف / موجود", "Der Turm hat dort schon lange gestanden."),
    V(2, "ansehen", sep(["sehe", "siehst", "sieht", "sehen", "seht", "sehen"], "an"), "sah an", "haben", "angesehen", "يتفرج على / يبص على", "Wir haben das Foto angesehen."),
    V(2, "zusammenpassen", sep(["passe", "passt", "passt", "passen", "passt", "passen"], "zusammen"), "passte zusammen", "haben", "zusammengepasst", "يتناسب مع بعض", "Die Wörter haben gut zusammengepasst."),
    V(2, "freihaben", ["habe frei", "hast frei", "hat frei", "haben frei", "habt frei", "haben frei"], "hatte frei", "haben", "freigehabt", "عنده إجازة", "Ich habe am Montag freigehabt."),
    // ---- Kapitel 3 ----
    V(3, "zeigen", "zeig", "zeigte", "haben", "gezeigt", "يوري / يشاور", "Er hat mir den Weg gezeigt."),
    V(3, "zeichnen", "zeichn", "zeichnete", "haben", "gezeichnet", "يرسم", "Sie hat ein Haus gezeichnet."),
    V(3, "stellen", "stell", "stellte", "haben", "gestellt", "يحط / يطرح (سؤال)", "Ich habe eine Frage gestellt."),
    V(3, "bilden", "bild", "bildete", "haben", "gebildet", "يكوّن", "Wir haben Gruppen gebildet."),
    V(3, "dirigieren", "dirigier", "dirigierte", "haben", "dirigiert", "يقود (أوركسترا)", "Er hat das Orchester dirigiert."),
    V(3, "würfeln", ["würfle", "würfelst", "würfelt", "würfeln", "würfelt", "würfeln"], "würfelte", "haben", "gewürfelt", "يرمي النرد", "Wir haben dreimal gewürfelt."),
    V(3, "klopfen", "klopf", "klopfte", "haben", "geklopft", "يخبط / يطرق", "Er hat an die Tür geklopft."),
    V(3, "kreisen", "kreis", "kreiste", "haben", "gekreist", "يدور / يحط دايرة حوالين", "Ich habe die Vokale gekreist."),
    // ---- Kapitel 4 ----
    V(4, "brauchen", "brauch", "brauchte", "haben", "gebraucht", "يحتاج", "Ich habe noch Milch gebraucht."),
    V(4, "kosten", "kost", "kostete", "haben", "gekostet", "يكلّف", "Das Brot hat zwei Euro gekostet."),
    V(4, "helfen", ["helfe", "hilfst", "hilft", "helfen", "helft", "helfen"], "half", "haben", "geholfen", "يساعد", "Er hat mir beim Kochen geholfen."),
    V(4, "grillen", "grill", "grillte", "haben", "gegrillt", "يشوي", "Wir haben im Garten gegrillt."),
    V(4, "schälen", "schäl", "schälte", "haben", "geschält", "يقشّر", "Ich habe die Kartoffeln geschält."),
    V(4, "schneiden", ["schneide", "schneidest", "schneidet", "schneiden", "schneidet", "schneiden"], "schnitt", "haben", "geschnitten", "يقطّع", "Sie hat das Gemüse geschnitten."),
    V(4, "zubereiten", sep(regular("bereit"), "zu"), "bereitete zu", "haben", "zubereitet", "يحضّر (أكل)", "Wir haben das Frühstück zubereitet."),
    V(4, "waschen", ["wasche", "wäschst", "wäscht", "waschen", "wascht", "waschen"], "wusch", "haben", "gewaschen", "يغسل", "Ich habe das Obst gewaschen."),
    V(4, "wechseln", ["wechsle", "wechselst", "wechselt", "wechseln", "wechselt", "wechseln"], "wechselte", "haben", "gewechselt", "يصرف (فكة) / يبدّل", "Die Kassiererin hat 50 Euro gewechselt."),
    V(4, "schmecken", "schmeck", "schmeckte", "haben", "geschmeckt", "طعمه حلو / يذوق", "Das Essen hat gut geschmeckt."),
    V(4, "planen", "plan", "plante", "haben", "geplant", "يخطط", "Wir haben den Einkauf geplant."),
    V(4, "probieren", "probier", "probierte", "haben", "probiert", "يجرّب / يدوق", "Ich habe die Suppe probiert."),
    V(4, "einfallen", sep(["falle", "fällst", "fällt", "fallen", "fallt", "fallen"], "ein"), "fiel ein", "sein", "eingefallen", "يخطر على البال", "Mir ist das Wort nicht eingefallen."),
    V(4, "führen", "führ", "führte", "haben", "geführt", "يقود / يجري (حوار)", "Wir haben ein Gespräch geführt."),
    V(4, "drankommen", sep(["komme", "kommst", "kommt", "kommen", "kommt", "kommen"], "dran"), "kam dran", "sein", "drangekommen", "جاي عليه الدور", "Wer ist als Nächstes drangekommen?"),
    V(4, "mögen", ["mag", "magst", "mag", "mögen", "mögt", "mögen"], "mochte", "haben", "gemocht", "يحب / يعجبه", "Ich habe Fisch nie gemocht."),
    V(4, "recherchieren", "recherchier", "recherchierte", "haben", "recherchiert", "يبحث (عن معلومات)", "Wir haben im Internet recherchiert."),
    V(4, "beantworten", "beantwort", "beantwortete", "haben", "beantwortet", "يجاوب على", "Ich habe alle Fragen beantwortet."),
    V(4, "verbinden", ["verbinde", "verbindest", "verbindet", "verbinden", "verbindet", "verbinden"], "verband", "haben", "verbunden", "يوصّل", "Ich habe Nomen und Artikel verbunden."),
    V(4, "stimmen", "stimm", "stimmte", "haben", "gestimmt", "يكون صح / مظبوط", "Die Antwort hat gestimmt."),
    // ---- Kapitel 5 ----
    V(5, "bleiben", ["bleibe", "bleibst", "bleibt", "bleiben", "bleibt", "bleiben"], "blieb", "sein", "geblieben", "يفضل / يقعد", "Ich bin gestern zu Hause geblieben."),
    V(5, "duschen", "dusch", "duschte", "haben", "geduscht", "ياخد دش", "Ich habe heute Morgen geduscht."),
    V(5, "beschreiben", ["beschreibe", "beschreibst", "beschreibt", "beschreiben", "beschreibt", "beschreiben"], "beschrieb", "haben", "beschrieben", "يصف", "Sie hat das Foto beschrieben."),
    V(5, "entschuldigen", "entschuldig", "entschuldigte", "haben", "entschuldigt", "يعتذر / يعذر", "Er hat sich für die Verspätung entschuldigt."),
    V(5, "leidtun", ["tue leid", "tust leid", "tut leid", "tun leid", "tut leid", "tun leid"], "tat leid", "haben", "leidgetan", "يأسف (Es tut mir leid)", "Es hat mir sehr leidgetan."),
    V(5, "sitzen", ["sitze", "sitzt", "sitzt", "sitzen", "sitzt", "sitzen"], "saß", "haben", "gesessen", "يقعد / قاعد", "Wir haben im Café gesessen."),
    V(5, "telefonieren", "telefonier", "telefonierte", "haben", "telefoniert", "يتكلم في التليفون", "Ich habe lange mit Oma telefoniert."),
    V(5, "tun", ["tue", "tust", "tut", "tun", "tut", "tun"], "tat", "haben", "getan", "يعمل / يفعل", "Was hast du heute getan?"),
    V(5, "überlegen", ["überlege", "überlegst", "überlegt", "überlegen", "überlegt", "überlegen"], "überlegte", "haben", "überlegt", "يفكّر", "Ich habe lange überlegt."),
    V(5, "vereinbaren", ["vereinbare", "vereinbarst", "vereinbart", "vereinbaren", "vereinbart", "vereinbaren"], "vereinbarte", "haben", "vereinbart", "يتفق على", "Wir haben einen Termin vereinbart."),
    V(5, "vorbereiten", sep(regular("bereit"), "vor"), "bereitete vor", "haben", "vorbereitet", "يحضّر", "Ich habe den Termin vorbereitet."),
    V(5, "ziehen", ["ziehe", "ziehst", "zieht", "ziehen", "zieht", "ziehen"], "zog", "haben", "gezogen", "يسحب", "Wir haben eine Karte gezogen."),
    V(5, "nummerieren", "nummerier", "nummerierte", "haben", "nummeriert", "يرقّم", "Ich habe die Sätze nummeriert."),
    // ---- Kapitel 6 ----
    V(6, "beginnen", ["beginne", "beginnst", "beginnt", "beginnen", "beginnt", "beginnen"], "begann", "haben", "begonnen", "يبدأ", "Das Konzert hat um acht begonnen."),
    V(6, "aufhören", sep(["höre", "hörst", "hört", "hören", "hört", "hören"], "auf"), "hörte auf", "haben", "aufgehört", "يبطّل / يتوقف", "Der Regen hat aufgehört."),
    V(6, "enden", "end", "endete", "haben", "geendet", "ينتهي", "Die Party hat um Mitternacht geendet."),
    V(6, "mitbringen", sep(["bringe", "bringst", "bringt", "bringen", "bringt", "bringen"], "mit"), "brachte mit", "haben", "mitgebracht", "يجيب معاه", "Ich habe Saft mitgebracht."),
    V(6, "mitkommen", sep(["komme", "kommst", "kommt", "kommen", "kommt", "kommen"], "mit"), "kam mit", "sein", "mitgekommen", "يجي معاه", "Er ist zur Party mitgekommen."),
    V(6, "mitmachen", sep(["mache", "machst", "macht", "machen", "macht", "machen"], "mit"), "machte mit", "haben", "mitgemacht", "يشارك", "Alle haben beim Spiel mitgemacht."),
    V(6, "schenken", "schenk", "schenkte", "haben", "geschenkt", "يهدي", "Ich habe ihr Blumen geschenkt."),
    V(6, "abholen", sep(["hole", "holst", "holt", "holen", "holt", "holen"], "ab"), "holte ab", "haben", "abgeholt", "يجيب / يستلم (شخص)", "Ich habe dich am Bahnhof abgeholt."),
    V(6, "bringen", ["bringe", "bringst", "bringt", "bringen", "bringt", "bringen"], "brachte", "haben", "gebracht", "يجيب / يوصّل", "Der Kellner hat das Essen gebracht."),
    V(6, "laufen", ["laufe", "läufst", "läuft", "laufen", "lauft", "laufen"], "lief", "sein", "gelaufen", "يجري / يمشي", "Er ist einen Marathon gelaufen."),
    V(6, "wandern", ["wandere", "wanderst", "wandert", "wandern", "wandert", "wandern"], "wanderte", "sein", "gewandert", "يتمشّى مسافات طويلة", "Wir sind in den Bergen gewandert."),
    V(6, "klettern", ["klettere", "kletterst", "klettert", "klettern", "klettert", "klettern"], "kletterte", "sein", "geklettert", "يتسلّق", "Er ist auf den Berg geklettert."),
    V(6, "genießen", ["genieße", "genießt", "genießt", "genießen", "genießt", "genießen"], "genoss", "haben", "genossen", "يستمتع بـ", "Wir haben die Sonne genossen."),
    V(6, "glauben", "glaub", "glaubte", "haben", "geglaubt", "يعتقد / يصدّق", "Ich habe ihm geglaubt."),
    V(6, "fehlen", "fehl", "fehlte", "haben", "gefehlt", "ناقص / غايب", "Gestern hat Tom gefehlt."),
    V(6, "passieren", "passier", "passierte", "sein", "passiert", "يحصل", "Was ist passiert?"),
    V(6, "werden", ["werde", "wirst", "wird", "werden", "werdet", "werden"], "wurde", "sein", "geworden", "يبقى / يصبح", "Sofia ist dreißig geworden."),
    V(6, "wissen", ["weiß", "weißt", "weiß", "wissen", "wisst", "wissen"], "wusste", "haben", "gewusst", "يعرف (معلومة)", "Ich habe es nicht gewusst."),
    V(6, "zahlen", "zahl", "zahlte", "haben", "gezahlt", "يدفع", "Wir haben zusammen gezahlt."),
    V(6, "klingen", ["klinge", "klingst", "klingt", "klingen", "klingt", "klingen"], "klang", "haben", "geklungen", "يبدو (من الصوت)", "Das hat gut geklungen."),
    V(6, "aufpassen", sep(["passe", "passt", "passt", "passen", "passt", "passen"], "auf"), "passte auf", "haben", "aufgepasst", "ياخد باله", "Ich habe gut aufgepasst."),
    V(6, "aufstellen", sep(["stelle", "stellst", "stellt", "stellen", "stellt", "stellen"], "auf"), "stellte auf", "haben", "aufgestellt", "ينصب / يرتّب", "Wir haben den Tisch aufgestellt."),
    V(6, "einsammeln", sep(["sammle", "sammelst", "sammelt", "sammeln", "sammelt", "sammeln"], "ein"), "sammelte ein", "haben", "eingesammelt", "يلمّ", "Die Lehrerin hat die Zettel eingesammelt."),
    V(6, "ordnen", "ordn", "ordnete", "haben", "geordnet", "يرتّب", "Ich habe den Dialog geordnet.")
  ];

  const known = new Set(window.A1_VERBS.map(verb => verb.inf));
  added.filter(verb => !known.has(verb.inf)).forEach(verb => window.A1_VERBS.push(verb));
  // stable sort: existing verbs keep their order inside a chapter, new ones follow
  window.A1_VERBS.sort((a, b) => a.chapter - b.chapter);
})();
