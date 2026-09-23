/* ===================== chapter podcasts ===================== */
let podcastState=null;
let podcastSession=0;
let podcastAudio=null;
let podcastFrameId=null;
let podcastTranslationMode=localStorage.getItem('podcastTranslationMode')||'below';
let podcastSwitchLanguage=localStorage.getItem('podcastSwitchLanguage')||'de';
let podcastPlaybackRate=Math.max(.75,Math.min(1.5,Number(localStorage.getItem('podcastPlaybackRate')||1)));

function stopPodcast(){
  podcastSession++;
  if(podcastFrameId){cancelAnimationFrame(podcastFrameId);podcastFrameId=null;}
  if(podcastAudio){
    podcastAudio.pause();
    podcastAudio.src='';
    podcastAudio=null;
  }
  if(podcastState){
    podcastState.playing=false;
    podcastState.paused=false;
  }
  if(speech) speech.cancel();
}

function podcastCover(chapter){
  return chapter?.visual?.src||`assets/chapters/chapter-${chapter?.num||1}.webp`;
}

function renderLazyDataLoading(title,loader,render){
  const route=location.hash;
  if(loader.ready()) return false;
  setTop(title,'Wird geladen …',true);
  view.innerHTML=`<div class="card" role="status" aria-live="polite" style="text-align:center;padding:28px">Inhalte werden geladen …${ar('جاري تحميل المحتوى…')}</div>`;
  loader.load().then(()=>{ if(location.hash===route) render(); })
    .catch(()=>{ if(location.hash===route) view.innerHTML=`<div class="card" role="alert" style="text-align:center;padding:28px">Die Inhalte konnten nicht geladen werden. Bitte prüfe deine Verbindung.${ar('تعذر تحميل المحتوى. تأكد من الاتصال بالإنترنت.')}</div>`; });
  return true;
}

const PODCAST_LOADER={ready:()=>Boolean(window.A2_PODCASTS),load:ensurePodcasts};

function renderPodcastHome(){
  if(renderLazyDataLoading('Podcast',PODCAST_LOADER,renderPodcastHome)) return;
  PODCASTS=window.A2_PODCASTS;
  setTop('Podcast','12 Kapitel · hören und mitlesen',false);
  document.body.classList.add('has-back');
  view.innerHTML=mainTabs('podcast')+`
    <section class="card podcast-hero">
      <h2>Deutsch im Ohr</h2>
      <p>Zwölf kurze Gespräche auf A2-Niveau. Jede Folge wiederholt Wortschatz, Redemittel und Grammatik aus einem Kapitel.</p>
      ${ar('١٢ حلقة قصيرة، حلقة لكل درس. اسمع الحوار وتابع السكريبت المتزامن، وشغّل الترجمة بالطريقة المناسبة لك.')}
    </section>
    <div class="podcast-grid">${PODCASTS.map(episode=>{
      const chapter=BOOK.find(item=>item.num===episode.chapter);
      const saved=Number(localStorage.getItem(`podcastProgress:${episode.chapter}`)||0);
      return `<button type="button" class="card podcast-card" onclick="go('podcast/${episode.chapter}')">
        <div class="podcast-cover"><img src="${podcastCover(chapter)}" alt=""><span class="podcast-number">Folge ${episode.chapter}</span></div>
        <div class="podcast-copy"><h3>${episode.title}</h3><p>${episode.intro}</p>
          <div class="podcast-meta"><span>${episode.duration}</span><span>${episode.speakers.join(' + ')}</span>
            ${saved?`<span>${Math.min(100,Math.round(saved/episode.lines.length*100))}% gehört</span>`:''}</div>
        </div>
      </button>`;
    }).join('')}</div>`;
}

function renderPodcastWords(text,lineIndex){
  let wordIndex=0;
  return escapeHtml(text).split(/(\s+)/).map(part=>{
    if(!part.trim())return part;
    return `<span class="podcast-word" data-line="${lineIndex}" data-word="${wordIndex++}">${part}</span>`;
  }).join('');
}

