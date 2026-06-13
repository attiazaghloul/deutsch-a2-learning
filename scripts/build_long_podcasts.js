const fs = require('fs');
const vm = require('vm');

const sandbox = {window: {}, console};
vm.createContext(sandbox);
[
  'app/data_book0.js',
  'app/data_book0_expansion.js',
  'app/data_book1.js',
  'app/data_book2.js',
  'app/data_extra.js',
  'app/data_enrichment.js',
  'app/data_podcast.js'
].forEach(file => vm.runInContext(fs.readFileSync(file, 'utf8'), sandbox, {filename: file}));

const book = [...sandbox.window.BOOK0, ...sandbox.window.BOOK1, ...sandbox.window.BOOK2];
const shortEpisodes = sandbox.window.A2_PODCASTS;
const personas = [
  [{name:'Mia',gender:'female',age:27,voice:'de-DE-KatjaNeural'}, {name:'Tarek',gender:'male',age:31,voice:'de-DE-ConradNeural'}],
  [{name:'Nora',gender:'female',age:19,voice:'de-DE-AmalaNeural'}, {name:'Jonas',gender:'male',age:20,voice:'de-DE-KillianNeural'}],
  [{name:'Lea',gender:'female',age:25,voice:'de-DE-SeraphinaMultilingualNeural'}, {name:'Samir',gender:'male',age:28,voice:'de-DE-FlorianMultilingualNeural'}],
  [{name:'Emma',gender:'female',age:34,voice:'de-DE-KatjaNeural'}, {name:'Omar',gender:'male',age:36,voice:'de-DE-ConradNeural'}],
  [{name:'Lina',gender:'female',age:30,voice:'de-DE-SeraphinaMultilingualNeural'}, {name:'Paul',gender:'male',age:47,voice:'de-DE-FlorianMultilingualNeural'}],
  [{name:'Aya',gender:'female',age:24,voice:'de-DE-AmalaNeural'}, {name:'Ben',gender:'male',age:39,voice:'de-DE-KillianNeural'}],
  [{name:'Sofia',gender:'female',age:32,voice:'de-DE-KatjaNeural'}, {name:'Malik',gender:'male',age:35,voice:'de-DE-ConradNeural'}],
  [{name:'Klara',gender:'female',age:42,voice:'de-DE-SeraphinaMultilingualNeural'}, {name:'Yusuf',gender:'male',age:23,voice:'de-DE-KillianNeural'}],
  [{name:'Salma',gender:'female',age:26,voice:'de-DE-AmalaNeural'}, {name:'David',gender:'male',age:29,voice:'de-DE-FlorianMultilingualNeural'}],
  [{name:'Hanna',gender:'female',age:51,voice:'de-DE-KatjaNeural'}, {name:'Rami',gender:'male',age:38,voice:'de-DE-ConradNeural'}],
  [{name:'Julia',gender:'female',age:44,voice:'de-DE-SeraphinaMultilingualNeural'}, {name:'Karim',gender:'male',age:46,voice:'de-DE-FlorianMultilingualNeural'}],
  [{name:'Nina',gender:'female',age:22,voice:'de-DE-AmalaNeural'}, {name:'Adel',gender:'male',age:27,voice:'de-DE-KillianNeural'}]
];

