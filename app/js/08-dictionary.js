/* ===================== dictionary and expressions ===================== */
function renderFullDictionary(){
  setTop('Offline-Wörterbuch','Deutsch ↔ Arabisch',true);
  const total=Number(OFFLINE_DICTIONARY_META.entries).toLocaleString('de-DE');
  view.innerHTML=`
    <div class="hero"><h2>Deutsch–Arabisch Offline</h2>
      <p>Ein umfassendes Wörterbuch mit deutschen Stichwörtern, arabischen Bedeutungen, Wortarten, Formen und Beispielen.</p>
      <div class="ar" style="display:block">قاموس ألماني–عربي شامل داخل التطبيق. لتشغيله بالكامل بدون إنترنت اضغط حفظ القاموس أوفلاين وانتظر اكتمال كل الملفات.</div>
      <div class="offline-dict-actions"><div class="offline-ready" id="offlineDictionaryStatus">${total} Einträge · wird vorbereitet…</div><button type="button" class="offline-dict-download" id="offlineDictionaryDownload" onclick="downloadOfflineDictionary(this)">⬇ Wörterbuch offline speichern</button></div>
    </div>
    <div class="search-panel">
      <div class="search-row">
        <input class="library-search" id="offlineDictionarySearch" type="search" placeholder="Deutsch oder Arabisch suchen..." aria-label="Im Offline-Wörterbuch suchen" autocomplete="off">
      </div>
      <div class="result-count" id="offlineDictionaryCount">${total} Wörter und Ausdrücke</div>
    </div>
    <div class="offline-dict-results" id="offlineDictionaryResults"><div class="card word-result-empty">Gib mindestens zwei Zeichen ein.</div></div>
    <div class="offline-dict-source">Quellen: Deutsches Wiktionary, aufbereitet mit Kaikki/Wiktextract (CC BY-SA 4.0), sowie FreeDict Deutsch–Englisch und Englisch–Arabisch (GPL/AGPL). Die direkte Wiktionary-Übersetzung wird bevorzugt; FreeDict erweitert die Abdeckung über gemeinsame englische Bedeutungen.</div>`;
  const input=$('#offlineDictionarySearch');
  const results=$('#offlineDictionaryResults');
  let timer=null;
  let drawRequest=0;
  ensureOfflineDictionary().then(()=>{
    syncOfflineDictionaryStatus();
  }).catch(()=>{
    const status=$('#offlineDictionaryStatus');
    if(status) status.textContent='Wörterbuch konnte nicht geladen werden';
  });
  syncOfflineDictionaryStatus();
  const draw=async()=>{
    const requestId=++drawRequest;
    const query=input.value.trim();
    if(normalizeWordForSearch(query).length<2){
      $('#offlineDictionaryCount').textContent=`${total} Wörter und Ausdrücke`;
      results.innerHTML='<div class="card word-result-empty">Gib mindestens zwei Zeichen ein.</div>';
      return;
    }
    $('#offlineDictionaryCount').textContent='Suche läuft…';
    results.innerHTML='<div class="card word-result-empty">Wörterbuch wird durchsucht…</div>';
    let found=[];
    try{
      found=await searchOfflineDictionary(query,80);
    }catch(error){
      if(requestId!==drawRequest) return;
      $('#offlineDictionaryCount').textContent='Wörterbuch nicht verfügbar';
      results.innerHTML='<div class="card word-result-empty">Das Offline-Wörterbuch konnte nicht geladen werden.</div>';
      return;
    }
    if(requestId!==drawRequest) return;
    $('#offlineDictionaryCount').textContent=`${found.length} Treffer`;
    results.innerHTML=offlineDictionaryResultsHtml(found);
  };
  input.addEventListener('input',()=>{ clearTimeout(timer); timer=setTimeout(draw,260); });
  input.focus();
}

