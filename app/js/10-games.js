/* ===================== learning games ===================== */
let gameTimerId=null;
let gameDelayId=null;
let speedState=null;
let memoryState=null;
let artikelState=null;
let sentenceState=null;

function stopGameTimers(){
  if(gameTimerId){ clearInterval(gameTimerId); gameTimerId=null; }
  if(gameDelayId){ clearTimeout(gameDelayId); gameDelayId=null; }
}

function shuffled(items){
  const result=[...items];
  for(let i=result.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [result[i],result[j]]=[result[j],result[i]];
  }
  return result;
}

function plainText(value){
  const node=document.createElement('div');
  node.innerHTML=String(value||'');
  return (node.textContent||'').replace(/\s+/g,' ').trim();
}

let gameLevel='a2';

function gameBook(){
  return gameLevel==='b1.1'?B1_BOOK:BOOK;
}

function gameRoute(id=''){
  const base=gameLevel==='b1.1'?'b1.1/games':'games';
  return id?`${base}/${id}`:base;
}

function gameTabs(){
  return window.NextUI?.featureTabs(gameLevel,'games')||'';
}

function gameChapterOptions(includeAll=true){
  const book=gameBook();
  return `${includeAll?`<option value="all">Alle Kapitel 1–${book.length}</option>`:''}`+
    book.map(chapter=>`<option value="${chapter.num}">Kapitel ${chapter.num}: ${chapter.title}</option>`).join('');
}

function gameScoresKey(){
  return gameLevel==='b1.1'?'b1GameBestScores':'a2GameBestScores';
}

function gameBestScores(){
  try{return JSON.parse(localStorage.getItem(gameScoresKey())||'{}');}
  catch{return {};}
}

function saveGameBest(id,score){
  const scores=gameBestScores();
  scores[id]=Math.max(Number(scores[id]||0),score);
  localStorage.setItem(gameScoresKey(),JSON.stringify(scores));
  return scores[id];
}

function renderGamesHome(){
  setTop(`Practice Lab ${gameLevel==='b1.1'?'B1.1':'A2'}`,'Gezielt trainieren · sicherer anwenden',false);
  const best=gameBestScores();
  document.body.classList.add('has-back');
  view.innerHTML=gameTabs()+`
    <section class="card games-hero">
      <span class="next-hero-eyebrow">Practice Lab</span><h2>Kurze, fokussierte Trainingseinheiten</h2>
      <p>Trainiere Wortschatz, Satzbau und Grammatik in kompakten Sessions. Fehler werden automatisch für deine nächste Wiederholung vorgemerkt.</p>
      ${ar('ألعاب قصيرة من كلمات الدروس وجملها وأسئلة القواعد. كل محاولة جديدة بتخلط المحتوى عشان تفتكر المعنى، مش ترتيب الإجابات.')}
      <div class="game-best-row">
        <span class="game-best">Bestscore: ${best.speed||0}</span>
        <span class="game-best">Memory: ${best.memory?best.memory+' Züge':'noch offen'}</span>
        <span class="game-best">Artikel: ${best.artikel||0}</span>
        <span class="game-best">Sätze: ${best.sentence||0}</span>
      </div>
    </section>
    <div class="game-grid">
      <button type="button" class="card game-tile" onclick="go(gameRoute('speed'))">
        <div class="game-icon">01</div><h3>Schnell-Challenge</h3>
        <p>Vier Antworten, laufende Zeit und mehr Punkte für schnelle richtige Antworten.</p>
        <span class="game-tag">Fokus · gemischte Fragen</span>
      </button>
      <button type="button" class="card game-tile" onclick="go(gameRoute('memory'))">
        <div class="game-icon">02</div><h3>Memory Match</h3>
        <p>Finde die passenden Paare aus deutschem Wort und Bedeutung.</p>
        <span class="game-tag">12 Karten · 6 Paare</span>
      </button>
      <button type="button" class="card game-tile" onclick="go(gameRoute('artikel'))">
        <div class="game-icon">03</div><h3>Artikel-Challenge</h3>
        <p>Wähle den richtigen Artikel und trainiere das Genus der Nomen.</p>
        <span class="game-tag">10 Wörter pro Runde</span>
      </button>
      <button type="button" class="card game-tile" onclick="go(gameRoute('sentence'))">
        <div class="game-icon">04</div><h3>Satz-Puzzle</h3>
        <p>Bringe die Wörter aus den Redemitteln wieder in die richtige Reihenfolge.</p>
        <span class="game-tag">Sprechen · Satzbau</span>
      </button>
    </div>`;
}

