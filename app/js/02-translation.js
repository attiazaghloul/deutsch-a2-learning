/* ===================== settings and contextual translation ===================== */
let speechRate=Number(localStorage.getItem('speechRate')||.85);
let speechVoiceURI=localStorage.getItem('speechVoiceURI')||'mia';
let speechProfile=localStorage.getItem('speechProfile')||'clear';
let pendingTranslation=null;
let translationRequest=0;
const translateTrigger=$('#translateTrigger');
const translateFavoriteTrigger=$('#translateFavoriteTrigger');
const FAVORITE_WORDS_KEY='favoriteWordsV1';
const WORD_SEARCH_PREFILL_KEY='wordSearchPrefill';

function normalizeWordForSearch(value){
  return String(value||'').toLocaleLowerCase('de-DE')
    .normalize('NFD').replace(/[\u0300-\u036f]/g,'')
    .replace(/ß/g,'ss')
    .replace(/[^A-Za-z0-9\u00C0-\u024F\u0600-\u06FF\s]+/g,' ')
    .replace(/\s+/g,' ')
    .trim();
}

function bareWordKey(value){
  return normalizeWordForSearch(value)
    .replace(/^(der|die|das|ein|eine|einen|einem|einer)\s+/,'')
    .replace(/^sich\s+/,'')
    .replace(/\s*,\s*.*/,'')
    .trim();
}

const OFFLINE_POS_LABELS={n:'Nomen',v:'Verb',adj:'Adjektiv',adv:'Adverb',prep:'Präposition',pron:'Pronomen',phrase:'Ausdruck',other:'Wort'};
let offlineDictionaryWorker=null;
let offlineDictionaryReady=null;
let offlineDictionaryRequestId=0;
const offlineDictionaryRequests=new Map();

function ensureOfflineDictionary(){
  if(offlineDictionaryReady) return offlineDictionaryReady;
  offlineDictionaryReady=new Promise((resolve,reject)=>{
    if(!('Worker' in window)){
      reject(new Error('Web Worker wird von diesem Browser nicht unterstützt.'));
      return;
    }
    const worker=new Worker('dictionary-worker.js');
    offlineDictionaryWorker=worker;
    const initTimer=setTimeout(()=>{
      const error=new Error('Wörterbuch braucht auf diesem Gerät zu lange. Bitte erneut versuchen.');
      reject(error);
      offlineDictionaryRequests.forEach(request=>{clearTimeout(request.timer);request.reject(error);});
      offlineDictionaryRequests.clear();
      worker.terminate();
      offlineDictionaryWorker=null;
      offlineDictionaryReady=null;
    },45000);
    worker.addEventListener('message',event=>{
      const message=event.data||{};
      if(message.type==='ready'){
        clearTimeout(initTimer);
        resolve(message.meta||OFFLINE_DICTIONARY_META);
        return;
      }
      if(message.type==='error' && message.requestId==null){
        clearTimeout(initTimer);
        const error=new Error(message.message||'Wörterbuch konnte nicht geladen werden.');
        reject(error);
        worker.terminate();
        offlineDictionaryWorker=null;
        offlineDictionaryReady=null;
        return;
      }
      if(message.type==='results' || message.type==='error'){
        const pending=offlineDictionaryRequests.get(message.requestId);
        if(!pending) return;
        offlineDictionaryRequests.delete(message.requestId);
        clearTimeout(pending.timer);
        if(message.type==='error') pending.reject(new Error(message.message||'Wörterbuch konnte nicht geladen werden.'));
        else pending.resolve(message.entries||[]);
      }
    });
    worker.addEventListener('error',()=>{
      clearTimeout(initTimer);
      const error=new Error('Wörterbuch konnte nicht geladen werden.');
      reject(error);
      offlineDictionaryRequests.forEach(request=>{clearTimeout(request.timer);request.reject(error);});
      offlineDictionaryRequests.clear();
      worker.terminate();
      offlineDictionaryWorker=null;
      offlineDictionaryReady=null;
    },{once:true});
    worker.postMessage({type:'init'});
  });
  return offlineDictionaryReady;
}

