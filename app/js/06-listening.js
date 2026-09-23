/* ===================== Hören & Sprechen A2 ===================== */
function listeningProgress(){
  try{ return JSON.parse(localStorage.getItem('hoerenProgress')||'{}'); }
  catch(error){ return {}; }
}

function listeningThumbnail(exercise){
  return `assets/listening/thumbnails/${exercise.id.toLowerCase()}.webp`;
}

function renderListeningHome(){
  setTop('Hören & Sprechen A2','Original-Audios mit den Übungen',true);
  const progress=listeningProgress();
  const total=HOEREN.chapters.reduce((sum,chapter)=>sum+chapter.exercises.length,0);
  const done=Object.values(progress).filter(Boolean).length;
  view.innerHTML=mainTabs('listen')+`
    <section class="hero listening-hero">
      <img class="listening-cover" src="assets/listening/pages/cover.webp" alt="Hören und Sprechen A2 Buchcover">
      <div><h2>Hören & Sprechen A2</h2>
        <p>Höre die Original-Aufnahmen und bearbeite direkt die passenden Aufgaben aus dem Buch.</p>
        ${ar('استمع للتسجيلات الأصلية وحل الأسئلة المطابقة من صفحات الكتاب، وبعد المحاولة افتح صفحات الحل.')}
        <div class="listening-stats"><span class="listening-stat">9 Themen</span><span class="listening-stat">28 Übungen</span>
          <span class="listening-stat">61 Audiodateien</span><span class="listening-stat">${done}/${total} geschafft</span></div>
      </div>
    </section>
    <article class="audio-track"><div class="audio-track-head">
      <span class="audio-track-title">Track 1 · Vorwort</span><span class="track-badge">Einführung</span></div>
      <audio controls preload="metadata" src="assets/listening/audio/track-001.mp3">Audio wird nicht unterstützt.</audio>
    </article>
    <div class="section-label">Themen im Buch</div>
    <section class="listen-chapter-grid">${HOEREN.chapters.map(chapter=>{
      const chapterDone=chapter.exercises.filter(exercise=>progress[exercise.id]).length;
      const percent=Math.round(chapterDone/chapter.exercises.length*100);
      const tracks=chapter.exercises.flatMap(exercise=>exercise.tracks);
      const collage=chapter.exercises.slice(0,3);
      return `<button type="button" class="listen-chapter-card" onclick="go('listen/${chapter.id}')">
        <div class="chapter-collage" style="grid-template-columns:repeat(${collage.length},1fr)">${collage.map(exercise=>`<img loading="lazy" src="${listeningThumbnail(exercise)}"
          alt="${escapeHtml(exercise.title)}">`).join('')}<span class="chapter-letter">${chapter.id}</span></div>
        <div class="listen-chapter-copy"><b>${chapter.title}</b>
          <span class="sub">${chapter.exercises.length} Übungen · Track ${tracks[0]}–${tracks.at(-1)}</span>
          ${ar(chapter.titleAr)}<div class="listen-progress"><span style="width:${percent}%"></span></div>
        </div></button>`;
    }).join('')}</section>}`;
}

function renderListeningChapter(chapter){
  setTop(`${chapter.id} · ${chapter.title}`,`${chapter.exercises.length} Übungen`,true);
  const progress=listeningProgress();
  view.innerHTML=`
    <section class="hero"><h2>${chapter.title}</h2><p>Wähle eine Übung. Jeder Track ist direkt mit seinen Buchseiten verbunden.</p>${ar(chapter.titleAr)}</section>
    <section class="listen-exercise-grid">${chapter.exercises.map((exercise,index)=>`
      <button type="button" class="listen-exercise-card ${progress[exercise.id]?'completed':''}" onclick="go('listen/${chapter.id}/${index}')">
        <div class="listen-exercise-thumb"><img loading="lazy" src="${listeningThumbnail(exercise)}" alt="${escapeHtml(exercise.title)}">
          <span class="listen-exercise-id">${exercise.id}</span>
          ${progress[exercise.id]?'<span class="listen-exercise-done">Gelernt ✓</span>':''}
        </div>
        <div class="listen-exercise-copy"><b>${exercise.title}</b>
          <div class="listen-exercise-meta"><span>Track ${exercise.tracks.join(' · ')}</span>
            <span>Seite ${exercise.exercisePages.join(', ')}</span></div>
          <div class="listen-progress"><span style="width:${progress[exercise.id]?100:0}%"></span></div>
        </div>
      </button>`).join('')}</section>`;
}

