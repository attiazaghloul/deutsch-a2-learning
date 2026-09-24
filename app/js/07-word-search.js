/* ===================== global word search and favorites ===================== */
const WORD_SEARCH_PREFS_KEY='wordSearchPrefsV1';
const WORD_SEARCH_RECENT_KEY='wordSearchRecentV1';
const WORD_SEARCH_LEVELS=[['','Alle'],['A1','A1'],['A2','A2'],['B1.1','B1.1']];

function wordSearchPrefs(){
  const defaults={level:'',lessons:true,basics:true,big:true,images:true};
  try{ return {...defaults,...JSON.parse(localStorage.getItem(WORD_SEARCH_PREFS_KEY)||'{}')}; }
  catch{ return defaults; }
}

function saveWordSearchPrefs(prefs){
  try{ localStorage.setItem(WORD_SEARCH_PREFS_KEY,JSON.stringify(prefs)); }catch{}
}

function wordSearchRecent(){
  try{ const list=JSON.parse(localStorage.getItem(WORD_SEARCH_RECENT_KEY)||'[]'); return Array.isArray(list)?list:[]; }
  catch{ return []; }
}

function rememberWordSearch(value){
  const query=String(value||'').trim();
  if(normalizeWordForSearch(query).length<2) return;
  const key=normalizeWordForSearch(query);
  const list=[query,...wordSearchRecent().filter(item=>normalizeWordForSearch(item)!==key)].slice(0,12);
  try{ localStorage.setItem(WORD_SEARCH_RECENT_KEY,JSON.stringify(list)); }catch{}
}

// Lesson words, verbs and Satzbaukasten count as "lessons"; the core list as "basics".
function filterWordSearchEntries(entries,prefs){
  return entries.filter(entry=>{
    const basic=entry.kind==='core';
    if(basic?!prefs.basics:!prefs.lessons) return false;
    return !prefs.level||entry.level===prefs.level||(basic&&!entry.level);
  });
}

function wordSearchFavoritePayload(entry){
  if(entry.vocab) return favoriteFromEntry(entry.vocab);
  return {
    id:`word-${stableFavoriteHash(`${entry.key}|${entry.arKey}`)}`,
    word:entry.word,displayWord:entry.word,meaning:entry.ar,definition:entry.definition||'',
    example:entry.example||'',context:entry.example||'',level:entry.level||'',chapter:'',title:'',route:entry.route||''
  };
}