async function searchOfflineDictionary(value,limit=60){
  const query=normalizeWordForSearch(value);
  if(query.length<2) return [];
  await ensureOfflineDictionary();
  const requestId=++offlineDictionaryRequestId;
  return new Promise((resolve,reject)=>{
    const timer=setTimeout(()=>{
      offlineDictionaryRequests.delete(requestId);
      reject(new Error('Die Wörterbuchsuche hat zu lange gedauert.'));
    },20000);
    offlineDictionaryRequests.set(requestId,{resolve,reject,timer});
    offlineDictionaryWorker.postMessage({type:'search',requestId,query,limit});
  });
}

let offlineDictionaryCacheRequestId=0;

async function offlineDictionaryCacheStatus(){
  if(!('serviceWorker' in navigator)) return {complete:false,cached:0,total:0};
  const requestId=++offlineDictionaryCacheRequestId;
  return new Promise(resolve=>{
    const timer=setTimeout(()=>{
      navigator.serviceWorker.removeEventListener('message',handler);
      resolve({complete:false,cached:0,total:0});
    },5000);
    const handler=event=>{
      const message=event.data||{};
      if(message.type!=='dictionary-cache-status'||message.requestId!==requestId) return;
      clearTimeout(timer);
      navigator.serviceWorker.removeEventListener('message',handler);
      resolve(message);
    };
    navigator.serviceWorker.addEventListener('message',handler);
    navigator.serviceWorker.ready.then(registration=>{
      registration.active?.postMessage({type:'dictionary-cache-status',requestId});
    }).catch(()=>{
      clearTimeout(timer);
      navigator.serviceWorker.removeEventListener('message',handler);
      resolve({complete:false,cached:0,total:0});
    });
  });
}

async function syncOfflineDictionaryStatus(){
  const status=$('#offlineDictionaryStatus');
  const button=$('#offlineDictionaryDownload');
  if(!status) return;
  const total=Number(OFFLINE_DICTIONARY_META.entries).toLocaleString('de-DE');
  const cache=await offlineDictionaryCacheStatus().catch(()=>({complete:false,cached:0,total:0}));
  status.textContent=cache.complete
    ?`✓ ${total} Einträge vollständig offline gespeichert`
    :cache.total?`${cache.cached} / ${cache.total} Wörterbuchdateien gespeichert`:`${total} Einträge · noch nicht vollständig offline`;
  if(button){
    button.textContent=cache.complete?'✓ Vollständig offline':'⬇ Wörterbuch offline speichern';
    button.classList.toggle('cached',cache.complete);
  }
}

function downloadOfflineDictionary(button){
  if(!('serviceWorker' in navigator)){showSpeechStatus('Offline-Speicherung wird von diesem Browser nicht unterstützt');return;}
  if(!navigator.onLine){showSpeechStatus('أنت أوفلاين — افتح القاموس مرة أونلاين لتحميله');return;}
  button.disabled=true;
  button.textContent='⏳ 0 / 2';
  const handler=event=>{
    const message=event.data||{};
    if(message.type==='dictionary-cache-progress') button.textContent=`⏳ ${message.done} / ${message.total}`;
    if(message.type==='dictionary-cached'){
      navigator.serviceWorker.removeEventListener('message',handler);
      button.disabled=false;
      syncOfflineDictionaryStatus();
      showSpeechStatus(message.ok?'تم تحميل القاموس بالكامل للأوفلاين ✓':'تعذر تحميل بعض ملفات القاموس');
    }
  };
  navigator.serviceWorker.addEventListener('message',handler);
  navigator.serviceWorker.ready.then(registration=>registration.active?.postMessage({type:'cache-dictionary'})).catch(()=>{
    navigator.serviceWorker.removeEventListener('message',handler);
    button.disabled=false;
    button.textContent='⬇ Wörterbuch offline speichern';
  });
}

