/* ===================== Hören B1.1 ===================== */
/* Listening training from window.B1_HOEREN: listen first, answer, check,
   then read the transcript. Lines play one by one with a voice per speaker
   (recorded B1 voices when available, browser voice otherwise). */
let b1ListenPlayback=0;

function b1ListenProgress(){
  try{ return JSON.parse(localStorage.getItem('b1HoerenProgress')||'{}'); }
  catch(error){ return {}; }
}

function saveB1ListenProgress(id,correct,total){
  const progress=b1ListenProgress();
  const best=progress[id]?.correct||0;
  progress[id]={correct:Math.max(best,correct),total,at:Date.now()};
  try{ localStorage.setItem('b1HoerenProgress',JSON.stringify(progress)); }catch(error){}
}

function b1ListenChapters(){
  const data=window.B1_HOEREN||{};
  return Object.keys(data).map(Number).sort((a,b)=>a-b).map(num=>({num,...data[num]}));
}

function stopB1Listening(){
  b1ListenPlayback++;
  stopFixedSpeech();
  window.speechSynthesis?.cancel();
}

function renderB1ListenHome(){
  setTop('Hören B1.1','Gespräche, Durchsagen und Radio',true);
  const progress=b1ListenProgress();
  const chapters=b1ListenChapters();
  const tasks=chapters.flatMap(chapter=>chapter.tasks);
  const done=tasks.filter(task=>progress[task.id]).length;
  view.innerHTML=b1Tabs('listen')+`
    <div class="hero"><h2>Hören B1.1</h2>
      <p>Zu jedem Kapitel drei neue Hörtexte im Stil der B1-Prüfung. Erst hören, dann antworten, danach das Transkript lesen.</p>
      ${ar('لكل وحدة تلات نصوص استماع جديدة بأسلوب امتحان B1. اسمع الأول، جاوب، وبعدين اقرأ النص مع الترجمة.')}
      <div class="listening-stats"><span class="listening-stat">${chapters.length} Kapitel</span><span class="listening-stat">${tasks.length} Hörtexte</span>
        <span class="listening-stat">${done}/${tasks.length} geschafft</span></div>
    </div>
    ${chapters.map(chapter=>{
      const book=B1_BOOK.find(item=>item.num===chapter.num);
      return `<div class="section-label">Kapitel ${chapter.num} · ${escapeHtml(chapter.title)}</div>
      <section class="b1-listen-grid">${chapter.tasks.map((task,index)=>{
        const result=progress[task.id];
        return `<button type="button" class="card b1-listen-card ${result?'completed':''}" onclick="go('b1.1/listen/${chapter.num}/${index}')">
          <img loading="lazy" src="${escapeHtml(book?.visual?.src||`assets/chapters/chapter-${chapter.num}.webp`)}" alt="">
          <span class="b1-listen-copy"><span class="b1-listen-type">${escapeHtml(task.type)}</span>
            <b>${escapeHtml(task.title)}</b>${ar(escapeHtml(task.titleAr))}
            <small>${task.questions.length} Aufgaben${result?` · ${result.correct}/${result.total} richtig ✓`:''}</small></span>
        </button>`;
      }).join('')}</section>`;
    }).join('')}`;
}

function renderB1ListenTask(chapterNum,index){
  const chapter=b1ListenChapters().find(item=>item.num===chapterNum);
  const task=chapter?.tasks[index];
  if(!task){ renderB1ListenHome(); return; }
  setTop(`Hören · ${task.title}`,`Kapitel ${chapter.num} · ${task.type}`,true);
  const all=b1ListenChapters().flatMap(item=>item.tasks.map((entry,taskIndex)=>({num:item.num,index:taskIndex,entry})));
  const position=all.findIndex(item=>item.entry.id===task.id);
  const next=all[position+1];
  const speakers=[...new Set(task.lines.map(line=>line.s))];
  view.innerHTML=b1Tabs('listen')+`
    <article class="card b1-listen-task" data-task="${escapeHtml(task.id)}">
      <span class="b1-listen-type">${escapeHtml(task.type)} · ${escapeHtml(task.typeAr)}</span>
      <h2>${escapeHtml(task.title)}</h2>${ar(escapeHtml(task.titleAr))}
      <div class="book-task"><b>Situation</b>${escapeHtml(task.situation)}${ar(escapeHtml(task.situationAr))}</div>
      <div class="exam-audio">
        <button type="button" id="b1ListenPlay" onclick="playB1Listening('${escapeHtml(task.id)}')">▶ Hörtext abspielen</button>
        <span>${speakers.map(name=>escapeHtml(name)).join(' · ')}</span>
      </div>
      ${ar('اسمع النص مرة أو مرتين من غير ما تقرا، وبعدين جاوب على الأسئلة.')}
    </article>
    <section class="card exam-part">
      <h3>Aufgaben</h3>
      ${task.questions.map((question,questionIndex)=>`
        <div class="exam-question" data-answer="${question.a}">
          <b>${questionIndex+1}. ${escapeHtml(question.q)}</b>${ar(escapeHtml(question.qAr))}
          ${question.o.map((option,optionIndex)=>`<label class="exam-option">
            <input type="radio" name="b1l-${questionIndex}" value="${optionIndex}"> ${escapeHtml(option)}
          </label>`).join('')}
          <div class="b1-listen-why" hidden>${escapeHtml(question.why)}${ar(escapeHtml(question.whyAr))}</div>
        </div>`).join('')}
      <button class="btn btn-green" style="width:100%" onclick="checkB1Listening('${escapeHtml(task.id)}')">Antworten prüfen</button>
      <div class="exam-result" id="examResult" role="status" aria-live="polite"></div>
    </section>
    <details class="card b1-listen-transcript" id="b1ListenTranscript">
      <summary>Transkript mit Übersetzung</summary>
      ${ar('اضغط على أي جملة عشان تسمعها لوحدها.')}
      <div class="conversation-lines">${task.lines.map((line,lineIndex)=>`
        <div class="conversation-line ${speakers.indexOf(line.s)%2?'right':'left'}" data-line="${lineIndex}" role="button" tabindex="0"
          onclick="playB1ListeningLine('${escapeHtml(task.id)}',${lineIndex})"
          onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();playB1ListeningLine('${escapeHtml(task.id)}',${lineIndex})}">
          <span class="conversation-speaker">${escapeHtml(line.s)}</span>
          <p>${escapeHtml(line.de)}</p>${ar(escapeHtml(line.ar))}
        </div>`).join('')}</div>
    </details>
    <div class="b1-listen-nav">
      <button type="button" class="btn" onclick="go('b1.1/listen')">Alle Hörtexte</button>
      ${next?`<button type="button" class="btn btn-green" onclick="go('b1.1/listen/${next.num}/${next.index}')">Nächster Hörtext →</button>`:''}
    </div>`;
}

