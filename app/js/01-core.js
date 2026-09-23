/* ===================== state & helpers ===================== */
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
  speechA2:'data_speech_clean.js?v=speech-clean-7',
  speechA1:'data_speech_a1.js?v=a1-fixed-voices-1',
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

function ar(txt){
  if(location.hash.includes('a1/listen/phonetik')) return '';
  return txt ? `<div class="ar" lang="ar" dir="rtl">${txt}</div>` : '';
}