function offlineDictionaryCard(entry){
  const [word,pos,arabic,glosses,example,article,plurals,forms,ipa,source]=entry;
  const displayWord=article&&!word.toLocaleLowerCase('de-DE').startsWith(`${article} `)?`${article} ${word}`:word;
  const germanGloss=(glosses||[]).find(item=>!item.startsWith('Englisch:'))||'';
  const usefulForms=(forms||[]).filter(form=>normalizeWordForSearch(form)!==normalizeWordForSearch(word)).slice(0,5);
  const sourceLabel=source?.includes('wiktionary')?'Wiktionary + FreeDict':'FreeDict';
  return `<article class="offline-dict-card">
    <div class="offline-dict-head"><div class="offline-dict-word">${escapeHtml(displayWord)}</div><span class="offline-dict-pos">${escapeHtml(OFFLINE_POS_LABELS[pos]||pos||'Wort')}</span></div>
    <div class="offline-dict-ar" lang="ar">${escapeHtml((arabic||[]).join(' ، '))}</div>
    <div class="offline-dict-details">
      ${ipa?`<span class="offline-dict-chip">IPA ${escapeHtml(ipa)}</span>`:''}
      ${(plurals||[]).length?`<span class="offline-dict-chip">Plural: ${escapeHtml(plurals.join(', '))}</span>`:''}
      ${usefulForms.length?`<span class="offline-dict-chip">Formen: ${escapeHtml(usefulForms.join(', '))}</span>`:''}
      <span class="offline-dict-chip">${sourceLabel}</span>
    </div>
    ${germanGloss?`<div class="offline-dict-note">${escapeHtml(germanGloss)}</div>`:''}
    ${example?`<div class="dictionary-example">„${escapeHtml(example)}“</div>`:''}
  </article>`;
}

function offlineDictionaryResultsHtml(entries){
  return entries.length?entries.map(offlineDictionaryCard).join(''):'<div class="card word-result-empty">Kein Eintrag im Offline-Wörterbuch gefunden.</div>';
}

function stableFavoriteHash(value){
  return [...String(value||'')].reduce((hash,char)=>((hash*33)^char.codePointAt(0))>>>0,5381).toString(36);
}

function wordEntryId(level,chapter,index,item){
  return `${level}-k${chapter.num}-${index}-${stableFavoriteHash(item.w)}`;
}

function allVocabularyEntries(){
  const make=(level,chapters)=>chapters.flatMap(chapter=>(chapter.vocab||[]).map((item,index)=>{
    const word=plainText(item.w);
    const definition=plainText(item.d);
    const example=plainText(item.ex||'');
    const meaning=plainText(item.ar||'');
    return {
      id:wordEntryId(level,chapter,index,item),
      level,
      chapter,
      item,
      route:chapter.route?`${chapter.route}/wortschatz`:`k${chapter.num}/wortschatz`,
      word,
      key:normalizeWordForSearch(word),
      bareKey:bareWordKey(word),
      search:normalizeWordForSearch(`${word} ${definition} ${example} ${meaning} Kapitel ${chapter.num} ${chapter.title||''}`)
    };
  }));
  return [...make('A1',A1_BOOK),...make('A2',BOOK),...make('B1.1',B1_BOOK)];
}

function findWordEntry(value){
  const query=normalizeWordForSearch(value);
  const bare=bareWordKey(value);
  if(!query) return null;
  const entries=allVocabularyEntries();
  return entries.find(entry=>entry.key===query || entry.bareKey===bare)
    ||entries.find(entry=>entry.bareKey && (entry.bareKey.includes(bare) || bare.includes(entry.bareKey)))
    ||entries.find(entry=>entry.search.includes(query));
}

function favoriteList(){
  try{
    const list=JSON.parse(localStorage.getItem(FAVORITE_WORDS_KEY)||'[]');
    return Array.isArray(list)?list:[];
  }catch(error){ return []; }
}

function saveFavoriteList(list){
  localStorage.setItem(FAVORITE_WORDS_KEY,JSON.stringify(list));
}

function favoriteFromEntry(entry){
  return {
    id:entry.id,
    dictionaryId:entry.id,
    word:entry.word,
    displayWord:entry.item.w,
    meaning:entry.item.ar||entry.item.d||'',
    definition:plainText(entry.item.d),
    example:entry.item.ex||'',
    level:entry.level,
    chapter:entry.chapter.num,
    title:entry.chapter.title||'',
    route:entry.route,
    createdAt:new Date().toISOString()
  };
}