function podcastLineValue(line,key,index){
  return line?.[key]??line?.[index]??'';
}

function renderPodcastEpisode(chapterNumber){
  if(renderLazyDataLoading('Podcast',PODCAST_LOADER,()=>renderPodcastEpisode(chapterNumber))) return;
  PODCASTS=window.A2_PODCASTS;
  const episode=PODCASTS.find(item=>item.chapter===chapterNumber);
  const chapter=BOOK.find(item=>item.num===chapterNumber);
  if(!episode){renderPodcastHome();return;}
  const saved=Math.min(Number(localStorage.getItem(`podcastProgress:${chapterNumber}`)||0),episode.lines.length-1);
  podcastState={episode,index:saved,playing:false,paused:false};
  setTop(`Podcast ${chapterNumber}`,episode.title,true);
  view.innerHTML=mainTabs('podcast')+`
    <article class="card podcast-player">
      <div class="podcast-player-cover"><img src="${podcastCover(chapter)}" alt="${escapeHtml(episode.title)}">
        <div class="podcast-player-title"><small>FOLGE ${chapterNumber} · ${episode.duration}</small>
          <h2>${episode.title}</h2><p>${episode.intro}</p></div>
      </div>
      <div class="podcast-controls">
        <div class="podcast-main-controls">
          <button type="button" class="podcast-skip" onclick="seekPodcastSeconds(-5)" aria-label="Fünf Sekunden zurück">−5 s</button>
          <button type="button" class="podcast-skip" onclick="skipPodcast(-1)">Satz zurück</button>
          <button type="button" class="podcast-play" id="podcastPlay" onclick="togglePodcast()" aria-label="Podcast abspielen">▶</button>
          <button type="button" class="podcast-skip" onclick="skipPodcast(1)">Satz weiter</button>
          <button type="button" class="podcast-skip" onclick="seekPodcastSeconds(5)" aria-label="Fünf Sekunden vor">+5 s</button>
        </div>
        <div class="podcast-progress"><span id="podcastProgress"></span></div>
        <div class="podcast-position"><span id="podcastPosition">Satz ${saved+1} / ${episode.lines.length}</span>
          <span>${episode.people?.map(person=>`${person.name}, ${person.age}`).join(' · ')||episode.speakers.join(' · ')}</span></div>
        <div class="podcast-options">
          <div class="podcast-mode">
            <button type="button" data-podcast-mode="below" onclick="setPodcastMode('below')">Deutsch + عربي</button>
            <button type="button" data-podcast-mode="switch" onclick="setPodcastMode('switch')">Deutsch ↔ عربي</button>
          </div>
          <label class="podcast-rate">Tempo <select onchange="setPodcastPlaybackRate(this.value)" aria-label="Wiedergabegeschwindigkeit">${[.75,1,1.25,1.5].map(rate=>`<option value="${rate}" ${rate===podcastPlaybackRate?'selected':''}>${rate}×</option>`).join('')}</select></label>
          <button type="button" class="podcast-language" id="podcastLanguage" onclick="togglePodcastLanguage()">Deutsch anzeigen</button>
        </div>
      </div>
      <div class="podcast-keywords">${episode.keywords.map(word=>`<span>${word}</span>`).join('')}</div>
    </article>
    <p class="podcast-note">Klicke auf einen Satz, um direkt dort weiterzuhören. Die aktuelle Zeile und das gesprochene Wort werden markiert.</p>
    <section class="podcast-transcript">${episode.lines.map((line,index)=>{
      const speaker=podcastLineValue(line,'speaker',0);
      const de=podcastLineValue(line,'de',1);
      const arText=podcastLineValue(line,'ar',2);
      const speakerIndex=episode.speakers.indexOf(speaker);
      return `<article class="podcast-line" id="podcastLine${index}" data-speaker="${speakerIndex}" role="button" tabindex="0"
        aria-label="Satz ${index+1} abspielen" data-kind="${escapeHtml(line.kind||'dialogue')}" onclick="seekPodcast(${index})"
        onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();seekPodcast(${index})}">
        <div class="speaker-avatar">${escapeHtml(speaker.slice(0,2).toUpperCase())}</div>
        <div><div class="podcast-speaker">${escapeHtml(speaker)}</div>
          <div class="podcast-de">${renderPodcastWords(de,index)}</div>
          <div class="podcast-ar" lang="ar" dir="rtl">${escapeHtml(arText)}</div></div>
      </article>`;
    }).join('')}</section>`;
  setPodcastMode(podcastTranslationMode,false);
  setPodcastActiveLine(saved);
}

