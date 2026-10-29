/* ===================== Sprechen: Rollenspiel ===================== */
/* The model dialogues of each chapter as a role play: the learner picks a
   person, the app speaks every other line, and on the learner's turn the
   speech recogniser checks what was said. With "Nur Arabisch" the learner
   sees only the Arabic and says the line in German from memory. */

const ROLEPLAY_KEY='rolePlayProgress';
let rolePlay=null;   // {level,num,conv,dialogue,role,index,scores,help,busy}

function rolePlayBook(level){
  return level==='a1'?A1_BOOK:level==='b1'?B1_BOOK:BOOK;
}

function rolePlayDialogues(chapter){
  return (chapter?.conversations||[]).map((conversation,index)=>({...conversation,index}))
    .filter(conversation=>conversation.dialogue?.length>=2);
}

// Speakers in order of appearance; the first two get the two recorded voices.
function rolePlaySpeakers(dialogue){
  return [...new Set((dialogue||[]).map(line=>line.s).filter(Boolean))];
}

function rolePlayVoice(dialogue,speaker){
  return rolePlaySpeakers(dialogue).indexOf(speaker)%2===0?'mia':'tarek';
}

function readRolePlayProgress(){
  try{
    const value=JSON.parse(localStorage.getItem(ROLEPLAY_KEY)||'{}');
    return value&&typeof value==='object'?value:{};
  }catch{ return {}; }
}

function saveRolePlayResult(key,score){
  const all=readRolePlayProgress();
  all[key]=Math.max(score,all[key]||0);
  try{ localStorage.setItem(ROLEPLAY_KEY,JSON.stringify(all)); }catch{}
}

async function renderRolePlayChapters(level){
  setTop('Rollenspiel',`${level.toUpperCase()} · Kapitel wählen`,true,'تمثيل الحوار');
  view.innerHTML='<div class="level-loading" role="status"><span class="level-loading-dot"></span>…</div>';
  await ensureLevelData(level);
  if(location.hash!==`#practice/dialog/${level}`) return;
  const progress=readRolePlayProgress();
  const chapters=rolePlayBook(level).filter(chapter=>rolePlayDialogues(chapter).length);
  view.innerHTML=`${practiceHeader('Rollenspiel: sprich deine Rolle','Wähle einen Dialog und eine Person. Die App spricht die anderen Rollen, du sprichst deine Sätze – mit Text, oder nur mit der arabischen Hilfe.','اختار حوار وشخصية. التطبيق بيقول جمل الباقيين وإنت بتقول جملك — بالنص الألماني أو بالمعنى العربي بس كتحدّي.')}
    ${practiceLevelTabs('dialog',level)}
    ${chapters.length?`<ol class="pr-chapter-list">${chapters.map(chapter=>{
      const dialogues=rolePlayDialogues(chapter);
      const done=dialogues.filter(item=>progress[`${level}:${chapter.num}:${item.index}`]).length;
      return `<li><button type="button" onclick="go('practice/dialog/${level}/${chapter.num}')">
        <span class="pr-chapter-num">${chapter.num}</span>
        <span class="pr-chapter-text"><b>${escapeHtml(chapter.title)}</b><small>${dialogues.length} Dialoge</small>${chapter.titleAr?`<small lang="ar" dir="rtl">${escapeHtml(chapter.titleAr)}</small>`:''}</span>
        <span class="pr-chapter-progress" style="--pr-done:${done/dialogues.length}">${done}/${dialogues.length}</span>
      </button></li>`;
    }).join('')}</ol>`:'<div class="review-empty"><p>Für dieses Niveau gibt es noch keine Dialoge.</p></div>'}`;
}

async function renderRolePlayList(level,num){
  await ensureLevelData(level);
  const chapter=rolePlayBook(level).find(item=>item.num===num);
  if(!chapter){ go(`practice/dialog/${level}`); return; }
  if(location.hash!==`#practice/dialog/${level}/${num}`) return;
  const progress=readRolePlayProgress();
  setTop('Rollenspiel',`${level.toUpperCase()} · Kapitel ${num} · ${escapeHtml(chapter.title)}`,true,'تمثيل الحوار');
  view.innerHTML=`${practiceHeader(escapeHtml(chapter.title),'Wähle eine Situation.','اختار الموقف اللي عايز تمثّله.')}
    <ul class="rp-list">${rolePlayDialogues(chapter).map(item=>{
      const best=progress[`${level}:${num}:${item.index}`];
      return `<li><button type="button" onclick="go('practice/dialog/${level}/${num}/${item.index}')">
        <b>${escapeHtml(item.situation||'Dialog')}</b>${item.situationAr?`<small lang="ar" dir="rtl">${escapeHtml(item.situationAr)}</small>`:''}
        <span>${rolePlaySpeakers(item.dialogue).map(escapeHtml).join(' · ')} · ${item.dialogue.length} Sätze${best!==undefined?` · ✓ ${best}%`:''}</span>
      </button></li>`;
    }).join('')}</ul>`;
}