function favoriteFromTranslation(translation){
  const entry=findWordEntry(translation.selected);
  if(entry) return favoriteFromEntry(entry);
  const key=bareWordKey(translation.selected)||normalizeWordForSearch(translation.selected);
  return {
    id:`custom-${stableFavoriteHash(key||translation.selected)}`,
    word:translation.selected,
    displayWord:translation.selected,
    meaning:translation.wordTranslation||translation.dictionaryFallback||'',
    definition:'',
    example:'',
    context:translation.context||'',
    sentenceTranslation:translation.sentenceTranslation||'',
    level:'',
    chapter:'',
    title:'',
    route:'',
    createdAt:new Date().toISOString()
  };
}

function isFavoriteId(id){
  if(!id) return false;
  return favoriteList().some(item=>item.id===id || item.dictionaryId===id);
}

function setFavoriteButtonState(button,active){
  if(!button) return;
  button.classList.toggle('active',active);
  const heart=button.querySelector('.heart');
  if(heart) heart.innerHTML=active?'&#9829;':'&#9825;';
  else button.innerHTML=active?'&#9829;':'&#9825;';
  button.setAttribute('aria-pressed',String(active));
}

function updateFavoriteButtonsInView(){
  $$('[data-favorite-id]').forEach(button=>setFavoriteButtonState(button,isFavoriteId(button.dataset.favoriteId)));
  updateTranslationFavoriteButtons();
}

function toggleFavoriteWord(payload){
  const list=favoriteList();
  const index=list.findIndex(item=>item.id===payload.id || (payload.dictionaryId&&item.dictionaryId===payload.dictionaryId));
  if(index>=0){
    list.splice(index,1);
    saveFavoriteList(list);
    window.NextUI?.syncFavorite(payload,false);
    return false;
  }
  list.unshift({...payload,createdAt:payload.createdAt||new Date().toISOString()});
  saveFavoriteList(list.slice(0,300));
  window.NextUI?.syncFavorite(payload,true);
  return true;
}

function toggleDictionaryFavorite(id){
  const entry=allVocabularyEntries().find(item=>item.id===id);
  if(!entry) return;
  toggleFavoriteWord(favoriteFromEntry(entry));
  if(location.hash==='#favorites') renderFavorites();
  else updateFavoriteButtonsInView();
}

function removeFavoriteById(id){
  window.NextUI?.syncFavorite({id},false);
  saveFavoriteList(favoriteList().filter(item=>item.id!==id && item.dictionaryId!==id));
  renderFavorites();
}

function currentTranslationFavoritePayload(){
  return pendingTranslation?favoriteFromTranslation(pendingTranslation):null;
}

function updateTranslationFavoriteButtons(){
  const payload=currentTranslationFavoritePayload();
  const active=payload?isFavoriteId(payload.id)||isFavoriteId(payload.dictionaryId):false;
  setFavoriteButtonState(translateFavoriteTrigger,active);
  setFavoriteButtonState($('#translationFavoriteBtn'),active);
}

function togglePendingFavorite(){
  const payload=currentTranslationFavoritePayload();
  if(!payload) return;
  toggleFavoriteWord(payload);
  updateFavoriteButtonsInView();
}

function openWordSearchFor(value){
  const query=String(value||'').trim();
  if(query) localStorage.setItem(WORD_SEARCH_PREFILL_KEY,query);
  closeModal('translationModal');
  go('word-search');
}

function wordResultCard(entry,{compact=false}={}){
  const active=isFavoriteId(entry.id);
  return `<article class="card word-result-card ${compact?'compact':''}">
    <div class="word-result-visual">${vocabVisual(entry.item,entry.chapter.num)}</div>
    <div>
      <div class="word-result-head">
        <div class="word-result-title">${fmtWord(entry.item.w)}</div>
        <button type="button" class="favorite-btn ${active?'active':''}" data-favorite-id="${escapeHtml(entry.id)}" onclick="toggleDictionaryFavorite('${escapeHtml(entry.id)}')" aria-pressed="${active?'true':'false'}">
          <span class="heart">${active?'&#9829;':'&#9825;'}</span><span>Favorit</span>
        </button>
      </div>
      <div class="word-result-meta"><span>${entry.level}</span><span>Kapitel ${entry.chapter.num}</span><span>${escapeHtml(entry.chapter.title||'')}</span></div>
      <div class="dictionary-definition">${entry.item.d}</div>
      ${entry.item.ex?`<div class="dictionary-example">"${escapeHtml(entry.item.ex)}"</div>`:''}
      ${ar(entry.item.ar)}
      <div class="word-result-actions"><button type="button" class="btn btn-ghost" onclick="go('${entry.route}')">Zur Lektion</button></div>
    </div>
  </article>`;
}