function podcastVoices(){
  const voices=germanVoices();
  const preferred=voices.findIndex(voice=>voice.voiceURI===speechVoiceURI);
  if(preferred>0)voices.unshift(...voices.splice(preferred,1));
  return voices;
}

function playPodcast(fromIndex=podcastState?.index||0){
  if(!podcastState)return;
  const {episode}=podcastState;
  podcastState.index=Math.max(0,Math.min(fromIndex,episode.lines.length-1));
  podcastState.playing=true;
  podcastState.paused=false;
  $$('.podcast-word.current').forEach(word=>word.classList.remove('current'));
  setPodcastActiveLine(podcastState.index);
  highlightPodcastWord(podcastState.index,0);
  if(episode.audio){
    if(!podcastAudio||podcastAudio.dataset.chapter!==String(episode.chapter)){
      if(podcastAudio)podcastAudio.pause();
      podcastAudio=new Audio(episode.audio);
      podcastAudio.dataset.chapter=String(episode.chapter);
      podcastAudio.preload='metadata';
      podcastAudio.addEventListener('ended',finishPodcastAudio);
      podcastAudio.addEventListener('error',()=>showSpeechStatus('تعذر تحميل ملف الحلقة'));
    }
    const line=episode.lines[podcastState.index];
    podcastAudio.currentTime=Number(line.start||0);
    // The global default (.85) was tuned for browser TTS; recorded podcasts should play at natural 1.0x.
    podcastAudio.playbackRate=podcastPlaybackRate;
    podcastAudio.play().then(()=>{
      podcastState.playing=true;
      podcastState.paused=false;
      syncPodcastAudio();
      updatePodcastControls();
    }).catch(()=>{
      podcastState.playing=false;
      podcastState.paused=false;
      updatePodcastControls();
      showSpeechStatus('اضغط تشغيل مرة أخرى لبدء الصوت');
    });
    return;
  }
  playPodcastWithSpeech();
}

function playPodcastWithSpeech(){
  if(!podcastState||!speech)return;
  speech.cancel();
  const session=++podcastSession;
  const {episode}=podcastState;
  const voices=podcastVoices();
  const profile={
    clear:{rate:1,pitch:1},calm:{rate:.82,pitch:.94},deep:{rate:.9,pitch:.82},bright:{rate:1.05,pitch:1.12}
  }[speechProfile]||{rate:1,pitch:1};
  for(let index=podcastState.index;index<episode.lines.length;index++){
    const line=episode.lines[index];
    const speaker=podcastLineValue(line,'speaker',0);
    const de=podcastLineValue(line,'de',1);
    const speakerIndex=Math.max(0,episode.speakers.indexOf(speaker));
    const utterance=new SpeechSynthesisUtterance(de);
    utterance.lang='de-DE';
    utterance.voice=voices.length?voices[speakerIndex%voices.length]:null;
    utterance.rate=Math.max(.5,Math.min(1.5,speechRate*profile.rate));
    utterance.pitch=voices.length>1?profile.pitch:Math.max(.65,Math.min(1.35,profile.pitch+(speakerIndex?.12:-.04)));
    utterance.onstart=()=>{
      if(session!==podcastSession)return;
      podcastState.index=index;
      setPodcastActiveLine(index);
      highlightPodcastWord(index,0);
      updatePodcastControls();
      const name=utterance.voice?.name?.replace(/^Microsoft\s+/,'').replace(/\s*-\s*German.*$/i,'')||speaker;
      showSpeechStatus(`${name}: ${de.slice(0,58)}`);
    };
    utterance.onboundary=event=>{
      if(session!==podcastSession||event.name&&event.name!=='word')return;
      highlightPodcastWord(index,event.charIndex);
    };
    utterance.onend=()=>{
      if(session!==podcastSession)return;
      clearPodcastWords(index);
      localStorage.setItem(`podcastProgress:${episode.chapter}`,String(Math.min(index+1,episode.lines.length)));
      if(index===episode.lines.length-1){
        podcastState.playing=false;
        podcastState.paused=false;
        podcastState.index=0;
        updatePodcastControls();
        $('#speechStatus').classList.remove('show');
      }
    };
    speech.speak(utterance);
  }
  updatePodcastControls();
}