function renderDictionary(){
  setTop('A2 Wörterbuch','Alle Wörter aus den Lektionen',true);
  const words=BOOK.flatMap(chapter=>chapter.vocab.map(item=>({...item,chapter:chapter.num,title:chapter.title})))
    .sort((a,b)=>a.w.localeCompare(b.w,'de'));
  view.innerHTML=mainTabs('dict')+`
    <div class="hero"><h2>Wörterbuch A2</h2>
      <p>Suche auf Deutsch oder Arabisch. Der Wortschatz deckt jetzt alle Kapitel 1–12 ab.</p>
      ${ar('ابحث بالألماني أو العربي. القاموس بيجمع كلمات كل الفصول من 1 إلى 12 مع الشرح والمثال.')}</div>
    <div class="search-panel">
      <div class="search-row">
        <input class="library-search" id="dictionarySearch" type="search" placeholder="Deutsch oder Arabisch suchen..." aria-label="Wörter suchen">
        <select class="library-filter" id="dictionaryChapter" aria-label="Kapitel filtern">
          <option value="">Alle Kapitel</option>${BOOK.map(c=>`<option value="${c.num}">Kapitel ${c.num}</option>`).join('')}
        </select>
      </div>
      <div class="result-count" id="dictionaryCount"></div>
    </div>
    <div class="card" id="dictionaryList">${words.map((v,index)=>`
      <article class="dictionary-entry" data-index="${index}" data-chapter="${v.chapter}"
        data-search="${escapeHtml(`${v.w} ${v.d} ${v.ex||''} ${v.ar||''}`.toLocaleLowerCase('de-DE'))}">
        <div><div class="dictionary-word">${fmtWord(v.w)}</div>
          <div class="dictionary-definition">${v.d}</div>
          ${v.ex?`<div class="dictionary-example">„${v.ex}“</div>`:''}${ar(v.ar)}</div>
        <span class="dictionary-meta">K${v.chapter}</span>
      </article>`).join('')}</div>`;
  const search=$('#dictionarySearch'),chapter=$('#dictionaryChapter');
  const filter=()=>{
    const query=search.value.trim().toLocaleLowerCase('de-DE');
    let visible=0;
    $$('#dictionaryList .dictionary-entry').forEach(entry=>{
      const show=(!query||entry.dataset.search.includes(query))&&(!chapter.value||entry.dataset.chapter===chapter.value);
      entry.hidden=!show; if(show) visible++;
    });
    $('#dictionaryCount').textContent=`${visible} / ${words.length} Wörter`;
  };
  search.addEventListener('input',filter); chapter.addEventListener('change',filter); filter();
}

function renderVerbs(){
  setTop('A2 Verbwörterbuch','Konjugation, Präteritum & Perfekt',true);
  view.innerHTML=mainTabs('verbs')+`
    <div class="hero"><h2>Verben A2</h2>
      <p>Präsens mit allen Personen, Präteritum und Perfekt mit <b>haben</b> oder <b>sein</b>.</p>
      ${ar('قاموس أفعال فيه تصريف المضارع مع كل الضمائر، والماضي البسيط، والـPerfekt مع توضيح الفعل المساعد haben أو sein.')}</div>
    <div class="search-panel">
      <div class="search-row">
        <input class="library-search" id="verbSearch" type="search" placeholder="Verb oder Bedeutung suchen..." aria-label="Verben suchen">
        <select class="library-filter" id="verbAux" aria-label="Hilfsverb filtern">
          <option value="">haben + sein</option><option value="haben">mit haben</option><option value="sein">mit sein</option>
        </select>
        <select class="library-filter" id="verbChapter" aria-label="Kapitel filtern">
          <option value="">Alle Kapitel</option>${BOOK.map(c=>`<option value="${c.num}">Kapitel ${c.num}</option>`).join('')}
        </select>
      </div>
      <div class="result-count" id="verbCount"></div>
    </div>
    <div id="verbList">${VERBS.map((verb,index)=>`
      <article class="card verb-card" data-index="${index}" data-aux="${verb.aux}" data-chapter="${verb.chapter}" tabindex="0" role="button" aria-expanded="false"
        data-search="${escapeHtml(`${verb.inf} ${verb.praet} ${verb.part} ${verb.ar} ${verb.example}`.toLocaleLowerCase('de-DE'))}">
        <div class="verb-summary">
          <div><div class="verb-inf">${verb.inf}</div>
            <div class="verb-summary-line">${verb.praet} · ${verb.aux} ${verb.part}</div></div>
          <span class="verb-chevron">⌄</span>
        </div>
        <div class="verb-details">
          <div class="verb-head"><div>${ar(verb.ar)}</div><span class="verb-aux ${verb.aux}">Perfekt mit ${verb.aux}</span></div>
          ${conjugationTableHtml(verb)}
          <div class="dictionary-example">„${verb.example}“</div>
          <span class="dictionary-meta">K${verb.chapter}</span>
        </div>
      </article>`).join('')}</div>`;
  const search=$('#verbSearch'),aux=$('#verbAux'),chapter=$('#verbChapter');
  const filter=()=>{
    const query=search.value.trim().toLocaleLowerCase('de-DE');
    let visible=0;
    $$('#verbList .verb-card').forEach(entry=>{
      const show=(!query||entry.dataset.search.includes(query))&&
        (!aux.value||entry.dataset.aux===aux.value)&&
        (!chapter.value||entry.dataset.chapter===chapter.value);
      entry.hidden=!show; if(show) visible++;
    });
    $('#verbCount').textContent=`${visible} / ${VERBS.length} Verben`;
  };
  $$('#verbList .verb-card').forEach(card=>{
    const toggle=()=>{
      const open=card.classList.toggle('open');
      card.setAttribute('aria-expanded',String(open));
    };
    card.addEventListener('click',event=>{ if(!event.target.closest('button,input,select')) toggle(); });
    card.addEventListener('keydown',event=>{ if(event.key==='Enter'||event.key===' '){event.preventDefault();toggle();} });
  });
  search.addEventListener('input',filter); aux.addEventListener('change',filter);
  chapter.addEventListener('change',filter); filter();
}

