/* ===================== dictionary and expressions ===================== */
function renderFullDictionary(){
  setTop('Offline-Wörterbuch','Deutsch ↔ Arabisch',true);
  const total=Number(OFFLINE_DICTIONARY_META.entries).toLocaleString('de-DE');
  view.innerHTML=`
    <div class="hero"><h2>Deutsch–Arabisch Offline</h2>
      <p>Zuerst siehst du geprüfte Übersetzungen aus den Lektionen und dem Grundwortschatz, danach das große Offline-Wörterbuch und Links zu PONS, Langenscheidt und Reverso.</p>
      <div class="ar" style="display:block">النتايج الأول من ترجمات مراجَعة (كلمات الدروس + أهم كلمات اللغة)، بعدها القاموس الكبير (ترجمة آلية تقريبية)، وفي الآخر روابط لقواميس أونلاين أدق. لتشغيل القاموس الكبير بدون إنترنت اضغط حفظ القاموس أوفلاين.</div>
      <div class="offline-dict-actions"><div class="offline-ready" id="offlineDictionaryStatus">${total} Einträge · wird vorbereitet…</div><button type="button" class="offline-dict-download" id="offlineDictionaryDownload" onclick="downloadOfflineDictionary(this)">⬇ Wörterbuch offline speichern</button></div>
    </div>
    <div class="search-panel">
      <div class="search-row">
        <input class="library-search" id="offlineDictionarySearch" type="search" placeholder="Deutsch oder Arabisch suchen..." aria-label="Im Offline-Wörterbuch suchen" autocomplete="off">
      </div>
      <div class="result-count" id="offlineDictionaryCount">${total} Wörter und Ausdrücke</div>
    </div>
    <div class="offline-dict-results" id="offlineDictionaryResults"><div class="card word-result-empty">Gib mindestens zwei Zeichen ein.</div></div>
    <div class="offline-dict-source">Quellen: geprüfter Grundwortschatz und Lektionswörter dieses Programms; Deutsches Wiktionary, aufbereitet mit Kaikki/Wiktextract (CC BY-SA 4.0), sowie FreeDict Deutsch–Englisch und Englisch–Arabisch (GPL/AGPL). FreeDict-Einträge sind über das Englische übersetzt und deshalb nur ungefähr.</div>`;
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
    const curated=curatedDictionaryMatches(query,12);
    const head=curatedDictionaryResultsHtml(curated)+onlineDictionaryHtml(query);
    $('#offlineDictionaryCount').textContent=`${curated.length} geprüfte Treffer · großes Wörterbuch wird durchsucht…`;
    results.innerHTML=head+'<div class="offline-dict-heading">Großes Wörterbuch <small>automatisch übersetzt – bitte prüfen</small></div><div class="card word-result-empty">Wörterbuch wird durchsucht…</div>';
    let found=[];
    try{
      found=await searchOfflineDictionary(query,60);
    }catch(error){
      if(requestId!==drawRequest) return;
      $('#offlineDictionaryCount').textContent=`${curated.length} geprüfte Treffer · großes Wörterbuch nicht verfügbar`;
      results.innerHTML=head+'<div class="card word-result-empty">Das große Offline-Wörterbuch konnte nicht geladen werden.</div>';
      return;
    }
    if(requestId!==drawRequest) return;
    $('#offlineDictionaryCount').textContent=`${curated.length} geprüfte + ${found.length} weitere Treffer`;
    results.innerHTML=head+'<div class="offline-dict-heading">Großes Wörterbuch <small>automatisch übersetzt – bitte prüfen</small></div>'+offlineDictionaryResultsHtml(found);
  };
  results.addEventListener('click',event=>{
    const button=event.target.closest('#onlineTranslateBtn');
    if(!button) return;
    const output=$('#onlineTranslateResult');
    const text=button.dataset.query||'';
    const fromArabic=/[\u0600-\u06ff]/.test(text);
    button.disabled=true;
    output.textContent='جارٍ الترجمة…';
    requestTranslation(text,fromArabic?'ar':'de',fromArabic?'de':'ar')
      .then(value=>{ output.textContent=value||'لا توجد ترجمة'; })
      .catch(()=>{ output.textContent=navigator.onLine?'تعذرت الترجمة الآن':'محتاج إنترنت للترجمة الأونلاين'; })
      .finally(()=>{ button.disabled=false; });
  });
  input.addEventListener('input',()=>{ clearTimeout(timer); timer=setTimeout(draw,260); });
  input.focus();
}

