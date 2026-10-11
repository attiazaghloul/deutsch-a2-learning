/* Verbs from Netzwerk neu A1.2 chapters 7-12 that are not yet in the A1 verb reference.
   Same format as data_a1_verbs.js: Präsens (all persons), Präteritum, Perfekt, Arabic and an
   example. Loaded after data_a11_verbs.js and merged into window.A1_VERBS (sorted by chapter). */
(function mergeA12Verbs() {
  if (!Array.isArray(window.A1_VERBS)) return;
  // regular present forms from the stem (arbeit- → arbeitest, grüß- → grüßt)
  const regular = stem => {
    const middle = /(?:[td]|[bcdfgkpt]h?[mn])$/.test(stem) ? "e" : "";
    const du = /(?:s|ß|x|z)$/.test(stem) ? "t" : `${middle}st`;
    return [`${stem}e`, `${stem}${du}`, `${stem}${middle}t`, `${stem}en`, `${stem}${middle}t`, `${stem}en`];
  };
  const sep = (forms, prefix) => forms.map(form => `${form} ${prefix}`);
  const refl = (forms, pronouns = ["mich", "dich", "sich", "uns", "euch", "sich"]) => forms.map((form, index) => `${form} ${pronouns[index]}`);
  const V = (chapter, inf, forms, praet, aux, part, ar, example) => ({
    chapter, inf, forms: typeof forms === "string" ? regular(forms) : forms, praet, aux, part, ar, example
  });

  const added = [
    // ---- Kapitel 7 ----
    V(7, "erklären", "erklär", "erklärte", "haben", "erklärt", "يشرح", "Die Chefin hat mir alles erklärt."),
    V(7, "korrigieren", "korrigier", "korrigierte", "haben", "korrigiert", "يصحّح", "Jonas hat meinen Bericht korrigiert."),
    V(7, "diskutieren", "diskutier", "diskutierte", "haben", "diskutiert", "يناقش", "Wir haben über aktuelle Themen diskutiert."),
    V(7, "interessieren", "interessier", "interessierte", "haben", "interessiert", "يهمّ", "Das Fußballspiel hat alle interessiert."),
    V(7, "unterschreiben", ["unterschreibe", "unterschreibst", "unterschreibt", "unterschreiben", "unterschreibt", "unterschreiben"], "unterschrieb", "haben", "unterschrieben", "يوقّع", "Ich habe den Vertrag unterschrieben."),
    V(7, "kopieren", "kopier", "kopierte", "haben", "kopiert", "ينسخ / يصوّر", "Ich habe die Seite kopiert."),
    V(7, "erledigen", "erledig", "erledigte", "haben", "erledigt", "يُنجز", "Ich habe alle Aufgaben erledigt."),
    V(7, "annehmen", sep(["nehme", "nimmst", "nimmt", "nehmen", "nehmt", "nehmen"], "an"), "nahm an", "haben", "angenommen", "يستلم / يقبل", "Adnan hat das Paket angenommen."),
    V(7, "mitnehmen", sep(["nehme", "nimmst", "nimmt", "nehmen", "nehmt", "nehmen"], "mit"), "nahm mit", "haben", "mitgenommen", "ياخد معاه", "Die Chefin hat mich zum Kunden mitgenommen."),
    V(7, "hochfahren", sep(["fahre", "fährst", "fährt", "fahren", "fahrt", "fahren"], "hoch"), "fuhr hoch", "haben", "hochgefahren", "يشغّل (الكمبيوتر)", "Ich habe den Computer hochgefahren."),
    V(7, "herunterfahren", sep(["fahre", "fährst", "fährt", "fahren", "fahrt", "fahren"], "herunter"), "fuhr herunter", "haben", "heruntergefahren", "يقفل (الكمبيوتر)", "Hast du den Computer heruntergefahren?"),
    V(7, "anmachen", sep(regular("mach"), "an"), "machte an", "haben", "angemacht", "يشغّل", "Max hat den Drucker angemacht."),
    V(7, "ausmachen", sep(regular("mach"), "aus"), "machte aus", "haben", "ausgemacht", "يطفّي", "Die Oma hat den Drucker ausgemacht."),
    V(7, "öffnen", "öffn", "öffnete", "haben", "geöffnet", "يفتح", "Ich habe die Datei geöffnet."),
    V(7, "speichern", ["speichere", "speicherst", "speichert", "speichern", "speichert", "speichern"], "speicherte", "haben", "gespeichert", "يحفظ", "Hast du die Datei gespeichert?"),
    V(7, "ausdrucken", sep(regular("druck"), "aus"), "druckte aus", "haben", "ausgedruckt", "يطبع", "Max hat die Kinotickets ausgedruckt."),
    V(7, "eingeben", sep(["gebe", "gibst", "gibt", "geben", "gebt", "geben"], "ein"), "gab ein", "haben", "eingegeben", "يُدخل / يكتب", "Ich habe das Passwort eingegeben."),
    V(7, "herunterladen", sep(["lade", "lädst", "lädt", "laden", "ladet", "laden"], "herunter"), "lud herunter", "haben", "heruntergeladen", "ينزّل (ملف)", "Ich habe die App heruntergeladen."),
    V(7, "abheben", sep(["hebe", "hebst", "hebt", "heben", "hebt", "heben"], "ab"), "hob ab", "haben", "abgehoben", "يسحب (فلوس)", "Ich habe 100 Euro abgehoben."),
    V(7, "bedeuten", "bedeut", "bedeutete", "haben", "bedeutet", "يعني", "Was hat das Wort bedeutet?"),
    V(7, "dauern", ["dauere", "dauerst", "dauert", "dauern", "dauert", "dauern"], "dauerte", "haben", "gedauert", "يستغرق", "Das Gespräch hat eine Stunde gedauert."),
    V(7, "denken", ["denke", "denkst", "denkt", "denken", "denkt", "denken"], "dachte", "haben", "gedacht", "يفكّر", "Ich habe an dich gedacht."),
    V(7, "verwenden", "verwend", "verwendete", "haben", "verwendet", "يستخدم", "Ich habe „aber“ verwendet."),
    V(7, "holen", "hol", "holte", "haben", "geholt", "يجيب", "Ich habe noch Geld geholt."),
    V(7, "reden", "red", "redete", "haben", "geredet", "يتكلم", "Wir haben über das Wetter geredet."),
    V(7, "kennenlernen", sep(regular("lern"), "kennen"), "lernte kennen", "haben", "kennengelernt", "يتعرّف على", "Im Club habe ich viele Leute kennengelernt."),
    // ---- Kapitel 8 ----
    V(8, "trainieren", "trainier", "trainierte", "haben", "trainiert", "يتمرّن", "Anna hat im Fitness-Studio trainiert."),
    V(8, "schaffen", "schaff", "schaffte", "haben", "geschafft", "ينجح في / يقدر", "Ich habe das Experiment geschafft!"),
    V(8, "weitermachen", sep(regular("mach"), "weiter"), "machte weiter", "haben", "weitergemacht", "يكمّل", "Sie hat einfach weitergemacht."),
    V(8, "rausgehen", sep(["gehe", "gehst", "geht", "gehen", "geht", "gehen"], "raus"), "ging raus", "sein", "rausgegangen", "يطلع برة", "Ich bin heute noch nicht rausgegangen."),
    V(8, "vergessen", ["vergesse", "vergisst", "vergisst", "vergessen", "vergesst", "vergessen"], "vergaß", "haben", "vergessen", "ينسى", "Ich habe das Passwort vergessen."),
    V(8, "vermissen", "vermiss", "vermisste", "haben", "vermisst", "يوحشه", "Wir haben dich sehr vermisst."),
    V(8, "wiegen", ["wiege", "wiegst", "wiegt", "wiegen", "wiegt", "wiegen"], "wog", "haben", "gewogen", "يوزن", "Der Arzt hat mich gewogen."),
    V(8, "bewegen", "beweg", "bewegte", "haben", "bewegt", "يحرّك", "Ich habe das Bein nur wenig bewegt."),
    V(8, "wehtun", sep(["tue", "tust", "tut", "tun", "tut", "tun"], "weh"), "tat weh", "haben", "wehgetan", "يوجع", "Mein Knie hat sehr wehgetan."),
    V(8, "husten", "hust", "hustete", "haben", "gehustet", "يكحّ", "Ich habe die ganze Nacht gehustet."),
    V(8, "riechen", ["rieche", "riechst", "riecht", "riechen", "riecht", "riechen"], "roch", "haben", "gerochen", "يشم", "Mit Schnupfen habe ich nichts gerochen."),
    V(8, "rauchen", "rauch", "rauchte", "haben", "geraucht", "يدخّن", "Er hat früher viel geraucht."),
    V(8, "baden", "bad", "badete", "haben", "gebadet", "ياخد حمّام", "Mit Fieber habe ich nicht gebadet."),
    V(8, "versuchen", "versuch", "versuchte", "haben", "versucht", "يحاول / يجرّب", "Ich habe es mit Honig versucht."),
    V(8, "einschlafen", sep(["schlafe", "schläfst", "schläft", "schlafen", "schlaft", "schlafen"], "ein"), "schlief ein", "sein", "eingeschlafen", "ينام / يغلبه النوم", "Ich bin sofort eingeschlafen."),
    V(8, "sich hinlegen", refl(["lege", "legst", "legt", "legen", "legt", "legen"]).map(form => `${form} hin`), "legte sich hin", "haben", "sich hingelegt", "يستلقي", "Ich habe mich kurz hingelegt."),
    V(8, "aufmachen", sep(regular("mach"), "auf"), "machte auf", "haben", "aufgemacht", "يفتح", "Ich habe das Fenster aufgemacht."),
    V(8, "zumachen", sep(regular("mach"), "zu"), "machte zu", "haben", "zugemacht", "يقفل", "Hast du die Tür zugemacht?"),
    V(8, "aufschreiben", sep(["schreibe", "schreibst", "schreibt", "schreiben", "schreibt", "schreiben"], "auf"), "schrieb auf", "haben", "aufgeschrieben", "يكتب / يدوّن", "Ich habe die Sätze aufgeschrieben."),
    V(8, "vorlesen", sep(["lese", "liest", "liest", "lesen", "lest", "lesen"], "vor"), "las vor", "haben", "vorgelesen", "يقرا بصوت عالي", "Sie hat den Text vorgelesen."),
    V(8, "wiederholen", ["wiederhole", "wiederholst", "wiederholt", "wiederholen", "wiederholt", "wiederholen"], "wiederholte", "haben", "wiederholt", "يكرّر / يراجع", "Wir haben die Grammatik wiederholt."),
    V(8, "bekommen", ["bekomme", "bekommst", "bekommt", "bekommen", "bekommt", "bekommen"], "bekam", "haben", "bekommen", "ياخد / يستلم", "Frau Pohn hat ein Rezept bekommen."),
    V(8, "wegräumen", sep(regular("räum"), "weg"), "räumte weg", "haben", "weggeräumt", "يشيل", "Annika hat die Schokolade weggeräumt."),
    // ---- Kapitel 9 ----
    V(9, "umziehen", sep(["ziehe", "ziehst", "zieht", "ziehen", "zieht", "ziehen"], "um"), "zog um", "sein", "umgezogen", "يعزّل / ينقل", "Wir sind im Mai umgezogen."),
    V(9, "einziehen", sep(["ziehe", "ziehst", "zieht", "ziehen", "zieht", "ziehen"], "ein"), "zog ein", "sein", "eingezogen", "يسكن (في شقة جديدة)", "Wir sind am Montag eingezogen."),
    V(9, "legen", "leg", "legte", "haben", "gelegt", "يحط (نايم)", "Ich habe das Buch auf den Tisch gelegt."),
    V(9, "liegen", ["liege", "liegst", "liegt", "liegen", "liegt", "liegen"], "lag", "haben", "gelegen", "موجود (نايم)", "Der Teppich hat unter dem Sofa gelegen."),
    V(9, "hängen", "häng", "hängte", "haben", "gehängt", "يعلّق", "Wir haben das Bild an die Wand gehängt."),
    V(9, "aufhängen", sep(regular("häng"), "auf"), "hängte auf", "haben", "aufgehängt", "يعلّق", "Sie haben einen Zettel aufgehängt."),
    V(9, "aussehen", sep(["sehe", "siehst", "sieht", "sehen", "seht", "sehen"], "aus"), "sah aus", "haben", "ausgesehen", "شكله", "Die Wohnung hat toll ausgesehen."),
    V(9, "schließen", ["schließe", "schließt", "schließt", "schließen", "schließt", "schließen"], "schloss", "haben", "geschlossen", "يقفل", "Ich habe die Tür geschlossen."),
    V(9, "sich freuen", refl(["freue", "freust", "freut", "freuen", "freut", "freuen"]), "freute sich", "haben", "sich gefreut", "يفرح", "Wir haben uns über die Einladung gefreut."),
    V(9, "einrichten", sep(["richte", "richtest", "richtet", "richten", "richtet", "richten"], "ein"), "richtete ein", "haben", "eingerichtet", "يفرش (شقة)", "Wir haben die Wohnung neu eingerichtet."),
    // ---- Kapitel 10 ----
    V(10, "verdienen", "verdien", "verdiente", "haben", "verdient", "يكسب", "Im Sommer habe ich gut verdient."),
    V(10, "malen", "mal", "malte", "haben", "gemalt", "يرسم", "Die Künstlerin hat ein Bild gemalt."),
    V(10, "betreuen", "betreu", "betreute", "haben", "betreut", "يرعى", "Die Erzieherin hat die Kinder betreut."),
    V(10, "segeln", ["segle", "segelst", "segelt", "segeln", "segelt", "segeln"], "segelte", "sein", "gesegelt", "يبحر بمركب شراعي", "Wir sind über den See gesegelt."),
    V(10, "verkaufen", "verkauf", "verkaufte", "haben", "verkauft", "يبيع", "Die Händler haben viel verkauft."),
    V(10, "kontrollieren", "kontrollier", "kontrollierte", "haben", "kontrolliert", "يراجع", "Anna hat die Termine kontrolliert."),
    V(10, "sich bewerben", refl(["bewerbe", "bewirbst", "bewirbt", "bewerben", "bewerbt", "bewerben"]), "bewarb sich", "haben", "sich beworben", "يقدّم على وظيفة", "Ich habe mich als Kellner beworben."),
    V(10, "kündigen", "kündig", "kündigte", "haben", "gekündigt", "يستقيل", "Er hat seine Stelle gekündigt."),
    V(10, "sich melden", refl(["melde", "meldest", "meldet", "melden", "meldet", "melden"]), "meldete sich", "haben", "sich gemeldet", "يرد / يعرّف بنفسه", "Sie hat sich mit dem Familiennamen gemeldet."),
    V(10, "nachfragen", sep(regular("frag"), "nach"), "fragte nach", "haben", "nachgefragt", "يستفسر", "Ich habe noch einmal nachgefragt."),
    V(10, "stattfinden", sep(["finde", "findest", "findet", "finden", "findet", "finden"], "statt"), "fand statt", "haben", "stattgefunden", "يُقام", "Das Festival hat im Juli stattgefunden."),
    V(10, "verbinden", ["verbinde", "verbindest", "verbindet", "verbinden", "verbindet", "verbinden"], "verband", "haben", "verbunden", "يوصّل (مكالمة)", "Er hat mich mit Frau Selmicz verbunden."),
    // ---- Kapitel 11 ----
    V(11, "ausziehen", sep(["ziehe", "ziehst", "zieht", "ziehen", "zieht", "ziehen"], "aus"), "zog aus", "haben", "ausgezogen", "يقلع", "Ich habe den Pullover wieder ausgezogen."),
    V(11, "umtauschen", sep(regular("tausch"), "um"), "tauschte um", "haben", "umgetauscht", "يستبدل", "Ich habe die Hose umgetauscht."),
    V(11, "zurückschicken", sep(regular("schick"), "zurück"), "schickte zurück", "haben", "zurückgeschickt", "يرجّع", "Ich habe alles zurückgeschickt."),
    V(11, "entdecken", "entdeck", "entdeckte", "haben", "entdeckt", "يكتشف", "Wo hast du den Hut entdeckt?"),
    V(11, "empfehlen", ["empfehle", "empfiehlst", "empfiehlt", "empfehlen", "empfehlt", "empfehlen"], "empfahl", "haben", "empfohlen", "ينصح بـ", "Jana hat mir das T-Shirt empfohlen."),
    V(11, "shoppen", "shopp", "shoppte", "haben", "geshoppt", "يعمل شوبنج", "Wir haben den ganzen Tag geshoppt."),
    V(11, "ankommen", sep(["komme", "kommst", "kommt", "kommen", "kommt", "kommen"], "an"), "kam an", "sein", "angekommen", "يوصل", "Das Paket ist heute angekommen."),
    V(11, "kriegen", "krieg", "kriegte", "haben", "gekriegt", "ياخد / يلاقي", "Wo hast du die Schuhe gekriegt?"),
    V(11, "nerven", "nerv", "nervte", "haben", "genervt", "يضايق", "Das hat mich total genervt!"),
    V(11, "meinen", "mein", "meinte", "haben", "gemeint", "يقصد", "Welche Jacke hast du gemeint?"),
    V(11, "gehören", "gehör", "gehörte", "haben", "gehört", "يخصّ / ملك", "Die Sachen haben nicht mir gehört."),
    V(11, "fernsehen", sep(["sehe", "siehst", "sieht", "sehen", "seht", "sehen"], "fern"), "sah fern", "haben", "ferngesehen", "يتفرّج على التلفزيون", "Gestern habe ich lange ferngesehen."),
    V(11, "ausgehen", sep(["gehe", "gehst", "geht", "gehen", "geht", "gehen"], "aus"), "ging aus", "sein", "ausgegangen", "يخرج / يسهر", "Am Samstag sind wir ausgegangen."),
    // ---- Kapitel 12 ----
    V(12, "packen", "pack", "packte", "haben", "gepackt", "يحضّر (الشنطة)", "Hast du den Koffer schon gepackt?"),
    V(12, "einpacken", sep(regular("pack"), "ein"), "packte ein", "haben", "eingepackt", "يحط في الشنطة", "Ich habe die Sonnencreme eingepackt."),
    V(12, "übernachten", "übernacht", "übernachtete", "haben", "übernachtet", "يبات", "Wir haben in einer Pension übernachtet."),
    V(12, "reservieren", "reservier", "reservierte", "haben", "reserviert", "يحجز", "Ich habe ein Doppelzimmer reserviert."),
    V(12, "einsteigen", sep(["steige", "steigst", "steigt", "steigen", "steigt", "steigen"], "ein"), "stieg ein", "sein", "eingestiegen", "يركب", "Wir sind am Bahnhof eingestiegen."),
    V(12, "aussteigen", sep(["steige", "steigst", "steigt", "steigen", "steigt", "steigen"], "aus"), "stieg aus", "sein", "ausgestiegen", "ينزل", "Wir sind am Marktplatz ausgestiegen."),
    V(12, "umsteigen", sep(["steige", "steigst", "steigt", "steigen", "steigt", "steigen"], "um"), "stieg um", "sein", "umgestiegen", "يغيّر المواصلة", "Ich bin in Frankfurt umgestiegen."),
    V(12, "abfahren", sep(["fahre", "fährst", "fährt", "fahren", "fahrt", "fahren"], "ab"), "fuhr ab", "sein", "abgefahren", "يقوم / يتحرّك", "Der Zug ist pünktlich abgefahren."),
    V(12, "zurückfahren", sep(["fahre", "fährst", "fährt", "fahren", "fahrt", "fahren"], "zurück"), "fuhr zurück", "sein", "zurückgefahren", "يرجع", "Wir sind mit dem Zug zurückgefahren."),
    V(12, "losfahren", sep(["fahre", "fährst", "fährt", "fahren", "fahrt", "fahren"], "los"), "fuhr los", "sein", "losgefahren", "يتحرّك / ينطلق", "Wir sind nach dem Frühstück losgefahren."),
    V(12, "verpassen", "verpass", "verpasste", "haben", "verpasst", "يفوّت", "Wir haben unseren Bahnhof verpasst."),
    V(12, "wecken", "weck", "weckte", "haben", "geweckt", "يصحّي", "Der Schaffner hat uns geweckt."),
    V(12, "schneien", ["schneie", "schneist", "schneit", "schneien", "schneit", "schneien"], "schneite", "haben", "geschneit", "تتلّج", "Gestern hat es viel geschneit."),
    V(12, "regnen", ["regne", "regnest", "regnet", "regnen", "regnet", "regnen"], "regnete", "haben", "geregnet", "تمطر", "Es hat den ganzen Tag geregnet."),
    V(12, "spazieren gehen", sep(["gehe", "gehst", "geht", "gehen", "geht", "gehen"], "spazieren"), "ging spazieren", "sein", "spazieren gegangen", "يتمشّى", "Wir sind in der Altstadt spazieren gegangen."),
    V(12, "wünschen", "wünsch", "wünschte", "haben", "gewünscht", "يتمنّى", "Ich habe dir einen schönen Urlaub gewünscht."),
    V(12, "benutzen", "benutz", "benutzte", "haben", "benutzt", "يستخدم", "Wir haben den Bus benutzt."),
    V(12, "chillen", "chill", "chillte", "haben", "gechillt", "يفصل / يريّح", "Ich habe im Zimmer gechillt.")
  ];

  const known = new Set(window.A1_VERBS.map(verb => verb.inf));
  added.filter(verb => !known.has(verb.inf)).forEach(verb => window.A1_VERBS.push(verb));
  window.A1_VERBS.sort((a, b) => a.chapter - b.chapter);
})();
