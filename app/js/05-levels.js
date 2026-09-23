/* ===================== home ===================== */
function levelSwitcher(active){
  return `<div class="level-mini-nav" aria-label="Niveau wechseln">
    <button type="button" class="${active==='a1'?'active':''}" onclick="go('a1')">A1 · Netzwerk neu A1</button>
    <button type="button" class="${active==='a2'?'active':''}" onclick="go('a2')">A2 · Netzwerk neu A2</button>
    <button type="button" class="${active==='b1.1'?'active':''}" onclick="go('b1.1')">B1.1 · Netzwerk neu B1</button>
  </div>`;
}

function renderA1Hub(){
  setTop('Deutsch A1','Wähle einen Bereich',true);
  view.innerHTML=`
    <section class="hero hub-hero"><h2>Netzwerk neu A1</h2>
      <p>اختار القسم اللي عايز تذاكر منه. كل قسم هيفتح في صفحة مستقلة من غير شريط علوي مزاحم.</p>
      ${ar('ابدأ بالدروس أو افتح القاموس والأفعال والاستماع مباشرة.')}
    </section>
    ${sectionCards(A1_SECTIONS)}`;
}

function renderA2Hub(){
  setTop('Deutsch A2','Wähle einen Bereich',true);
  view.innerHTML=`
    <section class="hero hub-hero"><h2>Netzwerk neu A2</h2>
      <p>اختار القسم المطلوب: دروس، قاموس، أفعال، استماع، ألعاب، بودكاست أو تدريب الامتحان.</p>
      ${ar('كل قسم أصبح كارت واضح في بداية المستوى، وبعد الدخول يظهر المحتوى فقط.')}
    </section>
    ${sectionCards(A2_SECTIONS)}`;
}

function renderB1Hub(){
  setTop('Deutsch B1.1','Wähle einen Bereich',true);
  view.innerHTML=`
    <section class="hero hub-hero"><h2>Netzwerk neu B1.1</h2>
      <p>ست وحدات من Netzwerk neu B1.1 مع قاموس وأفعال وتعبيرات وتدريب وامتحان نموذجي.</p>
      ${ar('ابدأ بالكلمات، اقلب البطاقة، ثم راجع كل وحدة بالترتيب واختبر نفسك في التدريب والامتحان.')}
    </section>
    ${sectionCards(B1_SECTIONS)}`;
}

function renderLevelSelector(){
  setTop('Deutsch Learning','Wähle dein Niveau', false);
  view.innerHTML = `
  <section class="hero">
    <h2>Wähle deinen Deutsch-Weg</h2>
    <p>Jedes Niveau bleibt getrennt, damit Wortschatz, Grammatik, Hören und Übungen sauber aufgebaut werden.</p>
    ${ar('اختار المستوى اللي عايز تبدأ منه. كل مستوى هيبقى مستقل عشان المحتوى والترتيب يفضلوا واضحين.')}
  </section>
  <section class="level-grid">
    <button type="button" class="level-card" onclick="go('a1')">
      <span class="level-code">A1</span>
      <h3>Netzwerk neu A1</h3>
      <p>Der Startbereich für Anfänger: zwölf Kapitel mit Wortschatz, Grammatik, Lesen, Sprechen und Quiz.</p>
      ${ar('بداية مستوى A1: كتاب Netzwerk neu A1.1 وA1.2 في تاب واحد، اثنا عشر درسًا بالمفردات والقواعد والقراءة والمحادثة والكويز.')}
      <div class="level-meta"><span class="level-pill">Kapitel 1-12</span><span class="level-pill">A1.1 + A1.2</span></div>
    </button>
    <button type="button" class="level-card a2" onclick="go('a2')">
      <span class="level-code">A2</span>
      <h3>Netzwerk neu A2</h3>
      <p>Der vorhandene komplette Bereich mit Lektionen, Wörterbuch, Spielen, Podcast, Hören und Prüfungstraining.</p>
      ${ar('المستوى الموجود حاليًا: دروس A2 والقاموس والألعاب والاستماع والتدريب على الامتحان.')}
      <div class="level-meta"><span class="level-pill">A2.1 + A2.2</span><span class="level-pill">aktiv</span></div>
    </button>
  </section>
  <div class="section-label">Weitere Niveaus</div>
  <section class="level-grid">
    <button type="button" class="level-card b1" onclick="go('b1.1')">
      <span class="level-code">B1.1</span>
      <h3>Netzwerk neu B1.1</h3>
      <p>Sechs vollständige Kapitel mit Wortschatzkarten, Lesetexten, Grammatik, Redemitteln und Quiz.</p>
      ${ar('ست وحدات B1.1 كاملة مع الكلمات والقراءة والقواعد والمحادثة والاختبارات.')}
      <div class="level-meta"><span class="level-pill">Kapitel 1-6</span><span class="level-pill">Prüfung B1</span></div>
    </button>
    <article class="level-card soon locked">
      <span class="level-code">B2</span>
      <h3>Später</h3>
      <p>Platzhalter für einen eigenen höheren Lernpfad.</p>
      <div class="level-meta"><span class="level-pill">geplant</span></div>
    </article>
  </section>`;
}

function a1MainTabs(active){
  return window.NextUI?.featureTabs('a1',active)||'';
}

function renderA1Dictionary(){
  setTop('A1 Wörterbuch','Alle Wörter aus den Lektionen',true);
  const words=A1_BOOK.flatMap(chapter=>chapter.vocab.map(item=>({...item,chapter:chapter.num,title:chapter.title})))
    .sort((a,b)=>a.w.localeCompare(b.w,'de'));
  view.innerHTML=a1MainTabs('dict')+`
    <div class="hero"><h2>Wörterbuch A1</h2>
      <p>Suche auf Deutsch oder Arabisch. Der Wortschatz deckt alle Kapitel 1–12 ab.</p>
      ${ar('ابحث بالألماني أو العربي. القاموس بيجمع كلمات كل دروس A1 من 1 إلى 12 مع الشرح والمثال.')}</div>
    <div class="search-panel">
      <div class="search-row">
        <input class="library-search" id="a1DictSearch" type="search" placeholder="Deutsch oder Arabisch suchen..." aria-label="Wörter suchen">
        <select class="library-filter" id="a1DictChapter" aria-label="Kapitel filtern">
          <option value="">Alle Kapitel</option>${A1_BOOK.map(c=>`<option value="${c.num}">Kapitel ${c.num}</option>`).join('')}
        </select>
      </div>
      <div class="result-count" id="a1DictCount"></div>
    </div>
    <div class="card" id="a1DictList">${words.map((v,index)=>`
      <article class="dictionary-entry" data-index="${index}" data-chapter="${v.chapter}"
        data-search="${escapeHtml(`${v.w} ${v.d} ${v.ex||''} ${v.ar||''}`.toLocaleLowerCase('de-DE'))}">
        <div><div class="dictionary-word">${fmtWord(v.w)}</div>
          <div class="dictionary-definition">${v.d}</div>
          ${v.ex?`<div class="dictionary-example">„${v.ex}“</div>`:''}${ar(v.ar)}</div>
        <span class="dictionary-meta">K${v.chapter}</span>
      </article>`).join('')}</div>`;
  const search=$('#a1DictSearch'),chapter=$('#a1DictChapter');
  const filter=()=>{
    const query=search.value.trim().toLocaleLowerCase('de-DE');
    let visible=0;
    $$('#a1DictList .dictionary-entry').forEach(entry=>{
      const show=(!query||entry.dataset.search.includes(query))&&(!chapter.value||entry.dataset.chapter===chapter.value);
      entry.hidden=!show; if(show) visible++;
    });
    $('#a1DictCount').textContent=`${visible} / ${words.length} Wörter`;
  };
  search.addEventListener('input',filter); chapter.addEventListener('change',filter); filter();
}

