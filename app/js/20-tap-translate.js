/* ===================== tap to translate ===================== */
/* One tap on a German word shows its meaning in a sheet at the bottom of the
   screen; the sheet can translate the whole sentence too, so nothing has to
   be selected. Selections open the same sheet: the browser's copy/share menu
   appears next to a selection and used to cover the translation there. */

const TAP_SKIP=[
  'button','a','input','select','textarea','label','summary','[contenteditable]','[role="button"]',
  '[onclick]','.quiz-opt','.flashcard','.word-token','.speak-btn','.tab','.feature-tab','.app-bottom-nav',
  '.ar','[lang="ar"]','[dir="rtl"]','.modal-backdrop','.tt-sheet','img','svg','.exercise-input','.match-select',
  // cards that open, flip or navigate on a tap keep doing that
  '.verb-card','[aria-expanded]','[tabindex]:not([tabindex="-1"])','[data-ws-pick]','[data-book-page]',
  '[data-shell-route]','[data-review-reveal]','[data-rating]','[data-profile-field]'
].join(',');
const TAP_WORD=/[A-Za-zÄÖÜäöüß]+(?:[-'][A-Za-zÄÖÜäöüß]+)*/g;
let tapSheetState=null;

function tapTranslateEnabled(){
  try{ return localStorage.getItem('tapTranslate')!=='off'; }catch{ return true; }
}

function caretAt(x,y){
  if(document.caretRangeFromPoint) return document.caretRangeFromPoint(x,y);
  const position=document.caretPositionFromPoint?.(x,y);
  if(!position) return null;
  const range=document.createRange();
  range.setStart(position.offsetNode,position.offset);
  return range;
}

// The word under the finger as a Range, or null on space and punctuation.
function wordRangeAt(x,y){
  const caret=caretAt(x,y);
  const node=caret?.startContainer;
  if(!node||node.nodeType!==3) return null;
  const text=node.textContent;
  for(const match of text.matchAll(TAP_WORD)){
    const start=match.index,end=start+match[0].length;
    if(caret.startOffset<start||caret.startOffset>end) continue;
    const range=document.createRange();
    range.setStart(node,start);
    range.setEnd(node,end);
    // caret APIs snap to the nearest character: the tap must be on the word itself
    const box=range.getBoundingClientRect();
    if(x<box.left-4||x>box.right+4||y<box.top-4||y>box.bottom+4) return null;
    return range;
  }
  return null;
}

function markTappedWord(range){
  if(!window.CSS?.highlights||!window.Highlight) return;
  if(range) CSS.highlights.set('tapped-word',new Highlight(range));
  else CSS.highlights.delete('tapped-word');
}

function closeTranslationSheet(){
  const sheet=$('#translationSheet');
  if(sheet) sheet.hidden=true;
  document.body.classList.remove('tt-open');
  markTappedWord(null);
  tapSheetState=null;
}

function showTranslationSheet(data){
  const sheet=$('#translationSheet');
  if(!sheet) return;
  const hasArabic=/[؀-ۿ]/.test(data.selected);
  const sourceLanguage=hasArabic?'ar':'de';
  const targetLanguage=hasArabic?'de':'ar';
  const known=!hasArabic?knownWordTranslation(data.selected):null;
  const requestId=++translationRequest;
  const wordPromise=known?Promise.resolve(known)
    :requestTranslation(data.selected,sourceLanguage,targetLanguage);
  // the details dialog and favourites read the shared pendingTranslation
  pendingTranslation={...data,sourceLanguage,targetLanguage,wordTranslation:known||'',dictionaryFallback:known||'',sentenceTranslation:'',wordPromise};
  pendingTranslation.sentencePromise=null;
  tapSheetState={requestId,data};
  $('#ttWord').textContent=data.selected;
  $('#ttWord').lang=sourceLanguage;
  $('#ttMeaning').textContent=known||'…';
  $('#ttMeaning').dir=targetLanguage==='ar'?'rtl':'ltr';
  $('#ttSentence').innerHTML=data.contextHtml||escapeHtml(data.context);
  $('#ttSentence').dir=sourceLanguage==='ar'?'rtl':'ltr';
  $('#ttSentenceResult').hidden=true;
  $('#ttSentenceBtn').hidden=!data.context||data.context===data.selected;
  $('#ttSentenceBtn').disabled=false;
  $('#ttSpeak').hidden=sourceLanguage!=='de';
  sheet.hidden=false;
  document.body.classList.add('tt-open');
  markTappedWord(data.range);
  updateTranslationFavoriteButtons();
  wordPromise.then(translated=>{
    if(tapSheetState?.requestId!==requestId) return;
    pendingTranslation.wordTranslation=translated;
    $('#ttMeaning').textContent=translated;
  }).catch(()=>{
    if(tapSheetState?.requestId===requestId) $('#ttMeaning').textContent='الترجمة مش متاحة دلوقتي — جرّب تاني لما النت يرجع';
  });
}

async function translateSheetSentence(){
  const state=tapSheetState;
  if(!state) return;
  const button=$('#ttSentenceBtn');
  const result=$('#ttSentenceResult');
  button.disabled=true;
  result.hidden=false;
  result.dir=pendingTranslation.targetLanguage==='ar'?'rtl':'ltr';
  result.textContent='جارٍ ترجمة الجملة…';
  pendingTranslation.sentencePromise=pendingTranslation.sentencePromise
    ||requestTranslation(state.data.context,pendingTranslation.sourceLanguage,pendingTranslation.targetLanguage);
  try{
    const translated=await pendingTranslation.sentencePromise;
    if(tapSheetState!==state) return;
    pendingTranslation.sentenceTranslation=translated;
    result.textContent=translated;
    button.hidden=true;
  }catch{
    if(tapSheetState===state){ result.textContent='تعذرت ترجمة الجملة. جرّب تاني.'; button.disabled=false; }
  }
}

function handleTapTranslate(event){
  if(!tapTranslateEnabled()||event.button!==0||event.defaultPrevented) return;
  if(document.body.classList.contains('exam-mode')||document.body.classList.contains('listen-mode')) return;
  const target=event.target;
  if(!(target instanceof Element)||!view.contains(target)||target.closest(TAP_SKIP)) return;
  if(!window.getSelection().isCollapsed) return;           // a selection is the selection flow's job
  const range=wordRangeAt(event.clientX,event.clientY);
  if(!range){ closeTranslationSheet(); return; }
  const word=range.toString();
  if(word.length<2) return;
  const data=contextFromRange(range,word);
  if(!data) return;
  showTranslationSheet(data);
}

document.addEventListener('click',handleTapTranslate);
document.addEventListener('keydown',event=>{ if(event.key==='Escape'&&tapSheetState) closeTranslationSheet(); });
window.addEventListener('hashchange',closeTranslationSheet);
$('#ttClose')?.addEventListener('click',closeTranslationSheet);
$('#ttSentenceBtn')?.addEventListener('click',translateSheetSentence);
$('#ttSpeak')?.addEventListener('click',()=>tapSheetState&&speakText(tapSheetState.data.selected,'de'));
$('#ttFavorite')?.addEventListener('click',togglePendingFavorite);
$('#ttMore')?.addEventListener('click',()=>{
  if(!pendingTranslation) return;
  if(!pendingTranslation.sentencePromise&&pendingTranslation.context!==pendingTranslation.selected){
    pendingTranslation.sentencePromise=requestTranslation(pendingTranslation.context,pendingTranslation.sourceLanguage,pendingTranslation.targetLanguage);
  }
  pendingTranslation.sentencePromise=pendingTranslation.sentencePromise||pendingTranslation.wordPromise;
  closeTranslationSheet();
  showTranslationDetails();
});