function renderGame(id){
  setTop('Spiele',id==='speed'?'Schnell-Challenge':id==='memory'?'Memory Match':
    id==='artikel'?'Artikel-Challenge':'Satz-Puzzle',true);
  if(id==='speed') renderSpeedSetup();
  if(id==='memory') renderMemorySetup();
  if(id==='artikel') renderArtikelSetup();
  if(id==='sentence') renderSentenceSetup();
}

function gameSetupCard(title,description,action,extra=''){
  return gameTabs()+`<section class="card game-setup">
    <h2>${title}</h2><p style="color:var(--ink-2);margin-top:5px">${description}</p>
    <label for="gameChapter">Kapitel auswählen</label>
    <select class="game-select" id="gameChapter">${gameChapterOptions()}</select>
    ${extra}
    <div class="game-actions"><button type="button" class="btn btn-green" onclick="${action}">Spiel starten</button></div>
  </section>`;
}

function selectedGameChapters(){
  const selected=$('#gameChapter')?.value||'all';
  const book=gameBook();
  return selected==='all'?book:book.filter(chapter=>String(chapter.num)===selected);
}

function wordLabel(value){
  return String(value||'').replace(/^(der|die|das)\s+/i,'').replace(/,\s*[-–—\wÄÖÜäöüß.]+.*$/,'').trim();
}

function uniqueOptions(correct,candidates){
  const clean=String(correct).trim();
  const options=[clean];
  shuffled(candidates).forEach(item=>{
    const value=String(item||'').trim();
    if(value&&!options.some(current=>current.toLocaleLowerCase('de-DE')===value.toLocaleLowerCase('de-DE'))&&options.length<4){
      options.push(value);
    }
  });
  return shuffled(options).map(text=>({text,correct:text===clean}));
}

const CONNECTOR_GAME_QUESTIONS=[
  {chapter:1,q:'Ich bleibe heute zu Hause, ___ ich krank bin.',answer:'weil',o:['weil','deshalb','trotzdem','dann']},
  {chapter:1,q:'Ich bin krank. ___ bleibe ich zu Hause.',answer:'Deshalb',o:['Deshalb','Weil','Obwohl','Dass']},
  {chapter:3,q:'Wir wissen noch nicht, ___ wir die Prüfung bestanden haben.',answer:'ob',o:['ob','weil','denn','als']},
  {chapter:4,q:'___ ich klein war, wohnte ich auf dem Land.',answer:'Als',o:['Als','Wenn','Ob','Damit']},
  {chapter:5,q:'Ich lerne jeden Tag, ___ ich die Prüfung bestehe.',answer:'damit',o:['damit','obwohl','sondern','sonst']},
  {chapter:6,q:'Nimm einen Schirm mit, ___ wirst du nass.',answer:'sonst',o:['sonst','weil','dass','als']},
  {chapter:7,q:'Können Sie mir sagen, ___ der Zug abfährt?',answer:'wann',o:['wann','denn','trotzdem','sondern']},
  {chapter:8,q:'Ich treibe Sport, ___ ich wenig Zeit habe.',answer:'obwohl',o:['obwohl','deshalb','damit','ob']},
  {chapter:9,q:'Sie übt viel, ___ sie sicherer sprechen kann.',answer:'damit',o:['damit','weil','sondern','als']},
  {chapter:10,q:'Ich glaube, ___ gute Nachbarn wichtig sind.',answer:'dass',o:['dass','denn','sonst','wenn']},
  {chapter:11,q:'___ ich Zeit habe, höre ich gern Musik.',answer:'Wenn',o:['Wenn','Als','Ob','Deshalb']},
  {chapter:12,q:'Wir fahren ans Meer, ___ das Wetter schön ist.',answer:'wenn',o:['wenn','obwohl','sondern','dass']}
];