function renderA1Verbs(){
  setTop('A1 Verbwörterbuch','Konjugation, Präteritum & Perfekt',true);
  const pronouns=['ich','du','er/sie/es','wir','ihr','sie/Sie'];
  view.innerHTML=a1MainTabs('verbs')+`
    <div class="hero"><h2>Verben A1</h2>
      <p>Die wichtigsten Verben aus A1 – Präsens mit allen Personen, Präteritum und Perfekt mit <b>haben</b> oder <b>sein</b>.</p>
      ${ar('أهم أفعال مستوى A1 بتصريف المضارع مع كل الضمائر، والماضي البسيط، والـPerfekt مع الفعل المساعد haben أو sein.')}</div>
    <div class="search-panel">
      <div class="search-row">
        <input class="library-search" id="a1VerbSearch" type="search" placeholder="Verb oder Bedeutung suchen..." aria-label="Verben suchen">
        <select class="library-filter" id="a1VerbAux" aria-label="Hilfsverb filtern">
          <option value="">haben + sein</option><option value="haben">mit haben</option><option value="sein">mit sein</option>
        </select>
        <select class="library-filter" id="a1VerbChapter" aria-label="Kapitel filtern">
          <option value="">Alle Kapitel</option>${A1_BOOK.map(c=>`<option value="${c.num}">Kapitel ${c.num}</option>`).join('')}
        </select>
      </div>
      <div class="result-count" id="a1VerbCount"></div>
    </div>
    <div id="a1VerbList">${A1_VERBS.map((verb,index)=>`
      <article class="card verb-card" data-index="${index}" data-aux="${verb.aux}" data-chapter="${verb.chapter}" tabindex="0" role="button" aria-expanded="false"
        data-search="${escapeHtml(`${verb.inf} ${verb.praet} ${verb.part} ${verb.ar} ${verb.example}`.toLocaleLowerCase('de-DE'))}">
        <div class="verb-summary">
          <div><div class="verb-inf">${verb.inf}</div>
            <div class="verb-summary-line">${verb.praet} · ${verb.aux} ${verb.part}</div></div>
          <span class="verb-chevron">⌄</span>
        </div>
        <div class="verb-details">
          <div class="verb-head"><div>${ar(verb.ar)}</div><span class="verb-aux ${verb.aux}">Perfekt mit ${verb.aux}</span></div>
          <div class="verb-tense">Präsens</div>
          <div class="verb-grid">${verb.forms.map((form,formIndex)=>`
            <div class="verb-form"><small>${pronouns[formIndex]}</small>${form}</div>`).join('')}</div>
          <div class="verb-tense">Präteritum</div>
          <div class="verb-perfect"><small>er/sie/es</small> ${verb.praet}</div>
          <div class="verb-perfect"><small>Perfekt</small> ${verb.aux} ${verb.part}</div>
          <div class="dictionary-example">„${verb.example}“</div>
          <span class="dictionary-meta">K${verb.chapter}</span>
        </div>
      </article>`).join('')}</div>`;
  const search=$('#a1VerbSearch'),aux=$('#a1VerbAux'),chapter=$('#a1VerbChapter');
  const filter=()=>{
    const query=search.value.trim().toLocaleLowerCase('de-DE');
    let visible=0;
    $$('#a1VerbList .verb-card').forEach(entry=>{
      const show=(!query||entry.dataset.search.includes(query))&&
        (!aux.value||entry.dataset.aux===aux.value)&&
        (!chapter.value||entry.dataset.chapter===chapter.value);
      entry.hidden=!show; if(show) visible++;
    });
    $('#a1VerbCount').textContent=`${visible} / ${A1_VERBS.length} Verben`;
  };
  $$('#a1VerbList .verb-card').forEach(card=>{
    const toggle=()=>{
      const open=card.classList.toggle('open');
      card.setAttribute('aria-expanded',String(open));
    };
    card.addEventListener('click',event=>{ if(!event.target.closest('button,input,select')) toggle(); });
    card.addEventListener('keydown',event=>{ if(event.key==='Enter'||event.key===' '){event.preventDefault();toggle();} });
  });
  search.addEventListener('input',filter); aux.addEventListener('change',filter);
  chapter.addEventListener('change',filter); filter();
}

function renderA1Expressions(){
  setTop('A1 Redemittel','Fertige Sätze für jede Lektion',true);
  const phrases=A1_BOOK.flatMap(chapter=>(chapter.redemittel||[]).flatMap(group=>
    group.items.map(item=>({de:item.de,ar:item.ar,cat:group.cat,chapter:chapter.num}))));
  view.innerHTML=a1MainTabs('phrases')+`
    <div class="hero"><h2>Redemittel A1</h2>
      <p>Fertige Sätze und Ausdrücke für Begrüßung, Einkauf, Arzt, Reise und mehr – aus allen Kapiteln.</p>
      ${ar('جُمل وتعبيرات جاهزة للكلام في كل المواقف (تحية، شراء، دكتور، سفر…) مجمّعة من كل دروس A1.')}</div>
    <div class="search-panel">
      <div class="search-row">
        <input class="library-search" id="a1PhraseSearch" type="search" placeholder="Ausdruck suchen..." aria-label="Ausdrücke suchen">
        <select class="library-filter" id="a1PhraseChapter" aria-label="Kapitel filtern">
          <option value="">Alle Kapitel</option>${A1_BOOK.map(c=>`<option value="${c.num}">Kapitel ${c.num}</option>`).join('')}
        </select>
      </div>
      <div class="result-count" id="a1PhraseCount"></div>
    </div>
    <div id="a1PhraseList">${phrases.map((item,index)=>`
      <article class="card expression-card" data-index="${index}" data-chapter="${item.chapter}"
        data-search="${escapeHtml(`${item.de} ${item.ar} ${item.cat}`.toLocaleLowerCase('de-DE'))}">
        <span class="expression-tag">K${item.chapter} · ${item.cat}</span>
        <div class="expression-de">${item.de}</div>
        ${ar(item.ar)}
      </article>`).join('')}</div>`;
  const search=$('#a1PhraseSearch'),chapter=$('#a1PhraseChapter');
  const filter=()=>{
    const query=search.value.trim().toLocaleLowerCase('de-DE');
    let visible=0;
    $$('#a1PhraseList .expression-card').forEach(entry=>{
      const show=(!query||entry.dataset.search.includes(query))&&(!chapter.value||entry.dataset.chapter===chapter.value);
      entry.hidden=!show; if(show) visible++;
    });
    $('#a1PhraseCount').textContent=`${visible} / ${phrases.length} Ausdrücke`;
  };
  search.addEventListener('input',filter); chapter.addEventListener('change',filter); filter();
}

