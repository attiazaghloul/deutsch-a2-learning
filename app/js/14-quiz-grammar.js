/* ===================== quiz ===================== */
function initQuiz(questions){
  const area = $('#quizArea');
  let score=0, answered=0;
  let h='';
  questions.forEach((q,qi) => {
    h += `<div class="card"><div class="quiz-q">${qi+1}. ${q.q}</div>`;
    q.o.forEach((opt,oi) => {
      h += `<button class="quiz-opt" data-q="${qi}" data-o="${oi}">${opt}</button>`;
    });
    h += `<div class="quiz-fb" id="fb${qi}" role="status" aria-live="polite"></div></div>`;
  });
  h += `<div class="card quiz-score" id="qscore" role="status" aria-live="polite">Beantworte alle Fragen.</div>`;
  area.innerHTML = h;
  area.querySelectorAll('.quiz-opt').forEach(btn => {
    btn.addEventListener('click', () => {
      const qi=+btn.dataset.q, oi=+btn.dataset.o, q=questions[qi];
      if(btn.parentElement.dataset.done) return;
      btn.parentElement.dataset.done='1';
      answered++;
      const fb = $('#fb'+qi);
      btn.parentElement.querySelectorAll('.quiz-opt').forEach((b,i)=>{
        if(i===q.a) b.classList.add('correct');
      });
      if(oi===q.a){ score++; fb.innerHTML=`Richtig. ${q.fb||''}${ar(q.fbAr)}`; }
      else {
        btn.classList.add('wrong'); fb.innerHTML=`Noch nicht. ${q.fb||''}${ar(q.fbAr)}`;
        window.NextUI?.addMistake({prompt:q.q,answer:q.o[q.a],context:'Lerncheck'});
      }
      fb.classList.add('show');
      if(answered===questions.length){
        $('#qscore').innerHTML = `Dein Ergebnis: ${score} / ${questions.length}` +
          (score===questions.length?' – Perfekt!':score>=questions.length*0.6?' – Gut gemacht!':' – Wiederhole die Lektion noch einmal!');
      }
    });
  });
}

/* ===================== grammar lektion (skript) ===================== */
function renderLektion(l, topicIdx, options={}){
  const routePrefix=options.routePrefix||'g';
  const titlePrefix=options.titlePrefix||'Lektion';
  const titleText=options.titlePrefix?`${titlePrefix} ${l.num}`:`Lektion ${l.num} (Skript)`;
  const coverageTitle=options.coverageTitle||'Skript vollständig abgedeckt';
  const hideSource=!!options.hideSource;
  setTop(titleText, l.topics.map(t=>t.short).join(' · '), true);
  const ti = parseInt(topicIdx)||0;
  let html = `<div class="tabs">` + l.topics.map((t,i) =>
    `<button class="tab ${i===ti?'active':''}" onclick="go('${routePrefix}${l.num}/${i}')">${l.num}.${i+1} ${t.short}</button>`).join('') + `</div>`;
  const t = l.topics[ti];
  if(t.visual){
    html += `<figure class="card grammar-visual">
      <img src="${t.visual.src}" alt="${t.visual.alt}">
      <figcaption class="visual-caption">${t.visual.caption}${ar(t.visual.captionAr)}</figcaption>
    </figure>`;
  }
  if(t.coveragePoints?.length){
    html += `<aside class="script-coverage">
      <div class="script-coverage-head"><b>${coverageTitle}</b>${hideSource?'':`<span class="source-page">PDF S. ${t.sourcePage}</span>`}</div>
      <div class="coverage-points">${t.coveragePoints.map(point=>`<span class="coverage-point">${point}</span>`).join('')}</div>
    </aside>`;
  }
  html += `<div class="card gram-block"><h3>${l.num}.${ti+1}. ${t.title}</h3>${ar(t.titleAr)}${t.body}</div>`;
  if(t.quiz){
    html += `<div class="section-label">🎯 Schnelltest</div><div id="quizArea"></div>`;
  }
  if(t.practice?.length){
    html += `<div class="practice-head"><h3>Interaktive Übungen</h3>
      <span class="practice-progress" id="practiceProgress">0 / ${t.practice.length} geschafft</span></div>
      <div id="practiceArea"></div>`;
  }
  view.innerHTML = html;
  initGapExercises(view);
  if(t.quiz) initQuiz(t.quiz);
  if(t.practice?.length) initPractice(t.practice, `${routePrefix}-${l.num}-${ti}`);
}