function findB1ListenTask(id){
  return b1ListenChapters().flatMap(chapter=>chapter.tasks).find(task=>task.id===id);
}

function speakB1ListeningLines(task,from,to,onFinish){
  const session=++b1ListenPlayback;
  stopFixedSpeech();
  window.speechSynthesis?.cancel();
  const speakers=[...new Set(task.lines.map(line=>line.s))];
  const marks=()=>$$('.b1-listen-transcript .conversation-line');
  const step=lineIndex=>{
    if(session!==b1ListenPlayback||!document.querySelector(`[data-task="${task.id}"]`)) return;
    marks().forEach(line=>line.classList.toggle('active',Number(line.dataset.line)===lineIndex));
    if(lineIndex>to){ onFinish?.(); return; }
    const line=task.lines[lineIndex];
    speakDialogueLine(line.de,speakers.indexOf(line.s),()=>setTimeout(()=>step(lineIndex+1),400));
  };
  step(from);
}

function playB1Listening(id){
  const task=findB1ListenTask(id);
  const button=$('#b1ListenPlay');
  if(!task||!button) return;
  if(button.classList.contains('playing')){
    stopB1Listening();
    button.classList.remove('playing');
    button.textContent='▶ Hörtext abspielen';
    $$('.b1-listen-transcript .conversation-line').forEach(line=>line.classList.remove('active'));
    return;
  }
  ensureSpeechLibraries().catch(()=>{});
  button.classList.add('playing');
  button.textContent='■ Stopp';
  speakB1ListeningLines(task,0,task.lines.length-1,()=>{
    button.classList.remove('playing');
    button.textContent='▶ Noch einmal hören';
  });
}

function playB1ListeningLine(id,lineIndex){
  const task=findB1ListenTask(id);
  if(!task) return;
  const button=$('#b1ListenPlay');
  if(button){ button.classList.remove('playing'); button.textContent='▶ Hörtext abspielen'; }
  speakB1ListeningLines(task,lineIndex,lineIndex);
}

function checkB1Listening(id){
  const task=findB1ListenTask(id);
  if(!task) return;
  const questions=$$('.exam-question');
  let correct=0;
  questions.forEach((question,index)=>{
    const selected=question.querySelector('input:checked');
    const answer=Number(question.dataset.answer);
    const isCorrect=Boolean(selected&&Number(selected.value)===answer);
    question.classList.toggle('correct',isCorrect);
    question.classList.toggle('wrong',!isCorrect);
    question.querySelector('.b1-listen-why').hidden=false;
    if(isCorrect) correct++;
    else window.NextUI?.addMistake({prompt:task.questions[index].q,answer:task.questions[index].o[answer],context:`Hören B1.1 · ${task.title}`});
    question.querySelectorAll('input').forEach(input=>input.disabled=true);
  });
  saveB1ListenProgress(id,correct,questions.length);
  const good=correct/questions.length>=.6;
  const result=$('#examResult');
  result.className=`exam-result show ${good?'good':'retry'}`;
  result.innerHTML=`${correct} / ${questions.length} richtig
    ${ar(good?'شغل حلو! افتح النص تحت واسمع الجمل اللي كانت صعبة.':'مش مشكلة. افتح النص تحت، اسمع تاني جملة جملة، وبعدين جرّب مرة كمان.')}`;
  $('#b1ListenTranscript')?.setAttribute('open','');
  result.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'center'});
}