const A1_LISTENING_TRACK_TASKS={
  2:"1a · Lisa und Paul – hören",3:"1b · Jetzt sind Sie dran",
  5:"2a · Begrüßen und nachsprechen",7:"3a · Dialog hören und nachsprechen",8:"3b · Dialog hören und nachsprechen",
  9:"4a · Woher kommen diese Leute?",13:"7a · Dialog hören und nachsprechen",14:"7b · Dialog hören und nachsprechen",15:"7c · Dialog hören und nachsprechen",
  17:"9a · Alphabet hören und nachsprechen",20:"10b · Zahlen nachsprechen",22:"11b · Zahlen nachsprechen",24:"12b · Zahlen nachsprechen",
  28:"14b · Datum nachsprechen",32:"16b · Orte – mündlich antworten",34:"17b · Hören und nachsprechen",36:"18b · Wegbeschreibung nachsprechen",
  38:"19b · Café-Dialog nachsprechen",40:"20b · Restaurant-Dialog nachsprechen",41:"21 · Diktat hören und schreiben",
  43:"22b · Familie – nachsprechen",45:"23b · Familienstand nachsprechen",47:"24b · Informationen nachsprechen",
  52:"28b · Anrufbeantworter nachsprechen",59:"34 · Einkaufen nachsprechen"
};
function a1ListenProgress(cfg){ try{return JSON.parse(localStorage.getItem(cfg.progressKey)||'{}');}catch(e){return {};} }
function a1BookPageAsset(cfg, page){
  return page+(cfg.pageOffset||0);
}
function a1BookPageSrc(cfg, page){
  return `${cfg.pageBase}page-${String(a1BookPageAsset(cfg,page)).padStart(3,'0')}.webp`;
}
function a1BookPage(cfg, page, label){
  const assetPage=a1BookPageAsset(cfg,page);
  return `<figure class="card book-page"><img loading="lazy" src="${a1BookPageSrc(cfg,page)}"
      alt="${label}, Buchseite ${page}">
    <figcaption><span>${label} - Seite ${page}</span>
      <button type="button" class="page-zoom" data-book-page="${page}" data-asset-page="${assetPage}" data-page-label="${label}" data-page-base="${cfg.pageBase}">Seite vergroessern</button>
    </figcaption></figure>`;
}
function a1PageSpan(cfg, exercise){
  if(exercise.solutionPages?.length) return {task:exercise.exercisePages, solution:exercise.solutionPages};
  const starts=cfg.meta.chapters.flatMap(c=>c.exercises).map(e=>e.exercisePages[0]);
  const start=exercise.exercisePages[0];
  const later=starts.filter(p=>p>start);
  const maxPage=cfg.meta.id==='phonetik'?76:72;
  const end=later.length?Math.min(...later)-1:maxPage;
  const pages=[]; for(let p=start;p<=end;p++) pages.push(p);
  return {task:[pages[0]], solution:pages.slice(1)};
}
function a1AudioTrack(cfg, track, label){
  return `<article class="audio-track"><div class="audio-track-head">
      <span class="audio-track-title">${cfg.trackLabel(track)}${label?' - '+label:''}</span><span class="track-badge">Original MP3</span></div>
    <audio controls preload="none" src="${cfg.audioSrc(track)}">Audio wird nicht unterstützt.</audio></article>`;
}
function renderA1ExerciseFigures(cfg, exercise){
  if(cfg.meta.id==='phonetik') return '';
  const figures=cfg.figures()[exercise.id];
  if(!figures||!figures.length) return '';
  const sections=cfg.interactive()[exercise.id]||[];
  if(sections.length) return '';
  return `<section class="interactive-sheet"><div class="section-figures">${renderListeningFigures(figures)}</div></section>`;
}
function renderPhonetikGuide(exercise){
  return '';
}
function renderPhonetikQuestionVisual(exercise){
  if(!exercise.visual) return '';
  return `<figure class="phonetik-question-visual"><img loading="lazy" src="${exercise.visual}" alt="${escapeHtml(exercise.title)} visual guide"></figure>`;
}
function uniqueTracks(tracks){
  return [...new Set((tracks||[]).filter(Boolean))];
}
function renderA1HeaderBadges(cfg, exercise){
  if(cfg.meta.id==='phonetik' && exercise.bookTasks?.length){
    const tracks=uniqueTracks(exercise.bookTasks.flatMap(task=>task.tracks||[]));
    return `<span class="track-badge">${exercise.bookTasks.length} Aufgaben</span><span class="track-badge">${tracks.length} Audios</span>`;
  }
  return exercise.tracks.map(t=>`<span class="track-badge">${cfg.trackLabel(t)}</span>`).join('');
}
function phonetikTaskPages(task, exercise){
  const pages=(task.pages||[task.page]).filter(Boolean);
  return pages.length?pages:exercise.exercisePages||[];
}
function phonetikCropY(items, item, fallbackIndex=0){
  const count=Math.max(items.length,1);
  const index=Math.max(items.indexOf(item),fallbackIndex,0);
  if(count===1) return 0;
  return Math.round((index/(count-1))*100);
}
function phonetikPageTasks(exercise, page){
  return (exercise.bookTasks||[]).filter(task=>phonetikTaskPages(task, exercise)[0]===page);
}
function phonetikSolutionPageForTask(exercise, task){
  const pages=(exercise.solutionPages||[]).filter(Boolean);
  if(!pages.length) return null;
  const tasks=exercise.bookTasks||[];
  const index=Math.max(tasks.indexOf(task),0);
  const pageIndex=Math.min(pages.length-1,Math.floor(index*pages.length/Math.max(tasks.length,1)));
  return pages[pageIndex];
}
function phonetikSolutionPageTasks(exercise, page){
  return (exercise.bookTasks||[]).filter(task=>phonetikSolutionPageForTask(exercise, task)===page);
}
function phonetikAnswerBox(exercise, task){
  const key=`phonetik-${exercise.id}-${(task.tracks||[]).join('-')||task.title}`.replace(/[^a-zA-Z0-9_-]/g,'-');
  return `<div class="phonetik-answer-box">
    <label for="${key}">Deine Antwort</label>
    <textarea id="${key}" rows="3" placeholder="Schreibe deine Antwort, bevor du die Loesung oeffnest."></textarea>
  </div>`;
}
function phonetikPrintedQuestionPreview(cfg, exercise, task){
  const page=phonetikTaskPages(task, exercise)[0];
  if(!page) return '';
  const assetPage=a1BookPageAsset(cfg,page);
  const pageTasks=phonetikPageTasks(exercise, page);
  const cropY=phonetikCropY(pageTasks, task);
  const title=`Aufgabe aus dem Buch - Seite ${page}`;
  return `<details class="phonetik-print-preview" open>
    <summary>${title}</summary>
    <div class="phonetik-print-frame"><div class="phonetik-print-crop" role="img" aria-label="Ausschnitt aus Buchseite ${page}" style="background-image:url('${a1BookPageSrc(cfg,page)}');--crop-y:${cropY}%"></div></div>
    <div class="phonetik-print-actions"><button type="button" class="page-zoom" data-book-page="${page}" data-asset-page="${assetPage}" data-page-label="${title}" data-page-base="${cfg.pageBase}">Ganze Seite anzeigen</button></div>
  </details>`;
}
function phonetikSolutionPreview(cfg, exercise, task){
  const page=phonetikSolutionPageForTask(exercise, task);
  if(!page) return '';
  const solutionTasks=phonetikSolutionPageTasks(exercise, page);
  const cropY=phonetikCropY(solutionTasks, task);
  const title=`Loesung pruefen - Seite ${page}`;
  return `<details class="phonetik-print-preview phonetik-solution-preview">
    <summary>${title}</summary>
    <div class="phonetik-print-frame"><div class="phonetik-print-crop" role="img" aria-label="Ausschnitt aus Loesung Seite ${page}" style="background-image:url('${a1BookPageSrc(cfg,page)}');--crop-y:${cropY}%"></div></div>
    <div class="phonetik-print-actions"><button type="button" class="page-zoom" data-book-page="${page}" data-asset-page="${a1BookPageAsset(cfg,page)}" data-page-label="${title}" data-page-base="${cfg.pageBase}">Ganze Loesungsseite anzeigen</button></div>
  </details>`;
}
function renderPhonetikBookTasks(cfg, exercise){
  const tasks=exercise.bookTasks||[];
  if(!tasks.length) return '';
  return `<section class="extra-listening phonetik-book-tasks"><h3>Aufgaben der Einheit und passende Audios</h3>
    <p>Aufgabe lesen, Audio hoeren, Antwort notieren, dann die Loesung pruefen.</p>
    <div class="phonetik-task-list">${tasks.map(task=>{
      const tracks=task.tracks||[];
      const pages=phonetikTaskPages(task, exercise);
      const pageLabel=pages.length>1?`Buch S. ${pages[0]}-${pages.at(-1)}`:`Buch S. ${pages[0]||exercise.exercisePages.join(', ')}`;
      return `<article class="phonetik-task-card">
        <div class="interactive-section-head"><h3>${escapeHtml(task.title)}</h3>
          <div class="section-track-badges">${tracks.length?tracks.map(track=>`<span class="track-badge">${cfg.trackLabel(track)}</span>`).join(''):'<span class="track-badge no-audio">Ohne Audio</span>'}</div></div>
        <p>${escapeHtml(task.task||'')}</p>
        ${task.taskAr?ar(task.taskAr):''}
        ${phonetikPrintedQuestionPreview(cfg, exercise, task)}
        ${tracks.map(track=>a1AudioTrack(cfg, track, task.title)).join('')}
        ${phonetikAnswerBox(exercise, task)}
        ${phonetikSolutionPreview(cfg, exercise, task)}
        <div class="phonetik-task-meta"><span class="track-badge">${pageLabel}</span></div>
      </article>`;
    }).join('')}</div></section>`;
}
function renderA1InteractiveListening(cfg, exercise){
  const sections=cfg.interactive()[exercise.id]||[];
  if(!sections.length) return '';
  const figuresBook=cfg.figures();
  const hasAttachedFigures=sections.some(section=>section.figureRange||section.questions.some(question=>question.image||question.figure!==undefined||question.figureRange));
  const overview=cfg.meta.id==='phonetik'?'':(!hasAttachedFigures&&figuresBook[exercise.id]?renderListeningFigures(figuresBook[exercise.id]):'');
  const questionCount=sections.reduce((sum,section)=>sum+section.questions.length,0);
  return `<section class="interactive-sheet">
    <div class="interactive-intro"><div><b>Interaktive Aufgaben</b>
      <span>Direkt auswählen, schreiben und sofort prüfen.</span></div><span>${questionCount} Fragen</span></div>
    ${overview}
    ${sections.map((section,sectionIndex)=>{
      const tracks=section.tracks||[];
      return `<article class="interactive-section" data-section-index="${sectionIndex}">
      <div class="interactive-section-head"><h3>${escapeHtml(section.title)}</h3>
        <div class="section-track-badges">${tracks.map(track=>`<span class="track-badge">${cfg.trackLabel(track)}</span>`).join('')}</div></div>
      <div class="section-audios">${tracks.map(track=>a1AudioTrack(cfg, track)).join('')}</div>
      ${cfg.meta.id==='phonetik'?'':renderSectionFigures(exercise.id,section,figuresBook)}
      ${section.questions.map((question,index)=>renderWebQuestion(exercise.id,question,index,sectionIndex,tracks,figuresBook)).join('')}
      <button type="button" class="section-check" data-check-section="${sectionIndex}">Antworten prüfen</button>
      <span class="section-result" aria-live="polite"></span>
      </article>`;
    }).join('')}
  </section>`;
}
function renderA1RemainingTracks(cfg, exercise){
  if(cfg.meta.id==='phonetik') return '';
  const sections=cfg.interactive()[exercise.id]||[];
  const assigned=new Set(sections.flatMap(section=>section.tracks||[]));
  const remaining=exercise.tracks.filter(track=>!assigned.has(track));
  if(!remaining.length) return '';
  const trackTasks=cfg.trackTasks?cfg.trackTasks():(cfg.meta.id==='hoeren'?A1_LISTENING_TRACK_TASKS:{});
  return `<section class="extra-listening"><h3>Weitere Hör- und Sprechaufgaben aus dem Buch</h3>
    <p>Jeder Track steht direkt bei seiner zugehoerigen Buchaufgabe.</p>
    ${remaining.map(track=>`<div class="interactive-section-head"><h3>${escapeHtml(trackTasks[track]||'Uebung aus dem Buch')}</h3>
      <span class="track-badge">${cfg.trackLabel(track)}</span></div>${a1AudioTrack(cfg, track)}`).join('')}</section>`;
}
function a1InitInteractive(cfg, exercise){
  const sections=cfg.interactive()[exercise.id]||[];
  const audios=$$('.audio-track audio');
  audios.forEach(audio=>audio.addEventListener('play',()=>{ audios.forEach(other=>{ if(other!==audio) other.pause(); }); }));
  $$('[data-check-section]').forEach(button=>button.addEventListener('click',()=>{
    const sectionIndex=Number(button.dataset.checkSection);
    const section=sections[sectionIndex];
    const container=button.closest('.interactive-section');
    let correct=0;
    section.questions.forEach((question,index)=>{
      const card=container.querySelector(`[data-question-index="${index}"]`);
      const isCorrect=checkListeningQuestion(card,question);
      card.classList.toggle('correct',isCorrect);
      card.classList.toggle('wrong',!isCorrect);
      card.querySelector('.question-feedback').textContent=isCorrect?'Richtig':`Richtige Antwort: ${listeningCorrectAnswer(question)}`;
      if(isCorrect) correct++;
    });
    container.querySelector('.section-result').textContent=`${correct} / ${section.questions.length} richtig`;
  }));
}
function renderA1ListenBookPicker(){
  setTop('Hören A1','Zwei Übungsbücher',true);
  const books=[
    {id:'hoeren', meta:HOEREN_A1, cover:A1_LISTEN_BOOKS.hoeren.cover, ar:'كتاب الاستماع والتحدث الأصلي — 34 تمرينًا في 8 موضوعات.'},
    {id:'phonetik', meta:PHONETIK_A1, cover:A1_LISTEN_BOOKS.phonetik.cover, ar:''}
  ];
  books.find(book=>book.id==='phonetik').ar='';
  view.innerHTML=a1MainTabs('listen')+`
    <section class="hero"><h2>Hörtraining A1</h2>
      <p>Zwei eigenständige Bücher: Hören &amp; Sprechen und Phonetik – jeweils mit Original-Audios, Buchseiten und interaktiven Aufgaben.</p>
      ${ar('قسمان للسمعيات: كتاب Hören & Sprechen وكتاب Phonetik — كل واحد بالصور والأسئلة والصوتيات.')}</section>
    <section class="listen-book-grid">${books.map(book=>{
      const cfg=A1_LISTEN_BOOKS[book.id];
      const progress=a1ListenProgress(cfg);
      const total=book.meta.chapters.reduce((s,c)=>s+c.exercises.length,0);
      const done=Object.values(progress).filter(Boolean).length;
      const tracks=book.meta.chapters.flatMap(c=>c.exercises).flatMap(e=>e.tracks);
      return `<button type="button" class="listen-book-card" onclick="go('${cfg.route}')">
        <img loading="lazy" class="listen-book-cover" src="${book.cover}" alt="${escapeHtml(book.meta.title)}">
        <div class="listen-book-copy"><b>${book.meta.title}</b>
          <span class="sub">${book.meta.subtitle}</span>
          <span class="sub">Track ${tracks[0]}–${tracks.at(-1)} · ${done}/${total} geschafft</span>
          ${ar(book.ar)}<div class="listen-progress"><span style="width:${total?Math.round(done/total*100):0}%"></span></div>
        </div></button>`;
    }).join('')}</section>`;
}
function renderA1ListeningHome(bookId){
  const cfg=A1_LISTEN_BOOKS[bookId];
  const meta=cfg.meta;
  setTop(meta.title, meta.subtitle, true);
  const progress=a1ListenProgress(cfg);
  const total=meta.chapters.reduce((s,c)=>s+c.exercises.length,0);
  const done=Object.values(progress).filter(Boolean).length;
  const trackCount=meta.chapters.flatMap(c=>c.exercises).flatMap(e=>e.tracks).length;
  const introLabel=bookId==='phonetik'?'Prosodie · Wortakzent':'Einleitung';
  const outroLabel=bookId==='phonetik'?'Konsonanten · j':'Verabschiedung';
  view.innerHTML=a1MainTabs('listen')+`
    <section class="hero listening-hero">
      <img class="listening-cover" src="${cfg.cover}" alt="${escapeHtml(meta.title)} Buchcover">
      <div><h2>${meta.title}</h2>
        <p>Höre die Original-Aufnahmen und bearbeite die passenden Übungen aus dem Buch.</p>
        ${ar(bookId==='phonetik'?'تدريب النطق والإيقاع والحروف — استمع وكرّر وحل التمارين التفاعلية.':'استمع للتسجيلات الأصلية وحل التمارين المطابقة من الكتاب، موضوعًا موضوعًا.')}
        <div class="listening-stats"><span class="listening-stat">${meta.chapters.length} Themen</span><span class="listening-stat">${total} Übungen</span>
          <span class="listening-stat">${trackCount} Audiodateien</span><span class="listening-stat">${done}/${total} geschafft</span></div>
      </div>
    </section>
    ${a1AudioTrack(cfg, meta.introTrack, introLabel)}
    <div class="section-label">Themen im Buch</div>
    <section class="listen-chapter-grid">${meta.chapters.map(chapter=>{
      const cdone=chapter.exercises.filter(e=>progress[e.id]).length;
      const percent=Math.round(cdone/chapter.exercises.length*100);
      const tracks=chapter.exercises.flatMap(e=>e.tracks);
      const collage=chapter.exercises.slice(0,3);
      const chapterVisual=chapter.cover
        ? `<div class="chapter-collage unit-cover"><img loading="lazy" src="${chapter.cover}" alt="${escapeHtml(chapter.title)}"></div>`
        : `<div class="chapter-collage" style="grid-template-columns:repeat(${collage.length},1fr)">${collage.map(exercise=>`<img loading="lazy" src="${cfg.thumbnail(exercise)}"
          alt="${escapeHtml(exercise.title)}">`).join('')}<span class="chapter-letter">${chapter.id}</span></div>`;
      return `<button type="button" class="listen-chapter-card" onclick="go('${cfg.route}/${chapter.id}')">
        ${chapterVisual}
        <div class="listen-chapter-copy"><b>${chapter.title}</b>
          <span class="sub">${chapter.exercises.length} Übungen · Track ${tracks[0]}–${tracks.at(-1)}</span>
          ${ar(chapter.titleAr)}<div class="listen-progress"><span style="width:${percent}%"></span></div>
        </div></button>`;
    }).join('')}</section>
    <div class="section-label">Abschluss</div>
    ${a1AudioTrack(cfg, meta.outroTrack, outroLabel)}`;
}
function renderA1ListeningChapter(cfg, chapter){
  setTop(`${chapter.id} - ${chapter.title}`,`${chapter.exercises.length} Uebungen`,true);
  const progress=a1ListenProgress(cfg);
  view.innerHTML=a1MainTabs('listen')+`
    <section class="hero"><h2>${chapter.title}</h2><p>Waehle eine Uebung und hoere die Original-Tracks.</p>${ar(chapter.titleAr)}</section>
    <section class="listen-exercise-grid">${chapter.exercises.map((exercise,index)=>`
      <button type="button" class="listen-exercise-card ${progress[exercise.id]?'completed':''}" onclick="go('${cfg.route}/${chapter.id}/${index}')">
        <div class="listen-exercise-thumb"><img loading="lazy" src="${cfg.thumbnail(exercise)}" alt="${escapeHtml(exercise.title)}">
          <span class="listen-exercise-id">${exercise.id}</span>
          ${progress[exercise.id]?'<span class="listen-exercise-done">Gelernt</span>':''}
        </div>
        <div class="listen-exercise-copy"><b>${exercise.title}</b>
          <div class="listen-exercise-meta"><span>Track ${exercise.tracks.join(' - ')}</span>
            <span>Buch S. ${exercise.exercisePages.join(', ')}</span></div>
          <div class="listen-progress"><span style="width:${progress[exercise.id]?100:0}%"></span></div>
        </div>
      </button>`).join('')}</section>`;
}
function renderA1ListeningExercise(cfg, chapter, index){
  const exercise=chapter.exercises[index];
  if(!exercise){ renderA1ListeningChapter(cfg, chapter); return; }
  const isPhonetik=cfg.meta.id==='phonetik';
  const bookTaskTracks=uniqueTracks(exercise.bookTasks?.flatMap(task=>task.tracks||[])||[]);
  const topSub=isPhonetik&&exercise.bookTasks?.length
    ? `${chapter.title} - ${exercise.bookTasks.length} Aufgaben - ${bookTaskTracks.length} Audios`
    : `${chapter.title} - Track ${exercise.tracks.join('-')}`;
  setTop(`${exercise.id}: ${exercise.title}`,topSub,true);
  const isDone=!!a1ListenProgress(cfg)[exercise.id];
  const span=a1PageSpan(cfg, exercise);
  view.innerHTML=a1MainTabs('listen')+`
    <div class="listen-lesson-head">
      <div><div class="section-label" style="margin-top:2px">${chapter.id} - ${chapter.title}</div>
        <h2>${exercise.title}</h2>
        <div class="track-badges">${renderA1HeaderBadges(cfg, exercise)}</div>
      </div>
      <span class="dictionary-meta">Buch S. ${exercise.exercisePages.join(', ')}</span>
    </div>
    <div class="book-task"><b>Deine Aufgabe</b> ${escapeHtml(exercise.task)}${ar(exercise.taskAr)}</div>
    ${isPhonetik?renderPhonetikQuestionVisual(exercise):''}
    ${isPhonetik?renderPhonetikGuide(exercise):''}
    ${isPhonetik?renderPhonetikBookTasks(cfg, exercise):''}
    ${renderA1ExerciseFigures(cfg, exercise)}
    ${renderA1InteractiveListening(cfg, exercise)}
    ${renderA1RemainingTracks(cfg, exercise)}
    <details class="book-reference" ${isPhonetik?'':'open'}>
      <summary>Aufgabe im Buch (mit Fragen und Bildern)</summary>
      <div class="book-reference-pages">${span.task.map(p=>a1BookPage(cfg, p,'Aufgabe')).join('')}</div>
    </details>
    <div class="listen-actions">
      <button type="button" class="solution-toggle" id="a1SolBtn"${span.solution.length?'':' style="display:none"'}>Lösung und Hörtext anzeigen</button>
      <button type="button" class="lesson-complete ${isDone?'done':''}" id="a1ListenDone">${isDone?'Gelernt':'Als gelernt markieren'}</button>
    </div>
    <section class="solution-panel" id="a1ListenSolutions"></section>`;
  const solBtn=$('#a1SolBtn');
  if(solBtn) solBtn.addEventListener('click',()=>{
    const panel=$('#a1ListenSolutions');
    const show=!panel.classList.contains('show');
    if(show&&!panel.dataset.loaded){
      panel.innerHTML=`<div class="section-label">Lösung und Hörtext</div>`+span.solution.map(p=>a1BookPage(cfg, p,'Lösung')).join('');
      panel.dataset.loaded='1';
    }
    panel.classList.toggle('show',show);
    solBtn.innerHTML=show?'Lösung und Hörtext ausblenden':'Lösung und Hörtext anzeigen';
  });
  const btn=$('#a1ListenDone');
  btn.addEventListener('click',()=>{
    const p=a1ListenProgress(cfg); p[exercise.id]=!p[exercise.id];
    localStorage.setItem(cfg.progressKey,JSON.stringify(p));
    btn.classList.toggle('done',!!p[exercise.id]);
    btn.textContent=p[exercise.id]?'Gelernt':'Als gelernt markieren';
  });
  a1InitInteractive(cfg, exercise);
}
function renderA1Home(){
  setTop('Deutsch A1','Netzwerk neu A1', true);
  view.innerHTML = a1MainTabs('lessons') + `
  <section class="hero">
    <h2>Netzwerk neu A1</h2>
    <p>Zwölf Kapitel aus Netzwerk neu A1.1/A1.2 plus Grammatik-Skript A1 als eigene Lektionsreihe.</p>
    ${ar('اثنا عشر درسًا بالمفردات وجمل الكلام والقواعد والقراءة والمحادثة والكويز، بنفس شكل مستوى A2.')}
  </section>
  <div class="section-label">📙 Netzwerk neu A1.1 · Kapitel 1–6</div>
  <section class="a1-roadmap">
    ${A1_BOOK.slice(0,6).map(chapter=>`
      <button type="button" class="lesson-item" onclick="go('${chapter.route||`a1/k${chapter.num}`}')">
        <div class="num">${chapter.num}</div>
        ${chapter.visual?`<img class="lesson-thumb" src="${chapter.visual.src}" alt="">`:''}
        <div class="ttl"><b>${chapter.title}</b><span class="sub">${chapter.subtitle}</span>${ar(chapter.titleAr)}</div>
        <div class="chev">›</div>
      </button>`).join('')}
  </section>
  <div class="section-label">📗 Netzwerk neu A1.2 · Kapitel 7–12</div>
  <section class="a1-roadmap">
    ${A1_BOOK.slice(6,12).map(chapter=>`
      <button type="button" class="lesson-item" onclick="go('${chapter.route||`a1/k${chapter.num}`}')">
        <div class="num">${chapter.num}</div>
        ${chapter.visual?`<img class="lesson-thumb" src="${chapter.visual.src}" alt="">`:''}
        <div class="ttl"><b>${chapter.title}</b><span class="sub">${chapter.subtitle}</span>${ar(chapter.titleAr)}</div>
        <div class="chev">›</div>
      </button>`).join('')}
  </section>
  <div class="section-label">📘 Grammatik-Skript A1 · Lektion 1–8</div>
  <section class="a1-roadmap">
    ${A1_GRAM.map(lesson=>`
      <button type="button" class="lesson-item gram-script" onclick="go('a1/g${lesson.num}')">
        <div class="num">L${lesson.num}</div>
        <img class="lesson-thumb" src="assets/a1/chapters/chapter-${lesson.num}.webp" alt="">
        <div class="ttl"><b>Grammatik-Skript A1 · Lektion ${lesson.num}</b>
          <span class="sub">${lesson.topics.map((topic,index)=>`${lesson.num}.${index+1} ${topic.short}`).join(' · ')}</span></div>
        <div class="chev">›</div>
      </button>`).join('')}
  </section>
  <div class="intro-note">Hinweis: Die Kapitel orientieren sich an den Themen von Netzwerk neu A1.1 und A1.2, sind aber als eigene Erklärungen, Beispiele und Übungen formuliert.</div>`;
}

