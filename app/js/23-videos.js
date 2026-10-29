/* ===================== Sehen: videos for German learners ===================== */
/* A small curated list (DW "Nicos Weg", Easy German) plus any YouTube link the
   learner adds. The player adds what learning needs: slower speed, jump back,
   A–B repeat, a pause after every few seconds for shadowing, notes and words.
   Videos need the internet; everything else here is stored on the device. */

const VIDEO_LIBRARY=[
  {key:'nico-a1',level:'a1',yt:'4-eDoThe6qo',title:'Nicos Weg A1 – der ganze Film',channel:'DW Deutsch lernen',kind:'Film',
    text:'Nico kommt nach Deutschland und spricht fast kein Deutsch. Alle A1-Folgen in einem Film.',ar:'نيكو بيوصل ألمانيا ومش بيعرف ألماني تقريبًا — كل حلقات A1 في فيلم واحد.'},
  {key:'vorstellen-slow',level:'a1',yt:'r94aqLUO0wo',title:'Sich vorstellen in langsamem Deutsch',channel:'Easy German · Super Easy German',kind:'Video',
    text:'Echte Menschen stellen sich vor – langsam und deutlich.',ar:'ناس حقيقية بتعرّف بنفسها بكلام بطيء وواضح.'},
  {key:'vorstellen-basics',level:'a1',yt:'Yaelm87PTvg',title:'Sich vorstellen – für absolute Anfänger',channel:'Easy German · Super Easy German',kind:'Video',
    text:'Die wichtigsten Sätze, um dich vorzustellen.',ar:'أهم الجمل عشان تعرّف بنفسك.'},
  {key:'basic-phrases',level:'a1',list:'PLA5UIoabheFNu1ndR6QnjoIU1rXq7HMu8',title:'Basic Phrases – wichtige Sätze',channel:'Easy German',kind:'Playlist',
    text:'Kurze Videos mit Sätzen für jeden Tag.',ar:'فيديوهات قصيرة بجمل كل يوم.'},
  {key:'nico-a2',level:'a2',yt:'Lg5P2w_Ro1c',title:'Nicos Weg A2 – der ganze Film',channel:'DW Deutsch lernen',kind:'Film',
    text:'Nicos Geschichte geht weiter: Arbeit, Wohnung, Freunde. Alle A2-Folgen in einem Film.',ar:'قصة نيكو بتكمل: الشغل والسكن والأصحاب — كل حلقات A2 في فيلم واحد.'},
  {key:'day-in-my-life',level:'a2',yt:'18CBczwqARs',title:'Ein Tag in meinem Leben – langsames Deutsch',channel:'Easy German · Super Easy German',kind:'Video',
    text:'Ein ganzer Tag erzählt in langsamem Deutsch.',ar:'يوم كامل بيتحكي بألماني بطيء.'},
  {key:'slow-conversation',level:'a2',yt:'hhuNW1COrSM',title:'14 Minuten Gespräch in langsamem Deutsch',channel:'Easy German · Super Easy German',kind:'Video',
    text:'Ein echtes Gespräch, langsam gesprochen – ideal zum Shadowing.',ar:'محادثة حقيقية بكلام بطيء — ممتازة للشادوينج.'},
  {key:'library-slow',level:'a2',yt:'zdRUMMSK0do',title:'In der Bibliothek – langsames Deutsch',channel:'Slow German',kind:'Video',
    text:'Ein Buch für Anfänger wird langsam vorgelesen.',ar:'كتاب للمبتدئين بيتقري بالبطيء.'},
  {key:'nico-b1',level:'b1',yt:'LkufozluseI',title:'Nicos Weg B1 – der ganze Film',channel:'DW Deutsch lernen',kind:'Film',
    text:'Nicos Weg auf B1: Beruf, Geschichte, Gesellschaft. Alle B1-Folgen in einem Film.',ar:'نيكو في B1: الشغل والتاريخ والمجتمع — كل الحلقات في فيلم واحد.'},
  {key:'seven-questions',level:'b1',yt:'I9kmYRRG6sM',title:'Deutsche beantworten 7 persönliche Fragen',channel:'Easy German',kind:'Straßeninterview',
    text:'Menschen auf der Straße antworten spontan – echtes Alltagsdeutsch.',ar:'ناس في الشارع بترد على طول — ألماني الحياة اليومية الحقيقي.'},
  {key:'street-interviews',level:'b1',list:'PLrcKlx5cOSeTfRR7283XrcbqLpVBZf5Fp',title:'Straßeninterviews in Deutschland',channel:'Easy German',kind:'Playlist',
    text:'Viele Themen, echte Stimmen, deutsche und englische Untertitel.',ar:'مواضيع كتير وأصوات حقيقية بترجمة ألماني وإنجليزي.'},
  {key:'nico-all',level:'all',list:'PLs7zUO7VPyJ5DV1iBRgSw2uDl832n0bLg',title:'Nicos Weg – alle Folgen (A1, A2, B1)',channel:'DW Deutsch lernen',kind:'Playlist',
    text:'Die Serie in kurzen Folgen – eine Folge pro Tag.',ar:'المسلسل في حلقات قصيرة — حلقة كل يوم.'}
];
const VIDEO_STATE_KEY='videoProgress';
const VIDEO_CUSTOM_KEY='videoCustom';
let videoPlayer=null;
let videoTicker=null;
let videoLoop=null;        // {a,b} seconds
let videoPauseEvery=0;     // seconds between automatic pauses
let videoNextPause=0;

