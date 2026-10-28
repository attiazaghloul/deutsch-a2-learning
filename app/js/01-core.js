/* ===================== state & helpers ===================== */
const LESSON_UI_AR={
  'Überblick':'نظرة عامة','Wortschatz':'المفردات','Lesen':'القراءة','Redemittel':'تعبيرات جاهزة','Grammatik':'القواعد','Sprechen':'المحادثة','Lerncheck':'اختبار المراجعة','Quiz':'اختبار قصير',
  'Überblick, Ziele und Bilder des Kapitels.':'ملخص الوحدة وأهدافها وصورها.','Wörter, Beispiele und Flashcards.':'كلمات وأمثلة وبطاقات مراجعة.','Lesetexte mit Fragen und Antworten.':'نصوص قراءة مع أسئلة وإجابات.','Fertige Sätze zum Sprechen.':'جمل جاهزة لاستخدامها في الكلام.','Regeln, Beispiele und Übungen.':'قواعد وأمثلة وتمارين.','Mündliche Aufgaben und Modellantworten.':'مهام محادثة وإجابات نموذجية.','Kurzer Test zum Wiederholen.':'اختبار قصير للمراجعة.',
  'Worum geht es in diesem Kapitel?':'الوحدة دي عن إيه؟','Das lernst du hier':'هتتعلم هنا إيه؟','Tipp:':'نصيحة:','Mit Karten üben':'تدرّب بالبطاقات','Liste zeigen':'إظهار القائمة','Wörter trainieren':'تدرّب على الكلمات','Alle Wörter ins Review':'إضافة كل الكلمات للمراجعة',
  'Mehrere Sprecher hören':'اسمع النص بأصوات متعددة','Leseverstehen':'فهم المقروء','Antwort zeigen':'إظهار الإجابة','Antwort ausblenden':'إخفاء الإجابة','Sprich über das Thema!':'اتكلم عن الموضوع!','Modelltext – so kannst du sprechen:':'نص نموذجي: تقدر تتكلم بالشكل ده','Kurzquiz':'اختبار قصير',
  'Gesprächssituationen':'مواقف محادثة','Dialog':'الحوار','Stopp':'إيقاف','Nützliche Sätze':'جمل مفيدة','Deine Aufgabe:':'مهمتك:',
  'Wähle die richtige Antwort':'اختار الإجابة الصحيحة','Richtig oder falsch?':'صح ولا غلط؟','Ergänze die Lücke':'كمّل الفراغ','Bring die Wörter in die richtige Reihenfolge':'رتّب الكلمات بالترتيب الصحيح','Schreib den Satz um':'أعد صياغة الجملة','Finde und korrigiere den Fehler':'اكتشف الخطأ وصحّحه','Übung':'تمرين',
  'Richtig':'صح','Falsch':'غلط','Zurücksetzen':'ابدأ الترتيب من جديد','Prüfen':'تحقّق من الإجابة','Lösung zeigen':'إظهار الحل','Auch möglich:':'إجابة أخرى ممكنة:','Typische Fehler':'أخطاء شائعة','Übungen':'تمارين','noch nicht geübt':'لسه ما اتدرّبتش','Benutze alle Wörter.':'استخدم كل الكلمات.','Neuer Test':'اختبار جديد','Beantworte alle Fragen.':'جاوب على كل الأسئلة.','Noch nicht.':'الإجابة لسه مش صحيحة.','Dein Ergebnis:':'نتيجتك:',
  'Antwort':'الإجابة','Schreib den korrigierten Satz …':'اكتب الجملة بعد تصحيحها…','Schreib den ganzen Satz …':'اكتب الجملة كاملة…',
  'zurück':'السابق','weiter':'التالي','Karte umdrehen: Bedeutung und Beispiele':'اقلب البطاقة: المعنى والأمثلة','Bedeutung & Beispiele':'المعنى والأمثلة',
  'Lektionen':'الوحدات','Wörterbuch':'القاموس','Verben':'الأفعال','Training':'التدريب','Prüfung':'الامتحان','Hören':'الاستماع','Podcast':'البودكاست','Start':'الرئيسية','Inhalte':'المحتوى','Wörter':'الكلمات','Fortschritt':'التقدم','Einstellungen':'الإعدادات'
};