function renderA1Chapter(num, tab){
  const chapter=A1_BOOK.find(item=>item.num===num);
  if(!chapter){ renderA1Home(); return; }
  if(!tab) renderChapterMenu(chapter);
  else renderChapter(chapter, tab);
}

function renderB1Home(){
  setTop('Deutsch B1.1','Netzwerk neu B1.1 · Kapitel 1–6',true);
  view.innerHTML = (window.NextUI?.featureTabs('b1.1','lessons')||'') + `
  <section class="hero">
    <h2>Netzwerk neu B1.1</h2>
    <p>Sechs vollständige Kapitel aus Netzwerk neu B1.1: Wortschatz, Lesetexte, Grammatik, Redemittel, Sprechen und Quiz.</p>
    ${ar('ست وحدات كاملة من Netzwerk neu B1.1: كلمات وقراءة وقواعد وتعبيرات ومحادثة واختبارات.')}
  </section>
  <div class="section-label">📙 B1.1 · Kapitel 1–6</div>
  <section class="a1-roadmap">
    ${B1_BOOK.map(chapter=>`
      <button type="button" class="lesson-item" onclick="go('${chapter.route}/ueberblick')">
        <div class="num">${chapter.num}</div>
        ${chapter.visual?`<img class="lesson-thumb" src="${chapter.visual.src}" alt="">`:''}
        <div class="ttl"><b>${chapter.title}</b><span class="sub">${chapter.subtitle} · ${chapter.vocab.length} Wörter</span>${ar(chapter.introAr)}</div>
        <div class="chev">›</div>
      </button>`).join('')}
  </section>`;
}