function readVideoState(){
  try{
    const value=JSON.parse(localStorage.getItem(VIDEO_STATE_KEY)||'{}');
    return value&&typeof value==='object'?value:{};
  }catch{ return {}; }
}

function saveVideoState(key,update){
  const all=readVideoState();
  all[key]={...all[key]};
  update(all[key]);
  try{ localStorage.setItem(VIDEO_STATE_KEY,JSON.stringify(all)); }catch{}
}

function customVideos(){
  try{
    const list=JSON.parse(localStorage.getItem(VIDEO_CUSTOM_KEY)||'[]');
    return Array.isArray(list)?list:[];
  }catch{ return []; }
}

// A YouTube link in any of its forms -> {yt} or {list}, or null.
function parseYouTubeLink(value){
  const text=String(value||'').trim();
  const id='([\\w-]{11})';
  const video=text.match(new RegExp(`(?:youtu\\.be/|[?&]v=|/embed/|/shorts/|/live/)${id}`))||text.match(new RegExp(`^${id}$`));
  if(video) return {yt:video[1]};
  const list=text.match(/[?&]list=([\w-]{10,})/);
  return list?{list:list[1]}:null;
}

function allVideos(){
  return [...VIDEO_LIBRARY,...customVideos().map(item=>({...item,custom:true,level:'mine'}))];
}

function videoThumb(item){
  return item.yt?`https://i.ytimg.com/vi/${item.yt}/hqdefault.jpg`:'';
}

function renderVideoList(filter='all'){
  const state=readVideoState();
  setTop('Videos','Sehen und verstehen',true,'فيديوهات');
  const filters=[['all','Alle'],['a1','A1'],['a2','A2'],['b1','B1'],['mine','Meine']];
  const items=allVideos().filter(item=>filter==='all'||item.level===filter||(item.level==='all'&&filter!=='mine'));
  view.innerHTML=`<section class="pr-head"><h2>Videos zum Deutschlernen</h2><p>Filme und Serien für Lernende. Langsamer abspielen, Sätze wiederholen, Wörter notieren – und nach jedem Satz pausieren, um nachzusprechen.</p>
      <p class="pr-ar" lang="ar" dir="rtl">اتفرج على أفلام ومسلسلات معمولة للمتعلمين: بطّأ السرعة، كرّر الجمل، اكتب الكلمات الجديدة، وخلي الفيديو يقف بعد كل جملة عشان تقولها وراه.</p></section>
    <nav class="pr-level-tabs" aria-label="Filter">${filters.map(([id,label])=>`<button type="button" onclick="go('${id==='all'?'videos':`videos/${id}`}')" ${id===filter?'aria-current="page"':''}>${label}</button>`).join('')}</nav>
    <form class="vd-add" data-video-add><label for="videoLink"><b>Eigenes Video hinzufügen</b> <small lang="ar" dir="rtl">ضيف أي فيديو من يوتيوب</small></label>
      <div><input id="videoLink" type="url" inputmode="url" placeholder="YouTube-Link einfügen …" autocomplete="off"><button type="submit" class="next-primary">Hinzufügen</button></div></form>
    ${items.length?`<div class="vd-grid">${items.map(item=>{
      const saved=state[item.key]||{};
      return `<button type="button" class="vd-card" onclick="go('videos/play/${item.key}')">
        <span class="vd-thumb">${videoThumb(item)?`<img src="${videoThumb(item)}" alt="" loading="lazy" onerror="this.remove()">`:''}<span class="vd-kind">${escapeHtml(item.kind||'Video')}</span>${saved.watched?'<span class="vd-done">✓ gesehen</span>':''}${saved.time&&!saved.watched?`<span class="vd-resume">▶ ${formatVideoTime(saved.time)}</span>`:''}</span>
        <span class="vd-body"><small>${item.level==='all'?'A1 – B1':item.level==='mine'?'Mein Video':item.level.toUpperCase()} · ${escapeHtml(item.channel||'YouTube')}</small><b>${escapeHtml(item.title)}</b>${item.text?`<span>${escapeHtml(item.text)}</span>`:''}${item.ar?`<span lang="ar" dir="rtl">${escapeHtml(item.ar)}</span>`:''}</span>
      </button>`;
    }).join('')}</div>`:`<div class="review-empty"><h2>Noch keine eigenen Videos</h2><p lang="ar" dir="rtl">انسخ لينك أي فيديو ألماني من يوتيوب وحطّه فوق.</p></div>`}
    <p class="pr-note" lang="ar" dir="rtl">الفيديوهات محتاجة نت. النوتس والكلمات بتتحفظ على جهازك.</p>`;
}

