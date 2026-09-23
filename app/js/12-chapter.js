/* ===================== chapter (book) ===================== */
const TABS = [
  ['ueberblick','Überblick'],
  ['wortschatz','Wortschatz'],
  ['lesen','Lesen'],
  ['redemittel','Redemittel'],
  ['grammatik','Grammatik'],
  ['sprechen','Sprechen'],
  ['quiz','Lerncheck'],
];
const B1_TABS = [
  ['ueberblick','Überblick'],
  ['wortschatz','Wortschatz'],
  ['lesen','Lesen'],
  ['redemittel','Redemittel'],
  ['grammatik','Grammatik'],
  ['sprechen','Sprechen'],
  ['quiz','Lerncheck'],
];

function chapterTabs(c){
  return c?.route?.startsWith('b1.1/') ? B1_TABS : TABS;
}

function chapterTabDescription(id){
  return {
    ueberblick:'Überblick, Ziele und Bilder des Kapitels.',
    wortschatz:'Wörter, Beispiele und Flashcards.',
    lesen:'Lesetexte mit Fragen und Antworten.',
    redemittel:'Fertige Sätze zum Sprechen.',
    grammatik:'Regeln, Beispiele und Übungen.',
    sprechen:'Mündliche Aufgaben und Modellantworten.',
    quiz:'Kurzer Test zum Wiederholen.'
  }[id]||'Inhalt öffnen.';
}

function cleanTabLabel(label){
  return String(label||'').replace(/^[^A-Za-zأ„أ–أœأ¤أ¶أ¼أں]+/,'').trim();
}

function chapterTabTitle(id,label){
  return {
    ueberblick:'Überblick',
    wortschatz:'Wortschatz',
    lesen:'Lesen',
    redemittel:'Redemittel',
    grammatik:'Grammatik',
    sprechen:'Sprechen',
    quiz:'Quiz'
  }[id]||cleanTabLabel(label);
}

function chapterTabImage(c,id){
  if(!c.route?.startsWith('a1/')){
    const chapter=c.num;
    const alt=`Kapitel ${chapter} · ${chapterTabTitle(id,id)}`;
    if(chapter<=6){
      const generatedIndex={ueberblick:1,wortschatz:2,lesen:3,redemittel:4,grammatik:5,sprechen:6,quiz:7}[id];
      return {src:`assets/section-covers/k${chapter}/${generatedIndex}.webp`,alt};
    }
    const generatedIndex={wortschatz:2,lesen:3,redemittel:4,grammatik:5,sprechen:1,quiz:6}[id];
    if(id==='ueberblick') return {src:`assets/chapters/chapter-${chapter}.webp`,alt};
    return {src:`assets/section-covers/k${chapter}/${generatedIndex}.webp`,alt};
  }
  const sceneIndex={lesen:0,wortschatz:1,sprechen:1,redemittel:2,quiz:2,grammatik:3}[id];
  if(id==='ueberblick') return c.visual||c.scenes?.[0]||c.topicVisuals?.[0];
  if(id==='wortschatz') return c.topicVisuals?.[0]||c.scenes?.[sceneIndex]||c.visual;
  return c.scenes?.[sceneIndex]||c.topicVisuals?.[sceneIndex]||c.visual||c.scenes?.[0]||c.topicVisuals?.[0];
}

function renderChapterMenu(c){
  const isA1=c.route?.startsWith('a1/');
  const isB1=c.route?.startsWith('b1.1/');
  const routeBase=c.route||`k${c.num}`;
  const chapterLabel=isA1?'A1 Kapitel':isB1?'B1.1 Kapitel':'Kapitel';
  setTop(`${chapterLabel} ${c.num}: ${c.title}`,'Wähle den Inhalt',true);
  view.innerHTML=`
    ${false && c.visual?`<figure class="card chapter-visual ${isA1?'chapter-visual--wide':''}">
      <img src="${c.visual.src}" alt="${c.visual.alt}">
      <figcaption class="visual-caption">${c.visual.caption}${ar(c.visual.captionAr)}</figcaption>
    </figure>`:''}
    <section class="hero chapter-hero"><div><span class="next-hero-eyebrow">${isA1?'A1':isB1?'B1.1':'A2'} · ${chapterLabel} ${c.num}</span><h2>${c.title}</h2><p>${c.subtitle}</p>${ar(c.titleAr)}</div>${window.NextUI?.lessonStart(routeBase)||''}</section>
    <section class="chapter-tab-grid">${chapterTabs(c).map(([id,lbl])=>{
      const img=chapterTabImage(c,id);
      return `
      <button type="button" class="section-card chapter-tab-card ${isA1?'a1-chapter-tab-card':'a2-chapter-tab-card'}" onclick="go('${routeBase}/${id}')">
        ${img?.src?`<img class="section-card-img" src="${img.src}" alt="${escapeHtml(img.alt||chapterTabTitle(id,lbl))}" loading="lazy" decoding="async">`:''}
        <span><b>${chapterTabTitle(id,lbl)}</b><span>${chapterTabDescription(id)}</span></span>
      </button>`;
    }).join('')}</section>`;
}