function buildSpeedPool(chapters){
  const pool=[];
  const allWords=chapters.flatMap(chapter=>chapter.vocab.map(item=>item.w));
  const allDefs=chapters.flatMap(chapter=>chapter.vocab.map(item=>plainText(item.d)));
  chapters.forEach(chapter=>{
    chapter.vocab.forEach(item=>{
      pool.push({
        kind:`Kapitel ${chapter.num} · Wortschatz`,
        q:`Welches Wort passt? „${plainText(item.d)}“`,
        options:uniqueOptions(item.w,allWords)
      });
      const match=String(item.w).match(/^(der|die|das)\s+(.+)/i);
      if(match){
        pool.push({
          kind:`Kapitel ${chapter.num} · Artikel`,
          q:`Welcher Artikel passt zu „${wordLabel(item.w)}“?`,
          options:uniqueOptions(match[1].toLowerCase(),['der','die','das','-'])
        });
      }
      const answer=wordLabel(item.w).replace(/^sich\s+/i,'');
      const example=plainText(item.ex);
      if(answer.length>3&&example&&new RegExp(`\\b${answer.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')}\\b`,'i').test(example)){
        pool.push({
          kind:`Kapitel ${chapter.num} · Lückensatz`,
          q:example.replace(new RegExp(`\\b${answer.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')}\\b`,'i'),'___'),
          options:uniqueOptions(answer,allWords.map(wordLabel))
        });
      }
    });
    (chapter.quiz||[]).forEach(question=>{
      const answer=plainText(question.o[question.a]);
      pool.push({
        kind:`Kapitel ${chapter.num} · Grammatik`,
        q:plainText(question.q),
        options:uniqueOptions(answer,[...question.o.map(plainText),...allDefs])
      });
    });
  });
  const chapterNumbers=new Set(chapters.map(chapter=>chapter.num));
  CONNECTOR_GAME_QUESTIONS.filter(item=>chapters.every(chapter=>BOOK.includes(chapter))&&chapterNumbers.has(item.chapter)).forEach(item=>{
    pool.push({
      kind:`Kapitel ${item.chapter} · Konnektor`,
      q:item.q,
      options:uniqueOptions(item.answer,item.o)
    });
  });
  return pool.filter(item=>item.options.length===4);
}

function renderSpeedSetup(){
  view.innerHTML=gameSetupCard(
    'Schnell-Challenge',
    'Beantworte jede Frage, bevor die Zeit abläuft. Je schneller die richtige Antwort, desto höher der Score.',
    'startSpeedGame()',
    `<label for="speedCount">Anzahl der Fragen</label>
     <select class="game-select" id="speedCount"><option>10</option><option>15</option><option>20</option></select>
     <label for="speedTime">Zeit pro Frage</label>
     <select class="game-select" id="speedTime"><option value="15">15 Sekunden</option><option value="10">10 Sekunden</option><option value="20">20 Sekunden</option></select>`
  );
}

function startSpeedGame(){
  const chapters=selectedGameChapters();
  const count=Number($('#speedCount').value);
  const seconds=Number($('#speedTime').value);
  speedState={questions:shuffled(buildSpeedPool(chapters)).slice(0,count),index:0,score:0,correct:0,
    streak:0,bestStreak:0,seconds,timeLeft:seconds,locked:false};
  drawSpeedQuestion();
}

function drawSpeedQuestion(){
  stopGameTimers();
  const state=speedState;
  if(!state||state.index>=state.questions.length){ finishSpeedGame(); return; }
  const question=state.questions[state.index];
  state.timeLeft=state.seconds;
  state.locked=false;
  view.innerHTML=gameTabs()+`<section class="speed-stage">
    <div class="game-play-head">
      <div class="game-progress"><span style="width:${state.index/state.questions.length*100}%"></span></div>
      <span class="game-counter">${state.index+1} / ${state.questions.length}</span>
    </div>
    <div class="speed-meta"><span class="speed-score">Score: <span id="liveScore">${state.score}</span></span>
      <span class="speed-timer" id="speedTimer">${state.timeLeft}</span></div>
    <article class="card">
      <div class="speed-kind">${question.kind}</div>
      <div class="speed-question">${escapeHtml(question.q)}</div>
      <div class="speed-options">${question.options.map((option,index)=>`
        <button type="button" class="speed-option" data-index="${index}" onclick="answerSpeed(${index})">${escapeHtml(option.text)}</button>`).join('')}</div>
      <div class="speed-feedback" id="speedFeedback" role="status" aria-live="polite"></div>
    </article>
  </section>`;
  gameTimerId=setInterval(()=>{
    state.timeLeft--;
    const timer=$('#speedTimer');
    if(timer){
      timer.textContent=state.timeLeft;
      timer.classList.toggle('urgent',state.timeLeft<=5);
    }
    if(state.timeLeft<=0) answerSpeed(-1);
  },1000);
}

