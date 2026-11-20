// Impuls B1 · Wiederholung: the booklet of Lektion 1–30 to read in the app.
// A lesson opens on one section at a time - Wortschatz, Lesetext, Grammatik,
// Redemittel, Rollenspiele, Prüfungstraining, Übungen - so the page stays short
// and the section tabs stay in reach. The section last read is remembered, and
// a section can be ticked off, so coming back lands where the learner left.
const REVIEW_ROUTE = 'b1.1/book';          // the booklet is B1's own Wiederholung
const REVIEW_STATE_KEY = 'impulsReviewDone';
const REVIEW_LAST_KEY = 'impulsReviewLast';

// The booklet's text is 846 KB, so it is fetched when the booklet is opened.
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
  renderReviewLesson(number, section);
}

function reviewLessonProgress(number, state = readReviewState()){
  const sections = reviewSections();
  const done = sections.filter(section => state[reviewDoneKey(number, section.id)]).length;
  return { done, total: sections.length };
}

function rememberReviewSection(number, section){
  try{ localStorage.setItem(REVIEW_LAST_KEY, JSON.stringify({ n: number, section })); }catch{}
}

function lastReviewSection(number){
  try{
    const saved = JSON.parse(localStorage.getItem(REVIEW_LAST_KEY));
    if(saved && saved.n === number && reviewSections().some(section => section.id === saved.section)) return saved.section;
  }catch{}
  return reviewSections()[0]?.id;
}

// The home of the booklet: every lesson with what it holds, then the appendices.
function renderReviewHome(){
  if(renderLazyDataLoading('Impuls B1 · Wiederholung', REVIEW_LOADER, () => renderReviewHome())) return;
  const book = reviewBook();
  if(!book){ go('b1.1'); return; }
  const state = readReviewState();
  const words = book.lessons.reduce((sum, lesson) => sum + lesson.words.length, 0);
  setTop('Impuls B1 · Wiederholung', `${book.lessons.length} Lektionen`, true, 'المراجعة');
  view.innerHTML = `<section class="pr-head"><small>Zum Kursbuch · Lektion 1–30</small><h2>${escapeHtml(book.meta.de)}</h2>
      <p>Wortschatz, Lesetexte, Grammatik, Redemittel, Prüfungstraining und Übungen – Lektion für Lektion, mit Arabisch.</p>
      <p class="pr-ar" lang="ar" dir="rtl">${escapeHtml(book.meta.ar)}</p>
      <p class="pr-note">${book.lessons.length} Lektionen · ${words} Wörter · ${book.extras.length} Anhänge</p></section>
    <details class="pr-help"><summary>So lernst du mit der Wiederholung <span lang="ar" dir="rtl">طريقة المذاكرة</span></summary>
      <ol lang="ar" dir="rtl">
        <li>ذاكر الدرس هنا بعد ما تخلّصه في الكتاب: نفس الترتيب ونفس القواعد.</li>
        <li>كل درس مقسوم أقسام: ابدأ بالمفردات، وبعدين نص القراءة، وبعدين القواعد.</li>
        <li>دوس على أي كلمة ألمانية تشوف معناها، وعلى زر الصوت تسمع نطقها.</li>
        <li>علِّم القسم بعلامة ✓ لما تخلّصه، وكمّل من حيث ما وقفت في أي وقت.</li>
      </ol></details>
    <ol class="vd-lessons">${book.lessons.map(lesson => {
      const progress = reviewLessonProgress(lesson.n, state);
      return `<li><button type="button" class="vd-lesson-row" onclick="go('${REVIEW_ROUTE}/${lesson.n}')">
        <span class="vd-lesson-num">${lesson.n}</span>
        <span class="vd-lesson-text"><b>${escapeHtml(lesson.de)}</b><span lang="ar" dir="rtl">${escapeHtml(lesson.ar)}</span></span>
        <span class="vd-lesson-count${progress.done === progress.total ? ' is-done' : ''}">${progress.done ? `${progress.done}/` : ''}${progress.total} <small>Teile</small></span>
      </button></li>`;
    }).join('')}</ol>
    <section class="vd-group"><h3>Anhang <small lang="ar" dir="rtl">الملاحق</small></h3>
      <div class="vd-list">${book.extras.map(extra => `<button type="button" class="vd-card vd-card-row" onclick="go('${REVIEW_ROUTE}/x/${extra.id}')">
        <span class="vd-body"><small>Seite ${extra.pages[0]}–${extra.pages[1]}</small><b>${escapeHtml(extra.de)}</b>
          <span lang="ar" dir="rtl">${escapeHtml(extra.ar)}</span></span></button>`).join('')}</div></section>`;
}

// One line of the booklet: a heading, a sentence, or a gap to fill.
function reviewBlockHtml(block){
  const german = escapeHtml(block.de || '');
  if(block.t === 'h') return `<h4 class="rv-head">${german}${ar(block.ar, { inline: true })}</h4>`;
  if(!block.de) return ar(block.ar);
  return `<div class="rv-block"><p lang="de">${german}</p>${ar(block.ar)}</div>`;
}

