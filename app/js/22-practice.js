/* ===================== Üben: Shadowing, Diktat, Meine Wörter ===================== */
/* Skills that need the learner's own voice and hand. The sentences come from
   each chapter (data_practice.js, built by scripts/build_practice_sentences.js);
   recorded ones play with Mia/Tarek, the rest with the device voice. */

const PRACTICE_SCRIPT='data_practice.js?v=practice-1';
const PRACTICE_LEVELS=[{id:'a1',label:'A1'},{id:'a2',label:'A2'},{id:'b1',label:'B1'}];
const PRACTICE_KEY='practiceProgress';
const MY_WORDS_KEY='myTappedWords';
const SpeechRecognitionApi=window.SpeechRecognition||window.webkitSpeechRecognition;
let practiceRun=null;          // the running Shadowing loop
let practiceRecorder=null;
let practiceRecording=null;    // object URL of the learner's last recording
let practiceRecognition=null;

function ensurePracticeData(){
  if(window.PRACTICE_SENTENCES) return Promise.resolve(window.PRACTICE_SENTENCES);
  return loadScriptOnce(PRACTICE_SCRIPT).then(()=>window.PRACTICE_SENTENCES);
}

function practiceLevelOf(level){
  if(level==='b1.1') return 'b1';
  return PRACTICE_LEVELS.some(item=>item.id===level)?level:'a2';
}

function readPracticeProgress(){
  try{
    const value=JSON.parse(localStorage.getItem(PRACTICE_KEY)||'{}');
    return value&&typeof value==='object'?value:{};
  }catch{ return {}; }
}

function practiceEntry(mode,level,num){
  const all=readPracticeProgress();
  return all[mode]?.[`${level}:${num}`]||{done:[],scores:{},pos:0};
}

function savePracticeEntry(mode,level,num,update){
  const all=readPracticeProgress();
  all[mode]=all[mode]||{};
  const key=`${level}:${num}`;
  const entry={done:[],scores:{},pos:0,...all[mode][key]};
  update(entry);
  entry.done=[...new Set(entry.done)].sort((a,b)=>a-b);
  all[mode][key]=entry;
  try{ localStorage.setItem(PRACTICE_KEY,JSON.stringify(all)); }catch{}
  return entry;
}

/* ---------- comparing words ---------- */

