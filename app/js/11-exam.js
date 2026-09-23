/* ===================== Goethe A2 exam training ===================== */
let examTimerId=null;

let examLevel='a2';

function activeExam(){
  return examLevel==='b1.1'?window.B1_EXAM:EXAM;
}

function examRoute(id=''){
  const base=examLevel==='b1.1'?'b1.1/exam':'exam';
  return id?`${base}/${id}`:base;
}

function examTabs(){
  return window.NextUI?.featureTabs(examLevel,'exam')||'';
}

function examScoresKey(){
  return examLevel==='b1.1'?'b1ExamScores':'a2ExamScores';
}

function getExamScores(){
  try{return JSON.parse(localStorage.getItem(examScoresKey())||'{}');}
  catch{return {};}
}

function saveExamScore(module,score){
  const scores=getExamScores();
  scores[module]=Math.round(score*10)/10;
  localStorage.setItem(examScoresKey(),JSON.stringify(scores));
}

function stopExamTimer(){
  if(examTimerId){clearInterval(examTimerId);examTimerId=null;}
}

function startExamTimer(seconds,targetId='examTimer'){
  stopExamTimer();
  let remaining=seconds;
  const target=$('#'+targetId);
  const draw=()=>{
    if(!target)return;
    const minutes=Math.floor(remaining/60);
    const secs=remaining%60;
    target.textContent=`${String(minutes).padStart(2,'0')}:${String(secs).padStart(2,'0')}`;
    target.style.background=remaining<=60?'#a33b3b':'';
  };
  draw();
  examTimerId=setInterval(()=>{
    remaining--;
    draw();
    if(remaining<=0){
      stopExamTimer();
      showSpeechStatus('Die Zeit ist vorbei.');
    }
  },1000);
}

function examModuleDescription(id){
  const module=activeExam().modules[id];
  const questions=module?.parts?.reduce((sum,part)=>sum+part.questions.length,0)||0;
  if(id==='lesen') return `${module.parts.length} Teile · ${questions} Fragen · automatische Korrektur`;
  if(id==='hoeren') return `${module.parts.length} Teile · ${questions} Fragen · Hörtexte mit Wiedergabelimit`;
  if(id==='schreiben') return `${module.tasks.length} Aufgaben · Wortzähler · Checkliste und Modelle`;
  if(id==='sprechen') return `${module.tasks.length} Teile · Vorbereitung und Sprechzeit`;
  return '';
}

function renderExamHome(){
  const levelLabel=examLevel==='b1.1'?'B1':'A2';
  setTop(`Prüfungstraining ${levelLabel}`,`Goethe-Zertifikat ${levelLabel} · interaktives Modelltraining`,true);
  const scores=getExamScores();
  const ids=['lesen','hoeren','schreiben','sprechen'];
  const total=ids.reduce((sum,id)=>sum+Number(scores[id]||0),0);
  view.innerHTML=examTabs()+`
    <section class="card exam-hero">
      <h2>${activeExam().title}</h2>
      <p>${activeExam().note}</p>
      ${ar(`نموذج تدريبي أصلي وتفاعلي على هيكل امتحان Goethe ${levelLabel} للبالغين، مع وقت ودرجات وتصحيح.`)}
      <div class="exam-stats">
        ${ids.map(id=>`<div class="exam-stat"><b>${activeExam().modules[id].duration} Min.</b><small>${activeExam().modules[id].title}</small></div>`).join('')}
      </div>
    </section>
    <div class="card">
      <div class="exam-total">${total.toFixed(1)} / 100 Punkte</div>
      <p style="font-size:13px;color:var(--ink-2);margin-top:4px">Deine gespeicherte Trainingsprognose aus allen vier Modulen.</p>
      ${ar('دي نتيجة تدريبية محفوظة على جهازك، وليست نتيجة رسمية من معهد جوته.')}
    </div>
    <div class="exam-module-grid">
      ${ids.map((id,index)=>{
        const module=activeExam().modules[id];
        return `<button type="button" class="card exam-module" onclick="go('${examRoute(id)}')">
          <span class="exam-module-score">${scores[id]!==undefined?scores[id]+' / 25':'noch offen'}</span>
          <div class="num" style="margin-bottom:10px">${index+1}</div>
          <h3>${module.title}</h3>
          <p>${examModuleDescription(id)}</p>
        </button>`;
      }).join('')}
    </div>
    <div class="intro-note"><b>Hinweis:</b> Dieses Training verwendet vollständig neu geschriebene Aufgaben. Aufbau, Zeitrahmen und Module orientieren sich an der offiziellen Goethe-${levelLabel}-Prüfungsstruktur.</div>`;
}