function reviewWordsHtml(lesson){
  if(!lesson.words.length) return '<p class="pr-note">Kein Wortschatz in dieser Lektion.</p>';
  let group = null;
  const parts = [];
  lesson.words.forEach(word => {
    if(word.group !== group){
      if(group !== null) parts.push('</div></section>');
      group = word.group;
      parts.push(`<section class="rv-group"><h4 class="rv-head">${escapeHtml(group || 'Wortschatz')}${ar(word.groupAr, { inline: true })}</h4><div class="rv-words">`);
    }
    parts.push(`<article class="rv-word">
      <p class="rv-word-de" lang="de"><b>${escapeHtml(word.w)}</b>${word.form ? ` <small>${escapeHtml(word.form)}</small>` : ''}</p>
      ${ar(word.ar)}
      ${word.d ? `<p class="rv-word-d" lang="de">${escapeHtml(word.d)}</p>` : ''}
      ${word.ex ? `<p class="rv-word-ex" lang="de">„${escapeHtml(word.ex)}“</p>` : ''}</article>`);
  });
  parts.push('</div></section>');
  return parts.join('');
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
  const body = open === 'wortschatz'
    ? reviewWordsHtml(lesson)
    : (lesson.parts[open] || []).map(reviewBlockHtml).join('') || '<p class="pr-note">Dieser Teil ist in dieser Lektion nicht dabei.</p>';
  const previous = reviewLesson(number - 1), next = reviewLesson(number + 1);
  setTop(`Lektion ${number}`, 'Impuls B1 · Wiederholung', true, `الدرس ${number}`);
  view.innerHTML = `<section class="pr-head"><small>Wiederholung · Lektion ${number} · Seite ${lesson.pages[0]}–${lesson.pages[1]}</small>
      <h2>${escapeHtml(lesson.de)}</h2><p class="pr-ar" lang="ar" dir="rtl">الدرس ${number}: ${escapeHtml(lesson.ar)}</p>
      ${lesson.goals ? `<p class="pr-note" lang="de"><b>Lernziele:</b> ${escapeHtml(lesson.goals)}</p>` : ''}</section>
    <nav class="rv-tabs" aria-label="Teile der Lektion">${sections.map(item => {
      const count = item.id === 'wortschatz' ? lesson.words.length : (lesson.parts[item.id] || []).length;
      return `<button type="button" class="rv-tab${item.id === open ? ' is-on' : ''}${state[reviewDoneKey(number, item.id)] ? ' is-done' : ''}"
        ${count ? '' : 'disabled'} onclick="go('${REVIEW_ROUTE}/${number}/${item.id}')">${escapeHtml(item.de)}
        <small lang="ar" dir="rtl">${escapeHtml(item.ar)}</small></button>`;
    }).join('')}</nav>
    <section class="rv-body" aria-label="${escapeHtml(current?.de || '')}">${body}</section>
    <button type="button" class="${done ? 'next-primary' : 'next-secondary'} rv-done" onclick="toggleReviewDone(${number},'${open}')">
      ${done ? '✓ fertig' : 'Als fertig markieren'} <span lang="ar" dir="rtl">${done ? 'خلصت القسم ده' : 'علِّم القسم كمخلَّص'}</span></button>
    <nav class="vd-lesson-nav">${previous ? `<button type="button" class="next-secondary" onclick="go('${REVIEW_ROUTE}/${previous.n}')">‹ Lektion ${previous.n}</button>` : '<span></span>'}
      <button type="button" class="pr-link" onclick="go('${REVIEW_ROUTE}')">Alle Lektionen</button>
      ${next ? `<button type="button" class="next-secondary" onclick="go('${REVIEW_ROUTE}/${next.n}')">Lektion ${next.n} ›</button>` : '<span></span>'}</nav>`;
  if(!window.NextUI) window.scrollTo(0, 0);
}

function renderReviewExtra(id){
  if(renderLazyDataLoading('Impuls B1 · Anhang', REVIEW_LOADER, () => renderReviewExtra(id))) return;
  const extra = reviewExtra(id);
  if(!extra){ go(REVIEW_ROUTE); return; }
  setTop(escapeHtml(extra.de), 'Impuls B1 · Anhang', true, 'ملحق');
  view.innerHTML = `<section class="pr-head"><small>Anhang · Seite ${extra.pages[0]}–${extra.pages[1]}</small><h2>${escapeHtml(extra.de)}</h2>
      <p class="pr-ar" lang="ar" dir="rtl">${escapeHtml(extra.ar)}</p></section>
    <section class="rv-body">${extra.blocks.map(reviewBlockHtml).join('')}</section>
    <nav class="vd-lesson-nav"><span></span><button type="button" class="pr-link" onclick="go('${REVIEW_ROUTE}')">Alle Lektionen</button><span></span></nav>`;
  if(!window.NextUI) window.scrollTo(0, 0);
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