function renderListeningExercise(chapter,index){
  const exercise=chapter.exercises[index];
  if(!exercise){ renderListeningChapter(chapter); return; }
  setTop(`${exercise.id}: ${exercise.title}`,`${chapter.title} · Track ${exercise.tracks.join('–')}`,true);
  const progress=listeningProgress();
  view.innerHTML=`
    <div class="listen-lesson-head">
      <div><div class="section-label" style="margin-top:2px">${chapter.id} · ${chapter.title}</div>
        <h2>${exercise.title}</h2>
        <div class="track-badges">${exercise.tracks.map(track=>`<span class="track-badge">Track ${track}</span>`).join('')}</div>
      </div>
      <span class="dictionary-meta">Buch S. ${exercise.exercisePages.join(', ')}</span>
    </div>
    <div class="book-task"><b>Deine Aufgabe</b>${exercise.task}${ar(exercise.taskAr)}</div>
    ${renderInteractiveListening(exercise)}
    ${renderRemainingListeningTracks(exercise)}
    <details class="book-reference">
      <summary>Originalseiten aus dem Buch als Referenz</summary>
      <div class="book-reference-pages">${exercise.exercisePages.map(page=>renderBookPage(page,'Aufgabe')).join('')}</div>
    </details>
    <div class="listen-actions">
      <button type="button" class="solution-toggle" data-solution-pages="${exercise.solutionPages.join(',')}">Lösung anzeigen</button>
      <button type="button" class="lesson-complete ${progress[exercise.id]?'done':''}" data-listening-complete="${exercise.id}">
        ${progress[exercise.id]?'Gelernt ✓':'Als gelernt markieren'}
      </button>
    </div>
    <section class="solution-panel" id="listeningSolutions"></section>`;
  initListeningExercise(exercise);
}

function listeningFigures(exerciseId,question,figuresBook){
  const book=figuresBook||window.HOEREN_FIGURES||{};
  if(book.__noFigures) return [];
  const all=book[exerciseId]||[];
  if(!question) return all;
  if(question.image) return [{src:question.image,page:question.page||''}];
  if(Number.isInteger(question.figure)) return all[question.figure]?[all[question.figure]]:[];
  if(Array.isArray(question.figureRange)) return all.slice(question.figureRange[0],question.figureRange[1]);
  return [];
}

function figureCaption(figure,index){
  if(figure.caption) return figure.caption;
  if(figure.label) return figure.sheet?`Bilder ${figure.label}`:`Bild ${figure.label}`;
  return `Abbildung ${index+1}`;
}

function renderListeningFigures(figures){
  if(!figures.length) return '';
  const isSheet=figures.some(figure=>figure.sheet);
  const isTiles=!isSheet&&figures.length>1;
  const classes=['question-figures',isSheet?'sheet':'',isTiles?'tiles':''].filter(Boolean).join(' ');
  return `<div class="${classes}">${figures.map((figure,index)=>{
    const caption=figureCaption(figure,index);
    const page=figure.page&&!caption.includes(`Buchseite ${figure.page}`)?` · Buchseite ${figure.page}`:'';
    return `<figure class="question-figure${figure.sheet?' sheet-figure':''}"><img loading="lazy" src="${escapeHtml(figure.src)}" alt="${escapeHtml(caption)}">
      <figcaption>${escapeHtml(caption)}${page}</figcaption>
    </figure>`;
  }).join('')}</div>`;
}

