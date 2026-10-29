/* ===================== flashcards ===================== */
const A2_REAL_PHOTO_LIMIT = {
  1:40, 2:40, 3:34, 4:36, 5:34, 6:40,
  7:136, 8:49, 9:49, 10:52, 11:49, 12:52
};
const A2_EXTRA_REAL_PHOTOS = {
  7:new Set([140,144,145])
};

function fallbackVocabSticker(v,chapterData,label='DE'){
  const category=v.cat||(chapterData?.num?`Kapitel ${chapterData.num}`:'Wortschatz');
  return `<div class="fc-visual" role="img" aria-label="${escapeHtml(v.w)}">
    <div class="level-code" aria-hidden="true">${escapeHtml(label)}</div>
    <span class="sticker-category">${escapeHtml(category)}</span>
  </div>`;
}

function vocabChapterOf(v){
  return [...A1_BOOK, ...BOOK, ...B1_BOOK].find(item=>item.vocab?.includes(v));
}

// Cards without a picture have nothing to show on a front side, so they
// are drawn as one fixed card (word, meaning, example, translation) that does not flip.
function isPictureFreeCard(v){
  if(v.img) return false;
  const chapter=vocabChapterOf(v);
  const route=chapter?.route||'';
  return route.startsWith('a1/')||route.startsWith('b1.1/')||BOOK.includes(chapter);
}

function vocabVisual(v,chapter){
  const chapterData=vocabChapterOf(v);
  if(chapterData?.route?.startsWith('a1/')){
    return `<div class="fc-visual ${v.img?'fc-visual--full':'fc-visual--plain'}" role="img" aria-label="${escapeHtml(v.w)}">
      ${v.img?`<img class="fc-scene" src="${v.img}" alt="" width="420" height="420" loading="eager" decoding="async">`:
      `<div class="level-code" style="margin:auto">A1</div>`}
      <span class="sticker-category">${escapeHtml(v.cat||`Kapitel ${chapterData.num}`)}</span>
    </div>`;
  }
  if(!chapterData){
    return fallbackVocabSticker(v, null, 'DE');
  }
  if(chapterData.route?.startsWith('b1.1/')){
    // B1.1 photos are generated per word and reviewed before they ship; a card
    // without one stays picture-free rather than borrowing a loose match.
    if(v.img){
      // A few abstract words carry a short looping story instead of one photo;
      // its first frame (v.still) is shown when the reader asks for less motion.
      const scene = v.still
        ? `<picture><source media="(prefers-reduced-motion: reduce)" srcset="${escapeHtml(v.still)}"><img class="fc-scene" src="${escapeHtml(v.img)}" alt="" width="420" height="420" loading="eager" decoding="async"></picture>`
        : `<img class="fc-scene" src="${escapeHtml(v.img)}" alt="" width="420" height="420" loading="eager" decoding="async">`;
      return `<div class="fc-visual" role="img" aria-label="${escapeHtml(v.w)}">
        ${scene}
        <span class="sticker-category">${escapeHtml(v.cat||`Kapitel ${chapterData.num}`)}</span>
      </div>`;
    }
    return `<div class="fc-visual fc-visual--plain" role="img" aria-label="${escapeHtml(v.w)}">
      <div class="level-code" style="margin:auto">B1</div>
      <span class="sticker-category">${escapeHtml(v.cat||`Kapitel ${chapterData.num}`)}</span>
    </div>`;
  }
  if(v.img){
    return `<div class="fc-visual" role="img" aria-label="${escapeHtml(v.w)}">
      <img class="fc-scene" src="${escapeHtml(v.img)}" alt="" width="420" height="420" loading="eager" decoding="async">
      <span class="sticker-category">${escapeHtml(v.cat||`Kapitel ${chapterData.num}`)}</span>
    </div>`;
  }
  const cardIndex=v.legacy?.index??(chapterData.num<=6?-1:chapterData.vocab.indexOf(v));
  const realPhotoLimit=A2_REAL_PHOTO_LIMIT[chapterData.num]||0;
  const sceneIndex=cardIndex+1;
  const hasExtraPhoto=A2_EXTRA_REAL_PHOTOS[chapterData.num]?.has(sceneIndex);
  if(cardIndex<0 || (sceneIndex>realPhotoLimit && !hasExtraPhoto)) return fallbackVocabSticker(v, chapterData, 'A2');
  const sceneNumber=String(sceneIndex).padStart(2,'0');
  return `<div class="fc-visual" role="img" aria-label="${escapeHtml(v.w)}">
    <img class="fc-scene" src="assets/vocab-scenes/k${chapterData.num}/${sceneNumber}.webp"
      alt="" width="420" height="420" loading="eager" decoding="async">
    <span class="sticker-category">${escapeHtml(v.cat||`Kapitel ${chapterData.num}`)}</span>
  </div>`;
}

