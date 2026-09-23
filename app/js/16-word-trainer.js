/* ===================== word trainer ===================== */
/* Spaced-repetition vocabulary trainer. Every word moves through Leitner
   boxes (0 = new … 5 = mastered). A session introduces a few new words,
   mixes them with due words and only lets a word pass once it was both
   recognised (multiple choice / listening / article) and produced (typed
   answer or gap sentence). Mistakes send a word back to box 1. */
const TRAINER_KEY='wordTrainerV1';
const TRAINER_INTERVAL_DAYS=[0,1,3,7,16,35];
const TRAINER_MASTERED_BOX=4;
const TRAINER_NEW_PER_SESSION=8;
const TRAINER_SESSION_SIZE=14;
const TRAINER_LEVELS=[
  {id:'a1',label:'A1',entryLevel:'A1',book:()=>A1_BOOK},
  {id:'a2',label:'A2',entryLevel:'A2',book:()=>BOOK},
  {id:'b1',label:'B1.1',entryLevel:'B1.1',book:()=>B1_BOOK}
];
let trainerSession=null;

function trainerStore(){
  try{
    const data=JSON.parse(localStorage.getItem(TRAINER_KEY)||'{}');
    return data&&typeof data==='object'?data:{};
  }catch{return {};}
}

function saveTrainerStore(store){
  try{localStorage.setItem(TRAINER_KEY,JSON.stringify(store));}catch{}
}

function trainerLevel(id){
  return TRAINER_LEVELS.find(level=>level.id===id)||null;
}

function trainerAnswerText(value){
  return plainText(value)
    .replace(/\s*,.*$/,'')
    .replace(/\s+\((?:Sg\.|Pl\.|\+\s*[ADG]\.?)\)\s*$/i,'')
    .replace(/\s+/g,' ')
    .trim();
}

function trainerWords(levelId,chapterNum=null){
  const level=trainerLevel(levelId);
  if(!level) return [];
  return level.book()
    .filter(chapter=>chapterNum===null||chapter.num===Number(chapterNum))
    .flatMap(chapter=>(chapter.vocab||[]).map((item,index)=>({
      id:wordEntryId(level.entryLevel,chapter,index,item),
      level:level.id,
      chapter:chapter.num,
      item,
      answer:trainerAnswerText(item.w),
      article:(String(item.w).match(/^(der|die|das)\s/i)||[])[1]?.toLowerCase()||'',
      meaning:plainText(item.ar||item.d||''),
      example:plainText(item.ex||'')
    })))
    .filter(word=>word.answer&&word.meaning);
}

function trainerStats(words,store=trainerStore()){
  const now=Date.now();
  let fresh=0,learning=0,mastered=0,due=0;
  words.forEach(word=>{
    const record=store[word.id];
    if(!record||!record.box){fresh+=1;return;}
    if(record.box>=TRAINER_MASTERED_BOX) mastered+=1; else learning+=1;
    if(Number(record.due||0)<=now) due+=1;
  });
  return {total:words.length,fresh,learning,mastered,due};
}

function allTrainerWords(){
  return TRAINER_LEVELS.flatMap(level=>trainerWords(level.id));
}

function trainerDueCount(){
  const store=trainerStore();
  const now=Date.now();
  return Object.values(store).filter(record=>record.box>0&&Number(record.due||0)<=now).length;
}

