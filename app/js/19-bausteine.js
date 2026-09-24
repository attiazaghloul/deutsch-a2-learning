/* ===================== Satzbaukasten: feste Bausteine zum Satzbau ===================== */
const BAUSTEINE_LEARN_KEY='bausteineLearnMode';
const BAUSTEINE_SECTIONS=[
  {id:'satzbau',icon:'▦',title:'Satzmuster',text:'Wo steht das Verb? Fertige Schablonen für jeden Satztyp.',ar:'قوالب جاهزة: الفعل يروح فين في كل نوع جملة.'},
  {id:'konnektoren',icon:'⇄',title:'Konnektoren',text:'Alle Bindewörter nach Wortstellung sortiert.',ar:'كل أدوات الربط مقسمة حسب مكان الفعل بعدها.'},
  {id:'fragen',icon:'?',title:'W-Fragen',text:'Jedes Fragewort mit Kasus, Beispiel und Antwort.',ar:'كل أدوات الاستفهام مع مثال وإجابة.'},
  {id:'praepositionen',icon:'↘',title:'Präpositionen',text:'Akkusativ, Dativ, Wechsel und Genitiv auf einen Blick.',ar:'حروف الجر: أكوزاتيف ولا داتيف ولا متغيرة.'},
  {id:'reflexiv',icon:'↺',title:'Reflexive Verben',text:'Mit sich im Akkusativ oder Dativ – und passender Präposition.',ar:'الأفعال المنعكسة كاملة: mich ولا mir.'},
  {id:'praepverben',icon:'+',title:'Verben mit Präposition',text:'Feste Präposition, Kasus und die Frage mit wo(r)- / da(r)-.',ar:'الأفعال اللي معاها حرف جر ثابت وحالته.'},
  {id:'dativverben',icon:'D',title:'Verben mit Dativ',text:'Verben mit Dativ und Verben mit Dativ + Akkusativ.',ar:'الأفعال اللي بعدها داتيف، واللي بتاخد مفعولين.'},
  {id:'artikel',icon:'der',title:'Nomen nach Artikel',text:'Alle Nomen aus den Lektionen – nur der, nur die oder nur das.',ar:'كل الأسماء من الدروس مفلترة حسب أداة التعريف عشان تحفظها أسهل.'},
  {id:'tabellen',icon:'▤',title:'Tabellen',text:'Pronomen, Artikel, Adjektivendungen und Modalverben.',ar:'جداول الضمائر والأدوات ونهايات الصفات.'},
  {id:'zeit',icon:'◷',title:'Zeitangaben',text:'am, im, um, seit, vor … und Wörter für „wie oft?“.',ar:'تعبيرات الوقت وحروف الجر بتاعتها.'},
  {id:'nvv',icon:'≈',title:'Nomen-Verb-Verbindungen',text:'Feste Paare wie „eine Entscheidung treffen“.',ar:'اسم + فعل ماشيين مع بعض دايمًا.'},
  {id:'satzanfaenge',icon:'❝',title:'Satzanfänge',text:'Fertige Anfänge für Meinung, Bitte, Vorschlag und Erzählen.',ar:'بدايات جمل جاهزة عشان متفكرش كتير.'}
];

function prepAdverb(prefix,prep){
  const base=String(prep||'').toLowerCase();
  return /^[aeiouäöü]/.test(base)?`${prefix}r${base}`:`${prefix}${base}`;
}

function prepQuestion(prep,kasus){
  const thing=prepAdverb('wo',prep);
  const person=`${prep.charAt(0).toUpperCase()}${prep.slice(1)} ${kasus==='D'?'wem':'wen'}?`;
  return {thing:`${thing.charAt(0).toUpperCase()}${thing.slice(1)}?`,person,pronoun:prepAdverb('da',prep)};
}