function renderChapter(c, tab){
  const isA1=c.route?.startsWith('a1/');
  const isB1=c.route?.startsWith('b1.1/');
  const routeBase=c.route||`k${c.num}`;
  const chapterLabel=isA1?'A1 Kapitel':isB1?'B1.1 Kapitel':'Kapitel';
  setTop(`${chapterLabel} ${c.num}: ${c.title}`, c.subtitle, true);
  const tabs=chapterTabs(c);
  let html = `${isB1?'':(window.NextUI?.lessonProgress(routeBase,tab)||'')}<div class="tabs chapter-tabs" role="tablist" aria-label="Kapitelbereiche">` + tabs.map(([id,lbl]) =>
    `<button type="button" role="tab" aria-selected="${id===tab}" class="tab ${id===tab?'active':''}" onclick="go('${routeBase}/${id}')">${lbl}</button>`).join('') + `</div>`;
  if(false && tab!=='ueberblick' && c.visual){
    const sceneIndex={wortschatz:1,lesen:0,redemittel:2,grammatik:3,sprechen:1,quiz:2}[tab]??0;
    const tabVisual=c.scenes?.[sceneIndex]||c.visual;
    html += `<figure class="lesson-scene">
      <img src="${tabVisual.src}" alt="${tabVisual.alt}">
      <figcaption class="lesson-scene-copy"><b>Kapitel ${c.num}: ${c.title}</b><span>${c.subtitle}</span></figcaption>
    </figure>`;
  }
  html += renderChapterTab(c, tab);
  html += isB1?'':(window.NextUI?.lessonNext(routeBase,tab)||'');
  view.innerHTML = html;
  if(tab==='wortschatz') initFlash(c);
  if(tab==='quiz') initQuiz(c.quiz);
}