function renderExamModule(id){
  const module=activeExam().modules[id];
  if(!module){renderExamHome();return;}
  setTop(`${module.title} · Prüfungstraining`,`${module.duration} Minuten · ${module.points} Punkte`,true);
  let html=examTabs()+`
    <div class="exam-toolbar">
      <div><b>${module.title}</b><div style="font-size:12px;color:var(--ink-2)">${examModuleDescription(id)}</div></div>
      <div style="display:flex;gap:8px;align-items:center">
        <span class="exam-timer" id="examTimer" role="timer" aria-live="off">${String(module.duration).padStart(2,'0')}:00</span>
        <button class="btn btn-green" onclick="startExamTimer(${module.duration*60})">Zeit starten</button>
      </div>
    </div>`;
  if(id==='lesen'||id==='hoeren') html+=renderObjectiveExam(id,module);
  if(id==='schreiben') html+=renderWritingExam(module);
  if(id==='sprechen') html+=renderSpeakingExam(module);
  view.innerHTML=html;
  if(id==='schreiben') initWritingExam();
}

function renderObjectiveExam(id,module){
  return module.parts.map((part,partIndex)=>`
    <section class="card exam-part">
      <h3>${part.title}</h3>
      <p class="exam-instruction">${part.instruction}</p>
      ${id==='lesen'?`<div class="exam-source">${part.text}</div>`:`
        <div class="exam-audio">
          <button type="button" onclick="playExamAudio('${part.id}',this)">▶ Hörtext abspielen</button>
          <span>maximal ${part.plays===1?'einmal':part.plays+'-mal'} · <b class="play-count">0 / ${part.plays}</b></span>
        </div>`}
      ${part.questions.map((question,questionIndex)=>{
        const number=module.parts.slice(0,partIndex).reduce((sum,item)=>sum+item.questions.length,0)+questionIndex+1;
        return `<div class="exam-question" data-answer="${question.a}" data-number="${number}">
          <b>${number}. ${String(question.q).replace(/^\d+\.\s*/,'')}</b>
          ${question.o.map((option,optionIndex)=>`<label class="exam-option">
            <input type="radio" name="${id}-${number}" value="${optionIndex}"> ${option}
          </label>`).join('')}
        </div>`;
      }).join('')}
    </section>`).join('')+`
    <button class="btn btn-green" style="width:100%" onclick="checkExamObjective('${id}')">Antworten prüfen</button>
    <div class="exam-result" id="examResult" role="status" aria-live="polite"></div>`;
}

function playExamAudio(partId,button){
  const part=activeExam().modules.hoeren.parts.find(item=>item.id===partId);
  if(!part||button.disabled)return;
  const count=Number(button.dataset.plays||0)+1;
  button.dataset.plays=String(count);
  button.parentElement.querySelector('.play-count').textContent=`${count} / ${part.plays}`;
  if(count>=part.plays)button.disabled=true;
  speakText(part.script,'de');
}

function checkExamObjective(id){
  const questions=$$('.exam-question');
  let correct=0;
  questions.forEach(question=>{
    const selected=question.querySelector('input:checked');
    const answer=Number(question.dataset.answer);
    const isCorrect=selected&&Number(selected.value)===answer;
    question.classList.toggle('correct',Boolean(isCorrect));
    question.classList.toggle('wrong',!isCorrect);
    if(isCorrect)correct++;
    else{
      const prompt=question.querySelector('b')?.textContent?.replace(/^\d+\.\s*/, '')||'Prüfungsfrage';
      const correctLabel=question.querySelectorAll('.exam-option')[answer]?.textContent?.trim()||'';
      window.NextUI?.addMistake({prompt,answer:correctLabel,context:`Prüfung · ${id}`});
    }
    question.querySelectorAll('input').forEach(input=>input.disabled=true);
  });
  const score=questions.length?correct/questions.length*25:0;
  saveExamScore(id,score);
  const result=$('#examResult');
  result.className=`exam-result show ${score>=15?'good':'retry'}`;
  result.innerHTML=`${correct} / ${questions.length} richtig · <b>${score.toFixed(2)} / 25 Punkte</b>
    ${ar(score>=15?'نتيجة تدريبية جيدة في هذا القسم.':'راجع الأخطاء وحاول القسم مرة ثانية بعد المذاكرة.')}`;
  result.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'center'});
}