function formatVideoTime(seconds){
  const value=Math.max(0,Math.floor(seconds||0));
  const hours=Math.floor(value/3600),minutes=Math.floor(value%3600/60),secs=value%60;
  return `${hours?`${hours}:${String(minutes).padStart(2,'0')}`:minutes}:${String(secs).padStart(2,'0')}`;
}

let youTubeApiLoad=null;
function loadYouTubeApi(){
  if(window.YT?.Player) return Promise.resolve(window.YT);
  if(!youTubeApiLoad){
    youTubeApiLoad=new Promise((resolve,reject)=>{
      const previous=window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady=()=>{ previous?.(); resolve(window.YT); };
      const script=document.createElement('script');
      script.src='https://www.youtube.com/iframe_api';
      script.onerror=()=>{ youTubeApiLoad=null; reject(new Error('YouTube not reachable')); };
      document.head.appendChild(script);
      setTimeout(()=>reject(new Error('YouTube timeout')),12000);
    });
  }
  return youTubeApiLoad;
}

function stopVideoPlayer(){
  clearInterval(videoTicker);
  videoTicker=null;
  videoLoop=null;
  videoPauseEvery=0;
  try{ videoPlayer?.destroy(); }catch{}
  videoPlayer=null;
}

function renderVideoPlayer(key){
  stopVideoPlayer();
  const item=allVideos().find(entry=>entry.key===key);
  if(!item){ go('videos'); return; }
  const saved=readVideoState()[key]||{};
  const youtubeUrl=item.yt?`https://www.youtube.com/watch?v=${item.yt}`:`https://www.youtube.com/playlist?list=${item.list}`;
  setTop('Video',escapeHtml(item.title),true,'فيديو');
  view.innerHTML=`<div class="vd-player-page" data-video-key="${escapeHtml(key)}">
    <div class="vd-frame"><div id="videoFrame"></div><div class="vd-offline" id="videoOffline" hidden><p lang="ar" dir="rtl">الفيديو مش بيحمّل — اتأكد من النت.</p><a class="next-secondary" href="${youtubeUrl}" target="_blank" rel="noopener">Auf YouTube öffnen</a></div></div>
    <div class="vd-title"><div><small>${escapeHtml(item.channel||'YouTube')} · ${escapeHtml(item.kind||'Video')}</small><h2>${escapeHtml(item.title)}</h2></div>
      <button type="button" class="next-secondary" data-video-watched aria-pressed="${Boolean(saved.watched)}">${saved.watched?'✓ Gesehen':'Als gesehen markieren'}</button></div>
    <div class="vd-controls" role="group" aria-label="Lernsteuerung">
      <button type="button" data-video-cmd="back5">⟲ 5 s</button>
      <button type="button" data-video-cmd="toggle">⏯</button>
      <button type="button" data-video-cmd="repeat" title="Die letzten Sekunden noch einmal">↺ Satz</button>
      <span class="vd-sep"></span>
      ${[.5,.75,1,1.25].map(rate=>`<button type="button" data-video-rate="${rate}" aria-pressed="${rate===1}">${rate}×</button>`).join('')}
    </div>
    <div class="vd-controls" role="group" aria-label="Wiederholen">
      <button type="button" data-video-cmd="loopA">A</button>
      <button type="button" data-video-cmd="loopB">B</button>
      <button type="button" data-video-cmd="loopClear" hidden>A–B aus</button>
      <span class="vd-loop" id="videoLoopLabel">A–B: Abschnitt wiederholen</span>
      <span class="vd-sep"></span>
      <label class="vd-pause">Pause alle <select data-video-pause><option value="0">aus</option>${[4,6,8,12].map(n=>`<option value="${n}">${n} s</option>`).join('')}</select></label>
      <button type="button" data-video-cmd="captions">Untertitel DE</button>
    </div>
    <details class="pr-help" open><summary>So lernst du mit Videos <span lang="ar" dir="rtl">طريقة المذاكرة بالفيديو</span></summary>
      <ol lang="ar" dir="rtl"><li><b>اتفرج مرة من غير ترجمة</b> وحاول تفهم الفكرة العامة.</li><li><b>شغّل الترجمة الألماني</b> (Untertitel DE) واكتب الكلمات الجديدة تحت.</li><li><b>اختار جزء قصير</b> بـ A و B، أو خلي الفيديو يقف كل ٦ ثواني، وقول الكلام وراه (شادوينج).</li><li><b>بطّأ السرعة</b> لـ 0.75× لو الكلام سريع.</li></ol></details>
    <section class="vd-notes"><h3>Wörter aus dem Video <small lang="ar" dir="rtl">كلمات جديدة</small></h3>
      <form class="vd-word" data-video-word><input id="videoWord" lang="de" placeholder="Neues Wort, z. B. die Wohnung" autocomplete="off" autocapitalize="off"><button type="submit" class="next-primary">Übersetzen & speichern</button></form>
      <p class="vd-word-result" id="videoWordResult" aria-live="polite"></p>
      <label for="videoNotes"><b>Notizen</b> <small lang="ar" dir="rtl">ملاحظاتك عن الفيديو</small></label>
      <textarea id="videoNotes" rows="4" placeholder="Was hast du verstanden? Welche Sätze willst du benutzen?">${escapeHtml(saved.notes||'')}</textarea>
      <a class="vd-youtube" href="${youtubeUrl}" target="_blank" rel="noopener">Auf YouTube öffnen ↗</a>
      ${item.custom?`<button type="button" class="pr-link" data-video-remove>Dieses Video aus meiner Liste entfernen</button>`:''}
    </section>
  </div>`;
  saveVideoState(key,entry=>{ entry.opened=Date.now(); });
  loadYouTubeApi().then(YT=>{
    if(!document.querySelector(`[data-video-key="${CSS.escape(key)}"]`)) return;
    const playerVars={rel:0,playsinline:1,modestbranding:1,hl:'de',cc_lang_pref:'de',start:Math.floor(saved.time||0)};
    if(item.list){ playerVars.listType='playlist'; playerVars.list=item.list; }
    videoPlayer=new YT.Player('videoFrame',{
      host:'https://www.youtube-nocookie.com',
      videoId:item.yt||undefined,
      playerVars,
      events:{onError:()=>{ $('#videoOffline').hidden=false; }}
    });
    videoTicker=setInterval(()=>videoTick(key),250);
  }).catch(()=>{ const offline=$('#videoOffline'); if(offline) offline.hidden=false; });
}