function parseArticleNoun(value){
  const match=String(value||'').replace(/<[^>]+>/g,'').trim().match(/^(der|die|das)\s+([^,(/]+?)\s*(?:,\s*(.+))?$/);
  if(!match) return null;
  return {article:match[1],noun:match[2].trim(),plural:(match[3]||'').trim()};
}

function bausteineNouns(){
  const seen=new Set();
  const nouns=[];
  [['A1',A1_BOOK],['A2',BOOK],['B1',B1_BOOK]].forEach(([level,chapters])=>{
    chapters.forEach(chapter=>(chapter.vocab||[]).forEach(item=>{
      const parsed=parseArticleNoun(item.w);
      if(!parsed) return;
      const key=`${parsed.article}|${parsed.noun.toLocaleLowerCase('de-DE')}`;
      if(seen.has(key)) return;
      seen.add(key);
      nouns.push({...parsed,level,chapter:chapter.num,ar:plainText(item.ar||''),ex:plainText(item.ex||'')});
    }));
  });
  return nouns.sort((a,b)=>a.noun.localeCompare(b.noun,'de'));
}

function bsCase(kasus){
  const label={A:'Akkusativ',D:'Dativ',G:'Genitiv'}[kasus]||kasus;
  return `<span class="bs-case bs-case-${kasus}" title="${label}">${kasus==='A'?'Akk':kasus==='D'?'Dat':'Gen'}</span>`;
}

function bsSay(text){
  return `<button type="button" class="bs-say" data-say="${escapeHtml(text)}" aria-label="Anhören">🔊</button>`;
}

function bsExample(text){
  return text?`<div class="bs-example">${bsSay(text)}<span>${escapeHtml(text)}</span></div>`:'';
}

function bsArabic(text,hide=true){
  return text?`<div class="bs-ar${hide?' bs-hide':''}" lang="ar" dir="rtl">${escapeHtml(text)}</div>`:'';
}

function bsLearnMode(){
  try{ return localStorage.getItem(BAUSTEINE_LEARN_KEY)==='1'; }catch{ return false; }
}

function bsToolbar(placeholder,filters=''){
  const on=bsLearnMode();
  return `<div class="search-panel bs-toolbar">
    <div class="search-row">
      <input class="library-search" id="bsSearch" type="search" placeholder="${placeholder}" aria-label="Suchen" autocomplete="off">
      ${filters}
    </div>
    <div class="bs-toolbar-foot"><span class="result-count" id="bsCount"></span>
      <button type="button" class="bs-learn-toggle" id="bsLearnToggle" aria-pressed="${on}">${on?'✓ Lernmodus an':'Lernmodus'}</button></div>
  </div>`;
}

function bsHero(title,text,arText){
  return `<div class="hero"><h2>${title}</h2><p>${text}</p>${arText?`<div class="bs-hero-ar" lang="ar" dir="rtl">${arText}</div>`:''}</div>`;
}

function bsFilterSelect(id,label,options){
  return `<select class="library-filter" id="${id}" aria-label="${label}">${options.map(([value,text])=>`<option value="${value}">${text}</option>`).join('')}</select>`;
}

const BS_LEVEL_OPTIONS=[['','A1–B1'],['A1','A1'],['A2','A2'],['B1','B1']];

function renderBausteineHome(){
  setTop('Satzbaukasten','Feste Bausteine für jeden Satz',true);
  view.innerHTML=bsHero('Satzbaukasten',
    'Die festen Teile der Sprache an einem Ort: Wortstellung, Konnektoren, Fragewörter, Präpositionen, Verben mit festem Kasus und Artikel. Einmal lernen – und beim Sprechen weniger nachdenken.',
    'الحاجات الثابتة في اللغة في مكان واحد: ترتيب الجملة، أدوات الربط والاستفهام، حروف الجر، الأفعال اللي ليها حالة ثابتة، وأدوات التعريف. احفظها مرة وهتكوّن جملك أسرع.')
    +`<section class="section-card-grid bs-grid">${BAUSTEINE_SECTIONS.map(item=>`
      <button type="button" class="section-card" onclick="go('bausteine/${item.id}')">
        <span class="icon">${item.icon}</span>
        <span><b>${item.title}</b><span>${item.text}</span><span class="bs-card-ar" lang="ar" dir="rtl">${item.ar}</span></span>
      </button>`).join('')}</section>
    <div class="card bs-tip"><b>Tipp: Lernmodus</b><p>In jeder Liste kannst du den Lernmodus einschalten. Dann werden Bedeutung, Kasus oder Artikel versteckt – tippe darauf, um dich selbst zu prüfen.</p>
      <div class="bs-ar" lang="ar" dir="rtl">شغّل «Lernmodus» في أي قائمة: المعنى أو الحالة أو الأداة هتستخبى، واضغط عليها عشان تختبر نفسك.</div></div>`;
}

function renderBaustein(id){
  const section=BAUSTEINE_SECTIONS.find(item=>item.id===id);
  if(!section){ renderBausteineHome(); return; }
  setTop(section.title,'Satzbaukasten',true);
  const renderers={
    satzbau:bsPatternsHtml,konnektoren:bsConnectorsHtml,fragen:bsQuestionsHtml,praepositionen:bsPrepositionsHtml,
    reflexiv:bsReflexiveHtml,praepverben:bsPrepVerbsHtml,dativverben:bsDativeHtml,artikel:bsArticlesHtml,
    tabellen:bsTablesHtml,zeit:bsTimeHtml,nvv:bsNounVerbHtml,satzanfaenge:bsStartersHtml
  };
  view.innerHTML=`<div class="bausteine${bsLearnMode()?' bs-learning':''}" id="bausteineRoot">${renderers[id]()}</div>`;
  bsWire(id);
}

function bsVerbSlot(slot){
  return /^(Verb|Verb 1|Verb 2 \(Ende\)|Verb \(Ende\)|Ende|zu \+ Infinitiv|Relativpronomen|Konnektor)$/.test(slot);
}

function bsPatternsHtml(){
  const patterns=window.BAUSTEINE?.patterns||[];
  return bsHero('Satzmuster','Jede Zeile ist eine Schablone. Setze deine Wörter in die Felder – das Verb bleibt immer an seinem Platz.',
    'كل سطر قالب. حط كلماتك في الخانات، والفعل دايمًا في مكانه الملوّن.')
    +`<nav class="bs-jump" aria-label="Satzmuster">${patterns.map(item=>`<a href="#bausteine/satzbau" data-jump="bs-${item.id}">${item.title}</a>`).join('')}</nav>`
    +patterns.map(pattern=>`<section class="card bs-pattern" id="bs-${pattern.id}">
      <h3>${pattern.title}</h3>
      <div class="bs-rule"><b>${escapeHtml(pattern.rule)}</b><div class="bs-ar" lang="ar" dir="rtl">${escapeHtml(pattern.ruleAr)}</div></div>
      <div class="bs-table-wrap"><table class="bs-slots">
        <thead><tr>${pattern.slots.map((slot,index)=>`<th class="${bsVerbSlot(slot)?'bs-verb-col':''}">${slot}</th>`).join('')}</tr></thead>
        <tbody>${pattern.rows.map(row=>`<tr>${row.cells.map((cell,index)=>`<td class="${bsVerbSlot(pattern.slots[index])?'bs-verb-col':''}">${escapeHtml(cell)}</td>`).join('')}</tr>
          <tr class="bs-row-ar"><td colspan="${pattern.slots.length}">${bsSay(row.cells.join(' ').replace(/\s+/g,' ').trim())}<span lang="ar" dir="rtl">${escapeHtml(row.ar)}</span></td></tr>`).join('')}</tbody>
      </table></div>
    </section>`).join('');
}

function bsConnectorsHtml(){
  const groups=window.BAUSTEINE?.connectors||[];
  return bsHero('Konnektoren','Wichtig ist nicht nur die Bedeutung, sondern was danach mit dem Verb passiert. Deshalb sind alle Konnektoren nach Wortstellung sortiert.',
    'المهم مش بس المعنى، لكن الفعل بيروح فين بعد الأداة. عشان كده الأدوات متقسمة حسب ترتيب الجملة.')
    +bsToolbar('Konnektor oder Bedeutung suchen…',bsFilterSelect('bsGroup','Gruppe',[['','Alle Gruppen'],...groups.map(g=>[g.id,g.title.split(' – ')[0]])]))
    +groups.map(group=>`<section class="card bs-group" data-group="${group.id}">
      <h3>${group.title}</h3><div class="bs-group-ar" lang="ar" dir="rtl">${group.titleAr}</div>
      <div class="bs-rule"><b>${escapeHtml(group.rule)}</b><div class="bs-ar" lang="ar" dir="rtl">${escapeHtml(group.ruleAr)}</div></div>
      ${group.items.map(item=>`<article class="bs-item" data-group="${group.id}" data-search="${escapeHtml(normalizeWordForSearch(`${item.w} ${item.ar} ${item.ex}`))}">
        <div class="bs-item-head"><span class="bs-word">${escapeHtml(item.w)}</span></div>
        ${bsArabic(item.ar)}${bsExample(item.ex)}
      </article>`).join('')}
    </section>`).join('');
}

function bsQuestionsHtml(){
  const items=window.BAUSTEINE?.questions||[];
  return bsHero('W-Fragen','Jedes Fragewort mit dem, wonach es fragt, einem Beispiel und einer typischen Antwort. Die Frage steht mit dem Verb auf Position 2.',
    'كل أداة استفهام مع بتسأل عن إيه، ومثال وإجابة. بعد أداة السؤال الفعل على طول.')
    +bsToolbar('Fragewort suchen…')
    +`<div class="bs-list">${items.map(item=>`<article class="card bs-item" data-search="${escapeHtml(normalizeWordForSearch(`${item.w} ${item.use} ${item.ar} ${item.ex}`))}">
      <div class="bs-item-head"><span class="bs-word">${escapeHtml(item.w)}</span><span class="bs-tag">${escapeHtml(item.use)}</span></div>
      ${bsArabic(item.ar)}${bsExample(item.ex)}
      <div class="bs-answer">→ ${escapeHtml(item.ans)}</div>
    </article>`).join('')}</div>`;
}

function bsPrepositionsHtml(){
  const data=window.BAUSTEINE||{};
  const groups=data.prepositions||[];
  return bsHero('Präpositionen','Welcher Kasus kommt nach der Präposition? Bei Wechselpräpositionen entscheidet die Frage: Wo? → Dativ, Wohin? → Akkusativ.',
    'كل حرف جر وبعده أنهي حالة. في الحروف المتغيرة: فين؟ (مكان ثابت) داتيف – على فين؟ (حركة لمكان) أكوزاتيف.')
    +bsToolbar('Präposition oder Bedeutung…',bsFilterSelect('bsGroup','Kasus',[['','Alle'],...groups.map(g=>[g.id,g.title.split(':')[0]])]))
    +groups.map(group=>`<section class="card bs-group bs-prep-${group.id}" data-group="${group.id}">
      <h3>${group.title}</h3><div class="bs-group-ar" lang="ar" dir="rtl">${group.titleAr}</div>
      <div class="bs-mnemonic">${escapeHtml(group.mnemonic)}</div>
      ${group.items.map(item=>`<article class="bs-item" data-group="${group.id}" data-search="${escapeHtml(normalizeWordForSearch(`${item.p} ${item.ar} ${item.ex||''} ${item.wo||''} ${item.wohin||''}`))}">
        <div class="bs-item-head"><span class="bs-word">${escapeHtml(item.p)}</span>${group.id==='wechsel'?`${bsCase('D')}<span class="bs-slash">/</span>${bsCase('A')}`:bsCase(group.id==='akk'?'A':group.id==='dat'?'D':'G')}</div>
        ${bsArabic(item.ar)}
        ${item.wo?`<div class="bs-wowohin"><div><small>Wo? + Dativ</small>${bsExample(item.wo)}</div><div><small>Wohin? + Akkusativ</small>${bsExample(item.wohin)}</div></div>`:bsExample(item.ex)}
      </article>`).join('')}
    </section>`).join('')
    +`<section class="card bs-group" data-group="wechsel"><h3>stehen oder stellen? – Wo? oder Wohin?</h3>
      <div class="bs-group-ar" lang="ar" dir="rtl">أفعال المكان: الثابت مع Dativ والحركة مع Akkusativ</div>
      <div class="bs-table-wrap"><table class="bs-table"><thead><tr><th>Wo? + Dativ (Zustand)</th><th>Wohin? + Akkusativ (Bewegung)</th><th>Arabisch</th></tr></thead>
      <tbody>${(data.positionVerbs||[]).map(row=>`<tr><td>${row.wo}</td><td>${row.wohin}</td><td lang="ar" dir="rtl">${row.ar}</td></tr>`).join('')}</tbody></table></div></section>
    <section class="card bs-group" data-group=""><h3>Verschmelzungen</h3><div class="bs-group-ar" lang="ar" dir="rtl">حرف الجر + الأداة بيتدمجوا</div>
      <div class="bs-chips">${(data.contractions||[]).map(([full,short])=>`<span class="bs-chip">${full} = <b>${short}</b></span>`).join('')}</div></section>`;
}

function bsPrepLabel(preps){
  return (preps||[]).map(([prep,kasus])=>`<span class="bs-prep">${prep} ${bsCase(kasus)}</span>`).join('<span class="bs-plus">·</span>');
}

function bsReflexiveHtml(){
  const data=window.BAUSTEINE||{};
  const verbs=data.reflexive||[];
  return bsHero('Reflexive Verben','Das Reflexivpronomen zeigt auf das Subjekt zurück. Meistens steht es im Akkusativ (mich/dich). Gibt es im Satz schon ein Akkusativ-Objekt, steht es im Dativ (mir/dir).',
    'الضمير المنعكس بيرجع على الفاعل. غالبًا بيبقى أكوزاتيف (mich/dich). لو في الجملة مفعول به تاني، الضمير يبقى داتيف (mir/dir): Ich wasche mich ← Ich wasche mir die Hände.')
    +`<div class="card bs-pron-card"><div class="bs-table-wrap"><table class="bs-table"><thead><tr><th>Person</th><th>Akkusativ</th><th>Dativ</th></tr></thead>
      <tbody>${(data.reflexivePronouns||[]).map(row=>`<tr><td>${row[0]}</td><td><b>${row[1]}</b></td><td><b>${row[2]}</b></td></tr>`).join('')}</tbody></table></div>
      <p class="bs-note">Nur bei <b>ich</b> und <b>du</b> sind Akkusativ und Dativ verschieden.</p></div>`
    +bsToolbar('Verb, Präposition oder Bedeutung…',
      bsFilterSelect('bsCaseFilter','Kasus',[['','mich + mir'],['A','sich = Akkusativ'],['D','sich = Dativ'],['only','nur reflexiv'],['prep','mit Präposition']])
      +bsFilterSelect('bsLevel','Niveau',BS_LEVEL_OPTIONS))
    +`<div class="bs-list">${verbs.map(item=>`<article class="card bs-item" data-level="${item.lvl}" data-case="${item.c}" data-only="${item.only?1:0}" data-prep="${item.p?1:0}"
      data-search="${escapeHtml(normalizeWordForSearch(`${item.v} ${(item.p||[]).map(p=>p[0]).join(' ')} ${item.ar} ${item.ex}`))}">
      <div class="bs-item-head"><span class="bs-word">${escapeHtml(item.v)}</span><span class="bs-hide bs-inline">${bsCase(item.c)}</span>${item.only?'<span class="bs-tag">nur reflexiv</span>':''}<span class="bs-level">${item.lvl}</span></div>
      ${item.p?`<div class="bs-preps bs-hide">${bsPrepLabel(item.p)}</div>`:''}
      ${bsArabic(item.ar)}${bsExample(item.ex)}
    </article>`).join('')}</div>`;
}

function bsPrepVerbsHtml(){
  const data=window.BAUSTEINE||{};
  const verbs=[...(data.prepVerbs||[]),...(data.reflexive||[]).filter(item=>item.p)];
  verbs.sort((a,b)=>a.v.replace(/^sich (\(etwas\) )?/,'').localeCompare(b.v.replace(/^sich (\(etwas\) )?/,''),'de'));
  const preps=[...new Set(verbs.flatMap(item=>item.p.map(p=>p[0])))].sort((a,b)=>a.localeCompare(b,'de'));
  return bsHero('Verben mit Präposition','Diese Präpositionen musst du mit dem Verb zusammen lernen. Für Sachen fragst du mit wo(r)- und antwortest mit da(r)-, für Personen mit Präposition + wen/wem.',
    'حرف الجر هنا جزء من الفعل ولازم يتحفظ معاه. للحاجات: السؤال بـ wo(r)+حرف والرد بـ da(r)+حرف. للأشخاص: حرف الجر + wen/wem.')
    +`<div class="card bs-tip"><b>Beispiel:</b> warten auf + A → <b>Worauf</b> wartest du? – Ich warte <b>darauf</b>. · <b>Auf wen</b> wartest du? – Auf meinen Freund.</div>`
    +bsToolbar('Verb, Präposition oder Bedeutung…',
      bsFilterSelect('bsPrepFilter','Präposition',[['','Alle Präpositionen'],...preps.map(p=>[p,p])])
      +bsFilterSelect('bsCaseFilter','Kasus',[['','Akk + Dat'],['A','+ Akkusativ'],['D','+ Dativ']])
      +bsFilterSelect('bsLevel','Niveau',BS_LEVEL_OPTIONS))
    +`<div class="bs-list">${verbs.map(item=>{
      const [prep,kasus]=item.p[0];
      const question=prepQuestion(prep,kasus);
      return `<article class="card bs-item" data-level="${item.lvl}" data-preps="${item.p.map(p=>p[0]).join(' ')}" data-cases="${item.p.map(p=>p[1]).join(' ')}"
        data-search="${escapeHtml(normalizeWordForSearch(`${item.v} ${item.p.map(p=>p[0]).join(' ')} ${item.ar} ${item.ex}`))}">
        <div class="bs-item-head"><span class="bs-word">${escapeHtml(item.v)}</span><span class="bs-preps bs-hide">${bsPrepLabel(item.p)}</span><span class="bs-level">${item.lvl}</span></div>
        ${bsArabic(item.ar)}${bsExample(item.ex)}
        <div class="bs-q bs-hide"><span>${question.thing}</span><span>${question.person}</span><span>→ ${question.pronoun}</span></div>
      </article>`;}).join('')}</div>`;
}

function bsDativeHtml(){
  const data=window.BAUSTEINE||{};
  const list=(items,kind)=>items.map(item=>`<article class="card bs-item" data-level="${item.lvl}" data-kind="${kind}"
      data-search="${escapeHtml(normalizeWordForSearch(`${item.v} ${item.ar} ${item.ex}`))}">
      <div class="bs-item-head"><span class="bs-word">${escapeHtml(item.v)}</span>${kind==='da'?`${bsCase('D')}<span class="bs-plus">+</span>${bsCase('A')}`:bsCase('D')}<span class="bs-level">${item.lvl}</span></div>
      ${bsArabic(item.ar)}${bsExample(item.ex)}
    </article>`).join('');
  return bsHero('Verben mit Dativ','Bei diesen Verben steht die Person im Dativ (mir, dir, ihm, dem Mann, der Frau). Bei Verben mit zwei Objekten ist die Person Dativ und die Sache Akkusativ.',
    'مع الأفعال دي الشخص بييجي داتيف (mir، dir، ihm، dem، der). ولو في مفعولين: الشخص داتيف والحاجة أكوزاتيف.')
    +bsToolbar('Verb oder Bedeutung…',
      bsFilterSelect('bsKind','Art',[['','Alle'],['d','nur Dativ'],['da','Dativ + Akkusativ']])
      +bsFilterSelect('bsLevel','Niveau',BS_LEVEL_OPTIONS))
    +`<h3 class="bs-section-title" data-kind="d">Verben mit Dativ <small>jemandem helfen</small></h3>
      <div class="bs-list" data-kind="d">${list(data.dativeVerbs||[],'d')}</div>
      <h3 class="bs-section-title" data-kind="da">Verben mit Dativ + Akkusativ <small>jemandem etwas geben</small></h3>
      <div class="card bs-order">${(data.dativeAccusativeOrder||[]).map(item=>`<div class="bs-rule"><b>${escapeHtml(item.rule)}</b><div class="bs-ar" lang="ar" dir="rtl">${escapeHtml(item.ar)}</div>${bsExample(item.ex)}</div>`).join('')}</div>
      <div class="bs-list" data-kind="da">${list(data.dativeAccusativeVerbs||[],'da')}</div>`;
}

function bsArticlesHtml(){
  const nouns=bausteineNouns();
  const counts={der:0,die:0,das:0};
  nouns.forEach(item=>counts[item.article]++);
  const rules=window.BAUSTEINE?.articleRules||[];
  return bsHero('Nomen nach Artikel',`${nouns.length} Nomen aus allen Lektionen A1–B1. Lerne eine Gruppe nach der anderen: zuerst nur „der“, dann „die“, dann „das“.`,
    'كل الأسماء اللي في الدروس. اختار أداة واحدة واحفظ كلماتها مع بعض، وبعدين اختبر نفسك في «Artikel-Blitz».')
    +`<div class="bs-article-pick" role="group" aria-label="Artikel wählen">
      <button type="button" data-article="" class="active">Alle <small>${nouns.length}</small></button>
      <button type="button" data-article="der" class="art-der">der <small>${counts.der}</small></button>
      <button type="button" data-article="die" class="art-die">die <small>${counts.die}</small></button>
      <button type="button" data-article="das" class="art-das">das <small>${counts.das}</small></button>
    </div>`
    +`<section class="card bs-quiz" id="bsArticleQuiz"><div class="bs-quiz-head"><b>Artikel-Blitz</b><span id="bsQuizScore">0 / 0</span></div>
      <div class="bs-quiz-word" id="bsQuizWord">…</div><div class="bs-quiz-ar" id="bsQuizAr" lang="ar" dir="rtl"></div>
      <div class="bs-quiz-actions"><button type="button" data-guess="der" class="art-der">der</button><button type="button" data-guess="die" class="art-die">die</button><button type="button" data-guess="das" class="art-das">das</button></div>
      <div class="bs-quiz-feedback" id="bsQuizFeedback" aria-live="polite"></div></section>`
    +`<details class="card bs-rules"><summary>Endungsregeln: Woran erkenne ich den Artikel?</summary>
      <div class="bs-ar" lang="ar" dir="rtl">نهايات الكلمة بتساعدك تعرف الأداة في أغلب الحالات.</div>
      <div class="bs-rules-grid">${rules.map(group=>`<div class="bs-rule-col art-col-${group.art}"><h4>${group.art}</h4>${group.rules.map(rule=>`<div><b>${escapeHtml(rule.rule)}</b><small>${escapeHtml(rule.ex)}</small></div>`).join('')}</div>`).join('')}</div>
    </details>`
    +bsToolbar('Nomen oder Bedeutung…',bsFilterSelect('bsLevel','Niveau',BS_LEVEL_OPTIONS))
    +`<div class="bs-nouns">${nouns.map(item=>`<article class="bs-noun art-row-${item.article}" data-article="${item.article}" data-level="${item.level}"
      data-search="${escapeHtml(normalizeWordForSearch(`${item.noun} ${item.ar}`))}">
      <span class="bs-hide bs-inline"><span class="art art-${item.article}">${item.article}</span></span>
      <span class="bs-noun-word">${escapeHtml(item.noun)}${item.plural?`<small>${escapeHtml(item.plural)}</small>`:''}</span>
      <span class="bs-noun-ar" lang="ar" dir="rtl">${escapeHtml(item.ar)}</span>
    </article>`).join('')}</div>`;
}

function bsTablesHtml(){
  const tables=window.BAUSTEINE?.tables||[];
  return bsHero('Tabellen','Die wichtigsten Formen zum Nachschauen: Pronomen, Artikel in allen Fällen, Adjektivendungen und Modalverben.',
    'أهم الجداول للمراجعة السريعة: الضمائر، الأدوات في كل الحالات، نهايات الصفات، والأفعال الناقصة.')
    +`<nav class="bs-jump" aria-label="Tabellen">${tables.map(item=>`<a href="#bausteine/tabellen" data-jump="bs-${item.id}">${item.title}</a>`).join('')}</nav>`
    +tables.map(table=>`<section class="card bs-group" id="bs-${table.id}">
      <h3>${table.title}</h3><div class="bs-group-ar" lang="ar" dir="rtl">${table.titleAr}</div>
      <div class="bs-table-wrap"><table class="bs-table"><thead><tr>${table.head.map(cell=>`<th>${cell}</th>`).join('')}</tr></thead>
      <tbody>${table.rows.map(row=>`<tr>${row.map((cell,index)=>`<td${/[؀-ۿ]/.test(cell)?' lang="ar" dir="rtl"':''}${index===0?' class="bs-row-head"':''}>${escapeHtml(cell)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>
      ${table.note?`<p class="bs-note">${escapeHtml(table.note)}</p>`:''}${table.noteAr?`<div class="bs-ar" lang="ar" dir="rtl">${escapeHtml(table.noteAr)}</div>`:''}
    </section>`).join('');
}

function bsSimpleGroupsHtml(groups,{titleKey='title',titleArKey='titleAr'}={}){
  return groups.map(group=>`<section class="card bs-group">
    <h3>${group[titleKey]}</h3>${group[titleArKey]?`<div class="bs-group-ar" lang="ar" dir="rtl">${group[titleArKey]}</div>`:''}
    ${group.items.map(item=>`<article class="bs-item" data-search="${escapeHtml(normalizeWordForSearch(`${item.de} ${item.ar} ${item.ex} ${item.note||''}`))}">
      <div class="bs-item-head"><span class="bs-word">${escapeHtml(item.de)}</span>${item.note?`<span class="bs-tag">${escapeHtml(item.note)}</span>`:''}</div>
      ${bsArabic(item.ar)}${bsExample(item.ex)}
    </article>`).join('')}
  </section>`).join('');
}

function bsTimeHtml(){
  return bsHero('Zeitangaben','Welche Präposition passt zu welcher Zeit? um + Uhrzeit, am + Tag, im + Monat und Jahreszeit.',
    'um مع الساعة، am مع الأيام وأجزاء اليوم، im مع الشهور والفصول. وكمان vor/seit/in للماضي والمدة والمستقبل.')
    +bsToolbar('Zeitangabe suchen…')+bsSimpleGroupsHtml(window.BAUSTEINE?.time||[]);
}

function bsNounVerbHtml(){
  const items=window.BAUSTEINE?.nounVerb||[];
  return bsHero('Nomen-Verb-Verbindungen','Diese Nomen und Verben gehören fest zusammen. Lerne sie als ein Stück – dann musst du beim Sprechen nicht das Verb suchen.',
    'الاسم والفعل هنا ماشيين مع بعض دايمًا. احفظهم كقطعة واحدة عشان متدورش على الفعل وانت بتتكلم.')
    +bsToolbar('Ausdruck suchen…')
    +`<div class="bs-list">${items.map(item=>`<article class="card bs-item" data-search="${escapeHtml(normalizeWordForSearch(`${item.de} ${item.ar} ${item.ex}`))}">
      <div class="bs-item-head"><span class="bs-word">${escapeHtml(item.de)}</span></div>${bsArabic(item.ar)}${bsExample(item.ex)}
    </article>`).join('')}</div>`;
}

function bsStartersHtml(){
  return bsHero('Satzanfänge','Fertige Anfänge für typische Situationen. Der Hinweis zeigt dir, was danach mit dem Verb passiert.',
    'بدايات جاهزة لمواقف متكررة. الملاحظة الصغيرة بتقولك الفعل هيروح فين بعدها.')
    +bsToolbar('Satzanfang suchen…')+bsSimpleGroupsHtml(window.BAUSTEINE?.starters||[],{titleKey:'group',titleArKey:'groupAr'});
}

function bsWire(id){
  const root=$('#bausteineRoot');
  if(!root) return;
  root.addEventListener('click',event=>{
    const say=event.target.closest('[data-say]');
    if(say){ speakText(say.dataset.say,'de'); return; }
    const jump=event.target.closest('[data-jump]');
    if(jump){ event.preventDefault(); document.getElementById(jump.dataset.jump)?.scrollIntoView({behavior:'smooth',block:'start'}); return; }
    const hidden=event.target.closest('.bs-hide');
    if(hidden&&root.classList.contains('bs-learning')) hidden.classList.toggle('revealed');
  });
  const learn=$('#bsLearnToggle');
  learn?.addEventListener('click',()=>{
    const on=!root.classList.contains('bs-learning');
    root.classList.toggle('bs-learning',on);
    root.querySelectorAll('.bs-hide.revealed').forEach(node=>node.classList.remove('revealed'));
    learn.setAttribute('aria-pressed',String(on));
    learn.textContent=on?'✓ Lernmodus an':'Lernmodus';
    try{ localStorage.setItem(BAUSTEINE_LEARN_KEY,on?'1':'0'); }catch{}
  });
  let article='';
  const controls=['#bsSearch','#bsGroup','#bsLevel','#bsCaseFilter','#bsPrepFilter','#bsKind'].map(selector=>$(selector)).filter(Boolean);
  const filter=()=>{
    const query=normalizeWordForSearch($('#bsSearch')?.value||'');
    const group=$('#bsGroup')?.value||'';
    const level=$('#bsLevel')?.value||'';
    const kasus=$('#bsCaseFilter')?.value||'';
    const prep=$('#bsPrepFilter')?.value||'';
    const kind=$('#bsKind')?.value||'';
    let visible=0,total=0;
    root.querySelectorAll('[data-search]').forEach(node=>{
      total++;
      const d=node.dataset;
      const show=(!query||d.search.includes(query))&&(!group||d.group===group)&&(!level||d.level===level)
        &&(!article||d.article===article)&&(!prep||(d.preps||'').split(' ').includes(prep))&&(!kind||d.kind===kind)
        &&(!kasus||(kasus==='only'?d.only==='1':kasus==='prep'?d.prep==='1':(d.case===kasus||(d.cases||'').split(' ').includes(kasus))));
      node.hidden=!show;
      if(show) visible++;
    });
    root.querySelectorAll('section.bs-group[data-group]').forEach(section=>{
      if(!section.querySelector('[data-search]')) { section.hidden=!!(query||group)&&section.dataset.group!==group; return; }
      section.hidden=![...section.querySelectorAll('[data-search]')].some(node=>!node.hidden);
    });
    root.querySelectorAll('.bs-section-title[data-kind],.bs-list[data-kind]').forEach(node=>{ node.hidden=!!kind&&node.dataset.kind!==kind; });
    const count=$('#bsCount');
    if(count) count.textContent=`${visible} / ${total}`;
  };
  controls.forEach(control=>control.addEventListener(control.tagName==='SELECT'?'change':'input',filter));
  if(id==='artikel'){
    root.querySelectorAll('.bs-article-pick button').forEach(button=>button.addEventListener('click',()=>{
      article=button.dataset.article;
      root.querySelectorAll('.bs-article-pick button').forEach(item=>item.classList.toggle('active',item===button));
      filter();
      bsNextQuizWord();
    }));
    bsArticleQuiz(()=>article);
  }
  filter();
}

let bsQuizState={word:null,right:0,total:0,nouns:[],currentArticle:()=>''};
function bsArticleQuiz(currentArticle){
  const nouns=bausteineNouns();
  bsQuizState={word:null,right:0,total:0,nouns,currentArticle};
  $('#bsArticleQuiz')?.querySelectorAll('[data-guess]').forEach(button=>button.addEventListener('click',()=>{
    const word=bsQuizState.word;
    if(!word) return;
    const correct=button.dataset.guess===word.article;
    bsQuizState.total++;
    if(correct) bsQuizState.right++;
    $('#bsQuizScore').textContent=`${bsQuizState.right} / ${bsQuizState.total}`;
    const feedback=$('#bsQuizFeedback');
    feedback.className=`bs-quiz-feedback ${correct?'ok':'bad'}`;
    feedback.innerHTML=`${correct?'✓ Richtig':'✗ Falsch'}: <span class="art art-${word.article}">${word.article}</span> ${escapeHtml(word.noun)}${word.plural?` <small>(${escapeHtml(word.plural)})</small>`:''}`;
    if(!correct) window.NextUI?.addMistake?.({prompt:word.noun,answer:`${word.article} ${word.noun}`,context:'Satzbaukasten · Artikel'});
    setTimeout(bsNextQuizWord,correct?650:1500);
  }));
  bsNextQuizWord();
}

function bsNextQuizWord(){
  const {nouns,currentArticle}=bsQuizState;
  if(!nouns?.length||!$('#bsQuizWord')) return;
  const level=$('#bsLevel')?.value||'';
  // The quiz mixes all three articles, but the selected article appears more often.
  const focus=currentArticle?.()||'';
  let pool=nouns.filter(item=>!level||item.level===level);
  if(focus&&Math.random()<.6) pool=pool.filter(item=>item.article===focus);
  if(!pool.length) pool=nouns;
  const word=pool[Math.floor(Math.random()*pool.length)];
  bsQuizState.word=word;
  $('#bsQuizWord').textContent=word.noun;
  $('#bsQuizAr').textContent=word.ar;
}
