/* ===================== grammar practice ===================== */
/* Renders the detailed chapter grammar (window.B1_GRAMMAR) with rules,
   tables, examples, typical mistakes and six exercise types:
   choice, truefalse, gap, order, transform, error. The chapter "Lerncheck"
   draws a mixed test from the same pool. Results are stored per exercise. */
const GRAMMAR_PROGRESS_KEY='grammarPracticeV2';
const grammarExerciseIndex=new Map();

function grammarProgress(){
  try{return JSON.parse(localStorage.getItem(GRAMMAR_PROGRESS_KEY)||'{}')||{};}catch{return {};}
}

function saveGrammarResult(id,correct){
  const progress=grammarProgress();
  progress[id]=correct;
  try{localStorage.setItem(GRAMMAR_PROGRESS_KEY,JSON.stringify(progress));}catch{}
}

function chapterGrammar(chapter){
  return chapter?.route?.startsWith('b1.1/')?(window.B1_GRAMMAR?.[chapter.num]||[]):[];
}

function grammarNormalize(value){
  return String(value||'')
    .replace(/[„“"'‚‘’]/g,'')
    .replace(/[.,!?;:–—-]/g,' ')
    .replace(/\s+/g,' ')
    .trim()
    .toLocaleLowerCase('de-DE');
}

function grammarAnswerMatches(input,answers){
  const given=grammarNormalize(input);
  return !!given&&answers.some(answer=>grammarNormalize(answer)===given);
}

function grammarExerciseId(topic,index){
  return `${topic.id}-${index}`;
}

function grammarTopicScore(topic,progress=grammarProgress()){
  const ids=topic.exercises.map((_,index)=>grammarExerciseId(topic,index));
  return {done:ids.filter(id=>id in progress).length,right:ids.filter(id=>progress[id]===true).length,total:ids.length};
}

function grammarTableHtml(table){
  return `<div class="gram-table-wrap"><table class="gram-table"><thead><tr>${table.head.map(cell=>`<th>${cell}</th>`).join('')}</tr></thead>
    <tbody>${table.rows.map(row=>`<tr>${row.map(cell=>`<td>${cell}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
}

const GRAMMAR_TYPE_LABELS={
  choice:'Wähle die richtige Antwort',truefalse:'Richtig oder falsch?',gap:'Ergänze die Lücke',
  order:'Bring die Wörter in die richtige Reihenfolge',transform:'Schreib den Satz um',error:'Finde und korrigiere den Fehler'
};

function grammarExerciseHtml(exercise,id,number){
  grammarExerciseIndex.set(id,exercise);
  const label=GRAMMAR_TYPE_LABELS[exercise.type]||'Übung';
  let body='';
  if(exercise.type==='choice'){
    body=`<p class="gx-q">${escapeHtml(exercise.q)}</p><div class="gx-options">${exercise.o.map((option,index)=>
      `<button type="button" class="gx-option" onclick="checkGrammarChoice('${id}',${index},this)">${escapeHtml(option)}</button>`).join('')}</div>`;
  }else if(exercise.type==='truefalse'){
    body=`<p class="gx-q">${escapeHtml(exercise.q)}</p><div class="gx-options gx-options--row">
      <button type="button" class="gx-option" onclick="checkGrammarTrueFalse('${id}',true,this)">✓ Richtig</button>
      <button type="button" class="gx-option" onclick="checkGrammarTrueFalse('${id}',false,this)">✗ Falsch</button></div>`;
  }else if(exercise.type==='order'){
    body=`<p class="gx-q">${escapeHtml(exercise.prefix||'')} <span class="gx-built" data-built="${id}">…</span></p>
      <div class="gx-chips" data-chips="${id}">${shuffled(exercise.words.map((word,index)=>({word,index}))).map(({word,index})=>
        `<button type="button" class="gx-chip" data-index="${index}" onclick="toggleGrammarChip('${id}',this)">${escapeHtml(word)}</button>`).join('')}</div>
      <div class="gx-actions"><button type="button" class="btn btn-ghost" onclick="resetGrammarOrder('${id}')">Zurücksetzen</button>
        <button type="button" class="btn btn-green" onclick="checkGrammarOrder('${id}')">Prüfen</button></div>`;
  }else{
    const multiline=exercise.type!=='gap';
    body=`<p class="gx-q">${escapeHtml(exercise.q)}</p>
      <form class="gx-form" onsubmit="event.preventDefault();checkGrammarTyped('${id}')">
        ${multiline?`<textarea class="gx-input" rows="2" data-input="${id}" lang="de" spellcheck="false" placeholder="${exercise.type==='error'?'Schreib den korrigierten Satz …':'Schreib den ganzen Satz …'}"></textarea>`
          :`<input class="gx-input" data-input="${id}" lang="de" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Antwort">`}
        <div class="gx-actions"><button type="button" class="btn btn-ghost" onclick="checkGrammarTyped('${id}',true)">Lösung zeigen</button>
          <button type="submit" class="btn btn-green">Prüfen</button></div>
      </form>`;
  }
  return `<div class="gx" data-exercise="${id}" data-type="${exercise.type}">
    <div class="gx-head"><span class="gx-num">${number}</span><span class="gx-label">${label}</span></div>
    ${body}
    <div class="gx-feedback" role="status" aria-live="polite"></div>
  </div>`;
}

function grammarTopicHtml(topic){
  const score=grammarTopicScore(topic);
  return `<article class="card gram-topic" id="topic-${topic.id}">
    <header class="gram-topic-head"><h3>${escapeHtml(topic.t)}</h3>${ar(escapeHtml(topic.tAr))}</header>
    <div class="gram-summary"><p>${topic.summary}</p>${ar(topic.summaryAr)}</div>
    ${topic.sections.map(section=>`<section class="gram-section">
      <h4>${escapeHtml(section.h)}</h4>${ar(escapeHtml(section.hAr))}
      <p>${section.text}</p>${ar(section.ar)}
      ${section.table?grammarTableHtml(section.table):''}
      ${section.examples?.length?`<ul class="gram-examples">${section.examples.map(([de,arText])=>`<li><span class="gram-example-de">${escapeHtml(de)}</span>${ar(escapeHtml(arText||''))}</li>`).join('')}</ul>`:''}
    </section>`).join('')}
    ${topic.pitfalls?.length?`<section class="gram-pitfalls"><h4>⚠️ Typische Fehler</h4>${ar('غلطات بتتكرر كتير – خد بالك منها')}
      ${topic.pitfalls.map(item=>`<div class="gram-pitfall"><div class="wrong">✗ ${escapeHtml(item.wrong)}</div><div class="right">✓ ${escapeHtml(item.right)}</div>${ar(escapeHtml(item.ar))}</div>`).join('')}</section>`:''}
    <section class="gram-practice">
      <div class="gram-practice-head"><h4>✍️ Übungen (${topic.exercises.length})</h4>
        <span class="gram-score" data-score="${topic.id}">${score.done?`${score.right}/${score.total} richtig`:'noch nicht geübt'}</span></div>
      ${ar('تمارين متنوعة: اختيار، صح وغلط، تكملة، ترتيب كلمات، إعادة صياغة، وتصحيح أخطاء.')}
      ${topic.exercises.map((exercise,index)=>grammarExerciseHtml(exercise,grammarExerciseId(topic,index),index+1)).join('')}
    </section>
  </article>`;
}

function renderGrammarTopics(chapter){
  const topics=chapterGrammar(chapter);
  if(!topics.length) return '';
  return `<nav class="gram-toc" aria-label="Grammatikthemen">${topics.map(topic=>{
      const score=grammarTopicScore(topic);
      return `<a href="#topic-${topic.id}" onclick="event.preventDefault();document.getElementById('topic-${topic.id}').scrollIntoView({behavior:'smooth'})">
        <b>${escapeHtml(topic.t)}</b><small>${score.right}/${score.total} ✓</small></a>`;
    }).join('')}</nav>
    ${topics.map(grammarTopicHtml).join('')}`;
}

function grammarFeedback(id,correct,extra=''){
  const exercise=grammarExerciseIndex.get(id);
  const box=document.querySelector(`[data-exercise="${id}"] .gx-feedback`);
  const container=document.querySelector(`[data-exercise="${id}"]`);
  container?.classList.add(correct?'is-right':'is-wrong');
  if(box){
    box.className=`gx-feedback show ${correct?'good':'bad'}`;
    box.innerHTML=`<b>${correct?'✓ Richtig!':'✗ Leider falsch.'}</b>${extra}${exercise?.why?ar(escapeHtml(exercise.why)):''}`;
  }
  saveGrammarResult(id,correct);
  if(id.startsWith('test-')) saveGrammarResult(id.slice(5),correct);
  if(!correct&&exercise){
    const answer=exercise.type==='choice'?exercise.o[exercise.a]:exercise.type==='truefalse'?(exercise.a?'Richtig':'Falsch')
      :exercise.type==='order'?`${exercise.prefix||''} ${exercise.a[0]}`.trim():exercise.a[0];
    window.NextUI?.addMistake?.({prompt:exercise.q||exercise.prefix||'Grammatik',answer,context:'Grammatik B1.1'});
  }
  updateGrammarScores(id);
}

function updateGrammarScores(id){
  const topicId=id.replace(/-\d+$/,'');
  const topic=Object.values(window.B1_GRAMMAR||{}).flat().find(item=>item.id===topicId);
  const label=document.querySelector(`[data-score="${topicId}"]`);
  if(topic&&label){const score=grammarTopicScore(topic);label.textContent=`${score.right}/${score.total} richtig`;}
  updateGrammarTestScore();
}

function checkGrammarChoice(id,index,button){
  const exercise=grammarExerciseIndex.get(id);
  const container=button.closest('.gx');
  if(!exercise||container.classList.contains('answered')) return;
  container.classList.add('answered');
  container.querySelectorAll('.gx-option').forEach((option,optionIndex)=>{
    option.disabled=true;
    if(optionIndex===exercise.a) option.classList.add('correct');
  });
  if(index!==exercise.a) button.classList.add('wrong');
  grammarFeedback(id,index===exercise.a);
}

function checkGrammarTrueFalse(id,value,button){
  const exercise=grammarExerciseIndex.get(id);
  const container=button.closest('.gx');
  if(!exercise||container.classList.contains('answered')) return;
  container.classList.add('answered');
  container.querySelectorAll('.gx-option').forEach(option=>option.disabled=true);
  button.classList.add(value===exercise.a?'correct':'wrong');
  grammarFeedback(id,value===exercise.a);
}

function toggleGrammarChip(id,chip){
  const container=chip.closest('.gx');
  if(container.classList.contains('answered')) return;
  const order=JSON.parse(container.dataset.order||'[]');
  const index=Number(chip.dataset.index);
  const position=order.indexOf(index);
  if(position>=0) order.splice(position,1); else order.push(index);
  container.dataset.order=JSON.stringify(order);
  chip.classList.toggle('used',order.includes(index));
  const exercise=grammarExerciseIndex.get(id);
  container.querySelector('.gx-built').textContent=order.length?order.map(item=>exercise.words[item]).join(' '):'…';
}

function resetGrammarOrder(id){
  const container=document.querySelector(`[data-exercise="${id}"]`);
  if(!container||container.classList.contains('answered')) return;
  container.dataset.order='[]';
  container.querySelectorAll('.gx-chip').forEach(chip=>chip.classList.remove('used'));
  container.querySelector('.gx-built').textContent='…';
}

function checkGrammarOrder(id){
  const exercise=grammarExerciseIndex.get(id);
  const container=document.querySelector(`[data-exercise="${id}"]`);
  if(!exercise||!container||container.classList.contains('answered')) return;
  const order=JSON.parse(container.dataset.order||'[]');
  if(order.length<exercise.words.length){
    const box=container.querySelector('.gx-feedback');
    box.className='gx-feedback show hint';box.textContent='Benutze alle Wörter.';
    return;
  }
  container.classList.add('answered');
  container.querySelectorAll('button').forEach(button=>button.disabled=true);
  const built=order.map(index=>exercise.words[index]).join(' ');
  const correct=grammarAnswerMatches(built,exercise.a);
  grammarFeedback(id,correct,correct?'':`<div class="gx-solution">${escapeHtml(`${exercise.prefix||''} ${exercise.a[0]}`.trim())}</div>`);
}

function checkGrammarTyped(id,reveal=false){
  const exercise=grammarExerciseIndex.get(id);
  const container=document.querySelector(`[data-exercise="${id}"]`);
  if(!exercise||!container||container.classList.contains('answered')) return;
  const input=container.querySelector('[data-input]');
  if(!reveal&&!input.value.trim()){input.focus();return;}
  container.classList.add('answered');
  input.disabled=true;
  container.querySelectorAll('button').forEach(button=>button.disabled=true);
  const correct=!reveal&&grammarAnswerMatches(input.value,exercise.a);
  const solution=exercise.a.length>1
    ?`<div class="gx-solution">${escapeHtml(exercise.a[0])}<small>Auch möglich: ${exercise.a.slice(1).map(escapeHtml).join(' · ')}</small></div>`
    :`<div class="gx-solution">${escapeHtml(exercise.a[0])}</div>`;
  grammarFeedback(id,correct,correct&&exercise.a.length===1?'':solution);
}

/* ---------- mixed chapter test (Lerncheck) ---------- */
let grammarTestIds=[];

function renderGrammarTest(chapter){
  const topics=chapterGrammar(chapter);
  const pool=topics.flatMap(topic=>topic.exercises.map((exercise,index)=>({exercise,topic,index})));
  const picked=[];
  // One or two exercises per topic first, then random fill up to 12.
  shuffled(topics).forEach(topic=>{
    shuffled(pool.filter(item=>item.topic===topic)).slice(0,2).forEach(item=>picked.push(item));
  });
  const rest=shuffled(pool.filter(item=>!picked.includes(item)));
  while(picked.length<12&&rest.length) picked.push(rest.shift());
  const test=shuffled(picked).slice(0,12);
  grammarTestIds=test.map(({topic,index})=>`test-${grammarExerciseId(topic,index)}`);
  return `<section class="card gram-test">
    <div class="gram-practice-head"><h3>🎯 Lerncheck Kapitel ${chapter.num}</h3><span class="gram-score" id="grammarTestScore">0 / ${test.length}</span></div>
    <p>${test.length} gemischte Aufgaben aus allen Grammatikthemen des Kapitels – jedes Mal neu zusammengestellt.</p>
    ${ar('١٢ سؤال متنوع من كل قواعد الوحدة – كل مرة بيتغيروا.')}
    ${test.map(({exercise,topic,index},number)=>grammarExerciseHtml(exercise,`test-${grammarExerciseId(topic,index)}`,number+1)).join('')}
    <div class="gx-actions"><button type="button" class="btn btn-green" onclick="renderChapter(B1_BOOK.find(item=>item.num===${chapter.num}),'quiz')">Neuer Test</button></div>
  </section>`;
}

function updateGrammarTestScore(){
  const label=$('#grammarTestScore');
  if(!label) return;
  const answered=grammarTestIds.map(id=>document.querySelector(`[data-exercise="${id}"]`)).filter(node=>node?.classList.contains('answered'));
  const right=answered.filter(node=>node.classList.contains('is-right')).length;
  label.textContent=`${right} / ${grammarTestIds.length}${answered.length===grammarTestIds.length?` · ${Math.round(right/grammarTestIds.length*100)}%`:''}`;
}
