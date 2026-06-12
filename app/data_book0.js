/* Original A2.1 learning content aligned with the six Netzwerk neu A2.1 themes. */
(() => {
const V=(w,d,ex,ar)=>({w,d,ex,ar});
const RM=(cat,catAr,items)=>({cat,catAr,items:items.map(([de,ar])=>({de,ar}))});
const READ=(kind,title,text,ar,glossary,questions)=>({kind,title,text,ar,glossary,questions});
const GR=(t,tAr,body)=>({t,tAr,body});
const S=(de,ar)=>({de,ar});
const Q=(q,o,a,fb,fbAr)=>({q,o,a,fb,fbAr});

window.BOOK0 = [
{
num:1,title:"Und was machst du?",titleAr:"وأنت ماذا تفعل؟ (التعارف والحياة اليومية)",
subtitle:"Freizeit · Tätigkeiten · Verabredungen · Restaurant",
visual:{src:"assets/chapters/chapter-1.webp",alt:"Freunde sprechen über Alltag und Freizeit",
 caption:"Menschen kennenlernen, von Erlebnissen erzählen und gemeinsam etwas planen.",
 captionAr:"نتعرف على أشخاص، نحكي عن تجارب سابقة ونخطط معًا."},
intro:"Du lernst, dich ausführlich vorzustellen, über Freizeit, Familie und Beruf zu sprechen, von vergangenen Erlebnissen zu berichten, dich zu verabreden und Gründe mit „weil“ zu nennen.",
introAr:"هتتعلم تقدم نفسك بالتفصيل، تتكلم عن وقت الفراغ والعيلة والشغل، تحكي عن الماضي، تتفق على ميعاد وتذكر السبب باستخدام weil.",
badges:["Vorstellung","Freizeit","Perfekt","weil","Verabredung","Restaurant"],
goals:[
 S("Sich und andere ausführlich vorstellen","تقدم نفسك والآخرين بالتفصيل"),
 S("Über Vergangenes im Perfekt berichten","تحكي عن الماضي باستخدام Perfekt"),
 S("Sich verabreden und einen Termin ändern","تتفق على موعد أو تغيّره"),
 S("Etwas mit „weil“ begründen","تذكر السبب باستخدام weil"),
 S("Ein Restaurant vorstellen und bewerten","تقدم مطعم وتقيّمه")
],
vocab:[
 V("die Freizeit","Die Zeit, in der man nicht arbeitet oder lernt.","In meiner Freizeit gehe ich gern schwimmen.","وقت الفراغ"),
 V("sich vorstellen","Den eigenen Namen und wichtige Informationen sagen.","Darf ich mich kurz vorstellen?","يعرّف نفسه"),
 V("der Beruf, -e","Eine Arbeit, für die man ausgebildet ist.","Was bist du von Beruf?","المهنة"),
 V("die Tätigkeit, -en","Etwas, das man regelmäßig macht.","Lesen ist eine ruhige Tätigkeit.","نشاط / عمل"),
 V("sich verabreden","Mit jemandem einen Treffpunkt und eine Zeit vereinbaren.","Wir haben uns für Samstag verabredet.","يتفق على مقابلة"),
 V("verschieben","Etwas zu einem späteren Zeitpunkt machen.","Können wir unser Treffen verschieben?","يؤجّل"),
 V("absagen","Sagen, dass ein Termin nicht stattfindet.","Leider muss ich für heute absagen.","يلغي"),
 V("mitbringen","Etwas zu einem Treffen bringen.","Ich bringe einen Salat mit.","يحضر معه"),
 V("gemeinsam","Zusammen mit anderen.","Wir kochen heute gemeinsam.","معًا"),
 V("das Gericht, -e","Eine zubereitete Speise auf der Speisekarte.","Mein Lieblingsgericht ist Gemüsecurry.","طبق طعام"),
 V("die Speisekarte, -n","Die Liste mit Essen und Getränken im Restaurant.","Können wir bitte die Speisekarte bekommen?","قائمة الطعام"),
 V("empfehlen","Sagen, dass etwas besonders gut ist.","Ich kann das kleine Bistro empfehlen.","يرشّح / ينصح بـ"),
 V("lecker","Mit einem sehr guten Geschmack.","Die Suppe ist wirklich lecker.","لذيذ"),
 V("gemütlich","Angenehm, ruhig und bequem.","Das Café ist klein und gemütlich.","مريح ولطيف"),
 V("erleben","Etwas sehen oder erfahren.","Im Urlaub habe ich viel erlebt.","يعيش تجربة"),
 V("die Muttersprache, -n","Die erste Sprache, die man als Kind lernt.","Arabisch ist meine Muttersprache.","اللغة الأم")
],
redemittel:[
 RM("Sich vorstellen","تقديم النفس",[
  ["Ich heiße … und komme ursprünglich aus …","اسمي ... وأنا أصلي من ..."],
  ["Zurzeit arbeite ich als … / studiere ich …","حاليًا أعمل كـ... / أدرس ..."],
  ["In meiner Freizeit interessiere ich mich besonders für …","في وقت فراغي أهتم خصوصًا بـ ..."],
  ["Ich spreche … fließend und lerne gerade Deutsch.","أتحدث ... بطلاقة وأتعلم الألمانية حاليًا."]
 ]),
 RM("Sich verabreden","الاتفاق على موعد",[
  ["Hast du am Freitagabend Zeit?","عندك وقت مساء الجمعة؟"],
  ["Wie wäre es mit Samstag um drei?","ما رأيك في السبت الساعة ثلاثة؟"],
  ["Das passt mir gut. Wo treffen wir uns?","الموعد مناسب لي. نتقابل فين؟"],
  ["Können wir das Treffen auf Sonntag verschieben?","ممكن نؤجل المقابلة للأحد؟"]
 ]),
 RM("Im Restaurant","في المطعم",[
  ["Was können Sie empfehlen?","حضرتك ترشح إيه؟"],
  ["Ich hätte gern das Tagesgericht.","عايز طبق اليوم لو سمحت."],
  ["Das Essen war sehr lecker, aber der Service war langsam.","الأكل كان لذيذ جدًا لكن الخدمة كانت بطيئة."],
  ["Wir möchten bitte zahlen.","الحساب لو سمحت."]
 ])
],
readings:[
 READ("Profil","Ein neuer Kurs, viele Geschichten",
  "Am ersten Kurstag sitzt Samir neben Klara. Samir ist Elektroingenieur und lebt seit zwei Jahren in Leipzig. Früher hat er in Alexandria gearbeitet. Klara arbeitet in einer Bäckerei und fotografiert in ihrer Freizeit gern alte Häuser. In der Pause sprechen sie über das Wochenende. Samir hat am Samstag ein Fahrrad gekauft, weil er die Stadt besser kennenlernen möchte. Klara schlägt eine gemeinsame Radtour vor. Sie verabreden sich für Sonntag um zehn Uhr am Bahnhof.",
  "في أول يوم بالكورس جلس سمير بجوار كلارا. سمير مهندس كهرباء ويعيش في لايبزج منذ سنتين. كان يعمل من قبل في الإسكندرية. كلارا تعمل في مخبز وتحب تصوير البيوت القديمة. اتفقا على جولة بالعجل يوم الأحد.",
  [["früher","سابقًا"],["vorschlagen","يقترح"],["die Radtour","جولة بالعجلة"]],
  [["Wo hat Samir früher gearbeitet?","In Alexandria."],["Warum hat er ein Fahrrad gekauft?","Weil er die Stadt besser kennenlernen möchte."],["Wann treffen sich beide?","Am Sonntag um zehn Uhr."]]),
 READ("Empfehlung","Ein Abend ohne Speisekarte",
  "Letzten Freitag waren wir in einem kleinen Restaurant am Fluss. Dort gibt es keine feste Speisekarte. Die Köchin bereitet jeden Abend drei neue Gerichte zu. Wir haben eine Gemüsesuppe, gebackenen Fisch und einen warmen Apfelkuchen probiert. Alles hat frisch geschmeckt. Besonders gut hat mir gefallen, dass die Gäste an einem langen Tisch sitzen und miteinander sprechen. Das Restaurant ist nicht billig, aber ich empfehle es gern, weil der Abend wirklich besonders war.",
  "الجمعة اللي فاتت رحنا مطعم صغير على النهر. مفيش قائمة ثابتة والطاهية بتحضر ثلاثة أطباق جديدة كل يوم. أعجبني إن الضيوف بيقعدوا على ترابيزة طويلة ويتكلموا مع بعض.",
  [["fest","ثابت"],["zubereiten","يحضّر الطعام"],["besonders","مميز"]],
  [["Wie viele Gerichte gibt es jeden Abend?","Drei neue Gerichte."],["Was war besonders?","Die Gäste sitzen zusammen an einem langen Tisch."],["Warum empfiehlt die Person das Restaurant?","Weil der Abend besonders war."]])
],
grammar:[
 GR("Wiederholung: Perfekt","مراجعة زمن الماضي Perfekt",`
  <p>Das Perfekt besteht aus <b>haben/sein + Partizip II</b>. Die meisten Verben bilden das Perfekt mit <b>haben</b>. Bewegung und Zustandswechsel stehen oft mit <b>sein</b>.</p>
  <div class="gt-wrap"><table class="gt"><tr><th>Infinitiv</th><th>Perfekt</th><th>Beispiel</th></tr>
  <tr><td>arbeiten</td><td>hat gearbeitet</td><td>Ich <b>habe</b> lange <b>gearbeitet</b>.</td></tr>
  <tr><td>treffen</td><td>hat getroffen</td><td>Wir <b>haben</b> Freunde <b>getroffen</b>.</td></tr>
  <tr><td>fahren</td><td>ist gefahren</td><td>Sie <b>ist</b> nach Berlin <b>gefahren</b>.</td></tr>
  <tr><td>bleiben</td><td>ist geblieben</td><td>Er <b>ist</b> zu Hause <b>geblieben</b>.</td></tr></table></div>
  <div class="notebox">Trennbar: <b>mitgebracht</b>. Verben auf -ieren ohne ge-: <b>studiert</b>. Untrennbar ohne ge-: <b>besucht</b>.</div>`),
 GR("Nebensatz mit weil","الجملة الفرعية باستخدام weil",`
  <p><b>weil</b> nennt einen Grund. Im Nebensatz steht das konjugierte Verb <b>am Ende</b>.</p>
  <div class="exbox">Ich lerne Deutsch, <b>weil ich in Deutschland arbeiten möchte</b>.<br>
  <b>Weil ich morgen früh arbeite</b>, gehe ich heute zeitig nach Hause.</div>
  <div class="ar">weil معناها «لأن». الفعل المتصرف يذهب إلى آخر الجملة الفرعية. ولو بدأت بـ weil، يأتي الفعل في الجملة الرئيسية مباشرة بعد الفاصلة.</div>`)
],
speaking:{questions:[
 S("Stell dich ausführlich vor: Herkunft, Beruf, Familie und Freizeit.","قدّم نفسك بالتفصيل: الأصل، الشغل، العيلة ووقت الفراغ."),
 S("Was hast du letztes Wochenende gemacht?","عملت إيه الأسبوع اللي فات؟"),
 S("Mit wem verabredest du dich oft und was macht ihr zusammen?","غالبًا بتتفق تقابل مين وبتعملوا إيه؟"),
 S("Welches Restaurant kannst du empfehlen? Begründe deine Meinung.","ترشح أنهي مطعم؟ اذكر السبب.")
],model:"Ich heiße Karim und komme aus Kairo. Zurzeit arbeite ich im Kundenservice. In meiner Freizeit spiele ich Fußball und koche gern. Letztes Wochenende habe ich Freunde getroffen. Wir sind in ein kleines Restaurant gegangen, weil wir etwas Neues probieren wollten. Das Essen war lecker und die Atmosphäre war gemütlich. Für nächsten Freitag haben wir uns wieder verabredet.",
modelAr:"اسمي كريم ومن القاهرة. أعمل حاليًا في خدمة العملاء. ألعب كرة وأحب الطبخ. الأسبوع الماضي قابلت أصحابي وذهبنا لمطعم صغير لأننا أردنا تجربة شيء جديد."},
quiz:[
 Q("Ich ___ gestern lange gearbeitet.",["bin","habe","werde"],1,"arbeiten bildet das Perfekt mit haben.","arbeiten يستخدم haben."),
 Q("Wir sind nach Dresden ___.",["gefahrt","gefahren","gefahrtet"],1,"fahren → ist gefahren.","تصريف fahren في Perfekt هو ist gefahren."),
 Q("Ich komme später, weil ich noch arbeiten ___.",["muss","müsse","gemusst"],0,"Im weil-Satz steht das konjugierte Verb am Ende.","الفعل يأتي في آخر جملة weil."),
 Q("Welche Form ist richtig?",["Ich habe studiert.","Ich habe gestudiert.","Ich bin studiert."],0,"Verben auf -ieren bilden das Partizip ohne ge-.","أفعال -ieren بدون ge."),
 Q("Eine höfliche Verabredung ist …",["Du kommst morgen.","Wie wäre es mit Samstag?","Ich sage ab gestern."],1,"„Wie wäre es mit …?“ ist ein freundlicher Vorschlag.","دي صيغة اقتراح مهذبة."),
 Q("Die Liste mit Essen heißt …",["Speisekarte","Fahrkarte","Postkarte"],0,"Im Restaurant liest man die Speisekarte.","قائمة الطعام هي Speisekarte.")
]
},
{
num:2,title:"Nach der Schulzeit",titleAr:"بعد مرحلة المدرسة (الدراسة والخبرات)",
subtitle:"Schule · Erfahrungen · Ausbildung · Präsentieren",
visual:{src:"assets/chapters/chapter-2.webp",alt:"Junge Erwachsene sprechen über Schule und Zukunft",
 caption:"Über Schulzeit, Erfahrungen, Ausbildung und unterschiedliche Wege sprechen.",
 captionAr:"نتكلم عن المدرسة والخبرات والدراسة والطرق المختلفة بعد المدرسة."},
intro:"Du berichtest über deine Schulzeit, Schulfächer und Erfahrungen, äußerst deine Meinung und vergleichst Bildungswege. Grammatik: Modalverben im Präteritum und Possessivartikel im Dativ.",
introAr:"هتحكي عن فترة المدرسة والمواد والخبرات، تقول رأيك وتقارن طرق التعليم. القواعد: الأفعال الناقصة في الماضي وضمائر الملكية في Dativ.",
badges:["Schule","Erfahrungen","Modalverben Präteritum","Dativ","Meinung"],
goals:[S("Über die Schulzeit und Lieblingsfächer sprechen","تتكلم عن المدرسة والمواد المفضلة"),S("Erfahrungen und Erinnerungen beschreiben","توصف خبرات وذكريات"),S("Die eigene Meinung ausdrücken","تقول رأيك"),S("Ein Bildungssystem kurz präsentieren","تقدم نظام تعليمي باختصار"),S("Possessivartikel im Dativ verwenden","تستخدم ضمائر الملكية مع Dativ")],
vocab:[
 V("das Schulfach, ⸚er","Ein Unterrichtsbereich wie Mathematik oder Geschichte.","Biologie war mein Lieblingsfach.","مادة دراسية"),
 V("die Grundschule, -n","Die erste Schule für Kinder.","Mit sechs Jahren kam ich in die Grundschule.","المدرسة الابتدائية"),
 V("die Berufsschule, -n","Eine Schule während einer beruflichen Ausbildung.","Zweimal pro Woche war sie in der Berufsschule.","مدرسة التعليم المهني"),
 V("die Ausbildung, -en","Praktisches und theoretisches Lernen für einen Beruf.","Er macht eine Ausbildung zum Koch.","تدريب مهني"),
 V("der Abschluss, ⸚e","Ein offizielles Ende von Schule oder Studium.","Für die Stelle braucht man einen Abschluss.","شهادة / تخرّج"),
 V("die Erfahrung, -en","Wissen, das man durch Erlebnisse bekommt.","Das Praktikum war eine wichtige Erfahrung.","خبرة"),
 V("das Zeugnis, -se","Ein Dokument mit Noten oder einer Bewertung.","Am Schuljahresende bekommen alle ein Zeugnis.","شهادة درجات"),
 V("die Note, -n","Eine Bewertung für eine Leistung.","Ich hatte eine gute Note in Deutsch.","درجة"),
 V("bestehen","Eine Prüfung erfolgreich machen.","Sie hat die Prüfung bestanden.","ينجح في امتحان"),
 V("sich erinnern an","Etwas aus der Vergangenheit wieder wissen.","Ich erinnere mich gern an meine Lehrerin.","يتذكر"),
 V("streng","Mit festen Regeln und hohen Erwartungen.","Unser Mathelehrer war streng, aber fair.","صارم"),
 V("fair","Gerecht und ehrlich.","Die Lehrerin hat alle fair behandelt.","عادل"),
 V("das Praktikum, Praktika","Eine kurze praktische Arbeit zum Lernen.","Nach der Schule machte ich ein Praktikum.","تدريب عملي"),
 V("die Meinung, -en","Was eine Person über etwas denkt.","Meiner Meinung nach sind Projekte wichtig.","رأي"),
 V("präsentieren","Informationen geordnet vor einer Gruppe zeigen.","Wir präsentieren das Schulsystem.","يقدّم عرضًا"),
 V("auswendig","So gelernt, dass man es ohne Text sagen kann.","Früher musste ich Gedichte auswendig lernen.","عن ظهر قلب")
],
redemittel:[
 RM("Über die Schulzeit sprechen","الكلام عن المدرسة",[
  ["Als ich in der Schule war, musste ich …","لما كنت في المدرسة كان لازم ..."],
  ["Mein Lieblingsfach war …, weil …","مادتي المفضلة كانت ... لأن ..."],
  ["Mit meiner Klassenlehrerin hatte ich gute Erfahrungen.","كانت عندي تجارب جيدة مع مدرسة الفصل."],
  ["Ich erinnere mich besonders an …","أتذكر خصوصًا ..."]
 ]),
 RM("Die Meinung sagen","قول الرأي",[
  ["Meiner Meinung nach sollte Schule mehr auf das Leben vorbereiten.","في رأيي المدرسة لازم تجهز للحياة أكتر."],
  ["Ich finde wichtig, dass …","شايف إنه مهم إن ..."],
  ["Da stimme ich dir zu.","أنا موافقك على ده."],
  ["Das sehe ich anders, denn …","أنا شايف الموضوع بشكل مختلف لأن ..."]
 ]),
 RM("Präsentieren","تقديم عرض",[
  ["Zuerst möchte ich das System kurz erklären.","أولًا أحب أشرح النظام باختصار."],
  ["Ein wichtiger Unterschied ist …","فرق مهم هو ..."],
  ["Zum Schluss fasse ich die wichtigsten Punkte zusammen.","في النهاية ألخص أهم النقاط."]
 ])
],
readings:[
 READ("Erinnerung","Mein ungewöhnlichstes Schulprojekt",
  "In der neunten Klasse durften wir eine Woche lang ein eigenes kleines Unternehmen planen. Meine Gruppe wollte alte Fahrräder reparieren und günstig verkaufen. Zuerst mussten wir Aufgaben verteilen und einen Kostenplan machen. Ich konnte damals noch nicht gut präsentieren, aber ich musste unser Projekt vor der Klasse erklären. Am Ende haben wir zwar kein echtes Geschäft eröffnet, doch ich habe viel über Teamarbeit gelernt. Noch heute denke ich gern an diese Woche.",
  "في الصف التاسع خططنا لمدة أسبوع لمشروع شركة صغيرة لإصلاح العجل القديم وبيعه. كنت وقتها مش بعرف أقدم كويس، لكن كان لازم أشرح المشروع قدام الفصل.",
  [["ungewöhnlich","غير عادي"],["verteilen","يوزّع"],["zwar … doch","صحيح أن... لكن"]],
  [["Was wollte die Gruppe machen?","Alte Fahrräder reparieren und verkaufen."],["Was musste die Person präsentieren?","Das Projekt vor der Klasse."],["Was hat sie gelernt?","Viel über Teamarbeit."]]),
 READ("Kommentar","Noten oder Projekte?",
  "Viele Schulen bewerten fast nur Tests. Ich finde das nicht ideal. Manche Schülerinnen und Schüler können viel, sind aber in Prüfungen sehr nervös. Projekte zeigen andere Fähigkeiten: planen, recherchieren, gemeinsam arbeiten und Ergebnisse erklären. Natürlich braucht man auch Tests, denn Lehrkräfte müssen Leistungen vergleichen. Meiner Meinung nach ist eine Mischung am fairsten: kurze Tests, praktische Aufgaben und Projekte im Team.",
  "مدارس كتير بتقيّم بالامتحانات بس. لكن المشاريع بتظهر مهارات تانية زي التخطيط والبحث والعمل الجماعي. الأفضل في رأيي خليط من الاتنين.",
  [["bewerten","يقيّم"],["die Fähigkeit","مهارة / قدرة"],["die Mischung","خليط"]],
  [["Warum sind Tests nicht für alle ideal?","Manche sind in Prüfungen sehr nervös."],["Welche Fähigkeiten zeigen Projekte?","Planen, recherchieren, Teamarbeit und Erklären."],["Was empfiehlt der Text?","Eine Mischung aus Tests und Projekten."]])
],
grammar:[
 GR("Modalverben im Präteritum","الأفعال الناقصة في الماضي البسيط",`
  <p>Modalverben stehen in Erzählungen über die Vergangenheit meistens im <b>Präteritum</b>.</p>
  <div class="gt-wrap"><table class="gt"><tr><th></th><th>ich/er/sie</th><th>wir/sie</th></tr>
  <tr><td>können</td><td>konnte</td><td>konnten</td></tr><tr><td>müssen</td><td>musste</td><td>mussten</td></tr>
  <tr><td>dürfen</td><td>durfte</td><td>durften</td></tr><tr><td>wollen</td><td>wollte</td><td>wollten</td></tr>
  <tr><td>sollen</td><td>sollte</td><td>sollten</td></tr></table></div>
  <div class="exbox">Früher <b>musste</b> ich eine Uniform tragen. Wir <b>durften</b> im Unterricht nicht essen.</div>`),
 GR("Possessivartikel im Dativ","ضمائر الملكية مع Dativ",`
  <p>Nach Dativ-Präpositionen oder Dativ-Verben bekommen Possessivartikel Endungen.</p>
  <div class="gt-wrap"><table class="gt"><tr><th></th><th>maskulin/neutrum</th><th>feminin/Plural</th></tr>
  <tr><td>mein</td><td>mit <b>meinem</b> Lehrer / Kind</td><td>mit <b>meiner</b> Lehrerin / meinen Freunden</td></tr>
  <tr><td>sein</td><td>bei <b>seinem</b> Praktikum</td><td>bei <b>seiner</b> Ausbildung</td></tr></table></div>
  <div class="notebox">Plural im Dativ: Possessivartikel + <b>-en</b>, das Nomen bekommt meistens auch <b>-n</b>: mit meinen Freund<b>en</b>.</div>`)
],
speaking:{questions:[S("Wie war deine Schulzeit?","كانت فترة مدرستك عاملة إزاي؟"),S("Was musstest und was durftest du in der Schule?","كان لازم تعمل إيه وكان مسموح لك بإيه؟"),S("Welches Fach war wichtig für dich?","أنهي مادة كانت مهمة ليك؟"),S("Sind Noten oder Projekte besser? Begründe.","الدرجات ولا المشاريع أفضل؟ اذكر السبب.")],
model:"Meine Schulzeit war meistens schön. Ich musste jeden Morgen früh aufstehen und durfte im Unterricht kein Handy benutzen. Mein Lieblingsfach war Geschichte, weil unser Lehrer viele interessante Geschichten erzählt hat. Mit meinen Freunden habe ich oft Projekte gemacht. Meiner Meinung nach lernt man durch Projekte sehr viel, aber kurze Tests sind auch sinnvoll.",
modelAr:"فترة مدرستي كانت في الغالب جميلة. كان لازم أصحى بدري ومكنش مسموح أستخدم الموبايل. التاريخ كان مادتي المفضلة لأن المدرس كان بيحكي قصص ممتعة."},
quiz:[
 Q("Früher ___ wir samstags zur Schule gehen.",["müssen","mussten","gemusst"],1,"Vergangenheit: mussten.","الماضي من müssen هو mussten."),
 Q("Ich ___ im Unterricht nicht essen.",["durfte","darfte","dürfen"],0,"dürfen → durfte.","الماضي من dürfen هو durfte."),
 Q("Mit ___ Lehrerin spreche ich oft.",["meine","meiner","meinem"],1,"Feminin Dativ: meiner.","مؤنث Dativ: meiner."),
 Q("Er erzählt von ___ Praktikum.",["seinem","seinen","seiner"],0,"Neutrum Dativ: seinem Praktikum.","محايد Dativ: seinem."),
 Q("„Meiner Meinung nach …“ benutzt man für …",["eine Bestellung","eine Meinung","eine Begrüßung"],1,"Die Wendung leitet eine Meinung ein.","التعبير بيبدأ الرأي."),
 Q("Eine berufliche Lernzeit heißt …",["Ausbildung","Freizeit","Speisekarte"],0,"Ausbildung = berufliches Lernen.","تدريب مهني.")
]
},
{
num:3,title:"Immer online?",titleAr:"دائمًا أونلاين؟ (الإعلام والسينما)",
subtitle:"Medien · Vergleiche · Meinungen · Film",
visual:{src:"assets/chapters/chapter-3.webp",alt:"Freunde nutzen Medien und sprechen über Filme",
 caption:"Medien bewusst nutzen, Vor- und Nachteile vergleichen und Filme beschreiben.",
 captionAr:"نستخدم الإعلام بوعي، نقارن المميزات والعيوب ونوصف أفلام."},
intro:"Du sprichst über Mediengewohnheiten, vergleichst Angebote, diskutierst Vor- und Nachteile und beschreibst Filme. Grammatik: Komparativ, Superlativ, Vergleiche mit als/wie und Nebensätze mit „dass“.",
introAr:"هتتكلم عن عادات استخدام الإعلام، تقارن الاختيارات، تناقش المميزات والعيوب وتوصف أفلام. القواعد: المقارنة والتفضيل وجمل dass.",
badges:["Medien","Komparativ","Superlativ","als / wie","dass","Film"],
goals:[S("Über Mediengewohnheiten sprechen","تتكلم عن عادات استخدام الإعلام"),S("Vor- und Nachteile nennen","تذكر المميزات والعيوب"),S("Dinge und Personen vergleichen","تقارن أشياء وأشخاص"),S("Die eigene Meinung mit „dass“ ausdrücken","تقول رأيك باستخدام dass"),S("Einen Film beschreiben und empfehlen","توصف فيلم وترشحه")],
vocab:[
 V("das Medium, Medien","Ein Mittel für Information oder Unterhaltung.","Radio und Internet sind verschiedene Medien.","وسيلة إعلام"),
 V("die Nachricht, -en","Eine neue Information über ein Ereignis.","Ich lese morgens die Nachrichten.","خبر / رسالة"),
 V("die Bildschirmzeit","Die Zeit vor Handy, Computer oder Fernseher.","Meine Bildschirmzeit ist heute zu lang.","وقت الشاشة"),
 V("herunterladen","Daten aus dem Internet auf ein Gerät holen.","Ich lade den Film herunter.","يحمّل"),
 V("hochladen","Daten vom Gerät ins Internet stellen.","Sie lädt ein Foto hoch.","يرفع ملفًا"),
 V("teilen","Etwas digital an andere schicken.","Bitte teile den Link mit mir.","يشارك"),
 V("der Vorteil, -e","Eine positive Seite.","Ein Vorteil ist der schnelle Zugang.","ميزة"),
 V("der Nachteil, -e","Eine negative Seite.","Ein Nachteil sind falsche Informationen.","عيب"),
 V("zuverlässig","So, dass man sich darauf verlassen kann.","Diese Quelle ist zuverlässig.","موثوق"),
 V("die Quelle, -n","Der Ort, von dem eine Information kommt.","Prüfe immer die Quelle.","مصدر"),
 V("die Handlung, -en","Die Geschichte eines Films oder Buches.","Die Handlung ist spannend.","أحداث / حبكة"),
 V("die Hauptfigur, -en","Die wichtigste Person in einer Geschichte.","Die Hauptfigur reist durch Europa.","الشخصية الرئيسية"),
 V("spannend","So interessant, dass man wissen will, wie es weitergeht.","Der Krimi ist sehr spannend.","مشوّق"),
 V("unterhaltsam","Angenehm und nicht langweilig.","Die Komödie ist leicht und unterhaltsam.","مسلّي"),
 V("die Bewertung, -en","Eine Meinung mit Punkten oder Sternen.","Der Film hat gute Bewertungen.","تقييم"),
 V("empfehlen","Sagen, dass jemand etwas sehen oder nutzen sollte.","Ich empfehle den Film ab zwölf Jahren.","يرشّح")
],
redemittel:[
 RM("Vor- und Nachteile","المميزات والعيوب",[
  ["Ein großer Vorteil ist, dass …","ميزة كبيرة هي إن ..."],
  ["Dagegen spricht, dass …","اللي ضد الموضوع إن ..."],
  ["Einerseits ist es praktisch, andererseits kostet es viel Zeit.","من ناحية هو عملي ومن ناحية تانية بياخد وقت."],
  ["Für mich überwiegen die Vorteile.","بالنسبة لي المميزات أكتر."]
 ]),
 RM("Vergleichen","المقارنة",[
  ["Podcasts sind flexibler als Radio.","البودكاست أكثر مرونة من الراديو."],
  ["Das Tablet ist genauso praktisch wie der Laptop.","التابلت عملي زي اللابتوب."],
  ["Von allen Apps nutze ich den Messenger am häufigsten.","من كل التطبيقات أستخدم المراسلة أكتر حاجة."]
 ]),
 RM("Über Filme sprechen","الكلام عن الأفلام",[
  ["Der Film handelt von …","الفيلم بيتكلم عن ..."],
  ["Die Hauptfigur ist …","الشخصية الرئيسية هي ..."],
  ["Mir hat besonders gefallen, dass …","عجبني خصوصًا إن ..."],
  ["Ich würde den Film empfehlen, weil …","أرشح الفيلم لأن ..."]
 ])
],
readings:[
 READ("Umfrage","Ein Tag ohne Smartphone",
  "Eine Gruppe von zwanzig Studierenden hat einen Tag lang auf das Smartphone verzichtet. Am Morgen fanden viele das Experiment schwieriger als erwartet. Sie konnten keine Fahrpläne prüfen und niemandem schnell schreiben. Am Nachmittag wurde die Stimmung besser. Einige lasen länger, andere führten ruhigere Gespräche. Am Ende sagten die meisten, dass das Smartphone praktisch ist, aber nicht jede freie Minute füllen sollte.",
  "مجموعة من الطلبة جرّبت يوم كامل بدون موبايل. في الأول كان أصعب من المتوقع، لكن بعد كده قرأوا أكتر واتكلموا بهدوء. معظمهم قال إن الموبايل عملي لكن مش لازم يملأ كل دقيقة.",
  [["verzichten auf","يستغنى عن"],["erwartet","متوقّع"],["füllen","يملأ"]],
  [["Wie viele Personen machten mit?","Zwanzig Studierende."],["Was war am Morgen schwierig?","Fahrpläne prüfen und schnell schreiben."],["Was war das Ergebnis?","Das Smartphone ist praktisch, soll aber nicht jede freie Minute füllen."]]),
 READ("Filmtipp","Der letzte Zug nach Norden",
  "Der Abenteuerfilm erzählt die Geschichte von Mina, einer jungen Fotografin. Sie findet in einem Zug eine alte Kamera und möchte ihren Besitzer suchen. Ihre Reise führt sie durch drei Länder. Die Handlung ist manchmal ruhig, aber die Figuren sind glaubwürdig und die Landschaften beeindruckend. Besonders schön ist, dass Mina unterwegs mutiger wird. Der Film ist länger als eine normale Komödie, aber keine Minute ist langweilig.",
  "فيلم مغامرة عن مصورة شابة تجد كاميرا قديمة في القطار وتبحث عن صاحبها عبر ثلاث دول. الأحداث هادئة أحيانًا لكن الشخصيات مقنعة والمناظر مبهرة.",
  [["glaubwürdig","مقنع / قابل للتصديق"],["beeindruckend","مبهر"],["mutig","شجاع"]],
  [["Was findet Mina?","Eine alte Kamera."],["Wie verändert sie sich?","Sie wird mutiger."],["Wie bewertet der Text den Film?","Lang, aber nicht langweilig."]])
],
grammar:[
 GR("Komparativ, Superlativ und Vergleiche","المقارنة والتفضيل",`
  <p>Komparativ: Adjektiv + <b>-er</b>. Superlativ: <b>am</b> + Adjektiv + <b>-sten</b>.</p>
  <div class="gt-wrap"><table class="gt"><tr><th>Positiv</th><th>Komparativ</th><th>Superlativ</th></tr>
  <tr><td>schnell</td><td>schneller</td><td>am schnellsten</td></tr><tr><td>interessant</td><td>interessanter</td><td>am interessantesten</td></tr>
  <tr><td>gut</td><td>besser</td><td>am besten</td></tr><tr><td>viel</td><td>mehr</td><td>am meisten</td></tr></table></div>
  <p>Unterschied: <b>als</b> · Gleichheit: <b>so/genauso … wie</b>.</p>
  <div class="exbox">Ein E-Book ist leichter <b>als</b> ein Wörterbuch. Ein Tablet ist genauso praktisch <b>wie</b> ein Laptop.</div>`),
 GR("Nebensatz mit dass","الجملة الفرعية باستخدام dass",`
  <p>Mit <b>dass</b> berichtet man Gedanken, Meinungen oder Informationen. Das Verb steht am Ende.</p>
  <div class="exbox">Ich finde, <b>dass der Film spannend ist</b>.<br>Viele sagen, <b>dass sie zu viel Zeit online verbringen</b>.</div>
  <div class="ar">dass معناها «إن». بنستخدمها بعد الرأي أو المعلومة والفعل ييجي في آخر الجملة.</div>`)
],
speaking:{questions:[S("Wie viel Zeit verbringst du täglich online?","بتقضي وقت قد إيه أونلاين يوميًا؟"),S("Welche Medien sind für dich am wichtigsten?","أنهي وسائل إعلام أهم بالنسبة ليك؟"),S("Was sind Vor- und Nachteile sozialer Medien?","إيه مميزات وعيوب السوشيال ميديا؟"),S("Beschreibe einen Film, den du empfehlen kannst.","اوصف فيلم تقدر ترشحه.")],
model:"Ich nutze mein Smartphone jeden Tag, besonders für Nachrichten und Sprachenlernen. Podcasts finde ich interessanter als kurze Videos, weil ich dabei mehr lerne. Ich glaube, dass soziale Medien praktisch sind, aber man muss zuverlässige Quellen prüfen. Mein Lieblingsfilm handelt von einer langen Reise. Die Hauptfigur ist mutig, und die Handlung ist sehr spannend.",
modelAr:"بستخدم الموبايل كل يوم للأخبار وتعلم اللغات. شايف البودكاست أمتع من الفيديوهات القصيرة، وأعتقد إن السوشيال ميديا عملية لكن لازم نراجع المصادر."},
quiz:[
 Q("Ein Laptop ist ___ als ein Handy.",["groß","größer","am größten"],1,"Komparativ: größer.","صيغة المقارنة: größer."),
 Q("Diese App ist genauso praktisch ___ jene.",["als","wie","dass"],1,"Gleichheit: genauso … wie.","التساوي باستخدام wie."),
 Q("Von allen Filmen ist dieser ___.",["spannender","am spannendsten","so spannend"],1,"Superlativ mit am.","التفضيل مع am."),
 Q("Ich glaube, dass der Film gut ___.",["ist","sein","war ist"],0,"Im dass-Satz steht das Verb am Ende.","الفعل في آخر جملة dass."),
 Q("Die wichtigste Person im Film ist …",["die Quelle","die Hauptfigur","die Bewertung"],1,"Hauptfigur = zentrale Person.","الشخصية الرئيسية."),
 Q("Eine positive Seite heißt …",["Vorteil","Nachteil","Handlung"],0,"Vorteil = positive Seite.","ميزة.")
]
},
{
num:4,title:"Große und kleine Gefühle",titleAr:"مشاعر كبيرة وصغيرة",
subtitle:"Gefühle · Feste · Glückwünsche · Dank",
visual:{src:"assets/chapters/chapter-4.webp",alt:"Freunde feiern und zeigen verschiedene Gefühle",
 caption:"Gefühle ausdrücken, gratulieren, danken und über besondere Ereignisse sprechen.",
 captionAr:"نعبر عن المشاعر، نهنئ، نشكر ونتكلم عن أحداث مميزة."},
intro:"Du beschreibst Gefühle und Ereignisse, gratulierst, bedankst dich und reagierst auf gute oder schlechte Nachrichten. Grammatik: Nebensätze mit „wenn“ und reflexive Verben.",
introAr:"هتوصف مشاعر وأحداث، تهنئ وتشكر وترد على الأخبار الحلوة أو الصعبة. القواعد: جمل wenn والأفعال الانعكاسية.",
badges:["Gefühle","Feste","wenn","reflexive Verben","Glückwünsche"],
goals:[S("Gefühle genau benennen","تسمي المشاعر بدقة"),S("Gratulieren und sich bedanken","تهنئ وتشكر"),S("Freude und Bedauern ausdrücken","تعبر عن الفرح والأسف"),S("Über ein Fest oder Ereignis berichten","تحكي عن احتفال أو حدث"),S("Reflexive Verben korrekt verwenden","تستخدم الأفعال الانعكاسية صح")],
vocab:[
 V("das Gefühl, -e","Eine innere Reaktion wie Freude oder Angst.","Ich kann dieses Gefühl schwer beschreiben.","إحساس / شعور"),
 V("sich freuen","Glücklich sein oder etwas gern erwarten.","Ich freue mich auf das Fest.","يفرح / يتطلع"),
 V("sich ärgern","Wütend oder unzufrieden werden.","Er ärgert sich über die Verspätung.","يتضايق"),
 V("sich wundern","Etwas überraschend finden.","Ich wundere mich über die Nachricht.","يستغرب"),
 V("sich entspannen","Ruhig werden und Stress verlieren.","Am Wochenende entspanne ich mich.","يسترخي"),
 V("aufgeregt","Nervös und gespannt zugleich.","Vor der Feier war sie sehr aufgeregt.","متحمس ومتوتر"),
 V("enttäuscht","Traurig, weil etwas nicht wie erwartet ist.","Er ist vom Ergebnis enttäuscht.","محبط"),
 V("stolz","Sehr zufrieden mit einer Leistung.","Ihre Eltern sind stolz auf sie.","فخور"),
 V("die Feier, -n","Ein Fest für einen besonderen Anlass.","Die Feier beginnt um sieben.","احتفال"),
 V("der Anlass, ⸚e","Der Grund für ein Fest oder Ereignis.","Was ist der Anlass für die Feier?","مناسبة / سبب"),
 V("gratulieren","Gute Wünsche zu einem Erfolg oder Fest sagen.","Ich gratuliere dir zum Geburtstag.","يهنّئ"),
 V("der Glückwunsch, ⸚e","Ein freundlicher Wunsch zu einem Ereignis.","Herzlichen Glückwunsch zur Prüfung!","تهنئة"),
 V("sich bedanken","Danke sagen.","Ich bedanke mich für das Geschenk.","يشكر"),
 V("das Bedauern","Das Gefühl: Etwas tut einem leid.","Sie drückt ihr Bedauern aus.","أسف"),
 V("stattfinden","Zu einer bestimmten Zeit passieren.","Das Konzert findet im Hof statt.","يُقام"),
 V("die Erinnerung, -en","Etwas Vergangenes, an das man denkt.","Die Fotos sind schöne Erinnerungen.","ذكرى")
],
redemittel:[
 RM("Gratulieren und danken","التهنئة والشكر",[
  ["Herzlichen Glückwunsch zum Geburtstag!","كل سنة وأنت طيب!"],
  ["Ich gratuliere dir zur bestandenen Prüfung.","أهنئك على نجاحك في الامتحان."],
  ["Vielen Dank, das ist wirklich lieb von dir.","شكرًا جدًا، ده لطف منك."],
  ["Ich habe mich sehr über dein Geschenk gefreut.","فرحت جدًا بهديتك."]
 ]),
 RM("Auf Nachrichten reagieren","الرد على الأخبار",[
  ["Das freut mich wirklich für dich!","أنا فرحان لك جدًا!"],
  ["Wie schön! Erzähl doch mal.","جميل جدًا! احكي بقى."],
  ["Das tut mir leid. Wie geht es dir jetzt?","أنا آسف. عامل إيه دلوقتي؟"],
  ["Schade, dass du nicht kommen kannst.","خسارة إنك مش هتقدر تيجي."]
 ]),
 RM("Gefühle beschreiben","وصف المشاعر",[
  ["Wenn ich gute Nachrichten bekomme, freue ich mich sehr.","لما بيجيلي خبر حلو بفرح جدًا."],
  ["Ich war zuerst nervös, dann aber sehr erleichtert.","كنت متوتر في الأول وبعدين ارتحت جدًا."],
  ["Ich ärgere mich darüber, dass …","أنا متضايق إن ..."]
 ])
],
readings:[
 READ("Blog","Eine Feier mit Überraschung",
  "Zu meinem dreißigsten Geburtstag wollte ich nur mit meiner Familie essen. Als ich ins Restaurant kam, warteten dort aber auch viele Freunde. Zuerst war ich völlig überrascht und ein bisschen sprachlos. Dann habe ich mich riesig gefreut. Meine Schwester hatte alles organisiert. Wenn ich heute die Fotos sehe, muss ich sofort lächeln. Ich bin ihr sehr dankbar, denn dieser Abend bleibt eine besondere Erinnerung.",
  "في عيد ميلادي الثلاثين كنت فاكر إني هتعشى مع عيلتي بس، لكن لقيت أصحابي مستنيين. اتفاجئت وفرحت جدًا وأختي كانت منظمة كل حاجة.",
  [["sprachlos","مش قادر يتكلم من المفاجأة"],["riesig","بشكل كبير جدًا"],["dankbar","ممتن"]],
  [["Was hatte die Person erwartet?","Ein Essen nur mit der Familie."],["Wer organisierte die Überraschung?","Die Schwester."],["Was passiert beim Ansehen der Fotos?","Die Person muss lächeln."]]),
 READ("Nachricht","Alles wieder gut",
  "Gestern habe ich mich mit meiner besten Freundin gestritten. Ich war enttäuscht, weil sie unseren Termin vergessen hatte. Sie hat sich später entschuldigt und erklärt, dass sie einen schwierigen Tag hatte. Wenn wir uns streiten, brauchen wir beide zuerst etwas Ruhe. Danach können wir meistens offen sprechen. Heute haben wir zusammen Kaffee getrunken. Jetzt ist alles wieder gut, und ich bin erleichtert.",
  "امبارح اتخانقت مع صاحبتي لأنها نسيت ميعادنا. اعتذرت وشرحت إن يومها كان صعب. بعد ما هدينا اتكلمنا والنهارده كل حاجة رجعت كويسة.",
  [["sich streiten","يتشاجر"],["offen","بصراحة"],["erleichtert","مرتاح بعد قلق"]],
  [["Warum war die Person enttäuscht?","Die Freundin hatte den Termin vergessen."],["Was brauchen beide nach einem Streit?","Zuerst etwas Ruhe."],["Wie ist die Situation heute?","Alles ist wieder gut."]])
],
grammar:[
 GR("Nebensatz mit wenn","الجملة الفرعية باستخدام wenn",`
  <p><b>wenn</b> beschreibt eine Bedingung oder etwas, das regelmäßig passiert. Das Verb steht am Ende.</p>
  <div class="exbox"><b>Wenn ich Geburtstag habe</b>, lade ich Freunde ein.<br>Ich freue mich, <b>wenn du kommst</b>.</div>
  <div class="ar">wenn معناها «لما/إذا». تستخدم لشرط أو حدث متكرر، والفعل يذهب لآخر الجملة.</div>`),
 GR("Reflexive Verben","الأفعال الانعكاسية",`
  <p>Das Reflexivpronomen bezieht sich auf das Subjekt.</p>
  <div class="gt-wrap"><table class="gt"><tr><th>Person</th><th>Pronomen</th><th>Beispiel</th></tr>
  <tr><td>ich</td><td>mich</td><td>Ich freue <b>mich</b>.</td></tr><tr><td>du</td><td>dich</td><td>Du ärgerst <b>dich</b>.</td></tr>
  <tr><td>er/sie/es</td><td>sich</td><td>Sie bedankt <b>sich</b>.</td></tr><tr><td>wir/ihr/sie</td><td>uns/euch/sich</td><td>Wir treffen <b>uns</b>.</td></tr></table></div>
  <div class="notebox">Präpositionen mitlernen: sich freuen <b>auf</b> (Zukunft), sich freuen <b>über</b> (jetzt/geschehen), sich bedanken <b>für</b>.</div>`)
],
speaking:{questions:[S("Wann hast du dich zuletzt sehr gefreut?","آخر مرة فرحت جدًا كانت إمتى؟"),S("Wie gratulierst du Freunden?","بتهنئ أصحابك إزاي؟"),S("Was machst du, wenn du schlechte Laune hast?","بتعمل إيه لما مزاجك يكون وحش؟"),S("Erzähl von einem besonderen Fest.","احكي عن احتفال مميز.")],
model:"Wenn ich gute Nachrichten bekomme, rufe ich zuerst meine Familie an. Letztes Jahr habe ich meine Prüfung bestanden. Meine Freunde haben mir gratuliert und eine kleine Feier organisiert. Ich habe mich sehr über die Überraschung gefreut und mich bei allen bedankt. Vor der Prüfung war ich aufgeregt, danach war ich stolz und erleichtert.",
modelAr:"لما بيجيلي خبر حلو بكلم عيلتي الأول. السنة اللي فاتت نجحت وأصحابي عملوا احتفال صغير. فرحت بالمفاجأة وشكرتهم."},
quiz:[
 Q("Wenn ich traurig ___, spreche ich mit Freunden.",["bin","bist","sein"],0,"Das Verb steht am Ende des wenn-Satzes.","الفعل في آخر جملة wenn."),
 Q("Ich freue ___ auf die Feier.",["mich","mir","sich"],0,"ich → mich.","مع ich نستخدم mich."),
 Q("Wir treffen ___ um acht Uhr.",["euch","uns","sich"],1,"wir → uns.","مع wir نستخدم uns."),
 Q("Sie bedankt sich ___ das Geschenk.",["auf","für","über"],1,"sich bedanken für.","يشكر على = sich bedanken für."),
 Q("Was sagt man nach einem Erfolg?",["Herzlichen Glückwunsch!","Das ist verboten.","Gute Fahrt."],0,"Glückwünsche passen zu einem Erfolg.","تهنئة مناسبة للنجاح."),
 Q("„enttäuscht“ bedeutet …",["فخور","محبط","مرتاح"],1,"enttäuscht = محبط.","enttäuscht يعني محبط.")
]
},
{
num:5,title:"Leben in der Stadt",titleAr:"الحياة في المدينة",
subtitle:"Stadt · Bewerbung · Bank · Behörde · höfliche Bitten",
visual:{src:"assets/chapters/chapter-5.webp",alt:"Menschen erledigen Dinge in einer modernen Stadt",
 caption:"Sich in der Stadt orientieren, Gespräche bei Arbeit, Bank und Behörde führen.",
 captionAr:"نتحرك في المدينة ونتعامل في مقابلة عمل والبنك والمصالح."},
intro:"Du verstehst Vorstellungsgespräche, fragst nach Dingen, erledigst Termine bei Bank und Behörde und bittest höflich um Hilfe. Grammatik: Adjektive nach dem bestimmten Artikel, Präpositionen mit/ohne und Konjunktiv II mit „könnte“.",
introAr:"هتفهم مقابلة شغل، تسأل عن حاجات، تتعامل في البنك والمصالح وتطلب المساعدة بأدب. القواعد: نهايات الصفات بعد أداة التعريف وmit/ohne وkönnte.",
badges:["Stadt","Bewerbung","Behörde","Adjektivdeklination","könnte","mit / ohne"],
goals:[S("Ein Vorstellungsgespräch verstehen und führen","تفهم وتعمل مقابلة شغل"),S("Bei Bank und Behörde Informationen erfragen","تسأل عن معلومات في البنك والمصلحة"),S("Höflich um etwas bitten","تطلب حاجة بأدب"),S("Eine Stadttour verstehen und einen Ort beschreiben","تفهم جولة وتوصف مكان"),S("Adjektivendungen korrekt verwenden","تستخدم نهايات الصفات صح")],
vocab:[
 V("die Innenstadt, ⸚e","Der zentrale Teil einer Stadt.","In der Innenstadt gibt es viele Geschäfte.","وسط المدينة"),
 V("das Viertel, -","Ein Teil einer Stadt.","Wir wohnen in einem ruhigen Viertel.","حي"),
 V("die Behörde, -n","Eine staatliche Stelle für offizielle Aufgaben.","Ich habe morgen einen Termin bei der Behörde.","مصلحة حكومية"),
 V("das Formular, -e","Ein Dokument mit Feldern zum Ausfüllen.","Bitte füllen Sie das Formular aus.","استمارة"),
 V("der Ausweis, -e","Ein offizielles Dokument mit Foto.","Bringen Sie Ihren Ausweis mit.","بطاقة هوية"),
 V("beantragen","Offiziell um ein Dokument bitten.","Sie möchte einen neuen Ausweis beantragen.","يقدّم طلبًا رسميًا"),
 V("das Konto, Konten","Ein Platz bei einer Bank für Geld.","Ich möchte ein Konto eröffnen.","حساب بنكي"),
 V("überweisen","Geld auf ein anderes Konto schicken.","Ich überweise die Miete jeden Monat.","يحوّل مالًا"),
 V("die Bewerbung, -en","Unterlagen und Anfrage für eine Arbeitsstelle.","Er schickt heute seine Bewerbung.","طلب توظيف"),
 V("das Vorstellungsgespräch, -e","Ein Gespräch vor einer möglichen Einstellung.","Das Vorstellungsgespräch dauert eine Stunde.","مقابلة عمل"),
 V("die Stelle, -n","Ein Arbeitsplatz oder eine Position.","Die Firma bietet eine interessante Stelle an.","وظيفة"),
 V("die Voraussetzung, -en","Etwas, das notwendig ist.","Deutschkenntnisse sind eine Voraussetzung.","شرط مطلوب"),
 V("zuständig","Für eine Aufgabe verantwortlich.","Welche Abteilung ist dafür zuständig?","مسؤول / مختص"),
 V("erledigen","Eine Aufgabe vollständig machen.","Ich muss heute viele Termine erledigen.","ينجز"),
 V("die Sehenswürdigkeit, -en","Ein bekannter interessanter Ort.","Der Dom ist eine wichtige Sehenswürdigkeit.","مَعلم سياحي"),
 V("der Rundgang, ⸚e","Ein Weg durch einen Ort mit mehreren Stationen.","Der Rundgang dauert neunzig Minuten.","جولة")
],
redemittel:[
 RM("Im Vorstellungsgespräch","في مقابلة العمل",[
  ["Warum interessieren Sie sich für diese Stelle?","ليه مهتم بالوظيفة دي؟"],
  ["Ich habe bereits Erfahrung im Bereich …","عندي خبرة بالفعل في مجال ..."],
  ["Zu meinen Stärken gehören …","من نقاط قوتي ..."],
  ["Ab wann könnten Sie bei uns anfangen?","تقدر تبدأ عندنا من إمتى؟"]
 ]),
 RM("Bei Bank und Behörde","في البنك والمصلحة",[
  ["Ich möchte gern ein Konto eröffnen.","أحب أفتح حساب."],
  ["Welche Unterlagen brauche ich dafür?","محتاج أنهي أوراق لكده؟"],
  ["Könnten Sie mir bitte erklären, wo ich unterschreiben muss?","ممكن توضح لي أمضي فين؟"],
  ["Wer ist für diesen Antrag zuständig?","مين المختص بالطلب ده؟"]
 ]),
 RM("Eine Stadt beschreiben","وصف مدينة",[
  ["Im Zentrum befindet sich …","في المركز يوجد ..."],
  ["Das Viertel ist bekannt für …","الحي مشهور بـ ..."],
  ["Besonders sehenswert ist …","من الأماكن الجديرة بالزيارة ..."]
 ])
],
readings:[
 READ("Dialog","Ein Termin im Bürgerbüro",
  "Nora möchte ihren neuen Wohnort anmelden. Am Empfang fragt sie, welche Unterlagen sie braucht. Die Mitarbeiterin erklärt, dass Nora ihren Ausweis und eine Bestätigung vom Vermieter mitbringen muss. Nora hat die Bestätigung nicht dabei. Freundlich fragt sie: „Könnte ich das Dokument morgen nachreichen?“ Die Mitarbeiterin stimmt zu und gibt ihr einen neuen Termin. Das Gespräch dauert nur wenige Minuten.",
  "نورا عايزة تسجل عنوانها الجديد. الموظفة قالت إنها محتاجة البطاقة وتأكيد من صاحب البيت. الورقة مش معاها فطلبت بأدب تسلمها بكرة.",
  [["anmelden","يسجّل رسميًا"],["die Bestätigung","تأكيد / إثبات"],["nachreichen","يسلّم لاحقًا"]],
  [["Was möchte Nora anmelden?","Ihren neuen Wohnort."],["Welches Dokument fehlt?","Die Bestätigung vom Vermieter."],["Was bekommt Nora?","Einen neuen Termin."]]),
 READ("Stadtporträt","Ein Viertel verändert sich",
  "Das alte Hafenviertel war früher ein ruhiger Arbeitsort. Heute stehen zwischen den alten Lagerhäusern moderne Wohnungen, kleine Cafés und kreative Werkstätten. Die breiten Straßen sind am Wochenende für Autos gesperrt. Dann kommen Familien, Musiker und Marktstände. Einige Bewohner finden, dass das Viertel lebendiger geworden ist. Andere vermissen die günstigen Mieten und die ruhige Atmosphäre von früher.",
  "منطقة الميناء القديمة كانت مكان شغل هادي. دلوقتي فيها شقق حديثة وكافيهات وورش فنية. بعض السكان شايفينها بقت أحسن والبعض مفتقد الهدوء والإيجارات الرخيصة.",
  [["das Lagerhaus","مخزن كبير"],["gesperrt","مغلق أمام المرور"],["vermissen","يفتقد"]],
  [["Was gibt es heute im Viertel?","Wohnungen, Cafés und Werkstätten."],["Wann sind Straßen gesperrt?","Am Wochenende."],["Warum sind nicht alle zufrieden?","Manche vermissen günstige Mieten und Ruhe."]])
],
grammar:[
 GR("Adjektive nach dem bestimmten Artikel","نهايات الصفات بعد أداة التعريف",`
  <p>Nach <b>der/die/das</b> zeigt der Artikel den Kasus. Das Adjektiv bekommt meistens <b>-e</b> oder <b>-en</b>.</p>
  <div class="gt-wrap"><table class="gt"><tr><th></th><th>maskulin</th><th>feminin</th><th>neutrum</th><th>Plural</th></tr>
  <tr><td>Nominativ</td><td>der neu<b>e</b> Job</td><td>die neu<b>e</b> Stelle</td><td>das neu<b>e</b> Büro</td><td>die neu<b>en</b> Büros</td></tr>
  <tr><td>Akkusativ</td><td>den neu<b>en</b> Job</td><td>die neu<b>e</b> Stelle</td><td>das neu<b>e</b> Büro</td><td>die neu<b>en</b> Büros</td></tr>
  <tr><td>Dativ</td><td colspan="4">dem/der/den + Adjektiv<b>-en</b></td></tr></table></div>`),
 GR("mit + Dativ, ohne + Akkusativ, könnte","mit مع Dativ وohne مع Akkusativ والطلب بـ könnte",`
  <div class="exbox">Ich komme <b>mit dem neuen Ausweis</b>. Ohne <b>die richtige Bestätigung</b> geht es nicht.</div>
  <p><b>könnte</b> macht Bitten freundlich: <b>Könnten Sie mir bitte helfen?</b> · <b>Könnte ich morgen kommen?</b></p>
  <div class="ar">mit دايمًا معها Dativ، وohne معها Akkusativ. könnte بتخلي الطلب مهذب.</div>`)
],
speaking:{questions:[S("Was gefällt dir an deiner Stadt?","إيه اللي بيعجبك في مدينتك؟"),S("Wie bereitest du dich auf ein Vorstellungsgespräch vor?","بتحضّر لمقابلة شغل إزاي؟"),S("Welche Termine erledigt man bei Behörden?","إيه المواعيد اللي بنعملها في المصالح؟"),S("Bitte höflich um drei verschiedene Dinge.","اطلب ثلاث حاجات مختلفة بأدب.")],
model:"Ich wohne in einem lebendigen Viertel nahe der Innenstadt. Besonders gefällt mir der große Park. Letzte Woche hatte ich einen Termin bei einer Behörde. Ich wollte einen neuen Ausweis beantragen. Die freundliche Mitarbeiterin hat mir das Formular erklärt. Ich fragte: „Könnten Sie mir bitte zeigen, wo ich unterschreiben muss?“ Mit ihrer Hilfe war alles schnell erledigt.",
modelAr:"ساكن في حي حيوي قريب من وسط المدينة. الأسبوع اللي فات كان عندي ميعاد في مصلحة عشان أقدم على بطاقة جديدة. طلبت من الموظفة بأدب توضح لي أمضي فين."},
quiz:[
 Q("Ich sehe den ___ Park.",["große","großen","großes"],1,"Akkusativ maskulin: den großen Park.","مذكر Akkusativ: großen."),
 Q("Wir besuchen die ___ Behörde.",["neue","neuen","neuer"],0,"Akkusativ feminin: die neue Behörde.","مؤنث Akkusativ: neue."),
 Q("Ich komme mit ___ Ausweis.",["den neuen","dem neuen","der neue"],1,"mit + Dativ: dem neuen.","mit معها Dativ."),
 Q("Ohne ___ Formular geht es nicht.",["das richtige","dem richtigen","der richtigen"],0,"ohne + Akkusativ: das richtige.","ohne معها Akkusativ."),
 Q("Welche Bitte ist am höflichsten?",["Hilf mir!","Du hilfst mir.","Könnten Sie mir bitte helfen?"],2,"Konjunktiv II klingt höflich.","könnte أكثر أدبًا."),
 Q("Ein offizieller Antrag wird oft bei einer … gestellt.",["Behörde","Speisekarte","Feier"],0,"Behörde = staatliche Stelle.","مصلحة حكومية.")
]
},
{
num:6,title:"Arbeitswelten",titleAr:"عوالم العمل",
subtitle:"Berufe · Bahnreisen · Veranstaltungen · Telefon",
visual:{src:"assets/chapters/chapter-6.webp",alt:"Menschen arbeiten, telefonieren und planen eine Reise",
 caption:"Über Berufe und Wünsche sprechen, Bahnreisen planen und professionell telefonieren.",
 captionAr:"نتكلم عن المهن والأمنيات، نخطط لرحلات القطار ونتصل بشكل مهني."},
intro:"Du sprichst über Tätigkeiten und Berufswünsche, verstehst Reise- und Veranstaltungsinformationen und führst berufliche Telefongespräche. Grammatik: Adjektive nach dem unbestimmten Artikel und das Verb „werden“.",
introAr:"هتتكلم عن مهام الشغل وأمنياتك المهنية، تفهم معلومات السفر والفعاليات، وتعمل مكالمات شغل. القواعد: نهايات الصفات بعد ein وwerden.",
badges:["Berufe","Bahnreise","Veranstaltung","Telefon","Adjektivdeklination","werden"],
goals:[S("Tätigkeiten und Berufe beschreiben","توصف مهام ومهن"),S("Berufswünsche äußern","تقول أمنياتك المهنية"),S("Informationen zu Bahnreisen erfragen","تسأل عن رحلة قطار"),S("Ein Telefongespräch vorbereiten und führen","تحضر وتعمل مكالمة"),S("Personen und Veranstaltungen vorstellen","تقدم أشخاص وفعاليات")],
vocab:[
 V("die Tätigkeit, -en","Eine konkrete Aufgabe im Beruf.","Zu meinen Tätigkeiten gehört die Kundenberatung.","مهمة / نشاط"),
 V("die Abteilung, -en","Ein Bereich in einer Firma.","Sie arbeitet in der Personalabteilung.","قسم"),
 V("die Schicht, -en","Eine feste Arbeitszeit am Tag oder in der Nacht.","Diese Woche habe ich Frühschicht.","وردية"),
 V("die Bewerbung, -en","Unterlagen für eine Arbeitsstelle.","Die Bewerbung ist schon abgeschickt.","طلب توظيف"),
 V("der Traumberuf, -e","Der Beruf, den man besonders gern machen möchte.","Pilotin war lange ihr Traumberuf.","مهنة الأحلام"),
 V("selbstständig","Mit einer eigenen Firma oder ohne festen Arbeitgeber.","Er arbeitet als selbstständiger Designer.","يعمل لحسابه"),
 V("zuständig für","Für eine Aufgabe verantwortlich.","Ich bin für neue Kunden zuständig.","مسؤول عن"),
 V("die Verbindung, -en","Eine Reisemöglichkeit zwischen zwei Orten.","Gibt es eine direkte Verbindung nach Basel?","وصلة / رحلة مواصلات"),
 V("umsteigen","Von einem Zug oder Bus in einen anderen wechseln.","In Mannheim müssen Sie umsteigen.","يغيّر القطار"),
 V("der Anschluss, ⸚e","Der nächste passende Zug oder Bus.","Wir haben nur zehn Minuten bis zum Anschluss.","وصلة المواصلات التالية"),
 V("die Veranstaltung, -en","Ein organisiertes öffentliches Ereignis.","Die Veranstaltung beginnt um acht.","فعالية"),
 V("der Vortrag, ⸚e","Eine längere mündliche Präsentation.","Der Vortrag handelt von moderner Arbeit.","محاضرة"),
 V("verbinden","Einen Telefonanruf zu einer Person weiterleiten.","Ich verbinde Sie mit Frau König.","يحوّل المكالمة"),
 V("hinterlassen","Etwas für eine Person da lassen.","Möchten Sie eine Nachricht hinterlassen?","يترك رسالة"),
 V("zurückrufen","Später wieder anrufen.","Herr Yilmaz ruft Sie zurück.","يعيد الاتصال"),
 V("erreichbar","So, dass man jemanden kontaktieren kann.","Ich bin ab drei Uhr erreichbar.","متاح للاتصال")
],
redemittel:[
 RM("Über Berufe sprechen","الكلام عن المهن",[
  ["Ich bin hauptsächlich für … zuständig.","أنا مسؤول أساسًا عن ..."],
  ["Zu meinen Aufgaben gehört …","من مهامي ..."],
  ["Später möchte ich gern … werden.","في المستقبل أحب أصبح ..."],
  ["An diesem Beruf gefällt mir besonders …","اللي يعجبني خصوصًا في المهنة دي ..."]
 ]),
 RM("Am Fahrkartenschalter","في شباك التذاكر",[
  ["Ich hätte gern eine Fahrkarte nach …","عايز تذكرة إلى ..."],
  ["Gibt es eine direkte Verbindung?","في رحلة مباشرة؟"],
  ["Wo und wann muss ich umsteigen?","أغيّر فين وإمتى؟"],
  ["Von welchem Gleis fährt der Zug ab?","القطار من رصيف كام؟"]
 ]),
 RM("Am Telefon","في مكالمة العمل",[
  ["Guten Tag, hier spricht … von der Firma …","مرحبًا، مع حضرتك ... من شركة ..."],
  ["Könnten Sie mich bitte mit Frau … verbinden?","ممكن تحولني للأستاذة ...؟"],
  ["Sie ist gerade nicht erreichbar. Möchten Sie eine Nachricht hinterlassen?","هي مش متاحة حاليًا. تحب تترك رسالة؟"],
  ["Könnten Sie mich bitte zurückrufen?","ممكن تتصل بي لاحقًا؟"]
 ])
],
readings:[
 READ("Porträt","Ein Beruf zwischen Technik und Menschen",
  "Jonas ist Veranstaltungstechniker. Er baut Licht- und Tontechnik für Konzerte und Vorträge auf. Kein Arbeitstag ist genau wie der andere. Manchmal beginnt seine Schicht am frühen Morgen, manchmal endet sie erst nach Mitternacht. Jonas wollte früher Musiker werden, aber während eines Praktikums entdeckte er die Technik hinter der Bühne. Heute gefällt ihm besonders, dass er praktisch arbeitet und viele verschiedene Menschen trifft.",
  "يوناس فني فعاليات بيركب الإضاءة والصوت للحفلات والمحاضرات. مواعيده متغيرة. كان عايز يبقى موسيقي لكن اكتشف في التدريب إنه يحب التقنية خلف المسرح.",
  [["aufbauen","يركّب / يجهز"],["die Tontechnik","تقنيات الصوت"],["entdecken","يكتشف"]],
  [["Was baut Jonas auf?","Licht- und Tontechnik."],["Was wollte er früher werden?","Musiker."],["Was gefällt ihm?","Praktische Arbeit und verschiedene Menschen."]]),
 READ("Telefonnotiz","Bitte um Rückruf",
  "Guten Morgen, hier spricht Elena Rossi von der Firma Nordlicht. Ich rufe wegen der Veranstaltung am 18. September an. Wir brauchen noch die genaue Zahl der Teilnehmenden und Informationen zur Technik. Herr Baumann ist heute nicht erreichbar. Seine Kollegin notiert Elenas Telefonnummer und verspricht, dass er am Nachmittag zurückruft. Elena wiederholt die Nummer langsam und bestätigt zum Schluss noch einmal den Termin.",
  "إيلينا بتتصل بخصوص فعالية يوم 18 سبتمبر وعايزة عدد المشاركين ومعلومات التقنية. الأستاذ باومان مش متاح، فزميلته أخذت الرقم ووعدت إنه يتصل بعد الظهر.",
  [["wegen","بسبب / بخصوص"],["notieren","يدوّن"],["bestätigen","يؤكد"]],
  [["Warum ruft Elena an?","Wegen der Veranstaltung."],["Welche Informationen braucht sie?","Teilnehmendenzahl und Technik."],["Wann ruft Herr Baumann zurück?","Am Nachmittag."]])
],
grammar:[
 GR("Adjektive nach ein/kein/mein","نهايات الصفات بعد ein/kein/ضمير الملكية",`
  <p>Der Artikel zeigt nicht immer alle Informationen. Deshalb trägt das Adjektiv wichtige Endungen.</p>
  <div class="gt-wrap"><table class="gt"><tr><th></th><th>maskulin</th><th>feminin</th><th>neutrum</th></tr>
  <tr><td>Nominativ</td><td>ein neu<b>er</b> Kollege</td><td>eine neu<b>e</b> Stelle</td><td>ein neu<b>es</b> Projekt</td></tr>
  <tr><td>Akkusativ</td><td>einen neu<b>en</b> Kollegen</td><td>eine neu<b>e</b> Stelle</td><td>ein neu<b>es</b> Projekt</td></tr>
  <tr><td>Dativ</td><td colspan="3">einem/einer + Adjektiv<b>-en</b></td></tr></table></div>`),
 GR("werden","الفعل werden",`
  <p><b>werden + Nomen</b> beschreibt einen Beruf oder eine neue Rolle. <b>werden + Adjektiv</b> beschreibt eine Veränderung.</p>
  <div class="gt-wrap"><table class="gt"><tr><th>ich</th><td>werde</td><th>wir</th><td>werden</td></tr>
  <tr><th>du</th><td>wirst</td><th>ihr</th><td>werdet</td></tr><tr><th>er/sie/es</th><td>wird</td><th>sie/Sie</th><td>werden</td></tr></table></div>
  <div class="exbox">Ich möchte Ingenieurin <b>werden</b>. · Die Arbeit <b>wird</b> digitaler. · Es <b>wird</b> spät.</div>`)
],
speaking:{questions:[S("Was machst du beruflich oder was möchtest du werden?","بتشتغل إيه أو حابب تبقى إيه؟"),S("Welche Tätigkeiten gefallen dir?","أنهي مهام بتعجبك؟"),S("Wie fragst du nach einer Zugverbindung?","تسأل عن رحلة قطار إزاي؟"),S("Führe ein kurzes berufliches Telefongespräch.","اعمل مكالمة شغل قصيرة.")],
model:"Ich arbeite zurzeit im Verkauf und bin für die Beratung neuer Kunden zuständig. Später möchte ich Teamleiter werden. Mir gefällt, dass jeder Arbeitstag anders ist. Beruflich telefoniere ich oft: Ich stelle mich vor, erkläre kurz den Grund meines Anrufs und hinterlasse eine Nachricht, wenn die Person nicht erreichbar ist. Für Dienstreisen suche ich meistens eine direkte Zugverbindung.",
modelAr:"أعمل حاليًا في المبيعات ومسؤول عن العملاء الجدد. أحب أصبح قائد فريق. في مكالمات الشغل أقدم نفسي وأشرح سبب الاتصال وأترك رسالة لو الشخص مش متاح."},
quiz:[
 Q("Das ist ein ___ Beruf.",["interessanter","interessante","interessanten"],0,"Nominativ maskulin nach ein: interessanter.","مذكر Nominativ بعد ein: -er."),
 Q("Sie sucht eine ___ Stelle.",["neuen","neue","neuer"],1,"Feminin: eine neue Stelle.","مؤنث: neue."),
 Q("Ich spreche mit einem ___ Kunden.",["neuer","neuen","neues"],1,"Dativ: einem neuen Kunden.","Dativ: -en."),
 Q("Mein Bruder ___ Arzt.",["wird","werdet","wirst"],0,"er → wird.","مع er نستخدم wird."),
 Q("Ich möchte Designerin ___.",["sein geworden","werden","wird"],1,"Berufswunsch: werden.","أمنية مهنية: werden."),
 Q("Am Telefon sagt man …",["Ich verbinde Sie.","Ich steige Sie um.","Ich beantrage Sie."],0,"verbinden = einen Anruf weiterleiten.","تحويل المكالمة = verbinden.")
]
}
];
})();