function b1Tabs(active){
  return window.NextUI?.featureTabs('b1.1',active)||'';
}

function bindListFilter({listSelector,itemSelector,searchSelector,filters=[],countSelector,total,unit}){
  const search=$(searchSelector);
  const controls=filters.map(([selector,key])=>[$(selector),key]);
  const filter=()=>{
    const query=search.value.trim().toLocaleLowerCase('de-DE');
    let visible=0;
    $$(`${listSelector} ${itemSelector}`).forEach(entry=>{
      const show=(!query||entry.dataset.search.includes(query))&&controls.every(([control,key])=>!control.value||entry.dataset[key]===control.value);
      entry.hidden=!show; if(show) visible++;
    });
    $(countSelector).textContent=`${visible} / ${total} ${unit}`;
  };
  search.addEventListener('input',filter);
  controls.forEach(([control])=>control.addEventListener('change',filter));
  filter();
}

function b1ChapterOptions(){
  return `<option value="">Alle Kapitel</option>${B1_BOOK.map(c=>`<option value="${c.num}">Kapitel ${c.num}: ${escapeHtml(c.title)}</option>`).join('')}`;
}

function renderB1Dictionary(){
  setTop('B1.1 Wörterbuch','Alle Wörter aus den Kapiteln 1–6',true);
  const words=B1_BOOK.flatMap(chapter=>chapter.vocab.map((item,index)=>({...item,chapter:chapter.num,id:wordEntryId('B1.1',chapter,index,item)})))
    .sort((a,b)=>bareWordKey(a.w).localeCompare(bareWordKey(b.w),'de'));
  const favoriteIds=new Set(favoriteList().flatMap(item=>[item.id,item.dictionaryId]).filter(Boolean));
  view.innerHTML=b1Tabs('dict')+`
    <div class="hero"><h2>Wörterbuch B1.1</h2>
      <p>Suche auf Deutsch oder Arabisch. Mit dem Herz speicherst du ein Wort für die Wiederholung.</p>
      ${ar('ابحث بالألماني أو العربي في كل كلمات B1.1. اضغط على القلب عشان تحفظ الكلمة للمراجعة.')}</div>
    <div class="search-panel">
      <div class="search-row">
        <input class="library-search" id="b1DictSearch" type="search" placeholder="Deutsch oder Arabisch suchen..." aria-label="Wörter suchen">
        <select class="library-filter" id="b1DictChapter" aria-label="Kapitel filtern">${b1ChapterOptions()}</select>
      </div>
      <div class="result-count" id="b1DictCount"></div>
    </div>
    <div class="card" id="b1DictList">${words.map(v=>`
      <article class="dictionary-entry" data-chapter="${v.chapter}"
        data-search="${escapeHtml(`${v.w} ${v.d} ${v.ex||''} ${v.ar||''}`.toLocaleLowerCase('de-DE'))}">
        <div><div class="dictionary-word">${fmtWord(v.w)}</div>
          <div class="dictionary-definition">${v.d}</div>
          ${v.ex?`<div class="dictionary-example">„${v.ex}“</div>`:''}${ar(v.ar)}</div>
        <span class="dictionary-meta">K${v.chapter}
          <button type="button" class="favorite-btn ${favoriteIds.has(v.id)?'active':''}" data-favorite-id="${escapeHtml(v.id)}" aria-pressed="${favoriteIds.has(v.id)}" aria-label="Wort speichern" onclick="toggleDictionaryFavorite('${escapeHtml(v.id)}')">${favoriteIds.has(v.id)?'&#9829;':'&#9825;'}</button>
        </span>
      </article>`).join('')}</div>`;
  bindListFilter({listSelector:'#b1DictList',itemSelector:'.dictionary-entry',searchSelector:'#b1DictSearch',
    filters:[['#b1DictChapter','chapter']],countSelector:'#b1DictCount',total:words.length,unit:'Wörter'});
}