function renderSectionFigures(exerciseId,section,figuresBook){
  if(!Array.isArray(section.figureRange)) return '';
  const book=figuresBook||window.HOEREN_FIGURES||{};
  const figures=(book[exerciseId]||[]).slice(section.figureRange[0],section.figureRange[1]);
  const rendered=renderListeningFigures(figures);
  return rendered?`<div class="section-figures">${rendered}</div>`:'';
}

function renderWebQuestion(exerciseId,question,index,sectionIndex,tracks,figuresBook){
  const name=`listen-${exerciseId}-${sectionIndex}-${index}`;
  const figures=renderListeningFigures(listeningFigures(exerciseId,question,figuresBook));
  const trackLabel=tracks.length===1?`Track ${tracks[0]}`:`Tracks ${tracks.join(' + ')}`;
  let control='';
  if(question.type==='text'){
    control=`<input class="web-text-input" type="text" autocomplete="off" placeholder="Antwort schreiben …">`;
  }else if(question.type==='choice'){
    control=`<div class="web-options">${question.options.map((option,optionIndex)=>`
      <label class="web-option"><input type="radio" name="${name}" value="${optionIndex}"><span>${escapeHtml(option)}</span></label>`).join('')}</div>`;
  }else if(question.type==='multi'){
    control=`<div class="web-options">${question.options.map((option,optionIndex)=>`
      <label class="web-option"><input type="checkbox" value="${optionIndex}"><span>${escapeHtml(option)}</span></label>`).join('')}</div>`;
  }else if(question.type==='match'){
    control=`<div class="match-grid">${question.left.map((left,leftIndex)=>`
      <label class="match-row"><span class="match-label">${escapeHtml(left)}</span>
        <select class="match-select" data-match-index="${leftIndex}"><option value="">Bitte wählen</option>
          ${question.options.map((option,optionIndex)=>`<option value="${optionIndex}">${escapeHtml(option)}</option>`).join('')}
        </select>
      </label>`).join('')}</div>`;
  }
  return `<article class="web-question" data-question-index="${index}">
    <div class="web-question-title"><span class="question-number">${index+1}</span><span>${escapeHtml(question.prompt)}</span>
      <span class="question-track">${trackLabel}</span></div>
    ${figures}${control}<div class="question-feedback"></div>
  </article>`;
}

function renderInteractiveListening(exercise){
  const sections=(window.HOEREN_INTERACTIVE||{})[exercise.id]||[];
  if(!sections.length) return '';
  const hasAttachedFigures=sections.some(section=>section.figureRange||section.questions.some(question=>question.image||question.figure!==undefined||question.figureRange));
  const overview=!hasAttachedFigures?renderListeningFigures(listeningFigures(exercise.id)):'';
  const questionCount=sections.reduce((sum,section)=>sum+section.questions.length,0);
  return `<section class="interactive-sheet">
    <div class="interactive-intro"><div><b>Interaktive Aufgaben</b>
      <span>Direkt auswählen, schreiben und sofort prüfen.</span></div><span>${questionCount} Fragen</span></div>
    ${overview}
    ${sections.map((section,sectionIndex)=>{
      const tracks=section.tracks||[];
      return `<article class="interactive-section" data-section-index="${sectionIndex}">
      <div class="interactive-section-head"><h3>${escapeHtml(section.title)}</h3>
        <div class="section-track-badges">${tracks.map(track=>`<span class="track-badge">Track ${track}</span>`).join('')}</div>
      </div>
      <div class="section-audios">${tracks.map(track=>renderBookTrack(track,exercise)).join('')}</div>
      ${renderSectionFigures(exercise.id,section)}
      ${section.questions.map((question,index)=>renderWebQuestion(exercise.id,question,index,sectionIndex,tracks)).join('')}
      <button type="button" class="section-check" data-check-section="${sectionIndex}">Antworten prüfen</button>
      <span class="section-result" aria-live="polite"></span>
    </article>`}).join('')}
  </section>`;
}