function wordSearchBestCard(entry,prefs){
  const favorite=wordSearchFavoritePayload(entry);
  const active=isFavoriteId(favorite.id)||isFavoriteId(favorite.dictionaryId);
  const image=prefs.images&&entry.vocab?.item?.img;
  const [,headword,plural]=String(entry.word).match(/^(.*?)(?:\s*,\s*(.+))?$/);
  const speech=headword.replace(/\s*\(.*$/,'');
  return `<article class="ws-best${image?' has-image':''}">
    ${image?`<img class="ws-best-img" src="${escapeHtml(entry.vocab.item.img)}" alt="" loading="lazy" decoding="async">`:''}
    <div class="ws-best-body">
      <div class="ws-best-head">
        <h2 class="ws-best-word">${fmtWord(escapeHtml(headword))}</h2>
        <div class="ws-best-actions">
          <button type="button" class="ws-icon-btn" data-ws-say="${escapeHtml(speech)}" aria-label="Aussprache anhören">🔊</button>
          <button type="button" class="ws-icon-btn ws-fav${active?' active':''}" data-ws-fav aria-pressed="${active}" aria-label="Favorit">${active?'&#9829;':'&#9825;'}</button>
        </div>
      </div>
      <div class="ws-best-ar" lang="ar" dir="rtl">${escapeHtml(entry.ar)}</div>
      <div class="ws-best-meta">
        <span class="ws-chip ws-chip-source">✓ ${escapeHtml(entry.source)}</span>
        ${plural?`<span class="ws-chip">Plural: ${escapeHtml(plural)}</span>`:''}
        ${entry.pos?`<span class="ws-chip">${escapeHtml(OFFLINE_POS_LABELS[entry.pos]||entry.pos)}</span>`:''}
        ${entry.forms?`<span class="ws-chip">${escapeHtml(entry.forms)}</span>`:''}
      </div>
      ${entry.definition?`<p class="ws-best-def">${escapeHtml(entry.definition)}</p>`:''}
      ${entry.example?`<button type="button" class="ws-best-example" data-ws-say="${escapeHtml(entry.example)}">🔊 „${escapeHtml(entry.example)}“</button>`:''}
      ${entry.route?`<button type="button" class="ws-link" onclick="go('${escapeHtml(entry.route)}')">${entry.kind==='lesson'?'Zur Lektion':'Zur Liste'} →</button>`:''}
    </div>
  </article>`;
}

function wordSearchRow(entry,index,current){
  return `<button type="button" class="ws-row${index===current?' current':''}" data-ws-pick="${index}">
    <span class="ws-row-word">${fmtWord(escapeHtml(String(entry.word).replace(/\s*,.*$/,'')))}</span>
    <span class="ws-row-ar" lang="ar" dir="rtl">${escapeHtml(entry.ar)}</span>
    <span class="ws-row-level">${escapeHtml(entry.level||'Basis')}</span>
  </button>`;
}

function wordSearchBigRow(entry){
  const [word,pos,arabic,,,article,,,,source]=entry;
  const display=article&&!word.toLocaleLowerCase('de-DE').startsWith(`${article} `)?`${article} ${word}`:word;
  return `<details class="ws-big-row"><summary>
      <span class="ws-row-word">${fmtWord(escapeHtml(display))}</span>
      <span class="ws-row-ar" lang="ar" dir="rtl">${escapeHtml((arabic||[]).slice(0,3).join(' ، '))}</span>
      <span class="ws-row-level${String(source).includes('wiktionary')?' good':''}">${String(source).includes('wiktionary')?'Wiktionary':'ungefähr'}</span>
    </summary>${offlineDictionaryCard(entry)}</details>`;
}

function wordSearchEmptyHtml(){
  const recent=wordSearchRecent();
  return `<section class="ws-empty">
    ${recent.length?`<div class="ws-empty-head"><b>Letzte Suchen</b><button type="button" class="ws-text-btn" data-ws-clear-recent>Löschen</button></div>
      <div class="ws-recent">${recent.map(item=>`<button type="button" data-ws-recent="${escapeHtml(item)}">${escapeHtml(item)}</button>`).join('')}</div>`:''}
    <div class="ws-tips">
      <div><b>Deutsch oder Arabisch</b><span lang="ar" dir="rtl">اكتب الكلمة بالألماني أو بالعربي، والاتجاه بيتحدد لوحده.</span></div>
      <div><b>Ohne Artikel und Plural</b><span lang="ar" dir="rtl">اكتب Haus أو das Haus – الاتنين شغالين.</span></div>
      <div><b>Direkt aus dem Text</b><span lang="ar" dir="rtl">علّم أي كلمة في درس واضغط «Search» عشان تيجي هنا على طول.</span></div>
    </div>
    <button type="button" class="ws-link" onclick="go('favorites')">♥ Meine Favoriten öffnen →</button>
  </section>`;
}

function renderWordSearch(){
  setTop('Wortsuche','Deutsch ↔ Arabisch',true);
  const prefill=localStorage.getItem(WORD_SEARCH_PREFILL_KEY)||'';
  localStorage.removeItem(WORD_SEARCH_PREFILL_KEY);
  const prefs=wordSearchPrefs();
  const toggle=(key,label,hint)=>`<label class="ws-pref"><input type="checkbox" data-ws-pref="${key}" ${prefs[key]?'checked':''}><span><b>${label}</b><small>${hint}</small></span></label>`;
  view.innerHTML=`
    <section class="ws-bar">
      <div class="ws-input-wrap">
        <span class="ws-input-icon" aria-hidden="true">⌕</span>
        <input id="wordSearchInput" type="search" placeholder="Wort suchen – z. B. Termin oder موعد" value="${escapeHtml(prefill)}" aria-label="Wort suchen" autocomplete="off" autocapitalize="off" spellcheck="false" enterkeyhint="search">
        <span class="ws-direction" id="wordSearchDirection">DE → AR</span>
      </div>
      <div class="ws-controls">
        <div class="ws-levels" role="group" aria-label="Niveau">${WORD_SEARCH_LEVELS.map(([value,label])=>`<button type="button" data-ws-level="${value}" aria-pressed="${prefs.level===value}">${label}</button>`).join('')}</div>
        <button type="button" class="ws-settings-btn" id="wordSearchSettingsBtn" aria-expanded="false" aria-controls="wordSearchSettings">⚙ Anpassen</button>
      </div>
      <div class="ws-settings" id="wordSearchSettings" hidden>
        ${toggle('lessons','Lektionen & Verben','كلمات الدروس والأفعال والـSatzbaukasten')}
        ${toggle('basics','Grundwortschatz','أهم الكلمات الأساسية المراجَعة')}
        ${toggle('big','Großes Wörterbuch','القاموس الكبير (ترجمة تقريبية)')}
        ${toggle('images','Bilder zeigen','صورة الكلمة لو موجودة')}
      </div>
      <div class="result-count" id="wordSearchCount"></div>
    </section>
    <div id="wordSearchResults"></div>`;
  const input=$('#wordSearchInput');
  const results=$('#wordSearchResults');
  const count=$('#wordSearchCount');
  let drawRequest=0;
  let timer=null;
  let found=[];
  let current=0;
  const curatedHtml=()=>`<div id="wordSearchCurated">${found.length
    ?`${wordSearchBestCard(found[current],prefs)}${found.length>1?`<div class="ws-section-title">Weitere Treffer <small>${found.length-1}</small></div><div class="ws-rows">${found.map((entry,index)=>index===current?'':wordSearchRow(entry,index,current)).join('')}</div>`:''}`
    :''}</div>`;
  const draw=async()=>{
    const requestId=++drawRequest;
    const raw=input.value.trim();
    const query=normalizeWordForSearch(raw);
    $('#wordSearchDirection').textContent=/[؀-ۿ]/.test(raw)?'AR → DE':'DE → AR';
    if(query.length<2){
      found=[];
      count.textContent='';
      results.innerHTML=wordSearchEmptyHtml();
      return;
    }
    found=rankCuratedEntries(filterWordSearchEntries(curatedDictionaryEntries(),prefs),raw,30);
    current=0;
    const online=onlineDictionaryHtml(raw);
    const bigTitle=`<div class="ws-section-title">Großes Wörterbuch <small>automatisch übersetzt – bitte prüfen</small></div>`;
    if(!prefs.big){
      count.textContent=found.length?`${found.length} geprüfte Treffer`:'Kein geprüfter Treffer';
      results.innerHTML=curatedHtml()+(found.length?'':'<div class="card word-result-empty">Kein geprüfter Treffer. Schalte unter „Anpassen“ das große Wörterbuch ein oder suche online.</div>')+online;
      return;
    }
    count.textContent=`${found.length} geprüfte Treffer · großes Wörterbuch wird durchsucht…`;
    results.innerHTML=curatedHtml()+bigTitle+'<div class="card word-result-empty">Wird durchsucht…</div>'+online;
    let big=[];
    try{ big=await searchOfflineDictionary(query,30); }
    catch(error){
      if(requestId!==drawRequest) return;
      count.textContent=`${found.length} geprüfte Treffer · großes Wörterbuch nicht verfügbar`;
      results.innerHTML=curatedHtml()+bigTitle+'<div class="card word-result-empty">Das große Wörterbuch konnte nicht geladen werden. Öffne es einmal mit Internet oder speichere es offline.</div>'+online;
      return;
    }
    if(requestId!==drawRequest) return;
    count.textContent=found.length||big.length?`${found.length} geprüft · ${big.length} im großen Wörterbuch`:'Kein Treffer – versuche die Online-Wörterbücher';
    // With reviewed hits the approximate dictionary stays folded away.
    const bigHtml=big.length
      ?`<details class="ws-big"${found.length?'':' open'}><summary>${found.length?`${big.length} weitere Einträge anzeigen`:`${big.length} Einträge`}</summary><div class="ws-rows">${big.map(wordSearchBigRow).join('')}</div></details>`
      :'<div class="card word-result-empty">Kein Eintrag im großen Wörterbuch.</div>';
    results.innerHTML=curatedHtml()+bigTitle+bigHtml+online;
  };
  results.addEventListener('click',event=>{
    const say=event.target.closest('[data-ws-say]');
    if(say){ speakText(say.dataset.wsSay,'de'); return; }
    const pick=event.target.closest('[data-ws-pick]');
    if(pick){
      current=Number(pick.dataset.wsPick);
      rememberWordSearch(input.value);
      $('#wordSearchCurated').outerHTML=curatedHtml();
      results.querySelector('.ws-best')?.scrollIntoView({behavior:'smooth',block:'center'});
      return;
    }
    const fav=event.target.closest('[data-ws-fav]');
    if(fav&&found[current]){
      const active=toggleFavoriteWord(wordSearchFavoritePayload(found[current]));
      fav.classList.toggle('active',active);
      fav.setAttribute('aria-pressed',String(active));
      fav.innerHTML=active?'&#9829;':'&#9825;';
      return;
    }
    const recent=event.target.closest('[data-ws-recent]');
    if(recent){ input.value=recent.dataset.wsRecent; draw(); return; }
    if(event.target.closest('[data-ws-clear-recent]')){
      try{ localStorage.removeItem(WORD_SEARCH_RECENT_KEY); }catch{}
      draw();
    }
  });
  wireOnlineTranslate(results);
  $$('[data-ws-level]').forEach(button=>button.addEventListener('click',()=>{
    prefs.level=button.dataset.wsLevel;
    saveWordSearchPrefs(prefs);
    $$('[data-ws-level]').forEach(item=>item.setAttribute('aria-pressed',String(item===button)));
    draw();
  }));
  const settingsBtn=$('#wordSearchSettingsBtn');
  settingsBtn.addEventListener('click',()=>{
    const panel=$('#wordSearchSettings');
    panel.hidden=!panel.hidden;
    settingsBtn.setAttribute('aria-expanded',String(!panel.hidden));
  });
  $$('[data-ws-pref]').forEach(box=>box.addEventListener('change',()=>{
    prefs[box.dataset.wsPref]=box.checked;
    saveWordSearchPrefs(prefs);
    draw();
  }));
  input.addEventListener('input',()=>{clearTimeout(timer);timer=setTimeout(draw,220);});
  input.addEventListener('change',()=>rememberWordSearch(input.value));
  input.addEventListener('keydown',event=>{ if(event.key==='Enter'){ rememberWordSearch(input.value); input.blur(); } });
  draw();
  if(prefill||!('ontouchstart' in window)) input.focus();
}

function renderFavorites(){
  setTop('Favoriten','Gespeicherte Wörter',true);
  const saved=favoriteList();
  view.innerHTML=`
    <div class="hero"><h2>Favoriten</h2>
      <p>Alle Wörter, die du mit dem Herz gespeichert hast.</p>
    </div>
    <div class="search-panel">
      <div class="search-row">
        <input class="library-search" id="favoriteSearch" type="search" placeholder="In Favoriten suchen..." aria-label="Favoriten suchen">
        <button type="button" class="btn btn-ghost" onclick="go('word-search')">Wortsuche</button>
      </div>
      <div class="result-count" id="favoriteCount"></div>
    </div>
    <div id="favoriteResults"></div>`;
  const input=$('#favoriteSearch');
  const results=$('#favoriteResults');
  const entriesById=new Map(allVocabularyEntries().map(entry=>[entry.id,entry]));
  const draw=()=>{
    const query=normalizeWordForSearch(input.value);
    const visible=saved.filter(item=>{
      const entry=entriesById.get(item.dictionaryId||item.id);
      const text=entry
        ?entry.search
        :normalizeWordForSearch(`${item.word||''} ${item.meaning||''} ${item.context||''}`);
      return !query || text.includes(query);
    });
    $('#favoriteCount').textContent=`${visible.length} / ${saved.length} Wörter`;
    if(!saved.length){
      results.innerHTML='<div class="card word-result-empty">Noch keine Favoriten. Markiere ein Wort und tippe auf das Herz.</div>';
      return;
    }
    results.innerHTML=visible.length
      ?visible.map(item=>{
        const entry=entriesById.get(item.dictionaryId||item.id);
        return entry?wordResultCard(entry):customFavoriteCard(item);
      }).join('')
      :'<div class="card word-result-empty">Kein Favorit passt zu deiner Suche.</div>';
  };
  input.addEventListener('input',draw);
  draw();
}