function answerSpeed(index){
  const state=speedState;
  if(!state||state.locked)return;
  state.locked=true;
  if(gameTimerId){clearInterval(gameTimerId);gameTimerId=null;}
  const question=state.questions[state.index];
  const correctIndex=question.options.findIndex(option=>option.correct);
  const isCorrect=index===correctIndex;
  const buttons=$$('.speed-option');
  buttons[correctIndex]?.classList.add('correct');
  if(isCorrect){
    const gained=500+Math.round((state.timeLeft/state.seconds)*500);
    state.score+=gained;
    state.correct++;
    state.streak++;
    state.bestStreak=Math.max(state.bestStreak,state.streak);
    $('#speedFeedback').textContent=`Richtig! +${gained} Punkte`;
    $('#liveScore').textContent=state.score;
  }else{
    state.streak=0;
    if(index>=0)buttons[index]?.classList.add('wrong');
    $('#speedFeedback').textContent=index<0?'Zeit abgelaufen!':'Nicht ganz. Die richtige Antwort ist markiert.';
    window.NextUI?.addMistake({prompt:question.q,answer:question.options[correctIndex].text,context:`Practice Lab · ${question.kind}`});
  }
  buttons.forEach(button=>button.disabled=true);
  gameDelayId=setTimeout(()=>{state.index++;drawSpeedQuestion();},1200);
}

function finishSpeedGame(){
  stopGameTimers();
  const state=speedState;
  const best=saveGameBest('speed',state.score);
  const accuracy=Math.round(state.correct/state.questions.length*100);
  view.innerHTML=gameTabs()+`<section class="card game-result">
    <div class="result-medal">${accuracy>=90?'🏆':accuracy>=60?'⭐':'↻'}</div>
    <h2>Runde beendet</h2><div class="result-score">${state.score} Punkte</div>
    <p>Bestscore: <b>${best}</b></p>
    <div class="result-stats">
      <div class="result-stat"><b>${state.correct}/${state.questions.length}</b><small>richtig</small></div>
      <div class="result-stat"><b>${accuracy}%</b><small>Genauigkeit</small></div>
      <div class="result-stat"><b>${state.bestStreak}</b><small>beste Serie</small></div>
    </div>
    <div class="game-actions"><button class="btn btn-green" onclick="renderSpeedSetup()">Noch einmal</button>
      <button class="btn btn-ghost" onclick="go(gameRoute())">Alle Spiele</button></div>
  </section>`;
}

function renderMemorySetup(){
  view.innerHTML=gameSetupCard('Memory Match','Finde sechs Wort-Bedeutung-Paare mit möglichst wenigen Zügen.','startMemoryGame()');
}

function startMemoryGame(){
  const vocab=shuffled(selectedGameChapters().flatMap(chapter=>chapter.vocab)).slice(0,6);
  const cards=shuffled(vocab.flatMap((item,pair)=>[
    {pair,text:item.w,type:'Wort'},{pair,text:plainText(item.d),type:'Bedeutung'}
  ]));
  memoryState={cards,revealed:[],matched:new Set(),moves:0,locked:false};
  drawMemoryGame();
}

function drawMemoryGame(){
  const state=memoryState;
  view.innerHTML=gameTabs()+`<section>
    <div class="game-play-head"><div class="game-progress"><span style="width:${state.matched.size/6*100}%"></span></div>
      <span class="game-counter">${state.moves} Züge</span></div>
    <div class="memory-board">${state.cards.map((card,index)=>{
      const shown=state.revealed.includes(index)||state.matched.has(card.pair);
      return `<button type="button" class="memory-card ${shown?'revealed':''} ${state.matched.has(card.pair)?'matched':''}"
        onclick="flipMemory(${index})" ${state.matched.has(card.pair)?'disabled':''}>
        ${shown?`${escapeHtml(card.text)}<small>${card.type}</small>`:'?'}</button>`;
    }).join('')}</div>
  </section>`;
}

