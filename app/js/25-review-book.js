// Impuls B1 · Wiederholung: the booklet of Lektion 1–30 to read in the app.
// A lesson opens on one section at a time - Wortschatz, Lesetext, Grammatik,
// Redemittel, Rollenspiele, Prüfungstraining, Übungen - so the page stays short
// and the section tabs stay in reach. The section last read is remembered, and
// a section can be ticked off, so coming back lands where the learner left.
const REVIEW_ROUTE = 'b1.1/book';          // the booklet is B1's own Wiederholung
const REVIEW_STATE_KEY = 'impulsReviewDone';
const REVIEW_LAST_KEY = 'impulsReviewLast';

// The booklet is fetched when a review route is opened.
const REVIEW_LOADER = { ready: () => typeof IMPULS_REVIEW !== 'undefined', load: () => ensureReviewBook() };

function reviewBook(){ return typeof IMPULS_REVIEW === 'undefined' ? null : IMPULS_REVIEW; }
function reviewSections(){ return reviewBook()?.meta.sections || []; }
function reviewLesson(number){ return reviewBook()?.lessons.find(lesson => lesson.n === number); }
function reviewExtra(id){ return reviewBook()?.extras.find(extra => extra.id === id); }

function readReviewState(){
  try{ return JSON.parse(localStorage.getItem(REVIEW_STATE_KEY)) || {}; }catch{ return {}; }
}

function writeReviewState(state){
  try{ localStorage.setItem(REVIEW_STATE_KEY, JSON.stringify(state)); }catch{}
}

function reviewDoneKey(number, section){ return `${number}:${section}`; }

function toggleReviewDone(number, section){
  const state = readReviewState();
  const key = reviewDoneKey(number, section);
  if(state[key]) delete state[key]; else state[key] = 1;
  writeReviewState(state);
  const openDetails = [...view.querySelectorAll('.rv-page details')].map(item => item.open);
  renderReviewLesson(number, section);
  view.querySelectorAll('.rv-page details').forEach((item, index) => { item.open = openDetails[index]; });
  view.querySelector('.rv-done')?.focus({preventScroll:true});
}

function reviewLessonProgress(number, state = readReviewState()){
  const sections = reviewSections();
  const done = sections.filter(section => state[reviewDoneKey(number, section.id)]).length;
  return { done, total: sections.length };
}

function rememberReviewSection(number, section){
  try{ localStorage.setItem(REVIEW_LAST_KEY, JSON.stringify({ n: number, section })); }catch{}
}

function lastReviewSection(number, savedOnly = false){
  try{
    const saved = JSON.parse(localStorage.getItem(REVIEW_LAST_KEY));
    if(saved && saved.n === number && reviewSections().some(section => section.id === saved.section)) return saved.section;
  }catch{}
  return savedOnly ? null : reviewSections()[0]?.id;
}

const REVIEW_AR_KEY = 'impulsReviewArabic';
const REVIEW_AR_RE = /[\u0600-\u06ff]/;

function reviewArabic(value, tag = 'p'){
  return value ? `<${tag} class="rv-ar" lang="ar" dir="rtl">${escapeHtml(value)}</${tag}>` : '';
}

function reviewArabicShown(){
  try{ return localStorage.getItem(REVIEW_AR_KEY) !== 'off'; }catch{ return true; }
}

function toggleReviewArabic(button){
  const page = button.closest('.rv-page');
  const show = !page.classList.toggle('rv-hide-ar');
  button.setAttribute('aria-pressed', String(show));
  try{ localStorage.setItem(REVIEW_AR_KEY, show ? 'on' : 'off'); }catch{}
}

function reviewFrame(content){
  return `<div class="rv-page${reviewArabicShown() ? '' : ' rv-hide-ar'}">${content}</div>`;
}

function followReviewLink(event, link){
  if(event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.defaultPrevented) return;
  event.preventDefault();
  go(link.hash);
}

function reviewLink(path, label, extra = ''){
  return `<a href="#${REVIEW_ROUTE}${path}" onclick="followReviewLink(event,this)" ${extra}>${label}</a>`;
}