function videoTick(key){
  const player=videoPlayer;
  if(!player?.getCurrentTime) return;
  const time=player.getCurrentTime();
  const playing=player.getPlayerState?.()===1;
  if(videoLoop?.b!==undefined&&time>=videoLoop.b){ player.seekTo(videoLoop.a,true); return; }
  if(videoPauseEvery&&playing){
    if(!videoNextPause||time<videoNextPause-videoPauseEvery-1) videoNextPause=time+videoPauseEvery;
    if(time>=videoNextPause){ player.pauseVideo(); videoNextPause=time+videoPauseEvery; }
  }
  // remember where the learner is, about every five seconds
  if(playing&&Math.floor(time)%5===0) saveVideoState(key,entry=>{ entry.time=time; });
}

function updateLoopLabel(){
  const label=$('#videoLoopLabel');
  if(!label) return;
  $('[data-video-cmd="loopClear"]').hidden=!videoLoop;
  label.textContent=!videoLoop?'A–B: Abschnitt wiederholen':videoLoop.b===undefined?`A = ${formatVideoTime(videoLoop.a)} · jetzt B setzen`:`Wiederhole ${formatVideoTime(videoLoop.a)} – ${formatVideoTime(videoLoop.b)}`;
}

document.addEventListener('click',event=>{
  const page=event.target.closest('.vd-player-page');
  if(!page) return;
  const key=page.dataset.videoKey;
  const player=videoPlayer;
  const command=event.target.closest('[data-video-cmd]')?.dataset.videoCmd;
  if(command&&player?.getCurrentTime){
    const time=player.getCurrentTime();
    if(command==='back5') player.seekTo(Math.max(0,time-5),true);
    if(command==='repeat'){ player.seekTo(Math.max(0,time-4),true); player.playVideo(); }
    if(command==='toggle') player.getPlayerState()===1?player.pauseVideo():player.playVideo();
    if(command==='loopA'){ videoLoop={a:time}; updateLoopLabel(); }
    if(command==='loopB'&&videoLoop&&time>videoLoop.a+.5){ videoLoop.b=time; player.seekTo(videoLoop.a,true); player.playVideo(); updateLoopLabel(); }
    if(command==='loopClear'){ videoLoop=null; updateLoopLabel(); }
    if(command==='captions'){
      try{ player.loadModule('captions'); player.setOption('captions','track',{languageCode:'de'}); }catch{}
    }
    return;
  }
  const rate=event.target.closest('[data-video-rate]');
  if(rate&&player?.setPlaybackRate){
    player.setPlaybackRate(Number(rate.dataset.videoRate));
    page.querySelectorAll('[data-video-rate]').forEach(button=>button.setAttribute('aria-pressed',String(button===rate)));
    return;
  }
  const watched=event.target.closest('[data-video-watched]');
  if(watched){
    const on=watched.getAttribute('aria-pressed')!=='true';
    saveVideoState(key,entry=>{ entry.watched=on; });
    watched.setAttribute('aria-pressed',String(on));
    watched.textContent=on?'✓ Gesehen':'Als gesehen markieren';
    return;
  }
  if(event.target.closest('[data-video-remove]')){
    try{ localStorage.setItem(VIDEO_CUSTOM_KEY,JSON.stringify(customVideos().filter(item=>item.key!==key))); }catch{}
    go('videos/mine');
  }
});