function renderChapterTab(c, tab){
  if(tab==='ueberblick'){
    let h = c.visual?`<figure class="card chapter-visual ${c.route?.startsWith('a1/')?'chapter-visual--wide':''}">
      <img src="${c.visual.src}" alt="${c.visual.alt}">
      <figcaption class="visual-caption">${c.visual.caption}${ar(c.visual.captionAr)}</figcaption>
    </figure>`:'';
    h += `<div class="card">
      <h3 style="color:var(--green-d);margin-bottom:6px">Worum geht es in diesem Kapitel?</h3>
      <p style="font-size:15px">${c.intro}</p>${ar(c.introAr)}
      <div class="badge-row">${c.badges.map(b=>`<span class="badge">${b}</span>`).join('')}</div>
      ${c.topicVisuals?.length?`<div class="topic-visual-grid">${c.topicVisuals.map(topic=>`
        <figure class="topic-visual-card">
          <img src="${topic.src}" alt="${escapeHtml(topic.alt||topic.title)}" loading="lazy" decoding="async">
          <figcaption>${escapeHtml(topic.title)}</figcaption>
        </figure>`).join('')}</div>`:''}
    </div>
    <div class="card"><h3 style="color:var(--green-d);margin-bottom:8px">Das lernst du hier</h3>`;
    c.goals.forEach((g,index) => h += `<div class="goal-item"><span>${String(index+1).padStart(2,'0')}</span><div>${g.de}${ar(g.ar)}</div></div>`);
    h += `</div>`;
    if(c.scenes?.length){
      h += `<div class="scene-gallery">${c.scenes.map(scene=>`
        <figure class="scene-card">
          <img src="${scene.src}" alt="${scene.alt}">
          <figcaption>${scene.caption}${ar(scene.captionAr)}</figcaption>
        </figure>`).join('')}</div>`;
    }
    h += `
    <div class="intro-note">💡 <b>Tipp:</b> Lies zuerst den Wortschatz, dann die Redemittel. Sprich die Sätze laut!
    Am Ende mach das Quiz.${ar('نصيحة: ابدأ بالمفردات، وبعدها جُمل الكلام واقرأها بصوت عالي، وبعدين القواعد، وفي الآخر حل الكويز.')}</div>`;
    return h;
  }
  if(tab==='wortschatz'){
    let h = `<div class="fc-bar">
      <button class="btn btn-green" id="fcStart" style="display:none">🃏 Mit Karten üben</button>
      <button class="btn btn-ghost" id="fcStop">📃 Liste zeigen</button>
      <button class="btn btn-ghost" type="button" onclick="addChapterWordsToReview('${chapterLevel(c)}',${c.num})">🔁 Alle Wörter ins Review</button>
    </div>
    <div id="fcArea"></div>
    ${c.vocabSummary?`<div class="card vocab-summary">
      <h3>${c.vocabSummary.title}</h3>${ar(c.vocabSummary.titleAr)}
      <p>${c.vocabSummary.note}</p>${ar(c.vocabSummary.noteAr)}
    </div>`:''}
    ${c.scenes?.length?`<div class="scene-gallery vocab-scenes">${c.scenes.slice(0,3).map(scene=>`
      <figure class="scene-card">
        <img src="${scene.src}" alt="${scene.alt}">
        <figcaption>${scene.caption}${ar(scene.captionAr)}</figcaption>
      </figure>`).join('')}</div>`:''}
    <div class="card" id="vocList" style="display:none">`;
    let currentCategory='';
    c.vocab.forEach(v => {
      if(v.cat && v.cat!==currentCategory){
        currentCategory=v.cat;
        h += `<div class="vocab-group-title"><b>${v.cat}</b>${ar(v.catAr)}</div>`;
      }
      h += `<div class="vocab-row">
        <div class="w">${fmtWord(v.w)}</div>
        <div class="def">${v.d}</div>
        ${v.ex?`<div class="ex">${v.ex}</div>`:''}
        ${ar(v.ar)}
      </div>`;
    });
    return h + `</div>`;
  }
  if(tab==='redemittel'){
    let h = '';
    c.redemittel.forEach(g => {
      h += `<div class="card rm-group"><h4>${g.cat}</h4>${ar(g.catAr)}`;
      g.items.forEach(i => h += `<div class="rm-item">${i.de}${ar(i.ar)}</div>`);
      h += `</div>`;
    });
    return h;
  }
  if(tab==='lesen'){
    return c.readings.map((r,ri) => `
      <article class="card reading-card ${r.visual?.src?'with-cover':''}">
        ${r.visual?.src?`<figure class="reading-cover">
          <img src="${r.visual.src}" alt="${r.visual.alt||''}" style="object-position:center">
          <figcaption class="reading-cover-copy"><div class="reading-kind">${r.kind}</div><h3>${r.title}</h3></figcaption>
        </figure>`:`<h3 style="color:var(--green-d);margin-bottom:8px">${r.kind}: ${r.title}</h3>`}
        <div class="reading-body">
          <div class="reading-tools">
            <button type="button" class="people-read" onclick="speakReadingWithPeople(${c.num},${ri})">Mehrere Sprecher hören</button>
          </div>
          <p class="reading-text">${r.text}</p>
          ${ar(r.ar)}
          <div class="reading-glossary">${r.glossary.map(([de,arText])=>`<span><b>${de}</b> · ${arText}</span>`).join('')}</div>
          <h4 style="margin:12px 0 3px">Leseverstehen</h4>
          ${r.questions.map(([q,a],qi)=>`
            <div class="reading-q">
              <b>${qi+1}. ${q}</b>
              <button type="button" class="answer-btn" onclick="toggleReadingAnswer(this)">Antwort zeigen</button>
              <div class="reading-answer">${a}</div>
            </div>`).join('')}
        </div>
      </article>`).join('');
  }
  if(tab==='grammatik'){
    let h = '';
    c.grammar.forEach(g => {
      h += `<div class="card gram-block"><h3>${g.t}</h3>${ar(g.tAr)}${g.body}</div>`;
    });
    return h;
  }
  if(tab==='sprechen'){
    let h = `<div class="card">
      <h3 style="color:var(--green-d);margin-bottom:8px">Sprich über das Thema! 🗣️</h3>
      <p style="font-size:13.5px;color:var(--ink-2)">Beantworte die Fragen laut. Benutze die Redemittel aus diesem Kapitel.</p>
      ${ar('جاوب على الأسئلة دي بصوت عالي. استخدم جُمل الكلام (Redemittel) اللي في الفصل. ده أهم تمرين عشان تقدر تتكلم عن الموضوع.')}
      <div style="margin-top:12px">`;
    c.speaking.questions.forEach(q => h += `<div class="speak-q"><span class="qicon">❓</span><div>${q.de}${ar(q.ar)}</div></div>`);
    h += `</div></div>
    <div class="card">
      <div class="model-text"><b>🌟 Modelltext – so kannst du sprechen:</b>${c.speaking.model}</div>
      ${ar(c.speaking.modelAr)}
    </div>`;
    return h;
  }
  if(tab==='quiz'){
    return `<div id="quizArea"></div>`;
  }
  return '';
}

function fmtWord(w){
  return w.replace(/^(der|die|das)\s/, (_,article)=>`<span class="art art-${article}">${article}</span> `);
}

function toggleReadingAnswer(btn){
  const answer = btn.nextElementSibling;
  const show = !answer.classList.contains('show');
  answer.classList.toggle('show', show);
  btn.textContent = show ? 'Antwort ausblenden' : 'Antwort zeigen';
}