function customFavoriteCard(item){
  const id=escapeHtml(item.id);
  return `<article class="card custom-favorite-card">
    <div class="word-result-head">
      <div class="word-result-title">${escapeHtml(item.displayWord||item.word)}</div>
      <button type="button" class="favorite-btn active" onclick="removeFavoriteById('${id}')"><span class="heart">&#9829;</span><span>Entfernen</span></button>
    </div>
    ${item.meaning?`<div class="translation-result">${escapeHtml(item.meaning)}</div>`:''}
    ${item.context?`<div class="translation-source">${escapeHtml(item.context)}</div>`:''}
  </article>`;
}

let modalReturnFocus=null;

function modalFocusableElements(modal){
  return [...modal.querySelectorAll('button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[href],[tabindex]:not([tabindex="-1"])')]
    .filter(element=>element.getClientRects().length);
}

function openModal(id){
  const modal=$('#'+id);
  if(!modal) return;
  modalReturnFocus=document.activeElement;
  modal.classList.add('show');
  modal.setAttribute('aria-hidden','false');
  if(id==='settingsModal'){ updateSpeedUI(); populateVoiceOptions(); }
  requestAnimationFrame(()=>modalFocusableElements(modal)[0]?.focus());
}

function closeModal(id){
  const modal=$('#'+id);
  if(!modal) return;
  modal.classList.remove('show');
  modal.setAttribute('aria-hidden','true');
  if(modalReturnFocus instanceof HTMLElement) modalReturnFocus.focus();
  modalReturnFocus=null;
}

function updateSpeedUI(){
  $('#speechRate').value=String(speechRate);
  $('#speechRateValue').textContent=`${speechRate.toFixed(2)}×`;
  $$('.speed-preset[data-rate]').forEach(button=>button.classList.toggle('active',Math.abs(Number(button.dataset.rate)-speechRate)<.01));
  $$('.voice-profile').forEach(button=>button.classList.toggle('active',button.dataset.profile===speechProfile));
}

function populateVoiceOptions(){
  const select=$('#speechVoice');
  const voices=FIXED_SPEECH.voices;
  if(voices.length&&!voices.some(voice=>voice.id===speechVoiceURI)) speechVoiceURI=voices[0].id;
  select.innerHTML=voices.map(voice=>
    `<option value="${escapeHtml(voice.id)}">${escapeHtml(voice.name)} · ${escapeHtml(voice.description)}</option>`).join('');
  select.value=speechVoiceURI;
  const gallery=$('#voiceGallery');
  gallery.innerHTML=voices.map(voice=>{
    const initials=voice.name.slice(0,2).toUpperCase();
    const active=voice.id===speechVoiceURI;
    return `<button type="button" class="voice-person ${active?'active':''}" data-voice-uri="${escapeHtml(voice.id)}">
      <span class="voice-avatar">${escapeHtml(initials)}</span>
      <span><span class="voice-person-name">${escapeHtml(voice.name)}</span>
        <span class="voice-person-meta">${escapeHtml(voice.description)}</span></span>
      <span class="voice-person-test" data-test-voice="${escapeHtml(voice.id)}" title="Diese Stimme testen">▶</span>
    </button>`;
  }).join('');
  $('#voiceAvailability').textContent=voices.length
    ?`${voices.length} feste Sprecher. Klang und Aussprache bleiben auf allen Geräten gleich.`
    :'Die feste Sprachbibliothek konnte nicht geladen werden.';
}

function setSpeechRate(value,preview=false){
  speechRate=Math.min(1.3,Math.max(.55,Number(value)||.85));
  localStorage.setItem('speechRate',String(speechRate));
  updateSpeedUI();
  if(preview) speakText('Ich lerne Deutsch Schritt für Schritt.','de');
}