function practiceWords(text){
  return String(text||'').replace(/[„“”"«»‚‘’]/g,' ').split(/\s+/)
    .map(word=>word.replace(/^[^A-Za-zÄÖÜäöüß0-9]+|[^A-Za-zÄÖÜäöüß0-9]+$/g,''))
    .filter(Boolean);
}

function editDistance(left,right){
  const row=Array.from({length:right.length+1},(_,index)=>index);
  for(let i=1;i<=left.length;i++){
    let previous=row[0];
    row[0]=i;
    for(let j=1;j<=right.length;j++){
      const current=row[j];
      row[j]=Math.min(row[j]+1,row[j-1]+1,previous+(left[i-1]===right[j-1]?0:1));
      previous=current;
    }
  }
  return row[right.length];
}

// Word by word: ok, case (only capitals wrong), typo (a letter or two), wrong, missing, extra.
function diktatCompare(expected,typed){
  const want=practiceWords(expected);
  const got=practiceWords(typed);
  const kind=(a,b)=>{
    if(a===b) return 'ok';
    if(a.toLowerCase()===b.toLowerCase()) return 'case';
    const fold=value=>value.toLowerCase().replace(/ß/g,'ss').replace(/ä/g,'ae').replace(/ö/g,'oe').replace(/ü/g,'ue');
    const distance=editDistance(fold(a),fold(b));
    return distance<=Math.max(1,Math.round(a.length/4))?'typo':'wrong';
  };
  const cost={ok:0,case:.25,typo:.6,wrong:1.5};
  const table=Array.from({length:want.length+1},()=>new Array(got.length+1).fill(0));
  for(let i=0;i<=want.length;i++) table[i][0]=i;
  for(let j=0;j<=got.length;j++) table[0][j]=j;
  for(let i=1;i<=want.length;i++){
    for(let j=1;j<=got.length;j++){
      table[i][j]=Math.min(table[i-1][j]+1,table[i][j-1]+1,table[i-1][j-1]+cost[kind(want[i-1],got[j-1])]);
    }
  }
  const words=[];
  let i=want.length,j=got.length;
  while(i>0||j>0){
    if(i>0&&j>0&&table[i][j]===table[i-1][j-1]+cost[kind(want[i-1],got[j-1])]){
      words.unshift({status:kind(want[i-1],got[j-1]),expected:want[i-1],typed:got[j-1]});i--;j--;
    }else if(i>0&&table[i][j]===table[i-1][j]+1){
      words.unshift({status:'missing',expected:want[i-1],typed:''});i--;
    }else{
      words.unshift({status:'extra',expected:'',typed:got[j-1]});j--;
    }
  }
  const points={ok:1,case:.75,typo:.5};
  const earned=words.reduce((sum,word)=>sum+(points[word.status]||0),0);
  const score=want.length?Math.round(earned/Math.max(want.length,words.length)*100):0;
  return {score,words};
}

// How much of the sentence the speech recogniser heard, in order.
function speakingScore(expected,heard){
  const fold=value=>value.toLowerCase().replace(/ß/g,'ss');
  const want=practiceWords(expected).map(fold);
  const got=practiceWords(heard).map(fold);
  const table=Array.from({length:want.length+1},()=>new Array(got.length+1).fill(0));
  for(let i=want.length-1;i>=0;i--){
    for(let j=got.length-1;j>=0;j--){
      table[i][j]=want[i]===got[j]?table[i+1][j+1]+1:Math.max(table[i+1][j],table[i][j+1]);
    }
  }
  const hit=new Array(want.length).fill(false);
  let i=0,j=0;
  while(i<want.length&&j<got.length){
    if(want[i]===got[j]){ hit[i]=true;i++;j++; }
    else if(table[i+1][j]>=table[i][j+1]) i++;
    else j++;
  }
  const original=practiceWords(expected);
  return {
    score:want.length?Math.round(hit.filter(Boolean).length/want.length*100):0,
    words:original.map((word,index)=>({word,ok:hit[index]}))
  };
}

/* ---------- playing a sentence and waiting for its end ---------- */

function practicePlay(text,{slow=false,voice=speechVoiceURI}={}){
  stopPracticeAudio();
  return new Promise(resolve=>{
    const started=performance.now();
    let settled=false;
    const finish=()=>{
      if(settled) return;
      settled=true;
      clearTimeout(safety);
      resolve((performance.now()-started)/1000);
    };
    const words=practiceWords(text).length;
    const factor=slow?.72:1;
    const safety=setTimeout(finish,(words*.65/factor+4)*1000);
    if(playFixedSpeech(text,voice,finish,factor)) return;
    if(!speech){ finish(); return; }
    const utterance=new SpeechSynthesisUtterance(text);
    utterance.lang='de-DE';
    utterance.rate=Math.max(.5,Math.min(1.4,speechRate*factor));
    utterance.voice=germanVoices()[0]||null;
    utterance.onend=finish;
    utterance.onerror=finish;
    speech.speak(utterance);
  });
}

function stopPracticeAudio(){
  stopFixedSpeech();
  speech?.cancel();
}

function stopPracticeRun(){
  if(!practiceRun) return;
  practiceRun.stopped=true;
  clearTimeout(practiceRun.timer);
  practiceRun=null;
  stopPracticeAudio();
  $('.pr-stage')?.classList.remove('is-speaking','is-yourturn');
  const button=$('[data-pr-action="shadow"]');
  if(button){ button.setAttribute('aria-pressed','false'); button.querySelector('b').textContent='Shadowing starten'; }
}

/* ---------- pages ---------- */

function practiceHeader(title,sub,ar){
  return `<section class="pr-head"><h2>${title}</h2><p>${sub}</p>${ar?`<p class="pr-ar" lang="ar" dir="rtl">${ar}</p>`:''}</section>`;
}

function renderPracticeHub(){
  const level=practiceLevelOf(window.NextUI?.state().profile.level||'a2');
  const appLevel=level==='b1'?'b1.1':level;
  const listen=level==='a1'?'a1/listen':level==='a2'?'listen':'b1.1/games';
  const exam=level==='a1'?'a1/exam':level==='a2'?'exam':'b1.1/exam';
  setTop('Üben','Alle Fertigkeiten an einem Ort',true,'تدريب كل المهارات');
  const skills=[
    {route:`practice/shadow/${level}`,icon:'🗣️',title:'Sprechen · Shadowing',text:'Hören, sofort nachsprechen, dich aufnehmen und die Aussprache prüfen.',ar:'اسمع الجملة وكرّرها وراها على طول، سجّل صوتك وقارنه بالأصل.',tag:'Neu'},
    {route:`practice/dialog/${level}`,icon:'🎭',title:'Sprechen · Rollenspiel',text:'Spiele die Dialoge der Kapitel: die App spricht die andere Rolle, du deine.',ar:'مثّل الحوار: التطبيق بيقول جمل الشخص التاني وإنت تقول جملك.',tag:'Neu'},
    {route:'videos',icon:'🎬',title:'Sehen · Videos',text:'Filme und Serien für Deutschlerner mit Tempo, Wiederholung und Notizen.',ar:'اتفرج على فيديوهات للمتعلمين وكرّر أي جزء وبطّأ السرعة.',tag:'Neu'},
    {route:`practice/diktat/${level}`,icon:'✍️',title:'Schreiben · Diktat',text:'Sätze hören und richtig schreiben, mit Korrektur Wort für Wort.',ar:'اسمع واكتب الجملة، وهتشوف غلطاتك كلمة كلمة.',tag:'Neu'},
    {route:listen,icon:'🎧',title:'Hören',text:'Hörtexte aus dem Buch mit Aufgaben und Buchseiten.',ar:'تمارين الاستماع من الكتاب.'},
    {route:'podcast',icon:'🎙️',title:'Podcast',text:'Gespräche mit Mitlesen Wort für Wort.',ar:'حلقات بودكاست مع النص.'},
    {route:'my-words',icon:'⭐',title:'Meine Wörter',text:'Alle Wörter, die du angetippt hast – zum Wiederholen.',ar:'كل الكلمات اللي ضغطت عليها عشان تترجمها.'},
    {route:'train',icon:'🧠',title:'Wortschatz · Wort-Trainer',text:'Wörter mit Wiederholung zur richtigen Zeit.',ar:'حفظ الكلمات بالتكرار المتباعد.'},
    {route:'bausteine',icon:'▦',title:'Grammatik · Satzbaukasten',text:'Satzmuster, Präpositionen, Konnektoren.',ar:'قواعد بناء الجملة.'},
    {route:exam,icon:'📝',title:'Prüfung',text:`Modellprüfung ${level.toUpperCase()} mit Timer.`,ar:'امتحان تجريبي بالوقت.'}
  ];
  view.innerHTML=`${practiceHeader('Was möchtest du heute üben?','Jede Fertigkeit hat ihren eigenen Bereich. Shadowing und Diktat nehmen die Sätze aus deinen Kapiteln.','كل مهارة ليها مكانها: سماع، كلام، كتابة، قراءة، كلمات وقواعد.')}
    <div class="pr-skill-grid">${skills.map(item=>`<button type="button" class="pr-skill" onclick="go('${item.route}')">
      <span class="pr-skill-icon" aria-hidden="true">${item.icon}</span>
      <span class="pr-skill-text"><b>${item.title}${item.tag?` <em>${item.tag}</em>`:''}</b><span>${item.text}</span><small lang="ar" dir="rtl">${item.ar}</small></span>
    </button>`).join('')}</div>
    <p class="pr-note" lang="ar" dir="rtl">المستوى الحالي: ${level.toUpperCase()} — تقدر تغيّره من جوه الشادوينج أو الإملاء. <button type="button" class="pr-link" onclick="go('${appLevel}')">افتح دروس ${level.toUpperCase()}</button></p>`;
}

function practiceLevelTabs(mode,level){
  return `<nav class="pr-level-tabs" aria-label="Niveau">${PRACTICE_LEVELS.map(item=>`<button type="button" onclick="go('practice/${mode}/${item.id}')" ${item.id===level?'aria-current="page"':''}>${item.label}</button>`).join('')}</nav>`;
}

async function renderPracticeChapters(mode,level){
  const isShadow=mode==='shadow';
  setTop(isShadow?'Shadowing':'Diktat',`${level.toUpperCase()} · Kapitel wählen`,true,isShadow?'الشادوينج':'الإملاء');
  view.innerHTML=`<div class="pr-loading">…</div>`;
  const data=await ensurePracticeData();
  if(location.hash!==`#practice/${mode}/${level}`) return;
  const chapters=data[level]||[];
  const intro=isShadow
    ?practiceHeader('Shadowing: hören und gleich nachsprechen','Sprich wie ein Schatten direkt nach dem Sprecher: gleiche Melodie, gleiches Tempo. Das trainiert Aussprache, Rhythmus und schnelles Sprechen.','الشادوينج: تسمع الجملة وتقولها وراها على طول بنفس النغمة والسرعة. ده بيحسّن النطق والطلاقة وسرعة الكلام. ابدأ بالبطيء، وبعدين خبّي النص.')
    :practiceHeader('Diktat: hören und schreiben','Höre den Satz so oft du willst und schreibe ihn. Du siehst danach jeden Fehler – auch Groß- und Kleinschreibung.','الإملاء: اسمع الجملة واكتبها، وبعدين هتشوف كل غلطة حتى الحروف الكبيرة والصغيرة.');
  view.innerHTML=`${intro}${practiceLevelTabs(mode,level)}
    <ol class="pr-chapter-list">${chapters.map(chapter=>{
      const entry=practiceEntry(mode,level,chapter.num);
      const total=chapter.sentences.length;
      const done=entry.done.length;
      return `<li><button type="button" onclick="go('practice/${mode}/${level}/${chapter.num}')">
        <span class="pr-chapter-num">${chapter.num}</span>
        <span class="pr-chapter-text"><b>${escapeHtml(chapter.title)}</b><small>${total} Sätze${chapter.sentences.some(item=>item.rec)?' · 🎙 Mia & Tarek':''}</small>
        ${chapter.titleAr?`<small lang="ar" dir="rtl">${escapeHtml(chapter.titleAr)}</small>`:''}</span>
        <span class="pr-chapter-progress" style="--pr-done:${total?done/total:0}" aria-label="${done} von ${total} geübt">${done}/${total}</span>
      </button></li>`;
    }).join('')}</ol>`;
}

async function renderPracticeSession(mode,level,num){
  stopPracticeRun();
  const data=await ensurePracticeData();
  const chapter=(data[level]||[]).find(item=>item.num===num);
  if(!chapter){ go(`practice/${mode}/${level}`); return; }
  if(!location.hash.startsWith(`#practice/${mode}/${level}/${num}`)) return;
  const entry=practiceEntry(mode,level,num);
  const index=Math.min(entry.pos||0,chapter.sentences.length-1);
  const view_=mode==='shadow'?shadowMarkup:diktatMarkup;
  setTop(mode==='shadow'?'Shadowing':'Diktat',`${level.toUpperCase()} · Kapitel ${num} · ${escapeHtml(chapter.title)}`,true,mode==='shadow'?'الشادوينج':'الإملاء');
  view.innerHTML=`<div class="pr-session" data-pr-mode="${mode}" data-pr-level="${level}" data-pr-num="${num}" data-pr-index="${index}">${view_(chapter,index,entry)}</div>`;
  if(mode==='diktat') $('#diktatInput')?.focus({preventScroll:true});
}

function practiceDots(chapter,index,entry){
  return `<div class="pr-dots" role="list" aria-label="Sätze">${chapter.sentences.map((_,i)=>`<button type="button" role="listitem" data-pr-goto="${i}" class="${i===index?'current':''} ${entry.done.includes(i)?'done':''}" aria-label="Satz ${i+1}${entry.done.includes(i)?' · geübt':''}"></button>`).join('')}</div>`;
}

function practiceNav(chapter,index){
  return `<div class="pr-nav"><button type="button" class="next-secondary" data-pr-action="prev" ${index===0?'disabled':''}>‹ Zurück</button>
    <span>Satz ${index+1} / ${chapter.sentences.length}</span>
    <button type="button" class="next-secondary" data-pr-action="next" ${index>=chapter.sentences.length-1?'disabled':''}>Weiter ›</button></div>`;
}

function shadowMarkup(chapter,index,entry){
  const sentence=chapter.sentences[index];
  const hidden=localStorage.getItem('shadowHideText')==='1';
  const repeat=Number(localStorage.getItem('shadowRepeat')||3);
  const best=entry.scores?.[index];
  return `${practiceDots(chapter,index,entry)}
    <section class="pr-stage ${hidden?'text-hidden':''}">
      <div class="pr-voice">${sentence.rec?'🎙 Aufnahme: Mia / Tarek':'🔈 Gerätestimme'}</div>
      <p class="pr-sentence" lang="de">${escapeHtml(sentence.de)}</p>
      ${sentence.ar?`<p class="pr-sentence-ar" lang="ar" dir="rtl">${escapeHtml(sentence.ar)}</p>`:''}
      <div class="pr-turn" aria-live="polite"><span class="pr-turn-bar"></span><b>Jetzt du!</b> <small lang="ar" dir="rtl">دورك — قول الجملة</small></div>
    </section>
    <div class="pr-actions">
      <button type="button" class="pr-btn" data-pr-action="play"><span>▶</span><b>Anhören</b></button>
      <button type="button" class="pr-btn" data-pr-action="slow"><span>🐢</span><b>Langsam</b></button>
      <button type="button" class="pr-btn primary" data-pr-action="shadow" aria-pressed="false"><span>🗣️</span><b>Shadowing starten</b></button>
      <button type="button" class="pr-btn" data-pr-action="record" aria-pressed="false"><span>🎙</span><b>Aufnehmen</b></button>
      ${SpeechRecognitionApi?`<button type="button" class="pr-btn" data-pr-action="check"><span>✓</span><b>Aussprache prüfen</b></button>`:''}
      <button type="button" class="pr-btn" data-pr-action="hide" aria-pressed="${hidden}"><span>🙈</span><b>${hidden?'Text zeigen':'Text verstecken'}</b></button>
    </div>
    <div class="pr-options">
      <label>Wiederholen <select data-pr-repeat>${[1,2,3,5].map(n=>`<option value="${n}" ${n===repeat?'selected':''}>${n}×</option>`).join('')}</select></label>
      <label><input type="checkbox" data-pr-autonext ${localStorage.getItem('shadowAutoNext')!=='0'?'checked':''}> danach nächster Satz</label>
    </div>
    <div class="pr-result" id="practiceResult" aria-live="polite">${best!==undefined?`<p class="pr-best">Bestes Ergebnis: <b>${best}%</b></p>`:''}</div>
    ${practiceNav(chapter,index)}
    <details class="pr-help"><summary>So funktioniert Shadowing <span lang="ar" dir="rtl">إزاي تتمرّن؟</span></summary>
      <ol lang="ar" dir="rtl"><li>اسمع الجملة مرة أو اتنين وافهم معناها (اضغط على أي كلمة تترجمها).</li><li>دوس «Shadowing starten»: الجملة هتتقال وبعدها هيظهر «Jetzt du!» — قولها بصوت عالي بنفس الطريقة.</li><li>سجّل صوتك وقارنه بالأصل، أو استخدم «Aussprache prüfen» عشان تعرف الكلمات اللي اتفهمت.</li><li>لما تتقنها، خبّي النص وكرّر من الودن بس.</li></ol>
    </details>`;
}

function diktatMarkup(chapter,index,entry){
  const sentence=chapter.sentences[index];
  const best=entry.scores?.[index];
  return `${practiceDots(chapter,index,entry)}
    <section class="pr-stage diktat">
      <div class="pr-voice">${sentence.rec?'🎙 Aufnahme: Mia / Tarek':'🔈 Gerätestimme'} · ${practiceWords(sentence.de).length} Wörter</div>
      <div class="pr-actions compact">
        <button type="button" class="pr-btn primary" data-pr-action="play"><span>▶</span><b>Anhören</b></button>
        <button type="button" class="pr-btn" data-pr-action="slow"><span>🐢</span><b>Langsam</b></button>
        <button type="button" class="pr-btn" data-pr-action="hint"><span>💡</span><b>Tipp</b></button>
      </div>
      <p class="pr-hint" id="diktatHint" hidden></p>
      <textarea id="diktatInput" class="pr-input" rows="3" lang="de" spellcheck="false" autocapitalize="sentences" autocomplete="off" autocorrect="off" placeholder="Schreib, was du hörst …"></textarea>
      <div class="pr-keys" aria-label="Sonderzeichen">${['ä','ö','ü','ß','Ä','Ö','Ü'].map(key=>`<button type="button" data-pr-key="${key}">${key}</button>`).join('')}</div>
      <button type="button" class="next-primary pr-check" data-pr-action="diktat-check">Prüfen</button>
    </section>
    <div class="pr-result" id="practiceResult" aria-live="polite">${best!==undefined?`<p class="pr-best">Bestes Ergebnis: <b>${best}%</b></p>`:''}</div>
    ${practiceNav(chapter,index)}
    <details class="pr-help"><summary>Tipps zum Diktat <span lang="ar" dir="rtl">نصايح</span></summary>
      <ol lang="ar" dir="rtl"><li>اسمع الجملة كاملة الأول من غير ما تكتب.</li><li>اكتبها على أجزاء، واسمع تاني بالبطيء.</li><li>الأسماء في الألماني بتبدأ بحرف كبير: der Bahnhof، die Arbeit.</li><li>«Tipp» بيوريك أول حرف من كل كلمة.</li></ol>
    </details>`;
}

function practiceSessionInfo(){
  const session=$('.pr-session');
  if(!session) return null;
  const data=window.PRACTICE_SENTENCES?.[session.dataset.prLevel];
  const chapter=data?.find(item=>item.num===Number(session.dataset.prNum));
  const index=Number(session.dataset.prIndex);
  return chapter?{session,chapter,index,sentence:chapter.sentences[index],mode:session.dataset.prMode,level:session.dataset.prLevel,num:chapter.num}:null;
}

function gotoPracticeSentence(index,{keepRun=false}={}){
  const info=practiceSessionInfo();
  if(!info) return;
  const next=Math.max(0,Math.min(info.chapter.sentences.length-1,index));
  if(!keepRun) stopPracticeRun();
  stopRecordingAndRecognition();
  const entry=savePracticeEntry(info.mode,info.level,info.num,item=>{ item.pos=next; });
  info.session.dataset.prIndex=next;
  info.session.innerHTML=(info.mode==='shadow'?shadowMarkup:diktatMarkup)(info.chapter,next,entry);
  if(info.mode==='diktat') $('#diktatInput')?.focus({preventScroll:true});
}

function markPracticeDone(score){
  const info=practiceSessionInfo();
  if(!info) return;
  savePracticeEntry(info.mode,info.level,info.num,entry=>{
    entry.done.push(info.index);
    if(score!==undefined) entry.scores={...entry.scores,[info.index]:Math.max(score,entry.scores?.[info.index]||0)};
  });
  $(`.pr-dots [data-pr-goto="${info.index}"]`)?.classList.add('done');
}

async function runShadowing(){
  if(practiceRun){ stopPracticeRun(); return; }
  const run={stopped:false,timer:null};
  practiceRun=run;
  const button=$('[data-pr-action="shadow"]');
  button?.setAttribute('aria-pressed','true');
  if(button) button.querySelector('b').textContent='Stopp';
  const wait=seconds=>new Promise(resolve=>{ run.timer=setTimeout(resolve,seconds*1000); });
  while(!run.stopped){
    const info=practiceSessionInfo();
    if(!info) break;
    const repeat=Number(localStorage.getItem('shadowRepeat')||3);
    for(let round=0;round<repeat&&!run.stopped;round++){
      const stage=$('.pr-stage');
      stage?.classList.add('is-speaking');
      stage?.classList.remove('is-yourturn');
      const seconds=await practicePlay(info.sentence.de);
      if(run.stopped) return;
      // as long as the sentence, plus a moment to start
      const gap=Math.max(1.6,Math.min(10,seconds*1.15+.7));
      stage?.classList.remove('is-speaking');
      stage?.style.setProperty('--pr-gap',`${gap}s`);
      stage?.classList.add('is-yourturn');
      await wait(gap);
      stage?.classList.remove('is-yourturn');
      if(run.stopped) return;
    }
    markPracticeDone();
    if(localStorage.getItem('shadowAutoNext')==='0'||info.index>=info.chapter.sentences.length-1) break;
    gotoPracticeSentence(info.index+1,{keepRun:true});
    const next=$('[data-pr-action="shadow"]');
    next?.setAttribute('aria-pressed','true');
    if(next) next.querySelector('b').textContent='Stopp';
    await wait(.6);
  }
  if(practiceRun===run) stopPracticeRun();
}

function stopRecordingAndRecognition(){
  if(practiceRecorder&&practiceRecorder.state!=='inactive') practiceRecorder.stop();
  try{ practiceRecognition?.abort(); }catch{}
  practiceRecognition=null;
}

async function togglePracticeRecording(button){
  if(practiceRecorder&&practiceRecorder.state==='recording'){ practiceRecorder.stop(); return; }
  if(!navigator.mediaDevices?.getUserMedia||!window.MediaRecorder){
    $('#practiceResult').innerHTML='<p class="pr-warn" lang="ar" dir="rtl">المتصفح ده مش بيدعم التسجيل. جرّب كروم أو سفاري.</p>';
    return;
  }
  stopPracticeRun();
  let stream;
  try{ stream=await navigator.mediaDevices.getUserMedia({audio:true}); }
  catch{
    $('#practiceResult').innerHTML='<p class="pr-warn" lang="ar" dir="rtl">محتاج إذن الميكروفون عشان تسجّل. اسمح بيه من إعدادات المتصفح.</p>';
    return;
  }
  const chunks=[];
  const recorder=new MediaRecorder(stream);
  practiceRecorder=recorder;
  const stopTimer=setTimeout(()=>recorder.state==='recording'&&recorder.stop(),20000);
  recorder.ondataavailable=event=>event.data.size&&chunks.push(event.data);
  recorder.onstop=()=>{
    clearTimeout(stopTimer);
    stream.getTracks().forEach(track=>track.stop());
    button.setAttribute('aria-pressed','false');
    button.querySelector('b').textContent='Aufnehmen';
    if(practiceRecording) URL.revokeObjectURL(practiceRecording);
    practiceRecording=URL.createObjectURL(new Blob(chunks,{type:recorder.mimeType||'audio/webm'}));
    $('#practiceResult').innerHTML=`<div class="pr-compare"><b>Deine Aufnahme</b>
      <div class="pr-actions compact"><button type="button" class="pr-btn" data-pr-action="mine"><span>▶</span><b>Mich hören</b></button>
      <button type="button" class="pr-btn primary" data-pr-action="compare"><span>⇄</span><b>Vergleichen</b></button></div>
      <small lang="ar" dir="rtl">«Vergleichen» بيشغّل الأصل وبعده صوتك عشان تسمع الفرق.</small></div>`;
    markPracticeDone();
  };
  recorder.start();
  button.setAttribute('aria-pressed','true');
  button.querySelector('b').textContent='Stopp';
  $('#practiceResult').innerHTML='<p class="pr-recording">● Aufnahme läuft … sprich den Satz und tippe auf Stopp.</p>';
}

function playPracticeRecording(){
  if(!practiceRecording) return Promise.resolve();
  stopPracticeAudio();
  return new Promise(resolve=>{
    const audio=new Audio(practiceRecording);
    audio.onended=resolve;
    audio.onerror=resolve;
    audio.play().catch(resolve);
  });
}

function checkPronunciation(){
  const info=practiceSessionInfo();
  if(!info||!SpeechRecognitionApi) return;
  stopPracticeRun();
  stopRecordingAndRecognition();
  const recognition=new SpeechRecognitionApi();
  practiceRecognition=recognition;
  recognition.lang='de-DE';
  recognition.interimResults=false;
  recognition.maxAlternatives=4;
  const result=$('#practiceResult');
  result.innerHTML='<p class="pr-recording">● Ich höre zu … sprich jetzt den Satz.</p>';
  recognition.onresult=event=>{
    const alternatives=[...event.results[0]].map(item=>item.transcript);
    const scored=alternatives.map(text=>({text,...speakingScore(info.sentence.de,text)})).sort((a,b)=>b.score-a.score);
    const best=scored[0];
    markPracticeDone(best.score);
    const verdict=best.score>=90?'Sehr gut! 🎉':best.score>=70?'Gut – fast alles verstanden.':best.score>=40?'Noch einmal – achte auf die roten Wörter.':'Hör noch einmal langsam zu und versuch es wieder.';
    result.innerHTML=`<div class="pr-score"><b class="pr-score-num" style="--pr-score:${best.score/100}">${best.score}%</b><div><b>${verdict}</b>
      <p class="pr-heard">Gehört: „${escapeHtml(best.text)}“</p></div></div>
      <p class="pr-words">${best.words.map(word=>`<span class="${word.ok?'ok':'miss'}">${escapeHtml(word.word)}</span>`).join(' ')}</p>
      <small lang="ar" dir="rtl">الكلمات الحمرا ما اتفهمتش — اسمعها لوحدها (اضغط عليها) وكرّرها.</small>`;
  };
  recognition.onerror=event=>{
    result.innerHTML=`<p class="pr-warn" lang="ar" dir="rtl">${event.error==='not-allowed'?'محتاج إذن الميكروفون.':event.error==='no-speech'?'ما سمعتش حاجة. قرّب من الميكروفون وجرّب تاني.':'التعرّف على الكلام مش متاح دلوقتي (محتاج نت).'}</p>`;
  };
  recognition.onend=()=>{ if(practiceRecognition===recognition) practiceRecognition=null; };
  try{ recognition.start(); }catch{}
}

function checkDiktat(){
  const info=practiceSessionInfo();
  const input=$('#diktatInput');
  if(!info||!input) return;
  if(!input.value.trim()){ input.focus(); return; }
  const {score,words}=diktatCompare(info.sentence.de,input.value);
  markPracticeDone(score);
  const label={case:'Groß-/Kleinschreibung',typo:'Buchstabe falsch',wrong:'falsches Wort',missing:'fehlt',extra:'zu viel'};
  $('#practiceResult').innerHTML=`<div class="pr-score"><b class="pr-score-num" style="--pr-score:${score/100}">${score}%</b><div><b>${score===100?'Perfekt! 🎉':score>=80?'Sehr gut!':score>=50?'Gut – schau dir die Fehler an.':'Hör noch einmal langsam zu.'}</b></div></div>
    <p class="pr-words">${words.map(word=>word.status==='ok'?`<span class="ok">${escapeHtml(word.expected)}</span>`
      :word.status==='extra'?`<span class="extra" title="${label.extra}"><s>${escapeHtml(word.typed)}</s></span>`
      :word.status==='missing'?`<span class="miss" title="${label.missing}">${escapeHtml(word.expected)}</span>`
      :`<span class="${word.status}" title="${label[word.status]}"><s>${escapeHtml(word.typed)}</s> ${escapeHtml(word.expected)}</span>`).join(' ')}</p>
    <p class="pr-solution"><b>Lösung:</b> ${escapeHtml(info.sentence.de)}</p>
    ${info.sentence.ar?`<p class="pr-sentence-ar" lang="ar" dir="rtl">${escapeHtml(info.sentence.ar)}</p>`:''}
    <div class="pr-legend"><span class="ok">richtig</span><span class="case">Groß/klein</span><span class="typo">fast richtig</span><span class="miss">fehlt/falsch</span></div>`;
}

/* ---------- Meine Wörter: everything tapped for a translation ---------- */

function readMyWords(){
  try{
    const list=JSON.parse(localStorage.getItem(MY_WORDS_KEY)||'[]');
    return Array.isArray(list)?list:[];
  }catch{ return []; }
}

function rememberTappedWord(word,meaning,context){
  const text=String(word||'').trim();
  if(!text||!meaning||meaning==='…'||/[؀-ۿ]/.test(text)||text.split(/\s+/).length>3) return;
  const list=readMyWords().filter(item=>item.w.toLowerCase()!==text.toLowerCase());
  list.unshift({w:text,ar:meaning,ex:context&&context!==text?context.slice(0,220):'',at:Date.now()});
  try{ localStorage.setItem(MY_WORDS_KEY,JSON.stringify(list.slice(0,300))); }catch{}
}

function renderMyWords(){
  const list=readMyWords();
  setTop('Meine Wörter',`${list.length} angetippte Wörter`,true,'كلماتي');
  view.innerHTML=`${practiceHeader('Meine Wörter','Jedes Wort, das du antippst, landet hier – mit Bedeutung und dem Satz, in dem es stand.','كل كلمة بتضغط عليها عشان تترجمها بتتحفظ هنا مع معناها والجملة اللي كانت فيها.')}
    ${list.length?`<div class="pr-mywords-actions"><button type="button" class="next-primary" data-mw-action="review-all">Alle ins Review</button><button type="button" class="next-secondary" data-mw-action="clear">Liste leeren</button></div>
    <ul class="pr-mywords">${list.map((item,index)=>`<li>
      <button type="button" class="pr-mw-speak" data-mw-speak="${index}" aria-label="${escapeHtml(item.w)} anhören">🔊</button>
      <div><b lang="de">${escapeHtml(item.w)}</b><span lang="ar" dir="rtl">${escapeHtml(item.ar)}</span>${item.ex?`<small lang="de">${escapeHtml(item.ex)}</small>`:''}</div>
      <div class="pr-mw-buttons"><button type="button" data-mw-review="${index}" title="Ins Review">＋</button><button type="button" data-mw-remove="${index}" title="Entfernen">×</button></div>
    </li>`).join('')}</ul>`
    :`<div class="review-empty"><h2>Noch keine Wörter</h2><p>Tippe in einem Lesetext auf ein Wort – seine Übersetzung erscheint unten und das Wort wird hier gespeichert.</p><p lang="ar" dir="rtl">افتح أي نص قراءة واضغط على كلمة ألماني.</p></div>`}`;
}

function myWordReviewItem(item){
  return {id:`tap:${item.w.toLowerCase()}`,w:item.w,ar:item.ar,ex:item.ex||''};
}

document.addEventListener('click',event=>{
  const session=event.target.closest('.pr-session');
  if(session){
    const go_=event.target.closest('[data-pr-goto]');
    if(go_){ gotoPracticeSentence(Number(go_.dataset.prGoto)); return; }
    const key=event.target.closest('[data-pr-key]');
    if(key){
      const input=$('#diktatInput');
      const start=input.selectionStart??input.value.length,end=input.selectionEnd??input.value.length;
      input.setRangeText(key.dataset.prKey,start,end,'end');
      input.focus();
      return;
    }
    const button=event.target.closest('[data-pr-action]');
    if(!button) return;
    const info=practiceSessionInfo();
    const action=button.dataset.prAction;
    if(action==='play'){ stopPracticeRun(); practicePlay(info.sentence.de); }
    else if(action==='slow'){ stopPracticeRun(); practicePlay(info.sentence.de,{slow:true}); }
    else if(action==='shadow') runShadowing();
    else if(action==='record') togglePracticeRecording(button);
    else if(action==='check') checkPronunciation();
    else if(action==='mine') playPracticeRecording();
    else if(action==='compare') practicePlay(info.sentence.de).then(()=>new Promise(resolve=>setTimeout(resolve,400))).then(playPracticeRecording);
    else if(action==='hide'){
      const hidden=localStorage.getItem('shadowHideText')!=='1';
      localStorage.setItem('shadowHideText',hidden?'1':'0');
      $('.pr-stage')?.classList.toggle('text-hidden',hidden);
      button.setAttribute('aria-pressed',String(hidden));
      button.querySelector('b').textContent=hidden?'Text zeigen':'Text verstecken';
    }
    else if(action==='prev') gotoPracticeSentence(info.index-1);
    else if(action==='next') gotoPracticeSentence(info.index+1);
    else if(action==='hint'){
      const hint=$('#diktatHint');
      hint.textContent=practiceWords(info.sentence.de).map(word=>word[0]+'·'.repeat(Math.max(0,word.length-1))).join('  ');
      hint.hidden=false;
    }
    else if(action==='diktat-check') checkDiktat();
    return;
  }
  const speak=event.target.closest('[data-mw-speak]');
  if(speak){ speakText(readMyWords()[Number(speak.dataset.mwSpeak)]?.w||'','de'); return; }
  const review=event.target.closest('[data-mw-review]');
  if(review){ const item=readMyWords()[Number(review.dataset.mwReview)]; if(item) window.NextUI?.addWordsToReview([myWordReviewItem(item)],'Meine Wörter'); return; }
  const remove=event.target.closest('[data-mw-remove]');
  if(remove){
    const list=readMyWords();list.splice(Number(remove.dataset.mwRemove),1);
    try{ localStorage.setItem(MY_WORDS_KEY,JSON.stringify(list)); }catch{}
    renderMyWords();return;
  }
  const action=event.target.closest('[data-mw-action]')?.dataset.mwAction;
  if(action==='review-all') window.NextUI?.addWordsToReview(readMyWords().map(myWordReviewItem),'Meine Wörter');
  if(action==='clear'&&confirm('Alle gespeicherten Wörter löschen?')){ localStorage.removeItem(MY_WORDS_KEY); renderMyWords(); }
});

document.addEventListener('change',event=>{
  if(event.target.matches('[data-pr-repeat]')) localStorage.setItem('shadowRepeat',event.target.value);
  if(event.target.matches('[data-pr-autonext]')) localStorage.setItem('shadowAutoNext',event.target.checked?'1':'0');
});

document.addEventListener('keydown',event=>{
  if(event.target.id==='diktatInput'&&event.key==='Enter'&&!event.shiftKey){ event.preventDefault(); checkDiktat(); }
});

window.addEventListener('hashchange',()=>{
  stopPracticeRun();
  stopRecordingAndRecognition();
});

// Router entry: practice, practice/<mode>/<level>, practice/<mode>/<level>/<chapter>, my-words.
function routePractice(hash){
  if(hash==='practice'){ renderPracticeHub(); return true; }
  if(hash==='my-words'){ renderMyWords(); return true; }
  if(/^practice\/dialog(\/|$)/.test(hash)) return routeRolePlay(hash);
  const match=hash.match(/^practice\/(shadow|diktat)(?:\/(a1|a2|b1)(?:\/(\d+))?)?$/);
  if(!match) return false;
  const level=match[2]||practiceLevelOf(window.NextUI?.state().profile.level||'a2');
  if(match[3]) renderPracticeSession(match[1],level,Number(match[3]));
  else renderPracticeChapters(match[1],level);
  return true;
}