function renderB1Verbs(){
  setTop('B1.1 Verben','Präteritum, Perfekt & Rektion',true);
  const verbs=window.B1_VERBS||[];
  const perfectAux=aux=>aux==='sein'?'ist':'hat';
  view.innerHTML=b1Tabs('verbs')+`
    <div class="hero"><h2>Verben B1.1</h2>
      <p>Wichtige Verben aus den Kapiteln 1–6 mit Präsens (er/sie/es), Präteritum, Perfekt und der passenden Präposition.</p>
      ${ar('أهم أفعال B1.1 مع المضارع للغائب، والماضي البسيط، والـPerfekt، والحرف والحالة اللي بييجوا مع الفعل — وده من أهم نقاط مستوى B1.')}</div>
    <div class="search-panel">
      <div class="search-row">
        <input class="library-search" id="b1VerbSearch" type="search" placeholder="Verb, Präposition oder Bedeutung..." aria-label="Verben suchen">
        <select class="library-filter" id="b1VerbAux" aria-label="Hilfsverb filtern">
          <option value="">haben + sein</option><option value="haben">mit haben</option><option value="sein">mit sein</option>
        </select>
        <select class="library-filter" id="b1VerbChapter" aria-label="Kapitel filtern">${b1ChapterOptions()}</select>
      </div>
      <div class="result-count" id="b1VerbCount"></div>
    </div>
    <div id="b1VerbList">${verbs.map(verb=>`
      <article class="card verb-card open" data-aux="${verb.aux}" data-chapter="${verb.chapter}"
        data-search="${escapeHtml(`${verb.inf} ${verb.praes} ${verb.praet} ${verb.part} ${verb.rektion} ${verb.ar} ${verb.example}`.toLocaleLowerCase('de-DE'))}">
        <div class="verb-summary">
          <div><div class="verb-inf">${verb.inf}</div>
            <div class="verb-summary-line">${verb.praes} · ${verb.praet} · ${perfectAux(verb.aux)} ${verb.part}</div></div>
          <span class="verb-aux ${verb.aux}">${verb.aux}</span>
        </div>
        <div class="verb-details" style="display:block">
          ${verb.rektion&&verb.rektion!=='—'?`<div class="verb-perfect"><small>Rektion</small> ${verb.rektion}</div>`:''}
          ${ar(verb.ar)}
          <div class="dictionary-example">„${verb.example}“</div>
          <span class="dictionary-meta">K${verb.chapter}</span>
        </div>
      </article>`).join('')}</div>`;
  bindListFilter({listSelector:'#b1VerbList',itemSelector:'.verb-card',searchSelector:'#b1VerbSearch',
    filters:[['#b1VerbAux','aux'],['#b1VerbChapter','chapter']],countSelector:'#b1VerbCount',total:verbs.length,unit:'Verben'});
}