function flipMemory(index){
  const state=memoryState;
  if(state.locked||state.revealed.includes(index)||state.matched.has(state.cards[index].pair))return;
  state.revealed.push(index);
  drawMemoryGame();
  if(state.revealed.length<2)return;
  state.moves++;
  const [first,second]=state.revealed;
  if(state.cards[first].pair===state.cards[second].pair){
    state.matched.add(state.cards[first].pair);
    state.revealed=[];
    drawMemoryGame();
    if(state.matched.size===6) gameDelayId=setTimeout(finishMemoryGame,450);
  }else{
    state.locked=true;
    gameDelayId=setTimeout(()=>{state.revealed=[];state.locked=false;drawMemoryGame();},850);
  }
}

function finishMemoryGame(){
  const moves=memoryState.moves;
  const scores=gameBestScores();
  scores.memory=scores.memory?Math.min(scores.memory,moves):moves;
  localStorage.setItem(gameScoresKey(),JSON.stringify(scores));
  view.innerHTML=gameTabs()+`<section class="card game-result">
    <div class="result-medal">▦</div><h2>Alle Paare gefunden</h2>
    <div class="result-score">${moves} Züge</div><p>Dein Rekord: <b>${scores.memory} Züge</b></p>
    <div class="game-actions"><button class="btn btn-green" onclick="startMemoryGame()">Neue Karten</button>
      <button class="btn btn-ghost" onclick="go(gameRoute())">Alle Spiele</button></div></section>`;
}

function renderArtikelSetup(){
  view.innerHTML=gameSetupCard('Artikel-Challenge','Trainiere der, die und das mit Nomen direkt aus den Kapiteln.','startArtikelGame()');
}

function startArtikelGame(){
  const words=selectedGameChapters().flatMap(chapter=>chapter.vocab)
    .map(item=>({item,match:String(item.w).match(/^(der|die|das)\s+(.+)/i)}))
    .filter(entry=>entry.match);
  artikelState={questions:shuffled(words).slice(0,10),index:0,score:0,locked:false};
  drawArtikelQuestion();
}

function drawArtikelQuestion(){
  stopGameTimers();
  const state=artikelState;
  if(state.index>=state.questions.length){finishArtikelGame();return;}
  const entry=state.questions[state.index];
  state.locked=false;
  view.innerHTML=gameTabs()+`<section class="card game-setup">
    <div class="game-play-head"><div class="game-progress"><span style="width:${state.index/state.questions.length*100}%"></span></div>
      <span class="game-counter">${state.index+1} / ${state.questions.length}</span></div>
    <div class="artikel-word">${escapeHtml(wordLabel(entry.item.w))}</div>
    <div class="artikel-options">${['der','die','das'].map(article=>`<button type="button" class="artikel-option"
      onclick="answerArtikel('${article}')">${article}</button>`).join('')}</div>
    <div class="speed-feedback" id="artikelFeedback" role="status" aria-live="polite"></div>
  </section>`;
}

function answerArtikel(article){
  const state=artikelState;
  if(state.locked)return;
  state.locked=true;
  const answer=state.questions[state.index].match[1].toLowerCase();
  $$('.artikel-option').forEach(button=>{
    if(button.textContent===answer)button.classList.add('correct');
    if(button.textContent===article&&article!==answer)button.classList.add('wrong');
    button.disabled=true;
  });
  if(article===answer){state.score++;$('#artikelFeedback').textContent='Richtig!';}
  else {
    $('#artikelFeedback').textContent=`Richtig ist: ${answer}`;
    const item=state.questions[state.index].item;
    window.NextUI?.addMistake({prompt:wordLabel(item.w),answer:`${answer} ${wordLabel(item.w)}`,context:'Practice Lab · Artikel'});
  }
  gameDelayId=setTimeout(()=>{state.index++;drawArtikelQuestion();},850);
}

