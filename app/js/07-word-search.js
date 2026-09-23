/* ===================== global word search and favorites ===================== */
function renderWordSearch(){
  setTop('Wortsuche','Lektionen + vollständiges Wörterbuch',true);
  const entries=allVocabularyEntries();
  const prefill=localStorage.getItem(WORD_SEARCH_PREFILL_KEY)||'';
  localStorage.removeItem(WORD_SEARCH_PREFILL_KEY);
  view.innerHTML=`
    <div class="hero"><h2>Suche im ganzen Programm</h2>
      <p>Eine Suche zeigt gleichzeitig passende Wörter aus A1/A2 und Ergebnisse aus dem vollständigen Deutsch–Arabisch-Wörterbuch.</p>
      <div class="ar" style="display:block">البحث هنا يشمل كلمات الدروس في البرنامج والقاموس الألماني–العربي الكامل في نفس الوقت.</div>
    </div>
    <div class="search-panel">
      <div class="search-row">
        <input class="library-search" id="wordSearchInput" type="search" placeholder="Wort oder Bedeutung suchen..." value="${escapeHtml(prefill)}" aria-label="Wort suchen">
        <select class="library-filter" id="wordSearchLevel" aria-label="Niveau filtern">
          <option value="">A1 + A2</option>
          <option value="A1">A1</option>
          <option value="A2">A2</option>
        </select>
      </div>
      <div class="result-count" id="wordSearchCount"></div>
    </div>
    <div id="wordSearchResults"></div>`;
  const input=$('#wordSearchInput');
  const level=$('#wordSearchLevel');
  const results=$('#wordSearchResults');
  let drawRequest=0;
  let timer=null;
  const draw=async()=>{
    const requestId=++drawRequest;
    const query=normalizeWordForSearch(input.value);
    if(query.length<2){
      $('#wordSearchCount').textContent=`${entries.length} Wörter verfügbar`;
      results.innerHTML='<div class="card word-result-empty">Gib mindestens zwei Zeichen ein.</div>';
      return;
    }
    const found=entries.filter(entry=>
      (!level.value||entry.level===level.value)&&entry.search.includes(query)
    ).sort((a,b)=>{
      const exactA=(a.key===query||a.bareKey===query)?0:1;
      const exactB=(b.key===query||b.bareKey===query)?0:1;
      return exactA-exactB || a.level.localeCompare(b.level) || a.chapter.num-b.chapter.num;
    }).slice(0,60);
    $('#wordSearchCount').textContent=found.length
      ?`${found.length} Treffer im Programm · Wörterbuch wird durchsucht…`
      :'Vollständiges Wörterbuch wird durchsucht…';
    results.innerHTML=`${found.length?`<div class="section-label">Im Lernprogramm · ${found.length}</div>${found.map(entry=>wordResultCard(entry)).join('')}`:''}<div class="section-label">Vollständiges Deutsch–Arabisch-Wörterbuch</div><div class="card word-result-empty">Wörterbuch wird durchsucht…</div>`;
    let fallback=[];
    try{
      fallback=await searchOfflineDictionary(query,40);
    }catch(error){
      if(requestId!==drawRequest) return;
      $('#wordSearchCount').textContent=found.length?`${found.length} Treffer im Programm · Wörterbuch nicht verfügbar`:'Wörterbuch nicht verfügbar';
      results.innerHTML=`${found.length?`<div class="section-label">Im Lernprogramm · ${found.length}</div>${found.map(entry=>wordResultCard(entry)).join('')}`:''}<div class="section-label">Vollständiges Wörterbuch</div><div class="card word-result-empty">Das vollständige Wörterbuch konnte nicht geladen werden. Öffne es einmal mit Internet oder speichere es offline.</div>`;
      return;
    }
    if(requestId!==drawRequest) return;
    const total=found.length+fallback.length;
    $('#wordSearchCount').textContent=total?`${found.length} im Programm + ${fallback.length} im Wörterbuch`:'Kein Treffer';
    results.innerHTML=`
      ${found.length?`<div class="section-label">Im Lernprogramm · ${found.length}</div>${found.map(entry=>wordResultCard(entry)).join('')}`:''}
      <div class="section-label">Vollständiges Deutsch–Arabisch-Wörterbuch · ${fallback.length}</div>
      <div class="offline-dict-results">${offlineDictionaryResultsHtml(fallback)}</div>`;
  };
  input.addEventListener('input',()=>{clearTimeout(timer);timer=setTimeout(draw,240);});
  level.addEventListener('change',draw);
  draw();
  if(prefill) input.focus();
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