$('#settingsToggle').addEventListener('click',()=>openModal('settingsModal'));
$$('[data-close-modal]').forEach(button=>button.addEventListener('click',()=>closeModal(button.dataset.closeModal)));
$$('.modal-backdrop').forEach(modal=>modal.addEventListener('click',event=>{ if(event.target===modal) closeModal(modal.id); }));
$('#speechRate').addEventListener('input',event=>setSpeechRate(event.target.value));
$('#speechRate').addEventListener('change',event=>setSpeechRate(event.target.value,true));
$$('.speed-preset[data-rate]').forEach(button=>button.addEventListener('click',()=>setSpeechRate(button.dataset.rate,true)));
$$('.voice-profile').forEach(button=>button.addEventListener('click',()=>{
  speechProfile=button.dataset.profile;
  localStorage.setItem('speechProfile',speechProfile);
  updateSpeedUI();
  speakText('Guten Tag! Ich spreche Deutsch mit dir.','de');
}));
$('#speechVoice').addEventListener('change',event=>{
  speechVoiceURI=event.target.value;
  localStorage.setItem('speechVoiceURI',speechVoiceURI);
  populateVoiceOptions();
  speakText('Ich lerne jeden Tag ein bisschen Deutsch.','de');
});
$('#voiceGallery').addEventListener('click',event=>{
  const test=event.target.closest('[data-test-voice]');
  if(test){
    event.preventDefault(); event.stopPropagation();
    speakText('Guten Tag! Ich bin eine deutsche Stimme. So klinge ich beim Vorlesen.','de',test.dataset.testVoice);
    return;
  }
  const card=event.target.closest('.voice-person');
  if(!card) return;
  speechVoiceURI=card.dataset.voiceUri;
  localStorage.setItem('speechVoiceURI',speechVoiceURI);
  $('#speechVoice').value=speechVoiceURI;
  populateVoiceOptions();
  speakText('Diese Stimme ist jetzt ausgewählt.','de',speechVoiceURI);
});
document.addEventListener('keydown',event=>{
  const modal=$('.modal-backdrop.show');
  if(!modal) return;
  if(event.key==='Escape'){
    event.preventDefault();
    closeModal(modal.id);
    return;
  }
  if(event.key!=='Tab') return;
  const focusable=modalFocusableElements(modal);
  if(!focusable.length){ event.preventDefault(); return; }
  const first=focusable[0],last=focusable.at(-1);
  if(event.shiftKey && document.activeElement===first){ event.preventDefault(); last.focus(); }
  else if(!event.shiftKey && document.activeElement===last){ event.preventDefault(); first.focus(); }
});
updateSpeedUI();
populateVoiceOptions();