function reviewLanguageButton(){
  return `<button type="button" class="rv-control" aria-pressed="${reviewArabicShown()}" onclick="toggleReviewArabic(this)">العربية</button>`;
}

function filterReviewLessons(input){
  const query = input.value.trim().toLowerCase();
  let count = 0;
  input.closest('.rv-page').querySelectorAll('[data-rv-lesson]').forEach(item => {
    item.hidden = !item.textContent.toLowerCase().replace(/\s+/g, ' ').includes(query);
    if(!item.hidden) count++;
  });
  document.getElementById('rv-no-lessons').hidden = count !== 0;
}

function renderReviewHome(){
  if(renderLazyDataLoading('Impuls B1 · Wiederholung', REVIEW_LOADER, () => renderReviewHome())) return;
  const book = reviewBook();
  if(!book){ go('b1.1'); return; }
  const state = readReviewState();
  const resume = book.lessons.find(lesson => lastReviewSection(lesson.n, true));
  const totalDone = book.lessons.reduce((sum, lesson) => sum + reviewLessonProgress(lesson.n, state).done, 0);
  setTop('Impuls B1 · Wiederholung', 'B1', true, 'المراجعة');
  view.innerHTML = reviewFrame(`<header class="rv-hero">
      <div><span class="rv-kicker">Impuls B1</span><h2>Wiederholung</h2>${reviewArabic('مراجعة الدروس من ١ إلى ٣٠')}</div>
      <div class="rv-resume"><span>${totalDone} / ${book.lessons.length * reviewSections().length} Teile abgeschlossen</span>
        ${resume ? reviewLink(`/${resume.n}/${lastReviewSection(resume.n)}`, `Bei Lektion ${resume.n} weiterlernen ›`, 'class="rv-action"') : ''}</div>
    </header>
    <section class="rv-library"><div class="rv-toolbar"><h3>Lektionen</h3>
      <label class="rv-search"><span class="rv-sr">Lektion suchen</span><input type="search" placeholder="Lektion suchen …" oninput="filterReviewLessons(this)"></label></div>
      <ol class="rv-catalog">${book.lessons.map(lesson => {
        const {done,total} = reviewLessonProgress(lesson.n, state);
        return `<li data-rv-lesson>${reviewLink(`/${lesson.n}`, `<span class="rv-number">${lesson.n}</span><span class="rv-lesson-name"><small>Lektion ${lesson.n}</small><b>${escapeHtml(lesson.de)}</b>
          ${reviewArabic(lesson.ar, 'span')}<span class="rv-mini-progress" aria-label="${done} von ${total} Teilen fertig">${Array.from({length:total}, (_, index) => `<i${index < done ? ' class="is-done"' : ''}></i>`).join('')}</span></span><span aria-hidden="true">›</span>`, 'class="rv-lesson-card"')}</li>`;
      }).join('')}</ol><p id="rv-no-lessons" hidden>Keine passende Lektion gefunden.</p></section>
    <section class="rv-library"><h3>Anhänge ${reviewArabic('الملاحق', 'span')}</h3>
      <div class="rv-appendices">${book.extras.map(extra => reviewLink(`/x/${extra.id}`,
        `<b>${escapeHtml(extra.de)}</b>${reviewArabic(extra.ar, 'span')}<span aria-hidden="true">↗</span>`, 'class="rv-appendix"')).join('')}</div></section>`);
}

function reviewPair(de, ar, className = ''){
  return `<div class="rv-pair ${className}">${de ? `<p lang="de">${escapeHtml(de)}</p>` : ''}${reviewArabic(ar)}</div>`;
}

