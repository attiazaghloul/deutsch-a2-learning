/* ===================== conversation situations ===================== */
/* Model dialogues per chapter (B1.1: data_b1_1_conversations.js), shown in
   the Sprechen tab with line-by-line playback in alternating voices. */
let dialoguePlayback=0;

function conversationsHtml(chapter){
  const situations=chapter.conversations||[];
  if(!situations.length) return '';
  return `<div class="section-label">💬 Gesprächssituationen</div>
    ${ar('مواقف من الحياة اليومية: اسمع الحوار، كرر الجمل، وبعدين اعمل المهمة بنفسك.')}
    ${situations.map((item,index)=>`
    <article class="card conversation-card">
      <div class="conversation-head">
        <div><h3>${escapeHtml(item.situation)}</h3>${ar(escapeHtml(item.situationAr))}</div>
        <button type="button" class="conversation-play" onclick="playDialogue(${chapter.num},${index},this)" aria-label="Dialog anhören">▶ Dialog</button>
      </div>
      <div class="conversation-lines">${item.dialogue.map((line,lineIndex)=>`
        <div class="conversation-line ${lineIndex%2?'right':'left'}" data-line="${lineIndex}">
          <span class="conversation-speaker">${escapeHtml(line.s)}</span>
          <p>${escapeHtml(line.de)}</p>${ar(escapeHtml(line.ar))}
        </div>`).join('')}</div>
      <details class="conversation-phrases"><summary>Nützliche Sätze (${item.phrases.length})</summary>
        ${item.phrases.map(phrase=>`<div class="rm-item">${escapeHtml(phrase.de)}${ar(escapeHtml(phrase.ar))}</div>`).join('')}
      </details>
      <div class="conversation-task"><b>Deine Aufgabe:</b> ${escapeHtml(item.task)}${ar(escapeHtml(item.taskAr))}</div>
    </article>`).join('')}`;
}

function speakDialogueLine(text,voiceIndex,onDone){
  const fixedVoices=FIXED_SPEECH.voices||[];
  const fixedVoice=fixedVoices.length?fixedVoices[voiceIndex%fixedVoices.length].id:speechVoiceURI;
  if(playFixedSpeech(text,fixedVoice,onDone)) return;
  if(!window.speechSynthesis){onDone();return;}
  const utterance=new SpeechSynthesisUtterance(text);
  const voices=germanVoices();
  utterance.lang='de-DE';
  if(voices.length) utterance.voice=voices[voiceIndex%voices.length];
  utterance.rate=Math.max(.6,Math.min(1.3,speechRate/.85));
  utterance.onend=onDone;
  utterance.onerror=onDone;
  window.speechSynthesis.speak(utterance);
}

function playDialogue(chapterNum,index,button){
  const chapter=[...A1_BOOK,...BOOK,...B1_BOOK].find(item=>item.num===chapterNum&&item.conversations?.[index]);
  const item=chapter?.conversations?.[index];
  if(!item) return;
  const session=++dialoguePlayback;
  stopFixedSpeech();
  window.speechSynthesis?.cancel();
  const card=button.closest('.conversation-card');
  const speakers=[...new Set(item.dialogue.map(line=>line.s))];
  const lines=card.querySelectorAll('.conversation-line');
  const playing=button.classList.toggle('playing');
  if(!playing){ dialoguePlayback++; lines.forEach(line=>line.classList.remove('active')); button.textContent='▶ Dialog'; return; }
  button.textContent='■ Stopp';
  const step=lineIndex=>{
    lines.forEach(line=>line.classList.toggle('active',Number(line.dataset.line)===lineIndex));
    if(session!==dialoguePlayback) return;
    if(lineIndex>=item.dialogue.length){button.classList.remove('playing');button.textContent='▶ Dialog';return;}
    const line=item.dialogue[lineIndex];
    speakDialogueLine(line.de,speakers.indexOf(line.s),()=>setTimeout(()=>step(lineIndex+1),350));
  };
  step(0);
}