async function renderRolePlay(level,num,convIndex){
  await ensureLevelData(level);
  const chapter=rolePlayBook(level).find(item=>item.num===num);
  const conversation=chapter?.conversations?.[convIndex];
  if(!conversation?.dialogue?.length){ go(`practice/dialog/${level}/${num}`); return; }
  if(location.hash!==`#practice/dialog/${level}/${num}/${convIndex}`) return;
  stopRolePlay();
  rolePlay={level,num,conv:convIndex,dialogue:conversation.dialogue,role:null,index:0,scores:{},help:localStorage.getItem('rolePlayHelp')||'text',busy:false};
  setTop('Rollenspiel',escapeHtml(conversation.situation||'Dialog'),true,'تمثيل الحوار');
  view.innerHTML=`<section class="pr-head"><h2>${escapeHtml(conversation.situation||'Dialog')}</h2>${conversation.situationAr?`<p class="pr-ar" lang="ar" dir="rtl">${escapeHtml(conversation.situationAr)}</p>`:''}</section>
    <div class="rp-setup">
      <b>Wer bist du? <small lang="ar" dir="rtl">إنت مين في الحوار؟</small></b>
      <div class="rp-roles">${rolePlaySpeakers(conversation.dialogue).map(name=>`<button type="button" class="pr-btn" data-rp-role="${escapeHtml(name)}"><span>🎭</span><b>${escapeHtml(name)}</b></button>`).join('')}</div>
      <div class="pr-options">
        <label><input type="radio" name="rpHelp" value="text" ${rolePlay.help==='text'?'checked':''}> Deutschen Text zeigen</label>
        <label><input type="radio" name="rpHelp" value="arabic" ${rolePlay.help==='arabic'?'checked':''}> Nur Arabisch (Challenge)</label>
      </div>
      ${SpeechRecognitionApi?'':'<p class="pr-warn" lang="ar" dir="rtl">المتصفح ده مش بيدعم التعرّف على الكلام — هتقدر تتمرّن وتدوس «Weiter» بعد كل جملة. كروم أو سفاري بيدعموه.</p>'}
    </div>
    <div class="rp-chat" id="rpChat" aria-live="polite"></div>`;
}

function rolePlayBubble(line,index){
  const mine=line.s===rolePlay.role;
  const current=index===rolePlay.index;
  const score=rolePlay.scores[index];
  const hideGerman=mine&&rolePlay.help==='arabic'&&current&&score===undefined;
  return `<div class="rp-line ${mine?'mine':'other'} ${current?'current':''}">
    <small>${escapeHtml(line.s||'')}${mine?' · du':''}</small>
    <div class="rp-bubble">
      ${hideGerman?`<p class="rp-cue" lang="ar" dir="rtl">${escapeHtml(line.ar||'')}</p><p class="rp-cue-de">Sag es auf Deutsch …</p>`
        :`<p lang="de">${escapeHtml(line.de)}</p>${line.ar?`<p class="rp-ar" lang="ar" dir="rtl">${escapeHtml(line.ar)}</p>`:''}`}
      ${score?`<p class="pr-words">${score.words.map(word=>`<span class="${word.ok?'ok':'miss'}">${escapeHtml(word.word)}</span>`).join(' ')}</p><span class="rp-score">${score.score}%</span>`:''}
    </div>
    ${mine&&current?`<div class="pr-actions compact">
      ${SpeechRecognitionApi?`<button type="button" class="pr-btn primary" data-rp="speak"><span>🎙</span><b>Sprechen</b></button>`:''}
      <button type="button" class="pr-btn" data-rp="hint"><span>▶</span><b>Vorsagen</b></button>
      <button type="button" class="pr-btn" data-rp="next"><span>✓</span><b>Weiter</b></button>
    </div><p class="rp-status" id="rpStatus"></p>`:''}
  </div>`;
}

function renderRolePlayChat(){
  const chat=$('#rpChat');
  if(!chat||!rolePlay) return;
  const shown=rolePlay.dialogue.slice(0,rolePlay.index+1);
  const finished=rolePlay.index>=rolePlay.dialogue.length;
  chat.innerHTML=shown.map(rolePlayBubble).join('')+(finished?rolePlaySummary():'');
  chat.lastElementChild?.scrollIntoView({block:'nearest',behavior:'smooth'});
}