function renderExpressions(){
  setTop('Redewendungen A2','Fertige Ausdrücke & einfache Sprichwörter',true);
  const expressions=window.READY_EXPRESSIONS||[];
  view.innerHTML=mainTabs('phrases')+`
    <div class="hero"><h2>Redewendungen & Sprichwörter</h2>
      <p>Praktische Ausdrücke für Alltag, Prüfung und Gespräche auf A2-Niveau.</p>
      ${ar('تعبيرات جاهزة وأمثال سهلة لمواقف الحياة والامتحان والمحادثة، مع المعنى ومثال الاستخدام.')}</div>
    <div class="search-panel">
      <div class="search-row">
        <input class="library-search" id="expressionSearch" type="search" placeholder="Ausdruck suchen..." aria-label="Ausdrücke suchen">
        <select class="library-filter" id="expressionChapter" aria-label="Kapitel filtern">
          <option value="">Alle Themen</option>${BOOK.map(c=>`<option value="${c.num}">Kapitel ${c.num}</option>`).join('')}
        </select>
      </div>
      <div class="result-count" id="expressionCount"></div>
    </div>
    <div id="expressionList">${expressions.map((item,index)=>`
      <article class="card expression-card" data-index="${index}" data-chapter="${item.chapter}"
        data-search="${escapeHtml(`${item.de} ${item.meaning} ${item.ar} ${item.example}`.toLocaleLowerCase('de-DE'))}">
        <span class="expression-tag">K${item.chapter} · ${item.cat}</span>
        <div class="expression-de">${item.de}</div>
        <div class="expression-meaning">${item.meaning}</div>
        ${ar(item.ar)}
        <div class="expression-example">Beispiel: ${item.example}</div>
      </article>`).join('')}</div>`;
  const search=$('#expressionSearch'),chapter=$('#expressionChapter');
  const filter=()=>{
    const query=search.value.trim().toLocaleLowerCase('de-DE');
    let visible=0;
    $$('#expressionList .expression-card').forEach(entry=>{
      const show=(!query||entry.dataset.search.includes(query))&&(!chapter.value||entry.dataset.chapter===chapter.value);
      entry.hidden=!show; if(show) visible++;
    });
    $('#expressionCount').textContent=`${visible} / ${expressions.length} Ausdrücke`;
  };
  search.addEventListener('input',filter); chapter.addEventListener('change',filter); filter();
}