function renderRemainingListeningTracks(exercise){
  const sections=(window.HOEREN_INTERACTIVE||{})[exercise.id]||[];
  const assigned=new Set(sections.flatMap(section=>section.tracks||[]));
  const remaining=exercise.tracks.filter(track=>!assigned.has(track));
  if(!remaining.length) return '';
  return `<section class="extra-listening"><h3>Weitere Hör- und Sprechaufgabe aus dem Buch</h3>
    <p>Jeder Track steht direkt bei seiner zugehörigen Buchaufgabe.</p>
    ${remaining.map(track=>`<div class="interactive-section-head"><h3>${escapeHtml(LISTENING_TRACK_TASKS[track]||'Zusatzaufgabe')}</h3>
      <span class="track-badge">Track ${track}</span></div>${renderBookTrack(track,exercise)}`).join('')}</section>`;
}

const LISTENING_TRACK_TASKS={
  3:"1b · Personen vorstellen und nachsprechen",7:"3b · Hören und nachsprechen",
  10:"4b · Hören und nachsprechen",13:"2a · Möbel einzeichnen",16:"3b · Hören und nachsprechen",
  18:"1b · Hören und nachsprechen",20:"2b · Hören und nachsprechen",22:"3b · Einladen und nachsprechen",
  23:"3c · Für eine Einladung bedanken",25:"1b · Hören und nachsprechen",28:"2c · Gefühle ausdrücken",
  30:"1b · Preise nachsprechen",34:"3b · Im Restaurant bestellen",36:"1c · Beschwerden anders sagen",
  40:"1c · Um Hilfe bitten",42:"2b · Beruflichen Weg beschreiben",44:"3b · Telefongespräch ergänzen",
  45:"3c · Telefonsätze nachsprechen",47:"4b · Termine vorlesen",52:"2b · Sätze am Fahrkartenschalter",
  54:"3b · Über Urlaubspläne sprechen",60:"2b · Über das Wetter sprechen",62:"3b · Ratschläge im Straßenverkehr"
};

function listeningCorrectAnswer(question){
  if(question.type==='text') return question.answer[0];
  if(question.type==='choice') return question.options[question.answer];
  if(question.type==='multi') return question.answer.map(index=>question.options[index]).join(', ');
  if(question.type==='match') return question.left.map((left,index)=>`${left}: ${question.options[question.answer[index]]}`).join(' · ');
  return '';
}

function checkListeningQuestion(card,question){
  if(question.type==='text'){
    const value=card.querySelector('.web-text-input').value;
    return question.answer.some(answer=>normalizeAnswer(value)===normalizeAnswer(answer));
  }
  if(question.type==='choice'){
    const selected=card.querySelector('input:checked');
    return Boolean(selected)&&Number(selected.value)===question.answer;
  }
  if(question.type==='multi'){
    const selected=[...card.querySelectorAll('input:checked')].map(input=>Number(input.value)).sort((a,b)=>a-b);
    const answer=[...question.answer].sort((a,b)=>a-b);
    return selected.length===answer.length&&selected.every((value,index)=>value===answer[index]);
  }
  if(question.type==='match'){
    const selects=[...card.querySelectorAll('.match-select')];
    return selects.length===question.answer.length&&selects.every((select,index)=>select.value!==''&&Number(select.value)===question.answer[index]);
  }
  return false;
}