function renderWritingExam(module){
  return module.tasks.map((task,index)=>`
    <section class="card exam-part">
      <h3>${task.title}</h3>
      <div class="exam-source">${task.prompt}</div>
      <textarea class="writing-area" id="writingTask${index}" data-min="${task.minWords}" placeholder="Schreibe hier deine Antwort ..."></textarea>
      <div class="word-count" id="writingCount${index}">0 Wörter · Ziel: mindestens ${task.minWords}</div>
      <div class="exam-checklist">
        ${task.checklist.map((item,itemIndex)=>`<label><input type="checkbox" class="writing-check" data-task="${index}" value="${itemIndex}"> ${item}</label>`).join('')}
      </div>
      <details class="exam-model"><summary>Modellantwort nach der eigenen Antwort ansehen</summary><p>${task.model}</p></details>
    </section>`).join('')+`
    <button class="btn btn-green" style="width:100%" onclick="assessWritingExam()">Selbsteinschätzung speichern</button>
    <div class="exam-result" id="examResult" role="status" aria-live="polite"></div>`;
}

function initWritingExam(){
  $$('.writing-area').forEach((area,index)=>{
    const update=()=>{
      const words=area.value.trim()?area.value.trim().split(/\s+/).length:0;
      const target=$(`#writingCount${index}`);
      target.textContent=`${words} Wörter · Ziel: mindestens ${area.dataset.min}`;
      target.style.color=words>=Number(area.dataset.min)?'var(--green-d)':'';
      localStorage.setItem(`${examLevel==='b1.1'?'b1':'a2'}Writing${index}`,area.value);
    };
    area.value=localStorage.getItem(`${examLevel==='b1.1'?'b1':'a2'}Writing${index}`)||'';
    area.addEventListener('input',update);update();
  });
}

function assessWritingExam(){
  const checks=$$('.writing-check');
  const checked=checks.filter(item=>item.checked).length;
  const score=checks.length?checked/checks.length*25:0;
  saveExamScore('schreiben',score);
  const result=$('#examResult');
  result.className=`exam-result show ${score>=15?'good':'retry'}`;
  result.innerHTML=`${checked} / ${checks.length} Kriterien erfüllt · <b>${score.toFixed(1)} / 25 Punkte</b>
    ${ar('التقييم هنا ذاتي للتدريب. قارن إجابتك بالنموذج بعد ما تخلص.')}`;
}

function renderSpeakingExam(module){
  return module.tasks.map((task,index)=>`
    <section class="card exam-part">
      <h3>${task.title}</h3>
      <div class="exam-source">${task.prompt}</div>
      <div class="speaking-help">${task.help.map(item=>`<span>${item}</span>`).join('')}</div>
      <div class="exam-audio">
        <button type="button" onclick="speakText(${JSON.stringify(task.prompt)},'de')">🔊 Aufgabe hören</button>
        <button type="button" onclick="startExamTimer(${task.prep+task.speak},'sprechTaskTimer${index}')">▶ Aufgabe starten</button>
        <span>Vorbereitung ${task.prep}s + Sprechen ${task.speak}s</span>
        <b class="exam-timer" id="sprechTaskTimer${index}">${String(Math.floor((task.prep+task.speak)/60)).padStart(2,'0')}:${String((task.prep+task.speak)%60).padStart(2,'0')}</b>
      </div>
    </section>`).join('')+`
    <section class="card">
      <h3 style="color:var(--green-d)">Selbsteinschätzung</h3>
      <div class="exam-checklist">${module.checklist.map((item,index)=>`
        <label><input type="checkbox" class="speaking-check" value="${index}"> ${item}</label>`).join('')}</div>
      <button class="btn btn-green" onclick="assessSpeakingExam()">Ergebnis speichern</button>
      <div class="exam-result" id="examResult" role="status" aria-live="polite"></div>
    </section>`;
}

function assessSpeakingExam(){
  const checks=$$('.speaking-check');
  const checked=checks.filter(item=>item.checked).length;
  const score=checks.length?Math.round(checked/checks.length*250)/10:0;
  saveExamScore('sprechen',score);
  const result=$('#examResult');
  result.className=`exam-result show ${score>=15?'good':'retry'}`;
  result.innerHTML=`${checked} / ${checks.length} Kriterien erfüllt · <b>${score} / 25 Punkte</b>
    ${ar('سجّل صوتك بالموبايل لو أمكن واسمعه مرة أخرى قبل التقييم الذاتي.')}`;
}