document.addEventListener('change',event=>{
  if(event.target.matches('[data-video-pause]')){ videoPauseEvery=Number(event.target.value); videoNextPause=0; }
});

document.addEventListener('input',event=>{
  if(event.target.id!=='videoNotes') return;
  const key=event.target.closest('[data-video-key]')?.dataset.videoKey;
  if(key) saveVideoState(key,entry=>{ entry.notes=event.target.value.slice(0,4000); });
});

document.addEventListener('submit',async event=>{
  if(event.target.matches('[data-video-add]')){
    event.preventDefault();
    const input=$('#videoLink');
    const parsed=parseYouTubeLink(input.value);
    if(!parsed){ input.setCustomValidity('Bitte einen YouTube-Link einfügen'); input.reportValidity(); input.setCustomValidity(''); return; }
    const key=parsed.yt?`c-${parsed.yt}`:`cl-${parsed.list}`;
    const list=customVideos().filter(item=>item.key!==key);
    list.unshift({key,...parsed,title:parsed.yt?'Mein Video':'Meine Playlist',channel:'YouTube',kind:parsed.yt?'Video':'Playlist'});
    try{ localStorage.setItem(VIDEO_CUSTOM_KEY,JSON.stringify(list.slice(0,100))); }catch{}
    go(`videos/play/${key}`);
    return;
  }
  if(event.target.matches('[data-video-word]')){
    event.preventDefault();
    const word=$('#videoWord').value.trim();
    const result=$('#videoWordResult');
    if(!word) return;
    result.textContent='…';
    const known=knownWordTranslation(word);
    try{
      const meaning=known||await requestTranslation(word,'de','ar');
      rememberTappedWord(word,meaning,'');
      result.innerHTML=`<b lang="de">${escapeHtml(word)}</b> = <span lang="ar" dir="rtl">${escapeHtml(meaning)}</span> · <button type="button" class="pr-link" onclick="go('my-words')">in «Meine Wörter» gespeichert</button>`;
      $('#videoWord').value='';
    }catch{
      result.innerHTML='<span lang="ar" dir="rtl">الترجمة محتاجة نت. جرّب تاني.</span>';
    }
  }
});

window.addEventListener('hashchange',()=>{ if(!location.hash.startsWith('#videos/play/')) stopVideoPlayer(); });

// Router entry: videos, videos/<filter>, videos/play/<key>.
function routeVideos(hash){
  if(hash==='videos'){ stopVideoPlayer(); renderVideoList(); return true; }
  const filter=hash.match(/^videos\/(a1|a2|b1|mine)$/);
  if(filter){ stopVideoPlayer(); renderVideoList(filter[1]); return true; }
  const play=hash.match(/^videos\/play\/([\w-]+)$/);
  if(play){ renderVideoPlayer(play[1]); return true; }
  return false;
}