let fcState = null;
function initFlash(c){
  const start = $('#fcStart'), stop = $('#fcStop'), area = $('#fcArea'), list = $('#vocList');
  const showCards = () => {
    fcState = {cards:[...c.vocab].sort(()=>Math.random()-.5), chapter:c.num, i:0, flipped:false};
    list.style.display='none'; start.style.display='none'; stop.style.display='block';
    drawFC();
  };
  start.addEventListener('click', showCards);
  stop.addEventListener('click', () => {
    fcState=null; list.style.display='block'; start.style.display='block'; stop.style.display='none';
    area.innerHTML='';
  });
  showCards();
}
function drawFC(){
  const a = $('#fcArea'); if(!fcState) return;
  const v = fcState.cards[fcState.i];
  const card = isPictureFreeCard(v) ? `
  <div class="flashcard flashcard--static" id="fcCard">
    <div class="flashcard-inner">
      <div class="flashcard-face flashcard-back" aria-hidden="false"><div class="fc-back-copy">
        ${v.cat?`<div class="fc-back-label">${escapeHtml(v.cat)}</div>${ar(v.catAr)}`:''}
        <div class="big" style="font-size:26px">${fmtWord(v.w)}</div>
        <div class="fdef">${v.d}</div>${ar(v.dAr)}${v.ex?`<div class="fex">„${v.ex}“</div>${ar(v.exAr)}`:''}${ar(v.ar)}</div></div>
    </div>
  </div>` : `
  <div class="flashcard ${fcState.flipped?'is-flipped':''}" id="fcCard" role="button" tabindex="0"
    aria-label="Karte umdrehen: ${escapeHtml(v.w)}" aria-pressed="${fcState.flipped}"
    onclick="flipFC()" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();flipFC()}">
    <div class="flashcard-inner">
      <div class="flashcard-face flashcard-front" aria-hidden="${fcState.flipped}">${vocabVisual(v,fcState.chapter)}<div class="big">${fmtWord(v.w)}</div>
        <div class="hint">Karte umdrehen: Bedeutung und Beispiele${arLabel('Karte umdrehen: Bedeutung und Beispiele')}</div></div>
      <div class="flashcard-face flashcard-back" aria-hidden="${!fcState.flipped}"><div class="fc-back-copy"><div class="fc-back-label">Bedeutung & Beispiele${arLabel('Bedeutung & Beispiele')}</div>
        <div class="big" style="font-size:20px">${fmtWord(v.w)}</div>
        <div class="fdef">${v.d}</div>${ar(v.dAr)}${v.ex?`<div class="fex">„${v.ex}“</div>${ar(v.exAr)}`:''}${ar(v.ar)}</div></div>
    </div>
  </div>`;
  a.innerHTML = `${card}
  <div class="fc-nav">
    <button class="btn btn-ghost" onclick="navFC(-1)">← zurück${arLabel('zurück')}</button>
    <span class="cnt">${fcState.i+1} / ${fcState.cards.length}</span>
    <button class="btn btn-green" onclick="navFC(1)">weiter →${arLabel('weiter')}</button>
  </div>`;
}
function flipFC(){
  if(!fcState||isPictureFreeCard(fcState.cards[fcState.i]))return;
  fcState.flipped=!fcState.flipped;
  const card=$('#fcCard');
  card?.classList.toggle('is-flipped',fcState.flipped);
  card?.setAttribute('aria-pressed',String(fcState.flipped));
  card?.querySelector('.flashcard-front')?.setAttribute('aria-hidden',String(fcState.flipped));
  card?.querySelector('.flashcard-back')?.setAttribute('aria-hidden',String(!fcState.flipped));
}
function navFC(d){
  fcState.i = (fcState.i + d + fcState.cards.length) % fcState.cards.length;
  fcState.flipped=false; drawFC();
}