function rolePlaySummary(){
  const mine=rolePlay.dialogue.map((line,index)=>({line,index})).filter(item=>item.line.s===rolePlay.role);
  const scored=mine.filter(item=>rolePlay.scores[item.index]);
  const average=scored.length?Math.round(scored.reduce((sum,item)=>sum+rolePlay.scores[item.index].score,0)/scored.length):null;
  if(average!==null) saveRolePlayResult(`${rolePlay.level}:${rolePlay.num}:${rolePlay.conv}`,average);
  else saveRolePlayResult(`${rolePlay.level}:${rolePlay.num}:${rolePlay.conv}`,0);
  const others=rolePlaySpeakers(rolePlay.dialogue).filter(name=>name!==rolePlay.role);
  return `<div class="rp-summary"><b>Dialog geschafft! 🎉</b>${average!==null?`<span>Deine Aussprache: <b>${average}%</b></span>`:''}
    <div class="pr-actions compact"><button type="button" class="pr-btn primary" data-rp="again"><span>↺</span><b>Nochmal</b></button>
    ${others.length?`<button type="button" class="pr-btn" data-rp-role="${escapeHtml(others[0])}"><span>⇄</span><b>Rolle tauschen</b></button>`:''}
    <button type="button" class="pr-btn" onclick="go('practice/dialog/${rolePlay.level}/${rolePlay.num}')"><span>☰</span><b>Andere Situation</b></button></div></div>`;
}

async function advanceRolePlay(){
  if(!rolePlay) return;
  const run=rolePlay;
  // the app speaks every line until it is the learner's turn again
  while(run===rolePlay&&run.index<run.dialogue.length&&run.dialogue[run.index].s!==run.role){
    renderRolePlayChat();
    run.busy=true;
    const line=run.dialogue[run.index];
    await practicePlay(line.de,{voice:rolePlayVoice(run.dialogue,line.s)});
    run.busy=false;
    if(run!==rolePlay) return;
    await new Promise(resolve=>setTimeout(resolve,350));
    run.index++;
  }
  renderRolePlayChat();
}

function rolePlaySpeak(){
  const line=rolePlay?.dialogue[rolePlay.index];
  if(!line||!SpeechRecognitionApi) return;
  stopRecordingAndRecognition();
  const status=$('#rpStatus');
  const recognition=new SpeechRecognitionApi();
  practiceRecognition=recognition;
  recognition.lang='de-DE';
  recognition.interimResults=false;
  recognition.maxAlternatives=4;
  status.textContent='● Ich höre zu …';
  status.className='rp-status pr-recording';
  recognition.onresult=event=>{
    const best=[...event.results[0]].map(item=>({text:item.transcript,...speakingScore(line.de,item.transcript)})).sort((a,b)=>b.score-a.score)[0];
    const index=rolePlay.index;
    rolePlay.scores[index]=best;
    renderRolePlayChat();
    if(best.score>=60){
      setTimeout(()=>{ if(rolePlay&&rolePlay.index===index){ rolePlay.index++; advanceRolePlay(); } },900);
    }else{
      const next=$('#rpStatus');
      if(next){ next.className='rp-status'; next.textContent='Fast! Hör dir den Satz an und versuch es noch einmal – oder tippe auf Weiter.'; }
    }
  };
  recognition.onerror=event=>{
    status.className='rp-status';
    status.textContent=event.error==='no-speech'?'Ich habe nichts gehört. Noch einmal?':event.error==='not-allowed'?'Bitte erlaube das Mikrofon.':'Spracherkennung gerade nicht verfügbar (Internet?).';
  };
  try{ recognition.start(); }catch{}
}

function stopRolePlay(){
  rolePlay=null;
  stopPracticeAudio();
  stopRecordingAndRecognition();
}

document.addEventListener('click',event=>{
  if(!rolePlay) return;
  const role=event.target.closest('[data-rp-role]');
  if(role){
    stopPracticeAudio();
    rolePlay={...rolePlay,role:role.dataset.rpRole,index:0,scores:{}};
    $('.rp-setup')?.classList.add('started');
    advanceRolePlay();
    return;
  }
  const action=event.target.closest('[data-rp]')?.dataset.rp;
  if(!action||rolePlay.busy) return;
  const line=rolePlay.dialogue[rolePlay.index];
  if(action==='speak') rolePlaySpeak();
  else if(action==='hint'&&line) practicePlay(line.de,{voice:rolePlayVoice(rolePlay.dialogue,line.s)});
  else if(action==='next'){ stopRecordingAndRecognition(); rolePlay.index++; advanceRolePlay(); }
  else if(action==='again'){ rolePlay={...rolePlay,index:0,scores:{}}; advanceRolePlay(); }
});

document.addEventListener('change',event=>{
  if(event.target.name!=='rpHelp'||!rolePlay) return;
  rolePlay.help=event.target.value;
  localStorage.setItem('rolePlayHelp',event.target.value);
  renderRolePlayChat();
});

window.addEventListener('hashchange',()=>{ if(rolePlay) stopRolePlay(); });

// Router entry: practice/dialog[/<level>[/<chapter>[/<dialogue>]]].
function routeRolePlay(hash){
  const match=hash.match(/^practice\/dialog(?:\/(a1|a2|b1)(?:\/(\d+)(?:\/(\d+))?)?)?$/);
  if(!match) return false;
  const level=match[1]||practiceLevelOf(window.NextUI?.state().profile.level||'a2');
  if(match[3]!==undefined) renderRolePlay(level,Number(match[2]),Number(match[3]));
  else if(match[2]) renderRolePlayList(level,Number(match[2]));
  else renderRolePlayChapters(level);
  return true;
}
