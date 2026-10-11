/* Detailed A1.2 grammar (chapters 10-12): explanations, tables, typical mistakes and
   varied exercises. Same format as data_a12_grammar_1.js. */
window.A1_GRAMMAR = window.A1_GRAMMAR || {};
(function () {
  const sec = (h, hAr, text, ar, extra = {}) => ({ h, hAr, text, ar, ...extra });
  const w = text => (/[؀-ۿ]/.test(text) ? text : "القاعدة: " + text);
  const P = (wrong, right, ar) => ({ wrong, right, ar: w(ar) });
  const C = (q, o, a, why) => ({ type: "choice", q, o, a, why: w(why) });
  const TF = (q, a, why) => ({ type: "truefalse", q, a, why: w(why) });
  const GAP = (q, a, why) => ({ type: "gap", q, a: [].concat(a), why: w(why) });
  const ORD = (prefix, words, a, why) => ({ type: "order", prefix, words, a: [].concat(a), why: w(why) });
  const TRA = (q, a, why) => ({ type: "transform", q, a: [].concat(a), why: w(why) });
  const ERR = (q, a, why) => ({ type: "error", q, a: [].concat(a), why: w(why) });

  /* ---------- Kapitel 10 ---------- */
  window.A1_GRAMMAR[10] = [
    {
      id: "a1-k10-perfekt-satzklammer",
      t: "Perfekt: die Satzklammer mit haben", tAr: "الـ Perfekt: قوس الجملة مع haben",
      summary: "Über Vergangenes spricht man meistens im <b>Perfekt</b>: <b>haben/sein</b> (konjugiert) auf <b>Position 2</b> + <b>Partizip II</b> am <b>Ende</b>. Das ist die <b>Satzklammer</b>: Der Professor <b>hat</b> immer nur <b>geredet</b>.",
      summaryAr: "في الكلام عن الماضي غالبًا بنستخدم الـ Perfekt: haben أو sein متصرّف في الموضع التاني + اسم المفعول (Partizip II) في الآخر. ده «قوس الجملة»: Der Professor hat immer nur geredet.",
      sections: [
        sec("1. Die Satzklammer", "قوس الجملة",
          "Das Hilfsverb (<b>haben</b> oder <b>sein</b>) steht auf Position 2 und ist konjugiert. Das <b>Partizip II</b> steht ganz am Ende. Alles andere steht dazwischen.",
          "الفعل المساعد (haben أو sein) في الموضع التاني ومتصرّف. واسم المفعول في آخر الجملة. وكل حاجة تانية في النص.",
          { table: { head: ["Position 1", "Position 2", "Mittelfeld", "Ende"], rows: [["Daniel", "hat", "sechs Stunden", "gelernt."], ["Er", "hat", "eine Pizza", "geholt."], ["Am Morgen", "habe", "ich die Präsentation", "geplant."], ["Was", "hast", "du heute", "gemacht?"]] } }),
        sec("2. Die meisten Verben: Perfekt mit haben", "معظم الأفعال: Perfekt مع haben",
          "Die meisten Verben bilden das Perfekt mit <b>haben</b>: ich <b>habe</b> gelernt, du <b>hast</b> gearbeitet, er <b>hat</b> gekauft, wir <b>haben</b> gegessen, ihr <b>habt</b> geschrieben, sie <b>haben</b> gesehen.",
          "معظم الأفعال بتعمل الـ Perfekt مع haben: ich habe gelernt وdu hast gearbeitet …",
          { examples: [["Ich habe gestern viel gearbeitet.", "اشتغلت امبارح كتير."], ["Hast du eine Pause gemacht?", "خدت استراحة؟"]] }),
        sec("3. sein und haben: lieber Präteritum", "sein وhaben: الأفضل Präteritum",
          "Für <b>sein</b> und <b>haben</b> benutzt man meistens das <b>Präteritum</b>: <b>Ich war</b> an der Uni. <b>Ich hatte</b> Hunger. (Selten: ich bin gewesen, ich habe gehabt.)",
          "مع sein وhaben غالبًا بنستخدم الـ Präteritum: Ich war وIch hatte. ونادرًا: ich bin gewesen وich habe gehabt.",
          { examples: [["Das Seminar war total langweilig.", "السيمينار كان ممل جدًا."], ["Ich hatte nach dem Lernen Hunger.", "جعت بعد المذاكرة."]] })
      ],
      pitfalls: [
        P("Ich habe gelernt sechs Stunden.", "Ich habe sechs Stunden gelernt.", "اسم المفعول في آخر الجملة."),
        P("Er hat machen eine Pause.", "Er hat eine Pause gemacht.", "بنستخدم Partizip II مش المصدر."),
        P("Gestern ich habe gearbeitet.", "Gestern habe ich gearbeitet.", "الفعل المساعد في الموضع التاني."),
        P("Ich habe in der Uni gewesen.", "Ich war in der Uni.", "مع sein بنستخدم war.")
      ],
      exercises: [
        C("Daniel ___ sechs Stunden gelernt.", ["hat", "ist", "habt"], 0, "lernen مع haben: er hat."),
        C("Was ___ du gestern gemacht?", ["hast", "hat", "bist"], 0, "du hast."),
        C("Gestern ___ ich keine Zeit.", ["hatte", "habe gehabt", "habe"], 0, "مع haben الأفضل Präteritum: hatte."),
        GAP("Wir ___ die Präsentation geplant. (haben)", ["haben"], "wir haben."),
        GAP("Ihr ___ viel geredet. (haben)", ["habt"], "ihr habt."),
        GAP("Das Seminar ___ langweilig. (sein, Vergangenheit)", ["war"], "sein ← war."),
        ORD("", ["Ich", "habe", "eine", "Pizza", "geholt"], ["Ich habe eine Pizza geholt"], "haben في التاني والـ Partizip في الآخر."),
        ORD("Am Abend", ["habe", "Deutsch", "ich", "gelernt"], ["habe ich Deutsch gelernt"], "بعد ظرف الزمان: الفعل المساعد ثم الفاعل."),
        TRA("Schreibe im Perfekt: Ich kaufe Brot.", ["Ich habe Brot gekauft."], "kaufen ← habe … gekauft."),
        ERR("Tina hat für ein Seminar recherchiert gestern.", ["Tina hat gestern für ein Seminar recherchiert."], "اسم المفعول في الآخر."),
        TF("Im Perfekt steht das Partizip II am Satzende.", true, "أيوه، ده قوس الجملة."),
        TF("„Ich habe gehabt“ benutzt man sehr oft.", false, "الأشهر: ich hatte.")
      ]
    },
    {
      id: "a1-k10-partizip",
      t: "Das Partizip II: regelmäßig, unregelmäßig, -ieren", tAr: "اسم المفعول: المنتظم والشاذ وأفعال -ieren",
      summary: "Regelmäßige Verben: <b>ge- + Stamm + -(e)t</b> (machen → gemacht). Unregelmäßige Verben: <b>ge- + Stamm + -en</b>, oft mit neuem Vokal (finden → gefunden). Verben auf <b>-ieren</b>: <b>ohne ge-</b>, Endung -t (studieren → studiert).",
      summaryAr: "الأفعال المنتظمة: ge + الجذر + (e)t: gemacht. الأفعال الشاذة: ge + الجذر + en، وغالبًا الحرف المتحرك بيتغير: gefunden. أفعال -ieren: من غير ge وبنهاية t: studiert.",
      sections: [
        sec("1. Regelmäßige Verben", "الأفعال المنتظمة",
          "<b>ge</b> + Stamm + <b>t</b>: machen → <b>gemacht</b>, planen → <b>geplant</b>, holen → <b>geholt</b>, reden → <b>geredet</b>. Bei Stamm auf <b>-t/-d</b> kommt ein <b>e</b> dazu: arbeiten → <b>gearbeitet</b>, warten → <b>gewartet</b>.",
          "ge + الجذر + t: gemacht وgeplant. ولو الجذر بينتهي بـ t أو d بنزوّد e: gearbeitet وgewartet وgeredet.",
          { table: { head: ["Infinitiv", "Partizip II"], rows: [["machen", "gemacht"], ["lernen", "gelernt"], ["kaufen", "gekauft"], ["arbeiten", "gearbeitet"], ["reden", "geredet"]] } }),
        sec("2. Unregelmäßige Verben", "الأفعال الشاذة",
          "<b>ge</b> + Stamm + <b>en</b>, oft mit Vokalwechsel: finden → <b>gefunden</b>, treffen → <b>getroffen</b>, schreiben → <b>geschrieben</b>, sprechen → <b>gesprochen</b>, sehen → <b>gesehen</b>, essen → <b>gegessen</b>, nehmen → <b>genommen</b>. Einige sind gemischt: denken → <b>gedacht</b>, wissen → <b>gewusst</b>. Lerne Infinitiv und Partizip II zusammen!",
          "ge + الجذر + en ومعظمها بيتغير فيها الحرف المتحرك: gefunden وgetroffen وgeschrieben. وفيه أفعال مختلطة: gedacht وgewusst. احفظ المصدر واسم المفعول مع بعض!",
          { table: { head: ["Infinitiv", "Partizip II"], rows: [["finden", "gefunden"], ["treffen", "getroffen"], ["schreiben", "geschrieben"], ["sprechen", "gesprochen"], ["lesen", "gelesen"], ["nehmen", "genommen"], ["denken", "gedacht"]] } }),
        sec("3. Verben auf -ieren", "أفعال -ieren",
          "Verben auf <b>-ieren</b> haben <b>kein ge-</b>: studieren → <b>studiert</b>, telefonieren → <b>telefoniert</b>, recherchieren → <b>recherchiert</b>, trainieren → <b>trainiert</b>.",
          "أفعال -ieren من غير ge: studiert وtelefoniert وrecherchiert وtrainiert.",
          { examples: [["Tina hat für ein Seminar recherchiert.", "تينا عملت بحث للسيمينار."], ["Ich habe mit Kunden telefoniert.", "كلّمت عملا في التليفون."]] })
      ],
      pitfalls: [
        P("Ich habe das gefindet.", "Ich habe das gefunden.", "finden فعل شاذ: gefunden."),
        P("Sie hat Medizin gestudiert.", "Sie hat Medizin studiert.", "أفعال -ieren من غير ge."),
        P("Er hat lange gearbeit.", "Er hat lange gearbeitet.", "الجذر بينتهي بـ t ← e زيادة: gearbeitet."),
        P("Ich habe an dich gedenkt.", "Ich habe an dich gedacht.", "denken ← gedacht.")
      ],
      exercises: [
        C("Partizip II von „planen“:", ["geplant", "geplanen", "planten"], 0, "منتظم: ge + plan + t."),
        C("Partizip II von „treffen“:", ["getroffen", "getrefft", "getreffen"], 0, "شاذ: getroffen."),
        C("Partizip II von „telefonieren“:", ["telefoniert", "getelefoniert", "telefonieren"], 0, "-ieren من غير ge."),
        C("Partizip II von „warten“:", ["gewartet", "gewartt", "gewarten"], 0, "الجذر بـ t ← gewartet."),
        GAP("Ich habe eine E-Mail ___. (schreiben)", ["geschrieben"], "schreiben ← geschrieben."),
        GAP("Hast du schon ___? (essen)", ["gegessen"], "essen ← gegessen."),
        GAP("Er hat im Fitness-Studio ___. (trainieren)", ["trainiert"], "trainieren ← trainiert."),
        GAP("Wir haben mit der Chefin ___. (sprechen)", ["gesprochen"], "sprechen ← gesprochen."),
        ORD("", ["Ich", "habe", "Geld", "gefunden"], ["Ich habe Geld gefunden"], "Partizip في الآخر."),
        TRA("Perfekt: Ich lese die Anzeige.", ["Ich habe die Anzeige gelesen."], "lesen ← gelesen."),
        ERR("Wir haben über das Projekt gediskutiert.", ["Wir haben über das Projekt diskutiert."], "diskutieren ← diskutiert من غير ge."),
        TF("Alle Verben auf -ieren bilden das Partizip II ohne ge-.", true, "أيوه."),
        TF("Das Partizip II von „denken“ ist „gedenkt“.", false, "الصح: gedacht.")
      ]
    },
    {
      id: "a1-k10-perfekt-sein",
      t: "Perfekt mit sein", tAr: "الـ Perfekt مع sein",
      summary: "Verben der <b>Ortsveränderung</b> (von A nach B) bilden das Perfekt mit <b>sein</b>: fahren → <b>ist gefahren</b>, gehen → <b>ist gegangen</b>, kommen → <b>ist gekommen</b>, fliegen → <b>ist geflogen</b>. Auch <b>bleiben</b> (ist geblieben) und <b>passieren</b> (ist passiert) haben sein.",
      summaryAr: "أفعال تغيير المكان (من A لـ B) بتعمل الـ Perfekt مع sein: ist gefahren وist gegangen وist gekommen وist geflogen. وكمان bleiben (ist geblieben) وpassieren (ist passiert) مع sein.",
      sections: [
        sec("1. Die Formen von sein", "تصريف sein",
          "ich <b>bin</b>, du <b>bist</b>, er/sie/es <b>ist</b>, wir <b>sind</b>, ihr <b>seid</b>, sie/Sie <b>sind</b> + Partizip II.",
          "ich bin وdu bist وer ist وwir sind وihr seid وsie sind + اسم المفعول.",
          { table: { head: ["Person", "fahren", "gehen", "bleiben"], rows: [["ich", "bin gefahren", "bin gegangen", "bin geblieben"], ["du", "bist gefahren", "bist gegangen", "bist geblieben"], ["er/sie/es", "ist gefahren", "ist gegangen", "ist geblieben"], ["wir", "sind gefahren", "sind gegangen", "sind geblieben"], ["ihr", "seid gefahren", "seid gegangen", "seid geblieben"], ["sie/Sie", "sind gefahren", "sind gegangen", "sind geblieben"]] } }),
        sec("2. Welche Verben?", "أنهي أفعال؟",
          "Bewegung von A nach B: <b>fahren, gehen, kommen, fliegen, laufen, aufstehen, ankommen, umziehen</b>. Außerdem: <b>bleiben, passieren, sein, werden</b>.",
          "الحركة من مكان لمكان: fahren وgehen وkommen وfliegen وlaufen وaufstehen وankommen وumziehen. وكمان: bleiben وpassieren وsein وwerden.",
          { examples: [["Claudia ist zwei Stunden zur Arbeit gefahren.", "كلاوديا كانت بتروح الشغل في ساعتين."], ["Lea ist nach Spanien geflogen.", "ليا سافرت إسبانيا بالطيارة."], ["Was ist passiert?", "إيه اللي حصل؟"]] }),
        sec("3. haben oder sein?", "haben ولا sein؟",
          "Mit Akkusativ-Objekt meistens <b>haben</b>: Ich <b>habe</b> das Auto gefahren? – Besser: Ich <b>bin</b> mit dem Auto gefahren. Merke: Bewegung → sein, alles andere → meistens haben.",
          "قاعدة سهلة: حركة ← sein، والباقي غالبًا ← haben.",
          { table: { head: ["mit haben", "mit sein"], rows: [["Ich habe gelernt.", "Ich bin gegangen."], ["Ich habe gegessen.", "Ich bin gefahren."], ["Ich habe geschlafen.", "Ich bin aufgestanden."], ["Ich habe gearbeitet.", "Ich bin geblieben."]] } })
      ],
      pitfalls: [
        P("Ich habe nach Berlin gefahren.", "Ich bin nach Berlin gefahren.", "fahren = حركة ← sein."),
        P("Er hat zu Hause geblieben.", "Er ist zu Hause geblieben.", "bleiben مع sein."),
        P("Was hat passiert?", "Was ist passiert?", "passieren مع sein."),
        P("Wir sind viel gelernt.", "Wir haben viel gelernt.", "lernen مش حركة ← haben.")
      ],
      exercises: [
        C("Felix ___ nach Berlin gekommen.", ["ist", "hat", "sind"], 0, "kommen ← sein."),
        C("Wir ___ den ganzen Tag gearbeitet.", ["haben", "sind", "seid"], 0, "arbeiten ← haben."),
        C("___ du gestern ins Kino gegangen?", ["Bist", "Hast", "Ist"], 0, "gehen ← du bist."),
        C("Lea ___ zwei Jahre in Spanien geblieben.", ["ist", "hat", "war"], 0, "bleiben ← sein."),
        GAP("Ich ___ um sieben aufgestanden. (sein)", ["bin"], "aufstehen ← ich bin."),
        GAP("Ihr ___ nach Wien geflogen. (sein)", ["seid"], "ihr seid."),
        GAP("Freddy ___ jede Woche zur Agentur gegangen. (sein)", ["ist"], "er ist."),
        ORD("", ["Wir", "sind", "mit", "dem", "Zug", "gefahren"], ["Wir sind mit dem Zug gefahren"], "sein + Partizip في الآخر."),
        TRA("Perfekt: Ich fliege nach Kairo.", ["Ich bin nach Kairo geflogen."], "fliegen ← bin … geflogen."),
        TRA("Perfekt: Wir bleiben zu Hause.", ["Wir sind zu Hause geblieben."], "bleiben ← sind … geblieben."),
        ERR("Gestern habe ich ins Fitness-Studio gegangen.", ["Gestern bin ich ins Fitness-Studio gegangen."], "gehen ← sein."),
        TF("„passieren“ bildet das Perfekt mit „sein“.", true, "أيوه: Was ist passiert?"),
        TF("„schlafen“ bildet das Perfekt mit „sein“.", false, "schlafen ← ich habe geschlafen.")
      ]
    }
  ];

  /* ---------- Kapitel 11 ---------- */
  window.A1_GRAMMAR[11] = [
    {
      id: "a1-k11-welcher-dieser",
      t: "Welcher? – dieser", tAr: "Welcher؟ – dieser",
      summary: "Mit <b>welcher, welches, welche</b> fragt man nach einer Auswahl. Mit <b>dieser, dieses, diese</b> zeigt man auf eine bestimmte Sache. Die Endungen sind wie beim bestimmten Artikel: de<b>r</b> → welche<b>r</b>/diese<b>r</b>, da<b>s</b> → welche<b>s</b>/diese<b>s</b>, di<b>e</b> → welche/diese.",
      summaryAr: "بـ welcher وwelches وwelche بنسأل «أنهي؟». وبـ dieser وdieses وdiese بنشاور على حاجة معينة (ده/دي). النهايات زي أداة التعريف: der ← welcher/dieser، das ← welches/dieses، die ← welche/diese.",
      sections: [
        sec("1. Nominativ", "حالة الفاعل",
          "Maskulin: <b>welcher / dieser</b>. Neutral: <b>welches / dieses</b>. Feminin und Plural: <b>welche / diese</b>.",
          "المذكر: welcher/dieser. المحايد: welches/dieses. المؤنث والجمع: welche/diese.",
          { table: { head: ["Artikel", "Frage", "Antwort"], rows: [["der Mantel", "Welcher Mantel?", "Dieser Mantel."], ["das Kleid", "Welches Kleid?", "Dieses Kleid."], ["die Jacke", "Welche Jacke?", "Diese Jacke."], ["die Schuhe (Pl.)", "Welche Schuhe?", "Diese Schuhe."]] } }),
        sec("2. Akkusativ", "حالة المفعول",
          "Nur maskulin ändert sich: <b>welchen / diesen</b>. Neutral, feminin, Plural bleiben gleich.",
          "المذكر بس اللي بيتغير: welchen/diesen. الباقي زي ما هو.",
          { table: { head: ["", "Nominativ", "Akkusativ"], rows: [["maskulin", "welcher / dieser", "welchen / diesen"], ["neutral", "welches / dieses", "welches / dieses"], ["feminin", "welche / diese", "welche / diese"], ["Plural", "welche / diese", "welche / diese"]] },
            examples: [["Wie findest du diesen Hut?", "إيه رأيك في البرنيطة دي؟"], ["Welchen Pullover kaufst du?", "هتشتري أنهي بلوفر؟"]] }),
        sec("3. dieser allein", "dieser لوحدها",
          "<b>dieser</b> kann auch allein stehen: <b>Welche Jacke meinst du? – Diese hier.</b> <b>Welcher Mantel? – Dieser.</b>",
          "dieser ممكن تيجي لوحدها من غير اسم: Welche Jacke? – Diese hier.",
          { examples: [["Welcher Rock gefällt dir? – Dieser!", "أنهي جيبة عاجباكي؟ – دي!"]] })
      ],
      pitfalls: [
        P("Welches Mantel ist schön?", "Welcher Mantel ist schön?", "der Mantel ← welcher."),
        P("Ich kaufe dieser Pullover.", "Ich kaufe diesen Pullover.", "Akkusativ مذكر ← diesen."),
        P("Diese Kleid ist toll.", "Dieses Kleid ist toll.", "das Kleid ← dieses."),
        P("Welchen Schuhe gefallen dir?", "Welche Schuhe gefallen dir?", "الجمع ← welche.")
      ],
      exercises: [
        C("___ Jacke meinst du?", ["Welche", "Welcher", "Welches"], 0, "die Jacke ← welche."),
        C("___ T-Shirt ist neu.", ["Dieses", "Dieser", "Diese"], 0, "das T-Shirt ← dieses."),
        C("Wie findest du ___ Hut?", ["diesen", "dieser", "dieses"], 0, "Akkusativ مذكر ← diesen."),
        C("___ Schuhe kaufst du?", ["Welche", "Welchen", "Welcher"], 0, "الجمع ← welche."),
        GAP("___ Rock ist zu kurz. (dies-, der Rock)", ["Dieser"], "der ← dieser."),
        GAP("Ich nehme ___ Mantel. (dies-, Akkusativ)", ["diesen"], "Akkusativ ← diesen."),
        GAP("___ Kleid gefällt dir? (welch-)", ["Welches"], "das ← welches."),
        ORD("", ["Welchen", "Pullover", "möchtest", "du"], ["Welchen Pullover möchtest du"], "Fragewort + Nomen + Verb + Subjekt."),
        TRA("Frag mit „welch-“: Ich kaufe den Schal.", ["Welchen Schal kaufst du?"], "Akkusativ ← welchen."),
        ERR("Welcher Kleid trägst du heute?", ["Welches Kleid trägst du heute?"], "das Kleid ← welches."),
        TF("Im Akkusativ ändert sich nur die maskuline Form: diesen.", true, "أيوه."),
        TF("„Diese Hemd“ ist richtig.", false, "das Hemd ← dieses Hemd.")
      ]
    },
    {
      id: "a1-k11-partizip-praefix",
      t: "Partizip II: trennbare und nicht trennbare Verben", tAr: "اسم المفعول: الأفعال المنفصلة وغير المنفصلة",
      summary: "Trennbare Verben: <b>ge</b> steht zwischen Präfix und Stamm: ankommen → an<b>ge</b>kommen, umtauschen → um<b>ge</b>tauscht. Nicht trennbare Verben (be-, emp-, ent-, er-, ge-, ver-, zer-) haben <b>kein ge-</b>: bestellen → bestellt, bezahlen → bezahlt, empfehlen → empfohlen.",
      summaryAr: "الأفعال المنفصلة: ge بتقع بين البادئة والجذر: angekommen وumgetauscht. والأفعال غير المنفصلة (be- وemp- وent- وer- وge- وver- وzer-) من غير ge: bestellt وbezahlt وempfohlen.",
      sections: [
        sec("1. Trennbare Verben", "الأفعال المنفصلة",
          "Präfixe wie <b>ab-, an-, auf-, aus-, ein-, mit-, um-, zu-, zurück-</b>. Im Partizip II: Präfix + <b>ge</b> + Stamm: aufstehen → auf<b>ge</b>standen, einkaufen → ein<b>ge</b>kauft, zurückschicken → zurück<b>ge</b>schickt. Das Präfix ist <b>betont</b>.",
          "البادئات زي ab- وan- وauf- وaus- وein- وmit- وum- وzu- وzurück-. في اسم المفعول: البادئة + ge + الجذر: aufgestanden وeingekauft وzurückgeschickt. والنبرة على البادئة.",
          { table: { head: ["Infinitiv", "Partizip II"], rows: [["ankommen", "ist angekommen"], ["umtauschen", "hat umgetauscht"], ["anziehen", "hat angezogen"], ["einkaufen", "hat eingekauft"], ["aussehen", "hat ausgesehen"]] } }),
        sec("2. Nicht trennbare Verben", "الأفعال غير المنفصلة",
          "Präfixe <b>be-, emp-, ent-, er-, ge-, ver-, zer-</b> bleiben am Verb. Das Partizip II hat <b>kein ge-</b>: bezahlen → <b>bezahlt</b>, erzählen → <b>erzählt</b>, entdecken → <b>entdeckt</b>, verstehen → <b>verstanden</b>, empfehlen → <b>empfohlen</b>. Das Präfix ist <b>nicht betont</b>.",
          "البادئات be- وemp- وent- وer- وge- وver- وzer- بتفضل لازقة. واسم المفعول من غير ge: bezahlt وerzählt وentdeckt وverstanden وempfohlen. والنبرة مش على البادئة.",
          { table: { head: ["Infinitiv", "Partizip II"], rows: [["bestellen", "hat bestellt"], ["bezahlen", "hat bezahlt"], ["erzählen", "hat erzählt"], ["entdecken", "hat entdeckt"], ["verkaufen", "hat verkauft"], ["gefallen", "hat gefallen"]] } }),
        sec("3. Tipp: Betonung", "نصيحة: النبرة",
          "Hör auf die Betonung: <b>MIT</b>kommen (trennbar) – be<b>KOM</b>men (nicht trennbar); <b>EIN</b>kaufen – ver<b>KAU</b>fen; <b>AUF</b>stehen – ver<b>STE</b>hen.",
          "اسمع النبرة: لو على البادئة يبقى منفصل، ولو مش عليها يبقى غير منفصل.",
          { examples: [["Ich habe ein T-Shirt gekauft.", "اشتريت تي شيرت."], ["Er hat den Hut verkauft.", "باع البرنيطة."], ["Hast du heute schon eingekauft?", "اشتريت حاجات النهارده؟"]] })
      ],
      pitfalls: [
        P("Ich habe die Jacke geumtauscht.", "Ich habe die Jacke umgetauscht.", "ge بين البادئة والجذر: umgetauscht."),
        P("Er hat 30 Euro gebezahlt.", "Er hat 30 Euro bezahlt.", "be- غير منفصلة ← من غير ge."),
        P("Der Hut ist heute gekommenan.", "Der Hut ist heute angekommen.", "ankommen ← angekommen."),
        P("Jana hat das T-Shirt geempfohlen.", "Jana hat das T-Shirt empfohlen.", "emp- ← من غير ge.")
      ],
      exercises: [
        C("Ich habe die Sachen im Internet ___.", ["bestellt", "gebestellt", "bestellen"], 0, "be- ← من غير ge."),
        C("Der Hut ist heute ___.", ["angekommen", "geankommen", "ankommt"], 0, "منفصل ← angekommen."),
        C("Wo hast du den Hut ___?", ["entdeckt", "geentdeckt", "entdeckten"], 0, "ent- ← entdeckt."),
        C("Ich habe alles ___.", ["zurückgeschickt", "gezurückschickt", "zurückschickt"], 0, "zurück + ge + schickt."),
        GAP("Ich habe die Jacke ___. (anprobieren)", ["anprobiert"], "an + probiert (و -ieren من غير ge)."),
        GAP("Sie hat viel ___. (erzählen)", ["erzählt"], "er- ← erzählt."),
        GAP("Wir haben am Samstag ___. (einkaufen)", ["eingekauft"], "ein + ge + kauft."),
        ORD("", ["Ich", "habe", "die", "Hose", "umgetauscht"], ["Ich habe die Hose umgetauscht"], "Partizip في الآخر."),
        TRA("Perfekt: Er zieht den Mantel an.", ["Er hat den Mantel angezogen."], "anziehen ← angezogen."),
        TRA("Perfekt: Ich verstehe die Frage nicht.", ["Ich habe die Frage nicht verstanden."], "verstehen ← verstanden."),
        ERR("Das Kleid hat mir sehr gegefallen.", ["Das Kleid hat mir sehr gefallen."], "gefallen ← gefallen (من غير ge زيادة)."),
        TF("Bei trennbaren Verben steht „ge“ zwischen Präfix und Stamm.", true, "أيوه: an-ge-kommen."),
        TF("„verkaufen“ hat das Partizip „geverkauft“.", false, "ver- ← verkauft.")
      ]
    },
    {
      id: "a1-k11-dativ-pronomen",
      t: "Personalpronomen im Dativ und Verben mit Dativ", tAr: "الضمائر في الداتيف وأفعال الداتيف",
      summary: "Einige Verben haben ein Objekt im <b>Dativ</b>: <b>gefallen, passen, stehen, helfen, gehören, danken</b>. Die Pronomen im Dativ: <b>mir, dir, ihm, ihr, ihm, uns, euch, ihnen, Ihnen</b>. Beispiel: <b>Die Jacke gefällt mir.</b>",
      summaryAr: "فيه أفعال المفعول بتاعها في الداتيف: gefallen وpassen وstehen وhelfen وgehören وdanken. والضمائر في الداتيف: mir وdir وihm وihr وuns وeuch وihnen وIhnen. مثال: Die Jacke gefällt mir.",
      sections: [
        sec("1. Die Pronomen", "الضمائر",
          "Nominativ → Akkusativ → <b>Dativ</b>: ich → mich → <b>mir</b>, du → dich → <b>dir</b>, er → ihn → <b>ihm</b>, sie → sie → <b>ihr</b>, es → es → <b>ihm</b>, wir → uns → <b>uns</b>, ihr → euch → <b>euch</b>, sie/Sie → sie/Sie → <b>ihnen/Ihnen</b>.",
          "ich ← mir، du ← dir، er ← ihm، sie (هي) ← ihr، es ← ihm، wir ← uns، ihr ← euch، sie/Sie ← ihnen/Ihnen.",
          { table: { head: ["Nominativ", "Akkusativ", "Dativ"], rows: [["ich", "mich", "mir"], ["du", "dich", "dir"], ["er", "ihn", "ihm"], ["sie", "sie", "ihr"], ["es", "es", "ihm"], ["wir", "uns", "uns"], ["ihr", "euch", "euch"], ["sie / Sie", "sie / Sie", "ihnen / Ihnen"]] } }),
        sec("2. Verben mit Dativ", "أفعال الداتيف",
          "<b>gefallen</b> (schön finden), <b>passen</b> (richtige Größe), <b>stehen</b> (gut aussehen an), <b>helfen</b>, <b>gehören</b>, <b>danken</b>. Achtung: Bei gefallen/passen/stehen ist die <b>Sache</b> das Subjekt: <b>Die Schuhe</b> gefallen <b>mir</b>.",
          "gefallen (يعجب) وpassen (مقاسه) وstehen (لايق على) وhelfen (يساعد) وgehören (ملك) وdanken (يشكر). خلي بالك: مع gefallen وpassen وstehen الحاجة هي الفاعل: Die Schuhe gefallen mir.",
          { examples: [["Der Pullover passt mir nicht.", "البلوفر مش مقاسي."], ["Gefällt dir die Jacke? – Nein, sie steht mir nicht.", "الجاكيت عاجبك؟ – لأ، مش لايق عليّا."], ["Kann ich Ihnen helfen?", "أقدر أساعد حضرتك؟"]] }),
        sec("3. Singular oder Plural?", "مفرد ولا جمع؟",
          "Das Verb richtet sich nach der <b>Sache</b>, nicht nach der Person: Die Jacke <b>gefällt</b> mir. Die Schuhe <b>gefallen</b> mir. Die Hose <b>passt</b> ihm. Die Stiefel <b>passen</b> ihm.",
          "الفعل بيتصرّف حسب الحاجة مش الشخص: Die Jacke gefällt mir وDie Schuhe gefallen mir.",
          { examples: [["Die Schuhe stehen ihm nicht.", "الجزمة مش لايقة عليه."]] })
      ],
      pitfalls: [
        P("Die Jacke gefällt mich.", "Die Jacke gefällt mir.", "gefallen + Dativ ← mir."),
        P("Kann ich Sie helfen?", "Kann ich Ihnen helfen?", "helfen + Dativ ← Ihnen."),
        P("Ich gefalle die Schuhe.", "Die Schuhe gefallen mir.", "الحاجة هي الفاعل."),
        P("Die Schuhe passt mir nicht.", "Die Schuhe passen mir nicht.", "الجزمة جمع ← passen.")
      ],
      exercises: [
        C("Die Hose passt ___ nicht. (ich)", ["mir", "mich", "ich"], 0, "passen + Dativ ← mir."),
        C("Gefällt ___ das Kleid? (du)", ["dir", "dich", "du"], 0, "gefallen + Dativ ← dir."),
        C("Das T-Shirt steht ___ gut. (er)", ["ihm", "ihn", "er"], 0, "er ← ihm."),
        C("Die Schuhe ___ mir sehr gut.", ["gefallen", "gefällt", "gefalle"], 0, "Schuhe جمع ← gefallen."),
        GAP("Kann ich ___ helfen? (Sie)", ["Ihnen"], "Sie ← Ihnen."),
        GAP("Der Rock steht ___ super. (sie, eine Frau)", ["ihr"], "sie (مفرد) ← ihr."),
        GAP("Die Jacken passen ___ nicht. (wir)", ["uns"], "wir ← uns."),
        GAP("Wem gehört die Tasche? – Sie gehört ___. (ich)", ["mir"], "gehören + Dativ ← mir."),
        ORD("", ["Der", "Pullover", "gefällt", "ihr", "nicht"], ["Der Pullover gefällt ihr nicht"], "الحاجة فاعل + gefällt + Dativ."),
        TRA("Schreibe mit „gefallen“: Ich finde die Jacke schön.", ["Die Jacke gefällt mir."], "gefallen + mir."),
        ERR("Die Stiefel passt ihnen nicht.", ["Die Stiefel passen ihnen nicht."], "جمع ← passen."),
        TF("„helfen“ steht mit Dativ.", true, "أيوه: Ich helfe dir."),
        TF("Der Dativ von „ihr“ (Plural) ist „ihnen“.", false, "ihr ← euch.")
      ]
    }
  ];

  /* ---------- Kapitel 12 ---------- */
  window.A1_GRAMMAR[12] = [
    {
      id: "a1-k12-man",
      t: "Das Pronomen man", tAr: "الضمير man",
      summary: "<b>man</b> bedeutet „alle Menschen“ oder „jeder“, ohne eine bestimmte Person. Das Verb steht wie bei <b>er/sie/es</b> in der <b>3. Person Singular</b>: <b>In Basel kann man viel machen.</b>",
      summaryAr: "man معناها «الواحد/الناس» من غير شخص معيّن. والفعل بيتصرّف زي er/sie/es: In Basel kann man viel machen.",
      sections: [
        sec("1. Bedeutung und Form", "المعنى والتصريف",
          "<b>man</b> = alle, die Leute. Verb in der 3. Person Singular: man <b>fährt</b>, man <b>kann</b>, man <b>steigt</b> um. <b>man</b> ist nicht <b>der Mann</b>!",
          "man = كل الناس. الفعل زي er: man fährt وman kann. ومتلخبطش man مع der Mann (الراجل).",
          { table: { head: ["Verb", "mit man"], rows: [["können", "Man kann Museen besichtigen."], ["fahren", "Zum Museum fährt man mit dem Bus."], ["umsteigen", "Am Marktplatz steigt man um."], ["sprechen", "In Österreich spricht man Deutsch."]] } }),
        sec("2. Tipps und Wege beschreiben", "النصايح ووصف الطريق",
          "Mit <b>man</b> beschreibt man Wege und gibt allgemeine Tipps: <b>Man steigt an der Haltestelle Bahnhof ein.</b> <b>Was kann man in Basel machen?</b>",
          "بـ man بنوصف الطريق وبندّي نصايح عامة: Man steigt an der Haltestelle Bahnhof ein.",
          { examples: [["Man kann in der Altstadt spazieren gehen.", "ممكن الواحد يتمشّى في البلد القديمة."], ["Wie kommt man zum Zoo?", "الواحد يروح جنينة الحيوانات إزاي؟"]] }),
        sec("3. Position", "الموضع",
          "<b>man</b> ist ein Subjekt. Es steht auf Position 1 oder direkt nach dem Verb: <b>Man kann hier viel machen. – Hier kann man viel machen.</b>",
          "man فاعل. بييجي في الموضع الأول أو بعد الفعل على طول.",
          { examples: [["Im Winter kann man Ski fahren.", "في الشتا ممكن الواحد يتزلّج."]] })
      ],
      pitfalls: [
        P("Man können viel machen.", "Man kann viel machen.", "man + فعل زي er: kann."),
        P("Man fahren mit der Tram.", "Man fährt mit der Tram.", "man fährt."),
        P("Hier man kann gut essen.", "Hier kann man gut essen.", "الفعل في الموضع التاني."),
        P("Der man steigt hier um.", "Man steigt hier um.", "man من غير أداة وبحرف صغير.")
      ],
      exercises: [
        C("In Basel ___ man viel machen.", ["kann", "können", "kannst"], 0, "man ← kann."),
        C("Zum Museum ___ man mit dem Bus.", ["fährt", "fahren", "fahrt"], 0, "man ← fährt."),
        C("Was ___ man hier besichtigen?", ["kann", "können", "könnt"], 0, "man ← kann."),
        GAP("Am Marktplatz ___ man um. (umsteigen)", ["steigt"], "man steigt … um."),
        GAP("In der Schweiz ___ man Deutsch und Französisch. (sprechen)", ["spricht"], "man spricht."),
        ORD("", ["Hier", "kann", "man", "gut", "essen"], ["Hier kann man gut essen"], "ظرف + فعل + man."),
        ORD("", ["Man", "steigt", "am", "Bahnhof", "ein"], ["Man steigt am Bahnhof ein"], "البادئة ein في الآخر."),
        TRA("Schreibe mit „man“: Alle Leute können hier schwimmen.", ["Man kann hier schwimmen.", "Hier kann man schwimmen."], "alle Leute ← man + kann."),
        ERR("Im Sommer man kann am See baden.", ["Im Sommer kann man am See baden."], "الفعل في التاني."),
        TF("Nach „man“ steht das Verb in der 3. Person Singular.", true, "أيوه، زي er."),
        TF("„man“ und „der Mann“ bedeuten das Gleiche.", false, "man = الناس، der Mann = الراجل.")
      ]
    },
    {
      id: "a1-k12-denn",
      t: "Sätze verbinden: denn", tAr: "ربط الجمل: denn",
      summary: "Mit <b>denn</b> nennt man einen <b>Grund</b> (Frage: Warum?). <b>denn</b> steht wie und, oder, aber auf <b>Position 0</b>; danach kommt ein normaler Satz mit dem Verb auf Position 2. Vor <b>denn</b> steht ein Komma.",
      summaryAr: "بـ denn بنقول السبب (ردًا على ليه؟). denn زي und وoder وaber في الموضع صفر؛ بعدها جملة عادية والفعل في التاني. وقبل denn فاصلة.",
      sections: [
        sec("1. Struktur", "التركيب",
          "Satz 1 + <b>, denn</b> + Satz 2 (Subjekt – Verb – Rest).",
          "الجملة الأولى + فاصلة + denn + الجملة التانية (فاعل – فعل – باقي).",
          { table: { head: ["Satz 1", "Position 0", "Satz 2"], rows: [["Die Stadt ist toll,", "denn", "man kann viel machen."], ["Ich mag das Museum,", "denn", "Kunst gefällt mir."], ["Abends sind wir müde,", "denn", "wir haben viel gesehen."]] } }),
        sec("2. Warum? – denn", "ليه؟ – denn",
          "<b>denn</b> antwortet auf <b>Warum?</b>. Der Grund steht im zweiten Satz: <b>Warum essen wir so viel? – Wir essen viel, denn es gibt viele gute Restaurants.</b>",
          "denn بترد على ليه؟ والسبب في الجملة التانية.",
          { examples: [["Ich nehme einen Pullover mit, denn am Morgen ist es kalt.", "هاخد بلوفر، لأن الصبح بيبقى برد."]] }),
        sec("3. Alle Konnektoren auf Position 0", "كل أدوات الربط في الموضع صفر",
          "Merke: <b>und, oder, aber, denn</b> – nach diesen Wörtern ändert sich die Satzstellung nicht.",
          "احفظ: und وoder وaber وdenn – بعدهم ترتيب الجملة مش بيتغير.",
          { examples: [["Ich bleibe zu Hause, denn das Wetter ist schlecht.", "هفضل في البيت، لأن الجو وحش."]] })
      ],
      pitfalls: [
        P("Basel ist toll, denn man viel machen kann.", "Basel ist toll, denn man kann viel machen.", "بعد denn الفعل في التاني."),
        P("Ich gehe ins Museum denn ich mag Kunst.", "Ich gehe ins Museum, denn ich mag Kunst.", "قبل denn فاصلة."),
        P("Wir sind müde, denn haben wir viel gesehen.", "Wir sind müde, denn wir haben viel gesehen.", "بعد denn الفاعل ثم الفعل."),
        P("Denn das Wetter ist schlecht. Ich bleibe zu Hause.", "Ich bleibe zu Hause, denn das Wetter ist schlecht.", "denn بتربط جملتين؛ السبب بعدها.")
      ],
      exercises: [
        C("Die Stadt ist toll, ___ man kann viel machen.", ["denn", "aber", "oder"], 0, "سبب ← denn."),
        C("Ich nehme einen Schirm mit, denn ___.", ["es regnet", "regnet es", "es regnen"], 0, "بعد denn: فاعل + فعل."),
        C("Warum bleibst du zu Hause? – Ich bin krank. → Ich bleibe zu Hause, ___ ich bin krank.", ["denn", "und", "oder"], 0, "السبب ← denn."),
        GAP("Ich mag das Museum, ___ Kunst gefällt mir. (Grund)", ["denn"], "سبب ← denn."),
        GAP("Wir essen viel, denn es ___ viele gute Restaurants. (geben)", ["gibt"], "es gibt."),
        ORD("Wir sind müde, denn", ["viel", "haben", "wir", "gesehen"], ["wir haben viel gesehen"], "بعد denn: فاعل + فعل … Partizip."),
        ORD("Ich lerne Deutsch, denn", ["möchte", "ich", "in", "Berlin", "arbeiten"], ["ich möchte in Berlin arbeiten"], "بعد denn ترتيب عادي."),
        TRA("Verbinde mit „denn“: Ich fahre ans Meer. Ich schwimme gern.", ["Ich fahre ans Meer, denn ich schwimme gern."], "فاصلة + denn + جملة عادية."),
        ERR("Ich trinke Tee, denn ich habe Halsschmerzen habe.", ["Ich trinke Tee, denn ich habe Halsschmerzen."], "الفعل مرة واحدة في الموضع التاني."),
        TF("Nach „denn“ steht das Verb am Satzende.", false, "بعد denn الفعل في الموضع التاني."),
        TF("„denn“ nennt einen Grund.", true, "أيوه.")
      ]
    },
    {
      id: "a1-k12-fragewoerter",
      t: "Fragewörter: wer, wen, wem und mehr", tAr: "أدوات الاستفهام: wer وwen وwem وغيرها",
      summary: "Nach Personen fragt man mit <b>wer</b> (Nominativ), <b>wen</b> (Akkusativ) und <b>wem</b> (Dativ), nach Sachen mit <b>was</b>. Weitere Fragewörter: <b>wo, wohin, woher</b> (Ort), <b>wann, wie lange</b> (Zeit), <b>wie</b> (Art und Weise), <b>warum</b> (Grund).",
      summaryAr: "للسؤال عن الأشخاص: wer (فاعل) وwen (مفعول به) وwem (داتيف)، وعن الحاجات: was. وأدوات تانية: wo وwohin وwoher (مكان)، wann وwie lange (وقت)، wie (طريقة)، warum (سبب).",
      sections: [
        sec("1. Person und Sache", "شخص وحاجة",
          "Die Frage hat den gleichen Kasus wie die Antwort: <b>Wer</b> hat geholfen? – <b>Der Taxifahrer</b>. <b>Wen</b> habt ihr besucht? – <b>Den Onkel</b>. <b>Wem</b> gehören die Sachen? – <b>Mir</b>.",
          "أداة السؤال بتاخد نفس حالة الإجابة: Wer (فاعل) وWen (مفعول به) وWem (داتيف).",
          { table: { head: ["Kasus", "Person", "Sache"], rows: [["Nominativ", "Wer?", "Was?"], ["Akkusativ", "Wen?", "Was?"], ["Dativ", "Wem?", "–"]] } }),
        sec("2. Weitere Fragewörter", "أدوات تانية",
          "<b>Ort:</b> Wo? Wohin? Woher? – <b>Zeit:</b> Wann? Wie lange? Seit wann? – <b>Art und Weise:</b> Wie? – <b>Grund:</b> Warum?",
          "المكان: Wo وWohin وWoher. الوقت: Wann وWie lange وSeit wann. الطريقة: Wie. السبب: Warum.",
          { table: { head: ["Frage", "Antwort"], rows: [["Wann waren sie in Stralsund?", "Im Herbst."], ["Wie lange hat die Tour gedauert?", "Eine Woche."], ["Warum sind sie nicht ausgestiegen?", "Sie haben geschlafen."], ["Wie war das Wetter?", "Sonnig."]] } }),
        sec("3. Wortstellung", "ترتيب الكلمات",
          "W-Frage: Fragewort auf <b>Position 1</b>, Verb auf <b>Position 2</b>. Im Perfekt steht das Partizip am Ende: <b>Wen habt ihr in Kassel getroffen?</b>",
          "سؤال W: أداة السؤال في الأول والفعل في التاني. وفي الـ Perfekt اسم المفعول في الآخر.",
          { examples: [["Wem hast du die Postkarte geschrieben?", "كتبت الكارت لمين؟"]] })
      ],
      pitfalls: [
        P("Wer hast du getroffen?", "Wen hast du getroffen?", "مفعول به ← Wen."),
        P("Wen gehört die Tasche?", "Wem gehört die Tasche?", "gehören + Dativ ← Wem."),
        P("Wann lange hat die Reise gedauert?", "Wie lange hat die Reise gedauert?", "للمدة: Wie lange."),
        P("Warum du bist nicht gekommen?", "Warum bist du nicht gekommen?", "الفعل في الموضع التاني.")
      ],
      exercises: [
        C("___ hat euch geholfen? – Ein Taxifahrer.", ["Wer", "Wen", "Wem"], 0, "فاعل ← Wer."),
        C("___ habt ihr in Kassel besucht? – Bekannte.", ["Wen", "Wer", "Wem"], 0, "مفعول به ← Wen."),
        C("___ gehören die Sachen? – Mir.", ["Wem", "Wen", "Wer"], 0, "gehören + Dativ ← Wem."),
        C("___ hat die Reise gedauert? – Zwei Wochen.", ["Wie lange", "Wann", "Wie"], 0, "مدة ← Wie lange."),
        GAP("___ seid ihr nicht ausgestiegen? – Wir haben geschlafen. (Grund)", ["Warum"], "سبب ← Warum."),
        GAP("___ waren Bernd und seine Freunde an der Ostsee? – Im Herbst. (Zeit)", ["Wann"], "وقت ← Wann."),
        GAP("___ war das Wetter? – Wunderbar. (Art und Weise)", ["Wie"], "طريقة ← Wie."),
        ORD("", ["Wen", "hast", "du", "angerufen"], ["Wen hast du angerufen"], "أداة + فعل مساعد + فاعل + Partizip."),
        TRA("Frag nach dem Dativ: Die Jacke gehört Anna.", ["Wem gehört die Jacke?"], "Anna (Dativ) ← Wem."),
        ERR("Wer habt ihr im Urlaub getroffen?", ["Wen habt ihr im Urlaub getroffen?"], "مفعول به ← Wen."),
        TF("„Wem“ ist das Fragewort für den Dativ.", true, "أيوه."),
        TF("Mit „Wo?“ fragt man nach der Zeit.", false, "Wo = مكان؛ الوقت ← Wann.")
      ]
    },
    {
      id: "a1-k12-zeitangaben",
      t: "Zeitangaben mit Dativ: ab, an, in, nach, seit, vor", tAr: "تحديد الوقت مع الداتيف: ab وan وin وnach وseit وvor",
      summary: "Die temporalen Präpositionen <b>ab, an, in, nach, seit, vor</b> stehen mit <b>Dativ</b>: <b>ab dem Moment, am Montag, im August, nach dem Urlaub, seit einer Woche, vor der Reise</b>.",
      summaryAr: "حروف الجر الزمنية ab وan وin وnach وseit وvor بتيجي مع الداتيف: ab dem Moment وam Montag وim August وnach dem Urlaub وseit einer Woche وvor der Reise.",
      sections: [
        sec("1. Bedeutung", "المعنى",
          "<b>ab</b> = von jetzt/dann an. <b>an</b> = Tage und Tageszeiten (am Montag, am Abend). <b>in</b> = Monate, Jahreszeiten (im August, im Winter). <b>nach</b> = später als. <b>vor</b> = früher als. <b>seit</b> = von der Vergangenheit bis jetzt.",
          "ab = ابتداءً من. an = للأيام وأجزاء اليوم. in = للشهور والفصول. nach = بعد. vor = قبل. seit = من الماضي ولسه مستمر.",
          { table: { head: ["Präposition", "Beispiel"], rows: [["ab", "ab dem Moment, ab nächster Woche"], ["an", "am Montag, am Abend, am 3. Mai"], ["in", "im August, im Winter, in der Nacht"], ["nach", "nach dem Frühstück, nach der Arbeit"], ["seit", "seit einer Woche, seit dem Urlaub"], ["vor", "vor der Reise, vor drei Tagen"]] } }),
        sec("2. Die Dativ-Formen", "أشكال الداتيف",
          "der/das → <b>dem</b> (an dem = <b>am</b>, in dem = <b>im</b>). die → <b>der</b>. Plural → <b>den</b> + n: seit zwei Wochen, vor drei Tagen (Plural ohne Artikel).",
          "der/das ← dem (am وim). die ← der. الجمع ← den + n.",
          { examples: [["Vor dem Frühstück dusche ich.", "قبل الفطار باخد دش."], ["Seit vier Wochen sind wir wieder zu Hause.", "من 4 أسابيع وإحنا رجعنا البيت."]] }),
        sec("3. seit oder vor?", "seit ولا vor؟",
          "<b>vor</b> + Zeit: ein Moment in der Vergangenheit, jetzt vorbei (<b>Vor drei Jahren</b> bin ich nach Spanien geflogen). <b>seit</b> + Zeit: hat in der Vergangenheit begonnen und dauert noch (<b>Seit drei Jahren</b> lerne ich Deutsch).",
          "vor = حصل في الماضي وخلص. seit = بدأ في الماضي ولسه مستمر.",
          { examples: [["Vor einem Jahr war ich in Wien.", "من سنة كنت في فيينا."], ["Seit einem Jahr wohne ich in Wien.", "من سنة وأنا ساكن في فيينا."]] })
      ],
      pitfalls: [
        P("Seit dem Frühstück dusche ich. (vorher)", "Vor dem Frühstück dusche ich.", "قبل ← vor."),
        P("Ich wohne vor zwei Jahren hier.", "Ich wohne seit zwei Jahren hier.", "مستمر لحد دلوقتي ← seit."),
        P("Im Montag habe ich frei.", "Am Montag habe ich frei.", "الأيام ← am."),
        P("Nach den Urlaub bin ich müde.", "Nach dem Urlaub bin ich müde.", "nach + Dativ ← dem.")
      ],
      exercises: [
        C("___ August waren wir in München.", ["Im", "Am", "Seit"], 0, "الشهور ← im."),
        C("___ Montag habe ich einen Termin.", ["Am", "Im", "Ab"], 0, "الأيام ← am."),
        C("Ich lerne ___ einem Jahr Deutsch.", ["seit", "vor", "nach"], 0, "مستمر ← seit."),
        C("___ drei Jahren bin ich nach Spanien geflogen.", ["Vor", "Seit", "Ab"], 0, "حصل وخلص ← vor."),
        GAP("___ dem Frühstück sind wir losgefahren. (später als)", ["Nach"], "بعد ← nach."),
        GAP("___ dem Moment war ich total faul. (von dann an)", ["Ab"], "ابتداءً من ← ab."),
        GAP("Vor ___ Reise kaufe ich einen Koffer. (die)", ["der"], "die ← der (Dativ)."),
        ORD("", ["Nach", "dem", "Kurs", "gehe", "ich", "nach", "Hause"], ["Nach dem Kurs gehe ich nach Hause"], "ظرف الزمان + الفعل + الفاعل."),
        TRA("Schreibe mit „seit“: Ich wohne hier. Ich habe vor zwei Jahren angefangen.", ["Ich wohne seit zwei Jahren hier."], "مستمر ← seit."),
        ERR("Seit zwei Tagen war ich beim Arzt. (Das ist vorbei.)", ["Vor zwei Tagen war ich beim Arzt."], "حصل وخلص ← vor."),
        TF("„seit“ steht mit Dativ.", true, "أيوه، كل حروف الجر الزمنية دي مع Dativ."),
        TF("„im Montag“ ist richtig.", false, "الصح: am Montag.")
      ]
    }
  ];

  const spread = window.A1_GRAMMAR_SPREAD || (() => {});
  spread([10, 11, 12].flatMap(chapter => window.A1_GRAMMAR[chapter]));
})();