function syncPodcastAudio(){
  if(!podcastAudio||!podcastState||podcastAudio.paused)return;
  const time=podcastAudio.currentTime;
  const lines=podcastState.episode.lines;
  let index=podcastState.index;
  if(time<Number(lines[index]?.start||0)||time>Number(lines[index]?.end||0)+Number(lines[index]?.pauseAfter||0)){
    const found=lines.findIndex((line,lineIndex)=>{
      const next=lines[lineIndex+1];
      return time>=Number(line.start||0)&&time<(next?Number(next.start):Infinity);
    });
    if(found>=0)index=found;
  }
  if(index!==podcastState.index){
    podcastState.index=index;
    setPodcastActiveLine(index);
    localStorage.setItem(`podcastProgress:${podcastState.episode.chapter}`,String(index));
  }
  highlightPodcastWordByTime(index,time);
  updatePodcastControls();
  podcastFrameId=requestAnimationFrame(syncPodcastAudio);
}

function highlightPodcastWordByTime(lineIndex,time){
  const line=podcastState?.episode.lines[lineIndex];
  if(!line)return;
  const start=Number(line.start||0);
  const end=Math.max(start+.1,Number(line.end||start+.1));
  const words=$$(`.podcast-word[data-line="${lineIndex}"]`);
  words.forEach(word=>word.classList.remove('current'));
  if(time>end||!words.length)return;
  const relativeTime=time-start;
  const timings=Array.isArray(line.wordTimings)?line.wordTimings:[];
  if(timings.length){
    const timing=timings.find(item=>relativeTime>=Number(item.start)&&relativeTime<Number(item.end));
    if(timing)words[Number(timing.token)]?.classList.add('current');
    return;
  }
  const ratio=Math.max(0,Math.min(.999,(time-start)/(end-start)));
  words[Math.floor(ratio*words.length)]?.classList.add('current');
}

function finishPodcastAudio(){
  if(!podcastState)return;
  podcastState.playing=false;
  podcastState.paused=false;
  podcastState.index=0;
  if(podcastFrameId){cancelAnimationFrame(podcastFrameId);podcastFrameId=null;}
  updatePodcastControls();
}

function togglePodcast(){
  if(!podcastState)return;
  if(!podcastState.playing){playPodcast(podcastState.index);return;}
  if(podcastState.paused){
    if(podcastAudio)podcastAudio.play().then(syncPodcastAudio);else speech?.resume();
    podcastState.paused=false;
  }else{
    if(podcastAudio)podcastAudio.pause();else speech?.pause();
    podcastState.paused=true;
    if(podcastFrameId){cancelAnimationFrame(podcastFrameId);podcastFrameId=null;}
  }
  updatePodcastControls();
}

function skipPodcast(direction){
  if(!podcastState)return;
  const next=(podcastState.index+direction+podcastState.episode.lines.length)%podcastState.episode.lines.length;
  playPodcast(next);
}

function seekPodcast(index){playPodcast(index);}