/* ---------- normalisation & answer checking ---------- */
function trainerNormalize(value){
  return String(value||'')
    .toLocaleLowerCase('de-DE')
    .replace(/[.,!?;:„“"'()]/g,' ')
    .replace(/\s+/g,' ')
    .trim();
}

function trainerFoldUmlauts(value){
  return value.replace(/ä/g,'ae').replace(/ö/g,'oe').replace(/ü/g,'ue').replace(/ß/g,'ss');
}

function trainerEditDistance(a,b){
  const rows=Array.from({length:a.length+1},(_,i)=>[i]);
  for(let j=1;j<=b.length;j+=1) rows[0][j]=j;
  for(let i=1;i<=a.length;i+=1){
    for(let j=1;j<=b.length;j+=1){
      rows[i][j]=Math.min(rows[i-1][j]+1,rows[i][j-1]+1,rows[i-1][j-1]+(a[i-1]===b[j-1]?0:1));
    }
  }
  return rows[a.length][b.length];
}

/* Returns {ok, close, note}. `close` = accepted with a spelling hint. */
function checkTrainerAnswer(input,expected,{article=''}={}){
  const given=trainerNormalize(input);
  const target=trainerNormalize(expected);
  if(!given) return {ok:false,close:false,note:''};
  if(given===target) return {ok:true,close:false,note:''};
  if(article){
    const givenArticle=(given.match(/^(der|die|das)\s/)||[])[1]||'';
    const givenNoun=given.replace(/^(der|die|das)\s+/,'');
    const targetNoun=target.replace(/^(der|die|das)\s+/,'');
    if(givenNoun===targetNoun&&givenArticle!==article){
      return {ok:false,close:false,note:givenArticle?`Artikel: ${article}, nicht ${givenArticle}`:`Mit Artikel: ${article} ${targetNoun}`};
    }
  }
  if(trainerFoldUmlauts(given)===trainerFoldUmlauts(target)){
    return {ok:true,close:true,note:'Richtig – achte auf ä, ö, ü und ß.'};
  }
  const distance=trainerEditDistance(trainerFoldUmlauts(given),trainerFoldUmlauts(target));
  if(target.length>=6&&distance===1) return {ok:true,close:true,note:`Fast perfekt: ${expected}`};
  return {ok:false,close:false,note:''};
}

/* ---------- scheduling ---------- */
function trainerRecordResult(store,wordId,firstTryCorrect){
  const record=store[wordId]||{box:0,seen:0,right:0,wrong:0};
  record.seen=Number(record.seen||0)+1;
  if(firstTryCorrect){
    record.right=Number(record.right||0)+1;
    record.box=Math.min(TRAINER_INTERVAL_DAYS.length-1,Number(record.box||0)+1);
  }else{
    record.wrong=Number(record.wrong||0)+1;
    record.box=1;
  }
  const days=TRAINER_INTERVAL_DAYS[record.box]||0;
  record.due=Date.now()+(firstTryCorrect?days*24*60*60*1000:10*60*1000);
  record.last=Date.now();
  store[wordId]=record;
  return record;
}

function pickTrainerWords(words,store,{size=TRAINER_SESSION_SIZE,newLimit=TRAINER_NEW_PER_SESSION}={}){
  const now=Date.now();
  const due=words.filter(word=>store[word.id]?.box>0&&Number(store[word.id].due||0)<=now)
    .sort((a,b)=>Number(store[a.id].due||0)-Number(store[b.id].due||0));
  const fresh=words.filter(word=>!store[word.id]?.box);
  const picked=due.slice(0,size);
  fresh.slice(0,Math.max(0,Math.min(newLimit,size-picked.length))).forEach(word=>picked.push(word));
  return picked;
}

/* ---------- exercise generation ---------- */
function trainerDistractors(word,pool,key,count=3){
  const seen=new Set([trainerNormalize(word[key])]);
  const options=[];
  shuffled(pool).forEach(other=>{
    const value=other[key];
    const norm=trainerNormalize(value);
    if(options.length<count&&value&&!seen.has(norm)){seen.add(norm);options.push(value);}
  });
  return options;
}

function trainerSteps(word,isNew){
  // Recognition first, production second. Known words skip the intro.
  const recognition=[word.article&&Math.random()<.35?'article':null,'meaning-to-word','word-to-meaning','listen']
    .filter(Boolean);
  const production=word.example&&new RegExp(`\\b${escapeRegExp(word.answer.replace(/^(der|die|das)\s+/i,'').replace(/^sich\s+/i,''))}\\b`,'i').test(word.example)
    ?['type','gap']:['type'];
  const steps=[];
  if(isNew) steps.push('intro');
  steps.push(recognition[Math.floor(Math.random()*recognition.length)]);
  steps.push(production[Math.floor(Math.random()*production.length)]);
  return steps;
}

function escapeRegExp(value){
  return String(value).replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
}

function buildTrainerSession(words,pool,title,backRoute){
  const store=trainerStore();
  const queue=[];
  words.forEach(word=>{
    const isNew=!store[word.id]?.box;
    trainerSteps(word,isNew).forEach((type,stepIndex)=>queue.push({type,wordId:word.id,stepIndex}));
  });
  // Interleave: keep each word's steps in order but mix words.
  const byWord=new Map();
  queue.forEach(step=>{if(!byWord.has(step.wordId)) byWord.set(step.wordId,[]);byWord.get(step.wordId).push(step);});
  const ordered=[];
  let lanes=[...byWord.values()];
  while(lanes.length){
    lanes=shuffled(lanes);
    lanes.forEach(lane=>ordered.push(lane.shift()));
    lanes=lanes.filter(lane=>lane.length);
  }
  return {
    title,backRoute,pool,
    words:new Map(words.map(word=>[word.id,word])),
    queue:ordered,index:0,
    failed:new Set(),answered:0,correct:0,
    finished:false,current:null
  };
}

/* ---------- views ---------- */
function trainerProgressBar(stats){
  const pct=value=>stats.total?Math.round(value/stats.total*100):0;
  return `<div class="trainer-bar" role="img" aria-label="${stats.mastered} gefestigt, ${stats.learning} in Arbeit, ${stats.fresh} neu">
    <span class="mastered" style="width:${pct(stats.mastered)}%"></span><span class="learning" style="width:${pct(stats.learning)}%"></span>
  </div>`;
}

function renderTrainerHome(levelId=null){
  const store=trainerStore();
  const preferred={a1:'a1','b1.1':'b1'}[window.NextUI?.state?.().profile?.level]||'a2';
  const levels=levelId?[trainerLevel(levelId)].filter(Boolean)
    :[...TRAINER_LEVELS].sort((a,b)=>(b.id===preferred)-(a.id===preferred));
  const due=trainerDueCount();
  setTop('Wort-Trainer','Lernen mit System · Wiederholung zur richtigen Zeit',true);
  view.innerHTML=`
    <section class="hero trainer-hero">
      <h2>Wörter wirklich behalten</h2>
      <p>Neue Wörter kennenlernen, erkennen, hören und selbst schreiben. Der Trainer wiederholt jedes Wort genau dann, wenn du es sonst vergessen würdest.</p>
      ${ar('كل كلمة بتمر بمراحل: تتعرف عليها، تميّزها، تسمعها، وبعدين تكتبها بنفسك. والمراجعة بتيجي في الوقت اللي كنت هتنساها فيه.')}
      <div class="trainer-hero-actions">
        <button type="button" class="btn btn-green" onclick="go('train/due')" ${due?'':'disabled'}>Fällige Wörter wiederholen (${due})</button>
      </div>
    </section>
    <div class="trainer-legend"><span><i class="mastered"></i>gefestigt</span><span><i class="learning"></i>in Arbeit</span><span><i></i>neu</span></div>
    ${levels.map(level=>{
      const chapters=level.book();
      const levelStats=trainerStats(trainerWords(level.id),store);
      return `<section class="card trainer-level">
        <div class="trainer-level-head"><h3>${level.label}</h3><span>${levelStats.mastered} / ${levelStats.total} gefestigt</span></div>
        ${trainerProgressBar(levelStats)}
        <div class="trainer-chapters">${chapters.map(chapter=>{
          const stats=trainerStats(trainerWords(level.id,chapter.num),store);
          return `<button type="button" class="trainer-chapter" onclick="go('train/${level.id}/${chapter.num}')">
            <span class="trainer-chapter-num">${chapter.num}</span>
            <span class="trainer-chapter-copy"><b>${escapeHtml(chapter.title)}</b>
              <small>${stats.due?`${stats.due} fällig · `:''}${stats.fresh} neu · ${stats.mastered}/${stats.total} gefestigt</small>
              ${trainerProgressBar(stats)}</span>
          </button>`;
        }).join('')}</div>
      </section>`;
    }).join('')}`;
}

function startTrainerSession(levelId,chapterNum){
  const chapterWords=trainerWords(levelId,chapterNum);
  const level=trainerLevel(levelId);
  const chapter=level?.book().find(item=>item.num===Number(chapterNum));
  if(!chapter||!chapterWords.length){renderTrainerHome();return;}
  const store=trainerStore();
  const picked=pickTrainerWords(chapterWords,store);
  if(!picked.length){
    setTop(`Wort-Trainer · ${level.label}`,`Kapitel ${chapter.num}`,true);
    view.innerHTML=`<section class="card trainer-done"><h2>Alles erledigt 🎉</h2>
      <p>Alle Wörter aus Kapitel ${chapter.num} sind geübt und gerade nicht fällig.</p>
      ${ar('خلصت كل كلمات الوحدة دي ومفيش مراجعة مستحقة دلوقتي. ارجع بكرة أو اختار وحدة تانية.')}
      <div class="trainer-actions"><button type="button" class="btn btn-green" onclick="go('train')">Andere Kapitel</button></div></section>`;
    return;
  }
  trainerSession=buildTrainerSession(picked,chapterWords,`${level.label} · Kapitel ${chapter.num}: ${chapter.title}`,'train');
  drawTrainerStep();
}

function startDueTrainerSession(){
  const all=allTrainerWords();
  const store=trainerStore();
  const now=Date.now();
  const due=all.filter(word=>store[word.id]?.box>0&&Number(store[word.id].due||0)<=now)
    .sort((a,b)=>Number(store[a.id].due||0)-Number(store[b.id].due||0)).slice(0,20);
  if(!due.length){renderTrainerHome();return;}
  trainerSession=buildTrainerSession(due,all,'Fällige Wörter','train');
  drawTrainerStep();
}

function trainerSpeak(word){
  speakText(prepareSpeechText(word.item.w,{vocabulary:true}),'de');
}

function drawTrainerStep(feedback=''){
  const session=trainerSession;
  if(!session) return;
  if(session.index>=session.queue.length){finishTrainerSession();return;}
  const step=session.queue[session.index];
  const word=session.words.get(step.wordId);
  session.current=step;
  const progress=Math.round(session.index/session.queue.length*100);
  setTop('Wort-Trainer',session.title,true);
  const head=`<div class="trainer-progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${progress}"><span style="width:${progress}%"></span></div>`;
  let body='';
  if(step.type==='intro'){
    body=`<section class="card trainer-card trainer-intro">
      <span class="trainer-kind">Neues Wort</span>
      ${vocabVisual(word.item)}
      <div class="trainer-word">${fmtWord(word.answer)} <button type="button" class="trainer-audio" onclick="trainerSpeak(trainerSession.words.get('${escapeHtml(word.id)}'))" aria-label="Anhören">🔊</button></div>
      <div class="trainer-meaning" lang="ar" dir="rtl">${escapeHtml(word.meaning)}</div>
      <p class="trainer-def">${escapeHtml(plainText(word.item.d||''))}</p>
      ${word.example?`<p class="trainer-example">„${escapeHtml(word.example)}“</p>`:''}
      <div class="trainer-actions"><button type="button" class="btn btn-green" onclick="nextTrainerStep(true)">Verstanden – weiter</button></div>
    </section>`;
    view.innerHTML=head+body;
    setTimeout(()=>trainerSpeak(word),250);
    return;
  }
  if(['meaning-to-word','word-to-meaning','listen','article'].includes(step.type)){
    let prompt='',options=[],correct='',kind='';
    if(step.type==='meaning-to-word'){
      kind='Welches deutsche Wort passt?';
      prompt=`<div class="trainer-meaning big" lang="ar" dir="rtl">${escapeHtml(word.meaning)}</div>`;
      correct=word.answer;options=[correct,...trainerDistractors(word,session.pool,'answer')];
    }else if(step.type==='word-to-meaning'){
      kind='Was bedeutet das Wort?';
      prompt=`<div class="trainer-word">${fmtWord(word.answer)}</div>`;
      correct=word.meaning;options=[correct,...trainerDistractors(word,session.pool,'meaning')];
    }else if(step.type==='listen'){
      kind='Hör zu: Welches Wort hörst du?';
      prompt=`<button type="button" class="trainer-listen" onclick="trainerSpeak(trainerSession.words.get('${escapeHtml(word.id)}'))">🔊 Nochmal hören</button>`;
      correct=word.answer;options=[correct,...trainerDistractors(word,session.pool,'answer')];
      setTimeout(()=>trainerSpeak(word),300);
    }else{
      kind='Welcher Artikel ist richtig?';
      prompt=`<div class="trainer-word">___ ${escapeHtml(word.answer.replace(/^(der|die|das)\s+/i,''))}</div><div class="trainer-meaning" lang="ar" dir="rtl">${escapeHtml(word.meaning)}</div>`;
      correct=word.article;options=['der','die','das'];
    }
    const list=step.type==='article'?options:shuffled(options);
    session.expected=correct;
    body=`<section class="card trainer-card">
      <span class="trainer-kind">${kind}</span>
      ${prompt}
      <div class="trainer-options ${step.type==='word-to-meaning'?'rtl':''}">${list.map((option,index)=>`
        <button type="button" class="trainer-option" data-option="${index}" ${step.type==='word-to-meaning'?'lang="ar" dir="rtl"':''}>${escapeHtml(option)}</button>`).join('')}</div>
      <div class="trainer-feedback" role="status" aria-live="polite">${feedback}</div>
    </section>`;
    view.innerHTML=head+body;
    $$('.trainer-option').forEach(button=>button.addEventListener('click',()=>answerTrainerChoice(button,list[Number(button.dataset.option)])));
    return;
  }
  // Production: type the word, or fill it into the example sentence.
  const isGap=step.type==='gap';
  const core=word.answer.replace(/^(der|die|das)\s+/i,'').replace(/^sich\s+/i,'');
  const gapSentence=isGap?escapeHtml(word.example).replace(new RegExp(`\\b${escapeRegExp(escapeHtml(core))}\\b`,'i'),'<span class="trainer-gap">_____</span>'):'';
  session.expected=isGap?core:word.answer;
  body=`<section class="card trainer-card">
    <span class="trainer-kind">${isGap?'Ergänze den Satz':'Schreib das deutsche Wort'}</span>
    ${isGap?`<p class="trainer-sentence">${gapSentence}</p><div class="trainer-meaning" lang="ar" dir="rtl">${escapeHtml(word.meaning)}</div>`
      :`<div class="trainer-meaning big" lang="ar" dir="rtl">${escapeHtml(word.meaning)}</div>${word.article?'<p class="trainer-hint">Mit Artikel schreiben (der / die / das).</p>':''}`}
    <form class="trainer-type" onsubmit="event.preventDefault();answerTrainerTyped()">
      <input id="trainerInput" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" lang="de" aria-label="Antwort">
      <button type="submit" class="btn btn-green">Prüfen</button>
    </form>
    <div class="trainer-umlauts">${['ä','ö','ü','ß'].map(letter=>`<button type="button" onclick="insertTrainerLetter('${letter}')">${letter}</button>`).join('')}
      <button type="button" class="trainer-skip" onclick="answerTrainerTyped(true)">Weiß ich nicht</button></div>
    <div class="trainer-feedback" role="status" aria-live="polite">${feedback}</div>
  </section>`;
  view.innerHTML=head+body;
  setTimeout(()=>$('#trainerInput')?.focus(),50);
}

function insertTrainerLetter(letter){
  const input=$('#trainerInput');
  if(!input) return;
  const start=input.selectionStart??input.value.length;
  input.value=input.value.slice(0,start)+letter+input.value.slice(input.selectionEnd??start);
  input.focus();
  input.setSelectionRange(start+1,start+1);
}

function trainerMarkAnswer(correct,message){
  const session=trainerSession;
  const step=session.current;
  const word=session.words.get(step.wordId);
  session.answered+=1;
  if(correct) session.correct+=1;
  else{
    session.failed.add(word.id);
    window.NextUI?.addMistake?.({prompt:word.meaning,answer:word.answer,context:'Wort-Trainer'});
    // Practise the word again a few steps later.
    const retry={type:step.type==='type'||step.type==='gap'?'type':'meaning-to-word',wordId:word.id,retry:true};
    session.queue.splice(Math.min(session.queue.length,session.index+3),0,retry);
  }
  const box=$('.trainer-feedback');
  if(box){
    box.className=`trainer-feedback show ${correct?'good':'bad'}`;
    box.innerHTML=`${message}<div class="trainer-solution">${fmtWord(word.answer)} · <span lang="ar" dir="rtl">${escapeHtml(word.meaning)}</span></div>
      ${word.example?`<div class="trainer-example">„${escapeHtml(word.example)}“</div>`:''}
      <button type="button" class="btn btn-green trainer-next" onclick="nextTrainerStep()">Weiter</button>`;
    box.querySelector('.trainer-next')?.focus();
  }
  trainerSpeak(word);
}

function answerTrainerChoice(button,value){
  if(trainerSession.current?.answered) return;
  trainerSession.current.answered=true;
  const correct=trainerNormalize(value)===trainerNormalize(trainerSession.expected);
  $$('.trainer-option').forEach(option=>{
    option.disabled=true;
    const optionValue=option.textContent.trim();
    if(trainerNormalize(optionValue)===trainerNormalize(trainerSession.expected)) option.classList.add('correct');
  });
  if(!correct) button.classList.add('wrong');
  trainerMarkAnswer(correct,correct?'✓ Richtig!':'✗ Nicht ganz.');
}

function answerTrainerTyped(skip=false){
  if(trainerSession.current?.answered) return;
  const input=$('#trainerInput');
  const word=trainerSession.words.get(trainerSession.current.wordId);
  const result=skip?{ok:false,note:''}:checkTrainerAnswer(input?.value||'',trainerSession.expected,{article:trainerSession.current.type==='type'?word.article:''});
  if(!skip&&!result.ok&&!(input?.value||'').trim()) return;
  trainerSession.current.answered=true;
  if(input) input.disabled=true;
  $$('.trainer-type button,.trainer-umlauts button').forEach(button=>button.disabled=true);
  trainerMarkAnswer(result.ok,result.ok?(result.close?`✓ ${result.note}`:'✓ Richtig!'):(result.note?`✗ ${result.note}`:skip?'Kein Problem – so heißt es:':'✗ Nicht ganz.'));
}

function nextTrainerStep(){
  if(!trainerSession) return;
  trainerSession.index+=1;
  drawTrainerStep();
}

function finishTrainerSession(){
  const session=trainerSession;
  const store=trainerStore();
  const results=[...session.words.values()].map(word=>{
    const record=trainerRecordResult(store,word.id,!session.failed.has(word.id));
    return {word,record};
  });
  saveTrainerStore(store);
  const accuracy=session.answered?Math.round(session.correct/session.answered*100):100;
  setTop('Wort-Trainer','Runde geschafft',true);
  view.innerHTML=`<section class="card trainer-done">
    <h2>Runde geschafft! ${accuracy>=80?'🎉':'💪'}</h2>
    <div class="stat-grid"><div class="stat-card"><b>${results.length}</b><span>Wörter</span></div><div class="stat-card"><b>${accuracy}%</b><span>richtig</span></div><div class="stat-card"><b>${trainerDueCount()}</b><span>noch fällig</span></div></div>
    ${ar('الكلمات اللي غلطت فيها هترجعلك بعد شوية، واللي عرفتها هتتأجل مراجعتها لأيام أكتر كل مرة.')}
    <ul class="trainer-results">${results.map(({word,record})=>`<li class="${session.failed.has(word.id)?'bad':'good'}">
      <b>${fmtWord(word.answer)}</b><span lang="ar" dir="rtl">${escapeHtml(word.meaning)}</span>
      <small>${session.failed.has(word.id)?'wird bald wiederholt':`nächste Wiederholung in ${TRAINER_INTERVAL_DAYS[record.box]} Tag${TRAINER_INTERVAL_DAYS[record.box]===1?'':'en'}`}</small></li>`).join('')}</ul>
    <div class="trainer-actions">
      <button type="button" class="btn btn-green" onclick="route()">Nächste Runde</button>
      <button type="button" class="btn btn-ghost" onclick="go('train')">Alle Kapitel</button>
    </div>
  </section>`;
  trainerSession=null;
}
