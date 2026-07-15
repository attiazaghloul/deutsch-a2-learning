(function bootstrapDeutschStudio(){
  'use strict';

  const STATE_KEY='deutschLearningStateV2';
  const DAY=24*60*60*1000;
  const utilityRoutes=new Set(['','review','progress','favorites','word-search']);
  const scrollPositions=new Map();
  const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
  let reviewRevealed=false;

  const storage={
    get(key,fallback=null){
      try{const value=localStorage.getItem(key);return value===null?fallback:value;}
      catch{return fallback;}
    },
    set(key,value){try{localStorage.setItem(key,value);return true;}catch{return false;}},
    remove(key){try{localStorage.removeItem(key);}catch{}}
  };

  function defaultState(){
    return {
      version:2,
      profile:{onboarded:false,level:'a2',goal:'daily-life',minutes:15,arabic:'on-demand',weeklyGoal:5},
      lastLearningRoute:'a2',
      history:[],
      review:{},
      settings:{motion:'auto',haptics:false}
    };
  }

  function loadState(){
    try{
      const parsed=JSON.parse(storage.get(STATE_KEY,'null'));
      const base=defaultState();
      if(!parsed||typeof parsed!=='object') return base;
      return {
        ...base,...parsed,
        profile:{...base.profile,...parsed.profile},
        settings:{...base.settings,...parsed.settings},
        review:parsed.review&&typeof parsed.review==='object'?parsed.review:{},
        history:Array.isArray(parsed.history)?parsed.history:[]
      };
    }catch{return defaultState();}
  }

  let state=loadState();
  function saveState(){storage.set(STATE_KEY,JSON.stringify(state));}

  const icons={
    home:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="m3 11 9-8 9 8"/><path d="M5 10v10h14V10M9 20v-6h6v6"/></svg>',
    learn:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H11v17H6.5A2.5 2.5 0 0 0 4 22z"/><path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H13v17h4.5A2.5 2.5 0 0 1 20 22z"/></svg>',
    review:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M4 12a8 8 0 1 0 2.34-5.66L4 8.68"/><path d="M4 4v4.68h4.68"/><path d="M12 7v5l3 2"/></svg>',
    listen:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M4 14v-2a8 8 0 0 1 16 0v2"/><path d="M18 19h1a2 2 0 0 0 2-2v-3h-3zM6 19H5a2 2 0 0 1-2-2v-3h3z"/><path d="M18 19c0 1.1-.9 2-2 2h-2"/></svg>',
    progress:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M4 20V10M10 20V4M16 20v-7M22 20V7"/></svg>',
    search:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg>',
    dictionary:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M4 4h12a3 3 0 0 1 3 3v13H7a3 3 0 0 1-3-3z"/><path d="M7 4v16M10 9h6M10 13h5"/></svg>',
    exam:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M7 3h10v4H7z"/><path d="M5 5H3v16h18V5h-2M8 12h8M8 16h5"/></svg>',
    game:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M8 8h8a5 5 0 0 1 4.7 3.3l1.1 3.2a3 3 0 0 1-5 3l-1.3-1.5h-7l-1.3 1.5a3 3 0 0 1-5-3l1.1-3.2A5 5 0 0 1 8 8Z"/><path d="M7 12v3M5.5 13.5h3M16 12h.01M18 14h.01"/></svg>',
    settings:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-2.83 2.83-.06-.06A1.7 1.7 0 0 0 15 19.4a1.7 1.7 0 0 0-1 .6 1.7 1.7 0 0 0-.4 1V21h-4v-.09A1.7 1.7 0 0 0 8.6 19.4a1.7 1.7 0 0 0-1.88.34l-.06.06-2.83-2.83.06-.06A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-.6-1 1.7 1.7 0 0 0-1-.4H3v-4h.09A1.7 1.7 0 0 0 4.6 8.6a1.7 1.7 0 0 0-.34-1.88l-.06-.06 2.83-2.83.06.06A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-.6 1.7 1.7 0 0 0 .4-1V3h4v.09a1.7 1.7 0 0 0 1 1.51 1.7 1.7 0 0 0 1.88-.34l.06-.06 2.83 2.83-.06.06A1.7 1.7 0 0 0 19.4 9c.13.4.35.75.6 1 .28.26.63.4 1 .4h.09v4H21a1.7 1.7 0 0 0-1.6.6Z"/></svg>',
    arrow:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="m9 18 6-6-6-6"/></svg>',
    clock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    cards:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="5" y="4" width="14" height="16" rx="2"/><path d="M9 8h6M9 12h4"/></svg>'
  };

  const primaryNav=[
    {id:'home',label:'Start',route:'',icon:icons.home},
    {id:'learn',label:'Inhalte',route:()=>state.profile.level==='a1'?'a1':'a2',icon:icons.learn},
    {id:'review',label:'Wörter',route:'word-search',icon:icons.search},
    {id:'listen',label:'Hören',route:()=>state.profile.level==='a1'?'a1/listen':'listen',icon:icons.listen},
    {id:'progress',label:'Fortschritt',route:'progress',icon:icons.progress}
  ];

  function navRoute(item){return typeof item.route==='function'?item.route():item.route;}
  function navMarkup(item,rail=false){
    return `<button type="button" class="app-nav-item" data-shell-route="${navRoute(item)}" data-nav-id="${item.id}" aria-label="${item.label}">${item.icon}<span>${item.label}</span></button>`;
  }

  function installShell(){
    if(document.querySelector('.app-bottom-nav')) return;
    document.body.dataset.ui='deutsch-studio';
    view.setAttribute('tabindex','-1');
    view.setAttribute('aria-live','off');
    const app=document.querySelector('#app');
    app.insertAdjacentHTML('afterbegin',`<aside class="app-rail" aria-label="Hauptnavigation"><div class="app-rail-brand" aria-label="Deutsch Studio">DS</div>${primaryNav.map(item=>navMarkup(item,true)).join('')}<div class="app-rail-spacer"></div><button type="button" class="app-nav-item app-rail-settings" data-open-settings aria-label="Einstellungen">${icons.settings}<span>Einstellungen</span></button></aside>`);
    app.insertAdjacentHTML('beforeend',`<nav class="app-bottom-nav" aria-label="Hauptnavigation">${primaryNav.map(item=>navMarkup(item)).join('')}</nav>`);
    document.body.insertAdjacentHTML('beforeend','<div class="route-announcer" id="routeAnnouncer" role="status" aria-live="polite"></div><div class="next-toast-stack" id="nextToastStack" aria-live="polite"></div>');
    const settingsPanel=document.querySelector('#settingsModal .modal-panel');
    if(settingsPanel&&!settingsPanel.querySelector('[data-motion-setting]')){
      settingsPanel.insertAdjacentHTML('beforeend',`<div class="setting-row" data-motion-setting><b>Bewegung und Übergänge</b><p>Reduziere Animationen, wenn du eine ruhigere Oberfläche bevorzugst.</p><div class="motion-choice" role="group" aria-label="Bewegung"><button type="button" data-motion-value="auto">Systemstandard</button><button type="button" data-motion-value="reduced">Reduziert</button></div></div>`);
      updateMotionSetting();
    }
  }

  function updateMotionSetting(){
    document.documentElement.dataset.motion=state.settings.motion;
    document.querySelectorAll('[data-motion-value]').forEach(button=>{
      const active=button.dataset.motionValue===state.settings.motion;
      button.classList.toggle('active',active);
      button.setAttribute('aria-pressed',String(active));
    });
  }

  function routeGroup(hash){
    if(!hash) return 'home';
    if(hash==='review'||hash==='favorites'||hash==='word-search') return 'review';
    if(hash==='progress') return 'progress';
    if(hash==='listen'||hash.startsWith('listen/')||hash==='podcast'||hash.startsWith('podcast/')||hash.includes('/listen')) return 'listen';
    return 'learn';
  }

  function updateShell(hash){
    const group=routeGroup(hash);
    document.querySelectorAll('[data-nav-id]').forEach(button=>{
      const active=button.dataset.navId===group;
      if(active) button.setAttribute('aria-current','page');
      else button.removeAttribute('aria-current');
      const item=primaryNav.find(entry=>entry.id===button.dataset.navId);
      if(item) button.dataset.shellRoute=navRoute(item);
    });
  }

  function featureTabs(level,active){
    const items=level==='a1'
      ?[['lessons','Lektionen','a1/lessons'],['dict','Wörterbuch','a1/dict'],['verbs','Verben','a1/verbs'],['phrases','Redemittel','a1/phrases'],['listen','Hören','a1/listen']]
      :[['lessons','Lektionen','a2/lessons'],['dict','Wörterbuch','dict'],['verbs','Verben','verbs'],['phrases','Redemittel','phrases'],['podcast','Podcast','podcast'],['games','Training','games'],['listen','Hören','listen'],['exam','Prüfung','exam']];
    return `<nav class="feature-tabs" aria-label="${level.toUpperCase()} Bereiche">${items.map(([id,label,route])=>`<button type="button" class="feature-tab" onclick="go('${route}')" ${id===active?'aria-current="page"':''}>${label}</button>`).join('')}</nav>`;
  }

  const lessonStages=[
    ['ueberblick','Start'],['wortschatz','Wörter'],['lesen','Lesen'],['redemittel','Redemittel'],
    ['grammatik','Grammatik'],['sprechen','Sprechen'],['quiz','Check']
  ];

  function lessonProgress(routeBase,active){
    const index=Math.max(0,lessonStages.findIndex(([id])=>id===active));
    return `<section class="lesson-journey" aria-label="Lernweg"><div class="lesson-journey-copy"><span>Etappe ${index+1} von ${lessonStages.length}</span><b>${lessonStages[index][1]}</b></div><div class="lesson-journey-track" role="progressbar" aria-label="Fortschritt im Kapitel" aria-valuemin="1" aria-valuemax="${lessonStages.length}" aria-valuenow="${index+1}"><span style="--lesson-progress:${(index+1)/lessonStages.length}"></span></div><ol>${lessonStages.map(([id,label],stageIndex)=>`<li class="${stageIndex<index?'done':stageIndex===index?'current':''}"><button type="button" onclick="go('${routeBase}/${id}')" ${stageIndex===index?'aria-current="step"':''}><span>${stageIndex+1}</span><small>${label}</small></button></li>`).join('')}</ol></section>`;
  }

  function lessonNext(routeBase,active){
    const index=Math.max(0,lessonStages.findIndex(([id])=>id===active));
    const previous=lessonStages[index-1];
    const next=lessonStages[index+1];
    return `<nav class="lesson-next" aria-label="Navigation im Lernweg">${previous?`<button type="button" class="next-secondary" onclick="go('${routeBase}/${previous[0]}')">Zurück: ${previous[1]}</button>`:'<span></span>'}${next?`<button type="button" class="next-primary" onclick="go('${routeBase}/${next[0]}')">Weiter: ${next[1]} ${icons.arrow}</button>`:`<button type="button" class="next-primary" onclick="go('review')">Im Review festigen ${icons.arrow}</button>`}</nav>`;
  }

  function lessonStart(routeBase){
    const recent=state.history.slice().reverse().find(item=>item.route?.startsWith(`${routeBase}/`));
    const destination=recent?.route||`${routeBase}/ueberblick`;
    const label=recent?'Weiterlernen':'Kapitel starten';
    return `<div class="chapter-start"><button type="button" class="next-primary" onclick="go('${destination}')">${label} ${icons.arrow}</button><button type="button" class="next-secondary" onclick="go('review')">Fällige Wiederholungen</button></div>`;
  }

  function stableId(value){
    let hash=2166136261;
    for(const char of String(value)){hash^=char.codePointAt(0);hash=Math.imul(hash,16777619);}
    return `mistake-${(hash>>>0).toString(36)}`;
  }

  function addMistake(item){
    if(!item) return;
    const prompt=String(item.prompt||item.q||item.word||'').trim();
    const answer=String(item.answer||item.definition||'').trim();
    if(!prompt||!answer) return;
    const id=stableId(`${prompt}|${answer}`);
    state.review[id]={...(state.review[id]||{}),id,dueAt:0,interval:0,item:{w:prompt,d:answer,ar:item.ar||'',ex:item.example||''},source:'mistake',context:item.context||'Training'};
    saveState();
  }

  function routeLabel(hash){
    if(!hash) return 'Start';
    if(hash==='a1') return 'Deutsch A1';
    if(hash==='a2') return 'Deutsch A2';
    if(hash==='a1/lessons') return 'A1 Lektionen';
    if(hash==='a2/lessons') return 'A2 Lektionen';
    if(hash==='review') return 'Wiederholen';
    if(hash==='progress') return 'Fortschritt';
    if(hash.includes('listen')||hash.startsWith('podcast')) return 'Hören und Sprechen';
    if(hash.includes('dict')) return 'Wörterbuch';
    if(hash.includes('verbs')) return 'Verben';
    if(hash.includes('phrases')) return 'Redemittel';
    if(hash.startsWith('games')) return 'Training';
    if(hash.startsWith('exam')) return 'Prüfung';
    const chapter=hash.match(/(?:a1\/)?k(\d+)/);
    if(chapter) return `Kapitel ${chapter[1]}`;
    return hash.split('/').filter(Boolean).at(-1)?.replace(/[-_]/g,' ')||'Deutsch Learning';
  }

  function getJSON(key,fallback={}){
    try{return JSON.parse(storage.get(key,JSON.stringify(fallback)))||fallback;}
    catch{return fallback;}
  }

  function legacyMetrics(){
    let favorites=0;
    try{favorites=favoriteList().length;}catch{}
    const listening=['a1HoerenProgress','a1PhonetikProgress','hoerenProgress'].reduce((sum,key)=>sum+Object.values(getJSON(key,{})).filter(Boolean).length,0);
    let grammar=0;
    try{
      for(let index=0;index<localStorage.length;index+=1){
        const key=localStorage.key(index)||'';
        if(key.startsWith('grammarPractice:')) grammar+=Object.values(getJSON(key,{})).filter(Boolean).length;
      }
    }catch{}
    const games=getJSON('a2GameBestScores',{});
    const exams=getJSON('a2ExamScores',{});
    const gameBest=Math.max(0,...Object.values(games).map(Number).filter(Number.isFinite));
    const examBest=Math.max(0,...Object.values(exams).map(Number).filter(Number.isFinite));
    return {favorites,listening,grammar,gameBest,examBest};
  }

  function todayHistory(){
    const day=new Date().toISOString().slice(0,10);
    return state.history.filter(item=>item.date===day);
  }

  function reviewItems(){
    let favorites=[];
    try{favorites=favoriteList();}catch{}
    const favoriteIds=new Set();
    favorites.forEach(item=>{
      const id=item.dictionaryId||item.id;
      if(!id) return;
      favoriteIds.add(id);
      if(!state.review[id]) state.review[id]={id,dueAt:0,interval:0,lapses:0,successes:0,item};
      else state.review[id].item={...state.review[id].item,...item};
    });
    Object.keys(state.review).forEach(id=>{if(!favoriteIds.has(id)&&state.review[id].source==='favorite') delete state.review[id];});
    saveState();
    return Object.values(state.review);
  }

  function dueReviewItems(){return reviewItems().filter(item=>Number(item.dueAt||0)<=Date.now()).sort((a,b)=>Number(a.dueAt||0)-Number(b.dueAt||0));}

  function renderDashboard(){
    setTop('Deutsch Learning','A1 + A2 · Alle Inhalte auf einen Blick',false);
    const level=state.profile.level;
    const continueRoute=state.lastLearningRoute||level;
    const listenRoute=level==='a1'?'a1/listen':'listen';
    const hasHistory=state.history.length>0;
    view.innerHTML=`<div class="next-dashboard">
      <section class="home-hero" aria-labelledby="homeHeroTitle">
        <div class="home-hero-copy">
          <div class="home-eyebrow"><span>Deutsch lernen</span><span>A1 + A2</span></div>
          <h2 id="homeHeroTitle">Vom ersten Satz bis zur A2-Prüfung.</h2>
          <p>Ein vollständiger, kostenloser Lernbereich mit Lektionen, Wortschatz, Grammatik, Hören, Sprechen und interaktivem Training.</p>
          <p class="home-ar" lang="ar" dir="rtl">برنامج متكامل لتعلّم الألمانية من البداية حتى نهاية مستوى A2، وكل المحتوى مرتب حسب المستوى والمهارة.</p>
          <div class="home-hero-actions"><button type="button" class="home-level-cta a1" onclick="go('a1')"><b>A1</b><span>Für Anfänger</span>${icons.arrow}</button><button type="button" class="home-level-cta a2" onclick="go('a2')"><b>A2</b><span>Weiterlernen</span>${icons.arrow}</button></div>
        </div>
        <div class="home-overview" aria-label="Programmübersicht"><div><b>24</b><span>Lektionen</span></div><div><b>2</b><span>Niveaus</span></div><div><b>10+</b><span>Lernbereiche</span></div><div><b>Offline</b><span>verfügbar</span></div></div>
      </section>
      ${hasHistory?`<section class="home-continue"><span class="home-continue-icon">${icons.learn}</span><div><small>Zuletzt geöffnet · ${level.toUpperCase()}</small><b>${escapeHtml(routeLabel(continueRoute))}</b></div><button type="button" class="next-primary" onclick="go('${escapeHtml(continueRoute)}')">Weiterlernen ${icons.arrow}</button></section>`:''}
      <section class="home-section" aria-labelledby="levelsTitle"><div class="next-section-head home-heading"><div><span class="home-kicker">Wähle dein Niveau</span><h2 id="levelsTitle">Was möchtest du lernen?</h2><p class="home-ar" lang="ar" dir="rtl">اختر المستوى وشاهد المحتوى المتاح داخله قبل أن تبدأ.</p></div></div>
        <div class="home-level-grid">
          <article class="home-level-card a1"><img src="assets/a1/chapters/chapter-1.webp" alt="Deutsch A1 Lernbereich" loading="eager"><div class="home-level-body"><div class="home-level-top"><span class="home-level-code">A1</span><span class="home-level-state">Anfänger</span></div><h3>Grundlagen sicher aufbauen</h3><p>Netzwerk neu A1.1 + A1.2 mit zwölf vollständigen Kapiteln.</p><ul><li>Lektionen & interaktive Übungen</li><li>Wortschatz, Grammatik & Verben</li><li>Hören, Phonetik & Redemittel</li></ul><div class="home-card-actions"><button type="button" class="next-primary" onclick="go('a1')">A1 entdecken ${icons.arrow}</button><button type="button" class="next-secondary" onclick="go('a1/lessons')">12 Lektionen</button></div></div></article>
          <article class="home-level-card a2"><img src="assets/chapters/chapter-7.webp" alt="Deutsch A2 Lernbereich" loading="eager"><div class="home-level-body"><div class="home-level-top"><span class="home-level-code">A2</span><span class="home-level-state">Grundkenntnisse</span></div><h3>Selbstständig Deutsch anwenden</h3><p>Netzwerk neu A2.1 + A2.2 plus gezieltes Prüfungstraining.</p><ul><li>Zwölf Kapitel & Grammatik-Skript</li><li>Podcast, Hören & Gesprächstraining</li><li>Spiele & Goethe-A2 Modelltraining</li></ul><div class="home-card-actions"><button type="button" class="next-primary" onclick="go('a2')">A2 entdecken ${icons.arrow}</button><button type="button" class="next-secondary" onclick="go('a2/lessons')">12 Lektionen</button></div></div></article>
        </div>
      </section>
      <section class="home-section" aria-labelledby="contentTitle"><div class="next-section-head home-heading"><div><span class="home-kicker">Alles im Programm</span><h2 id="contentTitle">Lerne nach Thema oder Fähigkeit</h2><p>Du musst keinen festen Plan einrichten. Öffne direkt den Bereich, den du gerade brauchst.</p><p class="home-ar" lang="ar" dir="rtl">تقدر تدخل مباشرة على الدروس أو الكلمات أو القواعد أو الاستماع من غير إعداد خطة مذاكرة.</p></div></div>
        <div class="home-content-grid">
          <article class="home-content-card"><span class="home-content-icon">${icons.learn}</span><div><h3>Lektionen</h3><p>24 Kapitel aus Netzwerk neu A1 und A2, jeweils mit Wortschatz, Lesen, Grammatik, Sprechen und Quiz.</p></div><div class="home-content-links"><button type="button" onclick="go('a1/lessons')">A1</button><button type="button" onclick="go('a2/lessons')">A2</button></div></article>
          <article class="home-content-card"><span class="home-content-icon">${icons.dictionary}</span><div><h3>Wortschatz & Wörterbücher</h3><p>Kapitelwörter, Suche auf Deutsch oder Arabisch und ein großes Offline-Wörterbuch.</p></div><div class="home-content-links"><button type="button" onclick="go('a1/dict')">A1 Wörter</button><button type="button" onclick="go('full-dict')">Großes Wörterbuch</button></div></article>
          <article class="home-content-card"><span class="home-content-icon">${icons.cards}</span><div><h3>Grammatik & Verben</h3><p>Regeln, Beispiele, Konjugation und Übungen mit sofortiger Korrektur.</p></div><div class="home-content-links"><button type="button" onclick="go('a1/verbs')">A1 Verben</button><button type="button" onclick="go('verbs')">A2 Verben</button></div></article>
          <article class="home-content-card"><span class="home-content-icon">${icons.listen}</span><div><h3>Hören & Aussprache</h3><p>Hörbücher, Phonetik, Buchseiten und interaktive Aufgaben zum Mitmachen.</p></div><div class="home-content-links"><button type="button" onclick="go('a1/listen')">A1 Hören</button><button type="button" onclick="go('listen')">A2 Hören</button></div></article>
          <article class="home-content-card"><span class="home-content-icon">${icons.review}</span><div><h3>Sprechen & Redemittel</h3><p>Fertige Wendungen und Beispielsätze für Alltag, Arbeit und Gespräche.</p></div><div class="home-content-links"><button type="button" onclick="go('a1/phrases')">A1 Redemittel</button><button type="button" onclick="go('phrases')">A2 Redemittel</button></div></article>
          <article class="home-content-card featured"><span class="home-content-icon">${icons.exam}</span><div><h3>Training & Prüfung</h3><p>Aktive Spiele, Podcasts und Goethe-A2 Modelltraining mit Timer.</p></div><div class="home-content-links"><button type="button" onclick="go('games')">Training</button><button type="button" onclick="go('exam')">A2 Prüfung</button></div></article>
        </div>
      </section>
      <section class="home-tools"><div><span class="home-kicker">Direktzugriff</span><h2>Nützliche Werkzeuge</h2></div><div class="home-tool-links"><button type="button" onclick="go('word-search')">${icons.search}<span><b>Wortsuche</b><small>Im gesamten Programm</small></span></button><button type="button" onclick="go('review')">${icons.cards}<span><b>Wiederholen</b><small>Favoriten und Fehler</small></span></button><button type="button" onclick="go('${listenRoute}')">${icons.listen}<span><b>Hörstudio</b><small>${level.toUpperCase()} ist ausgewählt</small></span></button></div></section>
    </div>`;
  }

  function renderLearningHub(level){
    state.profile.level=level;saveState();
    const isA1=level==='a1';
    const sections=isA1?A1_SECTIONS:A2_SECTIONS;
    const lessonRoute=isA1?'a1/lessons':'a2/lessons';
    setTop(`Deutsch ${level.toUpperCase()}`,'Dein Lernbereich',true);
    view.innerHTML=`${featureTabs(level,'lessons')}<section class="next-hero"><div class="next-hero-eyebrow">${level.toUpperCase()} · Netzwerk neu</div><h2>Lerne für echte Situationen</h2><p>Arbeite geführt weiter oder öffne gezielt Wörterbuch, Hören und Training. Jede Aktivität fließt in deinen Fortschritt ein.</p><div class="ar" lang="ar" dir="rtl">ابدأ من الخطوة التالية أو اختر المهارة التي تريد تدريبها.</div><div style="margin-top:18px"><button class="next-primary" onclick="go('${lessonRoute}')">Lektionen öffnen ${icons.arrow}</button></div></section>${sectionCards(sections,'next-section-cards')}`;
  }

  function renderReviewCenter(){
    setTop('Wiederholen','Favoriten und fällige Karten',true);
    const all=reviewItems();
    const due=all.filter(item=>Number(item.dueAt||0)<=Date.now()).sort((a,b)=>Number(a.dueAt||0)-Number(b.dueAt||0));
    const current=due[0];
    const item=current?.item||{};
    const word=item.displayWord||item.word||item.selected||'Wort';
    const meaning=item.meaning||item.translation||'';
    const context=item.context||item.example||'';
    view.innerHTML=`<section class="next-hero"><div class="next-hero-eyebrow">Review Center</div><h2>Erinnern statt nur wiederlesen</h2><p>${due.length?`${due.length} Karten sind jetzt fällig.`:'Für heute ist deine Wiederholung geschafft.'}</p><div class="ar" lang="ar" dir="rtl">حاول تفتكر المعنى أولًا، ثم اكشف الإجابة وقيّم صعوبتها.</div></section>
      <div class="review-layout"><section>
      ${current?`<article class="review-card" data-review-id="${escapeHtml(current.id)}"><div class="review-word">${escapeHtml(word)}</div><div class="review-answer" ${reviewRevealed?'':'hidden'}><div class="review-meaning" lang="ar" dir="rtl">${escapeHtml(meaning||'—')}</div>${context?`<div class="review-context">${escapeHtml(context)}</div>`:''}</div>${reviewRevealed?`<div class="review-ratings"><button class="review-rating" data-rating="again">Nochmal</button><button class="review-rating" data-rating="hard">Schwer</button><button class="review-rating" data-rating="good">Gut</button><button class="review-rating" data-rating="easy">Leicht</button></div>`:`<div style="margin-top:24px"><button class="next-primary" data-review-reveal>Antwort zeigen</button></div>`}</article>`:`<div class="review-empty"><h2>Alles erledigt</h2><p>Speichere neue Wörter mit dem Herz oder öffne deine Favoriten.</p><div style="margin-top:16px"><button class="next-secondary" onclick="go('favorites')">Favoriten öffnen</button></div></div>`}
      </section><aside class="card" style="padding:20px"><div class="next-section-head"><div><h2>Übersicht</h2><p>Deine persönliche Queue</p></div></div><div class="stat-grid"><div class="stat-card"><b>${due.length}</b><span>Heute fällig</span></div><div class="stat-card"><b>${all.length}</b><span>Gespeichert</span></div></div><div style="margin-top:16px"><button class="next-secondary" style="width:100%" onclick="go('favorites')">Alle Favoriten</button></div></aside></div>`;
  }

  function skillValues(){
    const metrics=legacyMetrics();
    const max=(value,cap)=>Math.max(4,Math.min(100,Math.round(value/cap*100)));
    return [
      ['Wortschatz',max(metrics.favorites,80)],['Grammatik',max(metrics.grammar,70)],['Hören',max(metrics.listening,60)],
      ['Lesen',max(state.history.filter(item=>/lesen|\/k\d+/.test(item.route)).length,40)],
      ['Sprechen',max(state.history.filter(item=>/sprechen|phonetik/.test(item.route)).length,30)],
      ['Schreiben',max(state.history.filter(item=>/schreiben/.test(item.route)).length,20)]
    ];
  }

  function renderProgressDashboard(){
    setTop('Fortschritt','Deine Fähigkeiten im Überblick',true);
    const metrics=legacyMetrics();
    const recentDays=new Set(state.history.slice(-100).map(item=>item.date)).size;
    const weekly=state.profile.weeklyGoal||5;
    view.innerHTML=`<section class="next-hero"><div class="next-hero-eyebrow">${state.profile.level.toUpperCase()} · Fortschritt</div><h2>Was du bereits kannst</h2><p>Dein Fortschritt basiert auf Aktivitäten, Wiederholungen und Ergebnissen—not auf künstlichen Punkten.</p><div class="ar" lang="ar" dir="rtl">تابع تطور مهاراتك وحدد المجال الذي يحتاج تدريبًا إضافيًا.</div></section>
      <div class="stat-grid"><div class="stat-card"><b>${recentDays}/${weekly}</b><span>Aktive Tage</span></div><div class="stat-card"><b>${metrics.favorites}</b><span>Gespeicherte Wörter</span></div><div class="stat-card"><b>${metrics.gameBest}</b><span>Practice Bestwert</span></div><div class="stat-card"><b>${metrics.examBest}</b><span>Prüfung Bestwert</span></div></div>
      <section class="card" style="padding:22px;margin-top:18px"><div class="next-section-head"><div><h2>Kompetenzen</h2><p>Eine Orientierung aus deinen bisherigen Aktivitäten</p></div></div><div class="skill-list">${skillValues().map(([label,value])=>`<div class="skill-row"><b>${label}</b><div class="skill-track"><span style="--skill-progress:${value/100}"></span></div><span class="skill-value">${value}%</span></div>`).join('')}</div></section>
      <section class="card" style="padding:22px"><div class="next-section-head"><div><h2>Nächster Meilenstein</h2><p>CEFR Can-do statt XP</p></div></div><h3 style="font-size:20px;color:var(--ds-accent-strong)">Ich kann eine Alltagssituation selbstständig bewältigen.</h3><p style="color:var(--ds-text-soft);margin-top:7px">Schließe eine Lernetappe, eine Hörübung und die fälligen Wiederholungen ab.</p><div style="margin-top:18px"><button class="next-primary" onclick="go('')">Zum Tagesplan</button></div></section>`;
  }

  function rateReview(id,rating){
    const record=state.review[id];
    if(!record) return;
    const current=Math.max(0,Number(record.interval||0));
    if(rating==='again'){
      record.interval=0;record.dueAt=Date.now()+10*60*1000;record.lapses=Number(record.lapses||0)+1;
    }else if(rating==='hard'){
      record.interval=Math.max(1,Math.round(current*1.35)||1);record.dueAt=Date.now()+record.interval*DAY;record.successes=Number(record.successes||0)+1;
    }else if(rating==='good'){
      record.interval=Math.max(3,Math.round(current*2.2)||3);record.dueAt=Date.now()+record.interval*DAY;record.successes=Number(record.successes||0)+1;
    }else{
      record.interval=Math.max(7,Math.round(current*3.1)||7);record.dueAt=Date.now()+record.interval*DAY;record.successes=Number(record.successes||0)+1;
    }
    record.lastReviewed=Date.now();saveState();reviewRevealed=false;renderReviewCenter();toast('Wiederholung gespeichert');
  }

  function syncFavorite(payload,active){
    const id=payload?.dictionaryId||payload?.id;
    if(!id) return;
    if(active){state.review[id]={...(state.review[id]||{}),id,dueAt:state.review[id]?.dueAt||0,interval:state.review[id]?.interval||0,item:payload,source:'favorite'};}
    else delete state.review[id];
    saveState();
  }

  function recordRoute(hash){
    if(!hash||hash==='review'||hash==='progress'||hash==='favorites'||hash==='word-search') return;
    state.lastLearningRoute=hash;
    if(hash.startsWith('a1')) state.profile.level='a1';
    else if(hash==='a2'||/^(k|g|dict|full-dict|verbs|phrases|listen|podcast|games|exam)/.test(hash)) state.profile.level='a2';
    const date=new Date().toISOString().slice(0,10);
    const last=state.history.at(-1);
    if(!last||last.route!==hash||Date.now()-last.at>60*1000){state.history.push({route:hash,date,at:Date.now()});state.history=state.history.slice(-500);}
    saveState();
  }

  function transitionRoute(render,{from,to,back=false}={}){
    const destination=to??location.hash.replace('#','');
    if(from!=null) scrollPositions.set(from,window.scrollY);
    const primaryFrom=routeGroup(from||'');
    const primaryTo=routeGroup(destination);
    const direction=back?'back':primaryFrom!==primaryTo?'tab':'forward';
    document.documentElement.dataset.navDirection=direction;
    const update=()=>{render();updateShell(destination);recordRoute(destination);};
    const finish=()=>{
      const current=location.hash.replace('#','');
      if(current!==destination) return;
      const top=back?scrollPositions.get(destination)||0:0;
      window.scrollTo({top,behavior:'auto'});
      requestAnimationFrame(()=>{
        const title=document.querySelector('#topTitle')?.childNodes[0]?.textContent?.trim()||routeLabel(destination);
        document.title=`${title} · Deutsch Learning`;
        const announcer=document.querySelector('#routeAnnouncer');if(announcer) announcer.textContent=`${title} geöffnet`;
        view.focus({preventScroll:true});
        requestAnimationFrame(()=>centerActiveNavigation());
      });
    };
    const heavyRoute=destination==='full-dict'||destination==='word-search';
    const motionDisabled=reduceMotion.matches||state.settings.motion==='reduced'||heavyRoute;
    if(!motionDisabled&&typeof document.startViewTransition==='function'){
      const transition=document.startViewTransition(update);
      transition.finished.then(finish).catch(finish);
    }else{update();finish();}
  }

  function toast(message){
    const stack=document.querySelector('#nextToastStack');if(!stack) return;
    const item=document.createElement('div');item.className='next-toast';item.textContent=message;stack.appendChild(item);
    setTimeout(()=>{item.style.opacity='0';item.style.transform='translateY(6px)';setTimeout(()=>item.remove(),180);},2600);
  }

  document.addEventListener('click',event=>{
    const shell=event.target.closest('[data-shell-route]');
    if(shell){go(shell.dataset.shellRoute||'');return;}
    if(event.target.closest('[data-open-settings]')){openModal('settingsModal');return;}
    const choice=event.target.closest('[data-profile-field]');
    if(choice){
      const field=choice.dataset.profileField;let value=choice.dataset.profileValue;
      if(field==='minutes') value=Number(value);
      state.profile[field]=value;saveState();renderDashboard();return;
    }
    if(event.target.closest('[data-onboarding-complete]')){
      state.profile.onboarded=true;saveState();renderDashboard();toast('Dein Lernplan ist bereit');return;
    }
    if(event.target.closest('[data-review-reveal]')){reviewRevealed=true;renderReviewCenter();document.querySelector('.review-rating')?.focus();return;}
    const rating=event.target.closest('[data-rating]');
    if(rating){const card=rating.closest('[data-review-id]');if(card) rateReview(card.dataset.reviewId,rating.dataset.rating);}
    const motion=event.target.closest('[data-motion-value]');
    if(motion){state.settings.motion=motion.dataset.motionValue;saveState();updateMotionSetting();toast('Bewegungseinstellung gespeichert');}
  });

  installShell();
  window.NextUI={
    storage,state:()=>state,featureTabs,renderDashboard,renderLearningHub,renderReviewCenter,renderProgressDashboard,
    transitionRoute,syncFavorite,addMistake,toast,icons,routeLabel,lessonProgress,lessonNext,lessonStart
  };

  route();
  requestAnimationFrame(centerActiveNavigation);
})();