function finishArtikelGame(){
  const state=artikelState;
  saveGameBest('artikel',state.score);
  view.innerHTML=gameTabs()+`<section class="card game-result">
    <div class="result-medal">${state.score>=9?'🏆':'der·die·das'}</div><h2>Fertig!</h2>
    <div class="result-score">${state.score} / ${state.questions.length}</div>
    <div class="game-actions"><button class="btn btn-green" onclick="startArtikelGame()">Noch einmal</button>
      <button class="btn btn-ghost" onclick="go(gameRoute())">Alle Spiele</button></div></section>`;
}

function renderSentenceSetup(){
  view.innerHTML=gameSetupCard('Satz-Puzzle','Ordne die Wörter aus wichtigen Redemitteln. Satzzeichen bleiben am Wort.','startSentenceGame()');
}

function startSentenceGame(){
  const sentences=selectedGameChapters().flatMap(chapter=>chapter.redemittel.flatMap(group=>group.items))
    .filter(item=>plainText(item.de).split(' ').length>=5&&plainText(item.de).split(' ').length<=12);
  sentenceState={questions:shuffled(sentences).slice(0,5),index:0,score:0,selected:[],tokens:[]};
  prepareSentenceQuestion();
}

function prepareSentenceQuestion(){
  const state=sentenceState;
  if(state.index>=state.questions.length){finishSentenceGame();return;}
  const sentence=plainText(state.questions[state.index].de);
  state.tokens=shuffled(sentence.split(' ').map((text,id)=>({id,text})));
  if(state.tokens.map(token=>token.text).join(' ')===sentence)state.tokens.reverse();
  state.selected=[];
  drawSentenceQuestion();
}

function drawSentenceQuestion(message=''){
  const state=sentenceState;
  view.innerHTML=gameTabs()+`<section class="card game-setup">
    <div class="game-play-head"><div class="game-progress"><span style="width:${state.index/state.questions.length*100}%"></span></div>
      <span class="game-counter">${state.index+1} / ${state.questions.length}</span></div>
    <p style="text-align:center;color:var(--ink-2)">Baue den richtigen Satz:</p>
    <div class="sentence-zone">${state.selected.map(id=>{
      const token=state.tokens.find(item=>item.id===id);
      return `<button class="word-chip selected" onclick="toggleSentenceToken(${id})">${escapeHtml(token.text)}</button>`;
    }).join('')}</div>
    <div class="sentence-source">${state.tokens.filter(token=>!state.selected.includes(token.id)).map(token=>
      `<button class="word-chip" onclick="toggleSentenceToken(${token.id})">${escapeHtml(token.text)}</button>`).join('')}</div>
    <div class="speed-feedback" id="sentenceFeedback">${message}</div>
    <div class="game-actions"><button class="btn btn-green" onclick="checkSentence()">Prüfen</button>
      <button class="btn btn-ghost" onclick="clearSentence()">Neu ordnen</button></div>
  </section>`;
}

function toggleSentenceToken(id){
  const selected=sentenceState.selected;
  const index=selected.indexOf(id);
  if(index>=0)selected.splice(index,1);else selected.push(id);
  drawSentenceQuestion();
}

function clearSentence(){sentenceState.selected=[];drawSentenceQuestion();}

function checkSentence(){
  const state=sentenceState;
  if(state.selected.length!==state.tokens.length){drawSentenceQuestion('Benutze zuerst alle Wörter.');return;}
  const built=state.selected.map(id=>state.tokens.find(token=>token.id===id).text).join(' ');
  const answer=plainText(state.questions[state.index].de);
  if(built===answer){
    state.score++;
    state.index++;
    gameDelayId=setTimeout(prepareSentenceQuestion,550);
    drawSentenceQuestion('Richtig!');
  }else drawSentenceQuestion('Noch nicht richtig. Versuche eine andere Reihenfolge.');
}

function finishSentenceGame(){
  const state=sentenceState;
  saveGameBest('sentence',state.score);
  view.innerHTML=gameTabs()+`<section class="card game-result">
    <div class="result-medal">✓</div><h2>Sehr gut!</h2><div class="result-score">${state.score} / ${state.questions.length}</div>
    <div class="game-actions"><button class="btn btn-green" onclick="startSentenceGame()">Neue Sätze</button>
      <button class="btn btn-ghost" onclick="go(gameRoute())">Alle Spiele</button></div></section>`;
}