function renderBookTrack(track,exercise){
  if(track===47){
    return `<article class="audio-track missing-audio"><div class="audio-track-head">
      <span class="audio-track-title">Track 47 · Aussprachetraining</span><span class="track-badge">Ersatz</span></div>
      <p>Die MP3-Datei 47 fehlt in beiden gelieferten Audio-Ordnern. Der Buchtext kann stattdessen mit der gewählten deutschen Stimme vorgelesen werden.</p>
      <button type="button" class="people-read" onclick="speakText(${JSON.stringify(exercise.fallbackText)},'de')">Text von Track 47 hören</button>
      ${ar('ملف التراك 47 غير موجود في المصدرين، لذلك التطبيق يقرأ نصه الموجود في الكتاب بالصوت الألماني المختار.')}
    </article>`;
  }
  return `<article class="audio-track"><div class="audio-track-head">
      <span class="audio-track-title">Track ${track}</span><span class="track-badge">Original MP3</span></div>
    <audio controls preload="metadata" src="assets/listening/audio/track-${String(track).padStart(3,'0')}.mp3">Audio wird nicht unterstützt.</audio>
    <div class="audio-speeds"><button class="audio-speed" data-audio-speed=".75">0.75×</button>
      <button class="audio-speed active" data-audio-speed="1">1×</button>
      <button class="audio-speed" data-audio-speed="1.25">1.25×</button></div>
  </article>`;
}

function renderBookPage(page,label){
  return `<figure class="card book-page"><img loading="lazy" src="assets/listening/pages/page-${String(page).padStart(3,'0')}.webp"
      alt="${label}, Buchseite ${page}">
    <figcaption><span>${label} · Seite ${page}</span>
      <button type="button" class="page-zoom" data-book-page="${page}" data-page-label="${label}">Seite vergrößern</button>
    </figcaption></figure>`;
}

function initListeningExercise(exercise){
  const audios=$$('.audio-track audio');
  audios.forEach(audio=>audio.addEventListener('play',()=>{
    audios.forEach(other=>{ if(other!==audio) other.pause(); });
    if(speech) speech.cancel();
  }));
  $$('.audio-speed').forEach(button=>button.addEventListener('click',()=>{
    const card=button.closest('.audio-track');
    card.querySelector('audio').playbackRate=Number(button.dataset.audioSpeed);
    card.querySelectorAll('.audio-speed').forEach(item=>item.classList.toggle('active',item===button));
  }));
  const sections=(window.HOEREN_INTERACTIVE||{})[exercise.id]||[];
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
  const solutionButton=$('.solution-toggle');
  solutionButton.addEventListener('click',()=>{
    const panel=$('#listeningSolutions');
    const show=!panel.classList.contains('show');
    if(show&&!panel.dataset.loaded){
      panel.innerHTML=`<div class="section-label">Lösung und Hörtext</div>`+
        exercise.solutionPages.map(page=>renderBookPage(page,'Lösung')).join('');
      panel.dataset.loaded='1';
    }
    panel.classList.toggle('show',show);
    solutionButton.textContent=show?'Lösung ausblenden':'Lösung anzeigen';
  });
  const completeButton=$('[data-listening-complete]');
  completeButton.addEventListener('click',()=>{
    const saved=listeningProgress();
    saved[exercise.id]=!saved[exercise.id];
    localStorage.setItem('hoerenProgress',JSON.stringify(saved));
    completeButton.classList.toggle('done',saved[exercise.id]);
    completeButton.textContent=saved[exercise.id]?'Gelernt ✓':'Als gelernt markieren';
  });
}

view.addEventListener('click',event=>{
  const zoom=event.target.closest('[data-book-page]');
  if(!zoom) return;
  const page=zoom.dataset.bookPage;
  const base=zoom.dataset.pageBase||'assets/listening/pages/';
  $('#bookPageTitle').textContent=`${zoom.dataset.pageLabel} · Seite ${page}`;
  const assetPage=zoom.dataset.assetPage||page;
  $('#bookPageLarge').src=`${base}page-${String(assetPage).padStart(3,'0')}.webp`;
  $('#bookPageLarge').alt=`Buchseite ${page}`;
  openModal('bookPageModal');
});
