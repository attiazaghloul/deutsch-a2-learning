/* Coverage notes based on the supplied Grammatik-Skript A2 PDF. */
(function () {
  const coverage = {
    "1-0": {
      page: 3,
      points: ["Grund mit Warum?", "Verb am Ende", "trennbare Verben zusammen", "Nebensatz zuerst: Verb vor Subjekt"],
      html: `<h5>Alles aus dem Skript</h5>
        <p><b>weil</b> und <b>da</b> verbinden einen Grund mit einer Aussage. Vor dem Nebensatz steht ein Komma. Beginnt der Satz mit dem Grund, besetzt der ganze Nebensatz Position 1; danach folgt im Hauptsatz sofort das konjugierte Verb.</p>
        <div class="exbox">Ich bleibe zu Hause, <i>weil ich arbeiten muss</i>.<br><i>Weil ich arbeiten muss</i>, bleibe ich zu Hause.<br>Er hört nicht zu → weil er nicht <i>zuhört</i>.</div>
        ${arNote("جملة السبب كلها ممكن تيجي في أول الجملة. بعدها الفعل في الجملة الرئيسية ييجي قبل الفاعل مباشرة، والفعل المنفصل يتجمع في آخر الجملة الثانوية.")}`,
      practice: [
        {type:"fill", prompt:"Da der Bus nicht kommt, ___ wir zu Fuß. (gehen)", answer:["gehen"]},
        {type:"correct", prompt:"Korrigiere: Weil ich bin müde, gehe ich früh ins Bett.", answer:["Weil ich müde bin, gehe ich früh ins Bett"]}
      ]
    },
    "1-1": {
      page: 4,
      points: ["Person im Dativ", "Sache im Akkusativ", "zwei Nomen: Dat. vor Akk.", "Pronomen zuerst", "zwei Pronomen: Akk. vor Dat."],
      html: `<h5>Reihenfolge der Objekte</h5>
        <p>Bei <b>geben, bringen, schenken, zeigen, schicken, schreiben, erklären, erzählen, anbieten, empfehlen</b> ist die Person normalerweise Dativ und die Sache Akkusativ. Ohne Artikel bleibt die Sache ebenfalls Akkusativ.</p>
        <div class="gt-wrap"><table class="gt"><tr><th>Objekte</th><th>Reihenfolge</th><th>Beispiel</th></tr><tr><td>zwei Nomen</td><td>Dativ + Akkusativ</td><td>Sie schenkt <b>dem Kind ein Buch</b>.</td></tr><tr><td>ein Pronomen</td><td>Pronomen zuerst</td><td>Sie schenkt <b>ihm ein Buch</b>.</td></tr><tr><td>zwei Pronomen</td><td>Akkusativ + Dativ</td><td>Sie schenkt <b>es ihm</b>.</td></tr></table></div>
        ${arNote("لو الاتنين أسماء: الشخص قبل الشيء. لو فيه ضمير واحد: الضمير الأول. لو الاتنين ضمائر: الشيء Akkusativ قبل الشخص Dativ.")}`,
      practice: [
        {type:"transform", prompt:"Ersetze beide Objekte: Der Vater erklärt der Tochter die Regel.", answer:["Der Vater erklärt sie ihr"]},
        {type:"correct", prompt:"Korrigiere: Ich empfehle ihn das Hotel.", answer:["Ich empfehle ihm das Hotel"]}
      ]
    },
    "1-2": {
      page: 5,
      points: ["Modalverben im Präteritum", "Umlaut fällt weg", "Endungen", "Infinitiv am Ende"],
      html: `<h5>Formen und Satzklammer</h5>
        <p>Die Modalverben bilden das Präteritum ohne Umlaut: <b>wollte, mochte, konnte, musste, sollte, durfte</b>. Die Endungen sind <b>-te, -test, -te, -ten, -tet, -ten</b>. Ein zweites Verb bleibt als Infinitiv am Satzende.</p>
        <div class="exbox">Ich <i>musste</i> eine Fahrkarte <i>kaufen</i>.<br>Ihr <i>konntet</i> das Problem <i>lösen</i>.</div>
        ${arNote("النقطتين في können/müssen/dürfen بتختفي في الماضي. الفعل الناقص متصرف في المكان الثاني، والمصدر في آخر الجملة.")}`,
      practice: [
        {type:"fill", prompt:"Früher ___ ihr am Samstag arbeiten. (müssen)", answer:["musstet"]},
        {type:"transform", prompt:"Setze ins Präteritum: Sie darf länger bleiben.", answer:["Sie durfte länger bleiben"]}
      ]
    },
    "2-0": {
      page: 6,
      points: ["Wessen?", "des/eines + -(e)s", "feminin und Plural ohne Nomenendung", "Personenname + s"],
      html: `<h5>Endungen im Genitiv</h5>
        <p>Nur maskuline und neutrale Nomen erhalten meist <b>-s</b> oder <b>-es</b>. Mehrsilbige Nomen, besonders auf <b>-en, -el, -er, -or, -ling</b>, nehmen oft nur <b>-s</b>. Bei Personennamen steht <b>-s</b> direkt am Namen und die Gruppe kann vor dem Nomen stehen.</p>
        <div class="exbox">das Zimmer <i>des Hotels</i> · die Farbe <i>des Hauses</i> · <i>Julias</i> Wohnung</div>
        ${arNote("الاسم المذكر أو المحايد غالبًا ياخد s أو es. مع أسماء الأشخاص بنضيف s للاسم ونحطه قبل الشيء المملوك: Julias Wohnung.")}`,
      practice: [
        {type:"fill", prompt:"Das ist der Eingang ___ Museums.", answer:["des"]},
        {type:"transform", prompt:"Formuliere mit einem Namen: das Fahrrad von Paul", answer:["Pauls Fahrrad"]}
      ]
    },
    "2-1": {
      page: 7,
      points: ["maskuline Personen/Tiere", "außer Nominativ Singular: -(e)n", "Herr → Herrn", "Herz als Sonderfall"],
      html: `<h5>Welche Nomen gehören dazu?</h5>
        <p>Zur n-Deklination gehören viele männliche Personen- und Tierbezeichnungen auf <b>-e</b> sowie Fremdwörter auf <b>-ant, -ent, -ist, -oge, -at</b>. In Akkusativ, Dativ und Genitiv Singular steht <b>-(e)n</b>. Besondere Formen: <b>der Herr → den Herrn</b>; <b>das Herz → dem Herzen, des Herzens</b>.</p>
        <div class="exbox">der Student → mit dem <i>Studenten</i><br>der Löwe → den <i>Löwen</i><br>der Kollege → die Aufgabe des <i>Kollegen</i></div>
        ${arNote("المجموعة دي أسماء مذكرة، وبتاخد en في كل الحالات ما عدا Nominativ المفرد. Herr وHerz ليهم أشكال خاصة لازم تتحفظ.")}`,
      practice: [
        {type:"fill", prompt:"Wir sprechen mit dem Journalisten und dem Kolleg___.", answer:["en"]},
        {type:"correct", prompt:"Korrigiere: Ich helfe dem Herr dort.", answer:["Ich helfe dem Herrn dort"]}
      ]
    },
    "2-2": {
      page: "8–9",
      points: ["prädikativ/adverbial ohne Endung", "attributiv mit Endung", "starke, schwache, gemischte Deklination", "Kasus/Genus/Artikel bestimmen"],
      html: `<h5>So wählst du die Endung</h5>
        <p>Nach einem Verb bleibt das Adjektiv ohne Endung: <b>Der Film ist spannend. Er spricht langsam.</b> Vor einem Nomen braucht es eine Endung. Entscheide in dieser Reihenfolge: <b>Kasus → Genus/Plural → Artikeltyp</b>. Der bestimmte Artikel trägt die klare Kasusinformation, deshalb steht danach meist <b>-e/-en</b>. Nach <b>ein/kein/mein</b> muss das Adjektiv fehlende Informationen ergänzen.</p>
        <div class="exbox">der neu<i>e</i> Computer · ein neu<i>er</i> Computer · mit einem neu<i>en</i> Computer · frisch<i>es</i> Brot</div>
        ${arNote("بعد الفعل مفيش نهاية للصفة. قبل الاسم لازم تحدد الحالة والجنس ونوع الأداة؛ بعد der/die/das النهاية غالبًا e أو en، وبعد ein الصفة بتكمل المعلومة الناقصة.")}`,
      practice: [
        {type:"fill", prompt:"Wir wohnen in einer ruhig___ Straße.", answer:["en"]},
        {type:"correct", prompt:"Korrigiere: Das Wetter ist sonniges.", answer:["Das Wetter ist sonnig"]}
      ]
    },
    "3-0": {
      page: 10,
      points: ["Verben des Sagens/Denkens/Fühlens", "unpersönliche Ausdrücke", "Verb am Ende", "trennbare Verben zusammen"],
      html: `<h5>Typische Auslöser</h5>
        <p>dass-Sätze stehen oft nach <b>sagen, erklären, behaupten, erzählen, denken, glauben, meinen, planen, erwarten, annehmen, hören, fühlen, wünschen, hoffen, befürchten</b> und nach Ausdrücken wie <b>Es ist sicher/schade/notwendig, dass …</b>. Im Nebensatz steht die ganze Verbgruppe am Ende.</p>
        <div class="exbox">Sie hofft, dass sie die Prüfung <i>wiederholen kann</i>.<br>Es ist schade, dass Lena keine Zeit <i>hat</i>.</div>
        ${arNote("مش بس بعد sagen وdenken؛ كمان بعد تعبيرات زي es ist sicher أو schade. مجموعة الأفعال كلها بتروح آخر جملة dass.")}`,
      practice: [
        {type:"transform", prompt:"Verbinde: Es ist notwendig. Du bringst das Auto in die Werkstatt.", answer:["Es ist notwendig, dass du das Auto in die Werkstatt bringst"]},
        {type:"fill", prompt:"Mia befürchtet, dass der Zug zu spät ___.", answer:["kommt"]}
      ]
    },
    "3-1": {
      page: "11–12",
      points: ["Adjektive und einige Adverbien", "viel/wenig", "Komparativ + als", "so … wie", "Superlativ am -sten", "unregelmäßige Formen"],
      html: `<h5>Regelmäßige und besondere Formen</h5>
        <p>Der Komparativ endet meist auf <b>-er</b>, der Superlativ auf <b>am -(e)sten</b>. Kurze Adjektive haben oft Umlaut. Wichtig sind <b>gut – besser – am besten</b>, <b>viel – mehr – am meisten</b>, <b>wenig – weniger – am wenigsten</b>, <b>gern – lieber – am liebsten</b> und <b>hoch – höher – am höchsten</b>.</p>
        <div class="exbox">gleich: <i>so groß wie</i> · verschieden: <i>größer als</i><br>Dieser Weg ist <i>am kürzesten</i>.</div>
        ${arNote("للتساوي استخدم so … wie، وللمقارنة استخدم Komparativ + als. احفظ الأشكال الشاذة زي gut–besser–am besten.")}`,
      practice: [
        {type:"fill", prompt:"Ich trinke Tee ___ als Kaffee. (gern)", answer:["lieber"]},
        {type:"correct", prompt:"Korrigiere: Mein Zimmer ist größer wie deins.", answer:["Mein Zimmer ist größer als deins"]}
      ]
    },
    "3-2": {
      page: 13,
      points: ["immer reflexiv oder frei verwendbar", "Akkusativpronomen", "Dativ bei zusätzlichem Akkusativobjekt", "selbst als Betonung"],
      html: `<h5>Akkusativ oder Dativ?</h5>
        <p>Ohne weiteres Akkusativobjekt steht das Reflexivpronomen meist im Akkusativ: <b>Ich wasche mich.</b> Gibt es schon eine Sache im Akkusativ, steht das Reflexivpronomen bei <b>ich/du</b> im Dativ: <b>Ich wasche mir die Hände.</b> <b>selbst</b> kann die Rückbeziehung betonen.</p>
        <div class="gt-wrap"><table class="gt"><tr><th>Person</th><th>Akkusativ</th><th>Dativ</th></tr><tr><td>ich</td><td>mich</td><td>mir</td></tr><tr><td>du</td><td>dich</td><td>dir</td></tr><tr><td>er/sie/es</td><td>sich</td><td>sich</td></tr><tr><td>wir/ihr/sie</td><td>uns/euch/sich</td><td>uns/euch/sich</td></tr></table></div>
        ${arNote("لو مفيش مفعول Akkusativ تاني: mich/dich. لو فيه جزء من الجسم أو شيء كمفعول: mir/dir، زي Ich wasche mir die Hände.")}`,
      practice: [
        {type:"fill", prompt:"Du ziehst ___ die Jacke an.", answer:["dir"]},
        {type:"transform", prompt:"Setze reflexiv: Ich kenne mich selbst gut. (er)", answer:["Er kennt sich selbst gut"]}
      ]
    },
    "4-0": {
      page: "14–15",
      points: ["feste Präposition lernen", "Kasus gehört zur Verbindung", "persönlich/unpersönlich/reflexiv", "zwei Präpositionalobjekte möglich"],
      html: `<h5>Verb + Präposition als Einheit lernen</h5>
        <p>Lerne immer drei Teile zusammen: <b>Verb + Präposition + Kasus</b>, zum Beispiel <b>warten auf + Akk.</b>, <b>teilnehmen an + Dat.</b>, <b>sprechen mit + Dat. über + Akk.</b>. Manche Verben sind dabei reflexiv: <b>sich kümmern um</b>, <b>sich interessieren für</b>, <b>sich verabschieden von</b>.</p>
        <div class="exbox">Ich danke dir <i>für</i> deine Hilfe.<br>Wir sprechen <i>mit</i> der Lehrerin <i>über</i> die Prüfung.</div>
        ${arNote("احفظ الفعل مع حرف الجر والحالة كأنهم كلمة واحدة. بعض الأفعال ممكن تاخد حرفي جر، وبعضها لازم يكون انعكاسي.")}`,
      practice: [
        {type:"fill", prompt:"Ich gratuliere dir ___ deinem Geburtstag.", answer:["zu"]},
        {type:"fill", prompt:"Er verabschiedet sich ___ seinen Kollegen.", answer:["von"]}
      ]
    },
    "4-1": {
      page: "16–17",
      points: ["Person: Präposition + Pronomen", "Sache: da(r)+Präposition", "Frage Person: Präposition + wen/wem", "Frage Sache: wo(r)+Präposition", "r vor Vokal"],
      html: `<h5>Person oder Sache?</h5>
        <p>Bei Personen fragt man <b>auf wen, mit wem, über wen</b> und antwortet mit Präposition + Personalpronomen. Bei Sachen und Vorgängen nutzt man <b>wo(r)-</b> in der Frage und <b>da(r)-</b> in der Antwort. Vor einem Vokal kommt ein <b>r</b>: <b>woran, worüber, darauf, darüber</b>.</p>
        <div class="exbox">Auf <i>wen</i> wartest du? – Auf meinen Freund.<br><i>Worauf</i> wartest du? – <i>Darauf</i>, dass der Kurs beginnt.</div>
        ${arNote("الشخص: حرف الجر + wen/wem أو ضمير. الشيء: wo/da مع حرف الجر، ونضيف r لو حرف الجر بيبدأ بحرف متحرك.")}`,
      practice: [
        {type:"transform", prompt:"Frage nach der Sache: Sie ärgert sich über die Verspätung.", answer:["Worüber ärgert sie sich"]},
        {type:"correct", prompt:"Korrigiere: Darüber wen sprichst du?", answer:["Über wen sprichst du"]}
      ]
    },
    "4-2": {
      page: 18,
      points: ["reale Bedingung", "wenn oder falls", "Verb am Ende", "dann optional", "Ratschlag/Imperativ möglich"],
      html: `<h5>Bedingung und Folge</h5>
        <p><b>wenn</b> und <b>falls</b> nennen eine mögliche Bedingung. <b>falls</b> klingt unsicherer. Im Hauptsatz ist <b>dann</b> möglich, aber nicht nötig. Steht der Nebensatz zuerst, folgt das Verb des Hauptsatzes direkt nach dem Komma.</p>
        <div class="exbox"><i>Falls du den Weg nicht kennst</i>, frag jemanden.<br><i>Wenn du Urlaub brauchst</i>, dann sprich mit dem Chef.</div>
        ${arNote("falls معناها الاحتمال أضعف شوية من wenn. dann اختيارية، وبعد جملة الشرط في الأول ييجي فعل الجملة الرئيسية مباشرة.")}`,
      practice: [
        {type:"transform", prompt:"Bilde einen Rat mit wenn: Du siehst schlecht. Setz dich nach vorn.", answer:["Wenn du schlecht siehst, setz dich nach vorn"]},
        {type:"fill", prompt:"Falls es morgen schneit, ___ wir zu Hause.", answer:["bleiben"]}
      ]
    },
    "5-0": {
      page: 19,
      points: ["würde/hätte/wäre", "Modalverben mit Umlaut", "Irreales", "Rat und höfliche Bitte", "wenn-Satz"],
      html: `<h5>Formen für Wünsche und Irreales</h5>
        <p><b>würde + Infinitiv</b> funktioniert mit fast allen Verben. Bei <b>sein, haben</b> und Modalverben sind die eigenen Formen üblich: <b>wäre, hätte, könnte, müsste, dürfte, sollte</b>. Im irrealen Bedingungssatz stehen beide Teile im Konjunktiv II.</p>
        <div class="exbox">Wenn ich mehr Zeit <i>hätte</i>, <i>würde</i> ich öfter kochen.<br><i>Könnten</i> Sie bitte langsamer sprechen?</div>
        ${arNote("في الشرط غير الحقيقي لازم الجزئين يكونوا Konjunktiv II. مع sein/haben/modal استخدم wäre/hätte/könnte بدل würde غالبًا.")}`,
      practice: [
        {type:"fill", prompt:"Wenn ich Urlaub hätte, ___ ich ans Meer fahren.", answer:["würde"]},
        {type:"transform", prompt:"Formuliere als Rat: Du arbeitest zu viel.", answer:["Du solltest weniger arbeiten"]}
      ]
    },
    "5-1": {
      page: "20–21",
      points: ["neun Wechselpräpositionen", "wo? Dativ", "wohin? Akkusativ", "Zeit oft Dativ", "feste Verbindungen"],
      html: `<h5>Position, Richtung und Zeit</h5>
        <p>Die neun Wechselpräpositionen sind <b>an, auf, in, hinter, vor, über, unter, neben, zwischen</b>. Entscheidend ist nicht nur Bewegung: <b>wo?</b> beschreibt eine Position (Dativ), <b>wohin?</b> ein Ziel oder eine Veränderung (Akkusativ). Zeitangaben stehen oft im Dativ: <b>am Samstag, in einem Monat</b>.</p>
        <div class="exbox">Sie läuft <i>in die Küche</i>. · Sie läuft <i>in der Küche</i> herum.<br>Wir fahren <i>aufs Land</i>. · Wir leben <i>auf dem Land</i>.</div>
        ${arNote("مش كل حركة معناها Akkusativ؛ المهم هل فيه اتجاه لمكان جديد: wohin؟ لو مجرد حركة داخل نفس المكان فالسؤال wo؟ وDativ.")}`,
      practice: [
        {type:"fill", prompt:"Er läuft im Park. – Er läuft ___ Park. (wo?)", answer:["im"]},
        {type:"correct", prompt:"Korrigiere: Stell die Tasche auf dem Tisch!", answer:["Stell die Tasche auf den Tisch"]}
      ]
    },
    "5-2": {
      page: 22,
      points: ["setzen/sitzen", "stellen/stehen", "legen/liegen", "hängen/hängen", "stecken/stecken", "Akkusativ vs. Dativ"],
      html: `<h5>Aktion und Ergebnis</h5>
        <p>Das Aktionsverb beschreibt, dass jemand etwas an einen Ort bringt; das Positionsverb beschreibt das Ergebnis. Wichtig: <b>sich setzen</b> ist eine Aktion, <b>sitzen</b> eine Position. Bei <b>hängen</b> und <b>stecken</b> sieht man den Unterschied am Kasus und am Kontext.</p>
        <div class="gt-wrap"><table class="gt"><tr><th>Aktion + Akk.</th><th>Position + Dat.</th></tr><tr><td>setzen</td><td>sitzen</td></tr><tr><td>stellen</td><td>stehen</td></tr><tr><td>legen</td><td>liegen</td></tr><tr><td>hängen</td><td>hängen</td></tr><tr><td>stecken</td><td>stecken</td></tr></table></div>
        ${arNote("فعل الحركة بيقول حد حط الحاجة فين وبيأخذ Akkusativ، وفعل الوضع بيقول الحاجة موجودة فين وبيأخذ Dativ.")}`,
      practice: [
        {type:"fill", prompt:"Der Brief ___ im Umschlag.", answer:["steckt"]},
        {type:"transform", prompt:"Bilde die Aktion: Das Bild hängt an der Wand.", answer:["Ich hänge das Bild an die Wand"]}
      ]
    },
    "6-0": {
      page: "23–24",
      points: ["schwache Verben", "starke Verben", "gemischte Verben", "eingeschobenes -e-", "typisch in geschriebenen Texten"],
      html: `<h5>Drei Gruppen</h5>
        <p>Schwache Verben bilden das Präteritum mit <b>-te</b>. Nach Stämmen auf <b>-t, -d, -chn, -ffn, -gn</b> steht zur Aussprache ein <b>-e-</b>: <b>arbeitete, öffnete</b>. Starke Verben ändern den Stamm: <b>trinken – trank</b>. Gemischte Verben verbinden Stammwechsel und -te: <b>bringen – brachte, denken – dachte</b>.</p>
        <div class="exbox">ich kauf<i>te</i> · ich arbeit<i>ete</i> · ich <i>fand</i> · ich <i>brachte</i></div>
        ${arNote("فيه منتظم te، قوي بتغيير جذر الفعل، ومختلط بيغير الجذر وياخد te. بعض الجذور محتاجة e قبل النهاية للنطق.")}`,
      practice: [
        {type:"fill", prompt:"Gestern ___ sie die Fenster. (öffnen)", answer:["öffnete"]},
        {type:"fill", prompt:"Er ___ mir ein Geschenk. (bringen)", answer:["brachte"]}
      ]
    },
    "6-1": {
      page: "25–26",
      points: ["Nomen genauer erklären", "Genus vom Bezugswort", "Kasus aus dem Relativsatz", "Nominativ und Akkusativ", "Verb am Ende", "Satz möglichst nah am Nomen"],
      html: `<h5>Genus und Kasus getrennt bestimmen</h5>
        <p>Das Bezugswort bestimmt Genus und Numerus des Relativpronomens. Seine Funktion im Relativsatz bestimmt den Kasus. Frage: Ist das Pronomen dort Subjekt oder Objekt? Der Relativsatz steht möglichst nah bei dem Nomen, das er erklärt.</p>
        <div class="exbox">Das ist der Mann, <i>der</i> mir hilft. (Subjekt)<br>Das ist der Mann, <i>den</i> ich anrufe. (Objekt)<br>Das sind die Leute, <i>die</i> wir getroffen haben.</div>
        ${arNote("جنس الضمير من الاسم قبله، لكن الحالة من وظيفته جوه جملة الوصل. لو هو الفاعل Nominativ، ولو المفعول Akkusativ.")}`,
      practice: [
        {type:"fill", prompt:"Wo ist die Tasche, ___ du gekauft hast?", answer:["die"]},
        {type:"transform", prompt:"Verbinde: Der Gast ist angekommen. Lisa holt ihn ab.", answer:["Der Gast, den Lisa abholt, ist angekommen","Der Gast ist angekommen, den Lisa abholt"]}
      ]
    },
    "6-2": {
      page: 27,
      points: ["Vorzeitigkeit in der Vergangenheit", "hatte/war + Partizip II", "Hilfsverb wie im Perfekt", "frühere Handlung zuerst verständlich machen"],
      html: `<h5>Welche Handlung war früher?</h5>
        <p>Die frühere Handlung steht im Plusquamperfekt, die spätere meist im Präteritum oder Perfekt. Das Hilfsverb entspricht dem Perfekt: <b>hatte</b> bei Verben mit haben, <b>war</b> bei Verben mit sein.</p>
        <div class="exbox">Nachdem Eva Kuchen <i>gegessen hatte</i>, bestellte sie Kaffee.<br>Lena <i>war gewandert</i>, dann machte sie eine Pause.</div>
        ${arNote("الحدث الأقدم ياخد hatte/war + Partizip II. اختار haben أو sein بنفس قاعدة الـPerfekt.")}`,
      practice: [
        {type:"fill", prompt:"Nachdem er angekommen war, ___ er uns an. (rufen, Präteritum)", answer:["rief"]},
        {type:"transform", prompt:"Zeige die Reihenfolge: Julia schloss die Fenster. Dann verließ sie das Haus.", answer:["Julia hatte die Fenster geschlossen, dann verließ sie das Haus"]}
      ]
    },
    "7-0": {
      page: 28,
      points: ["Intention/Absicht/Zweck", "Frage wozu?", "damit + eigener Nebensatz", "Verb am Ende", "Modalverb aus Ausgangssatz entfällt oft"],
      html: `<h5>Ziel statt Grund</h5>
        <p><b>damit</b> antwortet auf <b>Wozu?</b> und nennt ein Ziel. Aus einem Satz mit <b>wollen/sollen</b> wird im damit-Satz meist eine normale Aussage; das Modalverb wird nicht wiederholt.</p>
        <div class="exbox">Sie ruft den Ober. Er soll die Karte bringen.<br>Sie ruft den Ober, <i>damit er die Karte bringt</i>.</div>
        ${arNote("damit بتقول الهدف مش السبب. غالبًا wollen أو sollen الموجودة في الجملة الأصلية بتختفي، ونصرف الفعل الأساسي في آخر الجملة.")}`,
      practice: [
        {type:"transform", prompt:"Verbinde: Die Polizei kontrolliert. Die Fahrer sollen langsamer fahren.", answer:["Die Polizei kontrolliert, damit die Fahrer langsamer fahren"]},
        {type:"fill", prompt:"Ich wiederhole die Regel, damit alle sie ___.", answer:["verstehen"]}
      ]
    },
    "7-1": {
      page: 29,
      points: ["Artikel mit Nomen, Pronomen allein", "einer/eine/eins", "keiner/keine/keins", "welche im Plural", "Endungen nach Kasus"],
      html: `<h5>Das Nomen nicht wiederholen</h5>
        <p>Ein Artikel begleitet ein Nomen; ein Pronomen ersetzt es. Im Singular stehen Formen wie <b>einer, eine, eins</b> und <b>keiner, keine, keins</b>. Im Plural nutzt man oft <b>welche/keine</b>. Die Endung zeigt Genus und Kasus.</p>
        <div class="exbox">Hast du einen Stift? – Ja, hier ist <i>einer</i>.<br>Brauchst du Tomaten? – Ja, ich brauche <i>welche</i>.<br>Gibt es Milch? – Nein, es gibt <i>keine</i>.</div>
        ${arNote("الأداة معها اسم، لكن الضمير يحل محل الاسم. النهاية لازم توضح الجنس والحالة، وفي الجمع بنستخدم غالبًا welche أو keine.")}`,
      practice: [
        {type:"fill", prompt:"Hast du ein Wörterbuch? – Ja, ich habe ___.", answer:["eins"]},
        {type:"fill", prompt:"Sind noch Eier da? – Nein, wir haben ___ mehr.", answer:["keine"]}
      ]
    },
    "7-2": {
      page: 30,
      points: ["W-Frage als Nebensatz", "Ja/Nein-Frage mit ob", "Verb am Ende", "trennbare Verben zusammen", "höfliche Einleitung"],
      html: `<h5>Zwei Arten indirekter Fragen</h5>
        <p>Hat die direkte Frage ein Fragewort, bleibt es erhalten. Bei einer Ja/Nein-Frage steht <b>ob</b>. Die Wortstellung wird zur Nebensatzstellung. Häufige Einleitungen sind <b>Ich weiß nicht …</b>, <b>Weißt du …?</b> und <b>Können Sie mir sagen …?</b>.</p>
        <div class="exbox">Wann fährt der Zug ab? → Ich weiß nicht, wann der Zug <i>abfährt</i>.<br>Kommt er? → Weißt du, <i>ob er kommt</i>?</div>
        ${arNote("السؤال بأداة يحتفظ بالأداة، وسؤال نعم/لا يتحول بـob. الفعل في الآخر والفعل المنفصل يتجمع.")}`,
      practice: [
        {type:"transform", prompt:"Mache höflich indirekt: Wo ist der Bahnhof?", answer:["Können Sie mir sagen, wo der Bahnhof ist"]},
        {type:"fill", prompt:"Ich weiß nicht, ___ die Firma heute geöffnet hat.", answer:["ob"]}
      ]
    },
    "8-0": {
      page: 31,
      points: ["Artikel oder Pronomen", "gleiche Deklination", "Nominativ/Akkusativ/Dativ", "deiktische Bedeutung"],
      html: `<h5>Vollständige Formen</h5>
        <p><b>dieser</b> kann vor einem Nomen oder allein stehen. Die Endungen sind in beiden Verwendungen gleich.</p>
        <div class="gt-wrap"><table class="gt"><tr><th></th><th>mask.</th><th>fem.</th><th>neutr.</th><th>Plural</th></tr><tr><td>Nom.</td><td>dieser</td><td>diese</td><td>dieses</td><td>diese</td></tr><tr><td>Akk.</td><td>diesen</td><td>diese</td><td>dieses</td><td>diese</td></tr><tr><td>Dat.</td><td>diesem</td><td>dieser</td><td>diesem</td><td>diesen (+n)</td></tr></table></div>
        ${arNote("نفس النهايات سواء بعدها اسم أو واقفة لوحدها. في Dativ الجمع: diesen وغالبًا الاسم نفسه ياخد n.")}`,
      practice: [
        {type:"fill", prompt:"Mit ___ Schuhen kann ich gut laufen. (Plural)", answer:["diesen"]},
        {type:"fill", prompt:"Welches Kleid? – Ich nehme ___.", answer:["dieses"]}
      ]
    },
    "8-1": {
      page: 32,
      points: ["werden + Infinitiv", "Zukunft oft Präsens + Zeit", "Plan/Vorsatz/Versprechen", "Vermutung mit wahrscheinlich/vielleicht"],
      html: `<h5>Mehr als Zukunft</h5>
        <p>Für sichere Termine nutzt man im Deutschen oft Präsens plus Zeitangabe. Futur I betont besonders einen <b>Plan, Vorsatz oder ein Versprechen</b>. Mit <b>wahrscheinlich, vielleicht, sicher, bestimmt</b> kann es auch eine Vermutung ausdrücken.</p>
        <div class="exbox">Ich rufe dich morgen an. (normaler Plan)<br>Ich <i>werde</i> dir bestimmt <i>helfen</i>. (Versprechen)<br>Sie <i>wird</i> jetzt wahrscheinlich zu Hause <i>sein</i>. (Vermutung)</div>
        ${arNote("المستقبل العادي غالبًا Präsens مع وقت. Futur I مهم للوعد أو النية أو التخمين، والمصدر يفضل في آخر الجملة.")}`,
      practice: [
        {type:"transform", prompt:"Formuliere als Versprechen: Ich helfe dir.", answer:["Ich werde dir helfen"]},
        {type:"fill", prompt:"Er ___ wahrscheinlich noch im Büro sein.", answer:["wird"]}
      ]
    },
    "8-2": {
      page: 33,
      points: ["ganze Aussage mit nicht", "Prädikatsteile nach nicht", "Präpositionalobjekte meist nach nicht", "Angaben und Fokus", "Satzende bei einfacher Aussage"],
      html: `<h5>Wo steht nicht?</h5>
        <p><b>nicht</b> steht vor dem Teil, den man besonders verneint, aber vor der rechten Satzklammer: Präfix, Infinitiv oder Partizip II stehen danach. Auch Präpositionalobjekte und viele modale Angaben folgen meist auf <b>nicht</b>. Bei einer einfachen Gesamtaussage steht es oft am Ende.</p>
        <div class="exbox">Ich rufe Paul <i>nicht an</i>.<br>Ich kann dir <i>nicht helfen</i>.<br>Martin wartet <i>nicht auf uns</i>.<br>Ich kaufe diese Wohnung <i>nicht</i>.</div>
        ${arNote("nicht قبل الجزء اللي بتنفيه، لكن قبل آخر جزء من الفعل: anrufen، Infinitiv أو Partizip. لو بتنفي الجملة البسيطة كلها غالبًا تيجي في الآخر.")}`,
      practice: [
        {type:"transform", prompt:"Verneine das Prädikat: Wir spielen heute Fußball.", answer:["Wir spielen heute nicht Fußball"]},
        {type:"correct", prompt:"Korrigiere: Ich habe nicht Max eingeladen.", answer:["Ich habe Max nicht eingeladen"]}
      ]
    }
  };

  function arNote(text) {
    return `<div class="ar">${text}</div>`;
  }

  window.GRAM.forEach(lesson => lesson.topics.forEach((topic, index) => {
    const item = coverage[`${lesson.num}-${index}`];
    if (!item) return;
    topic.sourcePage = item.page;
    topic.coveragePoints = item.points;
    topic.body += `<section class="script-complete">${item.html}</section>`;
    topic.practice = [...(topic.practice || []), ...item.practice];
  }));
})();
