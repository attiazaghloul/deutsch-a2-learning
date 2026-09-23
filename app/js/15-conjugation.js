/* ===================== verb conjugation ===================== */
/* Builds full conjugation tables (Präsens, Präteritum, Perfekt,
   Plusquamperfekt, Futur I, Konjunktiv II) from the verb data of every
   level. Präsens forms come from the data; the other tenses are derived. */
const CONJ_PERSONS=['ich','du','er/sie/es','wir','ihr','sie/Sie'];
const CONJ_REFLEXIVE={acc:['mich','dich','sich','uns','euch','sich'],dat:['mir','dir','sich','uns','euch','sich']};
const CONJ_HABEN=['habe','hast','hat','haben','habt','haben'];
const CONJ_SEIN=['bin','bist','ist','sind','seid','sind'];
const CONJ_HATTE=['hatte','hattest','hatte','hatten','hattet','hatten'];
const CONJ_WAR=['war','warst','war','waren','wart','waren'];
const CONJ_WERDEN=['werde','wirst','wird','werden','werdet','werden'];
const CONJ_WUERDE=['würde','würdest','würde','würden','würdet','würden'];
const CONJ_KONJ2_STEMS={haben:'hätte',sein:'wäre',werden:'würde',können:'könnte',müssen:'müsste',dürfen:'dürfte',sollen:'sollte',wollen:'wollte',mögen:'möchte',wissen:'wüsste',geben:'gäbe',kommen:'käme',gehen:'ginge'};

function conjugationParts(verb){
  const reflexive=/^sich\s/.test(verb.inf);
  const infinitive=verb.inf.replace(/^sich\s+/,'');
  const first=String(verb.forms?.[0]||'').split(/\s+/);
  const pronounCase=reflexive&&first[1]==='mir'?'dat':'acc';
  const praetWords=String(verb.praet||'').split(/\s+/).filter(word=>word!=='sich');
  const particle=praetWords.length>1?praetWords[praetWords.length-1]:'';
  return {reflexive,infinitive,pronounCase,particle,praetFinite:praetWords[0]||''};
}

function conjugationPhrase(finite,index,parts,tail=''){
  const pronoun=parts.reflexive?CONJ_REFLEXIVE[parts.pronounCase][index]:'';
  return [finite,pronoun,tail].filter(Boolean).join(' ');
}

function praeteritumFinite(stem,index){
  const weak=/te$/.test(stem);
  if(weak) return [stem,`${stem}st`,stem,`${stem}n`,`${stem}t`,`${stem}n`][index];
  const du=/(?:s|ß|z|x)$/.test(stem)?`${stem}est`:/(?:t|d)$/.test(stem)?`${stem}est`:`${stem}st`;
  const ihr=/(?:t|d)$/.test(stem)?`${stem}et`:`${stem}t`;
  return [stem,du,stem,`${stem}en`,ihr,`${stem}en`][index];
}

function konjunktiv2Finite(stem,index){
  return [stem,`${stem}st`,stem,`${stem}n`,`${stem}t`,`${stem}n`][index];
}

function conjugateVerb(verb){
  const parts=conjugationParts(verb);
  const participle=String(verb.part||'').replace(/^sich\s+/,'');
  const auxNow=verb.aux==='sein'?CONJ_SEIN:CONJ_HABEN;
  const auxPast=verb.aux==='sein'?CONJ_WAR:CONJ_HATTE;
  const praesens=(verb.forms||[]).slice(0,6);
  const praeteritum=Array.isArray(verb.praetForms)&&verb.praetForms.length===6
    ?verb.praetForms.slice()
    :CONJ_PERSONS.map((_,index)=>conjugationPhrase(praeteritumFinite(parts.praetFinite,index),index,parts,parts.particle));
  const perfekt=CONJ_PERSONS.map((_,index)=>conjugationPhrase(auxNow[index],index,parts,participle));
  const plusquamperfekt=CONJ_PERSONS.map((_,index)=>conjugationPhrase(auxPast[index],index,parts,participle));
  const futur=CONJ_PERSONS.map((_,index)=>conjugationPhrase(CONJ_WERDEN[index],index,parts,parts.infinitive));
  const konjStem=CONJ_KONJ2_STEMS[parts.infinitive];
  const konjunktiv2=CONJ_PERSONS.map((_,index)=>konjStem
    ?conjugationPhrase(konjunktiv2Finite(konjStem,index),index,parts)
    :conjugationPhrase(CONJ_WUERDE[index],index,parts,parts.infinitive));
  return [
    ['Präsens',praesens],['Präteritum',praeteritum],['Perfekt',perfekt],
    ['Plusquamperfekt',plusquamperfekt],['Futur I',futur],['Konjunktiv II',konjunktiv2]
  ].filter(([,forms])=>forms.length===6);
}

function conjugationTableHtml(verb){
  return `<div class="conj-tables">${conjugateVerb(verb).map(([tense,forms])=>`
    <section class="conj-table" aria-label="${tense}">
      <h4>${tense}</h4>
      <dl>${forms.map((form,index)=>verb.impersonal&&index!==2&&index!==5?'':`<div><dt>${verb.impersonal?(index===2?'es':'sie (Pl.)'):CONJ_PERSONS[index]}</dt><dd>${escapeHtml(form)}</dd></div>`).join('')}</dl>
    </section>`).join('')}</div>`;
}

function bindVerbCardToggles(listSelector){
  $$(`${listSelector} .verb-card`).forEach(card=>{
    const toggle=()=>{
      const open=card.classList.toggle('open');
      card.setAttribute('aria-expanded',String(open));
    };
    card.addEventListener('click',event=>{ if(!event.target.closest('button,input,select,a')) toggle(); });
    card.addEventListener('keydown',event=>{ if(event.target===card&&(event.key==='Enter'||event.key===' ')){event.preventDefault();toggle();} });
  });
}
