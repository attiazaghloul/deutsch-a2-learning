/* ===================== router ===================== */
const ROUTE_HISTORY_KEY='deutschRouteIndex';
let routeHistoryIndex=Number.isInteger(history.state?.[ROUTE_HISTORY_KEY])
  ?history.state[ROUTE_HISTORY_KEY]:0;
history.replaceState({...history.state,[ROUTE_HISTORY_KEY]:routeHistoryIndex},'',location.href);

function routeUrl(hash){
  const clean=String(hash||'').replace(/^#/,'');
  return `${location.pathname}${location.search}${clean?`#${clean}`:''}`;
}

function go(hash){
  const clean=String(hash||'').replace(/^#/,'');
  if(clean===location.hash.replace('#','')) return;
  navigatingBack=false;
  routeHistoryIndex+=1;
  history.pushState({...history.state,[ROUTE_HISTORY_KEY]:routeHistoryIndex},'',routeUrl(clean));
  route();
}

let lastRouteHash=null;
let navigatingBack=false;

window.addEventListener('popstate',event=>{
  const nextIndex=Number.isInteger(event.state?.[ROUTE_HISTORY_KEY])
    ?event.state[ROUTE_HISTORY_KEY]:Math.max(0,routeHistoryIndex-1);
  navigatingBack=nextIndex<routeHistoryIndex;
  routeHistoryIndex=nextIndex;
  route();
});

function fallbackBackTarget(hash){
  const h=hash?`#${hash}`:'';
  const path=hash;
  if(/^#a1\/k\d+\//.test(h)) return path.split('/').slice(0,2).join('/');
  if(/^#a1\/g\d+\/\d+$/.test(h)) return path.split('/').slice(0,2).join('/');
  if(/^#a1\/g\d+$/.test(h)) return 'a1/lessons';
  if(/^#a1\/k\d+$/.test(h)) return 'a1/lessons';
  if(h==='#a1/lessons') return 'a1';
  if(/^#a1\/listen\/(?:hoeren|phonetik)\/[A-H]\/\d+$/.test(h)) return path.split('/').slice(0,4).join('/');
  if(/^#a1\/listen\/(?:hoeren|phonetik)\/[A-C]\/\d+$/.test(h)) return path.split('/').slice(0,4).join('/');
  if(/^#a1\/listen\/(?:hoeren|phonetik)\/[A-H]$/.test(h)) return path.split('/').slice(0,3).join('/');
  if(/^#a1\/listen\/(?:hoeren|phonetik)\/[A-C]$/.test(h)) return path.split('/').slice(0,3).join('/');
  if(/^#a1\/listen\/(?:hoeren|phonetik)$/.test(h)) return 'a1/listen';
  if(/^#a1\/listen\/[A-H](?:\/\d+)?$/.test(h)){
    const parts=path.split('/');
    return ['a1','listen','hoeren',...parts.slice(2)].join('/');
  }
  if(h==='#a1/listen'||/^#a1\/(dict|verbs|phrases)$/.test(h)) return 'a1';
  if(h==='#a1'||h==='#a2') return '';
  if(h==='#a2/lessons') return 'a2';
  if(h==='#b1.1/lessons') return 'b1.1';
  if(/^#b1\.1\/k\d+\//.test(h)) return path.split('/').slice(0,2).join('/');
  if(/^#b1\.1\/k\d+$/.test(h)) return 'b1.1/lessons';
  if(/^#b1\.1\/(games|exam|listen|podcast)\//.test(h)) return path.split('/').slice(0,2).join('/');
  if(/^#b1\.1\/(dict|verbs|phrases|games|exam|listen|podcast)$/.test(h)) return 'b1.1';
  if(h==='#b1.1') return '';
  if(/^#train\//.test(h)) return 'train';
  if(h==='#train') return '';
  if(/^#podcast\//.test(h)) return 'podcast';
  if(/^#games\//.test(h)) return 'games';
  if(/^#exam\//.test(h)) return 'exam';
  if(/^#listen\/[A-I]\/\d+/.test(h)) return path.split('/').slice(0,2).join('/');
  if(/^#listen\/[A-I]/.test(h)) return 'listen';
  if(['#dict','#full-dict','#verbs','#phrases','#listen','#exam','#podcast','#games'].includes(h)) return 'a2';
  if(/^#(k|g)\d+\//.test(h)) return path.split('/').slice(0,1).join('/');
  if(/^#(k|g)\d+$/.test(h)) return 'a2/lessons';
  return '';
}

function goBack(){
  const current=location.hash.replace('#','');
  if(routeHistoryIndex>0){
    navigatingBack=true;
    history.back();
    return;
  }
  const fallback=fallbackBackTarget(current);
  if(fallback===current) return;
  navigatingBack=true;
  history.replaceState({...history.state,[ROUTE_HISTORY_KEY]:0},'',routeUrl(fallback));
  route();
}

$('#backBtn').addEventListener('click',event=>{
  event.preventDefault();
  event.stopImmediatePropagation();
  goBack();
},true);
$('#homeBtn').addEventListener('click',()=>go(''));
$('#topSearchBtn').addEventListener('click',()=>go('word-search'));
$('#topFavoritesBtn').addEventListener('click',()=>go('favorites'));

function applyLevelTheme(hash){
  const isA1=hash==='a1'||hash.startsWith('a1/');
  const isB1=hash==='b1.1'||hash.startsWith('b1.1/');
  const isA2=hash==='a2'||hash.startsWith('a2/')||['dict','full-dict','verbs','phrases','listen','exam','podcast','games','word-search','favorites','review','progress'].includes(hash)
    ||/^(k|g)\d+/.test(hash);
  document.body.classList.toggle('level-a1',isA1);
  document.body.classList.toggle('level-b1',isB1);
  document.body.classList.toggle('level-a2',isA2);
  document.body.classList.toggle('has-route',!!hash);
}

function route(){
  const to=location.hash.replace('#','');
  const render=()=>renderCurrentRoute();
  if(window.NextUI){
    window.NextUI.transitionRoute(render,{from:lastRouteHash,to,back:navigatingBack});
    return;
  }
  render();
}

function renderCurrentRoute(){
  const h = location.hash.replace('#','');
  if(navigatingBack) navigatingBack=false;
  lastRouteHash=h;
  applyLevelTheme(h);
  stopExamTimer();
  stopGameTimers();
  stopPodcast();
  stopB1Listening();
  const examMode=h==='exam'||h.startsWith('exam/')||h==='b1.1/exam'||h.startsWith('b1.1/exam/');
  document.body.classList.toggle('exam-mode',examMode);
  if(examMode){
    translationRequest++;
    pendingTranslation=null;
    translateTrigger.classList.remove('show');
    translateFavoriteTrigger.classList.remove('show');
    closeModal('translationModal');
    window.getSelection()?.removeAllRanges();
  }
  if(!window.NextUI) window.scrollTo(0,0);
  if(!h){ if(window.NextUI) window.NextUI.renderDashboard(); else renderLevelSelector(); return; }
  if(h==='review'){ if(window.NextUI) window.NextUI.renderReviewCenter(); else renderFavorites(); return; }
  if(h==='progress'){ if(window.NextUI) window.NextUI.renderProgressDashboard(); else renderLevelSelector(); return; }
  if(h==='word-search'){ renderWordSearch(); return; }
  if(h==='train'){ renderTrainerHome(); return; }
  if(h==='train/due'){ startDueTrainerSession(); return; }
  const trainMatch=h.match(/^train\/(a1|a2|b1)\/(\d+)$/);
  if(trainMatch){ startTrainerSession(trainMatch[1],Number(trainMatch[2])); return; }
  if(h==='favorites'){ renderFavorites(); return; }
  if(h==='a1'){ if(window.NextUI) window.NextUI.renderLearningHub('a1'); else renderA1Hub(); return; }
  if(h==='a1/lessons'){ renderA1Home(); return; }
  if(h==='a1/dict'){ renderA1Dictionary(); return; }
  if(h==='a1/verbs'){ renderA1Verbs(); return; }
  if(h==='a1/phrases'){ renderA1Expressions(); return; }
  if(h==='a1/listen'){ renderA1ListenBookPicker(); return; }
  const a1ListenBookMatch=h.match(/^a1\/listen\/(hoeren|phonetik)$/);
  if(a1ListenBookMatch){ renderA1ListeningHome(a1ListenBookMatch[1]); return; }
  const a1ListenMatch=h.match(/^a1\/listen\/(hoeren|phonetik)\/([A-H])(?:\/(\d+))?$/);
  if(a1ListenMatch){
    const cfg=A1_LISTEN_BOOKS[a1ListenMatch[1]];
    const chapter=cfg.meta.chapters.find(item=>item.id===a1ListenMatch[2]);
    if(!chapter){ renderA1ListeningHome(a1ListenMatch[1]); return; }
    if(a1ListenMatch[3]===undefined) renderA1ListeningChapter(cfg, chapter);
    else renderA1ListeningExercise(cfg, chapter, Number(a1ListenMatch[3]));
    return;
  }

  const a1ListenLegacy=h.match(/^a1\/listen\/([A-H])(?:\/(\d+))?$/);
  if(a1ListenLegacy){
    go(['a1', 'listen', 'hoeren', ...h.split('/').slice(2)].join('/'));
    return;
  }
  const a1Match=h.match(/^a1\/k(\d+)(?:\/(\w+))?$/);
  if(a1Match){ renderA1Chapter(Number(a1Match[1]), a1Match[2]); return; }
  const a1GrammarMatch=h.match(/^a1\/g(\d+)(?:\/(\d+))?$/);
  if(a1GrammarMatch){
    const lk=A1_GRAM.find(l=>l.num==a1GrammarMatch[1]);
    if(lk) renderLektion(lk, a1GrammarMatch[2]||'0', {routePrefix:'a1/g', titlePrefix:'Grammatik-Skript A1 · Lektion', coverageTitle:'Was du hier lernst', hideSource:true});
    else renderA1Home();
    return;
  }
  if(h==='a2'){ if(window.NextUI) window.NextUI.renderLearningHub('a2'); else renderA2Hub(); return; }
  if(h==='a2/lessons'){ renderHome(); return; }
  if(h==='b1.1'){ if(window.NextUI) window.NextUI.renderLearningHub('b1.1'); else renderB1Hub(); return; }
  if(h==='b1.1/lessons'){ renderB1Home(); return; }
  if(h==='b1.1/dict'){ renderB1Dictionary(); return; }
  if(h==='b1.1/verbs'){ renderB1Verbs(); return; }
  if(h==='b1.1/phrases'){ renderB1Expressions(); return; }
  if(h==='b1.1/listen'){ renderB1ListenHome(); return; }
  const b1ListenMatch=h.match(/^b1\.1\/listen\/(\d+)\/(\d+)$/);
  if(b1ListenMatch){ renderB1ListenTask(Number(b1ListenMatch[1]),Number(b1ListenMatch[2])); return; }
  if(h==='b1.1/podcast'){ podcastLevel='b1.1'; renderPodcastHome(); return; }
  const b1PodcastMatch=h.match(/^b1\.1\/podcast\/(\d+)$/);
  if(b1PodcastMatch){ podcastLevel='b1.1'; renderPodcastEpisode(Number(b1PodcastMatch[1])); return; }
  if(h==='b1.1/games'){ gameLevel='b1.1'; renderGamesHome(); return; }
  const b1GameMatch=h.match(/^b1\.1\/games\/(speed|memory|artikel|sentence)$/);
  if(b1GameMatch){ gameLevel='b1.1'; renderGame(b1GameMatch[1]); return; }
  if(h==='b1.1/exam'){ examLevel='b1.1'; renderExamHome(); return; }
  const b1ExamMatch=h.match(/^b1\.1\/exam\/(lesen|hoeren|schreiben|sprechen)$/);
  if(b1ExamMatch){ examLevel='b1.1'; renderExamModule(b1ExamMatch[1]); return; }
  const b1Match=h.match(/^b1\.1\/k(\d+)(?:\/(\w+))?$/);
  if(b1Match){
    const chapter=B1_BOOK.find(item=>item.num===Number(b1Match[1]));
    if(chapter) b1Match[2]?renderChapter(chapter,b1Match[2]):renderChapterMenu(chapter); else renderB1Home();
    return;
  }
  if(h==='dict'){ renderDictionary(); return; }
  if(h==='full-dict'){ renderFullDictionary(); return; }
  if(h==='verbs'){ renderVerbs(); return; }
  if(h==='phrases'){ renderExpressions(); return; }
  if(h==='podcast'){ podcastLevel='a2'; renderPodcastHome(); return; }
  const podcastMatch=h.match(/^podcast\/(\d+)$/);
  if(podcastMatch){ podcastLevel='a2'; renderPodcastEpisode(Number(podcastMatch[1])); return; }
  if(h==='games'){ gameLevel='a2'; renderGamesHome(); return; }
  const gameMatch=h.match(/^games\/(speed|memory|artikel|sentence)$/);
  if(gameMatch){ gameLevel='a2'; renderGame(gameMatch[1]); return; }
  if(h==='listen'){ renderListeningHome(); return; }
  if(h==='exam'){ examLevel='a2'; renderExamHome(); return; }
  const examMatch=h.match(/^exam\/(lesen|hoeren|schreiben|sprechen)$/);
  if(examMatch){ examLevel='a2'; renderExamModule(examMatch[1]); return; }
  const listenMatch=h.match(/^listen\/([A-I])(?:\/(\d+))?$/);
  if(listenMatch){
    const chapter=HOEREN.chapters.find(item=>item.id===listenMatch[1]);
    if(!chapter){ renderListeningHome(); return; }
    if(listenMatch[2]===undefined) renderListeningChapter(chapter);
    else renderListeningExercise(chapter,Number(listenMatch[2]));
    return;
  }
  const m = h.match(/^(k|g)(\d+)(?:\/(\w+))?/);
  if(!m){ renderHome(); return; }
  if(m[1]==='k'){
    const ch = BOOK.find(c => c.num == m[2]);
    if(ch) m[3]?renderChapter(ch, m[3]):renderChapterMenu(ch); else renderHome();
  } else {
    const lk = GRAM.find(l => l.num == m[2]);
    if(lk) renderLektion(lk, m[3]||'0'); else renderHome();
  }
}

function setTop(title, sub, hasBack){
  $('#topTitle').innerHTML = `${title}<small>${sub}</small>`;
  document.body.classList.toggle('has-back', !!hasBack);
}

function mainTabs(active){
  return window.NextUI?.featureTabs('a2',active)||'';
}

function sectionCards(items, extraClass=''){
  return `<section class="section-card-grid ${extraClass}">${items.map(item=>`
    <button type="button" class="section-card ${item.className||''}" onclick="go('${item.route}')">
      <span class="icon">${item.icon}</span>
      <span><b>${item.title}</b><span>${item.text}</span>${item.ar?ar(item.ar):''}</span>
    </button>`).join('')}</section>`;
}

const A1_SECTIONS=[
  {route:'a1/lessons',icon:'1',title:'Lektionen',text:'12 Kapitel mit Wortschatz, Grammatik, Lesen, Sprechen und Quiz.',ar:'الدروس الكاملة لمستوى A1.'},
  {route:'train',icon:'🧠',title:'Wort-Trainer',text:'Wörter mit System lernen: erkennen, hören, schreiben – mit Wiederholung zur richtigen Zeit.',ar:'حفظ الكلمات بنظام التكرار المتباعد.'},
  {route:'a1/dict',icon:'W',title:'Wörterbuch',text:'Alle A1-Wörter mit Suche und Kapitelfilter.',ar:'قاموس كل كلمات A1.'},
  {route:'a1/verbs',icon:'V',title:'Verben',text:'A1-Verben mit Formen, Perfekt und Beispielen.',ar:'تصريف الأفعال الأساسية.'},
  {route:'a1/phrases',icon:'R',title:'Redemittel',text:'Fertige Sätze für Alltag und einfache Gespräche.',ar:'جمل جاهزة للكلام.'},
  {route:'a1/listen',icon:'H',title:'Hören',text:'A1-Hörbücher, Phonetik und interaktive Aufgaben.',ar:'استماع وتدريبات A1.'}
];

const A1_GRAMMAR_SCRIPT=[
  {num:1,start:2,end:8,topics:['Verb - Konjugation','Personalpronomen - Nominativ','Wortstellung: Aussagesatz / Fragesätze']},
  {num:2,start:9,end:12,topics:['Starke Verben','Nomen und Artikel - Nominativ','Anrede']},
  {num:3,start:13,end:15,topics:['Nomen - Genusregeln','Nomen - Komposita','Adjektiv']},
  {num:4,start:16,end:19,topics:['Nicht trennbare und trennbare Verben','Nomen und Artikel - Akkusativ','Personalpronomen - Akkusativ']},
  {num:5,start:20,end:21,topics:['Possessivartikel','Präteritum - haben / sein','Zeitadverbien']},
  {num:6,start:22,end:24,topics:['Nomen und Artikel - Dativ','Pronomen - Dativ','Imperativ']},
  {num:7,start:25,end:27,topics:['Satzstrukturen - Aussagesatz','Modalverben','Präpositionen mit Dativ']},
  {num:8,start:28,end:31,topics:['Perfekt','Konjunktionen','Präpositionen mit Akkusativ']}
];
function gramBody(html){ return html; }
function a1GrammarTopicMeta(topic){
  if(topic.includes('Verb - Konjugation')) return {
    body:'<p>Im Präsens bekommt das Verb eine Endung passend zum Subjekt: <b>ich -e, du -st, er/sie/es -t, wir -en, ihr -t, sie/Sie -en</b>.</p><div class="exbox">ich lerne · du lernst · er lernt · wir lernen</div>',
    quiz:{q:'Welche Form ist richtig?',o:['du lernst','du lernen','du lerne'],a:0,fb:'du bekommt meistens die Endung -st.'},
    practice:{type:'fill',prompt:'Maria ___ aus Rom. (kommen)',answer:['kommt'],hint:'Maria = sie -> kommt'}
  };
  if(topic.includes('Personalpronomen - Nominativ')) return {
    body:'<p>Personalpronomen ersetzen Personen oder Nomen im Nominativ: <b>ich, du, er, sie, es, wir, ihr, sie/Sie</b>.</p><div class="exbox">Maria kommt aus Italien. <i>Sie</i> kommt aus Italien.</div>',
    quiz:{q:'Carlos lernt Deutsch. Welches Pronomen passt?',o:['Er','Sie','Wir'],a:0,fb:'Carlos ist maskulin singular: er.'},
    practice:{type:'fill',prompt:'Anna und Max wohnen in Köln. ___ wohnen in Köln.',answer:['sie'],hint:'Plural: sie'}
  };
  if(topic.includes('Wortstellung')) return {
    body:'<p>Im Aussagesatz steht das konjugierte Verb auf Position 2. In Ja/Nein-Fragen steht es auf Position 1.</p><div class="exbox">Ich wohne in Berlin. · Wohnst du in Berlin?</div>',
    quiz:{q:'Wo steht das Verb im Aussagesatz?',o:['Position 2','Position 1','immer am Ende'],a:0,fb:'Aussagesatz: Verb auf Position 2.'},
    practice:{type:'order',prompt:'Ordne den Satz.',tokens:['Morgen','lerne','ich','Deutsch'],answer:'Morgen lerne ich Deutsch'}
  };
  if(topic.includes('Starke Verben')) return {
    body:'<p>Einige starke Verben ändern im Singular den Vokal: <b>fahren -> du fährst</b>, <b>lesen -> du liest</b>, <b>sprechen -> du sprichst</b>.</p>',
    quiz:{q:'Welche Form ist richtig?',o:['du liest','du lesst','du lest'],a:0,fb:'lesen: du liest.'},
    practice:{type:'fill',prompt:'Er ___ gern Zeitung. (lesen)',answer:['liest'],hint:'er/sie/es: liest'}
  };
  if(topic.includes('Nomen und Artikel - Nominativ')) return {
    body:'<p>Nomen lernst du immer mit Artikel: <b>der</b>, <b>die</b>, <b>das</b>. Im Plural steht meistens <b>die</b>.</p><div class="exbox">der Tisch · die Tasche · das Buch · die Bücher</div>',
    quiz:{q:'Was passt?',o:['das Buch','der Buch','die Buch'],a:0,fb:'Buch ist neutral: das Buch.'},
    practice:{type:'fill',prompt:'Das ist ___ Tisch.',answer:['ein'],hint:'maskulin: ein Tisch'}
  };
  if(topic.includes('Anrede')) return {
    body:'<p>Mit Freunden nutzt du <b>du/ihr</b>. Formell nutzt du <b>Sie</b>. Das Verb passt zur Anrede.</p><div class="exbox">Wo wohnst du? · Wo wohnen Sie?</div>',
    quiz:{q:'Welche Frage ist formell?',o:['Wo wohnen Sie?','Wo wohnst du?','Wo wohnt ihr?'],a:0,fb:'Formell: Sie + Verb wie Plural.'},
    practice:{type:'fill',prompt:'Herr Müller, wo ___ Sie?',answer:['wohnen'],hint:'Sie -> wohnen'}
  };
  if(topic.includes('Genusregeln')) return {
    body:'<p>Einige Endungen helfen beim Artikel: <b>-ung, -heit, -keit</b> sind meistens feminin; <b>-chen</b> ist neutral.</p><div class="exbox">die Wohnung · die Freiheit · das Mädchen</div>',
    quiz:{q:'Welcher Artikel passt meistens zu -ung?',o:['die','der','das'],a:0,fb:'-ung ist meistens feminin.'},
    practice:{type:'fill',prompt:'___ Zeitung ist neu.',answer:['die'],hint:'Zeitung -> die'}
  };
  if(topic.includes('Komposita')) return {
    body:'<p>Bei zusammengesetzten Nomen bestimmt das letzte Wort den Artikel und die Bedeutung.</p><div class="exbox">der Kaffee + die Maschine = die Kaffeemaschine</div>',
    quiz:{q:'Welcher Artikel passt zu Wörterbuch?',o:['das','der','die'],a:0,fb:'Das Grundwort ist Buch: das Wörterbuch.'},
    practice:{type:'fill',prompt:'der Garten + die Tür = ___ Gartentür',answer:['die'],hint:'Grundwort Tür -> die'}
  };
  if(topic==='Adjektiv') return {
    body:'<p>Adjektive beschreiben Personen oder Sachen. Nach <b>sein</b> bleibt das Adjektiv ohne Endung.</p><div class="exbox">Das Auto ist neu. · Die Übung ist schwierig.</div>',
    quiz:{q:'Welche Form passt?',o:['Das Buch ist interessant.','Das Buch ist interessante.','Das Buch ist interessanter.'],a:0,fb:'Nach sein keine Endung.'},
    practice:{type:'fill',prompt:'Die Aufgabe ist ___. (schwierig)',answer:['schwierig'],hint:'Nach ist keine Endung.'}
  };
  if(topic.includes('trennbare Verben')) return {
    body:'<p>Trennbare Verben trennen sich im Hauptsatz: Das Präfix steht am Ende. Nicht trennbare Verben bleiben zusammen.</p><div class="exbox">Ich rufe Anna an. · Ich besuche Anna.</div>',
    quiz:{q:'Welche Form ist richtig?',o:['Ich stehe um 7 Uhr auf.','Ich aufstehe um 7 Uhr.','Ich stehe auf um 7 Uhr.'],a:0,fb:'Im Hauptsatz steht das Präfix am Ende.'},
    practice:{type:'order',prompt:'Ordne den Satz.',tokens:['Ich','kaufe','heute','ein'],answer:'Ich kaufe heute ein'}
  };
  if(topic==='Akkusativ') return {
    body:'<p>Viele Verben brauchen ein Akkusativobjekt. Nur maskulin ändert sich deutlich: <b>der -> den</b>, <b>ein -> einen</b>.</p><div class="exbox">Ich sehe den Mann. · Ich kaufe einen Apfel.</div>',
    quiz:{q:'Was passt?',o:['Ich frage den Lehrer.','Ich frage der Lehrer.','Ich frage dem Lehrer.'],a:0,fb:'fragen + Akkusativ: den Lehrer.'},
    practice:{type:'fill',prompt:'Ich kaufe ___ Stift. (ein)',answer:['einen'],hint:'maskulin Akkusativ: einen'}
  };
  if(topic.includes('Possessivartikel')) return {
    body:'<p>Possessivartikel zeigen Zugehörigkeit: <b>mein, dein, sein, ihr, unser, euer</b>. Die Endung richtet sich nach dem Nomen.</p><div class="exbox">mein Vater · meine Mutter · mein Kind</div>',
    quiz:{q:'Was passt?',o:['meine Tasche','mein Tasche','meinen Tasche'],a:0,fb:'Tasche ist feminin: meine Tasche.'},
    practice:{type:'fill',prompt:'Das ist ___ Bruder. (ich)',answer:['mein'],hint:'Bruder maskulin: mein'}
  };
  if(topic.includes('Präteritum')) return {
    body:'<p><b>sein</b> und <b>haben</b> nutzt man im Präteritum sehr oft: ich war, du warst, er war; ich hatte, du hattest, er hatte.</p>',
    quiz:{q:'Welche Form ist richtig?',o:['Ich war zu Hause.','Ich bin war zu Hause.','Ich hatte zu Hause.'],a:0,fb:'sein im Präteritum: ich war.'},
    practice:{type:'fill',prompt:'Gestern ___ ich krank. (sein)',answer:['war'],hint:'ich war'}
  };
  if(topic.includes('Zeitadverbien')) return {
    body:'<p>Zeitadverbien ordnen eine Handlung: <b>heute, morgen, gestern, zuerst, dann, danach</b>.</p><div class="exbox">Zuerst lerne ich. Danach mache ich eine Pause.</div>',
    quiz:{q:'Welches Wort passt zur Vergangenheit?',o:['gestern','morgen','später'],a:0,fb:'gestern = Vergangenheit.'},
    practice:{type:'fill',prompt:'___ war ich im Deutschkurs. (Vergangenheit)',answer:['gestern'],hint:'Vergangenheit: gestern'}
  };
  if(topic==='Dativ') return {
    body:'<p>Der Dativ antwortet oft auf <b>wem?</b>. Artikel: <b>dem</b> Mann, <b>der</b> Frau, <b>dem</b> Kind, <b>den</b> Kindern.</p>',
    quiz:{q:'Was passt?',o:['Ich helfe dem Mann.','Ich helfe den Mann.','Ich helfe der Mann.'],a:0,fb:'helfen + Dativ: dem Mann.'},
    practice:{type:'fill',prompt:'Ich antworte ___ Lehrerin.',answer:['der'],hint:'Lehrerin feminin Dativ: der'}
  };
  if(topic.includes('Imperativ')) return {
    body:'<p>Der Imperativ gibt Anweisungen: <b>Komm!</b>, <b>Kommt!</b>, <b>Kommen Sie bitte!</b></p>',
    quiz:{q:'Welche Form ist höflich?',o:['Kommen Sie bitte!','Komm bitte!','Kommt bitte!'],a:0,fb:'Höflich: Sie-Form.'},
    practice:{type:'fill',prompt:'___ bitte langsam! (sprechen, Sie)',answer:['sprechen sie','Sprechen Sie'],hint:'Sprechen Sie bitte langsam.'}
  };
  if(topic.includes('Modalverben')) return {
    body:'<p>Modalverben stehen auf Position 2. Das zweite Verb steht im Infinitiv am Ende.</p><div class="exbox">Ich kann Deutsch sprechen. · Wir müssen lernen.</div>',
    quiz:{q:'Welche Form ist richtig?',o:['Ich muss lernen.','Ich lernen muss.','Ich muss lerne.'],a:0,fb:'Modalverb Position 2, Infinitiv am Ende.'},
    practice:{type:'order',prompt:'Ordne den Satz.',tokens:['Ich','kann','heute','kommen'],answer:'Ich kann heute kommen'}
  };
  if(topic.includes('Präpositionen mit Dativ')) return {
    body:'<p>Nach <b>aus, bei, mit, nach, seit, von, zu</b> steht Dativ.</p><div class="exbox">mit dem Bus · aus der Schweiz · bei meiner Mutter</div>',
    quiz:{q:'Was passt?',o:['mit dem Bus','mit den Bus','mit der Bus'],a:0,fb:'mit + Dativ: dem Bus.'},
    practice:{type:'fill',prompt:'Ich fahre mit ___ Zug.',answer:['dem'],hint:'Zug maskulin Dativ: dem'}
  };
  if(topic.includes('Perfekt')) return {
    body:'<p>Perfekt bildet man mit <b>haben/sein + Partizip II</b>. Bewegung oder Zustandswechsel oft mit <b>sein</b>.</p><div class="exbox">Ich habe gelernt. · Ich bin nach Hause gegangen.</div>',
    quiz:{q:'Welche Form ist richtig?',o:['Ich habe gelernt.','Ich bin gelernt.','Ich habe lernen.'],a:0,fb:'lernen bildet Perfekt mit haben: habe gelernt.'},
    practice:{type:'fill',prompt:'Ich ___ Deutsch gelernt.',answer:['habe'],hint:'lernen -> haben'}
  };
  if(topic.includes('Konjunktionen')) return {
    body:'<p><b>und, oder, aber, denn</b> verbinden Hauptsätze. Danach bleibt die normale Wortstellung.</p><div class="exbox">Ich lerne Deutsch, denn ich brauche Deutsch.</div>',
    quiz:{q:'Welche Konjunktion nennt einen Grund?',o:['denn','aber','oder'],a:0,fb:'denn nennt einen Grund.'},
    practice:{type:'fill',prompt:'Ich komme nicht, ___ ich bin krank.',answer:['denn'],hint:'Grund: denn'}
  };
  if(topic.includes('Präpositionen mit Akkusativ')) return {
    body:'<p>Nach <b>durch, für, gegen, ohne, um</b> steht Akkusativ.</p><div class="exbox">für den Kurs · ohne einen Stift · um die Ecke</div>',
    quiz:{q:'Was passt?',o:['für den Freund','für dem Freund','für der Freund'],a:0,fb:'für + Akkusativ: den Freund.'},
    practice:{type:'fill',prompt:'Ich kaufe Blumen für ___ Mutter.',answer:['meine'],hint:'Mutter feminin Akkusativ: meine'}
  };
  return {
    body:`<p>Dieses Thema kommt direkt aus dem <b>Grammatik-Skript A1</b>. Lies die Regel, sprich die Beispiele laut und bearbeite danach die Übung im Skript.</p>`,
    quiz:{q:`Was trainierst du hier?`,o:[topic,'Podcast','Hören'],a:0,fb:'Richtig.'},
    practice:{type:'fill',prompt:'Schreibe die Regel kurz in dein Heft.',answer:['fertig'],hint:'Vergleiche danach mit dem Skript.'}
  };
}
function guideList(items, tag='ul'){
  return `<${tag}>${items.map(item=>`<li>${item}</li>`).join('')}</${tag}>`;
}
function beginnerGrammarGuide(data){
  return `<div class="grammar-guide">
    <section class="guide-section"><h4>1. Die Idee</h4><p>${data.idea}</p></section>
    <section class="guide-section"><h4>2. Die Regel</h4>${guideList(data.rules)}</section>
    <section class="guide-section"><h4>3. Beispiele</h4><div class="example-lines">${data.examples.map(item=>`<div>${item}</div>`).join('')}</div></section>
    <section class="guide-section"><h4>4. Häufiger Fehler</h4><div class="mistake-box">${data.mistake}</div></section>
    <section class="guide-section"><h4>5. So lernst du es</h4>${guideList(data.steps,'ol')}</section>
  </div>`;
}
function a1FullGrammarTopic(lessonNum, topicNum){
  return (window.A1_GRAMMAR_FULL||[]).find(item=>item.lesson===lessonNum&&item.topic===topicNum);
}
function scriptLineClass(line){
  if(/^Beispiel:?/.test(line)) return 'script-line example-line';
  if(/^[a-z]\)/.test(line)) return 'script-line choice-line';
  return 'script-line';
}
function renderScriptLines(lines){
  return lines.map(line=>`<div class="${scriptLineClass(line)}">${escapeHtml(line)}</div>`).join('');
}
function a1FullGrammarBody(lessonNum, topicNum){
  const topic=a1FullGrammarTopic(lessonNum, topicNum);
  if(!topic) return '';
  const groups=[];
  let current={type:'rule', title:'Regel und Beispiele', lines:[]};
  topic.lines.forEach(line=>{
    if(line.startsWith('Übung ')){
      if(current.lines.length) groups.push(current);
      current={type:'exercise', title:line, lines:[]};
      return;
    }
    current.lines.push(line);
  });
  if(current.lines.length) groups.push(current);
  return `<div class="script-book">${groups.map(group=>{
    const cls=group.type==='exercise'?'script-exercise':'script-book-block';
    return `<section class="${cls}"><h4>${escapeHtml(group.title)}</h4>${renderScriptLines(group.lines)}</section>`;
  }).join('')}</div>`;
}

/* ---- Neu aufbereitete A1-Lektion: Erklärung + interaktive Übungen ---- */
function a1AuthoredTopic(lessonNum, topicNum){
  return (window.A1_GRAMMAR_LESSONS||{})[`${lessonNum}.${topicNum}`];
}
function gapField(spec){
  if(spec==='*') return `<input class="gap-input gap-free" data-free="1" autocomplete="off" spellcheck="false" placeholder="…">`;
  const wide=spec.startsWith('=');
  const ans=wide?spec.slice(1):spec;
  const shown=ans.split('|')[0];
  const size=wide?Math.min(Math.max(shown.length,16),40):Math.max(shown.length+1,3);
  return `<input class="gap-input${wide?' gap-wide':''}" data-ans="${escapeHtml(ans)}" size="${size}" autocomplete="off" spellcheck="false">`;
}
function parseGaps(text){
  const out=[]; const re=/\{\{(.*?)\}\}/g; let last=0, m;
  while((m=re.exec(text))){
    out.push(escapeHtml(text.slice(last,m.index)));
    out.push(gapField(m[1]));
    last=m.index+m[0].length;
  }
  out.push(escapeHtml(text.slice(last)));
  return out.join('');
}
function a1GapExercise(ex, idx){
  const items=ex.items.map(item=>`<li class="gap-item">${parseGaps(item)}</li>`).join('');
  return `<div class="card gap-exercise" data-ex="${idx}">
    <div class="gap-ex-head"><span class="gap-ex-title">${escapeHtml(ex.title)}</span><span class="gap-score" aria-live="polite"></span></div>
    <div class="gap-ex-inst">${ex.instruction.de}${ar(ex.instruction.ar)}</div>
    ${ex.example?`<div class="gap-ex-example"><b>Beispiel:</b> ${ex.example}</div>`:''}
    <ol class="gap-list">${items}</ol>
    <div class="gap-actions"><button type="button" class="gap-check">Prüfen</button><button type="button" class="gap-solve">Lösung</button></div>
  </div>`;
}
function a1AuthoredBody(topic){
  const ex=topic.explain;
  let html=`<div class="grammar-guide gg2">`;
  html+=`<section class="guide-section"><h4>1. Die Idee</h4><p>${ex.idea.de}</p>${ar(ex.idea.ar)}</section>`;
  html+=`<section class="guide-section"><h4>2. Die Regel</h4><ul class="rule-list">${ex.rules.map(r=>`<li>${r.de}${ar(r.ar)}</li>`).join('')}</ul></section>`;
  html+=`<section class="guide-section"><h4>3. Beispiele</h4><div class="example-lines">${ex.examples.map(e=>`<div>${e}</div>`).join('')}</div></section>`;
  html+=`<section class="guide-section"><h4>4. Achtung – häufiger Fehler</h4><div class="mistake-box">${ex.mistake.de}${ar(ex.mistake.ar)}</div></section>`;
  html+=`</div>`;
  html+=`<div class="gap-ex-wrap"><div class="section-label">✍️ Übungen mit Selbstkorrektur${ar('تمارين بتصحيح ذاتي')}</div>`;
  html+=topic.exercises.map((e,i)=>a1GapExercise(e,i)).join('');
  html+=`</div>`;
  return html;
}
function initGapExercises(root){
  (root||document).querySelectorAll('.gap-exercise').forEach(card=>{
    if(card.dataset.ready) return;
    card.dataset.ready='1';
    const inputs=[...card.querySelectorAll('.gap-input')];
    const score=card.querySelector('.gap-score');
    const gradable=inputs.filter(i=>!i.dataset.free);
    const check=()=>{
      let ok=0;
      gradable.forEach(inp=>{
        const acc=inp.dataset.ans.split('|').map(normalizeAnswer);
        const good=acc.includes(normalizeAnswer(inp.value));
        inp.classList.toggle('good',good); inp.classList.toggle('bad',!good);
        if(good) ok++;
      });
      inputs.filter(i=>i.dataset.free).forEach(inp=>inp.classList.toggle('good',!!inp.value.trim()));
      score.textContent=`${ok} / ${gradable.length} ✓`;
      score.className='gap-score show '+(ok===gradable.length?'all':'some');
    };
    const solve=()=>{
      gradable.forEach(inp=>{ inp.value=inp.dataset.ans.split('|')[0]; inp.classList.remove('bad'); inp.classList.add('good'); });
      check();
    };
    card.querySelector('.gap-check').addEventListener('click',check);
    card.querySelector('.gap-solve').addEventListener('click',solve);
    inputs.forEach(inp=>inp.addEventListener('keydown',e=>{ if(e.key==='Enter'){ e.preventDefault(); check(); } }));
  });
}
function a1BeginnerGrammarData(topic){
  if(topic.includes('Verb - Konjugation')) return {
    idea:'Ein Verb zeigt, was jemand macht. Im Deutschen verändert sich das Verb, wenn sich die Person verändert.',
    rules:['Suche zuerst das Subjekt: ich, du, er/sie/es, wir, ihr, sie/Sie.','Nimm den Verbstamm: lernen -> lern-, machen -> mach-, kommen -> komm-.','Setze die passende Endung: ich -e, du -st, er/sie/es -t, wir -en, ihr -t, sie/Sie -en.'],
    examples:['<b>ich lerne</b> Deutsch.','<b>du machst</b> die Übung.','Maria <b>kommt</b> aus Spanien.','Wir <b>wohnen</b> in Berlin.'],
    mistake:'Nicht sagen: <b>du lernen</b>. Richtig ist: <b>du lernst</b>. Nach <b>du</b> kommt fast immer <b>-st</b>.',
    steps:['Sprich die Formen laut: ich lerne, du lernst, er lernt.','Markiere in jedem Satz zuerst das Subjekt.','Schreibe fünf eigene Sätze mit fünf verschiedenen Personen.'],
    coverage:['Subjekt erkennen','Verbstamm finden','Endungen im Präsens benutzen']
  };
  if(topic.includes('Personalpronomen - Nominativ')) return {
    idea:'Personalpronomen ersetzen Namen und Nomen. So musst du nicht immer den Namen wiederholen.',
    rules:['Für eine sprechende Person benutzt du <b>ich</b>. Für die Person vor dir benutzt du <b>du</b>.','Für Männer oder maskuline Nomen benutzt du <b>er</b>, für Frauen oder feminine Nomen <b>sie</b>, für neutrale Nomen <b>es</b>.','Für mehrere Personen benutzt du <b>wir</b>, <b>ihr</b> oder <b>sie</b>. Die höfliche Form ist immer <b>Sie</b>.'],
    examples:['Maria kommt aus Italien. <b>Sie</b> kommt aus Italien.','Carlos lernt Deutsch. <b>Er</b> lernt Deutsch.','Das Kind spielt. <b>Es</b> spielt.','Anna und Max wohnen hier. <b>Sie</b> wohnen hier.'],
    mistake:'Nicht nach der deutschen Übersetzung raten. Lerne das Nomen mit Artikel: <b>das Mädchen</b> -> <b>es</b>, weil der Artikel <b>das</b> ist.',
    steps:['Unterstreiche zuerst das Nomen oder den Namen.','Frage: eine Person oder mehrere Personen?','Ersetze das Nomen mit dem passenden Pronomen und sprich den Satz noch einmal.'],
    coverage:['Pronomen für Personen','Pronomen für Nomen','du/Sie unterscheiden']
  };
  if(topic.includes('Wortstellung')) return {
    idea:'Die Wortstellung macht den deutschen Satz verständlich. Für Anfänger ist die wichtigste Regel: Das konjugierte Verb hat einen festen Platz.',
    rules:['Im normalen Aussagesatz steht das konjugierte Verb auf Position 2.','Position 1 kann das Subjekt sein oder ein anderes Satzteil wie <b>heute</b>, <b>morgen</b>, <b>in Berlin</b>.','In Ja/Nein-Fragen steht das Verb auf Position 1. In W-Fragen steht das Fragewort auf Position 1 und das Verb auf Position 2.'],
    examples:['<b>Ich wohne</b> in Köln.','<b>Heute wohne</b> ich in Köln.','<b>Wohnst</b> du in Köln?','<b>Wo wohnst</b> du?'],
    mistake:'Nicht sagen: <b>Heute ich wohne in Köln</b>. Richtig: <b>Heute wohne ich in Köln</b>.',
    steps:['Finde das konjugierte Verb.','Prüfe: Steht es im Aussagesatz auf Position 2?','Baue denselben Satz einmal als Frage.'],
    coverage:['Verbposition 2','Ja/Nein-Frage','W-Frage']
  };
  if(topic.includes('Starke Verben')) return {
    idea:'Starke Verben sind Verben, die ihren Vokal ändern. Diese Änderung passiert oft bei <b>du</b> und <b>er/sie/es</b>.',
    rules:['Einige Verben ändern <b>a -> ä</b>: fahren -> du fährst, er fährt.','Einige Verben ändern <b>e -> i/ie</b>: sprechen -> du sprichst, lesen -> du liest.','Bei <b>ich</b>, <b>wir</b>, <b>ihr</b> und <b>sie/Sie</b> bleibt der Vokal meistens normal.'],
    examples:['Ich <b>fahre</b> nach Berlin. Du <b>fährst</b> nach Berlin.','Er <b>liest</b> ein Buch. Wir <b>lesen</b> ein Buch.','Sie <b>spricht</b> Deutsch. Ihr <b>sprecht</b> Deutsch.'],
    mistake:'Nicht jedes Verb ist stark. Lerne starke Verben als kleine Liste mit Beispiel: <b>lesen - du liest - er liest</b>.',
    steps:['Lerne pro Tag drei starke Verben.','Schreibe immer die Formen für du und er/sie/es dazu.','Bilde einen kurzen Alltagssatz mit jedem Verb.'],
    coverage:['Vokalwechsel erkennen','du-Form bilden','er/sie/es-Form bilden']
  };
  if(topic.includes('Nomen und Artikel - Nominativ')) return {
    idea:'Ein deutsches Nomen braucht fast immer einen Artikel. Der Artikel gehört zum Wort und muss mitgelernt werden.',
    rules:['Es gibt drei bestimmte Artikel: <b>der</b>, <b>die</b>, <b>das</b>.','Die unbestimmten Artikel heißen: <b>ein</b>, <b>eine</b>, <b>ein</b>.','Im Plural benutzt du beim bestimmten Artikel <b>die</b>. Einen unbestimmten Artikel gibt es im Plural meistens nicht.'],
    examples:['<b>der</b> Tisch -> <b>ein</b> Tisch','<b>die</b> Tasche -> <b>eine</b> Tasche','<b>das</b> Buch -> <b>ein</b> Buch','<b>die</b> Bücher -> Bücher'],
    mistake:'Nicht nur <b>Buch</b> lernen. Immer lernen: <b>das Buch</b>. Sonst fehlen dir später Akkusativ, Dativ und Adjektivendungen.',
    steps:['Schreibe neue Nomen immer mit Artikel.','Markiere der blau, die rot, das grün oder mit eigenen Farben.','Bilde zu jedem Nomen einen Satz: Das ist ein Buch.'],
    coverage:['der/die/das','ein/eine/ein','Pluralartikel']
  };
  if(topic.includes('Anrede')) return {
    idea:'Im Deutschen gibt es eine persönliche und eine höfliche Anrede. Das ist wichtig im Alltag, im Kurs und bei Behörden.',
    rules:['Mit Freunden, Familie und Kindern benutzt du <b>du</b>.','Mit mehreren bekannten Personen benutzt du <b>ihr</b>.','Mit fremden Erwachsenen, Lehrern, Ärzten oder im Amt benutzt du <b>Sie</b>. Das Verb ist wie bei <b>sie</b> Plural.'],
    examples:['<b>Wo wohnst du?</b>','<b>Wo wohnt ihr?</b>','<b>Wo wohnen Sie?</b>','<b>Wie heißen Sie?</b>'],
    mistake:'Nicht <b>Wo wohnst Sie?</b>. Bei <b>Sie</b> heißt das Verb: <b>wohnen</b>.',
    steps:['Entscheide zuerst: privat oder formell?','Wähle du, ihr oder Sie.','Kontrolliere danach die Verbform.'],
    coverage:['du/ihr/Sie','höfliche Fragen','Verbform zur Anrede']
  };
  if(topic.includes('Genusregeln')) return {
    idea:'Das Genus ist der Artikel eines Nomens. Viele Artikel musst du lernen, aber einige Endungen helfen dir.',
    rules:['Endungen wie <b>-ung</b>, <b>-heit</b>, <b>-keit</b>, <b>-schaft</b> sind meistens feminin: <b>die</b>.','Endungen wie <b>-chen</b> und <b>-lein</b> sind neutral: <b>das</b>.','Tage, Monate und Jahreszeiten sind meistens maskulin: <b>der Montag</b>, <b>der Januar</b>, <b>der Sommer</b>.'],
    examples:['<b>die</b> Wohnung, <b>die</b> Freiheit, <b>die</b> Möglichkeit','<b>das</b> Mädchen, <b>das</b> Brötchen','<b>der</b> Freitag, <b>der</b> Winter'],
    mistake:'Regeln helfen, aber sie sind nicht immer 100 Prozent sicher. Wenn du unsicher bist, lerne den Artikel mit dem Wort.',
    steps:['Suche die Endung des Nomens.','Nutze die Regel als erste Hilfe.','Schreibe neue Wörter in Artikel-Gruppen.'],
    coverage:['typische Endungen','Artikel raten','Ausnahmen bewusst lernen']
  };
  if(topic.includes('Komposita')) return {
    idea:'Ein Kompositum ist ein zusammengesetztes Nomen. Das letzte Wort ist das wichtigste Wort.',
    rules:['Das letzte Wort bestimmt den Artikel.','Das letzte Wort bestimmt auch die Hauptbedeutung.','Manchmal steht zwischen den Wörtern ein Verbindungsbuchstabe wie <b>-s</b> oder <b>-n</b>.'],
    examples:['der Kaffee + <b>die Maschine</b> = <b>die</b> Kaffeemaschine','das Wort + <b>das Buch</b> = <b>das</b> Wörterbuch','die Arbeit + <b>der Platz</b> = <b>der</b> Arbeitsplatz'],
    mistake:'Nicht den Artikel vom ersten Wort nehmen. <b>der Kaffee</b> + <b>die Maschine</b> wird <b>die Kaffeemaschine</b>.',
    steps:['Teile das lange Wort in kleine Wörter.','Finde das letzte Wort.','Nimm Artikel und Bedeutung vom letzten Wort.'],
    coverage:['lange Wörter teilen','Grundwort finden','Artikel bestimmen']
  };
  if(topic==='Adjektiv') return {
    idea:'Adjektive beschreiben Personen und Sachen. Am Anfang lernst du sie am einfachsten nach <b>sein</b>.',
    rules:['Nach <b>sein</b>, <b>werden</b> und <b>bleiben</b> steht das Adjektiv ohne Endung.','Das Adjektiv beantwortet die Frage: Wie ist etwas?','Wenn das Adjektiv direkt vor dem Nomen steht, kommen später Endungen dazu. Für A1 ist zuerst die einfache Form wichtig.'],
    examples:['Das Zimmer ist <b>groß</b>.','Die Aufgabe ist <b>leicht</b>.','Der Kaffee ist <b>heiß</b>.','Meine Lehrerin ist <b>freundlich</b>.'],
    mistake:'Nicht sagen: <b>Das Zimmer ist großes</b>. Nach <b>ist</b> bleibt es: <b>groß</b>.',
    steps:['Lerne Adjektive mit Gegenteilen: groß - klein, alt - neu.','Bilde Sätze mit ist/sind.','Beschreibe fünf Dinge in deinem Zimmer.'],
    coverage:['Adjektiv nach sein','Gegenteile','einfache Beschreibungen']
  };
  if(topic.includes('trennbare Verben')) return {
    idea:'Viele deutsche Verben haben einen kleinen Teil vorne. Bei trennbaren Verben wandert dieser Teil im Hauptsatz ans Ende.',
    rules:['Trennbare Verben haben oft betonte Präfixe: <b>auf</b>stehen, <b>ein</b>kaufen, <b>an</b>rufen.','Im Hauptsatz steht das konjugierte Verb auf Position 2 und das Präfix am Ende.','Nicht trennbare Verben bleiben zusammen, zum Beispiel <b>besuchen</b>, <b>bezahlen</b>, <b>verstehen</b>.'],
    examples:['Ich <b>stehe</b> um 7 Uhr <b>auf</b>.','Wir <b>kaufen</b> heute <b>ein</b>.','Er <b>ruft</b> seine Mutter <b>an</b>.','Ich <b>besuche</b> meine Freundin.'],
    mistake:'Nicht sagen: <b>Ich aufstehe um 7 Uhr</b>. Richtig: <b>Ich stehe um 7 Uhr auf</b>.',
    steps:['Markiere das Präfix.','Setze das Verb auf Position 2.','Setze das Präfix ans Satzende.'],
    coverage:['trennbare Präfixe','Satzklammer','nicht trennbare Verben']
  };
  if(topic==='Akkusativ') return {
    idea:'Der Akkusativ zeigt oft die Person oder Sache, die direkt von einer Handlung betroffen ist.',
    rules:['Viele Verben brauchen Akkusativ: haben, sehen, kaufen, fragen, suchen, brauchen.','Nur maskulin verändert sich deutlich: <b>der -> den</b>, <b>ein -> einen</b>.','Feminin, neutral und Plural bleiben im Artikel oft gleich: die, das, die.'],
    examples:['Ich sehe <b>den Mann</b>.','Sie kauft <b>einen Stift</b>.','Wir suchen <b>die Adresse</b>.','Er hat <b>das Buch</b>.'],
    mistake:'Nicht sagen: <b>Ich sehe der Mann</b>. Nach <b>sehen</b> brauchst du Akkusativ: <b>den Mann</b>.',
    steps:['Finde das Verb.','Frage: Wen oder was?','Ändere maskulin zu den/einen.'],
    coverage:['Akkusativobjekt','den/einen','wichtige Akkusativverben']
  };
  if(topic.includes('Possessivartikel')) return {
    idea:'Possessivartikel zeigen, wem etwas gehört oder zu wem etwas gehört.',
    rules:['Die Grundformen sind: mein, dein, sein, ihr, unser, euer, Ihr.','Die Endung richtet sich nach dem Nomen: <b>mein Vater</b>, <b>meine Mutter</b>, <b>mein Kind</b>.','Im Plural benutzt du oft <b>meine</b>, <b>deine</b>, <b>seine</b>, <b>ihre</b>.'],
    examples:['Das ist <b>mein</b> Bruder.','Das ist <b>meine</b> Schwester.','Das ist <b>mein</b> Handy.','Das sind <b>meine</b> Bücher.'],
    mistake:'Nicht nach der Person allein entscheiden. Entscheidend ist auch das Nomen danach: <b>meine Mutter</b>, aber <b>mein Vater</b>.',
    steps:['Wähle zuerst den Besitzer: ich -> mein, du -> dein.','Schau dann auf das Nomen und seinen Artikel.','Setze die passende Endung.'],
    coverage:['Besitzer ausdrücken','mein/meine','Endung nach Nomen']
  };
  if(topic.includes('Präteritum')) return {
    idea:'Im A1-Alltag benutzt du das Präteritum vor allem bei <b>sein</b> und <b>haben</b>.',
    rules:['sein im Präteritum: ich war, du warst, er/sie/es war, wir waren, ihr wart, sie/Sie waren.','haben im Präteritum: ich hatte, du hattest, er/sie/es hatte, wir hatten, ihr hattet, sie/Sie hatten.','Für viele andere Verben benutzt du im Alltag eher Perfekt.'],
    examples:['Gestern <b>war</b> ich krank.','Wir <b>waren</b> im Deutschkurs.','Ich <b>hatte</b> keine Zeit.','Sie <b>hatten</b> einen Termin.'],
    mistake:'Nicht sagen: <b>Ich bin war krank</b>. Du brauchst nur ein Verb: <b>Ich war krank</b>.',
    steps:['Lerne zuerst nur sein und haben.','Schreibe Sätze mit gestern, letzte Woche, früher.','Vergleiche: Heute bin ich hier. Gestern war ich hier.'],
    coverage:['war/waren','hatte/hatten','Vergangenheit ausdrücken']
  };
  if(topic.includes('Zeitadverbien')) return {
    idea:'Zeitadverbien sagen, wann etwas passiert oder in welcher Reihenfolge etwas passiert.',
    rules:['Für Gegenwart: heute, jetzt, gerade.','Für Vergangenheit: gestern, früher, letzte Woche.','Für Reihenfolge: zuerst, dann, danach, zum Schluss. Wenn ein Zeitwort auf Position 1 steht, bleibt das Verb auf Position 2.'],
    examples:['<b>Heute</b> lerne ich Deutsch.','<b>Gestern</b> war ich krank.','<b>Zuerst</b> frühstücke ich. <b>Dann</b> gehe ich zur Arbeit.'],
    mistake:'Nicht sagen: <b>Heute ich lerne Deutsch</b>. Richtig: <b>Heute lerne ich Deutsch</b>.',
    steps:['Wähle ein Zeitwort.','Setze es an Position 1 oder in die Mitte.','Kontrolliere die Verbposition.'],
    coverage:['Zeitangaben','Reihenfolge','Verbposition nach Zeitwort']
  };
  if(topic==='Dativ') return {
    idea:'Der Dativ zeigt oft die Person, die etwas bekommt, hilft oder zu der etwas gehört. Die Frage ist häufig: Wem?',
    rules:['Artikel im Dativ: der -> dem, die -> der, das -> dem, die Plural -> den + oft -n.','Wichtige Verben mit Dativ: helfen, danken, antworten, gefallen, gehören.','Nach einigen Präpositionen steht immer Dativ.'],
    examples:['Ich helfe <b>dem Mann</b>.','Sie antwortet <b>der Lehrerin</b>.','Das Buch gehört <b>dem Kind</b>.','Wir danken <b>den Freunden</b>.'],
    mistake:'Nicht sagen: <b>Ich helfe den Mann</b>. <b>helfen</b> braucht Dativ: <b>dem Mann</b>.',
    steps:['Finde das Verb.','Frage: Wem?','Setze den Artikel in den Dativ.'],
    coverage:['Dativartikel','Verben mit Dativ','wem-Frage']
  };
  if(topic.includes('Imperativ')) return {
    idea:'Der Imperativ ist die Befehls- oder Bitteform. Du benutzt ihn für kurze Anweisungen.',
    rules:['Für <b>du</b> nimmst du oft den Verbstamm: kommen -> Komm!, machen -> Mach!','Für <b>ihr</b> nimmst du die ihr-Form: Kommt!, Macht!','Für höflich <b>Sie</b>: Verb + Sie: Kommen Sie bitte!, Machen Sie bitte!'],
    examples:['<b>Komm</b> bitte!','<b>Hört</b> gut zu!','<b>Sprechen Sie</b> bitte langsam!','<b>Öffnen Sie</b> das Buch!'],
    mistake:'Nicht vergessen: Mit <b>Sie</b> bleibt <b>Sie</b> im Satz: <b>Kommen Sie bitte</b>.',
    steps:['Entscheide: du, ihr oder Sie?','Bilde die passende Form.','Mache aus dem Befehl mit bitte eine höfliche Bitte.'],
    coverage:['du-Imperativ','ihr-Imperativ','Sie-Imperativ']
  };
  if(topic.includes('Modalverben')) return {
    idea:'Modalverben verändern die Bedeutung eines zweiten Verbs: können, müssen, wollen, möchten, dürfen, sollen.',
    rules:['Das Modalverb steht konjugiert auf Position 2.','Das zweite Verb steht im Infinitiv am Ende.','Bei <b>ich</b> und <b>er/sie/es</b> haben viele Modalverben keine normale Endung: ich kann, er kann.'],
    examples:['Ich <b>kann</b> Deutsch <b>sprechen</b>.','Wir <b>müssen</b> heute <b>lernen</b>.','Sie <b>möchte</b> einen Kaffee <b>trinken</b>.','Darf ich hier <b>sitzen</b>?'],
    mistake:'Nicht sagen: <b>Ich kann spreche Deutsch</b>. Richtig: <b>Ich kann Deutsch sprechen</b>.',
    steps:['Wähle das Modalverb.','Konjugiere nur das Modalverb.','Setze das zweite Verb ans Ende im Infinitiv.'],
    coverage:['Modalverb Position 2','Infinitiv am Ende','Bedeutung der Modalverben']
  };
  if(topic.includes('Präpositionen mit Dativ')) return {
    idea:'Einige Präpositionen verlangen immer Dativ. Nach diesen Wörtern musst du den Artikel ändern.',
    rules:['Dativ-Präpositionen: <b>aus, bei, mit, nach, seit, von, zu</b>.','Nach diesen Präpositionen benutzt du dem, der, dem, den.','Viele dieser Wörter brauchst du täglich für Wege, Herkunft und Begleitung.'],
    examples:['Ich fahre <b>mit dem Bus</b>.','Sie kommt <b>aus der Schweiz</b>.','Wir gehen <b>zu dem Arzt</b> -> <b>zum Arzt</b>.','Ich bin <b>bei meiner Mutter</b>.'],
    mistake:'Nicht sagen: <b>mit der Bus</b>. Bus ist maskulin, Dativ: <b>mit dem Bus</b>.',
    steps:['Lerne die Liste auswendig: aus, bei, mit, nach, seit, von, zu.','Markiere die Präposition im Satz.','Setze das Nomen danach in den Dativ.'],
    coverage:['Dativ-Präpositionen','Artikel nach Präposition','Alltagssätze']
  };
  if(topic.includes('Perfekt')) return {
    idea:'Das Perfekt ist die wichtigste Vergangenheitsform im gesprochenen Deutsch.',
    rules:['Perfekt besteht aus <b>haben/sein + Partizip II</b>.','Die meisten Verben benutzen <b>haben</b>: Ich habe gelernt.','Verben mit Bewegung oder Zustandswechsel benutzen oft <b>sein</b>: Ich bin gegangen.'],
    examples:['Ich <b>habe</b> Deutsch <b>gelernt</b>.','Sie <b>hat</b> Kaffee <b>getrunken</b>.','Wir <b>sind</b> nach Hause <b>gegangen</b>.','Er <b>ist</b> spät <b>gekommen</b>.'],
    mistake:'Nicht sagen: <b>Ich habe gehen</b>. Du brauchst das Partizip II: <b>Ich bin gegangen</b>.',
    steps:['Wähle haben oder sein.','Bilde das Partizip II.','Setze haben/sein auf Position 2 und das Partizip ans Ende.'],
    coverage:['haben/sein','Partizip II','Satzklammer im Perfekt']
  };
  if(topic.includes('Konjunktionen')) return {
    idea:'Konjunktionen verbinden zwei Wörter oder zwei Sätze. Am Anfang sind und, oder, aber und denn besonders wichtig.',
    rules:['<b>und</b> verbindet gleiche Informationen.','<b>oder</b> zeigt eine Wahl.','<b>aber</b> zeigt einen Gegensatz. <b>denn</b> nennt einen Grund. Nach diesen Konjunktionen bleibt die normale Wortstellung.'],
    examples:['Ich lerne Deutsch <b>und</b> ich arbeite.','Möchtest du Tee <b>oder</b> Kaffee?','Ich habe Zeit, <b>aber</b> ich bin müde.','Ich lerne Deutsch, <b>denn</b> ich brauche Deutsch.'],
    mistake:'Nach <b>denn</b> kommt kein Verb am Ende. Richtig: <b>denn ich bin krank</b>.',
    steps:['Wähle die Bedeutung: Addition, Wahl, Gegensatz oder Grund.','Verbinde zwei kurze Sätze.','Kontrolliere die Wortstellung nach der Konjunktion.'],
    coverage:['und/oder/aber/denn','Sätze verbinden','Grund nennen']
  };
  if(topic.includes('Präpositionen mit Akkusativ')) return {
    idea:'Einige Präpositionen verlangen immer Akkusativ. Besonders wichtig sind sie für Wege, Ziele und kleine Alltagssätze.',
    rules:['Akkusativ-Präpositionen: <b>durch, für, gegen, ohne, um</b>.','Nach diesen Präpositionen wird maskulin: <b>den/einen</b>.','Feminin, neutral und Plural bleiben im Artikel oft gleich.'],
    examples:['Wir gehen <b>durch den Park</b>.','Das Geschenk ist <b>für meine Mutter</b>.','Ich bin <b>gegen den Plan</b>.','Er kommt <b>ohne einen Stift</b>.'],
    mistake:'Nicht sagen: <b>für dem Freund</b>. Nach <b>für</b> kommt Akkusativ: <b>für den Freund</b>.',
    steps:['Lerne die Liste: durch, für, gegen, ohne, um.','Markiere das Nomen nach der Präposition.','Ändere maskulin zu den/einen.'],
    coverage:['Akkusativ-Präpositionen','den/einen nach Präposition','Alltagssätze']
  };
  return {
    idea:'Dieses Thema gehört zu den A1-Grundlagen. Lerne zuerst die einfache Regel und danach viele kurze Beispiele.',
    rules:['Lies die Regel langsam.','Vergleiche die Beispiele.','Schreibe eigene Mini-Sätze.'],
    examples:[`<b>${topic}</b> im einfachen A1-Satz.`],
    mistake:'Lerne nicht nur die Regel allein. Du brauchst immer einen Beispielsatz dazu.',
    steps:['Regel lesen.','Beispiele laut sprechen.','Eine eigene Übung lösen.'],
    coverage:['Regel verstehen','Beispiele sprechen','eigene Sätze bilden']
  };
}
const A1_GRAM=A1_GRAMMAR_SCRIPT.map(lesson=>({
  num:lesson.num,
  titleAr:'',
  topics:lesson.topics.map((topic,index)=>{
    const topicMeta=a1GrammarTopicMeta(topic);
    const guide=a1BeginnerGrammarData(topic);
    const fullTopic=a1FullGrammarTopic(lesson.num,index+1);
    const fullBody=a1FullGrammarBody(lesson.num,index+1);
    const authored=a1AuthoredTopic(lesson.num,index+1);
    const short=topic.replace('Personalpronomen - ','Pronomen ').replace('Nomen und Artikel - ','Artikel ').replace('Wortstellung: ','Wortstellung · ').replace('Nicht trennbare und trennbare Verben','Trennbare Verben');
    return {
      short,
      title:fullTopic?.title||topic,
      titleAr:'',
      sourcePage:lesson.start+index,
      coveragePoints:authored?[`${authored.exercises.length} Übungen interaktiv`,'Mit Selbstkorrektur ✓','Erklärung neu geschrieben']:fullTopic?[`${fullTopic.lines.length} Zeilen aus dem Skript`,`${fullTopic.lines.filter(line=>line.startsWith('Übung ')).length} Übungen vollständig als Text`,'Für Handy formatiert']:guide.coverage,
      visual:{
        src:`assets/a1/chapters/chapter-${lesson.num}.webp`,
        alt:`A1 Grammatik Lektion ${lesson.num}`,
        caption:`A1 Grammatik · Lektion ${lesson.num}`,
        captionAr:''
      },
      body:gramBody(authored?a1AuthoredBody(authored):(fullBody||beginnerGrammarGuide(guide))),
      quiz:[topicMeta.quiz],
      practice:[topicMeta.practice]
    };
  })
}));

const A2_SECTIONS=[
  {route:'a2/lessons',icon:'2',title:'Lektionen',text:'Netzwerk neu A2.1 + A2.2 und Grammatik-Skript.',ar:'دروس A2 ومذكرة القواعد.'},
  {route:'train',icon:'🧠',title:'Wort-Trainer',text:'Wörter mit System lernen: erkennen, hören, schreiben – mit Wiederholung zur richtigen Zeit.',ar:'حفظ الكلمات بنظام التكرار المتباعد.'},
  {route:'dict',icon:'W',title:'Wörterbuch',text:'Alle A2-Wörter mit Suche und Kapitelfilter.',ar:'قاموس كل كلمات A2.'},
  {route:'full-dict',icon:'D',title:'Offline-Wörterbuch',text:'Großes Deutsch–Arabisch-Wörterbuch, komplett ohne Internet.',ar:'قاموس ألماني–عربي شامل يعمل أوفلاين.'},
  {route:'verbs',icon:'V',title:'Verben',text:'Konjugation, Präteritum und Perfekt.',ar:'تصريف الأفعال.'},
  {route:'phrases',icon:'R',title:'Redewendungen',text:'Ausdrücke für Alltag, Prüfung und Gespräche.',ar:'تعبيرات جاهزة.'},
  {route:'podcast',icon:'P',title:'Podcast',text:'12 Folgen zum Hören und Mitlesen.',ar:'بودكاست للاستماع والقراءة.'},
  {route:'games',icon:'G',title:'Spiele',text:'Schnelle Spiele für Wortschatz und Satzbau.',ar:'ألعاب لتثبيت الكلمات.'},
  {route:'listen',icon:'H',title:'Hören',text:'Hören & Sprechen A2 mit Buchseiten.',ar:'استماع A2 مع صفحات الكتاب.'},
  {route:'exam',icon:'E',title:'Prüfung',text:'Goethe-A2 Modelltraining mit Timer.',ar:'تدريب امتحان A2.'}
];

const B1_SECTIONS=[
  {route:'b1.1/lessons',icon:'1',title:'Lektionen',text:'Sechs vollständige Kapitel mit Wortschatz, Lesen, Grammatik, Sprechen und Quiz.',ar:'ست وحدات كاملة مع الكلمات والقراءة والقواعد والمحادثة والاختبارات.'},
  {route:'train',icon:'🧠',title:'Wort-Trainer',text:'Wörter mit System lernen: erkennen, hören, schreiben – mit Wiederholung zur richtigen Zeit.',ar:'حفظ الكلمات بنظام التكرار المتباعد.'},
  {route:'b1.1/dict',icon:'W',title:'Wörterbuch',text:'Alle B1.1-Wörter mit Suche, Beispielen und Kapitelfilter.',ar:'قاموس كل كلمات B1.1.'},
  {route:'b1.1/verbs',icon:'V',title:'Verben',text:'Wichtige B1-Verben mit Präteritum, Perfekt und Präpositionen.',ar:'أهم أفعال B1 مع الماضي وحروف الجر.'},
  {route:'b1.1/phrases',icon:'R',title:'Redemittel',text:'Alle Redemittel aus den sechs Kapiteln an einem Ort.',ar:'كل التعبيرات الجاهزة من الوحدات الست.'},
  {route:'b1.1/listen',icon:'H',title:'Hören',text:'18 Hörtexte: Gespräche, Durchsagen, Radio – mit Aufgaben und Transkript.',ar:'١٨ نص استماع بأسئلة ونص مكتوب مع الترجمة.'},
  {route:'b1.1/podcast',icon:'🎧',title:'Podcast',text:'Sechs Folgen zu den Kapiteln – hören und mitlesen.',ar:'ست حلقات بودكاست، حلقة لكل وحدة.'},
  {route:'b1.1/games',icon:'T',title:'Training',text:'Schnell-Challenge, Memory, Artikel und Satz-Puzzle mit B1-Wörtern.',ar:'ألعاب تدريب بكلمات وجمل B1.1.'},
  {route:'b1.1/exam',icon:'P',title:'Prüfung',text:'Goethe-B1 Modelltraining: Lesen, Hören, Schreiben und Sprechen.',ar:'تدريب على نموذج امتحان Goethe B1.'}
];