function reviewTable(block){
  const cell = (value, tag, attr = '') => {
    const arabic = REVIEW_AR_RE.test(value);
    return `<${tag}${attr}${arabic ? ' class="rv-ar-cell" lang="ar" dir="rtl"' : ''}>${escapeHtml(value)}</${tag}>`;
  };
  const wide = block.headers.length > 4 || block.rows.length > 30;
  return `${wide ? '<small class="rv-table-hint">Tabelle seitlich scrollen ↔</small>' : ''}<div class="rv-table-scroll" tabindex="0" role="region" aria-label="Grammatiktabelle"><table class="rv-table">
    <thead><tr>${block.headers.map(value => cell(value, 'th', ' scope="col"')).join('')}</tr></thead>
    <tbody>${block.rows.map(row => `<tr>${row.map((value, i) => i === 0 ? cell(value, 'th', ' scope="row"') : cell(value, 'td')).join('')}</tr>`).join('')}</tbody>
    </table></div>`;
}

function reviewBlockHtml(block){
  const {t, de, ar, number} = block;
  if(t === 'table') return reviewTable(block);
  if(t === 'correction') return `<div class="rv-correction"><div><small>✗ Falsch</small><p>${escapeHtml(de)}</p></div>
    <div><small>✓ Richtig</small><p>${escapeHtml(block.correct)}</p></div>${reviewArabic(ar)}</div>`;
  if(t === 'dialogue') return `<div class="rv-dialogue"><b>${escapeHtml(block.speaker)}</b>${reviewPair(de, ar)}</div>`;
  if(t === 'prompt') return reviewPair(de, ar, 'rv-prompt');
  if(t === 'question' || t === 'solution'){
    return `<div class="rv-numbered"><span class="rv-number">${number}</span>${reviewPair(de, ar)}</div>`;
  }
  return reviewPair(de, ar);
}

function reviewReveal(label, contents){
  return `<details class="rv-reveal"><summary>${label}</summary><div>${contents}</div></details>`;
}

function reviewWordsHtml(lesson){
  const groups = lesson.words.reduce((map, word) => {
    if(!map.has(word.group)) map.set(word.group, []);
    map.get(word.group).push(word);
    return map;
  }, new Map());
  return [...groups].map(([name, words]) => `<section class="rv-card rv-vocab"><header><h4>${escapeHtml(name || 'Wortschatz')}</h4>${reviewArabic(words[0].groupAr)}</header>
    <div class="rv-vocab-labels" aria-hidden="true"><span>Wort und Übersetzung</span><span>Bedeutung</span><span>Beispiel</span></div>
    ${words.map(word => `<article class="rv-word">
      <div class="rv-term"><b lang="de">${escapeHtml(word.w)}</b>${word.form ? `<small>${escapeHtml(word.form)}</small>` : ''}${reviewArabic(word.ar)}</div>
      <div class="rv-definition"><span class="rv-mobile-label">Bedeutung</span>${escapeHtml(word.d)}</div>
      <div class="rv-example"><span class="rv-mobile-label">Beispiel</span>${escapeHtml(word.ex)}</div></article>`).join('')}
    </section>`).join('');
}

function reviewGroups(blocks){
  const groups = [];
  let group = {title:null, items:[]};
  blocks.forEach(block => {
    if(block.t === 'h'){
      if(group.title || group.items.length) groups.push(group);
      group = {title:block, items:[]};
    }else{
      group.items.push(block);
    }
  });
  if(group.title || group.items.length) groups.push(group);
  return groups;
}

function reviewExerciseId(title){
  return title?.de.match(/^Übung\s+(\d+\.\d+)\b/)?.[1];
}

function reviewContentItems(items, section, answers){
  const html = [];
  for(let index = 0; index < items.length; index++){
    const block = items[index];
    const after = items[index + 1];
    if(section === 'redemittel' && after?.de.startsWith('Wann?')){
      const example = items[index + 2];
      html.push(`<article class="rv-phrase">${reviewPair(block.de, block.ar, 'rv-phrase-title')}${reviewBlockHtml(after)}
        ${example?.de.startsWith('Beispiel:') ? reviewPair(example.de, example.ar, 'rv-prompt') : ''}</article>`);
      index += example?.de.startsWith('Beispiel:') ? 2 : 1;
    }else if(block.t === 'question'){
      const answer = section === 'uebungen' ? answers?.find(item => item.number === block.number) : after?.t === 'answer' ? after : null;
      html.push(`<article class="rv-question">${reviewBlockHtml(block)}
        ${answer ? reviewReveal('Lösung anzeigen', reviewPair(answer.de, answer.ar)) : ''}</article>`);
      if(answer && after === answer) index++;
    }else if(section === 'pruefung' && (block.t === 'answer' || block.t === 'p' && block.de)){
      html.push(reviewReveal('Musterantwort anzeigen', reviewPair(block.de, block.ar)));
    }else if(/^NICHT SO SONDERN SO\s*\d*$/.test(block.de) && after?.t === 'correction'){
      continue;
    }else{
      html.push(reviewBlockHtml(block));
    }
  }
  return html.join('');
}

