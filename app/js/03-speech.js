/* ===================== speech ===================== */
const speech = window.speechSynthesis;
const listenToggle = $('#listenToggle');
let speechStatusTimer = null;
let fixedSpeechAudio = null;
let fixedSpeechFrame = null;
let fixedSpeechSession = 0;

function cleanSpeechText(element){
  const copy=element.cloneNode(true);
  copy.querySelectorAll('.ar,.speak-btn,.answer-btn,.exercise-actions,.qicon,.badge,.cnt,.hint,input,select,button').forEach(node=>node.remove());
  return prepareSpeechText(copy.textContent,{
    vocabulary:element.matches('.w,.dictionary-word,.verb-inf,.verb-perfect,.flashcard .big')
  });
}

function prepareSpeechText(text,{vocabulary=false}={}){
  let value=(text||'')
    .replace(/[\u{1F000}-\u{1FAFF}\u2600-\u27BF]/gu,' ')
    .replace(/[•·●▪◦◆◇■□▲△▶►◀◄★☆✓✔✕✖]/g,' ')
    .replace(/[←→↔↗↘↑↓⟵⟶]/g,' ')
    .replace(/\s+/g,' ')
    .trim();
  if(vocabulary){
    value=value
      .replace(/\s*,.*$/,'')
      .replace(/\s+\((?:Sg\.|Pl\.|\+\s*[ADG]\.?)\)\s*$/i,'')
      .replace(/\s+/g,' ')
      .trim();
  }
  return value
}

function showSpeechStatus(text){
  const status=$('#speechStatus');
  status.textContent=`🔊 ${text}`;
  status.classList.add('show');
  clearTimeout(speechStatusTimer);
  speechStatusTimer=setTimeout(()=>status.classList.remove('show'),2600);
}

function normalizeSpeechValue(text){
  return prepareSpeechText(text)
    .replace(/\bUmlaute\s+\u00e4,\s*\u00f6,\s*\u00fc/gi, 'Umlaute')
    .trim();
}

function stopFixedSpeech(){
  fixedSpeechSession++;
  if(fixedSpeechFrame){ cancelAnimationFrame(fixedSpeechFrame); fixedSpeechFrame=null; }
  if(fixedSpeechAudio){ fixedSpeechAudio.pause(); }
}

function fixedSpeechProfileRate(){
  return {clear:1,calm:.86,deep:.92,bright:1.08}[speechProfile]||1;
}

function findFixedSpeechClip(value,voiceId){
  const libraries=[
    {id:'a2', data:FIXED_SPEECH, index:FIXED_SPEECH_INDEX},
    {id:'a1', data:A1_FIXED_SPEECH, index:A1_FIXED_SPEECH_INDEX},
    {id:'b1', data:B1_FIXED_SPEECH, index:B1_FIXED_SPEECH_INDEX}
  ];
  for(const library of libraries){
    const voice=library.data.voices?.find(item=>item.id===voiceId)||library.data.voices?.[0];
    const aliasIndex=library.data.aliases?.texts?.indexOf(value)??-1;
    const aliasVoice=library.data.aliases?.voices?.find(item=>item.id===voice?.id);
    if(aliasIndex>=0&&aliasVoice?.timings?.[aliasIndex]&&aliasVoice.audio){
      return {library:library.id, voice, timing:aliasVoice.timings[aliasIndex], audioSource:aliasVoice.audio, kind:'aliases'};
    }
    const textIndex=library.index.get(value);
    if(textIndex!==undefined&&voice?.timings?.[textIndex]&&voice.audio){
      return {library:library.id, voice, timing:voice.timings[textIndex], audioSource:voice.audio, kind:'main'};
    }
  }
  return null;
}