function normalizeSelectionText(value){
  return value.replace(/\s+/g,' ').trim()
    .replace(/^[„“"'.،,!?;:()\[\]{}<>]+|[„“"'.،,!?;:()\[\]{}<>]+$/g,'');
}

function selectionIndex(text, selected){
  return text.toLocaleLowerCase('de-DE').indexOf(selected.toLocaleLowerCase('de-DE'));
}

function sentenceContainingSelection(text, selected){
  const clean=text.replace(/\s+/g,' ').trim();
  const index=selectionIndex(clean, selected);
  if(index<0) return null;
  const before=clean.slice(0,index);
  const after=clean.slice(index+selected.length);
  const start=Math.max(
    before.lastIndexOf('.'),
    before.lastIndexOf('!'),
    before.lastIndexOf('?'),
    before.lastIndexOf('؟'),
    before.lastIndexOf('؛')
  )+1;
  const endCandidates=['.','!','?','؟','؛']
    .map(char=>after.indexOf(char))
    .filter(pos=>pos>=0);
  const end=endCandidates.length
    ?index+selected.length+Math.min(...endCandidates)+1
    :clean.length;
  const sentence=clean.slice(start,end).trim();
  return selectionIndex(sentence, selected)>=0 ? sentence.slice(0,650) : null;
}

function highlightedContextHtml(context, selected){
  const index=selectionIndex(context, selected);
  if(index<0) return escapeHtml(context);
  return `${escapeHtml(context.slice(0,index))}<mark>${escapeHtml(context.slice(index,index+selected.length))}</mark>${escapeHtml(context.slice(index+selected.length))}`;
}

function selectionContext(selection){
  const selected=normalizeSelectionText(selection.toString());
  if(selected.length<2 || selected.length>120 || !selection.rangeCount) return null;
  const range=selection.getRangeAt(0);
  const container=range.commonAncestorContainer.nodeType===1?range.commonAncestorContainer:range.commonAncestorContainer.parentElement;
  if(!container || !view.contains(container) || container.closest('input,textarea,button,.ar')) return null;
  const block=container.closest('.reading-text p,.reading-text li,.rm-item,.model-text,.exercise-prompt,.quiz-q,.dictionary-entry,.expression-card,.verb-card,p,li,td')
    ||container.closest('.reading-text,.card')
    ||container;
  const clone=block.cloneNode(true);
  clone.querySelectorAll('.ar,.speak-btn,button,input,select,textarea').forEach(node=>node.remove());
  const context=sentenceContainingSelection(clone.textContent, selected);
  if(!context) return null;
  const rect=range.getBoundingClientRect();
  return {selected,context,contextHtml:highlightedContextHtml(context,selected),rect};
}

function knownWordTranslation(value){
  const entry=findWordEntry(value);
  if(entry?.item?.ar) return entry.item.ar;
  const normalized=bareWordKey(value);
  const verb=[...A1_VERBS,...VERBS].find(item=>bareWordKey(item.inf)===normalized);
  return verb?.ar||null;
}

async function requestTranslation(text,sourceLanguage,targetLanguage){
  return await translateWithBrowser(text,sourceLanguage,targetLanguage)
    ||await translateWithInternet(text,sourceLanguage,targetLanguage);
}

async function captureSelection(){
  if(document.body.classList.contains('exam-mode')){
    translateTrigger.classList.remove('show');
    translateFavoriteTrigger.classList.remove('show');
    pendingTranslation=null;
    return;
  }
  const selection=window.getSelection();
  const data=selectionContext(selection);
  if(!data){ translateTrigger.classList.remove('show'); translateFavoriteTrigger.classList.remove('show'); return; }
  const requestId=++translationRequest;
  const hasArabic=/[\u0600-\u06ff]/.test(data.selected);
  const sourceLanguage=hasArabic?'ar':'de';
  const targetLanguage=hasArabic?'de':'ar';
  const known=!hasArabic?knownWordTranslation(data.selected):null;
  pendingTranslation={...data,sourceLanguage,targetLanguage,wordTranslation:'',dictionaryFallback:known||'',sentenceTranslation:''};
  translateTrigger.textContent='ترجمة في السياق';
  const bubbleLeft=Math.max(8,Math.min(window.innerWidth-290,data.rect.left));
  const bubbleTop=Math.max(70,Math.min(window.innerHeight-48,data.rect.bottom+7));
  translateTrigger.style.left=`${bubbleLeft}px`;
  translateTrigger.style.top=`${bubbleTop}px`;
  translateFavoriteTrigger.style.left=`${Math.max(8,Math.min(window.innerWidth-44,bubbleLeft+236))}px`;
  translateFavoriteTrigger.style.top=`${bubbleTop}px`;
  translateTrigger.classList.add('show');
  translateFavoriteTrigger.classList.add('show');
  updateTranslationFavoriteButtons();
  const wordPromise=requestTranslation(data.selected,sourceLanguage,targetLanguage).catch(error=>{
    if(known) return known;
    throw error;
  });
  const sentencePromise=data.context===data.selected?wordPromise:requestTranslation(data.context,sourceLanguage,targetLanguage);
  pendingTranslation.wordPromise=wordPromise;
  pendingTranslation.sentencePromise=sentencePromise;
  try{
    const translated=await wordPromise;
    if(requestId!==translationRequest || !pendingTranslation) return;
    pendingTranslation.wordTranslation=translated;
    translateTrigger.textContent=`↗ ${translated}`;
  }catch(error){
    if(requestId===translationRequest) translateTrigger.textContent='تعذرت الترجمة';
  }
  sentencePromise.then(translated=>{
    if(requestId===translationRequest && pendingTranslation) pendingTranslation.sentenceTranslation=translated;
  }).catch(()=>{});
}

document.addEventListener('mouseup',event=>{
  if(event.target.closest('#translateTrigger,#translateFavoriteTrigger,.modal-backdrop,button,input,select')) return;
  setTimeout(captureSelection,0);
});
document.addEventListener('touchend',event=>{
  if(event.target.closest('#translateTrigger,#translateFavoriteTrigger,.modal-backdrop,button,input,select')) return;
  setTimeout(captureSelection,80);
});
document.addEventListener('scroll',()=>{
  translateTrigger.classList.remove('show');
  translateFavoriteTrigger.classList.remove('show');
},{passive:true});

async function translateWithBrowser(text,sourceLanguage,targetLanguage){
  if(!('Translator' in window)) return null;
  try{
    const availability=await window.Translator.availability({sourceLanguage,targetLanguage});
    if(availability==='unavailable') return null;
    const translator=await window.Translator.create({sourceLanguage,targetLanguage});
    return await translator.translate(text);
  }catch(error){ return null; }
}

async function translateWithInternet(text,sourceLanguage,targetLanguage){
  let limited=text;
  const encoder=new TextEncoder();
  while(encoder.encode(limited).length>450) limited=limited.slice(0,-1);
  const url=`https://api.mymemory.translated.net/get?q=${encodeURIComponent(limited)}&langpair=${sourceLanguage}|${targetLanguage}`;
  const response=await fetch(url);
  if(!response.ok) throw new Error('translation');
  const data=await response.json();
  if(Number(data.responseStatus)!==200 || !data.responseData?.translatedText) throw new Error('translation');
  return data.responseData.translatedText;
}

async function showTranslationDetails(){
  if(!pendingTranslation) return;
  translateTrigger.classList.remove('show');
  translateFavoriteTrigger.classList.remove('show');
  const current=pendingTranslation;
  $('#translationWord').textContent=current.selected;
  $('#translationWordMeaning').textContent=current.wordTranslation||'جارٍ الترجمة...';
  $('#translationSentence').innerHTML=current.contextHtml||escapeHtml(current.context);
  $('#translationSentence').style.direction=current.sourceLanguage==='ar'?'rtl':'ltr';
  $('#translationSentence').style.textAlign=current.sourceLanguage==='ar'?'right':'left';
  $('#translationSentenceResult').textContent=current.sentenceTranslation
    ||(current.targetLanguage==='ar'?'جارٍ ترجمة الجملة...':'Der Satz wird übersetzt ...');
  $('#translationSentenceResult').style.direction=current.targetLanguage==='ar'?'rtl':'ltr';
  $('#translationSentenceResult').style.textAlign=current.targetLanguage==='ar'?'right':'left';
  const dictionaryEntry=findWordEntry(current.selected);
  $('#translationDictionaryHit').innerHTML=dictionaryEntry
    ?`<div class="translation-context">Wortschatz-Karte</div>${wordResultCard(dictionaryEntry,{compact:true})}`
    :'';
  updateTranslationFavoriteButtons();
  openModal('translationModal');
  try{
    if(!current.wordTranslation){
      current.wordTranslation=await (current.wordPromise||requestTranslation(current.selected,current.sourceLanguage,current.targetLanguage));
      $('#translationWordMeaning').textContent=current.wordTranslation;
    }
    if(!current.sentenceTranslation){
      current.sentenceTranslation=await current.sentencePromise;
      $('#translationSentenceResult').textContent=current.sentenceTranslation;
    }
  }catch(error){
    $('#translationSentenceResult').textContent=current.targetLanguage==='ar'
      ?'تعذرت الترجمة الآن. تأكد من الاتصال بالإنترنت وحاول مرة أخرى.'
      :'Die Übersetzung ist gerade nicht verfügbar. Bitte versuche es erneut.';
  }
}

translateTrigger.addEventListener('click',showTranslationDetails);
translateFavoriteTrigger.addEventListener('click',event=>{
  event.preventDefault();
  event.stopPropagation();
  togglePendingFavorite();
});
$('#translationFavoriteBtn').addEventListener('click',togglePendingFavorite);
$('#translationSearchBtn').addEventListener('click',()=>openWordSearchFor(pendingTranslation?.selected));