function renderB1Expressions(){
  setTop('B1.1 Redemittel','Fertige Sätze aus allen Kapiteln',true);
  const phrases=B1_BOOK.flatMap(chapter=>(chapter.redemittel||[]).flatMap(group=>
    group.items.map(item=>({de:item.de,ar:item.ar,cat:group.cat,chapter:chapter.num}))));
  view.innerHTML=b1Tabs('phrases')+`
    <div class="hero"><h2>Redemittel B1.1</h2>
      <p>Meinung sagen, Vorschläge machen, reklamieren, sich bewerben und mehr – alle Redemittel der Kapitel 1–6.</p>
      ${ar('جمل جاهزة لإبداء الرأي والاقتراح والشكوى والتقديم على وظيفة وغيرها — من كل وحدات B1.1.')}</div>
    <div class="search-panel">
      <div class="search-row">
        <input class="library-search" id="b1PhraseSearch" type="search" placeholder="Ausdruck suchen..." aria-label="Ausdrücke suchen">
        <select class="library-filter" id="b1PhraseChapter" aria-label="Kapitel filtern">${b1ChapterOptions()}</select>
      </div>
      <div class="result-count" id="b1PhraseCount"></div>
    </div>
    <div id="b1PhraseList">${phrases.map(item=>`
      <article class="card expression-card" data-chapter="${item.chapter}"
        data-search="${escapeHtml(`${item.de} ${item.ar} ${item.cat}`.toLocaleLowerCase('de-DE'))}">
        <span class="expression-tag">K${item.chapter} · ${item.cat}</span>
        <div class="expression-de">${item.de}</div>
        ${ar(item.ar)}
      </article>`).join('')}</div>`;
  bindListFilter({listSelector:'#b1PhraseList',itemSelector:'.expression-card',searchSelector:'#b1PhraseSearch',
    filters:[['#b1PhraseChapter','chapter']],countSelector:'#b1PhraseCount',total:phrases.length,unit:'Ausdrücke'});
}