function playFixedSpeech(value,voiceId=speechVoiceURI,onDone=null){
  const clip=findFixedSpeechClip(value,voiceId);
  if(!clip)return false;
  const {library, voice, timing, audioSource, kind}=clip;
  stopFixedSpeech();
  speech?.cancel();
  const session=++fixedSpeechSession;
  const audioKey=`${library}:${voice.id}:${kind}`;
  if(!fixedSpeechAudio||fixedSpeechAudio.dataset.voice!==audioKey){
    fixedSpeechAudio?.pause();
    fixedSpeechAudio=new Audio(audioSource);
    fixedSpeechAudio.dataset.voice=audioKey;
    fixedSpeechAudio.preload='metadata';
  }
  const start=Number(timing[0]);
  // Older libraries end 60 ms after the final word boundary. The rebuilt A2
  // vocabulary aliases are already trimmed during generation.
  const legacyMarkerPadding=library==='a2'&&kind==='aliases'?0:.085;
  const end=Math.max(start+.12,Number(timing[1])-legacyMarkerPadding);
  fixedSpeechAudio.playbackRate=Math.max(.6,Math.min(1.5,(speechRate/.85)*fixedSpeechProfileRate()));
  fixedSpeechAudio.preservesPitch=true;
  const begin=()=>{
    if(session!==fixedSpeechSession)return;
    fixedSpeechAudio.currentTime=start;
    fixedSpeechAudio.play().then(()=>{
      const monitor=()=>{
        if(session!==fixedSpeechSession||fixedSpeechAudio.paused)return;
        if(fixedSpeechAudio.currentTime>=end){
          fixedSpeechAudio.pause();
          fixedSpeechFrame=null;
          $('#speechStatus').classList.remove('show');
          onDone?.();
          return;
        }
        fixedSpeechFrame=requestAnimationFrame(monitor);
      };
      monitor();
    }).catch(()=>{
      // Aufnahme nicht ladbar -> auf Geräte-/Browser-TTS zurückfallen statt stumm zu bleiben.
      fallbackBrowserSpeech(value,'de',voiceId);
    });
  };
  if(fixedSpeechAudio.readyState>=1)begin();
  else fixedSpeechAudio.addEventListener('loadedmetadata',begin,{once:true});
  showSpeechStatus(`${voice.name}: ${value.slice(0,72)}`);
  return true;
}

function fallbackBrowserSpeech(value,lang,voiceURIOverride='',attempt=0){
  if(!speech){ showSpeechStatus('المتصفح لا يدعم القراءة الصوتية'); return; }
  speech.cancel();
  const isArabic=lang==='ar' || /[\u0600-\u06ff]/.test(value.slice(0,40));
  const voices=speech.getVoices();
  if(!voices.length){
    if(attempt>=8){ showSpeechStatus('لا توجد أصوات قراءة متاحة في المتصفح'); return; }
    showSpeechStatus('جارى تحميل أصوات المتصفح...');
    setTimeout(()=>fallbackBrowserSpeech(value,lang,voiceURIOverride,attempt+1),250);
    return;
  }
  const utterance=new SpeechSynthesisUtterance(value);
  utterance.lang=isArabic?'ar-EG':'de-DE';
  utterance.rate=Math.max(.5,Math.min(1.5,speechRate));
  const preferred=voiceURIOverride
    ? voices.find(v=>v.voiceURI===voiceURIOverride || v.name===voiceURIOverride)
    : null;
  utterance.voice=preferred
    || voices.find(v=>v.lang.toLowerCase().startsWith(isArabic?'ar':'de'))
    || voices.find(v=>v.lang.toLowerCase().includes(isArabic?'ar':'de'))
    || null;
  utterance.onend=()=>$('#speechStatus').classList.remove('show');
  utterance.onerror=()=>showSpeechStatus(isArabic?'الصوت العربي غير متاح في المتصفح':'الصوت الألماني غير متاح في المتصفح');
  speech.speak(utterance);
  showSpeechStatus(value.slice(0,72));
}

function speakText(text, lang, voiceURIOverride=''){
  const value=normalizeSpeechValue(text);
  if(!value||!/[A-Za-zÄÖÜäöüß\u0600-\u06ff]/.test(value))return;
  const isArabic=lang==='ar' || /[\u0600-\u06ff]/.test(value.slice(0,40));
  // Priorität: aufgenommene Stimme. Wenn keine vorhanden ist, das Geräte-/Browser-TTS nutzen (nicht stumm bleiben).
  if(!isArabic&&playFixedSpeech(value,voiceURIOverride||speechVoiceURI))return;
  // Recorded voices are still loading: speak with the browser voice now
  // (keeps the tap's user gesture) and use the recordings from the next tap.
  if(!isArabic&&!window.A2_FIXED_SPEECH) ensureSpeechLibraries().catch(()=>{});
  stopFixedSpeech();
  fallbackBrowserSpeech(value,lang,voiceURIOverride);
}

function germanVoices(){
  if(!speech) return [];
  const seen=new Set();
  return speech.getVoices().filter(voice=>{
    if(!voice.lang.toLowerCase().startsWith('de') || seen.has(voice.voiceURI)) return false;
    seen.add(voice.voiceURI);
    return true;
  });
}