function normalizeAnswer(value){
  return value.toLocaleLowerCase('de-DE').replace(/[.,!?;:„“"']/g,'').replace(/\s+/g,' ').trim();
}

function exerciseLabel(type){
  return `<span class="exercise-type type-label-${type}"></span>`;
}

function initPractice(exercises, practiceId){
  const area = $('#practiceArea');
  const saved = JSON.parse(localStorage.getItem(`grammarPractice:${practiceId}`) || '{}');
  area.innerHTML = exercises.map((ex,i) => {
    if(ex.type==='order'){
      return `<div class="card exercise-card" data-ex="${i}">
        ${exerciseLabel(ex.type)}<div class="exercise-prompt">${ex.prompt}</div>
        <div class="token-bank">${ex.tokens.map((token,ti)=>`<button class="word-token" data-token="${ti}">${token}</button>`).join('')}</div>
        <div class="order-answer" aria-label="Deine Antwort"></div>
        <div class="exercise-actions"><button class="exercise-check">Prüfen</button><button class="exercise-reset">Neu ordnen</button></div>
        <div class="exercise-feedback"></div></div>`;
    }
    return `<div class="card exercise-card" data-ex="${i}">
      ${exerciseLabel(ex.type)}<div class="exercise-prompt">${ex.prompt}</div>
      <input class="exercise-input" autocomplete="off" placeholder="Antwort schreiben …">
      <div class="exercise-actions"><button class="exercise-check">Prüfen</button></div>
      <div class="exercise-feedback"></div></div>`;
  }).join('');

  area.querySelectorAll('.exercise-card').forEach(card => {
    const index = +card.dataset.ex;
    const exercise = exercises[index];
    const accepted = Array.isArray(exercise.answer) ? exercise.answer : [exercise.answer];
    const feedback = card.querySelector('.exercise-feedback');
    const setFeedback = correct => {
      feedback.className = `exercise-feedback show ${correct?'correct':'wrong'}`;
      feedback.innerHTML = correct
        ? `✓ Richtig!${ar('إجابة صحيحة')}`
        : `Noch nicht. Musterlösung: <b>${accepted[0]}</b>${exercise.hint?`<br><small>${exercise.hint}</small>`:''}${ar('راجع ترتيب الكلمات أو النهاية ثم حاول مرة ثانية.')}`;
      if(correct){
        saved[index]=true;
        localStorage.setItem(`grammarPractice:${practiceId}`, JSON.stringify(saved));
        updatePracticeProgress(exercises.length, saved);
      }
    };

    if(exercise.type==='order'){
      const answerBox = card.querySelector('.order-answer');
      card.querySelectorAll('.word-token').forEach(btn => btn.addEventListener('click', () => {
        btn.disabled=true;
        const chosen=document.createElement('button');
        chosen.className='word-token'; chosen.textContent=btn.textContent;
        chosen.addEventListener('click',()=>{ btn.disabled=false; chosen.remove(); });
        answerBox.appendChild(chosen);
      }));
      card.querySelector('.exercise-reset').addEventListener('click',()=>{
        answerBox.innerHTML='';
        card.querySelectorAll('.token-bank .word-token').forEach(btn=>btn.disabled=false);
        feedback.className='exercise-feedback';
      });
      card.querySelector('.exercise-check').addEventListener('click',()=>{
        const value=[...answerBox.querySelectorAll('.word-token')].map(btn=>btn.textContent).join(' ');
        setFeedback(accepted.some(a=>normalizeAnswer(a)===normalizeAnswer(value)));
      });
    } else {
      const input=card.querySelector('.exercise-input');
      card.querySelector('.exercise-check').addEventListener('click',()=>{
        setFeedback(accepted.some(a=>normalizeAnswer(a)===normalizeAnswer(input.value)));
      });
      input.addEventListener('keydown',event=>{ if(event.key==='Enter') card.querySelector('.exercise-check').click(); });
    }
  });
  updatePracticeProgress(exercises.length, saved);
}

function updatePracticeProgress(total, saved){
  const done=Object.values(saved).filter(Boolean).length;
  const progress=$('#practiceProgress');
  if(progress) progress.textContent=`${done} / ${total} geschafft`;
}

function centerActiveNavigation(){
  $$('.main-tabs,.tabs,.level-mini-nav').forEach(nav=>{
    const active=nav.querySelector('.active');
    if(!active || nav.scrollWidth<=nav.clientWidth) return;
    const left=active.offsetLeft - (nav.clientWidth-active.offsetWidth)/2;
    nav.scrollTo({left:Math.max(0,left),behavior:'auto'});
  });
}

window.addEventListener('hashchange',()=>requestAnimationFrame(centerActiveNavigation));

/* Runs after every script section has loaded (needs a1GapExercise).
   A2-Grammatik: vollständige Skript-Übungen interaktiv (Selbstkorrektur) an die Erklärung anhängen */
(function attachA2GrammarExercises(){
  const L=window.A2_GRAMMAR_LESSONS||{};
  (GRAM||[]).forEach(lesson=>(lesson.topics||[]).forEach((topic,i)=>{
    const data=L[`${lesson.num}.${i+1}`];
    if(data&&data.exercises&&data.exercises.length&&!topic._a2ex){
      topic._a2ex=true;
      topic.body=(topic.body||'')
        +`<div class="gap-ex-wrap"><div class="section-label">✍️ Übungen mit Selbstkorrektur${ar('تمارين بتصحيح ذاتي')}</div>`
        +data.exercises.map((e,idx)=>a1GapExercise(e,idx)).join('')
        +`</div>`;
    }
  }));
})();