function reviewSectionBody(lesson, section){
  if(section === 'wortschatz') return reviewWordsHtml(lesson);
  const solutions = section === 'uebungen' ? reviewGroups(reviewExtra('loesungen')?.blocks || []) : [];
  return reviewGroups(lesson.parts[section] || []).map(({title, items}) => {
    const id = reviewExerciseId(title);
    const answers = id ? solutions.find(group => reviewExerciseId(group.title) === id)?.items : null;
    return `<section class="rv-card">${title ? `<header><h4>${escapeHtml(title.de)}</h4>${reviewArabic(title.ar)}</header>` : ''}
      ${items.length ? `<div class="rv-card-body">${reviewContentItems(items, section, answers)}</div>` : ''}</section>`;
  }).join('');
}

function renderReviewLesson(number, section){
  if(renderLazyDataLoading(`Lektion ${number}`, REVIEW_LOADER, () => renderReviewLesson(number, section))) return;
  const lesson = reviewLesson(number);
  if(!lesson){ go(REVIEW_ROUTE); return; }
  const sections = reviewSections();
  const open = sections.some(item => item.id === section) ? section : lastReviewSection(number);
  rememberReviewSection(number, open);
  const state = readReviewState();
  const done = !!state[reviewDoneKey(number, open)];
  const current = sections.find(item => item.id === open);
  const progress = reviewLessonProgress(number, state);
  const previous = reviewLesson(number - 1), next = reviewLesson(number + 1);
  const following = sections[sections.indexOf(current) + 1];
  setTop(`Lektion ${number}`, 'Impuls B1 · Wiederholung', true, `الدرس ${number}`);
  const sectionOptions = sections.map(item => {
    const finished = state[reviewDoneKey(number, item.id)];
    return `<li>${reviewLink(`/${number}/${item.id}`, `<span><b>${escapeHtml(item.de)}</b>${reviewArabic(item.ar, 'small')}</span>
      ${finished ? '<span class="rv-check" aria-label="Abgeschlossen">✓</span>' : ''}`, item.id === open ? 'aria-current="page"' : '')}</li>`;
  }).join('');
  view.innerHTML = reviewFrame(`<header class="rv-hero">
    <div>${reviewLink('', '‹ Alle Lektionen', 'class="rv-kicker"')}<h2>${escapeHtml(lesson.de)}</h2>
    ${reviewArabic(lesson.ar)}<p class="rv-meta">Lektion ${number} · Seite ${lesson.pages[0]}–${lesson.pages[1]}</p></div>
    <div class="rv-progress-summary"><progress max="${progress.total}" value="${progress.done}" aria-label="Lernfortschritt"></progress><span>${progress.done} / ${progress.total} Teile abgeschlossen</span></div>
    </header>
    ${lesson.goals ? `<details class="rv-goals"><summary>Lernziele <span>أهداف الدرس</span></summary>
      <ul>${lesson.goals.split(' · ').map(goal => `<li>${escapeHtml(goal)}</li>`).join('')}</ul></details>` : ''}
    <div class="rv-study">
      <nav class="rv-menu" aria-label="Teile der Lektion"><ol>${sectionOptions}</ol></nav>
      <label class="rv-section-select"><span class="rv-sr">Teil wechseln</span><select onchange="go(this.value)">
        ${sections.map(item => `<option value="${REVIEW_ROUTE}/${number}/${item.id}"${item.id === open ? ' selected' : ''}>${state[reviewDoneKey(number, item.id)] ? '✓ ' : ''}${escapeHtml(item.de)} · ${escapeHtml(item.ar)}</option>`).join('')}
      </select></label>
      <div class="rv-reading">
        <div class="rv-toolbar rv-section-title"><h3>${escapeHtml(current.de)} ${reviewArabic(current.ar, 'small')}</h3>${reviewLanguageButton()}</div>
        <div class="rv-body">${reviewSectionBody(lesson, open)}</div>
        <div class="rv-study-actions"><button type="button" class="rv-control rv-done" aria-pressed="${done}" onclick="toggleReviewDone(${number},'${open}')">
          ${done ? '✓ Abgeschlossen' : 'Als abgeschlossen markieren'}</button>
          ${following ? reviewLink(`/${number}/${following.id}`, `${escapeHtml(following.de)} ›`, 'class="rv-action"') : ''}</div>
      </div></div>
    <nav class="rv-neighbors" aria-label="Lektionen">${previous ? reviewLink(`/${previous.n}`, `‹ Lektion ${previous.n}`) : '<span></span>'}
      ${reviewLink('', 'Alle Lektionen')}
      ${next ? reviewLink(`/${next.n}`, `Lektion ${next.n} ›`) : '<span></span>'}</nav>`);
}