let curatedDictionaryCache=null;
function curatedDictionaryEntries(){
  if(curatedDictionaryCache) return curatedDictionaryCache;
  const list=[];
  const seen=new Set();
  const add=entry=>{
    const arabic=plainText(entry.ar||'');
    if(!entry.word||!/[\u0600-\u06ff]/.test(arabic)) return;
    // "das Haus, -er" and "das Haus" are the same headword; the plural is only a form.
    const headword=String(entry.word).replace(/\s*[,(].*$/,'');
    const key=`${normalizeWordForSearch(headword)}|${normalizeWordForSearch(arabic)}`;
    if(seen.has(key)) return;
    seen.add(key);
    list.push({...entry,ar:arabic,key:normalizeWordForSearch(headword),bare:bareWordKey(headword),arKey:normalizeWordForSearch(arabic)});
  };
  (window.CORE_DICTIONARY||[]).forEach(([word,pos,arabic,forms,example])=>add({word,pos,ar:arabic,forms,example,source:'Grundwortschatz',rank:0}));
  const perfect=verb=>verb.part?`${verb.praet||''} · ${verb.aux==='sein'?'ist':'hat'} ${verb.part}`:'';
  [...A1_VERBS,...VERBS,...(window.B1_VERBS||[])].forEach(verb=>add({word:verb.inf,pos:'v',ar:verb.ar,forms:[perfect(verb),verb.rektion||''].filter(Boolean).join(' · '),example:verb.example,source:'Verbliste',rank:1}));
  const bs=window.BAUSTEINE||{};
  [...(bs.reflexive||[]),...(bs.prepVerbs||[])].forEach(item=>add({word:item.v,pos:'v',ar:item.ar,forms:(item.p||[]).map(([prep,kasus])=>`${prep} + ${kasus==='A'?'Akk':'Dat'}`).join(' · '),example:item.ex,source:'Satzbaukasten',rank:1,route:item.p&&!item.v.startsWith('sich')?'bausteine/praepverben':'bausteine/reflexiv'}));
  (bs.dativeVerbs||[]).forEach(item=>add({word:item.v,pos:'v',ar:item.ar,forms:'+ Dativ',example:item.ex,source:'Satzbaukasten',rank:1,route:'bausteine/dativverben'}));
  allVocabularyEntries().forEach(entry=>add({word:entry.word,pos:'',ar:entry.item.ar,forms:'',example:plainText(entry.item.ex||''),definition:plainText(entry.item.d||''),source:`${entry.level} · Kapitel ${entry.chapter.num}`,rank:1,route:entry.route}));
  curatedDictionaryCache=list;
  return list;
}

function rankCuratedEntries(entries,value,limit=12){
  const query=normalizeWordForSearch(value);
  if(query.length<2) return [];
  const bare=bareWordKey(value);
  const arabic=/[\u0600-\u06ff]/.test(query);
  const scored=[];
  for(const entry of entries){
    let score=-1;
    if(arabic){
      const tokens=entry.arKey.split(' ');
      if(entry.arKey===query||tokens.includes(query)) score=0;
      else if(tokens.some(token=>token.startsWith(query)||token.replace(/^ال/,'')===query.replace(/^ال/,''))) score=1;
      else if(entry.arKey.includes(query)) score=2;
    }else{
      if(entry.key===query||entry.bare===bare) score=0;
      else if(entry.key.startsWith(query)||entry.bare.startsWith(bare)) score=1;
      else if(entry.key.split(' ').includes(query)) score=1;
      else if(query.length>=4&&entry.key.includes(query)) score=2;
    }
    if(score>=0) scored.push({entry,score:score*10+(entry.rank||0)});
  }
  return scored.sort((a,b)=>a.score-b.score||a.entry.word.length-b.entry.word.length)
    .slice(0,limit).map(item=>item.entry);
}

function curatedDictionaryMatches(value,limit=12){
  return rankCuratedEntries(curatedDictionaryEntries(),value,limit);
}

function curatedDictionaryCard(entry){
  return `<article class="offline-dict-card curated-dict-card">
    <div class="offline-dict-head"><div class="offline-dict-word">${fmtWord(escapeHtml(entry.word))}</div><span class="offline-dict-pos verified">✓ ${escapeHtml(entry.source)}</span></div>
    <div class="offline-dict-ar" lang="ar">${escapeHtml(entry.ar)}</div>
    ${entry.forms?`<div class="offline-dict-details"><span class="offline-dict-chip">${escapeHtml(entry.forms)}</span></div>`:''}
    ${entry.definition?`<div class="offline-dict-note">${escapeHtml(entry.definition)}</div>`:''}
    ${entry.example?`<div class="dictionary-example">„${escapeHtml(entry.example)}“</div>`:''}
    ${entry.route?`<button type="button" class="curated-dict-link" onclick="go('${escapeHtml(entry.route)}')">Zur Lektion / Liste →</button>`:''}
  </article>`;
}

function curatedDictionaryResultsHtml(entries){
  if(!entries.length) return '';
  return `<div class="offline-dict-heading">Geprüfte Übersetzungen <small>aus Lektionen und Grundwortschatz</small></div>${entries.map(curatedDictionaryCard).join('')}`;
}

function onlineDictionaryLinks(value){
  const text=String(value||'').trim();
  const q=encodeURIComponent(text);
  const fromArabic=/[\u0600-\u06ff]/.test(text);
  return [
    ['PONS',`https://de.pons.com/${encodeURIComponent('übersetzung')}/${fromArabic?'arabisch-deutsch':'deutsch-arabisch'}/${q}`],
    ['Langenscheidt',`https://de.langenscheidt.com/${fromArabic?'arabisch-deutsch':'deutsch-arabisch'}/${q}`],
    ['Reverso Context',`https://context.reverso.net/translation/${fromArabic?'arabic-german':'german-arabic'}/${q}`],
    ['Glosbe',`https://de.glosbe.com/${fromArabic?'ar/de':'de/ar'}/${q}`],
    ['Google Übersetzer',`https://translate.google.com/?sl=${fromArabic?'ar':'de'}&tl=${fromArabic?'de':'ar'}&text=${q}&op=translate`]
  ];
}

function onlineDictionaryHtml(value){
  return `<section class="online-dict-panel">
    <div class="offline-dict-heading">Online genauer nachschlagen <small>braucht Internet</small></div>
    <div class="online-dict-links">${onlineDictionaryLinks(value).map(([label,url])=>`<a href="${escapeHtml(url)}" target="_blank" rel="noopener">${label} ↗</a>`).join('')}</div>
    <div class="online-dict-translate"><button type="button" id="onlineTranslateBtn" data-query="${escapeHtml(value)}">Jetzt übersetzen</button><span id="onlineTranslateResult" lang="ar" dir="auto"></span></div>
  </section>`;
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
