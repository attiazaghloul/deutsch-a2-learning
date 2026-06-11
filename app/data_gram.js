/* Grammatik-Skript A2 (Deutsch – Aber Hallo!) – Lektion 1–8 */
window.GRAM = [

/* ============================== LEKTION 1 */
{num:1, titleAr:"الجمل السببية · أفعال بمفعولين · ماضي الأفعال الناقصة",
topics:[
{short:"weil / da", title:"Nebensätze – kausal (weil, da)", titleAr:"الجمل الثانوية السببية (weil = لأن)",
body:`<p>Mit <b>weil</b> oder <b>da</b> nennt man einen <b>Grund</b> (Frage: Warum?). Der kausale Nebensatz ist ein Nebensatz: Das konjugierte Verb steht <b>am Ende</b>.</p>
<div class="ar">بنستخدم weil أو da (لأن) عشان نقول السبب — إجابة على سؤال Warum (ليه؟). ودي جملة ثانوية: الفعل المصرّف بيروح في <b>آخر الجملة</b>.</div>
<div class="exbox">Monika spielt gut Tennis, <i>weil</i> sie viel <i>trainiert</i>.<br>Paul versteht uns nicht, <i>weil</i> er nie richtig <i>zuhört</i>.</div>
<div class="notebox">Trennbare Verben stehen im Nebensatz <b>zusammen</b> am Ende: zuhören → …, weil er nie richtig <b>zuhört</b>.<span class="ar">الفعل المنفصل بيرجع يتلم تاني كلمة واحدة في الآخر.</span></div>
<h5>Der Nebensatz kann auch zuerst stehen</h5>
<p>Dann beginnt der Hauptsatz direkt mit dem Verb:</p>
<div class="ar">لو بدأنا بجملة weil، الجملة الرئيسية بعدها تبدأ بالفعل على طول:</div>
<div class="exbox"><i>Weil</i> Max Hunger <i>hat</i>, <i>möchte</i> er jetzt ins Restaurant gehen.<br><i>Weil</i> Max sich unwohl <i>fühlt</i>, <i>geht</i> er zum Arzt.</div>
<div class="gt-wrap"><table class="gt">
<tr><th>Hauptsatz</th><th>Nebensatz (weil …)</th></tr>
<tr><td>Max kommt nicht,</td><td>weil er keine Zeit <b>hat</b>.</td></tr>
<tr><td>Anja geht zum Reisebüro,</td><td>weil sie einen Flug buchen <b>möchte</b>.</td></tr>
<tr><td>Christian kann nicht mitkommen,</td><td>weil er sich erkältet <b>hat</b>.</td></tr>
</table></div>`,
quiz:[
 {q:"Max kommt nicht, weil er keine Zeit ___.", o:["hat","haben","hat er"], a:0, fb:"Verb am Ende: … weil er keine Zeit hat.", fbAr:"الفعل في آخر جملة weil."},
 {q:"Lisa zieht um, weil sie eine neue Arbeit ___.", o:["anfängt","fängt an","an fängt"], a:0, fb:"Trennbares Verb steht im Nebensatz zusammen: anfängt.", fbAr:"الفعل المنفصل بيتكتب كلمة واحدة في الجملة الثانوية."},
 {q:"___ Max Hunger hat, geht er ins Restaurant.", o:["Weil","Dass","Ob"], a:0, fb:"Grund → weil. Danach: Verb, Subjekt im Hauptsatz.", fbAr:"السبب بـ weil، وبعدها الجملة الرئيسية تبدأ بالفعل."},
]},
{short:"Dativ + Akkusativ", title:"Verben mit Dativ- und Akkusativobjekt", titleAr:"أفعال بمفعولين: شخص (Dativ) وشيء (Akkusativ)",
body:`<p>Verben wie <b>geben, schenken, schreiben, zeigen, erklären, schicken, erzählen, anbieten, empfehlen, mitbringen</b> haben zwei Objekte: die <b>Person im Dativ</b> und die <b>Sache im Akkusativ</b>.</p>
<div class="ar">أفعال زي: يدّي، يهدي، يكتب، يوري، يشرح، يبعت، يحكي، يعرض، ينصح، يجيب معاه — بتاخد مفعولين: الشخص في Dativ والشيء في Akkusativ.</div>
<div class="exbox">Der Ober bringt <i>den Gästen</i> (Dat.) <i>die Getränke</i> (Akk.).<br>Du gibst <i>der Kollegin</i> <i>einen Stift</i>.</div>
<h5>Wortstellung mit Pronomen</h5>
<div class="gt-wrap"><table class="gt">
<tr><th>Situation</th><th>Regel</th><th>Beispiel</th></tr>
<tr><td>zwei Nomen</td><td>Dativ vor Akkusativ</td><td>Ich gebe <b>der Studentin das Buch</b>.</td></tr>
<tr><td>ein Pronomen</td><td>Pronomen zuerst</td><td>Ich gebe <b>ihr</b> das Buch. / Ich gebe <b>es</b> der Studentin.</td></tr>
<tr><td>zwei Pronomen</td><td>Akkusativ vor Dativ</td><td>Ich gebe <b>es ihr</b>.</td></tr>
</table></div>
<div class="exbox">Bringt der Ober dem Gast das Bier? – Ja, er bringt <i>es ihm</i>.<br>Empfiehlst du Max das Restaurant? – Ja, ich empfehle <i>es ihm</i>.</div>
<div class="ar">القاعدة: اسمين → الشخص الأول. ضمير واحد → الضمير الأول. ضميرين → الشيء (Akkusativ) قبل الشخص (Dativ): es ihm = «هو ليه».</div>`,
quiz:[
 {q:"Ich schreibe ___ eine SMS.", o:["meinem Freund","meinen Freund","meines Freundes"], a:0, fb:"Die Person steht im Dativ: meinem Freund.", fbAr:"الشخص في Dativ."},
 {q:"Zeigst du Lena das Museum? – Ja, ich zeige ___.", o:["es ihr","ihr es","sie ihm"], a:0, fb:"Zwei Pronomen: Akkusativ (es) vor Dativ (ihr).", fbAr:"ضميرين: الشيء قبل الشخص → es ihr."},
 {q:"Der Kellner empfiehlt ___ das Steak.", o:["mir","mich","ich"], a:0, fb:"empfehlen + Dativ (Person): mir.", fbAr:"الشخص بياخد Dativ → mir."},
]},
{short:"Modalverben Präteritum", title:"Präteritum (Imperfekt) – Modalverben", titleAr:"الماضي البسيط للأفعال الناقصة (كان عايز/كان لازم...)",
body:`<p>Über die Vergangenheit spricht man bei Modalverben mit dem <b>Präteritum</b>. Wichtig: Die Umlaute (ö, ü) fallen weg!</p>
<div class="ar">مع الأفعال الناقصة بنتكلم عن الماضي بالـ Präteritum. مهم جدًا: النقطتين (ö/ü) بيختفوا في الماضي!</div>
<div class="gt-wrap"><table class="gt">
<tr><th>Präsens</th><th>Präteritum</th><th>Bedeutung</th></tr>
<tr><td>ich will / möchte</td><td>ich <b>wollte</b></td><td>كنت عايز</td></tr>
<tr><td>ich kann</td><td>ich <b>konnte</b></td><td>كنت أقدر</td></tr>
<tr><td>ich muss</td><td>ich <b>musste</b></td><td>كان لازم</td></tr>
<tr><td>ich darf</td><td>ich <b>durfte</b></td><td>كان مسموح لي</td></tr>
<tr><td>ich soll</td><td>ich <b>sollte</b></td><td>كان مفروض</td></tr>
<tr><td>ich mag</td><td>ich <b>mochte</b></td><td>كنت بحب</td></tr>
</table></div>
<h5>Konjugation (Beispiel: wollen)</h5>
<div class="gt-wrap"><table class="gt">
<tr><td>ich wollte</td><td>wir wollten</td></tr>
<tr><td>du wolltest</td><td>ihr wolltet</td></tr>
<tr><td>er/sie/es wollte</td><td>sie/Sie wollten</td></tr>
</table></div>
<div class="exbox">Er <i>wollte</i> nach Frankfurt fahren. / Ich <i>konnte</i> nicht kommen.<br>Du <i>musstest</i> am Samstag arbeiten. / Wir <i>mussten</i> die Rechnung bezahlen.</div>
<div class="notebox">ich/er haben <b>keine Endung -t</b>… sondern: ich wollte, er wollte (gleiche Form!).<span class="ar">المتكلم والغايب ليهم نفس الصيغة بالظبط: ich wollte = er wollte.</span></div>`,
quiz:[
 {q:"Gestern ___ ich nicht kommen. (können)", o:["konnte","könnte","kann"], a:0, fb:"Präteritum ohne Umlaut: konnte. (könnte = Konjunktiv!)", fbAr:"الماضي من غير نقطتين: konnte."},
 {q:"Wir ___ die Rechnung bezahlen. (müssen, Präteritum)", o:["mussten","müssten","musstet"], a:0, fb:"wir mussten – ohne Umlaut.", fbAr:"wir → mussten."},
 {q:"Als Kind ___ er keine Schokolade essen. (dürfen)", o:["durfte","dürfte","darf"], a:0, fb:"dürfen → durfte (Umlaut fällt weg).", fbAr:"dürfen في الماضي → durfte."},
]},
]},

/* ============================== LEKTION 2 */
{num:2, titleAr:"المضاف إليه · تصريف n · تصريف الصفة",
topics:[
{short:"Genitiv", title:"Genitiv", titleAr:"حالة المضاف إليه (الإضافة: بتاع مين؟)",
body:`<p>Der Genitiv zeigt: <b>Wem gehört etwas?</b> (Frage: <b>Wessen?</b>)</p>
<div class="ar">الـ Genitiv بيبين الملكية أو الإضافة — «بتاع مين؟» — والسؤال بتاعه: ?Wessen</div>
<div class="gt-wrap"><table class="gt">
<tr><th></th><th>bestimmt</th><th>unbestimmt</th><th>Beispiel</th></tr>
<tr><td>maskulin</td><td><b>des</b> -[e]s</td><td><b>eines</b> -[e]s</td><td>der Koffer <b>des Gastes</b></td></tr>
<tr><td>neutral</td><td><b>des</b> -[e]s</td><td><b>eines</b> -[e]s</td><td>das Fahrrad <b>des Mädchens</b></td></tr>
<tr><td>feminin</td><td><b>der</b></td><td><b>einer</b></td><td>die Taschen <b>der Studentin</b></td></tr>
<tr><td>Plural</td><td><b>der</b></td><td>–</td><td>das Gepäck <b>der Touristen</b></td></tr>
</table></div>
<div class="notebox">Nur maskuline und neutrale Nomen bekommen <b>-s/-es</b>: <b>-s</b> bei mehrsilbigen Nomen (des Wagens, des Onkels), <b>-es</b> bei einsilbigen und nach -s, -ß, -sch, -z (des Buches, des Flusses, des Platzes).<span class="ar">المذكر والمحايد بس بياخدوا s أو es: الكلمات الطويلة بتاخد s، والقصيرة أو اللي آخرها حروف صفير بتاخد es.</span></div>
<h5>Namen von Personen</h5>
<div class="exbox">Julia hat eine Wohnung. → Das ist <i>Julias</i> Wohnung.<br>Paul hat ein Fahrrad. → Das ist <i>Pauls</i> Fahrrad.</div>
<div class="ar">أسماء الأشخاص: بنزود s على الاسم ونحطه قبل الشيء (زي الإنجليزي بس من غير فاصلة عليا).</div>
<div class="exbox">Wessen Haus ist das? – Das ist das Haus <i>meiner Tante</i>.<br>Die Jacke <i>des Mannes</i> ist schwarz. / Kennst du den Titel <i>des Buches</i>?</div>`,
quiz:[
 {q:"Das ist der Koffer ___ . (der Gast)", o:["des Gastes","dem Gast","den Gastes"], a:0, fb:"Genitiv maskulin: des Gastes.", fbAr:"مذكر في الإضافة → des + es."},
 {q:"Das Auto ___ ist neu. (meine Kollegin)", o:["meiner Kollegin","meine Kollegin","meines Kollegin"], a:0, fb:"Feminin: meiner Kollegin (ohne -s!).", fbAr:"المؤنث في الإضافة → meiner من غير s."},
 {q:"___ Schuhe sind das? – Das sind Julias Schuhe.", o:["Wessen","Wem","Wer"], a:0, fb:"Genitiv-Fragewort: Wessen?", fbAr:"سؤال الملكية: ?Wessen"},
]},
{short:"n-Deklination", title:"n-Deklination", titleAr:"تصريف الـ n (أسماء مذكرة بتاخد n/en)",
body:`<p>Einige <b>maskuline</b> Nomen bekommen in allen Fällen (außer Nominativ Singular) die Endung <b>-(e)n</b>.</p>
<div class="ar">في أسماء مذكرة معينة بتاخد النهاية en- في كل الحالات ما عدا الرفع المفرد. غالبًا أشخاص أو حيوانات.</div>
<div class="gt-wrap"><table class="gt">
<tr><th></th><th>Singular</th><th>Plural</th></tr>
<tr><td>Nom.</td><td>der Patient</td><td>die Patient<b>en</b></td></tr>
<tr><td>Akk.</td><td>den Patient<b>en</b></td><td>die Patient<b>en</b></td></tr>
<tr><td>Dat.</td><td>dem Patient<b>en</b></td><td>den Patient<b>en</b></td></tr>
<tr><td>Gen.</td><td>des Patient<b>en</b></td><td>der Patient<b>en</b></td></tr>
</table></div>
<h5>Welche Nomen? (Endungen)</h5>
<div class="gt-wrap"><table class="gt">
<tr><th>Endung</th><th>Beispiele</th></tr>
<tr><td>-e</td><td>der Junge, der Kunde, der Experte, der Kollege, der Löwe, der Pole</td></tr>
<tr><td>-ist</td><td>der Journalist, der Tourist, der Polizist</td></tr>
<tr><td>-ent</td><td>der Student, der Patient, der Präsident</td></tr>
<tr><td>-ant</td><td>der Praktikant, der Elefant, der Diamant</td></tr>
<tr><td>-at/-et/-it/-ot</td><td>der Automat, der Athlet, der Satellit, der Pilot</td></tr>
<tr><td>weitere</td><td>der Mensch, der Herr, der Nachbar, der Bauer, der Prinz, der Bär</td></tr>
</table></div>
<div class="exbox">Wie heißt der Junge? – Ich kenne <i>den Jungen</i> nicht.<br>Fragst du <i>den Experten</i>? / Hilfst du <i>dem Studenten</i>?</div>
<div class="notebox">Herr: Singular -n (dem Herrn), Plural -en (die Herren).<span class="ar">كلمة Herr بتاخد n في المفرد و en في الجمع.</span></div>`,
quiz:[
 {q:"Der Arzt untersucht ___ . (der Patient)", o:["den Patienten","den Patient","dem Patienten"], a:0, fb:"Akkusativ + n-Deklination: den Patienten.", fbAr:"النصب مع تصريف n → den Patienten."},
 {q:"Ich spreche mit ___ . (der Kollege)", o:["dem Kollegen","dem Kollege","den Kollege"], a:0, fb:"Dativ: dem Kollegen.", fbAr:"الجر → dem Kollegen."},
 {q:"Welches Nomen hat KEINE n-Deklination?", o:["der Lehrer","der Student","der Junge"], a:0, fb:"der Lehrer ist normal: den Lehrer (ohne -n).", fbAr:"كلمة Lehrer عادية مش من مجموعة الـ n."},
]},
{short:"Adjektivdeklination", title:"Deklination des Adjektivs", titleAr:"تصريف الصفة (نهايات الصفة قبل الاسم)",
body:`<p>Adjektive <b>nach dem Verb</b> (prädikativ/adverbial) haben <b>keine Endung</b>: Die Erdbeeren sind <i>süß</i>. Adjektive <b>vor dem Nomen</b> (attributiv) haben eine <b>Endung</b>.</p>
<div class="ar">الصفة بعد الفعل (الفراولة حلوة) من غير نهاية. الصفة قبل الاسم (فراولة حلوة) لازم تاخد نهاية. النهاية بتعتمد على الأداة اللي قبلها.</div>
<h5>Tabelle 1: starke Endungen (wie der bestimmte Artikel)</h5>
<div class="gt-wrap"><table class="gt">
<tr><th></th><th>mask.</th><th>fem.</th><th>neut.</th><th>Pl.</th></tr>
<tr><td>Nom.</td><td>-er</td><td>-e</td><td>-es</td><td>-e</td></tr>
<tr><td>Akk.</td><td>-en</td><td>-e</td><td>-es</td><td>-e</td></tr>
<tr><td>Dat.</td><td>-em</td><td>-er</td><td>-em</td><td>-en</td></tr>
</table></div>
<h5>Tabelle 2: schwache Endungen</h5>
<div class="gt-wrap"><table class="gt">
<tr><th></th><th>mask.</th><th>fem.</th><th>neut.</th><th>Pl.</th></tr>
<tr><td>Nom.</td><td>-e</td><td>-e</td><td>-e</td><td>-en</td></tr>
<tr><td>Akk.</td><td>-en</td><td>-e</td><td>-e</td><td>-en</td></tr>
<tr><td>Dat.</td><td>-en</td><td>-en</td><td>-en</td><td>-en</td></tr>
</table></div>
<h5>Die goldene Regel</h5>
<p>Die starke Endung (Tab. 1) muss <b>einmal</b> da sein – beim Artikel <b>oder</b> beim Adjektiv:</p>
<div class="ar">القاعدة الذهبية: النهاية «القوية» لازم تظهر مرة واحدة — يا في الأداة يا في الصفة. لو الأداة أخدتها، الصفة تاخد الضعيفة (e/en). لو مفيش أداة أو الأداة من غير نهاية (ein)، الصفة تاخد القوية.</div>
<div class="gt-wrap"><table class="gt">
<tr><th>Fall</th><th>Beispiel</th><th>Warum?</th></tr>
<tr><td>Artikel mit Endung</td><td>d<b>er</b> neu<b>e</b> Computer / mit ein<b>em</b> neu<b>en</b> Hut</td><td>Artikel hat Tab. 1 → Adjektiv Tab. 2</td></tr>
<tr><td>Artikel ohne Endung</td><td>ein groß<b>er</b> Fehler / ein neu<b>es</b> Auto</td><td>ein hat keine Endung → Adjektiv Tab. 1</td></tr>
<tr><td>kein Artikel</td><td>frisch<b>er</b> Orangensaft / mit frisch<b>em</b> Obst</td><td>Adjektiv bekommt Tab. 1</td></tr>
</table></div>
<div class="exbox">Kaufst du <i>das blaue</i> Fahrrad? / Schau, das ist <i>mein neues</i> Auto!<br>Gefällt dir <i>der grüne</i> Pullover? – Ja, ich möchte <i>den grünen</i> Pullover kaufen.</div>
<div class="notebox">Besonderheiten: dunkel → dunk<b>le</b>s Bier · teuer → teu<b>re</b> Schuhe · hoch → <b>hohe</b> Kosten.<span class="ar">حالات خاصة: الصفات اللي آخرها el/er بتفقد الـ e، و hoch بتتحول لـ hoh.</span></div>`,
quiz:[
 {q:"Das ist ein ___ Computer. (neu)", o:["neuer","neue","neuen"], a:0, fb:"„ein“ ohne Endung → Adjektiv stark: neuer (mask. Nom.).", fbAr:"ein من غير نهاية → الصفة تاخد er."},
 {q:"Ich kaufe den ___ Pullover. (grün)", o:["grünen","grüner","grünes"], a:0, fb:"den hat die starke Endung → Adjektiv schwach: grünen.", fbAr:"الأداة أخدت النهاية القوية → الصفة en."},
 {q:"Trinkst du gern ___ Tee? (schwarz, ohne Artikel)", o:["schwarzen","schwarzer","schwarzes"], a:0, fb:"Kein Artikel, Akkusativ mask. → Tab. 1: schwarzen.", fbAr:"من غير أداة في النصب المذكر → en."},
]},
]},

/* ============================== LEKTION 3 */
{num:3, titleAr:"جمل dass · المقارنة والتفضيل · الأفعال الانعكاسية",
topics:[
{short:"dass-Sätze", title:"Nebensätze – dass-Sätze", titleAr:"الجمل الثانوية بـ dass (إنّ)",
body:`<p>Nach Verben wie <b>sagen, glauben, denken, hoffen, wissen, versprechen</b> und nach Ausdrücken wie <b>es ist wichtig / es freut mich / es stimmt</b> benutzt man oft einen <b>dass-Satz</b>. Das Verb steht am Ende.</p>
<div class="ar">بعد أفعال زي: يقول، يعتقد، يفتكر، يتمنى، يعرف، يوعد — وبعد تعبيرات زي: من المهم / يفرحني / صحيح — بنستخدم جملة dass (إنّ). والفعل في الآخر.</div>
<div class="exbox">Paul hat versprochen, <i>dass</i> er mich <i>mitnimmt</i>.<br>Es ist sicher, <i>dass</i> Pavel bald <i>abreisen muss</i>.<br>Stimmt es, <i>dass</i> Karl sich erkältet <i>hat</i>?</div>
<h5>Wichtige Einleitungen</h5>
<div class="gt-wrap"><table class="gt">
<tr><th>Verben</th><th>Ausdrücke mit es</th></tr>
<tr><td>sagen, erklären, behaupten, erzählen</td><td>es freut mich / es ärgert mich</td></tr>
<tr><td>denken, glauben, meinen, hoffen</td><td>es ist wichtig / notwendig / möglich</td></tr>
<tr><td>erwarten, planen, wünschen, befürchten</td><td>es stimmt / es kann sein / es ist schade</td></tr>
</table></div>
<div class="exbox">Es ist schade, <i>dass</i> Lena keine Zeit <i>hat</i>.<br>Es freut mich, <i>dass</i> ihr mir gratuliert <i>habt</i>.</div>
<div class="notebox">Modalverb + Infinitiv im dass-Satz: Das Modalverb steht ganz am Ende: …, dass Paul die Prüfung <b>schaffen muss</b>.<span class="ar">لو في فعل ناقص: المصدر وبعده الفعل الناقص في آخر الجملة.</span></div>`,
quiz:[
 {q:"Ich glaube, ___ er morgen kommt.", o:["dass","weil","ob"], a:0, fb:"glauben + dass-Satz.", fbAr:"بعد glauben بنستخدم dass."},
 {q:"Es ist wichtig, dass du die Prüfung ___.", o:["schaffst","schaffen","schaffst du"], a:0, fb:"Verb am Ende, konjugiert: schaffst.", fbAr:"الفعل مصرف وفي الآخر."},
 {q:"Es ist möglich, dass Carmen nach Köln ___ ___.", o:["gefahren ist","ist gefahren","fährt gefahren"], a:0, fb:"Perfekt im Nebensatz: Partizip + Hilfsverb am Ende.", fbAr:"في الجملة الثانوية: التصريف الثالث ثم الفعل المساعد."},
]},
{short:"Komparativ / Superlativ", title:"Vergleichsformen – Steigerung", titleAr:"المقارنة (أكثر من) والتفضيل (الأكثر)",
body:`<p>Es gibt zwei Steigerungsformen: <b>Komparativ</b> (-er) und <b>Superlativ</b> (am -sten).</p>
<div class="ar">في درجتين: المقارنة Komparativ (بنزود er) والتفضيل Superlativ (...am + sten).</div>
<div class="gt-wrap"><table class="gt">
<tr><th>Positiv</th><th>Komparativ</th><th>Superlativ</th></tr>
<tr><td>schön</td><td>schön<b>er</b></td><td>am schön<b>sten</b></td></tr>
<tr><td>alt</td><td><b>ä</b>lter</td><td>am <b>ä</b>ltesten</td></tr>
<tr><td>groß</td><td>gr<b>ö</b>ßer</td><td>am gr<b>ö</b>ßten</td></tr>
<tr><td>gut</td><td><b>besser</b></td><td>am <b>besten</b></td></tr>
<tr><td>viel</td><td><b>mehr</b></td><td>am <b>meisten</b></td></tr>
<tr><td>gern</td><td><b>lieber</b></td><td>am <b>liebsten</b></td></tr>
<tr><td>hoch</td><td><b>höher</b></td><td>am <b>höchsten</b></td></tr>
<tr><td>nah</td><td>näher</td><td>am <b>nächsten</b></td></tr>
</table></div>
<div class="notebox">Immer Umlaut: alt, arm, hart, kalt, krank, lang, scharf, stark, warm, groß, hoch, jung, klug, kurz, dumm.<span class="ar">الكلمات دي بتاخد Umlaut (نقطتين) دايمًا في المقارنة والتفضيل.</span></div>
<h5>Vergleiche: so … wie / als</h5>
<div class="gt-wrap"><table class="gt">
<tr><th>gleich (=)</th><td>Yasmin ist <b>so</b> groß <b>wie</b> Lena.</td></tr>
<tr><th>verschieden (≠)</th><td>Yasmin ist größer <b>als</b> Lisa.</td></tr>
</table></div>
<div class="ar">التساوي: so...wie (زي بالظبط). الاختلاف: الصفة بالمقارنة + als (أكبر من).</div>
<div class="exbox">Mein Zimmer ist klein<i>er als</i> dein Zimmer.<br>Dieses Hotel ist <i>am billigsten</i>. / In diesem Laden ist das Gemüse <i>am frischesten</i>.</div>
<div class="notebox">Nach s, ß, z, t → <b>-esten</b>: am süßesten, am härtesten, am kürzesten. Aber: am größten!<span class="ar">لو آخر الصفة s/ß/z/t بنزود esten — ما عدا groß بتبقى am größten.</span></div>`,
quiz:[
 {q:"Die Rakete ist viel ___ als das Flugzeug.", o:["schneller","schnellerer","am schnellsten"], a:0, fb:"Komparativ + als: schneller als.", fbAr:"المقارنة: schneller + als."},
 {q:"Yasmin ist so groß ___ Lena.", o:["wie","als","wie als"], a:0, fb:"Gleichheit: so … wie.", fbAr:"التساوي بـ so...wie."},
 {q:"Welcher Film ist ___? (gut, Superlativ)", o:["am besten","am gutesten","besser"], a:0, fb:"gut → besser → am besten (unregelmäßig).", fbAr:"gut شاذة: am besten."},
 {q:"Im Sommer sind die Tage ___ . (lang)", o:["am längsten","am langsten","länger als"], a:0, fb:"lang → am längsten (mit Umlaut).", fbAr:"lang بتاخد Umlaut في التفضيل."},
]},
{short:"Reflexive Verben", title:"Reflexive Verben", titleAr:"الأفعال الانعكاسية (sich...)",
body:`<p>Bei reflexiven Verben zeigt das Pronomen <b>zurück auf das Subjekt</b>: Ich wasche <b>mich</b>. Manche Verben sind <b>immer</b> reflexiv (sich beeilen, sich freuen), andere kann man reflexiv oder nicht reflexiv benutzen (waschen, anziehen).</p>
<div class="ar">في الأفعال الانعكاسية، الضمير بيرجع على الفاعل نفسه: «بغسل نفسي». في أفعال دايمًا انعكاسية (يستعجل، يفرح)، وأفعال ممكن تيجي بالحالتين (يغسل، يلبس).</div>
<div class="gt-wrap"><table class="gt">
<tr><th>Person</th><th>Reflexiv Akk.</th><th>Reflexiv Dat. (+ Akk.-Objekt)</th></tr>
<tr><td>ich</td><td>Ich setze <b>mich</b>.</td><td>Ich kaufe <b>mir</b> ein E-Bike.</td></tr>
<tr><td>du</td><td>Du setzt <b>dich</b>.</td><td>Du kaufst <b>dir</b> eine Hose.</td></tr>
<tr><td>er/sie/es</td><td>Er setzt <b>sich</b>.</td><td>Sie kauft <b>sich</b> einen Mantel.</td></tr>
<tr><td>wir</td><td>Wir setzen <b>uns</b>.</td><td>Wir kaufen <b>uns</b> Pommes.</td></tr>
<tr><td>ihr</td><td>Ihr setzt <b>euch</b>.</td><td>Ihr kauft <b>euch</b> eine Wohnung.</td></tr>
<tr><td>sie/Sie</td><td>Sie setzen <b>sich</b>.</td><td>Sie kaufen <b>sich</b> ein Boot.</td></tr>
</table></div>
<div class="notebox">Akkusativ oder Dativ? Gibt es <b>noch ein Akkusativ-Objekt</b>, steht das Reflexivpronomen im <b>Dativ</b>: Ich wasche <b>mich</b>. ABER: Ich wasche <b>mir die Hände</b>.<span class="ar">لو في مفعول تاني في الجملة، الضمير الانعكاسي بيتحول لـ Dativ: بغسل نفسي (mich) لكن بغسل إيديّ (mir die Hände).</span></div>
<div class="exbox">Klaus <i>freut sich</i>, denn er hat Urlaub. / Beeilt Lena <i>sich</i>?<br>Du bestellst <i>dir</i> einen Tee. / Ich putze <i>mir</i> die Zähne.</div>
<h5>Wortstellung in der Frage</h5>
<div class="exbox">Erinnert <i>sich</i> Max? / Erinnert Max <i>sich</i>? (beides möglich)<br>Erinnerst du <i>dich</i>? (Pronomen-Subjekt: nur so!)</div>`,
quiz:[
 {q:"Ich freue ___ auf das Wochenende.", o:["mich","mir","sich"], a:0, fb:"sich freuen + Akkusativ-Reflexivpronomen: mich.", fbAr:"الضمير الانعكاسي مع ich هو mich."},
 {q:"Ich putze ___ die Zähne.", o:["mir","mich","sich"], a:0, fb:"Es gibt ein Akkusativ-Objekt (die Zähne) → Reflexivpronomen im Dativ: mir.", fbAr:"في مفعول تاني → الضمير يبقى mir."},
 {q:"Beeilt ihr ___? Wir müssen los!", o:["euch","uns","sich"], a:0, fb:"ihr → euch.", fbAr:"مع ihr الضمير euch."},
]},
]},

/* ============================== LEKTION 4 */
{num:4, titleAr:"أفعال بحروف جر · الضمائر الظرفية · جمل الشرط wenn",
topics:[
{short:"Verben + Präposition", title:"Verben mit Präpositionalobjekt", titleAr:"الأفعال اللي بتاخد مفعول بحرف جر",
body:`<p>Viele Verben haben ein Objekt mit einer <b>festen Präposition</b>. Die Präposition bestimmt den Kasus: (A) = Akkusativ, (D) = Dativ.</p>
<div class="ar">أفعال كتير بتاخد مفعولها بحرف جر ثابت. حرف الجر هو اللي بيحدد الحالة: A = نصب، D = جر. لازم تحفظ الفعل + حرف الجر + الحالة كوحدة واحدة.</div>
<h5>Die wichtigsten Verben</h5>
<div class="gt-wrap"><table class="gt">
<tr><th>Verb + Präp.</th><th>Kasus</th><th>Verb + Präp. (reflexiv)</th><th>Kasus</th></tr>
<tr><td>warten auf</td><td>A</td><td>sich ärgern über</td><td>A</td></tr>
<tr><td>denken an</td><td>A</td><td>sich erinnern an</td><td>A</td></tr>
<tr><td>lachen über</td><td>A</td><td>sich interessieren für</td><td>A</td></tr>
<tr><td>sorgen für</td><td>A</td><td>sich kümmern um</td><td>A</td></tr>
<tr><td>protestieren gegen</td><td>A</td><td>sich freuen auf/über</td><td>A</td></tr>
<tr><td>teilnehmen an</td><td>D</td><td>sich fürchten vor</td><td>D</td></tr>
<tr><td>anfangen mit</td><td>D</td><td>sich treffen mit</td><td>D</td></tr>
<tr><td>rechnen mit</td><td>D</td><td>sich verabschieden von</td><td>D</td></tr>
<tr><td>gehören zu</td><td>D</td><td>sich beschäftigen mit</td><td>D</td></tr>
<tr><td>schmecken nach</td><td>D</td><td>sich verlassen auf</td><td>A</td></tr>
</table></div>
<h5>Verben mit zwei Präpositionalobjekten</h5>
<div class="exbox">sich bedanken <i>bei</i> (D) <i>für</i> (A): Ich bedanke mich <i>bei dir für</i> deine Hilfe.<br>sich beschweren <i>bei</i> (D) <i>über</i> (A): Er beschwert sich <i>beim Vermieter über</i> den Lärm.<br>sich erkundigen <i>bei</i> (D) <i>nach</i> (D): Sie erkundigt sich <i>bei der Lehrerin nach</i> dem Termin.</div>
<div class="notebox">Achtung Bedeutung: sich freuen <b>auf</b> (Zukunft!) / sich freuen <b>über</b> (jetzt). sich entscheiden <b>für</b> oder <b>gegen</b>.<span class="ar">انتبه: auf للحاجة الجاية و über للحاجة اللي حصلت. و für (مع) عكسها gegen (ضد).</span></div>
<div class="exbox">Die Leute warten <i>auf den</i> Bus. / Nimmst du <i>an der</i> Reise teil?<br>Die Eltern sorgen <i>für die</i> Kinder. / Schmeckt der Kuchen <i>nach</i> Schokolade?</div>`,
quiz:[
 {q:"Wir warten ___ den Bus.", o:["auf","an","für"], a:0, fb:"warten auf + Akkusativ.", fbAr:"warten بياخد auf."},
 {q:"Interessierst du dich ___ Politik?", o:["für","über","an"], a:0, fb:"sich interessieren für + Akk.", fbAr:"الاهتمام بـ für."},
 {q:"Nimmst du ___ der Reise teil?", o:["an","auf","mit"], a:0, fb:"teilnehmen an + Dativ.", fbAr:"المشاركة بـ an + Dativ."},
 {q:"Ich bedanke mich ___ dir ___ deine Hilfe.", o:["bei / für","mit / für","bei / über"], a:0, fb:"sich bedanken bei (D) für (A).", fbAr:"الشكر: bei الشخص و für السبب."},
]},
{short:"darüber / worauf", title:"Pronominaladverbien", titleAr:"الضمائر الظرفية (darauf, darüber, worauf...)",
body:`<p>Bei Verben mit Präposition: Ist das Objekt eine <b>Person</b> → Präposition + Pronomen. Ist es eine <b>Sache</b> → <b>da(r)</b> + Präposition.</p>
<div class="ar">مع الأفعال اللي بتاخد حرف جر: لو المفعول شخص → حرف الجر + ضمير شخصي. لو المفعول شيء → da + حرف الجر (داروبر، داميت...).</div>
<div class="gt-wrap"><table class="gt">
<tr><th></th><th>Frage</th><th>Antwort</th></tr>
<tr><td><b>Person</b></td><td>Ärgerst du dich über deinen Freund?</td><td>Ja, ich ärgere mich <b>über ihn</b>.</td></tr>
<tr><td><b>Sache</b></td><td>Ärgerst du dich über die Verspätung?</td><td>Ja, ich ärgere mich <b>darüber</b>.</td></tr>
</table></div>
<h5>Bildung mit r</h5>
<div class="exbox">an / auf / über / um → da<i>r</i>an, da<i>r</i>auf, da<i>r</i>über, da<i>r</i>um<br>für / mit / nach / von / zu → dafür, damit, danach, davon, dazu</div>
<div class="ar">لو حرف الجر بيبدأ بحرف متحرك بنحط r بينهم: daran/darauf/darüber. غير كده على طول: damit/dafür/danach.</div>
<h5>Fragewörter</h5>
<div class="gt-wrap"><table class="gt">
<tr><th></th><th>Frage</th><th>Beispiel</th></tr>
<tr><td><b>Person</b></td><td>Präposition + wen/wem</td><td><b>Über wen</b> ärgerst du dich? / <b>Auf wen</b> habt ihr gewartet?</td></tr>
<tr><td><b>Sache</b></td><td>wo(r) + Präposition</td><td><b>Worüber</b> ärgerst du dich? / <b>Worauf</b> hast du gewartet?</td></tr>
</table></div>
<div class="exbox">Hast du auf den Bus gewartet? – Nein, ich habe nicht <i>darauf</i> gewartet.<br>Hast du auf Jan gewartet? – Nein, ich habe nicht <i>auf ihn</i> gewartet.<br>Ich habe mich <i>darüber</i> gefreut, <i>dass</i> Eva mich angerufen hat.</div>`,
quiz:[
 {q:"Hast du mit dieser Chance gerechnet? – Ja, ich habe ___ gerechnet.", o:["damit","mit ihr","darauf"], a:0, fb:"Sache → da + mit = damit.", fbAr:"شيء → damit."},
 {q:"Wartest du auf deine Schwester? – Ja, ich warte ___.", o:["auf sie","darauf","auf ihr"], a:0, fb:"Person → Präposition + Pronomen: auf sie.", fbAr:"شخص → auf sie."},
 {q:"___ interessiert sich Max? – Für Fußball.", o:["Wofür","Für wen","Worauf"], a:0, fb:"Sache → wo + für = wofür.", fbAr:"سؤال عن شيء → wofür."},
]},
{short:"wenn / falls", title:"Nebensätze – konditional (wenn, falls)", titleAr:"جمل الشرط (لو / إذا)",
body:`<p>Mit <b>wenn</b> oder <b>falls</b> nennt man eine <b>Bedingung</b>. Im Nebensatz steht das Verb am Ende. Der Hauptsatz kann mit <b>dann</b> beginnen.</p>
<div class="ar">بنستخدم wenn أو falls (لو / إذا) للشرط. الفعل في آخر جملة الشرط، والجملة الرئيسية ممكن تبدأ بـ dann (يبقى/إذن).</div>
<div class="exbox"><i>Wenn</i> du Zeit <i>hast</i>, (dann) können wir uns treffen.<br><i>Wenn</i> es morgen <i>regnet</i>, (dann) gehen wir nicht in den Zoo.<br><i>Falls</i> Paul <i>anruft</i>, informiere ich dich.</div>
<h5>Mit „sonst / andernfalls“ umformen</h5>
<div class="exbox">Du musst mir helfen. <i>Sonst</i> schaffe ich die Arbeit nicht.<br>→ <i>Wenn</i> du mir <i>nicht hilfst</i>, schaffe ich die Arbeit nicht.</div>
<div class="ar">جمل sonst (وإلا) ممكن نحولها لجملة شرط منفية: «لازم تساعدني وإلا مش هخلص» = «لو ما ساعدتنيش مش هخلص».</div>
<div class="gt-wrap"><table class="gt">
<tr><th>Situation</th><th>Konditionalsatz</th></tr>
<tr><td>Siehst du schlecht? Setz dich nach vorne!</td><td>Du musst dich nach vorne setzen, <b>wenn</b> du schlecht <b>siehst</b>.</td></tr>
<tr><td>Vielleicht schaffe ich die Prüfung. → Party!</td><td><b>Wenn</b> ich die Prüfung <b>schaffe</b>, mache ich eine Party.</td></tr>
<tr><td>Wir müssen uns beeilen. Sonst kommen wir zu spät.</td><td><b>Wenn</b> wir uns <b>nicht beeilen</b>, kommen wir zu spät.</td></tr>
</table></div>`,
quiz:[
 {q:"___ es regnet, bleiben wir zu Hause.", o:["Wenn","Weil","Damit"], a:0, fb:"Bedingung → wenn.", fbAr:"الشرط بـ wenn."},
 {q:"Wenn Paul ___, informiere ich dich.", o:["anruft","ruft an","rufen an"], a:0, fb:"Nebensatz: trennbares Verb zusammen am Ende.", fbAr:"الفعل المنفصل كلمة واحدة في الآخر."},
 {q:"„Beeil dich, sonst kommst du zu spät“ = Wenn du dich ___ beeilst, kommst du zu spät.", o:["nicht","auch","sonst"], a:0, fb:"sonst-Satz → wenn + Negation.", fbAr:"جملة sonst بتتحول لشرط منفي."},
]},
]},

/* ============================== LEKTION 5 */
{num:5, titleAr:"التمني والافتراض · حروف الجر المزدوجة · أفعال متشابهة",
topics:[
{short:"Konjunktiv II", title:"Konjunktiv II (würde / hätte / wäre / Modalverben)", titleAr:"صيغة التمني والأدب: würde / hätte / wäre",
body:`<p>Mit dem Konjunktiv II drückt man <b>Irreales, Wünsche und höfliche Bitten</b> aus.</p>
<div class="ar">الـ Konjunktiv II بنعبّر بيه عن: حاجة غير حقيقية (افتراض)، أمنية، أو طلب مؤدب.</div>
<div class="gt-wrap"><table class="gt">
<tr><th>Person</th><th>würde</th><th>hätte</th><th>wäre</th></tr>
<tr><td>ich</td><td>würde</td><td>hätte</td><td>wäre</td></tr>
<tr><td>du</td><td>würdest</td><td>hättest</td><td>wärest</td></tr>
<tr><td>er/sie/es</td><td>würde</td><td>hätte</td><td>wäre</td></tr>
<tr><td>wir</td><td>würden</td><td>hätten</td><td>wären</td></tr>
<tr><td>ihr</td><td>würdet</td><td>hättet</td><td>wäret</td></tr>
<tr><td>sie/Sie</td><td>würden</td><td>hätten</td><td>wären</td></tr>
</table></div>
<h5>Modalverben im Konjunktiv II</h5>
<div class="exbox">ich muss → ich <i>müsste</i> · ich kann → ich <i>könnte</i> · ich darf → ich <i>dürfte</i><br>ich soll → ich <i>sollte</i> · ich mag → ich <i>möchte</i> · ich will → ich <i>wollte</i></div>
<div class="ar">الأفعال الناقصة: زي الماضي بس بالنقطتين (Umlaut): müsste / könnte / dürfte. (لاحظ: sollte و wollte من غير نقطتين.)</div>
<h5>Irreale Bedingung</h5>
<div class="exbox"><i>Wenn</i> ich Urlaub bekommen <i>würde</i>, <i>könnte</i> ich dich besuchen.<br>Es <i>wäre</i> besser, wenn sie nicht so schnell fahren <i>würde</i>.</div>
<h5>Höfliche Bitte</h5>
<div class="exbox">Rufen Sie mich an? → <i>Würden</i> Sie mich bitte anrufen?<br>Helfen Sie mir? → <i>Könnten</i> Sie mir bitte helfen?<br><i>Könntest</i> du Paul von mir grüßen?</div>
<div class="ar">الطلب المؤدب: بدل صيغة الأمر المباشرة بنستخدم Würden Sie / Könnten Sie = «ممكن لو سمحت...؟»</div>`,
quiz:[
 {q:"___ Sie mir bitte helfen? (höflich)", o:["Könnten","Können","Konnten"], a:0, fb:"Höfliche Bitte: Könnten Sie …?", fbAr:"الطلب المؤدب بـ Könnten."},
 {q:"Wenn ich Zeit hätte, ___ ich dich besuchen.", o:["würde","werde","wurde"], a:0, fb:"Irreale Bedingung: würde + Infinitiv.", fbAr:"الافتراض بـ würde."},
 {q:"ich muss → Konjunktiv II:", o:["müsste","musste","möchte"], a:0, fb:"musste = Präteritum, müsste = Konjunktiv II (mit Umlaut).", fbAr:"الافتراض بالنقطتين: müsste."},
]},
{short:"Wechselpräpositionen", title:"Präpositionen mit Dativ und Akkusativ", titleAr:"حروف الجر المزدوجة (wo? فين / wohin? على فين)",
body:`<p>Neun Präpositionen stehen mit Dativ <b>oder</b> Akkusativ: <b>an, auf, in, hinter, vor, über, unter, neben, zwischen</b>.</p>
<div class="ar">9 حروف جر بتيجي بالحالتين: an, auf, in, hinter, vor, über, unter, neben, zwischen.</div>
<div class="gt-wrap"><table class="gt">
<tr><th>Frage</th><th>Kasus</th><th>Beispiel</th></tr>
<tr><td><b>Wo?</b> (Position)</td><td>Dativ</td><td>Das Buch liegt <b>auf dem</b> Tisch. / Er ist <b>in der</b> Küche.</td></tr>
<tr><td><b>Wohin?</b> (Aktion/Richtung)</td><td>Akkusativ</td><td>Stell die Gläser <b>auf den</b> Tisch! / Gehst du <b>in die</b> Schule?</td></tr>
<tr><td><b>Wann?</b> (Zeit)</td><td>Dativ</td><td><b>am</b> Samstag, <b>im</b> Winter, <b>vor</b> einer Woche</td></tr>
</table></div>
<div class="exbox">Herr Berg geht <i>ins</i> Büro. (wohin? → Akk.)<br>Herr Berg arbeitet <i>im</i> Büro. (wo? → Dat.)<br>Sie geht <i>an die</i> Kasse. – Sie steht <i>an der</i> Kasse.</div>
<div class="notebox">Kurzformen: am, ans, im, ins, aufs, vors.<span class="ar">الاختصارات: an dem = am · in das = ins ... إلخ.</span></div>
<h5>Zeit: Jahreszeiten, Monate, Tage</h5>
<div class="gt-wrap"><table class="gt">
<tr><th>im</th><td>im Frühling, im Sommer, im Januar, im Mai (Jahreszeiten + Monate)</td></tr>
<tr><th>am</th><td>am Montag, am Wochenende, am Morgen, am Abend (Tage + Tageszeiten)</td></tr>
<tr><th>in der</th><td>in der Nacht</td></tr>
</table></div>
<h5>schon ↔ erst</h5>
<div class="exbox">Bist du <i>schon</i> heute fertig? – Nein, ich werde <i>erst</i> morgen fertig.</div>
<div class="ar">schon = بدري/خلاص حصل · erst = لسه/مش قبل كده. «خلصت النهارده خلاص؟ — لأ، هخلص بكرة بس.»</div>`,
quiz:[
 {q:"Die Lampe hängt ___ Schreibtisch.", o:["über dem","über den","über das"], a:0, fb:"Wo? → Dativ: über dem Schreibtisch.", fbAr:"مكان ثابت → Dativ."},
 {q:"Stell den Wagen bitte ___ Garage!", o:["vor die","vor der","vor dem"], a:0, fb:"Wohin? → Akkusativ: vor die Garage.", fbAr:"اتجاه → Akkusativ."},
 {q:"___ Winter fahren wir in die Berge.", o:["Im","Am","In der"], a:0, fb:"Jahreszeit → im Winter.", fbAr:"الفصول بـ im."},
 {q:"Fährst du schon am Abend? – Nein, ___ am Morgen.", o:["erst","schon","noch"], a:0, fb:"später als gedacht → erst.", fbAr:"أتأخر عن المتوقع → erst."},
]},
{short:"stellen/stehen…", title:"Ähnliche Verben (Aktion ↔ Position)", titleAr:"أفعال متشابهة: حركة ↔ وضع ثابت",
body:`<p>Paare: <b>Aktionsverb</b> (wohin? + Akk.) und <b>Positionsverb</b> (wo? + Dat.):</p>
<div class="ar">أزواج أفعال: فعل الحركة (بتحط الحاجة فين؟ + Akkusativ) وفعل الوضع (الحاجة فين؟ + Dativ):</div>
<div class="gt-wrap"><table class="gt">
<tr><th>Aktion (wohin? + Akk.)</th><th>Position (wo? + Dat.)</th></tr>
<tr><td><b>setzen</b>: Ich setze den Hund in den Korb.</td><td><b>sitzen</b>: Der Hund sitzt im Korb.</td></tr>
<tr><td><b>stellen</b>: Ich stelle die Flasche auf den Tisch.</td><td><b>stehen</b>: Die Flasche steht auf dem Tisch.</td></tr>
<tr><td><b>legen</b>: Ich lege den Wein in den Kühlschrank.</td><td><b>liegen</b>: Der Wein liegt im Kühlschrank.</td></tr>
<tr><td><b>hängen</b>: Ich hänge den Mantel in die Garderobe.</td><td><b>hängen</b>: Der Mantel hängt in der Garderobe.</td></tr>
<tr><td><b>stecken</b>: Ich stecke den Brief ins Kuvert.</td><td><b>stecken</b>: Der Brief steckt im Kuvert.</td></tr>
</table></div>
<div class="ar">المعاني: setzen يقعّد / sitzen قاعد · stellen يوقّف (رأسي) / stehen واقف · legen يرقّد (أفقي) / liegen راقد · hängen يعلّق / معلّق · stecken يدخّل في / داخل في.</div>
<div class="exbox">Max <i>liegt im</i> Krankenhaus. / Ich <i>stelle</i> das Glas <i>auf den</i> Tisch.<br>Passau <i>liegt an der</i> Donau. / Eva <i>setzt</i> die Brille <i>auf die</i> Nase.<br>Ich <i>hänge</i> die Uhr <i>an die</i> Wand. – Die Uhr <i>hängt an der</i> Wand.</div>
<div class="notebox">Merkhilfe: Verben mit <b>-en</b>-Aktion (stellen, legen, setzen) sind regelmäßig und brauchen ein Objekt. stehen/liegen/sitzen sind unregelmäßig und haben kein Akkusativ-Objekt.<span class="ar">أفعال الحركة بتحتاج مفعول (بتحط حاجة)، أفعال الوضع من غير مفعول (الحاجة موجودة لوحدها).</span></div>`,
quiz:[
 {q:"Ich ___ das Glas auf den Tisch.", o:["stelle","stehe","stehle"], a:0, fb:"Aktion mit Objekt → stellen.", fbAr:"حركة بمفعول → stellen."},
 {q:"Das Glas ___ auf dem Tisch.", o:["steht","stellt","setzt"], a:0, fb:"Position → stehen.", fbAr:"وضع ثابت → stehen."},
 {q:"Julia ___ sich auf das Sofa.", o:["legt","liegt","lege"], a:0, fb:"Aktion (wohin?) → sich legen + Akk.", fbAr:"حركة → legt sich."},
]},
]},

/* ============================== LEKTION 6 */
{num:6, titleAr:"الماضي البسيط · جمل الوصل · الماضي الأسبق",
topics:[
{short:"Präteritum", title:"Präteritum (Imperfekt)", titleAr:"الماضي البسيط (لغة الكتابة والحكي)",
body:`<p>Das Präteritum benutzt man vor allem in <b>geschriebenen Texten</b> (Zeitungen, Geschichten). Es gibt drei Gruppen:</p>
<div class="ar">الـ Präteritum بيُستخدم أساسًا في الكتابة (جرايد، قصص). في 3 مجموعات أفعال:</div>
<h5>1. Schwache Verben (regelmäßig): Stamm + te</h5>
<div class="gt-wrap"><table class="gt">
<tr><td>ich kauf<b>te</b></td><td>wir kauf<b>ten</b></td></tr>
<tr><td>du kauf<b>test</b></td><td>ihr kauf<b>tet</b></td></tr>
<tr><td>er/sie/es kauf<b>te</b></td><td>sie/Sie kauf<b>ten</b></td></tr>
</table></div>
<div class="notebox">Stamm auf -t, -d, -chn, -ffn, -gn → <b>-ete</b>: ich antwort<b>ete</b>, er rechn<b>ete</b>, es regn<b>ete</b>. Verben auf -eln, -ern, -igen, -ieren sind immer schwach: ich sammelte, ich telefonierte.</div>
<h5>2. Starke Verben (unregelmäßig): neuer Stamm</h5>
<div class="gt-wrap"><table class="gt">
<tr><td>ich trank</td><td>wir trank<b>en</b></td></tr>
<tr><td>du trank<b>st</b></td><td>ihr trank<b>t</b></td></tr>
<tr><td>er/sie/es trank</td><td>sie/Sie trank<b>en</b></td></tr>
</table></div>
<div class="exbox">schreiben → ich <i>schrieb</i> · gehen → ich <i>ging</i> · fliegen → ich <i>flog</i> · essen → ich <i>aß</i><br>finden → ich <i>fand</i> · sprechen → ich <i>sprach</i> · bleiben → ich <i>blieb</i> · einsteigen → ich <i>stieg ein</i></div>
<div class="ar">الأفعال الشاذة: الجذر بيتغير بالكامل، و ich و er من غير نهاية.</div>
<h5>3. Gemischte Verben: neuer Stamm + te</h5>
<div class="exbox">bringen → <i>brachte</i> · denken → <i>dachte</i> · wissen → <i>wusste</i> · kennen → <i>kannte</i><br>nennen → <i>nannte</i> · rennen → <i>rannte</i> · brennen → <i>brannte</i> · senden → <i>sandte</i></div>
<div class="exbox">Paul <i>brachte</i> Blumen mit. / Lena <i>wusste</i> die Antwort. / Ich <i>schrieb</i> einen Brief.</div>`,
quiz:[
 {q:"Wann kauft Max den Wagen? – Er ___ ihn gestern. (Präteritum)", o:["kaufte","kauft","gekauft"], a:0, fb:"Schwaches Verb: kaufte.", fbAr:"فعل منتظم: kaufte."},
 {q:"Ich ___ einen Brief. (schreiben, Präteritum)", o:["schrieb","schreibte","schreibe"], a:0, fb:"Starkes Verb: schrieb.", fbAr:"فعل شاذ: schrieb."},
 {q:"Lena ___ die Antwort. (wissen, Präteritum)", o:["wusste","wisste","weiß"], a:0, fb:"Gemischtes Verb: wusste.", fbAr:"فعل مختلط: wusste."},
 {q:"Es ___ gestern den ganzen Tag. (regnen)", o:["regnete","regnte","regnetete"], a:0, fb:"Stamm auf -gn → -ete: regnete.", fbAr:"الجذر آخره gn → بنزود ete."},
]},
{short:"Relativsätze", title:"Relativsätze", titleAr:"جمل الوصل (اللي...)",
body:`<p>Relativsätze erklären ein Nomen genauer. Das <b>Relativpronomen</b> hat die Formen des bestimmten Artikels, das Verb steht <b>am Ende</b>.</p>
<div class="ar">جملة الوصل بتوصف اسم بالتفصيل — زي «اللي» بالعربي. ضمير الوصل شكله زي أداة التعريف، والفعل في الآخر.</div>
<div class="gt-wrap"><table class="gt">
<tr><th></th><th>mask.</th><th>fem.</th><th>neutr.</th><th>Plural</th></tr>
<tr><td>Nom.</td><td>der</td><td>die</td><td>das</td><td>die</td></tr>
<tr><td>Akk.</td><td><b>den</b></td><td>die</td><td>das</td><td>die</td></tr>
</table></div>
<h5>Nominativ oder Akkusativ?</h5>
<div class="exbox">Kennst du den Herrn? <u>Er</u> sitzt dort. → Kennst du den Herrn, <i>der</i> dort <i>sitzt</i>? (Nom.)<br>Kennst du den Herrn? Lena hat <u>ihn</u> gegrüßt. → Kennst du den Herrn, <i>den</i> Lena gegrüßt <i>hat</i>? (Akk.)</div>
<div class="ar">لو الضمير فاعل جوه جملة الوصل → Nominativ (der). لو مفعول → Akkusativ (den). الجنس والعدد بياخدهم من الاسم اللي قبله.</div>
<h5>Der Relativsatz im Satz</h5>
<div class="exbox">Mir gefällt dieser Mantel, <i>den du gekauft hast</i>. (am Ende)<br>Dieser Mantel, <i>den du gekauft hast</i>, gefällt mir. (eingeschoben)</div>
<div class="notebox">Besser: den Relativsatz ans Satzende stellen: Hast du den Film <b>gesehen</b>, der neu im Kino ist?<span class="ar">الأفضل أسلوبيًا إن جملة الوصل تيجي في آخر الجملة بعد الفعل.</span></div>
<div class="exbox">Der Zug, <i>der</i> nach München <i>fährt</i>, steht auf Gleis 5.<br>Die Touristen, <i>die</i> ich auf dem Rathausplatz getroffen <i>habe</i>, kommen aus Prag.<br>Das Obst, <i>das</i> du im Supermarkt gekauft <i>hast</i>, musst du waschen.</div>`,
quiz:[
 {q:"Kennst du den Mann, ___ dort drüben sitzt?", o:["der","den","dem"], a:0, fb:"Subjekt im Relativsatz → Nominativ: der.", fbAr:"فاعل في جملة الوصل → der."},
 {q:"Wie war der Film, ___ du gestern gesehen hast?", o:["den","der","das"], a:0, fb:"Objekt (du hast IHN gesehen) → Akkusativ: den.", fbAr:"مفعول → den."},
 {q:"Mir gefallen die Blumen, ___ in deinem Garten blühen.", o:["die","den","das"], a:0, fb:"Plural Nominativ → die.", fbAr:"جمع في الرفع → die."},
]},
{short:"Plusquamperfekt", title:"Plusquamperfekt", titleAr:"الماضي الأسبق (كان قد فعل)",
body:`<p>Das Plusquamperfekt zeigt: Eine Aktion war <b>vor</b> einer anderen Aktion in der Vergangenheit. Bildung: <b>hatte/war + Partizip II</b>.</p>
<div class="ar">الـ Plusquamperfekt بيوضح إن حدث حصل «قبل» حدث تاني في الماضي (كان قد...). التكوين: hatte أو war + التصريف الثالث.</div>
<div class="exbox">Er bestellte das Menü. <i>Vorher hatte er die Speisekarte gelesen.</i><br>Max <i>hatte</i> die Speisekarte <i>gelesen</i>, dann bestellte er das Tagesmenü.<br>Lena <i>war</i> zehn Kilometer <i>gewandert</i>, dann machte sie eine Pause.</div>
<div class="gt-wrap"><table class="gt">
<tr><th>zuerst (Plusquamperfekt)</th><th>danach (Präteritum)</th></tr>
<tr><td>Max <b>hatte</b> die Rechnung <b>bezahlt</b>,</td><td>dann verließ er das Restaurant.</td></tr>
<tr><td>Theo <b>hatte</b> sich <b>geduscht</b>,</td><td>dann zog er sich an.</td></tr>
<tr><td>Wir <b>hatten</b> die Stadt <b>besichtigt</b>,</td><td>dann gingen wir ins Hotel.</td></tr>
<tr><td>Ein Unfall <b>war passiert</b>,</td><td>dann informierte man die Polizei.</td></tr>
</table></div>
<div class="notebox">haben oder sein? Wie beim Perfekt: Bewegung/Veränderung → war (gewandert, gefahren, passiert), sonst → hatte.<span class="ar">نفس قاعدة الـ Perfekt: أفعال الحركة والتحول بتاخد war، والباقي hatte.</span></div>
<div class="exbox">Ich schaltete den Computer aus, <i>vorher hatte ich</i> alle Programme <i>geschlossen</i>.<br>Paul zog nach Wien. <i>Vorher hatte er</i> zwei Jahre in Salzburg <i>gelebt</i>.</div>`,
quiz:[
 {q:"Max ___ die Rechnung bezahlt, dann verließ er das Restaurant.", o:["hatte","ist","hat"], a:0, fb:"Vorzeitigkeit → Plusquamperfekt: hatte bezahlt.", fbAr:"الحدث الأسبق → hatte + التصريف الثالث."},
 {q:"Lena ___ zehn Kilometer gewandert, dann machte sie Pause.", o:["war","hatte","ist"], a:0, fb:"wandern = Bewegung → war gewandert.", fbAr:"فعل حركة → war."},
 {q:"Das Plusquamperfekt zeigt eine Aktion, die …", o:["vor einer anderen Aktion war","jetzt passiert","in der Zukunft ist"], a:0, fb:"Vorzeitigkeit in der Vergangenheit.", fbAr:"حدث قبل حدث تاني في الماضي."},
]},
]},

/* ============================== LEKTION 7 */
{num:7, titleAr:"جمل الغرض damit · ضمائر غير محددة · السؤال غير المباشر",
topics:[
{short:"damit", title:"Nebensätze – damit", titleAr:"جمل الغرض بـ damit (عشان / لكي)",
body:`<p>Nebensätze mit <b>damit</b> nennen eine <b>Absicht oder einen Zweck</b> (Frage: <b>Wozu?</b>). Das Verb steht am Ende.</p>
<div class="ar">جمل damit بتوضح الهدف أو الغرض (السؤال: ?Wozu — عشان إيه؟). الفعل في آخر الجملة.</div>
<div class="exbox">Max schreibt alles auf. Er will nichts vergessen.<br>→ Max schreibt alles auf, <i>damit</i> er nichts <i>vergisst</i>.</div>
<div class="exbox">Lisa ruft den Ober. Er soll die Speisekarte bringen.<br>→ Lisa ruft den Ober, <i>damit</i> er ihr die Speisekarte <i>bringt</i>.</div>
<div class="notebox">In Nebensätzen mit damit kann man <b>wollen, mögen, sollen nicht</b> benutzen! „Er will nichts vergessen“ → damit er nichts <b>vergisst</b> (ohne wollen).<span class="ar">جوه جملة damit ممنوع نستخدم wollen أو sollen أو mögen — بنشيلهم ونصرّف الفعل الأساسي.</span></div>
<div class="gt-wrap"><table class="gt">
<tr><th>Zwei Sätze</th><th>Mit damit</th></tr>
<tr><td>Er spricht laut. Alle sollen ihn hören.</td><td>Er spricht laut, <b>damit</b> alle ihn <b>hören</b>.</td></tr>
<tr><td>Wir trainieren. Wir wollen fit bleiben.</td><td>Wir trainieren, <b>damit</b> wir fit <b>bleiben</b>.</td></tr>
<tr><td>Max kauft eine Brille. Er kann dann besser lesen.</td><td>Max kauft eine Brille, <b>damit</b> er besser <b>lesen kann</b>.</td></tr>
</table></div>
<div class="ar">لاحظ: kann ممكن تفضل موجودة (لأنها قدرة مش إرادة): «عشان يقدر يقرأ أحسن».</div>`,
quiz:[
 {q:"Ich schreibe mir den Termin auf, ___ ich ihn nicht vergesse.", o:["damit","weil","ob"], a:0, fb:"Zweck/Absicht → damit.", fbAr:"الغرض بـ damit."},
 {q:"Wir trainieren, damit wir fit ___.", o:["bleiben","bleiben wollen","wollen bleiben"], a:0, fb:"Kein „wollen“ im damit-Satz!", fbAr:"بنشيل wollen جوه جملة damit."},
 {q:"Die Polizei macht Radarkontrollen, damit die Autofahrer nicht so schnell ___.", o:["fahren","fahren sollen","sollen fahren"], a:0, fb:"Kein „sollen“ im damit-Satz.", fbAr:"بنشيل sollen برضه."},
]},
{short:"einer / welche / man", title:"Unbestimmte Pronomen und Artikel", titleAr:"الضمائر غير المحددة (واحد / بعض / المرء)",
body:`<p><b>Artikel</b> stehen mit einem Nomen, <b>Pronomen</b> stehen allein. Die unbestimmten Pronomen haben fast immer eine Endung:</p>
<div class="ar">الأداة بتيجي مع اسم، أما الضمير فبيقف لوحده. الضمائر غير المحددة (einer = واحد، welche = بعض/شوية، keiner = ولا واحد) دايمًا ليها نهاية.</div>
<div class="gt-wrap"><table class="gt">
<tr><th></th><th>mask.</th><th>fem.</th><th>neutr.</th><th>Plural</th></tr>
<tr><td>Nom.</td><td>(k)ein<b>er</b></td><td>(k)ein<b>e</b></td><td>(k)ein<b>(e)s</b></td><td>welche / keine</td></tr>
<tr><td>Akk.</td><td>(k)ein<b>en</b></td><td>(k)ein<b>e</b></td><td>(k)ein<b>(e)s</b></td><td>welche / keine</td></tr>
<tr><td>Dat.</td><td>(k)ein<b>em</b></td><td>(k)ein<b>er</b></td><td>(k)ein<b>em</b></td><td>welchen / keinen</td></tr>
</table></div>
<div class="exbox">Ist hier ein Supermarkt? – In der Badstraße ist <i>einer</i>. (mask. Nom. → -er!)<br>Hat <i>einer</i> meine Brille gesehen? – Nein, <i>keiner</i> hat sie gesehen.<br>Kaufst du Äpfel? – Ja, ich kaufe <i>welche</i>. (Plural!)</div>
<h5>man / jemand / niemand</h5>
<div class="gt-wrap"><table class="gt">
<tr><td><b>man</b></td><td>viele unbestimmte Personen / die Allgemeinheit (nur Nominativ)</td><td>Kann <b>man</b> hier telefonieren?</td></tr>
<tr><td><b>jemand</b></td><td>eine unbekannte Person</td><td>Hast du <b>jemand(en)</b> gesehen?</td></tr>
<tr><td><b>niemand</b></td><td>Negation von jemand</td><td>Ich habe <b>niemand(en)</b> gesehen.</td></tr>
</table></div>
<div class="ar">man = المرء/الواحد (للعموم، رفع بس) · jemand = حد ما · niemand = محدش. في النصب والجر ممكن نصرّفهم: jemanden / jemandem.</div>
<div class="exbox">Alle waren still. <i>Niemand</i> hat ein Wort gesagt.<br>Wenn <i>man</i> nicht aufpasst, kann <i>man</i> viele Fehler machen.</div>`,
quiz:[
 {q:"Ist hier eine Bank? – Ja, dort ist ___.", o:["eine","einer","welche"], a:0, fb:"die Bank (fem.) → eine.", fbAr:"مؤنث → eine."},
 {q:"Kaufst du Orangen? – Ja, ich kaufe ___.", o:["welche","eine","einen"], a:0, fb:"Plural → welche.", fbAr:"جمع → welche."},
 {q:"Ich habe angerufen, aber ___ hat sich gemeldet.", o:["niemand","jemand","man"], a:0, fb:"Negation: niemand = keine Person.", fbAr:"النفي: محدش رد."},
]},
{short:"indirekte Fragen", title:"Nebensätze – Fragesätze (wissen + W-Frage / ob)", titleAr:"السؤال غير المباشر (مع wissen)",
body:`<p>Nebensätze können mit einem <b>Fragewort</b> (wann, wo, wer, was …) oder mit <b>ob</b> (bei Ja/Nein-Fragen) beginnen. Das Verb steht am Ende.</p>
<div class="ar">الجمل الثانوية ممكن تبدأ بأداة استفهام (إمتى، فين، مين...) أو بـ ob لو السؤال إجابته نعم/لا. الفعل في الآخر.</div>
<h5>Das Verb „wissen“ (unregelmäßig!)</h5>
<div class="gt-wrap"><table class="gt">
<tr><td>ich weiß</td><td>wir wissen</td></tr>
<tr><td>du weißt</td><td>ihr wisst</td></tr>
<tr><td>er/sie/es weiß</td><td>sie/Sie wissen</td></tr>
</table></div>
<div class="exbox">Wann fährt der Zug ab? → Ich weiß nicht, <i>wann</i> der Zug <i>abfährt</i>.<br>Wer ruft an? → Ich weiß nicht, <i>wer</i> in der Firma <i>anruft</i>.<br>Was stellt die Firma her? → Weißt du, <i>was</i> die Firma <i>herstellt</i>?</div>
<div class="exbox">Kommt Peter mit? → Ich weiß nicht, <i>ob</i> Peter <i>mitkommt</i>.<br>Kann man hier kostenlos parken? → Ich habe keine Ahnung, <i>ob</i> man hier kostenlos <i>parken kann</i>.</div>
<div class="notebox">Frage <b>mit</b> Fragewort → Fragewort bleibt. Frage <b>ohne</b> Fragewort → <b>ob</b>.<span class="ar">سؤال بأداة استفهام → الأداة نفسها. سؤال من غير أداة → ob.</span></div>`,
quiz:[
 {q:"Ich weiß nicht, ___ der Film anfängt.", o:["wann","ob","dass"], a:0, fb:"W-Frage (Wann fängt er an?) → wann.", fbAr:"سؤال بأداة → نفس الأداة."},
 {q:"Ich habe keine Ahnung, ___ Max morgen Fußball spielt.", o:["ob","wann","wer"], a:0, fb:"Ja/Nein-Frage → ob.", fbAr:"سؤال نعم/لا → ob."},
 {q:"du ___ / ihr ___ (wissen)", o:["weißt / wisst","weisst / wisst","weißt / weißt"], a:0, fb:"du weißt, ihr wisst.", fbAr:"تصريف wissen شاذ."},
]},
]},

/* ============================== LEKTION 8 */
{num:8, titleAr:"أدوات الإشارة · المستقبل · النفي الشامل",
topics:[
{short:"dieser / diese", title:"Demonstrativartikel und -pronomen (dieser, diese, dieses)", titleAr:"أدوات وضمائر الإشارة (هذا / هذه)",
body:`<p>Mit <b>dieser/diese/dieses</b> zeigt man auf eine bestimmte Person oder Sache. Als <b>Artikel</b> (mit Nomen) oder als <b>Pronomen</b> (allein).</p>
<div class="ar">بـ dieser/diese/dieses بنشاور على حاجة أو حد معين (هذا/هذه/دي). بتيجي كأداة مع اسم أو كضمير لوحدها.</div>
<div class="gt-wrap"><table class="gt">
<tr><th></th><th>mask.</th><th>fem.</th><th>neutr.</th><th>Plural</th></tr>
<tr><td>Nom.</td><td>dies<b>er</b></td><td>dies<b>e</b></td><td>dies<b>es</b></td><td>dies<b>e</b></td></tr>
<tr><td>Akk.</td><td>dies<b>en</b></td><td>dies<b>e</b></td><td>dies<b>es</b></td><td>dies<b>e</b></td></tr>
<tr><td>Dat.</td><td>dies<b>em</b></td><td>dies<b>er</b></td><td>dies<b>em</b></td><td>dies<b>en</b></td></tr>
</table></div>
<div class="exbox">Gehört dir <i>dieser</i> Schirm? – Nein, <i>dieser</i> hier!<br>Gefallen dir <i>diese</i> Schuhe? – Nein, aber <i>diese</i> gefallen mir.<br>Wann bezahlst du <i>diese</i> Rechnung? / Hast du <i>diesen</i> lustigen Film gesehen?</div>
<div class="notebox">Die Endungen sind wie beim bestimmten Artikel (der → dieser, den → diesen, dem → diesem).<span class="ar">النهايات زي أداة التعريف بالظبط.</span></div>`,
quiz:[
 {q:"Hast du ___ lustigen Film gesehen?", o:["diesen","dieser","dieses"], a:0, fb:"Akkusativ maskulin → diesen.", fbAr:"نصب مذكر → diesen."},
 {q:"Hilfst du ___ Leuten?", o:["diesen","diese","dieser"], a:0, fb:"Dativ Plural → diesen (+ Nomen mit -n).", fbAr:"جر جمع → diesen."},
 {q:"Wem gehört ___ Tasche?", o:["diese","dieser","dieses"], a:0, fb:"die Tasche, Nominativ feminin → diese.", fbAr:"مؤنث رفع → diese."},
]},
{short:"Futur I", title:"Futur I (werden + Infinitiv)", titleAr:"المستقبل (werden + المصدر)",
body:`<p>Bildung: <b>werden</b> (konjugiert) + <b>Infinitiv am Satzende</b>.</p>
<div class="ar">التكوين: تصريف werden في المكان التاني + المصدر في آخر الجملة.</div>
<div class="gt-wrap"><table class="gt">
<tr><td>ich werde kochen</td><td>wir werden kochen</td></tr>
<tr><td>du wirst kochen</td><td>ihr werdet kochen</td></tr>
<tr><td>er/sie/es wird kochen</td><td>sie/Sie werden kochen</td></tr>
</table></div>
<h5>Verwendung – nicht nur Zukunft!</h5>
<div class="gt-wrap"><table class="gt">
<tr><th>Funktion</th><th>Beispiel</th></tr>
<tr><td><b>Zukunft</b> (meist reicht Präsens!)</td><td>Ich <b>werde</b> dich <b>anrufen</b>. (oft: Ich rufe dich morgen an.)</td></tr>
<tr><td><b>Plan / Versprechen</b> (+ sicher/bestimmt)</td><td>Ich <b>werde</b> dir bestimmt <b>helfen</b>. / Ich werde mich sicher gut vorbereiten.</td></tr>
<tr><td><b>Vermutung</b> (+ wohl)</td><td>Jana <b>wird wohl</b> heute noch in Wien <b>bleiben</b>.</td></tr>
<tr><td><b>Aufforderung</b> (+ wohl)</td><td><b>Wirst</b> du <b>wohl</b> endlich <b>zuhören</b>!</td></tr>
</table></div>
<div class="ar">الاستخدامات: المستقبل (وغالبًا المضارع بيكفي مع كلمة زمن)، الوعد/النية (مع sicher/bestimmt = أكيد)، التخمين (مع wohl = على الأغلب)، والأمر الحازم (مع wohl).</div>
<div class="exbox">Wann räumst du endlich dein Zimmer auf? – Ich <i>werde</i> es morgen <i>sicher aufräumen</i>!<br>Schafft Hatem die Prüfung? – Er <i>wird</i> sie <i>wohl schaffen</i>.</div>`,
quiz:[
 {q:"Ich ___ dich morgen anrufen.", o:["werde","will werden","werde werden"], a:0, fb:"Futur I: werde + Infinitiv.", fbAr:"المستقبل: werde + مصدر."},
 {q:"Jana ___ wohl noch in Wien bleiben. (Vermutung)", o:["wird","werdet","würde"], a:0, fb:"Vermutung: wird + wohl.", fbAr:"التخمين بـ wird wohl."},
 {q:"du ___ (werden)", o:["wirst","wird","werdest"], a:0, fb:"du wirst.", fbAr:"تصريف du هو wirst."},
]},
{short:"Negation: nicht", title:"Pauschale Negation (nicht)", titleAr:"النفي الشامل بـ nicht ومكانها في الجملة",
body:`<p>Bei der pauschalen Negation (Satznegation) verneint man die <b>ganze Aussage</b> mit <b>nicht</b>. „nicht“ steht oft <b>weit hinten</b> im Satz.</p>
<div class="ar">في النفي الشامل بننفي الجملة كلها بـ nicht — وغالبًا بتيجي في آخر الجملة أو قريبة من الآخر.</div>
<div class="exbox">Kaufst du diese Wohnung? – Nein, ich kaufe diese Wohnung <i>nicht</i>.</div>
<h5>Diese Teile stehen HINTER nicht:</h5>
<div class="gt-wrap"><table class="gt">
<tr><th>Was?</th><th>Beispiel</th></tr>
<tr><td>Präfixe (trennbare Verben)</td><td>Ich rief Paul <b>nicht an</b>.</td></tr>
<tr><td>Infinitive</td><td>Ich kann dir <b>nicht helfen</b>.</td></tr>
<tr><td>Partizip II</td><td>Ich habe Max <b>nicht eingeladen</b>.</td></tr>
<tr><td>prädikative Adjektive</td><td>Das ist wirklich <b>nicht wichtig</b>.</td></tr>
<tr><td>Präpositionalobjekte</td><td>Martin wartet <b>nicht auf uns</b>.</td></tr>
<tr><td>modale/lokale Angaben</td><td>Ich tanze <b>nicht gern</b>. / Die Kinder spielen <b>nicht draußen</b>.</td></tr>
</table></div>
<h5>noch ↔ nicht mehr / schon ↔ noch nicht</h5>
<div class="exbox">Schläft Max <i>noch</i>? – Nein, er schläft <i>nicht mehr</i>.<br>Ist die Arbeit <i>schon</i> fertig? – Nein, sie ist <i>noch nicht</i> fertig.</div>
<div class="ar">noch (لسه بيحصل) عكسها nicht mehr (خلاص بطّل). schon (خلاص حصل؟) عكسها noch nicht (لسه ما حصلش).</div>
<div class="notebox">Temporale Angaben mit Chronologie (gestern, heute, morgen, jetzt) stehen <b>vor</b> nicht: Ihr arbeitet morgen <b>nicht</b>. Ohne Chronologie (pünktlich, täglich, immer) stehen sie <b>hinter</b> nicht: Der Zug kommt <b>nicht pünktlich</b>.<span class="ar">كلمات الزمن زي بكرة/النهارده قبل nicht، أما الصفات الزمنية زي «في الميعاد/يوميًا» بعد nicht.</span></div>`,
quiz:[
 {q:"Lädst du deinen Kollegen ein? – Nein, ich lade ihn ___ ___.", o:["nicht ein","ein nicht","nicht einladen"], a:0, fb:"nicht vor dem Präfix: … nicht ein.", fbAr:"النفي قبل البادئة المنفصلة."},
 {q:"Schläft Max noch? – Nein, er schläft ___.", o:["nicht mehr","noch nicht","nicht schon"], a:0, fb:"noch ↔ nicht mehr.", fbAr:"عكس «لسه» هو «بطّل خلاص»."},
 {q:"Ist die Arbeit schon fertig? – Nein, sie ist ___ fertig.", o:["noch nicht","nicht mehr","nicht"], a:0, fb:"schon ↔ noch nicht.", fbAr:"عكس «خلاص» هو «لسه»."},
 {q:"Der Zug kommt ___ . (pünktlich, verneint)", o:["nicht pünktlich","pünktlich nicht","nicht, pünktlich"], a:0, fb:"Temporale Angabe ohne Chronologie steht hinter nicht.", fbAr:"الصفة الزمنية بعد nicht."},
]},
]},
];