// Sticky tabs must start below the header, including its Arabic title.
const translatedTopbar=document.querySelector('header.topbar');
if(translatedTopbar&&typeof ResizeObserver!=='undefined'){
  new ResizeObserver(entries=>{
    document.documentElement.style.setProperty('--sticky-topbar-h',`${Math.ceil(entries[0].target.getBoundingClientRect().height)}px`);
  }).observe(translatedTopbar);
}

const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const view = $('#view');
const A1_BOOK = window.A1_BOOK || [];
const BOOK = [...window.BOOK0, ...window.BOOK1, ...window.BOOK2];
const B1_BOOK = window.B1_BOOK || [];
const GRAM = window.GRAM;
const OFFLINE_DICTIONARY_META={entries:138755};
const VERBS = window.A2_VERBS || [];
const A1_VERBS = window.A1_VERBS || [];
const HOEREN_A1 = window.HOEREN_A1_BOOK;
const PHONETIK_A1 = window.PHONETIK_A1_BOOK;
const HOEREN = window.HOEREN_BOOK;
const A1_LISTEN_BOOKS = {
  hoeren: {
    meta: HOEREN_A1,
    figures: () => window.HOEREN_A1_FIGURES || {},
    interactive: () => window.HOEREN_A1_INTERACTIVE || {},
    progressKey: 'a1HoerenProgress',
    trackLabel: track => `Track ${track}`,
    audioSrc: track => `assets/listening/a1/audio/track-${String(track).padStart(3, '0')}.mp3`,
    thumbnail: ex => `assets/listening/a1/thumbnails/${ex.id.toLowerCase()}.webp`,
    pageBase: 'assets/listening/a1/pages/',
    cover: 'assets/listening/a1/cover.webp',
    route: 'a1/listen/hoeren',
    chapterPattern: /^[A-H]$/
  },
  phonetik: {
    meta: PHONETIK_A1,
    figures: () => window.PHONETIK_A1_FIGURES || {},
    interactive: () => window.PHONETIK_A1_INTERACTIVE || {},
    progressKey: 'a1PhonetikProgress',
    trackLabel: track => `Track ${track}`,
    trackTasks: () => window.PHONETIK_A1_TRACK_TASKS || {},
    audioSrc: track => `assets/listening/a1-phonetik/audio/track-${String(track).replace('.', '-')}.mp3`,
    thumbnail: ex => ex.cover || `assets/listening/a1-phonetik/thumbnails/${ex.id.toLowerCase()}.webp`,
    pageBase: 'assets/listening/a1-phonetik/pages/',
    cover: 'assets/listening/a1-phonetik/cover.webp',
    pageOffset: 1,
    route: 'a1/listen/phonetik',
    chapterPattern: /^[A-C]$/
  }
};
const EXAM = window.A2_EXAM;
/* Large data bundles load on demand so the first screen does not wait for them. */
const LAZY_SCRIPTS={
  podcast:'data_podcast.js?v=word-sync-3',
  speechA2:'data_speech_clean.js?v=speech-clean-8',
  speechA1:'data_speech_a1.js?v=a1-fixed-voices-3',
  speechB1:'data_speech_b1.js?v=b1-fixed-voices-1'
};
const lazyScriptLoads=new Map();
function loadScriptOnce(src){
  if(!lazyScriptLoads.has(src)){
    lazyScriptLoads.set(src,new Promise((resolve,reject)=>{
      const script=document.createElement('script');
      script.src=src;
      script.onload=()=>resolve();
      script.onerror=()=>{lazyScriptLoads.delete(src);reject(new Error(`Could not load ${src}`));};
      document.head.appendChild(script);
    }));
  }
  return lazyScriptLoads.get(src);
}