const clean = value => String(value || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
const bareWord = value => clean(value).replace(/^(der|die|das)\s+/i, '').replace(/,\s*.*$/, '');
const line = (speaker, de, ar, pauseAfter = .45, kind = 'dialogue') => ({
  speaker, de: clean(de), ar: clean(ar), pauseAfter, kind
});

function buildEpisode(chapter, shortEpisode, people) {
  const [woman, man] = people;
  const speakers = [woman.name, man.name];
  const lines = [];
  const add = (person, de, ar, pause, kind) => lines.push(line(person.name || person, de, ar, pause, kind));

  add(woman, `Willkommen zu Folge ${chapter.num}: ${shortEpisode.title}. Ich bin ${woman.name}, ${woman.age} Jahre alt.`, `مرحبًا بكم في الحلقة ${chapter.num}: ${shortEpisode.title}. أنا ${woman.name} وعمري ${woman.age} عامًا.`, .5, 'intro');
  add(man, `Und ich bin ${man.name}, ${man.age} Jahre alt. Heute sprechen wir über ${clean(chapter.subtitle).replace(/ · /g, ', ')}.`, `وأنا ${man.name} وعمري ${man.age} عامًا. سنتحدث اليوم عن موضوعات الدرس.`, .6, 'intro');
  add(woman, 'Hör zuerst entspannt zu. Danach wiederholen wir wichtige Wörter und Redemittel, und am Ende gibt es Fragen für dich.', 'استمع أولًا بهدوء. بعد ذلك سنراجع كلمات وتعبيرات مهمة، وفي النهاية توجد أسئلة لك.', .7, 'intro');
  add(man, 'Du kannst jederzeit pausieren, laut antworten und anschließend mit unserer Lösung vergleichen. Los geht es!', 'يمكنك إيقاف الحلقة والإجابة بصوت عالٍ ثم مقارنة إجابتك بحلنا. لنبدأ!', 1, 'intro');

  const sceneLines = Array.isArray(shortEpisode.lines[0])
    ? shortEpisode.lines
    : shortEpisode.lines.filter(item => item.kind === 'scene').map(item => [item.speaker, item.de, item.ar]);
  sceneLines.forEach((item, index) => {
    const person = people.find(candidate => candidate.name === item[0]) || people[index % 2];
    add(person, item[1], item[2], .55, 'scene');
  });

  add(woman, 'Das war unsere erste Alltagsszene. Welche Wörter und Sätze hast du sofort verstanden?', 'كان هذا مشهدنا اليومي الأول. ما الكلمات والجمل التي فهمتها فورًا؟', 3.2, 'interactive');
  add(man, 'Denk kurz nach. Du musst nicht jedes Wort verstehen. Wichtig ist zuerst die Situation.', 'فكّر قليلًا. ليس ضروريًا أن تفهم كل كلمة؛ المهم أولًا هو فهم الموقف.', 2.4, 'interactive');
  add(woman, `Die Situation passt zu Kapitel ${chapter.num}. Jetzt sehen wir uns den Wortschatz genauer an.`, `الموقف مرتبط بالدرس ${chapter.num}. والآن سنراجع المفردات بدقة أكبر.`, .8, 'section');

  const vocab = chapter.vocab.slice(0, 10);
  vocab.forEach((item, index) => {
    const first = people[index % 2];
    const second = people[(index + 1) % 2];
    const word = clean(item.w);
    add(first, `Wort Nummer ${index + 1}: ${word}. Hör genau zu: ${word}.`, `الكلمة رقم ${index + 1}: ${item.ar || word}. استمع جيدًا إلى نطقها.`, .45, 'vocab');
    add(second, `${word} bedeutet: ${clean(item.d)} ${item.ex ? `Ein Beispiel: ${clean(item.ex)}` : ''}`, `معنى ${word}: ${item.ar || 'راجع معناها في بطاقة الكلمات'}.`, .6, 'vocab');
    add(first, `Jetzt bist du dran. Sprich laut nach: ${word}.`, `دورك الآن. كرر الكلمة بصوت عالٍ: ${word}.`, 2.8, 'interactive');
    if ((index + 1) % 4 === 0) {
      add(second, `Mini-Wiederholung: Welche vier Wörter hast du gerade gehört? Nenne sie ohne auf den Text zu schauen.`, 'مراجعة صغيرة: ما الكلمات الأربع التي سمعتها؟ قلها من دون النظر إلى النص.', 4.2, 'interactive');
      add(first, `Die Wörter waren: ${vocab.slice(index - 3, index + 1).map(entry => clean(entry.w)).join(', ')}.`, `الكلمات كانت: ${vocab.slice(index - 3, index + 1).map(entry => entry.ar || bareWord(entry.w)).join('، ')}.`, 1, 'answer');
    }
  });

  add(man, 'Sehr gut. Wörter allein reichen aber nicht. Im Gespräch brauchen wir fertige Sätze und passende Reaktionen.', 'جيد جدًا. الكلمات وحدها لا تكفي؛ في الحوار نحتاج إلى جمل جاهزة وردود مناسبة.', .8, 'section');
  const phrases = chapter.redemittel.flatMap(group => group.items.map(item => ({...item, cat: group.cat}))).slice(0, 6);
  phrases.forEach((item, index) => {
    const first = people[index % 2];
    const second = people[(index + 1) % 2];
    add(first, `Situation ${index + 1}, ${clean(item.cat)}. Was könntest du sagen?`, `الموقف رقم ${index + 1}. ماذا يمكنك أن تقول؟`, 3.2, 'interactive');
    add(second, `Eine passende Formulierung ist: ${clean(item.de)}`, `تعبير مناسب هو: ${clean(item.ar)}`, .7, 'phrase');
    add(first, `Wiederhole den ganzen Satz mit der gleichen Satzmelodie: ${clean(item.de)}`, `كرر الجملة كاملة بنفس نغمة الكلام.`, 3.2, 'interactive');
  });

  add(woman, 'Jetzt kommt ein kurzer Hör- und Grammatikcheck. Antworte zuerst selbst. Danach hörst du die Lösung.', 'والآن اختبار قصير في الاستماع والقواعد. أجب أولًا بنفسك ثم استمع إلى الحل.', .8, 'section');
  (chapter.quiz || []).slice(0, 4).forEach((quiz, index) => {
    const asker = people[index % 2];
    const solver = people[(index + 1) % 2];
    add(asker, `Frage ${index + 1}: ${clean(quiz.q)}`, `السؤال رقم ${index + 1}. اختر الإجابة الصحيحة من النص الألماني.`, .5, 'quiz');
    add(asker, `Die Möglichkeiten sind: ${quiz.o.map((option, optionIndex) => `${String.fromCharCode(65 + optionIndex)}, ${clean(option)}`).join('. ')}.`, 'استمع إلى الاختيارات ثم أوقف الصوت وأجب.', 4.5, 'interactive');
    add(solver, `Die richtige Antwort ist ${String.fromCharCode(65 + quiz.a)}: ${clean(quiz.o[quiz.a])}. ${clean(quiz.fb || '')}`, `الإجابة الصحيحة: ${clean(quiz.fbAr || quiz.o[quiz.a])}`, 1, 'answer');
  });

  add(man, `Zum Abschluss: Nenne drei neue Wörter aus Kapitel ${chapter.num} und bilde mit jedem Wort einen Satz.`, `في الختام: اذكر ثلاث كلمات جديدة من الدرس ${chapter.num} وكوّن جملة بكل كلمة.`, 5, 'interactive');
  add(woman, 'Wenn das noch schwer ist, höre die Folge morgen noch einmal. Beim zweiten Hören wirst du deutlich mehr verstehen.', 'إذا كان الأمر ما زال صعبًا، فاستمع إلى الحلقة غدًا مرة أخرى. في المرة الثانية ستفهم أكثر بوضوح.', .7, 'outro');
  add(man, `Danke fürs Zuhören. Das war ${shortEpisode.title}. Bis zur nächsten Folge!`, `شكرًا على الاستماع. كانت هذه حلقة ${shortEpisode.title}. إلى الحلقة القادمة!`, 1, 'outro');

  return {
    ...shortEpisode,
    duration: 'ca. 10–12 Min.',
    people,
    speakers,
    lines
  };
}

const episodes = book.map((chapter, index) =>
  buildEpisode(chapter, shortEpisodes.find(item => item.chapter === chapter.num), personas[index])
);

fs.mkdirSync('build', {recursive: true});
fs.writeFileSync('build/podcasts-long.json', JSON.stringify(episodes, null, 2));
episodes.forEach(episode => {
  const words = episode.lines.reduce((sum, item) => sum + item.de.split(/\s+/).length, 0);
  const pauses = episode.lines.reduce((sum, item) => sum + item.pauseAfter, 0);
  console.log(`Kapitel ${episode.chapter}: ${episode.lines.length} Segmente, ${words} Wörter, ${pauses.toFixed(0)}s Pausen`);
});