function reviewAppendixBody(extra){
  if(extra.id === 'grammatik-blick') return extra.blocks.map(reviewBlockHtml).join('');
  const groups = [];
  for(const block of extra.blocks){
    const match = block.t === 'h' && block.de.match(/^Lektion\s+(\d+)\b/);
    if(match || !groups.length) groups.push({lesson:match?.[1], items:[]});
    else groups[groups.length - 1].items.push(block);
  }
  return groups.map(group => {
    const body = reviewGroups(group.items).map(({title, items}) =>
      `<section class="rv-card">${title ? `<header><h4>${escapeHtml(title.de)}</h4>${reviewArabic(title.ar)}</header>` : ''}
      <div class="rv-card-body">${reviewContentItems(items, extra.id)}</div></section>`).join('');
    return group.lesson ? reviewReveal(`Lektion ${group.lesson} · ${escapeHtml(reviewLesson(Number(group.lesson)).de)}`, body) : body;
  }).join('');
}

function renderReviewExtra(id){
  if(renderLazyDataLoading('Impuls B1 · Anhang', REVIEW_LOADER, () => renderReviewExtra(id))) return;
  const extra = reviewExtra(id);
  if(!extra){ go(REVIEW_ROUTE); return; }
  setTop(extra.de, 'Impuls B1 · Anhang', true, 'ملحق');
  view.innerHTML = reviewFrame(`<header class="rv-hero"><div>${reviewLink('', '‹ Alle Lektionen', 'class="rv-kicker"')}
    <h2>${escapeHtml(extra.de)}</h2>${reviewArabic(extra.ar)}<p class="rv-meta">Seite ${extra.pages[0]}–${extra.pages[1]}</p></div></header>
    <section class="rv-body rv-appendix-body">${reviewAppendixBody(extra)}</section>`);
}

function routeReviewBook(hash){
  // the booklet moved into B1; a link to the old place still lands
  if(hash === 'book' || hash.startsWith('book/')){ go(`b1.1/${hash}`); return true; }
  if(!hash.startsWith('b1.1/book')) return false;
  const path = hash.slice('b1.1/'.length);
  if(path === 'book'){ renderReviewHome(); return true; }
  const extra = path.match(/^book\/x\/([\w-]+)$/);
  if(extra){ renderReviewExtra(extra[1]); return true; }
  const part = path.match(/^book\/(\d+)\/([a-z]+)$/);
  if(part){ renderReviewLesson(Number(part[1]), part[2]); return true; }
  const lesson = path.match(/^book\/(\d+)$/);
  if(lesson){ renderReviewLesson(Number(lesson[1])); return true; }
  return false;
}