function seekPodcastSeconds(seconds){
  if(podcastAudio&&Number.isFinite(podcastAudio.duration)){
    podcastAudio.currentTime=Math.max(0,Math.min(podcastAudio.duration,podcastAudio.currentTime+seconds));
    if(podcastAudio.paused){
      podcastAudio.play().then(()=>{podcastState.playing=true;podcastState.paused=false;syncPodcastAudio();updatePodcastControls();});
    }
    return;
  }
  skipPodcast(seconds<0?-1:1);
}

function setPodcastPlaybackRate(value){
  podcastPlaybackRate=Math.max(.75,Math.min(1.5,Number(value)||1));
  localStorage.setItem('podcastPlaybackRate',String(podcastPlaybackRate));
  if(podcastAudio)podcastAudio.playbackRate=podcastPlaybackRate;
}

function setPodcastActiveLine(index){
  $$('.podcast-line').forEach((line,lineIndex)=>line.classList.toggle('active',lineIndex===index));
  updatePodcastControls();
  const active=$(`#podcastLine${index}`);
  if(podcastState?.playing&&active)active.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'center'});
}

function highlightPodcastWord(lineIndex,charIndex){
  clearPodcastWords(lineIndex);
  const text=podcastLineValue(podcastState?.episode.lines[lineIndex],'de',1);
  const starts=[...text.matchAll(/\S+/g)].map(match=>match.index);
  let wordIndex=0;
  starts.forEach((start,index)=>{if(start<=charIndex)wordIndex=index;});
  $(`.podcast-word[data-line="${lineIndex}"][data-word="${wordIndex}"]`)?.classList.add('current');
}

function clearPodcastWords(lineIndex){
  $$(`.podcast-word[data-line="${lineIndex}"]`).forEach(word=>word.classList.remove('current'));
}

function updatePodcastControls(){
  if(!podcastState)return;
  const play=$('#podcastPlay');
  if(play){
    play.textContent=podcastState.playing&&!podcastState.paused?'Ⅱ':'▶';
    play.setAttribute('aria-label',podcastState.playing&&!podcastState.paused?'Podcast pausieren':'Podcast abspielen');
  }
  const progress=$('#podcastProgress');
  if(progress){
    const total=Number(podcastState.episode.durationSeconds||0);
    const ratio=podcastAudio&&total?Math.min(1,podcastAudio.currentTime/total)
      :(podcastState.index+1)/podcastState.episode.lines.length;
    progress.style.transform=`scaleX(${ratio})`;
  }
  const position=$('#podcastPosition');
  if(position){
    const current=podcastAudio?podcastAudio.currentTime:0;
    const total=Number(podcastState.episode.durationSeconds||0);
    const format=value=>`${Math.floor(value/60)}:${String(Math.floor(value%60)).padStart(2,'0')}`;
    position.textContent=total?`${format(current)} / ${format(total)} · Satz ${podcastState.index+1}`
      :`Satz ${podcastState.index+1} / ${podcastState.episode.lines.length}`;
  }
}

function setPodcastMode(mode,persist=true){
  podcastTranslationMode=mode==='switch'?'switch':'below';
  if(persist)localStorage.setItem('podcastTranslationMode',podcastTranslationMode);
  $$('[data-podcast-mode]').forEach(button=>button.classList.toggle('active',button.dataset.podcastMode===podcastTranslationMode));
  $$('.podcast-line').forEach(line=>{
    const arabic=line.querySelector('.podcast-ar');
    arabic?.classList.toggle('switch-only',podcastTranslationMode==='switch');
    line.classList.toggle('switch-ar',podcastTranslationMode==='switch'&&podcastSwitchLanguage==='ar');
  });
  const language=$('#podcastLanguage');
  if(language){
    language.style.display=podcastTranslationMode==='switch'?'block':'none';
    language.textContent=podcastSwitchLanguage==='de'?'عربي anzeigen':'Deutsch anzeigen';
  }
}

function togglePodcastLanguage(){
  podcastSwitchLanguage=podcastSwitchLanguage==='de'?'ar':'de';
  localStorage.setItem('podcastSwitchLanguage',podcastSwitchLanguage);
  setPodcastMode('switch',false);
}