function chapterLevel(c){
  return c?.route?.startsWith('a1/')?'A1':c?.route?.startsWith('b1.1/')?'B1.1':'A2';
}

function addChapterWordsToReview(level,num){
  const book=level==='A1'?A1_BOOK:level==='B1.1'?B1_BOOK:BOOK;
  const chapter=book.find(item=>item.num===Number(num));
  if(!chapter||!window.NextUI?.addWordsToReview) return;
  const items=chapter.vocab.map((item,index)=>({id:wordEntryId(level,chapter,index,item),w:plainText(item.w),d:plainText(item.d),ar:item.ar||'',ex:plainText(item.ex||'')}));
  window.NextUI.addWordsToReview(items,`${level} · Kapitel ${chapter.num}`);
}

function renderHome(){
  setTop('Deutsch A2','Netzwerk neu A2.1 + A2.2 · Buch & Grammatik', true);
  let html = mainTabs('lessons') + `
  <div class="hero">
    <h2>Hallo! 👋 Lern Deutsch – Schritt für Schritt</h2>
    <p>Hier findest du alle zwölf Themen aus <b>Netzwerk neu A2.1 und A2.2</b> sowie das <b>Grammatik-Skript</b>:
    Wortschatz, Redemittel, Grammatik, Quiz und das komplette Hörtraining aus <b>Hören & Sprechen A2</b>.</p>
    <div class="ar">أهلاً! هنا محتوى مستوى A2 كامل: موضوعات <b>Netzwerk neu A2.1 وA2.2</b>، مذكرة القواعد، وكتاب <b>Hören & Sprechen A2</b>.</div>
  </div>
  <div class="section-label">📙 Netzwerk neu A2.1 · Kapitel 1–6</div>`;
  window.BOOK0.forEach(c => {
    html += `<button type="button" class="lesson-item" onclick="go('k${c.num}')">
      <div class="num">${c.num}</div>
      ${c.visual?`<img class="lesson-thumb" src="${c.visual.src}" alt="">`:''}
      <div class="ttl"><b>${c.title}</b><span class="sub">${c.subtitle}</span>${ar(c.titleAr)}</div>
      <div class="chev">›</div></button>`;
  });
  html += `<div class="section-label">📗 Netzwerk neu A2.2 · Kapitel 7–12</div>`;
  [...window.BOOK1,...window.BOOK2].forEach(c => {
    html += `<button type="button" class="lesson-item" onclick="go('k${c.num}')">
      <div class="num">${c.num}</div>
      ${c.visual?`<img class="lesson-thumb" src="${c.visual.src}" alt="">`:''}
      <div class="ttl"><b>${c.title}</b><span class="sub">${c.subtitle}</span>${ar(c.titleAr)}</div>
      <div class="chev">›</div></button>`;
  });
  html += `<div class="section-label">📘 Grammatik-Skript A2 · Lektion 1–8</div>`;
  GRAM.forEach(l => {
    html += `<button type="button" class="lesson-item gram" onclick="go('g${l.num}')">
      <div class="num">L${l.num}</div>
      <div class="ttl"><b>${l.topics.map(t=>t.short).join(' · ')}</b><span class="sub">Lektion ${l.num} · ${l.topics.length} Themen</span>${ar(l.titleAr)}</div>
      <div class="chev">›</div></button>`;
  });
  view.innerHTML = html;
}