function speakReadingWithPeople(chapterNumber, readingIndex){
  const chapter=BOOK.find(item=>item.num===chapterNumber);
  const reading=chapter?.readings?.[readingIndex];
  if(!reading) return;
  const holder=document.createElement('div');
  holder.innerHTML=reading.text;
  const text=holder.textContent.replace(/\s+/g,' ').trim();
  const parts=text.match(/[^.!?]+[.!?]+|[^.!?]+$/g)?.map(part=>part.trim()).filter(Boolean)||[text];
  stopFixedSpeech();
  const voices=FIXED_SPEECH.voices;
  const playPart=index=>{
    if(index>=parts.length)return;
    const voice=voices[index%voices.length];
    if(!playFixedSpeech(parts[index],voice?.id,()=>playPart(index+1)))speakText(text,'de');
  };
  playPart(0);
}

function enhanceSpeech(root){
  const selector=[
    '.vocab-row .w','.vocab-row .def','.vocab-row .ex','.reading-text','.reading-q b',
    '.reading-answer','.reading-glossary span','.rm-item','.gram-block h3','.gram-block p',
    '.gram-block li','.gram-block td','.speak-q>div','.model-text','.quiz-q',
    '.exercise-prompt','.dictionary-word','.dictionary-definition','.dictionary-example',
    '.expression-de','.expression-meaning','.expression-example','.verb-inf','.verb-perfect',
    '.verb-form','.goal-item>div','.visual-caption',
    '.card>h3','.card>h4','.card>p','.intro-note','.flashcard .big','.flashcard .fdef','.flashcard .fex'
  ].join(',');
  root.querySelectorAll(selector).forEach(element=>{
    if(element.dataset.speechReady) return;
    element.dataset.speechReady='1';
    element.classList.add('speakable');
    const button=document.createElement('button');
    button.type='button'; button.className='speak-btn'; button.textContent='▶';
    button.setAttribute('aria-label','Vorlesen');
    button.addEventListener('click',event=>{
      event.preventDefault(); event.stopPropagation();
      speakText(cleanSpeechText(element),element.classList.contains('ar')?'ar':'de');
    });
    element.appendChild(button);
  });
  root.querySelectorAll('.ar').forEach(element=>{
    if(element.dataset.speechReady || !element.textContent.trim() || element.closest('button')) return;
    element.dataset.speechReady='1';
    element.classList.add('speakable');
    const button=document.createElement('button');
    button.type='button'; button.className='speak-btn'; button.textContent='▶';
    button.setAttribute('aria-label','قراءة النص العربي');
    button.addEventListener('click',event=>{
      event.preventDefault(); event.stopPropagation();
      speakText(cleanSpeechText(element),'ar');
    });
    element.appendChild(button);
  });
}

function setListenMode(on){
  document.body.classList.toggle('listen-mode',on);
  listenToggle.setAttribute('aria-pressed',String(on));
  listenToggle.classList.toggle('active',on);
  listenToggle.textContent=on?'🔊 Hören an':'🔇 Hören aus';
  localStorage.setItem('listenModeUserChoice',on?'1':'0');
  if(!on){
    stopFixedSpeech();
    speech?.cancel();
  }
}

setListenMode(localStorage.getItem('listenModeUserChoice')==='1'); // default OFF

listenToggle.addEventListener('click',()=>{
  const on=!document.body.classList.contains('listen-mode');
  setListenMode(on);
  showSpeechStatus(on?'اضغط على أي نص لسماعه':'تم إيقاف وضع الاستماع');
});

view.addEventListener('click',event=>{
  if(!document.body.classList.contains('listen-mode')
    ||event.target.closest('.speak-btn,input,select,button,a,.answer-btn,.exercise-check,.exercise-reset,.fc-nav,.main-tabs,.chapter-tabs'))return;
  const target=event.target.closest('.speakable,.quiz-opt,.word-token');
  if(!target) return;
  event.preventDefault(); event.stopPropagation();
  const text=cleanSpeechText(target);
  if(!text||!/[A-Za-zÄÖÜäöüß\u0600-\u06ff]/.test(text))return;
  speakText(text,target.classList.contains('ar')?'ar':'de');
},true);

new MutationObserver(()=>enhanceSpeech(view)).observe(view,{childList:true,subtree:true});