let PODCASTS = window.A2_PODCASTS || [];
function ensurePodcasts(){
  if(window.A2_PODCASTS) return Promise.resolve(PODCASTS=window.A2_PODCASTS);
  return loadScriptOnce(LAZY_SCRIPTS.podcast).then(()=>PODCASTS=window.A2_PODCASTS||[]);
}

let FIXED_SPEECH = {texts:[],voices:[]};
let FIXED_SPEECH_INDEX = new Map();
let A1_FIXED_SPEECH = {texts:[],voices:[]};
let A1_FIXED_SPEECH_INDEX = new Map();
let B1_FIXED_SPEECH = {texts:[],voices:[]};
let B1_FIXED_SPEECH_INDEX = new Map();
function applySpeechLibraries(){
  FIXED_SPEECH = window.A2_FIXED_SPEECH || {texts:[],voices:[]};
  FIXED_SPEECH_INDEX = new Map(FIXED_SPEECH.texts.map((text,index)=>[text,index]));
  A1_FIXED_SPEECH = window.A1_FIXED_SPEECH || {texts:[],voices:[]};
  A1_FIXED_SPEECH_INDEX = new Map(A1_FIXED_SPEECH.texts.map((text,index)=>[text,index]));
  B1_FIXED_SPEECH = window.B1_FIXED_SPEECH || {texts:[],voices:[]};
  B1_FIXED_SPEECH_INDEX = new Map(B1_FIXED_SPEECH.texts.map((text,index)=>[text,index]));
}
let speechLibrariesLoad=null;
function ensureSpeechLibraries(){
  if(!speechLibrariesLoad){
    speechLibrariesLoad=Promise.all([loadScriptOnce(LAZY_SCRIPTS.speechA2),loadScriptOnce(LAZY_SCRIPTS.speechA1),loadScriptOnce(LAZY_SCRIPTS.speechB1).catch(()=>{})])
      .then(()=>{
        applySpeechLibraries();
        if($('#settingsModal')?.classList.contains('open')) populateVoiceOptions();
      })
      .catch(error=>{speechLibrariesLoad=null;throw error;});
  }
  return speechLibrariesLoad;
}
applySpeechLibraries();
window.addEventListener('load',()=>{
  const idle=window.requestIdleCallback||(callback=>setTimeout(callback,600));
  idle(()=>ensureSpeechLibraries().catch(()=>{}),{timeout:2500});
});
function escapeHtml(value){
  return String(value).replace(/[&<>"']/g,char=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]));
}

/* Arabic toggle (persisted) */
function setAr(on){
  document.body.classList.toggle('show-ar', on);
  $('#arToggle').setAttribute('aria-checked', String(on));
  localStorage.setItem('showArUserChoice', on ? '1' : '0');
}
$('#arToggle').addEventListener('click', () => setAr(!document.body.classList.contains('show-ar')));
setAr(localStorage.getItem('showArUserChoice') === '1');   // default OFF

function ar(txt, options={}){
  if(location.hash.includes('a1/listen/phonetik')) return '';
  // Skip empty values and "translations" without Arabic letters (duplicated German).
  if(!txt||!/[\u0600-\u06ff]/.test(String(txt))) return '';
  if(options.inline) return `<span class="ar ar-label" lang="ar" dir="rtl">${escapeHtml(txt)}</span>`;
  // Long translations fold away so German texts keep their rhythm.
  if(String(txt).replace(/<[^>]+>/g,'').length>260){
    return `<details class="ar ar-long" lang="ar" dir="rtl"${options.expanded?' open':''}><summary>الترجمة العربية</summary><div class="ar-long-body">${txt}</div></details>`;
  }
  return `<div class="ar" lang="ar" dir="rtl">${txt}</div>`;
}

function arLabel(text){
  return ar(LESSON_UI_AR[text],{inline:true});
}
